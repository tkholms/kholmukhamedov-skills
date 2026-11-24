"use client";

import { T } from "./T";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          <T>Kompyuter muhandisligi mutaxassisligi (50610401)</T>
        </p>
        <p className="mt-1">
          <T>Kasb standarti asosida tayyorlangan amaliy topshiriqlar banki</T>
        </p>
      </div>
    </footer>
  );
}
