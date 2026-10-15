<script setup>
// Formulario corto (nombre, correo, mensaje) usado en el sidebar y en el chat.
// Sin backend todavía: onSubmit solo muestra un aviso.
defineProps({
  buttonText: { type: String, default: "Enviar" },
  namePlaceholder: { type: String, default: "Nombre" },
  emailPlaceholder: { type: String, default: "Correo" },
  messagePlaceholder: { type: String, default: "Mensaje..." },
});

const form = reactive({ name: "", email: "", message: "" });
const result = ref("");

const onSubmit = () => {
  result.value = "Gracias, te responderemos pronto.";
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <input v-model="form.name" type="text" name="name" :placeholder="namePlaceholder" required>
    </div>
    <div class="form-group">
      <input v-model="form.email" type="email" name="email" :placeholder="emailPlaceholder" required>
    </div>
    <div class="form-group">
      <textarea v-model="form.message" name="message" :placeholder="messagePlaceholder" required></textarea>
    </div>
    <div class="form-group message-btn">
      <button class="thm-btn" type="submit">
        {{ buttonText }} <span class="fas fa-arrow-right"></span>
      </button>
    </div>
    <div class="result">{{ result }}</div>
  </form>
</template>
