import type { Metadata } from "next";
import ProgressClient from "@/components/ProgressClient";

export const metadata: Metadata = { title: "Прогресс" };

export default function ProgressPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Прогресс</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        История попыток и отметки о пройденных темах хранятся только в этом браузере —
        на сервер ничего не отправляется.
      </p>
      <div className="mt-8">
        <ProgressClient />
      </div>
    </div>
  );
}
