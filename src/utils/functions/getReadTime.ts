import { getReadme } from "@/api/getReadme";

export async function getReadTime(slug: string) {
  const postData = await getReadme(slug);
  const time = postData.split(" ").length / 200;

  return `${Math.ceil(time)} min `;
}
