export default function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "Gratis setup-call (t.w.v. €300)",
      body: "Eén uur, kosteloos. We koppelen sámen je marketplaces, zetten je kostprijzen klaar en lopen door je eerste cijfers. Je verlaat de call met een werkend dashboard.",
    },
    {
      n: 2,
      title: "Connectie toevoegen",
      body: "Plak je API-token van Bol, Amazon, Praxis of Shopify. Verstuur je zelf? Vul de kant-en-klare template in en upload.",
    },
    {
      n: 3,
      title: "Sync start automatisch",
      body: "MarginGrip haalt je laatste 90 dagen op, normaliseert valuta en BTW, en koppelt orders aan campagnes. Klaar binnen minuten.",
    },
    {
      n: 4,
      title: "Elke dag een update",
      body: "Vanaf dan zie je elke ochtend wat er vandaag gebeurt — verkoop, kosten en retouren. Dagelijks of wekelijks, jij kiest.",
    },
  ];

  return (
    <section id="how" className="lp-section">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Hoe werkt het</span>
          <h2 className="lp-h2">Live in vijf minuten. Geen IT.</h2>
          <p className="lp-lead">
            Vier stappen, één keer. Daarna draait MarginGrip op de achtergrond en zie je
            elke ochtend een vers beeld van je hele operatie.
          </p>
        </div>
        <div className="lp-steps">
          {steps.map((s) => (
            <div key={s.n} className="lp-step">
              <span className="lp-step__num">{String(s.n).padStart(2, "0")}</span>
              <h3 className="lp-step__title">{s.title}</h3>
              <p className="lp-step__body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
