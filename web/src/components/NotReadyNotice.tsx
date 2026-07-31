import Link from "next/link";
import type { Subject } from "@/lib/types";

/** Заглушка для разделов, по которым ещё нет спецификации и банка вопросов. */
export default function NotReadyNotice({ subject }: { subject: Subject }) {
  return (
    <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100">
      <p className="text-base font-semibold">Тренажёр по этому блоку пока не собран</p>
      <p className="mt-2">
        Нет официальной спецификации — а значит, неизвестно ни количество заданий, ни время,
        ни правила оценивания. Собирать вариант «на глаз» смысла нет: тренировка на неверных
        правилах хуже, чем её отсутствие.
      </p>
      <Link
        href={`/${subject.slug}`}
        className="mt-4 inline-block rounded-xl border border-amber-400 px-4 py-2 font-semibold transition hover:bg-amber-100 dark:border-amber-500/60 dark:hover:bg-amber-500/20"
      >
        Посмотреть темы раздела
      </Link>
    </div>
  );
}
