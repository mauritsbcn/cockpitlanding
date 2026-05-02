// Cockpit landing — icon set & dashboard mock
// Pure SVGs, no external deps. All exported on window.

// ---- Lucide-style icons (stroke 2) ----------------------------------
function Icon({ name, size = 18, color = 'currentColor', strokeWidth = 2 }) {
  const s = { width: size, height: size, stroke: color, fill: 'none', strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'arrow-right':
      return <svg viewBox="0 0 24 24" style={s}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'check':
      return <svg viewBox="0 0 24 24" style={s}><path d="M20 6L9 17l-5-5"/></svg>;
    case 'check-sm':
      return <svg viewBox="0 0 16 16" style={{ ...s, width: 10, height: 10 }}><path d="M13 4L6 11l-3-3"/></svg>;
    case 'shield':
      return <svg viewBox="0 0 24 24" style={s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case 'zap':
      return <svg viewBox="0 0 24 24" style={s}><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>;
    case 'trending-up':
      return <svg viewBox="0 0 24 24" style={s}><path d="M3 17l6-6 4 4 8-8M14 7h7v7"/></svg>;
    case 'trending-down':
      return <svg viewBox="0 0 24 24" style={s}><path d="M3 7l6 6 4-4 8 8M14 17h7v-7"/></svg>;
    case 'plus':
      return <svg viewBox="0 0 24 24" style={s}><path d="M12 5v14M5 12h14"/></svg>;
    case 'lock':
      return <svg viewBox="0 0 24 24" style={s}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>;
    case 'globe':
      return <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>;
    case 'layers':
      return <svg viewBox="0 0 24 24" style={s}><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>;
    case 'users':
      return <svg viewBox="0 0 24 24" style={s}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
    case 'piechart':
      return <svg viewBox="0 0 24 24" style={s}><path d="M21.21 15.89A10 10 0 118 2.83"/><path d="M22 12A10 10 0 0012 2v10z"/></svg>;
    case 'home':
      return <svg viewBox="0 0 24 24" style={s}><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>;
    case 'box':
      return <svg viewBox="0 0 24 24" style={s}><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.27 6.96L12 12l8.73-5.04M12 22V12"/></svg>;
    case 'tag':
      return <svg viewBox="0 0 24 24" style={s}><path d="M20.59 13.41L12 22l-9-9V3h10z"/><circle cx="7.5" cy="7.5" r="1.5" fill={color} stroke="none"/></svg>;
    case 'plug':
      return <svg viewBox="0 0 24 24" style={s}><path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 01-12 0V8z"/><path d="M12 18v4"/></svg>;
    case 'chev-right':
      return <svg viewBox="0 0 24 24" style={s}><path d="M9 6l6 6-6 6"/></svg>;
    case 'chev-down':
      return <svg viewBox="0 0 24 24" style={s}><path d="M6 9l6 6 6-6"/></svg>;
    case 'menu':
      return <svg viewBox="0 0 24 24" style={s}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case 'sparkle':
      return <svg viewBox="0 0 24 24" style={s}><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"/></svg>;
    case 'eye':
      return <svg viewBox="0 0 24 24" style={s}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'database':
      return <svg viewBox="0 0 24 24" style={s}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
    default:
      return null;
  }
}

// ---- Marketplace badge dot -----------------------------------------
const MP_COLORS = {
  bol: '#0066B2',
  amazon: '#FF9900',
  praxis: '#00843D',
  shopify: '#5A8E3A',
};
const MP_LABELS = { bol: 'Bol', amazon: 'Amazon', praxis: 'Praxis', shopify: 'Shopify' };

// ---- Small reusable subcomponents for the dashboard mock ------------
function MockSidebar() {
  const items = [
    { id: 'overzicht', label: 'Overzicht', icon: 'home', active: true },
    { id: 'orders',    label: 'Bestellingen', icon: 'box' },
    { id: 'producten', label: 'Producten',    icon: 'tag' },
    { id: 'financieel',label: 'Financieel',   icon: 'piechart' },
    { id: 'connecties',label: 'Connecties',   icon: 'plug' },
  ];
  return (
    <div className="lp-mock-side">
      <div className="lp-mock-side__brand">
        <span className="lp-mock-side__mark"></span>
        Cockpit
      </div>
      <div className="lp-mock-side__nav">
        {items.map(it => (
          <div key={it.id} className={'lp-mock-side__nav-item' + (it.active ? ' lp-mock-side__nav-item--active' : '')}>
            <span className="lp-mock-side__nav-icon"><Icon name={it.icon} size={12} strokeWidth={2} /></span>
            {it.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function MockKPI({ label, value, trend, dir = 'up' }) {
  return (
    <div className="lp-mock-kpi">
      <div className="lp-mock-kpi__label">{label}</div>
      <div className="lp-mock-kpi__value">{value}</div>
      <div className={'lp-mock-kpi__trend lp-mock-kpi__trend--' + dir}>
        <Icon name={dir === 'up' ? 'trending-up' : 'trending-down'} size={9} strokeWidth={2.5} />
        {trend}
      </div>
    </div>
  );
}

// Bar chart — daily revenue stacked by marketplace
function MockBarChart() {
  // 14 days of data — total normalized so tallest bar = 100
  const data = [
    [22, 14, 8, 4],   [25, 16, 10, 5],  [28, 17, 11, 6], [21, 13, 9, 5],
    [30, 18, 12, 6],  [33, 20, 13, 7],  [38, 22, 14, 8], [29, 18, 11, 6],
    [32, 19, 13, 7],  [35, 21, 14, 7],  [40, 23, 15, 8], [37, 22, 14, 7],
    [42, 25, 17, 9],  [44, 26, 17, 9],
  ];
  const colors = [MP_COLORS.bol, MP_COLORS.amazon, MP_COLORS.praxis, MP_COLORS.shopify];
  const maxTot = Math.max(...data.map(d => d.reduce((a, b) => a + b, 0)));
  return (
    <div className="lp-mock-card" style={{ minHeight: 0 }}>
      <div className="lp-mock-card__head" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
          <div className="lp-mock-card__title">Omzet per dag</div>
          <div className="lp-mock-card__sub">Laatste 14 dagen</div>
        </div>
        <div className="lp-mock-legend" style={{ flexWrap: 'wrap' }}>
          {Object.entries(MP_LABELS).map(([k, v], i) => (
            <span key={k} className="lp-mock-legend__item">
              <span className="lp-mock-legend__dot" style={{ background: colors[i] }} />{v}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 280 100" preserveAspectRatio="none" style={{ width: '100%', height: 110, display: 'block' }}>
        {/* gridlines */}
        {[0.25, 0.5, 0.75, 1].map((t, i) => (
          <line key={i} x1="0" x2="280" y1={100 - 100 * t} y2={100 - 100 * t} stroke="#E5EAF0" strokeWidth="0.5" strokeDasharray="2 3" />
        ))}
        {data.map((d, i) => {
          const tot = d.reduce((a, b) => a + b, 0);
          const x = 4 + i * (272 / data.length);
          const w = (272 / data.length) - 4;
          let yCursor = 100;
          return (
            <g key={i}>
              {d.map((v, j) => {
                const h = (v / maxTot) * 92;
                yCursor -= h;
                return (
                  <rect key={j} x={x} y={yCursor} width={w} height={h} fill={colors[j]} rx="1" />
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Donut — share per marketplace
function MockDonut() {
  const slices = [
    { label: 'Bol', value: 45, color: MP_COLORS.bol },
    { label: 'Amazon', value: 28, color: MP_COLORS.amazon },
    { label: 'Praxis', value: 18, color: MP_COLORS.praxis },
    { label: 'Shopify', value: 9, color: MP_COLORS.shopify },
  ];
  const r = 32, cx = 50, cy = 50, circ = 2 * Math.PI * r;
  let acc = 0;
  return (
    <div className="lp-mock-card">
      <div className="lp-mock-card__head">
        <div>
          <div className="lp-mock-card__title">Omzet per marketplace</div>
          <div className="lp-mock-card__sub">% van totaal</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <svg viewBox="0 0 100 100" style={{ width: 88, height: 88, flexShrink: 0 }}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F0F4F8" strokeWidth="13" />
          {slices.map((s, i) => {
            const dash = (s.value / 100) * circ;
            const offset = circ - acc;
            acc += dash;
            return (
              <circle key={i}
                cx={cx} cy={cy} r={r} fill="none"
                stroke={s.color} strokeWidth="13"
                strokeDasharray={`${dash} ${circ - dash}`}
                strokeDashoffset={offset}
                transform={`rotate(-90 ${cx} ${cy})`}
              />
            );
          })}
          <text x={cx} y={cy - 1} textAnchor="middle" dominantBaseline="middle"
            fontSize="13" fontWeight="700" fill="#0B2545"
            style={{ fontFamily: 'Inter, system-ui', letterSpacing: '-0.02em' }}>€159k</text>
          <text x={cx} y={cy + 11} textAnchor="middle" dominantBaseline="middle"
            fontSize="6" fill="#718096" fontWeight="500"
            style={{ fontFamily: 'Inter, system-ui' }}>totaal</text>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 10, width: '100%' }}>
          {slices.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--cp-text-secondary)', minWidth: 0 }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: s.color, flexShrink: 0 }} />
              <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.label}</span>
              <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600, color: 'var(--cp-text)', flexShrink: 0 }}>{s.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Full hero dashboard mock
function HeroDashboardMock() {
  return (
    <div className="lp-mock" role="img" aria-label="Cockpit dashboard preview">
      <div className="lp-mock__chrome">
        <span className="lp-mock__dot" style={{ background: '#FF6058' }} />
        <span className="lp-mock__dot" style={{ background: '#FFBD2E' }} />
        <span className="lp-mock__dot" style={{ background: '#28C941' }} />
        <span className="lp-mock__url">
          <span className="lp-mock__url-lock">
            <Icon name="lock" size={9} strokeWidth={2.5} color="#16A34A" />
          </span>
          app.cockpit.nl/overzicht
        </span>
      </div>
      <div className="lp-mock__body">
        <MockSidebar />
        <div className="lp-mock-main">
          <div className="lp-mock-main__head">
            <div>
              <div className="lp-mock-main__title">Overzicht</div>
              <div className="lp-mock-main__subtitle">November 2025 · alle marketplaces</div>
            </div>
            <div className="lp-mock-main__filters">
              <span className="lp-mock-pill lp-mock-pill--active">Maand</span>
              <span className="lp-mock-pill">Kwartaal</span>
              <span className="lp-mock-pill">Jaar</span>
            </div>
          </div>
          <div className="lp-mock-kpis">
            <MockKPI label="Bruto omzet" value="€159.420" trend="+12,4%" dir="up" />
            <MockKPI label="Netto resultaat" value="€23.040" trend="+18,1%" dir="up" />
            <MockKPI label="ROAS" value="4,2×" trend="+0,4" dir="up" />
            <MockKPI label="Bestellingen" value="2.340" trend="+6,2%" dir="up" />
          </div>
          <div className="lp-mock-charts">
            <MockBarChart />
            <MockDonut />
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  Icon, MP_COLORS, MP_LABELS,
  HeroDashboardMock,
});
