"use client";

import { useScript } from "@/lib/script-context";

export function ScriptToggle() {
  const { script, toggleScript } = useScript();

  return (
    <button
      onClick={toggleScript}
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 active:bg-white/25"
      aria-label={
        script === "latin"
          ? "Kirill yozuviga oʻtish"
          : "Lotin yozuviga oʻtish"
      }
    >
      <span className="text-base leading-none">
        {script === "latin" ? "Aa" : "Аа"}
      </span>
      <span className="text-xs text-blue-200">
        {script === "latin" ? "→ Кир" : "→ Lot"}
      </span>
    </button>
  );
}
