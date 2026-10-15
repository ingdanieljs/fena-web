<script setup>
import { privacidad as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Política de privacidad" />
    <PrivacidadContent />
    <CtaHighlights :items="highlights" />
  </div>
</template>
