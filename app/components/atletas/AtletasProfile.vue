<script setup>
// Perfil individual: datos en data/athletes.js. Las secciones sin datos
// (trayectoria, logros, aptitudes) no se muestran.
defineProps({
  athlete: { type: Object, required: true },
});
</script>

<!-- Dos raíces (sin div contenedor) para que la franja .cta-one que sigue
     detecte el fondo crema de .athlete-career (ver main.css). -->
<template>
    <section class="athlete-profile">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-5 col-lg-5">
            <div class="athlete-profile__media">
              <img v-if="athlete.image" :src="athlete.image" alt="" width="683" height="1024" class="athlete-profile__img">
              <span v-else class="athlete-profile__placeholder" aria-hidden="true">
                <span class="fas fa-user"></span>
              </span>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7">
            <div class="athlete-profile__content">
              <p class="athlete-profile__team">{{ athlete.profile?.team ?? athlete.discipline }}</p>
              <h2 class="athlete-profile__name">{{ athlete.name }}</h2>
              <p v-if="athlete.profile?.bio" class="athlete-profile__bio">{{ athlete.profile.bio }}</p>
              <ul v-if="athlete.profile?.details" class="athlete-profile__details">
                <li v-for="detail in athlete.profile.details" :key="detail.label">
                  <span class="about-two__points-icon">
                    <span :class="detail.icon" aria-hidden="true"></span>
                  </span>
                  <div>
                    <p class="athlete-profile__label">{{ detail.label }}</p>
                    <a v-if="detail.href" :href="detail.href" class="athlete-profile__value">{{ detail.value }}</a>
                    <p v-else class="athlete-profile__value">{{ detail.value }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="athlete.profile?.career" class="athlete-career">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-7">
            <h3 class="athlete-career__title">Trayectoria</h3>
            <p class="athlete-career__text">{{ athlete.profile.career }}</p>
            <template v-if="athlete.profile.achievements">
              <h4 class="athlete-career__subtitle">Logros destacados</h4>
              <ul class="about-two__points">
                <li v-for="item in athlete.profile.achievements" :key="item.text">
                  <span class="about-two__points-icon">
                    <span :class="item.icon" aria-hidden="true"></span>
                  </span>
                  {{ item.text }}
                </li>
              </ul>
            </template>
          </div>
          <div v-if="athlete.profile.skills" class="col-xl-5 col-lg-5">
            <div class="athlete-career__skills">
              <h3 class="athlete-career__title">Aptitudes</h3>
              <ul class="athlete-career__bars">
                <li v-for="skill in athlete.profile.skills" :key="skill.label">
                  <div class="athlete-career__bar-head">
                    <span>{{ skill.label }}</span>
                    <span>{{ skill.value }}%</span>
                  </div>
                  <div class="athlete-career__bar" role="presentation">
                    <span class="athlete-career__bar-fill" :style="{ width: `${skill.value}%` }"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
