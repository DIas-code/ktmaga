import type { Question } from "@/lib/types";

const P_CITY = {
  title: "Text 1. My neighbourhood",
  value:
    "I live in a quiet part of Almaty, about twenty minutes from the city centre by bus. " +
    "Our street is narrow and lined with old apple trees that were planted long before our house " +
    "was built. There is a small bakery on the corner. It opens at seven in the morning, and by " +
    "half past seven the whole street smells of fresh bread.\n\n" +
    "Most of my neighbours have lived here for many years. Mrs Kim, who lives next door, moved in " +
    "when she was a student and never left. Every Saturday she brings vegetables from the market " +
    "and shares them with the families in our building. My friend Timur lives on the top floor. " +
    "We usually meet in the courtyard after work and play chess until it gets dark.\n\n" +
    "The area is not fashionable. There are no expensive restaurants and only one small shop. " +
    "But when I compare it with the new districts, where nobody knows their neighbours, I would " +
    "not move anywhere else.",
};

const P_UNI = {
  title: "Text 2. Studying in Kazakhstan",
  value:
    "Higher education in Kazakhstan has changed considerably over the last two decades. Most " +
    "universities have moved to a credit system, which means students choose part of their " +
    "courses themselves instead of following a fixed timetable. Many programmes are now taught " +
    "in three languages: Kazakh, Russian and English.\n\n" +
    "The state programme Bolashak has sent thousands of young people to study abroad. Those who " +
    "receive the scholarship must return home and work in the country for five years afterwards. " +
    "Supporters say the programme brings back valuable experience. Critics point out that " +
    "graduates often find it difficult to apply what they have learnt, because local institutions " +
    "change more slowly than the people who return to them.\n\n" +
    "Applicants to master's programmes take a single complex test that includes a foreign " +
    "language, a readiness-to-study section and two subject blocks. The test is the same across " +
    "the country, which makes admission more transparent, though some teachers argue that a " +
    "multiple-choice format cannot measure research ability.",
};

const P_SCI = {
  title: "Text 3. Why scientists publish failures",
  value:
    "For most of the twentieth century, scientific journals printed successes. An experiment that " +
    "produced no effect was quietly filed away, and the researcher moved on. This habit created " +
    "what statisticians call publication bias: the published record showed the world a series of " +
    "victories and hid the far larger number of attempts that had led nowhere.\n\n" +
    "The consequences were serious. If nine studies of a drug find no benefit and the tenth finds " +
    "one, publishing only the tenth makes an ineffective treatment look promising. Other teams " +
    "then waste years repeating work that has already failed, because they cannot know it failed.\n\n" +
    "Since the 2000s several journals have begun accepting papers on the basis of the research " +
    "question and the method, before the results are known. If the design is sound, the paper is " +
    "published whatever the outcome. The change is slow — negative results still attract fewer " +
    "citations, and careers are still built on discoveries rather than on carefully documented " +
    "dead ends. But the direction is clear, and a growing number of funding bodies now require " +
    "that every trial they support be reported, successful or not.",
};

const P_LANG = {
  title: "Text 4. One language, many Englishes",
  value:
    "There is no single English. A speaker from Glasgow, a speaker from Lagos and a speaker from " +
    "Auckland share a grammar and much of a vocabulary, yet each of them uses words the others " +
    "may never have heard. This variety is not a defect. It is the natural result of a language " +
    "spreading across continents and being reshaped by everyone who takes it up.\n\n" +
    "The number of people who speak English as a second language now exceeds the number of native " +
    "speakers several times over. That imbalance has consequences. When a Kazakh engineer talks " +
    "to a Brazilian colleague in English, neither is speaking a foreign version of somebody " +
    "else's language; they are using a shared tool, and the standard they aim at is mutual " +
    "understanding rather than the accent of any particular country.\n\n" +
    "Some traditionalists find this alarming and predict that English will fragment into mutually " +
    "unintelligible dialects, as Latin once did. Others reply that Latin broke apart when the " +
    "roads and the empire failed, whereas English is held together by television, air travel and " +
    "the internet. What is certain is that the question of who owns the language no longer has " +
    "an obvious answer.",
};

const P_TRAD = {
  title: "Text 5. Nauryz and the calendar of spring",
  value:
    "Nauryz is celebrated on 21 March, the day of the spring equinox, when day and night are of " +
    "equal length. The holiday is much older than any of the states that now mark it: it was " +
    "observed across Central Asia and the Middle East long before modern borders were drawn, " +
    "and versions of it survive from the Balkans to western China.\n\n" +
    "In Kazakhstan the celebration lasts three days. Families prepare nauryz kozhe, a soup that " +
    "must contain seven ingredients, each standing for a quality such as health or wisdom. " +
    "Streets fill with yurts, and neighbours are expected to forgive old quarrels before the " +
    "holiday begins. During the Soviet period the festival was officially discouraged for several " +
    "decades and largely disappeared from public life; it was restored as a state holiday in 1991.\n\n" +
    "Comparisons with Western spring festivals are common but can mislead. Easter moves with the " +
    "lunar calendar and belongs to a religious tradition; Nauryz is fixed by astronomy and has " +
    "never been the property of a single faith. What the two share is older than either: the " +
    "human habit of marking the moment when the light begins to win.",
};

/* Тексты из пробного тестирования ЦЕНТ (папка англПробник). */
const P_TUBE = {
  title: "The London Underground",
  value:
    "The London Underground is the world's oldest and largest and covers most of London. " +
    "Its 55% of the network is above ground. It has 275 stations and 12 interconnecting lines. " +
    "Each line has a name and a colour to represent it on the underground map, for example the " +
    "Victoria line is blue. The London Underground is the longest in the world, with over 408 km " +
    "of track. Three million passengers travel every day.\n\n" +
    "Londoners call the Underground the Tube (tube-shaped tunnels). The first trains started in " +
    "1863 on the Central line. During the Blitz, the aerial bombing of London in World War II, " +
    "Londoners used to hide from the bombs by using the underground stations during air raids and " +
    "sleeping on platforms. Air raid sirens were a signal for Londoners of approaching planes.\n\n" +
    "The Underground doesn't run 24 hours. Track maintenance is done at night, after the system " +
    "closes. The first trains start after 5 a.m., until 1 a.m. Rush hour is from 7.30 a.m. to " +
    "9.30 a.m. and from 4.30 p.m. to 6.30 p.m. London has six travel zones. Zone one is the most " +
    "central and zone six is the outer which includes Heathrow Airport. The more zones you cross " +
    "the more you pay. To travel you can buy a daily ticket, a daily travel card or an Oyster card. " +
    "This is a smart card with an electronic chip that you can charge with credit, and use to pay " +
    "for the Underground and buses. It is the cheapest way of travelling in central London. Most " +
    "underground stations have escalators and stairs. The longest escalator in Europe is at Angel " +
    "station on the Northern line. It is 60m in length, with a vertical rise of 27.5m. People using " +
    "the escalators stand on the right-hand side, those in a hurry walk on the left.\n\n" +
    "There are several safety announcements: when the doors of the trains are about to close you " +
    "hear 'stand clear of the doors please'. When the train stops in a station where there is a gap " +
    "between the train and the platform you can hear, 'Mind the Gap!'",
};

const P_CLASS = {
  title: "My First English Class",
  value:
    "Hello, everyone. Welcome to the English Language course. I am your teacher. My name is " +
    "Lindsay Black. That's L-I-N-D-S-A-Y Black. Before we begin, some information about the " +
    "course. It'll be held in the British Council building, in Room 13, on the first floor. When " +
    "you go upstairs, turn left to find the room. We have our classes twice a week, on Monday and " +
    "Wednesday. The class begins at 4.30 p.m. and lasts 90 minutes, so we finish at 6 p.m. Also, " +
    "I have an office hour if you have questions. I'm in Office 7B on the second floor. My office " +
    "hour is Friday 6 p.m. So, if you have any questions or problems or want to talk to me, " +
    "welcome. We begin next week, on March the 13th. The course ends on May the 20th. Oh, one more " +
    "thing. For this course you need the book. Here it is: British Life and Language Level 1 " +
    "Student's Book. So please go to the library and get a copy of the book. I don't want to see " +
    "any photocopies of the book! I think that's all. I look forward to working with you. " +
    "See you next Monday!",
};

const P_SPORT = {
  title: "The daily routines of a sportswoman",
  value:
    "Janet is an athlete, and she wakes up at 4:30 am every weekday morning. She spends the first " +
    "30 minutes reading and then 15 minutes meditating. At 5:15 am Janet checks her email for only " +
    "30 minutes and then goes for her first run of the day. She runs for an hour and a half along " +
    "the lake near her house. After running, Janet has a shower and then prepares breakfast, which " +
    "is usually cereal and fruit. However, she occasionally has a less healthy breakfast.\n\n" +
    "She usually finishes breakfast at around 8 am. If it is a weekday, she always leaves the house " +
    "at 8:20 am and goes to training. Her training starts at 9 am, and she needs 30 minutes to " +
    "drive to the gym. She trains for 3 hours with her team. She always eats a very big and healthy " +
    "lunch. As soon as she finishes lunch, she has a nap for one hour.\n\n" +
    "After her nap, she likes to go for a walk around the lake and look at nature. She sometimes " +
    "reads or meditates at the lake in the afternoon. During the week, she meets up with friends. " +
    "Most of her friends are athletes too.\n\n" +
    "She typically goes to bed at 9 pm because she prefers to be awake in the morning than at night. " +
    "She sometimes falls asleep listening to music, but she never watches the television or reads " +
    "anything on her tablet. She always makes sure her alarm is set and is almost always asleep " +
    "by 9:45 pm.",
};

/**
 * Банк вопросов по английскому языку.
 * Форма заданий — как в спецификации: закрытая, ОДИН правильный ответ из ЧЕТЫРЁХ.
 *
 * Блок аудирования сюда не входит: он требует аудиоматериалов (см. noBank в meta.ts).
 * В блоках чтения буквы A/B/C означают уровень понимания, а не трудность:
 * A — фрагментарное, B — детальное, C — глобальное.
 */
export const englishQuestions: Question[] = [
  /* =============== Блок II. Noun — существительное (A ×3) =============== */
  {
    id: "en-nn-1",
    topic: "noun",
    difficulty: "A",
    text: "The ___ are playing in the yard.",
    options: ["child", "childs", "children", "childrens"],
    correct: [2],
    explanation:
      "«Child» — существительное с нестандартным множественным числом: child → children. " +
      "Формы childs и childrens не существуют.",
  },
  {
    id: "en-nn-2",
    topic: "noun",
    difficulty: "A",
    text: "She bought two ___ of bread.",
    options: ["loafs", "loaves", "loafes", "loave"],
    correct: [1],
    explanation:
      "У существительных на -f / -fe окончание меняется на -ves: loaf → loaves, leaf → leaves, " +
      "wife → wives.",
  },
  {
    id: "en-nn-3",
    topic: "noun",
    difficulty: "A",
    text: "I need some ___ about the course.",
    options: ["informations", "an information", "information", "informationes"],
    correct: [2],
    explanation:
      "Information — неисчисляемое: не имеет множественного числа и не употребляется с a/an. " +
      "Так же ведут себя advice, news, knowledge, research.",
  },
  {
    id: "en-nn-4",
    topic: "noun",
    difficulty: "A",
    text: "There isn't ___ milk left in the fridge.",
    options: ["many", "much", "a few", "several"],
    correct: [1],
    explanation:
      "Milk неисчисляемо, поэтому нужен квантификатор для неисчисляемых — much. " +
      "Many, a few и several употребляются только с исчисляемыми.",
  },
  {
    id: "en-nn-5",
    topic: "noun",
    difficulty: "A",
    text: "This is my ___ car — they bought it together.",
    options: ["parent's", "parents'", "parents's", "parents"],
    correct: [1],
    explanation:
      "Владельцев двое, значит нужна форма множественного числа в притяжательном падеже: " +
      "к parents добавляется только апостроф — parents'.",
  },
  {
    id: "en-nn-6",
    topic: "noun",
    difficulty: "A",
    text: "The ___ toys are all over the floor.",
    options: ["childrens'", "children's", "childrens's", "childrens"],
    correct: [1],
    explanation:
      "Children — уже форма множественного числа, но не на -s, поэтому притяжательный падеж " +
      "образуется как обычно: children's.",
  },

  /* ---------- Задания из пробников ЦЕНТ (папка ПробникКакойТо2) ---------- */
  {
    id: "ct-en-vb1",
    topic: "verb",
    difficulty: "A",
    text: "I don't understand the meaning of this word. What ___ this word ___?",
    options: ["do / means", "do / mean", "does / means", "does / mean"],
    correct: [3],
    explanation:
      "Подлежащее word — третье лицо единственного числа, поэтому вспомогательный глагол does. " +
      "После него смысловой глагол ставится в начальной форме БЕЗ -s: does … mean. " +
      "Окончание -s уже «ушло» во вспомогательный глагол.",
  },
  {
    id: "ct-en-vb2",
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
      "Действие длилось в момент, когда его увидели, — нужен Past Continuous. С местоимением " +
      "you употребляется were, а не was. Второй глагол присоединяется через and и повторять " +
      "вспомогательный глагол не нужно: were sitting and reading.",
  },
  {
    id: "ct-en-nf1",
    topic: "non-finite",
    difficulty: "B",
    text: "Let's watch this performance. It ___ fantastic.",
    options: ["supposed", "is supposed to be", "is supposed to", "supposed to be"],
    correct: [1],
    explanation:
      "Конструкция be supposed to be — «считается, должен быть». Нужны все три части: " +
      "глагол-связка is, причастие supposed и инфинитив to be. Без is получилось бы " +
      "предложение без сказуемого.",
  },
  {
    id: "ct-en-md1",
    topic: "mood",
    difficulty: "A",
    text: 'Which mood is used in the following sentence: "Take it!"',
    options: ["Indicative", "Subjunctive", "Interrogative", "Imperative"],
    correct: [3],
    explanation:
      "Побуждение без подлежащего и с глаголом в начальной форме — повелительное наклонение " +
      "(imperative). Interrogative — это тип предложения по цели высказывания, а не наклонение.",
  },
  {
    id: "ct-en-md2",
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
      "Изъявительное наклонение констатирует реальный факт. Остальные три предложения — " +
      "сослагательное наклонение: два условных второго типа и конструкция с I wish.",
  },

  /* ---------- Чтение: тексты из пробников ЦЕНТ ---------- */
  {
    id: "ct-en-rd1",
    topic: "reading",
    difficulty: "A",
    passage: P_TUBE,
    text: "The longest escalator in Europe is on the ___",
    options: ["Southern line", "Central line", "Northern line", "Victoria line"],
    correct: [2],
    explanation:
      "«The longest escalator in Europe is at Angel station on the Northern line.» " +
      "Central line упомянута в другом месте — там пошли первые поезда в 1863 году, " +
      "а Victoria line приведена как пример синей линии на карте.",
  },
  {
    id: "ct-en-rd2",
    topic: "reading",
    difficulty: "B",
    passage: P_TUBE,
    text: "If a person using an escalator is short of time, they ___",
    options: [
      "should walk on the left side",
      "should use a lift",
      "should walk on the right side",
      "shouldn't use underground",
    ],
    correct: [0],
    explanation:
      "«People using the escalators stand on the right-hand side, those in a hurry walk on the left.» " +
      "Правая сторона — для тех, кто СТОИТ; спешащие идут по ЛЕВОЙ. " +
      "Задание проверяет, не спутаете ли вы две половины одного предложения.",
  },
  {
    id: "ct-en-rd3",
    topic: "reading",
    difficulty: "A",
    passage: P_TUBE,
    text: "What is an Oyster card?",
    options: [
      "A paper ticket valid for one day",
      "A smart card with an electronic chip you can charge with credit",
      "A discount card for residents of zone one",
      "A card that gives free travel during rush hour",
    ],
    correct: [1],
    explanation:
      "«This is a smart card with an electronic chip that you can charge with credit, and use to " +
      "pay for the Underground and buses.» Daily ticket и travel card перечислены отдельно.",
  },
  {
    id: "ct-en-rd4",
    topic: "reading",
    difficulty: "B",
    passage: P_TUBE,
    text: "Why does the Underground not run 24 hours?",
    options: [
      "Because there are too few passengers at night",
      "Because track maintenance is done after the system closes",
      "Because of safety announcements",
      "Because the escalators are switched off",
    ],
    correct: [1],
    explanation:
      "«The Underground doesn't run 24 hours. Track maintenance is done at night, after the system " +
      "closes.» Причина названа прямо в следующем предложении — обслуживание путей.",
  },
  {
    id: "ct-en-rd5",
    topic: "reading",
    difficulty: "C",
    passage: P_TUBE,
    text: "What is the text mainly about?",
    options: [
      "The history of London during World War II",
      "How the London Underground works and how to use it",
      "Comparison of underground systems around the world",
      "Safety problems on the London Underground",
    ],
    correct: [1],
    explanation:
      "Текст описывает устройство метро, зоны, билеты, часы работы и правила поведения — " +
      "это практическое описание системы. Война и объявления безопасности упомянуты, " +
      "но занимают лишь по несколько предложений и главной темой не являются.",
  },
  {
    id: "ct-en-rd6",
    topic: "reading",
    difficulty: "A",
    passage: P_CLASS,
    text: "For this course you need a ___",
    options: [
      "British Life and Language Level 2 Teacher's Book",
      "British Life and Language Level 2 Student's Book",
      "British Life and Language Level 1 Student's Book",
      "British Life and Language Level 1 Teacher's Book",
    ],
    correct: [2],
    explanation:
      "«For this course you need the book. Here it is: British Life and Language Level 1 " +
      "Student's Book.» Здесь важны сразу два уточнения — уровень 1 и именно Student's Book.",
  },
  {
    id: "ct-en-rd7",
    topic: "reading",
    difficulty: "A",
    passage: P_CLASS,
    text: "Classes will be conducted on ___",
    options: [
      "Monday and Friday",
      "Monday and Tuesday",
      "Monday and Thursday",
      "Monday and Wednesday",
    ],
    correct: [3],
    explanation:
      "«We have our classes twice a week, on Monday and Wednesday.» Пятница в тексте тоже " +
      "упомянута, но это день приёмных часов преподавателя, а не занятий.",
  },
  {
    id: "ct-en-rd8",
    topic: "reading",
    difficulty: "B",
    passage: P_CLASS,
    text: "Where can students find the teacher outside class?",
    options: [
      "In Room 13 on the first floor",
      "In Office 7B on the second floor",
      "In the library on Monday",
      "In the British Council reception",
    ],
    correct: [1],
    explanation:
      "«I'm in Office 7B on the second floor. My office hour is Friday 6 p.m.» " +
      "Room 13 на первом этаже — это аудитория для занятий, а библиотека упомянута " +
      "только как место, где нужно взять учебник.",
  },
  {
    id: "ct-en-rd9",
    topic: "reading",
    difficulty: "C",
    passage: P_CLASS,
    text: "What can be inferred about the teacher's attitude to photocopies?",
    options: [
      "She allows them if the library has no copies left",
      "She disapproves of them and expects students to get the real book",
      "She has no opinion about them",
      "She will provide photocopies herself",
    ],
    correct: [1],
    explanation:
      "«I don't want to see any photocopies of the book!» — восклицание и прямой запрет. " +
      "Никаких оговорок и исключений в тексте не сделано.",
  },

  {
    id: "ct-en-rd10",
    topic: "reading",
    difficulty: "A",
    passage: P_SPORT,
    text: "What does Janet do at quarter past five?",
    options: ["checks her email", "cooks", "plays baseball", "runs"],
    correct: [0],
    explanation:
      "Четверть шестого — это 5:15. «At 5:15 am Janet checks her email for only 30 minutes " +
      "and then goes for her first run.» Бег начинается позже, около 5:45.",
  },
  {
    id: "ct-en-rd11",
    topic: "reading",
    difficulty: "A",
    passage: P_SPORT,
    text: "What does she usually eat for breakfast?",
    options: ["soup and salad", "porridge and toast", "bread and butter", "cereal and fruit"],
    correct: [3],
    explanation:
      "«Janet has a shower and then prepares breakfast, which is usually cereal and fruit.» " +
      "Слово occasionally в следующем предложении относится к исключениям, а вопрос — про обычный завтрак.",
  },
  {
    id: "ct-en-rd12",
    topic: "reading",
    difficulty: "B",
    passage: P_SPORT,
    text: "What time does Janet arrive at the gym?",
    options: ["at 8:20 am", "at 8:50 am", "at 9:00 am", "at 9:30 am"],
    correct: [1],
    explanation:
      "Она выходит из дома в 8:20 и тратит 30 минут на дорогу, значит приезжает в 8:50. " +
      "9:00 — время НАЧАЛА тренировки, а не приезда: задание проверяет, сложите ли вы два " +
      "разных факта из текста.",
  },
  {
    id: "ct-en-rd13",
    topic: "reading",
    difficulty: "B",
    passage: P_SPORT,
    text: "What does Janet never do before going to sleep?",
    options: [
      "listen to music",
      "set her alarm",
      "watch television or read on her tablet",
      "go for a walk",
    ],
    correct: [2],
    explanation:
      "«She never watches the television or reads anything on her tablet.» Музыку она, наоборот, " +
      "иногда слушает, а будильник заводит всегда.",
  },
  {
    id: "ct-en-rd14",
    topic: "reading",
    difficulty: "C",
    passage: P_SPORT,
    text: "What can be concluded about Janet's lifestyle?",
    options: [
      "It is unpredictable and changes from day to day",
      "It is strictly organised around training and rest",
      "She struggles to keep a regular schedule",
      "She spends most of her free time watching television",
    ],
    correct: [1],
    explanation:
      "Весь текст — расписание с точностью до минут, повторяющееся каждый будний день. " +
      "Слова always, usually, typically подчёркивают регулярность, а television прямо назван " +
      "тем, чего она никогда не делает.",
  },
  {
    id: "ct-en-aj7",
    topic: "adjective",
    difficulty: "C",
    text: "I've been working very hard all day and now I'm ___.",
    options: ["exhausted", "exhausting", "exhaustened", "exhausty"],
    correct: [0],
    explanation:
      "Говорящий испытывает состояние, поэтому нужна форма на -ed: exhausted. " +
      "Exhausting описывало бы то, что утомляет («the work was exhausting»). " +
      "Форм exhaustened и exhausty не существует.",
  },
  {
    id: "ct-en-vb3",
    topic: "verb",
    difficulty: "A",
    text: "Our company ___ significantly over the past year.",
    options: ["grown", "has grown", "was grown", "grow"],
    correct: [1],
    explanation:
      "Оборот over the past year означает период, продолжающийся до настоящего момента, — " +
      "это Present Perfect. Grown без вспомогательного глагола сказуемым быть не может, " +
      "а was grown — страдательный залог: компанию кто-то «вырастил».",
  },
  {
    id: "ct-en-vb4",
    topic: "verb",
    difficulty: "B",
    text: "I'll give you a lift if it ___.",
    options: ["will rain", "is raining", "raining", "rained"],
    correct: [1],
    explanation:
      "В придаточном условия будущее время не употребляется — вместо will rain ставится " +
      "настоящее. Present Continuous здесь описывает дождь, идущий в момент выезда. " +
      "Raining без вспомогательного глагола сказуемым быть не может.",
  },

  /* ---------- Задания из сборника «300 вопросов, грамматика» ---------- */
  {
    id: "kb-en-nf1",
    topic: "non-finite",
    difficulty: "B",
    text: "We can't afford ___ on holiday this year.",
    options: ["to go", "that we gone", "being gone", "going"],
    correct: [0],
    explanation:
      "Глагол afford относится к группе, требующей инфинитива с to: afford, decide, agree, " +
      "promise, hope, refuse, manage. Герундий после него не употребляется.",
  },
  {
    id: "kb-en-nf2",
    topic: "non-finite",
    difficulty: "B",
    text: "Ann came to the party but she didn't stay very long. She ___ leave early.",
    options: ["has to", "had to", "could", "must"],
    correct: [1],
    explanation:
      "Всё предложение о прошлом (came, didn't stay), поэтому нужна прошедшая форма — had to. " +
      "У must прошедшего времени нет, его роль как раз и играет had to.",
  },
  {
    id: "kb-en-nf3",
    topic: "non-finite",
    difficulty: "B",
    text: "You ___ come with us if you don't want to.",
    options: ["don't have", "mustn't", "don't have to", "haven't to"],
    correct: [2],
    explanation:
      "Смысл — «можешь не идти», то есть ОТСУТСТВИЕ необходимости: don't have to или needn't. " +
      "Mustn't означало бы прямой запрет — противоположный смысл. " +
      "Формы «don't have» и «haven't to» в этом значении не используются.",
  },
  {
    id: "kb-en-nf4",
    topic: "non-finite",
    difficulty: "C",
    text: "Don't push Harry in the water. He ___ swim.",
    options: ["shouldn't", "can't", "has to", "must"],
    correct: [1],
    explanation:
      "Речь о неумении, то есть об отсутствии способности, — can't. " +
      "Shouldn't выражало бы совет, must — долженствование.",
  },
  {
    id: "kb-en-nf5",
    topic: "non-finite",
    difficulty: "C",
    text: "Please, stay here. I don't want you ___ anywhere.",
    options: ["go", "went", "going", "to go"],
    correct: [3],
    explanation:
      "Конструкция Complex Object: want + дополнение + инфинитив С частицей to. " +
      "Без to инфинитив ставится после make, let, have, а также после see, hear, feel.",
  },
  {
    id: "kb-en-nf6",
    topic: "non-finite",
    difficulty: "C",
    text: "When I was small I liked ___ very much and my mother didn't have to make me ___.",
    options: [
      "have danced; dance",
      "to be dancing; to dance",
      "dance; to dance",
      "to dance; dance",
    ],
    correct: [3],
    explanation:
      "После like — инфинитив с to (или герундий), а вот после make инфинитив идёт " +
      "БЕЗ to: make somebody do. Это ровно тот случай, ради которого задание и составлено.",
  },
  {
    id: "kb-en-vb5",
    topic: "verb",
    difficulty: "B",
    text: "This time tomorrow we ___ drinking coffee in Rome!",
    options: ["are going to", "will be", "will", "are going"],
    correct: [1],
    explanation:
      "Оборот this time tomorrow задаёт конкретный момент в будущем, в который действие " +
      "будет длиться, — это Future Continuous: will be + V-ing.",
  },
  {
    id: "kb-en-vb6",
    topic: "verb",
    difficulty: "B",
    text: "The water ___. Can you turn it off?",
    options: ["has boiling", "boils", "is boiling", "was boiling"],
    correct: [2],
    explanation:
      "Действие происходит прямо сейчас — Present Continuous. Форма boils в Present Simple " +
      "выражала бы постоянное свойство («вода кипит при 100 градусах»), а не текущий момент.",
  },
  {
    id: "kb-en-pp3",
    topic: "preposition",
    difficulty: "B",
    text: "I might not be at home ___ Tuesday morning, but I'll be there ___ the afternoon.",
    options: ["in, at", "—, at", "on, in", "at, on"],
    correct: [2],
    explanation:
      "С днём недели и частью суток вместе употребляется on: on Tuesday morning. " +
      "Отдельно взятая часть суток требует in: in the afternoon. " +
      "Это самая частая пара-ловушка в предлогах времени.",
  },
  {
    id: "kb-en-pp4",
    topic: "preposition",
    difficulty: "A",
    text: "I'm afraid I can't come to the party ___ Saturday.",
    options: ["under", "in", "on", "at"],
    correct: [2],
    explanation: "Дни недели всегда с предлогом on: on Saturday, on Monday.",
  },
  {
    id: "kb-en-aj8",
    topic: "adjective",
    difficulty: "C",
    text: "If you are not ___ in modern art, don't go to the exhibition. You might consider it ___.",
    options: [
      "interested/bored",
      "interesting/boring",
      "interested/boring",
      "interesting/bored",
    ],
    correct: [2],
    explanation:
      "Первый пропуск — о человеке, который испытывает интерес: форма на -ed (interested in). " +
      "Второй — о выставке, которая вызывает скуку: форма на -ing (boring). " +
      "В одном задании проверяются сразу обе стороны правила.",
  },
  {
    id: "kb-en-md3",
    topic: "mood",
    difficulty: "B",
    text: "His wish that everybody ___ in the work was reasonable.",
    options: ["took part", "shall take part", "should take part", "take part"],
    correct: [2],
    explanation:
      "После существительного wish в придаточном употребляется сослагательное наклонение: " +
      "should + основа глагола. Это книжный аналог конструкции с demand, suggest, insist, " +
      "где в американском варианте should опускается.",
  },
  {
    id: "kb-en-ad3",
    topic: "adverb",
    difficulty: "B",
    text: "Put the words in the correct order: watches / hardly / Mary / TV / ever.",
    options: [
      "Mary hardly ever watches TV.",
      "Mary hardly watches ever TV.",
      "Mary watches TV hardly ever.",
      "Hardly ever Mary watches TV.",
    ],
    correct: [0],
    explanation:
      "Hardly ever — устойчивое сочетание, разрывать его нельзя. Наречия частотности " +
      "ставятся перед смысловым глаголом, поэтому вся группа идёт до watches, " +
      "а дополнение TV — после глагола.",
  },
  {
    id: "kb-en-nn7",
    topic: "noun",
    difficulty: "A",
    text: "Do you have ___ eggs?",
    options: ["an", "— (no article)", "a", "the"],
    correct: [1],
    explanation:
      "Eggs — исчисляемое существительное во множественном числе в неопределённом значении, " +
      "артикль не нужен. A и an ставятся только перед единственным числом, " +
      "the потребовало бы, чтобы речь шла о конкретных, уже известных яйцах.",
  },

  /* =============== Article — артикль (A ×2) =============== */
  {
    id: "en-ar-1",
    topic: "article",
    difficulty: "A",
    text: "She is ___ honest person.",
    options: ["a", "an", "the", "— (no article)"],
    correct: [1],
    explanation:
      "Выбор между a и an зависит от звука, а не от буквы: в honest начальное h не читается, " +
      "слово начинается с гласного звука — нужен an. Сравните: a university (звук [j]).",
  },
  {
    id: "en-ar-2",
    topic: "article",
    difficulty: "A",
    text: "___ Everest is the highest mountain in the world.",
    options: ["The", "A", "An", "— (no article)"],
    correct: [3],
    explanation:
      "Отдельные горные вершины употребляются без артикля (Everest, Elbrus), а вот горные " +
      "цепи — с определённым: the Alps, the Tien Shan.",
  },
  {
    id: "en-ar-3",
    topic: "article",
    difficulty: "A",
    text: "He has been living in ___ United States for ten years.",
    options: ["a", "an", "the", "— (no article)"],
    correct: [2],
    explanation:
      "Названия государств во множественном числе и содержащие нарицательные слова " +
      "(States, Kingdom, Republic, Federation) требуют the: the United States, the Netherlands.",
  },
  {
    id: "en-ar-4",
    topic: "article",
    difficulty: "A",
    text: "___ Nile flows through several African countries.",
    options: ["A", "An", "The", "— (no article)"],
    correct: [2],
    explanation:
      "Названия рек, морей, океанов и каналов употребляются с определённым артиклем: " +
      "the Nile, the Caspian Sea, the Pacific Ocean.",
  },

  /* =============== Adjective — прилагательное (C ×3) =============== */
  {
    id: "en-aj-1",
    topic: "adjective",
    difficulty: "C",
    text: "That was ___ film I have ever seen.",
    options: ["the more boring", "the most boring", "most boring", "more boring"],
    correct: [1],
    explanation:
      "Многосложное прилагательное образует превосходную степень через the most. Конструкция " +
      "с «I have ever seen» всегда требует именно превосходной степени.",
  },
  {
    id: "en-aj-2",
    topic: "adjective",
    difficulty: "C",
    text: "The weather today is ___ than it was yesterday.",
    options: ["badder", "more bad", "worse", "worst"],
    correct: [2],
    explanation:
      "Bad — прилагательное с формами не по правилу: bad — worse — the worst. " +
      "Worst здесь не подходит: после than нужна сравнительная степень.",
  },
  {
    id: "en-aj-3",
    topic: "adjective",
    difficulty: "C",
    text: "The more you practise, ___ you become.",
    options: ["the best", "the better", "better", "the more better"],
    correct: [1],
    explanation:
      "Конструкция двойного сравнения: the + сравнительная степень …, the + сравнительная степень. " +
      "Артикль the обязателен в обеих частях, а «more better» — двойное сравнение, ошибка.",
  },
  {
    id: "en-aj-4",
    topic: "adjective",
    difficulty: "C",
    text: "Of the three candidates, Anna is ___.",
    options: ["more experienced", "the most experienced", "most experienced", "experienced more"],
    correct: [1],
    explanation:
      "Сравниваются три объекта, а не два, поэтому нужна превосходная степень с артиклем the.",
  },
  {
    id: "en-aj-5",
    topic: "adjective",
    difficulty: "C",
    text: "The lecture was so ___ that half the audience fell asleep.",
    options: ["bored", "boring", "bore", "bores"],
    correct: [1],
    explanation:
      "Форма на -ing описывает источник впечатления (лекция скучная), на -ed — того, кто его " +
      "испытывает (слушатели скучали). Здесь речь о лекции.",
  },
  {
    id: "en-aj-6",
    topic: "adjective",
    difficulty: "C",
    text: "We were all ___ by the news.",
    options: ["shocking", "shocked", "shock", "shocks"],
    correct: [1],
    explanation:
      "Подлежащее — люди, испытывающие чувство, поэтому нужна форма на -ed. " +
      "«We were shocking» означало бы, что шокировали мы.",
  },

  /* =============== Pronoun — местоимение (A ×1, B ×2, C ×1) =============== */
  {
    id: "en-pr-a1",
    topic: "pronoun",
    difficulty: "A",
    text: "___ books over there on the far shelf are mine.",
    options: ["This", "That", "These", "Those"],
    correct: [3],
    explanation:
      "Books — множественное число, «over there on the far shelf» указывает на удалённость: " +
      "нужно those. These — для близких предметов, this / that — для единственного числа.",
  },
  {
    id: "en-pr-a2",
    topic: "pronoun",
    difficulty: "A",
    text: "___ shoes I am wearing are new.",
    options: ["This", "These", "That", "Those"],
    correct: [1],
    explanation:
      "Множественное число (shoes) плюс близость к говорящему (он их носит) дают these.",
  },
  {
    id: "en-pr-b1",
    topic: "pronoun",
    difficulty: "B",
    text: "She didn't ask for help — she made the cake ___.",
    options: ["her", "hers", "herself", "she"],
    correct: [2],
    explanation:
      "Возвратное местоимение herself в усилительном значении «сама». Her — объектный падеж, " +
      "hers — притяжательное в абсолютной форме.",
  },
  {
    id: "en-pr-b2",
    topic: "pronoun",
    difficulty: "B",
    text: "This umbrella is ___, not yours.",
    options: ["my", "mine", "me", "myself"],
    correct: [1],
    explanation:
      "После глагола-связки без существительного нужна абсолютная форма притяжательного " +
      "местоимения — mine. My употребляется только перед существительным: my umbrella.",
  },
  {
    id: "en-pr-b3",
    topic: "pronoun",
    difficulty: "B",
    text: "The man ___ car was stolen called the police.",
    options: ["who", "whom", "whose", "which"],
    correct: [2],
    explanation:
      "Нужно относительное местоимение принадлежности: машина принадлежит человеку. " +
      "Whose работает и с одушевлёнными, и с неодушевлёнными.",
  },
  {
    id: "en-pr-b4",
    topic: "pronoun",
    difficulty: "B",
    text: "The house ___ we bought last year needs major repairs.",
    options: ["who", "whose", "which", "what"],
    correct: [2],
    explanation:
      "House — неодушевлённое, поэтому which (или that). What в качестве относительного " +
      "местоимения к существительному не употребляется — распространённая ошибка.",
  },
  {
    id: "en-pr-c1",
    topic: "pronoun",
    difficulty: "C",
    text: "___ of the two dresses do you prefer?",
    options: ["What", "Which", "Who", "Whose"],
    correct: [1],
    explanation:
      "Which употребляется, когда выбор идёт из ограниченного, известного набора — здесь из двух " +
      "платьев. What предполагает открытый список вариантов.",
  },
  {
    id: "en-pr-c2",
    topic: "pronoun",
    difficulty: "C",
    text: "I have ___ idea what he is talking about.",
    options: ["not", "no", "none", "nothing"],
    correct: [1],
    explanation:
      "Перед существительным отрицание выражается определителем no: I have no idea. " +
      "None употребляется без существительного, nothing — самостоятельное местоимение.",
  },

  /* =============== Numeral — числительное (A ×1, B ×2) =============== */
  {
    id: "en-nm-a1",
    topic: "numeral",
    difficulty: "A",
    text: "There are ___ students in our group.",
    options: ["twenty five", "twenty-five", "twentyfive", "twenty and five"],
    correct: [1],
    explanation:
      "Составные числительные от 21 до 99 пишутся через дефис: twenty-five, forty-seven. " +
      "Союз and между десятками и единицами не ставится.",
  },
  {
    id: "en-nm-a2",
    topic: "numeral",
    difficulty: "A",
    text: "The new stadium holds ___ people.",
    options: ["five thousands", "five thousand", "five thousands of", "the five thousand"],
    correct: [1],
    explanation:
      "После конкретного числа hundred, thousand, million не принимают -s: five thousand. " +
      "Форма thousands of употребляется только без числа: thousands of people.",
  },
  {
    id: "en-nm-b1",
    topic: "numeral",
    difficulty: "B",
    text: "He was born on ___ of May.",
    options: ["twenty-first", "the twenty-first", "twenty-one", "the twenty-one"],
    correct: [1],
    explanation:
      "В датах употребляется порядковое числительное с определённым артиклем: " +
      "the twenty-first of May.",
  },
  {
    id: "en-nm-b2",
    topic: "numeral",
    difficulty: "B",
    text: "The year 1995 is normally read as ___.",
    options: [
      "one thousand nine hundred ninety-five",
      "nineteen ninety-five",
      "nineteen hundred ninety five",
      "one nine nine five",
    ],
    correct: [1],
    explanation:
      "Годы читаются парами цифр: 1995 — nineteen ninety-five, 1804 — eighteen oh four. " +
      "Исключение — 2000-е: 2005 читается two thousand and five.",
  },
  {
    id: "en-nm-b3",
    topic: "numeral",
    difficulty: "B",
    text: "The fraction 2/3 is read as ___.",
    options: ["two third", "two thirds", "second three", "two by three"],
    correct: [1],
    explanation:
      "В дробях числитель — количественное числительное, знаменатель — порядковое, " +
      "и при числителе больше единицы знаменатель ставится во множественное число: two thirds.",
  },
  {
    id: "en-nm-b4",
    topic: "numeral",
    difficulty: "B",
    text: "The number 3½ is read as ___.",
    options: ["three and half", "three and a half", "three a half", "three half"],
    correct: [1],
    explanation: "Смешанные числа читаются с and и артиклем перед half: three and a half.",
  },

  /* =============== Verb — глагол и времена (A ×2, B ×1, C ×2) =============== */
  {
    id: "en-vb-a1",
    topic: "verb",
    difficulty: "A",
    text: "I ___ my keys, so I can't open the door.",
    options: ["lost", "have lost", "had lost", "was losing"],
    correct: [1],
    explanation:
      "Present Perfect: действие в прошлом, результат которого важен сейчас (дверь не открыть). " +
      "Past Simple потребовал бы указания на завершённый момент в прошлом.",
  },
  {
    id: "en-vb-a2",
    topic: "verb",
    difficulty: "A",
    text: "She ___ to London last summer.",
    options: ["has gone", "went", "has been", "goes"],
    correct: [1],
    explanation:
      "Указан конкретный завершённый период в прошлом (last summer) — это Past Simple. " +
      "С такими обстоятельствами Present Perfect не употребляется.",
  },
  {
    id: "en-vb-a3",
    topic: "verb",
    difficulty: "A",
    text: "By the time you arrive, we ___ dinner.",
    options: ["will finish", "will have finished", "are finishing", "finish"],
    correct: [1],
    explanation:
      "Future Perfect: действие завершится к определённому моменту в будущем. " +
      "Маркер — оборот by the time.",
  },
  {
    id: "en-vb-a4",
    topic: "verb",
    difficulty: "A",
    text: "He said he ___ call us the next day.",
    options: ["will", "would", "shall", "is going to"],
    correct: [1],
    explanation:
      "Future in the Past: при согласовании времён в косвенной речи will переходит в would.",
  },
  {
    id: "en-vb-b1",
    topic: "verb",
    difficulty: "B",
    text: "Water ___ at 100 degrees Celsius.",
    options: ["boil", "boils", "is boiling", "has boiled"],
    correct: [1],
    explanation:
      "Present Simple используется для постоянных истин и законов природы. " +
      "Present Continuous описывал бы происходящее прямо сейчас.",
  },
  {
    id: "en-vb-b2",
    topic: "verb",
    difficulty: "B",
    text: "Listen! Someone ___ at the door.",
    options: ["knocks", "is knocking", "has knocked", "knocked"],
    correct: [1],
    explanation:
      "Present Continuous: действие происходит в момент речи. Императив Listen! — прямое " +
      "указание на «сейчас».",
  },
  {
    id: "en-vb-c1",
    topic: "verb",
    difficulty: "C",
    text: "When I arrived at the station, the train ___.",
    options: ["already left", "has already left", "had already left", "was already leaving"],
    correct: [2],
    explanation:
      "Past Perfect: из двух прошедших действий раньше произошло то, что выражено had + причастие. " +
      "Поезд ушёл до моего прихода.",
  },
  {
    id: "en-vb-c2",
    topic: "verb",
    difficulty: "C",
    text: "While she ___ dinner, the phone rang.",
    options: ["cooked", "was cooking", "had cooked", "has cooked"],
    correct: [1],
    explanation:
      "Past Continuous описывает длительный фон, Past Simple — короткое действие, которое его " +
      "прервало. Маркер while почти всегда указывает на длительное действие.",
  },
  {
    id: "en-vb-c3",
    topic: "verb",
    difficulty: "C",
    text: "The bridge ___ in 1890 and is still in use.",
    options: ["built", "was built", "has built", "is building"],
    correct: [1],
    explanation:
      "Мост не может строить сам себя — нужен страдательный залог: was + причастие прошедшего " +
      "времени, время прошедшее из-за даты 1890.",
  },
  {
    id: "en-vb-c4",
    topic: "verb",
    difficulty: "C",
    text: "This room ___ every day by the cleaning staff.",
    options: ["cleans", "is cleaned", "is cleaning", "has cleaned"],
    correct: [1],
    explanation:
      "Present Simple Passive: регулярное действие, направленное на подлежащее. " +
      "Наличие by the cleaning staff прямо указывает на страдательный залог.",
  },

  /* ===== Non-finite verb forms — неличные формы и модальные (A ×1, B ×2, C ×2) ===== */
  {
    id: "en-nf-a1",
    topic: "non-finite",
    difficulty: "A",
    text: "I look forward to ___ from you soon.",
    options: ["hear", "hearing", "to hear", "heard"],
    correct: [1],
    explanation:
      "В обороте look forward to частица to — предлог, а не показатель инфинитива, поэтому после " +
      "неё ставится герундий. Та же логика у be used to и object to.",
  },
  {
    id: "en-nf-a2",
    topic: "non-finite",
    difficulty: "A",
    text: "She denied ___ the money.",
    options: ["to take", "taking", "take", "taken"],
    correct: [1],
    explanation:
      "После deny, admit, avoid, suggest, enjoy, mind употребляется только герундий. " +
      "Инфинитив требуют другие глаголы: decide, agree, promise.",
  },
  {
    id: "en-nf-b1",
    topic: "non-finite",
    difficulty: "B",
    text: "You ___ smoke here — it's a hospital.",
    options: ["needn't", "mustn't", "don't have to", "couldn't"],
    correct: [1],
    explanation:
      "Mustn't выражает запрет. Needn't и don't have to означают отсутствие необходимости " +
      "(«можно и не делать»), что здесь противоположно смыслу.",
  },
  {
    id: "en-nf-b2",
    topic: "non-finite",
    difficulty: "B",
    text: "She ___ be at home — I saw her leave an hour ago.",
    options: ["mustn't", "can't", "needn't", "shouldn't"],
    correct: [1],
    explanation:
      "Уверенное отрицательное предположение выражается через can't («не может быть, чтобы»). " +
      "Mustn't означает запрет, а не сомнение.",
  },
  {
    id: "en-nf-b3",
    topic: "non-finite",
    difficulty: "B",
    text: "You ___ have told me earlier — now it's too late to change anything.",
    options: ["should", "must", "can", "may"],
    correct: [0],
    explanation:
      "Should have + причастие выражает упрёк за несделанное в прошлом. Must have означало бы " +
      "уверенное предположение, что говорящему всё-таки сказали.",
  },
  {
    id: "en-nf-b4",
    topic: "non-finite",
    difficulty: "B",
    text: "___ I use your phone for a moment?",
    options: ["May", "Must", "Should", "Would"],
    correct: [0],
    explanation:
      "May — вежливая просьба о разрешении. Must выражает долженствование, should — совет, " +
      "would без глагола в такой конструкции не употребляется.",
  },
  {
    id: "en-nf-c1",
    topic: "non-finite",
    difficulty: "C",
    text: "He is said ___ one of the finest scientists of his generation.",
    options: ["be", "to be", "being", "been"],
    correct: [1],
    explanation:
      "Конструкция Complex Subject: подлежащее + глагол в страдательном залоге (is said, " +
      "is believed, is known) + инфинитив с to.",
  },
  {
    id: "en-nf-c2",
    topic: "non-finite",
    difficulty: "C",
    text: "It was too dark ___ anything.",
    options: ["for seeing", "to see", "seeing", "to seeing"],
    correct: [1],
    explanation:
      "Конструкция too + прилагательное + инфинитив с to выражает избыточность, мешающую действию: " +
      "«слишком темно, чтобы что-то увидеть».",
  },
  {
    id: "en-nf-c3",
    topic: "non-finite",
    difficulty: "C",
    text: "___ the letter twice, she put it back into the envelope.",
    options: ["Reading", "Having read", "Read", "To read"],
    correct: [1],
    explanation:
      "Perfect Participle (having + причастие) показывает, что действие завершилось раньше " +
      "главного. Простое Reading означало бы одновременность.",
  },
  {
    id: "en-nf-c4",
    topic: "non-finite",
    difficulty: "C",
    text: "The house ___ last year is already up for sale.",
    options: ["building", "built", "to build", "having built"],
    correct: [1],
    explanation:
      "Дом построили — значение страдательное, нужно Participle II (built). " +
      "Building означало бы, что дом сам что-то строит.",
  },

  /* =============== Adverb — наречие (B ×1, C ×1) =============== */
  {
    id: "en-ad-b1",
    topic: "adverb",
    difficulty: "B",
    text: "He ___ late for meetings — he is extremely punctual.",
    options: ["is never", "never is", "is not never", "never"],
    correct: [0],
    explanation:
      "Наречия неопределённой частотности ставятся ПОСЛЕ глагола to be и ПЕРЕД остальными " +
      "смысловыми глаголами: he is never late, но he never comes late.",
  },
  {
    id: "en-ad-b2",
    topic: "adverb",
    difficulty: "B",
    text: "I have ___ finished my homework, so I can go out.",
    options: ["already", "yet", "still", "ever"],
    correct: [0],
    explanation:
      "Already употребляется в утвердительных предложениях и стоит между вспомогательным и " +
      "смысловым глаголом. Yet — для вопросов и отрицаний, в конце предложения.",
  },
  {
    id: "en-ad-c1",
    topic: "adverb",
    difficulty: "C",
    text: "The team worked ___ to meet the deadline.",
    options: ["hardly", "hard", "hardily", "harder"],
    correct: [1],
    explanation:
      "Hard — и прилагательное, и наречие со значением «усердно». Hardly — самостоятельное " +
      "наречие со значением «едва, почти не»: they hardly worked означало бы «почти не работали».",
  },
  {
    id: "en-ad-c2",
    topic: "adverb",
    difficulty: "C",
    text: "She ___ ever complains about anything.",
    options: ["hard", "hardly", "harder", "hardness"],
    correct: [1],
    explanation:
      "Hardly ever — устойчивое сочетание со значением «почти никогда». Обратите внимание: " +
      "hardly уже несёт отрицание, поэтому второе отрицание не ставится.",
  },

  /* =============== Preposition — предлог (A ×1, B ×1) =============== */
  {
    id: "en-pp-a1",
    topic: "preposition",
    difficulty: "A",
    text: "He is very good ___ mathematics.",
    options: ["in", "at", "on", "for"],
    correct: [1],
    explanation:
      "Устойчивое сочетание good at (something) — «хорош в чём-либо». " +
      "Сравните: interested in, afraid of, responsible for.",
  },
  {
    id: "en-pp-a2",
    topic: "preposition",
    difficulty: "A",
    text: "This novel was written ___ Hemingway.",
    options: ["from", "of", "by", "with"],
    correct: [2],
    explanation:
      "В страдательном залоге исполнитель действия вводится предлогом by, а инструмент — with: " +
      "written by Hemingway with a pencil.",
  },
  {
    id: "en-pp-b1",
    topic: "preposition",
    difficulty: "B",
    text: "The meeting is ___ Monday ___ nine o'clock.",
    options: ["in … on", "on … at", "at … in", "on … in"],
    correct: [1],
    explanation:
      "Дни недели — с on, точное время — с at, месяцы и годы — с in. " +
      "Правило «at — точка, on — день, in — период» покрывает большинство случаев.",
  },
  {
    id: "en-pp-b2",
    topic: "preposition",
    difficulty: "B",
    text: "She lives ___ a small village ___ the north of the country.",
    options: ["in … in", "at … on", "on … in", "in … at"],
    correct: [0],
    explanation:
      "In употребляется с населёнными пунктами и с частями света внутри страны: " +
      "in a village, in the north of the country.",
  },

  /* =============== Mood — наклонение (B ×2) =============== */
  {
    id: "en-md-1",
    topic: "mood",
    difficulty: "B",
    text: "If I ___ you, I would accept the offer.",
    options: ["am", "was", "were", "would be"],
    correct: [2],
    explanation:
      "Сослагательное наклонение во втором типе условных: во всех лицах употребляется were. " +
      "Оборот if I were you — стандартная форма совета.",
  },
  {
    id: "en-md-2",
    topic: "mood",
    difficulty: "B",
    text: "I wish I ___ more time to prepare yesterday.",
    options: ["have", "had", "had had", "would have"],
    correct: [2],
    explanation:
      "Сожаление о прошлом после I wish выражается через Past Perfect: had had. " +
      "Простое had относилось бы к настоящему.",
  },
  {
    id: "en-md-3",
    topic: "mood",
    difficulty: "B",
    text: "The committee demanded that he ___ from his post immediately.",
    options: ["resigns", "resigned", "resign", "will resign"],
    correct: [2],
    explanation:
      "После глаголов demand, suggest, insist, require в придаточном стоит форма сослагательного " +
      "наклонения — голая основа глагола без -s, независимо от лица и времени.",
  },
  {
    id: "en-md-4",
    topic: "mood",
    difficulty: "B",
    text: "Which sentence is in the imperative mood?",
    options: [
      "He closes the door quietly.",
      "Close the door, please.",
      "The door was closed by the wind.",
      "If he closed the door, it would be quieter.",
    ],
    correct: [1],
    explanation:
      "Повелительное наклонение выражает побуждение и не имеет подлежащего. " +
      "Четвёртый вариант — сослагательное наклонение, третий — изъявительное в пассиве.",
  },

  /* =============== Lexicology — лексикология (C ×1) =============== */
  {
    id: "en-lx-1",
    topic: "lexicology",
    difficulty: "C",
    text: "Choose the synonym of the word «significant».",
    options: ["trivial", "considerable", "doubtful", "temporary"],
    correct: [1],
    explanation:
      "Significant и considerable оба означают «значительный». Trivial — прямой антоним " +
      "(«незначительный»), и именно он чаще всего сбивает.",
  },
  {
    id: "en-lx-2",
    topic: "lexicology",
    difficulty: "C",
    text: "Choose the antonym of the word «scarce».",
    options: ["rare", "limited", "abundant", "narrow"],
    correct: [2],
    explanation:
      "Scarce — «скудный, дефицитный», его противоположность abundant — «обильный». " +
      "Rare и limited, наоборот, близки к scarce по смыслу.",
  },

  /* ================== Блок III. Чтение (A ×12, B ×12, C ×12) ================== */

  /* --- Text 1 --- */
  {
    id: "en-rd-1a",
    topic: "reading",
    difficulty: "A",
    passage: P_CITY,
    text: "What time does the bakery open?",
    options: ["At six", "At seven", "At half past seven", "At eight"],
    correct: [1],
    explanation: "«It opens at seven in the morning». Половина восьмого — время, когда улица уже пахнет хлебом.",
  },
  {
    id: "en-rd-1b",
    topic: "reading",
    difficulty: "A",
    passage: P_CITY,
    text: "How long does it take to get to the city centre?",
    options: ["Ten minutes", "Fifteen minutes", "Twenty minutes", "Half an hour"],
    correct: [2],
    explanation: "«About twenty minutes from the city centre by bus».",
  },
  {
    id: "en-rd-1c",
    topic: "reading",
    difficulty: "A",
    passage: P_CITY,
    text: "What does Mrs Kim do every Saturday?",
    options: [
      "She bakes bread for the neighbours",
      "She brings vegetables from the market and shares them",
      "She plays chess in the courtyard",
      "She visits her old university",
    ],
    correct: [1],
    explanation: "Текст прямо описывает её субботнюю привычку делиться овощами с соседями.",
  },
  {
    id: "en-rd-1d",
    topic: "reading",
    difficulty: "B",
    passage: P_CITY,
    text: "What can be inferred about the apple trees on the street?",
    options: [
      "They were planted by the author's family",
      "They are older than the author's house",
      "They were planted by the city last year",
      "They no longer produce fruit",
    ],
    correct: [1],
    explanation:
      "«Planted long before our house was built» — деревья старше дома. Остальные утверждения " +
      "текст не поддерживает.",
  },
  {
    id: "en-rd-1e",
    topic: "reading",
    difficulty: "B",
    passage: P_CITY,
    text: "Why does the author mention the new districts?",
    options: [
      "To explain why they are more expensive",
      "To contrast their anonymity with the close ties in his own area",
      "To say that he is planning to move there",
      "To criticise the quality of their buildings",
    ],
    correct: [1],
    explanation:
      "Новые районы упомянуты в противопоставлении: «where nobody knows their neighbours» — " +
      "именно поэтому автор никуда не переезжает.",
  },
  {
    id: "en-rd-1f",
    topic: "reading",
    difficulty: "C",
    passage: P_CITY,
    text: "Which title best fits the text?",
    options: [
      "The history of Almaty's architecture",
      "Why I stay where the neighbours know each other",
      "The best bakeries in the city",
      "Problems of old housing in Kazakhstan",
    ],
    correct: [1],
    explanation:
      "Текст описывает не архитектуру и не пекарни, а причину привязанности к району — " +
      "человеческие связи. Это и есть его главная мысль.",
  },

  /* --- Text 2 --- */
  {
    id: "en-rd-2a",
    topic: "reading",
    difficulty: "A",
    passage: P_UNI,
    text: "How long must Bolashak graduates work in the country after returning?",
    options: ["Three years", "Four years", "Five years", "Ten years"],
    correct: [2],
    explanation: "«Must return home and work in the country for five years afterwards».",
  },
  {
    id: "en-rd-2b",
    topic: "reading",
    difficulty: "A",
    passage: P_UNI,
    text: "In how many languages are many programmes taught?",
    options: ["One", "Two", "Three", "Four"],
    correct: [2],
    explanation: "«Taught in three languages: Kazakh, Russian and English».",
  },
  {
    id: "en-rd-2c",
    topic: "reading",
    difficulty: "A",
    passage: P_UNI,
    text: "What does the credit system allow students to do?",
    options: [
      "Pay for their studies in instalments",
      "Choose part of their courses themselves",
      "Finish their degree in one year",
      "Study only in English",
    ],
    correct: [1],
    explanation:
      "«Students choose part of their courses themselves instead of following a fixed timetable». " +
      "Слово credit здесь не имеет отношения к оплате — типичная ловушка.",
  },
  {
    id: "en-rd-2d",
    topic: "reading",
    difficulty: "B",
    passage: P_UNI,
    text: "What is the critics' main argument against the Bolashak programme?",
    options: [
      "It is too expensive for the state budget",
      "Too few applicants receive the scholarship",
      "Returning graduates cannot apply their experience because institutions change slowly",
      "Graduates prefer to stay abroad instead of returning",
    ],
    correct: [2],
    explanation:
      "Критика в тексте касается не денег и не невозвращенцев, а разрыва между опытом " +
      "выпускников и темпом изменений на местах.",
  },
  {
    id: "en-rd-2e",
    topic: "reading",
    difficulty: "B",
    passage: P_UNI,
    text: "What advantage of the single complex test does the author mention?",
    options: [
      "It measures research ability accurately",
      "It makes admission more transparent",
      "It is shorter than previous exams",
      "It allows universities to set their own questions",
    ],
    correct: [1],
    explanation:
      "«The test is the same across the country, which makes admission more transparent». " +
      "Про исследовательские способности сказано прямо противоположное.",
  },
  {
    id: "en-rd-2f",
    topic: "reading",
    difficulty: "C",
    passage: P_UNI,
    text: "How would you describe the author's attitude to the changes in higher education?",
    options: [
      "Enthusiastic: the reforms have solved the main problems",
      "Balanced: the author gives both arguments and counter-arguments",
      "Hostile: the author considers the reforms harmful",
      "Indifferent: the author simply lists dates and figures",
    ],
    correct: [1],
    explanation:
      "Каждое утверждение сопровождается возражением: supporters — critics, transparent — " +
      "«some teachers argue». Автор нигде не встаёт на одну сторону.",
  },

  /* --- Text 3 --- */
  {
    id: "en-rd-3a",
    topic: "reading",
    difficulty: "A",
    passage: P_SCI,
    text: "What term do statisticians use for the problem described in the text?",
    options: ["Sampling error", "Publication bias", "Selection pressure", "Peer review"],
    correct: [1],
    explanation: "«This habit created what statisticians call publication bias».",
  },
  {
    id: "en-rd-3b",
    topic: "reading",
    difficulty: "A",
    passage: P_SCI,
    text: "Since when have some journals accepted papers before the results are known?",
    options: ["Since the 1950s", "Since the 1980s", "Since the 2000s", "Since 2020"],
    correct: [2],
    explanation: "«Since the 2000s several journals have begun accepting papers…».",
  },
  {
    id: "en-rd-3c",
    topic: "reading",
    difficulty: "A",
    passage: P_SCI,
    text: "According to the text, what happened to experiments that produced no effect in the twentieth century?",
    options: [
      "They were repeated until they succeeded",
      "They were filed away and not published",
      "They were published in separate journals",
      "They were reported to funding bodies",
    ],
    correct: [1],
    explanation: "«Was quietly filed away, and the researcher moved on».",
  },
  {
    id: "en-rd-3d",
    topic: "reading",
    difficulty: "B",
    passage: P_SCI,
    text: "Why does the author use the example of nine studies and a tenth one?",
    options: [
      "To show that most drugs are ineffective",
      "To show how selective publishing can make an ineffective treatment look promising",
      "To explain how clinical trials are funded",
      "To prove that ten studies are enough for a conclusion",
    ],
    correct: [1],
    explanation:
      "Пример иллюстрирует механизм искажения: публикуется единственный положительный результат " +
      "из десяти, и картина переворачивается.",
  },
  {
    id: "en-rd-3e",
    topic: "reading",
    difficulty: "B",
    passage: P_SCI,
    text: "What does the author say is still slowing the change down?",
    options: [
      "Journals refuse to accept the new format",
      "Negative results attract fewer citations and careers are built on discoveries",
      "Funding bodies have not agreed to the reform",
      "Researchers do not know how to design sound experiments",
    ],
    correct: [1],
    explanation:
      "Названы именно стимулы: цитируемость и карьера. Про фонды сказано обратное — они уже " +
      "требуют публиковать все испытания.",
  },
  {
    id: "en-rd-3f",
    topic: "reading",
    difficulty: "C",
    passage: P_SCI,
    text: "What is the main idea of the text?",
    options: [
      "Scientific journals should publish fewer papers",
      "Hiding unsuccessful research distorts knowledge, and the practice is slowly being corrected",
      "Most medical treatments do not work",
      "Peer review is no longer a reliable method",
    ],
    correct: [1],
    explanation:
      "Три абзаца дают проблему, её последствия и начавшееся исправление. Остальные варианты " +
      "либо преувеличивают частность, либо в тексте не обсуждаются.",
  },
  {
    id: "en-rd-3g",
    topic: "reading",
    difficulty: "C",
    passage: P_SCI,
    text: "Which conclusion would the author most likely agree with?",
    options: [
      "A study is valuable only if it confirms a hypothesis",
      "A well-designed study is worth publishing regardless of its outcome",
      "Researchers should not repeat other teams' experiments",
      "Citations are a reliable measure of a study's importance",
    ],
    correct: [1],
    explanation:
      "Это прямо соответствует описанной практике: «If the design is sound, the paper is published " +
      "whatever the outcome».",
  },

  /* --- Text 4 --- */
  {
    id: "en-rd-4a",
    topic: "reading",
    difficulty: "A",
    passage: P_LANG,
    text: "Which three cities are mentioned in the first paragraph?",
    options: [
      "London, New York and Sydney",
      "Glasgow, Lagos and Auckland",
      "Dublin, Toronto and Cape Town",
      "Edinburgh, Nairobi and Wellington",
    ],
    correct: [1],
    explanation: "Перечислены именно Glasgow, Lagos и Auckland — Шотландия, Нигерия и Новая Зеландия.",
  },
  {
    id: "en-rd-4b",
    topic: "reading",
    difficulty: "A",
    passage: P_LANG,
    text: "According to the text, which language once broke apart into different languages?",
    options: ["Greek", "Latin", "Arabic", "Sanskrit"],
    correct: [1],
    explanation: "«…will fragment into mutually unintelligible dialects, as Latin once did».",
  },
  {
    id: "en-rd-4c",
    topic: "reading",
    difficulty: "B",
    passage: P_LANG,
    text: "What point does the example of the Kazakh engineer and the Brazilian colleague illustrate?",
    options: [
      "That English is difficult for non-native speakers",
      "That between second-language speakers the aim is mutual understanding, not a national accent",
      "That engineers need specialised vocabulary",
      "That English should be replaced by a neutral language",
    ],
    correct: [1],
    explanation:
      "Пример введён именно ради вывода: «the standard they aim at is mutual understanding rather " +
      "than the accent of any particular country».",
  },
  {
    id: "en-rd-4d",
    topic: "reading",
    difficulty: "B",
    passage: P_LANG,
    text: "What counter-argument is given to those who fear that English will fragment?",
    options: [
      "English has stricter grammar rules than Latin",
      "Modern communication holds the language together, unlike the roads of the Roman Empire",
      "Fewer people speak English than is usually assumed",
      "Governments actively regulate the language",
    ],
    correct: [1],
    explanation:
      "«Latin broke apart when the roads and the empire failed, whereas English is held together " +
      "by television, air travel and the internet».",
  },
  {
    id: "en-rd-4e",
    topic: "reading",
    difficulty: "C",
    passage: P_LANG,
    text: "Which statement best expresses the author's position?",
    options: [
      "The variety of Englishes is a problem that should be corrected",
      "The variety of Englishes is natural, and no country can claim to own the language",
      "Only native speakers set the standard of correct English",
      "English will inevitably split into separate languages",
    ],
    correct: [1],
    explanation:
      "Автор называет разнообразие «not a defect… the natural result» и заканчивает тем, что " +
      "вопрос о владельце языка больше не имеет очевидного ответа.",
  },
  {
    id: "en-rd-4f",
    topic: "reading",
    difficulty: "C",
    passage: P_LANG,
    text: "What is the function of the last sentence of the text?",
    options: [
      "It introduces a new topic for the next text",
      "It sums up the discussion by stating what is certain despite the disagreement",
      "It refutes everything said in the previous paragraph",
      "It gives a statistical proof of the author's thesis",
    ],
    correct: [1],
    explanation:
      "После изложения обеих позиций автор не выбирает сторону, а формулирует то, что не оспаривается " +
      "ни одной из них, — это классический итог-обобщение.",
  },
  {
    id: "en-rd-4g",
    topic: "reading",
    difficulty: "C",
    passage: P_LANG,
    text: "Which of the following would most weaken the author's argument?",
    options: [
      "Evidence that the number of English learners is still growing",
      "Evidence that speakers from different regions increasingly fail to understand one another",
      "Evidence that English borrows words from many languages",
      "Evidence that air travel has become cheaper",
    ],
    correct: [1],
    explanation:
      "Автор утверждает, что современные связи удерживают язык от распада. Растущее взаимное " +
      "непонимание — прямое опровержение этого тезиса; остальные факты его скорее подкрепляют.",
  },

  /* --- Text 5 --- */
  {
    id: "en-rd-5a",
    topic: "reading",
    difficulty: "A",
    passage: P_TRAD,
    text: "On what date is Nauryz celebrated?",
    options: ["1 March", "21 March", "31 March", "21 April"],
    correct: [1],
    explanation: "«Nauryz is celebrated on 21 March, the day of the spring equinox».",
  },
  {
    id: "en-rd-5b",
    topic: "reading",
    difficulty: "A",
    passage: P_TRAD,
    text: "How many ingredients must nauryz kozhe contain?",
    options: ["Three", "Five", "Seven", "Nine"],
    correct: [2],
    explanation: "«A soup that must contain seven ingredients, each standing for a quality».",
  },
  {
    id: "en-rd-5c",
    topic: "reading",
    difficulty: "B",
    passage: P_TRAD,
    text: "What happened to the holiday during the Soviet period?",
    options: [
      "It was celebrated on a different date",
      "It was officially discouraged and largely disappeared from public life",
      "It was extended from three days to a week",
      "It was combined with a religious festival",
    ],
    correct: [1],
    explanation:
      "«Officially discouraged for several decades and largely disappeared from public life», " +
      "восстановлен как государственный праздник в 1991 году.",
  },
  {
    id: "en-rd-5d",
    topic: "reading",
    difficulty: "B",
    passage: P_TRAD,
    text: "According to the text, what is the key difference between Nauryz and Easter?",
    options: [
      "Nauryz lasts longer than Easter",
      "Nauryz has a fixed astronomical date and no single religious owner",
      "Easter is older than Nauryz",
      "Easter is celebrated in more countries",
    ],
    correct: [1],
    explanation:
      "Пасха привязана к лунному календарю и к религиозной традиции, Наурыз — к равноденствию " +
      "и «has never been the property of a single faith».",
  },
  {
    id: "en-rd-5e",
    topic: "reading",
    difficulty: "C",
    passage: P_TRAD,
    text: "Why does the author say that comparisons with Western spring festivals «can mislead»?",
    options: [
      "Because Western festivals are less important",
      "Because the similarity of season hides real differences in origin and calendar",
      "Because Nauryz is not really a spring festival",
      "Because such comparisons were forbidden in the past",
    ],
    correct: [1],
    explanation:
      "Общее время года создаёт видимость сходства, тогда как основания у праздников разные — " +
      "астрономическое против религиозного, фиксированная дата против подвижной.",
  },
  {
    id: "en-rd-5f",
    topic: "reading",
    difficulty: "C",
    passage: P_TRAD,
    text: "Which idea runs through the whole text?",
    options: [
      "Nauryz is a purely Kazakh national tradition",
      "Nauryz is older and wider than any single state or religion",
      "Traditional holidays are disappearing under modern pressures",
      "The recipe of nauryz kozhe is the most important part of the holiday",
    ],
    correct: [1],
    explanation:
      "Первый абзац говорит о древности и распространённости, третий — об отсутствии единого " +
      "религиозного «владельца». Именно эта мысль связывает текст.",
  },

  /* --- Дополнительные задания к текстам 1–3 --- */
  {
    id: "en-rd-1g",
    topic: "reading",
    difficulty: "B",
    passage: P_CITY,
    text: "What does the author admit about his area?",
    options: [
      "It is far from public transport",
      "It is not fashionable and has few shops and restaurants",
      "It is noisy in the early morning",
      "Its buildings need urgent repair",
    ],
    correct: [1],
    explanation:
      "«The area is not fashionable. There are no expensive restaurants and only one small shop». " +
      "Это уступка, которую автор делает перед итоговым выводом.",
  },
  {
    id: "en-rd-1h",
    topic: "reading",
    difficulty: "C",
    passage: P_CITY,
    text: "What is the author's overall tone?",
    options: ["Regretful", "Affectionate", "Indignant", "Neutral and factual"],
    correct: [1],
    explanation:
      "Тёплые бытовые детали — запах хлеба, шахматы во дворе, овощи от соседки — и финальное " +
      "«I would not move anywhere else» создают явно тёплую интонацию.",
  },
  {
    id: "en-rd-2g",
    topic: "reading",
    difficulty: "C",
    passage: P_UNI,
    text: "Which sentence best summarises the text?",
    options: [
      "Kazakhstani higher education has been reformed, and each change brings both gains and objections",
      "Kazakhstani universities have fully adopted the Western model of education",
      "The complex test should be replaced by university-run examinations",
      "Studying abroad is the only way to get a good education",
    ],
    correct: [0],
    explanation:
      "Каждый из трёх абзацев устроен одинаково: изменение — довод за — довод против. " +
      "Обобщение должно отражать именно эту двойственность.",
  },
  {
    id: "en-rd-3i",
    topic: "reading",
    difficulty: "C",
    passage: P_SCI,
    text: "Which title best reflects the structure of the text?",
    options: [
      "How to design a clinical trial",
      "A hidden flaw in the scientific record — and how it is being repaired",
      "Why medical research is too expensive",
      "The history of scientific journals",
    ],
    correct: [1],
    explanation:
      "Текст движется от скрытого искажения (publication bias) через его последствия к начавшимся " +
      "исправлениям. Заголовок должен отражать обе части этого движения.",
  },
  {
    id: "en-rd-3h",
    topic: "reading",
    difficulty: "B",
    passage: P_SCI,
    text: "What exactly do the new journals evaluate before publication?",
    options: [
      "The importance of the results obtained",
      "The research question and the method",
      "The number of previous citations of the authors",
      "The amount of funding received",
    ],
    correct: [1],
    explanation:
      "«Accepting papers on the basis of the research question and the method, before the results " +
      "are known» — оценивается замысел, а не итог.",
  },
];
