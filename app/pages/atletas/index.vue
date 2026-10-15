<script setup>
import { federacion as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Atletas" />
    <AtletasList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
