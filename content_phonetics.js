(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => {
    C[track] = C[track] || {};
    C[track][lvl] = C[track][lvl] || [];
    arr.forEach(x => C[track][lvl].push(x));
  };

  // ===== A2 — базовые гласные и согласные =====
  P("phonetics", "A2", [
    {
      id: "ph2-A2-01",
      title: "/iː/ vs /ɪ/ — long vs short",
      source: "English Pronunciation in Use — Elementary, Unit 2",
      note: "Долгий /iː/ — губы растянуты в улыбку, язык высоко и напряжён, звук тянется (как в «sheep»). Короткий /ɪ/ — губы расслаблены, язык чуть ниже, звук резкий и быстрый (как в «ship»). Не подменяй короткий звук русским «и».",
      examples: [
        { w: "sheep", ipa: "/ʃiːp/" },
        { w: "ship", ipa: "/ʃɪp/" },
        { w: "seat", ipa: "/siːt/" },
        { w: "sit", ipa: "/sɪt/" },
        { w: "green", ipa: "/ɡriːn/" }
      ],
      pairs: [
        ["ship", "sheep"],
        ["sit", "seat"],
        ["live", "leave"],
        ["bit", "beat"]
      ]
    },
    {
      id: "ph2-A2-02",
      title: "/æ/ vs /e/ — cat vs bed",
      source: "English Pronunciation in Use — Elementary, Unit 4",
      note: "/æ/ — широко открой рот, язык внизу спереди, звук между русскими «э» и «а» (как в «cat»). /e/ — рот открыт меньше, язык выше, чистое «э» (как в «bed»). Главное — для /æ/ опускать челюсть сильнее.",
      examples: [
        { w: "cat", ipa: "/kæt/" },
        { w: "bad", ipa: "/bæd/" },
        { w: "bed", ipa: "/bed/" },
        { w: "men", ipa: "/men/" },
        { w: "hand", ipa: "/hænd/" }
      ],
      pairs: [
        ["bad", "bed"],
        ["man", "men"],
        ["sat", "set"],
        ["had", "head"]
      ]
    },
    {
      id: "ph2-A2-03",
      title: "/ʌ/ vs /ɒ/ — cup vs cop",
      source: "English Pronunciation in Use — Elementary, Unit 6",
      note: "/ʌ/ — короткий звук, рот приоткрыт, язык в центре, похоже на безударное русское «а» в «вода» (как в «cup»). /ɒ/ — округли губы, язык назад и вниз, короткое открытое «о» (как в «hot»). Не путай: /ʌ/ без округления губ, /ɒ/ — с округлением.",
      examples: [
        { w: "cup", ipa: "/kʌp/" },
        { w: "but", ipa: "/bʌt/" },
        { w: "hot", ipa: "/hɒt/" },
        { w: "dog", ipa: "/dɒɡ/" },
        { w: "sock", ipa: "/sɒk/" }
      ],
      pairs: [
        ["cup", "cop"],
        ["cut", "cot"],
        ["luck", "lock"],
        ["nut", "not"]
      ]
    },
    {
      id: "ph2-A2-04",
      title: "/p/ /t/ /k/ — aspiration",
      source: "English Pronunciation in Use — Elementary, Unit 12",
      note: "В начале ударного слога /p/, /t/, /k/ произносятся с придыханием — лёгким выдохом воздуха после звука. Поднеси ладонь ко рту: должен чувствоваться толчок воздуха в «pen», «top», «cat». В русском такого придыхания нет, поэтому слова звучат «мягко» — добавляй выдох.",
      examples: [
        { w: "pen", ipa: "/pen/" },
        { w: "top", ipa: "/tɒp/" },
        { w: "cat", ipa: "/kæt/" },
        { w: "park", ipa: "/pɑːk/" },
        { w: "tea", ipa: "/tiː/" }
      ],
      pairs: [
        ["pin", "bin"],
        ["tie", "die"],
        ["coat", "goat"],
        ["pear", "bear"]
      ]
    }
  ]);

  // ===== B1 — трудные пары и th =====
  P("phonetics", "B1", [
    {
      id: "ph2-B1-01",
      title: "/θ/ vs /ð/ — th sounds",
      source: "English Pronunciation in Use — Intermediate, Unit 18",
      note: "Кончик языка между зубами (или к верхним зубам). /θ/ — глухой, без голоса, как в «think», «three». /ð/ — звонкий, с голосом, как в «this», «mother». Главная ошибка русскоговорящих — заменять на /s/-/z/ или /t/-/d/. Высунь язык чуть-чуть и пропусти воздух.",
      examples: [
        { w: "think", ipa: "/θɪŋk/" },
        { w: "three", ipa: "/θriː/" },
        { w: "this", ipa: "/ðɪs/" },
        { w: "mother", ipa: "/ˈmʌðə/" },
        { w: "bath", ipa: "/bɑːθ/" }
      ],
      pairs: [
        ["think", "sink"],
        ["thin", "tin"],
        ["three", "tree"],
        ["they", "day"]
      ]
    },
    {
      id: "ph2-B1-02",
      title: "/v/ vs /w/ — vet vs wet",
      source: "English Pronunciation in Use — Intermediate, Unit 20",
      note: "/v/ — верхние зубы касаются нижней губы, есть вибрация (как в «very»). /w/ — губы округлены и вытянуты трубочкой, зубы НЕ касаются губы, звук как короткое «у» переходящее в гласный (как в «west»). Русскоговорящие часто оба произносят как «в» — для /w/ не используй зубы вообще.",
      examples: [
        { w: "very", ipa: "/ˈveri/" },
        { w: "west", ipa: "/west/" },
        { w: "win", ipa: "/wɪn/" },
        { w: "voice", ipa: "/vɔɪs/" },
        { w: "water", ipa: "/ˈwɔːtə/" }
      ],
      pairs: [
        ["vet", "wet"],
        ["vine", "wine"],
        ["veil", "wail"],
        ["verse", "worse"]
      ]
    },
    {
      id: "ph2-B1-03",
      title: "/uː/ vs /ʊ/ — pool vs pull",
      source: "English Pronunciation in Use — Intermediate, Unit 8",
      note: "/uː/ — долгий, губы сильно округлены и вытянуты, язык высоко сзади, звук тянется (как в «food»). /ʊ/ — короткий и расслабленный, губы округлены слабее, язык чуть ниже (как в «good»). Не делай оба одинаково долгими — следи за длительностью и напряжением.",
      examples: [
        { w: "food", ipa: "/fuːd/" },
        { w: "moon", ipa: "/muːn/" },
        { w: "good", ipa: "/ɡʊd/" },
        { w: "book", ipa: "/bʊk/" },
        { w: "boot", ipa: "/buːt/" }
      ],
      pairs: [
        ["pool", "pull"],
        ["fool", "full"],
        ["Luke", "look"],
        ["suit", "soot"]
      ]
    },
    {
      id: "ph2-B1-04",
      title: "/r/ vs /l/ — right vs light",
      source: "English Pronunciation in Use — Intermediate, Unit 22",
      note: "/r/ — кончик языка поднят, но НЕ касается нёба и не дрожит (никакого русского раскатистого «р»); губы слегка округлены (как в «red»). /l/ — кончик языка прижат к бугоркам за верхними зубами, воздух идёт по бокам (как в «led»). Это разные движения языка — отрабатывай по отдельности.",
      examples: [
        { w: "red", ipa: "/red/" },
        { w: "right", ipa: "/raɪt/" },
        { w: "led", ipa: "/led/" },
        { w: "light", ipa: "/laɪt/" },
        { w: "room", ipa: "/ruːm/" }
      ],
      pairs: [
        ["right", "light"],
        ["red", "led"],
        ["rock", "lock"],
        ["fry", "fly"]
      ]
    }
  ]);

  // ===== B2 — ударение в словах =====
  P("phonetics", "B2", [
    {
      id: "ph2-B2-01",
      title: "Word stress — two-syllable words",
      source: "English Pronunciation in Use — Intermediate, Unit 49",
      note: "В двусложных словах ударный слог звучит громче, длиннее и выше; безударный — короче и часто с редуцированным /ə/. Многие существительные имеют ударение на первом слоге (TAble), глаголы — варьируются. Не произноси оба слога одинаково — выделяй один.",
      examples: [
        { w: "table", ipa: "/ˈteɪbl/" },
        { w: "water", ipa: "/ˈwɔːtə/" },
        { w: "about", ipa: "/əˈbaʊt/" },
        { w: "hotel", ipa: "/həʊˈtel/" },
        { w: "happy", ipa: "/ˈhæpi/" }
      ],
      pairs: [
        ["import", "import"],
        ["present", "present"],
        ["record", "record"],
        ["object", "object"]
      ]
    },
    {
      id: "ph2-B2-02",
      title: "Noun vs verb stress shift",
      source: "English Pronunciation in Use — Advanced, Unit 11",
      note: "Многие слова — существительное и глагол одновременно, но с разным ударением. Существительное: ударение на ПЕРВЫЙ слог (a REcord, /ˈrekɔːd/). Глагол: ударение на ВТОРОЙ слог (to reCORD, /rɪˈkɔːd/). Смена ударения меняет часть речи и значение — это важно для смысла.",
      examples: [
        { w: "record (n.)", ipa: "/ˈrekɔːd/" },
        { w: "record (v.)", ipa: "/rɪˈkɔːd/" },
        { w: "present (n.)", ipa: "/ˈprezənt/" },
        { w: "present (v.)", ipa: "/prɪˈzent/" },
        { w: "object (v.)", ipa: "/əbˈdʒekt/" }
      ],
      pairs: [
        ["export", "export"],
        ["contrast", "contrast"],
        ["produce", "produce"],
        ["increase", "increase"]
      ]
    },
    {
      id: "ph2-B2-03",
      title: "Stress in longer words & suffixes",
      source: "English Pronunciation in Use — Advanced, Unit 14",
      note: "Суффиксы сдвигают ударение по правилам. Перед -tion/-sion ударение падает на слог ПЕРЕД суффиксом (ediCAtion → no, eduCAtion). Перед -ity, -ical, -graphy тоже сдвиг (PHOto → phoTOgraphy). Слушай, на каком слоге «вершина», и не ставь ударение в конце по русской привычке.",
      examples: [
        { w: "education", ipa: "/ˌedʒuˈkeɪʃn/" },
        { w: "decision", ipa: "/dɪˈsɪʒn/" },
        { w: "ability", ipa: "/əˈbɪləti/" },
        { w: "photography", ipa: "/fəˈtɒɡrəfi/" },
        { w: "economic", ipa: "/ˌiːkəˈnɒmɪk/" }
      ],
      pairs: [
        ["photograph", "photographer"],
        ["economy", "economic"],
        ["history", "historical"],
        ["politics", "political"]
      ]
    },
    {
      id: "ph2-B2-04",
      title: "Compound noun stress",
      source: "English Pronunciation in Use — Advanced, Unit 18",
      note: "В сложных существительных (два слова как одно понятие) ударение обычно на ПЕРВОМ слове: a GREENhouse (теплица), a BLACKbird (дрозд). Сравни со свободным словосочетанием, где ударение более равномерное: a green HOUSE (зелёный дом). Положение ударения различает значение.",
      examples: [
        { w: "greenhouse", ipa: "/ˈɡriːnhaʊs/" },
        { w: "blackbird", ipa: "/ˈblækbɜːd/" },
        { w: "bedroom", ipa: "/ˈbedruːm/" },
        { w: "bookshop", ipa: "/ˈbʊkʃɒp/" },
        { w: "haircut", ipa: "/ˈheəkʌt/" }
      ],
      pairs: [
        ["greenhouse", "greenhouse"],
        ["blackboard", "blackboard"],
        ["darkroom", "darkroom"],
        ["whiteboard", "whiteboard"]
      ]
    }
  ]);

  // ===== C1 — слабые формы и связная речь =====
  P("phonetics", "C1", [
    {
      id: "ph2-C1-01",
      title: "Weak forms — schwa /ə/",
      source: "English Pronunciation in Use — Advanced, Unit 23",
      note: "Служебные слова (and, to, of, for, can, was) в потоке речи теряют ударение и редуцируются до /ə/: «and» → /ən/, «to» → /tə/, «for» → /fə/. Это норма, а не небрежность. Произнесение их «полностью» звучит роботично. Прячь гласную в безударных словах.",
      examples: [
        { w: "and", ipa: "/ən/" },
        { w: "to", ipa: "/tə/" },
        { w: "of", ipa: "/əv/" },
        { w: "for", ipa: "/fə/" },
        { w: "can", ipa: "/kən/" }
      ],
      pairs: [
        ["can", "can"],
        ["that", "that"],
        ["was", "was"],
        ["are", "are"]
      ]
    },
    {
      id: "ph2-C1-02",
      title: "Linking — consonant to vowel",
      source: "English Pronunciation in Use — Advanced, Unit 27",
      note: "Когда слово кончается на согласный, а следующее начинается с гласного, согласный «переезжает» к следующему слову: «an apple» → /ə‿næpl/, «pick it up» → /pɪ‿kɪ‿tʌp/. Не делай паузу между словами — соединяй их в одну цепочку, как в музыке legato.",
      examples: [
        { w: "an apple", ipa: "/ə‿ˈnæpl/" },
        { w: "turn off", ipa: "/tɜː‿ˈnɒf/" },
        { w: "pick it up", ipa: "/pɪ‿kɪ‿ˈtʌp/" },
        { w: "far away", ipa: "/fɑː‿rəˈweɪ/" },
        { w: "this evening", ipa: "/ðɪ‿ˈsiːvnɪŋ/" }
      ],
      pairs: [
        ["a nice", "an ice"],
        ["that stuff", "that's tough"],
        ["grade A", "grey day"],
        ["my turn", "might earn"]
      ]
    },
    {
      id: "ph2-C1-03",
      title: "Linking /r/, /j/, /w/ intrusion",
      source: "English Pronunciation in Use — Advanced, Unit 28",
      note: "Между гласными британцы вставляют связующий звук. После гласного на конце слова перед гласным появляется /r/ («law and order» → /lɔːr‿ən/), /j/ после /iː/, /aɪ/ («I am» → /aɪjæm/) и /w/ после /uː/, /aʊ/ («go on» → /ɡəʊwɒn/). Это сглаживает стык гласных.",
      examples: [
        { w: "law and", ipa: "/lɔːr‿ən/" },
        { w: "the idea is", ipa: "/aɪˈdɪər‿ɪz/" },
        { w: "I am", ipa: "/aɪ‿jæm/" },
        { w: "go on", ipa: "/ɡəʊ‿wɒn/" },
        { w: "she asked", ipa: "/ʃiː‿jɑːskt/" }
      ],
      pairs: [
        ["I scream", "ice cream"],
        ["the way", "the weigh"],
        ["go in", "going"],
        ["see it", "seat"]
      ]
    },
    {
      id: "ph2-C1-04",
      title: "Assimilation & elision",
      source: "English Pronunciation in Use — Advanced, Unit 30",
      note: "В быстрой речи звуки сливаются (assimilation) и выпадают (elision). «ten boys» → /tem bɔɪz/ (n→m перед b). «next day» → /neks deɪ/ (t выпадает между согласными). «handbag» → /ˈhæmbæɡ/. Это естественно для носителей — не произноси каждый звук изолированно.",
      examples: [
        { w: "ten boys", ipa: "/tem bɔɪz/" },
        { w: "good boy", ipa: "/ɡʊb bɔɪ/" },
        { w: "next day", ipa: "/neks deɪ/" },
        { w: "handbag", ipa: "/ˈhæmbæɡ/" },
        { w: "sandwich", ipa: "/ˈsænwɪdʒ/" }
      ],
      pairs: [
        ["light", "like"],
        ["mince", "mints"],
        ["prince", "prints"],
        ["tense", "tents"]
      ]
    }
  ]);

  // ===== C2 — интонация, ритм, тонкие различия =====
  P("phonetics", "C2", [
    {
      id: "ph2-C2-01",
      title: "Sentence stress & rhythm",
      source: "English Pronunciation in Use — Advanced, Unit 33",
      note: "Английский — язык с ударным ритмом (stress-timed): ударные слоги идут через примерно равные промежутки, а безударные «сжимаются». Знаменательные слова (существительные, глаголы, прилагательные) ударны; служебные — слабые. Не давай каждому слогу равный вес, как в русском.",
      examples: [
        { w: "content (n.)", ipa: "/ˈkɒntent/" },
        { w: "content (adj.)", ipa: "/kənˈtent/" },
        { w: "perfect (adj.)", ipa: "/ˈpɜːfɪkt/" },
        { w: "perfect (v.)", ipa: "/pəˈfekt/" },
        { w: "rhythm", ipa: "/ˈrɪðəm/" }
      ],
      pairs: [
        ["content", "content"],
        ["perfect", "perfect"],
        ["desert", "dessert"],
        ["invalid", "invalid"]
      ]
    },
    {
      id: "ph2-C2-02",
      title: "Rising vs falling intonation",
      source: "English Pronunciation in Use — Advanced, Unit 35",
      note: "Падающий тон (↘) — завершённость, уверенность, wh-вопросы и утверждения («Where do you LIVE↘»). Восходящий тон (↗) — незавершённость, да/нет вопросы, вежливость, сомнение («Are you READy↗»). Один и тот же набор слов меняет смысл от направления тона на ударном слоге.",
      examples: [
        { w: "really (↘)", ipa: "/ˈrɪəli/" },
        { w: "really (↗)", ipa: "/ˈrɪəli/" },
        { w: "yes (↘)", ipa: "/jes/" },
        { w: "yes (↗)", ipa: "/jes/" },
        { w: "sorry", ipa: "/ˈsɒri/" }
      ],
      pairs: [
        ["right", "write"],
        ["so", "sew"],
        ["no", "know"],
        ["bye", "buy"]
      ]
    },
    {
      id: "ph2-C2-03",
      title: "Tonic stress — focus & contrast",
      source: "English Pronunciation in Use — Advanced, Unit 37",
      note: "Главное (тоническое) ударение в фразе падает на слово, несущее новую или контрастную информацию. «I didn't say SHE took it» меняет смысл в зависимости от того, какое слово выделено. Перемещай главный акцент туда, где смысловой фокус — это управляет вниманием слушателя.",
      examples: [
        { w: "I said", ipa: "/aɪ ˈsed/" },
        { w: "she", ipa: "/ʃiː/" },
        { w: "took", ipa: "/tʊk/" },
        { w: "it", ipa: "/ɪt/" },
        { w: "today", ipa: "/təˈdeɪ/" }
      ],
      pairs: [
        ["affect", "effect"],
        ["accept", "except"],
        ["personal", "personnel"],
        ["formerly", "formally"]
      ]
    },
    {
      id: "ph2-C2-04",
      title: "Subtle vowel contrasts — /ɜː/ /ɑː/ /ɔː/",
      source: "English Pronunciation in Use — Advanced, Unit 9",
      note: "Три долгих гласных, которые легко путать. /ɜː/ — нейтральный, язык в центре, губы расслаблены (как в «bird»). /ɑː/ — рот широко открыт, язык внизу сзади (как в «car»). /ɔː/ — губы округлены и вытянуты, звук «о» с напряжением (как в «caught»). Отличай по положению языка и округлению губ.",
      examples: [
        { w: "bird", ipa: "/bɜːd/" },
        { w: "car", ipa: "/kɑː/" },
        { w: "caught", ipa: "/kɔːt/" },
        { w: "heard", ipa: "/hɜːd/" },
        { w: "law", ipa: "/lɔː/" }
      ],
      pairs: [
        ["cart", "caught"],
        ["heard", "hard"],
        ["fur", "far"],
        ["born", "barn"]
      ]
    }
  ]);
})();
