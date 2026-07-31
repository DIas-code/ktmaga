"use client";

import Link from "next/link";
import { Suspense, use, useMemo, useState } from "react";
import type { Subject } from "@/lib/types";
import { loadQuestions } from "@/content/client-banks";
import { dedupeQuestions } from "@/lib/dedupe";
import { accentClasses, cx, difficultyClasses } from "@/lib/accent";
import { LEVELS, difficultyLabel, gradeAnswer, shuffle } from "@/lib/exam";
import {
  clearBankProgress,
  loadBankProgress,
  saveBankProgress,
  type BankProgress,
} from "@/lib/storage";
import QuestionCard from "./QuestionCard";
import TheoryBlocks from "@/components/TheoryBlocks";
import { buildTheoryQuery } from "@/lib/theory-blocks";
import { questionImage, questionSource } from "@/lib/source";

interface Props {
  subject: Subject;
  /** Конспекты предмета: { slug темы: markdown }. Читаются на сервере. */
  theory: Record<string, string>;
}

export default function BankClient(props: Props) {
  return (
    <Suspense
      fallback={
        <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          Загружаем банк заданий…
        </p>
      }
    >
      <Runner {...props} />
    </Suspense>
  );
}

function Runner({ subject, theory }: Props) {
  const all = use(loadQuestions(subject.slug));
  const accent = accentClasses[subject.accent];
  const mode = subject.spec?.answerMode ?? "single";

  /** Банк без повторов — считается один раз на весь сеанс. */
  const unique = useMemo(() => dedupeQuestions(all), [all]);

  const [topic, setTopic] = useState("");
  const [levels, setLevels] = useState<string[]>([]);
  const [order, setOrder] = useState<string[] | null>(null);

  const filtered = useMemo(() => {
    const base = unique.filter(
      (q) =>
        (!topic || q.topic === topic) &&
        (levels.length === 0 || levels.includes(q.difficulty)),
    );
    if (!order) return base;
    const rank = new Map(order.map((id, i) => [id, i]));
    // Задания вне сохранённого порядка (сменился фильтр) уходят в конец.
    return base
      .slice()
      .sort((a, b) => (rank.get(a.id) ?? Infinity) - (rank.get(b.id) ?? Infinity));
  }, [unique, topic, levels, order]);

  // Прогресс читается один раз при монтировании: дальше источник истины —
  // состояние компонента, иначе каждый ответ дёргал бы localStorage на чтение.
  const [progress, setProgress] = useState<BankProgress>(() =>
    loadBankProgress(subject.slug),
  );
  const [index, setIndex] = useState(() => loadBankProgress(subject.slug).index);
  const [selected, setSelected] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [jump, setJump] = useState("");

  const correct = useMemo(() => new Set(progress.correct), [progress.correct]);
  const wrong = useMemo(() => new Set(progress.wrong), [progress.wrong]);

  const total = filtered.length;
  const current = total > 0 ? filtered[Math.min(index, total - 1)] : undefined;

  const persist = (next: BankProgress) => {
    setProgress(next);
    saveBankProgress(subject.slug, next);
  };

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, total - 1));
    setIndex(clamped);
    setSelected([]);
    setChecked(false);
    persist({ ...progress, index: clamped });
  };

  const toggleOption = (i: number) => {
    if (checked) return;
    setSelected((prev) =>
      mode === "multiple"
        ? prev.includes(i)
          ? prev.filter((x) => x !== i)
          : [...prev, i]
        : [i],
    );
  };

  const check = () => {
    if (!current || selected.length === 0) return;
    setChecked(true);
    const graded = gradeAnswer(current, selected, subject);
    const nextCorrect = progress.correct.filter((id) => id !== current.id);
    const nextWrong = progress.wrong.filter((id) => id !== current.id);
    if (graded.isCorrect) nextCorrect.push(current.id);
    else nextWrong.push(current.id);
    persist({ index, correct: nextCorrect, wrong: nextWrong });
  };

  const resetFilters = () => {
    setIndex(0);
    setSelected([]);
    setChecked(false);
  };

  const answered = correct.size + wrong.size;
  const topicTitle = (slug: string) =>
    subject.topics.find((t) => t.slug === slug)?.title ?? slug;

  return (
    <div>
      {/* ------------------------------ шапка ------------------------------ */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span>
            <strong className="tabular-nums">{unique.length}</strong> уникальных заданий
            {unique.length !== all.length && (
              <span className="text-slate-500 dark:text-slate-400">
                {" "}
                · {all.length - unique.length} повторов убрано
              </span>
            )}
          </span>
          <span className="text-emerald-600 dark:text-emerald-400">
            верно <strong className="tabular-nums">{correct.size}</strong>
          </span>
          <span className="text-rose-600 dark:text-rose-400">
            неверно <strong className="tabular-nums">{wrong.size}</strong>
          </span>
          {answered > 0 && (
            <button
              type="button"
              onClick={() => {
                clearBankProgress(subject.slug);
                setProgress({ index: 0, correct: [], wrong: [] });
                resetFilters();
              }}
              className="ml-auto text-xs text-slate-500 hover:underline dark:text-slate-400"
            >
              сбросить прогресс
            </button>
          )}
        </div>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className={cx("h-full rounded-full transition-all", accent.bar)}
            style={{ width: `${unique.length ? (answered / unique.length) * 100 : 0}%` }}
          />
        </div>

        {/* фильтры */}
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setTopic("");
              resetFilters();
            }}
            aria-pressed={topic === ""}
            className={cx(
              "rounded-full border px-3 py-1.5 text-xs transition",
              topic === ""
                ? "border-transparent " + accent.chip
                : "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
            )}
          >
            Все темы <span className="opacity-60">{unique.length}</span>
          </button>
          {subject.topics.map((t) => {
            const n = unique.filter((q) => q.topic === t.slug).length;
            if (n === 0) return null;
            return (
              <button
                key={t.slug}
                type="button"
                onClick={() => {
                  setTopic(t.slug);
                  resetFilters();
                }}
                aria-pressed={topic === t.slug}
                className={cx(
                  "rounded-full border px-3 py-1.5 text-xs transition",
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

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {LEVELS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => {
                setLevels((prev) =>
                  prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l],
                );
                resetFilters();
              }}
              aria-pressed={levels.includes(l)}
              className={cx(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                levels.includes(l)
                  ? "border-transparent " + difficultyClasses[l]
                  : "border-slate-300 text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
              )}
            >
              {l} — {difficultyLabel[l]}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setOrder(shuffle(filtered.map((q) => q.id)));
              resetFilters();
            }}
            className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Перемешать
          </button>
          {order && (
            <button
              type="button"
              onClick={() => {
                setOrder(null);
                resetFilters();
              }}
              className="text-xs text-slate-500 hover:underline dark:text-slate-400"
            >
              вернуть исходный порядок
            </button>
          )}
        </div>
      </div>

      {/* ------------------------------ задание ------------------------------ */}
      {!current ? (
        <p className="mt-6 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
          Под выбранные фильтры не попало ни одного задания.
        </p>
      ) : (
        <>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <button
              type="button"
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
              className="rounded-xl border border-slate-300 px-4 py-2 font-medium transition hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              ← Назад
            </button>
            <span className="text-slate-600 tabular-nums dark:text-slate-400">
              {index + 1} / {total}
            </span>
            <button
              type="button"
              disabled={index >= total - 1}
              onClick={() => goTo(index + 1)}
              className="rounded-xl border border-slate-300 px-4 py-2 font-medium transition hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Далее →
            </button>

            <form
              className="ml-auto flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const n = Number(jump);
                if (Number.isFinite(n) && n >= 1) goTo(n - 1);
                setJump("");
              }}
            >
              <input
                value={jump}
                onChange={(e) => setJump(e.target.value)}
                inputMode="numeric"
                placeholder="№"
                aria-label="Перейти к заданию"
                className="w-20 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-500 dark:border-slate-700 dark:bg-slate-950"
              />
              <button
                type="submit"
                className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Перейти
              </button>
            </form>
          </div>

          <div className="mt-3">
            <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>{topicTitle(current.topic)}</span>
              {correct.has(current.id) && (
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  отвечено верно
                </span>
              )}
              {wrong.has(current.id) && (
                <span className="rounded-full bg-rose-100 px-2 py-0.5 font-medium text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">
                  была ошибка
                </span>
              )}
            </div>

            <QuestionCard
              question={current}
              number={index + 1}
              total={total}
              mode={mode}
              selected={selected}
              onToggle={toggleOption}
              revealed={checked}
              locked={checked}
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {!checked ? (
              <button
                type="button"
                disabled={selected.length === 0}
                onClick={check}
                className={cx(
                  "rounded-xl px-6 py-3 text-sm font-semibold transition disabled:opacity-40",
                  accent.button,
                )}
              >
                Проверить
              </button>
            ) : (
              <button
                type="button"
                disabled={index >= total - 1}
                onClick={() => goTo(index + 1)}
                className={cx(
                  "rounded-xl px-6 py-3 text-sm font-semibold transition disabled:opacity-40",
                  accent.button,
                )}
              >
                Следующее задание →
              </button>
            )}
          </div>

          {/* Происхождение задания — чтобы можно было сверить с исходником. */}
          {checked && (
            <details className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm dark:border-slate-800 dark:bg-slate-900">
              <summary className="cursor-pointer text-slate-600 dark:text-slate-400">
                Источник задания:{" "}
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {questionSource(current.id).label}
                </span>
              </summary>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {questionSource(current.id).origin}
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                id задания: <code className="font-mono">{current.id}</code>
              </p>
              {questionImage(current.id) ? (
                <a
                  href={questionImage(current.id)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={questionImage(current.id)}
                    alt={`Скриншот исходного задания ${current.id}`}
                    className="max-w-full rounded-lg border border-slate-200 dark:border-slate-700"
                  />
                  <span className="mt-1 block text-xs text-sky-600 hover:underline dark:text-sky-400">
                    открыть скриншот целиком →
                  </span>
                </a>
              ) : (
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Скриншот к этому заданию не привязан: при импорте соответствие
                  «задание → файл» не сохранялось.
                </p>
              )}
            </details>
          )}

          {/* Теория появляется только после ответа — иначе это подсказка. */}
          {checked && theory[current.topic] && (
            <TheoryBlocks
              key={current.id}
              markdown={theory[current.topic]}
              topicSlug={current.topic}
              topicTitle={topicTitle(current.topic)}
              query={buildTheoryQuery(current.text, current.options, current.correct)}
            />
          )}

          {checked && !theory[current.topic] && (
            <p className="mt-4 rounded-xl border border-dashed border-slate-300 p-4 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
              Конспект по теме «{topicTitle(current.topic)}» ещё не написан.
            </p>
          )}

          <div className="mt-8 border-t border-slate-200 pt-5 text-sm dark:border-slate-800">
            <Link
              href={`/${subject.slug}`}
              className="text-slate-500 hover:underline dark:text-slate-400"
            >
              ← К разделу «{subject.shortTitle}»
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
