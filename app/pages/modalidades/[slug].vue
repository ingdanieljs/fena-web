<script setup>
import { modalidades as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_16.webp" title="Detalle de Modalidad" />
    <ModalidadesDetail />
    <CtaHighlights :items="highlights" />
  </div>
</template>
