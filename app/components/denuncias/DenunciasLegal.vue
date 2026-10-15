<script setup>
// Preguntas frecuentes del canal con el acordeón de Preguntas frecuentes (.faq-hub).
const faqs = [
  { question: "¿Puedo denunciar de forma anónima?", answer: "Sí. Puedes elegir no identificarte. Solo necesitamos un correo de contacto para enviarte avisos del avance; puedes usar uno que no revele tu identidad." },
  { question: "¿Puedo denunciar si no soy la persona afectada?", answer: "Sí. Testigos, familiares, entrenadores, compañeros o cualquier persona que conozca los hechos pueden presentar una denuncia o reclamo." },
  { question: "¿Qué pasa si la víctima es menor de edad?", answer: "Se activan medidas reforzadas: el Comité contacta a madre, padre o representante legal en un máximo de 24 horas y, si corresponde, pone los hechos en conocimiento de las autoridades competentes." },
  { question: "¿Cómo sigo mi caso?", answer: "Al enviar tu denuncia recibes un número de caso. Con ese número y tu correo puedes", link: { label: "consultar el estado", to: "/denuncias/seguimiento" }, after: " en cualquier momento." },
  { question: "¿Puedo escribir directamente por correo?", answer: "Sí, a", link: { label: "comentariosydenuncias@fena-ecuador.org", href: "mailto:comentariosydenuncias@fena-ecuador.org" }, after: ". Recomendamos el formulario porque asigna un número de caso y permite el seguimiento en línea." },
];
const open = ref(0);
</script>

<template>
  <section class="dn-section">
      <div class="container">
          <div class="row gutter-y-30">
              <div class="col-xl-6">
                  <div class="section-title text-left">
                      <h2 class="section-title__title">En qué nos <span>basamos</span></h2>
                  </div>
                  <ul class="dn-laws">
                      <li><i class="fas fa-book"></i>
                          <div>
                              <h5>Constitución de la República del Ecuador</h5>
                              <p>Derecho a la integridad personal, igualdad y no discriminación, y protección
                                  prioritaria a niñas, niños y adolescentes.</p>
                          </div>
                      </li>
                      <li><i class="fas fa-book"></i>
                          <div>
                              <h5>Ley del Deporte, Educación Física y Recreación</h5>
                              <p>Marco de funcionamiento de las federaciones deportivas nacionales.</p>
                          </div>
                      </li>
                      <li><i class="fas fa-book"></i>
                          <div>
                              <h5>COIP, Código de la Niñez y Adolescencia y Ley Orgánica Integral para Prevenir y
                                  Erradicar la Violencia contra las Mujeres</h5>
                              <p>Tipificación de delitos y protección especial de grupos prioritarios.</p>
                          </div>
                      </li>
                      <li><i class="fas fa-book"></i>
                          <div>
                              <h5>Ley Orgánica de Protección de Datos Personales</h5>
                              <p>Tratamiento reservado de los datos entregados en este canal.</p>
                          </div>
                      </li>
                      <li><i class="fas fa-book"></i>
                          <div>
                              <h5>Código de Ética FENA y Política de Salvaguarda de World Aquatics</h5>
                              <p>Normas de conducta para deportistas, entrenadores, jueces y dirigentes.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="col-xl-6">
                  <div class="section-title text-left">
                      <h2 class="section-title__title">Preguntas <span>frecuentes</span></h2>
                  </div>
                  <ul class="faq-hub__list">
                      <li
                          v-for="(faq, index) in faqs" :key="faq.question"
                          :class="['faq-hub__item', { 'is-open': open === index }]">
                          <h3 class="faq-hub__question">
                              <button
                                  :id="`dn-faq-q-${index}`" type="button" :aria-expanded="open === index"
                                  :aria-controls="`dn-faq-a-${index}`" @click="open = open === index ? null : index">
                                  <span class="faq-hub__question-text">{{ faq.question }}</span>
                                  <span class="faq-hub__toggle" aria-hidden="true"><span class="far fa-plus"></span></span>
                              </button>
                          </h3>
                          <div
                              v-show="open === index" :id="`dn-faq-a-${index}`" role="region"
                              :aria-labelledby="`dn-faq-q-${index}`" class="faq-hub__answer dn-faq__answer">
                              <p>
                                  {{ faq.answer }}
                                  <template v-if="faq.link">
                                      <NuxtLink v-if="faq.link.to" :to="faq.link.to">{{ faq.link.label }}</NuxtLink>
                                      <a v-else :href="faq.link.href">{{ faq.link.label }}</a>{{ faq.after }}
                                  </template>
                              </p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
</template>
