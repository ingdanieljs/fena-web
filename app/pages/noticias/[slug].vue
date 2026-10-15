<script setup>
import { noticias as highlights } from "~/constants/highlights.js";
import news from "~/data/news.js";

// Un slug desconocido (ej. /noticias/detalle) muestra la primera noticia.
const route = useRoute();
const post = computed(() => news.find((item) => item.slug === route.params.slug) ?? news[0]);
</script>

<template>
  <div>
    <PageHeader
      image="/assets/images/img_bank/img_20.webp" image-position="center 40%" title="Detalle de Noticia"
      :crumbs="[{ label: 'Noticias', to: '/noticias' }]" :current="post.title" />
    <NoticiasDetail :post="post" />
    <CtaHighlights :items="highlights" />
  </div>
</template>
