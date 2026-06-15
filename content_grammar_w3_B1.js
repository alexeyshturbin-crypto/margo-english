(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P = (track,lvl,arr)=>{C[track]=C[track]||{};C[track][lvl]=C[track][lvl]||[];arr.forEach(x=>C[track][lvl].push(x));};
  P("grammar","B1",[
    {
      id:"g3-B1-01", title:"Present Perfect vs Past Simple", murphy:"English Grammar in Use, Units 19–20",
      topic:"настоящее совершённое против простого прошедшего",
      items:[
        { q:"I ___ already finished my homework, so I can relax now.", a:["have","'ve"], hint:"вспомогательный глагол present perfect для I" },
        { q:"She lived in Madrid for two years, but she ___ back to London in 2019.", a:["moved","came"], hint:"глагол move/come в простом прошедшем" },
        { q:"Have you ever ___ sushi? It's delicious.", a:["eaten","tried","had"], hint:"3-я форма eat/try" },
        { q:"We ___ this film last night and it was boring.", a:["watched","saw"], hint:"watch/see в прошедшем времени" },
        { q:"He hasn't called me ___ Monday, and I'm worried.", a:["since"], hint:"since или for — с конкретного момента" },
        { q:"They have known each other ___ ten years now.", a:["for"], hint:"for или since — про длительность" }
      ]
    },
    {
      id:"g3-B1-02", title:"Present Perfect Continuous", murphy:"English Grammar in Use, Units 9–10",
      topic:"настоящее совершённое длительное",
      items:[
        { q:"I have ___ working on this report all morning and I'm tired.", a:["been"], hint:"вспомогательный глагол перед -ing" },
        { q:"How long have you ___ learning English?", a:["been"], hint:"форма be для present perfect continuous" },
        { q:"She's been ___ for the bus for twenty minutes already.", a:["waiting"], hint:"wait в форме -ing" },
        { q:"My eyes hurt because I've been ___ at the screen too long.", a:["looking","staring"], hint:"look/stare в форме -ing" },
        { q:"They've been ___ in this house since 2015.", a:["living"], hint:"live в форме -ing" },
        { q:"It's ___ raining all day, so the streets are flooded.", a:["been"], hint:"форма be после it's" }
      ]
    },
    {
      id:"g3-B1-03", title:"Past Continuous", murphy:"English Grammar in Use, Units 6, 14",
      topic:"прошедшее длительное время",
      items:[
        { q:"I ___ cooking dinner when the phone rang.", a:["was"], hint:"вспомогательный be для I в прошедшем длительном" },
        { q:"They ___ playing football while it started to snow.", a:["were"], hint:"форма be для they" },
        { q:"What ___ you doing at eight o'clock last night?", a:["were"], hint:"форма be для you в вопросе" },
        { q:"While she was reading, her brother ___ watching TV.", a:["was"], hint:"форма be для he/she" },
        { q:"The sun was ___ when we arrived at the beach.", a:["shining"], hint:"shine в форме -ing" },
        { q:"He wasn't ___ attention, so he missed the question.", a:["paying"], hint:"pay в форме -ing" }
      ]
    },
    {
      id:"g3-B1-04", title:"Used To", murphy:"English Grammar in Use, Unit 18",
      topic:"used to — привычки в прошлом",
      items:[
        { q:"I used ___ play the piano when I was a child.", a:["to"], hint:"частица после used" },
        { q:"She didn't use ___ like coffee, but now she loves it.", a:["to"], hint:"частица после use в отрицании" },
        { q:"There ___ to be a cinema here, but they knocked it down.", a:["used"], hint:"used — про то, что было раньше" },
        { q:"Did you ___ to live in the countryside as a kid?", a:["use"], hint:"форма use в вопросе с did" },
        { q:"We used to ___ on holiday every summer when I was young.", a:["go","travel"], hint:"go/travel — базовая форма глагола" },
        { q:"My grandfather used to ___ stories about the war.", a:["tell"], hint:"tell — базовая форма" }
      ]
    },
    {
      id:"g3-B1-05", title:"Future: Will, Going To, Present Continuous", murphy:"English Grammar in Use, Units 19–25",
      topic:"будущее время — will, going to, present continuous",
      items:[
        { q:"Look at those dark clouds! It's ___ to rain.", a:["going"], hint:"going to для предсказания по признакам" },
        { q:"I think she ___ pass the exam easily.", a:["will","'ll"], hint:"will для предположения/мнения" },
        { q:"I'm ___ my friends at the cinema tonight; it's all arranged.", a:["meeting","seeing"], hint:"present continuous для договорённости (meet/see)" },
        { q:"The phone is ringing. I ___ answer it!", a:["will","'ll"], hint:"will для спонтанного решения" },
        { q:"We ___ going to buy a new car next month.", a:["are","'re"], hint:"форма be для we перед going to" },
        { q:"What time ___ you leaving tomorrow?", a:["are"], hint:"форма be для you в present continuous" }
      ]
    },
    {
      id:"g3-B1-06", title:"Zero and First Conditional", murphy:"English Grammar in Use, Units 38–39",
      topic:"нулевой и первый тип условных предложений",
      items:[
        { q:"If you heat ice, it ___ into water.", a:["turns","melts"], hint:"present simple для общей истины (turn/melt)" },
        { q:"If it rains tomorrow, we ___ stay at home.", a:["will","'ll"], hint:"will в главной части первого условного" },
        { q:"I'll call you ___ I arrive at the station.", a:["when","if","as"], hint:"когда/если — союз времени" },
        { q:"If you don't hurry, you ___ miss the train.", a:["will","'ll"], hint:"will для последствия" },
        { q:"Water boils ___ you heat it to 100 degrees.", a:["if","when"], hint:"союз для условия/времени" },
        { q:"She won't be happy if you ___ late again.", a:["are","'re"], hint:"present simple be для you во второй части" }
      ]
    },
    {
      id:"g3-B1-07", title:"Second Conditional", murphy:"English Grammar in Use, Units 39–40",
      topic:"второй тип условных — нереальное настоящее",
      items:[
        { q:"If I had more money, I ___ travel around the world.", a:["would","'d"], hint:"would в главной части второго условного" },
        { q:"If she ___ you, she wouldn't accept that offer.", a:["were","was"], hint:"were/was для she в условном" },
        { q:"What would you do if you ___ a million dollars?", a:["won","had","found"], hint:"прошедшая форма win/have в условии" },
        { q:"We would buy that house if it ___ cheaper.", a:["were","was"], hint:"were/was для it в условии" },
        { q:"If I ___ speak Chinese, I'd work in Beijing.", a:["could"], hint:"could — мог бы (умение)" },
        { q:"He'd be much healthier if he ___ smoking.", a:["stopped","quit"], hint:"прошедшая форма stop/quit" }
      ]
    },
    {
      id:"g3-B1-08", title:"Modal Verbs: Obligation and Possibility", murphy:"English Grammar in Use, Units 26–35",
      topic:"модальные глаголы — обязанность и возможность",
      items:[
        { q:"You ___ wear a seatbelt in the car; it's the law.", a:["must","have"], hint:"must/have to — обязанность" },
        { q:"I think it ___ rain later, so take an umbrella.", a:["might","may","could"], hint:"might/may — возможность" },
        { q:"You ___ to finish the project by Friday.", a:["have"], hint:"have to — необходимость (с частицей to)" },
        { q:"You ___ smoke here; it's a hospital.", a:["mustn't","can't","cannot"], hint:"запрет — нельзя" },
        { q:"You ___ see a doctor if the pain continues.", a:["should","must","ought"], hint:"should — совет" },
        { q:"She ___ speak three languages fluently.", a:["can"], hint:"can — умение" }
      ]
    },
    {
      id:"g3-B1-09", title:"Comparatives and Superlatives", murphy:"English Grammar in Use, Units 105–110",
      topic:"сравнительная и превосходная степень",
      items:[
        { q:"This restaurant is ___ than the one near my house.", a:["better"], hint:"сравнительная форма good" },
        { q:"Mount Everest is the ___ mountain in the world.", a:["highest","tallest"], hint:"превосходная форма high/tall" },
        { q:"My new phone is much ___ than my old one.", a:["faster"], hint:"сравнительная форма fast" },
        { q:"She is the ___ intelligent student in the class.", a:["most"], hint:"most для длинных прилагательных" },
        { q:"Today is ___ hot as yesterday.", a:["as"], hint:"as ... as — такой же" },
        { q:"This book is far ___ interesting than the film.", a:["more"], hint:"more для длинных прилагательных" }
      ]
    },
    {
      id:"g3-B1-10", title:"Gerund vs Infinitive", murphy:"English Grammar in Use, Units 52–66",
      topic:"герундий против инфинитива",
      items:[
        { q:"I enjoy ___ to music in the evening.", a:["listening"], hint:"после enjoy — герундий (listen)" },
        { q:"She decided ___ study abroad next year.", a:["to"], hint:"после decide — инфинитив с to" },
        { q:"Would you mind ___ the window, please?", a:["opening","closing"], hint:"после mind — герундий (open/close)" },
        { q:"He wants ___ become a doctor.", a:["to"], hint:"после want — инфинитив с to" },
        { q:"They finished ___ the house last week.", a:["painting","building","cleaning"], hint:"после finish — герундий" },
        { q:"I'm learning ___ drive at the moment.", a:["to"], hint:"после learn — инфинитив с to" }
      ]
    },
    {
      id:"g3-B1-11", title:"Quantifiers and Relative Clauses", murphy:"English Grammar in Use, Units 84–92, 102",
      topic:"квантификаторы и определительные придаточные",
      items:[
        { q:"There isn't ___ milk left in the fridge.", a:["much","any"], hint:"much/any с неисчисляемым в отрицании" },
        { q:"How ___ people came to the party last night?", a:["many"], hint:"many с исчисляемыми" },
        { q:"The man ___ lives next door is a famous artist.", a:["who","that"], hint:"who/that — про людей" },
        { q:"This is the book ___ I told you about.", a:["which","that"], hint:"which/that — про вещи" },
        { q:"I have ___ a little money, so I can lend you some.", a:["got"], hint:"have got — иметь" },
        { q:"There are ___ few apples left; let's buy more.", a:["a"], hint:"a few — несколько (артикль)" }
      ]
    },
    {
      id:"g3-B1-12", title:"Reported Speech and the Passive", murphy:"English Grammar in Use, Units 42–49, 50",
      topic:"косвенная речь и страдательный залог",
      items:[
        { q:"She said that she ___ tired after the long trip.", a:["was"], hint:"was — сдвиг времени в косвенной речи" },
        { q:"He told me he ___ finished the work already.", a:["had","'d"], hint:"had — past perfect в косвенной речи" },
        { q:"This bridge ___ built in 1890 by a famous engineer.", a:["was"], hint:"was для пассива в прошедшем" },
        { q:"English ___ spoken in many countries around the world.", a:["is"], hint:"is для пассива в настоящем" },
        { q:"The letters ___ delivered every morning at nine.", a:["are"], hint:"are для пассива с множественным" },
        { q:"My car ___ repaired yesterday by a good mechanic.", a:["was","got"], hint:"was/got для пассива в прошедшем" }
      ]
    },
    {
      id:"g3-B1-13", title:"Question Tags and Degree Words", murphy:"English Grammar in Use, Units 51, 103–104",
      topic:"разделительные вопросы и слова степени",
      items:[
        { q:"You're coming to the meeting, ___ you?", a:["aren't"], hint:"отрицательный хвост к you're" },
        { q:"She doesn't like spicy food, ___ she?", a:["does"], hint:"положительный хвост к doesn't" },
        { q:"This coffee is ___ hot to drink right now.", a:["too"], hint:"too — слишком (с отрицательным оттенком)" },
        { q:"He isn't strong ___ to lift that box alone.", a:["enough"], hint:"enough — достаточно (после прилагательного)" },
        { q:"It was ___ a boring film that I fell asleep.", a:["such"], hint:"such + a + прилагательное + существительное" },
        { q:"The test was ___ difficult that nobody passed.", a:["so"], hint:"so + прилагательное" }
      ]
    },
    {
      id:"g3-B1-14", title:"Phrasal Verbs and Prepositions", murphy:"English Grammar in Use, Units 137–145",
      topic:"фразовые глаголы и предлоги после глаголов",
      items:[
        { q:"Could you turn ___ the music? It's too loud.", a:["down"], hint:"turn down — сделать тише" },
        { q:"I'm looking ___ to the weekend so much.", a:["forward"], hint:"look forward to — ждать с нетерпением" },
        { q:"She gave ___ smoking three years ago.", a:["up"], hint:"give up — бросить" },
        { q:"This song reminds me ___ my childhood.", a:["of"], hint:"remind of — напоминать о" },
        { q:"We need to deal ___ this problem immediately.", a:["with"], hint:"deal with — разбираться с" },
        { q:"He apologised ___ being late to the interview.", a:["for"], hint:"apologise for — извиниться за" }
      ]
    }
  ]);
})();
