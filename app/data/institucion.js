// Contenido de la página Institución. Cuando exista backend, estos datos vendrán de la API.

// Pestañas de "El organismo rector" (Misión, Visión, Compromiso).
export const pillars = [
  {
    id: "mision",
    label: "Misión",
    text: "Planificar, dirigir, regular y promover el desarrollo de la natación y las disciplinas acuáticas en el Ecuador, impulsando la formación deportiva y la competencia nacional e internacional.",
    points: [
      { icon: "fas fa-user-shield", text: "Protección al deportista" },
      { icon: "fas fa-balance-scale", text: "Competencia justa y transparente" },
      { icon: "fas fa-chart-line", text: "Desarrollo técnico y masificación" },
      { icon: "fas fa-globe-americas", text: "Representación internacional" },
    ],
  },
  {
    id: "vision",
    label: "Visión",
    text: "Ser una federación referente en la región, con deportistas de alto rendimiento, clubes fortalecidos y una natación masificada que represente con orgullo al Ecuador en el mundo.",
    points: [
      { icon: "fas fa-flag", text: "Referente en la región" },
      { icon: "fas fa-medal", text: "Deportistas de alto rendimiento" },
      { icon: "fas fa-users", text: "Clubes fortalecidos" },
      { icon: "fas fa-swimmer", text: "Natación masificada" },
    ],
  },
  {
    id: "compromiso",
    label: "Compromiso",
    text: "Nuestro compromiso es la protección del deportista, la competencia justa, el desarrollo técnico y la transparencia en cada decisión de la natación ecuatoriana.",
    points: [
      { icon: "fas fa-hand-holding-heart", text: "Bienestar del deportista" },
      { icon: "fas fa-gavel", text: "Juego limpio" },
      { icon: "fas fa-user-check", text: "Jueces y entrenadores certificados" },
      { icon: "fas fa-file-alt", text: "Transparencia en cada decisión" },
    ],
  },
];

// Directiva: nombres tomados del listado anterior de la plantilla (confirmar).
// PENDIENTE: fotos reales; sin image se muestra un marcador azul.
export const directiva = [
  { name: "Santiago Enderica", role: "Presidente" },
  { name: "Nombre Apellido", role: "Vicepresidente" },
  { name: "Sandra Campoverde", role: "Secretaria" },
  { name: "Pedro Gordillo", role: "Tesorero" },
];

// PENDIENTE: nombres y fotos reales. Las fotos son provisionales del banco.
export const equipo = [
  { name: "Nombre Apellido", role: "Dirección Técnica", image: "/assets/images/img_bank/img_39.webp" },
  { name: "Nombre Apellido", role: "Coordinación de Eventos", image: "/assets/images/img_bank/img_42.webp" },
  { name: "Nombre Apellido", role: "Comunicación", image: "/assets/images/img_bank/img_31.webp" },
  { name: "Nombre Apellido", role: "Administración", image: "/assets/images/img_bank/img_14.webp" },
];
