<template>
  <section class="become-a-teacher">
      <div class="container">
          <div class="become-a-teacher__top">
              <div class="section-title text-center sec-title-animation animation-style1">
                  <h2 class="section-title__title title-animation">Sé parte de
                      <span>FENA</span></h2>
              </div>
              <div class="become-a-teacher__tab-box tabs-box">
                  <ul class="tab-buttons clearfix list-unstyled">
                      <li data-tab="#become-an-intructor" class="tab-btn active-btn"><span>Afiliación de
                              clubes.</span></li>
                      <li data-tab="#intructor-rules" class="tab-btn"><span>Requisitos y beneficios.</span></li>
                      <li data-tab="#start-courses" class="tab-btn"><span>Inscribe a tus deportistas.</span></li>
                  </ul>
                  <div class="tabs-content">
                      <!--tab-->
                      <div id="become-an-intructor" class="tab active-tab">
                          <div class="become-a-teacher__content">
                              <p>Forma parte del sistema deportivo de la natación ecuatoriana. Los clubes
                                  afiliados a FENA acceden al calendario oficial, a la representación nacional e
                                  internacional y al respaldo técnico de la Federación. Da el primer paso y suma
                                  a tu club al desarrollo de las disciplinas acuáticas del país.</p>
                          </div>
                      </div>
                      <!--tab-->
                      <!--tab-->
                      <div id="intructor-rules" class="tab">
                          <div class="become-a-teacher__content">
                              <p>Para afiliarte presenta los documentos del club, cumple con el reglamento de
                                  aprobación y mantén al día las licencias de tus deportistas. A cambio, accedes a
                                  eventos avalados, ranking nacional, capacitaciones para jueces y entrenadores y
                                  el acompañamiento permanente de FENA en cada temporada.</p>
                          </div>
                      </div>
                      <!--tab-->
                      <!--tab-->
                      <div id="start-courses" class="tab">
                          <div class="become-a-teacher__content">
                              <p>Una vez afiliado tu club, inscribe a tus deportistas y tramita sus licencias para
                                  competir en piscina, aguas abiertas, clavados, polo acuático y natación
                                  artística. Consulta requisitos, realiza el pago, sube los documentos y recibe la
                                  licencia oficial que habilita la participación en competencias.</p>
                          </div>
                      </div>
                      <!--tab-->
                  </div>
              </div>
          </div>
          <div class="become-a-teacher__bottom">
              <div class="row">
                  <div class="col-xl-4">
                      <div class="become-a-teacher__img-box">
                          <div class="become-a-teacher__img">
                              <img src="/assets/images/resources/become-a-teacher-img-1.jpg" alt="">
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-8">
                      <div class="become-a-teacher__right">
                          <div class="section-title text-left sec-title-animation animation-style2">
                              <h2 class="section-title__title title-animation">Formulario de afiliación</h2>
                          </div>
                          <form class="contact-form-validated contact-three__form" method="post" novalidate="novalidate" @submit.prevent>
                              <div class="row">
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <h3 class="contact-three__input-title">Nombre del club o deportista</h3>
                                      <div class="contact-three__input-box">
                                          <input type="text" name="name" placeholder="Club Acuático Ecuador" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <h4 class="contact-three__input-title">Correo electrónico *</h4>
                                      <div class="contact-three__input-box">
                                          <input
type="email" name="email" placeholder="club@correo.com"
                                              required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <h4 class="contact-three__input-title">Representante</h4>
                                      <div class="contact-three__input-box">
                                          <input type="text" name="Phone" placeholder="Nombre del representante" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <h4 class="contact-three__input-title">Teléfono</h4>
                                      <div class="contact-three__input-box">
                                          <input type="text" name="Phone" placeholder="Teléfono" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <h4 class="contact-three__input-title">Provincia</h4>
                                      <div class="contact-three__input-box">
                                          <input type="text" name="Phone" placeholder="Provincia" required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6 col-lg-6 col-md-6">
                                      <h4 class="contact-three__input-title">Disciplina principal</h4>
                                      <div class="contact-three__input-box">
                                          <input
type="text" name="Phone" placeholder="Natación, Aguas Abiertas..."
                                              required="">
                                      </div>
                                  </div>
                                  <div class="col-xl-12">
                                      <h4 class="contact-three__input-title">Mensaje</h4>
                                      <div class="contact-three__input-box text-message-box">
                                          <textarea name="message" placeholder="Cuéntanos sobre tu club o solicitud"></textarea>
                                      </div>
                                      <div class="contact-three__btn-box">
                                          <button type="submit" class="thm-btn">Enviar
                                              solicitud<span class="fas fa-arrow-right"></span></button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                          <div class="result"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
