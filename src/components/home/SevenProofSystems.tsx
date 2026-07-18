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
import { useMotionPreference } from "@/components/providers/MotionPreferenceProvider";

export function SevenProofSystems() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRailRef = useRef<HTMLDivElement>(null);
  const rightVisualRef = useRef<HTMLDivElement>(null);
  const { shouldReduceMotion: isReduced } = useMotionPreference();

  // Ref arrays for ScrollTrigger binding
  const blocksRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastActiveIndexRef = useRef<number>(0);

  useGSAP(
    () => {
      // Clean up lists
      blocksRefs.current = blocksRefs.current.slice(0, DETAILED_CASE_STUDIES.length);
      visualsRefs.current = visualsRefs.current.slice(0, DETAILED_CASE_STUDIES.length);

      const isMotionDisabled = isReduced;

      if (isMotionDisabled) {
        // Fallback: simple ScrollTrigger to update active navigator index
        DETAILED_CASE_STUDIES.forEach((project, idx) => {
          const block = blocksRefs.current[idx];
          if (!block) return;

          ScrollTrigger.create({
            trigger: block,
            start: "top 45%",
            end: "bottom 45%",
            onToggle: (self) => {
              if (self.isActive && lastActiveIndexRef.current !== idx) {
                lastActiveIndexRef.current = idx;
                setActiveIndex(idx);
              }
            },
          });
        });
        return;
      }

      // Track active index based on section viewport position + zoom animations
      DETAILED_CASE_STUDIES.forEach((project, idx) => {
        const block = blocksRefs.current[idx];
        const visual = visualsRefs.current[idx];
        if (!block || !visual) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 72%",
            end: "bottom 28%",
            scrub: 0.6,
            onToggle: (self) => {
              if (self.isActive && lastActiveIndexRef.current !== idx) {
                lastActiveIndexRef.current = idx;
                setActiveIndex(idx);
              }
            },
          },
        });

        // 1. Set initial state + promote layer willChange (Phase 5)
        tl.set(visual, {
          visibility: "visible",
          pointerEvents: "none",
          opacity: 0,
          scale: 0.93,
          y: 28,
          transformOrigin: "center center",
          willChange: "transform, opacity",
        });

        // 2. Enter & Enlarge (Phase 2)
        tl.to(visual, {
          opacity: 1,
          scale: 1.03,
          y: 0,
          duration: 0.28,
          ease: "power2.out",
        });

        // 3. Hold active at peak size (Phase 2)
        tl.to(visual, {
          opacity: 1,
          scale: 1.07,
          y: 0,
          duration: 0.34,
          ease: "none",
        });

        // 4. Exit (Phase 2)
        tl.to(visual, {
          opacity: 0,
          scale: 1.10,
          y: -18,
          duration: 0.38,
          ease: "power2.in",
        });

        // 5. End State (hidden, will-change auto to reduce compositor overhead)
        tl.set(visual, {
          visibility: "hidden",
          pointerEvents: "none",
          willChange: "auto",
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

        // Pin right visual stage
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
    { scope: containerRef, dependencies: [isReduced] }
  );

  const handleSelectProject = (idx: number) => {
    setActiveIndex(idx);
    const element = document.querySelector(`#proof-block-${idx}`);
    if (element) {
      element.scrollIntoView({ behavior: isReduced ? "auto" : "smooth" });
    }
  };

  const isMotionDisabled = isReduced;

  return (
    <div ref={containerRef} className="w-full relative select-text">
      
      {/* Desktop 3-Column Split (Navigator - Content - Visual) */}
      <div className="hidden lg:grid grid-cols-12 gap-10 items-start relative w-full">
        
        {/* Left Sticky Navigator (Col span 2) */}
        <div ref={leftRailRef} className="col-span-2 flex flex-col gap-4 pr-4 border-r border-[#dedbc8]/10 min-h-[400px]">
          <ProofSystemNavigator
            projects={DETAILED_CASE_STUDIES}
            activeIndex={activeIndex}
            onSelect={handleSelectProject}
          />
        </div>

        {/* Center Scroll Narrative content (Col span 4) */}
        <div className="col-span-4 flex flex-col gap-24 py-8">
          {DETAILED_CASE_STUDIES.map((project, idx) => {
            const projectNum = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={project.slug}
                id={`proof-block-${idx}`}
                ref={(el) => {
                  blocksRefs.current[idx] = el;
                }}
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
                    data-motion="interaction"
                    className="inline-block border border-[#dedbc8] px-5 py-2.5 text-xs font-mono font-bold uppercase text-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-[color,background-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] active:scale-[0.98] rounded-none"
                  >
                    Read Detailed Case Study &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Sticky Visual panel (Col span 6) */}
        <div ref={rightVisualRef} className="col-span-6 sticky top-[10%] h-[660px] flex items-center justify-center w-full">
          <div className="relative w-full h-[580px] min-h-[560px] max-w-[740px] xl:max-w-[880px] 2xl:max-w-[960px]">
            {DETAILED_CASE_STUDIES.map((project, idx) => {
              const isActive = activeIndex === idx;
              
              const inlineStyle: React.CSSProperties = isMotionDisabled
                ? {
                    opacity: isActive ? 1 : 0,
                    visibility: isActive ? "visible" : "hidden",
                    pointerEvents: isActive ? "auto" : "none",
                    transform: "scale(1) translateY(0px)",
                    filter: "blur(0px)",
                    transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                  }
                : {};

              return (
                <div
                  key={project.slug}
                  ref={(el) => {
                    visualsRefs.current[idx] = el;
                  }}
                  style={inlineStyle}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center ${
                    isMotionDisabled
                      ? ""
                      : "pointer-events-none select-none opacity-0 invisible"
                  }`}
                >
                  <ProofSystemVisual
                    systemId={project.slug}
                    frameId={project.visualFrames[0]}
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>
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
