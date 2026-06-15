(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => { C[track]=C[track]||{}; C[track][lvl]=C[track][lvl]||[]; arr.forEach(x=>C[track][lvl].push(x)); };

  // ===================== B2 =====================
  P("grammar", "B2", [
    {
      id: "g2b-B2-01",
      title: "Causative: have something done",
      murphy: "English Grammar in Use, Units 46–47",
      topic: "Каузатив: have/get something done",
      items: [
        { q: "I don't repair my own car; I have it ___ at the garage downtown.", a: ["repaired", "fixed", "serviced"], hint: "have + объект + 3-я форма" },
        { q: "She wants to have her hair ___ before the wedding next week.", a: ["cut", "done", "styled"], hint: "результат делает кто-то другой" },
        { q: "We're going to have the whole flat ___ in a soft grey colour.", a: ["painted", "decorated", "redecorated"], hint: "третья форма глагола paint" },
        { q: "He had his passport ___ at the embassy after losing the old one.", a: ["renewed", "replaced", "reissued"], hint: "оформить новый — чужими руками" },
        { q: "They had a new kitchen ___ while they were on holiday.", a: ["installed", "fitted", "built"], hint: "монтаж выполнил мастер" },
        { q: "You should have those documents ___ by a professional translator.", a: ["translated", "checked"], hint: "перевод сделает специалист" }
      ]
    },
    {
      id: "g2b-B2-02",
      title: "Causative: get someone to do",
      murphy: "English Grammar in Use, Unit 46",
      topic: "Каузатив: get/make/have кого-то сделать",
      items: [
        { q: "I finally got my brother ___ help me move the furniture.", a: ["to help"], hint: "get someone TO do" },
        { q: "The teacher made the whole class ___ the essay again.", a: ["rewrite", "redo"], hint: "make someone DO (без to)" },
        { q: "Could you get the technician ___ at the broken router first?", a: ["to look"], hint: "get someone to look at" },
        { q: "My boss had me ___ overtime three days in a row.", a: ["work", "do"], hint: "have someone DO (без to)" },
        { q: "We couldn't get the old engine ___ in the freezing cold.", a: ["to start", "started"], hint: "заставить двигатель завестись" },
        { q: "She let her children ___ up late on weekends.", a: ["stay"], hint: "let someone DO (без to)" }
      ]
    },
    {
      id: "g2b-B2-03",
      title: "Future Continuous",
      murphy: "English Grammar in Use, Unit 24",
      topic: "Future Continuous (будущее длительное)",
      items: [
        { q: "This time tomorrow I ___ be flying over the Atlantic to New York.", a: ["will", "'ll"], hint: "will be + ing для действия в процессе" },
        { q: "Don't call at eight: we ___ be having dinner with the clients then.", a: ["will", "'ll"], hint: "процесс в конкретный момент будущего" },
        { q: "By this evening she'll ___ working on that report for ten hours.", a: ["be"], hint: "will + BE + ing" },
        { q: "While you're on the beach, I ___ be sitting in a meeting, sadly.", a: ["will", "'ll"], hint: "параллельное действие в будущем" },
        { q: "At noon the engineers will be ___ the new bridge for the press.", a: ["testing", "inspecting", "checking"], hint: "форма с -ing" },
        { q: "Next Monday at nine we'll be ___ across the border into France.", a: ["driving", "travelling", "crossing"], hint: "длительное действие, -ing форма" }
      ]
    },
    {
      id: "g2b-B2-04",
      title: "Future Perfect",
      murphy: "English Grammar in Use, Unit 25",
      topic: "Future Perfect (будущее совершённое)",
      items: [
        { q: "By the end of this year I ___ have saved enough for a deposit.", a: ["will", "'ll"], hint: "will have + 3-я форма" },
        { q: "By the time you arrive, the train ___ already have left the station.", a: ["will", "'ll"], hint: "к моменту в будущем" },
        { q: "She'll ___ finished the marathon long before noon, I'm sure.", a: ["have"], hint: "will HAVE + причастие" },
        { q: "In ten years they will have ___ the entire motorway network.", a: ["completed", "rebuilt", "finished", "modernised"], hint: "3-я форма глагола" },
        { q: "By December we ___ have lived in this house for twenty years.", a: ["will", "'ll"], hint: "длительность к точке в будущем" },
        { q: "By 2030 most new cars will have ___ to fully electric engines.", a: ["switched", "moved", "converted"], hint: "3-я форма, переход на электро" }
      ]
    },
    {
      id: "g2b-B2-05",
      title: "Mixed Conditionals (basics)",
      murphy: "English Grammar in Use, Units 37–40",
      topic: "Смешанные условные предложения",
      items: [
        { q: "If I had studied medicine, I ___ be a doctor by now, not an accountant.", a: ["would", "'d"], hint: "прошлое условие → настоящий результат" },
        { q: "If she weren't so shy, she ___ have spoken up at the meeting yesterday.", a: ["would", "'d"], hint: "настоящее условие → прошлый результат" },
        { q: "If we had taken the earlier train, we ___ be home already.", a: ["would", "'d"], hint: "past condition, present result" },
        { q: "If he were more careful, he ___ have lost his keys again last night.", a: ["wouldn't", "would not"], hint: "общее свойство → конкретное прошлое" },
        { q: "If you had listened to me then, you ___ not be in this mess today.", a: ["would"], hint: "прошлое → нынешний результат" },
        { q: "If I knew the answer, I ___ have told you in the exam, believe me.", a: ["would", "'d"], hint: "постоянное состояние → прошлый итог" }
      ]
    },
    {
      id: "g2b-B2-06",
      title: "Modals in the Past: must / can't have",
      murphy: "English Grammar in Use, Units 28–30",
      topic: "Модальные глаголы о прошлом (must/can't have)",
      items: [
        { q: "The ground is wet, so it ___ have rained during the night.", a: ["must"], hint: "почти уверен — must have" },
        { q: "She ___ have heard us; she was wearing headphones the whole time.", a: ["can't", "cannot", "couldn't"], hint: "уверен, что нет — can't have" },
        { q: "He didn't answer, so he ___ have been asleep already, I suppose.", a: ["might", "may", "could"], hint: "вероятно — might/may have" },
        { q: "You ___ have seen John yesterday — he's been abroad all month!", a: ["can't", "cannot", "couldn't"], hint: "это невозможно" },
        { q: "They left at six, so they ___ have arrived by now without traffic.", a: ["must", "should"], hint: "логичный вывод о прошлом" },
        { q: "I'm not sure, but the noise ___ have been the neighbour's dog.", a: ["might", "may", "could"], hint: "предположение с сомнением" }
      ]
    },
    {
      id: "g2b-B2-07",
      title: "Wish & Regret",
      murphy: "English Grammar in Use, Units 41–42",
      topic: "Wish / if only — сожаления",
      items: [
        { q: "I wish I ___ speak Italian; it would help so much on this trip.", a: ["could"], hint: "wish + could о способности" },
        { q: "She wishes she ___ studied harder for last week's exam.", a: ["had"], hint: "wish + past perfect о прошлом" },
        { q: "If only it ___ raining so we could finally go to the beach!", a: ["weren't", "wasn't", "would stop"], hint: "сожаление о настоящем" },
        { q: "I wish you ___ stop interrupting me when I'm on the phone.", a: ["would", "'d"], hint: "wish + would о раздражающей привычке" },
        { q: "He wishes he ___ taken that job offer in Berlin two years ago.", a: ["had"], hint: "сожаление о прошлом решении" },
        { q: "I wish I ___ a bit taller, then I could reach the top shelf.", a: ["were", "was"], hint: "wish + were о нереальном настоящем" }
      ]
    },
    {
      id: "g2b-B2-08",
      title: "Gerund vs Infinitive: meaning shift",
      murphy: "English Grammar in Use, Units 53–58",
      topic: "Герундий и инфинитив: разница в смысле",
      items: [
        { q: "I stopped ___ coffee because it kept me awake all night.", a: ["drinking"], hint: "stop doing — прекратить занятие" },
        { q: "On the way home we stopped ___ buy some bread for dinner.", a: ["to buy", "to get"], hint: "stop to do — остановиться, чтобы..." },
        { q: "Remember ___ the door before you leave the office tonight.", a: ["to lock", "to shut", "to close"], hint: "remember to do — не забыть сделать" },
        { q: "I'll never forget ___ the Northern Lights for the first time.", a: ["seeing", "watching"], hint: "forget doing — помнить о прошлом опыте" },
        { q: "She regrets ___ you that the project has been cancelled.", a: ["to tell", "to inform", "to say"], hint: "regret to tell — с сожалением сообщаю" },
        { q: "He went on ___ for another hour after everyone had left.", a: ["talking", "working", "speaking"], hint: "go on doing — продолжать то же" }
      ]
    },
    {
      id: "g2b-B2-09",
      title: "Advanced Articles",
      murphy: "English Grammar in Use, Units 69–78",
      topic: "Артикли: продвинутый уровень",
      items: [
        { q: "She plays ___ violin beautifully but can't read a single note.", a: ["the"], hint: "the + музыкальный инструмент" },
        { q: "We had ___ breakfast on the terrace before the others woke up.", a: ["a", ""], hint: "приёмы пищи обычно без артикля" },
        { q: "___ rich are not always happier than ordinary people.", a: ["the"], hint: "the + прилагательное = группа людей" },
        { q: "He was sent to ___ prison for tax fraud last autumn.", a: ["", "the"], hint: "to prison (как заключённый) — без артикля" },
        { q: "___ Mount Everest is the highest peak on the planet.", a: [""], hint: "отдельные горы — без артикля" },
        { q: "What ___ wonderful surprise to see you here tonight!", a: ["a"], hint: "what a + исчисляемое существительное" }
      ]
    },
    {
      id: "g2b-B2-10",
      title: "Advanced Quantifiers",
      murphy: "English Grammar in Use, Units 84–90",
      topic: "Кванторы: продвинутый уровень",
      items: [
        { q: "There's hardly ___ milk left, so I'll buy some on the way back.", a: ["any"], hint: "hardly any — почти нет" },
        { q: "___ of the two candidates seemed right, so we kept searching.", a: ["neither"], hint: "ни тот, ни другой из двух" },
        { q: "We have plenty of time, so there's no need ___ rush at all.", a: ["to"], hint: "no need TO + глагол" },
        { q: "Only ___ few people understood the lecturer's complex argument.", a: ["a"], hint: "a few — несколько (положительно)" },
        { q: "Each ___ the rooms has its own private balcony and bathroom.", a: ["of"], hint: "each OF the + множ. число" },
        { q: "I've got too ___ work this week to take any days off.", a: ["much"], hint: "too much + неисчисляемое" }
      ]
    },
    {
      id: "g2b-B2-11",
      title: "Advanced Comparatives",
      murphy: "English Grammar in Use, Units 105–108",
      topic: "Сравнительные конструкции: продвинутые",
      items: [
        { q: "The harder you practise, the ___ you will become at the piano.", a: ["better"], hint: "the + сравнительная ... the + сравнительная" },
        { q: "This year's results are far ___ impressive than last year's.", a: ["more"], hint: "far more + длинное прилагательное" },
        { q: "He earns twice as ___ as he did in his previous job.", a: ["much"], hint: "twice as much as" },
        { q: "The film was nowhere near ___ exciting as the book had been.", a: ["as", "so"], hint: "nowhere near as ... as" },
        { q: "Prices keep getting higher and ___ every single month.", a: ["higher"], hint: "повтор сравнительной для усиления" },
        { q: "She is by ___ the most talented designer in the whole team.", a: ["far"], hint: "by far the + превосходная степень" }
      ]
    },
    {
      id: "g2b-B2-12",
      title: "Linking Words & Contrast",
      murphy: "English Grammar in Use, Units 112–116",
      topic: "Связки: уступка и контраст (despite/although, so/such)",
      items: [
        { q: "___ working all night, he still missed the morning deadline.", a: ["despite", "in spite of"], hint: "despite + -ing форма" },
        { q: "___ she was exhausted, she finished the presentation flawlessly.", a: ["although", "though", "even though"], hint: "although + предложение" },
        { q: "It was ___ a boring lecture that half the students fell asleep.", a: ["such"], hint: "such a + прилаг. + существ. + that" },
        { q: "The coffee was ___ hot that I burned my tongue on it.", a: ["so"], hint: "so + прилагательное + that" },
        { q: "He failed the test ___ of all the extra help he received.", a: ["in spite", "despite"], hint: "in spite OF + существительное" },
        { q: "We took an umbrella ___ case it started to rain later on.", a: ["in"], hint: "in case — на случай если" }
      ]
    }
  ]);

  // ===================== C1 =====================
  P("grammar", "C1", [
    {
      id: "g2b-C1-01",
      title: "Inversion after Negative Adverbials",
      murphy: "Advanced Grammar in Use, Units 99–100",
      topic: "Инверсия после отрицательных наречий",
      items: [
        { q: "Never ___ I seen such an extraordinary performance in my life.", a: ["have", "had"], hint: "Never + have/had + подлежащее" },
        { q: "Not only ___ he arrive late, but he also forgot the documents.", a: ["did"], hint: "Not only DID he + глагол" },
        { q: "Rarely ___ we encounter such honesty in modern politics.", a: ["do"], hint: "Rarely + do/does + подлежащее" },
        { q: "No sooner had the bell rung ___ the students rushed outside.", a: ["than"], hint: "No sooner ... THAN" },
        { q: "Little ___ they know that the whole plan had already collapsed.", a: ["did"], hint: "Little DID they know" },
        { q: "Under no circumstances ___ you share this password with anyone.", a: ["should", "must", "may"], hint: "Under no circumstances + модальный" }
      ]
    },
    {
      id: "g2b-C1-02",
      title: "Cleft Sentences (Emphasis)",
      murphy: "Advanced Grammar in Use, Units 101–102",
      topic: "Расщеплённые предложения для эмфазы",
      items: [
        { q: "It was her calm voice ___ finally reassured the frightened crowd.", a: ["that", "which"], hint: "It was X that ... — выделение" },
        { q: "___ I really admire about him is his refusal to ever give up.", a: ["what"], hint: "What ... is — what-cleft" },
        { q: "It ___ until midnight that the negotiators reached an agreement.", a: ["wasn't", "was not"], hint: "It wasn't until ... that" },
        { q: "All ___ we wanted was a quiet evening with no interruptions.", a: ["that"], hint: "All that we wanted was" },
        { q: "The reason ___ I called was to apologise for yesterday's remark.", a: ["why", "that"], hint: "The reason why ... was" },
        { q: "___ it was the budget that doomed the otherwise brilliant project.", a: ["perhaps", "clearly", "ultimately", "surely"], hint: "вводное наречие перед it-cleft" }
      ]
    },
    {
      id: "g2b-C1-03",
      title: "What-clauses & Fronting",
      murphy: "Advanced Grammar in Use, Unit 103",
      topic: "Эмфаза через what-clauses и вынос вперёд",
      items: [
        { q: "What he needs ___ a long holiday far from any computer screen.", a: ["is"], hint: "What he needs IS" },
        { q: "What you ___ do now is stay calm and call the helpline.", a: ["should", "must", "need to"], hint: "What you should do is" },
        { q: "So determined ___ she that nothing could change her mind.", a: ["was"], hint: "So + прилаг. + WAS + подлежащее" },
        { q: "Such ___ his anger that he stormed out without a single word.", a: ["was"], hint: "Such WAS his anger that" },
        { q: "What surprised everyone ___ how quickly the team recovered.", a: ["was"], hint: "What surprised everyone WAS" },
        { q: "Brilliant ___ the idea was, it proved impossible to fund.", a: ["as", "though"], hint: "Adjective + AS + clause (уступка)" }
      ]
    },
    {
      id: "g2b-C1-04",
      title: "Advanced Participle Clauses",
      murphy: "Advanced Grammar in Use, Units 78–80",
      topic: "Причастные обороты: продвинутый уровень",
      items: [
        { q: "___ finished the report, she finally allowed herself a break.", a: ["having"], hint: "Having + причастие (завершённое действие)" },
        { q: "___ left untreated, the infection can spread within hours.", a: ["if"], hint: "If left ... — редуцированное условие" },
        { q: "The contract, ___ signed by both parties, is now legally binding.", a: ["having been", "once"], hint: "having been + причастие (пассив)" },
        { q: "Not ___ what to say, he simply nodded and walked away.", a: ["knowing"], hint: "Not knowing — отрицательное причастие" },
        { q: "___ by the storm, the village was cut off for three days.", a: ["isolated", "battered", "hit", "struck"], hint: "пассивное причастие в начале" },
        { q: "All things ___, the new policy has done more good than harm.", a: ["considered"], hint: "All things considered — устойчивый оборот" }
      ]
    },
    {
      id: "g2b-C1-05",
      title: "Unreal Past & Subjunctive",
      murphy: "Advanced Grammar in Use, Units 88–90",
      topic: "Нереальное прошлое и сослагательное",
      items: [
        { q: "It's high time we ___ this old software with something modern.", a: ["replaced", "updated", "upgraded"], hint: "it's high time + past tense" },
        { q: "I'd rather you ___ tell anyone about the offer just yet.", a: ["didn't", "did not"], hint: "I'd rather you + past (о другом человеке)" },
        { q: "The board demanded that the CEO ___ resign immediately.", a: ["resign", "should resign"], hint: "demand that + базовая форма (subjunctive)" },
        { q: "Suppose you ___ won the lottery — what would you do first?", a: ["had"], hint: "suppose + past perfect о прошлом" },
        { q: "He talks as though he ___ been to every country on earth.", a: ["had"], hint: "as though + past perfect" },
        { q: "It is essential that every applicant ___ on time tomorrow.", a: ["be", "arrive"], hint: "essential that + базовая форма" }
      ]
    },
    {
      id: "g2b-C1-06",
      title: "Modal Perfects: Nuance",
      murphy: "Advanced Grammar in Use, Units 49–53",
      topic: "Модальные перфекты: тонкие оттенки",
      items: [
        { q: "You ___ have told me earlier — I would have changed my plans!", a: ["could", "should", "might"], hint: "упрёк/сожаление о прошлом" },
        { q: "She needn't ___ bought a gift; the invitation said nothing required.", a: ["have"], hint: "needn't HAVE — зря сделал" },
        { q: "He ___ have caught the earlier flight, but he chose to sleep in.", a: ["could"], hint: "could have — была возможность" },
        { q: "They ought to ___ warned us about the road closure in advance.", a: ["have"], hint: "ought to HAVE + причастие" },
        { q: "I ___ have left my umbrella on the train; it's not in my bag.", a: ["must", "may", "might", "could"], hint: "вывод/предположение о прошлом" },
        { q: "You shouldn't ___ said that in front of the whole department.", a: ["have"], hint: "shouldn't HAVE — критика поступка" }
      ]
    },
    {
      id: "g2b-C1-07",
      title: "Advanced Passive: it is said to",
      murphy: "Advanced Grammar in Use, Units 36–38",
      topic: "Сложный пассив (it is said to / репортирование)",
      items: [
        { q: "The minister is ___ to have misled parliament about the figures.", a: ["said", "believed", "alleged", "reported", "thought"], hint: "is said TO have — репортивный пассив" },
        { q: "It ___ widely believed that the company will be sold this year.", a: ["is"], hint: "It IS believed that" },
        { q: "The painting is thought ___ have been stolen during the war.", a: ["to"], hint: "is thought TO have been" },
        { q: "He is known ___ be one of the finest surgeons in the country.", a: ["to"], hint: "is known TO be" },
        { q: "The ruins are ___ to date back over two thousand years.", a: ["said", "believed", "thought", "estimated", "reckoned"], hint: "are X to date back" },
        { q: "There ___ said to be a hidden room behind the old fireplace.", a: ["is", "are"], hint: "There is said TO be" }
      ]
    },
    {
      id: "g2b-C1-08",
      title: "Reduced Relative Clauses",
      murphy: "Advanced Grammar in Use, Units 70–74",
      topic: "Редуцированные относительные придаточные",
      items: [
        { q: "The passengers ___ on the delayed flight were offered free meals.", a: ["waiting", "stranded", "stuck"], hint: "who were waiting → waiting (-ing)" },
        { q: "Any items ___ in the lost-property office go to charity after a month.", a: ["left", "found", "remaining", "unclaimed"], hint: "which are left → left (3-я форма)" },
        { q: "The woman ___ to by the manager turned out to be a journalist.", a: ["spoken", "referred", "talked"], hint: "who was spoken to → spoken to" },
        { q: "Most of the money ___ to the charity came from small donors.", a: ["given", "donated", "sent"], hint: "that was given → given" },
        { q: "The team ___ for the merger worked around the clock for weeks.", a: ["responsible", "preparing", "negotiating"], hint: "who were responsible → responsible" },
        { q: "Anyone ___ to attend should register before Friday at noon.", a: ["wishing", "wanting", "hoping", "intending"], hint: "who wishes → wishing (-ing)" }
      ]
    },
    {
      id: "g2b-C1-09",
      title: "Advanced Conjunctions",
      murphy: "Advanced Grammar in Use, Units 104–108",
      topic: "Сложные союзы и коннекторы",
      items: [
        { q: "He took the job ___ that he could work remotely twice a week.", a: ["provided", "providing", "on condition"], hint: "provided that — при условии что" },
        { q: "___ as I admire her energy, I find her methods rather reckless.", a: ["much"], hint: "Much as — как ни (уступка)" },
        { q: "We'll proceed with the launch ___ the weather is suitable.", a: ["provided", "providing", "assuming"], hint: "при условии что погода позволит" },
        { q: "___ that you finish on time, you may design it however you like.", a: ["given", "provided", "assuming"], hint: "Given/Provided that — при условии" },
        { q: "She kept calm ___ the chaos unfolding all around her.", a: ["amid", "despite", "amidst"], hint: "amid/despite — среди/несмотря на" },
        { q: "The deal collapsed ___ a last-minute dispute over royalties.", a: ["owing to", "due to", "because of", "over"], hint: "по причине — owing to / due to" }
      ]
    },
    {
      id: "g2b-C1-10",
      title: "Ellipsis & Nominalisation",
      murphy: "Advanced Grammar in Use, Units 109–112",
      topic: "Эллипсис и номинализация",
      items: [
        { q: "She can play the cello and ___ can her younger sister.", a: ["so"], hint: "so + can + подлежащее (тоже)" },
        { q: "I haven't read the contract yet, and ___ has the lawyer.", a: ["neither", "nor"], hint: "neither/nor + has (тоже не)" },
        { q: "He said he would help, but in the end he simply didn't ___.", a: ["bother", "care"], hint: "эллипсис: didn't bother (to)" },
        { q: "The sudden ___ in prices alarmed the entire market overnight.", a: ["rise", "increase", "surge", "jump"], hint: "номинализация: глагол → существительное" },
        { q: "Her ___ of the new system reduced errors by almost half.", a: ["implementation", "introduction", "adoption", "redesign"], hint: "существительное от глагола (внедрение)" },
        { q: "Would you like some tea? Yes, I'd love ___, thank you.", a: ["to", "some"], hint: "эллипсис инфинитива: love to" }
      ]
    }
  ]);
})();
