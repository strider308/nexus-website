"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollDirectorProps {
  onProgress: (progress: number) => void;
}

export function ScrollDirector({ onProgress }: ScrollDirectorProps) {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        onProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [onProgress]);

  return null;
}
export default ScrollDirector;
