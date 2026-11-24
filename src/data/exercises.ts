import type { Exercise } from "@/lib/types";

/**
 * Practical exercises / tasks.
 * Will be populated after competencies and categories are confirmed.
 *
 * This placeholder shows the data shape with one example exercise.
 */
export const exercises: Exercise[] = [
  {
    id: "ex-1",
    title: "Kompyuter komponentlarini aniqlash",
    competencyId: "mk-1",
    learningOutcomeIds: ["mk-1-lo-1"],
    categoryId: "cat-1",
    dreyfusLevel: "novice",
    description:
      "Berilgan kompyuter komponentlarini koʻzdan kechiring va har bir komponentning nomini, vazifasini va asosiy texnik xususiyatlarini aniqlang.\n\n## Topshiriq\n\n1. Oʻqituvchi tomonidan berilgan komponentlar toʻplamini oling\n2. Har bir komponentni koʻzdan kechiring\n3. Jadvalga komponent nomi, turi va vazifasini yozing\n4. Komponentlarning texnik xususiyatlarini aniqlang",
    tools: ["Kompyuter komponentlari toʻplami", "Jadval varaqasi"],
    timeEstimate: 45,
    hints: [
      {
        level: 1,
        text: "Komponentlarni shakli va oʻlchami boʻyicha guruhlang",
        teacherNote:
          "Agar talaba komponentlarni ajrata olmasa, birinchi bosqichda yordam bering",
      },
      {
        level: 2,
        text: "Protsessor — kichik kvadrat shaklidagi chip, radiator bilan birga boʻladi",
        teacherNote:
          "Faqat talaba 5 daqiqadan koʻproq vaqt sarflasa bering",
      },
      {
        level: 3,
        text: "Har bir komponentda yozuv bor — model raqamini toping va internetda qidiring",
        teacherNote:
          "Oxirgi maslahat — talaba mustaqil izlanishga oʻtishi kerak",
      },
    ],
    rubric: [
      {
        id: "r-1-1",
        name: "Komponentlarni aniqlash",
        maxPoints: 30,
        indicators: {
          novice:
            "Kamida 3 ta asosiy komponentni (protsessor, operativ xotira, qattiq disk) toʻgʻri aniqlaydi",
          "advanced-beginner":
            "Barcha asosiy komponentlarni aniqlaydi va ularning vazifalarini tushuntiradi",
          competent:
            "Barcha komponentlarni aniqlaydi, texnik xususiyatlarini taqqoslaydi",
        },
      },
      {
        id: "r-1-2",
        name: "Texnik xususiyatlarni aniqlash",
        maxPoints: 40,
        indicators: {
          novice: "Kamida bitta xususiyatni (masalan, hajm yoki tezlik) aniqlaydi",
          "advanced-beginner":
            "Har bir komponent uchun 2-3 ta texnik xususiyatni aniqlaydi",
          competent:
            "Barcha muhim texnik xususiyatlarni aniqlaydi va ularning ahamiyatini tushuntiradi",
        },
      },
      {
        id: "r-1-3",
        name: "Jadval toʻldirilishi",
        maxPoints: 30,
        indicators: {
          novice: "Jadval qisman toʻldirilgan, formatda xatolar bor",
          "advanced-beginner": "Jadval toʻliq toʻldirilgan, toza yozilgan",
          competent:
            "Jadval toʻliq, mantiqiy tartiblangan, qoʻshimcha izohlar bilan",
        },
      },
    ],
    commonMistakes: [
      "Operativ xotira va doimiy xotirani aralashtirib yuborish",
      "Protsessor va chipsetni farqlay olmaslik",
      "Texnik xususiyatlarda oʻlchov birliklarini notoʻgʻri yozish (MB va GB)",
    ],
    workedExample:
      "## Namuna yechim\n\n| # | Komponent nomi | Turi | Vazifasi | Texnik xususiyatlari |\n|---|---|---|---|---|\n| 1 | Intel Core i5-12400 | Protsessor (CPU) | Hisoblash amallari | 6 yadroli, 2.5 GHz, LGA 1700 |\n| 2 | Kingston DDR4 8GB | Operativ xotira (RAM) | Vaqtinchalik maʼlumotlar saqlash | 8 GB, 3200 MHz, DDR4 |\n| 3 | WD Blue 1TB | Qattiq disk (HDD) | Doimiy maʼlumotlar saqlash | 1 TB, 7200 RPM, SATA III |",
  },
];
