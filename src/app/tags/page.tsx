import Link from "next/link";

import getRepositories from "@/api";
import { countTopics } from "@/utils/topicCounter";

export default async function Tags() {
  const data = await getRepositories("vsantos1711");

  const listOfTopics = countTopics(data);
  console.log(listOfTopics);
  return (
    <main className="min-h-screen">
      <section className="mb-5">
        <h1 className="text-3xl font-extrabold mb-6">Tags</h1>

        {listOfTopics.map((topic) => (
          <li key={topic.topic} className="mb-1 pl-2">
            <Link href={`/tags/${topic.topic}`}>
              <span className="hover:underline text-lg">
                {topic.topic} - {topic.count}
              </span>
            </Link>
          </li>
        ))}
      </section>
    </main>
  );
}
