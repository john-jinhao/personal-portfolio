# John Oh Portfolio — Design System

## Reference review

The supplied LandingHero URL was inspected on 18 October 2026 but its individual page was not accessible through the available browser retrieval tool. Exact layout, imagery, breakpoints, palette and animation details therefore could not be verified. This implementation does **not** claim to reproduce those specifics.

The fallback direction takes cues from the LandingHero library patterns that were retrievable: dark, high-contrast composition; Manrope-style display type; soft rounded panels; thin translucent rules; restrained gradient/technical surfaces; and short entrance transitions. These are implementation decisions, not confirmed properties of the provided page.

## Tokens

- **Ink / forest:** `#18221e` / `#163c31`
- **Paper / cloud:** `#f5f5ef` / `#e8ece5`
- **Primary green:** `#315c4b`
- **Accent gold:** `#c49b5b`
- **Border:** `#cdd5cd`
- **Display:** Manrope (700–800); **body:** DM Sans (400–700)
- **Container:** 1280px max width with a responsive `clamp(1.25rem, 4vw, 4rem)` gutter
- **Radius:** 1.3rem; panels use subtle 1px borders rather than heavy shadowing

## Layout and responsive behaviour

Desktop layouts use a two-column hero, four-column capability grid and three project cards. At 900px, navigation becomes a labelled mobile menu, the capability grid becomes two columns and projects become compact horizontal cards. At 560px, all collections are one column and typography scales with `clamp()`.

## Motion and interaction

Motion is limited to short reveal transitions and a project-detail dialog. Links, cards and buttons receive modest hover responses. `prefers-reduced-motion` removes smooth scrolling and animations. Keyboard focus uses a visible gold outline; dialogs close with Escape.

## Accessibility

The page includes semantic landmarks, one H1, a skip link, labelled mobile navigation, descriptive image alternatives, visible focus states and touch-sized interactive controls. Project dialog content intentionally excludes confidential or unverified project results.
