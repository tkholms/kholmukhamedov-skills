"use client";

import Link from "next/link";
import { useScript } from "@/lib/script-context";
import { T } from "./T";
import { DreyfusBadge } from "./DreyfusBadge";
import {
  getExerciseById,
  getCompetencyById,
  getCategoryById,
} from "@/lib/data";
import { DREYFUS_LABELS } from "@/lib/types";

export function ExerciseDetail({ exerciseId }: { exerciseId: string }) {
  const { t } = useScript();
  const exercise = getExerciseById(exerciseId);

  if (!exercise) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <T>Topshiriq topilmadi</T>
      </div>
    );
  }

  const competency = getCompetencyById(exercise.competencyId);
  const category = getCategoryById(exercise.categoryId);
  const learningOutcomes = competency?.learningOutcomes.filter((lo) =>
    exercise.learningOutcomeIds.includes(lo.id)
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="no-print mb-6 flex flex-wrap items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
        <Link
          href="/topshiriqlar"
          className="hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          <T>Topshiriqlar</T>
        </Link>
        <span>→</span>
        {competency && <span>{t(competency.code)}</span>}
        <span>→</span>
        {category && <span>{t(category.name)}</span>}
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <DreyfusBadge level={exercise.dreyfusLevel} size="md" />
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            ⏱ {exercise.timeEstimate} <T>daqiqa</T>
          </span>
        </div>
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
          {t(exercise.title)}
        </h1>
        {competency && (
          <p className="text-zinc-600 dark:text-zinc-400">
            {t(competency.code)} — {t(competency.name)}
          </p>
        )}
      </div>

      {/* Learning outcomes */}
      {learningOutcomes && learningOutcomes.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">
            <T>Oʻquv natijalari</T>
          </h2>
          <ul className="space-y-2">
            {learningOutcomes.map((lo) => (
              <li
                key={lo.id}
                className="flex items-start gap-2 rounded-lg bg-blue-50 p-3 text-sm dark:bg-blue-900/20"
              >
                <span className="font-medium text-blue-700 dark:text-blue-400">
                  {t(lo.code)}
                </span>
                <span>{t(lo.text)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tools needed */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">
          <T>Kerakli jihozlar</T>
        </h2>
        <div className="flex flex-wrap gap-2">
          {exercise.tools.map((toolName) => (
            <span
              key={toolName}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm dark:border-zinc-700 dark:bg-zinc-800"
            >
              {t(toolName)}
            </span>
          ))}
        </div>
      </section>

      {/* Task description */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">
          <T>Topshiriq</T>
        </h2>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          {exercise.description.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h3 key={i} className="mb-2 mt-4 text-base font-semibold">
                  {t(line.replace("## ", ""))}
                </h3>
              );
            }
            if (line.match(/^\d+\./)) {
              return (
                <p key={i} className="ml-4 mb-1 text-sm">
                  {t(line)}
                </p>
              );
            }
            if (line.trim() === "") {
              return <div key={i} className="h-2" />;
            }
            return (
              <p key={i} className="mb-1 text-sm">
                {t(line)}
              </p>
            );
          })}
        </div>
      </section>

      {/* Hints (scaffolding) */}
      {exercise.hints.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">
            <T>Yordamchi maslahatlar</T>
          </h2>
          <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
            <T>
              {exercise.dreyfusLevel === "novice"
                ? "Boshlangʻich daraja — barcha maslahatlar koʻrsatilgan"
                : exercise.dreyfusLevel === "advanced-beginner"
                  ? "Ilgʻor boshlangʻich daraja — ayrim maslahatlar"
                  : "Bu daraja uchun maslahatlar koʻrsatilmaydi"}
            </T>
          </p>
          <div className="space-y-3">
            {exercise.hints.map((hint) => (
              <div
                key={hint.level}
                className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800/50 dark:bg-amber-900/20"
              >
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded-full bg-amber-200 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-800 dark:text-amber-200">
                    <T>Maslahat</T> {hint.level}
                  </span>
                </div>
                <p className="text-sm">{t(hint.text)}</p>
                {/* Teacher note — always visible in teacher view */}
                <p className="mt-2 text-xs italic text-zinc-500 dark:text-zinc-400">
                  🎓 {t(hint.teacherNote)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Rubric */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">
          <T>Baholash mezonlari</T>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <th className="p-3 text-left font-semibold">
                  <T>Mezon</T>
                </th>
                <th className="p-3 text-center font-semibold">
                  <T>Ball</T>
                </th>
                {(["novice", "advanced-beginner", "competent"] as const).map(
                  (level) => (
                    <th key={level} className="p-3 text-left font-semibold">
                      {t(DREYFUS_LABELS[level])}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {exercise.rubric.map((criterion) => (
                <tr
                  key={criterion.id}
                  className="border-b border-zinc-100 dark:border-zinc-800"
                >
                  <td className="p-3 font-medium">{t(criterion.name)}</td>
                  <td className="p-3 text-center">{criterion.maxPoints}</td>
                  {(
                    ["novice", "advanced-beginner", "competent"] as const
                  ).map((level) => (
                    <td key={level} className="p-3 text-zinc-600 dark:text-zinc-400">
                      {criterion.indicators[level]
                        ? t(criterion.indicators[level])
                        : "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold">
                <td className="p-3">
                  <T>Jami</T>
                </td>
                <td className="p-3 text-center">
                  {exercise.rubric.reduce((s, c) => s + c.maxPoints, 0)}
                </td>
                <td colSpan={3} />
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Common mistakes */}
      {exercise.commonMistakes.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">
            <T>Tez-tez uchraydigan xatolar</T>
          </h2>
          <ul className="space-y-2">
            {exercise.commonMistakes.map((mistake, i) => (
              <li
                key={i}
                className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm dark:bg-red-900/20"
              >
                <span className="text-red-500">⚠</span>
                <span>{t(mistake)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Worked example (novice only) */}
      {exercise.workedExample && (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">
            <T>Namuna yechim</T>
          </h2>
          <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800/50 dark:bg-green-900/20">
            {exercise.workedExample.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h3 key={i} className="mb-3 text-base font-semibold">
                    {t(line.replace("## ", ""))}
                  </h3>
                );
              }
              if (line.startsWith("|")) {
                return (
                  <p key={i} className="font-mono text-xs">
                    {t(line)}
                  </p>
                );
              }
              if (line.trim() === "") {
                return <div key={i} className="h-2" />;
              }
              return (
                <p key={i} className="mb-1 text-sm">
                  {t(line)}
                </p>
              );
            })}
          </div>
        </section>
      )}

      {/* Print button */}
      <div className="no-print flex gap-3">
        <button
          onClick={() => window.print()}
          className="rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          🖨️ <T>Chop etish</T>
        </button>
        <Link
          href="/topshiriqlar"
          className="rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          ← <T>Orqaga</T>
        </Link>
      </div>
    </div>
  );
}
