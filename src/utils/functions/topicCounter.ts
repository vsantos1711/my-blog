import { IRepository } from "@/api";

const ignoredTopics = ["useful", "utilities", "readme-template", "studies"];

export function countTopics(
  repositories: IRepository[]
): { topic: string; count: number }[] {
  const topicCounts: { [topic: string]: number } = {};

  repositories.forEach((repo) => {
    repo.topics.forEach((topic) => {
      topicCounts[topic] = (topicCounts[topic] || 0) + 1;
    });
  });

  const topicArray = Object.keys(topicCounts).map((topic) => ({
    topic,
    count: topicCounts[topic],
  }));

  return topicArray.filter((topic) => !ignoredTopics.includes(topic.topic));
}
