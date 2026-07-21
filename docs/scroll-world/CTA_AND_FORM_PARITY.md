# CTA AND FORM PARITY SPECIFICATION

## 1. Call to Action & Form Pipeline Audit

| CTA ID | Classic Source | Label / Action | Destination | Cinematic Location & Behavior | Backend API Pipeline | Status |
|---|---|---|---|---|---|---|
| `CTA-001` | Hero | "Request Consultation" | `/demo` | Act XII Gateway & Explore Mode Header → Form Modal | Connected (`/api/intake` / `/demo`) | VERIFIED |
| `CTA-002` | Services | "Explore Capability" | Service Detail | Act IV Service Nodes → Deep-Dive Drawer Modal | N/A (Internal Detail View) | VERIFIED |
| `CTA-003` | Case Studies | "View Case Proof" | `/case-studies` | Act VII Case Portals → Full Case Study Drawer | N/A (Internal Detail View) | VERIFIED |
| `CTA-004` | Resources | "Download Whitepaper" | `/resources` | Act IX Resource Observatory → Whitepaper Drawer | N/A (Resource View) | VERIFIED |
| `CTA-005` | Engagement | "Select Engagement Model" | `/demo` | Act VIII Engagement Matrix → Selection Modal | Connected (`/api/intake` / `/demo`) | VERIFIED |
| `CTA-006` | Final CTA | "Begin Project Intake" | `/demo` | Act XII Final Resolution → Direct Form Pipeline | Connected (`/api/intake` / `/demo`) | VERIFIED |

---

## 2. Real Form Pipeline Guarantee

* **Zero Simulated Submissions**: All consultation requests route through verified frontend validation and real API endpoint processing (`/demo`).
* **Complete Form States**: Pending spinner, success confirmation, validation errors, and failure handling supported.
