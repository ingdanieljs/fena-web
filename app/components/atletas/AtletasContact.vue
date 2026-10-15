<template>
  <section class="team-details-contact">
    <div class="container">
      <div
        class="section-title text-center sec-title-animation animation-style1"
      >
        <h2 class="section-title__title title-animation">
          Escríbenos un mensaje
        </h2>
      </div>
      <div class="team-details-contact__inner">
        <form
          class="contact-form-validated team-details-contact__form"
          method="post"
          novalidate="novalidate"
          @submit.prevent
        >
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="team-details-contact__input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required=""
                />
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="team-details-contact__input-box">
                <input
                  type="email"
                  name="Email"
                  placeholder="Correo electrónico"
                  required=""
                />
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="team-details-contact__input-box">
                <input
                  type="text"
                  name="Phone"
                  placeholder="Teléfono"
                  required=""
                />
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="team-details-contact__input-box">
                <div class="select-box">
                  <select class="selectmenu wide">
                    <option selected="selected">Tipo de consulta</option>
                    <option>Selección Nacional</option>
                    <option>Aguas Abiertas</option>
                    <option>Apoyo al deportista</option>
                    <option>Prensa y medios</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-xl-12">
              <div class="team-details-contact__input-box text-message-box">
                <textarea name="message" placeholder="Mensaje"></textarea>
              </div>
              <div class="team-details-contact__btn-box">
                <button type="submit" class="thm-btn">
                  enviar mensaje<span class="far fa-chevron-right"></span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div class="result"></div>
      </div>
    </div>
  </section>
</template>
