/**
 * One-time script to generate OpenAI embeddings for all knowledge chunks
 * and persist them to data/embeddings.json.
 *
 * Usage:  npm run embed
 *
 * Re-run whenever knowledge markdown files change.
 */

import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load .env.local so OPENAI_API_KEY is available
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import { loadKnowledge } from "../src/lib/ai/knowledge";
import { generateEmbedding } from "../src/lib/ai/embeddings";

const OUTPUT_PATH = path.join(process.cwd(), "data", "embeddings.json");

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("❌  GEMINI_API_KEY is not set in .env.local");
    process.exit(1);
  }

  console.log("📚  Loading knowledge chunks…");
  const chunks = loadKnowledge();
  console.log(`✅  Loaded ${chunks.length} chunks from knowledge base.`);

  const results = [];
  let processed = 0;

  for (const chunk of chunks) {
    process.stdout.write(
      `\r⚡  Embedding chunk ${++processed}/${chunks.length}: ${chunk.id.padEnd(30)}`
    );

    const embedding = await generateEmbedding(chunk.content);
    results.push({ ...chunk, embedding });

    // Small delay to avoid rate limits on free tier
    await new Promise((r) => setTimeout(r, 100));
  }

  console.log("\n💾  Writing embeddings store…");

  // Ensure data/ directory exists
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2), "utf-8");
  console.log(`✅  Saved ${results.length} embeddings → ${OUTPUT_PATH}`);
  console.log("🎉  Done! You can now start the dev server.");
}

main().catch((err) => {
  console.error("\n❌  Error generating embeddings:", err.message);
  process.exit(1);
});
