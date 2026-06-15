(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P = (track,lvl,arr)=>{C[track]=C[track]||{};C[track][lvl]=C[track][lvl]||[];arr.forEach(x=>C[track][lvl].push(x));};
  P("vocab","B1",[
    // Character and appearance
    { id:"v3-B1-01", en:"reliable", ru:"надёжный", ex:"She is a reliable colleague who always meets deadlines." },
    { id:"v3-B1-02", en:"ambitious", ru:"амбициозный", ex:"He is ambitious and wants to run his own company one day." },
    { id:"v3-B1-03", en:"easy-going", ru:"спокойный, лёгкий в общении", ex:"My brother is so easy-going that nothing ever upsets him." },
    { id:"v3-B1-04", en:"stubborn", ru:"упрямый", ex:"She is too stubborn to admit when she is wrong." },
    { id:"v3-B1-05", en:"good-looking", ru:"привлекательный", ex:"The actor is talented and very good-looking." },
    { id:"v3-B1-06", en:"to look like", ru:"быть похожим на", ex:"You look like your mother when you smile." },
    { id:"v3-B1-07", en:"middle-aged", ru:"средних лет", ex:"A middle-aged man in a suit asked for directions." },

    // Relationships
    { id:"v3-B1-08", en:"to get on well with", ru:"хорошо ладить с", ex:"I get on well with most of my neighbours." },
    { id:"v3-B1-09", en:"to fall out with", ru:"поссориться с", ex:"They fell out with each other over money." },
    { id:"v3-B1-10", en:"acquaintance", ru:"знакомый", ex:"He is just an acquaintance, not a close friend." },
    { id:"v3-B1-11", en:"to break up", ru:"расстаться", ex:"They decided to break up after five years together." },
    { id:"v3-B1-12", en:"to keep in touch", ru:"поддерживать связь", ex:"We promised to keep in touch after the course ended." },
    { id:"v3-B1-13", en:"trust", ru:"доверие", ex:"A good relationship is built on trust." },

    // Emotions
    { id:"v3-B1-14", en:"anxious", ru:"тревожный", ex:"I feel anxious before every job interview." },
    { id:"v3-B1-15", en:"relieved", ru:"испытывающий облегчение", ex:"She was relieved when the exam was finally over." },
    { id:"v3-B1-16", en:"frustrated", ru:"разочарованный, раздражённый", ex:"He felt frustrated because the printer kept jamming." },
    { id:"v3-B1-17", en:"thrilled", ru:"в восторге", ex:"We were thrilled to hear that they got married." },
    { id:"v3-B1-18", en:"embarrassed", ru:"смущённый", ex:"I was embarrassed when I forgot her name." },
    { id:"v3-B1-19", en:"to cheer up", ru:"подбодрить, развеселиться", ex:"A cup of coffee always cheers me up in the morning." },

    // Work and career
    { id:"v3-B1-20", en:"deadline", ru:"крайний срок", ex:"We have to meet the deadline by Friday." },
    { id:"v3-B1-21", en:"to apply for", ru:"подавать заявку на", ex:"She applied for a marketing position last week." },
    { id:"v3-B1-22", en:"colleague", ru:"коллега", ex:"My colleagues organised a party for my birthday." },
    { id:"v3-B1-23", en:"promotion", ru:"повышение", ex:"He got a promotion after two years of hard work." },
    { id:"v3-B1-24", en:"to be in charge of", ru:"отвечать за", ex:"She is in charge of the whole sales team." },
    { id:"v3-B1-25", en:"part-time", ru:"на полставки", ex:"I have a part-time job at a bookshop." },
    { id:"v3-B1-26", en:"workload", ru:"рабочая нагрузка", ex:"My workload has increased since we lost two staff members." },

    // Money and shopping
    { id:"v3-B1-27", en:"to afford", ru:"позволить себе", ex:"We can't afford a new car this year." },
    { id:"v3-B1-28", en:"bargain", ru:"выгодная покупка", ex:"This jacket was a real bargain at half price." },
    { id:"v3-B1-29", en:"to save up", ru:"копить", ex:"They are saving up for a holiday in Italy." },
    { id:"v3-B1-30", en:"refund", ru:"возврат денег", ex:"I returned the shoes and got a full refund." },
    { id:"v3-B1-31", en:"to be on a tight budget", ru:"иметь ограниченный бюджет", ex:"As students, we are on a tight budget." },
    { id:"v3-B1-32", en:"receipt", ru:"чек", ex:"Keep the receipt in case you want to exchange it." },

    // Travel
    { id:"v3-B1-33", en:"to book in advance", ru:"бронировать заранее", ex:"It's cheaper to book your flights in advance." },
    { id:"v3-B1-34", en:"luggage", ru:"багаж", ex:"My luggage was lost somewhere at the airport." },
    { id:"v3-B1-35", en:"sightseeing", ru:"осмотр достопримечательностей", ex:"We spent the whole day sightseeing in Rome." },
    { id:"v3-B1-36", en:"to check in", ru:"зарегистрироваться (на рейс/в отель)", ex:"You should check in two hours before departure." },
    { id:"v3-B1-37", en:"destination", ru:"пункт назначения", ex:"Greece is a popular summer destination." },
    { id:"v3-B1-38", en:"delay", ru:"задержка", ex:"Our train had a long delay because of the snow." },

    // Technology and the internet
    { id:"v3-B1-39", en:"to download", ru:"скачивать", ex:"It took ages to download the new update." },
    { id:"v3-B1-40", en:"device", ru:"устройство", ex:"You can use this app on any mobile device." },
    { id:"v3-B1-41", en:"password", ru:"пароль", ex:"Make sure your password is hard to guess." },
    { id:"v3-B1-42", en:"to log in", ru:"входить в систему", ex:"I can't log in because I forgot my username." },
    { id:"v3-B1-43", en:"social media", ru:"социальные сети", ex:"She spends too much time on social media." },
    { id:"v3-B1-44", en:"to back up", ru:"делать резервную копию", ex:"Always back up your files before updating the system." },

    // Health and sport
    { id:"v3-B1-45", en:"to work out", ru:"тренироваться", ex:"I try to work out at the gym three times a week." },
    { id:"v3-B1-46", en:"to recover", ru:"выздоравливать", ex:"It took him a month to recover from the operation." },
    { id:"v3-B1-47", en:"injury", ru:"травма", ex:"The player missed the match because of an injury." },
    { id:"v3-B1-48", en:"to keep fit", ru:"поддерживать форму", ex:"Cycling to work helps me keep fit." },
    { id:"v3-B1-49", en:"prescription", ru:"рецепт (врача)", ex:"The doctor gave me a prescription for antibiotics." },
    { id:"v3-B1-50", en:"stress", ru:"стресс", ex:"Regular exercise is a good way to reduce stress." },

    // Environment
    { id:"v3-B1-51", en:"to recycle", ru:"перерабатывать", ex:"We recycle all our paper and glass at home." },
    { id:"v3-B1-52", en:"pollution", ru:"загрязнение", ex:"Air pollution is a serious problem in big cities." },
    { id:"v3-B1-53", en:"climate change", ru:"изменение климата", ex:"Climate change is affecting weather all over the world." },
    { id:"v3-B1-54", en:"renewable energy", ru:"возобновляемая энергия", ex:"Solar power is a popular form of renewable energy." },
    { id:"v3-B1-55", en:"waste", ru:"отходы", ex:"We should try to produce less plastic waste." },

    // Education
    { id:"v3-B1-56", en:"to take an exam", ru:"сдавать экзамен", ex:"I'm going to take an English exam next month." },
    { id:"v3-B1-57", en:"to revise", ru:"повторять (материал)", ex:"She stayed up late to revise for the test." },
    { id:"v3-B1-58", en:"degree", ru:"учёная степень, диплом", ex:"He has a degree in computer science." },
    { id:"v3-B1-59", en:"to fail", ru:"провалить, не сдать", ex:"He was upset that he failed his driving test." },
    { id:"v3-B1-60", en:"subject", ru:"предмет (учебный)", ex:"History was my favourite subject at school." },

    // Media and entertainment
    { id:"v3-B1-61", en:"plot", ru:"сюжет", ex:"The film had a confusing plot but great actors." },
    { id:"v3-B1-62", en:"to come out", ru:"выходить (в прокат)", ex:"The new album comes out next week." },
    { id:"v3-B1-63", en:"review", ru:"рецензия, отзыв", ex:"The restaurant got excellent reviews online." },
    { id:"v3-B1-64", en:"episode", ru:"серия, эпизод", ex:"I watched three episodes of the series last night." },
    { id:"v3-B1-65", en:"audience", ru:"аудитория, публика", ex:"The audience clapped loudly at the end of the show." },

    // City and society
    { id:"v3-B1-66", en:"traffic jam", ru:"пробка", ex:"We were stuck in a traffic jam for an hour." },
    { id:"v3-B1-67", en:"public transport", ru:"общественный транспорт", ex:"Public transport in this city is cheap and reliable." },
    { id:"v3-B1-68", en:"crowded", ru:"переполненный, многолюдный", ex:"The market was so crowded we could hardly move." },
    { id:"v3-B1-69", en:"neighbourhood", ru:"район", ex:"We live in a quiet neighbourhood near the park." },
    { id:"v3-B1-70", en:"facilities", ru:"удобства, инфраструктура", ex:"The town has good facilities for young families." },

    // Food and restaurants
    { id:"v3-B1-71", en:"to book a table", ru:"забронировать столик", ex:"We booked a table for six at the new restaurant." },
    { id:"v3-B1-72", en:"starter", ru:"закуска", ex:"I ordered a soup as a starter." },
    { id:"v3-B1-73", en:"to be in the mood for", ru:"хотеть (чего-то)", ex:"I'm in the mood for something spicy tonight." },
    { id:"v3-B1-74", en:"vegetarian", ru:"вегетарианский", ex:"They added more vegetarian dishes to the menu." },
    { id:"v3-B1-75", en:"to give a tip", ru:"оставлять чаевые", ex:"We gave the waiter a tip for the great service." },

    // Frequent verbs and adjectives
    { id:"v3-B1-76", en:"to deal with", ru:"справляться с, иметь дело с", ex:"She knows how to deal with difficult customers." },
    { id:"v3-B1-77", en:"to figure out", ru:"разобраться, понять", ex:"I finally figured out how the machine works." },
    { id:"v3-B1-78", en:"to point out", ru:"указать, отметить", ex:"He pointed out a mistake in my report." },
    { id:"v3-B1-79", en:"worth", ru:"стоящий", ex:"This museum is definitely worth a visit." },
    { id:"v3-B1-80", en:"to turn out", ru:"оказаться", ex:"The plan turned out to be more difficult than expected." }
  ]);
})();
