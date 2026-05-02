// Cockpit dashboard pages — recreated as React.

function HeaderBar({ title, subtitle, mode, onModeChange, period, onPeriodChange, marketplace, onMarketplaceChange, showMarketplace = true, onRefresh }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, marginBottom: 24, alignItems: 'flex-start' }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: cpStyles.text, margin: 0, letterSpacing: '-0.01em' }}>{title}</h1>
        {subtitle && <p style={{ fontSize: 13, color: cpStyles.textSecondary, margin: '4px 0 0' }}>{subtitle}</p>}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
        <DemoToggle mode={mode} onChange={onModeChange} />
        {showMarketplace && <MarketplaceFilter selected={marketplace} onChange={onMarketplaceChange} />}
        <PeriodSelect value={period} onChange={onPeriodChange} />
        {onRefresh && <Button kind="secondary" size="sm" onClick={onRefresh} icon={<Icon name="refresh" size={13} />}>Vernieuwen</Button>}
      </div>
    </div>
  );
}

function DemoBanner() {
  return (
    <div style={{ background: cpStyles.blue50, border: `1px solid ${cpStyles.blue500}`, borderRadius: 12, padding: 16, marginBottom: 20, display: 'flex', gap: 12 }}>
      <Icon name="info" size={20} color={cpStyles.blue500} />
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: cpStyles.text }}>🎬 Demo modus actief</div>
        <div style={{ fontSize: 13, color: cpStyles.textSecondary, marginTop: 2 }}>Je ziet voorbeelddata van een fictieve seller. Schakel naar &ldquo;Live data&rdquo; bovenaan om je eigen marketplace data te zien.</div>
      </div>
    </div>
  );
}

// --- Overzicht (dashboard) ----------------------------------
function OverzichtPage({ mode, setMode, period, setPeriod, marketplace, setMarketplace }) {
  const k = DEMO_DATA.kpi;
  return (
    <main style={{ flex: 1, padding: 32, maxWidth: 1600, overflow: 'auto' }}>
      <HeaderBar title="Dashboard" subtitle="Marketplace prestaties — deze maand"
        mode={mode} onModeChange={setMode} period={period} onPeriodChange={setPeriod}
        marketplace={marketplace} onMarketplaceChange={setMarketplace} onRefresh={() => {}} />

      {mode === 'demo' && <DemoBanner />}

      {/* KPI grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 16 }}>
        <KPI label="Bruto omzet" value={fmtEUR(k.grossRevenue)} trend={k.revenueTrend} hint="vs vorige periode" icon={<Icon name="euro" size={14} />} />
        <KPI label="Netto omzet" value={fmtEUR(k.netRevenue)} hint="ná commissie" icon={<Icon name="euro" size={14} />} />
        <KPI label="Netto resultaat" value={fmtEUR(k.netProfit)} hint={`marge ${fmtPct(k.netMargin)}`} icon={<Icon name="trend-up" size={14} />} />
        <KPI label="Bestellingen" value={fmtNum(k.orderCount)} trend={k.ordersTrend} hint="vs vorige periode" icon={<Icon name="cart" size={14} />} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        <KPI label="Ad spend" value={fmtEUR(k.adSpend)} icon={<Icon name="megaphone" size={14} />} invertTrend />
        <KPI label="ROAS" value={`${k.roas.toFixed(1)}×`} hint="return on ad spend" />
        <KPI label="TACoS" value={fmtPct(k.tacos)} hint="ads / omzet" invertTrend />
        <KPI label="Gem. orderwaarde" value={fmtEUR(k.avgOrderValue)} icon={<Icon name="package" size={14} />} />
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 16 }}>
        <Card>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: cpStyles.text, margin: '0 0 16px' }}>Omzet per dag</h3>
          <div style={{ paddingBottom: 24 }}>
            <BarChart data={DEMO_DATA.revenueByDay} height={220} />
          </div>
        </Card>
        <Card>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: cpStyles.text, margin: '0 0 12px' }}>Per marktplaats</h3>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
            <DonutChart data={DEMO_DATA.byMarketplace.map(d => ({ value: d.revenue, color: MARKETPLACE_COLORS[d.marketplace] }))} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {DEMO_DATA.byMarketplace.map(d => (
              <div key={d.marketplace} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 9, height: 9, borderRadius: 9, background: MARKETPLACE_COLORS[d.marketplace] }} />
                  <span style={{ color: cpStyles.textSecondary }}>{MARKETPLACE_LABELS[d.marketplace]}</span>
                </div>
                <div>
                  <span style={{ fontWeight: 600, color: cpStyles.text, fontVariantNumeric: 'tabular-nums' }}>{fmtEUR(d.revenue)}</span>
                  <span style={{ color: cpStyles.textFaint, marginLeft: 8 }}>{d.orders}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Card>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: cpStyles.text, margin: '0 0 14px' }}>Top 5 producten</h3>
          {DEMO_DATA.topProducts.map((p, i) => (
            <div key={p.sku} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 4 ? `1px solid ${cpStyles.borderSoft}` : 'none' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: cpStyles.textFaint, width: 14 }}>{i + 1}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: cpStyles.text }}>{p.sku}</div>
                  <div style={{ fontSize: 11, color: cpStyles.textMuted }}>{p.name}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: cpStyles.text }}>{fmtEUR(p.revenue)}</div>
                <div style={{ fontSize: 11, color: cpStyles.textMuted }}>{p.units} stuks</div>
              </div>
            </div>
          ))}
        </Card>
        <Card>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: cpStyles.text, margin: '0 0 14px' }}>Recente bestellingen</h3>
          {DEMO_DATA.recentOrders.slice(0, 6).map((o, i) => (
            <div key={o.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 5 ? `1px solid ${cpStyles.borderSoft}` : 'none' }}>
              <div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <MarketplaceBadge mp={o.marketplace} />
                  <span style={{ fontSize: 11, color: cpStyles.textMuted }}>{o.date.slice(5)}</span>
                </div>
                <div style={{ fontSize: 13, color: cpStyles.text, marginTop: 2 }}>{o.name}</div>
              </div>
              <div style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: cpStyles.text }}>{fmtEUR(o.price)}</div>
                <div style={{ fontSize: 11, color: cpStyles.textMuted }}>{o.qty}×</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </main>
  );
}

// --- Bestellingen -------------------------------------------
function OrdersPage({ mode, setMode, period, setPeriod, marketplace, setMarketplace }) {
  return (
    <main style={{ flex: 1, padding: 32, maxWidth: 1600, overflow: 'auto' }}>
      <HeaderBar title="Bestellingen" subtitle={`${DEMO_DATA.kpi.orderCount} orders deze maand`}
        mode={mode} onModeChange={setMode} period={period} onPeriodChange={setPeriod}
        marketplace={marketplace} onMarketplaceChange={setMarketplace} />
      {mode === 'demo' && <DemoBanner />}
      <Card padding={0}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, fontVariantNumeric: 'tabular-nums' }}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              {['Datum','Marktplaats','SKU','Product','Aantal','Prijs'].map((h, i) => (
                <th key={h} style={{ padding: '14px 16px', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em', color: cpStyles.textMuted, fontWeight: 500, borderBottom: `1px solid ${cpStyles.border}`, textAlign: i >= 4 ? 'right' : 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DEMO_DATA.recentOrders.map((o, i) => (
              <tr key={o.id} style={{ borderBottom: i < DEMO_DATA.recentOrders.length - 1 ? `1px solid ${cpStyles.borderSoft}` : 'none' }}>
                <td style={{ padding: '11px 16px', color: cpStyles.textSecondary }}>{o.date}</td>
                <td style={{ padding: '11px 16px' }}><MarketplaceBadge mp={o.marketplace} /></td>
                <td style={{ padding: '11px 16px', fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: cpStyles.text }}>{o.sku}</td>
                <td style={{ padding: '11px 16px', color: cpStyles.text }}>{o.name}</td>
                <td style={{ padding: '11px 16px', textAlign: 'right', color: cpStyles.textSecondary }}>{o.qty}</td>
                <td style={{ padding: '11px 16px', textAlign: 'right', fontWeight: 500, color: cpStyles.text }}>{fmtEUR(o.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </main>
  );
}

// --- Producten ----------------------------------------------
function ProductenPage({ mode, setMode, period, setPeriod, marketplace, setMarketplace }) {
  return (
    <main style={{ flex: 1, padding: 32, maxWidth: 1600, overflow: 'auto' }}>
      <HeaderBar title="Producten" subtitle="Top sellers van deze maand"
        mode={mode} onModeChange={setMode} period={period} onPeriodChange={setPeriod}
        marketplace={marketplace} onMarketplaceChange={setMarketplace} />
      {mode === 'demo' && <DemoBanner />}
      <Card padding={0}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, fontVariantNumeric: 'tabular-nums' }}>
          <thead>
            <tr>
              {['Rang','SKU','Naam','Stuks','Omzet'].map((h, i) => (
                <th key={h} style={{ padding: '14px 16px', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em', color: cpStyles.textMuted, fontWeight: 500, borderBottom: `1px solid ${cpStyles.border}`, textAlign: i >= 3 ? 'right' : 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DEMO_DATA.topProducts.map((p, i) => (
              <tr key={p.sku} style={{ borderBottom: i < DEMO_DATA.topProducts.length - 1 ? `1px solid ${cpStyles.borderSoft}` : 'none' }}>
                <td style={{ padding: '12px 16px', fontWeight: 700, color: cpStyles.textFaint }}>{i + 1}</td>
                <td style={{ padding: '12px 16px', fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: cpStyles.text }}>{p.sku}</td>
                <td style={{ padding: '12px 16px', color: cpStyles.text }}>{p.name}</td>
                <td style={{ padding: '12px 16px', textAlign: 'right', color: cpStyles.textSecondary }}>{p.units}</td>
                <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 600, color: cpStyles.text }}>{fmtEUR(p.revenue)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </main>
  );
}

// --- Financieel ---------------------------------------------
function FinancieelPage({ mode, setMode, period, setPeriod }) {
  const t = DEMO_DATA.kpi;
  return (
    <main style={{ flex: 1, padding: 32, maxWidth: 1600, overflow: 'auto' }}>
      <HeaderBar title="Financieel" subtitle="P&L overzicht — totaal"
        mode={mode} onModeChange={setMode} period={period} onPeriodChange={setPeriod}
        marketplace="all" onMarketplaceChange={() => {}} showMarketplace={false} />
      {mode === 'demo' && <DemoBanner />}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        <KPI label="Bruto omzet" value={fmtEUR(t.grossRevenue)} icon={<Icon name="euro" size={14} />} />
        <KPI label="Netto omzet" value={fmtEUR(t.netRevenue)} hint="ná commissie" icon={<Icon name="euro" size={14} />} />
        <KPI label="Netto resultaat" value={fmtEUR(t.netProfit)} hint={`marge ${fmtPct(t.netMargin)}`} icon={<Icon name="trend-up" size={14} />} />
        <KPI label="Bestellingen" value={fmtNum(t.orderCount)} icon={<Icon name="cart" size={14} />} />
      </div>

      <Card>
        <h3 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 14px', color: cpStyles.text }}>P&L per maand</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, fontVariantNumeric: 'tabular-nums' }}>
          <thead>
            <tr>
              {['Maand','Orders','Bruto omzet','Netto omzet','Kosten','Netto resultaat','Marge'].map((h, i) => (
                <th key={h} style={{ padding: '10px 12px', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em', color: cpStyles.textMuted, fontWeight: 500, borderBottom: `1px solid ${cpStyles.border}`, textAlign: i === 0 ? 'left' : 'right' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DEMO_DATA.monthly.map(m => (
              <tr key={m.month} style={{ borderBottom: `1px solid ${cpStyles.borderSoft}` }}>
                <td style={{ padding: '10px 12px', fontWeight: 500, color: cpStyles.text }}>{m.month}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', color: cpStyles.textSecondary }}>{m.orders}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', color: cpStyles.textSecondary }}>{fmtEUR(m.gross)}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', color: cpStyles.text }}>{fmtEUR(m.net)}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', color: cpStyles.textSecondary }}>{fmtEUR(m.costs)}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 600, color: cpStyles.success }}>{fmtEUR(m.profit)}</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', color: cpStyles.success, fontSize: 12 }}>{fmtPct(m.margin)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ borderTop: `2px solid ${cpStyles.navy900}`, color: cpStyles.text, fontWeight: 700 }}>
              <td style={{ padding: '12px' }}>Totaal</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>{fmtNum(t.orderCount * 4)}</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>{fmtEUR(453230)}</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>{fmtEUR(370950)}</td>
              <td style={{ padding: '12px', textAlign: 'right' }}>{fmtEUR(293550)}</td>
              <td style={{ padding: '12px', textAlign: 'right', color: cpStyles.success }}>{fmtEUR(77400)}</td>
              <td style={{ padding: '12px', textAlign: 'right', color: cpStyles.success, fontSize: 12 }}>17,1%</td>
            </tr>
          </tfoot>
        </table>
      </Card>
    </main>
  );
}

// --- Connecties ---------------------------------------------
function ConnectiesPage({ mode, setMode }) {
  const statusPill = (status) => {
    const map = {
      active:  { color: cpStyles.success, bg: '#F0FAF4', label: 'Actief' },
      syncing: { color: cpStyles.blue500,  bg: cpStyles.blue50, label: 'Synct…' },
      error:   { color: cpStyles.error,    bg: '#FEF6F6', label: 'Fout' },
    }[status];
    return <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 4, color: map.color, background: map.bg, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{map.label}</span>;
  };
  return (
    <main style={{ flex: 1, padding: 32, maxWidth: 1600, overflow: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: cpStyles.text, margin: 0, letterSpacing: '-0.01em' }}>Connecties</h1>
          <p style={{ fontSize: 13, color: cpStyles.textSecondary, margin: '4px 0 0' }}>Beheer je marketplace API-keys. Encrypted in DB.</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <DemoToggle mode={mode} onChange={setMode} />
          <Button kind="primary" icon={<Icon name="plug" size={13} color="#fff" />}>Verbind marketplace</Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {DEMO_DATA.connections.map(c => (
          <Card key={c.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <MarketplaceBadge mp={c.mp} large />
                <div style={{ fontSize: 14, fontWeight: 600, color: cpStyles.text }}>{c.label}</div>
              </div>
              {statusPill(c.status)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: cpStyles.textMuted }}>
              <span>Laatste sync: {c.lastSync}</span>
              <div style={{ display: 'flex', gap: 6 }}>
                <Button kind="ghost" size="sm">Test</Button>
                <Button kind="secondary" size="sm">Bewerk</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

// --- Login --------------------------------------------------
function LoginPage({ onSubmit }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0B2545 0%, #13315C 50%, #1B3E6F 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ width: 380 }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h1 style={{ fontSize: 30, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.01em' }}>Cockpit</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', marginTop: 6 }}>Marketplace dashboard voor e-commerce sellers</p>
        </div>
        <div style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 24px 60px rgba(11,37,69,.30)' }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: cpStyles.text, margin: '0 0 18px' }}>Inloggen</h2>
          <form onSubmit={(e) => { e.preventDefault(); onSubmit?.(email, password); }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: cpStyles.text, display: 'block', marginBottom: 5 }}>Email</label>
              <input className="cp-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jij@bedrijf.nl" />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: cpStyles.text, display: 'block', marginBottom: 5 }}>Wachtwoord</label>
              <input className="cp-input" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            </div>
            <Button kind="primary" style={{ width: '100%', justifyContent: 'center', padding: '10px 14px' }}>Inloggen</Button>
          </form>
        </div>
        <p style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,.5)', marginTop: 18 }}>© 2026 Maurits Group · Cockpit</p>
      </div>
    </div>
  );
}

Object.assign(window, { OverzichtPage, OrdersPage, ProductenPage, FinancieelPage, ConnectiesPage, LoginPage });
