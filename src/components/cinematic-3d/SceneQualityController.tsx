"use client";

import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useCinematic3D } from "./Cinematic3DProvider";

export function SceneQualityController() {
  const { quality, setQuality, setWebglError } = useCinematic3D();
  const { gl } = useThree();

  const frameTimes = useRef<number[]>([]);
  const lastTime = useRef<number | null>(null);
  const downgradeCount = useRef(0);

  // Monitor canvas errors directly from the GL context
  useEffect(() => {
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.warn("WebGL Context Lost. Swapping to fallback visual...");
      setWebglError(true);
    };

    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", handleContextLost);
    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost);
    };
  }, [gl, setWebglError]);

  useFrame(() => {
    const now = performance.now();
    if (lastTime.current === null) {
      lastTime.current = now;
      return;
    }
    const delta = now - lastTime.current;
    lastTime.current = now;

    // Track frame delta times (sliding window of 120 frames ~ 2 seconds at 60fps)
    frameTimes.current.push(delta);
    if (frameTimes.current.length > 120) {
      frameTimes.current.shift();
    }

    // Run performance audit every 120 frames
    if (frameTimes.current.length === 120) {
      const averageFrameTime =
        frameTimes.current.reduce((sum, val) => sum + val, 0) / 120;
      
      // 1000ms / 45fps ≈ 22.2ms per frame
      if (averageFrameTime > 22.2) {
        downgradeCount.current += 1;
        
        // If poor performance persists for 3 consecutive checks (approx 6 seconds)
        if (downgradeCount.current >= 3) {
          if (quality.dpr > 1.0) {
            console.warn(`Performance degradation detected (average frame time: ${averageFrameTime.toFixed(1)}ms). Downgrading DPR.`);
            setQuality((prev) => ({
              ...prev,
              dpr: 1.0,
              reducedDetail: true,
            }));
            gl.setPixelRatio(1.0);
          } else {
            console.warn("DPR already at minimum, but framerate remains low. Reverting to static fallback.");
            setWebglError(true);
          }
          // Reset tracker
          downgradeCount.current = 0;
          frameTimes.current = [];
        }
      } else {
        // Slow recovery if performance is good
        if (downgradeCount.current > 0) {
          downgradeCount.current -= 0.5;
        }
      }
    }
  });

  return null;
}
