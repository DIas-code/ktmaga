"use client";

import { useSyncExternalStore } from "react";

/** Тот же ключ читает инлайновый скрипт в layout — чтобы не было вспышки светлой темы. */
const KEY = "ktmaga.theme";
const EVENT = "ktmaga:theme";

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

/** Источник истины — класс на <html>, его же ставит скрипт до первой отрисовки. */
const isDark = () => document.documentElement.classList.contains("dark");

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, () => null);

  function toggle() {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(KEY, next ? "dark" : "light");
    } catch {
      /* приватный режим — тема просто не запомнится */
    }
    window.dispatchEvent(new Event(EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Включить светлую тему" : "Включить тёмную тему"}
      className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800"
    >
      {/* до гидратации значок нейтральный, иначе разойдётся с серверной разметкой */}
      <span aria-hidden className="text-base">
        {dark === null ? "◐" : dark ? "☾" : "☀"}
      </span>
    </button>
  );
}
