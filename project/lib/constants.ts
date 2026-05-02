/**
 * Cockpit constants — gedeeld tussen frontend en backend.
 */

/** Vaste tenant_id voor de demo dataset. Wordt gebruikt wanneer mode='demo'. */
export const DEMO_TENANT_ID = 1;

/** Marketplace labels voor UI */
export const MARKETPLACE_LABELS: Record<string, string> = {
  bolcom: "Bol.com",
  amazon_nl: "Amazon NL",
  amazon_be: "Amazon BE",
  amazon: "Amazon",
  praxis: "Praxis",
  brico: "Brico",
  shopify: "Shopify",
};

/** Marketplace kleuren (donkerblauw familie + accent) */
export const MARKETPLACE_COLORS: Record<string, string> = {
  bolcom: "#0066B2",
  amazon_nl: "#FF9900",
  amazon_be: "#FF9900",
  amazon: "#FF9900",
  praxis: "#00843D",
  brico: "#E30613",
  shopify: "#5A8E3A",
};

/** Basis chart kleuren (blauw thema) */
export const CHART_COLORS = {
  primary: "#1B3E6F",
  secondary: "#3A8FE0",
  tertiary: "#0B2545",
  muted: "#A0AEC0",
  positive: "#16A34A",
  negative: "#DC2626",
};
