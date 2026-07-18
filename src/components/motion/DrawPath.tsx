"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";

interface DrawPathProps {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  duration?: number;
  className?: string;
  triggerSelector?: string;
  scrub?: boolean;
}

export function DrawPath({
  d,
  stroke = "#2a7d8a",
  strokeWidth = 1.5,
  strokeDasharray = "",
  duration = 1.5,
  className = "",
  triggerSelector = "",
  scrub = true,
}: DrawPathProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      const path = pathRef.current;
      if (!path) return;

      const length = path.getTotalLength();
      
      // Set initial state
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      if (isReduced) {
        gsap.set(path, { strokeDashoffset: 0 });
        return;
      }

      const animProps = {
        strokeDashoffset: 0,
        ease: "power2.inOut",
      };

      if (scrub) {
        gsap.to(path, {
          ...animProps,
          scrollTrigger: {
            trigger: triggerSelector ? triggerSelector : path,
            start: "top 80%",
            end: "bottom 30%",
            scrub: true,
          },
        });
      } else {
        gsap.to(path, {
          ...animProps,
          duration,
          scrollTrigger: {
            trigger: triggerSelector ? triggerSelector : path,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: pathRef, dependencies: [isReduced] }
  );

  return (
    <path
      ref={pathRef}
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      fill="none"
      className={className}
    />
  );
}
export default DrawPath;
