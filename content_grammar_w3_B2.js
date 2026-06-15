(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P = (track,lvl,arr)=>{C[track]=C[track]||{};C[track][lvl]=C[track][lvl]||[];arr.forEach(x=>C[track][lvl].push(x));};
  P("grammar","B2",[
    {
      id:"g3-B2-01", title:"Present Perfect vs Past Simple", murphy:"English Grammar in Use, Units 14–20",
      topic:"настоящее совершенное и простое прошедшее",
      items:[
        { q:"I ___ never been to Iceland, but I'd love to go someday.", a:["have","'ve"], hint:"я никогда (вспом. глагол для have been)" },
        { q:"She ___ her keys yesterday and still can't find them.", a:["lost"], hint:"потеряла (вчера, простое прошедшее)" },
        { q:"We've ___ in this flat since 2019, so it feels like home now.", a:["lived"], hint:"живём (форма после have для live)" },
        { q:"How long ___ you known your best friend?", a:["have"], hint:"вспомогательный глагол для 'как долго ты знаешь'" },
        { q:"They didn't ___ the email until this morning.", a:["receive","get"], hint:"получили (после didn't — инфинитив)" },
        { q:"This is the first time I ___ ever tried sushi.", a:["have","'ve"], hint:"вспом. глагол: впервые я пробую" }
      ]
    },
    {
      id:"g3-B2-02", title:"Past Perfect", murphy:"English Grammar in Use, Units 15–16",
      topic:"прошедшее совершенное (past perfect)",
      items:[
        { q:"By the time we arrived, the train ___ already left the station.", a:["had"], hint:"вспом. глагол past perfect" },
        { q:"She realised she ___ met him somewhere before.", a:["had"], hint:"уже встречала раньше (вспом. глагол)" },
        { q:"After they ___ finished dinner, they went for a walk.", a:["had"], hint:"после того как закончили (вспом. глагол)" },
        { q:"I couldn't enter because I ___ forgotten my password.", a:["had"], hint:"забыл (вспом. глагол past perfect)" },
        { q:"The film had already ___ when we got to the cinema.", a:["started","begun"], hint:"началось (3-я форма после had)" },
        { q:"He told me he had never ___ such a beautiful view before.", a:["seen"], hint:"видел (3-я форма после had never)" }
      ]
    },
    {
      id:"g3-B2-03", title:"Past Perfect Continuous", murphy:"English Grammar in Use, Units 16–17",
      topic:"прошедшее совершенное длительное",
      items:[
        { q:"She was exhausted because she ___ been working all night.", a:["had","'d"], hint:"вспом. глагол past perfect continuous" },
        { q:"They had been ___ for hours before the bus finally came.", a:["waiting"], hint:"ждали (ing-форма после had been)" },
        { q:"My eyes hurt because I had been ___ at the screen too long.", a:["staring","looking"], hint:"смотрел (ing-форма)" },
        { q:"How long had you been ___ before you found a job?", a:["studying","searching","looking"], hint:"учился/искал (ing-форма)" },
        { q:"The ground was wet because it ___ been raining.", a:["had","'d"], hint:"вспом. глагол: шёл дождь" },
        { q:"He had been ___ to fix the car all morning, but gave up.", a:["trying","attempting"], hint:"пытался (ing-форма)" }
      ]
    },
    {
      id:"g3-B2-04", title:"Future Perfect and Future Continuous", murphy:"English Grammar in Use, Units 24–25",
      topic:"будущее совершенное и длительное",
      items:[
        { q:"By next June I ___ have graduated from university.", a:["will","'ll"], hint:"вспом. глагол future perfect" },
        { q:"This time tomorrow I'll ___ flying over the Atlantic.", a:["be"], hint:"будущее длительное: will be ___ flying" },
        { q:"By the end of the year, we ___ have saved enough money.", a:["will","'ll"], hint:"вспом. глагол: накопим" },
        { q:"Don't call at eight — I'll be ___ dinner then.", a:["having","cooking","eating"], hint:"буду ужинать (ing-форма)" },
        { q:"In ten years' time, technology will have ___ completely.", a:["changed","transformed"], hint:"изменится (3-я форма после will have)" },
        { q:"This time next week she will be ___ on a beach in Greece.", a:["relaxing","lying","sitting"], hint:"будет отдыхать (ing-форма)" }
      ]
    },
    {
      id:"g3-B2-05", title:"Mixed Conditionals", murphy:"English Grammar in Use, Units 38–40",
      topic:"смешанные условные предложения",
      items:[
        { q:"If I had studied medicine, I ___ be a doctor now.", a:["would","'d"], hint:"был бы сейчас (результат в настоящем)" },
        { q:"If she weren't so shy, she ___ have spoken up at the meeting.", a:["would","'d"], hint:"высказалась бы (результат в прошлом)" },
        { q:"If they had caught the earlier train, they ___ be here by now.", a:["would","'d"], hint:"были бы уже здесь" },
        { q:"I wouldn't be so tired today if I ___ gone to bed earlier.", a:["had","'d"], hint:"если бы лёг раньше (условие в прошлом)" },
        { q:"If he were more organised, he ___ have missed the deadline.", a:["wouldn't","would not"], hint:"не пропустил бы (отрицание, прошлое)" },
        { q:"If we hadn't moved abroad, we ___ still be living in that small town.", a:["would","'d"], hint:"жили бы до сих пор" }
      ]
    },
    {
      id:"g3-B2-06", title:"Wish and If Only", murphy:"English Grammar in Use, Units 41–42",
      topic:"конструкции wish / if only",
      items:[
        { q:"I wish I ___ speak three languages fluently.", a:["could"], hint:"мог бы (способность в настоящем)" },
        { q:"She wishes she ___ studied harder for the exam.", a:["had","'d"], hint:"жалеет о прошлом (вспом. глагол)" },
        { q:"If only it ___ stop raining so we could go outside!", a:["would"], hint:"раздражение: хоть бы перестал (would)" },
        { q:"I wish I ___ taller — I can never reach the top shelf.", a:["were","was"], hint:"был бы выше (настоящее, нереальное)" },
        { q:"He wishes he ___ told her the truth earlier.", a:["had","'d"], hint:"жалеет, что не сказал (прошлое)" },
        { q:"I wish you ___ make so much noise when I'm trying to work.", a:["wouldn't","would not"], hint:"хоть бы ты не шумел (раздражение)" }
      ]
    },
    {
      id:"g3-B2-07", title:"Passive Voice: All Forms", murphy:"English Grammar in Use, Units 42–45",
      topic:"страдательный залог: все формы",
      items:[
        { q:"The bridge is currently ___ repaired, so traffic is slow.", a:["being"], hint:"present continuous passive: is ___ repaired" },
        { q:"This novel ___ been translated into forty languages.", a:["has"], hint:"present perfect passive (вспом. глагол)" },
        { q:"The decision will ___ made by the board next week.", a:["be"], hint:"future passive: will ___ made" },
        { q:"It is ___ that the company will go bankrupt soon.", a:["said","thought","believed","reported"], hint:"говорят, что (it is ___ that)" },
        { q:"The suspect is ___ to be hiding abroad.", a:["said","thought","believed","reported"], hint:"полагают, что он (is ___ to be)" },
        { q:"By the time you read this, the report ___ have been sent.", a:["will","'ll"], hint:"future perfect passive (вспом. глагол)" }
      ]
    },
    {
      id:"g3-B2-08", title:"Reported Speech: Statements, Questions, Commands", murphy:"English Grammar in Use, Units 47–48",
      topic:"косвенная речь: полностью",
      items:[
        { q:"She said that she ___ feeling tired and wanted to rest.", a:["was"], hint:"чувствовала себя (сдвиг времён: is → ___)" },
        { q:"He asked me ___ I had finished the project yet.", a:["if","whether"], hint:"спросил, закончил ли я (косвенный вопрос)" },
        { q:"They asked where I ___ living at the time.", a:["was"], hint:"где я жил (сдвиг: am → ___)" },
        { q:"The teacher told us ___ stop talking immediately.", a:["to"], hint:"велел перестать (команда: told us ___ stop)" },
        { q:"She asked me what time the meeting ___ start.", a:["would"], hint:"когда начнётся (сдвиг: will → ___)" },
        { q:"He warned them ___ to touch the wet paint.", a:["not"], hint:"предупредил не трогать (warned them ___ to touch)" }
      ]
    },
    {
      id:"g3-B2-09", title:"Modals of Deduction: Past and Present", murphy:"English Grammar in Use, Units 28–30",
      topic:"модальные глаголы предположения (наст. и прош.)",
      items:[
        { q:"She's not answering — she ___ be asleep already.", a:["must"], hint:"должно быть (уверенность, настоящее)" },
        { q:"You ___ have left your phone at the office; check there.", a:["might","may","could"], hint:"возможно, оставил (предположение о прошлом)" },
        { q:"He ___ be at home; I just saw him at the gym.", a:["can't","cannot"], hint:"не может быть (уверенность, отрицание)" },
        { q:"They ___ have missed the flight — they were so late.", a:["must"], hint:"должно быть, опоздали (прошлое)" },
        { q:"That ___ have been Sarah at the door; she has a key.", a:["could","might","may"], hint:"возможно, это была (прошлое)" },
        { q:"The lights are off, so they ___ have gone to bed.", a:["must"], hint:"должно быть, легли спать (прошлое)" }
      ]
    },
    {
      id:"g3-B2-10", title:"Causative Have and Get", murphy:"English Grammar in Use, Unit 46",
      topic:"каузативные конструкции have/get something done",
      items:[
        { q:"I need to ___ my hair cut before the wedding.", a:["have","get"], hint:"подстричься (заказать услугу)" },
        { q:"We're going to have the kitchen ___ next month.", a:["painted","renovated","redone"], hint:"покрасить/отремонтировать (3-я форма)" },
        { q:"She got her car ___ at the garage yesterday.", a:["repaired","fixed","serviced"], hint:"починили (3-я форма после got)" },
        { q:"You should have your eyes ___ if you keep getting headaches.", a:["tested","checked","examined"], hint:"проверить (3-я форма)" },
        { q:"They had a new fence ___ around the garden.", a:["built","installed","put"], hint:"построили (3-я форма после had)" },
        { q:"I'm getting my suit dry-___ for the interview.", a:["cleaned"], hint:"в химчистку (dry-___ed)" }
      ]
    },
    {
      id:"g3-B2-11", title:"Relative Clauses: Non-defining and Reduced", murphy:"English Grammar in Use, Units 92–96",
      topic:"относительные придаточные: без запятых и сокращённые",
      items:[
        { q:"My brother, ___ lives in Berlin, is visiting us next week.", a:["who"], hint:"который (о человеке, non-defining)" },
        { q:"The report, ___ was published yesterday, caused a scandal.", a:["which"], hint:"который (о предмете, non-defining)" },
        { q:"Paris, ___ I spent my childhood, will always feel like home.", a:["where"], hint:"где (место, non-defining)" },
        { q:"The man ___ standing by the door is our new manager.", a:["standing"], hint:"стоящий (сокращённое: the man who is ___)" },
        { q:"Anyone ___ to join the trip should sign up today.", a:["wanting","wishing"], hint:"желающий (сокращённое: who wants → ___)" },
        { q:"The documents ___ on the desk need your signature.", a:["lying","left","placed"], hint:"лежащие (сокращённое причастие)" }
      ]
    },
    {
      id:"g3-B2-12", title:"Participle Clauses", murphy:"English Grammar in Use, Units 67–68",
      topic:"причастные обороты",
      items:[
        { q:"___ the truth, she decided to confront her colleague.", a:["Knowing","Realising"], hint:"зная (причастный оборот в начале)" },
        { q:"___ in 1889, the Eiffel Tower remains a symbol of Paris.", a:["Built","Completed","Constructed"], hint:"построенная (страдательное причастие)" },
        { q:"He left the room, ___ the door behind him.", a:["slamming","closing","shutting"], hint:"хлопнув (одновременное действие, ing)" },
        { q:"___ for hours, the hikers finally reached the summit.", a:["Having","Walking"], hint:"пройдя/идя (причастие)" },
        { q:"___ no other option, they accepted the offer.", a:["Having","Seeing"], hint:"не имея (Having no option)" },
        { q:"___ tired after the trip, she went straight to bed.", a:["Feeling","Being"], hint:"чувствуя себя (причастие)" }
      ]
    },
    {
      id:"g3-B2-13", title:"Gerund and Infinitive: Nuances", murphy:"English Grammar in Use, Units 53–58",
      topic:"герундий и инфинитив: оттенки значения",
      items:[
        { q:"I'll never forget ___ the Grand Canyon for the first time.", a:["seeing","visiting"], hint:"забыть, как видел (герундий — память о прошлом)" },
        { q:"Remember ___ the door when you leave the house.", a:["to","to lock"], hint:"не забудь закрыть (инфинитив — будущее действие)" },
        { q:"She stopped ___ coffee because it kept her awake.", a:["drinking"], hint:"бросила пить (stop + герундий — прекратить)" },
        { q:"We regret ___ you that your application was rejected.", a:["to","to inform","to tell"], hint:"с сожалением сообщаем (regret + инфинитив)" },
        { q:"He tried ___ the window, but it was stuck.", a:["opening","to","to open"], hint:"попробовал открыть (try)" },
        { q:"I'd prefer ___ at home tonight rather than go out.", a:["to","to stay"], hint:"предпочёл бы остаться (prefer + инфинитив)" }
      ]
    },
    {
      id:"g3-B2-14", title:"Articles, Quantifiers, and Emphasis", murphy:"English Grammar in Use, Units 70–78, 95, 110",
      topic:"артикли, кванторы и средства усиления",
      items:[
        { q:"___ poverty remains one of the biggest global challenges.", a:["Empty","-"], hint:"нулевой артикль перед абстрактным понятием (поставь дефис)" },
        { q:"Hardly ___ of the students passed the difficult exam.", a:["any"], hint:"едва ли кто-то (hardly ___ )" },
        { q:"I do ___ that we should reconsider the whole plan.", a:["believe","think","feel"], hint:"усиление: я действительно считаю (do + глагол)" },
        { q:"Neither of the two proposals ___ acceptable to the board.", a:["was","is"], hint:"ни одно не было приемлемо (neither + ед. ч.)" },
        { q:"This is by ___ the best restaurant in the whole city.", a:["far"], hint:"безусловно лучший (by ___ )" },
        { q:"Never before ___ I seen such an extraordinary performance.", a:["had","have"], hint:"инверсия после Never before (вспом. глагол)" }
      ]
    }
  ]);
})();
