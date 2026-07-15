"use client";

import React from "react";
import Link from "next/link";
import { CaseStudyData } from "@/content/case-studies";
import { InterfaceFrame } from "@/components/work/InterfaceFrame";
import { Badge } from "@/components/ui/badge";
import { GSAPReveal } from "@/components/motion/GSAPReveal";

interface FeaturedProjectRailProps {
  projects: CaseStudyData[];
}

export function FeaturedProjectRail({ projects }: FeaturedProjectRailProps) {
  return (
    <div className="flex flex-col gap-24 py-12">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
          [ PRIMARY SYSTEMS ]
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light italic tracking-tight text-[#dedbc8]">
          Featured Case Studies
        </h2>
      </div>

      <div className="flex flex-col gap-28">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={project.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-[#dedbc8]/10 pb-20"
            >
              {/* Text details column: order shifts for even/odd on desktop */}
              <div className={`lg:col-span-6 flex flex-col gap-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-gray-500 font-bold">0{idx + 1} // SYSTEM</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
                  <span className="font-mono text-[10px] text-gray-300 font-bold uppercase">{project.category}</span>
                </div>

                <h3 className="font-serif text-4xl font-light tracking-tight text-white">
                  {project.name}
                </h3>

                <p className="text-sm font-light text-gray-300 leading-relaxed font-sans italic">
                  {project.shortDefinition}
                </p>

                {/* Operational Problem Statement */}
                <div className="flex flex-col gap-1.5 mt-2">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-bold">OPERATIONAL PROBLEM</span>
                  <p className="text-xs text-gray-400 font-light leading-relaxed font-sans">
                    {project.problemNarrative[0]}
                  </p>
                </div>

                {/* Intended Users List */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-bold">INTENDED SYSTEM ROLES</span>
                  <p className="text-xs text-gray-300 font-medium font-sans">
                    {project.intendedUsers.join(", ")}
                  </p>
                </div>

                {/* Status / Scope */}
                <div className="flex justify-between items-center text-[10px] font-mono border-t border-[#dedbc8]/5 pt-4">
                  <span className="text-gray-500 font-bold">RELEASE SCOPE:</span>
                  <Badge variant="referenceBuild">{project.status}</Badge>
                </div>

                {/* Action Link */}
                <div className="mt-2">
                  <Link 
                    href={`/work/${project.slug}`}
                    className="inline-block border border-[#dedbc8] px-5 py-2.5 text-xs font-mono font-bold uppercase text-[#dedbc8] hover:bg-[#dedbc8] hover:text-[#070707] transition-all duration-300 rounded-none"
                  >
                    Read Detailed Case Study &rarr;
                  </Link>
                </div>
              </div>

              {/* Mockup Preview column */}
              <div className={`lg:col-span-6 flex flex-col gap-3 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <GSAPReveal yOffset={25} duration={0.8}>
                  <div className="border border-[#dedbc8]/14 bg-[#0d0d0d] overflow-hidden">
                    <InterfaceFrame 
                      systemId={project.slug} 
                      frameId={project.visualFrames[0]} 
                      caption={`${project.name} primary operational layout preview.`}
                    />
                  </div>
                </GSAPReveal>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FeaturedProjectRail;
