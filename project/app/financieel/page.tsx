"use client";

import { useEffect, useState, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import PeriodSelector from "@/components/PeriodSelector";
import KPICard from "@/components/KPICard";
import { useDemoMode } from "@/components/DemoModeToggle";
import DemoModeToggle from "@/components/DemoModeToggle";
import {
  formatCurrency, formatNumber, formatPercentage,
  MARKETPLACE_LABELS, MARKETPLACE_COLORS,
} from "@/lib/constants";
import type { Period } from "@/lib/constants";
import { Euro, TrendingUp, ShoppingCart, Megaphone } from "lucide-react";

interface MonthRow {
  month: string;
  gross_revenue: number;
  net_revenue: number;
  commissie: number;
  cogs: number;
  shipping: number;
  ad_spend: number;
  total_costs: number;
  net_profit: number;
  margin: number;
  orders: number;
}

interface MarketplaceRow {
  marketplace: string;
  gross_revenue: number;
  net_revenue: number;
  commissie: number;
  cogs: number;
  orders: number;
}

interface FinancialData {
  period: string;
  mode: string;
  monthly: MonthRow[];
  byMarketplace: MarketplaceRow[];
  totals: {
    gross_revenue: number;
    net_revenue: number;
    commissie: number;
    cogs: number;
    shipping: number;
    ad_spend: number;
    total_costs: number;
    net_profit: number;
    margin: number;
    orders: number;
  };
}

const MONTH_NAMES: Record<string, string> = {
  "01": "Januari", "02": "Februari", "03": "Maart", "04": "April",
  "05": "Mei", "06": "Juni", "07": "Juli", "08": "Augustus",
  "09": "September", "10": "Oktober", "11": "November", "12": "December",
};

function monthLabel(m: string): string {
  const [y, mm] = m.split("-");
  return `${MONTH_NAMES[mm] || mm} ${y}`;
}

export default function FinancieelPage() {
  const [mode] = useDemoMode();
  const [period, setPeriod] = useState<Period>("totaal");
  const [data, setData] = useState<FinancialData | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedMonth, setExpandedMonth] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/financieel?period=${period}&mode=${mode}`);
      if (res.ok) setData(await res.json());
    } finally {
      setLoading(false);
    }
  }, [period, mode]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const t = data?.totals;

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-8 max-w-[1600px]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#0B2545]">Financieel</h1>
            <p className="text-sm text-[#4A5568] mt-1">P&L overzicht — {data?.period || period}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DemoModeToggle />
            <PeriodSelector selected={period} onChange={setPeriod} />
          </div>
        </div>

        {/* Top KPI's */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KPICard label="Bruto omzet" value={formatCurrency(t?.gross_revenue || 0)} icon={<Euro className="w-4 h-4" />} />
          <KPICard label="Netto omzet" value={formatCurrency(t?.net_revenue || 0)} hint="ná commissie" icon={<Euro className="w-4 h-4" />} />
          <KPICard label="Netto resultaat" value={formatCurrency(t?.net_profit || 0)} hint={`marge ${formatPercentage(t?.margin || 0)}`} icon={<TrendingUp className="w-4 h-4" />} />
          <KPICard label="Bestellingen" value={formatNumber(t?.orders || 0)} icon={<ShoppingCart className="w-4 h-4" />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <KPICard label="Commissie" value={formatCurrency(t?.commissie || 0)} hint="platform fees" />
          <KPICard label="COGS + verzend" value={formatCurrency((t?.cogs || 0) + (t?.shipping || 0))} hint="kostprijs + logistiek" />
          <KPICard label="Ad spend" value={formatCurrency(t?.ad_spend || 0)} icon={<Megaphone className="w-4 h-4" />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Per marketplace */}
          <div className="card">
            <h3 className="text-sm font-semibold text-[#0B2545] mb-4">Per marktplaats</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-xs text-[#718096] border-b border-[#E5EAF0]">
                  <tr>
                    <th className="text-left py-2 font-medium">Marktplaats</th>
                    <th className="text-right py-2 font-medium">Bestellingen</th>
                    <th className="text-right py-2 font-medium">Bruto</th>
                    <th className="text-right py-2 font-medium">Netto</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.byMarketplace || []).map(m => (
                    <tr key={m.marketplace} className="border-b border-[#F0F4F8]">
                      <td className="py-2.5">
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium uppercase"
                          style={{ backgroundColor: `${MARKETPLACE_COLORS[m.marketplace] || "#A0AEC0"}20`, color: MARKETPLACE_COLORS[m.marketplace] || "#A0AEC0" }}>
                          {MARKETPLACE_LABELS[m.marketplace] || m.marketplace}
                        </span>
                      </td>
                      <td className="py-2.5 text-right text-[#4A5568]">{m.orders}</td>
                      <td className="py-2.5 text-right text-[#4A5568]">{formatCurrency(m.gross_revenue)}</td>
                      <td className="py-2.5 text-right font-medium text-[#0B2545]">{formatCurrency(m.net_revenue)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Kosten breakdown */}
          <div className="card">
            <h3 className="text-sm font-semibold text-[#0B2545] mb-4">Kosten breakdown</h3>
            <div className="space-y-3">
              <CostRow label="Commissie (platforms)" amount={t?.commissie || 0} percent={t && t.gross_revenue > 0 ? (t.commissie / t.gross_revenue) * 100 : 0} />
              <CostRow label="COGS (kostprijs)" amount={t?.cogs || 0} percent={t && t.gross_revenue > 0 ? (t.cogs / t.gross_revenue) * 100 : 0} />
              <CostRow label="Verzendkosten" amount={t?.shipping || 0} percent={t && t.gross_revenue > 0 ? (t.shipping / t.gross_revenue) * 100 : 0} />
              <CostRow label="Ad spend" amount={t?.ad_spend || 0} percent={t && t.gross_revenue > 0 ? (t.ad_spend / t.gross_revenue) * 100 : 0} />
              <div className="pt-3 border-t border-[#E5EAF0] flex justify-between">
                <span className="text-sm font-semibold text-[#0B2545]">Netto resultaat</span>
                <span className="text-sm font-bold text-[#0B2545]">{formatCurrency(t?.net_profit || 0)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Maandelijkse P&L */}
        <div className="card">
          <h3 className="text-sm font-semibold text-[#0B2545] mb-4">P&L per maand</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-[#718096] border-b border-[#E5EAF0]">
                <tr>
                  <th className="text-left py-2 px-3 font-medium">Maand</th>
                  <th className="text-right py-2 px-3 font-medium">Orders</th>
                  <th className="text-right py-2 px-3 font-medium">Bruto omzet</th>
                  <th className="text-right py-2 px-3 font-medium">Netto omzet</th>
                  <th className="text-right py-2 px-3 font-medium">Kosten</th>
                  <th className="text-right py-2 px-3 font-medium">Netto resultaat</th>
                  <th className="text-right py-2 px-3 font-medium">Marge</th>
                </tr>
              </thead>
              <tbody>
                {(data?.monthly || []).map(m => (
                  <>
                    <tr
                      key={m.month}
                      className="border-b border-[#F0F4F8] hover:bg-[#F7F9FC] cursor-pointer"
                      onClick={() => setExpandedMonth(expandedMonth === m.month ? null : m.month)}
                    >
                      <td className="py-2.5 px-3 font-medium text-[#0B2545]">{monthLabel(m.month)}</td>
                      <td className="py-2.5 px-3 text-right text-[#4A5568]">{m.orders}</td>
                      <td className="py-2.5 px-3 text-right text-[#4A5568]">{formatCurrency(m.gross_revenue)}</td>
                      <td className="py-2.5 px-3 text-right text-[#0B2545]">{formatCurrency(m.net_revenue)}</td>
                      <td className="py-2.5 px-3 text-right text-[#4A5568]">{formatCurrency(m.total_costs)}</td>
                      <td className={`py-2.5 px-3 text-right font-semibold ${m.net_profit >= 0 ? "text-green-700" : "text-red-700"}`}>
                        {formatCurrency(m.net_profit)}
                      </td>
                      <td className={`py-2.5 px-3 text-right text-xs ${m.margin >= 0 ? "text-green-700" : "text-red-700"}`}>
                        {formatPercentage(m.margin)}
                      </td>
                    </tr>
                    {expandedMonth === m.month && (
                      <tr key={`${m.month}-detail`} className="bg-[#F7F9FC]">
                        <td colSpan={7} className="py-3 px-3">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                            <DetailItem label="Commissie" value={formatCurrency(m.commissie)} />
                            <DetailItem label="COGS" value={formatCurrency(m.cogs)} />
                            <DetailItem label="Verzend" value={formatCurrency(m.shipping)} />
                            <DetailItem label="Ad spend" value={formatCurrency(m.ad_spend)} />
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
                {(!data?.monthly || data.monthly.length === 0) && !loading && (
                  <tr><td colSpan={7} className="py-12 text-center text-[#A0AEC0] text-sm">Geen data voor deze periode</td></tr>
                )}
              </tbody>
              {data?.monthly && data.monthly.length > 0 && (
                <tfoot className="border-t-2 border-[#0B2545]">
                  <tr className="font-semibold text-[#0B2545]">
                    <td className="py-2.5 px-3">Totaal</td>
                    <td className="py-2.5 px-3 text-right">{t?.orders}</td>
                    <td className="py-2.5 px-3 text-right">{formatCurrency(t?.gross_revenue || 0)}</td>
                    <td className="py-2.5 px-3 text-right">{formatCurrency(t?.net_revenue || 0)}</td>
                    <td className="py-2.5 px-3 text-right">{formatCurrency(t?.total_costs || 0)}</td>
                    <td className={`py-2.5 px-3 text-right ${(t?.net_profit || 0) >= 0 ? "text-green-700" : "text-red-700"}`}>
                      {formatCurrency(t?.net_profit || 0)}
                    </td>
                    <td className={`py-2.5 px-3 text-right text-xs ${(t?.margin || 0) >= 0 ? "text-green-700" : "text-red-700"}`}>
                      {formatPercentage(t?.margin || 0)}
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function CostRow({ label, amount, percent }: { label: string; amount: number; percent: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-[#4A5568]">{label}</span>
      <div className="text-right">
        <span className="text-sm font-medium text-[#0B2545]">{formatCurrency(amount)}</span>
        <span className="text-xs text-[#A0AEC0] ml-2">{formatPercentage(percent)}</span>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[#718096] mb-0.5">{label}</div>
      <div className="font-semibold text-[#0B2545]">{value}</div>
    </div>
  );
}
