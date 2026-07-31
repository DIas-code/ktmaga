## Логический порядок выполнения SELECT

Запрос **пишется** в одном порядке, а **выполняется** в другом. Это ключ ко всей теме.

```
1. FROM      + JOIN   — сформировать исходный набор строк
2. WHERE              — отфильтровать отдельные строки
3. GROUP BY           — собрать строки в группы
4. HAVING             — отфильтровать группы
5. SELECT             — вычислить список выборки, назначить псевдонимы
6. DISTINCT           — убрать дубликаты
7. ORDER BY           — отсортировать результат
8. LIMIT / FETCH      — обрезать
```

**Следствия, которые проверяют на тесте:**

| Вопрос | Ответ | Почему |
|---|---|---|
| Можно ли использовать агрегат в `WHERE`? | Нет | `WHERE` работает до `GROUP BY` |
| Можно ли использовать псевдоним из `SELECT` в `WHERE`? | Нет | `SELECT` выполняется позже |
| Можно ли использовать псевдоним из `SELECT` в `ORDER BY`? | **Да** | `ORDER BY` выполняется после `SELECT` |
| Можно ли использовать агрегат в `HAVING`? | **Да** | `HAVING` работает после агрегации |
| Что выполняется раньше: `WHERE` или `GROUP BY`? | `WHERE` | |

## ORDER BY

```sql
SELECT name, salary, dept_id
FROM employee
ORDER BY dept_id ASC, salary DESC;
```

- По умолчанию — **`ASC`** (по возрастанию).
- Направление указывается **каждому** столбцу отдельно: `ORDER BY a DESC, b` означает `a DESC, b ASC`.
- Можно сортировать по номеру столбца из списка выборки: `ORDER BY 2 DESC` (хрупко — при правке `SELECT` ломается).
- Можно сортировать по столбцу, которого нет в `SELECT` (кроме случая с `DISTINCT`).
- Можно сортировать по выражению: `ORDER BY LENGTH(name)`.

**Позиция NULL при сортировке** зависит от СУБД. Стандарт даёт явное управление:

```sql
ORDER BY bonus DESC NULLS LAST;
```

## GROUP BY

`GROUP BY` собирает строки с одинаковыми значениями указанных столбцов в одну группу, и агрегатные функции считаются по каждой группе.

```sql
SELECT dept_id, COUNT(*) AS people, AVG(salary) AS avg_salary
FROM employee
GROUP BY dept_id;
```

**Правило списка выборки:** любой столбец в `SELECT` должен быть либо в `GROUP BY`, либо внутри агрегатной функции.

**Группировка по нескольким столбцам** — группа образуется по комбинации значений:

```sql
SELECT dept_id, position, COUNT(*)
FROM employee
GROUP BY dept_id, position;
```

**Группировка по выражению:**

```sql
SELECT EXTRACT(YEAR FROM hired_at) AS y, COUNT(*)
FROM employee
GROUP BY EXTRACT(YEAR FROM hired_at)
ORDER BY y;
```

## HAVING

`HAVING` фильтрует **группы**, `WHERE` фильтрует **строки**.

```sql
SELECT dept_id, COUNT(*) AS cnt
FROM employee
WHERE salary > 100000        -- 1) отбираем строки
GROUP BY dept_id             -- 2) группируем
HAVING COUNT(*) > 2          -- 3) отбрасываем мелкие группы
ORDER BY cnt DESC;           -- 4) сортируем
```

Разбор по шагам:

1. `WHERE salary > 100000` — оставляем только высокооплачиваемых.
2. `GROUP BY dept_id` — группируем **уже отобранные** строки по отделам.
3. `HAVING COUNT(*) > 2` — оставляем отделы, где таких сотрудников больше двух.
4. `ORDER BY cnt DESC` — псевдоним `cnt` здесь доступен, потому что `SELECT` уже выполнился.

**Заменить `HAVING COUNT(*) > 2` на `WHERE COUNT(*) > 2` нельзя** — это ошибка выполнения.

А вот наоборот, условие без агрегата, из `HAVING` в `WHERE` перенести можно и **нужно**: `WHERE` отбросит строки раньше, и группировать придётся меньше.

```sql
-- Работает, но медленно
GROUP BY dept_id HAVING dept_id <> 5

-- Лучше
WHERE dept_id <> 5 GROUP BY dept_id
```

## Расширения GROUP BY

```sql
-- Промежуточные итоги по иерархии + общий итог
SELECT dept_id, position, SUM(salary)
FROM employee
GROUP BY ROLLUP (dept_id, position);

-- Все комбинации группировок
GROUP BY CUBE (dept_id, position);

-- Явно перечисленные наборы
GROUP BY GROUPING SETS ((dept_id), (position), ());
```

В строках итогов сгруппированные столбцы получают значение `NULL`.

## Типовые задачи

**Топ-3 отдела по фонду оплаты труда:**

```sql
SELECT dept_id, SUM(salary) AS payroll
FROM employee
GROUP BY dept_id
ORDER BY payroll DESC
FETCH FIRST 3 ROWS ONLY;
```

**Найти дубликаты:**

```sql
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

**Отделы, где все сотрудники получают больше 100 000:**

```sql
SELECT dept_id
FROM employee
GROUP BY dept_id
HAVING MIN(salary) > 100000;
```

**Количество сотрудников по отделам, включая пустые отделы:**

```sql
SELECT d.title, COUNT(e.id) AS cnt
FROM dept d
LEFT JOIN employee e ON e.dept_id = d.id
GROUP BY d.title;
```

Здесь важно `COUNT(e.id)`, а не `COUNT(*)`: для пустого отдела `LEFT JOIN` даёт одну строку с `NULL`, и `COUNT(*)` посчитал бы её как 1.

## Быстрая проверка себя

1. Что выполняется раньше: `HAVING` или `SELECT`? *(`HAVING`)*
2. Доступен ли псевдоним из `SELECT` в `ORDER BY`? А в `WHERE`? *(да; нет)*
3. Можно ли сортировать по столбцу, отсутствующему в `SELECT`? *(да, если нет `DISTINCT`)*
4. Чем `WHERE` отличается от `HAVING`? *(строки до группировки vs группы после)*
5. `ORDER BY a DESC, b` — как отсортируется `b`? *(по возрастанию)*
