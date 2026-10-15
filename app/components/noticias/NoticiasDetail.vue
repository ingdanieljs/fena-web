<script setup>
import news from "~/data/news.js";

// Detalle de una noticia (data/news.js). Lateral: categorías y noticias recientes.
const props = defineProps({
  post: { type: Object, required: true },
});

const categories = [...new Set(news.map((item) => item.category))];
const recent = computed(() => news.filter((item) => item.slug !== props.post.slug).slice(0, 3));

// Compartir: enlaces reales de cada red con la URL de la noticia.
const url = useRequestURL();
const share = computed(() => {
  const link = encodeURIComponent(`${url.origin}/noticias/${props.post.slug}`);
  const text = encodeURIComponent(props.post.title);
  return [
    { name: "Facebook", icon: "fab fa-facebook-f", href: `https://www.facebook.com/sharer/sharer.php?u=${link}` },
    { name: "X", icon: "fab fa-x-twitter", href: `https://x.com/intent/post?url=${link}&text=${text}` },
    { name: "WhatsApp", icon: "fab fa-whatsapp", href: `https://wa.me/?text=${text}%20${link}` },
  ];
});
</script>

<template>
  <section class="news-detail">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-7">
          <article>
            <div class="event-detail__media news-detail__media">
              <img
                :src="post.image" alt="" width="1024" height="683" class="event-detail__img"
                :style="post.position ? { objectPosition: post.position } : null">
              <p class="news-card__date">
                <span class="news-card__day">{{ post.day }}</span>
                <span class="news-card__month">{{ post.month }}</span>
              </p>
            </div>
            <p class="news-card__category">{{ post.category }}</p>
            <h2 class="event-detail__title">{{ post.title }}</h2>
            <ul class="news-detail__meta">
              <li><span class="fas fa-user" aria-hidden="true"></span>{{ post.author }}</li>
              <li><span class="fas fa-calendar-alt" aria-hidden="true"></span>{{ post.date }}</li>
              <li><span class="fas fa-clock" aria-hidden="true"></span>{{ post.readTime }}</li>
            </ul>

            <div class="news-detail__body">
              <template v-for="(block, index) in post.body" :key="index">
                <p v-if="block.type === 'p'">{{ block.text }}</p>
                <h3 v-else-if="block.type === 'h'" class="news-detail__subtitle">{{ block.text }}</h3>
                <blockquote v-else-if="block.type === 'quote'" class="news-detail__quote">
                  <p>“{{ block.text }}”</p>
                  <footer><strong>{{ block.author }}</strong> · {{ block.role }}</footer>
                </blockquote>
                <div v-else-if="block.type === 'images'" class="news-detail__images">
                  <img
                    v-for="image in block.images" :key="image" :src="image" alt="" width="1024" height="683"
                    loading="lazy">
                </div>
                <ul v-else-if="block.type === 'points'" class="about-two__points news-detail__points">
                  <li v-for="item in block.items" :key="item.text">
                    <span class="about-two__points-icon"><span :class="item.icon" aria-hidden="true"></span></span>
                    {{ item.text }}
                  </li>
                </ul>
              </template>
            </div>

            <div class="news-detail__share">
              <p class="news-detail__share-title">Compartir</p>
              <a
                v-for="item in share" :key="item.name" :href="item.href" target="_blank" rel="noopener"
                :aria-label="`Compartir en ${item.name}`">
                <span :class="item.icon" aria-hidden="true"></span>
              </a>
            </div>
          </article>
        </div>

        <div class="col-xl-4 col-lg-5">
          <aside class="news-detail__aside">
            <div class="news-detail__widget">
              <h3 class="news-detail__widget-title">Categorías</h3>
              <ul class="news-detail__categories">
                <li v-for="category in categories" :key="category">
                  <NuxtLink
                    :to="{ path: '/noticias', query: { categoria: category } }"
                    :class="{ 'is-active': category === post.category }">
                    {{ category }}<span class="far fa-chevron-right" aria-hidden="true"></span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="news-detail__widget">
              <h3 class="news-detail__widget-title">Noticias recientes</h3>
              <ul class="news-detail__recent">
                <li v-for="item in recent" :key="item.slug">
                  <NuxtLink :to="`/noticias/${item.slug}`">
                    <img
                      :src="item.image" alt="" width="1024" height="683" loading="lazy"
                      :style="item.position ? { objectPosition: item.position } : null">
                    <span>
                      <span class="news-detail__recent-date">{{ item.date }}</span>
                      <span class="news-detail__recent-title">{{ item.title }}</span>
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>
