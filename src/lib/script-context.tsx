"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { transliterate } from "./transliterate";
import type { Script } from "./types";

// Re-export Script type for convenience
export type { Script };

interface ScriptContextValue {
  script: Script;
  toggleScript: () => void;
  setScript: (s: Script) => void;
  /** Convert text to the current script */
  t: (text: string) => string;
}

const ScriptContext = createContext<ScriptContextValue | null>(null);

const STORAGE_KEY = "kholmukhamedov-skills-script";

export function ScriptProvider({ children }: { children: ReactNode }) {
  const [script, setScriptState] = useState<Script>("latin");

  // Load preference from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "cyrillic" || saved === "latin") {
        setScriptState(saved);
      }
    } catch {
      // localStorage unavailable — stay with default
    }
  }, []);

  const setScript = useCallback((s: Script) => {
    setScriptState(s);
    try {
      localStorage.setItem(STORAGE_KEY, s);
    } catch {
      // ignore
    }
  }, []);

  const toggleScript = useCallback(() => {
    setScript(script === "latin" ? "cyrillic" : "latin");
  }, [script, setScript]);

  const t = useCallback(
    (text: string) => transliterate(text, script),
    [script]
  );

  return (
    <ScriptContext value={{ script, toggleScript, setScript, t }}>
      {children}
    </ScriptContext>
  );
}

export function useScript(): ScriptContextValue {
  const ctx = useContext(ScriptContext);
  if (!ctx) {
    throw new Error("useScript must be used within a ScriptProvider");
  }
  return ctx;
}
