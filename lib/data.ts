export const profile = {
  first: "IGNACIO",
  last: "GÓMEZ",
  role: "Backend Developer | Java",
  location: "Buenos Aires, Argentina",
  photo: "/profile.jpg",
  description:
    "Estudiante avanzado de Licenciatura en Sistemas en la UNLa, orientado al desarrollo de software y especializado en construir soluciones backend. Me interesa resolver problemas reales mediante código, buenas prácticas y aprendizaje continuo.",
  email: "nachogomezz0011@gmail.com",
  linkedin: "https://www.linkedin.com/in/ignaciogomez0011/",
  github: "https://github.com/nachogomezrp",
  cv: "/CV_Ignacio_Gomez.pdf",
};

export const terminal = [
  { cmd: "whoami", out: "Ignacio Gomez" },
  { cmd: "focus", out: "Backend Development / Java" },
  { cmd: "education", out: "UNLa // Licenciatura en Sistemas" },
  {
    cmd: "mindset",
    out: "problem_solving = true | continuous_learning = true",
  },
];

export const pillars = [
  {
    title: "Formación",
    text: "Analista Programador Universitario. Licenciatura en Sistemas en tramo final.",
  },
  {
    title: "Capacidad analítica",
    text: "Diagnóstico de incidentes y análisis de causa raíz en entornos técnicos.",
  },
  {
    title: "Entornos técnicos",
    text: "Soporte backoffice y N3 como complemento del perfil de desarrollo.",
  },
  {
    title: "Aprendizaje constante",
    text: "Foco en arquitectura backend y buenas prácticas.",
  },
];

export const stack = [
  { group: "Backend", items: ["Java", "Python", "C"] },
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] },
  { group: "Bases de datos", items: ["MySQL"] },
  { group: "Herramientas", items: ["Git", "GitHub"] },
  {
    group: "En profundización",
    learning: true,
    items: [
      "Spring Boot",
      "Hibernate / JPA",
      "APIs REST",
      "Docker",
      "Testing",
      "Swagger",
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "Catálogo online de accesorios de auto",
    description:
      "Catálogo web que muestra los productos de forma visual y deriva la consulta de compra directamente a WhatsApp.",
    problem:
      "La exhibición de productos se hacía enviando fotos por chat, una por una, de forma manual.",
    features: [
      "Exhibición visual del catálogo",
      "Cierre de venta directo a WhatsApp",
    ],
    tech: [] as string[],
    image: "/projects/catalogo.jpg",
    demo: "https://losdelsuraccesorios.netlify.app/",
    github: "https://github.com/nachogomezrp/LosDelSur1.0",
  },
];

export const education = [
  {
    title: "Analista Programador Universitario",
    org: "Universidad Nacional de Lanús (UNLa)",
    period: "",
    status: "Completo",
  },
  {
    title: "Licenciatura en Sistemas",
    org: "Universidad Nacional de Lanús (UNLa)",
    period: "",
    status: "En curso — tramo final",
  },
];

export const experience = [
  {
    title: "Soporte técnico — Backoffice y N3",
    org: "",
    period: "",
    detail:
      "Resolución de incidentes, análisis de problemas técnicos y trabajo con herramientas informáticas.",
  },
];
