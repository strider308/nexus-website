# NEXUS SCROLL-WORLD REDESIGN — SEO PRESERVATION & STRUCTURED DATA MAP

## 1. Crawlability & Server-Rendering Guarantee

* **Zero Canvas-Only Text**: 100% of website content (headings, subheads, copy, case study breakdowns, services, founder statement, legal pages) is rendered as semantic HTML elements in server components.
* **Metadata Integrity**: `app/layout.tsx` metadata exports (canonical URLs, OpenGraph titles, OpenGraph images, Twitter cards, meta descriptions) remain untouched.
* **JSON-LD Schema**: The full `schema.org/Organization`, `schema.org/Service`, and `schema.org/SoftwareApplication` array for all 7 case studies in `app/layout.tsx` remains 100% intact and validated.

---

## 2. Route & Deep Link Preservation Matrix

| Existing Route | Status | Cinematic Redesign Mapping | Crawlability |
|---|---|---|---|
| `/` | PRESERVED | Dual Engine (`classic` or `cinematic` mode) | 100% Server Rendered HTML |
| `/classic` | NEW PRESERVED ROUTE | Always renders untouched production site | 100% Server Rendered HTML |
| `/case-studies` | PRESERVED | Detailed case studies breakdown page | 100% Server Rendered HTML |
| `/services` | PRESERVED | Detailed service brochure page | 100% Server Rendered HTML |
| `/demo` | PRESERVED | Interactive consultation request intake | 100% Server Rendered HTML |
| `/privacy-policy` | PRESERVED | Legal terms & data handling | 100% Server Rendered HTML |
| `/terms-of-service` | PRESERVED | Terms of service | 100% Server Rendered HTML |
| `/sitemap.xml` | PRESERVED | Standard sitemap generator (`app/sitemap.ts`) | 100% Server Rendered XML |
| `/robots.txt` | PRESERVED | Standard robots config (`app/robots.ts`) | 100% Server Rendered Text |
