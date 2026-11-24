"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ScriptToggle } from "./ScriptToggle";
import { T } from "./T";

const NAV_ITEMS = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/topshiriqlar", label: "Topshiriqlar" },
  { href: "/kompetensiyalar", label: "Kompetensiya xaritasi" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-blue-900/20 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-bold text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-mid text-sm text-white">
            K
          </span>
          <span className="hidden sm:inline">
            <T>Kompas Edu</T>
          </span>
          <span className="sm:hidden">
            <T>Kompas</T>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <T>{item.label}</T>
              </Link>
            );
          })}
          <div className="ml-3">
            <ScriptToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ScriptToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-blue-200 hover:bg-white/10 hover:text-white"
            aria-label="Menyuni ochish"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 px-4 py-2 md:hidden">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <T>{item.label}</T>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
