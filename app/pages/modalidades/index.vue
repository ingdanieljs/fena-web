<script setup>
import { modalidades as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Modalidades" />
    <ModalidadesGrid />
    <CtaHighlights :items="highlights" />
  </div>
</template>
