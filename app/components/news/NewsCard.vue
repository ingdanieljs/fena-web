<script setup>
defineProps({
  post: { type: Object, required: true },
});
</script>

<template>
  <NuxtLink :to="`/noticias/${post.slug}`" class="news-card">
    <div class="news-card__media">
      <img
        :src="post.image" alt="" width="1024" height="683" loading="lazy" class="news-card__img"
        :style="post.position ? { objectPosition: post.position } : null">
      <p class="news-card__date">
        <span class="news-card__day">{{ post.day }}</span>
        <span class="news-card__month">{{ post.month }}</span>
      </p>
    </div>
    <div class="news-card__body">
      <p class="news-card__category">{{ post.category }}</p>
      <h3 class="news-card__title">{{ post.title }}</h3>
      <p class="news-card__text">{{ post.excerpt }}</p>
      <span class="news-card__more" aria-hidden="true">Leer más<span class="far fa-chevron-right"></span></span>
    </div>
  </NuxtLink>
</template>
