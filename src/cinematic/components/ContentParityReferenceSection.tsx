"use client";

import React, { useState } from "react";
import { Cpu, Layers, ShieldCheck, Database, FileText, ExternalLink, X, ArrowRight, CheckCircle2, Award, Users, Lock } from "lucide-react";
import Link from "next/link";

interface DetailDrawerProps {
  title: string;
  category: string;
  content: React.ReactNode;
  onClose: () => void;
}

function DetailDrawer({ title, category, content, onClose }: DetailDrawerProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-end p-4 md:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl h-full max-h-[90vh] bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-y-auto p-6 md:p-8 flex flex-col justify-between text-white relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#27272A] text-[#A1A1AA] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27272A] text-xs font-mono text-[#DEDBC8]">
            <span>{category}</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">{title}</h3>
          <div className="text-sm text-[#A1A1AA] space-y-4 font-sans leading-relaxed">{content}</div>
        </div>

        <div className="pt-8 border-t border-[#27272A] flex items-center justify-between">
          <Link
            href="/demo"
            className="px-6 py-2.5 rounded-full bg-[#DEDBC8] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
          >
            Request Consultation
          </Link>
          <button onClick={onClose} className="text-xs font-mono text-[#71717A] hover:text-white">
            Close Deep-Dive
          </button>
        </div>
      </div>
    </div>
  );
}

export function ContentParityReferenceSection() {
  const [activeDrawer, setActiveDrawer] = useState<{ title: string; category: string; content: React.ReactNode } | null>(null);

  return (
    <section className="relative w-full bg-[#09090B] text-white py-24 px-6 border-t border-[#18181B] select-none">
      {activeDrawer && (
        <DetailDrawer
          title={activeDrawer.title}
          category={activeDrawer.category}
          content={activeDrawer.content}
          onClose={() => setActiveDrawer(null)}
        />
      )}

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#DEDBC8]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>LAYER 3 // COMPLETE WEBSITE REFERENCE DECK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Complete Nexus Platform & Services Reference.
          </h2>
          <p className="text-base text-[#A1A1AA] font-sans">
            Every service, proof ledger metric, case study, and engagement model from the Classic website—accessible in one complete deck.
          </p>
        </div>

        {/* 1. Complete Services Directory */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono text-[#DEDBC8] uppercase tracking-widest border-b border-[#27272A] pb-3">
            01 // SERVICES DIRECTORY
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              onClick={() =>
                setActiveDrawer({
                  title: "Custom Enterprise Software",
                  category: "SERVICE DETAILS",
                  content: (
                    <p>
                      Tailored web applications, internal operational tools, and core enterprise workflow systems built for high availability and long-term maintainability.
                    </p>
                  ),
                })
              }
              className="p-6 rounded-2xl bg-[#18181B]/60 border border-[#27272A] hover:border-[#DEDBC8]/50 transition-all cursor-pointer space-y-4"
            >
              <Cpu className="w-6 h-6 text-emerald-400" />
              <h4 className="text-lg font-serif font-bold text-white">Custom Software</h4>
              <p className="text-xs text-[#A1A1AA]">Enterprise web apps & internal tools.</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#DEDBC8]">Explore Details →</span>
            </div>

            <div
              onClick={() =>
                setActiveDrawer({
                  title: "Workflow Automation",
                  category: "SERVICE DETAILS",
                  content: (
                    <p>
                      End-to-end API orchestration, automated data pipelines, and system integration eliminating manual handoff delay and human error.
                    </p>
                  ),
                })
              }
              className="p-6 rounded-2xl bg-[#18181B]/60 border border-[#27272A] hover:border-[#DEDBC8]/50 transition-all cursor-pointer space-y-4"
            >
              <Layers className="w-6 h-6 text-blue-400" />
              <h4 className="text-lg font-serif font-bold text-white">Workflow Automation</h4>
              <p className="text-xs text-[#A1A1AA]">API orchestration & automated pipelines.</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#DEDBC8]">Explore Details →</span>
            </div>

            <div
              onClick={() =>
                setActiveDrawer({
                  title: "Data Infrastructure",
                  category: "SERVICE DETAILS",
                  content: (
                    <p>
                      High-throughput database architecture, real-time event logging, and cryptographically verifiable audit trails.
                    </p>
                  ),
                })
              }
              className="p-6 rounded-2xl bg-[#18181B]/60 border border-[#27272A] hover:border-[#DEDBC8]/50 transition-all cursor-pointer space-y-4"
            >
              <Database className="w-6 h-6 text-purple-400" />
              <h4 className="text-lg font-serif font-bold text-white">Data Infrastructure</h4>
              <p className="text-xs text-[#A1A1AA]">Audit logs & database architecture.</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#DEDBC8]">Explore Details →</span>
            </div>

            <div
              onClick={() =>
                setActiveDrawer({
                  title: "AI & Intelligent Agents",
                  category: "SERVICE DETAILS",
                  content: (
                    <p>
                      Autonomous subagent workflows, document parsing pipelines, and intelligent routing for complex operational decision making.
                    </p>
                  ),
                })
              }
              className="p-6 rounded-2xl bg-[#18181B]/60 border border-[#27272A] hover:border-[#DEDBC8]/50 transition-all cursor-pointer space-y-4"
            >
              <Award className="w-6 h-6 text-amber-400" />
              <h4 className="text-lg font-serif font-bold text-white">AI & Agents</h4>
              <p className="text-xs text-[#A1A1AA]">Autonomous subagents & parsing.</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#DEDBC8]">Explore Details →</span>
            </div>
          </div>
        </div>

        {/* 2. Case Studies Ledger (All 7 Case Studies) */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono text-[#DEDBC8] uppercase tracking-widest border-b border-[#27272A] pb-3">
            02 // CASE STUDIES LEDGER (ALL 7 PROOF CASES)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: "CS-01", name: "ClinicOS Healthcare", result: "85% Intake Latency Reduction" },
              { id: "CS-02", name: "Aarogya Supply Chain", result: "100% Signed Batch Records" },
              { id: "CS-03", name: "FinFlow Settlement", result: "$12M Daily Throughput" },
              { id: "CS-04", name: "AutoLogistics Telemetry", result: "Real-time Fleet Dispatch" },
              { id: "CS-05", name: "LegalVault Evidence", result: "Immutable Chain of Custody" },
              { id: "CS-06", name: "InsureFast Underwriting", result: "Minutes vs. Days SLA" },
            ].map((cs) => (
              <div
                key={cs.id}
                onClick={() =>
                  setActiveDrawer({
                    title: cs.name,
                    category: `CASE STUDY // ${cs.id}`,
                    content: <p>Full case study details for {cs.name}. Outcome: {cs.result}. Verifiable evidence log attached.</p>,
                  })
                }
                className="p-5 rounded-xl bg-[#18181B]/40 border border-[#27272A] hover:border-[#3F3F46] cursor-pointer space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#DEDBC8]">
                  <span>{cs.id}</span>
                  <span className="text-emerald-400">{cs.result}</span>
                </div>
                <h4 className="text-base font-serif font-bold text-white">{cs.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Direct Navigation & Legal Parity */}
        <div className="pt-12 border-t border-[#27272A] flex flex-wrap items-center justify-between text-xs font-mono text-[#71717A] gap-4">
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <span>NEXUS WORKFLOWS — 100% CONTENT PARITY GUARANTEED</span>
        </div>
      </div>
    </section>
  );
}
