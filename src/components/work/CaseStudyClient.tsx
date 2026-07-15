"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { CaseStudyData } from "@/content/case-studies";
import { CaseStudyHero } from "@/components/work/CaseStudyHero";
import { OperationalProblem } from "@/components/work/OperationalProblem";
import { WorkflowJourney } from "@/components/work/WorkflowJourney";
import { InterfaceGallery } from "@/components/work/InterfaceGallery";
import { RoleMap } from "@/components/work/RoleMap";
import { CapabilityGroups } from "@/components/work/CapabilityGroups";
import { IntegrationBoundary } from "@/components/work/IntegrationBoundary";
import { ProofSummary } from "@/components/work/ProofSummary";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { Progress } from "@/components/ui/progress";
import { useGSAP } from "@/lib/gsap/register";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";

interface CaseStudyClientProps {
  study: CaseStudyData;
  related: CaseStudyData[];
}

export function CaseStudyClient({ study, related }: CaseStudyClientProps) {
  const [activeAct, setActiveAct] = useState<number>(1);
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  const acts = [
    { id: 1, label: "Context", target: "#act-context" },
    { id: 2, label: "Workflow", target: "#act-workflow" },
    { id: 3, label: "Product", target: "#act-product" },
    { id: 4, label: "Boundaries", target: "#act-boundaries" },
    { id: 5, label: "Proof", target: "#act-proof" }
  ];

  useGSAP(
    () => {
      if (isReduced) return;

      // Track active act based on section viewport collision
      acts.forEach((act) => {
        ScrollTrigger.create({
          trigger: act.target,
          start: "top 30%",
          end: "bottom 30%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveAct(act.id);
            }
          },
        });
      });

      // Track total scroll percentage of the case study container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          setScrollPercent(self.progress * 100);
        },
      });
    },
    { scope: containerRef }
  );

  const handleScrollToAct = (target: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-16 select-text">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      {/* Sticky Desktop Acts Navigator */}
      <div className="fixed top-16 left-0 w-full bg-[#070707]/90 border-b border-[#dedbc8]/10 py-3.5 z-40 hidden md:block backdrop-blur-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6">
          <div className="flex gap-6 items-center">
            <span className="font-mono text-xs text-gray-500 font-bold uppercase">CASE STUDY PROGRESS:</span>
            <div className="flex gap-2">
              {acts.map((act) => {
                const isActive = activeAct === act.id;
                return (
                  <a
                    key={act.id}
                    href={act.target}
                    onClick={(e) => handleScrollToAct(act.target, e)}
                    className={`font-mono text-xs uppercase tracking-wider px-3 py-1 transition-all duration-300 ${
                      isActive 
                        ? "text-[#070707] bg-[#dedbc8] font-bold" 
                        : "text-gray-400 hover:text-gray-200 hover:bg-[#dedbc8]/5"
                    }`}
                  >
                    {act.label}
                  </a>
                );
              })}
            </div>
          </div>
          {/* Scroll progress slider line */}
          <div className="w-32 flex items-center gap-2">
            <span className="font-mono text-xs text-gray-500">{Math.round(scrollPercent)}%</span>
            <Progress value={scrollPercent} className="h-[2px] bg-gray-800" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto flex flex-col gap-24 relative z-10 px-6 md:px-12 pb-24 mt-16 md:mt-28">
        
        {/* Navigation Breadcrumb */}
        <div className="flex gap-2 items-center text-xs font-mono text-gray-500 uppercase">
          <Link href="/work" className="hover:text-white transition-colors">WORK INDEX</Link>
          <span>/</span>
          <span className="text-gray-300 font-bold">{study.name}</span>
        </div>

        {/* Hero Header */}
        <div className="border-b border-[#dedbc8]/14 pb-8">
          <CaseStudyHero study={study} />
        </div>

        {/* ==========================================
            ACT 1 — Context
            ========================================== */}
        <section id="act-context" className="flex flex-col gap-12 pt-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
              ACT 01 // SYSTEM CONTEXT
            </span>
            <h2 className="type-heading text-3xl md:text-5xl text-[#dedbc8] tracking-tight">
              Operating Background &amp; Silos
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">A. System Definition</span>
            <p className="type-body text-base text-gray-300 leading-relaxed max-w-4xl">
              {study.longDefinition}
            </p>
          </div>

          <div className="border-t border-[#dedbc8]/5 pt-8">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">B. Operational Problem</span>
            <OperationalProblem study={study} />
          </div>

          <div className="border-t border-[#dedbc8]/5 pt-8 flex flex-col gap-4">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">Fragmented Before-State Process</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#0d0d0d] p-6 border border-[#dedbc8]/10 text-xs">
              {study.beforeWorkflow.slice(0, 3).map((item, idx) => {
                const parts = item.split(": ");
                return (
                  <div key={idx} className="flex flex-col gap-2 p-4 border border-[#dedbc8]/5 bg-black/40">
                    <span className="font-mono text-red-400 font-bold uppercase tracking-wide">STAGE 0{idx + 1} {"//"} {parts[0]}</span>
                    <p className="text-gray-400 leading-relaxed font-light font-sans">{parts[1]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================
            ACT 2 — Workflow
            ========================================== */}
        <section id="act-workflow" className="border-t border-[#dedbc8]/10 pt-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
              ACT 02 // OPERATIONS WORKFLOW
            </span>
            <h2 className="type-heading text-3xl md:text-5xl text-[#dedbc8] tracking-tight">
              Roles &amp; Hand-offs Timeline
            </h2>
          </div>

          <div id="workflow-section">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">C. Audience Roles Matrix</span>
            <RoleMap systemId={study.slug} users={study.userRoleDescriptions} accentColor={study.accentColor} />
          </div>

          <div className="border-t border-[#dedbc8]/5 pt-8">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">D. End-to-End Stepper Path</span>
            <WorkflowJourney stages={study.workflowStages} accentColor={study.accentColor} />
          </div>
        </section>

        {/* ==========================================
            ACT 3 — Product
            ========================================== */}
        <section id="act-product" className="border-t border-[#dedbc8]/10 pt-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
              ACT 03 // THE BUILD SYSTEM
            </span>
            <h2 className="type-heading text-3xl md:text-5xl text-[#dedbc8] tracking-tight">
              Functional Modules &amp; Evidences
            </h2>
          </div>

          <div>
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">E. Reconstructed Evidence Mockups</span>
            <InterfaceGallery systemId={study.slug} frames={study.visualFrames} accentColor={study.accentColor} />
          </div>

          <div className="border-t border-[#dedbc8]/5 pt-8">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">F. Module Explanations</span>
            <CapabilityGroups groups={study.capabilityGroups} accentColor={study.accentColor} />
          </div>

          <div className="border-t border-[#dedbc8]/5 pt-8 flex flex-col gap-6">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">Information &amp; Automation State Rules</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="type-heading text-xl text-[#dedbc8]">Key System Interactions</h3>
                <ul className="flex flex-col gap-2.5 text-xs text-gray-300 font-light leading-relaxed font-sans">
                  {study.keyInteractions.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="text-gray-500 shrink-0 mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="type-heading text-xl text-[#dedbc8]">Automation State Rules</h3>
                <ul className="flex flex-col gap-2.5 text-xs text-gray-300 font-light leading-relaxed font-sans">
                  {study.automationRules.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="shrink-0 mt-0.5" style={{ color: study.accentColor }}>&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 flex flex-col gap-3 mt-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">Visibility &amp; Audit Trail Configurations</h4>
              <ul className="flex flex-col gap-2 text-xs text-gray-400 font-light leading-relaxed font-sans">
                {study.visibilityImprovements.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-green-400 shrink-0 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
                {study.dataAndAuditNotes.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-gray-500 shrink-0 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ==========================================
            ACT 4 — Boundaries
            ========================================== */}
        <section id="act-boundaries" className="border-t border-[#dedbc8]/10 pt-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
              ACT 04 // CLEAR BOUNDARIES
            </span>
            <h2 className="type-heading text-3xl md:text-5xl text-[#dedbc8] tracking-tight">
              Scope, Exclusions &amp; Integrations
            </h2>
          </div>

          <div>
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold font-sans">H. Boundaries &amp; API Integrations</span>
            <IntegrationBoundary
              integrations={study.integrationNarrative}
              limitations={study.limitations}
              safetyNotes={study.safetyNotes}
            />
            <div className="flex flex-col gap-3 bg-[#0d0d0d] border border-[#dedbc8]/10 p-6 mt-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold font-sans">Deployment &amp; Cloud Infrastructure</h4>
              <ul className="flex flex-col gap-2 text-xs text-gray-400 font-light leading-relaxed font-sans">
                {study.deploymentNotes.map((note, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-gray-600 shrink-0 mt-0.5">&bull;</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#dedbc8]/5 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="type-heading text-xl text-[#dedbc8]">Current Scope &amp; Deliverables</h3>
              <ul className="flex flex-col gap-2 text-xs text-gray-300 font-light leading-relaxed font-sans">
                {study.currentScope.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-[#2a7d8a] shrink-0 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="type-heading text-xl text-[#dedbc8]">Future Roadmap Direction</h3>
              <ul className="flex flex-col gap-2 text-xs text-gray-300 font-light leading-relaxed font-sans">
                {study.futureDirection.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-gray-500 shrink-0 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ==========================================
            ACT 5 — Proof
            ========================================== */}
        <section id="act-proof" className="border-t border-[#dedbc8]/10 pt-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
              ACT 05 // SYSTEM VERDICT
            </span>
            <h2 className="type-heading text-3xl md:text-5xl text-[#dedbc8] tracking-tight">
              Architectural Proofs &amp; Outcomes
            </h2>
          </div>

          <div>
            <ProofSummary 
              points={study.proofPoints} 
              architecturalNotes={study.architecturalDecisions}
              accentColor={study.accentColor} 
            />
          </div>

          {/* Related projects selection */}
          <div className="border-t border-[#dedbc8]/5 pt-8 flex flex-col gap-6">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">Explore other proof systems</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link 
                  key={item.slug} 
                  href={`/work/${item.slug}`}
                  className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-5 hover:border-[#dedbc8]/40 transition-colors flex flex-col justify-between min-h-[140px]"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs text-gray-500 font-bold uppercase">{item.category}</span>
                    <span className="text-sm font-bold text-[#dedbc8] uppercase tracking-wide">{item.name}</span>
                    <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-2">{item.shortDefinition}</p>
                  </div>
                  <span className="font-mono text-xs mt-4 block" style={{ color: item.accentColor }}>VIEW SCHEMAS &rarr;</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="border border-[#dedbc8]/14 bg-[#0d0d0d] p-8 md:p-12 text-center flex flex-col items-center gap-6 mt-8">
            <h2 className="type-heading text-2xl md:text-3xl text-[#dedbc8] tracking-tight">
              Map your workflow into a custom system
            </h2>
            <p className="type-body text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
              Discuss a pilot build or request architectural schema consults directly with our engineering team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/contact"
                className="border border-[#dedbc8] bg-[#dedbc8] px-6 py-3 text-xs font-sans font-semibold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300 rounded-none text-center"
              >
                Describe your workflow &rarr;
              </Link>
              <Link
                href="/work"
                className="border border-[#dedbc8]/20 px-6 py-3 text-xs font-sans font-semibold uppercase text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8]/5 transition-all duration-300 rounded-none text-center"
              >
                Back to Work Index
              </Link>
            </div>
          </div>
        </section>

      </div>

      <SiteFooter />
    </div>
  );
}
export default CaseStudyClient;
