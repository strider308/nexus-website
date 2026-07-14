"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollDirectorProps {
  scrollRef: React.MutableRefObject<number>;
  onChapterChange: (chapter: number) => void;
}

interface ChapterRange {
  index: number;
  start: number;
  end: number;
}

export function ScrollDirector({ scrollRef, onChapterChange }: ScrollDirectorProps) {
  useEffect(() => {
    let lastChapter = -1;
    let cachedRanges: ChapterRange[] = [];

    const recalculateRanges = () => {
      const sections = document.querySelectorAll("[data-chapter-index]");
      if (sections.length === 0) return;
      
      const heights = Array.from(sections).map((s) => s.getBoundingClientRect().height);
      const totalHeight = heights.reduce((sum, h) => sum + h, 0);

      let currentOffset = 0;
      cachedRanges = heights.map((h, idx) => {
        const start = currentOffset / totalHeight;
        const end = (currentOffset + h) / totalHeight;
        currentOffset += h;
        return { index: idx, start, end };
      });
    };

    // Calculate initial ranges
    recalculateRanges();

    // Trigger on resize
    window.addEventListener("resize", recalculateRanges);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          scrollRef.current = progress;
          
          let currentChapter = 0;
          for (const range of cachedRanges) {
            if (progress >= range.start && progress <= range.end) {
              currentChapter = range.index;
              break;
            }
          }

          if (currentChapter !== lastChapter) {
            lastChapter = currentChapter;
            onChapterChange(currentChapter);
          }
        },
      });
    });

    return () => {
      window.removeEventListener("resize", recalculateRanges);
      ctx.revert();
    };
  }, [scrollRef, onChapterChange]);

  return null;
}
export default ScrollDirector;
