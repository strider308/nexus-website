/**
 * usePrefersReducedMotion — thin wrapper over useMediaQuery.
 * Kept for backwards compatibility with SystemCard3D.tsx.
 * New code should use useReducedMotion() from motion/react instead.
 */

import { useMediaQuery } from "./useClientState";

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
