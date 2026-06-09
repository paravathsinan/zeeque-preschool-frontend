import fs from "fs";
import path from "path";
import { loadKnowledge, KnowledgeChunk } from "./knowledge";

export interface ContextResult {
  content: string;
  source: string;
  title: string;
  score: number;
}

/* ─────────────────────────────────────────
   Load chunks fresh (no cache to allow hot-reloads)
───────────────────────────────────────── */
function getChunks(): KnowledgeChunk[] {
  return loadKnowledge();
}

/* ─────────────────────────────────────────
   Tokenizer & stopwords
───────────────────────────────────────── */
const STOPWORDS = new Set([
  "a", "an", "the", "is", "it", "in", "of", "to", "and", "or", "for",
  "on", "at", "by", "be", "as", "do", "if", "we", "i", "my", "you",
  "are", "was", "has", "have", "can", "will", "this", "that", "with",
  "from", "our", "your", "its", "how", "what", "when", "where", "which",
  "who", "not", "no", "so", "but", "me", "us", "about", "more", "any",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s\+]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

/* ─────────────────────────────────────────
   BM25-style relevance scoring
   (simplified: TF × IDF approximation)
───────────────────────────────────────── */
const K1 = 1.5; // term frequency saturation
const B = 0.75; // length normalization

function bm25Score(
  queryTokens: string[],
  chunkTokens: string[],
  avgDocLen: number
): number {
  const docLen = chunkTokens.length;
  const termFreq: Record<string, number> = {};
  for (const t of chunkTokens) termFreq[t] = (termFreq[t] ?? 0) + 1;

  let score = 0;
  for (const qt of queryTokens) {
    const tf = termFreq[qt] ?? 0;
    if (tf === 0) continue;
    // Simplified IDF — treat every query term as moderately rare
    const idf = 1.5;
    const numerator = tf * (K1 + 1);
    const denominator = tf + K1 * (1 - B + B * (docLen / avgDocLen));
    score += idf * (numerator / denominator);
  }

  return score;
}

/* ─────────────────────────────────────────
   Phrase bonus: boosts exact phrase matches
───────────────────────────────────────── */
function phraseBonus(query: string, content: string): number {
  const q = query.toLowerCase();
  const c = content.toLowerCase();
  let bonus = 0;

  // 2-3 word windows from the query
  const words = q.split(/\s+/).filter(Boolean);
  for (let len = 2; len <= 3; len++) {
    for (let i = 0; i <= words.length - len; i++) {
      const phrase = words.slice(i, i + len).join(" ");
      if (c.includes(phrase)) bonus += len * 0.8;
    }
  }
  return bonus;
}

/* ─────────────────────────────────────────
   Main export: retrieve top-K chunks
───────────────────────────────────────── */
export function getRelevantContext(
  question: string,
  topK = 5
): ContextResult[] {
  const chunks = getChunks();
  const queryTokens = tokenize(question);

  if (queryTokens.length === 0) return [];

  // Pre-tokenize all chunks and compute average doc length
  const tokenizedChunks = chunks.map((c) => tokenize(c.content));
  const avgDocLen =
    tokenizedChunks.reduce((sum, t) => sum + t.length, 0) /
    tokenizedChunks.length;

  const scored = chunks.map((chunk, idx) => {
    const bm25 = bm25Score(queryTokens, tokenizedChunks[idx], avgDocLen);
    const bonus = phraseBonus(question, chunk.content);
    return {
      content: chunk.content,
      source: chunk.source,
      title: chunk.title,
      score: bm25 + bonus,
    };
  });

  return scored
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
