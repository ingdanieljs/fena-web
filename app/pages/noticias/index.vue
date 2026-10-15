<script setup>
import { noticias as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Noticias" />
    <NoticiasGrid />
    <CtaHighlights :items="highlights" />
  </div>
</template>
