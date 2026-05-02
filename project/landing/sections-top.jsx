// Cockpit landing — sections (top half: nav, hero, trust, problems, features)

function Nav({ onDemo, onIntake }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={'lp-nav' + (scrolled ? ' is-scrolled' : '')}>
      <div className="lp-wrap lp-nav__inner">
        <a className="lp-nav__brand" href="#top">
          <span className="lp-nav__brand-mark"></span>
          Cockpit
        </a>
        <div className="lp-nav__links">
          <a href="#features">Functies</a>
          <a href="#how">Hoe werkt het</a>
          <a href="#pricing">Prijzen</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="lp-nav__cta">
          <button className="lp-btn lp-btn--ghost lp-btn--sm" onClick={onIntake}>Plan een intake</button>
          <button className="lp-btn lp-btn--primary lp-btn--sm" onClick={onDemo}>
            Bekijk de demo <Icon name="arrow-right" size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ onDemo, onIntake }) {
  return (
    <header id="top" className="lp-hero">
      <div className="lp-wrap lp-hero__grid">
        <div className="lp-hero__copy">
          <span className="lp-eyebrow">Multi-marketplace dashboard</span>
          <h1 className="lp-h1">
            De cockpit voor je marketplace business.
          </h1>
          <p className="lp-h1-sub">Zie eindelijk wat je écht verdient.</p>
          <p className="lp-lead">
            Bol, Amazon, Praxis en Shopify in één overzicht. Verkoop, ads en marges per kanaal —
            zonder eindeloos tabs wisselen of zelf cijfers samenrekenen.
          </p>
          <div className="lp-hero__cta">
            <button className="lp-btn lp-btn--primary" onClick={onDemo}>
              Bekijk de demo <Icon name="arrow-right" size={16} />
            </button>
            <button className="lp-btn lp-btn--ghost" onClick={onIntake}>
              Plan een intake
            </button>
          </div>
          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14, fontSize: 13, color: 'var(--cp-text-muted)' }}>
            <div style={{ display: 'flex' }}>
              {Object.entries(MP_COLORS).map(([k, c], i) => (
                <span key={k} title={MP_LABELS[k]}
                  style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: c, border: '2px solid #fff',
                    marginLeft: i === 0 ? 0 : -8,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 11, fontWeight: 700,
                    fontFamily: 'Inter, system-ui',
                  }}>
                  {MP_LABELS[k][0]}
                </span>
              ))}
            </div>
            <span>Werkt vanaf dag 1 met de marketplaces die je al gebruikt</span>
          </div>
        </div>

        <div className="lp-hero__visual">
          <HeroDashboardMock />
          <FloatingCallout
            style={{ top: '4%', left: '-12%' }}
            color="#16A34A"
            label="Netto resultaat"
            value="€23.040"
            delta="+18,1%"
          />
          <FloatingCallout
            style={{ bottom: '6%', right: '-2%' }}
            color="#3A8FE0"
            label="ROAS deze maand"
            value="4,2×"
            delta="boven target"
            iconName="sparkle"
          />
        </div>
      </div>
    </header>
  );
}

function FloatingCallout({ style, color, label, value, delta, iconName }) {
  return (
    <div className="lp-mock-callout" style={style}>
      <span className="lp-mock-callout__dot" style={{ background: color }}>
        <Icon name={iconName || 'trending-up'} size={13} color="#fff" strokeWidth={2.5} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="lp-mock-callout__lbl">{label}</span>
        <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8 }}>
          <span className="lp-mock-callout__val">{value}</span>
          <span style={{ fontSize: 11, color, fontWeight: 600 }}>{delta}</span>
        </span>
      </span>
    </div>
  );
}

function TrustStrip() {
  const items = [
    { icon: 'shield', label: 'AES-256 versleutelde credentials, EU-hosted' },
    { icon: 'zap',    label: 'Live in 5 minuten — geen IT, geen integraties bouwen' },
    { icon: 'eye',    label: 'Werkelijke winst, niet alleen omzet' },
  ];
  return (
    <section className="lp-trust">
      <div className="lp-wrap lp-trust__grid">
        {items.map(it => (
          <div key={it.icon} className="lp-trust__item">
            <span className="lp-trust__icon"><Icon name={it.icon} size={18} /></span>
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---- Problem section ------------------------------------------------
function ProblemSection() {
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
            body="Bol Seller Portal, Amazon Seller Central, Mirakl en Shopify — elk met eigen filters, eigen periodes, eigen definities. Een simpele vraag als &ldquo;hoe ging vorige week?&rdquo; kost een half uur."
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

function ProblemCard({ n, title, body, visual }) {
  return (
    <article className="lp-problem">
      <span className="lp-problem__quote-mark">{n}</span>
      <h3 className="lp-problem__title">{title}</h3>
      <p className="lp-problem__body" dangerouslySetInnerHTML={{ __html: body }} />
      <div className="lp-problem__visual">{visual}</div>
    </article>
  );
}

function TabsVisual() {
  const tabs = [
    { name: 'Bol', color: MP_COLORS.bol, active: true },
    { name: 'Amazon', color: MP_COLORS.amazon },
    { name: 'Mirakl', color: MP_COLORS.praxis },
    { name: 'Shopify', color: MP_COLORS.shopify },
  ];
  return (
    <div style={{ display: 'flex', gap: 4, fontSize: 11 }}>
      {tabs.map(t => (
        <div key={t.name} style={{
          flex: 1, padding: '8px 8px',
          background: t.active ? '#fff' : '#EDF2F7',
          border: '1px solid var(--cp-border)',
          borderTop: `2px solid ${t.color}`,
          borderRadius: '4px 4px 0 0',
          color: t.active ? 'var(--cp-text)' : 'var(--cp-text-muted)',
          fontWeight: t.active ? 600 : 500,
          textAlign: 'center',
          opacity: t.active ? 1 : 0.7,
        }}>{t.name}</div>
      ))}
    </div>
  );
}

function SheetVisual() {
  return (
    <div style={{ fontFamily: 'var(--cp-font-mono)', fontSize: 10.5, lineHeight: 1.55 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, color: 'var(--cp-text-muted)' }}>
        <div style={{ borderBottom: '1px solid var(--cp-border)', padding: '2px 4px', fontWeight: 600 }}>Kanaal</div>
        <div style={{ borderBottom: '1px solid var(--cp-border)', padding: '2px 4px', fontWeight: 600 }}>Omzet</div>
        <div style={{ borderBottom: '1px solid var(--cp-border)', padding: '2px 4px', fontWeight: 600 }}>Marge</div>
        <div style={{ padding: '2px 4px', color: 'var(--cp-text)' }}>Bol</div>
        <div style={{ padding: '2px 4px', color: 'var(--cp-text)' }}>=B2*0.78</div>
        <div style={{ padding: '2px 4px', color: 'var(--cp-error)' }}>#REF!</div>
        <div style={{ padding: '2px 4px', color: 'var(--cp-text)' }}>Amazon</div>
        <div style={{ padding: '2px 4px', color: 'var(--cp-text)' }}>=SUM(C2:C8)</div>
        <div style={{ padding: '2px 4px', color: 'var(--cp-text)' }}>?</div>
      </div>
    </div>
  );
}

function AdsVisual() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 11 }}>
      <div style={{ flex: 1 }}>
        <div style={{ color: 'var(--cp-text-muted)', fontSize: 10, marginBottom: 4 }}>Ad spend</div>
        <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--cp-text)', fontVariantNumeric: 'tabular-nums' }}>€8.420</div>
      </div>
      <div style={{ width: 1, height: 32, background: 'var(--cp-border)' }}></div>
      <div style={{ flex: 1 }}>
        <div style={{ color: 'var(--cp-text-muted)', fontSize: 10, marginBottom: 4 }}>Werkelijke winst?</div>
        <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--cp-text-faint)' }}>—</div>
      </div>
    </div>
  );
}

// ---- Feature blocks (USPs) ------------------------------------------
function FeatureSection() {
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

        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Feature4 />
      </div>
    </section>
  );
}

// 1. Alles op één plek
function Feature1() {
  return (
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
          {['Eén dashboard, vier marketplaces',
            'Vergelijk kanalen direct, zonder export',
            'Periodes, valuta en BTW al voor je gestandaardiseerd'].map(t => (
            <li key={t}><span className="lp-feature__check"><Icon name="check-sm" size={10} strokeWidth={3} /></span>{t}</li>
          ))}
        </ul>
      </div>
      <div className="lp-feature__visual">
        <FeatureVisual1 />
      </div>
    </div>
  );
}

function FeatureVisual1() {
  // 4 mini cards stacking into one
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 420, height: 320 }}>
      {[
        { mp: 'bol',     y: 0,   x: 0,   rot: -4 },
        { mp: 'amazon',  y: 16,  x: 60,  rot: -1 },
        { mp: 'praxis',  y: 32,  x: 120, rot: 2 },
        { mp: 'shopify', y: 48,  x: 180, rot: 5 },
      ].map((c, i) => (
        <div key={c.mp}
          style={{
            position: 'absolute',
            top: c.y, left: c.x,
            width: 180,
            background: '#fff',
            border: '1px solid var(--cp-border)',
            borderRadius: 10,
            boxShadow: '0 8px 16px -4px rgba(11,37,69,0.12)',
            padding: 14,
            transform: `rotate(${c.rot}deg)`,
            zIndex: i,
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ width: 18, height: 18, borderRadius: 4, background: MP_COLORS[c.mp], display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 700 }}>{MP_LABELS[c.mp][0]}</span>
            <span style={{ fontSize: 12, fontWeight: 600 }}>{MP_LABELS[c.mp]}</span>
          </div>
          <div style={{ fontSize: 9, color: 'var(--cp-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>Omzet</div>
          <div style={{ fontSize: 16, fontWeight: 700, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em' }}>
            €{[71, 44, 28, 14][i]}.{['420', '180', '760', '060'][i]}
          </div>
          <div style={{ marginTop: 8, height: 4, borderRadius: 2, background: '#F0F4F8', overflow: 'hidden' }}>
            <div style={{ width: `${[100, 62, 39, 20][i]}%`, height: '100%', background: MP_COLORS[c.mp] }} />
          </div>
        </div>
      ))}
      {/* Total card */}
      <div style={{
        position: 'absolute', bottom: -8, right: -8,
        background: 'var(--cp-navy-900)', color: '#fff',
        padding: '14px 18px', borderRadius: 10,
        boxShadow: '0 16px 40px -8px rgba(11,37,69,0.32)',
        zIndex: 10,
      }}>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>Totaal</div>
        <div style={{ fontSize: 22, fontWeight: 700, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.015em' }}>€159.420</div>
      </div>
    </div>
  );
}

// 2. Werkelijke winst
function Feature2() {
  return (
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
          {['Automatische P&L per kanaal',
            'Ads en commissies in één marge-formule',
            'TACoS, ROAS en netto-resultaat naast elkaar'].map(t => (
            <li key={t}><span className="lp-feature__check"><Icon name="check-sm" size={10} strokeWidth={3} /></span>{t}</li>
          ))}
        </ul>
      </div>
      <div className="lp-feature__visual">
        <FeatureVisual2 />
      </div>
    </div>
  );
}

function FeatureVisual2() {
  // P&L waterfall
  const rows = [
    { label: 'Bruto omzet',       value: '+€159.420', kind: 'pos', size: 100 },
    { label: 'Commissies (−18%)', value: '−€28.700',  kind: 'neg', size: 18 },
    { label: 'Fulfilment + verzending', value: '−€11.200', kind: 'neg', size: 7 },
    { label: 'Retouren',          value: '−€7.300',   kind: 'neg', size: 5 },
    { label: 'Ad spend',          value: '−€8.420',   kind: 'neg', size: 5 },
    { label: 'COGS',              value: '−€80.760',  kind: 'cogs', size: 51 },
    { label: 'Netto resultaat',   value: '+€23.040',  kind: 'final', size: 14 },
  ];
  return (
    <div style={{ width: '100%', maxWidth: 420, background: '#fff', border: '1px solid var(--cp-border)', borderRadius: 12, padding: 18, boxShadow: '0 8px 24px -8px rgba(11,37,69,0.10)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: 12, fontWeight: 600 }}>P&amp;L · november</div>
        <span style={{ fontSize: 9, color: 'var(--cp-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Auto-gegenereerd</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {rows.map(r => {
          const color = r.kind === 'pos' ? 'var(--cp-text)' :
                        r.kind === 'final' ? 'var(--cp-success)' :
                        r.kind === 'cogs' ? 'var(--cp-text-secondary)' : 'var(--cp-text-secondary)';
          const barColor = r.kind === 'pos' ? 'var(--cp-navy-700)' :
                           r.kind === 'final' ? 'var(--cp-success)' :
                           r.kind === 'cogs' ? '#A0AEC0' : 'var(--cp-error)';
          return (
            <div key={r.label} style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 10, fontSize: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: 'var(--cp-text-secondary)', flex: '0 0 130px', fontWeight: r.kind === 'final' ? 600 : 400 }}>{r.label}</span>
                <span style={{ flex: 1, height: 6, borderRadius: 2, background: '#F0F4F8', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: r.size + '%', background: barColor, borderRadius: 2 }}/>
                </span>
              </div>
              <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: r.kind === 'final' ? 700 : 500, color, fontSize: r.kind === 'final' ? 13 : 12 }}>{r.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 3. Veilig
function Feature3() {
  return (
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
          {['AES-256 versleutelde credentials',
            'EU-hosted infrastructuur (AWS Frankfurt)',
            'Multi-tenant met data-isolatie per klant',
            'Audit-log van alle handmatige acties'].map(t => (
            <li key={t}><span className="lp-feature__check"><Icon name="check-sm" size={10} strokeWidth={3} /></span>{t}</li>
          ))}
        </ul>
      </div>
      <div className="lp-feature__visual">
        <FeatureVisual3 />
      </div>
    </div>
  );
}

function FeatureVisual3() {
  return (
    <div style={{ position: 'relative', width: 280, height: 280 }}>
      <svg viewBox="0 0 280 280" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {/* concentric rings */}
        <circle cx="140" cy="140" r="130" fill="none" stroke="rgba(58,143,224,0.12)" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="140" cy="140" r="100" fill="none" stroke="rgba(58,143,224,0.18)" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="140" cy="140" r="70"  fill="none" stroke="rgba(58,143,224,0.24)" strokeWidth="1" strokeDasharray="3 4" />
      </svg>
      {/* center */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 96, height: 96, borderRadius: '50%',
        background: 'var(--cp-navy-900)', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 12px 32px -8px rgba(11,37,69,0.40)',
      }}>
        <Icon name="shield" size={36} color="#fff" strokeWidth={1.6} />
      </div>
      {/* satellite badges */}
      {[
        { angle: -90, label: 'AES-256', icon: 'lock' },
        { angle: 30, label: 'EU-only',  icon: 'globe' },
        { angle: 150, label: 'Multi-tenant', icon: 'layers' },
      ].map(b => {
        const x = 140 + 100 * Math.cos((b.angle * Math.PI) / 180);
        const y = 140 + 100 * Math.sin((b.angle * Math.PI) / 180);
        return (
          <div key={b.label} style={{
            position: 'absolute', left: x, top: y, transform: 'translate(-50%, -50%)',
            background: '#fff', border: '1px solid var(--cp-border)',
            borderRadius: 999, padding: '8px 14px',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12, fontWeight: 600, color: 'var(--cp-text)',
            boxShadow: '0 6px 16px -4px rgba(11,37,69,0.14)',
            whiteSpace: 'nowrap',
          }}>
            <Icon name={b.icon} size={13} color="var(--cp-blue-500)" strokeWidth={2.2} />{b.label}
          </div>
        );
      })}
    </div>
  );
}

// 4. Operator-built testimonial
function Feature4() {
  return (
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
          <div className="lp-testimonial__name-block">
            <div className="lp-testimonial__name">Maurits</div>
            <div className="lp-testimonial__role">Founder, Maurits Group</div>
          </div>
        </div>
        <div className="lp-testimonial__divider" />
        <div className="lp-testimonial__brands">
          <span className="lp-testimonial__brands-label">Eigen merken die op Cockpit draaien</span>
          <div className="lp-testimonial__brand-row">
            <div className="lp-brand-card">
              <div className="lp-brand-card__logo" style={{ background: '#0B2545' }}>HP</div>
              <div className="lp-brand-card__meta">
                <div className="lp-brand-card__name">Hocus Picus</div>
                <div className="lp-brand-card__sub">Mediterrane planten · 4 kanalen</div>
              </div>
            </div>
            <div className="lp-brand-card">
              <div className="lp-brand-card__logo" style={{ background: '#3A8FE0' }}>m.</div>
              <div className="lp-brand-card__meta">
                <div className="lp-brand-card__name">meubelshop.nl</div>
                <div className="lp-brand-card__sub">Meubels · 3 kanalen</div>
              </div>
            </div>
            <div className="lp-brand-card">
              <div className="lp-brand-card__logo" style={{ background: '#1B3E6F' }}>MG</div>
              <div className="lp-brand-card__meta">
                <div className="lp-brand-card__name">Maurits Group</div>
                <div className="lp-brand-card__sub">Holding · brengt Cockpit naar buiten</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  Nav, Hero, TrustStrip,
  ProblemSection, FeatureSection,
});
