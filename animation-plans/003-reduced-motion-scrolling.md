# 003 — Reduced Motion, Scrolling, Contrast and Transparency Fallbacks

- **Status**: TODO
- **Commit**: c8f70f9d883c960e9159126fd949da91fb5f53f3
- **Severity**: HIGH
- **Category**: Accessibility
- **Estimated scope**: 10 files

## Problem
Explicit programmatic smooth scrolling calls via `scrollIntoView({ behavior: "smooth" })` ignore CSS rules, meaning users with reduced-motion preferences still experience layout movements. The header and mobile sheet components rely on transparency, which can hinder readability for users with visual impairments. Furthermore, the infinite homepage scroll cue (`animate-ping`) adds persistent visual noise, unnecessary ambient movement, and is a possible distraction that is inconsistent with the site's restraint.

## Target
Branch all programmatic scroll actions to respect `shouldReduceMotion`, migrate HTML scroll-behavior definitions to CSS, stop the infinite scroll cue, and configure robust high-contrast/reduced-transparency CSS rules.

## Steps

### 1. Update `src/app/layout.tsx`
Remove inline `scrollBehavior: "smooth"` from `<html>`:
```typescript
// before
style={{ scrollBehavior: "smooth", scrollPaddingTop: "80px" }}
// after
style={{ scrollPaddingTop: "80px" }}
```

### 2. Update `src/app/globals.css`
Inject scrolling configurations and progressive enhancements under `@layer base`:
```css
  html {
    scroll-behavior: smooth;
  }
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto !important;
    }
  }
  html.motion-paused {
    scroll-behavior: auto !important;
  }

  /* High contrast mode progressive overrides */
  @media (prefers-contrast: more) {
    .text-body-muted, .text-card-copy {
      color: #dedbc8 !important; /* Elevate low contrast gray text elements to primary cream */
    }
    .border {
      border-color: rgba(222, 219, 200, 0.4) !important; /* Sharpen element borders */
    }
  }
  @media (forced-colors: active) {
    .border {
      border: 1.5px solid CanvasText !important;
    }
  }

  /* Reduced transparency mode progressive overrides */
  @media (prefers-reduced-transparency: reduce) {
    header, .sheet-overlay-bg {
      background-color: #070707 !important;
      backdrop-filter: none !important;
    }
  }
```

### 3. Update Programmatic Scroll Handlers
For each of the audited files below, read `shouldReduceMotion` using `useMotionPreference` (or `useReducedMotion`) and branch the `scrollIntoView` call:
- `src/app/services/page.tsx:136`
- `src/components/chapters/OpeningChapter.tsx:61`
- `src/components/cinematic/CinematicExperience.tsx:64`
- `src/components/cinematic/NarrativeControls.tsx:26`
- `src/components/home/SevenProofSystems.tsx:167`
- `src/components/work/CaseStudyClient.tsx:75`
- `src/components/work/CaseStudyHero.tsx:54`

Replace with this branch pattern:
```typescript
element.scrollIntoView({
  behavior: shouldReduceMotion ? "auto" : "smooth"
});
```

### 4. Remove Scroll Cue Ambient Loop in `src/components/chapters/OpeningChapter.tsx`
Remove `animate-ping` to eliminate persistent visual noise (Line 108):
```typescript
// before
<div className="w-1.5 h-1.5 bg-[#2a7d8a] rounded-full animate-ping" />
// after
<div className="w-1.5 h-1.5 bg-[#2a7d8a] rounded-full" />
```

## Verification
- Toggle prefers-reduced-motion in DevTools rendering. Verify that clicking page navigation jumps instantly instead of smooth-sliding.
- Verify that the homepage scroll cue dot remains static.
