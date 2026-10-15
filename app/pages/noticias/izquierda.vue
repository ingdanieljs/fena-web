<script setup>
import { noticias as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Noticias" />
    <NoticiasLeftSidebar />
    <CtaHighlights :items="highlights" />
  </div>
</template>
