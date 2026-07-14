/**
 * 3D Quality & Performance Scaler
 */

export interface QualityMetrics {
  dpr: number;
  shadowsEnabled: boolean;
  antialias: boolean;
  reducedDetail: boolean;
}

export function getQualityMetrics(preset: "low" | "medium" | "high" | "auto" | string): QualityMetrics {
  switch (preset) {
    case "low":
      return {
        dpr: 1.0,
        shadowsEnabled: false,
        antialias: false,
        reducedDetail: true,
      };
    case "medium":
      return {
        dpr: 1.2,
        shadowsEnabled: false,
        antialias: true,
        reducedDetail: false,
      };
    case "high":
      return {
        dpr: 1.5,
        shadowsEnabled: true,
        antialias: true,
        reducedDetail: false,
      };
    case "auto":
    default:
      // Default baseline quality, dynamically downgraded via SceneQualityController
      return {
        dpr: 1.2,
        shadowsEnabled: false,
        antialias: true,
        reducedDetail: false,
      };
  }
}
