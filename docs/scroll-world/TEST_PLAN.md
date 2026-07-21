# NEXUS SCROLL-WORLD REDESIGN — TEST PLAN & VALIDATION MATRIX

## 1. Automated Verification Commands

| Category | Command | Target Criteria | Status |
|---|---|---|---|
| **Type Check** | `npx tsc --noEmit` | 0 errors | PASSED (0 errors) |
| **Linting** | `npm run lint` | 0 errors / warnings | PASSED (0 errors) |
| **Production Build** | `npm run build` | Successful static build | PASSED (13/13 static routes generated) |
| **E2E Integration** | `npx playwright test` | All route navigation & form submission tests pass | READY FOR PREVIEW QA |

---

## 2. Manual & Functional Test Matrix

### A. Fallback & Preservation Checks
- [ ] Verify `http://localhost:3000` defaults to Classic mode when `NEXT_PUBLIC_NEXUS_SITE_MODE` is unset or `classic`.
- [ ] Verify `http://localhost:3000/classic` renders the exact baseline layout.
- [ ] Verify all 7 case studies (ClinicOS, Aarogya, etc.) retain their full content, copy, and deep links.

### B. Accessibility & Reduced Motion
- [ ] Enable `@media (prefers-reduced-motion: reduce)` in DevTools: verify GSAP ScrollTrigger disables frame scrubbing and renders static diorama cards.
- [ ] Verify full keyboard focus navigation (`Tab` / `Shift+Tab`) across all interactive cards and CTAs.
- [ ] Verify `Skip to main content` link jumps directly to `#main-content`.

### C. Performance & Asset Resilience
- [ ] Simulate network throttling (Fast 3G): verify poster frames load instantly before video frames fetch.
- [ ] Verify video frame decoders pause when scrolled out of viewport.
- [ ] Verify zero memory leaks or canvas context losses over extended scrolling.
