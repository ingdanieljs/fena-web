<script setup>
import { faq as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Preguntas Frecuentes" />
    <FaqList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
