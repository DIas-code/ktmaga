import type { Question } from "@/lib/types";

/** Задания из пробников по базам данных. Партия 10 (скриншоты). */
export const batch10: Question[] = [
  {
    id: "mk-db-b10-1",
    topic: "dml",
    difficulty: "A",
    text: "Правильный синтаксис написания кода на SQL",
    options: [
      "select from students",
      "select * from data",
      "select from data",
      "select *data from students",
      "select data*students from",
      "select *stud from data",
      "select from *data",
      "select data from students",
    ],
    correct: [1, 7],
    explanation:
      "У оператора SELECT обязательны две части: список выбираемых столбцов и секция FROM " +
      "с именем таблицы. Верны два варианта. `select * from data` берёт все столбцы таблицы " +
      "data: звёздочка — самостоятельный элемент списка, и после неё FROM обязателен. " +
      "`select data from students` берёт один столбец с именем data из таблицы students — " +
      "здесь data играет роль имени столбца, а не таблицы, и это законно. Все остальные " +
      "варианты ломаются на одном из двух: либо список столбцов пуст (`select from students`), " +
      "либо звёздочка приклеена к имени и перестаёт быть отдельным элементом " +
      "(`select *data from students`, `select from *data`).",
  },
  {
    id: "mk-db-b10-2",
    topic: "dml",
    difficulty: "A",
    text: "Команды, которые не существуют в языке SQL",
    options: [
      "insert",
      "select",
      "delete",
      "enter",
      "input",
      "update",
      "create",
      "start",
    ],
    correct: [3, 4, 7],
    explanation:
      "Настоящие команды здесь распределены по двум группам языка. К языку манипулирования " +
      "данными относятся SELECT (выборка), INSERT (вставка), UPDATE (изменение) и DELETE " +
      "(удаление); к языку определения данных — CREATE (создание объекта). А вот enter, " +
      "input и start в SQL отсутствуют: это слова из бытового представления о вводе данных " +
      "или из других языков, поставленные как отвлекающие. Запоминается это просто: ввод " +
      "новой строки в SQL называется не «ввести», а «вставить» — INSERT.",
  },
];
