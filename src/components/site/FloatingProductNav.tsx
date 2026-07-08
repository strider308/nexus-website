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
  { id: "clinicos", initials: "C", label: "ClinicOS", color: "#1A2B4C" },
  { id: "aarogya", initials: "A", label: "Aarogya", color: "#5A7F5E" },
  { id: "restaurantos", initials: "R", label: "RestaurantOS", color: "#A05C1A" },
  { id: "shipwright", initials: "Sh", label: "ShipWright", color: "#5B4B8A" },
  { id: "securescan", initials: "Sc", label: "SecureScan", color: "#2A7D8A" },
  { id: "safedate", initials: "Sd", label: "SafeDate", color: "#8A2A5A" },
  { id: "buildpublic", initials: "Bp", label: "BuildPublic", color: "#2A5A3A" }
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
      rootMargin: "-20% 0px -50% 0px",
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!isVisible) return null;

  return (
    <nav
      id="float-nav"
      aria-label="Jump to product"
      className="fixed bottom-6 right-6 md:right-8 z-40 flex items-center gap-2 bg-[#0C1828]/90 backdrop-blur-md border border-white/10 rounded-full py-1.5 px-3 shadow-lg transition-all duration-300 md:hover:scale-105"
    >
      <span className="text-[9px] font-bold tracking-wider text-white/50 uppercase pl-1.5 pr-1 select-none hidden md:inline">
        Systems
      </span>
      <div className="flex gap-1.5">
        {buttons.map((btn) => {
          const isActive = btn.id === activeId;
          const theme = PRODUCT_THEMES[btn.id];
          return (
            <a
              key={btn.id}
              href={`#${btn.id}`}
              onClick={(e) => handleClick(e, btn.id)}
              aria-label={`Scroll to ${btn.label}`}
              className="relative group w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs text-white transition-all duration-300 hover:scale-115 active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 outline-none cursor-pointer"
              style={{
                backgroundColor: theme.primary,
                border: isActive ? "2px solid white" : "none",
                boxShadow: isActive ? `0 0 12px ${theme.primary}` : "none"
              }}
            >
              {btn.initials}



              {/* Tooltip */}
              <span className="absolute bottom-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 bg-[#0C1828] border border-white/10 text-white font-sans text-[10px] font-semibold px-2 py-1 rounded-[4px] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                {btn.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
