"use client";

import { useState, useEffect, useMemo } from "react";
import {
  CINEMATIC_TRANSITIONS_ENABLED,
  CINEMATIC_SESSION_KEY,
} from "@/lib/cinematic/config";
import { useIsHydrated, useMediaQuery } from "@/hooks/useClientState";
import { CinematicEntrance } from "./CinematicEntrance";

/**
 * CinematicProvider
 *
 * Decides whether to render the CinematicEntrance overlay by checking:
 *   1. Feature flag (NEXT_PUBLIC_CINEMATIC_TRANSITIONS === "true")
 *   2. prefers-reduced-motion — skips overlay if set
 *   3. sessionStorage — plays once per browser session
 *
 * Uses useSyncExternalStore-backed hooks so no setState runs inside effects.
 * Fails silently if sessionStorage is unavailable (private-browsing, etc.).
 */
export function CinematicProvider() {
  const mounted = useIsHydrated();
  const prefersReduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [done, setDone] = useState(false);

  // Read sessionStorage once, after hydration. useMemo recalculates when
  // `mounted` transitions false → true (exactly once, on first client render).
  const alreadySeen = useMemo(() => {
    if (!mounted) return false;
    try {
      return sessionStorage.getItem(CINEMATIC_SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable — skip entrance safely
      return true;
    }
  }, [mounted]);

  const shouldShow =
    CINEMATIC_TRANSITIONS_ENABLED &&
    mounted &&
    !prefersReduced &&
    !alreadySeen;

  // Block scrolling only while the entrance is active.
  // This effect reads no state synchronously — it only manages a DOM side-effect.
  useEffect(() => {
    if (!shouldShow || done) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [shouldShow, done]);

  function handleComplete() {
    setDone(true);
    try {
      sessionStorage.setItem(CINEMATIC_SESSION_KEY, "1");
    } catch {
      // Fine — entrance already played
    }
  }

  if (!shouldShow || done) return null;

  return <CinematicEntrance onComplete={handleComplete} />;
}
