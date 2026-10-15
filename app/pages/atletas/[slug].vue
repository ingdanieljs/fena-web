<script setup>
import { federacion as highlights } from "~/constants/highlights.js";
import { athletes } from "~/data/athletes.js";

// /atletas/perfil (enlace del menú) o un slug desconocido muestran el primer atleta.
const route = useRoute();
const athlete = computed(() => athletes.find((item) => item.slug === route.params.slug) ?? athletes[0]);
</script>

<template>
  <div>
    <PageHeader
      image="/assets/images/img_bank/img_14.webp" title="Perfil de Atleta"
      :crumbs="[{ label: 'Atletas', to: '/atletas' }]" :current="athlete.name" />
    <AtletasProfile :athlete="athlete" />
    <!-- Formulario "Escríbenos un mensaje" quitado; el componente AtletasContact sigue en el proyecto. -->
    <CtaHighlights :items="highlights" />
  </div>
</template>
