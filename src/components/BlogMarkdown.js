import ReactMarkdown from "react-markdown";

const mdComponents = {
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-gray-100">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">{children}</p>
  ),
  hr: () => (
    <hr className="my-10 border-0 border-t border-gray-200 dark:border-gray-700" />
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900 dark:text-gray-100">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
};

export default function BlogMarkdown({ children }) {
  return (
    <div className="blog-md max-w-none">
      <ReactMarkdown components={mdComponents}>{children}</ReactMarkdown>
    </div>
  );
}
