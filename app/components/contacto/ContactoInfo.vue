<script setup>
import infoContact from "~/constants/infoContact.js";

const items = [
  { icon: "fas fa-phone", label: "Llámanos", value: infoContact.phone.label, href: infoContact.phone.url },
  { icon: "fas fa-envelope", label: "Escríbenos", value: infoContact.email.label, href: infoContact.email.url },
  { icon: "fas fa-map-marker-alt", label: "Nuestra oficina", value: "Plazoleta Olímpica, Edificio de Federaciones, Guayaquil" },
  { icon: "fas fa-clock", label: "Horario de atención", value: infoContact.hours },
];
</script>

<template>
  <section class="contact-cards" aria-label="Datos de contacto">
    <div class="container">
      <ul class="contact-cards__list">
        <li v-for="item in items" :key="item.label" class="contact-cards__item">
          <span class="contact-cards__icon"><span :class="item.icon" aria-hidden="true"></span></span>
          <p class="contact-cards__label">{{ item.label }}</p>
          <a v-if="item.href" :href="item.href" class="contact-cards__value">{{ item.value }}</a>
          <p v-else class="contact-cards__value">{{ item.value }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
