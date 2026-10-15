<script setup>
// Banner con título y breadcrumb de las páginas interiores.
// crumbs: [{ label, to? }] entre "Inicio" y el título.
// image: foto de fondo (del banco img_bank), cada página pasa la suya.
// image-position: encuadre vertical de esa foto.
const props = defineProps({
  title: { type: String, required: true },
  current: { type: String, default: "" },
  crumbs: { type: Array, default: () => [] },
  image: { type: String, default: "/assets/images/img_bank/img_12.webp" },
  // Encuadre de la foto en el banner (background-position), elegido por foto
  // para que no queden caras cortadas ni la marca de agua de abajo.
  imagePosition: { type: String, default: "center 50%" },
});

useHead({ title: props.title });
</script>

<template>
  <section class="page-header">
    <div class="page-header__bg" :style="{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition }"></div>
    <div class="container">
      <div class="page-header__inner">
        <h3>{{ title }}</h3>
        <div class="thm-breadcrumb__inner">
          <ul class="thm-breadcrumb list-unstyled">
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <template v-for="crumb in crumbs" :key="crumb.label">
              <li><span class="fas fa-angle-right"></span></li>
              <li><NuxtLink :to="crumb.to">{{ crumb.label }}</NuxtLink></li>
            </template>
            <li><span class="fas fa-angle-right"></span></li>
            <li>{{ current || title }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bubbleContainer">
      <div class="bubble-1"></div>
      <div class="bubble-2"></div>
      <div class="bubble-3"></div>
    </div>
  </section>
</template>
