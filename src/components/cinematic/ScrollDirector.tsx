"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollDirectorProps {
  scrollRef: React.MutableRefObject<number>;
  onChapterChange: (chapter: number) => void;
}

export function ScrollDirector({ scrollRef, onChapterChange }: ScrollDirectorProps) {
  useEffect(() => {
    let lastChapter = -1;

    const getActiveChapter = (p: number) => {
      if (p < 0.15) return 0; // Opening
      if (p < 0.35) return 1; // Fragmented
      if (p < 0.55) return 2; // Mapping
      if (p < 0.75) return 3; // Architecture
      if (p < 0.90) return 4; // Proof
      return 5; // Final
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          scrollRef.current = progress;
          
          const currentChapter = getActiveChapter(progress);
          if (currentChapter !== lastChapter) {
            lastChapter = currentChapter;
            onChapterChange(currentChapter);
          }
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, [scrollRef, onChapterChange]);

  return null;
}
export default ScrollDirector;
