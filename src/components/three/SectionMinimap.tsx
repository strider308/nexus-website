"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

const SECTIONS = [
  { id: "cover", label: "HERO" },
  { id: "company-brochure", label: "PROBLEM" },
  { id: "services-brochure", label: "SERVICES" },
  { id: "case-studies", label: "PROOF" },
  { id: "engagement-models", label: "MODELS" },
  { id: "contact", label: "CONTACT" },
];

export function SectionMinimap() {
  const [activeSection, setActiveSection] = useState("cover");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      SECTIONS.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden lg:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-50 select-none bg-[#101010]/85 backdrop-blur-md p-3.5 border border-[#DEDBC8]/15 rounded-[16px] shadow-lg shadow-black/40">
      <div className="text-xs font-mono text-[#DEDBC8]/80 tracking-widest uppercase mb-1 text-center font-bold">
        Navigator
      </div>
      <div className="flex flex-col gap-3">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="group flex items-center justify-end gap-2 text-right outline-none focus-visible:ring-1 focus-visible:ring-[#DEDBC8] focus-visible:ring-offset-1 focus-visible:ring-offset-black rounded-[4px] px-1 relative"
              aria-label={`Scroll to ${sec.label}`}
              aria-current={isActive ? "location" : undefined}
            >
              <span className={cn(
                "text-xs font-mono font-bold tracking-wider uppercase opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 select-none",
                isActive ? "text-[#E1E0CC] opacity-100 translate-x-0" : "text-gray-300 group-hover:text-white"
              )}>
                {sec.label}
              </span>
              <span className="relative w-2 h-2 flex items-center justify-center">
                {isActive && !shouldReduceMotion && (
                  <motion.span
                    layoutId="activeDotPill"
                    className="absolute w-2 h-2 bg-[#DEDBC8] rounded-full shadow-[0_0_8px_rgba(222,219,200,0.8)] z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {isActive && shouldReduceMotion && (
                  <span className="absolute w-2 h-2 bg-[#DEDBC8] rounded-full shadow-[0_0_8px_rgba(222,219,200,0.8)] z-10" />
                )}
                <span className="w-1.5 h-1.5 rounded-full bg-transparent border border-[#DEDBC8]/30 group-hover:border-[#DEDBC8]/50 z-0" />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
