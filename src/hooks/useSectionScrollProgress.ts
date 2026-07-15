"use client";

import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export function useSectionScrollProgress(startTrigger = "top bottom", endTrigger = "bottom top") {
  const elementRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      ScrollTrigger.create({
        trigger: elementRef.current,
        start: startTrigger,
        end: endTrigger,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });
    },
    { scope: elementRef }
  );

  return { elementRef, progress };
}

export default useSectionScrollProgress;
