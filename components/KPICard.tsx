import { TrendingUp, TrendingDown } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  label: string;
  value: string;
  hint?: string;
  trend?: number;
  icon?: ReactNode;
  invertTrend?: boolean;
}

export default function KPICard({ label, value, hint, trend, icon, invertTrend }: Props) {
  const showTrend = typeof trend === "number" && Math.abs(trend) > 0.1;
  const isPositive = invertTrend ? (trend ?? 0) < 0 : (trend ?? 0) > 0;
  const trendColor = isPositive ? "text-green-600" : "text-red-600";

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-2">
        <div className="text-xs uppercase tracking-wide text-[#718096] font-medium">{label}</div>
        {icon && <div className="text-[#A0AEC0]">{icon}</div>}
      </div>
      <div className="text-2xl font-bold text-[#0B2545]" style={{ fontVariantNumeric: "tabular-nums" }}>{value}</div>
      <div className="flex items-center gap-1.5 mt-1">
        {showTrend && (
          <span className={`text-xs font-medium flex items-center gap-0.5 ${trendColor}`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {Math.abs(trend ?? 0).toFixed(1)}%
          </span>
        )}
        {hint && <div className="text-xs text-[#A0AEC0]">{hint}</div>}
      </div>
    </div>
  );
}
