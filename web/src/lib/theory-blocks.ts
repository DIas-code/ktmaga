/**
 * Разбор конспекта на раскрывающиеся блоки.
 *
 * Конспекты уже написаны так, что каждый заголовок второго уровня — законченный
 * сюжет («Быстрая сортировка», «Двоичный поиск», «Устойчивость»). Тестник
 * показывает их под заданием списком свёрнутых блоков: ответил на вопрос про
 * быструю сортировку — снизу вся тема сортировок, а не только разбор ответа.
 */
export interface TheoryBlock {
  /** Устойчивый идентификатор: тема + номер блока. */
  id: string;
  title: string;
  /** Тело блока в markdown, без строки заголовка. */
  body: string;
}

const FENCE = /^\s*(```|~~~)/;
const H2 = /^##\s+(.+?)\s*$/;

/**
 * Делит markdown по заголовкам `##`. Заголовки внутри блоков кода игнорируются:
 * в листингах на C встречаются и `#include`, и комментарии с решётками.
 *
 * Текст до первого `##` (если он есть) становится вводным блоком.
 */
export function splitTheoryBlocks(markdown: string, keyPrefix: string): TheoryBlock[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: TheoryBlock[] = [];

  let title = "";
  let buffer: string[] = [];
  let inFence = false;
  let fence = "";

  const flush = () => {
    const body = buffer.join("\n").trim();
    if (!title && !body) return;
    blocks.push({
      id: `${keyPrefix}-${blocks.length}`,
      title: title || "Введение",
      body,
    });
    buffer = [];
  };

  for (const line of lines) {
    const fenceMatch = FENCE.exec(line);
    if (fenceMatch) {
      // Закрывающим считается только маркер того же типа, что открывал.
      if (!inFence) {
        inFence = true;
        fence = fenceMatch[1];
      } else if (line.trimStart().startsWith(fence)) {
        inFence = false;
      }
      buffer.push(line);
      continue;
    }

    const heading = inFence ? null : H2.exec(line);
    if (heading) {
      flush();
      title = heading[1];
      continue;
    }
    buffer.push(line);
  }
  flush();

  return blocks.filter((b) => b.body.length > 0);
}

/* ------------------------------ релевантность ------------------------------ */

/** Слова короче четырёх букв («что», «для», «или») ничего не различают. */
const MIN_TOKEN = 4;
/** Грубая замена стеммингу: сравниваем начала слов, чтобы «сортировка»
 *  совпадала с «сортировки», а «рекурсивный» — с «рекурсия». */
const STEM = 5;

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .split(" ")
    .filter((w) => w.length >= MIN_TOKEN)
    .map((w) => w.slice(0, STEM));
}

/** Кусок запроса со своим весом. */
export interface QueryPart {
  text: string;
  weight: number;
}

/**
 * Запрос к теории, собранный из задания.
 *
 * Правильный ответ весит больше всего: именно он называет понятие, о котором
 * задание. У вопроса «выделяется наименьший элемент и отделяется от остальных»
 * в тексте вообще нет слова «выбор» — оно есть только в верном варианте
 * «сортировка посредством выбора». Неверные варианты — это чужие термины
 * («обменная», «вставками»), тянущие выдачу не туда, поэтому их вес меньше.
 */
export function buildTheoryQuery(
  text: string,
  options: string[],
  correct: number[],
): QueryPart[] {
  const right = correct.map((i) => options[i]).filter(Boolean);
  const rest = options.filter((_, i) => !correct.includes(i));
  return [
    { text: right.join(" "), weight: 3 },
    { text, weight: 2 },
    { text: rest.join(" "), weight: 1 },
  ].filter((p) => p.text.length > 0);
}

/**
 * Сортирует блоки по близости к заданию: сначала тот, о чём вопрос, потом
 * остальные блоки темы в исходном порядке.
 *
 * Совпадение в заголовке весит втрое: у блока «Быстрая сортировка» слово
 * «быстрая» в заголовке значит куда больше, чем то же слово где-то в теле
 * соседнего блока — тела длинные, и случайных совпадений в них много.
 */
export function rankTheoryBlocks(
  blocks: TheoryBlock[],
  query: QueryPart[],
): TheoryBlock[] {
  /** Максимальный вес каждого токена: слово из верного ответа не должно
   *  терять в весе оттого, что встречается ещё и среди неверных вариантов. */
  const weights = new Map<string, number>();
  for (const part of query) {
    for (const token of tokenize(part.text)) {
      weights.set(token, Math.max(weights.get(token) ?? 0, part.weight));
    }
  }
  if (weights.size === 0) return blocks;

  const scored = blocks.map((block, index) => {
    const inTitle = new Set(tokenize(block.title));
    const inBody = new Set(tokenize(block.body));
    let score = 0;
    for (const [token, weight] of weights) {
      if (inTitle.has(token)) score += weight * 3;
      else if (inBody.has(token)) score += weight;
    }
    return { block, index, score };
  });

  // Стабильная сортировка: при равном счёте порядок конспекта сохраняется.
  scored.sort((a, b) => b.score - a.score || a.index - b.index);
  return scored.map((s) => s.block);
}
