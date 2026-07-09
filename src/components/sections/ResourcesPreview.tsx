"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FileText, ArrowRight, ClipboardCheck, LayoutGrid, ShieldAlert, BadgeAlert } from "lucide-react";
import Link from "next/link";

const RESOURCE_CARDS = [
  {
    title: "Workflow Mapping Checklist",
    desc: "Map out team roles, inputs, and handoff queues before writing scope to prevent development waste.",
    icon: ClipboardCheck,
    tag: "Audit Tool"
  },
  {
    title: "MVP Scope Worksheet",
    desc: "Define first-milestone features and strip out non-essential software blocks before launching beta code.",
    icon: LayoutGrid,
    tag: "Planning Guide"
  },
  {
    title: "Operational Handoff Audit",
    desc: "Identify silent queues and human handoff bottlenecks inside your business operations.",
    icon: ShieldAlert,
    tag: "Audit Tool"
  },
  {
    title: "Private Beta Readiness Checklist",
    desc: "Audit database access rules, feedback loops, and friendly pilot testers for early launches.",
    icon: BadgeAlert,
    tag: "Launch Checklist"
  }
];

export function ResourcesPreview() {
  return (
    <AnimatedSection id="resources-preview" className="w-full py-20 md:py-28 border-b border-[#DEDBC8]/10 bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 block">
              Scoping Library
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
              Useful before the call.
            </h2>
            <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
              Scoping checklist frameworks to audit your manual operations before we talk. Free, public, and open. No email wall.
            </p>
          </div>

          <Link
            href="/resources"
            className={cn(
              buttonVariants({ variant: "outline", size: "default" }),
              "border-[#DEDBC8]/25 text-[#DEDBC8] hover:bg-[#DEDBC8]/10 hover:border-[#DEDBC8]/40 rounded-full px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 outline-none shrink-0"
            )}
          >
            <span>Explore resources</span>
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESOURCE_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-[#212121] rounded-2xl border border-[#DEDBC8]/10 p-6 flex flex-col justify-between overflow-hidden min-h-[220px] hover:border-[#DEDBC8]/30 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[8px] font-mono text-gray-500 font-bold uppercase tracking-widest">
                      {card.tag}
                    </span>
                    <Icon className="h-4 w-4 text-[#DEDBC8]/70" />
                  </div>

                  <h3 className="text-[#E1E0CC] font-bold text-sm mb-2 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DEDBC8]/5 mt-4 flex items-center gap-1 text-[9px] font-mono font-bold text-[#DEDBC8]/60 uppercase group-hover:text-[#DEDBC8] transition-colors select-none">
                  <span>Read checklist</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </AnimatedSection>
  );
}
