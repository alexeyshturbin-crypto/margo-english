(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => { C[track]=C[track]||{}; C[track][lvl]=C[track][lvl]||[]; arr.forEach(x=>C[track][lvl].push(x)); };

  P("grammar","C2",[
    {
      id:"g2c-C2-01",
      title:"The Subjunctive & Mandative Constructions",
      murphy:"Advanced Grammar in Use, Unit 35",
      topic:"сослагательное наклонение и мандативный subjunctive",
      items:[
        { q:"The board insisted that the chairman ___ present at every quarterly review without exception.", a:["be"], hint:"мандативный subjunctive: глагол в базовой форме" },
        { q:"It is imperative that every applicant ___ a valid passport before the interview is scheduled.", a:["submit"], hint:"после 'it is imperative that' — базовая форма" },
        { q:"Were I ___ your position, I would not have signed that clause so hastily.", a:["in"], hint:"гипотетическое 'were I in your position'" },
        { q:"The committee recommended that the policy not ___ enforced until further consultation had taken place.", a:["be"], hint:"отрицательный subjunctive: 'not be'" },
        { q:"Heaven ___ that we should ever have to repeat such a catastrophic miscalculation.", a:["forbid"], hint:"устойчивое 'Heaven forbid'" },
        { q:"Far ___ it from me to question the integrity of so distinguished a colleague.", a:["be"], hint:"идиома 'Far be it from me'" }
      ]
    },
    {
      id:"g2c-C2-02",
      title:"Advanced Inversion After Negative Adverbials",
      murphy:"Advanced Grammar in Use, Unit 99",
      topic:"инверсия после отрицательных наречий",
      items:[
        { q:"No sooner ___ the minister announced the reforms than the markets began to plummet.", a:["had"], hint:"'No sooner had ... than'" },
        { q:"Hardly ___ we settled into our seats when the fire alarm shattered the silence.", a:["had"], hint:"'Hardly had ... when'" },
        { q:"Not until the final witness testified ___ the jury grasp the full extent of the deception.", a:["did"], hint:"инверсия с 'did' после 'Not until'" },
        { q:"Only then ___ it dawn on the investigators that the evidence had been fabricated.", a:["did"], hint:"'Only then did'" },
        { q:"Under no circumstances ___ confidential files to be removed from the premises.", a:["are"], hint:"инверсия после 'Under no circumstances'" },
        { q:"Little ___ they realise that their every move was being meticulously recorded.", a:["did"], hint:"'Little did they realise'" }
      ]
    },
    {
      id:"g2c-C2-03",
      title:"Fronting and Inversion for Emphasis",
      murphy:"Advanced Grammar in Use, Unit 100",
      topic:"вынос обстоятельства вперёд и инверсия",
      items:[
        { q:"So devastating ___ the storm that entire coastal villages were left uninhabitable.", a:["was"], hint:"'So + adjective + was/were'" },
        { q:"Such ___ his eloquence that even his fiercest critics fell silent.", a:["was"], hint:"'Such was his eloquence that'" },
        { q:"In the centre of the square ___ a monument commemorating the fallen soldiers.", a:["stood","stands"], hint:"инверсия после обстоятельства места: 'stood a monument'" },
        { q:"Nowhere in the entire archive ___ a single document corroborating his claim.", a:["was"], hint:"инверсия после 'Nowhere'" },
        { q:"Down ___ the curtain on what had been a turbulent and divisive era.", a:["came"], hint:"инверсия с глаголом движения: 'Down came'" },
        { q:"On no account ___ the password be shared with anyone outside the team.", a:["should","must"], hint:"инверсия после 'On no account'" }
      ]
    },
    {
      id:"g2c-C2-04",
      title:"Variations on Cleft Sentences",
      murphy:"Advanced Grammar in Use, Unit 95",
      topic:"расщеплённые предложения (cleft) и их вариации",
      items:[
        { q:"It ___ the relentless bureaucracy, rather than the cost, that ultimately deterred investors.", a:["was"], hint:"it-cleft: 'It was ... that'" },
        { q:"___ she values most is not recognition but the freedom to pursue her own research.", a:["What"], hint:"wh-cleft: 'What she values most is'" },
        { q:"All ___ wanted was a modest acknowledgement of the effort he had poured into the project.", a:["he"], hint:"'All he wanted was'" },
        { q:"The reason ___ the negotiations collapsed was a fundamental clash of priorities.", a:["why","that"], hint:"'The reason why ... was'" },
        { q:"It was only ___ the audit was complete that the discrepancies came to light.", a:["after","when","once"], hint:"it-cleft с временным придаточным" },
        { q:"___ it was that first proposed the merger remains a matter of some dispute.", a:["Who"], hint:"расщепление с 'Who it was that'" }
      ]
    },
    {
      id:"g2c-C2-05",
      title:"Ellipsis and Substitution",
      murphy:"Advanced Grammar in Use, Unit 97",
      topic:"эллипсис и субституция",
      items:[
        { q:"She said she would finish the report by Friday, and finish it she ___, against all odds.", a:["did"], hint:"эмфатическая субституция вспомогательным 'did'" },
        { q:"Some delegates supported the amendment; others vehemently opposed ___.", a:["it"], hint:"субституция 'it' вместо повтора" },
        { q:"I expected the talks to fail, and ___ they did, much to everyone's dismay.", a:["so"], hint:"субституция 'so they did'" },
        { q:"He claims to have read every volume, though I very much doubt ___.", a:["it","so"], hint:"'doubt it/so' вместо целого предложения" },
        { q:"You could have warned me about the deadline, but you chose ___ to.", a:["not"], hint:"эллипсис после 'chose not to'" },
        { q:"If anyone deserves the promotion, she ___, having shouldered the entire workload.", a:["does"], hint:"субституция 'does' вместо 'deserves it'" }
      ]
    },
    {
      id:"g2c-C2-06",
      title:"Hedging and Cautious Language",
      murphy:"Advanced Grammar in Use, Unit 88",
      topic:"хеджирование и осторожные формулировки",
      items:[
        { q:"The findings would ___ to suggest that early intervention markedly improves outcomes.", a:["appear","seem","tend"], hint:"'would appear to suggest' — осторожность" },
        { q:"It could be ___ that the data, while compelling, remain somewhat inconclusive.", a:["argued","said","claimed"], hint:"'It could be argued that' — хедж" },
        { q:"The evidence is, to some ___, consistent with the prevailing hypothesis.", a:["extent","degree"], hint:"'to some extent' — смягчение" },
        { q:"There is a tendency ___ overstate the significance of such preliminary results.", a:["to"], hint:"'a tendency to overstate'" },
        { q:"The results are, broadly ___, in line with what theory would predict.", a:["speaking"], hint:"'broadly speaking' — приблизительность" },
        { q:"One ___ argue that the sample was simply too small to draw firm conclusions.", a:["might","could"], hint:"'One might argue' — осторожное мнение" }
      ]
    },
    {
      id:"g2c-C2-07",
      title:"Advanced Discourse Markers",
      murphy:"Advanced Grammar in Use, Unit 91",
      topic:"продвинутые дискурсивные маркеры",
      items:[
        { q:"The proposal is ambitious; that ___, its feasibility has yet to be demonstrated.", a:["said"], hint:"'that said' — уступка" },
        { q:"Profits have soared this quarter. ___ from it, however, our debt has also ballooned.", a:["Far"], hint:"'Far from it' — опровержение" },
        { q:"By the same ___, what applies to imports must surely apply to exports.", a:["token"], hint:"'by the same token' — аналогия" },
        { q:"The plan is risky; ___ in all, though, the potential rewards justify it.", a:["all"], hint:"'all in all' — подведение итога" },
        { q:"___ enough, the very flaw they criticised became the product's greatest asset.", a:["Curiously","Oddly","Strangely","Interestingly"], hint:"'Curiously enough' — комментарий" },
        { q:"Needless to ___, such reckless spending could not continue indefinitely.", a:["say"], hint:"'Needless to say' — очевидность" }
      ]
    },
    {
      id:"g2c-C2-08",
      title:"Nominalisation in Formal Register",
      murphy:"Advanced Grammar in Use, Unit 90",
      topic:"номинализация в формальном стиле",
      items:[
        { q:"The ___ of the new regulations led to a sharp decline in non-compliance.", a:["introduction","implementation","imposition"], hint:"номинализация глагола 'introduce' → существительное" },
        { q:"Their ___ to abandon the merger took shareholders entirely by surprise.", a:["decision"], hint:"'decide' → 'decision'" },
        { q:"The committee's ___ of the proposal was unanimous and unequivocal.", a:["rejection","approval","endorsement"], hint:"'reject/approve' → существительное" },
        { q:"A thorough ___ of the accounts revealed several troubling irregularities.", a:["examination","analysis","review"], hint:"'examine' → 'examination'" },
        { q:"The ___ of the bridge after only a decade raised serious safety concerns.", a:["collapse","deterioration","failure"], hint:"номинализация процесса разрушения" },
        { q:"Public ___ to the policy forced the government into a humiliating reversal.", a:["opposition","resistance","objection"], hint:"'oppose' → 'opposition'" }
      ]
    },
    {
      id:"g2c-C2-09",
      title:"Participle and Verbless Clauses",
      murphy:"Advanced Grammar in Use, Unit 78",
      topic:"причастные и безглагольные обороты",
      items:[
        { q:"___ exhausted by the ordeal, the climbers pressed on towards the summit.", a:["Though","Although"], hint:"безглагольный уступительный оборот: 'Though exhausted'" },
        { q:"The contract ___ signed, both parties retired to celebrate the agreement.", a:["having","being"], hint:"абсолютная конструкция: 'The contract having been signed'" },
        { q:"___ all things considered, the venture was a remarkable success.", a:["With"], hint:"'With all things considered'" },
        { q:"Strictly ___ between ourselves, the deal is all but finalised.", a:["speaking"], hint:"причастный оборот 'strictly speaking'" },
        { q:"The negotiations over, the diplomats ___ to their respective capitals.", a:["returned","departed"], hint:"безглагольный оборот 'The negotiations over' + основной глагол" },
        { q:"___ from a distance, the ruins appear almost intact.", a:["Seen","Viewed"], hint:"причастный оборот пассива: 'Seen from a distance'" }
      ]
    },
    {
      id:"g2c-C2-10",
      title:"Idiomatic and Mixed Conditionals",
      murphy:"Advanced Grammar in Use, Unit 84",
      topic:"идиоматические и смешанные условные",
      items:[
        { q:"Had it not been ___ her timely intervention, the entire project would have foundered.", a:["for"], hint:"'Had it not been for' = 'if it hadn't been for'" },
        { q:"___ you to reconsider, we would gladly reopen the negotiations tomorrow.", a:["Were"], hint:"формальное условие: 'Were you to reconsider'" },
        { q:"If I had taken that job, I ___ living in Singapore right now.", a:["would be"], hint:"смешанное условие: прошлое → настоящее" },
        { q:"Should you ___ to require assistance, do not hesitate to contact us.", a:["happen","wish","need"], hint:"'Should you happen to' — формальное условие" },
        { q:"He would have apologised, ___ he the slightest sense of decency.", a:["had"], hint:"инвертированное условие 'had he'" },
        { q:"___ that I had known the risks, I would never have invested a penny.", a:["Had"], hint:"'Had I known' — инверсия третьего условия" }
      ]
    },
    {
      id:"g2c-C2-11",
      title:"Emphatic Structures with Do/Did",
      murphy:"Advanced Grammar in Use, Unit 96",
      topic:"эмфатические конструкции с do/did",
      items:[
        { q:"I ___ appreciate everything you have done, even if I rarely say so.", a:["do"], hint:"эмфатическое 'do' для усиления" },
        { q:"She rarely complains, but when she ___, people tend to listen.", a:["does"], hint:"'does' заменяет глагол с усилением" },
        { q:"He ___ warn us about the consequences, and how right he turned out to be.", a:["did"], hint:"эмфатическое 'did' в прошедшем" },
        { q:"___ sit down and make yourself comfortable; you must be exhausted.", a:["Do"], hint:"'Do sit down' — эмфатическое приглашение" },
        { q:"Whatever else may be said of him, he ___ deliver results.", a:["does"], hint:"усилительное 'does deliver'" },
        { q:"They claimed to have warned us, and warned us they ___ — repeatedly.", a:["did"], hint:"эмфатическая инверсия с 'did'" }
      ]
    },
    {
      id:"g2c-C2-12",
      title:"Advanced Concession and Contrast",
      murphy:"Advanced Grammar in Use, Unit 113",
      topic:"продвинутая уступка и контраст",
      items:[
        { q:"___ his many shortcomings, he remained an extraordinarily popular leader.", a:["Despite","Notwithstanding"], hint:"'Despite/Notwithstanding his shortcomings'" },
        { q:"Much ___ I admire her resolve, I cannot endorse such a reckless strategy.", a:["as","though"], hint:"'Much as I admire' — уступка" },
        { q:"Brilliant ___ the design was, it proved hopelessly impractical to manufacture.", a:["though","as"], hint:"'Brilliant though the design was'" },
        { q:"Try ___ he might, he could not dislodge the suspicion that lingered.", a:["as"], hint:"'Try as he might' — упорная уступка" },
        { q:"___ much you protest, the decision has already been ratified.", a:["However"], hint:"'However much you protest'" },
        { q:"He accepted the verdict, ___ reluctantly and with evident bitterness.", a:["albeit"], hint:"'albeit reluctantly' — уступительный союз" }
      ]
    }
  ]);
})();
