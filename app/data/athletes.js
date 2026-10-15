// Atletas de la Selección Nacional. Cuando exista backend, estos datos vendrán de la API.
// PENDIENTE: fotos reales (image). Sin foto, la tarjeta y el perfil muestran
// un marcador azul en lugar de usar fotos de otras personas.
// profile: detalle para /atletas/[slug]; por ahora solo lo tiene Samantha Arévalo.
export const athletes = [
  {
    slug: "samantha-arevalo",
    name: "Samantha Arévalo",
    discipline: "Aguas Abiertas",
    profile: {
      team: "Selección Nacional · Aguas Abiertas",
      bio: "Referente de las aguas abiertas en Ecuador y una de las máximas representantes de la natación nacional. Múltiple medallista continental, ha defendido al país en Juegos Olímpicos y Campeonatos Mundiales, consolidándose como un ejemplo de disciplina, constancia y entrega deportiva.",
      details: [
        { icon: "fas fa-swimmer", label: "Disciplina", value: "Aguas Abiertas — 5 km y 10 km" },
        { icon: "fas fa-flag", label: "Selección", value: "Selección Nacional FENA" },
        { icon: "fas fa-envelope", label: "Contacto", value: "secretaria@fena-ecuador.org", href: "mailto:secretaria@fena-ecuador.org" },
      ],
      career: "Inició su carrera en la natación de piscina y encontró en las aguas abiertas su mayor proyección internacional. Con años de preparación de alto rendimiento, ha representado al Ecuador en las principales citas mundiales, sumando medallas y récords que inspiran a las nuevas generaciones.",
      achievements: [
        { icon: "fas fa-medal", text: "Medallista Panamericana" },
        { icon: "fas fa-trophy", text: "Campeona Sudamericana" },
        { icon: "fas fa-water", text: "Finalista Mundial 10 km" },
        { icon: "fas fa-stopwatch", text: "Récord nacional 5 km" },
        { icon: "fas fa-globe-americas", text: "Olímpica por Ecuador" },
        { icon: "fas fa-flag", text: "Abanderada nacional" },
      ],
      skills: [
        { label: "Resistencia", value: 80 },
        { label: "Técnica de nado", value: 95 },
        { label: "Estrategia de competencia", value: 90 },
      ],
    },
  },
  { slug: "anicka-delgado", name: "Anicka Delgado", discipline: "Natación" },
  { slug: "esteban-enderica", name: "Esteban Enderica", discipline: "Aguas Abiertas" },
  { slug: "david-farinango", name: "David Farinango", discipline: "Natación" },
  { slug: "tomas-peribonio", name: "Tomás Peribonio", discipline: "Natación" },
];
