import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getQuestions,
  getSubject,
  getTopicQuestions,
  getUniqueQuestions,
  getVariants,
  plannedCount,
  subjects,
} from "@/content";
import { accentClasses, difficultyClasses } from "@/lib/accent";
import { hasTheory } from "@/lib/theory";
import TopicProgressBadge from "@/components/TopicProgressBadge";

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata(props: PageProps<"/[subject]">): Promise<Metadata> {
  const { subject } = await props.params;
  const found = getSubject(subject);
  return { title: found?.title ?? "Раздел" };
}

export default async function SubjectPage(props: PageProps<"/[subject]">) {
  const { subject: slug } = await props.params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const accent = accentClasses[subject.accent];
  const spec = subject.spec;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="text-sm text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">{subject.shortTitle}</span>
      </nav>

      <header className="mt-4 flex flex-wrap items-start gap-4">
        <span
          className={`grid size-12 shrink-0 place-items-center rounded-2xl text-xl ${accent.chip}`}
          aria-hidden
        >
          {subject.icon}
        </span>
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{subject.title}</h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">{subject.tagline}</p>
        </div>
      </header>

      {!subject.ready && (
        <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100">
          <p className="font-semibold">Раздел ещё не наполнен</p>
          <p className="mt-1.5">
            Официальной спецификации по этому блоку в проекте нет — поэтому здесь нет ни точного
            числа заданий, ни правил оценивания, ни конспектов. Темы ниже — ориентировочная
            разбивка, а не выдержка из документа.
          </p>
          <p className="mt-1.5">
            Добавьте файл спецификации в проект, и раздел заполнится так же, как «Базы данных»
            и «Алгоритмы».
          </p>
        </div>
      )}

      {spec && (
        <>
          <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <SpecCard label="Заданий в варианте" value={String(spec.totalQuestions)} />
            <SpecCard label="Время" value={`${spec.durationMinutes} мин`} />
            <SpecCard
              label="На одно задание"
              value={`${(spec.durationMinutes / spec.totalQuestions).toFixed(1).replace(".", ",")} мин`}
            />
            <SpecCard
              label="Максимум баллов"
              value={String(spec.totalQuestions * spec.maxScorePerQuestion)}
            />
          </section>

          <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold">Оценивание:</span>
              <span className="text-slate-600 dark:text-slate-400">{spec.scoringRule}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {(["A", "B", "C"] as const).map((level) => (
                <span
                  key={level}
                  className={`rounded-full px-2.5 py-1 font-medium ${difficultyClasses[level]}`}
                >
                  {level} — {spec.difficultyMix[level]} заданий (
                  {Math.round((spec.difficultyMix[level] / spec.totalQuestions) * 100)}%)
                </span>
              ))}
            </div>
          </section>

          <section className="mt-4 flex flex-wrap gap-3">
            <Link
              href={`/${subject.slug}/bank`}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${accent.button}`}
            >
              Полный тестник · {getUniqueQuestions(subject.slug).length} заданий
            </Link>
            <Link
              href={`/${subject.slug}/variants`}
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Готовые варианты · {getVariants(subject.slug).length} шт.
            </Link>
            <Link
              href={`/${subject.slug}/exam`}
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Случайный вариант · {spec.durationMinutes} мин
            </Link>
            <Link
              href={`/${subject.slug}/practice`}
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Тренировка по темам
            </Link>
            <Link
              href={`/${subject.slug}/questions`}
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Все задания · {getQuestions(subject.slug).length}
            </Link>
          </section>
        </>
      )}

      {spec?.blocks?.length ? (
        <section className="mt-8">
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            Блоки теста
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {spec.blocks.map((b) => (
              <div
                key={b.slug}
                className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="text-sm font-medium">{b.title}</div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {b.questions} заданий
                  {b.durationMinutes ? ` · ${b.durationMinutes} мин` : ""}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
          Темы {subject.ready && "из спецификации"}
        </h2>
        {spec?.levelMeaning && (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Обозначения уровней: {spec.levelMeaning}.
          </p>
        )}
        <ol className="mt-4 space-y-2">
          {subject.topics.map((topic) => {
            const notes = hasTheory(subject.slug, topic.slug);
            const questions = getTopicQuestions(subject.slug, topic.slug).length;
            const planned = plannedCount(topic.plan);

            return (
              <li key={topic.slug}>
                <Link
                  href={`/${subject.slug}/topics/${topic.slug}`}
                  className={`group flex gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:shadow-md ${accent.ring} dark:border-slate-800 dark:bg-slate-900`}
                >
                  <span className="mt-0.5 w-6 shrink-0 text-sm font-semibold text-slate-400 tabular-nums">
                    {topic.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-medium group-hover:underline">{topic.title}</h3>
                      {(["A", "B", "C"] as const)
                        .filter((l) => topic.plan[l])
                        .map((l) => (
                          <span
                            key={l}
                            className={`rounded px-1.5 py-0.5 text-[11px] font-semibold ${difficultyClasses[l]}`}
                            title={`${topic.plan[l]} заданий уровня ${l} в варианте`}
                          >
                            {l}×{topic.plan[l]}
                          </span>
                        ))}
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                      {topic.spec}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                      <span>{notes ? "конспект есть" : "конспект не написан"}</span>
                      {topic.noBank ? (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 font-medium text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
                          без тренажёра
                        </span>
                      ) : (
                        <span>{questions} вопросов</span>
                      )}
                      {planned > 0 && <span>{planned} в варианте</span>}
                      <TopicProgressBadge topicKey={`${subject.slug}/${topic.slug}`} />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {subject.literature.length > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            Рекомендуемая литература
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
            {subject.literature.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden className="text-slate-400">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function SpecCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="text-xl font-bold tabular-nums">{value}</div>
      <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  );
}
