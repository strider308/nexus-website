"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";
import { GSAP_EASES } from "@/lib/gsap/eases";

interface MaskTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function MaskTextReveal({
  text,
  className = "",
  delay = 0,
  duration = 1.0,
}: MaskTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  // Split text by lines (delimited by \n)
  const lines = text.split("\n");

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll(".reveal-line-inner");
      if (!items || items.length === 0) return;

      if (isReduced) {
        gsap.set(items, { y: 0 });
        return;
      }

      gsap.fromTo(
        items,
        { y: "105%" },
        {
          y: "0%",
          duration,
          delay,
          stagger: 0.12,
          ease: GSAP_EASES.reveal,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`flex flex-col gap-1.5 ${className}`}>
      {lines.map((line, idx) => (
        <div key={idx} className="overflow-hidden relative block py-0.5">
          <span className="reveal-line-inner block translate-y-[105%] will-change-transform">
            {line}
          </span>
        </div>
      ))}
    </div>
  );
}
export default MaskTextReveal;
