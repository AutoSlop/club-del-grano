"use client";

/* Interactive SVG map of Colombia by departments.
   Each path has a data-slug matching departamentos[].slug.
   Simplified paths for all 32 departments + Bogotá D.C. */

interface ColombiaMapProps {
  onSelect: (slug: string) => void;
  activeSlugs?: string[];
}

export default function ColombiaMap({ onSelect, activeSlugs = [] }: ColombiaMapProps) {
  const hasProducts = (slug: string) => activeSlugs.includes(slug);

  return (
    <svg
      viewBox="0 0 500 600"
      className="w-full h-auto max-w-[420px] mx-auto"
      role="img"
      aria-label="Mapa de Colombia por departamentos"
    >
      {/* Background */}
      <rect width="500" height="600" fill="transparent" />

      {departments.map((dept) => (
        <g key={dept.slug}>
          <path
            d={dept.path}
            data-slug={dept.slug}
            className={`cursor-pointer transition-all duration-200 stroke-[#6F3E22]/30 stroke-[0.8] ${
              hasProducts(dept.slug)
                ? "fill-[#C88A3D]/40 hover:fill-[#C88A3D]/70 active:fill-[#C88A3D]"
                : "fill-[#6F3E22]/8 hover:fill-[#6F3E22]/20 active:fill-[#6F3E22]/30"
            }`}
            onClick={() => onSelect(dept.slug)}
          >
            <title>{dept.name}</title>
          </path>
        </g>
      ))}

      {/* Department labels for major coffee regions */}
      {labeledDepts.map((l) => (
        <text
          key={l.slug}
          x={l.x}
          y={l.y}
          textAnchor="middle"
          className="text-[7px] fill-[#1F140D]/70 font-medium pointer-events-none select-none"
        >
          {l.label}
        </text>
      ))}
    </svg>
  );
}

const labeledDepts = [
  { slug: "antioquia", x: 185, y: 195, label: "Antioquia" },
  { slug: "huila", x: 220, y: 340, label: "Huila" },
  { slug: "narino", x: 160, y: 405, label: "Nariño" },
  { slug: "tolima", x: 230, y: 295, label: "Tolima" },
  { slug: "quindio", x: 195, y: 268, label: "Quindío" },
  { slug: "caldas", x: 200, y: 240, label: "Caldas" },
  { slug: "cauca", x: 175, y: 365, label: "Cauca" },
  { slug: "magdalena", x: 250, y: 110, label: "Magdalena" },
  { slug: "santander", x: 255, y: 195, label: "Santander" },
  { slug: "risaralda", x: 180, y: 253, label: "Risaralda" },
  { slug: "boyaca", x: 275, y: 225, label: "Boyacá" },
  { slug: "cundinamarca", x: 260, y: 270, label: "C/marca" },
  { slug: "valle-del-cauca", x: 165, y: 315, label: "Valle" },
  { slug: "meta", x: 320, y: 300, label: "Meta" },
];

const departments: { slug: string; name: string; path: string }[] = [
  // Caribbean Coast
  {
    slug: "la-guajira",
    name: "La Guajira",
    path: "M270,30 L310,20 L340,35 L330,55 L315,70 L295,75 L275,65 L265,50 Z",
  },
  {
    slug: "cesar",
    name: "Cesar",
    path: "M265,50 L275,65 L295,75 L300,95 L295,120 L275,130 L260,120 L250,100 L255,75 Z",
  },
  {
    slug: "magdalena",
    name: "Magdalena",
    path: "M215,60 L240,50 L265,50 L255,75 L250,100 L240,110 L225,115 L215,100 L210,80 Z",
  },
  {
    slug: "atlantico",
    name: "Atlántico",
    path: "M195,65 L215,60 L210,80 L205,90 L190,85 Z",
  },
  {
    slug: "bolivar",
    name: "Bolívar",
    path: "M190,85 L205,90 L215,100 L225,115 L235,135 L240,160 L235,180 L220,185 L205,170 L195,150 L185,125 L180,100 Z",
  },
  {
    slug: "sucre",
    name: "Sucre",
    path: "M165,90 L180,85 L190,85 L180,100 L185,115 L175,120 L160,110 Z",
  },
  {
    slug: "cordoba",
    name: "Córdoba",
    path: "M145,100 L165,90 L160,110 L175,120 L185,125 L185,145 L175,165 L160,170 L145,155 L140,130 Z",
  },
  // Norte de Santander
  {
    slug: "norte-de-santander",
    name: "Norte de Santander",
    path: "M275,130 L295,120 L310,130 L315,150 L305,170 L290,175 L275,165 L265,150 L270,140 Z",
  },
  // Santander
  {
    slug: "santander",
    name: "Santander",
    path: "M235,135 L250,100 L260,120 L275,130 L270,140 L265,150 L275,165 L270,185 L255,200 L240,195 L230,175 L225,155 Z",
  },
  // Antioquia
  {
    slug: "antioquia",
    name: "Antioquia",
    path: "M145,155 L160,170 L175,165 L185,145 L195,150 L205,170 L220,185 L225,155 L235,135 L225,115 L240,110 L225,115 L215,155 L220,185 L205,205 L195,215 L180,220 L165,210 L155,195 L148,175 Z",
  },
  // Boyacá
  {
    slug: "boyaca",
    name: "Boyacá",
    path: "M255,200 L270,185 L275,165 L290,175 L305,170 L310,195 L305,215 L295,230 L280,235 L265,225 L260,210 Z",
  },
  // Arauca
  {
    slug: "arauca",
    name: "Arauca",
    path: "M305,170 L315,150 L340,145 L370,155 L380,170 L365,185 L340,190 L315,195 L310,195 Z",
  },
  // Casanare
  {
    slug: "casanare",
    name: "Casanare",
    path: "M310,195 L340,190 L365,185 L380,200 L385,220 L370,240 L345,250 L320,245 L305,235 L305,215 Z",
  },
  // Cundinamarca
  {
    slug: "cundinamarca",
    name: "Cundinamarca",
    path: "M240,245 L255,235 L265,225 L280,235 L295,250 L290,270 L275,280 L260,285 L245,275 L235,260 Z",
  },
  // Bogotá D.C.
  {
    slug: "bogota",
    name: "Bogotá D.C.",
    path: "M262,260 L270,258 L272,266 L266,270 Z",
  },
  // Caldas
  {
    slug: "caldas",
    name: "Caldas",
    path: "M185,230 L200,225 L215,230 L220,245 L210,255 L195,255 L185,245 Z",
  },
  // Risaralda
  {
    slug: "risaralda",
    name: "Risaralda",
    path: "M170,240 L185,230 L185,245 L195,255 L185,265 L170,260 Z",
  },
  // Quindío
  {
    slug: "quindio",
    name: "Quindío",
    path: "M185,265 L195,255 L205,260 L200,275 L190,278 Z",
  },
  // Tolima
  {
    slug: "tolima",
    name: "Tolima",
    path: "M205,260 L220,245 L240,245 L235,260 L245,275 L240,295 L230,310 L215,315 L200,305 L195,290 L200,275 Z",
  },
  // Valle del Cauca
  {
    slug: "valle-del-cauca",
    name: "Valle del Cauca",
    path: "M145,280 L170,260 L185,265 L190,278 L200,275 L195,290 L200,305 L190,320 L175,330 L155,325 L145,305 Z",
  },
  // Chocó
  {
    slug: "choco",
    name: "Chocó",
    path: "M100,175 L120,165 L145,155 L148,175 L155,195 L165,210 L180,220 L185,230 L170,240 L170,260 L145,280 L130,270 L115,250 L105,225 L95,200 Z",
  },
  // Meta
  {
    slug: "meta",
    name: "Meta",
    path: "M295,250 L320,245 L345,250 L370,260 L395,275 L390,310 L370,330 L345,335 L315,325 L295,310 L280,295 L275,280 L290,270 Z",
  },
  // Vichada
  {
    slug: "vichada",
    name: "Vichada",
    path: "M370,240 L385,220 L420,210 L455,220 L470,240 L465,275 L445,305 L420,315 L395,310 L395,275 L370,260 L345,250 L370,240 Z",
  },
  // Guainía
  {
    slug: "guainia",
    name: "Guainía",
    path: "M420,315 L445,305 L465,320 L470,350 L460,380 L440,395 L420,385 L410,360 L405,335 Z",
  },
  // Vaupés
  {
    slug: "vaupes",
    name: "Vaupés",
    path: "M345,335 L370,330 L395,340 L405,335 L410,360 L420,385 L405,400 L385,410 L360,400 L340,380 L335,355 Z",
  },
  // Huila
  {
    slug: "huila",
    name: "Huila",
    path: "M215,315 L230,310 L240,325 L245,345 L235,365 L220,370 L205,360 L200,340 L205,325 Z",
  },
  // Cauca
  {
    slug: "cauca",
    name: "Cauca",
    path: "M145,305 L155,325 L175,330 L190,320 L200,305 L215,315 L205,325 L200,340 L205,360 L195,380 L180,390 L160,385 L145,370 L135,345 L138,320 Z",
  },
  // Nariño
  {
    slug: "narino",
    name: "Nariño",
    path: "M115,370 L135,345 L145,370 L160,385 L180,390 L175,410 L165,425 L145,435 L125,430 L110,415 L105,395 Z",
  },
  // Putumayo
  {
    slug: "putumayo",
    name: "Putumayo",
    path: "M180,390 L195,380 L205,360 L220,370 L240,380 L255,395 L250,415 L235,430 L215,435 L195,425 L175,410 Z",
  },
  // Caquetá
  {
    slug: "caqueta",
    name: "Caquetá",
    path: "M240,325 L260,285 L275,280 L295,310 L315,325 L345,335 L335,355 L320,370 L295,380 L270,385 L255,395 L240,380 L220,370 L235,365 L245,345 Z",
  },
  // Guaviare
  {
    slug: "guaviare",
    name: "Guaviare",
    path: "M315,325 L345,335 L340,380 L360,400 L350,415 L330,420 L310,410 L295,395 L295,380 L320,370 L335,355 Z",
  },
  // Amazonas
  {
    slug: "amazonas",
    name: "Amazonas",
    path: "M295,395 L310,410 L330,420 L350,415 L360,400 L385,410 L405,400 L410,430 L400,460 L380,490 L355,510 L325,520 L295,510 L270,490 L260,460 L265,430 L280,415 Z",
  },
  // San Andrés y Providencia (island, shown offset)
  {
    slug: "san-andres",
    name: "San Andrés y Providencia",
    path: "M60,110 L70,105 L75,115 L70,125 L60,125 Z M55,140 L65,135 L70,145 L60,150 Z",
  },
];
