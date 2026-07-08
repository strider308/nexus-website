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
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      
      <main id="main-content" className="flex-grow bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
              Shipped Evidence
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight mb-4">
              Case Studies &amp; Shipped Proof
            </h1>
            <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
              Every system below was designed and built end-to-end by Nexus. They are proof of technical range and execution, not a fixed catalog. We build custom solutions to fit your specific workflow.
            </p>
          </div>

          {/* Studies Grid */}
          <div className="flex flex-col gap-12 mb-20">
            {STUDIES_LIST.map((study) => (
              <div 
                key={study.id} 
                className="border border-border bg-background rounded-[12px] p-6 md:p-8 flex flex-col lg:flex-row justify-between gap-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Left block: details */}
                <div className="flex-grow max-w-3xl">
                  <span className="text-[9px] font-mono font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                    {study.category}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
                    {study.name}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed font-light mb-6">
                    {study.tagline}
                  </p>

                  {/* What it proves */}
                  <div className="mt-4 p-4 bg-muted/30 border border-border/80 rounded-[8px] mb-6">
                    <span className="text-[9px] font-mono font-bold text-muted-foreground tracking-wider uppercase mb-2 block">
                      What This Proves
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.proves.map((prov, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-primary">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E6FAD] shrink-0" />
                          <span>{prov}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-1 pt-3 border-t border-border/40 text-xs font-light text-muted-foreground leading-relaxed">
                    <div>
                      <strong className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground block mb-0.5">Capabilities Implemented:</strong>
                      {study.capabilities}
                    </div>
                  </div>
                </div>

                {/* Right block: CTA & Models */}
                <div className="lg:w-[260px] shrink-0 border-t lg:border-t-0 lg:border-l border-border/60 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-[#2E6FAD] uppercase block mb-1">
                      Service Model
                    </span>
                    <span className="text-xs font-bold text-primary block mb-6">
                      {study.model}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={study.link}
                      className={cn(
                        buttonVariants({ size: "default" }),
                        "w-full bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold rounded-[6px] flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#1A2B4C]/50 focus-visible:ring-offset-2 outline-none interactive-action"
                      )}
                    >
                      <LinkIcon className="h-4 w-4" />
                      <span>Explore Demo</span>
                    </a>
                    <a
                      href={HERO.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "default" }),
                        "w-full border-border text-primary font-semibold rounded-[6px] flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 outline-none"
                      )}
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
