import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string, serverFallback = false): boolean {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => (typeof window !== "undefined" ? window.matchMedia(query).matches : serverFallback),
    () => serverFallback
  );
}
