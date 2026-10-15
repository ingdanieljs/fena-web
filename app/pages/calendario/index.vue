<script setup>
import { modalidades as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_29.webp" image-position="center 25%" title="Calendario de eventos" />
    <CalendarioList />
    <CtaHighlights :items="highlights" />
  </div>
</template>
