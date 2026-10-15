<script setup>
import { eventos as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_37.webp" title="Licencias FENA 2026" />
    <LicenciasPricing />
    <CtaHighlights :items="highlights" />
  </div>
</template>
