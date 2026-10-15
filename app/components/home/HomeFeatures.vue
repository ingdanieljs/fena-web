<script setup>
import { features } from "~/data/home.js";
</script>

<template>
  <section class="feature-two">
    <div class="container">
      <div class="feature-two__inner">
        <ul class="feature-two__list">
          <li v-for="feature in features" :key="feature.title">
            <div class="feature-two__single">
              <div class="feature-two__icon">
                <span :class="feature.icon"></span>
              </div>
              <div class="feature-two__content">
                <h3 class="feature-two__title">
                  <NuxtLink :to="feature.to">{{ feature.title }}</NuxtLink>
                </h3>
                <div class="feature-two__read-more">
                  <NuxtLink :to="feature.to">Leer más<span class="fas fa-arrow-right"></span></NuxtLink>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
