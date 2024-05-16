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

export async function getRepositories(user: string): Promise<IRepository[]> {
  const data = await fetch(`https://api.github.com/users/${user}/repos`).then(
    (res) => res.json()
  );

  return data;
}
