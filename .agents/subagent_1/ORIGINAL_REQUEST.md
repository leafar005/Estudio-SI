## 2026-06-27T01:28:41Z
Create the validation script `scripts/validate.js` in `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/`.
The validation script must load `estudio-si/questions.js` and `shared/flashcards-data.js` using Node's `vm` module or another reliable method to extract the variables without browser global dependencies.
Verify the following rules in `scripts/validate.js`:
1. `QUESTIONS` must be a valid array.
2. Every object in `QUESTIONS` must contain all 9 properties: `category`, `type`, `question`, `options`, `correct`, `justification`, `trap`, `tags`, `source`.
3. `category` must be one of: "introduccion", "busqueda", "representacion", "razonamiento", "planificacion", "conexionistas", "neurona", "feedforward", "autoorganizacion", "evolutiva", "examen_2023", "examen_2024", "examen_mayo_2025", "examen_julio_2025", "examen_junio_2026".
4. `type` must be "vf" or "multi".
5. `question` must be a non-empty string.
6. `options` must be an array of strings. If `type` is "vf", options must be exactly `["Verdadero", "Falso"]`. If `type` is "multi", options must have 3 or 4 elements.
7. `correct` must be an integer, 0-based index of `options`.
8. `justification` must be a non-empty string.
9. `trap` must be a boolean.
10. `tags` must be an array of strings.
11. `source` must be a non-empty string.
12. `window.FlashcardsData` must be defined correctly as an object where the keys are the 10 theory categories ("introduccion", "busqueda", "representacion", "razonamiento", "planificacion", "conexionistas", "neurona", "feedforward", "autoorganizacion", "evolutiva").
13. Under each theory category key in `FlashcardsData`, there must be an array of objects with keys `q` (non-empty string) and `a` (non-empty string).

Verify the validation script by running `node scripts/validate.js` on the current codebase. Ensure it exits with code 0 on success (or prints errors if the current files fail validation). Report back with the output of the execution and the exact file path.
