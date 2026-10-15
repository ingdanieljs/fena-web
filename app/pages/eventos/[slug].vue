<script setup>
import { eventos as highlights } from "~/constants/highlights.js";
import events from "~/data/events.js";

// Un slug desconocido (ej. /eventos/detalle) muestra el primer evento con detalle.
const route = useRoute();
const event = computed(() =>
  events.find((item) => item.slug === route.params.slug) ?? events.find((item) => item.detail) ?? events[0]);
</script>

<template>
  <div>
    <PageHeader
      image="/assets/images/img_bank/img_15.webp" title="Detalle de Evento"
      :crumbs="[{ label: 'Eventos', to: '/eventos' }]" :current="event.title" />
    <EventosDetail :key="event.slug" :event="event" />
    <!-- "Eventos relacionados" quitado; el componente EventosRelated sigue en el proyecto. -->
    <CtaHighlights :items="highlights" />
  </div>
</template>
