"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { AttemptResult, Question, Subject } from "@/lib/types";
import { formatTime, gradeAll, gradeAnswer } from "@/lib/exam";
import { saveAttempt } from "@/lib/storage";
import { accentClasses, cx } from "@/lib/accent";
import QuestionCard from "./QuestionCard";

interface Props {
  subject: Subject;
  questions: Question[];
  mode: "exam" | "practice";
  /** Темы, вошедшие в тренировку — попадают в историю попыток. */
  topics?: string[];
  /** slug блока, если сдаётся отдельный блок теста. */
  block?: string;
  /** Минут на вариант; для блока — время этого блока, а не всего теста. */
  durationMinutes?: number;
  /** Перезапуск: вернуться к настройке или собрать новый вариант. */
  onRestart: () => void;
}

export default function QuizRunner({
  subject,
  questions,
  mode,
  topics,
  block,
  durationMinutes,
  onRestart,
}: Props) {
  const spec = subject.spec;
  const answerMode = spec?.answerMode ?? "single";
  const accent = accentClasses[subject.accent];
  const limitMinutes = durationMinutes ?? spec?.durationMinutes ?? 0;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  /** id вопросов, проверенных на месте (только в тренировке) */
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [startedAt] = useState(() => Date.now());
  /** null — работа ещё не сдана; иначе момент сдачи */
  const [finishedAt, setFinishedAt] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(
    mode === "exam" ? limitMinutes * 60 : 0,
  );

  const finished = finishedAt !== null;
  const question = questions[current];
  const graded = useMemo(
    () => (finished && spec ? gradeAll(questions, answers, subject) : []),
    [finished, questions, answers, subject, spec],
  );

  const saved = useRef(false);
  // Стабильная ссылка: таймер ниже не должен перезапускаться на каждой перерисовке.
  const finish = useCallback(() => setFinishedAt((t) => t ?? Date.now()), []);

  // Таймер экзамена: по нулю работа сдаётся автоматически, как на настоящем КТ.
  useEffect(() => {
    if (mode !== "exam" || finished) return;
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          finish();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [mode, finished, finish]);

  // Результат пишем один раз: в dev-режиме эффект выполняется дважды.
  useEffect(() => {
    if (finishedAt === null || saved.current || !spec) return;
    saved.current = true;
    const answered = gradeAll(questions, answers, subject);
    const result: AttemptResult = {
      subject: subject.slug,
      mode,
      startedAt,
      finishedAt,
      answers: answered,
      score: answered.reduce((n, a) => n + a.score, 0),
      maxScore: questions.length * spec.maxScorePerQuestion,
      topics,
      block,
    };
    saveAttempt(result);
  }, [finishedAt, questions, answers, subject, mode, startedAt, topics, block, spec]);

  function toggle(optionIndex: number) {
    const id = question.id;
    setAnswers((prev) => {
      const cur = prev[id] ?? [];
      if (answerMode === "single") {
        return { ...prev, [id]: cur[0] === optionIndex ? [] : [optionIndex] };
      }
      return {
        ...prev,
        [id]: cur.includes(optionIndex)
          ? cur.filter((i) => i !== optionIndex)
          : [...cur, optionIndex].sort((a, b) => a - b),
      };
    });
  }

  const answeredCount = questions.filter((q) => (answers[q.id] ?? []).length > 0).length;

  if (!spec) return null;

  /* ---------------------------- Итоги ---------------------------- */

  if (finishedAt !== null) {
    const score = graded.reduce((n, a) => n + a.score, 0);
    const maxScore = questions.length * spec.maxScorePerQuestion;
    const percent = maxScore ? Math.round((score / maxScore) * 100) : 0;
    const fullyCorrect = graded.filter((a) => a.isCorrect).length;
    const partial = graded.filter((a) => !a.isCorrect && a.score > 0).length;
    const spent = Math.round((finishedAt - startedAt) / 1000);

    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold">
            {mode === "exam" ? "Пробный вариант завершён" : "Тренировка завершена"}
          </h2>

          <div className="mt-4 flex flex-wrap items-end gap-x-8 gap-y-4">
            <div>
              <div className="text-4xl font-bold tabular-nums">
                {score}
                <span className="text-xl font-medium text-slate-400"> / {maxScore}</span>
              </div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">баллов</div>
            </div>
            <div>
              <div className="text-4xl font-bold tabular-nums">{percent}%</div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">результат</div>
            </div>
            <div>
              <div className="text-4xl font-bold tabular-nums">{formatTime(spent)}</div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                затрачено из {limitMinutes}:00
              </div>
            </div>
          </div>

          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className={cx("h-full rounded-full transition-all", accent.bar)}
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
            <span>Полностью верно: {fullyCorrect}</span>
            {answerMode === "multiple" && <span>Частично (1 балл): {partial}</span>}
            <span>Без баллов: {graded.filter((a) => a.score === 0).length}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onRestart}
              className={cx("rounded-xl px-5 py-2.5 text-sm font-semibold transition", accent.button)}
            >
              {mode === "exam" ? "Новый вариант" : "Новая тренировка"}
            </button>
            <Link
              href={`/${subject.slug}`}
              className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              К темам раздела
            </Link>
            <Link
              href="/progress"
              className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              История попыток
            </Link>
          </div>
        </div>

        <h3 className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
          Разбор всех заданий
        </h3>
        <div className="space-y-4">
          {questions.map((q, i) => (
            <div key={q.id}>
              <div className="mb-1.5 flex items-center gap-2 text-xs">
                <span
                  className={cx(
                    "rounded-full px-2 py-0.5 font-semibold",
                    graded[i].isCorrect
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                      : graded[i].score > 0
                        ? "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300"
                        : "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
                  )}
                >
                  {graded[i].score} из {spec.maxScorePerQuestion} балл.
                </span>
                <Link
                  href={`/${subject.slug}/topics/${q.topic}`}
                  className="text-slate-500 hover:underline dark:text-slate-400"
                >
                  {subject.topics.find((t) => t.slug === q.topic)?.title ?? q.topic}
                </Link>
              </div>
              <QuestionCard
                question={q}
                number={i + 1}
                total={questions.length}
                mode={answerMode}
                selected={answers[q.id] ?? []}
                onToggle={() => {}}
                revealed
                locked
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* --------------------------- Прохождение --------------------------- */

  const isChecked = checked.has(question.id);
  const lowTime = mode === "exam" && secondsLeft <= 300;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        {mode === "exam" && (
          <div
            className={cx(
              "rounded-xl px-4 py-2 font-mono text-xl font-bold tabular-nums",
              lowTime
                ? "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300"
                : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100",
            )}
            role="timer"
            aria-live="off"
          >
            {formatTime(secondsLeft)}
          </div>
        )}
        <div className="text-sm text-slate-600 dark:text-slate-400">
          Отвечено {answeredCount} из {questions.length}
        </div>
        <button
          type="button"
          onClick={finish}
          className="ml-auto rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          Завершить и проверить
        </button>
      </div>

      {/* Навигатор по вопросам */}
      <div className="flex flex-wrap gap-1.5">
        {questions.map((q, i) => {
          const answered = (answers[q.id] ?? []).length > 0;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Вопрос ${i + 1}`}
              aria-current={i === current}
              className={cx(
                "size-8 rounded-lg text-xs font-semibold tabular-nums transition",
                i === current
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : answered
                    ? "bg-sky-100 text-sky-700 hover:bg-sky-200 dark:bg-sky-500/20 dark:text-sky-300"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700",
              )}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <QuestionCard
        question={question}
        number={current + 1}
        total={questions.length}
        mode={answerMode}
        selected={answers[question.id] ?? []}
        onToggle={toggle}
        revealed={isChecked}
        locked={isChecked}
      />

      {isChecked && (
        <p className="text-sm text-slate-600 dark:text-slate-400">
          За это задание:{" "}
          <strong>
            {gradeAnswer(question, answers[question.id] ?? [], subject).score} из{" "}
            {spec.maxScorePerQuestion}
          </strong>
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={current === 0}
          onClick={() => setCurrent((i) => i - 1)}
          className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          ← Назад
        </button>

        {mode === "practice" && !isChecked && (
          <button
            type="button"
            disabled={(answers[question.id] ?? []).length === 0}
            onClick={() => setChecked((s) => new Set(s).add(question.id))}
            className={cx(
              "rounded-xl px-5 py-2.5 text-sm font-semibold transition disabled:opacity-40",
              accent.button,
            )}
          >
            Проверить
          </button>
        )}

        {current < questions.length - 1 ? (
          <button
            type="button"
            onClick={() => setCurrent((i) => i + 1)}
            className="ml-auto rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Далее →
          </button>
        ) : (
          <button
            type="button"
            onClick={finish}
            className={cx(
              "ml-auto rounded-xl px-5 py-2.5 text-sm font-semibold transition",
              accent.button,
            )}
          >
            Показать результат
          </button>
        )}
      </div>
    </div>
  );
}
