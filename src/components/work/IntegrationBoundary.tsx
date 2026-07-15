"use client";

import React from "react";

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
    <div className="flex flex-col gap-8 py-8 border-t border-[#dedbc8]/10">
      {/* Integrations & Limits grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Integrations */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
            Hardware &amp; API Integrations
          </span>
          <h3 className="font-serif text-xl italic text-[#dedbc8] tracking-tight">
            How the software connects
          </h3>
          <ul className="flex flex-col gap-2 text-xs text-gray-300 font-light leading-relaxed">
            {integrations.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <span className="shrink-0 mt-0.5 text-green-400">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Limitations */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
            Engineering Boundaries
          </span>
          <h3 className="font-serif text-xl italic text-[#dedbc8] tracking-tight">
            What remains out of scope
          </h3>
          <ul className="flex flex-col gap-2 text-xs text-gray-300 font-light leading-relaxed">
            {limitations.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <span className="shrink-0 mt-0.5 text-red-400">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Safety Compliance Alert */}
      {safetyNotes && safetyNotes.length > 0 && (
        <div className="border border-gray-600 bg-transparent p-5 rounded-sm flex flex-col gap-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#dedbc8] font-bold">
            Safety &amp; Compliance Notes
          </h4>
          <ul className="flex flex-col gap-1.5 text-xs text-gray-400 leading-relaxed font-light">
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
