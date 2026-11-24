import type { Category } from "@/lib/types";

/**
 * Categories group exercises by theme within a competency.
 * Will be populated after competencies are confirmed.
 */
export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Kompyuter komponentlari",
    description: "Asosiy apparat komponentlarini oʻrganish va ular bilan ishlash",
    competencyId: "mk-1",
    order: 1,
  },
];
