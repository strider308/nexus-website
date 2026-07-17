"use client";

import React, { useRef } from "react";
import { SevenProofSystems } from "@/components/home/SevenProofSystems";

export function ProofChapter() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      data-chapter-index={5}
      ref={containerRef}
      className="min-h-screen relative z-10 px-6 md:px-12 max-w-7xl mx-auto select-text py-24"
    >
      <div className="flex flex-col gap-6 mb-16">
        <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
          [ PROVEN ARCHITECTURES ]
        </span>
        <h2 className="type-heading text-3xl md:text-5xl text-[#dedbc8] tracking-tight">
          Seven Proof Systems
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mt-2">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">What we build</h3>
            <p className="type-body text-[14px] text-gray-300 leading-relaxed">
              Workflow diagnostics, system blueprints, prototypes, private betas, operational custom software builds, automated process layers, role-aware internal tools, and system integrations.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">What the seven systems represent</h3>
            <p className="type-body text-[14px] text-gray-300 leading-relaxed">
              These seven systems demonstrate how we map workflows, define roles and states, design interfaces, and build connected operational software. They are not presented as a fixed catalogue of off-the-shelf products.
            </p>
          </div>
        </div>
      </div>

      <SevenProofSystems />
    </section>
  );
}
export default ProofChapter;
