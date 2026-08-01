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
    const [{ algoMockQuestions }, { mockQuestions }, { algoQuestions }, { algoBankQuestions }] =
      await Promise.all([
        import("./algo/questions-mock"),
        import("./algo/mock"),
        import("./algo/questions"),
        import("./algo/questions-bank"),
      ]);
    return [...algoMockQuestions, ...mockQuestions, ...algoQuestions, ...algoBankQuestions];
  },
  db: async () => {
    const [{ mockQuestions }, { dbQuestions }, { dbBankQuestions }] = await Promise.all([
      import("./db/mock"),
      import("./db/questions"),
      import("./db/questions-bank"),
    ]);
    return [...mockQuestions, ...dbQuestions, ...dbBankQuestions];
  },
  english: async () => {
    const [
      { mockQuestions },
      { englishQuestions },
      { englishBankQuestions },
      { englishReadingQuestions },
    ] = await Promise.all([
        import("./english/mock"),
        import("./english/questions"),
        import("./english/questions-bank"),
        import("./english/questions-reading"),
      ]);
    return [
      ...mockQuestions,
      ...englishQuestions,
      ...englishBankQuestions,
      ...englishReadingQuestions,
    ];
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
