(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P = (track,lvl,arr)=>{C[track]=C[track]||{};C[track][lvl]=C[track][lvl]||[];arr.forEach(x=>C[track][lvl].push(x));};
  P("vocab","A2",[
    // Дом и мебель
    { id:"v3-A2-01", en:"furniture", ru:"мебель", ex:"We bought new furniture for the living room." },
    { id:"v3-A2-02", en:"shelf", ru:"полка", ex:"Put the books on the shelf, please." },
    { id:"v3-A2-03", en:"drawer", ru:"ящик (комода)", ex:"My socks are in the top drawer." },
    { id:"v3-A2-04", en:"ceiling", ru:"потолок", ex:"There is a lamp on the ceiling." },
    { id:"v3-A2-05", en:"stairs", ru:"лестница", ex:"She walked up the stairs slowly." },

    // Кухня / еда
    { id:"v3-A2-06", en:"fridge", ru:"холодильник", ex:"The milk is in the fridge." },
    { id:"v3-A2-07", en:"plate", ru:"тарелка", ex:"He put the food on a clean plate." },
    { id:"v3-A2-08", en:"spoon", ru:"ложка", ex:"You need a spoon to eat soup." },
    { id:"v3-A2-09", en:"recipe", ru:"рецепт", ex:"This recipe is easy and quick." },
    { id:"v3-A2-10", en:"taste", ru:"вкус; пробовать", ex:"This soup has a wonderful taste." },
    { id:"v3-A2-11", en:"flour", ru:"мука", ex:"You need flour to make bread." },

    // Город / места
    { id:"v3-A2-12", en:"library", ru:"библиотека", ex:"I borrow books from the library." },
    { id:"v3-A2-13", en:"pharmacy", ru:"аптека", ex:"The pharmacy is next to the bank." },
    { id:"v3-A2-14", en:"square", ru:"площадь", ex:"There is a market in the town square." },
    { id:"v3-A2-15", en:"bridge", ru:"мост", ex:"We crossed the bridge over the river." },
    { id:"v3-A2-16", en:"corner", ru:"угол", ex:"The shop is on the corner of the street." },
    { id:"v3-A2-17", en:"neighbour", ru:"сосед", ex:"My neighbour is very friendly." },

    // Транспорт
    { id:"v3-A2-18", en:"ticket", ru:"билет", ex:"I bought a train ticket online." },
    { id:"v3-A2-19", en:"platform", ru:"платформа (перрон)", ex:"The train leaves from platform two." },
    { id:"v3-A2-20", en:"traffic", ru:"движение, пробки", ex:"There was a lot of traffic this morning." },
    { id:"v3-A2-21", en:"journey", ru:"поездка, путешествие", ex:"The journey took three hours." },
    { id:"v3-A2-22", en:"helmet", ru:"шлем", ex:"Always wear a helmet when you cycle." },

    // Одежда
    { id:"v3-A2-23", en:"jacket", ru:"куртка, пиджак", ex:"It is cold, so take your jacket." },
    { id:"v3-A2-24", en:"scarf", ru:"шарф", ex:"She wore a warm scarf in winter." },
    { id:"v3-A2-25", en:"gloves", ru:"перчатки", ex:"My hands are cold without gloves." },
    { id:"v3-A2-26", en:"pocket", ru:"карман", ex:"My keys are in my pocket." },
    { id:"v3-A2-27", en:"belt", ru:"ремень", ex:"He wears a black leather belt." },

    // Тело
    { id:"v3-A2-28", en:"shoulder", ru:"плечо", ex:"My shoulder hurts after the gym." },
    { id:"v3-A2-29", en:"knee", ru:"колено", ex:"He fell and hurt his knee." },
    { id:"v3-A2-30", en:"throat", ru:"горло", ex:"I have a sore throat today." },
    { id:"v3-A2-31", en:"finger", ru:"палец (руки)", ex:"She cut her finger while cooking." },
    { id:"v3-A2-32", en:"skin", ru:"кожа", ex:"The sun is bad for your skin." },

    // Семья
    { id:"v3-A2-33", en:"cousin", ru:"двоюродный брат/сестра", ex:"My cousin lives in another city." },
    { id:"v3-A2-34", en:"nephew", ru:"племянник", ex:"My nephew is only five years old." },
    { id:"v3-A2-35", en:"aunt", ru:"тётя", ex:"My aunt visits us every summer." },
    { id:"v3-A2-36", en:"relative", ru:"родственник", ex:"All our relatives came to the wedding." },
    { id:"v3-A2-37", en:"twins", ru:"близнецы", ex:"The twins look exactly the same." },

    // Школа
    { id:"v3-A2-38", en:"subject", ru:"предмет (учебный)", ex:"My favourite subject is history." },
    { id:"v3-A2-39", en:"homework", ru:"домашнее задание", ex:"I have a lot of homework tonight." },
    { id:"v3-A2-40", en:"exam", ru:"экзамен", ex:"She passed her English exam." },
    { id:"v3-A2-41", en:"classmate", ru:"одноклассник", ex:"My classmate helped me with maths." },
    { id:"v3-A2-42", en:"dictionary", ru:"словарь", ex:"Use a dictionary to find new words." },

    // Природа / погода
    { id:"v3-A2-43", en:"weather", ru:"погода", ex:"The weather is nice and sunny today." },
    { id:"v3-A2-44", en:"cloud", ru:"облако, туча", ex:"There is a big dark cloud in the sky." },
    { id:"v3-A2-45", en:"thunder", ru:"гром", ex:"The thunder was very loud last night." },
    { id:"v3-A2-46", en:"hill", ru:"холм", ex:"Our house is on top of a hill." },
    { id:"v3-A2-47", en:"forest", ru:"лес", ex:"We went for a walk in the forest." },
    { id:"v3-A2-48", en:"wind", ru:"ветер", ex:"The wind is very strong today." },

    // Животные
    { id:"v3-A2-49", en:"rabbit", ru:"кролик", ex:"The rabbit is eating a carrot." },
    { id:"v3-A2-50", en:"sheep", ru:"овца", ex:"There are many sheep on the farm." },
    { id:"v3-A2-51", en:"butterfly", ru:"бабочка", ex:"A beautiful butterfly landed on the flower." },
    { id:"v3-A2-52", en:"spider", ru:"паук", ex:"There is a spider in the corner." },
    { id:"v3-A2-53", en:"insect", ru:"насекомое", ex:"An insect flew into the room." },

    // Спорт / хобби
    { id:"v3-A2-54", en:"team", ru:"команда", ex:"Our team won the football match." },
    { id:"v3-A2-55", en:"coach", ru:"тренер", ex:"The coach taught us new skills." },
    { id:"v3-A2-56", en:"hobby", ru:"хобби, увлечение", ex:"My hobby is taking photos." },
    { id:"v3-A2-57", en:"painting", ru:"рисование; картина", ex:"Painting helps me relax." },
    { id:"v3-A2-58", en:"chess", ru:"шахматы", ex:"We play chess every weekend." },

    // Профессии
    { id:"v3-A2-59", en:"engineer", ru:"инженер", ex:"My brother works as an engineer." },
    { id:"v3-A2-60", en:"lawyer", ru:"юрист, адвокат", ex:"She wants to become a lawyer." },
    { id:"v3-A2-61", en:"nurse", ru:"медсестра, медбрат", ex:"The nurse helped the sick man." },
    { id:"v3-A2-62", en:"waiter", ru:"официант", ex:"The waiter brought us the menu." },
    { id:"v3-A2-63", en:"manager", ru:"менеджер, управляющий", ex:"The manager spoke to all the staff." },

    // Чувства
    { id:"v3-A2-64", en:"nervous", ru:"нервный, волнующийся", ex:"I feel nervous before exams." },
    { id:"v3-A2-65", en:"proud", ru:"гордый", ex:"She is proud of her son." },
    { id:"v3-A2-66", en:"bored", ru:"скучающий", ex:"He was bored during the long film." },
    { id:"v3-A2-67", en:"surprised", ru:"удивлённый", ex:"We were surprised by the good news." },
    { id:"v3-A2-68", en:"worried", ru:"обеспокоенный", ex:"My mother is worried about me." },

    // Ежедневные действия
    { id:"v3-A2-69", en:"borrow", ru:"брать взаймы", ex:"Can I borrow your pen, please?" },
    { id:"v3-A2-70", en:"choose", ru:"выбирать", ex:"You can choose any colour you like." },
    { id:"v3-A2-71", en:"explain", ru:"объяснять", ex:"The teacher will explain the rule again." },
    { id:"v3-A2-72", en:"prepare", ru:"готовить, подготавливать", ex:"I need to prepare for the meeting." },

    // Время / числа
    { id:"v3-A2-73", en:"half", ru:"половина", ex:"I waited for half an hour." },
    { id:"v3-A2-74", en:"quarter", ru:"четверть", ex:"It is a quarter past nine." },
    { id:"v3-A2-75", en:"weekend", ru:"выходные", ex:"We relax at home on the weekend." },
    { id:"v3-A2-76", en:"century", ru:"век, столетие", ex:"This castle is over a century old." },

    // Праздники
    { id:"v3-A2-77", en:"celebrate", ru:"праздновать", ex:"We celebrate New Year with family." },
    { id:"v3-A2-78", en:"present", ru:"подарок", ex:"She gave me a nice birthday present." },
    { id:"v3-A2-79", en:"guest", ru:"гость", ex:"We invited ten guests to the party." },
    { id:"v3-A2-80", en:"firework", ru:"фейерверк", ex:"The fireworks lit up the night sky." }
  ]);
})();
