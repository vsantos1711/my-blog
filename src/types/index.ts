export interface ILink {
  text: string;
  href: string;
  target?: string;
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
