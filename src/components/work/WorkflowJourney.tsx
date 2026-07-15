"use client";

import React, { useState } from "react";
import { WorkflowStage } from "@/content/case-studies";

interface WorkflowJourneyProps {
  stages: WorkflowStage[];
  accentColor: string;
}

export function WorkflowJourney({ stages, accentColor }: WorkflowJourneyProps) {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  return (
    <div className="flex flex-col gap-6 py-8 border-t border-[#dedbc8]/10">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
          End-to-End Operational Lifecycle
        </span>
        <h2 className="font-serif text-3xl font-light italic text-[#dedbc8] tracking-tight">
          How the transactions flow
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        {/* Stages list (Left) */}
        <div className="lg:col-span-4 flex flex-col gap-1.5 max-h-[360px] overflow-y-auto pr-2 border-r border-[#dedbc8]/10 scrollbar-thin">
          {stages.map((stage, idx) => {
            const isActive = activeStageIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStageIdx(idx)}
                className={`text-left p-3 border-l-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[#0d0d0d] text-[#dedbc8]"
                    : "bg-transparent text-gray-500 hover:text-gray-300"
                }`}
                style={{
                  borderLeftColor: isActive ? accentColor : "rgba(222,219,200,0.1)"
                }}
              >
                <div className="font-mono text-[9px] text-gray-500 font-bold uppercase">
                  STAGE 0{idx + 1}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider mt-0.5">
                  {stage.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail (Right) */}
        <div className="lg:col-span-8 bg-[#0d0d0d] border border-[#dedbc8]/10 p-6 md:p-8 flex flex-col justify-between min-h-[180px]">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-[#dedbc8]/10 pb-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">
                OPERATIONAL OWNER: {stages[activeStageIdx].role.toUpperCase()}
              </span>
              <span 
                className="text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                style={{ color: accentColor, backgroundColor: `${accentColor}10` }}
              >
                Active Stage 0{activeStageIdx + 1}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-[#dedbc8] uppercase tracking-wide">
              {stages[activeStageIdx].name}
            </h3>

            <p className="text-sm font-light text-gray-300 leading-relaxed">
              {stages[activeStageIdx].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkflowJourney;
