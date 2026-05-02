"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line,
} from "recharts";
import { Euro, ShoppingCart, TrendingUp, Megaphone, Package, RefreshCw, Info } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import KPICard from "@/components/KPICard";
import PeriodSelector from "@/components/PeriodSelector";
import MarketplaceFilter from "@/components/MarketplaceFilter";
import DemoModeToggle, { useDemoMode } from "@/components/DemoModeToggle";
import {
  formatCurrency, formatNumber, formatPercentage,
  MARKETPLACE_LABELS, MARKETPLACE_COLORS, CHART_COLORS,
} from "@/lib/constants";
import type { Period } from "@/lib/constants";

interface DashboardData {
  period: string;
  isDemoData: boolean;
  kpi: {
    grossRevenue: number;
    netRevenue: number;
    netProfit: number;
    netMargin: number;
    revenueTrend: number;
    orderCount: number;
    ordersTrend: number;
    avgOrderValue: number;
    units: number;
    commissie: number;
    cogs: number;
    shipping: number;
    adSpend: number;
    roas: number;
    tacos: number;
  };
  revenueByDay: Array<{ date: string; revenue: number; orders: number }>;
  byMarketplace: Array<{ marketplace: string; revenue: number; orders: number }>;
  topProducts: Array<{ sku: string; name: string; revenue: number; units: number }>;
  recentOrders: Array<Record<string, unknown>>;
}

export default function DashboardPage() {
  const [mode] = useDemoMode();
  const [period, setPeriod] = useState<Period>("maand");
  const [marketplace, setMarketplace] = useState("all");
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`/api/dashboard?period=${period}&mode=${mode}&marketplace=${marketplace}`);
      if (res.ok) setData(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [period, mode, marketplace]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [fetchData]);

  const k = data?.kpi;
  const hasData = (k?.orderCount || 0) > 0;

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-8 max-w-[1600px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#0B2545]">Dashboard</h1>
            <p className="text-sm text-[#4A5568] mt-1">Marketplace prestaties — {data?.period || period}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DemoModeToggle />
            <MarketplaceFilter selected={marketplace} onChange={setMarketplace} />
            <PeriodSelector selected={period} onChange={setPeriod} />
            <button
              onClick={fetchData}
              className="btn-secondary text-xs flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Vernieuwen
            </button>
          </div>
        </div>

        {/* Demo banner */}
        {mode === "demo" && (
          <div className="card mb-6 border-[#3A8FE0] bg-[#EFF6FF]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#3A8FE0] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-[#0B2545]">🎬 Demo modus actief</h3>
                <p className="text-sm text-[#4A5568] mt-0.5">
                  Je ziet voorbeelddata van een fictieve seller. Schakel naar &quot;Live data&quot; bovenaan om je eigen marketplace data te zien.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Empty state in live modus zonder data */}
        {mode === "live" && !loading && !hasData && (
          <div className="card mb-6 border-dashed">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-xl">👋</div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#0B2545]">Welkom! Je hebt nog geen data.</h3>
                <p className="text-sm text-[#4A5568] mt-1">
                  Verbind je marketplace om automatisch orders binnen te halen,
                  {" "}of bekijk eerst de demo modus om te zien hoe het dashboard er met data uitziet.
                </p>
                <div className="flex gap-2 mt-3">
                  <Link href="/instellingen/connecties" className="btn-primary text-xs">
                    Verbind een marketplace
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KPICard
            label="Bruto omzet"
            value={formatCurrency(k?.grossRevenue || 0)}
            trend={k?.revenueTrend}
            hint="vs vorige periode"
            icon={<Euro className="w-4 h-4" />}
          />
          <KPICard
            label="Netto omzet"
            value={formatCurrency(k?.netRevenue || 0)}
            hint="ná commissie"
            icon={<Euro className="w-4 h-4" />}
          />
          <KPICard
            label="Netto resultaat"
            value={formatCurrency(k?.netProfit || 0)}
            hint={`marge ${formatPercentage(k?.netMargin || 0)}`}
            icon={<TrendingUp className="w-4 h-4" />}
          />
          <KPICard
            label="Bestellingen"
            value={formatNumber(k?.orderCount || 0)}
            trend={k?.ordersTrend}
            hint="vs vorige periode"
            icon={<ShoppingCart className="w-4 h-4" />}
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KPICard
            label="Ad spend"
            value={formatCurrency(k?.adSpend || 0)}
            invertTrend
            icon={<Megaphone className="w-4 h-4" />}
          />
          <KPICard
            label="ROAS"
            value={k?.roas ? `${k.roas.toFixed(1)}x` : "—"}
            hint="return on ad spend"
          />
          <KPICard
            label="TACoS"
            value={k?.tacos ? formatPercentage(k.tacos) : "—"}
            hint="ads / omzet"
            invertTrend
          />
          <KPICard
            label="Gem. orderwaarde"
            value={formatCurrency(k?.avgOrderValue || 0)}
            icon={<Package className="w-4 h-4" />}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="card lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#0B2545] mb-4">Omzet per dag</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data?.revenueByDay || []}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5EAF0" />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: "#718096", fontSize: 11 }}
                    tickFormatter={(d) => new Date(d).toLocaleDateString("nl-NL", { day: "numeric", month: "short" })}
                  />
                  <YAxis tick={{ fill: "#718096", fontSize: 11 }} tickFormatter={(v) => `€${v}`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #E5EAF0", borderRadius: 8, color: "#0B2545" }}
                    formatter={(value) => [formatCurrency(Number(value)), "Omzet"]}
                    labelFormatter={(d) => new Date(d).toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" })}
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
                    data={(data?.byMarketplace || []).map((d) => ({
                      name: MARKETPLACE_LABELS[d.marketplace] || d.marketplace,
                      value: d.revenue,
                      key: d.marketplace,
                    }))}
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    innerRadius={42}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {(data?.byMarketplace || []).map((d, i) => (
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
              {(data?.byMarketplace || []).map((d) => (
                <div key={d.marketplace} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: MARKETPLACE_COLORS[d.marketplace] || CHART_COLORS.muted }} />
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

        {/* Bottom: Top products + Recent orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-sm font-semibold text-[#0B2545] mb-4">Top 5 producten</h3>
            <div className="space-y-3">
              {(data?.topProducts || []).map((p, i) => (
                <div key={p.sku} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#A0AEC0] w-5">{i + 1}</span>
                    <div>
                      <p className="text-sm font-medium text-[#0B2545]">{p.sku}</p>
                      {p.name && <p className="text-xs text-[#718096] truncate max-w-[220px]">{p.name}</p>}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#0B2545]">{formatCurrency(p.revenue)}</p>
                    <p className="text-xs text-[#718096]">{p.units} stuks</p>
                  </div>
                </div>
              ))}
              {(!data?.topProducts || data.topProducts.length === 0) && (
                <p className="text-sm text-[#A0AEC0] text-center py-4">Nog geen verkopen</p>
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="text-sm font-semibold text-[#0B2545] mb-4">Recente bestellingen</h3>
            <div className="space-y-2">
              {(data?.recentOrders || []).map((order) => (
                <div key={String(order.id)} className="flex items-center justify-between gap-3 py-1.5 border-b border-[#F0F4F8] last:border-0">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded font-medium uppercase"
                        style={{ backgroundColor: `${MARKETPLACE_COLORS[String(order.marketplace)] || CHART_COLORS.muted}20`, color: MARKETPLACE_COLORS[String(order.marketplace)] || CHART_COLORS.muted }}
                      >
                        {MARKETPLACE_LABELS[String(order.marketplace)] || String(order.marketplace)}
                      </span>
                      <span className="text-xs text-[#718096]">
                        {String(order.order_date).slice(0, 10)}
                      </span>
                    </div>
                    <p className="text-sm text-[#0B2545] truncate mt-0.5">
                      {String(order.product_name || order.sku || "—")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#0B2545]">
                      {formatCurrency(Number(order.price_incl_vat || 0))}
                    </p>
                    <p className="text-xs text-[#718096]">{Number(order.quantity || 1)}×</p>
                  </div>
                </div>
              ))}
              {(!data?.recentOrders || data.recentOrders.length === 0) && (
                <p className="text-sm text-[#A0AEC0] text-center py-4">Nog geen bestellingen</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
