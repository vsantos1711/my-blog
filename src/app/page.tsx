import Link from "next/link";

import DynamicLink from "@/components/DynamicLink";
import {
  PostDate,
  PostDescription,
  PostReadTime,
  PostRoot,
  PostTags,
  PostTimeRoot,
  PostTitle,
} from "@/components/Post";
import { links } from "@/utils/consts/dynamicLinks";
import { filterRepo } from "@/utils/functions/filterRepo";
import { IRepository, getRepositories, getUserInfo } from "@/api";
import { getRepoReadTime } from "@/utils/functions/getReadTime";

export default async function Home() {
  const projects = await getRepositories();
  const user = await getUserInfo();
  const listOfProjects: IRepository[] = await filterRepo(projects);
  return (
    <main className="min-h-screen ">
      <section className="mb-14">
        <p>
          Hello! My name is{" "}
          <Link href="/about" className="hover:underline ">
            {user.name}
          </Link>
          ! <DynamicLink links={links} />
          <br />
          <span>
            If you are a recruiter take a look at my{" "}
            <Link href="about/cv" className="hover:underline text-sky-500">
              CV.
            </Link>
          </span>
        </p>
      </section>
      {listOfProjects.map((repo: IRepository) => {
        return (
          <PostRoot key={repo.name}>
            <PostTitle title={repo.name} slug={repo.name} />
            <PostTags tags={repo.topics} />
            <PostTimeRoot>
              <PostDate date={repo.updated_at} />
              <PostReadTime readTime={getRepoReadTime(repo.name)} />
            </PostTimeRoot>
            <PostDescription description={repo.description} />
          </PostRoot>
        );
      })}
    </main>
  );
}
