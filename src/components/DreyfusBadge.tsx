"use client";

import { useScript } from "@/lib/script-context";
import type { DreyfusLevel } from "@/lib/types";
import { DREYFUS_LABELS } from "@/lib/types";

const LEVEL_COLORS: Record<DreyfusLevel, string> = {
  novice: "bg-sky-100 text-sky-800 border-sky-200",
  "advanced-beginner": "bg-blue-100 text-blue-800 border-blue-200",
  competent: "bg-indigo-100 text-indigo-800 border-indigo-200",
  proficient: "bg-violet-100 text-violet-800 border-violet-200",
  expert: "bg-slate-800 text-white border-slate-700",
};

const LEVEL_ORDER: Record<DreyfusLevel, number> = {
  novice: 1,
  "advanced-beginner": 2,
  competent: 3,
  proficient: 4,
  expert: 5,
};

export function DreyfusBadge({
  level,
  size = "sm",
}: {
  level: DreyfusLevel;
  size?: "sm" | "md";
}) {
  const { t } = useScript();
  const label = t(DREYFUS_LABELS[level]);
  const color = LEVEL_COLORS[level];
  const order = LEVEL_ORDER[level];

  const sizeClasses =
    size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-4 py-1.5 text-sm";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${color} ${sizeClasses}`}
    >
      <span className="text-[0.65em] opacity-50">{order}</span>
      {label}
    </span>
  );
}
