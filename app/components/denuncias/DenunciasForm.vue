<template>
  <section class="dn-section dn-section--alt">
      <div class="container">
          <div class="dn-form-wrap">

              <div class="dn-notice dn-notice--alert" style="margin-bottom: 30px;">
                  <i class="fas fa-exclamation-triangle"></i>
                  <div><strong>¿Riesgo inmediato?</strong> Llama al <a href="tel:911"><strong>ECU
                              911</strong></a>. Si los hechos pueden constituir delito, también puedes acudir a la
                      Fiscalía General del Estado.</div>
              </div>

              <ol id="dnProgress" class="dn-progress">
                  <li data-step="1" class="is-active"><strong>¿Quién presenta?</strong>Tus datos de contacto</li>
                  <li data-step="2"><strong>¿Qué pasó?</strong>Relato y detalles</li>
                  <li data-step="3"><strong>Confirmación</strong>Revisión y envío</li>
              </ol>

              <form id="dnForm" class="dn-panel" novalidate>

                  <!-- ============ PASO 1 ============ -->
                  <div class="dn-step is-active" data-step="1">
                      <h3 class="dn-step__title">¿Quién presenta la denuncia o reclamo?</h3>
                      <p class="dn-step__intro">Solo el correo es obligatorio en este paso. Puedes denunciar
                          sin identificarte.</p>

                      <div class="dn-field" data-field="email">
                          <label class="dn-label" for="dnEmail">Correo de contacto <span class="req">*</span></label>
                          <input
id="dnEmail" class="dn-input" type="email" name="email"
                              placeholder="tucorreo@ejemplo.com" autocomplete="email">
                          <span class="dn-help">Te permite recibir avisos del avance y consultar el estado del
                              caso. Sin correo no es posible tramitar la denuncia ni notificarte.</span>
                          <span class="dn-error">Ingresa un correo válido.</span>
                      </div>

                      <fieldset class="dn-fieldset dn-field" data-field="rol">
                          <legend>Presento esta denuncia como <span class="req" style="color:var(--eduvers-base)">*</span></legend>
                          <div class="dn-options">
                              <label class="dn-option"><input type="radio" name="rol" value="Persona afectada">
                                  <span>Soy la persona afectada</span></label>
                              <label class="dn-option"><input
type="radio" name="rol"
                                      value="Testigo o tercero"> <span>Soy testigo o tercero que denuncia o
                                      reclama</span></label>
                          </div>
                          <span class="dn-error">Selecciona una opción.</span>
                      </fieldset>

                      <fieldset class="dn-fieldset dn-field" data-field="identificarse">
                          <legend>¿Deseas identificarte? <span class="req" style="color:var(--eduvers-base)">*</span></legend>
                          <div class="dn-options">
                              <label class="dn-option"><input type="radio" name="identificarse" value="si">
                                  <span>Sí, quiero identificarme</span></label>
                              <label class="dn-option"><input type="radio" name="identificarse" value="no">
                                  <span>Prefiero no identificarme<small>Tu denuncia será tramitada igual.</small></span></label>
                          </div>
                          <span class="dn-error">Selecciona una opción.</span>
                      </fieldset>

                      <div id="dnIdentidad" class="dn-hidden">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="dn-field" data-field="nombre">
                                      <label class="dn-label" for="dnNombre">Nombre completo <span class="req">*</span></label>
                                      <input
id="dnNombre" class="dn-input" type="text" name="nombre"
                                          autocomplete="name">
                                      <span class="dn-error">Ingresa tu nombre.</span>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="dn-field" data-field="cedula">
                                      <label class="dn-label" for="dnCedula">Cédula o pasaporte <span class="req">*</span></label>
                                      <input
id="dnCedula" class="dn-input" type="text" name="cedula"
                                          inputmode="numeric" placeholder="0912345678">
                                      <span class="dn-error">Ingresa un número de cédula o pasaporte válido.</span>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="dn-field">
                                      <label class="dn-label" for="dnTelefono">Teléfono <small>(opcional)</small></label>
                                      <input
id="dnTelefono" class="dn-input" type="tel" name="telefono"
                                          placeholder="09XXXXXXXX" autocomplete="tel">
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="dn-field">
                                      <label class="dn-label" for="dnEdad">Edad <small>(opcional)</small></label>
                                      <input id="dnEdad" class="dn-input" type="number" name="edad" min="5" max="110">
                                  </div>
                              </div>
                              <div class="col-12">
                                  <div class="dn-field">
                                      <label class="dn-label" for="dnRelacion">Relación con FENA o con tu club</label>
                                      <select id="dnRelacion" class="dn-select ignore" name="relacion">
                                          <option value="">Selecciona…</option>
                                          <option>Deportista</option>
                                          <option>Entrenador/a</option>
                                          <option>Juez / oficial técnico</option>
                                          <option>Dirigente</option>
                                          <option>Personal administrativo</option>
                                          <option>Madre, padre o representante legal</option>
                                          <option>Otro</option>
                                      </select>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="dn-notice dn-notice--info">
                          <i class="fas fa-lock"></i>
                          <div>Conforme a la Ley Orgánica de Protección de Datos Personales, tus datos serán
                              tratados con reserva. En los documentos del expediente las personas se identifican
                              solo con sus iniciales.</div>
                      </div>
                  </div>

                  <!-- ============ PASO 2 ============ -->
                  <div class="dn-step" data-step="2">
                      <h3 class="dn-step__title">¿Qué pasó?</h3>
                      <p class="dn-step__intro">Cuéntanos los hechos con tus propias palabras. Todo lo demás es
                          opcional, pero ayuda a actuar más rápido.</p>

                      <div class="dn-field" data-field="relato">
                          <label class="dn-label" for="dnRelato">Relato de los hechos <span class="req">*</span>
                              <span id="dnCounter" class="dn-counter">0 / 50 mín.</span></label>
                          <textarea
id="dnRelato" class="dn-textarea" name="relato"
                              placeholder="Describe qué ocurrió, quiénes participaron, cuándo y dónde, si lo sabes…"></textarea>
                          <span class="dn-error">El relato debe tener al menos 50 caracteres.</span>
                      </div>

                      <fieldset class="dn-fieldset">
                          <legend>Tipo de conducta <small style="font-weight:400">(puedes marcar más de una)</small></legend>
                          <div class="dn-options">
                              <label class="dn-option"><input type="checkbox" name="conducta" value="Maltrato">
                                  <span>Maltrato<small>Físico o psicológico</small></span></label>
                              <label class="dn-option"><input
type="checkbox" name="conducta"
                                      value="Acoso sexual"> <span>Acoso sexual</span></label>
                              <label class="dn-option"><input
type="checkbox" name="conducta"
                                      value="Abuso sexual"> <span>Abuso sexual</span></label>
                              <label class="dn-option"><input
type="checkbox" name="conducta"
                                      value="Discriminación"> <span>Discriminación</span></label>
                          </div>
                      </fieldset>

                      <details class="dn-details">
                          <summary><i class="fas fa-plus-circle"></i> Agregar más detalles <span>(opcional)</span></summary>
                          <div class="dn-details__body">

                              <h5 class="dn-subtitle">Persona afectada</h5>
                              <div class="row">
                                  <div class="col-md-6">
                                      <div class="dn-field">
                                          <label class="dn-label" for="dnAfNombre">Nombre <small>(si lo conoces)</small></label>
                                          <input id="dnAfNombre" class="dn-input" type="text" name="afectadoNombre">
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="dn-field">
                                          <label class="dn-label" for="dnAfRelacion">Relación con la organización</label>
                                          <select id="dnAfRelacion" class="dn-select ignore" name="afectadoRelacion">
                                              <option value="">Selecciona…</option>
                                              <option>Deportista</option>
                                              <option>Entrenador/a</option>
                                              <option>Juez / oficial técnico</option>
                                              <option>Dirigente</option>
                                              <option>Personal administrativo</option>
                                              <option>Otro</option>
                                              <option>No lo sé</option>
                                          </select>
                                      </div>
                                  </div>
                              </div>
                              <div class="dn-field">
                                  <span class="dn-label">¿Es menor de 18 años?</span>
                                  <div class="dn-options dn-options--3">
                                      <label class="dn-option"><input type="radio" name="menor" value="Sí"> <span>Sí</span></label>
                                      <label class="dn-option"><input type="radio" name="menor" value="No"> <span>No</span></label>
                                      <label class="dn-option"><input type="radio" name="menor" value="No lo sé"> <span>No lo sé</span></label>
                                  </div>
                              </div>
                              <div id="dnTutor" class="dn-field dn-hidden">
                                  <label class="dn-label" for="dnTutorDatos">Madre, padre o representante legal — nombre y contacto</label>
                                  <input
id="dnTutorDatos" class="dn-input" type="text" name="tutor"
                                      placeholder="Nombre, teléfono o correo, si lo conoces">
                                  <span class="dn-help">El Comité tiene la obligación de contactar a los
                                      representantes en un máximo de 24 horas.</span>
                              </div>

                              <h5 class="dn-subtitle">Persona denunciada o reclamada</h5>
                              <div class="row">
                                  <div class="col-md-6">
                                      <div class="dn-field">
                                          <label class="dn-label" for="dnDenNombre">Nombre <small>(si lo conoces)</small></label>
                                          <input id="dnDenNombre" class="dn-input" type="text" name="denunciadoNombre">
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="dn-field">
                                          <label class="dn-label" for="dnDenCargo">Cargo o rol</label>
                                          <select id="dnDenCargo" class="dn-select ignore" name="denunciadoCargo">
                                              <option value="">Selecciona…</option>
                                              <option>Deportista</option>
                                              <option>Entrenador/a</option>
                                              <option>Juez / oficial técnico</option>
                                              <option>Dirigente</option>
                                              <option>Personal administrativo</option>
                                              <option>Otro</option>
                                              <option>No lo sé</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="dn-field">
                                          <label class="dn-label" for="dnDenClub">Club o institución</label>
                                          <input id="dnDenClub" class="dn-input" type="text" name="denunciadoClub">
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="dn-field">
                                          <label class="dn-label" for="dnDenCorreo">Correo</label>
                                          <input id="dnDenCorreo" class="dn-input" type="email" name="denunciadoCorreo">
                                          <span class="dn-help">Permite notificar formalmente cuando el procedimiento lo requiera.</span>
                                      </div>
                                  </div>
                              </div>

                              <h5 class="dn-subtitle">Contexto de los hechos</h5>
                              <div class="row">
                                  <div class="col-md-6">
                                      <div class="dn-field">
                                          <label class="dn-label" for="dnModalidad">Modalidad involucrada</label>
                                          <select id="dnModalidad" class="dn-select ignore" name="modalidad">
                                              <option value="">Selecciona…</option>
                                              <option>Natación</option>
                                              <option>Aguas Abiertas</option>
                                              <option>Clavados</option>
                                              <option>Polo Acuático</option>
                                              <option>Natación Artística</option>
                                              <option>Masters</option>
                                              <option>No lo sé</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="dn-field">
                                          <label class="dn-label" for="dnFecha">Fecha aproximada</label>
                                          <input id="dnFecha" class="dn-input" type="date" name="fecha">
                                      </div>
                                  </div>
                                  <div class="col-12">
                                      <div class="dn-field">
                                          <label class="dn-label" for="dnLugar">Lugar</label>
                                          <input
id="dnLugar" class="dn-input" type="text" name="lugar"
                                              placeholder="Ciudad, piscina, evento, hotel de concentración…">
                                          <label class="dn-option" style="margin-top:10px"><input
id="dnLugarNs"
                                                  type="checkbox" name="lugarNoSe"> <span>No sé o no es posible precisar el lugar</span></label>
                                      </div>
                                  </div>
                              </div>

                              <h5 class="dn-subtitle">Testigos y pruebas</h5>
                              <div class="dn-field">
                                  <label class="dn-label" for="dnTestigos">Testigos</label>
                                  <textarea
id="dnTestigos" class="dn-textarea" style="height:110px" name="testigos"
                                      placeholder="Si no conoces los nombres, describe a las personas."></textarea>
                              </div>
                              <div class="dn-field" data-field="archivos">
                                  <label class="dn-file" for="dnArchivos">
                                      <i class="fas fa-cloud-upload-alt"></i>
                                      <strong>Adjuntar pruebas o evidencia</strong><br>
                                      Fotos, capturas, audios o documentos · máximo 5 archivos de 10 MB
                                      <input id="dnArchivos" type="file" name="archivos" multiple>
                                  </label>
                                  <ul id="dnFileList" class="dn-file-list"></ul>
                                  <span id="dnFileError" class="dn-error">Máximo 5 archivos de hasta 10 MB cada uno.</span>
                              </div>
                          </div>
                      </details>

                      <details class="dn-details">
                          <summary><i class="fas fa-shield-alt"></i> Solicitar medidas de protección <span>(opcional)</span></summary>
                          <div class="dn-details__body">
                              <p>Puedes solicitar una o más. La adopción final la decide el Comité de Ética y
                                  Salvaguarda en un plazo máximo de 48 horas.</p>
                              <div class="dn-measures">
                                  <div>
                                      <h6>A · Separación</h6>
                                      <div class="dn-options">
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Prohibición de coincidir en actividades deportivas"> <span>Prohibición de coincidir en actividades deportivas</span></label>
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Cambio de lugar, horario o modalidad de entrenamiento"> <span>Cambio de lugar, horario o modalidad de entrenamiento</span></label>
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Cambio de grupo o de entrenador/a"> <span>Cambio de grupo de entrenamiento o de entrenador/a</span></label>
                                      </div>
                                  </div>
                                  <div>
                                      <h6>B · Apoyo a la víctima</h6>
                                      <div class="dn-options">
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Apoyo psicológico"> <span>Apoyo psicológico</span></label>
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Apoyo jurídico"> <span>Apoyo jurídico</span></label>
                                      </div>
                                  </div>
                                  <div>
                                      <h6>C · Entorno acuático</h6>
                                      <div class="dn-options">
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Regulación de acceso a camerinos y duchas"> <span>Regulación del acceso a camerinos, duchas y vestidores</span></label>
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Supervisión visible en zonas de entrenamiento"> <span>Supervisión visible en zonas de entrenamiento compartido</span></label>
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Logística separada en competencias"> <span>Logística separada en competencias</span></label>
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Control de visitas en concentraciones"> <span>Control de visitas en concentraciones y alojamiento</span></label>
                                      </div>
                                  </div>
                                  <div>
                                      <h6>D · Medidas reforzadas para menores</h6>
                                      <div class="dn-options">
                                          <label class="dn-option is-locked"><input type="checkbox" checked disabled> <span>Comunicación inmediata con representantes legales<small>Se aplica automáticamente cuando hay menores involucrados.</small></span></label>
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Separación de alojamiento adulto / menor"> <span>Separación de alojamiento adulto / menor</span></label>
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Acompañamiento por responsable de delegación"> <span>Acompañamiento por responsable de delegación</span></label>
                                      </div>
                                  </div>
                                  <div>
                                      <h6>E · Reserva y no revictimización</h6>
                                      <div class="dn-options">
                                          <label class="dn-option"><input type="checkbox" name="medida" value="Reserva reforzada de la identidad"> <span>Reserva reforzada de la identidad</span></label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </details>

                      <div class="dn-field">
                          <label class="dn-label" for="dnComentarios">Comentarios finales <small>(opcional)</small></label>
                          <textarea
id="dnComentarios" class="dn-textarea" style="height:110px" name="comentarios"
                              placeholder="Evidencia adicional, otras medidas que necesites, cómo prefieres que te contactemos…"></textarea>
                      </div>
                  </div>

                  <!-- ============ PASO 3 ============ -->
                  <div class="dn-step" data-step="3">
                      <h3 class="dn-step__title">Revisa y envía</h3>
                      <p class="dn-step__intro">Verifica que la información sea correcta. Puedes volver atrás
                          para editarla.</p>

                      <div class="dn-summary"><dl id="dnSummary"></dl></div>

                      <div class="dn-field" data-field="veracidad">
                          <label class="dn-option">
                              <input id="dnVeracidad" type="checkbox" name="veracidad">
                              <span>Declaro que los hechos descritos son veraces según mi conocimiento, actuando
                                  de buena fe, y entiendo que esta denuncia o reclamo será recibida por el Comité
                                  de Ética y Salvaguarda de FENA y tratada con estricta reserva.
                                  <span class="req" style="color:var(--eduvers-base)">*</span></span>
                          </label>
                          <span class="dn-error">Debes aceptar la declaración para enviar.</span>
                      </div>
                  </div>

                  <div class="dn-nav">
                      <button id="dnPrev" type="button" class="dn-btn-ghost" style="visibility:hidden">
                          <span class="fas fa-arrow-left"></span> Anterior</button>
                      <button id="dnNext" type="button" class="thm-btn">Continuar<span
                              class="far fa-chevron-right"></span></button>
                      <button id="dnSubmit" type="submit" class="thm-btn dn-hidden">Enviar denuncia o
                          reclamo<span class="fas fa-paper-plane"></span></button>
                  </div>
              </form>

              <!-- Confirmación -->
              <div id="dnDone" class="dn-panel dn-hidden">
                  <div class="dn-success">
                      <div class="dn-success__icon"><i class="fas fa-check"></i></div>
                      <h3 class="dn-step__title">Denuncia recibida</h3>
                      <p>Guarda tu número de caso. Lo necesitarás junto a tu correo para consultar el estado.</p>
                      <div class="dn-code"><span id="dnCaseId">—</span><button
id="dnCopy"
                              type="button">Copiar</button></div>
                      <ul>
                          <li><i class="fas fa-check"></i><span>Enviamos una confirmación a <strong
                                      id="dnCaseEmail"></strong>.</span></li>
                          <li><i class="fas fa-check"></i><span>El Comité de Ética y Salvaguarda tomará contacto
                                  en un máximo de <strong>48 horas</strong>.</span></li>
                          <li id="dnCaseMinor" class="dn-hidden"><i class="fas fa-check"></i><span>Al haber un menor
                                  involucrado, se contactará a sus representantes en un máximo de
                                  <strong>24 horas</strong>.</span></li>
                      </ul>
                      <NuxtLink id="dnTrackLink" to="/denuncias/seguimiento" class="thm-btn">Consultar estado<span
                              class="far fa-chevron-right"></span></NuxtLink>
                  </div>
              </div>

              <p class="dn-help" style="text-align:center;margin-top:24px">Versión de demostración: la
                  información se guarda solo en este navegador y no se envía a ningún servidor.</p>
          </div>
      </div>
  </section>
</template>
