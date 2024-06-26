import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getReadme(slug: string) {
  try {
    const user = process.env.GITHUB_USER;
    const branch = process.env.DEFAULT_BRANCH;
    const res = await fetch(
      `https://raw.githubusercontent.com/${user}/${slug}/${branch}/README.md`
    );
    if (!res.ok) {
      return "README not found.";
    }
    const markdown = await res.text();
    const modifiedReadme = markdown.replace(/\[!IMPORTANT\]/g, "⚠️");

    return modifiedReadme;
  } catch (error) {
    console.error(`Failed to fetch README: ${error}`);
    return "Failed to fetch README.";
  }
}

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

export async function getRepositories(): Promise<IRepository[]> {
  try {
    const user = process.env.GITHUB_USER;
    const response = await octokit.request(`GET /users/${user}/repos`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch repositories: ${error}`);
    return [];
  }
}

export interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
}

export interface ErrorUser {
  login: string;
  error: string;
}

export async function getUserInfo(): Promise<IUser | ErrorUser> {
  try {
    const user = process.env.GITHUB_USER;
    const response = await octokit.request(`GET /users/${user}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch user info: ${error}`);
    const errorReturn: ErrorUser = {
      login: "Not Found",
      error: "Failed to fetch user info.",
    };
    return errorReturn;
  }
}
