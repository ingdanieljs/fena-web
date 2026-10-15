<script setup>
import events from "~/data/events.js";

const active = ref(0);
</script>

<template>
  <section id="event" class="event-one">
    <div class="event-one__bg-color"></div>
    <div class="container">
      <div class="section-title text-center sec-title-animation animation-style1">
        <h2 class="section-title__title title-animation">Conoce nuestros próximos <span>eventos</span></h2>
      </div>
      <div class="event-one__inner">
        <div class="event-one__main-tab-box">
          <div class="row">
            <div class="col-xl-4 col-lg-5">
              <div class="event-one__tab-buttons-box-one">
                <ul class="tab-buttons list-unstyled">
                  <li
                    v-for="(event, index) in events"
                    :key="event.slug"
                    :class="['tab-btn', { 'active-btn': active === index }]"
                    @click="active = index"
                  >
                    <div class="event-one__buttons">
                      <div class="event-one__buttons-img">
                        <img :src="event.thumb" :alt="event.title">
                      </div>
                      <div class="event-one__buttons-content">
                        <h3 class="event-one__buttons-title">{{ event.title }}</h3>
                        <p class="event-one__buttons-time">{{ event.summary }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="event-one__btn-box">
                <NuxtLink to="/eventos" class="thm-btn">Ver todo<span class="fas fa-arrow-right"></span></NuxtLink>
              </div>
            </div>
            <div class="col-xl-8 col-lg-7">
              <div class="event-one__tabs-content-outer">
                <div class="tabs-content">
                  <div
                    v-for="(event, index) in events"
                    :key="event.slug"
                    :class="['tab', { 'active-tab': active === index }]"
                  >
                    <div class="event-one__tabs-content-box">
                      <div class="event-one__img-box">
                        <div class="event-one__img">
                          <img :src="event.image" :alt="event.title">
                        </div>
                        <div class="event-one__date">
                          <p>{{ event.day }}<span>{{ event.month }}</span></p>
                        </div>
                        <div class="event-one__post">
                          <p>Organiza <span>FENA</span></p>
                          <span>Evento oficial</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
