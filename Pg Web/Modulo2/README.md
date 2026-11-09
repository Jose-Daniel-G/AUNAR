# Proyecto del Módulo 2 · Página personal en HTML

Proyecto para explicar y practicar HTML durante las clases 3 y 4. No usa CSS ni JavaScript.

## Carpetas

| Carpeta | Para qué sirve |
|---|---|
| `pasos/` | Cinco versiones acumulativas para la demostración en vivo (`paso1.html` a `paso5.html`) |
| `plantilla/` | Archivo con comentarios `TODO` para que los estudiantes lo completen |
| `completo/` | Solución de referencia: `index.html`, `paginas/proyectos.html` e `img/` |

## Cómo usarlo en clase

1. Abre la carpeta del proyecto en **VS Code** e inicia **Live Server** (clic derecho sobre el archivo > Open with Live Server).
2. **Clase 3, demostración (10 min):** abre `pasos/paso1.html`, explica cada parte y avanza a `paso2.html` y `paso3.html` mostrando qué se agregó. Pide que escriban el código a mano en vez de copiarlo.
3. **Clase 3, práctica (70 min):** entrega `plantilla/` y pide completar los TODO 1 a 4 (estructura, encabezado, sobre mí e intereses).
4. **Clase 4, demostración:** muestra `paso4.html` (tabla) y `paso5.html` (formulario, footer).
5. **Clase 4, práctica (65 min):** completar los TODO 5 a 7, revisar con el validador del W3C (https://validator.w3.org) y probar la navegación con la tecla Tab.
6. **Ampliación:** `completo/paginas/proyectos.html` sirve para practicar rutas relativas (`../index.html`, `../img/foto.jpg`).

## Puntos para explicar con el código

- **Estructura:** `DOCTYPE`, `html lang`, `meta charset`, `viewport` y `title`.
- **Semántica:** `header`, `nav`, `main`, `section`, `footer`; un solo `h1`.
- **Rutas:** `img/foto.jpg` desde `index.html` y `../index.html` desde `paginas/proyectos.html`.
- **Accesibilidad:** `alt` en la imagen, `label for` + `id` en cada campo, `caption` y `th scope` en la tabla.
- **Formulario:** `required` y `placeholder` ayudan, pero la validación real se hace en el servidor (Módulo 5).

## Errores que conviene provocar a propósito

- Quitar un cierre `</strong>` y ver cómo se propaga la negrita.
- Cambiar `img/foto.jpg` por una ruta equivocada y ver el texto `alt`.
- Quitar `meta charset` y escribir una tilde para ver el efecto.

## Rúbrica del entregable (sobre 5,0)

Estructura base 0,8 · Semántica 1,0 · Contenido 1,2 · Formulario 1,0 · Accesibilidad 0,6 · Orden del código 0,4.
