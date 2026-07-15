"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";
import { GSAP_EASES } from "@/lib/gsap/eases";

interface GSAPStaggerProps {
  children: React.ReactNode;
  selector: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  triggerHook?: string;
}

export function GSAPStagger({
  children,
  selector,
  delay = 0,
  stagger = 0.08,
  duration = 0.8,
  yOffset = 20,
  className = "",
  triggerHook = "top 85%",
}: GSAPStaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      const targets = containerRef.current?.querySelectorAll(selector);
      if (!targets || targets.length === 0) return;

      if (isReduced) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y: yOffset },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
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
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
export default GSAPStagger;
