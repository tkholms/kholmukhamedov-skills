"use client";

import { useScript } from "@/lib/script-context";

/**
 * Transliterating text component.
 * Wraps text and converts it to the active script.
 *
 * Usage: <T>Matn</T>
 */
export function T({ children }: { children: string }) {
  const { t } = useScript();
  return <>{t(children)}</>;
}
