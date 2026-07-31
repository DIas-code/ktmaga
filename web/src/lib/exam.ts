import type { Difficulty, GradedAnswer, Question, Subject, Topic } from "./types";

/** Перемешивание Фишера—Йетса на копии массива. */
export function shuffle<T>(items: readonly T[]): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function take<T>(pool: T[], n: number): T[] {
  return shuffle(pool).slice(0, n);
}

export const LEVELS: Difficulty[] = ["A", "B", "C"];

export function plannedTotal(topic: Topic): number {
  return LEVELS.reduce((n, l) => n + (topic.plan[l] ?? 0), 0);
}

/** Темы, попадающие в вариант: заданного блока (или все) и с существующим банком. */
export function variantTopics(subject: Subject, block?: string): Topic[] {
  return subject.topics.filter((t) => !t.noBank && (!block || t.block === block));
}

/** Темы, которые спецификация требует, но покрыть заданиями невозможно. */
export function excludedTopics(subject: Subject, block?: string): Topic[] {
  return subject.topics.filter((t) => t.noBank && (!block || t.block === block));
}

/** Сколько заданий должно быть в варианте по спецификации. */
export function targetSize(subject: Subject, block?: string): number {
  if (!subject.spec) return 0;
  if (!block) return subject.spec.totalQuestions;
  return subject.spec.blocks?.find((b) => b.slug === block)?.questions ?? 0;
}

/** Сколько минут отводится на вариант. */
export function targetDuration(subject: Subject, block?: string): number {
  if (!subject.spec) return 0;
  if (!block) return subject.spec.durationMinutes;
  return subject.spec.blocks?.find((b) => b.slug === block)?.durationMinutes ?? 0;
}

/**
 * Время на вариант, из которого исключены непокрываемые блоки.
 * Например, по английскому аудирование (45 минут) в тренажёр не входит,
 * поэтому и время на него отводить нечестно: остаётся 125 − 45 = 80 минут.
 */
export function coverableDuration(subject: Subject): number {
  const spec = subject.spec;
  if (!spec) return 0;
  const blocks = spec.blocks;
  if (!blocks?.length) return spec.durationMinutes;

  const excluded = blocks.filter(
    (b) =>
      b.durationMinutes !== undefined &&
      subject.topics.some((t) => t.block === b.slug) &&
      subject.topics.filter((t) => t.block === b.slug).every((t) => t.noBank),
  );
  const lost = excluded.reduce((n, b) => n + (b.durationMinutes ?? 0), 0);
  return spec.durationMinutes - lost;
}

/**
 * Собирает вариант теста по спецификации: для каждой темы берёт столько заданий
 * каждого уровня, сколько указано в её `plan`.
 *
 * Если в банке не хватает заданий нужного уровня по теме, недобор компенсируется
 * заданиями того же уровня из других тем — чтобы распределение A/B/C из
 * спецификации сохранялось даже на неполном банке. Темы с `noBank` в подсчёте
 * не участвуют вовсе: подменять аудирование грамматикой было бы враньём.
 */
export function buildVariant(subject: Subject, bank: Question[], block?: string): Question[] {
  if (!subject.spec) return [];

  const topics = variantTopics(subject, block);
  const scope = block ? bank.filter((q) => topics.some((t) => t.slug === q.topic)) : bank;

  const used = new Set<string>();
  const picked: Question[] = [];
  const shortfall: Record<Difficulty, number> = { A: 0, B: 0, C: 0 };

  for (const topic of topics) {
    for (const level of LEVELS) {
      const need = topic.plan[level] ?? 0;
      if (need === 0) continue;

      const pool = scope.filter(
        (q) => q.topic === topic.slug && q.difficulty === level && !used.has(q.id),
      );
      const chosen = take(pool, need);
      chosen.forEach((q) => used.add(q.id));
      picked.push(...chosen);
      shortfall[level] += need - chosen.length;
    }
  }

  for (const level of LEVELS) {
    if (shortfall[level] <= 0) continue;
    const pool = scope.filter((q) => q.difficulty === level && !used.has(q.id));
    const chosen = take(pool, shortfall[level]);
    chosen.forEach((q) => used.add(q.id));
    picked.push(...chosen);
  }

  return shuffle(picked);
}

const same = (a: number[], b: number[]) =>
  a.length === b.length && a.every((v) => b.includes(v));

/**
 * Оценивает один ответ по правилам соответствующей спецификации.
 *
 * Базы данных (multiple): все верные варианты — 2 балла, одна ошибка — 1 балл,
 * две и более — 0. Ошибкой считается и лишний выбранный вариант, и пропущенный верный.
 *
 * Остальные блоки (single): верный ответ — 1 балл, иначе 0.
 */
export function gradeAnswer(question: Question, selected: number[], subject: Subject): GradedAnswer {
  const spec = subject.spec;
  const maxScore = spec?.maxScorePerQuestion ?? 1;
  const isCorrect = same(selected, question.correct);

  let score: number;
  if (spec?.answerMode === "multiple") {
    const missed = question.correct.filter((i) => !selected.includes(i)).length;
    const extra = selected.filter((i) => !question.correct.includes(i)).length;
    const mistakes = missed + extra;
    score = mistakes === 0 ? 2 : mistakes === 1 ? 1 : 0;
  } else {
    score = isCorrect ? 1 : 0;
  }

  return { questionId: question.id, selected, score, maxScore, isCorrect };
}

export function gradeAll(
  questions: Question[],
  answers: Record<string, number[]>,
  subject: Subject,
): GradedAnswer[] {
  return questions.map((q) => gradeAnswer(q, answers[q.id] ?? [], subject));
}

export function formatTime(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

export const difficultyLabel: Record<Difficulty, string> = {
  A: "лёгкий",
  B: "средний",
  C: "сложный",
};

/** Для аудирования и чтения по английскому те же буквы означают уровень понимания. */
export const comprehensionLabel: Record<Difficulty, string> = {
  A: "фрагментарное",
  B: "детальное",
  C: "глобальное",
};
