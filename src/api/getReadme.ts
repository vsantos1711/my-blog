export async function getReadme(slug: string) {
  try {
    const user = process.env.GITHUB_USER;
    const branch = process.env.DEFAULT_BRANCH;
    const res = await fetch(
      `https://raw.githubusercontent.com/${user}/${slug}/${branch}/README.md`
    );
    if (!res.ok) return "README not found.";

    const markdown = await res.text();
    const modifiedReadme = markdown.replace(/\[!IMPORTANT\]/g, "⚠️");

    return modifiedReadme;
  } catch (error) {
    console.error(`Failed to fetch README: ${error}`);
    return "Failed to fetch README.";
  }
}
