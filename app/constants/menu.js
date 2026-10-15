const menuItems = [
  { label: "Inicio", to: "/" },
  { label: "Institución", to: "/institucion" },
  {
    label: "Federación",
    children: [
      { label: "Atletas", to: "/atletas" },
      { label: "Licencias FENA", to: "/licencias" },
      { label: "Preguntas Frecuentes", to: "/preguntas-frecuentes" },
    ],
  },
  { label: "Eventos", to: "/eventos" },
  { label: "Noticias", to: "/noticias" },
  {
    label: "Contacto",
    to: "/contacto",
    children: [
      { label: "Contacto", to: "/contacto" },
      { label: "Canal de Denuncias", to: "/denuncias" },
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
