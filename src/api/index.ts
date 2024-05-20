import { writerJSON } from "@/utils/functions/writerJSON";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getReadme(slug: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/vsantos1711/${slug}/main/README.md`
  );
  const markdown = await res.text();
  const response = await octokit.request("POST /markdown", {
    text: markdown,
  });

  const markdown_text = markdown.split("\n");

  return {
    markdown_html: response.data,
    markdown_text,
  };
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
