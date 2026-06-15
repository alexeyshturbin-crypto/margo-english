(() => {
  const C = window.CONTENT || (window.CONTENT = {});
  const P = (track, lvl, arr) => { C[track]=C[track]||{}; C[track][lvl]=C[track][lvl]||[]; arr.forEach(x=>C[track][lvl].push(x)); };

  P("reading","B2",[
    {
      id:"r2b-B2-01",
      title:"The Quiet Power of Trees",
      text:"Cities around the world are rediscovering an ancient ally in their fight against rising temperatures: the ordinary street tree. For decades, urban planners treated trees mainly as decoration, something pleasant to look at but not essential. Recent research has changed that view dramatically. A mature tree can lower the air temperature beneath it by several degrees, partly through shade and partly through a process in which water evaporates from its leaves and cools the surrounding air. In neighbourhoods without trees, the difference can be striking, with summer streets becoming dangerously hot for elderly residents. Trees also absorb pollution, reduce flooding by soaking up rainwater, and improve the mental health of people who live nearby. Some cities now set ambitious targets, promising to plant millions of trees within a decade. Critics warn that planting is easy but caring for young trees is hard, and many die before reaching maturity. Still, the humble tree may prove to be one of the cheapest and most effective tools available to growing cities.",
      questions:[
        { q:"How do trees help cool the air, according to the text?", options:["Through shade and water evaporation from leaves","By blocking wind completely","By absorbing sunlight into their trunks"], answer:0 },
        { q:"How did urban planners traditionally view trees?", options:["As mainly decorative","As dangerous obstacles","As sources of income"], answer:0 },
        { q:"What concern do critics raise?", options:["Caring for young trees is difficult","Trees grow too quickly","Trees attract too many people"], answer:0 },
        { q:"What is the overall message of the passage?", options:["Trees are a cheap, effective tool for cities","Trees are mostly useless in cities","Cities should remove old trees"], answer:0 }
      ]
    },
    {
      id:"r2b-B2-02",
      title:"Why We Forget Dreams",
      text:"Almost everyone has woken from a vivid dream only to lose it within minutes. Scientists have long been puzzled by how quickly dream memories disappear, and several explanations have emerged. One theory points to a brain chemical that supports memory formation but drops to very low levels during the stage of sleep when most dreaming occurs. Without it, the brain struggles to store the strange events we experience. Another idea is that dreams are forgotten because we have no immediate reason to remember them. The waking brain prioritises information that seems useful, and a bizarre, disconnected dream rarely qualifies. There may also be a practical benefit to forgetting. If every dream were stored as clearly as a real memory, we might confuse imagined events with things that actually happened. Researchers note that people who write down their dreams the moment they wake tend to recall far more over time, suggesting that attention and habit play a major role. Dreaming, it seems, is easy, but remembering takes effort.",
      questions:[
        { q:"What happens to a key memory chemical during heavy dreaming?", options:["It drops to very low levels","It rises sharply","It disappears permanently"], answer:0 },
        { q:"Why might the waking brain ignore dreams?", options:["Dreams rarely seem useful","Dreams are too short","Dreams are always frightening"], answer:0 },
        { q:"What practical benefit of forgetting is mentioned?", options:["Avoiding confusion between dreams and reality","Saving physical energy","Improving eyesight"], answer:0 },
        { q:"What helps people recall more dreams over time?", options:["Writing them down immediately","Sleeping longer","Eating before bed"], answer:0 }
      ]
    },
    {
      id:"r2b-B2-03",
      title:"The Hidden Cost of Fast Fashion",
      text:"Cheap, fashionable clothing has never been easier to buy, but its low price hides a heavy cost. The modern clothing industry produces garments at astonishing speed, with some retailers releasing new designs every week. To keep prices down, much of this clothing is made from synthetic materials that are quick to manufacture but slow to break down. When these clothes are thrown away, often after only a few wears, they pile up in landfills where they may remain for centuries. The production process itself consumes enormous amounts of water and energy, and dyeing fabrics can pollute rivers in regions where factories operate. Consumers are not entirely to blame, since marketing constantly encourages them to buy more. However, a growing movement urges people to buy fewer, better-made items and to repair rather than replace. Second-hand shops and clothing rental services are becoming more popular, particularly among younger shoppers. The challenge is to change a habit that has become deeply woven into everyday life.",
      questions:[
        { q:"Why is much fast fashion slow to break down?", options:["It is made from synthetic materials","It is sewn too tightly","It contains metal threads"], answer:0 },
        { q:"What environmental harm comes from dyeing fabrics?", options:["River pollution","Air shortages","Soil freezing"], answer:0 },
        { q:"What does the growing movement encourage?", options:["Buying fewer, better items and repairing","Buying only expensive brands","Avoiding all clothing shops"], answer:0 },
        { q:"Who is becoming more interested in second-hand clothes?", options:["Younger shoppers","Only wealthy buyers","Factory owners"], answer:0 }
      ]
    },
    {
      id:"r2b-B2-04",
      title:"The Language of Bees",
      text:"Bees may be tiny, but their methods of communication are remarkably sophisticated. When a worker bee discovers a rich source of food, it returns to the hive and performs a series of movements often described as a dance. The direction and speed of this dance tell other bees exactly where to fly and how far the food is. A faster dance signals a closer source, while the angle of the movement points the way relative to the sun. This system allows a colony to gather food efficiently, sending workers to the best flowers rather than wasting energy searching at random. Scientists who first decoded the dance were astonished that an insect could share such precise information without words. Bees also communicate through scent, releasing chemical signals that warn of danger or mark a useful location. Understanding these behaviours matters beyond pure curiosity, because bees pollinate a large share of the crops humans rely on. As bee populations decline in many regions, learning how they live may help us protect them.",
      questions:[
        { q:"What does a faster bee dance signal?", options:["A closer food source","A dangerous predator","A new queen"], answer:0 },
        { q:"How does the dance show direction?", options:["By its angle relative to the sun","By its colour","By its loudness"], answer:0 },
        { q:"Besides dancing, how do bees communicate?", options:["Through chemical scent signals","Through written marks","Through sound only"], answer:0 },
        { q:"Why does understanding bees matter practically?", options:["They pollinate many human crops","They produce cheap fuel","They clean the air"], answer:0 }
      ]
    },
    {
      id:"r2b-B2-05",
      title:"The Return of the Night Train",
      text:"Across Europe, an old form of travel is enjoying an unexpected revival. Night trains, which once seemed destined to vanish in the age of cheap flights, are returning as travellers look for greener ways to cross the continent. The appeal is simple: passengers board in one city in the evening, sleep as the train rolls through the darkness, and wake refreshed in another country the next morning. This saves the cost of a hotel and avoids the stress of crowded airports. Equally important to many travellers is the environmental benefit, since trains produce far less pollution per passenger than aircraft. Governments have begun to support the trend, funding new routes and modern sleeping carriages. Challenges remain, however. Running night services is expensive, and timetables across different countries must be carefully coordinated. Some critics argue that the comfort cannot match a quick flight. Yet for a growing number of people, the slower journey is part of the pleasure, turning travel itself into a memorable experience rather than a tiresome necessity.",
      questions:[
        { q:"Why are night trains returning in Europe?", options:["Travellers want greener travel","Flights have been banned","Trains are now free"], answer:0 },
        { q:"What money-saving advantage is mentioned?", options:["Avoiding the cost of a hotel","Free meals on board","No need for tickets"], answer:0 },
        { q:"How are governments responding?", options:["Funding new routes and carriages","Closing all rail lines","Raising flight taxes only"], answer:0 },
        { q:"What challenge do night trains face?", options:["Coordinating timetables across countries","A lack of passengers everywhere","No available tracks"], answer:0 }
      ]
    },
    {
      id:"r2b-B2-06",
      title:"The Myth of Multitasking",
      text:"Many people pride themselves on doing several things at once, believing that multitasking makes them more productive. Research, however, suggests the opposite. When we appear to multitask, the brain is usually switching rapidly between tasks rather than handling them simultaneously. Each switch carries a small cost in time and concentration, and these costs add up. Studies show that people who constantly jump between emails, messages, and work often complete each task more slowly and make more mistakes than those who focus on one thing at a time. The illusion arises because switching feels active and busy, even when little is being achieved. There is also a longer-term concern. Some scientists worry that heavy multitasking may weaken our ability to concentrate deeply, a skill that complex work demands. The practical advice that emerges is surprisingly old-fashioned: do one task, finish it, and only then move on. In a world full of constant interruptions, the ability to pay sustained attention may become an increasingly valuable and rare skill.",
      questions:[
        { q:"What does the brain actually do when we multitask?", options:["Switch rapidly between tasks","Handle everything at once perfectly","Shut down briefly"], answer:0 },
        { q:"What did studies find about heavy multitaskers?", options:["They work slower and make more mistakes","They finish faster","They feel less tired"], answer:0 },
        { q:"Why does multitasking feel productive?", options:["Switching feels active and busy","It always saves money","It removes all stress"], answer:0 },
        { q:"What is the practical advice given?", options:["Finish one task before moving on","Always run many apps","Avoid all difficult work"], answer:0 }
      ]
    },
    {
      id:"r2b-B2-07",
      title:"Saving a Drowning Language",
      text:"When the last fluent speaker of a language dies, an entire way of seeing the world can disappear with them. Linguists estimate that a language vanishes roughly every two weeks, and thousands more are at risk. Each one carries unique knowledge, including names for local plants, traditional stories, and ways of describing experience that no other language captures. The causes of decline are often the same: young people move to cities, schools teach only major national languages, and speaking a minority tongue can carry a sense of shame. Yet communities around the world are fighting back. Some record their elders so that future generations can hear correct pronunciation. Others create children's books, apps, and even popular songs in their language. Governments occasionally help by allowing local languages in schools or public life. Success is never guaranteed, because reviving a language requires young people to use it daily, not merely study it. Still, every recording, lesson, and conversation keeps a fragile thread alive a little longer.",
      questions:[
        { q:"How often does a language disappear, according to linguists?", options:["Roughly every two weeks","Once a century","Every single day"], answer:0 },
        { q:"What unique knowledge can a language carry?", options:["Names for local plants and traditional stories","Only mathematical formulas","Secret government codes"], answer:0 },
        { q:"What is one cause of language decline?", options:["Young people moving to cities","Too many new books","Excessive government funding"], answer:0 },
        { q:"What does true language revival require?", options:["Young people using it daily","Only academic study","A single recording"], answer:0 }
      ]
    },
    {
      id:"r2b-B2-08",
      title:"The Surprising Science of Boredom",
      text:"Boredom is usually treated as something to avoid, a dull and unpleasant state that we fill instantly with our phones. Yet researchers are beginning to argue that boredom serves a useful purpose. When the mind has nothing pressing to do, it tends to wander, and this wandering can spark creativity. Many people report that their best ideas arrive not at their desks but while walking, showering, or staring out of a window. Boredom may act as a signal, telling us that our current activity is unrewarding and pushing us to seek something more meaningful. The problem in modern life is that we rarely allow ourselves to feel it. At the first sign of an empty moment, we reach for entertainment, cutting off the daydreaming before it can begin. Some experts now recommend deliberately leaving time unstructured, resisting the urge to check a screen during a quiet walk or a wait in line. By tolerating a little boredom, they argue, we may rediscover both our imagination and a calmer relationship with our own thoughts.",
      questions:[
        { q:"What useful effect can boredom have?", options:["Sparking creativity through mind-wandering","Improving physical strength","Curing all illnesses"], answer:0 },
        { q:"Where do people often report getting their best ideas?", options:["While walking or showering","Only during meetings","While reading the news"], answer:0 },
        { q:"What does boredom act as, according to the text?", options:["A signal that an activity is unrewarding","A sign of serious illness","A reward for hard work"], answer:0 },
        { q:"What do some experts now recommend?", options:["Leaving time unstructured and avoiding screens","Working without any breaks","Filling every moment with tasks"], answer:0 }
      ]
    }
  ]);

  P("reading","C1",[
    {
      id:"r2b-C1-01",
      title:"The Paradox of Choice",
      text:"Conventional economic wisdom holds that more options invariably benefit consumers, since a wider selection allows each person to find precisely what suits them. A growing body of psychological research, however, complicates this comfortable assumption. In a now-famous experiment, shoppers presented with a small range of jams were considerably more likely to make a purchase than those confronted with an overwhelming display of dozens. The abundance, paradoxically, paralysed rather than empowered them. Researchers attribute this to several overlapping mechanisms. An expanded field of options raises the mental effort required to compare them, while simultaneously inflating expectations about how perfect the final choice ought to be. Even after deciding, the chooser may be haunted by the alternatives forgone, a lingering regret that erodes satisfaction. None of this implies that scarcity is preferable to plenty, for genuine deprivation carries obvious costs. Rather, it suggests that the relationship between freedom and contentment is far less linear than markets assume, and that thoughtfully curated, limited choices may sometimes serve human wellbeing more faithfully than boundless variety ever could.",
      questions:[
        { q:"What does conventional economic wisdom assume about choice?", options:["More options always benefit consumers","Fewer options are always better","Choice has no effect on consumers"], answer:0 },
        { q:"What did the jam experiment reveal?", options:["A smaller range led to more purchases","Larger displays sold the most","Shoppers ignored both displays"], answer:0 },
        { q:"Which mechanism is said to erode satisfaction after choosing?", options:["Lingering regret over forgone alternatives","Joy at having decided quickly","Indifference to all options"], answer:0 },
        { q:"What is the passage's nuanced conclusion?", options:["The link between freedom and contentment is not linear","Scarcity is always preferable to plenty","Markets are always correct about choice"], answer:0 }
      ]
    },
    {
      id:"r2b-C1-02",
      title:"The Tyranny of the Average",
      text:"In the middle of the twentieth century, an air force struggling with frequent accidents commissioned a study to redesign its cockpits around the average pilot. Engineers meticulously measured thousands of men across numerous bodily dimensions, intending to build a seat and controls fitted to this composite ideal. The results overturned the entire premise. When researchers checked how many pilots fell close to the average on even a handful of measurements simultaneously, the answer was effectively none. The average pilot, it transpired, was a statistical fiction who did not exist in any single body. This revelation carried implications far beyond aviation. Designing for a mythical mean, the engineers realised, meant designing for nobody in particular, and the solution lay in adjustable equipment that could accommodate genuine human variability. The episode has since become a touchstone for thinkers wary of statistical abstraction. Whenever institutions reduce complex populations to a single representative figure, whether in education, medicine, or policy, they risk serving an imaginary person while neglecting the diverse individuals who actually populate the world.",
      questions:[
        { q:"What was the original goal of the cockpit study?", options:["To design around the average pilot","To recruit taller pilots","To reduce the number of pilots"], answer:0 },
        { q:"What did checking pilots against the average reveal?", options:["Effectively none matched the average closely","Most pilots matched perfectly","Only the tallest matched"], answer:0 },
        { q:"What solution did the engineers reach?", options:["Adjustable equipment for human variability","A single fixed seat for all","Removing controls entirely"], answer:0 },
        { q:"What broader warning does the episode offer?", options:["Reducing populations to one figure can mislead","Averages are always the safest guide","Variability should be ignored"], answer:0 }
      ]
    },
    {
      id:"r2b-C1-03",
      title:"The Slow Violence of Soil Loss",
      text:"Among the many environmental crises competing for public attention, the degradation of soil rarely commands headlines, yet its consequences may prove as far-reaching as any. Fertile topsoil, the thin living layer upon which agriculture ultimately depends, forms with extraordinary slowness, sometimes requiring centuries to accumulate a few centimetres. Modern farming practices, by contrast, can strip it away in a fraction of that time. Intensive ploughing exposes soil to wind and rain, while the relentless cultivation of single crops depletes the organic matter and microscopic life that hold the structure together. The erosion is gradual and largely invisible, unfolding over decades rather than seasons, which is precisely why it attracts so little urgency. Scientists warn that without significant changes, a substantial share of the world's productive land could become severely degraded within a lifetime, threatening food security for billions. Encouragingly, regenerative techniques such as planting cover crops, reducing tillage, and rotating diverse species can rebuild soil health remarkably quickly. The obstacle is rarely knowledge; it is the difficulty of persuading people to prioritise a threat that advances almost imperceptibly.",
      questions:[
        { q:"Why does soil degradation attract little urgency?", options:["It unfolds slowly and invisibly","It only affects deserts","It reverses on its own quickly"], answer:0 },
        { q:"How long can a few centimetres of topsoil take to form?", options:["Sometimes centuries","A single season","A few weeks"], answer:0 },
        { q:"How can soil health be rebuilt, according to the text?", options:["Cover crops, reduced tillage, crop rotation","Heavier ploughing","Growing only one crop"], answer:0 },
        { q:"What is identified as the main obstacle?", options:["Persuading people to prioritise a slow threat","A complete lack of knowledge","Insufficient farmland"], answer:0 }
      ]
    },
    {
      id:"r2b-C1-04",
      title:"The Architecture of Trust",
      text:"Economists once treated trust as a vague sentiment beyond the reach of rigorous analysis, but it has gradually come to be recognised as an indispensable economic resource. In societies where strangers can reasonably assume that others will honour agreements, transactions flow with remarkable ease, and the costs of verification, enforcement, and suspicion fall dramatically. Where trust is scarce, by contrast, every exchange demands elaborate safeguards, contracts swell with defensive clauses, and economic activity contracts accordingly. What makes trust so valuable is also what makes it fragile. It accumulates slowly through repeated honest dealings yet can be shattered by a single conspicuous betrayal, and rebuilding it afterwards proves disproportionately laborious. Researchers have observed that prosperous regions tend to exhibit higher levels of generalised trust, though the direction of causation remains genuinely contested. Crucially, trust does not arise spontaneously; it is cultivated by institutions that reliably punish cheating and reward reliability. When such institutions decay, the invisible web that allows a complex economy to function begins, almost silently, to unravel, with consequences that may take years to become fully apparent.",
      questions:[
        { q:"How has the view of trust in economics changed?", options:["From a vague sentiment to a key resource","From measurable to immeasurable","From useful to irrelevant"], answer:0 },
        { q:"What happens to exchanges where trust is scarce?", options:["They demand elaborate safeguards","They become entirely free","They speed up greatly"], answer:0 },
        { q:"Why is trust described as fragile?", options:["It builds slowly but can be shattered quickly","It cannot be measured at all","It never changes once formed"], answer:0 },
        { q:"What sustains trust, according to the text?", options:["Institutions that punish cheating and reward reliability","Spontaneous goodwill alone","Strict secrecy between parties"], answer:0 }
      ]
    },
    {
      id:"r2b-C1-05",
      title:"The Observer's Burden",
      text:"At the heart of modern physics lies a disquieting idea that continues to unsettle even those who work with it daily: the act of observation can shape what is observed. In the strange domain of the very small, particles do not appear to possess definite properties until they are measured, existing instead as a haze of possibilities described by mathematics. Only when an experiment forces a question does nature seem to commit to a particular answer. This has provoked decades of debate about what measurement actually means and whether the observer occupies some special role in the fabric of reality. Some physicists insist that consciousness plays no part, and that any sufficiently complex interaction collapses the haze into definiteness. Others remain troubled by the apparent dependence of outcomes on the choices an experimenter makes. What unites these interpretations is a shared humility, an acknowledgement that the tidy, independent reality assumed by classical science may be an approximation rather than the truth. Whatever resolution eventually prevails, the lesson endures that the observer can never be cleanly separated from the world being studied.",
      questions:[
        { q:"What unsettling idea sits at the heart of modern physics here?", options:["Observation can shape what is observed","Particles never move","Mathematics is always wrong"], answer:0 },
        { q:"How do tiny particles behave before measurement?", options:["As a haze of possibilities","As fixed solid objects","As invisible waves of sound"], answer:0 },
        { q:"What do the competing interpretations share?", options:["A shared humility about reality","Total agreement on consciousness","A rejection of mathematics"], answer:0 },
        { q:"What enduring lesson does the passage draw?", options:["The observer cannot be cleanly separated from the world","Classical science explains everything","Measurement has no effect"], answer:0 }
      ]
    },
    {
      id:"r2b-C1-06",
      title:"The Half-Life of Facts",
      text:"We tend to imagine knowledge as a steadily growing accumulation, each generation adding bricks to an ever-rising edifice of established truth. The history of science suggests a messier picture, in which much of what is confidently taught in any era is later revised, qualified, or quietly abandoned. Diets once prescribed by physicians are now condemned, theories embraced as settled are overturned, and confident predictions about the future routinely embarrass those who made them. Some scholars have even attempted to estimate how quickly the facts in a given field decay, finding that a measurable fraction of accepted claims is contradicted within surprisingly short spans. This is not cause for despair, nor a licence to dismiss expertise, for the very mechanism that overturns old beliefs is what makes science self-correcting and trustworthy in the long run. The appropriate response is a kind of disciplined humility: holding present knowledge firmly enough to act upon it, yet loosely enough to revise it when evidence demands. Certainty, in this view, is less a destination than a temporary and perpetually provisional resting place.",
      questions:[
        { q:"How do we tend to imagine knowledge?", options:["As a steadily growing accumulation","As permanently unchanging","As constantly shrinking"], answer:0 },
        { q:"What does the history of science actually suggest?", options:["Much confident knowledge is later revised","Nothing is ever overturned","Facts never decay"], answer:0 },
        { q:"Why is the decay of facts not cause for despair?", options:["Self-correction makes science trustworthy long term","Experts are always wrong","Knowledge does not matter"], answer:0 },
        { q:"What attitude does the passage recommend?", options:["Disciplined humility, holding knowledge firmly yet loosely","Absolute certainty in current facts","Total rejection of all expertise"], answer:0 }
      ]
    },
    {
      id:"r2b-C1-07",
      title:"The Commons Rediscovered",
      text:"For much of the twentieth century, a single grim parable dominated thinking about shared resources. Imagine a pasture open to all, the argument ran, where each herder, acting rationally in self-interest, adds ever more animals until the grass is destroyed and everyone suffers. The conclusion seemed inescapable: common ownership inevitably ends in ruin, and only privatisation or state control can avert catastrophe. Decades of patient fieldwork, however, have substantially undermined this fatalism. Studying communities that have managed forests, fisheries, and irrigation systems collectively for generations, researchers discovered an abundance of arrangements that defied the gloomy prediction. These communities devised their own rules, monitored one another, and imposed graduated penalties on those who took too much, sustaining their resources across centuries without resorting to either market or government. The crucial insight was that humans are not condemned to selfish ruin but are capable of crafting institutions suited to local conditions. This work dismantled a false dichotomy that had constrained policy for decades, demonstrating that durable cooperation, far from being a naive hope, is a documented and recurring feature of human societies.",
      questions:[
        { q:"What did the grim parable predict for shared resources?", options:["Inevitable ruin without privatisation or state control","Endless abundance for all","Steady improvement over time"], answer:0 },
        { q:"What did fieldwork on real communities reveal?", options:["They sustained resources through their own rules","They always destroyed their resources","They abandoned all cooperation"], answer:0 },
        { q:"How did these communities manage overuse?", options:["Monitoring and graduated penalties","Ignoring all violations","Selling the resource immediately"], answer:0 },
        { q:"What false dichotomy did this work dismantle?", options:["That only markets or governments can manage commons","That cooperation is always easy","That resources are infinite"], answer:0 }
      ]
    },
    {
      id:"r2b-C1-08",
      title:"The Persistence of Ritual",
      text:"In an age that prizes efficiency and rational explanation, the stubborn endurance of ritual can seem puzzling, even faintly embarrassing. Why should otherwise practical people light candles on a particular day, recite words whose origins they have forgotten, or repeat gestures that accomplish nothing measurable? Anthropologists who have studied such practices across wildly different cultures offer an answer that reframes the question entirely. Rituals, they argue, are not failed attempts at practical action but a distinct technology for managing meaning, emotion, and social cohesion. By marking transitions such as birth, marriage, and death, rituals help individuals absorb changes too vast to process through ordinary reasoning. By demanding synchronised, often costly participation, they bind communities together and signal commitment in ways that mere words cannot. Far from being relics destined to fade as societies modernise, rituals tend to reappear in new guises, from corporate ceremonies to the elaborate routines of athletes seeking composure. Their persistence suggests that they address needs which efficiency alone cannot satisfy, reminding us that human beings are creatures of significance as much as of calculation.",
      questions:[
        { q:"Why might ritual seem puzzling in a rational age?", options:["It accomplishes nothing measurable","It is always expensive","It is illegal in most places"], answer:0 },
        { q:"How do anthropologists reframe ritual?", options:["As a technology for managing meaning and cohesion","As failed practical action","As pure entertainment"], answer:0 },
        { q:"How do rituals help with major life transitions?", options:["They help absorb changes beyond ordinary reasoning","They speed up the changes","They prevent change entirely"], answer:0 },
        { q:"What does the persistence of ritual suggest?", options:["Humans need significance, not only calculation","Rituals will soon vanish completely","Efficiency satisfies all human needs"], answer:0 }
      ]
    }
  ]);
})();
