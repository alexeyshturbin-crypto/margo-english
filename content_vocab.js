(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => {
    C[track] = C[track] || {};
    C[track][lvl] = C[track][lvl] || [];
    arr.forEach(x => C[track][lvl].push(x));
  };

  // ===== A2 — basic everyday vocabulary =====
  P("vocab", "A2", [
    // family
    { id: "vc-A2-01", en: "family", ru: "семья", ex: "My family is very big." },
    { id: "vc-A2-02", en: "parents", ru: "родители", ex: "My parents work in a hospital." },
    { id: "vc-A2-03", en: "brother", ru: "брат", ex: "I have one younger brother." },
    { id: "vc-A2-04", en: "grandmother", ru: "бабушка", ex: "My grandmother makes great pies." },
    // school
    { id: "vc-A2-05", en: "school", ru: "школа", ex: "We go to school by bus." },
    { id: "vc-A2-06", en: "teacher", ru: "учитель", ex: "Our teacher is very kind." },
    { id: "vc-A2-07", en: "lesson", ru: "урок", ex: "The English lesson starts at nine." },
    { id: "vc-A2-08", en: "homework", ru: "домашнее задание", ex: "I do my homework after dinner." },
    { id: "vc-A2-09", en: "pencil", ru: "карандаш", ex: "Can I borrow your pencil?" },
    // food
    { id: "vc-A2-10", en: "breakfast", ru: "завтрак", ex: "I have eggs for breakfast." },
    { id: "vc-A2-11", en: "apple", ru: "яблоко", ex: "She eats an apple every day." },
    { id: "vc-A2-12", en: "bread", ru: "хлеб", ex: "We buy fresh bread in the morning." },
    { id: "vc-A2-13", en: "water", ru: "вода", ex: "Please give me a glass of water." },
    // home
    { id: "vc-A2-14", en: "house", ru: "дом", ex: "They live in a small house." },
    { id: "vc-A2-15", en: "kitchen", ru: "кухня", ex: "Mum is cooking in the kitchen." },
    { id: "vc-A2-16", en: "bedroom", ru: "спальня", ex: "My bedroom is on the second floor." },
    { id: "vc-A2-17", en: "window", ru: "окно", ex: "Open the window, it's hot." },
    // time
    { id: "vc-A2-18", en: "today", ru: "сегодня", ex: "Today is my birthday." },
    { id: "vc-A2-19", en: "morning", ru: "утро", ex: "I get up early in the morning." },
    { id: "vc-A2-20", en: "week", ru: "неделя", ex: "We have five lessons a week." },
    // weather
    { id: "vc-A2-21", en: "sunny", ru: "солнечный", ex: "It is sunny and warm today." },
    { id: "vc-A2-22", en: "rain", ru: "дождь", ex: "Take an umbrella, there is rain." },
    { id: "vc-A2-23", en: "cold", ru: "холодный", ex: "Winter in Russia is very cold." },
    // numbers
    { id: "vc-A2-24", en: "twelve", ru: "двенадцать", ex: "There are twelve months in a year." },
    { id: "vc-A2-25", en: "hundred", ru: "сто", ex: "I can count to a hundred." },
    // actions
    { id: "vc-A2-26", en: "to run", ru: "бегать", ex: "Dogs love to run in the park." },
    { id: "vc-A2-27", en: "to read", ru: "читать", ex: "I like to read books at night." },
    { id: "vc-A2-28", en: "to play", ru: "играть", ex: "Children play football outside." },
    { id: "vc-A2-29", en: "to help", ru: "помогать", ex: "I help my mother every day." },
    { id: "vc-A2-30", en: "to sleep", ru: "спать", ex: "Cats sleep a lot during the day." },
  ]);

  // ===== B1 — extended everyday vocabulary =====
  P("vocab", "B1", [
    // travel
    { id: "vc-B1-01", en: "journey", ru: "поездка, путешествие", ex: "The journey to the sea took six hours." },
    { id: "vc-B1-02", en: "luggage", ru: "багаж", ex: "Don't forget to check your luggage." },
    { id: "vc-B1-03", en: "passenger", ru: "пассажир", ex: "Every passenger must wear a seatbelt." },
    { id: "vc-B1-04", en: "abroad", ru: "за границей", ex: "She wants to study abroad next year." },
    // health
    { id: "vc-B1-05", en: "headache", ru: "головная боль", ex: "I have a headache after the long flight." },
    { id: "vc-B1-06", en: "medicine", ru: "лекарство", ex: "Take this medicine twice a day." },
    { id: "vc-B1-07", en: "exercise", ru: "упражнение, зарядка", ex: "Regular exercise keeps you healthy." },
    { id: "vc-B1-08", en: "recover", ru: "выздоравливать", ex: "He needs a week to recover from the flu." },
    // work and money
    { id: "vc-B1-09", en: "salary", ru: "зарплата", ex: "She earns a good salary as a nurse." },
    { id: "vc-B1-10", en: "interview", ru: "собеседование", ex: "I have a job interview tomorrow." },
    { id: "vc-B1-11", en: "experience", ru: "опыт", ex: "He has years of experience in teaching." },
    { id: "vc-B1-12", en: "afford", ru: "позволить себе", ex: "We can't afford a new car this year." },
    // feelings and personality
    { id: "vc-B1-13", en: "confident", ru: "уверенный", ex: "She feels confident before the exam." },
    { id: "vc-B1-14", en: "nervous", ru: "нервный, волнующийся", ex: "I always get nervous on stage." },
    { id: "vc-B1-15", en: "generous", ru: "щедрый", ex: "He is generous and helps everyone." },
    { id: "vc-B1-16", en: "honest", ru: "честный", ex: "An honest answer is always best." },
    // communication
    { id: "vc-B1-17", en: "argue", ru: "спорить", ex: "They often argue about small things." },
    { id: "vc-B1-18", en: "suggest", ru: "предлагать", ex: "I suggest we leave a bit earlier." },
    { id: "vc-B1-19", en: "explain", ru: "объяснять", ex: "Can you explain this rule again?" },
    { id: "vc-B1-20", en: "promise", ru: "обещать", ex: "I promise to call you tonight." },
    // environment and city
    { id: "vc-B1-21", en: "pollution", ru: "загрязнение", ex: "Air pollution is a serious problem." },
    { id: "vc-B1-22", en: "neighbourhood", ru: "район, окрестности", ex: "We live in a quiet neighbourhood." },
    { id: "vc-B1-23", en: "traffic", ru: "движение, пробки", ex: "There is heavy traffic in the city." },
    { id: "vc-B1-24", en: "recycle", ru: "перерабатывать", ex: "We recycle paper and plastic at home." },
    // free time
    { id: "vc-B1-25", en: "hobby", ru: "хобби, увлечение", ex: "Photography is my favourite hobby." },
    { id: "vc-B1-26", en: "adventure", ru: "приключение", ex: "Our trip turned into a real adventure." },
    { id: "vc-B1-27", en: "competition", ru: "соревнование, конкурс", ex: "She won the singing competition." },
    // describing things
    { id: "vc-B1-28", en: "comfortable", ru: "удобный, комфортный", ex: "This chair is very comfortable." },
    { id: "vc-B1-29", en: "expensive", ru: "дорогой", ex: "That phone is too expensive for me." },
    { id: "vc-B1-30", en: "useful", ru: "полезный", ex: "This app is really useful for students." },
  ]);

  // ===== B2 — abstract, opinions, science and technology =====
  P("vocab", "B2", [
    // opinions and argument
    { id: "vc-B2-01", en: "however", ru: "однако, тем не менее", ex: "The plan is good; however, it is risky." },
    { id: "vc-B2-02", en: "assume", ru: "предполагать", ex: "We cannot assume that everyone agrees." },
    { id: "vc-B2-03", en: "convince", ru: "убеждать", ex: "She tried to convince us to join." },
    { id: "vc-B2-04", en: "point of view", ru: "точка зрения", ex: "From my point of view, he is right." },
    { id: "vc-B2-05", en: "evidence", ru: "доказательство", ex: "There is no evidence for this claim." },
    // science and technology
    { id: "vc-B2-06", en: "research", ru: "исследование", ex: "The research took several years." },
    { id: "vc-B2-07", en: "experiment", ru: "эксперимент", ex: "The experiment confirmed the theory." },
    { id: "vc-B2-08", en: "device", ru: "устройство, прибор", ex: "This device measures temperature." },
    { id: "vc-B2-09", en: "software", ru: "программное обеспечение", ex: "We installed new software yesterday." },
    { id: "vc-B2-10", en: "artificial intelligence", ru: "искусственный интеллект", ex: "Artificial intelligence is changing many jobs." },
    { id: "vc-B2-11", en: "data", ru: "данные", ex: "The company collects a lot of data." },
    // abstract concepts
    { id: "vc-B2-12", en: "freedom", ru: "свобода", ex: "Freedom of speech is important." },
    { id: "vc-B2-13", en: "responsibility", ru: "ответственность", ex: "Leaders carry great responsibility." },
    { id: "vc-B2-14", en: "consequence", ru: "последствие", ex: "Every choice has a consequence." },
    { id: "vc-B2-15", en: "advantage", ru: "преимущество", ex: "Speaking two languages is an advantage." },
    { id: "vc-B2-16", en: "purpose", ru: "цель, назначение", ex: "What is the purpose of this meeting?" },
    // society
    { id: "vc-B2-17", en: "society", ru: "общество", ex: "Education benefits the whole society." },
    { id: "vc-B2-18", en: "culture", ru: "культура", ex: "Each country has its own culture." },
    { id: "vc-B2-19", en: "tradition", ru: "традиция", ex: "This festival is an old tradition." },
    { id: "vc-B2-20", en: "influence", ru: "влияние", ex: "Friends have a strong influence on us." },
    // describing in detail
    { id: "vc-B2-21", en: "significant", ru: "значительный", ex: "There was a significant improvement." },
    { id: "vc-B2-22", en: "complex", ru: "сложный", ex: "The problem is more complex than it seems." },
    { id: "vc-B2-23", en: "obvious", ru: "очевидный", ex: "The solution was obvious to everyone." },
    { id: "vc-B2-24", en: "reliable", ru: "надёжный", ex: "We need a reliable source of energy." },
    // processes and change
    { id: "vc-B2-25", en: "develop", ru: "развивать(ся)", ex: "The city developed very quickly." },
    { id: "vc-B2-26", en: "achieve", ru: "достигать", ex: "She achieved all her goals this year." },
    { id: "vc-B2-27", en: "improve", ru: "улучшать(ся)", ex: "Practice helps you improve your skills." },
    { id: "vc-B2-28", en: "affect", ru: "влиять, воздействовать", ex: "Climate change affects the whole planet." },
    { id: "vc-B2-29", en: "reduce", ru: "сокращать, уменьшать", ex: "We must reduce plastic waste." },
    { id: "vc-B2-30", en: "predict", ru: "предсказывать", ex: "Scientists predict warmer summers." },
  ]);

  // ===== C1 — advanced, academic, precise synonyms =====
  P("vocab", "C1", [
    // academic discourse
    { id: "vc-C1-01", en: "nevertheless", ru: "тем не менее", ex: "It was raining; nevertheless, we went out." },
    { id: "vc-C1-02", en: "furthermore", ru: "более того, кроме того", ex: "The plan is cheap; furthermore, it is fast." },
    { id: "vc-C1-03", en: "hypothesis", ru: "гипотеза", ex: "The data supported the hypothesis." },
    { id: "vc-C1-04", en: "comprehensive", ru: "всесторонний, исчерпывающий", ex: "She gave a comprehensive analysis." },
    { id: "vc-C1-05", en: "implication", ru: "следствие, скрытый смысл", ex: "Consider the implications of this decision." },
    { id: "vc-C1-06", en: "framework", ru: "структура, концепция", ex: "We need a clear theoretical framework." },
    // precise synonyms for common ideas
    { id: "vc-C1-07", en: "meticulous", ru: "дотошный, тщательный", ex: "He is meticulous about every detail." },
    { id: "vc-C1-08", en: "ambiguous", ru: "двусмысленный, неоднозначный", ex: "The instructions were rather ambiguous." },
    { id: "vc-C1-09", en: "inevitable", ru: "неизбежный", ex: "Change in this field is inevitable." },
    { id: "vc-C1-10", en: "profound", ru: "глубокий, основательный", ex: "The book had a profound effect on me." },
    { id: "vc-C1-11", en: "subtle", ru: "тонкий, едва уловимый", ex: "There is a subtle difference between the words." },
    { id: "vc-C1-12", en: "diverse", ru: "разнообразный, многообразный", ex: "The team has a diverse set of skills." },
    // analysis verbs
    { id: "vc-C1-13", en: "emphasize", ru: "подчёркивать, акцентировать", ex: "I want to emphasize one key point." },
    { id: "vc-C1-14", en: "undermine", ru: "подрывать", ex: "The scandal undermined public trust." },
    { id: "vc-C1-15", en: "demonstrate", ru: "демонстрировать, показывать", ex: "The study demonstrates a clear link." },
    { id: "vc-C1-16", en: "anticipate", ru: "предвидеть, ожидать", ex: "We did not anticipate such demand." },
    { id: "vc-C1-17", en: "constitute", ru: "составлять, представлять собой", ex: "These actions constitute a violation." },
    // economy and politics
    { id: "vc-C1-18", en: "sustainable", ru: "устойчивый, экологичный", ex: "We need sustainable economic growth." },
    { id: "vc-C1-19", en: "incentive", ru: "стимул, побуждение", ex: "Tax cuts are an incentive to invest." },
    { id: "vc-C1-20", en: "legislation", ru: "законодательство", ex: "New legislation protects consumers." },
    { id: "vc-C1-21", en: "infrastructure", ru: "инфраструктура", ex: "The region lacks modern infrastructure." },
    // qualities and states
    { id: "vc-C1-22", en: "resilient", ru: "стойкий, устойчивый", ex: "Children are remarkably resilient." },
    { id: "vc-C1-23", en: "coherent", ru: "связный, последовательный", ex: "He gave a coherent explanation." },
    { id: "vc-C1-24", en: "feasible", ru: "осуществимый, реальный", ex: "The project is technically feasible." },
    { id: "vc-C1-25", en: "prevalent", ru: "распространённый, преобладающий", ex: "This view is prevalent among experts." },
    // nuanced nouns
    { id: "vc-C1-26", en: "discrepancy", ru: "несоответствие, расхождение", ex: "There is a discrepancy in the figures." },
    { id: "vc-C1-27", en: "scrutiny", ru: "тщательное изучение", ex: "The report came under close scrutiny." },
    { id: "vc-C1-28", en: "consensus", ru: "согласие, консенсус", ex: "The committee reached a consensus." },
    { id: "vc-C1-29", en: "endeavour", ru: "стремление, усилие", ex: "Their endeavour finally paid off." },
    { id: "vc-C1-30", en: "perception", ru: "восприятие", ex: "Public perception of the brand changed." },
  ]);

  // ===== C2 — refined, formal, low-frequency =====
  P("vocab", "C2", [
    // refined adjectives
    { id: "vc-C2-01", en: "ubiquitous", ru: "вездесущий, повсеместный", ex: "Smartphones have become ubiquitous." },
    { id: "vc-C2-02", en: "meticulousness", ru: "скрупулёзность", ex: "Her meticulousness impressed the editors." },
    { id: "vc-C2-03", en: "ephemeral", ru: "мимолётный, эфемерный", ex: "Fame can be surprisingly ephemeral." },
    { id: "vc-C2-04", en: "innate", ru: "врождённый", ex: "She has an innate sense of rhythm." },
    { id: "vc-C2-05", en: "tenacious", ru: "упорный, цепкий", ex: "He is tenacious in pursuing his goals." },
    { id: "vc-C2-06", en: "austere", ru: "строгий, аскетичный", ex: "The room had an austere elegance." },
    // formal verbs
    { id: "vc-C2-07", en: "elucidate", ru: "разъяснять, прояснять", ex: "Allow me to elucidate the matter." },
    { id: "vc-C2-08", en: "exacerbate", ru: "усугублять, обострять", ex: "Delays only exacerbate the crisis." },
    { id: "vc-C2-09", en: "mitigate", ru: "смягчать, уменьшать", ex: "Measures were taken to mitigate the risk." },
    { id: "vc-C2-10", en: "corroborate", ru: "подтверждать", ex: "Witnesses corroborated his account." },
    { id: "vc-C2-11", en: "delineate", ru: "очерчивать, обозначать", ex: "The report delineates the main risks." },
    { id: "vc-C2-12", en: "obfuscate", ru: "запутывать, затуманивать", ex: "Jargon can obfuscate the real meaning." },
    // sophisticated nouns
    { id: "vc-C2-13", en: "paradigm", ru: "парадигма, модель", ex: "The discovery created a new paradigm." },
    { id: "vc-C2-14", en: "nuance", ru: "нюанс, тонкость", ex: "The translation lost a subtle nuance." },
    { id: "vc-C2-15", en: "epitome", ru: "воплощение, образец", ex: "She is the epitome of professionalism." },
    { id: "vc-C2-16", en: "dichotomy", ru: "дихотомия, противопоставление", ex: "He challenged the dichotomy of work and rest." },
    { id: "vc-C2-17", en: "juxtaposition", ru: "сопоставление, соседство", ex: "The juxtaposition of colours was striking." },
    { id: "vc-C2-18", en: "connotation", ru: "коннотация, оттенок значения", ex: "The word carries a negative connotation." },
    // rhetoric and style
    { id: "vc-C2-19", en: "eloquent", ru: "красноречивый", ex: "She gave an eloquent and moving speech." },
    { id: "vc-C2-20", en: "succinct", ru: "лаконичный, сжатый", ex: "His summary was clear and succinct." },
    { id: "vc-C2-21", en: "verbose", ru: "многословный", ex: "The instructions were needlessly verbose." },
    { id: "vc-C2-22", en: "candour", ru: "искренность, прямота", ex: "I appreciate your candour on the issue." },
    // abstract and philosophical
    { id: "vc-C2-23", en: "quintessential", ru: "типичный, эталонный", ex: "It is the quintessential English village." },
    { id: "vc-C2-24", en: "intrinsic", ru: "присущий, неотъемлемый", ex: "Curiosity is intrinsic to good research." },
    { id: "vc-C2-25", en: "pragmatic", ru: "прагматичный, практичный", ex: "We took a pragmatic approach to the problem." },
    { id: "vc-C2-26", en: "scrupulous", ru: "щепетильный, добросовестный", ex: "He kept scrupulous records of everything." },
    // low-frequency, elegant
    { id: "vc-C2-27", en: "serendipity", ru: "счастливая случайность", ex: "The discovery was pure serendipity." },
    { id: "vc-C2-28", en: "perfunctory", ru: "поверхностный, формальный", ex: "He gave only a perfunctory apology." },
    { id: "vc-C2-29", en: "magnanimous", ru: "великодушный", ex: "She was magnanimous in victory." },
    { id: "vc-C2-30", en: "indelible", ru: "неизгладимый, несмываемый", ex: "The trip left an indelible impression." },
  ]);
})();
