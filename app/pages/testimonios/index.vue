<script setup>
import { eventos as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Testimonios" />
    <TestimoniosList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
