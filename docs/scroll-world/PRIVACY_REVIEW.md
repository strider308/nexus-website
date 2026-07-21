# NEXUS SCROLL-WORLD REDESIGN — PRIVACY REVIEW & DATA MINIMIZATION

## 1. Privacy First Directives

1. **No Invasive Fingerprinting**: Device capabilities are inspected only via standard web APIs (`navigator.connection.saveData`, `navigator.deviceMemory`, `@media (prefers-reduced-motion)`). Canvas fingerprinting or audio context inspection is strictly forbidden.
2. **Form Data Minimization**: Intake form processing logs only email domain names (e.g. `@acme.com`) for debugging rather than full user PII.
3. **Cookie Minimization**: The active site mode preference is stored locally in `localStorage` under `nexus_site_mode` and `nexus_motion_preference`. No third-party tracking cookies are set.
4. **GDPR / Privacy Compliance**: Zero external third-party tracking scripts or unvetted media SDKs are loaded.
