"use client";

import { HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NexusNetworkVisual } from "../visuals/NexusNetworkVisual";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, MessageSquare } from "lucide-react";

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
