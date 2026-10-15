// Contenido de ejemplo de la home. Cuando exista backend, estos datos vendrán de la API.

export const features = [
  { image: "/assets/images/home-features/inscripciones.webp", title: "Inscripciones y récords", to: "/institucion" },
  { image: "/assets/images/home-features/convocatorias.webp", title: "Convocatorias abiertas", to: "/institucion" },
  { image: "/assets/images/home-features/documentos.webp", title: "Documentos técnicos", to: "/institucion" },
  { image: "/assets/images/home-features/capacitacion.webp", title: "Capacitación y jueces", to: "/institucion" },
];

export const stats = [
  { icon: "fas fa-swimmer", value: 2300, label: "Deportistas activos" },
  { icon: "fas fa-shield-alt", value: 1920, label: "Clubes afiliados" },
  { icon: "fas fa-calendar-alt", value: 5.2, label: "Eventos al año" },
  { icon: "fas fa-stopwatch", value: 500, suffix: "+", label: "Récords nacionales" },
];

// Fotos provisionales salvo Natación y Aguas Abiertas: el banco todavía no
// tiene fotos de clavados, polo, artística ni masters.
export const modalidades = [
  { image: "/assets/images/img_bank/img_10.webp", icon: "fas fa-swimmer", title: "Natación", text: "Eventos de piscina nacionales y avalados, rankings y récords.", to: "/modalidades" },
  { image: "/assets/images/img_bank/img_4.webp", icon: "fas fa-water", title: "Aguas Abiertas", text: "Competencias en aguas naturales: 3, 5, 7.5 y 10 km y relevos.", to: "/modalidades" },
  { image: "/assets/images/home-modalidades/clavados.webp", icon: "fas fa-swimming-pool", title: "Clavados", text: "Selectivos, marcas base, chequeos técnicos y campeonatos nacionales.", to: "/modalidades" },
  { image: "/assets/images/img_bank/img_7.webp", icon: "fas fa-volleyball-ball", title: "Polo Acuático", text: "Selectivos, campeonatos nacionales y documentos técnicos.", to: "/modalidades" },
  { image: "/assets/images/img_bank/img_3.webp", icon: "fas fa-music", title: "Natación Artística", text: "Convocatorias, eventos, resultados y documentos técnicos.", to: "/modalidades" },
  { image: "/assets/images/img_bank/img_9.webp", icon: "fas fa-medal", title: "Masters", text: "Competencias, reglas y récords máster en 25 m, 50 m y relevos.", to: "/modalidades" },
];

// Logos en blanco, en public/assets/images/patners. La altura de cada uno
// compensa su forma (los anchos se ven más chicos) para que todos pesen
// parecido en la fila; width y height van a la mitad del archivo (2x).
export const partners = [
  { name: "Comité Olímpico Ecuatoriano", image: "/assets/images/patners/comite-olimpico-ecuatoriano.webp", width: 79, height: 80 },
  { name: "Confederación Sudamericana de Deportes Acuáticos", image: "/assets/images/patners/consanat.webp", width: 62, height: 80 },
  { name: "Ministerio de Educación, Deporte y Cultura", image: "/assets/images/patners/ministerio-educacion-deporte-cultura.webp", width: 117, height: 55 },
  { name: "Organización Deportiva Suramericana (ODESUR)", image: "/assets/images/patners/odesur.webp", width: 72, height: 80 },
  { name: "Panam Aquatics", image: "/assets/images/patners/panam-aquatics.webp", width: 143, height: 44 },
  { name: "World Aquatics", image: "/assets/images/patners/world-aquatics.webp", width: 161, height: 40 },
];

// Logos de los torneos de FENA a color, en public/assets/images/torneos.
// Mismo criterio de tamaños que partners. En Clausura el "TORNEO" blanco se
// pasó a azul marino para que se lea sobre el fondo blanco.
export const tournaments = [
  { name: "Torneo Clausura", image: "/assets/images/torneos/torneo-clausura.webp", width: 132, height: 53 },
  { name: "Liga de Nadadores Masters 2026", image: "/assets/images/torneos/liga-nadadores-masters.webp", width: 81, height: 86 },
  { name: "Fenita Swimming Fest", image: "/assets/images/torneos/fenita-swimming-fest.webp", width: 92, height: 76 },
  { name: "Circuito Futuras Promesas", image: "/assets/images/torneos/circuito-futuras-promesas.webp", width: 97, height: 73 },
];
