import type { Question } from "@/lib/types";

const EMPIRE =
  "When exploring New York City, there are several different options for activities during a day trip. " +
  "Some visitors come to see a show, visit art museums, or simply to shop in many of the city's high-end " +
  "retailers. However, many tourists simply come to New York City for the sightseeing. One of the most " +
  "visited landmarks in New York City is the Empire State Building.\n\n" +
  "The Empire State Building, constructed in 1931, is a 102-story skyscraper, the ninth highest building " +
  "in the world, and the fourth tallest structure in the United States. It is located in Midtown, " +
  "Manhattan. This skyscraper is an iconic symbol of the city, having been featured in over 90 popular " +
  "movies (as of 2018) throughout film history. Tourists come from all over the world to visit this " +
  "building and view the city from its famous observation decks.\n\n" +
  "Matthew, an enthusiast of historic buildings, was excited for this trip to New York City because he " +
  "has always appreciated architectural design. Matthew purchased a ticket that granted him access to " +
  "beautiful 360-degree views of the city. The ticket included an elevator ride that stopped at two " +
  "different vantage points, one at the 86th floor and the other at the rooftop observatory on the 102nd " +
  "floor. From these observation decks, Matthew took incredible photographs of the entire New York City " +
  "skyline. The rooftop views granted Matthew perfect aerial perspectives of Central Park, the Brooklyn " +
  "Bridge, Times Square, the Statue of Liberty, and many other important city landmarks.";

const FILMWORLD =
  "For film information and times press 1. To make a booking press 2. To speak to an operator press 3.\n\n" +
  "These are the films for today, Tuesday 7th. Please note that ticket prices are 5.00 euro for adults " +
  "and 3.50 euro for children under 14.\n\n" +
  "On Screen 1: Don't Open The Door! A group of college students decide to rent a house in the mountains " +
  "for a relaxing weekend break, but they aren't the only guests on the mountain . . . one by one they " +
  "start to disappear. Who or what is outside the house? Showing at 4.30, 7.00 and 9.00.\n\n" +
  "Screen 2: Ships In The Night. Maggie splits up with her boyfriend and decides to take a holiday on a " +
  "cruise ship to help her forget him. Tony is a waiter on the ship and he is very unhappy when his " +
  "girlfriend leaves him to marry the captain! Together they find a way to forget their problems. " +
  "Showing at 5.00, 7.45 and 10.15.\n\n" +
  "Screen 3: Streetmatch - The Return. The second film of French director Jean-Luc Ducroix. Two American " +
  "teenagers buy an old car and with a lot of hard work and after a lot of problems they enter their car " +
  "into the Streetmatch competition. But is their car good enough to win? Showing at 5.50, 8.30 and 11.45.\n\n" +
  "Screen 4: Lulu - It's A Dog's Life. This loveable little dog decides to leave home to look for fame " +
  "and fortune in the big city, but after a series of hilarious events he realises that life in the " +
  "country isn't so bad after all! From the makers of Shrek and Shark Tale, this is fun for all the " +
  "family! Showing at 3.00, 6.00, and 8.45.";

const LANGUAGE_LEARNING =
  "New research from the Massachusetts Institute of Technology (MIT) suggests that if people want to " +
  "achieve native-like proficiency in a new language, they should start learning that language before " +
  "the age of ten. The researchers added that children up to the age of 17 or 18 remain adept at " +
  "learning grammar. There is bad news for those who want to pick up a new language beyond their late " +
  "teens. The researchers say this is past the critical period when language-learning ability starts to " +
  "decline. Researcher Joshua Hartshorne said: As far as a child is concerned, it's quite easy to become " +
  "bilingual. That's when you're best at learning languages. It's not really something that you can make " +
  "up later.\n\n" +
  "The research was based on an analysis of results from a 10-minute online grammar quiz. Over 670,000 " +
  "language learners of all ages participated in the test. Researchers measured the grammatical ability " +
  "of people who started learning a language at different points in their life. Professor Hartshorne " +
  "focused on grammar rules that were most likely to confuse a non-native speaker as a gauge of that " +
  "person's proficiency. MIT researcher Josh Tenenbaum suggested people simply might be too busy to " +
  "learn a language later in life. He said: After 17 or 18, you leave home, you work full time, or you " +
  "become a specialized university student. All of these might impact your learning rate for any language.";

const SIXTEEN =
  "You're 16 and finally you can leave school! By now, you're probably sick of teachers, desks, tests " +
  "and exams. But don't just run for the exit. You need to think carefully about what to do next.\n\n" +
  "If you want a professional career, you will need to go to university and get a degree. To do that, " +
  "you need to stay at high school for another two years. But you needn't stay at the same place. There " +
  "are several options in the district of Northacre.\n\n" +
  "St. Leopold's School has the best pass rate of all the high schools in the district. It offers a wide " +
  "range of subjects in the humanities and sciences. St Leopold's is, of course, a private school, so " +
  "may be too expensive for you. But don't worry, there are several other options if you want to follow " +
  "the academic route. Knowle Grammar School is a state school, so there are no fees, and it has " +
  "excellent tuition and facilities. It is a boys' school from the ages of 11-16, but from 16-18 it is " +
  "co-educational. But it is selective, so you'll have to pass an exam to get in. If you're interested " +
  "in going into Business, check out Wyle River Academy. This school specialises in subjects like " +
  "Business Studies, Management and Economics. If you prefer the arts, look at the courses on offer at " +
  "Northacre College. Here you can study woodwork, art, textiles and much more.\n\n" +
  "Northacre College also offers a wide range of vocational qualifications. You can do a 1-year " +
  "certificate or a 2-year diploma in subjects like electrics, plumbing, roofing and hairdressing. If " +
  "you'd prefer to work outdoors, look at Milldown College, where there are courses in Farm Mechanics, " +
  "Land Management, Animal Management and much more.\n\n" +
  "A final option is to get an apprenticeship with a local or national company. You will get " +
  "on-the-job training, gain certificates or diplomas and start earning straight away. But be warned - " +
  "places are limited! Find out more at the Jobs Fair on 26th May at Northacre College.";

const HALLOWEEN =
  "Halloween (also referred to as All Hollows' Eve) is a holiday that's celebrated in America on 31 " +
  "October of each year, regardless of what day of the week this date falls on. Although it is rooted " +
  "in religion, Halloween today is enjoyed mainly because of its decorations, costumes, candy, treats, " +
  "and general excitement, and furthermore, it is enjoyed by most everyone.\n\n" +
  "Before Halloween, many individuals carve a design into an orange-colored pumpkin, or a solid, " +
  "durable vegetable. Once a personally satisfying design is carved, a lit candle is typically put " +
  "inside a pumpkin, thereby making it a Jack-O-Lantern. At night, this design lights up against the " +
  "darkness.\n\n" +
  "Besides carving pumpkins, some celebrate Halloween by putting decorations up. Supernatural " +
  "(referring in this case to non-natural creatures that're typically based in fiction) figures, " +
  "including vampires, ghosts, werewolves, zombies, and more, generally account for most of these " +
  "decorations. Bugs, spiders, cobwebs, gravestones, and anything else that can be considered creepy " +
  "(or unusual and possibly scary) can also be found on Halloween, in decoration form.\n\n" +
  "Only some adults celebrate Halloween, and they generally do so by attending parties. Inversely, the " +
  "vast majority of children dress in costume (Halloween costumes can be based upon anything, from the " +
  "mentioned supernatural creatures to the stars of today's films) and walk from door to door in search " +
  "of candy - a practice known as trick or treat - on Halloween. After knocking on a door (houses that " +
  "participate in Halloween usually leave a light on), one says, Trick or Treat, and a piece (or " +
  "pieces!) of candy is given to him or her.";

const THANKSGIVING =
  "Thanksgiving is a holiday celebrated predominantly in North America, and it possesses a different " +
  "meaning in each of the countries where it's acknowledged.\n\n" +
  "In the United States, Thanksgiving is a federal holiday (meaning all government employees and most " +
  "private employees are given a day off of work), and always takes places on the Fourth Thursday in " +
  "November, regardless of the date.\n\n" +
  "The holiday signifies the immense progress made by pilgrims, or some of the first travelers to North " +
  "America, at Plymouth Plantation circa 1621. It was at this time that the hungry and weary Pilgrims " +
  "were taught (by Native Americans) how to grow and produce food on North America's unique terrain. " +
  "Once they'd grown (and caught) an abundance of food, the Pilgrims were expectedly thankful, and they " +
  "celebrated alongside the Native Americans who provided them with such valuable assistance. President " +
  "Abraham Lincoln initiated the contemporary practice of Thanksgiving by calling for a day of " +
  "Thanksgiving during one of his Civil War addresses.\n\n" +
  "In America today, Thanksgiving remains firmly engrained in its historical roots, and is widely " +
  "considered to be a day for giving thanks for good food, good times, and family. Thanksgiving dinner " +
  "generally consists of turkey, mashed potatoes, stuffing, vegetables, gravy, and ample desserts. To be " +
  "sure, indulging in abundance is a cornerstone of the holiday, as doing so could only be possible if " +
  "one possesses abundance.";

/** Задания по английскому из сборника тестов, 20 вариантов. Партия 03. */
export const batch03: Question[] = [
  {
    id: "mk-en-b03-1",
    topic: "noun",
    difficulty: "A",
    text: "Is she your ___?",
    options: ["brother", "relatives", "mothers", "sister"],
    correct: [3],
    explanation:
      "Подлежащее she указывает на женщину, а глагол is требует существительного в единственном числе, " +
      "поэтому подходит только sister. Вариант brother противоречит роду: о брате нельзя спросить she. " +
      "Формы relatives и mothers стоят во множественном числе и не согласуются ни с is, ни с местоимением " +
      "she, обозначающим одного человека.",
  },
  {
    id: "mk-en-b03-2",
    topic: "article",
    difficulty: "A",
    text: "Our vacation was incredible. ___ was awesome!",
    options: ["Hotel", "The hotel", "A hotel", "A hotels"],
    correct: [1],
    explanation:
      "Речь идёт о конкретном отеле, в котором говорящий жил во время описанного отпуска, поэтому нужен " +
      "определённый артикль the. Вариант a hotel обозначал бы какой-то отель вообще, один из многих, а " +
      "здесь собеседник уже понимает, о каком именно идёт речь. Форма без артикля невозможна: hotel это " +
      "исчисляемое существительное в единственном числе, оно всегда требует определителя. Сочетание a " +
      "hotels ошибочно вдвойне, так как артикль a не ставится перед множественным числом.",
  },
  {
    id: "mk-en-b03-3",
    topic: "preposition",
    difficulty: "B",
    text: "I am ___ literature, do you like it?",
    options: ["interest in", "interesting in", "interested to", "interested in"],
    correct: [3],
    explanation:
      "Когда человек испытывает интерес, о нём говорят причастием прошедшего времени interested, и оно " +
      "закреплено за предлогом in: be interested in something. Вариант interesting in описывал бы не " +
      "чувство человека, а свойство предмета вызывать интерес, поэтому фраза I am interesting означала бы " +
      "я интересен для других. Форма interest in ставит после am существительное или глагол вместо " +
      "прилагательного, а interested to нарушает устойчивое управление: предлог to после interested " +
      "используется лишь перед инфинитивом, но не перед названием области знаний.",
  },
  {
    id: "mk-en-b03-4",
    topic: "pronoun",
    difficulty: "A",
    text: "Janna and Mark are married. ___ love each other.",
    options: ["He", "We", "They", "She"],
    correct: [2],
    explanation:
      "Местоимение во втором предложении заменяет двух названных людей, Janna и Mark, то есть третье лицо " +
      "множественного числа, а это they. Варианты he и she указывали бы только на одного из супругов, и " +
      "тогда фраза love each other потеряла бы смысл, ведь взаимное действие требует минимум двоих. Кроме " +
      "того, при he и she глагол стоял бы в форме loves, а здесь дано love без окончания. Местоимение we " +
      "включало бы говорящего, которого в предложении нет.",
  },
  {
    id: "mk-en-b03-5",
    topic: "numeral",
    difficulty: "B",
    text: "We are ___ children in family. I have two brothers only.",
    options: ["two", "three", "five", "four"],
    correct: [1],
    explanation:
      "Числительное нужно вычислить из второго предложения: у говорящего есть только два брата, и сам он " +
      "тоже ребёнок в этой семье, значит детей всего трое. Ошибка с two возникает, если механически взять " +
      "число из текста и забыть посчитать самого рассказчика. Варианты four и five дают больше детей, чем " +
      "позволяет ограничительное слово only, которое закрывает список братьев ровно на двух.",
  },
  {
    id: "mk-en-b03-6",
    topic: "adverb",
    difficulty: "B",
    text: "Put adverb probably into correct place:",
    options: [
      "The performance will be probably cancelled.",
      "The performance will probably be cancelled.",
      "The performance probably will be cancelled.",
      "The performance will be cancelled probably.",
    ],
    correct: [1],
    explanation:
      "Наречия неопределённой вероятности вроде probably ставятся в середину предложения, а именно после " +
      "первого вспомогательного глагола, поэтому правильный порядок будет will probably be cancelled. " +
      "Позиция перед will, как в третьем варианте, разрывает связь между подлежащим и сказуемым и звучит " +
      "неестественно. Постановка между be и причастием, как в первом варианте, разбивает саму форму " +
      "пассива, а вынос в самый конец, как в четвёртом, придаёт фразе разговорную незаконченность и в " +
      "тесте считается ошибкой.",
  },
  {
    id: "mk-en-b03-7",
    topic: "preposition",
    difficulty: "A",
    text: "I was born ___ 1989.",
    options: ["at", "a", "on", "in"],
    correct: [3],
    explanation:
      "С крупными отрезками времени, то есть с годами, месяцами, временами года и веками, употребляется " +
      "предлог in, поэтому нужно in 1989. Предлог on закреплён за конкретными датами и днями недели, " +
      "например on 5 May, а год днём не является. Предлог at указывает на точку во времени, обычно на " +
      "час, как at six o'clock. Вариант a вообще не предлог, а артикль, и в этой позиции невозможен.",
  },
  {
    id: "mk-en-b03-8",
    topic: "verb",
    difficulty: "A",
    text: "I ___ a new flat last week.",
    options: ["bought", "buyed", "had to bought", "have bought"],
    correct: [0],
    explanation:
      "Обстоятельство last week называет завершившийся момент в прошлом, а с такими указателями времени " +
      "работает простое прошедшее, поэтому нужна форма bought. Вариант have bought относится к настоящему " +
      "совершённому, которое несовместимо с точным прошедшим временем. Форма buyed придумана по образцу " +
      "правильных глаголов, а buy неправильный и меняет корень. Сочетание had to bought содержит вторую " +
      "ошибку: после had to всегда идёт инфинитив без окончания, то есть had to buy.",
  },
  {
    id: "mk-en-b03-9",
    topic: "verb",
    difficulty: "B",
    text: "My friend and I ___ when we ___ our teacher.",
    options: [
      "walked/saw",
      "were walking/saw",
      "are walking/saw",
      "was walking/seen",
    ],
    correct: [1],
    explanation:
      "Здесь встречаются два прошедших действия: длительный фон, прогулка, и короткое событие, которое его " +
      "прерывает, встреча с учителем. Фон передают прошедшим длительным were walking, а моментальное " +
      "действие простым прошедшим saw. Пара walked/saw превратила бы прогулку в такое же мгновенное " +
      "событие и потеряла бы значение процесса. Вариант are walking ставит настоящее время рядом с " +
      "прошедшим, а в was walking/seen дважды нарушена форма: подлежащее my friend and I требует were, а " +
      "seen это причастие, которое без вспомогательного глагола сказуемым быть не может.",
  },
  {
    id: "mk-en-b03-10",
    topic: "non-finite",
    difficulty: "B",
    text: "Students were allowed ___ in the hall.",
    options: ["eating", "to eat", "eat", "to eating"],
    correct: [1],
    explanation:
      "Глагол allow в страдательном залоге сохраняет инфинитив с частицей to, который относится к " +
      "подлежащему: were allowed to eat. Голая форма eat возможна только после модальных глаголов и " +
      "нескольких особых конструкций, к которым allow не относится. Герундий eating тоже не подходит: " +
      "после be allowed по правилу идёт именно инфинитив. Сочетание to eating невозможно в принципе, " +
      "потому что частица to не ставится перед формой с окончанием ing.",
  },
  {
    id: "mk-en-b03-11",
    topic: "verb",
    difficulty: "B",
    text: "John lives in Madrid. He ___ there for three years.",
    options: ["lived", "lives", "had lived", "has lived"],
    correct: [3],
    explanation:
      "Первое предложение сообщает, что Джон живёт в Мадриде сейчас, а оборот for three years измеряет " +
      "срок, который тянется от прошлого до момента речи, и такое значение передаёт настоящее совершённое " +
      "has lived. Простое прошедшее lived означало бы, что он там жил, но уже не живёт, что противоречит " +
      "первой фразе. Простое настоящее lives называет привычку без указания продолжительности и с for " +
      "three years не сочетается. Прошедшее совершённое had lived требует второй точки отсчёта в прошлом, " +
      "которой в предложении нет.",
  },
  {
    id: "mk-en-b03-12",
    topic: "verb",
    difficulty: "B",
    text: "The children ___ and ___ when I came.",
    options: [
      "were running / shouting",
      "run / shout",
      "ran / shouted",
      "was running / shouting",
    ],
    correct: [0],
    explanation:
      "Придаточное when I came называет момент, в который уже разворачивалось другое действие, поэтому для " +
      "главной части нужно прошедшее длительное were running and shouting: дети бегали и кричали, когда я " +
      "вошёл. Формы run и shout стоят в настоящем времени и не согласуются с прошедшим came. Пара ran и " +
      "shouted описала бы действия как последовательные и завершённые, то есть дети побегали уже после " +
      "прихода, а не в этот момент. В четвёртом варианте ошибка в числе: подлежащее children множественное " +
      "и требует were, а не was.",
  },
  {
    id: "mk-en-b03-13",
    topic: "verb",
    difficulty: "B",
    text: "___ you swim when you were seven?",
    options: ["Can", "Were able", "Did can", "Could"],
    correct: [3],
    explanation:
      "Придаточное when you were seven относит вопрос к прошлому, а прошедшая форма модального глагола " +
      "can это could, поэтому вопрос начинается с Could you swim. Настоящее can противоречит прошедшему " +
      "were. Сочетание did can невозможно: модальные глаголы образуют вопрос переносом самих себя в " +
      "начало и никогда не берут вспомогательный do. Вариант were able оборван, ведь после able " +
      "обязателен инфинитив с to, то есть were you able to swim.",
  },
  {
    id: "mk-en-b03-14",
    topic: "verb",
    difficulty: "A",
    text: "He ___ at the moment.",
    options: ["will sleep", "sleeps", "is sleeping", "sleep"],
    correct: [2],
    explanation:
      "Обстоятельство at the moment прямо указывает, что действие происходит прямо сейчас, а это значение " +
      "настоящего длительного времени, то есть is sleeping. Простое настоящее sleeps описывало бы " +
      "регулярную привычку и с указателем сиюминутности не сочетается. Форма will sleep относит действие в " +
      "будущее, что противоречит at the moment. Голая форма sleep не согласуется с подлежащим he, которое " +
      "требует окончания s.",
  },
  {
    id: "mk-en-b03-15",
    topic: "mood",
    difficulty: "A",
    text: "Which mood is used in the following sentence: Take it off!",
    options: ["indicative", "subjunctive", "interrogative", "imperative"],
    correct: [3],
    explanation:
      "Предложение выражает прямое побуждение к действию, обращено к собеседнику, начинается с глагола в " +
      "начальной форме и не имеет подлежащего, а это признаки повелительного наклонения. Изъявительное " +
      "наклонение сообщало бы о факте и обязательно содержало бы подлежащее, например you take it off. " +
      "Сослагательное наклонение описывает нереальное или желаемое и обычно опирается на такие сигналы, " +
      "как wish или if only. Вопросительное значение здесь тоже отсутствует, ведь предложение ничего не " +
      "спрашивает и заканчивается восклицательным знаком.",
  },
  {
    id: "mk-en-b03-16",
    topic: "mood",
    difficulty: "A",
    text: "Choose the sentence with interrogative mood",
    options: [
      "How beautiful you are today!",
      "I am ok.",
      "Clean it fast!",
      "Why are you here?",
    ],
    correct: [3],
    explanation:
      "Вопросительное значение узнаётся по двум признакам сразу: обратному порядку слов, когда глагол " +
      "стоит перед подлежащим, и вопросительному знаку в конце, и оба они есть только во фразе Why are you " +
      "here. Восклицание How beautiful you are today сохраняет прямой порядок слов и выражает эмоцию, а не " +
      "запрос информации. Предложение I am ok просто сообщает факт, то есть относится к изъявительному " +
      "наклонению. Фраза Clean it fast побуждает к действию и является повелительной.",
  },
  {
    id: "mk-en-b03-17",
    topic: "mood",
    difficulty: "B",
    text: "Choose the sentence with the interrogative mood",
    options: [
      "I want you to come to my party.",
      "Would you like to come to my party?",
      "Come to my party.",
      "I wish you came to my party.",
    ],
    correct: [1],
    explanation:
      "Из всех предложений только Would you like to come to my party построено с выносом вспомогательного " +
      "глагола перед подлежащим и завершается вопросительным знаком, а это и есть формальные признаки " +
      "вопроса. Фраза I want you to come сообщает о желании говорящего в форме утверждения. Предложение " +
      "Come to my party не имеет подлежащего и приказывает, то есть стоит в повелительном наклонении. " +
      "Конструкция I wish you came выражает сожаление о нереальном и относится к сослагательному " +
      "наклонению, поэтому вопросом тоже не является.",
  },
  {
    id: "mk-en-b03-18",
    topic: "pronoun",
    difficulty: "A",
    text: "What is ___ name? My name's Ronaldo.",
    options: ["your", "his", "my", "her"],
    correct: [0],
    explanation:
      "Ответ My name's Ronaldo показывает, что спрашивали именно у собеседника о нём самом, поэтому в " +
      "вопросе нужно притяжательное местоимение второго лица your. Вариант my сделал бы вопрос " +
      "бессмысленным: человек спрашивал бы о собственном имени. Местоимения his и her указывали бы на " +
      "третье лицо, и тогда отвечающий назвал бы чужое имя, а не своё.",
  },
  {
    id: "mk-en-b03-19",
    topic: "article",
    difficulty: "B",
    text: "My friend lives in ___.",
    options: ["Hollands", "Holland", "the Holland", "a Holland"],
    correct: [1],
    explanation:
      "Названия большинства стран это единичные имена собственные, и артикль перед ними не ставится, " +
      "поэтому верно просто in Holland. Определённый артикль нужен лишь странам, в названии которых есть " +
      "слово со значением объединения или множественности, например the Netherlands или the USA, но форма " +
      "Holland к этой группе не относится. Неопределённый артикль a невозможен, потому что страна одна и " +
      "не мыслится как один экземпляр из ряда. Форма Hollands ставит имя собственное во множественное " +
      "число, чего названия стран не допускают.",
  },
  {
    id: "mk-en-b03-20",
    topic: "verb",
    difficulty: "B",
    text: "The weather is awful, it ___ all day.",
    options: ["is raining", "rained", "has been raining", "has rained"],
    correct: [2],
    explanation:
      "Оборот all day означает, что дождь идёт с начала дня и продолжается сейчас, а такое непрерывное " +
      "действие, тянущееся до момента речи, передаёт настоящее совершённое длительное has been raining. " +
      "Форма has rained подчёркивала бы результат и завершённость, а нам важен сам процесс и его " +
      "протяжённость. Простое прошедшее rained оторвало бы дождь от настоящего, хотя первая часть " +
      "предложения описывает погоду прямо сейчас. Настоящее длительное is raining называет действие в " +
      "текущий момент, но не охватывает весь день от его начала.",
  },
  {
    id: "mk-en-b03-21",
    topic: "mood",
    difficulty: "B",
    text: "Find an example of Subjunctive mood",
    options: [
      "Give me an answer",
      "I wish I could give you an answer",
      "I can give you an answer",
      "Could I give you an answer?",
    ],
    correct: [1],
    explanation:
      "Сослагательное наклонение говорит о том, чего на самом деле нет, и его типичный сигнал это глагол " +
      "wish, после которого идёт форма прошедшего времени: I wish I could give you an answer означает, " +
      "что ответа у говорящего как раз нет. Фраза Give me an answer это приказ без подлежащего, то есть " +
      "повелительное наклонение. Предложение I can give you an answer сообщает о реальной возможности и " +
      "относится к изъявительному наклонению. Вопрос Could I give you an answer формально вопросительный, " +
      "а форма could здесь работает как вежливое разрешение, а не как выражение нереального.",
  },
  {
    id: "mk-en-b03-22",
    topic: "non-finite",
    difficulty: "A",
    text: "I decided ___ to him because I was wrong.",
    options: ["to apologize", "apologizing", "apologized", "apologize"],
    correct: [0],
    explanation:
      "Глагол decide входит в группу глаголов, после которых стоит только инфинитив с частицей to, поэтому " +
      "правильно decided to apologize. Герундий apologizing после decide не употребляется, хотя после " +
      "других глаголов, например после enjoy, он был бы обязателен. Форма apologized ставит второе " +
      "сказуемое в прошедшем времени, и без союза получились бы два несогласованных сказуемых подряд. " +
      "Голый инфинитив apologize возможен лишь после модальных глаголов и нескольких особых конструкций, а " +
      "decide к ним не относится.",
  },
  {
    id: "mk-en-b03-23",
    topic: "non-finite",
    difficulty: "C",
    text: "I remember this man ___ the competition.",
    options: ["winning", "wined", "win", "won"],
    correct: [0],
    explanation:
      "После глагола remember, когда речь идёт о воспоминании о чужом действии, употребляется конструкция " +
      "с существительным и причастием на ing: I remember this man winning, то есть я помню, как этот " +
      "человек выигрывал. Формы won и wined невозможны, потому что второе сказуемое в предложении без " +
      "союза не появляется, а wined вдобавок образовано по образцу правильных глаголов, тогда как win " +
      "неправильный и даёт won. Голый инфинитив win после remember тоже не годится: он встречается после " +
      "глаголов чувственного восприятия вроде see и hear, а remember обозначает работу памяти и требует " +
      "именно формы на ing.",
  },
  {
    id: "mk-en-b03-24",
    topic: "verb",
    difficulty: "C",
    text: "She had paint on her hands because she ___ all the day.",
    options: [
      "has been drawing",
      "was drawing",
      "had been drawing",
      "have been drawing",
    ],
    correct: [2],
    explanation:
      "Главная часть стоит в прошедшем времени, had paint, а рисование началось ещё раньше и длилось до " +
      "этого момента, поэтому нужна форма прошедшего совершённого длительного had been drawing. Вариант " +
      "has been drawing привязывает действие к настоящему и рассогласуется с прошедшим had. Форма have " +
      "been drawing ошибочна ещё и в лице: при подлежащем she нужен has, а не have. Прошедшее длительное " +
      "was drawing показывало бы одновременность, но не объясняло бы накопленный за весь день результат, " +
      "то есть краску на руках.",
  },
  {
    id: "mk-en-b03-25",
    topic: "verb",
    difficulty: "B",
    text: "They ___ like this before.",
    options: [
      "were never quarreled",
      "never has quarreled",
      "never quarrel",
      "have never quarreled",
    ],
    correct: [3],
    explanation:
      "Слово before без указания конкретной даты означает опыт, накопленный к настоящему моменту, а такой " +
      "опыт выражается настоящим совершённым: have never quarreled. Простое настоящее never quarrel " +
      "описывало бы привычку вообще и не связывалось бы с before. В варианте never has quarreled нарушено " +
      "согласование, ведь при подлежащем they нужна форма have. Сочетание were never quarreled ставит " +
      "непереходный глагол quarrel в страдательный залог, что невозможно: ссориться нельзя быть кем-то " +
      "поссоренным.",
  },
  {
    id: "mk-en-b03-26",
    topic: "article",
    difficulty: "A",
    text: "In the evening we went to ___ theatre.",
    options: ["an", "the", "a", "-"],
    correct: [1],
    explanation:
      "С названиями учреждений, куда ходят ради их основного назначения, в британской традиции стоит " +
      "определённый артикль: go to the theatre, the cinema. Неопределённый артикль a выделял бы какой-то " +
      "один театр из многих, а здесь важен сам поход в театр, а не выбор здания. Форма an невозможна " +
      "фонетически, потому что слово theatre начинается с согласного звука. Нулевой артикль в этом " +
      "выражении не используется, в отличие от оборотов вроде go to school или go to bed, где речь идёт " +
      "не о здании, а о занятии.",
  },
  {
    id: "mk-en-b03-27",
    topic: "mood",
    difficulty: "B",
    text: "The Indicative Mood:",
    options: [
      "Parking prohibited",
      "All the stories were interesting.",
      "If only I finished this exercise on time.",
      "A nice day",
    ],
    correct: [1],
    explanation:
      "Изъявительное наклонение сообщает о факте как о чём-то реальном и обязательно содержит подлежащее и " +
      "сказуемое в личной форме, а этому отвечает только предложение All the stories were interesting. " +
      "Надпись Parking prohibited не имеет личной формы глагола, это сокращённое объявление. Фраза If only " +
      "I finished this exercise on time выражает сожаление о неисполненном и относится к сослагательному " +
      "наклонению. Сочетание A nice day это вообще не предложение, а именная группа без сказуемого.",
  },
  {
    id: "mk-en-b03-28",
    topic: "lexicology",
    difficulty: "C",
    text: "She is very keen ___ the course.",
    options: ["does", "do", "to be done", "to do"],
    correct: [3],
    explanation:
      "Прилагательное keen в значении сильного желания что-то сделать сочетается с инфинитивом: be keen to " +
      "do something, поэтому подходит to do the course. Личные формы does и do после is стоять не могут, " +
      "ведь в предложении уже есть сказуемое is keen, а второе сказуемое без союза не появляется. Пассивный " +
      "инфинитив to be done перевернул бы смысл: получилось бы, что курс кто-то делает над ней, тогда как " +
      "проходит его она сама. Стоит запомнить и вторую модель этого прилагательного, be keen on doing " +
      "something, но в ней после предлога on обязательна форма на ing, а такого варианта здесь нет.",
  },
  {
    id: "mk-en-b03-29",
    topic: "verb",
    difficulty: "A",
    text: "I think I ___ free tomorrow.",
    options: ["be going to be", "are going", "will have been", "will be"],
    correct: [3],
    explanation:
      "После оборота I think, выражающего предположение о будущем, употребляется простое будущее с will, а " +
      "обстоятельство tomorrow это подтверждает, поэтому верно I will be free. Форма will have been " +
      "означала бы действие, завершённое к какому-то будущему моменту, но такой точки отсчёта в " +
      "предложении нет. Сочетание are going не согласуется с подлежащим I, при котором нужна форма am, и " +
      "вдобавок обрывается без инфинитива. Вариант be going to be оставляет глагол be в начальной форме, " +
      "хотя после I требуется am going to be.",
  },
  {
    id: "mk-en-b03-30",
    topic: "mood",
    difficulty: "B",
    text:
      "There will be no computer class tomorrow as we are upgrading the computer server. " +
      "Which mood is used?",
    options: [
      "Subjunctive Mood",
      "Imperative Mood",
      "Indicative Mood",
      "Interrogative Mood",
    ],
    correct: [2],
    explanation:
      "Предложение просто сообщает о реальном положении дел, об отмене занятия и о причине этого, и " +
      "содержит обычные личные формы глаголов will be и are upgrading, а это признак изъявительного " +
      "наклонения. Повелительное наклонение потребовало бы глагола в начальной форме без подлежащего и " +
      "выражало бы приказ. Сослагательное наклонение говорило бы о нереальном или желаемом и опиралось бы " +
      "на сигналы вроде if, wish, would. Вопросительного значения тоже нет: порядок слов прямой, а в конце " +
      "стоит точка.",
  },
  {
    id: "mk-en-b03-31",
    topic: "verb",
    difficulty: "C",
    text: "I was very tired when I got home, because I ___ hard all day.",
    options: [
      "has been working",
      "had been working",
      "have worked",
      "have been working",
    ],
    correct: [1],
    explanation:
      "Усталость относится к прошлому, was tired, а работа шла ещё раньше и продолжалась вплоть до " +
      "возвращения домой, поэтому нужно прошедшее совершённое длительное had been working. Обе формы с " +
      "have и has привязывают действие к настоящему моменту и не согласуются с прошедшими was и got. " +
      "Вариант has been working ошибочен ещё и по лицу: при подлежащем I возможна только форма have. " +
      "Настоящее совершённое have worked к тому же подчёркивало бы результат, а обстоятельство all day " +
      "требует именно значения длительности.",
  },
  {
    id: "mk-en-b03-32",
    topic: "verb",
    difficulty: "C",
    text: "The work ___ by 6 o'clock.",
    options: ["will be done", "will do", "will has been done", "will have been done"],
    correct: [3],
    explanation:
      "Предлог by с указанием времени означает не в шесть, а к шести часам, то есть действие должно " +
      "завершиться к этому будущему моменту, и такое значение передаёт будущее совершённое. Работу " +
      "выполняют над ней самой, подлежащее the work не действует, поэтому нужен страдательный залог, и обе " +
      "идеи вместе дают will have been done. Форма will be done верна по залогу, но означает просто будущее " +
      "действие без привязки к сроку завершения. Вариант will do поставил бы работу в положение " +
      "исполнителя, а сочетание will has been done невозможно грамматически: после will всегда идёт have, " +
      "а не has.",
  },
  {
    id: "mk-en-b03-33",
    topic: "pronoun",
    difficulty: "B",
    text: "___ pen is this?",
    options: ["Who", "Whose", "Which", "That"],
    correct: [1],
    explanation:
      "Вопрос о принадлежности предмета задаётся притяжательным вопросительным местоимением whose, которое " +
      "ставится прямо перед существительным: Whose pen is this. Местоимение who спрашивает о лице как о " +
      "деятеле и само определением быть не может, оно не сочетается напрямую с существительным. Форма " +
      "which предлагает выбор из известного набора и означала бы какая именно ручка из нескольких, а не " +
      "чья. Указательное that вообще не вопросительное слово и превратило бы фразу в утверждение.",
  },
  {
    id: "mk-en-b03-34",
    topic: "preposition",
    difficulty: "B",
    text: "I was bad ___ lying.",
    options: ["in", "of", "at", "-"],
    correct: [2],
    explanation:
      "Оценка умения или неумения что-то делать выражается устойчивым сочетанием be good at и be bad at, " +
      "поэтому нужно bad at lying. Предлог in встречается с другими прилагательными, например rich in, но " +
      "с bad в значении навыка он не работает. Предлог of ставится после прилагательных чувства и оценки " +
      "поступка, как afraid of или kind of, а тут речь о способности. Вариант без предлога невозможен, " +
      "потому что герундий lying сам по себе к прилагательному bad не присоединяется.",
  },
  {
    id: "mk-en-b03-35",
    topic: "verb",
    difficulty: "B",
    text: "Children should ___ warned not to speak to strangers.",
    options: ["be", "are", "-", "were"],
    correct: [0],
    explanation:
      "Детей предупреждают другие, то есть подлежащее испытывает действие, а значит нужен страдательный " +
      "залог, который строится из формы глагола be и причастия прошедшего времени warned. Перед warned " +
      "стоит модальный глагол should, а после любого модального глагола идёт только начальная форма без to " +
      "и без окончаний, поэтому подходит be. Формы are и were это личные формы настоящего и прошедшего " +
      "времени, и после should они стоять не могут. Убрать глагол-связку тоже нельзя: без be получится " +
      "should warned, где причастие останется без опоры и залог не образуется.",
  },
  {
    id: "mk-en-b03-36",
    topic: "non-finite",
    difficulty: "A",
    text: "Saltanat advised me ___ a new apartment.",
    options: ["to finding", "find", "finding", "to find"],
    correct: [3],
    explanation:
      "Глагол advise, когда после него названо лицо, которому советуют, требует инфинитива с частицей to: " +
      "advised me to find. Голая форма find возможна только после модальных глаголов и оборотов вроде make " +
      "somebody do, но advise к ним не относится. Герундий finding после advise ставится лишь тогда, когда " +
      "адресат совета не назван, например advised finding a new apartment, а здесь стоит местоимение me. " +
      "Сочетание to finding невозможно в принципе, потому что частица to не соединяется с формой на ing.",
  },
  {
    id: "mk-en-b03-37",
    topic: "adverb",
    difficulty: "B",
    text: "I didn't write ___ enough.",
    options: ["quickly", "quick", "quicklier", "quickliest"],
    correct: [0],
    explanation:
      "Пропуск характеризует действие write, а признак действия обозначается наречием, поэтому нужна " +
      "форма quickly с суффиксом ly. Прилагательное quick описывало бы предмет, а не то, как человек " +
      "писал. Формы quicklier и quickliest вообще не существуют: у многосложных наречий на ly степени " +
      "сравнения строятся словами more и most, то есть more quickly и most quickly. Кроме того, слово " +
      "enough после наречия означает достаточно быстро, и никакая степень сравнения тут не требуется.",
  },
  {
    id: "mk-en-b03-38",
    topic: "pronoun",
    difficulty: "B",
    text: "Up till now I've learned English by ___.",
    options: ["mine", "myself", "my", "me"],
    correct: [1],
    explanation:
      "Устойчивое сочетание by oneself означает самостоятельно, без чужой помощи, и для первого лица " +
      "единственного числа оно даёт by myself. Личное местоимение me после by означало бы совсем другое, " +
      "обычно указание на исполнителя в страдательном залоге, а здесь подлежащее уже названо. " +
      "Притяжательное my не может стоять без существительного после себя. Абсолютная форма mine заменяет " +
      "целую именную группу, например моя книга, и к значению самостоятельного действия отношения не " +
      "имеет.",
  },
  {
    id: "mk-en-b03-39",
    topic: "preposition",
    difficulty: "B",
    text: "Portsmouth is ___ the south coast of England.",
    options: ["under", "on", "by", "in"],
    correct: [1],
    explanation:
      "Расположение города на побережье передаётся предлогом on, потому что берег мыслится как линия или " +
      "поверхность, вдоль которой находится объект: on the south coast. Предлог in требует замкнутого " +
      "пространства, а побережье такой границы не задаёт, поэтому in the coast не говорят. Предлог by " +
      "означает рядом с чем-то и сочетается со словом sea, как in a house by the sea, но со словом coast в " +
      "этой формуле не используется. Предлог under указывает на положение снизу и к географии побережья " +
      "неприменим.",
  },
  {
    id: "mk-en-b03-40",
    topic: "preposition",
    difficulty: "B",
    text: "I like to sit ___ the fire and listen ___ its crackling.",
    options: ["by, to", "on, to", "in, -", "at, for"],
    correct: [0],
    explanation:
      "В первом пропуске нужен предлог близости by, ведь человек сидит рядом с огнём, а не внутри него и " +
      "не на нём, отсюда sit by the fire. Во втором пропуске работает управление глагола listen, который " +
      "всегда присоединяет объект через to: listen to something. Варианты on the fire и in the fire дают " +
      "буквальный и опасный смысл, будто человек находится в пламени. Сочетания listen for и listen без " +
      "предлога тоже не подходят: listen for означает прислушиваться в ожидании звука, а без предлога " +
      "глагол listen дополнение не берёт вовсе.",
  },
  {
    id: "mk-en-b03-41",
    topic: "article",
    difficulty: "C",
    text: "___ retired plumber has asked me to paint his ___ portrait.",
    options: ["-, -", "A, a", "A, the", "A, -"],
    correct: [3],
    explanation:
      "В первом пропуске человек упоминается впервые и слушателю неизвестен, поэтому нужен неопределённый " +
      "артикль: a retired plumber. Во втором пропуске место определителя уже занято притяжательным " +
      "местоимением his, а притяжательное местоимение и артикль в английском не могут стоять рядом, " +
      "значит правильно his portrait без всякого артикля. Варианты a и the после his невозможны именно " +
      "по этой причине. Полностью нулевой первый вариант тоже не подходит, ведь исчисляемое существительное " +
      "plumber в единственном числе обязательно требует определителя.",
  },
  {
    id: "mk-en-b03-42",
    topic: "non-finite",
    difficulty: "C",
    text: "Don't make me ___ hurt you.",
    options: ["over", "at", "to", "-"],
    correct: [3],
    explanation:
      "Глагол make в значении заставить строит конструкцию с дополнением и инфинитивом без частицы to: " +
      "make somebody do something, поэтому правильно make me hurt you, то есть пропуск остаётся пустым. " +
      "Частица to появилась бы только в страдательном залоге, где говорят was made to do something, но " +
      "здесь залог действительный. Предлоги over и at к глаголу make в этом значении вообще не " +
      "присоединяются и разрывают связь между дополнением me и действием hurt.",
  },
  {
    id: "mk-en-b03-43",
    topic: "preposition",
    difficulty: "A",
    text: "She usually goes to work ___ car.",
    options: ["in", "on", "by", "with"],
    correct: [2],
    explanation:
      "Способ передвижения обозначается предлогом by, причём название транспорта ставится без артикля: by " +
      "car, by bus, by train. Предлог in с машиной возможен, но только с определителем, как in her car или " +
      "in the car, и тогда речь идёт о конкретном автомобиле, а не о способе добираться. Предлог on " +
      "закреплён за транспортом, на который садятся сверху, например on a bike или on horseback. Предлог " +
      "with вводит инструмент или спутника, а машина здесь не орудие в этом смысле.",
  },
  {
    id: "mk-en-b03-44",
    topic: "numeral",
    difficulty: "B",
    text: "My final exam was on 16.06.1993. How is the date read?",
    options: [
      "sixteenth of June, nineteen ninety-three",
      "sixtieth of June, ninety ninety-three",
      "sixteenth of July, ninety ninety-three",
      "sixteenth of June, ninety ninety-three",
    ],
    correct: [0],
    explanation:
      "Число месяца читается порядковым числительным, поэтому 16 это sixteenth, а не количественное " +
      "sixteen и тем более не sixtieth, что означало бы шестидесятое. В записи 16.06 второе число это " +
      "номер месяца, а шестой месяц это June, значит July в третьем варианте неверен. Год до двухтысячного " +
      "читается двумя парами цифр, 19 и 93, то есть nineteen ninety-three, а форма ninety ninety-three " +
      "искажает первую пару и даёт бессмысленное 90 93.",
  },
  {
    id: "mk-en-b03-45",
    topic: "verb",
    difficulty: "C",
    text: "You ___ at all since I ___ you last time.",
    options: [
      "didn't change/have seen",
      "haven't been changing/had seen",
      "haven't changed/saw",
      "hadn't changed/saw",
    ],
    correct: [2],
    explanation:
      "Союз since делит предложение на две части с разными временами: главная часть описывает состояние, " +
      "которое длится от прошлого до сейчас, и требует настоящего совершённого haven't changed, а " +
      "придаточная называет точку отсчёта в прошлом и требует простого прошедшего saw. Пара " +
      "didn't change и have seen переставляет времена местами и разрывает эту связь. Вариант haven't been " +
      "changing навязывает значение процесса, тогда как речь идёт о результате, об отсутствии перемен. " +
      "Форма hadn't changed потребовала бы ещё более раннего события в прошлом, которого в предложении нет.",
  },
  {
    id: "mk-en-b03-46",
    topic: "numeral",
    difficulty: "B",
    text: "Bob was in his ___ when he met Anna Maria.",
    options: ["fiftieth", "fifty", "fifties", "fifty's"],
    correct: [2],
    explanation:
      "Возраст в пределах десятилетия обозначается устойчивой формулой be in one's fifties, то есть быть " +
      "человеком в возрасте от пятидесяти до пятидесяти девяти, и здесь нужна именно форма множественного " +
      "числа fifties. Порядковое fiftieth назвало бы пятидесятый по счёту предмет и с местоимением his в " +
      "этой конструкции не работает. Количественное fifty могло бы стоять лишь в другой модели, he was " +
      "fifty, без предлога in и без притяжательного местоимения. Написание fifty's добавляет " +
      "притяжательный апостроф, который в названии десятилетия не используется.",
  },
  {
    id: "mk-en-b03-47",
    topic: "verb",
    difficulty: "A",
    text: "The water ___. Can you turn it off?",
    options: ["is boiling", "was boiling", "has boiling", "boils"],
    correct: [0],
    explanation:
      "Просьба выключить чайник прямо сейчас показывает, что вода кипит в момент речи, а действие в " +
      "текущий момент передаётся настоящим длительным is boiling. Простое настоящее boils называло бы " +
      "общее свойство, например то, что вода кипит при ста градусах, и к сиюминутной ситуации не " +
      "относится. Прошедшее was boiling увело бы событие в прошлое, тогда как выключать надо сейчас. Форма " +
      "has boiling вообще не существует: после has требуется причастие прошедшего времени boiled, а не " +
      "форма на ing.",
  },
  {
    id: "mk-en-b03-48",
    topic: "non-finite",
    difficulty: "C",
    text: "The issue is not worth ___.",
    options: ["discussed", "having discussed", "being discussed", "discussing"],
    correct: [3],
    explanation:
      "После слова worth всегда идёт простой герундий, причём в действительной форме, даже когда по смыслу " +
      "подлежащее испытывает действие: правильно the issue is not worth discussing. Форма being discussed " +
      "выглядит логичнее по залогу, но в этой конструкции она не употребляется, английский обходится " +
      "активным герундием. Перфектный герундий having discussed указывал бы на действие, предшествующее " +
      "главному, а тут никакой предшествующей ситуации нет. Причастие discussed после worth стоять не " +
      "может, потому что worth ведёт себя как предлог и требует именно формы на ing.",
  },
  {
    id: "mk-en-b03-49",
    topic: "article",
    difficulty: "B",
    text: "___ Yessil river becomes beautiful in summer.",
    options: ["-", "an", "the", "a"],
    correct: [2],
    explanation:
      "Названия рек в английском всегда употребляются с определённым артиклем, поэтому нужно the Yessil " +
      "river, как и the Thames или the Volga. Нулевой артикль характерен для других географических имён, " +
      "например для названий озёр и большинства гор, но не для рек. Неопределённый артикль a или an " +
      "невозможен, потому что река единственная в своём роде и не выделяется из ряда однотипных объектов. " +
      "Форма an к тому же не подходит фонетически, ведь следующее слово начинается с согласного звука.",
  },
  {
    id: "mk-en-b03-50",
    topic: "preposition",
    difficulty: "B",
    text: "I am going out. I'll be back ___ an hour.",
    options: ["-", "on", "at", "in"],
    correct: [3],
    explanation:
      "Когда речь идёт о будущем и указан отрезок, по истечении которого произойдёт действие, ставится " +
      "предлог in: I'll be back in an hour означает вернусь через час. Предлог at указывает на точный " +
      "момент, например at five o'clock, а не на длительность ожидания. Предлог on закреплён за датами и " +
      "днями недели и с существительным hour не сочетается. Без предлога фраза тоже не строится: сочетание " +
      "an hour само по себе не может выражать значение через час, для этого и нужен показатель in.",
  },
  {
    id: "mk-en-b03-51",
    topic: "pronoun",
    difficulty: "B",
    text: "Hi Julia, ___ is Tim. Is your dad at home?",
    options: ["there's", "this", "there", "these"],
    correct: [1],
    explanation:
      "При разговоре по телефону говорящий представляется формулой this is плюс имя, поэтому верно this is " +
      "Tim. Оборот there is сообщает о наличии чего-то в определённом месте и для представления себя не " +
      "используется. Форма these указывает на несколько предметов и не согласуется с глаголом is в " +
      "единственном числе. Сокращение there's повторяет ту же ошибку значения, что и there is, и вдобавок " +
      "дало бы в предложении второй глагол-связку.",
  },
  {
    id: "mk-en-b03-52",
    topic: "adjective",
    difficulty: "C",
    text: "You are ___ team I've ever worked with. I like your job!",
    options: ["more friendly", "the most friendliest", "most friendly", "the friendliest"],
    correct: [3],
    explanation:
      "Придаточное с I've ever worked with задаёт сравнение со всем прошлым опытом, а такое сравнение " +
      "требует превосходной степени с определённым артиклем the. Двусложное прилагательное friendly " +
      "оканчивается на y и образует степени через суффиксы, поэтому превосходная форма это the " +
      "friendliest. Вариант the most friendliest содержит двойное образование степени, суффикс est и " +
      "слово most одновременно, чего английский не допускает. Форма more friendly сравнивает лишь с одним " +
      "объектом и с оборотом ever не сочетается, а most friendly без артикля читается как весьма дружелюбный, " +
      "то есть выражает высокую степень качества, а не первенство среди всех.",
  },
  {
    id: "mk-en-b03-53",
    topic: "reading",
    difficulty: "A",
    passage: { title: "The Empire State Building", value: EMPIRE },
    text: "The Empire State Building has been featured in more than how many films?",
    options: ["86", "90", "102", "193"],
    correct: [1],
    explanation:
      "Во втором абзаце сказано, что здание появилось в более чем 90 популярных фильмах, и оборот over 90 " +
      "прямо отвечает формулировке вопроса more than how many. Число 86 в тексте есть, но относится к " +
      "этажу, на котором находится первая смотровая площадка. Число 102 обозначает количество этажей " +
      "здания и этаж верхней обсерватории, а 193 в тексте не встречается вовсе.",
  },
  {
    id: "mk-en-b03-54",
    topic: "reading",
    difficulty: "A",
    passage: { title: "The Empire State Building", value: EMPIRE },
    text:
      "However, many tourists simply come to New York City for the sightseeing. " +
      "One of the most visited landmarks in New York City is the ___.",
    options: [
      "Empire State Building",
      "Brooklyn Bridge",
      "Times Square",
      "Statue of Liberty",
    ],
    correct: [0],
    explanation:
      "Задание проверяет умение восстановить пропуск по точной фразе из текста, а в первом абзаце это " +
      "предложение завершается словами the Empire State Building. Остальные три названия в тексте тоже " +
      "есть, но в другом месте и в другой роли: они перечислены в последнем абзаце как объекты, которые " +
      "Мэтью разглядел со смотровой площадки. Ни Бруклинский мост, ни Таймс-сквер, ни статуя Свободы не " +
      "названы в тексте самой посещаемой достопримечательностью.",
  },
  {
    id: "mk-en-b03-55",
    topic: "reading",
    difficulty: "B",
    passage: { title: "The Empire State Building", value: EMPIRE },
    text: "Why was Matthew excited for his trip to the Empire State Building?",
    options: [
      "He had never been to a city before.",
      "He received a free ticket to the rooftop observatories.",
      "He appreciates architecture and historical buildings.",
      "He works as a photographer of city skylines.",
    ],
    correct: [2],
    explanation:
      "Причина названа в третьем абзаце прямо после союза because: Мэтью увлекается историческими зданиями " +
      "и всегда ценил архитектурный замысел. Вариант о бесплатном билете противоречит тексту, где сказано, " +
      "что он купил билет. Про то, что он никогда раньше не бывал в городе, в тексте не говорится ни " +
      "слова. Фотографии он действительно делал, но это следствие поездки, а не его профессия, поэтому " +
      "утверждение о работе фотографом текстом не подтверждается.",
  },
  {
    id: "mk-en-b03-56",
    topic: "reading",
    difficulty: "A",
    passage: { title: "The Empire State Building", value: EMPIRE },
    text:
      "The Empire State Building, constructed in 1931, is a ___ skyscraper, the ninth highest " +
      "building in the world, and the fourth tallest structure in the United States.",
    options: ["101-story", "102-story", "103-story", "104-story"],
    correct: [1],
    explanation:
      "Второй абзац дословно называет здание 102-story skyscraper, то есть небоскрёбом в 102 этажа, и это " +
      "число подтверждается ниже упоминанием обсерватории на 102-м этаже. Остальные варианты отличаются на " +
      "один-два этажа и в тексте не встречаются. Задания такого типа проверяют внимание к точной цифре, " +
      "поэтому ориентироваться нужно только на прямое совпадение с исходной фразой.",
  },
  {
    id: "mk-en-b03-57",
    topic: "reading",
    difficulty: "A",
    passage: { title: "The Empire State Building", value: EMPIRE },
    text: "How did Matthew arrive to the top of the building?",
    options: [
      "He walked up the stairs.",
      "He rode a helicopter.",
      "He climbed the building.",
      "He took an elevator.",
    ],
    correct: [3],
    explanation:
      "В третьем абзаце сказано, что билет включал поездку на лифте с остановками на двух смотровых " +
      "площадках, значит наверх Мэтью поднялся именно на лифте. Ни лестница, ни вертолёт в тексте не " +
      "упоминаются вовсе. Вариант о том, что он взбирался по стене здания, противоречит здравому смыслу и " +
      "не имеет опоры в тексте, где чётко назван elevator ride.",
  },
  {
    id: "mk-en-b03-58",
    topic: "reading",
    difficulty: "B",
    passage: { title: "The Empire State Building", value: EMPIRE },
    text: "Which is not a landmark that Matthew clearly viewed from the observatory?",
    options: [
      "The Statue of Liberty",
      "Times Square",
      "The Brooklyn Bridge",
      "JFK International Airport",
    ],
    correct: [3],
    explanation:
      "Вопрос задан с отрицанием, поэтому искать нужно объект, которого в перечне нет. Последнее " +
      "предложение текста называет Центральный парк, Бруклинский мост, Таймс-сквер и статую Свободы, а " +
      "аэропорт имени Кеннеди в этом списке отсутствует. Три остальных варианта прямо перечислены в " +
      "тексте, поэтому ответом быть не могут.",
  },
  {
    id: "mk-en-b03-59",
    topic: "reading",
    difficulty: "A",
    passage: { title: "The Empire State Building", value: EMPIRE },
    text:
      "Matthew purchased a ticket that granted him access to beautiful ___ degree views of the city.",
    options: ["270", "180", "300", "360"],
    correct: [3],
    explanation:
      "В третьем абзаце сказано о доступе к 360-degree views, то есть к круговому обзору города. Число 360 " +
      "здесь не случайно: полный круг составляет именно 360 градусов, поэтому обзор со всех сторон " +
      "обозначается этой цифрой. Варианты 180, 270 и 300 в тексте не встречаются и описывали бы лишь " +
      "частичный сектор обзора.",
  },
  {
    id: "mk-en-b03-60",
    topic: "reading",
    difficulty: "B",
    passage: { title: "The Empire State Building", value: EMPIRE },
    text: "Which is not a popular reason that tourists come to New York City?",
    options: ["Sightseeing", "Watching a performance", "Relaxing on its beaches", "Shopping"],
    correct: [2],
    explanation:
      "Первый абзац перечисляет причины приезда в Нью-Йорк: посмотреть шоу, сходить в художественные " +
      "музеи, сделать покупки и осмотреть достопримечательности. Отдых на пляжах в этом списке не " +
      "упомянут, поэтому именно он и есть исключение, которое требуется найти. Пункт watching a " +
      "performance это перефразированное come to see a show, а sightseeing и shopping названы в тексте " +
      "дословно.",
  },
  {
    id: "mk-en-b03-61",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Welcome to Filmworld Cinemas", value: FILMWORLD },
    text: "Where is the director of Streetmatch from?",
    options: ["France", "Sea", "the USA", "Ducroix"],
    correct: [0],
    explanation:
      "В описании третьего зала режиссёр назван French director Jean-Luc Ducroix, а прилагательное French " +
      "указывает на страну происхождения, то есть на Францию. Вариант the USA возникает из невнимательного " +
      "чтения: американцами в тексте названы два подростка, герои фильма, а не режиссёр. Слово Ducroix это " +
      "фамилия самого режиссёра, а не название страны, а Sea вообще не имеет отношения к этому фильму и " +
      "перенесено из описания круизного лайнера в другом зале.",
  },
  {
    id: "mk-en-b03-62",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Welcome to Filmworld Cinemas", value: FILMWORLD },
    text: "If you arrive at the cinema at 7.10, when is the next film?",
    options: ["7.00", "8.45", "7.45", "6.00"],
    correct: [2],
    explanation:
      "Нужно собрать все сеансы четырёх залов и найти ближайший, который начнётся позже 7.10. Сеансы 7.00 " +
      "и 6.00 к этому времени уже начались, поэтому подойти не могут. Из оставшихся ближайшие по времени " +
      "это 7.45 во втором зале и 8.30 в третьем, а также 8.45 в четвёртом, и самый ранний из них 7.45. " +
      "Именно поэтому вариант 8.45 неверен: он тоже в будущем, но не ближайший.",
  },
  {
    id: "mk-en-b03-63",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Welcome to Filmworld Cinemas", value: FILMWORLD },
    text: "Which film tells a story of winning a competition despite any obstacles?",
    options: [
      "Streetmatch - The Return",
      "Lulu - It's A Dog's Life",
      "Don't Open The Door!",
      "Ships In The Night",
    ],
    correct: [0],
    explanation:
      "В описании фильма Streetmatch сказано, что подростки после большого труда и множества проблем " +
      "выставляют свою машину на соревнование, и слова competition и after a lot of problems прямо " +
      "соответствуют формулировке вопроса о победе вопреки препятствиям. В Lulu речь идёт о собаке, " +
      "которая ищет славу в большом городе, а не о состязании. Фильм Don't Open The Door рассказывает об " +
      "исчезновении студентов в горах, а Ships In The Night о личных отношениях героев на круизном " +
      "лайнере.",
  },
  {
    id: "mk-en-b03-64",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Welcome to Filmworld Cinemas", value: FILMWORLD },
    text: "If you're 13 years old, what is the film fare for you?",
    options: ["3.00 euro", "3.50 euro", "5.00 euro", "10.15 euro"],
    correct: [1],
    explanation:
      "В объявлении сказано, что билет стоит 5.00 евро для взрослых и 3.50 евро для детей младше " +
      "четырнадцати лет. Тринадцатилетний подходит под условие under 14, поэтому платит 3.50. Цена 5.00 " +
      "относится к взрослым и была бы верна только с четырнадцати лет. Сумма 3.00 в тексте не встречается, " +
      "а число 10.15 это вовсе не цена, а время начала одного из сеансов.",
  },
  {
    id: "mk-en-b03-65",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Welcome to Filmworld Cinemas", value: FILMWORLD },
    text: "Which film has a series of the funniest moments?",
    options: [
      "Ships In The Night",
      "Don't Open The Door!",
      "Lulu - It's A Dog's Life",
      "Streetmatch - The Return",
    ],
    correct: [2],
    explanation:
      "Ключевое слово в вопросе это funniest, а в описании четвёртого зала стоит выражение a series of " +
      "hilarious events, то есть череда уморительных событий, и там же сказано, что это развлечение для " +
      "всей семьи. Прилагательное hilarious и есть синоним слова funny в превосходной оценке. Остальные " +
      "три фильма описаны как страшный, романтический и соревновательный, и слов со значением смешного в " +
      "их аннотациях нет.",
  },
  {
    id: "mk-en-b03-66",
    topic: "reading",
    difficulty: "C",
    passage: { title: "Welcome to Filmworld Cinemas", value: FILMWORLD },
    text: "Who was left by the second half?",
    options: ["Maggie", "Tony", "Ducroix", "Lulu"],
    correct: [1],
    explanation:
      "Оборот second half здесь означает вторую половинку, то есть партнёра в отношениях, а глагол be left " +
      "указывает на того, кого бросили. В описании фильма Ships In The Night сказано, что девушка Тони " +
      "ушла от него, чтобы выйти замуж за капитана, значит брошенным оказался именно Тони. Мэгги в том же " +
      "фильме рассталась с молодым человеком сама, то есть была не оставленной, а инициатором разрыва. " +
      "Ducroix это режиссёр другого фильма, а Lulu собака, и к любовным линиям они отношения не имеют.",
  },
  {
    id: "mk-en-b03-67",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Welcome to Filmworld Cinemas", value: FILMWORLD },
    text: "Which film's genre is Romantic drama?",
    options: [
      "Don't Open The Door!",
      "Lulu - It's A Dog's Life",
      "Streetmatch - The Return",
      "Ships In The Night",
    ],
    correct: [3],
    explanation:
      "Жанр в объявлении прямо не назван, его нужно определить по сюжету. В аннотации к Ships In The Night " +
      "речь идёт о расставании, о неразделённых чувствах и о том, как двое вместе справляются с бедой, а " +
      "это признаки романтической драмы. Don't Open The Door строится на исчезновении людей и страхе, Lulu " +
      "это семейная комедия про собаку, а Streetmatch рассказывает о подготовке машины к состязанию.",
  },
  {
    id: "mk-en-b03-68",
    topic: "reading",
    difficulty: "C",
    passage: { title: "Welcome to Filmworld Cinemas", value: FILMWORLD },
    text: "What is the genre of the film: Don't Open the Door!?",
    options: ["comedy", "drama", "adventure", "animation"],
    correct: [2],
    explanation:
      "Сюжет о студентах, которые снимают дом в горах и один за другим исчезают, строится на загадке и " +
      "опасном приключении, и из четырёх предложенных ярлыков ближе всего к нему adventure. Комедией " +
      "фильм быть не может: в аннотации нет ни одного слова со значением смешного, в отличие от описания " +
      "Lulu. Анимация тоже исключена, поскольку героями названы живые студенты, а не рисованные " +
      "персонажи. Драма подразумевала бы упор на переживания героев, тогда как здесь на первом плане " +
      "тревога и вопрос о том, кто находится снаружи дома.",
  },
  {
    id: "mk-en-b03-69",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Language learning", value: LANGUAGE_LEARNING },
    text: "Participants' ___ were rated in the test.",
    options: ["communication aptitude", "vocabulary", "language level", "grammar skills"],
    correct: [3],
    explanation:
      "Во втором абзаце сказано, что исследование опиралось на десятиминутный онлайн-тест по грамматике и " +
      "что учёные измеряли именно grammatical ability участников. Значит проверяли навыки владения " +
      "грамматикой. Словарный запас в тексте не измерялся, о нём вообще не говорится. Общий уровень языка " +
      "и коммуникативные способности звучат правдоподобно, но текст сужает предмет проверки до " +
      "грамматических правил, которые чаще всего сбивают с толку неносителей.",
  },
  {
    id: "mk-en-b03-70",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Language learning", value: LANGUAGE_LEARNING },
    text: "Children remain adept at learning grammar until ___.",
    options: ["16 or 17", "15 or 16", "17 or 18", "18 or 19"],
    correct: [2],
    explanation:
      "В первом абзаце прямо сказано, что дети вплоть до 17 или 18 лет сохраняют способность легко " +
      "усваивать грамматику. Эта же граница повторяется в конце текста в словах Джоша Тененбаума про " +
      "рубеж after 17 or 18. Остальные пары чисел смещают возраст на год-два и в тексте не встречаются.",
  },
  {
    id: "mk-en-b03-71",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Language learning", value: LANGUAGE_LEARNING },
    text: "Children are really capable of learning grammar until their late ___.",
    options: ["teens", "forties", "twenties", "thirties"],
    correct: [0],
    explanation:
      "В тексте есть выражение beyond their late teens, то есть после позднего подросткового возраста, и " +
      "именно там способность к языку начинает снижаться. Слово teens охватывает годы с тринадцати до " +
      "девятнадцати, что согласуется с названной в тексте границей в 17 или 18 лет. Варианты twenties, " +
      "thirties и forties отодвигают порог на целые десятилетия и прямо противоречат главному выводу " +
      "исследования.",
  },
  {
    id: "mk-en-b03-72",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Language learning", value: LANGUAGE_LEARNING },
    text: "___ that is/are likely to confuse non-native speakers was tested.",
    options: ["Grammar", "Slang", "Prepositions", "English"],
    correct: [0],
    explanation:
      "Во втором абзаце сказано, что профессор Хартсхорн сосредоточился на грамматических правилах, " +
      "которые чаще всего сбивают с толку неносителей языка, поэтому проверялась именно грамматика. " +
      "Подсказывает и форма глагола was: она единственного числа и согласуется со словом grammar, а не с " +
      "множественным prepositions. Сленг в тексте не упоминается вообще, а слово English слишком широко и " +
      "не отражает предмет измерения.",
  },
  {
    id: "mk-en-b03-73",
    topic: "reading",
    difficulty: "C",
    passage: { title: "Language learning", value: LANGUAGE_LEARNING },
    text: "The researchers described a(an) ___ period in language learning.",
    options: ["advantageous", "valuable", "breaking", "grave"],
    correct: [0],
    explanation:
      "Исследователи говорят о critical period, то есть о том окне, пока способность к языку ещё высока, а " +
      "после него она снижается, значит этот отрезок выгоден для обучения, и по смыслу подходит " +
      "прилагательное advantageous. Слово grave означает тяжёлый и мрачный и придаёт ситуации " +
      "отрицательную окраску, которой в тексте нет. Прилагательное breaking в таком сочетании не " +
      "употребляется и значения переломного периода не передаёт. Вариант valuable по смыслу близок, но " +
      "описывает ценность самого отрезка, а не преимущество, которое он даёт учащемуся, и в ключе " +
      "сборника отмечен как неверный.",
  },
  {
    id: "mk-en-b03-74",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Language learning", value: LANGUAGE_LEARNING },
    text: "The research conducted in Massachusetts Institute of Technology involved",
    options: [
      "new methodology of language learning",
      "a lot of paper work",
      "scientists all over the world",
      "using Internet",
    ],
    correct: [3],
    explanation:
      "Второй абзац сообщает, что данные собирали через десятиминутный онлайн-тест, в котором приняли " +
      "участие более 670 тысяч человек, а слово online и означает работу через интернет. Бумажной работы " +
      "текст не упоминает, наоборот, весь сбор данных шёл в сети. Новая методика преподавания в статье не " +
      "обсуждается, речь идёт об измерении, а не об обучении. Про участие учёных со всего мира тоже не " +
      "сказано: международными были испытуемые, а не исследователи.",
  },
  {
    id: "mk-en-b03-75",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Language learning", value: LANGUAGE_LEARNING },
    text:
      "After 17 or 18, according to Joshua Hartshorne, people are ___ to acquire true proficiency " +
      "in a new language.",
    options: ["interested", "lucky", "less likely", "happy"],
    correct: [2],
    explanation:
      "Основная мысль текста в том, что после позднего подросткового возраста способность к языку " +
      "снижается и достичь уровня носителя становится труднее, а это и передаёт оборот less likely, то " +
      "есть менее вероятно. Слова lucky и happy описывают эмоции и удачу, а не вероятность результата, и с " +
      "инфинитивом в этом значении здесь не сочетаются. Вариант interested сместил бы разговор на желание " +
      "учиться, тогда как исследование говорит именно о возможности достичь высокого уровня.",
  },
  {
    id: "mk-en-b03-76",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Language learning", value: LANGUAGE_LEARNING },
    text: "Adults don't learn a new language because ___.",
    options: [
      "it's too expensive",
      "they lack motivation",
      "they lack desire",
      "they are too busy",
    ],
    correct: [3],
    explanation:
      "Объяснение даёт Джош Тененбаум в конце текста: после 17 или 18 лет человек уходит из дома, работает " +
      "полный день или становится студентом узкой специальности, то есть попросту слишком занят. Прямо " +
      "перед этим стоит фраза people simply might be too busy, которая и есть ответ. Про дороговизну " +
      "обучения в статье нет ни слова. Недостаток мотивации и желания звучит правдоподобно, но текст " +
      "объясняет спад не нежеланием, а нехваткой времени.",
  },
  {
    id: "mk-en-b03-77",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Sixteen - What now?", value: SIXTEEN },
    text: "Which school has the highest pass rate?",
    options: [
      "Northacre College",
      "Milldown College",
      "Knowle Grammar School",
      "St. Leopold's School",
    ],
    correct: [3],
    explanation:
      "В третьем абзаце сказано, что у St. Leopold's School лучший процент сдачи среди всех школ округа, " +
      "и выражение the best pass rate прямо соответствует формулировке вопроса. Про Knowle Grammar School " +
      "говорится другое: там нет платы за обучение и хорошее преподавание, но о лучших результатах речи " +
      "не идёт. Northacre College и Milldown College описаны через набор специальностей, а не через " +
      "успеваемость.",
  },
  {
    id: "mk-en-b03-78",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Sixteen - What now?", value: SIXTEEN },
    text: "Which educational establishment is oriented for male students only?",
    options: [
      "Wyle River Academy",
      "Milldown College",
      "Knowle Grammar School",
      "St. Leopold's School",
    ],
    correct: [2],
    explanation:
      "Про Knowle Grammar School сказано, что это школа для мальчиков в возрасте от 11 до 16 лет, и слово " +
      "boys' school отвечает условию male only. Важно дочитать предложение до конца: с 16 до 18 лет школа " +
      "становится смешанной, но раздельное обучение всё же есть только здесь. Ни у Wyle River Academy, ни " +
      "у Milldown College, ни у St. Leopold's School никаких ограничений по полу в тексте не указано.",
  },
  {
    id: "mk-en-b03-79",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Sixteen - What now?", value: SIXTEEN },
    text: "How many years does the high school take after 16?",
    options: ["half a year", "a year", "one year certificate", "two years"],
    correct: [3],
    explanation:
      "Во втором абзаце сказано, что ради поступления в университет нужно остаться в школе ещё на два " +
      "года, то есть another two years. Вариант one year certificate относится к совсем другому месту в " +
      "тексте: так называется годичная профессиональная программа в Northacre College, а не срок обучения " +
      "в старшей школе. Половина года и один год в связи со школой в тексте не упоминаются.",
  },
  {
    id: "mk-en-b03-80",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Sixteen - What now?", value: SIXTEEN },
    text: "Where should you take an exam to get in?",
    options: [
      "Knowle Grammar School",
      "Milldown College",
      "Northacre College",
      "St. Leopold's School",
    ],
    correct: [0],
    explanation:
      "Про Knowle Grammar School прямо сказано, что школа отбирает учеников и придётся сдать экзамен, " +
      "чтобы туда попасть. Про St. Leopold's School упомянут другой барьер, высокая стоимость обучения, а " +
      "не вступительное испытание. Northacre College и Milldown College описаны как места с широким " +
      "выбором курсов, и никаких условий приёма для них в тексте не названо.",
  },
  {
    id: "mk-en-b03-81",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Sixteen - What now?", value: SIXTEEN },
    text: "Where can you find more optional specializations?",
    options: [
      "Milldown College",
      "Knowle Grammar School",
      "Northacre College",
      "Wyle River Academy",
    ],
    correct: [2],
    explanation:
      "Northacre College упомянут в тексте дважды и оба раза с указанием на широту выбора: там изучают " +
      "столярное дело, искусство, текстиль и многое другое, а кроме того предлагается wide range of " +
      "vocational qualifications с годичными и двухгодичными программами. Wyle River Academy, наоборот, " +
      "специализируется узко, только на деловых предметах. Milldown College тоже ограничен одной областью, " +
      "работой на открытом воздухе, а Knowle Grammar School это обычная академическая школа.",
  },
  {
    id: "mk-en-b03-82",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Sixteen - What now?", value: SIXTEEN },
    text: "What is Northacre College majoring in?",
    options: ["business", "art", "agriculture", "science"],
    correct: [1],
    explanation:
      "Northacre College вводится в тексте фразой о тех, кто предпочитает искусство, и там перечислены " +
      "столярное дело, рисование и работа с тканью, то есть творческие направления. Деловые предметы " +
      "закреплены за Wyle River Academy, поэтому вариант business относится к другой школе. Сельское " +
      "хозяйство и работа с животными это профиль Milldown College. Естественные науки названы среди " +
      "предметов St. Leopold's School, а не Northacre College.",
  },
  {
    id: "mk-en-b03-83",
    topic: "reading",
    difficulty: "C",
    passage: { title: "Sixteen - What now?", value: SIXTEEN },
    text:
      "If you want to know more information about employers and get on-the-job training, " +
      "you must go to this place.",
    options: [
      "Wyle River Academy",
      "Milldown College",
      "Northacre College",
      "St. Leopold's School",
    ],
    correct: [2],
    explanation:
      "Последний абзац говорит о работе по договору с компанией, где обучают прямо на месте, и завершается " +
      "указанием, где узнать подробности: на ярмарке вакансий 26 мая в Northacre College. Ответ требует " +
      "связать два предложения, потому что название колледжа стоит не рядом со словами on-the-job " +
      "training, а в последней строке. Остальные три учебных заведения в этом абзаце не упоминаются вовсе, " +
      "они описаны выше и в другой связи.",
  },
  {
    id: "mk-en-b03-84",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Sixteen - What now?", value: SIXTEEN },
    text: "This is the best place to study Economics and Management.",
    options: [
      "St. Leopold's School",
      "Milldown College",
      "Wyle River Academy",
      "Northacre College",
    ],
    correct: [2],
    explanation:
      "Про Wyle River Academy сказано, что школа специализируется на таких предметах, как Business " +
      "Studies, Management и Economics, и оба названных в вопросе предмета совпадают дословно. Northacre " +
      "College отвечает за искусство и рабочие специальности, Milldown College за сельское хозяйство и " +
      "работу с землёй. St. Leopold's School предлагает гуманитарные и естественные науки, но управление и " +
      "экономика среди её направлений не названы.",
  },
  {
    id: "mk-en-b03-85",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Halloween", value: HALLOWEEN },
    text: "When does Halloween take place?",
    options: ["14 February", "25 December", "31 October", "Eight weeks before Christmas"],
    correct: [2],
    explanation:
      "Первое предложение текста называет точную дату: праздник отмечают в Америке 31 октября каждого " +
      "года. Даты 14 февраля и 25 декабря относятся к другим праздникам и в тексте не встречаются. " +
      "Формулировка про восемь недель до Рождества выглядит как вычисление, но текст задаёт дату прямо, а " +
      "не через отсчёт, и восемь недель до 25 декабря дали бы конец октября лишь приблизительно.",
  },
  {
    id: "mk-en-b03-86",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Halloween", value: HALLOWEEN },
    text: "What day of the week does Halloween fall on?",
    options: [
      "Halloween is always on Saturday",
      "Halloween is always on Friday",
      "Halloween is always on Monday",
      "Halloween's day of the week varies by year",
    ],
    correct: [3],
    explanation:
      "В первом предложении есть оговорка regardless of what day of the week this date falls on, то есть " +
      "праздник привязан к числу, а не ко дню недели. Значит день недели каждый год разный, и верен " +
      "последний вариант. Утверждения про постоянную субботу, пятницу или понедельник прямо противоречат " +
      "этой оговорке, ведь фиксированная дата 31 октября каждый год приходится на новый день недели.",
  },
  {
    id: "mk-en-b03-87",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Halloween", value: HALLOWEEN },
    text: "How do most children celebrate Halloween?",
    options: [
      "By dressing in costume and trick-or-treating",
      "By studying schoolwork",
      "By hanging ornaments on a Christmas tree",
      "By producing candies",
    ],
    correct: [0],
    explanation:
      "Последний абзац сообщает, что подавляющее большинство детей наряжается в костюмы и ходит от двери к " +
      "двери за сладостями, и этот обычай называется trick or treat. Оба элемента верного варианта взяты " +
      "прямо оттуда. Украшение ёлки относится к Рождеству, а не к Хэллоуину. Дети в тексте сладости " +
      "получают, а не производят, и об уроках речи не идёт вовсе.",
  },
  {
    id: "mk-en-b03-88",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Halloween", value: HALLOWEEN },
    text:
      "Halloween (also referred to as All Hollows' Eve) is a holiday that's celebrated in America " +
      "on ___ of each year.",
    options: ["31 September", "11 October", "31 October", "21 September"],
    correct: [2],
    explanation:
      "Пропуск восстанавливается дословно по первому предложению текста, где стоит 31 October. Вариант 31 " +
      "September невозможен даже вне текста: в сентябре тридцать дней, тридцать первого числа в нём не " +
      "бывает. Даты 11 октября и 21 сентября в тексте не встречаются и подставлены как отвлекающие.",
  },
  {
    id: "mk-en-b03-89",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Halloween", value: HALLOWEEN },
    text:
      "Before Halloween, many individuals carve a design into an orange-colored ___, " +
      "or a solid, durable vegetable.",
    options: ["apple", "cabbage", "tomato", "pumpkin"],
    correct: [3],
    explanation:
      "Второй абзац прямо называет тыкву: узор вырезают в оранжевой тыкве, а затем ставят внутрь свечу и " +
      "получают фонарь Джека. Ни яблоко, ни томат не подходят и по смыслу, ведь текст уточняет, что это " +
      "плотный и прочный овощ, из которого можно вырезать фигуру. Капуста тоже овощ, но она не оранжевая " +
      "и в тексте не упоминается.",
  },
  {
    id: "mk-en-b03-90",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Halloween", value: HALLOWEEN },
    text: "One can expect to see all of the following types of decorations on Halloween except:",
    options: [
      "Spiders and other bugs",
      "Snowflakes and ribbons",
      "Gravestones and zombies",
      "Vampires",
    ],
    correct: [1],
    explanation:
      "Вопрос построен на исключении, поэтому нужен пункт, которого в тексте нет. Третий абзац перечисляет " +
      "вампиров, призраков, оборотней, зомби, а также насекомых, пауков, паутину и надгробия, и три " +
      "варианта из четырёх полностью укладываются в этот список. Снежинки и ленты в нём отсутствуют, они " +
      "принадлежат зимним праздникам и не относятся к жутковатому оформлению Хэллоуина.",
  },
  {
    id: "mk-en-b03-91",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Halloween", value: HALLOWEEN },
    text: "Some adults celebrate Halloween in which of the following ways?",
    options: [
      "Trick-or-treating",
      "Going to bed early",
      "Attending Halloween parties",
      "Buying Christmas gifts",
    ],
    correct: [2],
    explanation:
      "Последний абзац разделяет два способа праздновать: взрослые обычно ходят на вечеринки, а дети " +
      "наряжаются и просят сладости. Значит вариант trick-or-treating описывает детей и в ответе не " +
      "годится. Покупка рождественских подарков относится к другому празднику, а ранний отход ко сну в " +
      "тексте не упоминается и противоречит духу описания.",
  },
  {
    id: "mk-en-b03-92",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Halloween", value: HALLOWEEN },
    text:
      "Before Halloween, many individuals carve a design into an ___ - colored pumpkin, " +
      "or a solid, durable vegetable.",
    options: ["red", "black", "orange", "blue"],
    correct: [2],
    explanation:
      "Во втором абзаце тыква названа orange-colored, то есть оранжевой, и это единственный цвет, " +
      "приписанный ей в тексте. Чёрный действительно связан с Хэллоуином в целом, но к тыкве в этом " +
      "предложении не относится, поэтому выбирать его нельзя. Красный и синий в тексте не встречаются " +
      "вовсе.",
  },
  {
    id: "mk-en-b03-93",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Thanksgiving", value: THANKSGIVING },
    text: "When is Thanksgiving celebrated in the US?",
    options: [
      "November 25",
      "Four weeks before Christmas",
      "Throughout November",
      "The Fourth Thursday in November",
    ],
    correct: [3],
    explanation:
      "Второй абзац называет привязку не к числу, а ко дню недели: праздник всегда приходится на четвёртый " +
      "четверг ноября, независимо от даты. Именно поэтому конкретное число 25 ноября неверно, ведь дата " +
      "меняется каждый год. Формулировка throughout November растягивает однодневный праздник на весь " +
      "месяц, а отсчёт четырёх недель до Рождества в тексте не используется.",
  },
  {
    id: "mk-en-b03-94",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Thanksgiving", value: THANKSGIVING },
    text:
      "Thanksgiving is a holiday celebrated predominantly in ___ America, and it possesses " +
      "a different meaning in each of the countries where it's acknowledged.",
    options: ["West", "North", "East", "South"],
    correct: [1],
    explanation:
      "Пропуск восстанавливается по первому предложению текста, где стоит North America. Это же " +
      "подтверждается дальше: пилигримы прибыли в Северную Америку, а праздник отмечают в США и соседних " +
      "странах. Южная Америка в тексте не упоминается, а сочетаний West America и East America в качестве " +
      "названия региона в английском вообще не существует.",
  },
  {
    id: "mk-en-b03-95",
    topic: "reading",
    difficulty: "C",
    passage: { title: "Thanksgiving", value: THANKSGIVING },
    text: "Which event(s) began the tradition of Thanksgiving?",
    options: [
      "The pilgrims' food-creation success and large-scale celebratory dinner",
      "Nobody is certain",
      "An address delivered by President Lincoln",
      "A and C",
    ],
    correct: [3],
    explanation:
      "Третий абзац называет два разных начала: сперва пилигримы вырастили урожай и отпраздновали это " +
      "вместе с индейцами около 1621 года, а затем президент Линкольн в одном из обращений времён " +
      "гражданской войны положил начало современному обычаю. Поэтому по отдельности ни первый, ни третий " +
      "вариант не полны, и верен объединяющий их пункт A и C. Утверждение о том, что никто не знает " +
      "точно, противоречит тексту, где оба события описаны прямо.",
  },
  {
    id: "mk-en-b03-96",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Thanksgiving", value: THANKSGIVING },
    text: "Which food(s) are often prepared for Thanksgiving dinner?",
    options: ["Turkey", "Potatoes", "Stuffing", "All of the above"],
    correct: [3],
    explanation:
      "В последнем абзаце перечислено, из чего обычно состоит праздничный ужин: индейка, картофельное " +
      "пюре, начинка, овощи, подлива и обильные десерты. Все три названных в вариантах блюда есть в этом " +
      "списке, поэтому выбрать одно из них значило бы отбросить два других, столь же верных. В таких " +
      "заданиях пункт all of the above становится правильным ровно тогда, когда каждый предыдущий вариант " +
      "подтверждается текстом, и здесь это так.",
  },
  {
    id: "mk-en-b03-97",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Thanksgiving", value: THANKSGIVING },
    text:
      "President ___ initiated the contemporary practice of Thanksgiving by calling for a day " +
      "of Thanksgiving during one of his Civil War addresses.",
    options: ["Andrew Johnson", "James Buchanan", "Abraham Lincoln", "Ulysses Grant"],
    correct: [2],
    explanation:
      "В третьем абзаце прямо назван Авраам Линкольн, который в одном из обращений времён гражданской " +
      "войны призвал отмечать день благодарения. Остальные три фамилии тоже принадлежат американским " +
      "президентам той эпохи, но в тексте не встречаются ни разу. Задание проверяет умение найти в абзаце " +
      "конкретное имя, а не общие знания по истории США.",
  },
  {
    id: "mk-en-b03-98",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Thanksgiving", value: THANKSGIVING },
    text: "Where is Thanksgiving celebrated?",
    options: [
      "Only in America",
      "Only in Canada",
      "In English speaking countries",
      "Throughout North America and some other parts of the world, albeit in different forms and on different dates",
    ],
    correct: [3],
    explanation:
      "Первое предложение говорит, что праздник отмечают преимущественно в Северной Америке и что в каждой " +
      "из признающих его стран он имеет своё значение, а слово predominantly оставляет место и для других " +
      "регионов. Поэтому варианты только в Америке и только в Канаде слишком узки и противоречат идее о " +
      "нескольких странах. Формулировка про англоязычные страны в тексте не встречается и сужает круг по " +
      "признаку языка, о котором там ничего не сказано.",
  },
  {
    id: "mk-en-b03-99",
    topic: "reading",
    difficulty: "A",
    passage: { title: "Thanksgiving", value: THANKSGIVING },
    text:
      "The holiday signifies the immense progress made by pilgrims, or some of the first travelers " +
      "to North America, at Plymouth Plantation circa ___.",
    options: ["1621", "1612", "1721", "1631"],
    correct: [0],
    explanation:
      "В третьем абзаце указан год 1621, причём со словом circa, то есть приблизительно. Остальные три " +
      "варианта построены на перестановке и подмене цифр: 1612 меняет местами последние две, 1631 " +
      "смещает десятилетие, 1721 сдвигает дату на целый век. Задание проверяет точность считывания числа, " +
      "поэтому опираться нужно только на прямое совпадение с текстом.",
  },
  {
    id: "mk-en-b03-100",
    topic: "reading",
    difficulty: "B",
    passage: { title: "Thanksgiving", value: THANKSGIVING },
    text: "What is the meaning of Thanksgiving's federal holiday status?",
    options: [
      "The federal government instructs all citizens to celebrate Thanksgiving",
      "Only federal government employees celebrate Thanksgiving",
      "All federal employees and many other workers are given a day off for Thanksgiving",
      "It's difficult to say for sure",
    ],
    correct: [2],
    explanation:
      "Во втором абзаце статус федерального праздника разъяснён в скобках: выходной получают все " +
      "государственные служащие и большинство работников частного сектора. Именно это и передаёт третий " +
      "вариант. Утверждение о том, что празднуют только государственные служащие, обрезает вторую " +
      "половину пояснения. Мысль о приказе всем гражданам праздновать в тексте отсутствует, а ответ о " +
      "неопределённости неверен, поскольку объяснение дано прямо.",
  },
];
