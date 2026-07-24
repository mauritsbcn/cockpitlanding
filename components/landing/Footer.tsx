import Link from "next/link";
import {
  APP_LOGIN_URL,
  CONTACT_MAILTO,
  PRIVACY_MAILTO,
  MEUBELSHOP_URL,
} from "@/lib/site";

const cols = [
  {
    title: "Product",
    items: [
      { label: "Functies", href: "/#features" },
      { label: "Prijzen", href: "/#pricing" },
      { label: "Bekijk de demo", href: "/dashboard" },
      { label: "Inloggen", href: APP_LOGIN_URL, external: true },
    ],
  },
  {
    title: "Bedrijf",
    items: [
      { label: "meubelshop.nl", href: MEUBELSHOP_URL, external: true },
      { label: "Hocus Picus", href: MEUBELSHOP_URL, external: true },
      { label: "Contact", href: CONTACT_MAILTO },
    ],
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
              MarginGrip
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
                {c.items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ) : item.href.startsWith("mailto:") ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="lp-footer__bottom">
          <span>© {new Date().getFullYear()} Maurits Group B.V.</span>
          <div className="lp-footer__legal">
            <a href={PRIVACY_MAILTO}>Privacy</a>
            <a href={PRIVACY_MAILTO}>Voorwaarden</a>
            <a href={PRIVACY_MAILTO}>Verwerkersovereenkomst</a>
            <a href={PRIVACY_MAILTO}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
