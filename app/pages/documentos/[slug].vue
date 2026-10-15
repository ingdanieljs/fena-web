<script setup>
import { documentoDetalle as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Detalle de Documento" />
    <DocumentosDetail />
    <DocumentosDescription />
    <DocumentosRelated />
    <CtaHighlights :items="highlights" />
  </div>
</template>
