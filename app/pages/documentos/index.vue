<script setup>
import { documentos as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_47.webp" title="Documentos / Trámites" />
    <DocumentosList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
