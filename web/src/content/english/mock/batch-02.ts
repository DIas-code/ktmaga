import type { Question } from "@/lib/types";

/** Задания из пробников по английскому языку. Партия 02 (скриншоты). */
export const batch02: Question[] = [
  {
    id: "mk-en-b02-1",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "The London Underground",
      value:
        "The London Underground is the world's oldest and largest and covers most of London. " +
        "Its 55% of the network is above ground. It has 275 stations and 12 interconnecting lines. " +
        "Each line has a name and a colour to represent it on the underground map, for example " +
        "the Victoria line is blue. The London Underground is the longest in the world, with over " +
        "408 km of track. Three million passengers travel every day. Londoners call the Underground " +
        "the Tube (tube-shaped tunnels). The first trains started in 1863 on the Central line. " +
        "During the Blitz, the aerial bombing of London in World War II, Londoners used to hide from " +
        "the bombs by using the underground stations during air raids and sleeping on platforms. " +
        "Air raid sirens were a signal for Londoners of approaching planes.\n\n" +
        "The Underground doesn't run 24 hours. Track maintenance is done at night, after the system " +
        "closes. The first trains start after 5 a.m., until 1 a.m. Rush hour is from 7.30 a.m. to " +
        "9.30 a.m. and from 4.30 p.m. to 6.30 p.m.\n\n" +
        "London has six travel zones. Zone one is the most central and zone six is the outer which " +
        "includes Heathrow Airport. The more zones you cross the more you pay. To travel you can buy " +
        "a daily ticket, a daily travel card or an Oyster card. This is a smart card with an electronic " +
        "chip that you can charge with credit, and use to pay for the Underground and buses. " +
        "It is the cheapest way of travelling in central London.\n\n" +
        "Most underground stations have escalators and stairs. The longest escalator in Europe is at " +
        "Angel station on the Northern line. It is 60m in length, with a vertical rise of 27.5m. " +
        "People using the escalators stand on the right-hand side, those in a hurry walk on the left. " +
        "There are several safety announcements, when the doors of the trains are about to close you " +
        "hear 'stand clear of the doors please'. When the train stops in a station where there is a gap " +
        "between the train and the platform you can hear, 'Mind the Gap!'",
    },
    text: "The busiest period for London Underground is ___.",
    options: [
      "24 hours",
      "4.30 p.m. to 6.30 p.m.",
      "5 a.m. to 7 a.m.",
      "7.30 p.m. to 9.30 p.m.",
    ],
    correct: [1],
    explanation:
      "Задание проверяет поиск конкретной детали в тексте: словосочетание busiest period соответствует " +
      "английскому термину rush hour, то есть час пик, и нужный абзац прямо называет два таких промежутка, " +
      "с 7.30 a.m. до 9.30 a.m. и с 4.30 p.m. до 6.30 p.m. Из предложенных вариантов текстовым данным " +
      "отвечает только 4.30 p.m. to 6.30 p.m. Вариант 7.30 p.m. to 9.30 p.m. это ловушка на невнимательность: " +
      "цифры взяты из текста, но указано p.m. вместо a.m., то есть вечер вместо утра. " +
      "Промежуток 5 a.m. to 7 a.m. связан в тексте с началом движения поездов, а не с наплывом пассажиров, " +
      "а 24 hours прямо опровергается фразой The Underground doesn't run 24 hours.",
  },
  {
    id: "mk-en-b02-2",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "My First English Class",
      value:
        "Hello, everyone. Welcome to the English Language course. I am your teacher. My name is " +
        "Lindsay Black. That's L-I-N-D-S-A-Y Black. Before we begin, some information about the course. " +
        "It'll be held in the British Council building, in Room 13, on the first floor. When you go " +
        "upstairs, turn left to find the room. We have our classes twice a week, on Monday and Wednesday. " +
        "The class begins at 4.30 p.m. and lasts 90 minutes, so we finish at 6 p.m. Also, I have an office " +
        "hour if you have questions. I'm in Office 7B on the second floor. My office hour is Friday 6 p.m. " +
        "So, if you have any questions or problems or want to talk to me, welcome. We begin next week, " +
        "on March the 13th. The course ends on May the 20th. Oh, one more thing. For this course you need " +
        "the book. Here it is: British Life and Language Level 1 Student's Book. So please go to the " +
        "library and get a copy of the book. I don't want to see any photocopies of the book! " +
        "I think that's all. I look forward to working with you. See you next Monday!",
    },
    text: "For this course you need ___.",
    options: ["a laptop", "a copybook", "a booknote", "a copy of the book"],
    correct: [3],
    explanation:
      "Это вопрос на понимание детали, и ответ прямо назван в конце текста: please go to the library and " +
      "get a copy of the book. Выражение a copy of the book значит именно экземпляр учебника, а не копию " +
      "в смысле ксерокопии, что подтверждается следующей фразой I don't want to see any photocopies. " +
      "Вариант a copybook (тетрадь) и несуществующее слово a booknote в тексте не упоминаются вовсе, " +
      "а ноутбук (a laptop) преподаватель не требует: из материалов названа только книга " +
      "British Life and Language Level 1 Student's Book.",
  },
  {
    id: "mk-en-b02-3",
    topic: "verb",
    difficulty: "C",
    text: "Ow, it is 8 p.m! ___ Mary this morning?",
    options: ["Did you see", "Had you seen", "Do you see", "Have you seen"],
    correct: [0],
    explanation:
      "Выбор между Past Simple и Present Perfect здесь решает не само обстоятельство this morning, " +
      "а момент речи: раз уже 8 p.m., утро полностью закончилось, значит период завершён и оторван " +
      "от настоящего, а это зона Past Simple, то есть Did you see. " +
      "Present Perfect (Have you seen) был бы уместен, если бы разговор шёл ещё утром, пока промежуток " +
      "продолжается и его результат актуален. Past Perfect (Had you seen) требует второго, более позднего " +
      "действия в прошлом, с которым сравнивается первое, а его в предложении нет. " +
      "Present Simple (Do you see) выражает регулярность или постоянное положение дел и с указанием " +
      "на конкретное утро не сочетается.",
  },
  {
    id: "mk-en-b02-4",
    topic: "verb",
    difficulty: "A",
    text: "I don't understand the meaning of this word. What ___ this word ___?",
    options: ["do / means", "do / mean", "does / means", "does / mean"],
    correct: [3],
    explanation:
      "Вопрос в Present Simple строится по схеме do/does + подлежащее + голая основа смыслового глагола, " +
      "причём показатель третьего лица единственного числа переносится на вспомогательный глагол. " +
      "Подлежащее this word это третье лицо единственного числа, поэтому нужен does, а сам глагол " +
      "остаётся без окончания: does this word mean. " +
      "Варианты do / mean и do / means неверно берут форму does для множественного числа, " +
      "а does / means удваивает признак третьего лица, ставя -s и на вспомогательный, и на смысловой глагол, " +
      "чего английская грамматика не допускает.",
  },
  {
    id: "mk-en-b02-5",
    topic: "verb",
    difficulty: "C",
    text:
      "Sarah and John have been married for 10 years. " +
      "Next year they ___ married for 11 years.",
    options: ["will have been", "will be", "would be", "will being"],
    correct: [0],
    explanation:
      "Речь о состоянии, которое началось в прошлом и будет длиться вплоть до определённого момента " +
      "в будущем, и такой подсчёт стажа к будущей точке передаётся временем Future Perfect: " +
      "will have been married for 11 years. Указатель for 11 years задаёт итог накопленной длительности, " +
      "а не разовое событие, поэтому простое will be здесь не подходит: оно сообщало бы, что они только " +
      "станут женаты в следующем году, что противоречит первому предложению. " +
      "Форма would be относится к сослагательности или будущему в прошедшем и в прямом рассказе о " +
      "next year неуместна, а will being вообще не существует: после will идёт голый инфинитив, " +
      "а не форма на -ing.",
  },
  {
    id: "mk-en-b02-6",
    topic: "verb",
    difficulty: "B",
    text: "Let's watch this performance. It ___ fantastic.",
    options: [
      "supposed",
      "is supposed to be",
      "is supposed to",
      "supposed to be",
    ],
    correct: [1],
    explanation:
      "Значение предполагается, что спектакль замечательный передаёт устойчивая конструкция " +
      "be supposed to do something, где глагол be обязателен, потому что supposed это причастие, " +
      "а не личная форма. После to нужен смысловой глагол, и связка fantastic как прилагательное " +
      "требует именно be, отсюда полная форма is supposed to be. " +
      "Варианты supposed и supposed to be не годятся, поскольку в предложении не оказывается сказуемого: " +
      "причастие само по себе им быть не может. " +
      "Вариант is supposed to обрывается на частице to, а прилагательное fantastic не может " +
      "присоединяться к ней напрямую, без глагола-связки.",
  },
  {
    id: "mk-en-b02-7",
    topic: "adjective",
    difficulty: "A",
    text: "Pizza is ___ food for me.",
    options: [
      "the most delicious",
      "most delicious",
      "more delicious",
      "the deliciousest",
    ],
    correct: [0],
    explanation:
      "Пицца выделяется из всей еды сразу, то есть сравнивается не с одним конкретным блюдом, " +
      "а со всем множеством, и такое выделение передаётся превосходной степенью с обязательным " +
      "артиклем the: the most delicious food. Прилагательное delicious трёхсложное, поэтому степени " +
      "сравнения у него строятся аналитически, через more и the most, а форма the deliciousest " +
      "с суффиксом -est просто не существует. Вариант more delicious даёт сравнительную степень и " +
      "потребовал бы второго члена сравнения с than. Без артикля most delicious меняет смысл на " +
      "весьма вкусная и к сравнению отношения не имеет.",
  },
  {
    id: "mk-en-b02-8",
    topic: "verb",
    difficulty: "A",
    text: "She ___ a lot of fruit.",
    options: ["eating", "eat", "eats", "eaten"],
    correct: [2],
    explanation:
      "В предложении нет ни вспомогательного, ни модального глагола, значит пропуск нужно заполнить " +
      "личной формой, которая сама будет сказуемым. Регулярную привычку описывает Present Simple, " +
      "а при подлежащем третьего лица единственного числа she глагол получает окончание -s, отсюда eats. " +
      "Формы eating и eaten это причастия: они работают только вместе со вспомогательным глаголом " +
      "(is eating, has eaten) и в одиночку сказуемым не бывают. " +
      "Форма eat без -s подошла бы для I, you, we, they, но с she нарушает согласование подлежащего " +
      "и сказуемого.",
  },
  {
    id: "mk-en-b02-9",
    topic: "preposition",
    difficulty: "A",
    text: "The first grand piano was invented ___ Europe.",
    options: ["at", "in", "on", "over"],
    correct: [1],
    explanation:
      "С названиями крупных территорий, то есть континентов, стран, городов и регионов, английский " +
      "употребляет предлог in, который передаёт нахождение внутри пространства: in Europe, in Italy, " +
      "in London. Предлог at указывает на точку или заведение, воспринимаемое как ориентир " +
      "(at the station, at school), и для целого континента не годится. " +
      "Предлог on обозначает нахождение на поверхности или на линии (on the table, on the coast), " +
      "а over значит над или по всей поверхности и превратил бы фразу в изобретён где-то над Европой.",
  },
  {
    id: "mk-en-b02-10",
    topic: "mood",
    difficulty: "A",
    text: "Which mood is used in the following sentence: \"Take it!\"",
    options: ["Indicative", "Subjunctive", "Interrogative", "Imperative"],
    correct: [3],
    explanation:
      "Предложение Take it! состоит из голой основы глагола без подлежащего и выражает прямое " +
      "побуждение к действию, а это и есть признаки повелительного наклонения, Imperative mood. " +
      "Изъявительное наклонение (Indicative) сообщает о фактах и обязательно имеет подлежащее " +
      "и личную форму глагола, например You take it. " +
      "Сослагательное (Subjunctive) описывает нереальное, желаемое или требуемое действие и обычно " +
      "появляется в придаточных вроде I suggest that he take it. " +
      "Слово Interrogative вообще не название наклонения: это тип предложения по цели высказывания, " +
      "то есть вопросительное предложение.",
  },
  {
    id: "mk-en-b02-11",
    topic: "numeral",
    difficulty: "A",
    text: "There are ___ books on the desk. Which one is yours?",
    options: ["sevens", "seventh", "seven", "seveneth"],
    correct: [2],
    explanation:
      "Оборот there are + существительное во множественном числе сообщает о количестве предметов, " +
      "поэтому нужно количественное числительное seven. Количественные числительные в английском " +
      "не принимают окончание множественного числа, когда стоят при существительном, так что форма " +
      "sevens невозможна (она встречается лишь как существительное в значении семёрки). " +
      "Порядковое числительное seventh отвечает на вопрос который по счёту и потребовало бы " +
      "артикля the и единственного числа существительного: the seventh book. " +
      "Написание seveneth ошибочно: порядковое от seven образуется прибавлением -th без лишней гласной.",
  },
  {
    id: "mk-en-b02-12",
    topic: "non-finite",
    difficulty: "B",
    text: "He escapes me all the time. Last time he tried to ___ my questions.",
    options: [
      "avoid answering",
      "avoid to answer",
      "avoided to answer",
      "avoid for answer",
    ],
    correct: [0],
    explanation:
      "Глагол avoid принадлежит к группе глаголов, после которых употребляется только герундий, " +
      "то есть форма на -ing, поэтому единственно верно avoid answering. " +
      "Кроме того, перед пропуском уже стоит частица to из конструкции tried to, а значит сам глагол " +
      "должен быть в голой форме avoid, что сразу отсекает avoided с окончанием прошедшего времени. " +
      "Вариант avoid to answer нарушает управление глагола avoid, который инфинитива после себя не берёт, " +
      "а avoid for answer добавляет лишний предлог: avoid переходный и присоединяет дополнение напрямую.",
  },
  {
    id: "mk-en-b02-13",
    topic: "adverb",
    difficulty: "A",
    text: "I finished the first year of study. The time passed very ___.",
    options: ["fasting", "fast", "faster", "more fast"],
    correct: [1],
    explanation:
      "Пропуск относится к глаголу passed и отвечает на вопрос как, значит нужно наречие образа действия. " +
      "У слова fast форма наречия совпадает с прилагательным, суффикс -ly к нему не прибавляется, " +
      "поэтому правильно passed very fast. Усилитель very сочетается только с положительной степенью, " +
      "так что сравнительная faster исключена: при ней говорят much faster, а не very faster, " +
      "и требуется второй член сравнения. Форма more fast невозможна вдвойне: у односложного слова " +
      "сравнительная степень строится через -er, а не через more. " +
      "Слово fasting это причастие или существительное от глагола пост, поститься, и к скорости " +
      "отношения не имеет.",
  },
  {
    id: "mk-en-b02-14",
    topic: "mood",
    difficulty: "B",
    text: "Find out the sentence with the Indicative mood:",
    options: [
      "If she didn't know him, she wouldn't talk to him.",
      "I was very tired yesterday.",
      "If I were you, I would call you.",
      "I wish I knew it before.",
    ],
    correct: [1],
    explanation:
      "Изъявительное наклонение сообщает о реальном факте, который говорящий подаёт как действительно " +
      "имевший место, и такому описанию отвечает только предложение I was very tired yesterday: " +
      "это обычный Past Simple с обстоятельством времени. " +
      "Два предложения с if относятся ко второму типу условных: сочетание прошедшей формы в придаточном " +
      "с would в главном обозначает нереальное, воображаемое условие, то есть сослагательное наклонение, " +
      "причём форма were при I в If I were you это прямой маркер сослагательности. " +
      "Конструкция I wish + прошедшее время тоже сослагательная: она выражает сожаление о том, " +
      "что в действительности не так, а не констатацию факта.",
  },
  {
    id: "mk-en-b02-15",
    topic: "pronoun",
    difficulty: "A",
    text: "This message isn't for ___.",
    options: ["our", "your", "me", "his"],
    correct: [2],
    explanation:
      "После предлога for в английском ставится местоимение в объектном падеже, и из предложенных " +
      "форм таким является только me. Слова our и your это притяжательные местоимения-определители: " +
      "они не употребляются самостоятельно и обязательно требуют после себя существительного " +
      "(for our team, for your friend). Форма his формально может быть и абсолютной, " +
      "но в значении его вещь она отсылала бы не к человеку, а к предмету, и фраза for his " +
      "без существительного повисает без смысла. " +
      "Правильные самостоятельные формы для этих лиц были бы ours, yours, him.",
  },
  {
    id: "mk-en-b02-16",
    topic: "pronoun",
    difficulty: "A",
    text: "Take care of ___.",
    options: ["you", "yourself", "yourselve", "your"],
    correct: [1],
    explanation:
      "Предложение повелительное, подразумеваемое подлежащее в нём you, и когда действие направлено " +
      "на самого исполнителя, в английском обязательно возвратное местоимение, поэтому верно " +
      "Take care of yourself. Личное you в объектной позиции указывало бы на другого собеседника, " +
      "что противоречит смыслу заботы о себе, а в английском при совпадении субъекта и объекта " +
      "простое личное местоимение не используется. " +
      "Притяжательное your нуждается в существительном после себя (your health), " +
      "а формы yourselve вообще не существует: множественное число возвратного местоимения " +
      "второго лица выглядит как yourselves.",
  },
  {
    id: "mk-en-b02-17",
    topic: "verb",
    difficulty: "B",
    text: "I saw you in the park. You ___ and ___ a book.",
    options: [
      "was sitting / was reading",
      "were sitting / reading",
      "are sitting / reading",
      "sat / read",
    ],
    correct: [1],
    explanation:
      "Действия в парке длились в тот момент, когда говорящий их увидел, а такой фон в прошлом " +
      "описывается временем Past Continuous, поэтому нужно were sitting. " +
      "При подлежащем you вспомогательный глагол всегда were, а не was, что сразу отсекает первый вариант. " +
      "Второе действие однородно первому и относится к тому же вспомогательному глаголу, " +
      "поэтому его достаточно назвать причастием reading, не повторяя were. " +
      "Настоящее время are sitting противоречит прошедшему I saw, а пара sat / read в Past Simple " +
      "подала бы эти действия как законченные события, а не как картину, которую наблюдал говорящий.",
  },
  {
    id: "mk-en-b02-18",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "Yellowstone National Park",
      value:
        "Yellowstone National Park, located in Idaho, Montana, and Wyoming, was established as the " +
        "first national park in the United States. The park is a popular destination for visitors who " +
        "enjoy ecological tourism as it offers forests, mountains, and abundant ecosystems to explore. " +
        "Some of Yellowstone's most well-known landmarks are its geothermal hot springs and geysers, " +
        "the most famous of which is named Old Faithful.\n\n" +
        "Last fall, Lisa and her friends decided to take a camping trip to Yellowstone National Park. " +
        "They arranged to stay at one of the park's many convenient campsites. For their camping trip, " +
        "they brought their backpacks, sleeping bags, and a cooler of food and drinks. They pitched " +
        "their tents immediately upon arriving to their campsite.\n\n" +
        "During their trip, Lisa and her friends hiked the trails of the park, exploring its natural " +
        "surroundings. In the forest, they saw a lot of local wildlife. Lisa was surprised to see a " +
        "family of grizzly bears, some gray wolves, and even bald eagles overhead. Outside of the woods, " +
        "they admired the beauty of some of Yellowstone's natural cascades. Since Yellowstone contains " +
        "many hot springs and the world's largest area of active geysers, Lisa and her friends visited " +
        "many different geyser sites. They even spent an afternoon swimming in Yellowstone's Boiling River.\n\n" +
        "Of all of the sites, Lisa and her friends agreed that Old Faithful was the most impressive. " +
        "Lisa and her friends waited patiently for the geyser to erupt. After about 40 minutes, a stream " +
        "of boiling water over 100 feet tall sprayed from the ground and up into the air. " +
        "Fortunately, no one got wet!",
    },
    text: "The backpacks, sleeping bags are needed for ___.",
    options: [
      "a camping trip",
      "a seaside trip",
      "a running marathon",
      "an extreme travel",
    ],
    correct: [0],
    explanation:
      "Ответ содержится во втором абзаце дословно: For their camping trip, they brought their backpacks, " +
      "sleeping bags, and a cooler of food and drinks, то есть перечисленные вещи привезли именно " +
      "для похода с ночёвкой в палатках. Дальше это подтверждается фразой They pitched their tents, " +
      "разбили палатки, что характерно для кемпинга, а не для других видов поездок. " +
      "Море (a seaside trip) в тексте не упоминается вовсе, забег (a running marathon) противоречит " +
      "описанию неспешных прогулок по тропам, а an extreme travel текст не называет: героини " +
      "занимались экотуризмом, а не экстримом.",
  },
  {
    id: "mk-en-b02-19",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Wonders of Egypt",
      value:
        "For centuries, the pyramids of Giza have been timeless symbols of Egyptian culture. But who " +
        "actually built them? For years, we did not know for sure. But archeologists recently discovered " +
        "an ancient village near the pyramids. Close by, there was a cemetery where pyramid builders were " +
        "buried. From studying these places, archeologists can now confirm that the pyramids were not " +
        "built by slaves or foreigners (or space aliens!). Ordinary Egyptians built them.\n\n" +
        "It took about eighty years to build the pyramids. According to archeologists, about 20,000-30,000 " +
        "people were involved in completing the task. The workers had different roles. Some dug up the " +
        "rock, some moved it, and some shaped it into blocks. People also worked in different teams, " +
        "each with its own name. These teams often competed to do a job faster.\n\n" +
        "A Pyramid Builder's Life\n" +
        "Life for these workers was hard. 'We can see that in their skeletons,' says Azza Mohamed Sarry " +
        "El-Din, a scientist studying bodies found in the cemetery. The bones show signs of arthritis, " +
        "which developed from carrying heavy things for a long time. Archeologists have also found many " +
        "female skeletons in the village and cemetery. The damage to their bones is similar to that of " +
        "the men. Their lives may have been even tougher: male workers lived to age 40-45, but women to " +
        "only 30-35. However, workers usually had enough food, and they also had medical care if they got " +
        "sick or hurt.\n\n" +
        "The work was challenging, but laborers were proud of their work. On a wall in Khufu's Great " +
        "Pyramid, for example, a group of workers wrote Friends of Khufu. 'It's because they were not " +
        "just building the tomb of their king,' says Egyptian archeologist Zahi Hawass. " +
        "'They were building Egypt. It was a national project, and everyone was a participant.'",
    },
    text: "Azza Mohamed Sarry El-Din is ___.",
    options: ["an archeologist", "a builder", "a worker", "a scientist"],
    correct: [3],
    explanation:
      "Ответ дан прямо в приложении к имени: says Azza Mohamed Sarry El-Din, a scientist studying bodies " +
      "found in the cemetery, то есть текст называет этого человека учёным, изучающим найденные останки. " +
      "Вариант an archeologist это типичная ловушка: слово archeologist в тексте встречается часто, " +
      "но с конкретным именем оно связано в другом месте, где Egyptian archeologist назван Zahi Hawass. " +
      "Варианты a builder и a worker относятся к древним египтянам, строившим пирамиды, а не к " +
      "современному исследователю их скелетов.",
  },
];
