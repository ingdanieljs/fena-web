<script setup>
import { contacto as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_42.webp" title="Contacto" />
    <ContactoInfo />
    <ContactoForm />
    <CtaHighlights :items="highlights" />
  </div>
</template>
