<script setup>
import { features } from "~/data/home.js";
</script>

<template>
  <section class="home-access" aria-label="Accesos rápidos">
    <div class="container">
      <ul class="home-access__list">
        <li v-for="feature in features" :key="feature.title">
          <NuxtLink :to="feature.to" class="home-access__card">
            <img :src="feature.image" alt="" width="540" height="720" class="home-access__img">
            <div class="home-access__content">
              <h3 class="home-access__title">{{ feature.title }}</h3>
              <span class="home-access__more" aria-hidden="true">Leer más<span class="far fa-chevron-right"></span></span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
