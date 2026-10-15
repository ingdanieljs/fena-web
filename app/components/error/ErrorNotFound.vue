<template>
  <section class="error-page">
      <div class="container">
          <div class="row">
              <div class="col-xl-12">
                  <div class="error-page__wrapper text-center">
                      <div class="error-page__content">
                          <h2>404</h2>
                          <h3>¡Ups! Página no encontrada</h3>
                          <p>Lo sentimos, la página que buscas no existe.</p>
                          <form class="error-page__form">
                              <div class="error-page__form-input">
                                  <input type="search" placeholder="Buscar aquí">
                                  <button type="submit"><i class="icon-search-interface-symbol"></i></button>
                              </div>
                          </form>
                          <div class="btn-box">
                              <NuxtLink to="/" class="thm-btn">
                                  Volver al inicio<span class="fas fa-arrow-right"></span>
                              </NuxtLink>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
