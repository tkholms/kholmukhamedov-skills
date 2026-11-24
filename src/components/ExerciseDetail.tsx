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
    <div>
      {/* Header with blue gradient */}
      <section
        className="border-b border-slate-border"
        style={{ backgroundImage: `linear-gradient(135deg, #0c2340 0%, #163260 100%)` }}
      >
        <div className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
          {/* Breadcrumb */}
          <nav className="no-print mb-4 flex flex-wrap items-center gap-1.5 text-sm text-blue-300/60">
            <Link
              href="/topshiriqlar"
              className="transition-colors hover:text-white"
            >
              <T>Topshiriqlar</T>
            </Link>
            <span>→</span>
            {competency && <span>{t(competency.code)}</span>}
            <span>→</span>
            {category && <span>{t(category.name)}</span>}
          </nav>

          <div className="mb-3 flex flex-wrap items-center gap-3">
            <DreyfusBadge level={exercise.dreyfusLevel} size="md" />
            <span className="text-sm text-blue-200/70">
              {exercise.timeEstimate} <T>daqiqa</T>
            </span>
          </div>
          <h1 className="mb-2 font-serif text-2xl font-bold text-white sm:text-3xl">
            {t(exercise.title)}
          </h1>
          {competency && (
            <p className="text-blue-200/70">
              {t(competency.code)} — {t(competency.name)}
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Learning outcomes */}
        {learningOutcomes && learningOutcomes.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-3 font-serif text-xl font-bold text-navy">
              <T>Oʻquv natijalari</T>
            </h2>
            <ul className="space-y-2">
              {learningOutcomes.map((lo) => (
                <li
                  key={lo.id}
                  className="flex items-start gap-2 rounded-xl border border-blue-100 bg-blue-bg p-3 text-sm"
                >
                  <span className="font-semibold text-blue-primary">
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
          <h2 className="mb-3 font-serif text-xl font-bold text-navy">
            <T>Kerakli jihozlar</T>
          </h2>
          <div className="flex flex-wrap gap-2">
            {exercise.tools.map((toolName) => (
              <span
                key={toolName}
                className="rounded-xl border border-slate-border bg-slate-bg px-4 py-2 text-sm"
              >
                {t(toolName)}
              </span>
            ))}
          </div>
        </section>

        {/* Task description */}
        <section className="mb-8">
          <h2 className="mb-3 font-serif text-xl font-bold text-navy">
            <T>Topshiriq</T>
          </h2>
          <div className="rounded-2xl border border-slate-border bg-white p-6 shadow-sm">
            {exercise.description.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h3 key={i} className="mb-2 mt-4 text-base font-semibold text-navy">
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
              if (line.startsWith("- ")) {
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
            <h2 className="mb-3 font-serif text-xl font-bold text-navy">
              <T>Yordamchi maslahatlar</T>
            </h2>
            <p className="mb-3 text-sm text-slate-500">
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
                  className="rounded-xl border-l-4 border-l-gold bg-amber-50 p-4"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                      <T>Maslahat</T> {hint.level}
                    </span>
                  </div>
                  <p className="text-sm">{t(hint.text)}</p>
                  <p className="mt-2 text-xs italic text-slate-500">
                    {t(hint.teacherNote)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Rubric */}
        <section className="mb-8">
          <h2 className="mb-3 font-serif text-xl font-bold text-navy">
            <T>Baholash mezonlari</T>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-border bg-navy text-white">
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
              <tbody className="bg-white">
                {exercise.rubric.map((criterion, idx) => (
                  <tr
                    key={criterion.id}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-bg/50"}
                  >
                    <td className="p-3 font-medium text-navy">{t(criterion.name)}</td>
                    <td className="p-3 text-center font-semibold text-blue-primary">{criterion.maxPoints}</td>
                    {(
                      ["novice", "advanced-beginner", "competent"] as const
                    ).map((level) => (
                      <td key={level} className="p-3 text-slate-600">
                        {criterion.indicators[level]
                          ? t(criterion.indicators[level])
                          : "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-slate-border bg-blue-bg font-semibold">
                  <td className="p-3 text-navy">
                    <T>Jami</T>
                  </td>
                  <td className="p-3 text-center text-blue-primary">
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
            <h2 className="mb-3 font-serif text-xl font-bold text-navy">
              <T>Tez-tez uchraydigan xatolar</T>
            </h2>
            <ul className="space-y-2">
              {exercise.commonMistakes.map((mistake, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-3.5 text-sm"
                >
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span>{t(mistake)}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Worked example */}
        {exercise.workedExample && (
          <section className="mb-8">
            <h2 className="mb-3 font-serif text-xl font-bold text-navy">
              <T>Namuna yechim</T>
            </h2>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              {exercise.workedExample.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return (
                    <h3 key={i} className="mb-3 text-base font-semibold text-emerald-900">
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
                  <p key={i} className="mb-1 text-sm text-emerald-900">
                    {t(line)}
                  </p>
                );
              })}
            </div>
          </section>
        )}

        {/* Actions */}
        <div className="no-print flex gap-3">
          <button
            onClick={() => window.print()}
            className="rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-light"
          >
            <T>Chop etish</T>
          </button>
          <Link
            href="/topshiriqlar"
            className="rounded-xl border border-slate-border bg-white px-6 py-3 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-slate-bg"
          >
            <T>Orqaga</T>
          </Link>
        </div>
      </div>
    </div>
  );
}
