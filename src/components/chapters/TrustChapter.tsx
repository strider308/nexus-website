"use client";

import React, { useRef } from "react";
import { GSAPReveal } from "@/components/motion/GSAPReveal";
import { GSAPStagger } from "@/components/motion/GSAPStagger";

export function TrustChapter() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      data-chapter-index={4}
      ref={containerRef}
      className="min-h-0 flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto py-16 md:py-24 select-text"
    >
      <div className="flex flex-col gap-8 max-w-3xl">
        <GSAPReveal yOffset={20} duration={0.8}>
          <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
            [ OPERATIONAL INTEGRITY ]
          </span>
          <h2 className="type-heading text-3xl md:text-6xl text-[#dedbc8] tracking-tight mt-2">
            Founder-led engineering, defined boundaries.
          </h2>
        </GSAPReveal>

        <GSAPReveal yOffset={15} duration={0.8} delay={0.15}>
          <p className="type-body text-base md:text-lg text-gray-300 max-w-2xl">
            We do not delegate your critical system architecture to junior agency pools. Every line of database synchronization and sequence rule is designed and written by our founders. We build with clear posture, thorough documentation, and strict boundaries.
          </p>
        </GSAPReveal>

        <GSAPStagger selector=".trust-card" yOffset={15} stagger={0.1} delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="trust-card border-l-2 border-[#2a7d8a] pl-4 flex flex-col gap-2 opacity-0">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
              Founder-Led Delivery
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed font-sans">
              Direct technical access. You design and plan directly with the systems engineers building the automation layers.
            </p>
          </div>

          <div className="trust-card border-l-2 border-[#2e6fad] pl-4 flex flex-col gap-2 opacity-0">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
              Thorough Documentation
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed font-sans">
              Every state machine, database schema, and custom API trigger is fully mapped and logged for your internal engineering handover.
            </p>
          </div>

          <div className="trust-card border-l-2 border-[#dedbc8]/30 pl-4 flex flex-col gap-2 opacity-0">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
              Security-First Posture
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed font-sans">
              Role-aware authorization, parameterized SQL input filters, and encrypted data columns protect transactions by default.
            </p>
          </div>

          <div className="trust-card border-l-2 border-gray-600 pl-4 flex flex-col gap-2 opacity-0">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
              Support Boundaries
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed font-sans">
              We define clear operational limits. We deliver independent, maintainable software systems, not ongoing consulting retainer overhead.
            </p>
          </div>
        </GSAPStagger>
      </div>
    </section>
  );
}
export default TrustChapter;
