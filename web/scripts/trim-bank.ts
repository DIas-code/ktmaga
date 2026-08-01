import fs from "node:fs";
import path from "node:path";
import { getSubject, getQuestions, plannedCount } from "../src/content";
import type { Question } from "../src/lib/types";

/**
 * Сокращает банк до целевого размера, распределяя квоту по темам.
 *
 * Банк массового импорта дробит одну тему на десятки почти одинаковых
 * вопросов, и объём перестаёт помогать. Здесь он режется до разумного
 * размера, но не равномерно: квота темы пропорциональна тому, сколько
 * заданий по ней требует спецификация в одном варианте. Тема с тремя
 * заданиями в варианте получит втрое больше, чем тема с одним.
 *
 * Запуск: npm run trim -- 1500          — отчёт
 *         npm run trim -- 1500 --apply  — выполнить
 */

const TARGET = Number(process.argv[2] ?? 1500);
const APPLY = process.argv.includes("--apply");
const ROOT = path.join(__dirname, "..", "src", "content");

/**
 * Ценность задания. Чем выше, тем позже оно попадёт под нож.
 *  3 — снято со скриншота реального пробника;
 *  2 — написано вручную под спецификацию, с настоящим разбором;
 *  1 — массовый импорт, но разбор не шаблонный;
 *  0 — массовый импорт с шаблонным разбором.
 */
const BOILERPLATE = /^Верный ответ|^Искомый термин|Разбор понятий и типичных ловушек|восстановлено из банка/i;

function value(q: Question): number {
  const prefix = q.id.split("-")[0];
  if (prefix === "ct") return 3;
  if (["al", "db", "en", "rd", "kb", "hi"].includes(prefix)) return 2;
  return BOILERPLATE.test(q.explanation) ? 0 : 1;
}

function planQuotas(slug: string, target: number): Map<string, number> {
  const subject = getSubject(slug)!;
  const weights = new Map<string, number>();
  let totalWeight = 0;
  for (const t of subject.topics) {
    if (t.noBank) continue;
    const w = plannedCount(t.plan);
    if (w > 0) {
      weights.set(t.slug, w);
      totalWeight += w;
    }
  }
  const quotas = new Map<string, number>();
  for (const [slugTopic, w] of weights) {
    quotas.set(slugTopic, Math.round((w / totalWeight) * target));
  }
  return quotas;
}

function pickSurvivors(slug: string, target: number): Set<string> {
  const qs = getQuestions(slug);
  const quotas = planQuotas(slug, target);
  const byTopic = new Map<string, Question[]>();
  for (const q of qs) {
    if (!byTopic.has(q.topic)) byTopic.set(q.topic, []);
    byTopic.get(q.topic)!.push(q);
  }

  // Сортируем по ценности; при равной — по длине разбора, чтобы среди
  // одинаковых по происхождению выжили более содержательные.
  const sortedByTopic = new Map<string, Question[]>();
  for (const [topic, list] of byTopic) {
    sortedByTopic.set(
      topic,
      list.slice().sort((a, b) => value(b) - value(a) || b.explanation.length - a.explanation.length),
    );
  }

  /**
   * Раздача квот в несколько проходов. У бедных тем банк меньше квоты,
   * и их недобор пропал бы впустую — вместо этого остаток переливается
   * в темы, где задания ещё есть, в той же пропорции по весу спецификации.
   */
  const take = new Map<string, number>();
  for (const t of sortedByTopic.keys()) take.set(t, 0);

  let remaining = target;
  for (let pass = 0; pass < 6 && remaining > 0; pass++) {
    const hungry = [...sortedByTopic.entries()].filter(
      ([t, list]) => list.length > (take.get(t) ?? 0),
    );
    if (hungry.length === 0) break;

    const weightSum = hungry.reduce((n, [t]) => n + (quotas.get(t) ?? 1), 0);
    let handed = 0;
    for (const [t, list] of hungry) {
      const share = Math.max(1, Math.round((remaining * (quotas.get(t) ?? 1)) / weightSum));
      const room = list.length - (take.get(t) ?? 0);
      const add = Math.min(share, room, remaining - handed);
      if (add <= 0) continue;
      take.set(t, (take.get(t) ?? 0) + add);
      handed += add;
    }
    if (handed === 0) break;
    remaining -= handed;
  }

  const keep = new Set<string>();
  console.log(`\n===== ${slug}: ${qs.length} → цель ${target} =====`);
  console.log(`  ${"тема".padEnd(24)} ${"в варианте".padEnd(11)} ${"квота".padEnd(7)} ${"есть".padEnd(6)} оставим`);

  for (const [topic, sorted] of sortedByTopic) {
    const n = take.get(topic) ?? 0;
    sorted.slice(0, n).forEach((q) => keep.add(q.id));
    const plan = plannedCount(getSubject(slug)!.topics.find((t) => t.slug === topic)?.plan ?? {});
    console.log(
      `  ${topic.padEnd(24)} ${String(plan).padEnd(11)} ${String(quotas.get(topic) ?? 0).padEnd(7)} ${String(sorted.length).padEnd(6)} ${n}`,
    );
  }
  console.log(`  ${"ИТОГО".padEnd(24)} ${"".padEnd(11)} ${"".padEnd(7)} ${String(qs.length).padEnd(6)} ${keep.size}`);
  return keep;
}

const OPEN = /^ {2}\{$/;
const CLOSE = /^ {2}\},$/;

function filterFile(file: string, keep: Set<string>): number {
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
    if (id && !keep.has(id)) removed++;
    else for (let k = i; k <= j; k++) out.push(lines[k]);
    i = j + 1;
  }

  if (APPLY) fs.writeFileSync(file, out.join("\n"), "utf8");
  return removed;
}

function main() {
  const plan: { file: string; keep: Set<string> }[] = [];
  for (const slug of ["algo", "db"]) {
    const keep = pickSurvivors(slug, TARGET);
    for (const name of ["questions.ts", "questions-bank.ts"]) {
      plan.push({ file: path.join(ROOT, slug, name), keep });
    }
  }

  console.log(APPLY ? "\n--- СОКРАЩЕНИЕ ---" : "\n--- ОТЧЁТ (для применения: --apply) ---");
  let total = 0;
  for (const { file, keep } of plan) {
    if (!fs.existsSync(file)) continue;
    const n = filterFile(file, keep);
    total += n;
    if (n > 0) console.log(`  ${path.relative(ROOT, file)}: −${n}`);
  }
  console.log(`итого ${APPLY ? "удалено" : "будет удалено"}: ${total}`);
}

main();
