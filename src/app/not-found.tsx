"use client";

import React from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { BRAND_CONFIG } from "@/content/nexus";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-24 flex flex-col justify-between select-text">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      <div className="max-w-3xl mx-auto flex flex-col justify-center items-center gap-8 relative z-10 px-6 md:px-12 flex-1 py-24 text-center w-full">
        <span className="text-xs font-mono tracking-[0.2em] text-red-500 uppercase font-bold">
          [ ERROR 404 ]
        </span>
        <h1 className="type-heading text-4xl md:text-6xl tracking-tight text-[#dedbc8]">
          Route Not Found
        </h1>
        <div className="h-[1px] bg-[#dedbc8]/14 w-24 my-2" />
        <p className="type-body text-sm md:text-base text-gray-300 max-w-md leading-relaxed">
          The requested system coordinate or diagnostic path does not exist. It may have been archived or relocated.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href="/work"
            data-motion="interaction"
            className="border border-[#dedbc8] bg-[#dedbc8] px-6 py-3.5 text-xs font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-[color,background-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] rounded-none text-center active:scale-[0.98]"
          >
            {BRAND_CONFIG.secondaryCTA}
          </Link>
          <Link
            href="/contact"
            data-motion="interaction"
            className="border border-[#dedbc8]/20 px-6 py-3.5 text-xs font-mono font-bold uppercase text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8]/5 transition-[border-color,background-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] rounded-none text-center active:scale-[0.98]"
          >
            Request Diagnostic
          </Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
