import { octokit } from ".";

export interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
}

export async function getUserInfo(): Promise<
  { user: IUser } | { error: string }
> {
  try {
    const user = process.env.GITHUB_USER;
    const { data } = await octokit.request(`GET /users/${user}`);
    // To-do: Add infos from the gist
    return { user: data };
  } catch (error) {
    console.error(`Failed to fetch user info: ${error}`);
    return {
      error: "Failed to fetch user info.",
    };
  }
}
