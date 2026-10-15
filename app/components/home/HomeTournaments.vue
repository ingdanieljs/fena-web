<script setup>
import { tournaments } from "~/data/home.js";
</script>

<template>
  <LogoMarquee id="home-tournaments" :logos="tournaments" tone="light" :repeat="2">
    <template #title>Nuestros <span>torneos</span></template>
  </LogoMarquee>
</template>
