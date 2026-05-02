---
name: cockpit-design
description: Use this skill to generate well-branded interfaces and assets for Cockpit (Maurits Group's marketplace dashboard SaaS for NL/BE e-commerce sellers), either for production or throwaway prototypes/mocks/landing pages/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `ui_kits/cockpit-app/`, `preview/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, marketing pages), copy assets out and create static HTML files for the user to view. Use `colors_and_type.css` as your token source and the React components in `ui_kits/cockpit-app/` as your starting point — they're already pixel-accurate to the production app.

If working on production code (Next.js + Tailwind v4), the tokens in `app/globals.css` (`--color-navy-900`, etc.) match what's documented here under the `--cp-*` prefix — read the rules in README.md to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (landing page, deck, new dashboard screen, marketing email, etc.), ask a couple of focused questions about audience and goal, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Defaults to remember:
- Dutch-first copy, direct/zakelijk tone, `je`/`jij` form.
- Donkerblauw (#0B2545) + wit. No orange, no purple, no pastels, no glassmorphism.
- Inter, tabular numerals on every number.
- Hairline borders (1px #E5EAF0) and barely-there shadow do the work — no heavy elevation.
- Lucide icons only, stroke 2.
