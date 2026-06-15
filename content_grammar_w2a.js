(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => {
    C[track] = C[track] || {};
    C[track][lvl] = C[track][lvl] || [];
    arr.forEach(x => C[track][lvl].push(x));
  };

  // ===================== A2 — дополнительные темы =====================
  P("grammar", "A2", [
    {
      id: "g2a-A2-01",
      title: "Object pronouns: me, him, her, us, them",
      murphy: "Essential Grammar in Use, Units 56–57",
      topic: "Объектные местоимения (дополнение)",
      items: [
        { q: "This is my sister. Do you know ___?", a: ["her"], hint: "сестра → her" },
        { q: "I like Tom, but he never calls ___.", a: ["me"], hint: "звонит мне → me" },
        { q: "These flowers are for you. I bought ___ at the market.", a: ["them"], hint: "цветы → them" },
        { q: "Mr Lee is our teacher. We all respect ___.", a: ["him"], hint: "его (учителя) → him" },
        { q: "Come and join ___ at the table.", a: ["us"], hint: "к нам → us" },
        { q: "That cake looks great. Can I try ___?", a: ["it"], hint: "торт → it" }
      ]
    },
    {
      id: "g2a-A2-02",
      title: "this / that / these / those",
      murphy: "Essential Grammar in Use, Units 74–75",
      topic: "Указательные местоимения",
      items: [
        { q: "___ book in my hand is really interesting.", a: ["this"], hint: "одно, рядом → this" },
        { q: "Look at ___ stars in the sky tonight.", a: ["those"], hint: "много, далеко → those" },
        { q: "Can you pass me ___ apples on the table here?", a: ["these"], hint: "много, рядом → these" },
        { q: "Who is ___ man over there by the door?", a: ["that"], hint: "один, далеко → that" },
        { q: "I love ___ shoes I'm wearing right now.", a: ["these"], hint: "обувь рядом, мн.ч. → these" },
        { q: "___ mountains far away are covered with snow.", a: ["those"], hint: "далеко, мн.ч. → those" }
      ]
    },
    {
      id: "g2a-A2-03",
      title: "have got / has got",
      murphy: "Essential Grammar in Use, Units 9–10",
      topic: "Конструкция have got (обладание)",
      items: [
        { q: "She ___ got two cats and a dog at home.", a: ["has"], hint: "she → has got" },
        { q: "We ___ got enough time before the train leaves.", a: ["have"], hint: "we → have got" },
        { q: "___ you got a pen I could borrow?", a: ["have"], hint: "вопрос с you → Have ... got" },
        { q: "My laptop ___ got a really long battery life.", a: ["has"], hint: "it → has got" },
        { q: "They ___ got a big house near the river.", a: ["have"], hint: "they → have got" },
        { q: "He ___ got any brothers or sisters.", a: ["hasn't", "has not"], hint: "отрицание he → hasn't got" }
      ]
    },
    {
      id: "g2a-A2-04",
      title: "Frequency adverbs: always, usually, never",
      murphy: "Essential Grammar in Use, Unit 8",
      topic: "Наречия частоты и их место в предложении",
      items: [
        { q: "I ___ drink coffee in the morning, every single day.", a: ["always"], hint: "всегда → always" },
        { q: "She is ___ late; she comes on time.", a: ["never"], hint: "никогда → never" },
        { q: "We ___ go to the cinema on Fridays, like most weeks.", a: ["usually"], hint: "обычно → usually" },
        { q: "He ___ eats fast food, maybe once a month.", a: ["rarely", "seldom"], hint: "редко → rarely" },
        { q: "They are ___ friendly to new students.", a: ["always"], hint: "после to be → always" },
        { q: "I ___ play tennis, about twice a week.", a: ["often", "sometimes"], hint: "часто → often" }
      ]
    },
    {
      id: "g2a-A2-05",
      title: "was / were (Past Simple of be)",
      murphy: "Essential Grammar in Use, Units 11–12",
      topic: "Глагол to be в прошедшем времени",
      items: [
        { q: "I ___ at the party last night until midnight.", a: ["was"], hint: "I → was" },
        { q: "They ___ very tired after the long walk.", a: ["were"], hint: "they → were" },
        { q: "The film ___ boring, so we left early.", a: ["was"], hint: "it → was" },
        { q: "___ you at school yesterday morning?", a: ["were"], hint: "вопрос с you → were" },
        { q: "We ___ not ready when the guests arrived.", a: ["were", "weren't", "were not"], hint: "we → were" },
        { q: "My grandmother ___ a teacher many years ago.", a: ["was"], hint: "she → was" }
      ]
    },
    {
      id: "g2a-A2-06",
      title: "Prepositions of movement: to, into, across",
      murphy: "Essential Grammar in Use, Units 104–105",
      topic: "Предлоги движения и направления",
      items: [
        { q: "Every day I walk ___ school with my friends.", a: ["to"], hint: "движение к месту → to" },
        { q: "The cat jumped ___ the box and hid inside.", a: ["into"], hint: "внутрь → into" },
        { q: "We swam ___ the river to reach the other side.", a: ["across"], hint: "поперёк, на другую сторону → across" },
        { q: "She ran ___ the stairs because she was late.", a: ["down", "up"], hint: "вниз по лестнице → down" },
        { q: "The plane flew ___ the clouds during the storm.", a: ["through"], hint: "сквозь → through" },
        { q: "He climbed ___ the wall to get the ball back.", a: ["over"], hint: "через верх → over" }
      ]
    },
    {
      id: "g2a-A2-07",
      title: "Imperatives: commands and instructions",
      murphy: "Essential Grammar in Use, Unit 36",
      topic: "Повелительное наклонение",
      items: [
        { q: "___ quiet, please. The baby is sleeping.", a: ["be"], hint: "будь тихим → Be" },
        { q: "Please ___ the door when you leave the room.", a: ["close", "shut"], hint: "закрой дверь → Close" },
        { q: "Don't ___ on the grass; use the path instead.", a: ["walk", "step"], hint: "не ходи → walk (после don't)" },
        { q: "___ careful! The floor is wet over there.", a: ["be"], hint: "будь осторожен → Be" },
        { q: "___ me a glass of water, please.", a: ["give", "bring", "get"], hint: "дай мне → Give" },
        { q: "Don't ___ late for the meeting tomorrow.", a: ["be"], hint: "не опаздывай → be (после don't)" }
      ]
    },
    {
      id: "g2a-A2-08",
      title: "How much / How many",
      murphy: "Essential Grammar in Use, Units 84–85",
      topic: "Исчисляемые и неисчисляемые существительные",
      items: [
        { q: "How ___ eggs do we need for the cake?", a: ["many"], hint: "яйца исчисляемые → many" },
        { q: "How ___ water is left in the bottle?", a: ["much"], hint: "вода неисчисляемая → much" },
        { q: "How ___ money did you spend at the shop?", a: ["much"], hint: "деньги неисчисляемые → much" },
        { q: "How ___ people came to the concert last night?", a: ["many"], hint: "люди исчисляемые → many" },
        { q: "How ___ sugar do you take in your tea?", a: ["much"], hint: "сахар неисчисляемый → much" },
        { q: "How ___ books are there on that shelf?", a: ["many"], hint: "книги исчисляемые → many" }
      ]
    },
    {
      id: "g2a-A2-09",
      title: "like / love / hate + -ing",
      murphy: "Essential Grammar in Use, Unit 53",
      topic: "Глаголы предпочтения с герундием",
      items: [
        { q: "I really enjoy ___ to music in the evening.", a: ["listening"], hint: "listen + ing" },
        { q: "She loves ___ in the sea on hot days.", a: ["swimming"], hint: "swim → swimming" },
        { q: "We hate ___ up early on cold mornings.", a: ["getting", "waking"], hint: "get + ing → getting" },
        { q: "He doesn't like ___ his homework on Sundays.", a: ["doing"], hint: "do → doing" },
        { q: "They love ___ board games with their friends.", a: ["playing"], hint: "play + ing" },
        { q: "I don't mind ___ at home when it rains.", a: ["staying"], hint: "stay + ing" }
      ]
    },
    {
      id: "g2a-A2-10",
      title: "going to for plans and intentions",
      murphy: "Essential Grammar in Use, Units 26–27",
      topic: "Будущее: be going to (планы)",
      items: [
        { q: "I ___ going to visit my cousins next weekend.", a: ["am", "'m"], hint: "I → am going to" },
        { q: "She is going to ___ a new phone with her savings.", a: ["buy"], hint: "going to + инфинитив → buy" },
        { q: "We ___ going to travel to Italy this summer.", a: ["are"], hint: "we → are going to" },
        { q: "What ___ you going to do after the exam?", a: ["are"], hint: "вопрос с you → are going to" },
        { q: "They are going to ___ a party for his birthday.", a: ["have", "throw", "organise", "organize"], hint: "going to + инфинитив → have" },
        { q: "It ___ going to rain, so take an umbrella.", a: ["is", "'s"], hint: "it → is going to" }
      ]
    }
  ]);

  // ===================== B1 — дополнительные темы =====================
  P("grammar", "B1", [
    {
      id: "g2a-B1-01",
      title: "Question tags",
      murphy: "English Grammar in Use, Unit 51",
      topic: "Разделительные вопросы (хвостики)",
      items: [
        { q: "You live in Madrid, ___ you?", a: ["don't"], hint: "утверждение → отрицательный хвостик don't" },
        { q: "She isn't coming to the party, ___ she?", a: ["is"], hint: "отрицание → положительный хвостик is" },
        { q: "They have finished the project, ___ they?", a: ["haven't"], hint: "have → haven't" },
        { q: "He can drive a car, ___ he?", a: ["can't"], hint: "can → can't" },
        { q: "We didn't lock the door, ___ we?", a: ["did"], hint: "didn't → did" },
        { q: "It's a beautiful day, ___ it?", a: ["isn't"], hint: "is → isn't" }
      ]
    },
    {
      id: "g2a-B1-02",
      title: "so / such",
      murphy: "English Grammar in Use, Unit 102",
      topic: "Усиление: so + прилагательное, such + сущ.",
      items: [
        { q: "The exam was ___ difficult that nobody passed.", a: ["so"], hint: "so + прилагательное → so" },
        { q: "It was ___ a long day that I fell asleep early.", a: ["such"], hint: "such + a + сущ. → such" },
        { q: "She speaks ___ quickly that I can't follow her.", a: ["so"], hint: "so + наречие → so" },
        { q: "They are ___ kind people; everyone likes them.", a: ["such"], hint: "such + сущ. (мн.ч.) → such" },
        { q: "The coffee was ___ hot that I burned my tongue.", a: ["so"], hint: "so + прилагательное → so" },
        { q: "We had ___ a great time at the festival.", a: ["such"], hint: "such + a + сущ. → such" }
      ]
    },
    {
      id: "g2a-B1-03",
      title: "too / enough",
      murphy: "English Grammar in Use, Unit 105",
      topic: "Степень: слишком / достаточно",
      items: [
        { q: "This coat is ___ small for me; I need a bigger one.", a: ["too"], hint: "слишком + прилаг. → too" },
        { q: "She isn't tall ___ to reach the top shelf.", a: ["enough"], hint: "прилаг. + enough → enough" },
        { q: "We don't have ___ money to buy the tickets.", a: ["enough"], hint: "enough + сущ. → enough" },
        { q: "The soup is ___ salty for me to eat.", a: ["too"], hint: "слишком + прилаг. → too" },
        { q: "He is old ___ to vote in the next election.", a: ["enough"], hint: "прилаг. + enough → enough" },
        { q: "It's ___ late to call them now; they're asleep.", a: ["too"], hint: "слишком + прилаг. → too" }
      ]
    },
    {
      id: "g2a-B1-04",
      title: "First conditional variations",
      murphy: "English Grammar in Use, Units 38–40",
      topic: "Первый тип условных (if / unless / when)",
      items: [
        { q: "If it rains tomorrow, we ___ stay at home.", a: ["will", "'ll"], hint: "результат → will + инфинитив" },
        { q: "I won't go to the beach unless the weather ___ better.", a: ["gets", "is"], hint: "после unless → Present Simple" },
        { q: "When she ___ here, I'll tell her the news.", a: ["arrives", "comes", "gets"], hint: "после when → Present Simple" },
        { q: "If you ___ hard, you'll pass the exam easily.", a: ["study", "work"], hint: "условие → Present Simple" },
        { q: "We'll miss the train if we ___ now.", a: ["don't hurry", "do not hurry"], hint: "отрицательное условие → don't + глагол" },
        { q: "Unless you call him, he ___ know about the change.", a: ["won't", "will not"], hint: "результат отриц. → won't" }
      ]
    },
    {
      id: "g2a-B1-05",
      title: "Present Perfect vs Past Simple",
      murphy: "English Grammar in Use, Units 19–20",
      topic: "Настоящее совершённое и прошедшее простое",
      items: [
        { q: "I ___ already finished my homework, so I'm free now.", a: ["have", "'ve"], hint: "have + already → Present Perfect" },
        { q: "She ___ to Paris last summer with her family.", a: ["went"], hint: "last summer → Past Simple" },
        { q: "We ___ never seen such a beautiful sunset before.", a: ["have", "'ve"], hint: "never + опыт → Present Perfect" },
        { q: "He ___ his keys yesterday and couldn't get in.", a: ["lost"], hint: "yesterday → Past Simple" },
        { q: "Have you ever ___ sushi in your life?", a: ["eaten", "tried", "had"], hint: "ever + опыт → Present Perfect (3-я форма)" },
        { q: "They ___ the film two weeks ago at the cinema.", a: ["watched", "saw"], hint: "two weeks ago → Past Simple" }
      ]
    },
    {
      id: "g2a-B1-06",
      title: "Defining relative clauses: who / which / that",
      murphy: "English Grammar in Use, Units 92–93",
      topic: "Определительные придаточные предложения",
      items: [
        { q: "The woman ___ lives next door is a doctor.", a: ["who", "that"], hint: "о человеке → who" },
        { q: "This is the book ___ won the big prize last year.", a: ["which", "that"], hint: "о предмете → which" },
        { q: "The man ___ car was stolen called the police.", a: ["whose"], hint: "принадлежность → whose" },
        { q: "I met a girl ___ speaks five languages fluently.", a: ["who", "that"], hint: "о человеке → who" },
        { q: "The restaurant ___ we visited was very expensive.", a: ["which", "that"], hint: "о месте/предмете → which" },
        { q: "She works for a company ___ makes electric cars.", a: ["which", "that"], hint: "о компании (предмет) → which" }
      ]
    },
    {
      id: "g2a-B1-07",
      title: "Verbs + prepositions",
      murphy: "English Grammar in Use, Units 134–136",
      topic: "Глаголы с предлогами",
      items: [
        { q: "I'm really looking forward ___ seeing you again.", a: ["to"], hint: "look forward to → to" },
        { q: "She apologised ___ being late to the meeting.", a: ["for"], hint: "apologise for → for" },
        { q: "We need to concentrate ___ the most important tasks.", a: ["on"], hint: "concentrate on → on" },
        { q: "He always complains ___ the weather in winter.", a: ["about"], hint: "complain about → about" },
        { q: "You can rely ___ her; she never lets you down.", a: ["on"], hint: "rely on → on" },
        { q: "They insisted ___ paying for the whole dinner.", a: ["on"], hint: "insist on → on" }
      ]
    },
    {
      id: "g2a-B1-08",
      title: "make / do",
      murphy: "Collocations: make & do",
      topic: "Различие make и do",
      items: [
        { q: "Could you ___ me a favour this afternoon?", a: ["do"], hint: "do a favour → do" },
        { q: "I need to ___ a decision before Friday.", a: ["make"], hint: "make a decision → make" },
        { q: "She has to ___ the housework every weekend.", a: ["do"], hint: "do the housework → do" },
        { q: "Please don't ___ so much noise; people are working.", a: ["make"], hint: "make noise → make" },
        { q: "He wants to ___ progress in his English studies.", a: ["make"], hint: "make progress → make" },
        { q: "We should ___ some research before we decide.", a: ["do"], hint: "do research → do" }
      ]
    },
    {
      id: "g2a-B1-09",
      title: "say / tell",
      murphy: "English Grammar in Use, Unit 47",
      topic: "Различие say и tell",
      items: [
        { q: "Can you ___ me what time the shop opens?", a: ["tell"], hint: "tell + человек → tell" },
        { q: "She didn't ___ anything about her new job.", a: ["say"], hint: "say + что-то (без адресата) → say" },
        { q: "He ___ us a funny story about his holiday.", a: ["told"], hint: "tell + кому (прош.) → told" },
        { q: "Please ___ the truth; I won't be angry.", a: ["tell"], hint: "tell the truth → tell" },
        { q: "What did the teacher ___ during the lesson?", a: ["say"], hint: "say (без адресата) → say" },
        { q: "Could you ___ goodbye to your parents for me?", a: ["say"], hint: "say goodbye → say" }
      ]
    },
    {
      id: "g2a-B1-10",
      title: "both / either / neither",
      murphy: "English Grammar in Use, Units 89–90",
      topic: "Выбор из двух: both / either / neither",
      items: [
        { q: "___ of my parents are doctors at the same hospital.", a: ["both"], hint: "оба → both (+ are)" },
        { q: "You can take ___ road; they both lead to town.", a: ["either"], hint: "любой из двух → either" },
        { q: "___ of the answers is correct, so try again.", a: ["neither"], hint: "ни один из двух → neither (+ is)" },
        { q: "I like ___ tea and coffee in the morning.", a: ["both"], hint: "both ... and → both" },
        { q: "She doesn't speak ___ French or German.", a: ["either"], hint: "после отрицания → either ... or" },
        { q: "___ of the twins wanted to share the toy.", a: ["neither"], hint: "ни один → neither" }
      ]
    },
    {
      id: "g2a-B1-11",
      title: "a few / a little",
      murphy: "English Grammar in Use, Units 87–88",
      topic: "Количество с исчисляемыми и неисчисляемыми",
      items: [
        { q: "I have ___ friends in this city, only two or three.", a: ["a few"], hint: "исчисляемые → a few" },
        { q: "There is only ___ milk left in the fridge.", a: ["a little"], hint: "неисчисляемое → a little" },
        { q: "We need ___ more chairs for the extra guests.", a: ["a few"], hint: "стулья исчисляемые → a few" },
        { q: "Add ___ salt to the soup; it needs more flavour.", a: ["a little"], hint: "соль неисчисляемая → a little" },
        { q: "She knows ___ words in Japanese after her trip.", a: ["a few"], hint: "слова исчисляемые → a few" },
        { q: "I have ___ free time today, just an hour or so.", a: ["a little"], hint: "время неисчисляемое → a little" }
      ]
    },
    {
      id: "g2a-B1-12",
      title: "Adverbs of manner",
      murphy: "English Grammar in Use, Units 98–99",
      topic: "Наречия образа действия",
      items: [
        { q: "He drives very ___ and always obeys the speed limit.", a: ["carefully"], hint: "careful → carefully" },
        { q: "She sang the song so ___ that everyone clapped.", a: ["beautifully"], hint: "beautiful → beautifully" },
        { q: "Please speak ___ so the children can understand.", a: ["slowly", "clearly"], hint: "slow → slowly" },
        { q: "The team worked ___ and finished ahead of time.", a: ["hard"], hint: "усердно → hard (без -ly)" },
        { q: "He answered the question ___ without any mistakes.", a: ["correctly"], hint: "correct → correctly" },
        { q: "They waited ___ for the doctor to call their name.", a: ["patiently", "quietly"], hint: "patient → patiently" }
      ]
    }
  ]);
})();
