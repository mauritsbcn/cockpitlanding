"use client";

import { useEffect, useState, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import { useDemoMode } from "@/components/DemoModeToggle";
import DemoModeToggle from "@/components/DemoModeToggle";
import { formatCurrency, formatNumber } from "@/lib/constants";
import { Search } from "lucide-react";

interface Product {
  id: number;
  sku: string;
  name: string;
  cost_price: number;
  stock: number;
  active: boolean;
  units_60d: number;
  revenue_60d: number;
  orders_60d: number;
}

export default function ProductsPage() {
  const [mode] = useDemoMode();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ mode });
      if (search) params.set("search", search);
      const res = await fetch(`/api/products?${params}`);
      if (res.ok) {
        const data = await res.json();
        setProducts(data.products);
      }
    } finally {
      setLoading(false);
    }
  }, [mode, search]);

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
            <h1 className="text-2xl font-bold text-[#0B2545]">Producten</h1>
            <p className="text-sm text-[#4A5568] mt-1">
              {loading ? "Laden..." : `${formatNumber(products.length)} producten · omzet laatste 60 dagen`}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DemoModeToggle />
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#A0AEC0]" />
              <input
                type="text"
                placeholder="Zoek SKU of naam..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-xs border border-[#E5EAF0] rounded-lg pl-7 pr-3 py-1.5 bg-white w-64"
              />
            </div>
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-[#718096] border-b border-[#E5EAF0]">
                <tr>
                  <th className="text-left py-2 px-3 font-medium">SKU</th>
                  <th className="text-left py-2 px-3 font-medium">Naam</th>
                  <th className="text-right py-2 px-3 font-medium">Voorraad</th>
                  <th className="text-right py-2 px-3 font-medium">Kostprijs</th>
                  <th className="text-right py-2 px-3 font-medium">Verkocht (60d)</th>
                  <th className="text-right py-2 px-3 font-medium">Bestellingen (60d)</th>
                  <th className="text-right py-2 px-3 font-medium">Omzet (60d)</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b border-[#F0F4F8] hover:bg-[#F7F9FC]">
                    <td className="py-2.5 px-3 font-mono text-xs text-[#0B2545]">{p.sku}</td>
                    <td className="py-2.5 px-3 text-[#0B2545] truncate max-w-[300px]">{p.name}</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className={`text-xs font-medium ${p.stock < 5 ? "text-red-600" : p.stock < 15 ? "text-amber-600" : "text-[#4A5568]"}`}>
                        {p.stock}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-right text-[#4A5568]">{formatCurrency(p.cost_price)}</td>
                    <td className="py-2.5 px-3 text-right text-[#4A5568]">{p.units_60d}</td>
                    <td className="py-2.5 px-3 text-right text-[#4A5568]">{p.orders_60d}</td>
                    <td className="py-2.5 px-3 text-right font-medium text-[#0B2545]">{formatCurrency(p.revenue_60d)}</td>
                  </tr>
                ))}
                {products.length === 0 && !loading && (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-[#A0AEC0] text-sm">
                      Geen producten gevonden
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
