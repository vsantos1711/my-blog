import { getReadme } from "@/api";
import Markdown from "markdown-to-jsx";
import "../../../styles/project.css";

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const readme = await getReadme(params.slug);

  return (
    <main className="min-h-screen mb-14">
      <Markdown
        options={{
          wrapper: "article",
        }}
      >
        {readme}
      </Markdown>
    </main>
  );
}
