"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface IntegrationBoundaryProps {
  integrations: string[];
  limitations: string[];
  safetyNotes?: string[];
}

export function IntegrationBoundary({
  integrations,
  limitations,
  safetyNotes,
}: IntegrationBoundaryProps) {
  return (
    <div className="flex flex-col gap-6 w-full select-none mt-2">
      
      {/* Integrations & Limits grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Connected Environment (Left) */}
        <div className="flex flex-col gap-4 border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <div className="flex justify-between items-center border-b border-[#dedbc8]/5 pb-3">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">
              Connected Environment
            </span>
            <Badge variant="available">Active integrations</Badge>
          </div>
          <h3 className="type-heading text-xl text-white tracking-tight">
            How the software connects
          </h3>
          <ul className="flex flex-col gap-3 text-xs text-gray-300 font-light leading-relaxed font-sans mt-2">
            {integrations.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <span className="shrink-0 mt-1 text-[#2a7d8a]">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Boundaries (Right) */}
        <div className="flex flex-col gap-4 border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <div className="flex justify-between items-center border-b border-[#dedbc8]/5 pb-3">
            <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">
              Boundaries
            </span>
            <Badge variant="limitation">Out of scope</Badge>
          </div>
          <h3 className="type-heading text-xl text-white tracking-tight">
            What remains outside scope
          </h3>
          <ul className="flex flex-col gap-3 text-xs text-gray-300 font-light leading-relaxed font-sans mt-2">
            {limitations.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <span className="shrink-0 mt-1 text-[#c44a7a]">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Safety Compliance Alert */}
      {safetyNotes && safetyNotes.length > 0 && (
        <div className="border border-[#c44a7a]/40 bg-[#c44a7a]/5 p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#c44a7a]" />
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
              Safety &amp; Compliance Alert Notes
            </h4>
          </div>
          <Separator className="bg-[#c44a7a]/20" />
          <ul className="flex flex-col gap-2.5 text-xs text-gray-300 leading-relaxed font-light font-sans">
            {safetyNotes.map((note, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <span className="text-gray-500 shrink-0 mt-0.5">&bull;</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default IntegrationBoundary;
