<script setup>
import { documentos as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Documentos / Trámites" />
    <DocumentosList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
