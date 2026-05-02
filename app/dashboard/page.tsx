"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import { Euro, ShoppingCart, TrendingUp, Megaphone, Package } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import KPICard from "@/components/KPICard";
import {
  formatCurrency, formatNumber, formatPercentage,
  MARKETPLACE_LABELS, MARKETPLACE_COLORS, CHART_COLORS,
  DEMO_KPI, DEMO_REVENUE_BY_DAY, DEMO_BY_MARKETPLACE, DEMO_TOP_PRODUCTS, DEMO_RECENT_ORDERS,
} from "@/lib/constants";

export default function DashboardPage() {
  const k = DEMO_KPI;

  return (
    <div className="min-h-screen flex" style={{ background: "var(--cp-surface)" }}>
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        {/* Demo notice */}
        <div className="mb-6 rounded-xl border border-[#3A8FE0] bg-[#EFF6FF] p-4 flex items-start gap-3">
          <span className="text-lg">🎬</span>
          <div>
            <p className="text-sm font-semibold text-[#0B2545]">Demo modus actief</p>
            <p className="text-sm text-[#4A5568] mt-0.5">
              Je ziet voorbeelddata van Hocus Picus + meubelshop.nl. In productie zie je hier je eigen marketplace-data.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#0B2545]">Overzicht</h1>
            <p className="text-sm text-[#4A5568] mt-1">Marketplace prestaties — november 2025</p>
          </div>
          <div className="flex gap-2">
            {["Dag", "Week", "Maand", "Kwartaal"].map((p, i) => (
              <button
                key={p}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                  i === 2
                    ? "bg-[#0B2545] text-white border-[#0B2545]"
                    : "bg-white text-[#4A5568] border-[#E5EAF0] hover:border-[#0B2545]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* KPI row 1 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <KPICard
            label="Bruto omzet"
            value={formatCurrency(k.grossRevenue)}
            trend={k.revenueTrend}
            hint="vs vorige periode"
            icon={<Euro className="w-4 h-4" />}
          />
          <KPICard
            label="Netto omzet"
            value={formatCurrency(k.netRevenue)}
            hint="ná commissie"
            icon={<Euro className="w-4 h-4" />}
          />
          <KPICard
            label="Netto resultaat"
            value={formatCurrency(k.netProfit)}
            hint={`marge ${formatPercentage(k.netMargin)}`}
            icon={<TrendingUp className="w-4 h-4" />}
          />
          <KPICard
            label="Bestellingen"
            value={formatNumber(k.orderCount)}
            trend={k.ordersTrend}
            hint="vs vorige periode"
            icon={<ShoppingCart className="w-4 h-4" />}
          />
        </div>

        {/* KPI row 2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KPICard
            label="Ad spend"
            value={formatCurrency(k.adSpend)}
            invertTrend
            icon={<Megaphone className="w-4 h-4" />}
          />
          <KPICard
            label="ROAS"
            value={`${k.roas.toFixed(1)}×`}
            hint="return on ad spend"
          />
          <KPICard
            label="TACoS"
            value={formatPercentage(k.tacos)}
            hint="ads / omzet"
            invertTrend
          />
          <KPICard
            label="Gem. orderwaarde"
            value={formatCurrency(k.avgOrderValue)}
            icon={<Package className="w-4 h-4" />}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="card lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#0B2545] mb-4">Omzet per dag</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DEMO_REVENUE_BY_DAY.slice(-14)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5EAF0" />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#718096", fontSize: 11 }}
                    tickFormatter={(d) =>
                      new Date(d).toLocaleDateString("nl-NL", { day: "numeric", month: "short" })
                    }
                  />
                  <YAxis tick={{ fill: "#718096", fontSize: 11 }} tickFormatter={(v) => `€${v}`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #E5EAF0", borderRadius: 8, color: "#0B2545" }}
                    formatter={(value) => [formatCurrency(Number(value)), "Omzet"]}
                    labelFormatter={(d) =>
                      new Date(d).toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" })
                    }
                  />
                  <Bar dataKey="revenue" fill={CHART_COLORS.primary} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-[#0B2545] mb-4">Per marktplaats</h3>
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={DEMO_BY_MARKETPLACE.map((d) => ({
                      name: MARKETPLACE_LABELS[d.marketplace] || d.marketplace,
                      value: d.revenue,
                      key: d.marketplace,
                    }))}
                    cx="50%" cy="50%"
                    outerRadius={70} innerRadius={42}
                    paddingAngle={3} dataKey="value"
                  >
                    {DEMO_BY_MARKETPLACE.map((d, i) => (
                      <Cell key={i} fill={MARKETPLACE_COLORS[d.marketplace] || CHART_COLORS.muted} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #E5EAF0", borderRadius: 8, color: "#0B2545", fontSize: 12 }}
                    formatter={(value) => [formatCurrency(Number(value)), "Omzet"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 space-y-1.5">
              {DEMO_BY_MARKETPLACE.map((d) => (
                <div key={d.marketplace} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: MARKETPLACE_COLORS[d.marketplace] || CHART_COLORS.muted }}
                    />
                    <span className="text-[#4A5568]">{MARKETPLACE_LABELS[d.marketplace] || d.marketplace}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-[#0B2545]">{formatCurrency(d.revenue)}</span>
                    <span className="text-[#A0AEC0] ml-2">{d.orders}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-sm font-semibold text-[#0B2545] mb-4">Top 5 producten</h3>
            <div className="space-y-3">
              {DEMO_TOP_PRODUCTS.map((p, i) => (
                <div key={p.sku} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#A0AEC0] w-5">{i + 1}</span>
                    <div>
                      <p className="text-sm font-medium text-[#0B2545]">{p.sku}</p>
                      <p className="text-xs text-[#718096] truncate max-w-[220px]">{p.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#0B2545]">{formatCurrency(p.revenue)}</p>
                    <p className="text-xs text-[#718096]">{p.units} stuks</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-[#0B2545] mb-4">Recente bestellingen</h3>
            <div className="space-y-2">
              {DEMO_RECENT_ORDERS.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between gap-3 py-1.5 border-b border-[#F0F4F8] last:border-0"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded font-medium uppercase"
                        style={{
                          backgroundColor: `${MARKETPLACE_COLORS[order.marketplace] || CHART_COLORS.muted}20`,
                          color: MARKETPLACE_COLORS[order.marketplace] || CHART_COLORS.muted,
                        }}
                      >
                        {MARKETPLACE_LABELS[order.marketplace] || order.marketplace}
                      </span>
                      <span className="text-xs text-[#718096]">{order.order_date}</span>
                    </div>
                    <p className="text-sm text-[#0B2545] truncate mt-0.5">{order.product_name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#0B2545]">{formatCurrency(order.price_incl_vat)}</p>
                    <p className="text-xs text-[#718096]">{order.quantity}×</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
