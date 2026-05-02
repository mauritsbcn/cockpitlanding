"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Overzicht" },
  { href: "/orders", label: "Bestellingen" },
  { href: "/producten", label: "Producten" },
  { href: "/financieel", label: "Financieel" },
  { href: "/instellingen/connecties", label: "Connecties" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-[#0B2545] text-white p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Cockpit</h1>
        <p className="text-xs text-white/60 mt-1">Marketplace dashboard</p>
      </div>

      <nav className="space-y-1 flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                isActive ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-white/10">
        <button
          onClick={async () => {
            await fetch("/api/auth", { method: "DELETE" });
            window.location.href = "/login";
          }}
          className="text-xs text-white/60 hover:text-white"
        >
          Uitloggen
        </button>
      </div>
    </aside>
  );
}
