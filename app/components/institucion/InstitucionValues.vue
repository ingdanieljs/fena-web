<script setup>
import { pillars } from "~/data/institucion.js";

// Pestañas accesibles (role="tablist"): flechas izquierda/derecha cambian de pestaña.
const active = ref(pillars[0].id);
const tabs = ref([]);

const select = (index) => {
  const pillar = pillars[(index + pillars.length) % pillars.length];
  active.value = pillar.id;
  nextTick(() => tabs.value.find((tab) => tab.id === `tab-${pillar.id}`)?.focus());
};

const onKeydown = (event, index) => {
  if (event.key === "ArrowRight") select(index + 1);
  if (event.key === "ArrowLeft") select(index - 1);
};
</script>

<template>
  <section class="inst-about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-6">
          <div class="inst-about__media">
            <img src="/assets/images/img_bank/img_3.webp" alt="" width="683" height="1024" class="inst-about__img">
            <div class="inst-about__stat">
              <span class="inst-about__stat-icon">
                <span class="fas fa-trophy" aria-hidden="true"></span>
              </span>
              <div>
                <p class="inst-about__stat-value"><span class="odometer" data-count="35">00</span>+</p>
                <p class="inst-about__stat-label">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6">
          <div class="inst-about__content">
            <div class="section-title text-left sec-title-animation animation-style2">
              <h2 class="section-title__title title-animation">El organismo rector de la natación en
                <span>Ecuador</span></h2>
            </div>
            <p class="inst-about__text">Planificamos, dirigimos y regulamos las disciplinas acuáticas,
              promoviendo la formación deportiva y la representación del Ecuador en la competencia
              internacional.</p>
            <div class="inst-about__tabs" role="tablist" aria-label="Misión, visión y compromiso">
              <button
                v-for="(pillar, index) in pillars"
                :id="`tab-${pillar.id}`"
                ref="tabs"
                :key="pillar.id"
                type="button"
                role="tab"
                :class="['inst-about__tab', { 'is-active': active === pillar.id }]"
                :aria-selected="active === pillar.id"
                :aria-controls="`panel-${pillar.id}`"
                :tabindex="active === pillar.id ? 0 : -1"
                @click="active = pillar.id"
                @keydown="onKeydown($event, index)"
              >
                {{ pillar.label }}
              </button>
            </div>
            <div
              v-for="pillar in pillars"
              v-show="active === pillar.id"
              :id="`panel-${pillar.id}`"
              :key="pillar.id"
              role="tabpanel"
              :aria-labelledby="`tab-${pillar.id}`"
              class="inst-about__panel"
            >
              <p class="inst-about__panel-text">{{ pillar.text }}</p>
              <ul class="about-two__points">
                <li v-for="point in pillar.points" :key="point.text">
                  <span class="about-two__points-icon">
                    <span :class="point.icon" aria-hidden="true"></span>
                  </span>
                  {{ point.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
