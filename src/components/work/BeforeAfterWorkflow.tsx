"use client";

import React from "react";

interface BeforeAfterWorkflowProps {
  beforeTitle: string;
  afterTitle: string;
  steps: { before: string; after: string; label: string }[];
}

export function BeforeAfterWorkflow({ beforeTitle, afterTitle, steps }: BeforeAfterWorkflowProps) {
  return (
    <div className="flex flex-col gap-6 py-6 border-t border-[#dedbc8]/10">
      <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
        State &amp; Handoff Transitions
      </span>
      <div className="grid grid-cols-1 gap-4">
        {steps.map((step, idx) => (
          <div 
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-[#0d0d0d] border border-[#dedbc8]/10 p-4"
          >
            {/* Step Label */}
            <div className="md:col-span-2">
              <span className="text-[10px] font-mono text-gray-500 tracking-wider block uppercase">STAGE 0{idx + 1}</span>
              <span className="text-xs font-bold text-[#dedbc8] uppercase tracking-wide">{step.label}</span>
            </div>
            {/* Before (Silo) */}
            <div className="md:col-span-5 border-l md:border-l-0 md:border-r border-[#dedbc8]/10 pl-3 md:pl-0 md:pr-4">
              <span className="text-[9px] font-mono text-red-400 uppercase tracking-widest block font-bold mb-1">{beforeTitle}</span>
              <span className="text-xs text-gray-400 font-light leading-relaxed">{step.before}</span>
            </div>

            {/* After (Synced) */}
            <div className="md:col-span-5 pl-3 md:pl-4">
              <span className="text-[9px] font-mono text-[#2a7d8a] uppercase tracking-widest block font-bold mb-1">{afterTitle}</span>
              <span className="text-xs text-gray-300 font-light leading-relaxed">{step.after}</span>
            </div>          </div>
        ))}
      </div>
    </div>
  );
}
export default BeforeAfterWorkflow;
