<script setup>
import brand from "~/constants/brand.js";
import infoContact from "~/constants/infoContact.js";
import socials from "~/constants/socials.js";

// variant "home": header blanco (main-header-two). "page": header de páginas interiores.
const props = defineProps({
  variant: { type: String, default: "page" },
});

const isHome = computed(() => props.variant === "home");
const prefix = computed(() => (isHome.value ? "main-menu-two" : "main-menu"));
const logo = computed(() => (isHome.value ? brand.logo : brand.logoWhite));
const p = (name) => `${prefix.value}__${name}`;
</script>

<template>
  <header :class="isHome ? 'main-header-two' : 'main-header'">
    <div :class="p('top')">
      <div :class="p('top-inner')">
        <ul :class="['list-unstyled', p('contact-list')]">
          <li>
            <div class="icon"><i class="fal fa-envelope"></i></div>
            <div class="text">
              <p><a :href="infoContact.email.url">{{ infoContact.email.label }}</a></p>
            </div>
          </li>
          <li>
            <div class="icon"><i class="far fa-phone"></i></div>
            <div class="text">
              <p><a :href="infoContact.phone.url">{{ infoContact.phone.label }}</a></p>
            </div>
          </li>
          <li>
            <div class="icon"><i class="far fa-map-marker-alt"></i></div>
            <div class="text">
              <p>{{ infoContact.city }}</p>
            </div>
          </li>
        </ul>
        <div :class="p('top-right')">
          <p :class="p('social-title')">Síguenos en:</p>
          <div :class="p('social')">
            <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener" :aria-label="social.name">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav :class="['main-menu', { 'main-menu-two': isHome }]">
      <HeaderNav :prefix="prefix" :logo="logo" />
    </nav>
  </header>

  <div :class="['stricky-header', 'stricked-menu', 'main-menu', { 'main-menu-two': isHome }]">
    <div class="sticky-header__content">
      <HeaderNav :prefix="prefix" :logo="logo" />
    </div>
  </div>
</template>
