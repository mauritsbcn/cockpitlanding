// Cockpit landing — sections (bottom half: how-it-works, pricing, faq, cta, footer)

function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: 'Connectie toevoegen',
      body: 'Plak je API-token van Bol, Amazon, Praxis of Shopify. Eenmalig, één veld per kanaal — geen integratie bouwen.',
    },
    {
      n: 2,
      title: 'Sync start automatisch',
      body: 'Cockpit haalt je laatste 90 dagen op, normaliseert valuta en BTW, en koppelt orders aan campagnes. Klaar binnen minuten.',
    },
    {
      n: 3,
      title: 'Inzicht in je marges',
      body: 'Open het overzicht en zie netto-resultaat per kanaal, per product, per dag. Daarna gaat de sync zichzelf bij.',
    },
  ];
  return (
    <section id="how" className="lp-section">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Hoe werkt het</span>
          <h2 className="lp-h2">Live in vijf minuten. Geen IT.</h2>
          <p className="lp-lead">
            Drie stappen, één keer. Daarna draait Cockpit op de achtergrond en zie je
            elke ochtend een vers beeld van je hele operatie.
          </p>
        </div>
        <div className="lp-steps">
          {steps.map(s => (
            <div key={s.n} className="lp-step">
              <span className="lp-step__num">{String(s.n).padStart(2, '0')}</span>
              <h3 className="lp-step__title">{s.title}</h3>
              <p className="lp-step__body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ onIntake }) {
  const features = [
    'Onbeperkt aantal marketplaces',
    'Onbeperkt aantal SKU\u2019s',
    'Automatische P&L per kanaal',
    'Ad-spend & ROAS in één view',
    'Tot 5 gebruikers per account',
    'E-mail support binnen 24u',
    'Audit-log & data-export',
    'Onboarding-call met operator',
  ];
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
            {features.map(f => (
              <li key={f}>
                <span className="lp-feature__check" style={{ marginTop: 2 }}>
                  <Icon name="check-sm" size={10} strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="lp-btn lp-btn--primary" onClick={onIntake} style={{ flex: 1, minWidth: 200 }}>
              Plan een intake <Icon name="arrow-right" size={16} />
            </button>
            <button className="lp-btn lp-btn--ghost" style={{ flex: 1, minWidth: 200 }}>
              Bekijk de demo
            </button>
          </div>
          <p style={{ fontSize: 12, color: 'var(--cp-text-muted)', marginTop: 16, marginBottom: 0, textAlign: 'center' }}>
            Geen creditcard nodig · 30 dagen pilot mogelijk
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: 'Welke marketplaces ondersteunen jullie?',
      a: 'Bij launch: Bol.com, Amazon (NL/DE), Praxis (Mirakl) en Shopify. Brico is in beta. Andere Mirakl-marketplaces — Carrefour, Decathlon, MediaMarkt — voegen we toe op aanvraag, meestal binnen één à twee weken.',
    },
    {
      q: 'Hoe veilig is mijn data?',
      a: 'API-credentials worden AES-256 versleuteld met een unieke sleutel per klant. Alle data staat op AWS in Frankfurt (eu-central-1). Wij zien je tokens nooit in plaintext en kunnen ze niet uitlezen. Audit-log van elke handmatige actie is voor jou inzichtelijk.',
    },
    {
      q: 'Hoe lang duurt het om live te gaan?',
      a: 'Vanaf intake: dezelfde dag een demo-account met je eigen data. Productie-setup duurt vijf minuten — één API-token per marketplace plakken. De eerste 90-dagen-historie is binnen 10 minuten gesynchroniseerd.',
    },
    {
      q: 'Wat kost het precies?',
      a: 'Het standaardabonnement ligt tussen €99 en €299 per maand, afhankelijk van het aantal marketplaces en SKU\u2019s. We stellen de prijs vast in de intake — geen verborgen extra\u2019s, geen seat-fees, geen per-order-toeslagen.',
    },
    {
      q: 'Zit ik vast aan een contract?',
      a: 'Nee. Maandelijks opzegbaar, zonder reden, zonder boete. Je data kun je op elk moment exporteren als CSV of via onze API.',
    },
    {
      q: 'Van wie is de data die jullie verzamelen?',
      a: 'Van jou. Wij verwerken alleen wat nodig is om je dashboard te draaien, gebruiken je data nooit voor benchmarking of trainen van modellen, en je kunt op verzoek alles laten verwijderen. AVG-compliant, verwerkersovereenkomst standaard.',
    },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="lp-section">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">FAQ</span>
          <h2 className="lp-h2">Wat sellers vaak vragen</h2>
        </div>
        <div className="lp-faq">
          {items.map((it, i) => (
            <div key={i} className="lp-faq__item" data-open={open === i}>
              <button
                className="lp-faq__btn"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{it.q}</span>
                <span className="lp-faq__chev"><Icon name="plus" size={12} strokeWidth={2.5} /></span>
              </button>
              <div className="lp-faq__panel">
                <div className="lp-faq__panel-inner">
                  <p className="lp-faq__answer">{it.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABlock({ onDemo, onIntake }) {
  return (
    <section className="lp-section lp-section--tight">
      <div className="lp-wrap">
        <div className="lp-cta">
          <h2>Klaar om te zien wat je écht verdient?</h2>
          <p>
            Plan een intake van 20 minuten. We zetten je demo-account klaar met je
            eigen marketplaces, zodat je in dezelfde call kijkt naar je echte cijfers.
          </p>
          <div className="lp-cta__buttons">
            <button className="lp-btn lp-btn--on-navy-primary" onClick={onIntake}>
              Plan een intake <Icon name="arrow-right" size={16} />
            </button>
            <button className="lp-btn lp-btn--on-navy-ghost" onClick={onDemo}>
              Bekijk de demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: 'Product',
      links: ['Functies', 'Prijzen', 'Roadmap', 'Status', 'Demo aanvragen'],
    },
    {
      title: 'Bedrijf',
      links: ['Over Maurits Group', 'Hocus Picus', 'meubelshop.nl', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Help-center', 'API-docs', 'Blog', 'Changelog'],
    },
  ];
  return (
    <footer className="lp-footer">
      <div className="lp-wrap">
        <div className="lp-footer__grid">
          <div>
            <a className="lp-nav__brand" href="#top" style={{ fontSize: 19 }}>
              <span className="lp-nav__brand-mark"></span>
              Cockpit
            </a>
            <p className="lp-footer__brand-blurb">
              Multi-marketplace dashboard voor Nederlandse en Belgische e-commerce sellers.
              Een product van <strong style={{ color: 'var(--cp-text)' }}>Maurits Group</strong>.
            </p>
          </div>
          {cols.map(c => (
            <div key={c.title} className="lp-footer__col">
              <div className="lp-footer__col-title">{c.title}</div>
              <ul>
                {c.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="lp-footer__bottom">
          <span>© 2025 Maurits Group B.V. · KvK 12345678</span>
          <div className="lp-footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Voorwaarden</a>
            <a href="#">Verwerkersovereenkomst</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  HowItWorks, Pricing, FAQ, CTABlock, Footer,
});
