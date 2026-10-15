<script setup>
import { noticias as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Detalle de Noticia" />
    <NoticiasDetail />
    <CtaHighlights :items="highlights" />
  </div>
</template>
