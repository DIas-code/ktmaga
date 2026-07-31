import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

/** Рендер конспекта: GFM-таблицы, подсветка кода, стили из .notes в globals.css. */
export default function Notes({ markdown }: { markdown: string }) {
  return (
    <div className="notes">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}
        components={{
          // Широкие таблицы должны скроллиться сами, а не растягивать страницу.
          table: ({ children }) => (
            <div className="table-wrap">
              <table>{children}</table>
            </div>
          ),
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}
