import Link from "next/link";

import { IRepository, getRepositories } from "@/api";
import { filterRepoByTag } from "@/utils/functions/filterRepo";

export default async function Tag({ params }: { params: { tag: string } }) {
  const data = await getRepositories("vsantos1711");

  const listOfRepos: IRepository[] = filterRepoByTag(data, params.tag);

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 max-w-fit">
        Total de post com a tag{" "}
        <span className="text-sky-500">{`"${params.tag}"`}</span>:{" "}
        {listOfRepos.length}
      </h1>

      <section className="mb-10">
        {listOfRepos.map((repo: IRepository) => {
          return (
            <li key={repo.name} className="mb-1 pl-2">
              <Link href={`/project/${repo.name}`}>
                <span className="hover:underline text-lg">{repo.name}</span>
              </Link>
            </li>
          );
        })}
      </section>

      <Link href="/tags" className="hover:underline">
        Todas as tags
      </Link>
    </main>
  );
}
