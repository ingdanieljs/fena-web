/* Canal de Denuncias FENA — demo sin backend.
   Los casos se guardan en localStorage de este navegador. */
(function () {
  "use strict";

  var STORE_KEY = "fenaDenuncias";
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var CASE_RE = /^FENA-\d{4}-\d{6}$/;

  var STAGES = [
    { title: "Denuncia recibida", text: "Se registró el caso y se asignó un número de seguimiento." },
    { title: "Admisibilidad y medidas de resguardo", text: "El Comité revisa los antecedentes y resuelve las medidas de protección solicitadas (máx. 48 horas)." },
    { title: "Investigación", text: "Se recopilan antecedentes y se escucha a las partes y testigos con reserva." },
    { title: "Resolución", text: "El Comité emite su resolución y la notifica por correo a las partes." },
    { title: "Caso cerrado", text: "El procedimiento terminó. Puedes reclamar ante las instancias correspondientes." }
  ];

  var DEMO_CASE = {
    id: "FENA-2026-000123",
    email: "demo@fena-ecuador.org",
    createdAt: "2026-09-02T10:15:00-05:00",
    conductas: ["Maltrato"],
    stage: 2,
    history: ["2026-09-02T10:15:00-05:00", "2026-09-03T16:40:00-05:00", "2026-09-10T09:00:00-05:00"]
  };

  function readStore() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function writeStore(cases) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(cases));
    } catch (e) { /* modo privado: la demo sigue funcionando sin persistir */ }
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function formatDate(iso) {
    return new Date(iso).toLocaleString("es-EC", {
      day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"
    });
  }

  function setError(field, on) {
    if (field) field.classList.toggle("has-error", on);
    return !on;
  }

  /* ======================= Formulario de denuncia ======================= */
  function initDenuncia(form) {
    var steps = form.querySelectorAll(".dn-step");
    var progress = document.querySelectorAll("#dnProgress li");
    var prev = document.getElementById("dnPrev");
    var next = document.getElementById("dnNext");
    var submit = document.getElementById("dnSubmit");
    var relato = document.getElementById("dnRelato");
    var counter = document.getElementById("dnCounter");
    var files = document.getElementById("dnArchivos");
    var current = 1;

    function val(name) {
      var el = form.elements[name];
      return el ? (el.value || "").trim() : "";
    }

    function checked(name) {
      return Array.prototype.map.call(form.querySelectorAll('[name="' + name + '"]:checked'), function (i) {
        return i.value;
      });
    }

    function field(name) {
      return form.querySelector('[data-field="' + name + '"]');
    }

    // Campos condicionales
    form.querySelectorAll('[name="identificarse"]').forEach(function (r) {
      r.addEventListener("change", function () {
        document.getElementById("dnIdentidad").classList.toggle("dn-hidden", r.value !== "si" || !r.checked);
      });
    });
    form.querySelectorAll('[name="menor"]').forEach(function (r) {
      r.addEventListener("change", function () {
        document.getElementById("dnTutor").classList.toggle("dn-hidden", r.value === "No");
      });
    });
    document.getElementById("dnLugarNs").addEventListener("change", function () {
      document.getElementById("dnLugar").disabled = this.checked;
    });

    relato.addEventListener("input", function () {
      var n = relato.value.trim().length;
      counter.textContent = n + (n >= 50 ? " caracteres" : " / 50 mín.");
      counter.classList.toggle("is-ok", n >= 50);
      if (n >= 50) setError(field("relato"), false);
    });

    files.addEventListener("change", function () {
      var list = document.getElementById("dnFileList");
      var tooMany = files.files.length > 5;
      var tooBig = Array.prototype.some.call(files.files, function (f) { return f.size > 10 * 1024 * 1024; });
      list.innerHTML = Array.prototype.map.call(files.files, function (f) {
        return "<li><i class='fas fa-paperclip'></i> " + escapeHtml(f.name) + " · " + (f.size / 1048576).toFixed(1) + " MB</li>";
      }).join("");
      setError(field("archivos"), tooMany || tooBig);
    });

    // Limpia el error al corregir
    form.addEventListener("input", function (e) {
      var f = e.target.closest("[data-field]");
      if (f && f.dataset.field !== "relato") f.classList.remove("has-error");
    });
    form.addEventListener("change", function (e) {
      var f = e.target.closest("[data-field]");
      if (f && f.dataset.field !== "archivos") f.classList.remove("has-error");
    });

    function validate(step) {
      var ok = true;
      if (step === 1) {
        ok = setError(field("email"), !EMAIL_RE.test(val("email"))) && ok;
        ok = setError(field("rol"), !checked("rol").length) && ok;
        ok = setError(field("identificarse"), !checked("identificarse").length) && ok;
        if (checked("identificarse")[0] === "si") {
          ok = setError(field("nombre"), val("nombre").length < 3) && ok;
          ok = setError(field("cedula"), !/^[A-Za-z0-9]{5,20}$/.test(val("cedula"))) && ok;
        }
      } else if (step === 2) {
        ok = setError(field("relato"), val("relato").length < 50) && ok;
        ok = !field("archivos").classList.contains("has-error") && ok;
      } else if (step === 3) {
        ok = setError(field("veracidad"), !document.getElementById("dnVeracidad").checked) && ok;
      }
      if (!ok) {
        var first = form.querySelector(".dn-step.is-active .has-error");
        if (first) {
          var details = first.closest("details");
          if (details) details.open = true;
          first.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      return ok;
    }

    function buildSummary() {
      var anon = checked("identificarse")[0] !== "si";
      var rows = [
        ["Correo de contacto", val("email")],
        ["Presenta como", checked("rol")[0]],
        ["Identificación", anon ? "Anónima" : val("nombre") + " · " + val("cedula")],
        ["Tipo de conducta", checked("conducta").join(", ") || "No indicado"],
        ["Relato", val("relato").length > 220 ? val("relato").slice(0, 220) + "…" : val("relato")],
        ["Modalidad", val("modalidad") || "No indicada"],
        ["Persona afectada menor de edad", checked("menor")[0] || "No indicado"],
        ["Medidas solicitadas", checked("medida").length ? checked("medida").join("; ") : "Ninguna"],
        ["Archivos adjuntos", files.files.length ? files.files.length + " archivo(s)" : "Ninguno"]
      ];
      document.getElementById("dnSummary").innerHTML = rows.map(function (r) {
        return "<div><dt>" + r[0] + "</dt><dd>" + escapeHtml(r[1]) + "</dd></div>";
      }).join("");
    }

    function go(step) {
      current = step;
      steps.forEach(function (s) { s.classList.toggle("is-active", +s.dataset.step === step); });
      progress.forEach(function (p) {
        var n = +p.dataset.step;
        p.classList.toggle("is-active", n === step);
        p.classList.toggle("is-done", n < step);
      });
      prev.style.visibility = step === 1 ? "hidden" : "visible";
      next.classList.toggle("dn-hidden", step === 3);
      submit.classList.toggle("dn-hidden", step !== 3);
      if (step === 3) buildSummary();
      document.getElementById("dnProgress").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    next.addEventListener("click", function () {
      if (validate(current)) go(current + 1);
    });
    prev.addEventListener("click", function () { go(current - 1); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (current !== 3 || !validate(3)) return;

      var now = new Date();
      var id = "FENA-" + now.getFullYear() + "-" + String(Math.floor(Math.random() * 900000) + 100000);
      var caso = {
        id: id,
        email: val("email").toLowerCase(),
        createdAt: now.toISOString(),
        conductas: checked("conducta"),
        menor: checked("menor")[0] === "Sí",
        stage: 1,
        history: [now.toISOString()]
      };
      var cases = readStore();
      cases.push(caso);
      writeStore(cases);

      form.classList.add("dn-hidden");
      document.getElementById("dnProgress").classList.add("dn-hidden");
      document.getElementById("dnCaseId").textContent = id;
      document.getElementById("dnCaseEmail").textContent = caso.email;
      document.getElementById("dnCaseMinor").classList.toggle("dn-hidden", !caso.menor);
      document.getElementById("dnTrackLink").href =
        "/denuncias/seguimiento?caso=" + encodeURIComponent(id) + "&correo=" + encodeURIComponent(caso.email);
      var done = document.getElementById("dnDone");
      done.classList.remove("dn-hidden");
      done.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.getElementById("dnCopy").addEventListener("click", function () {
      var btn = this;
      var text = document.getElementById("dnCaseId").textContent;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = "¡Copiado!";
          setTimeout(function () { btn.textContent = "Copiar"; }, 1800);
        });
      }
    });
  }

  /* ======================= Seguimiento ======================= */
  function initSeguimiento(form) {
    var caso = document.getElementById("dnCaso");
    var correo = document.getElementById("dnCorreo");

    function render(c) {
      var closed = c.stage >= STAGES.length - 1;
      var badge = document.getElementById("dnRBadge");
      badge.textContent = STAGES[c.stage].title;
      badge.className = "dn-badge " + (closed ? "dn-badge--done" : "dn-badge--progress");
      document.getElementById("dnRId").textContent = c.id;
      document.getElementById("dnRDate").textContent = formatDate(c.createdAt);
      document.getElementById("dnRType").textContent = c.conductas && c.conductas.length ? c.conductas.join(", ") : "Por calificar";
      document.getElementById("dnRTimeline").innerHTML = STAGES.map(function (s, i) {
        var state = i < c.stage || (closed && i === c.stage) ? "is-done" : i === c.stage ? "is-current" : "is-pending";
        var icon = state === "is-done" ? "<i class='fas fa-check'></i>" : i + 1;
        var when = c.history[i] ? "<time>" + formatDate(c.history[i]) + "</time>" : "";
        return "<li class='" + state + "'><span class='dn-timeline__dot'>" + icon + "</span>" + when +
          "<h5>" + s.title + (state === "is-current" ? " · en curso" : "") + "</h5><p>" + s.text + "</p></li>";
      }).join("");
      document.getElementById("dnResult").classList.remove("dn-hidden");
    }

    function lookup() {
      var id = caso.value.trim().toUpperCase();
      var mail = correo.value.trim().toLowerCase();
      var okId = setError(form.querySelector('[data-field="caso"]'), !CASE_RE.test(id));
      var okMail = setError(form.querySelector('[data-field="correo"]'), !EMAIL_RE.test(mail));
      document.getElementById("dnResult").classList.add("dn-hidden");
      document.getElementById("dnNotFound").classList.add("dn-hidden");
      if (!okId || !okMail) return;

      var found = readStore().concat([DEMO_CASE]).filter(function (c) {
        return c.id === id && c.email === mail;
      })[0];
      if (found) render(found);
      else document.getElementById("dnNotFound").classList.remove("dn-hidden");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      lookup();
    });
    form.addEventListener("input", function (e) {
      var f = e.target.closest("[data-field]");
      if (f) f.classList.remove("has-error");
    });

    // Enlace directo desde la confirmación de denuncia
    var params = new URLSearchParams(location.search);
    if (params.get("caso") && params.get("correo")) {
      caso.value = params.get("caso");
      correo.value = params.get("correo");
      lookup();
    }
  }

  // Nuxt llama init() después de cada navegación (app/plugins/template.client.js).
  // data-dn-ready evita enlazar dos veces el mismo formulario.
  function init() {
    var den = document.getElementById("dnForm");
    var seg = document.getElementById("dnTrack");
    if (den && !den.dataset.dnReady) {
      den.dataset.dnReady = "1";
      initDenuncia(den);
    }
    if (seg && !seg.dataset.dnReady) {
      seg.dataset.dnReady = "1";
      initSeguimiento(seg);
    }
  }

  window.FenaDenuncias = { init: init };
})();
