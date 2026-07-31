"use client";

import { useMemo, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  rankTheoryBlocks,
  splitTheoryBlocks,
  type QueryPart,
  type TheoryBlock,
} from "@/lib/theory-blocks";
import { cx } from "@/lib/accent";

interface Props {
  /** Конспект темы целиком; делится на блоки прямо здесь. */
  markdown: string;
  /** Тема — нужна для устойчивых id блоков. */
  topicSlug: string;
  /** Название темы для заголовка секции. */
  topicTitle: string;
  /** Взвешенные куски задания: по ним блоки сортируются по релевантности. */
  query: QueryPart[];
}

/**
 * Теория под заданием: весь конспект темы, разложенный на свёрнутые блоки.
 *
 * Смысл в том, что вопрос — только повод. Попалась быстрая сортировка —
 * рядом должны лежать и пузырьковая, и слиянием, и кучей, чтобы не идти
 * гуглить остальные. Самый близкий к вопросу блок раскрыт сразу, остальные
 * свёрнуты и открываются по клику.
 */
export default function TheoryBlocks({ markdown, topicSlug, topicTitle, query }: Props) {
  const blocks = useMemo(
    () => rankTheoryBlocks(splitTheoryBlocks(markdown, topicSlug), query),
    [markdown, topicSlug, query],
  );

  // Ключ вопроса в состоянии не хранится: при смене задания компонент
  // пересоздаётся по key извне, и раскрытие сбрасывается само.
  const [openIds, setOpenIds] = useState<Set<string>>(() =>
    blocks.length > 0 ? new Set([blocks[0].id]) : new Set(),
  );

  if (blocks.length === 0) return null;

  const allOpen = openIds.size === blocks.length;

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section className="mt-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold">
          Теория по теме{" "}
          <span className="font-normal text-slate-500 dark:text-slate-400">{topicTitle}</span>
        </h3>
        <button
          type="button"
          onClick={() =>
            setOpenIds(allOpen ? new Set() : new Set(blocks.map((b) => b.id)))
          }
          className="text-xs font-medium text-slate-500 hover:underline dark:text-slate-400"
        >
          {allOpen ? "свернуть все" : `раскрыть все · ${blocks.length}`}
        </button>
      </div>

      <ul className="mt-2 space-y-1.5">
        {blocks.map((block, i) => (
          <TheoryBlockItem
            key={block.id}
            block={block}
            open={openIds.has(block.id)}
            onToggle={() => toggle(block.id)}
            highlighted={i === 0}
          />
        ))}
      </ul>
    </section>
  );
}

function TheoryBlockItem({
  block,
  open,
  onToggle,
  highlighted,
}: {
  block: TheoryBlock;
  open: boolean;
  onToggle: () => void;
  highlighted: boolean;
}) {
  return (
    <li
      className={cx(
        "overflow-hidden rounded-xl border bg-white dark:bg-slate-900",
        highlighted
          ? "border-sky-300 dark:border-sky-500/40"
          : "border-slate-200 dark:border-slate-800",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm font-medium transition hover:bg-slate-50 dark:hover:bg-slate-800/60"
      >
        <span
          aria-hidden
          className={cx(
            "shrink-0 text-slate-400 transition-transform",
            open && "rotate-90",
          )}
        >
          ▶
        </span>
        <span className="min-w-0 flex-1">{block.title}</span>
        {highlighted && (
          <span className="shrink-0 rounded-full bg-sky-100 px-2 py-0.5 text-[11px] font-medium text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            по этому вопросу
          </span>
        )}
      </button>

      {open && (
        <div className="notes border-t border-slate-200 px-4 pt-1 pb-3 dark:border-slate-800">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ children }) => (
                <div className="table-wrap">
                  <table>{children}</table>
                </div>
              ),
            }}
          >
            {block.body}
          </Markdown>
        </div>
      )}
    </li>
  );
}
