<script setup>
import { noticias as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_23.webp" image-position="center 30%" title="Noticias" />
    <NoticiasRightSidebar />
    <CtaHighlights :items="highlights" />
  </div>
</template>
