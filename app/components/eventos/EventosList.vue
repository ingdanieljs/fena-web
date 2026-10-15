<script setup>
import events from "~/data/events.js";

// Tarjetas con el estilo de noticias (.news-card) y filtros por modalidad
// con el estilo de preguntas frecuentes (.faq-hub__filter).
const disciplines = [...new Set(events.map((event) => event.discipline))];
const discipline = ref("todas");
const filtered = computed(() =>
  discipline.value === "todas" ? events : events.filter((event) => event.discipline === discipline.value));
</script>

<template>
  <section class="event-hub" aria-labelledby="event-hub-title">
    <div class="container">
      <div class="event-hub__head">
        <div class="section-title text-left sec-title-animation animation-style2">
          <h2 id="event-hub-title" class="section-title__title title-animation">Próximos <span>eventos</span></h2>
        </div>
        <div class="faq-hub__filters event-hub__filters" role="group" aria-label="Filtrar por modalidad">
          <button
            type="button" :class="['faq-hub__filter', { 'is-active': discipline === 'todas' }]"
            :aria-pressed="discipline === 'todas'" @click="discipline = 'todas'">
            Todas<span class="faq-hub__filter-count">{{ events.length }}</span>
          </button>
          <button
            v-for="item in disciplines" :key="item" type="button"
            :class="['faq-hub__filter', { 'is-active': discipline === item }]"
            :aria-pressed="discipline === item" @click="discipline = item">
            {{ item }}<span class="faq-hub__filter-count">{{ events.filter((event) => event.discipline === item).length }}</span>
          </button>
        </div>
      </div>
      <ul class="home-news__list">
        <li v-for="event in filtered" :key="event.slug">
          <NuxtLink :to="`/eventos/${event.slug}`" class="news-card">
            <div class="news-card__media">
              <img
                :src="event.image" alt="" width="1024" height="683" loading="lazy" class="news-card__img"
                :style="event.position ? { objectPosition: event.position } : null">
              <p class="news-card__date">
                <span class="news-card__day">{{ event.day }}</span>
                <span class="news-card__month">{{ event.month }}</span>
              </p>
              <span v-if="event.live" class="home-events__live home-events__live--corner">En vivo</span>
            </div>
            <div class="news-card__body">
              <p class="news-card__category">{{ event.discipline }} · {{ event.category }}</p>
              <h3 class="news-card__title">{{ event.title }}</h3>
              <p class="event-hub__place">
                <span class="fas fa-map-marker-alt" aria-hidden="true"></span>{{ event.city }}, Ecuador
              </p>
              <span class="news-card__more" aria-hidden="true">Ver evento<span class="far fa-chevron-right"></span></span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
