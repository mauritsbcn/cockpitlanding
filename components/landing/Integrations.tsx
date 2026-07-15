const CONNECTIONS = [
  { name: "Bol.com", sub: "Verkoop + Ads + Retouren", logo: "/logos/bol.svg", logoH: 20 },
  { name: "Amazon", sub: "NL / BE · Verkoop + Ads", logo: "/logos/amazon.svg", logoH: 22 },
  { name: "Praxis", sub: "via Mirakl", logo: "/logos/praxis.svg", logoH: 18 },
  { name: "Brico", sub: "via Mirakl · beta", logo: "/logos/brico.svg", logoH: 24 },
  { name: "Shopify", sub: "Eigen webshop", logo: "/logos/shopify.svg", logoH: 24 },
  { name: "Zelf verstuurd", sub: "FBM · CSV-template", logo: null, logoH: 0 },
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
              <span className="lp-logo-card__img">
                {c.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.logo} alt={`${c.name} logo`} style={{ height: c.logoH, width: "auto", maxWidth: 96 }} />
                ) : (
                  <span className="lp-logo-card__mark lp-logo-card__mark--word" style={{ background: "#0B2545" }}>CSV ↑</span>
                )}
              </span>
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
