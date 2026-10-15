<template>
  <section class="dn-section dn-section--alt">
      <div class="container">
          <div class="dn-form-wrap">
              <div class="dn-panel">
                  <h3 class="dn-step__title">Consultar estado del caso</h3>
                  <p class="dn-step__intro">Ingresa el número de caso que recibiste al enviar tu denuncia o
                      reclamo y el correo que registraste.</p>

                  <form id="dnTrack" class="dn-track-form" novalidate>
                      <div class="dn-field" data-field="caso">
                          <label class="dn-label" for="dnCaso">Número de caso</label>
                          <input
id="dnCaso" class="dn-input" type="text" name="caso"
                              placeholder="FENA-2026-000000" autocomplete="off" style="text-transform:uppercase">
                          <span class="dn-error">Formato: FENA-AAAA-000000</span>
                      </div>
                      <div class="dn-field" data-field="correo">
                          <label class="dn-label" for="dnCorreo">Correo registrado</label>
                          <input
id="dnCorreo" class="dn-input" type="email" name="correo"
                              placeholder="tucorreo@ejemplo.com" autocomplete="email">
                          <span class="dn-error">Ingresa un correo válido.</span>
                      </div>
                      <button type="submit" class="thm-btn">Consultar<span class="fas fa-search"></span></button>
                  </form>

                  <div id="dnNotFound" class="dn-notice dn-notice--alert dn-empty dn-hidden">
                      <i class="fas fa-times-circle"></i>
                      <div><strong>No encontramos un caso con esos datos.</strong> Revisa el número y el correo.
                          Si el problema persiste, escribe a <a
                              href="mailto:comentariosydenuncias@fena-ecuador.org">comentariosydenuncias@fena-ecuador.org</a>.
                      </div>
                  </div>

                  <div id="dnResult" class="dn-case dn-hidden">
                      <div class="dn-case__head">
                          <div>
                              <small>Caso</small>
                              <h3 id="dnRId">—</h3>
                          </div>
                          <span id="dnRBadge" class="dn-badge">—</span>
                      </div>
                      <div class="dn-meta">
                          <div>Ingresado<strong id="dnRDate">—</strong></div>
                          <div>Tipo de conducta<strong id="dnRType">—</strong></div>
                          <div>Responsable<strong>Comité de Ética y Salvaguarda</strong></div>
                      </div>
                      <ol id="dnRTimeline" class="dn-timeline"></ol>
                      <div class="dn-notice dn-notice--info">
                          <i class="fas fa-envelope-open-text"></i>
                          <div>Las notificaciones formales se envían al correo registrado. Por reserva del
                              procedimiento, aquí solo se muestra el estado general del caso.</div>
                      </div>
                  </div>
              </div>

              <div class="dn-notice" style="margin-top:24px">
                  <i class="fas fa-info-circle"></i>
                  <div><strong>Demo:</strong> prueba con el caso <code>FENA-2026-000123</code> y el correo
                      <code>demo@fena-ecuador.org</code>, o con un caso que hayas ingresado desde este navegador.
                      <br>¿Aún no presentas tu denuncia? <NuxtLink to="/denuncias/ingresar">Ingrésala aquí</NuxtLink>.
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
