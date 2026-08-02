import { batch02 } from "./batch-02";
import { batch03 } from "./batch-03";
import { batch04 } from "./batch-04";
import { batch05 } from "./batch-05";
import { batch06 } from "./batch-06";
import { batch07 } from "./batch-07";
import type { Question } from "@/lib/types";

/**
 * ФАЙЛ СГЕНЕРИРОВАН: npm run assemble -- --apply
 *
 * Задания, перенесённые из пробников вручную. Каждая партия соответствует
 * куску исходного материала; источник зашит в id вида mk-<предмет>-b<партия>-<номер>.
 */
export const mockQuestions: Question[] = [
  ...batch02,
  ...batch03,
  ...batch04,
  ...batch05,
  ...batch06,
  ...batch07,
];
