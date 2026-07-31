"use client";

import { Suspense, use, useMemo, useState } from "react";
import type { Subject } from "@/lib/types";
import { loadQuestions } from "@/content/client-banks";
import { accentClasses, cx, difficultyClasses } from "@/lib/accent";
import { LEVELS, difficultyLabel } from "@/lib/exam";

const PAGE = 25;
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function QuestionBrowser({ subject }: { subject: Subject }) {
  return (
    <Suspense
      fallback={
        <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          Загружаем банк заданий…
        </p>
      }
    >
      <Browser subject={subject} />
    </Suspense>
  );
}

function Browser({ subject }: { subject: Subject }) {
  const questions = use(loadQuestions(subject.slug));
  const accent = accentClasses[subject.accent];

  const [topic, setTopic] = useState<string>("");
  const [levels, setLevels] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [revealAll, setRevealAll] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return questions.filter((item) => {
      if (topic && item.topic !== topic) return false;
      if (levels.length && !levels.includes(item.difficulty)) return false;
      if (!q) return true;
      return (
        item.text.toLowerCase().includes(q) ||
        item.options.some((o) => o.toLowerCase().includes(q))
      );
    });
  }, [questions, topic, levels, query]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const current = Math.min(page, pages - 1);
  const shown = filtered.slice(current * PAGE, current * PAGE + PAGE);

  const reset = () => setPage(0);
  const toggleLevel = (l: string) => {
    setLevels((prev) => (prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l]));
    reset();
  };
  const toggleOpen = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div>
      {/* ------------------------------ фильтры ------------------------------ */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <label className="block">
          <span className="text-sm font-medium">Поиск по тексту задания</span>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              reset();
            }}
            placeholder="например: хеш-таблица, сложность, JOIN"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-slate-500"
          />
        </label>

        <fieldset className="mt-5">
          <legend className="text-sm font-medium">Тема</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setTopic("");
                reset();
              }}
              aria-pressed={topic === ""}
              className={cx(
                "rounded-full border px-3 py-1.5 text-sm transition",
                topic === ""
                  ? "border-transparent " + accent.chip
                  : "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
              )}
            >
              Все темы <span className="opacity-60">{questions.length}</span>
            </button>
            {subject.topics.map((t) => {
              const n = questions.filter((q) => q.topic === t.slug).length;
              if (n === 0) return null;
              return (
                <button
                  key={t.slug}
                  type="button"
                  onClick={() => {
                    setTopic(t.slug);
                    reset();
                  }}
                  aria-pressed={topic === t.slug}
                  className={cx(
                    "rounded-full border px-3 py-1.5 text-sm transition",
                    topic === t.slug
                      ? "border-transparent " + accent.chip
                      : "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
                  )}
                >
                  {t.number}. {t.title} <span className="opacity-60">{n}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="text-sm font-medium">Уровень</legend>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {LEVELS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => toggleLevel(l)}
                aria-pressed={levels.includes(l)}
                className={cx(
                  "rounded-full border px-3 py-1.5 text-sm font-medium transition",
                  levels.includes(l)
                    ? "border-transparent " + difficultyClasses[l]
                    : "border-slate-300 text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
                )}
              >
                {l} — {difficultyLabel[l]}
              </button>
            ))}
            <label className="ml-auto flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={revealAll}
                onChange={(e) => setRevealAll(e.target.checked)}
                className="size-4 accent-sky-600"
              />
              Показать все ответы
            </label>
          </div>
        </fieldset>
      </div>

      {/* ------------------------------ результат ------------------------------ */}
      <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
        Найдено <strong className="tabular-nums">{filtered.length}</strong> заданий
        {filtered.length > PAGE && ` · страница ${current + 1} из ${pages}`}
      </p>

      <ol className="mt-3 space-y-3">
        {shown.map((item, i) => {
          const open = revealAll || openIds.has(item.id);
          return (
            <li
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium tabular-nums">
                  #{current * PAGE + i + 1}
                </span>
                <span
                  className={cx(
                    "rounded-full px-2 py-0.5 font-medium",
                    difficultyClasses[item.difficulty],
                  )}
                >
                  {item.difficulty}
                </span>
                <span>
                  {subject.topics.find((t) => t.slug === item.topic)?.title ?? item.topic}
                </span>
                <code className="ml-auto font-mono opacity-50">{item.id}</code>
              </div>

              {item.passage && (
                <p className="mt-3 max-h-40 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed whitespace-pre-line text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400">
                  {item.passage.value}
                </p>
              )}

              <p className="mt-3 font-medium text-pretty">{item.text}</p>

              {item.code && (
                <pre className="mt-2 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-3 font-mono text-xs leading-6 text-slate-100">
                  <code>{item.code.value}</code>
                </pre>
              )}

              <ul className="mt-3 space-y-1.5 text-sm">
                {item.options.map((opt, oi) => {
                  const isRight = item.correct.includes(oi);
                  return (
                    <li
                      key={oi}
                      className={cx(
                        "flex gap-2.5 rounded-lg border p-2.5",
                        open && isRight
                          ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10"
                          : "border-slate-200 dark:border-slate-700",
                      )}
                    >
                      <span
                        className={cx(
                          "grid size-5 shrink-0 place-items-center rounded text-[11px] font-bold",
                          open && isRight
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
                        )}
                        aria-hidden
                      >
                        {open && isRight ? "✓" : LETTERS[oi]}
                      </span>
                      <span className="min-w-0 flex-1 self-center">{opt}</span>
                    </li>
                  );
                })}
              </ul>

              {open ? (
                <p className="mt-3 rounded-xl border-l-4 border-sky-500 bg-sky-50 p-3 text-sm dark:bg-sky-500/10">
                  {item.explanation}
                </p>
              ) : (
                <button
                  type="button"
                  onClick={() => toggleOpen(item.id)}
                  className="mt-3 text-sm font-medium text-sky-600 hover:underline dark:text-sky-400"
                >
                  Показать ответ и разбор
                </button>
              )}
            </li>
          );
        })}
      </ol>

      {pages > 1 && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            disabled={current === 0}
            onClick={() => setPage(current - 1)}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            ← Назад
          </button>
          <span className="px-3 text-sm text-slate-600 tabular-nums dark:text-slate-400">
            {current + 1} / {pages}
          </span>
          <button
            type="button"
            disabled={current >= pages - 1}
            onClick={() => setPage(current + 1)}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Далее →
          </button>
        </div>
      )}
    </div>
  );
}
