const MP_COLORS = {
  bol: "#0066B2",
  amazon: "#FF9900",
  praxis: "#00843D",
  shopify: "#5A8E3A",
} as const;

const MP_LABELS = { bol: "Bol", amazon: "Amazon", praxis: "Praxis", shopify: "Shopify" } as const;
type MpKey = keyof typeof MP_COLORS;

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

export default function FeatureSection() {
  return (
    <section id="features" className="lp-section lp-section--soft">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Wat Cockpit doet</span>
          <h2 className="lp-h2">Vier dingen, geen ruis</h2>
          <p className="lp-lead">
            Geen 47 features waar je nooit naar kijkt. Vier dingen die je elke ochtend
            opent — en die je tijd en marge teruggeven.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="lp-feature">
          <div className="lp-feature__copy">
            <span className="lp-eyebrow">01 · Alles op één plek</span>
            <h3>Vier marketplaces, één overzicht</h3>
            <p>
              Open Cockpit, zie alles. Bol, Amazon, Praxis en Shopify worden samen opgeteld —
              met dezelfde definities, dezelfde periodes, dezelfde valuta. Filteren per
              kanaal kan altijd, maar standaard zie je het totaalplaatje.
            </p>
            <ul className="lp-feature__list">
              <CheckItem>Eén dashboard, vier marketplaces</CheckItem>
              <CheckItem>Vergelijk kanalen direct, zonder export</CheckItem>
              <CheckItem>Periodes, valuta en BTW al voor je gestandaardiseerd</CheckItem>
            </ul>
          </div>
          <div className="lp-feature__visual">
            <FeatureVisual1 />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="lp-feature lp-feature--reverse">
          <div className="lp-feature__copy">
            <span className="lp-eyebrow">02 · Werkelijke winst</span>
            <h3>Niet je omzet. Je marge.</h3>
            <p>
              Cockpit trekt commissies, fulfilment-fees, retouren en advertentiekosten
              automatisch af. Wat overblijft is de cijferreeks die er écht toe doet —
              per product, per kanaal, per dag.
            </p>
            <ul className="lp-feature__list">
              <CheckItem>Automatische P&amp;L per kanaal</CheckItem>
              <CheckItem>Ads en commissies in één marge-formule</CheckItem>
              <CheckItem>TACoS, ROAS en netto-resultaat naast elkaar</CheckItem>
            </ul>
          </div>
          <div className="lp-feature__visual">
            <FeatureVisual2 />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="lp-feature">
          <div className="lp-feature__copy">
            <span className="lp-eyebrow">03 · Veilig vanaf dag 1</span>
            <h3>Je credentials horen niet in een chat</h3>
            <p>
              Cockpit is multi-tenant gebouwd met versleuteling per klant. API-tokens
              worden AES-256 versleuteld, elke klant krijgt zijn eigen sleutel, alle
              data staat op EU-servers. Geen Slack-berichten, geen gedeelde sheets.
            </p>
            <ul className="lp-feature__list">
              <CheckItem>AES-256 versleutelde credentials</CheckItem>
              <CheckItem>EU-hosted infrastructuur (AWS Frankfurt)</CheckItem>
              <CheckItem>Multi-tenant met data-isolatie per klant</CheckItem>
              <CheckItem>Audit-log van alle handmatige acties</CheckItem>
            </ul>
          </div>
          <div className="lp-feature__visual">
            <FeatureVisual3 />
          </div>
        </div>

        {/* Feature 4 — Testimonial */}
        <div className="lp-testimonial">
          <div className="lp-testimonial__inner">
            <div className="lp-testimonial__quote-mark" aria-hidden="true">&ldquo;</div>
            <blockquote className="lp-testimonial__quote">
              We runnen zelf <strong>Hocus Picus</strong> en <strong>meubelshop.nl</strong> —
              twee merken die verkopen op Bol, Amazon, Praxis en Shopify.
              Cockpit is wat we voor onszelf bouwden, omdat geen enkele bestaande tool ons
              écht inzicht gaf in onze marges. Elke feature die je hier ziet, gebruiken we
              dagelijks zelf.
            </blockquote>
            <div className="lp-testimonial__attrib">
              <div className="lp-testimonial__avatar" aria-hidden="true">M</div>
              <div>
                <div className="lp-testimonial__name">Maurits</div>
                <div className="lp-testimonial__role">Founder, Maurits Group</div>
              </div>
            </div>
            <div className="lp-testimonial__divider" />
            <span className="lp-testimonial__brands-label">Eigen merken die op Cockpit draaien</span>
            <div className="lp-testimonial__brand-row">
              <div className="lp-brand-card">
                <div className="lp-brand-card__logo" style={{ background: "#0B2545" }}>HP</div>
                <div className="lp-brand-card__meta">
                  <div className="lp-brand-card__name">Hocus Picus</div>
                  <div className="lp-brand-card__sub">Mediterrane planten · 4 kanalen</div>
                </div>
              </div>
              <div className="lp-brand-card">
                <div className="lp-brand-card__logo" style={{ background: "#3A8FE0" }}>m.</div>
                <div className="lp-brand-card__meta">
                  <div className="lp-brand-card__name">meubelshop.nl</div>
                  <div className="lp-brand-card__sub">Meubels · 3 kanalen</div>
                </div>
              </div>
              <div className="lp-brand-card">
                <div className="lp-brand-card__logo" style={{ background: "#1B3E6F" }}>MG</div>
                <div className="lp-brand-card__meta">
                  <div className="lp-brand-card__name">Maurits Group</div>
                  <div className="lp-brand-card__sub">Holding · brengt Cockpit naar buiten</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureVisual1() {
  const cards = [
    { mp: "bol" as MpKey, y: 0, x: 0, rot: -4, revenue: "€71.420", bar: 100 },
    { mp: "amazon" as MpKey, y: 16, x: 60, rot: -1, revenue: "€44.180", bar: 62 },
    { mp: "praxis" as MpKey, y: 32, x: 120, rot: 2, revenue: "€28.760", bar: 39 },
    { mp: "shopify" as MpKey, y: 48, x: 180, rot: 5, revenue: "€14.060", bar: 20 },
  ];
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 420, height: 320 }}>
      {cards.map((c, i) => (
        <div
          key={c.mp}
          style={{
            position: "absolute", top: c.y, left: c.x, width: 180,
            background: "#fff", border: "1px solid var(--cp-border)",
            borderRadius: 10, boxShadow: "0 8px 16px -4px rgba(11,37,69,0.12)",
            padding: 14, transform: `rotate(${c.rot}deg)`, zIndex: i,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ width: 18, height: 18, borderRadius: 4, background: MP_COLORS[c.mp], display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, fontWeight: 700 }}>
              {MP_LABELS[c.mp][0]}
            </span>
            <span style={{ fontSize: 12, fontWeight: 600 }}>{MP_LABELS[c.mp]}</span>
          </div>
          <div style={{ fontSize: 9, color: "var(--cp-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>Omzet</div>
          <div style={{ fontSize: 16, fontWeight: 700, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.01em" }}>{c.revenue}</div>
          <div style={{ marginTop: 8, height: 4, borderRadius: 2, background: "#F0F4F8", overflow: "hidden" }}>
            <div style={{ width: `${c.bar}%`, height: "100%", background: MP_COLORS[c.mp] }} />
          </div>
        </div>
      ))}
      <div style={{
        position: "absolute", bottom: -8, right: -8,
        background: "var(--cp-navy-900)", color: "#fff",
        padding: "14px 18px", borderRadius: 10,
        boxShadow: "0 16px 40px -8px rgba(11,37,69,0.32)", zIndex: 10,
      }}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>Totaal</div>
        <div style={{ fontSize: 22, fontWeight: 700, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.015em" }}>€159.420</div>
      </div>
    </div>
  );
}

function FeatureVisual2() {
  const rows = [
    { label: "Bruto omzet", value: "+€159.420", kind: "pos", size: 100 },
    { label: "Commissies (−18%)", value: "−€28.700", kind: "neg", size: 18 },
    { label: "Fulfilment + verzending", value: "−€11.200", kind: "neg", size: 7 },
    { label: "Retouren", value: "−€7.300", kind: "neg", size: 5 },
    { label: "Ad spend", value: "−€8.420", kind: "neg", size: 5 },
    { label: "COGS", value: "−€80.760", kind: "cogs", size: 51 },
    { label: "Netto resultaat", value: "+€23.040", kind: "final", size: 14 },
  ];
  return (
    <div style={{ width: "100%", maxWidth: 420, background: "#fff", border: "1px solid var(--cp-border)", borderRadius: 12, padding: 18, boxShadow: "0 8px 24px -8px rgba(11,37,69,0.10)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 600 }}>P&amp;L · november</div>
        <span style={{ fontSize: 9, color: "var(--cp-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>Auto-gegenereerd</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {rows.map((r) => {
          const color = r.kind === "pos" ? "var(--cp-text)" : r.kind === "final" ? "var(--cp-success)" : "var(--cp-text-secondary)";
          const barColor = r.kind === "pos" ? "var(--cp-navy-700)" : r.kind === "final" ? "var(--cp-success)" : r.kind === "cogs" ? "#A0AEC0" : "var(--cp-error)";
          return (
            <div key={r.label} style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 10, fontSize: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "var(--cp-text-secondary)", flex: "0 0 130px", fontWeight: r.kind === "final" ? 600 : 400 }}>{r.label}</span>
                <span style={{ flex: 1, height: 6, borderRadius: 2, background: "#F0F4F8", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${r.size}%`, background: barColor, borderRadius: 2 }} />
                </span>
              </div>
              <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: r.kind === "final" ? 700 : 500, color, fontSize: r.kind === "final" ? 13 : 12 }}>{r.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FeatureVisual3() {
  const badges = [
    { angle: -90, label: "AES-256", icon: "lock" },
    { angle: 30, label: "EU-only", icon: "globe" },
    { angle: 150, label: "Multi-tenant", icon: "layers" },
  ];
  return (
    <div style={{ position: "relative", width: 280, height: 280 }}>
      <svg viewBox="0 0 280 280" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <circle cx="140" cy="140" r="130" fill="none" stroke="rgba(58,143,224,0.12)" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="140" cy="140" r="100" fill="none" stroke="rgba(58,143,224,0.18)" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="140" cy="140" r="70" fill="none" stroke="rgba(58,143,224,0.24)" strokeWidth="1" strokeDasharray="3 4" />
      </svg>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 96, height: 96, borderRadius: "50%",
        background: "var(--cp-navy-900)", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 12px 32px -8px rgba(11,37,69,0.40)",
      }}>
        <ShieldBigIcon />
      </div>
      {badges.map((b) => {
        const x = 140 + 100 * Math.cos((b.angle * Math.PI) / 180);
        const y = 140 + 100 * Math.sin((b.angle * Math.PI) / 180);
        return (
          <div key={b.label} style={{
            position: "absolute", left: x, top: y, transform: "translate(-50%, -50%)",
            background: "#fff", border: "1px solid var(--cp-border)", borderRadius: 999,
            padding: "8px 14px", display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 12, fontWeight: 600, color: "var(--cp-text)",
            boxShadow: "0 6px 16px -4px rgba(11,37,69,0.14)", whiteSpace: "nowrap",
          }}>
            <BadgeIcon name={b.icon} />
            {b.label}
          </div>
        );
      })}
    </div>
  );
}

function ShieldBigIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 36, height: 36, stroke: "#fff", fill: "none", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function BadgeIcon({ name }: { name: string }) {
  const s = { width: 13, height: 13, stroke: "var(--cp-blue-500)", fill: "none" as const, strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "lock": return <svg viewBox="0 0 24 24" style={s}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>;
    case "globe": return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /></svg>;
    case "layers": return <svg viewBox="0 0 24 24" style={s}><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
    default: return null;
  }
}
