"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROOF_SYSTEMS } from "@/content/nexus";
import Link from "next/link";

export function ProofChapter() {
  const [activeSystemIdx, setActiveSystemIdx] = useState<number>(0);

  return (
    <section className="h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Headline & Systems list */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#c87b3a] uppercase font-bold">
              04 // PROOF
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#dedbc8] tracking-tight leading-none italic">
              Seven systems. Five industries.
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            {PROOF_SYSTEMS.map((sys, idx) => (
              <button
                key={sys.id}
                onMouseEnter={() => setActiveSystemIdx(idx)}
                onFocus={() => setActiveSystemIdx(idx)}
                className={`text-left p-3 border-l-2 transition-all duration-300 ${
                  activeSystemIdx === idx
                    ? "border-[#dedbc8] bg-[#0d0d0d] pl-5 text-[#dedbc8]"
                    : "border-[#dedbc8]/10 bg-transparent text-gray-500"
                }`}
              >
                <div className="font-mono text-xs text-gray-400 font-bold">
                  {sys.category.toUpperCase()}
                </div>
                <div className="text-sm font-bold uppercase tracking-wide mt-1">
                  {sys.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Active System details card */}
        <div className="lg:col-span-6 border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 md:p-8 flex flex-col justify-between min-h-[360px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSystemIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="flex justify-between items-center border-b border-[#dedbc8]/10 pb-4">
                <span className="text-xs font-mono text-gray-400">
                  {PROOF_SYSTEMS[activeSystemIdx].industry.toUpperCase()}
                </span>
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: PROOF_SYSTEMS[activeSystemIdx].color }}
                />
              </div>

              <h3 className="text-lg font-bold text-[#dedbc8] uppercase tracking-wide">
                {PROOF_SYSTEMS[activeSystemIdx].name}
              </h3>

              <p className="text-sm font-light text-gray-300 leading-relaxed min-h-[80px]">
                {PROOF_SYSTEMS[activeSystemIdx].tagline}
              </p>

              <div className="pt-6 border-t border-[#dedbc8]/10 flex gap-4">
                <Link
                  href="/work"
                  className="text-xs font-mono font-bold uppercase text-[#dedbc8] hover:text-white flex items-center gap-1.5"
                >
                  Explore Systems &rarr;
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
export default ProofChapter;
