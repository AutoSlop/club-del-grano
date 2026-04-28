"use client";

import { useParams } from "next/navigation";
import { products, departamentos } from "../../data";
import Link from "next/link";

function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-gold" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < Math.round(rating) ? "★" : "☆"}</span>
      ))}
    </span>
  );
}

export default function DepartamentoPage() {
  const params = useParams<{ departamento: string }>();
  const slug = params.departamento;

  const dept = departamentos.find((d) => d.slug === slug);
  const filtered = products.filter((p) => p.departamento === slug);

  const deptName = dept?.name ?? slug;

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-brown/10">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-brown font-bold text-xl">
            <span className="text-2xl">☕</span> Club del Grano
          </Link>
          <Link
            href="/#catalogo"
            className="rounded-full border border-brown px-4 py-2 text-sm font-medium text-brown hover:bg-brown hover:text-cream transition-colors"
          >
            Explorar cafés
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-foreground/50">
          <Link href="/" className="hover:text-brown transition-colors">Inicio</Link>
          <span className="mx-2">›</span>
          <Link href="/#origen" className="hover:text-brown transition-colors">Origen</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">{deptName}</span>
        </nav>

        {/* Title */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Cafés de {deptName}
          </h1>
          {dept && (
            <p className="mt-2 text-foreground/60">{dept.description}</p>
          )}
          <p className="mt-1 text-sm text-foreground/40">
            {filtered.length} {filtered.length === 1 ? "producto encontrado" : "productos encontrados"}
          </p>
        </div>

        {/* Product grid or empty state */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-brown/10 to-gold/10 flex items-center justify-center text-7xl">
                  {p.image}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-0.5 rounded-full">{p.process}</span>
                    <span className="text-xs text-foreground/50">Tueste {p.roast}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mt-2 group-hover:text-brown transition-colors">{p.name}</h3>
                  <p className="text-sm text-foreground/50 mt-0.5">{p.brand} · {p.origin}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.notes.map((n) => (
                      <span key={n} className="text-xs bg-cream border border-brown/10 rounded-full px-2 py-0.5 text-foreground/70">
                        {n}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-brown/10">
                    <span className="font-bold text-brown text-lg">{formatCOP(p.price)}</span>
                    <div className="flex items-center gap-1 text-sm">
                      <Stars rating={p.rating} />
                      <span className="text-foreground/50">({p.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Aún no hay cafés de {deptName}
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto mb-8">
              Estamos trabajando para traer los mejores cafés de cada rincón de Colombia. Mientras tanto, explora nuestro catálogo completo.
            </p>
            <Link
              href="/#catalogo"
              className="inline-block rounded-full bg-brown px-8 py-3.5 font-semibold text-cream hover:bg-brown-light transition-colors"
            >
              Explorar todo el catálogo
            </Link>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/#origen"
            className="inline-flex items-center gap-2 text-brown font-medium hover:underline"
          >
            ← Volver al mapa de departamentos
          </Link>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="bg-foreground text-cream py-8 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold">
            <span>☕</span> Club del Grano
          </div>
          <p className="text-sm text-cream/40">
            © 2026 Club del Grano. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
