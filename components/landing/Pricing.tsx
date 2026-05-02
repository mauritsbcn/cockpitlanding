import Link from "next/link";

function CheckSmIcon() {
  return (
    <svg viewBox="0 0 16 16" style={{ width: 10, height: 10, stroke: "currentColor", fill: "none", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M13 4L6 11l-3-3" />
    </svg>
  );
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, stroke: "currentColor", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const features = [
  "Onbeperkt aantal marketplaces",
  "Onbeperkt aantal SKU's",
  "Automatische P&L per kanaal",
  "Ad-spend & ROAS in één view",
  "Tot 5 gebruikers per account",
  "E-mail support binnen 24u",
  "Audit-log & data-export",
  "Onboarding-call met operator",
];

export default function Pricing() {
  return (
    <section id="pricing" className="lp-section lp-section--soft">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Prijzen</span>
          <h2 className="lp-h2">Eén plan. Eerlijk geprijsd.</h2>
          <p className="lp-lead">
            Bedoeld voor sellers met €100k–€2M omzet. Geen tiers, geen verborgen
            limieten. Maandelijks opzegbaar.
          </p>
        </div>
        <div className="lp-pricing-card">
          <div className="lp-pricing-card__name">Cockpit · Standard</div>
          <div className="lp-pricing-card__price">
            <span className="lp-pricing-card__price-num">€199</span>
            <span className="lp-pricing-card__price-sub">/ maand</span>
            <span className="lp-pricing-card__price-tbd">Indicatief</span>
          </div>
          <p className="lp-pricing-card__caption">
            Definitieve prijs vastgesteld na intake — afhankelijk van aantal
            marketplaces en SKU&rsquo;s. Range: €99–€299 per maand.
          </p>
          <ul className="lp-pricing-card__features">
            {features.map((f) => (
              <li key={f}>
                <span className="lp-feature__check" style={{ marginTop: 2 }}>
                  <CheckSmIcon />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/login" className="lp-btn lp-btn--primary" style={{ flex: 1, minWidth: 200 }}>
              Plan een intake <ArrowRight size={16} />
            </Link>
            <Link href="/dashboard" className="lp-btn lp-btn--ghost" style={{ flex: 1, minWidth: 200 }}>
              Bekijk de demo
            </Link>
          </div>
          <p style={{ fontSize: 12, color: "var(--cp-text-muted)", marginTop: 16, marginBottom: 0, textAlign: "center" }}>
            Geen creditcard nodig · 30 dagen pilot mogelijk
          </p>
        </div>
      </div>
    </section>
  );
}
