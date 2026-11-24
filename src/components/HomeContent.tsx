"use client";

import Link from "next/link";
import { T } from "./T";
import { DreyfusBadge } from "./DreyfusBadge";
import { DREYFUS_LEVELS } from "@/lib/types";

export function HomeContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          <T>Amaliy topshiriqlar banki</T>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          <T>
            Kompyuter muhandisligi mutaxassisligi (50610401) boʻyicha kasb
            standarti asosida tayyorlangan amaliy topshiriqlar, baholash
            mezonlari va koʻnikmalar xaritasi
          </T>
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/topshiriqlar"
            className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            <T>Topshiriqlarni koʻrish</T>
          </Link>
          <Link
            href="/kompetensiyalar"
            className="rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            <T>Kompetensiya xaritasi</T>
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold">
          <T>Platforma haqida</T>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🎯",
              title: "Kasb standartiga asoslangan",
              description:
                "Barcha topshiriqlar rasmiy kasb standarti kompetensiyalariga bogʻlangan",
            },
            {
              icon: "📊",
              title: "Dreyfus modeli boʻyicha",
              description:
                "Topshiriqlar qiyinlik darajasi boʻyicha tartiblangan — boshlangʻichdan ekspertgacha",
            },
            {
              icon: "📝",
              title: "Baholash mezonlari",
              description:
                "Har bir topshiriq uchun aniq baholash mezonlari va koʻrsatkichlari mavjud",
            },
            {
              icon: "💡",
              title: "Bosqichma-bosqich yordam",
              description:
                "Boshlangʻich darajada toʻliq yordam, yuqori darajada mustaqil ish",
            },
            {
              icon: "🖨️",
              title: "Chop etishga tayyor",
              description:
                "Har bir topshiriqni baholash varaqasi sifatida chop etish mumkin",
            },
            {
              icon: "🗺️",
              title: "Kompetensiya xaritasi",
              description:
                "Qaysi kompetensiyalar yaxshi qoplangani va qayerda boʻshliqlar borligini koʻring",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-3 text-2xl">{item.icon}</div>
              <h3 className="mb-2 text-base font-semibold">
                <T>{item.title}</T>
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <T>{item.description}</T>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dreyfus levels explanation */}
      <div className="mb-16">
        <h2 className="mb-6 text-center text-2xl font-bold">
          <T>Dreyfus koʻnikmalar modeli</T>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
          <T>
            Topshiriqlar qiyinlik darajasi Dreyfus va Dreyfus koʻnikmalar
            egallash modeliga asoslangan. Kasb taʼlimi talabalari asosan
            birinchi uch-toʻrt darajaga eʼtibor qaratadi.
          </T>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {DREYFUS_LEVELS.map((level) => (
            <DreyfusBadge key={level} level={level} size="md" />
          ))}
        </div>
      </div>
    </div>
  );
}
