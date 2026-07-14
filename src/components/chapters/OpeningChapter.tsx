"use client";

import React from "react";
import { motion } from "motion/react";

export function OpeningChapter() {
  return (
    <section 
      data-chapter-index={0}
      className="min-h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-text py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6"
      >
        <span className="text-xs font-mono tracking-wider text-gray-400 uppercase font-bold">
          [ Core System ]
        </span>
        
        <h1 className="font-serif text-5xl md:text-8xl font-light text-[#dedbc8] tracking-tight leading-tight italic">
          Custom software for work that has outgrown spreadsheets, messages and memory.
        </h1>

        <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl leading-relaxed">
          Nexus maps complex workflows, defines roles and handoffs, and builds the system that makes the work easier to operate.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="mailto:hello@nexus-workflows.com"
            className="border border-[#dedbc8] bg-[#dedbc8] px-8 py-4 text-xs font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </motion.div>
    </section>
  );
}
export default OpeningChapter;
