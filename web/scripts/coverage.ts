/**
 * Считает, сколько ПОЛНЫХ непересекающихся вариантов теста можно собрать
 * по плану спецификации — отдельно из вопросов пробников и из всего банка.
 *
 * Запуск: npx tsx --tsconfig tsconfig.json scripts/coverage.ts
 */
import { subjects, getQuestions } from "@/content";
import { LEVELS } from "@/lib/exam";
import type { Question, Subject } from "@/lib/types";

/** Вопросы, восстановленные из пробников: ЦЕНТ, банки с ключами, история, массовый импорт. */
const isMock = (id: string) => /^(ct|kb|hi|bk)-/.test(id);

function capacity(subject: Subject, bank: Question[]) {
  let min = Infinity;
  const gaps: string[] = [];
  for (const topic of subject.topics) {
    if (topic.noBank) continue;
    for (const level of LEVELS) {
      const need = topic.plan[level] ?? 0;
      if (!need) continue;
      const have = bank.filter((q) => q.topic === topic.slug && q.difficulty === level).length;
      const n = Math.floor(have / need);
      if (n < 4) gaps.push(`${topic.slug}/${level}: есть ${have}, нужно ${need} → ${n}`);
      min = Math.min(min, n);
    }
  }
  return { variants: min === Infinity ? 0 : min, gaps };
}

for (const subject of subjects) {
  if (!subject.spec) continue;
  const all = getQuestions(subject.slug);
  const mock = all.filter((q) => isMock(q.id));

  const m = capacity(subject, mock);
  const a = capacity(subject, all);

  console.log(`\n=== ${subject.title} ===`);
  console.log(`банк: ${all.length} всего, из них ${mock.length} из пробников`);
  console.log(`вариантов только из пробников: ${m.variants}`);
  console.log(`вариантов из всего банка:      ${a.variants}`);
  if (a.gaps.length) {
    console.log("узкие места полного банка:");
    a.gaps.forEach((g) => console.log("  " + g));
  }
}
