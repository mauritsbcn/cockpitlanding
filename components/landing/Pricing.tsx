import { TRIAL_MAILTO, AGENCY_MAILTO, INTRO_CALL_MAILTO } from "@/lib/site";

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

type Plan = {
  name: string;
  price: string;
  priceSub: string;
  caption: string;
  features: string[];
  cta: { label: string; href: string; primary: boolean };
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free trial",
    price: "€0",
    priceSub: "30 dagen",
    caption: "Volledige functionaliteit, geen creditcard nodig. Stopt vanzelf.",
    features: [
      "Alle koppelingen en rapportages",
      "Gratis introductie-call van 1 uur",
      "Je eigen data, live gesynchroniseerd",
      "Geen verplichtingen na afloop",
    ],
    cta: { label: "Start gratis trial", href: TRIAL_MAILTO, primary: false },
  },
  {
    name: "Compleet",
    price: "€49,95",
    priceSub: "/ maand",
    caption: "Maandelijks of jaarlijks. Maandelijks opzegbaar, geen setup-fee.",
    features: [
      "Onbeperkt marketplaces & SKU's",
      "Dagelijkse of wekelijkse update",
      "Alle kostenregels + FBA/FBM",
      "2 gebruikers inbegrepen",
      "Extra gebruiker €9,95 p/mnd",
      "E-mail support binnen 24u",
    ],
    cta: { label: "Start gratis trial", href: TRIAL_MAILTO, primary: true },
    featured: true,
  },
  {
    name: "Agency",
    price: "Op maat",
    priceSub: "",
    caption: "Voor bureaus met meerdere klanten. White label mogelijk.",
    features: [
      "Eigen omgeving per klant",
      "White label onder jouw merk",
      "Volumekorting vanaf 6 klanten",
      "Samen onboarden",
    ],
    cta: { label: "Neem contact op", href: AGENCY_MAILTO, primary: false },
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="lp-section lp-section--soft">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Prijzen</span>
          <h2 className="lp-h2">Eerst proberen, dan pas betalen</h2>
          <p className="lp-lead">
            Start met 30 dagen gratis en een introductie-call van een uur:
            wat is je doel, wat verkoop je en waar verkoop je op. Daarna
            weet je precies wat Cockpit je oplevert.
          </p>
        </div>
        <div className="lp-pricing-grid">
          {plans.map((p) => (
            <div key={p.name} className={`lp-pricing-card lp-pricing-card--grid${p.featured ? " lp-pricing-card--featured" : ""}`}>
              {p.featured && <span className="lp-pricing-card__badge">Meest gekozen</span>}
              <div className="lp-pricing-card__name">{p.name}</div>
              <div className="lp-pricing-card__price">
                <span className="lp-pricing-card__price-num" style={{ fontSize: 40 }}>{p.price}</span>
                {p.priceSub && <span className="lp-pricing-card__price-sub">{p.priceSub}</span>}
              </div>
              <p className="lp-pricing-card__caption">{p.caption}</p>
              <ul className="lp-pricing-card__features" style={{ gridTemplateColumns: "1fr", flex: 1 }}>
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="lp-feature__check" style={{ marginTop: 2 }}>
                      <CheckSmIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.cta.href}
                className={`lp-btn ${p.cta.primary ? "lp-btn--primary" : "lp-btn--ghost"}`}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {p.cta.label} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "var(--cp-text-muted)", marginTop: 24, marginBottom: 0, textAlign: "center" }}>
          Liever eerst kennismaken?{" "}
          <a href={INTRO_CALL_MAILTO} style={{ color: "var(--cp-blue-500)", fontWeight: 600 }}>
            Plan de gratis introductie-call van 1 uur
          </a>
          {" "}— we kijken samen naar je doel, je producten en je kanalen.
        </p>
      </div>
    </section>
  );
}
