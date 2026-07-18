# 006 — Tactile Press Feedback

- **Status**: TODO
- **Commit**: c8f70f9d883c960e9159126fd949da91fb5f53f3
- **Severity**: MEDIUM
- **Category**: Physicality & origin
- **Estimated scope**: 3 files

## Problem
Currently, buttons and interactive controls (such as the navigation items and system tabs) trigger state transitions instantly but lack physical, tactile feedback on click. This makes interaction feel flat and static.

## Target
Add tactile press feedback using local Tailwind active utility classes. We explicitly avoid:
- Keyboard focus events (no scaling on tab highlights).
- Text inputs and textarea fields (no layout shifting).
- Scroll-linked controls and elements already animated by GSAP.
- High-frequency navigation link hovers (no translation jitter).

## Steps

### 1. Update `src/components/ui/button.tsx`
For default, primary, secondary, and outline button variants, apply tactile scaling when clicked. Update the base class styles inside `cva`:
```typescript
// before
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ...
)

// after
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,transform,box-shadow] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] active:scale-[0.97] motion-paused:transform-none outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ...
)
```

### 2. Update `src/components/home/ProofSystemNavigator.tsx`
Add explicit press feedback to the index navigation buttons:
```typescript
// before
className={`text-left p-3.5 border transition-all duration-300 outline-none focus:ring-1 focus:ring-[#dedbc8] ${ ... }`}

// after
className={`text-left p-3.5 border transition-[border-color,background-color,color,transform] duration-[var(--motion-duration-control)] ease-[var(--motion-ease-out)] active:scale-[0.985] motion-paused:transform-none outline-none focus:ring-1 focus:ring-[#dedbc8] ${ ... }`}
```

### 3. Maintain Interaction Color Feedback Under Reduced Motion
Ensure that in `src/app/globals.css`, color and opacity feedback is preserved under reduced-motion and motion-paused class contexts:
```css
  @media (prefers-reduced-motion: reduce) {
    * {
      transform: none !important;
      transition: color var(--motion-duration-control) ease, background-color var(--motion-duration-control) ease, border-color var(--motion-duration-control) ease, opacity var(--motion-duration-control) ease !important;
    }
  }
  html.motion-paused * {
    transform: none !important;
    transition: color var(--motion-duration-control) ease, background-color var(--motion-duration-control) ease, border-color var(--motion-duration-control) ease, opacity var(--motion-duration-control) ease !important;
  }
```

## Verification
- Run `npm run lint` and `npm run build` to confirm compiles.
- Click a button. Verify that it scales down slightly on click (`0.97`) and returns smoothly.
- Toggle prefers-reduced-motion. Click the button. Verify it does not scale or translate, but still triggers hover/active background highlights.
