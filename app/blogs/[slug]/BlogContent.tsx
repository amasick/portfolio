"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogContent({
  content,
  format = "md",
}: {
  content: string;
  format?: "md" | "html";
}) {
  if (format === "html") {
    return (
      <iframe
        srcDoc={content}
        className="w-full border-0 rounded-lg"
        style={{ minHeight: "100vh" }}
        title="Blog post"
        sandbox="allow-same-origin allow-scripts"
        onLoad={(e) => {
          const iframe = e.target as HTMLIFrameElement;
          if (iframe.contentDocument) {
            iframe.style.height =
              iframe.contentDocument.documentElement.scrollHeight + "px";
          }
        }}
      />
    );
  }

  return (
    <div className="prose prose-invert prose-purple max-w-none">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-purple-300 mt-8 mb-3">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="text-gray-300">{children}</li>,
          strong: ({ children }) => (
            <strong className="text-white font-semibold">{children}</strong>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-purple-400 hover:text-purple-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className="block bg-gray-900 border border-white/10 rounded-lg p-4 overflow-x-auto text-sm text-gray-300 my-4">
                  {children}
                </code>
              );
            }
            return (
              <code className="bg-purple-900/40 text-purple-200 px-1.5 py-0.5 rounded text-sm">
                {children}
              </code>
            );
          },
          pre: ({ children }) => <pre className="my-4">{children}</pre>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-purple-500 pl-4 my-4 text-gray-400 italic">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="border-white/10 my-8" />,
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="w-full text-gray-300 border-collapse">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-white/10 px-4 py-2 bg-purple-900/30 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-white/10 px-4 py-2">{children}</td>
          ),
        }}
      />
    </div>
  );
}
