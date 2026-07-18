# 008 — Full Motion Regression Review

- **Status**: TODO
- **Commit**: c8f70f9d883c960e9159126fd949da91fb5f53f3
- **Severity**: MEDIUM
- **Category**: Performance
- **Estimated scope**: Entire codebase

## Problem
After implementing multiple separate motion, accessibility, and transition adjustments, regressions might occur (e.g. duplicated ScrollTriggers, unhandled touch behaviors on mobile, console errors, or broken focus flows).

## Target
Execute a complete interactive regression pass to verify visual consistency, keyboard accessibility, and dynamic pausing.

## Steps

### 1. Perform Technical Compiles
Run the production build commands in local shell:
```bash
npm run lint
npm run build
```

### 2. Verify Dynamic Pausing Controls
- Click "Pause Motion" in the desktop Header and mobile Sheet. Verify that the 3D canvas and all pings freeze immediately, and that no page reloads occur.
- Re-enable motion and check that animations resume exactly from their current states without duplicating timelines.

### 3. Verify Accessibility Overrides
- Emulate `prefers-reduced-motion` in Chrome DevTools. Verify that scroll behaviors are instantaneous, and card hover scaling is fully disabled.
- Emulate `prefers-contrast: more` and verify that status markers and boundaries remain clearly visible and high-contrast.
- Emulate `prefers-reduced-transparency: reduce` and verify the SiteHeader background is opaque.

### 4. Feel Check
- Slow playback to 10% in Chrome DevTools Animations inspector. Verify that the mobile Sheet slides out with correct easing (`cubic-bezier(0.32, 0.72, 0, 1)`) and exits cleanly.
- Verify that active buttons scale down (`0.97`) tactilely without layout shifts.
