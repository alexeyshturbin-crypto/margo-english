(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => {
    C[track] = C[track] || {};
    C[track][lvl] = C[track][lvl] || [];
    arr.forEach(x => C[track][lvl].push(x));
  };

  // ===================== A2 =====================
  P("writing", "A2", [
    {
      id: "wr-A2-01",
      type: "Открытка с отдыха",
      minWords: 50,
      minutes: 15,
      prompt: "You are on holiday at the seaside. Write a postcard to your friend Sam.\nSay:\n• where you are\n• what the weather is like\n• one fun thing you did\n• when you will come home",
      tips: [
        "Начни с обращения: «Hi Sam,» и закончи «See you soon, <твоё имя>».",
        "Пиши короткими простыми предложениями в Present Simple и Past Simple.",
        "Ответь на все четыре пункта задания — каждый по одному предложению.",
        "Не забудь про восклицательные слова: It's so nice here!",
        "Считай слова: должно быть не меньше 50."
      ],
      phrases: [
        "Hi Sam,",
        "I am here in ...",
        "The weather is sunny and warm.",
        "Yesterday I went to the beach.",
        "It is really fun!",
        "I will come home on Sunday.",
        "See you soon,"
      ],
      checklist: [
        "Есть приветствие и подпись?",
        "Рассказал, где ты?",
        "Написал про погоду?",
        "Описал одно весёлое дело?",
        "Сказал, когда вернёшься домой?",
        "Не меньше 50 слов?"
      ],
      model: "Hi Sam,\n\nI am here in Spain with my family. The weather is hot and very sunny every day. Yesterday I went to the beach and made a big sandcastle with my brother. We also swam in the blue sea, and it was so much fun! Today we are going to eat ice cream in the old town. I miss you a lot. I will come home next Sunday, and then I can show you all my photos.\n\nSee you soon,\nAlex"
    },
    {
      id: "wr-A2-02",
      type: "Короткое сообщение другу",
      minWords: 50,
      minutes: 15,
      prompt: "Your friend invited you to a birthday party on Saturday. Write a short message back.\nSay:\n• thank you for the invitation\n• that you can come\n• what time you will arrive\n• what present you will bring",
      tips: [
        "Сообщение короткое и дружеское — начни с «Hi» и имени друга.",
        "Сначала поблагодари за приглашение, потом скажи, что придёшь.",
        "Используй «I will» или «I'm going to» для будущего времени.",
        "Назови конкретное время: at four o'clock.",
        "Закончи дружеской фразой: Can't wait!"
      ],
      phrases: [
        "Thank you for the invitation!",
        "I would love to come.",
        "Yes, I can come to your party.",
        "I will arrive at four o'clock.",
        "I'm going to bring you a present.",
        "I can't wait to see you!",
        "See you on Saturday,"
      ],
      checklist: [
        "Поблагодарил за приглашение?",
        "Сказал, что можешь прийти?",
        "Назвал время прихода?",
        "Сказал, какой подарок принесёшь?",
        "Есть дружеское прощание?",
        "Не меньше 50 слов?"
      ],
      model: "Hi Mia,\n\nThank you so much for the invitation to your birthday party! I would really love to come on Saturday. I am very happy that you asked me. I will arrive at four o'clock, just after lunch. My mum can give me a ride to your house. I am going to bring you a nice present — a big box of chocolates and a funny book that I think you will like. I can't wait to see you and your family. It is going to be a great day!\n\nSee you on Saturday,\nLeo"
    },
    {
      id: "wr-A2-03",
      type: "Письмо о новом друге",
      minWords: 60,
      minutes: 15,
      prompt: "Write a short email to your pen friend about a new friend at school.\nSay:\n• your new friend's name and age\n• what they look like\n• what you do together\n• why you like them",
      tips: [
        "Опиши внешность простыми словами: tall, short hair, blue eyes.",
        "Используй has got / has для описания: She has long hair.",
        "Расскажи о совместных делах в Present Simple: We play together.",
        "Объясни, почему он/она тебе нравится: because he is kind.",
        "Начни с «Dear ...» и закончи «Best wishes»."
      ],
      phrases: [
        "Dear Anna,",
        "I want to tell you about my new friend.",
        "His name is Tom and he is nine.",
        "He has short brown hair.",
        "We play football together.",
        "I like him because he is funny.",
        "Best wishes,"
      ],
      checklist: [
        "Назвал имя и возраст друга?",
        "Описал, как он/она выглядит?",
        "Рассказал, что делаете вместе?",
        "Объяснил, почему он/она тебе нравится?",
        "Есть обращение и подпись?",
        "Не меньше 60 слов?"
      ],
      model: "Dear Anna,\n\nI want to tell you about my new friend at school. His name is Tom and he is nine years old. Tom is quite tall and he has short brown hair and green eyes. He always wears a blue cap. We sit together in class, and at break time we play football in the playground. After school we sometimes ride our bikes in the park. I like Tom a lot because he is very kind and funny, and he always helps me with my maths homework. I hope you can meet him one day.\n\nBest wishes,\nSofia"
    }
  ]);

  // ===================== B1 =====================
  P("writing", "B1", [
    {
      id: "wr-B1-01",
      type: "Письмо другу о новостях",
      minWords: 100,
      minutes: 20,
      prompt: "You have just moved to a new town. Write an email to your friend.\n• describe your new home\n• say what you like about the new town\n• say what you miss about your old place\n• invite your friend to visit you",
      tips: [
        "Используй неформальный стиль: сокращения (I'm, it's, don't).",
        "Свяжи предложения словами and, but, because, so, also.",
        "Для прошлого опыта используй Past Simple, для нового — Present Simple.",
        "Покажи эмоции: I'm really happy / I miss you a lot.",
        "Заверши приглашением и вопросом, чтобы получить ответ.",
        "Раздели текст на абзацы по пунктам задания."
      ],
      phrases: [
        "Guess what — I've got some news!",
        "We've just moved to a new town.",
        "The best thing about it is ...",
        "I really love the fact that ...",
        "The only thing I miss is ...",
        "Why don't you come and visit me?",
        "I can't wait to hear from you.",
        "Write back soon,"
      ],
      checklist: [
        "Описал новый дом?",
        "Сказал, что нравится в новом городе?",
        "Написал, чего не хватает со старого места?",
        "Пригласил друга в гости?",
        "Есть неформальное начало и концовка?",
        "Не меньше 100 слов?"
      ],
      model: "Hi Daniel,\n\nGuess what — I've got some big news! Last month we moved to a new town called Greenfield, and I wanted to tell you all about it.\n\nOur new home is a small house with a garden, which is much bigger than our old flat. I've finally got my own room, and I've painted the walls blue. The best thing about the town is that there is a huge park nearby with a skate ramp, so I go there almost every day. The people are friendly too.\n\nOf course, there are things I miss. The only thing I really miss is you and the other guys from our old street. It feels strange not to see you after school.\n\nWhy don't you come and visit me during the holidays? You could stay for a week and we could explore the park together. Let me know if you can!\n\nWrite back soon,\nMax"
    },
    {
      id: "wr-B1-02",
      type: "Email с просьбой о совете",
      minWords: 100,
      minutes: 20,
      prompt: "You want to learn a new hobby but you are not sure which one to choose. Write an email to an English-speaking friend.\n• explain your problem\n• describe two hobbies you are thinking about\n• ask for their advice\n• say what you will do next",
      tips: [
        "Чётко объясни проблему в первом абзаце.",
        "Опиши плюсы и минусы каждого хобби (one... the other...).",
        "Используй вежливые вопросы: What do you think? Which one would you choose?",
        "Применяй модальные глаголы: I could, I should, I might.",
        "Покажи, что ждёшь ответа: I'd love to hear your opinion.",
        "Следи за абзацами и логикой."
      ],
      phrases: [
        "I need your advice about something.",
        "I'm thinking of starting a new hobby.",
        "On the one hand, ...",
        "On the other hand, ...",
        "Which one do you think I should choose?",
        "What would you do in my place?",
        "I'd really appreciate your help.",
        "Looking forward to your reply,"
      ],
      checklist: [
        "Объяснил свою проблему?",
        "Описал два варианта хобби?",
        "Попросил совета?",
        "Сказал, что сделаешь дальше?",
        "Использовал модальные глаголы и вежливые вопросы?",
        "Не меньше 100 слов?"
      ],
      model: "Hi Olivia,\n\nHow are you? I need your advice about something, because I just can't make up my mind.\n\nI really want to start a new hobby this year, but I'm stuck between two ideas. On the one hand, I could join a guitar class. I've always loved music, and it would be great to play songs at parties. The problem is that a guitar is quite expensive and lessons are twice a week. On the other hand, I'm thinking about photography. It's more flexible because I can practise whenever I want, but I'd need to learn a lot on my own.\n\nWhich one do you think I should choose? You're good at trying new things, so I'd really value your opinion. What would you do in my place?\n\nWhatever you say, I'll probably visit both clubs next week before I decide. I'd really appreciate your help!\n\nLooking forward to your reply,\nRuby"
    },
    {
      id: "wr-B1-03",
      type: "Письмо-благодарность",
      minWords: 100,
      minutes: 20,
      prompt: "You stayed with a host family during a school exchange in England. Write a thank-you email to them.\n• thank them for having you\n• mention your favourite memory\n• apologise for any trouble you caused\n• say you hope to see them again",
      tips: [
        "Тон тёплый и искренний, но вежливый.",
        "Конкретизируй воспоминание — не «it was nice», а что именно понравилось.",
        "Для извинения используй I'm sorry for / I apologise for + -ing.",
        "Используй Present Perfect для опыта: I've never felt so welcome.",
        "Заверши пожеланием будущей встречи.",
        "Проверь грамматику и абзацы."
      ],
      phrases: [
        "I'm writing to thank you for ...",
        "I had a wonderful time staying with you.",
        "My favourite memory was ...",
        "I'm really sorry for ...",
        "Thank you again for your kindness.",
        "I hope we can meet again soon.",
        "Please give my regards to ...",
        "With many thanks,"
      ],
      checklist: [
        "Поблагодарил семью за приём?",
        "Упомянул любимое воспоминание?",
        "Извинился за возможные неудобства?",
        "Выразил надежду на новую встречу?",
        "Тон вежливый и тёплый?",
        "Не меньше 100 слов?"
      ],
      model: "Dear Mr and Mrs Carter,\n\nI'm writing to thank you so much for having me in your home during the exchange. I had a truly wonderful time, and I will never forget how kind and welcoming you both were from the very first day.\n\nThere were so many great moments, but my favourite memory was the Sunday trip to the coast, when we walked along the cliffs and you taught me how to make a proper English cream tea. It made me feel like part of the family.\n\nI'm also really sorry for breaking the small glass in the kitchen and for staying up too late on a few nights. I hope I didn't cause you too much trouble.\n\nThank you again for everything. I really hope we can meet again soon, perhaps when you visit my country. Please give my regards to Lucy and the dog!\n\nWith many thanks,\nNina"
    }
  ]);

  // ===================== B2 =====================
  P("writing", "B2", [
    {
      id: "wr-B2-01",
      type: "IELTS GT · Письмо (Task 1)",
      minWords: 150,
      minutes: 20,
      prompt: "You recently bought a piece of electronic equipment, but it did not work properly. Write a letter to the shop manager.\nIn your letter:\n• describe the problem with the equipment\n• explain what happened when you tried to use it\n• say what you would like the manager to do",
      tips: [
        "Это полуформальное письмо: начни с Dear Sir or Madam, закончи Yours faithfully.",
        "Чётко укажи, что и когда ты купил, в первом абзаце.",
        "Опиши проблему детально, но без лишних эмоций.",
        "Чётко сформулируй требование: замена, возврат денег или ремонт.",
        "Покрой все три пункта задания — это обязательное условие.",
        "Следи за объёмом: минимум 150 слов."
      ],
      phrases: [
        "I am writing to complain about ...",
        "I purchased the item on ... from your store.",
        "Unfortunately, the device failed to ...",
        "Despite following the instructions, ...",
        "This has caused me considerable inconvenience.",
        "I would therefore like you to ...",
        "I look forward to a prompt resolution.",
        "Yours faithfully,"
      ],
      checklist: [
        "Указал, что и когда купил?",
        "Описал саму проблему?",
        "Объяснил, что произошло при попытке использовать?",
        "Чётко сформулировал требование к менеджеру?",
        "Правильное обращение и подпись для полуформального письма?",
        "Не меньше 150 слов?"
      ],
      model: "Dear Sir or Madam,\n\nI am writing to complain about a wireless speaker that I purchased from your branch on Oxford Street on 3rd June. Unfortunately, the device has not worked properly since I brought it home.\n\nThe main problem is that the speaker fails to connect to any of my devices. When I first tried to use it, I followed the instructions in the manual carefully and charged it overnight. However, when I switched it on, the Bluetooth light kept flashing but never paired with my phone, tablet or laptop. On the rare occasions it did connect, the sound cut out after a few seconds, making it impossible to listen to music.\n\nAs the speaker is clearly faulty and still under warranty, I would like you to replace it with a new unit that is in full working order. If a replacement is not available, I would expect a complete refund of the £79 I paid.\n\nI have kept the original receipt and packaging, and I look forward to a prompt resolution of this matter.\n\nYours faithfully,\nJohn Davies"
    },
    {
      id: "wr-B2-02",
      type: "IELTS · Эссе-мнение (Task 2)",
      minWords: 250,
      minutes: 40,
      prompt: "Some people believe that children should be allowed to use smartphones from a young age, while others think this is harmful. To what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      tips: [
        "Во введении перефразируй тему и ясно укажи свою позицию.",
        "Используй структуру: введение, 2 основных абзаца, заключение.",
        "Каждый основной абзац — одна идея + объяснение + пример.",
        "Используй связки: Firstly, Moreover, However, In conclusion.",
        "Держи позицию последовательной от начала до конца.",
        "Контролируй время: ~5 мин план, 30 мин текст, 5 мин проверка."
      ],
      phrases: [
        "It is often argued that ...",
        "In my opinion, the disadvantages outweigh the benefits.",
        "One of the main reasons for this is that ...",
        "A clear example of this can be seen in ...",
        "On the other hand, it must be acknowledged that ...",
        "Nevertheless, this does not change the fact that ...",
        "To sum up, I firmly believe that ...",
        "for these reasons"
      ],
      checklist: [
        "Во введении перефразирована тема и заявлена позиция?",
        "Есть минимум два развитых основных абзаца?",
        "Каждый аргумент подкреплён примером?",
        "Использованы разнообразные связующие слова?",
        "Заключение повторяет позицию без новых идей?",
        "Не меньше 250 слов?"
      ],
      model: "In today's digital world, smartphones have become a normal part of daily life, and many parents now give them to very young children. While these devices offer certain advantages, I largely agree that allowing children to use smartphones from a young age is more harmful than beneficial.\n\nThose who support early smartphone use point to its educational value. There are countless apps designed to teach reading, mathematics and foreign languages in an interactive way, which can make learning more engaging than traditional methods. Furthermore, a smartphone allows parents to contact their child instantly, providing a sense of safety. For example, a parent can quickly check that a child has arrived at school.\n\nHowever, I believe the disadvantages are far more significant. Firstly, excessive screen time at an early age can damage developing eyesight and disrupt sleep patterns, both of which are crucial for healthy growth. Secondly, smartphones can become addictive, replacing physical play and face-to-face interaction that children need to develop social skills. A young child glued to a screen at the dinner table is a common and worrying sight. Finally, the internet exposes children to inappropriate content and online strangers, which is extremely difficult for parents to control completely.\n\nIn conclusion, although smartphones can be educational and reassuring for parents, the risks to children's health, social development and safety are too great. For these reasons, I firmly believe that smartphone use should be delayed and carefully supervised until children are old enough to use these devices responsibly."
    },
    {
      id: "wr-B2-03",
      type: "IELTS GT · Письмо другу (Task 1)",
      minWords: 150,
      minutes: 20,
      prompt: "An English-speaking friend is going to visit your country for the first time. Write a letter to your friend.\nIn your letter:\n• say how you feel about the visit\n• suggest some places they should see\n• give some practical advice for the trip",
      tips: [
        "Это неформальное письмо: начни с Dear <имя>, закончи Best wishes / Love.",
        "Покажи эмоции в первом абзаце — искреннюю радость.",
        "Используй should / I'd recommend для рекомендаций мест.",
        "Дай конкретные практические советы: погода, деньги, транспорт.",
        "Используй сокращения и разговорные связки.",
        "Покрой все три пункта и держи 150+ слов."
      ],
      phrases: [
        "I was so excited to hear that ...",
        "I can't wait to show you around!",
        "You absolutely have to see ...",
        "If I were you, I'd definitely visit ...",
        "One thing you should know is ...",
        "Make sure you bring ...",
        "Don't worry about ... — I'll sort it out.",
        "Can't wait to see you,"
      ],
      checklist: [
        "Выразил чувства по поводу визита?",
        "Предложил места, которые стоит посмотреть?",
        "Дал практические советы для поездки?",
        "Тон дружеский, с сокращениями?",
        "Правильное неформальное обращение и подпись?",
        "Не меньше 150 слов?"
      ],
      model: "Dear Emma,\n\nI was absolutely thrilled to hear that you're finally coming to visit my country next month! I've been waiting for this for ages, and I genuinely can't wait to show you around. You're going to love it here.\n\nThere are so many places I want to take you to. First of all, you absolutely have to see the old town, with its narrow cobbled streets and the beautiful cathedral lit up at night. If I were you, I'd also set aside a day for the mountains just outside the city — the views are breathtaking, and we could go hiking together. And of course, no visit is complete without trying our street food at the local market.\n\nA few practical tips: the weather can be unpredictable, so make sure you bring both a light jacket and sunglasses. Cash is still useful in small shops, so bring a little local money, although cards work in most places. Don't worry about getting around — I'll meet you at the airport and sort out the transport.\n\nLet me know your flight details soon!\n\nCan't wait to see you,\nClara"
    }
  ]);

  // ===================== C1 =====================
  P("writing", "C1", [
    {
      id: "wr-C1-01",
      type: "IELTS · Эссе agree/disagree (Task 2)",
      minWords: 250,
      minutes: 40,
      prompt: "Some people think that governments should spend money exploring outer space, while others believe this money should be used to solve problems here on Earth. To what extent do you agree or disagree?\n\nGive reasons for your answer and include relevant examples from your own knowledge or experience.",
      tips: [
        "Заяви чёткую позицию во введении и удерживай её до конца.",
        "Используй точные связки: Admittedly, Consequently, By contrast.",
        "Развивай идеи глубоко: причина → следствие → пример.",
        "Демонстрируй сложный синтаксис: условные, причастные обороты.",
        "Признай противоположную точку зрения, затем опровергни.",
        "Оставь время на проверку коллокаций и артиклей."
      ],
      phrases: [
        "It is a matter of ongoing debate whether ...",
        "I am inclined to agree that ...",
        "A compelling argument in favour of this view is that ...",
        "Admittedly, critics may contend that ...",
        "However, this objection overlooks the fact that ...",
        "This ultimately yields long-term benefits such as ...",
        "Weighing up both sides, I would argue that ...",
        "In the final analysis,"
      ],
      checklist: [
        "Позиция ясно заявлена и последовательна?",
        "Признана и опровергнута противоположная точка зрения?",
        "Идеи развиты с примерами, а не просто перечислены?",
        "Использованы продвинутые связки и структуры?",
        "Заключение синтезирует, а не просто повторяет?",
        "Не меньше 250 слов?"
      ],
      model: "Whether national budgets should fund space exploration or be redirected towards pressing terrestrial problems is a matter of ongoing debate. While I acknowledge the urgency of issues here on Earth, I am inclined to disagree with the view that space investment is wasteful, as I believe a balanced commitment to both serves humanity best.\n\nThose who oppose space spending make a compelling point. Vast sums are channelled into missions while millions still lack access to clean water, healthcare and education. From this perspective, financing a journey to Mars when domestic hospitals are underfunded can seem morally indefensible, and governments are right to prioritise the welfare of their citizens.\n\nHowever, this objection overlooks the fact that space research delivers tangible benefits on Earth. Technologies originally developed for space exploration, such as satellite navigation, weather forecasting and certain medical imaging tools, now save countless lives daily. Moreover, monitoring our planet from orbit is essential for tracking climate change and predicting natural disasters, which directly addresses some of the very terrestrial problems critics are concerned about. In other words, the two goals are not mutually exclusive.\n\nAdmittedly, the scale of investment must be reasonable, and reckless prestige projects deserve scrutiny. Yet abandoning space science altogether would deprive future generations of innovation and knowledge that cannot be predicted in advance.\n\nWeighing up both sides, I would argue that governments should continue to fund space exploration alongside, rather than instead of, efforts to improve life on Earth. In the final analysis, scientific curiosity and social responsibility can and should advance together."
    },
    {
      id: "wr-C1-02",
      type: "IELTS · Эссе discuss both views (Task 2)",
      minWords: 250,
      minutes: 40,
      prompt: "Some people believe that university education should be free for all students, while others think students should pay for their own studies. Discuss both views and give your own opinion.\n\nGive reasons for your answer and include relevant examples from your own knowledge or experience.",
      tips: [
        "В этом типе нужно разобрать ОБА мнения и дать своё.",
        "Введение: перефразируй тему и анонсируй обе стороны + позицию.",
        "Абзац 2 — одна точка зрения, абзац 3 — другая, абзац 4 — твоё мнение.",
        "Балансируй: не показывай предвзятость до своего абзаца мнения.",
        "Используй оценочные слова: undeniably, arguably, to a certain extent.",
        "Следи, чтобы своё мнение логично вытекало из анализа."
      ],
      phrases: [
        "There are persuasive arguments on both sides of this debate.",
        "Proponents of free education argue that ...",
        "From their standpoint, ...",
        "Those on the opposing side maintain that ...",
        "It could equally be argued that ...",
        "While both positions have merit, I personally believe ...",
        "The key consideration, in my view, is ...",
        "On balance,"
      ],
      checklist: [
        "Рассмотрены обе точки зрения отдельно?",
        "Своё мнение чётко выделено в отдельном абзаце?",
        "Изложение сбалансировано до личного мнения?",
        "Использованы оценочные наречия и связки?",
        "Заключение отражает взвешенную позицию?",
        "Не меньше 250 слов?"
      ],
      model: "The question of whether university education should be free or financed by students themselves generates persuasive arguments on both sides of the debate. In this essay I will examine each position before explaining why I favour a partially subsidised model.\n\nProponents of free education argue that knowledge is a public good and that access to higher learning should not depend on personal wealth. From their standpoint, tuition fees discourage talented students from poorer backgrounds, thereby entrenching social inequality. Countries such as Germany, where public universities charge no fees, are often cited as evidence that a highly educated workforce benefits the entire economy through innovation and higher tax revenues.\n\nThose on the opposing side maintain that students should contribute to costs that they themselves ultimately benefit from. Since graduates typically earn considerably more over a lifetime, it could be argued that it is unfair to ask taxpayers, including those who never attended university, to fund the qualifications of future high earners. Furthermore, fees may encourage students to take their studies more seriously and to choose courses with genuine career prospects.\n\nWhile both positions have merit, I personally believe the most equitable solution lies somewhere in between. The key consideration, in my view, is access. Education should be heavily subsidised so that no capable student is excluded, but a modest, income-contingent contribution from graduates once they are earning seems fair and financially sustainable.\n\nOn balance, therefore, neither completely free nor fully paid education is ideal; a means-tested system that protects opportunity while sharing costs offers the most sensible compromise."
    },
    {
      id: "wr-C1-03",
      type: "IELTS · Эссе problem/solution (Task 2)",
      minWords: 260,
      minutes: 40,
      prompt: "In many cities, traffic congestion and air pollution from cars have become serious problems. What are the causes of these problems, and what measures could be taken to solve them?\n\nGive reasons for your answer and include relevant examples from your own knowledge or experience.",
      tips: [
        "Структура: введение, абзац о причинах, абзац о решениях, заключение.",
        "Связывай каждое решение с конкретной причиной.",
        "Используй язык причинности: stems from, gives rise to, owing to.",
        "Для решений применяй should, could, would help to + инфинитив.",
        "Подкрепляй решения примерами реальных городов или мер.",
        "Заключение кратко суммирует причины и ключевые решения."
      ],
      phrases: [
        "Several interrelated factors lie behind this phenomenon.",
        "A primary cause stems from ...",
        "This is further exacerbated by ...",
        "One effective measure would be to ...",
        "Equally important is the need to ...",
        "Such a policy has proven successful in ...",
        "If implemented properly, these steps could ...",
        "In conclusion,"
      ],
      checklist: [
        "Чётко изложены причины проблемы?",
        "Предложены конкретные решения?",
        "Каждое решение связано с причиной?",
        "Есть подкрепляющие примеры?",
        "Заключение обобщает причины и меры?",
        "Не меньше 260 слов?"
      ],
      model: "Traffic congestion and the air pollution that accompanies it have become defining problems of modern urban life. This essay will first explore the principal causes of these issues before proposing a number of practical measures to address them.\n\nSeveral interrelated factors lie behind this phenomenon. A primary cause stems from the sheer rise in private car ownership, which has been encouraged by relatively cheap fuel and the convenience of door-to-door travel. As cities expand outwards, more people commute long distances by car, clogging roads during peak hours. This situation is further exacerbated by inadequate public transport in many cities; when buses are unreliable or trains overcrowded, residents understandably prefer to drive. Finally, poor urban planning, with workplaces concentrated in central districts far from residential suburbs, forces millions of vehicles onto the same routes simultaneously.\n\nFortunately, a range of measures could ease both congestion and pollution. One effective solution would be to invest heavily in clean, efficient public transport, making it a genuinely attractive alternative to the car. Cities such as Singapore have shown how reliable metro systems can reduce road traffic dramatically. Equally important is the introduction of congestion charges in city centres, which has proven successful in London by discouraging unnecessary journeys. Governments could also accelerate the shift to electric vehicles through subsidies and charging infrastructure, while urban planners promote cycling lanes and pedestrian zones.\n\nIn conclusion, the twin problems of congestion and pollution arise mainly from excessive car dependency, weak public transport and short-sighted planning. If governments combine better transit, financial deterrents and greener technology, these challenges can be significantly reduced for the benefit of both citizens and the environment."
    }
  ]);

  // ===================== C2 =====================
  P("writing", "C2", [
    {
      id: "wr-C2-01",
      type: "Аргументативное эссе (мнение)",
      minWords: 280,
      minutes: 45,
      prompt: "\"In an age of instant information, the ability to memorise facts is becoming obsolete.\" To what extent do you agree with this statement?\n\nDevelop a nuanced argument, address counter-arguments, and support your position with reasoning and examples.",
      tips: [
        "Сформулируй тонкий, не категоричный тезис (qualified position).",
        "Используй идиоматичный, точный академический регистр.",
        "Интегрируй контраргументы и изящно их разбирай.",
        "Варьируй синтаксис: инверсии, эмфаза, сложноподчинённые конструкции.",
        "Избегай клише; стремись к свежим, точным формулировкам.",
        "Заключение должно синтезировать, а не суммировать."
      ],
      phrases: [
        "It would be facile to assume that ...",
        "There is a kernel of truth in the claim that ...",
        "Nevertheless, to equate access with mastery is to conflate two distinct capacities.",
        "Far from being redundant, memory arguably underpins ...",
        "Critics might counter that ..., yet this position rests on a questionable premise.",
        "What is at stake here is not merely ... but ...",
        "Ultimately, the dichotomy is a false one.",
        "in the final reckoning"
      ],
      checklist: [
        "Тезис нюансирован, а не категоричен?",
        "Контраргументы интегрированы и разобраны?",
        "Регистр последовательно академический и идиоматичный?",
        "Синтаксис разнообразен и сложен?",
        "Заключение синтезирует идеи, а не повторяет их?",
        "Не меньше 280 слов?"
      ],
      model: "The assertion that the capacity to memorise facts is becoming obsolete in an era of instant information has a seductive plausibility. After all, why burden the mind with dates, formulae and definitions when a smartphone can retrieve them in seconds? Yet it would be facile to assume that effortless access renders memory redundant. While I accept that rote learning of trivial detail has lost much of its former value, I contend that internalised knowledge remains indispensable to genuine understanding.\n\nThere is, admittedly, a kernel of truth in the original claim. The sheer volume of information now available means that no individual can, or should, attempt to commit everything to memory; knowing where to find reliable information is itself a vital twenty-first-century skill. In this narrow sense, the obsessive memorisation once demanded by examinations does appear increasingly anachronistic.\n\nNevertheless, to equate access with mastery is to conflate two distinct capacities. Critical thinking does not occur in a vacuum: the mind reasons most fluently when it can draw on a rich store of internalised knowledge. A physician who must pause to look up every symptom cannot diagnose under pressure, just as a fluent speaker of a language cannot consult a dictionary mid-conversation. Far from being redundant, memory arguably underpins creativity, since original insight typically emerges from the unexpected combination of facts already held in mind.\n\nCritics might counter that artificial intelligence will eventually shoulder this cognitive burden entirely, yet this position rests on a questionable premise about the nature of human thought. What is at stake here is not merely convenience but the very architecture of expertise.\n\nUltimately, the dichotomy between memory and access is a false one. In the final reckoning, instant information should be regarded not as a replacement for a well-furnished mind, but as a powerful complement to it."
    },
    {
      id: "wr-C2-02",
      type: "Аргументативное эссе (дискуссия)",
      minWords: 280,
      minutes: 45,
      prompt: "Some commentators argue that economic growth is incompatible with environmental sustainability, while others insist the two can be reconciled. Critically evaluate both positions and present your own reasoned conclusion.\n\nSupport your argument with logical reasoning and relevant examples.",
      tips: [
        "Критически оцени обе позиции, а не просто опиши их.",
        "Используй точную лексику экономики и экологии.",
        "Демонстрируй гибкость мысли через хеджирование: arguably, ostensibly.",
        "Применяй сложные коннекторы: notwithstanding, insofar as, whereby.",
        "Своя позиция должна быть аргументированно выведена, а не заявлена.",
        "Финальный абзац — оригинальный синтез обеих сторон."
      ],
      phrases: [
        "Proponents of the 'degrowth' thesis maintain that ...",
        "This argument, while superficially persuasive, neglects ...",
        "Conversely, advocates of 'green growth' contend that ...",
        "The decisive question is whether ...",
        "Insofar as technology enables decoupling, ...",
        "It would be intellectually dishonest to ignore that ...",
        "On a more fundamental level, ...",
        "I am thus led to the conclusion that"
      ],
      checklist: [
        "Обе позиции критически оценены, а не пересказаны?",
        "Использована точная предметная лексика?",
        "Применены хеджирование и сложные коннекторы?",
        "Собственная позиция аргументированно выведена?",
        "Заключение предлагает оригинальный синтез?",
        "Не меньше 280 слов?"
      ],
      model: "Few debates are as consequential as the question of whether the pursuit of economic growth can be reconciled with the imperative of environmental sustainability. Proponents of the so-called 'degrowth' thesis maintain that the two are fundamentally irreconcilable, since perpetual expansion on a finite planet inevitably exhausts natural resources and destabilises the climate. Advocates of 'green growth', by contrast, insist that innovation can sever the historical link between prosperity and environmental harm. A critical evaluation reveals that each position captures part of the truth while overstating its case.\n\nThe degrowth argument draws its force from a stark physical reality: GDP has, throughout the industrial era, risen in lockstep with carbon emissions and resource depletion. This correlation lends genuine credibility to the claim that endless growth is ecologically suicidal. Yet the argument, while superficially persuasive, neglects the possibility of qualitative change. It assumes that growth must always be material in nature, whereas much of modern value creation is increasingly intangible, residing in services, software and knowledge that consume comparatively few resources.\n\nConversely, the green growth position rightly emphasises decoupling — the prospect that economies can expand even as emissions fall, as several Scandinavian nations have demonstrated. Insofar as technology enables such decoupling, the pessimism of degrowth appears excessive. Nevertheless, it would be intellectually dishonest to ignore that decoupling has so far been partial and geographically uneven, often achieved by exporting polluting industries elsewhere rather than eliminating them.\n\nThe decisive question, then, is not whether growth is inherently destructive, but whether the pace of green innovation can outstrip the environmental costs of expansion. On a more fundamental level, this is a matter of political will as much as technical feasibility.\n\nI am thus led to the conclusion that growth and sustainability are not intrinsically opposed, but reconciling them demands a deliberate redefinition of what we choose to grow."
    },
    {
      id: "wr-C2-03",
      type: "Аргументативное эссе (оценка утверждения)",
      minWords: 290,
      minutes: 45,
      prompt: "\"Art that does not provoke or challenge its audience serves no meaningful purpose.\" Evaluate the validity of this claim, considering the various functions art may serve in society.\n\nConstruct a sophisticated argument supported by examples drawn from any art form.",
      tips: [
        "Оспорь ложную предпосылку утверждения, если она есть.",
        "Привлекай примеры из разных видов искусства для широты.",
        "Используй богатую, образную, но точную лексику.",
        "Структурируй вокруг разных функций искусства, а не за/против.",
        "Контролируй тон — уверенный, но не догматичный.",
        "Заключение должно переосмыслить вопрос, а не закрыть его шаблонно."
      ],
      phrases: [
        "The claim rests on a reductive conception of artistic value.",
        "To privilege provocation above all else is to ...",
        "Consider, for instance, the consolatory power of ...",
        "Art may just as legitimately seek to ... as to disturb.",
        "Such a hierarchy of purposes is difficult to sustain.",
        "One might object that ..., but this conflates ...",
        "What unites these disparate functions is ...",
        "Far from being purposeless, art that soothes ..."
      ],
      checklist: [
        "Оспорена или уточнена предпосылка утверждения?",
        "Примеры взяты из разных видов искусства?",
        "Лексика богатая и точная?",
        "Аргумент структурирован вокруг функций искусства?",
        "Заключение переосмысляет вопрос?",
        "Не меньше 290 слов?"
      ],
      model: "The proposition that art devoid of provocation or challenge is meaningless carries a certain bracing appeal, flattering as it does the avant-garde impulse to disturb. On closer inspection, however, the claim rests on a reductive conception of artistic value, one that elevates a single function of art to the status of its sole justification. While confrontational art undeniably plays a vital cultural role, to privilege provocation above all else is to impoverish our understanding of what art can and should do.\n\nThere is, to be sure, an honourable tradition behind the claim. From Goya's depictions of war to the dissonant ruptures of Stravinsky's early ballets, art that unsettles has repeatedly forced societies to confront uncomfortable truths and has driven aesthetic and moral progress. Such works expand the boundaries of the thinkable, and a culture that never tolerated them would stagnate.\n\nYet art may just as legitimately seek to console, to celebrate or to instil a sense of wonder as to disturb. Consider, for instance, the consolatory power of a Bach chorale played at a funeral, or the quiet solace offered by a landscape painting to a weary observer. These works challenge nothing; their purpose is to restore equilibrium rather than to shatter it, and few would dismiss them as worthless. One might object that such art is merely decorative, but this conflates emotional depth with intellectual agitation, as though feeling soothed were somehow inferior to feeling provoked.\n\nWhat unites these disparate functions is not their capacity to challenge but their ability to enlarge human experience, whether by unsettling the complacent or comforting the bereaved. Far from being purposeless, art that soothes performs a service no less meaningful than art that scandalises.\n\nThe claim, then, mistakes one of art's many voices for its entire vocabulary. The truer measure of art's worth lies not in whether it provokes, but in whether it moves us at all."
    }
  ]);
})();
