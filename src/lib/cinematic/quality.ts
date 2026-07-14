export interface QualitySettings {
  dpr: number;
  antialias: boolean;
  precision: "highp" | "mediump" | "lowp";
  shadows: boolean;
  bloom: boolean;
}

export const QUALITY_PRESETS: Record<"high" | "balanced" | "low" | "fallback", QualitySettings> = {
  high: {
    dpr: 1.5,
    antialias: true,
    precision: "highp",
    shadows: false, // strictly procedural lighting only initially
    bloom: false,
  },
  balanced: {
    dpr: 1.2,
    antialias: true,
    precision: "mediump",
    shadows: false,
    bloom: false,
  },
  low: {
    dpr: 1.0,
    antialias: false,
    precision: "lowp",
    shadows: false,
    bloom: false,
  },
  fallback: {
    dpr: 1.0,
    antialias: false,
    precision: "lowp",
    shadows: false,
    bloom: false,
  },
};
