export default function ProblemSection() {
  return (
    <section className="lp-section">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Het probleem</span>
          <h2 className="lp-h2">Verkopen op meerdere kanalen? Dan ken je dit.</h2>
          <p className="lp-lead">
            De meeste sellers verliezen 4–6 uur per week aan handwerk dat hun dashboard zou moeten doen.
            Hier zijn de drie patronen die we het vaakst horen.
          </p>
        </div>
        <div className="lp-problems">
          <ProblemCard
            n="01"
            title="Vier tabs open, één antwoord"
            body='Bol Seller Portal, Amazon Seller Central, Mirakl en Shopify — elk met eigen filters, eigen periodes, eigen definities. Een simpele vraag als &ldquo;hoe ging vorige week?&rdquo; kost een half uur.'
            visual={<TabsVisual />}
          />
          <ProblemCard
            n="02"
            title="Excel als single source of truth"
            body="Je downloadt CSV's, plakt cijfers in een sheet, telt zelf op. Eén kolom verschuift en het klopt nergens meer. En morgen mag je het opnieuw doen."
            visual={<SheetVisual />}
          />
          <ProblemCard
            n="03"
            title="Ads en verkoop in twee werelden"
            body="Je ziet wat je uitgeeft. Je ziet wat je verkoopt. Maar wat een campagne werkelijk oplevert — ná commissies, ná retouren — blijft een gevoel."
            visual={<AdsVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ n, title, body, visual }: { n: string; title: string; body: string; visual: React.ReactNode }) {
  return (
    <article className="lp-problem">
      <span className="lp-problem__quote-mark">{n}</span>
      <h3 className="lp-problem__title">{title}</h3>
      <p className="lp-problem__body" dangerouslySetInnerHTML={{ __html: body }} />
      <div className="lp-problem__visual">{visual}</div>
    </article>
  );
}

const MP_COLORS = {
  bol: "#0066B2",
  amazon: "#FF9900",
  praxis: "#00843D",
  shopify: "#5A8E3A",
};

function TabsVisual() {
  const tabs = [
    { name: "Bol", color: MP_COLORS.bol, active: true },
    { name: "Amazon", color: MP_COLORS.amazon },
    { name: "Mirakl", color: MP_COLORS.praxis },
    { name: "Shopify", color: MP_COLORS.shopify },
  ];
  return (
    <div style={{ display: "flex", gap: 4, fontSize: 11 }}>
      {tabs.map((t) => (
        <div
          key={t.name}
          style={{
            flex: 1, padding: "8px 8px",
            background: t.active ? "#fff" : "#EDF2F7",
            border: "1px solid var(--cp-border)",
            borderTop: `2px solid ${t.color}`,
            borderRadius: "4px 4px 0 0",
            color: t.active ? "var(--cp-text)" : "var(--cp-text-muted)",
            fontWeight: t.active ? 600 : 500,
            textAlign: "center",
            opacity: t.active ? 1 : 0.7,
          }}
        >
          {t.name}
        </div>
      ))}
    </div>
  );
}

function SheetVisual() {
  return (
    <div style={{ fontFamily: "var(--cp-font-mono)", fontSize: 10.5, lineHeight: 1.55 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, color: "var(--cp-text-muted)" }}>
        {["Kanaal", "Omzet", "Marge"].map((h) => (
          <div key={h} style={{ borderBottom: "1px solid var(--cp-border)", padding: "2px 4px", fontWeight: 600 }}>{h}</div>
        ))}
        <div style={{ padding: "2px 4px", color: "var(--cp-text)" }}>Bol</div>
        <div style={{ padding: "2px 4px", color: "var(--cp-text)" }}>=B2*0.78</div>
        <div style={{ padding: "2px 4px", color: "var(--cp-error)" }}>#REF!</div>
        <div style={{ padding: "2px 4px", color: "var(--cp-text)" }}>Amazon</div>
        <div style={{ padding: "2px 4px", color: "var(--cp-text)" }}>=SUM(C2:C8)</div>
        <div style={{ padding: "2px 4px", color: "var(--cp-text)" }}>?</div>
      </div>
    </div>
  );
}

function AdsVisual() {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 11 }}>
      <div style={{ flex: 1 }}>
        <div style={{ color: "var(--cp-text-muted)", fontSize: 10, marginBottom: 4 }}>Ad spend</div>
        <div style={{ fontWeight: 700, fontSize: 16, color: "var(--cp-text)", fontVariantNumeric: "tabular-nums" }}>€8.420</div>
      </div>
      <div style={{ width: 1, height: 32, background: "var(--cp-border)" }} />
      <div style={{ flex: 1 }}>
        <div style={{ color: "var(--cp-text-muted)", fontSize: 10, marginBottom: 4 }}>Werkelijke winst?</div>
        <div style={{ fontWeight: 700, fontSize: 16, color: "var(--cp-text-faint)" }}>—</div>
      </div>
    </div>
  );
}
