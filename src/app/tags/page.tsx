import Link from "next/link";

import { IRepository, getRepositories } from "@/api";
import { countTopics } from "@/utils/functions/topicCounter";
import { filterRepo } from "@/utils/functions/filterRepo";

export default async function Tags() {
  const data = await getRepositories();
  const listOfRepos: IRepository[] = await filterRepo(data);

  const listOfTopics = countTopics(listOfRepos);
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6">Tags</h1>
      <section className="mb-10 p-2">
        {listOfTopics.map((topic) => (
          <li key={topic.topic}>
            <Link href={`/tags/${topic.topic}`}>
              <span className="hover:underline text-lg">
                {topic.topic} ({topic.count})
              </span>
            </Link>
          </li>
        ))}
      </section>
    </main>
  );
}
