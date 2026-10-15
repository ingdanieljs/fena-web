<script setup>
// Cinta continua de logos (federaciones, torneos). La lista se repite y la
// animación corre la mitad del ancho; solo la primera copia es accesible.
// tone "dark": franja azul marino (logos en blanco). "light": fondo blanco
// con los logos a color. repeat: copias por mitad para llenar el ancho
// cuando hay pocos logos.
const props = defineProps({
  id: { type: String, required: true },
  logos: { type: Array, required: true },
  tone: { type: String, default: "dark" },
  repeat: { type: Number, default: 1 },
});

const copies = computed(() => props.repeat * 2);
</script>

<template>
  <section :class="['home-partners', `home-partners--${tone}`]" :aria-labelledby="`${id}-title`">
    <div class="container">
      <div class="section-title text-center sec-title-animation animation-style1">
        <h2 :id="`${id}-title`" class="section-title__title title-animation">
          <slot name="title"></slot>
        </h2>
      </div>
      <div class="home-partners__marquee">
        <div class="home-partners__track">
          <ul
            v-for="copy in copies" :key="copy" class="home-partners__list"
            :aria-hidden="copy > 1 ? 'true' : undefined">
            <li v-for="logo in logos" :key="logo.name" class="home-partners__item">
              <img
                :src="logo.image" :alt="copy === 1 ? logo.name : ''" :width="logo.width"
                :height="logo.height" loading="lazy" class="home-partners__logo">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
