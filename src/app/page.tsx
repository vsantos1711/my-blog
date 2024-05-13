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

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mb-5">
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
      <PostRoot>
        <PostTitle title="Título do post" slug="post1" />
        <PostTags tags={["tag1", "tag2", "tag3"]} />
        <PostTimeRoot>
          <PostDate date="2021-09-01T08:30:00Z" />
          <PostReadTime readTime="5 min" />
        </PostTimeRoot>
        <PostDescription description="Descrição do post" />
      </PostRoot>
    </main>
  );
}
