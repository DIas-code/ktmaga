import type { Question } from "@/lib/types";

/** Задания по английскому из сборника тестов, 20 вариантов. Партия 05. */
export const batch05: Question[] = [
  // ===== Лексико-грамматический тест, вариант 7 =====
  {
    id: "mk-en-b05-1",
    topic: "non-finite",
    difficulty: "C",
    text:
      "Cheating is forbidden at the university in spite of the fact he admitted ___ on the test.",
    options: ["is cheating", "to cheat", "to cheating", "cheating"],
    correct: [3],
    explanation:
      "Глагол admit относится к группе глаголов, после которых идёт только герундий: admit doing something, а не admit to do. " +
      "Поэтому единственная возможная форма здесь cheating: он признал сам факт списывания. " +
      "Вариант to cheat невозможен, потому что admit никогда не берёт инфинитив; вариант to cheating путает конструкцию admit doing с оборотом confess to doing, где to это предлог, а не частица инфинитива; " +
      "форма is cheating это личная форма сказуемого, а после admit нужен неличный оборот, а не второе сказуемое.",
  },
  {
    id: "mk-en-b05-2",
    topic: "non-finite",
    difficulty: "B",
    text: "She permitted the children ___ up late.",
    options: ["stayed", "are staying", "stay", "to stay"],
    correct: [3],
    explanation:
      "Глагол permit строится по схеме permit somebody to do something, то есть требует сложного дополнения с инфинитивом с частицей to. " +
      "Значит верно to stay: она разрешила детям не ложиться допоздна. " +
      "Голый инфинитив stay возможен только после let и make, но не после permit и allow; " +
      "формы stayed и are staying это личные формы глагола, они образовали бы второе сказуемое, а придаточного союза в предложении нет.",
  },

  // ===== Лексико-грамматический тест, вариант 8 =====
  {
    id: "mk-en-b05-3",
    topic: "adjective",
    difficulty: "C",
    text: "The ___ are ___ to teach than the ___.",
    options: [
      "young ones/easier/old ones",
      "young ones/the easiest/old",
      "young ones/the easiest/old ones",
      "young/the easiest/old ones",
    ],
    correct: [0],
    explanation:
      "Ключевое слово в предложении than: оно возможно только при сравнительной степени, поэтому во второй пропуск идёт easier, а не превосходная степень the easiest. " +
      "Субстантивированное прилагательное с заменителем ones даёт young ones и old ones, и обе части сравнения должны быть оформлены одинаково. " +
      "Варианты со the easiest отпадают сразу из-за than; вариант с одиночным young в первой части нарушает параллелизм: если во второй части стоит old ones, то и в первой нужно young ones.",
  },
  {
    id: "mk-en-b05-4",
    topic: "pronoun",
    difficulty: "B",
    text: "This car is our neighbor's car. The car is not ___, it's ___.",
    options: ["her/their", "it/themselves", "he/themselves", "his/theirs"],
    correct: [3],
    explanation:
      "После глагола be в роли именной части сказуемого нужны абсолютные притяжательные местоимения, которые употребляются без существительного: mine, yours, his, hers, ours, theirs. " +
      "Отсюда пара his/theirs: машина не его, а их. " +
      "Форма their присоединяемая, она требует существительного после себя (their car), поэтому вариант her/their не годится; " +
      "it и he это личные местоимения, они не выражают принадлежности, а themselves возвратное местоимение и означало бы, что машина является самими соседями.",
  },
  {
    id: "mk-en-b05-5",
    topic: "noun",
    difficulty: "B",
    text: "Is a toy a substitute for ___ attention?",
    options: ["parents", "the parent's", "parent's", "parents'"],
    correct: [3],
    explanation:
      "Речь идёт о внимании родителей во множественном числе, а притяжательный падеж множественного числа на -s образуется одним апострофом после -s: parents'. " +
      "Форма parent's означала бы одного родителя, что не соответствует общему смыслу высказывания о родительском внимании; " +
      "the parent's добавляет ещё и определённый артикль, указывающий на конкретного известного родителя, чего в общем рассуждении нет. " +
      "Вариант parents без апострофа вообще не выражает принадлежности и превращает слово в определение-существительное, что для этой конструкции нехарактерно.",
  },
  {
    id: "mk-en-b05-6",
    topic: "verb",
    difficulty: "C",
    text: "I haven't received the letter yet. It might ___ to the wrong address.",
    options: ["was sent", "has been sent", "will be sent", "be sent"],
    correct: [3],
    explanation:
      "После модального глагола might идёт только инфинитив без частицы to, а смысл требует страдательного залога: письмо отправили, а не оно отправило. " +
      "Пассивный инфинитив выглядит как be sent, поэтому верно might be sent. " +
      "Варианты was sent, has been sent и will be sent это личные формы с собственными вспомогательными глаголами, они не могут стоять после модального; " +
      "к тому же will be sent относилось бы к будущему, тогда как в предложении речь о том, что уже произошло.",
  },
  {
    id: "mk-en-b05-7",
    topic: "adjective",
    difficulty: "B",
    text: "I have a ___ headache today than I did yesterday.",
    options: ["baddest", "worse", "worst", "badder"],
    correct: [1],
    explanation:
      "Союз than однозначно указывает на сравнительную степень, а прилагательное bad образует степени сравнения не по правилу: bad - worse - the worst. " +
      "Значит нужна форма worse. " +
      "Формы badder и baddest вообще не существуют в литературном английском, так как bad не принимает суффиксы -er и -est; " +
      "worst это превосходная степень, она обозначает крайнюю точку внутри группы и с than в таком предложении не сочетается.",
  },
  {
    id: "mk-en-b05-8",
    topic: "verb",
    difficulty: "B",
    text: "We've got plenty of time. We ___ hurry.",
    options: ["haven't to", "have to", "can't", "needn't"],
    correct: [3],
    explanation:
      "Смысл первой части в том, что времени полно, значит во второй нужно сказать об отсутствии необходимости спешить, а это выражает needn't. " +
      "Модальный глагол need в отрицании строится без вспомогательного do и с голым инфинитивом: needn't hurry. " +
      "Вариант have to означал бы наоборот вынужденную необходимость и противоречил бы первому предложению; " +
      "can't говорит о невозможности, а не о ненужности, а форма haven't to не употребляется: правильное отрицание от have to это don't have to.",
  },
  {
    id: "mk-en-b05-9",
    topic: "adjective",
    difficulty: "B",
    text: "Mary said yes and made him ___ man in the world.",
    options: ["happily", "happier", "more happy", "the happiest"],
    correct: [3],
    explanation:
      "Оборот in the world задаёт сравнение с целым множеством, а это область превосходной степени, которая употребляется с определённым артиклем: the happiest. " +
      "Двусложное прилагательное happy оканчивается на -y, поэтому степени сравнения образует суффиксально, с заменой y на i: happy - happier - the happiest. " +
      "Форма more happy нарушает это правило, а happier это сравнительная степень, для которой нужен был бы союз than, а не in the world; " +
      "happily это наречие, оно не может определять существительное man.",
  },
  {
    id: "mk-en-b05-10",
    topic: "non-finite",
    difficulty: "C",
    text:
      "She was happy to show the house, ___ up and down the stairs and ___ on the top of the tower.",
    options: [
      "was running/was taking",
      "ran/taken",
      "ranning/took",
      "running/taking",
    ],
    correct: [3],
    explanation:
      "Сказуемое в предложении уже есть - was happy, а два обстоятельства образа действия при нём оформляются причастием настоящего времени с окончанием -ing: running и taking. " +
      "Такие причастные обороты описывают действия, сопровождающие основное, поэтому обе формы должны быть одинаковыми и неличными. " +
      "Варианты was running/was taking и ran/took дают вторые личные сказуемые без союза, что для английского предложения недопустимо; " +
      "форма taken это причастие прошедшего времени со страдательным значением, а ranning просто неверно записано, у глагола run причастие пишется running с одной n перед -ing.",
  },
  {
    id: "mk-en-b05-11",
    topic: "verb",
    difficulty: "B",
    text: "I ___ already ___ the flat. It ___ clean now.",
    options: [
      "have/tidied/is",
      "has/tidied/is",
      "have/tidied/was",
      "is/tidying/is",
    ],
    correct: [0],
    explanation:
      "Наречие already и наличие результата в настоящем указывают на Present Perfect, который для подлежащего I строится как have + причастие прошедшего времени: have tidied. " +
      "Второе предложение описывает нынешнее состояние квартиры, и слово now требует настоящего времени is. " +
      "Форма has сочетается только с he, she, it, поэтому с I она невозможна; " +
      "вариант с was противоречит наречию now, а is tidying это Present Continuous, который передавал бы процесс уборки прямо сейчас, а не завершённый результат.",
  },
  {
    id: "mk-en-b05-12",
    topic: "lexicology",
    difficulty: "B",
    text: "I ___ money. I'd better go to the bank right now.",
    options: ["need", "must", "have to", "may"],
    correct: [0],
    explanation:
      "После пропуска стоит существительное money без глагола, а прямое дополнение может принимать только знаменательный глагол, в данном случае need в значении нуждаться в чём-то. " +
      "Смысл подтверждается вторым предложением: раз надо срочно в банк, значит нужны деньги. " +
      "Модальные глаголы must и may самостоятельного лексического значения не имеют и требуют после себя инфинитива смыслового глагола, а не существительного; " +
      "конструкция have to тоже строится как have to do something, поэтому сочетание have to money бессмысленно.",
  },
  {
    id: "mk-en-b05-13",
    topic: "pronoun",
    difficulty: "B",
    text: "What are ___ over there? ___ are my shoes.",
    options: ["that/This", "these/These", "those/Those", "these/That"],
    correct: [2],
    explanation:
      "Глагол are в обоих предложениях требует указательного местоимения во множественном числе, а обстоятельство over there обозначает удалённые предметы, значит нужна дальняя форма those. " +
      "Ответ должен подхватывать ту же форму, поэтому Those are my shoes. " +
      "Формы this и that стоят в единственном числе и не согласуются с are и с существительным shoes; " +
      "вариант these/These грамматически возможен, но противоречит слову over there, которое указывает на удалённость, а these обозначает предметы рядом с говорящим.",
  },
  {
    id: "mk-en-b05-14",
    topic: "pronoun",
    difficulty: "C",
    text: "It is a medieval palace, ___ the King hid during the civil war.",
    options: ["which", "when", "where", "what"],
    correct: [2],
    explanation:
      "Придаточное определительное относится к слову palace, то есть к месту, и внутри придаточного пропущено именно обстоятельство места: король прятался во дворце. " +
      "Такое значение передаёт относительное наречие where, равное по смыслу in which. " +
      "Слово which само по себе заняло бы позицию подлежащего или дополнения, а глагол hid здесь употреблён без дополнения, поэтому нужен именно предложный вариант; " +
      "when вводит придаточное времени, а слово palace обозначает не отрезок времени, а место; what вообще не может вводить определительное придаточное к выраженному существительному.",
  },
  {
    id: "mk-en-b05-15",
    topic: "pronoun",
    difficulty: "C",
    text: "___ tells me ___.",
    options: [
      "Anybody/nobody",
      "Nothing/anybody",
      "Nobody/anything",
      "Nobody/none",
    ],
    correct: [2],
    explanation:
      "В английском предложении допустимо только одно отрицание, поэтому если отрицание уже стоит в подлежащем nobody, то дополнение должно быть неотрицательным: anything. " +
      "Получается Nobody tells me anything - мне никто ничего не говорит. " +
      "Вариант Nobody/none даёт двойное отрицание, недопустимое в нормативном английском; " +
      "Anybody/nobody нарушает то же правило и вдобавок ставит anybody в утвердительное подлежащее, где обычно нужен somebody; сочетание Nothing tells me anybody бессмысленно, так как anybody не может быть тем, что сообщают.",
  },
  {
    id: "mk-en-b05-16",
    topic: "preposition",
    difficulty: "B",
    text: "Did you congratulate Tessa ___ the next exam?",
    options: ["on passing", "passing", "have passed", "of passing"],
    correct: [0],
    explanation:
      "Глагол congratulate управляется предлогом on: congratulate somebody on something. " +
      "После предлога может стоять только существительное или герундий, поэтому получается congratulate Tessa on passing. " +
      "Вариант of passing даёт неверный предлог, такое управление у congratulate невозможно; " +
      "герундий passing без предлога оставляет глагол без нужного управления, а have passed это личная форма перфекта, которая после congratulate somebody просто не встаёт.",
  },
  {
    id: "mk-en-b05-17",
    topic: "numeral",
    difficulty: "B",
    text: "Thanksgiving Day is celebrated on ___ of November.",
    options: [
      "Thursday the fourth",
      "the fourth Thursday",
      "Thursday number four",
      "number four Thursday",
    ],
    correct: [1],
    explanation:
      "Порядковый номер дня недели внутри месяца выражается порядковым числительным с определённым артиклем перед существительным: the fourth Thursday of November. " +
      "Порядковые числительные всегда стоят перед определяемым словом и требуют артикля the, потому что указывают на единственный такой день. " +
      "Форма Thursday the fourth читалась бы как четвёртое число, то есть как дата, а не как четвёртый по счёту четверг; " +
      "конструкции Thursday number four и number four Thursday в английском не употребляются вовсе, это калька, а не нормативный способ счёта.",
  },
  {
    id: "mk-en-b05-18",
    topic: "non-finite",
    difficulty: "B",
    text: "I wanted ___ my friend, but could not ___ her address.",
    options: [
      "to call/found",
      "to call/find",
      "call/to find",
      "calling/to find",
    ],
    correct: [1],
    explanation:
      "Глагол want требует после себя инфинитива с частицей to, значит первый пропуск это to call. " +
      "Во втором пропуске стоит модальный глагол could, после которого идёт только голый инфинитив без to, поэтому find. " +
      "Вариант to call/found ставит после could форму прошедшего времени, что невозможно: время уже выражено самим could; " +
      "варианты call/to find и calling/to find нарушают оба правила сразу - want не берёт ни голый инфинитив, ни герундий в этом значении, а could не сочетается с to find.",
  },
  {
    id: "mk-en-b05-19",
    topic: "verb",
    difficulty: "B",
    text:
      "When we came to the cinema, the movie ___. Unfortunately, we missed the beginning of the movie.",
    options: ["has begun", "had been beginning", "had begun", "begun"],
    correct: [2],
    explanation:
      "Здесь два действия в прошлом: приход в кинотеатр в Past Simple и более раннее начало фильма. " +
      "Действие, которое произошло раньше другого прошедшего, ставится в Past Perfect, то есть had begun. " +
      "Форма has begun это Present Perfect, она связывает событие с настоящим и не согласуется с прошедшим came; " +
      "had been beginning в длительном перфекте невозможно, так как begin обозначает мгновенный переход, а не процесс; begun без вспомогательного глагола это лишь третья форма, самостоятельным сказуемым она быть не может.",
  },
  {
    id: "mk-en-b05-20",
    topic: "preposition",
    difficulty: "B",
    text:
      "The post-office works from Monday to Friday. Sometimes it also works ___ Saturdays.",
    options: ["for", "in", "to", "on"],
    correct: [3],
    explanation:
      "С днями недели в английском употребляется предлог on: on Monday, on Saturdays. " +
      "Множественное число Saturdays добавляет значение регулярности - по субботам, и предлог при этом остаётся тем же. " +
      "Предлог in используется с месяцами, годами и частями суток (in May, in the morning), но не с днями недели; " +
      "for обозначает длительность отрезка (for two hours), а to входит в парную конструкцию from ... to и в одиночку с днём недели не ставится.",
  },

  // ===== Лексико-грамматический тест, вариант 9 =====
  {
    id: "mk-en-b05-21",
    topic: "pronoun",
    difficulty: "B",
    text: "There are apples and pears on the plate. ___ do you prefer?",
    options: ["Who", "Whom", "What's", "Which"],
    correct: [3],
    explanation:
      "Выбор идёт из закрытого, названного ранее набора - яблоки или груши, а в такой ситуации употребляется вопросительное местоимение which. " +
      "Разница с what именно в этом: what спрашивает об открытом множестве, which о выборе из известных вариантов. " +
      "Местоимения who и whom относятся только к людям, а речь о фруктах; " +
      "форма What's это стяжение what is, после которого не может стоять do you prefer - в предложении получилось бы сразу два сказуемых.",
  },
  {
    id: "mk-en-b05-22",
    topic: "pronoun",
    difficulty: "B",
    text: "Can you give me ___ money?",
    options: ["any", "a", "some", "an"],
    correct: [2],
    explanation:
      "Money это неисчисляемое существительное, поэтому артикли a и an с ним не употребляются вовсе - они сочетаются только с исчисляемыми в единственном числе. " +
      "Остаются some и any, и здесь работает правило вежливой просьбы: в вопросах-просьбах и предложениях чего-либо ставится some, а не any. " +
      "Предложение Can you give me some money это именно просьба, поэтому верно some. " +
      "Форма any в вопросе означала бы нейтральный запрос информации, есть ли вообще хоть сколько-то денег, а не просьбу дать их.",
  },
  {
    id: "mk-en-b05-23",
    topic: "adverb",
    difficulty: "B",
    text: "Choose the sentence with the adverb of manner.",
    options: [
      "She easily found the job.",
      "I visit my grandmother twice a week.",
      "He will talk to you about it next week.",
      "I'll send you all the information tomorrow.",
    ],
    correct: [0],
    explanation:
      "Наречие образа действия отвечает на вопрос как и обычно образуется от прилагательного с помощью суффикса -ly; в первом предложении это easily - нашла работу как? легко. " +
      "Остальные предложения содержат обстоятельства времени, а не образа действия. " +
      "Сочетание twice a week отвечает на вопрос как часто и относится к наречиям частотности; " +
      "next week и tomorrow отвечают на вопрос когда и являются наречиями времени, хотя по форме tomorrow тоже наречие, значение у него временное.",
  },
  {
    id: "mk-en-b05-24",
    topic: "article",
    difficulty: "C",
    text: "Zidane was named ___ best player at ___ World Cup in ___ July 2006.",
    options: ["a/the/-", "-/an/the", "the/the/-", "the/an/-"],
    correct: [2],
    explanation:
      "Перед превосходной степенью best нужен определённый артикль the, потому что лучший игрок только один. " +
      "Название спортивного турнира World Cup тоже употребляется с the, как и большинство названий соревнований и уникальных событий. " +
      "Перед названиями месяцев артикль не ставится вообще, поэтому третий пропуск остаётся пустым: in July 2006. " +
      "Варианты с a и an отпадают: неопределённый артикль несовместим с превосходной степенью и с уникальным названием турнира, а вариант с the перед July нарушает правило об отсутствии артикля перед месяцами.",
  },
  {
    id: "mk-en-b05-25",
    topic: "non-finite",
    difficulty: "C",
    text: "___ students about the time-table is his duty.",
    options: ["Informed", "Inform", "To be informed", "Informing"],
    correct: [3],
    explanation:
      "Сказуемое предложения это is his duty, значит перед ним стоит подлежащее, а в роли подлежащего из неличных форм чаще всего выступает герундий: Informing students is his duty. " +
      "Кроме того после пропуска идёт прямое дополнение students, а его может принимать только форма с активным значением. " +
      "Форма Inform это повелительное наклонение, оно образовало бы отдельное предложение-приказ и не может быть подлежащим; " +
      "Informed это причастие прошедшего времени со страдательным значением, а To be informed это пассивный инфинитив, и оба они означали бы, что информируют кого-то другого, а не он информирует студентов.",
  },
  {
    id: "mk-en-b05-26",
    topic: "adjective",
    difficulty: "C",
    text: "It is ___ mountain in the world. So, there is no mountain in the world ___.",
    options: [
      "the more higher/the highest",
      "the highest/higher",
      "higher/higher",
      "the most high/the highest",
    ],
    correct: [1],
    explanation:
      "Оборот in the world задаёт превосходную степень в первом предложении: the highest mountain in the world. " +
      "Во втором предложении сравнение идёт с этой горой, то есть нет горы выше, а для этого нужна сравнительная степень higher. " +
      "Сочетание the more higher содержит сразу два показателя сравнительной степени, а такое удвоение запрещено; " +
      "the most high неверно, потому что односложное high образует степени сравнения суффиксально (high - higher - the highest), а не с most; вариант higher/higher оставляет первое предложение без превосходной степени, которой требует in the world.",
  },
  {
    id: "mk-en-b05-27",
    topic: "adjective",
    difficulty: "B",
    text: "Apples are ___ than strawberries.",
    options: ["more healthy", "healthiest", "healthy", "healthier"],
    correct: [3],
    explanation:
      "Союз than требует сравнительной степени, а прилагательное healthy двусложное и оканчивается на -y, поэтому образует её суффиксом -er с заменой y на i: healthier. " +
      "Именно эту форму и ждёт тест как единственно верную. " +
      "Форма healthy это положительная степень, с than она не сочетается; " +
      "healthiest это превосходная степень, ей нужен артикль the и значение крайней точки, а не попарного сравнения; аналитическая форма more healthy для прилагательных на -y считается нежелательной и в задании не принимается.",
  },
  {
    id: "mk-en-b05-28",
    topic: "adjective",
    difficulty: "C",
    text: "It was really ___ experience. Afterwards everybody was very ___.",
    options: [
      "terrified/shocking",
      "shocked/shocking",
      "terrified/terrifying",
      "terrifying/shocked",
    ],
    correct: [3],
    explanation:
      "Прилагательные на -ing описывают источник впечатления, а на -ed состояние того, кто это впечатление испытал. " +
      "Опыт сам вызывает ужас, значит terrifying experience; люди же испытали потрясение, значит everybody was shocked. " +
      "Вариант terrified/terrifying переворачивает логику: опыт не может быть напуганным, а люди не могут быть источником страха для самих себя; " +
      "в вариантах shocked/shocking и terrified/shocking неверна первая часть, потому что определяемое слово experience обозначает не переживающего, а причину переживания.",
  },
  {
    id: "mk-en-b05-29",
    topic: "pronoun",
    difficulty: "B",
    text:
      "Marat asked me if he could borrow my book because he had lost ___.",
    options: ["him", "he", "himself", "his"],
    correct: [3],
    explanation:
      "По смыслу он потерял свою книгу, а чтобы не повторять слово book, нужна абсолютная форма притяжательного местоимения his, равная his book. " +
      "Абсолютные притяжательные местоимения занимают позицию существительного и стоят без него, что здесь и требуется после глагола lost. " +
      "Личные местоимения he и him не выражают принадлежности: he это форма подлежащего и после глагола вообще стоять не может, а had lost him означало бы, что он потерял какого-то человека; " +
      "возвратное himself дало бы бессмысленное он потерял самого себя.",
  },
  {
    id: "mk-en-b05-30",
    topic: "article",
    difficulty: "A",
    text: "What is ___ longest river in ___ world?",
    options: ["the/the", "the/a", "a/a", "the/an"],
    correct: [0],
    explanation:
      "Перед прилагательным в превосходной степени всегда ставится определённый артикль: the longest, ведь самая длинная река только одна. " +
      "Существительное world относится к уникальным объектам и тоже употребляется с the: in the world. " +
      "Неопределённый артикль a или an обозначает один предмет из ряда однородных, что несовместимо ни с превосходной степенью, ни со словом world; " +
      "поэтому все варианты с a и an неверны, единственно возможная пара это the/the.",
  },
  {
    id: "mk-en-b05-31",
    topic: "pronoun",
    difficulty: "B",
    text: "Let me introduce the student ___ wrote the article.",
    options: ["which", "where", "when", "who"],
    correct: [3],
    explanation:
      "Придаточное определительное относится к слову student, то есть к человеку, и в придаточном пропущено подлежащее при сказуемом wrote. " +
      "Одушевлённое подлежащее в определительном придаточном вводит относительное местоимение who. " +
      "Местоимение which употребляется только с неодушевлёнными предметами и животными, поэтому к student оно не подходит; " +
      "where и when это относительные наречия места и времени, они не могут занимать позицию подлежащего и не сочетаются с существительным, обозначающим лицо.",
  },
  {
    id: "mk-en-b05-32",
    topic: "verb",
    difficulty: "A",
    text: "My husband ___ to his boss last week.",
    options: ["has spoken", "have spoken", "speaks", "spoke"],
    correct: [3],
    explanation:
      "Обстоятельство last week указывает на завершённый отрезок прошлого, а с такими маркерами употребляется Past Simple, то есть spoke. " +
      "Present Perfect has spoken невозможен именно потому, что он несовместим с точным указанием прошедшего времени; " +
      "форма have spoken вдобавок не согласуется с подлежащим третьего лица единственного числа my husband. " +
      "Настоящее время speaks описывало бы регулярное действие и противоречило бы обстоятельству last week.",
  },
  {
    id: "mk-en-b05-33",
    topic: "verb",
    difficulty: "B",
    text: "Ask Catherine about your problem. She might ___ help you.",
    options: ["able to", "has to", "be able to", "must"],
    correct: [2],
    explanation:
      "После модального глагола might идёт инфинитив без частицы to, а два модальных глагола подряд в английском не ставятся, поэтому нужен эквивалент be able to. " +
      "Получается she might be able to help you - возможно, она сумеет помочь. " +
      "Сочетание able to без глагола-связки be грамматически неполно: able это прилагательное, ему нужен глагол; " +
      "варианты has to и must это сами модальные средства, они не могут стоять после might, и по смыслу они выражают обязанность, а не возможность.",
  },
  {
    id: "mk-en-b05-34",
    topic: "adverb",
    difficulty: "B",
    text: "The right sentence is ___.",
    options: [
      "Were playing happily the children",
      "Children were the playing happily",
      "Happily playing were the children",
      "The children were playing happily",
    ],
    correct: [3],
    explanation:
      "В английском повествовательном предложении действует твёрдый порядок слов: подлежащее, сказуемое, дополнение, обстоятельство. " +
      "Наречие образа действия happily при этом ставится после смыслового глагола или в конце предложения, поэтому верно The children were playing happily. " +
      "Вариант с начальным Were playing даёт вопросительный порядок слов и вдобавок отрывает подлежащее в конец; " +
      "во втором варианте артикль the оказался внутри составного сказуемого, что невозможно, а третий вариант с инверсией Happily playing were the children нарушает нейтральный порядок слов и не соответствует норме.",
  },
  {
    id: "mk-en-b05-35",
    topic: "verb",
    difficulty: "C",
    text: "Our best player is injured and ___ in the game on Saturday.",
    options: [
      "won't be playing",
      "will be playing",
      "won't have been playing",
      "will play",
    ],
    correct: [0],
    explanation:
      "Первая часть предложения сообщает о травме, значит логично отрицание: игрок не будет играть, поэтому варианты с will отпадают по смыслу. " +
      "Речь идёт о запланированном матче в конкретный момент будущего, а такое действие передаёт Future Continuous: won't be playing. " +
      "Форма will be playing и will play противоречат факту травмы, так как утверждают участие в игре; " +
      "won't have been playing это Future Perfect Continuous, он указывал бы на длительность действия к какому-то будущему моменту, а такого момента в предложении нет.",
  },
  {
    id: "mk-en-b05-36",
    topic: "verb",
    difficulty: "B",
    text: "Tom ___ in Astana now because he is an exchange student.",
    options: ["lives", "has been living", "has lived", "is living"],
    correct: [3],
    explanation:
      "Наречие now и указание на временный статус студента по обмену показывают, что действие происходит в текущий период и не является постоянным, а это область Present Continuous: is living. " +
      "Present Continuous как раз и используется для временных ситуаций в противопоставление постоянным. " +
      "Форма lives в Present Simple означала бы, что Том живёт в Астане постоянно, что противоречит смыслу обмена; " +
      "has lived и has been living это перфектные формы, они подчёркивают срок или результат к настоящему моменту и обычно требуют указания времени вроде for two years, которого в предложении нет.",
  },
  {
    id: "mk-en-b05-37",
    topic: "verb",
    difficulty: "B",
    text: "At nine o'clock yesterday morning we ___ for the bus.",
    options: ["had waited", "waited", "waiting", "were waiting"],
    correct: [3],
    explanation:
      "Обстоятельство at nine o'clock yesterday morning указывает на точный момент в прошлом, а действие, разворачивавшееся в этот момент, передаёт Past Continuous: were waiting. " +
      "Именно эта форма отвечает на вопрос что происходило в такой-то час. " +
      "Past Simple waited обозначал бы законченный факт и плохо сочетается с указанием точки внутри процесса ожидания; " +
      "had waited это Past Perfect, ему нужно второе прошедшее действие, к которому он предшествует, а его в предложении нет; форма waiting без вспомогательного глагола сказуемым быть не может.",
  },
  {
    id: "mk-en-b05-38",
    topic: "mood",
    difficulty: "C",
    text: "If I hadn't studied, I ___ to pass the exam.",
    options: [
      "wouldn't can",
      "had been able",
      "wouldn't have been able",
      "wouldn't be able",
    ],
    correct: [2],
    explanation:
      "Придаточное If I hadn't studied стоит в Past Perfect, а это признак третьего типа условных предложений, где речь идёт о нереальном условии в прошлом. " +
      "В главной части такого предложения употребляется would have + причастие прошедшего времени, поэтому верно wouldn't have been able. " +
      "Вариант wouldn't be able относится ко второму типу условия, то есть к нереальному настоящему, и не согласуется с Past Perfect в придаточном; " +
      "сочетание wouldn't can невозможно, так как два модальных глагола подряд не ставятся, а had been able повторило бы форму придаточного и не выразило бы следствия.",
  },

  // ===== Лексико-грамматический тест, вариант 10 =====
  {
    id: "mk-en-b05-39",
    topic: "preposition",
    difficulty: "A",
    text: "Yesterday evening I went to a restaurant ___ some friends of mine.",
    options: ["to", "by", "for", "with"],
    correct: [3],
    explanation:
      "Значение совместности, то есть вместе с кем-то, передаётся в английском предлогом with: I went to a restaurant with some friends. " +
      "Предлог by указывает на способ передвижения или деятеля при пассиве (by bus, written by him), а не на спутников; " +
      "предлог to обозначает направление и уже употреблён в этом предложении перед словом restaurant, второй раз он не нужен. " +
      "Предлог for вводит цель или адресата, поэтому for some friends означало бы ради друзей, а не в компании друзей.",
  },
  {
    id: "mk-en-b05-40",
    topic: "verb",
    difficulty: "B",
    text: "He ___ there since he was a child.",
    options: ["living", "lived", "lives", "'s lived"],
    correct: [3],
    explanation:
      "Предлог since задаёт начальную точку периода, который тянется до настоящего момента, а такой период требует Present Perfect: he's lived there, то есть he has lived there. " +
      "Именно эта форма показывает, что человек живёт там до сих пор. " +
      "Past Simple lived описывал бы законченный отрезок прошлого без связи с настоящим и с since не употребляется; " +
      "Present Simple lives не передаёт длительности от прошлого к настоящему, а форма living без вспомогательного глагола вообще не является сказуемым.",
  },
  {
    id: "mk-en-b05-41",
    topic: "mood",
    difficulty: "C",
    text: "If need ___ I will come to see you in New York.",
    options: ["is", "be", "are", "being"],
    correct: [1],
    explanation:
      "Оборот if need be это устойчивая формула со старой формой сослагательного наклонения, означающая если потребуется, в случае необходимости. " +
      "В сослагательном наклонении глагол be сохраняет форму инфинитива при любом подлежащем, поэтому изменять его нельзя. " +
      "Формы is и are это изъявительное наклонение, они разрушили бы устойчивое выражение, а are ещё и не согласуется с единственным числом need; " +
      "форма being это причастие, оно не может быть сказуемым придаточного без вспомогательного глагола.",
  },
  {
    id: "mk-en-b05-42",
    topic: "adjective",
    difficulty: "B",
    text: "I am ___ that you haven't won the prize.",
    options: ["depressing", "exciting", "astonished", "surprising"],
    correct: [2],
    explanation:
      "Подлежащее I обозначает того, кто испытывает чувство, а состояние переживающего выражают прилагательные на -ed, поэтому нужен вариант astonished - я поражён. " +
      "Прилагательные на -ing описывают источник эмоции, а человек в этом предложении не является источником, он адресат новости. " +
      "Поэтому I am surprising означало бы, что я сам удивляю окружающих, а не удивлён; " +
      "по той же причине не годятся depressing и exciting, они характеризовали бы говорящего как нечто угнетающее или волнующее других, что противоречит смыслу фразы.",
  },
  {
    id: "mk-en-b05-43",
    topic: "numeral",
    difficulty: "B",
    text: "2.27% is:",
    options: [
      "two point two seven per cent",
      "two point two seven",
      "two and two seven per cent",
      "two per cent two seven",
    ],
    correct: [0],
    explanation:
      "Десятичная дробь в английском читается через слово point, а цифры после запятой называются по одной: 2.27 это two point two seven. " +
      "Знак процента озвучивается словами per cent в конце, поэтому целиком получается two point two seven per cent. " +
      "Вариант two point two seven правильно передаёт число, но полностью теряет процент, а он в записи есть; " +
      "в варианте two and two seven per cent союз and вместо point используется при чтении простых дробей и целых чисел, а не десятичных; последний вариант просто нарушает порядок слов.",
  },
  {
    id: "mk-en-b05-44",
    topic: "adjective",
    difficulty: "B",
    text: "You've done ___ work than I have.",
    options: ["more", "the most", "much", "many"],
    correct: [0],
    explanation:
      "Союз than требует сравнительной степени, а от much и many сравнительная степень образуется супплетивно: much/many - more - the most. " +
      "Слово work здесь неисчисляемое, и more подходит к нему без ограничений. " +
      "Форма the most это превосходная степень, с than она не сочетается; " +
      "much это положительная степень и сравнения не выражает, а many вообще употребляется только с исчисляемыми существительными во множественном числе, тогда как work в этом значении неисчисляемо.",
  },
  {
    id: "mk-en-b05-45",
    topic: "lexicology",
    difficulty: "C",
    text: "I'm ___ sorry to tell you that we have no more tickets.",
    options: ["awful", "terribly", "enough", "remarkably"],
    correct: [1],
    explanation:
      "Прилагательное sorry определяется наречием степени, а устойчивое сочетание для усиления извинения это terribly sorry, дословно ужасно жаль. " +
      "Такие пары наречия и прилагательного в английском закреплены традицией употребления, их нельзя свободно заменять синонимами. " +
      "Форма awful это прилагательное, а прилагательное не может определять другое прилагательное, здесь потребовалось бы awfully; " +
      "enough ставится после прилагательного (good enough), а не перед ним, а remarkably хотя и наречие, но сочетается с оценками вроде remarkably good и с sorry в устойчивую формулу не входит.",
  },
  {
    id: "mk-en-b05-46",
    topic: "mood",
    difficulty: "C",
    text: "Find the sentence in the Subjunctive Mood.",
    options: [
      "Show your work on math test.",
      "We must go to the bank today.",
      "If only I could go home.",
      "He lives most of the year in Spain but returns regularly to visit his mother.",
    ],
    correct: [2],
    explanation:
      "Сослагательное наклонение выражает не факт, а желание, предположение или нереальное действие, и формула If only с формой прошедшего времени - типичный его показатель: If only I could go home означает вот бы мне попасть домой. " +
      "Такое предложение не сообщает о событии, а передаёт сожаление о невозможном. " +
      "Предложение Show your work это повелительное наклонение, оно выражает приказ или просьбу; " +
      "предложения We must go to the bank today и He lives most of the year in Spain стоят в изъявительном наклонении, поскольку сообщают о реальном положении дел.",
  },
  {
    id: "mk-en-b05-47",
    topic: "verb",
    difficulty: "B",
    text: "Wangari Maathai from Africa ___ the Nobel Peace Prize in 2004.",
    options: ["has awarded", "has been awarded", "was awarded", "is awarded"],
    correct: [2],
    explanation:
      "Премию не вручают сами, её вручают кому-то, поэтому нужен страдательный залог, а точная дата in 2004 указывает на завершённый отрезок прошлого, то есть на Past Simple Passive: was awarded. " +
      "Активная форма has awarded означала бы, что она сама наградила кого-то Нобелевской премией, что абсурдно; " +
      "has been awarded это Present Perfect Passive, а он не употребляется с точным указанием прошедшего года. " +
      "Форма is awarded описывает регулярное или настоящее действие и с обстоятельством in 2004 не согласуется.",
  },
  {
    id: "mk-en-b05-48",
    topic: "lexicology",
    difficulty: "B",
    text:
      "That's an excellent opportunity for you. The word opportunity in this sentence can be replaced with the synonym ___.",
    options: ["answer", "chance", "step", "news"],
    correct: [1],
    explanation:
      "Слово opportunity означает благоприятную возможность, и ближайший его синоним в этом значении - chance: an excellent chance for you звучит совершенно естественно. " +
      "Оба слова обозначают удачное стечение обстоятельств, которым можно воспользоваться. " +
      "Слово answer это ответ, оно относится к вопросу, а не к возможности; " +
      "step обозначает шаг или этап действия, а news это новость, сообщение, и ни одно из них не передаёт идею открывшегося шанса.",
  },
  {
    id: "mk-en-b05-49",
    topic: "verb",
    difficulty: "B",
    text: "We are good friends. We ___ each other for years.",
    options: ["known", "knew", "have known", "had known"],
    correct: [2],
    explanation:
      "Оборот for years обозначает период, который начался в прошлом и продолжается сейчас, а такое значение передаёт Present Perfect: have known. " +
      "Первое предложение подтверждает, что дружба длится до сих пор, поэтому связь с настоящим обязательна. " +
      "Past Simple knew оборвал бы эту связь и означал бы, что раньше знали, а теперь нет; " +
      "Past Perfect had known требует второго, более позднего действия в прошлом, а его в предложении нет; форма known без вспомогательного глагола сказуемым быть не может.",
  },
  {
    id: "mk-en-b05-50",
    topic: "preposition",
    difficulty: "B",
    text: "Thanks for looking ___ me when I was ill.",
    options: ["to", "after", "at", "with"],
    correct: [1],
    explanation:
      "Фразовый глагол look after означает заботиться о ком-то, ухаживать, и именно это подходит по смыслу: спасибо, что ухаживал за мной во время болезни. " +
      "Значение фразового глагола целиком задаётся послелогом, поэтому заменить after нельзя. " +
      "Сочетание look at значит просто смотреть на кого-то, что для благодарности за уход бессмысленно; " +
      "look to означает рассчитывать на кого-то или обращаться к кому-то за помощью, а сочетание look with в английском вообще не является устойчивым фразовым глаголом.",
  },
  {
    id: "mk-en-b05-51",
    topic: "adjective",
    difficulty: "B",
    text: "Helen is ___ clever person. She got all answers right.",
    options: ["such", "such an", "so", "such a"],
    correct: [3],
    explanation:
      "Усилительное such употребляется перед сочетанием прилагательного с существительным, и если существительное исчисляемое в единственном числе, между such и прилагательным ставится артикль: such a clever person. " +
      "Артикль выбирается по первому звуку следующего слова, а clever начинается с согласного, поэтому нужен a, а не an. " +
      "Вариант such an неверен именно из-за звука, а such без артикля возможен только перед неисчисляемыми и множественным числом (such news, such people); " +
      "наречие so усиливает прилагательное без существительного (she is so clever), а здесь после прилагательного стоит слово person.",
  },
  {
    id: "mk-en-b05-52",
    topic: "preposition",
    difficulty: "B",
    text: "The normal working week is ___ Monday ___ Saturday.",
    options: ["from/since", "till/till", "on/on", "from/to"],
    correct: [3],
    explanation:
      "Границы отрезка времени обозначаются парной конструкцией from ... to: from Monday to Saturday. " +
      "Оба предлога работают только вместе, первый задаёт начало, второй конец периода. " +
      "Предлог since тоже указывает на начало, но употребляется с перфектными временами и без парного to, поэтому сочетание from/since невозможно; " +
      "till обозначает только конечную границу и дважды подряд стоять не может, а on употребляется с отдельным днём недели, а не с промежутком между двумя днями.",
  },
  {
    id: "mk-en-b05-53",
    topic: "verb",
    difficulty: "B",
    text:
      "When did you get the new job? A month ago, after I ___ my exam.",
    options: ["was passing", "was passed", "passed", "has passed"],
    correct: [2],
    explanation:
      "Обстоятельство a month ago задаёт завершённый момент в прошлом, поэтому оба действия описываются простым прошедшим временем: passed. " +
      "Союз after сам показывает последовательность событий, так что перфект здесь не обязателен и Past Simple вполне достаточен. " +
      "Форма has passed это Present Perfect, а он несовместим с точным указанием прошедшего времени a month ago; " +
      "was passing передавал бы процесс сдачи экзамена, а не его завершение, а was passed это страдательный залог, который означал бы, что экзамен сдали, тогда как сдающим является сам говорящий.",
  },
  {
    id: "mk-en-b05-54",
    topic: "numeral",
    difficulty: "B",
    text:
      "The influenza pandemic of 1918 killed millions of people. How is the year 1918 read?",
    options: [
      "ninety hundred and eighteen",
      "one thousand and ninety hundred and eighteen",
      "nine hundred and eighteen",
      "nineteen eighteen",
    ],
    correct: [3],
    explanation:
      "Годы в английском читаются парами двузначных чисел: 1918 делится на 19 и 18 и произносится nineteen eighteen. " +
      "Это стандартный способ чтения дат от 1100 до 1999, слово hundred при нём не используется. " +
      "Вариант nine hundred and eighteen соответствовал бы числу 918, то есть теряет первую цифру; " +
      "сочетания ninety hundred и one thousand and ninety hundred в английском не существуют вовсе, сотни выше девятисот таким способом не называются.",
  },

  // ===== Чтение, вариант 7, Text 13 =====
  {
    id: "mk-en-b05-55",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "The Statue of Liberty",
      value:
        "The Statue of Liberty, arguably one of New York City's most iconic symbols, is a popular " +
        "tourist attraction for first-time visitors to the city. This 150-foot monument was gifted to " +
        "the United States from France in order to celebrate 100 years of America's independence. " +
        "The statue is located on Liberty Island, and it is accessible by taking a ferry from either " +
        "Battery Park in New York City or Liberty State Park in Jersey City.\n\n" +
        "When Claire visited the Statue of Liberty for the first time, she instantly admired it as a " +
        "symbol of freedom. Claire made sure to make reservations before her visit because only 240 " +
        "people are permitted to climb the staircase to the top of the statue every day. After climbing " +
        "almost 400 stairs, Claire received spectacular views of the city from the statue's crown.\n\n" +
        "During her visit, Claire learned that the Statue of Liberty was not always the color that it is " +
        "now. She found out that because the statue's exterior is made of copper, the statue oxidized " +
        "over time, giving it the greenish appearance it has in present day. When it was first " +
        "constructed, the statue was the same color as a shiny penny! After touring the Statue of " +
        "Liberty, Claire spent the rest of the day in New York City visiting other important monuments " +
        "and historic landmarks. Claire left New York hoping to have had the time to explore more " +
        "sites, but she can't wait to return to the city in the future.",
    },
    text: "Who gifted the Statue of Liberty to the United States?",
    options: ["The British", "The French", "The Spanish", "The Dutch"],
    correct: [1],
    explanation:
      "Ответ прямо назван во втором предложении первого абзаца: the monument was gifted to the United States from France. " +
      "Раз статую подарила Франция, то дарителями были французы, то есть the French. " +
      "Британцы, испанцы и голландцы в тексте не упоминаются вообще, ни одна из этих наций со статуей не связана. " +
      "Задание проверяет умение находить в тексте прямо выраженный факт и правильно перевести название страны в название народа.",
  },
  {
    id: "mk-en-b05-56",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "The Statue of Liberty",
      value:
        "The Statue of Liberty, arguably one of New York City's most iconic symbols, is a popular " +
        "tourist attraction for first-time visitors to the city. This 150-foot monument was gifted to " +
        "the United States from France in order to celebrate 100 years of America's independence. " +
        "The statue is located on Liberty Island, and it is accessible by taking a ferry from either " +
        "Battery Park in New York City or Liberty State Park in Jersey City.\n\n" +
        "When Claire visited the Statue of Liberty for the first time, she instantly admired it as a " +
        "symbol of freedom. Claire made sure to make reservations before her visit because only 240 " +
        "people are permitted to climb the staircase to the top of the statue every day. After climbing " +
        "almost 400 stairs, Claire received spectacular views of the city from the statue's crown.\n\n" +
        "During her visit, Claire learned that the Statue of Liberty was not always the color that it is " +
        "now. She found out that because the statue's exterior is made of copper, the statue oxidized " +
        "over time, giving it the greenish appearance it has in present day. When it was first " +
        "constructed, the statue was the same color as a shiny penny! After touring the Statue of " +
        "Liberty, Claire spent the rest of the day in New York City visiting other important monuments " +
        "and historic landmarks. Claire left New York hoping to have had the time to explore more " +
        "sites, but she can't wait to return to the city in the future.",
    },
    text: "What was the Statue of Liberty intended to celebrate?",
    options: [
      "Open immigration to the United States",
      "The end of the Civil War",
      "Economic recovery from the Great Depression",
      "A century of American independence",
    ],
    correct: [3],
    explanation:
      "В тексте сказано in order to celebrate 100 years of America's independence, а сто лет это и есть a century, поэтому верен последний вариант. " +
      "Задание сложное именно тем, что дословного совпадения нет: нужно узнать перефразировку числа 100 years словом century. " +
      "Про иммиграцию в тексте не говорится ни слова, хотя статуя действительно ассоциируется с этой темой в общих знаниях - здесь это ловушка на внешние сведения; " +
      "Гражданская война и Великая депрессия в тексте тоже не упоминаются, а по датам они не имеют отношения к столетию независимости.",
  },
  {
    id: "mk-en-b05-57",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "The Statue of Liberty",
      value:
        "The Statue of Liberty, arguably one of New York City's most iconic symbols, is a popular " +
        "tourist attraction for first-time visitors to the city. This 150-foot monument was gifted to " +
        "the United States from France in order to celebrate 100 years of America's independence. " +
        "The statue is located on Liberty Island, and it is accessible by taking a ferry from either " +
        "Battery Park in New York City or Liberty State Park in Jersey City.\n\n" +
        "When Claire visited the Statue of Liberty for the first time, she instantly admired it as a " +
        "symbol of freedom. Claire made sure to make reservations before her visit because only 240 " +
        "people are permitted to climb the staircase to the top of the statue every day. After climbing " +
        "almost 400 stairs, Claire received spectacular views of the city from the statue's crown.\n\n" +
        "During her visit, Claire learned that the Statue of Liberty was not always the color that it is " +
        "now. She found out that because the statue's exterior is made of copper, the statue oxidized " +
        "over time, giving it the greenish appearance it has in present day. When it was first " +
        "constructed, the statue was the same color as a shiny penny! After touring the Statue of " +
        "Liberty, Claire spent the rest of the day in New York City visiting other important monuments " +
        "and historic landmarks. Claire left New York hoping to have had the time to explore more " +
        "sites, but she can't wait to return to the city in the future.",
    },
    text: "Why has the Statue of Liberty changed color over time?",
    options: [
      "Its copper exterior oxidized.",
      "It was painted green during restorations.",
      "The statue is poorly maintained by the city.",
      "New York's poor air quality has eroded the statue.",
    ],
    correct: [0],
    explanation:
      "Третий абзац прямо объясняет причину: because the statue's exterior is made of copper, the statue oxidized over time. " +
      "Именно окисление медной оболочки дало зеленоватый оттенок, поэтому верен первый вариант. " +
      "О покраске в зелёный цвет в тексте не сказано ничего, наоборот, подчёркивается естественность изменения; " +
      "плохой уход со стороны города и загрязнённый воздух Нью-Йорка тоже не упоминаются - это правдоподобные, но не подтверждённые текстом объяснения, и выбирать их нельзя.",
  },

  // ===== Чтение, вариант 7, Text 14 =====
  {
    id: "mk-en-b05-58",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Miami",
      value:
        "Christina visited Miami during her winter vacation. She is from Boston, where it is cold " +
        "during the winter months. Miami, however, has a very warm climate. There are many sunny " +
        "days in Miami, and people can go to the beach all year long. Christina spent a good portion " +
        "of her trip on the beach to relax and sunbathe. However, she also explored Miami and its " +
        "surroundings.\n\n" +
        "Inspired by Miami's proximity to the ocean, Christina visited the Miami Seaquarium to learn " +
        "about marine life. There, she watched a show using trained dolphins, killer whales, and other " +
        "aquatic mammals. She took a lot of pictures of the sea creatures jumping out of the water and " +
        "performing tricks.\n\n" +
        "Christina also took an excursion to the Everglades National Park. This park is a protected area " +
        "spanning 1.5 million acres. Because the park is mostly swampland, it is home to many " +
        "reptiles. Native animals include snakes, alligators, and crocodiles. The park is also great for " +
        "bird watching. Christina enjoyed hiking the trails in the Everglades and observing the wildlife " +
        "in its natural environment.\n\n" +
        "When Christina returned to the city, she visited Little Havana. This is Miami's Cuban " +
        "neighborhood. Christina could see that Little Havana's people demonstrated a lot of pride for " +
        "their Cuban heritage. There were many outdoor shops and vendors, live musicians, and the " +
        "Cuban cuisine was delicious. Little Havana was Christina's favorite part about her trip to " +
        "Miami. This neighborhood made Christina feel like she had traveled to Cuba without ever " +
        "having to leave the United States.",
    },
    text: "In comparison to Christina's hometown, Miami's winter weather is:",
    options: ["Cooler", "Warmer", "More humid", "The same"],
    correct: [1],
    explanation:
      "Родной город Кристины - Бостон, где зимой холодно, а про Майами сказано has a very warm climate, значит зимой там теплее. " +
      "Вопрос требует сопоставить два предложения первого абзаца и сделать сравнение, прямо в тексте не сформулированное. " +
      "Вариант cooler переворачивает смысл, а the same противоречит противительному however, которое как раз подчёркивает контраст; " +
      "про влажность в тексте не говорится вообще, поэтому more humid выбрать нельзя, даже если это верно в реальности.",
  },
  {
    id: "mk-en-b05-59",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Miami",
      value:
        "Christina visited Miami during her winter vacation. She is from Boston, where it is cold " +
        "during the winter months. Miami, however, has a very warm climate. There are many sunny " +
        "days in Miami, and people can go to the beach all year long. Christina spent a good portion " +
        "of her trip on the beach to relax and sunbathe. However, she also explored Miami and its " +
        "surroundings.\n\n" +
        "Inspired by Miami's proximity to the ocean, Christina visited the Miami Seaquarium to learn " +
        "about marine life. There, she watched a show using trained dolphins, killer whales, and other " +
        "aquatic mammals. She took a lot of pictures of the sea creatures jumping out of the water and " +
        "performing tricks.\n\n" +
        "Christina also took an excursion to the Everglades National Park. This park is a protected area " +
        "spanning 1.5 million acres. Because the park is mostly swampland, it is home to many " +
        "reptiles. Native animals include snakes, alligators, and crocodiles. The park is also great for " +
        "bird watching. Christina enjoyed hiking the trails in the Everglades and observing the wildlife " +
        "in its natural environment.\n\n" +
        "When Christina returned to the city, she visited Little Havana. This is Miami's Cuban " +
        "neighborhood. Christina could see that Little Havana's people demonstrated a lot of pride for " +
        "their Cuban heritage. There were many outdoor shops and vendors, live musicians, and the " +
        "Cuban cuisine was delicious. Little Havana was Christina's favorite part about her trip to " +
        "Miami. This neighborhood made Christina feel like she had traveled to Cuba without ever " +
        "having to leave the United States.",
    },
    text: "Why was Christina motivated to visit the Miami Seaquarium?",
    options: [
      "She wanted to protest animal rights.",
      "She hoped to photograph the sea creatures.",
      "Miami's coastal location inspired her.",
      "The Seaquarium was recently constructed.",
    ],
    correct: [2],
    explanation:
      "Второй абзац начинается с оборота Inspired by Miami's proximity to the ocean, и это прямой ответ на вопрос о причине: её вдохновила близость города к океану. " +
      "Оборот proximity to the ocean в вариантах перефразирован как coastal location. " +
      "Фотографировала морских животных она уже во время посещения, это следствие, а не мотив поездки, поэтому второй вариант подменяет причину результатом; " +
      "о протестах в защиту животных и о недавнем строительстве океанариума в тексте нет ни слова.",
  },
  {
    id: "mk-en-b05-60",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "Miami",
      value:
        "Christina visited Miami during her winter vacation. She is from Boston, where it is cold " +
        "during the winter months. Miami, however, has a very warm climate. There are many sunny " +
        "days in Miami, and people can go to the beach all year long. Christina spent a good portion " +
        "of her trip on the beach to relax and sunbathe. However, she also explored Miami and its " +
        "surroundings.\n\n" +
        "Inspired by Miami's proximity to the ocean, Christina visited the Miami Seaquarium to learn " +
        "about marine life. There, she watched a show using trained dolphins, killer whales, and other " +
        "aquatic mammals. She took a lot of pictures of the sea creatures jumping out of the water and " +
        "performing tricks.\n\n" +
        "Christina also took an excursion to the Everglades National Park. This park is a protected area " +
        "spanning 1.5 million acres. Because the park is mostly swampland, it is home to many " +
        "reptiles. Native animals include snakes, alligators, and crocodiles. The park is also great for " +
        "bird watching. Christina enjoyed hiking the trails in the Everglades and observing the wildlife " +
        "in its natural environment.\n\n" +
        "When Christina returned to the city, she visited Little Havana. This is Miami's Cuban " +
        "neighborhood. Christina could see that Little Havana's people demonstrated a lot of pride for " +
        "their Cuban heritage. There were many outdoor shops and vendors, live musicians, and the " +
        "Cuban cuisine was delicious. Little Havana was Christina's favorite part about her trip to " +
        "Miami. This neighborhood made Christina feel like she had traveled to Cuba without ever " +
        "having to leave the United States.",
    },
    text: "Which of the following animals would not be found in the Everglades?",
    options: ["Crocodiles", "Birds", "Dolphins", "Snakes"],
    correct: [2],
    explanation:
      "В третьем абзаце перечислены обитатели Эверглейдса: snakes, alligators, crocodiles, а также птицы, ведь парк назван great for bird watching. " +
      "Дельфины упоминаются в другом абзаце и в другом месте - в океанариуме Miami Seaquarium, а не в парке. " +
      "Вопрос с отрицанием требует найти лишний элемент, поэтому нужно сверить каждый вариант со списком в тексте; " +
      "крокодилы, змеи и птицы названы прямо, и любой из них был бы неверным ответом, так как в парке они встречаются.",
  },

  // ===== Чтение, вариант 8, Text 15 =====
  {
    id: "mk-en-b05-61",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "The Driver",
      value:
        "Anna Miller is a bus driver. She drives a bus in the city of Philadelphia. She works the night " +
        "shift. She starts working at 10:00 at night and gets off at 6:00 in the morning. In the world of " +
        "bus driving, this is sometimes called third shift. Anna has been driving a bus for 15 years. " +
        "She started when she was 23 years old. She loves her job most of the time. She gets to see the " +
        "beautiful city from her seat. She gets to meet all kinds of people.\n\n" +
        "There is the guitar player. People call him Get Low. That is because he likes to play the guitar " +
        "on his knees. If the bus is not too crowded, Get Low plays in the back of the bus. The bus is " +
        "seldom crowded at night. He likes to warm up on the bus before shows.\n\n" +
        "There is the woman who works at the roll factory. Each day the Roll Lady brings Anna a bag " +
        "of fresh, soft rolls. They fill the bus with a wonderful smell! Sometimes Anna's job is hard.\n\n" +
        "One time, a young woman left her sleeping baby on the bus. There was a note on the baby's " +
        "blanket asking for help. Anna had to call the police. Another time, a teenaged boy stole money " +
        "from Anna on the bus. He had a fake gun. Anna thought it was real. She was very scared. " +
        "Occasionally, driving the bus can be scary. But most of the time, driving the bus is great. " +
        "Anna does not want to work anywhere else.",
    },
    text: "Anna Miller works ___.",
    options: [
      "afternoon shift",
      "evening shift",
      "the second shift",
      "night shift",
    ],
    correct: [3],
    explanation:
      "В первом абзаце прямо сказано: She works the night shift, и это подтверждается расписанием с 10 вечера до 6 утра. " +
      "Значит верен вариант night shift. " +
      "Вариант the second shift неверен, потому что текст называет эту смену третьей: this is sometimes called third shift; " +
      "дневная и вечерняя смены в тексте не упоминаются вовсе и противоречат указанным часам работы.",
  },
  {
    id: "mk-en-b05-62",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "The Driver",
      value:
        "Anna Miller is a bus driver. She drives a bus in the city of Philadelphia. She works the night " +
        "shift. She starts working at 10:00 at night and gets off at 6:00 in the morning. In the world of " +
        "bus driving, this is sometimes called third shift. Anna has been driving a bus for 15 years. " +
        "She started when she was 23 years old. She loves her job most of the time. She gets to see the " +
        "beautiful city from her seat. She gets to meet all kinds of people.\n\n" +
        "There is the guitar player. People call him Get Low. That is because he likes to play the guitar " +
        "on his knees. If the bus is not too crowded, Get Low plays in the back of the bus. The bus is " +
        "seldom crowded at night. He likes to warm up on the bus before shows.\n\n" +
        "There is the woman who works at the roll factory. Each day the Roll Lady brings Anna a bag " +
        "of fresh, soft rolls. They fill the bus with a wonderful smell! Sometimes Anna's job is hard.\n\n" +
        "One time, a young woman left her sleeping baby on the bus. There was a note on the baby's " +
        "blanket asking for help. Anna had to call the police. Another time, a teenaged boy stole money " +
        "from Anna on the bus. He had a fake gun. Anna thought it was real. She was very scared. " +
        "Occasionally, driving the bus can be scary. But most of the time, driving the bus is great. " +
        "Anna does not want to work anywhere else.",
    },
    text: "___ stole money on the bus.",
    options: [
      "The teenager",
      "Young women",
      "The guitar player",
      "Anna",
    ],
    correct: [0],
    explanation:
      "В последнем абзаце сказано: a teenaged boy stole money from Anna on the bus, значит деньги украл подросток. " +
      "Существительное the teenager это синоним сочетания a teenaged boy, поэтому первый вариант верен. " +
      "Молодая женщина в тексте оставила в автобусе спящего ребёнка, а не крала деньги, и это соседний эпизод-ловушка; " +
      "гитарист по прозвищу Get Low просто репетирует в автобусе, а Анна сама пострадавшая, у неё и украли деньги.",
  },
  {
    id: "mk-en-b05-63",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "The Driver",
      value:
        "Anna Miller is a bus driver. She drives a bus in the city of Philadelphia. She works the night " +
        "shift. She starts working at 10:00 at night and gets off at 6:00 in the morning. In the world of " +
        "bus driving, this is sometimes called third shift. Anna has been driving a bus for 15 years. " +
        "She started when she was 23 years old. She loves her job most of the time. She gets to see the " +
        "beautiful city from her seat. She gets to meet all kinds of people.\n\n" +
        "There is the guitar player. People call him Get Low. That is because he likes to play the guitar " +
        "on his knees. If the bus is not too crowded, Get Low plays in the back of the bus. The bus is " +
        "seldom crowded at night. He likes to warm up on the bus before shows.\n\n" +
        "There is the woman who works at the roll factory. Each day the Roll Lady brings Anna a bag " +
        "of fresh, soft rolls. They fill the bus with a wonderful smell! Sometimes Anna's job is hard.\n\n" +
        "One time, a young woman left her sleeping baby on the bus. There was a note on the baby's " +
        "blanket asking for help. Anna had to call the police. Another time, a teenaged boy stole money " +
        "from Anna on the bus. He had a fake gun. Anna thought it was real. She was very scared. " +
        "Occasionally, driving the bus can be scary. But most of the time, driving the bus is great. " +
        "Anna does not want to work anywhere else.",
    },
    text: "Anna was ___ years old when she started driving a bus.",
    options: ["thirty two", "twenty five", "twenty eight", "twenty three"],
    correct: [3],
    explanation:
      "В первом абзаце сказано: She started when she was 23 years old, то есть twenty three. " +
      "Задание проверяет ещё и умение записать число словами: 23 читается как twenty three, через дефис в письменной норме. " +
      "Число 32 это перевёрнутые цифры того же числа, классическая ловушка на невнимательность; " +
      "варианты twenty five и twenty eight в тексте не встречаются вовсе, там есть только 15 лет стажа и 23 года на старте.",
  },

  // ===== Чтение, вариант 8, Text 16 =====
  {
    id: "mk-en-b05-64",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "Sport in Our Life",
      value:
        "All people all over the world are keen on sports and games. Sports and exercises make " +
        "people healthy, keep them fit, more organized and better disciplined. It unites people of " +
        "different classes and nationalities. All kinds of contests and Olympiads are organized in many " +
        "countries in order to join the people and motivate their interests into sport. And it makes " +
        "people be friendly and they make a lot of friends from all over the world. Many people do " +
        "sports on their personal initiative. They go in for skiing, football, body-building, etc.\n\n" +
        "Sport is paid much attention to in our educational establishments. Gymnastics is a part of " +
        "children's daily activities in the kindergartens. Physical training is a compulsory subject at " +
        "schools and colleges.\n\n" +
        "Most of the people including kids and teenagers understand that sport is the main activity in " +
        "our life and helps us to lead a healthy life. Practically all kinds of sports are popular in our " +
        "country, but football, gymnastics and tennis enjoy the greatest popularity. As for me, I go in " +
        "for table tennis. It needs mobility, liveliness and much energy. It keeps a person in a good " +
        "form. I have been playing tennis for five years, but the more I play, the more I like it. I get a " +
        "real joy taking part in competitions or simply playing with my friends. Sometimes, I go to " +
        "tennis courts.",
    },
    text: "Physical education is ___ at schools and colleges.",
    options: [
      "free to schedule",
      "compulsory subject",
      "main aspect",
      "additional lesson",
    ],
    correct: [1],
    explanation:
      "Во втором абзаце сказано прямо: Physical training is a compulsory subject at schools and colleges. " +
      "Physical education и physical training это одно и то же понятие, поэтому подставляется compulsory subject, то есть обязательный предмет. " +
      "Вариант additional lesson означает дополнительное занятие и прямо противоречит слову compulsory; " +
      "free to schedule предполагает свободный выбор расписания, а main aspect это оценочная формулировка, которой в тексте нет: главным родом занятий там названо не физвоспитание, а спорт вообще.",
  },
  {
    id: "mk-en-b05-65",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Sport in Our Life",
      value:
        "All people all over the world are keen on sports and games. Sports and exercises make " +
        "people healthy, keep them fit, more organized and better disciplined. It unites people of " +
        "different classes and nationalities. All kinds of contests and Olympiads are organized in many " +
        "countries in order to join the people and motivate their interests into sport. And it makes " +
        "people be friendly and they make a lot of friends from all over the world. Many people do " +
        "sports on their personal initiative. They go in for skiing, football, body-building, etc.\n\n" +
        "Sport is paid much attention to in our educational establishments. Gymnastics is a part of " +
        "children's daily activities in the kindergartens. Physical training is a compulsory subject at " +
        "schools and colleges.\n\n" +
        "Most of the people including kids and teenagers understand that sport is the main activity in " +
        "our life and helps us to lead a healthy life. Practically all kinds of sports are popular in our " +
        "country, but football, gymnastics and tennis enjoy the greatest popularity. As for me, I go in " +
        "for table tennis. It needs mobility, liveliness and much energy. It keeps a person in a good " +
        "form. I have been playing tennis for five years, but the more I play, the more I like it. I get a " +
        "real joy taking part in competitions or simply playing with my friends. Sometimes, I go to " +
        "tennis courts.",
    },
    text: "Football, gymnastics and tennis are ___.",
    options: [
      "uncommon",
      "the rarest",
      "the most boring",
      "the most popular",
    ],
    correct: [3],
    explanation:
      "В третьем абзаце говорится, что football, gymnastics and tennis enjoy the greatest popularity, а это то же самое, что the most popular. " +
      "Задание построено на синонимии: оборот с существительным popularity заменён прилагательным в превосходной степени. " +
      "Варианты uncommon и the rarest означают редкость и прямо противоречат тексту; " +
      "оценка the most boring в тексте отсутствует вообще, автор нигде не называет какие-либо виды спорта скучными.",
  },
  {
    id: "mk-en-b05-66",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Sport in Our Life",
      value:
        "All people all over the world are keen on sports and games. Sports and exercises make " +
        "people healthy, keep them fit, more organized and better disciplined. It unites people of " +
        "different classes and nationalities. All kinds of contests and Olympiads are organized in many " +
        "countries in order to join the people and motivate their interests into sport. And it makes " +
        "people be friendly and they make a lot of friends from all over the world. Many people do " +
        "sports on their personal initiative. They go in for skiing, football, body-building, etc.\n\n" +
        "Sport is paid much attention to in our educational establishments. Gymnastics is a part of " +
        "children's daily activities in the kindergartens. Physical training is a compulsory subject at " +
        "schools and colleges.\n\n" +
        "Most of the people including kids and teenagers understand that sport is the main activity in " +
        "our life and helps us to lead a healthy life. Practically all kinds of sports are popular in our " +
        "country, but football, gymnastics and tennis enjoy the greatest popularity. As for me, I go in " +
        "for table tennis. It needs mobility, liveliness and much energy. It keeps a person in a good " +
        "form. I have been playing tennis for five years, but the more I play, the more I like it. I get a " +
        "real joy taking part in competitions or simply playing with my friends. Sometimes, I go to " +
        "tennis courts.",
    },
    text: "Sport makes people well organized and ___.",
    options: [
      "quite irritated",
      "better memorized",
      "very disciplined",
      "a bit emotional",
    ],
    correct: [2],
    explanation:
      "Во втором предложении первого абзаца перечислено, что даёт спорт: healthy, fit, more organized and better disciplined. " +
      "Из предложенных вариантов текстовому better disciplined соответствует только very disciplined. " +
      "Вариант quite irritated означает раздражённость и противоречит положительной оценке спорта во всём тексте; " +
      "better memorized построено неверно и по смыслу и грамматически - о памяти в тексте не сказано ни слова, а a bit emotional в перечислении тоже не встречается.",
  },

  // ===== Чтение, вариант 9, Text 17 =====
  {
    id: "mk-en-b05-67",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "Chicago",
      value:
        "Keith recently came back from a trip to Chicago, Illinois. This midwestern metropolis is " +
        "found along the shore of Lake Michigan. During his visit, Keith spent a lot of time exploring " +
        "the city to visit important landmarks and monuments.\n\n" +
        "Keith loves baseball, and he made sure to take a visit to Wrigley Field. Not only did he take a " +
        "tour of this spectacular stadium, but he also got to watch a Chicago Cubs game. In the " +
        "stadium, Keith and the other fans cheered for the Cubs. Keith was happy that the Cubs won " +
        "with a score of 5-4.\n\n" +
        "Chicago has many historic places to visit. Keith found the Chicago Water Tower impressive as " +
        "it is one of the few remaining landmarks to have survived the Great Chicago Fire of 1871. " +
        "Keith also took a walk through Jackson Park, a great outdoor space that hosted the World's " +
        "Fair of 1892. The park is great for a leisurely stroll, and it still features some of the original " +
        "architecture and replicas of monuments that were featured in the World's Fair.\n\n" +
        "During the last part of his visit, Keith managed to climb the stairs inside of the Willis Tower, " +
        "a 110-story skyscraper. Despite the challenge of climbing the many flights of stairs, Keith felt " +
        "that reaching the top was worth the effort. From the rooftop, Keith received a gorgeous view " +
        "of the city's skyline with Lake Michigan in the background.",
    },
    text: "Where is Chicago in the United States?",
    options: [
      "The east coast",
      "The midwest",
      "The south",
      "The west coast",
    ],
    correct: [1],
    explanation:
      "В первом абзаце город назван midwestern metropolis, то есть городом Среднего Запада, поэтому верен вариант the midwest. " +
      "Прилагательное midwestern прямо содержит нужное слово, и достаточно узнать его в тексте. " +
      "Побережья на востоке и западе не подходят, потому что Чикаго стоит не на океане, а на берегу озера Мичиган, о чём тоже сказано в первом абзаце; " +
      "юг в тексте не упоминается ни разу и никак не соотносится со словом midwestern.",
  },
  {
    id: "mk-en-b05-68",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "Chicago",
      value:
        "Keith recently came back from a trip to Chicago, Illinois. This midwestern metropolis is " +
        "found along the shore of Lake Michigan. During his visit, Keith spent a lot of time exploring " +
        "the city to visit important landmarks and monuments.\n\n" +
        "Keith loves baseball, and he made sure to take a visit to Wrigley Field. Not only did he take a " +
        "tour of this spectacular stadium, but he also got to watch a Chicago Cubs game. In the " +
        "stadium, Keith and the other fans cheered for the Cubs. Keith was happy that the Cubs won " +
        "with a score of 5-4.\n\n" +
        "Chicago has many historic places to visit. Keith found the Chicago Water Tower impressive as " +
        "it is one of the few remaining landmarks to have survived the Great Chicago Fire of 1871. " +
        "Keith also took a walk through Jackson Park, a great outdoor space that hosted the World's " +
        "Fair of 1892. The park is great for a leisurely stroll, and it still features some of the original " +
        "architecture and replicas of monuments that were featured in the World's Fair.\n\n" +
        "During the last part of his visit, Keith managed to climb the stairs inside of the Willis Tower, " +
        "a 110-story skyscraper. Despite the challenge of climbing the many flights of stairs, Keith felt " +
        "that reaching the top was worth the effort. From the rooftop, Keith received a gorgeous view " +
        "of the city's skyline with Lake Michigan in the background.",
    },
    text: "Why was Keith impressed by the Chicago Water Tower?",
    options: [
      "It is the tallest building in the city.",
      "It supplies water to the entire population.",
      "It is the only remaining monument of the World's Fair.",
      "It is one of few landmarks that survived a historical fire.",
    ],
    correct: [3],
    explanation:
      "В третьем абзаце названа причина: башня one of the few remaining landmarks to have survived the Great Chicago Fire of 1871, то есть один из немногих уцелевших после пожара памятников. " +
      "Последний вариант передаёт это той же мыслью, только другими словами. " +
      "Третий вариант подменяет событие: с Всемирной выставкой связан Джексон-парк, а не водонапорная башня, и в тексте эти два объекта разведены; " +
      "самым высоким зданием города назван небоскрёб Willis Tower, а про водоснабжение населения в тексте не сказано ничего.",
  },
  {
    id: "mk-en-b05-69",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "Chicago",
      value:
        "Keith recently came back from a trip to Chicago, Illinois. This midwestern metropolis is " +
        "found along the shore of Lake Michigan. During his visit, Keith spent a lot of time exploring " +
        "the city to visit important landmarks and monuments.\n\n" +
        "Keith loves baseball, and he made sure to take a visit to Wrigley Field. Not only did he take a " +
        "tour of this spectacular stadium, but he also got to watch a Chicago Cubs game. In the " +
        "stadium, Keith and the other fans cheered for the Cubs. Keith was happy that the Cubs won " +
        "with a score of 5-4.\n\n" +
        "Chicago has many historic places to visit. Keith found the Chicago Water Tower impressive as " +
        "it is one of the few remaining landmarks to have survived the Great Chicago Fire of 1871. " +
        "Keith also took a walk through Jackson Park, a great outdoor space that hosted the World's " +
        "Fair of 1892. The park is great for a leisurely stroll, and it still features some of the original " +
        "architecture and replicas of monuments that were featured in the World's Fair.\n\n" +
        "During the last part of his visit, Keith managed to climb the stairs inside of the Willis Tower, " +
        "a 110-story skyscraper. Despite the challenge of climbing the many flights of stairs, Keith felt " +
        "that reaching the top was worth the effort. From the rooftop, Keith received a gorgeous view " +
        "of the city's skyline with Lake Michigan in the background.",
    },
    text: "How did Keith get to the rooftop of the Willis Tower?",
    options: [
      "He took an outdoor elevator.",
      "He used an indoor elevator.",
      "He climbed the building's exterior.",
      "He walked up the interior stairs.",
    ],
    correct: [3],
    explanation:
      "В последнем абзаце сказано: Keith managed to climb the stairs inside of the Willis Tower, то есть он поднялся пешком по внутренней лестнице. " +
      "Это подтверждает и следующая фраза про the challenge of climbing the many flights of stairs. " +
      "Оба варианта с лифтом противоречат тексту, ведь никакого elevator там не упоминается, а весь смысл эпизода в том, что подъём дался трудом; " +
      "вариант о подъёме по внешней стене здания искажает слово inside, которое прямо указывает, что лестница была внутри.",
  },

  // ===== Чтение, вариант 9, Text 18 =====
  {
    id: "mk-en-b05-70",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Yellowstone National Park",
      value:
        "Yellowstone National Park, located in Idaho, Montana, and Wyoming, was established as the " +
        "first national park in the United States. The park is a popular destination for visitors who " +
        "enjoy ecological tourism as it offers forests, mountains, and abundant ecosystems to explore. " +
        "Some of Yellowstone's most well-known landmarks are its geothermal hot springs and " +
        "geysers, the most famous of which is named Old Faithful.\n\n" +
        "Last fall, Lisa and her friends decided to take a camping trip to Yellowstone National Park. " +
        "They arranged to stay at one of the park's many convenient campsites. For their camping trip, " +
        "they brought their backpacks, sleeping bags, and a cooler of food and drinks. They pitched " +
        "their tents immediately upon arriving to their campsite. During their trip, Lisa and her friends " +
        "hiked the many trails of the park, exploring its natural surroundings. In the forest, they saw a " +
        "lot of local wildlife. Lisa was surprised to see a family of grizzly bears, some gray wolves, " +
        "and even bald eagles flying overhead. Outside of the woods, they admired the beauty of some " +
        "of Yellowstone's natural cascades.\n\n" +
        "Since Yellowstone contains many hot springs and the world's largest area of active geysers, " +
        "Lisa and her friends visited many different geyser sites. They even spent an afternoon " +
        "swimming in Yellowstone's Boiling River. Of all of the sites, Lisa and her friends agreed that " +
        "Old Faithful was the most impressive. Lisa and her friends waited patiently for the geyser to " +
        "erupt. After about 40 minutes, a stream of boiling water over 100 feet tall sprayed from the " +
        "ground and up into the air. Fortunately, no one got wet!",
    },
    text: "Yellowstone is an important national park in the United States because:",
    options: [
      "It is the country's first national park.",
      "It is the largest U.S. national park.",
      "It is the most ecologically diverse natural park.",
      "It is the most visited U.S. national park.",
    ],
    correct: [0],
    explanation:
      "В первом предложении сказано, что парк was established as the first national park in the United States, то есть он был первым национальным парком страны. " +
      "Именно это и делает его особенным, поэтому верен первый вариант. " +
      "Про размер и посещаемость в тексте вообще нет данных, поэтому варианты про самый большой и самый посещаемый парк ничем не подкреплены; " +
      "экологическое разнообразие упоминается, но без превосходной степени: сказано лишь, что парк предлагает abundant ecosystems, а не что он самый разнообразный в стране.",
  },
  {
    id: "mk-en-b05-71",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "Yellowstone National Park",
      value:
        "Yellowstone National Park, located in Idaho, Montana, and Wyoming, was established as the " +
        "first national park in the United States. The park is a popular destination for visitors who " +
        "enjoy ecological tourism as it offers forests, mountains, and abundant ecosystems to explore. " +
        "Some of Yellowstone's most well-known landmarks are its geothermal hot springs and " +
        "geysers, the most famous of which is named Old Faithful.\n\n" +
        "Last fall, Lisa and her friends decided to take a camping trip to Yellowstone National Park. " +
        "They arranged to stay at one of the park's many convenient campsites. For their camping trip, " +
        "they brought their backpacks, sleeping bags, and a cooler of food and drinks. They pitched " +
        "their tents immediately upon arriving to their campsite. During their trip, Lisa and her friends " +
        "hiked the many trails of the park, exploring its natural surroundings. In the forest, they saw a " +
        "lot of local wildlife. Lisa was surprised to see a family of grizzly bears, some gray wolves, " +
        "and even bald eagles flying overhead. Outside of the woods, they admired the beauty of some " +
        "of Yellowstone's natural cascades.\n\n" +
        "Since Yellowstone contains many hot springs and the world's largest area of active geysers, " +
        "Lisa and her friends visited many different geyser sites. They even spent an afternoon " +
        "swimming in Yellowstone's Boiling River. Of all of the sites, Lisa and her friends agreed that " +
        "Old Faithful was the most impressive. Lisa and her friends waited patiently for the geyser to " +
        "erupt. After about 40 minutes, a stream of boiling water over 100 feet tall sprayed from the " +
        "ground and up into the air. Fortunately, no one got wet!",
    },
    text: "All of the following are animals that Lisa saw during her trip except:",
    options: [
      "Grizzly bears",
      "Wild horses",
      "Gray wolves",
      "Bald eagles",
    ],
    correct: [1],
    explanation:
      "Во втором абзаце перечислены увиденные животные: a family of grizzly bears, some gray wolves, and even bald eagles. " +
      "Диких лошадей в этом списке нет, поэтому именно wild horses и есть исключение, которое требуется найти. " +
      "Вопросы со словом except читаются наоборот: нужен вариант, которого в тексте нет, а не тот, который там есть; " +
      "медведи гризли, серые волки и белоголовые орланы названы прямо, и любой из них был бы ошибкой.",
  },
  {
    id: "mk-en-b05-72",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "Yellowstone National Park",
      value:
        "Yellowstone National Park, located in Idaho, Montana, and Wyoming, was established as the " +
        "first national park in the United States. The park is a popular destination for visitors who " +
        "enjoy ecological tourism as it offers forests, mountains, and abundant ecosystems to explore. " +
        "Some of Yellowstone's most well-known landmarks are its geothermal hot springs and " +
        "geysers, the most famous of which is named Old Faithful.\n\n" +
        "Last fall, Lisa and her friends decided to take a camping trip to Yellowstone National Park. " +
        "They arranged to stay at one of the park's many convenient campsites. For their camping trip, " +
        "they brought their backpacks, sleeping bags, and a cooler of food and drinks. They pitched " +
        "their tents immediately upon arriving to their campsite. During their trip, Lisa and her friends " +
        "hiked the many trails of the park, exploring its natural surroundings. In the forest, they saw a " +
        "lot of local wildlife. Lisa was surprised to see a family of grizzly bears, some gray wolves, " +
        "and even bald eagles flying overhead. Outside of the woods, they admired the beauty of some " +
        "of Yellowstone's natural cascades.\n\n" +
        "Since Yellowstone contains many hot springs and the world's largest area of active geysers, " +
        "Lisa and her friends visited many different geyser sites. They even spent an afternoon " +
        "swimming in Yellowstone's Boiling River. Of all of the sites, Lisa and her friends agreed that " +
        "Old Faithful was the most impressive. Lisa and her friends waited patiently for the geyser to " +
        "erupt. After about 40 minutes, a stream of boiling water over 100 feet tall sprayed from the " +
        "ground and up into the air. Fortunately, no one got wet!",
    },
    text: "Why did Lisa and her friends wait patiently when visiting Old Faithful?",
    options: [
      "They arrived an hour before the geyser opened to the public.",
      "They were still wet from swimming in the Boiling River.",
      "There was a long line to see the geyser.",
      "The geyser took about 40 minutes to erupt.",
    ],
    correct: [3],
    explanation:
      "В последнем абзаце сказано: they waited patiently for the geyser to erupt, а затем After about 40 minutes произошло извержение. " +
      "Значит ждать пришлось именно потому, что гейзер извергается примерно через сорок минут. " +
      "Про очередь и про часы работы гейзера в тексте нет ни слова, эти варианты просто домысливают ситуацию; " +
      "последняя фраза текста Fortunately, no one got wet прямо опровергает вариант о том, что они были мокрыми, к тому же купание описано как отдельный эпизод другого дня.",
  },

  // ===== Чтение, вариант 10, Text 19 =====
  {
    id: "mk-en-b05-73",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "Leonardo DiCaprio",
      value:
        "Leonardo DiCaprio is a movie heart throb and award-winning Hollywood actor. He shot to " +
        "fame for his role in Titanic in 1997. He has also starred in many other successful movies. " +
        "DiCaprio is known for his environmentalist activities. He flies on commercial flights instead " +
        "of private jets and has an eco-friendly house. He has inspired other celebrities to take up " +
        "environmental causes.\n\n" +
        "DiCaprio is an only child and was born in Los Angeles in 1974. He was named after Leonardo " +
        "da Vinci because his pregnant mother was looking at a da Vinci painting in Italy when her " +
        "baby first kicked. Leo's actor stepbrother inspired DiCaprio to take up acting. He began " +
        "looking for an agent when he was twelve but was unsuccessful.\n\n" +
        "DiCaprio started his career making TV commercials. His break came in 1990 when he " +
        "appeared in several shows. DiCaprio's big breakthrough came in 1993 when he starred " +
        "opposite Robert de Niro in The Boy's Life. That same year he starred alongside Johnny Depp " +
        "in What's Eating Gilbert Grape. He was 19 and his performance earned him an Academy " +
        "Award nomination.\n\n" +
        "DiCaprio's career took off and he became a Hollywood star. His status was elevated to " +
        "superstar after he acted in Titanic, which won 11 Oscars. He was the most searched for " +
        "personality on the Internet and his popularity was dubbed Leo-mania. He said later he would " +
        "never reach that state of popularity again. Today, DiCaprio prefers to think of himself as an " +
        "indie actor.",
    },
    text: "In 1997 the film that brought him fame was ___.",
    options: [
      "Titanic",
      "The Boy's Life",
      "Robert de Niro",
      "What's Eating Gilbert Grape",
    ],
    correct: [0],
    explanation:
      "В первом абзаце сказано: He shot to fame for his role in Titanic in 1997, то есть слава пришла именно после Титаника. " +
      "Год 1997 в тексте связан только с этим фильмом, что и решает задание. " +
      "Фильмы The Boy's Life и What's Eating Gilbert Grape вышли в 1993 году и принесли не всемирную славу, а первую номинацию на Оскар; " +
      "вариант Robert de Niro вообще не название фильма, а имя актёра, вместе с которым Ди Каприо снимался, и такой ответ выдаёт невнимательное чтение.",
  },
  {
    id: "mk-en-b05-74",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Leonardo DiCaprio",
      value:
        "Leonardo DiCaprio is a movie heart throb and award-winning Hollywood actor. He shot to " +
        "fame for his role in Titanic in 1997. He has also starred in many other successful movies. " +
        "DiCaprio is known for his environmentalist activities. He flies on commercial flights instead " +
        "of private jets and has an eco-friendly house. He has inspired other celebrities to take up " +
        "environmental causes.\n\n" +
        "DiCaprio is an only child and was born in Los Angeles in 1974. He was named after Leonardo " +
        "da Vinci because his pregnant mother was looking at a da Vinci painting in Italy when her " +
        "baby first kicked. Leo's actor stepbrother inspired DiCaprio to take up acting. He began " +
        "looking for an agent when he was twelve but was unsuccessful.\n\n" +
        "DiCaprio started his career making TV commercials. His break came in 1990 when he " +
        "appeared in several shows. DiCaprio's big breakthrough came in 1993 when he starred " +
        "opposite Robert de Niro in The Boy's Life. That same year he starred alongside Johnny Depp " +
        "in What's Eating Gilbert Grape. He was 19 and his performance earned him an Academy " +
        "Award nomination.\n\n" +
        "DiCaprio's career took off and he became a Hollywood star. His status was elevated to " +
        "superstar after he acted in Titanic, which won 11 Oscars. He was the most searched for " +
        "personality on the Internet and his popularity was dubbed Leo-mania. He said later he would " +
        "never reach that state of popularity again. Today, DiCaprio prefers to think of himself as an " +
        "indie actor.",
    },
    text: "He got an Academy Award nomination when he was ___.",
    options: ["nineteen", "twenty", "ninety", "twelve"],
    correct: [0],
    explanation:
      "В третьем абзаце сказано: He was 19 and his performance earned him an Academy Award nomination, значит номинацию он получил в девятнадцать лет. " +
      "Числительное 19 записывается словом nineteen. " +
      "Вариант twelve относится к другому эпизоду: в двенадцать лет он безуспешно искал агента, и эта деталь стоит в предыдущем абзаце; " +
      "ninety это девяносто, форма похожа на nineteen только внешне, а число twenty в тексте не встречается вовсе.",
  },
  {
    id: "mk-en-b05-75",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Leonardo DiCaprio",
      value:
        "Leonardo DiCaprio is a movie heart throb and award-winning Hollywood actor. He shot to " +
        "fame for his role in Titanic in 1997. He has also starred in many other successful movies. " +
        "DiCaprio is known for his environmentalist activities. He flies on commercial flights instead " +
        "of private jets and has an eco-friendly house. He has inspired other celebrities to take up " +
        "environmental causes.\n\n" +
        "DiCaprio is an only child and was born in Los Angeles in 1974. He was named after Leonardo " +
        "da Vinci because his pregnant mother was looking at a da Vinci painting in Italy when her " +
        "baby first kicked. Leo's actor stepbrother inspired DiCaprio to take up acting. He began " +
        "looking for an agent when he was twelve but was unsuccessful.\n\n" +
        "DiCaprio started his career making TV commercials. His break came in 1990 when he " +
        "appeared in several shows. DiCaprio's big breakthrough came in 1993 when he starred " +
        "opposite Robert de Niro in The Boy's Life. That same year he starred alongside Johnny Depp " +
        "in What's Eating Gilbert Grape. He was 19 and his performance earned him an Academy " +
        "Award nomination.\n\n" +
        "DiCaprio's career took off and he became a Hollywood star. His status was elevated to " +
        "superstar after he acted in Titanic, which won 11 Oscars. He was the most searched for " +
        "personality on the Internet and his popularity was dubbed Leo-mania. He said later he would " +
        "never reach that state of popularity again. Today, DiCaprio prefers to think of himself as an " +
        "indie actor.",
    },
    text: "His name was given by ___ in Italy.",
    options: ["Robert de Niro", "his father", "his mother", "Da Vinci"],
    correct: [2],
    explanation:
      "Во втором абзаце объясняется происхождение имени: his pregnant mother was looking at a da Vinci painting in Italy when her baby first kicked. " +
      "Именно мать была в Италии и смотрела на картину, поэтому имя связано с ней. " +
      "Да Винчи это художник, в честь которого назвали мальчика, но сам он никого назвать не мог, ведь жил за столетия до этого; " +
      "отец в тексте не упоминается вообще, а Роберт де Ниро появляется только как партнёр по фильму 1993 года и к имени актёра отношения не имеет.",
  },

  // ===== Чтение, вариант 10, Text 20 =====
  {
    id: "mk-en-b05-76",
    topic: "reading",
    difficulty: "A",
    passage: {
      title: "Canada",
      value:
        "Canada is the second biggest country in the world, second only to Russia. In fact, Canada is " +
        "bigger than the entire European Union put together!\n\n" +
        "There are many interesting facts about Canada, some may surprise you! The country is called " +
        "The Great White North. Canada has ten provinces and three territories. It also has six time " +
        "zones!\n\n" +
        "Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 " +
        "million people. This is small compared to other countries. It is also small considering its " +
        "large size!\n\n" +
        "Over 80% of the population live near the United States border. The Canadian and US border " +
        "is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% " +
        "of the world's forests! Canada also has more lake areas than any other country in the world.\n\n" +
        "Canada is a very young country. Canada became a country only in 1867. The country " +
        "celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the " +
        "country celebrate by wearing red and white. Red and white are the national colours shown on " +
        "its flag.\n\n" +
        "Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, " +
        "people had been living in Canada long before that.\n\n" +
        "Canada's national animal is a beaver! And it has two national languages, both English and " +
        "French. But only two provinces are officially French speaking, Quebec and New Brunswick.\n\n" +
        "Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the " +
        "Queen of England as their Queen too!",
    },
    text: "Canada is also called The Great White ___.",
    options: ["Beaver", "North", "Forest", "Bear"],
    correct: [1],
    explanation:
      "Во втором абзаце дословно сказано: The country is called The Great White North, поэтому пропуск заполняется словом North. " +
      "Прозвище связано с северным положением страны и её снегами, и текст не предлагает никаких других названий. " +
      "Бобр в тексте есть, но как национальное животное, а не как часть прозвища; " +
      "леса упоминаются в статистике про 30% территории, а слово bear в тексте вообще не встречается, оно подставлено по ассоциации с северной природой.",
  },
  {
    id: "mk-en-b05-77",
    topic: "reading",
    difficulty: "C",
    passage: {
      title: "Canada",
      value:
        "Canada is the second biggest country in the world, second only to Russia. In fact, Canada is " +
        "bigger than the entire European Union put together!\n\n" +
        "There are many interesting facts about Canada, some may surprise you! The country is called " +
        "The Great White North. Canada has ten provinces and three territories. It also has six time " +
        "zones!\n\n" +
        "Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 " +
        "million people. This is small compared to other countries. It is also small considering its " +
        "large size!\n\n" +
        "Over 80% of the population live near the United States border. The Canadian and US border " +
        "is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% " +
        "of the world's forests! Canada also has more lake areas than any other country in the world.\n\n" +
        "Canada is a very young country. Canada became a country only in 1867. The country " +
        "celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the " +
        "country celebrate by wearing red and white. Red and white are the national colours shown on " +
        "its flag.\n\n" +
        "Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, " +
        "people had been living in Canada long before that.\n\n" +
        "Canada's national animal is a beaver! And it has two national languages, both English and " +
        "French. But only two provinces are officially French speaking, Quebec and New Brunswick.\n\n" +
        "Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the " +
        "Queen of England as their Queen too!",
    },
    text: "The number that was not mentioned in the text is ___.",
    options: [
      "ten provinces",
      "thirty-two million people",
      "six time zones",
      "eighty percent",
    ],
    correct: [1],
    explanation:
      "Текст называет население Канады в 36 миллионов человек, а не 32 миллиона, поэтому именно thirty-two million people в тексте не встречается. " +
      "Задание требует сверить каждое число с оригиналом, а числа подобраны близкими друг к другу, чтобы поймать на приблизительном чтении. " +
      "Десять провинций и шесть часовых поясов названы во втором абзаце; " +
      "восемьдесят процентов упомянуты в четвёртом абзаце в фразе о том, что over 80% of the population live near the United States border, так что все три этих варианта в тексте есть.",
  },
  {
    id: "mk-en-b05-78",
    topic: "reading",
    difficulty: "B",
    passage: {
      title: "Canada",
      value:
        "Canada is the second biggest country in the world, second only to Russia. In fact, Canada is " +
        "bigger than the entire European Union put together!\n\n" +
        "There are many interesting facts about Canada, some may surprise you! The country is called " +
        "The Great White North. Canada has ten provinces and three territories. It also has six time " +
        "zones!\n\n" +
        "Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 " +
        "million people. This is small compared to other countries. It is also small considering its " +
        "large size!\n\n" +
        "Over 80% of the population live near the United States border. The Canadian and US border " +
        "is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% " +
        "of the world's forests! Canada also has more lake areas than any other country in the world.\n\n" +
        "Canada is a very young country. Canada became a country only in 1867. The country " +
        "celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the " +
        "country celebrate by wearing red and white. Red and white are the national colours shown on " +
        "its flag.\n\n" +
        "Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, " +
        "people had been living in Canada long before that.\n\n" +
        "Canada's national animal is a beaver! And it has two national languages, both English and " +
        "French. But only two provinces are officially French speaking, Quebec and New Brunswick.\n\n" +
        "Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the " +
        "Queen of England as their Queen too!",
    },
    text: "Quebec and New Brunswick are ___.",
    options: [
      "two national languages",
      "bigger than the entire European Union",
      "tied to the country of England",
      "French speaking provinces",
    ],
    correct: [3],
    explanation:
      "В предпоследнем абзаце сказано: only two provinces are officially French speaking, Quebec and New Brunswick, то есть это две франкоязычные провинции. " +
      "Ответ прямо назван в том же предложении, что и сами топонимы. " +
      "Вариант про два государственных языка относится к соседней фразе о English and French, но языки и провинции это разные понятия, здесь их подменяют; " +
      "сравнение с Евросоюзом в первом абзаце касается всей Канады, а не отдельных провинций, а связь с Англией в последнем абзаце тоже приписывается стране целиком.",
  },
];
