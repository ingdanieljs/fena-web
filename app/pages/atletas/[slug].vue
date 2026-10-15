<script setup>
import { federacion as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Perfil de Atleta" />
    <AtletasProfile />
    <AtletasContact />
    <CtaHighlights :items="highlights" />
  </div>
</template>
