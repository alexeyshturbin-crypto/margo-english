(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => {
    C[track] = C[track] || {};
    C[track][lvl] = C[track][lvl] || [];
    arr.forEach(x => C[track][lvl].push(x));
  };

  // ===================== PHRASAL VERBS =====================

  P("phrasal", "A2", [
    { id: "pv-A2-01", en: "get up", ru: "вставать (с постели)", ex: "I get up at seven o'clock every morning." },
    { id: "pv-A2-02", en: "sit down", ru: "садиться", ex: "Please sit down and open your books." },
    { id: "pv-A2-03", en: "stand up", ru: "вставать (на ноги)", ex: "Everybody stand up when the teacher comes in." },
    { id: "pv-A2-04", en: "wake up", ru: "просыпаться", ex: "I wake up early on school days." },
    { id: "pv-A2-05", en: "put on", ru: "надевать", ex: "Put on your coat, it's cold outside." },
    { id: "pv-A2-06", en: "take off", ru: "снимать (одежду)", ex: "Take off your shoes at the door." },
    { id: "pv-A2-07", en: "turn on", ru: "включать", ex: "Can you turn on the light, please?" },
    { id: "pv-A2-08", en: "turn off", ru: "выключать", ex: "Don't forget to turn off the TV." },
    { id: "pv-A2-09", en: "come in", ru: "входить", ex: "Come in and close the door behind you." },
    { id: "pv-A2-10", en: "go out", ru: "выходить (из дома)", ex: "We often go out for a walk after dinner." },
    { id: "pv-A2-11", en: "pick up", ru: "поднимать; забирать", ex: "Please pick up your toys from the floor." },
    { id: "pv-A2-12", en: "look for", ru: "искать", ex: "I'm looking for my keys." }
  ]);

  P("phrasal", "B1", [
    { id: "pv-B1-01", en: "give up", ru: "сдаваться; бросать (привычку)", ex: "Don't give up, you can do it!" },
    { id: "pv-B1-02", en: "find out", ru: "выяснять, узнавать", ex: "I need to find out what time the train leaves." },
    { id: "pv-B1-03", en: "grow up", ru: "взрослеть", ex: "She grew up in a small village." },
    { id: "pv-B1-04", en: "look after", ru: "присматривать, заботиться", ex: "Can you look after my dog this weekend?" },
    { id: "pv-B1-05", en: "get on with", ru: "ладить (с кем-то)", ex: "I get on well with my classmates." },
    { id: "pv-B1-06", en: "run out of", ru: "испытывать нехватку, заканчиваться", ex: "We've run out of milk." },
    { id: "pv-B1-07", en: "put off", ru: "откладывать", ex: "They put off the meeting until next week." },
    { id: "pv-B1-08", en: "turn up", ru: "появляться, приходить", ex: "He turned up late for the party." },
    { id: "pv-B1-09", en: "carry on", ru: "продолжать", ex: "Carry on reading from page ten." },
    { id: "pv-B1-10", en: "fill in", ru: "заполнять (форму)", ex: "Please fill in this form with your details." },
    { id: "pv-B1-11", en: "take care of", ru: "заботиться, ухаживать", ex: "Nurses take care of sick people." },
    { id: "pv-B1-12", en: "set off", ru: "отправляться (в путь)", ex: "We set off early to avoid the traffic." }
  ]);

  P("phrasal", "B2", [
    { id: "pv-B2-01", en: "come up with", ru: "придумать (идею, решение)", ex: "She came up with a brilliant plan." },
    { id: "pv-B2-02", en: "put up with", ru: "мириться, терпеть", ex: "I can't put up with this noise any longer." },
    { id: "pv-B2-03", en: "look forward to", ru: "ждать с нетерпением", ex: "I'm looking forward to the holidays." },
    { id: "pv-B2-04", en: "get away with", ru: "уйти безнаказанным", ex: "He cheated and got away with it." },
    { id: "pv-B2-05", en: "bring up", ru: "поднимать (тему); воспитывать", ex: "She brought up an interesting point in the meeting." },
    { id: "pv-B2-06", en: "break down", ru: "ломаться (о технике); срываться", ex: "Our car broke down on the motorway." },
    { id: "pv-B2-07", en: "work out", ru: "разбираться, вычислять; тренироваться", ex: "I can't work out how to solve this problem." },
    { id: "pv-B2-08", en: "turn down", ru: "отклонять, отказывать", ex: "She turned down the job offer." },
    { id: "pv-B2-09", en: "carry out", ru: "выполнять, осуществлять", ex: "The scientists carried out several experiments." },
    { id: "pv-B2-10", en: "point out", ru: "указывать, отмечать", ex: "He pointed out a mistake in my essay." },
    { id: "pv-B2-11", en: "cut down on", ru: "сокращать (потребление)", ex: "You should cut down on sugar." },
    { id: "pv-B2-12", en: "make up for", ru: "компенсировать, возмещать", ex: "He bought flowers to make up for being late." }
  ]);

  P("phrasal", "C1", [
    { id: "pv-C1-01", en: "account for", ru: "объяснять; составлять (долю)", ex: "Exports account for a large part of the economy." },
    { id: "pv-C1-02", en: "back up", ru: "поддерживать; подтверждать; создавать копию", ex: "Her claims were backed up by solid evidence." },
    { id: "pv-C1-03", en: "rule out", ru: "исключать (возможность)", ex: "The police have not ruled out foul play." },
    { id: "pv-C1-04", en: "draw up", ru: "составлять (документ, план)", ex: "The lawyers drew up a new contract." },
    { id: "pv-C1-05", en: "fall through", ru: "сорваться, не состояться", ex: "The deal fell through at the last minute." },
    { id: "pv-C1-06", en: "iron out", ru: "устранять (разногласия, проблемы)", ex: "We need to iron out a few details before signing." },
    { id: "pv-C1-07", en: "single out", ru: "выделять, обособлять", ex: "She was singled out for special praise." },
    { id: "pv-C1-08", en: "phase out", ru: "постепенно прекращать", ex: "The company is phasing out the old software." },
    { id: "pv-C1-09", en: "live up to", ru: "соответствовать (ожиданиям)", ex: "The film didn't live up to the hype." },
    { id: "pv-C1-10", en: "branch out", ru: "расширять деятельность, осваивать новое", ex: "The firm decided to branch out into online sales." },
    { id: "pv-C1-11", en: "stem from", ru: "проистекать, быть следствием", ex: "Many of his problems stem from a lack of confidence." },
    { id: "pv-C1-12", en: "weigh up", ru: "взвешивать, оценивать (варианты)", ex: "We need to weigh up the pros and cons carefully." }
  ]);

  P("phrasal", "C2", [
    { id: "pv-C2-01", en: "boil down to", ru: "сводиться к (сути)", ex: "It all boils down to a question of money." },
    { id: "pv-C2-02", en: "gloss over", ru: "замалчивать, обходить (неприятное)", ex: "The report glossed over the safety concerns." },
    { id: "pv-C2-03", en: "bank on", ru: "рассчитывать, полагаться на", ex: "Don't bank on the weather staying fine." },
    { id: "pv-C2-04", en: "wriggle out of", ru: "увиливать, выкручиваться (от обязательств)", ex: "He always tries to wriggle out of his responsibilities." },
    { id: "pv-C2-05", en: "egg on", ru: "подстрекать, подзадоривать", ex: "His friends egged him on to take the dare." },
    { id: "pv-C2-06", en: "tide over", ru: "помочь продержаться (временно)", ex: "This loan should tide us over until payday." },
    { id: "pv-C2-07", en: "reel off", ru: "отбарабанить, перечислить без запинки", ex: "She reeled off the names of all the capitals." },
    { id: "pv-C2-08", en: "hark back to", ru: "возвращаться (мыслями) к прошлому", ex: "His designs hark back to the 1920s." },
    { id: "pv-C2-09", en: "fritter away", ru: "растрачивать впустую (время, деньги)", ex: "He frittered away his savings on gambling." },
    { id: "pv-C2-10", en: "square with", ru: "согласовываться, увязываться с", ex: "His story doesn't square with the facts." },
    { id: "pv-C2-11", en: "wear down", ru: "изматывать, постепенно сломить", ex: "The constant criticism gradually wore her down." },
    { id: "pv-C2-12", en: "shrug off", ru: "не придавать значения, отмахиваться", ex: "He shrugged off the criticism and carried on." }
  ]);

  // ===================== IDIOMS =====================

  P("idioms", "A2", [
    { id: "id2-A2-01", en: "a piece of cake", ru: "проще простого", ex: "The test was a piece of cake." },
    { id: "id2-A2-02", en: "once in a while", ru: "иногда, время от времени", ex: "We eat out once in a while." },
    { id: "id2-A2-03", en: "feel blue", ru: "грустить, хандрить", ex: "I feel blue when it rains all day." },
    { id: "id2-A2-04", en: "make up your mind", ru: "решиться, принять решение", ex: "Make up your mind: tea or coffee?" },
    { id: "id2-A2-05", en: "in a hurry", ru: "в спешке, второпях", ex: "Sorry, I can't talk now, I'm in a hurry." },
    { id: "id2-A2-06", en: "all day long", ru: "целый день напролёт", ex: "The kids played outside all day long." },
    { id: "id2-A2-07", en: "give a hand", ru: "помочь", ex: "Can you give me a hand with these bags?" },
    { id: "id2-A2-08", en: "have a sweet tooth", ru: "быть сладкоежкой", ex: "She has a sweet tooth and loves chocolate." },
    { id: "id2-A2-09", en: "in no time", ru: "очень быстро, мигом", ex: "We finished the puzzle in no time." },
    { id: "id2-A2-10", en: "best of both worlds", ru: "лучшее из двух вариантов", ex: "Working from home gives me the best of both worlds." }
  ]);

  P("idioms", "B1", [
    { id: "id2-B1-01", en: "break the ice", ru: "растопить лёд, разрядить обстановку", ex: "He told a joke to break the ice at the meeting." },
    { id: "id2-B1-02", en: "under the weather", ru: "неважно себя чувствовать", ex: "I'm feeling a bit under the weather today." },
    { id: "id2-B1-03", en: "hit the books", ru: "усердно заниматься, корпеть над учёбой", ex: "I have to hit the books before the exam." },
    { id: "id2-B1-04", en: "cost an arm and a leg", ru: "стоить целое состояние", ex: "That new phone costs an arm and a leg." },
    { id: "id2-B1-05", en: "once in a blue moon", ru: "крайне редко", ex: "He visits his grandparents once in a blue moon." },
    { id: "id2-B1-06", en: "the ball is in your court", ru: "теперь твоя очередь действовать", ex: "I've done my part; now the ball is in your court." },
    { id: "id2-B1-07", en: "pull someone's leg", ru: "разыгрывать, подшучивать", ex: "Don't worry, I'm just pulling your leg." },
    { id: "id2-B1-08", en: "on the same page", ru: "придерживаться одного мнения", ex: "Let's make sure we're all on the same page." },
    { id: "id2-B1-09", en: "miss the boat", ru: "упустить возможность", ex: "If you don't apply now, you'll miss the boat." },
    { id: "id2-B1-10", en: "keep an eye on", ru: "присматривать, следить за", ex: "Could you keep an eye on my bag for a minute?" }
  ]);

  P("idioms", "B2", [
    { id: "id2-B2-01", en: "bite the bullet", ru: "стиснуть зубы, решиться на трудное", ex: "I decided to bite the bullet and ask for a raise." },
    { id: "id2-B2-02", en: "the last straw", ru: "последняя капля", ex: "His rude comment was the last straw." },
    { id: "id2-B2-03", en: "get cold feet", ru: "струсить в последний момент", ex: "She got cold feet before the wedding." },
    { id: "id2-B2-04", en: "let the cat out of the bag", ru: "проболтаться, выдать секрет", ex: "He let the cat out of the bag about the surprise party." },
    { id: "id2-B2-05", en: "go the extra mile", ru: "приложить дополнительные усилия", ex: "Our staff always go the extra mile for customers." },
    { id: "id2-B2-06", en: "on the ball", ru: "сообразительный, расторопный", ex: "The new assistant is really on the ball." },
    { id: "id2-B2-07", en: "cut corners", ru: "экономить на качестве, делать наспех", ex: "Don't cut corners when it comes to safety." },
    { id: "id2-B2-08", en: "a blessing in disguise", ru: "не было бы счастья, да несчастье помогло", ex: "Losing that job was a blessing in disguise." },
    { id: "id2-B2-09", en: "face the music", ru: "отвечать за последствия", ex: "He had to face the music after the mistake." },
    { id: "id2-B2-10", en: "sit on the fence", ru: "занимать выжидательную позицию", ex: "Stop sitting on the fence and make a decision." }
  ]);

  P("idioms", "C1", [
    { id: "id2-C1-01", en: "a storm in a teacup", ru: "буря в стакане воды", ex: "The whole argument was just a storm in a teacup." },
    { id: "id2-C1-02", en: "the tip of the iceberg", ru: "лишь верхушка айсберга", ex: "These complaints are only the tip of the iceberg." },
    { id: "id2-C1-03", en: "throw in the towel", ru: "признать поражение, сдаться", ex: "After months of trying, they threw in the towel." },
    { id: "id2-C1-04", en: "burn the midnight oil", ru: "работать допоздна", ex: "She burned the midnight oil to finish the report." },
    { id: "id2-C1-05", en: "a double-edged sword", ru: "палка о двух концах", ex: "Fame can be a double-edged sword." },
    { id: "id2-C1-06", en: "read between the lines", ru: "читать между строк", ex: "You have to read between the lines of his letter." },
    { id: "id2-C1-07", en: "jump on the bandwagon", ru: "присоединиться к модному течению", ex: "Many firms jumped on the bandwagon of remote work." },
    { id: "id2-C1-08", en: "a grey area", ru: "неоднозначная, спорная зона", ex: "The legality of this practice is a grey area." },
    { id: "id2-C1-09", en: "take it with a pinch of salt", ru: "относиться скептически", ex: "Take his advice with a pinch of salt." },
    { id: "id2-C1-10", en: "off the top of your head", ru: "навскидку, не задумываясь", ex: "Off the top of my head, I'd say about fifty people." }
  ]);

  P("idioms", "C2", [
    { id: "id2-C2-01", en: "a flash in the pan", ru: "недолгий успех, разовый всплеск", ex: "His first hit turned out to be a flash in the pan." },
    { id: "id2-C2-02", en: "the elephant in the room", ru: "очевидная, но замалчиваемая проблема", ex: "Nobody wanted to mention the elephant in the room." },
    { id: "id2-C2-03", en: "swan song", ru: "лебединая песня, прощальное выступление", ex: "The concert was the singer's swan song." },
    { id: "id2-C2-04", en: "a baptism of fire", ru: "боевое крещение, тяжёлое начало", ex: "His first day was a real baptism of fire." },
    { id: "id2-C2-05", en: "throw caution to the wind", ru: "пуститься во все тяжкие, рискнуть", ex: "They threw caution to the wind and invested everything." },
    { id: "id2-C2-06", en: "a wolf in sheep's clothing", ru: "волк в овечьей шкуре", ex: "He seemed kind, but he was a wolf in sheep's clothing." },
    { id: "id2-C2-07", en: "pour oil on troubled waters", ru: "сглаживать конфликт, успокаивать", ex: "Her calm words poured oil on troubled waters." },
    { id: "id2-C2-08", en: "a Pyrrhic victory", ru: "пиррова победа", ex: "Winning the case was a Pyrrhic victory given the costs." },
    { id: "id2-C2-09", en: "nip it in the bud", ru: "пресечь в зародыше", ex: "We must nip this problem in the bud." },
    { id: "id2-C2-10", en: "the lion's share", ru: "львиная доля", ex: "She took the lion's share of the profits." }
  ]);
})();
