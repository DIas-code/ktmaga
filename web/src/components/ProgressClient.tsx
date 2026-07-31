"use client";

import Link from "next/link";
import { getSubject, subjects } from "@/content";
import type { AttemptResult } from "@/lib/types";
import { clearAttempts, useAttempts, useReadTopics } from "@/lib/storage";
import { accentClasses, cx } from "@/lib/accent";
import { formatTime } from "@/lib/exam";

const dateFormat = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
});

export default function ProgressClient() {
  const attempts = useAttempts();
  const readTopics = useReadTopics() ?? [];

  // До гидратации данных из localStorage нет — не мигаем пустым состоянием.
  if (attempts === null) return null;

  const readySubjects = subjects.filter((s) => s.ready);

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
          Пройденные темы
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {subjects.map((subject) => {
            const done = subject.topics.filter((t) =>
              readTopics.includes(`${subject.slug}/${t.slug}`),
            ).length;
            const percent = Math.round((done / subject.topics.length) * 100);
            const accent = accentClasses[subject.accent];

            return (
              <Link
                key={subject.slug}
                href={`/${subject.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-medium">{subject.shortTitle}</span>
                  <span className="text-sm text-slate-500 tabular-nums dark:text-slate-400">
                    {done} / {subject.topics.length}
                  </span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div
                    className={cx("h-full rounded-full transition-all", accent.bar)}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
          Средний результат
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {readySubjects.map((subject) => {
            const own = attempts.filter((a) => a.subject === subject.slug);
            const exams = own.filter((a) => a.mode === "exam");
            const avg = (list: AttemptResult[]) =>
              list.length
                ? Math.round(
                    (list.reduce((n, a) => n + a.score / (a.maxScore || 1), 0) / list.length) * 100,
                  )
                : null;
            const best = exams.length
              ? Math.max(...exams.map((a) => Math.round((a.score / (a.maxScore || 1)) * 100)))
              : null;

            return (
              <div
                key={subject.slug}
                className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="font-medium">{subject.shortTitle}</div>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <Metric label="попыток" value={String(own.length)} />
                  <Metric
                    label="средний"
                    value={avg(own) === null ? "—" : `${avg(own)}%`}
                  />
                  <Metric
                    label="лучший вариант"
                    value={best === null ? "—" : `${best}%`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            История попыток
          </h2>
          {attempts.length > 0 && (
            <button
              type="button"
              onClick={clearAttempts}
              className="text-xs text-slate-500 hover:text-rose-600 hover:underline dark:text-slate-400"
            >
              Очистить историю
            </button>
          )}
        </div>

        {attempts.length === 0 ? (
          <p className="mt-4 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            Попыток пока нет. Начните с{" "}
            <Link href="/db/practice" className="font-medium text-sky-600 hover:underline">
              тренировки по базам данных
            </Link>{" "}
            или{" "}
            <Link href="/algo/practice" className="font-medium text-violet-600 hover:underline">
              по алгоритмам
            </Link>
            .
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {attempts.map((a, i) => {
              const subject = getSubject(a.subject);
              const percent = Math.round((a.score / (a.maxScore || 1)) * 100);
              return (
                <li
                  key={`${a.finishedAt}-${i}`}
                  className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="w-28 shrink-0 text-slate-500 tabular-nums dark:text-slate-400">
                    {dateFormat.format(a.finishedAt)}
                  </span>
                  <span className="font-medium">{subject?.shortTitle ?? a.subject}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    {a.mode === "exam" ? "вариант" : "тренировка"}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {a.answers.length} задан. · {formatTime((a.finishedAt - a.startedAt) / 1000)}
                  </span>
                  <span className="ml-auto font-semibold tabular-nums">
                    {a.score} / {a.maxScore}
                  </span>
                  <span
                    className={cx(
                      "w-14 rounded-full px-2 py-0.5 text-center text-xs font-semibold tabular-nums",
                      percent >= 70
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                        : percent >= 40
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300"
                          : "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
                    )}
                  >
                    {percent}%
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-lg font-bold tabular-nums">{value}</div>
      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  );
}
