import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "src", "content");

/**
 * Читает конспект темы из `src/content/<subject>/theory/<topic>.md`.
 * Возвращает null, если конспект ещё не написан — страница темы покажет заглушку.
 * Только для серверных компонентов.
 */
export function loadTheory(subject: string, topic: string): string | null {
  const file = path.join(root, subject, "theory", `${topic}.md`);
  try {
    return fs.readFileSync(file, "utf8");
  } catch {
    return null;
  }
}

export function hasTheory(subject: string, topic: string): boolean {
  return fs.existsSync(path.join(root, subject, "theory", `${topic}.md`));
}

/**
 * Все конспекты предмета разом: `{ [slug темы]: markdown }`.
 * Нужен тестнику — он показывает теорию под заданием и не может ходить
 * в файловую систему, потому что работает в браузере. Страница читает
 * конспекты на сервере и отдаёт их клиенту одним пропсом.
 * Только для серверных компонентов.
 */
export function loadSubjectTheory(subject: string, topics: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const topic of topics) {
    const md = loadTheory(subject, topic);
    if (md) out[topic] = md;
  }
  return out;
}
