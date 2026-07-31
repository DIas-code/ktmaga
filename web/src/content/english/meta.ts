import type { Subject } from "@/lib/types";

/**
 * Данные взяты дословно из «Спецификации тестов по английскому языку для проведения
 * вступительного экзамена в магистратуру вузов и научных организаций Республики Казахстан».
 *
 * Тест устроен иначе, чем профильные: 100 заданий, три отдельно хронометрируемых блока,
 * четыре варианта ответа вместо пяти, распределение по уровням 34/33/33, а не 30/40/30.
 * В блоках аудирования и чтения буквы A/B/C означают уровень понимания
 * (фрагментарное / детальное / глобальное), а не трудность.
 */
export const englishSubject: Subject = {
  slug: "english",
  title: "Английский язык",
  shortTitle: "Английский",
  tagline: "100 заданий · 125 минут · один ответ из четырёх",
  accent: "emerald",
  icon: "◑",
  ready: true,
  spec: {
    totalQuestions: 100,
    durationMinutes: 125,
    answerMode: "single",
    optionCounts: [4],
    difficultyMix: { A: 34, B: 33, C: 33 },
    maxScorePerQuestion: 1,
    scoringRule:
      "Закрытая форма: один правильный ответ из четырёх предложенных. Правильный ответ — " +
      "1 балл, иначе 0 баллов. Итоговый уровень владения языком (A1…C) определяется " +
      "по доле верных ответов на каждом языковом уровне отдельно, а не по общей сумме.",
    levelMeaning:
      "В лексико-грамматическом блоке A/B/C — уровень сложности; в аудировании и чтении — " +
      "уровень понимания: A — фрагментарное, B — детальное, C — глобальное",
    blocks: [
      { slug: "listening", title: "Блок I — Аудирование", questions: 32, durationMinutes: 45 },
      { slug: "grammar", title: "Блок II — Лексико-грамматический", questions: 32, durationMinutes: 30 },
      { slug: "reading", title: "Блок III — Чтение", questions: 36, durationMinutes: 50 },
    ],
  },
  topics: [
    /* ------------------------- Блок I — Аудирование ------------------------- */
    {
      slug: "listening",
      number: 1,
      title: "Аудирование",
      spec:
        "Прослушивание 4 текстов, по 8 заданий к каждому. Каждый аудиоматериал звучит " +
        "дважды с паузой в 1 минуту. Уровни текстов: A1 (120 лексических единиц), A1–A2 (150), " +
        "A2–B1 (180), B1–B2 (200). Виды текстов: монолог, диалог, интервью. Уровни понимания: " +
        "A — фрагментарное (11 заданий), B — детальное (10), C — глобальное (11). " +
        "Темы: человек, общество и духовные ценности; образование и наука; Казахстан и " +
        "англоязычные страны.",
      plan: { A: 11, B: 10, C: 11 },
      block: "listening",
      noBank:
        "Задания этого блока строятся на прослушивании аудиозаписей, которых у проекта нет. " +
        "Тренировать аудирование по тексту на экране бессмысленно — это проверяло бы чтение.",
    },

    /* ------------------ Блок II — Лексико-грамматический ------------------ */
    {
      slug: "noun",
      number: 2,
      title: "Noun — существительное",
      spec:
        "Singular and plural (1 задание, A1, уровень A). Countable and uncountable (1, A1, A). " +
        "Possessive case, functions in the sentence (1, A1, A).",
      plan: { A: 3 },
      block: "grammar",
    },
    {
      slug: "article",
      number: 3,
      title: "Article — артикль",
      spec:
        "Definite. Indefinite. 0-article. Articles of geographical names. Article with proper " +
        "names. Articles of personal names (2 задания, B1, уровень A).",
      plan: { A: 2 },
      block: "grammar",
    },
    {
      slug: "adjective",
      number: 4,
      title: "Adjective — прилагательное",
      spec:
        "Degrees of comparison of adjectives (2 задания, A1, уровень C). " +
        "Adjectives with -ing and -ed (1, B1, C).",
      plan: { C: 3 },
      block: "grammar",
    },
    {
      slug: "pronoun",
      number: 5,
      title: "Pronoun — местоимение",
      spec:
        "Personal, possessive and reflexive (1 задание, A1, уровень B). Demonstrative (1, A1, A). " +
        "Relative (1, A1, B). Interrogative and negative (1, A2, C).",
      plan: { A: 1, B: 2, C: 1 },
      block: "grammar",
    },
    {
      slug: "numeral",
      number: 6,
      title: "Numeral — числительное",
      spec:
        "Cardinal numbers (1 задание, A1, уровень A). Dates and ordinal numbers (1, A1, B). " +
        "Fractional numerals (1, A1, B).",
      plan: { A: 1, B: 2 },
      block: "grammar",
    },
    {
      slug: "verb",
      number: 7,
      title: "Verb — глагол и времена",
      spec:
        "Present Tense: Simple, Continuous, Perfect, Perfect Continuous (1 задание, A2, уровень B). " +
        "Past Tense (1, A1, C). Present Perfect vs. Past Simple (1, B2, A). " +
        "Future Tense, включая Future in the Past (1, A2, A). Active and Passive voice (1, A1, C).",
      plan: { A: 2, B: 1, C: 2 },
      block: "grammar",
    },
    {
      slug: "non-finite",
      number: 8,
      title: "Non-finite verb forms — неличные формы и модальные глаголы",
      spec:
        "Modal verbs (2 задания, B1, уровень B). Infinitive (1, B1, C). Gerund (1, B2, A). " +
        "Participle (1, A2, C).",
      plan: { A: 1, B: 2, C: 2 },
      block: "grammar",
    },
    {
      slug: "adverb",
      number: 9,
      title: "Adverb — наречие",
      spec:
        "Adverb formation, functions of adverb (1 задание, B2, уровень C). " +
        "Place of adverb in the sentence (1, A1, B).",
      plan: { B: 1, C: 1 },
      block: "grammar",
    },
    {
      slug: "preposition",
      number: 10,
      title: "Preposition — предлог",
      spec:
        "The use of prepositions in English (1 задание, A2, уровень A). " +
        "Prepositions of time and place (1, A2, B).",
      plan: { A: 1, B: 1 },
      block: "grammar",
    },
    {
      slug: "mood",
      number: 11,
      title: "Mood — наклонение",
      spec: "Indicative. Imperative. Subjunctive (2 задания, B2, уровень B).",
      plan: { B: 2 },
      block: "grammar",
    },
    {
      slug: "lexicology",
      number: 12,
      title: "Lexicology — лексикология",
      spec: "Synonyms, antonyms (1 задание, A1, уровень C).",
      plan: { C: 1 },
      block: "grammar",
    },

    /* --------------------------- Блок III — Чтение --------------------------- */
    {
      slug: "reading",
      number: 13,
      title: "Чтение",
      spec:
        "3 текста, по 12 заданий к каждому. Уровни текстов: A1 (200–250 лексических единиц), " +
        "A1–A2 (250–300), B1–B2 (300–350). Уровни понимания: A — фрагментарное (12 заданий), " +
        "B — детальное (12), C — глобальное (12). Темы те же, что в аудировании: человек, " +
        "общество и духовные ценности; образование и наука; Казахстан и англоязычные страны.",
      plan: { A: 12, B: 12, C: 12 },
      block: "reading",
    },
  ],
  literature: [
    "Mann M., Taylore-Knowles S. Destination B1 & B2. — Macmillan, 2008",
    "Mike Boyle, Lindsay Warwick. Skillful Reading and Writing Student's Book 4. — 2014",
    "Martin Hewings. Advanced Grammar in Use with Answers. 3rd ed. — Cambridge University Press, 2013",
    "FCE Test Builder. — Macmillan, 2013",
    "Norris R., French A. Ready for FCE. Course book / Workbook. — 2008",
    "FCE Practice Tests (формат 2015 года)",
    "Каушанская В.Л. Грамматика английского языка. — М.: Айрис-Пресс, 2008",
    "Malcolm Mann, Steve Taylore-Knowles. Destination C1/C2, Grammar & Vocabulary. — Macmillan, 2008",
    "Sam McCarter. Ready for IELTS — курс подготовки к академическому модулю",
    "Michael Vince. IELTS Language Practice — грамматика и лексика",
  ],
};
