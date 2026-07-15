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

export default function DailyDigest() {
  return (
    <section id="features" className="lp-section lp-section--soft">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Dagelijks overzicht</span>
          <h2 className="lp-h2">Dit gebeurt er vandaag in je business</h2>
          <p className="lp-lead">
            Geen portalen afstruinen. Cockpit vat elke dag samen wat er is gebeurd —
            verkoop, kosten en retouren, over al je kanalen tegelijk.
          </p>
        </div>

        <div className="lp-feature">
          <div className="lp-feature__copy">
            <span className="lp-eyebrow">Elke ochtend een vers beeld</span>
            <h3>&ldquo;Dit heb je vandaag gedaan&rdquo;</h3>
            <p>
              Eén samenvatting met je orders, omzet, ad spend en retouren van vandaag.
              Jij kiest het ritme: elke dag, of één keer per week een weekbeeld.
              Zo weet je &rsquo;s ochtends in dertig seconden hoe je ervoor staat.
            </p>
            <ul className="lp-feature__list">
              <CheckItem>Dagelijks of wekelijks — jij kiest de frequentie</CheckItem>
              <CheckItem>Verkoop, kosten en retouren in één samenvatting</CheckItem>
              <CheckItem>Alle marketplaces opgeteld, per kanaal uit te klappen</CheckItem>
            </ul>
          </div>
          <div className="lp-feature__visual">
            <DigestVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function DigestVisual() {
  const kpis = [
    { label: "Bestellingen", value: "23" },
    { label: "Omzet", value: "€2.140" },
    { label: "Ad spend", value: "€184" },
    { label: "Retouren", value: "2" },
  ];
  const events = [
    { time: "09:12", text: "14 nieuwe orders via Bol", color: "#0066B2" },
    { time: "10:40", text: "Amazon-campagne boven ROAS-target", color: "#FF9900" },
    { time: "13:05", text: "Retour aangemeld · SKU BT-204", color: "#D97706" },
    { time: "16:30", text: "Voorraad-alert: 3 SKU's onder minimum", color: "#DC2626" },
  ];
  return (
    <div style={{ width: "100%", maxWidth: 420, background: "#fff", border: "1px solid var(--cp-border)", borderRadius: 12, padding: 18, boxShadow: "0 8px 24px -8px rgba(11,37,69,0.10)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 600 }}>Vandaag · dinsdag</div>
        <span style={{ fontSize: 9, color: "var(--cp-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>Dag-update</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 14 }}>
        {kpis.map((k) => (
          <div key={k.label} style={{ background: "#FAFBFD", border: "1px solid var(--cp-border)", borderRadius: 8, padding: "8px 6px", textAlign: "center" }}>
            <div style={{ fontSize: 9, color: "var(--cp-text-muted)", marginBottom: 2 }}>{k.label}</div>
            <div style={{ fontSize: 14, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{k.value}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {events.map((e) => (
          <div key={e.time} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12 }}>
            <span style={{ fontVariantNumeric: "tabular-nums", color: "var(--cp-text-muted)", fontSize: 11, flexShrink: 0, width: 34 }}>{e.time}</span>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: e.color, flexShrink: 0 }} />
            <span style={{ color: "var(--cp-text-secondary)" }}>{e.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
