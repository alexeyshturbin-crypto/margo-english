(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => { C[track]=C[track]||{}; C[track][lvl]=C[track][lvl]||[]; arr.forEach(x=>C[track][lvl].push(x)); };

  // ===== A2 (60) =====
  P("vocab","A2",[
    // Тело / здоровье
    { id:"v2a-A2-01", en:"shoulder", ru:"плечо", ex:"My shoulder hurts after the gym." },
    { id:"v2a-A2-02", en:"knee", ru:"колено", ex:"He fell and hurt his knee." },
    { id:"v2a-A2-03", en:"throat", ru:"горло", ex:"I have a sore throat today." },
    { id:"v2a-A2-04", en:"fever", ru:"высокая температура, жар", ex:"She stayed home with a fever." },
    { id:"v2a-A2-05", en:"medicine", ru:"лекарство", ex:"Take this medicine twice a day." },
    { id:"v2a-A2-06", en:"healthy", ru:"здоровый", ex:"Fruit and vegetables keep you healthy." },

    // Одежда
    { id:"v2a-A2-07", en:"jacket", ru:"куртка, пиджак", ex:"It's cold, so wear a jacket." },
    { id:"v2a-A2-08", en:"scarf", ru:"шарф", ex:"She put on a warm scarf." },
    { id:"v2a-A2-09", en:"gloves", ru:"перчатки", ex:"I can't find my gloves." },
    { id:"v2a-A2-10", en:"boots", ru:"ботинки, сапоги", ex:"These boots are good for rain." },
    { id:"v2a-A2-11", en:"to try on", ru:"примерять", ex:"Can I try on this shirt?" },
    { id:"v2a-A2-12", en:"size", ru:"размер", ex:"What size do you wear?" },

    // Город / транспорт
    { id:"v2a-A2-13", en:"bridge", ru:"мост", ex:"We walked across the old bridge." },
    { id:"v2a-A2-14", en:"corner", ru:"угол", ex:"The shop is on the corner." },
    { id:"v2a-A2-15", en:"traffic", ru:"дорожное движение, пробка", ex:"There is heavy traffic this morning." },
    { id:"v2a-A2-16", en:"platform", ru:"платформа, перрон", ex:"The train leaves from platform two." },
    { id:"v2a-A2-17", en:"ticket", ru:"билет", ex:"I bought a ticket to the city center." },
    { id:"v2a-A2-18", en:"to get off", ru:"выходить (из транспорта)", ex:"Get off at the next stop." },

    // Животные
    { id:"v2a-A2-19", en:"rabbit", ru:"кролик", ex:"The rabbit ran into the field." },
    { id:"v2a-A2-20", en:"sheep", ru:"овца", ex:"The farmer keeps fifty sheep." },
    { id:"v2a-A2-21", en:"goat", ru:"коза", ex:"A goat was eating the grass." },
    { id:"v2a-A2-22", en:"butterfly", ru:"бабочка", ex:"A butterfly landed on the flower." },
    { id:"v2a-A2-23", en:"spider", ru:"паук", ex:"There is a spider in the corner." },
    { id:"v2a-A2-24", en:"wild", ru:"дикий", ex:"Wild animals live in the forest." },

    // Природа
    { id:"v2a-A2-25", en:"hill", ru:"холм", ex:"We climbed a small hill." },
    { id:"v2a-A2-26", en:"valley", ru:"долина", ex:"A river runs through the valley." },
    { id:"v2a-A2-27", en:"forest", ru:"лес", ex:"They went for a walk in the forest." },
    { id:"v2a-A2-28", en:"lake", ru:"озеро", ex:"We swam in the cold lake." },
    { id:"v2a-A2-29", en:"weather", ru:"погода", ex:"The weather is sunny today." },
    { id:"v2a-A2-30", en:"storm", ru:"буря, гроза", ex:"A big storm is coming tonight." },

    // Спорт
    { id:"v2a-A2-31", en:"team", ru:"команда", ex:"Our team won the match." },
    { id:"v2a-A2-32", en:"coach", ru:"тренер", ex:"The coach taught us new skills." },
    { id:"v2a-A2-33", en:"to score", ru:"забивать, набирать очки", ex:"He scored two goals." },
    { id:"v2a-A2-34", en:"match", ru:"матч", ex:"The match starts at six." },
    { id:"v2a-A2-35", en:"to win", ru:"выигрывать", ex:"I hope we win on Sunday." },
    { id:"v2a-A2-36", en:"to lose", ru:"проигрывать", ex:"Nobody likes to lose." },

    // Профессии
    { id:"v2a-A2-37", en:"engineer", ru:"инженер", ex:"My sister is an engineer." },
    { id:"v2a-A2-38", en:"nurse", ru:"медсестра, медбрат", ex:"The nurse helped the patient." },
    { id:"v2a-A2-39", en:"firefighter", ru:"пожарный", ex:"The firefighter is very brave." },
    { id:"v2a-A2-40", en:"waiter", ru:"официант", ex:"The waiter brought our food." },
    { id:"v2a-A2-41", en:"farmer", ru:"фермер", ex:"The farmer works in the fields." },
    { id:"v2a-A2-42", en:"manager", ru:"менеджер, управляющий", ex:"The manager called a meeting." },

    // Эмоции
    { id:"v2a-A2-43", en:"nervous", ru:"нервный, взволнованный", ex:"I feel nervous before exams." },
    { id:"v2a-A2-44", en:"proud", ru:"гордый", ex:"She is proud of her work." },
    { id:"v2a-A2-45", en:"bored", ru:"скучающий", ex:"The kids were bored at home." },
    { id:"v2a-A2-46", en:"surprised", ru:"удивлённый", ex:"He was surprised by the gift." },
    { id:"v2a-A2-47", en:"worried", ru:"обеспокоенный", ex:"My mother is worried about me." },
    { id:"v2a-A2-48", en:"calm", ru:"спокойный", ex:"Stay calm and breathe slowly." },

    // Школьные предметы
    { id:"v2a-A2-49", en:"history", ru:"история (предмет)", ex:"We study history on Mondays." },
    { id:"v2a-A2-50", en:"geography", ru:"география", ex:"Geography is my favorite subject." },
    { id:"v2a-A2-51", en:"chemistry", ru:"химия", ex:"The chemistry lesson was fun." },
    { id:"v2a-A2-52", en:"biology", ru:"биология", ex:"In biology we learn about plants." },
    { id:"v2a-A2-53", en:"physics", ru:"физика", ex:"Physics is harder than maths." },
    { id:"v2a-A2-54", en:"homework", ru:"домашнее задание", ex:"I do my homework after school." },

    // Время / даты
    { id:"v2a-A2-55", en:"weekend", ru:"выходные", ex:"We relax at the weekend." },
    { id:"v2a-A2-56", en:"century", ru:"век, столетие", ex:"This castle is five centuries old." },
    { id:"v2a-A2-57", en:"midnight", ru:"полночь", ex:"The party ended at midnight." },
    { id:"v2a-A2-58", en:"quarter", ru:"четверть (часа)", ex:"It's a quarter past nine." },
    { id:"v2a-A2-59", en:"once a week", ru:"раз в неделю", ex:"I go swimming once a week." },
    { id:"v2a-A2-60", en:"in the morning", ru:"утром", ex:"I drink coffee in the morning." }
  ]);

  // ===== B1 (60) =====
  P("vocab","B1",[
    // Характер
    { id:"v2a-B1-01", en:"reliable", ru:"надёжный", ex:"She is a reliable colleague you can trust." },
    { id:"v2a-B1-02", en:"ambitious", ru:"амбициозный", ex:"He is ambitious and wants to lead the team." },
    { id:"v2a-B1-03", en:"generous", ru:"щедрый", ex:"My uncle is generous with his time." },
    { id:"v2a-B1-04", en:"stubborn", ru:"упрямый", ex:"He is too stubborn to change his mind." },
    { id:"v2a-B1-05", en:"easy-going", ru:"спокойный, лёгкий в общении", ex:"She is easy-going and rarely gets angry." },
    { id:"v2a-B1-06", en:"confident", ru:"уверенный", ex:"You sound confident during the interview." },

    // Отношения
    { id:"v2a-B1-07", en:"to get along", ru:"ладить", ex:"We get along well with our neighbours." },
    { id:"v2a-B1-08", en:"to fall out", ru:"поссориться", ex:"They fell out over money." },
    { id:"v2a-B1-09", en:"to make up", ru:"мириться", ex:"They argued but made up the next day." },
    { id:"v2a-B1-10", en:"acquaintance", ru:"знакомый", ex:"He is an acquaintance, not a close friend." },
    { id:"v2a-B1-11", en:"to trust", ru:"доверять", ex:"It takes time to trust someone new." },
    { id:"v2a-B1-12", en:"to support", ru:"поддерживать", ex:"My family supports my decisions." },

    // Работа
    { id:"v2a-B1-13", en:"deadline", ru:"крайний срок", ex:"We must meet the deadline by Friday." },
    { id:"v2a-B1-14", en:"colleague", ru:"коллега", ex:"My colleague helped me finish the report." },
    { id:"v2a-B1-15", en:"to apply for", ru:"подавать заявку на", ex:"I applied for a new job last week." },
    { id:"v2a-B1-16", en:"experience", ru:"опыт", ex:"This role needs three years of experience." },
    { id:"v2a-B1-17", en:"to be promoted", ru:"получить повышение", ex:"She was promoted to manager." },
    { id:"v2a-B1-18", en:"workload", ru:"объём работы, нагрузка", ex:"My workload is heavy this month." },

    // Деньги / покупки
    { id:"v2a-B1-19", en:"to afford", ru:"позволить себе (по деньгам)", ex:"We can't afford a new car right now." },
    { id:"v2a-B1-20", en:"to save up", ru:"копить", ex:"They are saving up for a holiday." },
    { id:"v2a-B1-21", en:"discount", ru:"скидка", ex:"The store offers a ten percent discount." },
    { id:"v2a-B1-22", en:"refund", ru:"возврат денег", ex:"I asked for a refund on the broken phone." },
    { id:"v2a-B1-23", en:"bargain", ru:"выгодная покупка", ex:"This jacket was a real bargain." },
    { id:"v2a-B1-24", en:"to owe", ru:"быть должным", ex:"I owe my friend twenty dollars." },

    // Технологии
    { id:"v2a-B1-25", en:"device", ru:"устройство", ex:"My phone is a very useful device." },
    { id:"v2a-B1-26", en:"to download", ru:"скачивать", ex:"I downloaded the app yesterday." },
    { id:"v2a-B1-27", en:"to update", ru:"обновлять", ex:"Remember to update the software." },
    { id:"v2a-B1-28", en:"password", ru:"пароль", ex:"Choose a strong password for your account." },
    { id:"v2a-B1-29", en:"screen", ru:"экран", ex:"The screen is cracked on my laptop." },
    { id:"v2a-B1-30", en:"to charge", ru:"заряжать", ex:"I need to charge my phone." },

    // Путешествия
    { id:"v2a-B1-31", en:"luggage", ru:"багаж", ex:"My luggage was too heavy at the airport." },
    { id:"v2a-B1-32", en:"to book", ru:"бронировать", ex:"We booked a hotel near the beach." },
    { id:"v2a-B1-33", en:"to check in", ru:"регистрироваться (в отеле/аэропорту)", ex:"You can check in online before the flight." },
    { id:"v2a-B1-34", en:"destination", ru:"пункт назначения", ex:"Our final destination is Rome." },
    { id:"v2a-B1-35", en:"abroad", ru:"за границей", ex:"She studied abroad for a year." },
    { id:"v2a-B1-36", en:"delay", ru:"задержка", ex:"There was a long delay at the airport." },

    // Окружающая среда
    { id:"v2a-B1-37", en:"pollution", ru:"загрязнение", ex:"Air pollution is a serious problem." },
    { id:"v2a-B1-38", en:"to recycle", ru:"перерабатывать", ex:"We recycle paper and plastic at home." },
    { id:"v2a-B1-39", en:"waste", ru:"отходы, мусор", ex:"The city produces too much waste." },
    { id:"v2a-B1-40", en:"climate change", ru:"изменение климата", ex:"Climate change affects the whole planet." },
    { id:"v2a-B1-41", en:"renewable", ru:"возобновляемый", ex:"Solar power is a renewable energy source." },
    { id:"v2a-B1-42", en:"to protect", ru:"защищать", ex:"We must protect the rainforests." },

    // Медиа
    { id:"v2a-B1-43", en:"headline", ru:"заголовок", ex:"The headline caught my attention." },
    { id:"v2a-B1-44", en:"broadcast", ru:"трансляция, вещание", ex:"The match was broadcast live." },
    { id:"v2a-B1-45", en:"advertisement", ru:"реклама", ex:"That advertisement is everywhere online." },
    { id:"v2a-B1-46", en:"to subscribe", ru:"подписываться", ex:"I subscribed to a news channel." },
    { id:"v2a-B1-47", en:"audience", ru:"аудитория, зрители", ex:"The show has a huge audience." },
    { id:"v2a-B1-48", en:"reliable source", ru:"надёжный источник", ex:"Always check a reliable source." },

    // Чувства
    { id:"v2a-B1-49", en:"to be relieved", ru:"испытывать облегчение", ex:"I was relieved when the exam ended." },
    { id:"v2a-B1-50", en:"frustrated", ru:"разочарованный, раздражённый", ex:"He felt frustrated by the slow internet." },
    { id:"v2a-B1-51", en:"grateful", ru:"благодарный", ex:"I'm grateful for your help." },
    { id:"v2a-B1-52", en:"overwhelmed", ru:"подавленный, перегруженный", ex:"She felt overwhelmed by the workload." },
    { id:"v2a-B1-53", en:"to look forward to", ru:"с нетерпением ждать", ex:"I look forward to the weekend." },
    { id:"v2a-B1-54", en:"disappointed", ru:"расстроенный, разочарованный", ex:"We were disappointed by the result." },

    // Образование
    { id:"v2a-B1-55", en:"degree", ru:"учёная степень, диплом", ex:"She has a degree in economics." },
    { id:"v2a-B1-56", en:"to graduate", ru:"оканчивать (учебное заведение)", ex:"He will graduate next summer." },
    { id:"v2a-B1-57", en:"scholarship", ru:"стипендия", ex:"She won a scholarship to the university." },
    { id:"v2a-B1-58", en:"to revise", ru:"повторять, готовиться к экзамену", ex:"I need to revise for the test." },
    { id:"v2a-B1-59", en:"lecture", ru:"лекция", ex:"The lecture lasted two hours." },
    { id:"v2a-B1-60", en:"to pass an exam", ru:"сдать экзамен", ex:"He worked hard to pass the exam." }
  ]);
})();
