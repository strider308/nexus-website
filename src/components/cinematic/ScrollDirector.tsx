"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollDirectorProps {
  scrollRef: React.MutableRefObject<number>;
  rangesRef: React.MutableRefObject<ChapterRange[]>;
  onChapterChange: (chapter: number) => void;
}

interface ChapterRange {
  index: number;
  start: number;
  end: number;
}

export function ScrollDirector({ scrollRef, rangesRef, onChapterChange }: ScrollDirectorProps) {
  useEffect(() => {
    let lastChapter = -1;
    let cachedRanges: ChapterRange[] = [];

    const recalculateRanges = () => {
      const sections = document.querySelectorAll("[data-chapter-index]");
      if (sections.length === 0) return;
      
      const heights = Array.from(sections).map((s) => s.getBoundingClientRect().height);
      const totalHeight = heights.reduce((sum, h) => sum + h, 0);

      let currentOffset = 0;
      const ranges = heights.map((h, idx) => {
        const start = currentOffset / totalHeight;
        const end = (currentOffset + h) / totalHeight;
        currentOffset += h;
        return { index: idx, start, end };
      });
      rangesRef.current = ranges;
      cachedRanges = ranges;
    };

    // Calculate initial ranges
    recalculateRanges();

    // Trigger on resize (debounced)
    let resizeTimeout: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        recalculateRanges();
        ScrollTrigger.refresh();
      }, 100);
    };

    // Observe size changes on narrative chapters to dynamic recalculate ranges
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    const sections = document.querySelectorAll("[data-chapter-index]");
    sections.forEach((sec) => resizeObserver.observe(sec));

    window.addEventListener("resize", handleResize);

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
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      if (resizeTimeout) clearTimeout(resizeTimeout);
      ctx.revert();
    };
  }, [scrollRef, rangesRef, onChapterChange]);

  return null;
}
export default ScrollDirector;
