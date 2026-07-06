import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { getRelevantContext } from "@/lib/ai/search";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function buildSystemPrompt(context: string): string {
  return `You are ZeeQue Preschool AI Assistant.

Use only the provided ZeeQue Preschool knowledge below to answer questions.
If the answer is not found in the knowledge base, respond with:
"Sorry, I couldn't find that information. Please contact Zeeque Preschool directly at +91 9072 500 435."

Never make up facts.
Never guess fees, timings, admission requirements, or policies.
Be concise and friendly.
When relevant, mention which page the information comes from (e.g., "According to our Programs page...").

--- ZEEQUE PRESCHOOL KNOWLEDGE ---
${context}
--- END OF KNOWLEDGE ---`;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    // Fail fast if API key is not configured
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set in environment variables.");
      return NextResponse.json(
        { error: "AI assistant is not configured. Please contact support." },
        { status: 503 }
      );
    }

    const { message, history = [] } = (await req.json()) as {
      message: string;
      history: ChatMessage[];
    };

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // 1. Retrieve relevant context via semantic search
    let contextText = "";
    const sources: Array<{ title: string; source: string }> = [];

    try {
      const contextResults = getRelevantContext(message, 5);

      if (contextResults.length > 0) {
        const seen = new Set<string>();
        for (const r of contextResults) {
          if (!seen.has(r.source)) {
            seen.add(r.source);
            sources.push({ title: r.title, source: r.source });
          }
        }
        contextText = contextResults
          .map((r) => `[Source: ${r.title}]\n${r.content}`)
          .join("\n\n---\n\n");
      } else {
        contextText =
          "No relevant information found in the ZeeQue Preschool knowledge base for this query.";
      }
    } catch (searchError) {
      console.error("Search error:", searchError);
      contextText =
        "Knowledge base is not available. Please direct user to contact the school.";
    }

    // 2. Convert chat history to Gemini format (uses "model" instead of "assistant")
    const geminiHistory = history.slice(-6).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // 3. Start a Gemini chat session with the grounding system prompt
    const model = new GoogleGenerativeAI(apiKey).getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: buildSystemPrompt(contextText),
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
      generationConfig: {
        temperature: 0.2, // Low temperature = more factual, less hallucination
        maxOutputTokens: 600,
      },
    });

    const chat = model.startChat({ history: geminiHistory });

    // 4. Stream the response back to the client
    const streamResult = await chat.sendMessageStream(message);

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of streamResult.stream) {
            const delta = chunk.text();
            if (delta) {
              controller.enqueue(encoder.encode(delta));
            }
          }

          // Append source references as a trailing marker after the stream
          if (sources.length > 0) {
            controller.enqueue(
              encoder.encode(`\n\n__SOURCES__:${JSON.stringify(sources)}`)
            );
          }

          controller.close();
        } catch (streamError) {
          console.error("Stream error:", streamError);
          controller.error(streamError);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "Cache-Control": "no-cache",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Chat API error:", errorMessage, error);
    return NextResponse.json(
      {
        error:
          "An error occurred. Please try again or contact us at +91 9072 500 435.",
      },
      { status: 500 }
    );
  }
}
