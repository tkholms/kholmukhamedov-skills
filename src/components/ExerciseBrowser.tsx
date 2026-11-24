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

  // Filter categories by selected competency
  const filteredCategories = useMemo(
    () =>
      competencyId
        ? categories.filter((c) => c.competencyId === competencyId)
        : categories,
    [competencyId, categories]
  );

  // Reset category when competency changes
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
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">
        <T>Topshiriqlar</T>
      </h1>

      {/* Filters */}
      <div className="no-print mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <div className="sm:col-span-2 lg:col-span-4">
          <input
            type="search"
            placeholder={t("Topshiriq qidirish...")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm shadow-sm placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-500"
          />
        </div>

        {/* Competency filter */}
        <select
          value={competencyId}
          onChange={(e) => handleCompetencyChange(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900"
        >
          <option value="">{t("Barcha kompetensiyalar")}</option>
          {competencies.map((c) => (
            <option key={c.id} value={c.id}>
              {t(c.code)} — {t(c.name)}
            </option>
          ))}
        </select>

        {/* Category filter */}
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900"
        >
          <option value="">{t("Barcha kategoriyalar")}</option>
          {filteredCategories.map((c) => (
            <option key={c.id} value={c.id}>
              {t(c.name)}
            </option>
          ))}
        </select>

        {/* Dreyfus level filter */}
        <select
          value={dreyfusLevel}
          onChange={(e) =>
            setDreyfusLevel(e.target.value as DreyfusLevel | "")
          }
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900"
        >
          <option value="">{t("Barcha darajalar")}</option>
          {DREYFUS_LEVELS.map((level) => (
            <option key={level} value={level}>
              {t(DREYFUS_LABELS[level])}
            </option>
          ))}
        </select>

        {/* Tool filter */}
        <select
          value={tool}
          onChange={(e) => setTool(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900"
        >
          <option value="">{t("Barcha jihozlar")}</option>
          {tools.map((toolName) => (
            <option key={toolName} value={toolName}>
              {t(toolName)}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
        {results.length}{" "}
        <T>ta topshiriq topildi</T>
      </p>

      {/* Exercise list */}
      {results.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 py-16 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-500 dark:text-zinc-400">
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
                className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {t(exercise.title)}
                    </h3>
                    {comp && (
                      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        {t(comp.code)} — {t(comp.name)}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <DreyfusBadge level={exercise.dreyfusLevel} />
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                      {exercise.timeEstimate} <T>min</T>
                    </span>
                  </div>
                </div>

                {/* Tools tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exercise.tools.map((toolName) => (
                    <span
                      key={toolName}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
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
  );
}
