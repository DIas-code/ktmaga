## Секция WHERE

`WHERE` отбирает **отдельные строки** до группировки. Строка попадает в результат, только если условие дало **TRUE** (не FALSE и не UNKNOWN).

```sql
SELECT name, salary
FROM employee
WHERE dept_id = 3 AND salary > 150000;
```

## Операторы сравнения

| Оператор | Значение |
|---|---|
| `=` | Равно |
| `<>` или `!=` | Не равно |
| `<`, `>`, `<=`, `>=` | Сравнение по порядку |

## Логические операторы и приоритет

**Приоритет по убыванию: `NOT` → `AND` → `OR`.**

```sql
SELECT * FROM t WHERE a = 1 OR a = 2 AND b = 3;
-- читается как:
SELECT * FROM t WHERE a = 1 OR (a = 2 AND b = 3);
```

Строка с `a = 1` попадёт в результат при **любом** `b`. Если задумывалось другое — нужны скобки:

```sql
SELECT * FROM t WHERE (a = 1 OR a = 2) AND b = 3;
```

> Это одна из самых частых ошибок и любимый вопрос составителей тестов. Всегда ставьте скобки, даже когда приоритет и так «правильный» — читать проще.

## Трёхзначная логика и NULL

SQL оперирует значениями TRUE, FALSE и **UNKNOWN**. Любое сравнение с `NULL` даёт UNKNOWN.

```sql
NULL = NULL        -- UNKNOWN
NULL <> 5          -- UNKNOWN
NULL > 0           -- UNKNOWN
NULL IS NULL       -- TRUE      ← единственный правильный способ
NULL IS NOT NULL   -- FALSE
```

**Таблицы истинности:**

| A | B | A AND B | A OR B |
|---|---|---|---|
| TRUE | UNKNOWN | UNKNOWN | TRUE |
| FALSE | UNKNOWN | FALSE | UNKNOWN |
| UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN |

`NOT UNKNOWN` = UNKNOWN.

**Практические следствия:**

```sql
-- НЕ работает как проверка «не пусто»
WHERE bonus <> 100        -- строки с bonus IS NULL НЕ попадут в результат!

-- Правильно
WHERE bonus <> 100 OR bonus IS NULL
-- или
WHERE COALESCE(bonus, -1) <> 100
```

**Ловушка `NOT IN` с `NULL`:**

```sql
SELECT * FROM employee
WHERE dept_id NOT IN (1, 2, NULL);   -- ВСЕГДА пусто!
```

Потому что `dept_id NOT IN (1, 2, NULL)` = `dept_id<>1 AND dept_id<>2 AND dept_id<>NULL`, а последнее — UNKNOWN, и всё выражение никогда не станет TRUE. Поэтому вместо `NOT IN` с подзапросом безопаснее `NOT EXISTS`.

**Функции для работы с NULL:**

```sql
COALESCE(bonus, 0)              -- первое не-NULL из списка
NULLIF(a, b)                    -- NULL, если a = b, иначе a
CASE WHEN bonus IS NULL THEN 0 ELSE bonus END
```

## BETWEEN

```sql
WHERE salary BETWEEN 100000 AND 200000
-- эквивалентно
WHERE salary >= 100000 AND salary <= 200000
```

- **Границы включаются.**
- Порядок границ важен: `BETWEEN 200000 AND 100000` не вернёт ничего.
- `NOT BETWEEN a AND b` — отрицание, значит сами границы **исключаются** из результата.

## IN

```sql
WHERE dept_id IN (1, 3, 5)
-- эквивалентно
WHERE dept_id = 1 OR dept_id = 3 OR dept_id = 5
```

Список может быть подзапросом:

```sql
WHERE dept_id IN (SELECT id FROM dept WHERE city = 'Алматы')
```

## LIKE — поиск по шаблону

| Символ | Значение |
|---|---|
| `%` | Любое число символов, **включая ноль** |
| `_` | **Ровно один** любой символ |

```sql
WHERE name LIKE 'А%'        -- начинается с А
WHERE name LIKE '%ов'       -- заканчивается на «ов»
WHERE name LIKE '%ай%'      -- содержит «ай»
WHERE name LIKE '_____'     -- ровно 5 символов
WHERE code LIKE 'A_1%'      -- A, любой символ, 1, дальше что угодно
```

**Чувствительность к регистру зависит от СУБД и collation.** В PostgreSQL `LIKE` регистрозависим (есть `ILIKE`), в MySQL с регистронезависимым сопоставлением — нет. Универсальный приём:

```sql
WHERE UPPER(name) LIKE UPPER('%иван%')
```

**Поиск самих символов `%` и `_`** — через `ESCAPE`:

```sql
WHERE code LIKE '50\%%' ESCAPE '\'    -- начинается с «50%»
```

**Производительность:** шаблон, начинающийся с `%`, не позволяет использовать обычный B-tree индекс — приходится сканировать всю таблицу.

## Прочие предикаты

```sql
WHERE gpa IS NULL                          -- проверка на NULL
WHERE EXISTS (SELECT 1 FROM ...)           -- существуют ли строки
WHERE salary > ALL (SELECT ...)            -- больше каждого
WHERE salary > ANY (SELECT ...)            -- больше хотя бы одного
```

## DISTINCT и ограничение выборки

```sql
SELECT DISTINCT dept_id FROM employee;             -- без повторов
SELECT * FROM employee ORDER BY salary DESC
FETCH FIRST 10 ROWS ONLY;                          -- стандарт SQL
SELECT * FROM employee ORDER BY salary DESC LIMIT 10;  -- PostgreSQL, MySQL
```

`DISTINCT` применяется ко **всему** списку выборки, а не к одному столбцу.

## Быстрая проверка себя

1. Вернёт ли `WHERE bonus <> 100` строки, где `bonus IS NULL`? *(нет)*
2. Как читается `a = 1 OR a = 2 AND b = 3`? *(`a = 1 OR (a = 2 AND b = 3)`)*
3. Что найдёт `LIKE '_а%'`? *(строки, у которых вторая буква — «а»)*
4. Включает ли `BETWEEN 10 AND 20` значение 20? *(да)*
5. Почему `NOT IN (1, 2, NULL)` не возвращает строк? *(сравнение с `NULL` даёт UNKNOWN, и `AND` никогда не станет TRUE)*
