import type { Question } from "@/lib/types";

/** Задания из PDF-пробников. Партия 13. */
export const batch13: Question[] = [
  {
    id: "mk-db-b13-1",
    topic: "aggregate-functions",
    difficulty: "B",
    text: "Результат выполнения данной команды на SQL",
    code: {
      lang: "sql",
      value:
        "create table department (id int, salary int);\n" +
        "insert into department values (102, 45000);\n" +
        "insert into department values (103, 15000);\n" +
        "insert into department values (104, 90000);\n" +
        "insert into department values (105, 10000);\n" +
        "select round(avg(salary)) from department;",
    },
    options: ["40000", "15000", "160000", "90000", "45000", "10000"],
    correct: [0],
    explanation:
      "Агрегатная функция AVG схлопывает весь столбец в одно число: она делит сумму " +
      "значений на их количество. Сумма зарплат равна 45000 + 15000 + 90000 + 10000 = " +
      "160000, строк четыре, поэтому среднее — 40000; ROUND здесь ничего не меняет, так " +
      "как результат и без того целый. Значение 160000 — это результат SUM, а не AVG: " +
      "деления на COUNT в нём нет. Числа 45000, 15000, 90000 и 10000 — отдельные значения " +
      "столбца, и получить их можно было бы обычным SELECT salary без агрегата либо " +
      "функциями MAX и MIN (90000 и 10000), но не усреднением. Важно и то, что запрос " +
      "без GROUP BY даёт ровно одну строку на всю таблицу, а не по строке на запись.",
  },
];
