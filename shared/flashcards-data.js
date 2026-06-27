// Automatically generated flashcards. Do not edit directly.
window.FlashcardsData = {
  "introduccion": [
    {
      "q": "¿Qué es la Inteligencia Artificial?",
      "a": "Disciplina científica que crea programas que ejecutan operaciones del pensamiento humano."
    },
    {
      "q": "¿Quién propuso el Test de Turing?",
      "a": "Alan Turing en 1950."
    },
    {
      "q": "¿Qué es Dartmouth 1956?",
      "a": "El congreso fundacional de la Inteligencia Artificial."
    },
    {
      "q": "¿Quiénes son los 'pulcros' o 'neats'?",
      "a": "Defensores de la lógica y el razonamiento simbólico formal."
    },
    {
      "q": "¿Quiénes son los 'desaliñados' o 'scruffies'?",
      "a": "Defensores de la perspectiva funcional y el conexionismo."
    },
    {
      "q": "¿Qué es un agente inteligente?",
      "a": "Cualquier entidad que percibe su entorno y actúa sobre él."
    },
    {
      "q": "¿Qué define la función de un agente?",
      "a": "Asocia cada secuencia de percepciones con una acción."
    },
    {
      "q": "¿Qué es PEAS?",
      "a": "Siglas de Medida de Rendimiento, Entorno, Actuadores y Sensores."
    },
    {
      "q": "¿Qué es un entorno accesible?",
      "a": "Aquel en el que los sensores del agente le dan acceso al estado total."
    },
    {
      "q": "Diferencia entre entorno determinista y estocástico",
      "a": "En el determinista, el siguiente estado se define por el actual y la acción; en el estocástico hay incertidumbre."
    },
    {
      "q": "¿Qué es un entorno episódico?",
      "a": "Cada episodio de percepción y acción es independiente de los demás."
    },
    {
      "q": "¿Qué es un entorno estático?",
      "a": "Aquel que no cambia mientras el agente está decidiendo."
    },
    {
      "q": "¿Qué es un entorno discreto?",
      "a": "Tiene un número finito y delimitado de percepciones y acciones."
    },
    {
      "q": "¿Qué es un agente reactivo simple?",
      "a": "Toma decisiones basadas únicamente en la percepción actual."
    },
    {
      "q": "¿Qué es un agente basado en modelos?",
      "a": "Mantiene un estado interno para seguir la pista de aspectos no visibles."
    },
    {
      "q": "¿Qué es un agente basado en metas?",
      "a": "Combina el estado interno y un objetivo para planificar acciones."
    },
    {
      "q": "¿Qué es un agente basado en utilidad?",
      "a": "Usa una función de evaluación para maximizar su felicidad o rendimiento."
    },
    {
      "q": "¿Qué es el informe Lighthill?",
      "a": "Documento de 1973 que causó el primer invierno de la IA en Reino Unido."
    },
    {
      "q": "¿Qué es la IA neuro-simbólica?",
      "a": "Hibridación de enfoques simbólicos (reglas) y subsimbólicos (redes)."
    },
    {
      "q": "¿Qué es CommonKADS?",
      "a": "Una metodología estructurada para el desarrollo de sistemas de conocimiento."
    }
  ],
  "busqueda": [
    {
      "q": "¿Qué es el espacio de estados?",
      "a": "Conjunto de todos los estados alcanzables desde el estado inicial."
    },
    {
      "q": "¿Qué es la frontera de búsqueda?",
      "a": "Conjunto de todos los nodos frontera que han sido generados pero no expandidos."
    },
    {
      "q": "¿Qué es un nodo en búsqueda?",
      "a": "Estructura que representa un estado y almacena información del camino."
    },
    {
      "q": "¿Qué es la completitud en búsqueda?",
      "a": "Propiedad de garantizar que se encontrará una solución si existe."
    },
    {
      "q": "¿Qué es la optimalidad?",
      "a": "Propiedad de encontrar la solución con el menor coste de camino."
    },
    {
      "q": "¿Cuál es la complejidad temporal de BFS?",
      "a": "Exponencial: O(b^d)."
    },
    {
      "q": "Complejidad espacial de DFS",
      "a": "Lineal: O(b * m)."
    },
    {
      "q": "¿Qué es el backtracking?",
      "a": "Técnica de retroceso que ahorra memoria en la búsqueda en profundidad."
    },
    {
      "q": "¿Cómo ordena la frontera la búsqueda de coste uniforme (UCS)?",
      "a": "Por el coste acumulado g(n) de menor a mayor."
    },
    {
      "q": "¿Qué es la búsqueda avara (Greedy)?",
      "a": "Estrategia heurística guiada únicamente por la estimación h(n)."
    },
    {
      "q": "¿Qué es la búsqueda A*?",
      "a": "Combina coste real y heurística: f(n) = g(n) + h(n)."
    },
    {
      "q": "¿Cuándo es admisible una heurística?",
      "a": "Cuando nunca sobreestima el coste real para llegar a la meta."
    },
    {
      "q": "¿Cuándo es consistente una heurística?",
      "a": "Cuando cumple la desigualdad triangular: h(n) <= c(n, a, n') + h(n')."
    },
    {
      "q": "¿Qué es un máximo local?",
      "a": "Estado que es mejor que sus vecinos pero no es la meta óptima."
    },
    {
      "q": "¿Qué es la búsqueda en profundidad limitada?",
      "a": "Búsqueda en profundidad con un límite fijo l."
    },
    {
      "q": "¿Qué es la búsqueda de profundidad iterativa (IDS)?",
      "a": "Búsqueda limitada incrementando el límite l desde 0."
    },
    {
      "q": "¿Qué es la búsqueda local?",
      "a": "Opera sobre un único estado actual, sin retener el camino."
    },
    {
      "q": "¿Qué es el algoritmo Hill-Climbing?",
      "a": "Búsqueda local que se mueve siempre hacia el vecino con mejor evaluación."
    },
    {
      "q": "¿Qué es el Temple Simulado (Simulated Annealing)?",
      "a": "Búsqueda local que permite de forma estocástica movimientos peores."
    },
    {
      "q": "¿Qué es el Closed Set o Lista de Cerrados?",
      "a": "Conjunto de nodos ya visitados para evitar ciclos en búsqueda en grafos."
    }
  ],
  "representacion": [
    {
      "q": "¿Qué es la base de conocimientos?",
      "a": "Componente que almacena los hechos y reglas del dominio."
    },
    {
      "q": "¿Qué es una taxonomía?",
      "a": "Clasificación jerárquica de conceptos basada en la relación is-a."
    },
    {
      "q": "¿Qué es una ontología?",
      "a": "Vocabulario formal que define conceptos, relaciones y restricciones."
    },
    {
      "q": "¿Qué es una red semántica?",
      "a": "Grafo donde los nodos son conceptos y los arcos son relaciones."
    },
    {
      "q": "¿Qué es la herencia de propiedades?",
      "a": "Mecanismo por el cual un concepto hereda atributos de sus superiores."
    },
    {
      "q": "¿Qué es un marco (Frame)?",
      "a": "Estructura de datos para representar situaciones estereotipadas."
    },
    {
      "q": "¿Qué es un slot (ranura) en un marco?",
      "a": "Un atributo o propiedad del marco."
    },
    {
      "q": "¿Qué es una faceta en un marco?",
      "a": "Define restricciones o comportamientos asociados a un slot."
    },
    {
      "q": "¿Qué es un valor por defecto (default value)?",
      "a": "Valor heredable que se asume a falta de información explícita."
    },
    {
      "q": "¿Qué es un demonio (if-needed, if-added)?",
      "a": "Procedimiento que se activa automáticamente al leer o modificar un slot."
    },
    {
      "q": "¿Qué es una regla de producción?",
      "a": "Estructura declarativa y procedimental de tipo IF-THEN."
    },
    {
      "q": "¿Qué es el motor de inferencia?",
      "a": "Componente que aplica las reglas sobre la memoria activa para deducir hechos."
    },
    {
      "q": "¿Qué es la memoria activa o de trabajo?",
      "a": "Contiene los hechos, datos e hipótesis del problema actual."
    },
    {
      "q": "¿Qué es el conjunto conflicto?",
      "a": "Lista de reglas cuyas precondiciones se cumplen en la memoria activa."
    },
    {
      "q": "¿Qué es la fase de equiparación (match)?",
      "a": "Paso donde el motor compara precondiciones contra hechos de la memoria."
    },
    {
      "q": "¿Qué es la resolución de conflictos?",
      "a": "Decidir qué regla del conjunto conflicto se va a ejecutar."
    },
    {
      "q": "¿Qué es la regla IFALL?",
      "a": "Exige la verificación simultánea de todas sus precondiciones (AND)."
    },
    {
      "q": "¿Qué es la regla IFANY?",
      "a": "Se activa con que se cumpla al menos una precondición (OR)."
    },
    {
      "q": "¿Qué es la fase de restricción?",
      "a": "Filtro rápido para descartar reglas irrelevantes en el emparejamiento."
    },
    {
      "q": "¿Qué es el encadenamiento progresivo?",
      "a": "Inferencia hacia adelante partiendo de hechos conocidos hacia metas."
    }
  ],
  "razonamiento": [
    {
      "q": "¿Qué es la inferencia lógica?",
      "a": "Proceso de derivar nuevas sentencias a partir de sentencias existentes."
    },
    {
      "q": "¿Qué es la solidez (soundness)?",
      "a": "Propiedad de derivar únicamente sentencias lógicamente implicadas."
    },
    {
      "q": "¿Qué es la completitud lógica?",
      "a": "Propiedad de ser capaz de derivar todas las sentencias implicadas."
    },
    {
      "q": "¿Qué es el model checking?",
      "a": "Comprobación sistemática de tablas de verdad para verificar implicaciones."
    },
    {
      "q": "Complejidad del model checking",
      "a": "Exponencial temporal: O(2^n)."
    },
    {
      "q": "¿Qué es el Modus Ponens?",
      "a": "Regla que infiere B si se tiene A y A -> B."
    },
    {
      "q": "¿Qué es el Modus Tollens?",
      "a": "Regla que infiere no A si se tiene no B y A -> B."
    },
    {
      "q": "¿Qué es la Forma Normal Conjuntiva (CNF)?",
      "a": "Sentencia lógica expresada como una conjunción de disyunciones de literales."
    },
    {
      "q": "¿Qué es el Teorema de Resolución?",
      "a": "Regla de inferencia completa que trabaja sobre CNF por contradicción."
    },
    {
      "q": "¿Qué es la refutación por resolución?",
      "a": "Demostrar KB |= A añadiendo no A a KB y buscando una cláusula vacía."
    },
    {
      "q": "¿Qué es una cláusula de Horn?",
      "a": "Disyunción de literales con como máximo un literal positivo."
    },
    {
      "q": "¿Qué es el encadenamiento regresivo?",
      "a": "Inferencia hacia atrás partiendo de una hipótesis buscando justificaciones."
    },
    {
      "q": "¿Qué es la Base Lógica Expandida (BLE)?",
      "a": "Producto cartesiano completo de manifestaciones e interpretaciones."
    },
    {
      "q": "¿Qué es la Base Lógica Reducida (BLR)?",
      "a": "Conjunto de complejos válidos tras aplicar el conocimiento experto E."
    },
    {
      "q": "¿Qué es la función de conocimiento E?",
      "a": "Reglas médicas estrictas que descartan combinaciones imposibles de la BLE."
    },
    {
      "q": "¿Qué es una tautología?",
      "a": "Sentencia que es verdadera en todos los modelos posibles."
    },
    {
      "q": "¿Qué es la insatisfacibilidad?",
      "a": "Propiedad de una sentencia de ser falsa en todos los modelos posibles."
    },
    {
      "q": "¿Qué es la factorización en resolución?",
      "a": "Eliminar duplicados de literales dentro de una cláusula (A v A => A)."
    },
    {
      "q": "¿Qué es el teorema de la deducción?",
      "a": "KB |= A si y solo si (KB -> A) es lógicamente válida."
    },
    {
      "q": "¿Qué es el teorema de la contradicción?",
      "a": "KB |= A si y solo si (KB ^ ~A) es insatisfacible."
    }
  ],
  "planificacion": [
    {
      "q": "¿Qué es la planificación clásica?",
      "a": "Búsqueda de una secuencia de acciones para alcanzar un estado meta."
    },
    {
      "q": "¿Qué es el lenguaje STRIPS?",
      "a": "Representación formal de estados y acciones mediante condiciones y efectos."
    },
    {
      "q": "¿Cuáles son los componentes de una acción en STRIPS?",
      "a": "Nombre de la acción, precondiciones y efectos."
    },
    {
      "q": "¿Qué contiene la precondición de una acción?",
      "a": "Hechos que deben ser verdaderos para poder ejecutar la acción."
    },
    {
      "q": "¿Qué es la lista ADD en STRIPS?",
      "a": "Lista de hechos que pasan a ser verdaderos tras ejecutar la acción."
    },
    {
      "q": "¿Qué es la lista DELETE en STRIPS?",
      "a": "Lista de hechos que dejan de ser verdaderos tras ejecutar la acción."
    },
    {
      "q": "¿Qué es la planificación progresiva?",
      "a": "Búsqueda hacia adelante desde el estado inicial al estado meta."
    },
    {
      "q": "¿Qué es la planificación regresiva?",
      "a": "Búsqueda hacia atrás desde el estado meta hacia el inicial."
    },
    {
      "q": "¿Qué es un plan de orden parcial?",
      "a": "Plan donde algunas acciones no tienen una secuencia temporal estricta."
    },
    {
      "q": "¿Qué es un plan lineal?",
      "a": "Secuencia estrictamente ordenada de acciones ejecutadas de forma secuencial."
    },
    {
      "q": "¿Qué es el problema del mundo de los bloques?",
      "a": "Dominio clásico de planificación con bloques sobre una mesa."
    },
    {
      "q": "¿Qué es la anomalía de Sussman?",
      "a": "Problema en el mundo de los bloques que demuestra los fallos de planificadores no entrelazados."
    },
    {
      "q": "¿Qué es un enlace causal?",
      "a": "Relación que asocia un efecto de una acción con la precondición de otra."
    },
    {
      "q": "¿Qué es una amenaza en planificación parcial?",
      "a": "Acción que puede borrar la precondición que sostiene un enlace causal."
    },
    {
      "q": "¿Qué es la planificación en el espacio de planes?",
      "a": "Buscar en un espacio donde los nodos son planes incompletos."
    },
    {
      "q": "¿Qué es la planificación en el espacio de estados?",
      "a": "Buscar en un espacio donde los nodos son estados físicos del mundo."
    },
    {
      "q": "¿Qué es una heurística en planificación?",
      "a": "Estimación del número de acciones restantes para llegar a la meta."
    },
    {
      "q": "¿Qué es un grafo de planificación?",
      "a": "Estructura que estima el alcance de estados mediante niveles de hechos y acciones."
    },
    {
      "q": "¿Qué es una relación de exclusión mutua (MUTEX)?",
      "a": "Incompatibilidad entre dos acciones o hechos en un mismo nivel del grafo."
    },
    {
      "q": "¿Qué es el algoritmo Graphplan?",
      "a": "Algoritmo de planificación basado en la extracción de planes sobre un grafo de planificación."
    }
  ],
  "conexionistas": [
    {
      "q": "¿Qué es el conexionismo?",
      "a": "Enfoque de IA subsimbólica basado en redes de unidades simples interconectadas."
    },
    {
      "q": "Pilar de la IA subsimbólica",
      "a": "El conocimiento implícito aprendido a partir de los datos."
    },
    {
      "q": "¿Qué es el aprendizaje de Hebb?",
      "a": "Regla biológica: la conexión entre dos neuronas se refuerza si se activan a la vez."
    },
    {
      "q": "Ventaja de la IA subsimbólica",
      "a": "Su alta potencia en percepción visual, de voz y de texto."
    },
    {
      "q": "Limitación de la IA subsimbólica",
      "a": "La baja explicabilidad (caja negra) y el alto coste computacional."
    },
    {
      "q": "Diferencia IA simbólica de la subsimbólica",
      "a": "La simbólica usa reglas explícitas; la subsimbólica aprende patrones implícitos."
    },
    {
      "q": "¿Qué es el aprendizaje supervisado?",
      "a": "Entrenamiento guiado por muestras con salidas objetivo conocidas."
    },
    {
      "q": "¿Qué es el aprendizaje no supervisado?",
      "a": "Entrenamiento sin etiquetas, donde la red agrupa por similitudes."
    },
    {
      "q": "¿Qué es una función de transferencia?",
      "a": "Función que define la salida de una neurona a partir de su entrada neta."
    },
    {
      "q": "¿Qué es una función escalón?",
      "a": "Función que devuelve 1 si la entrada supera un umbral y 0 en caso contrario."
    },
    {
      "q": "¿Qué es la función sigmoide?",
      "a": "Función de activación suave no lineal con salida en el rango [0,1]."
    },
    {
      "q": "¿Qué es la función tangente hiperbólica?",
      "a": "Función de activación suave no lineal con salida en el rango [-1,1]."
    },
    {
      "q": "Función lineal en redes neuronales",
      "a": "Devuelve el mismo valor de entrada, usada en regresión en la capa de salida."
    },
    {
      "q": "¿Qué es la explicabilidad (XAI)?",
      "a": "Capacidad de un sistema de IA de explicar el porqué de sus decisiones."
    },
    {
      "q": "¿Por qué se hibridan los modelos?",
      "a": "Para combinar la explicabilidad simbólica y la potencia de datos subsimbólica."
    },
    {
      "q": "Causa de los inviernos de la IA",
      "a": "Grandes expectativas incumplidas y retirada de fondos de investigación."
    },
    {
      "q": "¿Qué es el conexionismo distribuido?",
      "a": "El conocimiento se almacena en los pesos de toda la red, no en un punto."
    },
    {
      "q": "¿Qué es una red neuronal artificial?",
      "a": "Modelo computacional que emula el procesamiento de las neuronas biológicas."
    },
    {
      "q": "¿Qué es un patrón de entrada?",
      "a": "Vector numérico que representa las características alimentadas a la red."
    },
    {
      "q": "¿Qué es el aprendizaje por refuerzo?",
      "a": "Aprendizaje basado en la interacción con el entorno mediante premios y castigos."
    }
  ],
  "neurona": [
    {
      "q": "¿Qué es la neurona de McCulloch-Pitts?",
      "a": "Primer modelo lógico-matemático de una neurona biológica (1943)."
    },
    {
      "q": "¿Qué es el Perceptrón Simple?",
      "a": "Clasificador lineal de una capa desarrollado por Rosenblatt en 1958."
    },
    {
      "q": "¿Qué es la regla de aprendizaje del Perceptrón?",
      "a": "Algoritmo que corrige los pesos solo cuando la red comete un error."
    },
    {
      "q": "¿Qué es el ADALINE?",
      "a": "Adaptive Linear Neuron, desarrollado por Widrow-Hoff en 1960."
    },
    {
      "q": "¿Cómo calcula el error el ADALINE?",
      "a": "Usa la salida lineal pre-activación antes de aplicar la función de disparo."
    },
    {
      "q": "¿Qué es el término Bias (sesgo)?",
      "a": "Constante que permite desplazar el hiperplano divisor fuera del origen (0,0)."
    },
    {
      "q": "Ecuación de activación de la neurona",
      "a": "y = f( sum(w_i * x_i) + bias )."
    },
    {
      "q": "¿Qué representa el peso sináptico?",
      "a": "La fuerza de conexión o importancia del enlace entre dos neuronas."
    },
    {
      "q": "Limitación del Perceptrón monocapa",
      "a": "Solo puede resolver problemas linealmente separables."
    },
    {
      "q": "¿Quiénes demostraron la limitación del Perceptrón?",
      "a": "Minsky y Papert en 1969 con el problema XOR."
    },
    {
      "q": "¿Qué es una entrada inhibidora?",
      "a": "En McCulloch-Pitts, entrada que impide el disparo independientemente de las demás."
    },
    {
      "q": "¿Qué es una entrada excitadora?",
      "a": "Entrada que suma potencial hacia el umbral de disparo celular."
    },
    {
      "q": "¿Qué es el hiperplano divisor?",
      "a": "Línea o plano que separa las clases en el espacio de características."
    },
    {
      "q": "¿Qué es el sumatorio ponderado?",
      "a": "Entrada neta: la suma de entradas multiplicadas por sus pesos."
    },
    {
      "q": "Rango de salida de logsig",
      "a": "Rango continuo de 0 a 1."
    },
    {
      "q": "Rango de salida de tansig",
      "a": "Rango continuo de -1 a 1."
    },
    {
      "q": "¿Qué es una red monocapa?",
      "a": "Red sin capas intermedias; entradas directamente conectadas a salidas."
    },
    {
      "q": "¿Cuál es la regla Delta?",
      "a": "Regla del mínimo error cuadrático medio (LMS) usada por ADALINE."
    },
    {
      "q": "Por qué ADALINE es mejor que el Perceptrón",
      "a": "Su error lineal es derivable, permitiendo optimización matemática fina."
    },
    {
      "q": "¿Qué es el espacio de características?",
      "a": "Espacio N-dimensional donde se representan los patrones de entrada."
    }
  ],
  "feedforward": [
    {
      "q": "¿Qué es un Perceptrón Multicapa (MLP)?",
      "a": "Red feedforward con una o más capas ocultas de neuronas no lineales."
    },
    {
      "q": "Teorema de Aproximación Universal",
      "a": "Estipula que un MLP con una capa oculta no lineal puede aproximar cualquier función continua."
    },
    {
      "q": "Algoritmo Backpropagation",
      "a": "Método de retropropagación para entrenar redes multicapa mediante el gradiente de error."
    },
    {
      "q": "¿Qué es el descenso de gradiente?",
      "a": "Optimización que ajusta los pesos en dirección opuesta a la derivada del error."
    },
    {
      "q": "¿Qué es la tasa de aprendizaje?",
      "a": "Escalar que controla el tamaño del paso de actualización de los pesos."
    },
    {
      "q": "Peligro de tasa de aprendizaje muy alta",
      "a": "La red da pasos gigantescos y el error oscila caóticamente."
    },
    {
      "q": "Peligro de tasa de aprendizaje muy baja",
      "a": "La convergencia es excesivamente lenta y puede atascarse."
    },
    {
      "q": "¿Qué es el sobreajuste (overfitting)?",
      "a": "Cuando la red memoriza el ruido del conjunto de entrenamiento y pierde generalización."
    },
    {
      "q": "¿Qué es el conjunto de validación?",
      "a": "Conjunto de datos disjunto usado para vigilar pasivamente el error de generalización."
    },
    {
      "q": "Detención temprana (Early Stopping)",
      "a": "Parar el entrenamiento cuando el error de validación comienza a subir."
    },
    {
      "q": "Término momento (momentum)",
      "a": "Inercia que añade una fracción del ajuste anterior para evitar mínimos locales."
    },
    {
      "q": "Desvanecimiento del gradiente",
      "a": "Pérdida de fuerza del gradiente en capas profundas por multiplicar derivadas < 1."
    },
    {
      "q": "Error cuadrático medio (MSE)",
      "a": "Función de coste clásica que mide el promedio de los errores al cuadrado."
    },
    {
      "q": "Función en regresión en capa de salida",
      "a": "Capa final de salida lineal (purelin) para permitir cualquier magnitud."
    },
    {
      "q": "¿Qué es una capa oculta?",
      "a": "Capa de neuronas entre la entrada y la salida que extrae características abstractas."
    },
    {
      "q": "Regla de la cadena",
      "a": "Regla matemática de derivación usada para retropropagar errores en capas ocultas."
    },
    {
      "q": "¿Qué es un mínimo local?",
      "a": "Punto plano en la superficie de error que no es el óptimo absoluto global."
    },
    {
      "q": "¿Qué es una época de entrenamiento?",
      "a": "Un pase completo de todos los patrones del conjunto de entrenamiento por la red."
    },
    {
      "q": "No determinismo en Backpropagation",
      "a": "Debido a la inicialización aleatoria de las matrices de pesos sinápticos."
    },
    {
      "q": "¿Qué es la generalización de una red?",
      "a": "Capacidad de predecir correctamente salidas para patrones nunca vistos."
    }
  ],
  "autoorganizacion": [
    {
      "q": "¿Qué es un Mapa Autoorganizativo (SOM)?",
      "a": "Red competitiva no supervisada que proyecta datos multidimensionales en 1D o 2D."
    },
    {
      "q": "Creador del modelo SOM",
      "a": "Teuvo Kohonen."
    },
    {
      "q": "Unidad de Mejor Coincidencia (BMU)",
      "a": "La neurona de salida cuyos pesos están más cerca del patrón de entrada."
    },
    {
      "q": "Métrica para la BMU",
      "a": "Generalmente la distancia euclídea mínima."
    },
    {
      "q": "¿Qué es la función de vecindario?",
      "a": "Función que define cómo se arrastran los pesos de los vecinos de la BMU."
    },
    {
      "q": "Evolución de vecindad y tasa en SOM",
      "a": "Decrecen progresivamente en el transcurso del entrenamiento."
    },
    {
      "q": "Fase de ordenación en SOM",
      "a": "Fase inicial con tasa y radio grandes para estructurar el mapa."
    },
    {
      "q": "Fase de convergencia en SOM",
      "a": "Fase final con tasa y radio muy pequeños para congelar el aprendizaje."
    },
    {
      "q": "Efecto borde en SOM",
      "a": "Deformación perimetral por falta de vecinos hacia el exterior en los límites."
    },
    {
      "q": "Topología toroidal en SOM",
      "a": "Conexión envolvente de los bordes para suprimir el efecto de esquinas."
    },
    {
      "q": "Neuronas muertas en SOM",
      "a": "Neuronas que se inicializan muy lejos de los datos y nunca ganan la BMU."
    },
    {
      "q": "Red Growing Cell Structures (GCS)",
      "a": "Red dinámica que añade y elimina neuronas manteniendo símplices (triángulos)."
    },
    {
      "q": "Red Growing Neural Gas (GNG)",
      "a": "Red dinámica libre de mallas rígidas que inserta y elimina aristas/nodos."
    },
    {
      "q": "Criterio de eliminación en GNG",
      "a": "Borrar aristas que superan un límite de envejecimiento."
    },
    {
      "q": "¿Qué es el error de cuantización?",
      "a": "Diferencia acumulada entre los patrones de entrada y sus respectivas BMU."
    },
    {
      "q": "SOM en el Problema del Viajante",
      "a": "Usando una red con topología de vecindad lineal en anillo cerrado."
    },
    {
      "q": "Aprendizaje competitivo",
      "a": "Dinámica no supervisada donde las neuronas compiten y solo una (BMU) gana."
    },
    {
      "q": "Preservación topológica",
      "a": "Mantener la vecindad de los datos al proyectarlos a dimensiones menores."
    },
    {
      "q": "Zonas de inserción en GCS",
      "a": "Se insertan neuronas en las regiones que concentran el mayor error acumulado."
    },
    {
      "q": "Símplice en GCS",
      "a": "Elemento geométrico de interconexión rígida k-dimensional (ej: un triángulo)."
    }
  ],
  "evolutiva": [
    {
      "q": "Computación Evolutiva",
      "a": "Algoritmos metaheurísticos bio-inspirados en la selección natural y la genética."
    },
    {
      "q": "Padre de los Algoritmos Genéticos",
      "a": "John Henry Holland."
    },
    {
      "q": "¿Qué es el Genotipo?",
      "a": "La representación de la solución codificada en el ordenador (tira binaria)."
    },
    {
      "q": "¿Qué es el Fenotipo?",
      "a": "La solución física real evaluable que cobra vida tras decodificar el genotipo."
    },
    {
      "q": "Función de ajuste (Fitness)",
      "a": "Función que mide y puntúa la aptitud de un individuo."
    },
    {
      "q": "Operador de selección",
      "a": "Decide qué individuos se reproducirán basándose en su fitness."
    },
    {
      "q": "Selección por Ruleta",
      "a": "Selección proporcional al fitness, que puede causar convergencia prematura."
    },
    {
      "q": "Selección por Torneo",
      "a": "Selección en subconjuntos locales para preservar diversidad."
    },
    {
      "q": "Cruce (Crossover)",
      "a": "Operador de explotación que combina genes de dos padres."
    },
    {
      "q": "Mutación",
      "a": "Operador de exploración que altera aleatoriamente bits del cromosoma."
    },
    {
      "q": "Elitismo",
      "a": "Asegurar que los mejores individuos pasen intactos a la siguiente generación."
    },
    {
      "q": "Reemplazo Steady-State",
      "a": "Modelo donde solo se reemplazan uno o dos individuos en cada ciclo."
    },
    {
      "q": "Crowding",
      "a": "Reemplazo Steady-State del individuo más parecido para mantener diversidad."
    },
    {
      "q": "Algoritmo Memético",
      "a": "Hibridación de Algoritmo Genético con búsqueda local (como Hill-Climbing)."
    },
    {
      "q": "Programación Genética",
      "a": "Algoritmos evolutivos donde los individuos se codifican como árboles sintácticos."
    },
    {
      "q": "Cruce en Programación Genética",
      "a": "Intercambiando subárboles completos entre los dos padres."
    },
    {
      "q": "Convergencia prematura",
      "a": "Pérdida de diversidad genética que atasca el algoritmo en un mínimo local."
    },
    {
      "q": "Bloques constructores",
      "a": "Esquemas cortos altamente adaptados combinados por el cruce."
    },
    {
      "q": "Reemplazo generacional",
      "a": "Toda la población de padres es sustituida de golpe por la de los hijos."
    },
    {
      "q": "Mutación del 100%",
      "a": "El algoritmo degenera en una búsqueda aleatoria ciega."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FlashcardsData: window.FlashcardsData };
}
