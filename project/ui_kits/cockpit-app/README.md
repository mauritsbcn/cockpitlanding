# Cockpit App — UI kit

A high-fidelity React recreation of the Cockpit dashboard product, used for prototyping new screens or marketing visuals without touching the production codebase.

## What's here

- `index.html` — entry point. Loads React 18, Babel, design tokens, then renders `<App>` with router-style navigation between dashboard pages and the login screen.
- `data.js` — exposes `window.DEMO_DATA` with realistic figures for an SMB seller across Bol/Amazon/Praxis/Shopify.
- `Components.jsx` — primitive components: `Card`, `Button`, `KPI`, `Sidebar`, `MarketplaceBadge`, `DemoToggle`, `MarketplaceFilter`, `PeriodSelect`, `BarChart`, `DonutChart`, `Icon`. All exported to `window`.
- `Pages.jsx` — full pages: `OverzichtPage`, `OrdersPage`, `ProductenPage`, `FinancieelPage`, `ConnectiesPage`, `LoginPage`.

## Pages mapped to product

| Kit page | Source in `mauritsbcn/cockpit` |
| --- | --- |
| `OverzichtPage` | `app/page.tsx` |
| `OrdersPage` | `app/orders/page.tsx` |
| `ProductenPage` | `app/producten/page.tsx` |
| `FinancieelPage` | `app/financieel/page.tsx` |
| `ConnectiesPage` | `app/instellingen/connecties/page.tsx` |
| `LoginPage` | `app/login/page.tsx` |

## How to use

- Open `index.html` directly — no build step.
- Use the sidebar to switch pages. Use the demo toggle at the top of every page to flip between live/demo styling.
- Click "Uitloggen" in the sidebar to land on the login screen.

## Notes

- The bar and donut charts are hand-drawn SVGs (no Recharts dep) so the kit runs offline.
- Icons use a small inlined Lucide-compatible icon set instead of the `lucide-react` package.
- Tokens come from `../../colors_and_type.css` — do not redefine colors locally.
