export const CINEMATIC_DEBUG = typeof process !== "undefined" ? process.env.NEXT_PUBLIC_CINEMATIC_DEBUG === "true" : false;

export const CHAPTERS = {
  OPENING: 0,
  FRAGMENTED: 1,
  MAPPING: 2,
  ARCHITECTURE: 3,
  TRUST: 4,
  PROOF: 5,
  FINAL: 6,
} as const;

export type ChapterIndex = typeof CHAPTERS[keyof typeof CHAPTERS];

export interface ChapterConfig {
  id: string;
  index: ChapterIndex;
  title: string;
  startProgress: number; // scroll percentage start (static fallback)
  endProgress: number;   // scroll percentage end (static fallback)
}

export const CHAPTER_CONFIGS: Record<ChapterIndex, ChapterConfig> = {
  [CHAPTERS.OPENING]: {
    id: "opening",
    index: CHAPTERS.OPENING,
    title: "Opening: Core System",
    startProgress: 0.0,
    endProgress: 0.14,
  },
  [CHAPTERS.FRAGMENTED]: {
    id: "fragmented",
    index: CHAPTERS.FRAGMENTED,
    title: "Fragmented Workflow",
    startProgress: 0.14,
    endProgress: 0.28,
  },
  [CHAPTERS.MAPPING]: {
    id: "mapping",
    index: CHAPTERS.MAPPING,
    title: "Mapping the System",
    startProgress: 0.28,
    endProgress: 0.42,
  },
  [CHAPTERS.ARCHITECTURE]: {
    id: "architecture",
    index: CHAPTERS.ARCHITECTURE,
    title: "Architecture Stack",
    startProgress: 0.42,
    endProgress: 0.56,
  },
  [CHAPTERS.TRUST]: {
    id: "trust",
    index: CHAPTERS.TRUST,
    title: "Human Trust",
    startProgress: 0.56,
    endProgress: 0.70,
  },
  [CHAPTERS.PROOF]: {
    id: "proof",
    index: CHAPTERS.PROOF,
    title: "Proof Systems",
    startProgress: 0.70,
    endProgress: 0.85,
  },
  [CHAPTERS.FINAL]: {
    id: "final",
    index: CHAPTERS.FINAL,
    title: "Final Assembly",
    startProgress: 0.85,
    endProgress: 1.0,
  },
};
