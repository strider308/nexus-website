"use client";

import React from "react";
import { InterfaceFrame } from "@/components/work/InterfaceFrame";

interface ProofSystemVisualProps {
  systemId: string;
  frameId: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ProofSystemVisual({ systemId, frameId, className = "", style }: ProofSystemVisualProps) {
  return (
    <div 
      style={style}
      className={`w-full border border-[#dedbc8]/14 bg-[#0d0d0d] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)] ${className}`}
    >
      <InterfaceFrame
        systemId={systemId}
        frameId={frameId}
        caption={`${systemId} interface dashboard.`}
      />
    </div>
  );
}
export default ProofSystemVisual;
