import type { Question } from "@/lib/types";

/** Задания по английскому из сборника тестов, 20 вариантов. Партия 04. */
export const batch04: Question[] = [
  {
    id: "mk-en-b04-1",
    topic: "article",
    difficulty: "A",
    text: "___ Sun rises in ___ east.",
    options: ["a, a", "the, the", "-, -", "-, the"],
    correct: [1],
    explanation:
      "Названия единственных в своём роде объектов природы идут с определённым артиклем: " +
      "the Sun, the Moon, the Earth, the sky. Стороны света в значении направления или части " +
      "света тоже требуют the: in the east, in the north, from the west. Вариант с нулевым " +
      "артиклем годился бы только для наречных сочетаний вроде go east, а неопределённый " +
      "артикль a вообще невозможен: он вводит один предмет из множества однотипных, " +
      "тогда как Солнце у нас одно.",
  },
  {
    id: "mk-en-b04-2",
    topic: "verb",
    difficulty: "A",
    text:
      "She _____ learn a few phrases in German if she plans to work in Frankfurt.",
    options: ["should", "should to", "ought", "is"],
    correct: [0],
    explanation:
      "Модальный глагол should выражает совет и рекомендацию, что точно отвечает смыслу " +
      "фразы: раз она собирается работать во Франкфурте, ей стоит выучить несколько " +
      "немецких фраз. После should инфинитив идёт без частицы to, поэтому should to learn " +
      "невозможно. Вариант ought сам по себе неполон: этот модальный глагол употребляется " +
      "только в связке ought to, а is требует после себя причастия или прилагательного, " +
      "но никак не голого инфинитива learn.",
  },
  {
    id: "mk-en-b04-3",
    topic: "article",
    difficulty: "B",
    text: "Sofia is ___ capital of ___ Bulgaria.",
    options: ["the/the", "the/-", "the/a", "-/a"],
    correct: [1],
    explanation:
      "Существительное capital обозначает единственный в своём роде объект внутри страны, " +
      "поэтому берёт определённый артикль: the capital of Bulgaria. Названия стран в " +
      "единственном числе без слов republic, kingdom, states употребляются без артикля, " +
      "так что перед Bulgaria стоит нуль. Вариант the/the лишний артикль перед страной, " +
      "the/a приписывает Болгарии одну из нескольких столиц, а -/a ошибочен дважды: " +
      "capital без артикля повисает, а страна получает неопределённый артикль.",
  },
  {
    id: "mk-en-b04-4",
    topic: "preposition",
    difficulty: "B",
    text:
      "People sometimes watch films that they are not interested ___ at all.",
    options: ["off", "out", "of", "in"],
    correct: [3],
    explanation:
      "Прилагательное interested закреплено за предлогом in: be interested in something. " +
      "Здесь предлог оторван от своего дополнения и вынесен в конец придаточного, " +
      "но управление сохраняется: films that they are not interested in. " +
      "Варианты off и out образуют фразовые глаголы совсем другой семантики и с " +
      "interested не сочетаются, а of путают с оборотами вроде be afraid of или be fond of, " +
      "где предлог действительно of, но у interested он другой.",
  },
  {
    id: "mk-en-b04-5",
    topic: "verb",
    difficulty: "B",
    text: "This time tomorrow we _____ drinking coffee in Rome!",
    options: ["are going to", "will be", "will", "are going"],
    correct: [1],
    explanation:
      "Обстоятельство this time tomorrow задаёт конкретную точку в будущем, а действие " +
      "мыслится как разворачивающееся в этот момент, поэтому нужен Future Continuous: " +
      "will be drinking. Форма will drinking невозможна, потому что после will идёт " +
      "инфинитив без to, а не причастие. Варианты are going to и are going сочетаются с " +
      "инфинитивом (are going to drink), а перед формой на -ing дают неграмотную " +
      "конструкцию и вдобавок передают намерение, а не процесс в заданный миг.",
  },
  {
    id: "mk-en-b04-6",
    topic: "mood",
    difficulty: "B",
    text: "If you ___ busy, I'll leave you alone.",
    options: ["are", "is", "was", "be"],
    correct: [0],
    explanation:
      "Это условное предложение первого типа, то есть реальное условие: в главной части " +
      "стоит will leave, значит в придаточной части после if нужен Present Simple, " +
      "а будущее время туда не ставится. Подлежащее you требует формы are, поэтому is " +
      "отпадает по согласованию. Форма was перевела бы предложение во второй тип " +
      "нереального условия, но тогда в главной части было бы would leave, а голое be " +
      "в изъявительном наклонении вообще не употребляется.",
  },
  {
    id: "mk-en-b04-7",
    topic: "preposition",
    difficulty: "B",
    text: "We try to go away from the city ___ weekends and ___ holidays.",
    options: ["on, in", "in, on", "at, on", "in, at"],
    correct: [2],
    explanation:
      "В британской норме с выходными употребляется at weekends, а с праздничными " +
      "периодами on holidays, поэтому подходит только пара at, on. Предлог in " +
      "закреплён за крупными отрезками времени (in July, in 2020, in the morning) " +
      "и к weekends не подходит. Варианты on, in и in, on переставляют предлоги местами " +
      "и дают сочетания in holidays, которого в языке нет, а in, at ошибочен в обеих частях.",
  },
  {
    id: "mk-en-b04-8",
    topic: "numeral",
    difficulty: "B",
    text: "We write and say 0.375 as ___________.",
    options: [
      "nought point three seven five",
      "nought point thirty seven and five",
      "nought point thirty seven five",
      "nought point three seventy five",
    ],
    correct: [0],
    explanation:
      "В английском десятичная дробь читается так: целая часть, слово point, а затем " +
      "каждая цифра после запятой называется отдельно. Поэтому 0.375 звучит как " +
      "nought point three seven five, где ноль передан словом nought (в американском " +
      "варианте zero). Все остальные варианты пытаются объединить цифры в двузначные " +
      "числа (thirty seven, seventy five) или вставить союз and, а такое чтение " +
      "допустимо только для целой части числа, но не для дробной.",
  },
  {
    id: "mk-en-b04-9",
    topic: "pronoun",
    difficulty: "B",
    text: "_____ is it made of?",
    options: ["What", "Where", "Whose", "Which"],
    correct: [0],
    explanation:
      "Оборот be made of спрашивает о материале, а материал в английском вопросе " +
      "запрашивается местоимением what, поэтому верно What is it made of. " +
      "Where спрашивает о месте и сочеталось бы с made in (страной изготовления), " +
      "а не с made of. Whose указывает на принадлежность и требует после себя " +
      "существительного, а which предполагает выбор из заранее известного " +
      "ограниченного набора, но никакого списка материалов в вопросе не задано.",
  },
  {
    id: "mk-en-b04-10",
    topic: "mood",
    difficulty: "A",
    text: "Please _________, Jane. We're getting late.",
    options: [
      "hurry up",
      "you are hurrying up",
      "you will hurry up",
      "to hurry up",
    ],
    correct: [0],
    explanation:
      "Обращение по имени и слово please показывают, что перед нами побуждение, " +
      "то есть повелительное наклонение. Оно строится голым инфинитивом без частицы to " +
      "и без подлежащего, поэтому нужна форма hurry up. Варианты you are hurrying up и " +
      "you will hurry up содержат подлежащее и превращают фразу в утверждение о том, " +
      "что Джейн торопится или поторопится, а to hurry up остаётся инфинитивом " +
      "и самостоятельным предложением быть не может.",
  },
  {
    id: "mk-en-b04-11",
    topic: "verb",
    difficulty: "A",
    text: "She _______ in a small village in the south of Spain.",
    options: ["has born", "was born", "born", "has been born"],
    correct: [1],
    explanation:
      "Значение родиться передаётся в английском страдательным залогом от глагола bear: " +
      "be born. Речь о завершённом факте прошлого, привязанном к месту рождения, " +
      "поэтому нужен Past Simple Passive: was born. Форма has born означала бы " +
      "действительный залог (она родила кого-то), born без вспомогательного глагола " +
      "не образует сказуемого, а has been born по-английски не употребляют: " +
      "рождение считают точечным событием прошлого, а не результатом, связанным с настоящим.",
  },
  {
    id: "mk-en-b04-12",
    topic: "verb",
    difficulty: "C",
    text: "He _________ his home town. It _________ after the war.",
    options: [
      "recognized/had been built",
      "was recognized/was built",
      "didn't recognize/had been rebuilt",
      "recognizes/is built",
    ],
    correct: [2],
    explanation:
      "Между частями нужна причинно-следственная связь: он не узнал родной город, " +
      "потому что тот был отстроен заново. Первое сказуемое ставится в Past Simple " +
      "в отрицании (didn't recognize), а перестройка произошла раньше момента узнавания, " +
      "поэтому вторая часть идёт в Past Perfect Passive: had been rebuilt. " +
      "Вариант recognized/had been built логически противоречив (узнал, хотя отстроили " +
      "заново), was recognized ставит человека в положение узнанного предмета, " +
      "а recognizes/is built переводит рассказ о прошлом в настоящее время.",
  },
  {
    id: "mk-en-b04-13",
    topic: "adjective",
    difficulty: "B",
    text:
      "It's _______ to learn a foreign language in the country where it is spoken.",
    options: ["so easy as", "easy than", "a lot easier", "easiest"],
    correct: [2],
    explanation:
      "Смысл фразы сравнительный: учить язык в стране носителей заметно легче, чем вне её, " +
      "поэтому нужна сравнительная степень easier, а усилитель a lot перед ней " +
      "означает намного. Вариант so easy as требует парного оборота с отрицанием " +
      "(not so easy as) и второго члена сравнения, easy than грубо ломает форму: " +
      "с than употребляется только сравнительная степень easier. " +
      "Превосходная степень easiest потребовала бы артикля the и означала бы " +
      "самый лёгкий из группы, а группы для выбора здесь нет.",
  },
  {
    id: "mk-en-b04-14",
    topic: "verb",
    difficulty: "C",
    text: "It _________ to reduce expenses by 10 %.",
    options: ["have decided", "has been decided", "decide", "don't decide"],
    correct: [1],
    explanation:
      "Формальное подлежащее it отсылает к последующему инфинитивному обороту, " +
      "а деятель не назван, поэтому конструкция страдательная: было решено сократить расходы. " +
      "Нужен Present Perfect Passive has been decided, где has согласуется с it " +
      "в третьем лице единственного числа. Форма have decided нарушает согласование " +
      "и к тому же ставит it в положение того, кто решает, а decide и don't decide " +
      "дают действительный залог с невозможным для it значением активного деятеля.",
  },
  {
    id: "mk-en-b04-15",
    topic: "adverb",
    difficulty: "B",
    text: "This church was built _______.",
    options: [
      "300 years ago",
      "in 300 years",
      "for 300 years",
      "since 300 years",
    ],
    correct: [0],
    explanation:
      "Слово ago отсчитывает срок назад от момента речи и всегда работает с прошедшим " +
      "временем, а сказуемое here стоит в Past Simple Passive was built, " +
      "поэтому подходит 300 years ago. Оборот in 300 years означает через триста лет " +
      "и указывает на будущее либо на срок выполнения работы, что противоречит " +
      "прошедшему времени. For 300 years задавало бы длительность строительства, " +
      "а since с промежутком времени вообще не сочетается: после него ставится " +
      "точка отсчёта (since 1700), а не отрезок.",
  },
  {
    id: "mk-en-b04-16",
    topic: "preposition",
    difficulty: "B",
    text: "Kazakh people used to eat Beshbarmak _____ their fingers.",
    options: ["with", "at", "in", "from"],
    correct: [0],
    explanation:
      "Орудие или средство действия вводится предлогом with: eat with a spoon, " +
      "write with a pen, eat with one's fingers. Именно поэтому руки как способ " +
      "поедания бешбармака требуют with. Предлог at указывает на точку или объект " +
      "воздействия, in на нахождение внутри, а from на источник или исходную точку " +
      "(eat from a plate означало бы есть из тарелки, а не пальцами).",
  },
  {
    id: "mk-en-b04-17",
    topic: "non-finite",
    difficulty: "C",
    text:
      "Both sides seem _______ on to their determination _______ a peaceful solution, don't they?",
    options: [
      "holding/to be finding",
      "to be holding/to find",
      "having held/found",
      "to be held/finding",
    ],
    correct: [1],
    explanation:
      "После глагола seem употребляется субъектный инфинитивный оборот, поэтому первый " +
      "пропуск требует инфинитива; поскольку речь о продолжающемся сейчас положении дел, " +
      "берётся продолженный инфинитив to be holding. Существительное determination " +
      "определяется инфинитивом цели в активной форме: determination to find a solution. " +
      "Вариант holding даёт причастие, которое после seem не ставится, having held " +
      "и found разрушают обе связи, а to be held переводит стороны в страдательный залог, " +
      "хотя держатся за решимость именно они сами.",
  },
  {
    id: "mk-en-b04-18",
    topic: "mood",
    difficulty: "A",
    text: "Which sentence is in the Imperative mood?",
    options: [
      "All the stories were interesting.",
      "Don't do that!",
      "It's necessary to finish this exercise on time.",
      "What a nice day!",
    ],
    correct: [1],
    explanation:
      "Повелительное наклонение выражает приказ, просьбу или запрет и формально узнаётся " +
      "по отсутствию подлежащего и по голому инфинитиву; в отрицании добавляется don't. " +
      "Этому описанию отвечает только Don't do that. Предложения All the stories were " +
      "interesting и It's necessary to finish this exercise on time сообщают факты " +
      "и стоят в изъявительном наклонении, а What a nice day является восклицательным " +
      "по цели высказывания, но глагола-побуждения в нём нет вовсе.",
  },
  {
    id: "mk-en-b04-19",
    topic: "non-finite",
    difficulty: "B",
    text: "I don't mind _______ to the restaurant.",
    options: ["drive", "to drive", "driving", "drove"],
    correct: [2],
    explanation:
      "Глагол mind входит в закрытый список глаголов, после которых употребляется " +
      "только герундий: mind, enjoy, avoid, finish, suggest, deny. Поэтому верна " +
      "форма driving. Инфинитив to drive после mind не ставится, как бы естественно " +
      "он ни звучал по-русски, голая форма drive возможна лишь после модальных глаголов " +
      "и в повелительном наклонении, а drove это личная форма прошедшего времени, " +
      "которая не может быть дополнением при другом сказуемом.",
  },
  {
    id: "mk-en-b04-20",
    topic: "verb",
    difficulty: "A",
    text: "They are at home today. They _______ TV at the moment.",
    options: ["are watching", "is watching", "watches", "watch"],
    correct: [0],
    explanation:
      "Маркер at the moment прямо указывает на действие, происходящее прямо сейчас, " +
      "а это зона Present Continuous, который строится как be + причастие на -ing. " +
      "Подлежащее they требует формы are, поэтому подходит are watching. " +
      "Форма is watching нарушает согласование с множественным числом, " +
      "а watches и watch относятся к Present Simple и обозначали бы привычку " +
      "или регулярное действие, что противоречит указанию на текущий момент " +
      "(да и watches сочетается только с третьим лицом единственного числа).",
  },
  {
    id: "mk-en-b04-21",
    topic: "pronoun",
    difficulty: "C",
    text:
      "Well, I think you ought to speak to that man _____ standing with a notebook in front of the car.",
    options: ["whose", "who", "who's", "which's"],
    correct: [2],
    explanation:
      "После man в придаточном определительном нужен относительный элемент, но следом " +
      "идёт только причастие standing без вспомогательного глагола, поэтому требуется " +
      "стяжённая форма who's, то есть who is standing. Голое who дало бы " +
      "that man who standing без сказуемого, что грамматически невозможно. " +
      "Притяжательное whose связывает человека с его вещью (the man whose notebook), " +
      "а формы which's в английском языке не существует вовсе, к тому же which " +
      "не употребляется применительно к людям.",
  },
  {
    id: "mk-en-b04-22",
    topic: "adjective",
    difficulty: "C",
    text: "The last hotel was _____ modern than this one.",
    options: ["slightly less", "bit less", "more least", "the least"],
    correct: [0],
    explanation:
      "Наличие than задаёт сравнительную степень, а убывающее сравнение строится " +
      "оборотом less + прилагательное + than: less modern than. Усилитель slightly " +
      "(немного) правомерно стоит перед сравнительной степенью, как a bit, much, far. " +
      "Вариант bit less неверен формально: перед bit обязателен артикль a. " +
      "Сочетание more least совмещает сравнительную и превосходную степени, " +
      "а the least это превосходная степень, которая с союзом than не употребляется.",
  },
  {
    id: "mk-en-b04-23",
    topic: "verb",
    difficulty: "B",
    text: "It must be about two years since we last _____.",
    options: ["has met", "meet", "have met", "met"],
    correct: [3],
    explanation:
      "В конструкции It is + отрезок времени + since придаточная часть ставится " +
      "в Past Simple, потому что называет последнюю точку, от которой ведётся отсчёт. " +
      "Наречие last здесь означает в последний раз и тоже тянет за собой прошедшее время, " +
      "поэтому верно met. Формы has met и have met относятся к Present Perfect, " +
      "который после since в этой модели не используется, а has met вдобавок " +
      "не согласуется с подлежащим we; голое meet дало бы настоящее время " +
      "и разрушило бы всю временную рамку.",
  },
  {
    id: "mk-en-b04-24",
    topic: "article",
    difficulty: "B",
    text: "Write your name at _________.",
    options: [
      "the top of the page",
      "top of page",
      "the top page",
      "the page of top",
    ],
    correct: [0],
    explanation:
      "Существительные top, bottom, middle, end обозначают единственную точку предмета, " +
      "поэтому идут с определённым артиклем, а сам предмет вводится оборотом " +
      "с of и тоже определён: at the top of the page. Вариант top of page лишён " +
      "обоих артиклей и звучит как телеграфный заголовок, а не как нормальная фраза. " +
      "The top page означало бы верхний лист из стопки, а the page of top " +
      "переставляет части конструкции и смысла не даёт.",
  },
  {
    id: "mk-en-b04-25",
    topic: "verb",
    difficulty: "A",
    text: "She _________ in Paris since 1999.",
    options: ["have lived", "lived", "has lived", "was living"],
    correct: [2],
    explanation:
      "Предлог since задаёт начальную точку действия, которое началось в прошлом " +
      "и продолжается до сих пор, а это прямой сигнал Present Perfect. " +
      "Подлежащее she требует вспомогательного has, поэтому верно has lived. " +
      "Форма have lived не согласуется с третьим лицом единственного числа, " +
      "lived в Past Simple означала бы законченный и оборванный период " +
      "(она когда-то жила и больше не живёт), а was living описывает процесс " +
      "в определённый момент прошлого и с since не сочетается.",
  },
  {
    id: "mk-en-b04-26",
    topic: "pronoun",
    difficulty: "A",
    text: "_____ dress is expensive but it's very nice.",
    options: ["This", "Those", "These", "Them"],
    correct: [0],
    explanation:
      "Указательное местоимение обязано согласовываться с существительным по числу, " +
      "а dress стоит в единственном числе, что подтверждает и сказуемое is, " +
      "и дальнейшая замена местоимением it. Значит, подходит форма единственного " +
      "числа this. Местоимения those и these стоят во множественном числе " +
      "и потребовали бы dresses are, а them это объектный падеж личного местоимения " +
      "they, который определением к существительному вообще не бывает.",
  },
  {
    id: "mk-en-b04-27",
    topic: "non-finite",
    difficulty: "B",
    text:
      "The students hope _______ all the examinations because they've been preparing for a long time.",
    options: ["passing", "pass", "to passing", "to pass"],
    correct: [3],
    explanation:
      "Глагол hope относится к группе глаголов, требующих после себя инфинитива с to: " +
      "hope to do, want to do, decide to do, promise to do. Поэтому правильна форма to pass. " +
      "Герундий passing после hope не употребляется, голая форма pass возможна " +
      "только после модальных глаголов или в конструкциях типа make somebody do, " +
      "а to passing совмещает частицу инфинитива с окончанием герундия " +
      "и является просто несуществующей формой.",
  },
  {
    id: "mk-en-b04-28",
    topic: "noun",
    difficulty: "A",
    text: "There are three _________ on the desk.",
    options: ["diary", "diaries", "diaryies", "diarys"],
    correct: [1],
    explanation:
      "Числительное three и оборот there are требуют существительного во множественном числе. " +
      "У слов, оканчивающихся на согласную + y, при образовании множественного числа " +
      "y меняется на i и добавляется -es: diary становится diaries. " +
      "Форма diary осталась в единственном числе и не согласуется с three, " +
      "diarys нарушает правило замены y на i, а diaryies совмещает обе модели сразу " +
      "и такой формы в языке нет.",
  },
  {
    id: "mk-en-b04-29",
    topic: "verb",
    difficulty: "B",
    text: "They've ___ lunch. They _____ it at 12 o'clock.",
    options: ["have/had", "had/having", "had/have", "had/had"],
    correct: [3],
    explanation:
      "В первой части стоит вспомогательный глагол they've, значит нужна третья форма " +
      "смыслового глагола have, а это had: they've had lunch. " +
      "Вторая часть называет точное время в прошлом (at 12 o'clock), поэтому идёт " +
      "Past Simple, форма которого у have тоже had. Вариант have/had ставит " +
      "после've инфинитив вместо причастия, had/having даёт во второй части " +
      "форму без сказуемого, а had/have переводит завершённое действие в настоящее время, " +
      "что противоречит указанию на двенадцать часов.",
  },
  {
    id: "mk-en-b04-30",
    topic: "preposition",
    difficulty: "B",
    text: "_____ the film I remembered where I'd left my keys.",
    options: ["While", "In", "During", "On"],
    correct: [2],
    explanation:
      "Перед существительным the film нужен именно предлог, а значение во время чего-либо " +
      "передаётся предлогом during: during the film, during the lesson, during the war. " +
      "Слово while является союзом и требует после себя целого придаточного " +
      "с подлежащим и сказуемым (while I was watching the film). " +
      "Предлог in указывал бы на нахождение внутри и с показом фильма не сочетается, " +
      "а on задаёт дату или поверхность, но не отрезок, в течение которого что-то произошло.",
  },
  {
    id: "mk-en-b04-31",
    topic: "mood",
    difficulty: "C",
    text: "If you _______ a frog, you _______ green skin.",
    options: [
      "was, would have",
      "have been, would have",
      "had been, would have",
      "were, would have",
    ],
    correct: [3],
    explanation:
      "Условие заведомо нереально для настоящего времени, поэтому работает второй тип " +
      "условных предложений: в придаточной части Past Subjunctive, в главной would + инфинитив. " +
      "В сослагательном наклонении глагол be принимает форму were для всех лиц, " +
      "включая you, отсюда правильное if you were. Вариант was допустим лишь " +
      "в разговорной речи с I, he, she, it, но не с you, а have been и had been " +
      "дают перфектные формы: had been относилось бы к третьему типу " +
      "и требовало бы would have had в главной части.",
  },
  {
    id: "mk-en-b04-32",
    topic: "non-finite",
    difficulty: "B",
    text: "I am really looking forward to _______ you at the party.",
    options: ["to be seen", "to see", "that we see", "seeing"],
    correct: [3],
    explanation:
      "В обороте look forward to слово to является не частицей инфинитива, а предлогом, " +
      "и после него, как после любого предлога, ставится герундий: looking forward to seeing. " +
      "Именно поэтому естественный на первый взгляд вариант to see здесь ошибочен: " +
      "получилось бы два to подряд. Форма to be seen переводит действие в страдательный " +
      "залог, хотя увидеть собирается говорящий, а придаточное that we see " +
      "после предлога to невозможно синтаксически.",
  },
  {
    id: "mk-en-b04-33",
    topic: "preposition",
    difficulty: "B",
    text: "Mary is away at the moment. She will be back ___ Monday.",
    options: ["in", "of", "by", "at"],
    correct: [2],
    explanation:
      "Из предложенных предлогов с названием дня недели работает только by, " +
      "означающий крайний срок: она вернётся не позже понедельника. " +
      "Предлог in употребляется с месяцами, годами и временами суток (in May, in 2020), " +
      "но не с днями недели. Предлог at закреплён за точками времени и устойчивыми " +
      "сочетаниями (at 5 o'clock, at night, at the weekend), а of вообще " +
      "не имеет временного значения и вводит принадлежность или отношение.",
  },
  {
    id: "mk-en-b04-34",
    topic: "article",
    difficulty: "A",
    text: "This is _____ room.",
    options: ["nice", "an nice", "a nice", "niced"],
    correct: [2],
    explanation:
      "Исчисляемое существительное room в единственном числе обязательно требует " +
      "определителя, а поскольку комната называется впервые и просто относится к классу " +
      "приятных, ставится неопределённый артикль: a nice room. " +
      "Форма an nice ошибочна фонетически: an ставится только перед гласным звуком, " +
      "а nice начинается с согласного. Вариант nice оставляет существительное " +
      "без артикля, что для исчисляемого единственного числа недопустимо, " +
      "а niced это несуществующее слово, у прилагательного nice нет формы на -ed.",
  },
  {
    id: "mk-en-b04-35",
    topic: "numeral",
    difficulty: "B",
    text: "Choose the correct written form: Today is the thirtieth of May.",
    options: ["13th", "13", "30th", "33d"],
    correct: [2],
    explanation:
      "Слово thirtieth является порядковым числительным от thirty, то есть тридцатым, " +
      "а порядковые числительные записываются цифрой с двумя последними буквами " +
      "словесной формы: thirtieth сокращается до 30th. " +
      "Вариант 13th соответствует слову thirteenth (тринадцатый), которое легко спутать " +
      "с thirtieth только на слух. Запись 13 без окончания передаёт количественное " +
      "числительное thirteen, а 33d вообще относится к другому числу " +
      "и оформлено по образцу third.",
  },
  {
    id: "mk-en-b04-36",
    topic: "non-finite",
    difficulty: "C",
    text:
      "When I was small I liked _____ very much and my mother didn't have to make me _____. I did it with pleasure.",
    options: [
      "to dance; dance",
      "dance; to dance",
      "have danced; dance",
      "to be dancing; to dance",
    ],
    correct: [0],
    explanation:
      "Первый пропуск стоит после глагола like, который допускает инфинитив с to, " +
      "поэтому берётся to dance. Второй пропуск идёт после каузативного глагола make " +
      "в значении заставлять, а он в действительном залоге требует голого инфинитива " +
      "без to: make somebody do something. Вариант dance; to dance переставляет формы " +
      "местами и нарушает оба правила, have danced после like не употребляется, " +
      "а to be dancing; to dance ставит после make запрещённое там to.",
  },
  {
    id: "mk-en-b04-37",
    topic: "verb",
    difficulty: "A",
    text: "Don't push Harry in the water. He _____ swim.",
    options: ["shouldn't", "has to", "must", "can't"],
    correct: [3],
    explanation:
      "Просьба не толкать Гарри в воду объясняется тем, что он не умеет плавать, " +
      "а физическая способность и умение выражаются модальным глаголом can, " +
      "в отрицании can't. Вариант shouldn't означал бы, что ему не следует плавать " +
      "по каким-то соображениям, но опасности от этого не возникает. " +
      "Формы has to и must выражают обязанность и долженствование, то есть " +
      "утверждают, что Гарри обязан плавать, а это прямо противоречит предупреждению " +
      "в первом предложении.",
  },
  {
    id: "mk-en-b04-38",
    topic: "adverb",
    difficulty: "C",
    text: "I can _____ say that I _____ ill.",
    options: [
      "firmly/am never",
      "finally/am ever",
      "extremely/never am",
      "really/never",
    ],
    correct: [0],
    explanation:
      "Наречие образа действия firmly уместно определяет глагол say (твёрдо утверждать), " +
      "а наречие частотности never по общему правилу ставится после глагола-связки be, " +
      "отсюда порядок am never ill. Вариант finally/am ever плох тем, что ever " +
      "в утвердительном предложении самостоятельно не употребляется. " +
      "В extremely/never am наречие extremely усиливает прилагательные, а не глаголы, " +
      "да и обратный порядок never am возможен лишь при инверсии в начале предложения. " +
      "Вариант really/never оставляет вторую часть вообще без глагола-связки.",
  },
  {
    id: "mk-en-b04-39",
    topic: "preposition",
    difficulty: "B",
    text: "Our train arrived ___ Amsterdam and passengers sighed.",
    options: ["in", "at", "by", "on"],
    correct: [0],
    explanation:
      "Глагол arrive сочетается с двумя предлогами: in перед крупными пунктами " +
      "(странами, городами) и at перед мелкими точками маршрута (вокзалом, аэропортом, " +
      "гостиницей). Амстердам это город, поэтому нужен arrived in Amsterdam. " +
      "Вариант at подошёл бы для arrived at the station, но не для названия города. " +
      "Предлог by указывает на способ передвижения (by train), а on задаёт дату " +
      "или поверхность и с глаголом прибытия в город не употребляется.",
  },
  {
    id: "mk-en-b04-40",
    topic: "non-finite",
    difficulty: "C",
    text: "The police made the two boys _____ the litter they had dropped.",
    options: ["picked up", "picking up", "to pick up", "pick up"],
    correct: [3],
    explanation:
      "Глагол make в значении заставлять образует сложное дополнение по модели " +
      "make somebody do something, то есть инфинитив идёт без частицы to. " +
      "Поэтому верна форма pick up. Вариант to pick up отражает распространённую " +
      "ошибку, ведь после близкого по смыслу force употребляется именно force somebody " +
      "to do, но у make это правило другое. Форма picking up дала бы причастие, " +
      "которое после make не ставится, а picked up является личной формой прошедшего " +
      "времени и вторым сказуемым при том же подлежащем быть не может.",
  },
  {
    id: "mk-en-b04-41",
    topic: "numeral",
    difficulty: "A",
    text: "Choose the correct written form: There are 12 months in a year.",
    options: ["twentieth", "twenty", "twelves", "twelve"],
    correct: [3],
    explanation:
      "Цифра 12 обозначает количество месяцев, поэтому нужно количественное числительное, " +
      "и по-английски это twelve. Форма twentieth является порядковым числительным " +
      "от twenty и означает двадцатый, то есть и число другое, и разряд другой. " +
      "Слово twenty передаёт число двадцать, а не двенадцать (их часто путают из-за " +
      "созвучия), а twelves с окончанием множественного числа употребляется " +
      "только в особых оборотах вроде in twelves и в счёте предметов не участвует.",
  },
  {
    id: "mk-en-b04-42",
    topic: "article",
    difficulty: "B",
    text: "My friend lives in _______.",
    options: ["Hollands", "Holland", "the Holland", "a Holland"],
    correct: [1],
    explanation:
      "Названия стран в единственном числе употребляются без артикля: Holland, France, " +
      "Kazakhstan, Italy. Определённый артикль сохраняется лишь у стран, в названии " +
      "которых есть нарицательное слово или множественное число: the Netherlands, " +
      "the USA, the United Kingdom. Поэтому the Holland ошибочно, хотя the Netherlands " +
      "для той же страны верно. Форма Hollands приписывает собственному имени " +
      "множественное число, а a Holland ставит перед именем собственным " +
      "неопределённый артикль, что невозможно.",
  },
  {
    id: "mk-en-b04-43",
    topic: "adverb",
    difficulty: "B",
    text:
      "I think you behaved very _______ that's why your friends were upset.",
    options: ["selfishly", "good", "selfish", "better"],
    correct: [0],
    explanation:
      "Пропуск характеризует глагол behaved, то есть отвечает на вопрос как вёл себя, " +
      "а признак действия в английском передаётся наречием. От прилагательного selfish " +
      "наречие образуется добавлением суффикса -ly: selfishly. " +
      "Прилагательное selfish описывало бы человека, а не его поведение, " +
      "и после глагола behave не ставится. Форма good это прилагательное, " +
      "наречием от него служит well, а better даёт сравнительную степень, " +
      "которая требует второго члена сравнения и к тому же противоречит " +
      "расстройству друзей.",
  },
  {
    id: "mk-en-b04-44",
    topic: "verb",
    difficulty: "C",
    text:
      "Has anybody arrived yet? Not yet. I've _______ Emily all day, but she's been out.",
    options: ["being calling", "been calling", "calling", "be calling"],
    correct: [1],
    explanation:
      "Сокращение I've требует после себя третьей формы глагола, а обстоятельство all day " +
      "подчёркивает длительность действия, продолжавшегося вплоть до момента речи. " +
      "Совмещение этих требований даёт Present Perfect Continuous: have been calling. " +
      "Вариант calling оставил бы после've причастие настоящего времени без нужного been, " +
      "форма be calling ставит после've инфинитив вместо третьей формы, " +
      "а being calling это несуществующее сочетание: у глагола be нет " +
      "продолженной формы в такой конструкции.",
  },
  {
    id: "mk-en-b04-45",
    topic: "adverb",
    difficulty: "A",
    text:
      "This is our everyday habit. We _______ do yoga in the morning.",
    options: ["seldom", "always", "sometimes", "never"],
    correct: [1],
    explanation:
      "Первое предложение прямо называет действие ежедневной привычкой, поэтому нужно " +
      "наречие частотности со значением сто процентов времени, а это always. " +
      "Наречие seldom означает редко и противоречит слову everyday, " +
      "sometimes указывает лишь на время от времени и тоже не дотягивает до привычки. " +
      "Наречие never полностью отрицает действие и вступает в прямое противоречие " +
      "с первым предложением. Обратите внимание и на позицию: наречия частотности " +
      "ставятся перед смысловым глаголом, как здесь перед do.",
  },
  {
    id: "mk-en-b04-46",
    topic: "mood",
    difficulty: "C",
    text: "If he _______ harder, he _______ the game.",
    options: [
      "would have tried, won",
      "would have tried, had won",
      "had tried, had won",
      "had tried, would have won",
    ],
    correct: [3],
    explanation:
      "Речь идёт о несбывшемся условии в прошлом, то есть о третьем типе условных " +
      "предложений. Его формула жёсткая: после if ставится Past Perfect (had tried), " +
      "а в главной части would have + третья форма глагола (would have won). " +
      "Варианты would have tried, won и would have tried, had won помещают would " +
      "в придаточную часть, чего в условных предложениях с if не делают. " +
      "Сочетание had tried, had won правильно строит условие, но оставляет главную часть " +
      "без модального would, отчего теряется значение нереального следствия.",
  },
  {
    id: "mk-en-b04-47",
    topic: "adjective",
    difficulty: "B",
    text: "He seemed to me _______ annoyed man ever.",
    options: ["more", "the more", "more and more", "the most"],
    correct: [3],
    explanation:
      "Слово ever в конце фразы означает за всё время и задаёт сравнение со всеми " +
      "людьми вообще, а такое выделение из неограниченного множества передаётся " +
      "превосходной степенью с обязательным артиклем the: the most annoyed man ever. " +
      "Форма more даёт сравнительную степень и требует than с указанием второго объекта. " +
      "Сочетание the more употребляется в парных оборотах типа the more, the better, " +
      "а more and more означает всё более и более и описывает нарастание признака " +
      "во времени, а не рекорд.",
  },
  {
    id: "mk-en-b04-48",
    topic: "lexicology",
    difficulty: "B",
    text: "I need five _______ of bread.",
    options: ["lumps", "loaves", "spoons", "bowls"],
    correct: [1],
    explanation:
      "Существительное bread неисчисляемое, поэтому считают его через слова-измерители, " +
      "и для хлеба закреплено сочетание a loaf of bread (буханка), " +
      "во множественном числе loaves. Слово lumps применяется к сахару и к комкам " +
      "какого-либо вещества: a lump of sugar. Мерка spoons подходит для сыпучих " +
      "и жидких продуктов (a spoon of honey), а bowls обозначает миски с супом " +
      "или кашей, но никак не порции хлеба.",
  },
  {
    id: "mk-en-b04-49",
    topic: "verb",
    difficulty: "B",
    text: "My boss _______ some very important guests tomorrow.",
    options: [
      "is receiving",
      "will have received",
      "receive",
      "will be received",
    ],
    correct: [0],
    explanation:
      "Заранее назначенная встреча в ближайшем будущем передаётся в английском " +
      "формой Present Continuous, поэтому запланированный приём гостей на завтра " +
      "выражается как is receiving. Форма will have received относится к Future Perfect " +
      "и означала бы, что к какому-то моменту приём уже завершится, " +
      "но никакой второй точки отсчёта в предложении нет. Голое receive не согласуется " +
      "с подлежащим третьего лица единственного числа, а will be received ставит " +
      "страдательный залог, из-за чего начальник сам оказывается принимаемым гостем.",
  },
  {
    id: "mk-en-b04-50",
    topic: "non-finite",
    difficulty: "A",
    text: "We talked about _______ to Europe next summer.",
    options: ["going", "gone", "went", "go"],
    correct: [0],
    explanation:
      "Перед пропуском стоит предлог about, а после любого предлога в английском " +
      "языке употребляется герундий, то есть форма на -ing: talked about going. " +
      "Инфинитив go после предлога невозможен, как невозможен он и в качестве " +
      "предложного дополнения. Форма went является личной формой прошедшего времени " +
      "и после предлога стоять не может, а gone это третья форма глагола, " +
      "которая работает в перфектных временах и страдательном залоге, " +
      "но не как дополнение при предлоге.",
  },
  {
    id: "mk-en-b04-51",
    topic: "mood",
    difficulty: "C",
    text:
      "I wish I _________ French, then I _________ what the guide is talking about.",
    options: [
      "could speak, would understand",
      "would be able to speak, understood",
      "can speak, would understood",
      "can speak, understand",
    ],
    correct: [0],
    explanation:
      "Конструкция I wish выражает сожаление о нереальном настоящем, поэтому глагол " +
      "после неё ставится в форме прошедшего времени сослагательного наклонения, " +
      "а от can это could: I wish I could speak French. " +
      "Вторая часть описывает воображаемое следствие, и для него нужна форма " +
      "would + инфинитив: would understand. Вариант с would be able to после wish " +
      "не употребляется, а обе конструкции с can speak грубо нарушают правило " +
      "сдвига времени; кроме того, would understood совмещает would " +
      "с прошедшей формой глагола, чего быть не может.",
  },
  {
    id: "mk-en-b04-52",
    topic: "non-finite",
    difficulty: "A",
    text: "It is important _____ your ancestors.",
    options: ["to know", "to knew", "to knowing", "know"],
    correct: [0],
    explanation:
      "Оборот It is + прилагательное вводит подлежащее, выраженное инфинитивом с to, " +
      "поэтому нужна форма to know. Сочетание to knew невозможно: после частицы to " +
      "ставится только первая форма глагола, а knew это прошедшее время. " +
      "Форма to knowing смешивает частицу инфинитива с герундием и в языке " +
      "не существует, а голое know превратило бы фразу в повелительное наклонение, " +
      "которое с предваряющим it is important не сочетается.",
  },
  {
    id: "mk-en-b04-53",
    topic: "noun",
    difficulty: "B",
    text: "My _____ home is full of beautiful furniture. She is a designer.",
    options: ["aunt's", "uncles'", "aunts'", "uncle's"],
    correct: [0],
    explanation:
      "Второе предложение говорит She is a designer, значит хозяйка дома женщина " +
      "и притом одна, поэтому нужен притяжательный падеж единственного числа " +
      "женского родственника: aunt's. Формы uncle's и uncles' отпадают по смыслу, " +
      "потому что дядя обозначается местоимением he, а не she. " +
      "Вариант aunts' сохраняет женский род, но ставит апостроф после -s, " +
      "то есть означает нескольких тёток сразу, что противоречит единственному " +
      "числу в she is a designer.",
  },
  {
    id: "mk-en-b04-54",
    topic: "verb",
    difficulty: "C",
    text: "_____ you _____ chocolate? You have some on your shirt.",
    options: [
      "Have/been eating",
      "Was/eating",
      "Did/eat",
      "Has/been eating",
    ],
    correct: [0],
    explanation:
      "Второе предложение указывает на видимый результат прямо сейчас: следы шоколада " +
      "на рубашке. Такой видимый след недавнего действия описывается временем " +
      "Present Perfect Continuous, поэтому вопрос строится как Have you been eating. " +
      "Форма Was you eating нарушает согласование (с you употребляется were), " +
      "Did you eat относится к завершённому прошлому и никак не связывает действие " +
      "с настоящим следом, а Has you been eating подставляет вспомогательный глагол " +
      "третьего лица единственного числа к местоимению you.",
  },
  {
    id: "mk-en-b04-55",
    topic: "pronoun",
    difficulty: "B",
    text: "There was only _____ left.",
    options: ["few bread", "little bread", "many bread", "a little bread"],
    correct: [1],
    explanation:
      "Существительное bread неисчисляемое, поэтому местоимения few и many, " +
      "работающие только с исчисляемыми существительными во множественном числе, " +
      "отпадают сразу. Остаются little и a little, и здесь решает наречие only: " +
      "оно само вносит значение всего-навсего, поэтому в источнике отмечен вариант " +
      "little bread, подчёркивающий нехватку. Форма a little означала бы " +
      "немного, но достаточно, то есть давала бы противоположный оттенок, " +
      "который со словом only смотрится избыточно.",
  },
  {
    id: "mk-en-b04-56",
    topic: "numeral",
    difficulty: "A",
    text: "There were _____ apples on the table.",
    options: ["tenth", "ten", "tens", "the tenth"],
    correct: [1],
    explanation:
      "Существительное apples стоит во множественном числе и обозначает количество, " +
      "поэтому нужно количественное числительное ten. " +
      "Формы tenth и the tenth являются порядковыми и означают десятый, " +
      "то есть указывали бы на место в ряду и требовали бы единственного числа " +
      "существительного (the tenth apple). Слово tens употребляется в обороте " +
      "tens of со значением десятки чего-либо и тогда обязательно тянет за собой " +
      "предлог of, которого в предложении нет.",
  },
  {
    id: "mk-en-b04-57",
    topic: "non-finite",
    difficulty: "B",
    text: "I am afraid of _____ mistakes.",
    options: ["making", "to making", "made", "make"],
    correct: [0],
    explanation:
      "Прилагательное afraid управляет предлогом of, а после предлога в английском " +
      "языке ставится герундий, поэтому верна форма making. " +
      "Кроме того, делать ошибки по-английски передаётся именно глаголом make, " +
      "а не do: make mistakes. Вариант to making соединяет частицу инфинитива " +
      "с герундием и не существует, made это третья форма или прошедшее время " +
      "и после предлога стоять не может, а голое make после of невозможно " +
      "по тому же правилу управления предлогом.",
  },
  {
    id: "mk-en-b04-58",
    topic: "verb",
    difficulty: "B",
    text: "I _____ him today three times.",
    options: ["had seen", "has seen", "have seen", "seen"],
    correct: [2],
    explanation:
      "Слово today обозначает незакончившийся период, поэтому действие связано " +
      "с настоящим и требует Present Perfect; подлежащее I берёт вспомогательный " +
      "глагол have, отсюда have seen. Форма has seen не согласуется с первым лицом. " +
      "Past Perfect had seen нуждается в другой точке отсчёта в прошлом, " +
      "которой в предложении нет, а голое seen без вспомогательного глагола " +
      "сказуемым быть не может: это лишь третья форма глагола.",
  },
  {
    id: "mk-en-b04-59",
    topic: "pronoun",
    difficulty: "B",
    text: "_____ does it take to go from city center to countryside?",
    options: ["When", "How long", "How often", "What"],
    correct: [1],
    explanation:
      "Оборот it takes отвечает на вопрос сколько времени занимает дорога, " +
      "и такой вопрос вводится сочетанием how long. " +
      "Слово when спрашивает о моменте начала действия, а не о его продолжительности. " +
      "Сочетание how often запрашивает частоту (как часто вы ездите), " +
      "что с конструкцией it takes не сочетается, а what требует роли " +
      "подлежащего или дополнения при глаголе, тогда как здесь подлежащим " +
      "уже служит формальное it.",
  },
  {
    id: "mk-en-b04-60",
    topic: "article",
    difficulty: "B",
    text: "This table is made of ___ glass.",
    options: ["the", "a", "an", "-"],
    correct: [3],
    explanation:
      "Существительное glass в значении материала стекло неисчисляемое, " +
      "а неисчисляемые вещественные существительные в общем значении " +
      "употребляются без артикля, поэтому здесь стоит нуль. " +
      "Определённый артикль the понадобился бы, только если бы речь шла " +
      "о конкретном, уже упомянутом куске стекла. Артикли a и an вообще " +
      "не сочетаются с неисчисляемыми существительными; они возможны лишь " +
      "у другого значения этого слова, a glass как стакан.",
  },
  {
    id: "mk-en-b04-61",
    topic: "adjective",
    difficulty: "C",
    text: "Kate's job is _____, so Kate is _____.",
    options: [
      "boring/bored",
      "boring/boring",
      "bored/boring",
      "bored/bored",
    ],
    correct: [0],
    explanation:
      "Причастия на -ing описывают источник чувства, то есть свойство предмета " +
      "или явления, а причастия на -ed передают состояние того, кто это чувство " +
      "испытывает. Работа вызывает скуку, значит job is boring, а Кейт скучающая, " +
      "значит Kate is bored. Вариант boring/boring делает саму Кейт скучной " +
      "для окружающих, что меняет смысл, bored/boring переворачивает роли, " +
      "приписывая работе способность скучать, а bored/bored наделяет " +
      "неодушевлённую работу чувствами.",
  },
  {
    id: "mk-en-b04-62",
    topic: "verb",
    difficulty: "C",
    text: "Rachel _______ that she _____ the visitor before.",
    options: [
      "thought/saw",
      "thinks/sees",
      "is thinking/sees",
      "thought/had seen",
    ],
    correct: [3],
    explanation:
      "Главное сказуемое стоит в прошедшем времени, а в придаточном действует " +
      "правило согласования времён: событие, произошедшее раньше момента мысли, " +
      "передаётся Past Perfect. На предшествование прямо указывает и наречие before, " +
      "поэтому верно thought/had seen. Вариант thought/saw ставит оба действия " +
      "на одну временную линию и теряет предшествование. " +
      "Сочетания thinks/sees и is thinking/sees переводят весь рассказ в настоящее " +
      "время, причём think в значении полагать вообще не употребляется " +
      "в продолженной форме.",
  },
  {
    id: "mk-en-b04-63",
    topic: "adjective",
    difficulty: "C",
    text: "Choose the sentence with the correct position of an adjective.",
    options: [
      "The price high surprised him.",
      "He reported price high at the meeting.",
      "He was shocked with high so the price.",
      "The price seemed high.",
    ],
    correct: [3],
    explanation:
      "Прилагательное в английском занимает одну из двух позиций: перед существительным " +
      "(the high price) или после глагола-связки в роли именной части сказуемого. " +
      "Второй случай и представлен в The price seemed high, где seemed является " +
      "связочным глаголом. В The price high surprised him и He reported price high " +
      "прилагательное поставлено после существительного без всякой связки, " +
      "что для английского недопустимо, а He was shocked with high so the price " +
      "вдобавок разрывает группу неуместным so и вообще не образует осмысленной фразы.",
  },
  {
    id: "mk-en-b04-64",
    topic: "non-finite",
    difficulty: "B",
    text: "He advised me _____ until tomorrow.",
    options: ["wait", "to wait", "waiting", "waited"],
    correct: [1],
    explanation:
      "Глагол advise в модели advise somebody to do something требует после дополнения " +
      "инфинитива с частицей to, поэтому верно advised me to wait. " +
      "Голая форма wait возможна лишь после make, let, have и модальных глаголов, " +
      "но не после advise. Герундий waiting употребляется при advise без дополнения " +
      "(he advised waiting), а здесь дополнение me уже есть, " +
      "и модель меняется; форма waited является личной формой прошедшего времени " +
      "и вторым сказуемым при том же подлежащем стоять не может.",
  },
  {
    id: "mk-en-b04-65",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Walt Disney",
      value:
        "Walt Disney was born in Chicago on December 5, 1901. Disney attended McKinley High " +
        "School in Chicago, and left at the age of 17 to become an ambulance driver in the " +
        "First World War. In 1919 he moved to Kansas City and became a commercial artist.\n\n" +
        "Then he went to Hollywood in 1923 to become an animator, working on cartoon films. " +
        "He produced his first (black and white) Mickey Mouse cartoon in 1928. It was an " +
        "instant hit with both children and adults. More cartoons followed, including " +
        "'Flowers and Trees' (1933), the first animated film in Technicolor. Then, three " +
        "years later, Disney created his second cartoon superstar - Donald Duck.\n\n" +
        "Later Disney founded Walt Disney Productions, now known as The Walt Disney Company. " +
        "Today, this company has annual revenues of approximately U.S. $35 billion. This " +
        "success is largely due to a number of the world's most famous fictional characters " +
        "he and his staff created including Mickey Mouse, a character for which Disney " +
        "himself was the original voice.\n\n" +
        "He is particularly noted for being a film producer and a popular showman, as well as " +
        "an innovator in animation and theme park design. Disney is famous for his " +
        "contributions in the field of entertainment during the 20th century.\n\n" +
        "Disney became one of the best-known motion picture producers in the world. Disney " +
        "won 26 Academy Awards out of 59 nominations. He is also the namesake for Disneyland " +
        "and Walt Disney World Resort theme parks in the United States, as well as the " +
        "international resorts in Japan, France, China.",
    },
    text: "During his lifetime, Walt Disney _________.",
    options: [
      "created 59 fictional characters",
      "won 26 Academy Awards",
      "produced only black and white cartoons",
      "opened theme parks all over the world",
    ],
    correct: [1],
    explanation:
      "В последнем абзаце прямо сказано: Disney won 26 Academy Awards out of 59 nominations, " +
      "то есть 26 наград при 59 номинациях. Вариант про 59 персонажей подменяет " +
      "число номинаций числом созданных героев, чего в тексте нет. " +
      "Утверждение о только чёрно-белых мультфильмах опровергается упоминанием " +
      "Flowers and Trees как первого мультфильма в цвете Technicolor, " +
      "а парки, по тексту, названы его именем и расположены лишь в нескольких странах, " +
      "причём открывал их не он сам.",
  },
  {
    id: "mk-en-b04-66",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "Walt Disney",
      value:
        "Walt Disney was born in Chicago on December 5, 1901. Disney attended McKinley High " +
        "School in Chicago, and left at the age of 17 to become an ambulance driver in the " +
        "First World War. In 1919 he moved to Kansas City and became a commercial artist.\n\n" +
        "Then he went to Hollywood in 1923 to become an animator, working on cartoon films. " +
        "He produced his first (black and white) Mickey Mouse cartoon in 1928. It was an " +
        "instant hit with both children and adults. More cartoons followed, including " +
        "'Flowers and Trees' (1933), the first animated film in Technicolor. Then, three " +
        "years later, Disney created his second cartoon superstar - Donald Duck.\n\n" +
        "Later Disney founded Walt Disney Productions, now known as The Walt Disney Company. " +
        "Today, this company has annual revenues of approximately U.S. $35 billion. This " +
        "success is largely due to a number of the world's most famous fictional characters " +
        "he and his staff created including Mickey Mouse, a character for which Disney " +
        "himself was the original voice.",
    },
    text: "During the World War I he worked as _________.",
    options: [
      "an ambulance driver",
      "a commercial artist",
      "a motion picture producer",
      "an animator",
    ],
    correct: [0],
    explanation:
      "В первом абзаце сказано, что он бросил школу в 17 лет, чтобы стать водителем " +
      "санитарной машины на Первой мировой войне: an ambulance driver in the First World War. " +
      "Коммерческим художником он стал позже, в 1919 году в Канзас-Сити, то есть " +
      "уже после войны. Аниматором он сделался ещё позднее, приехав в Голливуд в 1923 году, " +
      "а кинопродюсером стал уже в зрелые годы, так что все три остальных занятия " +
      "относятся к другим периодам его жизни.",
  },
  {
    id: "mk-en-b04-67",
    topic: "numeral",
    difficulty: "B",
    passage: {
      title: "Walt Disney",
      value:
        "Walt Disney was born in Chicago on December 5, 1901. Disney attended McKinley High " +
        "School in Chicago, and left at the age of 17 to become an ambulance driver in the " +
        "First World War. In 1919 he moved to Kansas City and became a commercial artist. " +
        "Then he went to Hollywood in 1923 to become an animator, working on cartoon films.",
    },
    text: "He was born on the _____ of December.",
    options: ["fifth", "third", "fifteenth", "fourth"],
    correct: [0],
    explanation:
      "В тексте дата записана цифрами как December 5, а в датах цифра читается " +
      "порядковым числительным, поэтому 5 December произносится the fifth of December. " +
      "Вариант fifteenth соответствовал бы числу 15 и отличается от fifth суффиксом -teen, " +
      "который легко пропустить на слух. Числительное third передаёт 3, " +
      "а fourth соответствует 4, и оба противоречат прямому указанию источника " +
      "на пятое декабря.",
  },
  {
    id: "mk-en-b04-68",
    topic: "lexicology",
    difficulty: "C",
    passage: {
      title: "Walt Disney",
      value:
        "Later Disney founded Walt Disney Productions, now known as The Walt Disney Company. " +
        "Today, this company has annual revenues of approximately U.S. $35 billion. This " +
        "success is largely due to a number of the world's most famous fictional characters " +
        "he and his staff created including Mickey Mouse, a character for which Disney " +
        "himself was the original voice.",
    },
    text: "The word revenue means _________.",
    options: [
      "to acquire something that you have been working for",
      "a liability or obligation to pay something",
      "the income that a company receives regularly",
      "use of money, time",
    ],
    correct: [2],
    explanation:
      "Слово revenue означает выручку, то есть регулярный доход компании, " +
      "и в тексте оно стоит в обороте annual revenues of approximately 35 billion dollars, " +
      "где речь именно о годовых поступлениях. Определение через liability or obligation " +
      "to pay описывает долг или обязательство, то есть противоположную сторону баланса. " +
      "Формулировка to acquire something that you have been working for толкует глагол " +
      "earn или gain, а use of money, time соответствует слову expenditure " +
      "или общему понятию расхода ресурсов.",
  },
  {
    id: "mk-en-b04-69",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "Earth Hour",
      value:
        "Earth Hour is an annual global campaign that encourages people and businesses around " +
        "the world to switch off electricity at the same time for one hour. Earth Hour started " +
        "in Australia in 2007 when 2.2 million people in the city of Sydney turned off all " +
        "non-essential lights for an hour. Since then it has grown to a massive global event. " +
        "In 2013, millions of people in 7,000 cities and towns around the world switched off " +
        "their lights for 60 minutes at the end of March. Every year landmarks and well-known " +
        "buildings around the world such as the Sydney Opera House and Harbour Bridge, the " +
        "Petronas towers in Malaysia, the UK Parliament, Buckingham Palace and the Empire " +
        "State Building take part and go dark for Earth Hour. The campaign even went into " +
        "space when astronauts reduced power on the International Space Station in 2011.\n\n" +
        "Earth Hour is organised by the World Wide Fund for Nature (WWF). It was started by " +
        "Andy Ridley, originally from Britain, who is executive director of Earth Hour Global. " +
        "He came up with the idea of Earth Hour because he wanted to raise awareness of " +
        "environmental issues by asking people to do something positive to help the planet.\n\n" +
        "The end of March is around the time of the spring and autumn equinoxes in the " +
        "northern and southern hemispheres respectively, so sunset times in both hemispheres " +
        "are at similar times. This means that a global lights out event has most visual " +
        "impact at this time of year.",
    },
    text: "Earth Hour was set up in _____ in 2007.",
    options: ["Sydney", "Britain", "Malaysia", "London"],
    correct: [0],
    explanation:
      "Первый абзац сообщает: Earth Hour started in Australia in 2007 when 2.2 million people " +
      "in the city of Sydney turned off all non-essential lights, то есть акция началась " +
      "именно в Сиднее. Британия названа в тексте лишь как страна происхождения " +
      "основателя Энди Ридли, а не как место проведения первой акции. " +
      "Малайзия упоминается только из-за башен Петронас, которые присоединились позже, " +
      "а Лондон в связи с началом акции вообще не назван.",
  },
  {
    id: "mk-en-b04-70",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "Earth Hour",
      value:
        "Earth Hour is an annual global campaign that encourages people and businesses around " +
        "the world to switch off electricity at the same time for one hour. Earth Hour started " +
        "in Australia in 2007 when 2.2 million people in the city of Sydney turned off all " +
        "non-essential lights for an hour. Since then it has grown to a massive global event. " +
        "Every year landmarks and well-known buildings around the world take part and go dark " +
        "for Earth Hour.",
    },
    text: "Earth Hour events are held every _____.",
    options: ["hour", "year", "day", "week"],
    correct: [1],
    explanation:
      "Первое же предложение называет акцию an annual global campaign, а прилагательное " +
      "annual означает ежегодный; это подтверждается и оборотом Every year landmarks " +
      "take part. Вариант hour цепляется за название Earth Hour и за длительность " +
      "самой акции, но час это продолжительность одного мероприятия, а не частота " +
      "его проведения. Ежедневного или еженедельного повторения в тексте не заявлено, " +
      "поэтому day и week противоречат источнику.",
  },
  {
    id: "mk-en-b04-71",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Earth Hour",
      value:
        "Earth Hour is organised by the World Wide Fund for Nature (WWF). It was started by " +
        "Andy Ridley, originally from Britain, who is executive director of Earth Hour Global. " +
        "He came up with the idea of Earth Hour because he wanted to raise awareness of " +
        "environmental issues by asking people to do something positive to help the planet. " +
        "Switching off the lights for an hour can make a small difference to the amount of " +
        "energy we use but Earth Hour is also a symbolic event to make people think about the " +
        "problems of climate change.",
    },
    text: "Earth Hour was created by _______.",
    options: ["Fund for Nature", "World Wide", "Andy Ridley", "WWF"],
    correct: [2],
    explanation:
      "Текст различает две вещи: организатором акции назван фонд WWF (is organised by the " +
      "World Wide Fund for Nature), а её создателем конкретный человек, " +
      "It was started by Andy Ridley, который и придумал саму идею. " +
      "Вопрос спрашивает именно про создателя, поэтому верен Энди Ридли. " +
      "Варианты Fund for Nature и World Wide это разорванные куски одного названия " +
      "организации, а WWF отвечал бы на вопрос кто организует, но не кто придумал.",
  },
  {
    id: "mk-en-b04-72",
    topic: "lexicology",
    difficulty: "B",
    passage: {
      title: "Earth Hour",
      value:
        "The end of March is around the time of the spring and autumn equinoxes in the " +
        "northern and southern hemispheres respectively, so sunset times in both hemispheres " +
        "are at similar times. This means that a global lights out event has most visual " +
        "impact at this time of year.",
    },
    text: "A global _______ event has most visual impact at this time of a year.",
    options: ["charity", "day out", "lights out", "holiday"],
    correct: [2],
    explanation:
      "Сочетание lights out означает выключение света и точно передаёт суть акции, " +
      "а видимый эффект (visual impact) возникает как раз оттого, что огни гаснут " +
      "одновременно в обоих полушариях. Слово charity относится к благотворительности " +
      "и денежным сборам, о которых в тексте речи нет. " +
      "Оборот day out означает поездку или прогулку на день, а holiday обозначает " +
      "праздник или отпуск, и ни то, ни другое не объясняет, почему важна " +
      "одинаковая длина светового дня.",
  },
  {
    id: "mk-en-b04-73",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "Valentine's Day",
      value:
        "Valentine's Day (or Saint Valentine's Day) is a holiday that, in the United States, " +
        "takes place on February 14, and technically signifies the accomplishments of " +
        "St. Valentine, a third-century Roman saint.\n\n" +
        "With that said, most Americans, instead of honoring St. Valentine through religious " +
        "ceremony, enjoy the holiday by engaging in romantic behavior with their significant " +
        "other or someone who they wish to be their significant other; gifts, special dinners, " +
        "and other acknowledgements of affection comprise most individuals' Valentine's Day " +
        "celebrations.\n\n" +
        "Chocolates and flowers are commonly given as gifts during Valentine's Day, as are " +
        "accompanying greeting cards (greeting card companies release new Valentine's Day " +
        "designs annually). Red and pink are generally understood to be the colors of " +
        "Valentine's Day, and many individuals, instead of celebrating romantically, spend " +
        "the holiday with their friends and/or family members.\n\n" +
        "Variations of Valentine's Day are celebrated across the globe throughout the year. " +
        "In America, the holiday, although acknowledged by the vast majority of the " +
        "population, isn't federally recognized; no time off work is granted for Valentine's Day.",
    },
    text: "When does Valentine's Day take place in the United States?",
    options: ["February 1", "February 14", "Throughout February", "A and B"],
    correct: [1],
    explanation:
      "Первое предложение текста называет точную дату: takes place on February 14. " +
      "Вариант February 1 не встречается в тексте вовсе и, скорее всего, рассчитан " +
      "на невнимательное чтение числа. Формулировка Throughout February растягивает " +
      "праздник на весь месяц, тогда как источник говорит об одном конкретном дне. " +
      "Комбинированный вариант A and B неверен автоматически, потому что " +
      "включает в себя ошибочную дату February 1.",
  },
  {
    id: "mk-en-b04-74",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Valentine's Day",
      value:
        "Valentine's Day (or Saint Valentine's Day) is a holiday that, in the United States, " +
        "takes place on February 14, and technically signifies the accomplishments of " +
        "St. Valentine, a third-century Roman saint.\n\n" +
        "With that said, most Americans, instead of honoring St. Valentine through religious " +
        "ceremony, enjoy the holiday by engaging in romantic behavior with their significant " +
        "other; gifts, special dinners, and other acknowledgements of affection comprise most " +
        "individuals' Valentine's Day celebrations.",
    },
    text: "What does Valentine's Day technically signify?",
    options: [
      "The accomplishments of St. Valentine",
      "Love throughout the ages",
      "The fun of gifts",
      "None of the above",
    ],
    correct: [0],
    explanation:
      "Ключевое здесь наречие technically, которое в тексте стоит рядом с ответом: " +
      "technically signifies the accomplishments of St. Valentine. " +
      "То есть формально праздник посвящён деяниям святого Валентина, " +
      "даже если на практике американцы отмечают его иначе. " +
      "Варианты Love throughout the ages и The fun of gifts описывают именно " +
      "бытовое, а не формальное содержание праздника, а None of the above " +
      "отвергает единственный ответ, дословно подтверждённый источником.",
  },
  {
    id: "mk-en-b04-75",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Valentine's Day",
      value:
        "Chocolates and flowers are commonly given as gifts during Valentine's Day, as are " +
        "accompanying greeting cards. Red and pink are generally understood to be the colors " +
        "of Valentine's Day, and many individuals, instead of celebrating romantically, spend " +
        "the holiday with their friends and/or family members.\n\n" +
        "Variations of Valentine's Day are celebrated across the globe throughout the year. " +
        "In America, the holiday, although acknowledged by the vast majority of the " +
        "population, isn't federally recognized; no time off work is granted for Valentine's Day.",
    },
    text: "Besides in the US, where is Valentine's Day celebrated?",
    options: [
      "In Europe and South America",
      "In Oceania and Western Europe",
      "Across the globe",
      "In the United Kingdom",
    ],
    correct: [2],
    explanation:
      "Текст даёт обобщённую формулировку: Variations of Valentine's Day are celebrated " +
      "across the globe throughout the year, то есть по всему миру. " +
      "Никаких конкретных регионов при этом не перечислено, поэтому варианты " +
      "с Европой и Южной Америкой, с Океанией и Западной Европой домысливают " +
      "то, чего в источнике нет. Ответ In the United Kingdom сужает картину " +
      "до одной страны и тоже противоречит слову globe.",
  },
  {
    id: "mk-en-b04-76",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "Valentine's Day",
      value:
        "Chocolates and flowers are commonly given as gifts during Valentine's Day, as are " +
        "accompanying greeting cards (greeting card companies release new Valentine's Day " +
        "designs annually). Red and pink are generally understood to be the colors of " +
        "Valentine's Day, and many individuals, instead of celebrating romantically, spend " +
        "the holiday with their friends and/or family members.",
    },
    text: "Which colors are generally understood to represent Valentine's Day?",
    options: ["Red", "Green", "Pink", "A and C"],
    correct: [3],
    explanation:
      "В тексте названы сразу два цвета: Red and pink are generally understood to be the " +
      "colors of Valentine's Day. Раз в списке вариантов красный и розовый стоят по " +
      "отдельности, каждый из них по отдельности будет неполным ответом, " +
      "поэтому нужен обобщающий вариант A and C. " +
      "Зелёный цвет в тексте не упоминается вовсе и ассоциируется с другим праздником. " +
      "Такие задания на комбинированный ответ проверяют умение заметить, " +
      "что в источнике перечислено больше одного признака.",
  },
  {
    id: "mk-en-b04-77",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Food and Grocery Stores",
      value:
        "While eating at a restaurant is an enjoyable and convenient occasional treat, most " +
        "individuals and families prepare their meals at home. To make breakfast, lunch, and " +
        "dinner daily, these persons must have the required foods and ingredients on hand and " +
        "ready to go; foods and ingredients are typically purchased from a grocery store, or " +
        "an establishment that distributes foods, drinks, household products, and other items " +
        "that are used by the typical consumer.\n\n" +
        "Produce, or the term used to describe fresh fruits and vegetables, is commonly " +
        "purchased by grocery store shoppers. In terms of fruit, most grocery stores offer " +
        "bananas, apples, oranges, blackberries, raspberries, grapes, pineapples, cantaloupes, " +
        "watermelons, and more.\n\n" +
        "Vegetables, including lettuce, corn, tomatoes, onions, celery, cucumbers, mushrooms, " +
        "and more are also sold at many grocery stores, and are purchased similarly to the way " +
        "that fruits are. Grocery stores typically stock more vegetables than fruit at any " +
        "given time, as vegetables remain fresh longer than fruits do, generally speaking.\n\n" +
        "Most customers take the opportunity to shop for staples, or foods that play a " +
        "prominent role in the average diet. Staples include pasta, rice, flour, sugar, milk, " +
        "meat, eggs, and bread.",
    },
    text: "What is a grocery store?",
    options: [
      "An establishment that cooks food for customers",
      "There are several definitions of a grocery store",
      "A place to sell and trade goods",
      "An establishment that distributes foods, drinks, household products, and other items that are used by the typical consumer",
    ],
    correct: [3],
    explanation:
      "Определение дано в первом абзаце прямо после запятой с пояснительным or: " +
      "a grocery store, or an establishment that distributes foods, drinks, household " +
      "products, and other items. Такой оборот с or вводит именно дефиницию термина. " +
      "Вариант про заведение, которое готовит еду, описывает ресторан, " +
      "то есть как раз то, чему магазин противопоставлен в первом предложении. " +
      "Формулировка о нескольких определениях в тексте не подтверждается, " +
      "а A place to sell and trade goods слишком широка и подошла бы любому рынку.",
  },
  {
    id: "mk-en-b04-78",
    topic: "lexicology",
    difficulty: "B",
    passage: {
      title: "Food and Grocery Stores",
      value:
        "Produce, or the term used to describe fresh fruits and vegetables, is commonly " +
        "purchased by grocery store shoppers. In terms of fruit, most grocery stores offer " +
        "bananas, apples, oranges, blackberries, raspberries, grapes, pineapples, cantaloupes, " +
        "watermelons, and more.",
    },
    text:
      "Fresh fruits and vegetables are collectively referred to as which of the following terms?",
    options: ["Produce", "Feggies", "Veggies", "Famine"],
    correct: [0],
    explanation:
      "Существительное produce с ударением на первом слоге означает свежую растительную " +
      "продукцию, и текст сам его расшифровывает: Produce, or the term used to describe " +
      "fresh fruits and vegetables. Слово veggies разговорно называет только овощи " +
      "и фрукты не охватывает, поэтому как обобщающий термин не годится. " +
      "Формы feggies в английском языке не существует, это выдуманное слово, " +
      "а famine означает голод как бедствие и к названию продуктов отношения не имеет.",
  },
  {
    id: "mk-en-b04-79",
    topic: "lexicology",
    difficulty: "C",
    passage: {
      title: "Food and Grocery Stores",
      value:
        "It would take quite a while to list everything else that today's massive grocery " +
        "stores sell, but most customers take the opportunity to shop for staples, or foods " +
        "that play a prominent role in the average diet, at the establishments. Staples " +
        "include pasta, rice, flour, sugar, milk, meat, and eggs, and bread. All the listed " +
        "staples are available in prepackaged containers, but can be purchased fresh in some " +
        "grocery stores, wherein employees will measure and weigh fresh products and then " +
        "provide them to customers.",
    },
    text: "What are staples?",
    options: [
      "Small pieces of metal used to hold papers together",
      "Rare foods",
      "Foods that play a prominent role in the average diet",
      "Green fruits and vegetables",
    ],
    correct: [2],
    explanation:
      "Слово staples многозначно, и задание проверяет умение выбрать значение " +
      "по контексту: в тексте оно расшифровано как foods that play a prominent role " +
      "in the average diet, то есть основные продукты питания. " +
      "Определение про металлические скобки для бумаги это другое значение того же " +
      "слова, верное в канцелярском контексте, но не в кулинарном. " +
      "Вариант Rare foods прямо противоречит идее повседневности, " +
      "а Green fruits and vegetables не согласуется со списком, " +
      "в который входят мука, сахар, мясо и хлеб.",
  },
  {
    id: "mk-en-b04-80",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "Food and Grocery Stores",
      value:
        "Vegetables, including lettuce, corn, tomatoes, onions, celery, cucumbers, mushrooms, " +
        "and more are also sold at many grocery stores, and are purchased similarly to the way " +
        "that fruits are. Grocery stores typically stock more vegetables than fruit at any " +
        "given time, as vegetables remain fresh longer than fruits do, generally speaking.",
    },
    text: "More vegetables are stocked in grocery stores than fruits because:",
    options: [
      "Fruits stay fresh for less time than vegetables",
      "Vegetables are more popular than fruits, generally speaking",
      "Grocery store managers prefer fruits",
      "A and B",
    ],
    correct: [0],
    explanation:
      "Причина названа в придаточном с союзом as: vegetables remain fresh longer than " +
      "fruits do. Это то же самое утверждение, но вывернутое наизнанку в первом варианте: " +
      "фрукты сохраняют свежесть меньше времени, чем овощи. " +
      "Про большую популярность овощей в тексте не сказано ни слова, поэтому " +
      "второй вариант домысливает причину, а вместе с ним отпадает и комбинированный " +
      "ответ A and B. Утверждение о предпочтениях менеджеров вообще ниоткуда " +
      "не следует и к тому же говорит о фруктах, что противоречит вопросу.",
  },
  {
    id: "mk-en-b04-81",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "The city of Wellington",
      value:
        "According to Maori legend, Wellington was first discovered in the 10th century by the " +
        "great Polynesian explorer Kupe. By the time the explorer Captain Cook visited in 1773, " +
        "the harbour was lined with Maori settlements. Today a popular viewing point, " +
        "Mt Victoria, is built on top of an ancient Maori burial ground.\n\n" +
        "Wellington was named in honor of Arthur Wellesley, the first Duke of Wellington. " +
        "Wellington has been the capital of New Zealand since 1865. New Zealand's first capital " +
        "city was Old Russell in 1840-41. Auckland was the second capital from 1841 until 1865, " +
        "when Parliament was moved to Wellington after an argument that persisted for a decade. " +
        "As the members of parliament could not agree on the location of a more central capital, " +
        "Wellington was decided on by three Australian commissioners.\n\n" +
        "Today Wellington is one of the busiest ports and the country's second largest urban " +
        "area. The population of Wellington is about 449,000 people. Wellington ranks as one of " +
        "New Zealand's chief seaports and serves both domestic and international shipping. The " +
        "port of Wellington handles millions of tons of cargo annually importing petroleum " +
        "products, motor vehicles, minerals and exporting meat, wood products, dairy products.\n\n" +
        "Wellington's economy is primarily service-based, with an emphasis on finance, business " +
        "services, and government. Many national government departments have their head offices " +
        "in Wellington and many of New Zealand's banks and insurance companies have their " +
        "headquarters in the city.",
    },
    text: "The city was _______ Arthur Wellesley.",
    options: [
      "first explored by",
      "destroyed by",
      "renamed by",
      "named in honor of",
    ],
    correct: [3],
    explanation:
      "Второй абзац дословно сообщает: Wellington was named in honor of Arthur Wellesley, " +
      "the first Duke of Wellington, то есть город назван в его честь. " +
      "Первооткрывателем по легенде назван полинезиец Купе, а из европейцев в текст " +
      "попал капитан Кук, поэтому вариант first explored by относится к другим людям. " +
      "О разрушении города текст не говорит вовсе, а renamed by означало бы, " +
      "что Уэллсли лично переименовал город, тогда как он лишь дал ему своё имя посмертно.",
  },
  {
    id: "mk-en-b04-82",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "The city of Wellington",
      value:
        "Wellington has been the capital of New Zealand since 1865. New Zealand's first capital " +
        "city was Old Russell in 1840-41. Auckland was the second capital from 1841 until 1865, " +
        "when Parliament was moved to Wellington after an argument that persisted for a decade. " +
        "As the members of parliament could not agree on the location of a more central capital, " +
        "Wellington was decided on by three Australian commissioners.",
    },
    text: "The second capital of New Zealand was _______.",
    options: ["Wellington", "Auckland", "Old Russell", "Hamilton"],
    correct: [1],
    explanation:
      "Текст выстраивает чёткую последовательность: первой столицей был Олд-Расселл " +
      "в 1840-41 годах, затем с 1841 по 1865 год столицей был Окленд, " +
      "и лишь потом парламент переехал в Веллингтон. " +
      "Значит, второй по счёту столицей был именно Auckland. " +
      "Веллингтон стал третьей столицей и остаётся ею с 1865 года, " +
      "Old Russell был первой, а город Гамильтон в тексте не упоминается вообще.",
  },
  {
    id: "mk-en-b04-83",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "The city of Wellington",
      value:
        "Today Wellington is one of the busiest ports and the country's second largest urban " +
        "area. Wellington ranks as one of New Zealand's chief seaports and serves both domestic " +
        "and international shipping. The port of Wellington handles millions of tons of cargo " +
        "annually importing petroleum products, motor vehicles, minerals and exporting meat, " +
        "wood products, dairy products.",
    },
    text: "Exported products from the port of Wellington are ____________.",
    options: [
      "meat, wood products, dairy products",
      "motor vehicles, minerals",
      "dairy products, petroleum products",
      "petroleum products, motor vehicles, minerals",
    ],
    correct: [0],
    explanation:
      "В тексте один и тот же длинный список разделён двумя причастиями: importing вводит " +
      "ввозимые товары, exporting вывозимые. После exporting стоят meat, wood products, " +
      "dairy products, и это и есть экспорт. " +
      "Варианты motor vehicles, minerals и petroleum products, motor vehicles, minerals " +
      "перечисляют как раз импорт, то есть меняют направление торговли на обратное. " +
      "Смешанный вариант dairy products, petroleum products берёт по одной позиции " +
      "из каждого списка и потому тоже неверен.",
  },
  {
    id: "mk-en-b04-84",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "The city of Wellington",
      value:
        "Wellington has been the capital of New Zealand since 1865. Auckland was the second " +
        "capital from 1841 until 1865, when Parliament was moved to Wellington after an " +
        "argument that persisted for a decade. As the members of parliament could not agree on " +
        "the location of a more central capital, Wellington was decided on by three Australian " +
        "commissioners.",
    },
    text: "Wellington was chosen to become the capital city ____________.",
    options: [
      "by three Australian commissioners",
      "by decision of Arthur Wellesley",
      "upon request from Maori people",
      "after an agreement of Parliament members",
    ],
    correct: [0],
    explanation:
      "Текст подчёркивает, что депутаты как раз не смогли договориться (could not agree), " +
      "и именно поэтому решение приняли посторонние люди: Wellington was decided on by " +
      "three Australian commissioners. Вариант after an agreement of Parliament members " +
      "прямо противоречит этому и является главной ловушкой задания. " +
      "Артур Уэллсли дал городу имя, но выбора столицы не делал, " +
      "а маори упоминаются только в связи с легендой об открытии земли " +
      "и древним захоронением на горе Виктория.",
  },
  {
    id: "mk-en-b04-85",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Phobias",
      value:
        "Phobias are very strong fears that may start in childhood. Usually there has been an " +
        "early experience which started the fear. A person may forget the experience which " +
        "started the fear, but the fear remains. For example, a person who is afraid of closed " +
        "rooms has claustrophobia. Perhaps that person had parents who once locked him in a " +
        "closet as a child.\n\n" +
        "A person who is afraid of insects has a kind of zoophobia. People who are afraid of " +
        "snakes, spiders and mice have zoophobia, too. People who are afraid of germs have " +
        "microphobia. They wash their hands many times a day, and they refuse to be near " +
        "people who are sick.\n\n" +
        "A new survey from an internet-based market research company asked over 2,000 British " +
        "people and showed the things people were most afraid of. Top of the list was heights. " +
        "Over half of the people who took the survey said they had acrophobia, the medical name " +
        "for the fear of heights. In second place was a fear of snakes, with 21 percent of " +
        "people saying they were very afraid of slippery creatures. The third biggest fear was " +
        "public speaking, with 20 percent being very afraid and 36 being a little afraid of " +
        "speaking in public.\n\n" +
        "Other things that frighten people most include spiders, needles and injections, the " +
        "sight of blood, flying, and being in small spaces. Number 10 on the list was " +
        "coulrophobia, the fear of clowns.\n\n" +
        "The survey had to rate 13 common phobias from not at all afraid to very afraid. The " +
        "researchers found that there were big differences between what men and women were " +
        "afraid of, and what frightened old and young people. The survey showed more women than " +
        "men were afraid of things, especially spiders. Age differences showed young people " +
        "were more likely to be afraid of public speaking. Those in the older age groups were " +
        "more likely than younger people to be afraid of heights.",
    },
    text: "The survey depicted _____ fears.",
    options: ["10", "20", "13", "36"],
    correct: [2],
    explanation:
      "В предпоследнем абзаце сказано: The survey had to rate 13 common phobias, " +
      "то есть в опроснике оценивались тринадцать распространённых страхов. " +
      "Число 10 в тексте есть, но относится к позиции коулрофобии в списке " +
      "(Number 10 on the list), а не к общему количеству фобий. " +
      "Числа 20 и 36 это проценты респондентов, испугавшихся публичных выступлений " +
      "очень сильно и немного, поэтому к количеству страхов они отношения не имеют.",
  },
  {
    id: "mk-en-b04-86",
    topic: "lexicology",
    difficulty: "B",
    passage: {
      title: "Phobias",
      value:
        "A person who is afraid of insects has a kind of zoophobia. People who are afraid of " +
        "snakes, spiders and mice have zoophobia, too. People who are afraid of germs have " +
        "microphobia. They wash their hands many times a day, and they refuse to be near " +
        "people who are sick. Now that we understand disease better, many people are " +
        "microphobic, afraid of germs.",
    },
    text: "Microphobia is a fear of _________.",
    options: ["germs", "darkness", "electronics", "fantastic creatures"],
    correct: [0],
    explanation:
      "Текст даёт определение дважды: People who are afraid of germs have microphobia " +
      "и далее many people are microphobic, afraid of germs. " +
      "Значит, микрофобия это страх микробов, что подтверждается и греческим корнем micro. " +
      "Боязнь темноты называется никтофобией и в тексте не упоминается, " +
      "электроника со страхами в этом отрывке никак не связана, " +
      "а вымышленные существа относятся скорее к страху клоунов, " +
      "который назван коулрофобией в другом абзаце.",
  },
  {
    id: "mk-en-b04-87",
    topic: "lexicology",
    difficulty: "C",
    passage: {
      title: "Phobias",
      value:
        "Phobias are very strong fears that may start in childhood. A person may forget the " +
        "experience which started the fear, but the fear remains. For example, a person who is " +
        "afraid of closed rooms has claustrophobia. Perhaps that person had parents who once " +
        "locked him in a closet as a child. As an adult, he has forgotten the experience in the " +
        "closet, but he fears locked rooms.\n\n" +
        "A person who is afraid of insects has a kind of zoophobia. People who are afraid of " +
        "germs have microphobia. Over half of the people who took the survey said they had " +
        "acrophobia, the medical name for the fear of heights.",
    },
    text: "A person who is afraid of closed rooms has _________.",
    options: [
      "macrophobia",
      "microphobia",
      "claustrophobia",
      "zoophobia",
    ],
    correct: [2],
    explanation:
      "Первый абзац прямо связывает страх закрытых помещений с термином claustrophobia: " +
      "a person who is afraid of closed rooms has claustrophobia. " +
      "Латинский корень claustrum означает запертое место, что помогает запомнить термин. " +
      "Микрофобия по тексту это страх микробов, зоофобия страх животных и насекомых, " +
      "а слово macrophobia в отрывке не встречается вовсе и построено " +
      "по противоположной модели от корня macro со значением большой.",
  },
  {
    id: "mk-en-b04-88",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "Phobias",
      value:
        "The survey had to rate 13 common phobias from not at all afraid to very afraid. The " +
        "researchers found that there were big differences between what men and women were " +
        "afraid of, and what frightened old and young people. The researchers said: All are not " +
        "created equal when it comes to fears. The survey showed more women than men were " +
        "afraid of things, especially spiders. These scare a third of men and about half of " +
        "women. Age differences showed young people were more likely to be afraid of public " +
        "speaking. Those in the older age groups were more likely than younger people to be " +
        "afraid of heights.",
    },
    text: "Groups of _________ people were frightened of different things.",
    options: [
      "poor and rich",
      "healthy and unhealthy",
      "big and small",
      "old and young",
    ],
    correct: [3],
    explanation:
      "Исследователи сопоставляли две пары групп: мужчин и женщин, а также старших " +
      "и младших, что видно из оборота what frightened old and young people. " +
      "Дальше это подтверждается конкретикой: молодые чаще боятся публичных выступлений, " +
      "старшие высоты. Деления по достатку (poor and rich) и по состоянию здоровья " +
      "(healthy and unhealthy) в тексте нет вовсе, а пара big and small " +
      "к людям в этом отрывке не применяется и является лишь отвлекающим вариантом.",
  },
];
