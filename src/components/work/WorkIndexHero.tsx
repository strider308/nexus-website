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
        <div className="flex flex-col gap-6 max-w-4xl mt-2">
          <p className="type-body text-base text-gray-300 leading-relaxed max-w-2xl">
            We replace fragmented spreadsheets, email silos, and paper registers with connected software engines. Below is the operational ledger of seven proof systems we designed and built end-to-end.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#dedbc8]/10 pt-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">What we build</h2>
              <p className="type-body text-[14px] text-gray-300 leading-relaxed">
                Workflow diagnostics, system blueprints, prototypes, private betas, operational custom software builds, automated process layers, role-aware internal tools, and system integrations.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">What the seven systems represent</h2>
              <p className="type-body text-[14px] text-gray-300 leading-relaxed">
                These seven systems demonstrate how we map workflows, define roles and states, design interfaces, and build connected operational software. They are not presented as a fixed catalogue of off-the-shelf products.
              </p>
            </div>
          </div>
        </div>
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
