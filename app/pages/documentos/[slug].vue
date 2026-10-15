<script setup>
import { documentoDetalle as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_27.webp" image-position="center 40%" title="Detalle de Documento" />
    <DocumentosDetail />
    <DocumentosDescription />
    <DocumentosRelated />
    <CtaHighlights :items="highlights" />
  </div>
</template>
