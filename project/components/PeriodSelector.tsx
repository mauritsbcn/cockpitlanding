"use client";

import type { Period } from "@/lib/constants";
import { PERIOD_LABELS } from "@/lib/constants";

interface Props {
  selected: Period;
  onChange: (p: Period) => void;
}

const PERIODS: Period[] = ["dag", "week", "maand", "kwartaal", "jaar", "totaal"];

export default function PeriodSelector({ selected, onChange }: Props) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value as Period)}
      className="text-sm border border-[#E5EAF0] rounded-lg px-3 py-1.5 bg-white text-[#0B2545] focus:outline-none focus:border-[#1B3E6F]"
    >
      {PERIODS.map((p) => (
        <option key={p} value={p}>{PERIOD_LABELS[p]}</option>
      ))}
    </select>
  );
}
