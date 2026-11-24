"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useScript } from "@/lib/script-context";
import { T } from "./T";
import { DreyfusBadge } from "./DreyfusBadge";
import {
  getAllCompetencies,
  getAllCategories,
  getAllTools,
  filterExercises,
} from "@/lib/data";
import { DREYFUS_LEVELS, DREYFUS_LABELS } from "@/lib/types";
import type { DreyfusLevel } from "@/lib/types";

export function ExerciseBrowser() {
  const { t } = useScript();
  const competencies = getAllCompetencies();
  const categories = getAllCategories();
  const tools = getAllTools();

  const [competencyId, setCompetencyId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [dreyfusLevel, setDreyfusLevel] = useState<DreyfusLevel | "">("");
  const [tool, setTool] = useState("");
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(
    () =>
      competencyId
        ? categories.filter((c) => c.competencyId === competencyId)
        : categories,
    [competencyId, categories]
  );

  const handleCompetencyChange = (id: string) => {
    setCompetencyId(id);
    setCategoryId("");
  };

  const results = useMemo(
    () =>
      filterExercises({
        competencyId: competencyId || undefined,
        categoryId: categoryId || undefined,
        dreyfusLevel: (dreyfusLevel as DreyfusLevel) || undefined,
        tool: tool || undefined,
        search: search || undefined,
      }),
    [competencyId, categoryId, dreyfusLevel, tool, search]
  );

  return (
    <div>
      {/* Page header */}
      <section className="border-b border-slate-border bg-navy" style={{ backgroundImage: `linear-gradient(135deg, #0c2340 0%, #163260 100%)` }}>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h1 className="mb-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            <T>Topshiriqlar</T>
          </h1>
          <p className="text-blue-200/70">
            <T>Barcha amaliy topshiriqlar — qidiring, filterlang va tanlang</T>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Filters */}
        <div className="no-print mb-8 rounded-2xl border border-slate-border bg-white p-5 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-4">
              <input
                type="search"
                placeholder={t("Topshiriq qidirish...")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-border bg-slate-bg px-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-blue-mid focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-mid/20"
              />
            </div>

            <select
              value={competencyId}
              onChange={(e) => handleCompetencyChange(e.target.value)}
              className="rounded-xl border border-slate-border bg-slate-bg px-3 py-2.5 text-sm focus:border-blue-mid focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-mid/20"
            >
              <option value="">{t("Barcha kompetensiyalar")}</option>
              {competencies.map((c) => (
                <option key={c.id} value={c.id}>
                  {t(c.code)} — {t(c.name)}
                </option>
              ))}
            </select>

            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="rounded-xl border border-slate-border bg-slate-bg px-3 py-2.5 text-sm focus:border-blue-mid focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-mid/20"
            >
              <option value="">{t("Barcha kategoriyalar")}</option>
              {filteredCategories.map((c) => (
                <option key={c.id} value={c.id}>
                  {t(c.name)}
                </option>
              ))}
            </select>

            <select
              value={dreyfusLevel}
              onChange={(e) =>
                setDreyfusLevel(e.target.value as DreyfusLevel | "")
              }
              className="rounded-xl border border-slate-border bg-slate-bg px-3 py-2.5 text-sm focus:border-blue-mid focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-mid/20"
            >
              <option value="">{t("Barcha darajalar")}</option>
              {DREYFUS_LEVELS.map((level) => (
                <option key={level} value={level}>
                  {t(DREYFUS_LABELS[level])}
                </option>
              ))}
            </select>

            <select
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="rounded-xl border border-slate-border bg-slate-bg px-3 py-2.5 text-sm focus:border-blue-mid focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-mid/20"
            >
              <option value="">{t("Barcha jihozlar")}</option>
              {tools.map((toolName) => (
                <option key={toolName} value={toolName}>
                  {t(toolName)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="mb-4 text-sm text-slate-500">
          {results.length}{" "}
          <T>ta topshiriq topildi</T>
        </p>

        {/* Exercise list */}
        {results.length === 0 ? (
          <div className="rounded-2xl border border-slate-border bg-slate-bg py-16 text-center">
            <p className="text-slate-500">
              <T>Topshiriqlar topilmadi</T>
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {results.map((exercise) => {
              const comp = competencies.find(
                (c) => c.id === exercise.competencyId
              );
              return (
                <Link
                  key={exercise.id}
                  href={`/topshiriqlar/${exercise.id}`}
                  className="group rounded-2xl border border-slate-border bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-navy group-hover:text-blue-primary">
                        {t(exercise.title)}
                      </h3>
                      {comp && (
                        <p className="mt-1 text-sm text-slate-500">
                          {t(comp.code)} — {t(comp.name)}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <DreyfusBadge level={exercise.dreyfusLevel} />
                      <span className="text-xs text-slate-400">
                        {exercise.timeEstimate} <T>min</T>
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exercise.tools.map((toolName) => (
                      <span
                        key={toolName}
                        className="rounded-lg bg-slate-bg px-2.5 py-0.5 text-xs text-slate-600"
                      >
                        {t(toolName)}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
