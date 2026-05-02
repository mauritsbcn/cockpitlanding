"use client";

import { useEffect, useState, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import PeriodSelector from "@/components/PeriodSelector";
import MarketplaceFilter from "@/components/MarketplaceFilter";
import { useDemoMode } from "@/components/DemoModeToggle";
import DemoModeToggle from "@/components/DemoModeToggle";
import {
  formatCurrency, formatNumber,
  MARKETPLACE_LABELS, MARKETPLACE_COLORS,
} from "@/lib/constants";
import type { Period } from "@/lib/constants";
import { Search } from "lucide-react";

interface Order {
  id: number;
  order_date: string;
  marketplace: string;
  external_order_id: string;
  product_name: string;
  sku: string;
  quantity: number;
  price_excl_vat: number;
  price_incl_vat: number;
  platform_fee_total: number;
  net_revenue: number;
  status: string;
}

const STATUSES = ["all", "open", "shipped", "delivered", "cancelled"];

export default function OrdersPage() {
  const [mode] = useDemoMode();
  const [period, setPeriod] = useState<Period>("maand");
  const [marketplace, setMarketplace] = useState("all");
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [total, setTotal] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ period, mode, marketplace, status });
      if (search) params.set("search", search);
      const res = await fetch(`/api/orders?${params}`);
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders);
        setTotal(data.total);
        setTotalRevenue(data.totalRevenue);
      }
    } finally {
      setLoading(false);
    }
  }, [period, mode, marketplace, status, search]);

  useEffect(() => {
    const t = setTimeout(fetchData, search ? 300 : 0);
    return () => clearTimeout(t);
  }, [fetchData, search]);

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-8 max-w-[1600px]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#0B2545]">Bestellingen</h1>
            <p className="text-sm text-[#4A5568] mt-1">
              {loading ? "Laden..." : `${formatNumber(total)} bestellingen · ${formatCurrency(totalRevenue)} netto omzet`}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DemoModeToggle />
            <PeriodSelector selected={period} onChange={setPeriod} />
          </div>
        </div>

        {/* Filters */}
        <div className="card mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <MarketplaceFilter selected={marketplace} onChange={setMarketplace} />
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[#718096]">Status:</span>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="text-xs border border-[#E5EAF0] rounded-lg px-2 py-1.5 bg-white"
              >
                {STATUSES.map(s => <option key={s} value={s}>{s === "all" ? "Alle" : s}</option>)}
              </select>
            </div>
            <div className="ml-auto relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#A0AEC0]" />
              <input
                type="text"
                placeholder="Zoek SKU, product, ordernr..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-xs border border-[#E5EAF0] rounded-lg pl-7 pr-3 py-1.5 bg-white w-64"
              />
            </div>
          </div>
        </div>

        {/* Orders table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-[#718096] border-b border-[#E5EAF0]">
                <tr>
                  <th className="text-left py-2 px-3 font-medium">Datum</th>
                  <th className="text-left py-2 px-3 font-medium">Marktplaats</th>
                  <th className="text-left py-2 px-3 font-medium">Order</th>
                  <th className="text-left py-2 px-3 font-medium">SKU</th>
                  <th className="text-left py-2 px-3 font-medium">Product</th>
                  <th className="text-right py-2 px-3 font-medium">Aantal</th>
                  <th className="text-right py-2 px-3 font-medium">Bruto</th>
                  <th className="text-right py-2 px-3 font-medium">Netto</th>
                  <th className="text-left py-2 px-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-[#F0F4F8] hover:bg-[#F7F9FC]">
                    <td className="py-2.5 px-3 text-[#4A5568]">{o.order_date.slice(0, 10)}</td>
                    <td className="py-2.5 px-3">
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded font-medium uppercase"
                        style={{ backgroundColor: `${MARKETPLACE_COLORS[o.marketplace] || "#A0AEC0"}20`, color: MARKETPLACE_COLORS[o.marketplace] || "#A0AEC0" }}
                      >
                        {MARKETPLACE_LABELS[o.marketplace] || o.marketplace}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-xs text-[#718096] font-mono">{o.external_order_id.slice(0, 16)}{o.external_order_id.length > 16 ? "…" : ""}</td>
                    <td className="py-2.5 px-3 font-mono text-xs text-[#0B2545]">{o.sku}</td>
                    <td className="py-2.5 px-3 text-[#0B2545] truncate max-w-[280px]">{o.product_name}</td>
                    <td className="py-2.5 px-3 text-right text-[#4A5568]">{o.quantity}</td>
                    <td className="py-2.5 px-3 text-right text-[#4A5568]">{formatCurrency(o.price_excl_vat)}</td>
                    <td className="py-2.5 px-3 text-right font-medium text-[#0B2545]">{formatCurrency(o.net_revenue)}</td>
                    <td className="py-2.5 px-3">
                      <StatusBadge status={o.status} />
                    </td>
                  </tr>
                ))}
                {orders.length === 0 && !loading && (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-[#A0AEC0] text-sm">
                      Geen bestellingen gevonden
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; color: string }> = {
    open: { label: "Open", color: "bg-blue-100 text-blue-700" },
    shipped: { label: "Verzonden", color: "bg-purple-100 text-purple-700" },
    delivered: { label: "Geleverd", color: "bg-green-100 text-green-700" },
    cancelled: { label: "Geannuleerd", color: "bg-gray-100 text-gray-600" },
  };
  const c = config[status] || { label: status, color: "bg-gray-100 text-gray-600" };
  return <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${c.color}`}>{c.label}</span>;
}
