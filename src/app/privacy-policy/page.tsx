"use client";

import React from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { LEGAL } from "@/content/nexus";
import { motion } from "motion/react";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-24 pb-20 px-6 md:px-12 select-none">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-3xl mx-auto flex flex-col gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase font-bold">
            LEGAL INFORMATION
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-light italic tracking-tight">
            Privacy Policy
          </h1>
          <div className="h-[1px] bg-[#dedbc8]/14 w-full my-4" />
          <p className="text-sm md:text-base font-light text-gray-300 leading-relaxed select-all">
            {LEGAL.privacyPolicy}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
