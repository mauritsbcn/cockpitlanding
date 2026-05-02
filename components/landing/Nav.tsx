"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`lp-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="lp-wrap lp-nav__inner">
        <Link className="lp-nav__brand" href="/">
          <span className="lp-nav__brand-mark" />
          Cockpit
        </Link>

        <div className="lp-nav__links">
          <a href="#features">Functies</a>
          <a href="#how">Hoe werkt het</a>
          <a href="#pricing">Prijzen</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="lp-nav__cta">
          <Link href="/login" className="lp-btn lp-btn--ghost lp-btn--sm">
            Inloggen
          </Link>
          <Link href="/dashboard" className="lp-btn lp-btn--primary lp-btn--sm">
            Bekijk de demo
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: size, height: size, stroke: "currentColor", fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
