export const CINEMATIC_DEBUG = typeof process !== "undefined" ? process.env.NEXT_PUBLIC_CINEMATIC_DEBUG === "true" : false;

export const CHAPTERS = {
  OPENING: 0,
  FRAGMENTED: 1,
  MAPPING: 2,
  ARCHITECTURE: 3,
  PROOF: 4,
  FINAL: 5,
} as const;

export type ChapterIndex = typeof CHAPTERS[keyof typeof CHAPTERS];

export interface ChapterConfig {
  id: string;
  index: ChapterIndex;
  title: string;
  startProgress: number; // scroll percentage start
  endProgress: number;   // scroll percentage end
}

export const CHAPTER_CONFIGS: Record<ChapterIndex, ChapterConfig> = {
  [CHAPTERS.OPENING]: {
    id: "opening",
    index: CHAPTERS.OPENING,
    title: "Opening: The System Awakens",
    startProgress: 0.0,
    endProgress: 0.15,
  },
  [CHAPTERS.FRAGMENTED]: {
    id: "fragmented",
    index: CHAPTERS.FRAGMENTED,
    title: "Fragmented Workflow",
    startProgress: 0.15,
    endProgress: 0.35,
  },
  [CHAPTERS.MAPPING]: {
    id: "mapping",
    index: CHAPTERS.MAPPING,
    title: "Mapping the System",
    startProgress: 0.35,
    endProgress: 0.55,
  },
  [CHAPTERS.ARCHITECTURE]: {
    id: "architecture",
    index: CHAPTERS.ARCHITECTURE,
    title: "Architecture Stack",
    startProgress: 0.55,
    endProgress: 0.75,
  },
  [CHAPTERS.PROOF]: {
    id: "proof",
    index: CHAPTERS.PROOF,
    title: "Proof Systems",
    startProgress: 0.75,
    endProgress: 0.90,
  },
  [CHAPTERS.FINAL]: {
    id: "final",
    index: CHAPTERS.FINAL,
    title: "Final Assembly",
    startProgress: 0.90,
    endProgress: 1.0,
  },
};
