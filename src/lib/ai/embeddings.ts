import { GoogleGenerativeAI } from "@google/generative-ai";

const EMBEDDING_MODEL = "text-embedding-004";

/** Create client lazily so dotenv has time to load .env.local first */
function getClient() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY is not set in .env.local");
  return new GoogleGenerativeAI(key);
}

/**
 * Generate an embedding vector for a given text string using Gemini.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const model = getClient().getGenerativeModel({ model: EMBEDDING_MODEL });
  const result = await model.embedContent(text.replace(/\n/g, " ").trim());
  return result.embedding.values;
}

/**
 * Compute cosine similarity between two vectors.
 * Returns a value between -1 and 1 (higher = more similar).
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;

  let dot = 0;
  let magA = 0;
  let magB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }

  const magnitude = Math.sqrt(magA) * Math.sqrt(magB);
  return magnitude === 0 ? 0 : dot / magnitude;
}
