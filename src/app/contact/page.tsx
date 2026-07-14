"use client";

import React from "react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { CONTACT } from "@/content/nexus";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-24 flex flex-col justify-between select-none">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-3xl mx-auto flex flex-col gap-12 relative z-10 px-6 md:px-12 flex-1 justify-center py-16">
        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase font-bold">
            DIAGNOSTIC ENGAGEMENT
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl font-light italic tracking-tight">
            Start a Conversation
          </h1>

          <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed max-w-xl">
            Whether you run a clinic, restaurant, security operation, or early-stage SaaS build — tell us about the workflow. We&apos;ll help you map the rules, design the stack, and engineer the software.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href={CONTACT.url}
              className="border border-[#dedbc8] bg-[#dedbc8] px-8 py-4 text-xs font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300"
            >
              Email Us Directly
            </a>
            <span className="text-xs font-mono text-gray-500">
              {CONTACT.email}
            </span>
          </div>
        </motion.div>
      </div>

      <SiteFooter />
    </div>
  );
}
