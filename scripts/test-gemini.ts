import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import { GoogleGenerativeAI } from "@google/generative-ai";

const MODELS_TO_TRY = [
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-1.5-flash",
  "gemini-1.5-flash-latest",
  "gemini-1.5-pro",
  "gemini-pro",
  "gemini-2.0-flash-exp",
  "gemini-2.5-flash",
];

async function testKey() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    console.error("❌  GEMINI_API_KEY not found in .env.local");
    process.exit(1);
  }

  console.log("🔑  Key found:", key.slice(0, 10) + "...\n");

  const genAI = new GoogleGenerativeAI(key);

  for (const modelName of MODELS_TO_TRY) {
    try {
      process.stdout.write(`Testing ${modelName.padEnd(30)} → `);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Say: OK");
      console.log("✅  WORKS! Response:", result.response.text().trim().slice(0, 40));
      console.log(`\n🎉  Use this model: "${modelName}"`);
      return modelName;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("404")) console.log("❌  Not found");
      else if (msg.includes("403")) console.log("❌  Forbidden");
      else if (msg.includes("401")) console.log("❌  Unauthorized");
      else console.log("❌ ", msg.slice(0, 60));
    }
  }

  console.log("\n⚠️  No working model found. Try getting a fresh API key from aistudio.google.com");
}

testKey();
