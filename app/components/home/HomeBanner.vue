<template>
  <section id="home" class="main-slider-two video-banner" aria-label="Federación Ecuatoriana de Natación">
      <div class="video-banner__media" aria-hidden="true">
          <video autoplay muted loop playsinline poster="/assets/images/backgrounds/slider-2-1.jpg">
              <source src="/assets/videos/banner.webm" type="video/webm">
          </video>
      </div>
      <div class="video-banner__overlay"></div>
      <div class="container video-banner__content">
          <div class="main-slider-two__content">
              <div class="main-slider-two__sub-title-box">
                  <div class="main-slider-two__sub-title-shape"></div>
                  <p class="main-slider-two__sub-title">Organismo rector de la natación</p>
                  <div class="main-slider-two__sub-title-shape"></div>
              </div>
              <h1 class="main-slider-two__title">Impulsamos el desarrollo de la<br>
                  natación y las <span>disciplinas acuáticas</span>
              </h1>
              <p class="main-slider-two__text">Organizamos, regulamos y promovemos la natación,
                  aguas abiertas, clavados, polo acuático, natación artística y masters,
                  fortaleciendo la formación deportiva en todo el país.</p>
              <div class="main-slider-two__btn-box">
                  <NuxtLink to="/modalidades" class="thm-btn">Ver calendario
                      <span class="far fa-chevron-right"></span>
                  </NuxtLink>
              </div>
          </div>
      </div>
  </section>
</template>
