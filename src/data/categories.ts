import type { Category } from "@/lib/types";

export const categories: Category[] = [
  // ==========================================
  // KK-1.1 — Kompyuter tarmog'ini loyihalash
  // ==========================================
  {
    id: "cat-tarmoq-loyiha",
    name: "Tarmoq loyihalash",
    description: "Kompyuter tarmog'ining topologiyasi va sxemasini loyihalash",
    competencyId: "kk-1-1",
    order: 1,
  },

  // ==========================================
  // KK-1.2 — Tarmoq xavfsizligi
  // ==========================================
  {
    id: "cat-tarmoq-xavfsizlik",
    name: "Tarmoq xavfsizligi",
    description: "Tarmoqda ma'lumotlar himoyasi va xavfsizlik tizimlarini sozlash",
    competencyId: "kk-1-2",
    order: 1,
  },

  // ==========================================
  // KK-1.3 — Tarmoq infratuzilmasi
  // ==========================================
  {
    id: "cat-server-sozlash",
    name: "Server va stantsiyalarni sozlash",
    description: "Serverlar va ish stantsiyalarini o'rnatish, sozlash va boshqarish",
    competencyId: "kk-1-3",
    order: 1,
  },

  // ==========================================
  // KK-1.4 — Operatsion tizimlar (server)
  // ==========================================
  {
    id: "cat-os-boshqarish",
    name: "Operatsion tizimlarni boshqarish",
    description: "Windows va Linux OTni o'rnatish, sozlash va yangilash",
    competencyId: "kk-1-4",
    order: 1,
  },

  // ==========================================
  // KK-1.5 — Tarmoq nosozliklari
  // ==========================================
  {
    id: "cat-tarmoq-diagnostika",
    name: "Tarmoq diagnostikasi",
    description: "Tarmoq nosozliklarini aniqlash va bartaraf etish",
    competencyId: "kk-1-5",
    order: 1,
  },

  // ==========================================
  // KK-2.1 — Kompyuter konfiguratsiyasi
  // ==========================================
  {
    id: "cat-konfig-tanlash",
    name: "Konfiguratsiya tanlash",
    description: "Foydalanuvchi ehtiyojlariga mos kompyuter konfiguratsiyasini tanlash",
    competencyId: "kk-2-1",
    order: 1,
  },

  // ==========================================
  // KK-2.2 — Kompyuterni yig'ish
  // ==========================================
  {
    id: "cat-kompyuter-yigish",
    name: "Kompyuter yig'ish va ta'mirlash",
    description: "Kompyuter komponentlarini yig'ish, profilaktika va nosozliklarni bartaraf etish",
    competencyId: "kk-2-2",
    order: 1,
  },

  // ==========================================
  // KK-2.3 — Ma'lumotlarni zaxiralash
  // ==========================================
  {
    id: "cat-zaxiralash",
    name: "Ma'lumotlarni zaxiralash va tiklash",
    description: "Zaxira nusxa yaratish, RAID va ma'lumotlarni tiklash",
    competencyId: "kk-2-3",
    order: 1,
  },

  // ==========================================
  // KK-2.4 — OT va dasturlar o'rnatish
  // ==========================================
  {
    id: "cat-os-ornatish",
    name: "OT va dasturlarni o'rnatish",
    description: "Operatsion tizim, drayverlar va dasturlarni o'rnatish",
    competencyId: "kk-2-4",
    order: 1,
  },

  // ==========================================
  // KK-2.5 — Eskirgan infratuzilma
  // ==========================================
  {
    id: "cat-modernizatsiya",
    name: "Modernizatsiya va baholash",
    description: "Apparat va dasturiy ta'minotning eskirganligini aniqlash va yangilash",
    competencyId: "kk-2-5",
    order: 1,
  },
];
