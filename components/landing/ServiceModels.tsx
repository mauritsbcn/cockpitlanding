import { TRIAL_MAILTO, INTRO_CALL_MAILTO, AGENCY_MAILTO } from "@/lib/site";

/**
 * Drie manieren om MarginGrip te gebruiken: zelf, met begeleiding, of volledig
 * uitbesteed. Zelfde software eronder — de klant kan doorgroeien van
 * self-service naar managed zonder over te stappen (funnel met agency-tak).
 */

type Model = {
  badge: string;
  badgeColor: string;
  bg: string;
  title: string;
  body: string;
  points: string[];
  cta: { label: string; href: string };
};

const MODELS: Model[] = [
  {
    badge: "Zelf doen",
    badgeColor: "var(--cp-blue-500)",
    bg: "var(--cp-blue-50)",
    title: "Software",
    body: "Jij houdt zelf de regie. MarginGrip laat elke dag zien wat je overhoudt — jij stuurt bij waar nodig.",
    points: [
      "Alle koppelingen en rapportages",
      "Gratis setup in één call van een uur (t.w.v. €300)",
      "Vanaf €49,95 per maand, maandelijks opzegbaar",
    ],
    cta: { label: "Start gratis trial", href: TRIAL_MAILTO },
  },
  {
    badge: "Met begeleiding",
    badgeColor: "#16A34A",
    bg: "#F0FDF4",
    title: "Software + sparring",
    body: "Je werkt zelf in MarginGrip en schakelt met ons over marges, assortiment en advertenties wanneer jij dat wilt.",
    points: [
      "Alles uit Software",
      "Periodieke cijfer-review met een specialist",
      "Advies over pricing, kosten en kanaal-keuzes",
    ],
    cta: { label: "Plan een kennismaking", href: INTRO_CALL_MAILTO },
  },
  {
    badge: "Volledig uitbesteed",
    badgeColor: "#D97706",
    bg: "#FFFBEB",
    title: "Managed",
    body: "Wij beheren je marketplace-activiteiten — listings, advertenties, groei naar nieuwe kanalen. Jij volgt alles live in je eigen dashboard.",
    points: [
      "Marketplace-beheer door ons team",
      "Van Bol naar Amazon en verder",
      "Volledige transparantie: jij ziet dezelfde cijfers als wij",
    ],
    cta: { label: "Vraag een voorstel aan", href: AGENCY_MAILTO },
  },
];

export default function ServiceModels() {
  return (
    <section id="modellen" className="lp-section" style={{ background: "var(--cp-surface)" }}>
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">Zelf doen of laten doen</span>
          <h2 className="lp-h2">Eén platform, drie manieren van werken</h2>
          <p className="lp-lead">
            Start waar je nu staat en groei door wanneer je wilt — het is altijd dezelfde
            software met dezelfde cijfers. Geen overstap, geen dataverlies.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {MODELS.map((m) => (
            <div
              key={m.title}
              style={{
                background: "#fff",
                border: "1px solid var(--cp-border)",
                borderRadius: 16,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: m.badgeColor,
                  background: m.bg,
                  padding: "4px 10px",
                  borderRadius: 999,
                }}
              >
                {m.badge}
              </span>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--cp-text)", margin: 0 }}>{m.title}</h3>
              <p style={{ fontSize: 14, color: "var(--cp-text-secondary)", margin: 0, lineHeight: 1.55 }}>{m.body}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                {m.points.map((p) => (
                  <li key={p} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13.5, color: "var(--cp-text-secondary)" }}>
                    <span style={{ color: m.badgeColor, flexShrink: 0, marginTop: 3 }}>
                      <svg viewBox="0 0 16 16" style={{ width: 11, height: 11, stroke: "currentColor", fill: "none", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }}>
                        <path d="M13 4L6 11l-3-3" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={m.cta.href}
                className="lp-btn lp-btn--ghost"
                style={{ justifyContent: "center", borderColor: m.badgeColor, color: m.badgeColor }}
              >
                {m.cta.label}
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "var(--cp-text-muted)", marginTop: 20 }}>
          Twijfel je wat past? In de gratis setup-call kijken we mee en adviseren we eerlijk —
          zelf doen is voor de meeste sellers prima.
        </p>
      </div>
    </section>
  );
}
