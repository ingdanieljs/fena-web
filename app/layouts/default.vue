<script setup>
const route = useRoute();
const ui = useUiStore();

// La home usa el header blanco; las páginas interiores el header azul.
const headerVariant = computed(() => (route.path === "/" ? "home" : "page"));

watch(() => route.fullPath, () => ui.closeAll());
</script>

<template>
  <div>
    <div class="custom-cursor__cursor"></div>
    <div class="custom-cursor__cursor-two"></div>
    <Preloader />

    <div class="page-wrapper">
      <AppHeader :variant="headerVariant" />
      <slot ></slot>
      <AppFooter :variant="headerVariant" />
    </div>

    <MobileNav />
    <WhatsAppButton />
    <InfoSidebar />
    <ScrollToTop />
  </div>
</template>
