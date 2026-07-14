"use client";

import React from "react";
import { motion } from "motion/react";

export function FragmentedChapter() {
  return (
    <section className="h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 max-w-2xl"
      >
        <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#c44a7a] uppercase font-bold">
          01 // FRAGMENTATION
        </span>
        
        <h2 className="font-serif text-4xl md:text-6xl font-light text-[#dedbc8] tracking-tight leading-tight italic">
          Important work rarely fails because people do not care.
        </h2>

        <p className="text-base md:text-xl font-light text-gray-400 leading-relaxed">
          It fails because the process is scattered across phone calls, spreadsheets, chat threads, and manual check-ins. Information disappears inside individual silos.
        </p>
      </motion.div>
    </section>
  );
}
export default FragmentedChapter;
