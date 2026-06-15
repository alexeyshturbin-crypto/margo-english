(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P = (track,lvl,arr)=>{C[track]=C[track]||{};C[track][lvl]=C[track][lvl]||[];arr.forEach(x=>C[track][lvl].push(x));};
  P("grammar","A2",[
    {
      id:"g3-A2-01",
      title:"Verb to be: am / is / are",
      murphy:"Essential Grammar in Use, Units 1–2",
      topic:"глагол to be в настоящем времени",
      items:[
        { q:"My name ___ Anna and I work in a bank.", a:["is","'s"], hint:"он/она/оно — форма is" },
        { q:"We ___ from Spain, but we live in London now.", a:["are","'re"], hint:"мы — форма are" },
        { q:"I ___ very tired after the long flight.", a:["am","'m"], hint:"я — форма am" },
        { q:"___ you ready to order?", a:["are"], hint:"вопрос со словом you" },
        { q:"The shops ___ closed on Sunday morning.", a:["are","'re"], hint:"они (магазины) — форма are" },
        { q:"It ___ very cold today, take your coat.", a:["is","'s"], hint:"it — форма is" }
      ]
    },
    {
      id:"g3-A2-02",
      title:"Have got",
      murphy:"Essential Grammar in Use, Units 9–10",
      topic:"конструкция have got (обладание)",
      items:[
        { q:"I have ___ two sisters and one brother.", a:["got"], hint:"have ___ — обладание" },
        { q:"She ___ got a new car; it's red.", a:["has","'s"], hint:"она — форма has" },
        { q:"___ you got a pen I can borrow?", a:["have"], hint:"вопрос с you" },
        { q:"They haven't ___ any children.", a:["got"], hint:"haven't ___" },
        { q:"My flat ___ got a big balcony.", a:["has","'s"], hint:"it (квартира) — has" },
        { q:"We have ___ a problem with the engine.", a:["got"], hint:"we have ___" }
      ]
    },
    {
      id:"g3-A2-03",
      title:"Present Simple",
      murphy:"Essential Grammar in Use, Units 5–7",
      topic:"настоящее простое время",
      items:[
        { q:"She ___ coffee every morning before work.", a:["drinks"], hint:"he/she/it + s" },
        { q:"I ___ live in the city centre, I live near the park.", a:["don't","do not"], hint:"отрицание с I" },
        { q:"___ he speak French?", a:["does"], hint:"вопрос с he" },
        { q:"My brother ___ to school by bus.", a:["goes"], hint:"go + es для he/she" },
        { q:"They ___ watch television in the evening.", a:["don't","do not"], hint:"отрицание с they" },
        { q:"The train ___ at seven o'clock.", a:["leaves"], hint:"it + s" }
      ]
    },
    {
      id:"g3-A2-04",
      title:"Present Continuous",
      murphy:"Essential Grammar in Use, Units 3–4",
      topic:"настоящее длительное время",
      items:[
        { q:"Be quiet! The baby ___ sleeping.", a:["is","'s"], hint:"is + V-ing" },
        { q:"I'm ___ for my keys, I can't find them.", a:["looking"], hint:"глагол с -ing" },
        { q:"What ___ you doing right now?", a:["are"], hint:"are + you + V-ing" },
        { q:"They ___ watching a film at the moment.", a:["are","'re"], hint:"они — are" },
        { q:"It ___ raining, so take an umbrella.", a:["is","'s"], hint:"it — is" },
        { q:"We aren't ___ today because it's a holiday.", a:["working"], hint:"work + ing" }
      ]
    },
    {
      id:"g3-A2-05",
      title:"Past Simple: regular verbs",
      murphy:"Essential Grammar in Use, Units 11–12",
      topic:"прошедшее простое (правильные глаголы)",
      items:[
        { q:"Yesterday I ___ tennis with my friend.", a:["played"], hint:"play + ed" },
        { q:"We ___ to the cinema last weekend.", a:["walked"], hint:"walk + ed" },
        { q:"She ___ the kitchen this morning.", a:["cleaned"], hint:"clean + ed" },
        { q:"They ___ in a small hotel near the beach.", a:["stayed"], hint:"stay + ed" },
        { q:"He ___ the door and went outside.", a:["opened"], hint:"open + ed" },
        { q:"I ___ to finish the work, but it was too late.", a:["wanted"], hint:"want + ed" }
      ]
    },
    {
      id:"g3-A2-06",
      title:"Past Simple: irregular verbs",
      murphy:"Essential Grammar in Use, Units 13–14",
      topic:"прошедшее простое (неправильные глаголы)",
      items:[
        { q:"I ___ a great film at the cinema last night.", a:["saw"], hint:"see в прошедшем" },
        { q:"We ___ a delicious dinner at the restaurant.", a:["had"], hint:"have в прошедшем" },
        { q:"She ___ to Paris by train last summer.", a:["went"], hint:"go в прошедшем" },
        { q:"He ___ me a beautiful present for my birthday.", a:["gave"], hint:"give в прошедшем" },
        { q:"They ___ home very late after the party.", a:["came"], hint:"come в прошедшем" },
        { q:"I ___ a new jacket at the shopping centre.", a:["bought"], hint:"buy в прошедшем" }
      ]
    },
    {
      id:"g3-A2-07",
      title:"Articles: a / an / the",
      murphy:"Essential Grammar in Use, Units 65–69",
      topic:"артикли a / an / the",
      items:[
        { q:"I bought ___ apple and a banana at the market.", a:["an"], hint:"перед гласным звуком" },
        { q:"She is ___ teacher at the local school.", a:["a"], hint:"одна профессия, согласный звук" },
        { q:"Can you close ___ window, please? It's cold.", a:["the"], hint:"конкретный, известный предмет" },
        { q:"We saw ___ interesting film yesterday.", a:["an"], hint:"interesting — гласный звук" },
        { q:"He lives in ___ small village in the mountains.", a:["a"], hint:"один из многих, согласный звук" },
        { q:"___ sun is very bright today.", a:["the"], hint:"единственный в своём роде" }
      ]
    },
    {
      id:"g3-A2-08",
      title:"Plural nouns",
      murphy:"Essential Grammar in Use, Units 55–56",
      topic:"множественное число существительных",
      items:[
        { q:"There are three ___ on the table.", a:["boxes"], hint:"box во мн. числе (+es)" },
        { q:"I have two ___ and they both love cheese.", a:["mice"], hint:"mouse во мн. числе" },
        { q:"My ___ hurt because I walked all day.", a:["feet"], hint:"foot во мн. числе" },
        { q:"She has many ___ from different countries.", a:["friends"], hint:"friend + s" },
        { q:"We need to buy some ___ for dinner.", a:["tomatoes"], hint:"tomato во мн. числе (+es)" },
        { q:"The ___ are playing in the garden.", a:["children"], hint:"child во мн. числе" }
      ]
    },
    {
      id:"g3-A2-09",
      title:"This / that / these / those",
      murphy:"Essential Grammar in Use, Units 75–76",
      topic:"указательные местоимения",
      items:[
        { q:"___ book here in my hand is very interesting.", a:["this"], hint:"один предмет рядом" },
        { q:"Look at ___ mountains over there in the distance.", a:["those"], hint:"много предметов далеко" },
        { q:"___ shoes I'm wearing are too small for me.", a:["these"], hint:"много предметов рядом" },
        { q:"Who is ___ man standing near the door?", a:["that"], hint:"один предмет/человек далеко" },
        { q:"I'd like to try ___ apples here, please.", a:["these"], hint:"много предметов рядом" },
        { q:"Is ___ your bag on the floor there?", a:["that"], hint:"один предмет далеко" }
      ]
    },
    {
      id:"g3-A2-10",
      title:"Subject and object pronouns",
      murphy:"Essential Grammar in Use, Units 57–58",
      topic:"личные местоимения (подлежащее/дополнение)",
      items:[
        { q:"My sister called and I spoke to ___ for an hour.", a:["her"], hint:"дополнение: she → ?" },
        { q:"These flowers are lovely; ___ smell wonderful.", a:["they"], hint:"подлежащее: о цветах" },
        { q:"Can you help ___? I can't lift this box alone.", a:["me"], hint:"дополнение: I → ?" },
        { q:"John is my friend; I see ___ every day at work.", a:["him"], hint:"дополнение: he → ?" },
        { q:"We invited our neighbours and ___ came to the party.", a:["they"], hint:"подлежащее: о соседях" },
        { q:"This present is for you; I bought ___ yesterday.", a:["it"], hint:"дополнение: о предмете" }
      ]
    },
    {
      id:"g3-A2-11",
      title:"Possessives: adjectives and 's",
      murphy:"Essential Grammar in Use, Units 60–62",
      topic:"притяжательные прилагательные и 's",
      items:[
        { q:"This is my car and that is ___ car.", a:["your"], hint:"принадлежит тебе" },
        { q:"The dog is wagging ___ tail happily.", a:["its"], hint:"принадлежит животному" },
        { q:"That is Tom___ bicycle, not mine.", a:["'s"], hint:"имя + 's" },
        { q:"We love ___ new house near the river.", a:["our"], hint:"принадлежит нам" },
        { q:"She is wearing ___ favourite dress today.", a:["her"], hint:"принадлежит ей" },
        { q:"The children left ___ toys all over the floor.", a:["their"], hint:"принадлежит им" }
      ]
    },
    {
      id:"g3-A2-12",
      title:"Prepositions of place",
      murphy:"Essential Grammar in Use, Units 104–106",
      topic:"предлоги места",
      items:[
        { q:"The cat is sleeping ___ the sofa.", a:["on"], hint:"на поверхности" },
        { q:"There is a beautiful picture ___ the wall.", a:["on"], hint:"на стене (поверхность)" },
        { q:"My keys are ___ my bag, I can't find them.", a:["in"], hint:"внутри" },
        { q:"The bank is ___ the supermarket and the café.", a:["between"], hint:"между двумя объектами" },
        { q:"Please put your shoes ___ the bed.", a:["under"], hint:"под" },
        { q:"She is waiting ___ the bus stop.", a:["at"], hint:"в конкретной точке" }
      ]
    },
    {
      id:"g3-A2-13",
      title:"Can and can't",
      murphy:"Essential Grammar in Use, Units 31–32",
      topic:"модальный глагол can (умение/возможность)",
      items:[
        { q:"She ___ speak three languages fluently.", a:["can"], hint:"умение — может" },
        { q:"I ___ swim, I never learned how.", a:["can't","cannot"], hint:"отрицание — не может" },
        { q:"___ you help me carry this suitcase?", a:["can"], hint:"вопрос-просьба" },
        { q:"We ___ see the sea from our hotel window.", a:["can"], hint:"возможность — видим" },
        { q:"He ___ come to the meeting because he is ill.", a:["can't","cannot"], hint:"отрицание — не может прийти" },
        { q:"Birds ___ fly but penguins cannot.", a:["can"], hint:"умение — могут летать" }
      ]
    },
    {
      id:"g3-A2-14",
      title:"There is / there are",
      murphy:"Essential Grammar in Use, Units 36–38",
      topic:"оборот there is / there are",
      items:[
        { q:"There ___ a big tree in our garden.", a:["is","'s"], hint:"одно дерево — is" },
        { q:"There ___ many people at the concert last night.", a:["were"], hint:"много + прошедшее — were" },
        { q:"___ there a chemist near here?", a:["is"], hint:"вопрос: одно место — is" },
        { q:"There ___ five eggs left in the fridge.", a:["are"], hint:"пять яиц — are" },
        { q:"There ___ any milk in the bottle, it's empty.", a:["isn't","is not"], hint:"отрицание ед. ч." },
        { q:"There ___ a lot of cars in the street this morning.", a:["are"], hint:"много машин — are" }
      ]
    }
  ]);
})();
