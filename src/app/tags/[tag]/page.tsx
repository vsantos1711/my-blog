import Link from "next/link";

import { IRepository, getRepositories } from "@/api/getRepositories";
import { repositoriesByTag } from "@/utils/functions/filterRepositories";

export default async function Tag({ params }: { params: { tag: string } }) {
  const data = await getRepositories();

  const projects: IRepository[] = await repositoriesByTag(data, params.tag);

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 max-w-fit">
        Total of posts tagged with{" "}
        <span className="text-sky-500">{`"${params.tag}"`}</span>:{" "}
        {projects.length}
      </h1>

      <section className="mb-10 p-2">
        {projects.map((repo: IRepository) => {
          return (
            <li key={repo.name}>
              <Link href={`/project/${repo.name}`}>
                <span className="hover:underline text-lg">{repo.name}</span>
              </Link>
            </li>
          );
        })}
      </section>

      <Link href="/tags" className="hover:underline">
        All tags
      </Link>
    </main>
  );
}
