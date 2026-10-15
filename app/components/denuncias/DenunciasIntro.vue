<template>
  <section class="dn-section">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-xl-7 col-lg-7">
                  <div class="section-title text-left">
                  </div>
                  <h1 class="dn-hero__title">Canal de Denuncias <span>FENA</span></h1>
                  <p class="dn-hero__lead">Un espacio seguro y confidencial para denunciar o reclamar
                      conductas de <strong>maltrato, acoso sexual, abuso sexual y discriminación</strong>
                      ocurridas en la natación y las disciplinas acuáticas del Ecuador: entrenamientos,
                      competencias, concentraciones, viajes y cualquier actividad organizada o avalada por FENA.</p>
                  <div class="dn-notice dn-notice--alert">
                      <i class="fas fa-exclamation-triangle"></i>
                      <div><strong>¿Hay un riesgo inmediato para alguien?</strong> Llama al
                          <a href="tel:911"><strong>ECU 911</strong></a>. Este canal no reemplaza a los servicios de
                          emergencia ni a la Fiscalía cuando los hechos pueden constituir delito.</div>
                  </div>
              </div>
              <div class="col-xl-5 col-lg-5">
                  <div class="dn-actions">
                      <NuxtLink to="/denuncias/ingresar" class="dn-action">
                          <span class="dn-action__icon"><i class="fas fa-file-signature"></i></span>
                          <span>
                              <h4>Ingresar denuncia o reclamo</h4>
                              <p>Puedes hacerlo de forma identificada o anónima.</p>
                          </span>
                          <span class="dn-action__arrow fas fa-arrow-right"></span>
                      </NuxtLink>
                      <NuxtLink to="/denuncias/seguimiento" class="dn-action dn-action--light">
                          <span class="dn-action__icon"><i class="fas fa-search"></i></span>
                          <span>
                              <h4>Consultar estado</h4>
                              <p>Con tu número de caso y el correo registrado.</p>
                          </span>
                          <span class="dn-action__arrow fas fa-arrow-right"></span>
                      </NuxtLink>
                      <div class="dn-notice dn-notice--info">
                          <i class="fas fa-user-shield"></i>
                          <div>Tu denuncia es recibida por el <strong>Comité de Ética y Salvaguarda de
                                  FENA</strong> y se trata con estricta reserva.</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
