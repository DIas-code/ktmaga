import { questionImages } from "@/content/question-images";

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
  mk: {
    label: "перенесено из пробника вручную",
    origin:
      "Пробники/алгоритмизация пробный N нуска.docx, бд пробный N нуска.docx и другие — " +
      "конкретный файл и номер задания зашиты в id: mk-<предмет>-<пробник>-<задание>",
    verifiable: "document",
  },
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
 * Где искать задание в папке `Пробники`.
 *
 * `exact` — путь ведёт к конкретному файлу-скриншоту: задание нашлось на нём
 * распознаванием текста. Иначе указан документ или папка, откуда шёл импорт,
 * потому что при массовом импорте номер строки не сохранялся.
 */
export interface QuestionLocation {
  path: string;
  exact: boolean;
}

/** Куда смотреть, если точный скриншот не найден. */
const FALLBACK_PATH: Record<string, string> = {
  mk: "Пробники/алгоритмизация пробный 1 нуска.docx",
  ct: "Пробники/ (скриншоты пробников, файл не установлен)",
  kb: "Пробники/Сливы бейба/Алгоритм-рус.docx, База_данных_ru.docx",
  bk: "Пробники/Сливы бейба/*.docx, английскийПробники/*.pdf, тгопробники/*.pdf",
  hi: "не из пробника (составлено)",
};

export function questionLocation(id: string): QuestionLocation {
  const exact = questionImages[id];
  if (exact) return { path: exact, exact: true };
  const prefix = id.split("-")[0];
  return {
    path: FALLBACK_PATH[prefix] ?? "не из пробника (составлено по спецификации)",
    exact: false,
  };
}

export function questionImage(id: string): string | undefined {
  return questionImages[id];
}
