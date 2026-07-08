import { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { METADATA, HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Cpu, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Engagement Services — Nexus",
  description: "Explore custom software, automation layers, owner dashboards, UX modernization, and private beta development models by Nexus.",
  alternates: {
    canonical: `${METADATA.canonicalUrl}/services`,
  },
  openGraph: {
    title: "Core Engagement Services — Nexus",
    description: "Explore custom software, automation layers, owner dashboards, UX modernization, and private beta development models by Nexus.",
    url: `${METADATA.canonicalUrl}/services`,
  }
};

const SERVICES_LIST = [
  {
    id: "workflow",
    title: "Custom Workflow Systems",
    when: "Your team runs on scattered tools (chats, sheets, emails), manual handoffs, and owner memory. Tasks fall through the cracks.",
    builds: "A role-aware operational web application that structures intake, assignments, active states, and completion audits.",
    inputs: "Current spreadsheets, chat logs, user roles definition, and typical bottlenecks list.",
    deliverables: "Bespoke database schema, role-tailored dashboards, automated assignment routing, and secure hosting config.",
    proof: "ClinicOS, RestaurantOS, ShipWright",
  },
  {
    id: "automation",
    title: "Automation Layers",
    when: "Staff spend hours copying data between tools, sending manual follow-ups, or running status checks.",
    builds: "Automated background pipelines, state-aware email/SMS notifications, and third-party webhook integrations.",
    inputs: "API access credentials, current operational steps guide, and trigger/event definitions.",
    deliverables: "Background task engines, SMS/email templates, API connection bridges, and error-fallback alerts.",
    proof: "ShipWright, Aarogya",
  },
  {
    id: "mvp",
    title: "MVP / Private Beta Builds",
    when: "You have a validated manual concept but need a secure, functional software version to pilot with early adopters.",
    builds: "A scoped software product featuring core workflow engines, secure authentication, and feedback collections.",
    inputs: "Core value proposition, 5-10 pilot users list, and immediate workflow objectives.",
    deliverables: "Working web app deployment, staging URL, feedback channel logs, and usage diagnostics.",
    proof: "BuildPublic, SafeDate, SecureScan",
  },
  {
    id: "dashboards",
    title: "Owner Dashboards",
    when: "You are running operations blind, relying on status meetings or phone pings to understand today's collection metrics.",
    builds: "Live consolidated dashboard screens detailing active queue metrics, turnaround times, and billing collection summaries.",
    inputs: "Required KPIs list, primary database access, and current spreadsheet report formats.",
    deliverables: "Real-time query consolidation panel, automated metric charts, stock-out/bottleneck alerts, and csv exports.",
    proof: "RestaurantOS, ClinicOS, Aarogya",
  },
  {
    id: "ux",
    title: "UX & Workflow Modernization",
    when: "Legacy systems or complex sheets are making employee training slow and input errors common.",
    builds: "Cleared-up user journeys, role-tailored forms, and robust error-prevention checks.",
    inputs: "Screenshots of legacy software, common input errors log, and employee feedback list.",
    deliverables: "Clean responsive user interfaces, simplified data input paths, and visual state indicators.",
    proof: "ClinicOS, Aarogya, RestaurantOS",
  },
  {
    id: "ai",
    title: "AI-Assisted Workflow Features",
    when: "Operators spend hours summarizing text logs, draft-writing reports, or categorizing entries manually.",
    builds: "Scoped LLM summarization APIs, template drafting assistance logs, and classification models with human oversight.",
    inputs: "Sample text files, categorization rules, and human-in-the-loop validation criteria.",
    deliverables: "LLM pipeline connectors, template auto-populators, and draft approval dashboard views.",
    proof: "ClinicOS, SecureScan",
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      
      <main id="main-content" className="flex-grow bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
              Capabilities Brochure
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight mb-4">
              Core Engagement Services
            </h1>
            <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
              We design and build custom software that solves operational complexity. Explore our service scopes below, modeled on shipped proof systems.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {SERVICES_LIST.map((srv) => (
              <div 
                key={srv.id} 
                className="border border-border bg-background rounded-[12px] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-primary mb-4 pb-3 border-b border-border/60">
                    {srv.title}
                  </h2>
                  
                  {/* When this matters */}
                  <div className="mb-4">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase flex items-center gap-1 mb-1">
                      <HelpCircle className="h-3 w-3 text-[#2E6FAD]" /> When This Matters
                    </span>
                    <p className="text-xs text-foreground/80 leading-relaxed font-light">
                      {srv.when}
                    </p>
                  </div>

                  {/* What we build */}
                  <div className="mb-4">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase flex items-center gap-1 mb-1">
                      <Cpu className="h-3 w-3 text-[#2E6FAD]" /> What We Build
                    </span>
                    <p className="text-xs text-primary font-medium leading-relaxed">
                      {srv.builds}
                    </p>
                  </div>

                  {/* Expected Inputs & Deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-border/40 mb-4">
                    <div>
                      <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase block mb-1">
                        Expected Inputs
                      </span>
                      <p className="text-[11px] text-foreground/70 leading-relaxed font-light">
                        {srv.inputs}
                      </p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase block mb-1">
                        Typical Deliverables
                      </span>
                      <p className="text-[11px] text-foreground/70 leading-relaxed font-light">
                        {srv.deliverables}
                      </p>
                    </div>
                  </div>

                  {/* Related Proof */}
                  <div className="bg-muted/30 p-3 rounded-[6px] border border-border/60 mb-6 flex justify-between items-center text-xs">
                    <span className="font-mono text-[9px] text-muted-foreground uppercase font-bold">Related Proof:</span>
                    <span className="font-semibold text-primary">{srv.proof}</span>
                  </div>
                </div>

                <a
                  href={HERO.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "w-full bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold rounded-[6px] flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#1A2B4C]/50 focus-visible:ring-offset-2 outline-none interactive-action mt-2"
                  )}
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Expectations block */}
          <div className="border border-[#2E6FAD]/25 bg-[#2E6FAD]/5 rounded-[12px] p-6 md:p-10 text-center max-w-4xl mx-auto">
            <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-3">
              Not sure which service fits?
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground font-light leading-relaxed mb-6 max-w-2xl mx-auto">
              Bring us your messy spreadsheet, paper checklists, or fragmented processes. We will map them out together during our kickoff scoping call and recommend the narrowest initial build.
            </p>
            <a
              href={HERO.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#1A2B4C]/50 focus-visible:ring-offset-2 outline-none interactive-action"
              )}
            >
              <span>Map your workflow with us</span>
            </a>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
export const dynamic = "force-static";
