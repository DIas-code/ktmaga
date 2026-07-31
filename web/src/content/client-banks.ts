"use client";

import type { Question } from "@/lib/types";

/**
 * Банки заданий для просмотра в браузере вопросов.
 *
 * Загружаются динамически: банки по алгоритмам и БД весят по паре мегабайт,
 * и если передавать их пропсами из серверного компонента, они попадают
 * в HTML страницы. Динамический импорт превращает их в отдельный JS-чанк,
 * который скачивается только при открытии страницы и кешируется браузером.
 */
const loaders: Record<string, () => Promise<Question[]>> = {
  algo: async () => {
    const [{ algoQuestions }, { algoBankQuestions }] = await Promise.all([
      import("./algo/questions"),
      import("./algo/questions-bank"),
    ]);
    return [...algoQuestions, ...algoBankQuestions];
  },
  db: async () => {
    const [{ dbQuestions }, { dbBankQuestions }] = await Promise.all([
      import("./db/questions"),
      import("./db/questions-bank"),
    ]);
    return [...dbQuestions, ...dbBankQuestions];
  },
  english: async () => {
    const [{ englishQuestions }, { englishBankQuestions }, { englishReadingQuestions }] =
      await Promise.all([
        import("./english/questions"),
        import("./english/questions-bank"),
        import("./english/questions-reading"),
      ]);
    return [...englishQuestions, ...englishBankQuestions, ...englishReadingQuestions];
  },
  readiness: async () => {
    const [{ readinessQuestions }, { readinessBankQuestions }] = await Promise.all([
      import("./readiness/questions"),
      import("./readiness/questions-bank"),
    ]);
    return [...readinessQuestions, ...readinessBankQuestions];
  },
};

/** Промисы кешируются, иначе use() запускал бы загрузку на каждый рендер. */
const cache = new Map<string, Promise<Question[]>>();

export function loadQuestions(subjectSlug: string): Promise<Question[]> {
  let p = cache.get(subjectSlug);
  if (!p) {
    p = (loaders[subjectSlug] ?? (async () => []))();
    cache.set(subjectSlug, p);
  }
  return p;
}
