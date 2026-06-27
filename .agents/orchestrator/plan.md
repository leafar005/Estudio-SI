# Project Plan: Estudio-SI Autonomous Content Generation

## Architecture
- `scripts/validate.js`: Validation script to verify data formats programmatically.
- `guia/`: Contains 5 HTML guides for the official exams (2023, 2024, mayo 2025, julio 2025, junio 2026), incorporating exact inline SVGs.
- `estudio-si/questions.js`: Main questions file containing at least 30 questions per category (15 categories total).
- `shared/flashcards-data.js`: Flashcards file containing at least 20 flashcards per category (10 categories total).
- `apuntes/index.html`: Embedding massive Markdown data for the 10 theory categories.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Validator Script | Implement `scripts/validate.js` to assert structural correctness of `questions.js` and `flashcards-data.js`. | None | DONE |
| M2 | Examenes HTML & SVG | Run `build_exams.py` via a worker or implement it to generate HTML and ensure correct inline SVGs. | M1 | DONE |
| M3 | Questions & Flashcards | Synthesize questions and flashcards from theory/exams to reach thresholds. | M1 | DONE |
| M4 | Apuntes Markdown | Fill `APUNTES_DATA` with 20k-45k characters of content per topic. | M1 | DONE |
| M5 | E2E Verification & Audit | Run all validation checks, run test cases, verify integrity with auditor. | M1, M2, M3, M4 | DONE |

## Interface Contracts & Schemas
- **questions.js**:
  `QUESTIONS` array of objects with keys: `category`, `type` ("vf" | "multi"), `question`, `options` (array of strings, e.g. ["A", "B", "C", "D"] or ["Verdadero", "Falso"]), `correct` (index), `justification`, `trap` (boolean), `tags` (array of strings), `source` (string).
- **flashcards-data.js**:
  `window.FlashcardsData` object with keys matching categories, where each is an array of `{ "q": "...", "a": "..." }`.
- **apuntes/index.html**:
  `APUNTES_DATA` object with keys matching categories, containing markdown strings of 20k-45k characters.
