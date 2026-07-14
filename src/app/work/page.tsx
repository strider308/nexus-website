"use client";

import React from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { PROOF_SYSTEMS } from "@/content/nexus";
import { motion } from "motion/react";

export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-24 select-none">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10 px-6 md:px-12 pb-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#dedbc8]/14 pb-8"
        >
          <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase font-bold">
            PROVEN IN PRODUCTION
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light italic mt-3 tracking-tight">
            Shipped Systems
          </h1>
          <p className="text-base md:text-lg font-light text-gray-400 mt-4 max-w-xl leading-relaxed">
            Seven systems across five industries. These platforms represent proof of our operational range and engineering depth.
          </p>
        </motion.div>

        {/* Shipped Systems List */}
        <div className="flex flex-col gap-16">
          {PROOF_SYSTEMS.map((sys, idx) => (
            <motion.div
              key={sys.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#dedbc8]/10 pb-16"
              id={sys.id}
            >
              {/* Title & Metadata */}
              <div className="md:col-span-4 flex flex-col gap-3">
                <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                  0{idx + 1} {"//"} {sys.industry.toUpperCase()}
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-wide">
                  {sys.name}
                </h2>
                <span className="text-xs font-mono text-gray-400 border border-[#dedbc8]/20 px-2.5 py-1 rounded w-fit">
                  {sys.category}
                </span>
              </div>

              {/* Description */}
              <div className="md:col-span-8 flex flex-col gap-6">
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-300">
                  {sys.tagline}
                </p>
                <div className="flex gap-4">
                  <a
                    href={`mailto:hello@nexus-workflows.com?subject=Inquiry%20regarding%20${sys.name}`}
                    className="border border-[#dedbc8]/30 px-5 py-2.5 text-xs font-mono uppercase text-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-all duration-300"
                  >
                    Request Diagnostic Walkthrough
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation / Cross-link CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#dedbc8]/14 bg-[#0d0d0d] p-8 md:p-12 text-center flex flex-col items-center gap-6 mt-12"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light italic text-[#dedbc8] tracking-tight">
            How we can help you build
          </h2>
          <p className="text-sm md:text-base font-light text-gray-400 max-w-xl leading-relaxed">
            See our capabilities in custom systems, automation layers, and modern dashboard design, or reach out to discuss your specific workflow rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="/services"
              className="border border-[#dedbc8] bg-[#dedbc8] px-6 py-3 text-xs font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300"
            >
              Explore Capabilities &rarr;
            </a>
            <a
              href="/contact"
              className="border border-[#dedbc8]/20 px-6 py-3 text-xs font-mono font-bold uppercase text-[#dedbc8] hover:border-[#dedbc8] transition-all duration-300"
            >
              Contact Engineering
            </a>
          </div>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
}
