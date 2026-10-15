<script setup>
import { privacidad as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_22.webp" image-position="center 25%" title="Política de privacidad" />
    <PrivacidadContent />
    <CtaHighlights :items="highlights" />
  </div>
</template>
