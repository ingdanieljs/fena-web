<script setup>
import events from "~/data/events.js";

// El evento en vivo ocupa la tarjeta grande; si no hay ninguno, el primero.
const ordered = computed(() => {
  const live = events.find((event) => event.live);
  return live ? [live, ...events.filter((event) => event !== live)] : events;
});

// Directo de YouTube en la tarjeta grande (solo si el evento tiene stream).
const streamEvent = computed(() => (ordered.value[0].stream ? ordered.value[0] : null));
const playerBox = ref(null);
const { muted, paused, toggleSound, togglePlay } = useYouTubePlayer(playerBox, {
  videoId: () => streamEvent.value?.stream,
  title: () => `Transmisión en vivo: ${streamEvent.value?.title}`,
});
</script>

<template>
  <section id="event" class="home-events" aria-labelledby="home-events-title">
    <div class="container">
      <h2 id="home-events-title" class="visually-hidden">Próximos eventos</h2>
      <ul class="home-events__grid">
        <li
          v-for="(event, index) in ordered"
          :key="event.slug"
          :class="{ 'home-events__stream-item': index === 0 && event.stream }"
        >
          <!-- Directo: el reproductor no puede ir dentro de un link, así que
               el link queda en la franja de información de abajo. -->
          <div v-if="index === 0 && event.stream" class="home-events__card home-events__card--stream">
            <div class="home-events__player">
              <div ref="playerBox" class="home-events__player-frame"></div>
              <div class="home-events__player-controls">
                <button
                  type="button"
                  class="home-events__player-btn"
                  :aria-label="paused ? 'Reanudar transmisión' : 'Pausar transmisión'"
                  @click="togglePlay"
                >
                  <span :class="['fas', paused ? 'fa-play' : 'fa-pause']" aria-hidden="true"></span>
                </button>
                <button
                  type="button"
                  class="home-events__player-btn"
                  :aria-label="muted ? 'Activar sonido' : 'Silenciar'"
                  @click="toggleSound"
                >
                  <span :class="['fas', muted ? 'fa-volume-mute' : 'fa-volume-up']" aria-hidden="true"></span>
                </button>
              </div>
            </div>
            <NuxtLink :to="`/eventos/${event.slug}`" class="home-events__stream-info">
              <span class="home-events__live">En vivo</span>
              <h3 class="home-events__title">{{ event.title }}</h3>
              <p class="home-events__summary">{{ event.summary }}</p>
            </NuxtLink>
          </div>

          <NuxtLink v-else :to="`/eventos/${event.slug}`" class="home-events__card">
            <img :src="event.image" alt="" width="1024" height="683" loading="lazy" class="home-events__img">
            <p class="home-events__date">
              <span class="home-events__day">{{ event.day }}</span>
              <span class="home-events__month">{{ event.month }}</span>
            </p>
            <span v-if="event.live" class="home-events__live home-events__live--corner">En vivo</span>
            <div class="home-events__content">
              <h3 class="home-events__title">{{ event.title }}</h3>
              <p class="home-events__summary">{{ event.summary }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <div class="home-events__more">
        <NuxtLink to="/eventos" class="thm-btn">Ver todos los eventos<span class="far fa-chevron-right"></span></NuxtLink>
      </div>
    </div>
  </section>
</template>
