import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getReadme(slug: string) {
  const user = process.env.GITHUB_USER;
  const res = await fetch(
    `https://raw.githubusercontent.com/${user}/${slug}/main/README.md`
  );
  const markdown = await res.text();
  return markdown;
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
  const user = process.env.GITHUB_USER;
  const response = await octokit.request(`GET /users/${user}/repos`);
  return response.data;
}

export interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
}

export async function getUserInfo(): Promise<IUser> {
  const user = process.env.GITHUB_USER;
  const response = await octokit.request(`GET /users/${user}`);
  return response.data;
}
