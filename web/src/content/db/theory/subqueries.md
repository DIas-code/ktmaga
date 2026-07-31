## Что такое подзапрос

**Подзапрос** — запрос `SELECT`, вложенный в другой запрос. Может стоять в `SELECT`, `FROM`, `WHERE`, `HAVING`, а также внутри `INSERT`, `UPDATE`, `DELETE`.

Два принципиально разных вида:

| Вид | Ссылается на внешний запрос | Как вычисляется |
|---|---|---|
| **Некоррелированный** (вложенный, простой) | Нет | Один раз, независимо от внешнего запроса |
| **Коррелированный** (связанный) | **Да** | Логически заново для каждой строки внешнего запроса |

## Некоррелированные подзапросы

Самостоятельны: их можно выполнить отдельно.

**Скалярный** — возвращает одно значение:

```sql
SELECT name, salary
FROM employee
WHERE salary > (SELECT AVG(salary) FROM employee);
```

Может стоять и в списке выборки:

```sql
SELECT name,
       salary,
       (SELECT AVG(salary) FROM employee) AS company_avg
FROM employee;
```

**Многострочный** — с `IN`, `ANY`, `ALL`:

```sql
SELECT name FROM employee
WHERE dept_id IN (SELECT id FROM dept WHERE city = 'Алматы');
```

**Подзапрос в `FROM`** (производная таблица) — обязан иметь псевдоним:

```sql
SELECT d.title, s.avg_salary
FROM dept d
JOIN (
    SELECT dept_id, AVG(salary) AS avg_salary
    FROM employee
    GROUP BY dept_id
) s ON s.dept_id = d.id;
```

## Коррелированные подзапросы

Ссылаются на столбцы внешнего запроса, поэтому отдельно не выполняются.

```sql
SELECT name
FROM employee e
WHERE salary > (
    SELECT AVG(salary)
    FROM employee
    WHERE dept_id = e.dept_id      -- ← ссылка на внешний запрос
);
```

Читается так: «сотрудники, чья зарплата выше средней **по их собственному отделу**». Убрать условие `dept_id = e.dept_id` — и подзапрос станет некоррелированным, сравнивая со средней по всей компании.

Логически подзапрос выполняется для **каждой строки** внешнего запроса — отсюда его цена. (Оптимизатор часто переписывает такое в соединение, но на тесте спрашивают именно логическую модель.)

## EXISTS и NOT EXISTS

`EXISTS` возвращает TRUE, если подзапрос вернул **хотя бы одну строку**. Что именно он вернул — неважно, поэтому пишут `SELECT 1`.

```sql
-- Отделы, где есть хотя бы один сотрудник
SELECT d.title
FROM dept d
WHERE EXISTS (SELECT 1 FROM employee e WHERE e.dept_id = d.id);

-- Отделы без сотрудников
SELECT d.title
FROM dept d
WHERE NOT EXISTS (SELECT 1 FROM employee e WHERE e.dept_id = d.id);
```

**`NOT EXISTS` vs `NOT IN`:** при наличии `NULL` в результате подзапроса `NOT IN` даёт пустой результат (сравнение с `NULL` → UNKNOWN), а `NOT EXISTS` работает корректно.

```sql
-- Опасно, если dept_id где-то NULL
WHERE d.id NOT IN (SELECT dept_id FROM employee)

-- Безопасно
WHERE NOT EXISTS (SELECT 1 FROM employee e WHERE e.dept_id = d.id)
```

`EXISTS` обычно используется в коррелированной форме — без ссылки на внешний запрос он либо всегда TRUE, либо всегда FALSE.

## Кванторы ALL и ANY (SOME)

| Выражение | Истинно, когда |
|---|---|
| `x > ALL (подзапрос)` | x больше **каждого** значения |
| `x > ANY (подзапрос)` | x больше **хотя бы одного** значения |
| `x = ANY (…)` | То же, что `x IN (…)` |
| `x <> ALL (…)` | То же, что `x NOT IN (…)` |

```sql
-- Дороже любого товара категории 2 (то есть дороже максимума)
WHERE price > ALL (SELECT price FROM product WHERE category_id = 2)

-- Дороже хотя бы одного (то есть дороже минимума)
WHERE price > ANY (SELECT price FROM product WHERE category_id = 2)
```

Полезные тождества: `> ALL` ≡ `> MAX`, `> ANY` ≡ `> MIN`, `< ALL` ≡ `< MIN`, `< ANY` ≡ `< MAX`.

## Подзапросы в DML

```sql
-- Вставка результата запроса
INSERT INTO archive (id, name)
SELECT id, name FROM student WHERE status = 'выпускник';

-- Обновление по подзапросу
UPDATE product p
SET price = price * 0.9
WHERE p.category_id IN (SELECT id FROM category WHERE title = 'Распродажа');

-- Удаление по коррелированному подзапросу
DELETE FROM dept d
WHERE NOT EXISTS (SELECT 1 FROM employee e WHERE e.dept_id = d.id);
```

## Общие табличные выражения (CTE)

`WITH` выносит подзапрос вперёд и делает запрос читаемым:

```sql
WITH dept_avg AS (
    SELECT dept_id, AVG(salary) AS avg_salary
    FROM employee
    GROUP BY dept_id
)
SELECT e.name, e.salary, a.avg_salary
FROM employee e
JOIN dept_avg a ON a.dept_id = e.dept_id
WHERE e.salary > a.avg_salary;
```

**Рекурсивный CTE** — для иерархий:

```sql
WITH RECURSIVE subordinates AS (
    SELECT id, name, manager_id FROM employee WHERE id = 1
    UNION ALL
    SELECT e.id, e.name, e.manager_id
    FROM employee e
    JOIN subordinates s ON e.manager_id = s.id
)
SELECT * FROM subordinates;
```

## Разбор типовых заданий

**«Второй по величине оклад»:**

```sql
SELECT MAX(salary) FROM employee
WHERE salary < (SELECT MAX(salary) FROM employee);
```

**«Сотрудники, получающие больше своего руководителя»** (коррелированный):

```sql
SELECT e.name
FROM employee e
WHERE e.salary > (SELECT m.salary FROM employee m WHERE m.id = e.manager_id);
```

**«Студенты, сдавшие все предметы»** (деление через двойное `NOT EXISTS`):

```sql
SELECT s.id, s.name
FROM student s
WHERE NOT EXISTS (
    SELECT 1 FROM subject sub
    WHERE NOT EXISTS (
        SELECT 1 FROM passed p
        WHERE p.student_id = s.id AND p.subject_id = sub.id
    )
);
```

## Быстрая проверка себя

1. Чем коррелированный подзапрос отличается от обычного? *(ссылается на столбцы внешнего запроса)*
2. Сколько раз логически выполняется коррелированный подзапрос? *(для каждой строки внешнего запроса)*
3. Почему `NOT EXISTS` надёжнее `NOT IN`? *(корректно работает при `NULL`)*
4. Чему эквивалентно `x > ALL (...)`? *(`x > MAX(...)`)*
5. Обязателен ли псевдоним у подзапроса в `FROM`? *(да)*
