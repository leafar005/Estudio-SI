## 2026-06-26T23:51:52Z

Implement the JS-based exam HTML generation inside `scripts/generate.js` and update `scripts/validate.js` to verify it.

### Background
Currently, `guia/build_exams.py` is a Python script that generates the exam HTML files inside `guia/`, but executing it requires Python process execution which fails due to timeouts. Since `scripts/generate.js` already parses the exam markdown files to extract questions, we can easily generate the exam HTML files directly in JS within `generate.js` without any external Python dependency.

### Instructions
1. Read `guia/build_exams.py` to extract the `HTML_TEMPLATE` and the `SVGS` dictionary (which contains the inline SVG markup for the graphs/trees).
2. Integrate these into `scripts/generate.js`.
3. In `scripts/generate.js`, implement the HTML rendering logic for the exams:
   - For each of the 5 official exams, take the parsed questions and render them into the HTML template.
   - Ensure that any image wikilink like `![[grafo1.png]]` or `![[grafo3.png|600]]` in the question text is replaced with the corresponding inline SVG from the `SVGS` dictionary.
   - Write the generated HTML to `guia/examen_<name_slug>.html` (matching the names: `examen_2023.html`, `examen_2024.html`, `examen_mayo_2025.html`, `examen_julio_2025.html`, and `examen_junio_2026.html`).
   - Update `guia/index.html` to link to the 5 generated HTML files (robustly matching the logic in `build_exams.py`).
4. Modify `scripts/validate.js` to also check that the 5 HTML files exist in `guia/` and are non-empty.

This will consolidate all build steps (questions, flashcards, apuntes, and exam guides) into a single Node.js script execution.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
