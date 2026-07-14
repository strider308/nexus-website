"use client";

import React from "react";
import { useIsHydrated, useMediaQuery } from "@/hooks/useClientState";
import { HERO } from "@/lib/content/nexus";
import dynamic from "next/dynamic";
import { HeroFallback } from "../three/ThreeFallback";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "../ui/words-pull-up";

// 3D Cinematic Website Experiment Imports
import { HERO_3D_ENABLED, CINEMATIC_3D_DEBUG } from "@/lib/cinematic-3d/config";
import { Cinematic3DProvider, useCinematic3D } from "../cinematic-3d/Cinematic3DProvider";
import { Cinematic3DFallback } from "../cinematic-3d/Cinematic3DFallback";

const ThreeCanvasShell = dynamic(
  () => import("../three/ThreeCanvasShell").then((mod) => mod.ThreeCanvasShell),
  { ssr: false, loading: () => <HeroFallback /> }
);
const NexusSystemScene = dynamic(
  () => import("../three/NexusSystemScene"),
  { ssr: false }
);

const Cinematic3DCanvas = dynamic(
  () => import("../cinematic-3d/Cinematic3DCanvas").then((mod) => mod.Cinematic3DCanvas),
  { ssr: false, loading: () => <Cinematic3DFallback /> }
);
const NexusOperatingField = dynamic(
  () => import("../cinematic-3d/NexusOperatingField").then((mod) => mod.NexusOperatingField),
  { ssr: false }
);

function Cinematic3DDebugBadge() {
  const { is3DActive, quality, isMobile, reducedMotion, webglError, isEnabled } = useCinematic3D();
  
  if (!CINEMATIC_3D_DEBUG) return null;

  let status = "Inactive";
  if (!isEnabled) status = "Flag Disabled";
  else if (reducedMotion) status = "Reduced Motion Skip";
  else if (isMobile) status = "Mobile Fallback";
  else if (webglError) status = "WebGL Error Fallback";
  else if (is3DActive) status = `Active (${quality.dpr}x DPR)`;

  return (
    <div className="absolute top-4 left-4 z-[99] bg-black/85 text-[10px] text-[#DEDBC8]/90 border border-[#DEDBC8]/30 px-2 py-1 rounded font-mono select-none pointer-events-auto shadow-lg shadow-black/80">
      3D Status: <span className="font-bold text-sky-400">{status}</span>
    </div>
  );
}

function HeroCinematic3DContainer() {
  const { is3DActive } = useCinematic3D();

  return (
    <div className="w-full h-full relative">
      <Cinematic3DDebugBadge />
      {is3DActive ? (
        <Cinematic3DCanvas fallback={<Cinematic3DFallback />}>
          <NexusOperatingField />
        </Cinematic3DCanvas>
      ) : (
        <Cinematic3DFallback />
      )}
    </div>
  );
}


export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const mounted = useIsHydrated();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const showCanvas = mounted && !isMobile && !shouldReduceMotion;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const
      } 
    },
  };

  return (
    <section
      id="cover"
      className="relative w-full h-screen min-h-[680px] p-4 md:p-6 bg-black flex flex-col"
    >
      {/* Inset Container */}
      <div className="relative flex-grow w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black border border-[#DEDBC8]/15 flex flex-col justify-end p-6 md:p-12 pb-14 md:pb-16">
        
        {/* Visual Background Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          {HERO_3D_ENABLED || CINEMATIC_3D_DEBUG ? (
            <Cinematic3DProvider isEnabledOverride={HERO_3D_ENABLED}>
              <HeroCinematic3DContainer />
            </Cinematic3DProvider>
          ) : showCanvas ? (
            <ThreeCanvasShell 
              ariaLabel="Workflow integration visualization mapping scattered chats, sheets, and tasks into a central Nexus network."
              fallback={<HeroFallback />}
              decorative={true}
              interactive={false}
              frameloop="always"
              powerPreference="low-power"
            >
              <NexusSystemScene />
            </ThreeCanvasShell>
          ) : (
            <HeroFallback />
          )}
        </div>

        {/* Noise overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none noise-overlay opacity-[0.6] mix-blend-overlay" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-t from-black via-black/45 to-black/20" />

        {/* Hero Content (Bottom-aligned) */}
        <div className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Giant Typography heading (Left Column - 8 Cols) */}
            <div className="lg:col-span-8 flex flex-col items-start select-none">
              <span className="text-xs md:text-sm font-mono font-bold tracking-[0.25em] uppercase text-[#DEDBC8]/85 mb-2">
                Custom Workflow Systems
              </span>
              <div className="relative">
                <WordsPullUp 
                  text="Nexus"
                  className="font-display text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.82] tracking-[-0.07em] text-[#E1E0CC]"
                  showAsterisk={true}
                />
              </div>
            </div>

            {/* Description & CTAs (Right Column - 4 Cols) */}
            <motion.div
              className="lg:col-span-4 flex flex-col items-start gap-6 lg:pb-3"
              variants={containerVariants}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              animate="visible"
            >
              <motion.p 
                variants={itemVariants}
                className="text-body-muted font-light"
              >
                Nexus builds custom software and automation for complex workflows — turning fragmented operations into mapped, role-aware systems.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full"
              >
                {/* Primary CTA: Cal scheduling link */}
                <a 
                  href={HERO.ctaUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 bg-[#DEDBC8] hover:bg-[#DEDBC8]/90 text-black rounded-full pl-5 pr-1.5 py-1.5 w-full sm:max-w-xs lg:max-w-none text-sm font-bold tracking-wider uppercase transition-all duration-300 outline-none"
                >
                  <span>Start a conversation</span>
                  <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0">
                    <ArrowRight className="h-3.5 w-3.5 text-[#DEDBC8]" />
                  </div>
                </a>

                {/* Secondary CTA: Scroll target */}
                <a 
                  href="#case-studies"
                  className="flex items-center justify-center border border-[#DEDBC8]/25 text-[#DEDBC8] hover:bg-[#DEDBC8]/10 hover:border-[#DEDBC8]/40 rounded-full px-5 py-3 w-full sm:max-w-xs lg:max-w-none text-sm font-bold tracking-wider uppercase transition-all duration-300 outline-none text-center"
                >
                  See proof of work
                </a>
              </motion.div>

              {/* Inset metadata tag */}
              <motion.div 
                variants={itemVariants}
                className="text-xs font-mono text-[#DEDBC8]/70 uppercase tracking-wider pt-2 border-t border-[#DEDBC8]/10 w-full"
              >
                7 shipped systems &middot; 5 industries &middot; built end-to-end
              </motion.div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
