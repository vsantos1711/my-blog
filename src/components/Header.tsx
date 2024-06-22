import Link from "next/link";
import { nunito } from "@/app/fonts";

import IconLink from "./SVGIcon";
import GithubSVG from "../../public/assets/svg/github.svg";
import LinkedInSVG from "../../public/assets/svg/linkedIn.svg";
import CodesRankSVG from "../../public/assets/svg/codersRank.svg";

import { getUserInfo } from "@/api";

export default async function Header() {
  const user = await getUserInfo();
  return (
    <header className="min-h-20">
      <nav className="flex items-center gap-5 text-stone-400">
        <Link
          href="/"
          className={
            nunito.className +
            " text-4xl hover:text-stone-100 transition focus:text-stone-100 text-stone-100"
          }
        >
          {user.login}
        </Link>
        <ul className="flex gap-4">
          <li>
            <IconLink
              href={`https://github.com/${user.login}`}
              svg={GithubSVG}
            />
          </li>
          <li>
            <IconLink
              href={`https://www.linkedin.com/in/${user.login}`}
              svg={LinkedInSVG}
            />
          </li>
          <li>
            <IconLink
              href={`https://profile.codersrank.io/user/${user.login}`}
              svg={CodesRankSVG}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
