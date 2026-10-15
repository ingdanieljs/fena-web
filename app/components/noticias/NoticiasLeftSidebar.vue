<template>
  <section class="blog-left-sidebar">
      <div class="container">
          <div class="row">
              <!--Start Sidebar-->
              <div class="col-xl-4">
                  <div class="sidebar sidebar--two">
                      <!--Start Sidebar Single-->
                      <div class="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                          <form class="sidebar__search-form" @submit.prevent>
                              <input type="search" placeholder="Buscar...">
                              <button type="submit"><i class="fa fa-search"></i></button>
                          </form>
                      </div>
                      <!--End Sidebar Single-->


                      <!--Start Sidebar Single-->
                      <div class="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".1s">
                          <div class="sidebar__title-box">
                              <div class="sidebar__title-shape"></div>
                              <div class="sidebar__title-shape-2"></div>
                              <h3 class="sidebar__title">Categorías</h3>
                          </div>
                          <ul class="sidebar__category-list list-unstyled">
                              <li><a href="#">Alto Rendimiento <span class="icon-next"></span></a></li>
                              <li class="active"><a href="#">Convocatorias<span class="icon-next"></span></a>
                              </li>
                              <li><a href="#">Resultados<span class="icon-next"></span></a></li>
                              <li><a href="#">Capacitación<span class="icon-next"></span></a></li>
                              <li><a href="#">Institucional<span class="icon-next"></span></a></li>
                              <li><a href="#">Eventos<span class="icon-next"></span></a></li>
                          </ul>
                      </div>
                      <!--End Sidebar Single-->

                      <!--Start Sidebar Single-->
                      <div class="sidebar__single sidebar__post wow fadeInUp" data-wow-delay=".1s">
                          <div class="sidebar__title-box">
                              <div class="sidebar__title-shape"></div>
                              <div class="sidebar__title-shape-2"></div>
                              <h3 class="sidebar__title">Noticias recientes</h3>
                          </div>
                          <div class="sidebar__post-box">
                              <div class="sidebar__post-single">
                                  <div class="sidebar-post__img">
                                      <img src="/assets/images/blog/recent-post-img-1.jpg" alt="">
                                  </div>
                                  <div class="sidebar__post-content-box">
                                      <h3><a href="#">Ecuador suma medallas en aguas abiertas internacionales</a>
                                      </h3>
                                  </div>
                              </div>

                              <div class="sidebar__post-single">
                                  <div class="sidebar-post__img">
                                      <img src="/assets/images/blog/recent-post-img-2.jpg" alt="">
                                  </div>
                                  <div class="sidebar__post-content-box">
                                      <h3><a href="#">Publicadas las convocatorias del primer semestre 2026</a>
                                      </h3>
                                  </div>
                              </div>

                              <div class="sidebar__post-single">
                                  <div class="sidebar-post__img">
                                      <img src="/assets/images/blog/recent-post-img-3.jpg" alt="">
                                  </div>
                                  <div class="sidebar__post-content-box">
                                      <h3><a href="#">Récords nacionales actualizados tras el campeonato interclubes</a>
                                      </h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--End Sidebar Single-->

                      <!--Start Sidebar Single-->
                      <div class="sidebar__single sidebar__contact wow fadeInUp" data-wow-delay=".1s">
                          <div
class="sidebar__contact-bg"
                              style="background-image: url(/assets/images/backgrounds/sidebar-contact-bg.jpg);">
                          </div>
                          <div class="sidebar__contact-icon">
                              <span class="fas fa-phone"></span>
                          </div>
                          <div class="sidebar__contact-text">
                              <p>Llámanos cuando quieras</p>
                              <h3><a href="tel:+59342295804">(593) 04-2295804</a></h3>
                          </div>
                          <div class="sidebar__contact-btn">
                              <NuxtLink class="thm-btn" to="/contacto">Contáctanos
                                  <span class="fas fa-arrow-right"></span>
                              </NuxtLink>
                          </div>
                      </div>
                      <!--End Sidebar Single-->

                      <!--Start Sidebar Single-->
                      <div class="sidebar__single sidebar__tags wow fadeInUp" data-wow-delay=".1s">
                          <div class="sidebar__title-box">
                              <div class="sidebar__title-shape"></div>
                              <div class="sidebar__title-shape-2"></div>
                              <h3 class="sidebar__title">Etiquetas</h3>
                          </div>
                          <ul class="sidebar__tags-list clearfix list-unstyled">
                              <li><a href="#">Natación</a></li>
                              <li><a href="#">Aguas Abiertas</a></li>
                              <li><a href="#">Clavados</a></li>
                              <li><a href="#">Polo Acuático</a></li>
                              <li><a href="#">Masters</a></li>
                              <li><a href="#">Natación Artística</a></li>
                              <li><a href="#">Récords</a></li>
                              <li><a href="#">Rankings</a></li>
                              <li><a href="#">Eventos</a></li>
                          </ul>
                      </div>
                      <!--End Sidebar Single-->

                  </div>
              </div>
              <!--End Sidebar-->
              <div class="col-xl-8">
                  <div class="row">
                      <!--Blog Two Single Start-->
                      <div class="col-xl-6 col-lg-6">
                          <div class="blog-two__single">
                              <div class="blog-two__img-box">
                                  <div class="blog-two__img">
                                      <img src="/assets/images/blog/blog-2-1.jpg" alt="">
                                  </div>
                                  <div class="blog-two__date">
                                      <p>10 <span>Nov</span></p>
                                  </div>
                              </div>
                              <div class="blog-two__content">
                                  <ul class="blog-two__meta list-unstyled">
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-user"></span>Comunicación FENA
                                          </NuxtLink>
                                      </li>
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-comments"></span>Comentarios
                                          </NuxtLink>
                                      </li>
                                  </ul>
                                  <h3 class="blog-two__title"><NuxtLink to="/noticias/detalle">Ecuador suma medallas en
                                          aguas abiertas
                                          internacionales</NuxtLink></h3>
                                  <p class="blog-two__text">Información oficial sobre competencias,
                                      resultados
                                      y actividades
                                      de la federación en sus distintas modalidades.</p>
                                  <div class="blog-two__read-more-box">
                                      <NuxtLink to="/noticias/detalle" class="blog-two__read-more">Leer más <span
                                              class="fas fa-arrow-right"></span></NuxtLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Blog Two Single End-->
                      <!--Blog Two Single Start-->
                      <div class="col-xl-6 col-lg-6">
                          <div class="blog-two__single">
                              <div class="blog-two__img-box">
                                  <div class="blog-two__img">
                                      <img src="/assets/images/blog/blog-2-2.jpg" alt="">
                                  </div>
                                  <div class="blog-two__date">
                                      <p>25 <span>Feb</span></p>
                                  </div>
                              </div>
                              <div class="blog-two__content">
                                  <ul class="blog-two__meta list-unstyled">
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-user"></span>Comunicación FENA
                                          </NuxtLink>
                                      </li>
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-comments"></span>Comentarios
                                          </NuxtLink>
                                      </li>
                                  </ul>
                                  <h3 class="blog-two__title"><NuxtLink to="/noticias/detalle">Publicadas las convocatorias
                                          del primer
                                          semestre 2026</NuxtLink></h3>
                                  <p class="blog-two__text">Información oficial sobre competencias,
                                      resultados
                                      y actividades
                                      de la federación en sus distintas modalidades.</p>
                                  <div class="blog-two__read-more-box">
                                      <NuxtLink to="/noticias/detalle" class="blog-two__read-more">Leer más <span
                                              class="fas fa-arrow-right"></span></NuxtLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Blog Two Single End-->
                      <!--Blog Two Single Start-->
                      <div class="col-xl-6 col-lg-6">
                          <div class="blog-two__single">
                              <div class="blog-two__img-box">
                                  <div class="blog-two__img">
                                      <img src="/assets/images/blog/blog-2-3.jpg" alt="">
                                  </div>
                                  <div class="blog-two__date">
                                      <p>12 <span>Ago</span></p>
                                  </div>
                              </div>
                              <div class="blog-two__content">
                                  <ul class="blog-two__meta list-unstyled">
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-user"></span>Comunicación FENA
                                          </NuxtLink>
                                      </li>
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-comments"></span>Comentarios
                                          </NuxtLink>
                                      </li>
                                  </ul>
                                  <h3 class="blog-two__title"><NuxtLink to="/noticias/detalle">Récords nacionales
                                          actualizados tras
                                          el campeonato interclubes</NuxtLink></h3>
                                  <p class="blog-two__text">Información oficial sobre competencias,
                                      resultados
                                      y actividades
                                      de la federación en sus distintas modalidades.</p>
                                  <div class="blog-two__read-more-box">
                                      <NuxtLink to="/noticias/detalle" class="blog-two__read-more">Leer más <span
                                              class="fas fa-arrow-right"></span></NuxtLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Blog Two Single End-->
                      <!--Blog Two Single Start-->
                      <div class="col-xl-6 col-lg-6">
                          <div class="blog-two__single">
                              <div class="blog-two__img-box">
                                  <div class="blog-two__img">
                                      <img src="/assets/images/blog/blog-2-4.jpg" alt="">
                                  </div>
                                  <div class="blog-two__date">
                                      <p>10 <span>Nov</span></p>
                                  </div>
                              </div>
                              <div class="blog-two__content">
                                  <ul class="blog-two__meta list-unstyled">
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-user"></span>Comunicación FENA
                                          </NuxtLink>
                                      </li>
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-comments"></span>Comentarios
                                          </NuxtLink>
                                      </li>
                                  </ul>
                                  <h3 class="blog-two__title"><NuxtLink to="/noticias/detalle">Curso de actualización para
                                          jueces y oficiales FENA</NuxtLink></h3>
                                  <p class="blog-two__text">Información oficial sobre competencias,
                                      resultados
                                      y actividades
                                      de la federación en sus distintas modalidades.</p>
                                  <div class="blog-two__read-more-box">
                                      <NuxtLink to="/noticias/detalle" class="blog-two__read-more">Leer más <span
                                              class="fas fa-arrow-right"></span></NuxtLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Blog Two Single End-->
                      <!--Blog Two Single Start-->
                      <div class="col-xl-6 col-lg-6">
                          <div class="blog-two__single">
                              <div class="blog-two__img-box">
                                  <div class="blog-two__img">
                                      <img src="/assets/images/blog/blog-2-5.jpg" alt="">
                                  </div>
                                  <div class="blog-two__date">
                                      <p>25 <span>Feb</span></p>
                                  </div>
                              </div>
                              <div class="blog-two__content">
                                  <ul class="blog-two__meta list-unstyled">
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-user"></span>Comunicación FENA
                                          </NuxtLink>
                                      </li>
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-comments"></span>Comentarios
                                          </NuxtLink>
                                      </li>
                                  </ul>
                                  <h3 class="blog-two__title"><NuxtLink to="/noticias/detalle">FENA fortalece el desarrollo
                                          de clubes en provincias</NuxtLink></h3>
                                  <p class="blog-two__text">Información oficial sobre competencias,
                                      resultados
                                      y actividades
                                      de la federación en sus distintas modalidades.</p>
                                  <div class="blog-two__read-more-box">
                                      <NuxtLink to="/noticias/detalle" class="blog-two__read-more">Leer más <span
                                              class="fas fa-arrow-right"></span></NuxtLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Blog Two Single End-->
                      <!--Blog Two Single Start-->
                      <div class="col-xl-6 col-lg-6">
                          <div class="blog-two__single">
                              <div class="blog-two__img-box">
                                  <div class="blog-two__img">
                                      <img src="/assets/images/blog/blog-2-6.jpg" alt="">
                                  </div>
                                  <div class="blog-two__date">
                                      <p>12 <span>Ago</span></p>
                                  </div>
                              </div>
                              <div class="blog-two__content">
                                  <ul class="blog-two__meta list-unstyled">
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-user"></span>Comunicación FENA
                                          </NuxtLink>
                                      </li>
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-comments"></span>Comentarios
                                          </NuxtLink>
                                      </li>
                                  </ul>
                                  <h3 class="blog-two__title"><NuxtLink to="/noticias/detalle">Calendario oficial de
                                          competencias 2026 ya disponible</NuxtLink></h3>
                                  <p class="blog-two__text">Información oficial sobre competencias,
                                      resultados
                                      y actividades
                                      de la federación en sus distintas modalidades.</p>
                                  <div class="blog-two__read-more-box">
                                      <NuxtLink to="/noticias/detalle" class="blog-two__read-more">Leer más <span
                                              class="fas fa-arrow-right"></span></NuxtLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Blog Two Single End-->
                      <!--Blog Two Single Start-->
                      <div class="col-xl-6 col-lg-6">
                          <div class="blog-two__single">
                              <div class="blog-two__img-box">
                                  <div class="blog-two__img">
                                      <img src="/assets/images/blog/blog-2-7.jpg" alt="">
                                  </div>
                                  <div class="blog-two__date">
                                      <p>10 <span>Nov</span></p>
                                  </div>
                              </div>
                              <div class="blog-two__content">
                                  <ul class="blog-two__meta list-unstyled">
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-user"></span>Comunicación FENA
                                          </NuxtLink>
                                      </li>
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-comments"></span>Comentarios
                                          </NuxtLink>
                                      </li>
                                  </ul>
                                  <h3 class="blog-two__title"><NuxtLink to="/noticias/detalle">Ecuador suma medallas en
                                          aguas abiertas
                                          internacionales</NuxtLink></h3>
                                  <p class="blog-two__text">Información oficial sobre competencias,
                                      resultados
                                      y actividades
                                      de la federación en sus distintas modalidades.</p>
                                  <div class="blog-two__read-more-box">
                                      <NuxtLink to="/noticias/detalle" class="blog-two__read-more">Leer más <span
                                              class="fas fa-arrow-right"></span></NuxtLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Blog Two Single End-->
                      <!--Blog Two Single Start-->
                      <div class="col-xl-6 col-lg-6">
                          <div class="blog-two__single">
                              <div class="blog-two__img-box">
                                  <div class="blog-two__img">
                                      <img src="/assets/images/blog/blog-2-8.jpg" alt="">
                                  </div>
                                  <div class="blog-two__date">
                                      <p>25 <span>Feb</span></p>
                                  </div>
                              </div>
                              <div class="blog-two__content">
                                  <ul class="blog-two__meta list-unstyled">
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-user"></span>Comunicación FENA
                                          </NuxtLink>
                                      </li>
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-comments"></span>Comentarios
                                          </NuxtLink>
                                      </li>
                                  </ul>
                                  <h3 class="blog-two__title"><NuxtLink to="/noticias/detalle">Convocatorias del primer
                                          semestre 2026 ya publicadas</NuxtLink></h3>
                                  <p class="blog-two__text">Información oficial sobre competencias,
                                      resultados
                                      y actividades
                                      de la federación en sus distintas modalidades.</p>
                                  <div class="blog-two__read-more-box">
                                      <NuxtLink to="/noticias/detalle" class="blog-two__read-more">Leer más <span
                                              class="fas fa-arrow-right"></span></NuxtLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Blog Two Single End-->
                      <!--Blog Two Single Start-->
                      <div class="col-xl-6 col-lg-6">
                          <div class="blog-two__single">
                              <div class="blog-two__img-box">
                                  <div class="blog-two__img">
                                      <img src="/assets/images/blog/blog-2-9.jpg" alt="">
                                  </div>
                                  <div class="blog-two__date">
                                      <p>12 <span>Ago</span></p>
                                  </div>
                              </div>
                              <div class="blog-two__content">
                                  <ul class="blog-two__meta list-unstyled">
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-user"></span>Comunicación FENA
                                          </NuxtLink>
                                      </li>
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-comments"></span>Comentarios
                                          </NuxtLink>
                                      </li>
                                  </ul>
                                  <h3 class="blog-two__title"><NuxtLink to="/noticias/detalle">Nuevos récords nacionales
                                          tras el interclubes.</NuxtLink></h3>
                                  <p class="blog-two__text">Información oficial sobre competencias,
                                      resultados
                                      y actividades
                                      de la federación en sus distintas modalidades.</p>
                                  <div class="blog-two__read-more-box">
                                      <NuxtLink to="/noticias/detalle" class="blog-two__read-more">Leer más <span
                                              class="fas fa-arrow-right"></span></NuxtLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Blog Two Single End-->
                      <!--Blog Two Single Start-->
                      <div class="col-xl-6 col-lg-6">
                          <div class="blog-two__single">
                              <div class="blog-two__img-box">
                                  <div class="blog-two__img">
                                      <img src="/assets/images/blog/blog-2-10.jpg" alt="">
                                  </div>
                                  <div class="blog-two__date">
                                      <p>12 <span>Ago</span></p>
                                  </div>
                              </div>
                              <div class="blog-two__content">
                                  <ul class="blog-two__meta list-unstyled">
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-user"></span>Comunicación FENA
                                          </NuxtLink>
                                      </li>
                                      <li>
                                          <NuxtLink to="/noticias/detalle">
                                              <span class="fas fa-comments"></span>Comentarios
                                          </NuxtLink>
                                      </li>
                                  </ul>
                                  <h3 class="blog-two__title"><NuxtLink to="/noticias/detalle">Capacitación para jueces
                                          y oficiales de la federación</NuxtLink></h3>
                                  <p class="blog-two__text">Información oficial sobre competencias,
                                      resultados
                                      y actividades
                                      de la federación en sus distintas modalidades.</p>
                                  <div class="blog-two__read-more-box">
                                      <NuxtLink to="/noticias/detalle" class="blog-two__read-more">Leer más <span
                                              class="fas fa-arrow-right"></span></NuxtLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Blog Two Single End-->
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
