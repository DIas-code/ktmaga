import type { ExamVariant } from "@/lib/types";

/**
 * ФАЙЛ СГЕНЕРИРОВАН. Не редактировать вручную — правки затрутся.
 * Пересобрать: npm run variants
 *
 * Фиксированные варианты по дисциплине «Базы данных».
 * Каждый вариант собран строго по плану спецификации: по каждой теме взято
 * столько заданий каждого уровня трудности, сколько положено (20 заданий).
 * Приоритет при отборе отдан заданиям, восстановленным из пробников ЦЕНТ.
 */
export const variants: ExamVariant[] = [
  {
    number: 1,
    questionIds: [
      "ct-db-fd1",
      "ct-db-ra1",
      "ct-db-nf1",
      "ct-db-flt2",
      "ct-db-sub1",
      "mk-db-b03-13",
      "mk-db-b04-8",
      "ct-db-ddl1",
      "ct-db-flt1",
      "ct-db-dm1",
      "ct-db-sub3",
      "mk-db-b02-10",
      "mk-db-b04-11",
      "ct-db-sub2",
      "mk-db-b06-5",
      "mk-db-b03-19",
      "ct-db-agg1",
      "mk-db-b04-6",
      "ct-db-dml1"
    ],
    fromMocks: 12
  },
  {
    number: 2,
    questionIds: [
      "ct-db-dml1",
      "ct-db-flt2",
      "ct-db-dm2",
      "ct-db-sub3",
      "ct-db-sub2",
      "ct-db-ddl1",
      "ct-db-nf1",
      "mk-db-b03-25",
      "ct-db-fd1",
      "mk-db-b02-19",
      "ct-db-flt1",
      "mk-db-b03-23",
      "mk-db-b03-13",
      "mk-db-b02-14",
      "ct-db-agg1",
      "ct-db-sub1",
      "ct-db-ra1",
      "mk-db-b04-6",
      "mk-db-b03-1"
    ],
    fromMocks: 12
  },
  {
    number: 3,
    questionIds: [
      "mk-db-b03-13",
      "ct-db-fd1",
      "mk-db-b02-14",
      "mk-db-b04-12",
      "ct-db-sub1",
      "mk-db-b04-6",
      "ct-db-ddl1",
      "mk-db-b02-10",
      "ct-db-nf1",
      "ct-db-sub2",
      "ct-db-dml1",
      "mk-db-b03-4",
      "ct-db-sub3",
      "mk-db-b03-23",
      "ct-db-flt2",
      "ct-db-ra1",
      "ct-db-flt1",
      "ct-db-dm2",
      "ct-db-agg1"
    ],
    fromMocks: 12
  },
  {
    number: 4,
    questionIds: [
      "ct-db-sub2",
      "ct-db-sub1",
      "ct-db-ra1",
      "mk-db-b03-13",
      "mk-db-b03-1",
      "ct-db-fd1",
      "mk-db-b04-6",
      "ct-db-flt1",
      "mk-db-b06-5",
      "ct-db-dm1",
      "ct-db-ddl1",
      "ct-db-sub3",
      "ct-db-agg1",
      "mk-db-b04-2",
      "mk-db-b04-8",
      "mk-db-b03-21",
      "ct-db-flt2",
      "ct-db-nf1",
      "ct-db-dml1"
    ],
    fromMocks: 12
  },
  {
    number: 5,
    questionIds: [
      "mk-db-b05-8",
      "ct-db-dml1",
      "ct-db-sub2",
      "ct-db-fd1",
      "ct-db-agg1",
      "mk-db-b03-23",
      "mk-db-b03-1",
      "ct-db-ra1",
      "ct-db-sub3",
      "ct-db-sub1",
      "mk-db-b04-6",
      "mk-db-b03-13",
      "ct-db-flt2",
      "mk-db-b02-1",
      "ct-db-nf1",
      "ct-db-dm1",
      "ct-db-flt1",
      "ct-db-ddl1",
      "mk-db-b02-14"
    ],
    fromMocks: 12
  }
];
