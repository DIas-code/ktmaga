import type { Question } from "@/lib/types";

/** Задания из пробников по английскому языку. Партия 01. */
export const batch01: Question[] = [
  {
    id: "mk-en-b01-1",
    topic: "article",
    difficulty: "B",
    text: "My favourite ___ is Beethoven.",
    options: ["a composers", "a composer", "composers", "composer"],
    correct: [3],
    explanation:
      "Притяжательное местоимение my уже выполняет роль определителя существительного, " +
      "а два определителя подряд (my и артикль a) в одной именной группе английский язык не допускает: " +
      "сказать my favourite a composer нельзя. Бетховен один человек, поэтому нужна форма единственного числа " +
      "composer, и варианты composers и a composers отпадают по числу (к тому же a вообще не сочетается " +
      "с множественным числом). Внимание: в источнике галочкой отмечен вариант a composer, но это ошибка " +
      "составителя, грамматически верен только вариант composer без артикля.",
  },
  {
    id: "mk-en-b01-2",
    topic: "article",
    difficulty: "A",
    text: "I want to sleep. Please, turn off ___.",
    options: ["light", "a light", "a lights", "the light"],
    correct: [3],
    explanation:
      "Здесь нужен определённый артикль: собеседник понимает, о какой именно лампе идёт речь, " +
      "о той, что горит в комнате, где происходит разговор. Неопределённый артикль a обозначал бы " +
      "какую-то лампу, одну из многих, что в просьбе выключить свет бессмысленно. " +
      "Вариант light без артикля невозможен, потому что исчисляемое существительное в единственном числе " +
      "всегда требует определителя, а a lights ошибочен вдвойне: артикль a сочетается только с единственным числом.",
  },
  {
    id: "mk-en-b01-3",
    topic: "adjective",
    difficulty: "A",
    text: "This book is ___ which I have ever read in my life.",
    options: [
      "more interesting",
      "the most interesting",
      "the more interesting",
      "most interesting",
    ],
    correct: [1],
    explanation:
      "Оборот which I have ever read in my life сравнивает книгу со всеми прочитанными за жизнь, " +
      "а сравнение с целой группой передаётся превосходной степенью. У многосложных прилагательных " +
      "превосходная степень строится как the most + прилагательное, причём артикль the обязателен: " +
      "предмет выделяется как единственный в своём роде. Варианты more interesting и the more interesting " +
      "дают сравнительную степень, которая требует сопоставления с чем-то одним (than that book), " +
      "а most interesting без артикля читается как весьма интересная и к сравнению отношения не имеет.",
  },
  {
    id: "mk-en-b01-4",
    topic: "pronoun",
    difficulty: "A",
    text: "I can do it ___.",
    options: ["himself", "herself", "myself", "meself"],
    correct: [2],
    explanation:
      "Возвратно-усилительное местоимение обязано согласовываться с подлежащим по лицу, числу и роду, " +
      "а подлежащее здесь I, поэтому единственная подходящая форма это myself (сам, самостоятельно). " +
      "Формы himself и herself отсылали бы к третьему лицу, то есть к кому-то другому, а не к говорящему. " +
      "Слова meself в литературном английском не существует: это диалектное искажение, " +
      "правильная модель для первого лица единственного числа строится от притяжательного my + self.",
  },
  {
    id: "mk-en-b01-5",
    topic: "reading",
    difficulty: "A",
    text:
      "My sister had five apples and then she gave two for me. " +
      "How many apples does my sister have now?",
    options: ["three", "five", "two", "four"],
    correct: [0],
    explanation:
      "Задание на понимание прочитанного и числительные: у сестры было five apples, " +
      "затем она отдала two, значит осталось five minus two, то есть three. " +
      "Глагол gave стоит в Past Simple, поэтому действие уже завершилось, " +
      "и вопрос does she have now спрашивает про итог после вычитания. " +
      "Вариант five игнорирует передачу яблок, two называет число отданных, а не оставшихся, " +
      "а four получается, если ошибочно вычесть одно яблоко вместо двух.",
  },
  {
    id: "mk-en-b01-6",
    topic: "adverb",
    difficulty: "B",
    text: "Put adverb \"definitely\" into correct place:",
    options: [
      "you are going away definitely next month?",
      "you are going away next month definitely?",
      "are you going away definitely next month?",
      "are you definitely going away next month?",
    ],
    correct: [3],
    explanation:
      "Наречия степени уверенности вроде definitely в английском занимают срединную позицию: " +
      "после вспомогательного глагола или be и перед смысловым глаголом, поэтому в вопросе получается " +
      "are you definitely going away next month. Варианты A и B вообще не являются вопросами: " +
      "в них сохранён прямой порядок слов you are, тогда как общий вопрос требует инверсии подлежащего " +
      "и вспомогательного глагола. Вариант C инверсию соблюдает, но ставит definitely между глаголом и " +
      "обстоятельством времени, разрывая смысловую группу going away next month, " +
      "и такая позиция для этого наречия не нормативна.",
  },
  {
    id: "mk-en-b01-7",
    topic: "preposition",
    difficulty: "A",
    text: "Johanna was born ___ 1997, wasn't she?",
    options: ["in", "for", "on", "at"],
    correct: [0],
    explanation:
      "С крупными отрезками времени, то есть с годами, месяцами, временами года и веками, " +
      "английский употребляет предлог in, поэтому единственно верно in 1997. " +
      "Предлог on закреплён за конкретными днями и датами (on Monday, on the 5th of May), " +
      "а at за точками во времени и часами (at 6 o'clock, at night). " +
      "Предлог for указывает на длительность (for two years) и с точкой отсчёта рождения не сочетается вовсе.",
  },
  {
    id: "mk-en-b01-8",
    topic: "verb",
    difficulty: "A",
    text: "He ___ taking early retirement.",
    options: ["to consider", "is considering", "consideres", "consider"],
    correct: [1],
    explanation:
      "Речь о текущем обдумывании планов, а такое временное, ещё не решённое состояние передаётся " +
      "формой Present Continuous, отсюда is considering. Инфинитив to consider самостоятельным сказуемым " +
      "быть не может: ему нужен либо вспомогательный глагол, либо управляющий глагол перед ним. " +
      "Форма consideres просто написана с ошибкой (правильно considers), а consider не согласуется " +
      "с подлежащим третьего лица единственного числа, где в Present Simple обязательно окончание -s.",
  },
  {
    id: "mk-en-b01-9",
    topic: "verb",
    difficulty: "B",
    text: "When I came home, somebody ___ flowers for me.",
    options: ["was left", "had left", "have leaved", "left"],
    correct: [1],
    explanation:
      "Из двух прошедших действий цветы оставили раньше, чем говорящий пришёл домой, " +
      "а более раннее из двух прошедших действий оформляется временем Past Perfect: had left. " +
      "Вариант left в Past Simple выстроил бы события в одну цепочку, как будто кто-то оставил цветы " +
      "уже после прихода, что противоречит смыслу обнаружения. " +
      "Форма was left пассивна и означала бы, что подлежащему somebody что-то оставили, " +
      "а have leaved ошибочна дважды: Present Perfect не сочетается с прошедшим контекстом when I came home, " +
      "и глагол leave неправильный, его третья форма left, а не leaved.",
  },
  {
    id: "mk-en-b01-10",
    topic: "verb",
    difficulty: "B",
    text: "___ any of Shakespeare's plays?",
    options: ["Do you read", "Had you read", "Did you read", "Have you read"],
    correct: [3],
    explanation:
      "Вопрос про жизненный опыт без указания конкретного момента в прошлом относится к настоящему " +
      "результату, а это зона Present Perfect: Have you read any of Shakespeare's plays? " +
      "Did you read потребовал бы обстоятельства завершённого прошлого (last year, at school), " +
      "которого в предложении нет. Had you read описывает предшествование другому прошедшему действию, " +
      "а второго действия здесь тоже нет, тогда как Do you read означало бы регулярную привычку читать, " +
      "то есть совсем другой смысл.",
  },
  {
    id: "mk-en-b01-11",
    topic: "verb",
    difficulty: "A",
    text: "I ___ her yesterday.",
    options: ["had seen", "have seen", "see", "saw"],
    correct: [3],
    explanation:
      "Обстоятельство yesterday указывает на конкретный завершённый момент в прошлом, " +
      "а такие ситуации английский описывает временем Past Simple, поэтому нужна вторая форма see, то есть saw. " +
      "Present Perfect (have seen) принципиально несовместим с точным указанием прошедшего времени, " +
      "потому что связывает действие с настоящим, а не с прошедшей точкой. " +
      "Past Perfect (had seen) требует второго, более позднего прошедшего действия, которого нет, " +
      "а see в настоящем времени прямо противоречит слову yesterday.",
  },
  {
    id: "mk-en-b01-12",
    topic: "verb",
    difficulty: "C",
    text: "Look, I ___ by my nail master. Do you like them?",
    options: [
      "am done my nails",
      "have done my nails",
      "do my nails",
      "have my nails done",
    ],
    correct: [3],
    explanation:
      "Дополнение by my nail master показывает, что работу выполнил другой человек, " +
      "а такое побудительное значение передаёт каузативная конструкция have something done, " +
      "где порядок строго такой: have + объект + причастие прошедшего времени, отсюда have my nails done. " +
      "Варианты have done my nails и do my nails означали бы, что говорящая сделала маникюр себе сама, " +
      "и тогда указание на мастера становится бессмысленным. " +
      "Сочетание am done my nails грамматически невозможно: пассив be done не может брать после себя " +
      "прямое дополнение my nails.",
  },
  {
    id: "mk-en-b01-13",
    topic: "verb",
    difficulty: "A",
    text: "___ you swim when you were seven?",
    options: ["Could", "Were able", "Can", "Did can"],
    correct: [0],
    explanation:
      "Общая способность в прошлом, то есть умение, которым человек владел в определённый период жизни, " +
      "выражается модальным глаголом could, и вопрос строится простой инверсией: Could you swim? " +
      "Вариант Can противоречит прошедшему контексту when you were seven. " +
      "Were able не встаёт в эту позицию: конструкция требует вида were you able to swim, то есть " +
      "и другого порядка слов, и частицы to. Сочетание Did can невозможно вдвойне: " +
      "модальные глаголы не образуют вопрос через do, а после did в любом случае идёт голая основа глагола.",
  },
  {
    id: "mk-en-b01-14",
    topic: "non-finite",
    difficulty: "B",
    text: "I know we locked the door. I clearly remember ___.",
    options: ["to lock", "locking", "to locking", "lock"],
    correct: [1],
    explanation:
      "Глагол remember меняет смысл в зависимости от формы после него: remember doing значит помнить " +
      "о том, что уже сделал, а remember to do значит не забыть сделать что-то в будущем. " +
      "Первое предложение I know we locked the door прямо говорит о совершённом действии, " +
      "поэтому нужен герундий locking. Вариант to lock перевернул бы смысл на я не забыл запереть, " +
      "форма to locking просто не существует, поскольку частица to и окончание -ing не сочетаются, " +
      "а голая основа lock после remember не употребляется.",
  },
  {
    id: "mk-en-b01-15",
    topic: "non-finite",
    difficulty: "B",
    text: "Yesterday I heard someone ___.",
    options: ["screams", "scream", "screaming", "to screamed"],
    correct: [1],
    explanation:
      "После глаголов восприятия (hear, see, feel, watch) употребляется сложное дополнение, " +
      "и второй его частью служит инфинитив без частицы to, если действие услышано целиком: " +
      "I heard someone scream. Личная форма screams невозможна, потому что в сложном дополнении " +
      "не бывает сказуемого с окончанием -s, а to screamed ошибочна дважды: частица to с формой " +
      "прошедшего времени не сочетается вообще. Форма screaming после hear в принципе допустима, " +
      "но она подчёркивает длящийся процесс (слышал, как кто-то кричал какое-то время), " +
      "тогда как задание проверяет базовое правило про голый инфинитив для законченного однократного действия.",
  },
  {
    id: "mk-en-b01-16",
    topic: "mood",
    difficulty: "B",
    text: "We don't leave food on the table. If we ___, the cat ___ it.",
    options: [
      "had done / would eat",
      "do / will eat",
      "did / would have eaten",
      "did / will eat",
    ],
    correct: [1],
    explanation:
      "Первая часть We don't leave food on the table стоит в настоящем времени и описывает реальное " +
      "положение дел, поэтому условие тоже реально, а это первый тип условных предложений: " +
      "if + Present Simple в придаточном и will + инфинитив в главном, то есть do / will eat. " +
      "Пара did / would have eaten смешивает второй и третий типы и относит ситуацию к нереальному прошлому. " +
      "Вариант had done / would eat нарушает согласование ещё грубее, а did / will eat недопустим, " +
      "потому что в одном условном предложении нельзя соединять форму второго типа в придаточном " +
      "с формой первого типа в главном.",
  },
  {
    id: "mk-en-b01-17",
    topic: "verb",
    difficulty: "A",
    text: "Look at Tom! He ___ with scissors.",
    options: ["has been playing", "was playing", "plays", "is playing"],
    correct: [3],
    explanation:
      "Призыв Look at Tom! указывает на то, что действие разворачивается прямо сейчас, на глазах говорящего, " +
      "а действия в момент речи описывает Present Continuous: is playing. " +
      "Present Simple (plays) обозначал бы регулярную привычку играть с ножницами, а не то, что происходит сию секунду. " +
      "Past Continuous (was playing) переносит сцену в прошлое, что противоречит призыву смотреть, " +
      "а has been playing подчёркивал бы длительность к настоящему моменту и требовал бы указания времени " +
      "вроде for ten minutes.",
  },
  {
    id: "mk-en-b01-18",
    topic: "mood",
    difficulty: "C",
    text: "The correct sentence with subjunctive mood is:",
    options: [
      "It is essential that everyone be here on time",
      "It is essential that everyone been here on time",
      "It is essential that everyone has here on time",
      "It is essential that everyone here on time",
    ],
    correct: [0],
    explanation:
      "После безличных оборотов необходимости вроде it is essential, it is important, it is necessary " +
      "придаточное с that ставится в сослагательное наклонение настоящего времени, а оно совпадает " +
      "с голой основой глагола и не меняется по лицам, поэтому при everyone стоит именно be, а не is. " +
      "Вариант been невозможен без вспомогательного глагола: причастие прошедшего времени само по себе " +
      "сказуемым не бывает. В варианте с has глагол have не даёт нужного смысла присутствия и без " +
      "причастия вообще не образует времени, а последний вариант просто лишён сказуемого, " +
      "тогда как в английском придаточном подлежащее без глагола существовать не может.",
  },
];
