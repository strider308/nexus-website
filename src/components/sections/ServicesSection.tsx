"use client";

import React, { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Check, ArrowUpRight, Workflow, Cpu, Layers, BarChart3 } from "lucide-react";
import { WordsPullUpMultiStyle } from "../ui/words-pull-up";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

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

const BLUEPRINT_LAYERS = [
  {
    num: "01 / INPUTS",
    title: "Inputs",
    desc: "Forms, calls, spreadsheets, messages, files.",
    example: "e.g. Patient intake, QR orders",
    layerId: 1,
  },
  {
    num: "02 / LOGIC",
    title: "Workflow Rules",
    desc: "States, validations, approvals, calculations, routing logic.",
    example: "e.g. Multi-stage approvals",
    layerId: 2,
  },
  {
    num: "03 / ACCESS",
    title: "Roles & Permissions",
    desc: "Owner, staff, admin, customer, partner access.",
    example: "e.g. Scoped screens & views",
    layerId: 3,
  },
  {
    num: "04 / ACTIONS",
    title: "Automation",
    desc: "Assignments, reminders, notifications, webhooks.",
    example: "e.g. State-aware SMS pings",
    layerId: 4,
  },
  {
    num: "05 / VISIBILITY",
    title: "Dashboards",
    desc: "Queues, status views, reports, owner visibility.",
    example: "e.g. Turnaround average logs",
    layerId: 5,
  },
  {
    num: "06 / DEPLOY",
    title: "Handoff & Docs",
    desc: "Training notes, audit trail, deployment, operating guide.",
    example: "e.g. Sandbox operating log",
    layerId: 6,
  },
];

const SERVICE_LAYER_HIGHLIGHTS: Record<number, number[]> = {
  0: [1, 2, 3], // Custom Workflow Systems: Inputs, Logic, Access
  1: [2, 4],    // Automation Layers: Logic, Actions
  2: [2, 3, 6], // Private Beta Builds: Logic, Access, Deploy
  3: [5],       // Owner Dashboards: Visibility
};

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeService = hoveredService !== null ? hoveredService : selectedService;
  const highlightedLayers = activeService !== null ? SERVICE_LAYER_HIGHLIGHTS[activeService] : null;

  const isLayerHighlighted = (layerId: number) => {
    if (highlightedLayers) {
      return highlightedLayers.includes(layerId);
    }
    return false;
  };

  const blueprintContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
      },
    },
  };

  const blueprintCardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

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
          <div className="bg-[#212121] rounded-2xl border border-[#DEDBC8]/10 p-6 flex flex-col justify-between overflow-hidden min-h-[360px] relative group select-none">
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
            const isSelected = selectedService === idx;
            const isHovered = hoveredService === idx;
            const isActive = isSelected || isHovered;

            return (
              <button 
                key={idx}
                onClick={() => setSelectedService(isSelected ? null : idx)}
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
                onFocus={() => setHoveredService(idx)}
                onBlur={() => setHoveredService(null)}
                className={cn(
                  "bg-[#212121] rounded-2xl border text-left p-6 flex flex-col justify-between overflow-hidden min-h-[360px] relative group transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#DEDBC8] focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer",
                  isActive ? "border-[#2A7D8A] bg-[#2A7D8A]/[0.01]" : "border-[#DEDBC8]/10"
                )}
              >
                <div>
                  {/* Card Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={cn("text-xs font-mono font-bold transition-colors", isActive ? "text-[#2A7D8A]" : "text-gray-400")}>
                      {card.num}
                    </span>
                    <Icon className={cn("h-4 w-4 transition-colors", isActive ? "text-[#2A7D8A]" : "text-[#DEDBC8]/80 group-hover:text-[#DEDBC8]")} />
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
                <div className="pt-6 border-t border-[#DEDBC8]/5 mt-6 w-full flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-[#DEDBC8]/60 uppercase">
                    Explore Service
                  </span>
                  <div className={cn(
                    "w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0",
                    isActive ? "bg-[#2A7D8A] border-[#2A7D8A]" : "bg-black/40 border-[#DEDBC8]/10 group-hover:bg-[#DEDBC8] group-hover:border-[#DEDBC8]"
                  )}>
                    <ArrowUpRight className={cn("h-3 w-3 transition-colors", isActive ? "text-white" : "text-[#DEDBC8] group-hover:text-black")} />
                  </div>
                </div>
              </button>
            );
          })}

        </div>

        {/* Nexus Service Blueprint */}
        <div className="mt-24 pt-16 border-t border-[#DEDBC8]/10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 block">
              System Architecture
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
              Nexus Service Blueprint
            </h3>
            <p className="text-sm md:text-base font-light text-gray-300 leading-relaxed">
              Our structured approach maps raw inputs to fully managed handoffs. We build every layer in this stack to ensure operational clarity and complete data integrity.
            </p>
          </div>

          {/* Blueprint Steps Grid */}
          <motion.div 
            variants={blueprintContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 relative"
          >
            {BLUEPRINT_LAYERS.map((layer, idx) => {
              const isHighlighted = isLayerHighlighted(layer.layerId);
              
              return (
                <motion.div 
                  key={layer.layerId}
                  variants={blueprintCardVariants}
                  onMouseEnter={() => setHoveredLayer(layer.layerId)}
                  onMouseLeave={() => setHoveredLayer(null)}
                  onFocus={() => setHoveredLayer(layer.layerId)}
                  onBlur={() => setHoveredLayer(null)}
                  tabIndex={0}
                  className={cn(
                    "bg-[#101010] border rounded-[12px] p-5 flex flex-col justify-between relative group outline-none focus-visible:ring-2 focus-visible:ring-[#DEDBC8] min-h-[180px] transition-[border-color,box-shadow,transform,opacity] duration-200 ease-out",
                    isHighlighted ? "border-[#2A7D8A] shadow-[0_0_15px_rgba(42,125,138,0.15)] scale-[1.02]" : "border-[#DEDBC8]/10",
                    activeService !== null && !isHighlighted && "opacity-35"
                  )}
                >
                  <motion.div
                    aria-hidden="true"
                    initial={false}
                    animate={{ opacity: hoveredLayer === layer.layerId ? 1 : 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-[12px] border border-[#DEDBC8]/25 bg-[#DEDBC8]/5 pointer-events-none z-0"
                  />

                  <div className="relative z-10">
                    <span className={cn(
                      "text-[10px] font-mono font-bold block mb-2",
                      isHighlighted ? "text-[#2A7D8A]" : "text-gray-500"
                    )}>
                      {layer.num}
                    </span>
                    <h4 className="text-sm font-bold text-[#E1E0CC] mb-2">{layer.title}</h4>
                    <p className="text-xs text-gray-300 font-light leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#DEDBC8]/5 text-[10px] text-gray-400 font-mono relative z-10">
                    {layer.example}
                  </div>

                  {/* Connector Arrow (Desktop Only) */}
                  {idx < 5 && (
                    <div className="hidden xl:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
                      <svg className="w-5 h-5 text-[#DEDBC8]/20" viewBox="0 0 24 24" fill="none">
                        <motion.path
                          d="M 4 12 L 20 12 M 14 6 L 20 12 L 14 18"
                          stroke={isHighlighted && isLayerHighlighted(BLUEPRINT_LAYERS[idx + 1].layerId) ? "#2A7D8A" : "rgba(222, 219, 200, 0.1)"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </AnimatedSection>
  );
}
