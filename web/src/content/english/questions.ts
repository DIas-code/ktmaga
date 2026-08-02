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

  /* =============== Article — артикль (A ×2) =============== */

  /* =============== Adjective — прилагательное (C ×3) =============== */

  /* =============== Pronoun — местоимение (A ×1, B ×2, C ×1) =============== */

  /* =============== Numeral — числительное (A ×1, B ×2) =============== */

  /* =============== Verb — глагол и времена (A ×2, B ×1, C ×2) =============== */

  /* ===== Non-finite verb forms — неличные формы и модальные (A ×1, B ×2, C ×2) ===== */

  /* =============== Adverb — наречие (B ×1, C ×1) =============== */

  /* =============== Preposition — предлог (A ×1, B ×1) =============== */

  /* =============== Mood — наклонение (B ×2) =============== */

  /* =============== Lexicology — лексикология (C ×1) =============== */

  /* ================== Блок III. Чтение (A ×12, B ×12, C ×12) ================== */

  /* --- Text 1 --- */

  /* --- Text 2 --- */

  /* --- Text 3 --- */

  /* --- Text 4 --- */

  /* --- Text 5 --- */

  /* --- Дополнительные задания к текстам 1–3 --- */
];
