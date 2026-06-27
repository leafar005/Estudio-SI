## 2026-06-27T01:48:11Z
Implement Milestone 4: Apuntes Markdown.
You need to write logic in `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/scripts/generate.js` to compile the theory notes from the source documents and inject them into `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/apuntes/index.html`.

### Details
1. **Source documents**:
   - `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/teoria campus md/`
   - `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/Apuntes completos de Sistemas Inteligentes.md`
2. **Target file**:
   - `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/apuntes/index.html`
3. **Generation Logic in `generate.js`**:
   - Read the theory files and combine/truncate them so that for each of the 10 theory categories (`introduccion`, `busqueda`, `representacion`, `razonamiento`, `planificacion`, `conexionistas`, `neurona`, `feedforward`, `autoorganizacion`, `evolutiva`), the compiled markdown content is strictly between 20,000 and 45,000 characters.
   - For short topics (e.g. `neurona`, `feedforward`, `introduccion`), append content from the corresponding sections of `Apuntes completos de Sistemas Inteligentes.md` to ensure they meet the minimum 20k characters.
   - For long topics (e.g. `busqueda`, `autoorganizacion`, `evolutiva`), slice or clean the content to ensure it does not exceed 45k characters.
   - Replace the `const APUNTES_DATA = { ... };` object in `apuntes/index.html` using a regex replacement with the compiled JSON structure.
4. **Validation Logic in `validate.js`**:
   - Modify `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/scripts/validate.js` to extract `APUNTES_DATA` from `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/apuntes/index.html` (e.g. by using Node's `vm` module or regex) and assert that every one of the 10 categories has a string value with character length in range `[20000, 45000]`.
