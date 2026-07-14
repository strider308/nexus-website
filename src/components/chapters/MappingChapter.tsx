"use client";

import React from "react";
import { motion } from "motion/react";

export function MappingChapter() {
  return (
    <section 
      data-chapter-index={2}
      className="min-h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-text py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6 max-w-2xl"
      >
        <span className="text-xs font-mono tracking-wider text-gray-400 uppercase font-bold">
          [ Signature Step: MAPPING ]
        </span>
        
        <h2 className="font-serif text-4xl md:text-6xl font-light text-[#dedbc8] tracking-tight leading-tight italic">
          We map the operating rules.
        </h2>

        <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed">
          Before writing software, we structure the operating rules. We define who owns the task, what state trigger updates the team, and where data connects across roles. This is the foundation of our engineering.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {["Roles & Permissions", "State Machine Triggers", "Ownership Boundaries", "Automation Handoffs", "Audit Visibility", "Exception Paths"].map((item, idx) => (
            <div key={idx} className="border border-[#dedbc8]/14 bg-[#0d0d0d] p-4 font-mono text-[11px] text-[#dedbc8] font-bold">
              {item.toUpperCase()}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
export default MappingChapter;
