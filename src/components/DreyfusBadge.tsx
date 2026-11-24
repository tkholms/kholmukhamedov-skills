"use client";

import { useScript } from "@/lib/script-context";
import type { DreyfusLevel } from "@/lib/types";
import { DREYFUS_LABELS } from "@/lib/types";

const LEVEL_COLORS: Record<DreyfusLevel, string> = {
  novice: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  "advanced-beginner":
    "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  competent:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  proficient:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  expert: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
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
    size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-medium ${color} ${sizeClasses}`}
    >
      <span className="text-[0.65em] opacity-60">{order}</span>
      {label}
    </span>
  );
}
