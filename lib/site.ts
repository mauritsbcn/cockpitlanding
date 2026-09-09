// Centrale URLs en contact-gegevens voor de landingpage.
// Override via env vars in Railway (NEXT_PUBLIC_APP_URL).

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://cockpit.mauritsgroup.com";

export const APP_LOGIN_URL = `${APP_URL}/login`;

// Aanmeldflow (call-first): beide CTA's gaan naar het aanvraagformulier in de app;
// na versturen kan de lead direct de setup-call boeken (Cal.com).
export const TRIAL_URL = `${APP_URL}/aanmelden`;
export const SETUP_CALL_URL = `${APP_URL}/aanmelden`;

export const CONTACT_EMAIL = "info@mauritsgroup.com";

export const CONTACT_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("MarginGrip · Intake")}`;
export const PRIVACY_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const MEUBELSHOP_URL = "https://meubelshop.nl";

export const AGENCY_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("MarginGrip · Agency / white label")}`;

// Social proof op de landing: trackrecord van de agency achter MarginGrip
// (Maurits Group + GTP Media) — claim aangeleverd door Maurits, 27 jul 2026.
export const PLATFORM_STATS = {
  agencyRevenue: "€1.000.000+",
};
