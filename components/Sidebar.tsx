"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Package, TrendingUp, Plug, LogOut } from "lucide-react";
import { APP_LOGIN_URL } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Overzicht", icon: LayoutDashboard, demoOnly: false },
  { href: "/dashboard/orders", label: "Bestellingen", icon: ShoppingBag, demoOnly: true },
  { href: "/dashboard/producten", label: "Producten", icon: Package, demoOnly: true },
  { href: "/dashboard/financieel", label: "Financieel", icon: TrendingUp, demoOnly: true },
  { href: "/dashboard/connecties", label: "Connecties", icon: Plug, demoOnly: true },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 flex-shrink-0 bg-[#0B2545] text-white flex flex-col min-h-screen">
      <div className="p-6 pb-0">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#3A8FE0", boxShadow: "0 0 0 2px rgba(58,143,224,0.25)", flexShrink: 0 }} />
          <span className="text-xl font-bold tracking-tight">Cockpit</span>
        </Link>

        <nav className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            if (item.demoOnly) {
              return (
                <div
                  key={item.href}
                  className="flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg text-white/35 cursor-not-allowed select-none"
                  title="Beschikbaar in productie — log in voor volledige toegang"
                >
                  <Icon className="w-4 h-4 flex-shrink-0 text-white/25" />
                  <span className="flex-1">{item.label}</span>
                  <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-white/40 font-medium">
                    Pro
                  </span>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-colors ${
                  isActive
                    ? "bg-white/10 text-white font-semibold"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-[#3A8FE0]" : "text-white/50"}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 pt-4 border-t border-white/10 space-y-2">
        <div className="text-xs text-white/40 uppercase tracking-wider font-medium">Demo modus</div>
        <a
          href={APP_LOGIN_URL}
          className="flex items-center justify-center gap-2 text-xs text-white bg-[#3A8FE0] hover:bg-[#2F7CC9] transition-colors px-3 py-2 rounded-lg font-medium"
        >
          Inloggen op productie
        </a>
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Terug naar site
        </Link>
      </div>
    </aside>
  );
}
