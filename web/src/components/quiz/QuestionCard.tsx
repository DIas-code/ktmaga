"use client";

import type { AnswerMode, Question } from "@/lib/types";
import { cx, difficultyClasses } from "@/lib/accent";
import { difficultyLabel } from "@/lib/exam";
import { questionLocation } from "@/lib/source";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

interface Props {
  question: Question;
  number: number;
  total: number;
  mode: AnswerMode;
  selected: number[];
  onToggle: (optionIndex: number) => void;
  /** Показывать правильные ответы и разбор (после проверки или в итогах). */
  revealed: boolean;
  /** Заблокировать выбор вариантов. */
  locked: boolean;
}

export default function QuestionCard({
  question,
  number,
  total,
  mode,
  selected,
  onToggle,
  revealed,
  locked,
}: Props) {
  const location = questionLocation(question.id);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span className="font-semibold text-slate-700 dark:text-slate-300">
          Вопрос {number} из {total}
        </span>
        <span
          className={cx(
            "rounded-full px-2 py-0.5 font-medium",
            difficultyClasses[question.difficulty],
          )}
        >
          {question.difficulty} · {difficultyLabel[question.difficulty]}
        </span>
        {mode === "multiple" && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800">
            один или несколько ответов
          </span>
        )}
      </div>

      {/* Откуда задание — чтобы можно было открыть исходник и сверить. */}
      <p
        className="mt-1.5 font-mono text-[11px] break-all text-slate-400 dark:text-slate-500"
        title={
          location.exact
            ? "Задание найдено на этом скриншоте распознаванием текста"
            : "Точный файл не установлен: при импорте он не сохранялся"
        }
      >
        {location.exact ? location.path : `≈ ${location.path}`}
      </p>

      {question.passage && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
          {question.passage.title && (
            <p className="mb-2 text-sm font-semibold">{question.passage.title}</p>
          )}
          <p className="text-sm leading-relaxed whitespace-pre-line text-slate-700 dark:text-slate-300">
            {question.passage.value}
          </p>
        </div>
      )}

      <p className="mt-3 text-[15px] leading-relaxed font-medium text-pretty">{question.text}</p>

      {question.code && (
        <pre className="mt-3 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 p-4 font-mono text-[13px] leading-6 text-slate-100">
          <code>{question.code.value}</code>
        </pre>
      )}

      <ul className="mt-4 space-y-2">
        {question.options.map((option, i) => {
          const isSelected = selected.includes(i);
          const isCorrect = question.correct.includes(i);

          const state = !revealed
            ? isSelected
              ? "selected"
              : "idle"
            : isCorrect
              ? "correct"
              : isSelected
                ? "wrong"
                : "idle";

          return (
            <li key={i}>
              <button
                type="button"
                disabled={locked}
                onClick={() => onToggle(i)}
                aria-pressed={isSelected}
                className={cx(
                  "flex w-full gap-3 rounded-xl border p-3 text-left text-sm transition",
                  locked ? "cursor-default" : "cursor-pointer",
                  state === "idle" &&
                    "border-slate-200 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-800/60",
                  state === "selected" &&
                    "border-sky-500 bg-sky-50 dark:border-sky-500 dark:bg-sky-500/10",
                  state === "correct" &&
                    "border-emerald-500 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-500/10",
                  state === "wrong" &&
                    "border-rose-500 bg-rose-50 dark:border-rose-500 dark:bg-rose-500/10",
                )}
              >
                <span
                  className={cx(
                    "grid size-6 shrink-0 place-items-center text-xs font-bold",
                    mode === "multiple" ? "rounded-md" : "rounded-full",
                    state === "correct"
                      ? "bg-emerald-500 text-white"
                      : state === "wrong"
                        ? "bg-rose-500 text-white"
                        : state === "selected"
                          ? "bg-sky-500 text-white"
                          : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
                  )}
                  aria-hidden
                >
                  {state === "correct" ? "✓" : state === "wrong" ? "✕" : LETTERS[i]}
                </span>
                <span className="min-w-0 flex-1 self-center whitespace-pre-wrap">{option}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {revealed && (
        <div className="mt-4 rounded-xl border-l-4 border-sky-500 bg-sky-50 p-4 text-sm dark:bg-sky-500/10">
          <p className="font-semibold text-sky-900 dark:text-sky-200">Разбор</p>
          <p className="mt-1 text-slate-700 dark:text-slate-300">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
