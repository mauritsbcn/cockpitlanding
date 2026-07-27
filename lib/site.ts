// Centrale URLs en contact-gegevens voor de landingpage.
// Override via env vars in Railway (NEXT_PUBLIC_APP_URL).

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.cockpit.mauritsgroup.com";

export const APP_LOGIN_URL = `${APP_URL}/login`;

export const CONTACT_EMAIL = "info@mauritsgroup.com";

export const CONTACT_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("MarginGrip · Intake")}`;
export const PRIVACY_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const MEUBELSHOP_URL = "https://meubelshop.nl";

export const TRIAL_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("MarginGrip · Gratis trial starten")}`;
export const INTRO_CALL_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("MarginGrip · Gratis setup-call (1 uur)")}`;
export const AGENCY_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("MarginGrip · Agency / white label")}`;

// Platform-cijfers voor social proof op de landing.
// ECHTE cijfers uit de productie-DB — periodiek bijwerken (stand: 27 jul 2026,
// 2.676 orders / €76.703 omzet incl BTW over live tenants).
export const PLATFORM_STATS = {
  orders: "2.500+",
  revenue: "€75.000+",
};
