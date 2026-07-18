"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";
import { GSAP_EASES } from "@/lib/gsap/eases";

interface GSAPRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  triggerHook?: string; // e.g. "top 85%"
}

export function GSAPReveal({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 24,
  className = "",
  triggerHook = "top 85%",
}: GSAPRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced) {
        gsap.set(containerRef.current, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: yOffset },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: GSAP_EASES.reveal,
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerHook,
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef, dependencies: [isReduced] }
  );

  return (
    <div ref={containerRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
export default GSAPReveal;
