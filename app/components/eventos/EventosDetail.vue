<script setup>
import infoContact from "~/constants/infoContact.js";

// Detalle de un evento (data/events.js). Con stream, arriba va el directo con
// los controles propios de la home; sin stream, la foto.
const props = defineProps({
  event: { type: Object, required: true },
});

const detail = computed(() => props.event.detail ?? {});
const mapSrc = computed(() =>
  `https://www.google.com/maps?q=${encodeURIComponent(detail.value.mapQuery ?? `${props.event.city}, Ecuador`)}&output=embed`);

const info = computed(() => [
  detail.value.fee && { icon: "fas fa-ticket-alt", label: "Inscripción", value: detail.value.fee },
  { icon: "fas fa-calendar-alt", label: "Fecha", value: props.event.date },
  { icon: "fas fa-map-marker-alt", label: "Sede", value: `${props.event.city}, Ecuador` },
  { icon: "fas fa-flag", label: "Categoría", value: `${props.event.discipline} · ${props.event.category}` },
].filter(Boolean));

const playerBox = ref(null);
const { muted, paused, toggleSound, togglePlay } = useYouTubePlayer(playerBox, {
  videoId: () => props.event.stream,
  title: () => `Transmisión en vivo: ${props.event.title}`,
});
</script>

<template>
  <section class="event-detail">
    <div class="container">
      <div :class="['event-detail__media', { 'event-detail__media--stream': event.stream }]">
        <div v-if="event.stream" class="home-events__player event-detail__player">
          <div ref="playerBox" class="home-events__player-frame"></div>
          <div class="home-events__player-controls">
            <button
              type="button" class="home-events__player-btn"
              :aria-label="paused ? 'Reanudar transmisión' : 'Pausar transmisión'" @click="togglePlay">
              <span :class="['fas', paused ? 'fa-play' : 'fa-pause']" aria-hidden="true"></span>
            </button>
            <button
              type="button" class="home-events__player-btn"
              :aria-label="muted ? 'Activar sonido' : 'Silenciar'" @click="toggleSound">
              <span :class="['fas', muted ? 'fa-volume-mute' : 'fa-volume-up']" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        <img
          v-else :src="event.image" alt="" width="1024" height="683" class="event-detail__img"
          :style="event.position ? { objectPosition: event.position } : null">
        <p class="news-card__date event-detail__date">
          <span class="news-card__day">{{ event.day }}</span>
          <span class="news-card__month">{{ event.month }}</span>
        </p>
        <span v-if="event.live" class="home-events__live home-events__live--corner">En vivo</span>
      </div>

      <div class="row">
        <div class="col-xl-8 col-lg-7">
          <p class="news-card__category">{{ event.discipline }} · {{ event.category }}</p>
          <h2 class="event-detail__title">{{ event.title }}</h2>
          <p v-if="detail.description" class="event-detail__text">{{ detail.description }}</p>
          <ul v-if="detail.points" class="event-detail__points">
            <li v-for="point in detail.points" :key="point.title">
              <span class="about-two__points-icon">
                <span :class="point.icon" aria-hidden="true"></span>
              </span>
              <div>
                <h3 class="event-detail__point-title">{{ point.title }}</h3>
                <p class="event-detail__point-text">{{ point.text }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-xl-4 col-lg-5">
          <aside class="faq-hub__help event-detail__info">
            <h3 class="faq-hub__help-title">Información del evento</h3>
            <ul class="event-detail__info-list">
              <li v-for="item in info" :key="item.label">
                <span class="event-detail__info-icon"><span :class="item.icon" aria-hidden="true"></span></span>
                <div>
                  <p class="event-detail__info-label">{{ item.label }}</p>
                  <p class="event-detail__info-value">{{ item.value }}</p>
                </div>
              </li>
            </ul>
            <NuxtLink to="/contacto" class="thm-btn">Inscribirme<span class="far fa-chevron-right"></span></NuxtLink>
          </aside>
        </div>
      </div>
    </div>
  </section>

  <section class="event-location" aria-labelledby="event-location-title">
    <div class="container">
      <h2 id="event-location-title" class="event-location__title">Ubicación del evento</h2>
      <div class="row">
        <div class="col-xl-8 col-lg-7">
          <iframe
            :src="mapSrc" class="event-location__map" :title="`Mapa de ${event.city}`" loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="event-location__venue">
            <h3 class="event-location__venue-title">Sede del evento</h3>
            <ul class="event-location__list">
              <li><span>Ciudad</span><strong>{{ event.city }}, Ecuador</strong></li>
              <li v-if="detail.venue"><span>Ubicación</span><strong>{{ detail.venue }}</strong></li>
              <li><span>Teléfono</span><a :href="infoContact.phone.url">{{ infoContact.phone.label }}</a></li>
              <li><span>Correo</span><a :href="infoContact.email.url">{{ infoContact.email.label }}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
