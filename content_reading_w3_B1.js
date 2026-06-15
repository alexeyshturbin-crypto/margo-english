(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P = (track,lvl,arr)=>{C[track]=C[track]||{};C[track][lvl]=C[track][lvl]||[];arr.forEach(x=>C[track][lvl].push(x));};
  P("reading","B1",[
    {
      id:"r3-B1-01",
      title:"The Old Lighthouse Keeper",
      text:"For thirty years, Mr Hale lived alone in the lighthouse on the rocky coast. Every night he climbed the long stairs to light the lamp that guided ships safely past the dangerous rocks. The work was quiet and lonely, but he never complained. Sailors said his light was the brightest on the whole coast. One stormy winter, a fishing boat lost its way in the thick fog. The crew could see nothing until, suddenly, the bright beam appeared through the darkness. Following the light, they reached the harbour safely. The next morning the grateful sailors visited the lighthouse to thank the old man. Mr Hale only smiled and said that keeping the light burning was simply his duty, nothing more.",
      questions:[
        { q:"How long had Mr Hale lived in the lighthouse?", options:["Thirty years","Three years","Thirteen years"], answer:0 },
        { q:"What did he do every night?", options:["He went fishing","He lit the lamp","He repaired boats"], answer:1 },
        { q:"Why did the fishing boat lose its way?", options:["Because of thick fog","Because of a broken engine","Because of high waves"], answer:0 },
        { q:"How did Mr Hale react to the sailors' thanks?", options:["He asked for money","He said it was simply his duty","He felt very proud"], answer:1 }
      ]
    },
    {
      id:"r3-B1-02",
      title:"Marie Curie: A Brilliant Scientist",
      text:"Marie Curie was born in Poland in 1867 and later moved to France to study science. At that time, very few women worked in laboratories, but Marie was determined to follow her dream. Together with her husband, Pierre, she discovered two new chemical elements and studied a strange power called radioactivity. Her research was difficult and often dangerous, because the materials she worked with were harmful to her health. In 1903 she became the first woman to win a Nobel Prize, and years later she won a second one in a different field. Marie used her fame to help others, especially during the First World War, when she trained nurses to use new medical machines. Today she is remembered as one of the greatest scientists in history.",
      questions:[
        { q:"Where was Marie Curie born?", options:["France","Poland","Germany"], answer:1 },
        { q:"What did she discover with her husband?", options:["Two new chemical elements","A new planet","A new medicine"], answer:0 },
        { q:"What was special about her first Nobel Prize?", options:["She won it twice","She was the first woman to win one","She shared it with three people"], answer:1 },
        { q:"How did she help during the First World War?", options:["She trained nurses to use medical machines","She built hospitals","She wrote books for soldiers"], answer:0 }
      ]
    },
    {
      id:"r3-B1-03",
      title:"City Plans New Bicycle Lanes",
      text:"The city council announced this week that it will build sixty kilometres of new bicycle lanes over the next two years. The plan is part of a wider effort to reduce traffic and improve air quality in the busy centre. Many residents have complained about heavy pollution and dangerous roads, especially near schools. Under the new plan, several main streets will have protected lanes separated from cars by low barriers. The council also promised to add hundreds of new parking spaces for bicycles and to repair damaged paths. Local cycling groups welcomed the news but asked the council to act faster. Some shop owners worried that fewer car spaces might hurt their business. The mayor replied that cleaner streets would attract more visitors in the long run.",
      questions:[
        { q:"How many kilometres of bicycle lanes will be built?", options:["Sixteen","Sixty","Six hundred"], answer:1 },
        { q:"What is one main goal of the plan?", options:["To reduce traffic and pollution","To build new schools","To lower bus prices"], answer:0 },
        { q:"How will the new lanes be separated from cars?", options:["By painted lines only","By low barriers","By tall walls"], answer:1 },
        { q:"Why were some shop owners worried?", options:["They feared losing car parking spaces","They disliked bicycles","They wanted higher taxes"], answer:0 }
      ]
    },
    {
      id:"r3-B1-04",
      title:"How Honey Is Made",
      text:"Honey is one of the oldest natural foods, and bees have been making it for millions of years. The process begins when worker bees fly from flower to flower collecting a sweet liquid called nectar. They store the nectar in a special part of their body and carry it back to the hive. Inside the hive, other bees take the nectar and chew it, slowly turning it into a thicker liquid. They then place it into small wax cells and fan it with their wings to remove water. When the honey is ready, the bees seal each cell with wax to keep it fresh. A single bee makes only a tiny amount of honey in its whole life, so a full jar represents the hard work of thousands of insects.",
      questions:[
        { q:"What do worker bees collect from flowers?", options:["Pollen","Nectar","Water"], answer:1 },
        { q:"Why do bees fan the nectar with their wings?", options:["To make it warmer","To remove water","To clean it"], answer:1 },
        { q:"How do bees keep the finished honey fresh?", options:["They seal each cell with wax","They put it in the sun","They cover it with leaves"], answer:0 },
        { q:"What does a full jar of honey represent?", options:["One bee's daily work","The work of thousands of bees","A single flower's nectar"], answer:1 }
      ]
    },
    {
      id:"r3-B1-05",
      title:"The Floating Markets of Thailand",
      text:"In Thailand, some of the most colourful markets are not on land but on the water. For hundreds of years, farmers have travelled along narrow canals in small wooden boats to sell their goods. Even today, visitors can wake up early and watch sellers paddle slowly past, their boats full of fresh fruit, vegetables, and flowers. Some sellers even cook hot meals right on their boats, filling the air with delicious smells. Buyers stand on wooden bridges or sit in their own boats, pointing at what they want. The floating markets are busiest in the morning, before the sun becomes too hot. Although modern supermarkets have appeared everywhere, these markets remain popular with both local people and tourists who enjoy their lively atmosphere and long history.",
      questions:[
        { q:"Where do the sellers travel to reach the markets?", options:["Along narrow canals","Across wide fields","Through deep forests"], answer:0 },
        { q:"What do some sellers do on their boats?", options:["They repair other boats","They cook hot meals","They paint pictures"], answer:1 },
        { q:"When are the markets busiest?", options:["In the evening","At night","In the morning"], answer:2 },
        { q:"Why do the markets remain popular today?", options:["People enjoy their atmosphere and history","They are completely free","They have no competition"], answer:0 }
      ]
    },
    {
      id:"r3-B1-06",
      title:"A Robot That Plants Trees",
      text:"A group of young engineers has built a machine that could help fight against forest loss around the world. The robot, which moves on wide wheels, can travel across rough ground and plant tree seeds much faster than people can. Using cameras and sensors, it studies the soil to find the best spots for new trees. Then it digs small holes, drops in the seeds, and covers them with earth. In a single day, the robot can plant thousands of seeds without getting tired. The engineers say their goal is not to replace human workers but to help them in places that are too large or too dangerous to reach on foot. They hope that one day many of these robots will work together to bring forests back to life.",
      questions:[
        { q:"What problem does the robot try to help with?", options:["Forest loss","Water pollution","Air traffic"], answer:0 },
        { q:"How does the robot find the best spots for trees?", options:["It asks people","It uses cameras and sensors","It guesses randomly"], answer:1 },
        { q:"How many seeds can it plant in one day?", options:["A few hundred","Thousands","Only ten"], answer:1 },
        { q:"What is the engineers' goal?", options:["To replace all human workers","To help workers in difficult places","To sell robots to farmers"], answer:1 }
      ]
    },
    {
      id:"r3-B1-07",
      title:"The Boy Who Cried Wolf",
      text:"A young shepherd boy looked after his sheep on a quiet hillside near a village. The work was boring, so one day he decided to play a trick. He ran toward the village shouting that a wolf was attacking the sheep. The villagers rushed up the hill to help, but there was no wolf at all. The boy laughed at them, and they returned home angry. A few days later, he played the same trick again, and once more the villagers came running for nothing. Then one afternoon, a real wolf appeared among the sheep. The boy screamed for help, but this time nobody believed him, and no one came. By evening, many of his sheep were gone. He learned a hard lesson: people stop trusting a person who often tells lies.",
      questions:[
        { q:"Why did the boy play a trick?", options:["He was bored","He was hungry","He was afraid"], answer:0 },
        { q:"What did he shout to the villagers?", options:["That a wolf was attacking","That a fire had started","That he was lost"], answer:0 },
        { q:"What happened when the real wolf came?", options:["The villagers saved the sheep","Nobody believed the boy","The wolf ran away"], answer:1 },
        { q:"What is the lesson of the story?", options:["Wolves are dangerous","Sheep are hard to keep","People stop trusting a liar"], answer:2 }
      ]
    },
    {
      id:"r3-B1-08",
      title:"The Marathon Runner's Comeback",
      text:"Two years ago, David broke his leg in a serious accident and doctors told him he might never run again. For months he could barely walk, and he felt that his sporting career was over. But David refused to give up. Slowly, he began to exercise, first by walking short distances and later by running gently in the park. His friends and family supported him every step of the way. After a year of hard training, he entered a small local race and finished it without stopping. Encouraged by this success, he set a bigger goal: to complete a full marathon. Last Sunday, in front of a cheering crowd, David crossed the finish line after more than four hours of running. With tears in his eyes, he said the hardest part had been believing in himself again.",
      questions:[
        { q:"What did the doctors tell David after his accident?", options:["He might never run again","He should change his job","He needed a new leg"], answer:0 },
        { q:"How did he begin his recovery?", options:["By running long races at once","By walking short distances","By swimming every day"], answer:1 },
        { q:"What bigger goal did he set after the local race?", options:["To become a coach","To complete a full marathon","To win a medal"], answer:1 },
        { q:"What did David say was the hardest part?", options:["Finding good shoes","Believing in himself again","Running in bad weather"], answer:1 }
      ]
    },
    {
      id:"r3-B1-09",
      title:"The Festival of Lights",
      text:"Every autumn, millions of people in India celebrate a wonderful festival known as the Festival of Lights. During this time, families clean and decorate their homes, often painting beautiful patterns on the floor with coloured powder. As night falls, they place small oil lamps along their windows, doors, and gardens, filling the streets with a warm golden glow. The festival celebrates the victory of light over darkness and good over evil. Families gather to share special sweets, exchange gifts, and watch colourful fireworks light up the sky. Friends visit one another to wish happiness and good fortune for the coming year. Although the celebration has ancient religious roots, today people of many backgrounds enjoy it together. For many, it is a time of hope, kindness, and new beginnings.",
      questions:[
        { q:"When is the Festival of Lights celebrated?", options:["Every spring","Every autumn","Every summer"], answer:1 },
        { q:"What do families place around their homes at night?", options:["Small oil lamps","Large candles only","Coloured flags"], answer:0 },
        { q:"What does the festival celebrate?", options:["The harvest season","The victory of light over darkness","The start of winter"], answer:1 },
        { q:"Who enjoys the festival today?", options:["Only one religious group","People of many backgrounds","Only children"], answer:1 }
      ]
    },
    {
      id:"r3-B1-10",
      title:"An Interview with a Young Chef",
      text:"We spoke with Lena, a twenty year old cook who recently won a national cooking competition. When asked how she started, Lena explained that she had always loved helping her grandmother in the kitchen. As a child, she enjoyed mixing ingredients and watching simple foods turn into delicious meals. She said the hardest part of her job was working quickly under pressure while keeping every dish perfect. Her advice for young people who want to become chefs was simple: practise often, stay curious, and never be afraid of making mistakes. Lena admitted that she had burned many dishes before learning to cook well. She now dreams of opening her own small restaurant where she can serve healthy food made from local ingredients. Above all, she wants her customers to feel at home.",
      questions:[
        { q:"How old is Lena?", options:["Twenty years old","Thirty years old","Sixteen years old"], answer:0 },
        { q:"Who did Lena help in the kitchen as a child?", options:["Her grandmother","Her teacher","Her neighbour"], answer:0 },
        { q:"What did she say was the hardest part of her job?", options:["Buying ingredients","Working quickly under pressure","Cleaning the kitchen"], answer:1 },
        { q:"What is Lena's dream?", options:["To win more prizes","To open her own restaurant","To write a cookbook"], answer:1 }
      ]
    },
    {
      id:"r3-B1-11",
      title:"The Amazon Rainforest",
      text:"The Amazon rainforest is the largest tropical forest on Earth, stretching across nine countries in South America. It is home to an amazing variety of life, including millions of species of insects, plants, birds, and animals, many of which are found nowhere else. Scientists call the forest the lungs of the planet because its huge trees produce a large part of the oxygen we breathe. The rainforest also helps control the world's weather and stores enormous amounts of water. Sadly, large areas are being cut down every year to make space for farms and roads. This destruction threatens countless animals and the people who have lived in the forest for generations. Many organisations are now working hard to protect the Amazon, hoping to keep this precious natural treasure alive for the future.",
      questions:[
        { q:"How many countries does the Amazon stretch across?", options:["Five","Nine","Twelve"], answer:1 },
        { q:"Why is the forest called the lungs of the planet?", options:["It is very wet","Its trees produce a lot of oxygen","It is very large"], answer:1 },
        { q:"What is destroying large areas of the forest?", options:["Storms and floods","Farms and roads","Wild animals"], answer:1 },
        { q:"What are many organisations trying to do?", options:["Protect the Amazon","Build more roads","Move the animals away"], answer:0 }
      ]
    },
    {
      id:"r3-B1-12",
      title:"The Invention of the Telephone",
      text:"Before the telephone existed, sending a message over a long distance could take days or even weeks. People wrote letters or used the telegraph, which could only send short coded signals. Everything changed in 1876, when Alexander Graham Bell created a machine that could carry the human voice along a wire. According to a famous story, the very first words spoken through the telephone were a call to his assistant in the next room. At first, many people did not believe the invention would be useful, and some thought it was just a clever toy. But within a few years, telephone lines began to spread across cities and countries. The invention changed how people lived and worked, allowing them to speak instantly across great distances. Today it is hard to imagine a world without it.",
      questions:[
        { q:"How did people send long-distance messages before the telephone?", options:["By radio","By letters or the telegraph","By email"], answer:1 },
        { q:"Who created the telephone in 1876?", options:["Alexander Graham Bell","Marie Curie","Thomas More"], answer:0 },
        { q:"What did some people first think about the invention?", options:["That it was just a toy","That it was dangerous","That it was too expensive"], answer:0 },
        { q:"How did the telephone change life?", options:["It made letters faster","It let people speak instantly across distances","It replaced all books"], answer:1 }
      ]
    }
  ]);
})();
