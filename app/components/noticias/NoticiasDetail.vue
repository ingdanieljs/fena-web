<template>
  <section class="blog-details">
      <div class="container">
          <div class="row">
              <div class="col-xl-8 col-lg-7">
                  <div class="blog-details__left">
                      <div class="blog-details__img">
                          <img src="/assets/images/blog/blog-details-img-1.jpg" alt="Ecuador suma medallas en aguas abiertas internacionales">
                          <div class="blog-details__tag-1">
                              <NuxtLink to="/noticias/detalle">Alto Rendimiento</NuxtLink>
                          </div>
                          <div class="blog-details__date">
                              <p>18</p>
                              <span>Jun</span>
                          </div>
                      </div>
                      <div class="blog-details__content">
                          <div class="blog-details__user-and-meta">
                              <div class="blog-details__user">
                                  <p><span class="fas fa-user"></span>Comunicación FENA</p>
                              </div>
                              <ul class="blog-details__meta list-unstyled">
                                  <li>
                                      <a href="#"><span class="fas fa-clock"></span>4 min de lectura</a>
                                  </li>
                              </ul>
                          </div>
                          <h3 class="blog-details__title">Ecuador suma medallas en aguas abiertas
                              internacionales
                          </h3>
                          <p class="blog-details__text-1">La delegación ecuatoriana cerró su participación con
                              presencia en el podio en pruebas de fondo, ratificando el crecimiento sostenido de
                              las aguas abiertas en el país. Los resultados son fruto del trabajo conjunto de
                              clubes, entrenadores y deportistas a lo largo de toda la temporada.</p>
                          <p class="blog-details__text-2">Estos logros consolidan el proceso de alto rendimiento
                              impulsado por la federación y proyectan a la selección nacional de cara a los
                              próximos compromisos del calendario internacional, donde Ecuador buscará seguir
                              ratificando su nivel competitivo.</p>
                          <div class="blog-details__author-box">
                              <h4 class="blog-details__author-text">“Cada medalla es el reflejo del esfuerzo
                                  diario de nuestros deportistas y del compromiso de toda la familia acuática del
                                  Ecuador. Seguiremos trabajando para que más atletas representen al país en el
                                  más alto nivel”</h4>
                              <p class="blog-details__author-name">Santiago Enderica<span> / Presidente FENA</span></p>
                          </div>
                          <h3 class="blog-details__title-2">Un proceso de formación a largo plazo</h3>
                          <p class="blog-details__text-3">El desarrollo de las aguas abiertas ecuatorianas
                              responde a un plan sostenido de detección de talentos, preparación técnica y
                              competencia nacional. La federación acompaña a los clubes en cada etapa, asegurando
                              que los deportistas cuenten con las condiciones necesarias para crecer y proyectarse
                              hacia el escenario internacional.</p>
                          <div class="blog-details__img-box">
                              <div class="row">
                                  <div class="col-xl-6">
                                      <div class="blog-details__img-box-img">
                                          <img src="/assets/images/blog/blog-details-img-box-img-1.jpg" alt="">
                                      </div>
                                  </div>
                                  <div class="col-xl-6">
                                      <div class="blog-details__img-box-img">
                                          <img src="/assets/images/blog/blog-details-img-box-img-2.jpg" alt="">
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <h3 class="blog-details__title-3">Claves del trabajo de FENA</h3>
                          <p class="blog-details__text-4">El respaldo institucional a las aguas abiertas se apoya
                              en una planificación clara, en la articulación con los clubes y en la búsqueda
                              permanente de mejores condiciones de entrenamiento y competencia. Estos resultados
                              confirman que el camino trazado fortalece la representación del Ecuador en eventos
                              nacionales e internacionales y motiva a las nuevas generaciones de
                              deportistas.</p>
                          <ul class="blog-details__points-box">
                              <li>
                                  <div class="icon">
                                      <span class="icon-check-mark"></span>
                                  </div>
                                  <p>Programas de preparación estructurados y bien planificados.</p>
                              </li>
                              <li>
                                  <div class="icon">
                                      <span class="icon-check-mark"></span>
                                  </div>
                                  <p>Entrenadores enfocados en el rendimiento del deportista.</p>
                              </li>
                              <li>
                                  <div class="icon">
                                      <span class="icon-check-mark"></span>
                                  </div>
                                  <p>Competencias con respaldo técnico y reglamentario.</p>
                              </li>
                              <li>
                                  <div class="icon">
                                      <span class="icon-check-mark"></span>
                                  </div>
                                  <p>Entornos seguros, inclusivos y motivadores.</p>
                              </li>
                          </ul>
                          <div class="blog-details__tag-and-share">
                              <div class="blog-details__share-box">
                                  <h3 class="blog-details__share-title">Compartir :</h3>
                                  <div class="blog-details__share">
                                      <a href="#"><span class="fab fa-facebook-f"></span></a>
                                      <a href="#"><span class="fab fa-twitter"></span></a>
                                      <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                      <a href="#"><span class="fab fa-instagram"></span></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <!--Start Sidebar-->
              <div class="col-xl-4 col-lg-5">
                  <div class="sidebar">
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
                                      <h3><a href="#">Publicadas las convocatorias del primer semestre 2026</a>
                                      </h3>
                                  </div>
                              </div>

                              <div class="sidebar__post-single">
                                  <div class="sidebar-post__img">
                                      <img src="/assets/images/blog/recent-post-img-2.jpg" alt="">
                                  </div>
                                  <div class="sidebar__post-content-box">
                                      <h3><a href="#">Récords nacionales actualizados tras el campeonato interclubes</a>
                                      </h3>
                                  </div>
                              </div>

                              <div class="sidebar__post-single">
                                  <div class="sidebar-post__img">
                                      <img src="/assets/images/blog/recent-post-img-3.jpg" alt="">
                                  </div>
                                  <div class="sidebar__post-content-box">
                                      <h3><a href="#">Calendario oficial de competencias 2026 ya disponible</a>
                                      </h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--End Sidebar Single-->


                  </div>
              </div>
              <!--End Sidebar-->
          </div>
      </div>
  </section>
</template>
