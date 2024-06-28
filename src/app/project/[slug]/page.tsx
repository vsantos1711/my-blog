import { getReadme } from "@/api/getReadme";
import Markdown from "markdown-to-jsx";
import "../../../styles/project.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const CodeBlock = ({
    className,
    children,
  }: {
    className: string;
    children: any;
  }) => {
    let lang = "text";
    if (className && className.startsWith("lang-")) {
      lang = className.replace("lang-", "");
    }
    return (
      <SyntaxHighlighter language={lang} style={CodeStyle}>
        {children}
      </SyntaxHighlighter>
    );
  };

  const PreBlock = ({ children, ...rest }: { children: any }) => {
    if ("type" in children && children["type"] === "code") {
      return CodeBlock(children["props"]);
    }
    return <pre {...rest}>{children}</pre>;
  };

  const readme = await getReadme(params.slug);

  return (
    <main className="min-h-screen mb-14">
      <Markdown
        options={{
          overrides: {
            pre: PreBlock,
          },
          wrapper: "article",
        }}
      >
        {readme}
      </Markdown>
    </main>
  );
}
