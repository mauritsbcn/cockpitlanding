import Link from "next/link";

const cols = [
  {
    title: "Product",
    links: ["Functies", "Prijzen", "Roadmap", "Status", "Demo aanvragen"],
    hrefs: ["/#features", "/#pricing", "#", "#", "/dashboard"],
  },
  {
    title: "Bedrijf",
    links: ["Over Maurits Group", "Hocus Picus", "meubelshop.nl", "Contact"],
    hrefs: ["#", "#", "#", "#"],
  },
  {
    title: "Resources",
    links: ["Help-center", "API-docs", "Blog", "Changelog"],
    hrefs: ["#", "#", "#", "#"],
  },
];

export default function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-wrap">
        <div className="lp-footer__grid">
          <div>
            <Link className="lp-nav__brand" href="/" style={{ fontSize: 19 }}>
              <span className="lp-nav__brand-mark" />
              Cockpit
            </Link>
            <p className="lp-footer__brand-blurb">
              Multi-marketplace dashboard voor Nederlandse en Belgische e-commerce sellers.
              Een product van{" "}
              <strong style={{ color: "var(--cp-text)" }}>Maurits Group</strong>.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lp-footer__col">
              <div className="lp-footer__col-title">{c.title}</div>
              <ul>
                {c.links.map((l, i) => (
                  <li key={l}>
                    <a href={c.hrefs[i]}>{l}</a>
                  </li>
                ))}
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
