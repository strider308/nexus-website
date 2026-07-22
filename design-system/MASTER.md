# Nexus Design System: MASTER

This document serves as the absolute single source of truth for the Nexus visual language, design tokens, layout grids, components, and motion guidelines. It implements an anti-slop, high-converting product studio aesthetic.

---

## 1. Core Dials Configuration
Consistent with the visual guidelines for a high-end, bespoke custom software agency:
*   **`DESIGN_VARIANCE: 7`** (Modern asymmetry, bespoke visuals, structured layouts)
*   **`MOTION_INTENSITY: 6`** (Fluid entrance animations, spring-physics orbits, interactive nodes)
*   **`VISUAL_DENSITY: 4`** (Generous breathing room, strong typographic hierarchy, readable line-heights)

---

## 2. Token Architecture
We adopt a three-layer token structure: Primitive → Semantic → Component.

### A. Primitive Tokens (Raw Values)

#### Colors
Raw hex color values representing the branding and individual proof-of-work systems.
```css
/* Core Neutrals */
--color-navy-raw: #1A2B4C;
--color-charcoal-raw: #2C2C2C;
--color-mid-raw: #6B6B6B;
--color-light-raw: #F4F4F2;
--color-border-raw: #E2E2DE;
--color-white-raw: #FFFFFF;
--color-accent-raw: #2E6FAD;

/* Product Specifics (Light Theme) */
--color-c-clinicos: #1A2B4C;
--color-c-aarogya: #5A7F5E;
--color-c-restaurant: #A05C1A;
--color-c-shipwright: #5B4B8A;
--color-c-securescan: #2A7D8A;
--color-c-safedate: #8A2A5A;
--color-c-buildpublic: #2A5A3A;

/* Product Specifics (Dark Theme Overrides) */
--color-c-clinicos-dark: #4A7BC4;
--color-c-aarogya-dark: #6FA876;
--color-c-restaurant-dark: #C87B3A;
--color-c-shipwright-dark: #8B7BC4;
--color-c-securescan-dark: #3A9EAA;
--color-c-safedate-dark: #C44A7A;
--color-c-buildpublic-dark: #4A8A5A;
```

#### Typography
*   **Display Font:** `'DM Serif Display', Georgia, serif` (editorial, high-authority feel)
*   **Sans Font:** `'DM Sans', system-ui, sans-serif` (clean, functional, highly readable)
*   **Mono Font:** `'DM Mono', monospace` (reserved for developer metrics and code references)

#### Spacing & Grid Metrics
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;

--content-max-w: 860px;
--sidebar-w: 272px;
```

---

### B. Semantic Tokens (Purpose Aliases)
Functional mappings that automatically translate across light and dark modes.

| Token | Light Mode | Dark Mode | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `#FFFFFF` | `#141414` | Global page body canvas |
| `--foreground` | `#2C2C2C` | `#E2E2E2` | Body copy, default headings |
| `--primary` | `#1A2B4C` | `#5B8FD4` | Main brand color, primary headers |
| `--accent` | `#2E6FAD` | `#6BAAE8` | Interactive links, focus borders |
| `--muted` | `#6B6B6B` | `#9A9A9A` | Taglines, eyebrows, helper text |
| `--surface` | `#F4F4F2` | `#1E1E1E` | Card backs, inactive tab backgrounds |
| `--border` | `#E2E2DE` | `#2E2E2E` | Dividers, card borders, borders |

---

### C. Component Tokens & Specs

#### Buttons
Tactile feedback: `:active` state uses `scale-[0.98]` or `-translate-y-[1px]` to simulate physical push.

| Property | Primary Button | Secondary Button / Outline | Link Button |
| :--- | :--- | :--- | :--- |
| **Background** | `var(--current-pc)` | `transparent` | `transparent` |
| **Text** | `#FFFFFF` | `var(--current-pc)` | `var(--accent)` |
| **Border** | `none` | `1.5px solid var(--current-pc)` | `none` |
| **Hover** | `opacity: 0.9; translateY(-2px)` | `bg: opacity(4%); translateY(-2px)`| `text-decoration: underline` |
| **Radius** | `6px` | `6px` | `none` |
| **Focus** | `outline-offset-3 border-accent` | `outline-offset-3 border-accent` | `outline-offset-1` |

#### Cards
Used strictly to group related data blocks or structural highlights, avoiding generic list designs.
*   **Border:** `1px solid var(--border)`
*   **Radius:** `8px` (medium) or `12px` (large container cards)
*   **Hover Elevation:** `translate-y-[-3px]`, shadow `0 8px 20px rgba(0,0,0,0.08)`, border colors map to `var(--current-pc)`.

#### Status / State Chips
*   **Success / Available:** bg `#EEF6EE`/`#1A1A1A`, border `#A5D6A7`/`#2E2E2E`, text `#2E7D32`/`#3A8A4A`
*   **Beta / Progress:** bg `#FFF3E0`/`#1A1A1A`, border `#FFCC80`/`#2E2E2E`, text `#7A2E00`/`#E07A20`
*   **Waitlist / Hold:** bg `#F4F4F2`/`#1C1C1C`, border `#E2E2DE`/`#2E2E2E`, text `#6B6B6B`/`#9A9A9A`

---

## 3. Typographic Scale & Rhythm

### Desktop Scale
*   **Hero H1:** `text-6xl` (64px) | `font-family: var(--font-display)` | `tracking-[-2px]`
*   **Section H2:** `text-4xl` (42px) | `font-family: var(--font-display)` | `tracking-[-1px]` | `leading-[1.1]`
*   **Product H2:** `text-4xl` (38px) | `font-family: var(--font-display)` | `tracking-[-1px]` | `leading-[1.1]`
*   **Subsection H3:** `text-2xl` (24px) | `font-weight: 700` | `tracking-[-0.3px]` | `leading-[1.25]`
*   **Body Text:** `text-base` (16px) | `font-family: var(--font-sans)` | `leading-[1.7]` | `max-w-[65ch]`

### Mobile Scale
*   **Hero H1:** `text-3xl` (30px)
*   **Section H2:** `text-2xl` (24px)
*   **Subsection H3:** `text-lg` (18px)

---

## 4. Spacing, Borders, and Rhythm
*   **Section Vertical Gap:** `py-16 md:py-24` (breathes without feeling disconnected).
*   **Grid Gaps:** Default `gap-6` (`24px`) or `gap-8` (`32px`).
*   **Corner Radius Hierarchy:**
    *   `radius-sm` (4px): Inner tags, pills
    *   `radius-md` (6px): Buttons, forms, table headers
    *   `radius-lg` (8px): Standard cards, accordions
    *   `radius-xl` (12px): Section blocks, screen wraps, case study cards
    *   `radius-full` (9999px): State pills, interactive indicators

---

## 5. Motion Principles
Animations are purposeful, subtle, and respect user system preferences.

*   **Default Spring Easing:** `type: "spring", stiffness: 100, damping: 20`
*   **Entrance Reveals:** Sections fade and translate vertically from `y: 16` to `y: 0` on scroll with `duration: 0.6` and `delay: 0.05`.
*   **Staggers:** Sequential items (like cards or list steps) reveal with `staggerChildren` delay offset of `0.06s` per node.
*   **Reduced Motion Override:** When `prefers-reduced-motion` is matched, all layout and opacity shifts translate instantly (`duration: 0s`, `y: 0`, `transition: none`).

---

## 6. Accessibility & Pre-Flight Checks
To ensure a high level of code execution and a11y compliance:
1.  **Contrast Minimums:** Check every colored element to guarantee it passes WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large display headers).
2.  **Keyboard Navigation:** Interactive tabs, drawers, and disclosure accordions must have visible focus rings (`focus-visible:outline-2 focus-visible:outline-accent`) and use correct ARIA attributes (`aria-expanded`, `aria-controls`, `aria-selected`).
3.  **One Action per Intent:** Ensure CTA copy is consistent (e.g. no "Get in Touch" and "Let's Talk" on the same page representing the same endpoint).
4.  **No Text Wrapping in CTAs:** Ensure primary buttons have adequate width limits and clear labels to prevent wrapping on desktop screens.
