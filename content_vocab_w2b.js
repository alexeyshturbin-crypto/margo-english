(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => { C[track]=C[track]||{}; C[track][lvl]=C[track][lvl]||[]; arr.forEach(x=>C[track][lvl].push(x)); };

  P("vocab","B2",[
    // Opinions / arguments
    { id:"v2b-B2-01", en:"to argue that", ru:"утверждать, что", ex:"Critics argue that the policy will harm small businesses." },
    { id:"v2b-B2-02", en:"a compelling argument", ru:"убедительный аргумент", ex:"She made a compelling argument for remote work." },
    { id:"v2b-B2-03", en:"to raise a point", ru:"поднять вопрос/затронуть тему", ex:"You raise a valid point about the budget." },
    { id:"v2b-B2-04", en:"to be in favour of", ru:"быть за (что-либо)", ex:"Most employees are in favour of the new schedule." },
    { id:"v2b-B2-05", en:"to be opposed to", ru:"быть против", ex:"The committee is firmly opposed to the merger." },
    { id:"v2b-B2-06", en:"on the contrary", ru:"напротив", ex:"It wasn't a failure; on the contrary, it taught us a lot." },
    { id:"v2b-B2-07", en:"to back up a claim", ru:"подкрепить утверждение", ex:"Can you back up that claim with data?" },
    { id:"v2b-B2-08", en:"a counterargument", ru:"контраргумент", ex:"Every counterargument she raised was easy to dismiss." },
    { id:"v2b-B2-09", en:"to concede that", ru:"признать (уступая)", ex:"I'll concede that the plan has some risks." },
    { id:"v2b-B2-10", en:"a sweeping statement", ru:"огульное/обобщённое заявление", ex:"That's a sweeping statement with no real evidence." },

    // Science
    { id:"v2b-B2-11", en:"to conduct an experiment", ru:"проводить эксперимент", ex:"They conducted an experiment to test the theory." },
    { id:"v2b-B2-12", en:"a breakthrough", ru:"прорыв", ex:"The vaccine was a major scientific breakthrough." },
    { id:"v2b-B2-13", en:"to draw a conclusion", ru:"делать вывод", ex:"It's too early to draw any firm conclusions." },
    { id:"v2b-B2-14", en:"a hypothesis", ru:"гипотеза", ex:"The data supported their original hypothesis." },
    { id:"v2b-B2-15", en:"reliable data", ru:"надёжные данные", ex:"Decisions should be based on reliable data." },
    { id:"v2b-B2-16", en:"to carry out research", ru:"вести исследование", ex:"The team carried out research over three years." },
    { id:"v2b-B2-17", en:"a significant finding", ru:"значимый результат/находка", ex:"The study produced several significant findings." },

    // Society
    { id:"v2b-B2-18", en:"social inequality", ru:"социальное неравенство", ex:"The report highlights growing social inequality." },
    { id:"v2b-B2-19", en:"to tackle a problem", ru:"решать проблему", ex:"The government must tackle the housing problem." },
    { id:"v2b-B2-20", en:"a pressing issue", ru:"насущная проблема", ex:"Climate change is a pressing issue for everyone." },
    { id:"v2b-B2-21", en:"to raise awareness", ru:"повышать осведомлённость", ex:"The campaign aims to raise awareness of recycling." },
    { id:"v2b-B2-22", en:"the general public", ru:"широкая общественность", ex:"The findings were shared with the general public." },
    { id:"v2b-B2-23", en:"a widespread belief", ru:"распространённое мнение", ex:"It's a widespread belief that money buys happiness." },
    { id:"v2b-B2-24", en:"to have an impact on", ru:"влиять на", ex:"Social media has a huge impact on teenagers." },

    // Business
    { id:"v2b-B2-25", en:"to meet a deadline", ru:"уложиться в срок", ex:"We worked overtime to meet the deadline." },
    { id:"v2b-B2-26", en:"a competitive edge", ru:"конкурентное преимущество", ex:"Innovation gives the company a competitive edge." },
    { id:"v2b-B2-27", en:"to launch a product", ru:"запускать продукт", ex:"They plan to launch the product next spring." },
    { id:"v2b-B2-28", en:"a target audience", ru:"целевая аудитория", ex:"The ad missed its target audience entirely." },
    { id:"v2b-B2-29", en:"to cut costs", ru:"сокращать расходы", ex:"The firm cut costs by automating tasks." },
    { id:"v2b-B2-30", en:"a profit margin", ru:"маржа прибыли", ex:"Their profit margin shrank last quarter." },
    { id:"v2b-B2-31", en:"to close a deal", ru:"заключить сделку", ex:"It took months to close the deal." },
    { id:"v2b-B2-32", en:"a stakeholder", ru:"заинтересованная сторона", ex:"All stakeholders were invited to the meeting." },

    // Describing character
    { id:"v2b-B2-33", en:"down to earth", ru:"приземлённый, без понтов", ex:"Despite her fame, she stays down to earth." },
    { id:"v2b-B2-34", en:"self-centred", ru:"эгоцентричный", ex:"He's too self-centred to notice others' needs." },
    { id:"v2b-B2-35", en:"easy-going", ru:"лёгкий в общении", ex:"My new boss is really easy-going." },
    { id:"v2b-B2-36", en:"strong-willed", ru:"волевой, упрямый", ex:"She's strong-willed and never gives up." },
    { id:"v2b-B2-37", en:"open-minded", ru:"непредвзятый, открытый", ex:"You need to be open-minded about new ideas." },
    { id:"v2b-B2-38", en:"reliable", ru:"надёжный", ex:"He's the most reliable person on the team." },
    { id:"v2b-B2-39", en:"narrow-minded", ru:"узколобый", ex:"It's narrow-minded to reject other cultures." },

    // Abstract concepts
    { id:"v2b-B2-40", en:"freedom of choice", ru:"свобода выбора", ex:"Everyone deserves freedom of choice." },
    { id:"v2b-B2-41", en:"a sense of belonging", ru:"чувство принадлежности", ex:"The club gives members a sense of belonging." },
    { id:"v2b-B2-42", en:"peace of mind", ru:"душевное спокойствие", ex:"Insurance gives me peace of mind." },
    { id:"v2b-B2-43", en:"common ground", ru:"общая точка зрения", ex:"The two sides finally found common ground." },
    { id:"v2b-B2-44", en:"a turning point", ru:"поворотный момент", ex:"That meeting was a turning point in my career." },

    // Collocations
    { id:"v2b-B2-45", en:"to make a decision", ru:"принимать решение", ex:"We need to make a decision by Friday." },
    { id:"v2b-B2-46", en:"to take responsibility", ru:"брать ответственность", ex:"He took responsibility for the mistake." },
    { id:"v2b-B2-47", en:"to pay attention to", ru:"обращать внимание на", ex:"Pay attention to the small details." },
    { id:"v2b-B2-48", en:"to set a goal", ru:"ставить цель", ex:"She set a goal to run a marathon." },
    { id:"v2b-B2-49", en:"to take into account", ru:"учитывать", ex:"We must take the costs into account." },
    { id:"v2b-B2-50", en:"to make progress", ru:"делать успехи", ex:"You've made real progress this month." },

    // Synonyms of frequent words
    { id:"v2b-B2-51", en:"crucial (= very important)", ru:"критически важный", ex:"Timing is crucial in this business." },
    { id:"v2b-B2-52", en:"enormous (= very big)", ru:"огромный", ex:"They made an enormous effort." },
    { id:"v2b-B2-53", en:"to obtain (= to get)", ru:"получать, добывать", ex:"You can obtain a permit online." },
    { id:"v2b-B2-54", en:"to require (= to need)", ru:"требовать", ex:"This job requires great patience." },
    { id:"v2b-B2-55", en:"to demonstrate (= to show)", ru:"демонстрировать", ex:"The chart demonstrates a clear trend." },
    { id:"v2b-B2-56", en:"to assist (= to help)", ru:"помогать, содействовать", ex:"Staff are here to assist customers." },
    { id:"v2b-B2-57", en:"to indicate (= to suggest)", ru:"указывать, свидетельствовать", ex:"The results indicate a problem." },
    { id:"v2b-B2-58", en:"reluctant (= unwilling)", ru:"неохотный", ex:"He was reluctant to change his plans." },
    { id:"v2b-B2-59", en:"to acquire (= to gain)", ru:"приобретать", ex:"She acquired new skills quickly." },
    { id:"v2b-B2-60", en:"to enhance (= to improve)", ru:"улучшать, усиливать", ex:"Music can enhance your mood." }
  ]);

  P("vocab","C1",[
    // Academic vocabulary
    { id:"v2b-C1-01", en:"to underpin", ru:"лежать в основе, подкреплять", ex:"These principles underpin the entire theory." },
    { id:"v2b-C1-02", en:"to constitute", ru:"составлять, представлять собой", ex:"These cases constitute a serious threat." },
    { id:"v2b-C1-03", en:"a paradigm shift", ru:"смена парадигмы", ex:"The discovery triggered a paradigm shift." },
    { id:"v2b-C1-04", en:"to substantiate", ru:"обосновывать, подтверждать", ex:"He failed to substantiate his allegations." },
    { id:"v2b-C1-05", en:"empirical evidence", ru:"эмпирические данные", ex:"There is little empirical evidence for this." },
    { id:"v2b-C1-06", en:"to extrapolate", ru:"экстраполировать", ex:"We can extrapolate future trends from the data." },
    { id:"v2b-C1-07", en:"a prevailing view", ru:"господствующее мнение", ex:"This challenges the prevailing view in economics." },
    { id:"v2b-C1-08", en:"to delineate", ru:"очерчивать, разграничивать", ex:"The report delineates the project's scope." },
    { id:"v2b-C1-09", en:"a corollary", ru:"следствие, вывод", ex:"Higher prices are a corollary of scarcity." },
    { id:"v2b-C1-10", en:"to corroborate", ru:"подтверждать (доказательствами)", ex:"Two witnesses corroborated her account." },

    // Precise shades of meaning
    { id:"v2b-C1-11", en:"to mitigate", ru:"смягчать (последствия)", ex:"Steps were taken to mitigate the damage." },
    { id:"v2b-C1-12", en:"to alleviate", ru:"облегчать (боль, нагрузку)", ex:"The drug alleviates chronic pain." },
    { id:"v2b-C1-13", en:"to exacerbate", ru:"усугублять", ex:"The drought exacerbated food shortages." },
    { id:"v2b-C1-14", en:"to undermine", ru:"подрывать", ex:"The scandal undermined public trust." },
    { id:"v2b-C1-15", en:"nuanced", ru:"тонкий, с нюансами", ex:"She offered a nuanced view of the issue." },
    { id:"v2b-C1-16", en:"ambivalent", ru:"двойственный, противоречивый", ex:"He felt ambivalent about the promotion." },
    { id:"v2b-C1-17", en:"to discern", ru:"различать, распознавать", ex:"It's hard to discern his true motives." },
    { id:"v2b-C1-18", en:"tenuous", ru:"шаткий, слабый (связь)", ex:"The link between them is tenuous at best." },
    { id:"v2b-C1-19", en:"to conflate", ru:"смешивать, путать (понятия)", ex:"Don't conflate correlation with causation." },
    { id:"v2b-C1-20", en:"a subtle distinction", ru:"тонкое различие", ex:"There's a subtle distinction between the terms." },

    // Formal vocabulary
    { id:"v2b-C1-21", en:"to ascertain", ru:"устанавливать, выяснять", ex:"We must ascertain the cause of the delay." },
    { id:"v2b-C1-22", en:"notwithstanding", ru:"несмотря на", ex:"Notwithstanding the risks, they proceeded." },
    { id:"v2b-C1-23", en:"to deem", ru:"считать, полагать", ex:"The proposal was deemed unacceptable." },
    { id:"v2b-C1-24", en:"henceforth", ru:"впредь, отныне", ex:"Henceforth, all reports must be digital." },
    { id:"v2b-C1-25", en:"to preclude", ru:"исключать, препятствовать", ex:"Lack of funds precludes expansion." },
    { id:"v2b-C1-26", en:"insofar as", ru:"постольку, поскольку", ex:"This is true insofar as resources allow." },
    { id:"v2b-C1-27", en:"to facilitate", ru:"способствовать, облегчать", ex:"The platform facilitates collaboration." },
    { id:"v2b-C1-28", en:"thereby", ru:"тем самым", ex:"Costs fell, thereby boosting profit." },
    { id:"v2b-C1-29", en:"to warrant", ru:"оправдывать, требовать", ex:"The situation warrants urgent action." },
    { id:"v2b-C1-30", en:"albeit", ru:"хотя и", ex:"It was a success, albeit a costly one." },

    // Idiomatic collocations
    { id:"v2b-C1-31", en:"to gain traction", ru:"набирать обороты", ex:"The idea is finally gaining traction." },
    { id:"v2b-C1-32", en:"to bridge the gap", ru:"преодолеть разрыв", ex:"The course bridges the gap between theory and practice." },
    { id:"v2b-C1-33", en:"a watershed moment", ru:"переломный момент", ex:"It was a watershed moment for the industry." },
    { id:"v2b-C1-34", en:"to set a precedent", ru:"создать прецедент", ex:"The ruling sets a dangerous precedent." },
    { id:"v2b-C1-35", en:"a double-edged sword", ru:"палка о двух концах", ex:"Automation is a double-edged sword." },
    { id:"v2b-C1-36", en:"to weather the storm", ru:"пережить трудности", ex:"The firm weathered the storm of the recession." },
    { id:"v2b-C1-37", en:"to strike a balance", ru:"найти баланс", ex:"We must strike a balance between speed and quality." },
    { id:"v2b-C1-38", en:"a vicious circle", ru:"порочный круг", ex:"Debt can trap people in a vicious circle." },
    { id:"v2b-C1-39", en:"to pave the way for", ru:"проложить путь к", ex:"This research paves the way for new treatments." },
    { id:"v2b-C1-40", en:"to come to terms with", ru:"смириться, принять", ex:"He's coming to terms with the loss." },

    // Essay / discussion vocabulary
    { id:"v2b-C1-41", en:"with regard to", ru:"что касается", ex:"With regard to costs, the plan is feasible." },
    { id:"v2b-C1-42", en:"it could be argued that", ru:"можно утверждать, что", ex:"It could be argued that the law is outdated." },
    { id:"v2b-C1-43", en:"a case in point", ru:"наглядный пример", ex:"Renewable energy is a case in point." },
    { id:"v2b-C1-44", en:"to a certain extent", ru:"в определённой степени", ex:"This is true to a certain extent." },
    { id:"v2b-C1-45", en:"by and large", ru:"в целом", ex:"By and large, the reforms were welcomed." },
    { id:"v2b-C1-46", en:"in light of", ru:"в свете (чего-либо)", ex:"In light of recent events, we paused the launch." },
    { id:"v2b-C1-47", en:"to put it another way", ru:"иными словами", ex:"To put it another way, demand outstrips supply." },
    { id:"v2b-C1-48", en:"on balance", ru:"взвесив всё", ex:"On balance, the benefits outweigh the costs." },
    { id:"v2b-C1-49", en:"a compelling case", ru:"убедительные доводы", ex:"She built a compelling case for reform." },
    { id:"v2b-C1-50", en:"to bear in mind", ru:"иметь в виду", ex:"Bear in mind that the deadline is fixed." },

    // Further C1 lexis
    { id:"v2b-C1-51", en:"to epitomise", ru:"быть олицетворением", ex:"This building epitomises modern design." },
    { id:"v2b-C1-52", en:"a quandary", ru:"затруднительное положение", ex:"She was in a real quandary over the offer." },
    { id:"v2b-C1-53", en:"to galvanise", ru:"побуждать к действию", ex:"The crisis galvanised the community." },
    { id:"v2b-C1-54", en:"ostensibly", ru:"якобы, на первый взгляд", ex:"He left, ostensibly for health reasons." },
    { id:"v2b-C1-55", en:"a caveat", ru:"оговорка, предостережение", ex:"There is one important caveat to this rule." },
    { id:"v2b-C1-56", en:"to permeate", ru:"пронизывать, проникать", ex:"A sense of fear permeated the office." },
    { id:"v2b-C1-57", en:"inadvertently", ru:"непреднамеренно", ex:"She inadvertently deleted the file." },
    { id:"v2b-C1-58", en:"a propensity for", ru:"склонность к", ex:"He has a propensity for taking risks." },
    { id:"v2b-C1-59", en:"to reconcile", ru:"примирять, согласовывать", ex:"It's hard to reconcile these two views." },
    { id:"v2b-C1-60", en:"unequivocally", ru:"однозначно, недвусмысленно", ex:"The board unequivocally rejected the bid." }
  ]);
})();
