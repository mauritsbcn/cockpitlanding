// Centrale URLs en contact-gegevens voor de landingpage.
// Override via env vars in Railway (NEXT_PUBLIC_APP_URL).

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.cockpit.mauritsgroup.com";

export const APP_LOGIN_URL = `${APP_URL}/login`;

export const CONTACT_EMAIL = "info@mauritsgroup.com";

export const CONTACT_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Cockpit · Intake")}`;
export const PRIVACY_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const MEUBELSHOP_URL = "https://meubelshop.nl";
