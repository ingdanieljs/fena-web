<script setup>
// Sin fotos reales todavía: en lugar del avatar va la inicial de cada nombre.
const testimonials = [
  {
    text: "El acompañamiento de FENA ha sido clave para que nuestro club crezca y participe en las competencias nacionales avaladas.",
    name: "Club Acuático Guayas",
    role: "Club afiliado",
  },
  {
    text: "La capacitación para jueces y entrenadores nos permite elevar el nivel técnico de nuestros deportistas cada temporada.",
    name: "Selección de Pichincha",
    role: "Entrenador",
  },
  {
    text: "Representar al Ecuador en aguas abiertas es un orgullo; el respaldo de la federación impulsa nuestro alto rendimiento.",
    name: "Samantha Arévalo",
    role: "Selección Nacional",
  },
  {
    text: "Gracias al desarrollo de clubes en provincias, más niños y jóvenes acceden a la natación organizada en nuestra región.",
    name: "Liga de Manabí",
    role: "Club afiliado",
  },
];
</script>

<template>
  <section id="testimonial" class="testimonial-two">
      <div class="container">
          <div class="section-title text-left sec-title-animation animation-style2">
              <h2 class="section-title__title title-animation">Construyendo una comunidad
                  <br>en torno a la <span>natación</span>.
              </h2>
          </div>
          <div class="testimonial-two__inner">
              <!-- owl-carousel lo inicializa fena-template.js -->
              <div class="testimonial-two__carousel owl-carousel owl-theme">
                  <div v-for="testimonial in testimonials" :key="testimonial.name" class="item">
                      <figure class="testimonial-two__single">
                          <div class="testimonial-two__single-inner">
                              <div class="testimonial-two__quote">
                                  <span class="fas fa-quote-right" aria-hidden="true"></span>
                              </div>
                              <blockquote class="testimonial-two__text">{{ testimonial.text }}</blockquote>
                              <figcaption class="testimonial-two__client-info">
                                  <span class="testimonial-two__client-initial" aria-hidden="true">{{ testimonial.name.charAt(0) }}</span>
                                  <div class="testimonial-two__client-content">
                                      <h3><NuxtLink to="/testimonios">{{ testimonial.name }}</NuxtLink></h3>
                                      <p>{{ testimonial.role }}</p>
                                  </div>
                              </figcaption>
                          </div>
                      </figure>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
