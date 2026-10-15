<script setup>
import { institucion as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader image="/assets/images/img_bank/img_44.webp" image-position="center 25%" title="Institución" />
    <InstitucionFeatures />
    <InstitucionAbout />
    <InstitucionAthletes />
    <InstitucionFederations />
    <InstitucionMission />
    <InstitucionAffiliation />
    <InstitucionValues />
    <InstitucionTestimonials />
    <InstitucionCareer />
    <InstitucionNews />
    <CtaHighlights :items="highlights" />
  </div>
</template>
