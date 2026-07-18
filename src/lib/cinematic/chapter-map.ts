import { ChapterIndex, CHAPTERS } from "./config";

export interface CameraPoint {
  position: [number, number, number];
  target: [number, number, number];
}

// Camera coordinates (position and target looking point) for each chapter.
// Designed to choreograph a smooth fly-through path along scroll.
export const CAMERA_POINTS: Record<ChapterIndex, CameraPoint> = {
  [CHAPTERS.OPENING]: {
    position: [0, 0, 5],
    target: [0, 0, 0],
  },
  [CHAPTERS.FRAGMENTED]: {
    position: [-1.8, 0.8, 4.2],
    target: [0.5, -0.2, 0],
  },
  [CHAPTERS.MAPPING]: {
    position: [0, 0, 4.8],
    target: [0, 0, 0],
  },
  [CHAPTERS.ARCHITECTURE]: {
    position: [2.2, 0.8, 3.8],
    target: [-0.2, -0.3, 0],
  },
  [CHAPTERS.TRUST]: {
    position: [1.2, -0.5, 4.5],
    target: [0, 0, 0],
  },
  [CHAPTERS.PROOF]: {
    position: [-1.2, 1.2, 4.5],
    target: [0, 0.2, -0.5],
  },
  [CHAPTERS.FINAL]: {
    position: [0, 0, 5.2],
    target: [0, 0, 0],
  },
};

export interface ChapterRange {
  index: number;
  start: number;
  end: number;
}

// Returns interpolated camera properties based on global scroll progress [0, 1]
export function getCameraPointForProgress(progress: number, ranges: ChapterRange[]): CameraPoint {
  // Clamp progress
  const p = Math.max(0, Math.min(1, progress));

  const smoothstep = (x: number) => x * x * (3 - 2 * x);

  const keys = Object.keys(CAMERA_POINTS).map(Number) as ChapterIndex[];

  if (!ranges || ranges.length === 0) {
    // Simple segment mapping fallback
    for (let i = 0; i < keys.length - 1; i++) {
      const currentIdx = keys[i];
      const nextIdx = keys[i + 1];
      
      const segStart = i / (keys.length - 1);
      const segEnd = (i + 1) / (keys.length - 1);
      
      if (p >= segStart && p <= segEnd) {
        const segProgress = (p - segStart) / (segEnd - segStart);
        const eased = smoothstep(segProgress);
        return interpolatePoints(currentIdx, nextIdx, eased);
      }
    }
    return CAMERA_POINTS[CHAPTERS.FINAL];
  }

  // Map progress using actual measured chapter ranges
  for (let i = 0; i < ranges.length; i++) {
    const range = ranges[i];
    if (p >= range.start && p <= range.end) {
      const rangeSpan = range.end - range.start;
      const localProgress = rangeSpan > 0 ? (p - range.start) / rangeSpan : 0;
      const clampedLocal = Math.max(0, Math.min(1, localProgress));
      const easedLocal = smoothstep(clampedLocal);
      
      const currentIdx = range.index as ChapterIndex;
      const nextIdx = Math.min(keys.length - 1, currentIdx + 1) as ChapterIndex;
      
      return interpolatePoints(currentIdx, nextIdx, easedLocal);
    }
  }
  
  return CAMERA_POINTS[CHAPTERS.FINAL];
}

function interpolatePoints(currentIdx: ChapterIndex, nextIdx: ChapterIndex, t: number): CameraPoint {
  const startPoint = CAMERA_POINTS[currentIdx];
  const endPoint = CAMERA_POINTS[nextIdx];
  
  return {
    position: [
      startPoint.position[0] + (endPoint.position[0] - startPoint.position[0]) * t,
      startPoint.position[1] + (endPoint.position[1] - startPoint.position[1]) * t,
      startPoint.position[2] + (endPoint.position[2] - startPoint.position[2]) * t,
    ],
    target: [
      startPoint.target[0] + (endPoint.target[0] - startPoint.target[0]) * t,
      startPoint.target[1] + (endPoint.target[1] - startPoint.target[1]) * t,
      startPoint.target[2] + (endPoint.target[2] - startPoint.target[2]) * t,
    ],
  };
}
