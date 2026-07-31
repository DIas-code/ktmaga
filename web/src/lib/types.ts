/**
 * Уровень трудности задания по спецификации ЦЕНТ: A — лёгкий, B — средний, C — сложный.
 * В блоках аудирования и чтения по английскому теми же буквами обозначен уровень
 * понимания: A — фрагментарное, B — детальное, C — глобальное.
 */
export type Difficulty = "A" | "B" | "C";

/**
 * Формат ответа.
 * `single` — один правильный вариант (Алгоритмы, Английский, Готовность к обучению).
 * `multiple` — один или несколько правильных (Базы данных).
 */
export type AnswerMode = "single" | "multiple";

export interface Question {
  id: string;
  /** slug темы, к которой относится вопрос */
  topic: string;
  difficulty: Difficulty;
  text: string;
  /** Необязательный блок кода/SQL, показываемый под условием */
  code?: { lang: string; value: string };
  /** Текст для чтения или иной материал задания, показываемый над условием */
  passage?: { title?: string; value: string };
  options: string[];
  /** Индексы правильных вариантов */
  correct: number[];
  /** Разбор: почему этот ответ верный */
  explanation: string;
}

export interface Topic {
  slug: string;
  /** Номер темы в спецификации */
  number: number;
  title: string;
  /** Подробное содержание темы — дословно из спецификации */
  spec: string;
  /** Сколько заданий по этой теме и какого уровня входит в один вариант теста */
  plan: Partial<Record<Difficulty, number>>;
  /**
   * Конкретные вопросы, которые реально встречаются в этой теме на тесте.
   * Выведены из разбора пробных вариантов, а не из спецификации: спецификация
   * задаёт тему крупно, а тест спрашивает вот эти вещи.
   */
  subtopics?: string[];
  /** slug блока теста, к которому относится тема (если тест разбит на блоки) */
  block?: string;
  /**
   * Заполняется, если банк заданий по теме принципиально не может быть собран
   * (например, аудирование без аудиоматериалов). Такие темы исключаются из
   * пробного варианта, а причина показывается пользователю.
   */
  noBank?: string;
}

/** Раздел теста. Группирует темы, а если спецификация задаёт для него отдельное
 *  время — такой раздел можно сдать отдельным блоком с собственным таймером. */
export interface ExamBlock {
  slug: string;
  title: string;
  questions: number;
  /** Только если хронометраж блока задан спецификацией. Иначе время общее на весь тест. */
  durationMinutes?: number;
}

export interface SubjectSpec {
  /** Всего заданий в одном варианте */
  totalQuestions: number;
  /** Минут на весь тест */
  durationMinutes: number;
  answerMode: AnswerMode;
  /** Допустимые количества вариантов ответа в задании */
  optionCounts: number[];
  /** Распределение заданий по уровням трудности */
  difficultyMix: Record<Difficulty, number>;
  /** Максимальный балл за одно задание */
  maxScorePerQuestion: number;
  /** Человекочитаемое описание схемы оценивания */
  scoringRule: string;
  /** Блоки теста со своим хронометражем; пусто, если тест неделимый */
  blocks?: ExamBlock[];
  /** Что означают буквы A/B/C в этой спецификации */
  levelMeaning?: string;
}

export interface Subject {
  slug: string;
  title: string;
  shortTitle: string;
  /** Одна строка для карточки на главной */
  tagline: string;
  accent: "sky" | "violet" | "amber" | "emerald";
  icon: string;
  /** false — раздел-заглушка: спецификации ещё нет */
  ready: boolean;
  spec: SubjectSpec | null;
  topics: Topic[];
  /** Рекомендуемая литература из спецификации */
  literature: string[];
}

/**
 * Заранее собранный вариант теста: фиксированный набор заданий, построенный
 * строго по плану спецификации. В отличие от случайной сборки, вариант
 * не меняется между попытками — его можно пройти, разобрать и вернуться к нему.
 */
export interface ExamVariant {
  /** Порядковый номер варианта */
  number: number;
  /** Идентификаторы заданий в порядке предъявления */
  questionIds: string[];
  /** Сколько заданий взято из разобранных пробников ЦЕНТ */
  fromMocks: number;
}

export interface GradedAnswer {
  questionId: string;
  selected: number[];
  score: number;
  maxScore: number;
  isCorrect: boolean;
}

export interface AttemptResult {
  subject: string;
  /** "exam" — вариант с таймером, "practice" — тренировка по темам */
  mode: "exam" | "practice";
  startedAt: number;
  finishedAt: number;
  answers: GradedAnswer[];
  score: number;
  maxScore: number;
  /** Темы, вошедшие в тренировку (для mode: "practice") */
  topics?: string[];
  /** slug блока, если сдавался отдельный блок теста */
  block?: string;
}
