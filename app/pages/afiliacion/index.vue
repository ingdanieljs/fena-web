<script setup>
import { federacion as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Afíliate a FENA" />
    <AfiliacionForm />
    <CtaHighlights :items="highlights" />
  </div>
</template>
