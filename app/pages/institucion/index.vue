<script setup>
import { institucion as highlights } from "~/constants/highlights.js";
</script>

<template>
  <div>
    <PageHeader title="Institución" />
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
