<script setup>
import { modalidades } from "~/data/home.js";
</script>

<template>
  <section id="departments" class="home-modalidades" aria-labelledby="home-modalidades-title">
    <div class="container">
      <div class="section-title text-center sec-title-animation animation-style1">
        <h2 id="home-modalidades-title" class="section-title__title title-animation">Conoce nuestras<br> <span>modalidades</span>
        </h2>
      </div>
      <ul class="home-modalidades__list">
        <li v-for="modalidad in modalidades" :key="modalidad.title">
          <NuxtLink :to="modalidad.to" class="home-modalidades__card">
            <div class="home-modalidades__media">
              <img :src="modalidad.image" alt="" width="1024" height="683" loading="lazy" class="home-modalidades__img">
            </div>
            <div class="home-modalidades__body">
              <span class="home-modalidades__icon">
                <span :class="modalidad.icon" aria-hidden="true"></span>
              </span>
              <h3 class="home-modalidades__title">{{ modalidad.title }}</h3>
              <p class="home-modalidades__text">{{ modalidad.text }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
