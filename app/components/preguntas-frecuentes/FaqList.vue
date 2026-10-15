<script setup>
import infoContact from "~/constants/infoContact.js";
import { faqCategories, faqs } from "~/data/faq.js";

// Filtro por categoría + búsqueda por texto; acordeón con una pregunta abierta a la vez.
const category = ref("todas");
const query = ref("");
const open = ref(faqs[0].question);

const normalize = (text) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const filtered = computed(() => {
  const term = normalize(query.value.trim());
  return faqs.filter((faq) =>
    (category.value === "todas" || faq.category === category.value)
    && (!term || normalize(`${faq.question} ${faq.answer}`).includes(term)));
});

const count = (id) => faqs.filter((faq) => faq.category === id).length;
const toggle = (question) => {
  open.value = open.value === question ? null : question;
};
</script>

<template>
  <section class="faq-hub">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-5">
          <aside class="faq-hub__aside">
            <div class="section-title text-left sec-title-animation animation-style2">
              <h2 class="section-title__title title-animation">Resolvemos tus <span>dudas</span></h2>
            </div>
            <p class="faq-hub__intro">Encuentra respuestas sobre licencias, competencias y trámites de la
              federación.</p>

            <label class="faq-hub__search">
              <span class="visually-hidden">Buscar una pregunta</span>
              <span class="far fa-search" aria-hidden="true"></span>
              <input v-model="query" type="search" placeholder="Buscar una pregunta">
            </label>

            <div class="faq-hub__filters" role="group" aria-label="Filtrar por categoría">
              <button
                type="button" :class="['faq-hub__filter', { 'is-active': category === 'todas' }]"
                :aria-pressed="category === 'todas'" @click="category = 'todas'">
                <span class="fas fa-th-large" aria-hidden="true"></span>Todas
                <span class="faq-hub__filter-count">{{ faqs.length }}</span>
              </button>
              <button
                v-for="item in faqCategories" :key="item.id" type="button"
                :class="['faq-hub__filter', { 'is-active': category === item.id }]"
                :aria-pressed="category === item.id" @click="category = item.id">
                <span :class="item.icon" aria-hidden="true"></span>{{ item.label }}
                <span class="faq-hub__filter-count">{{ count(item.id) }}</span>
              </button>
            </div>

            <div class="faq-hub__help">
              <span class="faq-hub__help-icon"><span class="fas fa-comments" aria-hidden="true"></span></span>
              <h3 class="faq-hub__help-title">¿No encuentras tu respuesta?</h3>
              <p class="faq-hub__help-text">Escríbenos o llámanos y te orientamos.</p>
              <ul class="faq-hub__help-list">
                <li>
                  <span class="fas fa-envelope" aria-hidden="true"></span>
                  <a :href="infoContact.email.url">{{ infoContact.email.label }}</a>
                </li>
                <li>
                  <span class="fas fa-phone" aria-hidden="true"></span>
                  <a :href="infoContact.phone.url">{{ infoContact.phone.label }}</a>
                </li>
              </ul>
              <NuxtLink to="/contacto" class="thm-btn">Contáctanos<span class="far fa-chevron-right"></span></NuxtLink>
            </div>
          </aside>
        </div>

        <div class="col-xl-8 col-lg-7">
          <p class="visually-hidden" aria-live="polite">{{ filtered.length }} preguntas</p>
          <ul v-if="filtered.length" class="faq-hub__list">
            <li
              v-for="(faq, index) in filtered" :key="faq.question"
              :class="['faq-hub__item', { 'is-open': open === faq.question }]">
              <h3 class="faq-hub__question">
                <button
                  :id="`faq-q-${index}`" type="button" :aria-expanded="open === faq.question"
                  :aria-controls="`faq-a-${index}`" @click="toggle(faq.question)">
                  <span class="faq-hub__number" aria-hidden="true">{{ String(index + 1).padStart(2, "0") }}</span>
                  <span class="faq-hub__question-text">{{ faq.question }}</span>
                  <span class="faq-hub__toggle" aria-hidden="true"><span class="far fa-plus"></span></span>
                </button>
              </h3>
              <div
                v-show="open === faq.question" :id="`faq-a-${index}`" role="region"
                :aria-labelledby="`faq-q-${index}`" class="faq-hub__answer">
                <p>{{ faq.answer }}</p>
              </div>
            </li>
          </ul>
          <div v-else class="faq-hub__empty">
            <span class="far fa-search" aria-hidden="true"></span>
            <p>No encontramos preguntas con esa búsqueda.</p>
            <button type="button" class="faq-hub__reset" @click="query = ''; category = 'todas'">Ver todas las preguntas</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
