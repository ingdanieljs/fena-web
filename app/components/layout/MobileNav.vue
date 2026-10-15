<script setup>
import brand from "~/constants/brand.js";
import infoContact from "~/constants/infoContact.js";
import socials from "~/constants/socials.js";

const ui = useUiStore();
const { menuItems, isActive } = useMenu();
const expanded = ref(null);

const toggle = (label) => {
  expanded.value = expanded.value === label ? null : label;
};
</script>

<template>
  <div :class="['mobile-nav__wrapper', { expanded: ui.mobileNavOpen }]">
    <div class="mobile-nav__overlay" @click="ui.toggleMobileNav()"></div>
    <div class="mobile-nav__content">
      <span class="mobile-nav__close" @click="ui.toggleMobileNav()"><i class="fa fa-times"></i></span>

      <div class="logo-box">
        <NuxtLink to="/" aria-label="logo image">
          <img :src="brand.logoWhite" width="150" :alt="brand.name">
        </NuxtLink>
      </div>

      <div class="mobile-nav__container">
        <ul class="main-menu__list">
          <li
            v-for="item in menuItems"
            :key="item.label"
            :class="{ dropdown: item.children, current: isActive(item) }"
          >
            <NuxtLink v-if="item.to && !item.children" :to="item.to">{{ item.label }}</NuxtLink>
            <a v-else href="#" :class="{ expanded: expanded === item.label }" @click.prevent="toggle(item.label)">
              {{ item.label }}
              <button aria-label="dropdown toggler" :class="{ expanded: expanded === item.label }">
                <i class="fa fa-angle-down"></i>
              </button>
            </a>
            <ul v-if="item.children" :style="{ display: expanded === item.label ? 'block' : 'none' }">
              <li v-for="child in item.children" :key="child.to" :class="{ current: isActive(child) }">
                <NuxtLink :to="child.to">{{ child.label }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="fa fa-envelope"></i>
          <a :href="infoContact.email.url">{{ infoContact.email.label }}</a>
        </li>
        <li>
          <i class="fas fa-phone"></i>
          <a :href="infoContact.phone.url">{{ infoContact.phone.label }}</a>
        </li>
      </ul>
      <div class="mobile-nav__top">
        <div class="mobile-nav__social">
          <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener" :class="social.icon" :aria-label="social.name"></a>
        </div>
      </div>
    </div>
  </div>
</template>
