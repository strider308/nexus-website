"use client";

import { AnimatedSection } from "@/components/ui/animated-section";

const LEDGER_ROWS = [
  {
    name: "ClinicOS",
    domain: "Outpatient Health",
    proves: "Multi-role orchestration across patient registration, clinical queues, billing counters, and pharmacy loops.",
    capabilities: "State logic, role permissions, billing handoffs, owner metrics",
    evidence: "Full workflow system mockup & role model"
  },
  {
    name: "Aarogya",
    domain: "Personal Metrics",
    proves: "User-controlled data structures with client-side logging, deletion pipelines, and trends charts.",
    capabilities: "Trend math, local storage state, data export, privacy controls",
    evidence: "Personal health information tracker preview"
  },
  {
    name: "RestaurantOS",
    domain: "Hospitality Ops",
    proves: "Synchronous table order routing, live kitchen queue logs, and end-of-day cash reconciliation dashboards.",
    capabilities: "Live order tracking, bill reconciliation, role dashboards",
    evidence: "Kitchen queue display & QR-order state machine model"
  },
  {
    name: "ShipWright",
    domain: "Async Team Workspace",
    proves: "Accountability scoping loops with milestone limits, owner status checks, and check-in audits.",
    capabilities: "Task ownership logs, progress bars, milestone checklists",
    evidence: "Async task manager & progress tracker mockup"
  },
  {
    name: "SecureScan",
    domain: "Vulnerability Auditing",
    proves: "Authorized automated scanning, vulnerability severity tags, and structured threat logs.",
    capabilities: "Severity classification models, reports builder, audit trails",
    evidence: "Static scanner preview & vulnerability sample report"
  },
  {
    name: "SafeDate",
    domain: "Personal Safety UX",
    proves: "Consent-aware sharing layers, trusted contact networks, and secure time-locked status triggers.",
    capabilities: "Timed countdown states, contact notifications, consent rules",
    evidence: "Safety plan check-in manager reference model"
  },
  {
    name: "BuildPublic",
    domain: "Founder Hub",
    proves: "Segmented workspace data permissions: private task tracking and automated public execution feeds.",
    capabilities: "Public/private data segregation, milestone feeds, audit loops",
    evidence: "Execution progress log & public project preview"
  }
];

export function ProofLedger() {
  return (
    <AnimatedSection id="proof-ledger" className="w-full py-16 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
            Evidence Matrix
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-4">
            Proof Ledger
          </h2>
          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
            Seven shipped proof systems. Each one demonstrates a different part of the Nexus operating model: roles, handoffs, visibility, automation, risk logic, data tracking, and launch discipline.
          </p>
        </div>

        {/* Ledger Table */}
        <div className="overflow-x-auto border border-border/80 bg-muted/10 rounded-[8px] shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="p-4 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider w-[120px]">
                  System
                </th>
                <th className="p-4 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider w-[120px]">
                  Domain
                </th>
                <th className="p-4 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                  What It Proves
                </th>
                <th className="p-4 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider w-[240px]">
                  Capabilities Demonstrated
                </th>
                <th className="p-4 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider w-[200px]">
                  Evidence Type
                </th>
              </tr>
            </thead>
            <tbody>
              {LEDGER_ROWS.map((row, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-background transition-colors font-sans">
                  <td className="p-4 text-xs font-bold text-primary">
                    {row.name}
                  </td>
                  <td className="p-4 text-xs text-foreground/80 font-medium">
                    {row.domain}
                  </td>
                  <td className="p-4 text-xs text-muted-foreground font-light leading-relaxed">
                    {row.proves}
                  </td>
                  <td className="p-4 text-xs text-[#2E6FAD] font-mono font-semibold">
                    {row.capabilities}
                  </td>
                  <td className="p-4 text-xs text-foreground/90 font-medium italic">
                    {row.evidence}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </AnimatedSection>
  );
}
