"use client";

import React, { useRef, useEffect } from "react";
import { InterfaceFrame } from "@/components/work/InterfaceFrame";
import { gsap } from "@/lib/gsap/register";

interface ProofSystemVisualProps {
  systemId: string;
  frameId: string;
}

export function ProofSystemVisual({ systemId, frameId }: ProofSystemVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Cross-fade animation when active visual shifts
    gsap.fromTo(
      containerRef.current,
      { opacity: 0.1, scale: 0.98, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [systemId, frameId]);

  return (
    <div ref={containerRef} className="w-full border border-[#dedbc8]/14 bg-[#0d0d0d] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <InterfaceFrame
        systemId={systemId}
        frameId={frameId}
        caption={`${systemId} interface dashboard.`}
      />
    </div>
  );
}
export default ProofSystemVisual;
