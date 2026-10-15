<script setup>
import { noticias as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_25.webp" title="Boletines" />
    <NoticiasBulletins />
    <CtaHighlights :items="highlights" />
  </div>
</template>
