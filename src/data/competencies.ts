import type { Competency } from "@/lib/types";

/**
 * Competencies extracted from the occupational standard.
 *
 * IMPORTANT: Do not invent or modify competencies.
 * These must come exactly from the approved occupational standard
 * for specialty 50610401 (Computer Engineering).
 *
 * This file is a placeholder — it will be populated once the
 * occupational standard document is uploaded and reviewed.
 */
export const competencies: Competency[] = [
  // Placeholder — will be replaced with real data from the standard
  {
    id: "mk-1",
    code: "MK-1",
    name: "Kompyuter qurilmalarini yig'ish va sozlash",
    description:
      "Kompyuter tizimlarining apparat qismlarini yig'ish, oʻrnatish va sozlash boʻyicha bilim va koʻnikmalar",
    learningOutcomes: [
      {
        id: "mk-1-lo-1",
        code: "MK-1.1",
        text: "Kompyuter komponentlarini aniqlash va ularning texnik xususiyatlarini tushuntirish",
        competencyId: "mk-1",
      },
      {
        id: "mk-1-lo-2",
        code: "MK-1.2",
        text: "Kompyuter tizimini yig'ish va ishga tushirish",
        competencyId: "mk-1",
      },
    ],
  },
];
