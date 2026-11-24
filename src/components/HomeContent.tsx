"use client";

import Link from "next/link";
import { T } from "./T";
import { DreyfusBadge } from "./DreyfusBadge";
import { DREYFUS_LEVELS } from "@/lib/types";

export function HomeContent() {
  return (
    <div>
      {/* Hero — dark blue gradient with geometric pattern */}
      <section
        className="relative overflow-hidden bg-navy"
        style={{
          backgroundImage: `
            linear-gradient(135deg, #0c2340 0%, #163260 40%, #1d4ed8 100%)
          `,
        }}
      >
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient glow */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-400/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            50610401 — <T>Kompyuter muhandisligi</T>
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            <T>Amaliy topshiriqlar banki</T>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-blue-200/80">
            <T>
              Kasb standarti asosida tayyorlangan amaliy topshiriqlar, baholash
              mezonlari va koʻnikmalar xaritasi
            </T>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/topshiriqlar"
              className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-navy shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
            >
              <T>Topshiriqlarni koʻrish</T>
            </Link>
            <Link
              href="/kompetensiyalar"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <T>Kompetensiya xaritasi</T>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-border bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4">
          {[
            { value: "18", label: "Amaliy topshiriq" },
            { value: "10", label: "Kasbiy kompetensiya" },
            { value: "5", label: "Dreyfus daraja" },
            { value: "22", label: "Umumiy kompetensiya" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-1 font-serif text-3xl font-bold text-blue-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">
                <T>{stat.label}</T>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform features — alternating background */}
      <section className="bg-slate-bg py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.15em] text-blue-mid">
            <T>Platforma imkoniyatlari</T>
          </p>
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-navy sm:text-4xl">
            <T>Platforma haqida</T>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-500">
            <T>
              Oʻqituvchi va talabalar uchun barcha kerakli vositalar bir joyda
            </T>
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Kasb standartiga asoslangan",
                description:
                  "Barcha topshiriqlar rasmiy kasb standarti kompetensiyalariga bogʻlangan",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: "Dreyfus modeli boʻyicha",
                description:
                  "Topshiriqlar qiyinlik darajasi boʻyicha tartiblangan — boshlangʻichdan ekspertgacha",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                  </svg>
                ),
                title: "Baholash mezonlari",
                description:
                  "Har bir topshiriq uchun aniq baholash mezonlari va koʻrsatkichlari mavjud",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
                title: "Bosqichma-bosqich yordam",
                description:
                  "Boshlangʻich darajada toʻliq yordam, yuqori darajada mustaqil ish",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M9.75 8.25h.008v.008H9.75V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                ),
                title: "Chop etishga tayyor",
                description:
                  "Har bir topshiriqni baholash varaqasi sifatida chop etish mumkin",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                ),
                title: "Kompetensiya xaritasi",
                description:
                  "Qaysi kompetensiyalar yaxshi qoplangani va qayerda boʻshliqlar borligini koʻring",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-border bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-bg text-blue-primary">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-navy">
                  <T>{item.title}</T>
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  <T>{item.description}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dreyfus model — white section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.15em] text-blue-mid">
            <T>Baholash tizimi</T>
          </p>
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-navy sm:text-4xl">
            <T>Dreyfus koʻnikmalar modeli</T>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-slate-500">
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
      </section>

      {/* CTA section — blue gradient */}
      <section
        className="py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(135deg, #163260 0%, #1d4ed8 100%)`,
        }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white sm:text-4xl">
            <T>Topshiriqlarni koʻrishga tayyormisiz?</T>
          </h2>
          <p className="mb-8 text-lg text-blue-200/80">
            <T>
              18 ta amaliy topshiriq, baholash mezonlari va bosqichma-bosqich
              yordamlar bilan
            </T>
          </p>
          <Link
            href="/topshiriqlar"
            className="inline-block rounded-xl bg-white px-8 py-4 text-sm font-semibold text-navy shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
          >
            <T>Topshiriqlarni boshlash</T>
          </Link>
        </div>
      </section>
    </div>
  );
}
