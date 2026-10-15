<script setup>
import { partners } from "~/data/home.js";
</script>

<template>
  <LogoMarquee id="home-partners" :logos="partners">
    <template #title>Federaciones y organismos<br> amigos del <span>deporte</span>.</template>
  </LogoMarquee>
</template>
