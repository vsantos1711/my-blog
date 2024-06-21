import Link from "next/link";

import { IRepository, getRepositories } from "@/api";
import { filterRepoByTag } from "@/utils/functions/filterRepo";

export default async function Tag({ params }: { params: { tag: string } }) {
  const data = await getRepositories();

  const listOfRepos: IRepository[] = await filterRepoByTag(data, params.tag);

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 max-w-fit">
        Total of posts tagged with{" "}
        <span className="text-sky-500">{`"${params.tag}"`}</span>:{" "}
        {listOfRepos.length}
      </h1>

      <section className="mb-10 p-2">
        {listOfRepos.map((repo: IRepository) => {
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
