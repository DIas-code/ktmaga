import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSubject, getVariants, getVariantQuestions, subjects } from "@/content";
import { accentClasses, difficultyClasses } from "@/lib/accent";
import { LEVELS, coverableDuration } from "@/lib/exam";
import NotReadyNotice from "@/components/NotReadyNotice";

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[subject]/variants">,
): Promise<Metadata> {
  const { subject } = await props.params;
  return { title: `Варианты тестов — ${getSubject(subject)?.shortTitle ?? ""}` };
}

export default async function VariantsPage(props: PageProps<"/[subject]/variants">) {
  const { subject: slug } = await props.params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const accent = accentClasses[subject.accent];
  const variants = getVariants(subject.slug);
  const spec = subject.spec;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-slate-500 dark:text-slate-400">
        <Link href={`/${subject.slug}`} className="hover:underline">
          {subject.shortTitle}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">Варианты</span>
      </nav>

      <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        Готовые варианты · {subject.title}
      </h1>

      {!subject.ready || !spec ? (
        <div className="mt-6">
          <NotReadyNotice subject={subject} />
        </div>
      ) : (
        <>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Каждый вариант собран строго по плану спецификации: по каждой теме взято
            столько заданий каждого уровня трудности, сколько положено. В отличие от
            случайной сборки состав варианта зафиксирован — можно пройти его,
            разобрать ошибки и вернуться к тому же набору заданий позже.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {variants.map((v) => {
              const questions = getVariantQuestions(subject.slug, v.number);
              const pct = Math.round((v.fromMocks / questions.length) * 100);
              return (
                <Link
                  key={v.number}
                  href={`/${subject.slug}/variants/${v.number}`}
                  className={`group rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-lg ${accent.ring} dark:border-slate-800 dark:bg-slate-900`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="text-lg font-semibold">Вариант {v.number}</h2>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {questions.length} задан. · {coverableDuration(subject)} мин
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                    {LEVELS.map((l) => {
                      const n = questions.filter((q) => q.difficulty === l).length;
                      return (
                        <span
                          key={l}
                          className={`rounded-full px-2 py-0.5 font-medium ${difficultyClasses[l]}`}
                        >
                          {l}: {n}
                        </span>
                      );
                    })}
                  </div>

                  <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                    Из разобранных пробников: {v.fromMocks} из {questions.length} ({pct}%)
                  </p>

                  <span className={`mt-4 block text-sm font-medium ${accent.text} group-hover:underline`}>
                    Пройти вариант →
                  </span>
                </Link>
              );
            })}
          </div>

          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 text-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="font-semibold">Чем варианты отличаются от других режимов</h2>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <span aria-hidden className="text-slate-400">•</span>
                <span>
                  <strong className="text-slate-800 dark:text-slate-200">Готовый вариант</strong> —
                  фиксированный набор заданий, одинаковый при каждом прохождении.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-slate-400">•</span>
                <span>
                  <strong className="text-slate-800 dark:text-slate-200">Пробный вариант</strong> —
                  собирается случайно из всего банка по тем же правилам, каждый раз новый.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-slate-400">•</span>
                <span>
                  <strong className="text-slate-800 dark:text-slate-200">Тренировка</strong> —
                  без таймера, с разбором сразу после каждого ответа.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Банк меньше, чем нужно на пять полностью непересекающихся вариантов, поэтому
              часть заданий встречается в нескольких вариантах. Задания раздавались по кругу,
              чтобы повторов было как можно меньше, а распределение по темам и уровням
              в каждом варианте точно соответствует спецификации.
            </p>
          </section>
        </>
      )}
    </div>
  );
}
