"use client";

import React from "react";
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

interface CaseStudyClientProps {
  study: CaseStudyData;
  related: CaseStudyData[];
}

export function CaseStudyClient({ study, related }: CaseStudyClientProps) {
  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedbc8] pt-16 select-text">
      <SiteHeader />
      
      {/* Background Noise Layer */}
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10 px-6 md:px-12 pb-24 mt-12">
        {/* Navigation Breadcrumb */}
        <div className="flex gap-2 items-center text-xs font-mono text-gray-500 uppercase">
          <Link href="/work" className="hover:text-white transition-colors">WORK INDEX</Link>
          <span>/</span>
          <span className="text-gray-300 font-bold">{study.name}</span>
        </div>

        {/* 1. Project Hero */}
        <div className="border-b border-[#dedbc8]/14 pb-8">
          <CaseStudyHero study={study} />
        </div>

        {/* 2. What the product is */}
        <section className="flex flex-col gap-4">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">A. System Definition</span>
          <h2 className="font-serif text-3xl font-light italic text-[#dedbc8] tracking-tight">What is {study.name}?</h2>
          <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed max-w-4xl">
            {study.longDefinition}
          </p>
        </section>

        {/* 3. Why it exists & Operating Problem */}
        <section className="border-t border-[#dedbc8]/10 pt-8">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">B. Why it exists</span>
          <OperationalProblem study={study} />
        </section>

        {/* 4. Before-state visual */}
        <section className="border-t border-[#dedbc8]/10 pt-8 flex flex-col gap-4">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">Legacy Operational Process</span>
          <h3 className="font-serif text-xl italic text-[#dedbc8]">Typical fragmented lifecycle before {study.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#0d0d0d] p-6 border border-[#dedbc8]/10 text-xs">
            {study.beforeWorkflow.slice(0, 3).map((item, idx) => {
              const parts = item.split(": ");
              return (
                <div key={idx} className="flex flex-col gap-2 p-4 border border-[#dedbc8]/5 bg-black/40">
                  <span className="font-mono text-red-400 font-bold uppercase tracking-wide">STAGE 0{idx + 1} {"//"} {parts[0]}</span>
                  <p className="text-gray-400 leading-relaxed font-light">{parts[1]}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Who uses it */}
        <section className="border-t border-[#dedbc8]/10 pt-8">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">C. Intended Audience Roles</span>
          <RoleMap systemId={study.slug} users={study.userRoleDescriptions} accentColor={study.accentColor} />
        </section>

        {/* 6. End-to-end workflow */}
        <section className="border-t border-[#dedbc8]/10 pt-8">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">D. Operations Lifecycle</span>
          <WorkflowJourney stages={study.workflowStages} accentColor={study.accentColor} />
        </section>

        {/* 7. Main interface gallery */}
        <section className="border-t border-[#dedbc8]/10 pt-8">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">E. Reconstructed Evidence</span>
          <InterfaceGallery systemId={study.slug} frames={study.visualFrames} accentColor={study.accentColor} />
        </section>

        {/* 8. Module explanations */}
        <section className="border-t border-[#dedbc8]/10 pt-8">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">F. Module Breakdowns</span>
          <CapabilityGroups groups={study.capabilityGroups} accentColor={study.accentColor} />
        </section>

        {/* 10. Information & automation logic */}
        <section className="border-t border-[#dedbc8]/10 pt-8 flex flex-col gap-6">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">G. Information &amp; Automation Logic</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-xl italic text-[#dedbc8]">Key System Interactions</h3>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-300 font-light leading-relaxed">
                {study.keyInteractions.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-gray-500 shrink-0 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-xl italic text-[#dedbc8]">Automation State Rules</h3>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-300 font-light leading-relaxed">
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
            <ul className="flex flex-col gap-2 text-xs text-gray-400 font-light leading-relaxed">
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
        </section>

        {/* 11. Integration, deployment and boundaries */}
        <section className="border-t border-[#dedbc8]/10 pt-8">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">H. Boundaries &amp; Integrations</span>
          <IntegrationBoundary
            integrations={study.integrationNarrative}
            limitations={study.limitations}
            safetyNotes={study.safetyNotes}
          />
          <div className="flex flex-col gap-3 bg-[#0d0d0d] border border-[#dedbc8]/10 p-6 mt-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">Deployment &amp; Operations Infrastructure</h4>
            <ul className="flex flex-col gap-2 text-xs text-gray-400 font-light leading-relaxed">
              {study.deploymentNotes.map((note, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-gray-600 shrink-0 mt-0.5">&bull;</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 12. Current scope and future direction */}
        <section className="border-t border-[#dedbc8]/10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl italic text-[#dedbc8]">Current Scope &amp; Availability</h3>
            <ul className="flex flex-col gap-2 text-xs text-gray-300 font-light leading-relaxed">
              {study.currentScope.map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-[#2a7d8a] shrink-0 mt-0.5">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl italic text-[#dedbc8]">Future Engineering Direction</h3>
            <ul className="flex flex-col gap-2 text-xs text-gray-300 font-light leading-relaxed">
              {study.futureDirection.map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-gray-500 shrink-0 mt-0.5">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 13. What this project proves */}
        <section className="border-t border-[#dedbc8]/10 pt-8">
          <ProofSummary 
            points={study.proofPoints} 
            architecturalNotes={study.architecturalDecisions}
            accentColor={study.accentColor} 
          />
        </section>

        {/* 14. Related projects */}
        <section className="border-t border-[#dedbc8]/10 pt-8 flex flex-col gap-6">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">Operational Context Range</span>
          <h3 className="font-serif text-2xl font-light italic text-[#dedbc8] tracking-tight">Explore other proof systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link 
                key={item.slug} 
                href={`/work/${item.slug}`}
                className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-5 hover:border-[#dedbc8]/40 transition-colors flex flex-col justify-between min-h-[140px]"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[9px] text-gray-500 font-bold uppercase">{item.category}</span>
                  <span className="text-sm font-bold text-[#dedbc8] uppercase tracking-wide">{item.name}</span>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed line-clamp-2">{item.shortDefinition}</p>
                </div>
                <span className="font-mono text-[9px] mt-4 block" style={{ color: item.accentColor }}>VIEW SCHEMAS &rarr;</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 15. Contact CTA */}
        <div className="border border-[#dedbc8]/14 bg-[#0d0d0d] p-8 md:p-12 text-center flex flex-col items-center gap-6 mt-8">
          <h2 className="font-serif text-3xl font-light italic text-[#dedbc8] tracking-tight">
            Map your workflow into a custom system
          </h2>
          <p className="text-sm md:text-base font-light text-gray-300 max-w-xl leading-relaxed">
            Discuss a pilot build or request architectural schema consults directly with our engineering team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="border border-[#dedbc8] bg-[#dedbc8] px-6 py-3 text-xs font-mono font-bold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-all duration-300"
            >
              Start a Conversation &rarr;
            </Link>
            <Link
              href="/work"
              className="border border-[#dedbc8]/20 px-6 py-3 text-xs font-mono font-bold uppercase text-[#dedbc8] hover:border-[#dedbc8] transition-all duration-300"
            >
              Back to Work Index
            </Link>
          </div>
        </div>

      </div>

      <SiteFooter />
    </div>
  );
}
export default CaseStudyClient;
