"use client";

import React from "react";
import { motion } from "motion/react";

export function TrustChapter() {
  return (
    <section 
      data-chapter-index={4}
      className="min-h-[80vh] flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto py-20 select-text"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 max-w-2xl"
      >
        <span className="text-xs font-mono tracking-wider text-gray-400 uppercase font-bold">
          [ Human Trust ]
        </span>
        
        <h2 className="font-serif text-4xl md:text-6xl font-light text-[#dedbc8] tracking-tight leading-tight italic">
          Founder-led engineering, defined boundaries.
        </h2>

        <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed">
          We do not delegate your system architecture to junior developers. Every line of code is designed and reviewed by our founders. We build with clear posture, thorough documentation, and rigorous boundaries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="border-l-2 border-[#2a7d8a] pl-4 flex flex-col gap-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
              Founder-Led Delivery
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Direct technical access. You work directly with the systems engineers building the automation layers.
            </p>
          </div>

          <div className="border-l-2 border-[#2e6fad] pl-4 flex flex-col gap-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
              Thorough Documentation
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Every state machine, database schema, and custom API trigger is fully mapped and documented for your internal engineering handover.
            </p>
          </div>

          <div className="border-l-2 border-[#dedbc8]/30 pl-4 flex flex-col gap-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
              Security-First Posture
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Role-aware authorization, input hygiene, and encrypted database columns protect your transactions by default.
            </p>
          </div>

          <div className="border-l-2 border-gray-600 pl-4 flex flex-col gap-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
              Support Boundaries
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              We define clear operational limits. We build independent software systems, not ongoing consulting overhead.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default TrustChapter;
