export interface KnowledgeChunk {
  id: string;
  content: string;
  source: string;
  title: string;
}

import precompiled from "@/data/knowledge_precompiled.json";

export function loadKnowledge(): KnowledgeChunk[] {
  return precompiled as KnowledgeChunk[];
}
