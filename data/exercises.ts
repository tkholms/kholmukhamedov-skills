import type { Exercise } from "@/lib/types";

export const exercises: Exercise[] = [
  // ============================================================
  // KK-1.1 — Kompyuter tarmog'ini loyihalash
  // ============================================================
  {
    id: "ex-1-1-01",
    title: "Kichik ofis uchun tarmoq topologiyasini tanlash",
    competencyId: "kk-1-1",
    learningOutcomeIds: ["kk-1-1-lo-1"],
    categoryId: "cat-tarmoq-loyiha",
    dreyfusLevel: "novice",
    description:
      "10 ta kompyuterdan iborat kichik ofis uchun tarmoq topologiyasini tanlang va asoslang.\n\n## Topshiriq\n\n1. Yulduz, shinali va halqasimon topologiyalarni o'rganing\n2. Har bir topologiyaning afzalliklari va kamchiliklarini jadvalga yozing\n3. Berilgan ofis uchun eng mos topologiyani tanlang va sababini tushuntiring\n4. Tanlagan topologiya sxemasini qog'ozda chizing",
    tools: ["Qog'oz va ruchka", "Topologiya ma'lumotnomasi"],
    timeEstimate: 45,
    hints: [
      {
        level: 1,
        text: "Topologiyalarni ularning shakli bo'yicha farqlang: yulduz — markaziy qurilma bor, shina — bitta kabel, halqa — doira",
        teacherNote: "Agar talaba topologiyalarni umuman bilmasa",
      },
      {
        level: 2,
        text: "Kichik ofis uchun eng mos topologiya — yulduzsimon, chunki boshqarish oson va bitta kompyuterning uzilishi boshqalarga ta'sir qilmaydi",
        teacherNote: "Faqat talaba 10 daqiqadan keyin ham tanlay olmasa",
      },
      {
        level: 3,
        text: "Yulduzsimon topologiyada markaziy qurilma sifatida switch (kommutator) ishlatiladi",
        teacherNote: "Oxirgi maslahat — talaba mustaqil davom etishi kerak",
      },
    ],
    rubric: [
      {
        id: "r-1-1-01-1",
        name: "Topologiyalarni taqqoslash",
        maxPoints: 30,
        indicators: {
          novice: "Kamida 2 ta topologiyani nomlaydi va ularni tasvirlaydi",
          "advanced-beginner": "Barcha asosiy topologiyalarni taqqoslaydi, afzalliklari va kamchiliklarini ko'rsatadi",
          competent: "Topologiyalarni real hayotdagi misollar bilan tushuntiradi",
        },
      },
      {
        id: "r-1-1-01-2",
        name: "Topologiya tanlash asosi",
        maxPoints: 40,
        indicators: {
          novice: "Bitta topologiyani tanlaydi, ammo sababini tushuntira olmaydi",
          "advanced-beginner": "Topologiyani tanlaydi va kamida 2 ta sababini ko'rsatadi",
          competent: "Tanlashda narx, kengayish imkoniyati va ishonchlililikni hisobga oladi",
        },
      },
      {
        id: "r-1-1-01-3",
        name: "Sxema sifati",
        maxPoints: 30,
        indicators: {
          novice: "Oddiy sxema chizgan, lekin ba'zi elementlar yetishmaydi",
          "advanced-beginner": "Sxemada barcha qurilmalar va ulanishlar ko'rsatilgan",
          competent: "Professional sxema — belgilar, masofalar va kabel turlari ko'rsatilgan",
        },
      },
    ],
    commonMistakes: [
      "Yulduzsimon va kengaytirilgan yulduzsimon topologiyani aralashtirib yuborish",
      "Shinali topologiyani hali ham zamonaviy deb hisoblash",
      "Markaziy qurilma (switch) ishdan chiqishi barcha tarmoqqa ta'sir qilishini unutish",
    ],
    workedExample:
      "## Namuna yechim\n\n| Topologiya | Afzalliklari | Kamchiliklari |\n|---|---|---|\n| Yulduzsimon | Boshqarish oson, bitta kompyuter uzilsa boshqalarga ta'sir qilmaydi | Markaziy qurilma ishdan chiqsa butun tarmoq to'xtaydi |\n| Shinali | Arzon, kam kabel kerak | Kabel uzilsa butun tarmoq ishlamaydi, tezligi past |\n| Halqasimon | Ma'lumot uzatish tartiblangan | Bitta kompyuter uzilsa tarmoq buziladi |\n\n**Tanlov:** Yulduzsimon topologiya — 10 ta kompyuter uchun switch orqali ulash eng ishonchli va kengaytirish mumkin.",
  },
  {
    id: "ex-1-1-02",
    title: "O'rta korxona uchun tarmoq sxemasini ishlab chiqish",
    competencyId: "kk-1-1",
    learningOutcomeIds: ["kk-1-1-lo-2", "kk-1-1-lo-3"],
    categoryId: "cat-tarmoq-loyiha",
    dreyfusLevel: "competent",
    description:
      "50 ta ish joyi, 2 ta server va Wi-Fi qoplamasiga ega bo'lgan korxona uchun to'liq tarmoq sxemasini ishlab chiqing.\n\n## Topshiriq\n\n1. Tarmoq segmentatsiyasini rejalashtiring (VLAN)\n2. IP-manzillar rejasini tuzing (subnetting)\n3. Kerakli uskunalar ro'yxatini tuzing (switch, router, access point)\n4. Tarmoq sxemasini Cisco Packet Tracer yoki qog'ozda chizing\n5. Kabel tizimini rejalashtiring",
    tools: ["Cisco Packet Tracer", "IP kalkulyator", "Qog'oz va ruchka"],
    timeEstimate: 120,
    hints: [
      {
        level: 1,
        text: "Avval bo'limlarni aniqlang: boshqaruv, moliya, IT — har biriga alohida VLAN ajrating",
        teacherNote: "Faqat talaba rejalashtirish tartibini bilmasa",
      },
    ],
    rubric: [
      {
        id: "r-1-1-02-1",
        name: "Tarmoq segmentatsiyasi",
        maxPoints: 25,
        indicators: {
          competent: "VLAN rejasi mantiqiy, bo'limlar ajratilgan",
          proficient: "VLAN, ACL va inter-VLAN routing to'g'ri rejalashtirilgan",
          expert: "Xavfsizlik va samaradorlikni hisobga olgan mukammal segmentatsiya",
        },
      },
      {
        id: "r-1-1-02-2",
        name: "IP manzillar rejasi",
        maxPoints: 25,
        indicators: {
          competent: "Subnetting to'g'ri, IP-lar tartiblangan",
          proficient: "CIDR yozuvi to'g'ri, kengayish uchun joy qoldirilgan",
          expert: "Dokumentatsiya bilan, DHCP va DNS integratsiyasi rejalashtirilgan",
        },
      },
      {
        id: "r-1-1-02-3",
        name: "Uskunalar tanlash",
        maxPoints: 25,
        indicators: {
          competent: "Zarur uskunalar ro'yxati to'liq, modellar ko'rsatilgan",
          proficient: "Uskunalar texnik xususiyatlari asosida tanlangan, zaxira hisobga olingan",
          expert: "Byudjet, kengayish va ishonchlililik tahlili bilan",
        },
      },
      {
        id: "r-1-1-02-4",
        name: "Sxema sifati",
        maxPoints: 25,
        indicators: {
          competent: "Sxemada barcha uskunalar va ulanishlar ko'rsatilgan",
          proficient: "Professional belgilar ishlatilgan, mantiqiy va fizik sxemalar alohida",
          expert: "Rack diagram, kabel jadval va sxema to'liq hujjatlashtirish bilan",
        },
      },
    ],
    commonMistakes: [
      "Barcha qurilmalarni bitta VLAN ga qo'yish",
      "Wi-Fi uchun alohida VLAN ajratmaslik",
      "Server segmentini ish stantsiyalari bilan aralashtirish",
    ],
  },

  // ============================================================
  // KK-1.2 — Tarmoq xavfsizligi
  // ============================================================
  {
    id: "ex-1-2-01",
    title: "Firewall qoidalarini sozlash",
    competencyId: "kk-1-2",
    learningOutcomeIds: ["kk-1-2-lo-1"],
    categoryId: "cat-tarmoq-xavfsizlik",
    dreyfusLevel: "advanced-beginner",
    description:
      "Kichik korxona tarmoqining xavfsizligini ta'minlash uchun firewall qoidalarini sozlang.\n\n## Topshiriq\n\n1. Windows Firewall yoki Linux iptables orqali qoidalar yarating\n2. Ichki tarmoqdan internetga HTTP/HTTPS ruxsat bering\n3. Tashqaridan ichki tarmoqqa faqat VPN orqali kirishga ruxsat bering\n4. Barcha boshqa trafikni bloklang\n5. Qoidalarni sinab ko'ring va natijalarni hujjatlashtiring",
    tools: ["Windows Server yoki Linux server", "Terminal/PowerShell"],
    timeEstimate: 60,
    hints: [
      {
        level: 1,
        text: "Firewall qoidalari yuqoridan pastga qarab tekshiriladi — tartib muhim",
        teacherNote: "Agar talaba qoidalar tartibini bilmasa",
      },
      {
        level: 2,
        text: "Linux iptables: iptables -A INPUT -p tcp --dport 80 -j ACCEPT",
        teacherNote: "Agar talaba buyruq sintaksisini bilmasa",
      },
    ],
    rubric: [
      {
        id: "r-1-2-01-1",
        name: "Qoidalar to'g'riligi",
        maxPoints: 40,
        indicators: {
          "advanced-beginner": "Asosiy qoidalar yaratilgan, HTTP/HTTPS ruxsat berilgan",
          competent: "Barcha qoidalar to'g'ri, default deny siyosati qo'llanilgan",
          proficient: "Qoidalar optimallashtirilgan, logging yoqilgan",
        },
      },
      {
        id: "r-1-2-01-2",
        name: "Sinovdan o'tkazish",
        maxPoints: 30,
        indicators: {
          "advanced-beginner": "Kamida bitta qoidani sinab ko'rgan",
          competent: "Barcha qoidalarni sinab ko'rgan va natijalarni yozgan",
          proficient: "Penetration test usullari bilan tekshirgan",
        },
      },
      {
        id: "r-1-2-01-3",
        name: "Hujjatlashtirish",
        maxPoints: 30,
        indicators: {
          "advanced-beginner": "Qoidalar ro'yxati yozilgan",
          competent: "Har bir qoidaning maqsadi tushuntirilgan",
          proficient: "To'liq xavfsizlik siyosati hujjati tuzilgan",
        },
      },
    ],
    commonMistakes: [
      "Default ACCEPT siyosatini qoldirish — xavfsiz emas",
      "DNS (port 53) trafikni bloklab qo'yish — internet ishlamay qoladi",
      "Qoidalar tartibini noto'g'ri belgilash",
    ],
  },
  {
    id: "ex-1-2-02",
    title: "Tarmoq trafigini tahlil qilish",
    competencyId: "kk-1-2",
    learningOutcomeIds: ["kk-1-2-lo-2", "kk-1-2-lo-3"],
    categoryId: "cat-tarmoq-xavfsizlik",
    dreyfusLevel: "proficient",
    description:
      "Wireshark yordamida tarmoq trafigini ushlang, tahlil qiling va potentsial xavfsizlik tahdidlarini aniqlang.\n\n## Topshiriq\n\n1. Wireshark dasturini ishga tushiring va 10 daqiqa davomida trafikni ushlang\n2. HTTP va HTTPS trafikni ajratib ko'ring\n3. DNS so'rovlarni tahlil qiling\n4. Shubhali trafikni aniqlang (noma'lum IP, g'ayrioddiy portlar)\n5. Xavfsizlik tahdidlari haqida hisobot yozing",
    tools: ["Wireshark", "Kompyuter tarmoqqa ulangan"],
    timeEstimate: 90,
    hints: [
      {
        level: 1,
        text: "Wireshark filtrlaridan foydalaning: http, dns, tcp.port == 443",
        teacherNote: "Faqat talaba filtrlarni bilmasa",
      },
    ],
    rubric: [
      {
        id: "r-1-2-02-1",
        name: "Trafik tahlili",
        maxPoints: 40,
        indicators: {
          proficient: "Protokollarni to'g'ri aniqlaydi, filtrlarni samarali ishlatadi",
          expert: "Chuqur paket tahlili, anomaliyalarni aniqlaydi, statistik tahlil qiladi",
        },
      },
      {
        id: "r-1-2-02-2",
        name: "Tahdidlarni aniqlash",
        maxPoints: 30,
        indicators: {
          proficient: "Kamida 2 ta potentsial tahdidni aniqlaydi",
          expert: "Tahdidlarni tasniflaydi va bartaraf etish choralarini taklif qiladi",
        },
      },
      {
        id: "r-1-2-02-3",
        name: "Hisobot sifati",
        maxPoints: 30,
        indicators: {
          proficient: "Hisobotda topilmalar va tavsiyalar bor",
          expert: "Professional hisobot — grafiklar, statistika va batafsil tavsiyalar bilan",
        },
      },
    ],
    commonMistakes: [
      "Barcha trafikni o'qishga harakat qilish — filtrlardan foydalanish kerak",
      "Shifrlanmagan HTTP trafikni e'tiborsiz qoldirish",
      "Ichki tarmoq trafigini tashqi trafik deb noto'g'ri aniqlash",
    ],
  },

  // ============================================================
  // KK-1.3 — Tarmoq infratuzilmasi
  // ============================================================
  {
    id: "ex-1-3-01",
    title: "DHCP va DNS serverni sozlash",
    competencyId: "kk-1-3",
    learningOutcomeIds: ["kk-1-3-lo-1"],
    categoryId: "cat-server-sozlash",
    dreyfusLevel: "advanced-beginner",
    description:
      "Windows Server yoki Linux serverda DHCP va DNS xizmatlarini o'rnating va sozlang.\n\n## Topshiriq\n\n1. DHCP serverni o'rnating va IP-manzillar diapazonini belgilang\n2. DNS serverni o'rnating va zona yarating\n3. Klient kompyuterdan DHCP orqali IP olishni sinang\n4. DNS resolyutsiyani sinang (nslookup buyrug'i bilan)\n5. Sozlamalarni hujjatlashtiring",
    tools: ["Windows Server / Ubuntu Server", "Virtual mashina (VirtualBox)", "Terminal"],
    timeEstimate: 90,
    hints: [
      {
        level: 1,
        text: "Windows Server: Server Manager > Add Roles > DHCP Server",
        teacherNote: "Agar talaba DHCP rolini o'rnatishni bilmasa",
      },
      {
        level: 2,
        text: "DHCP scope yaratishda: Start IP, End IP, Subnet Mask, Default Gateway va DNS server manzilini kiriting",
        teacherNote: "Agar talaba scope parametrlarini bilmasa",
      },
    ],
    rubric: [
      {
        id: "r-1-3-01-1",
        name: "DHCP sozlash",
        maxPoints: 35,
        indicators: {
          "advanced-beginner": "DHCP o'rnatilgan, scope yaratilgan, klient IP oladi",
          competent: "Reservatsiya, exclusion va lease time sozlangan",
          proficient: "DHCP failover va monitoring sozlangan",
        },
      },
      {
        id: "r-1-3-01-2",
        name: "DNS sozlash",
        maxPoints: 35,
        indicators: {
          "advanced-beginner": "DNS zona yaratilgan, A record qo'shilgan",
          competent: "Forward va reverse lookup zonalari to'g'ri sozlangan",
          proficient: "Conditional forwarder va DNS xavfsizligi sozlangan",
        },
      },
      {
        id: "r-1-3-01-3",
        name: "Sinov va hujjatlashtirish",
        maxPoints: 30,
        indicators: {
          "advanced-beginner": "ipconfig va nslookup natijalari ko'rsatilgan",
          competent: "To'liq sinov natijalari hujjatlashtirish bilan",
          proficient: "Muammolarni bartaraf etish jarayoni ham hujjatlashtirilgan",
        },
      },
    ],
    commonMistakes: [
      "DHCP scope subnet mask ni noto'g'ri belgilash",
      "DNS forward va reverse zonalarni aralashtirish",
      "Default gateway ni DHCP scope ga qo'shmaslik",
    ],
  },

  // ============================================================
  // KK-1.4 — Operatsion tizimlarni boshqarish
  // ============================================================
  {
    id: "ex-1-4-01",
    title: "Linux operatsion tizimini o'rnatish va asosiy sozlash",
    competencyId: "kk-1-4",
    learningOutcomeIds: ["kk-1-4-lo-2"],
    categoryId: "cat-os-boshqarish",
    dreyfusLevel: "novice",
    description:
      "Virtual mashinaga Ubuntu Server o'rnating va asosiy sozlamalarni bajaring.\n\n## Topshiriq\n\n1. VirtualBox da yangi virtual mashina yarating (RAM: 2GB, Disk: 20GB)\n2. Ubuntu Server ISO faylidan o'rnating\n3. Foydalanuvchi yarating va parol belgilang\n4. Tarmoq sozlamalarini tekshiring (ip addr buyrug'i)\n5. Tizimni yangilang (sudo apt update && sudo apt upgrade)\n6. SSH serverni o'rnating va ulanishni sinang",
    tools: ["VirtualBox", "Ubuntu Server ISO", "Terminal"],
    timeEstimate: 60,
    hints: [
      {
        level: 1,
        text: "VirtualBox da yangi VM yaratishda Linux va Ubuntu turini tanlang",
        teacherNote: "Birinchi marta VM yaratayotgan talaba uchun",
      },
      {
        level: 2,
        text: "O'rnatish jarayonida tarmoq sozlamasida 'Use entire disk' tanlang",
        teacherNote: "Disk bo'lish masalasida qiynalsa",
      },
      {
        level: 3,
        text: "SSH o'rnatish: sudo apt install openssh-server, keyin sudo systemctl enable ssh",
        teacherNote: "Oxirgi maslahat — talaba buyruqlarni mustaqil yozishi kerak",
      },
    ],
    rubric: [
      {
        id: "r-1-4-01-1",
        name: "VM yaratish va OT o'rnatish",
        maxPoints: 30,
        indicators: {
          novice: "VM yaratilgan va Ubuntu o'rnatilgan, tizim ishga tushadi",
          "advanced-beginner": "VM parametrlari optimal tanlangan, o'rnatish muammosiz bajarilgan",
          competent: "Disk partitsiya rejasi tushuntirilgan, swap hajmi to'g'ri",
        },
      },
      {
        id: "r-1-4-01-2",
        name: "Asosiy sozlamalar",
        maxPoints: 40,
        indicators: {
          novice: "Foydalanuvchi yaratilgan, tizim yangilangan",
          "advanced-beginner": "Tarmoq sozlangan, SSH ishlaydi, firewall yoqilgan",
          competent: "sudo huquqlari sozlangan, hostname belgilangan, timezone to'g'ri",
        },
      },
      {
        id: "r-1-4-01-3",
        name: "Buyruqlarni bilish",
        maxPoints: 30,
        indicators: {
          novice: "Asosiy buyruqlarni (ls, cd, sudo) ishlatadi",
          "advanced-beginner": "Paket menejeri va xizmatlarni boshqarish buyruqlarini biladi",
          competent: "Tizim holatini tekshirish va log fayllarni o'qish buyruqlarini biladi",
        },
      },
    ],
    commonMistakes: [
      "VM ga yetarli RAM ajratmaslik — tizim juda sekin ishlaydi",
      "O'rnatishda swap bo'limni yaratmaslik",
      "Root foydalanuvchi bilan ishlash — sudo ishlatish kerak",
    ],
    workedExample:
      "## Namuna: VM yaratish bosqichlari\n\n1. VirtualBox > New > Name: Ubuntu-Server, Type: Linux, Version: Ubuntu (64-bit)\n2. RAM: 2048 MB\n3. Create virtual hard disk > VDI > Dynamically allocated > 20 GB\n4. Settings > Storage > Controller IDE > Ubuntu ISO tanlash\n5. Start > O'rnatish jarayonini boshlash\n\n## O'rnatishdan keyin:\n```\nsudo apt update && sudo apt upgrade -y\nsudo apt install openssh-server -y\nsudo systemctl enable ssh\nsudo systemctl start ssh\nip addr show\n```",
  },
  {
    id: "ex-1-4-02",
    title: "Windows va Linux dual-boot tizimini sozlash",
    competencyId: "kk-1-4",
    learningOutcomeIds: ["kk-1-4-lo-1", "kk-1-4-lo-2"],
    categoryId: "cat-os-boshqarish",
    dreyfusLevel: "competent",
    description:
      "Bitta kompyuterda Windows va Linux tizimlarini dual-boot rejimida o'rnating.\n\n## Topshiriq\n\n1. Qattiq diskni partitsiyalarga bo'ling (Windows: NTFS, Linux: ext4, swap)\n2. Avval Windows 10/11 ni o'rnating\n3. Keyin Linux (Ubuntu) ni ikkinchi partitsiyaga o'rnating\n4. GRUB bootloader sozlang\n5. Ikkala tizim ham ishga tushishini sinang\n6. Umumiy fayl bo'limi (shared partition) yarating",
    tools: ["Kompyuter yoki VM", "Windows ISO", "Ubuntu ISO", "USB flesh"],
    timeEstimate: 150,
    hints: [
      {
        level: 1,
        text: "Har doim Windows ni birinchi o'rnating — Linux bootloader Windows ni avtomatik topadi",
        teacherNote: "Tartibni noto'g'ri tanlagan talaba uchun",
      },
    ],
    rubric: [
      {
        id: "r-1-4-02-1",
        name: "Partitsiya rejasi",
        maxPoints: 30,
        indicators: {
          competent: "Windows va Linux partitsiyalari to'g'ri yaratilgan",
          proficient: "EFI, Windows, Linux, swap va shared partitsiyalar rejalashtirilgan",
          expert: "LVM ishlatilgan, kengayish imkoniyati bilan",
        },
      },
      {
        id: "r-1-4-02-2",
        name: "O'rnatish va bootloader",
        maxPoints: 40,
        indicators: {
          competent: "Ikkala OT o'rnatilgan, GRUB menyusidan tanlash mumkin",
          proficient: "GRUB sozlangan (default OT, timeout), ikkala OT barqaror ishlaydi",
          expert: "UEFI Secure Boot bilan ishlaydi, bootloader tiklash ko'nikmasi bor",
        },
      },
      {
        id: "r-1-4-02-3",
        name: "Umumiy bo'lim",
        maxPoints: 30,
        indicators: {
          competent: "NTFS yoki exFAT formatidagi umumiy bo'lim yaratilgan",
          proficient: "Ikkala OT dan ham o'qish/yozish mumkin, avtomatik mount sozlangan",
          expert: "Fayllarni sinxronlashtirish va zaxiralash tizimi qo'shilgan",
        },
      },
    ],
    commonMistakes: [
      "Linux ni birinchi o'rnatish — Windows bootloader GRUB ni o'chirib yuboradi",
      "EFI partitsiyani o'chirish yoki qayta formatlash",
      "Linux swap partitsiyasini yaratmaslik",
    ],
  },

  // ============================================================
  // KK-1.5 — Tarmoq nosozliklari
  // ============================================================
  {
    id: "ex-1-5-01",
    title: "Tarmoq ulanish muammolarini diagnostika qilish",
    competencyId: "kk-1-5",
    learningOutcomeIds: ["kk-1-5-lo-1"],
    categoryId: "cat-tarmoq-diagnostika",
    dreyfusLevel: "novice",
    description:
      "Kompyuter internetga ulana olmayapti. Muammoni bosqichma-bosqich diagnostika qiling.\n\n## Topshiriq\n\n1. Fizik ulanishni tekshiring (kabel, Wi-Fi)\n2. IP konfiguratsiyani tekshiring (ipconfig / ip addr)\n3. Default gateway ga ping yuboring\n4. DNS serverni tekshiring (nslookup)\n5. Internetdagi serverga ping yuboring (8.8.8.8)\n6. Muammo sababini aniqlang va bartaraf eting",
    tools: ["Kompyuter", "Terminal / CMD", "Tarmoq kabeli"],
    timeEstimate: 30,
    hints: [
      {
        level: 1,
        text: "Quyidan yuqoriga tekshiring: 1) kabel, 2) IP, 3) gateway, 4) DNS, 5) internet",
        teacherNote: "OSI modeli bo'yicha diagnostika tartibini tushuntiring",
      },
      {
        level: 2,
        text: "Agar ping 8.8.8.8 ishlasa, lekin saytlar ochilmasa — muammo DNS da",
        teacherNote: "DNS muammosini farqlashga yordam kerak bo'lsa",
      },
      {
        level: 3,
        text: "DNS ni tekshirish: nslookup google.com. Ishlamasa: ipconfig /flushdns yoki DNS serverni 8.8.8.8 ga o'zgartiring",
        teacherNote: "Oxirgi maslahat — talaba mustaqil hal qilishi kerak",
      },
    ],
    rubric: [
      {
        id: "r-1-5-01-1",
        name: "Diagnostika tartibi",
        maxPoints: 40,
        indicators: {
          novice: "Kamida 3 ta diagnostika buyrug'ini ishlatadi",
          "advanced-beginner": "To'g'ri tartibda barcha qadamlarni bajaradi",
          competent: "OSI modeli qatlamlari bo'yicha tizimli diagnostika qiladi",
        },
      },
      {
        id: "r-1-5-01-2",
        name: "Muammoni aniqlash",
        maxPoints: 30,
        indicators: {
          novice: "Muammoni taxminiy aniqlaydi",
          "advanced-beginner": "Muammoni aniq aniqlaydi va sababini tushuntiradi",
          competent: "Bir nechta mumkin bo'lgan sabablarni tahlil qiladi",
        },
      },
      {
        id: "r-1-5-01-3",
        name: "Muammoni bartaraf etish",
        maxPoints: 30,
        indicators: {
          novice: "O'qituvchi yordamida muammoni hal qiladi",
          "advanced-beginner": "Mustaqil ravishda muammoni hal qiladi",
          competent: "Muammoni hal qiladi va kelajakda oldini olish choralarini taklif qiladi",
        },
      },
    ],
    commonMistakes: [
      "Diagnostikani noto'g'ri tartibda boshlash (masalan, DNS dan)",
      "Fizik ulanishni tekshirmay o'tkazib yuborish",
      "ping buyrug'ida IP manzil o'rniga domen nomi ishlatish (DNS muammosini ajrata olmaslik)",
    ],
    workedExample:
      "## Namuna: diagnostika bosqichlari\n\n```\n1. Kabelni tekshirish — LED yonayaptimi?\n   > Ha — keyingi qadam\n\n2. ipconfig (Windows) yoki ip addr (Linux)\n   > IP: 192.168.1.105, Subnet: 255.255.255.0, Gateway: 192.168.1.1\n   > IP bor — keyingi qadam\n\n3. ping 192.168.1.1\n   > Reply from 192.168.1.1 — Gateway ishlayapti\n\n4. ping 8.8.8.8\n   > Request timed out — Internet ulanishi yo'q!\n   > Muammo: Gateway dan tashqariga chiqolmayapti\n\n5. Yechim: Router ni qayta ishga tushirish\n   yoki ISP bilan bog'lanish\n```",
  },

  // ============================================================
  // KK-2.1 — Kompyuter konfiguratsiyasi
  // ============================================================
  {
    id: "ex-2-1-01",
    title: "Ofis ishi uchun kompyuter konfiguratsiyasini tanlash",
    competencyId: "kk-2-1",
    learningOutcomeIds: ["kk-2-1-lo-1", "kk-2-1-lo-2"],
    categoryId: "cat-konfig-tanlash",
    dreyfusLevel: "novice",
    description:
      "Buxgalter uchun ofis kompyuterining konfiguratsiyasini tanlang. Byudjet: 5 million so'm.\n\n## Topshiriq\n\n1. Buxgalterning ehtiyojlarini aniqlang (qanday dasturlar, qanday ishlar)\n2. Protsessor, RAM, qattiq disk, monitor tanlang\n3. Komponentlar mosligini tekshiring (soket, DDR versiyasi)\n4. Narxlarni hisoblang va byudjetga mosligini tekshiring\n5. Konfiguratsiya jadvalini tuzing",
    tools: ["Internet (narxlarni tekshirish uchun)", "Jadval varaqasi"],
    timeEstimate: 45,
    hints: [
      {
        level: 1,
        text: "Buxgalter uchun kerak: 1C, Excel, internet — og'ir grafika kerak emas",
        teacherNote: "Agar talaba ehtiyojlarni aniqlashni bilmasa",
      },
      {
        level: 2,
        text: "Minimal konfiguratsiya: Intel Core i3/i5, 8 GB RAM, 256 GB SSD",
        teacherNote: "Agar talaba komponent tanlashda qiynalsa",
      },
      {
        level: 3,
        text: "Moslikni tekshiring: protsessor soketi (LGA 1700) va anakart soketi bir xil bo'lishi kerak. DDR4 protsessor — DDR4 RAM kerak",
        teacherNote: "Oxirgi maslahat — talaba mustaqil davom etishi kerak",
      },
    ],
    rubric: [
      {
        id: "r-2-1-01-1",
        name: "Ehtiyojlarni aniqlash",
        maxPoints: 25,
        indicators: {
          novice: "Asosiy ehtiyojlarni (dasturlar ro'yxati) yozgan",
          "advanced-beginner": "Ehtiyojlarni prioritetlashtirgan (muhim / qo'shimcha)",
          competent: "Kelajakdagi ehtiyojlarni ham hisobga olgan",
        },
      },
      {
        id: "r-2-1-01-2",
        name: "Komponentlar tanlash",
        maxPoints: 35,
        indicators: {
          novice: "Asosiy komponentlarni tanlagan (CPU, RAM, disk)",
          "advanced-beginner": "Barcha komponentlarni tanlagan, texnik xususiyatlar ko'rsatilgan",
          competent: "Optimal tanlangan — ortiqcha kuchli ham, ojiz ham emas",
        },
      },
      {
        id: "r-2-1-01-3",
        name: "Moslik va byudjet",
        maxPoints: 40,
        indicators: {
          novice: "Komponentlar mosligini tekshirmagan yoki xatolar bor",
          "advanced-beginner": "Moslik tekshirilgan, byudjetga mos",
          competent: "Moslik, byudjet va samaradorlik muvozanati to'g'ri",
        },
      },
    ],
    commonMistakes: [
      "DDR4 anakartga DDR5 RAM tanlash",
      "Protsessor soketini anakart soketi bilan mos kelmasligini e'tiborsiz qoldirish",
      "Byudjetning ko'p qismini protsessorga sarflash va boshqa komponentlarga yetkazmaslik",
    ],
    workedExample:
      "## Namuna konfiguratsiya — Buxgalter kompyuteri\n\n| Komponent | Model | Narx (so'm) |\n|---|---|---|\n| Protsessor | Intel Core i3-12100 (LGA 1700) | 800,000 |\n| Anakart | Gigabyte H610M (LGA 1700, DDR4) | 600,000 |\n| RAM | Kingston 8GB DDR4 3200MHz | 300,000 |\n| SSD | Kingston A400 256GB SATA | 250,000 |\n| Korpus + PSU | Deepcool 450W | 350,000 |\n| Monitor | 24\" Full HD IPS | 1,200,000 |\n| Klaviatura + sichqoncha | Logitech to'plam | 200,000 |\n| **Jami** | | **3,700,000** |\n\nQolgan 1,300,000 so'm — Windows litsenziyasi va ofis dasturlari uchun.",
  },
  {
    id: "ex-2-1-02",
    title: "Turli maqsadlar uchun 3 xil konfiguratsiya tayyorlash",
    competencyId: "kk-2-1",
    learningOutcomeIds: ["kk-2-1-lo-1", "kk-2-1-lo-2", "kk-2-1-lo-3"],
    categoryId: "cat-konfig-tanlash",
    dreyfusLevel: "competent",
    description:
      "Quyidagi 3 ta mijoz uchun alohida kompyuter konfiguratsiyalarini tayyorlang va taqqoslang:\n\n## Mijozlar\n\n1. **Grafik dizayner** — Adobe Photoshop, Illustrator, video tahrirlash. Byudjet: 15 mln so'm\n2. **Dasturchi** — IDE, Docker, virtual mashinalar. Byudjet: 10 mln so'm  \n3. **O'qituvchi** — Prezentatsiya, internet, ofis dasturlari. Byudjet: 4 mln so'm\n\n## Topshiriq\n\n1. Har bir mijoz uchun alohida konfiguratsiya tuzing\n2. Tanlashning sabablarini tushuntiring\n3. 3 ta konfiguratsiyani taqqoslash jadvalini yarating\n4. Har bir mijozga alternativ (arzonroq/qimmatroq) variant taklif qiling",
    tools: ["Internet", "Jadval dasturi (Excel/Google Sheets)"],
    timeEstimate: 90,
    hints: [
      {
        level: 1,
        text: "Grafik dizaynerga kuchli GPU va ko'p RAM kerak. Dasturchiga ko'p yadroli CPU va tez SSD kerak. O'qituvchiga oddiy konfiguratsiya yetarli",
        teacherNote: "Agar talaba ehtiyojlarni farqlashda qiynalsa",
      },
    ],
    rubric: [
      {
        id: "r-2-1-02-1",
        name: "Konfiguratsiyalar to'g'riligi",
        maxPoints: 40,
        indicators: {
          competent: "3 ta konfiguratsiya tuzilgan, har biri ehtiyojlarga mos",
          proficient: "Konfiguratsiyalar optimallashtirilgan, alternativlar taklif qilingan",
          expert: "Kelajakka moslashuvchan, benchmark natijalari bilan asoslangan",
        },
      },
      {
        id: "r-2-1-02-2",
        name: "Taqqoslash tahlili",
        maxPoints: 30,
        indicators: {
          competent: "Jadvalda asosiy farqlar ko'rsatilgan",
          proficient: "Narx/samaradorlik tahlili batafsil",
          expert: "TCO (Total Cost of Ownership) hisobi bilan",
        },
      },
      {
        id: "r-2-1-02-3",
        name: "Asoslash sifati",
        maxPoints: 30,
        indicators: {
          competent: "Har bir tanlash uchun kamida 2 ta sabab ko'rsatilgan",
          proficient: "Texnik va iqtisodiy jihatdan asoslangan",
          expert: "Mijoz bilan suhbat simulyatsiyasi, professional taqdimot",
        },
      },
    ],
    commonMistakes: [
      "Grafik dizaynerga oddiy integrlangan grafikani tanlash",
      "Dasturchiga kam RAM (8 GB) ajratish — Docker va VM uchun 16-32 GB kerak",
      "Barcha konfiguratsiyalarga bir xil komponent tanlash",
    ],
  },

  // ============================================================
  // KK-2.2 — Kompyuterni yig'ish
  // ============================================================
  {
    id: "ex-2-2-01",
    title: "Kompyuter komponentlarini aniqlash va yig'ish",
    competencyId: "kk-2-2",
    learningOutcomeIds: ["kk-2-2-lo-1"],
    categoryId: "cat-kompyuter-yigish",
    dreyfusLevel: "novice",
    description:
      "Berilgan komponentlar to'plamidan kompyuterni yig'ing va ishga tushiring.\n\n## Topshiriq\n\n1. Barcha komponentlarni aniqlang va nomlang\n2. Antistatik qoidalarga rioya qiling\n3. Komponentlarni to'g'ri tartibda o'rnating:\n   - Protsessorni anakartga o'rnating\n   - Sovutgichni o'rnating\n   - RAM modullarini o'rnating\n   - Anakartni korpusga o'rnating\n   - Quvvat manbaini ulang\n   - Qattiq diskni o'rnating\n4. Kabellarni ulang\n5. Kompyuterni ishga tushiring va BIOS ga kiring",
    tools: [
      "Kompyuter komponentlari to'plami",
      "Krutsatka to'plami",
      "Antistatik bilakuzuk",
    ],
    timeEstimate: 90,
    hints: [
      {
        level: 1,
        text: "Yig'ishdan oldin antistatik bilakuzukni taqing yoki metall yuzaga tegib statik zaryadni chiqaring",
        teacherNote: "Xavfsizlik qoidalari muhim — har doim eslatib turing",
      },
      {
        level: 2,
        text: "Protsessorni o'rnatishda kuchli bosmang — u faqat bitta yo'nalishda o'rnashadi. Oltin uchburchakni toping",
        teacherNote: "Protsessor o'rnatishda qiynalsa",
      },
      {
        level: 3,
        text: "Quvvat kabellarini ulash tartibi: 24-pin ATX (anakart), 8-pin CPU, SATA power (disk), PCIe (videokarta agar bo'lsa)",
        teacherNote: "Oxirgi maslahat — talaba mustaqil bajarishi kerak",
      },
    ],
    rubric: [
      {
        id: "r-2-2-01-1",
        name: "Komponentlarni aniqlash",
        maxPoints: 20,
        indicators: {
          novice: "Kamida 5 ta asosiy komponentni to'g'ri nomlaydi",
          "advanced-beginner": "Barcha komponentlarni va ularning interfeyslarini aniqlaydi",
          competent: "Texnik xususiyatlarini ham aniqlaydi",
        },
      },
      {
        id: "r-2-2-01-2",
        name: "Yig'ish jarayoni",
        maxPoints: 50,
        indicators: {
          novice: "Komponentlar o'rnatilgan, lekin tartib va aniqliq yetishmaydi",
          "advanced-beginner": "To'g'ri tartibda yig'ilgan, kabellar tartiblangan",
          competent: "Professional sifatda yig'ilgan, kabel boshqaruv (cable management) qilingan",
        },
      },
      {
        id: "r-2-2-01-3",
        name: "Ishga tushirish",
        maxPoints: 30,
        indicators: {
          novice: "Kompyuter yonadi va BIOS ekrani ko'rinadi",
          "advanced-beginner": "BIOS da barcha komponentlar tanilgan",
          competent: "BIOS sozlamalari tekshirilgan (boot tartib, RAM tezligi)",
        },
      },
    ],
    commonMistakes: [
      "Anakart ostiga standoff (turuvchi vintlar) o'rnatmaslik — qisqa tutashuv xavfi",
      "RAM ni noto'g'ri slotga o'rnatish (dual channel uchun 1 va 3 slot kerak)",
      "CPU sovutgichi termal pastasiz o'rnatish",
      "Front panel konnektorlarini noto'g'ri ulash",
    ],
    workedExample:
      "## Namuna: Yig'ish tartibi\n\n1. **Tayyorgarlik:** Antistatik bilakuzuk taqish, ish joyini tozalash\n2. **CPU o'rnatish:** Soketni ochish > CPU ni oltin uchburchak bo'yicha joylashtirish > Soketni yopish\n3. **Termal pasta:** Protsessor ustiga yupqa qatlam surish\n4. **Sovutgich:** Sovutgichni protsessor ustiga mahkamlash\n5. **RAM:** Slotlarni ochish > RAM ni 1 va 3 slotlarga bosib o'rnatish (click ovozi)\n6. **Anakart:** Standoff vintlarni korpusga o'rnatish > I/O shield > Anakartni joylashtirish va vintlash\n7. **PSU:** Quvvat manbaini korpusga o'rnatish\n8. **Disk:** SSD/HDD ni joyiga o'rnatish\n9. **Kabellar:** 24-pin ATX, 8-pin CPU, SATA data + power\n10. **Sinov:** Yoqish va BIOS tekshirish",
  },
  {
    id: "ex-2-2-02",
    title: "Kompyuter nosozligini diagnostika qilish va ta'mirlash",
    competencyId: "kk-2-2",
    learningOutcomeIds: ["kk-2-2-lo-2", "kk-2-2-lo-3"],
    categoryId: "cat-kompyuter-yigish",
    dreyfusLevel: "advanced-beginner",
    description:
      "O'qituvchi tomonidan sun'iy ravishda nosozlik kiritilgan kompyuterni diagnostika qiling va ta'mirlang.\n\n## Topshiriq\n\n1. Kompyuterni yoqing va nosozlik belgilarini kuzating\n2. POST kodlarini (signal tovushlari yoki LED) tekshiring\n3. Nosozlikni aniqlang\n4. Muammoni bartaraf eting\n5. Kompyuterni qayta ishga tushiring va to'g'ri ishlashini tasdiqlang\n6. Diagnostika hisobotini yozing",
    tools: [
      "Nosozlik kiritilgan kompyuter",
      "Krutsatka to'plami",
      "POST karta (agar mavjud)",
      "Zaxira komponentlar",
    ],
    timeEstimate: 60,
    hints: [
      {
        level: 1,
        text: "POST signal tovushlarini tinglang: 1 uzun + 2 qisqa = videokarta muammosi, uzluksiz = RAM muammosi",
        teacherNote: "Agar talaba POST kodlarini bilmasa",
      },
      {
        level: 2,
        text: "Minimal konfiguratsiya usuli: faqat CPU, 1 ta RAM, anakart va PSU qoldirib boshqa hammasini ajrating",
        teacherNote: "Murakkab nosozlikda yordam kerak bo'lsa",
      },
    ],
    rubric: [
      {
        id: "r-2-2-02-1",
        name: "Diagnostika jarayoni",
        maxPoints: 40,
        indicators: {
          "advanced-beginner": "Tizimli ravishda tekshiradi, POST kodlarini biladi",
          competent: "Minimal konfiguratsiya usulini qo'llaydi, multimetr ishlatadi",
          proficient: "Murakkab nosozliklarni (anakart darajasida) diagnostika qiladi",
        },
      },
      {
        id: "r-2-2-02-2",
        name: "Ta'mirlash",
        maxPoints: 35,
        indicators: {
          "advanced-beginner": "Nosoz komponentni topadi va almashtirib tuzatadi",
          competent: "Tez va samarali tuzatadi, qo'shimcha tekshiruvlar o'tkazadi",
          proficient: "Ildiz sababini aniqlaydi va kelajakda oldini olish choralarini ko'radi",
        },
      },
      {
        id: "r-2-2-02-3",
        name: "Hisobot",
        maxPoints: 25,
        indicators: {
          "advanced-beginner": "Nosozlik va yechim qisqacha yozilgan",
          competent: "Batafsil hisobot — diagnostika bosqichlari, sabab, yechim",
          proficient: "Professional hisobot — foto, vaqt va xarajatlar hisobi bilan",
        },
      },
    ],
    commonMistakes: [
      "Kompyuterni quvvat manbaidan ajratmasdan ichki komponentlarga tegish",
      "POST kodlarini e'tiborsiz qoldirish",
      "Bir vaqtda bir nechta komponentni almashtirishga harakat qilish",
    ],
  },

  // ============================================================
  // KK-2.3 — Ma'lumotlarni zaxiralash
  // ============================================================
  {
    id: "ex-2-3-01",
    title: "Zaxira nusxa yaratish va tiklash",
    competencyId: "kk-2-3",
    learningOutcomeIds: ["kk-2-3-lo-1"],
    categoryId: "cat-zaxiralash",
    dreyfusLevel: "novice",
    description:
      "Windows va Linux tizimlarida ma'lumotlarni zaxiralash va tiklash amaliyotini bajaring.\n\n## Topshiriq\n\n1. Test fayllar papkasi yarating (hujjatlar, rasmlar, jadvallar)\n2. Windows: File History yoki Backup and Restore yordamida zaxira oling\n3. Linux: tar va rsync buyruqlari yordamida zaxira oling\n4. Asl fayllarni o'chiring\n5. Zaxiradan fayllarni tiklang va to'g'riligini tekshiring\n6. Zaxiralash strategiyasini hujjatlashtiring",
    tools: ["Kompyuter (Windows va Linux)", "Tashqi flesh yoki ikkinchi disk"],
    timeEstimate: 60,
    hints: [
      {
        level: 1,
        text: "Linux da zaxira: tar -czf backup.tar.gz /home/user/documents",
        teacherNote: "Tar buyrug'ini bilmasa",
      },
      {
        level: 2,
        text: "Tiklash: tar -xzf backup.tar.gz -C /home/user/",
        teacherNote: "Tiklash buyrug'ini bilmasa",
      },
      {
        level: 3,
        text: "Windows: Control Panel > Backup and Restore > Set up backup > Tashqi diskni tanlang",
        teacherNote: "Windows zaxiralashni bilmasa",
      },
    ],
    rubric: [
      {
        id: "r-2-3-01-1",
        name: "Zaxira yaratish",
        maxPoints: 35,
        indicators: {
          novice: "Kamida bitta usulda zaxira yaratgan",
          "advanced-beginner": "Windows va Linux da ham zaxira yaratgan",
          competent: "Incremental va full backup farqini tushunadi va qo'llaydi",
        },
      },
      {
        id: "r-2-3-01-2",
        name: "Tiklash",
        maxPoints: 35,
        indicators: {
          novice: "Fayllarni zaxiradan tiklagan",
          "advanced-beginner": "To'liq tiklagan va tekshirgan (hash solishtirish)",
          competent: "Turli stsenariylarni sinagan (qisman tiklash, boshqa joyga tiklash)",
        },
      },
      {
        id: "r-2-3-01-3",
        name: "Strategiya",
        maxPoints: 30,
        indicators: {
          novice: "Oddiy zaxiralash rejasi yozilgan",
          "advanced-beginner": "3-2-1 qoidasini tushunadi (3 nusxa, 2 xil media, 1 tashqarida)",
          competent: "To'liq zaxiralash siyosati — jadval, saqlash muddati, mas'ullar",
        },
      },
    ],
    commonMistakes: [
      "Zaxira faylni asl disk bilan bir joyda saqlash",
      "Zaxiradan tiklanishni sinab ko'rmaslik",
      "Zaxira jadvalini belgilamaslik (qachon, qancha tez-tez)",
    ],
    workedExample:
      "## Namuna: Linux da zaxiralash\n\n```bash\n# 1. Test papka yaratish\nmkdir -p ~/test_backup/{docs,images,sheets}\necho 'Test hujjat' > ~/test_backup/docs/file1.txt\n\n# 2. Zaxira olish\ntar -czf ~/backup_$(date +%Y%m%d).tar.gz ~/test_backup/\n\n# 3. Asl fayllarni o'chirish\nrm -rf ~/test_backup/\n\n# 4. Tiklash\ntar -xzf ~/backup_*.tar.gz -C ~/\n\n# 5. Tekshirish\nls ~/test_backup/docs/\n# Natija: file1.txt\n```",
  },

  // ============================================================
  // KK-2.4 — OT va dasturlar o'rnatish
  // ============================================================
  {
    id: "ex-2-4-01",
    title: "Windows 10 ni o'rnatish va sozlash",
    competencyId: "kk-2-4",
    learningOutcomeIds: ["kk-2-4-lo-1", "kk-2-4-lo-2"],
    categoryId: "cat-os-ornatish",
    dreyfusLevel: "novice",
    description:
      "Virtual mashinaga yoki kompyuterga Windows 10 o'rnating va asosiy sozlamalarni bajaring.\n\n## Topshiriq\n\n1. Bootable USB yarating (Rufus yordamida)\n2. Windows 10 ni o'rnating\n3. Drayverlarni o'rnating (Device Manager tekshiring)\n4. Windows Update ni ishga tushiring\n5. Asosiy xavfsizlik sozlamalarini bajaring (Windows Defender, Firewall)\n6. Ofis dasturlarini o'rnating",
    tools: ["Kompyuter yoki VM", "Windows 10 ISO", "Rufus dasturi", "USB flesh (8GB+)"],
    timeEstimate: 90,
    hints: [
      {
        level: 1,
        text: "BIOS da boot tartibini o'zgartiring: USB birinchi bo'lishi kerak",
        teacherNote: "BIOS ga kirishda qiynalsa — kompyuter yoqilganda F2, Del yoki F12 bosing",
      },
      {
        level: 2,
        text: "O'rnatish turini tanlashda 'Custom: Install Windows only' tanlang",
        teacherNote: "Upgrade va Custom ni aralashtirsa",
      },
      {
        level: 3,
        text: "Drayverlar uchun: Device Manager > sariq undov belgisi bor qurilmalarni toping > drayver o'rnating",
        teacherNote: "Drayverlarni topishda qiynalsa",
      },
    ],
    rubric: [
      {
        id: "r-2-4-01-1",
        name: "O'rnatish",
        maxPoints: 35,
        indicators: {
          novice: "Windows o'rnatilgan va ishga tushadi",
          "advanced-beginner": "O'rnatish muammosiz bajarilgan, partitsiya to'g'ri tanlangan",
          competent: "GPT/MBR tanlash asoslangan, partitsiya rejasi optimal",
        },
      },
      {
        id: "r-2-4-01-2",
        name: "Drayverlar va yangilanishlar",
        maxPoints: 35,
        indicators: {
          novice: "Asosiy drayverlar o'rnatilgan, Windows Update bajarilgan",
          "advanced-beginner": "Barcha drayverlar o'rnatilgan, Device Manager da xato yo'q",
          competent: "Drayverlar manba saytdan olindi, WHQL sertifikatlangan",
        },
      },
      {
        id: "r-2-4-01-3",
        name: "Xavfsizlik va dasturlar",
        maxPoints: 30,
        indicators: {
          novice: "Windows Defender yoqilgan",
          "advanced-beginner": "Firewall sozlangan, antivirus yangilangan, ofis dasturlari o'rnatilgan",
          competent: "BitLocker, Windows Hello va boshqa xavfsizlik vositalari sozlangan",
        },
      },
    ],
    commonMistakes: [
      "UEFI tizimda Legacy rejimda o'rnatish",
      "Partitsiyalarni formatlashdan oldin muhim ma'lumotlarni zaxiralamash",
      "Drayverlarni noma'lum manbalardan yuklab olish",
    ],
    workedExample:
      "## Namuna: Rufus bilan bootable USB yaratish\n\n1. Rufus dasturini ishga tushiring\n2. Device: USB flesh diskni tanlang\n3. Boot selection: Windows 10 ISO faylni tanlang\n4. Partition scheme: GPT (UEFI uchun) yoki MBR (Legacy uchun)\n5. File system: NTFS\n6. START tugmasini bosing va kutib turing\n\n## O'rnatishdan keyin:\n- Device Manager > Sariq belgili qurilmalar uchun drayver o'rnating\n- Settings > Update > Check for updates\n- Settings > Privacy & Security > Windows Security tekshiring",
  },

  // ============================================================
  // KK-2.5 — Eskirgan infratuzilma
  // ============================================================
  {
    id: "ex-2-5-01",
    title: "Kompyuter tizimining eskirganlik darajasini baholash",
    competencyId: "kk-2-5",
    learningOutcomeIds: ["kk-2-5-lo-1", "kk-2-5-lo-2"],
    categoryId: "cat-modernizatsiya",
    dreyfusLevel: "advanced-beginner",
    description:
      "Berilgan kompyuterning apparat va dasturiy ta'minotini tekshiring va modernizatsiya rejasini tuzing.\n\n## Topshiriq\n\n1. Kompyuterning barcha texnik xususiyatlarini aniqlang (CPU-Z yoki tizim ma'lumoti)\n2. Benchmark sinov o'tkazing (UserBenchmark, CrystalDiskMark)\n3. Dasturiy ta'minot versiyalarini tekshiring (OT, drayverlar, dasturlar)\n4. Eskirganlik darajasini baholang (jadval tuzing)\n5. Modernizatsiya tavsiyalari bering (nima almashtirilsin, nima yetarli)\n6. Xarajatlar hisobini tuzing",
    tools: [
      "Tekshiriladigan kompyuter",
      "CPU-Z",
      "CrystalDiskMark",
      "Internet (narxlarni tekshirish uchun)",
    ],
    timeEstimate: 60,
    hints: [
      {
        level: 1,
        text: "CPU-Z dasturi: protsessor, anakart, RAM va GPU haqida to'liq ma'lumot beradi",
        teacherNote: "Agar talaba texnik ma'lumotni qayerdan olishni bilmasa",
      },
      {
        level: 2,
        text: "Eng ko'p samara beradigan modernizatsiya: HDD → SSD va RAM qo'shish",
        teacherNote: "Modernizatsiya ustuvorligini bilmasa",
      },
    ],
    rubric: [
      {
        id: "r-2-5-01-1",
        name: "Texnik ma'lumotlarni yig'ish",
        maxPoints: 25,
        indicators: {
          "advanced-beginner": "Barcha asosiy komponentlar ma'lumotlari yig'ilgan",
          competent: "Benchmark natijalari bilan solishtirilgan",
          proficient: "Bottleneck (tiqilinch) aniqlangan va asoslangan",
        },
      },
      {
        id: "r-2-5-01-2",
        name: "Eskirganlik baholash",
        maxPoints: 35,
        indicators: {
          "advanced-beginner": "Eskirganlik darajasi baholangan (past/o'rta/yuqori)",
          competent: "Har bir komponent alohida baholangan, foydalanish muddati hisobga olingan",
          proficient: "TCO tahlili va yangi tizim bilan solishtirish qilingan",
        },
      },
      {
        id: "r-2-5-01-3",
        name: "Modernizatsiya tavsiyalari",
        maxPoints: 40,
        indicators: {
          "advanced-beginner": "Kamida 2 ta tavsiya berilgan",
          competent: "Har bir tavsiya asoslangan, narx va samara hisobi bor",
          proficient: "Bosqichma-bosqich modernizatsiya rejasi, alternativlar bilan",
        },
      },
    ],
    commonMistakes: [
      "Faqat protsessorni almashtirishni tavsiya qilish — anakart ham mos kelmasligi mumkin",
      "RAM qo'shishda DDR versiyasini tekshirmaslik",
      "Quvvat manbaini hisobga olmaslik — yangi komponentlarga yetarli watt kerak",
    ],
  },

  // ============================================================
  // Qo'shimcha mashqlar — yuqori darajalar
  // ============================================================
  {
    id: "ex-1-3-02",
    title: "Active Directory domenini sozlash",
    competencyId: "kk-1-3",
    learningOutcomeIds: ["kk-1-3-lo-1", "kk-1-3-lo-2"],
    categoryId: "cat-server-sozlash",
    dreyfusLevel: "proficient",
    description:
      "Windows Server da Active Directory domenini o'rnating, foydalanuvchilar va guruhlarni boshqaring.\n\n## Topshiriq\n\n1. Windows Server da AD DS rolini o'rnating\n2. Yangi domen yarating (masalan: kompyuter.local)\n3. OU (Organizational Unit) tuzilmasini yarating (Bo'limlar, Xodimlar, Kompyuterlar)\n4. Kamida 10 ta foydalanuvchi va 3 ta guruh yarating\n5. Group Policy Object (GPO) yarating:\n   - Parol siyosati (murakkablik, muddat)\n   - Desktop sozlamalari (fon rasmi, blokirovka vaqti)\n6. Klient kompyuterni domenga qo'shing",
    tools: ["Windows Server (VM)", "Windows 10 klient (VM)", "VirtualBox/Hyper-V"],
    timeEstimate: 150,
    hints: [
      {
        level: 1,
        text: "AD DS o'rnatish: Server Manager > Add Roles and Features > Active Directory Domain Services",
        teacherNote: "Faqat talaba AD o'rnatishni boshlashni bilmasa",
      },
    ],
    rubric: [
      {
        id: "r-1-3-02-1",
        name: "AD o'rnatish va domen",
        maxPoints: 25,
        indicators: {
          proficient: "AD o'rnatilgan, domen yaratilgan, DNS integratsiya ishlaydi",
          expert: "Replikatsiya va ikkinchi domen kontroller sozlangan",
        },
      },
      {
        id: "r-1-3-02-2",
        name: "OU va foydalanuvchilar",
        maxPoints: 25,
        indicators: {
          proficient: "OU tuzilmasi mantiqiy, foydalanuvchilar va guruhlar yaratilgan",
          expert: "PowerShell skriptlari bilan ommaviy yaratish, delegatsiya sozlangan",
        },
      },
      {
        id: "r-1-3-02-3",
        name: "Group Policy",
        maxPoints: 30,
        indicators: {
          proficient: "Kamida 2 ta GPO yaratilgan va qo'llanilgan",
          expert: "Murakkab GPO — dasturlarni taqsimlash, skriptlar, xavfsizlik sozlamalari",
        },
      },
      {
        id: "r-1-3-02-4",
        name: "Klient integratsiyasi",
        maxPoints: 20,
        indicators: {
          proficient: "Klient domenga qo'shilgan, domen foydalanuvchisi bilan kirish mumkin",
          expert: "Profil sozlamalari, folder redirection va login skript ishlaydi",
        },
      },
    ],
    commonMistakes: [
      "DNS ni AD bilan birga sozlamaslik — AD DNS ga bog'liq",
      "Administratorning parolini juda oddiy qo'yish",
      "GPO ni Default Domain Policy ga yozish — alohida GPO yarating",
    ],
  },
  {
    id: "ex-1-5-02",
    title: "Tarmoq monitoring tizimini sozlash",
    competencyId: "kk-1-5",
    learningOutcomeIds: ["kk-1-5-lo-2", "kk-1-5-lo-3"],
    categoryId: "cat-tarmoq-diagnostika",
    dreyfusLevel: "competent",
    description:
      "Tarmoq holatini kuzatish uchun monitoring tizimini o'rnating va sozlang.\n\n## Topshiriq\n\n1. Zabbix yoki Nagios monitoring tizimini o'rnating\n2. Kamida 3 ta qurilmani (server, switch, kompyuter) monitoring ga qo'shing\n3. Ogohlantirish (alert) qoidalarini sozlang:\n   - CPU yuklanishi > 90%\n   - Disk to'lishi > 85%\n   - Tarmoq ulanishi uzilsa\n4. Dashboard yarating\n5. Test ogohlantirish yuboring va tekshiring",
    tools: ["Linux server", "Monitoring dasturi (Zabbix/Nagios)", "Tarmoq qurilmalari"],
    timeEstimate: 120,
    hints: [
      {
        level: 1,
        text: "Zabbix o'rnatish: sudo apt install zabbix-server-mysql zabbix-frontend-php zabbix-agent",
        teacherNote: "O'rnatish buyruqlarini bilmasa",
      },
    ],
    rubric: [
      {
        id: "r-1-5-02-1",
        name: "O'rnatish",
        maxPoints: 25,
        indicators: {
          competent: "Monitoring tizimi o'rnatilgan va ishga tushgan",
          proficient: "SNMP va agent-based monitoring har ikkisi sozlangan",
          expert: "High availability va distributed monitoring sozlangan",
        },
      },
      {
        id: "r-1-5-02-2",
        name: "Qurilmalarni qo'shish",
        maxPoints: 25,
        indicators: {
          competent: "3+ qurilma monitoring ga qo'shilgan va ma'lumotlar kelayapti",
          proficient: "Avtomatik discovery va template ishlatilgan",
          expert: "Custom template va trigger yaratilgan",
        },
      },
      {
        id: "r-1-5-02-3",
        name: "Alert sozlash",
        maxPoints: 25,
        indicators: {
          competent: "Asosiy alertlar sozlangan va ishlaydi",
          proficient: "Eskalatsiya va notification kanallari sozlangan (email, Telegram)",
          expert: "Murakkab trigger ifodalari, correlatsiya qoidalari",
        },
      },
      {
        id: "r-1-5-02-4",
        name: "Dashboard",
        maxPoints: 25,
        indicators: {
          competent: "Dashboard yaratilgan, asosiy metrikalar ko'rinadi",
          proficient: "Grafiklar, kartalar va jadvallar bilan informativ dashboard",
          expert: "Real-time dashboard, SLA hisoboti va trend tahlili",
        },
      },
    ],
    commonMistakes: [
      "SNMP community string ni default (public) qoldirish",
      "Juda ko'p alert sozlash — alert fatigue muammosi",
      "Monitoring serverni o'zi monitoring qilmaslik",
    ],
  },
  {
    id: "ex-2-3-02",
    title: "RAID massivini sozlash va sinash",
    competencyId: "kk-2-3",
    learningOutcomeIds: ["kk-2-3-lo-2"],
    categoryId: "cat-zaxiralash",
    dreyfusLevel: "competent",
    description:
      "Virtual muhitda turli RAID darajalarini yarating, ularning afzalliklari va kamchiliklarini amaliy sinang.\n\n## Topshiriq\n\n1. VirtualBox da 4 ta virtual disk yarating (har biri 1 GB)\n2. Linux da mdadm yordamida quyidagi RAID larni yarating va sinang:\n   - RAID 0 (stripe) — 2 ta disk\n   - RAID 1 (mirror) — 2 ta disk\n   - RAID 5 — 3 ta disk\n3. Har bir RAID ga fayllar yozing\n4. Bitta diskni 'buzib' (simulated failure) RAID xatti-harakatini kuzating\n5. RAID darajalarini taqqoslash jadvalini tuzing",
    tools: ["VirtualBox", "Linux (Ubuntu)", "Terminal"],
    timeEstimate: 90,
    hints: [
      {
        level: 1,
        text: "mdadm bilan RAID 1 yaratish: sudo mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc",
        teacherNote: "mdadm sintaksisini bilmasa",
      },
    ],
    rubric: [
      {
        id: "r-2-3-02-1",
        name: "RAID yaratish",
        maxPoints: 35,
        indicators: {
          competent: "Kamida 2 xil RAID darajasi yaratilgan va ishlaydi",
          proficient: "RAID 0, 1 va 5 hammasi yaratilgan, har biri formatlangan va mount qilingan",
          expert: "RAID 6, 10 ham yaratilgan, mdadm.conf sozlangan",
        },
      },
      {
        id: "r-2-3-02-2",
        name: "Nosozlik simulyatsiyasi",
        maxPoints: 35,
        indicators: {
          competent: "Bitta diskni 'buzib' natijani kuzatgan",
          proficient: "RAID 1 va 5 da ma'lumot saqlanishini isbotlagan, RAID 0 da yo'qolishini ko'rsatgan",
          expert: "Degraded RAID dan diskni almashtirish va rebuild jarayonini bajargan",
        },
      },
      {
        id: "r-2-3-02-3",
        name: "Taqqoslash tahlili",
        maxPoints: 30,
        indicators: {
          competent: "RAID darajalarini jadvalda taqqoslagan",
          proficient: "Samaradorlik, ishonchlililik va narx jihatidan chuqur tahlil",
          expert: "Real stsenariylar uchun RAID tanlash tavsiyalari bilan",
        },
      },
    ],
    commonMistakes: [
      "RAID 0 ni zaxiralash usuli deb o'ylash — u faqat tezlikni oshiradi",
      "RAID ni oddiy zaxiralash o'rniga ishlatish — RAID zaxira emas",
      "Spare disk qo'shmaslik — avtomatik rebuild uchun kerak",
    ],
  },
];
