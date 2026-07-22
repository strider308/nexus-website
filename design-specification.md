# Nexus UI implementation contract

## Audience and goal

Nexus serves founders and operators whose work has outgrown spreadsheets, chat threads, and manual handoffs. The site must explain the operating problem, show responsible proof, make the founder accountable, and direct visitors to one next step.

## Homepage hierarchy

1. Outcome-led hero with one workflow visual
2. Small trust row
3. Operational before-and-after explanation
4. Four service families
5. Three featured proofs
6. Three engagement levels
7. Founder accountability
8. Resources preview
9. Final **Map my workflow** action

## System rules

- Restrained dark theme using the semantic tokens in `design-system/MASTER.md`.
- Body text is at least 16px. Text wraps balance for headings and pretty for prose.
- Radius scale: 6, 8, 12, 16, pill. Buttons use 8px. Panels use 12px.
- Static by default. Reduced-motion users receive no smooth scrolling or animated transitions.
- Use one sticky navigation system. Mobile navigation closes with Escape and returns focus to its trigger.
- Keep interactive targets at least 44px and show a global 2px focus outline.
- Use explicit proof status and limitations. Fail closed for public contact, domain, and social identity values.

## Prohibited patterns

- Decorative 3D, orbits, fake browser chrome, pointer tilt, scroll progress, mouse spotlight, minimaps, floating section docks, cookie banners without non-essential cookies, decorative grids/noise, repeated uppercase eyebrows, and duplicated CTAs.
