"use client";

import { useEffect, useState } from "react";
import { PRODUCT_THEMES } from "@/lib/design-tokens";

interface FloatBtn {
  id: string;
  initials: string;
  label: string;
  color: string;
}

const buttons: FloatBtn[] = [
  { id: "clinicos", initials: "C", label: "ClinicOS", color: "#4A7BC4" },
  { id: "aarogya", initials: "A", label: "Aarogya", color: "#6FA876" },
  { id: "restaurantos", initials: "R", label: "RestaurantOS", color: "#C87B3A" },
  { id: "shipwright", initials: "Sh", label: "ShipWright", color: "#8B7BC4" },
  { id: "securescan", initials: "Sc", label: "SecureScan", color: "#3A9EAA" },
  { id: "safedate", initials: "Sd", label: "SafeDate", color: "#C44A7A" },
  { id: "buildpublic", initials: "Bp", label: "BuildPublic", color: "#4A8A5A" }
];

export function FloatingProductNav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        Systems
      </span>
      <div className="flex gap-1.5">
        {buttons.map((btn) => {
          const isActive = btn.id === activeId;
          const theme = PRODUCT_THEMES[btn.id] || { primary: btn.color };
          return (
            <a
              key={btn.id}
              href={`#${btn.id}`}
              onClick={(e) => handleClick(e, btn.id)}
              aria-label={`Scroll to ${btn.label}`}
              aria-current={isActive ? "true" : undefined}
              className="relative group w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs text-white transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#DEDBC8] focus-visible:ring-offset-2 focus-visible:ring-offset-black outline-none cursor-pointer"
              style={{
                backgroundColor: theme.primary,
                border: isActive ? "2px solid #E1E0CC" : "none",
                boxShadow: isActive ? `0 0 10px ${theme.primary}` : "none"
              }}
            >
              {btn.initials}

              {/* Tooltip */}
              <span className="absolute bottom-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 bg-black border border-[#DEDBC8]/15 text-[#E1E0CC] font-mono text-[10px] font-bold px-2 py-1 rounded-[4px] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md">
                {btn.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
