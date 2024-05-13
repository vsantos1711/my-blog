import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <nav className="flex items-center text-stone-400">
        <ul className="flex gap-2">
          <Link href="https://github.com/vsantos1711" target="_blank">
            github
          </Link>
          <span>•</span>
          <Link href="https://www.linkedin.com/in/vsantos1711/" target="_blank">
            linkedIn
          </Link>
          <span>•</span>
          <Link href="/cv">resume</Link>
        </ul>
      </nav>
    </footer>
  );
}
