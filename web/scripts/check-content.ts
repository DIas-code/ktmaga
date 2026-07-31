/**
 * Проверка целостности контента: ссылки на темы, индексы правильных ответов,
 * соответствие банка вопросов спецификации.
 *
 * Запуск: npm run check
 */
import { subjects, getQuestions } from "@/content";
import { LEVELS, plannedTotal } from "@/lib/exam";
import { hasTheory } from "@/lib/theory";

let errors = 0;
const fail = (msg: string) => {
  console.error("  ✗ " + msg);
  errors++;
};

for (const subject of subjects) {
  console.log(`\n${subject.title} (${subject.slug})`);

  const bank = getQuestions(subject.slug);
  const topicSlugs = new Set(subject.topics.map((t) => t.slug));
  const seenIds = new Set<string>();

  const missingNotes = subject.topics.filter((t) => !hasTheory(subject.slug, t.slug));
  console.log(
    `  конспектов: ${subject.topics.length - missingNotes.length} из ${subject.topics.length}` +
      (missingNotes.length ? ` (нет: ${missingNotes.map((t) => t.slug).join(", ")})` : ""),
  );

  for (const q of bank) {
    if (seenIds.has(q.id)) fail(`дубликат id: ${q.id}`);
    seenIds.add(q.id);

    if (!topicSlugs.has(q.topic)) fail(`${q.id}: неизвестная тема "${q.topic}"`);

    const topic = subject.topics.find((t) => t.slug === q.topic);
    if (topic?.noBank) fail(`${q.id}: тема "${q.topic}" помечена как непокрываемая (noBank)`);

    const allowed = subject.spec?.optionCounts ?? [5];
    if (!allowed.includes(q.options.length))
      fail(`${q.id}: ${q.options.length} вариантов, допустимо ${allowed.join(" или ")}`);

    if (q.correct.length === 0) fail(`${q.id}: не задан правильный ответ`);

    if (q.correct.some((i) => i < 0 || i >= q.options.length))
      fail(`${q.id}: индекс правильного ответа вне диапазона`);

    if (new Set(q.correct).size !== q.correct.length)
      fail(`${q.id}: повторяющиеся индексы в correct`);

    if (subject.spec?.answerMode === "single" && q.correct.length !== 1)
      fail(`${q.id}: при одном верном ответе correct должен содержать ровно один индекс`);

    if (q.correct.length === q.options.length)
      fail(`${q.id}: верны все варианты — задание вырождено`);

    if (new Set(q.options).size !== q.options.length)
      fail(`${q.id}: повторяющиеся формулировки вариантов`);

    if (!q.explanation.trim()) fail(`${q.id}: пустой разбор`);
  }

  const spec = subject.spec;
  if (!spec) {
    console.log("  спецификации нет — проверка покрытия пропущена");
    continue;
  }

  /* --- План по темам должен в сумме давать спецификацию --- */
  const planTotal = subject.topics.reduce((n, t) => n + plannedTotal(t), 0);
  if (planTotal !== spec.totalQuestions)
    fail(`сумма плана по темам ${planTotal} ≠ ${spec.totalQuestions} из спецификации`);

  for (const level of LEVELS) {
    const planned = subject.topics.reduce((n, t) => n + (t.plan[level] ?? 0), 0);
    if (planned !== spec.difficultyMix[level])
      fail(
        `уровень ${level}: план по темам ${planned} ≠ ${spec.difficultyMix[level]} из спецификации`,
      );
  }

  /* --- Блоки должны сходиться с общим числом заданий --- */
  if (spec.blocks?.length) {
    const blockTotal = spec.blocks.reduce((n, b) => n + b.questions, 0);
    if (blockTotal !== spec.totalQuestions)
      fail(`сумма заданий по блокам ${blockTotal} ≠ ${spec.totalQuestions}`);

    for (const block of spec.blocks) {
      const topics = subject.topics.filter((t) => t.block === block.slug);
      if (topics.length === 0) fail(`блок "${block.slug}": нет ни одной темы`);
      const planned = topics.reduce((n, t) => n + plannedTotal(t), 0);
      if (planned !== block.questions)
        fail(`блок "${block.slug}": план по темам ${planned} ≠ ${block.questions}`);
    }

    const orphans = subject.topics.filter((t) => !t.block);
    if (orphans.length)
      fail(`темы вне блоков: ${orphans.map((t) => t.slug).join(", ")}`);
  }

  /* --- Хватает ли вопросов на каждую позицию варианта --- */
  const covered = subject.topics.filter((t) => !t.noBank);
  const skipped = subject.topics.filter((t) => t.noBank);

  for (const topic of covered) {
    for (const level of LEVELS) {
      const need = topic.plan[level] ?? 0;
      if (!need) continue;
      const have = bank.filter((q) => q.topic === topic.slug && q.difficulty === level).length;
      if (have < need)
        console.warn(
          `  ! тема "${topic.slug}", уровень ${level}: нужно ${need}, в банке ${have}`,
        );
    }
  }

  for (const level of LEVELS) {
    const planned = covered.reduce((n, t) => n + (t.plan[level] ?? 0), 0);
    const available = bank.filter((q) => q.difficulty === level).length;
    console.log(`  уровень ${level}: в покрываемых темах ${planned}, в банке ${available}`);
  }

  const coverable = covered.reduce((n, t) => n + plannedTotal(t), 0);
  console.log(
    `  вариант: ${coverable} из ${spec.totalQuestions} заданий покрываются банком` +
      (skipped.length ? ` (вне охвата: ${skipped.map((t) => t.slug).join(", ")})` : ""),
  );
  console.log(`  всего вопросов в банке: ${bank.length}`);
}

console.log(errors === 0 ? "\n✓ Проверка пройдена" : `\n✗ Ошибок: ${errors}`);
process.exit(errors === 0 ? 0 : 1);
