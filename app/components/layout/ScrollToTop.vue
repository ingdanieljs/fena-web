<script setup>
// Botón circular (como el de capia-web) con un anillo azul que se llena
// según el avance del scroll. Aparece pasados los 50px.
const visible = ref(false);
const ring = ref(null);
let length = 0;

const update = () => {
  visible.value = window.scrollY > 50;
  if (!ring.value || !length) return;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? window.scrollY / height : 0;
  ring.value.style.strokeDashoffset = length - progress * length;
};

const toTop = () => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
};

onMounted(() => {
  length = ring.value.getTotalLength();
  ring.value.style.strokeDasharray = `${length} ${length}`;
  update();
  window.addEventListener("scroll", update, { passive: true });
});

onBeforeUnmount(() => window.removeEventListener("scroll", update));
</script>

<template>
  <button type="button" :class="['back-to-top', { 'is-visible': visible }]" aria-label="Volver arriba" :tabindex="visible ? 0 : -1" @click="toTop">
    <svg class="back-to-top__ring" viewBox="-1 -1 102 102" aria-hidden="true">
      <path class="back-to-top__track" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" ></path>
      <path ref="ring" class="back-to-top__progress" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" ></path>
    </svg>
    <span class="far fa-chevron-up" aria-hidden="true"></span>
  </button>
</template>
