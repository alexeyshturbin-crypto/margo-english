(() => { const C = window.CONTENT || (window.CONTENT = {});
  const P = (track,lvl,arr)=>{C[track]=C[track]||{};C[track][lvl]=C[track][lvl]||[];arr.forEach(x=>C[track][lvl].push(x));};
  P("reading","A2",[
    {
      id: "r3-A2-01",
      title: "My New Bike",
      text: "Last Saturday my parents gave me a new bike for my birthday. It is blue and very fast. In the morning I rode it to the park with my friend Tom. We rode for two hours and then we ate sandwiches on the grass. The sun was warm and the sky was clear. On the way home I fell off the bike, but I was not hurt. It was the best day of the month. Now I ride my bike to school every day.",
      questions: [
        { q: "When did the boy get his bike?", options: ["On his birthday", "At school", "On a holiday"], answer: 0 },
        { q: "What colour is the bike?", options: ["Red", "Blue", "Green"], answer: 1 },
        { q: "What did they eat in the park?", options: ["Pizza", "Apples", "Sandwiches"], answer: 2 },
        { q: "What happened on the way home?", options: ["He fell off the bike", "He lost the bike", "He met Tom"], answer: 0 }
      ]
    },
    {
      id: "r3-A2-02",
      title: "A Letter to Grandma",
      text: "Dear Grandma, How are you? I miss you very much. School is good this year. My favourite subject is science because we do many experiments. Last week we grew a small plant in a cup. I water it every morning and it is getting bigger. Mum says we can visit you in summer. I want to swim in the lake near your house again. Please say hello to Grandpa. I hope to see you soon. With love, Anna.",
      questions: [
        { q: "Who is Anna writing to?", options: ["Her teacher", "Her grandma", "Her friend"], answer: 1 },
        { q: "What is Anna's favourite subject?", options: ["Science", "Maths", "English"], answer: 0 },
        { q: "What did Anna grow at school?", options: ["A flower", "A plant", "A tree"], answer: 1 },
        { q: "What does Anna want to do in summer?", options: ["Read books", "Play football", "Swim in the lake"], answer: 2 }
      ]
    },
    {
      id: "r3-A2-03",
      title: "Facts About Penguins",
      text: "Penguins are birds, but they cannot fly. They live in cold places like Antarctica. Penguins are very good swimmers and they catch fish in the sea. Their black and white feathers keep them warm in the cold water. Mother and father penguins take care of their babies together. The father often keeps the egg warm on his feet. Penguins live in big groups so they can stay safe and warm. People love to watch them walk because they look funny.",
      questions: [
        { q: "Can penguins fly?", options: ["Yes, very high", "No, they cannot", "Only at night"], answer: 1 },
        { q: "Where do penguins live?", options: ["In hot deserts", "In cold places", "In big cities"], answer: 1 },
        { q: "What do penguins eat?", options: ["Fish", "Grass", "Bread"], answer: 0 },
        { q: "Why do penguins live in big groups?", options: ["To play games", "To stay safe and warm", "To find a teacher"], answer: 1 }
      ]
    },
    {
      id: "r3-A2-04",
      title: "How to Make a Sandwich",
      text: "Making a sandwich is easy and fast. First, take two pieces of bread. Then put some butter on each piece. Next, add a slice of cheese and some ham in the middle. You can also put a little tomato or salad inside. After that, put the two pieces of bread together. Cut the sandwich in two with a knife. Now your sandwich is ready to eat. You can take it to school in a box for lunch. Enjoy your meal.",
      questions: [
        { q: "What do you take first?", options: ["A knife", "Two pieces of bread", "A box"], answer: 1 },
        { q: "What do you put on the bread?", options: ["Sugar", "Butter", "Water"], answer: 1 },
        { q: "What do you use to cut the sandwich?", options: ["A knife", "A spoon", "Your hands"], answer: 0 },
        { q: "Where can you take the sandwich?", options: ["To bed", "To school", "To the shop"], answer: 1 }
      ]
    },
    {
      id: "r3-A2-05",
      title: "The Lost Dog",
      text: "One rainy afternoon, Lucy saw a small dog under a tree. The dog was wet and cold and it looked sad. Lucy gave it some food and the dog ate quickly. She looked at the dog and saw a phone number on its collar. Lucy called the number and a woman answered. The woman was very happy because she had lost her dog two days before. She came to Lucy's house and thanked her. The dog was happy to see its owner again. Lucy felt very proud.",
      questions: [
        { q: "Where did Lucy find the dog?", options: ["Under a tree", "In a shop", "At school"], answer: 0 },
        { q: "How was the dog when Lucy found it?", options: ["Wet and cold", "Dry and warm", "Big and strong"], answer: 0 },
        { q: "How did Lucy find the owner?", options: ["She asked her mum", "A number on the collar", "She knew the woman"], answer: 1 },
        { q: "How did the woman feel at the end?", options: ["Angry", "Happy", "Tired"], answer: 1 }
      ]
    },
    {
      id: "r3-A2-06",
      title: "My Hobby",
      text: "My name is Max and my hobby is painting. I started painting when I was eight years old. Now I paint almost every weekend. I like to paint animals, the sky and the sea. My favourite colours are blue and yellow. Sometimes I paint with my older sister, who is very good at drawing faces. Last month my picture of a horse won a small prize at school. The teacher put it on the wall. I want to be an artist when I grow up.",
      questions: [
        { q: "What is Max's hobby?", options: ["Painting", "Football", "Reading"], answer: 0 },
        { q: "How old was Max when he started?", options: ["Six", "Eight", "Ten"], answer: 1 },
        { q: "What did his sister draw well?", options: ["Cars", "Houses", "Faces"], answer: 2 },
        { q: "What won a prize at school?", options: ["A picture of a horse", "A picture of the sea", "A picture of a dog"], answer: 0 }
      ]
    },
    {
      id: "r3-A2-07",
      title: "A Day at the Zoo",
      text: "On Sunday our class went to the zoo. We took a bus and arrived in the morning. First we saw the lions, who were sleeping in the sun. Then we walked to the monkeys. They were jumping and playing in the trees and we laughed a lot. After lunch we visited the elephants. One big elephant put water on its back to stay cool. At the end of the day we were tired but very happy. I want to go to the zoo again next year.",
      questions: [
        { q: "How did the class travel to the zoo?", options: ["By car", "By bus", "By train"], answer: 1 },
        { q: "What were the lions doing?", options: ["Eating", "Running", "Sleeping"], answer: 2 },
        { q: "Which animals made the class laugh?", options: ["Monkeys", "Elephants", "Lions"], answer: 0 },
        { q: "What did the elephant do to stay cool?", options: ["It ran fast", "It put water on its back", "It slept in the shade"], answer: 1 }
      ]
    },
    {
      id: "r3-A2-08",
      title: "The Magic Pencil",
      text: "Once upon a time there was a poor boy named Sam. One day he found an old pencil on the road. When he drew an apple, a real apple appeared on the table. Sam was very surprised. He drew bread and warm soup for his hungry family. But Sam was a kind boy, so he did not draw gold for himself. Instead he drew food and toys for poor children in his town. Everyone loved Sam, and he was happy because he helped many people.",
      questions: [
        { q: "What did Sam find on the road?", options: ["A pencil", "A book", "A coin"], answer: 0 },
        { q: "What happened when he drew an apple?", options: ["Nothing happened", "A real apple appeared", "The pencil broke"], answer: 1 },
        { q: "What did Sam draw for his family?", options: ["Gold", "Bread and soup", "A new house"], answer: 1 },
        { q: "Why did people love Sam?", options: ["He was rich", "He helped poor children", "He was strong"], answer: 1 }
      ]
    },
    {
      id: "r3-A2-09",
      title: "Notice: School Music Club",
      text: "Do you like music? Come and join the School Music Club. We meet every Wednesday after school in Room 12. You can learn to play the guitar, the piano or the drums. You do not need any experience to start. The club is free for all students. We also sing songs together and have a big concert in spring. Bring a friend if you want. If you have questions, please talk to Miss Green in the music room. We hope to see you soon.",
      questions: [
        { q: "When does the club meet?", options: ["Every Monday", "Every Wednesday", "Every Friday"], answer: 1 },
        { q: "What can you learn to play?", options: ["Guitar, piano or drums", "Only the piano", "Only the guitar"], answer: 0 },
        { q: "How much does the club cost?", options: ["It is free", "Ten dollars", "Five dollars"], answer: 0 },
        { q: "Who should you talk to with questions?", options: ["Miss Green", "The head teacher", "A friend"], answer: 0 }
      ]
    },
    {
      id: "r3-A2-10",
      title: "A Country Called Japan",
      text: "Japan is a country in Asia. It has many islands and a lot of mountains. The biggest mountain is called Mount Fuji and it is very famous. Many people in Japan live in big cities like Tokyo. The trains in Japan are very fast and always on time. People in Japan often eat rice and fish. In spring the cherry trees have pink flowers, and families go to the park to look at them. Many tourists visit Japan every year because it is beautiful.",
      questions: [
        { q: "Where is Japan?", options: ["In Europe", "In Asia", "In Africa"], answer: 1 },
        { q: "What is the famous mountain called?", options: ["Mount Fuji", "Mount Tokyo", "Mount Asia"], answer: 0 },
        { q: "What do people in Japan often eat?", options: ["Bread and meat", "Rice and fish", "Soup and cake"], answer: 1 },
        { q: "What happens in spring?", options: ["It snows a lot", "Cherry trees have flowers", "The trains stop"], answer: 1 }
      ]
    },
    {
      id: "r3-A2-11",
      title: "My Diary: A Busy Day",
      text: "Today was a very busy day. I woke up late and missed my breakfast. At school we had a big maths test, but I think I did well. After lunch we played basketball and my team won the game. In the afternoon I helped my mum carry the shopping home. In the evening I finished my homework and read a book about space. I learned that the moon has no air. Now I am tired and ready to sleep. Tomorrow will be a quieter day.",
      questions: [
        { q: "Why did the writer miss breakfast?", options: ["She woke up late", "She was not hungry", "There was no food"], answer: 0 },
        { q: "What did the team do in basketball?", options: ["They lost", "They won", "They did not play"], answer: 1 },
        { q: "What did the book teach the writer?", options: ["The sun is hot", "The moon has no air", "Stars are small"], answer: 1 },
        { q: "How does the writer feel at the end?", options: ["Hungry", "Tired", "Angry"], answer: 1 }
      ]
    },
    {
      id: "r3-A2-12",
      title: "The Old House by the Sea",
      text: "There is an old house on the hill by the sea. It is white with a blue door and small round windows. An old man named Captain Brown lives there alone with his cat. Every morning he walks to the beach and looks at the boats. He likes to tell children stories about the ocean and far countries. The garden around the house is full of bright flowers and tall trees. At night you can hear the waves and see the light from the window.",
      questions: [
        { q: "Where is the old house?", options: ["By the sea", "In the city", "Near a forest"], answer: 0 },
        { q: "What colour is the door?", options: ["Red", "Blue", "Green"], answer: 1 },
        { q: "Who lives in the house?", options: ["A young family", "Captain Brown and his cat", "Two children"], answer: 1 },
        { q: "What does the man do every morning?", options: ["He walks to the beach", "He goes to work", "He cleans the house"], answer: 0 }
      ]
    }
  ]);
})();
