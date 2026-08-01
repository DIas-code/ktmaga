import fs from "node:fs";
import path from "node:path";

/**
 * Собирает банк заново из партий, перенесённых из пробников.
 *
 * 1. Генерирует `<предмет>/mock/index.ts`, который реэкспортирует все партии.
 * 2. Вычищает старые файлы банка, оставляя только задания с префиксом `ct-` —
 *    они восстановлены по скриншотам пробников, то есть тоже «из пробников».
 *    Всё остальное (`al-`, `db-`, `hi-` — написанное под спецификацию,
 *    `bk-`, `kb-` — массовый импорт из «Сливы бейба») удаляется.
 *
 * Запуск: npm run assemble           — отчёт
 *         npm run assemble -- --apply — выполнить
 */

const APPLY = process.argv.includes("--apply");
const ROOT = path.join(__dirname, "..", "src", "content");

/** Что уцелеет в старых файлах банка. */
const KEEP_PREFIX = new Set(["ct"]);

const OPEN = /^ {2}\{$/;
const CLOSE = /^ {2}\},$/;

/** Оставляет в сгенерированном файле банка только задания с разрешённым префиксом. */
function keepOnly(file: string): { kept: number; removed: number } {
  if (!fs.existsSync(file)) return { kept: 0, removed: 0 };
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  const out: string[] = [];
  let kept = 0;
  let removed = 0;
  let i = 0;

  while (i < lines.length) {
    if (!OPEN.test(lines[i])) {
      out.push(lines[i]);
      i++;
      continue;
    }
    let j = i;
    let id: string | null = null;
    while (j < lines.length && !CLOSE.test(lines[j])) {
      const m = /^ {4}id:\s*"([^"]+)"/.exec(lines[j]);
      if (m && !id) id = m[1];
      j++;
    }
    if (j >= lines.length) {
      out.push(lines[i]);
      i++;
      continue;
    }
    if (id && KEEP_PREFIX.has(id.split("-")[0])) {
      for (let k = i; k <= j; k++) out.push(lines[k]);
      kept++;
    } else {
      removed++;
    }
    i = j + 1;
  }

  if (APPLY) fs.writeFileSync(file, out.join("\n"), "utf8");
  return { kept, removed };
}

function buildIndex(subject: string): number {
  const dir = path.join(ROOT, subject, "mock");
  if (!fs.existsSync(dir)) return 0;

  const batches = fs
    .readdirSync(dir)
    .filter((f) => /^batch-\d+\.ts$/.test(f))
    .sort();

  const imports: string[] = [];
  const names: string[] = [];
  let total = 0;

  for (const file of batches) {
    const src = fs.readFileSync(path.join(dir, file), "utf8");
    const m = /export const (\w+):/.exec(src);
    if (!m) continue;
    const count = (src.match(/^ {4}id: "/gm) ?? []).length;
    if (count === 0) continue; // пустые партии не подключаем
    total += count;
    imports.push(`import { ${m[1]} } from "./${file.replace(/\.ts$/, "")}";`);
    names.push(m[1]);
  }

  const body = `${imports.join("\n")}
import type { Question } from "@/lib/types";

/**
 * ФАЙЛ СГЕНЕРИРОВАН: npm run assemble -- --apply
 *
 * Задания, перенесённые из пробников вручную. Каждая партия соответствует
 * куску исходного материала; источник зашит в id вида mk-<предмет>-b<партия>-<номер>.
 */
export const mockQuestions: Question[] = [
${names.map((n) => `  ...${n},`).join("\n")}
];
`;

  if (APPLY) fs.writeFileSync(path.join(dir, "index.ts"), body, "utf8");
  console.log(`  ${subject}/mock: ${names.length} партий, ${total} заданий`);
  return total;
}

function main() {
  console.log(APPLY ? "--- СБОРКА ---" : "--- ОТЧЁТ (для применения: --apply) ---");

  console.log("\nпартии из пробников:");
  for (const s of ["algo", "db", "english"]) buildIndex(s);

  console.log("\nчистка старых файлов (остаются только ct-*):");
  for (const s of ["algo", "db"]) {
    for (const name of ["questions.ts", "questions-bank.ts"]) {
      const file = path.join(ROOT, s, name);
      const { kept, removed } = keepOnly(file);
      if (kept || removed) {
        console.log(`  ${s}/${name}: оставлено ${kept}, удалено ${removed}`);
      }
    }
  }
}

main();
