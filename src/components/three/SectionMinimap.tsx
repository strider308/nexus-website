"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
    <div className="hidden lg:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-50 select-none bg-background/40 backdrop-blur-md p-3.5 border border-border/40 rounded-[12px] shadow-sm">
      <div className="text-[7px] font-mono text-muted-foreground/60 tracking-widest uppercase mb-1 text-center">
        Navigator
      </div>
      <div className="flex flex-col gap-3">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="group flex items-center justify-end gap-2 text-right outline-none"
              aria-label={`Scroll to ${sec.label}`}
            >
              <span className={cn(
                "text-[9px] font-mono font-bold tracking-wider uppercase opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200",
                isActive ? "text-[#E1E0CC] opacity-100 translate-x-0" : "text-[#cbd5e1] group-hover:text-white"
              )}>
                {sec.label}
              </span>
              <span className={cn(
                "w-1.5 h-1.5 rounded-full border border-border transition-all duration-200",
                isActive ? "bg-primary scale-125 border-primary" : "bg-transparent group-hover:bg-muted-foreground/30"
              )} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
