<script setup>
import brand from "~/constants/brand.js";
import infoContact from "~/constants/infoContact.js";
import socials from "~/constants/socials.js";

const ui = useUiStore();
</script>

<template>
  <div :class="['xs-sidebar-group', 'info-group', 'info-sidebar', { isActive: ui.sidebarOpen }]">
    <div class="xs-overlay xs-bg-black" @click="ui.closeAll()"></div>
    <div class="xs-sidebar-widget">
      <div class="sidebar-widget-container">
        <div class="widget-heading">
          <a href="#" class="close-side-widget" @click.prevent="ui.closeAll()">X</a>
        </div>
        <div class="sidebar-textwidget">
          <div class="sidebar-info-contents">
            <div class="content-inner">
              <div class="logo">
                <NuxtLink to="/"><img :src="brand.logoWhite" :alt="brand.name"></NuxtLink>
              </div>
              <div class="content-box">
                <h4>Sobre FENA</h4>
                <div class="inner-text">
                  <p>
                    FENA es el organismo rector de la natación en Ecuador. Planifica, dirige,
                    regula y promueve el desarrollo de las disciplinas acuáticas y la
                    representación del país.
                  </p>
                </div>
              </div>

              <div class="form-inner">
                <h4>Escríbenos</h4>
                <ContactForm button-text="Enviar" />
              </div>

              <div class="sidebar-contact-info">
                <h4>Información de contacto</h4>
                <ul class="list-unstyled">
                  <li><span class="far fa-map-marker-alt"></span> {{ infoContact.address }}</li>
                  <li>
                    <span class="far fa-phone"></span>
                    <a :href="infoContact.phone.url">{{ infoContact.phone.label }}</a>
                  </li>
                  <li>
                    <span class="fal fa-envelope"></span>
                    <a :href="infoContact.email.url">{{ infoContact.email.label }}</a>
                  </li>
                </ul>
              </div>
              <div class="thm-social-link1">
                <ul class="social-box list-unstyled">
                  <li v-for="social in socials" :key="social.name">
                    <a :href="social.url" :aria-label="social.name"><i :class="social.icon"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
