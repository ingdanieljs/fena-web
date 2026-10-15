<script setup>
import { eventos as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Eventos y Calendario" />
    <EventosList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
