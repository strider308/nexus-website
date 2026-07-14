"use client";

import React from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SERVICES } from "@/content/nexus";
import { motion } from "motion/react";

export default function ServicesPage() {
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
            SERVICES & CAPABILITIES
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light italic mt-3 tracking-tight">
            How We Work
          </h1>
          <p className="text-base md:text-lg font-light text-gray-400 mt-4 max-w-xl leading-relaxed">
            Every engagement starts with understanding the real operational workflow. We build custom software layers designed around your specific roles and handoffs.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 md:p-8 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono text-gray-500">
                  LANE // 0{idx + 1}
                </span>
                <h2 className="text-lg font-bold uppercase tracking-wide">
                  {service.title}
                </h2>
                <p className="text-sm font-light leading-relaxed text-gray-300">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#dedbc8]/10 text-xs font-mono text-gray-500">
                BEST FIT // {service.title === "Custom Workflow Systems" ? "Founders with manual operations" : "Businesses replacing spreadsheets"}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversion CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#dedbc8]/14 bg-[#0d0d0d] p-8 md:p-12 text-center flex flex-col items-center gap-6 mt-12"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light italic text-[#dedbc8] tracking-tight">
            Ready to structure your workflow?
          </h2>
          <p className="text-sm md:text-base font-light text-gray-400 max-w-xl leading-relaxed">
            Every software build starts with a custom diagnostic map. Let&apos;s design the system stack for your handoffs.
          </p>
          <a
            href="/contact"
            className="border border-[#dedbc8] bg-[#dedbc8] px-8 py-4 text-xs font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300"
          >
            Start a Diagnostic Conversation
          </a>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
}
