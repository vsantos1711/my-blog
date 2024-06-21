import { IRepository, getUserInfo } from "@/api";

export async function filterRepo(repos: IRepository[]) {
  const user = await getUserInfo();

  // put here the name of repo that you want to remove from list
  const ignoredRepos = [user.login];

  return repos
    .filter((repo: IRepository) => !ignoredRepos.includes(repo.name))
    .sort((a: IRepository, b: IRepository) => {
      const dateA = new Date(a.updated_at);
      const dateB = new Date(b.updated_at);
      return dateB.getTime() - dateA.getTime();
    });
}

export async function filterRepoByTag(repos: IRepository[], tag: string) {
  const filteredRepos = await filterRepo(repos);
  return filteredRepos.filter((repo: IRepository) => repo.topics.includes(tag));
}
