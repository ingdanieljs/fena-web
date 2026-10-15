<script setup>
const crumbs = [{ label: "Canal de Denuncias", to: "/denuncias" }];
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_46.webp" image-position="center 40%" title="Ingresar denuncia o reclamo" :crumbs="crumbs" current="Ingresar denuncia" />
    <DenunciasForm />
  </div>
</template>
