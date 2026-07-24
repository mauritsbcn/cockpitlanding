function CheckSmIcon() {
  return (
    <svg viewBox="0 0 16 16" style={{ width: 10, height: 10, stroke: "currentColor", fill: "none", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M13 4L6 11l-3-3" />
    </svg>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <span className="lp-feature__check"><CheckSmIcon /></span>
      {children}
    </li>
  );
}

export default function CostBreakdown() {
  return (
    <section id="kosten" className="lp-section">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Kosten-transparantie</span>
          <h2 className="lp-h2">Elke kostenregel zichtbaar. Cijfers die kloppen.</h2>
          <p className="lp-lead">
            Commissies, ad spend, verzendkosten, pick &amp; pack, retouren en je eigen
            extra kostenregels — MarginGrip trekt alles af tot wat je werkelijk overhoudt.
          </p>
        </div>

        <div className="lp-feature">
          <div className="lp-feature__copy">
            <span className="lp-eyebrow">FBA én zelf verstuurd</span>
            <h3>Fulfilment door de marketplace of zelf versturen? Zie het verschil.</h3>
            <p>
              Verstuur je via FBA/LVB, zelf (FBM), of allebei? MarginGrip rekent per order
              de juiste kosten toe, zodat je per product ziet welke route het meest
              overhoudt. Voor zelf verstuurde orders staat een download-template klaar
              met vaste kolommen en één voorbeeldproduct — invullen, uploaden, klaar.
            </p>
            <ul className="lp-feature__list">
              <CheckItem>FBA/LVB-fees automatisch uit de afrekening</CheckItem>
              <CheckItem>FBM: verzend- en pick &amp; pack-kosten via je eigen template</CheckItem>
              <CheckItem>Extra kostenregels toevoegen wanneer jij dat wilt</CheckItem>
              <CheckItem>Gevalideerd tegen de marketplace-factuur, tot op de cent</CheckItem>
            </ul>
          </div>
          <div className="lp-feature__visual">
            <FbaFbmVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function FbaFbmVisual() {
  const cols = [
    {
      title: "FBA / LVB",
      sub: "Fulfilment door marketplace",
      rows: [
        { label: "Verkoopprijs", value: "€49,95", kind: "pos" },
        { label: "Commissie", value: "−€7,49", kind: "neg" },
        { label: "Fulfilment-fee", value: "−€5,80", kind: "neg" },
        { label: "Ad-toerekening", value: "−€2,10", kind: "neg" },
      ],
      net: "€34,56",
    },
    {
      title: "Zelf verstuurd",
      sub: "FBM · eigen template",
      rows: [
        { label: "Verkoopprijs", value: "€49,95", kind: "pos" },
        { label: "Commissie", value: "−€7,49", kind: "neg" },
        { label: "Verzendkosten", value: "−€6,95", kind: "neg" },
        { label: "Pick & pack", value: "−€1,60", kind: "neg" },
      ],
      net: "€33,91",
    },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: "100%", maxWidth: 440 }}>
      {cols.map((c) => (
        <div key={c.title} style={{ background: "#fff", border: "1px solid var(--cp-border)", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px -8px rgba(11,37,69,0.10)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2 }}>{c.title}</div>
          <div style={{ fontSize: 10, color: "var(--cp-text-muted)", marginBottom: 12 }}>{c.sub}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {c.rows.map((r) => (
              <div key={r.label} style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 11.5 }}>
                <span style={{ color: "var(--cp-text-secondary)" }}>{r.label}</span>
                <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: 500, color: r.kind === "pos" ? "var(--cp-text)" : "var(--cp-text-secondary)" }}>{r.value}</span>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid var(--cp-border)", marginTop: 10, paddingTop: 10, display: "flex", justifyContent: "space-between", fontSize: 12 }}>
            <span style={{ fontWeight: 600 }}>Netto per stuk</span>
            <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: 700, color: "var(--cp-success)" }}>{c.net}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
