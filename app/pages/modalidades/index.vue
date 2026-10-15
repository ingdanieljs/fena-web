<script setup>
import { modalidades as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_35.webp" title="Modalidades" />
    <ModalidadesGrid />
    <CtaHighlights :items="highlights" />
  </div>
</template>
