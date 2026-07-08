"use client";

import { HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NexusNetworkVisual } from "../visuals/NexusNetworkVisual";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, MessageSquare } from "lucide-react";

const STARTING_POINTS = [
  {
    title: "I run an operation manually",
    desc: "Replacing paper logs, shared sheets, or fragmented messaging threads with custom software.",
    model: "Operational System Build",
    link: "#services-brochure"
  },
  {
    title: "I have an app idea but need scope",
    desc: "Structuring user roles, transition stages, approval pathways, and core scope parameters.",
    model: "Workflow Mapping Sprint",
    link: "#services-brochure"
  },
  {
    title: "I need automation between tools",
    desc: "Injecting status-aware integrations and automated webhook notifications behind existing data.",
    model: "Automation Layer Build",
    link: "#services-brochure"
  },
  {
    title: "I need better owner visibility",
    desc: "Consolidating scattered database stages or record sheets into a live, clean analytics dashboard.",
    model: "Consolidated Dashboard",
    link: "#services-brochure"
  },
  {
    title: "I need a private beta built",
    desc: "Releasing a scoped, functional product iteration to first friendly users or pilot groups.",
    model: "Private Beta Build",
    link: "#services-brochure"
  }
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("services-brochure");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="cover"
      className="relative w-full min-h-[calc(100vh-64px)] flex flex-col justify-center py-16 md:py-24 overflow-hidden border-b border-border bg-[#0C1828] text-white"
    >
      
      {/* Ambient Drifting color glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[360px] h-[360px] top-[-80px] left-[10%] rounded-full bg-[#5B4B8A] opacity-20 blur-[80px] animate-drift-1" />
        <div className="absolute w-[340px] h-[340px] bottom-[-100px] left-[35%] rounded-full bg-[#2A7D8A] opacity-18 blur-[80px] animate-drift-2" />
        <div className="absolute w-[320px] h-[320px] top-[-60px] right-[10%] rounded-full bg-[#8A2A5A] opacity-18 blur-[80px] animate-drift-3" />
      </div>

      {/* Textured SVG grain overlay */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Copy (Left Column) */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.span 
              variants={itemVariants} 
              className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/50 mb-3"
            >
              {HERO.eyebrow}
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-none mb-6"
            >
              {HERO.title}
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg font-light text-white/70 leading-relaxed max-w-[540px] mb-8"
            >
              {HERO.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <a 
                href={HERO.ctaUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-auto bg-white hover:bg-white/90 text-[#0C1828] font-bold rounded-[6px] flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 outline-none interactive-action"
                )}
              >
                <MessageSquare className="h-4 w-4" />
                {HERO.ctaText}
              </a>
              <a 
                href="#case-studies" 
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto text-white border-white/20 hover:bg-white/5 font-semibold rounded-[6px] flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 outline-none interactive-action"
                )}
              >
                See proof of work
              </a>
            </motion.div>

            {/* Version Metadata */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 pt-6 border-t border-white/10 w-full max-w-sm flex items-center justify-between text-[10px] md:text-xs text-white/60 font-medium tracking-wide uppercase"
            >
              <span>{HERO.version}</span>
              <span>&middot;</span>
              <span>{HERO.metaCount}</span>
            </motion.div>
          </motion.div>

          {/* Hero Visual Asset (Right Column) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <NexusNetworkVisual />
          </motion.div>

        </div>

        {/* Find Your Starting Point Navigation Aid */}
        <div className="mt-16 pt-12 border-t border-white/10 relative z-20">
          <h2 className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/50 mb-6">
            Find Your Starting Point
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STARTING_POINTS.map((pt, idx) => (
              <a
                key={idx}
                href={pt.link}
                className="group border border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 p-5 rounded-[8px] flex flex-col justify-between transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <div>
                  <h3 className="text-xs font-bold text-white mb-2 group-hover:text-[#2E6FAD] transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-[11px] text-white/70 leading-relaxed font-light mb-4">
                    {pt.desc}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-3 mt-2 flex flex-col gap-1">
                  <span className="text-[8px] font-mono text-white/40 uppercase block">
                    Recommended Model
                  </span>
                  <span className="text-[10px] font-semibold text-white/90 group-hover:text-white transition-colors">
                    {pt.model}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <a 
        href="#services-brochure" 
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase group"
      >
        <span>Explore</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce group-hover:translate-y-[2px] transition-transform" />
      </a>

    </section>
  );
}
