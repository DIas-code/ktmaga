"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { subjects } from "@/content";
import { cx } from "@/lib/accent";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Главная" },
  ...subjects.map((s) => ({ href: `/${s.slug}`, label: s.shortTitle })),
  { href: "/progress", label: "Прогресс" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-7 place-items-center rounded-md bg-slate-900 text-xs font-bold text-white dark:bg-white dark:text-slate-900">
            КТ
          </span>
          <span className="hidden sm:inline">М094 · Магистратура</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cx(
                "rounded-lg px-3 py-1.5 text-sm transition",
                isActive(l.href)
                  ? "bg-slate-200 font-medium text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 md:hidden dark:border-slate-800 dark:text-slate-400"
          >
            <span aria-hidden>{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 px-4 py-2 md:hidden dark:border-slate-800">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cx(
                "block rounded-lg px-3 py-2 text-sm",
                isActive(l.href)
                  ? "bg-slate-200 font-medium dark:bg-slate-800"
                  : "text-slate-600 dark:text-slate-400",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
