"use client";

import React, { useState, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/register";
import { useGSAPReducedMotion } from "@/hooks/useGSAPReducedMotion";

interface LayerData {
  id: number;
  name: string;
  desc: string;
  details: string;
}

const LAYERS: LayerData[] = [
  { id: 1, name: "Clean Transaction Inputs", desc: "Verifies structure at point of entry.", details: "Ensures incoming operational events map precisely to types, preventing null errors from corrupting state triggers later." },
  { id: 2, name: "Strict State Machines", desc: "Restricts workflow state bypasses.", details: "Forces work orders to follow sequential stages. A diagnostic or table order cannot skip checking gates without admin clearance." },
  { id: 3, name: "Role-Aware Permissions", desc: "Isolates action claims by staff roles.", details: "Locks down execution commands (like drug dispensing or kitchen handoffs) to verified profile ledger tokens." },
  { id: 4, name: "State-based Automations", desc: "Triggers notifications and queues.", details: "Monitors database state loops to automatically send text alerts or schedule next-up tasks without manual check-in delay." },
  { id: 5, name: "Operational Dashboards", desc: "Visualizes volumes and wait metrics.", details: "Aggregates wait-times, sales logs, and pipeline queues into high-contrast tables for real-time manager oversight." },
  { id: 6, name: "Clear Audit Logs", desc: "Logs immutable event history records.", details: "Captures structural timestamps for every transaction update, creating permanent compliance records for auditing." },
];

export function ArchitectureChapter() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useGSAPReducedMotion();

  useGSAP(
    () => {
      if (isReduced) return;

      // Animate connections pulsing toward core
      gsap.to(".cpu-line", {
        strokeDashoffset: -20,
        repeat: -1,
        duration: 2.5,
        ease: "none",
      });
    },
    { scope: containerRef, dependencies: [isReduced] }
  );

  return (
    <section 
      data-chapter-index={3}
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative z-10 px-6 md:px-12 max-w-5xl mx-auto select-text py-24"
    >
      <div className="flex flex-col gap-6 mb-12">
        <span className="text-xs font-mono tracking-widest text-[#2a7d8a] uppercase font-bold">
          [ SYSTEM ARCHITECTURE ]
        </span>
        <h2 className="type-heading text-3xl md:text-5xl text-[#dedbc8] tracking-tight">
          Engineered for Outcomes
        </h2>
        <p className="type-body text-base text-gray-300 max-w-2xl">
          We replace fragmented tools with a singular, layered architectural engine where every component maps directly to an operational control point.
        </p>
      </div>

      {/* CPU Architecture Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: CPU Blueprint Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 relative p-6 bg-[#0d0d0d] border border-[#dedbc8]/10 rounded-none overflow-hidden min-h-[380px] justify-items-center items-center">
          
          {/* Central Workflow Engine Hub Core */}
          <div className="md:col-start-2 md:row-start-2 z-20 size-32 bg-[#070707] border-2 border-[#2a7d8a] flex flex-col items-center justify-center p-3 text-center shadow-[0_0_24px_rgba(42,125,138,0.15)] select-none">
            <span className="font-mono text-xs text-[#2a7d8a] uppercase tracking-wider font-bold">CORE ENGINE</span>
            <span className="font-sans text-xs font-bold uppercase tracking-wide text-white mt-1">WORKFLOW</span>
            <span className="font-mono text-xs text-gray-500 uppercase mt-0.5 tracking-widest">ACTIVE PORT: 08</span>
          </div>

          {/* Surrounding Nodes */}
          {LAYERS.map((layer, idx) => {
            const isActive = activeIdx === idx;
            
            // Map indexes to layout positions
            // 0: top-left, 1: top-mid, 2: top-right, 3: bottom-left, 4: bottom-mid, 5: bottom-right
            const gridPos = [
              "md:col-start-1 md:row-start-1", // Node 1
              "md:col-start-2 md:row-start-1", // Node 2
              "md:col-start-3 md:row-start-1", // Node 3
              "md:col-start-1 md:row-start-3", // Node 4
              "md:col-start-2 md:row-start-3", // Node 5
              "md:col-start-3 md:row-start-3", // Node 6
            ];

            return (
              <button
                key={layer.id}
                onClick={() => setActiveIdx(idx)}
                className={`z-20 w-full min-h-[85px] p-3 text-left border transition-all duration-300 outline-none focus:ring-1 focus:ring-[#dedbc8] flex flex-col justify-between ${gridPos[idx]} ${
                  isActive 
                    ? "bg-[#2a7d8a]/5 border-[#2a7d8a] shadow-[0_0_15px_rgba(42,125,138,0.08)]" 
                    : "bg-[#070707] border-[#dedbc8]/10 hover:border-[#dedbc8]/30"
                }`}
                aria-label={`Show details for ${layer.name}`}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-gray-500 font-bold uppercase">STAGE 0{layer.id}</span>
                  <h4 className={`font-sans text-xs font-bold uppercase tracking-wide ${isActive ? "text-white" : "text-gray-300"}`}>
                    {layer.name}
                  </h4>
                </div>
                <span className="font-mono text-xs text-gray-500 self-end">SYS {layer.id}</span>
              </button>
            );
          })}

          {/* Connection Lines overlay */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
            <svg className="w-full h-full" viewBox="0 0 500 380">
              {/* Lines linking to center core (center is x: 250, y: 190) */}
              {/* top-left line */}
              <path d="M 80,95 L 250,190" stroke="rgba(222,219,200,0.06)" strokeWidth="1.5" />
              <path className="cpu-line" d="M 80,95 L 250,190" stroke="#2a7d8a" strokeWidth="1.5" strokeDasharray="6 14" strokeDashoffset="0" />
              
              {/* top-mid line */}
              <path d="M 250,95 L 250,190" stroke="rgba(222,219,200,0.06)" strokeWidth="1.5" />
              <path className="cpu-line" d="M 250,95 L 250,190" stroke="#2a7d8a" strokeWidth="1.5" strokeDasharray="6 14" strokeDashoffset="0" />
              
              {/* top-right line */}
              <path d="M 420,95 L 250,190" stroke="rgba(222,219,200,0.06)" strokeWidth="1.5" />
              <path className="cpu-line" d="M 420,95 L 250,190" stroke="#2a7d8a" strokeWidth="1.5" strokeDasharray="6 14" strokeDashoffset="0" />

              {/* bottom-left line */}
              <path d="M 80,285 L 250,190" stroke="rgba(222,219,200,0.06)" strokeWidth="1.5" />
              <path className="cpu-line" d="M 80,285 L 250,190" stroke="#2a7d8a" strokeWidth="1.5" strokeDasharray="6 14" strokeDashoffset="0" />
              
              {/* bottom-mid line */}
              <path d="M 250,285 L 250,190" stroke="rgba(222,219,200,0.06)" strokeWidth="1.5" />
              <path className="cpu-line" d="M 250,285 L 250,190" stroke="#2a7d8a" strokeWidth="1.5" strokeDasharray="6 14" strokeDashoffset="0" />
              
              {/* bottom-right line */}
              <path d="M 420,285 L 250,190" stroke="rgba(222,219,200,0.06)" strokeWidth="1.5" />
              <path className="cpu-line" d="M 420,285 L 250,190" stroke="#2a7d8a" strokeWidth="1.5" strokeDasharray="6 14" strokeDashoffset="0" />
            </svg>
          </div>
        </div>

        {/* Right: Active Layer Description Panel */}
        <div className="lg:col-span-5 flex flex-col gap-5 border border-[#dedbc8]/10 bg-[#0d0d0d] p-8 min-h-[380px] justify-between">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs text-[#2a7d8a] uppercase tracking-widest font-bold">
              NODE SPECIFICATION // STACK 0{LAYERS[activeIdx].id}
            </span>
            <h3 className="type-heading text-2xl text-white">
              {LAYERS[activeIdx].name}
            </h3>
            <span className="font-mono text-xs text-[#2a7d8a] font-bold">
              {LAYERS[activeIdx].desc}
            </span>
            <p className="type-body text-sm text-gray-300 leading-relaxed mt-2">
              {LAYERS[activeIdx].details}
            </p>
          </div>

          <div className="border-t border-[#dedbc8]/10 pt-4 flex justify-between items-center text-xs font-mono text-gray-500 uppercase">
            <span>PORT_STATE: LOCKED</span>
            <span>ENCRYPT: SHA-256</span>
          </div>
        </div>

      </div>
    </section>
  );
}
export default ArchitectureChapter;
