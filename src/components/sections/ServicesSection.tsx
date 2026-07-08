"use client";

import { SERVICES, HERO } from "@/lib/content/nexus";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

const PROCESS_STEPS = [
  { step: "01", title: "Understand", desc: "Analyze raw operational realities and role dynamics" },
  { step: "02", title: "Map", desc: "Define precise workflow paths and handoff points" },
  { step: "03", title: "Build", desc: "Engineer custom, secure software for the mapped flow" },
  { step: "04", title: "Validate", desc: "Run controlled pilot deployments with real users" },
  { step: "05", title: "Launch", desc: "Execute production cutover and hand off code" },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  // Calculate filled path translation metrics at component top-level
  const desktopPathFill = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const mobilePathFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <AnimatedSection id="services-brochure" className="w-full py-16 md:py-24 border-b border-border bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
            {SERVICES.eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-6">
            {SERVICES.title}
          </h2>
          <p className="text-lg font-light text-muted-foreground leading-relaxed mb-6">
            {SERVICES.sub}
          </p>
          <p className="text-base text-foreground/80 leading-relaxed font-light">
            {SERVICES.intro}
          </p>
        </div>

        {/* Who We Work With */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES.workWith.map((group, idx) => (
            <div key={idx} className="border border-border bg-background rounded-[8px] p-8 shadow-sm">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-6">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-3 text-sm text-foreground/85 font-light leading-relaxed">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#2E6FAD] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Engagement Process - Desktop View */}
        <div className="hidden md:block mb-20 relative">
          <h3 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-8">
            Our Engagement Process
          </h3>
          
          <div ref={containerRef} className="relative py-12 px-6 border border-border/80 bg-background/60 backdrop-blur-sm rounded-[12px] shadow-sm overflow-hidden">
            {/* Background path line */}
            <div className="absolute left-[10%] right-[10%] top-[60px] h-[3px] bg-border/60 rounded-full z-0" />
            
            {/* Active filled path line */}
            <motion.div 
              className="absolute left-[10%] top-[60px] h-[3px] bg-[#2E6FAD] rounded-full origin-left z-10"
              style={{ width: shouldReduceMotion ? "80%" : desktopPathFill }}
            />

            <div className="relative grid grid-cols-5 gap-6 z-20">
              {PROCESS_STEPS.map((step, idx) => {
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="relative mb-6 flex items-center justify-center">
                      <div 
                        className="w-7 h-7 rounded-full bg-background border-2 border-border flex items-center justify-center transition-all duration-500 group-hover:border-[#2E6FAD]"
                        style={{
                          borderColor: shouldReduceMotion ? "#2E6FAD" : undefined
                        }}
                      />
                      <div className="absolute w-3.5 h-3.5 rounded-full bg-[#2E6FAD]" />
                    </div>

                    <span className="text-[10px] font-mono font-bold text-muted-foreground group-hover:text-[#2E6FAD] transition-colors block mb-1">
                      {step.step}
                    </span>
                    <h4 className="font-display text-sm font-bold text-primary mb-2">
                      {step.title}
                    </h4>
                    <p className="text-[11px] leading-normal text-muted-foreground px-2 font-light">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Engagement Process - Mobile View */}
        <div className="block md:hidden mb-16 relative px-2">
          <h3 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-6">
            Our Engagement Process
          </h3>
          
          <div className="relative pl-8 py-2">
            {/* Background vertical line */}
            <div className="absolute left-[15px] top-6 bottom-6 w-[3px] bg-border/60 rounded-full z-0" />
            
            {/* Active filled vertical line */}
            <motion.div 
              className="absolute left-[15px] top-6 w-[3px] bg-[#2E6FAD] rounded-full origin-top z-10"
              style={{ height: shouldReduceMotion ? "100%" : mobilePathFill }}
            />

            <div className="flex flex-col gap-10">
              {PROCESS_STEPS.map((step, idx) => {
                return (
                  <div key={idx} className="relative flex items-start gap-4 group">
                    <div className="absolute left-[-25px] top-1 flex items-center justify-center z-20">
                      <div 
                        className="w-5 h-5 rounded-full bg-background border-2 border-border flex items-center justify-center transition-colors duration-500"
                        style={{
                          borderColor: shouldReduceMotion ? "#2E6FAD" : undefined
                        }}
                      />
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-[#2E6FAD]" />
                    </div>

                    <div>
                      <span className="text-[9px] font-mono font-bold text-muted-foreground block mb-0.5">
                        STEP {step.step}
                      </span>
                      <h4 className="font-display text-sm font-bold text-primary mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs font-light text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Services Grid (Replaces the dry HTML table) */}
        <div className="mb-16">
          <h3 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase mb-6">
            Core Engagement Services
          </h3>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.items.map((service, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full border border-border bg-background hover:border-[#1A2B4C]/40 rounded-[8px] p-6 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <h4 className="font-display text-lg font-bold text-primary group-hover:text-[#2E6FAD] transition-colors mb-3">
                      {service.name}
                    </h4>
                    <p className="text-sm text-foreground/75 leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="border-t border-border/60 pt-4 flex flex-col gap-1">
                    <span className="text-[10px] font-mono font-bold text-muted-foreground tracking-wider uppercase">
                      BEST FIT FOR
                    </span>
                    <span className="text-xs text-foreground/80 font-medium">
                      {service.bestFit}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Final call block */}
        <div className="border border-border bg-background rounded-[8px] p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
            {SERVICES.closingTitle}
          </h3>
          <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            {SERVICES.closingText}
          </p>
          <a
            href={HERO.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-[#1A2B4C] hover:bg-[#1A2B4C]/90 text-white font-semibold rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#1A2B4C]/50 focus-visible:ring-offset-2 outline-none interactive-action"
            )}
          >
            <span>Start a conversation</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

      </div>
    </AnimatedSection>
  );
}
