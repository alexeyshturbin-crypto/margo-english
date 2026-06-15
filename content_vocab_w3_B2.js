(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P = (track,lvl,arr)=>{C[track]=C[track]||{};C[track][lvl]=C[track][lvl]||[];arr.forEach(x=>C[track][lvl].push(x));};
  P("vocab","B2",[
    // Opinions & arguments
    { id:"v3-B2-01", en:"I'd argue that", ru:"я бы возразил, что; я бы утверждал, что", ex:"I'd argue that the benefits clearly outweigh the costs." },
    { id:"v3-B2-02", en:"compelling argument", ru:"убедительный аргумент", ex:"She made a compelling argument for remote work." },
    { id:"v3-B2-03", en:"to take something into account", ru:"учитывать что-либо", ex:"We must take the long-term effects into account." },
    { id:"v3-B2-04", en:"on the contrary", ru:"напротив; наоборот", ex:"It isn't boring; on the contrary, it's fascinating." },
    { id:"v3-B2-05", en:"a valid point", ru:"справедливое замечание; обоснованный довод", ex:"You raise a valid point about the budget." },
    { id:"v3-B2-06", en:"to play devil's advocate", ru:"намеренно спорить ради спора; занять противоположную позицию", ex:"Let me play devil's advocate for a moment." },
    { id:"v3-B2-07", en:"to back up a claim", ru:"подкреплять утверждение", ex:"He couldn't back up his claim with any data." },
    { id:"v3-B2-08", en:"flawed reasoning", ru:"ошибочная логика; несостоятельные рассуждения", ex:"The conclusion rests on flawed reasoning." },

    // Abstract concepts
    { id:"v3-B2-09", en:"to undermine", ru:"подрывать", ex:"Corruption undermines public trust in institutions." },
    { id:"v3-B2-10", en:"inherent", ru:"присущий; неотъемлемый", ex:"There is an inherent risk in every investment." },
    { id:"v3-B2-11", en:"to constitute", ru:"составлять; представлять собой", ex:"These actions constitute a breach of contract." },
    { id:"v3-B2-12", en:"the underlying cause", ru:"глубинная причина", ex:"Poverty is often the underlying cause of crime." },
    { id:"v3-B2-13", en:"a paradigm shift", ru:"смена парадигмы", ex:"AI represents a genuine paradigm shift in medicine." },
    { id:"v3-B2-14", en:"ambiguous", ru:"неоднозначный; двусмысленный", ex:"The wording of the clause is deliberately ambiguous." },
    { id:"v3-B2-15", en:"to grasp a concept", ru:"уловить/понять концепцию", ex:"It took me a while to grasp the concept fully." },

    // Science & research
    { id:"v3-B2-16", en:"to conduct a study", ru:"проводить исследование", ex:"Researchers conducted a study on sleep patterns." },
    { id:"v3-B2-17", en:"a significant correlation", ru:"значимая корреляция", ex:"They found a significant correlation between the two factors." },
    { id:"v3-B2-18", en:"a hypothesis", ru:"гипотеза", ex:"The experiment confirmed the original hypothesis." },
    { id:"v3-B2-19", en:"a peer-reviewed journal", ru:"рецензируемый журнал", ex:"The findings appeared in a peer-reviewed journal." },
    { id:"v3-B2-20", en:"a control group", ru:"контрольная группа", ex:"The control group received a placebo." },
    { id:"v3-B2-21", en:"to replicate results", ru:"воспроизвести результаты", ex:"Other labs failed to replicate the results." },
    { id:"v3-B2-22", en:"a breakthrough", ru:"прорыв", ex:"The vaccine was a major scientific breakthrough." },
    { id:"v3-B2-23", en:"empirical evidence", ru:"эмпирические данные", ex:"There is little empirical evidence to support that theory." },

    // Society & politics
    { id:"v3-B2-24", en:"to implement a policy", ru:"внедрять/проводить политику", ex:"The government plans to implement a new tax policy." },
    { id:"v3-B2-25", en:"civil liberties", ru:"гражданские свободы", ex:"The law was criticised for restricting civil liberties." },
    { id:"v3-B2-26", en:"the electorate", ru:"электорат; избиратели", ex:"The electorate is losing faith in mainstream parties." },
    { id:"v3-B2-27", en:"social mobility", ru:"социальная мобильность", ex:"Education is a key driver of social mobility." },
    { id:"v3-B2-28", en:"a controversial measure", ru:"спорная мера", ex:"The reform was a deeply controversial measure." },
    { id:"v3-B2-29", en:"to address inequality", ru:"бороться с неравенством", ex:"The plan aims to address income inequality." },
    { id:"v3-B2-30", en:"vested interests", ru:"корыстные/заинтересованные стороны", ex:"Powerful vested interests blocked the reform." },
    { id:"v3-B2-31", en:"a vibrant democracy", ru:"живая/деятельная демократия", ex:"A free press is essential to a vibrant democracy." },

    // Business & economy
    { id:"v3-B2-32", en:"to gain a competitive edge", ru:"получить конкурентное преимущество", ex:"Automation helped the firm gain a competitive edge." },
    { id:"v3-B2-33", en:"a downturn", ru:"спад; снижение деловой активности", ex:"Sales fell sharply during the economic downturn." },
    { id:"v3-B2-34", en:"to scale a business", ru:"масштабировать бизнес", ex:"They struggled to scale the business profitably." },
    { id:"v3-B2-35", en:"a revenue stream", ru:"источник дохода", ex:"Subscriptions became their main revenue stream." },
    { id:"v3-B2-36", en:"to cut overheads", ru:"сокращать накладные расходы", ex:"Going remote let us cut overheads significantly." },
    { id:"v3-B2-37", en:"a niche market", ru:"нишевый рынок", ex:"The product targets a small niche market." },
    { id:"v3-B2-38", en:"to break even", ru:"выйти в ноль; достичь точки безубыточности", ex:"The startup expects to break even next year." },
    { id:"v3-B2-39", en:"a thriving sector", ru:"процветающая отрасль", ex:"Tech remains a thriving sector despite the slowdown." },
    { id:"v3-B2-40", en:"to diversify", ru:"диверсифицировать", ex:"It's wise to diversify your sources of income." },

    // Describing character (subtle)
    { id:"v3-B2-41", en:"down-to-earth", ru:"приземлённый; без претензий", ex:"Despite her fame, she's remarkably down-to-earth." },
    { id:"v3-B2-42", en:"meticulous", ru:"дотошный; педантичный", ex:"He's meticulous about every detail of his work." },
    { id:"v3-B2-43", en:"self-effacing", ru:"скромный; держащийся в тени", ex:"She's brilliant but self-effacing about her success." },
    { id:"v3-B2-44", en:"strong-willed", ru:"волевой; упрямый", ex:"He's too strong-willed to take advice from anyone." },
    { id:"v3-B2-45", en:"approachable", ru:"открытый в общении; доступный", ex:"The new manager is friendly and approachable." },
    { id:"v3-B2-46", en:"set in one's ways", ru:"закостеневший в привычках; консервативный", ex:"My grandfather is rather set in his ways." },
    { id:"v3-B2-47", en:"resourceful", ru:"находчивый; изобретательный", ex:"She's resourceful enough to fix almost anything." },

    // Emotions & psychology
    { id:"v3-B2-48", en:"overwhelmed", ru:"подавленный; перегруженный", ex:"I felt completely overwhelmed by the workload." },
    { id:"v3-B2-49", en:"resilience", ru:"стойкость; жизнестойкость", ex:"Children show remarkable emotional resilience." },
    { id:"v3-B2-50", en:"to come to terms with", ru:"смириться с; принять", ex:"It took years to come to terms with the loss." },
    { id:"v3-B2-51", en:"apprehensive", ru:"тревожный; полный опасений", ex:"She felt apprehensive about the interview." },
    { id:"v3-B2-52", en:"a coping mechanism", ru:"механизм совладания; способ справляться", ex:"Humour is his main coping mechanism under stress." },
    { id:"v3-B2-53", en:"to bottle up emotions", ru:"подавлять/держать в себе эмоции", ex:"Bottling up your emotions can be harmful." },
    { id:"v3-B2-54", en:"a sense of fulfilment", ru:"чувство удовлетворённости/самореализации", ex:"Volunteering gives her a deep sense of fulfilment." },

    // Collocations
    { id:"v3-B2-55", en:"to make a conscious effort", ru:"прилагать осознанное усилие", ex:"I make a conscious effort to listen more." },
    { id:"v3-B2-56", en:"to draw a distinction", ru:"проводить различие", ex:"We must draw a distinction between the two cases." },
    { id:"v3-B2-57", en:"to pose a threat", ru:"представлять угрозу", ex:"The new variant could pose a serious threat." },
    { id:"v3-B2-58", en:"to bear in mind", ru:"иметь в виду; помнить", ex:"Bear in mind that prices may change." },
    { id:"v3-B2-59", en:"to strike a balance", ru:"найти баланс", ex:"It's hard to strike a balance between work and rest." },
    { id:"v3-B2-60", en:"to meet a deadline", ru:"уложиться в срок", ex:"We worked overnight to meet the deadline." },

    // Synonyms for common words
    { id:"v3-B2-61", en:"crucial", ru:"критически важный (вместо important)", ex:"Sleep is crucial for mental health." },
    { id:"v3-B2-62", en:"to obtain", ru:"получать; добывать (вместо get)", ex:"You'll need to obtain a permit first." },
    { id:"v3-B2-63", en:"substantial", ru:"значительный; существенный (вместо big)", ex:"There has been a substantial increase in demand." },
    { id:"v3-B2-64", en:"to demonstrate", ru:"показывать; демонстрировать (вместо show)", ex:"The data demonstrates a clear upward trend." },
    { id:"v3-B2-65", en:"reluctant", ru:"неохотный; не желающий (вместо not wanting)", ex:"He was reluctant to admit his mistake." },
    { id:"v3-B2-66", en:"to highlight", ru:"подчёркивать; выделять (вместо show)", ex:"The report highlights several key risks." },

    // Phrases for discussion
    { id:"v3-B2-67", en:"to put it another way", ru:"иначе говоря; перефразируя", ex:"To put it another way, we simply can't afford it." },
    { id:"v3-B2-68", en:"as far as I'm concerned", ru:"что касается меня; по-моему", ex:"As far as I'm concerned, the matter is settled." },
    { id:"v3-B2-69", en:"that said", ru:"тем не менее; при этом", ex:"It's expensive. That said, the quality is excellent." },
    { id:"v3-B2-70", en:"to get to the bottom of", ru:"докопаться до сути", ex:"We need to get to the bottom of this issue." },
    { id:"v3-B2-71", en:"to weigh up the pros and cons", ru:"взвесить за и против", ex:"Let's weigh up the pros and cons before deciding." },

    // Nature & climate
    { id:"v3-B2-72", en:"a carbon footprint", ru:"углеродный след", ex:"Flying less reduces your carbon footprint." },
    { id:"v3-B2-73", en:"to mitigate", ru:"смягчать; уменьшать", ex:"We must act now to mitigate climate change." },
    { id:"v3-B2-74", en:"renewable energy", ru:"возобновляемая энергия", ex:"The country runs largely on renewable energy." },
    { id:"v3-B2-75", en:"biodiversity", ru:"биоразнообразие", ex:"Deforestation threatens local biodiversity." },
    { id:"v3-B2-76", en:"a fragile ecosystem", ru:"хрупкая экосистема", ex:"Tourism can damage a fragile ecosystem." },

    // Culture & art
    { id:"v3-B2-77", en:"thought-provoking", ru:"наводящий на размышления", ex:"It was a thought-provoking documentary." },
    { id:"v3-B2-78", en:"to resonate with", ru:"находить отклик у; перекликаться", ex:"The film really resonated with younger audiences." },
    { id:"v3-B2-79", en:"a masterpiece", ru:"шедевр", ex:"The novel is widely regarded as a masterpiece." },
    { id:"v3-B2-80", en:"cultural heritage", ru:"культурное наследие", ex:"The city is rich in cultural heritage." }
  ]);
})();
