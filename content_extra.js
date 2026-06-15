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

  /* ---------------- ПИСЬМО / WRITING (IELTS Task 1 & Task 2) ----------------
     Источник-ориентир: Collins Writing for IELTS, Official Cambridge Guide to IELTS.
     Тренажёр: задание + план + полезные фразы + чек-лист + образец для сравнения. */
  C.writing = {
    B1: [
      {
        id: "w-b1-email", type: "Письмо другу", minWords: 100, minutes: 20,
        prompt: "Your English-speaking friend is going to visit your city next month. Write an email to your friend. In your email:\n• say how you feel about the visit\n• suggest what you can do together\n• tell your friend what clothes to bring.",
        tips: [
          "Начни с приветствия: Hi Anna, / Dear Tom,",
          "Раздели письмо на абзацы — по одному на каждый пункт задания.",
          "Используй неформальный стиль: сокращения (I'm, we'll), простые связки.",
          "Закончи фразой прощания: See you soon! / Best wishes, + имя.",
        ],
        phrases: [
          "I'm so excited that you're coming!", "I can't wait to see you.",
          "How about visiting…?", "We could also go to…",
          "Don't forget to bring…", "Make sure you pack…",
          "Let me know if…", "See you soon!",
        ],
        checklist: [
          "Есть приветствие и подпись?", "Раскрыты все 3 пункта задания?",
          "Текст разбит на абзацы?", "Не меньше 100 слов?",
          "Проверил(а) времена и артикли?",
        ],
        model: "Hi Anna,\n\nI'm so happy that you're coming to visit me next month — I can't wait to see you! It feels like ages since we last met.\n\nWhile you're here, we could do lots of fun things together. How about visiting the old town and the art museum? We could also go to my favourite café by the river, which has amazing cakes. If the weather is nice, we might even go cycling in the park.\n\nOne more thing: please pack some warm clothes and a light jacket, because the evenings can get quite cold here. Comfortable shoes are a good idea too, as we'll be walking a lot.\n\nLet me know your arrival time and I'll meet you at the station. See you very soon!\n\nBest wishes,\nMargo",
      },
    ],
    B2: [
      {
        id: "w-b2-letter", type: "IELTS GT · Письмо (Task 1)", minWords: 150, minutes: 20,
        prompt: "You recently bought a piece of equipment for your home but it did not work properly. Write a letter to the shop. In your letter:\n• describe the problem with the equipment\n• explain what happened when you contacted the shop\n• say what you would like the shop to do.",
        tips: [
          "Полуформальный стиль: Dear Sir or Madam, … Yours faithfully,",
          "Один абзац = один пункт задания (3 абзаца + вступление).",
          "Чётко укажи, чего ты хочешь: refund / replacement / repair.",
          "150+ слов, нейтральный вежливый тон.",
        ],
        phrases: [
          "I am writing to complain about…", "I purchased … on (date).",
          "Unfortunately, the … stopped working after…",
          "When I contacted your store, I was told that…",
          "I am extremely dissatisfied with…",
          "I would be grateful if you could…", "I look forward to your prompt reply.",
          "Yours faithfully,",
        ],
        checklist: [
          "Правильное обращение и подпись (faithfully, если 'Sir/Madam')?",
          "Раскрыты все 3 пункта?", "Понятно, какого решения ты ждёшь?",
          "Не меньше 150 слов?", "Вежливый формальный тон выдержан?",
        ],
        model: "Dear Sir or Madam,\n\nI am writing to complain about a coffee machine that I purchased from your store on 3 May.\n\nUnfortunately, the machine stopped working only a week after I bought it. It switches on, but no water comes through, and it now makes a loud noise that it did not make at first. As the product is still under warranty, I expected it to last much longer.\n\nWhen I contacted your store by phone, I was told that someone would call me back to arrange a repair. However, two weeks have now passed and I have not received any response, which I find very disappointing.\n\nGiven these circumstances, I would be grateful if you could either replace the machine with a new one or provide a full refund. I would also appreciate a clear explanation of how you intend to resolve this matter.\n\nI look forward to your prompt reply.\n\nYours faithfully,\nMargo Shturbina",
      },
      {
        id: "w-b2-essay", type: "IELTS · Эссе (Task 2)", minWords: 250, minutes: 40,
        prompt: "Some people think that students should be allowed to use mobile phones in school. Others believe that phones should be banned during lessons. Discuss both views and give your own opinion.",
        tips: [
          "Структура: вступление → абзац 'за' → абзац 'против' → твоё мнение → вывод.",
          "В каждом абзаце: idea → explanation → example.",
          "Используй связки: On the one hand, … On the other hand, … In my view, …",
          "250+ слов, формальный стиль, без сокращений (do not вместо don't).",
        ],
        phrases: [
          "It is often argued that…", "On the one hand, …",
          "Supporters of this view claim that…", "On the other hand, …",
          "However, opponents point out that…", "For instance, …",
          "In my opinion, …", "To conclude, … / In conclusion, …",
        ],
        checklist: [
          "Есть вступление с перефразированной темой?",
          "Раскрыты ОБА мнения + твоё собственное?",
          "Каждый абзац с примером?", "Есть вывод?",
          "Не меньше 250 слов? Формальный стиль?",
        ],
        model: "The use of mobile phones in schools is a topic that often divides opinion. While some people believe that phones can be valuable learning tools, others argue that they should be banned during lessons. This essay will discuss both sides before giving my own view.\n\nOn the one hand, supporters of mobile phones claim that they can enhance learning. Students can quickly look up information, use educational apps, and access online dictionaries during lessons. For example, a student who does not understand a word can find its meaning instantly instead of interrupting the teacher. Phones can also help learners who are absent to keep up through shared notes and messages.\n\nOn the other hand, opponents point out that phones are a major source of distraction. Notifications from social media and games can easily draw students' attention away from their studies. Furthermore, phones may be used for cheating during tests, which is unfair to other students and undermines the value of exams.\n\nIn my opinion, phones should be allowed but only under clear rules. Teachers could permit their use for specific tasks while requiring them to be switched off at other times. This approach combines the educational benefits of technology with the discipline that effective learning requires.\n\nTo conclude, although mobile phones carry certain risks, a balanced policy of controlled use is, in my view, the most sensible solution for modern schools.",
      },
    ],
    C1: [
      {
        id: "w-c1-essay", type: "IELTS · Эссе (Task 2, advanced)", minWords: 250, minutes: 40,
        prompt: "Some people believe that it is the responsibility of individuals to protect the environment, while others argue that this should be the job of governments. To what extent do you agree or disagree?",
        tips: [
          "Заяви чёткую позицию во вступлении и держи её до конца.",
          "Используй продвинутые связки: Admittedly, … Nevertheless, … Consequently, …",
          "Покажи диапазон лексики и сложных структур (инверсия, условные, cleft).",
          "Избегай клише — приводи конкретные, аргументированные примеры.",
        ],
        phrases: [
          "It is sometimes claimed that…", "Admittedly, …",
          "Nevertheless, it would be naïve to assume that…",
          "A compelling argument in favour of … is that…",
          "Not only … but also …", "This, in turn, leads to…",
          "On balance, I am firmly of the view that…",
          "In light of the above, …",
        ],
        checklist: [
          "Чёткая позиция с самого начала и до вывода?",
          "Аргументы развиты глубоко, а не перечислены?",
          "Разнообразие лексики и сложных конструкций?",
          "Точные связки между абзацами?",
          "250+ слов, академический регистр?",
        ],
        model: "The question of who bears responsibility for protecting the environment — individuals or governments — is increasingly debated. While personal action undoubtedly matters, I would argue that meaningful environmental protection depends primarily on governments, with individuals playing a supporting role.\n\nAdmittedly, individual choices are far from trivial. When millions of people reduce their consumption, recycle, and choose sustainable transport, the cumulative effect can be significant. Such behaviour also shapes markets, since companies respond to what consumers demand. In this sense, personal responsibility cannot be dismissed.\n\nNevertheless, it would be naïve to assume that individual effort alone can address problems of this scale. The most damaging sources of pollution — heavy industry, energy production, and large-scale agriculture — lie well beyond the control of ordinary citizens. Only governments possess the legislative power to impose emissions limits, tax polluters, and invest in renewable infrastructure. A compelling argument in favour of state action is that it creates the framework within which individual choices become both possible and meaningful; without affordable public transport, for instance, urging people to abandon their cars achieves little.\n\nOn balance, I am firmly of the view that, although individuals should act responsibly, the decisive role must be played by governments. Personal effort and political will are not mutually exclusive; rather, the former flourishes only when the latter provides the necessary conditions. In light of the above, environmental policy should focus first on robust regulation, supported by, but not replaced by, individual responsibility.",
      },
    ],
  };

  console.log("[MyEnglish] content_extra.js загружен — программа расширена.");
})();
