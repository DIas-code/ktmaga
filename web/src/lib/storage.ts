"use client";

import { useSyncExternalStore } from "react";
import type { AttemptResult } from "./types";

const ATTEMPTS_KEY = "ktmaga.attempts.v1";
const READ_KEY = "ktmaga.readTopics.v1";
const BANK_KEY = "ktmaga.bankProgress.v1";
const EVENT = "ktmaga:storage";
const MAX_ATTEMPTS = 100;

/**
 * Кеш разобранных значений. Нужен, потому что useSyncExternalStore сравнивает
 * снимки по ссылке: возвращать новый массив на каждый вызов нельзя — будет
 * бесконечный цикл перерисовок.
 */
const cache = new Map<string, unknown>();

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  if (cache.has(key)) return cache.get(key) as T;
  let value = fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw) value = JSON.parse(raw) as T;
  } catch {
    /* повреждённое значение — считаем, что данных нет */
  }
  cache.set(key, value);
  return value;
}

function write(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  cache.set(key, value);
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* приватный режим или переполненное хранилище — прогресс не сохранится */
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  const onStorage = (e: StorageEvent) => {
    // изменение из другой вкладки — сбрасываем кеш
    if (e.key === ATTEMPTS_KEY || e.key === READ_KEY || e.key === BANK_KEY) {
      cache.delete(e.key);
      onChange();
    }
  };
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

const NO_ATTEMPTS: AttemptResult[] = [];
const NO_TOPICS: string[] = [];

/* ----------------------------- Попытки ----------------------------- */

export function loadAttempts(): AttemptResult[] {
  return read<AttemptResult[]>(ATTEMPTS_KEY, NO_ATTEMPTS);
}

export function saveAttempt(attempt: AttemptResult) {
  write(ATTEMPTS_KEY, [attempt, ...loadAttempts()].slice(0, MAX_ATTEMPTS));
}

export function clearAttempts() {
  write(ATTEMPTS_KEY, NO_ATTEMPTS);
}

/* -------------------------- Пройденные темы -------------------------- */

/** Ключ темы — строка вида "db/joins". */
export function loadReadTopics(): string[] {
  return read<string[]>(READ_KEY, NO_TOPICS);
}

export function toggleReadTopic(key: string) {
  const current = loadReadTopics();
  const next = current.includes(key) ? current.filter((k) => k !== key) : [...current, key];
  write(READ_KEY, next);
  return next;
}

/* ------------------------- Прогресс тестника ------------------------- */

/**
 * Что пройдено в полном тестнике по предмету. Банк большой (по алгоритмам
 * почти три тысячи заданий), за один присест его не пройти — поэтому
 * запоминаются и место, и результат по каждому заданию.
 */
export interface BankProgress {
  /** Индекс текущего задания в текущем списке. */
  index: number;
  /** id заданий, отвеченных верно. */
  correct: string[];
  /** id заданий, отвеченных неверно. */
  wrong: string[];
}

const EMPTY_PROGRESS: BankProgress = { index: 0, correct: [], wrong: [] };

function allBankProgress(): Record<string, BankProgress> {
  return read<Record<string, BankProgress>>(BANK_KEY, {});
}

export function loadBankProgress(subject: string): BankProgress {
  return allBankProgress()[subject] ?? EMPTY_PROGRESS;
}

export function saveBankProgress(subject: string, progress: BankProgress) {
  write(BANK_KEY, { ...allBankProgress(), [subject]: progress });
}

export function clearBankProgress(subject: string) {
  const all = { ...allBankProgress() };
  delete all[subject];
  write(BANK_KEY, all);
}

/* ------------------------------ Хуки ------------------------------ */

/**
 * На сервере и до гидратации возвращают null — компонент по этому признаку
 * понимает, что данных ещё нет, и не мигает пустым состоянием.
 */
export function useAttempts(): AttemptResult[] | null {
  return useSyncExternalStore(
    subscribe,
    () => loadAttempts(),
    () => null,
  );
}

export function useReadTopics(): string[] | null {
  return useSyncExternalStore(
    subscribe,
    () => loadReadTopics(),
    () => null,
  );
}
