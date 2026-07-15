"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";

interface ScrollProgressProps {
  accentColor?: string;
  className?: string;
}

export function ScrollProgress({
  accentColor = "#2a7d8a",
  className = "",
}: ScrollProgressProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(() => {
    if (isReduced || !barRef.current) return;

    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, { scope: barRef });

  if (isReduced) return null;

  return (
    <div className={`fixed top-0 left-0 w-full h-[2.5px] bg-transparent z-[100] pointer-events-none ${className}`}>
      <div
        ref={barRef}
        className="w-full h-full origin-left scale-x-0"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}
export default ScrollProgress;
