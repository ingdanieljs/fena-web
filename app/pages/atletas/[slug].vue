<script setup>
import { federacion as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_14.webp" title="Perfil de Atleta" />
    <AtletasProfile />
    <AtletasContact />
    <CtaHighlights :items="highlights" />
  </div>
</template>
