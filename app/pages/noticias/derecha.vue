<script setup>
import { noticias as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Noticias" />
    <NoticiasRightSidebar />
    <CtaHighlights :items="highlights" />
  </div>
</template>
