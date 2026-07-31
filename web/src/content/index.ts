import type { ExamVariant, Question, Subject } from "@/lib/types";
import { dedupeQuestions } from "@/lib/dedupe";
import { dbSubject } from "./db/meta";
import { algoSubject } from "./algo/meta";
import { englishSubject } from "./english/meta";
import { readinessSubject } from "./readiness/meta";
import { dbQuestions } from "./db/questions";
import { algoQuestions } from "./algo/questions";
import { dbBankQuestions } from "./db/questions-bank";
import { algoBankQuestions } from "./algo/questions-bank";
import { englishBankQuestions } from "./english/questions-bank";
import { englishReadingQuestions } from "./english/questions-reading";
import { readinessBankQuestions } from "./readiness/questions-bank";
import { englishQuestions } from "./english/questions";
import { readinessQuestions } from "./readiness/questions";
import { variants as dbVariants } from "./db/variants";
import { variants as algoVariants } from "./algo/variants";
import { variants as englishVariants } from "./english/variants";
import { variants as readinessVariants } from "./readiness/variants";

/** Порядок разделов совпадает с порядком блоков в самом КТ. */
export const subjects: Subject[] = [
  englishSubject,
  readinessSubject,
  dbSubject,
  algoSubject,
];

const questionBank: Record<string, Question[]> = {
  // Сначала задания с развёрнутым разбором, затем массово импортированные из банков
  english: [...englishQuestions, ...englishBankQuestions, ...englishReadingQuestions],
  readiness: [...readinessQuestions, ...readinessBankQuestions],
  db: [...dbQuestions, ...dbBankQuestions],
  algo: [...algoQuestions, ...algoBankQuestions],
};

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getTopic(subjectSlug: string, topicSlug: string) {
  return getSubject(subjectSlug)?.topics.find((t) => t.slug === topicSlug);
}

const variantBank: Record<string, ExamVariant[]> = {
  english: englishVariants,
  readiness: readinessVariants,
  db: dbVariants,
  algo: algoVariants,
};

export function getQuestions(subjectSlug: string): Question[] {
  return questionBank[subjectSlug] ?? [];
}

/** Кеш: дедупликация всего банка по алгоритмам — это ~3000 отпечатков. */
const uniqueCache = new Map<string, Question[]>();

/**
 * Банк без повторов — основа полного тестника. Задания, собранные из разных
 * пробников, во многом пересекаются; здесь от каждой группы повторов остаётся
 * одно задание.
 */
export function getUniqueQuestions(subjectSlug: string): Question[] {
  let cached = uniqueCache.get(subjectSlug);
  if (!cached) {
    cached = dedupeQuestions(getQuestions(subjectSlug));
    uniqueCache.set(subjectSlug, cached);
  }
  return cached;
}

/** Заранее собранные варианты теста по предмету. */
export function getVariants(subjectSlug: string): ExamVariant[] {
  return variantBank[subjectSlug] ?? [];
}

export function getVariant(subjectSlug: string, number: number): ExamVariant | undefined {
  return getVariants(subjectSlug).find((v) => v.number === number);
}

/** Разворачивает вариант в список заданий, сохраняя заданный в нём порядок. */
export function getVariantQuestions(subjectSlug: string, number: number): Question[] {
  const variant = getVariant(subjectSlug, number);
  if (!variant) return [];
  const byId = new Map(getQuestions(subjectSlug).map((q) => [q.id, q]));
  return variant.questionIds
    .map((id) => byId.get(id))
    .filter((q): q is Question => q !== undefined);
}

export function getTopicQuestions(subjectSlug: string, topicSlug: string): Question[] {
  return getQuestions(subjectSlug).filter((q) => q.topic === topicSlug);
}

/** Сколько заданий в одном варианте отведено теме по спецификации. */
export function plannedCount(plan: Partial<Record<"A" | "B" | "C", number>>): number {
  return (plan.A ?? 0) + (plan.B ?? 0) + (plan.C ?? 0);
}
