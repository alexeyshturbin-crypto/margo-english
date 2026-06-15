(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => {
    C[track] = C[track] || {};
    C[track][lvl] = C[track][lvl] || [];
    arr.forEach(x => C[track][lvl].push(x));
  };

  P("reading", "A2", [
    {
      id: "rd-A2-01",
      title: "My New School",
      text: "Last month I started at a new school. At first I was very nervous. I did not know anyone in my class. On the first day a boy named Tom said hello to me. He showed me the library and the gym. Now Tom is my best friend. We play football after lessons every day. I like my new school a lot.",
      questions: [
        { q: "How did the writer feel on the first day?", options: ["Happy and calm", "Very nervous", "Angry"], answer: 1 },
        { q: "Who said hello to the writer?", options: ["A teacher", "A boy named Tom", "A girl named Anna"], answer: 1 },
        { q: "What did Tom show the writer?", options: ["The library and the gym", "The town", "His house"], answer: 0 },
        { q: "What do they do after lessons?", options: ["Read books", "Play football", "Go home alone"], answer: 1 }
      ]
    },
    {
      id: "rd-A2-02",
      title: "A Rainy Saturday",
      text: "It was Saturday and the rain did not stop. My sister and I wanted to go to the park, but we could not. So we stayed at home. We made a big cake with our mother. The kitchen smelled wonderful. Later we watched a funny film together. The rain was still falling, but we did not mind. It was a good day after all.",
      questions: [
        { q: "Why could they not go to the park?", options: ["It was too cold", "It was raining", "They were tired"], answer: 1 },
        { q: "What did they make with their mother?", options: ["A cake", "Soup", "Bread"], answer: 0 },
        { q: "What did they watch later?", options: ["A football game", "A funny film", "The news"], answer: 1 },
        { q: "How did they feel about the day?", options: ["It was good", "It was boring", "It was sad"], answer: 0 }
      ]
    },
    {
      id: "rd-A2-03",
      title: "The Lost Cat",
      text: "Yesterday my cat Mia ran out of the house. I looked for her in the garden, but she was not there. I asked my neighbour, but she did not see Mia. I was very worried. In the evening I heard a small sound near the door. It was Mia! She was wet and hungry. I gave her food and warm milk. I was so happy to see her again.",
      questions: [
        { q: "What is the name of the cat?", options: ["Mia", "Bella", "Luna"], answer: 0 },
        { q: "Where did the writer look first?", options: ["In the kitchen", "In the garden", "At school"], answer: 1 },
        { q: "How did the writer feel when the cat was gone?", options: ["Worried", "Calm", "Angry"], answer: 0 },
        { q: "What did the writer give the cat?", options: ["Toys", "Food and warm milk", "A bath only"], answer: 1 }
      ]
    },
    {
      id: "rd-A2-04",
      title: "A Trip to the Mountains",
      text: "In the summer my family went to the mountains. The air was clean and cool. We walked on a long path through the trees. My father took many photos of the birds. At the top of the hill we could see the whole valley. It was beautiful. We had a picnic with sandwiches and apples. I will never forget that day.",
      questions: [
        { q: "When did the family go to the mountains?", options: ["In winter", "In the summer", "In spring"], answer: 1 },
        { q: "What did the father take photos of?", options: ["Cars", "The birds", "People"], answer: 1 },
        { q: "What could they see at the top?", options: ["The sea", "The whole valley", "The city"], answer: 1 },
        { q: "What did they eat at the picnic?", options: ["Pizza", "Sandwiches and apples", "Soup"], answer: 1 }
      ]
    },
    {
      id: "rd-A2-05",
      title: "My Favourite Hobby",
      text: "I love drawing. Every evening I take my pencils and draw something new. Sometimes I draw animals, and sometimes I draw my friends. My room is full of pictures on the walls. My grandmother says my drawings are very nice. Last week my teacher put my picture on the school wall. I felt very proud. One day I want to be a real artist.",
      questions: [
        { q: "What is the writer's favourite hobby?", options: ["Drawing", "Singing", "Running"], answer: 0 },
        { q: "When does the writer draw?", options: ["Every morning", "Every evening", "Only on Sundays"], answer: 1 },
        { q: "Where did the teacher put the picture?", options: ["On the school wall", "In a book", "On the door"], answer: 0 },
        { q: "What does the writer want to be?", options: ["A teacher", "A real artist", "A doctor"], answer: 1 }
      ]
    },
    {
      id: "rd-A2-06",
      title: "The Busy Market",
      text: "On Sunday morning my mother and I go to the market. It is always full of people. We buy fresh fruit and vegetables there. The colours are bright and the smell is nice. My mother talks to the sellers, and they are very friendly. I always get one sweet apple for myself. The market is my favourite place on Sundays.",
      questions: [
        { q: "When do they go to the market?", options: ["Sunday morning", "Friday evening", "Monday afternoon"], answer: 0 },
        { q: "What do they buy there?", options: ["Books", "Fresh fruit and vegetables", "Clothes"], answer: 1 },
        { q: "How are the sellers?", options: ["Rude", "Very friendly", "Tired"], answer: 1 },
        { q: "What does the writer always get?", options: ["A sweet apple", "A toy", "Bread"], answer: 0 }
      ]
    }
  ]);

  P("reading", "B1", [
    {
      id: "rd-B1-01",
      title: "Learning to Code",
      text: "When my older brother gave me his old laptop, I had no idea what to do with it. Then a friend showed me a website where you can learn to write computer programs for free. At first the lessons were difficult, and I made many mistakes. But slowly I started to understand how it works. Last week I built a small game where a character jumps over walls. It is not perfect, but it actually works. My friends were surprised when I showed them. Now I spend an hour every day learning something new about coding.",
      questions: [
        { q: "How did the writer get a laptop?", options: ["He bought it", "His brother gave him an old one", "He won it"], answer: 1 },
        { q: "How were the lessons at first?", options: ["Easy", "Difficult", "Boring"], answer: 1 },
        { q: "What did the writer build last week?", options: ["A website", "A small game", "A robot"], answer: 1 },
        { q: "How much time does the writer spend coding now?", options: ["An hour every day", "Once a week", "Five hours a day"], answer: 0 }
      ]
    },
    {
      id: "rd-B1-02",
      title: "The School Garden Project",
      text: "This year our class decided to start a garden behind the school. The idea came from our science teacher, who wanted us to learn where food comes from. At the beginning, the soil was hard and full of stones. We worked together to clean it and add good earth. Then we planted tomatoes, carrots and herbs. We took turns watering the plants every morning. After two months, we picked our first vegetables and cooked a simple salad. Everyone agreed that food tastes better when you grow it yourself.",
      questions: [
        { q: "Who suggested the garden project?", options: ["The students alone", "The science teacher", "The school director"], answer: 1 },
        { q: "What was the soil like at first?", options: ["Soft and rich", "Hard and full of stones", "Wet and muddy"], answer: 1 },
        { q: "How often did they water the plants?", options: ["Every morning", "Once a week", "Only when it was hot"], answer: 0 },
        { q: "What did the students learn from the project?", options: ["Food tastes better when you grow it", "Gardens need no water", "Vegetables are cheap"], answer: 0 }
      ]
    },
    {
      id: "rd-B1-03",
      title: "A Letter from a Friend",
      text: "Two years ago my best friend Daniel moved to another country with his family. We were both sad, because we had spent every summer together. At first I thought we would lose contact, but I was wrong. We write long emails to each other every week. He tells me about his new city, his school and the strange food he tries. I tell him about everything that happens here. Last month he sent me a real letter on paper, with a photo of his street. Even far away, a good friendship can stay strong.",
      questions: [
        { q: "Why did Daniel leave?", options: ["He changed schools", "His family moved to another country", "He went to university"], answer: 1 },
        { q: "How do the friends stay in contact?", options: ["By phone calls", "By writing emails every week", "They do not"], answer: 1 },
        { q: "What did Daniel send last month?", options: ["A gift box", "A real letter with a photo", "A book"], answer: 1 },
        { q: "What is the main idea of the text?", options: ["Friendship can stay strong from far away", "Moving is always easy", "Emails are boring"], answer: 0 }
      ]
    },
    {
      id: "rd-B1-04",
      title: "The Night Sky",
      text: "Last weekend my uncle took me to the countryside to watch the stars. In the city, the lights are so bright that you can hardly see them. But far from the streetlights, the sky was full of thousands of tiny points of light. My uncle showed me how to find the North Star and a few famous shapes made by the stars. He explained that some of the light we see started its journey many years ago. I felt very small but also very lucky. Now I want to learn more about space and the planets.",
      questions: [
        { q: "Why can't you see many stars in the city?", options: ["The sky is always cloudy", "The lights are too bright", "There are no stars there"], answer: 1 },
        { q: "What did the uncle show the writer?", options: ["How to find the North Star", "How to use a telescope", "How to take photos"], answer: 0 },
        { q: "What surprising fact did the uncle explain?", options: ["Stars are very small", "Some starlight began long ago", "Planets are made of gas"], answer: 1 },
        { q: "How did the experience make the writer feel?", options: ["Bored", "Small but lucky", "Afraid"], answer: 1 }
      ]
    },
    {
      id: "rd-B1-05",
      title: "Saying No to Plastic",
      text: "In our town, the beach used to be covered with plastic bottles and bags after every weekend. A group of students from my school decided that something had to change. They organised a clean-up day and invited everyone to help. More than fifty people came with gloves and bags. In a few hours, they collected enough rubbish to fill a small truck. After that, many local shops agreed to use paper bags instead of plastic. The beach is much cleaner now, and people feel proud of what they did together.",
      questions: [
        { q: "What was the problem with the beach?", options: ["It was too crowded", "It was covered with plastic", "The water was cold"], answer: 1 },
        { q: "Who organised the clean-up day?", options: ["The town mayor", "A group of students", "A tourist company"], answer: 1 },
        { q: "How much rubbish did they collect?", options: ["A few bags", "Enough to fill a small truck", "Almost nothing"], answer: 1 },
        { q: "What did local shops agree to do?", options: ["Close on weekends", "Use paper bags instead of plastic", "Sell cheaper food"], answer: 1 }
      ]
    },
    {
      id: "rd-B1-06",
      title: "The First Race",
      text: "I had never run a long race before, but my coach believed I could do it. For three months I trained early every morning, even when it was cold and dark. On the day of the race, my legs felt heavy and my heart was beating fast. Halfway through, I wanted to stop, but I remembered all the hard work. I kept going, step by step. When I finally crossed the finish line, I did not come first, but I was not last either. The feeling of finishing was better than any medal.",
      questions: [
        { q: "How long did the writer train?", options: ["One week", "Three months", "One year"], answer: 1 },
        { q: "How did the writer feel halfway through the race?", options: ["Strong and fast", "Like stopping", "Very happy"], answer: 1 },
        { q: "What position did the writer finish in?", options: ["First", "Last", "Somewhere in the middle"], answer: 2 },
        { q: "What was the best feeling for the writer?", options: ["Winning a medal", "Finishing the race", "Beating a friend"], answer: 1 }
      ]
    }
  ]);

  P("reading", "B2", [
    {
      id: "rd-B2-01",
      title: "The Power of Sleep",
      text: "Many teenagers believe that staying up late to study or scroll through their phones has no real cost. In fact, scientists have discovered that sleep does far more than simply rest the body. During the deepest stages of sleep, the brain organises everything we learned during the day, moving important information into long-term memory. People who sleep too little often struggle to concentrate, remember facts, and control their emotions. Studies have shown that students who get enough rest tend to perform better in exams than those who sacrifice sleep for extra study. The lesson is clear: a good night of sleep is not a waste of time, but one of the smartest things a student can do.",
      questions: [
        { q: "What does the brain do during deep sleep?", options: ["Nothing useful", "Organises and stores what we learned", "Forgets the whole day"], answer: 1 },
        { q: "What problem do people who sleep too little often have?", options: ["They eat too much", "They struggle to concentrate", "They grow too fast"], answer: 1 },
        { q: "What do studies say about well-rested students?", options: ["They perform better in exams", "They study less than others", "They forget more"], answer: 0 },
        { q: "What is the main message of the text?", options: ["Studying late is best", "Sleep is a smart choice, not a waste", "Phones improve memory"], answer: 1 }
      ]
    },
    {
      id: "rd-B2-02",
      title: "The City That Floats",
      text: "Venice is one of the most unusual cities in the world. Instead of ordinary streets, it has a network of canals where boats replace cars. The city was built many centuries ago on a group of small islands, and its beautiful buildings rest on millions of wooden poles driven deep into the mud. For tourists, it is a place of romance and history, but for the people who live there, life can be challenging. Rising sea levels mean that floods are becoming more common, sometimes covering the famous squares with water. Engineers have built huge gates to protect the city, yet many wonder how long this remarkable place can survive against the power of the sea.",
      questions: [
        { q: "What replaces cars in Venice?", options: ["Bicycles", "Boats", "Trains"], answer: 1 },
        { q: "What are the buildings built on?", options: ["Solid rock", "Millions of wooden poles", "Metal frames"], answer: 1 },
        { q: "Why is life challenging for residents?", options: ["Floods are becoming more common", "There are too many cars", "The weather is always cold"], answer: 0 },
        { q: "What have engineers built to protect the city?", options: ["Tall walls around houses", "Huge gates", "New islands"], answer: 1 }
      ]
    },
    {
      id: "rd-B2-03",
      title: "A Robot in the Classroom",
      text: "At a school in Japan, students recently welcomed an unusual new helper: a small robot designed to assist with language learning. Unlike a human teacher, the robot never grows tired and is happy to repeat the same word a hundred times without complaint. Shy students, who are often afraid of making mistakes in front of their classmates, find it easier to practise speaking with a patient machine. However, teachers are quick to point out that the robot cannot replace them. It does not understand jokes, cannot comfort a worried child, and knows nothing about the lives of the students. The best results, they argue, come when technology and human teachers work side by side rather than in competition.",
      questions: [
        { q: "What is the robot designed to help with?", options: ["Cleaning the school", "Language learning", "Sports lessons"], answer: 1 },
        { q: "Why do shy students like the robot?", options: ["It gives them sweets", "They feel less afraid of mistakes", "It does their homework"], answer: 1 },
        { q: "What can the robot NOT do?", options: ["Repeat words", "Understand jokes or comfort children", "Speak the language"], answer: 1 },
        { q: "What do teachers believe gives the best results?", options: ["Replacing teachers with robots", "Technology and teachers working together", "Removing all technology"], answer: 1 }
      ]
    },
    {
      id: "rd-B2-04",
      title: "The Disappearing Bees",
      text: "Bees may be small, but they play an enormous role in keeping our planet healthy. As they move from flower to flower collecting food, they carry pollen that allows plants to produce fruit and seeds. Without this process, many of the foods we enjoy every day, from apples to almonds, would become rare and expensive. Sadly, bee populations around the world have been falling for years. Scientists blame a mix of causes, including the loss of wild flowers, the use of strong chemicals on farms, and changes in the climate. Some communities have started planting bee-friendly gardens and reducing harmful sprays. These small actions, repeated by millions of people, could make a real difference.",
      questions: [
        { q: "Why are bees important for plants?", options: ["They eat harmful insects", "They carry pollen between flowers", "They keep the soil warm"], answer: 1 },
        { q: "What would happen without bees?", options: ["Many foods would become rare", "Plants would grow faster", "Nothing would change"], answer: 0 },
        { q: "What is one cause of falling bee populations?", options: ["Too many wild flowers", "Strong chemicals on farms", "Cold winters only"], answer: 1 },
        { q: "What have some communities started doing?", options: ["Planting bee-friendly gardens", "Removing all flowers", "Building more farms"], answer: 0 }
      ]
    },
    {
      id: "rd-B2-05",
      title: "The Language of Silence",
      text: "Communication is not only about the words we speak. A large part of what we tell others happens through body language, the silent signals we send with our faces, hands and posture. A genuine smile, a slight frown, or the way someone crosses their arms can reveal feelings that words try to hide. Interestingly, some gestures mean very different things in different cultures. A sign that is friendly in one country may be rude in another, which can lead to confusion among travellers. Experts who study human behaviour say that learning to read these silent messages can make us better friends, students and leaders, because it helps us understand what people truly feel.",
      questions: [
        { q: "What is body language?", options: ["A spoken foreign language", "Silent signals from faces, hands and posture", "A type of dance"], answer: 1 },
        { q: "What can a genuine smile or frown reveal?", options: ["Nothing important", "Feelings that words hide", "A person's age"], answer: 1 },
        { q: "Why can gestures cause confusion among travellers?", options: ["They mean different things in different cultures", "They are always rude", "Nobody uses them"], answer: 0 },
        { q: "According to experts, why is reading body language useful?", options: ["It helps us understand what people feel", "It replaces speaking", "It is needed only by actors"], answer: 0 }
      ]
    },
    {
      id: "rd-B2-06",
      title: "Music and the Brain",
      text: "Most people listen to music simply because they enjoy it, but researchers have discovered that music affects the brain in surprising ways. Listening to a favourite song can release chemicals that make us feel happy, the very same ones produced when we eat delicious food. Learning to play an instrument goes even further, because it forces different parts of the brain to work together at the same time. Children who study music often show improvements in memory and concentration, and these benefits can last for years. Music also brings people together, whether at a huge concert or around a single guitar at a party. In many ways, it is one of the most powerful tools we have for both the mind and the heart.",
      questions: [
        { q: "What happens when we hear a favourite song?", options: ["The brain releases happy chemicals", "We become tired", "The brain stops working"], answer: 0 },
        { q: "Why is playing an instrument special?", options: ["It is very easy", "It makes parts of the brain work together", "It requires no practice"], answer: 1 },
        { q: "What benefits do children who study music often show?", options: ["Better memory and concentration", "Worse grades", "Less interest in school"], answer: 0 },
        { q: "What social effect of music is mentioned?", options: ["It separates people", "It brings people together", "It makes people quiet"], answer: 1 }
      ]
    }
  ]);

  P("reading", "C1", [
    {
      id: "rd-C1-01",
      title: "The Hidden Cost of Fast Fashion",
      text: "Walk into almost any shopping centre today and you will find clothes that are astonishingly cheap, designed to be worn a handful of times before being thrown away. This business model, often called fast fashion, has transformed the way young people dress, allowing them to follow the latest trends without spending much money. Yet behind the low prices lies a troubling reality. Producing these garments consumes vast amounts of water and energy, while the factories that make them are frequently located in countries where workers earn very little and labour under difficult conditions. Once discarded, the clothing often ends up in enormous landfills, where synthetic fabrics can take decades to break down. A growing number of consumers, however, are beginning to question the true price of their wardrobes. Some choose to buy fewer but better-made items, while others give a second life to old clothes through repair and exchange. These choices, though small, suggest that fashion need not come at such a heavy cost to the planet.",
      questions: [
        { q: "What is the main appeal of fast fashion for young people?", options: ["Following trends cheaply", "High quality materials", "Long-lasting clothes"], answer: 0 },
        { q: "What environmental problem is mentioned in production?", options: ["It uses very little water", "It consumes vast water and energy", "It creates no waste"], answer: 1 },
        { q: "What happens to much of the discarded clothing?", options: ["It is recycled instantly", "It ends up in landfills for decades", "It is sent back to factories"], answer: 1 },
        { q: "How are some consumers responding?", options: ["By buying even more clothes", "By buying fewer, better items and reusing", "By ignoring the issue"], answer: 1 }
      ]
    },
    {
      id: "rd-C1-02",
      title: "When Machines Learn to Create",
      text: "For most of history, creativity was considered something uniquely human, a spark that separated us from machines. That assumption is now being challenged. Modern computer systems can compose music, write poetry, and produce images that many people cannot distinguish from human work. These programs do not think or feel; instead, they analyse millions of existing examples and detect patterns that allow them to generate something new. Supporters argue that such tools could democratise creativity, giving everyone access to powers once reserved for trained artists. Critics, however, worry that flooding the world with machine-made content could devalue genuine human expression and even threaten the livelihoods of working creators. Perhaps the most interesting question is not whether machines can be creative, but what their abilities reveal about the nature of human imagination itself. As the boundary between human and artificial work grows blurred, society will need to decide what it truly values in art.",
      questions: [
        { q: "What was creativity traditionally considered?", options: ["A skill only machines had", "Something uniquely human", "Unimportant"], answer: 1 },
        { q: "How do these computer programs create new work?", options: ["They feel emotions", "They analyse patterns in many examples", "They copy one artist exactly"], answer: 1 },
        { q: "What do critics worry about?", options: ["Machines being too slow", "Devaluing human expression and creators' jobs", "Art becoming too expensive"], answer: 1 },
        { q: "What does the author call the most interesting question?", options: ["Whether machines are fast", "What machine ability reveals about human imagination", "How to sell the art"], answer: 1 }
      ]
    },
    {
      id: "rd-C1-03",
      title: "The Explorer Who Mapped the Ocean Floor",
      text: "When Marie Tharp began her career, the deep ocean floor was one of the least understood places on Earth, often imagined as a flat and featureless plain. Working in the middle of the twentieth century, she faced a serious obstacle: at the time, women were not allowed on the research ships that collected data at sea. Instead, she sat for years in a laboratory, carefully turning thousands of measurements into detailed maps. Her work revealed something extraordinary, a vast mountain range running along the bottom of the Atlantic, split by a deep valley. This discovery offered powerful evidence for the theory that the continents slowly drift across the globe, an idea many scientists had stubbornly rejected. For a long time, her contribution was overlooked, partly because of the prejudices of her era. Today, she is celebrated as one of the figures who fundamentally changed our understanding of the planet beneath the waves.",
      questions: [
        { q: "How was the ocean floor imagined before Tharp's work?", options: ["Full of mountains", "Flat and featureless", "Covered in cities"], answer: 1 },
        { q: "What obstacle did Tharp face in her career?", options: ["She had no education", "Women were not allowed on research ships", "There was no data"], answer: 1 },
        { q: "What did her maps reveal?", options: ["A flat plain", "A vast underwater mountain range", "A frozen sea"], answer: 1 },
        { q: "Why was her contribution overlooked for a long time?", options: ["Her maps were wrong", "Partly because of prejudices of her era", "Nobody cared about oceans"], answer: 1 }
      ]
    },
    {
      id: "rd-C1-04",
      title: "The Quiet Revolution of Remote Work",
      text: "Only a few years ago, the idea that millions of people might work from their kitchens and bedrooms would have seemed unrealistic to most employers. Today, remote work has become an ordinary feature of professional life, reshaping not only how we work but where we choose to live. Freed from the daily commute, some workers have moved away from crowded and expensive cities to quieter towns, breathing new life into communities that had been losing their young people for decades. The benefits, however, are not shared equally. Jobs that depend on physical presence, such as nursing or construction, cannot be done from a distance, which has deepened the divide between different kinds of workers. Companies, meanwhile, struggle to maintain a sense of teamwork when colleagues rarely meet in person. As the dust settles, it is becoming clear that the future will probably not be entirely remote or entirely in the office, but some careful blend of the two.",
      questions: [
        { q: "How has remote work affected where people live?", options: ["Everyone moved to big cities", "Some moved to quieter, cheaper towns", "Nobody changed location"], answer: 1 },
        { q: "What benefit for small communities is mentioned?", options: ["They lost more young people", "They gained new life", "They became more expensive only"], answer: 1 },
        { q: "Why are the benefits not shared equally?", options: ["Some jobs need physical presence", "Remote work is illegal", "Everyone earns the same"], answer: 0 },
        { q: "What does the author predict for the future of work?", options: ["Entirely remote", "Entirely in the office", "A blend of both"], answer: 2 }
      ]
    },
    {
      id: "rd-C1-05",
      title: "The Memory of Trees",
      text: "Beneath the floor of a healthy forest lies a hidden network that scientists are only beginning to understand. Trees, it turns out, are far from the silent and solitary giants we once imagined. Through their roots and the threads of fungi that connect them, they share water, nutrients and even chemical warnings of danger. When insects attack one tree, it can send signals that prompt its neighbours to strengthen their defences before the threat arrives. Older trees, sometimes called mother trees, appear to recognise their own offspring and direct extra resources towards them. This research has challenged the old view of the forest as a simple collection of plants competing for sunlight. Instead, a forest begins to look like a cooperative community, bound together by countless invisible links. Such findings remind us how much remains to be discovered in the natural world, and how the things we cannot see may matter most of all.",
      questions: [
        { q: "What hidden network connects trees?", options: ["Electric cables", "Roots and threads of fungi", "Underground rivers"], answer: 1 },
        { q: "What can a tree do when insects attack it?", options: ["Move away", "Send warning signals to neighbours", "Fall down on purpose"], answer: 1 },
        { q: "What do older 'mother trees' appear to do?", options: ["Ignore other trees", "Direct extra resources to their offspring", "Steal water from neighbours"], answer: 1 },
        { q: "How does this research change our view of forests?", options: ["As simple competing plants", "As a cooperative community", "As lifeless places"], answer: 1 }
      ]
    },
    {
      id: "rd-C1-06",
      title: "The Art of Failing Well",
      text: "From an early age, students are taught to fear failure, to see a poor mark or a missed goal as something shameful to be hidden away. Yet a growing body of research suggests that this attitude may do more harm than good. The most successful inventors, athletes and scientists are rarely those who never stumble; rather, they are people who have learned to treat each setback as valuable information. When a famous laboratory celebrates its failed experiments alongside its triumphs, it sends a powerful message: that mistakes are not the opposite of progress but an essential part of it. Of course, this does not mean that failure is pleasant or that all failures are equal. The point is to develop the resilience to recover, to ask honestly what went wrong, and to try again with greater wisdom. Schools that reward intelligent risk-taking, rather than punishing every error, may well produce the bold thinkers our complex world increasingly demands.",
      questions: [
        { q: "What attitude towards failure are students often taught?", options: ["To fear and hide it", "To celebrate it loudly", "To ignore success"], answer: 0 },
        { q: "How do successful people tend to treat setbacks?", options: ["As shameful secrets", "As valuable information", "As reasons to quit"], answer: 1 },
        { q: "What message does a lab celebrating failures send?", options: ["Mistakes are part of progress", "Mistakes never matter", "Only success counts"], answer: 0 },
        { q: "What kind of schools might produce bold thinkers?", options: ["Those that punish every error", "Those that reward intelligent risk-taking", "Those that forbid experiments"], answer: 1 }
      ]
    }
  ]);

  P("reading", "C2", [
    {
      id: "rd-C2-01",
      title: "The Paradox of Choice",
      text: "It seems self-evident that having more options must always be better, and for much of the modern era this belief has driven the relentless expansion of consumer choice. A supermarket that once stocked a single variety of jam now offers dozens; a person seeking entertainment can choose from a virtually infinite library of films and songs. Yet psychologists have uncovered a curious and counterintuitive phenomenon. Beyond a certain point, an abundance of options does not liberate us but paralyses us, leaving many people anxious, dissatisfied, and prone to regret whatever they eventually select. Confronted with too many possibilities, we tend to imagine all the superior alternatives we might have chosen, poisoning our enjoyment of a perfectly good decision. This insight carries implications far beyond shopping aisles. It suggests that genuine freedom may depend less on the sheer quantity of choices available to us than on the cultivation of clear values that allow us to choose wisely, and the wisdom to recognise when enough is, in fact, enough.",
      questions: [
        { q: "What belief has driven the expansion of consumer choice?", options: ["That more options are always better", "That fewer options are simpler", "That choice is unimportant"], answer: 0 },
        { q: "What counterintuitive effect of too many options did psychologists find?", options: ["It always increases happiness", "It can paralyse and cause regret", "It speeds up decisions"], answer: 1 },
        { q: "Why does too much choice poison our enjoyment?", options: ["We imagine superior alternatives we missed", "We forget our choice", "The products are worse"], answer: 0 },
        { q: "What does the author suggest genuine freedom depends on?", options: ["The sheer quantity of choices", "Clear values and knowing when enough is enough", "Avoiding all decisions"], answer: 1 }
      ]
    },
    {
      id: "rd-C2-02",
      title: "The Fragility of Memory",
      text: "We tend to think of our memories as faithful recordings of the past, stored intact and retrieved unchanged whenever we summon them. The reality, as decades of research have demonstrated, is far stranger and more unsettling. Every time we recall an event, we do not simply play back a fixed recording; we actively reconstruct it, and in doing so we may unconsciously alter the very details we believe we are preserving. Suggestions from others, emotional states, and even the language used to describe an event can subtly reshape what we remember. In carefully designed experiments, people have been led to recall, with complete confidence, events that never occurred at all. The implications are profound and occasionally disquieting, particularly in legal settings where the testimony of confident eyewitnesses has long been treated as compelling evidence. Far from undermining the value of memory, however, this fragility may reflect its true purpose: not to archive the past with mechanical precision, but to help us navigate an uncertain future by drawing flexible lessons from experience.",
      questions: [
        { q: "How do most people think memory works?", options: ["As a faithful, unchanged recording", "As pure imagination", "As something we cannot access"], answer: 0 },
        { q: "What actually happens when we recall an event?", options: ["We reconstruct and may alter it", "We delete it", "We copy it perfectly"], answer: 0 },
        { q: "What did carefully designed experiments show?", options: ["Memory is always accurate", "People can confidently recall events that never happened", "People forget everything"], answer: 1 },
        { q: "What may be the true purpose of memory's flexibility?", options: ["To archive the past precisely", "To help us navigate the future", "To confuse us"], answer: 1 }
      ]
    },
    {
      id: "rd-C2-03",
      title: "Cities of the Future",
      text: "As an ever-growing share of humanity gathers in urban centres, the question of how to build sustainable, liveable cities has moved from the realm of speculation to one of urgent necessity. Visionary planners imagine metropolises woven through with greenery, where rooftops bloom with gardens and rainwater is captured rather than wasted. They envision transport systems so efficient and pleasant that private cars become an eccentric luxury rather than a daily necessity. Yet the most ambitious technological dreams must contend with stubborn human realities. A city is not merely a machine for living but a living organism of communities, histories and inequalities that cannot be redesigned at will. The danger is that gleaming new districts, conceived for the affluent, may simply displace the poor and erase the very diversity that gives a city its soul. The truly intelligent city of the future, then, will be measured not only by its sensors and solar panels, but by whether it manages to remain humane, inclusive, and accessible to all who call it home.",
      questions: [
        { q: "Why has building sustainable cities become urgent?", options: ["More of humanity lives in cities", "Cities are emptying out", "People dislike technology"], answer: 0 },
        { q: "What do visionary planners imagine?", options: ["Cities full of private cars", "Greenery, rooftop gardens and captured rainwater", "Cities with no people"], answer: 1 },
        { q: "What 'stubborn human reality' does the author mention?", options: ["A city is a living organism of communities", "Cities are simple machines", "People never change cities"], answer: 0 },
        { q: "By what should a truly intelligent city be measured?", options: ["Only by its sensors and panels", "Whether it stays humane and inclusive", "Its number of cars"], answer: 1 }
      ]
    },
    {
      id: "rd-C2-04",
      title: "The Vanishing Languages",
      text: "Every fortnight, somewhere in the world, the last fluent speaker of a language dies, and with that final breath an entire universe of thought slips quietly into silence. Linguists estimate that of the roughly seven thousand languages spoken today, nearly half may vanish before the century is out. To the casual observer, this might seem a matter of mere inconvenience, easily solved by everyone simply adopting one of the dominant global tongues. Such a view, however, profoundly misunderstands what a language is. Each one encodes a distinct way of perceiving reality, preserving knowledge of local plants, navigation, kinship and time that exists nowhere else. When a language dies, we lose not only words but irreplaceable insights into the breadth of human ingenuity. Efforts to document and revive endangered languages have therefore taken on a quiet urgency, driven by communities determined to reclaim their heritage. Their struggle reminds us that diversity of thought, like diversity of life, is a treasure whose value we may only fully appreciate once it is gone.",
      questions: [
        { q: "How often does the last speaker of a language die?", options: ["Every fortnight", "Once a year", "Every decade"], answer: 0 },
        { q: "Roughly how many languages may vanish this century?", options: ["Almost none", "Nearly half of about seven thousand", "All of them"], answer: 1 },
        { q: "Why is losing a language more than an inconvenience?", options: ["It encodes a distinct way of seeing reality", "It only affects tourists", "Languages are identical"], answer: 0 },
        { q: "What is driving efforts to revive endangered languages?", options: ["Governments wanting one global tongue", "Communities determined to reclaim heritage", "A wish to forget the past"], answer: 1 }
      ]
    },
    {
      id: "rd-C2-05",
      title: "The Ethics of the Algorithm",
      text: "Invisible yet pervasive, algorithms now shape an astonishing range of decisions that were once the exclusive province of human judgement. They determine which news articles appear before our eyes, who is offered a loan, and even which candidates are shortlisted for a job. Their appeal is obvious: a well-designed system can process information at a scale and speed no human could match, and its defenders promise a refreshing objectivity, free from the prejudices that cloud our own reasoning. Yet this promise conceals a subtle danger. An algorithm trained on historical data inevitably absorbs the biases embedded within it, lending the prejudices of the past an aura of mathematical impartiality that makes them all the harder to challenge. When such a system errs, moreover, it is often unclear who bears responsibility, or even how the decision was reached. As we entrust ever more of our collective life to these inscrutable systems, the pressing task is not to reject them outright, but to insist that they remain transparent, accountable, and ultimately subordinate to human values.",
      questions: [
        { q: "What kinds of decisions do algorithms now shape?", options: ["News, loans and job shortlists", "Only the weather", "Nothing important"], answer: 0 },
        { q: "What objectivity do defenders of algorithms promise?", options: ["Freedom from human prejudice", "Slower decisions", "Higher costs"], answer: 0 },
        { q: "What subtle danger does the author identify?", options: ["Algorithms are too slow", "They absorb biases from historical data", "They cannot process information"], answer: 1 },
        { q: "What does the author argue we should insist on?", options: ["Rejecting all algorithms", "Transparency, accountability and human values", "Removing all human judgement"], answer: 1 }
      ]
    },
    {
      id: "rd-C2-06",
      title: "The Solitude We Have Lost",
      text: "In an age of perpetual connectivity, the simple experience of being alone with one's own thoughts has become curiously rare, and perhaps quietly endangered. The moment a queue forms or a lull descends, most of us reach instinctively for a glowing screen, as though unstructured silence were a discomfort to be banished rather than a resource to be savoured. This reflex, harmless as it may appear, deserves closer scrutiny. Throughout history, thinkers, artists and ordinary people alike have credited solitude with the power to clarify the mind, to spark unexpected insight, and to cultivate a self that does not depend on the constant approval of others. Without occasional retreat from the chatter of the crowd, we may lose the capacity for the deep reflection from which genuine originality and emotional resilience spring. None of this is an argument against companionship, which remains among life's greatest goods. It is, rather, a plea to reclaim solitude not as loneliness, but as a deliberate and nourishing form of freedom, all too easily surrendered in the noise of the modern world.",
      questions: [
        { q: "What has become curiously rare in an age of connectivity?", options: ["Being alone with one's thoughts", "Talking to friends", "Using screens"], answer: 0 },
        { q: "What do most people do when a lull descends?", options: ["Reach for a glowing screen", "Sit in silence happily", "Start a conversation"], answer: 0 },
        { q: "What powers have thinkers credited to solitude?", options: ["Clarifying the mind and sparking insight", "Causing only sadness", "Replacing all friendship"], answer: 0 },
        { q: "What is the author's main plea?", options: ["To avoid all companionship", "To reclaim solitude as a nourishing freedom", "To use screens more often"], answer: 1 }
      ]
    }
  ]);
})();
