# Original User Request

## Initial Request — 2026-06-27T01:27:58+02:00

Generar de forma autónoma todo el contenido de la web de estudio **Estudio-SI** (Sistemas Inteligentes) sintetizando la teoría y exámenes del repositorio en 3 ficheros de datos (questions, flashcards, apuntes) y 5 ficheros HTML de exámenes con SVG.

Working directory: `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/`

Integrity mode: development

## Requirements

### R1. Fichero de Preguntas (`Estudio-SI/estudio-si/questions.js`)
Extraer todas las preguntas de los 5 exámenes oficiales de `2026/examenes SI/` e inventar nuevas basándose en la teoría (`2026/teoria campus md/`) hasta sumar al menos 30 por categoría. Respetar el schema estricto (`category`, `type`, `question`, `options`, `correct`, `justification`, `trap`, `tags`, `source`). Mantener las justificaciones largas originales.

### R2. Fichero de Flashcards (`Estudio-SI/shared/flashcards-data.js`)
Generar al menos 20 flashcards cortas y directas para cada una de las categorías temáticas basadas en la teoría.

### R3. Apuntes de Teoría (`Estudio-SI/apuntes/index.html`)
Rellenar el objeto `APUNTES_DATA` embebido en el HTML con contenido Markdown exhaustivo (20k-45k caracteres por tema). Debe incluir definiciones, pseudocódigos, tablas, fórmulas matemáticas en LaTeX y alertas visuales resaltando trampas de examen.

### R4. Guías de Resolución de Exámenes (`Estudio-SI/guia/`)
Crear 5 ficheros HTML independientes para cada examen. Replicar de manera exacta los grafos y árboles descritos en el prompt utilizando código SVG inline dentro del propio HTML.

### R5. Verificación Automática (Validation Script)
Crear un script Node.js en `Estudio-SI/scripts/validate.js` que el equipo deberá ejecutar para asegurar que:
1. `questions.js` define `QUESTIONS` como un array válido y verifica la existencia de todas las propiedades del schema (incluidas `tags` y `source`).
2. `flashcards-data.js` define `window.FlashcardsData` correctamente.

## Acceptance Criteria

### Verificación de Formato (Programática)
- [ ] El script `node scripts/validate.js` se ejecuta sin lanzar errores y confirma que los esquemas son correctos.

### Verificación de Contenido
- [ ] Hay al menos 30 preguntas por categoría temática en `questions.js`.
- [ ] Hay al menos 20 flashcards por categoría temática en `flashcards-data.js`.
- [ ] El fichero `apuntes/index.html` contiene el objeto `APUNTES_DATA` relleno con contenido masivo en Markdown.
- [ ] Los 5 ficheros de guía de examen existen y cada uno incluye los SVGs especificados (grafos/árboles) dibujados con código `<svg>`.
