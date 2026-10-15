<template>
  <section class="newsletter-one">
      <div class="newsletter-one__big-text">BOLETÍN</div>
      <div class="container">
          <div class="newsletter-one__inner">
              <div class="newsletter-one__left">
                  <div class="newsletter-one__title-box">
                      <h2 class="newsletter-one__title">Suscríbete al <span>boletín</span></h2>
                      <p class="newsletter-one__text">Al suscribirte aceptas los <NuxtLink to="/privacidad">Términos
                              de uso</NuxtLink> y la <NuxtLink to="/privacidad">Política de
                              privacidad</NuxtLink></p>
                  </div>
              </div>
              <div class="newsletter-one__form-box">
                  <form class="newsletter-one__form">
                      <div class="newsletter-one__input">
                          <input type="email" placeholder="Correo electrónico">
                      </div>
                      <button type="submit" class="newsletter-one__btn">
                          Suscribirme <span class="icon-send"></span></button>
                  </form>
              </div>
          </div>
      </div>
  </section>
</template>
