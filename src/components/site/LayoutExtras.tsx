"use client";

import { useEffect, useState } from "react";
import { PRODUCT_THEMES } from "@/lib/design-tokens";
import { motion, useScroll, useSpring } from "motion/react";

export function LayoutExtras() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [activeProductColor, setActiveProductColor] = useState("#DEDBC8");

  // Framer Motion scroll progress (compositor thread tracking, 0 re-renders)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 1. Mouse Spotlight Tracker (CSS-driven, 0 re-renders, with safe cleanup)
  useEffect(() => {
    const hasPointer = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const handleMouseMove = (e: MouseEvent) => {
      if (hasPointer) {
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    if (hasPointer) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      if (hasPointer) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // 2. Cookie Consent Banner check (isolated, guarded local storage access and timer cleanup)
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    try {
      const consent = localStorage.getItem("nexus_cookie_pref");
      if (!consent) {
        timer = setTimeout(() => setShowCookieBanner(true), 1000);
      }
    } catch (e) {
      console.warn("Storage access failed", e);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  // 3. Track Active Color based on viewport scroll sections (Observer cleanup)
  useEffect(() => {
    const handleColorIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (PRODUCT_THEMES[id]) {
            setActiveProductColor(PRODUCT_THEMES[id].primary);
          } else if (id === "cover" || id === "services-brochure" || id === "company-brochure" || id === "company-founder") {
            setActiveProductColor("#DEDBC8"); // Reset to main cream
          }
        }
      });
    };

    const colorObserver = new IntersectionObserver(handleColorIntersection, {
      root: null,
      rootMargin: "-10% 0px -50% 0px",
      threshold: 0,
    });

    const sections = ["cover", "services-brochure", "company-brochure", "company-founder", "clinicos", "aarogya", "restaurantos", "shipwright", "securescan", "safedate", "buildpublic"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) colorObserver.observe(el);
    });

    return () => colorObserver.disconnect();
  }, []);

  const handleCookieChoice = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem("nexus_cookie_pref", choice);
    } catch {
    }
    setShowCookieBanner(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left pointer-events-none"
        style={{ 
          scaleX,
          backgroundColor: activeProductColor 
        }}
        aria-hidden="true"
      />

      {/* Mouse Spotlight overlay */}
      <div
        id="cursor-spotlight"
        className="fixed inset-0 pointer-events-none z-30 opacity-[0.06] hidden md:block"
        style={{
          background: `radial-gradient(circle 480px at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--accent), transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div 
          role="region" 
          aria-label="Cookie consent" 
          aria-live="polite"
          className="fixed bottom-0 left-0 right-0 z-[110] bg-[#101010] text-[#E1E0CC] py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#DEDBC8]/10 shadow-lg animate-slide-up"
        >
          <p className="text-xs md:text-sm text-gray-300 max-w-3xl leading-relaxed">
            We use cookies to analyze site traffic and enhance layout. Review our{" "}
            <a href="/privacy-policy" className="underline hover:text-white">
              Privacy Policy
            </a>{" "}
            for details.
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => handleCookieChoice("declined")}
              className="text-xs font-mono font-bold px-4 py-2 border border-[#DEDBC8]/20 rounded-full hover:bg-[#DEDBC8]/10 hover:text-white transition-colors cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={() => handleCookieChoice("accepted")}
              className="text-xs font-mono font-bold px-4 py-2 bg-[#DEDBC8] text-black rounded-full hover:opacity-95 transition-all cursor-pointer"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
