"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CinematicEntrance() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let seen = "true";
    try {
      if (typeof window !== "undefined") {
        seen = sessionStorage.getItem("nexus_entrance_seen") || "";
      }
    } catch {
      seen = "true"; // skip animation on storage blocker
    }

    if (reducedMotion || seen) {
      const frame = requestAnimationFrame(() => {
        setVisible(false);
      });
      return () => cancelAnimationFrame(frame);
    } else {
      try {
        sessionStorage.setItem("nexus_entrance_seen", "true");
      } catch {}
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 bg-[#070707] z-[999] flex flex-col items-center justify-center pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-sans text-5xl font-bold tracking-tighter text-[#dedbc8]">
              Nexus
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="h-[1px] bg-[#2a7d8a]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default CinematicEntrance;
