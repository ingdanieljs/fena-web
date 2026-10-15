<script setup>
import news from "~/data/news.js";

// Filtro por categoría en la URL (?categoria=...), así el detalle puede enlazar
// a una categoría. Tarjetas NewsCard y filtros con el estilo de preguntas frecuentes.
const route = useRoute();
const categories = [...new Set(news.map((post) => post.category))];
const active = computed(() => (categories.includes(route.query.categoria) ? route.query.categoria : null));
const filtered = computed(() => (active.value ? news.filter((post) => post.category === active.value) : news));
</script>

<template>
  <section class="event-hub news-hub" aria-labelledby="news-hub-title">
    <div class="container">
      <div class="event-hub__head">
        <div class="section-title text-left sec-title-animation animation-style2">
          <h2 id="news-hub-title" class="section-title__title title-animation">Noticias y <span>novedades</span></h2>
        </div>
        <nav class="faq-hub__filters event-hub__filters" aria-label="Filtrar por categoría">
          <NuxtLink
            to="/noticias" :class="['faq-hub__filter', { 'is-active': !active }]"
            :aria-current="!active ? 'page' : undefined">
            Todas<span class="faq-hub__filter-count">{{ news.length }}</span>
          </NuxtLink>
          <NuxtLink
            v-for="category in categories" :key="category" :to="{ path: '/noticias', query: { categoria: category } }"
            :class="['faq-hub__filter', { 'is-active': active === category }]"
            :aria-current="active === category ? 'page' : undefined">
            {{ category }}<span class="faq-hub__filter-count">{{ news.filter((post) => post.category === category).length }}</span>
          </NuxtLink>
        </nav>
      </div>
      <ul class="home-news__list">
        <li v-for="post in filtered" :key="post.slug">
          <NewsCard :post="post" />
        </li>
      </ul>
    </div>
  </section>
</template>
