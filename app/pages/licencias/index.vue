<script setup>
import { eventos as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Licencias FENA 2026" />
    <LicenciasPricing />
    <CtaHighlights :items="highlights" />
  </div>
</template>
