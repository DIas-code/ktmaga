"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { Difficulty, Question, Subject } from "@/lib/types";
import { shuffle } from "@/lib/exam";
import { accentClasses, cx, difficultyClasses } from "@/lib/accent";
import QuizRunner from "./QuizRunner";

const SIZES = [5, 10, 20, 0]; // 0 — все подходящие вопросы

export default function PracticeClient({
  subject,
  bank,
}: {
  subject: Subject;
  bank: Question[];
}) {
  const searchParams = useSearchParams();
  const accent = accentClasses[subject.accent];

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [levels, setLevels] = useState<Difficulty[]>(["A", "B", "C"]);
  const [size, setSize] = useState(10);
  const [session, setSession] = useState<Question[] | null>(null);
  const [round, setRound] = useState(0);

  // Переход со страницы темы: /practice?topic=joins.
  // Параметр появляется только после гидратации (страница отдаётся статикой),
  // поэтому подхватываем его во время рендера, а не в эффекте.
  const topicFromUrl = searchParams.get("topic");
  const [appliedUrlTopic, setAppliedUrlTopic] = useState<string | null>(null);
  if (topicFromUrl !== appliedUrlTopic) {
    setAppliedUrlTopic(topicFromUrl);
    if (topicFromUrl && subject.topics.some((t) => t.slug === topicFromUrl)) {
      setSelectedTopics([topicFromUrl]);
    }
  }

  /** Темы, по которым банк вообще может существовать (без аудирования и подобного). */
  const available = useMemo(() => subject.topics.filter((t) => !t.noBank), [subject.topics]);

  const pool = useMemo(() => {
    const slugs = selectedTopics.length ? selectedTopics : available.map((t) => t.slug);
    return bank.filter((q) => slugs.includes(q.topic) && levels.includes(q.difficulty));
  }, [bank, selectedTopics, levels, available]);

  /** Темы, сгруппированные по разделам теста, если спецификация их выделяет. */
  const groups = useMemo(() => {
    const blocks = subject.spec?.blocks;
    if (!blocks?.length) return [{ title: null as string | null, topics: available }];
    return blocks
      .map((b) => ({
        title: b.title,
        topics: available.filter((t) => t.block === b.slug),
      }))
      .filter((g) => g.topics.length > 0);
  }, [subject.spec, available]);

  function start() {
    const picked = shuffle(pool);
    setSession(size === 0 ? picked : picked.slice(0, size));
    setRound((r) => r + 1);
  }

  if (session) {
    return (
      <>
        <button
          type="button"
          onClick={() => setSession(null)}
          className="mb-4 text-sm text-slate-500 hover:underline dark:text-slate-400"
        >
          ← Изменить настройки тренировки
        </button>
        <QuizRunner
          key={round}
          subject={subject}
          questions={session}
          mode="practice"
          topics={selectedTopics.length ? selectedTopics : undefined}
          onRestart={() => setSession(null)}
        />
      </>
    );
  }

  const toggleTopic = (slug: string) =>
    setSelectedTopics((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );

  const toggleLevel = (level: Difficulty) =>
    setLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level],
    );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-semibold">Тренировка</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Без таймера: отвечаете, нажимаете «Проверить» и сразу видите разбор. Оценивание —
        по правилам спецификации, как в пробном варианте.
      </p>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold">Темы</legend>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Ничего не выбрано — берутся вопросы по всем темам.
        </p>
        {groups.map((group) => (
          <div key={group.title ?? "all"} className="mt-3">
            {group.title && (
              <p className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                {group.title}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {group.topics.map((topic) => {
                const count = bank.filter((q) => q.topic === topic.slug).length;
                const on = selectedTopics.includes(topic.slug);
                return (
                  <button
                    key={topic.slug}
                    type="button"
                    disabled={count === 0}
                    onClick={() => toggleTopic(topic.slug)}
                    aria-pressed={on}
                    className={cx(
                      "rounded-full border px-3 py-1.5 text-sm transition disabled:opacity-40",
                      on
                        ? "border-transparent " + accent.chip
                        : "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
                    )}
                  >
                    {topic.number}. {topic.title}
                    <span className="ml-1.5 text-xs opacity-60">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        {selectedTopics.length > 0 && (
          <button
            type="button"
            onClick={() => setSelectedTopics([])}
            className="mt-3 text-xs text-slate-500 hover:underline dark:text-slate-400"
          >
            Сбросить выбор тем
          </button>
        )}
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold">Уровень трудности</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {(["A", "B", "C"] as const).map((level) => {
            const on = levels.includes(level);
            return (
              <button
                key={level}
                type="button"
                onClick={() => toggleLevel(level)}
                aria-pressed={on}
                className={cx(
                  "rounded-full border px-3 py-1.5 text-sm font-medium transition",
                  on
                    ? "border-transparent " + difficultyClasses[level]
                    : "border-slate-300 text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
                )}
              >
                {level}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold">Сколько вопросов</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {SIZES.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setSize(n)}
              aria-pressed={size === n}
              className={cx(
                "rounded-full border px-3 py-1.5 text-sm font-medium transition",
                size === n
                  ? "border-transparent " + accent.chip
                  : "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
              )}
            >
              {n === 0 ? "все" : n}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
        Подходит вопросов: <strong className="tabular-nums">{pool.length}</strong>
        {pool.length > 0 && size > 0 && pool.length < size && " — тренировка будет короче"}
      </p>

      <button
        type="button"
        disabled={pool.length === 0}
        onClick={start}
        className={cx(
          "mt-4 rounded-xl px-6 py-3 text-sm font-semibold transition disabled:opacity-40",
          accent.button,
        )}
      >
        Начать тренировку
      </button>
    </div>
  );
}
