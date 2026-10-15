<script setup>
import socials from "~/constants/socials.js";

const fields = [
  { name: "name", type: "text", label: "Tu nombre", autocomplete: "name", required: true },
  { name: "email", type: "email", label: "Tu correo", autocomplete: "email", required: true },
  { name: "phone", type: "tel", label: "Teléfono", autocomplete: "tel" },
  { name: "subject", type: "text", label: "Asunto" },
];
</script>

<template>
  <section class="contact-hub">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-7">
          <div class="contact-hub__form-card">
            <div class="section-title text-left sec-title-animation animation-style2">
              <h2 class="section-title__title title-animation">Envíanos un <span>mensaje</span></h2>
            </div>
            <p class="contact-hub__intro">Cuéntanos tu consulta y te responderemos lo antes posible.</p>
            <!-- Sin backend todavía: el envío no hace nada. -->
            <form class="contact-hub__form" @submit.prevent>
              <label v-for="field in fields" :key="field.name" class="contact-hub__field">
                <span class="contact-hub__label">{{ field.label }}<span v-if="field.required" aria-hidden="true"> *</span></span>
                <input
                  :type="field.type" :name="field.name" :autocomplete="field.autocomplete"
                  :required="field.required">
              </label>
              <label class="contact-hub__field contact-hub__field--full">
                <span class="contact-hub__label">Mensaje <span aria-hidden="true">*</span></span>
                <textarea name="message" rows="5" required></textarea>
              </label>
              <div class="contact-hub__field--full">
                <button type="submit" class="thm-btn">Enviar mensaje<span class="far fa-chevron-right"></span></button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-xl-5 col-lg-5">
          <div class="contact-hub__aside">
            <!-- Edificio de Federaciones, junto al Comité Olímpico Ecuatoriano (Guayaquil) -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.9365142953548!2d-79.89489122376705!3d-2.1778079978028675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6dc36dc0afd1%3A0x97a0a8bbad634b36!2sComit%C3%A9%20Ol%C3%ADmpico%20Ecuatoriano!5e0!3m2!1ses!2sec!4v1792099209100!5m2!1ses!2sec"
              class="contact-hub__map" title="Ubicación de FENA en Google Maps" allowfullscreen
              loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            <div class="faq-hub__help">
              <span class="faq-hub__help-icon"><span class="fas fa-shield-alt" aria-hidden="true"></span></span>
              <h3 class="faq-hub__help-title">Canal de denuncias</h3>
              <p class="faq-hub__help-text">Reporta de forma segura y confidencial cualquier situación que
                afecte a deportistas o a la competencia.</p>
              <NuxtLink to="/denuncias" class="thm-btn">Ir al canal<span class="far fa-chevron-right"></span></NuxtLink>
            </div>
            <div class="contact-hub__social">
              <p class="contact-hub__social-title">Síguenos</p>
              <a
                v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener"
                :aria-label="social.name"><span :class="social.icon" aria-hidden="true"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
