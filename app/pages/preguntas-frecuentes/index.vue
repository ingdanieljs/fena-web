<script setup>
import { faq as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_41.webp" title="Preguntas Frecuentes" />
    <FaqList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
