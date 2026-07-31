/**
 * Собирает фиксированные варианты тестов строго по плану спецификации
 * и записывает их в src/content/<предмет>/variants.ts.
 *
 * Правила отбора:
 *   1. Для каждой темы берётся ровно столько заданий каждого уровня,
 *      сколько указано в её plan — то есть распределение точно как на КТ.
 *   2. Приоритет отдаётся заданиям из разобранных пробников (ct-*, kb-*, hi-*).
 *   3. Внутри варианта задание не повторяется.
 *   4. Между вариантами повторы неизбежны (банк меньше, чем нужно на 5 вариантов),
 *      поэтому задания раздаются по кругу: сначала неиспользованные, затем
 *      использованные реже других.
 *
 * Запуск: npm run variants
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { subjects, getQuestions } from "@/content";
import { LEVELS } from "@/lib/exam";
import type { Question, Subject } from "@/lib/types";

const VARIANTS_PER_SUBJECT = 5;

/**
 * Задания, происходящие из пробников:
 *   ct- — восстановлены по скриншотам ЦЕНТ
 *   kb- — отобраны вручную из банков с ключами
 *   hi- — история и авторы, составлены по найденным в банках заданиям
 *   bk- — массовый импорт из банков с готовыми ключами
 */
const isMock = (id: string) => /^(ct|kb|hi|bk)-/.test(id);

/** Детерминированный генератор: варианты не должны меняться при каждом запуске. */
function makeRandom(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

function shuffle<T>(items: T[], rnd: () => number): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function buildVariants(subject: Subject, bank: Question[]) {
  const rnd = makeRandom(
    [...subject.slug].reduce((a, c) => a + c.charCodeAt(0), 0) * 7919,
  );
  /** Сколько раз задание уже вошло в какой-либо вариант. */
  const used = new Map<string, number>(bank.map((q) => [q.id, 0]));
  const variants: { number: number; questionIds: string[]; fromMocks: number }[] = [];

  for (let v = 1; v <= VARIANTS_PER_SUBJECT; v++) {
    const picked: Question[] = [];
    const taken = new Set<string>();

    for (const topic of subject.topics) {
      if (topic.noBank) continue;
      for (const level of LEVELS) {
        const need = topic.plan[level] ?? 0;
        if (need === 0) continue;

        const pool = shuffle(
          bank.filter(
            (q) => q.topic === topic.slug && q.difficulty === level && !taken.has(q.id),
          ),
          rnd,
        );

        // Сначала задания из пробников, и лишь внутри этой группы — реже использованные.
        // Порядок именно такой: иначе непробничные задания с нулём использований
        // вытесняли бы пробничные, уже вошедшие в предыдущий вариант.
        pool.sort((a, b) => {
          const byMock = Number(isMock(b.id)) - Number(isMock(a.id));
          if (byMock !== 0) return byMock;
          return (used.get(a.id) ?? 0) - (used.get(b.id) ?? 0);
        });

        for (const q of pool.slice(0, need)) {
          picked.push(q);
          taken.add(q.id);
          used.set(q.id, (used.get(q.id) ?? 0) + 1);
        }
      }
    }

    const ordered = shuffle(picked, rnd);
    variants.push({
      number: v,
      questionIds: ordered.map((q) => q.id),
      fromMocks: ordered.filter((q) => isMock(q.id)).length,
    });
  }

  return variants;
}

const header = (subject: Subject, total: number) =>
  `import type { ExamVariant } from "@/lib/types";

/**
 * ФАЙЛ СГЕНЕРИРОВАН. Не редактировать вручную — правки затрутся.
 * Пересобрать: npm run variants
 *
 * Фиксированные варианты по дисциплине «${subject.title}».
 * Каждый вариант собран строго по плану спецификации: по каждой теме взято
 * столько заданий каждого уровня трудности, сколько положено (${total} заданий).
 * Приоритет при отборе отдан заданиям, восстановленным из пробников ЦЕНТ.
 */
export const variants: ExamVariant[] = `;

let report = "";

for (const subject of subjects) {
  if (!subject.spec) continue;
  const bank = getQuestions(subject.slug);
  const variants = buildVariants(subject, bank);

  const total = subject.topics.reduce(
    (n, t) => n + (t.noBank ? 0 : LEVELS.reduce((m, l) => m + (t.plan[l] ?? 0), 0)),
    0,
  );

  const body = JSON.stringify(variants, null, 2).replace(/"([a-zA-Z]+)":/g, "$1:");
  const out = join(process.cwd(), "src", "content", subject.slug, "variants.ts");
  writeFileSync(out, header(subject, total) + body + ";\n", "utf8");

  // Насколько варианты различаются между собой
  const allIds = variants.flatMap((v) => v.questionIds);
  const uniq = new Set(allIds).size;

  report += `\n${subject.title}\n`;
  report += `  вариантов: ${variants.length}, заданий в каждом: ${variants[0].questionIds.length}`;
  report += total !== variants[0].questionIds.length ? ` (по плану ${total})\n` : `\n`;
  report += `  задействовано уникальных заданий: ${uniq} из ${bank.length}\n`;
  for (const v of variants) {
    const pct = Math.round((v.fromMocks / v.questionIds.length) * 100);
    report += `  вариант ${v.number}: из пробников ${v.fromMocks} из ${v.questionIds.length} (${pct}%)\n`;
  }
}

console.log(report);
