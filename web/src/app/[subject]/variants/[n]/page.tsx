import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getSubject,
  getVariant,
  getVariantQuestions,
  getVariants,
  subjects,
} from "@/content";
import VariantClient from "@/components/quiz/VariantClient";

export function generateStaticParams() {
  return subjects.flatMap((s) =>
    getVariants(s.slug).map((v) => ({ subject: s.slug, n: String(v.number) })),
  );
}

export async function generateMetadata(
  props: PageProps<"/[subject]/variants/[n]">,
): Promise<Metadata> {
  const { subject, n } = await props.params;
  return { title: `Вариант ${n} — ${getSubject(subject)?.shortTitle ?? ""}` };
}

export default async function VariantPage(props: PageProps<"/[subject]/variants/[n]">) {
  const { subject: slug, n } = await props.params;
  const subject = getSubject(slug);
  const number = Number(n);
  const variant = subject ? getVariant(subject.slug, number) : undefined;
  if (!subject || !variant) notFound();

  const questions = getVariantQuestions(subject.slug, number);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-sm text-slate-500 dark:text-slate-400">
        <Link href={`/${subject.slug}`} className="hover:underline">
          {subject.shortTitle}
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/${subject.slug}/variants`} className="hover:underline">
          Варианты
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 dark:text-slate-300">Вариант {number}</span>
      </nav>

      <h1 className="mt-3 mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
        {subject.title}
      </h1>

      <VariantClient
        subject={subject}
        questions={questions}
        number={number}
        fromMocks={variant.fromMocks}
      />
    </div>
  );
}
