"use client";

import React from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckSquare, ClipboardList, Eye, FileText, Settings } from "lucide-react";
import { SystemCard3D } from "@/components/three/SystemCard3D";

const RESOURCES = [
  {
    id: "mapping",
    title: "Workflow Mapping Checklist",
    icon: ClipboardList,
    helpsWith: "Turning a messy operational problem into structured data roles and screens.",
    target: "Operations managers and startup founders.",
    questions: "Who initiates the record? What status updates are triggered? Which actions require approval?",
    checklist: [
      "Define the intake trigger (email, call, form, scan)",
      "List all actors (operators, managers, customers, external partners)",
      "Map out status milestones (Pending, Active, Hold, Completed)",
      "Pinpoint where manual copy-paste errors currently happen",
      "Identify the single database record that tracks this workflow"
    ]
  },
  {
    id: "mvp",
    title: "MVP Scope Worksheet",
    icon: FileText,
    helpsWith: "Scoping the first buildable software iteration without framework bloat.",
    target: "Product owners and early-stage founders.",
    questions: "What is the single value metric? What features can be deferred to Model C? How many pilot users are testing?",
    checklist: [
      "Draft the core value proposition statement",
      "Limit pilot users to a maximum of 15 friendly testers",
      "Defer multi-role payment gateways to the second milestone",
      "Define successful validation criteria (e.g. 5 tasks completed in week 1)",
      "Identify fallback manual workarounds in case of system failures"
    ]
  },
  {
    id: "handoff",
    title: "Operational Handoff Audit",
    icon: Settings,
    helpsWith: "Finding where tasks get stuck between actors or teams.",
    target: "Operations leads and customer support teams.",
    questions: "Who is responsible for the transition? Are email follow-ups manual? How are delays checked?",
    checklist: [
      "Trace the path of a same-day order from start to finish",
      "List all manual notifications currently sent by staff",
      "Measure typical queue delays at each status transition",
      "Track where tasks are lost or require owner intervention",
      "Evaluate client follow-up frequency regarding progress status"
    ]
  },
  {
    id: "beta",
    title: "Private Beta Readiness Checklist",
    icon: CheckSquare,
    helpsWith: "Preparing staging platforms and feedback channels for early rollouts.",
    target: "Tech leads and product managers.",
    questions: "Are feedback loops integrated? Is staging secure? What indicators track error logs?",
    checklist: [
      "Set up isolated database configurations for staging",
      "Verify authorization gates restrict access to pilot users",
      "Add an on-screen Feedback button for direct user reports",
      "Establish automated daily error monitoring logs",
      "Prepare a production rollout cutover plan"
    ]
  },
  {
    id: "visibility",
    title: "Owner Visibility Checklist",
    icon: Eye,
    helpsWith: "Deciding what real-time metrics owners need on consolidated screens.",
    target: "Business owners, stakeholders, and executives.",
    questions: "What KPIs are checked daily? Are cash collections reconciled? Where are bottleneck alerts shown?",
    checklist: [
      "Select the top 3 metrics needed on the home screen view",
      "Reconcile daily card, cash, and bank transactions",
      "Identify queue backlog indicators that trigger warnings",
      "Define standard CSV export options for monthly reviews",
      "Set up notifications for near-expiry or stock-out events"
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />
      <SiteHeader />
      
      <main id="main-content" className="flex-grow py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 text-center md:text-left">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 block">
              Operational Utilities
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
              Workflow Resources
            </h1>
            <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
              Useful tools and checklists you can use with your team or bring to our scoping call. No email walls, no forms.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="flex flex-col gap-8 mb-20">
            {RESOURCES.map((res) => {
              const Icon = res.icon;
              return (
                <SystemCard3D 
                  key={res.id} 
                  id={res.id}
                  className="border border-[#DEDBC8]/10 bg-[#101010] rounded-[20px] p-6 md:p-8 flex flex-col lg:flex-row justify-between gap-8 hover:border-[#DEDBC8]/25 transition-all duration-300 scroll-mt-28"
                >
                  {/* Left: Resource descriptions (5 Cols) */}
                  <div className="lg:w-[360px] shrink-0 flex flex-col justify-between">
                    <div>
                      <div className="p-3 rounded-[8px] bg-black/40 border border-[#DEDBC8]/10 inline-flex text-[#DEDBC8] mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-[#E1E0CC] mb-3">
                        {res.title}
                      </h2>
                      <p className="text-xs leading-relaxed font-light text-gray-400 mb-6">
                        {res.helpsWith}
                      </p>

                      <div className="border-t border-[#DEDBC8]/5 pt-4 mb-4 flex flex-col gap-2.5 text-xs font-light text-gray-400">
                        <div>
                          <strong className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block mb-0.5">Who it is for:</strong>
                          {res.target}
                        </div>
                        <div>
                          <strong className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block mb-0.5">Key Questions Answered:</strong>
                          <span className="italic text-gray-300">{res.questions}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={HERO.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: "default" }),
                        "w-full bg-[#DEDBC8] hover:bg-[#DEDBC8]/90 text-black font-semibold rounded-full flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#DEDBC8]/50 focus-visible:ring-offset-2 outline-none transition-all duration-300 mt-6"
                      )}
                    >
                      <span>Use in kickoff call</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Right: On-page checklist (7 Cols) */}
                  <div className="flex-grow bg-black/35 border border-[#DEDBC8]/10 rounded-[16px] p-6 shadow-sm">
                    <span className="text-[9px] font-mono font-bold text-gray-500 tracking-wider uppercase mb-4 block select-none">
                      ON-PAGE CHECKLIST
                    </span>
                    <ul className="flex flex-col gap-3">
                      {res.checklist.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                          <input 
                            type="checkbox" 
                            id={`${res.id}-${idx}`}
                            className="w-4 h-4 rounded border-[#DEDBC8]/25 bg-black text-[#DEDBC8] focus:ring-[#DEDBC8] accent-[#DEDBC8] mt-0.5 shrink-0" 
                          />
                          <label htmlFor={`${res.id}-${idx}`} className="cursor-pointer select-none">
                            {item}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                </SystemCard3D>
              );
            })}
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
export const dynamic = "force-static";
