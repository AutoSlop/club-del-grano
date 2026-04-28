export interface Product {
  id: number;
  name: string;
  brand: string;
  origin: string;
  process: string;
  roast: string;
  notes: string[];
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

export interface Brand {
  id: number;
  name: string;
  location: string;
  description: string;
  products: number;
  rating: number;
  avatar: string;
}

export interface Review {
  id: number;
  user: string;
  product: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Geisha Lavado Finca El Paraíso",
    brand: "Café Ancestral",
    origin: "Huila, Colombia",
    process: "Lavado",
    roast: "Medio",
    notes: ["Jazmín", "Bergamota", "Miel"],
    price: 68000,
    rating: 4.9,
    reviews: 47,
    image: "🫘",
  },
  {
    id: 2,
    name: "Caturra Natural Sierra Nevada",
    brand: "Tostadora Cumbre",
    origin: "Sierra Nevada, Colombia",
    process: "Natural",
    roast: "Medio-Oscuro",
    notes: ["Frutos rojos", "Chocolate", "Panela"],
    price: 42000,
    rating: 4.7,
    reviews: 83,
    image: "☕",
  },
  {
    id: 3,
    name: "Castillo Honey Planadas",
    brand: "Raíces del Café",
    origin: "Tolima, Colombia",
    process: "Honey",
    roast: "Claro",
    notes: ["Durazno", "Caramelo", "Cítricos"],
    price: 38000,
    rating: 4.8,
    reviews: 62,
    image: "🍯",
  },
  {
    id: 4,
    name: "Tabi Anaeróbico Buesaco",
    brand: "Montaña Negra",
    origin: "Nariño, Colombia",
    process: "Anaeróbico",
    roast: "Medio",
    notes: ["Fresa", "Vino tinto", "Especias"],
    price: 55000,
    rating: 4.6,
    reviews: 34,
    image: "🍷",
  },
  {
    id: 5,
    name: "Bourbon Rosado Pijao",
    brand: "Café Ancestral",
    origin: "Quindío, Colombia",
    process: "Lavado",
    roast: "Claro",
    notes: ["Rosa", "Limón", "Té verde"],
    price: 72000,
    rating: 4.9,
    reviews: 28,
    image: "🌹",
  },
  {
    id: 6,
    name: "Colombia Supremo Clásico",
    brand: "Tostadora Cumbre",
    origin: "Antioquia, Colombia",
    process: "Lavado",
    roast: "Oscuro",
    notes: ["Nuez", "Cacao", "Caramelo oscuro"],
    price: 32000,
    rating: 4.5,
    reviews: 156,
    image: "🔥",
  },
];

export const brands: Brand[] = [
  {
    id: 1,
    name: "Café Ancestral",
    location: "Popayán, Cauca",
    description:
      "Tostadores artesanales de tercera generación. Especialistas en microlotes de variedades exóticas con perfiles complejos y trazabilidad completa.",
    products: 8,
    rating: 4.9,
    avatar: "🏔️",
  },
  {
    id: 2,
    name: "Tostadora Cumbre",
    location: "Santa Marta, Magdalena",
    description:
      "Del grano al cup score. Café de la Sierra Nevada con procesos sostenibles y relación directa con productores indígenas Arhuacos.",
    products: 12,
    rating: 4.7,
    avatar: "⛰️",
  },
  {
    id: 3,
    name: "Raíces del Café",
    location: "Ibagué, Tolima",
    description:
      "Micro-tostadora enfocada en cafés de proceso honey y experimentales. Ganadores del premio Colombia Tierra de Diversidad 2025.",
    products: 6,
    rating: 4.8,
    avatar: "🌿",
  },
  {
    id: 4,
    name: "Montaña Negra",
    location: "Pasto, Nariño",
    description:
      "Especialistas en fermentaciones anaeróbicas de alta montaña. Cafés con perfiles frutales intensos cultivados a más de 2.000 msnm.",
    products: 5,
    rating: 4.6,
    avatar: "🌑",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    user: "María C.",
    product: "Geisha Lavado Finca El Paraíso",
    rating: 5,
    text: "Increíble complejidad aromática. Las notas florales son evidentes desde que abres la bolsa. El mejor Geisha que he probado fuera de una catación profesional.",
    date: "15 abr 2026",
    verified: true,
  },
  {
    id: 2,
    user: "Andrés F.",
    product: "Caturra Natural Sierra Nevada",
    rating: 5,
    text: "Perfecto para espresso. El proceso natural le da una dulzura y cuerpo que no encuentras en café comercial. Ya llevo tres bolsas.",
    date: "12 abr 2026",
    verified: true,
  },
  {
    id: 3,
    user: "Laura M.",
    product: "Castillo Honey Planadas",
    rating: 4,
    text: "Muy buen balance entre dulzura y acidez. El tueste claro resalta las notas frutales sin perder cuerpo. Excelente relación calidad-precio.",
    date: "8 abr 2026",
    verified: true,
  },
  {
    id: 4,
    user: "Carlos R.",
    product: "Tabi Anaeróbico Buesaco",
    rating: 5,
    text: "¡Wow! Este café sabe a vino natural. La fermentación anaeróbica produce algo único. Club del Grano me conectó con cafés que nunca habría encontrado.",
    date: "3 abr 2026",
    verified: true,
  },
];

export const faqs: FAQ[] = [
  {
    question: "¿Qué es Club del Grano?",
    answer:
      "Club del Grano es un marketplace social que conecta a marcas independientes de café, tostadores artesanales y compradores aficionados en Colombia. Combinamos la experiencia de compra con reseñas verificadas y una comunidad activa.",
  },
  {
    question: "¿Cómo funcionan las reseñas verificadas?",
    answer:
      "Solo los usuarios que han comprado un producto pueden dejar una reseña. Cada reseña lleva una insignia de \"compra verificada\" para garantizar la autenticidad de las opiniones.",
  },
  {
    question: "¿Cuánto cuesta vender en Club del Grano?",
    answer:
      "El plan para vendedores tiene un costo de USD $9.99 al mes, sin comisión por transacción. Los primeros 10 vendedores fundadores obtienen su primer mes completamente gratis.",
  },
  {
    question: "¿Cómo recibo los pagos como vendedor?",
    answer:
      "Los pagos se procesan de forma segura y se depositan directamente en tu cuenta bancaria colombiana. El ciclo de pago es semanal, con un mínimo de desembolso de $50.000 COP.",
  },
  {
    question: "¿Puedo vender si estoy fuera de Colombia?",
    answer:
      "Actualmente Club del Grano opera exclusivamente en Colombia. Estamos trabajando para expandirnos a otros países de la región próximamente.",
  },
  {
    question: "¿Qué tipo de productos puedo vender?",
    answer:
      "Puedes vender café tostado en grano o molido, equipos de preparación y accesorios relacionados con el café. Todos los productos deben cumplir con los estándares de calidad de la plataforma.",
  },
  {
    question: "¿Cómo funciona el feed comunitario?",
    answer:
      "El feed es un espacio donde los miembros de la comunidad comparten descubrimientos, métodos de preparación, reseñas extendidas y conversación sobre café. Piensa en él como una red social exclusiva para caficultores.",
  },
];
