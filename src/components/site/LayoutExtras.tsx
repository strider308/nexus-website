"use client";

import { useEffect, useState } from "react";
import { PRODUCT_THEMES } from "@/lib/design-tokens";
import { motion, useScroll, useSpring } from "motion/react";

export function LayoutExtras() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [activeProductColor, setActiveProductColor] = useState("#1A2B4C");

  // Framer Motion scroll progress (compositor thread tracking, 0 re-renders)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // 1. Mouse Spotlight Tracker (CSS-driven, 0 re-renders)
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

    // 2. Cookie Consent Banner check
    try {
      const consent = localStorage.getItem("nexus_cookie_pref");
      if (!consent) {
        const timer = setTimeout(() => setShowCookieBanner(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.warn("Storage access failed", e);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 3. Track Active Color based on viewport scroll sections
  useEffect(() => {
    const handleColorIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (PRODUCT_THEMES[id]) {
            setActiveProductColor(PRODUCT_THEMES[id].primary);
          } else if (id === "cover" || id === "services-brochure" || id === "company-brochure") {
            setActiveProductColor("#1A2B4C"); // Reset to main navy
          }
        }
      });
    };

    const colorObserver = new IntersectionObserver(handleColorIntersection, {
      root: null,
      rootMargin: "-10% 0px -50% 0px",
      threshold: 0,
    });

    const sections = ["cover", "services-brochure", "company-brochure", "clinicos", "aarogya", "restaurantos", "shipwright", "securescan", "safedate", "buildpublic"];
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
          className="fixed bottom-0 left-0 right-0 z-[110] bg-[#0C1828] text-white py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 shadow-lg animate-slide-up"
        >
          <p className="text-xs md:text-sm text-white/80 max-w-3xl leading-relaxed">
            We use analytics cookies to understand how this site is used and improve it. See our{" "}
            <a href="/privacy-policy" className="underline hover:text-white">
              Privacy Policy
            </a>{" "}
            for details.
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => handleCookieChoice("declined")}
              className="text-xs font-semibold px-4 py-2 border border-white/20 rounded-[6px] hover:bg-white/5 transition-colors cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={() => handleCookieChoice("accepted")}
              className="text-xs font-bold px-4 py-2 bg-white text-[#0C1828] rounded-[6px] hover:bg-white/90 transition-colors cursor-pointer"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
