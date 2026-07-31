import Link from "next/link";
import {
  subjects,
  getQuestions,
  getUniqueQuestions,
  getVariants,
  getVariantQuestions,
  plannedCount,
} from "@/content";
import { accentClasses } from "@/lib/accent";
import { coverableDuration } from "@/lib/exam";
import { hasTheory } from "@/lib/theory";

export default function HomePage() {
  const ready = subjects.filter((s) => s.ready);
  const totalQuestions = ready.reduce((n, s) => n + (s.spec?.totalQuestions ?? 0), 0);
  const totalMinutes = ready.reduce((n, s) => n + (s.spec?.durationMinutes ?? 0), 0);
  const totalMaxScore = ready.reduce(
    (n, s) => n + (s.spec ? s.spec.totalQuestions * s.spec.maxScorePerQuestion : 0),
    0,
  );

  // Готовые варианты, собранные из разобранных пробников ЦЕНТ.
  const variantRows = ready
    .map((subject) => {
      const list = getVariants(subject.slug).map((v) => ({
        number: v.number,
        questions: getVariantQuestions(subject.slug, v.number).length,
        fromMocks: v.fromMocks,
      }));
      return { subject, list };
    })
    .filter((row) => row.list.length > 0);

  const totalVariants = variantRows.reduce((n, r) => n + r.list.length, 0);
  const totalUnique = ready.reduce((n, s) => n + getUniqueQuestions(s.slug).length, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="max-w-3xl">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Комплексное тестирование в магистратуру
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          М094 — Информационные технологии
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Четыре блока: английский язык, готовность к обучению, базы данных, алгоритмы и
          структуры данных. Здесь — конспекты по каждой теме из официальных спецификаций и
          тренажёр, который собирает вариант по тем же правилам, что и настоящий тест.
        </p>

        <dl className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
          <Stat label="заданий" value={`${totalQuestions}`} note="во всех четырёх блоках" />
          <Stat label="минут" value={`${totalMinutes}`} note="суммарно на все блоки" />
          <Stat label="баллов" value={`${totalMaxScore}`} note="максимум за весь тест" />
        </dl>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Суммы по четырём спецификациям. На самом КТ блоки сдаются по отдельности,
          у каждого своё время.
        </p>
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
            Полные тестники
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {totalUnique} заданий без повторов
          </span>
        </div>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-400">
          Весь банк заданий по предмету одним списком, без таймера. Отвечаете —
          под заданием раскрывается разбор и вся теория темы блоками: попался вопрос
          про быструю сортировку, рядом лежат и пузырьковая, и слиянием, и кучей.
          Прогресс сохраняется, банк можно проходить частями.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ready.map((subject) => {
            const accent = accentClasses[subject.accent];
            const n = getUniqueQuestions(subject.slug).length;
            return (
              <Link
                key={subject.slug}
                href={`/${subject.slug}/bank`}
                className={`group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:shadow-lg ${accent.ring} dark:border-slate-800 dark:bg-slate-900`}
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl text-lg ${accent.chip}`}
                  aria-hidden
                >
                  {subject.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{subject.shortTitle}</span>
                  <span className="block text-xs text-slate-500 tabular-nums dark:text-slate-400">
                    {n} заданий
                  </span>
                </span>
                <span className={`shrink-0 text-sm ${accent.text}`} aria-hidden>
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {totalVariants > 0 && (
        <section className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
              Варианты из пробников
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {totalVariants} вариантов · состав зафиксирован
            </span>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-400">
            Задания восстановлены из разобранных пробников ЦЕНТ и разложены по вариантам
            строго по плану спецификации. Вариант не меняется между попытками — его можно
            пройти, разобрать ошибки и вернуться к тому же набору заданий позже.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {variantRows.map(({ subject, list }) => {
              const accent = accentClasses[subject.accent];
              const questions = list[0].questions;
              const mocks = list[0].fromMocks;
              return (
                <div
                  key={subject.slug}
                  className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-xl text-base ${accent.chip}`}
                      aria-hidden
                    >
                      {subject.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold">{subject.shortTitle}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {questions} заданий · {coverableDuration(subject)} мин · из пробников{" "}
                        {mocks} из {questions}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {list.map((v) => (
                      <li key={v.number}>
                        <Link
                          href={`/${subject.slug}/variants/${v.number}`}
                          className={`block rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold tabular-nums transition hover:shadow-md ${accent.ring} ${accent.text} dark:border-slate-700`}
                        >
                          Вариант {v.number}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/${subject.slug}/variants`}
                    className="mt-4 inline-block text-xs font-medium text-slate-500 hover:underline dark:text-slate-400"
                  >
                    Все варианты раздела →
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section className="mt-12">
        <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
          Блоки теста
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {subjects.map((subject) => {
            const accent = accentClasses[subject.accent];
            const notesReady = subject.topics.filter((t) =>
              hasTheory(subject.slug, t.slug),
            ).length;
            const questionCount = getQuestions(subject.slug).length;
            const perVariant = subject.topics.reduce((n, t) => n + plannedCount(t.plan), 0);

            return (
              <Link
                key={subject.slug}
                href={`/${subject.slug}`}
                className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-lg ${accent.ring} dark:border-slate-800 dark:bg-slate-900`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-xl text-lg ${accent.chip}`}
                    aria-hidden
                  >
                    {subject.icon}
                  </span>
                  {!subject.ready && (
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      нужна спецификация
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-semibold">{subject.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {subject.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <span>{subject.topics.length} тем</span>
                  {subject.ready && (
                    <>
                      <span>{perVariant} заданий в варианте</span>
                      <span>{notesReady} конспектов</span>
                      <span>{questionCount} вопросов в банке</span>
                    </>
                  )}
                </div>

                <span className={`mt-5 text-sm font-medium ${accent.text} group-hover:underline`}>
                  Открыть раздел →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-semibold">Как устроен тест</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <th className="py-2 pr-4 font-medium">Блок</th>
                <th className="py-2 pr-4 font-medium">Заданий</th>
                <th className="py-2 pr-4 font-medium">Время</th>
                <th className="py-2 pr-4 font-medium">Форма ответа</th>
                <th className="py-2 font-medium">Балл за задание</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((s) => (
                <tr
                  key={s.slug}
                  className="border-b border-slate-100 last:border-0 dark:border-slate-800/60"
                >
                  <td className="py-2.5 pr-4 font-medium">{s.shortTitle}</td>
                  <td className="py-2.5 pr-4">{s.spec?.totalQuestions ?? "—"}</td>
                  <td className="py-2.5 pr-4">
                    {s.spec ? `${s.spec.durationMinutes} мин` : "—"}
                  </td>
                  <td className="py-2.5 pr-4">
                    {s.spec
                      ? s.spec.answerMode === "multiple"
                        ? "один или несколько верных"
                        : `один верный из ${s.spec.optionCounts.join(" или ")}`
                      : "—"}
                  </td>
                  <td className="py-2.5">{s.spec ? `до ${s.spec.maxScorePerQuestion}` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
          В трёх блоках задания распределены по трудности как 30% лёгких (A), 40% средних (B)
          и 30% сложных (C). Английский устроен иначе: 34 / 33 / 33, причём в аудировании
          и чтении эти буквы означают не трудность, а уровень понимания — фрагментарное,
          детальное и глобальное.
        </p>
      </section>
    </div>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
      <dt className="sr-only">{`${label} — ${note}`}</dt>
      <dd>
        <span className="block text-2xl font-bold tabular-nums">{value}</span>
        <span className="block text-xs text-slate-500 dark:text-slate-400">{label}</span>
      </dd>
    </div>
  );
}
