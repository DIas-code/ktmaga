<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Проект

Сайт подготовки к КТ в магистратуру по группе М094. Общее описание, состояние разделов
и инструкции по добавлению контента — в `../README.md`.

## Правила работы с контентом

- Данные в `src/content/*/meta.ts` взяты **дословно из официальных спецификаций**.
  Не менять их «по смыслу» — только при обновлении самого документа.
- Чего в спецификации нет — того не выдумывать. Например, отдельное время на разделы
  теста «Готовность к обучению» не задано, поэтому у его блоков нет `durationMinutes`
  и сдать их отдельным экзаменом нельзя.
- Английский устроен не как остальные: 4 варианта ответа вместо 5, распределение
  34/33/33 вместо 30/40/30, а буквы A/B/C в аудировании и чтении означают уровень
  понимания, а не трудность. Не «выравнивать» его под другие разделы.
- Тема с полем `noBank` (аудирование) исключается из пробного варианта целиком.
  Не заполнять её вопросами и не компенсировать недобор другими темами.
- После правки вопросов или тем обязательно `npm run check`.

## Замеченные особенности версии Next.js

- `params` и `searchParams` — промисы, доступ только через `await`.
- Типы `PageProps<'/route'>` и `LayoutProps<'/route'>` глобальные, генерируются
  через `next dev` / `next build` / `next typegen`. Импортировать их не нужно.
- Turbopack включён по умолчанию и для `dev`, и для `build`.
- Правило `react-hooks/set-state-in-effect` включено: не вызывать `setState`
  синхронно в теле эффекта. Для чтения внешнего состояния (localStorage, класс темы
  на `<html>`) использовать `useSyncExternalStore` — см. `src/lib/storage.ts`.
- Правило `react-hooks/purity`: никаких `Date.now()` и `Math.random()` во время
  рендера. Момент времени класть в состояние (см. `finishedAt` в `QuizRunner`).
