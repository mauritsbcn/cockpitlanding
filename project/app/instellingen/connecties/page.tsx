"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { useDemoMode } from "@/components/DemoModeToggle";
import { Info } from "lucide-react";

interface ConnectionRow {
  id: number;
  marketplace: string;
  api_type: string;
  status: "inactive" | "connected" | "error" | "syncing";
  last_sync_at: string | null;
  last_test_at: string | null;
  last_error: string | null;
}

interface ApiSpec {
  type: "sales" | "advertising";
  label: string;
  description: string;
  fields: Array<{ key: string; label: string; type?: "text" | "password"; help?: string }>;
}

interface MarketplaceSpec {
  id: string;
  name: string;
  description: string;
  logo: string;
  apis: ApiSpec[];
}

const MARKETPLACES: MarketplaceSpec[] = [
  {
    id: "bolcom",
    name: "Bol.com",
    description: "Bol Retailer + Advertiser API",
    logo: "🛒",
    apis: [
      {
        type: "sales",
        label: "Verkoop",
        description: "Orders, voorraad, verzendingen via Retailer API v10",
        fields: [
          { key: "client_id", label: "Client ID", help: "Vind in Bol Seller portal → Account → API instellingen" },
          { key: "client_secret", label: "Client Secret", type: "password" },
        ],
      },
      {
        type: "advertising",
        label: "Advertenties",
        description: "Sponsored Products performance via Advertiser API",
        fields: [
          { key: "client_id", label: "Client ID (Advertiser)" },
          { key: "client_secret", label: "Client Secret (Advertiser)", type: "password" },
        ],
      },
    ],
  },
  {
    id: "amazon_nl",
    name: "Amazon",
    description: "SP-API (NL/BE) + Amazon Advertising API",
    logo: "📦",
    apis: [
      {
        type: "sales",
        label: "Verkoop (SP-API)",
        description: "Orders + voorraad via Selling Partner API",
        fields: [
          { key: "client_id", label: "LWA Client ID" },
          { key: "client_secret", label: "LWA Client Secret", type: "password" },
          { key: "refresh_token", label: "Refresh Token", type: "password" },
        ],
      },
      {
        type: "advertising",
        label: "Advertenties (Ads API)",
        description: "Sponsored Products + Brands campagnes",
        fields: [
          { key: "client_id", label: "Ads API Client ID" },
          { key: "client_secret", label: "Ads API Client Secret", type: "password" },
          { key: "refresh_token", label: "Ads Refresh Token", type: "password" },
          { key: "profile_id", label: "Profile ID (NL/BE)" },
        ],
      },
    ],
  },
  {
    id: "praxis",
    name: "Praxis / Mirakl",
    description: "Mirakl Marketplace API (Praxis, Brico, Maxeda)",
    logo: "🔨",
    apis: [
      {
        type: "sales",
        label: "Verkoop",
        description: "Orders + listings via Mirakl API",
        fields: [
          { key: "api_url", label: "API URL", help: "Bv. https://maxedanl-prod.mirakl.net" },
          { key: "api_key", label: "API Key", type: "password" },
        ],
      },
    ],
  },
  {
    id: "shopify",
    name: "Shopify",
    description: "Eigen webshop via Admin API",
    logo: "🛍️",
    apis: [
      {
        type: "sales",
        label: "Verkoop (Admin API)",
        description: "Orders, klanten, producten via Custom App",
        fields: [
          { key: "shop_url", label: "Shop URL", help: "Bv. mywinkel.myshopify.com" },
          { key: "access_token", label: "Admin API Access Token", type: "password", help: "Custom App → API credentials" },
        ],
      },
    ],
  },
];

export default function ConnectionsPage() {
  const [connections, setConnections] = useState<ConnectionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useDemoMode();
  const router = useRouter();

  const fetchConnections = useCallback(async () => {
    try {
      const res = await fetch("/api/connections");
      const data = await res.json();
      setConnections(data.connections || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConnections();
  }, [fetchConnections]);

  // Auto-poll wanneer er actieve syncs zijn
  useEffect(() => {
    const hasActiveSync = connections.some((c) => c.status === "syncing");
    if (!hasActiveSync) return;
    const interval = setInterval(() => {
      fetchConnections();
    }, 5000); // elke 5 sec checken
    return () => clearInterval(interval);
  }, [connections, fetchConnections]);

  const findConnection = (marketplace: string, api_type: string) =>
    connections.find((c) => c.marketplace === marketplace && c.api_type === api_type);

  const hasConnectedSync = connections.some((c) => c.status === "connected" && c.last_sync_at);

  function switchToLive() {
    setMode("live");
    router.push("/");
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-[#0B2545]">Marketplace connecties</h1>
          <p className="text-sm text-[#4A5568] mt-1">
            Verbind je marketplaces om automatisch orders + advertentie data te synchroniseren.
            Credentials worden versleuteld opgeslagen (AES-256).
          </p>
        </header>

        {/* Banner: demo modus + verbonden connecties → CTA naar live */}
        {mode === "demo" && hasConnectedSync && (
          <div className="card mb-6 border-[#3A8FE0] bg-[#EFF6FF]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#3A8FE0] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-[#0B2545]">Je hebt verbonden marketplaces ✓</h3>
                <p className="text-sm text-[#4A5568] mt-0.5">
                  Je staat nog in demo modus dus je dashboard toont voorbeelddata.
                  Schakel naar live data om je eigen synced cijfers te zien.
                </p>
                <button onClick={switchToLive} className="btn-primary text-xs mt-2">
                  Schakel naar live data →
                </button>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-sm text-[#718096]">Laden...</div>
        ) : (
          <div className="space-y-6 max-w-4xl">
            {MARKETPLACES.map((mp) => (
              <MarketplaceCard
                key={mp.id}
                mp={mp}
                findConnection={findConnection}
                onUpdate={fetchConnections}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function MarketplaceCard({
  mp,
  findConnection,
  onUpdate,
}: {
  mp: MarketplaceSpec;
  findConnection: (marketplace: string, api_type: string) => ConnectionRow | undefined;
  onUpdate: () => void;
}) {
  return (
    <div className="card">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-2xl">
          {mp.logo}
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-[#0B2545]">{mp.name}</h2>
          <p className="text-sm text-[#4A5568]">{mp.description}</p>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-[#E5EAF0]">
        {mp.apis.map((api) => (
          <ApiSection
            key={api.type}
            marketplace={mp.id}
            api={api}
            connection={findConnection(mp.id, api.type)}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
}

function ApiSection({
  marketplace,
  api,
  connection,
  onUpdate,
}: {
  marketplace: string;
  api: ApiSpec;
  connection: ConnectionRow | undefined;
  onUpdate: () => void;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error" | "info"; text: string; cta?: { label: string; onClick: () => void } } | null>(null);
  const [mode, setMode] = useDemoMode();
  const [syncDays, setSyncDays] = useState<number>(365); // default 1 jaar
  const router = useRouter();

  const status = connection?.status || "inactive";

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/connections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marketplace, api_type: api.type, credentials: values }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Opslaan mislukt" });
        return;
      }
      setMessage({ type: "success", text: "Opgeslagen. Klik 'Test' om te verifiëren." });
      setValues({});
      onUpdate();
    } catch {
      setMessage({ type: "error", text: "Verbindingsfout" });
    } finally {
      setSaving(false);
    }
  }

  async function handleTest() {
    if (!connection) return;
    setTesting(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/connections/${connection.id}/test`, { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setMessage({ type: "success", text: "✓ Verbinding werkt" });
      } else {
        setMessage({ type: "error", text: data.error || "Test mislukt" });
      }
      onUpdate();
    } catch {
      setMessage({ type: "error", text: "Verbindingsfout" });
    } finally {
      setTesting(false);
    }
  }

  async function handleDelete() {
    if (!connection) return;
    if (!confirm(`Verbinding ${api.label} verwijderen?`)) return;
    await fetch(`/api/connections/${connection.id}`, { method: "DELETE" });
    onUpdate();
  }

  async function handleSync() {
    if (!connection) return;
    setMessage(null);
    try {
      const res = await fetch(`/api/sync/trigger?id=${connection.id}&days=${syncDays}`, { method: "POST" });
      const data = await res.json();
      if (data.status === "started") {
        setMessage({
          type: "info",
          text: `🔄 Sync gestart voor laatste ${syncDays} dagen. Je kunt verder werken — voortgang verschijnt automatisch hier (max ${syncDays > 180 ? "5" : "2"} min).`,
        });
        onUpdate(); // pickt status='syncing' op + start polling
      } else {
        setMessage({ type: "error", text: data.error || "Sync trigger mislukt" });
      }
    } catch {
      setMessage({ type: "error", text: "Sync trigger mislukt" });
    }
  }

  return (
    <div className="bg-[#F7F9FC] rounded-lg p-4 border border-[#E5EAF0]">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-[#0B2545]">{api.label}</h3>
            <StatusBadge status={status} />
          </div>
          <p className="text-xs text-[#4A5568] mt-0.5">{api.description}</p>
          {connection?.last_sync_at && (
            <p className="text-xs text-[#718096] mt-1">
              Laatste sync: {new Date(connection.last_sync_at).toLocaleString("nl-NL")}
            </p>
          )}
          {connection?.last_error && (
            <p className="text-xs text-red-600 mt-1">⚠ {connection.last_error}</p>
          )}
        </div>
      </div>

      <form className="space-y-3" onSubmit={handleSave}>
        {api.fields.map((field) => (
          <div key={field.key}>
            <label className="block text-xs font-medium text-[#0B2545] mb-1">{field.label}</label>
            <input
              name={field.key}
              type={field.type === "password" ? "password" : "text"}
              className="input"
              placeholder={connection ? "•••••••• (al opgeslagen)" : ""}
              value={values[field.key] || ""}
              onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
            />
            {field.help && <p className="text-xs text-[#718096] mt-1">{field.help}</p>}
          </div>
        ))}

        {message && (
          <div
            className={`text-xs p-2 rounded ${
              message.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : message.type === "info"
                ? "bg-blue-50 text-blue-800 border border-blue-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            <div>{message.text}</div>
            {message.cta && (
              <button
                onClick={message.cta.onClick}
                className="mt-2 text-xs font-medium text-[#1B3E6F] hover:underline"
              >
                {message.cta.label}
              </button>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          <button type="submit" disabled={saving} className="btn-primary text-xs">
            {saving ? "Opslaan..." : connection ? "Bijwerken" : "Verbinden"}
          </button>
          {connection && (
            <>
              <button
                type="button"
                onClick={handleTest}
                disabled={testing}
                className="btn-secondary text-xs"
              >
                {testing ? "Bezig..." : "Test verbinding"}
              </button>
              <div className="flex items-center gap-1.5">
                <select
                  value={syncDays}
                  onChange={(e) => setSyncDays(parseInt(e.target.value, 10))}
                  className="text-xs border border-[#E5EAF0] rounded px-2 py-1.5 bg-white text-[#0B2545]"
                  title="Hoever terug syncen"
                  disabled={testing}
                >
                  <option value={30}>30 dagen</option>
                  <option value={90}>90 dagen</option>
                  <option value={180}>180 dagen</option>
                  <option value={365}>1 jaar</option>
                  <option value={730}>2 jaar</option>
                </select>
                <button
                  type="button"
                  onClick={handleSync}
                  disabled={testing}
                  className="btn-secondary text-xs"
                  title={`Sync orders van laatste ${syncDays} dagen`}
                >
                  {testing ? "Bezig..." : "Sync nu"}
                </button>
              </div>
              <button
                type="button"
                onClick={handleDelete}
                className="text-xs text-red-600 hover:text-red-700 ml-auto"
              >
                Verwijderen
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

function StatusBadge({ status }: { status: "inactive" | "connected" | "error" | "syncing" }) {
  const config = {
    inactive: { label: "Niet verbonden", color: "bg-gray-100 text-gray-600" },
    connected: { label: "Verbonden", color: "bg-green-100 text-green-700" },
    error: { label: "Fout", color: "bg-red-100 text-red-700" },
    syncing: { label: "🔄 Syncing...", color: "bg-blue-100 text-blue-700 animate-pulse" },
  }[status];
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${config.color}`}>
      {config.label}
    </span>
  );
}
