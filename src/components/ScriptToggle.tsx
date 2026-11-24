"use client";

import { useScript } from "@/lib/script-context";

export function ScriptToggle() {
  const { script, toggleScript } = useScript();

  return (
    <button
      onClick={toggleScript}
      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 active:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
      aria-label={
        script === "latin"
          ? "Kirill yozuviga oʻtish"
          : "Lotin yozuviga oʻtish"
      }
    >
      <span className="text-base leading-none">
        {script === "latin" ? "Aa" : "Аа"}
      </span>
      <span className="text-xs text-zinc-500 dark:text-zinc-400">
        {script === "latin" ? "→ Кир" : "→ Lot"}
      </span>
    </button>
  );
}
