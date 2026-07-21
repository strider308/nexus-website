# NEXUS SCROLL-WORLD REDESIGN — SITE MODE SWITCHING & PREVIEW GUIDE

## 1. Environment Variable Control

The active website engine is determined by the `NEXT_PUBLIC_NEXUS_SITE_MODE` environment variable.

| Variable Value | Active Experience | Description |
|---|---|---|
| `classic` (Default) | Production Legacy Site | Standard static site, zero cinematic overhead, 100% stable baseline. |
| `cinematic` | Cinematic Scroll-World | GSAP ScrollTrigger diorama fly-through experience. |

---

## 2. Local Development Execution

### A. Run Classic Mode (Default Baseline)
```bash
# PowerShell
$env:NEXT_PUBLIC_NEXUS_SITE_MODE="classic"
npm run dev

# Bash / Zsh
NEXT_PUBLIC_NEXUS_SITE_MODE=classic npm run dev
```

### B. Run Cinematic Mode Preview
```bash
# PowerShell
$env:NEXT_PUBLIC_NEXUS_SITE_MODE="cinematic"
npm run dev

# Bash / Zsh
NEXT_PUBLIC_NEXUS_SITE_MODE=cinematic npm run dev
```

---

## 3. Runtime & Route Overrides

Without modifying environment variables, developers and reviewers can preview or switch modes using URL parameters or dedicated routes:

* **Preview Cinematic Mode**: `http://localhost:3000/?mode=cinematic`
* **Force Classic Mode**: `http://localhost:3000/?mode=classic`
* **Direct Classic Route**: `http://localhost:3000/classic` (Always renders the untouched legacy website)

---

## 4. Emergency Kill-Switch & Rollback Procedure

If cinematic mode experiences any client failure or performance issue:
1. Change deployment environment variable in Vercel / Cloudflare:
   `NEXT_PUBLIC_NEXUS_SITE_MODE=classic`
2. Redeploy preview branch.
3. The site will immediately fall back to the untouched Classic engine without requiring code changes.
