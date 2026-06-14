/* =========================================================================
   CONTENT_EXTRA.JS — дополнительный контент (пример "обогащения").
   Этот файл просто ДОБАВЛЯЕТ материалы в существующие разделы CONTENT.
   Так можно бесконечно расширять программу, не трогая основной код.
   Подключается в index.html ПОСЛЕ content.js.
   ========================================================================= */
(() => {
  const C = window.CONTENT;
  const push = (arr, items) => { items.forEach(i => arr.push(i)); };

  /* ---------------- ГРАММАТИКА ---------------- */
  push(C.grammar.B1, [
    {
      id: "g-b1-countable", title: "Countable / Uncountable + a, some, any",
      murphy: "Units 69–70, 85–88", topic: "Исчисляемые/неисчисляемые",
      items: [
        { q: "I need to buy ___ bread.", a: ["some"], hint: "положительное, неисчисляемое → some" },
        { q: "There aren't ___ eggs in the fridge.", a: ["any"], hint: "отрицание → any" },
        { q: "How ___ money do you have?", a: ["much"], hint: "money неисчисляемое → much" },
        { q: "How ___ apples are there?", a: ["many"], hint: "apples исчисляемое → many" },
        { q: "Would you like ___ tea?", a: ["some"], hint: "предложение → some" },
        { q: "I have a little ___ (information) for you.", a: ["information"], hint: "information неисчисляемое" },
      ],
    },
    {
      id: "g-b1-comparatives", title: "Comparatives & Superlatives",
      murphy: "Units 105–110", topic: "Степени сравнения",
      items: [
        { q: "This book is ___ (interesting) than that one.", a: ["more interesting"], hint: "длинное прилаг. → more" },
        { q: "Today is ___ (hot) day of the year.", a: ["the hottest"], hint: "превосходная, удвоение t" },
        { q: "She runs ___ (fast) than me.", a: ["faster"], hint: "короткое → -er" },
        { q: "This is the ___ (good) film I've ever seen.", a: ["best"], hint: "good → best" },
        { q: "My bag is ___ (heavy) than yours.", a: ["heavier"], hint: "y → ier" },
        { q: "He is the ___ (bad) player on the team.", a: ["worst"], hint: "bad → worst" },
      ],
    },
    {
      id: "g-b1-gerinf", title: "Gerund or Infinitive",
      murphy: "Units 53–58", topic: "Герундий / инфинитив",
      items: [
        { q: "I enjoy ___ (read) books.", a: ["reading"], hint: "enjoy + -ing" },
        { q: "She wants ___ (learn) Spanish.", a: ["to learn"], hint: "want + to" },
        { q: "He's good at ___ (draw).", a: ["drawing"], hint: "предлог at + -ing" },
        { q: "They decided ___ (stay) at home.", a: ["to stay"], hint: "decide + to" },
        { q: "Do you mind ___ (open) the window?", a: ["opening"], hint: "mind + -ing" },
        { q: "I'd like ___ (go) home now.", a: ["to go"], hint: "would like + to" },
      ],
    },
  ]);

  push(C.grammar.B2, [
    {
      id: "g-b2-relative", title: "Relative Clauses",
      murphy: "Units 92–96", topic: "Относительные придаточные",
      items: [
        { q: "The man ___ lives next door is a doctor.", a: ["who", "that"], hint: "о человеке → who" },
        { q: "This is the book ___ I told you about.", a: ["that", "which"], hint: "о вещи → that/which" },
        { q: "She's the girl ___ brother plays football.", a: ["whose"], hint: "принадлежность → whose" },
        { q: "That's the house ___ I was born.", a: ["where"], hint: "место → where" },
        { q: "2019 was the year ___ we met.", a: ["when"], hint: "время → when" },
      ],
    },
    {
      id: "g-b2-future", title: "Future forms: will / going to / Present forms",
      murphy: "Units 19–25", topic: "Способы выражения будущего",
      items: [
        { q: "Look at those clouds! It ___ (rain).", a: ["is going to rain"], hint: "есть признаки → going to" },
        { q: "The train ___ (leave) at 9:00 tomorrow.", a: ["leaves"], hint: "расписание → Present Simple" },
        { q: "I'm tired. I think I ___ (go) to bed.", a: ["will go", "'ll go"], hint: "решение в момент речи → will" },
        { q: "We ___ (meet) Tom at 6 — it's arranged.", a: ["are meeting", "'re meeting"], hint: "договорённость → Present Continuous" },
        { q: "By 2030 robots ___ (do) many jobs.", a: ["will do"], hint: "предсказание → will" },
      ],
    },
    {
      id: "g-b2-usedto", title: "used to / be used to / get used to",
      murphy: "Units 18, 61", topic: "Привычки в прошлом",
      items: [
        { q: "I ___ (use to) play tennis when I was young.", a: ["used to"], hint: "прошлая привычка → used to + V" },
        { q: "She isn't used to ___ (drive) on the left.", a: ["driving"], hint: "be used to + -ing" },
        { q: "We ___ (use to / not) have phones at school.", a: ["didn't use to", "did not use to"], hint: "отрицание: didn't use to" },
        { q: "He's getting used to ___ (live) abroad.", a: ["living"], hint: "get used to + -ing" },
      ],
    },
  ]);

  push(C.grammar.C1, [
    {
      id: "g-c1-participle", title: "Participle clauses",
      murphy: "Advanced units 78–81", topic: "Причастные обороты",
      items: [
        { q: "___ (finish) her work, she went home.", a: ["Having finished"], hint: "сначала закончила → Having + V3" },
        { q: "___ (not / know) the answer, I stayed silent.", a: ["Not knowing"], hint: "одновременно → -ing, отрицание перед" },
        { q: "The man ___ (sit) over there is my uncle.", a: ["sitting"], hint: "активное → -ing" },
        { q: "___ (write) in 1850, the novel is still popular.", a: ["Written"], hint: "пассив → V3" },
      ],
    },
    {
      id: "g-c1-wishes", title: "Wish / If only / would rather",
      murphy: "Units 41, 60", topic: "Желания и сожаления",
      items: [
        { q: "I wish I ___ (be) taller.", a: ["were", "was"], hint: "о настоящем → Past" },
        { q: "I wish I ___ (study) harder last year.", a: ["had studied"], hint: "сожаление о прошлом → Past Perfect" },
        { q: "If only it ___ (stop) raining!", a: ["would stop"], hint: "раздражение → would" },
        { q: "I'd rather you ___ (not / smoke) here.", a: ["didn't smoke", "did not smoke"], hint: "would rather + Past" },
      ],
    },
  ]);

  /* ---------------- ЧТЕНИЕ ---------------- */
  push(C.reading.B1, [
    {
      id: "r-b1-pet", title: "A New Member of the Family",
      text: "Two months ago, the Garcia family adopted a small dog from a local shelter. They named him Coco. At first, Coco was very shy and hid under the sofa whenever someone entered the room. Little by little, he started to trust his new family. Now he greets everyone at the door and loves long walks in the park. Marta, the youngest daughter, takes him out every morning before school. 'Coco has changed our lives,' she says. 'He makes us laugh every single day.'",
      questions: [
        { q: "Where did the family get Coco?", options: ["From a shop", "From a local shelter", "From a friend"], answer: 1 },
        { q: "How did Coco behave at first?", options: ["He was very shy", "He was aggressive", "He was noisy"], answer: 0 },
        { q: "Who walks Coco in the mornings?", options: ["The father", "Marta", "Nobody"], answer: 1 },
        { q: "What does Coco do for the family now?", options: ["Makes them laugh", "Guards the house", "Sleeps all day"], answer: 0 },
      ],
    },
  ]);
  push(C.reading.B2, [
    {
      id: "r-b2-volunteer", title: "Why Teenagers Volunteer",
      text: "An increasing number of teenagers are choosing to spend part of their free time volunteering, whether by helping at animal shelters, tutoring younger children, or cleaning up local beaches. While some adults assume that young people only do this to improve their university applications, surveys tell a more complex story. Many teenagers report that volunteering gives them a genuine sense of purpose and helps them develop skills that school rarely teaches, such as teamwork and communication. Perhaps most importantly, it allows them to see the immediate impact of their efforts on real people — something that can be far more motivating than a grade on a test.",
      questions: [
        { q: "What is one example of volunteering mentioned?", options: ["Selling products", "Tutoring younger children", "Playing sports"], answer: 1 },
        { q: "What do some adults assume?", options: ["Teenagers are lazy", "Teenagers only volunteer for university applications", "Teenagers dislike helping"], answer: 1 },
        { q: "What skills does volunteering develop?", options: ["Teamwork and communication", "Cooking and cleaning", "Reading and writing"], answer: 0 },
        { q: "What is most motivating, according to the text?", options: ["Getting a grade", "Seeing the immediate impact on people", "Winning a prize"], answer: 1 },
      ],
    },
  ]);

  /* ---------------- СЛОВА ---------------- */
  push(C.vocab.B1, [
    { id: "v-b1-9", en: "to belong to", ru: "принадлежать", ex: "This bag belongs to me." },
    { id: "v-b1-10", en: "on time", ru: "вовремя", ex: "The bus arrived on time." },
    { id: "v-b1-11", en: "to be keen on", ru: "увлекаться чем-то", ex: "She is keen on photography." },
    { id: "v-b1-12", en: "crowded", ru: "переполненный (людьми)", ex: "The train was very crowded." },
    { id: "v-b1-13", en: "to spend (time/money)", ru: "тратить (время/деньги)", ex: "I spend an hour a day on English." },
    { id: "v-b1-14", en: "to take part in", ru: "участвовать в", ex: "She took part in the contest." },
  ]);
  push(C.vocab.B2, [
    { id: "v-b2-9", en: "to figure out", ru: "разобраться, понять", ex: "I can't figure out this problem." },
    { id: "v-b2-10", en: "demanding", ru: "требовательный, напряжённый", ex: "It's a demanding job." },
    { id: "v-b2-11", en: "to be aware of", ru: "осознавать, знать о", ex: "Are you aware of the risks?" },
    { id: "v-b2-12", en: "to make up one's mind", ru: "решиться, определиться", ex: "She can't make up her mind." },
    { id: "v-b2-13", en: "regardless of", ru: "несмотря на, независимо от", ex: "We'll go regardless of the weather." },
    { id: "v-b2-14", en: "to keep up with", ru: "успевать за, быть в курсе", ex: "It's hard to keep up with the news." },
  ]);
  push(C.vocab.C1, [
    { id: "v-c1-9", en: "to undermine", ru: "подрывать, ослаблять", ex: "Stress can undermine your health." },
    { id: "v-c1-10", en: "compelling", ru: "убедительный, неотразимый", ex: "She made a compelling argument." },
    { id: "v-c1-11", en: "to advocate", ru: "выступать за, отстаивать", ex: "He advocates for greener cities." },
    { id: "v-c1-12", en: "inevitable", ru: "неизбежный", ex: "Change is inevitable." },
    { id: "v-c1-13", en: "to grasp", ru: "ухватить (суть), осознать", ex: "She quickly grasped the concept." },
    { id: "v-c1-14", en: "ambiguous", ru: "двусмысленный, неоднозначный", ex: "His answer was deliberately ambiguous." },
  ]);

  /* ---------------- ФРАЗОВЫЕ ГЛАГОЛЫ ---------------- */
  push(C.phrasal.B1, [
    { id: "ph-b1-7", en: "wake up", ru: "просыпаться", ex: "I wake up at seven." },
    { id: "ph-b1-8", en: "get up", ru: "вставать (с постели)", ex: "He gets up early." },
    { id: "ph-b1-9", en: "look for", ru: "искать", ex: "I'm looking for my keys." },
    { id: "ph-b1-10", en: "go on", ru: "продолжать; происходить", ex: "Go on, I'm listening." },
  ]);
  push(C.phrasal.B2, [
    { id: "ph-b2-7", en: "make up", ru: "1) мириться 2) выдумывать", ex: "They quarrelled but soon made up." },
    { id: "ph-b2-8", en: "turn out", ru: "оказаться (в итоге)", ex: "It turned out to be a great day." },
    { id: "ph-b2-9", en: "set up", ru: "основать, наладить", ex: "She set up her own business." },
    { id: "ph-b2-10", en: "take after", ru: "быть похожим (на родственника)", ex: "She takes after her mother." },
  ]);

  /* ---------------- ИДИОМЫ ---------------- */
  push(C.idioms.B1, [
    { id: "id-b1-5", en: "to feel blue", ru: "грустить", ex: "I'm feeling a bit blue today." },
    { id: "id-b1-6", en: "to cost an arm and a leg", ru: "стоить очень дорого", ex: "That phone costs an arm and a leg." },
  ]);
  push(C.idioms.B2, [
    { id: "id-b2-5", en: "to be in the same boat", ru: "быть в одинаковом положении", ex: "We're all in the same boat here." },
    { id: "id-b2-6", en: "to spill the beans", ru: "проболтаться, выдать секрет", ex: "Don't spill the beans about the party!" },
  ]);

  /* ---------------- ПРОВЕРКА ТЕМЫ ---------------- */
  push(C.topicCheck.B1, [
    {
      id: "t-b1-vocab", title: "Check: Articles & quantifiers",
      questions: [
        { q: "Choose: 'I'd like ___ apple.'", options: ["a", "an", "the"], answer: 1 },
        { q: "'How ___ water do you drink?'", options: ["many", "much", "few"], answer: 1 },
        { q: "'There aren't ___ chairs.'", options: ["some", "any", "much"], answer: 1 },
      ],
    },
  ]);
  push(C.topicCheck.B2, [
    {
      id: "t-b2-rel", title: "Check: Relative clauses & future",
      questions: [
        { q: "'The woman ___ called you is here.'", options: ["which", "who", "whose"], answer: 1 },
        { q: "'Careful! You ___ fall!'", options: ["are going to", "leave", "will leave"], answer: 0 },
        { q: "'The film ___ at 8 — it's on the schedule.'", options: ["will start", "starts", "is starting"], answer: 1 },
      ],
    },
  ]);

  /* ---------------- ФОНЕТИКА ---------------- */
  push(C.phonetics.B1, [
    {
      id: "p-b1-vowels", title: "/æ/ vs /e/ — cat vs bed",
      source: "Pronunciation in Use Intermediate",
      note: "/æ/ — рот широко открыт (cat). /e/ — средний, как в русском 'э' (bed).",
      examples: [{ w: "cat", ipa: "/kæt/" }, { w: "bed", ipa: "/bed/" }, { w: "man", ipa: "/mæn/" }, { w: "men", ipa: "/men/" }],
      pairs: [["cat", "kept"], ["man", "men"], ["bad", "bed"], ["sad", "said"]],
    },
  ]);

  console.log("[MyEnglish] content_extra.js загружен — программа расширена.");
})();
