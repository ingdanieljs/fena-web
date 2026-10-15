<script setup>
// Grilla de personas (Directiva, Equipo FENA, Atletas): foto de cuerpo
// completo con el degradado azul marino de la home, rol en amarillo y nombre
// en blanco. people: [{ name, role, image?, to? }]. Sin image se muestra un
// marcador azul; con to, toda la tarjeta enlaza (ej. al perfil del atleta).
defineProps({
  id: { type: String, required: true },
  people: { type: Array, required: true },
  // tone "light": fondo #F8F4F2 para alternar con la sección vecina.
  tone: { type: String, default: "white" },
});

const NuxtLink = resolveComponent("NuxtLink");
</script>

<template>
  <section :class="['inst-team', { 'inst-team--light': tone === 'light' }]" :aria-labelledby="`${id}-title`">
    <div class="container">
      <div class="section-title text-center sec-title-animation animation-style1">
        <h2 :id="`${id}-title`" class="section-title__title title-animation">
          <slot name="title"></slot>
        </h2>
      </div>
      <ul class="inst-team__list">
        <li v-for="person in people" :key="person.name + person.role">
          <component :is="person.to ? NuxtLink : 'div'" :to="person.to" class="inst-team__card">
            <img v-if="person.image" :src="person.image" alt="" width="683" height="1024" loading="lazy" class="inst-team__img">
            <span v-else class="inst-team__placeholder" aria-hidden="true">
              <span class="fas fa-user"></span>
            </span>
            <div class="inst-team__content">
              <p class="inst-team__role">{{ person.role }}</p>
              <h3 class="inst-team__name">{{ person.name }}</h3>
              <span v-if="person.to" class="inst-team__more" aria-hidden="true">Ver perfil<span class="far fa-chevron-right"></span></span>
            </div>
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>
