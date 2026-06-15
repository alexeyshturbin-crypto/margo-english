(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => {
    C[track] = C[track] || {};
    C[track][lvl] = C[track][lvl] || [];
    arr.forEach(x => C[track][lvl].push(x));
  };

  // ===================== A2 (≈7 класс) =====================
  P("grammar", "A2", [
    {
      id: "gr-A2-01",
      title: "Verb to be: am / is / are",
      murphy: "Essential Grammar in Use, Units 1–3",
      topic: "Глагол to be в настоящем времени",
      items: [
        { q: "My name ___ Anna and I am twelve.", a: ["is"], hint: "he/she/it → is" },
        { q: "We ___ in the same class at school.", a: ["are"], hint: "we → are" },
        { q: "I ___ very happy today.", a: ["am", "'m"], hint: "I → am" },
        { q: "The dogs ___ in the garden now.", a: ["are"], hint: "множественное число → are" },
        { q: "My brother ___ not at home.", a: ["is", "isn't", "is not"], hint: "he → is" },
        { q: "___ you ready for the trip?", a: ["are"], hint: "вопрос с you → are" }
      ]
    },
    {
      id: "gr-A2-02",
      title: "Present Simple: he/she/it -s",
      murphy: "Essential Grammar in Use, Units 4–7",
      topic: "Настоящее простое время",
      items: [
        { q: "She ___ tea every morning.", a: ["drinks"], hint: "she + глагол + s" },
        { q: "My father ___ to work by bus.", a: ["goes"], hint: "go → goes" },
        { q: "They ___ football on Sundays.", a: ["play"], hint: "they → без -s" },
        { q: "He ___ his homework after dinner.", a: ["does"], hint: "do → does" },
        { q: "The shop ___ at nine o'clock.", a: ["opens"], hint: "it + s" },
        { q: "I ___ in a small town near London.", a: ["live"], hint: "I → без -s" }
      ]
    },
    {
      id: "gr-A2-03",
      title: "Articles: a / an / the",
      murphy: "Essential Grammar in Use, Units 65–69",
      topic: "Артикли a/an/the",
      items: [
        { q: "I have ___ apple in my bag.", a: ["an"], hint: "перед гласным звуком → an" },
        { q: "She bought ___ new car last week.", a: ["a"], hint: "перед согласным → a" },
        { q: "Look at ___ moon tonight!", a: ["the"], hint: "единственный в своём роде → the" },
        { q: "He is ___ honest boy.", a: ["an"], hint: "h не читается → an" },
        { q: "We saw ___ film and the film was great.", a: ["a"], hint: "первое упоминание → a" },
        { q: "Can you close ___ door, please?", a: ["the"], hint: "конкретная дверь → the" }
      ]
    },
    {
      id: "gr-A2-04",
      title: "Plural nouns",
      murphy: "Essential Grammar in Use, Units 56–58",
      topic: "Множественное число существительных",
      items: [
        { q: "I have three ___ on my desk. (book)", a: ["books"], hint: "+s" },
        { q: "There are two ___ in the box. (box)", a: ["boxes"], hint: "после -x → -es" },
        { q: "She has five ___ . (baby)", a: ["babies"], hint: "согласная + y → -ies" },
        { q: "We saw many ___ at the farm. (child)", a: ["children"], hint: "особая форма" },
        { q: "My ___ hurt after running. (foot)", a: ["feet"], hint: "особая форма foot" },
        { q: "There are some ___ in the basket. (tomato)", a: ["tomatoes"], hint: "после -o → -es" }
      ]
    },
    {
      id: "gr-A2-05",
      title: "can / can't",
      murphy: "Essential Grammar in Use, Units 31–32",
      topic: "Модальный глагол can",
      items: [
        { q: "She ___ swim very well.", a: ["can"], hint: "умение → can" },
        { q: "I ___ play the guitar, I never learned.", a: ["can't", "cannot", "can not"], hint: "не умеет → can't" },
        { q: "___ you help me, please?", a: ["can"], hint: "просьба → can you" },
        { q: "We ___ see the sea from our window.", a: ["can"], hint: "возможность → can" },
        { q: "He ___ come to the party, he is busy.", a: ["can't", "cannot", "can not"], hint: "отрицание" },
        { q: "Birds ___ fly but they can't talk.", a: ["can"], hint: "способность" }
      ]
    },
    {
      id: "gr-A2-06",
      title: "Prepositions of time and place",
      murphy: "Essential Grammar in Use, Units 102–106",
      topic: "Предлоги времени и места",
      items: [
        { q: "We have lunch ___ noon.", a: ["at"], hint: "точное время → at" },
        { q: "My birthday is ___ July.", a: ["in"], hint: "месяцы → in" },
        { q: "The cat is ___ the table.", a: ["on"], hint: "на поверхности → on" },
        { q: "I'll see you ___ Monday.", a: ["on"], hint: "дни недели → on" },
        { q: "There is a lamp ___ the corner of the room.", a: ["in"], hint: "в углу → in" },
        { q: "She lives ___ a big city.", a: ["in"], hint: "города → in" }
      ]
    },
    {
      id: "gr-A2-07",
      title: "there is / there are",
      murphy: "Essential Grammar in Use, Units 36–38",
      topic: "Оборот there is / there are",
      items: [
        { q: "___ a book on the shelf.", a: ["there is", "there's"], hint: "ед. число → there is" },
        { q: "___ four chairs in the kitchen.", a: ["there are"], hint: "мн. число → there are" },
        { q: "There ___ some milk in the fridge.", a: ["is"], hint: "milk неисчисляемое → is" },
        { q: "There ___ many people at the station.", a: ["are"], hint: "people → are" },
        { q: "___ there a bank near here?", a: ["is"], hint: "вопрос ед. число" },
        { q: "There ___ not any apples left.", a: ["are"], hint: "apples мн. число → are" }
      ]
    },
    {
      id: "gr-A2-08",
      title: "Past Simple: regular and irregular",
      murphy: "Essential Grammar in Use, Units 11–14",
      topic: "Простое прошедшее время",
      items: [
        { q: "Yesterday I ___ a great film. (watch)", a: ["watched"], hint: "правильный → +ed" },
        { q: "She ___ to school by bus last week. (go)", a: ["went"], hint: "go → went" },
        { q: "We ___ a new game two days ago. (play)", a: ["played"], hint: "+ed" },
        { q: "He ___ his keys this morning. (lose)", a: ["lost"], hint: "lose → lost" },
        { q: "They ___ a delicious cake. (make)", a: ["made"], hint: "make → made" },
        { q: "I ___ my grandmother on Sunday. (visit)", a: ["visited"], hint: "+ed" }
      ]
    }
  ]);

  // ===================== B1 (≈8–9 класс) =====================
  P("grammar", "B1", [
    {
      id: "gr-B1-01",
      title: "Present Continuous vs Present Simple",
      murphy: "English Grammar in Use, Units 1–8",
      topic: "Настоящее длительное и простое",
      items: [
        { q: "Listen! The baby ___ . (cry)", a: ["is crying", "'s crying"], hint: "прямо сейчас → Continuous" },
        { q: "She usually ___ coffee in the morning. (drink)", a: ["drinks"], hint: "usually → Simple" },
        { q: "Look, it ___ outside. (rain)", a: ["is raining", "'s raining"], hint: "сейчас → Continuous" },
        { q: "Water ___ at 100 degrees. (boil)", a: ["boils"], hint: "факт → Simple" },
        { q: "I ___ to music right now. (listen)", a: ["am listening", "'m listening"], hint: "right now" },
        { q: "They ___ tennis every weekend. (play)", a: ["play"], hint: "every weekend → Simple" }
      ]
    },
    {
      id: "gr-B1-02",
      title: "Past Continuous",
      murphy: "English Grammar in Use, Units 13–14",
      topic: "Прошедшее длительное время",
      items: [
        { q: "At 8 p.m. yesterday I ___ dinner. (have)", a: ["was having"], hint: "I/he/she → was + -ing" },
        { q: "They ___ when the teacher came in. (talk)", a: ["were talking"], hint: "they → were + -ing" },
        { q: "While she ___ , the phone rang. (cook)", a: ["was cooking"], hint: "длительное действие в прошлом" },
        { q: "We ___ TV when the lights went out. (watch)", a: ["were watching"], hint: "we → were" },
        { q: "What were you ___ at midnight? (do)", a: ["doing"], hint: "were + -ing → doing" },
        { q: "It ___ heavily all morning. (snow)", a: ["was snowing"], hint: "it → was" }
      ]
    },
    {
      id: "gr-B1-03",
      title: "Present Perfect",
      murphy: "English Grammar in Use, Units 7–8, 15–16",
      topic: "Настоящее совершённое время",
      items: [
        { q: "I ___ my homework already. (finish)", a: ["have finished", "'ve finished"], hint: "have + past participle" },
        { q: "She has never ___ to Japan. (be)", a: ["been"], hint: "be → been" },
        { q: "We have just ___ lunch. (eat)", a: ["eaten"], hint: "eat → eaten" },
        { q: "Have you ever ___ a famous person? (meet)", a: ["met"], hint: "meet → met" },
        { q: "He ___ his wallet, he can't pay. (lose)", a: ["has lost", "'s lost"], hint: "результат сейчас" },
        { q: "They ___ here since 2010. (live)", a: ["have lived", "'ve lived"], hint: "since → Present Perfect" }
      ]
    },
    {
      id: "gr-B1-04",
      title: "Comparatives and Superlatives",
      murphy: "English Grammar in Use, Units 105–108",
      topic: "Сравнительная и превосходная степень",
      items: [
        { q: "An elephant is ___ than a mouse. (big)", a: ["bigger"], hint: "короткое → +er" },
        { q: "This is ___ book I have ever read. (interesting)", a: ["the most interesting"], hint: "длинное → the most" },
        { q: "She is ___ student in the class. (good)", a: ["the best"], hint: "good → the best" },
        { q: "Today is ___ than yesterday. (hot)", a: ["hotter"], hint: "удвоение t → hotter" },
        { q: "This car is ___ than that one. (expensive)", a: ["more expensive"], hint: "длинное → more" },
        { q: "Mount Everest is ___ mountain in the world. (high)", a: ["the highest"], hint: "the + высокое-est" }
      ]
    },
    {
      id: "gr-B1-05",
      title: "Conditionals 0 and 1",
      murphy: "English Grammar in Use, Units 38–39",
      topic: "Условные предложения 0 и 1 типа",
      items: [
        { q: "If you heat ice, it ___ . (melt)", a: ["melts"], hint: "0 тип: факт → Present Simple" },
        { q: "If it rains tomorrow, we ___ at home. (stay)", a: ["will stay", "'ll stay"], hint: "1 тип: will + глагол" },
        { q: "If you ___ hard, you will pass the exam. (study)", a: ["study"], hint: "после if → Present Simple" },
        { q: "Plants die if you ___ them. (not water)", a: ["don't water", "do not water"], hint: "0 тип: don't + глагол" },
        { q: "She ___ you if you ask her. (help)", a: ["will help", "'ll help"], hint: "1 тип результат" },
        { q: "If I ___ time, I'll call you tonight. (have)", a: ["have"], hint: "if → Present Simple" }
      ]
    },
    {
      id: "gr-B1-06",
      title: "Modals: must / should / have to",
      murphy: "English Grammar in Use, Units 31–35",
      topic: "Модальные глаголы долженствования",
      items: [
        { q: "You ___ wear a seatbelt in a car. It's the law.", a: ["must", "have to"], hint: "обязанность → must" },
        { q: "You look tired. You ___ rest.", a: ["should"], hint: "совет → should" },
        { q: "I ___ get up early tomorrow for work.", a: ["have to", "must"], hint: "необходимость" },
        { q: "You ___ not smoke here. It's forbidden.", a: ["must"], hint: "запрет → must not" },
        { q: "She ___ see a doctor about that cough.", a: ["should"], hint: "рекомендация" },
        { q: "We don't ___ to pay; entry is free.", a: ["have"], hint: "don't have to = не нужно" }
      ]
    },
    {
      id: "gr-B1-07",
      title: "Gerund and Infinitive",
      murphy: "English Grammar in Use, Units 53–58",
      topic: "Герундий и инфинитив",
      items: [
        { q: "I enjoy ___ books in the evening. (read)", a: ["reading"], hint: "enjoy + -ing" },
        { q: "She wants ___ a doctor. (become)", a: ["to become"], hint: "want + to" },
        { q: "He decided ___ the job. (take)", a: ["to take"], hint: "decide + to" },
        { q: "Do you mind ___ the window? (open)", a: ["opening"], hint: "mind + -ing" },
        { q: "They hope ___ the match. (win)", a: ["to win"], hint: "hope + to" },
        { q: "We finished ___ at six o'clock. (work)", a: ["working"], hint: "finish + -ing" }
      ]
    },
    {
      id: "gr-B1-08",
      title: "Future: will and going to",
      murphy: "English Grammar in Use, Units 19–23",
      topic: "Будущее время: will и going to",
      items: [
        { q: "Look at those clouds! It ___ rain.", a: ["is going to", "'s going to"], hint: "признаки → going to" },
        { q: "I think our team ___ win the game.", a: ["will", "'ll"], hint: "мнение/предсказание → will" },
        { q: "I'm tired. I ___ go to bed.", a: ["am going to", "'m going to"], hint: "намерение → going to" },
        { q: "The phone is ringing. I ___ answer it.", a: ["will", "'ll"], hint: "спонтанное решение → will" },
        { q: "She ___ visit her aunt next summer. (plan)", a: ["is going to", "'s going to"], hint: "план → going to" },
        { q: "Maybe it ___ be sunny tomorrow.", a: ["will", "'ll"], hint: "maybe → will" }
      ]
    }
  ]);

  // ===================== B2 (≈10 класс) =====================
  P("grammar", "B2", [
    {
      id: "gr-B2-01",
      title: "Present Perfect Continuous",
      murphy: "English Grammar in Use, Units 9–11",
      topic: "Настоящее совершённое длительное",
      items: [
        { q: "I ___ for you for two hours! (wait)", a: ["have been waiting", "'ve been waiting"], hint: "have been + -ing" },
        { q: "She is tired because she ___ all day. (work)", a: ["has been working", "'s been working"], hint: "has been + -ing" },
        { q: "How long have you ___ English? (learn)", a: ["been learning"], hint: "длительность → been + -ing" },
        { q: "It ___ since this morning. (rain)", a: ["has been raining", "'s been raining"], hint: "процесс продолжается" },
        { q: "They ___ in this house for ten years. (live)", a: ["have been living", "'ve been living"], hint: "for + период" },
        { q: "My eyes hurt; I ___ at the screen too long. (look)", a: ["have been looking", "'ve been looking"], hint: "недавняя причина" }
      ]
    },
    {
      id: "gr-B2-02",
      title: "Past Perfect",
      murphy: "English Grammar in Use, Units 15–16",
      topic: "Прошедшее совершённое время",
      items: [
        { q: "When we arrived, the film had already ___ . (start)", a: ["started"], hint: "had + past participle" },
        { q: "She couldn't get in because she ___ her key. (forget)", a: ["had forgotten"], hint: "раньше другого действия" },
        { q: "By the time he came, everyone ___ . (leave)", a: ["had left"], hint: "leave → left" },
        { q: "I realized I ___ the man before. (meet)", a: ["had met"], hint: "ранее в прошлом" },
        { q: "They had never ___ snow until that trip. (see)", a: ["seen"], hint: "до того момента → had + seen" },
        { q: "After she ___ dinner, she went out. (finish)", a: ["had finished"], hint: "first action → Past Perfect" }
      ]
    },
    {
      id: "gr-B2-03",
      title: "Passive Voice",
      murphy: "English Grammar in Use, Units 42–46",
      topic: "Страдательный залог",
      items: [
        { q: "This bridge ___ in 1990. (build)", a: ["was built"], hint: "was + past participle" },
        { q: "English ___ all over the world. (speak)", a: ["is spoken"], hint: "is + speak → spoken" },
        { q: "The letters ___ tomorrow. (send)", a: ["will be sent"], hint: "will be + sent" },
        { q: "My car ___ at the moment. (repair)", a: ["is being repaired"], hint: "is being + -ed" },
        { q: "The Mona Lisa ___ by Leonardo. (paint)", a: ["was painted"], hint: "by → пассив прошлого" },
        { q: "A new hospital ___ next year. (open)", a: ["will be opened"], hint: "будущее пассив" }
      ]
    },
    {
      id: "gr-B2-04",
      title: "Reported Speech",
      murphy: "English Grammar in Use, Units 47–49",
      topic: "Косвенная речь",
      items: [
        { q: "She said she ___ tired. (\"I am tired\")", a: ["was"], hint: "am → was" },
        { q: "He told me he ___ finished. (\"I have finished\")", a: ["had"], hint: "have → had" },
        { q: "They said they ___ come the next day. (\"We will come\")", a: ["would"], hint: "will → would" },
        { q: "She asked where I ___ . (\"Where do you live?\")", a: ["lived"], hint: "do live → lived" },
        { q: "He said he ___ help me. (\"I can help\")", a: ["could"], hint: "can → could" },
        { q: "Tom said he ___ the film before. (\"I saw it\")", a: ["had seen"], hint: "saw → had seen" }
      ]
    },
    {
      id: "gr-B2-05",
      title: "Conditionals 2 and 3",
      murphy: "English Grammar in Use, Units 39–40",
      topic: "Условные предложения 2 и 3 типа",
      items: [
        { q: "If I ___ rich, I would travel the world. (be)", a: ["were", "was"], hint: "2 тип: were/was" },
        { q: "If she had studied, she ___ the exam. (pass)", a: ["would have passed"], hint: "3 тип: would have + -ed" },
        { q: "I ___ you if I had your number. (call)", a: ["would call", "'d call"], hint: "2 тип результат" },
        { q: "If we had left earlier, we ___ the train. (catch)", a: ["would have caught"], hint: "catch → caught" },
        { q: "If he ___ harder, he would earn more. (work)", a: ["worked"], hint: "2 тип: Past Simple после if" },
        { q: "They would have come if you ___ them. (invite)", a: ["had invited"], hint: "3 тип: had + -ed" }
      ]
    },
    {
      id: "gr-B2-06",
      title: "Relative Clauses",
      murphy: "English Grammar in Use, Units 92–96",
      topic: "Определительные придаточные",
      items: [
        { q: "The woman ___ lives next door is a nurse.", a: ["who", "that"], hint: "о людях → who/that" },
        { q: "This is the book ___ I told you about.", a: ["that", "which"], hint: "о вещах → that/which" },
        { q: "That's the house ___ roof is red.", a: ["whose"], hint: "принадлежность → whose" },
        { q: "Do you remember the day ___ we met?", a: ["when"], hint: "о времени → when" },
        { q: "The shop ___ I bought it has closed.", a: ["where"], hint: "о месте → where" },
        { q: "He's the man ___ car was stolen.", a: ["whose"], hint: "принадлежность → whose" }
      ]
    },
    {
      id: "gr-B2-07",
      title: "Modals of Deduction",
      murphy: "English Grammar in Use, Units 28–30",
      topic: "Модальные глаголы предположения",
      items: [
        { q: "The lights are on, so they ___ be at home.", a: ["must"], hint: "уверенность → must" },
        { q: "She didn't answer; she ___ be asleep.", a: ["might", "may", "could"], hint: "возможность → might/may" },
        { q: "He ___ be the thief; he was abroad that day.", a: ["can't", "cannot", "can not"], hint: "уверен что нет → can't" },
        { q: "This ___ be the right address; let's check.", a: ["might", "may", "could"], hint: "не уверен → may/might" },
        { q: "You've walked all day; you ___ be tired.", a: ["must"], hint: "логичный вывод → must" },
        { q: "That ___ be John; he's in Spain right now.", a: ["can't", "cannot", "can not"], hint: "невозможно → can't" }
      ]
    },
    {
      id: "gr-B2-08",
      title: "used to / be used to & wish",
      murphy: "English Grammar in Use, Units 18, 41, 60",
      topic: "used to, be used to, wish/if only",
      items: [
        { q: "I ___ play football when I was young.", a: ["used to"], hint: "привычка в прошлом → used to" },
        { q: "She isn't ___ to driving on the left yet.", a: ["used"], hint: "be used to + -ing" },
        { q: "I wish I ___ taller.", a: ["were", "was"], hint: "wish + were о настоящем" },
        { q: "If only I ___ studied harder last year!", a: ["had"], hint: "сожаление о прошлом → had + -ed" },
        { q: "He ___ to get up at six now; it's normal for him.", a: ["is used"], hint: "привык → is used to" },
        { q: "I wish you ___ stop making noise.", a: ["would"], hint: "wish + would о раздражении" }
      ]
    }
  ]);

  // ===================== C1 (продвинутый) =====================
  P("grammar", "C1", [
    {
      id: "gr-C1-01",
      title: "Inversion for Emphasis",
      murphy: "Advanced Grammar in Use, Unit 99",
      topic: "Инверсия для усиления",
      items: [
        { q: "Never ___ I seen such a beautiful view.", a: ["have"], hint: "Never + have + S + V3" },
        { q: "Not only ___ he late, but he also forgot the keys.", a: ["was"], hint: "Not only + was + S" },
        { q: "Rarely ___ we get such good weather here.", a: ["do"], hint: "Rarely + do + S" },
        { q: "No sooner ___ I arrived than the phone rang.", a: ["had"], hint: "No sooner + had + S" },
        { q: "Seldom ___ she complain about anything.", a: ["does"], hint: "Seldom + does + S" },
        { q: "Hardly ___ we sat down when it started to rain.", a: ["had"], hint: "Hardly + had + S" }
      ]
    },
    {
      id: "gr-C1-02",
      title: "Cleft Sentences",
      murphy: "Advanced Grammar in Use, Unit 98",
      topic: "Расщеплённые предложения",
      items: [
        { q: "It ___ Maria who solved the problem, not Tom.", a: ["was"], hint: "It + was + выделяемое" },
        { q: "___ I really need is a long holiday.", a: ["what"], hint: "What + clause = то, что" },
        { q: "It ___ in 1969 that humans first landed on the Moon.", a: ["was"], hint: "It was ... that" },
        { q: "All ___ I want is a quiet evening.", a: ["that"], hint: "All that I want" },
        { q: "___ it was that broke the window remains a mystery.", a: ["what"], hint: "выделение подлежащего" },
        { q: "The reason ___ I called was to apologise.", a: ["why"], hint: "The reason why" }
      ]
    },
    {
      id: "gr-C1-03",
      title: "Participle Clauses",
      murphy: "Advanced Grammar in Use, Unit 79",
      topic: "Причастные обороты",
      items: [
        { q: "___ the door, she went out into the rain. (lock)", a: ["locking", "having locked"], hint: "одновременность → -ing" },
        { q: "___ exhausted, he fell asleep immediately. (feel)", a: ["feeling"], hint: "причина → -ing" },
        { q: "The man ___ in the corner is my uncle. (sit)", a: ["sitting"], hint: "= who is sitting" },
        { q: "___ by everyone, she felt very proud. (praise)", a: ["praised", "being praised"], hint: "пассив → V3" },
        { q: "___ finished his work, he left the office. (have)", a: ["having"], hint: "перфектное причастие" },
        { q: "The book ___ on the table is mine. (lie)", a: ["lying"], hint: "lie → lying" }
      ]
    },
    {
      id: "gr-C1-04",
      title: "Mixed Conditionals",
      murphy: "Advanced Grammar in Use, Unit 84",
      topic: "Смешанные условные предложения",
      items: [
        { q: "If I had taken the job, I ___ in Paris now.", a: ["would be", "'d be"], hint: "прошлое условие → настоящий результат" },
        { q: "If she were more careful, she ___ that mistake yesterday.", a: ["wouldn't have made", "would not have made"], hint: "настоящее качество → прошлый результат" },
        { q: "If he hadn't missed the train, he ___ here by now.", a: ["would be", "'d be"], hint: "3+2 смешанный" },
        { q: "If I spoke Chinese, I ___ that contract last week.", a: ["would have signed"], hint: "настоящее → прошлое" },
        { q: "If they had saved money, they ___ a house today.", a: ["would have", "'d have"], hint: "прошлое → настоящее" },
        { q: "If I weren't so shy, I ___ to her at the party.", a: ["would have talked", "'d have talked"], hint: "характер → прошлый момент" }
      ]
    },
    {
      id: "gr-C1-05",
      title: "Advanced Modals & Semi-Modals",
      murphy: "Advanced Grammar in Use, Unit 31",
      topic: "Продвинутые модальные конструкции",
      items: [
        { q: "You ___ have told me earlier; I waited for hours!", a: ["could", "should", "might"], hint: "упрёк о прошлом" },
        { q: "She ___ have left already; her coat is gone.", a: ["must"], hint: "уверенный вывод о прошлом" },
        { q: "I needn't ___ bought milk; we already had some.", a: ["have"], hint: "needn't have + V3" },
        { q: "He ___ have been driving very fast to crash like that.", a: ["must"], hint: "must have been + -ing" },
        { q: "You ___ not have worried; everything was fine.", a: ["need"], hint: "need not have = напрасно" },
        { q: "They ___ well be right about the results.", a: ["may", "might", "could"], hint: "may well = вполне возможно" }
      ]
    },
    {
      id: "gr-C1-06",
      title: "Future Perfect & Continuous",
      murphy: "Advanced Grammar in Use, Unit 12",
      topic: "Будущее совершённое и длительное",
      items: [
        { q: "By next June, I ___ here for five years. (work)", a: ["will have worked", "'ll have worked"], hint: "will have + V3" },
        { q: "This time tomorrow we ___ over the ocean. (fly)", a: ["will be flying", "'ll be flying"], hint: "will be + -ing" },
        { q: "By 2030 they ___ the new bridge. (complete)", a: ["will have completed"], hint: "завершено к моменту" },
        { q: "Don't call at eight; I ___ dinner then. (have)", a: ["will be having", "'ll be having"], hint: "процесс в будущем" },
        { q: "She ___ the report by the time you arrive. (finish)", a: ["will have finished"], hint: "by the time → Future Perfect" },
        { q: "In an hour the children ___ in the garden. (play)", a: ["will be playing", "'ll be playing"], hint: "длительное будущее" }
      ]
    },
    {
      id: "gr-C1-07",
      title: "Nominalisation",
      murphy: "Advanced Grammar in Use, Unit 70",
      topic: "Номинализация (отглагольные существительные)",
      items: [
        { q: "The ___ of the bridge took three years. (construct)", a: ["construction"], hint: "construct → construction" },
        { q: "There was a sharp ___ in prices last month. (increase)", a: ["increase"], hint: "сущ. совпадает с глаголом" },
        { q: "His ___ to the new rules surprised us. (react)", a: ["reaction"], hint: "react → reaction" },
        { q: "The ___ of the disease spread quickly. (analyse)", a: ["analysis"], hint: "analyse → analysis" },
        { q: "Their ___ to finish on time was impressive. (decide)", a: ["decision"], hint: "decide → decision" },
        { q: "The ___ of the data revealed a pattern. (examine)", a: ["examination"], hint: "examine → examination" }
      ]
    },
    {
      id: "gr-C1-08",
      title: "Advanced Linkers & Discourse Markers",
      murphy: "Advanced Grammar in Use, Unit 95",
      topic: "Связки и маркеры дискурса",
      items: [
        { q: "He was tired; ___ , he finished the race.", a: ["nevertheless", "nonetheless", "however"], hint: "противопоставление" },
        { q: "___ the bad weather, we went hiking.", a: ["despite", "notwithstanding"], hint: "despite + сущ." },
        { q: "The plan failed ___ a lack of funding.", a: ["due to", "owing to", "because of"], hint: "причина + сущ." },
        { q: "She studied hard; ___ , she passed easily.", a: ["consequently", "therefore", "thus"], hint: "следствие" },
        { q: "___ as it may seem, the story is true.", a: ["strange", "odd"], hint: "Strange as it may seem" },
        { q: "We can go by car; ___ , we could take the train.", a: ["alternatively"], hint: "альтернатива" }
      ]
    }
  ]);

  // ===================== C2 (свободный / сертификат) =====================
  P("grammar", "C2", [
    {
      id: "gr-C2-01",
      title: "Subjunctive & Unreal Past",
      murphy: "Advanced Grammar in Use, Unit 85",
      topic: "Сослагательное наклонение и нереальное прошлое",
      items: [
        { q: "I insist that he ___ present at the meeting.", a: ["be"], hint: "subjunctive: insist that + be" },
        { q: "It is essential that every student ___ the form.", a: ["sign"], hint: "subjunctive без -s" },
        { q: "She acts as though she ___ the owner.", a: ["were", "was"], hint: "as though + unreal past" },
        { q: "I would rather you ___ smoke in here.", a: ["didn't", "did not"], hint: "would rather + past" },
        { q: "The committee proposed that the rule ___ abolished.", a: ["be"], hint: "propose that + be" },
        { q: "It's high time we ___ the truth.", a: ["told"], hint: "It's high time + past" }
      ]
    },
    {
      id: "gr-C2-02",
      title: "Advanced Inversion",
      murphy: "Advanced Grammar in Use, Unit 100",
      topic: "Продвинутая инверсия",
      items: [
        { q: "Not until the war ended ___ he return home.", a: ["did"], hint: "Not until ... did + S" },
        { q: "Only after the meeting ___ I understand the issue.", a: ["did"], hint: "Only after + did + S" },
        { q: "Had I known the truth, I ___ have acted differently.", a: ["would"], hint: "Had I known = if I had known" },
        { q: "So loud was the music that ___ could think.", a: ["nobody", "no one"], hint: "So + adj + was that" },
        { q: "Were she to apply, she ___ certainly get the job.", a: ["would", "'d"], hint: "Were S to = if S were to" },
        { q: "Under no circumstances ___ you open that door.", a: ["should", "must"], hint: "Under no circumstances + aux" }
      ]
    },
    {
      id: "gr-C2-03",
      title: "Ellipsis & Substitution",
      murphy: "Advanced Grammar in Use, Unit 96",
      topic: "Эллипсис и замещение",
      items: [
        { q: "I haven't read it, but I will ___ soon.", a: ["do"], hint: "do замещает глагол" },
        { q: "She can speak French and ___ can her sister.", a: ["so"], hint: "so can = тоже может" },
        { q: "\"Will it rain?\" \"I hope ___ .\"", a: ["not"], hint: "hope not замещает clause" },
        { q: "He likes coffee and I do ___ .", a: ["too", "as well"], hint: "too = тоже" },
        { q: "\"Are you coming?\" \"I think ___ .\"", a: ["so"], hint: "think so" },
        { q: "Some people left early; ___ stayed all night.", a: ["others"], hint: "others замещает people" }
      ]
    },
    {
      id: "gr-C2-04",
      title: "Fronting & Marked Word Order",
      murphy: "Advanced Grammar in Use, Unit 97",
      topic: "Вынос в начало предложения",
      items: [
        { q: "___ the garden ran a small stream. (through)", a: ["through"], hint: "вынос обстоятельства места" },
        { q: "So tired was she that she ___ asleep at once.", a: ["fell"], hint: "результат после fronting" },
        { q: "Such ___ his anger that he slammed the door.", a: ["was"], hint: "Such + was + his anger" },
        { q: "Little ___ they know what awaited them.", a: ["did"], hint: "Little did + S" },
        { q: "Down ___ the rain in torrents. (come)", a: ["came"], hint: "Down came the rain (инверсия)" },
        { q: "Gone ___ the days when life was simple.", a: ["are"], hint: "Gone are the days" }
      ]
    },
    {
      id: "gr-C2-05",
      title: "Hedging & Cautious Language",
      murphy: "Advanced Grammar in Use, Unit 31",
      topic: "Осторожный, смягчённый язык",
      items: [
        { q: "The results ___ to suggest a link between the two.", a: ["seem", "appear", "tend"], hint: "смягчение → seem/appear" },
        { q: "It ___ that the policy may need revision.", a: ["appears", "seems"], hint: "It appears that" },
        { q: "This is ___ to be the main cause of the issue.", a: ["likely", "thought", "believed"], hint: "осторожный вывод" },
        { q: "The data ___ indicate a slight improvement.", a: ["may", "might", "could"], hint: "модальное смягчение" },
        { q: "There is ___ some evidence for this claim.", a: ["arguably", "perhaps", "possibly"], hint: "хедж-наречие" },
        { q: "One ___ argue that the approach is flawed.", a: ["could", "might"], hint: "One could argue (смягчение мнения)" }
      ]
    },
    {
      id: "gr-C2-06",
      title: "Nuanced Aspect & Tense",
      murphy: "Advanced Grammar in Use, Unit 11",
      topic: "Тонкие различия вида и времени",
      items: [
        { q: "I ___ been meaning to call you for weeks.", a: ["have", "'ve"], hint: "длительное намерение → Present Perfect Cont." },
        { q: "By the end of the year she ___ been teaching for a decade.", a: ["will have"], hint: "Future Perfect Continuous" },
        { q: "He ___ have been working when the accident happened.", a: ["must"], hint: "вывод о процессе в прошлом" },
        { q: "I'm always ___ my keys; it drives me mad!", a: ["losing"], hint: "always + -ing = раздражение" },
        { q: "They ___ have been living there since before the war.", a: ["may", "might", "could"], hint: "предположение о длительности" },
        { q: "She ___ to have known the answer all along.", a: ["seems", "appears"], hint: "seems to have known" }
      ]
    },
    {
      id: "gr-C2-07",
      title: "Idiomatic & Complex Structures",
      murphy: "Advanced Grammar in Use, Unit 88",
      topic: "Идиоматические и сложные конструкции",
      items: [
        { q: "No matter ___ hard he tries, he never succeeds.", a: ["how"], hint: "No matter how" },
        { q: "The harder you work, ___ more you achieve.", a: ["the"], hint: "the ... the ... сравнение" },
        { q: "I would sooner walk ___ wait for the bus.", a: ["than"], hint: "would sooner ... than" },
        { q: "What with the noise ___ the heat, I couldn't sleep.", a: ["and"], hint: "what with ... and ..." },
        { q: "Be that ___ it may, we must proceed.", a: ["as"], hint: "Be that as it may" },
        { q: "Come what ___ , I will support you.", a: ["may"], hint: "Come what may = что бы ни случилось" }
      ]
    },
    {
      id: "gr-C2-08",
      title: "Advanced Passive & Causatives",
      murphy: "Advanced Grammar in Use, Unit 46",
      topic: "Сложный пассив и каузативные конструкции",
      items: [
        { q: "It is ___ that the talks will resume soon. (say)", a: ["said"], hint: "It is said that (безличный пассив)" },
        { q: "He is ___ to be the best lawyer in town. (believe)", a: ["believed"], hint: "He is believed to be" },
        { q: "I had my car ___ yesterday. (repair)", a: ["repaired"], hint: "have something + V3 (каузатив)" },
        { q: "She got her hair ___ for the wedding. (cut)", a: ["cut"], hint: "get something + V3" },
        { q: "The minister is ___ to have resigned. (report)", a: ["reported"], hint: "is reported to have" },
        { q: "We had the documents ___ to the office. (send)", a: ["sent"], hint: "had ... sent (каузатив)" }
      ]
    }
  ]);
})();
