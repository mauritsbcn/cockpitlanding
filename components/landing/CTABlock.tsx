import { TRIAL_URL, SETUP_CALL_URL } from "@/lib/site";

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
            Start 30 dagen gratis, of plan eerst de gratis introductie-call van een uur.
            We kijken samen naar je doel, je producten en je kanalen — en je vertrekt
            met een concrete roadmap.
          </p>
          <div className="lp-cta__buttons">
            <a href={TRIAL_URL} className="lp-btn lp-btn--on-navy-primary">
              Start gratis trial <ArrowRight size={16} />
            </a>
            <a href={SETUP_CALL_URL} className="lp-btn lp-btn--on-navy-ghost">
              Plan gratis introductie-call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
