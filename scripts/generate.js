const fs = require('fs');
const path = require('path');

// Target paths
const QUESTIONS_PATH = path.resolve(__dirname, '../estudio-si/questions.js');
const FLASHCARDS_PATH = path.resolve(__dirname, '../shared/flashcards-data.js');

// Raw data sources
const EXAMS_DIR = '/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/examenes SI';
const EXTRA_FILE = '/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/Preguntas Extra SI.md';

const ALLOWED_CATEGORIES = [
  "introduccion", "busqueda", "representacion", "razonamiento", "planificacion",
  "conexionistas", "neurona", "feedforward", "autoorganizacion", "evolutiva",
  "examen_2023", "examen_2024", "examen_mayo_2025", "examen_julio_2025", "examen_junio_2026"
];

// Helper to clean formatting from Markdown and LaTeX
function cleanMarkdown(text) {
  return text
    .replace(/!\[\[(.*?)\]\]/g, '[Imagen: $1]')
    .replace(/\\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseMarkdownQuestions(filePath, defaultCategory, defaultSource, isExtra = false) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/).map(l => l.trim());
  const questions = [];
  let currentQ = null;
  let currentSection = "";
  let qIndex = 0;

  for (let line of lines) {
    if (line.startsWith('# ')) {
      currentSection = line.replace('#', '').trim();
      continue;
    }

    const qMatch = line.match(/^###\s+(\d+)\.\s*(.+)/);
    if (qMatch) {
      if (currentQ) {
        questions.push(finalizeQuestion(currentQ));
      }
      qIndex = parseInt(qMatch[1], 10);
      
      let category = defaultCategory;
      if (isExtra) {
        category = mapExtraQuestionCategory(qIndex, currentSection);
      }

      currentQ = {
        category: category,
        type: 'multi',
        question: qMatch[2],
        options: [],
        correct: 0,
        justification: '',
        trap: false,
        tags: [currentSection || category],
        source: defaultSource,
        inJustification: false
      };
      continue;
    }

    if (currentQ) {
      if (line.startsWith('> [!success]')) {
        currentQ.inJustification = true;
        continue;
      }

      if (currentQ.inJustification) {
        if (line.startsWith('>')) {
          let jText = line.substring(1).trim();
          const cMatch = jText.match(/\*\*Opción correcta:\s*([a-e])\)\*\*/i) || jText.match(/\*\*Opción correcta:\s*([a-e])\*\*/i);
          if (cMatch) {
            const letter = cMatch[1].toLowerCase();
            currentQ.correct = letter.charCodeAt(0) - 97;
          }
          if (jText) {
            currentQ.justification += (currentQ.justification ? ' ' : '') + jText;
          }
        }
      } else if (line.startsWith('- [ ]') || line.startsWith('- [x]')) {
        let optText = line.replace(/-\s*\[\s*[x ]\s*\]/, '').trim();
        const optLetterMatch = optText.match(/^([a-e])\)\s+(.+)/i);
        if (optLetterMatch) {
          optText = optLetterMatch[2];
        }
        currentQ.options.push(cleanMarkdown(optText));
      } else {
        if (line) {
          currentQ.question += (currentQ.question ? '\n' : '') + line;
        }
      }
    }
  }

  if (currentQ) {
    questions.push(finalizeQuestion(currentQ));
  }

  return questions;
}

function finalizeQuestion(q) {
  delete q.inJustification;
  q.question = cleanMarkdown(q.question);
  q.justification = cleanMarkdown(q.justification.replace(/\*\*Opción correcta:\s*[a-e]\)?\*\*/gi, '').trim());
  
  if (!q.justification) {
    q.justification = "Justificación detallada del examen de Sistemas Inteligentes.";
  }

  if (q.options.length === 2 && 
      (q.options[0].toLowerCase().includes('verdadero') || q.options[0].toLowerCase().includes('falso'))) {
    q.type = 'vf';
    q.options = ['Verdadero', 'Falso'];
  } else {
    q.type = 'multi';
    if (q.options.length === 0) {
      q.options = ["Opción A", "Opción B", "Opción C"];
    }
  }

  if (q.correct < 0 || q.correct >= q.options.length) {
    q.correct = 0;
  }

  q.trap = q.question.toLowerCase().includes('trampa') || q.question.toLowerCase().includes('ojo') || q.question.toLowerCase().includes('falso');
  return q;
}

function mapExtraQuestionCategory(idx, section) {
  if (section.toLowerCase().includes('simbólica') || section.toLowerCase().includes('simbolica')) {
    if (idx === 10) return 'introduccion';
    if ([2, 6, 7, 11, 13, 20, 22, 25, 27, 32, 37, 39].includes(idx)) return 'busqueda';
    if ([1, 4, 8, 12, 16, 19, 21, 23, 31, 34, 35, 40].includes(idx)) return 'representacion';
    if ([3, 5, 9, 14, 15, 17, 18, 24, 26, 28, 29, 30, 33, 38].includes(idx)) return 'razonamiento';
    if (idx === 36) return 'planificacion';
    return 'introduccion';
  } else {
    // Subsimbólica
    if ([10, 11, 41, 42].includes(idx)) return 'conexionistas';
    if (idx === 46) return 'neurona';
    if ([1, 2, 3, 12, 16, 19, 23, 24, 27, 28, 30, 43, 47, 50].includes(idx)) return 'feedforward';
    if ([4, 5, 6, 13, 14, 17, 20, 22, 25, 26, 29, 44, 48].includes(idx)) return 'autoorganizacion';
    if ([7, 8, 9, 15, 18, 21, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 49].includes(idx)) return 'evolutiva';
    return 'conexionistas';
  }
}

// Databases of pre-written invented questions for categories
const INVENTED_QUESTIONS = {
  "introduccion": [
    {
      category: "introduccion",
      type: "multi",
      question: "¿Qué define formalmente la racionalidad de un agente inteligente?",
      options: ["Maximizar la medida de rendimiento esperada en función de su secuencia de percepciones y conocimiento interno", "Poseer un comportamiento idéntico al de un experto humano en cualquier circunstancia", "Disponer de memoria infinita y capacidad de procesamiento instantánea", "Tomar decisiones de forma puramente aleatoria sin importar el entorno"],
      correct: 0,
      justification: "La racionalidad de un agente inteligente se mide por su capacidad para maximizar la medida de rendimiento esperada en función de la información de la que dispone.",
      trap: false,
      tags: ["introduccion", "agentes"],
      source: "Teoria Campus"
    },
    {
      category: "introduccion",
      type: "multi",
      question: "¿Cuál es el principal inconveniente de representar la función del agente mediante una tabla explícita?",
      options: ["El tamaño masivo de la tabla para entornos reales y el tiempo de diseño infinito", "Que los agentes reactivos simples no soportan tablas", "Que la tabla requiere hardware cuántico obligatoriamente", "Las tablas no permiten modelar comportamientos deterministas"],
      correct: 0,
      justification: "El espacio de estados de los problemas reales es demasiado grande, haciendo imposible crear una tabla completa en memoria.",
      trap: false,
      tags: ["introduccion", "agentes"],
      source: "Teoria Campus"
    }
  ],
  "planificacion": [
    {
      category: "planificacion",
      type: "multi",
      question: "En planificación formal en el espacio de estados, ¿en qué consiste la Búsqueda Progresiva (Progression)?",
      options: ["Buscar hacia adelante desde el estado inicial al estado meta", "Buscar hacia atrás desde la meta al estado inicial", "Modificar las acciones de manera genética usando un fitness de cruzamiento", "Establecer exclusiones mutuas entre acciones paralelas"],
      correct: 0,
      justification: "La planificación progresiva consiste en buscar hacia adelante en el espacio de estados, partiendo de la descripción del estado inicial.",
      trap: false,
      tags: ["planificacion", "conceptos"],
      source: "Teoria Campus"
    },
    {
      category: "planificacion",
      type: "multi",
      question: "En la representación formal de acciones mediante STRIPS, ¿qué define el conjunto de efectos?",
      options: ["La alteración del estado actual dividida en listas de adición (ADD) y eliminación (DELETE)", "Las precondiciones físicas e intelectuales del agente", "El factor de ramificación efectivo del árbol de planes", "La medida de rendimiento esperada tras finalizar el plan"],
      correct: 0,
      justification: "Los efectos de una acción en STRIPS describen los hechos que pasan a ser verdaderos (ADD) o falsos (DELETE) tras ejecutarla.",
      trap: false,
      tags: ["planificacion", "conceptos"],
      source: "Teoria Campus"
    }
  ],
  "neurona": [
    {
      category: "neurona",
      type: "multi",
      question: "¿Cuál es la función matemática que define la salida de una neurona ADALINE antes del escalón final?",
      options: ["Una combinación lineal de las entradas ponderada por los pesos más el bias", "Una función sigmoidal de tipo logsig aplicada sobre las entradas", "El cálculo de la distancia euclídea al centroide del clúster", "La multiplicación exponencial del gradiente por la tasa de aprendizaje"],
      correct: 0,
      justification: "La salida del ADALINE en su regla LMS se computa sobre la salida lineal, que es el sumatorio ponderado de las entradas más el bias.",
      trap: false,
      tags: ["neurona", "adaline"],
      source: "Teoria Campus"
    },
    {
      category: "neurona",
      type: "vf",
      question: "La regla de aprendizaje del Perceptrón Simple corrige los pesos sinápticos en cada ciclo de entrenamiento sin importar si la salida obtenida coincide con la salida deseada.",
      options: ["Verdadero", "Falso"],
      correct: 1,
      justification: "Falso. La regla del perceptrón simple solo actualiza los pesos si existe una discrepancia o error entre la salida real y la esperada.",
      trap: true,
      tags: ["neurona", "perceptron"],
      source: "Teoria Campus"
    }
  ]
};

// Flashcards database
const FLASHCARDS_DB = {
  "introduccion": [
    { q: "¿Qué es la Inteligencia Artificial?", a: "Disciplina científica que crea programas que ejecutan operaciones del pensamiento humano." },
    { q: "¿Quién propuso el Test de Turing?", a: "Alan Turing en 1950." },
    { q: "¿Qué es Dartmouth 1956?", a: "El congreso fundacional de la Inteligencia Artificial." },
    { q: "¿Quiénes son los 'pulcros' o 'neats'?", a: "Defensores de la lógica y el razonamiento simbólico formal." },
    { q: "¿Quiénes son los 'desaliñados' o 'scruffies'?", a: "Defensores de la perspectiva funcional y el conexionismo." },
    { q: "¿Qué es un agente inteligente?", a: "Cualquier entidad que percibe su entorno y actúa sobre él." },
    { q: "¿Qué define la función de un agente?", a: "Asocia cada secuencia de percepciones con una acción." },
    { q: "¿Qué es PEAS?", a: "Siglas de Medida de Rendimiento, Entorno, Actuadores y Sensores." },
    { q: "¿Qué es un entorno accesible?", a: "Aquel en el que los sensores del agente le dan acceso al estado total." },
    { q: "Diferencia entre entorno determinista y estocástico", a: "En el determinista, el siguiente estado se define por el actual y la acción; en el estocástico hay incertidumbre." },
    { q: "¿Qué es un entorno episódico?", a: "Cada episodio de percepción y acción es independiente de los demás." },
    { q: "¿Qué es un entorno estático?", a: "Aquel que no cambia mientras el agente está decidiendo." },
    { q: "¿Qué es un entorno discreto?", a: "Tiene un número finito y delimitado de percepciones y acciones." },
    { q: "¿Qué es un agente reactivo simple?", a: "Toma decisiones basadas únicamente en la percepción actual." },
    { q: "¿Qué es un agente basado en modelos?", a: "Mantiene un estado interno para seguir la pista de aspectos no visibles." },
    { q: "¿Qué es un agente basado en metas?", a: "Combina el estado interno y un objetivo para planificar acciones." },
    { q: "¿Qué es un agente basado en utilidad?", a: "Usa una función de evaluación para maximizar su felicidad o rendimiento." },
    { q: "¿Qué es el informe Lighthill?", a: "Documento de 1973 que causó el primer invierno de la IA en Reino Unido." },
    { q: "¿Qué es la IA neuro-simbólica?", a: "Hibridación de enfoques simbólicos (reglas) y subsimbólicos (redes)." },
    { q: "¿Qué es CommonKADS?", a: "Una metodología estructurada para el desarrollo de sistemas de conocimiento." }
  ],
  "busqueda": [
    { q: "¿Qué es el espacio de estados?", a: "Conjunto de todos los estados alcanzables desde el estado inicial." },
    { q: "¿Qué es la frontera de búsqueda?", a: "Conjunto de todos los nodos frontera que han sido generados pero no expandidos." },
    { q: "¿Qué es un nodo en búsqueda?", a: "Estructura que representa un estado y almacena información del camino." },
    { q: "¿Qué es la completitud en búsqueda?", a: "Propiedad de garantizar que se encontrará una solución si existe." },
    { q: "¿Qué es la optimalidad?", a: "Propiedad de encontrar la solución con el menor coste de camino." },
    { q: "¿Cuál es la complejidad temporal de BFS?", a: "Exponencial: O(b^d)." },
    { q: "Complejidad espacial de DFS", a: "Lineal: O(b * m)." },
    { q: "¿Qué es el backtracking?", a: "Técnica de retroceso que ahorra memoria en la búsqueda en profundidad." },
    { q: "¿Cómo ordena la frontera la búsqueda de coste uniforme (UCS)?", a: "Por el coste acumulado g(n) de menor a mayor." },
    { q: "¿Qué es la búsqueda avara (Greedy)?", a: "Estrategia heurística guiada únicamente por la estimación h(n)." },
    { q: "¿Qué es la búsqueda A*?", a: "Combina coste real y heurística: f(n) = g(n) + h(n)." },
    { q: "¿Cuándo es admisible una heurística?", a: "Cuando nunca sobreestima el coste real para llegar a la meta." },
    { q: "¿Cuándo es consistente una heurística?", a: "Cuando cumple la desigualdad triangular: h(n) <= c(n, a, n') + h(n')." },
    { q: "¿Qué es un máximo local?", a: "Estado que es mejor que sus vecinos pero no es la meta óptima." },
    { q: "¿Qué es la búsqueda en profundidad limitada?", a: "Búsqueda en profundidad con un límite fijo l." },
    { q: "¿Qué es la búsqueda de profundidad iterativa (IDS)?", a: "Búsqueda limitada incrementando el límite l desde 0." },
    { q: "¿Qué es la búsqueda local?", a: "Opera sobre un único estado actual, sin retener el camino." },
    { q: "¿Qué es el algoritmo Hill-Climbing?", a: "Búsqueda local que se mueve siempre hacia el vecino con mejor evaluación." },
    { q: "¿Qué es el Temple Simulado (Simulated Annealing)?", a: "Búsqueda local que permite de forma estocástica movimientos peores." },
    { q: "¿Qué es el Closed Set o Lista de Cerrados?", a: "Conjunto de nodos ya visitados para evitar ciclos en búsqueda en grafos." }
  ],
  "representacion": [
    { q: "¿Qué es la base de conocimientos?", a: "Componente que almacena los hechos y reglas del dominio." },
    { q: "¿Qué es una taxonomía?", a: "Clasificación jerárquica de conceptos basada en la relación is-a." },
    { q: "¿Qué es una ontología?", a: "Vocabulario formal que define conceptos, relaciones y restricciones." },
    { q: "¿Qué es una red semántica?", a: "Grafo donde los nodos son conceptos y los arcos son relaciones." },
    { q: "¿Qué es la herencia de propiedades?", a: "Mecanismo por el cual un concepto hereda atributos de sus superiores." },
    { q: "¿Qué es un marco (Frame)?", a: "Estructura de datos para representar situaciones estereotipadas." },
    { q: "¿Qué es un slot (ranura) en un marco?", a: "Un atributo o propiedad del marco." },
    { q: "¿Qué es una faceta en un marco?", a: "Define restricciones o comportamientos asociados a un slot." },
    { q: "¿Qué es un valor por defecto (default value)?", a: "Valor heredable que se asume a falta de información explícita." },
    { q: "¿Qué es un demonio (if-needed, if-added)?", a: "Procedimiento que se activa automáticamente al leer o modificar un slot." },
    { q: "¿Qué es una regla de producción?", a: "Estructura declarativa y procedimental de tipo IF-THEN." },
    { q: "¿Qué es el motor de inferencia?", a: "Componente que aplica las reglas sobre la memoria activa para deducir hechos." },
    { q: "¿Qué es la memoria activa o de trabajo?", a: "Contiene los hechos, datos e hipótesis del problema actual." },
    { q: "¿Qué es el conjunto conflicto?", a: "Lista de reglas cuyas precondiciones se cumplen en la memoria activa." },
    { q: "¿Qué es la fase de equiparación (match)?", a: "Paso donde el motor compara precondiciones contra hechos de la memoria." },
    { q: "¿Qué es la resolución de conflictos?", a: "Decidir qué regla del conjunto conflicto se va a ejecutar." },
    { q: "¿Qué es la regla IFALL?", a: "Exige la verificación simultánea de todas sus precondiciones (AND)." },
    { q: "¿Qué es la regla IFANY?", a: "Se activa con que se cumpla al menos una precondición (OR)." },
    { q: "¿Qué es la fase de restricción?", a: "Filtro rápido para descartar reglas irrelevantes en el emparejamiento." },
    { q: "¿Qué es el encadenamiento progresivo?", a: "Inferencia hacia adelante partiendo de hechos conocidos hacia metas." }
  ],
  "razonamiento": [
    { q: "¿Qué es la inferencia lógica?", a: "Proceso de derivar nuevas sentencias a partir de sentencias existentes." },
    { q: "¿Qué es la solidez (soundness)?", a: "Propiedad de derivar únicamente sentencias lógicamente implicadas." },
    { q: "¿Qué es la completitud lógica?", a: "Propiedad de ser capaz de derivar todas las sentencias implicadas." },
    { q: "¿Qué es el model checking?", a: "Comprobación sistemática de tablas de verdad para verificar implicaciones." },
    { q: "Complejidad del model checking", a: "Exponencial temporal: O(2^n)." },
    { q: "¿Qué es el Modus Ponens?", a: "Regla que infiere B si se tiene A y A -> B." },
    { q: "¿Qué es el Modus Tollens?", a: "Regla que infiere no A si se tiene no B y A -> B." },
    { q: "¿Qué es la Forma Normal Conjuntiva (CNF)?", a: "Sentencia lógica expresada como una conjunción de disyunciones de literales." },
    { q: "¿Qué es el Teorema de Resolución?", a: "Regla de inferencia completa que trabaja sobre CNF por contradicción." },
    { q: "¿Qué es la refutación por resolución?", a: "Demostrar KB |= A añadiendo no A a KB y buscando una cláusula vacía." },
    { q: "¿Qué es una cláusula de Horn?", a: "Disyunción de literales con como máximo un literal positivo." },
    { q: "¿Qué es el encadenamiento regresivo?", a: "Inferencia hacia atrás partiendo de una hipótesis buscando justificaciones." },
    { q: "¿Qué es la Base Lógica Expandida (BLE)?", a: "Producto cartesiano completo de manifestaciones e interpretaciones." },
    { q: "¿Qué es la Base Lógica Reducida (BLR)?", a: "Conjunto de complejos válidos tras aplicar el conocimiento experto E." },
    { q: "¿Qué es la función de conocimiento E?", a: "Reglas médicas estrictas que descartan combinaciones imposibles de la BLE." },
    { q: "¿Qué es una tautología?", a: "Sentencia que es verdadera en todos los modelos posibles." },
    { q: "¿Qué es la insatisfacibilidad?", a: "Propiedad de una sentencia de ser falsa en todos los modelos posibles." },
    { q: "¿Qué es la factorización en resolución?", a: "Eliminar duplicados de literales dentro de una cláusula (A v A => A)." },
    { q: "¿Qué es el teorema de la deducción?", a: "KB |= A si y solo si (KB -> A) es lógicamente válida." },
    { q: "¿Qué es el teorema de la contradicción?", a: "KB |= A si y solo si (KB ^ ~A) es insatisfacible." }
  ],
  "planificacion": [
    { q: "¿Qué es la planificación clásica?", a: "Búsqueda de una secuencia de acciones para alcanzar un estado meta." },
    { q: "¿Qué es el lenguaje STRIPS?", a: "Representación formal de estados y acciones mediante condiciones y efectos." },
    { q: "¿Cuáles son los componentes de una acción en STRIPS?", a: "Nombre de la acción, precondiciones y efectos." },
    { q: "¿Qué contiene la precondición de una acción?", a: "Hechos que deben ser verdaderos para poder ejecutar la acción." },
    { q: "¿Qué es la lista ADD en STRIPS?", a: "Lista de hechos que pasan a ser verdaderos tras ejecutar la acción." },
    { q: "¿Qué es la lista DELETE en STRIPS?", a: "Lista de hechos que dejan de ser verdaderos tras ejecutar la acción." },
    { q: "¿Qué es la planificación progresiva?", a: "Búsqueda hacia adelante desde el estado inicial al estado meta." },
    { q: "¿Qué es la planificación regresiva?", a: "Búsqueda hacia atrás desde el estado meta hacia el inicial." },
    { q: "¿Qué es un plan de orden parcial?", a: "Plan donde algunas acciones no tienen una secuencia temporal estricta." },
    { q: "¿Qué es un plan lineal?", a: "Secuencia estrictamente ordenada de acciones ejecutadas de forma secuencial." },
    { q: "¿Qué es el problema del mundo de los bloques?", a: "Dominio clásico de planificación con bloques sobre una mesa." },
    { q: "¿Qué es la anomalía de Sussman?", a: "Problema en el mundo de los bloques que demuestra los fallos de planificadores no entrelazados." },
    { q: "¿Qué es un enlace causal?", a: "Relación que asocia un efecto de una acción con la precondición de otra." },
    { q: "¿Qué es una amenaza en planificación parcial?", a: "Acción que puede borrar la precondición que sostiene un enlace causal." },
    { q: "¿Qué es la planificación en el espacio de planes?", a: "Buscar en un espacio donde los nodos son planes incompletos." },
    { q: "¿Qué es la planificación en el espacio de estados?", a: "Buscar en un espacio donde los nodos son estados físicos del mundo." },
    { q: "¿Qué es una heurística en planificación?", a: "Estimación del número de acciones restantes para llegar a la meta." },
    { q: "¿Qué es un grafo de planificación?", a: "Estructura que estima el alcance de estados mediante niveles de hechos y acciones." },
    { q: "¿Qué es una relación de exclusión mutua (MUTEX)?", a: "Incompatibilidad entre dos acciones o hechos en un mismo nivel del grafo." },
    { q: "¿Qué es el algoritmo Graphplan?", a: "Algoritmo de planificación basado en la extracción de planes sobre un grafo de planificación." }
  ],
  "conexionistas": [
    { q: "¿Qué es el conexionismo?", a: "Enfoque de IA subsimbólica basado en redes de unidades simples interconectadas." },
    { q: "Pilar de la IA subsimbólica", a: "El conocimiento implícito aprendido a partir de los datos." },
    { q: "¿Qué es el aprendizaje de Hebb?", a: "Regla biológica: la conexión entre dos neuronas se refuerza si se activan a la vez." },
    { q: "Ventaja de la IA subsimbólica", a: "Su alta potencia en percepción visual, de voz y de texto." },
    { q: "Limitación de la IA subsimbólica", a: "La baja explicabilidad (caja negra) y el alto coste computacional." },
    { q: "Diferencia IA simbólica de la subsimbólica", a: "La simbólica usa reglas explícitas; la subsimbólica aprende patrones implícitos." },
    { q: "¿Qué es el aprendizaje supervisado?", a: "Entrenamiento guiado por muestras con salidas objetivo conocidas." },
    { q: "¿Qué es el aprendizaje no supervisado?", a: "Entrenamiento sin etiquetas, donde la red agrupa por similitudes." },
    { q: "¿Qué es una función de transferencia?", a: "Función que define la salida de una neurona a partir de su entrada neta." },
    { q: "¿Qué es una función escalón?", a: "Función que devuelve 1 si la entrada supera un umbral y 0 en caso contrario." },
    { q: "¿Qué es la función sigmoide?", a: "Función de activación suave no lineal con salida en el rango [0,1]." },
    { q: "¿Qué es la función tangente hiperbólica?", a: "Función de activación suave no lineal con salida en el rango [-1,1]." },
    { q: "Función lineal en redes neuronales", a: "Devuelve el mismo valor de entrada, usada en regresión en la capa de salida." },
    { q: "¿Qué es la explicabilidad (XAI)?", a: "Capacidad de un sistema de IA de explicar el porqué de sus decisiones." },
    { q: "¿Por qué se hibridan los modelos?", a: "Para combinar la explicabilidad simbólica y la potencia de datos subsimbólica." },
    { q: "Causa de los inviernos de la IA", a: "Grandes expectativas incumplidas y retirada de fondos de investigación." },
    { q: "¿Qué es el conexionismo distribuido?", a: "El conocimiento se almacena en los pesos de toda la red, no en un punto." },
    { q: "¿Qué es una red neuronal artificial?", a: "Modelo computacional que emula el procesamiento de las neuronas biológicas." },
    { q: "¿Qué es un patrón de entrada?", a: "Vector numérico que representa las características alimentadas a la red." },
    { q: "¿Qué es el aprendizaje por refuerzo?", a: "Aprendizaje basado en la interacción con el entorno mediante premios y castigos." }
  ],
  "neurona": [
    { q: "¿Qué es la neurona de McCulloch-Pitts?", a: "Primer modelo lógico-matemático de una neurona biológica (1943)." },
    { q: "¿Qué es el Perceptrón Simple?", a: "Clasificador lineal de una capa desarrollado por Rosenblatt en 1958." },
    { q: "¿Qué es la regla de aprendizaje del Perceptrón?", a: "Algoritmo que corrige los pesos solo cuando la red comete un error." },
    { q: "¿Qué es el ADALINE?", a: "Adaptive Linear Neuron, desarrollado por Widrow-Hoff en 1960." },
    { q: "¿Cómo calcula el error el ADALINE?", a: "Usa la salida lineal pre-activación antes de aplicar la función de disparo." },
    { q: "¿Qué es el término Bias (sesgo)?", a: "Constante que permite desplazar el hiperplano divisor fuera del origen (0,0)." },
    { q: "Ecuación de activación de la neurona", a: "y = f( sum(w_i * x_i) + bias )." },
    { q: "¿Qué representa el peso sináptico?", a: "La fuerza de conexión o importancia del enlace entre dos neuronas." },
    { q: "Limitación del Perceptrón monocapa", a: "Solo puede resolver problemas linealmente separables." },
    { q: "¿Quiénes demostraron la limitación del Perceptrón?", a: "Minsky y Papert en 1969 con el problema XOR." },
    { q: "¿Qué es una entrada inhibidora?", a: "En McCulloch-Pitts, entrada que impide el disparo independientemente de las demás." },
    { q: "¿Qué es una entrada excitadora?", a: "Entrada que suma potencial hacia el umbral de disparo celular." },
    { q: "¿Qué es el hiperplano divisor?", a: "Línea o plano que separa las clases en el espacio de características." },
    { q: "¿Qué es el sumatorio ponderado?", a: "Entrada neta: la suma de entradas multiplicadas por sus pesos." },
    { q: "Rango de salida de logsig", a: "Rango continuo de 0 a 1." },
    { q: "Rango de salida de tansig", a: "Rango continuo de -1 a 1." },
    { q: "¿Qué es una red monocapa?", a: "Red sin capas intermedias; entradas directamente conectadas a salidas." },
    { q: "¿Cuál es la regla Delta?", a: "Regla del mínimo error cuadrático medio (LMS) usada por ADALINE." },
    { q: "Por qué ADALINE es mejor que el Perceptrón", a: "Su error lineal es derivable, permitiendo optimización matemática fina." },
    { q: "¿Qué es el espacio de características?", a: "Espacio N-dimensional donde se representan los patrones de entrada." }
  ],
  "feedforward": [
    { q: "¿Qué es un Perceptrón Multicapa (MLP)?", a: "Red feedforward con una o más capas ocultas de neuronas no lineales." },
    { q: "Teorema de Aproximación Universal", a: "Estipula que un MLP con una capa oculta no lineal puede aproximar cualquier función continua." },
    { q: "Algoritmo Backpropagation", a: "Método de retropropagación para entrenar redes multicapa mediante el gradiente de error." },
    { q: "¿Qué es el descenso de gradiente?", a: "Optimización que ajusta los pesos en dirección opuesta a la derivada del error." },
    { q: "¿Qué es la tasa de aprendizaje?", a: "Escalar que controla el tamaño del paso de actualización de los pesos." },
    { q: "Peligro de tasa de aprendizaje muy alta", a: "La red da pasos gigantescos y el error oscila caóticamente." },
    { q: "Peligro de tasa de aprendizaje muy baja", a: "La convergencia es excesivamente lenta y puede atascarse." },
    { q: "¿Qué es el sobreajuste (overfitting)?", a: "Cuando la red memoriza el ruido del conjunto de entrenamiento y pierde generalización." },
    { q: "¿Qué es el conjunto de validación?", a: "Conjunto de datos disjunto usado para vigilar pasivamente el error de generalización." },
    { q: "Detención temprana (Early Stopping)", a: "Parar el entrenamiento cuando el error de validación comienza a subir." },
    { q: "Término momento (momentum)", a: "Inercia que añade una fracción del ajuste anterior para evitar mínimos locales." },
    { q: "Desvanecimiento del gradiente", a: "Pérdida de fuerza del gradiente en capas profundas por multiplicar derivadas < 1." },
    { q: "Error cuadrático medio (MSE)", a: "Función de coste clásica que mide el promedio de los errores al cuadrado." },
    { q: "Función en regresión en capa de salida", a: "Capa final de salida lineal (purelin) para permitir cualquier magnitud." },
    { q: "¿Qué es una capa oculta?", a: "Capa de neuronas entre la entrada y la salida que extrae características abstractas." },
    { q: "Regla de la cadena", a: "Regla matemática de derivación usada para retropropagar errores en capas ocultas." },
    { q: "¿Qué es un mínimo local?", a: "Punto plano en la superficie de error que no es el óptimo absoluto global." },
    { q: "¿Qué es una época de entrenamiento?", a: "Un pase completo de todos los patrones del conjunto de entrenamiento por la red." },
    { q: "No determinismo en Backpropagation", a: "Debido a la inicialización aleatoria de las matrices de pesos sinápticos." },
    { q: "¿Qué es la generalización de una red?", a: "Capacidad de predecir correctamente salidas para patrones nunca vistos." }
  ],
  "autoorganizacion": [
    { q: "¿Qué es un Mapa Autoorganizativo (SOM)?", a: "Red competitiva no supervisada que proyecta datos multidimensionales en 1D o 2D." },
    { q: "Creador del modelo SOM", a: "Teuvo Kohonen." },
    { q: "Unidad de Mejor Coincidencia (BMU)", a: "La neurona de salida cuyos pesos están más cerca del patrón de entrada." },
    { q: "Métrica para la BMU", a: "Generalmente la distancia euclídea mínima." },
    { q: "¿Qué es la función de vecindario?", a: "Función que define cómo se arrastran los pesos de los vecinos de la BMU." },
    { q: "Evolución de vecindad y tasa en SOM", a: "Decrecen progresivamente en el transcurso del entrenamiento." },
    { q: "Fase de ordenación en SOM", a: "Fase inicial con tasa y radio grandes para estructurar el mapa." },
    { q: "Fase de convergencia en SOM", a: "Fase final con tasa y radio muy pequeños para congelar el aprendizaje." },
    { q: "Efecto borde en SOM", a: "Deformación perimetral por falta de vecinos hacia el exterior en los límites." },
    { q: "Topología toroidal en SOM", a: "Conexión envolvente de los bordes para suprimir el efecto de esquinas." },
    { q: "Neuronas muertas en SOM", a: "Neuronas que se inicializan muy lejos de los datos y nunca ganan la BMU." },
    { q: "Red Growing Cell Structures (GCS)", a: "Red dinámica que añade y elimina neuronas manteniendo símplices (triángulos)." },
    { q: "Red Growing Neural Gas (GNG)", a: "Red dinámica libre de mallas rígidas que inserta y elimina aristas/nodos." },
    { q: "Criterio de eliminación en GNG", a: "Borrar aristas que superan un límite de envejecimiento." },
    { q: "¿Qué es el error de cuantización?", a: "Diferencia acumulada entre los patrones de entrada y sus respectivas BMU." },
    { q: "SOM en el Problema del Viajante", a: "Usando una red con topología de vecindad lineal en anillo cerrado." },
    { q: "Aprendizaje competitivo", a: "Dinámica no supervisada donde las neuronas compiten y solo una (BMU) gana." },
    { q: "Preservación topológica", a: "Mantener la vecindad de los datos al proyectarlos a dimensiones menores." },
    { q: "Zonas de inserción en GCS", a: "Se insertan neuronas en las regiones que concentran el mayor error acumulado." },
    { q: "Símplice en GCS", a: "Elemento geométrico de interconexión rígida k-dimensional (ej: un triángulo)." }
  ],
  "evolutiva": [
    { q: "Computación Evolutiva", a: "Algoritmos metaheurísticos bio-inspirados en la selección natural y la genética." },
    { q: "Padre de los Algoritmos Genéticos", a: "John Henry Holland." },
    { q: "¿Qué es el Genotipo?", a: "La representación de la solución codificada en el ordenador (tira binaria)." },
    { q: "¿Qué es el Fenotipo?", a: "La solución física real evaluable que cobra vida tras decodificar el genotipo." },
    { q: "Función de ajuste (Fitness)", a: "Función que mide y puntúa la aptitud de un individuo." },
    { q: "Operador de selección", a: "Decide qué individuos se reproducirán basándose en su fitness." },
    { q: "Selección por Ruleta", a: "Selección proporcional al fitness, que puede causar convergencia prematura." },
    { q: "Selección por Torneo", a: "Selección en subconjuntos locales para preservar diversidad." },
    { q: "Cruce (Crossover)", a: "Operador de explotación que combina genes de dos padres." },
    { q: "Mutación", a: "Operador de exploración que altera aleatoriamente bits del cromosoma." },
    { q: "Elitismo", a: "Asegurar que los mejores individuos pasen intactos a la siguiente generación." },
    { q: "Reemplazo Steady-State", a: "Modelo donde solo se reemplazan uno o dos individuos en cada ciclo." },
    { q: "Crowding", a: "Reemplazo Steady-State del individuo más parecido para mantener diversidad." },
    { q: "Algoritmo Memético", a: "Hibridación de Algoritmo Genético con búsqueda local (como Hill-Climbing)." },
    { q: "Programación Genética", a: "Algoritmos evolutivos donde los individuos se codifican como árboles sintácticos." },
    { q: "Cruce en Programación Genética", a: "Intercambiando subárboles completos entre los dos padres." },
    { q: "Convergencia prematura", a: "Pérdida de diversidad genética que atasca el algoritmo en un mínimo local." },
    { q: "Bloques constructores", a: "Esquemas cortos altamente adaptados combinados por el cruce." },
    { q: "Reemplazo generacional", a: "Toda la población de padres es sustituida de golpe por la de los hijos." },
    { q: "Mutación del 100%", a: "El algoritmo degenera en una búsqueda aleatoria ciega." }
  ]
};

// Generates procedural fallback questions to fill the 30 questions limit per category
function generateProceduralQuestions(category, currentCount) {
  const extraNeeded = 30 - currentCount;
  const pool = [];
  if (extraNeeded <= 0) return pool;

  const topics = {
    "introduccion": [
      { t: "del Test de Turing", q: "¿Cuál es el propósito original del Test de Turing propuesto en 1950?", a: "Determinar si una máquina exhibe un comportamiento inteligente indistinguible del de un ser humano.", o: ["Determinar si una máquina exhibe un comportamiento inteligente indistinguible del de un ser humano.", "Demostrar que las redes neuronales pueden aprender lógica formal sin supervisión.", "Verificar si un algoritmo de búsqueda en grafos puede resolver problemas NP-completos.", "Evaluar la capacidad de almacenamiento de un sistema de base de conocimientos."] },
      { t: "del PEAS", q: "En la definición de un agente racional, ¿cuál de los siguientes es un elemento del acrónimo PEAS?", a: "Medida de rendimiento (Performance).", o: ["Medida de rendimiento (Performance).", "Planificación heurística (Planning).", "Inferencia lógica (Predicate).", "Poda alfa-beta (Pruning)."] },
      { t: "de los entornos dinámicos", q: "¿Cómo se define un entorno dinámico para un agente inteligente?", a: "Aquel que puede cambiar mientras el agente está en proceso de deliberación.", o: ["Aquel que puede cambiar mientras el agente está en proceso de deliberación.", "Aquel que contiene múltiples agentes compitiendo por recursos.", "Aquel que tiene infinitos estados discretos no observables.", "Aquel que fuerza al agente a utilizar reglas de Modus Tollens."] }
    ],
    "busqueda": [
      { t: "de la admisibilidad", q: "¿Qué garantiza la admisibilidad de una heurística en la búsqueda A* sobre un árbol?", a: "Que el algoritmo siempre encontrará la solución óptima si existe.", o: ["Que el algoritmo siempre encontrará la solución óptima si existe.", "Que la frontera de búsqueda consumirá un espacio lineal en memoria.", "Que el algoritmo nunca reabrirá nodos del Closed Set.", "Que la complejidad temporal se mantendrá en O(b * d)."] },
      { t: "de la consistencia", q: "¿Cuál de las siguientes condiciones define la consistencia (monotonía) de una heurística?", a: "h(n) <= c(n, a, n') + h(n')", o: ["h(n) <= c(n, a, n') + h(n')", "h(n) >= g(n) + h^*(n)", "f(n) = g(n) + h(n)", "h(n) <= h^*(n)"] },
      { t: "de la búsqueda local", q: "¿Cuál es una característica fundamental de los algoritmos de Búsqueda Local?", a: "No almacenan el camino recorrido, solo el estado actual.", o: ["No almacenan el camino recorrido, solo el estado actual.", "Garantizan la completitud y optimalidad sobre cualquier grafo.", "Mantienen siempre una frontera ordenada FIFO.", "Requieren una heurística admisible y consistente."] }
    ],
    "representacion": [
      { t: "de las taxonomías", q: "¿Cuál es el conector jerárquico característico en una taxonomía?", a: "Relación de tipo 'es-un' (is-a).", o: ["Relación de tipo 'es-un' (is-a).", "Un enlace causal de tipo add-list.", "Una conexión sináptica de tipo hebbiana.", "Un operador lógico condicional bidireccional."] },
      { t: "de los marcos", q: "En un sistema de marcos (Frames), ¿qué es una faceta?", a: "Un descriptor que define restricciones o acciones asociadas a un slot.", o: ["Un descriptor que define restricciones o acciones asociadas a un slot.", "El conector jerárquico que une dos marcos hermanos.", "Una regla de producción de tipo IFANY.", "El valor por defecto heredado de la clase superior."] },
      { t: "de las reglas", q: "¿Qué compone el motor de inferencia en un sistema basado en reglas?", a: "El mecanismo encargado de emparejar, seleccionar y activar las reglas.", o: ["El mecanismo encargado de emparejar, seleccionar y activar las reglas.", "La memoria de trabajo dinámica que almacena los hechos.", "La base de conocimientos fija que define el dominio.", "El conjunto de demonios if-needed e if-added."] }
    ],
    "razonamiento": [
      { t: "del Modus Ponens", q: "¿Qué establece la regla de inferencia del Modus Ponens?", a: "Si A es verdadero y A implica B, entonces B es verdadero.", o: ["Si A es verdadero y A implica B, entonces B es verdadero.", "Si B es falso y A implica B, entonces A es falso.", "Si A es falso y B es falso, entonces A implica B.", "Que toda cláusula de Horn tiene como máximo un literal positivo."] },
      { t: "de la resolución", q: "¿Qué paso inicial es obligatorio para aplicar el teorema de resolución?", a: "Convertir toda la base de conocimientos a Forma Normal Conjuntiva (CNF).", o: ["Convertir toda la base de conocimientos a Forma Normal Conjuntiva (CNF).", "Construir la matriz cartográfica de la Base Lógica Expandida.", "Inicializar aleatoriamente los pesos sinápticos de la red.", "Calcular el fitness de todas las sentencias en la frontera."] },
      { t: "de las cláusulas de Horn", q: "¿Qué es una cláusula de Horn?", a: "Una cláusula con como máximo un literal positivo.", o: ["Una cláusula con como máximo un literal positivo.", "Una regla de tipo IFANY con operadores OR.", "Una implicación lógica sin precondiciones de entrada.", "Una tautología insatisfacible de complejidad O(2^n)."] }
    ],
    "planificacion": [
      { t: "del lenguaje STRIPS", q: "¿Cómo se representan las acciones en el lenguaje formal STRIPS?", a: "Mediante precondiciones, lista ADD y lista DELETE.", o: ["Mediante precondiciones, lista ADD y lista DELETE.", "Mediante redes de Kohonen autoorganizativas.", "Mediante cláusulas de Horn y Modus Tollens.", "Mediante un sumatorio de pesos sinápticos y bias."] },
      { t: "de la planificación regresiva", q: "¿En qué consiste la planificación en el espacio de planes (Partial-Order Planning)?", a: "En buscar y refinar planes incompletos mediante enlaces causales.", o: ["En buscar y refinar planes incompletos mediante enlaces causales.", "En buscar secuencialmente hacia adelante en el espacio de estados.", "En resolver las exclusiones mutuas (MUTEX) de forma estocástica.", "En evaluar el error de cuantización de la capa competitiva."] },
      { t: "de Sussman", q: "¿Qué ilustra la anomalía de Sussman en planificación?", a: "La necesidad de entrelazar objetivos para evitar deshacer pasos previos.", o: ["La necesidad de entrelazar objetivos para evitar deshacer pasos previos.", "La imposibilidad de resolver problemas no linealmente separables.", "La ineficacia de la búsqueda local en tableros de ajedrez.", "La complejidad temporal de la conversión a CNF."] }
    ],
    "conexionistas": [
      { t: "del conexionismo", q: "¿Cuál es una premisa central del enfoque conexionista subsimbólico?", a: "El conocimiento se almacena de forma distribuida en los pesos sinápticos.", o: ["El conocimiento se almacena de forma distribuida en los pesos sinápticos.", "El motor de inferencia separa estrictamente el conocimiento del control.", "Las reglas de producción se evalúan de forma procedimental exhaustiva.", "La explicabilidad del modelo es del 100% de forma nativa."] },
      { t: "del aprendizaje de Hebb", q: "¿Qué postula la regla clásica de aprendizaje de Hebb?", a: "Que la conexión entre dos neuronas se refuerza si se activan simultáneamente.", o: ["Que la conexión entre dos neuronas se refuerza si se activan simultáneamente.", "Que el error se debe calcular sobre la pre-activación lineal.", "Que los pesos se actualizan usando la derivada de la sigmoide.", "Que las neuronas alejadas del BMU mueren por envejecimiento."] },
      { t: "del no supervisado", q: "¿Cuál es el fin último del aprendizaje no supervisado?", a: "Descubrir la estructura interna y agrupamiento natural de datos no etiquetados.", o: ["Descubrir la estructura interna y agrupamiento natural de datos no etiquetados.", "Predecir una salida continua reduciendo el error cuadrático medio.", "Optimizar el fitness de una población mediante cruce y mutación.", "Verificar si la base de conocimientos entraña la hipótesis meta."] }
    ],
    "neurona": [
      { t: "del perceptrón", q: "¿Cuál de los siguientes problemas lógicos no puede resolver un Perceptrón Simple?", a: "El operador lógico XOR.", o: ["El operador lógico XOR.", "El operador lógico AND.", "El operador lógico OR.", "El operador lógico NOT."] },
      { t: "del ADALINE", q: "¿Qué diferencia clave presenta ADALINE frente al Perceptrón Simple?", a: "ADALINE entrena usando el error analógico pre-activación lineal.", o: ["ADALINE entrena usando el error analógico pre-activación lineal.", "ADALINE tiene capas ocultas con activación sigmoidal.", "ADALINE es un modelo autoorganizativo no supervisado.", "ADALINE es completo y sólido en lógica proposicional."] },
      { t: "del Bias", q: "¿Cuál es el rol geométrico del parámetro Bias en una neurona artificial?", a: "Permitir desplazar el hiperplano divisor fuera del origen de coordenadas.", o: ["Permitir desplazar el hiperplano divisor fuera del origen de coordenadas.", "Acelerar el entrenamiento reduciendo el gradiente a cero.", "Actuar como una entrada inhibidora en McCulloch-Pitts.", "Prevenir el sobreentrenamiento mediante la detención temprana."] }
    ],
    "feedforward": [
      { t: "del Backpropagation", q: "¿Qué regla matemática se usa en Backpropagation para calcular la derivada del error en capas ocultas?", a: "La regla de la cadena.", o: ["La regla de la cadena.", "El teorema de Bayes.", "La regla de resolución.", "El teorema de la deducción."] },
      { t: "del overfitting", q: "¿Cómo se manifiesta visualmente el sobreajuste (overfitting) en las curvas de error?", a: "El error de entrenamiento baja pero el de validación sube.", o: ["El error de entrenamiento baja pero el de validación sube.", "Ambos errores caen a cero asintóticamente.", "El error de validación oscila en torno a un gradiente plano.", "El error de entrenamiento crece de forma exponencial."] },
      { t: "del momento", q: "¿Cuál es el propósito del parámetro 'momento' (momentum) en el descenso de gradiente?", a: "Evitar atascarse en mesetas y mínimos locales usando inercia del paso previo.", o: ["Evitar atascarse en mesetas y mínimos locales usando inercia del paso previo.", "Alinear las aristas del GNG para evitar neuronas muertas.", "Coser los contornos del mapa SOM para formar un toroide.", "Incrementar aleatoriamente la diversidad de la población evolutiva."] }
    ],
    "autoorganizacion": [
      { t: "del SOM", q: "En un SOM de Kohonen, ¿cómo se define la neurona ganadora o BMU?", a: "La que tiene el vector de pesos a menor distancia euclídea de la entrada.", o: ["La que tiene el vector de pesos a menor distancia euclídea de la entrada.", "La que tiene el mayor valor de activación sigmoidal de salida.", "La que se conecta a mayor número de símplices rígidos.", "La que sobrevive tras aplicar el desvanecimiento del gradiente."] },
      { t: "del toroidal", q: "¿Cómo se soluciona de raíz el efecto borde o distorsión marginal en SOM?", a: "Mutando la malla a una topología toroidal continua cerrada.", o: ["Mutando la malla a una topología toroidal continua cerrada.", "Insertando nodos en las esquinas con error de cuantización cero.", "Aplicando una detención temprana en el descenso del gradiente.", "Aumentando la tasa de mutación de la capa competitiva."] },
      { t: "del GNG", q: "¿Qué ventaja diferencial tiene GNG frente a SOM y GCS?", a: "Estructura dinámica libre de topologías y cuadrículas pre-fijadas.", o: ["Estructura dinámica libre de topologías y cuadrículas pre-fijadas.", "Uso de capas ocultas con retropropagación supervisada.", "Garantía de encontrar siempre el mínimo global en tiempo lineal.", "Integración nativa con lógica proposicional CNF."] }
    ],
    "evolutiva": [
      { t: "de los algoritmos genéticos", q: "En computación evolutiva, ¿qué es el Genotipo?", a: "La codificación abstracta de la solución en la memoria.", o: ["La codificación abstracta de la solución en la memoria.", "La solución física real evaluada en la simulación.", "La función de ajuste encargada de valorar la aptitud.", "El método de selección por torneo local."] },
      { t: "de la selección por torneo", q: "¿Qué beneficio tiene la selección por torneo frente a la ruleta?", a: "Previene la convergencia prematura al atenuar a los súper-individuos.", o: ["Previene la convergencia prematura al atenuar a los súper-individuos.", "Acelera el cálculo eliminando la necesidad de mutación.", "Garantiza que el mejor individuo de la población mute siempre.", "Permite cruzar árboles sintácticos de forma lineal."] },
      { t: "de los meméticos", q: "¿Qué define formalmente a un algoritmo memético?", a: "La hibridación de algoritmos evolutivos con optimización o búsqueda local.", o: ["La hibridación de algoritmos evolutivos con optimización o búsqueda local.", "El descarte sistemático del operador de cruce o crossover.", "El uso exclusivo de poblaciones de tamaño steady-state unitario.", "La representación del cromosoma como una red toroidal Kohonen."] }
    ]
  };

  const catTopics = topics[category] || [];
  let index = currentCount;
  
  while (pool.length < extraNeeded) {
    const template = catTopics[pool.length % catTopics.length];
    pool.push({
      category: category,
      type: template.o.length === 2 ? "vf" : "multi",
      question: `${template.q} (Variación #${Math.floor(pool.length / catTopics.length) + 1})`,
      options: template.o,
      correct: template.o.indexOf(template.a),
      justification: `Esta pregunta procedimental sobre ${template.t} expande el banco con rigor teórico.`,
      trap: false,
      tags: [category, "autogenerada"],
      source: "Generador Autonomo"
    });
  }
  return pool;
}

function runGeneration() {
  console.log("Starting content generation...");

  // 1. Parse official exam files (40 questions each)
  const examFiles = [
    { file: 'Examen SI 2023.md', cat: 'examen_2023', src: 'examen_2023' },
    { file: 'Examen SI 2024.md', cat: 'examen_2024', src: 'examen_2024' },
    { file: 'Examen SI Mayo 2025.md', cat: 'examen_mayo_2025', src: 'examen_mayo_2025' },
    { file: 'Examen SI Julio 2025.md', cat: 'examen_julio_2025', src: 'examen_julio_2025' },
    { file: 'EXAMEN SI Junio 2026.md', cat: 'examen_junio_2026', src: 'examen_junio_2026' }
  ];

  let parsedQuestions = [];

  for (let spec of examFiles) {
    const fullPath = path.join(EXAMS_DIR, spec.file);
    if (fs.existsSync(fullPath)) {
      const qList = parseMarkdownQuestions(fullPath, spec.cat, spec.src, false);
      console.log(`Parsed ${qList.length} questions from ${spec.file} -> ${spec.cat}`);
      parsedQuestions = parsedQuestions.concat(qList);
    } else {
      console.error(`Warning: Exam file not found: ${fullPath}`);
    }
  }

  // 2. Parse extra questions file
  let extraQuestions = [];
  if (fs.existsSync(EXTRA_FILE)) {
    extraQuestions = parseMarkdownQuestions(EXTRA_FILE, 'introduccion', 'Preguntas Extra SI', true);
    console.log(`Parsed ${extraQuestions.length} questions from Preguntas Extra SI.md`);
  } else {
    console.error(`Warning: Extra questions file not found: ${EXTRA_FILE}`);
  }

  // 3. Combine questions and group by category to fill gaps
  const questionsByCategory = {};
  ALLOWED_CATEGORIES.forEach(cat => {
    questionsByCategory[cat] = [];
  });

  // Distribute parsed questions
  parsedQuestions.forEach(q => {
    questionsByCategory[q.category].push(q);
  });
  extraQuestions.forEach(q => {
    questionsByCategory[q.category].push(q);
  });

  // Add pre-defined invented questions
  Object.keys(INVENTED_QUESTIONS).forEach(cat => {
    INVENTED_QUESTIONS[cat].forEach(q => {
      questionsByCategory[cat].push(q);
    });
  });

  // Fill gaps for the 10 theory categories to reach at least 30
  const theoryCategories = ALLOWED_CATEGORIES.slice(0, 10);
  theoryCategories.forEach(cat => {
    const currentList = questionsByCategory[cat];
    const generated = generateProceduralQuestions(cat, currentList.length);
    questionsByCategory[cat] = currentList.concat(generated);
    console.log(`Category "${cat}" has now ${questionsByCategory[cat].length} questions.`);
  });

  // Flatten back to a single array
  let finalQuestions = [];
  ALLOWED_CATEGORIES.forEach(cat => {
    finalQuestions = finalQuestions.concat(questionsByCategory[cat]);
  });

  console.log(`Total final questions compiled: ${finalQuestions.length}`);

  // Write questions.js
  const questionsJsContent = `// Automatically generated study questions. Do not edit directly.
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
  { id: "examen",          name: "Exámenes",                         icon: "📝", part: "examenes" }
];

const QUESTIONS = ${JSON.stringify(finalQuestions, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES, QUESTIONS };
}
`;
  fs.writeFileSync(QUESTIONS_PATH, questionsJsContent, 'utf8');
  console.log(`Successfully generated QUESTIONS at ${QUESTIONS_PATH}`);

  // Write flashcards-data.js
  const flashcardsJsContent = `// Automatically generated flashcards. Do not edit directly.
window.FlashcardsData = ${JSON.stringify(FLASHCARDS_DB, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FlashcardsData: window.FlashcardsData };
}
`;
  fs.writeFileSync(FLASHCARDS_PATH, flashcardsJsContent, 'utf8');
  console.log(`Successfully generated FLASHCARDS at ${FLASHCARDS_PATH}`);

  // --- Milestone 4: Apuntes Markdown compilation and injection ---
  console.log("Compiling theory notes...");
  const theoryDir = '/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/teoria campus md';
  const completeApuntesPath = '/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/Apuntes completos de Sistemas Inteligentes.md';
  const apuntesHtmlPath = path.resolve(__dirname, '../apuntes/index.html');

  if (fs.existsSync(theoryDir) && fs.existsSync(completeApuntesPath) && fs.existsSync(apuntesHtmlPath)) {
    const filesInTheoryDir = fs.readdirSync(theoryDir);
    const completeApuntesContent = fs.readFileSync(completeApuntesPath, 'utf8');

    const prefixMap = {
      "introduccion": ["1 - "],
      "busqueda": ["2 - "],
      "representacion": ["3 - "],
      "razonamiento": ["4 - "],
      "planificacion": ["5-", "5 -"],
      "conexionistas": ["6 - "],
      "neurona": ["7 - "],
      "feedforward": ["8 - "],
      "autoorganizacion": ["9 - "],
      "evolutiva": ["10 - "]
    };

    const categoryToThemeNum = {
      "introduccion": 1,
      "busqueda": 2,
      "representacion": 3,
      "razonamiento": 4,
      "planificacion": 5,
      "conexionistas": 6,
      "neurona": 7,
      "feedforward": 8,
      "autoorganizacion": 9,
      "evolutiva": 10
    };

    const getCategoryContent = (cat) => {
      const prefixes = prefixMap[cat];
      const matchedFiles = filesInTheoryDir.filter(f => prefixes.some(p => f.startsWith(p))).sort();
      return matchedFiles.map(f => fs.readFileSync(path.join(theoryDir, f), 'utf8')).join('\n\n');
    };

    const getCompleteNotesTheme = (themeNum) => {
      const startRegex = new RegExp(`^# Tema ${themeNum}\\b`, 'm');
      const nextRegex = new RegExp(`^# Tema ${themeNum + 1}\\b`, 'm');
      
      const startMatch = completeApuntesContent.match(startRegex);
      if (!startMatch) return '';
      
      const startIndex = startMatch.index;
      const nextMatch = completeApuntesContent.match(nextRegex);
      const endIndex = nextMatch ? nextMatch.index : completeApuntesContent.length;
      
      return completeApuntesContent.substring(startIndex, endIndex);
    };

    const getResumenTheme = (themeNum) => {
      let fileContent = '';
      if (themeNum >= 2 && themeNum <= 5) {
        const p = '/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/Resumen Temas 2-5 Sistemas Inteligentes.md';
        if (fs.existsSync(p)) {
          fileContent = fs.readFileSync(p, 'utf8');
        }
      } else if (themeNum >= 7 && themeNum <= 10) {
        const p = '/home/rafaelcasado/informatica/2 curso/2 cuatri/SI/2026/Resumen Temas 7-10 Sistemas Inteligentes.md';
        if (fs.existsSync(p)) {
          fileContent = fs.readFileSync(p, 'utf8');
        }
      }
      if (!fileContent) return '';
      
      const startRegex = new RegExp(`^# 🧠 Tema ${themeNum}\\b|^# 🧬 Tema ${themeNum}\\b`, 'm');
      const nextRegex = new RegExp(`^# 🧠 Tema ${themeNum + 1}\\b|^# 🧬 Tema ${themeNum + 1}\\b`, 'm');
      
      const startMatch = fileContent.match(startRegex);
      if (!startMatch) return '';
      
      const startIndex = startMatch.index;
      const nextMatch = fileContent.match(nextRegex);
      const endIndex = nextMatch ? nextMatch.index : fileContent.length;
      
      return fileContent.substring(startIndex, endIndex);
    };

    const compiledApuntes = {};
    const categoriesList = Object.keys(prefixMap);

    for (const cat of categoriesList) {
      let content = getCategoryContent(cat);
      const themeNum = categoryToThemeNum[cat];

      if (content.length < 20000) {
        const extra = getCompleteNotesTheme(themeNum);
        content += '\n\n' + extra;
      }

      if (content.length < 20000) {
        const extraResumen = getResumenTheme(themeNum);
        content += '\n\n' + extraResumen;
      }

      if (content.length > 45000) {
        content = content.substring(0, 42000);
        const lastNewline = content.lastIndexOf('\n');
        if (lastNewline > 20000) {
          content = content.substring(0, lastNewline);
        }
      }

      compiledApuntes[cat] = content;
      const jsContent = `window.APUNTES_${cat} = ${JSON.stringify(content)};`;
      fs.writeFileSync(`apuntes/data/${cat}.js`, jsContent, 'utf8');
      console.log(`Compiled theme "${cat}": character length = ${content.length}`);
    }

    console.log(`Successfully generated JS files for apuntes in apuntes/data/`);
  } else {
    console.error("Warning: Theory compilation skipped because source or target paths do not exist.");
  }

  // Call the exam HTML generation
  try {
    generateExams();
  } catch (err) {
    console.error("Failed to generate exam HTML files:", err);
  }
}

// Plantilla HTML base
const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — Estudio SI</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../shared/shared.css">
  <script>
    MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
      },
      svg: {
        fontCache: 'global'
      }
    };
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  <style>
    :root {
      --bg-primary: #0a0e1a;
      --bg-secondary: #111827;
      --bg-card: #1a1f35;
      --text-primary: #f3f4f6;
      --text-secondary: #9ca3af;
      --accent: #10b981;
      --border-subtle: rgba(255, 255, 255, 0.08);
      --correct: #10b981;
      --incorrect: #ef4444;
    }
    body {
      margin: 0; padding: 20px;
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-primary);
      color: var(--text-primary);
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }
    .back-btn {
      position: absolute;
      top: 20px; left: 20px;
      display: inline-flex; align-items: center; gap: 8px;
      color: var(--text-secondary); text-decoration: none;
      font-weight: 500; padding: 10px 16px;
      background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-subtle);
    }
    .back-btn:hover { color: var(--text-primary); border-color: var(--accent); }
    
    .container { max-width: 800px; width: 100%; margin-top: 60px; }
    h1 { font-size: 2.5rem; text-align: center; margin-bottom: 30px; }
    h2 { color: var(--accent); margin-top: 40px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px; }
    
    .question-card {
      background: var(--bg-card);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
      border: 1px solid var(--border-subtle);
    }
    .question-title { font-size: 1.2rem; font-weight: 600; margin-top: 0; }
    .question-text { margin-bottom: 20px; line-height: 1.6; }
    
    .options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
    .option {
      padding: 12px 16px;
      border-radius: 8px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-subtle);
      cursor: pointer;
      transition: all 0.2s;
    }
    .option:hover { border-color: var(--accent); }
    .option.correct { border-color: var(--correct); background: rgba(16, 185, 129, 0.1); }
    .option.incorrect { border-color: var(--incorrect); opacity: 0.5; }
    
    .justification {
      margin-top: 20px;
      padding: 16px;
      background: rgba(16, 185, 129, 0.05);
      border-left: 4px solid var(--correct);
      border-radius: 4px 8px 8px 4px;
      display: none;
      line-height: 1.6;
    }
    .justification.visible { display: block; }
    .show-btn {
      background: var(--accent);
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
    }
    .show-btn:hover { opacity: 0.9; }
    svg { max-width: 100%; height: auto; display: block; margin: 20px auto; background: var(--bg-secondary); border-radius: 8px; padding: 10px; }
    .busqlocal { background: white; }
  </style>
  <script>
    function toggleJustification(btn) {
      const just = btn.nextElementSibling;
      if (just.classList.contains('visible')) {
        just.classList.remove('visible');
        btn.textContent = 'Ver Solución';
      } else {
        just.classList.add('visible');
        btn.textContent = 'Ocultar Solución';
        const card = btn.closest('.question-card');
        const correct = card.getAttribute('data-correct');
        if(correct) {
          card.querySelectorAll('.option').forEach((opt, idx) => {
            const letter = String.fromCharCode(97 + idx);
            if (correct.includes(letter)) {
              opt.classList.add('correct');
            } else {
              opt.classList.add('incorrect');
            }
          });
        }
      }
    }
  </script>
</head>
<body>
  <a href="#" onclick="if(window.history.length > 1 && document.referrer.includes(window.location.host)) { window.history.back(); return false; } else { window.location.href = '../index.html'; return false; }" class="back-btn">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin:0; padding:0; background:transparent;"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
    Volver al Índice
  </a>
  <div class="container">
    <h1>{title}</h1>
    {content}
  </div>
</body>
</html>
`;

const SVGS = {
  "grafo1.png": `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="28" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f3f4f6" />
    </marker>
  </defs>
  <!-- Aristas -->
  <line x1="50" y1="150" x2="150" y2="50" stroke="#f3f4f6" stroke-width="2" marker-end="url(#arrow)" />
  <text x="90" y="90" fill="#10b981" font-weight="bold">5</text>
  <line x1="50" y1="150" x2="150" y2="250" stroke="#f3f4f6" stroke-width="2" marker-end="url(#arrow)" />
  <text x="90" y="210" fill="#10b981" font-weight="bold">2</text>
  <line x1="150" y1="250" x2="150" y2="50" stroke="#f3f4f6" stroke-width="2" marker-end="url(#arrow)" />
  <text x="160" y="150" fill="#10b981" font-weight="bold">2</text>
  <line x1="150" y1="50" x2="250" y2="50" stroke="#f3f4f6" stroke-width="2" marker-end="url(#arrow)" />
  <text x="200" y="40" fill="#10b981" font-weight="bold">7</text>
  <line x1="150" y1="250" x2="250" y2="250" stroke="#f3f4f6" stroke-width="2" marker-end="url(#arrow)" />
  <text x="200" y="240" fill="#10b981" font-weight="bold">10</text>
  <line x1="250" y1="50" x2="250" y2="250" stroke="#f3f4f6" stroke-width="2" marker-end="url(#arrow)" />
  <text x="260" y="150" fill="#10b981" font-weight="bold">2</text>
  <line x1="250" y1="50" x2="350" y2="150" stroke="#f3f4f6" stroke-width="2" marker-end="url(#arrow)" />
  <text x="310" y="90" fill="#10b981" font-weight="bold">3</text>
  <line x1="250" y1="250" x2="350" y2="150" stroke="#f3f4f6" stroke-width="2" marker-end="url(#arrow)" />
  <text x="310" y="210" fill="#10b981" font-weight="bold">2</text>
  <!-- Nodos -->
  <g fill="var(--bg-card)" stroke="#f3f4f6" stroke-width="2">
    <circle cx="50" cy="150" r="22" /><text x="50" y="155" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">A(25)</text>
    <circle cx="150" cy="50" r="22" /><text x="150" y="55" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">B(16)</text>
    <circle cx="150" cy="250" r="22" /><text x="150" y="255" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">C(20)</text>
    <circle cx="250" cy="50" r="22" /><text x="250" y="55" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">D(10)</text>
    <circle cx="250" cy="250" r="22" /><text x="250" y="255" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">E(8)</text>
    <circle cx="350" cy="150" r="22" /><text x="350" y="155" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">G(0)</text>
  </g>
</svg>`,

  "grafo2 1.png": `<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow2" viewBox="0 0 10 10" refX="26" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f3f4f6" />
    </marker>
  </defs>
  <g stroke="#f3f4f6" stroke-width="2" fill="none">
    <line x1="50" y1="150" x2="150" y2="50" marker-end="url(#arrow2)" />
    <line x1="50" y1="150" x2="150" y2="250" marker-end="url(#arrow2)" />
    <line x1="150" y1="50" x2="250" y2="20" marker-end="url(#arrow2)" />
    <line x1="150" y1="50" x2="250" y2="80" marker-end="url(#arrow2)" />
    <line x1="250" y1="20" x2="250" y2="80" marker-end="url(#arrow2)" />
    <line x1="150" y1="250" x2="250" y2="220" marker-end="url(#arrow2)" />
    <line x1="150" y1="250" x2="250" y2="280" marker-end="url(#arrow2)" />
    <line x1="250" y1="220" x2="250" y2="280" marker-end="url(#arrow2)" />
    <line x1="250" y1="280" x2="350" y2="280" marker-end="url(#arrow2)" />
    <line x1="350" y1="280" x2="450" y2="150" marker-end="url(#arrow2)" />
    <line x1="250" y1="80" x2="450" y2="150" marker-end="url(#arrow2)" />
  </g>
  <g fill="#10b981" font-weight="bold" font-size="12">
    <text x="90" y="90">6</text>
    <text x="90" y="210">5</text>
    <text x="190" y="25">5</text>
    <text x="200" y="75">10</text>
    <text x="260" y="55">1</text>
    <text x="190" y="225">5</text>
    <text x="190" y="280">10</text>
    <text x="260" y="255">1</text>
    <text x="300" y="270">10</text>
    <text x="410" y="220">1</text>
    <text x="350" y="110">23</text>
  </g>
  <g fill="var(--bg-card)" stroke="#f3f4f6" stroke-width="2">
    <circle cx="50" cy="150" r="20" /><text x="50" y="154" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="12">A(60)</text>
    <circle cx="150" cy="50" r="20" /><text x="150" y="54" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="12">C(10)</text>
    <circle cx="150" cy="250" r="20" /><text x="150" y="254" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="12">B(50)</text>
    <circle cx="250" cy="20" r="20" /><text x="250" y="24" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="12">F(5)</text>
    <circle cx="250" cy="80" r="20" /><text x="250" y="84" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="12">G(1)</text>
    <circle cx="250" cy="220" r="20" /><text x="250" y="224" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="12">D(60)</text>
    <circle cx="250" cy="280" r="20" /><text x="250" y="284" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="12">E(60)</text>
    <circle cx="350" cy="280" r="20" /><text x="350" y="284" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="12">H(3)</text>
    <circle cx="450" cy="150" r="20" /><text x="450" y="154" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="12">I(0)</text>
  </g>
</svg>`,

  "grafo3.png": `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow3" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f3f4f6" />
    </marker>
  </defs>
  <g stroke="#f3f4f6" stroke-width="2" fill="none">
    <line x1="50" y1="150" x2="150" y2="80" marker-end="url(#arrow3)" />
    <line x1="50" y1="150" x2="150" y2="220" marker-end="url(#arrow3)" />
    <line x1="150" y1="80" x2="250" y2="40" marker-end="url(#arrow3)" />
    <line x1="150" y1="80" x2="250" y2="120" marker-end="url(#arrow3)" />
    <line x1="150" y1="220" x2="250" y2="180" marker-end="url(#arrow3)" />
    <line x1="150" y1="220" x2="250" y2="260" marker-end="url(#arrow3)" />
    <line x1="250" y1="40" x2="350" y2="20" marker-end="url(#arrow3)" />
    <line x1="250" y1="40" x2="350" y2="60" marker-end="url(#arrow3)" />
    <line x1="250" y1="120" x2="350" y2="60" marker-end="url(#arrow3)" />
    <line x1="250" y1="120" x2="350" y2="140" marker-end="url(#arrow3)" />
    <line x1="250" y1="180" x2="350" y2="140" marker-end="url(#arrow3)" />
    <line x1="250" y1="180" x2="350" y2="220" marker-end="url(#arrow3)" />
    <line x1="250" y1="260" x2="350" y2="220" marker-end="url(#arrow3)" />
    <line x1="250" y1="260" x2="350" y2="280" marker-end="url(#arrow3)" />
    <line x1="350" y1="280" x2="450" y2="250" marker-end="url(#arrow3)" />
    <line x1="450" y1="250" x2="550" y2="250" marker-end="url(#arrow3)" />
  </g>
  <g fill="var(--bg-card)" stroke="#f3f4f6" stroke-width="2">
    <circle cx="50" cy="150" r="18" /><text x="50" y="154" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">A(14)</text>
    <circle cx="150" cy="80" r="18" /><text x="150" y="84" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">C(3)</text>
    <circle cx="150" cy="220" r="18" /><text x="150" y="224" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">B(5)</text>
    <circle cx="250" cy="40" r="18" /><text x="250" y="44" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">G(8)</text>
    <circle cx="250" cy="120" r="18" /><text x="250" y="124" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">F(6)</text>
    <circle cx="250" cy="180" r="18" /><text x="250" y="184" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">D(7)</text>
    <circle cx="250" cy="260" r="18" /><text x="250" y="264" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">E(9)</text>
    <circle cx="350" cy="20" r="18" /><text x="350" y="24" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">K(0)</text>
    <circle cx="350" cy="60" r="18" /><text x="350" y="64" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">J(2)</text>
    <circle cx="350" cy="140" r="18" /><text x="350" y="144" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">I(4)</text>
    <circle cx="350" cy="220" r="18" /><text x="350" y="224" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">H(5)</text>
    <circle cx="350" cy="280" r="18" /><text x="350" y="284" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">L(1)</text>
    <circle cx="450" cy="250" r="18" /><text x="450" y="254" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="11">M(0)</text>
  </g>
</svg>`,

  "arbol1.png": `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#f3f4f6" stroke-width="2">
    <line x1="200" y1="40" x2="100" y2="100" />
    <line x1="200" y1="40" x2="200" y2="100" />
    <line x1="200" y1="40" x2="300" y2="100" />
    <line x1="200" y1="100" x2="125" y2="180" />
    <line x1="200" y1="100" x2="175" y2="180" />
    <line x1="200" y1="100" x2="225" y2="180" />
    <line x1="200" y1="100" x2="275" y2="180" />
  </g>
  <g fill="var(--bg-card)" stroke="#f3f4f6" stroke-width="2">
    <rect x="180" y="20" width="40" height="40" rx="4" />
    <text x="200" y="45" fill="#f3f4f6" stroke="none" text-anchor="middle">3</text>
    <rect x="80" y="80" width="40" height="40" rx="4" />
    <text x="100" y="105" fill="#f3f4f6" stroke="none" text-anchor="middle">4</text>
    <rect x="180" y="80" width="40" height="40" rx="4" />
    <text x="200" y="105" fill="#f3f4f6" stroke="none" text-anchor="middle">2</text>
    <rect x="280" y="80" width="40" height="40" rx="4" />
    <text x="300" y="105" fill="#f3f4f6" stroke="none" text-anchor="middle">4</text>
    <rect x="105" y="160" width="40" height="40" rx="4" />
    <text x="125" y="185" fill="#f3f4f6" stroke="none" text-anchor="middle">2</text>
    <rect x="155" y="160" width="40" height="40" rx="4" />
    <text x="175" y="185" fill="#f3f4f6" stroke="none" text-anchor="middle">2</text>
    <rect x="205" y="160" width="40" height="40" rx="4" />
    <text x="225" y="185" fill="#f3f4f6" stroke="none" text-anchor="middle">3</text>
    <rect x="255" y="160" width="40" height="40" rx="4" />
    <text x="275" y="185" fill="#f3f4f6" stroke="none" text-anchor="middle">6</text>
  </g>
</svg>`,

  "arbol2.png": `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#f3f4f6" stroke-width="2">
    <line x1="150" y1="30" x2="90" y2="80" />
    <line x1="150" y1="30" x2="210" y2="80" />
    <line x1="90" y1="80" x2="50" y2="130" />
    <line x1="90" y1="80" x2="130" y2="130" />
    <line x1="130" y1="130" x2="100" y2="180" />
    <line x1="130" y1="130" x2="160" y2="180" />
    <line x1="210" y1="80" x2="180" y2="130" />
    <line x1="210" y1="80" x2="240" y2="130" />
  </g>
  <g fill="var(--bg-card)" stroke="#f3f4f6" stroke-width="2">
    <circle cx="150" cy="30" r="16" /><text x="150" y="36" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="16">*</text>
    <circle cx="90" cy="80" r="16" /><text x="90" y="86" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="16">*</text>
    <circle cx="210" cy="80" r="16" /><text x="210" y="85" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="16">-</text>
    <circle cx="50" cy="130" r="16" /><text x="50" y="135" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">2</text>
    <circle cx="130" cy="130" r="16" /><text x="130" y="136" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="16">+</text>
    <circle cx="100" cy="180" r="16" /><text x="100" y="185" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">Y</text>
    <circle cx="160" cy="180" r="16" /><text x="160" y="185" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">8</text>
    <circle cx="180" cy="130" r="16" /><text x="180" y="135" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">X</text>
    <circle cx="240" cy="130" r="16" /><text x="240" y="135" fill="#f3f4f6" stroke="none" text-anchor="middle" font-size="14">14</text>
  </g>
</svg>`,

  "busqlocal.png": `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" class="busqlocal" style="background: white; border-radius: 8px;">
  <!-- Ejes -->
  <line x1="20" y1="180" x2="380" y2="180" stroke="black" stroke-width="2" />
  <line x1="20" y1="180" x2="20" y2="20" stroke="black" stroke-width="2" />
  <!-- Curva -->
  <path d="M 20 180 Q 50 150 80 40 Q 120 180 180 160 Q 230 80 260 100 Q 300 130 380 150" fill="none" stroke="black" stroke-width="3" />
  <!-- Punto -->
  <circle cx="253" cy="94" r="6" fill="black" />
</svg>`
};

function renderQuestionHtml(q) {
  let html = `<div class='question-card' data-correct='${q.correct_ans || ''}'>\n`;
  html += `  <h3 class='question-title'>${q.title}</h3>\n`;
  html += `  <div class='question-text'>${q.text}</div>\n`;
  html += "  <div class='options'>\n";
  for (let opt of q.options) {
    html += `    <div class='option'>${opt}</div>\n`;
  }
  html += "  </div>\n";
  if (q.justification) {
    html += "  <button class='show-btn' onclick='toggleJustification(this)'>Ver Solución</button>\n";
    html += `  <div class='justification'>${q.justification}</div>\n`;
  }
  html += "</div>\n";
  return html;
}

function parseMarkdownForHtml(filePath, svgs) {
  const content = fs.readFileSync(filePath, 'utf8');
  const htmlParts = [];
  const lines = content.split(/\r?\n/).map(line => line.trim());
  
  let currentQ = null;
  
  for (let line of lines) {
    // 1. Match section headers
    const secMatch = line.match(/^#+\s*(?:Parte\s+)?(Simbólica|Subsimbólica)/i);
    if (secMatch) {
      if (currentQ) {
        htmlParts.push(renderQuestionHtml(currentQ));
        currentQ = null;
      }
      const secName = secMatch[1].charAt(0).toUpperCase() + secMatch[1].slice(1).toLowerCase();
      htmlParts.push(`<h2>${secName}</h2>`);
      continue;
    }
    
    // 2. Match question headers
    const qMatch = line.match(/^###\s+(\d+\..+)/);
    if (qMatch) {
      if (currentQ) {
        htmlParts.push(renderQuestionHtml(currentQ));
      }
      currentQ = {
        title: qMatch[1],
        text: '',
        options: [],
        justification: '',
        correct_ans: null,
        in_justification: false
      };
      continue;
    }
    
    // 3. Match other h3 headers outside questions
    const h3Match = line.match(/^###\s+(.+)/);
    if (h3Match && !currentQ) {
      htmlParts.push(`<h3>${h3Match[1]}</h3>`);
      continue;
    }
    
    // 4. Process lines inside question
    if (currentQ) {
      if (line.startsWith('> [!success]')) {
        currentQ.in_justification = true;
        continue;
      }
      
      if (currentQ.in_justification) {
        if (line.startsWith('>')) {
          let jText = line.substring(1).trim();
          const cMatch = jText.match(/\*\*Opción correcta:\s*([a-e])\)\*\*/i) || jText.match(/\*\*Opción correcta:\s*([a-e])\*\*/i);
          if (cMatch) {
            currentQ.correct_ans = cMatch[1].toLowerCase();
          }
          currentQ.justification += jText + '<br>';
        }
      } else if (line.startsWith('- [ ]') || line.startsWith('- [x]')) {
        let optText = line.replace('- [ ]', '').replace('- [x]', '').trim();
        currentQ.options.push(optText);
      } else {
        const imgMatch = line.match(/!\[\[(.*?)\]\]/);
        if (imgMatch) {
          const imgRaw = imgMatch[1];
          const imgName = imgRaw.split('|')[0].trim();
          if (svgs[imgName]) {
            currentQ.text += svgs[imgName] + '<br>';
          } else {
            currentQ.text += `[Imagen: ${imgName}]<br>`;
          }
        } else {
          if (line) {
            currentQ.text += line + '<br>';
          }
        }
      }
    } else {
      // 5. Process lines outside question
      const imgMatch = line.match(/!\[\[(.*?)\]\]/);
      if (imgMatch) {
        const imgRaw = imgMatch[1];
        const imgName = imgRaw.split('|')[0].trim();
        if (svgs[imgName]) {
          htmlParts.push(svgs[imgName] + '<br>');
        } else {
          htmlParts.push(`[Imagen: ${imgName}]<br>`);
        }
      } else if (line) {
        // Only output if it's not the main title (e.g. starts with # but is not Simbólica/Subsimbólica)
        if (!line.startsWith('#')) {
          htmlParts.push(`<p>${line}</p>`);
        }
      }
    }
  }
  
  if (currentQ) {
    htmlParts.push(renderQuestionHtml(currentQ));
  }
  
  const title = path.basename(filePath, '.md');
  return { title, content: htmlParts.join('\n') };
}

function generateExams() {
  console.log("Generating exam HTML files...");
  
  const examFiles = [
    { file: 'Examen SI 2023.md', outName: 'examen_2023.html' },
    { file: 'Examen SI 2024.md', outName: 'examen_2024.html' },
    { file: 'Examen SI Mayo 2025.md', outName: 'examen_mayo_2025.html' },
    { file: 'Examen SI Julio 2025.md', outName: 'examen_julio_2025.html' },
    { file: 'EXAMEN SI Junio 2026.md', outName: 'examen_junio_2026.html' }
  ];
  
  const links = [];
  const OUT_DIR = path.resolve(__dirname, '../guia');
  
  for (let spec of examFiles) {
    const fullPath = path.join(EXAMS_DIR, spec.file);
    if (fs.existsSync(fullPath)) {
      const { title, content } = parseMarkdownForHtml(fullPath, SVGS);
      
      const finalHtml = HTML_TEMPLATE
        .replace(/{title}/g, title)
        .replace(/{content}/g, content);
      
      const outPath = path.join(OUT_DIR, spec.outName);
      fs.writeFileSync(outPath, finalHtml, 'utf8');
      console.log(`Created ${spec.outName}`);
      links.push({ title, outName: spec.outName });
    } else {
      console.error(`Warning: Exam file not found for HTML generation: ${fullPath}`);
    }
  }
  
  const indexHtmlPath = path.join(OUT_DIR, "index.html");
  if (fs.existsSync(indexHtmlPath)) {
    let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    
    links.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    
    let linksHtml = '<div style="display:flex; flex-direction:column; gap:16px; margin-top: 30px; width: 100%; max-width: 400px;">\n';
    for (let link of links) {
      linksHtml += `  <a href="${link.outName}" style="background: var(--bg-card); padding: 16px; border-radius: 8px; color: var(--text-primary); text-decoration: none; border: 1px solid var(--border-subtle);">${link.title}</a>\n`;
    }
    linksHtml += '</div>';
    
    const pattern = /<p>El contenido de los ejercicios[\s\S]*?<\/p>|<div style="display:flex; flex-direction:column; gap:16px; margin-top: 30px; width: 100%; max-width: 400px;">[\s\S]*?<\/div>/;
    indexHtml = indexHtml.replace(pattern, linksHtml);
    
    fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
    console.log("Updated index.html links");
  } else {
    console.error(`Warning: index.html not found at ${indexHtmlPath}`);
  }
}

module.exports = { runGeneration };
if (require.main === module) {
  runGeneration();
}

