<script setup>
import news from "~/data/news.js";

const animations = ["fadeInLeft", "fadeInUp", "fadeInRight"];
</script>

<template>
  <section id="blog" class="blog-two">
    <div class="container">
      <div class="section-title text-center sec-title-animation animation-style1">
        <h2 class="section-title__title title-animation">
          Últimas noticias y <br>novedades de <span>FENA</span>
        </h2>
      </div>
      <div class="row">
        <div
          v-for="(post, index) in news"
          :key="post.slug"
          :class="['col-xl-4', 'col-lg-6', 'wow', animations[index % 3]]"
          :data-wow-delay="`${(index + 1) * 100}ms`"
        >
          <NewsCard :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>
