"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";
import { GSAP_EASES } from "@/lib/gsap/eases";

export function MappingChapter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced) {
        gsap.set(".step-node", { opacity: 1 });
        return;
      }

      // 1. Line drawing scrolltrigger
      const path = lineRef.current;
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "bottom 60%",
            scrub: true,
          },
        });
      }

      // 2. Sequential nodes highlight
      const nodes = gsap.utils.toArray<Element>(".step-node");
      nodes.forEach((node) => {
        gsap.fromTo(
          node,
          { opacity: 0.2, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            ease: GSAP_EASES.reveal,
            scrollTrigger: {
              trigger: node,
              start: "top 75%",
              end: "bottom 65%",
              scrub: true,
            },
          }
        );
      });

      // 3. Desktop Pinned Section (only > 768px viewports)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(pinRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 15%",
            end: "bottom 85%",
            pin: pinRef.current,
            pinSpacing: false,
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef, dependencies: [isReduced] }
  );

  const steps = [
    { title: "Roles & Permissions", desc: "Map exact structural clearance limits for every operations staff member." },
    { title: "State Machine Triggers", desc: "Define rigid event states that lock transactions automatically." },
    { title: "Ownership Boundaries", desc: "Clearly isolate workspace claims to avoid overlapping consult conflicts." },
    { title: "Automation Handoffs", desc: "Schedule continuous tasks that trigger upon state logs." },
    { title: "Audit Visibility", desc: "Establish permanent records visible to administrative managers." },
    { title: "Exception Paths", desc: "Provide emergency overrides to bypass blocks cleanly." }
  ];

  return (
    <section 
      id="mapping"
      data-chapter-index={2}
      ref={containerRef}
      className="min-h-[140vh] relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-text py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative w-full">
        {/* Left Side: Editorial context */}
        <div ref={pinRef} className="md:col-span-5 flex flex-col gap-6 w-full">
          <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
            [ STRUCTURAL BLUEPRINT ]
          </span>
          <h2 className="type-heading text-3xl md:text-5xl text-[#dedbc8] tracking-tight">
            We map the operating rules.
          </h2>
          <p className="type-body text-base text-gray-300">
            Before engineering custom code, we define the state limits. We align who owns the task, what event triggers the database state, and where logs sync across systems.
          </p>
        </div>

        {/* Right Side: Interactive path stepper */}
        <div className="md:col-span-7 flex relative flex-col gap-12 pl-8 md:pl-16 border-l border-[#dedbc8]/5">
          {/* Connector Line SVG overlay */}
          <div className="absolute left-[3px] top-4 bottom-4 w-[2px] pointer-events-none hidden md:block">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 2 1000">
              <line x1="1" y1="0" x2="1" y2="1000" stroke="rgba(222,219,200,0.06)" strokeWidth="2" />
              <path
                ref={lineRef}
                d="M 1,0 L 1,1000"
                stroke="#2a7d8a"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Stepper Node list */}
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="step-node flex flex-col gap-2 relative bg-[#070707] py-2 opacity-25"
            >
              {/* Stepper node circle */}
              <div className="absolute -left-[39px] md:-left-[71px] top-3.5 size-4 bg-[#070707] border-2 border-gray-600 rounded-full flex items-center justify-center z-10 transition-colors duration-300">
                <span className="size-1.5 bg-transparent rounded-full" />
              </div>

              <span className="font-mono text-xs text-[#2a7d8a] font-bold uppercase tracking-wider">
                STAGE 0{idx + 1}
              </span>
              <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-[#dedbc8]">
                {step.title}
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed font-sans max-w-md">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default MappingChapter;
