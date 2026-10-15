<script setup>
import { partners } from "~/data/home.js";
</script>

<template>
  <section class="home-partners" aria-labelledby="home-partners-title">
    <div class="container">
      <div class="section-title text-center sec-title-animation animation-style1">
        <h2 id="home-partners-title" class="section-title__title title-animation">Federaciones y organismos<br> amigos del
          <span>deporte</span>.
        </h2>
      </div>
      <!-- Cinta continua: la lista va dos veces y la animación corre la mitad
           del ancho; la copia queda oculta para lectores de pantalla. -->
      <div class="home-partners__marquee">
        <div class="home-partners__track">
          <ul v-for="copy in 2" :key="copy" class="home-partners__list" :aria-hidden="copy === 2 ? 'true' : undefined">
            <li v-for="partner in partners" :key="partner.name" class="home-partners__item">
              <img
                :src="partner.image" :alt="copy === 1 ? partner.name : ''" :width="partner.width"
                :height="partner.height" loading="lazy" class="home-partners__logo">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
