"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HERO } from "@/lib/content/nexus";
import { ArrowRight, Calendar, CheckSquare, Zap } from "lucide-react";
import { SystemCard3D } from "@/components/three/SystemCard3D";

const MODELS = [
  {
    letter: "A",
    title: "Workflow Mapping Sprint",
    timeline: "1–2 weeks",
    icon: Zap,
    bestFor: "Teams that know their current workflow is messy but need technical clarity before building code.",
    deliverables: [
      "Operational workflow map",
      "User-role permissions matrix",
      "Interactive core screens wireframes",
      "First-milestone MVP scope definition",
      "Technical framework recommendation"
    ]
  },
  {
    letter: "B",
    title: "Private Beta Build",
    timeline: "4–8 weeks",
    icon: Calendar,
    bestFor: "Founders and operators ready to test a scoped version with actual users or pilot groups.",
    deliverables: [
      "Functional private beta application",
      "Secure staging deployment URL",
      "Integrated feedback collection channel",
      "Core operational status dashboard",
      "Release cutover checklist"
    ]
  },
  {
    letter: "C",
    title: "Operational System Build",
    timeline: "8–16+ weeks",
    icon: CheckSquare,
    bestFor: "Businesses replacing manual papers, spreadsheets, or disjointed SaaS tools with custom software.",
    deliverables: [
      "Multi-role production-grade workflow system",
      "Consolidated real-time owner dashboards",
      "Automated webhook & notification rules",
      "State-aware data validation filters",
      "DNS configuration & production handoff"
    ]
  }
];

export function EngagementModels() {
  return (
    <AnimatedSection id="engagement-models" className="w-full py-20 md:py-28 border-b border-[#DEDBC8]/10 bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 block">
            Engagement Framework
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
            How Engagements Work
          </h2>
          <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
            We work with founders and operators through three structured models designed to reduce development waste and clarify delivery goals.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {MODELS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SystemCard3D 
                key={idx} 
                className="border border-[#DEDBC8]/10 bg-[#101010] rounded-[16px] p-6 flex flex-col justify-between h-full hover:border-[#DEDBC8]/25 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#DEDBC8]/5">
                    <span className="text-[10px] font-mono font-bold text-gray-500">
                      MODEL {item.letter}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#DEDBC8] uppercase">
                      <Icon className="h-3.5 w-3.5" /> {item.timeline}
                    </span>
                  </div>

                  <h3 className="font-display text-lg md:text-xl font-bold text-[#E1E0CC] mb-4">
                    {item.title}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-[8px] font-mono font-bold tracking-wider text-gray-500 uppercase block mb-1">
                      BEST FIT
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed font-light">
                      {item.bestFor}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="text-[8px] font-mono font-bold tracking-wider text-gray-500 uppercase block mb-2">
                      DELIVERABLES
                    </span>
                    <ul className="flex flex-col gap-2">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-300 font-light leading-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DEDBC8]/70 shrink-0 mt-1.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={HERO.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "w-full bg-[#DEDBC8] hover:bg-[#DEDBC8]/90 text-black font-semibold rounded-full flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#DEDBC8]/50 focus-visible:ring-offset-2 outline-none transition-all duration-300 mt-4"
                  )}
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </SystemCard3D>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-500 font-mono">
          Scoping calls are founder-led. Send the workflow, and we&apos;ll help shape the first system.
        </p>

      </div>
    </AnimatedSection>
  );
}
