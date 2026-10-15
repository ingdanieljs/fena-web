<script setup>
import brand from "~/constants/brand.js";
import infoContact from "~/constants/infoContact.js";
import { footerBottomLinks, footerLinks } from "~/constants/menu.js";
import socials from "~/constants/socials.js";

// variant "home": sin la franja .cta-one de las páginas interiores encima,
// así que el footer no se monta sobre la sección anterior (ver main.css).
const props = defineProps({
  variant: { type: String, default: "page" },
});

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer :class="['site-footer', { 'site-footer--home': props.variant === 'home' }]">
    <div class="site-footer__map" style="background-image: url(/assets/images/shapes/footer-one-map.png)"></div>
    <div class="site-footer__top">
      <div class="container">
        <div class="site-footer__top-inner">
          <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div class="footer-widget__about">
                <div class="footer-widget__about-logo">
                  <NuxtLink to="/"><img :src="brand.logoWhite" :alt="brand.name"></NuxtLink>
                </div>
                <p class="footer-widget__about-text">{{ infoContact.about }}</p>
                <ul class="footer-widget__app-box">
                  <li><a href="#"><span class="icon-google-play"></span>Google Play</a></li>
                  <li><a href="#"><i class="icon-apple-logo"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div class="footer-widget__links">
                <h4 class="footer-widget__title">Enlaces rápidos</h4>
                <ul class="footer-widget__links-list list-unstyled">
                  <li v-for="link in footerLinks" :key="link.to">
                    <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
              <div class="footer-widget__contact-info">
                <h4 class="footer-widget__title">Contacto</h4>
                <div class="footer-widget__contact-info-box">
                  <ul class="footer-widget__contact-info-list list-unstyled">
                    <li>
                      <div class="footer-widget__contact-info-list-shape-1"></div>
                      <div class="icon"><span class="fas fa-map-marker-alt"></span></div>
                      <p>{{ infoContact.address }}</p>
                    </li>
                    <li>
                      <div class="footer-widget__contact-info-list-shape-1"></div>
                      <div class="icon"><span class="fas fa-envelope"></span></div>
                      <p><a :href="infoContact.email.url">{{ infoContact.email.label }}</a></p>
                    </li>
                    <li>
                      <div class="footer-widget__contact-info-list-shape-1"></div>
                      <div class="icon"><span class="fas fa-phone"></span></div>
                      <p><a :href="infoContact.phone.url">{{ infoContact.phone.label }}</a></p>
                    </li>
                  </ul>
                  <div class="footer-widget__social-box">
                    <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener" :aria-label="social.name">
                      <span :class="social.icon"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Suscripción al boletín: oculta por ahora (con ella las columnas eran col-xl-3).
            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div class="site-footer__newsletter">
                <div class="footer-widget__title-box">
                  <h3 class="footer-widget__title">Suscríbete</h3>
                </div>
                <p class="site-footer__text">Suscríbete y recibe convocatorias, resultados y noticias oficiales de FENA.</p>
                <form class="site-footer__newsletter-form" @submit.prevent>
                  <div class="site-footer__newsletter-input">
                    <input type="email" placeholder="Correo electrónico...">
                    <div class="site-footer__newsletter-input-icon">
                      <span class="fas fa-envelope"></span>
                    </div>
                  </div>
                  <div class="checked-box">
                    <input id="skipper" type="checkbox" name="skipper1" checked>
                    <label for="skipper"><span></span>acepto los términos y condiciones.</label>
                  </div>
                  <div class="site-footer__newsletter-btn-box">
                    <button type="submit" class="site-footer__newsletter-btn" aria-label="Suscribirme">
                      <span class="fas fa-paper-plane"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            -->
          </div>
        </div>
      </div>
    </div>
    <div class="site-footer__bottom">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="site-footer__bottom-inner">
              <div class="site-footer__copyright">
                <p class="site-footer__copyright-text">
                  © {{ currentYear }} <NuxtLink to="/">FENA</NuxtLink>. Todos los derechos reservados.
                </p>
              </div>
              <div class="site-footer__bottom-menu-box">
                <ul class="list-unstyled site-footer__bottom-menu">
                  <li v-for="link in footerBottomLinks" :key="link.label">
                    <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
