import { getReadme } from "@/api";

export async function getRepoReadTime(slug: string) {
  const postData = await getReadme(slug);
  const time = postData.split(" ").length / 200;

  return `${Math.ceil(time)} min `;
}
