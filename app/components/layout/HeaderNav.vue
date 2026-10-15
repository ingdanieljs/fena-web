<script setup>
import brand from "~/constants/brand.js";

// prefix: "main-menu" (páginas interiores) o "main-menu-two" (home).
const props = defineProps({
  prefix: { type: String, default: "main-menu" },
  logo: { type: String, default: brand.logoWhite },
});

const ui = useUiStore();
const { menuItems, isActive } = useMenu();
const p = (name) => `${props.prefix}__${name}`;

// El dropdown se abre con :hover. Al elegir una opción se cierra aunque el cursor
// siga encima, y vuelve a abrirse recién cuando el mouse sale del ítem.
const closedItem = ref(null);
</script>

<template>
  <div :class="p('wrapper')">
    <div :class="p('wrapper-inner')">
      <div :class="p('left')">
        <div :class="p('logo')">
          <NuxtLink to="/">
            <img :src="logo" :alt="brand.name">
          </NuxtLink>
        </div>
      </div>
      <div :class="p('main-menu-box')">
        <a href="#" class="mobile-nav__toggler" @click.prevent="ui.toggleMobileNav()">
          <i class="fa fa-bars"></i>
        </a>
        <ul class="main-menu__list">
          <li
            v-for="item in menuItems"
            :key="item.label"
            :class="{ dropdown: item.children, current: isActive(item), 'is-closed': closedItem === item.label }"
            @mouseleave="closedItem = null"
          >
            <NuxtLink v-if="item.to" :to="item.to" @click="closedItem = item.label">{{ item.label }}</NuxtLink>
            <a v-else href="#" @click.prevent>{{ item.label }}</a>
            <ul v-if="item.children" class="shadow-box">
              <li
                v-for="child in item.children"
                :key="child.to"
                :class="{ current: isActive(child) }"
              >
                <NuxtLink :to="child.to" @click="closedItem = item.label">{{ child.label }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div :class="p('right')">
        <div :class="p('nav-sidebar-icon')">
          <a class="navSidebar-button" href="#" @click.prevent.stop="ui.openSidebar()">
            <span class="icon-dots-menu-one"></span>
            <span class="icon-dots-menu-two"></span>
            <span class="icon-dots-menu-three"></span>
          </a>
        </div>
        <div :class="p('btn-box')">
          <NuxtLink to="/calendario" class="thm-btn">
            Ver calendario<span class="fas fa-arrow-right"></span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
