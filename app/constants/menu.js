const menuItems = [
  { label: "Inicio", to: "/" },
  { label: "Institución", to: "/institucion" },
  {
    label: "Federación",
    children: [
      { label: "Atletas", to: "/atletas" },
      { label: "Perfil de Atleta", to: "/atletas/perfil" },
      { label: "Testimonios", to: "/testimonios" },
      { label: "Licencias FENA", to: "/licencias" },
      { label: "Preguntas Frecuentes", to: "/preguntas-frecuentes" },
      { label: "Privacidad", to: "/privacidad" },
    ],
  },
  { label: "Eventos", to: "/eventos" },
  {
    label: "Noticias",
    children: [
      { label: "Noticias", to: "/noticias" },
      { label: "Boletines", to: "/noticias/boletines" },
      { label: "Noticias (Izquierda)", to: "/noticias/izquierda" },
      { label: "Noticias (Derecha)", to: "/noticias/derecha" },
      { label: "Detalle de Noticia", to: "/noticias/detalle" },
    ],
  },
  {
    label: "Contacto",
    to: "/contacto",
    children: [
      { label: "Contacto", to: "/contacto" },
      { label: "Canal de Denuncias", to: "/denuncias" },
      { label: "Ingresar denuncia o reclamo", to: "/denuncias/ingresar" },
      { label: "Consultar estado de denuncia", to: "/denuncias/seguimiento" },
    ],
  },
];

export const footerLinks = [
  { label: "Inicio", to: "/" },
  { label: "Calendario", to: "/calendario" },
  { label: "Licencias FENA", to: "/licencias" },
  { label: "Canal de Denuncias", to: "/denuncias" },
  { label: "Contacto", to: "/contacto" },
];

export const footerBottomLinks = [
  { label: "Términos del servicio", to: "/privacidad" },
  { label: "Política de privacidad", to: "/privacidad" },
  { label: "Soporte", to: "/contacto" },
];

export default menuItems;
