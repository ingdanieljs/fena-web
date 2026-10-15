<template>
  <section class="contact-page">
      <div class="container">
          <div class="contact-page__inner">
              <div class="row">
                  <div class="col-xl-6">
                      <div class="contact-page__left">
                          <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                              class="google-map__one" allowfullscreen></iframe>
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
