# Cockpit Design System

**Cockpit** is a multi-marketplace dashboard SaaS by **Maurits Group**, built for NL/BE e-commerce sellers who run on multiple platforms (Bol.com, Amazon NL/BE, Mirakl/Praxis, Shopify) and want one place that shows **real margin**, not just revenue.

This design system captures Cockpit's visual language so designers and agents can produce on-brand mockups, prototypes, marketing pages, and decks consistently.

---

## What Cockpit is

- **Audience:** premium SMB sellers, €100k–€2M revenue, selling on 2+ marketplaces. NL/BE primary, Dutch-first UI.
- **Product:** multi-tenant SaaS dashboard. Connect marketplace API keys → unified KPIs, orders, products, P&L, ads (ROAS/TACoS).
- **Pricing:** €99–299/mnd. Lead-gen funnel — demo + intake call, no self-service signup in v1.
- **Stack:** Next.js 16 (App Router), PostgreSQL on Railway, Tailwind v4. AES-256-GCM encrypted credentials, EU-hosted.
- **Visual reference points:** Linear, Stripe, Vercel — clean, generous spacing, subtle shadow, dense data in product shots. **Not** rounded-corner pastel SaaS.

## Sources used

- **Codebase:** `github.com/mauritsbcn/cockpit` (private). Imported under `app/`, `components/`, `lib/constants.ts` in this project.
- **Brand brief:** provided by Maurits in project intake (donkerblauw + wit, Inter, premium SMB tone).
- **No Figma file** was provided — visual truth is the codebase.

---

## Index

- `README.md` — this file
- `colors_and_type.css` — full token system (palette, type, spacing, radii, shadow). Drop into any HTML/React file.
- `SKILL.md` — agent skill manifest, lets this folder be loaded as a Claude Code skill
- `assets/` — logos, favicons, marketplace logos, brand imagery
- `fonts/` — Inter (variable + static)
- `preview/` — design-system tab cards (palette, type, components, etc.)
- `ui_kits/cockpit-app/` — high-fidelity React recreations of the live dashboard product
- `ui_kits/cockpit-marketing/` — landing-page kit, consistent with the app's visual language
- Original codebase imports kept under `app/`, `components/`, `lib/` for reference (TypeScript / Tailwind v4)

### Quick navigation

| File | Use when |
| --- | --- |
| `colors_and_type.css` | You're building any HTML mockup or component. Always link this. |
| `ui_kits/cockpit-app/index.html` | You want to see/copy a working dashboard recreation. |
| `ui_kits/cockpit-app/Components.jsx` | You're building a new screen — start from these primitives. |
| `ui_kits/cockpit-app/Pages.jsx` | You want a full-page reference layout to fork. |
| `assets/logo-*.svg` | You need the Cockpit wordmark or app icon. |
| `preview/` | Reference cards for the Design System tab. |
| `app/`, `components/`, `lib/constants.ts` | Production source-of-truth (read-only reference). |

---

## Content fundamentals

Cockpit's voice is **Dutch-first, direct, zakelijk, no-fluff**. It reads like a tool built by an operator for operators, not a marketing department.

### Language

- **Nederlands first**, English second. Every UI string in the codebase is in Dutch ("Bestellingen", "Omzet", "Vernieuwen", "Connecties").
- i18n-ready: design copy assuming Dutch lengths (typically ~10% longer than English) so layouts don't break when swapped.
- English fallback exists for global terms only (KPI names: ROAS, TACoS, COGS, P&L). These are kept untranslated because operators use them daily.

### Tone

- **Direct + operationeel.** No hype. Examples from the product:
  - "Verbind je marketplace om automatisch orders binnen te halen" (not "Unlock the power of unified data")
  - "Marketplace prestaties — deze maand" (not "Your incredible business journey")
  - "Je hebt nog geen data." (acknowledges reality, points to action)
- **You-form (`je`/`jij`).** Always the informal Dutch second-person. Cockpit talks to one operator, not "your team" or "your organization".
- **No exclamation marks** in product copy. One welcome `👋` in the empty-state — that's the only emoji concession.
- **Numbers carry the message.** Headlines lean on currency, percentages, multiples (€, %, ×) more than adjectives.

### Casing

- **Sentence case** everywhere — page titles, buttons, table headers ("Recente bestellingen", not "Recente Bestellingen").
- **UPPER CASE** only for KPI labels (small caps via `letter-spacing: 0.05em` + `text-xs uppercase`), never for headlines or buttons.
- Marketplace names render with their own casing: "Bol.com", "Amazon NL", "Praxis", "Shopify".

### Phrases that fit

- "Werkelijke marges, niet alleen omzet."
- "Eén dashboard. Alle marktplaatsen."
- "Bekijk demo" / "Plan een intake"
- "Geen self-service nog — we onboarden persoonlijk."

### Phrases to avoid

- "Revolutionize", "unlock", "unleash", "supercharge"
- "Your business journey", "data-driven decisions", "growth at scale"
- "10x", "next-gen", "powered by AI"
- Anything that ends in an exclamation mark
- Stockfoto-talk: "modern entrepreneurs", "ambitious sellers"

---

## Visual foundations

### Colors

The system is built on **donkerblauw + wit**. One brand color (`#0B2545`), a small lighter-blue family for hierarchy, neutrals on a soft warm-gray surface, and three semantic colors for status. **No purple, no orange (Hocus Picus territory), no pastels, no pink.**

| Token | Hex | Use |
| --- | --- | --- |
| `--cp-navy-900` | `#0B2545` | Primary brand. Sidebar bg, primary buttons, body text on light. |
| `--cp-navy-700` | `#13315C` | Hover state for primary, gradient mid-stop. |
| `--cp-navy-500` | `#1B3E6F` | Tertiary navy, focus ring base, chart primary. |
| `--cp-blue-500` | `#3A8FE0` | Accent blue. Demo-mode toggle, ad-related CTAs, inline chart highlight. |
| `--cp-blue-50` | `#EFF6FF` | Tinted background for info banners + demo notices. |
| `--cp-bg` | `#FFFFFF` | Card surfaces. |
| `--cp-surface` | `#F7F9FC` | Page background. Cool blue-gray, not warm. |
| `--cp-surface-2` | `#EDF2F7` | Hover row, subtle band. |
| `--cp-border` | `#E5EAF0` | All hairlines. 1px, never thicker. |
| `--cp-text` | `#0B2545` | Primary copy. |
| `--cp-text-secondary` | `#4A5568` | Secondary copy, table cells. |
| `--cp-text-muted` | `#718096` | Captions, hints. |
| `--cp-text-faint` | `#A0AEC0` | Disabled, placeholder, "—" states. |
| `--cp-success` | `#16A34A` | Positive trend, profitable margin. |
| `--cp-warning` | `#D97706` | At-risk thresholds. |
| `--cp-error` | `#DC2626` | Loss, negative trend, errors. |

**Marketplace brand colors** are reproduced literally (Bol `#0066B2`, Amazon `#FF9900`, Praxis `#00843D`, Brico `#E30613`, Shopify `#5A8E3A`) so the user's external brands stay recognizable inside Cockpit.

### Typography

- **Family:** Inter (variable). System fallback: `system-ui, -apple-system, sans-serif`. Loaded via `next/font` in production.
- **Numerics:** `font-variant-numeric: tabular-nums` is on for every currency/number — table columns must align without explicit widths.
- **Hierarchy is held by weight + color, not size.** Most pages have one `text-2xl` page title and the rest is `text-sm`. Density beats hierarchy.
- See `colors_and_type.css` for the full scale.

### Spacing

- 4px base. Scale: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64`.
- Page padding: `32px` (`p-8`) on the main content area, `24px` (`p-6`) inside the sidebar.
- Card padding: `20px` (`p-5`) standard, `16px` for compact.
- Grid gap between cards: `16px` (`gap-4`).

### Backgrounds & imagery

- **No full-bleed photography.** No people-with-laptops stock.
- **Hero imagery = product itself.** Marketing pages show the dashboard, in a tilted browser frame or a subtle drop-shadow card.
- **Login is the one gradient surface:** `linear-gradient(to bottom right, #0B2545, #13315C, #1B3E6F)`. Used nowhere else.
- **No glassmorphism, no blur, no animated gradients.**
- **No hand-drawn illustration.** Iconography is geometric stroke (Lucide).

### Shadows

The shadow system is intentionally restrained. Three levels only.

- `--cp-shadow-card`: `0 1px 2px rgba(11, 37, 69, 0.04)` — barely there. The default card.
- `--cp-shadow-elevated`: `0 8px 24px rgba(11, 37, 69, 0.08)` — modal, dropdown, login card.
- `--cp-shadow-focus`: `0 0 0 3px rgba(27, 62, 111, 0.10)` — focus ring on inputs and buttons. Always navy-tinted, never blue-default.

### Borders & corners

- **Radii:** `4px` (badges, chips), `6px` (inputs, buttons), `8px` (small cards), `12px` (cards), `16px` (modal/login card).
- **No fully rounded buttons.** Pill-shape (`rounded-full`) is reserved for filter chips like the marketplace selector.
- **Borders are 1px `#E5EAF0`** for everything. Never thicker. Hairlines do the work shadows would do elsewhere.

### Hover & press

- **Buttons (primary):** background darkens from `--cp-navy-900` → `--cp-navy-700`. 150ms.
- **Buttons (secondary):** background goes from white → `--cp-surface`. No border change.
- **Nav items (sidebar):** background goes to `bg-white/10`. Text color goes to white.
- **Table rows:** background goes to `--cp-surface` on hover. Cursor pointer when expandable.
- **No press scale, no opacity flicker.** Cockpit doesn't bounce.

### Transitions

- 150ms `ease` for color/background.
- 200ms for layout shift (table row expand).
- **No spring physics. No micro-bounce. No fade-in on page load.** Charts animate themselves (Recharts default), nothing else does.

### Cards

The card is the workhorse component. White background, 1px `#E5EAF0` border, 12px radius, `--cp-shadow-card`, `20px` interior padding. That's it. No header bar, no separator, no accent stripe.

### Tables

- Header row: 1px bottom border, 11px UPPER-CASE text, `--cp-text-muted` color.
- Body rows: 1px bottom border in `#F0F4F8` (one shade lighter than the card border).
- Numbers right-aligned, tabular numerals.
- Last row gets no border (`last:border-0`).
- Footer (totals): 2px top border in `--cp-navy-900` for emphasis.

### Layout rules

- **Sidebar fixed at 240px** (`w-60`). Always visible on desktop. Mobile: not designed yet — flagged below.
- **Main content max-width: 1600px**, with 32px padding inside.
- **Above the fold:** page title + filter row + KPI grid. Charts below. Tables at the bottom.

### Transparency & blur

- **Used only inside the navy sidebar:** `bg-white/10` (active nav), `text-white/60` (labels), `border-white/10` (dividers). On any other surface, no transparency.
- **No backdrop-filter blur.** Anywhere.

### Imagery vibe (when imagery is needed)

- **Cool, not warm.** Blue cast over neutral. Never sepia, never sunset.
- **Tight crops of the product UI.** Dashboard tile, chart fragment, table close-up.
- **No grain, no film effect, no duotone.** Sharp UI screenshots.

---

## Iconography

Cockpit uses **Lucide React** as its sole icon library. Imported with named imports (`import { Euro, ShoppingCart, TrendingUp } from "lucide-react"`).

- **Stroke style:** 2px stroke, geometric, rounded line caps. Lucide's defaults.
- **Sizes used in product:** 12px (`w-3 h-3` — trend arrows in KPI), 14px (`w-3.5 h-3.5` — inline button icons), 16px (`w-4 h-4` — KPI card icons), 20px (`w-5 h-5` — banner icons).
- **Color follows context** — never colored by default. Muted icons use `--cp-text-faint`. Trend icons inherit `text-green-600` / `text-red-600` from the parent. KPI accent icons use `text-[#A0AEC0]`.
- **Emoji is rare.** Only one approved use: `🎬` next to "Demo" in the mode toggle, and `👋` in the empty-state welcome card. Don't add more.
- **Marketplace logos** (Bol.com, Amazon, Praxis, Shopify) live as **rounded badges**, not full logos in the dashboard chrome. Rendered as small text pills with the brand color at 12% opacity background + brand color text. See `ui_kits/cockpit-app/MarketplaceBadge.jsx`.
- **No PNG icons, no icon font.** Vector-only via Lucide.

For the design system previews, Lucide is loaded via CDN (`unpkg.com/lucide-static`) so HTML cards render without a build step.

---

## Caveats and substitutions

- **Inter** is loaded via Google Fonts in the previews (and via `next/font` in production). Same family, no substitution.
- **No custom logo SVG was found** in `public/`. The product header just uses the wordmark "Cockpit" in Inter Bold. We've documented that as the canonical logo treatment in `assets/logo-wordmark.svg`.
- **No Figma file** — all visual truth comes from the running Next.js codebase.
- **Mobile sidebar collapse pattern is not yet designed.** Codebase has no breakpoint behavior below `lg:`. Flagged for future work.

---

## Using this system

- **For HTML mockups / decks:** `<link rel="stylesheet" href="colors_and_type.css">` and use the `--cp-*` tokens or the utility classes (`.cp-card`, `.cp-btn-primary`, etc.).
- **For React prototypes:** copy the JSX components from `ui_kits/cockpit-app/` and import the token CSS.
- **For production code:** the live codebase uses Tailwind v4. The token names in `app/globals.css` (`--color-navy-900`, etc.) match the ones here under the `--cp-*` prefix — so the design and product stay in sync.
