"use client";

import Link from "next/link";
import { T } from "./T";

export function Footer() {
  return (
    <footer className="bg-navy text-blue-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-mid text-sm font-bold text-white">
                K
              </span>
              <span className="text-lg font-bold text-white">Kholmukhamedov Skills</span>
            </div>
            <p className="text-sm leading-relaxed text-blue-300/70">
              <T>
                Kasb standarti asosida tayyorlangan amaliy topshiriqlar banki
              </T>
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-300/50">
              <T>Sahifalar</T>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  <T>Bosh sahifa</T>
                </Link>
              </li>
              <li>
                <Link
                  href="/topshiriqlar"
                  className="transition-colors hover:text-white"
                >
                  <T>Topshiriqlar</T>
                </Link>
              </li>
              <li>
                <Link
                  href="/kompetensiyalar"
                  className="transition-colors hover:text-white"
                >
                  <T>Kompetensiya xaritasi</T>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-300/50">
              <T>Ma'lumot</T>
            </h3>
            <p className="text-sm leading-relaxed text-blue-300/70">
              <T>Kompyuter muhandisligi mutaxassisligi</T>
              <br />
              50610401
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-blue-300/50">
          <p>© 2024–2025 Kholmukhamedov Skills</p>
        </div>
      </div>
    </footer>
  );
}
