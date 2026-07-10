/**
 * Cinematic Transitions — Configuration
 *
 * All cinematic entrance and page-transition behaviour is gated behind
 * NEXT_PUBLIC_CINEMATIC_TRANSITIONS=true.
 *
 * Setting the env-var to anything other than "true" (or leaving it unset)
 * leaves the site 100 % unchanged.
 *
 * Rollback options:
 *   A. Set NEXT_PUBLIC_CINEMATIC_TRANSITIONS=false  (immediate, no redeploy needed if using runtime env)
 *   B. git revert <cinematic-commit-sha>
 *   C. git checkout pre-cinematic-transitions
 */

/** Master on/off switch. */
export const CINEMATIC_TRANSITIONS_ENABLED =
  process.env.NEXT_PUBLIC_CINEMATIC_TRANSITIONS === "true";

/**
 * sessionStorage key that tracks whether the entrance overlay has already
 * played in the current browser session. The entrance plays once per session.
 */
export const CINEMATIC_SESSION_KEY = "nexus_cinematic_seen";

/** Durations in milliseconds (used by CinematicEntrance for JS timers). */
export const ENTRANCE_DURATIONS = {
  /** Initial black-frame hold before any content appears. */
  blackHold: 80,
  /** Wordmark fade-in. */
  wordmark: 260,
  /** Horizontal workflow line draw. */
  lineDraw: 340,
  /** Brief label stagger reveal (Inputs → Mapping → System). */
  labels: 280,
  /** Aperture/curtain fade-out before overlay unmounts. */
  exit: 420,
  /** Total sequence; overlay must unmount before this. */
  total: 1380,
} as const;

/** Durations in seconds (used by Motion variants). */
export const ENTRANCE_MOTION = {
  wordmarkDuration: 0.28,
  lineDrawDuration: 0.38,
  labelsDuration: 0.22,
  exitDuration: 0.42,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
} as const;

/** Page-transition durations (seconds). */
export const PAGE_TRANSITION = {
  enterDuration: 0.52,
  exitDuration: 0.24,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  /** Legal pages get a simpler, shorter fade. */
  legalEnterDuration: 0.35,
} as const;

/** When prefers-reduced-motion is set, everything collapses to these values. */
export const REDUCED_MOTION_OVERRIDES = {
  entranceEnabled: false, // skip overlay entirely
  pageTransitionDuration: 0.18,
} as const;

/** Route paths that receive the simple-fade treatment (no y-shift, no wipe). */
export const LEGAL_ROUTES: string[] = ["/privacy-policy", "/terms-of-service"];
