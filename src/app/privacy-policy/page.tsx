"use client";

import React from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { LEGAL } from "@/content/nexus";
import { motion } from "motion/react";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-24 flex flex-col justify-between select-none">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-3xl mx-auto flex flex-col gap-8 relative z-10 px-6 md:px-12 flex-1 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase font-bold">
            LEGAL INFORMATION
          </span>
          <h1 className="type-heading text-4xl md:text-5xl tracking-tight text-[#dedbc8]">
            Privacy Policy
          </h1>
          <div className="h-[1px] bg-[#dedbc8]/14 w-full my-4" />
          
          <div className="flex flex-col gap-6 select-all">
            {LEGAL.privacyPolicy.map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base font-light text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
}
