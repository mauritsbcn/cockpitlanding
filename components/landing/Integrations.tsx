const CONNECTIONS = [
  { name: "Bol.com", sub: "Verkoop + Ads + Retouren", color: "#0000A4", mark: "bol" },
  { name: "Amazon", sub: "NL / BE · Verkoop + Ads", color: "#232F3E", mark: "amazon" },
  { name: "Praxis", sub: "via Mirakl", color: "#00843D", mark: "PRAXIS" },
  { name: "Brico", sub: "via Mirakl · beta", color: "#E30613", mark: "Brico" },
  { name: "Shopify", sub: "Eigen webshop", color: "#5E8E3E", mark: "shopify" },
  { name: "Zelf verstuurd", sub: "FBM · CSV-template", color: "#0B2545", mark: "CSV ↑" },
];

export default function Integrations() {
  return (
    <section id="koppelingen" className="lp-section lp-section--soft">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Koppelingen</span>
          <h2 className="lp-h2">Verbonden met de kanalen waar jij verkoopt</h2>
          <p className="lp-lead">
            Eén API-token per marketplace en de sync draait. Verstuur je zelf?
            Download de template met vaste kolommen en één voorbeeldproduct,
            vul hem in en upload — je kosten draaien direct mee.
          </p>
        </div>
        <div className="lp-logo-grid">
          {CONNECTIONS.map((c) => (
            <div key={c.name} className="lp-logo-card">
              <span className="lp-logo-card__mark lp-logo-card__mark--word" style={{ background: c.color }}>{c.mark}</span>
              <div>
                <div className="lp-logo-card__name">{c.name}</div>
                <div className="lp-logo-card__sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "var(--cp-text-muted)", marginTop: 28, marginBottom: 0 }}>
          Andere Mirakl-marketplace nodig? Meestal binnen één à twee weken toegevoegd.
        </p>
      </div>
    </section>
  );
}
