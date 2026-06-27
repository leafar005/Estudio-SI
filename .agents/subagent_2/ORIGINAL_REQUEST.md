## 2026-06-26T23:32:01Z
<USER_REQUEST>
Implement Milestone 2: Examenes HTML & SVG.
There is a Python script `guia/build_exams.py` that is supposed to generate the HTML exam guides with inline SVGs, but the output files are currently empty or incomplete.
Please do the following:
1. Analyze and debug `guia/build_exams.py`.
2. Fix any bugs in `guia/build_exams.py`. In particular:
   - Handle CRLF (`\r\n`) line endings safely by stripping whitespace/newlines.
   - Fix the wikilink image parser regex to support optional width parameters (e.g., `![[grafo3.png|600]]` or `![[grafo2 1.png|400]]`) so that they are correctly mapped to their corresponding keys in `SVGS` (e.g. `grafo3.png` and `grafo2 1.png`).
   - Verify that the generated HTML output files contain all questions and correct SVGs.
3. Run the python script to build the exam HTML pages in `guia/`.
4. Verify that the 5 files `examen_2023.html`, `examen_2024.html`, `examen_mayo_2025.html`, `examen_julio_2025.html`, and `examen_junio_2026.html` are generated and have correct, non-empty HTML contents containing all questions and inline SVGs.
5. Provide a summary of the bug fixes and the output of the script execution.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

</USER_REQUEST>
