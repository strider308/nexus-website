"use client";

import React from "react";
import { motion } from "motion/react";

export function MappingChapter() {
  return (
    <section className="h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 max-w-2xl"
      >
        <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#2a7d8a] uppercase font-bold">
          02 // RESOLUTION
        </span>
        
        <h2 className="font-serif text-4xl md:text-6xl font-light text-[#dedbc8] tracking-tight leading-tight italic">
          We map the workflow.
        </h2>

        <p className="text-base md:text-xl font-light text-gray-400 leading-relaxed">
          Before writing software, we structure the operating rules. We define who owns the task, what state trigger updates the team, and where data connects across roles.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {["Roles", "States", "Ownership", "Handoffs", "Visibility", "Automation"].map((item, idx) => (
            <div key={idx} className="border border-[#dedbc8]/10 bg-[#0d0d0d]/40 p-4 font-mono text-xs text-[#dedbc8]">
              {item.toUpperCase()}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
export default MappingChapter;
