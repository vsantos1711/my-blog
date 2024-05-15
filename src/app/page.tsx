import Link from "next/link";
import DynamicLink from "@/components/dynamicLink";
import {
  PostDate,
  PostDescription,
  PostReadTime,
  PostRoot,
  PostTags,
  PostTimeRoot,
  PostTitle,
} from "@/components/post";
import { links } from "@/consts/dynamicLinks";
import { filterRepo } from "@/utils/filterRepo";
import { IRepository } from "@/types";

export default async function Home() {
  const data = await fetch(
    "https://api.github.com/users/vsantos1711/repos"
  ).then((res) => res.json());

  const listOfRepos: IRepository[] = filterRepo(data);

  return (
    <main className="min-h-screen ">
      <section className="mb-14">
        <p>
          Olá, meu nome é Vinícius! <DynamicLink links={links} />
          <br />
          <span>
            Se você é um recrutador, dê uma olhada no meu{" "}
            <Link href="about/cv" className="hover:underline text-sky-500">
              currículo.
            </Link>
          </span>
        </p>
      </section>
      {listOfRepos.map((repo: IRepository) => {
        return (
          <PostRoot key={repo.name}>
            <PostTitle title={repo.name} slug={repo.name} />
            <PostTags tags={repo.topics} />
            <PostTimeRoot>
              <PostDate date={repo.updated_at} />
              <PostReadTime readTime="5 min" />
            </PostTimeRoot>
            <PostDescription description={repo.description} />
          </PostRoot>
        );
      })}
    </main>
  );
}
