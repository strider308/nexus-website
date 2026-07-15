"use client";

import React, { useState, useRef } from "react";
import { WorkflowStage } from "@/content/case-studies";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";

interface WorkflowJourneyProps {
  stages: WorkflowStage[];
  accentColor: string;
}

export function WorkflowJourney({ stages, accentColor }: WorkflowJourneyProps) {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced) return;

      // Coordinate scroll position to step selections on desktop
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 35%",
        end: "bottom 65%",
        scrub: true,
        onUpdate: (self) => {
          const rawProgress = self.progress;
          const idx = Math.min(
            Math.floor(rawProgress * stages.length),
            stages.length - 1
          );
          if (idx !== activeStageIdx && idx >= 0) {
            setActiveStageIdx(idx);
          }
        },
      });
    },
    { dependencies: [activeStageIdx, stages], scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex flex-col gap-8 py-8 border-t border-[#dedbc8]/10 w-full">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
          End-to-End Operational Lifecycle
        </span>
        <h2 className="font-serif text-3xl font-light italic text-[#dedbc8] tracking-tight">
          How the transactions flow
        </h2>
      </div>

      {/* Desktop Stepped Layout */}
      <div className="hidden md:grid grid-cols-12 gap-10 items-start mt-4">
        {/* Left Side: Active Stage Detail pane */}
        <div className="col-span-5 flex flex-col justify-between border border-[#dedbc8]/10 bg-[#0d0d0d] p-8 min-h-[300px] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-[#dedbc8]/10 pb-3">
              <span className="font-mono text-[9px] text-[#2a7d8a] font-bold uppercase tracking-wider">
                STAGE 0{activeStageIdx + 1} // OPERATIONAL OWNER
              </span>
              <span className="font-mono text-[9px] text-gray-400 font-bold uppercase">
                {stages[activeStageIdx].role}
              </span>
            </div>

            <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wide">
              {stages[activeStageIdx].name}
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed font-light font-sans">
              {stages[activeStageIdx].description}
            </p>
          </div>

          <div className="border-t border-[#dedbc8]/5 pt-4 flex justify-between items-center text-[9px] font-mono text-gray-500">
            <span>TRIGGER: STATE_UPDATE</span>
            <span style={{ color: accentColor }}>ACTIVE STEP</span>
          </div>
        </div>

        {/* Right Side: Horizontal/Stepped Stepper path */}
        <div className="col-span-7 flex flex-col gap-4 relative">
          <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest font-bold block mb-2">
            STEP TIMELINE INDICATOR
          </span>
          <div className="flex flex-col gap-2.5">
            {stages.map((stage, idx) => {
              const isActive = activeStageIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`text-left p-3 border transition-all duration-300 outline-none focus:ring-1 focus:ring-[#dedbc8] flex justify-between items-center ${
                    isActive 
                      ? "border-[#dedbc8] bg-[#0d0d0d] text-white" 
                      : "border-transparent bg-transparent text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <span className="font-mono text-[10px] text-gray-400">0{idx + 1}</span>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider">{stage.name}</span>
                  </div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase">{stage.role}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Viewport: Simple Accordion vertical dropdowns */}
      <div className="md:hidden mt-4">
        <Accordion defaultValue={["stage-0"]} className="w-full border border-[#dedbc8]/10 bg-[#0d0d0d] p-4">
          {stages.map((stage, idx) => (
            <AccordionItem key={idx} value={`stage-${idx}`} className="border-b border-[#dedbc8]/5">
              <AccordionTrigger className="hover:no-underline py-4 text-left">
                <div className="flex gap-3 items-center">
                  <span className="font-mono text-[10px] text-gray-500">0{idx + 1}</span>
                  <span className="font-sans text-xs font-bold uppercase text-white tracking-wider">{stage.name}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase">
                    <span>ROLE: {stage.role}</span>
                  </div>
                  <p className="text-xs text-gray-300 font-light font-sans leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </div>
  );
}
export default WorkflowJourney;
