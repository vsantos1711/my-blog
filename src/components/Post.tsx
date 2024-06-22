import Link from "next/link";
import React from "react";
import { ReactNode } from "react";

const PostRoot = ({ children }: { children: ReactNode }) => {
  return <section className="mb-10">{children}</section>;
};
PostRoot.displayName = "PostRoot";

const PostTitle = ({ title, slug }: { title: string; slug: string }) => {
  return (
    <h2 className="text-2xl font-extrabold mb-1 hover:underline max-w-fit no-underline text-white">
      <Link href={`/project/${slug}`}>{title}</Link>
    </h2>
  );
};
PostTitle.displayName = "PostTitle";

const PostTags = ({ tags }: { tags: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-2 mb-1">
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            href={`/tags/${tag}`}
            className="bg-fuchsia-800 rounded px-1.5 font-semibold text-base"
          >
            {tag}
          </Link>
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
  const formattedDateString = dateObject.toLocaleDateString("en-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return <time>{formattedDateString}</time>;
};
PostDate.displayName = "PostDate";

const PostReadTime = ({ readTime }: { readTime: Promise<string> }) => {
  return <span> • ☕️ {readTime} read</span>;
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
