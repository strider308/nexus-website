"use client";

import { useEffect, useState } from "react";
import {
  CINEMATIC_TRANSITIONS_ENABLED,
  CINEMATIC_SESSION_KEY,
} from "@/lib/cinematic/config";
import { CinematicEntrance } from "./CinematicEntrance";

/**
 * CinematicProvider
 *
 * Decides whether to render the CinematicEntrance overlay by checking:
 *   1. Feature flag (NEXT_PUBLIC_CINEMATIC_TRANSITIONS === "true")
 *   2. prefers-reduced-motion — skips overlay if set
 *   3. sessionStorage — plays once per browser session
 *
 * Fails silently if sessionStorage is unavailable (private-browsing, etc.).
 * Once the entrance completes it marks the session so subsequent navigations
 * within the same tab won't re-play the overlay.
 */
export function CinematicProvider() {
  const [shouldShow, setShouldShow] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!CINEMATIC_TRANSITIONS_ENABLED) return;

    // Skip if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Skip if already played this session
    try {
      if (sessionStorage.getItem(CINEMATIC_SESSION_KEY) === "1") return;
    } catch {
      // sessionStorage unavailable — safe to skip entrance
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShouldShow(true);
    // Prevent scrolling during entrance
    document.documentElement.style.overflow = "hidden";
  }, []);

  function handleComplete() {
    setDone(true);
    // Restore scroll
    document.documentElement.style.overflow = "";
    // Mark session so it won't replay
    try {
      sessionStorage.setItem(CINEMATIC_SESSION_KEY, "1");
    } catch {
      // Fine — entrance already played
    }
  }

  if (!shouldShow || done) return null;

  return <CinematicEntrance onComplete={handleComplete} />;
}
