import { IRepository } from "@/api";

// put here the name of repo that you want to remove from list
export const ignoredRepos = ["vsantos1711", "terraform-studies"];

export function filterRepo(repos: IRepository[]) {
  return repos
    .filter((repo: IRepository) => !ignoredRepos.includes(repo.name))
    .sort((a: IRepository, b: IRepository) => {
      const dateA = new Date(a.updated_at);
      const dateB = new Date(b.updated_at);
      return dateB.getTime() - dateA.getTime();
    });
}

export function filterRepoByTag(repos: IRepository[], tag: string) {
  return filterRepo(repos).filter((repo: IRepository) =>
    repo.topics.includes(tag)
  );
}