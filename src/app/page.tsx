import Link from "next/link";

import DynamicLink from "@/components/dynamicLink";

import { words } from "@/consts/dynamicLinks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mb-5">
        <p>
          Olá, meu nome é Vinícius! <DynamicLink words={words} />
          <br />
          <span>
            Se você é um recrutador, dê uma olhada no meu{" "}
            <Link href="/cv" className="hover:underline">
              currículo.
            </Link>
          </span>
        </p>
      </section>
    </main>
  );
}
