import { filterRepositories } from "@/utils/functions/filterRepositories";
import { octokit } from ".";

export interface IRepository {
  name: string;
  full_name: string;
  description: string;
  commits_url: string;
  created_at: string;
  updated_at: string;
  homepage: string;
  topics: string[];
}

export async function getRepositories(
  user: string | undefined
): Promise<IRepository[]> {
  try {
    if (!user) throw new Error("User not found.");

    const { data } = await octokit.request(`GET /users/${user}/repos`);
    const repos = await filterRepositories(data);
    return repos;
  } catch (error) {
    console.error(`Failed to fetch repositories: ${error}`);
    return [];
  }
}
