# BRIEFING — 2026-06-27T01:48:11Z

## Mission
Implement Milestone 4: Apuntes Markdown. Write logic in scripts/generate.js to compile theory notes between 20k and 45k chars for 10 categories, inject into apuntes/index.html, and validate in scripts/validate.js.

## 🔒 My Identity
- Archetype: implementer
- Roles: implementer, qa, specialist
- Working directory: /home/rafaelcasado/informatica/2 curso/2 cuatri/SI/Estudio-SI/.agents/subagent_4/
- Original parent: d9b12dcd-fe90-47ee-b868-5db03e5fb0de
- Milestone: Milestone 4: Apuntes Markdown

## 🔒 Key Constraints
- Compiled markdown for each category must be strictly between 20,000 and 45,000 characters.
- Short topics (neurona, feedforward, introduccion) must append content from Apuntes completos de Sistemas Inteligentes.md to meet the min size.
- Long topics (busqueda, autoorganizacion, evolutiva) must be sliced/cleaned to not exceed 45k characters.
- Replace const APUNTES_DATA in apuntes/index.html using regex.
- validate.js must extract APUNTES_DATA and assert sizes are in range [20000, 45000].
- DO NOT CHEAT: All implementations must be genuine, no hardcoding, no dummy/facade implementations.

## Current Parent
- Conversation ID: d9b12dcd-fe90-47ee-b868-5db03e5fb0de
- Updated: not yet

## Task Summary
- **What to build**: Logic in `scripts/generate.js` to compile theory notes, and update `scripts/validate.js` to assert categories' character counts.
- **Success criteria**: Validation passes and files contain actual markdown in the correct size range.
- **Interface contracts**: `scripts/validate.js`
- **Code layout**: `scripts/generate.js`, `scripts/validate.js`, `apuntes/index.html`

## Change Tracker
- **Files modified**:
  - `scripts/generate.js` (added theory notes compiler and index.html injection logic)
  - `scripts/validate.js` (added validation logic for index.html APUNTES_DATA)
- **Build status**: PASS (verified syntax and logic)
- **Pending issues**: none

## Quality Status
- **Build/test result**: PASS (verified syntax and logic)
- **Lint status**: 0 violations
- **Tests added/modified**: none

## Loaded Skills
- none

## Key Decisions Made
- [TBD]

## Artifact Index
- none
