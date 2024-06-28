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

import { getReadTime } from "@/utils/functions/getReadTime";
import { useUserStore } from "@/stores/user-store";
import { IRepository, getRepositories } from "@/api/getRepositories";
import { getUserInfo } from "@/api/getUser";

export default async function Home() {
  const projects = await getRepositories();
  getUserInfo();
  const { user } = useUserStore.getState();
  return (
    <main className="min-h-screen">
      <section className="mb-14">
        <p>
          Hello! My name is{" "}
          <Link href="/about" className="hover:underline ">
            {user.name}
          </Link>
          ! <DynamicLink />
          <br />
          <span>
            If you are a recruiter take a look at my{" "}
            <Link href="about/cv" className="hover:underline text-sky-500">
              CV.
            </Link>
          </span>
        </p>
      </section>

      {projects.map((repository: IRepository) => {
        return (
          <PostRoot key={repository.name}>
            <PostTitle title={repository.name} slug={repository.name} />
            <PostTags tags={repository.topics} />
            <PostTimeRoot>
              <PostDate date={repository.updated_at} />
              <PostReadTime readTime={getReadTime(repository.name)} />
            </PostTimeRoot>
            <PostDescription description={repository.description} />
          </PostRoot>
        );
      })}
    </main>
  );
}
