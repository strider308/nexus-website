"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { DETAILED_CASE_STUDIES } from "@/content/case-studies";
import { ProofSystemNavigator } from "./ProofSystemNavigator";
import { ProofSystemVisual } from "./ProofSystemVisual";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { InterfaceFrame } from "@/components/work/InterfaceFrame";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";

export function SevenProofSystems() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRailRef = useRef<HTMLDivElement>(null);
  const rightVisualRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced) return;

      // Track active index based on section viewport position
      DETAILED_CASE_STUDIES.forEach((project, idx) => {
        ScrollTrigger.create({
          trigger: `#proof-block-${idx}`,
          start: "top 35%",
          end: "bottom 35%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIndex(idx);
            }
          },
        });
      });

      // Desktop Pinned Left Navigation and Right Visual Column
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        // Pin left navigator
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 12%",
          end: "bottom 88%",
          pin: leftRailRef.current,
          pinSpacing: false,
          scrub: true,
        });

        // Pin right visual
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 12%",
          end: "bottom 88%",
          pin: rightVisualRef.current,
          pinSpacing: false,
          scrub: true,
        });
      });
    },
    { scope: containerRef }
  );

  const handleSelectProject = (idx: number) => {
    setActiveIndex(idx);
    const element = document.querySelector(`#proof-block-${idx}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="w-full relative select-text">
      
      {/* Desktop 3-Column Split (Navigator - Content - Visual) */}
      <div className="hidden lg:grid grid-cols-12 gap-10 items-start relative w-full">
        
        {/* Left Sticky Navigator (Col span 3) */}
        <div ref={leftRailRef} className="col-span-3 flex flex-col gap-4 pr-4 border-r border-[#dedbc8]/10 min-h-[400px]">
          <ProofSystemNavigator
            projects={DETAILED_CASE_STUDIES}
            activeIndex={activeIndex}
            onSelect={handleSelectProject}
          />
        </div>

        {/* Center Scroll Narrative content (Col span 5) */}
        <div className="col-span-5 flex flex-col gap-24 py-8">
          {DETAILED_CASE_STUDIES.map((project, idx) => {
            const projectNum = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={project.slug}
                id={`proof-block-${idx}`}
                className="flex flex-col gap-5 min-h-[500px] border-b border-[#dedbc8]/5 pb-16 justify-center"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#2a7d8a] font-semibold">{projectNum} {"//"} DEPLOYED SYSTEM</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
                  <span className="font-mono text-xs uppercase text-gray-400 font-semibold tracking-wider">{project.category}</span>
                </div>

                <h3 className="type-heading text-3xl md:text-5xl text-white">
                  {project.name}
                </h3>

                <p className="type-body text-sm text-gray-300 leading-relaxed max-w-[55ch]">
                  {project.shortDefinition}
                </p>

                <div className="flex flex-col gap-1 border-t border-[#dedbc8]/5 pt-4">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold">INTENDED USERS</span>
                  <span className="type-body text-xs text-gray-300 font-semibold">{project.intendedUsers.join(", ")}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold">KEY PROOF STATEMENT</span>
                  <span className="type-body text-xs text-[#2a7d8a] font-semibold">{project.proofPoints[0]}</span>
                </div>

                <div className="flex justify-between items-center text-xs font-mono border-t border-[#dedbc8]/5 pt-4">
                  <span className="text-gray-500 font-semibold uppercase tracking-wider">SYSTEM STATUS:</span>
                  <Badge variant="referenceBuild">{project.status}</Badge>
                </div>

                <div className="mt-2">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-block border border-[#dedbc8] px-5 py-2.5 text-xs font-mono font-bold uppercase text-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-all duration-300 rounded-none"
                  >
                    Read Detailed Case Study &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Sticky Visual panel (Col span 4) */}
        <div ref={rightVisualRef} className="col-span-4 flex flex-col justify-center items-center min-h-[400px]">
          <ProofSystemVisual
            systemId={DETAILED_CASE_STUDIES[activeIndex].slug}
            frameId={DETAILED_CASE_STUDIES[activeIndex].visualFrames[0]}
          />
        </div>

      </div>

      {/* Mobile & Tablet Layout: Accessible Accordion List showing all 7 systems */}
      <div className="lg:hidden mt-4 w-full">
        <Accordion defaultValue={["proof-0"]} className="w-full border border-[#dedbc8]/10 bg-[#0d0d0d] p-4">
          {DETAILED_CASE_STUDIES.map((project, idx) => {
            const projectNum = String(idx + 1).padStart(2, "0");
            return (
              <AccordionItem key={idx} value={`proof-${idx}`} className="border-b border-[#dedbc8]/5">
                <AccordionTrigger className="hover:no-underline py-4 text-left">
                  <div className="flex gap-3 items-center">
                    <span className="font-mono text-xs text-gray-500">{projectNum}</span>
                    <span className="font-sans text-sm font-bold uppercase text-white tracking-wider">{project.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full ml-1" style={{ backgroundColor: project.accentColor }} />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="flex flex-col gap-5 mt-2">
                    {/* Visual Frame */}
                    <div className="border border-[#dedbc8]/14 bg-black overflow-hidden w-full">
                      <InterfaceFrame
                        systemId={project.slug}
                        frameId={project.visualFrames[0]}
                        caption={`${project.name} mobile layout view.`}
                      />
                    </div>

                    <div className="flex flex-col gap-3 font-sans text-xs text-gray-300 leading-relaxed">
                      <p><strong>Category:</strong> {project.category}</p>
                      <p>{project.shortDefinition}</p>
                      <p><strong>Intended Roles:</strong> {project.intendedUsers.join(", ")}</p>
                      <p className="text-[#2a7d8a]"><strong>Proof:</strong> {project.proofPoints[0]}</p>
                      <div className="flex justify-between items-center text-xs font-mono border-t border-[#dedbc8]/5 pt-3 mt-1">
                        <span>Status: {project.status}</span>
                        <Link href={`/work/${project.slug}`} className="text-[#dedbc8] hover:underline font-bold">
                          View Study &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

    </div>
  );
}
export default SevenProofSystems;
