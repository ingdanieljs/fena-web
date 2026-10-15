<script setup>
defineProps({
  post: { type: Object, required: true },
});
</script>

<template>
  <div class="blog-two__single">
    <div class="blog-two__img-box">
      <div class="blog-two__img">
        <img :src="post.image" :alt="post.title">
      </div>
      <div class="blog-two__date">
        <p>{{ post.day }} <span>{{ post.month }}</span></p>
      </div>
    </div>
    <div class="blog-two__content">
      <ul class="blog-two__meta list-unstyled">
        <li>
          <NuxtLink :to="`/noticias/${post.slug}`"><span class="fas fa-user"></span>{{ post.author }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/noticias/${post.slug}`"><span class="fas fa-comments"></span>{{ post.category }}</NuxtLink>
        </li>
      </ul>
      <h3 class="blog-two__title">
        <NuxtLink :to="`/noticias/${post.slug}`">{{ post.title }}</NuxtLink>
      </h3>
      <p class="blog-two__text">{{ post.excerpt }}</p>
      <div class="blog-two__read-more-box">
        <NuxtLink :to="`/noticias/${post.slug}`" class="blog-two__read-more">
          Leer más <span class="fas fa-arrow-right"></span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
