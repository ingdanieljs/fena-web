<script setup>
import { eventos as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_38.webp" image-position="center 40%" title="Testimonios" />
    <TestimoniosList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
