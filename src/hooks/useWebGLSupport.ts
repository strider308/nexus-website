import { useState, useEffect } from "react";

export function useWebGLSupport(): boolean {
  const [supported, setSupported] = useState<boolean>(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const isSupported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      const frame = requestAnimationFrame(() => {
        setSupported(isSupported);
      });
      return () => cancelAnimationFrame(frame);
    } catch {
      const frame = requestAnimationFrame(() => {
        setSupported(false);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, []);

  return supported;
}
