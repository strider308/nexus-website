# Nexus UI/UX remediation baseline

## Git and safety baseline

- Branch before work: `feature/nexus-scroll-world-redesign`
- Starting commit: `07147c68767fd6b96e1346e38c8644732fd1c9fc`
- Working tree: modified `src/components/site/FloatingProductNav.tsx` and `src/components/three/ThreeCanvasShell.tsx`; untracked `.codegraph/`.
- Remediation branch: `fix/nexus-ruthless-ui-ux-remediation`.
- The two existing local performance fixes were uncommitted. They were preserved until the entire canvas and floating-nav systems were safely removed as unused.
- `.codegraph/` is local and untracked.

## Original experience

- Homepage sequence: hero, proof strip, problem, services, proof ledger, rationale, case study explorer, engagement models, resources, founder, trust limits, final CTA.
- Navigation systems: header, minimap, floating product dock, and global scroll progress.
- 3D usage: hero system scene, proof orbit, demo command console, plus pointer-tilt cards.
- Placeholder identity: default social URLs, default contact inbox, unverified canonical URL, and those values in JSON-LD.
- Visual debt: raw colors, noise overlays, repeated rounded cards, excessive uppercase labels, `h-screen`, 640px mockup minimum width, focusable non-interactive regions, and a cookie banner despite no tracker.

## Baseline validation inherited from owner work

The owner had already run lint, TypeScript, production build, and browser smoke checks successfully after the two performance fixes. Final validation is recorded separately in the remediation report.
