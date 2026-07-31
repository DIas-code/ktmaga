/**
 * Происхождение задания.
 *
 * Задания попали в банк из разных мест, и проверять их надо по-разному:
 * восстановленное со скриншота сверяется с картинкой, импортированное
 * из банка с ключами — с исходным документом. Источник выводится
 * из префикса идентификатора, поэтому не требует ни одного лишнего
 * поля в пяти с лишним тысячах объектов.
 */
export interface QuestionSource {
  /** Короткая метка для интерфейса. */
  label: string;
  /** Где лежит исходник в папке `Пробники`. */
  origin: string;
  /** Можно ли сверить задание с картинкой глазами. */
  verifiable: "screenshot" | "document" | "authored";
}

const BY_PREFIX: Record<string, QuestionSource> = {
  ct: {
    label: "скриншот пробника ЦЕНТ",
    origin: "Пробники/АлгоПробник, ПробникБД, ПробникКакойТо, англПробник — скриншоты probtest.testcenter.kz",
    verifiable: "screenshot",
  },
  kb: {
    label: "банк с ключами",
    origin: "Пробники/Сливы бейба/Алгоритм-рус.docx, База_данных_ru.docx",
    verifiable: "document",
  },
  bk: {
    label: "массовый импорт из банка",
    origin: "Пробники/Сливы бейба/*.docx, английскийПробники/*.pdf, тгопробники/*.pdf",
    verifiable: "document",
  },
  hi: {
    label: "составлено (история алгоритмов)",
    origin: "не из пробника: вопросы об авторах и датах, регулярно встречающиеся на КТ",
    verifiable: "authored",
  },
};

/** Задания, написанные под спецификацию: префикс совпадает со slug предмета. */
const AUTHORED = new Set(["al", "db", "en", "rd"]);

const AUTHORED_SOURCE: QuestionSource = {
  label: "составлено по спецификации",
  origin: "не из пробника: задание написано под формулировки официальной спецификации",
  verifiable: "authored",
};

const UNKNOWN: QuestionSource = {
  label: "источник не указан",
  origin: "происхождение не записано при импорте",
  verifiable: "authored",
};

export function questionSource(id: string): QuestionSource {
  const prefix = id.split("-")[0];
  if (BY_PREFIX[prefix]) return BY_PREFIX[prefix];
  if (AUTHORED.has(prefix)) return AUTHORED_SOURCE;
  return UNKNOWN;
}

/**
 * Точные скриншоты для отдельных заданий.
 *
 * Заполняется вручную по мере сверки: при импорте соответствие «задание →
 * файл» не сохранялось, поэтому каждую пару приходится устанавливать глазами.
 * Ключ — id задания, значение — путь внутри `public`.
 */
export const questionImages: Record<string, string> = {};

export function questionImage(id: string): string | undefined {
  return questionImages[id];
}
