<template>
  <section class="dn-section dn-section--alt">
      <div class="container">
          <div class="section-title text-center">
              <h2 class="section-title__title">El proceso, <span>paso a paso</span></h2>
          </div>
          <div class="dn-steps">
              <div class="dn-steps__item">
                  <h4>Ingresas tu denuncia</h4>
                  <p>Completas el formulario en línea. Solo el correo y el relato son obligatorios.</p>
                  <span class="dn-steps__time">Recibes tu número de caso</span>
              </div>
              <div class="dn-steps__item">
                  <h4>Recepción y resguardo</h4>
                  <p>El Comité revisa el caso y resuelve las medidas de protección solicitadas.</p>
                  <span class="dn-steps__time">Máx. 48 horas</span>
              </div>
              <div class="dn-steps__item">
                  <h4>Investigación</h4>
                  <p>Se recopilan antecedentes y se escucha a las partes y testigos con reserva.</p>
                  <span class="dn-steps__time">Según complejidad</span>
              </div>
              <div class="dn-steps__item">
                  <h4>Resolución</h4>
                  <p>El Comité emite su resolución y la notifica a las partes por correo.</p>
                  <span class="dn-steps__time">Consulta en línea</span>
              </div>
          </div>
          <div class="text-center" style="margin-top: 50px;">
              <NuxtLink to="/denuncias/ingresar" class="thm-btn">Ingresar denuncia o reclamo<span
                      class="far fa-chevron-right"></span></NuxtLink>
          </div>
      </div>
  </section>
</template>
