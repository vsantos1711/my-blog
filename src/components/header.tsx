import Link from "next/link";
import GithubLogo from "./github-logo";
import LinkedInLogo from "./linkedIn-logo";
import CodesRankLogo from "./codesRank-logo";
import { nunito } from "@/app/fonts";

export function Header() {
  return (
    <header className="min-h-20">
      <nav className="flex items-center gap-5 text-stone-400">
        <Link
          href="/"
          className={
            nunito.className +
            " text-4xl hover:text-stone-100 transition focus:text-stone-100"
          }
        >
          vsantos
        </Link>
        <ul className="flex space-x-4">
          <li>
            <GithubLogo />
          </li>
          <li>
            <LinkedInLogo />
          </li>
          <li>
            <CodesRankLogo />
          </li>
        </ul>
      </nav>
    </header>
  );
}
