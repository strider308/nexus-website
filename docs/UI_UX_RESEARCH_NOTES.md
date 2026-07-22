# Nexus UI/UX research notes

Date: 22 July 2026

## Design read

Founder-led B2B workflow studio for serious operators. The selected dials are variance 5, motion 3, and density 4: a restrained dark interface with one explanatory visual, clear proof, and static-first behavior.

## Inputs used

- Impeccable context reported that no `PRODUCT.md` or `DESIGN.md` exists. This was treated as a scoped remediation, not a blocked greenfield exercise.
- UI/UX Pro Max recommended a concise hero-feature-CTA hierarchy and confirmed the need for visible focus, reduced-motion support, and dynamic imports for genuinely heavy client modules. Its suggested cinema/glass visual style was rejected because it conflicts with the brief's restrained, evidence-led direction.
- [NameThatUI's navigation drawer reference](https://namethatui.com/web/hamburger-menu) informed the mobile menu contract: a labelled trigger, `aria-expanded`, a navigation landmark, Escape close, and focus return.
- [Awwwards' mobile performance guidance](https://www.awwwards.com/brainfood-mobile-performance-vol3.pdf) and immersive studio examples were used as an anti-reference for theatrical studio patterns. Immersive 3D and parallax can suit an art-directed showcase, but they do not help this operational audience understand a workflow.
- Mobbin and Cosmos did not return a usable public result for the targeted queries in this environment. This is recorded rather than inferred.

## Decisions

- One header replaces the minimap and floating product navigation.
- A static workflow map replaces hero and demo WebGL. Real product mockups remain in the demo selector.
- Status and limitations sit with proof, rather than repeated proof strips and a homepage matrix.
- No cookie banner or browser persistence is used because the marketing site has no analytics or non-essential cookies.
