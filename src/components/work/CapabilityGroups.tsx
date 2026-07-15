"use client";

import React from "react";
import { CapabilityGroup } from "@/content/case-studies";

interface CapabilityGroupsProps {
  groups: CapabilityGroup[];
  accentColor: string;
}

export function CapabilityGroups({ groups, accentColor }: CapabilityGroupsProps) {
  return (
    <div className="flex flex-col gap-6 py-8 border-t border-[#dedbc8]/10">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-bold">
          System Capability Groups
        </span>
        <h2 className="font-serif text-3xl font-light italic text-[#dedbc8] tracking-tight">
          What the system organizes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {groups.map((group, idx) => (
          <div 
            key={idx}
            className="border border-[#dedbc8]/10 bg-[#0d0d0d] p-6 flex flex-col gap-4"
          >
            <div className="flex justify-between items-center border-b border-[#dedbc8]/10 pb-3">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#dedbc8]">
                {group.title}
              </h3>
              <span 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: accentColor }}
              />
            </div>

            <ul className="flex flex-col gap-2.5 text-xs text-gray-300 font-light leading-relaxed">
              {group.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex gap-2.5 items-start">
                  <span className="shrink-0 mt-0.5" style={{ color: accentColor }}>&bull;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CapabilityGroups;
