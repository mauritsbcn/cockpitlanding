"use client";

import { MARKETPLACE_LABELS, MARKETPLACE_COLORS } from "@/lib/constants";

interface Props {
  selected: string;
  onChange: (mp: string) => void;
  marketplaces?: string[];
}

export default function MarketplaceFilter({
  selected,
  onChange,
  marketplaces = ["bolcom", "amazon", "praxis", "shopify"],
}: Props) {
  return (
    <div className="flex flex-wrap gap-1.5">
      <button
        onClick={() => onChange("all")}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
          selected === "all"
            ? "bg-[#0B2545] text-white"
            : "bg-white text-[#4A5568] hover:text-[#0B2545] border border-[#E5EAF0]"
        }`}
      >
        Alle
      </button>
      {marketplaces.map((mp) => (
        <button
          key={mp}
          onClick={() => onChange(mp)}
          className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
            selected === mp ? "text-white" : "bg-white text-[#4A5568] hover:text-[#0B2545] border border-[#E5EAF0]"
          }`}
          style={selected === mp ? { backgroundColor: MARKETPLACE_COLORS[mp] || "#1B3E6F" } : undefined}
        >
          {MARKETPLACE_LABELS[mp] || mp}
        </button>
      ))}
    </div>
  );
}
