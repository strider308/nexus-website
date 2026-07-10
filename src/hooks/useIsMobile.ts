/**
 * useIsMobile — thin wrapper around useMediaQuery for convenience.
 * Uses useSyncExternalStore internally — no setState inside effects.
 */

import { useMediaQuery } from "./useClientState";

export function useIsMobile(breakpoint = 768) {
  return useMediaQuery(`(max-width: ${breakpoint}px)`);
}
