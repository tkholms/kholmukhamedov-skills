// Core data types for the task bank platform

export type DreyfusLevel =
  | "novice"
  | "advanced-beginner"
  | "competent"
  | "proficient"
  | "expert";

export const DREYFUS_LEVELS: DreyfusLevel[] = [
  "novice",
  "advanced-beginner",
  "competent",
  "proficient",
  "expert",
];

export const DREYFUS_LABELS: Record<DreyfusLevel, string> = {
  novice: "Boshlang'ich",
  "advanced-beginner": "Ilg'or boshlang'ich",
  competent: "Malakali",
  proficient: "Mohir",
  expert: "Ekspert",
};

export type Script = "latin" | "cyrillic";

/** A competency extracted from the occupational standard */
export interface Competency {
  id: string;
  /** Code from the standard, e.g. "MK-1" */
  code: string;
  /** Full name of the competency */
  name: string;
  /** Description from the standard */
  description: string;
  /** Learning outcomes linked to this competency */
  learningOutcomes: LearningOutcome[];
}

export interface LearningOutcome {
  id: string;
  /** Code from the standard */
  code: string;
  /** Full text of the learning outcome */
  text: string;
  /** Parent competency id */
  competencyId: string;
}

/** A thematic category grouping exercises under one competency */
export interface Category {
  id: string;
  name: string;
  description: string;
  competencyId: string;
  /** Display order */
  order: number;
}

/** A single hint in the scaffolding system */
export interface Hint {
  /** 1 = most general nudge, higher = more specific */
  level: number;
  text: string;
  /** Guidance for teachers on when to give this hint */
  teacherNote: string;
}

/** One row in a grading rubric */
export interface RubricCriterion {
  id: string;
  name: string;
  /** Max points for this criterion */
  maxPoints: number;
  /** Performance indicators per Dreyfus level */
  indicators: Partial<Record<DreyfusLevel, string>>;
}

/** A practical exercise / task */
export interface Exercise {
  id: string;
  title: string;
  competencyId: string;
  learningOutcomeIds: string[];
  categoryId: string;
  dreyfusLevel: DreyfusLevel;
  /** Full task description in markdown */
  description: string;
  /** Tools and equipment needed, as tags */
  tools: string[];
  /** Estimated time in minutes */
  timeEstimate: number;
  /** Layered hints — full set at novice, fewer at higher levels, none at competent+ */
  hints: Hint[];
  /** Grading rubric */
  rubric: RubricCriterion[];
  /** Common mistakes students make */
  commonMistakes: string[];
  /** Worked example — only for novice-level exercises */
  workedExample?: string;
}

/** Aggregated stats for the competency map */
export interface CompetencyMapEntry {
  competency: Competency;
  categories: Category[];
  exerciseCounts: Record<DreyfusLevel, number>;
  totalExercises: number;
}
