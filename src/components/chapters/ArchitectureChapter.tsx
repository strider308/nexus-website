"use client";

import React from "react";
import { motion } from "motion/react";


const LAYERS = [
  { name: "Clear Audit Logs & Handoffs", desc: "No disputing who did what" },
  { name: "Operational Dashboards", desc: "Instant visibility for management" },
  { name: "State-based Automations", desc: "Reduces repetitive manual check-ins" },
  { name: "Role-Aware Permissions", desc: "Prevents operational errors" },
  { name: "Strict State Machines", desc: "Ensures work follows defined paths" },
  { name: "Clean Transaction Inputs", desc: "Captures accurate initial data" },
];

export function ArchitectureChapter() {
  return (
    <section 
      data-chapter-index={3}
      className="min-h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-text py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          <span className="text-xs font-mono tracking-wider text-gray-400 uppercase font-bold">
            [ System Stack ]
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-[#dedbc8] tracking-tight leading-tight italic">
            Engineered for outcomes.
          </h2>
          <p className="text-sm md:text-base font-light text-gray-300 leading-relaxed">
            Every layer in our software architecture is aligned to a business outcome. We build strict sequence state machines and permissions layers that secure your transactions and eliminate overhead.
          </p>
        </motion.div>

        {/* 2D Representation of the stack (visible on all screens, matches the 3D stack alongside) */}
        <div className="lg:col-span-7 flex flex-col gap-3 w-full max-w-md mx-auto">
          {LAYERS.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-[#dedbc8]/14 bg-[#0d0d0d] p-4 text-xs md:text-sm font-mono text-[#dedbc8] flex justify-between items-center"
            >
              <div className="flex flex-col gap-1">
                <span className="font-bold">{layer.name.toUpperCase()}</span>
                <span className="text-[10px] text-gray-500 font-light lowercase">{layer.desc}</span>
              </div>
              <span className="text-[#2a7d8a] font-bold text-xs">STACK {6 - idx}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ArchitectureChapter;
