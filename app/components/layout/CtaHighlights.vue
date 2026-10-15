<script setup>
// Franja de 3 bloques (icono, título, texto) al final de las páginas interiores.
// Los textos por grupo de páginas están en constants/highlights.js.
defineProps({
  items: { type: Array, required: true },
  image: { type: String, default: "/assets/images/img_bank/img_1.webp" },
});
</script>

<template>
  <section class="cta-one">
    <div class="container">
      <div class="cta-one__inner">
        <div class="cta-one__bg" :style="{ backgroundImage: `url(${image})` }"></div>
        <ul class="cta-one__list">
          <li v-for="item in items" :key="item.title" class="cta-one__single">
            <div class="cta-one__icon">
              <span :class="item.icon" aria-hidden="true"></span>
            </div>
            <div class="cta-one__content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
