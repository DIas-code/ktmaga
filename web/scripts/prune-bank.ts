import fs from "node:fs";
import path from "node:path";
import { getQuestions } from "../src/content";
import type { Question } from "../src/lib/types";

/**
 * Чистка банка от заданий вне раздела 4 спецификации.
 *
 * Раздел 4 «Описание содержания заданий» перечисляет, что именно спрашивают.
 * Массовый импорт затащил в банк много постороннего: банки по алгоритмам и БД
 * сгенерированы по учебникам, и вместе с алгоритмами туда попали вопросы про
 * демонстрационные Java-апплеты из книги, про самого автора и про кнопки
 * в интерфейсе SQL Server. К тесту это отношения не имеет.
 *
 * Запуск: npm run prune           — только отчёт, ничего не меняет
 *         npm run prune -- --apply — выполнить удаление
 */

const APPLY = process.argv.includes("--apply");
const ROOT = path.join(__dirname, "..", "src", "content");

interface Rule {
  name: string;
  re: RegExp;
  /**
   * Где искать признак.
   * `text` — только условие. Нужно тематическим правилам: среди неверных
   * вариантов сплошь и рядом стоят посторонние термины («триггер», «права
   * доступа») именно как отвлекающие, и по ним нормальное задание принимается
   * за постороннее.
   * `all` — условие и варианты. Годится признакам вроде Java: если ответом
   * служит `path.java`, задание постороннее независимо от формулировки.
   */
  scope: "text" | "all";
}

/**
 * Алгоритмы. Раздел 4 описывает язык C и сами алгоритмы; ни Java, ни ООП,
 * ни устройство учебника в нём нет.
 */
/**
 * Граница слова после кириллицы.
 *
 * `\b` в JavaScript определена только по латинским буквам, цифрам и `_`.
 * После русской буквы она не срабатывает вовсе, поэтому `кнопк[аиуе]\b`
 * молча не находил ни одной «кнопки», и мусор оставался в банке.
 */
const КОНЕЦ = "(?![а-яёa-z])";

const ALGO_RULES: Rule[] = [
  { name: "Java", re: /\bJava\b|\bJVM\b|\.java\b|ArrayList|import java|public static void main/i, scope: "all" },
  {
    name: "демо-апплеты учебника",
    re: new RegExp(
      `Workshop|апплет|applet|кнопк[аиуе]${КОНЕЦ}|щёлк|щелк|нажати[ие]|` +
        `в нормальном режиме|окрашен|малинов|какой цвет|цвет[а]? узл|` +
        `\\bZoom\\b|видим[ыо]`,
      "i",
    ),
    scope: "text",
  },
  {
    name: "про книгу и автора",
    re: new RegExp(`автор${КОНЕЦ}|в книге|в главе|данной книг|этой книг|для читателей`, "i"),
    scope: "text",
  },
  { name: "другие языки", re: /\bPython\b|\bC#\b|JavaScript|\bPHP\b|\bRuby\b|\bDelphi\b/i, scope: "all" },
  { name: "ООП", re: /наследован|полиморфизм|инкапсуляц|объектно-ориентир|класс[ае] Node/i, scope: "text" },
];

/**
 * Базы данных. SQL, нормализация, реляционная алгебра и архитектура SQL Server —
 * это предмет, а вот администрирование и работа мышью в Query Analyzer в разделе 4
 * не упоминаются вовсе.
 */
const DB_RULES: Rule[] = [
  {
    name: "интерфейс инструментов",
    re: new RegExp(
      `кнопк[аиуе]${КОНЕЦ}|щёлк|щелк|Query Analyzer|Enterprise Manager|` +
        `диалогов(ое|ом) окн|вкладк|мастер[а]? настройки|какая утилита|какое приложение|` +
        `меню${КОНЕЦ}|панел[ьи]${КОНЕЦ}`,
      "i",
    ),
    scope: "text",
  },
  {
    name: "администрирование вне спецификации",
    re: new RegExp(
      `резервн(ое|ого) копирован|\\bbackup\\b|восстановлени[ея] базы|роли пользовател|` +
        `права доступа|учётн(ая|ые) запис|аутентификац|администратор баз|кто обычно занимается`,
      "i",
    ),
    scope: "text",
  },
  {
    name: "не из раздела 4",
    re: new RegExp(
      `триггер|хранимы[ех] процедур|курсор[ыа]?${КОНЕЦ}|\\bNoSQL\\b|репликац|` +
        `в каком году|истори[яи] развития`,
      "i",
    ),
    scope: "text",
  },
  {
    name: "про книгу и автора",
    re: new RegExp(`автор${КОНЕЦ}|в книге|в главе|данной книг|этой книг|для читателей`, "i"),
    scope: "text",
  },
];

const RULES: Record<string, Rule[]> = { algo: ALGO_RULES, db: DB_RULES };

/**
 * Что автоматика не трогает.
 *
 * `ct` — снято со скриншотов реального пробника: заведомо в программе теста,
 * даже если формулировка выходит за разделы 3 и 4.
 *
 * `hi` — вопросы об авторах и датах алгоритмов. В спецификации их нет, но и
 * удалять по слову «автор» нельзя: под правило попадает один вопрос из
 * девятнадцати, а остальные восемнадцать («Кто предложил быструю сортировку?»)
 * ровно такие же по сути и остались бы. Категорию надо решать целиком —
 * это вопрос к автору проекта, а не к регулярному выражению.
 */
const KEEP_PREFIX = new Set(["ct", "hi"]);

/**
 * Сравниваем только с условием и вариантами ответа.
 *
 * Разбор в этих банках шаблонный («…подробнее в конспекте „Денормализация"»)
 * и упоминает соседние понятия, поэтому по нему задание легко признать
 * посторонним, хотя спрашивают ровно то, что в спецификации есть.
 */
const hay = (q: Question, scope: Rule["scope"]) =>
  scope === "text" ? q.text : `${q.text} ${q.options.join(" ")}`;

function pruneSubject(slug: string): Set<string> {
  const rules = RULES[slug];
  const qs = getQuestions(slug);
  const doomed = new Set<string>();

  console.log(`\n===== ${slug}: ${qs.length} заданий =====`);
  for (const rule of rules) {
    const hits = qs.filter(
      (q) => !KEEP_PREFIX.has(q.id.split("-")[0]) && rule.re.test(hay(q, rule.scope)),
    );
    hits.forEach((q) => doomed.add(q.id));
    console.log(`  ${rule.name.padEnd(34)} ${hits.length}`);
    for (const q of hits.slice(0, 2)) {
      console.log(`      ${q.text.slice(0, 88).replace(/\s+/g, " ")}`);
    }
  }
  const kept = qs.length - doomed.size;
  console.log(`  ${"→ под удаление".padEnd(34)} ${doomed.size}`);
  console.log(`  ${"→ останется".padEnd(34)} ${kept}`);
  return doomed;
}

/**
 * Вырезает объекты заданий с указанными id из сгенерированного файла банка.
 *
 * Границы объекта определяются по отступу, а не подсчётом скобок: в условиях
 * заданий встречаются листинги с `{` и `}`, и счётчик глубины на них сбивается —
 * первая же попытка срезала закрывающую скобку массива и сломала файл.
 * У сгенерированных банков разметка строгая: объект открывается строкой ровно
 * `  {` и закрывается строкой ровно `  },`.
 */
const OPEN = /^ {2}\{$/;
const CLOSE = /^ {2}\},$/;

function removeFromFile(file: string, doomed: Set<string>): number {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  const out: string[] = [];
  let removed = 0;

  let i = 0;
  while (i < lines.length) {
    if (!OPEN.test(lines[i])) {
      out.push(lines[i]);
      i++;
      continue;
    }

    // Собираем объект целиком до закрывающей строки того же отступа.
    let j = i;
    let id: string | null = null;
    while (j < lines.length && !CLOSE.test(lines[j])) {
      const m = /^ {4}id:\s*"([^"]+)"/.exec(lines[j]);
      if (m && !id) id = m[1];
      j++;
    }
    if (j >= lines.length) {
      // Закрытия не нашлось — формат не тот, ничего не трогаем.
      out.push(lines[i]);
      i++;
      continue;
    }

    if (id && doomed.has(id)) {
      removed++;
    } else {
      for (let k = i; k <= j; k++) out.push(lines[k]);
    }
    i = j + 1;
  }

  if (APPLY) fs.writeFileSync(file, out.join("\n"), "utf8");
  return removed;
}

function main() {
  const plan: { file: string; doomed: Set<string> }[] = [];

  for (const slug of ["algo", "db"]) {
    const doomed = pruneSubject(slug);
    for (const name of ["questions.ts", "questions-bank.ts"]) {
      plan.push({ file: path.join(ROOT, slug, name), doomed });
    }
  }

  console.log(APPLY ? "\n--- УДАЛЕНИЕ ---" : "\n--- ОТЧЁТ (без изменений; для удаления: --apply) ---");
  let total = 0;
  for (const { file, doomed } of plan) {
    if (!fs.existsSync(file)) continue;
    const n = removeFromFile(file, doomed);
    total += n;
    if (n > 0) console.log(`  ${path.relative(ROOT, file)}: ${n}`);
  }
  console.log(`итого ${APPLY ? "удалено" : "будет удалено"}: ${total}`);
}

main();
