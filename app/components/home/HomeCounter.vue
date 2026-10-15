<script setup>
import { stats } from "~/data/home.js";
</script>

<template>
  <section class="counter-one">
    <div
      class="counter-one__shape-bg"
      style="background-image: url(/assets/images/shapes/counter-one-shape-bg.png)"
    ></div>
    <div class="container">
      <div class="counter-one__inner">
        <div class="counter-one__title-box">
          <h2 class="counter-one__title">FENA en cifras</h2>
        </div>
        <ul class="row">
          <li v-for="stat in stats" :key="stat.label" class="col-xl-3 col-lg-6 col-md-6">
            <div class="counter-one__single">
              <div class="counter-one__icon">
                <span :class="stat.icon"></span>
              </div>
              <div class="counter-one__content">
                <div class="counter-one__count">
                  <!-- odometer lo anima fena-template.js con data-count -->
                  <h3 class="odometer" :data-count="stat.value">00</h3>
                  <span v-if="stat.suffix">{{ stat.suffix }}</span>
                </div>
                <p class="counter-one__text">{{ stat.label }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
