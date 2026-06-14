/* =========================================================================
   CONTENT.JS — учебный контент приложения "MyEnglish"
   Структура построена вокруг учебника Raymond Murphy
   "English Grammar in Use" (5th edition) + уровни CEFR (B1 / B2 / C1)
   и формата подготовки к IELTS.

   Любой раздел можно расширять — это обычный JS-объект.
   ========================================================================= */

const CONTENT = {

  /* -----------------------------------------------------------------------
     ГРАММАТИКА — упражнения на заполнение пропусков (gap-fill).
     unit — отсылка к юниту Murphy, чтобы можно было читать книгу параллельно.
     Каждый пункт: { q: "предложение с ___", a: ["правильные варианты"], hint }
     ----------------------------------------------------------------------- */
  grammar: {
    B1: [
      {
        id: "g-b1-present",
        title: "Present Simple vs Present Continuous",
        murphy: "Units 1–4",
        topic: "Времена настоящего",
        items: [
          { q: "Water ___ at 100 degrees Celsius.", a: ["boils"], hint: "общеизвестный факт → Present Simple" },
          { q: "Listen! Someone ___ (knock) at the door.", a: ["is knocking"], hint: "происходит сейчас → -ing" },
          { q: "She usually ___ (go) to school by bus.", a: ["goes"], hint: "usually = регулярно" },
          { q: "Be quiet, I ___ (try) to study.", a: ["am trying", "'m trying"], hint: "прямо сейчас" },
          { q: "My brother ___ (not / like) spicy food.", a: ["does not like", "doesn't like"], hint: "отрицание, 3-е лицо" },
          { q: "Look! The bus ___ (come).", a: ["is coming"], hint: "Look! → сейчас" },
          { q: "We ___ (have) English lessons three times a week.", a: ["have"], hint: "расписание, регулярность" },
        ],
      },
      {
        id: "g-b1-past",
        title: "Past Simple vs Past Continuous",
        murphy: "Units 5–6, 11–13",
        topic: "Времена прошедшего",
        items: [
          { q: "When I ___ (arrive), they were having dinner.", a: ["arrived"], hint: "короткое действие → Past Simple" },
          { q: "While she ___ (read), the phone rang.", a: ["was reading"], hint: "фоновое действие → was/were + -ing" },
          { q: "Yesterday I ___ (not / see) you at school.", a: ["did not see", "didn't see"], hint: "отрицание в прошлом" },
          { q: "What ___ you ___ (do) at 8 p.m. last night?", a: ["were . doing", "were doing"], hint: "процесс в момент в прошлом" },
          { q: "He ___ (break) his leg while he was skiing.", a: ["broke"], hint: "внезапное действие" },
          { q: "They ___ (live) in Madrid for two years, then moved.", a: ["lived"], hint: "завершённый период" },
        ],
      },
      {
        id: "g-b1-present-perfect",
        title: "Present Perfect",
        murphy: "Units 7–8, 15–17",
        topic: "Совершённое настоящее",
        items: [
          { q: "I ___ (never / be) to Japan.", a: ["have never been", "'ve never been"], hint: "опыт жизни → have + V3" },
          { q: "She ___ (just / finish) her homework.", a: ["has just finished", "'s just finished"], hint: "just → только что" },
          { q: "We ___ (know) each other since 2019.", a: ["have known", "'ve known"], hint: "since + момент" },
          { q: "___ you ever ___ (try) paella?", a: ["have . tried", "have tried"], hint: "вопрос про опыт" },
          { q: "He has lived here ___ ten years.", a: ["for"], hint: "for + период" },
          { q: "I can't find my keys. I ___ (lose) them.", a: ["have lost", "'ve lost"], hint: "результат виден сейчас" },
        ],
      },
      {
        id: "g-b1-articles",
        title: "Articles: a / an / the",
        murphy: "Units 69–78",
        topic: "Артикли",
        items: [
          { q: "She is ___ honest person.", a: ["an"], hint: "honest читается с гласного звука" },
          { q: "I saw a cat. ___ cat was black.", a: ["The"], hint: "второе упоминание → определённый" },
          { q: "The sun rises in ___ east.", a: ["the"], hint: "стороны света" },
          { q: "He plays ___ guitar very well.", a: ["the"], hint: "музыкальные инструменты → the" },
          { q: "We had ___ breakfast at home.", a: ["-", "no article", ""], hint: "приёмы пищи без артикля" },
          { q: "London is ___ capital of the UK.", a: ["the"], hint: "единственный в своём роде" },
        ],
      },
    ],

    B2: [
      {
        id: "g-b2-conditionals",
        title: "Conditionals (0/1/2/3 + mixed)",
        murphy: "Units 38–40",
        topic: "Условные предложения",
        items: [
          { q: "If I ___ (be) you, I would apologise.", a: ["were", "was"], hint: "2nd conditional → were" },
          { q: "If you heat ice, it ___ (melt).", a: ["melts"], hint: "0 conditional → факт" },
          { q: "If it rains tomorrow, we ___ (stay) at home.", a: ["will stay", "'ll stay"], hint: "1st conditional" },
          { q: "If she ___ (study) harder, she would have passed.", a: ["had studied"], hint: "3rd conditional" },
          { q: "I would call him if I ___ (have) his number.", a: ["had"], hint: "2nd conditional" },
          { q: "If they had left earlier, they ___ (not / miss) the train.", a: ["would not have missed", "wouldn't have missed"], hint: "3rd conditional, результат" },
        ],
      },
      {
        id: "g-b2-passive",
        title: "Passive Voice",
        murphy: "Units 42–46",
        topic: "Страдательный залог",
        items: [
          { q: "The Mona Lisa ___ (paint) by Leonardo da Vinci.", a: ["was painted"], hint: "Past Simple Passive" },
          { q: "English ___ (speak) all over the world.", a: ["is spoken"], hint: "Present Simple Passive" },
          { q: "The new bridge ___ (build) at the moment.", a: ["is being built"], hint: "Present Continuous Passive" },
          { q: "The report ___ (finish) by tomorrow.", a: ["will be finished"], hint: "Future Passive" },
          { q: "This house ___ (sell) last year.", a: ["was sold"], hint: "Past Simple Passive" },
          { q: "My phone ___ (steal) on the train yesterday.", a: ["was stolen"], hint: "неправильный глагол steal–stole–stolen" },
        ],
      },
      {
        id: "g-b2-reported",
        title: "Reported Speech",
        murphy: "Units 47–48",
        topic: "Косвенная речь",
        items: [
          { q: "She said she ___ (be) tired. (direct: 'I am tired')", a: ["was"], hint: "сдвиг времён: am → was" },
          { q: "He told me he ___ (finish) the project. (direct: 'I finished')", a: ["had finished"], hint: "Past → Past Perfect" },
          { q: "They said they ___ (come) the next day. (direct: 'we will come')", a: ["would come"], hint: "will → would" },
          { q: "She asked me where I ___ (live).", a: ["lived"], hint: "вопрос → утвердительный порядок + сдвиг" },
          { q: "Mum told me ___ (not / be) late.", a: ["not to be"], hint: "просьба → not to + V" },
        ],
      },
      {
        id: "g-b2-modals",
        title: "Modal verbs of deduction",
        murphy: "Units 28–31",
        topic: "Модальные глаголы",
        items: [
          { q: "She isn't answering. She ___ (be) asleep. (вероятно)", a: ["must be"], hint: "уверенность → must" },
          { q: "He ___ (be) at home — his car isn't here. (невозможно)", a: ["can't be", "cannot be"], hint: "невозможность → can't" },
          { q: "It ___ (rain) later, take an umbrella. (возможно)", a: ["might rain", "may rain", "could rain"], hint: "вероятность → might/may/could" },
          { q: "You ___ (study) more if you want to pass. (совет/необходимость)", a: ["should study", "must study"], hint: "совет → should" },
          { q: "We ___ (book) tickets in advance? (нужно ли)", a: ["should we book", "do we have to book"], hint: "вопрос о необходимости" },
        ],
      },
    ],

    C1: [
      {
        id: "g-c1-inversion",
        title: "Inversion for emphasis",
        murphy: "Units 119–120 (advanced)",
        topic: "Инверсия",
        items: [
          { q: "Never ___ I seen such a beautiful sunset.", a: ["have"], hint: "Never + have + S + V3" },
          { q: "Not only ___ she sing, but she also dances.", a: ["does"], hint: "Not only + does + S" },
          { q: "Hardly ___ I arrived when it started raining.", a: ["had"], hint: "Hardly + had + S + V3" },
          { q: "Only after the exam ___ I relax.", a: ["did"], hint: "Only after + did + S" },
          { q: "Rarely ___ we see such talent.", a: ["do"], hint: "Rarely + do + S" },
        ],
      },
      {
        id: "g-c1-cleft",
        title: "Cleft sentences & emphasis",
        murphy: "Advanced structures",
        topic: "Усилительные конструкции",
        items: [
          { q: "___ was Maria who solved the problem.", a: ["It"], hint: "It-cleft: It was ... who ..." },
          { q: "What I need ___ a holiday.", a: ["is"], hint: "What-cleft + is" },
          { q: "It was in 2020 ___ everything changed.", a: ["that"], hint: "It was ... that ..." },
          { q: "The thing ___ annoys me is rudeness.", a: ["that", "which"], hint: "The thing that ..." },
        ],
      },
      {
        id: "g-c1-advanced-tenses",
        title: "Perfect & continuous nuances",
        murphy: "Units 9–10, 18–20",
        topic: "Тонкости времён",
        items: [
          { q: "By next June, she ___ (study) English for five years.", a: ["will have been studying"], hint: "Future Perfect Continuous" },
          { q: "I'm exhausted. I ___ (work) all day.", a: ["have been working", "'ve been working"], hint: "Present Perfect Continuous" },
          { q: "When I got home, they ___ (already / eat).", a: ["had already eaten"], hint: "Past Perfect" },
          { q: "She ___ (live) in Paris before she moved to Berlin.", a: ["had lived", "had been living"], hint: "Past Perfect" },
        ],
      },
    ],
  },

  /* -----------------------------------------------------------------------
     ЧТЕНИЕ — текст + вопросы с выбором ответа (comprehension).
     Эти же тексты используются в режиме АУДИРОВАНИЯ (озвучка через TTS).
     ----------------------------------------------------------------------- */
  reading: {
    B1: [
      {
        id: "r-b1-routine",
        title: "A Day in Madrid",
        text: "Lucia is a fifteen-year-old student who lives in Madrid. Every morning she wakes up at seven o'clock and has a quick breakfast with her family. She goes to a school where she studies both English and Spanish literature. After classes, she usually meets her friends in a small café near the park. In the evening she does her homework and practises English for about thirty minutes. Lucia loves languages because, she says, 'every new language is a new way of seeing the world.'",
        questions: [
          { q: "What time does Lucia wake up?", options: ["At six", "At seven", "At eight"], answer: 1 },
          { q: "Where does she meet her friends?", options: ["At school", "In a café near the park", "At home"], answer: 1 },
          { q: "How long does she practise English in the evening?", options: ["An hour", "Fifteen minutes", "About thirty minutes"], answer: 2 },
          { q: "Why does Lucia love languages?", options: ["They are easy", "Each one is a new way of seeing the world", "Her teacher tells her to"], answer: 1 },
        ],
      },
      {
        id: "r-b1-weather",
        title: "The Lost Phone",
        text: "Last Saturday Tom went to the beach with his cousins. The weather was warm and the sea was calm. They played volleyball for two hours and then had a picnic on the sand. When it was time to go home, Tom couldn't find his phone. Everyone looked for it everywhere, but it had disappeared. On the way back, his cousin Maya laughed and showed him the phone — it had been in her bag the whole time. Tom was relieved but a little embarrassed.",
        questions: [
          { q: "When did Tom go to the beach?", options: ["Last Sunday", "Last Saturday", "Last Friday"], answer: 1 },
          { q: "What did they do for two hours?", options: ["Swam", "Played volleyball", "Slept"], answer: 1 },
          { q: "Where was the phone?", options: ["In the sand", "In the sea", "In Maya's bag"], answer: 2 },
          { q: "How did Tom feel at the end?", options: ["Angry", "Relieved but embarrassed", "Bored"], answer: 1 },
        ],
      },
    ],

    B2: [
      {
        id: "r-b2-social",
        title: "Screens and Sleep",
        text: "A growing number of studies suggest that teenagers who spend several hours on their phones before bedtime tend to sleep worse than those who switch off earlier. The blue light emitted by screens can interfere with melatonin, the hormone that helps us fall asleep. However, researchers point out that it is not only the light that matters: the constant stream of messages and videos keeps the brain alert when it should be winding down. Experts recommend a 'digital sunset' — putting devices away at least an hour before sleep — although they admit this advice is far easier to give than to follow.",
        questions: [
          { q: "What does blue light interfere with?", options: ["Vision", "Melatonin", "Memory"], answer: 1 },
          { q: "Besides light, what keeps the brain alert?", options: ["Noise from outside", "The stream of messages and videos", "Cold temperature"], answer: 1 },
          { q: "What is a 'digital sunset'?", options: ["A type of screen", "Putting devices away before sleep", "A sleep app"], answer: 1 },
          { q: "What do experts admit about their advice?", options: ["It is wrong", "It is easier to give than to follow", "It only works for adults"], answer: 1 },
        ],
      },
      {
        id: "r-b2-travel",
        title: "The Value of Getting Lost",
        text: "When we travel to an unfamiliar city, our instinct is often to rely on a map application and follow the blue dot without thinking. Yet some travellers argue that occasionally getting lost is one of the most rewarding parts of any journey. By wandering without a fixed destination, they stumble upon hidden squares, local markets and conversations they would never have planned. Of course, getting lost has its risks, and few people would recommend it late at night in an unknown area. Still, within reason, a little uncertainty can turn an ordinary trip into a genuine adventure.",
        questions: [
          { q: "What is our instinct in an unfamiliar city?", options: ["To ask locals", "To rely on a map app", "To stay in the hotel"], answer: 1 },
          { q: "What do some travellers stumble upon by getting lost?", options: ["Hidden squares and local markets", "Better hotels", "Faster routes"], answer: 0 },
          { q: "When is getting lost NOT recommended?", options: ["In the morning", "Late at night in an unknown area", "On weekends"], answer: 1 },
          { q: "What can a little uncertainty do?", options: ["Ruin the trip", "Turn a trip into an adventure", "Save money"], answer: 1 },
        ],
      },
    ],

    C1: [
      {
        id: "r-c1-language",
        title: "Does Language Shape Thought?",
        text: "For decades, linguists have debated whether the language we speak influences the way we think — a notion often associated with the so-called Sapir-Whorf hypothesis. In its strongest form, the idea claims that language determines thought, effectively trapping speakers within the boundaries of their vocabulary. Most contemporary scholars reject this extreme version, pointing out that we can clearly conceive of things for which we have no single word. Nevertheless, a more moderate interpretation has gained considerable traction: language may not imprison thought, but it can subtly nudge attention, making certain distinctions more salient. Speakers of languages that grammatically mark direction, for instance, often display a remarkable sense of orientation, as if their grammar had quietly trained their minds.",
        questions: [
          { q: "What does the strongest form of the hypothesis claim?", options: ["Language has no effect", "Language determines thought", "Thought determines language"], answer: 1 },
          { q: "Why do scholars reject the extreme version?", options: ["It is too old", "We can conceive of things without a word for them", "It was never tested"], answer: 1 },
          { q: "What does the moderate interpretation suggest?", options: ["Language imprisons thought", "Language can nudge attention", "Language is irrelevant"], answer: 1 },
          { q: "What is notable about speakers of direction-marking languages?", options: ["They speak faster", "They have a strong sense of orientation", "They forget words easily"], answer: 1 },
        ],
      },
    ],
  },

  /* -----------------------------------------------------------------------
     СЛОВАРЬ — карточки для интервального повторения (SRS).
     en — слово, ru — перевод, ex — пример употребления.
     ----------------------------------------------------------------------- */
  vocab: {
    B1: [
      { id: "v-b1-1", en: "to improve", ru: "улучшать(ся)", ex: "I want to improve my English." },
      { id: "v-b1-2", en: "on purpose", ru: "нарочно, специально", ex: "She didn't do it on purpose." },
      { id: "v-b1-3", en: "to borrow", ru: "брать в долг / одолжить у кого-то", ex: "Can I borrow your pen?" },
      { id: "v-b1-4", en: "to lend", ru: "давать в долг / одолжить кому-то", ex: "He lent me his book." },
      { id: "v-b1-5", en: "neighbour", ru: "сосед", ex: "Our new neighbour is friendly." },
      { id: "v-b1-6", en: "to be afraid of", ru: "бояться чего-то", ex: "She is afraid of spiders." },
      { id: "v-b1-7", en: "advice", ru: "совет (неисчисляемое!)", ex: "Let me give you some advice." },
      { id: "v-b1-8", en: "to suggest", ru: "предлагать (идею)", ex: "I suggest going by train." },
    ],
    B2: [
      { id: "v-b2-1", en: "to point out", ru: "указывать, отмечать", ex: "She pointed out my mistake." },
      { id: "v-b2-2", en: "reliable", ru: "надёжный", ex: "He is a reliable friend." },
      { id: "v-b2-3", en: "to come up with", ru: "придумать (идею)", ex: "We came up with a plan." },
      { id: "v-b2-4", en: "however", ru: "однако, тем не менее", ex: "It's hard; however, it's possible." },
      { id: "v-b2-5", en: "to be worth", ru: "стоить (того чтобы)", ex: "This book is worth reading." },
      { id: "v-b2-6", en: "to rely on", ru: "полагаться на", ex: "You can rely on me." },
      { id: "v-b2-7", en: "outcome", ru: "результат, исход", ex: "The outcome was positive." },
      { id: "v-b2-8", en: "to point at", ru: "указывать пальцем на", ex: "Don't point at people." },
    ],
    C1: [
      { id: "v-c1-1", en: "to imprison", ru: "заключать в тюрьму, ограничивать", ex: "Fear can imprison the mind." },
      { id: "v-c1-2", en: "salient", ru: "заметный, выделяющийся", ex: "The most salient feature is its size." },
      { id: "v-c1-3", en: "to gain traction", ru: "набирать популярность/обороты", ex: "The idea is gaining traction." },
      { id: "v-c1-4", en: "moderate", ru: "умеренный", ex: "She took a moderate view." },
      { id: "v-c1-5", en: "nuance", ru: "нюанс, тонкость", ex: "He understands the nuances of grammar." },
      { id: "v-c1-6", en: "to nudge", ru: "слегка подталкивать", ex: "The design nudges users to read more." },
      { id: "v-c1-7", en: "remarkable", ru: "замечательный, выдающийся", ex: "She made remarkable progress." },
      { id: "v-c1-8", en: "to conceive of", ru: "представлять, постигать", ex: "I can't conceive of a world without books." },
    ],
  },

  /* -----------------------------------------------------------------------
     ПРОВЕРКА ТЕМЫ — короткие квизы по грамматической теме (mini-test).
     Используют существующие grammar-юниты как источник вопросов,
     но здесь — отдельные теоретические вопросы с выбором.
     ----------------------------------------------------------------------- */
  topicCheck: {
    B1: [
      {
        id: "t-b1-tenses",
        title: "Check: Tenses basics",
        questions: [
          { q: "Which is correct for a fact that is always true?", options: ["Water boils at 100°C", "Water is boiling at 100°C", "Water boiled at 100°C"], answer: 0 },
          { q: "'I ___ my homework yet.' (negative)", options: ["didn't finish", "haven't finished", "don't finish"], answer: 1 },
          { q: "Choose the correct: 'While I was cooking, the phone ___.'", options: ["rang", "was ringing", "rings"], answer: 0 },
        ],
      },
    ],
    B2: [
      {
        id: "t-b2-cond",
        title: "Check: Conditionals & Passive",
        questions: [
          { q: "'If I ___ rich, I would travel.' Which fits 2nd conditional?", options: ["am", "were", "will be"], answer: 1 },
          { q: "Passive of 'They built the house in 1990':", options: ["The house was built in 1990", "The house is built in 1990", "The house has built in 1990"], answer: 0 },
          { q: "Reported: She said, 'I will help you.'", options: ["She said she will help me", "She said she would help me", "She says she helps me"], answer: 1 },
        ],
      },
    ],
    C1: [
      {
        id: "t-c1-adv",
        title: "Check: Advanced structures",
        questions: [
          { q: "Correct inversion: 'Never ___ such a thing.'", options: ["I have seen", "have I seen", "I saw"], answer: 1 },
          { q: "Cleft sentence: emphasise 'Maria solved it':", options: ["It was Maria who solved it", "Maria it solved", "Was Maria solved it"], answer: 0 },
          { q: "'By 2030 she ___ here for ten years.'", options: ["will work", "will have been working", "works"], answer: 1 },
        ],
      },
    ],
  },

  /* -----------------------------------------------------------------------
     ФОНЕТИКА — звуки, минимальные пары, ударение.
     Источник: English Pronunciation in Use (Cambridge).
     pairs — пары слов, различающиеся одним звуком (тренажёр на слух).
     ----------------------------------------------------------------------- */
  phonetics: {
    B1: [
      {
        id: "p-b1-ship",
        title: "/ɪ/ vs /iː/ — short vs long",
        source: "Pronunciation in Use Intermediate",
        note: "Короткий /ɪ/ (ship) и долгий /iː/ (sheep). Долгий тяни дольше, улыбка шире.",
        examples: [{ w: "ship", ipa: "/ʃɪp/" }, { w: "sheep", ipa: "/ʃiːp/" }, { w: "live", ipa: "/lɪv/" }, { w: "leave", ipa: "/liːv/" }],
        pairs: [["ship", "sheep"], ["live", "leave"], ["bit", "beat"], ["sit", "seat"]],
      },
      {
        id: "p-b1-th",
        title: "/θ/ and /ð/ — the 'th' sounds",
        source: "Pronunciation in Use Intermediate",
        note: "Кончик языка между зубами. /θ/ глухой (think), /ð/ звонкий (this).",
        examples: [{ w: "think", ipa: "/θɪŋk/" }, { w: "this", ipa: "/ðɪs/" }, { w: "three", ipa: "/θriː/" }, { w: "mother", ipa: "/ˈmʌðə/" }],
        pairs: [["thin", "sin"], ["three", "tree"], ["they", "day"]],
      },
    ],
    B2: [
      {
        id: "p-b2-stress",
        title: "Word stress: nouns vs verbs",
        source: "Pronunciation in Use Intermediate",
        note: "У многих слов ударение меняет смысл: 'REcord (сущ.) — reCORD (глагол)'.",
        examples: [{ w: "record", ipa: "сущ. ˈrekɔːd / глаг. rɪˈkɔːd" }, { w: "present", ipa: "сущ. ˈpreznt / глаг. prɪˈzent" }, { w: "increase", ipa: "сущ. ˈɪnkriːs / глаг. ɪnˈkriːs" }],
        pairs: [["desert", "dessert"], ["cot", "caught"]],
      },
    ],
    C1: [
      {
        id: "p-c1-weak",
        title: "Weak forms & connected speech",
        source: "Pronunciation in Use Advanced",
        note: "В беглой речи служебные слова ослабляются: 'and' → /ən/, 'to' → /tə/, 'of' → /əv/.",
        examples: [{ w: "fish and chips", ipa: "/fɪʃ ən tʃɪps/" }, { w: "cup of tea", ipa: "/kʌp əv tiː/" }, { w: "want to", ipa: "/wɒnə/ (wanna)" }],
        pairs: [["can", "can't"], ["affect", "effect"]],
      },
    ],
  },

  /* -----------------------------------------------------------------------
     ФРАЗОВЫЕ ГЛАГОЛЫ — карточки. Источник: Phrasal Verbs in Use.
     ----------------------------------------------------------------------- */
  phrasal: {
    B1: [
      { id: "ph-b1-1", en: "give up", ru: "сдаваться, бросать (привычку)", ex: "Don't give up — you're almost there!" },
      { id: "ph-b1-2", en: "find out", ru: "выяснять, узнавать", ex: "I need to find out the truth." },
      { id: "ph-b1-3", en: "look after", ru: "присматривать, заботиться", ex: "She looks after her little brother." },
      { id: "ph-b1-4", en: "turn on / off", ru: "включать / выключать", ex: "Turn off the lights, please." },
      { id: "ph-b1-5", en: "get on with", ru: "ладить с кем-то", ex: "I get on well with my classmates." },
      { id: "ph-b1-6", en: "put off", ru: "откладывать", ex: "Don't put off your homework." },
    ],
    B2: [
      { id: "ph-b2-1", en: "come up with", ru: "придумать (идею)", ex: "She came up with a brilliant plan." },
      { id: "ph-b2-2", en: "put up with", ru: "терпеть, мириться с", ex: "I can't put up with this noise." },
      { id: "ph-b2-3", en: "look forward to", ru: "с нетерпением ждать", ex: "I look forward to the holidays." },
      { id: "ph-b2-4", en: "run out of", ru: "заканчиваться (о запасе)", ex: "We've run out of milk." },
      { id: "ph-b2-5", en: "bring up", ru: "1) воспитывать 2) поднимать тему", ex: "He brought up an interesting point." },
      { id: "ph-b2-6", en: "carry out", ru: "выполнять, проводить", ex: "Scientists carried out an experiment." },
    ],
    C1: [
      { id: "ph-c1-1", en: "account for", ru: "объяснять; составлять (долю)", ex: "This accounts for the delay." },
      { id: "ph-c1-2", en: "wind down", ru: "расслабляться, сбавлять обороты", ex: "I read to wind down before bed." },
      { id: "ph-c1-3", en: "single out", ru: "выделять (среди других)", ex: "She was singled out for praise." },
      { id: "ph-c1-4", en: "gloss over", ru: "замалчивать, обходить вниманием", ex: "He glossed over the problems." },
      { id: "ph-c1-5", en: "boil down to", ru: "сводиться к", ex: "It all boils down to money." },
    ],
  },

  /* -----------------------------------------------------------------------
     ИДИОМЫ — карточки. Источник: Idioms in Use.
     ----------------------------------------------------------------------- */
  idioms: {
    B1: [
      { id: "id-b1-1", en: "piece of cake", ru: "проще простого", ex: "The test was a piece of cake." },
      { id: "id-b1-2", en: "once in a blue moon", ru: "очень редко", ex: "We meet once in a blue moon." },
      { id: "id-b1-3", en: "under the weather", ru: "неважно себя чувствовать", ex: "I'm feeling a bit under the weather." },
      { id: "id-b1-4", en: "hit the books", ru: "засесть за учёбу", ex: "I need to hit the books tonight." },
    ],
    B2: [
      { id: "id-b2-1", en: "break the ice", ru: "растопить лёд (в общении)", ex: "A joke can break the ice." },
      { id: "id-b2-2", en: "the ball is in your court", ru: "теперь твой ход / решение за тобой", ex: "I've done my part — the ball is in your court." },
      { id: "id-b2-3", en: "bite off more than you can chew", ru: "переоценить свои силы", ex: "She bit off more than she could chew." },
      { id: "id-b2-4", en: "get the hang of", ru: "приноровиться, освоить", ex: "You'll get the hang of it soon." },
    ],
    C1: [
      { id: "id-c1-1", en: "a blessing in disguise", ru: "не было бы счастья, да несчастье помогло", ex: "Losing that job was a blessing in disguise." },
      { id: "id-c1-2", en: "cut corners", ru: "халтурить, экономить на качестве", ex: "Don't cut corners on safety." },
      { id: "id-c1-3", en: "the tip of the iceberg", ru: "лишь верхушка айсберга", ex: "These complaints are just the tip of the iceberg." },
      { id: "id-c1-4", en: "on the same page", ru: "понимать друг друга, быть заодно", ex: "Let's make sure we're on the same page." },
    ],
  },
};

// Делаем доступным глобально (приложение без сборщика).
window.CONTENT = CONTENT;
