import { SETUP_CALL_URL } from "@/lib/site";

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size, stroke: "currentColor", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Payback() {
  return (
    <section id="terugverdienen" className="lp-section">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Terugverdientijd</span>
          <h2 className="lp-h2">Verdient zichzelf in de eerste week terug</h2>
          <p className="lp-lead">
            Portalen openen, CSV&rsquo;s downloaden, cijfers overtypen in een sheet —
            de meeste sellers zijn daar 4 tot 6 uur per week aan kwijt. Die uren
            verdwijnen, en je beslissingen worden beter omdat je op kloppende
            cijfers stuurt.
          </p>
        </div>

        <div className="lp-payback">
          <div className="lp-payback__cell">
            <div className="lp-payback__num">4–6 uur</div>
            <div className="lp-payback__lbl">per week aan handwerk dat verdwijnt</div>
          </div>
          <div className="lp-payback__cell">
            <div className="lp-payback__num">30 sec</div>
            <div className="lp-payback__lbl">&rsquo;s ochtends om te weten hoe je ervoor staat</div>
          </div>
          <div className="lp-payback__cell">
            <div className="lp-payback__num">€49,95</div>
            <div className="lp-payback__lbl">per maand — minder dan één uur handwerk kost</div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href={SETUP_CALL_URL} className="lp-btn lp-btn--ghost">
            Reken het na in een gratis introductie-call <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
