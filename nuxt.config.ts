const css = [
  "bootstrap.min.css",
  "animate.min.css",
  "custom-animate.css",
  "swiper.min.css",
  "font-awesome-all.css",
  "jarallax.css",
  "jquery.magnific-popup.css",
  "odometer.min.css",
  "flaticon.css",
  "owl.carousel.min.css",
  "owl.theme.default.min.css",
  "nice-select.css",
  "jquery-ui.css",
  "twentytwenty.css",
  "aos.css",
  "style.css",
  "responsive.css",
  "denuncias.css",
];

// Orden de carga igual al sitio estático. Se cargan al final del body sin defer
// para que window.FenaTemplate exista antes de que Nuxt hidrate la app.
const js = [
  "jquery-latest.js",
  "bootstrap.bundle.min.js",
  "jarallax.min.js",
  "jquery.appear.min.js",
  "swiper.min.js",
  "jquery.magnific-popup.min.js",
  "jquery.validate.min.js",
  "odometer.min.js",
  "wow.js",
  "isotope.js",
  "owl.carousel.min.js",
  "jquery-ui.js",
  "jquery.nice-select.min.js",
  "marquee.min.js",
  "twentytwenty.js",
  "jquery.event.move.js",
  "aos.js",
  "gsap/gsap.js",
  "gsap/ScrollTrigger.js",
  "gsap/SplitText.js",
  "denuncias.js",
  "fena-template.js",
];

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/eslint", "@pinia/nuxt"],
  // components/layout/AppHeader.vue se usa como <AppHeader>, sin prefijo de carpeta.
  components: [{ path: "~/components", pathPrefix: false }],
  app: {
    head: {
      htmlAttrs: { lang: "es" },
      title: "FENA | Federación Ecuatoriana de Natación",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Federación Ecuatoriana de Natación" },
        { name: "theme-color", content: "#0B1542" },
      ],
      link: [
        { rel: "icon", href: "/favicon/favicon.ico", sizes: "48x48" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@400;500;600;700&display=swap" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" },
        ...css.map((file) => ({ rel: "stylesheet", href: `/assets/css/${file}` })),
      ],
      script: js.map((file) => ({ src: `/assets/js/${file}`, tagPosition: "bodyClose" })),
    },
  },
  css: ["~/assets/main.css"],
  // Los favicons viven en public/favicon; navegadores y buscadores igual piden /favicon.ico.
  routeRules: {
    "/favicon.ico": { redirect: { to: "/favicon/favicon.ico", statusCode: 301 } },
  },
});
