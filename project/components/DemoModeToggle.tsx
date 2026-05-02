"use client";

import { useEffect, useState } from "react";
import type { Mode } from "@/lib/constants";

export function useDemoMode(): [Mode, (m: Mode) => void] {
  const [mode, setModeState] = useState<Mode>("live");

  useEffect(() => {
    const saved = localStorage.getItem("cockpit_mode");
    if (saved === "demo" || saved === "live") setModeState(saved);
  }, []);

  function setMode(m: Mode) {
    setModeState(m);
    localStorage.setItem("cockpit_mode", m);
    // Trigger re-render of consumers via custom event (simpel zonder context)
    window.dispatchEvent(new CustomEvent("cockpit:modechange", { detail: m }));
  }

  useEffect(() => {
    function onChange(e: Event) {
      const detail = (e as CustomEvent).detail;
      if (detail === "demo" || detail === "live") setModeState(detail);
    }
    window.addEventListener("cockpit:modechange", onChange);
    return () => window.removeEventListener("cockpit:modechange", onChange);
  }, []);

  return [mode, setMode];
}

export default function DemoModeToggle() {
  const [mode, setMode] = useDemoMode();

  return (
    <div className="inline-flex items-center bg-white border border-[#E5EAF0] rounded-lg p-1 text-xs">
      <button
        onClick={() => setMode("live")}
        className={`px-3 py-1.5 rounded font-medium transition-colors ${
          mode === "live" ? "bg-[#0B2545] text-white" : "text-[#4A5568] hover:text-[#0B2545]"
        }`}
      >
        Live data
      </button>
      <button
        onClick={() => setMode("demo")}
        className={`px-3 py-1.5 rounded font-medium transition-colors ${
          mode === "demo" ? "bg-[#3A8FE0] text-white" : "text-[#4A5568] hover:text-[#0B2545]"
        }`}
      >
        🎬 Demo
      </button>
    </div>
  );
}
