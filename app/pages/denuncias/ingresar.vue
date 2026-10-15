<script setup>
const crumbs = [{ label: "Canal de Denuncias", to: "/denuncias" }];
</script>

<template>
  <div>
    <PageHeader title="Ingresar denuncia o reclamo" :crumbs="crumbs" current="Ingresar denuncia" />
    <DenunciasForm />
  </div>
</template>
