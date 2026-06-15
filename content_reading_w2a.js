(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => { C[track]=C[track]||{}; C[track][lvl]=C[track][lvl]||[]; arr.forEach(x=>C[track][lvl].push(x)); };

  P("reading","A2",[
    {
      id:"r2a-A2-01",
      title:"My New Bike",
      text:"Last week my parents gave me a new bike for my birthday. It is blue and very fast. Now I ride to school every morning with my friend Tom. The road is quiet and we see many trees. I feel free on my bike. After school we go to the park and ride near the lake. I always wear a helmet because it keeps me safe. I love my bike very much.",
      questions:[
        { q:"What colour is the bike?", options:["Blue","Red","Green"], answer:0 },
        { q:"Who rides with the writer?", options:["Tom","Sam","Anna"], answer:0 },
        { q:"Where do they go after school?", options:["The park","The shop","The cinema"], answer:0 },
        { q:"Why does the writer wear a helmet?", options:["To stay safe","To look cool","To stay warm"], answer:0 }
      ]
    },
    {
      id:"r2a-A2-02",
      title:"The School Garden",
      text:"Our class has a small garden behind the school. We grow tomatoes, carrots and many flowers. Every Friday we water the plants and pull the weeds. Our teacher shows us how to use the tools. In summer the tomatoes are red and sweet. We give some vegetables to the kitchen for lunch. I like the garden because it is quiet and green. Working with plants makes me happy and calm.",
      questions:[
        { q:"Where is the garden?", options:["Behind the school","In the city park","Near a river"], answer:0 },
        { q:"What do they do every Friday?", options:["Water the plants","Paint the walls","Read books"], answer:0 },
        { q:"What colour are the tomatoes in summer?", options:["Red","Green","Yellow"], answer:0 },
        { q:"How does the garden make the writer feel?", options:["Happy and calm","Tired and sad","Angry and bored"], answer:0 }
      ]
    },
    {
      id:"r2a-A2-03",
      title:"A Day at the Zoo",
      text:"On Saturday my family went to the zoo. First we saw the lions sleeping in the sun. Then we watched the monkeys jump from tree to tree. They were very funny. My little sister loved the small penguins by the water. We ate sandwiches near the elephant house for lunch. In the afternoon it started to rain, so we went home. It was a long but happy day. I want to go again soon.",
      questions:[
        { q:"When did the family go to the zoo?", options:["On Saturday","On Sunday","On Monday"], answer:0 },
        { q:"What were the lions doing?", options:["Sleeping","Eating","Running"], answer:0 },
        { q:"Which animals did the sister love?", options:["Penguins","Tigers","Bears"], answer:0 },
        { q:"Why did the family go home?", options:["It started to rain","They were hungry","The zoo closed early"], answer:0 }
      ]
    },
    {
      id:"r2a-A2-04",
      title:"Cooking with Grandma",
      text:"Every Sunday I cook with my grandma. She teaches me how to make soup and bread. First we wash our hands and put on aprons. Then we cut the vegetables and put them in a big pot. The kitchen smells wonderful while the soup cooks. Grandma tells me old stories from her village. When the food is ready, the whole family sits and eats together. Cooking with her is my favourite part of the week.",
      questions:[
        { q:"How often does the writer cook with grandma?", options:["Every Sunday","Every day","Once a month"], answer:0 },
        { q:"What do they make?", options:["Soup and bread","Cake and pie","Pizza and pasta"], answer:0 },
        { q:"What do they do first?", options:["Wash their hands","Cut vegetables","Tell stories"], answer:0 },
        { q:"Who eats the food?", options:["The whole family","Only grandma","Only the writer"], answer:0 }
      ]
    },
    {
      id:"r2a-A2-05",
      title:"My Friend Robot",
      text:"My uncle works with computers and he built a small robot for me. The robot is white and has two big eyes. It can move around the room and follow my voice. When I say hello, it waves its arm. It can also play simple music and tell short jokes. Sometimes it gets stuck under the table and I help it. The robot cannot do my homework, but it makes me laugh. I think robots will help people more in the future.",
      questions:[
        { q:"Who built the robot?", options:["The uncle","The father","The teacher"], answer:0 },
        { q:"What does the robot do when you say hello?", options:["Waves its arm","Sings a song","Jumps up"], answer:0 },
        { q:"Where does the robot sometimes get stuck?", options:["Under the table","In the garden","On the stairs"], answer:0 },
        { q:"What can the robot NOT do?", options:["Homework","Play music","Tell jokes"], answer:0 }
      ]
    },
    {
      id:"r2a-A2-06",
      title:"The Rainy Forest",
      text:"There is a small forest near my town. After the rain it smells fresh and clean. The trees are tall and the ground is soft and brown. I often walk there with my dog Max. We see birds, squirrels and sometimes a rabbit. Max runs after the leaves but he never catches them. In autumn the trees turn red and yellow. I bring a bag and pick up any rubbish I find. I want the forest to stay beautiful.",
      questions:[
        { q:"Where is the forest?", options:["Near the town","In the city","By the sea"], answer:0 },
        { q:"What is the writer's dog called?", options:["Max","Rex","Spot"], answer:0 },
        { q:"What does Max run after?", options:["The leaves","The birds","The rabbit"], answer:0 },
        { q:"Why does the writer pick up rubbish?", options:["To keep the forest beautiful","To find money","To feed the animals"], answer:0 }
      ]
    },
    {
      id:"r2a-A2-07",
      title:"Learning to Swim",
      text:"This summer I learned to swim at the local pool. At first I was scared of the deep water. My coach was kind and very patient. She showed me how to move my arms and breathe. Every day I practised for one hour. Slowly I became braver and stronger. Now I can swim from one side to the other without stopping. Next year I want to join the school swimming team. I am proud of myself.",
      questions:[
        { q:"Where did the writer learn to swim?", options:["The local pool","The sea","A river"], answer:0 },
        { q:"How did the writer feel at first?", options:["Scared","Bored","Angry"], answer:0 },
        { q:"How long did the writer practise each day?", options:["One hour","Three hours","Ten minutes"], answer:0 },
        { q:"What does the writer want to do next year?", options:["Join the swimming team","Stop swimming","Learn to dive only"], answer:0 }
      ]
    },
    {
      id:"r2a-A2-08",
      title:"The City Market",
      text:"Near my home there is a big market on Saturdays. People sell fruit, cheese, bread and clothes. The market is loud and full of colours. My favourite stall sells fresh oranges and apples. The seller always gives me a free piece to try. I also like to watch the man who plays guitar in the corner. My mum buys vegetables and we carry the heavy bags home. The market is a fun place to visit with family.",
      questions:[
        { q:"When is the market open?", options:["On Saturdays","On Mondays","Every day"], answer:0 },
        { q:"What does the writer's favourite stall sell?", options:["Oranges and apples","Cheese and bread","Shoes and hats"], answer:0 },
        { q:"What does the seller give the writer?", options:["A free piece to try","A free bag","Some money"], answer:0 },
        { q:"Who plays guitar at the market?", options:["A man in the corner","The seller","The writer"], answer:0 }
      ]
    }
  ]);

  P("reading","B1",[
    {
      id:"r2a-B1-01",
      title:"The Class Trip to the Mountains",
      text:"Last month our whole class went on a three day trip to the mountains. We stayed in a wooden cabin without any internet, which felt strange at first. During the day we walked along narrow paths and learned the names of plants and birds from our guide. In the evenings we sat around a fire and shared stories. One night we even saw shooting stars, and everyone became quiet. The trip taught me that I do not need a phone to enjoy myself. Being outside with my friends was more fun than any video game. When we returned home, I felt tired but very happy, and I already want to go back.",
      questions:[
        { q:"How long was the trip?", options:["Three days","One day","A week"], answer:0 },
        { q:"Why did the cabin feel strange at first?", options:["It had no internet","It was very small","It was very cold"], answer:0 },
        { q:"What did they do in the evenings?", options:["Sat around a fire and shared stories","Watched television","Played video games"], answer:0 },
        { q:"What did the trip teach the writer?", options:["A phone is not needed to have fun","Mountains are dangerous","Friends are boring"], answer:0 }
      ]
    },
    {
      id:"r2a-B1-02",
      title:"How Bees Help the World",
      text:"Many people are afraid of bees because they can sting, but bees are actually very important for our planet. As they move from flower to flower to collect food, they carry tiny grains called pollen. This process helps plants make fruit and seeds. Without bees, many of the fruits and vegetables we eat would disappear. Sadly, the number of bees is falling in many countries because of chemicals and the loss of wild flowers. Some students at my school have built small hotels for wild bees in our garden. We also plant flowers that bees love. Small actions like these can make a real difference for nature.",
      questions:[
        { q:"Why are bees important?", options:["They help plants make fruit and seeds","They make honey only","They eat harmful insects"], answer:0 },
        { q:"What are the tiny grains called?", options:["Pollen","Sugar","Sand"], answer:0 },
        { q:"Why is the number of bees falling?", options:["Chemicals and loss of wild flowers","Too much rain","Too many people"], answer:0 },
        { q:"What did the students build?", options:["Hotels for wild bees","A new garden wall","Bird houses"], answer:0 }
      ]
    },
    {
      id:"r2a-B1-03",
      title:"The Boy Who Fixed Phones",
      text:"Daniel was fourteen when he started fixing broken phones in his bedroom. He learned everything from free videos on the internet and practised on old devices that people threw away. At first his repairs did not always work, but he never gave up. Soon his neighbours began bringing him their cracked screens and dead batteries. Daniel charged a small fee and saved the money in a jar. After a year he had enough to buy proper tools and even a small workbench. His parents were surprised by how serious he had become. Daniel now dreams of opening his own repair shop one day and teaching other young people his skills.",
      questions:[
        { q:"How did Daniel learn to fix phones?", options:["From free videos online","From a school course","From his father"], answer:0 },
        { q:"What did Daniel do with the money?", options:["Saved it in a jar","Spent it on games","Gave it to friends"], answer:0 },
        { q:"What did he buy after a year?", options:["Proper tools and a workbench","A new phone","A car"], answer:0 },
        { q:"What is Daniel's dream?", options:["To open his own repair shop","To become a teacher","To travel the world"], answer:0 }
      ]
    },
    {
      id:"r2a-B1-04",
      title:"Life in a Big City",
      text:"Moving from a small village to a large city was a big change for my family. At first the noise and the crowds made me nervous, and I missed the quiet fields of my old home. But over time I discovered many good things about city life. There are libraries, museums and parks within walking distance, and the buses run late into the night. I also met people from many different countries at my new school. Of course, the city is not perfect, as the air is sometimes dirty and the streets are busy. Yet I have learned to enjoy the energy around me, and now I feel that this place is truly my home.",
      questions:[
        { q:"Where did the family move from?", options:["A small village","Another city","Another country"], answer:0 },
        { q:"What made the writer nervous at first?", options:["The noise and crowds","The schools","The buses"], answer:0 },
        { q:"What good thing does the writer mention?", options:["Libraries, museums and parks nearby","Cheap food","Big houses"], answer:0 },
        { q:"What is one problem of the city?", options:["The air is sometimes dirty","There are no schools","It is too quiet"], answer:0 }
      ]
    },
    {
      id:"r2a-B1-05",
      title:"The History of Pizza",
      text:"Pizza is one of the most popular foods in the world, but it has a long and interesting history. It began in the Italian city of Naples, where poor people needed cheap meals they could eat quickly. They put simple toppings such as tomatoes and cheese on flat bread. For a long time rich people thought pizza was only food for the poor. Everything changed when a famous queen tried a pizza and loved it. After that, the dish became fashionable across Italy. When Italian families later moved to other countries, they brought their recipes with them. Today you can find pizza almost everywhere, with toppings that match the taste of each region.",
      questions:[
        { q:"Where did pizza begin?", options:["Naples in Italy","Rome in Italy","Paris in France"], answer:0 },
        { q:"Why did poor people eat pizza?", options:["It was cheap and quick","It was very healthy","It was a luxury food"], answer:0 },
        { q:"What changed people's opinion of pizza?", options:["A famous queen loved it","A new law","A big festival"], answer:0 },
        { q:"How did pizza spread to other countries?", options:["Italian families brought their recipes","Companies sold it online","Kings ordered it"], answer:0 }
      ]
    },
    {
      id:"r2a-B1-06",
      title:"The Girl Who Ran",
      text:"Maya had always been the slowest runner in her class, and the other children sometimes laughed when she came last. Instead of feeling sorry for herself, she decided to train every morning before school. She ran in the cold, in the rain and even when she felt tired. Her coach told her to focus on her own progress and not on the other runners. Month after month she grew faster and stronger. At the regional competition in spring, nobody expected much from her. To everyone's surprise, Maya finished in second place and won a silver medal. She learned that hard work matters far more than natural talent.",
      questions:[
        { q:"What was Maya at the start?", options:["The slowest runner","The fastest runner","The best student"], answer:0 },
        { q:"What did she decide to do?", options:["Train every morning","Give up running","Change schools"], answer:0 },
        { q:"What advice did her coach give?", options:["Focus on her own progress","Beat the others at all costs","Run only in good weather"], answer:0 },
        { q:"What did Maya win at the competition?", options:["A silver medal","A gold medal","Nothing"], answer:0 }
      ]
    },
    {
      id:"r2a-B1-07",
      title:"Saving Water at Home",
      text:"Clean water is something many of us take for granted, but in some parts of the world it is very hard to find. Even where water is easy to get, it is wise not to waste it, because cleaning and pumping water uses a lot of energy. There are many simple ways to save water at home. We can turn off the tap while brushing our teeth and take shorter showers. Fixing a dripping tap quickly can save many litres each week. In the garden, watering plants early in the morning means less water disappears into the warm air. If everyone makes small changes, together we can protect this precious resource.",
      questions:[
        { q:"Why should we not waste water even when it is easy to get?", options:["Cleaning and pumping it uses energy","It is very expensive","It tastes bad"], answer:0 },
        { q:"What can we do while brushing our teeth?", options:["Turn off the tap","Run the shower","Leave the tap on"], answer:0 },
        { q:"Why fix a dripping tap quickly?", options:["It saves many litres each week","It looks better","It is the law"], answer:0 },
        { q:"When is it best to water plants?", options:["Early in the morning","At midday","Late at night"], answer:0 }
      ]
    },
    {
      id:"r2a-B1-08",
      title:"A Surprise Friendship",
      text:"When a new student named Leo joined our class, most people ignored him because he was very shy and quiet. I noticed that he always sat alone at lunch, drawing strange creatures in a small notebook. One day I sat next to him and asked about his drawings. To my surprise, he had created a whole imaginary world with maps, cities and heroes. We started spending breaks together, and I helped him feel more comfortable with the other students. In return, he taught me how to draw and tell stories. Now Leo is one of my closest friends, and our class is much friendlier than before. Sometimes the best friendships begin with a simple question.",
      questions:[
        { q:"Why did people ignore Leo at first?", options:["He was shy and quiet","He was rude","He was much older"], answer:0 },
        { q:"What did Leo draw in his notebook?", options:["Strange creatures and an imaginary world","Real animals","His family"], answer:0 },
        { q:"What did Leo teach the writer?", options:["How to draw and tell stories","How to play football","How to cook"], answer:0 },
        { q:"What is the lesson of the story?", options:["Great friendships can start with a simple question","Never trust new students","Drawing is a waste of time"], answer:0 }
      ]
    }
  ]);
})();
