"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface MotionPreferenceContextType {
  isPaused: boolean;
  isOSReduced: boolean;
  shouldReduceMotion: boolean;
  setPaused: (paused: boolean) => void;
  togglePaused: () => void;
}

export const MotionPreferenceContext = createContext<MotionPreferenceContextType | undefined>(undefined);

export function MotionPreferenceProvider({ children }: { children: React.ReactNode }) {
  const [isPaused, setIsPaused] = useState(false);
  const [isOSReduced, setIsOSReduced] = useState(false);

  // Initialize safely on mount to prevent server-client hydration mismatches
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const saved = localStorage.getItem("nexus_motion_paused");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsPaused(saved === "true");
    } catch {
      // safe fallback
    }

    // Set OS preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsOSReduced(mediaQuery.matches);

    const handleOSChange = (e: MediaQueryListEvent) => {
      setIsOSReduced(e.matches);
    };

    // React to OS prefers-reduced-motion change
    mediaQuery.addEventListener("change", handleOSChange);

    // Sync across browser tabs on storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "nexus_motion_paused") {
        setIsPaused(e.newValue === "true");
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOSChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const shouldReduceMotion = isOSReduced || isPaused;

  // Sync html element class for global CSS transition rules
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (shouldReduceMotion) {
      document.documentElement.classList.add("motion-paused");
    } else {
      document.documentElement.classList.remove("motion-paused");
    }
    return () => {
      document.documentElement.classList.remove("motion-paused");
    };
  }, [shouldReduceMotion]);

  const setPaused = (paused: boolean) => {
    setIsPaused(paused);
    try {
      localStorage.setItem("nexus_motion_paused", String(paused));
      // Notify other listeners inside the current window immediately
      window.dispatchEvent(new CustomEvent("nexus-motion-toggle", { detail: { isMotionPaused: paused } }));
    } catch {
      // safe fallback
    }
  };

  const togglePaused = () => {
    setPaused(!isPaused);
  };

  return (
    <MotionPreferenceContext.Provider
      value={{
        isPaused,
        isOSReduced,
        shouldReduceMotion,
        setPaused,
        togglePaused,
      }}
    >
      {children}
    </MotionPreferenceContext.Provider>
  );
}

export function useMotionPreference() {
  const context = useContext(MotionPreferenceContext);
  if (!context) {
    throw new Error("useMotionPreference must be used within a MotionPreferenceProvider");
  }
  return context;
}
