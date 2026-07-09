"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Check, ArrowUpRight, Workflow, Cpu, Layers, BarChart3 } from "lucide-react";
import { WordsPullUpMultiStyle } from "../ui/words-pull-up";

const PREMIUM_CARDS = [
  {
    num: "01",
    title: "Custom Workflow Systems",
    desc: "We build tailored software applications designed around your specific team roles, operational steps, data inputs, and invoice approvals.",
    icon: Workflow,
    checklist: [
      "Multi-role intake portals",
      "Aligned transition states",
      "Guided operator interfaces",
      "Integrated billing records"
    ]
  },
  {
    num: "02",
    title: "Automation Layers",
    desc: "We connect your existing databases, calendar triggers, chat feeds, and notifications to remove repetitive manual follow-ups.",
    icon: Cpu,
    checklist: [
      "Background task triggers",
      "Secure calendar integrations",
      "Automatic email draft pings",
      "Third-party webhook syncs"
    ]
  },
  {
    num: "03",
    title: "Private Beta Builds",
    desc: "We construct lightweight, fast-loading initial versions of your software designed to validate assumptions with early pilot users.",
    icon: Layers,
    checklist: [
      "Sandboxed database rules",
      "Secure feedback logs",
      "Scoped user pilot releases",
      "Fast deployment hosting"
    ]
  },
  {
    num: "04",
    title: "Owner Dashboards",
    desc: "We aggregate active room counts, table turnaround rates, and cash collections into consolidated dashboard views.",
    icon: BarChart3,
    checklist: [
      "Real-time pipeline views",
      "Average turnaround logs",
      "Cash collection stats",
      "Secure data exports"
    ]
  }
];

export function ServicesSection() {
  return (
    <AnimatedSection id="services-brochure" className="w-full py-20 md:py-28 border-b border-[#DEDBC8]/10 bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.12] bg-noise" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 text-center mx-auto">
          <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block">
            Capabilities Ledger
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight max-w-2xl mx-auto">
            <WordsPullUpMultiStyle 
              segments={[
                { text: "Systems for operators who have outgrown scattered tools.", className: "text-[#E1E0CC]" },
                { text: " Mapped with care. Built with discipline.", className: "text-gray-500 font-serif" }
              ]}
            />
          </h2>
        </div>

        {/* 5-Column Grid (Visual Card + 4 Premium Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Card 1: Static Blueprint Visual Card */}
          <div className="bg-[#212121] rounded-2xl border border-[#DEDBC8]/10 p-6 flex flex-col justify-between overflow-hidden min-h-[360px] relative group">
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:12px_12px]" />
            
            {/* Embedded static SVG visual */}
            <div className="flex-grow flex items-center justify-center py-4">
              <svg className="w-4/5 max-w-[160px] aspect-square text-[#DEDBC8]/20" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <path d="M 50 20 L 50 80 M 20 50 L 80 50" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="3" fill="#DEDBC8" />
                <circle cx="20" cy="50" r="1.5" fill="currentColor" />
                <circle cx="80" cy="50" r="1.5" fill="currentColor" />
                <circle cx="50" cy="20" r="1.5" fill="currentColor" />
                <circle cx="50" cy="80" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <div>
              <span className="text-xs font-mono tracking-wide text-gray-400 uppercase block mb-1">
                Blueprint Layout
              </span>
              <h3 className="text-[#E1E0CC] font-bold text-base">
                Your workflow, mapped.
              </h3>
            </div>
          </div>

          {/* Cards 2-5: Premium Service Cards */}
          {PREMIUM_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-[#212121] rounded-2xl border border-[#DEDBC8]/10 p-6 flex flex-col justify-between overflow-hidden min-h-[360px] relative group hover:border-[#DEDBC8]/30 transition-all duration-300"
              >
                <div>
                  {/* Card Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-gray-400 font-bold">
                      {card.num}
                    </span>
                    <Icon className="h-4 w-4 text-[#DEDBC8]/80 group-hover:text-[#DEDBC8] transition-colors" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[#E1E0CC] font-bold text-base mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-6">
                    {card.desc}
                  </p>

                  {/* Checklists */}
                  <ul className="flex flex-col gap-2">
                    {card.checklist.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs text-gray-300 font-light">
                        <Check className="h-3.5 w-3.5 text-[#DEDBC8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Action button */}
                <div className="pt-6 border-t border-[#DEDBC8]/5 mt-6 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-[#DEDBC8]/60 uppercase">
                    Explore Service
                  </span>
                  <div className="w-6 h-6 rounded-full bg-black/40 border border-[#DEDBC8]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#DEDBC8] group-hover:border-[#DEDBC8] shrink-0">
                    <ArrowUpRight className="h-3 w-3 text-[#DEDBC8] group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </AnimatedSection>
  );
}
