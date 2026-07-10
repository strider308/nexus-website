"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CINEMATIC_TRANSITIONS_ENABLED,
  PAGE_TRANSITION,
  LEGAL_ROUTES,
} from "@/lib/cinematic/config";

interface PageTransitionShellProps {
  children: ReactNode;
}

/**
 * PageTransitionShell
 *
 * Wraps page content with a route-keyed AnimatePresence so navigating between
 * routes shows a smooth opacity + slight-y transition.
 *
 * When CINEMATIC_TRANSITIONS_ENABLED is false, this component is a transparent
 * pass-through — zero JS overhead, zero visual change.
 *
 * Transition styles:
 *   - Legal pages (/privacy-policy, /terms-of-service): simple fade, no y-shift
 *   - All other pages: fade + 10px y-lift, easeOutExpo
 *
 * Reduced-motion: opacity-only, no y movement, shorter duration.
 *
 * Important:
 *   - Children render immediately — no content is delayed
 *   - AnimatePresence mode="wait" ensures clean enter/exit ordering
 *   - This shell wraps children passed from the root layout, so it works
 *     correctly with Next.js App Router's nested layout architecture
 */
export function PageTransitionShell({ children }: PageTransitionShellProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // When flag is off, be a transparent wrapper
  if (!CINEMATIC_TRANSITIONS_ENABLED) {
    return <>{children}</>;
  }

  const isLegalRoute = LEGAL_ROUTES.includes(pathname);

  const enterDuration = isLegalRoute
    ? PAGE_TRANSITION.legalEnterDuration
    : shouldReduceMotion
    ? 0.18
    : PAGE_TRANSITION.enterDuration;

  const exitDuration = shouldReduceMotion ? 0.12 : PAGE_TRANSITION.exitDuration;

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion || isLegalRoute ? 0 : 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: enterDuration,
        ease: PAGE_TRANSITION.ease as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: {
        duration: exitDuration,
        ease: [0.4, 0, 1, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        // Prevent layout jumps — keep the div in normal flow
        style={{ willChange: "opacity, transform" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
