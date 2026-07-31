"use client";

import { useCallback, useMemo, useState } from "react";
import type { Question, Subject } from "@/lib/types";
import {
  LEVELS,
  buildVariant,
  excludedTopics,
  targetDuration,
  targetSize,
  variantTopics,
} from "@/lib/exam";
import { accentClasses, cx, difficultyClasses } from "@/lib/accent";
import QuizRunner from "./QuizRunner";

export default function ExamClient({
  subject,
  bank,
}: {
  subject: Subject;
  bank: Question[];
}) {
  const spec = subject.spec;
  const accent = accentClasses[subject.accent];

  /**
   * Блоки, которые можно сдать отдельно: спецификация задаёт для них своё время
   * и по ним есть хотя бы одна покрываемая заданиями тема.
   */
  const timedBlocks = useMemo(
    () =>
      (spec?.blocks ?? []).filter(
        (b) =>
          b.durationMinutes !== undefined &&
          subject.topics.some((t) => t.block === b.slug && !t.noBank),
      ),
    [spec, subject.topics],
  );

  const [block, setBlock] = useState<string | undefined>(undefined);
  const [variant, setVariant] = useState<Question[] | null>(null);
  const [round, setRound] = useState(0);

  const start = useCallback(() => {
    setVariant(buildVariant(subject, bank, block));
    setRound((r) => r + 1);
  }, [subject, bank, block]);

  if (!spec) return null;

  if (variant) {
    const planned = targetSize(subject, block);
    const short = variant.length < planned;
    return (
      <>
        {short && (
          <p className="mb-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100">
            В варианте {variant.length} заданий вместо {planned} по спецификации — в банке пока
            меньше подходящих заданий. Распределение по уровням при этом сохранено.
          </p>
        )}
        <QuizRunner
          key={round}
          subject={subject}
          questions={variant}
          mode="exam"
          block={block}
          durationMinutes={targetDuration(subject, block)}
          onRestart={start}
        />
      </>
    );
  }

  const topics = variantTopics(subject, block);
  const excluded = excludedTopics(subject, block);
  const scopeBank = bank.filter((q) => topics.some((t) => t.slug === q.topic));
  const size = targetSize(subject, block);
  const minutes = targetDuration(subject, block);
  const activeBlock = spec.blocks?.find((b) => b.slug === block);

  const perLevel = LEVELS.map((level) => ({
    level,
    planned: topics.reduce((n, t) => n + (t.plan[level] ?? 0), 0),
    available: scopeBank.filter((q) => q.difficulty === level).length,
  }));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-lg font-semibold">Пробный вариант</h2>

      {timedBlocks.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium">Что сдаём</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Спецификация отводит каждому блоку своё время, поэтому их можно сдавать по отдельности.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setBlock(undefined)}
              aria-pressed={block === undefined}
              className={cx(
                "rounded-full border px-3 py-1.5 text-sm transition",
                block === undefined
                  ? "border-transparent " + accent.chip
                  : "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
              )}
            >
              Весь тест · {spec.totalQuestions} задан. · {spec.durationMinutes} мин
            </button>
            {timedBlocks.map((b) => (
              <button
                key={b.slug}
                type="button"
                onClick={() => setBlock(b.slug)}
                aria-pressed={block === b.slug}
                className={cx(
                  "rounded-full border px-3 py-1.5 text-sm transition",
                  block === b.slug
                    ? "border-transparent " + accent.chip
                    : "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
                )}
              >
                {b.title} · {b.questions} задан. · {b.durationMinutes} мин
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="mt-5 text-sm text-slate-600 dark:text-slate-400">
        {activeBlock
          ? `Блок «${activeBlock.title}»: ${size} заданий, ${minutes} минут.`
          : `Вариант собирается по спецификации: ${size} заданий, по каждой теме — столько,
             сколько положено, и с тем же распределением по уровням. Таймер на ${minutes} минут,
             по его истечении работа сдаётся автоматически.`}
      </p>

      <ul className="mt-4 space-y-2 text-sm">
        <li className="flex gap-2">
          <span aria-hidden className="text-slate-400">
            •
          </span>
          <span>{spec.scoringRule}</span>
        </li>
        <li className="flex gap-2">
          <span aria-hidden className="text-slate-400">
            •
          </span>
          <span>
            Разбор всех заданий и правильные ответы откроются после завершения, а не по ходу.
          </span>
        </li>
      </ul>

      {excluded.length > 0 && (
        <div className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100">
          <p className="font-semibold">
            Не входит в пробный вариант:{" "}
            {excluded.map((t) => t.title.toLowerCase()).join(", ")}
          </p>
          {excluded.map((t) => (
            <p key={t.slug} className="mt-1.5">
              {t.noBank}
            </p>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2 text-xs">
        {perLevel.map(({ level, planned, available }) => (
          <span
            key={level}
            className={cx("rounded-full px-2.5 py-1 font-medium", difficultyClasses[level])}
          >
            {level}: нужно {planned}, в банке {available}
          </span>
        ))}
      </div>

      <button
        type="button"
        disabled={scopeBank.length === 0}
        onClick={start}
        className={cx(
          "mt-6 rounded-xl px-6 py-3 text-sm font-semibold transition disabled:opacity-40",
          accent.button,
        )}
      >
        Начать · {minutes} минут
      </button>
    </div>
  );
}
