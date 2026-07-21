"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowLeft, Play, Pause, ExternalLink, Activity, Cpu, 
  ShieldCheck, FileText, X, Compass, Sparkles
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Master Content State Interface for Interactive Deep Dives
interface DetailModalProps {
  title: string;
  category: string;
  content: React.ReactNode;
  onClose: () => void;
}

function DetailModal({ title, category, content, onClose }: DetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl max-h-[85vh] bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-y-auto p-6 md:p-8 flex flex-col justify-between text-white relative">
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

export function FullIntegrationQualitySlice() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  
  // Persistent Visual References
  const bgGridRef = useRef<HTMLDivElement>(null);
  const signalCoreRef = useRef<HTMLDivElement>(null);
  const branchSpreadsheetRef = useRef<HTMLDivElement>(null);
  const branchQueueRef = useRef<HTMLDivElement>(null);
  const branchLogRef = useRef<HTMLDivElement>(null);
  const nexusSpineRef = useRef<HTMLDivElement>(null);
  
  // Narrative Copy Overlay Refs
  const copyCh1Ref = useRef<HTMLDivElement>(null);
  const copyCh2Ref = useRef<HTMLDivElement>(null);
  const copyCh3Ref = useRef<HTMLDivElement>(null);
  const copyCh4Ref = useRef<HTMLDivElement>(null);

  // Application Mode & Modal State
  const [viewMode, setViewMode] = useState<"story" | "explore">("story");
  const [isMotionPaused, setIsMotionPaused] = useState(false);
  const [activeModal, setActiveModal] = useState<{ title: string; category: string; content: React.ReactNode } | null>(null);

  // GSAP Master ScrollTrigger Timeline
  useEffect(() => {
    if (!containerRef.current || !viewportRef.current || isMotionPaused || viewMode === "explore") return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=400%",
            pin: viewportRef.current,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Act 1: Signal Appears
        mainTl
          .to(copyCh1Ref.current, { opacity: 1, y: 0, duration: 0.5 })
          .to(signalCoreRef.current, { scale: 1.2, opacity: 1, duration: 0.5 }, 0)

        // Act 2: Signal Fragments
          .to(copyCh1Ref.current, { opacity: 0, y: -20, duration: 0.3 }, 0.8)
          .to(copyCh2Ref.current, { opacity: 1, y: 0, duration: 0.5 }, 1.0)
          .to(branchSpreadsheetRef.current, { x: -180, y: -60, z: 100, opacity: 1, duration: 0.8 }, 0.8)
          .to(branchQueueRef.current, { x: 180, y: 40, z: -50, opacity: 1, duration: 0.8 }, 0.8)
          .to(branchLogRef.current, { x: -40, y: 140, z: 150, opacity: 0.9, duration: 0.8 }, 0.8)

        // Act 3: Signal Gets Lost
          .to(copyCh2Ref.current, { opacity: 0, y: -20, duration: 0.3 }, 1.8)
          .to(copyCh3Ref.current, { opacity: 1, y: 0, duration: 0.5 }, 2.0)
          .to(branchSpreadsheetRef.current, { x: -240, rotation: -12, border: "1px solid #ef4444", duration: 0.8 }, 1.8)
          .to(branchQueueRef.current, { x: 240, rotation: 10, border: "1px solid #f59e0b", duration: 0.8 }, 1.8)
          .to(signalCoreRef.current, { opacity: 0.3, duration: 0.8 }, 1.8)

        // Act 4: Nexus Reveals System
          .to(copyCh3Ref.current, { opacity: 0, y: -20, duration: 0.3 }, 2.8)
          .to(copyCh4Ref.current, { opacity: 1, y: 0, duration: 0.5 }, 3.0)
          .to(nexusSpineRef.current, { opacity: 1, scale: 1, duration: 0.8 }, 2.8)
          .to(branchSpreadsheetRef.current, { x: 0, y: -70, z: 0, rotation: 0, border: "1px solid #10b981", duration: 0.8 }, 2.8)
          .to(branchQueueRef.current, { x: 0, y: 70, z: 0, rotation: 0, border: "1px solid #10b981", duration: 0.8 }, 2.8)
          .to(signalCoreRef.current, { opacity: 1, scale: 1.4, backgroundColor: "#10b981", duration: 0.8 }, 2.8);

      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [isMotionPaused, viewMode]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#09090B] text-white select-none">
      {/* Interactive Detail Modal Layer */}
      {activeModal && (
        <DetailModal
          title={activeModal.title}
          category={activeModal.category}
          content={activeModal.content}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Mode & Navigation Control Bar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2.5 rounded-full bg-[#18181B]/95 border border-[#27272A] shadow-2xl backdrop-blur-xl flex items-center gap-6 text-xs font-mono">
        <Link href="/" className="text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Chooser</span>
        </Link>

        <span className="w-px h-4 bg-[#27272A]" />

        {/* Story vs Explore Mode Toggle */}
        <div className="flex items-center gap-1 bg-[#27272A]/80 p-1 rounded-full">
          <button
            onClick={() => setViewMode("story")}
            className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
              viewMode === "story" ? "bg-[#DEDBC8] text-black font-bold shadow-md" : "text-[#A1A1AA] hover:text-white"
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>Story Mode</span>
          </button>

          <button
            onClick={() => setViewMode("explore")}
            className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
              viewMode === "explore" ? "bg-[#DEDBC8] text-black font-bold shadow-md" : "text-[#A1A1AA] hover:text-white"
            }`}
          >
            <Compass className="w-3 h-3" />
            <span>Explore Mode</span>
          </button>
        </div>

        <span className="w-px h-4 bg-[#27272A]" />

        <button
          onClick={() => setIsMotionPaused(!isMotionPaused)}
          className="text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors"
        >
          {isMotionPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          <span>{isMotionPaused ? "Motion Off" : "Motion Active"}</span>
        </button>

        <Link
          href="/classic"
          className="px-2.5 py-1 rounded-full bg-[#27272A] text-[#DEDBC8] hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>Classic</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </nav>

      {/* STORY MODE: Pinned Viewport Container (100dvh) */}
      {viewMode === "story" && (
        <div
          ref={viewportRef}
          className="w-full h-screen h-[100dvh] overflow-hidden relative flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {/* Continuous Background Grid */}
          <div
            ref={bgGridRef}
            className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] origin-center"
          />

          {/* Nexus Coordinating Spine Hub */}
          <div
            ref={nexusSpineRef}
            className="absolute w-[500px] h-[500px] rounded-full border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-2xl opacity-0 scale-75 pointer-events-none flex items-center justify-center shadow-[0_0_100px_rgba(16,185,129,0.1)]"
          >
            <div className="w-80 h-80 rounded-full border border-dashed border-emerald-400/40 animate-spin-slow" />
          </div>

          {/* PERSISTENT ENTITY: Operational Signal Core */}
          <div
            ref={signalCoreRef}
            className="relative z-30 w-16 h-16 rounded-full bg-[#DEDBC8] shadow-[0_0_40px_rgba(222,219,200,0.6)] flex items-center justify-center opacity-0 transform transition-all duration-300"
          >
            <Activity className="w-8 h-8 text-black animate-pulse" />
            <span className="absolute -bottom-6 font-mono text-[10px] text-[#DEDBC8] uppercase tracking-widest whitespace-nowrap">
              SIG-0921
            </span>
          </div>

          {/* Divergent Branch 1: Spreadsheet Fragment */}
          <div
            ref={branchSpreadsheetRef}
            onClick={() =>
              setActiveModal({
                title: "Siloed Spreadsheet Queue (Silo A)",
                category: "OPERATIONAL FRAGMENT",
                content: (
                  <p>
                    Manual spreadsheet tracking causing missing approval signatures and hidden compliance risk across departments.
                  </p>
                ),
              })
            }
            className="absolute z-20 p-4 rounded-xl bg-[#18181B]/90 border border-[#3F3F46] shadow-2xl backdrop-blur-xl w-64 space-y-2 opacity-0 font-mono text-xs cursor-pointer hover:border-emerald-400/60 transition-colors"
          >
            <div className="flex items-center justify-between text-red-400">
              <span>UNLINKED SPREADSHEET</span>
              <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-[10px]">INSPECT</span>
            </div>
            <p className="text-[11px] text-[#A1A1AA]">Queue Ticket #8492 — Missing Approval</p>
          </div>

          {/* Divergent Branch 2: Support Queue Fragment */}
          <div
            ref={branchQueueRef}
            onClick={() =>
              setActiveModal({
                title: "Support Queue Ticket (Silo B)",
                category: "OPERATIONAL FRAGMENT",
                content: (
                  <p>
                    Unlinked patient onboarding webhook queue suffering +42m latency due to missing integration pipelines.
                  </p>
                ),
              })
            }
            className="absolute z-20 p-4 rounded-xl bg-[#18181B]/90 border border-[#3F3F46] shadow-2xl backdrop-blur-xl w-64 space-y-2 opacity-0 font-mono text-xs cursor-pointer hover:border-emerald-400/60 transition-colors"
          >
            <div className="flex items-center justify-between text-amber-400">
              <span>SUPPORT QUEUE</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-[10px]">INSPECT</span>
            </div>
            <p className="text-[11px] text-[#A1A1AA]">Patient Webhook — +42m Latency</p>
          </div>

          {/* Divergent Branch 3: Isolated Audit Log */}
          <div
            ref={branchLogRef}
            className="absolute z-10 p-3 rounded-lg bg-[#18181B]/80 border border-[#27272A] shadow-lg backdrop-blur-md w-56 space-y-1 opacity-0 font-mono text-[10px] text-[#71717A]"
          >
            <span>[WARN] Unlinked transaction payload #00921</span>
          </div>

          {/* Narrative Script Overlays */}
          <div className="absolute bottom-16 inset-x-6 z-40 max-w-xl mx-auto text-center pointer-events-none">
            <div ref={copyCh1Ref} className="opacity-0 transform translate-y-4 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#DEDBC8]">
                CHAPTER 01 // THE SIGNAL APPEARS
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
                A critical operational signal enters the organization.
              </h2>
            </div>

            <div ref={copyCh2Ref} className="opacity-0 transform translate-y-4 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-amber-400">
                CHAPTER 02 // THE SIGNAL FRAGMENTS
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
                Siloed systems break the signal into conflicting versions of truth.
              </h2>
            </div>

            <div ref={copyCh3Ref} className="opacity-0 transform translate-y-4 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-red-400">
                CHAPTER 03 // THE SIGNAL GETS LOST
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
                Context is lost between tools. Nobody sees the complete picture.
              </h2>
            </div>

            <div ref={copyCh4Ref} className="opacity-0 transform translate-y-4 space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                CHAPTER 04 // NEXUS REVEALS THE SYSTEM
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
                Nexus detects the fragments and reveals their true underlying connection.
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* EXPLORE MODE: Spatial Navigation & Complete Information Deck */}
      {viewMode === "explore" && (
        <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <Compass className="w-3.5 h-3.5" />
              <span>EXPLORE MODE // SPATIAL PLATFORM NAVIGATOR</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Explore 100% of Nexus Services, Proof & Case Studies.
            </h2>
            <p className="text-base text-[#A1A1AA] font-sans">
              Click any node below to inspect complete approved descriptions, verified metrics, case study proof, and consultation workflows.
            </p>
          </div>

          {/* Interactive Categories Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              onClick={() =>
                setActiveModal({
                  title: "Custom Enterprise Software & Automation",
                  category: "SERVICES & PRIMITIVES",
                  content: (
                    <p>
                      Complete services: Tailored web apps, internal tools, API workflow automation, high-throughput data infrastructure, and autonomous AI agents.
                    </p>
                  ),
                })
              }
              className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A] hover:border-emerald-400/50 transition-all cursor-pointer space-y-4"
            >
              <Cpu className="w-8 h-8 text-emerald-400" />
              <h3 className="text-xl font-serif font-bold text-white">Services & Primitives</h3>
              <p className="text-xs text-[#A1A1AA]">Custom software, API automation, data pipelines & AI subagents.</p>
              <span className="text-xs font-mono text-[#DEDBC8] flex items-center gap-1">Open Complete Suite →</span>
            </div>

            <div
              onClick={() =>
                setActiveModal({
                  title: "All 7 Verifiable Case Studies",
                  category: "PROOF & CASE STUDIES",
                  content: (
                    <p>
                      Inspect proof cases: ClinicOS Healthcare, Aarogya Supply Chain, FinFlow Settlement, AutoLogistics Telemetry, LegalVault Evidence, InsureFast Underwriting, and EduNexus.
                    </p>
                  ),
                })
              }
              className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A] hover:border-emerald-400/50 transition-all cursor-pointer space-y-4"
            >
              <FileText className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-serif font-bold text-white">Case Studies (7/7)</h3>
              <p className="text-xs text-[#A1A1AA]">ClinicOS, Aarogya, FinFlow, LegalVault, InsureFast, EduNexus.</p>
              <span className="text-xs font-mono text-[#DEDBC8] flex items-center gap-1">Open Case Ledger →</span>
            </div>

            <div
              onClick={() =>
                setActiveModal({
                  title: "Trust, Governance & Intake",
                  category: "COMPANY & CONVERSION",
                  content: (
                    <p>
                      Founder philosophy, security sandbox boundaries, compliance SLA, legal disclosures, and consultation intake.
                    </p>
                  ),
                })
              }
              className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A] hover:border-emerald-400/50 transition-all cursor-pointer space-y-4"
            >
              <ShieldCheck className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl font-serif font-bold text-white">Governance & Consultation</h3>
              <p className="text-xs text-[#A1A1AA]">Founder vision, trust limits, legal privacy & consultation form.</p>
              <span className="text-xs font-mono text-[#DEDBC8] flex items-center gap-1">Open Governance Node →</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
