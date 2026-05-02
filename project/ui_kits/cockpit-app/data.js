// Demo dataset for Cockpit dashboard prototype.
// Numbers chosen to be plausible for a €1.2M/yr SMB seller across 4 marketplaces.

const DEMO_DATA = {
  kpi: {
    grossRevenue: 124580,
    netRevenue: 102130,
    netProfit: 22680,
    netMargin: 18.2,
    revenueTrend: 12.4,
    orderCount: 1280,
    ordersTrend: 8.1,
    avgOrderValue: 97.3,
    units: 1842,
    commissie: 13740,
    cogs: 58210,
    shipping: 7480,
    adSpend: 10330,
    roas: 4.8,
    tacos: 8.3,
  },
  revenueByDay: Array.from({ length: 30 }, (_, i) => {
    const base = 3800 + Math.sin(i * 0.55) * 1200 + (i > 22 ? 1400 : 0);
    const noise = (Math.cos(i * 1.7) + Math.sin(i * 2.3)) * 400;
    return { label: `${i + 1}`, value: Math.max(1200, Math.round(base + noise)) };
  }),
  byMarketplace: [
    { marketplace: 'bolcom',    revenue: 72140, orders: 812 },
    { marketplace: 'amazon_nl', revenue: 31880, orders: 312 },
    { marketplace: 'praxis',    revenue: 14220, orders: 114 },
    { marketplace: 'shopify',   revenue:  6340, orders: 42  },
  ],
  topProducts: [
    { sku: 'PRX-4421-WHT', name: 'Praxis bench drill 16-speed', revenue: 18420, units: 312 },
    { sku: 'BOL-9911-BLK', name: 'USB-C dock 8-in-1',           revenue: 12180, units: 228 },
    { sku: 'SHO-1107-RED', name: 'Tuinslang 25m premium',        revenue:  8940, units: 186 },
    { sku: 'AMZ-2255-BLU', name: 'Bluetooth speaker waterproof', revenue:  7220, units: 144 },
    { sku: 'BOL-3380-GRY', name: 'Laptopstandaard aluminium',    revenue:  6710, units: 198 },
  ],
  recentOrders: [
    { id: 1, marketplace: 'bolcom',    date: '2026-04-29', sku: 'BOL-9911-BLK', name: 'USB-C dock 8-in-1', price: 89.95, qty: 1 },
    { id: 2, marketplace: 'amazon_nl', date: '2026-04-29', sku: 'AMZ-2255-BLU', name: 'Bluetooth speaker waterproof', price: 54.99, qty: 2 },
    { id: 3, marketplace: 'praxis',    date: '2026-04-29', sku: 'PRX-4421-WHT', name: 'Praxis bench drill 16-speed', price: 129.00, qty: 1 },
    { id: 4, marketplace: 'shopify',   date: '2026-04-28', sku: 'SHO-1107-RED', name: 'Tuinslang 25m premium', price: 47.50, qty: 1 },
    { id: 5, marketplace: 'bolcom',    date: '2026-04-28', sku: 'BOL-3380-GRY', name: 'Laptopstandaard aluminium', price: 32.95, qty: 1 },
    { id: 6, marketplace: 'amazon_nl', date: '2026-04-28', sku: 'AMZ-9988-WHT', name: 'Mesh router AX3000', price: 119.00, qty: 1 },
    { id: 7, marketplace: 'bolcom',    date: '2026-04-27', sku: 'BOL-2244-BLK', name: 'Mechanisch toetsenbord 65%', price: 79.00, qty: 1 },
  ],
  monthly: [
    { month: '2026-01', orders: 1102, gross: 98450,  net: 80560,  costs: 65140, profit: 15420, margin: 15.7 },
    { month: '2026-02', orders: 1198, gross: 108210, net: 88420,  costs: 70320, profit: 18100, margin: 16.7 },
    { month: '2026-03', orders: 1342, gross: 121990, net: 99840,  costs: 78640, profit: 21200, margin: 17.4 },
    { month: '2026-04', orders: 1280, gross: 124580, net: 102130, costs: 79450, profit: 22680, margin: 18.2 },
  ],
  connections: [
    { id: 'c1', mp: 'bolcom',    label: 'Bol.com Verkoop', status: 'active',  lastSync: '2 min geleden' },
    { id: 'c2', mp: 'bolcom',    label: 'Bol.com Ads',     status: 'active',  lastSync: '5 min geleden' },
    { id: 'c3', mp: 'amazon_nl', label: 'Amazon NL Sales', status: 'active',  lastSync: '12 min geleden' },
    { id: 'c4', mp: 'amazon_nl', label: 'Amazon NL Ads',   status: 'syncing', lastSync: 'nu bezig…' },
    { id: 'c5', mp: 'praxis',    label: 'Mirakl / Praxis', status: 'active',  lastSync: '24 min geleden' },
    { id: 'c6', mp: 'shopify',   label: 'Shopify Storefront', status: 'error', lastSync: 'fout · 2u geleden' },
  ],
};

window.DEMO_DATA = DEMO_DATA;
