<script setup>
// Franja de 3 bloques (icono, título, texto) al final de las páginas interiores.
// Los textos por grupo de páginas están en constants/highlights.js.
defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <section class="cta-one">
    <div class="container">
      <div class="cta-one__inner">
        <div class="cta-one__bg" style="background-image: url(/assets/images/backgrounds/cta-one-bg.jpg)"></div>
        <div class="row">
          <div v-for="item in items" :key="item.title" class="col-xl-4 col-lg-4">
            <div class="cta-one__single">
              <div class="cta-one__icon">
                <span :class="item.icon"></span>
              </div>
              <div class="cta-one__content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
