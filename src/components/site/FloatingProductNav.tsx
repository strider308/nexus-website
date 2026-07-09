"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface FloatBtn {
  id: string;
  initials: string;
  label: string;
  color: string;
}

const buttons: FloatBtn[] = [
  { id: "company-brochure", initials: "Co", label: "Company", color: "#E1E0CC" },
  { id: "services-brochure", initials: "Se", label: "Services", color: "#DEDBC8" },
  { id: "case-studies", initials: "Pr", label: "Proof", color: "#E1E0CC" },
  { id: "engagement-models", initials: "Mo", label: "Models", color: "#DEDBC8" },
  { id: "resources-preview", initials: "Re", label: "Resources", color: "#E1E0CC" },
  { id: "contact", initials: "Ct", label: "Contact", color: "#DEDBC8" }
];

export function FloatingProductNav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScrollVisibility = () => {
      // Show floating navigation only when scrolled past hero
      const heroHeight = document.getElementById("cover")?.offsetHeight || 600;
      setIsVisible(window.scrollY > heroHeight - 120);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setActiveId(e.target.id);
        }
      });
    };

    window.addEventListener("scroll", handleScrollVisibility, { passive: true });
    handleScrollVisibility();

    const obs = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-25% 0px -45% 0px",
      threshold: 0
    });

    buttons.forEach((b) => {
      const el = document.getElementById(b.id);
      if (el) obs.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
      obs.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      id="float-nav"
      aria-label="Jump to product"
      className="fixed bottom-6 right-6 md:right-8 z-40 hidden md:flex items-center gap-2 bg-[#101010]/95 backdrop-blur-md border border-[#DEDBC8]/15 rounded-full py-1.5 px-3 shadow-lg shadow-black/80 transition-all duration-300 md:hover:scale-105"
    >
      <span className="text-[10px] font-mono font-bold tracking-wider text-[#DEDBC8]/60 uppercase pl-1.5 pr-1 select-none">
        Sections
      </span>
      <div className="flex gap-1.5">
        {buttons.map((btn) => {
          const isActive = btn.id === activeId;
          return (
            <a
              key={btn.id}
              href={`#${btn.id}`}
              onClick={(e) => handleClick(e, btn.id)}
              aria-label={`Scroll to ${btn.label}`}
              aria-current={isActive ? "location" : undefined}
              className={`relative group w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-[10px] transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#DEDBC8] focus-visible:ring-offset-2 focus-visible:ring-offset-black outline-none border cursor-pointer select-none ${
                isActive 
                  ? "border-[#DEDBC8]/10 text-black shadow-[0_0_12px_rgba(222,219,200,0.15)]" 
                  : "bg-black/60 text-[#DEDBC8]/60 border-[#DEDBC8]/10 hover:text-[#DEDBC8] hover:border-[#DEDBC8]/30"
              }`}
            >
              {isActive && !shouldReduceMotion && (
                <motion.span
                  layoutId="activeFloatPill"
                  className="absolute inset-0 bg-[#DEDBC8] rounded-full z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {isActive && shouldReduceMotion && (
                <span className="absolute inset-0 bg-[#DEDBC8] rounded-full z-0" />
              )}
              
              <span className="relative z-10">{btn.initials}</span>

              {/* Tooltip */}
              <span className="absolute bottom-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 bg-black border border-[#DEDBC8]/15 text-[#E1E0CC] font-mono text-[10px] font-bold px-2 py-1 rounded-[4px] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md z-30">
                {btn.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
