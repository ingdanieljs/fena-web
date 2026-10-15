<template>
  <section class="admission-one">
      <div
class="admission-one__bg"
          style="background-image: url(/assets/images/backgrounds/admission-one-bg.jpg);"></div>
      <div class="container">
          <div class="row">
              <div class="col-xl-6 col-lg-7 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                  <div class="admission-one__left">
                      <div class="admission-one__form-inner">
                          <form class="contact-form-validated admission-one__form" method="post" novalidate="novalidate" @submit.prevent>
                              <div class="row">
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="admission-one__input-box">
                                          <input type="text" name="name" placeholder="Nombres" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="admission-one__input-box">
                                          <input type="text" name="name" placeholder="Apellidos" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="admission-one__input-box">
                                          <input
type="text" name="email" placeholder="Correo electrónico"
                                              required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="admission-one__input-box">
                                          <input type="text" name="Phone" placeholder="Teléfono" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="admission-one__input-box">
                                          <input id="datepicker" type="text" placeholder="Fecha" name="date">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="admission-one__input-box">
                                          <input type="text" name="name" placeholder="Ciudad" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="admission-one__input-box">
                                          <input type="text" name="name" placeholder="País" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="admission-one__input-box">
                                          <input type="text" name="name" placeholder="Provincia" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-12">
                                      <div class="admission-one__input-box">
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
                                      <div class="admission-one__input-box text-message-box">
                                          <textarea name="message" placeholder="Escribe tu mensaje"></textarea>
                                      </div>
                                      <div class="admission-one__btn-box">
                                          <button type="submit" class="thm-btn">Enviar solicitud<span
                                                  class="far fa-chevron-right"></span></button>
                                      </div>
                                  </div>
                              </div>
                              <div class="result"></div>
                          </form>
                      </div>
                  </div>
              </div>
              <div class="col-xl-6 col-lg-5">
                  <div class="admission-one__right">
                      <h2 class="admission-one__big-title">Afíliate a FENA</h2>
                      <p class="admission-one__text">Sé parte de la natación organizada del Ecuador.<br> Completa
                          tus datos para iniciar.</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
