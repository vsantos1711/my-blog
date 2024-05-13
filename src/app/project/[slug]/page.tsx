export default function Project({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen">
      <div>Aqui estará o post com o nome: {params.slug}</div>
    </main>
  );
}
