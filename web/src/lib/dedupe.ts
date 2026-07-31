import type { Question } from "./types";

/**
 * Нормализация текста для сравнения заданий: регистр, ё/е, пунктуация и любые
 * пробелы схлопываются. Одно и то же задание в разных пробниках набрано
 * по-разному — где-то «ё», где-то «е», где-то двойной пробел после тире.
 */
function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

/**
 * Отпечаток задания. В него входят и `code`, и `passage`: в банке есть
 * десятки заданий с общим условием («Что выведет этот фрагмент?»), которые
 * различаются только листингом. Сравнивать их по одному тексту нельзя —
 * дедупликация склеила бы разные задания в одно.
 *
 * Варианты ответа сортируются: в пробниках один и тот же вопрос встречается
 * с переставленными вариантами.
 */
function fingerprint(q: Question): string {
  return [
    norm(q.text),
    norm(q.code?.value ?? ""),
    norm(q.passage?.value ?? ""),
    q.options.map(norm).sort().join("|"),
  ].join("##");
}

/**
 * Оставляет по одному заданию из каждой группы повторов, сохраняя порядок.
 *
 * Порядок важен: в банке сначала идут задания с написанным вручную разбором,
 * а потом массово импортированные из пробников. Выживает первое вхождение —
 * то есть версия с разбором, если она есть.
 */
export function dedupeQuestions(questions: Question[]): Question[] {
  const seen = new Set<string>();
  const out: Question[] = [];
  for (const q of questions) {
    const fp = fingerprint(q);
    if (seen.has(fp)) continue;
    seen.add(fp);
    out.push(q);
  }
  return out;
}
