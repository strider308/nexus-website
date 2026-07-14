"use client";

import React from "react";
import { motion } from "motion/react";

const LAYERS = [
  "Handoff and documentation",
  "Dashboards",
  "Automation",
  "Roles and permissions",
  "Workflow rules",
  "Inputs",
];

export function ArchitectureChapter() {
  return (
    <section className="h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#2e6fad] uppercase font-bold">
            03 // ARCHITECTURE
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-[#dedbc8] tracking-tight leading-tight italic">
            Built as a system stack.
          </h2>
          <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
            Every layer from raw inputs to client handoffs is engineered sequentially. This structured blueprint prevents operational gaps and secures transaction history.
          </p>
        </motion.div>

        {/* 2D Representation of the stack (visible on all screens, matches the 3D stack alongside) */}
        <div className="lg:col-span-7 flex flex-col gap-2 w-full max-w-md mx-auto">
          {LAYERS.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-[#dedbc8]/14 bg-[#0d0d0d]/80 p-3 text-xs md:text-sm font-mono text-[#dedbc8] flex justify-between items-center"
            >
              <span>{layer.toUpperCase()}</span>
              <span className="text-gray-500">L0{LAYERS.length - idx}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ArchitectureChapter;
