"use client";

import { toggleReadTopic, useReadTopics } from "@/lib/storage";

export default function MarkTopicRead({ topicKey }: { topicKey: string }) {
  const readTopics = useReadTopics();
  const read = readTopics?.includes(topicKey) ?? false;

  return (
    <button
      type="button"
      onClick={() => toggleReadTopic(topicKey)}
      className={
        read
          ? "rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300"
          : "rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
      }
    >
      {read ? "✓ Тема пройдена" : "Отметить как пройденную"}
    </button>
  );
}
