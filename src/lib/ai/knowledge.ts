import fs from "fs";
import path from "path";

export interface KnowledgeChunk {
  id: string;
  content: string;
  source: string;
  title: string;
}

const KNOWLEDGE_DIR = path.join(process.cwd(), "src", "data", "knowledge");

const SOURCE_LABELS: Record<string, string> = {
  "about.md": "About Us",
  "programs.md": "Programs",
  "admissions.md": "Admissions",
  "contact.md": "Contact",
  "features.md": "Features",
  "faq.md": "FAQ",
};

/**
 * Split text into overlapping chunks of approximately maxTokens words.
 * Overlap helps preserve context at boundaries.
 */
function splitIntoChunks(
  text: string,
  maxWords = 300,
  overlapWords = 50
): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const chunks: string[] = [];
  let start = 0;

  while (start < words.length) {
    const end = Math.min(start + maxWords, words.length);
    chunks.push(words.slice(start, end).join(" "));
    if (end === words.length) break;
    start += maxWords - overlapWords;
  }

  return chunks;
}

/**
 * Load all knowledge markdown files and split into chunks.
 */
export function loadKnowledge(): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [];

  const files = fs
    .readdirSync(KNOWLEDGE_DIR)
    .filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const filePath = path.join(KNOWLEDGE_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const title = SOURCE_LABELS[file] ?? file.replace(".md", "");
    const source = file.replace(".md", "");

    // Extract H1 heading as document title if present
    const h1Match = raw.match(/^#\s+(.+)/m);
    const docTitle = h1Match ? h1Match[1].trim() : title;

    const textChunks = splitIntoChunks(raw, 300, 50);

    textChunks.forEach((chunk, idx) => {
      chunks.push({
        id: `${source}-${idx}`,
        content: chunk,
        source: source,
        title: docTitle,
      });
    });
  }

  return chunks;
}
