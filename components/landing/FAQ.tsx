"use client";

import { useState } from "react";

const items = [
  {
    q: "Welke marketplaces ondersteunen jullie?",
    a: "Bij launch: Bol.com, Amazon (NL/DE), Praxis (Mirakl) en Shopify. Brico is in beta. Andere Mirakl-marketplaces — Carrefour, Decathlon, MediaMarkt — voegen we toe op aanvraag, meestal binnen één à twee weken.",
  },
  {
    q: "Hoe veilig is mijn data?",
    a: "API-credentials worden AES-256 versleuteld met een unieke sleutel per klant. Alle data staat op AWS in Frankfurt (eu-central-1). Wij zien je tokens nooit in plaintext en kunnen ze niet uitlezen. Audit-log van elke handmatige actie is voor jou inzichtelijk.",
  },
  {
    q: "Hoe lang duurt het om live te gaan?",
    a: "Vanaf intake: dezelfde dag een demo-account met je eigen data. Productie-setup duurt vijf minuten — één API-token per marketplace plakken. De eerste 90-dagen-historie is binnen 10 minuten gesynchroniseerd.",
  },
  {
    q: "Wat kost het precies?",
    a: "€49,95 per maand, maandelijks of jaarlijks te betalen. Daar zitten 2 gebruikers bij in; elke extra gebruiker kost €9,95 per maand. Geen setup-fee, geen per-order-toeslagen. Je start altijd met 30 dagen gratis.",
  },
  {
    q: "Ik verstuur (deels) zelf. Werkt dat ook?",
    a: "Ja. Voor zelf verstuurde orders (FBM) staat een download-template klaar met vaste kolommen en één voorbeeldproduct. Vul je verzend- en pick & pack-kosten in, upload het bestand, en MarginGrip rekent ze per order mee — naast je FBA/LVB-orders.",
  },
  {
    q: "Hoe vaak wordt het overzicht bijgewerkt?",
    a: "De data synchroniseert doorlopend. De samenvatting “dit heb je vandaag gedaan” ontvang je dagelijks of wekelijks — dat stel je zelf in.",
  },
  {
    q: "Zit ik vast aan een contract?",
    a: "Nee. Maandelijks opzegbaar, zonder reden, zonder boete. Je data kun je op elk moment exporteren als CSV of via onze API.",
  },
  {
    q: "Van wie is de data die jullie verzamelen?",
    a: "Van jou. Wij verwerken alleen wat nodig is om je dashboard te draaien, gebruiken je data nooit voor benchmarking of trainen van modellen, en je kunt op verzoek alles laten verwijderen. AVG-compliant, verwerkersovereenkomst standaard.",
  },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 12, height: 12, stroke: "currentColor", fill: "none", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="lp-section">
      <div className="lp-wrap">
        <div className="lp-sec-head">
          <span className="lp-eyebrow">FAQ</span>
          <h2 className="lp-h2">Wat sellers vaak vragen</h2>
        </div>
        <div className="lp-faq">
          {items.map((it, i) => (
            <div key={i} className="lp-faq__item" data-open={open === i ? "true" : "false"}>
              <button
                className="lp-faq__btn"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{it.q}</span>
                <span className="lp-faq__chev"><PlusIcon /></span>
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
