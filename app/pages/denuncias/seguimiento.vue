<script setup>
const crumbs = [{ label: "Canal de Denuncias", to: "/denuncias" }];
</script>

<template>
  <div>
    <PageHeader title="Consultar estado" :crumbs="crumbs" />
    <DenunciasTracking />
  </div>
</template>
