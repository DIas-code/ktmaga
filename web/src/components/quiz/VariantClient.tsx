"use client";

import Link from "next/link";
import { useState } from "react";
import type { Question, Subject } from "@/lib/types";
import { accentClasses, cx, difficultyClasses } from "@/lib/accent";
import { LEVELS, coverableDuration } from "@/lib/exam";
import QuizRunner from "./QuizRunner";

interface Props {
  subject: Subject;
  questions: Question[];
  number: number;
  /** Сколько заданий восстановлено из пробников ЦЕНТ */
  fromMocks: number;
}

export default function VariantClient({ subject, questions, number, fromMocks }: Props) {
  const [started, setStarted] = useState(false);
  const [round, setRound] = useState(0);
  const spec = subject.spec;
  const accent = accentClasses[subject.accent];

  if (!spec) return null;

  // Время пересчитано без блоков, которые тренажёр не покрывает (аудирование).
  const minutes = coverableDuration(subject);
  const excludedBlocks = (spec.blocks ?? []).filter(
    (b) =>
      subject.topics.some((t) => t.block === b.slug) &&
      subject.topics.filter((t) => t.block === b.slug).every((t) => t.noBank),
  );

  if (started) {
    return (
      <QuizRunner
        key={round}
        subject={subject}
        questions={questions}
        mode="exam"
        durationMinutes={minutes}
        onRestart={() => {
          setStarted(false);
          setRound((r) => r + 1);
        }}
      />
    );
  }

  const byLevel = LEVELS.map((l) => ({
    level: l,
    n: questions.filter((q) => q.difficulty === l).length,
  }));

  const byTopic = subject.topics
    .map((t) => ({ topic: t, n: questions.filter((q) => q.topic === t.slug).length }))
    .filter((r) => r.n > 0);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-semibold">Вариант {number}</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Фиксированный набор из {questions.length} заданий, собранный строго по плану
        спецификации. В отличие от случайной сборки этот вариант не меняется между
        попытками — его можно пройти, разобрать ошибки и вернуться к нему позже.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {byLevel.map(({ level, n }) => (
          <span
            key={level}
            className={cx("rounded-full px-2.5 py-1 font-medium", difficultyClasses[level])}
          >
            {level}: {n} задан.
          </span>
        ))}
        <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          {minutes} мин
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          из пробников: {fromMocks} из {questions.length}
        </span>
      </div>

      <details className="mt-5 rounded-xl border border-slate-200 p-4 text-sm dark:border-slate-800">
        <summary className="cursor-pointer font-medium">Состав варианта по темам</summary>
        <ul className="mt-3 space-y-1.5">
          {byTopic.map(({ topic, n }) => (
            <li key={topic.slug} className="flex gap-3">
              <span className="w-6 shrink-0 text-right text-slate-400 tabular-nums">
                {topic.number}.
              </span>
              <span className="flex-1">{topic.title}</span>
              <span className="shrink-0 font-medium tabular-nums">{n}</span>
            </li>
          ))}
        </ul>
      </details>

      {excludedBlocks.length > 0 && (
        <p className="mt-5 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100">
          В вариант не входит {excludedBlocks.map((b) => b.title.toLowerCase()).join(", ")} —
          для него нужны аудиоматериалы. Время на этот блок из таймера тоже вычтено:
          {" "}{spec.durationMinutes} − {spec.durationMinutes - minutes} = {minutes} минут.
        </p>
      )}

      <p className="mt-5 text-sm text-slate-600 dark:text-slate-400">{spec.scoringRule}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setStarted(true)}
          className={cx("rounded-xl px-6 py-3 text-sm font-semibold transition", accent.button)}
        >
          Начать вариант {number} · {minutes} минут
        </button>
        <Link
          href={`/${subject.slug}/variants`}
          className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          К списку вариантов
        </Link>
      </div>
    </div>
  );
}
