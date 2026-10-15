<script setup>
import { federacion as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_43.webp" title="Afíliate a FENA" />
    <AfiliacionForm />
    <CtaHighlights :items="highlights" />
  </div>
</template>
