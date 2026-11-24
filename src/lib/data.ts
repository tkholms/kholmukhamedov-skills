/**
 * Data access layer.
 *
 * All content is stored in src/data/ as TypeScript files.
 * This module re-exports everything and provides query helpers.
 *
 * Currently uses placeholder data — will be populated from the
 * occupational standard once uploaded.
 */

import type {
  Competency,
  LearningOutcome,
  Category,
  Exercise,
  DreyfusLevel,
  CompetencyMapEntry,
} from "./types";

// These will be populated from src/data/ files
import { competencies } from "@/data/competencies";
import { categories } from "@/data/categories";
import { exercises } from "@/data/exercises";

// --- Competencies ---

export function getAllCompetencies(): Competency[] {
  return competencies;
}

export function getCompetencyById(id: string): Competency | undefined {
  return competencies.find((c) => c.id === id);
}

// --- Learning outcomes ---

export function getLearningOutcomesByCompetency(
  competencyId: string
): LearningOutcome[] {
  const comp = getCompetencyById(competencyId);
  return comp?.learningOutcomes ?? [];
}

// --- Categories ---

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoriesByCompetency(competencyId: string): Category[] {
  return categories
    .filter((c) => c.competencyId === competencyId)
    .sort((a, b) => a.order - b.order);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

// --- Exercises ---

export function getAllExercises(): Exercise[] {
  return exercises;
}

export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find((e) => e.id === id);
}

export function getExercisesByCategory(categoryId: string): Exercise[] {
  return exercises.filter((e) => e.categoryId === categoryId);
}

export function getExercisesByCompetency(competencyId: string): Exercise[] {
  return exercises.filter((e) => e.competencyId === competencyId);
}

export function getExercisesByLevel(level: DreyfusLevel): Exercise[] {
  return exercises.filter((e) => e.dreyfusLevel === level);
}

export function filterExercises(filters: {
  competencyId?: string;
  categoryId?: string;
  dreyfusLevel?: DreyfusLevel;
  tool?: string;
  search?: string;
}): Exercise[] {
  let results = exercises;

  if (filters.competencyId) {
    results = results.filter((e) => e.competencyId === filters.competencyId);
  }
  if (filters.categoryId) {
    results = results.filter((e) => e.categoryId === filters.categoryId);
  }
  if (filters.dreyfusLevel) {
    results = results.filter((e) => e.dreyfusLevel === filters.dreyfusLevel);
  }
  if (filters.tool) {
    const toolLower = filters.tool.toLowerCase();
    results = results.filter((e) =>
      e.tools.some((t) => t.toLowerCase().includes(toolLower))
    );
  }
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    results = results.filter(
      (e) =>
        e.title.toLowerCase().includes(searchLower) ||
        e.description.toLowerCase().includes(searchLower)
    );
  }

  return results;
}

// --- Unique tools list (for filter dropdowns) ---

export function getAllTools(): string[] {
  const toolSet = new Set<string>();
  for (const ex of exercises) {
    for (const tool of ex.tools) {
      toolSet.add(tool);
    }
  }
  return Array.from(toolSet).sort();
}

// --- Competency map ---

export function getCompetencyMap(): CompetencyMapEntry[] {
  return competencies.map((comp) => {
    const cats = getCategoriesByCompetency(comp.id);
    const compExercises = getExercisesByCompetency(comp.id);

    const exerciseCounts: Record<DreyfusLevel, number> = {
      novice: 0,
      "advanced-beginner": 0,
      competent: 0,
      proficient: 0,
      expert: 0,
    };

    for (const ex of compExercises) {
      exerciseCounts[ex.dreyfusLevel]++;
    }

    return {
      competency: comp,
      categories: cats,
      exerciseCounts,
      totalExercises: compExercises.length,
    };
  });
}
