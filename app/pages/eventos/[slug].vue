<script setup>
import { eventos as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_15.webp" title="Detalle de Evento" />
    <EventosDetail />
    <EventosRelated />
    <CtaHighlights :items="highlights" />
  </div>
</template>
