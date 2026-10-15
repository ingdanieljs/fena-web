<script setup>
import { institucion as highlights } from "~/constants/highlights.js";
import { directiva, equipo } from "~/data/institucion.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_44.webp" image-position="center 25%" title="Institución" />
    <InstitucionValues />
    <TeamSection id="directiva" :people="directiva" tone="light">
      <template #title>Nuestra <span>directiva</span></template>
    </TeamSection>
    <TeamSection id="equipo" :people="equipo">
      <template #title>Equipo <span>FENA</span></template>
    </TeamSection>
    <HomeTestimonials>
      <template #title>La voz de nuestros <br><span>clubes</span></template>
    </HomeTestimonials>
    <!-- Ocultas por ahora; los componentes siguen en app/components/institucion:
         InstitucionFeatures, InstitucionAbout, InstitucionAthletes,
         InstitucionFederations, InstitucionMission, InstitucionAffiliation,
         InstitucionTestimonials, InstitucionCareer, InstitucionNews. -->
    <CtaHighlights :items="highlights" />
  </div>
</template>
