import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSubject, getTopic, getTopicQuestions, subjects } from "@/content";
import { accentClasses, difficultyClasses } from "@/lib/accent";
import { loadTheory } from "@/lib/theory";
import TheoryBlocks from "@/components/TheoryBlocks";
import MarkTopicRead from "@/components/MarkTopicRead";

export function generateStaticParams() {
  return subjects.flatMap((s) =>
    s.topics.map((t) => ({ subject: s.slug, topic: t.slug })),
  );
}

export async function generateMetadata(
  props: PageProps<"/[subject]/topics/[topic]">,
): Promise<Metadata> {
  const { subject, topic } = await props.params;
  const found = getTopic(subject, topic);
  return { title: found ? `${found.title} — ${getSubject(subject)?.shortTitle}` : "Тема" };
}

export default async function TopicPage(props: PageProps<"/[subject]/topics/[topic]">) {
  const { subject: subjectSlug, topic: topicSlug } = await props.params;
  const subject = getSubject(subjectSlug);
  const topic = subject?.topics.find((t) => t.slug === topicSlug);
  if (!subject || !topic) notFound();

  const accent = accentClasses[subject.accent];
  const theory = loadTheory(subject.slug, topic.slug);
  const questions = getTopicQuestions(subject.slug, topic.slug);

  const index = subject.topics.findIndex((t) => t.slug === topic.slug);
  const prev = subject.topics[index - 1];
  const next = subject.topics[index + 1];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/${subject.slug}`} className="hover:underline">
          {subject.shortTitle}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">Тема {topic.number}</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          {topic.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          {(["A", "B", "C"] as const)
            .filter((l) => topic.plan[l])
            .map((l) => (
              <span
                key={l}
                className={`rounded-full px-2.5 py-1 font-medium ${difficultyClasses[l]}`}
              >
                уровень {l} — {topic.plan[l]} задан. в варианте
              </span>
            ))}
          {questions.length > 0 && (
            <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {questions.length} вопросов в банке
            </span>
          )}
        </div>

        <details className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-900">
          <summary className="cursor-pointer font-medium text-slate-700 dark:text-slate-300">
            Формулировка темы в спецификации
          </summary>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{topic.spec}</p>
        </details>
      </header>

      <article className="mt-8">
        {theory ? (
          <TheoryBlocks
            markdown={theory}
            topicSlug={topic.slug}
            topicTitle={topic.title}
            showIndex
            openFirst={false}
          />
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            <p className="font-medium text-slate-700 dark:text-slate-300">
              Конспект по этой теме ещё не написан
            </p>
            <p className="mt-1.5">
              Он появится в{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs dark:bg-slate-800">
                src/content/{subject.slug}/theory/{topic.slug}.md
              </code>
            </p>
          </div>
        )}
      </article>

      {topic.noBank && (
        <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100">
          <p className="font-semibold">Тренажёра по этой теме нет</p>
          <p className="mt-1.5">{topic.noBank}</p>
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
        <MarkTopicRead topicKey={`${subject.slug}/${topic.slug}`} />
        {questions.length > 0 && (
          <Link
            href={`/${subject.slug}/practice?topic=${topic.slug}`}
            className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${accent.button}`}
          >
            Прорешать эту тему
          </Link>
        )}
      </div>

      <nav className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
        {prev ? (
          <Link
            href={`/${subject.slug}/topics/${prev.slug}`}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm transition hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
          >
            <span className="block text-xs text-slate-500 dark:text-slate-400">← Предыдущая</span>
            <span className="font-medium">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/${subject.slug}/topics/${next.slug}`}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm transition hover:bg-slate-100 sm:text-right dark:border-slate-800 dark:hover:bg-slate-800"
          >
            <span className="block text-xs text-slate-500 dark:text-slate-400">Следующая →</span>
            <span className="font-medium">{next.title}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
