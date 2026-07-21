# SCROLL PERFORMANCE & SMOOTHNESS AUDIT

## 1. Root Causes of Previous Unsmooth Scroll

1. **Continuous React State Updates on Scroll Frames**:
   * **Failure Pattern**: Previously, `onUpdate` handlers in GSAP ScrollTrigger called `setScrollProgress(self.progress)`, forcing the entire React component tree to re-render on every scroll frame (60–120Hz).
   * **Fix**: **Eliminated `setScrollProgress` completely**. GSAP timelines now manipulate DOM node `transform`, `opacity`, and SVG `strokeDashoffset` properties directly via React `ref` references without triggering React component re-renders.

2. **Single Oversized 700vh Global Pinned Container**:
   * **Failure Pattern**: Pinning one massive viewport across 700vh caused layout thrashing, fragile viewport height recalculations on mobile toolbars (`dvh`/`svh`), and abrupt scene component unmounting.
   * **Fix**: Replaced single global pin with **Scoped Chapter Pinning**. Chapters 1–4 are scoped into dedicated pinned sections with natural scroll transitions in between.

3. **CSS Transitions Fighting GSAP Transforms**:
   * **Failure Pattern**: CSS `transition-all duration-300` rules on animated elements fought against GSAP's high-frequency scrub interpolations, creating micro-stuttering and input lag.
   * **Fix**: Removed all CSS transition utilities from GSAP-controlled elements.

4. **Lack of Hardware-Accelerated Property Scoping**:
   * **Failure Pattern**: Animating layout properties (`width`, `height`, `top`) caused repeated layout/reflow calculations.
   * **Fix**: Restricted animations strictly to composite-only properties: `transform` (`translate3d`, `scale`, `rotateX`, `rotateY`) and `opacity`.

---

## 2. Verified Architectural Smoothness Guarantee

* **Direct Ref Manipulation**: 0% React re-render overhead during active scrolling.
* **Native Browser Scrolling**: Uses native hardware-accelerated momentum scrolling without intercepting touch or wheel events.
* **Responsive MatchMedia**: Uses `gsap.matchMedia()` for seamless `@media (prefers-reduced-motion: reduce)` accessibility and mobile viewport adjustments.
