import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { getQuestions, getSubject, subjects } from "@/content";
import PracticeClient from "@/components/quiz/PracticeClient";
import NotReadyNotice from "@/components/NotReadyNotice";

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[subject]/practice">,
): Promise<Metadata> {
  const { subject } = await props.params;
  return { title: `Тренировка — ${getSubject(subject)?.shortTitle ?? ""}` };
}

export default async function PracticePage(props: PageProps<"/[subject]/practice">) {
  const { subject: slug } = await props.params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-slate-500 dark:text-slate-400">
        <Link href={`/${subject.slug}`} className="hover:underline">
          {subject.shortTitle}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">Тренировка</span>
      </nav>

      <h1 className="mt-3 mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
        {subject.title}
      </h1>

      {subject.ready ? (
        // useSearchParams требует границы Suspense при пререндере
        <Suspense fallback={null}>
          <PracticeClient subject={subject} bank={getQuestions(subject.slug)} />
        </Suspense>
      ) : (
        <NotReadyNotice subject={subject} />
      )}
    </div>
  );
}
