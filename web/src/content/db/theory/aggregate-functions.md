## Что такое агрегатная функция

Агрегатная функция сворачивает **множество строк в одно значение**. Этим она отличается от скалярной функции (`ROUND`, `UPPER`, `LENGTH`), которая обрабатывает каждое значение по отдельности.

| Функция | Что возвращает |
|---|---|
| `COUNT(*)` | Число строк |
| `COUNT(expr)` | Число строк, где `expr` **не** `NULL` |
| `COUNT(DISTINCT expr)` | Число различных не-`NULL` значений |
| `SUM(expr)` | Сумма не-`NULL` значений |
| `AVG(expr)` | Среднее не-`NULL` значений |
| `MIN(expr)` / `MAX(expr)` | Минимум / максимум |

> `ROUND`, `LENGTH`, `SUBSTRING`, `COALESCE`, `NOW` — **скалярные**, не агрегатные. Их регулярно подставляют в варианты ответа.

## Главное правило: агрегаты игнорируют NULL

Единственное исключение — `COUNT(*)`, который считает строки, а не значения.

```sql
-- Таблица emp, 5 строк, столбец bonus: 100, NULL, 200, NULL, 300
SELECT COUNT(*),        -- 5   ← считает строки
       COUNT(bonus),    -- 3   ← только не-NULL
       SUM(bonus),      -- 600
       AVG(bonus),      -- 200 = 600 / 3, а НЕ 600 / 5 = 120
       MIN(bonus),      -- 100
       MAX(bonus)       -- 300
FROM emp;
```

**Ключевой момент:** `AVG(col)` = `SUM(col) / COUNT(col)`, а не `SUM(col) / COUNT(*)`. Если хотите считать `NULL` как ноль — приведите явно:

```sql
SELECT AVG(COALESCE(bonus, 0)) FROM emp;   -- 120
```

Ещё частности:

- если строк нет вообще, `COUNT` вернёт **0**, а `SUM`, `AVG`, `MIN`, `MAX` — **`NULL`**;
- если все значения `NULL`, `MAX`/`MIN`/`SUM`/`AVG` тоже вернут `NULL`.

## DISTINCT внутри агрегата

```sql
SELECT COUNT(DISTINCT dept_id),   -- сколько различных отделов
       SUM(DISTINCT salary),      -- сумма различных значений зарплат
       AVG(DISTINCT salary)       -- допустимо
FROM employee;
```

`COUNT(DISTINCT *)` — **синтаксическая ошибка**: `DISTINCT` применяется к выражению, а `*` выражением не является.

## Агрегаты и GROUP BY

Без `GROUP BY` агрегат считается по всей таблице и возвращает одну строку. С `GROUP BY` — по каждой группе.

```sql
SELECT dept_id,
       COUNT(*)      AS people,
       AVG(salary)   AS avg_salary,
       MAX(salary)   AS top_salary
FROM employee
GROUP BY dept_id;
```

**Правило списка выборки:** каждый столбец в `SELECT` должен быть либо перечислен в `GROUP BY`, либо обёрнут в агрегатную функцию. Иначе — ошибка (MySQL в нестрогом режиме молча выдаёт произвольное значение, но полагаться на это нельзя).

```sql
-- Ошибка: name не в GROUP BY и не агрегирован
SELECT dept_id, name, COUNT(*) FROM employee GROUP BY dept_id;
```

## Где агрегат использовать МОЖНО и где НЕЛЬЗЯ

| Секция | Агрегат допустим? | Почему |
|---|---|---|
| `SELECT` | **Да** | Ради этого всё и делается |
| `WHERE` | **Нет** | Выполняется до группировки, групп ещё нет |
| `GROUP BY` | Нет | Здесь перечисляют столбцы группировки |
| `HAVING` | **Да** | Выполняется после агрегации |
| `ORDER BY` | **Да** | Выполняется в самом конце |

```sql
-- НЕВЕРНО
SELECT dept_id FROM employee WHERE COUNT(*) > 5 GROUP BY dept_id;

-- ВЕРНО
SELECT dept_id FROM employee GROUP BY dept_id HAVING COUNT(*) > 5;
```

## Типовые задачи

**Сколько сотрудников без указанного отдела:**

```sql
SELECT COUNT(*) - COUNT(dept_id) AS without_dept FROM employee;
```

**Отделы, где средняя зарплата выше 200 000:**

```sql
SELECT dept_id, AVG(salary) AS avg_salary
FROM employee
GROUP BY dept_id
HAVING AVG(salary) > 200000
ORDER BY avg_salary DESC;
```

**Сотрудники с максимальной зарплатой** (агрегат в подзапросе):

```sql
SELECT name, salary
FROM employee
WHERE salary = (SELECT MAX(salary) FROM employee);
```

**Доля от общего** (агрегат в скалярном подзапросе):

```sql
SELECT dept_id,
       SUM(salary) AS dept_total,
       ROUND(100.0 * SUM(salary) / (SELECT SUM(salary) FROM employee), 2) AS pct
FROM employee
GROUP BY dept_id;
```

## Оконные функции — не то же самое

`SUM(...) OVER (...)` не сворачивает строки, а добавляет вычисленное значение к каждой:

```sql
SELECT name, salary,
       AVG(salary) OVER (PARTITION BY dept_id) AS dept_avg
FROM employee;
```

Здесь остаётся столько же строк, сколько было. В спецификации эта тема отдельно не заявлена, но отличать оконную форму от агрегатной полезно.

## Быстрая проверка себя

1. Столбец из 6 значений: 10, NULL, 20, NULL, NULL, 30. Что вернут `COUNT(*)`, `COUNT(col)`, `AVG(col)`? *(6, 3, 20)*
2. Можно ли написать `WHERE SUM(x) > 100`? *(нет, только в `HAVING`)*
3. Корректна ли запись `COUNT(DISTINCT *)`? *(нет)*
4. Что вернёт `SUM(col)` для пустой таблицы? *(`NULL`, а `COUNT(*)` вернёт 0)*
5. `ROUND` — агрегатная функция? *(нет, скалярная)*
