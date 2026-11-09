# Proyecto del curso · Página personal

El mismo proyecto evoluciona a lo largo del curso. Cada carpeta es una etapa.

| Carpeta | Módulo | Qué contiene |
|---|---|---|
| `modulo2-html/` | HTML | `pasos/` (demo en vivo), `plantilla/` (para estudiantes) y `completo/` (solución) |
| `modulo3-css/` | CSS | La misma página con `css/estilos.css`: variables, modelo de caja, Flexbox, Grid, media queries y mobile first |
| `modulo4-js/` | JavaScript | Lo anterior más `js/main.js`: DOM, eventos, validación, `localStorage`, tema oscuro, lista de tareas y `fetch` |

Cada carpeta se abre con Live Server (clic derecho sobre `index.html` > Open with Live Server).

## Módulo 2 · HTML (carpeta `modulo2-html`)

1. **Demostración en vivo:** `pasos/paso1.html` a `paso5.html`; escribir el código a mano mientras se avanza.
2. **Práctica:** entregar `plantilla/` y pedir completar los TODO 1 a 7.
3. **Referencia del docente:** `completo/`.
4. Entregable: página en HTML puro, sin estilos, con estructura semántica correcta.

## Módulo 3 · CSS (carpeta `modulo3-css`)

Abrir `css/estilos.css` por bloques, en este orden:

1. Variables en `:root` y `box-sizing: border-box`.
2. Tipografía, colores y fondo del `body`.
3. Barra de navegación con **Flexbox** (`header`, `nav ul`) y `:hover`.
4. Tarjetas (`section`): padding, bordes redondeados y sombra.
5. Galería con **Grid** (`.galeria`) y `gap`.
6. Tabla con zebra (`nth-child`) y formulario con `:focus-visible`.
7. **Media query** `min-width: 768px` (mobile first) y prueba con F12 en modo móvil.

Entregable: página estilizada que se vea bien en celular y en computador.

## Módulo 4 · JavaScript (carpeta `modulo4-js`)

Abrir `js/main.js` por bloques (el script se enlaza con `defer`):

1. Año actual en el pie: `querySelector` y `textContent`.
2. Tema claro/oscuro: `addEventListener` y `localStorage`.
3. Validación del formulario: `submit`, `preventDefault`, expresión regular y mensajes de error.
4. Lista de tareas: arreglo de objetos, `createElement`, `filter`, guardar y cargar con `JSON`.
5. `fetch` a una API pública con `async/await` y `try/catch` (muestra un mensaje si falla la conexión).

Entregable: aplicación interactiva con DOM, eventos y al menos una llamada a una API.

## Errores para provocar a propósito

- HTML: quitar un cierre `</strong>`; cambiar la ruta de una imagen; quitar `meta charset`.
- CSS: quitar `box-sizing: border-box`; probar sin `meta viewport`; abusar de `!important`.
- JS: quitar `defer` y ver el error en la consola; usar `=` en vez de `===`; olvidar `await`.

## Nota sobre la API

El ejemplo usa `https://api.github.com/zen`, que devuelve una frase en texto. Necesita internet; si no hay conexión, la página muestra un mensaje de error en vez de fallar.
