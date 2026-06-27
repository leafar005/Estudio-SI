## 2026-06-26T23:42:01Z

Implement Milestone 3: Questions and Flashcards.
You need to generate `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/estudio-si/questions.js` and `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/shared/flashcards-data.js`.

### Requirements
1. **questions.js**:
   - Must define `const CATEGORIES` containing all 15 categories: `introduccion`, `busqueda`, `representacion`, `razonamiento`, `planificacion`, `conexionistas`, `neurona`, `feedforward`, `autoorganizacion`, `evolutiva`, `examen_2023`, `examen_2024`, `examen_mayo_2025`, `examen_julio_2025`, `examen_junio_2026`.
   - Must define `const QUESTIONS` as an array of objects.
   - Every question object must have all 9 keys: `category`, `type` ("vf" | "multi"), `question`, `options`, `correct` (0-based integer index), `justification`, `trap` (boolean), `tags` (array of strings), `source` (string).
   - There must be at least 30 questions for each of the 15 categories (total 450+ questions).
   - Extract the 40 questions from each of the 5 official exam files in `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/examenes SI/`. Map them to categories `examen_2023`, `examen_2024`, `examen_mayo_2025`, `examen_julio_2025`, `examen_junio_2026` respectively, with their source field set to the exam identifier. Keep their original long justifications.
   - For the 10 theory categories, extract questions from `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/Preguntas Extra SI.md` and invent new ones based on the theory files in `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/teoria campus md/` to reach at least 30 questions per theory category.

2. **flashcards-data.js**:
   - Must define `window.FlashcardsData` containing the 10 theory categories as keys.
   - Each category must contain at least 20 short and direct flashcards (`q` and `a` keys).

### Incremental Writing Strategy
Because the files are very large (approx 200kb - 300kb of content), do NOT try to write them in a single tool call as you will hit output size or token generation limits. Instead:
1. Create a skeleton of `questions.js` with `CATEGORIES` and an empty `QUESTIONS` array containing a placeholder comment (e.g. `// QUESTIONS_PLACEHOLDER`).
2. Create a skeleton of `flashcards-data.js` with the 10 keys mapping to empty arrays containing a placeholder comment.
3. In subsequent edits, replace the placeholders category by category (e.g., 2 or 3 categories at a time) with their complete lists of questions/flashcards.
4. Keep doing this until all 15 categories for questions and 10 categories for flashcards are fully populated.
