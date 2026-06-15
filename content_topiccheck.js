(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => {
    C[track] = C[track] || {};
    C[track][lvl] = C[track][lvl] || [];
    arr.forEach(x => C[track][lvl].push(x));
  };

  P("topicCheck", "A2", [
    {
      id: "tc-A2-01",
      title: "Проверка: Глагол to be",
      questions: [
        { q: "She ___ my best friend.", options: ["is", "are", "am"], answer: 0 },
        { q: "We ___ at school now.", options: ["is", "are", "be"], answer: 1 },
        { q: "I ___ ten years old.", options: ["is", "are", "am"], answer: 2 },
        { q: "They ___ not hungry.", options: ["are", "is", "am"], answer: 0 }
      ]
    },
    {
      id: "tc-A2-02",
      title: "Проверка: Present Simple",
      questions: [
        { q: "He ___ football every day.", options: ["play", "plays", "playing"], answer: 1 },
        { q: "I ___ like cold tea.", options: ["doesn't", "don't", "not"], answer: 1 },
        { q: "___ she live in London?", options: ["Do", "Does", "Is"], answer: 1 },
        { q: "Cats ___ milk.", options: ["drinks", "drink", "drinking"], answer: 1 }
      ]
    },
    {
      id: "tc-A2-03",
      title: "Проверка: Артикли",
      questions: [
        { q: "I have ___ apple in my bag.", options: ["a", "an", "the"], answer: 1 },
        { q: "She is ___ teacher.", options: ["a", "an", "the"], answer: 0 },
        { q: "Look at ___ moon tonight!", options: ["a", "an", "the"], answer: 2 }
      ]
    },
    {
      id: "tc-A2-04",
      title: "Проверка: Множественное число",
      questions: [
        { q: "I see three ___.", options: ["childs", "children", "childrens"], answer: 1 },
        { q: "There are two ___ on the table.", options: ["box", "boxs", "boxes"], answer: 2 },
        { q: "He has many ___.", options: ["toy", "toys", "toyes"], answer: 1 },
        { q: "Two ___ are running.", options: ["mouse", "mouses", "mice"], answer: 2 }
      ]
    }
  ]);

  P("topicCheck", "B1", [
    {
      id: "tc-B1-01",
      title: "Проверка: Времена (Past и Present)",
      questions: [
        { q: "Yesterday I ___ to the park.", options: ["go", "went", "gone"], answer: 1 },
        { q: "Right now she ___ a book.", options: ["reads", "is reading", "read"], answer: 1 },
        { q: "Every morning he ___ coffee.", options: ["drinks", "is drinking", "drank"], answer: 0 }
      ]
    },
    {
      id: "tc-B1-02",
      title: "Проверка: Present Perfect",
      questions: [
        { q: "I ___ already finished my homework.", options: ["have", "has", "had"], answer: 0 },
        { q: "She ___ never been to Paris.", options: ["have", "has", "is"], answer: 1 },
        { q: "We ___ lived here since 2020.", options: ["have", "are", "did"], answer: 0 },
        { q: "Have you ___ this film?", options: ["see", "saw", "seen"], answer: 2 }
      ]
    },
    {
      id: "tc-B1-03",
      title: "Проверка: Степени сравнения",
      questions: [
        { q: "This box is ___ than that one.", options: ["heavy", "heavier", "heaviest"], answer: 1 },
        { q: "She is the ___ student in class.", options: ["good", "better", "best"], answer: 2 },
        { q: "Today is ___ than yesterday.", options: ["hot", "hotter", "hottest"], answer: 1 }
      ]
    },
    {
      id: "tc-B1-04",
      title: "Проверка: Условные предложения (0/1) и модальные",
      questions: [
        { q: "If you heat ice, it ___.", options: ["melts", "will melt", "melted"], answer: 0 },
        { q: "If it rains tomorrow, we ___ stay home.", options: ["will", "would", "are"], answer: 0 },
        { q: "You ___ wear a helmet when cycling.", options: ["should", "would", "are"], answer: 0 },
        { q: "She ___ speak three languages.", options: ["can", "must to", "should to"], answer: 0 }
      ]
    }
  ]);

  P("topicCheck", "B2", [
    {
      id: "tc-B2-01",
      title: "Проверка: Страдательный залог",
      questions: [
        { q: "The cake ___ by my mother.", options: ["baked", "was baked", "is baking"], answer: 1 },
        { q: "English ___ all over the world.", options: ["speaks", "is spoken", "speaking"], answer: 1 },
        { q: "The bridge ___ next year.", options: ["will build", "will be built", "is built"], answer: 1 }
      ]
    },
    {
      id: "tc-B2-02",
      title: "Проверка: Косвенная речь",
      questions: [
        { q: "She said she ___ tired.", options: ["is", "was", "be"], answer: 1 },
        { q: "He told me he ___ finished.", options: ["has", "had", "have"], answer: 1 },
        { q: "They asked where I ___.", options: ["live", "lived", "living"], answer: 1 },
        { q: "She asked if I ___ help her.", options: ["can", "could", "will"], answer: 1 }
      ]
    },
    {
      id: "tc-B2-03",
      title: "Проверка: Условные предложения (2/3)",
      questions: [
        { q: "If I ___ rich, I would travel the world.", options: ["am", "were", "will be"], answer: 1 },
        { q: "If she had studied, she ___ passed.", options: ["would have", "would", "will have"], answer: 0 },
        { q: "I would call him if I ___ his number.", options: ["have", "had", "will have"], answer: 1 }
      ]
    },
    {
      id: "tc-B2-04",
      title: "Проверка: Относительные придаточные",
      questions: [
        { q: "The man ___ lives next door is a doctor.", options: ["who", "which", "whose"], answer: 0 },
        { q: "This is the book ___ I told you about.", options: ["who", "which", "whose"], answer: 1 },
        { q: "She is the girl ___ bag was stolen.", options: ["who", "which", "whose"], answer: 2 },
        { q: "That's the house ___ I was born.", options: ["where", "which", "who"], answer: 0 }
      ]
    }
  ]);

  P("topicCheck", "C1", [
    {
      id: "tc-C1-01",
      title: "Проверка: Инверсия",
      questions: [
        { q: "Never ___ I seen such a beautiful view.", options: ["have", "had", "did"], answer: 0 },
        { q: "Not only ___ he late, but he also forgot the keys.", options: ["was", "is", "did"], answer: 0 },
        { q: "Rarely ___ we get such an opportunity.", options: ["do", "does", "are"], answer: 0 }
      ]
    },
    {
      id: "tc-C1-02",
      title: "Проверка: Расщеплённые предложения (cleft)",
      questions: [
        { q: "___ was John who broke the window.", options: ["It", "There", "That"], answer: 0 },
        { q: "What I need ___ a long holiday.", options: ["is", "are", "be"], answer: 0 },
        { q: "It was in Paris ___ they first met.", options: ["that", "which", "who"], answer: 0 },
        { q: "All ___ I want is some peace.", options: ["that", "what", "which"], answer: 0 }
      ]
    },
    {
      id: "tc-C1-03",
      title: "Проверка: Причастные обороты",
      questions: [
        { q: "___ the door, she went out.", options: ["Locking", "Locked", "To lock"], answer: 0 },
        { q: "___ in 1900, the house is very old.", options: ["Building", "Built", "To build"], answer: 1 },
        { q: "___ his work, he left the office.", options: ["Having finished", "Finishing to", "To finish"], answer: 0 }
      ]
    },
    {
      id: "tc-C1-04",
      title: "Проверка: Инверсия в условиях",
      questions: [
        { q: "___ I known, I would have helped.", options: ["Had", "Have", "If had"], answer: 0 },
        { q: "___ you need anything, just call.", options: ["Should", "Would", "Could"], answer: 0 },
        { q: "___ it not for you, I would have failed.", options: ["Were", "Was", "Had"], answer: 0 },
        { q: "No sooner ___ he arrived than it started to rain.", options: ["had", "has", "did"], answer: 0 }
      ]
    }
  ]);

  P("topicCheck", "C2", [
    {
      id: "tc-C2-01",
      title: "Проверка: Сослагательное наклонение (subjunctive)",
      questions: [
        { q: "I suggest that he ___ present at the meeting.", options: ["be", "is", "was"], answer: 0 },
        { q: "It is essential that she ___ on time.", options: ["arrive", "arrives", "arrived"], answer: 0 },
        { q: "The doctor recommended that he ___ smoking.", options: ["stop", "stops", "stopped"], answer: 0 }
      ]
    },
    {
      id: "tc-C2-02",
      title: "Проверка: Конструкции с wish / if only",
      questions: [
        { q: "I wish I ___ taller.", options: ["were", "am", "will be"], answer: 0 },
        { q: "If only I ___ listened to your advice!", options: ["had", "have", "would have"], answer: 0 },
        { q: "I wish you ___ stop making noise.", options: ["would", "will", "are"], answer: 0 },
        { q: "She wishes she ___ studied medicine.", options: ["had", "has", "would"], answer: 0 }
      ]
    },
    {
      id: "tc-C2-03",
      title: "Проверка: Продвинутые модальные конструкции",
      questions: [
        { q: "He ___ have left already; his car is gone.", options: ["must", "should", "can"], answer: 0 },
        { q: "You ___ have told me earlier!", options: ["might", "could", "should"], answer: 2 },
        { q: "She can't have done it; she ___ have been at home.", options: ["must", "should", "would"], answer: 0 }
      ]
    },
    {
      id: "tc-C2-04",
      title: "Проверка: Эмфатические и сложные структуры",
      questions: [
        { q: "Such ___ his anger that he could not speak.", options: ["was", "is", "did"], answer: 0 },
        { q: "So beautiful ___ the sunset that we stopped to watch.", options: ["was", "did", "had"], answer: 0 },
        { q: "Little ___ they know what awaited them.", options: ["did", "do", "had"], answer: 0 },
        { q: "Hardly ___ I sat down when the phone rang.", options: ["had", "have", "did"], answer: 0 }
      ]
    }
  ]);
})();
