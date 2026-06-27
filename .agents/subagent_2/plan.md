# Plan — Milestone 2: Examenes HTML & SVG

## Steps
1. **Analyze and verify the bugs** in `guia/build_exams.py`:
   - Inspect line endings handling (`\r\n` vs `\n`).
   - Inspect regex matching for `![[image.png|width]]`.
   - Inspect HTML template structure and newline replacement.
2. **Apply fixes** to `guia/build_exams.py`:
   - Replace the splitting logic with robust line parsing:
     - Replace `\r\n` with `\n` and split by `\n`, then strip each line, or use `splitlines()` and strip.
     - Replace `lines = content.split('\\n')` with `lines = [line.strip() for line in content.splitlines()]`.
   - Update the image regex parser to extract the base name from `![[image.png|width]]` by splitting on `|` and stripping.
   - Improve the `index.html` regex replacement to support multiple runs.
3. **Execute `guia/build_exams.py`**:
   - Run the script to generate the 5 exam HTML files under `guia/`.
4. **Verify the generated outputs**:
   - Verify that `examen_2023.html`, `examen_2024.html`, `examen_mayo_2025.html`, `examen_julio_2025.html`, and `examen_junio_2026.html` are generated.
   - Verify their content is non-empty, and contains all questions and inline SVGs.
   - Verify that `index.html` is updated.
