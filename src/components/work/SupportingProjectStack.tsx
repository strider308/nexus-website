"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CaseStudyData } from "@/content/case-studies";
import { InterfaceFrame } from "@/components/work/InterfaceFrame";
import { Badge } from "@/components/ui/badge";

interface SupportingProjectStackProps {
  projects: CaseStudyData[];
}

export function SupportingProjectStack({ projects }: SupportingProjectStackProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div className="flex flex-col gap-8 py-12 border-t border-[#dedbc8]/10">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
          [ DEPLOYED UTILITY LEDGER ]
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light italic tracking-tight text-[#dedbc8]">
          Specialized Systems Ledger
        </h2>
        <p className="text-sm font-light text-gray-300 leading-relaxed font-sans max-w-2xl">
          Four micro-systems engineered to solve single-purpose transactional constraints.
        </p>
      </div>

      {/* Desktop Layout: Interactive overlapping stack sheets */}
      <div className="hidden md:grid grid-cols-12 gap-8 items-start mt-6">
        
        {/* Selector sidebar */}
        <div className="col-span-4 flex flex-col gap-3">
          {projects.map((project, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={project.slug}
                onClick={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                className={`text-left p-4 border transition-all duration-300 outline-none focus:ring-1 focus:ring-[#dedbc8] ${
                  isActive
                    ? "border-[#dedbc8] bg-[#0d0d0d] pl-6 text-[#dedbc8]"
                    : "border-[#dedbc8]/10 bg-transparent text-gray-500 hover:text-gray-300"
                }`}
              >
                <span className="font-mono text-[9px] text-[#2a7d8a] font-bold block uppercase">LEDGER NO. 0{idx + 4}</span>
                <div className="text-sm font-bold uppercase tracking-wider mt-1">{project.name}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Sheet (with elevated overlap layers) */}
        <div className="col-span-8 relative min-h-[360px] border border-[#dedbc8]/10 bg-[#0d0d0d] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-[#dedbc8]/10 pb-4">
              <span className="font-mono text-[10px] text-gray-400 font-bold uppercase">
                {projects[activeIdx].category}
              </span>
              <Badge variant="available">{projects[activeIdx].status}</Badge>
            </div>

            <h3 className="font-serif text-3xl font-light text-white tracking-tight">
              {projects[activeIdx].name}
            </h3>

            <p className="text-sm font-light text-gray-300 leading-relaxed font-sans max-w-xl">
              {projects[activeIdx].longDefinition}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-bold">SYSTEM USERS</span>
                <span className="text-xs text-gray-300 font-bold font-sans">
                  {projects[activeIdx].intendedUsers.join(", ")}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-bold">RELEASE SCOPE</span>
                <span className="text-xs text-gray-400 font-sans font-light">
                  {projects[activeIdx].currentScope[0]}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#dedbc8]/10 flex gap-4 mt-6">
            <Link
              href={`/work/${projects[activeIdx].slug}`}
              className="text-xs font-mono font-bold uppercase text-[#dedbc8] hover:text-white flex items-center gap-1.5"
            >
              Examine System Architecture &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Layout: Simple vertical cards list */}
      <div className="md:hidden flex flex-col gap-6 mt-4">
        {projects.map((project, idx) => (
          <div 
            key={project.slug}
            className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 flex flex-col gap-4"
          >
            <div className="flex justify-between items-center border-b border-[#dedbc8]/5 pb-3">
              <span className="font-mono text-[9px] text-gray-500 font-bold uppercase">LEDGER NO. 0{idx + 4}</span>
              <Badge variant="available">{project.status}</Badge>
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">{project.name}</h3>
            <p className="text-xs text-gray-300 leading-relaxed font-light font-sans">{project.shortDefinition}</p>
            <Link
              href={`/work/${project.slug}`}
              className="text-xs font-mono font-bold uppercase text-[#dedbc8] mt-2 block"
            >
              Examine Architecture &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SupportingProjectStack;
