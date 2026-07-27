/**
 * Brede logo-slider met kanalen — groot in beeld (feedback Theun 27 jul).
 * Eerlijk gelabeld per tegel: "live" (koppeling draait), "via Mirakl"
 * (zelfde API-familie, op aanvraag binnen 1-2 weken) of "roadmap".
 * Woordmerk-tegels in merkkleur; de 5 live kanalen met echt logo.
 */

type Tile =
  | { kind: "logo"; name: string; src: string; h: number; tag: "live" }
  | { kind: "word"; name: string; color: string; tag: "live" | "mirakl" | "roadmap" };

const TILES: Tile[] = [
  { kind: "logo", name: "Bol.com", src: "/logos/bol.svg", h: 20, tag: "live" },
  { kind: "logo", name: "Amazon", src: "/logos/amazon.svg", h: 22, tag: "live" },
  { kind: "logo", name: "Praxis", src: "/logos/praxis.svg", h: 18, tag: "live" },
  { kind: "logo", name: "Brico", src: "/logos/brico.svg", h: 22, tag: "live" },
  { kind: "logo", name: "Shopify", src: "/logos/shopify.svg", h: 22, tag: "live" },
  { kind: "word", name: "MediaMarkt", color: "#DF0000", tag: "mirakl" },
  { kind: "word", name: "Conrad", color: "#005CA9", tag: "mirakl" },
  { kind: "word", name: "fnac", color: "#E9AA00", tag: "mirakl" },
  { kind: "word", name: "Kruidvat", color: "#E2001A", tag: "mirakl" },
  { kind: "word", name: "Decathlon", color: "#0082C3", tag: "mirakl" },
  { kind: "word", name: "Leen Bakker", color: "#E85D1F", tag: "mirakl" },
  { kind: "word", name: "Kaufland", color: "#E10915", tag: "roadmap" },
  { kind: "word", name: "Allegro", color: "#FF5A00", tag: "roadmap" },
];

const TAG_LABEL: Record<string, string> = {
  live: "Live",
  mirakl: "Via Mirakl",
  roadmap: "Roadmap",
};

export default function MarketplaceSlider() {
  // Track 2× renderen voor een naadloze loop (animatie schuift -50%)
  const doubled = [...TILES, ...TILES];
  return (
    <section className="lp-section" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <div className="lp-wrap" style={{ textAlign: "center", marginBottom: 22 }}>
        <span className="lp-eyebrow">Kanalen</span>
        <h2 className="lp-h2" style={{ marginTop: 10 }}>Meer dan 10 marketplaces, één overzicht</h2>
        <p className="lp-lead" style={{ maxWidth: 640, margin: "12px auto 0" }}>
          Vijf kanalen draaien live. Verkoop je op een andere Mirakl-marketplace
          (MediaMarkt, Conrad, fnac, Kruidvat…)? Die koppelen we meestal binnen één à twee weken.
        </p>
      </div>
      <div className="lp-marquee" aria-label="Ondersteunde marketplaces">
        <div className="lp-marquee__track">
          {doubled.map((t, i) => (
            <div key={`${t.name}-${i}`} className="lp-mp-tile">
              {t.kind === "logo" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.src} alt={t.name} style={{ height: t.h, width: "auto" }} />
              ) : (
                <span className="lp-mp-tile__name" style={{ color: t.color }}>{t.name}</span>
              )}
              <span className={`lp-mp-tile__tag lp-mp-tile__tag--${t.tag}`}>{TAG_LABEL[t.tag]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
