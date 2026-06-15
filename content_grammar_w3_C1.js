(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P = (track,lvl,arr)=>{C[track]=C[track]||{};C[track][lvl]=C[track][lvl]||[];arr.forEach(x=>C[track][lvl].push(x));};
  P("grammar","C1",[
    {
      id:"g3-C1-01", title:"Inversion After Negative Adverbials", murphy:"Advanced Grammar in Use, Unit 99", topic:"инверсия после отрицательных наречий",
      items:[
        { q:"Never ___ I imagined that the merger would collapse so spectacularly.", a:["had","have"], hint:"вспомогательный глагол после Never в начале" },
        { q:"Not until the auditors arrived ___ the board realise the funds were missing.", a:["did"], hint:"did — инверсия после Not until" },
        { q:"Seldom ___ we encounter a candidate with such an unusual blend of skills.", a:["do"], hint:"do при настоящем времени" },
        { q:"No sooner had the announcement been made ___ the share price plummeted.", a:["than"], hint:"than в конструкции No sooner ... than" },
        { q:"Under no circumstances ___ this document be shared with the press.", a:["should","must","may"], hint:"модальный глагол после Under no circumstances" },
        { q:"Little ___ they know that their entire strategy had already been leaked.", a:["did","do"], hint:"вспомогательный после Little (как мало)" }
      ]
    },
    {
      id:"g3-C1-02", title:"Inversion in Conditionals and Comparisons", murphy:"Advanced Grammar in Use, Unit 100", topic:"инверсия в условных и сравнительных",
      items:[
        { q:"___ I known about the deadline, I would have submitted the report earlier.", a:["Had"], hint:"инверсия вместо If I had" },
        { q:"Were the company ___ to relocate, hundreds of jobs would be at risk.", a:["to"], hint:"Were ... to + инфинитив (формальное условие)" },
        { q:"___ it not been for her intervention, the deal would have fallen through.", a:["Had"], hint:"Had it not been for = If it had not been for" },
        { q:"So persuasive ___ his argument that even the sceptics were won over.", a:["was"], hint:"глагол to be после So + прилагательное" },
        { q:"Such ___ the chaos that the meeting had to be postponed indefinitely.", a:["was"], hint:"was после Such (фронтинг существительного)" },
        { q:"Only by working through the night ___ they meet the impossible deadline.", a:["could","did","were"], hint:"инверсия после Only by ..." }
      ]
    },
    {
      id:"g3-C1-03", title:"Cleft Sentences with It and What", murphy:"Advanced Grammar in Use, Unit 96", topic:"расщеплённые предложения it/what",
      items:[
        { q:"It ___ the lack of funding that ultimately doomed the project.", a:["was"], hint:"It + was в it-cleft (прошедшее)" },
        { q:"What I really admire ___ her ability to stay calm under pressure.", a:["is"], hint:"is — связка в what-cleft" },
        { q:"It wasn't the salary that attracted me; it ___ the chance to lead a team.", a:["was"], hint:"was — параллельная структура" },
        { q:"What the negotiations ___ was a fresh perspective from an outsider.", a:["needed","required","lacked"], hint:"глагол в прошедшем в what-cleft" },
        { q:"It was only after the launch ___ we discovered the critical flaw.", a:["that"], hint:"that связывает it-cleft с придаточным" },
        { q:"What ___ next surprised absolutely everyone in the room.", a:["happened"], hint:"happened — подлежащее what-cleft" }
      ]
    },
    {
      id:"g3-C1-04", title:"All-Clefts and Reversed Pseudo-Clefts", murphy:"Advanced Grammar in Use, Unit 97", topic:"all-clefts и обратные псевдорасщеплённые",
      items:[
        { q:"All ___ wanted was a clear explanation of the new policy.", a:["I","we","they","she","he"], hint:"подлежащее после All (всё, что)" },
        { q:"All you ___ to do is sign at the bottom of the page.", a:["have","need"], hint:"have/need в конструкции All you ... to do" },
        { q:"A reliable internet connection ___ all we asked for.", a:["was","is"], hint:"глагол-связка в обратном псевдоклефте" },
        { q:"All that ___ now is the final approval from the legal team.", a:["remains","matters","counts"], hint:"глагол после All that (всё, что остаётся)" },
        { q:"What he wanted was recognition; recognition ___ exactly what he got.", a:["was","is"], hint:"связка в обратной конструкции" },
        { q:"All ___ matters at this stage is keeping the client informed.", a:["that"], hint:"that после All (определительное)" }
      ]
    },
    {
      id:"g3-C1-05", title:"Participle and Verbless Clauses", murphy:"Advanced Grammar in Use, Unit 80", topic:"причастные и безглагольные обороты",
      items:[
        { q:"___ exhausted from the trip, she still managed to deliver the keynote.", a:["Although","Though","Despite being","Being"], hint:"уступительное причастие/связка в начале" },
        { q:"Having ___ all the evidence, the jury reached a unanimous verdict.", a:["reviewed","examined","considered","weighed"], hint:"причастие после Having (совершив)" },
        { q:"The contract, once ___, cannot be amended without mutual consent.", a:["signed"], hint:"причастие прошедшего времени в безглагольном обороте" },
        { q:"___ by the storm, the flight was delayed for several hours.", a:["Disrupted","Affected","Hit","Grounded"], hint:"причастие прошедшего времени в начале (будучи нарушен)" },
        { q:"With the deadline ___, the team worked around the clock.", a:["approaching","looming","nearing"], hint:"with + сущ + причастие настоящего (приближаясь)" },
        { q:"Weather ___, the outdoor event will proceed as scheduled.", a:["permitting"], hint:"абсолютная причастная конструкция (если позволит погода)" }
      ]
    },
    {
      id:"g3-C1-06", title:"Mixed and Unreal Conditionals", murphy:"Advanced Grammar in Use, Unit 83", topic:"смешанные и нереальные условные",
      items:[
        { q:"If she had taken the job in Berlin, she ___ living abroad right now.", a:["would be"], hint:"смешанное: past condition, present result" },
        { q:"If I ___ more disciplined as a student, I would have a better degree now.", a:["had been"], hint:"past perfect в смешанном условном" },
        { q:"I wish I ___ accepted their offer when I had the chance.", a:["had"], hint:"wish + past perfect (сожаление о прошлом)" },
        { q:"It's high time we ___ this outdated software with something modern.", a:["replaced","upgraded","abandoned","scrapped"], hint:"unreal past после It's high time" },
        { q:"Supposing the funding ___ through, what would your next step be?", a:["fell","came"], hint:"unreal past после Supposing (предположим)" },
        { q:"If only he ___ listened to the warnings, the disaster could have been avoided.", a:["had"], hint:"If only + past perfect" }
      ]
    },
    {
      id:"g3-C1-07", title:"Modal Perfects and Their Nuances", murphy:"Advanced Grammar in Use, Unit 30", topic:"перфектные модальные и их оттенки",
      items:[
        { q:"You ___ have told me the meeting was cancelled; I waited an hour.", a:["could","should","might"], hint:"упрёк: модальный + have (мог бы сказать)" },
        { q:"She isn't answering, so she ___ have already left the office.", a:["must","may","might","could"], hint:"вывод о прошлом (должно быть, ушла)" },
        { q:"They ___ have finished by now, but the report still hasn't arrived.", a:["should","ought to","were supposed to"], hint:"ожидание, не оправдавшееся (должны были)" },
        { q:"He ___ have caught the earlier train, but he chose to walk instead.", a:["could","might"], hint:"возможность, которой не воспользовались" },
        { q:"I ___ have left my keys at the gym; let me check there.", a:["may","might","could","must"], hint:"предположение о прошлом (возможно, оставил)" },
        { q:"You needn't ___ paid for lunch; the company would have covered it.", a:["have"], hint:"needn't have + причастие (не нужно было)" }
      ]
    },
    {
      id:"g3-C1-08", title:"Advanced Passive and Reporting Structures", murphy:"Advanced Grammar in Use, Unit 44", topic:"продвинутый пассив и репортинг",
      items:[
        { q:"The CEO is ___ to be considering an early retirement.", a:["said","believed","thought","reported","rumoured"], hint:"пассив репортинга (как говорят)" },
        { q:"It is widely ___ that the policy will be reversed within months.", a:["believed","thought","expected","assumed","reported"], hint:"It is + причастие (широко полагают)" },
        { q:"The suspect is alleged to ___ tampered with the evidence.", a:["have"], hint:"перфектный инфинитив в пассиве репортинга" },
        { q:"New regulations are expected ___ be introduced next quarter.", a:["to"], hint:"to перед инфинитивом в пассиве" },
        { q:"He is reputed ___ be one of the wealthiest people in the country.", a:["to"], hint:"to после is reputed" },
        { q:"The painting was thought to ___ been destroyed in the fire.", a:["have"], hint:"have в перфектном пассивном инфинитиве" }
      ]
    },
    {
      id:"g3-C1-09", title:"Reduced Relative Clauses", murphy:"Advanced Grammar in Use, Unit 71", topic:"сокращённые определительные придаточные",
      items:[
        { q:"The candidates ___ for the role will be contacted by Friday.", a:["shortlisted","selected","chosen"], hint:"причастие прошедшего вместо who were" },
        { q:"Anyone ___ to attend the seminar should register online.", a:["wishing","wanting","hoping","intending"], hint:"причастие настоящего вместо who wishes" },
        { q:"The documents ___ in the safe were never recovered.", a:["stored","kept","held","locked"], hint:"причастие прошедшего (которые хранились)" },
        { q:"Passengers ___ on the delayed flight received a full refund.", a:["travelling","booked","stranded"], hint:"причастие настоящего/прошедшего вместо who were" },
        { q:"The factors ___ the decision were largely financial.", a:["driving","influencing","behind","shaping"], hint:"причастие настоящего (которые определяли)" },
        { q:"Any items ___ undelivered will be returned to the warehouse.", a:["left","remaining"], hint:"причастие вместо that are (оставшиеся)" }
      ]
    },
    {
      id:"g3-C1-10", title:"Nominalisation in Formal Writing", murphy:"Advanced Grammar in Use, Unit 91", topic:"номинализация в формальном стиле",
      items:[
        { q:"The committee's ___ of the proposal surprised many observers.", a:["rejection","approval","dismissal","endorsement"], hint:"отглагольное существительное (отклонение)" },
        { q:"There has been a marked ___ in customer satisfaction this year.", a:["improvement","increase","decline","rise","drop"], hint:"существительное вместо глагола (улучшение)" },
        { q:"The ___ of new safety measures reduced workplace accidents.", a:["introduction","implementation","adoption"], hint:"номинализация от introduce (внедрение)" },
        { q:"Her ___ to detail makes her an exceptional editor.", a:["attention","attentiveness"], hint:"существительное (внимание к деталям)" },
        { q:"The sudden ___ of the market caught investors off guard.", a:["collapse","decline","downturn","fall"], hint:"отглагольное существительное (обвал)" },
        { q:"A thorough ___ of the data revealed several inconsistencies.", a:["analysis","examination","review","assessment"], hint:"существительное вместо analyse (анализ)" }
      ]
    },
    {
      id:"g3-C1-11", title:"Fronting for Emphasis and Cohesion", murphy:"Advanced Grammar in Use, Unit 98", topic:"фронтинг для акцента и связности",
      items:[
        { q:"Determined to succeed, ___ refused to give up despite the setbacks.", a:["she","he","they","we","I"], hint:"подлежащее после вынесенного причастия" },
        { q:"Gone ___ the days when a degree guaranteed employment.", a:["are"], hint:"глагол после вынесенного Gone (инверсия)" },
        { q:"This argument I find ___ unconvincing and poorly evidenced.", a:["both","wholly","entirely","utterly"], hint:"наречие в предложении с вынесенным дополнением" },
        { q:"So complex was the problem ___ no single expert could solve it.", a:["that"], hint:"that после фронтинга So + прилагательное" },
        { q:"Down ___ the prices, and customers flooded back to the store.", a:["came","went"], hint:"глагол после вынесенного наречия места (инверсия)" },
        { q:"Such talent ___ rarely seen in someone so young.", a:["is"], hint:"is после вынесенного Such + сущ" }
      ]
    },
    {
      id:"g3-C1-12", title:"Future in the Past", murphy:"Advanced Grammar in Use, Unit 19", topic:"будущее в прошедшем",
      items:[
        { q:"She knew she ___ regret the decision sooner or later.", a:["would"], hint:"would для будущего из точки прошлого" },
        { q:"We were about ___ leave when the phone suddenly rang.", a:["to"], hint:"be about to (собирались) + инфинитив" },
        { q:"They ___ going to announce the results, but the system crashed.", a:["were"], hint:"was/were going to (собирались)" },
        { q:"He had no idea that the trip ___ change his life forever.", a:["would"], hint:"would — будущее в прошедшем" },
        { q:"The train ___ to depart at noon, but it was cancelled.", a:["was"], hint:"was to (по плану должно было)" },
        { q:"By Friday, they would ___ been working on it for a month.", a:["have"], hint:"would have been — перфектное будущее в прошедшем" }
      ]
    },
    {
      id:"g3-C1-13", title:"The Subjunctive and Mandative Forms", murphy:"Advanced Grammar in Use, Unit 35", topic:"сослагательное наклонение и мандатив",
      items:[
        { q:"The board insisted that the report ___ submitted before the deadline.", a:["be"], hint:"мандативный субъюнктив: be (голый инфинитив)" },
        { q:"It is essential that every employee ___ aware of the new protocol.", a:["be"], hint:"be после It is essential that" },
        { q:"They recommended that he ___ for the senior position.", a:["apply"], hint:"голый инфинитив apply (без -s)" },
        { q:"Were it not for her support, the project ___ have failed.", a:["would"], hint:"would в нереальном условном с инверсией" },
        { q:"The judge ordered that the documents ___ released immediately.", a:["be"], hint:"мандатив be после ordered that" },
        { q:"Heaven ___ that anything should happen to the children.", a:["forbid"], hint:"форма субъюнктива в устойчивом выражении (упаси)" }
      ]
    },
    {
      id:"g3-C1-14", title:"Ellipsis, Substitution and Concession", murphy:"Advanced Grammar in Use, Unit 93", topic:"эллипсис, субституция и уступка",
      items:[
        { q:"I haven't read the new policy yet, but I really ___ to this week.", a:["ought","need","want","mean","intend"], hint:"эллипсис: глагол + to (опущена инфинитивная фраза)" },
        { q:"Some people enjoy networking events; others clearly ___ not.", a:["do"], hint:"субституция do (заменяет глагол)" },
        { q:"I think the plan will work, and my colleagues think ___ too.", a:["so"], hint:"so — субституция придаточного (тоже так думают)" },
        { q:"___ the obstacles, the team delivered the project on time.", a:["Despite","Notwithstanding"], hint:"уступительный предлог + сущ (несмотря на)" },
        { q:"Strange ___ it may seem, the cheaper option proved more reliable.", a:["as","though"], hint:"уступительная конструкция: прилаг + as/though" },
        { q:"He may be inexperienced, but talented he certainly ___.", a:["is"], hint:"эллипсис с вынесенным комплементом (несомненно талантлив)" }
      ]
    }
  ]);
})();
