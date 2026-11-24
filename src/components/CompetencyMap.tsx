"use client";

import Link from "next/link";
import { useScript } from "@/lib/script-context";
import { T } from "./T";
import { DreyfusBadge } from "./DreyfusBadge";
import { getCompetencyMap } from "@/lib/data";
import { DREYFUS_LEVELS, DREYFUS_LABELS } from "@/lib/types";

export function CompetencyMap() {
  const { t } = useScript();
  const map = getCompetencyMap();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
        <T>Kompetensiya xaritasi</T>
      </h1>
      <p className="mb-8 text-zinc-600 dark:text-zinc-400">
        <T>
          Kasb standarti kompetensiyalari va ular uchun mavjud topshiriqlar
          soni
        </T>
      </p>

      <div className="space-y-6">
        {map.map((entry) => (
          <div
            key={entry.competency.id}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            {/* Competency header */}
            <div className="mb-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold">
                    <span className="text-blue-600 dark:text-blue-400">
                      {t(entry.competency.code)}
                    </span>{" "}
                    {t(entry.competency.name)}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {t(entry.competency.description)}
                  </p>
                </div>
                <div className="shrink-0 rounded-lg bg-zinc-100 px-3 py-1.5 text-center dark:bg-zinc-800">
                  <div className="text-2xl font-bold">
                    {entry.totalExercises}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    <T>topshiriq</T>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning outcomes */}
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                <T>Oʻquv natijalari</T>
              </h3>
              <ul className="space-y-1">
                {entry.competency.learningOutcomes.map((lo) => (
                  <li
                    key={lo.id}
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="font-medium">{t(lo.code)}:</span>{" "}
                    {t(lo.text)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dreyfus level breakdown */}
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                <T>Daraja boʻyicha taqsimot</T>
              </h3>
              <div className="flex flex-wrap gap-3">
                {DREYFUS_LEVELS.map((level) => {
                  const count = entry.exerciseCounts[level];
                  return (
                    <div key={level} className="flex items-center gap-1.5">
                      <DreyfusBadge level={level} />
                      <span
                        className={`text-sm font-medium ${
                          count === 0
                            ? "text-red-500 dark:text-red-400"
                            : "text-zinc-700 dark:text-zinc-300"
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
                <h3 className="mb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  <T>Kategoriyalar</T>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {entry.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/topshiriqlar?category=${cat.id}`}
                      className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-blue-700 dark:hover:bg-blue-900/20"
                    >
                      {t(cat.name)}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Coverage warning */}
            {entry.totalExercises === 0 && (
              <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
                ⚠ <T>Bu kompetensiya uchun topshiriqlar hali qoʻshilmagan</T>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
