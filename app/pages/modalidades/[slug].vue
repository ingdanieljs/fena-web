<script setup>
import { modalidades as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Detalle de Modalidad" />
    <ModalidadesDetail />
    <CtaHighlights :items="highlights" />
  </div>
</template>
