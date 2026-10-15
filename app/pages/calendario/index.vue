<script setup>
import { modalidades as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Calendario de eventos" />
    <CalendarioList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
