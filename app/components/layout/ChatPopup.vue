<script setup>
const ui = useUiStore();

const onKeydown = (e) => {
  if (e.key === "Escape") ui.toggleChat(false);
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <div class="chat-icon">
    <button type="button" class="chat-toggler" aria-label="Abrir chat" @click="ui.toggleChat(true)">
      <i class="fa fa-comment"></i>
    </button>
  </div>
  <div id="chat-popup" :class="['chat-popup', { 'popup-visible': ui.chatOpen }]">
    <div class="popup-inner">
      <div class="close-chat" @click="ui.toggleChat(false)"><i class="fa fa-times"></i></div>
      <div class="chat-form">
        <p>Completa el siguiente formulario y te responderemos lo antes posible.</p>
        <ContactForm
          name-placeholder="Tu nombre"
          email-placeholder="Tu correo"
          message-placeholder="Tu mensaje"
        />
      </div>
    </div>
  </div>
</template>
