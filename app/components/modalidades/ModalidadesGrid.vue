<template>
  <section class="course-grid">
      <div class="container">
          <div class="row">
              <div class="col-xl-4 col-lg-5">
                  <div class="course-grid__left">
                      <div class="course-grid__sidebar">
                          <div class="course-grid__search course-grid__single">
                              <div class="sidebar__title-box">
                                  <div class="sidebar__title-shape"></div>
                                  <div class="sidebar__title-shape-2"></div>
                                  <h3 class="sidebar__title">Buscar</h3>
                              </div>
                              <p class="course-grid__search-text">Encuentra eventos y modalidades de FENA
                                  por nombre, sede o disciplina.</p>
                              <form @submit.prevent>
                                  <input type="search" placeholder="Buscar por modalidad">
                                  <button type="submit"><i class="icon-search"></i>Buscar</button>
                              </form>
                          </div>
                          <div class="course-grid__price-filter course-grid__single">
                              <div class="sidebar__title-box">
                                  <div class="sidebar__title-shape"></div>
                                  <div class="sidebar__title-shape-2"></div>
                                  <h3 class="sidebar__title">Tipo de evento</h3>
                              </div>
                              <div class="course-grid__price-filter-free-and-paid-course">
                                  <label class="custom-radio">
                                      <input type="radio" name="myRadios" value="1" checked>
                                      <span class="radio-dot"></span>
                                      <span class="radio-text">Con inscripción</span>
                                  </label>
                                  <label class="custom-radio">
                                      <input type="radio" name="myRadios" value="2">
                                      <span class="radio-dot"></span>
                                      <span class="radio-text">Acceso libre</span>
                                  </label>
                              </div>
                              <div class="course-grid__price-filter-ranger">
                                  <p class="course-grid__price-filter-title">Sede: Costa - Sierra</p>
                                  <div class="price-ranger">
                                      <div id="slider-range"></div>
                                      <div class="ranger-min-max-block">
                                          <input type="text" readonly class="min">
                                          <span>-</span>
                                          <input type="text" readonly class="max">
                                          <input type="submit" value="Apply">
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="course-grid__categories course-grid__single">
                              <div class="sidebar__title-box">
                                  <div class="sidebar__title-shape"></div>
                                  <div class="sidebar__title-shape-2"></div>
                                  <h3 class="sidebar__title">Modalidades</h3>
                              </div>
                              <ul class="list-unstyled course-grid__list-item">
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Natación (12)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Aguas Abiertas (25)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Clavados (59)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Polo Acuático (24)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Natación Artística (40)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Masters (40)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Récords Nacionales (30)</p>
                                  </li>
                              </ul>
                          </div>
                          <div class="course-grid__skill course-grid__single">
                              <div class="sidebar__title-box">
                                  <div class="sidebar__title-shape"></div>
                                  <div class="sidebar__title-shape-2"></div>
                                  <h3 class="sidebar__title">Tipo de evento</h3>
                              </div>
                              <ul class="list-unstyled course-grid__list-item">
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Nacional (290)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Internacional (230)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Selectivo (40)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Festival (300)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Avalado (50)</p>
                                  </li>
                                  <li>
                                      <div class="course-grid__list-check"></div>
                                      <p class="course-grid__list-text">Copa (30)</p>
                                  </li>
                              </ul>
                          </div>
                          <div class="course-grid__discount course-grid__single">
                              <div
class="course-grid__discount-shape-bg"
                                  style="background-image: url(/assets/images/shapes/course-grid-discount-shape-bg.png);">
                              </div>
                              <h4 class="course-grid__discount-title">Licencia 2026</h4>
                              <p class="course-grid__discount-text">Tramita tu licencia deportiva <br> antes de
                                  cada competencia</p>
                              <div class="course-grid__discount-img">
                                  <img src="/assets/images/resources/course-grid-discount-img-1.png" alt="">
                              </div>
                              <div class="course-grid__discount-coupon">
                                  <p>Vigencia</p>
                                  <h5>#FENA56</h5>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-8 col-lg-7">
                  <div class="course-grid__right">
                      <div class="course-list__right-top">
                          <p class="course-list__right-top-text">Mostrando 12 eventos de 60</p>
                          <div class="course-list__right-top-btn">
                              <a href="#"><span class="far fa-caret-square-down"></span></a>
                              <a href="#"><span class="far fa-bars"></span></a>
                          </div>
                          <div class="course-list__showing-sort">
                              <p>Ordenar por: </p>
                              <div class="select-box">
                                  <select class="wide">
                                      <option data-display="Más recientes">Más recientes</option>
                                      <option value="1">Por popularidad</option>
                                      <option value="2">Por fecha</option>
                                      <option value="3">Por sede</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                      <div class="course-grid__right-content-box">
                          <div class="row">
                              <!--Courses Three Single Start-->
                              <div class="col-xl-6">
                                  <div class="courses-three__single">
                                      <div class="courses-three__img-box">
                                          <div class="courses-three__img">
                                              <img src="/assets/images/courses/courses-3-1.jpg" alt="">
                                          </div>
                                          <div class="courses-three__tag">
                                              <span>Natación</span>
                                          </div>
                                      </div>
                                      <div class="courses-three__content">
                                          <div class="courses-three__doller-and-review">
                                              <div class="courses-three__doller">
                                                  <p>Mar 2026</p>
                                              </div>
                                              <div class="courses-three__review">
                                                  <p><i class="icon-star-1"></i><i class="icon-star-1"></i><i
                                                          class="icon-star-1"></i> 4.5 <span>(129 Reseñas)</span>
                                                  </p>
                                              </div>
                                          </div>
                                          <h3 class="courses-three__title"><NuxtLink to="/modalidades/detalle">Campeonato
                                                  Nacional Interclubes
                                                  de Natación.</NuxtLink></h3>
                                          <div class="courses-three__btn-and-client-box">
                                              <div class="courses-three__btn-box">
                                                  <NuxtLink to="/modalidades" class="thm-btn">Ver convocatoria<span
                                                          class="fas fa-arrow-right"></span></NuxtLink>
                                              </div>
                                              <div class="courses-three__client-box">
                                                  <div class="courses-three__client-img">
                                                      <img
src="/assets/images/courses/courses-three-client-img-1.jpg"
                                                          alt="">
                                                  </div>
                                                  <div class="courses-three__client-content">
                                                      <h4>David Farinango</h4>
                                                      <p><span class="odometer" data-count="12">00</span><i>+</i>
                                                          Récords</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <ul class="courses-three__meta list-unstyled">
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Natación</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Guayaquil</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-clock"></span>
                                                  </div>
                                                  <p>Nacional</p>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <!--Courses Three Single End-->
                              <!--Courses Three Single Start-->
                              <div class="col-xl-6">
                                  <div class="courses-three__single">
                                      <div class="courses-three__img-box">
                                          <div class="courses-three__img">
                                              <img src="/assets/images/courses/courses-3-2.jpg" alt="">
                                          </div>
                                          <div class="courses-three__tag">
                                              <span>Aguas Abiertas</span>
                                          </div>
                                      </div>
                                      <div class="courses-three__content">
                                          <div class="courses-three__doller-and-review">
                                              <div class="courses-three__doller">
                                                  <p>Abr 2026</p>
                                              </div>
                                              <div class="courses-three__review">
                                                  <p><i class="icon-star-1"></i><i class="icon-star-1"></i><i
                                                          class="icon-star-1"></i> 4.5 <span>(129 Reseñas)</span>
                                                  </p>
                                              </div>
                                          </div>
                                          <h3 class="courses-three__title"><NuxtLink to="/modalidades/detalle">Copa
                                                  Pacífico Aguas
                                                  Abiertas
                                                  10K</NuxtLink></h3>
                                          <div class="courses-three__btn-and-client-box">
                                              <div class="courses-three__btn-box">
                                                  <NuxtLink to="/modalidades" class="thm-btn">Ver convocatoria<span
                                                          class="fas fa-arrow-right"></span></NuxtLink>
                                              </div>
                                              <div class="courses-three__client-box">
                                                  <div class="courses-three__client-img">
                                                      <img
src="/assets/images/courses/courses-three-client-img-2.jpg"
                                                          alt="">
                                                  </div>
                                                  <div class="courses-three__client-content">
                                                      <h4>Samantha Arévalo</h4>
                                                      <p><span class="odometer" data-count="20">00</span><i>+</i>
                                                          Récords</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <ul class="courses-three__meta list-unstyled">
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Aguas Abiertas</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Salinas</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-clock"></span>
                                                  </div>
                                                  <p>Internacional</p>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <!--Courses Three Single End-->
                              <!--Courses Three Single Start-->
                              <div class="col-xl-6">
                                  <div class="courses-three__single">
                                      <div class="courses-three__img-box">
                                          <div class="courses-three__img">
                                              <img src="/assets/images/courses/courses-3-3.jpg" alt="">
                                          </div>
                                          <div class="courses-three__tag">
                                              <span>Clavados</span>
                                          </div>
                                      </div>
                                      <div class="courses-three__content">
                                          <div class="courses-three__doller-and-review">
                                              <div class="courses-three__doller">
                                                  <p>May 2026</p>
                                              </div>
                                              <div class="courses-three__review">
                                                  <p><i class="icon-star-1"></i><i class="icon-star-1"></i><i
                                                          class="icon-star-1"></i> 4.5 <span>(129 Reseñas)</span>
                                                  </p>
                                              </div>
                                          </div>
                                          <h3 class="courses-three__title"><NuxtLink to="/modalidades/detalle">Selectivo
                                                  Nacional
                                                  de
                                                  Clavados </NuxtLink></h3>
                                          <div class="courses-three__btn-and-client-box">
                                              <div class="courses-three__btn-box">
                                                  <NuxtLink to="/modalidades" class="thm-btn">Ver convocatoria<span
                                                          class="fas fa-arrow-right"></span></NuxtLink>
                                              </div>
                                              <div class="courses-three__client-box">
                                                  <div class="courses-three__client-img">
                                                      <img
src="/assets/images/courses/courses-three-client-img-3.jpg"
                                                          alt="">
                                                  </div>
                                                  <div class="courses-three__client-content">
                                                      <h4>FENA</h4>
                                                      <p><span class="odometer" data-count="5">00</span><i>+</i>
                                                          Clubes</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <ul class="courses-three__meta list-unstyled">
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Clavados</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Quito</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-clock"></span>
                                                  </div>
                                                  <p>Selectivo</p>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <!--Courses Three Single End-->
                              <!--Courses Three Single Start-->
                              <div class="col-xl-6">
                                  <div class="courses-three__single">
                                      <div class="courses-three__img-box">
                                          <div class="courses-three__img">
                                              <img src="/assets/images/courses/courses-3-4.jpg" alt="">
                                          </div>
                                          <div class="courses-three__tag">
                                              <span>Masters</span>
                                          </div>
                                      </div>
                                      <div class="courses-three__content">
                                          <div class="courses-three__doller-and-review">
                                              <div class="courses-three__doller">
                                                  <p>Jun 2026</p>
                                              </div>
                                              <div class="courses-three__review">
                                                  <p><i class="icon-star-1"></i><i class="icon-star-1"></i><i
                                                          class="icon-star-1"></i> 4.5 <span>(129 Reseñas)</span>
                                                  </p>
                                              </div>
                                          </div>
                                          <h3 class="courses-three__title"><NuxtLink
                                                  to="/modalidades/detalle">Campeonato Nacional
                                                  Masters 50m</NuxtLink></h3>
                                          <div class="courses-three__btn-and-client-box">
                                              <div class="courses-three__btn-box">
                                                  <NuxtLink to="/modalidades" class="thm-btn">Ver convocatoria<span
                                                          class="fas fa-arrow-right"></span></NuxtLink>
                                              </div>
                                              <div class="courses-three__client-box">
                                                  <div class="courses-three__client-img">
                                                      <img
src="/assets/images/courses/courses-three-client-img-4.jpg"
                                                          alt="">
                                                  </div>
                                                  <div class="courses-three__client-content">
                                                      <h4>FENA</h4>
                                                      <p><span class="odometer" data-count="8">00</span><i>+</i>
                                                          Clubes</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <ul class="courses-three__meta list-unstyled">
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Masters</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Cuenca</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-clock"></span>
                                                  </div>
                                                  <p>Nacional</p>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <!--Courses Three Single End-->
                              <!--Courses Three Single Start-->
                              <div class="col-xl-6">
                                  <div class="courses-three__single">
                                      <div class="courses-three__img-box">
                                          <div class="courses-three__img">
                                              <img src="/assets/images/courses/courses-3-5.jpg" alt="">
                                          </div>
                                          <div class="courses-three__tag">
                                              <span>Polo Acuático</span>
                                          </div>
                                      </div>
                                      <div class="courses-three__content">
                                          <div class="courses-three__doller-and-review">
                                              <div class="courses-three__doller">
                                                  <p>Jul 2026</p>
                                              </div>
                                              <div class="courses-three__review">
                                                  <p><i class="icon-star-1"></i><i class="icon-star-1"></i><i
                                                          class="icon-star-1"></i> 4.5 <span>(129 Reseñas)</span>
                                                  </p>
                                              </div>
                                          </div>
                                          <h3 class="courses-three__title"><NuxtLink to="/modalidades/detalle">Liga
                                                  Nacional de
                                                  Polo
                                                  Acuático.</NuxtLink></h3>
                                          <div class="courses-three__btn-and-client-box">
                                              <div class="courses-three__btn-box">
                                                  <NuxtLink to="/modalidades" class="thm-btn">Ver convocatoria<span
                                                          class="fas fa-arrow-right"></span></NuxtLink>
                                              </div>
                                              <div class="courses-three__client-box">
                                                  <div class="courses-three__client-img">
                                                      <img
src="/assets/images/courses/courses-three-client-img-5.jpg"
                                                          alt="">
                                                  </div>
                                                  <div class="courses-three__client-content">
                                                      <h4>FENA</h4>
                                                      <p><span class="odometer" data-count="16">00</span><i>+</i>
                                                          Clubes</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <ul class="courses-three__meta list-unstyled">
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Polo Acuático</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Guayaquil</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-clock"></span>
                                                  </div>
                                                  <p>Nacional</p>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <!--Courses Three Single End-->
                              <!--Courses Three Single Start-->
                              <div class="col-xl-6">
                                  <div class="courses-three__single">
                                      <div class="courses-three__img-box">
                                          <div class="courses-three__img">
                                              <img src="/assets/images/courses/courses-3-6.jpg" alt="">
                                          </div>
                                          <div class="courses-three__tag">
                                              <span>Natación</span>
                                          </div>
                                      </div>
                                      <div class="courses-three__content">
                                          <div class="courses-three__doller-and-review">
                                              <div class="courses-three__doller">
                                                  <p>Ago 2026</p>
                                              </div>
                                              <div class="courses-three__review">
                                                  <p><i class="icon-star-1"></i><i class="icon-star-1"></i><i
                                                          class="icon-star-1"></i> 4.5 <span>(129
                                                          Reseñas)</span></p>
                                              </div>
                                          </div>
                                          <h3 class="courses-three__title"><NuxtLink to="/modalidades/detalle">Festival
                                                  Fenita
                                                  Swimming
                                                  Fest</NuxtLink></h3>
                                          <div class="courses-three__btn-and-client-box">
                                              <div class="courses-three__btn-box">
                                                  <NuxtLink to="/modalidades" class="thm-btn">Ver convocatoria<span
                                                          class="fas fa-arrow-right"></span></NuxtLink>
                                              </div>
                                              <div class="courses-three__client-box">
                                                  <div class="courses-three__client-img">
                                                      <img
src="/assets/images/courses/courses-three-client-img-6.jpg"
                                                          alt="">
                                                  </div>
                                                  <div class="courses-three__client-content">
                                                      <h4>Anicka Delgado</h4>
                                                      <p><span class="odometer" data-count="12">00</span><i>+</i>
                                                          Récords</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <ul class="courses-three__meta list-unstyled">
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Natación</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-book"></span>
                                                  </div>
                                                  <p>Ambato</p>
                                              </li>
                                              <li>
                                                  <div class="icon">
                                                      <span class="fas fa-clock"></span>
                                                  </div>
                                                  <p>Festival</p>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <!--Courses Three Single End-->
                          </div>
                      </div>
                      <div class="courses-grid__btn-box">
                          <NuxtLink to="/modalidades" class="thm-btn">Ver más eventos
                              <span class="fas fa-arrow-right"></span>
                          </NuxtLink>
                      </div>
                      <div class="blog-listing__pagination">
                          <ul class="pg-pagination list-unstyled">
                              <li class="prev">
                                  <a href="#" aria-label="prev"><i class="fas fa-angle-left"></i></a>
                              </li>
                              <li class="count active"><a href="#">1</a></li>
                              <li class="count"><a href="#">2</a></li>
                              <li class="count"><a href="#">3</a></li>
                              <li class="next">
                                  <a href="#" aria-label="Next"><i class="fas fa-angle-right"></i></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
