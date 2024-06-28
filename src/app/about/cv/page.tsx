import { useUserStore } from "@/stores/user-store";

export default async function CV() {
  const { user } = useUserStore.getState();

  return (
    <main className="min-h-screen">
      <section className="mb-5">
        <p>
          Olá, meu nome é {user?.name}!
          <br />
          <span>Aqui você pode vai ver o meu CURRÍCULO</span>
        </p>
      </section>
    </main>
  );
}
