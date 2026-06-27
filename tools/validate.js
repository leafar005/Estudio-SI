const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Run generator to parse exams and extra questions, populating the target files.
try {
  const { runGeneration } = require('./generate.js');
  runGeneration();
} catch (err) {
  console.error('Failed to run generator:', err.message);
}

function runValidation() {
  const errors = [];

  // 1. Resolve paths
  const questionsPath = path.resolve(__dirname, '../estudio-si/questions.js');
  const flashcardsPath = path.resolve(__dirname, '../shared/flashcards-data.js');

  // Check file existence
  if (!fs.existsSync(questionsPath)) {
    console.error(`Error: File not found at ${questionsPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(flashcardsPath)) {
    console.error(`Error: File not found at ${flashcardsPath}`);
    process.exit(1);
  }

  // 2. Read file contents
  const questionsContent = fs.readFileSync(questionsPath, 'utf8');
  const flashcardsContent = fs.readFileSync(flashcardsPath, 'utf8');

  // 3. Load questions.js using Node vm
  let QUESTIONS;
  try {
    const sandbox = {};
    const result = vm.runInNewContext(questionsContent + '\n; ({ QUESTIONS });', sandbox);
    QUESTIONS = result.QUESTIONS;
  } catch (err) {
    console.error('Failed to parse questions.js:', err.message);
    process.exit(1);
  }

  // 4. Load flashcards-data.js using Node vm
  let FlashcardsData;
  try {
    const sandbox = { window: {} };
    vm.runInNewContext(flashcardsContent, sandbox);
    FlashcardsData = sandbox.window.FlashcardsData;
  } catch (err) {
    console.error('Failed to parse flashcards-data.js:', err.message);
    process.exit(1);
  }

  // Rule 1: QUESTIONS must be a valid array.
  if (!Array.isArray(QUESTIONS)) {
    errors.push('QUESTIONS must be a valid array.');
  } else {
    // Rule 3: Valid categories list
    const allowedCategories = [
      "introduccion", "busqueda", "representacion", "razonamiento", "planificacion",
      "conexionistas", "neurona", "feedforward", "autoorganizacion", "evolutiva",
      "examen_2023", "examen_2024", "examen_mayo_2025", "examen_julio_2025", "examen_junio_2026"
    ];

    const expectedKeys = ['category', 'type', 'question', 'options', 'correct', 'justification', 'trap', 'tags', 'source'];

    QUESTIONS.forEach((q, idx) => {
      const prefix = `QUESTIONS[${idx}]:`;

      if (typeof q !== 'object' || q === null) {
        errors.push(`${prefix} is not a valid object.`);
        return;
      }

      // Rule 2: Every object must contain all 9 properties
      const missingKeys = expectedKeys.filter(key => !(key in q));
      if (missingKeys.length > 0) {
        errors.push(`${prefix} is missing properties: ${missingKeys.join(', ')}`);
      }

      const extraKeys = Object.keys(q).filter(key => !expectedKeys.includes(key));
      if (extraKeys.length > 0) {
        errors.push(`${prefix} contains extra properties: ${extraKeys.join(', ')}`);
      }

      if (missingKeys.length > 0) {
        // Skip further checks for this item if essential keys are missing
        return;
      }

      // Rule 3: category check
      if (!allowedCategories.includes(q.category)) {
        errors.push(`${prefix} category "${q.category}" is invalid.`);
      }

      // Rule 4: type check
      if (q.type !== 'vf' && q.type !== 'multi') {
        errors.push(`${prefix} type "${q.type}" is invalid (must be "vf" or "multi").`);
      }

      // Rule 5: question check
      if (typeof q.question !== 'string' || q.question.trim().length === 0) {
        errors.push(`${prefix} question must be a non-empty string.`);
      }

      // Rule 6: options check
      if (!Array.isArray(q.options)) {
        errors.push(`${prefix} options must be an array.`);
      } else {
        const nonStringOpts = q.options.filter(opt => typeof opt !== 'string');
        if (nonStringOpts.length > 0) {
          errors.push(`${prefix} options must contain only strings.`);
        }

        if (q.type === 'vf') {
          if (q.options.length !== 2 || q.options[0] !== 'Verdadero' || q.options[1] !== 'Falso') {
            errors.push(`${prefix} options for "vf" type must be exactly ["Verdadero", "Falso"]. Got: ${JSON.stringify(q.options)}`);
          }
        } else if (q.type === 'multi') {
          if (q.options.length !== 3 && q.options.length !== 4 && q.options.length !== 5) {
            errors.push(`${prefix} options for "multi" type must have 3, 4, or 5 elements. Got: ${q.options.length}`);
          }
        }
      }

      // Rule 7: correct check
      if (!Number.isInteger(q.correct)) {
        errors.push(`${prefix} correct must be an integer.`);
      } else if (Array.isArray(q.options)) {
        if (q.correct < 0 || q.correct >= q.options.length) {
          errors.push(`${prefix} correct (${q.correct}) must be a valid 0-based index of options (0 to ${q.options.length - 1}).`);
        }
      }

      // Rule 8: justification check
      if (typeof q.justification !== 'string' || q.justification.trim().length === 0) {
        errors.push(`${prefix} justification must be a non-empty string.`);
      }

      // Rule 9: trap check
      if (typeof q.trap !== 'boolean') {
        errors.push(`${prefix} trap must be a boolean.`);
      }

      // Rule 10: tags check
      if (!Array.isArray(q.tags)) {
        errors.push(`${prefix} tags must be an array.`);
      } else {
        const nonStringTags = q.tags.filter(tag => typeof tag !== 'string');
        if (nonStringTags.length > 0) {
          errors.push(`${prefix} tags must contain only strings.`);
        }
      }

      // Rule 11: source check
      if (typeof q.source !== 'string' || q.source.trim().length === 0) {
        errors.push(`${prefix} source must be a non-empty string.`);
      }
    });
  }

  // Rule 12: window.FlashcardsData definition and theory keys validation
  const theoryCategories = [
    "introduccion", "busqueda", "representacion", "razonamiento", "planificacion",
    "conexionistas", "neurona", "feedforward", "autoorganizacion", "evolutiva"
  ];

  if (typeof FlashcardsData !== 'object' || FlashcardsData === null) {
    errors.push('window.FlashcardsData must be defined correctly as an object.');
  } else {
    const keys = Object.keys(FlashcardsData);
    
    // Check that we have exactly the 10 theory categories
    const missingKeys = theoryCategories.filter(cat => !keys.includes(cat));
    if (missingKeys.length > 0) {
      errors.push(`FlashcardsData is missing theory categories: ${missingKeys.join(', ')}`);
    }

    const extraKeys = keys.filter(key => !theoryCategories.includes(key));
    if (extraKeys.length > 0) {
      errors.push(`FlashcardsData contains extra categories: ${extraKeys.join(', ')}`);
    }

    // Rule 13: Under each category, check format
    theoryCategories.forEach(category => {
      const items = FlashcardsData[category];
      if (!Array.isArray(items)) {
        errors.push(`FlashcardsData["${category}"] must be an array.`);
        return;
      }

      items.forEach((item, idx) => {
        const prefix = `FlashcardsData["${category}"][${idx}]:`;

        if (typeof item !== 'object' || item === null) {
          errors.push(`${prefix} is not a valid object.`);
          return;
        }

        const itemKeys = Object.keys(item);
        if (itemKeys.length !== 2 || !('q' in item) || !('a' in item)) {
          errors.push(`${prefix} must contain exactly "q" and "a" properties. Got: ${JSON.stringify(itemKeys)}`);
        }

        if ('q' in item && (typeof item.q !== 'string' || item.q.trim().length === 0)) {
          errors.push(`${prefix} key "q" must be a non-empty string.`);
        }

        if ('a' in item && (typeof item.a !== 'string' || item.a.trim().length === 0)) {
          errors.push(`${prefix} key "a" must be a non-empty string.`);
        }
      });
    });
  }

  // --- Milestone 4: Validation of APUNTES_DATA ---
  const apuntesHtmlPath = path.resolve(__dirname, '../apuntes/index.html');
  if (!fs.existsSync(apuntesHtmlPath)) {
    errors.push(`apuntes/index.html not found at ${apuntesHtmlPath}`);
  } else {
    const htmlContent = fs.readFileSync(apuntesHtmlPath, 'utf8');
    const match = htmlContent.match(/const APUNTES_DATA = (\{[\s\S]*?\});\s*document\.addEventListener/);
    if (!match) {
      errors.push('Could not find const APUNTES_DATA in index.html');
    } else {
      let APUNTES_DATA;
      try {
        const sandbox = {};
        const result = vm.runInNewContext('(' + match[1] + ')', sandbox);
        APUNTES_DATA = result;
      } catch (err) {
        errors.push('Failed to parse APUNTES_DATA from index.html: ' + err.message);
      }

      if (APUNTES_DATA) {
        const expectedCategories = [
          "introduccion", "busqueda", "representacion", "razonamiento", "planificacion",
          "conexionistas", "neurona", "feedforward", "autoorganizacion", "evolutiva"
        ];

        expectedCategories.forEach(cat => {
          if (!(cat in APUNTES_DATA)) {
            errors.push(`APUNTES_DATA is missing category "${cat}".`);
            return;
          }

          const val = APUNTES_DATA[cat];
          if (typeof val !== 'string') {
            errors.push(`APUNTES_DATA["${cat}"] must be a string. Got: ${typeof val}`);
            return;
          }

          const len = val.length;
          if (len < 20000 || len > 45000) {
            errors.push(`APUNTES_DATA["${cat}"] length ${len} is out of range [20000, 45000].`);
          } else {
            console.log(`Verified category "${cat}" length: ${len} (OK)`);
          }
        });
      }
    }
  }

  // --- Check generated exam HTML files ---
  const examHtmlFiles = [
    'examen_2023.html',
    'examen_2024.html',
    'examen_mayo_2025.html',
    'examen_julio_2025.html',
    'examen_junio_2026.html'
  ];

  examHtmlFiles.forEach(file => {
    const filePath = path.resolve(__dirname, '../guia', file);
    if (!fs.existsSync(filePath)) {
      errors.push(`Exam HTML file not found: ${file}`);
    } else {
      const stats = fs.statSync(filePath);
      if (stats.size === 0) {
        errors.push(`Exam HTML file is empty: ${file}`);
      } else {
        console.log(`Verified exam HTML file: ${file} (size: ${stats.size} bytes)`);
      }
    }
  });

  // Print results
  if (errors.length > 0) {
    console.error('Validation FAILED:');
    errors.forEach(err => console.error(`- ${err}`));
    process.exit(1);
  } else {
    console.log('Validation PASSED successfully.');
    process.exit(0);
  }
}

runValidation();

