"use client";

import React from "react";
import { CaseStudyData } from "@/content/case-studies";

interface CaseStudyHeroProps {
  study: CaseStudyData;
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      {/* Eyebrow info */}
      <div className="flex flex-wrap gap-3 items-center">
        <span 
          className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
          style={{ 
            color: study.accentColor, 
            borderColor: `${study.accentColor}30`, 
            backgroundColor: `${study.accentColor}05` 
          }}
        >
          {study.industry}
        </span>
        <span className="text-xs font-mono text-[#2a7d8a] bg-[#2a7d8a]/5 border border-[#2a7d8a]/20 px-2 py-0.5 rounded font-bold uppercase">
          {study.status}
        </span>
      </div>

      {/* Main Title & Positioning */}
      <h1 className="font-serif text-5xl md:text-7xl font-light text-[#dedbc8] tracking-tight leading-none italic">
        {study.name}
      </h1>
      <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed italic max-w-2xl border-l-2 pl-4 border-gray-700">
        &ldquo;{study.positioning}&rdquo;
      </p>

      {/* Summary */}
      <p className="text-base md:text-lg font-light text-gray-400 leading-relaxed max-w-3xl">
        {study.shortDefinition}
      </p>
    </div>
  );
}
export default CaseStudyHero;
