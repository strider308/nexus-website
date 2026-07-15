"use client";

import React, { useRef } from "react";
import { MediaExpansion } from "@/components/motion/MediaExpansion";
import { InterfaceFrame } from "@/components/work/InterfaceFrame";

export function WorkIndexHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="flex flex-col gap-8 w-full pt-16 pb-12 border-b border-[#dedbc8]/14">
      <div className="flex flex-col gap-4 max-w-3xl">
        <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
          [ ARCHIVES DECK // EVIDENCE DECK ]
        </span>
        <h1 className="type-display text-5xl md:text-8rem text-[#dedbc8]">
          Proven Architectures
        </h1>
        <p className="type-body text-base md:text-xl text-gray-300 max-w-2xl mt-2">
          We replace fragmented spreadsheets, email silos, and paper registers with connected software engines. Below is the operational ledger of seven custom systems we designed and built end-to-end.
        </p>
      </div>

      {/* 21st.dev inspired scroll media expansion */}
      <div className="w-full mt-6">
        <MediaExpansion startWidth="70%" endWidth="100%" startScale={0.96} endScale={1.0}>
          <div className="border border-[#dedbc8]/14 bg-[#0d0d0d] overflow-hidden">
            <InterfaceFrame
              systemId="clinicos"
              frameId="owner_dashboard"
              caption="ClinicOS Operational Management dashboard - active transactions ledger verification."
            />
          </div>
        </MediaExpansion>
      </div>
    </div>
  );
}
export default WorkIndexHero;
