import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Подготовка к КТ в магистратуру · М094 Информационные технологии",
    template: "%s · КТ М094",
  },
  description:
    "Конспекты и тренажёр тестов по четырём блокам комплексного тестирования в магистратуру " +
    "по группе образовательных программ М094 «Информационные технологии»: английский язык, " +
    "готовность к обучению, базы данных, алгоритмы и структуры данных.",
};

/**
 * Ставит класс темы до первой отрисовки, иначе при тёмной теме
 * страница успевает мигнуть светлой.
 */
const themeScript = `
try {
  var saved = localStorage.getItem('ktmaga.theme');
  var dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', dark);
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 px-4 py-6 text-center text-xs text-slate-500 dark:border-slate-800">
          Материалы составлены по официальным спецификациям тестов КТ в магистратуру.
          Актуальную редакцию сверяйте на сайте Национального центра тестирования.
        </footer>
      </body>
    </html>
  );
}
