# Nexus design system

## Product posture

Nexus is a founder-led workflow software studio for operators who have outgrown spreadsheets, chat threads, and manual handoffs. The interface must make operating logic and evidence easier to understand. It is not a theatrical technology showcase.

**Dials:** variance 5, motion 3, density 4. The visual language is restrained dark, direct, and evidence-led.

## Semantic tokens

Use semantic tokens from `src/app/globals.css`, not repeated hex values.

| Role | Token |
| --- | --- |
| Canvas | `background` |
| Supporting surface | `surface` |
| Raised surface | `surface-elevated` |
| Primary text | `foreground` |
| Supporting text | `muted` |
| Divider | `border` |
| High-emphasis text | `strong` |
| Action | `brand` / `brand-foreground` |
| Keyboard focus | `focus` |
| State | `success`, `warning`, `danger` |

## Type, spacing, and shape

- Body text is 16px with a readable 1.7 line height and a 65ch maximum measure.
- Headings use balanced wrapping. Hero display is fluid but never extreme or viewport-width based.
- Use 6px, 8px, 12px, 16px, and pill radii only. Buttons use 8px, panels use 12px.
- Use whitespace and sparse dividers before adding a card. Do not nest cards as decoration.
- Avoid persistent monospace, tiny uppercase labels, noise, decorative grids, fake product chrome, and arbitrary radii.

## Navigation and actions

- One sticky header. Desktop navigation stays on one line; mobile uses one labelled disclosure menu.
- The primary action is always **Map my workflow**. Use **View case studies**, **Open demo library**, and **Use the checklist** for their distinct intents.
- Interactive targets are at least 44px tall and always expose a visible 2px focus outline.

## Motion and visuals

- The default state is static. Hover and press feedback may use transform and opacity only.
- Reduced motion disables smooth scrolling and transitions.
- Use a visual only when it explains operating logic or shows real product evidence. No decorative WebGL, orbit, pointer tilt, mouse spotlight, or progress bar.

## Accessibility and claim safety

- WCAG 2.2 AA is the minimum: semantic landmarks, keyboard operation, visible focus, logical headings, contrast, and 320px reflow.
- Product proof needs explicit status and limitations. Do not invent production adoption, certifications, or performance claims.
- Public URLs, social accounts, and contact addresses are omitted unless enabled through verified owner-provided environment fields.
