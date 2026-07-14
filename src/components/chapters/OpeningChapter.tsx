"use client";

import React from "react";
import { motion } from "motion/react";
import { BRAND } from "@/content/nexus";

export function OpeningChapter() {
  return (
    <section className="h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6"
      >
        <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] uppercase text-gray-500">
          OPERATING CORE v2.6
        </span>
        
        <h1 className="font-serif text-6xl md:text-9xl font-light text-[#dedbc8] tracking-tight leading-[0.85] italic select-all">
          {BRAND.name}
        </h1>

        <p className="text-lg md:text-2xl font-light text-gray-400 max-w-xl leading-relaxed">
          {BRAND.primaryStatement}
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="mailto:hello@nexus-workflows.com"
            className="border border-[#dedbc8] px-6 py-3 text-xs md:text-sm font-mono font-bold uppercase text-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-all duration-300"
          >
            {BRAND.primaryCTA}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
export default OpeningChapter;
