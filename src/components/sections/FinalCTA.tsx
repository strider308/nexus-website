"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowRight } from "lucide-react";
import { HERO } from "@/lib/content/nexus";
import Link from "next/link";

export function FinalCTA() {
  return (
    <AnimatedSection id="contact" className="w-full py-20 bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Cinematic Card */}
        <div className="relative border border-[#DEDBC8]/10 rounded-[2rem] bg-[#101010] p-8 md:p-16 text-center overflow-hidden shadow-lg shadow-black/40">
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-noise" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4 font-bold">
              Scoping Intake
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-[#E1E0CC] mb-4 leading-tight">
              Bring the workflow. We’ll map the first buildable system.
            </h3>
            <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-8">
              You’ll get a founder-led scoping reply, not a generic sales script. Free and structured.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center w-full max-w-sm">
              {/* Primary CTA */}
              <a 
                href={HERO.ctaUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between gap-4 bg-[#DEDBC8] hover:bg-[#DEDBC8]/90 text-black rounded-full pl-5 pr-1.5 py-1.5 w-full text-sm font-bold tracking-wider uppercase transition-all duration-300 outline-none"
              >
                <span>Start a conversation</span>
                <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0">
                  <ArrowRight className="h-3.5 w-3.5 text-[#DEDBC8]" />
                </div>
              </a>

              {/* Secondary CTA */}
              <Link 
                href="/demo"
                className="flex items-center justify-center border border-[#DEDBC8]/25 text-[#DEDBC8] hover:bg-[#DEDBC8]/10 hover:border-[#DEDBC8]/40 rounded-full px-5 py-3 w-full text-sm font-bold tracking-wider uppercase transition-all duration-300 outline-none text-center"
              >
                View demo library
              </Link>
            </div>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}
