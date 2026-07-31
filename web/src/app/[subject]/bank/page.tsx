import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSubject, getUniqueQuestions, subjects } from "@/content";
import { loadSubjectTheory } from "@/lib/theory";
import BankClient from "@/components/quiz/BankClient";

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[subject]/bank">,
): Promise<Metadata> {
  const { subject } = await props.params;
  return { title: `Полный тестник — ${getSubject(subject)?.shortTitle ?? ""}` };
}

export default async function BankPage(props: PageProps<"/[subject]/bank">) {
  const { subject: slug } = await props.params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  // Конспекты читаются с диска на сервере и уходят клиенту одним пропсом:
  // тестник показывает теорию под заданием, а в браузере файловой системы нет.
  const theory = loadSubjectTheory(
    subject.slug,
    subject.topics.map((t) => t.slug),
  );
  const unique = getUniqueQuestions(subject.slug);

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
        <span className="text-slate-700 dark:text-slate-300">Тестник</span>
      </nav>

      <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        Полный тестник · {subject.title}
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
        Все {unique.length} уникальных заданий из разобранных пробников, без повторов
        и без таймера. Отвечаете на задание — под ним раскрывается не только разбор,
        но и вся теория темы блоками: попался вопрос про быструю сортировку — рядом
        и пузырьковая, и слиянием, и кучей. Прогресс сохраняется в браузере, банк
        можно проходить частями.
      </p>

      <div className="mt-8">
        <BankClient subject={subject} theory={theory} />
      </div>
    </div>
  );
}
