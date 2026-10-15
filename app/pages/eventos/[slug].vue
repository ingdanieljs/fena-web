<script setup>
import { eventos as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Detalle de Evento" />
    <EventosDetail />
    <EventosRelated />
    <CtaHighlights :items="highlights" />
  </div>
</template>
