"use client";

import React, { useRef } from "react";
import { CaseStudyData } from "@/content/case-studies";
import { InterfaceFrame } from "@/components/work/InterfaceFrame";
import { Badge } from "@/components/ui/badge";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";
import Link from "next/link";

interface CaseStudyHeroProps {
  study: CaseStudyData;
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced || !visualRef.current) return;

      // 3D perspective scroll tilt rotation
      gsap.fromTo(
        visualRef.current,
        {
          transformPerspective: 1000,
          rotateX: 6,
          scale: 0.9,
          opacity: 0.8,
        },
        {
          rotateX: 0,
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [isReduced] }
  );

  const handleScrollToWorkflow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#workflow-section");
    if (element) {
      element.scrollIntoView({ behavior: isReduced ? "auto" : "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-10 w-full">
      {/* Left Column: Metadata & Positioning */}
      <div className="lg:col-span-5 flex flex-col gap-5">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
          <Link href="/" className="hover:text-[#dedbc8] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/work" className="hover:text-[#dedbc8] transition-colors">Work</Link>
          <span>/</span>
          <span className="text-[#dedbc8] font-bold" aria-current="page">{study.name}</span>
        </nav>
        <div className="flex flex-wrap gap-2.5 items-center">
          <Badge variant="available">{study.industry}</Badge>
          <Badge variant="referenceBuild">{study.status}</Badge>
        </div>

        <h1 className="type-heading text-4xl md:text-6xl text-[#dedbc8] pb-1">
          {study.name}
        </h1>

        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest leading-none mt-1">
          POSITIONING: &ldquo;{study.positioning}&rdquo;
        </p>

        <p className="type-body text-base text-gray-300 mt-2">
          {study.longDefinition}
        </p>

        <div className="flex flex-col gap-1 border-t border-[#dedbc8]/5 pt-4">
          <span className="font-mono text-xs text-gray-500 uppercase tracking-wider font-bold">INTENDED ROLES</span>
          <span className="text-xs text-gray-300 font-bold uppercase">{study.intendedUsers.join(", ")}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <Link
            href="/contact"
            data-motion="interaction"
            className="border border-[#dedbc8] bg-[#dedbc8] px-5 py-3 text-xs font-sans font-semibold uppercase text-[#070707] hover:bg-transparent hover:text-[#dedbc8] transition-[color,background-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] active:scale-[0.98] rounded-none text-center"
          >
            Start consult
          </Link>
          <a
            href="#workflow-section"
            onClick={handleScrollToWorkflow}
            data-motion="interaction"
            className="border border-[#dedbc8]/20 px-5 py-3 text-xs font-sans font-semibold uppercase text-[#dedbc8] hover:border-[#dedbc8] hover:bg-[#dedbc8]/5 transition-[border-color,background-color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] active:scale-[0.98] rounded-none text-center"
          >
            View workflow &darr;
          </a>
        </div>
      </div>

      {/* Right Column: Visual Mockup with 3D Perspective Scroll */}
      <div className="lg:col-span-7 flex flex-col justify-center items-center w-full relative">
        <div 
          ref={visualRef}
          className="w-full border border-[#dedbc8]/14 bg-[#0d0d0d] overflow-hidden will-change-transform"
          style={{ transformOrigin: "top center" }}
        >
          <InterfaceFrame 
            systemId={study.slug} 
            frameId={study.visualFrames[0]} 
            caption={`${study.name} primary systems core interface.`}
          />
        </div>
      </div>
    </div>
  );
}
export default CaseStudyHero;
