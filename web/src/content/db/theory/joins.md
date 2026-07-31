## Выборка из одной таблицы

```sql
SELECT [DISTINCT] список_выборки
FROM   таблица
WHERE  условие
GROUP BY столбцы
HAVING условие_на_группы
ORDER BY столбцы;
```

Псевдонимы задаются через `AS` (для столбцов) и просто пробелом (для таблиц):

```sql
SELECT e.name AS employee_name, e.salary * 12 AS annual
FROM employee e
WHERE e.dept_id = 3;
```

## Соединения: обзор

| Тип | Что возвращает |
|---|---|
| `INNER JOIN` | Только совпавшие пары строк |
| `LEFT [OUTER] JOIN` | Все строки **левой** таблицы + совпавшие из правой (иначе `NULL`) |
| `RIGHT [OUTER] JOIN` | Все строки **правой** таблицы + совпавшие из левой |
| `FULL [OUTER] JOIN` | Все строки обеих таблиц |
| `CROSS JOIN` | Декартово произведение — все пары |

```sql
SELECT e.name, d.title
FROM employee e
INNER JOIN dept d ON e.dept_id = d.id;
```

### Считаем строки

Пусть A содержит 3 строки, B — 4 строки, и **совпадений по ключу нет**:

| Запрос | Строк в результате |
|---|---|
| `A INNER JOIN B` | 0 |
| `A LEFT JOIN B` | 3 |
| `A RIGHT JOIN B` | **4** |
| `A FULL JOIN B` | 3 + 4 = **7** |
| `A CROSS JOIN B` | 3 · 4 = **12** |

> `RIGHT JOIN` сохраняет строки **правой** таблицы. Подмена «левой» на «правой» — стандартный дистрактор.

Если же у каждой строки A есть ровно одно совпадение в B, то `INNER JOIN` даст 3 строки. А если у одной строки A есть **два** совпадения — 4 строки: соединение может **увеличивать** число строк.

## Синтаксис условия соединения

```sql
-- ON: произвольное условие
FROM employee e JOIN dept d ON e.dept_id = d.id

-- USING: когда столбцы называются одинаково
FROM employee JOIN dept USING (dept_id)

-- NATURAL JOIN: по ВСЕМ одноимённым столбцам
FROM employee NATURAL JOIN dept

-- Старый синтаксис через запятую (эквивалент INNER JOIN)
FROM employee e, dept d WHERE e.dept_id = d.id
```

`NATURAL JOIN` удобен, но опасен: если в одну из таблиц добавят столбец с совпадающим именем (`created_at`), условие соединения молча изменится и запрос сломается.

## Самосоединение

Таблицу можно соединить саму с собой — обязательно с разными псевдонимами.

```sql
-- Сотрудник и его руководитель из одной таблицы
SELECT e.name AS employee, m.name AS manager
FROM employee e
LEFT JOIN employee m ON e.manager_id = m.id;
```

`LEFT JOIN` здесь важен: у директора `manager_id IS NULL`, и при `INNER JOIN` он пропал бы из результата.

## Соединение трёх и более таблиц

```sql
SELECT s.name, c.title, e.grade
FROM student s
JOIN enrollment e ON e.student_id = s.id
JOIN course     c ON c.id = e.course_id
WHERE e.grade >= 4
ORDER BY s.name;
```

Так разворачивается связь М:М: через связующую таблицу `enrollment`.

## Соединения и агрегаты

Классическая связка «сколько сотрудников в каждом отделе, включая пустые»:

```sql
SELECT d.title, COUNT(e.id) AS cnt
FROM dept d
LEFT JOIN employee e ON e.dept_id = d.id
GROUP BY d.title;
```

**Почему `COUNT(e.id)`, а не `COUNT(*)`:** для отдела без сотрудников `LEFT JOIN` выдаёт одну строку, где все поля `employee` равны `NULL`. `COUNT(*)` посчитает эту строку и вернёт **1**, а `COUNT(e.id)` пропустит `NULL` и вернёт **0**. Это готовое тестовое задание.

## Условие в ON против условия в WHERE

Для `INNER JOIN` разницы нет. Для внешних соединений — принципиальная:

```sql
-- Отделы + их сотрудники из Алматы; отделы без таких сотрудников ОСТАЮТСЯ
FROM dept d LEFT JOIN employee e
     ON e.dept_id = d.id AND e.city = 'Алматы'

-- Условие в WHERE отбрасывает строки с NULL и превращает LEFT JOIN в INNER
FROM dept d LEFT JOIN employee e ON e.dept_id = d.id
WHERE e.city = 'Алматы'
```

## Операции над результатами запросов

Не путать с соединениями: соединение добавляет **столбцы**, а `UNION` — **строки**.

```sql
SELECT id, name FROM student_kz
UNION       -- без дубликатов
SELECT id, name FROM student_ru;

SELECT id FROM enrolled INTERSECT SELECT id FROM paid;   -- в обоих
SELECT id FROM enrolled EXCEPT    SELECT id FROM paid;   -- только в первом
```

Требования: одинаковое число столбцов и совместимые типы. `UNION ALL` быстрее `UNION`, потому что не убирает дубликаты.

## Быстрая проверка себя

1. `A` (5 строк) `RIGHT JOIN B` (2 строки), совпадений нет. Сколько строк? *(2)*
2. Чем `COUNT(*)` отличается от `COUNT(e.id)` после `LEFT JOIN`? *(считает строку-заглушку с `NULL`)*
3. Что вернёт `CROSS JOIN` таблиц из 4 и 6 строк? *(24 строки)*
4. Зачем нужны псевдонимы при самосоединении? *(различать два вхождения одной таблицы)*
5. Чем `UNION` отличается от `JOIN`? *(добавляет строки, а не столбцы)*
