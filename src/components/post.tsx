import Link from "next/link";
import React from "react";
import { ReactNode } from "react";

const PostRoot = ({ children }: { children: ReactNode }) => {
  return <article>{children}</article>;
};
PostRoot.displayName = "PostRoot";

const PostTitle = ({ title, slug }: { title: string; slug: string }) => {
  return (
    <Link href={`/project/${slug}`}>
      <h2 className="text-3xl font-extrabold mb-1 hover:underline">{title}</h2>
    </Link>
  );
};
PostTitle.displayName = "PostTitle";

const PostTags = ({ tags }: { tags: string[] }) => {
  return (
    <ul className="flex gap-2">
      {tags.map((tag) => (
        <li key={tag} className="bg-fuchsia-800 rounded px-1.5 font-semibold">
          {tag}
        </li>
      ))}
    </ul>
  );
};
PostTags.displayName = "PostTags";

const PostTimeRoot = ({ children }: { children: ReactNode }) => {
  return <span className="text-gray-400 text-sm">{children}</span>;
};
PostTimeRoot.displayName = "PostTimeRoot";

const PostDate = ({ date }: { date: string }) => {
  const dateObject = new Date(date);
  const formattedDateString = dateObject.toLocaleDateString("pt-BR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return <time>{formattedDateString}</time>;
};
PostDate.displayName = "PostDate";

const PostReadTime = ({ readTime }: { readTime: string }) => {
  return <span> • ☕️ {readTime} de leitura</span>;
};
PostReadTime.displayName = "PostReadTime";

const PostDescription = ({ description }: { description: string }) => {
  return <p>{description}</p>;
};
PostDescription.displayName = "PostDescription";

export {
  PostRoot,
  PostTitle,
  PostTags,
  PostDate,
  PostReadTime,
  PostDescription,
  PostTimeRoot,
};
