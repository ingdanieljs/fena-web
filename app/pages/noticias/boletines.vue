<script setup>
import { noticias as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Boletines" />
    <NoticiasBulletins />
    <CtaHighlights :items="highlights" />
  </div>
</template>
