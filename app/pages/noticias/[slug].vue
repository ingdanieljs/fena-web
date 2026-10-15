<script setup>
import { noticias as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_20.webp" image-position="center 40%" title="Detalle de Noticia" />
    <NoticiasDetail />
    <CtaHighlights :items="highlights" />
  </div>
</template>
