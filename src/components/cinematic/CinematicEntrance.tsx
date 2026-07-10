"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ENTRANCE_MOTION, ENTRANCE_DURATIONS } from "@/lib/cinematic/config";

/**
 * CinematicEntrance
 *
 * Fullscreen overlay that plays once per session on first load.
 * Sequence:
 *   1. Black frame (brief hold)
 *   2. "Nexus" wordmark fades in
 *   3. Horizontal workflow line draws left → right
 *   4. Three labels stagger in: Inputs · Mapping · System
 *   5. Entire overlay fades out and unmounts
 *
 * Accessibility:
 *   - aria-hidden="true" — never in the accessibility tree
 *   - role="presentation"
 *   - pointer-events-none once exit begins
 *   - Skipped entirely for prefers-reduced-motion (parent handles this)
 *   - Never traps focus; real h1 is always in the DOM below
 *
 * Performance:
 *   - Only transform + opacity — no layout animations
 *   - No canvas / WebGL
 *   - All timers cleaned up on unmount
 */

interface CinematicEntranceProps {
  onComplete: () => void;
}

const EASE = ENTRANCE_MOTION.ease;

const LABELS = ["Inputs", "Mapping", "System"] as const;

export function CinematicEntrance({ onComplete }: CinematicEntranceProps) {
  const [phase, setPhase] = useState<
    "hold" | "wordmark" | "line" | "labels" | "exit"
  >("hold");
  const [exiting, setExiting] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const add = (fn: () => void, delay: number) => {
      const t = setTimeout(fn, delay);
      timers.current.push(t);
    };

    add(() => setPhase("wordmark"), ENTRANCE_DURATIONS.blackHold);
    add(
      () => setPhase("line"),
      ENTRANCE_DURATIONS.blackHold + ENTRANCE_DURATIONS.wordmark
    );
    add(
      () => setPhase("labels"),
      ENTRANCE_DURATIONS.blackHold +
        ENTRANCE_DURATIONS.wordmark +
        ENTRANCE_DURATIONS.lineDraw
    );
    add(
      () => {
        setPhase("exit");
        setExiting(true);
      },
      ENTRANCE_DURATIONS.blackHold +
        ENTRANCE_DURATIONS.wordmark +
        ENTRANCE_DURATIONS.lineDraw +
        ENTRANCE_DURATIONS.labels
    );
    add(
      () => onComplete(),
      ENTRANCE_DURATIONS.blackHold +
        ENTRANCE_DURATIONS.wordmark +
        ENTRANCE_DURATIONS.lineDraw +
        ENTRANCE_DURATIONS.labels +
        ENTRANCE_DURATIONS.exit
    );

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="cinematic-entrance"
          aria-hidden="true"
          role="presentation"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: ENTRANCE_MOTION.exitDuration, ease: EASE } }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center select-none"
          style={{ pointerEvents: exiting ? "none" : "auto" }}
        >
          {/* ── Wordmark ── */}
          <AnimatePresence>
            {(phase === "wordmark" || phase === "line" || phase === "labels" || phase === "exit") && (
              <motion.div
                key="wordmark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: ENTRANCE_MOTION.wordmarkDuration, ease: EASE } }}
                className="absolute flex flex-col items-center gap-3"
              >
                {/* Brand mark */}
                <span
                  className="font-display text-3xl md:text-4xl font-medium tracking-[-0.06em] text-[#E1E0CC]"
                  style={{ letterSpacing: "-0.06em" }}
                >
                  Nexus<span className="text-[#DEDBC8] font-light">*</span>
                </span>

                {/* ── Workflow line ── */}
                {(phase === "line" || phase === "labels" || phase === "exit") && (
                  <div className="relative w-[280px] md:w-[380px] h-px mt-4" aria-hidden="true">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: 1,
                        transition: {
                          duration: ENTRANCE_MOTION.lineDrawDuration,
                          ease: EASE,
                        },
                      }}
                      style={{ transformOrigin: "left center" }}
                      className="absolute inset-0 bg-[#DEDBC8]/40"
                    />
                    {/* End dot */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: ENTRANCE_MOTION.lineDrawDuration * 0.85,
                          duration: 0.12,
                        },
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#DEDBC8]"
                    />
                  </div>
                )}

                {/* ── Labels ── */}
                {(phase === "labels" || phase === "exit") && (
                  <div className="flex items-center gap-6 mt-2" aria-hidden="true">
                    {LABELS.map((label, i) => (
                      <motion.span
                        key={label}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: i * 0.07,
                            duration: ENTRANCE_MOTION.labelsDuration,
                            ease: EASE,
                          },
                        }}
                        className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#DEDBC8]/60"
                      >
                        {label}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
