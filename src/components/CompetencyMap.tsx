"use client";

import Link from "next/link";
import { useScript } from "@/lib/script-context";
import { T } from "./T";
import { DreyfusBadge } from "./DreyfusBadge";
import { getCompetencyMap } from "@/lib/data";
import { DREYFUS_LEVELS } from "@/lib/types";

export function CompetencyMap() {
  const { t } = useScript();
  const map = getCompetencyMap();

  const professional = map.filter((e) => e.competency.code.startsWith("KK-"));
  const general = map.filter((e) => e.competency.code.startsWith("UK-"));

  return (
    <div>
      {/* Page header */}
      <section
        className="border-b border-slate-border"
        style={{ backgroundImage: `linear-gradient(135deg, #0c2340 0%, #163260 100%)` }}
      >
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h1 className="mb-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            <T>Kompetensiya xaritasi</T>
          </h1>
          <p className="text-blue-200/70">
            <T>
              Kasb standarti kompetensiyalari va ular uchun mavjud topshiriqlar soni
            </T>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Professional competencies */}
        <div className="mb-10">
          <h2 className="mb-6 font-serif text-2xl font-bold text-navy">
            <T>Kasbiy kompetensiyalar</T>
          </h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {professional.map((entry) => (
              <CompetencyCard key={entry.competency.id} entry={entry} t={t} />
            ))}
          </div>
        </div>

        {/* General competencies */}
        <div>
          <h2 className="mb-6 font-serif text-2xl font-bold text-navy">
            <T>Umumiy kompetensiyalar</T>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {general.map((entry) => (
              <div
                key={entry.competency.id}
                className="rounded-2xl border border-slate-border bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-navy">
                      <span className="text-blue-primary">{t(entry.competency.code)}</span>{" "}
                      {t(entry.competency.name)}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {t(entry.competency.description)}
                    </p>
                  </div>
                  <span className={`shrink-0 rounded-lg px-2.5 py-1 text-center text-lg font-bold ${
                    entry.totalExercises > 0
                      ? "bg-blue-bg text-blue-primary"
                      : "bg-red-50 text-red-400"
                  }`}>
                    {entry.totalExercises}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CompetencyCard({ entry, t }: { entry: ReturnType<typeof getCompetencyMap>[number]; t: (s: string) => string }) {
  return (
    <div className="rounded-2xl border border-slate-border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-navy">
            <span className="text-blue-primary">{t(entry.competency.code)}</span>{" "}
            {t(entry.competency.name)}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {t(entry.competency.description)}
          </p>
        </div>
        <div className={`shrink-0 rounded-xl px-4 py-2 text-center ${
          entry.totalExercises > 0
            ? "bg-blue-bg"
            : "bg-red-50"
        }`}>
          <div className={`text-2xl font-bold ${
            entry.totalExercises > 0 ? "text-blue-primary" : "text-red-400"
          }`}>
            {entry.totalExercises}
          </div>
          <div className="text-xs text-slate-500">
            <T>topshiriq</T>
          </div>
        </div>
      </div>

      {/* Learning outcomes */}
      <div className="mb-4">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <T>Oʻquv natijalari</T>
        </h4>
        <ul className="space-y-1">
          {entry.competency.learningOutcomes.map((lo) => (
            <li
              key={lo.id}
              className="text-sm text-slate-600"
            >
              <span className="font-medium text-blue-primary">{t(lo.code)}</span>{" "}
              {t(lo.text)}
            </li>
          ))}
        </ul>
      </div>

      {/* Dreyfus breakdown */}
      <div className="mb-4">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <T>Daraja boʻyicha taqsimot</T>
        </h4>
        <div className="flex flex-wrap gap-2">
          {DREYFUS_LEVELS.map((level) => {
            const count = entry.exerciseCounts[level];
            return (
              <div key={level} className="flex items-center gap-1.5">
                <DreyfusBadge level={level} />
                <span
                  className={`text-sm font-semibold ${
                    count === 0 ? "text-red-400" : "text-slate-700"
                  }`}
                >
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categories */}
      {entry.categories.length > 0 && (
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <T>Kategoriyalar</T>
          </h4>
          <div className="flex flex-wrap gap-2">
            {entry.categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/topshiriqlar?category=${cat.id}`}
                className="rounded-lg border border-slate-border bg-slate-bg px-3 py-1.5 text-sm transition-colors hover:border-blue-200 hover:bg-blue-bg"
              >
                {t(cat.name)}
              </Link>
            ))}
          </div>
        </div>
      )}

      {entry.totalExercises === 0 && (
        <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">
          <T>Bu kompetensiya uchun topshiriqlar hali qoʻshilmagan</T>
        </div>
      )}
    </div>
  );
}
