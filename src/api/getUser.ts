import { useUserStore } from "@/stores/user-store";
import { octokit } from ".";

export interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
}

export async function getUserInfo() {
  try {
    const user = process.env.GITHUB_USER;
    const { data } = await octokit.request(`GET /users/${user}`);
    useUserStore.setState({ user: data });
    return useUserStore;
  } catch (error) {
    console.error(`Failed to fetch user info: ${error}`);
    return {
      error: "Failed to fetch user info.",
    };
  }
}
