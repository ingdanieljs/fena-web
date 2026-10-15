<script setup>
import { general as highlights } from "~/constants/highlights.js";

defineProps({ error: { type: Object, default: null } });
</script>

<template>
  <NuxtLayout>
    <div>
      <PageHeader title="Error 404" />
      <ErrorNotFound />
      <CtaHighlights :items="highlights" />
    </div>
  </NuxtLayout>
</template>
