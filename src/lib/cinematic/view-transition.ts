/**
 * Progressive-enhancement wrapper for the View Transitions API.
 *
 * Usage:
 *   import { startViewTransition } from "@/lib/cinematic/view-transition";
 *   startViewTransition(() => router.push("/services"));
 *
 * Falls back to a plain callback invocation when:
 *   - The browser doesn't support document.startViewTransition
 *   - The cinematic flag is disabled
 *   - The user prefers-reduced-motion
 */

import { CINEMATIC_TRANSITIONS_ENABLED } from "./config";

export function startViewTransition(callback: () => void): void {
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  if (
    CINEMATIC_TRANSITIONS_ENABLED &&
    !prefersReduced &&
    typeof document !== "undefined" &&
    "startViewTransition" in document
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document as any).startViewTransition(callback);
  } else {
    callback();
  }
}
