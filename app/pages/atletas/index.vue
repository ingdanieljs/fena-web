<script setup>
import { federacion as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_45.webp" image-position="center 25%" title="Atletas" />
    <AtletasList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
