<script setup>
import { contacto as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Contacto" />
    <ContactoInfo />
    <ContactoForm />
    <CtaHighlights :items="highlights" />
  </div>
</template>
