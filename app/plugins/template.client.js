// Inicializa el JS de la plantilla (public/assets/js/fena-template.js).
// initGlobal una vez; initPage después de cada render de página (carga inicial y navegación).
export default defineNuxtPlugin((nuxtApp) => {
  const template = () => window.FenaTemplate;
  let globalReady = false;

  const run = () => {
    if (!template()) return;
    if (!globalReady) {
      template().initGlobal();
      globalReady = true;
    }
    template().initPage();
    window.FenaDenuncias?.init();
  };

  // Al navegar la página vuelve arriba: el header fijo se oculta de golpe,
  // sin la animación de salida de 500ms.
  nuxtApp.hook("page:start", () => {
    const sticky = document.querySelector(".stricky-header");
    if (!sticky?.classList.contains("stricky-fixed")) return;
    sticky.classList.add("no-transition");
    sticky.classList.remove("stricky-fixed");
    requestAnimationFrame(() => requestAnimationFrame(() => sticky.classList.remove("no-transition")));
  });

  nuxtApp.hook("page:finish", () => {
    nextTick(() => requestAnimationFrame(run));
  });

  return {
    provide: { jQuery: window.jQuery },
  };
});
