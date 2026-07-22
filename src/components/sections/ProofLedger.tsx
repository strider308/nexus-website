"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const LEDGER_CARDS = [
  {
    id: "clinicos",
    name: "ClinicOS",
    domain: "Outpatient Health",
    proves: "Multi-role orchestration across patient registration, clinical queues, billing counters, and pharmacy loops.",
    capabilities: "State logic, role permissions, billing handoffs, owner metrics",
    evidence: "Full workflow system mockup & role model",
    accent: "#4A7BC4",
    link: "/case-studies#clinicos"
  },
  {
    id: "aarogya",
    name: "Aarogya",
    domain: "Personal Metrics",
    proves: "User-controlled data structures with client-side logging, deletion pipelines, and trends charts.",
    capabilities: "Trend math, local storage state, data export, privacy controls",
    evidence: "Personal health information tracker preview",
    accent: "#6FA876",
    link: "/case-studies#aarogya"
  },
  {
    id: "restaurantos",
    name: "RestaurantOS",
    domain: "Hospitality Ops",
    proves: "Synchronous table order routing, live kitchen queue logs, and end-of-day cash reconciliation dashboards.",
    capabilities: "Live order tracking, bill reconciliation, role dashboards",
    evidence: "Kitchen queue display & QR-order state machine model",
    accent: "#C87B3A",
    link: "/case-studies#restaurantos"
  },
  {
    id: "shipwright",
    name: "ShipWright",
    domain: "Async Team Workspace",
    proves: "Accountability scoping loops with milestone limits, owner status checks, and check-in audits.",
    capabilities: "Task ownership logs, progress bars, milestone checklists",
    evidence: "Async task manager & progress tracker mockup",
    accent: "#8B7BC4",
    link: "/case-studies#shipwright"
  },
  {
    id: "securescan",
    name: "SecureScan",
    domain: "Vulnerability Auditing",
    proves: "Authorized automated scanning, vulnerability severity tags, and structured threat logs.",
    capabilities: "Severity classification models, reports builder, audit trails",
    evidence: "Static scanner preview & vulnerability sample report",
    accent: "#3A9EAA",
    link: "/case-studies#securescan"
  },
  {
    id: "safedate",
    name: "SafeDate",
    domain: "Personal Safety UX",
    proves: "Consent-aware sharing layers, trusted contact networks, and secure time-locked status triggers.",
    capabilities: "Timed countdown states, contact notifications, consent rules",
    evidence: "Safety plan check-in manager reference model",
    accent: "#C44A7A",
    link: "/case-studies#safedate"
  },
  {
    id: "buildpublic",
    name: "BuildPublic",
    domain: "Founder Hub",
    proves: "Segmented workspace data permissions: private task tracking and automated public execution feeds.",
    capabilities: "Public/private data segregation, milestone feeds, audit loops",
    evidence: "Execution progress log & public project preview",
    accent: "#4A8A5A",
    link: "/case-studies#buildpublic"
  }
];

export function ProofLedger() {
  return (
    <AnimatedSection id="proof-ledger" className="w-full py-20 md:py-28 border-b border-[#DEDBC8]/10 bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs md:text-sm font-mono font-bold tracking-[0.25em] uppercase text-gray-400 mb-3 block">
            Evidence Matrix
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
            Seven proof systems. One operating logic.
          </h2>
          <p className="text-sm md:text-base font-light text-gray-300 leading-relaxed max-w-2xl">
            These are not menu items. They are shipped proof systems showing how Nexus handles roles, handoffs, dashboards, risk logic, and launch discipline.
          </p>
        </div>

        {/* Cinematic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {LEDGER_CARDS.map((card, idx) => (
            <div 
              key={idx}
              id={card.id}
              className="bg-[#212121] rounded-2xl border border-[#DEDBC8]/10 p-5 flex flex-col justify-between overflow-hidden min-h-[300px] hover:border-[#DEDBC8]/30 transition-all duration-300 group scroll-mt-28"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#DEDBC8]/5">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    {card.domain}
                  </span>
                  
                  {/* Small circular accent indicator */}
                  <span 
                    className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.1)] shrink-0" 
                    style={{ backgroundColor: card.accent }}
                  />
                </div>

                {/* Name */}
                <h3 className="text-[#E1E0CC] font-bold text-lg mb-2">
                  {card.name}
                </h3>

                {/* What it proves */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-4">
                  {card.proves}
                </p>

                {/* Capabilities */}
                <div className="mt-4 pt-3 border-t border-[#DEDBC8]/5">
                  <span className="text-xs font-mono uppercase text-gray-400 block mb-0.5">
                    Capabilities
                  </span>
                  <span className="text-xs sm:text-sm text-[#DEDBC8] font-mono font-medium block leading-normal">
                    {card.capabilities}
                  </span>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-6 pt-3 border-t border-[#DEDBC8]/5 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs font-mono uppercase text-gray-400">
                    Evidence
                  </span>
                  <span className="text-xs sm:text-sm text-gray-200 italic font-light truncate max-w-[150px]">
                    {card.evidence}
                  </span>
                </div>
                
                <Link
                  href={card.link}
                  className="w-6 h-6 rounded-full bg-black/40 border border-[#DEDBC8]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#DEDBC8] group-hover:border-[#DEDBC8] shrink-0"
                  aria-label={`View ${card.name} case study`}
                >
                  <ArrowUpRight className="h-3 w-3 text-[#DEDBC8] group-hover:text-black transition-colors" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
