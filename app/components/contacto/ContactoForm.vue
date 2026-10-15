<template>
  <section class="contact-page">
      <div class="container">
          <div class="contact-page__inner">
              <div class="row">
                  <div class="col-xl-6">
                      <div class="contact-page__left">
                          <!-- Edificio de Federaciones, junto al Comité Olímpico Ecuatoriano (Guayaquil) -->
                          <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.9365142953548!2d-79.89489122376705!3d-2.1778079978028675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6dc36dc0afd1%3A0x97a0a8bbad634b36!2sComit%C3%A9%20Ol%C3%ADmpico%20Ecuatoriano!5e0!3m2!1ses!2sec!4v1792099209100!5m2!1ses!2sec"
                              class="google-map__one" title="Ubicación de FENA en Google Maps" allowfullscreen
                              loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                      </div>
                  </div>
                  <div class="col-xl-6">
                      <div class="contact-page__right">
                          <h3 class="contact-page__form-title">Envíanos un mensaje</h3>
                          <form id="contact-form" class="contact-form-validated contact-page__form" method="POST" @submit.prevent>
                              <div class="row">
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="contact-page__input-box">
                                          <input type="text" name="name" placeholder="Tu nombre" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="contact-page__input-box">
                                          <input type="email" name="email" placeholder="Tu correo" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="contact-page__input-box">
                                          <input type="text" placeholder="Teléfono" name="number">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <div class="contact-page__input-box">
                                          <input type="text" placeholder="Asunto" name="company">
                                      </div>
                                  </div>
                                  <div class="col-xl-12">
                                      <div class="contact-page__input-box text-message-box">
                                          <textarea name="message" placeholder="Mensaje"></textarea>
                                      </div>
                                      <div class="contact-page__btn-box">
                                          <button
type="submit" class="thm-btn contact-page__btn"
                                              data-loading-text="Espere por favor...">
                                              Enviar mensaje
                                              <span class="far fa-chevron-right"></span>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                          <p class="ajax-response mb-0"></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
