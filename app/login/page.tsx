"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // In demo modus: redirect direct naar dashboard
    setTimeout(() => router.push("/dashboard"), 600);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0B2545 0%, #13315C 50%, #1B3E6F 100%)",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#fff",
          borderRadius: 16,
          padding: "40px",
          boxShadow: "0 24px 60px rgba(11, 37, 69, 0.18)",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
          <span style={{ width: 32, height: 32, display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <span style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid #0B2545" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#3A8FE0" }} />
          </span>
          <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", color: "#0B2545" }}>Cockpit</span>
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#0B2545", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
          Inloggen
        </h1>
        <p style={{ fontSize: 14, color: "#718096", margin: "0 0 28px" }}>
          Toegang tot je marketplace dashboard.
        </p>

        {/* Demo notice */}
        <div style={{ background: "#EFF6FF", border: "1px solid #3A8FE0", borderRadius: 8, padding: "12px 14px", marginBottom: 24, fontSize: 13, color: "#1B3E6F" }}>
          <strong>Demo modus:</strong> vul een e-mailadres en wachtwoord in om het dashboard te bekijken.
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#0B2545", marginBottom: 6 }}>
              E-mailadres
            </label>
            <input
              type="email"
              className="input"
              placeholder="jij@bedrijf.nl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#0B2545", marginBottom: 6 }}>
              Wachtwoord
            </label>
            <input
              type="password"
              className="input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", height: 44 }}
            disabled={loading}
          >
            {loading ? "Laden…" : "Inloggen"}
          </button>
        </form>

        <p style={{ marginTop: 24, textAlign: "center", fontSize: 13, color: "#718096" }}>
          Nog geen account?{" "}
          <Link href="/#pricing" style={{ color: "#3A8FE0", fontWeight: 500 }}>
            Plan een intake
          </Link>
        </p>

        <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid #E5EAF0", textAlign: "center" }}>
          <Link href="/" style={{ fontSize: 13, color: "#A0AEC0", display: "inline-flex", alignItems: "center", gap: 6 }}>
            ← Terug naar de site
          </Link>
        </div>
      </div>
    </div>
  );
}
