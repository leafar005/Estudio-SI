## 2026-06-27T00:06:39Z
You are the Verification Worker.
Your working directory is `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/.agents/worker_verification/`.
Your parent is the Project Orchestrator (conversation ID: d9b12dcd-fe90-47ee-b868-5db03e5fb0de).

### Mission
Run and verify the automated build and validation of the Estudio-SI study web.

### Tasks
1. Run the validation script using `node scripts/validate.js` in `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/`.
2. Document the complete output and exit code of the execution.
3. Check and verify the generated files on disk:
   - `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/estudio-si/questions.js` (Verify size, syntax, and contents: 15 categories, >= 30 questions per category, valid QUESTIONS array)
   - `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/shared/flashcards-data.js` (Verify size, syntax, and contents: 10 categories, >= 20 flashcards per category)
   - `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/apuntes/index.html` (Verify APUNTES_DATA exists and has lengths between 20k and 45k characters for each of the 10 categories)
   - `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/guia/examen_2023.html`, `examen_2024.html`, `examen_mayo_2025.html`, `examen_julio_2025.html`, `examen_junio_2026.html` (Verify they exist, are non-empty, and contain inline <svg> code).
4. Perform syntax checks (e.g. `node -c`) on the generated files.
5. Write your findings to `/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/.agents/worker_verification/handoff.md`.
6. Send a message to your parent with the handoff report path and a summary of your findings.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
