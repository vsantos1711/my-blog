import { IRepository } from "@/api/getRepositories";
import { useUserStore } from "@/stores/user-store";

export async function filterRepositories(repos: IRepository[]) {
  const { user } = useUserStore.getState();

  // put here the name of repositories that you want to remove from list
  const ignoredRepos = [user?.login];

  return repos
    .filter((repo: IRepository) => !ignoredRepos.includes(repo.name))
    .sort((a: IRepository, b: IRepository) => {
      const dateA = new Date(a.updated_at);
      const dateB = new Date(b.updated_at);
      return dateB.getTime() - dateA.getTime();
    });
}

export async function repositoriesByTag(repos: IRepository[], tag: string) {
  const filteredRepos = await filterRepositories(repos);
  return filteredRepos.filter((repo: IRepository) => repo.topics.includes(tag));
}
