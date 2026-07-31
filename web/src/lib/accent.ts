import type { Subject } from "./types";

/**
 * Классы Tailwind перечислены целиком, а не собираются из строк, —
 * иначе сканер Tailwind их не увидит и не сгенерирует.
 */
export const accentClasses: Record<
  Subject["accent"],
  { chip: string; ring: string; bar: string; text: string; button: string }
> = {
  sky: {
    chip: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    ring: "hover:border-sky-400 dark:hover:border-sky-500",
    bar: "bg-sky-500",
    text: "text-sky-600 dark:text-sky-400",
    button: "bg-sky-600 hover:bg-sky-500 text-white",
  },
  violet: {
    chip: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
    ring: "hover:border-violet-400 dark:hover:border-violet-500",
    bar: "bg-violet-500",
    text: "text-violet-600 dark:text-violet-400",
    button: "bg-violet-600 hover:bg-violet-500 text-white",
  },
  amber: {
    chip: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
    ring: "hover:border-amber-400 dark:hover:border-amber-500",
    bar: "bg-amber-500",
    text: "text-amber-700 dark:text-amber-400",
    button: "bg-amber-600 hover:bg-amber-500 text-white",
  },
  emerald: {
    chip: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    ring: "hover:border-emerald-400 dark:hover:border-emerald-500",
    bar: "bg-emerald-500",
    text: "text-emerald-600 dark:text-emerald-400",
    button: "bg-emerald-600 hover:bg-emerald-500 text-white",
  },
};

export const difficultyClasses: Record<"A" | "B" | "C", string> = {
  A: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  B: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300",
  C: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
};

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
