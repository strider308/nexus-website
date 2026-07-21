# NEXUS SCROLL-WORLD REDESIGN — PROJECT CONSTRAINTS & AUDIT

## 1. Primary Directives & Rule Enforcement

### A. Next.js 16 breaking API conventions (`AGENTS.md`)
* **Strict Notice**: Next.js 16 (`16.2.10`) has breaking API changes compared to Next 14/15.
* **Server/Client Boundaries**: Async request APIs (e.g. `params`, `searchParams`, `cookies()`, `headers()`) are Promises in Next.js 16.
* **Route Handlers**: Response signatures and dynamic config declarations follow Next.js 16 standards.
* **Reference Docs**: Consult `node_modules/next/dist/docs/` prior to adding new route handlers or metadata functions.

### B. Core Stack Constraints (`package.json`)
* **Framework**: Next.js 16.2.10 (App Router, static export capability)
* **React**: React 19.2.4
* **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`), `@base-ui/react`, `shadcn` components
* **Animation & Motion**:
  * **GSAP**: `gsap` (3.15.0) + `@gsap/react` (2.1.2) for scroll scrubbing and timeline orchestration
  * **Framer / Motion**: `motion` (12.42.2) for UI state transitions, dialogs, micro-interactions
  * **3D / Canvas**: `three` (0.185.1), `@react-three/fiber` (9.6.1), `@react-three/drei` (10.7.7) for auxiliary 3D elements
* **Linting / Formatting**: `eslint` 9 (`eslint-config-next` 16.2.10), TypeScript 5

---

## 2. Mandatory Preservation Directives

1. **Zero Data Loss**: No existing product claims, case studies (ClinicOS, Aarogya, RestaurantOS, ShipWright, SecureScan, SafeDate, BuildPublic), services, pricing, founder background, or FAQs may be removed.
2. **SEO & Crawlability**: Structured JSON-LD schema (`app/layout.tsx`), OpenGraph tags, metadata, canonical URLs, sitemap (`app/sitemap.ts`), and robots (`app/robots.ts`) must remain server-rendered and crawlable.
3. **Accessibility**: Reduced-motion media query (`@media (prefers-reduced-motion: reduce)`), manual toggle, semantic HTML tags, ARIA landmarks, and keyboard focus states are non-negotiable.
4. **Credit & Secret Guardrails**: No paid AI API generation (Higgsfield, OpenAI, Midjourney) may be executed without explicit user token authorization. Placeholder media pipelines must be used during development.
