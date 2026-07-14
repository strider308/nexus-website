"use client";

import React from "react";
import { motion } from "motion/react";
import { CONTACT } from "@/content/nexus";

export function FinalChapter() {
  return (
    <section className="h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 max-w-2xl"
      >
        <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#dedbc8]/40 uppercase font-bold">
          05 // CONVERSATION
        </span>
        
        <h2 className="font-serif text-5xl md:text-7xl font-light text-[#dedbc8] tracking-tight leading-[0.95] italic">
          Bring us the workflow.
        </h2>

        <p className="text-base md:text-xl font-light text-gray-400 leading-relaxed">
          We will map it, design the system stack, and build the software that connects the work. Let&apos;s start an operational diagnostic conversation today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={CONTACT.url}
            className="border border-[#dedbc8] bg-[#dedbc8] px-8 py-4 text-xs md:text-sm font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300 text-center"
          >
            Start a Conversation
          </a>
          <a
            href="/services"
            className="border border-[#dedbc8]/20 px-8 py-4 text-xs md:text-sm font-mono font-bold uppercase text-[#dedbc8] hover:border-[#dedbc8] transition-all duration-300 text-center"
          >
            Review Services &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
}
export default FinalChapter;
