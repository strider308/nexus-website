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
          Shipped System Proofs
        </h2>
        <p className="type-body text-base text-gray-300 leading-relaxed max-w-xl">
          Below is the evidence of our engineering. We build functional systems tailored to complex workflow environments.
        </p>
      </div>

      <SevenProofSystems />
    </section>
  );
}
export default ProofChapter;
