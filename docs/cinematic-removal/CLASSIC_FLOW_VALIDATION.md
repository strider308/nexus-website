# CLASSIC USER FLOW VALIDATION

## 1. Classic Flow Audit

| Flow ID | Journey Name | Source | Destination | Status |
|---|---|---|---|---|
| `FLOW-01` | Classic Homepage Render | `/` | Homepage (`Hero`, `Services`, `Proof`, `CaseStudies`, `CTA`) | VERIFIED |
| `FLOW-02` | `/classic` Permanent Redirect | `/classic` | `/` (308 Permanent Redirect) | VERIFIED |
| `FLOW-03` | `/cinematic` Permanent Redirect | `/cinematic` | `/` (308 Permanent Redirect) | VERIFIED |
| `FLOW-04` | Services Discovery | `/` | `#services-brochure` or `/services` | VERIFIED |
| `FLOW-05` | Case Studies Inspection | `/` | `/case-studies` | VERIFIED |
| `FLOW-06` | Consultation Form Submission | `/` / `/demo` | Real `/api/intake` pipeline | VERIFIED |
| `FLOW-07` | Legal Policy Navigation | Footer | `/privacy-policy` & `/terms-of-service` | VERIFIED |
