# Transformation & Service Blueprint 3D Content Map

This content map audits the existing HTML structures in `ProblemSection.tsx` and `ServicesSection.tsx` to guarantee zero information loss when enhancing them with the 3D layers.

---

## 1. Problem Section (Workflow Transformation Map)

### Existing HTML Content:
*   **Headings:**
    *   Thesis header: `Workflow thesis` (font-mono, tracking)
    *   H2 Title: `Nexus is a founder-led software studio, built for operational complexity...` (handled via `WordsPullUpMultiStyle`)
    *   Sub-heading: `Every Nexus build starts with the same question: where does the work get stuck? ...`
    *   Comparison Header: `How Nexus maps a workflow`
*   **Before/After Cards:**
    *   Five distinct transformation items (Operational Tools, Task Handoffs, Business Visibility, Status Follow-ups, Process Memory).
    *   Before states (e.g. "Scattered Tools", "Manual Handoffs", "No Owner Visibility") and their detailed description text.
    *   After states (e.g. "One Operating System", "Automated Handoffs", "Live Dashboards") and their detailed description text.
*   **Workflow Resolution Panel:**
    *   Column 1 (Before Nexus): Scattered chats, Spreadsheets, Manual follow-ups, Unclear ownership, No live visibility.
    *   Column 2 (Nexus Maps): Name the roles, Define the states, Assign ownership, Connect handoffs, Decide visibility points, Automate repeat actions.
    *   Column 3 (After Nexus): Role-based screens, Status-aware workflow, Automated handoffs, Owner dashboard, Audit trail.

### Gating and 3D Visual Mirroring:
*   **Information Preservation:** The entirety of the text copy, bullet lists, titles, and comparison details will remain in the HTML DOM. They are fully readable, searchable, and compliant with accessibility guidelines.
*   **3D Metaphor Integration:** The 3D scene (`WorkflowTransformationField`) will act as an ambient background layer positioned behind or beside the comparison cards. It visualizes the transition:
    *   Left side: Scattered colored spheres (representing scattered tools/chats) drifting randomly.
    *   Center: A grid plane (representing the Nexus mapping logic).
    *   Right side: Aligned, glowing nodes arranged in a structured linear grid (representing the integrated operating system).
*   **Mobile and Reduced-Motion Fallback:** Fallback switches to `Cinematic3DFallback` (variant `"transformation"`), rendering the clean 2D vector SVG representations of the three columns.

---

## 2. Services Section (Nexus Service Blueprint)

### Existing HTML Content:
*   **Section Header:**
    *   Capabilities subtitle: `Capabilities Ledger`
    *   H2 Title: `Systems for operators who have outgrown scattered tools. Mapped with care. Built with discipline.`
*   **Service Cards:**
    *   Four service blocks (Custom Workflow Systems, Automation Layers, Private Beta Builds, Owner Dashboards) with numbers, icons, descriptions, checklists, and CTA links ("Explore Service").
*   **Service Blueprint Stack:**
    *   Six Blueprint Steps (Inputs, Workflow Rules, Roles & Permissions, Automation, Dashboards, Handoff & Docs) with index numbers, titles, details, and example labels.
    *   Hover Highlights: Hovering or selecting a service card triggers CSS highlights (opacity change/border change) on specific blueprint layers matching the `SERVICE_LAYER_HIGHLIGHTS` mapping.

### Gating and 3D Visual Mirroring:
*   **Information Preservation:** The four service cards and the six blueprint stack cards remain 100% intact as responsive HTML elements.
*   **3D Metaphor Integration:** The 3D scene (`BlueprintStackField`) will render a vertical or stacked sequence of six glowing sheets/slabs representing the blueprint architecture.
*   **Hover Synchronization:** When a service card is hovered or focused (keyboard input), the corresponding layers in the 3D stack light up with the service's primary color, mirroring the 2D highlight mappings exactly.
*   **Mobile and Reduced-Motion Fallback:** Mobile devices or users with reduced motion preferences bypass the 3D stack canvas, mounting `Cinematic3DFallback` (variant `"blueprint"`) which displays a lightweight SVG stacked diagram.

---

## 3. Accessibility & SEO Compliance

1.  **DOM Reading Hierarchy:** Screen readers will bypass the 3D WebGL canvases entirely (`aria-hidden="true"` and `tabIndex={-1}`).
2.  **No Canvas-Only Meanings:** No critical labels or text columns exist solely in WebGL. All text content is rendered as semantic HTML elements in the DOM.
3.  **Keyboard Navigation:** All interactive service card buttons maintain standard focus triggers (`onFocus`, `onBlur`) to preserve keyboard navigation highlighting.
