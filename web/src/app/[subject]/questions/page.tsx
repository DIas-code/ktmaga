import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getQuestions, getSubject, subjects } from "@/content";
import QuestionBrowser from "@/components/QuestionBrowser";

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[subject]/questions">,
): Promise<Metadata> {
  const { subject } = await props.params;
  return { title: `Все задания — ${getSubject(subject)?.shortTitle ?? ""}` };
}

export default async function QuestionsPage(props: PageProps<"/[subject]/questions">) {
  const { subject: slug } = await props.params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const questions = getQuestions(subject.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-slate-500 dark:text-slate-400">
        <Link href={`/${subject.slug}`} className="hover:underline">
          {subject.shortTitle}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">Все задания</span>
      </nav>

      <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        Все задания · {subject.title}
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Весь банк — {questions.length} заданий с ответами и разбором. Можно отфильтровать
        по теме и уровню или найти задание по тексту.
      </p>

      <div className="mt-8">
        {questions.length > 0 ? (
          <QuestionBrowser subject={subject} />
        ) : (
          <p className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            Банк заданий по этому разделу пока пуст.
          </p>
        )}
      </div>
    </div>
  );
}
