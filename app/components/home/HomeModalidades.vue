<template>
  <section id="departments" class="department-one">
      <div
class="department-one__bg-shape"
          style="background-image: url(/assets/images/shapes/department-one-bg-shape.png);"></div>
      <div class="container">
          <div class="section-title text-center sec-title-animation animation-style1">
              <h2 class="section-title__title title-animation">Conoce nuestras<br> <span>modalidades</span>
              </h2>
          </div>
          <div class="row">
              <div class="col-xl-9">
                  <div class="department-one__left">
                      <div class="row">
                          <!--Department One Single Start -->
                          <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                              <div class="department-one__single">
                                  <div class="department-one__icon-and-title">
                                      <div class="department-one__icon">
                                          <span class="icon-computer-science"></span>
                                      </div>
                                      <h3 class="department-one__title"><NuxtLink to="/modalidades">Natación</NuxtLink>
                                      </h3>
                                  </div>
                                  <p class="department-one__text">Eventos de piscina, nacionales, avalados,
                                      rankings y récords.
                                  </p>
                              </div>
                          </div>
                          <!--Department One Single End -->
                          <!--Department One Single Start -->
                          <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                              <div class="department-one__single">
                                  <div class="department-one__icon-and-title">
                                      <div class="department-one__icon">
                                          <span class="icon-physiotherapy"></span>
                                      </div>
                                      <h3 class="department-one__title"><NuxtLink to="/modalidades">Aguas Abiertas</NuxtLink>
                                      </h3>
                                  </div>
                                  <p class="department-one__text">Competencias en aguas naturales: 3, 5, 7.5 y
                                      10 km
                                      y
                                      relevos.</p>
                              </div>
                          </div>
                          <!--Department One Single End -->
                          <!--Department One Single Start -->
                          <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                              <div class="department-one__single">
                                  <div class="department-one__icon-and-title">
                                      <div class="department-one__icon">
                                          <span class="icon-design-thinking"></span>
                                      </div>
                                      <h3 class="department-one__title"><NuxtLink to="/modalidades">Clavados</NuxtLink></h3>
                                  </div>
                                  <p class="department-one__text">Selectivos, marcas base, chequeos técnicos y
                                      campeonatos
                                      nacionales.</p>
                              </div>
                          </div>
                          <!--Department One Single End -->
                          <!--Department One Single Start -->
                          <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                              <div class="department-one__single">
                                  <div class="department-one__icon-and-title">
                                      <div class="department-one__icon">
                                          <span class="icon-medicine"></span>
                                      </div>
                                      <h3 class="department-one__title"><NuxtLink to="/modalidades">Polo Acuático</NuxtLink>
                                      </h3>
                                  </div>
                                  <p class="department-one__text">Selectivos, campeonatos nacionales y
                                      documentos
                                      técnicos.</p>
                              </div>
                          </div>
                          <!--Department One Single End -->
                          <!--Department One Single Start -->
                          <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                              <div class="department-one__single">
                                  <div class="department-one__icon-and-title">
                                      <div class="department-one__icon">
                                          <span class="icon-paint"></span>
                                      </div>
                                      <h3 class="department-one__title"><NuxtLink to="/modalidades">Natación
                                              Artística</NuxtLink>
                                      </h3>
                                  </div>
                                  <p class="department-one__text">Convocatorias, eventos, resultados y
                                      documentos
                                      técnicos.</p>
                              </div>
                          </div>
                          <!--Department One Single End -->
                          <!--Department One Single Start -->
                          <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                              <div class="department-one__single">
                                  <div class="department-one__icon-and-title">
                                      <div class="department-one__icon">
                                          <span class="icon-graduate-hat"></span>
                                      </div>
                                      <h3 class="department-one__title"><NuxtLink to="/modalidades">Masters</NuxtLink>
                                      </h3>
                                  </div>
                                  <p class="department-one__text">Competencias, reglas y récords máster 25m, 50m
                                      y relevos.</p>
                              </div>
                          </div>
                          <!--Department One Single End -->
                      </div>
                  </div>
              </div>
              <div class="col-xl-3 wow fadeInRight" data-wow-delay="300ms">
                  <div class="department-one__right">
                      <div class="department-one__form-inner-wrap">
                          <form class="contact-form-validated department-one__form" method="post" novalidate="novalidate" @submit.prevent>
                              <div class="row">
                                  <div class="col-xl-12">
                                      <div class="department-one__input-box">
                                          <input
type="text" name="name" placeholder="Nombre completo"
                                              required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-12">
                                      <div class="department-one__input-box">
                                          <input
type="text" name="email" placeholder="Correo electrónico"
                                              required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-12">
                                      <div class="department-one__input-box">
                                          <input type="text" name="Phone" placeholder="Teléfono" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-12">
                                      <div class="department-one__input-box">
                                          <div class="select-box">
                                              <select class="selectmenu wide">
                                                  <option selected="selected">Selecciona una modalidad</option>
                                                  <option>Natación</option>
                                                  <option>Aguas Abiertas</option>
                                                  <option>Clavados</option>
                                                  <option>Polo Acuático</option>
                                                  <option>Natación Artística</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-xl-12">
                                      <div class="department-one__input-box text-message-box">
                                          <textarea name="message" placeholder="Escribe tu consulta"></textarea>
                                      </div>
                                      <div class="department-one__btn-box">
                                          <button type="submit" class="thm-btn">Buscar eventos<span
                                                  class="fas fa-arrow-right"></span></button>
                                      </div>
                                  </div>
                              </div>
                              <div class="result"></div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
