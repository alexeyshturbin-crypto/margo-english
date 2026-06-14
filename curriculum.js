/* =========================================================================
   CURRICULUM.JS — «карта программы» MyEnglish.

   Приложение НЕ привязано к одному учебнику. В основе — вся линейка
   Cambridge "... in Use" (грамматика, лексика, фонетика, фразовые глаголы,
   идиомы, коллокации) + материалы для подготовки к IELTS, выстроенные как
   логическое продолжение друг друга: A2 → B1 → B2 → C1 → сертификат.

   ОБОГАЩЕНИЕ: чтобы добавить новый учебник/издание или навык —
   просто допиши объект в BOOKS или TRACKS. Ничего в коде менять не нужно.
   ========================================================================= */

const CURRICULUM = {

  /* Навыковые треки — то, что реально тренируется в приложении и в книгах.
     id совпадает с разделами контента, где это применимо. */
  tracks: [
    { id: "grammar",     emoji: "✏️", name: "Грамматика",     desc: "Правила и структуры от времён до инверсии." },
    { id: "vocab",       emoji: "🃏", name: "Лексика",         desc: "Слова, коллокации, синонимы по темам." },
    { id: "phrasal",     emoji: "🔗", name: "Фразовые глаголы", desc: "Phrasal verbs — отдельная боль и сила английского." },
    { id: "idioms",      emoji: "💬", name: "Идиомы",          desc: "Устойчивые выражения для естественной речи." },
    { id: "phonetics",   emoji: "🗣️", name: "Фонетика",        desc: "Звуки, ударение, минимальные пары, интонация." },
    { id: "listening",   emoji: "🎧", name: "Аудирование",      desc: "Понимание на слух — ключ к IELTS Listening." },
    { id: "reading",     emoji: "📖", name: "Чтение",          desc: "Тексты и вопросы на понимание." },
    { id: "writing",     emoji: "✍️", name: "Письмо",          desc: "Эссе и письма — IELTS Writing Task 1 и 2." },
    { id: "ielts",       emoji: "🎓", name: "Подготовка к IELTS", desc: "Формат экзамена, стратегии, типы заданий." },
  ],

  /* Полная «лестница» учебников-источников. lvl: a2|b1|b2|c1|ielts.
     Каждая запись — реальный ориентир, который можно купить/скачать и
     проходить параллельно с приложением. */
  books: [
    // --- Грамматика (Cambridge, серия "Grammar in Use") ---
    { lvl: "a2", track: "grammar", title: "Essential Grammar in Use", author: "R. Murphy (red)", note: "База A1–B1, если нужно подтянуть фундамент." },
    { lvl: "b1", track: "grammar", title: "English Grammar in Use, 5th ed.", author: "R. Murphy (blue)", note: "★ Текущий учебник. B1–B2." },
    { lvl: "c1", track: "grammar", title: "Advanced Grammar in Use", author: "M. Hewings (green)", note: "Следующая ступень: C1–C2." },

    // --- Лексика ---
    { lvl: "b1", track: "vocab", title: "English Vocabulary in Use Pre-int & Int", author: "Redman", note: "Лексика уровня B1." },
    { lvl: "b2", track: "vocab", title: "English Vocabulary in Use Upper-int", author: "McCarthy & O'Dell", note: "Лексика B2." },
    { lvl: "c1", track: "vocab", title: "English Vocabulary in Use Advanced", author: "McCarthy & O'Dell", note: "Лексика C1–C2." },

    // --- Фразовые глаголы / идиомы / коллокации ---
    { lvl: "b2", track: "phrasal", title: "English Phrasal Verbs in Use Intermediate", author: "McCarthy & O'Dell", note: "B1–B2." },
    { lvl: "c1", track: "phrasal", title: "English Phrasal Verbs in Use Advanced", author: "McCarthy & O'Dell", note: "C1." },
    { lvl: "b2", track: "idioms", title: "English Idioms in Use Intermediate", author: "O'Dell & McCarthy", note: "B1–B2." },
    { lvl: "c1", track: "idioms", title: "English Idioms in Use Advanced", author: "O'Dell & McCarthy", note: "C1." },
    { lvl: "b2", track: "vocab", title: "English Collocations in Use Intermediate", author: "O'Dell & McCarthy", note: "Сочетаемость слов." },

    // --- Фонетика / произношение ---
    { lvl: "a2", track: "phonetics", title: "English Pronunciation in Use Elementary", author: "J. Marks", note: "Звуки с нуля." },
    { lvl: "b1", track: "phonetics", title: "English Pronunciation in Use Intermediate", author: "M. Hancock", note: "★ Логичное дополнение к грамматике." },
    { lvl: "c1", track: "phonetics", title: "English Pronunciation in Use Advanced", author: "M. Hewings", note: "Тонкая фонетика, интонация." },

    // --- Аудирование / чтение / экзамен ---
    { lvl: "b2", track: "listening", title: "Cambridge English Skills: Real Listening & Speaking", author: "Cambridge", note: "Навык слушания." },
    { lvl: "ielts", track: "ielts", title: "The Official Cambridge Guide to IELTS", author: "Cambridge", note: "Полный гид по экзамену." },
    { lvl: "ielts", track: "ielts", title: "Cambridge IELTS 1–18 (Practice Tests)", author: "Cambridge", note: "Реальные пробные тесты." },
    { lvl: "ielts", track: "writing", title: "Collins Writing for IELTS", author: "Collins", note: "Эссе Task 1 / Task 2." },
  ],

  /* Дорожная карта: что осваивать на каждой ступени и какой ориентир по XP. */
  roadmap: [
    {
      stage: "B1", emoji: "🌱", xp: 0,
      focus: "Уверенная база: времена, артикли, базовая лексика, чистое произношение звуков.",
      books: ["English Grammar in Use (blue)", "Vocabulary in Use Pre-int", "Pronunciation in Use Intermediate"],
    },
    {
      stage: "B2", emoji: "🌿", xp: 1000,
      focus: "Сложные структуры (条件, пассив, косвенная речь), фразовые глаголы, аудирование.",
      books: ["English Grammar in Use (blue) — вторая половина", "Vocabulary in Use Upper-int", "Phrasal Verbs in Use Int"],
    },
    {
      stage: "C1", emoji: "🌳", xp: 3000,
      focus: "Инверсия, cleft-конструкции, идиомы, продвинутая лексика и интонация.",
      books: ["Advanced Grammar in Use (green)", "Vocabulary in Use Advanced", "Idioms in Use Advanced"],
    },
    {
      stage: "IELTS", emoji: "🎓", xp: 6000,
      focus: "Формат экзамена: Listening, Reading, Writing Task 1/2, Speaking. Пробные тесты на время.",
      books: ["Official Cambridge Guide to IELTS", "Cambridge IELTS Practice Tests 1–18"],
    },
  ],

  // Подписи уровней для бейджей.
  levelLabel: { a2: "A2", b1: "B1", b2: "B2", c1: "C1", ielts: "IELTS" },
  levelClass: { a2: "a", b1: "b", b2: "b", c1: "c", ielts: "i" },
};

window.CURRICULUM = CURRICULUM;
