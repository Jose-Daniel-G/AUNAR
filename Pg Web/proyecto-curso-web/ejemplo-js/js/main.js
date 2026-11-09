"use strict";
/* ===== Módulo 4 · JavaScript de la página personal =====
   Se enlaza con defer en el <head>, así el HTML ya está cargado
   cuando el script se ejecuta. */

/* ---------- 1. Año actual en el pie de página (DOM) ---------- */
document.querySelector("#anio").textContent = new Date().getFullYear();

/* ---------- 2. Tema claro / oscuro (eventos + localStorage) ---------- */
const btnTema = document.querySelector("#btn-tema");
const raiz = document.documentElement;

function aplicarTema(tema) {
  if (tema === "oscuro") {
    raiz.setAttribute("data-tema", "oscuro");
  } else {
    raiz.removeAttribute("data-tema");
  }
  btnTema.textContent = tema === "oscuro" ? "Tema claro" : "Tema oscuro";
  btnTema.setAttribute("aria-pressed", String(tema === "oscuro"));
}

aplicarTema(localStorage.getItem("tema") || "claro");

btnTema.addEventListener("click", () => {
  const nuevo = raiz.getAttribute("data-tema") === "oscuro" ? "claro" : "oscuro";
  localStorage.setItem("tema", nuevo);
  aplicarTema(nuevo);
});

/* ---------- 3. Validación del formulario (preventDefault) ---------- */
const formContacto = document.querySelector("#form-contacto");
const resultado = document.querySelector("#resultado-contacto");

function mostrarError(idCampo, mensaje) {
  const campo = document.querySelector("#" + idCampo);
  const error = document.querySelector("#error-" + idCampo);
  error.textContent = mensaje;
  campo.classList.toggle("invalido", mensaje !== "");
  return mensaje === "";
}

formContacto.addEventListener("submit", (evento) => {
  evento.preventDefault(); // evita que el navegador recargue la página

  const nombre = formContacto.nombre.value.trim();
  const correo = formContacto.correo.value.trim();
  const mensaje = formContacto.mensaje.value.trim();
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  const okNombre = mostrarError("nombre", nombre.length >= 2 ? "" : "Escribe al menos 2 letras.");
  const okCorreo = mostrarError("correo", correoValido ? "" : "Escribe un correo válido.");
  const okMensaje = mostrarError("mensaje", mensaje.length >= 10 ? "" : "El mensaje debe tener al menos 10 caracteres.");

  if (okNombre && okCorreo && okMensaje) {
    resultado.textContent = `Gracias, ${nombre}. Tu mensaje fue validado en el navegador.`;
    resultado.hidden = false;
    formContacto.reset();
  } else {
    resultado.hidden = true;
  }
});

/* ---------- 4. Lista de tareas (arreglos, objetos, DOM, localStorage) ---------- */
const formTarea = document.querySelector("#form-tarea");
const inputTarea = document.querySelector("#nueva-tarea");
const listaTareas = document.querySelector("#lista-tareas");
const contador = document.querySelector("#contador-tareas");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [
  { id: 1, texto: "Terminar la página en HTML", hecha: true },
  { id: 2, texto: "Aplicar estilos con CSS", hecha: false }
];

function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function dibujarTareas() {
  listaTareas.innerHTML = "";
  tareas.forEach((tarea) => {
    const li = document.createElement("li");
    li.classList.toggle("hecha", tarea.hecha);

    const casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.checked = tarea.hecha;
    casilla.setAttribute("aria-label", "Marcar como hecha: " + tarea.texto);
    casilla.addEventListener("change", () => {
      tarea.hecha = casilla.checked;
      guardar();
      dibujarTareas();
    });

    const texto = document.createElement("span");
    texto.textContent = tarea.texto;

    const borrar = document.createElement("button");
    borrar.type = "button";
    borrar.textContent = "Eliminar";
    borrar.addEventListener("click", () => {
      tareas = tareas.filter((t) => t.id !== tarea.id);
      guardar();
      dibujarTareas();
    });

    li.append(casilla, texto, borrar);
    listaTareas.append(li);
  });

  const pendientes = tareas.filter((t) => !t.hecha).length;
  contador.textContent = `${pendientes} pendiente(s) de ${tareas.length}`;
}

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = inputTarea.value.trim();
  if (texto === "") return;
  tareas.push({ id: Date.now(), texto, hecha: false });
  guardar();
  dibujarTareas();
  formTarea.reset();
  inputTarea.focus();
});

dibujarTareas();

/* ---------- 5. Consumir una API pública (fetch, async/await, try/catch) ---------- */
const btnFrase = document.querySelector("#btn-frase");
const textoFrase = document.querySelector("#texto-frase");

btnFrase.addEventListener("click", async () => {
  textoFrase.textContent = "Cargando…";
  try {
    const respuesta = await fetch("https://api.github.com/zen");
    if (!respuesta.ok) throw new Error("Error " + respuesta.status);
    textoFrase.textContent = await respuesta.text();
  } catch (error) {
    console.error(error);
    textoFrase.textContent = "No se pudo cargar la frase. Revisa tu conexión e inténtalo de nuevo.";
  }
});
