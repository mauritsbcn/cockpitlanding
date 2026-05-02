import Link from "next/link";

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, stroke: "currentColor", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function CTABlock() {
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
            <Link href="/login" className="lp-btn lp-btn--on-navy-primary">
              Plan een intake <ArrowRight size={16} />
            </Link>
            <Link href="/dashboard" className="lp-btn lp-btn--on-navy-ghost">
              Bekijk de demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
