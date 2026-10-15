<script setup>
import { eventos as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_12.webp" title="Eventos y Calendario" />
    <EventosList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
