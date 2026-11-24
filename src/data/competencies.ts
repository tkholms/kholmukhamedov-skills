import type { Competency } from "@/lib/types";

export const competencies: Competency[] = [
  // ==========================================
  // UMUMIY KOMPETENSIYALAR (UK)
  // ==========================================
  {
    id: "uk-1",
    code: "UK-1",
    name: "Muammolarni hal qilish",
    description:
      "Kasbiy faoliyat doirasida vujudga keladigan turli masalalar yechimini topish usullarini tanlay olish.",
    learningOutcomes: [
      {
        id: "uk-1-lo-1",
        code: "UK-1.1",
        text: "Muammoni aniqlash va tahlil qilish",
        competencyId: "uk-1",
      },
      {
        id: "uk-1-lo-2",
        code: "UK-1.2",
        text: "Yechim variantlarini baholash va tanlash",
        competencyId: "uk-1",
      },
    ],
  },
  {
    id: "uk-2",
    code: "UK-2",
    name: "Jamoada ishlash",
    description:
      "Rahbar tomonidan belgilangan maqsadga erishish uchun jamoada ishlay olish.",
    learningOutcomes: [
      {
        id: "uk-2-lo-1",
        code: "UK-2.1",
        text: "Jamoa ichida vazifalarni taqsimlash va bajarish",
        competencyId: "uk-2",
      },
    ],
  },
  {
    id: "uk-3",
    code: "UK-3",
    name: "Kasbiy takomillashtirish",
    description:
      "O'zining kasbiy malakasini va shaxsiy kamolotini takomillashtirib borish.",
    learningOutcomes: [
      {
        id: "uk-3-lo-1",
        code: "UK-3.1",
        text: "Yangi texnologiyalarni mustaqil o'rganish",
        competencyId: "uk-3",
      },
    ],
  },
  {
    id: "uk-4",
    code: "UK-4",
    name: "Kommunikatsiya",
    description:
      "Jamoada va ma'lum vazifani bajarishga yo'naltirilgan guruhda ishlash, hamkasblar, rahbarlar va mijozlar bilan samimiy, xushmuomala va samarali muloqot qilish.",
    learningOutcomes: [
      {
        id: "uk-4-lo-1",
        code: "UK-4.1",
        text: "Samarali og'zaki va yozma muloqot olib borish",
        competencyId: "uk-4",
      },
    ],
  },
  {
    id: "uk-5",
    code: "UK-5",
    name: "Fikrni ifodalash",
    description:
      "Ta'lim olgan tilida fikrini og'zaki va yozma ravishda ravon bayon qilish.",
    learningOutcomes: [
      {
        id: "uk-5-lo-1",
        code: "UK-5.1",
        text: "Texnik hujjatlarni tuzish va taqdimot qilish",
        competencyId: "uk-5",
      },
    ],
  },
  {
    id: "uk-6",
    code: "UK-6",
    name: "Vatanparvarlik",
    description:
      "Umuminsoniy fazilatlarga ega bo'lish, o'z millatini va Vatanini sevish, u bilan faxrlanish, milliy urf-odatlar, qadriyatlarni hurmat qilish.",
    learningOutcomes: [
      {
        id: "uk-6-lo-1",
        code: "UK-6.1",
        text: "Milliy qadriyatlarga hurmat bilan munosabatda bo'lish",
        competencyId: "uk-6",
      },
    ],
  },
  {
    id: "uk-7",
    code: "UK-7",
    name: "Axborot qidirish",
    description:
      "Professional vazifalarni samarali bajarish uchun zarur bo'ladigan ma'lumotlarni qidirish.",
    learningOutcomes: [
      {
        id: "uk-7-lo-1",
        code: "UK-7.1",
        text: "Texnik hujjatlar va manbalardan ma'lumot izlash",
        competencyId: "uk-7",
      },
    ],
  },
  {
    id: "uk-8",
    code: "UK-8",
    name: "AKT qo'llash",
    description:
      "Kasbiy faoliyatida axborot-kommunikatsiya texnologiyalarini qo'llash.",
    learningOutcomes: [
      {
        id: "uk-8-lo-1",
        code: "UK-8.1",
        text: "Zamonaviy dasturiy vositalardan foydalanish",
        competencyId: "uk-8",
      },
    ],
  },
  {
    id: "uk-9",
    code: "UK-9",
    name: "Hujjatlar bilan ishlash",
    description: "Kasbga doir hujjatlar bilan ishlash.",
    learningOutcomes: [
      {
        id: "uk-9-lo-1",
        code: "UK-9.1",
        text: "Texnik hujjatlarni o'qish va tuzish",
        competencyId: "uk-9",
      },
    ],
  },
  {
    id: "uk-10",
    code: "UK-10",
    name: "Mehnat muhofazasi",
    description:
      "Kasbiy faoliyatda xavfsizlik texnikasi va mehnat muhofazasi qoidalariga amal qilish ko'nikmalariga ega bo'lish.",
    learningOutcomes: [
      {
        id: "uk-10-lo-1",
        code: "UK-10.1",
        text: "Ish joyida xavfsizlik qoidalariga rioya qilish",
        competencyId: "uk-10",
      },
    ],
  },
  {
    id: "uk-11",
    code: "UK-11",
    name: "Ekologik xavfsizlik",
    description:
      "Sanoat va nosanoat tashkilotlarda vujudga keladigan chiqindilarni atrof-muhitga zarar yetkazmaslik choralarini ko'rish va utilizatsiya qilish.",
    learningOutcomes: [
      {
        id: "uk-11-lo-1",
        code: "UK-11.1",
        text: "Elektron chiqindilarni to'g'ri utilizatsiya qilish",
        competencyId: "uk-11",
      },
    ],
  },
  {
    id: "uk-12",
    code: "UK-12",
    name: "Ekologik madaniyat",
    description:
      "Sohaga oid ekologik madaniyatga rioya qilgan holda faoliyat olib borish.",
    learningOutcomes: [
      {
        id: "uk-12-lo-1",
        code: "UK-12.1",
        text: "Atrof-muhitni muhofaza qilish tamoyillariga amal qilish",
        competencyId: "uk-12",
      },
    ],
  },

  // ==========================================
  // KASBIY KOMPETENSIYALAR — Kvalifikatsiya 1
  // Kompyuter tizimlari bo'yicha mutaxassis
  // ==========================================
  {
    id: "kk-1-1",
    code: "KK-1.1",
    name: "Kompyuter tarmog'ini loyihalash",
    description:
      "Kompyuter tarmog'ining konstrukyiyasini loyihalash.",
    learningOutcomes: [
      {
        id: "kk-1-1-lo-1",
        code: "KK-1.1.1",
        text: "Tarmoq topologiyasini tanlash va loyihalash",
        competencyId: "kk-1-1",
      },
      {
        id: "kk-1-1-lo-2",
        code: "KK-1.1.2",
        text: "Tarmoq uskunalarini tanlash va joylashtirish rejasini tuzish",
        competencyId: "kk-1-1",
      },
      {
        id: "kk-1-1-lo-3",
        code: "KK-1.1.3",
        text: "Tarmoq sxemalarini ishlab chiqish",
        competencyId: "kk-1-1",
      },
    ],
  },
  {
    id: "kk-1-2",
    code: "KK-1.2",
    name: "Tarmoq xavfsizligini ta'minlash",
    description:
      "Dasturiy ta'minot va apparat vositalaridan foydalangan holda tarmoqdagi ma'lumotlarning himoyasini ta'minlash.",
    learningOutcomes: [
      {
        id: "kk-1-2-lo-1",
        code: "KK-1.2.1",
        text: "Tarmoq xavfsizligi tizimlarini yaratish va sozlash",
        competencyId: "kk-1-2",
      },
      {
        id: "kk-1-2-lo-2",
        code: "KK-1.2.2",
        text: "Ma'lumotlarni shifrlash va himoya qilish usullarini qo'llash",
        competencyId: "kk-1-2",
      },
      {
        id: "kk-1-2-lo-3",
        code: "KK-1.2.3",
        text: "Xavfsizlik siyosatini ishlab chiqish va joriy etish",
        competencyId: "kk-1-2",
      },
    ],
  },
  {
    id: "kk-1-3",
    code: "KK-1.3",
    name: "Tarmoq infratuzilmasini boshqarish",
    description:
      "Yangi va yangilangan tarmoqlar, ma'lumotlar bazasi dasturiy ilovalari, serverlar va ish stantsiyalarini o'rnatish, sozlash, sinovdan o'tkazish, qo'llab-quvvatlash va boshqarish.",
    learningOutcomes: [
      {
        id: "kk-1-3-lo-1",
        code: "KK-1.3.1",
        text: "Server va ish stantsiyalarini o'rnatish va sozlash",
        competencyId: "kk-1-3",
      },
      {
        id: "kk-1-3-lo-2",
        code: "KK-1.3.2",
        text: "Ma'lumotlar bazasi dasturiy ilovalari bilan ishlash",
        competencyId: "kk-1-3",
      },
      {
        id: "kk-1-3-lo-3",
        code: "KK-1.3.3",
        text: "Tarmoq uskunalarini sinovdan o'tkazish va texnik xizmat ko'rsatish",
        competencyId: "kk-1-3",
      },
    ],
  },
  {
    id: "kk-1-4",
    code: "KK-1.4",
    name: "Operatsion tizimlarni boshqarish",
    description:
      "Korxonaning ishlashi uchun zarur bo'lgan barcha dasturiy ta'minotni, shu jumladan Windows va Linux operatsion tizimlarini o'rnatish, sozlash va yangilash.",
    learningOutcomes: [
      {
        id: "kk-1-4-lo-1",
        code: "KK-1.4.1",
        text: "Windows operatsion tizimini o'rnatish va sozlash",
        competencyId: "kk-1-4",
      },
      {
        id: "kk-1-4-lo-2",
        code: "KK-1.4.2",
        text: "Linux operatsion tizimini o'rnatish va sozlash",
        competencyId: "kk-1-4",
      },
      {
        id: "kk-1-4-lo-3",
        code: "KK-1.4.3",
        text: "Dasturiy ta'minotni yangilash va boshqarish",
        competencyId: "kk-1-4",
      },
    ],
  },
  {
    id: "kk-1-5",
    code: "KK-1.5",
    name: "Tarmoq nosozliklarini bartaraf etish",
    description:
      "Mahalliy tarmoqlarni boshqarish va yuzaga kelishi mumkin bo'lgan nosozliklarni bartaraf etish choralarini ko'rish.",
    learningOutcomes: [
      {
        id: "kk-1-5-lo-1",
        code: "KK-1.5.1",
        text: "Tarmoq nosozliklarini diagnostika qilish",
        competencyId: "kk-1-5",
      },
      {
        id: "kk-1-5-lo-2",
        code: "KK-1.5.2",
        text: "Tarmoq monitoring vositalaridan foydalanish",
        competencyId: "kk-1-5",
      },
      {
        id: "kk-1-5-lo-3",
        code: "KK-1.5.3",
        text: "Tarmoq muammolarini hal qilish va hisobotini tuzish",
        competencyId: "kk-1-5",
      },
    ],
  },

  // ==========================================
  // KASBIY KOMPETENSIYALAR — Kvalifikatsiya 2
  // Kompyuter va ofis qurilmalariga xizmat
  // ==========================================
  {
    id: "kk-2-1",
    code: "KK-2.1",
    name: "Kompyuter konfiguratsiyasini tanlash",
    description:
      "Xaridor buyurtmasiga binoan turli xil yig'ilishlar uchun kompyuter konfiguratsiyasini tanlash.",
    learningOutcomes: [
      {
        id: "kk-2-1-lo-1",
        code: "KK-2.1.1",
        text: "Foydalanuvchi ehtiyojlarini aniqlash va tahlil qilish",
        competencyId: "kk-2-1",
      },
      {
        id: "kk-2-1-lo-2",
        code: "KK-2.1.2",
        text: "Komponentlarni tanlash va mosligini tekshirish",
        competencyId: "kk-2-1",
      },
      {
        id: "kk-2-1-lo-3",
        code: "KK-2.1.3",
        text: "Byudjet va samaradorlik jihatidan optimal konfiguratsiya tuzish",
        competencyId: "kk-2-1",
      },
    ],
  },
  {
    id: "kk-2-2",
    code: "KK-2.2",
    name: "Kompyuterni yig'ish va texnik xizmat ko'rsatish",
    description:
      "Kompyuterlar va noutbuklarni yig'ish va texnik xizmat ko'rsatish.",
    learningOutcomes: [
      {
        id: "kk-2-2-lo-1",
        code: "KK-2.2.1",
        text: "Kompyuter komponentlarini o'rnatish va yig'ish",
        competencyId: "kk-2-2",
      },
      {
        id: "kk-2-2-lo-2",
        code: "KK-2.2.2",
        text: "Kompyuter profilaktikasini amalga oshirish",
        competencyId: "kk-2-2",
      },
      {
        id: "kk-2-2-lo-3",
        code: "KK-2.2.3",
        text: "Nosozliklarni aniqlash va bartaraf etish",
        competencyId: "kk-2-2",
      },
    ],
  },
  {
    id: "kk-2-3",
    code: "KK-2.3",
    name: "Ma'lumotlarni tiklash va zaxiralash",
    description:
      "Kompyuter tarmoqlarida ma'lumotlarni qayta tiklash va zaxiralashni amalga oshirish.",
    learningOutcomes: [
      {
        id: "kk-2-3-lo-1",
        code: "KK-2.3.1",
        text: "Zaxira nusxa yaratish va tiklash strategiyasini tuzish",
        competencyId: "kk-2-3",
      },
      {
        id: "kk-2-3-lo-2",
        code: "KK-2.3.2",
        text: "RAID texnologiyalari va ma'lumotlarni saqlash usullarini qo'llash",
        competencyId: "kk-2-3",
      },
    ],
  },
  {
    id: "kk-2-4",
    code: "KK-2.4",
    name: "Operatsion tizim va dasturlarni o'rnatish",
    description:
      "Operatsion tizim va boshqa dasturlarni o'rnatish.",
    learningOutcomes: [
      {
        id: "kk-2-4-lo-1",
        code: "KK-2.4.1",
        text: "Windows va Linux OTni o'rnatish va sozlash",
        competencyId: "kk-2-4",
      },
      {
        id: "kk-2-4-lo-2",
        code: "KK-2.4.2",
        text: "Drayverlar va amaliy dasturlarni o'rnatish",
        competencyId: "kk-2-4",
      },
    ],
  },
  {
    id: "kk-2-5",
    code: "KK-2.5",
    name: "Eskirgan infratuzilmani aniqlash",
    description:
      "Eskirgan tarmoq infratuzilmasi apparat va dasturiy ta'minotini aniqlash.",
    learningOutcomes: [
      {
        id: "kk-2-5-lo-1",
        code: "KK-2.5.1",
        text: "Apparat va dasturiy ta'minotning eskirganlik darajasini baholash",
        competencyId: "kk-2-5",
      },
      {
        id: "kk-2-5-lo-2",
        code: "KK-2.5.2",
        text: "Modernizatsiya va almashtirish bo'yicha tavsiya berish",
        competencyId: "kk-2-5",
      },
    ],
  },
];
