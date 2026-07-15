export default function TrustStrip() {
  return (
    <section className="lp-trust">
      <div className="lp-wrap lp-trust__grid">
        <div className="lp-trust__item">
          <span className="lp-trust__icon"><ShieldIcon /></span>
          <span>AES-256 versleutelde credentials, EU-hosted</span>
        </div>
        <div className="lp-trust__item">
          <span className="lp-trust__icon"><ZapIcon /></span>
          <span>Live in 5 minuten — geen IT, geen integraties bouwen</span>
        </div>
        <div className="lp-trust__item">
          <span className="lp-trust__icon"><EyeIcon /></span>
          <span>Cijfers die kloppen — gevalideerd tegen de marketplace-factuur</span>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "currentColor", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "currentColor", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "currentColor", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
