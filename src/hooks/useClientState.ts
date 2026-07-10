/**
 * useClientState — lint-clean client-only state hooks
 *
 * Uses useSyncExternalStore instead of setState-inside-useEffect.
 * Both hooks return stable, SSR-safe values with no cascading renders.
 */

import { useSyncExternalStore } from "react";

// ── useIsHydrated ────────────────────────────────────────────────────────────
// Returns false on the server and on the first SSR pass, true once the
// component has mounted in the browser. Safe to use as an SSR guard.

function emptySubscribe() {
  return () => {};
}

export function useIsHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,  // client snapshot — always true once hydrated
    () => false  // server snapshot
  );
}

// ── useMediaQuery ────────────────────────────────────────────────────────────
// Subscribes to a CSS media query and returns a boolean that updates
// whenever the query result changes. No effects, no setState.

export function useMediaQuery(
  query: string,
  serverFallback = false
): boolean {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    // client snapshot — read live from matchMedia
    () =>
      typeof window !== "undefined"
        ? window.matchMedia(query).matches
        : serverFallback,
    // server snapshot
    () => serverFallback
  );
}
