import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

export type CodeSnippetProps = {
  code: string;
  language?: string;
};

export const CodeSnippet = ({
  code,
  language = "typescript",
}: CodeSnippetProps) => {
  return (
    <div className="rounded-xl overflow-hidden w-100 mb-4">
      <SyntaxHighlighter
        language={language}
        style={vs2015}
        codeTagProps={{ className: "text-sm desktop:text-base" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
