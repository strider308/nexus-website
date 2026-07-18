"use client";

import React from "react";
import { CaseStudyData } from "@/content/case-studies";

interface ProofSystemNavigatorProps {
  projects: CaseStudyData[];
  activeIndex: number;
  onSelect: (idx: number) => void;
}

export function ProofSystemNavigator({ projects, activeIndex, onSelect }: ProofSystemNavigatorProps) {
  return (
    <div className="flex flex-col gap-2.5 w-full select-none">
      <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold block mb-2">
        PROOF ARCHIVES INDEX
      </span>
      <div className="flex flex-col gap-2 relative">
        {projects.map((project, idx) => {
          const isActive = activeIndex === idx;
          const projectNum = String(idx + 1).padStart(2, "0");
          return (
            <button
              key={project.slug}
              onClick={() => onSelect(idx)}
              onFocus={() => onSelect(idx)}
              className={`text-left p-3.5 border transition-[color,background-color,border-color,padding-left] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] outline-none focus:ring-1 focus:ring-[#dedbc8] ${
                isActive
                  ? "border-[#dedbc8] bg-[#0d0d0d] pl-6 text-[#dedbc8]"
                  : "border-transparent bg-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              <span className="font-mono text-xs text-[#2a7d8a] font-semibold block">SYSTEM {projectNum}</span>
              <div className="font-sans text-xs font-bold uppercase tracking-wider mt-0.5">{project.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ProofSystemNavigator;
