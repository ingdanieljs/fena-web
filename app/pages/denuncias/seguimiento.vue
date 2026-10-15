<script setup>
const crumbs = [{ label: "Canal de Denuncias", to: "/denuncias" }];
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_46.webp" image-position="center 40%" title="Consultar estado" :crumbs="crumbs" />
    <DenunciasTracking />
  </div>
</template>
