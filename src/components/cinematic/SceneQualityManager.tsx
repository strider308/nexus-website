"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

export function SceneQualityManager() {
  const { gl, invalidate } = useThree();

  useEffect(() => {
    // 1. Pause rendering when document becomes invisible (tab backgrounded)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        gl.info.autoReset = false;
      } else {
        gl.info.autoReset = true;
        invalidate(); // kick off render loop again
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [gl, invalidate]);

  return null;
}
