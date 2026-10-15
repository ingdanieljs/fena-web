<script setup>
// La clase "show" y el ancho de la barra los maneja fena-template.js en el scroll.
const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
</script>

<template>
  <a href="#" class="scroll-to-target scroll-to-top" @click.prevent="toTop">
    <span class="scroll-to-top__wrapper"><span class="scroll-to-top__inner"></span></span>
    <span class="scroll-to-top__text"> Volver arriba</span>
  </a>
</template>
