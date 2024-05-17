import { getReadme } from "@/api";

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const res = await getReadme(params.slug);
  console.log(res);
  return (
    <main className="min-h-screen mb-14">
      <article
        className=" border rounded-lg border-gray-800 p-4 "
        dangerouslySetInnerHTML={{ __html: res }}
      />
    </main>
  );
}
