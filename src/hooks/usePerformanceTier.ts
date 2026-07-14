import { useState, useEffect } from "react";
import { useWebGLSupport } from "./useWebGLSupport";

export type PerformanceTier = "high" | "balanced" | "low" | "fallback";

export function usePerformanceTier(): PerformanceTier {
  const webgl = useWebGLSupport();
  const [tier, setTier] = useState<PerformanceTier>("balanced");

  useEffect(() => {
    if (!webgl) {
      const frame = requestAnimationFrame(() => {
        setTier("fallback");
      });
      return () => cancelAnimationFrame(frame);
    }

    if (typeof navigator !== "undefined") {
      const cores = navigator.hardwareConcurrency || 4;
      const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
      let calculatedTier: PerformanceTier = "balanced";

      if (isMobile) {
        calculatedTier = "low";
      } else if (cores >= 8) {
        calculatedTier = "high";
      } else {
        calculatedTier = "balanced";
      }

      const frame = requestAnimationFrame(() => {
        setTier(calculatedTier);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [webgl]);

  return tier;
}
