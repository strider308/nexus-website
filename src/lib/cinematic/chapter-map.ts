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
  [CHAPTERS.PROOF]: {
    position: [-1.2, 1.2, 4.5],
    target: [0, 0.2, -0.5],
  },
  [CHAPTERS.FINAL]: {
    position: [0, 0, 5.2],
    target: [0, 0, 0],
  },
};

// Returns interpolated camera properties based on global scroll progress [0, 1]
export function getCameraPointForProgress(progress: number): CameraPoint {
  // Clamp progress
  const p = Math.max(0, Math.min(1, progress));

  const keys = Object.keys(CAMERA_POINTS).map(Number) as ChapterIndex[];
  
  // Find which chapter span we are currently in
  for (let i = 0; i < keys.length - 1; i++) {
    const currentIdx = keys[i];
    const nextIdx = keys[i + 1];
    
    // Simple segment mapping
    const segStart = i / (keys.length - 1);
    const segEnd = (i + 1) / (keys.length - 1);
    
    if (p >= segStart && p <= segEnd) {
      const segProgress = (p - segStart) / (segEnd - segStart);
      
      const startPoint = CAMERA_POINTS[currentIdx];
      const endPoint = CAMERA_POINTS[nextIdx];
      
      // Interpolate position
      const position: [number, number, number] = [
        startPoint.position[0] + (endPoint.position[0] - startPoint.position[0]) * segProgress,
        startPoint.position[1] + (endPoint.position[1] - startPoint.position[1]) * segProgress,
        startPoint.position[2] + (endPoint.position[2] - startPoint.position[2]) * segProgress,
      ];
      
      // Interpolate target
      const target: [number, number, number] = [
        startPoint.target[0] + (endPoint.target[0] - startPoint.target[0]) * segProgress,
        startPoint.target[1] + (endPoint.target[1] - startPoint.target[1]) * segProgress,
        startPoint.target[2] + (endPoint.target[2] - startPoint.target[2]) * segProgress,
      ];
      
      return { position, target };
    }
  }
  
  return CAMERA_POINTS[CHAPTERS.FINAL];
}
