<script setup>
import news from "~/data/news.js";
</script>

<template>
  <section id="blog" class="home-news" aria-labelledby="home-news-title">
    <div class="container">
      <div class="section-title text-center sec-title-animation animation-style1">
        <h2 id="home-news-title" class="section-title__title title-animation">
          Últimas noticias y <br>novedades de <span>FENA</span>
        </h2>
      </div>
      <ul class="home-news__list">
        <li v-for="post in news" :key="post.slug">
          <NewsCard :post="post" />
        </li>
      </ul>
      <div class="home-news__more">
        <NuxtLink to="/noticias" class="thm-btn">Ver todas las noticias<span class="far fa-chevron-right"></span></NuxtLink>
      </div>
    </div>
  </section>
</template>
