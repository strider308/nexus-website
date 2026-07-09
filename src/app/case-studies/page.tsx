import { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { METADATA, HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link as LinkIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Shipped Proof — Nexus",
  description: "Browse seven proof-of-work systems built by Nexus covering healthcare operations, async team execution, restaurant POS table states, developer scanning, and dating safety.",
  alternates: {
    canonical: `${METADATA.canonicalUrl}/case-studies`,
  },
  openGraph: {
    title: "Case Studies & Shipped Proof — Nexus",
    description: "Browse seven proof-of-work systems built by Nexus covering healthcare operations, async team execution, restaurant POS table states, developer scanning, and dating safety.",
    url: `${METADATA.canonicalUrl}/case-studies`,
  }
};

const STUDIES_LIST = [
  {
    id: "clinicos",
    name: "ClinicOS",
    category: "Outpatient Clinic Operations Platform",
    tagline: "Run the patient journey from enquiry to pharmacy through one connected workflow.",
    proves: [
      "Multi-role outpatient operations",
      "Queue and appointment state logic",
      "Billing and pharmacy handoffs",
      "Owner visibility",
      "Audit-aware workflows"
    ],
    capabilities: "Patient registration, doctor token queues, consultations log, diagnostics billing, pharmacy inventory summaries",
    model: "Model C: Operational System Build",
    link: "/demo#clinicos"
  },
  {
    id: "aarogya",
    name: "Aarogya",
    category: "Personal Health Information & Routine Tracker",
    tagline: "A clean interface for logging and tracking blood pressure, glucose, weight, and medications.",
    proves: [
      "Personal data tracking",
      "Trend summaries",
      "User-controlled health records",
      "Export/delete flows",
      "Safety-conscious health UX"
    ],
    capabilities: "Metric logging graphs, weekly summaries, medication reminders, JSON/CSV exports, local storage controls",
    model: "Model B: Private Beta Build",
    link: "/demo#aarogya"
  },
  {
    id: "restaurantos",
    name: "RestaurantOS",
    category: "Restaurant Ordering & Operations Platform",
    tagline: "Run QR menus, kitchen queues, table billing, and cash reports under one system.",
    proves: [
      "Table-to-kitchen flow",
      "Live order state",
      "Billing reconciliation",
      "Service coordination",
      "Owner dashboarding"
    ],
    capabilities: "QR menu scan layouts, table order dispatchers, kitchen status logs, billing registers, cash reports, owner views",
    model: "Model C: Operational System Build",
    link: "/demo#restaurantos"
  },
  {
    id: "shipwright",
    name: "ShipWright",
    category: "Async Team Workspace & Accountability Log",
    tagline: "Track task ownership, daily check-ins, and team velocity without status meetings.",
    proves: [
      "Async execution",
      "Task ownership",
      "Accountability loops",
      "Team progress visibility",
      "Founder/operator workflows"
    ],
    capabilities: "Task cards, daily checks, checkpoint milestones, check-in schedules, progress bars, velocity reports",
    model: "Model B: Private Beta Build",
    link: "/demo#shipwright"
  },
  {
    id: "securescan",
    name: "SecureScan",
    category: "Vulnerability Scanning & Developer Portal",
    tagline: "Manage authorized scans, view classification logs, and export findings.",
    proves: [
      "Authorized risk scanning",
      "Severity classification",
      "Sample reports",
      "Developer workflow",
      "Security-conscious product UX"
    ],
    capabilities: "Threat scan triggers, severity categorization logs, report builders, audit logs, webhook actions",
    model: "Model B: Private Beta Build",
    link: "/demo#securescan"
  },
  {
    id: "safedate",
    name: "SafeDate",
    category: "Dating Safety Planning & Time-Locked Check-In",
    tagline: "Share plans with trusted contacts and configure timed check-in status rules.",
    proves: [
      "Consent-aware sharing",
      "Timed check-ins",
      "Trusted-contact flows",
      "Safety-state logic",
      "Sensitive UX design"
    ],
    capabilities: "Plan forms, contact mapping details, check-in countdown timers, email alert webhooks, closeout loops",
    model: "Model B: Private Beta Build",
    link: "/demo#safedate"
  },
  {
    id: "buildpublic",
    name: "BuildPublic",
    category: "Founder Task Workspace & Progress Logs",
    tagline: "Maintain private boards. Stream public execution progress logs to build momentum.",
    proves: [
      "Founder accountability",
      "Public/private progress layers",
      "Milestone sharing",
      "Execution dashboards",
      "Audience-facing workflow"
    ],
    capabilities: "Private boards, progress feeds, social cross-posts, milestone trackers, RSS feeds, viewer dashboards",
    model: "Model B: Private Beta Build",
    link: "/demo#buildpublic"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-noise" />
      <SiteHeader />
      
      <main id="main-content" className="flex-grow py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 text-center md:text-left">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] uppercase text-gray-500 mb-3 block">
              Shipped Evidence
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[#E1E0CC] leading-tight mb-4">
              Case Studies &amp; Shipped Proof
            </h1>
            <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
              Every system below was designed and built end-to-end by Nexus. They are proof of technical range and execution, not a fixed catalog. We build custom solutions to fit your specific workflow.
            </p>
          </div>

          {/* Studies Grid */}
          <div className="flex flex-col gap-8 mb-20">
            {STUDIES_LIST.map((study) => (
              <div 
                key={study.id} 
                className="border border-[#DEDBC8]/10 bg-[#101010] rounded-[20px] p-6 md:p-8 flex flex-col lg:flex-row justify-between gap-8 hover:border-[#DEDBC8]/25 transition-all duration-300"
              >
                {/* Left block: details */}
                <div className="flex-grow max-w-3xl">
                  <span className="text-[9px] font-mono font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    {study.category}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#E1E0CC] mb-3">
                    {study.name}
                  </h2>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light mb-6">
                    {study.tagline}
                  </p>

                  {/* What it proves */}
                  <div className="mt-4 p-5 bg-black/40 border border-[#DEDBC8]/10 rounded-[12px] mb-6">
                    <span className="text-[9px] font-mono font-bold text-gray-500 tracking-wider uppercase mb-3 block">
                      What This Proves
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {study.proves.map((prov, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-[#E1E0CC]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DEDBC8] shrink-0" />
                          <span>{prov}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-1 pt-4 border-t border-[#DEDBC8]/5 text-xs font-light text-gray-400 leading-relaxed">
                    <div>
                      <strong className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block mb-0.5">Capabilities Implemented:</strong>
                      {study.capabilities}
                    </div>
                  </div>
                </div>

                {/* Right block: CTA & Models */}
                <div className="lg:w-[260px] shrink-0 border-t lg:border-t-0 lg:border-l border-[#DEDBC8]/10 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-gray-500 uppercase block mb-1">
                      Service Model
                    </span>
                    <span className="text-xs font-bold text-[#E1E0CC] block mb-6">
                      {study.model}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={study.link}
                      className={cn(
                        buttonVariants({ size: "default" }),
                        "w-full bg-[#DEDBC8] hover:bg-[#DEDBC8]/90 text-black font-semibold rounded-full flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#DEDBC8]/50 focus-visible:ring-offset-2 outline-none transition-all duration-300"
                      )}
                    >
                      <LinkIcon className="h-3.5 w-3.5" />
                      <span>Explore Demo</span>
                    </a>
                    <a
                      href={HERO.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center border border-[#DEDBC8]/25 text-[#DEDBC8] hover:bg-[#DEDBC8]/10 hover:border-[#DEDBC8]/40 rounded-full px-5 py-2.5 w-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 outline-none text-center"
                    >
                      <span>Discuss workflow</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
export const dynamic = "force-static";
