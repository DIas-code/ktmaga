import { batch01 } from "./batch-01";
import { batch02 } from "./batch-02";
import type { Question } from "@/lib/types";

/**
 * ФАЙЛ СГЕНЕРИРОВАН: npm run assemble -- --apply
 *
 * Задания, перенесённые из пробников вручную. Каждая партия соответствует
 * куску исходного материала; источник зашит в id вида mk-<предмет>-b<партия>-<номер>.
 */
export const mockQuestions: Question[] = [
  ...batch01,
  ...batch02,
];
