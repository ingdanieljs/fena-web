<script setup>
import { stats } from "~/data/home.js";
</script>

<template>
  <section class="counter-one" aria-labelledby="home-counter-title">
    <h2 id="home-counter-title" class="visually-hidden">FENA en cifras</h2>
    <div
      class="counter-one__shape-bg"
      style="background-image: url(/assets/images/shapes/counter-one-shape-bg.png)"
    ></div>
    <div class="container">
      <ul class="home-stats">
        <li v-for="stat in stats" :key="stat.label" class="home-stats__item">
          <div class="home-stats__icon">
            <span :class="stat.icon" aria-hidden="true"></span>
          </div>
          <div>
            <p class="home-stats__value">
              <!-- odometer lo anima fena-template.js con data-count -->
              <span class="odometer" :data-count="stat.value">00</span>
              <span v-if="stat.suffix">{{ stat.suffix }}</span>
            </p>
            <p class="home-stats__label">{{ stat.label }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
