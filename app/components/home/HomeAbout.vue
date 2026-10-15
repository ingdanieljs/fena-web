<script setup>
const points = [
  { icon: "fas fa-award", text: "Eventos avalados y reconocidos" },
  { icon: "fas fa-user-check", text: "Jueces y entrenadores certificados" },
  { icon: "fas fa-chart-line", text: "Desarrollo técnico y alto rendimiento" },
  { icon: "fas fa-seedling", text: "Formación de futuras promesas" },
];
</script>

<template>
  <section id="about" class="about-two">
      <div class="container">
          <div class="row">
              <div class="col-xl-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                  <div class="about-two__left">
                      <div class="about-two__img-box">
                          <div class="about-two__img">
                              <img src="/assets/images/img_bank/santiago.webp" alt="" width="768" height="1024">
                              <div class="about-two__video-link">
                                  <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" class="video-popup" aria-label="Ver video de la federación">
                                      <div class="about-two__video-icon">
                                          <span class="fas fa-play" aria-hidden="true"></span>
                                          <i class="ripple"></i>
                                      </div>
                                  </a>
                              </div>
                              <div class="about-two__award-box">
                                  <div class="about-two__award-icon">
                                      <span class="fas fa-stopwatch" aria-hidden="true"></span>
                                  </div>
                                  <div class="about-two__award-content">
                                      <div class="about-two__award-count">
                                          <h3 class="odometer" data-count="45">00</h3>
                                          <span>+</span>
                                      </div>
                                      <p class="about-two__award-text">Récords nacionales</p>
                                  </div>
                              </div>
                              <div class="about-two__happy-student">
                                  <div class="about-two__happy-student-count">
                                      <h3 class="odometer" data-count="45">00</h3>
                                      <span>K</span>
                                      <span>+</span>
                                  </div>
                                  <p class="about-two__happy-student-text">Deportistas en todo el país</p>
                              </div>
                          </div>
                          <div class="about-two__img-2">
                              <img src="/assets/images/img_bank/img_8.webp" alt="" width="1024" height="683">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-6">
                  <div class="about-two__right">
                      <div class="section-title text-left sec-title-animation animation-style2">
                          <h2 class="section-title__title title-animation">Comprometidos con el desarrollo y la
                              <span>excelencia deportiva</span>
                          </h2>
                      </div>
                      <p class="about-two__text">FENA es el organismo rector de la natación en Ecuador. Planifica,
                          dirige, regula y promueve el desarrollo de las disciplinas acuáticas, impulsando la
                          formación deportiva, la competencia nacional e internacional y la representación
                          del Ecuador en todo el mundo.</p>
                      <h3 class="about-two__btg-text">Un compromiso con la excelencia en el deporte
                          acuático</h3>
                      <ul class="about-two__points">
                          <li v-for="point in points" :key="point.text">
                              <span class="about-two__points-icon">
                                  <span :class="point.icon" aria-hidden="true"></span>
                              </span>
                              {{ point.text }}
                          </li>
                      </ul>
                      <div class="about-two__btn-box">
                          <NuxtLink to="/institucion" class="thm-btn">Conoce la federación<span
                                  class="far fa-chevron-right"></span></NuxtLink>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
