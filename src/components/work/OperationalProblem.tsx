"use client";

import React from "react";
import { CaseStudyData } from "@/content/case-studies";

interface OperationalProblemProps {
  study: CaseStudyData;
}

export function OperationalProblem({ study }: OperationalProblemProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8">
      {/* Problem text */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
          The Operational Challenge
        </span>
        <h2 className="font-serif text-3xl font-light italic text-[#dedbc8] tracking-tight">
          How the process fragments
        </h2>
        <div className="text-sm md:text-base font-light text-gray-300 leading-relaxed flex flex-col gap-4">
          {study.problemNarrative.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      {/* Before / After Table */}
      <div className="lg:col-span-7 flex flex-col gap-4">
        <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
          Workflow Transition Mapping
        </span>
        <div className="border border-[#dedbc8]/10 bg-[#0d0d0d] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#dedbc8]/10">
            {/* Before state */}
            <div className="p-6 flex flex-col gap-4">
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                Disconnected Silos (Before)
              </span>
              <ul className="flex flex-col gap-3.5 text-xs text-gray-400 font-light leading-relaxed">
                {study.beforeWorkflow.map((state, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-red-500 shrink-0 mt-0.5">&bull;</span>
                    <span>{state}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After state */}
            <div className="p-6 flex flex-col gap-4 bg-[#0a0a0a]">
              <span className="text-xs font-mono text-[#2a7d8a] font-bold uppercase tracking-wider">
                Connected Workspace (After)
              </span>
              <ul className="flex flex-col gap-3.5 text-xs text-gray-300 font-light leading-relaxed">
                {study.afterWorkflow.map((state, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-[#2a7d8a] shrink-0 mt-0.5">&bull;</span>
                    <span>{state}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OperationalProblem;
