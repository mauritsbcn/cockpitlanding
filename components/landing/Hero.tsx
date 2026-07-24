import Link from "next/link";
import { TRIAL_MAILTO, INTRO_CALL_MAILTO } from "@/lib/site";

const MP_COLORS = {
  bol: "#0066B2",
  amazon: "#FF9900",
  praxis: "#00843D",
  shopify: "#5A8E3A",
} as const;

const MP_LABELS = { bol: "Bol", amazon: "Amazon", praxis: "Praxis", shopify: "Shopify" } as const;

type MpKey = keyof typeof MP_COLORS;

export default function Hero() {
  return (
    <header id="top" className="lp-hero">
      <div className="lp-wrap lp-hero__grid">
        <div className="lp-hero__copy">
          <span className="lp-eyebrow">Marge-inzicht voor marketplace-sellers</span>
          <h1 className="lp-h1">
            Grip op je <span style={{ color: "var(--cp-success)" }}>marge</span>.
            <br />Over al je marketplaces.
          </h1>
          <p className="lp-h1-sub">Zie elke dag wat je wérkelijk overhoudt — tot op de cent.</p>
          <p className="lp-lead">
            Bol, Amazon, Praxis en Shopify in één overzicht. Omzet, commissies, ad spend,
            verzendkosten en retouren per kanaal — gevalideerd tegen de marketplace-factuur,
            elke ochtend vers.
          </p>
          <div className="lp-hero__cta">
            <a href={TRIAL_MAILTO} className="lp-btn lp-btn--primary">
              Start gratis trial
              <ArrowRight size={16} />
            </a>
            <a href={INTRO_CALL_MAILTO} className="lp-btn lp-btn--ghost">Plan gratis setup-call</a>
          </div>
          <p style={{ fontSize: 13, color: "var(--cp-text-muted)", marginTop: 14, marginBottom: 0 }}>
            30 dagen gratis · geen creditcard · gratis setup in één call · of{" "}
            <Link href="/dashboard" style={{ color: "var(--cp-blue-500)", fontWeight: 600 }}>bekijk eerst de demo</Link>
          </p>

          <div style={{ marginTop: 28, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 18, fontSize: 13, color: "var(--cp-text-muted)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              {/* eslint-disable @next/next/no-img-element */}
              <img src="/logos/bol.svg" alt="Bol.com" style={{ height: 15, width: "auto" }} />
              <img src="/logos/amazon.svg" alt="Amazon" style={{ height: 16, width: "auto" }} />
              <img src="/logos/praxis.svg" alt="Praxis" style={{ height: 14, width: "auto" }} />
              <img src="/logos/brico.svg" alt="Brico" style={{ height: 17, width: "auto" }} />
              <img src="/logos/shopify.svg" alt="Shopify" style={{ height: 17, width: "auto" }} />
              {/* eslint-enable @next/next/no-img-element */}
            </div>
            <span>Werkt vanaf dag 1 met de marketplaces die je al gebruikt</span>
          </div>
        </div>

        <div className="lp-hero__visual">
          <HeroDashboardMock />
          <FloatingCallout
            style={{ top: "4%", left: "-12%" }}
            color="#16A34A"
            label="Netto resultaat"
            value="€23.040"
            delta="+18,1%"
          />
          <FloatingCallout
            style={{ bottom: "6%", right: "-2%" }}
            color="#3A8FE0"
            label="ROAS deze maand"
            value="4,2×"
            delta="boven target"
            iconType="sparkle"
          />
        </div>
      </div>
    </header>
  );
}

function FloatingCallout({
  style,
  color,
  label,
  value,
  delta,
  iconType = "trending-up",
}: {
  style: React.CSSProperties;
  color: string;
  label: string;
  value: string;
  delta: string;
  iconType?: "trending-up" | "sparkle";
}) {
  return (
    <div className="lp-mock-callout" style={style}>
      <span className="lp-mock-callout__dot" style={{ background: color }}>
        {iconType === "sparkle" ? (
          <SparkleIcon size={13} />
        ) : (
          <TrendingUpIcon size={13} />
        )}
      </span>
      <span style={{ display: "flex", flexDirection: "column" }}>
        <span className="lp-mock-callout__lbl">{label}</span>
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: 8 }}>
          <span className="lp-mock-callout__val">{value}</span>
          <span style={{ fontSize: 11, color, fontWeight: 600 }}>{delta}</span>
        </span>
      </span>
    </div>
  );
}

function HeroDashboardMock() {
  return (
    <div className="lp-mock" role="img" aria-label="MarginGrip dashboard preview">
      <div className="lp-mock__chrome">
        <span className="lp-mock__dot" style={{ background: "#FF6058" }} />
        <span className="lp-mock__dot" style={{ background: "#FFBD2E" }} />
        <span className="lp-mock__dot" style={{ background: "#28C941" }} />
        <span className="lp-mock__url">
          <LockIcon size={9} color="#16A34A" />
          app.margingrip.nl/overzicht
        </span>
      </div>
      <div className="lp-mock__body">
        <MockSidebar />
        <div className="lp-mock-main">
          <div className="lp-mock-main__head">
            <div>
              <div className="lp-mock-main__title">Overzicht</div>
              <div className="lp-mock-main__subtitle">November 2025 · alle marketplaces</div>
            </div>
            <div className="lp-mock-main__filters">
              <span className="lp-mock-pill lp-mock-pill--active">Maand</span>
              <span className="lp-mock-pill">Kwartaal</span>
              <span className="lp-mock-pill">Jaar</span>
            </div>
          </div>
          <div className="lp-mock-kpis">
            <MockKPI label="Bruto omzet" value="€159.420" trend="+12,4%" dir="up" />
            <MockKPI label="Netto resultaat" value="€23.040" trend="+18,1%" dir="up" />
            <MockKPI label="ROAS" value="4,2×" trend="+0,4" dir="up" />
            <MockKPI label="Bestellingen" value="2.340" trend="+6,2%" dir="up" />
          </div>
          <div className="lp-mock-charts">
            <MockBarChart />
            <MockTopProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

function MockSidebar() {
  const items = [
    { id: "overzicht", label: "Overzicht", icon: "home", active: true },
    { id: "orders", label: "Bestellingen", icon: "box" },
    { id: "producten", label: "Producten", icon: "tag" },
    { id: "financieel", label: "Financieel", icon: "piechart" },
    { id: "connecties", label: "Connecties", icon: "plug" },
  ];
  return (
    <div className="lp-mock-side">
      <div className="lp-mock-side__brand">
        <span className="lp-mock-side__mark" />
        MarginGrip
      </div>
      <div className="lp-mock-side__nav">
        {items.map((it) => (
          <div
            key={it.id}
            className={`lp-mock-side__nav-item${it.active ? " lp-mock-side__nav-item--active" : ""}`}
          >
            <span style={{ width: 14, height: 14, display: "inline-flex", alignItems: "center", justifyContent: "center", color: it.active ? "var(--cp-blue-500)" : "rgba(255,255,255,0.5)", flexShrink: 0 }}>
              <NavIcon name={it.icon} />
            </span>
            {it.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function MockKPI({ label, value, trend, dir }: { label: string; value: string; trend: string; dir: "up" | "down" }) {
  return (
    <div className="lp-mock-kpi">
      <div className="lp-mock-kpi__label">{label}</div>
      <div className="lp-mock-kpi__value">{value}</div>
      <div className={`lp-mock-kpi__trend lp-mock-kpi__trend--${dir}`}>
        {dir === "up" ? <TinyTrendUp /> : <TinyTrendDown />}
        {trend}
      </div>
    </div>
  );
}

function MockBarChart() {
  const data = [
    [22, 14, 8, 4], [25, 16, 10, 5], [28, 17, 11, 6], [21, 13, 9, 5],
    [30, 18, 12, 6], [33, 20, 13, 7], [38, 22, 14, 8], [29, 18, 11, 6],
    [32, 19, 13, 7], [35, 21, 14, 7], [40, 23, 15, 8], [37, 22, 14, 7],
    [42, 25, 17, 9], [44, 26, 17, 9],
  ];
  const colors = [MP_COLORS.bol, MP_COLORS.amazon, MP_COLORS.praxis, MP_COLORS.shopify];
  const maxTot = Math.max(...data.map((d) => d.reduce((a, b) => a + b, 0)));

  return (
    <div className="lp-mock-card" style={{ minHeight: 0 }}>
      <div className="lp-mock-card__head" style={{ flexDirection: "column", alignItems: "stretch", gap: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
          <div className="lp-mock-card__title">Omzet per dag</div>
          <div className="lp-mock-card__sub">Laatste 14 dagen</div>
        </div>
        <div className="lp-mock-legend" style={{ flexWrap: "wrap" }}>
          {(Object.keys(MP_LABELS) as MpKey[]).map((k, i) => (
            <span key={k} className="lp-mock-legend__item">
              <span className="lp-mock-legend__dot" style={{ background: colors[i] }} />
              {MP_LABELS[k]}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 280 100" preserveAspectRatio="none" style={{ width: "100%", height: 130, display: "block" }}>
        {[0.25, 0.5, 0.75, 1].map((t, i) => (
          <line key={i} x1="0" x2="280" y1={100 - 100 * t} y2={100 - 100 * t} stroke="#E5EAF0" strokeWidth="0.5" strokeDasharray="2 3" />
        ))}
        {data.map((d, i) => {
          const x = 4 + i * (272 / data.length);
          const w = (272 / data.length) - 4;
          let yCursor = 100;
          return (
            <g key={i}>
              {d.map((v, j) => {
                const h = (v / maxTot) * 92;
                const y = yCursor - h;
                yCursor -= h;
                return <rect key={j} x={x} y={y} width={w} height={h} fill={colors[j]} rx="1" />;
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function MockTopProducts() {
  const products = [
    { name: "Bijzettafel Ø45", net: "€34,56", icon: "table", mp: "bol" as MpKey },
    { name: "Fauteuil Bouclé", net: "€61,20", icon: "chair", mp: "amazon" as MpKey },
    { name: "Vloerlamp Rotan", net: "€28,05", icon: "lamp", mp: "praxis" as MpKey },
    { name: "Wandrek Eiken", net: "€19,84", icon: "shelf", mp: "shopify" as MpKey },
  ];
  return (
    <div className="lp-mock-card">
      <div className="lp-mock-card__head">
        <div>
          <div className="lp-mock-card__title">Top producten</div>
          <div className="lp-mock-card__sub">Netto per stuk</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, width: "100%" }}>
        {products.map((p) => (
          <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10.5, minWidth: 0 }}>
            <span style={{ width: 26, height: 26, borderRadius: 6, background: "#F0F4F8", border: "1px solid var(--cp-border)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--cp-navy-700)" }}>
              <ProductIcon name={p.icon} />
            </span>
            <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "var(--cp-text)" }}>{p.name}</span>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: MP_COLORS[p.mp], flexShrink: 0 }} title={MP_LABELS[p.mp]} />
            <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: 600, color: "var(--cp-success, #16A34A)", flexShrink: 0 }}>{p.net}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductIcon({ name }: { name: string }) {
  const s = { width: 14, height: 14, stroke: "currentColor", fill: "none" as const, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "table": return <svg viewBox="0 0 24 24" style={s}><ellipse cx="12" cy="7" rx="8" ry="2.5" /><path d="M6 9v9M18 9v9M12 9.5V19" /></svg>;
    case "chair": return <svg viewBox="0 0 24 24" style={s}><path d="M7 3v9h10V3M7 12h10M8 12v9M16 12v9M7 16h10" /></svg>;
    case "lamp": return <svg viewBox="0 0 24 24" style={s}><path d="M8 3h8l2 7H6l2-7zM12 10v10M8 21h8" /></svg>;
    case "shelf": return <svg viewBox="0 0 24 24" style={s}><path d="M4 4v16M20 4v16M4 9h16M4 15h16" /></svg>;
    default: return null;
  }
}

/* ---- Inline SVG icons ---- */

function ArrowRight({ size = 18 }: { size?: number }) {
  const s = { width: size, height: size, stroke: "currentColor", fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <svg viewBox="0 0 24 24" style={s}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function LockIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, stroke: color, fill: "none", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function TrendingUpIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, stroke: "#fff", fill: "none", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />
    </svg>
  );
}

function SparkleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, stroke: "#fff", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
    </svg>
  );
}

function TinyTrendUp() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 9, height: 9, stroke: "currentColor", fill: "none", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />
    </svg>
  );
}

function TinyTrendDown() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 9, height: 9, stroke: "currentColor", fill: "none", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M3 7l6 6 4-4 8 8M14 17h7v-7" />
    </svg>
  );
}

function NavIcon({ name }: { name: string }) {
  const s = { width: 12, height: 12, stroke: "currentColor", fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "home": return <svg viewBox="0 0 24 24" style={s}><path d="M3 12l9-9 9 9M5 10v10h14V10" /></svg>;
    case "box": return <svg viewBox="0 0 24 24" style={s}><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" /><path d="M3.27 6.96L12 12l8.73-5.04M12 22V12" /></svg>;
    case "tag": return <svg viewBox="0 0 24 24" style={s}><path d="M20.59 13.41L12 22l-9-9V3h10z" /></svg>;
    case "piechart": return <svg viewBox="0 0 24 24" style={s}><path d="M21.21 15.89A10 10 0 118 2.83" /><path d="M22 12A10 10 0 0012 2v10z" /></svg>;
    case "plug": return <svg viewBox="0 0 24 24" style={s}><path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 01-12 0V8z" /><path d="M12 18v4" /></svg>;
    default: return null;
  }
}
