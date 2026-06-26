const CATEGORIES = [
  { id: "introduccion",    name: "1. Introducción a la IA",          icon: "🤖", part: "simbolica" },
  { id: "busqueda",        name: "2. Búsqueda",                      icon: "🔍", part: "simbolica" },
  { id: "representacion",  name: "3. Representación",                icon: "🧠", part: "simbolica" },
  { id: "razonamiento",    name: "4. Razonamiento",                  icon: "⚖️", part: "simbolica" },
  { id: "planificacion",   name: "5. Planificación",                 icon: "📋", part: "simbolica" },
  { id: "conexionistas",   name: "6. Sistemas Conexionistas",        icon: "🌐", part: "subsimbolica" },
  { id: "neurona",         name: "7. Neurona Formal y RNA",          icon: "⚡", part: "subsimbolica" },
  { id: "feedforward",     name: "8. Redes Feedforward",             icon: "➡️", part: "subsimbolica" },
  { id: "autoorganizacion",name: "9. Redes Autoorganizativas",       icon: "🔄", part: "subsimbolica" },
  { id: "evolutiva",       name: "10. Computación Evolutiva",        icon: "🧬", part: "subsimbolica" },
  // Categorías reservadas para exámenes (rellenar después)
  { id: "examen",          name: "Exámenes",                         icon: "📝", part: "examenes" }
];

/*
  SCHEMA de cada pregunta:
  {
    "category": "id_categoria",       // uno de los IDs de CATEGORIES
    "type": "vf" | "multi",           // vf = Verdadero/Falso, multi = opción múltiple
    "question": "texto de la pregunta",
    "options": ["opción A", "opción B", "opción C", "opción D"],
    "correct": 0,                     // índice (0-based) de la opción correcta
    "justification": "explicación detallada de por qué es correcta",
    "trap": false                     // true si es una pregunta trampa/confusa
  }

  Para tipo "vf", options siempre es ["Verdadero", "Falso"] y correct es 0 o 1.
  Para tipo "multi", options tiene entre 3 y 4 entradas.
*/

const QUESTIONS = [
  // Las preguntas se añadirán en la siguiente sesión
];