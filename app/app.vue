<script setup>
useHead({
  titleTemplate: (title) =>
    title ? `${title} | FENA` : "FENA | Federación Ecuatoriana de Natación",
  bodyAttrs: { class: "custom-cursor" },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
