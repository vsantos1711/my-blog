import Link from "next/link";

import { IRepository, getRepositories } from "@/api/getRepositories";
import { countTopics } from "@/utils/functions/topicCounter";
import { filterRepositories } from "@/utils/functions/filterRepositories";

export default async function Tags() {
  const data = await getRepositories();
  const projects: IRepository[] = await filterRepositories(data);

  const listOfTopics = countTopics(projects);
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
