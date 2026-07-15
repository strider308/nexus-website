"use client";

import React from "react";

interface ProofSummaryProps {
  points: string[];
  architecturalNotes?: string[];
  accentColor: string;
}

export function ProofSummary({ points, architecturalNotes, accentColor }: ProofSummaryProps) {
  return (
    <div className="flex flex-col gap-6 py-8 border-t border-[#dedbc8]/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* What this proves */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
            Operational Proof
          </span>
          <h3 className="font-serif text-xl italic text-[#dedbc8] tracking-tight">
            What the build proves
          </h3>
          <ul className="flex flex-col gap-2.5 text-xs text-gray-300 font-light leading-relaxed">
            {points.map((pt, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <span className="shrink-0 mt-0.5" style={{ color: accentColor }}>&bull;</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Notes */}
        {architecturalNotes && architecturalNotes.length > 0 && (
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
              Engineering Architecture
            </span>
            <h3 className="font-serif text-xl italic text-[#dedbc8] tracking-tight">
              Design &amp; code decisions
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-400 font-light leading-relaxed">
              {architecturalNotes.map((note, idx) => (
                <li key={idx} className="flex gap-2.5 items-start">
                  <span className="shrink-0 mt-0.5 text-gray-600">&bull;</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default ProofSummary;
