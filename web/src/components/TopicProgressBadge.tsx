"use client";

import { useReadTopics } from "@/lib/storage";

/** Показывает отметку «пройдено», если тема отмечена на своей странице. */
export default function TopicProgressBadge({ topicKey }: { topicKey: string }) {
  const readTopics = useReadTopics();
  if (!readTopics?.includes(topicKey)) return null;

  return (
    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
      ✓ пройдено
    </span>
  );
}
