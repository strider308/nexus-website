"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";

interface MediaExpansionProps {
  children: React.ReactNode;
  className?: string;
  startScale?: number;
  endScale?: number;
  startWidth?: string; // e.g. "70%"
  endWidth?: string;   // e.g. "100%"
}

export function MediaExpansion({
  children,
  className = "",
  startScale = 0.95,
  endScale = 1.0,
  startWidth = "75%",
  endWidth = "100%",
}: MediaExpansionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced) return;

      gsap.fromTo(
        innerRef.current,
        {
          width: startWidth,
          scale: startScale,
        },
        {
          width: endWidth,
          scale: endScale,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [isReduced] }
  );

  return (
    <div ref={containerRef} className={`w-full flex justify-center items-center overflow-hidden ${className}`}>
      <div
        ref={innerRef}
        className="w-full origin-center will-change-[width,transform]"
        style={{ width: isReduced ? endWidth : startWidth }}
      >
        {children}
      </div>
    </div>
  );
}
export default MediaExpansion;
