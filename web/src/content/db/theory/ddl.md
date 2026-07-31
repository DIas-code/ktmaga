## Классификация команд SQL

| Группа | Команды | Назначение |
|---|---|---|
| **DDL** — определение данных | `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME` | Структура объектов БД |
| **DML** — манипулирование | `INSERT`, `UPDATE`, `DELETE`, `MERGE` | Сами данные |
| **DQL** — запросы | `SELECT` | Выборка данных |
| **DCL** — управление доступом | `GRANT`, `REVOKE` | Права |
| **TCL** — управление транзакциями | `COMMIT`, `ROLLBACK`, `SAVEPOINT` | Транзакции |

> `SELECT` часто относят к DML — обе трактовки встречаются. А вот `CREATE INDEX` — точно DDL, `INSERT` — точно DML.

## CREATE TABLE

```sql
CREATE TABLE student (
    id         INT          PRIMARY KEY,
    iin        CHAR(12)     UNIQUE NOT NULL,
    name       VARCHAR(60)  NOT NULL,
    birth_date DATE,
    gpa        NUMERIC(3,2) CHECK (gpa BETWEEN 0 AND 4),
    group_id   INT          REFERENCES study_group(id)
                            ON DELETE SET NULL,
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);
```

### Основные типы данных

| Категория | Типы | Замечания |
|---|---|---|
| Целые | `SMALLINT`, `INT`, `BIGINT` | |
| Точные дробные | `NUMERIC(p, s)`, `DECIMAL(p, s)` | p — всего цифр, s — после запятой. Для денег |
| Приближённые | `REAL`, `FLOAT`, `DOUBLE PRECISION` | Погрешность округления |
| Строки | `CHAR(n)` — фиксированная, `VARCHAR(n)` — переменная, `TEXT` | `CHAR` дополняется пробелами |
| Дата и время | `DATE`, `TIME`, `TIMESTAMP`, `INTERVAL` | |
| Логический | `BOOLEAN` | |
| Двоичные | `BLOB`, `BYTEA` | |

`NUMERIC(3,2)` — это 3 значащие цифры, из них 2 после запятой: допустимы значения от −9.99 до 9.99.

### Ограничения (constraints)

| Ограничение | Что делает |
|---|---|
| `PRIMARY KEY` | Уникальность **и** запрет `NULL` |
| `UNIQUE` | Уникальность; `NULL` обычно допускается |
| `NOT NULL` | Запрет пустого значения |
| `CHECK (условие)` | Произвольная проверка значения |
| `FOREIGN KEY … REFERENCES` | Ссылочная целостность |
| `DEFAULT значение` | Значение по умолчанию |

Ограничение на **уровне таблицы** нужно, когда оно затрагивает несколько столбцов:

```sql
CREATE TABLE enrollment (
    student_id INT NOT NULL,
    course_id  INT NOT NULL,
    grade      SMALLINT,
    PRIMARY KEY (student_id, course_id),                 -- составной ключ
    FOREIGN KEY (student_id) REFERENCES student(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id)  REFERENCES course(id),
    CONSTRAINT chk_grade CHECK (grade BETWEEN 2 AND 5)   -- именованное
);
```

### Правила ссылочной целостности

| Правило | Поведение при удалении родительской строки |
|---|---|
| `NO ACTION` / `RESTRICT` | Запретить удаление (по умолчанию) |
| `CASCADE` | Удалить дочерние строки |
| `SET NULL` | Записать `NULL` во внешний ключ |
| `SET DEFAULT` | Записать значение по умолчанию |

Те же правила применимы к `ON UPDATE`.

## ALTER TABLE

```sql
ALTER TABLE student ADD COLUMN email VARCHAR(80);
ALTER TABLE student DROP COLUMN email;
ALTER TABLE student ALTER COLUMN name TYPE VARCHAR(100);
ALTER TABLE student ADD CONSTRAINT uq_email UNIQUE (email);
ALTER TABLE student DROP CONSTRAINT uq_email;
ALTER TABLE student RENAME COLUMN name TO full_name;
```

## DROP, DELETE и TRUNCATE

| Команда | Что удаляет | Структура остаётся | Откат | Триггеры |
|---|---|---|---|---|
| `DROP TABLE t` | Таблицу целиком | **Нет** | Обычно нет | — |
| `DELETE FROM t` | Строки (можно с `WHERE`) | Да | Да | Срабатывают |
| `TRUNCATE TABLE t` | Все строки | Да | Обычно нет | Не срабатывают |

```sql
DROP TABLE student;              -- нет ни данных, ни таблицы
DELETE FROM student WHERE gpa < 2;  -- часть строк
DELETE FROM student;             -- ВСЕ строки, таблица остаётся
TRUNCATE TABLE student;          -- все строки, быстро
```

> `DELETE` **без** `WHERE` удаляет все строки, а не одну. Вариант «удалит только первую строку» — ловушка.

`TRUNCATE` быстрее `DELETE`, потому что не пишет каждую строку в журнал построчно, но и откатить его обычно нельзя.

## Индексы подробнее

```sql
CREATE INDEX idx_emp_dept ON employee(dept_id);              -- обычный
CREATE UNIQUE INDEX idx_emp_email ON employee(email);        -- уникальный
CREATE INDEX idx_emp_full ON employee(dept_id, hired_at);    -- составной
DROP INDEX idx_emp_dept;
```

> Синтаксис фиксирован: `CREATE INDEX имя ON таблица(столбцы)`. Конструкция
> `CREATE OR REPLACE` к индексам **неприменима** — она работает для представлений,
> процедур и функций. Предлог `FOR` вместо `ON` тоже неверен.

**Виды индексов:**

| Вид | Что делает |
|---|---|
| B-дерево | Универсальный: равенство, диапазоны, сортировка. По умолчанию |
| Хеш | Только точное равенство, зато O(1) |
| Составной | По нескольким столбцам; работает и по префиксу списка |
| Уникальный | Дополнительно обеспечивает уникальность |
| Кластерный | Задаёт физический порядок строк на диске; в таблице только один |
| Частичный | Индексируется лишь часть строк по условию |
| Полнотекстовый | Поиск слов внутри текста |

**Когда индекс не помогает:**

- шаблон `LIKE '%текст'` — начало строки неизвестно, обычный индекс бесполезен;
- функция над столбцом `WHERE UPPER(name) = 'ИВАН'` — нужен индекс по выражению;
- столбец с малым числом различных значений (пол, флаг) — выгоднее полное сканирование;
- очень маленькая таблица — её дешевле прочитать целиком.

**Цена индекса:** ускоряет чтение, но замедляет `INSERT`, `UPDATE`, `DELETE` — каждый
индекс нужно поддерживать. И занимает место на диске.

## Представления (VIEW)

```sql
CREATE VIEW v_top_students AS
SELECT id, name, gpa FROM student WHERE gpa >= 3.5;

CREATE OR REPLACE VIEW v_top_students AS …;   -- здесь OR REPLACE допустимо
DROP VIEW v_top_students;
```

Представление — **сохранённый запрос**, «виртуальная таблица». Данных не хранит:
при каждом обращении запрос выполняется заново.

**Зачем нужны:** скрыть сложность запроса, ограничить видимые столбцы и строки
(средство разграничения доступа), обеспечить независимость приложения от изменений схемы.

**Обновляемость.** Через представление можно менять данные, только если оно построено
на одной таблице без агрегатов, `DISTINCT`, `GROUP BY` и соединений.

**Материализованное представление**, в отличие от обычного, **хранит** результат
физически и требует обновления (`REFRESH`). Это уже приём денормализации.

## Другие объекты схемы

| Объект | Назначение |
|---|---|
| **Последовательность** (SEQUENCE) | Генератор уникальных чисел для суррогатных ключей |
| **Синоним** (SYNONYM) | Альтернативное имя объекта; общие синонимы создают владельцы объектов или привилегированные пользователи |
| **Триггер** | Процедура, запускаемая автоматически при `INSERT` / `UPDATE` / `DELETE` |
| **Хранимая процедура** | Программа на стороне сервера |
| **Системный каталог** | Служебные таблицы с метаданными обо всех объектах базы |

**Триггеры контроля целостности** срабатывают **после** полного выполнения операции
обновления — иначе они проверяли бы промежуточное, ещё несогласованное состояние.

## Индексы и представления

```sql
CREATE INDEX idx_emp_dept ON employee(dept_id);
CREATE UNIQUE INDEX idx_emp_email ON employee(email);
DROP INDEX idx_emp_dept;
```

Индекс ускоряет поиск и соединения, но замедляет вставку/обновление и занимает место.

```sql
CREATE VIEW v_top_students AS
SELECT id, name, gpa FROM student WHERE gpa >= 3.5;
```

Представление — сохранённый запрос, «виртуальная таблица». Данных не хранит (в отличие от материализованного представления).

## Интерактивный режим работы

Работа с БД возможна в двух формах:

- **интерактивная** — команды набираются в клиенте (`psql`, `mysql`, SQL Developer, pgAdmin) и выполняются сразу;
- **встроенный SQL** — запросы внутри программы на языке высокого уровня, через драйвер (JDBC, ODBC, psycopg).

Типичный сеанс интерактивной работы:

```sql
CREATE TABLE dept (id INT PRIMARY KEY, title VARCHAR(60) NOT NULL);

INSERT INTO dept (id, title) VALUES (1, 'Разработка'), (2, 'Тестирование');

SELECT * FROM dept;

UPDATE dept SET title = 'QA' WHERE id = 2;

DELETE FROM dept WHERE id = 2;

COMMIT;    -- если автокоммит выключен
```

## Быстрая проверка себя

1. К какой группе относится `CREATE INDEX`? *(DDL)*
2. Что останется после `DELETE FROM t;` — таблица или ничего? *(таблица, но пустая)*
3. Даёт ли `PRIMARY KEY` запрет `NULL`? *(да, автоматически)*
4. Допустимо ли значение 4.50 в столбце `NUMERIC(3,2) CHECK (gpa BETWEEN 0 AND 4)`? *(нет, нарушает `CHECK`)*
5. Что делает `ON DELETE CASCADE`? *(удаляет дочерние строки вместе с родительской)*
