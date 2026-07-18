"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { DETAILED_CASE_STUDIES } from "@/content/case-studies";
import { InterfaceFrame } from "@/components/work/InterfaceFrame";
import { Badge } from "@/components/ui/badge";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";
import { GSAP_EASES } from "@/lib/gsap/eases";

export function SevenProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced) {
        gsap.set(".project-section-card", { opacity: 1, y: 0 });
        gsap.set(".project-visual", { opacity: 1, scale: 1 });
        gsap.set(".anim-item", { opacity: 1, y: 0 });
        return;
      }

      // Create entrance timelines for each of the 7 sections
      DETAILED_CASE_STUDIES.forEach((project, idx) => {
        const trigger = `#project-row-${idx}`;
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        });

        // Sequence: 1. Number, 2. Title, 3. Visual Clip-path/opacity, 4. Definition + Proof, 5. CTA
        tl.fromTo(
          `${trigger} .anim-number`,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: GSAP_EASES.reveal }
        )
        .fromTo(
          `${trigger} .anim-title`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: GSAP_EASES.reveal },
          "-=0.2"
        )
        .fromTo(
          `${trigger} .anim-visual`,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.6, ease: GSAP_EASES.spatial },
          "-=0.4"
        )
        .fromTo(
          `${trigger} .anim-details`,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: GSAP_EASES.reveal },
          "-=0.3"
        )
        .fromTo(
          `${trigger} .anim-cta`,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: GSAP_EASES.reveal },
          "-=0.2"
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex flex-col gap-32 py-12">
      {DETAILED_CASE_STUDIES.map((project, idx) => {
        const isEven = idx % 2 === 0;
        const projectNum = String(idx + 1).padStart(2, "0");

        return (
          <div
            key={project.slug}
            id={`project-row-${idx}`}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#dedbc8]/10 pb-24 project-section-card w-full"
          >
            {/* Left/Right Text column */}
            <div className={`lg:col-span-6 flex flex-col gap-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
              
              {/* Eyebrow / Number */}
              <div className="anim-number flex items-center gap-3 opacity-0">
                <span className="font-mono text-xs text-[#2a7d8a] font-semibold">{projectNum} {"//"} SYSTEM</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
                <span className="font-mono text-xs uppercase text-gray-400 font-semibold tracking-wider">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="anim-title type-heading text-4xl md:text-5xl lg:text-7xl tracking-tight text-white opacity-0">
                {project.name}
              </h3>

              {/* Details (Definition, problem, intended roles) */}
              <div className="anim-details flex flex-col gap-5 opacity-0">
                <p className="type-body text-base text-gray-300 leading-relaxed max-w-[62ch]">
                  {project.shortDefinition}
                </p>

                {/* Operational Problem Statement */}
                <div className="flex flex-col gap-1.5 mt-2">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold">OPERATIONAL PROBLEM</span>
                  <p className="type-body text-xs text-gray-400 leading-relaxed max-w-[62ch]">
                    {project.problemNarrative[0]}
                  </p>
                </div>

                {/* Intended Users List */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold">INTENDED SYSTEM ROLES</span>
                  <p className="type-body text-xs text-gray-300 font-semibold">
                    {project.intendedUsers.join(", ")}
                  </p>
                </div>

                {/* Primary Proof Point */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold">PRIMARY PROOF POINT</span>
                  <p className="type-body text-xs text-[#2a7d8a] font-semibold">
                    {project.proofPoints[0]}
                  </p>
                </div>

                {/* Status / Scope */}
                <div className="flex justify-between items-center text-xs font-mono border-t border-[#dedbc8]/5 pt-4">
                  <span className="text-gray-500 font-semibold uppercase tracking-wider">RELEASE SCOPE:</span>
                  <Badge variant="referenceBuild">{project.status}</Badge>
                </div>
              </div>

              {/* Action Link */}
              <div className="anim-cta mt-2 opacity-0">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-block border border-[#dedbc8] px-6 py-3 text-xs font-mono font-bold uppercase text-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-[color,background-color] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] rounded-none"
                >
                  Read Detailed Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* Left/Right Mockup Preview Column */}
            <div className={`lg:col-span-6 flex flex-col gap-3 anim-visual opacity-0 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
              <div className="border border-[#dedbc8]/14 bg-[#0d0d0d] overflow-hidden project-visual w-full">
                <InterfaceFrame
                  systemId={project.slug}
                  frameId={project.visualFrames[0]}
                  caption={`${project.name} primary console interface.`}
                />
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}
export default SevenProjectShowcase;
