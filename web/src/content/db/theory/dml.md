## INSERT — вставка данных

**С перечислением столбцов** (предпочтительный вариант — не ломается при изменении схемы):

```sql
INSERT INTO student (id, name, gpa)
VALUES (1, 'Айгуль', 3.8);
```

**Без перечисления** — значения обязаны идти в порядке столбцов таблицы:

```sql
INSERT INTO student VALUES (2, 'Ержан', 3.2);
```

**Несколько строк за раз:**

```sql
INSERT INTO student (id, name, gpa) VALUES
    (3, 'Дана',   3.9),
    (4, 'Марат',  2.7),
    (5, 'Алия',   3.5);
```

**Результат подзапроса:**

```sql
INSERT INTO student_archive (id, name, gpa)
SELECT id, name, gpa FROM student WHERE gpa < 2.0;
```

**Что произойдёт с неуказанными столбцами:** подставится `DEFAULT`, если он задан, иначе `NULL`. Если столбец объявлен `NOT NULL` и не имеет `DEFAULT`, вставка завершится ошибкой.

> Форма `INSERT INTO t SET a = 1, b = 2` — расширение MySQL, в стандарте SQL её нет.

## UPDATE — изменение данных

```sql
UPDATE employee
SET salary = salary * 1.1
WHERE dept_id = 3;
```

**Несколько столбцов сразу:**

```sql
UPDATE employee
SET salary = salary * 1.1,
    updated_at = CURRENT_TIMESTAMP
WHERE dept_id = 3;
```

**Значение из подзапроса:**

```sql
UPDATE employee e
SET salary = (SELECT AVG(salary) FROM employee WHERE dept_id = e.dept_id)
WHERE e.salary IS NULL;
```

**Обязательно к запоминанию:**

- **`UPDATE` без `WHERE` меняет ВСЕ строки таблицы.**
- В правой части `SET` используются **старые** значения строки, поэтому `SET a = b, b = a` не меняет их местами — оба получат исходные значения.
- `UPDATE` возвращает только число изменённых строк, а не сами данные. В PostgreSQL можно дописать `RETURNING *`, но это расширение.
- Новые строки `UPDATE` не создаёт.

## DELETE — удаление строк

```sql
DELETE FROM student WHERE gpa < 2.0;
DELETE FROM student;                     -- ВСЕ строки
```

**С подзапросом в условии** — вполне допустимо:

```sql
DELETE FROM enrollment
WHERE student_id IN (SELECT id FROM student WHERE status = 'отчислен');
```

Что делает `DELETE`:

- удаляет **строки**, структура таблицы остаётся;
- активирует триггеры и правила ссылочной целостности (`CASCADE`, `SET NULL`);
- может быть откачен, если не зафиксирована транзакция.

## MERGE (UPSERT)

Объединяет вставку и обновление: «обнови, если есть, иначе вставь».

```sql
MERGE INTO target t
USING source s ON t.id = s.id
WHEN MATCHED THEN
    UPDATE SET t.value = s.value
WHEN NOT MATCHED THEN
    INSERT (id, value) VALUES (s.id, s.value);
```

Диалектные варианты: `INSERT … ON CONFLICT DO UPDATE` (PostgreSQL), `INSERT … ON DUPLICATE KEY UPDATE` (MySQL).

## Транзакции

Изменения данных выполняются в транзакции — атомарной единице работы.

```sql
BEGIN;                                     -- или START TRANSACTION
UPDATE account SET balance = balance - 1000 WHERE id = 1;
UPDATE account SET balance = balance + 1000 WHERE id = 2;
COMMIT;                                    -- зафиксировать
-- ROLLBACK;                               -- откатить всё
```

**Свойства ACID:**

| Свойство | Смысл |
|---|---|
| **A**tomicity (атомарность) | Либо выполняются все операции, либо ни одной |
| **C**onsistency (согласованность) | БД переходит из одного корректного состояния в другое |
| **I**solation (изолированность) | Параллельные транзакции не видят промежуточных результатов друг друга |
| **D**urability (долговечность) | Зафиксированные изменения переживут сбой |

`SAVEPOINT` позволяет откатиться не до начала транзакции, а до промежуточной точки:

```sql
SAVEPOINT sp1;
DELETE FROM log WHERE created_at < DATE '2020-01-01';
ROLLBACK TO SAVEPOINT sp1;
COMMIT;
```

## Изменение данных и ограничения целостности

Любая команда DML проверяется на все ограничения:

```sql
-- Нарушение PRIMARY KEY: такой id уже есть
INSERT INTO student (id, name) VALUES (1, 'Дубль');   -- ошибка

-- Нарушение FOREIGN KEY: группы 999 не существует
INSERT INTO student (id, name, group_id) VALUES (9, 'X', 999);  -- ошибка

-- Нарушение CHECK
UPDATE student SET gpa = 5.5 WHERE id = 1;            -- ошибка

-- Нарушение NOT NULL
INSERT INTO student (id) VALUES (10);                 -- ошибка, если name NOT NULL
```

При удалении родительской строки поведение определяется правилом внешнего ключа:

```sql
-- ON DELETE CASCADE: вместе с группой исчезнут её студенты
DELETE FROM study_group WHERE id = 5;

-- ON DELETE SET NULL: студенты останутся, group_id станет NULL
-- ON DELETE RESTRICT: удаление будет запрещено
```

## Сводка по трём командам

| | `INSERT` | `UPDATE` | `DELETE` |
|---|---|---|---|
| Что делает | Добавляет строки | Изменяет существующие | Удаляет строки |
| Нужен ли `WHERE` | Нет | Практически всегда | Практически всегда |
| Без `WHERE` | — | Изменит все строки | Удалит все строки |
| Меняет структуру | Нет | Нет | Нет |

## Быстрая проверка себя

1. Что сделает `UPDATE employee SET salary = 0;`? *(обнулит зарплату у всех)*
2. Может ли `DELETE` использовать подзапрос в `WHERE`? *(да)*
3. Что вставится в неуказанный столбец с `DEFAULT 0`? *(0)*
4. Меняет ли `SET a = b, b = a` значения местами? *(нет, оба получат старое значение)*
5. Какая команда удалит и данные, и структуру таблицы? *(`DROP TABLE`, это DDL)*
