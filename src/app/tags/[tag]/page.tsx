export default function Tag({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen">
      <div>
        Aqui vai mostrar todos os posts com o seguinte tópico: {params.slug}
      </div>
    </main>
  );
}
