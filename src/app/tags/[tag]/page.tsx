import Link from "next/link";

import { IRepository } from "@/types";
import { filterRepoByTag } from "@/utils/filterRepo";

export default async function Tag({ params }: { params: { tag: string } }) {
  const data = await fetch(
    "https://api.github.com/users/vsantos1711/repos"
  ).then((res) => res.json());

  const listOfRepos: IRepository[] = filterRepoByTag(data, params.tag);

  return (
    <main className="min-h-screen">
      <h1 className="text-2xl font-extrabold mb-3 max-w-fit">
        Total de post com a tag{" "}
        <span className="text-sky-500">{`"${params.tag}"`}</span>:{" "}
        {listOfRepos.length}
      </h1>
      <ul className="mb-5 pl-2">
        {listOfRepos.map((repo: IRepository) => {
          return (
            <li key={repo.name}>
              <Link href={`/project/${repo.name}`}>
                • <span className="hover:underline text-lg">{repo.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/tags" className="hover:underline">
        Todas as tags
      </Link>
    </main>
  );
}
