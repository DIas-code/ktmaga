import fs from "node:fs";
import path from "node:path";
import { subjects, getQuestions } from "../src/content";

/**
 * Восстанавливает соответствие «задание → скриншот пробника».
 *
 * Запуск: npm run images -- <ocr.json>
 * где ocr.json — результат распознавания скриншотов (см. README проекта).
 * Папка `Пробники` в репозиторий не входит, поэтому скрипт локальный:
 * без исходных картинок пересобрать таблицу нельзя, но и не нужно —
 * готовый `src/content/question-images.ts` лежит в репозитории.
 *
 * Почему нечёткое сравнение: OCR ошибается, и точное совпадение строк
 * не находит почти ничего. Триграммы (трёхбуквенные куски) устойчивы
 * и к опечаткам распознавания, и к тому, что вокруг вопроса на скриншоте
 * намешан интерфейс браузера.
 */

const OCR_FILE = process.argv[2];
const OUT_FILE = path.join(__dirname, "..", "src", "content", "question-images.ts");
const PROJECT_ROOT = path.join(__dirname, "..", "..");

/**
 * Мера Жаккара окна, начиная с которой считаем, что это то же задание.
 * Подобрана по сверке вручную: ниже 0,42 начинают проходить чужие задания
 * той же темы, выше 0,55 отсекаются нормальные совпадения с шумным OCR.
 */
const THRESHOLD = 0.45;
/** Короткие задания пропускаем: у них слишком мало триграмм, легко поймать чужое. */
const MIN_GRAMS = 25;
/** Сколько кандидатов от предварительного отбора проверять окном. */
const CANDIDATES = 25;

interface OcrRecord {
  path: string;
  text: string;
}

function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function trigrams(s: string): Set<string> {
  const t = norm(s).replace(/ /g, "");
  const out = new Set<string>();
  for (let i = 0; i + 3 <= t.length; i++) out.add(t.slice(i, i + 3));
  return out;
}

/**
 * Лучшее совпадение задания с куском текста скриншота.
 *
 * Простая доля совпавших триграмм здесь не работает: на скриншоте с длинным
 * текстом (2–3 тысячи знаков) набор триграмм настолько богат, что покрывает
 * короткий вопрос случайно, и один файл «притягивает» десятки чужих заданий.
 * Поэтому текст скриншота просматривается окном размером с само задание,
 * а мера берётся симметричная (Жаккар) — длина фона больше не даёт форы.
 */
function windowedJaccard(needle: Set<string>, flat: string, needleLen: number): number {
  const win = Math.max(needleLen, 40);
  if (flat.length <= win) {
    const hay = new Set<string>();
    for (let i = 0; i + 3 <= flat.length; i++) hay.add(flat.slice(i, i + 3));
    return jaccard(needle, hay);
  }

  const step = Math.max(8, Math.floor(win / 4));
  let best = 0;
  for (let start = 0; start + win <= flat.length + step; start += step) {
    const chunk = flat.slice(start, start + win);
    const hay = new Set<string>();
    for (let i = 0; i + 3 <= chunk.length; i++) hay.add(chunk.slice(i, i + 3));
    const score = jaccard(needle, hay);
    if (score > best) best = score;
  }
  return best;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const g of a) if (b.has(g)) inter++;
  return inter / (a.size + b.size - inter);
}

function main() {
  if (!OCR_FILE || !fs.existsSync(OCR_FILE)) {
    console.error("Укажите файл с результатом OCR: npm run images -- <ocr.json>");
    process.exit(1);
  }

  const records: OcrRecord[] = JSON.parse(
    fs.readFileSync(OCR_FILE, "utf8").replace(/^﻿/, ""),
  );

  const shots = records
    .filter((r) => r.text && r.text.length > 40)
    .map((r) => ({
      rel: path.relative(PROJECT_ROOT, r.path).replace(/\\/g, "/"),
      grams: trigrams(r.text),
      flat: norm(r.text).replace(/ /g, ""),
    }));

  console.log(`скриншотов: ${records.length}, с текстом: ${shots.length}`);

  // Обратный индекс: триграмма → номера скриншотов. Без него каждое задание
  // пришлось бы прогонять окном по всем 2500 скриншотам.
  const index = new Map<string, number[]>();
  shots.forEach((shot, i) => {
    for (const g of shot.grams) {
      let list = index.get(g);
      if (!list) index.set(g, (list = []));
      list.push(i);
    }
  });

  const mapping: Record<string, string> = {};
  let total = 0;

  for (const subject of subjects) {
    const qs = getQuestions(subject.slug);
    let matched = 0;

    for (const q of qs) {
      const probe = trigrams(`${q.text} ${q.options.join(" ")}`);
      if (probe.size < MIN_GRAMS) continue;
      const probeLen = norm(`${q.text} ${q.options.join(" ")}`).replace(/ /g, "").length;

      // Предварительный отбор: кандидаты, делящие с заданием больше всего триграмм.
      const hits = new Map<number, number>();
      for (const g of probe) {
        const list = index.get(g);
        if (!list) continue;
        for (const i of list) hits.set(i, (hits.get(i) ?? 0) + 1);
      }
      const candidates = [...hits.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, CANDIDATES)
        .map(([i]) => i);

      let best = "";
      let bestScore = 0;
      for (const i of candidates) {
        const score = windowedJaccard(probe, shots[i].flat, probeLen);
        if (score > bestScore) {
          bestScore = score;
          best = shots[i].rel;
        }
      }
      if (bestScore >= THRESHOLD) {
        mapping[q.id] = best;
        matched++;
      }
    }

    total += matched;
    const pct = qs.length ? ((matched / qs.length) * 100).toFixed(1) : "0";
    console.log(`  ${subject.slug.padEnd(10)} ${matched} из ${qs.length} (${pct}%)`);
  }

  // Один скриншот — одно задание. Если на файл ссылаются десятки заданий,
  // это почти наверняка ложные срабатывания, а не насыщенная страница.
  const perFile = new Map<string, number>();
  for (const p of Object.values(mapping)) perFile.set(p, (perFile.get(p) ?? 0) + 1);
  const worst = [...perFile.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  console.log("\nсамые нагруженные файлы (для контроля ложных совпадений):");
  for (const [p, n] of worst) console.log(`  ${String(n).padStart(3)} × ${p}`);

  const entries = Object.entries(mapping).sort(([a], [b]) => a.localeCompare(b));
  const body = entries.map(([id, p]) => `  ${JSON.stringify(id)}: ${JSON.stringify(p)},`).join("\n");

  const header = `/**
 * ФАЙЛ СГЕНЕРИРОВАН. Не редактировать вручную.
 * Пересобрать: npm run images -- <ocr.json>
 *
 * Задание → скриншот пробника, на котором оно найдено.
 *
 * При импорте банка соответствие «задание → файл» не сохранялось, поэтому оно
 * восстановлено обратным ходом: текст со всех скриншотов распознан OCR,
 * а затем каждое задание сопоставлено со скриншотами по доле совпавших
 * триграмм (порог ${THRESHOLD}). Так опечатки распознавания не мешают,
 * а ложные срабатывания на коротких формулировках отсекаются.
 *
 * Заданий, которых нет ни на одном скриншоте, здесь нет: большая часть банка
 * пришла из Word-документов с ключами, и картинки для них не существует.
 */
`;

  fs.writeFileSync(
    OUT_FILE,
    `${header}export const questionImages: Record<string, string> = {\n${body}\n};\n`,
    "utf8",
  );
  console.log(`\nвсего сопоставлено: ${total}`);
  console.log(`записано: ${path.relative(process.cwd(), OUT_FILE)}`);
}

main();
