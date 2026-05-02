export const MARKETPLACE_LABELS: Record<string, string> = {
  bol: "Bol.com",
  amazon: "Amazon NL",
  praxis: "Praxis",
  shopify: "Shopify",
};

export const MARKETPLACE_COLORS: Record<string, string> = {
  bol: "#0066B2",
  amazon: "#FF9900",
  praxis: "#00843D",
  shopify: "#5A8E3A",
};

export const CHART_COLORS = {
  primary: "#1B3E6F",
  secondary: "#3A8FE0",
  muted: "#A0AEC0",
};

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("nl-NL").format(value);
}

export function formatPercentage(value: number): string {
  return `${value > 0 ? "+" : ""}${value.toFixed(1)}%`;
}

export type Period = "dag" | "week" | "maand" | "kwartaal" | "jaar";

// Demo data
export const DEMO_KPI = {
  grossRevenue: 159420,
  netRevenue: 130720,
  netProfit: 23040,
  netMargin: 14.4,
  revenueTrend: 12.4,
  orderCount: 2340,
  ordersTrend: 6.2,
  avgOrderValue: 68.1,
  units: 2680,
  commissie: 28700,
  cogs: 80760,
  shipping: 11200,
  adSpend: 8420,
  roas: 4.2,
  tacos: 5.3,
};

export const DEMO_REVENUE_BY_DAY = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2025, 10, i + 1).toISOString().slice(0, 10),
  revenue: 4000 + Math.random() * 3000,
  orders: 60 + Math.floor(Math.random() * 50),
}));

export const DEMO_BY_MARKETPLACE = [
  { marketplace: "bol", revenue: 71760, orders: 1053 },
  { marketplace: "amazon", revenue: 44638, orders: 655 },
  { marketplace: "praxis", revenue: 28696, orders: 421 },
  { marketplace: "shopify", revenue: 14326, orders: 211 },
];

export const DEMO_TOP_PRODUCTS = [
  { sku: "HP-001", name: "Citrusboom 120cm", revenue: 18420, units: 184 },
  { sku: "HP-002", name: "Olijfboom 80cm", revenue: 14760, units: 246 },
  { sku: "MS-201", name: "Salontafel eiken", revenue: 12340, units: 103 },
  { sku: "HP-003", name: "Vijgenboom 100cm", revenue: 9870, units: 141 },
  { sku: "MS-204", name: "Boekenrek staal", revenue: 7650, units: 85 },
];

export const DEMO_RECENT_ORDERS = [
  { id: 1, marketplace: "bol", order_date: "2025-11-30", product_name: "Citrusboom 120cm", sku: "HP-001", price_incl_vat: 99.95, quantity: 1 },
  { id: 2, marketplace: "amazon", order_date: "2025-11-30", product_name: "Olijfboom 80cm", sku: "HP-002", price_incl_vat: 59.95, quantity: 2 },
  { id: 3, marketplace: "shopify", order_date: "2025-11-29", product_name: "Salontafel eiken", sku: "MS-201", price_incl_vat: 299.00, quantity: 1 },
  { id: 4, marketplace: "praxis", order_date: "2025-11-29", product_name: "Vijgenboom 100cm", sku: "HP-003", price_incl_vat: 69.95, quantity: 1 },
  { id: 5, marketplace: "bol", order_date: "2025-11-28", product_name: "Boekenrek staal", sku: "MS-204", price_incl_vat: 89.95, quantity: 1 },
];
