import { useUserStore } from "@/stores/user-store";

export default async function About() {
  const { user } = useUserStore.getState();

  return (
    <main className="min-h-screen">
      <section className="mb-5">
        <p>Hello! Here you`ll see infos about {user?.login}</p>
      </section>
    </main>
  );
}
