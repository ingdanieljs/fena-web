<script setup>
import { athletes } from "~/data/athletes.js";

const people = athletes.map((athlete) => ({
  name: athlete.name,
  role: athlete.discipline,
  image: athlete.image,
  to: `/atletas/${athlete.slug}`,
}));
</script>

<template>
  <TeamSection id="atletas" :people="people">
    <template #title>Conoce a quienes representan<br> a la <span>Selección Nacional</span></template>
  </TeamSection>
</template>
