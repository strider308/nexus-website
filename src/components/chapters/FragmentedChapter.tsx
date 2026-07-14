"use client";

import React from "react";
import { motion } from "motion/react";

export function FragmentedChapter() {
  return (
    <section 
      data-chapter-index={1}
      className="min-h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-text py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 max-w-3xl"
      >
        <span className="text-xs font-mono tracking-wider text-gray-400 uppercase font-bold">
          [ Fragmentation ]
        </span>
        
        <h2 className="font-serif text-4xl md:text-6xl font-light text-[#dedbc8] tracking-tight leading-tight italic">
          Important work rarely fails because people do not care.
        </h2>

        <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed max-w-2xl">
          It fails because the process is scattered across phone calls, spreadsheets, chat threads, and manual check-ins. Information disappears inside individual silos.
        </p>

        {/* 3 Concrete Workflow Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider">
              Healthcare Case
            </span>
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide">
              Outpatient Queue Drifts
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Registration details sit in one database while consultation queues, diagnostic orders, and pharmacy handoffs are managed via paper sheets, leading to diagnostic delays.
            </p>
          </div>

          <div className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider">
              Hospitality Case
            </span>
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide">
              Table-to-Kitchen Gaps
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Waiter registers table orders on pad, cashier types billing manually, kitchen tracks queues on paper tickets. Discrepancies lead to lost billing and food waste.
            </p>
          </div>

          <div className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider">
              Operations Case
            </span>
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide">
              Siloed Blocker Checks
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Critical project handoffs and file clearances stall inside private Slack chats. Task ownership and blocking triggers are invisible to decision-makers.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default FragmentedChapter;
