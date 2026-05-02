// Cockpit UI kit — shared primitives.
// Components are exposed on `window` so other Babel scripts can use them.

const cpStyles = {
  surface: '#F7F9FC',
  bg: '#FFFFFF',
  navy900: '#0B2545',
  navy700: '#13315C',
  navy500: '#1B3E6F',
  blue500: '#3A8FE0',
  blue50:  '#EFF6FF',
  border:  '#E5EAF0',
  borderSoft: '#F0F4F8',
  text: '#0B2545',
  textSecondary: '#4A5568',
  textMuted: '#718096',
  textFaint: '#A0AEC0',
  success: '#16A34A',
  error: '#DC2626',
  shadowCard: '0 1px 2px rgba(11,37,69,.04)',
  shadowElevated: '0 8px 24px rgba(11,37,69,.08)',
};

const MARKETPLACE_LABELS = {
  bolcom: 'Bol.com',
  amazon_nl: 'Amazon NL',
  amazon_be: 'Amazon BE',
  amazon: 'Amazon',
  praxis: 'Praxis',
  brico: 'Brico',
  shopify: 'Shopify',
};
const MARKETPLACE_COLORS = {
  bolcom: '#0066B2',
  amazon_nl: '#FF9900',
  amazon_be: '#FF9900',
  amazon: '#FF9900',
  praxis: '#00843D',
  brico: '#E30613',
  shopify: '#5A8E3A',
};

function fmtEUR(n, opts = {}) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: opts.dp ?? (Math.abs(n) < 100 ? 2 : 0),
  }).format(n || 0);
}
function fmtNum(n) { return new Intl.NumberFormat('nl-NL').format(n || 0); }
function fmtPct(n, dp = 1) { return `${(n || 0).toFixed(dp)}%`; }

// ---- Tiny icon set (matches Lucide stroke 2) ---------
function Icon({ name, size = 16, color = 'currentColor', strokeWidth = 2 }) {
  const paths = {
    euro:           <><path d="M18 7.5C16.5 6 14.7 5 12 5c-4 0-7 3-7 7s3 7 7 7c2.7 0 4.5-1 6-2.5"/><line x1="3" y1="10" x2="13" y2="10"/><line x1="3" y1="14" x2="13" y2="14"/></>,
    cart:           <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></>,
    'trend-up':     <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>,
    'trend-down':   <><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></>,
    megaphone:      <><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></>,
    package:        <><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.3 7 12 12 20.7 7"/><line x1="12" y1="22" x2="12" y2="12"/></>,
    refresh:        <><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 14.8-3.4L23 10M1 14l4.7 4.4A9 9 0 0 0 20.5 15"/></>,
    info:           <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>,
    plug:           <><path d="M12 22v-5"/><path d="M9 7V2"/><path d="M15 7V2"/><path d="M5 11h14v2a7 7 0 0 1-14 0v-2z"/></>,
    settings:       <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>,
    check:          <><polyline points="20 6 9 17 4 12"/></>,
    x:              <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    'arrow-right':  <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    chart:          <><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="13" y="8" width="3" height="10"/><rect x="19" y="14" width="0" height="4"/></>,
    bell:           <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></>,
    search:         <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.6" y2="16.6"/></>,
    user:           <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    logout:         <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    lock:           <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>
  );
}

// ---- Card --------------------------------------------------
function Card({ children, padding = 20, style, className }) {
  return (
    <div className={className} style={{
      background: cpStyles.bg,
      border: `1px solid ${cpStyles.border}`,
      borderRadius: 12,
      padding,
      boxShadow: cpStyles.shadowCard,
      ...(style || {}),
    }}>{children}</div>
  );
}

// ---- Buttons -----------------------------------------------
function Button({ kind = 'primary', children, onClick, disabled, icon, size = 'md', style }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 6, fontFamily: 'inherit', fontWeight: 500, cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent', borderRadius: 6,
    padding: size === 'sm' ? '6px 10px' : '8px 14px',
    fontSize: size === 'sm' ? 12 : 13,
    transition: 'background 150ms ease, color 150ms ease',
    opacity: disabled ? 0.5 : 1,
  };
  const variants = {
    primary:   { background: cpStyles.navy900, color: '#fff' },
    secondary: { background: '#fff', color: cpStyles.text, borderColor: cpStyles.border },
    ghost:     { background: 'transparent', color: cpStyles.textSecondary },
    danger:    { background: '#fff', color: cpStyles.error, borderColor: cpStyles.border },
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: cpStyles.navy700,
    secondary: cpStyles.surface,
    ghost: cpStyles.surface,
    danger: '#FEF6F6',
  }[kind];
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[kind], ...(hover && !disabled ? { background: hoverBg } : {}), ...(style || {}) }}>
      {icon}
      {children}
    </button>
  );
}

// ---- Marketplace badge -------------------------------------
function MarketplaceBadge({ mp, solid = false, large = false }) {
  const label = MARKETPLACE_LABELS[mp] || mp;
  const color = MARKETPLACE_COLORS[mp] || cpStyles.textFaint;
  if (solid) {
    return <span style={{ background: color, color: '#fff', fontSize: large ? 12 : 10, fontWeight: 600, padding: large ? '4px 10px' : '3px 7px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</span>;
  }
  return <span style={{ background: `${color}20`, color, fontSize: large ? 12 : 10, fontWeight: 600, padding: large ? '4px 10px' : '3px 7px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</span>;
}

// ---- KPI tile ----------------------------------------------
function KPI({ label, value, hint, trend, icon, invertTrend }) {
  const showTrend = typeof trend === 'number' && Math.abs(trend) > 0.1;
  const isPositive = invertTrend ? (trend ?? 0) < 0 : (trend ?? 0) > 0;
  const trendColor = isPositive ? cpStyles.success : cpStyles.error;
  return (
    <Card padding={18}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 10, minHeight: 14 }}>
        <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em', color: cpStyles.textMuted, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 }}>{label}</span>
        {icon && <span style={{ color: cpStyles.textFaint, flexShrink: 0 }}>{icon}</span>}
      </div>
      <div style={{ fontSize: 24, fontWeight: 700, color: cpStyles.text, letterSpacing: '-0.01em', lineHeight: 1.1, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 11 }}>
        {showTrend && (
          <span style={{ color: trendColor, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
            <Icon name={isPositive ? 'trend-up' : 'trend-down'} size={11} color={trendColor} />
            {Math.abs(trend ?? 0).toFixed(1)}%
          </span>
        )}
        {hint && <span style={{ color: cpStyles.textFaint }}>{hint}</span>}
      </div>
    </Card>
  );
}

// ---- Sidebar -----------------------------------------------
function Sidebar({ active, onNavigate, onLogout }) {
  const items = [
    { id: 'overzicht', label: 'Overzicht' },
    { id: 'orders', label: 'Bestellingen' },
    { id: 'producten', label: 'Producten' },
    { id: 'financieel', label: 'Financieel' },
    { id: 'connecties', label: 'Connecties' },
  ];
  return (
    <aside style={{ width: 240, background: cpStyles.navy900, color: '#fff', padding: 24, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em' }}>Cockpit</span>
          <span style={{ width: 8, height: 8, borderRadius: 8, background: '#fff', display: 'inline-block', position: 'relative' }}>
            <span style={{ position: 'absolute', inset: 2.5, borderRadius: 8, background: cpStyles.blue500 }} />
          </span>
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.6)', marginTop: 2 }}>Marketplace dashboard</div>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        {items.map(item => {
          const isActive = active === item.id;
          return (
            <a key={item.id}
               onClick={() => onNavigate?.(item.id)}
               style={{
                 display: 'block', padding: '8px 12px', fontSize: 13, borderRadius: 8,
                 color: isActive ? '#fff' : 'rgba(255,255,255,.8)',
                 background: isActive ? 'rgba(255,255,255,.10)' : 'transparent',
                 cursor: 'pointer', textDecoration: 'none', userSelect: 'none',
               }}
               onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.color = '#fff'; } }}
               onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,.8)'; } }}
            >{item.label}</a>
          );
        })}
      </nav>
      <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.10)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.6)' }}>maurits@bedrijf.nl</div>
        <a onClick={onLogout} style={{ fontSize: 11, color: 'rgba(255,255,255,.6)', cursor: 'pointer' }}
           onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
           onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,.6)'}>Uitloggen</a>
      </div>
    </aside>
  );
}

// ---- Demo mode toggle --------------------------------------
function DemoToggle({ mode, onChange }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', background: '#fff', border: `1px solid ${cpStyles.border}`, borderRadius: 8, padding: 3, fontSize: 12 }}>
      <button onClick={() => onChange('live')}
        style={{ padding: '6px 12px', borderRadius: 6, fontWeight: 500, border: 0, cursor: 'pointer',
          background: mode === 'live' ? cpStyles.navy900 : 'transparent', color: mode === 'live' ? '#fff' : cpStyles.textSecondary }}>
        Live data
      </button>
      <button onClick={() => onChange('demo')}
        style={{ padding: '6px 12px', borderRadius: 6, fontWeight: 500, border: 0, cursor: 'pointer',
          background: mode === 'demo' ? cpStyles.blue500 : 'transparent', color: mode === 'demo' ? '#fff' : cpStyles.textSecondary }}>
        🎬 Demo
      </button>
    </div>
  );
}

// ---- Marketplace filter chips ------------------------------
function MarketplaceFilter({ selected, onChange, marketplaces = ['bolcom','amazon_nl','praxis','shopify'] }) {
  const Chip = ({ id, label, color }) => {
    const active = selected === id;
    return (
      <button onClick={() => onChange(id)} style={{
        padding: '6px 12px', fontSize: 12, fontWeight: 500, borderRadius: 9999, cursor: 'pointer',
        border: active ? 0 : `1px solid ${cpStyles.border}`,
        background: active ? (color || cpStyles.navy900) : '#fff',
        color: active ? '#fff' : cpStyles.textSecondary,
      }}>{label}</button>
    );
  };
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      <Chip id="all" label="Alle" />
      {marketplaces.map(mp => <Chip key={mp} id={mp} label={MARKETPLACE_LABELS[mp]} color={MARKETPLACE_COLORS[mp]} />)}
    </div>
  );
}

// ---- Period select -----------------------------------------
function PeriodSelect({ value, onChange }) {
  const labels = { dag: 'Vandaag', week: 'Deze week', maand: 'Deze maand', kwartaal: 'Dit kwartaal', jaar: 'Dit jaar', totaal: 'Totaal' };
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}
      style={{
        fontSize: 13, padding: '7px 28px 7px 12px', borderRadius: 6, border: `1px solid ${cpStyles.border}`,
        background: `#fff url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'><path d='M3 5l3 3 3-3' stroke='%23718096' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>") no-repeat right 10px center`,
        color: cpStyles.text, appearance: 'none', cursor: 'pointer', fontFamily: 'inherit',
      }}>
      {Object.entries(labels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
    </select>
  );
}

// ---- Bar chart (svg) ---------------------------------------
function BarChart({ data, height = 220, color = cpStyles.navy500 }) {
  if (!data || data.length === 0) return <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cpStyles.textFaint, fontSize: 12 }}>Geen data</div>;
  const max = Math.max(...data.map(d => d.value));
  const w = 100 / data.length;
  return (
    <div style={{ height, width: '100%', position: 'relative' }}>
      <svg width="100%" height="100%" viewBox={`0 0 100 100`} preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        {[0.25, 0.5, 0.75].map(p => (
          <line key={p} x1="0" y1={100 * p} x2="100" y2={100 * p} stroke={cpStyles.border} strokeWidth="0.2" strokeDasharray="0.6 0.6" />
        ))}
        {data.map((d, i) => {
          const h = (d.value / max) * 92;
          const x = i * w + w * 0.18;
          const bw = w * 0.64;
          return <rect key={i} x={x} y={100 - h} width={bw} height={h} fill={color} rx="0.6" />;
        })}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: -18, left: 0, right: 0, fontSize: 10, color: cpStyles.textMuted }}>
        {data.filter((_, i) => i % Math.ceil(data.length / 6) === 0).map((d, i) => <span key={i}>{d.label}</span>)}
      </div>
    </div>
  );
}

// ---- Donut chart -------------------------------------------
function DonutChart({ data, size = 160 }) {
  const total = data.reduce((a, b) => a + b.value, 0) || 1;
  let cum = 0;
  const r = 60, ir = 38, cx = 80, cy = 80;
  const arc = (start, end, color) => {
    const sa = (start / total) * Math.PI * 2 - Math.PI / 2;
    const ea = (end / total) * Math.PI * 2 - Math.PI / 2;
    const large = end - start > total / 2 ? 1 : 0;
    const x1 = cx + r * Math.cos(sa), y1 = cy + r * Math.sin(sa);
    const x2 = cx + r * Math.cos(ea), y2 = cy + r * Math.sin(ea);
    const x3 = cx + ir * Math.cos(ea), y3 = cy + ir * Math.sin(ea);
    const x4 = cx + ir * Math.cos(sa), y4 = cy + ir * Math.sin(sa);
    return <path key={color + start} d={`M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${ir} ${ir} 0 ${large} 0 ${x4} ${y4} Z`} fill={color} />;
  };
  return (
    <svg width={size} height={size} viewBox="0 0 160 160">
      {data.map(d => {
        const start = cum;
        cum += d.value;
        return arc(start, cum, d.color);
      })}
    </svg>
  );
}

Object.assign(window, {
  cpStyles, MARKETPLACE_LABELS, MARKETPLACE_COLORS,
  fmtEUR, fmtNum, fmtPct,
  Icon, Card, Button, MarketplaceBadge, KPI, Sidebar,
  DemoToggle, MarketplaceFilter, PeriodSelect,
  BarChart, DonutChart,
});
