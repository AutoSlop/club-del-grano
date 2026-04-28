"use client";

import { useState } from "react";
import { products, brands, reviews, faqs } from "./data";

/* ─── Helpers ─── */
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

/* ─── Navbar ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-brown/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-brown font-bold text-xl">
          <span className="text-2xl">☕</span> Club del Grano
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
          <a href="#como-funciona" className="hover:text-brown transition-colors">Cómo funciona</a>
          <a href="#catalogo" className="hover:text-brown transition-colors">Catálogo</a>
          <a href="#vendedores" className="hover:text-brown transition-colors">Vendedores</a>
          <a href="#comunidad" className="hover:text-brown transition-colors">Comunidad</a>
          <a href="#pricing" className="hover:text-brown transition-colors">Precios</a>
          <a href="#faq" className="hover:text-brown transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#catalogo" className="rounded-full border border-brown px-4 py-2 text-sm font-medium text-brown hover:bg-brown hover:text-cream transition-colors">
            Explorar cafés
          </a>
          <a href="#pricing" className="rounded-full bg-brown px-4 py-2 text-sm font-medium text-cream hover:bg-brown-light transition-colors">
            Únete como vendedor
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          <svg className="w-6 h-6 text-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-brown/10 bg-cream px-4 pb-4 space-y-2">
          {[
            ["#como-funciona", "Cómo funciona"],
            ["#catalogo", "Catálogo"],
            ["#vendedores", "Vendedores"],
            ["#comunidad", "Comunidad"],
            ["#pricing", "Precios"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-foreground/80 hover:text-brown">
              {label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <a href="#catalogo" onClick={() => setOpen(false)} className="rounded-full border border-brown px-4 py-2 text-sm font-medium text-brown text-center hover:bg-brown hover:text-cream transition-colors">
              Explorar cafés
            </a>
            <a href="#pricing" onClick={() => setOpen(false)} className="rounded-full bg-brown px-4 py-2 text-sm font-medium text-cream text-center hover:bg-brown-light transition-colors">
              Únete como vendedor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brown via-brown-light to-gold py-20 sm:py-28 lg:py-36">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cream/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block rounded-full bg-cream/20 px-4 py-1.5 text-sm font-medium text-cream mb-6">
          🇨🇴 Marketplace social de café colombiano
        </span>
        <h1 className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-cream">
          Descubre, compra y califica el mejor café de marcas independientes en Colombia
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-cream/80 leading-relaxed">
          Club del Grano une marketplace y comunidad para que tostadores vendan con confianza y los amantes del café encuentren productos reales con reseñas verificadas y conversación auténtica.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="w-full sm:w-auto rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-foreground shadow-lg hover:bg-gold-light transition-colors">
            Únete como vendedor
          </a>
          <a href="#catalogo" className="w-full sm:w-auto rounded-full border-2 border-cream/40 px-8 py-3.5 text-base font-semibold text-cream hover:bg-cream/10 transition-colors">
            Explorar cafés
          </a>
        </div>

        {/* Social proof bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-cream/70 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">☕</span>
            <span><strong className="text-cream">120+</strong> cafés disponibles</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🏷️</span>
            <span><strong className="text-cream">35</strong> marcas independientes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span><strong className="text-cream">4.8</strong> calificación promedio</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Cómo funciona ─── */
function HowItWorks() {
  const steps = [
    {
      icon: "🔍",
      title: "Explora el catálogo",
      desc: "Busca entre decenas de cafés de marcas independientes. Filtra por origen, proceso, tueste y notas de sabor.",
    },
    {
      icon: "🛒",
      title: "Compra con confianza",
      desc: "Lee reseñas verificadas de otros compradores y compra directamente al tostador. Checkout seguro y envío a toda Colombia.",
    },
    {
      icon: "⭐",
      title: "Califica y comparte",
      desc: "Deja tu reseña verificada después de probar el café. Comparte tus descubrimientos en el feed comunitario.",
    },
    {
      icon: "🤝",
      title: "Únete a la comunidad",
      desc: "Conecta con otros amantes del café, descubre métodos de preparación y participa en conversaciones auténticas.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Paso a paso</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Cómo funciona</h2>
          <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
            Desde el descubrimiento hasta la comunidad, todo en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brown text-cream text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Catálogo destacado ─── */
function Catalog() {
  return (
    <section id="catalogo" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Catálogo</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Cafés destacados</h2>
          <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
            Los cafés mejor calificados por nuestra comunidad. Origen colombiano, calidad verificada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group bg-cream rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
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
                    <span key={n} className="text-xs bg-white border border-brown/10 rounded-full px-2 py-0.5 text-foreground/70">
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

        <div className="text-center mt-10">
          <a href="#" className="inline-block rounded-full border-2 border-brown px-8 py-3 font-semibold text-brown hover:bg-brown hover:text-cream transition-colors">
            Ver todo el catálogo →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Perfiles de marcas ─── */
function BrandProfiles() {
  return (
    <section className="py-20 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Marcas</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Tostadores independientes</h2>
          <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
            Conoce a las marcas detrás de cada taza. Historias reales, café excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {brands.map((b) => (
            <div key={b.id} className="bg-white rounded-2xl p-6 flex gap-5 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brown/10 to-gold/10 flex items-center justify-center text-3xl shrink-0">
                {b.avatar}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-lg text-foreground">{b.name}</h3>
                <p className="text-sm text-foreground/50">{b.location}</p>
                <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{b.description}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-foreground/50">
                  <span>{b.products} productos</span>
                  <span className="flex items-center gap-1">
                    <Stars rating={b.rating} /> {b.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Beneficios para vendedores ─── */
function SellerBenefits() {
  const benefits = [
    {
      icon: "🌐",
      title: "Venta online sin complicaciones",
      desc: "Tu tienda lista en minutos. Sube tus productos, personaliza tu perfil y empieza a vender sin necesidad de crear tu propia web.",
    },
    {
      icon: "💬",
      title: "Prueba social que vende",
      desc: "Las reseñas verificadas generan confianza real. Cada opinión auténtica es un argumento de venta más para tu marca.",
    },
    {
      icon: "👥",
      title: "Comunidad activa de compradores",
      desc: "Accede a una audiencia apasionada por el café de especialidad. El feed comunitario conecta tu marca con compradores comprometidos.",
    },
    {
      icon: "🎯",
      title: "Visibilidad en un nicho premium",
      desc: "Destaca en un marketplace especializado donde los compradores buscan calidad, no precio. Tu café llega a quien lo valora.",
    },
    {
      icon: "📊",
      title: "Sin comisión por venta",
      desc: "Paga una tarifa plana mensual y quédate con el 100% de cada transacción. Sin sorpresas ni porcentajes ocultos.",
    },
    {
      icon: "🚀",
      title: "Herramientas para crecer",
      desc: "Analítica de ventas, gestión de inventario y atención al cliente en un solo panel. Todo lo que necesitas para escalar tu marca.",
    },
  ];

  return (
    <section id="vendedores" className="py-20 sm:py-24 bg-brown text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Para vendedores</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Haz crecer tu marca de café</h2>
          <p className="mt-3 text-cream/70 max-w-xl mx-auto">
            Todo lo que necesitas para llevar tu café a más manos. Sin barreras técnicas ni comisiones ocultas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-cream/10 hover:border-gold/30 transition-colors">
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-cream/70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#pricing" className="inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-foreground hover:bg-gold-light transition-colors">
            Ver planes y precios →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Comunidad y reseñas ─── */
function Community() {
  return (
    <section id="comunidad" className="py-20 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Comunidad</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Reseñas verificadas y conversación real</h2>
          <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
            Opiniones de compradores reales. Sin reseñas falsas, sin bots, sin humo.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-semibold text-foreground">{r.user}</span>
                  {r.verified && (
                    <span className="ml-2 inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      ✓ Compra verificada
                    </span>
                  )}
                </div>
                <span className="text-xs text-foreground/40">{r.date}</span>
              </div>
              <p className="text-sm text-foreground/50 mb-2">sobre <span className="font-medium text-foreground/70">{r.product}</span></p>
              <Stars rating={r.rating} />
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Community feed preview */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">💬</span> Feed comunitario
          </h3>
          <div className="space-y-4">
            {[
              { user: "Daniela P.", text: "¿Alguien ha probado el método AeroPress con el Tabi Anaeróbico? Le saqué unas notas a fresa increíbles con 14g y 200ml a 85°C 🤯", time: "Hace 2h", likes: 12 },
              { user: "Felipe G.", text: "Acabo de recibir el Geisha de Café Ancestral. El empaque es hermoso y el aroma... uff. Mañana hago V60 y les cuento.", time: "Hace 5h", likes: 24 },
              { user: "Valentina S.", text: "Tip: el Caturra Natural queda espectacular como cold brew. 12 horas en nevera, ratio 1:8. De nada 😎☕", time: "Hace 8h", likes: 31 },
            ].map((post, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl bg-cream/50">
                <div className="w-9 h-9 rounded-full bg-brown/10 flex items-center justify-center text-sm font-bold text-brown shrink-0">
                  {post.user[0]}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">{post.user}</span>
                    <span className="text-foreground/40">{post.time}</span>
                  </div>
                  <p className="text-sm text-foreground/70 mt-1">{post.text}</p>
                  <span className="text-xs text-foreground/40 mt-1 inline-block">❤️ {post.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Precios</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Simple y transparente</h2>
          <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
            Un solo plan, sin comisiones ocultas. Enfócate en tu café, nosotros nos encargamos del resto.
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <div className="relative bg-gradient-to-br from-brown to-brown-light rounded-3xl p-8 sm:p-10 text-cream shadow-xl">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-block rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-foreground shadow">
                🎉 Primer mes gratis para fundadores
              </span>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-xl font-bold">Plan Vendedor</h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold">$9.99</span>
                <span className="text-cream/70">USD/mes</span>
              </div>
              <p className="mt-2 text-cream/70 text-sm">Sin comisión por transacción</p>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Tienda personalizada con tu marca",
                "Productos ilimitados en catálogo",
                "Reseñas verificadas en tus productos",
                "Panel de analítica y ventas",
                "Presencia en el feed comunitario",
                "Checkout integrado y pagos semanales",
                "Soporte prioritario por chat",
                "0% comisión — quédate con todo",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-gold mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a href="#" className="mt-8 block w-full rounded-full bg-gold py-3.5 text-center font-semibold text-foreground hover:bg-gold-light transition-colors">
              Empezar gratis →
            </a>

            <p className="mt-4 text-center text-xs text-cream/50">
              Los primeros 10 vendedores fundadores obtienen su primer mes completamente gratis. Cancela cuando quieras.
            </p>
          </div>
        </div>

        {/* Buyers note */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-cream rounded-2xl px-6 py-4">
            <p className="text-sm text-foreground/70">
              <strong className="text-foreground">¿Eres comprador?</strong> Explorar, comprar y dejar reseñas es <strong className="text-brown">100% gratis</strong>. Crea tu cuenta y empieza a descubrir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-cream">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">FAQ</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Preguntas frecuentes</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-foreground hover:text-brown transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 shrink-0 ml-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-sm text-foreground/70 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-foreground text-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Final CTA */}
        <div className="text-center mb-14 pb-14 border-b border-cream/10">
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Listo para descubrir café excepcional?
          </h2>
          <p className="mt-3 text-cream/60 max-w-lg mx-auto">
            Únete a la comunidad de amantes del café en Colombia. Compra, califica y conecta con los mejores tostadores independientes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="w-full sm:w-auto rounded-full bg-gold px-8 py-3.5 font-semibold text-foreground hover:bg-gold-light transition-colors">
              Únete como vendedor
            </a>
            <a href="#catalogo" className="w-full sm:w-auto rounded-full border-2 border-cream/20 px-8 py-3.5 font-semibold text-cream hover:bg-cream/10 transition-colors">
              Explorar cafés
            </a>
          </div>
        </div>

        {/* Footer nav */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li><a href="#catalogo" className="hover:text-cream transition-colors">Catálogo</a></li>
              <li><a href="#comunidad" className="hover:text-cream transition-colors">Comunidad</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Marcas</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Reseñas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Vendedores</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li><a href="#pricing" className="hover:text-cream transition-colors">Precios</a></li>
              <li><a href="#vendedores" className="hover:text-cream transition-colors">Beneficios</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Panel de vendedor</a></li>
              <li><a href="#faq" className="hover:text-cream transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li><a href="#" className="hover:text-cream transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>info@example.com</li>
              <li>+00 000 000 0000</li>
              <li>123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold">
            <span>☕</span> Club del Grano
          </div>
          <p className="text-sm text-cream/40">
            © 2026 Club del Grano. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Catalog />
        <BrandProfiles />
        <SellerBenefits />
        <Community />
        <Pricing />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
