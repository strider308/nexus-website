"use client";

import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface RoleMapProps {
  systemId: string;
  users: string[];
  accentColor: string;
}

export function RoleMap({ users, accentColor }: RoleMapProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  // Group roles for display
  const parsedRoles = users.map((u) => {
    const parts = u.split(": ");
    return {
      title: parts[0] || "User Role",
      desc: parts[1] || "Performs system actions inside the active workspace.",
    };
  });

  return (
    <div className="flex flex-col gap-6 py-8 border-t border-[#dedbc8]/10 w-full select-none">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono tracking-wider text-gray-500 uppercase font-bold">
          Workspace Roles &amp; Handoffs Map
        </span>
        <h2 className="type-heading text-3xl text-[#dedbc8] tracking-tight">
          Who Uses the System
        </h2>
      </div>

      {/* Desktop Layout: CPU-style circular surrounding role nodes map */}
      <div className="hidden md:grid grid-cols-12 gap-10 items-center mt-6">
        
        {/* Left: CPU surrounding nodes graph representation */}
        <div className="col-span-7 relative bg-[#0d0d0d] border border-[#dedbc8]/10 p-6 overflow-hidden min-h-[350px] flex items-center justify-center">
          
          {/* Central Workflow Engine Hub */}
          <div className="z-10 size-24 rounded-full border border-gray-600 bg-[#070707] flex flex-col items-center justify-center p-2 text-center text-white">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest leading-none">SYSTEM</span>
            <span className="font-sans text-xs font-bold uppercase tracking-wider mt-1 text-[#2a7d8a]">CORE</span>
          </div>

          {/* Render surrounding node buttons based on trigonometry positions */}
          {parsedRoles.map((role, idx) => {
            const isActive = activeIdx === idx;
            const count = parsedRoles.length;
            const angle = (idx * 360) / count;
            // Radius of orbit in pixels
            const r = 100;
            // Transform positions using circular orbit
            const x = Math.round(r * Math.cos((angle * Math.PI) / 180));
            const y = Math.round(r * Math.sin((angle * Math.PI) / 180));

            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                className={`absolute z-20 px-3 py-1.5 border font-mono text-xs uppercase tracking-wider transition-[color,background-color,border-color] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] outline-none focus:ring-1 focus:ring-[#dedbc8] ${
                  isActive
                    ? "bg-[#2a7d8a]/5 border-[#2a7d8a] text-white"
                    : "bg-[#070707] border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300"
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                0{idx + 1} {"//"} {role.title.split(" // ")[0]}
              </button>
            );
          })}

          {/* Orbital path lines */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 400 350">
              {/* Central connecting orbit circle */}
              <circle cx="200" cy="175" r="100" stroke="rgba(222,219,200,0.04)" strokeWidth="1.5" fill="none" />
              {/* Highlight line to active node */}
              {(() => {
                const angle = (activeIdx * 360) / parsedRoles.length;
                const radians = (angle * Math.PI) / 180;
                const xTarget = 200 + 100 * Math.cos(radians);
                const yTarget = 175 + 100 * Math.sin(radians);
                return (
                  <line 
                    x1="200" 
                    y1="175" 
                    x2={xTarget} 
                    y2={yTarget} 
                    stroke={accentColor} 
                    strokeWidth="1.5" 
                    strokeDasharray="4 4"
                  />
                );
              })()}
            </svg>
          </div>
        </div>

        {/* Right: Selected Node prose description panel */}
        <div className="col-span-5 border border-[#dedbc8]/10 bg-[#0d0d0d] p-8 min-h-[350px] flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-[#2a7d8a] uppercase tracking-widest font-bold">
              ROLE DEFINITION SPEC // 0{activeIdx + 1}
            </span>
            <h3 className="type-heading text-2xl text-white">
              {parsedRoles[activeIdx].title}
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed font-light font-sans mt-2">
              {parsedRoles[activeIdx].desc}
            </p>
          </div>

          <div className="border-t border-[#dedbc8]/10 pt-4 flex justify-between items-center text-xs font-mono text-gray-500 uppercase">
            <span>PERMS: L1_ACCESS</span>
            <span>TOKEN: LOCKED</span>
          </div>
        </div>

      </div>

      {/* Mobile Layout: Simple Accordion */}
      <div className="md:hidden mt-4">
        <Accordion defaultValue={["role-0"]} className="w-full border border-[#dedbc8]/10 bg-[#0d0d0d] p-4">
          {parsedRoles.map((role, idx) => (
            <AccordionItem key={idx} value={`role-${idx}`} className="border-b border-[#dedbc8]/5">
              <AccordionTrigger className="hover:no-underline py-4 text-left">
                <div className="flex gap-3 items-center">
                  <span className="font-mono text-xs text-gray-500">0{idx + 1}</span>
                  <span className="font-sans text-xs font-bold uppercase text-white tracking-wider">{role.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-xs text-gray-300 font-light font-sans leading-relaxed">
                  {role.desc}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </div>
  );
}
export default RoleMap;
