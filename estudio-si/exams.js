const EXAM_QUESTIONS = [
  {
    "source": "examen_julio_2025",
    "question": "Como modelo de representación del conocimiento, las reglas de producción...",
    "options": [
      "a) No suelen almacenar conocimiento heurístico.",
      "b) Deben combinarse para poder formar unidades completas de razonamiento.",
      "c) Siempre involucran condiciones y acciones explícitas.",
      "d) Ninguna de las anteriores es correcta."
    ],
    "justification": "- La característica definitoria y estructural de las reglas de producción (como modelo procedimental) es precisamente que se organizan siempre en una arquitectura explícita de tres partes: un <b>IF</b> (que representa la condición o premisa explícita), un <b>THEN</b> (que representa la acción o conclusión explícita) y, opcionalmente, un <b>ELSE</b> (alternativa). Por tanto, su diseño siempre requiere especificar explícitamente qué condición debe darse y qué acción o conclusión desencadena.\n\n- <b>Por qué la b) es FALSA:</b> La teoría establece como una de las grandes ventajas de las reglas de producción su alta modularidad, afirmando literalmente que <b>\"Cada regla constituye una unidad completa de razonamiento\"</b> por sí sola.  \n  \nPor lo tanto, es falso afirmar que <i>necesitan</i> combinarse con otras para formar una unidad completa de razonamiento, ya que son piezas lógicas independientes.\n\n- <b>Por qué la a) es FALSA:</b> Es exactamente al revés.  \n  \nEntre las ventajas fundamentales de los métodos procedimentales y las reglas de producción se cita textualmente que <b>\"incorporan de forma natural conocimiento heurístico\"</b> y permiten almacenar saberes muy específicos derivados de la experiencia.",
    "correct": 2,
    "category": "representacion",
    "tags": [
      "BLE/BLR",
      "RNA",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Cuando una regla se activa, ¿de qué depende su ejecución?",
    "options": [
      "a) De la estrategia de resolución de conflictos.",
      "b) Del contenido de la memoria activa.",
      "c) De las metas establecidas como hipótesis de trabajo.",
      "d) De todas las anteriores."
    ],
    "justification": "En el ciclo de funcionamiento de un sistema de producción, el \"contenido de la memoria activa\" determina qué reglas se activan (fase de emparejamiento o <i>matching</i>), ya que evalúa qué condiciones se cumplen en ese instante.  \n  \nSin embargo, una vez que el sistema tiene un conjunto de reglas activadas (conjunto conflicto), la decisión final de cuál de ellas se ejecuta (fase de acción) depende en exclusiva de la estrategia de \"resolución de conflictos\" dictaminada por el motor de inferencias (por ejemplo, orden léxico, mayor especificidad o prioridad en el tiempo).",
    "correct": 0,
    "category": "representacion",
    "tags": [
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Los agentes basados en metas...",
    "options": [
      "a) Basan su comportamiento en reflejos al estado del mundo.",
      "b) Mantienen un conocimiento interno del mundo y las consecuencias de sus acciones.",
      "c) Consideran la bondad de los estados para alcanzar los estados finales.",
      "d) Todas son correctas."
    ],
    "justification": "Dentro de las arquitecturas clásicas de agentes inteligentes, los agentes basados en metas no solo operan respondiendo de forma refleja al entorno (eso es propio de agentes reactivos simples). Necesitan llevar un registro del estado interno actual del mundo, combinarlo con un modelo de cómo sus acciones cambian ese entorno (las consecuencias) y utilizar información sobre su \"meta\" u objetivo para planificar qué secuencias de acciones les permitirán llegar al estado deseado.  \n  \nNo cuantifican la \"bondad\" comparativa de las metas (eso corresponde a los agentes basados en utilidad).",
    "correct": 1,
    "category": "introduccion",
    "tags": [
      "Planificación"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Sea un dominio con tres manifestaciones posibles $\\{M(1), M(2), M(3)\\}$ y dos interpretaciones posibles $\\{I(1), I(2)\\}$. Desde una perspectiva categórica, y dadas las reglas del dominio:  \n<div style=\"background: rgba(255,255,255,0.05); border-left: 3px solid #10b981; padding: 10px 15px; margin: 10px 0; border-radius: 4px; font-family: monospace; font-size: 0.95em; color: #d1d5db;\">\nR1: $M(1) \\lor M(2) \\lor M(3) \\implies I(1) \\lor I(2)$<br>\n<br>\nR2: $I(1) \\implies \\neg M(1) \\land M(2)$<br>\n<br>\nR3: $I(2) \\land \\neg I(1) \\implies M(1) \\land M(3)$\n</div>\n¿Cuántos posibles conjuntos manifestación-interpretación contiene la Base Lógica Reducida?",
    "options": [
      "a) 7",
      "b) 32",
      "c) 16",
      "d) 11"
    ],
    "justification": "La Base Lógica Expandida (BLE) contiene todas las combinaciones posibles de variables, que son $2^5 = 32$ complejos.  \n  \nPara obtener la Base Lógica Reducida (BLR), aplicamos las restricciones que dictan las reglas, eliminando los complejos absurdos:\n\n- <b>R2 exige que:</b> Si $I(1) = 1$, entonces obligatoriamente $M(1) = 0$ y $M(2) = 1$. Esto elimina cualquier combinación donde $I(1)=1$ y no se cumplan esos valores.  \n  \nDe los 16 casos iniciales donde $I(1)=1$, nos quedamos solo con <b>4 casos válidos</b> (ya que solo varían $I(2)$ y $M(3)$, dando $2 \\times 2 = 4$).\n\n- <b>R3 exige que:</b> Si $I(2)=1$ e $I(1)=0$, entonces obligatoriamente $M(1)=1$ y $M(3)=1$. De los 8 casos iniciales con estas condiciones, nos quedamos solo con los <b>2 casos válidos</b> donde $M(2)$ vale 0 o 1.\n\n- <b>R1 exige que:</b> Si existe alguna manifestación activa, debe existir alguna interpretación.  \n  \nNos quedan por evaluar los casos donde $I(1)=0$ e $I(2)=0$. Si ambas interpretaciones son $0$, ninguna manifestación puede ser $1$. Esto nos deja con <b>1 único caso válido</b>: todos los valores a 0.  \n  \nSumando los complejos válidos: $4 + 2 + 1 = 7$ conjuntos posibles en la BLR.",
    "correct": 0,
    "category": "razonamiento",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "<div style=\"background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; margin-bottom:15px; font-size: 0.9em; border-left: 3px solid #3b82f6; color: #9ca3af;\"><em>Contexto del ejercicio anterior:</em><br>\n<p style=\"margin:8px 0\">Sea un dominio con tres manifestaciones posibles $\\\\{M(1), M(2), M(3)\\\\}$ y dos interpretaciones posibles $\\\\{I(1), I(2)\\\\}$. Desde una perspectiva categórica, y dadas las reglas del dominio:</p>\n<div style=\"background:rgba(255,255,255,0.05);border-left:3px solid #10b981;padding:10px 15px;margin:8px 0;border-radius:4px;font-family:monospace;color:#d1d5db;\">\n  R1: $M(1) \\lor M(2) \\lor M(3) \\implies I(1) \\lor I(2)$<br>\n  R2: $I(1) \\implies \\neg M(1) \\land M(2)$<br>\n  R3: $I(2) \\land \\neg I(1) \\implies M(1) \\land M(3)$\n</div>\n</div>\n<p>Asumiendo $M(1)$ verdadero, la solución será...</p>",
    "options": [
      "a) $I(1) \\land I(2)$",
      "b) $I(1) \\land \\neg I(2)$",
      "c) Ambas las anteriores",
      "d) Ninguna de las anteriores"
    ],
    "justification": "Del cálculo anterior, sabemos que si $I(1)$ es verdadero, $M(1)$ es forzosamente falso (por la regla R2). Es decir, en la BLR no existe ningún caso válido en el que $I(1)$ y $M(1)$ sean verdaderos al mismo tiempo.  \n  \nSi observamos los 7 casos de la BLR elaborados en la pregunta anterior, los únicos donde $M(1)$ es verdadero son aquellos 2 casos derivados de la regla R3, y en ambos escenarios las interpretaciones toman el valor de $I(1)=0$ e $I(2)=1$. Por tanto, la solución que se inferiría al ser cierta $M(1)$ es estrictamente $\\neg I(1) \\land I(2)$. Al no aparecer esta expresión exacta en las opciones a) y b), la correcta es la d).",
    "correct": 3,
    "category": "razonamiento",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "<div style=\"background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; margin-bottom:15px; font-size: 0.9em; border-left: 3px solid #3b82f6; color: #9ca3af;\"><em>Contexto del ejercicio anterior:</em><br>\n<p style=\"margin:8px 0\">Sea un dominio con tres manifestaciones posibles $\\\\{M(1), M(2), M(3)\\\\}$ y dos interpretaciones posibles $\\\\{I(1), I(2)\\\\}$. Desde una perspectiva categórica, y dadas las reglas del dominio:</p>\n<div style=\"background:rgba(255,255,255,0.05);border-left:3px solid #10b981;padding:10px 15px;margin:8px 0;border-radius:4px;font-family:monospace;color:#d1d5db;\">\n  R1: $M(1) \\lor M(2) \\lor M(3) \\implies I(1) \\lor I(2)$<br>\n  R2: $I(1) \\implies \\neg M(1) \\land M(2)$<br>\n  R3: $I(2) \\land \\neg I(1) \\implies M(1) \\land M(3)$\n</div>\n</div>\n<p>Partiendo del problema original, ¿qué manifestación es más probable cuando ambas interpretaciones son verdaderas?</p>",
    "options": [
      "a) $M(1)$",
      "b) $M(2)$",
      "c) $M(3)$",
      "d) Son equiprobables"
    ],
    "justification": "Si asumimos que ambas interpretaciones son verdaderas, es decir, ocurre el caso $I(1)=1$ e $I(2)=1$, estaremos circunscritos a los casos derivados de que $I(1)$ es cierto.  \n  \nSegún la regla R2 ($I(1) \\Rightarrow \\neg M(1) \\land M(2)$), siempre que $I(1)$ se cumple, $M(2)$ debe darse inexcusablemente (probabilidad 1.0) y $M(1)$ jamás puede darse (probabilidad 0). $M(3)$ no está restringida por ninguna regla en este subescenario, por lo que su aparición es aleatoria.  \n  \nPor tanto, la manifestación absolutamente segura (y por ende más probable) bajo estas condiciones es $M(2)$.",
    "correct": 1,
    "category": "razonamiento",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "La ejecución de las reglas seleccionadas, en la fase de acción, concluye con...",
    "options": [
      "a) El proceso inferencial",
      "b) La verificación de si continuar o no el proceso cíclico",
      "c) La actualización de la memoria activa y el motor de inferencias",
      "d) Ambas b) y c) son correctas"
    ],
    "justification": "En los sistemas basados en reglas (sistemas de producción), la arquitectura establece un ciclo que incluye emparejamiento, resolución de conflictos y ejecución de acciones.  \n  \nEsta fase final de ejecución concluye procesando el consecuente de la regla, lo que modifica irrevocablemente los hechos del sistema, es decir, produce la actualización de la Memoria Activa introduciendo nuevo conocimiento (hipótesis) o alterando el actual.",
    "correct": 2,
    "category": "representacion",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Los procedimientos de búsqueda en profundidad...",
    "options": [
      "a) Demandan más recursos computacionales (en términos espaciales) que los basados en anchura",
      "b) No son completos en espacios de estados finitos si están basados en grafos",
      "c) Están limitados computacionalmente por el tamaño del espacio de estados si están basados en árboles",
      "d) Ninguna de las anteriores es correcta"
    ],
    "justification": "Se descartan una a una:\n\n- <b>a) es falsa:</b> La búsqueda en profundidad se caracteriza por ser mucho más eficiente en el consumo de memoria espacial $O(b \\cdot m)$ frente a la tremenda explosión de memoria de la búsqueda en anchura $O(b^d)$.\n\n- <b>b) es falsa:</b> La versión de grafos (que lleva un registro de nodos visitados o cerrados) sí es completa en espacios de estados finitos porque asegura que el algoritmo no quedará atrapado en bucles de redundancia.\n\n- <b>c) es falsa:</b> En su versión de árbol, si existen ciclos en el espacio del problema, la profundidad explorada se vuelve infinita.  \n  \nPor lo tanto, no se encuentra computacionalmente limitada por el tamaño del espacio, sino por la máxima ramificación cíclica (pudiendo ser infinita y quedarse atrapado).",
    "correct": 3,
    "category": "busqueda",
    "tags": [
      "BLE/BLR",
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "El conjunto de complejos manifestación-interpretación...",
    "options": [
      "a) Representa el conjunto total de situaciones posibles en el problema",
      "b) No es completo si el conocimiento no es categórico",
      "c) Presenta elementos mutuamente excluyentes",
      "d) Ninguna de las anteriores es correcta"
    ],
    "justification": "En el razonamiento categórico, el conjunto de complejos manifestación-interpretación ($M \\times I$) compone la Base Lógica Expandida (BLE). Este conjunto se formula construyendo y emparejando la exhaustividad completa de los vectores de síntomas (manifestaciones) y etiologías (interpretaciones). Por su mera definición, su construcción captura todas y cada una de las situaciones, escenarios o estados potenciales posibles para un problema antes de aplicar la función de conocimiento $E$ que filtra los complejos incompatibles.",
    "correct": 0,
    "category": "razonamiento",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Se dispone de un sistema de producción sobre un problema dado.  \n  \nEn cierto punto, el cliente se da cuenta que la información está incompleta, y necesita añadir dos reglas más que cubren unos casos específicos que no había contemplado anteriormente.  \n  \n¿Qué se debería de cambiar en el motor de inferencias?",
    "options": [
      "a) Se deben insertar las nuevas reglas",
      "b) Se deben insertar las nuevas reglas y los hechos que sean resultado de dichas reglas",
      "c) Se debe rehacer completamente el sistema de reglas, para adecuarlo a la problemática actual",
      "d) Nada"
    ],
    "justification": "Una de las ventajas de los sistemas de producción es su extrema modularidad e independencia.  \n  \nEl \"Motor de Inferencias\" es un componente fijo, encargado puramente del sistema de control y evaluación cíclica.  \n  \nTodo el conocimiento concreto (como las dos reglas nuevas) se almacena y añade de manera exclusiva a la Base de Reglas (Conocimiento). Por tanto, ante un requerimiento de adición de nueva información sobre el dominio, el motor de inferencias no experimenta ningún cambio estructural ni lógico.",
    "correct": 3,
    "category": "representacion",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Si hablamos de sistemas de producción...",
    "options": [
      "a) La base de conocimientos está formada por la base de reglas y el motor de inferencias",
      "b) Los sistemas dirigidos por los datos son más específicos, porque ejecutarán todas las reglas disponibles en función de la información introducida",
      "c) La memoria activa almacena todos los cambios de estado de nuestro sistema, de forma que representa siempre nuestro estado actual",
      "d) El motor de inferencias es el responsable de interaccionar con el mundo exterior"
    ],
    "justification": "En un sistema de producción clásico, la Memoria Activa actúa como la \"pizarra\" del sistema; su trabajo es albergar puramente los \"hechos\" instantáneos e ir almacenando cada variación y nuevo estado detectado tras la fase de acción de las reglas.  \n  \nEsta característica garantiza que la Memoria Activa mantenga con exactitud una instantánea continua y fidedigna del estado actual de ejecución en todo momento.  \n  \nSe descartan las otras opciones porque el motor de inferencias NO forma parte de la Base de Conocimientos (que es la conjunción de Base de Hechos y Base de Reglas), y porque las interfaces (no el motor) se encargan de la comunicación con el exterior.",
    "correct": 2,
    "category": "representacion",
    "tags": [
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Qué se encuentra en el \"core\" de los principales avances tecnológicos actuales y de los próximos años?",
    "options": [
      "a) La rama de la inteligencia artificial subsimbólica.",
      "b) La rama de la inteligencia artificial simbólica.",
      "c) La computación cuántica.",
      "d) Todas las anteriores.",
      "e) Ninguna de las anteriores."
    ],
    "justification": "Nos encontramos en la denominada \"tercera primavera de la IA\". Este resurgir masivo y el núcleo tecnológico actual (como el <i>Deep Learning</i>, ChatGPT, Visión por Computador, etc.) está impulsado única y exclusivamente por el paradigma conexionista o IA subsimbólica, alimentado por el fenómeno del <i>Big Data</i> y la capacidad de computación en paralelo.",
    "correct": 0,
    "category": "conexionistas",
    "tags": [
      "conexionistas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "En la evolución histórica de los sistemas conexionistas, ¿cuáles son precursores biológicos?",
    "options": [
      "a) Donald Hebb.",
      "b) Santiago Ramón y Cajal.",
      "c) Warren McCulloch.",
      "d) Todos los anteriores.",
      "e) Ninguno de los anteriores."
    ],
    "justification": "Ramón y Cajal descubrió la estructura fundamental del sistema nervioso (la Doctrina de la Neurona); Donald Hebb postuló la regla del aprendizaje sináptico (\"una vía que se usa, se refuerza\"); y Warren McCulloch (junto a Walter Pitts) fue el encargado de trasladar esa biología a un modelo lógico-matemático en 1943. Los tres conforman los cimientos biológicos de las redes neuronales.",
    "correct": 3,
    "category": "conexionistas",
    "tags": [
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Qué pretende la IA como ciencia y como ingeniería?",
    "options": [
      "a) Conocer cómo funcionan los seres inteligentes y qué pueden hacer con la ayuda de computadores.",
      "b) Cómo hacer que los computadores hagan las cosas que hacen las personas inteligentes.",
      "c) Cómo superar el Régimen de Lovelace.",
      "d) Construir o implementar \"Sistemas Inteligentes\": SCX, SS.EE, ...",
      "e) Todas las anteriores son correctas."
    ],
    "justification": "La IA se articula sobre un doble objetivo: como \"Ciencia\" persigue el entendimiento empírico de la mente y la superación del Régimen de Lovelace (lograr que una máquina origine ideas, no solo que repita código); y como \"Ingeniería\" busca la automatización práctica y construcción física de dichos sistemas (Sistemas Conexionistas, Sistemas Expertos, etc.).",
    "correct": 4,
    "category": "conexionistas",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Características específicas de los sistemas inteligentes?",
    "options": [
      "a) Intencionalidad: comportamiento guiado por metas.",
      "b) Incapacidad de conocer y proyectar el \"hoy sostenido\".",
      "c) Ser metódico, no innovador.",
      "d) Tener efecto serendipico.",
      "e) Ninguna de las anteriores está relacionada."
    ],
    "justification": "A diferencia de los programas informáticos tradicionales que siguen una serie de algoritmos fijos, los sistemas inteligentes (típicamente formulados como Agentes) se caracterizan fundamentalmente por su intencionalidad.  \n  \nEsto significa que perciben su entorno, evalúan un estado interno y toman decisiones ponderando acciones con el objetivo final de lograr y maximizar la satisfacción de una serie de metas u objetivos concretos.",
    "correct": 0,
    "category": "introduccion",
    "tags": [
      "introduccion"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Cuál es el principal trabajo científico en el que se basa la IA?",
    "options": [
      "a) \"The Nature of Explanation\" (W. Craik).",
      "b) \"Behaviour, purpose and teleology\" (Wiener, Rosenblueth y Bigelow).",
      "c) \"A logical calculus of the ideas immanent in nervous activity\" (McCulloch y Pitts).",
      "d) Todas las anteriores son correctas.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "El nacimiento formal de la inteligencia artificial y de los sistemas conexionistas como disciplina científica no bebe de una única fuente, sino de tres pilares multidisciplinares fundamentales de 1943: la propuesta cibernética sobre las máquinas teleológicas de Wiener, la capacidad de los sistemas para usar modelos lógicos de Craik, y la representación matemática-booleana de la neurona humana planteada por McCulloch y Pitts.",
    "correct": 3,
    "category": "conexionistas",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Quién acuña por primera vez y tal como se entiende hoy la expresión \"Artificial Intelligence\"?",
    "options": [
      "a) John McCarthy.",
      "b) Ada Lovelace.",
      "c) Alan Newell y Herbert Simon.",
      "d) Gottfried Leibniz.",
      "e) Alan Turing."
    ],
    "justification": "Fue el informático John McCarthy quien acuñó oficialmente el término \"Inteligencia Artificial\" para bautizar la célebre conferencia \"Proyecto de Investigación de Verano en Dartmouth sobre Inteligencia Artificial\" de 1956. Esta conferencia unió a las mentes más brillantes del momento (Minsky, Newell, Simon, etc.) y se considera el hito fundacional de la IA moderna.",
    "correct": 0,
    "category": "conexionistas",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Al aplicar el gradiente descendente para modificar los pesos de las conexiones de una RNA...",
    "options": [
      "a) Si este es cero, indica que el mínimo está lejos y es necesario realizar más saltos.",
      "b) Si es alto, se realiza un salto pequeño en el espacio de búsqueda.",
      "c) Si es bajo, se realiza un salto grande en el espacio de búsqueda.",
      "d) Es necesario modificar los pesos en sentido (signo) dictado por el gradiente.",
      "e) Es necesario modificar los pesos en sentido (signo) contrario al dictado por el gradiente."
    ],
    "justification": "El algoritmo del descenso del gradiente (basado en la Regla Delta) busca sistemáticamente el punto más bajo (el mínimo) de la función de error.  \n  \nPor definición matemática, el gradiente apunta en la dirección de máximo crecimiento de una función.  \n  \nPor tanto, para reducir el error de la RNA, los pesos siempre deben ajustarse desplazándose en el sentido u opuesto (restándolo) al vector gradiente.",
    "correct": 4,
    "category": "neurona",
    "tags": [
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "La RNA formada por una única neurona, sin capas ocultas, con una función de transferencia umbral, pensada para resolver problemas de clasificación, se llama...",
    "options": [
      "a) ADALINE.",
      "b) Backpropagation.",
      "c) Perceptrón.",
      "d) Perceptrón multicapa.",
      "e) La b) y la d) son correctas."
    ],
    "justification": "El Perceptrón simple es el modelo conexionista de clasificación más elemental introducido por Rosenblatt.  \n  \nDispone únicamente de capa de entrada y salida (sin ocultas) y utiliza específicamente una función de transferencia de tipo escalón o umbral (<i>hard limiter</i>). El ADALINE es muy similar, pero se diferencia arquitectónicamente en que calcula su regla de aprendizaje basándose en una función de transferencia estrictamente lineal, no de umbral.",
    "correct": 2,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Para utilizar un perceptrón multicapa para resolver el problema AND...",
    "options": [
      "a) No es necesario utilizar capas ocultas.",
      "b) Es necesario utilizar una capa oculta (con el número suficiente de neuronas), y no hacen falta más.",
      "c) Es necesario utilizar dos capas ocultas...",
      "d) Es necesario utilizar tres capas ocultas...",
      "e) Es necesario utilizar más de tres capas ocultas..."
    ],
    "justification": "El operador lógico AND (y también el OR) constituye un problema que es linealmente separable.  \n  \nEsto significa geométricamente que un hiperplano o línea recta es capaz de dividir el espacio de soluciones correctas e incorrectas.  \n  \nCualquier problema linealmente separable puede ser resuelto por una red de una sola capa (como un Perceptrón simple) sin necesidad de requerir arquitecturas multicapa.",
    "correct": 0,
    "category": "neurona",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "El número de neuronas ocultas de un perceptrón multicapa...",
    "options": [
      "a) Lo puede fijar el usuario como quiera.",
      "b) Depende del número de entradas y salidas del problema a resolver.",
      "c) Debe ser igual al número de neuronas de entrada...",
      "d) Debe ser igual al número de neuronas de entrada, pero depende del problema...",
      "e) Debe ser igual al número de neuronas de salida..."
    ],
    "justification": "_(Nota: Su valor óptimo empírico depende directamente de la complejidad del problema a resolver)._  \n  \nEl número de capas y de neuronas en las capas ocultas no está dictaminado matemáticamente por las entradas y salidas de la RNA. Constituye un hiperparámetro arquitectónico que el diseñador de la red configura a voluntad.  \n  \nSin embargo, en la práctica el usuario debe ajustar ese tamaño mediante prueba y error en base a la no-linealidad y complejidad del problema, evitando el sobreentrenamiento (si pone demasiadas) o la incapacidad de aprender (si pone demasiadas pocas).",
    "correct": 0,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Si al entrenar una RNA se utiliza una tasa de aprendizaje muy alta...",
    "options": [
      "a) Se acercará al mínimo con cambios muy pequeños.",
      "b) Se correrá el riesgo de oscilar en torno al mínimo.",
      "c) El entrenamiento se parará siempre en un mínimo local.",
      "d) El entrenamiento se parará siempre en un mínimo global.",
      "e) Se sobreentrenará la red."
    ],
    "justification": "La tasa de aprendizaje ($\\alpha$ o $\\eta$) es el multiplicador escalar que define la longitud o tamaño del \"paso\" que da el algoritmo de entrenamiento a lo largo del espacio de pesos.  \n  \nUna tasa sumamente pequeña ralentizará drásticamente el entrenamiento; por el contrario, si es muy alta, la red generará saltos enormes, cruzando de un lado al otro del valle del error repetidamente, lo que provoca oscilaciones caóticas y le impide aterrizar y converger en el fondo del mínimo de la función.",
    "correct": 1,
    "category": "neurona",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Las neuronas de la capa de entrada de un perceptrón multicapa...",
    "options": [
      "a) Aplican la función de transferencia a las entradas que reciben.",
      "b) Emiten su salida como la suma de las entradas multiplicadas por los pesos.",
      "c) Emiten su salida como el resultado de aplicar la función de transferencia a la suma de las entradas.",
      "d) Emiten su salida como el resultado de aplicar la función de transferencia a la suma del bias...",
      "e) Todas son falsas."
    ],
    "justification": "Por convención estructural, la capa de entrada de un Perceptrón Multicapa no realiza ningún tipo de computación, cálculo del potencial postsináptico, suma ponderada de pesos o aplicación de una función de activación.  \n  \nLas células de entrada operan exclusivamente como meros receptores y transmisores transparentes del patrón de entrada del entorno hacia la primera capa oculta.",
    "correct": 4,
    "category": "feedforward",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Cómo calcula el algoritmo de backpropagation el error en cada capa oculta?",
    "options": [
      "a) Comparando la salida obtenida y la salida deseada para esa capa oculta.",
      "b) Poniéndolo en función del error calculado en la siguiente capa.",
      "c) No lo calcula, puesto que no es necesario modificar los pesos de las capas ocultas.",
      "d) Comparando el valor de los pesos de esa capa con los de la capa siguiente.",
      "e) Comparando el valor de la tasa de aprendizaje con el gradiente."
    ],
    "justification": "Dado que las capas ocultas no disponen de una \"salida deseada\" o patrón objetivo que se les pueda comparar (como sí tiene la capa de salida), el algoritmo <i>Backpropagation</i> (Propagación hacia atrás) resuelve este escollo calculando el gradiente en las neuronas ocultas de forma recursiva a partir del error de la capa inmediatamente posterior, ponderado por el valor de los pesos de conexión entre ellas.",
    "correct": 1,
    "category": "feedforward",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "En la técnica de parada temprana, para evitar el sobreentrenamiento, es necesario controlar el proceso de entrenamiento mediante un conjunto de...",
    "options": [
      "a) test.",
      "b) entrenamiento.",
      "c) prueba.",
      "d) validación.",
      "e) aprendizaje."
    ],
    "justification": "La \"parada temprana\" (<i>early stopping</i>) es un mecanismo de regularización que divide el corpus de datos empíricos introduciendo un conjunto de validación.  \n  \nEste set no se usa para ajustar los pesos con el gradiente, sino exclusivamente para monitorear el error al final de cada época.  \n  \nCuando el error de entrenamiento sigue descendiendo pero el de validación empieza a crecer, la red está comenzando a \"memorizar\" (sobreentrenamiento) y el entrenamiento debe ser abortado.",
    "correct": 3,
    "category": "neurona",
    "tags": [
      "neurona"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Cómo codificarías una salida de una RNA categórica, cuyos valores pueden ser \"coche/moto/bicicleta/avión\"?",
    "options": [
      "a) Como 2 valores booleanos, codificando las 4 categorías como \"00/01/10/11\".",
      "b) No hace falta codificarla, la RNA puede generar esa salida categórica.",
      "c) Como 4 valores booleanos, codificando las 4 categorías como \"1000/0100/0010/0001\".",
      "d) Como un valor real, que toma 4 valores distintos equiespaciados.",
      "e) La c) y la d) son correctas."
    ],
    "justification": "La representación de clases categóricas independientes requiere de un modelo de salida llamado codificación <i>One-Hot</i>.  \n  \nObligar a la red a responder con un único valor real continuo equiespaciado para variables sin un orden de magnitud natural (un avión no \"vale\" matemáticamente más que un coche) introduciría un sesgo espurio de orden, obstaculizando gravemente la capacidad de la RNA para clasificar adecuadamente.",
    "correct": 2,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "La función de transferencia de las neuronas de una Red de Neuronas Artificiales...",
    "options": [
      "a) Nunca debe ser lineal en la capa de salida.",
      "b) Nunca debe ser logarítmica sigmoidal en las capas ocultas (si hay).",
      "c) Nunca debe ser tangente sigmoidal hiperbólica en las capas ocultas (si hay).",
      "d) Nunca debe ser lineal en las capas ocultas (si hay).",
      "e) Nunca debe ser logarítmica sigmoidal en la capa de salida."
    ],
    "justification": "Si las capas ocultas operan bajo funciones de transferencia estrictamente lineales, toda la arquitectura multicapa perderá sus beneficios, ya que algebraicamente, una cascada de transformaciones lineales puede simplificarse siempre a una sola matriz de transformación equivalente (una sola capa). Esto destruiría la cualidad de aproximador universal de la red e imposibilitaría resolver problemas no lineales (como el XOR).",
    "correct": 3,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Cuál es el objetivo principal de las redes SOM en el contexto del aprendizaje no supervisado?",
    "options": [
      "a) Predecir valores futuros a partir de datos históricos.",
      "b) Clasificar datos con base en etiquetas conocidas.",
      "c) Encontrar estructuras o patrones en los datos sin conocer su categoría.",
      "d) Corregir errores de clasificación.",
      "e) Generar nuevas muestras sintéticas."
    ],
    "justification": "Los <i>Self-Organizing Maps</i> (SOM) o Mapas de Kohonen operan bajo un paradigma estrictamente no supervisado.  \n  \nCarecen de un tutor o etiquetas objetivo (<i>targets</i>) a reproducir; en su lugar, se alimentan de los datos y ajustan libremente su topología para descubrir distribuciones ocultas, realizar agrupamientos (<i>clusters</i>) y abstraer mapas topológicos basándose puramente en la similitud de las entradas.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Qué función tiene el parámetro de vecindad en una red SOM?",
    "options": [
      "a) Controlar el número de entradas.",
      "b) Medir el error de cuantización.",
      "c) Actualizar también las neuronas cercanas a la ganadora.",
      "d) Determinar el número de capas de la red.",
      "e) Ajustar la tasa de aprendizaje."
    ],
    "justification": "El núcleo del funcionamiento del aprendizaje competitivo de los SOM es preservar la topología local.  \n  \nCuando una neurona concreta (<i>Best Matching Unit</i>) gana frente a un estímulo por ser la más cercana matemáticamente a él, la regla de aprendizaje somete no solo a la ganadora, sino también a todas las neuronas que se encuentran en su \"radio de vecindad\" a una adaptación en sus pesos, garantizando que celdas próximas codificarán características similares.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Qué ocurre con la tasa de aprendizaje ($\\alpha$) durante el entrenamiento de una SOM?",
    "options": [
      "a) Aumenta con cada iteración.",
      "b) Se mantiene constante.",
      "c) Disminuye progresivamente."
    ],
    "justification": "Para que un mapa SOM se estabilice progresivamente y no quede en un estado de fluctuación perpetua, el algoritmo transita tradicionalmente por una fase inicial de \"ordenación general topológica\" (con una tasa de aprendizaje y un radio de vecindad grandes) hacia una fase de \"convergencia fina\", donde la tasa de aprendizaje debe decaer y disminuir paulatinamente hasta volverse prácticamente nula.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Qué mide el error de cuantización en una SOM?",
    "options": [
      "a) La tasa de aprendizaje óptima.",
      "b) La distancia entre los pesos de la BMU y la entrada.",
      "c) El número de conexiones no utilizadas.",
      "d) El tiempo de entrenamiento.",
      "e) La salida binaria del clasificador."
    ],
    "justification": "El Error de Cuantización (QE) es la medida de calidad estándar en los Mapas Autoorganizativos.  \n  \nSe calcula hallando la distancia media (normalmente la distancia euclídea) entre cada vector de datos de entrada y el vector de pesos de su neurona ganadora o BMU (<i>Best Matching Unit</i>). Cuanto menor es esta distancia en el conjunto, de forma más precisa estará representando el mapa a los datos originales.",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Cuál es el tipo de aprendizaje que utilizan las redes SOM?",
    "options": [
      "a) Supervisado.",
      "b) No supervisado y competitivo.",
      "c) Por refuerzo.",
      "d) Hebbiano supervisado.",
      "e) Supervisado jerárquico."
    ],
    "justification": "Las redes SOM (Mapas de Kohonen) aprenden sin necesidad de un tutor ni etiquetas de salida objetivo, por lo que su exploración es puramente <b>no supervisada</b>.  \n  \nAdemás, utilizan un paradigma <b>competitivo</b>: ante cada estímulo de entrada, las neuronas de la capa de salida \"compiten\" entre sí para ver cuál es la más parecida al dato.  \n  \nSolo la ganadora (y las vecinas dentro de su radio topológico) adquieren el derecho a actualizar sus pesos.",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Cuál es la principal utilidad de una red SOM?",
    "options": [
      "a) Traducir idiomas en tiempo real.",
      "b) Clasificación de imágenes con etiquetas.",
      "c) Proyección de datos de alta dimensión a un espacio 2D para visualización.",
      "d) Generación de lenguaje natural.",
      "e) Detección de intrusos en redes."
    ],
    "justification": "La principal aplicación práctica de una red SOM es la reducción de dimensionalidad y el descubrimiento de agrupamientos (clústeres). Actúan como una herramienta de visualización topológica que permite mapear un conjunto de datos de enorme complejidad (vectores con muchas variables o n-dimensiones) y \"aplastarlo\" o proyectarlo sobre un mapa discreto bidimensional (2D) comprensible para el ojo humano, preservando las relaciones topológicas y vecindades originales de los datos.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Qué ventaja presenta GNG sobre SOM?",
    "options": [
      "a) Usa aprendizaje supervisado.",
      "b) Su estructura se adapta dinámicamente y puede eliminar nodos.",
      "c) Solo necesita una capa de entrada.",
      "d) Funciona mejor con datos lineales.",
      "e) Utiliza funciones de activación sigmoide."
    ],
    "justification": "A diferencia de los SOM, donde la topología y el número exacto de neuronas conforman una cuadrícula o malla rígida establecida desde antes de iniciar el entrenamiento, las redes GNG (<i>Growing Neural Gas</i>) poseen una arquitectura constructiva y dinámica.  \n  \nPueden hacer crecer el mapa añadiendo nodos en las áreas de mayor error y, crucialmente, pueden desconectar y <b>eliminar nodos</b> (o aristas \"viejas\") que se quedan aislados o resultan inútiles, actuando como un \"gas\" que se adapta de forma flexible a la forma del espacio de datos.",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Qué problema resuelve GNG respecto a GCS?",
    "options": [
      "a) La dificultad para eliminar neuronas innecesarias.",
      "b) El uso de etiquetas incorrectas.",
      "c) La falta de paralelismo en la ejecución.",
      "d) El exceso de supervisión.",
      "e) La lentitud en el cálculo de distancias."
    ],
    "justification": "El algoritmo GCS (<i>Growing Cell Structures</i>) introdujo el crecimiento dinámico en los mapas topológicos, pero lo hizo forzando a que las neuronas estuvieran conectadas rígidamente formando estructuras de triángulos perfectos (símplices 2D). Esta restricción geométrica provocaba enormes dificultades algorítmicas a la hora de tener que eliminar neuronas obsoletas, ya que al borrar un nodo se rompía la red de triángulos.  \n  \nGNG resolvió este escollo eliminando la restricción de los triángulos, permitiendo generar o destruir enlaces libremente.",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Qué modelo de red es más adecuado para detectar cambios topológicos en los datos?",
    "options": [
      "a) Red SOM.",
      "b) Perceptrón multicapa.",
      "c) Red GNG.",
      "d) Red convolucional simple.",
      "e) Red Hebbiana clásica."
    ],
    "justification": "La red GNG (<i>Growing Neural Gas</i>) es el modelo más adecuado porque su diseño de aristas flexibles le permite mapear cualquier geometría, por compleja, ramificada o discontinua que sea.  \n  \nSi la nube de datos cambia su forma topológica con el tiempo, los SOM o GCS sufren intentando doblar sus mallas rígidas; por el contrario, la red GNG simplemente dejará de actualizar los enlaces viejos (eliminándolos por \"edad\") y generará nodos nuevos en las áreas activas, rastreando los cambios dinámicos a la perfección.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Qué característica distingue al algoritmo GCS frente al SOM clásico?",
    "options": [
      "a) No puede eliminar nodos durante el entrenamiento.",
      "b) Permite añadir neuronas según el error acumulado.",
      "c) Funciona únicamente con etiquetas conocidas.",
      "d) Solo se usa para clasificación binaria.",
      "e) No necesita una capa de entrada."
    ],
    "justification": "La característica fundacional del GCS (<i>Growing Cell Structures</i>) frente al SOM clásico de Kohonen es su naturaleza evolutiva.  \n  \nMientras que el SOM exige predefinir de antemano cuántas neuronas (ej. $10 \\times 10$) compondrán el mapa y ese número permanece inmutable, el GCS comienza con una estructura mínima (un solo triángulo) y permite <b>añadir progresivamente nuevas neuronas</b> insertándolas justo en aquellas regiones topológicas concretas donde la red está acumulando un mayor error de representación.",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "El concepto de \"sustitución de individuos\" en Algoritmos Genéticos...",
    "options": [
      "a) Se aplica en la estrategia de gestión de población denominada \"Steady-state\".",
      "b) Se aplica siempre combinada con la estrategia elitista.",
      "c) Es una estrategia para sustituir los parecidos en error en la población.",
      "d) Es una estrategia para sustituir los peores individuos de la población.",
      "e) No existe este concepto en Algoritmos Genéticos."
    ],
    "justification": "En el enfoque clásico generacional de la computación evolutiva, toda la población desaparece en bloque al final del ciclo y es reemplazada íntegramente.  \n  \nEl concepto explícito de \"sustitución de individuos\" individuales asume importancia central únicamente en los Algoritmos Genéticos de Estado Estacionario (<i>Steady-State</i>), donde en cada ciclo poblacional apenas nacen uno o dos descendientes y el sistema debe elegir matemáticamente a qué individuos antiguos eliminar para cederles su espacio vital.",
    "correct": 0,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "En un Algoritmo Genético, el término \"Generación\"...",
    "options": [
      "a) Representa cada ciclo de funcionamiento del Algoritmo.",
      "b) En el mecanismo de gestión de población \"Steady-State\", representa el cambio de todos los individuos...",
      "c) Representa seleccionar al mejor individuo de cada población...",
      "d) Es el mecanismo de generación de la población inicial...",
      "e) No existe este concepto en Algoritmos Genéticos."
    ],
    "justification": "Inspirado directamente por las dinámicas del neodarwinismo biológico, una \"generación\" define una iteración o bucle completo del motor del algoritmo evolutivo.  \n  \nEn este ciclo suceden ordenadamente la evaluación del <i>fitness</i> en la población vigente, la fase competitiva de selección, la recombinación genética (cruce), la perturbación aleatoria (mutación) y finalmente el reemplazo para iniciar un ciclo nuevo con material de un orden de aptitud superior.",
    "correct": 0,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "En los individuos de un sistema de Programación Genética...",
    "options": [
      "a) Los terminales son operadores.",
      "b) No puede haber nunca operadores aritméticos como nodos del árbol.",
      "c) Los terminales pueden contener otros nodos e incluso subárboles.",
      "d) La raíz nunca puede ser un operador.",
      "e) Los terminales pueden ser constantes o variables."
    ],
    "justification": "A diferencia de los Algoritmos Genéticos que usan vectores planos (cadenas de bits o reales), la Programación Genética estructura computacionalmente a cada individuo como un árbol sintáctico (lógico/aritmético). En esta topología, los nodos internos representan las funciones operadoras (`+`, `-`, `IF`, `AND`) mientras que las hojas finales o terminales corresponden forzosamente a los valores primitivos de parada: datos variables del problema o constantes escalares.",
    "correct": 4,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Los operadores genéticos en Computación Evolutiva...",
    "options": [
      "a) Son: selección, cruce, mutación y generación.",
      "b) De cruce y mutación sirven para evolucionar los individuos de la población.",
      "c) Son operaciones que simulan la recombinación natural... a cada individuo...",
      "d) Sólo son aplicables sobre individuos de una población que sea siempre homogénea.",
      "e) Sólo son aplicables sobre individuos de una población que sea siempre heterogénea."
    ],
    "justification": "El objetivo funcional primario del cruce (entrelazar el material cromosómico valioso de dos padres fuertes) y la mutación (añadir pequeños estímulos de ruido estocástico para asegurar la exploración espacial) es generar variación fenotípica artificial e inyectar nuevo material útil.  \n  \nEstas variaciones son el motor del cambio para que la especie (la población) alcance zonas óptimas del espacio de búsqueda evolutivo.",
    "correct": 1,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "La técnica de Algoritmos Genéticos...",
    "options": [
      "a) No funciona bien cuando existen múltiples mínimos locales en el espacio de búsqueda.",
      "b) Permite resolver problemas en espacios de búsqueda donde existen múltiples mínimos locales.",
      "c) Es una técnica de búsqueda exhaustiva de soluciones denominada \"técnica determinística\".",
      "d) Sólo permite realizar regresión simbólica y búsqueda de máximos o mínimos en funciones...",
      "e) No es conveniente utilizarla para resolver problemas no resolubles polinomialmente..."
    ],
    "justification": "Las técnicas clásicas de inferencia basada en derivadas numéricas sufren del problema inherente de quedar atrapadas inexorablemente en el primer mínimo local que encuentran.  \n  \nLos Algoritmos Genéticos (A.G.), al poseer un comportamiento estocástico y manipular un enorme enjambre o población de soluciones simultáneas (búsqueda multipunto o en paralelo), tienen altísimas probabilidades de saltar topológicamente y escapar de dichos sub-óptimos para dar con soluciones cuasi-óptimas globales a un problema altamente complejo (NP-Hard).",
    "correct": 1,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "En un Algoritmo Genético, ¿qué significa el término \"elitismo\"?",
    "options": [
      "a) No existe este concepto.",
      "b) Solo es aplicable a la programación genética.",
      "c) Es la estrategia de mantener los mejores individuos en la población.",
      "d) Se encarga de buscar los mejores individuos y generar una nueva población con ellos.",
      "e) La nueva población es generada a partir exclusivamente del mejor individuo (élite)."
    ],
    "justification": "El elitismo es un concepto introducido como red de seguridad teórica en los algoritmos evolutivos.  \n  \nDado que las operaciones de cruce y mutación operan en base a probabilidades destructivas (es decir, hijos mediocres generados por padres brillantes), el elitismo garantiza mecánicamente clonar sin modificaciones al mejor individuo (o individuos) de la generación $T$ pasándolo directamente a la generación $T+1$, asegurando que el máximo progreso jamás retroceda.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "En un algoritmo genético:",
    "options": [
      "a) Si la tasa de mutación es cero, el algoritmo funciona porque el cruce hace que haya evolución.",
      "b) Si la tasa de cruce es cero, la mutación hace que todos los individuos acumulen demasiados cambios.",
      "c) Si la tasa de cruce es cero, la mutación genera variabilidad y el algoritmo de selección hace que haya evolución.",
      "d) Si la tasa de cruce y la evolución son cero, el algoritmo...",
      "e) Es imposible que el cruce y/o mutación sean cero."
    ],
    "justification": "A pesar de que los Algoritmos Genéticos operan de manera óptima fusionando cruce y mutación, en el hipotético caso arquitectónico en el que el operador de recombinación o cruce se desactivase (tasa de 0%), la mutación continuaría de forma residual introduciendo material genético de experimentación (variabilidad) y el sistema de selección se ocuparía de salvaguardar los hallazgos valiosos.  \n  \nSeguiría progresando y resolviendo el problema, operando prácticamente como una \"Búsqueda Aleatoria Guiada\" (Estrategia Evolutiva).",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Atendiendo al siguiente árbol que representa a un individuo de programación genética, ¿cuál de las siguientes afirmaciones es cierta?  \n<img src=\"../assets/images/arbol2.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">",
    "options": [
      "a) El conjunto de componentes terminales es sólo `[1, 14]`.",
      "b) Los componentes no terminales son $X$, $Y$, $+$, $-$.",
      "c) La profundidad máxima del árbol es 3.",
      "d) Se trata de un árbol invertido.",
      "e) No puede representar a un individuo porque tiene que ser un vector de variables."
    ],
    "justification": "_(Asumiendo el gráfico de los exámenes típicos de la asignatura)._  \n  \nEn la Programación Genética, las soluciones se codifican en forma de árbol sintáctico, por lo que la afirmación e) es rotundamente falsa.  \n  \nLas afirmaciones a) y b) son falsas por definición teórica: las variables de entrada del problema ($X$, $Y$) siempre son nodos hoja o \"terminales\", al igual que las constantes numéricas ($1$, $14$); mientras que los operadores aritméticos (`+`, `-`, `*`, `/`) y lógicos ocupan inexcusablemente los nodos internos o \"no terminales\". Por eliminación estructural, la aserción sobre la profundidad máxima del árbol es la única propiedad que describe una característica válida y cierta de este tipo de genotipo.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR",
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "¿Cuál de los siguientes elementos se utiliza habitualmente para simular organismos en vida artificial?",
    "options": [
      "a) Programación Genética.",
      "b) Autómatas celulares.",
      "c) Neuronas.",
      "d) Cromosomas.",
      "e) Genes."
    ],
    "justification": "Dentro de las técnicas de Vida Artificial (VA) orientadas a crear sistemas computacionales que imitan las propiedades de la biología, los <b>Autómatas Celulares</b> son la herramienta y modelo clásico por excelencia.  \n  \nEl ejemplo más célebre es el <i>Juego de la Vida</i> de John Conway: un autómata celular bidimensional donde cada \"célula\" representa a un organismo, cuyo ciclo de vida (nacimiento, supervivencia o muerte por soledad/sobrepoblación) evoluciona matemáticamente dependiendo exclusivamente del estado de sus vecinas inmediatas.",
    "correct": 1,
    "category": "evolutiva",
    "tags": [
      "evolutiva"
    ],
    "trap": false
  },
  {
    "source": "examen_julio_2025",
    "question": "Una de las principales ventajas de utilizar técnicas de vida artificial para resolver un problema complejo es:",
    "options": [
      "a) Garantizar siempre la consecución de la mejor solución.",
      "b) Reducir el número de datos necesarios para resolver el problema.",
      "c) Permitir explorar soluciones alternativas a través de la evolución.",
      "d) Usar reglas determinísticas para la resolución del problema.",
      "e) Eliminar por completo la intervención humana en el diseño de algoritmos que resuelvan el problema."
    ],
    "justification": "Las técnicas de vida artificial y computación evolutiva se enmarcan dentro de los métodos heurísticos o subsimbólicos.  \n  \nPor su naturaleza empírica, <b>no garantizan</b> hallar matemáticamente el óptimo global (descartando la a) y se fundamentan fuertemente en procesos estocásticos o probabilísticos (descartando la d). Su mayor ventaja competitiva reside en aprovechar el comportamiento emergente y los mecanismos de selección natural para rastrear grandes espacios de búsqueda.  \n  \nEsto permite a la población evolucionar y descubrir de forma dinámica <b>soluciones alternativas</b> y topologías altamente creativas para problemas intratables o de enorme complejidad, allí donde los enfoques analíticos clásicos fracasarían por quedarse atrapados en mínimos locales.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "BLE/BLR",
      "RNA",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "_(Enunciado reconstruido teóricamente debido a la ausencia del grafo original)_  \nEn un problema que aplica la Búsqueda Avara sobre un grafo, la pregunta final exige calcular la \"longitud del camino\" de la solución obtenida.  \n  \n¿Cómo se determina dicha longitud?",
    "options": [
      "a) Sumando los valores de la heurística $h(n)$ de los nodos visitados.",
      "b) Calculando la media entre $g(n)$ y $h(n)$.",
      "c) Sumando los costes reales $g(n)$ de la ruta obtenida.",
      "d) Contando simplemente el número de nodos visitados, asumiendo coste 1."
    ],
    "justification": "En un ejercicio genérico de Búsqueda Avara, la respuesta final será la suma de los costes reales $g(n)$ de la ruta obtenida.  \n  \nEl algoritmo evalúa los nodos de la frontera expandiendo siempre aquel que parece estar más cerca de la meta guiándose en exclusiva por el menor valor de la función heurística $h(n)$. Para resolver este tipo de preguntas visuales, se debe recorrer el grafo ciegamente hacia el nodo adyacente con menor $h(n)$ (ignorando el coste real $g(n)$ durante la toma de decisiones), pero, al llegar a la meta, se suman los costes de los arcos transitados ($g(n)$) para dar la longitud del camino real.",
    "correct": 2,
    "category": "busqueda",
    "tags": [
      "BLE/BLR",
      "Heurística"
    ],
    "trap": false
  },

  {
    "source": "examen_2024",
    "question": "A partir de la siguiente tabla de nodos explorados, ¿qué tipo de búsqueda fue utilizada?  \n<b>Paso 1:</b> -  \n<b>Paso 2:</b> A  \n<b>Paso 3:</b> A, B  \n<b>Paso 4:</b> A, B, C  \n<b>Paso 5:</b> A, B, C, D  \n<b>Paso 6:</b> A, B, C, D, E",
    "options": [
      "a) Búsqueda de coste uniforme.",
      "b) Búsqueda en anchura.",
      "c) A*.",
      "d) Búsqueda en profundidad."
    ],
    "justification": "Utiliza una cola <b>FIFO</b> (el primero que entra en la frontera, es el primero en salir y explorarse). Esto hace que explore el árbol \"por capas  \nhorizontales: primero el nivel 0, luego todo el nivel 1, luego todo el nivel 2.\n\n- <b>Paso 1:</b> `-` _(Frontera: [A])_\n\n- <b>Paso 2:</b> `A` <i>(Frontera: [B, C])</i> -> Explora todo el nivel 0.\n\n- <b>Paso 3:</b> `A, B` <i>(Frontera: [C, D, E])</i> -> Empieza el nivel 1. Saca a B porque entró antes que C.\n\n- <b>Paso 4:</b> `A, B, C` <i>(Frontera: [D, E, F, G])</i> -> Termina el nivel 1.\n\n- <b>Paso 5:</b> `A, B, C, D` <i>(Frontera: [E, F, G, H, I])</i> -> Empieza el nivel 2.\n\n- <b>Paso 6:</b> `A, B, C, D, E` _(Frontera: ...)_  \n  \nComo ves, <b>esta traza coincide exactamente al milímetro con la tabla de tu enunciado</b>.  \n  \nLa búsqueda en anchura es la que genera una lista alfabética secuencial perfecta si el árbol está ordenado así.  \n  \n2. Búsqueda en Profundidad  \n  \nUtiliza una pila <b>LIFO</b> (el último que entra a la frontera, es el primero en salir). Esto obliga al algoritmo a ignorar a los hermanos y sumergirse ciegamente por una rama hasta chocar con el fondo.\n\n- <b>Paso 1:</b> `-` _(Frontera: [A])_\n\n- <b>Paso 2:</b> `A` _(Frontera: [B, C])_\n\n- <b>Paso 3:</b> `A, B` <i>(Frontera: [D, E, C])</i> -> Al explorar B, descubre D y E. Al ser LIFO, estos se ponen \"encima\" de C.\n\n- <b>Paso 4:</b> `A, B, D` <i>(Frontera: [H, I, E, C])</i> -> <b>¡Aquí se rompe la secuencia!</b> El algoritmo ignora a C y explora D (el hijo de B) porque está yendo hacia lo profundo.\n\n- <b>Paso 5:</b> `A, B, D, H` _(Frontera: ...)_  \n  \nEn profundidad, jamás verías los explorados `A, B, C, D, E`, porque eso implicaría haber explorado a `B` y a su hermano `C` antes de bajar a los hijos, lo cual viola la regla de ir hacia abajo.  \n  \n3. Búsqueda de Coste Uniforme y A*  \n  \nEn estos algoritmos, el orden de los nodos explorados no sigue un patrón alfabético ni de capas predecible a simple vista, ya que la frontera <b>se ordena por números</b> (por el coste más barato g(n) o por la fórmula f(n)).\n\n- Dependiendo de los costes de las flechas, la tabla de explorados daría saltos ilógicos como: `A`, luego `A, C`, luego `A, C, B`, luego `A, C, B, E`, etc., buscando siempre el camino más barato en cada momento.",
    "correct": 1,
    "category": "busqueda",
    "tags": [
      "A*",
      "BLE/BLR",
      "Reglas",
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "En un problema en el que estamos utilizando búsqueda local, tenemos la siguiente función de coste, en la que estamos buscando el valor máximo:  \n<img src=\"../assets/images/busqlocal.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">  \nSi estamos en el punto marcado, ¿qué deberíamos de hacer?",
    "options": [
      "a) Retroceder a un punto anterior y probar un sentido diferente.",
      "b) Devolver el punto marcado.",
      "c) Aplicar más de un operador antes de realizar el test de meta.",
      "d) Ninguna de las anteriores."
    ],
    "justification": "En los algoritmos de Búsqueda Local pura (como la Ascensión de Colinas o <i>Hill-Climbing</i>), la máquina <b>carece de memoria histórica</b> (opera en el nodo actual con una complejidad espacial constante $O(1)$). Su mecánica es simple: evalúa sus estados vecinos inmediatos y se mueve hacia el que tenga mayor valor.  \n  \nEn la gráfica, el punto marcado es un <b>Máximo Local</b>.  \n  \nAl evaluar a sus vecinos, el algoritmo ve que si da un paso a la izquierda, el valor baja; si da un paso a la derecha, el valor también baja.  \n  \nComo <i>ningún</i> vecino mejora su situación actual, la condición de parada algorítmica se dispara de inmediato: la máquina asume que ha llegado a la cima absoluta del problema, <b>se detiene y devuelve el punto marcado</b> como su solución final (quedando trágicamente atascada sin encontrar el máximo global que está más a la izquierda).  \n  \n<b>Por qué las demás son falsas:</b>\n\n- <b>La a) es falsa:</b> Para poder \"retroceder\" (<i>backtracking</i>), el algoritmo necesitaría tener memoria y guardar el camino que ha recorrido (como hace la Búsqueda en Profundidad). La Búsqueda Local está diseñada específicamente para no guardar caminos, por lo que es físicamente incapaz de retroceder.\n\n- <b>La c) es falsa:</b> La búsqueda local clásica evalúa iterativamente paso a paso aplicando un solo operador para mirar al vecino inmediato.  \n  \nNo puede saltarse la ceguera encadenando operadores de golpe.",
    "correct": 1,
    "category": "busqueda",
    "tags": [
      "BLE/BLR",
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "La búsqueda $A*$...",
    "options": [
      "a) Evalúa cada nodo combinando las funciones $g(n)$ y $h(n)$, e.g. el coste real del mejor camino para alcanzar cada nodo $n$ y el coste estimado del camino menos costoso desde el nodo $n$ a meta.",
      "b) La búsqueda A* basada en grafo es óptima si la heurística es admisible.",
      "c) Se comporta como búsqueda en profundidad si $g$ es incrementada por 1, $h = 0$, y los nodos con la misma $f$ son ordenados de menos a más recientes.",
      "d) Todas son correctas."
    ],
    "justification": "La opción a) es la definición exacta de la función de evaluación algorítmica de la Búsqueda A* ($f(n) = g(n) + h(n)$). Las demás opciones son falsas por principios teóricos de IA:\n\n- La opción b) es falsa porque para que A* sea óptima en búsqueda sobre grafos, la heurística no solo debe ser admisible, sino <b>consistente</b>.\n\n- La opción c) es falsa porque si $h=0$ y $g$ se incrementa iterativamente, estamos implementando una estructura equivalente a una cola FIFO, lo cual define una Búsqueda en Anchura o Coste Uniforme, no una búsqueda en profundidad.",
    "correct": 0,
    "category": "busqueda",
    "tags": [
      "A*",
      "BLE/BLR",
      "Heurística",
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Las funciones heurísticas...",
    "options": [
      "a) Cuantas más restricciones tengamos en cuenta para su diseño, menos precisas serán.",
      "b) Son consideradas admisibles si nunca sobreestiman el coste actual de alcanzar la meta.",
      "c) Si $n$ es el nodo inicial, entonces $h(n) = 0$.",
      "d) Si una heurística domina otra ($h_2 \\ge h_1$), A* usando $h_2$ expandirá más nodos que usando $h_1$."
    ],
    "justification": "La opción b) describe de manera clásica la definición central de una heurística admisible: es de naturaleza optimista y asume que el objetivo está más cerca de lo que realmente está, por lo que <b>nunca sobreestima</b> el coste real ($h(n) \\le c^\ast$).  \n  \nLas demás opciones contienen errores:\n\n- La a) es falsa: crear heurísticas mediante el método de \"relajación de problemas\" implica que cuantas <i>menos</i> restricciones tenga el problema abstracto, menos precisa será la heurística; cuantas más contemple (más realista sea), más informada se volverá.\n\n- La c) es falsa: la regla estricta es que la función vale 0 en la meta, no en el nodo inicial ($h(meta) = 0$).\n\n- La d) es falsa: describe erróneamente el concepto de dominación.  \n  \nSi $h_2$ domina a $h_1$ (es decir, $h_2 \\ge h_1$ para todo nodo), $h_2$ guiará mejor la búsqueda por estar más informada y, por tanto, expandirá <b>menos</b> nodos que $h_1$, no más.",
    "correct": 1,
    "category": "busqueda",
    "tags": [
      "BLE/BLR",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Si hablamos de algoritmos de búsqueda en árbol...",
    "options": [
      "a) Búsqueda en amplitud siempre es óptima y completa.",
      "b) La búsqueda de profundidad iterativa debe de ser usada en espacios de búsqueda donde la profundidad de la solución sea conocida.",
      "c) La búsqueda de profundidad limitada es óptima, pero no completa.",
      "d) Ninguna es correcta."
    ],
    "justification": "Se descartan todas las afirmaciones clásicas por sus trampas teóricas:\n\n- La a) es falsa: la Búsqueda en Amplitud solo es óptima si todos los operadores tienen <b>exactamente el mismo coste</b> de transición.  \n  \nSi los pasos cuestan distinto, devolverá el camino con menos arcos, pero no el más barato.\n\n- La b) es falsa: la Búsqueda de Profundidad Iterativa fue diseñada algorítmicamente justo para el escenario opuesto; es útil cuando el espacio de búsqueda es infinito o inmenso y <b>no se conoce a priori</b> la profundidad de la solución.\n\n- La c) es falsa: la Profundidad Limitada jamás garantiza optimalidad y perderá su completitud intrínsecamente si la meta resulta estar más profunda que el límite ($d > l$) preconfigurado por el usuario.",
    "correct": 3,
    "category": "busqueda",
    "tags": [
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Se nos pide crear un modelo de representación del conocimiento para un sistema sobre un nuevo virus.  \n  \nAl haber sido descubierto recientemente, hay muy poca información disponible sobre este nuevo virus, pero hay mucha información sobre otros virus que se cree que funcionan de manera similar.  \n  \n¿Qué modelo de representación del conocimiento debería de ser utilizado?",
    "options": [
      "a) Orientada a objetos.",
      "b) Redes semánticas.",
      "c) Reglas de producción.",
      "d) Marcos (Frames)."
    ],
    "justification": "Los <b>Marcos</b> (o <i>Frames</i>, desarrollados por Marvin Minsky) son la estructura de representación ideal cuando nos enfrentamos a dominios con información incompleta, ya que su núcleo conceptual es el uso de <b>valores por defecto</b> (<i>default values</i>). Al enfrentarnos a un virus nuevo del que sabemos poco, pero que pertenece a una categoría conocida (\"virus similares\"), podemos instanciar un \"Marco de Virus\" general.  \n  \nEl sistema rellenará automáticamente los \"huecos\" (<i>slots</i>) desconocidos del nuevo virus heredando las características típicas (valores por defecto) de la clase padre, permitiéndonos razonar sobre él aunque nuestra información inicial sea escasa.",
    "correct": 3,
    "category": "representacion",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "El algoritmo de <i>model checking</i>...",
    "options": [
      "a) Tiene una complejidad que se vuelve inmanejable para sistemas con muchos símbolos.",
      "b) Permite verificar si $KB \\models \\alpha$.",
      "c) Puede ser implementado como una exploración de un árbol binario.",
      "d) Todas son correctas."
    ],
    "justification": "El <i>Model Checking</i> (Comprobación de Modelos) evalúa exhaustivamente todas las interpretaciones (modelos) posibles para dictaminar el entrañamiento lógico.  \n  \nSe cumplen las tres premisas:\n\n- <b>a es correcta:</b> Su complejidad espacial/temporal es $O(2^n)$ donde $n$ es el número de símbolos proposicionales.  \n  \nPara dominios grandes, la explosión combinatoria lo hace computacionalmente intratable.\n\n- <b>b es correcta:</b> Su finalidad fundacional es comprobar algorítmicamente el entrañamiento: si para todos los modelos donde la Base de Conocimiento ($KB$) es cierta, la sentencia $\\alpha$ también lo es ($KB \\models \\alpha$).\n\n- <b>c es correcta:</b> Para enumerar sistemáticamente los modelos, los algoritmos (como TT-Entails) construyen implícitamente un árbol de búsqueda binario de profundidad $n$, donde cada nivel asigna `True` o `False` a un símbolo.",
    "correct": 3,
    "category": "representacion",
    "tags": [
      "BLE/BLR",
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Hay un sistema de producción en un problema dado.  \n  \nEn un punto, el cliente se da cuenta de que la información es incompleta y necesita añadir dos reglas a mayores para cubrir casos específicos que no habían sido considerados previamente.  \n  \n¿Qué deberíamos de cambiar en el motor de inferencias?",
    "options": [
      "a) Las nuevas reglas deben ser insertadas.",
      "b) Las nuevas reglas y los hechos resultantes de dichas reglas deben ser insertados.",
      "c) El sistema de reglas tendrá que ser reconstruido completamente para adaptarlo al problema actual.",
      "d) Nada."
    ],
    "justification": "La esencia arquitectónica de un sistema de producción (y de los Sistemas Basados en Conocimiento en general) radica en la estricta <b>separación entre el conocimiento y el control</b>.  \n  \nEl Motor de Inferencias es un programa de control genérico (el \"intérprete\") que no almacena información específica del dominio.  \n  \nToda nueva heurística o lógica experta (como añadir dos nuevas reglas) se inserta exclusivamente en la <b>Base de Conocimiento (Base de Reglas)</b>.  \n  \nPor consiguiente, el código del Motor de Inferencias permanece inalterado.",
    "correct": 3,
    "category": "representacion",
    "tags": [
      "BLE/BLR",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Dado la siguiente base de reglas:  \n<div style=\"background: rgba(255,255,255,0.05); border-left: 3px solid #10b981; padding: 10px 15px; margin: 10px 0; border-radius: 4px; font-family: monospace; font-size: 0.95em; color: #d1d5db;\">\nR1: `IF (X AND Y) THEN Z`<br>\n<br>\nR2: `IF (C OR D) THEN G`<br>\n<br>\nR3: `IF (E AND V) THEN H`<br>\n<br>\nR4: `IF (A AND B) THEN C`<br>\n<br>\nR5: `IF (F OR G) THEN X`<br>\n<br>\nR6: `IF (Z AND B) THEN V`<br>\n<br>\nR7: `IF (E AND C) THEN F`\n</div>\nQueremos inferir `H` mediante encadenamiento progresivo, y sabiendo que: la primera de las reglas activadas será ejecutada (si R3 y R4 son activadas, se ejecutará primero R3); y en la memoria activa tenemos `A`, `B`, `D` y `Y`. <i>(Nota: la digitalización indica `?, D y Y`, pero el apunte a mano `ABDY(H)` confirma que la memoria inicial es `{A, B, D, Y}`).</i> Entonces:",
    "options": [
      "a) H puede ser inferida, y el número de reglas ejecutadas es 4.",
      "b) H puede ser inferida, y el número de reglas ejecutadas es 5.",
      "c) H no puede ser inferida, y el número de reglas ejecutadas es 4.",
      "d) H no puede ser inferida, y el número de reglas ejecutadas es 5."
    ],
    "justification": "Traza algorítmica del encadenamiento progresivo partiendo de la Memoria inicial = `{A, B, D, Y}`:  \n  \n1. <b>Ciclo 1:</b> > * Reglas emparejadas (Conjunto Conflicto): R2 (condición `D` cumple el `OR`) y R4 (cumple `A AND B`).\n\n- Resolución de conflictos: Por orden léxico (se asume de arriba abajo según la pista del enunciado \"la primera activada\"), se dispara <b>R2</b>.\n\n- Nuevo hecho: `G`. Memoria actual: `{A, B, D, Y, G}`.  \n  \n2. <b>Ciclo 2:</b>\n\n- Conjunto Conflicto: R4 y R5 (cumple `G` en el `OR`).\n\n- Dispara: <b>R4</b>.\n\n- Nuevo hecho: `C`. Memoria actual: `{A, B, D, Y, G, C}`.  \n  \n3. <b>Ciclo 3:</b>\n\n- Conjunto Conflicto: R5 (Nota: R7 requiere `E` que no tenemos).\n\n- Dispara: <b>R5</b>.\n\n- Nuevo hecho: `X`. Memoria actual: `{A, B, D, Y, G, C, X}`.  \n  \n4. <b>Ciclo 4:</b>\n\n- Conjunto Conflicto: R1 (cumple `X AND Y`).\n\n- Dispara: <b>R1</b>.\n\n- Nuevo hecho: `Z`. Memoria actual: `{A, B, D, Y, G, C, X, Z}`.  \n  \n5. <b>Ciclo 5:</b>\n\n- Conjunto Conflicto: R6 (cumple `Z AND B`).\n\n- Dispara: <b>R6</b>.\n\n- Nuevo hecho: `V`. Memoria actual: `{A, B, D, Y, G, C, X, Z, V}`.  \n  \n6. <b>Ciclo 6:</b>\n\n- Llegados a este punto, la regla objetivo es R3, que requiere `E AND V`. Tenemos `V`, pero el hecho `E` no está en la memoria ni existe ninguna regla capaz de inferirlo en todo el sistema.  \n  \nEl conjunto conflicto queda vacío.\n\n- <b>Resultado final:</b> El algoritmo se detiene tras ejecutar <b>5 reglas</b> (R2, R4, R5, R1, R6) sin haber logrado inferir la meta `H`.",
    "correct": 3,
    "category": "representacion",
    "tags": [
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Si hablamos de sistemas de producción...",
    "options": [
      "a) La base de conocimientos está formada por la base de reglas y el motor de inferencias.",
      "b) Los sistemas dirigidos por los datos son más específicos, porque ejecutarán todas las reglas disponibles en función de la información introducida.",
      "c) La memoria activa almacena todos los cambios de estado de nuestro sistema, de forma que representa siempre nuestro estado actual.",
      "d) El motor de inferencias es el responsable de interaccionar con el mundo exterior."
    ],
    "justification": "La memoria activa o \"pizarra\" tiene como objetivo estructural recoger todo el set de condiciones iniciales (hechos base) y memorizar la modificación inmediata producida en la fase de acción del ciclo.  \n  \nAl registrar rigurosamente qué hechos se crean, cambian o borran, provee al sistema en todo momento de la \"fotografía\" exacta de la realidad con la que emparejar las siguientes reglas.",
    "correct": 2,
    "category": "representacion",
    "tags": [
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "La búsqueda A*...",
    "options": [
      "a) Evalúa los nodos combinando las funciones $g(n)$ y $h(n)$.",
      "b) Basada en grafo es óptima si la heurística es admisible.",
      "c) Se comporta como anchura si $g$ se incrementa en 1, $h=0$ y los nodos con igual $f$ se ordenan de menos a más reciente.",
      "d) Todas son correctas."
    ],
    "justification": "La piedra angular que constituye la búsqueda A* frente a las ciegas y avaras es su ecuación de evaluación unificada $f(n) = g(n) + h(n)$, sumando el pasado certero y el futuro optimista.  \n  \nLa opción b) se descarta de lleno porque un A* sobre un \"grafo\" precisa obligatoriamente heurísticas <i>consistentes</i> para ser óptima; la simple admisibilidad aislada en grafos puede generar errores de ruta.",
    "correct": 0,
    "category": "busqueda",
    "tags": [
      "A*",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Con las reglas categóricas genéricas del dominio ($R1: M(1) \\lor M(2) \\lor M(3) \\implies I(1) \\lor I(2)$, $R2: I(1) \\implies \\neg M(1) \\land M(2)$, y $R3$) y sabiendo que tenemos la <b>manifestación ineludible $M(1)$</b>, ¿cuál es el conjunto de interpretaciones más probables? Ten en cuenta las siguientes probabilidades:\n\n- $p(\\neg I(1) \\land \\neg I(2)) = 0.2$\n\n- $p(\\neg I(1) \\land I(2)) = 0.08$\n\n- $p(I(1) \\land \\neg I(2)) = 0.34$\n\n- $p(I(1) \\land I(2)) = 0.38$",
    "options": [
      "a) $\\neg I(1) \\land \\neg I(2)$",
      "b) $\\neg I(1) \\land I(2)$",
      "c) $I(1) \\land \\neg I(2)$",
      "d) $I(1) \\land I(2)$"
    ],
    "justification": "Es una pregunta trampa en la que la estadística insertada es irrelevante gracias a las restricciones inquebrantables del modelo categórico (Base Lógica Reducida). Si M(1) es estrictamente cierto, sabemos por regla (R2:I(1)⟹¬M(1)∧M(2)) que la interpretación I(1) jamás puede ser cierta, pues nos obligaría a tener ¬M(1), lo cual contradice el enunciado.  \n  \nPor lo tanto, I(1) es forzosamente <b>falsa</b>.  \n  \nEn el dominio categórico, para manifestaciones presentes, alguna interpretación ha de cumplirse (por R1); descartada la B, la única que queda activa obligatoriamente es I(2). Esto nos arroja categóricamente a la respuesta ¬I(1)∧I(2) sin necesidad de apoyarse en la probabilidad bayesiana proporcionada.",
    "correct": 1,
    "category": "razonamiento",
    "tags": [
      "Bayes",
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "En una RNA, el conocimiento está en...",
    "options": [
      "a) La función de transferencia.",
      "b) Los pesos y bias.",
      "c) Los valores dados por las salidas.",
      "d) El algoritmo de entrenamiento.",
      "e) La topología de la red."
    ],
    "justification": "A diferencia de los modelos de Inteligencia Artificial Simbólica (como los sistemas expertos o los árboles de búsqueda), que basan su inferencia en el almacenamiento de reglas o estados de conocimiento explícitos, el paradigma conexionista distribuye todo lo aprendido de forma puramente matemática.  \n  \nEn las Redes Neuronales Artificiales (RNA), la huella del aprendizaje —la retención de la generalización del problema— reside intrínseca y exclusivamente en el valor paramétrico de la intensidad de sus conexiones sinápticas (los pesos) y en el de los niveles de activación base de la célula (los bias).",
    "correct": 1,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "El conjunto de datos utilizado para establecer el valor de los pesos de una RNA es conocido como...",
    "options": [
      "a) Conjunto de prueba.",
      "b) Conjunto de validación.",
      "c) Conjunto de test.",
      "d) Conjunto de entrenamiento.",
      "e) Conjunto de normalización."
    ],
    "justification": "Durante el proceso de aprendizaje de una red neuronal, el volumen total de datos empíricos se divide.  \n  \nEl \"conjunto de entrenamiento\" (<i>Training set</i>) es el único lote de datos que interactúa de manera directa con el algoritmo (por ejemplo, retropropagación) calculando los gradientes de error para actualizar y asentar matemáticamente las matrices de pesos y bias de la red.",
    "correct": 3,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Cuando el gradiente descendente es utilizado para modificar los pesos de las conexiones de una RNA...",
    "options": [
      "a) Si está cerca de 0, el mínimo estará lejos y serán necesarios más saltos para encontrarlo.",
      "b) Si toma un valor alto, se realizará un pequeño salto dentro del espacio de búsqueda para encontrar el mínimo.",
      "c) Si toma un valor bajo, se realizará un salto grande en el espacio de búsqueda para encontrar el mínimo.",
      "d) Es necesario modificar los pesos en la dirección del gradiente.",
      "e) Es necesario modificar los pesos en la dirección contraria del gradiente."
    ],
    "justification": "Matemáticamente, el vector gradiente apunta siempre hacia la dirección de mayor o máximo crecimiento de una función (en este caso, la función de error). Dado que el objetivo del aprendizaje es buscar el fondo del valle (el error mínimo), la regla Delta especifica que la actualización o salto de los pesos debe realizarse indefectiblemente restando esa pendiente, es decir, moviéndose en la dirección o sentido opuesto al gradiente.",
    "correct": 4,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Un Perceptrón (sin capas ocultas) puede resolver problemas de clasificación con una precisión del 100% cuando las muestras...",
    "options": [
      "a) Son clasificadas en sólo dos clases y no están entremezcladas.",
      "b) Son clasificadas en sólo dos clases y son linealmente separables.",
      "c) Son clasificadas en sólo dos clases, aunque estén mezcladas, no sean linealmente separables o tengan ruido.",
      "d) Son clasificadas en sólo dos clases y no tengan ruido.",
      "e) Son clasificadas en sólo dos clases y sigan una distribución normal."
    ],
    "justification": "El teorema fundamental del Perceptrón simple (Rosenblatt) establece que una red sin capas ocultas solo es capaz de trazar un único hiperplano (una línea recta en 2D) en el espacio de decisión.  \n  \nPor lo tanto, solo puede alcanzar una convergencia total (100% de precisión) si el problema geométrico subyacente es <b>linealmente separable</b> (es decir, que una línea recta baste para separar la Clase A de la Clase B).",
    "correct": 1,
    "category": "feedforward",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Para utilizar un perceptrón multicapa para resolver el problema EXOR...",
    "options": [
      "a) No es necesario utilizar capas ocultas.",
      "b) Es necesario utilizar una capa oculta (con el número suficiente de neuronas), y no hacen falta más capas.",
      "c) Es necesario utilizar dos capas ocultas (con el número suficiente de neuronas), y no hacen falta más capas.",
      "d) Es necesario utilizar tres capas ocultas (con el número suficiente de neuronas), y no hacen falta más capas.",
      "e) Es necesario utilizar más de tres capas ocultas (con el número suficiente de neuronas)."
    ],
    "justification": "El problema de la disyunción exclusiva (XOR o EXOR) es el ejemplo clásico de un problema <b>no linealmente separable</b>.  \n  \nUn perceptrón simple fracasa al intentar resolverlo porque se requieren al menos dos rectas para aislar las respuestas verdaderas de las falsas en el plano lógico.  \n  \nAl añadir <b>una única capa oculta</b> (con al menos dos neuronas ocultas), la red gana la capacidad de combinar dos hiperplanos, resolviendo el problema a la perfección sin requerir arquitecturas más profundas.",
    "correct": 1,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "La función de transferencia de las neuronas artificiales...",
    "options": [
      "a) Puede ser hiperbólica.",
      "b) Puede ser treshold / hard limiter.",
      "c) Puede ser sigmoidal.",
      "d) Puede ser logarítmica.",
      "e) Todas son correctas."
    ],
    "justification": "Las Redes Neuronales Artificiales admiten un abanico inmenso de funciones matemáticas para procesar el potencial postsináptico.  \n  \nDependiendo de la topología y el problema, se usan funciones de umbral/escalón (<i>hard limiter</i> para el Perceptrón simple), sigmoides logarítmicas o tangentes hiperbólicas (para capas ocultas o clasificación probabilística), y funciones lineales puras (para salida en regresión). Todas las mencionadas son válidas.",
    "correct": 4,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Si un perceptrón multicapa entrenado es alimentado con una instancia en un área donde no había muestras de entrenamiento...",
    "options": [
      "a) Siempre devolverá un error.",
      "b) Siempre devolverá 0 como salida.",
      "c) Siempre devolverá -1 como salida.",
      "d) Siempre devolverá 1 como salida.",
      "e) Devolverá una salida arbitraria e impredecible."
    ],
    "justification": "Las Redes Neuronales Artificiales son excelentes \"interpoladores\" (pueden generalizar muy bien dentro del dominio envuelto por sus datos de entrenamiento). Sin embargo, son pésimos \"extrapoladores\". Si se les inyecta un patrón de entrada de un área del hiperespacio que jamás han explorado (fuera de su rango de entrenamiento), la red no dará un error de software, sino que escupirá un valor matemático calculado a través de sus pesos actuales, el cual será totalmente <b>arbitrario, sesgado e impredecible</b> desde la lógica humana.",
    "correct": 4,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Entrenar una RNA utilizando un algoritmo de entrenamiento basado en el algoritmo de descenso de gradiente tiene el siguiente problema...",
    "options": [
      "a) Nunca encontrará el mínimo global.",
      "b) Al alcanzar un mínimo, oscilará de un lado a otro, incapaz de permanecer en él.",
      "c) Alcanzará un mínimo con incrementos muy pequeños.",
      "d) Es posible que se quede atrapado en algún mínimo local.",
      "e) Requerirá un número muy alto de épocas para lograr un error aceptable."
    ],
    "justification": "El descenso del gradiente clásico (empleado en <i>Backpropagation</i>) es un algoritmo analítico determinista y miope.  \n  \nSu única regla es \"descender por la pendiente más pronunciada\". Si la topología de la función de coste es rugosa y presenta \"valles falsos\", el algoritmo descenderá hasta el fondo de ese valle y el gradiente se hará cero.  \n  \nAl carecer de momento inercial o visión panorámica, se quedará irremediablemente <b>atrapado en ese mínimo local</b>, asumiendo erróneamente que ha llegado al fondo absoluto (mínimo global).",
    "correct": 3,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Para evaluar qué tan bien entrenada está una red y qué tan bien generaliza, es necesario evaluar el error...",
    "options": [
      "a) en el conjunto de entrenamiento.",
      "b) en el conjunto de validación.",
      "c) en el conjunto de prueba (Test).",
      "d) en la época de entrenamiento con el gradiente más pequeño.",
      "e) en la época de entrenamiento con el momento más pequeño."
    ],
    "justification": "Existe una jerarquía estricta en el uso de los datos.  \n  \nEl conjunto de <i>entrenamiento</i> ajusta los pesos.  \n  \nEl conjunto de <i>validación</i> se usa como monitor durante el entrenamiento para tunear hiperparámetros o aplicar parada temprana (early stopping). Sin embargo, la auténtica prueba de fuego (la métrica final de rendimiento para saber si la red ha generalizado correctamente el problema hacia el mundo real y no solo ha memorizado) se mide obligatoriamente evaluando su error en un <b>conjunto de prueba (<i>test set</i>)</b>, un lote de datos absolutamente virgen e independiente que el modelo jamás ha visto durante su diseño.",
    "correct": 2,
    "category": "neurona",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "En una RNA, el conjunto de validación...",
    "options": [
      "a) se usa para evaluar la capacidad de generalización de la red.",
      "b) debe ser linealmente separable.",
      "c) realiza la modificación de los pesos con el algoritmo correspondiente.",
      "d) no realiza la modificación de los pesos, pero controla el proceso de entrenamiento y lo detiene cuando es necesario.",
      "e) Todas las respuestas anteriores son incorrectas."
    ],
    "justification": "El conjunto de validación actúa como un monitor o árbitro externo.  \n  \nLos datos que lo componen jamás pasan por el algoritmo de actualización de pesos (descartando la opción c). Su función es evaluar cómo se comporta la red ante datos que no ha \"visto\" durante el entrenamiento para aplicar la estrategia de regularización denominada \"parada temprana\" (<i>early stopping</i>): detiene el entrenamiento justo cuando el error de entrenamiento sigue bajando pero el de validación empieza a subir (inicio del sobreentrenamiento).",
    "correct": 3,
    "category": "neurona",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Durante el proceso de entrenamiento de una RNA utilizando la técnica de detención temprana, los valores más bajos de error en los conjuntos de entrenamiento, validación y prueba se alcanzan en épocas diferentes.  \n  \n¿Qué pesos se toman para la red que se devuelve?",
    "options": [
      "a) Los de la época con el error de validación más bajo.",
      "b) Los de la época con el error de prueba más bajo.",
      "c) Los de la última época de entrenamiento.",
      "d) Los de la época con el gradiente más bajo.",
      "e) Los de la época con el error de entrenamiento más bajo."
    ],
    "justification": "Al utilizar la técnica de detención temprana, el programa de diseño evalúa la pérdida en el conjunto ciego de validación.  \n  \nLa orden algorítmica es retroceder en el tiempo y devolver a nivel productivo \"la copia estructural de la red guardada en la <b>época matemática exacta donde el error del conjunto de validación registró su marca histórica más baja</b>\", pues es ahí donde se demuestra la mayor capacidad de generalización teórica de la red.",
    "correct": 0,
    "category": "neurona",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Para utilizar una RNA para resolver un problema de clasificación con dos clases, sin la posibilidad de que una instancia no pertenezca a ninguna de ellas, el número de neuronas que se debe usar en la capa de salida es...",
    "options": [
      "a) 1.",
      "b) 2.",
      "c) 3.",
      "d) 4.",
      "e) 5."
    ],
    "justification": "En un problema de clasificación estrictamente dicotómica (o binaria) donde todos los elementos del mundo pertenecen imperativamente a la Clase A o a la Clase B, basta con usar <b>una única neurona de salida</b> equipada con una función de transferencia como la sigmoide o limitador duro.  \n  \nSi la neurona emite un 0, se asigna a la primera clase; si emite un 1, a la segunda.  \n  \nAñadir una segunda neurona sería redundante e ineficiente topológicamente.",
    "correct": 0,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Cómo codificarías una salida categórica de una RNA, cuyos valores pueden ser \"coche/motocicleta/bicicleta/avión\"?",
    "options": [
      "a) Como 2 valores booleanos, codificando cada una de las 4 categorías como \"01/01/10/11\".",
      "b) No es necesario codificarlo, la RNA puede generar esa salida categórica.",
      "c) Como 4 valores booleanos, codificando cada una de las 4 categorías como \"1000/0100/0010/0001\".",
      "d) Como un valor real, que toma 4 valores equiespaciados diferentes.",
      "e) Las respuestas c) y d) son correctas."
    ],
    "justification": "Las redes neuronales solo entienden vectores numéricos.  \n  \nPara variables categóricas nominales sin un orden jerárquico inherente (un coche no vale matemáticamente el doble que una bicicleta), se emplea la técnica de codificación <b>One-Hot Encoding</b>.  \n  \nConsiste en crear un vector del mismo tamaño que el número de clases (4 clases = 4 neuronas de salida booleanas) donde solo se enciende (valor 1) la neurona correspondiente a la clase correcta, manteniendo el resto apagadas (valor 0).",
    "correct": 2,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "La función de transferencia de las neuronas de salida de una Red Neuronal Artificial...",
    "options": [
      "a) Será lineal si es un problema de clasificación con solo dos clases.",
      "b) Será sigmoide logarítmica si es un problema de clasificación con más de dos clases.",
      "c) Será sigmoide logarítmica si es un problema de regresión.",
      "d) Será tangente hiperbólica sigmoide si es un problema de regresión.",
      "e) Será lineal si es un problema de regresión."
    ],
    "justification": "Para problemas de regresión, donde se busca predecir un valor continuo en el espacio real (como una temperatura o un precio), la capa de salida debe usar una <b>función de transferencia estrictamente lineal</b> o de identidad (como <i>purelin</i>). Esto permite a la red escupir el valor en bruto sin recortar su escala numérica natural.  \n  \nLas funciones limitadoras (sigmoides) estrujarían los resultados impidiendo dar valores mayores a 1 o menores a 0/-1.",
    "correct": 4,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "La autoorganización en los Sistemas Conexionistas...",
    "options": [
      "a) Permite la existencia de un jefe que determina el comportamiento de los patrones.",
      "b) Evita el comportamiento emergente del sistema.",
      "c) Facilita el almacenamiento de información en las neuronas (células) de entrada.",
      "d) Permite obtener redundancia en los datos.",
      "e) Todas las anteriores son incorrectas."
    ],
    "justification": "La autoorganización es puramente <b>no supervisada</b> (carece de \"jefe\" o tutor, descartando la a); se fundamenta precisamente en permitir el <b>comportamiento emergente</b> (descartando la b); el conocimiento no se almacena en la capa de entrada, sino en la matriz topológica de pesos (descartando la c); y, finalmente, la redundancia en los datos de entrada es un <i>requisito previo</i> para que la red descubra características estadísticas, no un resultado que \"se obtenga\" (descartando la d). Todas son falsas.",
    "correct": 4,
    "category": "autoorganizacion",
    "tags": [
      "autoorganizacion"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Qué modelo se ajusta mejor a datos de diferentes dimensionalidades?",
    "options": [
      "a) GNG.",
      "b) SOM.",
      "c) GNS.",
      "d) SGM.",
      "e) SVM."
    ],
    "justification": "El modelo <b>GNG (<i>Growing Neural Gas</i>)</b> supera a los SOM clásicos porque no utiliza una cuadrícula o malla rígida 2D predefinida.  \n  \nAl ser un \"gas\" neuronal, su arquitectura constructiva le permite crear y destruir nodos (y aristas) de forma dinámica, adaptándose orgánicamente a cualquier geometría, discontinuidad o cambio de dimensionalidad en el espacio de los datos de entrada.",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "En una red SOM, es importante...",
    "options": [
      "a) La ubicación espacial de las neuronas.",
      "b) La interacción de una neurona con las demás en la capa de salida.",
      "c) El número de capas ocultas.",
      "d) Que el número de neuronas en la capa de entrada sea mayor que en la capa de salida.",
      "e) Todas son correctas."
    ],
    "justification": "A diferencia del perceptrón multicapa, en los Mapas de Kohonen (SOM) la <b>ubicación espacial y topológica</b> de las neuronas en la cuadrícula de salida es crítica.  \n  \nEl algoritmo de entrenamiento (competitivo y de vecindad) está diseñado matemáticamente para que las neuronas que están físicamente cerca en el mapa terminen respondiendo a patrones de entrada que también son similares en el mundo real, preservando la topología de los datos originales.",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Qué representa la ubicación en la capa de salida de una neurona (célula) en una red SOM?",
    "options": [
      "a) El número de atributos de los patrones.",
      "b) El orden de presentación de cada patrón durante el proceso de entrenamiento.",
      "c) Una proyección bidimensional de los datos de entrada.",
      "d) Indica su relación con las neuronas de entrada.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "La utilidad primordial de un SOM es la reducción de dimensionalidad espacial.  \n  \nAl entrenarse, la red abstrae un espacio de datos de altísima complejidad ($n$-dimensional) y lo proyecta sobre un mapa discreto, creando una <b>proyección topológica bidimensional (2D)</b>.  \n  \nDe este modo, la ubicación en el mapa permite a los humanos visualizar e interpretar de un vistazo los clústeres y relaciones originales.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Cuántas capas, que realizan cálculos, tiene una red SOM?",
    "options": [
      "a) Tantas como especifique el usuario.",
      "b) Depende del tipo de problema.",
      "c) 1.",
      "d) 2.",
      "e) Tantas como patrones de entrada."
    ],
    "justification": "Una arquitectura SOM estándar se compone de dos capas: una de entrada y una de salida (competitiva). Sin embargo, la capa de entrada actúa únicamente como un \"buffer\" pasivo que recibe los vectores del entorno sin alterar sus valores ni realizar cálculos.  \n  \nPor tanto, la única capa que realiza procesamiento, cálculo de distancias euclídeas y ajuste de pesos sinápticos es <b>1 sola capa</b> (la capa competitiva de salida).",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "En una red SOM, ¿qué representa el parámetro $\\alpha$ en la fórmula de actualización de pesos?",
    "options": [
      "a) El tamaño del vecindario.",
      "b) La topología del vecindario.",
      "c) La distancia a la Unidad de Mejor Coincidencia (BMU).",
      "d) La tasa de aprendizaje.",
      "e) El parámetro no existe en la ecuación de la SOM."
    ],
    "justification": "En la fórmula clásica de Kohonen $W_i(t+1) = W_i(t) + \\alpha(t) \\cdot h_{ci}(t) \\cdot [x(t) - W_i(t)]$, el parámetro $\\alpha(t)$ representa la tasa de aprendizaje (que decrece progresivamente con el tiempo).",
    "correct": 3,
    "category": "autoorganizacion",
    "tags": [
      "autoorganizacion"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Qué tipo de aprendizaje ocurre en las SOM?",
    "options": [
      "a) Competitivo.",
      "b) Exhaustivo.",
      "c) Por necesidad.",
      "d) Reforzamiento.",
      "e) Las opciones c y d son correctas."
    ],
    "justification": "Las redes SOM utilizan un paradigma de aprendizaje puramente <b>no supervisado y competitivo</b>.  \n  \nAnte la presentación de un vector de entrada, todas las neuronas de la red calculan su similitud geométrica y \"compiten\" entre sí. Solo existe una ganadora absoluta (BMU) que se lleva el derecho principal de actualizar sus pesos de acuerdo con la información de entrada.",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Qué es la neurona (célula) ganadora en una red SOM?",
    "options": [
      "a) La que está más cerca del patrón de entrada.",
      "b) La neurona que representa el patrón dentro de su clúster.",
      "c) La neurona que aprende más rápido.",
      "d) La neurona que converge primero.",
      "e) La neurona en el top 5 de la red en el proceso de aprendizaje."
    ],
    "justification": "La neurona ganadora, conocida técnicamente como BMU (<i>Best Matching Unit</i>), se define exclusivamente como la célula de la malla cuyo vector interno de pesos presenta la menor distancia matemática (usualmente euclidiana) respecto al vector de datos de entrada.  \n  \nEn términos topológicos, es <b>la neurona que está más cerca</b> de ese patrón.",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Qué representan los pesos de las neuronas en la red SOM?",
    "options": [
      "a) Clústeres.",
      "b) Conocidos como bias.",
      "c) Número de patrones aprendidos.",
      "d) Prototipos, centros o centroides de clústeres.",
      "e) Grupos."
    ],
    "justification": "A diferencia del Perceptrón (donde los pesos son simples ponderadores), en las redes SOM las unidades operan con matrices de pesos que funcionan estructuralmente como un conjunto de coordenadas matemáticas (un vector). Estos vectores actúan como <b>prototipos, centros o centroides</b>.  \n  \nA medida que la red se entrena, dichos vectores migran por el espacio hasta anclarse justo en el centro de gravedad de las nubes de datos o clústeres.",
    "correct": 3,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "En una red SOM...",
    "options": [
      "a) El vecindario determina el número de neuronas contra las que uno compite por un patrón.",
      "b) El vecindario de una neurona ganadora determina cuáles se modifican parcialmente.",
      "c) El tamaño del vecindario permanece sin cambios durante todo el proceso de entrenamiento.",
      "d) La topología cambia durante el entrenamiento.",
      "e) El número de vecinos se adapta a las dimensiones del espacio de búsqueda."
    ],
    "justification": "En el algoritmo de aprendizaje competitivo de un SOM, la neurona ganadora (BMU) no es la única en verse beneficiada.  \n  \nSe define un radio topológico alrededor de ella llamado \"vecindad\" (usualmente con forma de campana de Gauss). Su rol es <b>determinar qué neuronas adyacentes a la ganadora van a modificar parcialmente sus pesos</b>, forzando un comportamiento topológico continuo en toda la manta neuronal. (La 'C' es falsa porque este radio decrece con el tiempo).",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿A cuántas neuronas se conecta cada neurona en la capa de entrada?",
    "options": [
      "a) A todas las neuronas en la capa de competencia.",
      "b) Consigo misma recursivamente.",
      "c) Solo con neuronas que alguna vez han sido ganadoras.",
      "d) Se conecta con todas y cada una de las neuronas presentes en el modelo.",
      "e) Todas son falsas."
    ],
    "justification": "Un mapa SOM clásico se basa en una arquitectura <i>Feed-forward</i> (hacia adelante) totalmente conectada o densa.  \n  \nEsto significa que <b>todas y cada una de las neuronas receptoras</b> de la capa de entrada se bifurcan y trazan conexiones sinápticas físicas hacia <b>todas las neuronas del mapa de salida</b> (la capa de competencia).",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Qué fases presenta el funcionamiento del modelo SOM?",
    "options": [
      "a) Fase de aprendizaje y modo operativo.",
      "b) Fase de aprendizaje y fase de validación.",
      "c) Fase de generalización y fase de validación.",
      "d) Fase inicial y modo de operación.",
      "e) Modo rápido y modo robusto."
    ],
    "justification": "La vida de una red SOM se divide secuencialmente en dos estados.  \n  \nPrimero la <b>Fase de Aprendizaje</b>, donde el mapa está \"blando\", compite de forma no supervisada, y sus pesos y la campana de vecindad se actualizan y adaptan topológicamente.  \n  \nUna vez el mapa converge y sus prototipos se asientan, se congelan los pesos pasando al <b>Modo Operativo</b> (o fase de mapeo), donde ante la llegada de nuevos vectores, la red simplemente identifica a la neurona ganadora para clasificarla sin alterar ya su estructura.",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Cuáles son las métricas para validar una red SOM?",
    "options": [
      "a) Error de cuantización medio y medida de preservación de topología.",
      "b) Precisión y medida de preservación de topología.",
      "c) Error de cuantización medio y medida de dispersión de topología.",
      "d) Tasa de precisión media y medida de dispersión de topología.",
      "e) Medida de preservación del conocimiento."
    ],
    "justification": "Dado que una red SOM opera bajo un paradigma puramente \"No Supervisado\", las métricas estadísticas clásicas como la \"Tasa de precisión\" (<i>Accuracy</i>) resultan inútiles porque carecemos de salidas esperadas o etiquetas objetivo con las que comparar.  \n  \nPara auditar si la red se estructuró de forma correcta se utiliza:  \n  \n1. <b>Error de cuantización (QE):</b> Mide la distancia media de todos los datos de entrada a sus respectivas BMUs.  \n  \n2. <b>Error topográfico (TE):</b> Verifica que se haya preservado correctamente la topología original, confirmando que los datos se mapean hacia neuronas estrictamente contiguas.",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Cuál de las siguientes opciones describe correctamente los orígenes de los Algoritmos Genéticos y la Programación Genética?",
    "options": [
      "a) Fueron desarrollados por John von Neumann en la década de 1950.",
      "b) Son el resultado de avances en inteligencia artificial en la década de 1980.",
      "c) Tienen sus raíces en los trabajos de Charles Darwin y Alfred Wallace sobre evolución y selección natural.",
      "d) Fueron propuestos por Charles Babbage durante la Segunda Guerra Mundial.",
      "e) El principal precursor es Mendel con su trabajo sobre la deriva genética."
    ],
    "justification": "Los algoritmos evolutivos (introducidos por John Holland) son una rama heurística bio-inspirada de la IA. Toda su arquitectura algorítmica y su terminología (individuos, población, cruce, mutación, aptitud) están fuertemente inspiradas en la <b>Teoría de la Evolución de las Especies</b> y la mecánica de la <b>Selección Natural</b> formulada empíricamente por Charles Darwin (junto a los trabajos de Alfred Wallace).",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "A la luz de las diferentes teorías evolutivas presentes en los Algoritmos Genéticos, ¿cuál de las siguientes inspira la operación de aptitud (Fitness)?",
    "options": [
      "a) Aprendizaje Hebbiano.",
      "b) Teoría de la Conservación de Lamarck.",
      "c) Teoría de la Evolución de Darwin.",
      "d) Leyes de Mendel.",
      "e) Deriva genética."
    ],
    "justification": "La función de \"Aptitud\" (<i>Fitness</i>) implementada en código representa al juez de supervivencia del Algoritmo Genético.  \n  \nEvalúa qué individuo está mejor preparado para el entorno, decidiendo quién se reproduce y quién es descartado (selección). Esta doctrina de \"la supervivencia del más fuerte o más apto\" es la base doctrinal directa de la <b>Teoría de la Evolución por Selección Natural de Darwin</b>.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "En el contexto de los algoritmos evolutivos, ¿qué técnica se utiliza para explotar la información presente en la población y mejorar las soluciones?",
    "options": [
      "a) Cruce (Recombinación).",
      "b) Mutación.",
      "c) Selección.",
      "d) Reemplazo.",
      "e) Clonación."
    ],
    "justification": "En los metaheurísticos evolutivos existe un dilema constante entre explorar nuevas áreas (búsqueda ciega) o mejorar las actuales (perfeccionamiento). La Mutación es el operador de \"Exploración\". Por el contrario, el operador de Recombinación o <b>Cruce</b> es el encargado de la <b>Explotación</b>: mezcla y aprovecha la información (bloques genéticos valiosos) ya presente en las partes exitosas del genoma de padres fuertes para generar hijos teóricamente superiores.",
    "correct": 0,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "En un algoritmo genético, ¿cuál es el nombre dado al proceso por el cual el mejor individuo en la población pasa por una fase de ajuste local y así se inserta en la población?",
    "options": [
      "a) Siembra.",
      "b) Elitismo.",
      "c) Aprendizaje Lamarckiano.",
      "d) Estado Estable.",
      "e) Ascenso de Colinas."
    ],
    "justification": "Cuando un individuo de un AG explora topológicamente su entorno local durante su \"vida\" (ej. mediante <i>hill-climbing</i>) para mejorar su aptitud y, tras esa fase de ajuste, sobreescribe sus propios genes para heredar de forma directa esa mejora a su descendencia, estamos implementando explícitamente el concepto biológico de la <b>Evolución Lamarckiana</b> (la herencia de los caracteres o habilidades adquiridos en vida).",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Supongamos que se ejecuta un algoritmo genético en una población de 1000 individuos.  \n  \nSi en la segunda generación se obtienen 100 individuos mutados, ¿qué combinación de tasa de cruce y probabilidad de mutación es más probable que se haya utilizado?",
    "options": [
      "a) Tasa de cruce de 0.9 y ratio de mutación de 0.01",
      "b) Tasa de cruce de 0.9 y ratio de mutación de 0.001",
      "c) Tasa de cruce de 1.0 y ratio de mutación de 0.01",
      "d) Tasa de cruce de 1.0 y ratio de mutación de 0.001",
      "e) Tasa de cruce de 0.7 y ratio de mutación de 0.1"
    ],
    "justification": "Es un cálculo de probabilidad matemático directo.  \n  \nSi partimos de un censo total de 1000 individuos y el algoritmo devuelve que estadísticamente 100 de ellos sufrieron el operador de mutación en sus genes, la ratio efectiva que está operando en el sistema es de $100 / 1000 = 0.1$. La única opción que contempla correctamente esta <b>tasa de mutación de 0.1</b> es la opción e.",
    "correct": 4,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "En algoritmos genéticos, ¿cómo puede afectar el tamaño de la población la eficiencia y efectividad del proceso de optimización?",
    "options": [
      "a) Con un tamaño de población más grande, se requiere más tiempo para converger hacia una solución óptima.",
      "b) Con un tamaño de población más pequeño, la diversidad genética y la exploración del espacio de búsqueda aumentan.",
      "c) Con un tamaño de población más grande, la probabilidad de encontrar soluciones óptimas globales disminuye.",
      "d) Con un tamaño de población más pequeño, se reducen los costos computacionales y se acelera la convergencia."
    ],
    "justification": "_(Nota: La 'A' también presenta una premisa cierta, pero la 'D' suele ser la definición buscada para la justificación de optimización de código)._  \n  \nEl tamaño de la población regula el balance computacional.  \n  \nUna población muy grande asegura alta diversidad genética, pero consume recursos extremos de CPU ralentizando el programa por el número de evaluaciones del <i>fitness</i>.  \n  \nAl revés, un <b>tamaño de población pequeño reduce drásticamente el coste computacional y acelera enormemente la convergencia</b> (aunque aumenta el riesgo teórico de estancarse en mínimos locales por baja diversidad).",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "En un Algoritmo Genético...",
    "options": [
      "a) Si la tasa de mutación es cero, el algoritmo funciona porque el cruce lleva a la evolución.",
      "b) Si la tasa de cruce es cero, la mutación causa que todos los individuos acumulen demasiados cambios.",
      "c) Si la tasa de cruce es cero, la mutación genera variabilidad y el algoritmo de selección lleva a la evolución.",
      "d) Si tanto la tasa de cruce como la tasa de mutación son cero, el algoritmo de selección prevalece y lleva a la evolución.",
      "e) Es imposible que las tasas de cruce y/o mutación sean cero."
    ],
    "justification": "Si alteramos la arquitectura del AG anulando el cruce (tasa = 0%), la recombinación genética desaparece.  \n  \nSin embargo, la mutación continuará inyectando ruido aleatorio constante (variabilidad fenotípica) sobre los individuos aislados, y el mecanismo darwiniano de \"Selección\" se encargará de salvaguardar aquellas mutaciones que presenten mejoras en la aptitud.  \n  \nEl sistema seguirá evolucionando, comportándose como una simple técnica de <b>Búsqueda Aleatoria Guiada</b> (Estrategia Evolutiva).",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Cuál de las siguientes afirmaciones es verdadera con respecto a todas las técnicas de Computación Evolutiva?",
    "options": [
      "a) Las soluciones deben codificarse en forma de árbol.",
      "b) Las poblaciones más grandes favorecen una evolución más rápida.",
      "c) El esquema de reemplazo generacional usa menos memoria.",
      "d) Las funciones de aptitud deben ser evaluables para cada individuo en la población.",
      "e) El criterio de terminación debe ser único."
    ],
    "justification": "Para que los mecanismos estocásticos de torneo y selección de Darwin funcionen, el algoritmo informático debe ser capaz de determinar quién sobrevive y quién no.  \n  \nEsto convierte en un requisito tecnológico universal que la función <b>Fitness</b> (la evaluación de aptitud del problema) pueda calcularse sin excepciones para todos y cada uno de los cromosomas (individuos) generados en la población.",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "Con respecto al siguiente árbol que representa un individuo en la programación genética, ¿cuál de las siguientes afirmaciones es verdadera? _(Asumiendo operadores como nodos y variables/constantes como hojas)._",
    "options": [
      "a) Los componentes terminales son `[1, 14]`.",
      "b) Los componentes no terminales son $X$, $Y$, $+$, $-$.",
      "c) La profundidad máxima del árbol es 3.",
      "d) Es un árbol desequilibrado.",
      "e) No puede representar un individuo porque tiene que ser un vector de variables."
    ],
    "justification": "En base a la teoría genotípica en Programación Genética (GP), la opción C evalúa la profundidad estructural de los niveles de llamadas recursivas en el árbol de código.  \n  \nLas opciones A y B son completamente falsas por definición semántica: los nodos \"terminales\" u hojas alojan siempre las constantes (`1`, `14`) <b>junto con</b> las variables ($X$, $Y$); y los nodos \"no terminales\" o funcionales son única y exclusivamente los operadores algebraicos/lógicos (`+`, `-`, `*`). La E es falsa porque GP usa explícitamente árboles, no vectores planos.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR",
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Cuál es el efecto de ajustar la tasa de mutación en la programación genética y cómo puede influir en la convergencia del algoritmo?",
    "options": [
      "a) Aumentar la tasa de mutación acelera la convergencia del algoritmo...",
      "b) Reducir la tasa de mutación en poblaciones grandes puede mejorar la convergencia...",
      "c) La tasa de mutación no tiene impacto en la convergencia del algoritmo...",
      "d) Ajustar óptimamente la tasa de mutación puede equilibrar la exploración y la explotación en la programación genética, facilitando la convergencia hacia soluciones de alta calidad.",
      "e) La tasa de mutación solo afecta la velocidad de convergencia del algoritmo..."
    ],
    "justification": "La tasa de mutación es el hiperparámetro que regula el \"caos\" del sistema.  \n  \nSi es muy baja, el modelo sufre convergencia prematura (se atasca en mínimos locales por baja exploración). Si es muy alta, degenera en una búsqueda puramente aleatoria (destruyendo los bloques buenos obtenidos por explotación en el cruce). Su <b>ajuste óptimo es la clave heurística para equilibrar</b> este \"Trade-off\" (exploración vs explotación) garantizando llegar a un óptimo global de alta fidelidad.",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Cuál es el objetivo principal del operador de cruce en las técnicas de computación evolutiva?",
    "options": [
      "a) Reducir la diversidad en la población.",
      "b) Expandir el espacio de búsqueda.",
      "c) Explotar la información presente en la población.",
      "d) Seleccionar los mejores individuos en función de su función de aptitud.",
      "e) Introducir aleatoriedad en la población."
    ],
    "justification": "En las metaheurísticas evolutivas, el rol de \"Expandir\" o investigar zonas nuevas (aleatoriedad) recae enteramente sobre el operador de Mutación.  \n  \nEl operador de Recombinación o <b>Cruce</b> asume la labor de <b>Explotación</b>: cruzar, enlazar y aprovechar eficientemente la información valiosa (los buenos alelos o \"Building Blocks\") ya descubierta en los individuos fuertes de la generación actual para engendrar hijos que retengan y mejoren esos rasgos.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "La combinación de \"Hill-climbing\" y algoritmos genéticos:",
    "options": [
      "a) Es una técnica de búsqueda donde su principal problema es la convergencia temprana.",
      "b) Es una técnica de búsqueda aplicada en algoritmos genéticos donde su principal problema es que no garantiza obtener el óptimo global.",
      "c) Solo se puede aplicar en la programación genética.",
      "d) Está inspirada en los principios de la evolución Lamarckiana para mejorar la convergencia del proceso evolutivo.",
      "e) Es una técnica que realiza una búsqueda aleatoria en el espacio de soluciones..."
    ],
    "justification": "Este tipo de combinaciones (un algoritmo global genético híbrido con una técnica de ajuste de búsqueda local como <i>Hill-climbing</i> por cada individuo) recibe el nombre técnico de \"Algoritmo Memético\". Si los fenotipos mejorados mediante la búsqueda local son codificados de vuelta (inyectados como genotipo) al cromosoma del agente para heredárselo a sus hijos de manera ventajosa, se está replicando a nivel informático la base de la <b>Evolución Lamarckiana</b> (la herencia biológica de los caracteres adquiridos).",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2024",
    "question": "¿Cuál de las siguientes estrategias describe con mayor precisión el mecanismo de selección utilizado en algoritmos evolutivos para promover la diversidad genética y evitar la convergencia prematura?",
    "options": [
      "a) Selección por ruleta, donde los individuos se asignan a sectores de una ruleta ponderada...",
      "b) Selección por ruleta, donde los individuos se asignan a sectores de una ruleta con igual probabilidad...",
      "c) Selección por torneo, donde los individuos se agrupan en subconjuntos y el individuo con el mejor valor de aptitud es seleccionado para cada grupo.",
      "d) Selección por torneo, donde los individuos compiten en pares y el ganador se selecciona con una probabilidad proporcional a su aptitud.",
      "e) Selección por torneo, donde los individuos se agrupan en subconjuntos y los dos individuos con menor aptitud de cada subconjunto son seleccionados para la reproducción."
    ],
    "justification": "La estrategia tradicional de \"Ruleta\" es muy propensa a provocar la \"convergencia prematura\": los individuos excesivamente sobresalientes al inicio del programa copan el 90% de los giros de la ruleta, devorando a los demás y destruyendo la diversidad por endogamia (clonación masiva). La <b>Selección por Torneo</b> soluciona esto aislando ciegamente pequeños <i>subconjuntos</i> o agrupaciones aleatorias y haciendo que compitan localmente entre ellos, <b>seleccionando siempre al que posea mejor valor de aptitud dentro de su pequeña arena</b>.  \n  \nEsto da oportunidades reales de supervivencia y reproducción a individuos modestos pero genéticamente valiosos, promoviendo de forma óptima la diversidad global de la especie a largo plazo.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Dado el siguiente grafo, en donde (i) el nodo inicial es $A$ y el nodo meta es $G$, (ii) el valor numérico dentro de cada nodo indica el resultado de evaluar una función heurística $h$, y (iii) el valor numérico en cada arista indica el coste de transición entre los diferentes estados:  \n<img src=\"../assets/images/grafo1.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">  \nAplicando el algoritmo A* basado en <b>grafo</b>, en algún paso, los nodos de la frontera vendrán dispuestos según la siguiente configuración (considerar precedencia izq a drch, que el número entre paréntesis representa el correspondiente valor $f$, $f=h+g$, y que en caso de empate en valor $f$, la precedencia de expansión vendrá dada por el orden alfabético de los nodos correspondientes):",
    "options": [
      "a) E(20), D(22)",
      "b) B(20), E(20), D(22)",
      "c) E(20), D(21)",
      "d) B(20), E(21), D(22)"
    ],
    "justification": "En el algoritmo A* basado en <b>grafo</b>, se mantiene una lista de nodos \"Cerrados\" (Explorados). Si la heurística no es consistente (como ocurre aquí, ya que $h(A)=25 \not\\le c(A,C)+h(C) = 2+20=22$), la versión estricta del algoritmo en grafo <b>no reabre nodos que ya han sido cerrados</b>, aunque encuentre un camino mejor hacia ellos (este es el motivo por el que en la pregunta 2 del examen se afirma que A* en este problema encuentra el óptimo \"de casualidad\").  \n  \nRealizamos la traza paso a paso usando la ecuación $f(n) = g(n) + h(n)$:  \n  \n1. <b>Paso 1:</b> Se expande el inicial $A$.\n\n- Genera $B$ ($g=5, h=16 \\rightarrow f=21$) y $C$ ($g=2, h=20 \\rightarrow f=22$).\n\n- <b>Frontera:</b> `[B(21), C(22)]`. <b>Cerrados:</b> `{A}`.  \n  \n2. <b>Paso 2:</b> Se expande $B$ (por tener el menor valor $f$).\n\n- Genera $D$ ($g=5+7=12, h=10 \\rightarrow f=22$).\n\n- <b>Frontera:</b> `[C(22), D(22)]` (por empate $f$, orden alfabético). <b>Cerrados:</b> `{A, B}`.  \n  \n3. <b>Paso 3:</b> Se expande $C$.\n\n- Genera $E$ ($g=2+10=12, h=8 \\rightarrow f=20$).\n\n- También encuentra una nueva ruta hacia $B$ con menor coste ($g=2+2=4 \\rightarrow f=20$).\n\n- <b>Punto clave:</b> Como estamos en búsqueda sobre <i>grafo</i>, el algoritmo comprueba si el nodo $B$ ya ha sido expandido.  \n  \nComo $B$ ya está en la lista de Cerrados `{A, B}`, la nueva ruta hacia él <b>se descarta</b> y el nodo no se reabre.\n\n- <b>Frontera resultante:</b> Tras añadir solo $E$, la frontera queda conformada por el nuevo nodo $E$ y el nodo $D$ que ya estaba esperando: <b>`[E(20), D(22)]`</b>.  \n  \nEsta configuración coincide exactamente con la opción <b>a</b>.",
    "correct": 0,
    "category": "busqueda",
    "tags": [
      "A*",
      "BLE/BLR",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "<div style=\"background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; margin-bottom:15px; font-size: 0.9em; border-left: 3px solid #3b82f6; color: #9ca3af;\"><em>Contexto de la pregunta 1:</em><br>\nDado el siguiente grafo, en donde (i) el nodo inicial es $A$ y el nodo meta es $G$, (ii) el valor numérico dentro de cada nodo indica el resultado de evaluar una función heurística $h$, y (iii) el valor numérico en cada arista indica el coste de transición entre los diferentes estados:<br>\n<img src=\"../assets/images/grafo1.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">\n</div>\nEn el mismo problema de la pregunta 1, ¿obtiene el algoritmo A* una solución óptima?",
    "options": [
      "a) No, la heurística no es admisible.",
      "b) No, la heurística no es consistente.",
      "c) Si, ya que la heurística es admisible.",
      "d) Si, pero de casualidad, ya que la heurística no es consistente."
    ],
    "justification": "Para que el algoritmo A* garantice teóricamente una solución óptima al recorrer un grafo, su heurística debe ser consistente (monótona) y admisible.  \n  \nUna heurística es admisible si nunca sobreestima el coste real hacia la meta.  \n  \nSi observamos el grafo del ejercicio, desde el nodo $E$ hasta la meta $G$ el coste real es de $2$, pero su estimación heurística marca $h(E) = 8$. Como $8 > 2$, la heurística sobreestima flagrantemente el coste y <b>no es admisible</b> (y por consiguiente, tampoco es consistente).  \n  \nPrueba adicional de que no es consistente (de A a C):  \n  \nUna heurística es consistente si el coste estimado desde un nodo a la meta no es mayor que el coste de dar un salto físico hacia su vecino más la estimación de dicho vecino.  \n  \nLa inecuación matemática que debes aplicar siempre es: $h(n)≤c(n,n′)+h(n′)$.  \n  \nPara saber si C cumple la regla, calculamos lo mismo de siempre\n\n- La estimación dentro del nodo A es h(A)=25.\n\n- El coste de la flecha para viajar de A hacia C es c(A,C)=2.\n\n- La estimación dentro del nodo C es h(C)=20.\n\n- <b>El cálculo:</b> Sustituimos los números en la inecuación: ¿Es 25≤2+20? Es decir, <b>¿Es</b> 25≤22<b>?</b> No, la inecuación es falsa porque 25 es mayor que 22.  \n  \nA pesar de esto, si ejecutamos el algoritmo paso a paso, A* acaba encontrando la ruta óptima de coste 14. Al lograrlo con una heurística que rompe las reglas teóricas, lo hace estrictamente <b>\"de casualidad\"</b>. _(Nota: Descarta plantillas libres que marquen la opción 'c', ya que matemáticamente la heurística es inadmisible)._",
    "correct": 3,
    "category": "busqueda",
    "tags": [
      "A*",
      "BLE/BLR",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "<div style=\"background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; margin-bottom:15px; font-size: 0.9em; border-left: 3px solid #3b82f6; color: #9ca3af;\"><em>Contexto de la pregunta 1:</em><br>\nDado el siguiente grafo, en donde (i) el nodo inicial es $A$ y el nodo meta es $G$, (ii) el valor numérico dentro de cada nodo indica el resultado de evaluar una función heurística $h$, y (iii) el valor numérico en cada arista indica el coste de transición entre los diferentes estados:<br>\n<img src=\"../assets/images/grafo1.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">\n</div>\nEn el mismo problema de la pregunta 1, indica la secuencia del camino devuelto utilizando, esta vez, la búsqueda avara:",
    "options": [
      "a) A $\\rightarrow$ B $\\rightarrow$ D $\\rightarrow$ G",
      "b) A $\\rightarrow$ C $\\rightarrow$ B $\\rightarrow$ D $\\rightarrow$ G",
      "c) A $\\rightarrow$ C $\\rightarrow$ E $\\rightarrow$ G",
      "d) Ninguno de los anteriores"
    ],
    "justification": "A diferencia de A*, el algoritmo de Búsqueda Avara (<i>Greedy Best-First</i>) es corto de miras y toma sus decisiones guiándose exclusivamente por el menor valor de la heurística $h(n)$ en la frontera, ignorando por completo el coste real acumulado $g(n)$.  \n  \nEjecutando el recorrido:  \n  \n1. Desde $A$, se abren los caminos hacia $B$ ($h=16$) y $C$ ($h=20$). Como $16 < 20$, la búsqueda avara elige $B$.  \n  \n2. Desde $B$, se abre el camino a $D$ ($h=10$). Elige $D$.  \n  \n3. Desde $D$, se abren caminos a $E$ ($h=8$) y $G$ ($h=0$). Elige la meta $G$.  \n  \nEl camino devuelto ciegamente es <b>A $\\rightarrow$ B $\\rightarrow$ D $\\rightarrow$ G</b>. <i>(Nota: Las plantillas no oficiales de Wuolah indican la opción C, pero ese es el camino que devuelve A</i>, no la búsqueda avara).*",
    "correct": 0,
    "category": "busqueda",
    "tags": [
      "A*",
      "BLE/BLR",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En la búsqueda de coste uniforme:",
    "options": [
      "a) Cada operador aplicable siempre tendrá el mismo coste.",
      "b) Cualquier camino solución encontrado tendrá siempre el mismo coste.",
      "c) Cualquier camino solución encontrado tendrá siempre el mismo número de pasos.",
      "d) Cualquier camino solución encontrado tendrá siempre el mínimo número de pasos.",
      "e) Ninguna de las anteriores."
    ],
    "justification": "La Búsqueda de Coste Uniforme (UCS) es un algoritmo óptimo guiado exclusivamente por la función $g(n)$ (coste acumulado del camino). Su garantía teórica es que encuentra el camino de <b>mínimo coste absoluto</b> hacia la meta.\n\n- La a) es falsa, los operadores pueden (y suelen) tener costes distintos.\n\n- La b) es falsa/ambigua: el algoritmo devolverá el camino de coste mínimo, no significa que todos los caminos imaginables del grafo midan lo mismo.\n\n- Las c) y d) son falsas porque la optimización por pasos (mínimo número de saltos) es característica exclusiva de la <b>Búsqueda en Amplitud (BFS)</b>, no de UCS. Por ello, la opción e) es la única lógicamente rigurosa.",
    "correct": 4,
    "category": "busqueda",
    "tags": [
      "BLE/BLR",
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En el algoritmo de profundidad iterativa se cumple que la cantidad de nodos hoja en la iteración \"$i$\" es siempre mayor que la suma acumulada de todos los nodos generados previamente en las \"$i-1$\" iteraciones anteriores:",
    "options": [
      "a) Cierto.",
      "b) Dependerá del número de iteraciones \"$i$\".",
      "c) Dependerá del factor de ramificación.",
      "d) Falso."
    ],
    "justification": "Matemáticamente, en un árbol de búsqueda con un factor de ramificación constante $b$, el número de nodos hoja (frontera) en el nivel de profundidad $d$ (o iteración $i$) es $b^i$. La suma total de todos los nodos generados en las iteraciones previas es una progresión geométrica: $$\\sum_{k=0}^{i-1} b^k = \\frac{b^i - 1}{b - 1}$$. Para que la base actual $b^i$ sea mayor que todos los nodos anteriores combinados $\\frac{b^i - 1}{b - 1}$, la inecuación exige estrictamente que el factor de ramificación $b$ sea mayor o igual a 2 ($b \\geq 2$). Por ende, la afirmación no es un axioma absoluto, sino que depende matemáticamente del factor de ramificación.",
    "correct": 2,
    "category": "busqueda",
    "tags": [
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En el contexto del algoritmo de escalada en búsqueda local, el siguiente árbol de búsqueda se corresponde con una situación de:  \n<img src=\"../assets/images/arbol1.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">",
    "options": [
      "a) Mínimo local.",
      "b) Máximo local.",
      "c) Meseta.",
      "d) Cresta.",
      "e) Ninguna de las anteriores, ya que dicho desarrollo nunca podría darse aplicando la búsqueda de escalada."
    ],
    "justification": "Se trata de una \"pregunta trampa\" clásica.  \n  \nA diferencia de A* o Búsqueda en Anchura, el algoritmo de Escalada Simple (<i>Hill-Climbing</i>) pertenece a la familia de métodos de <b>Búsqueda Local</b>.  \n  \nLa característica teórica definitoria de esta familia es que <b>no conservan ni generan un \"árbol de búsqueda\" en memoria</b> (operan sin historial). Solamente guardan el \"estado actual\" y evalúan a sus vecinos inmediatos para decidir el siguiente paso.  \n  \nPor lo tanto, es algorítmica y estructuralmente imposible que <i>Hill-Climbing</i> produzca la representación de un árbol de exploración.",
    "correct": 4,
    "category": "busqueda",
    "tags": [
      "A*",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Señala la respuesta correcta:",
    "options": [
      "a) Una de las ventajas fundamentales de los métodos declarativos de representación del conocimiento es que facilitan trabajar con información de carácter probabilístico.",
      "b) Los métodos procedimentales son más adecuados para la codificación de conocimiento fruto de la experiencia.",
      "c) En los métodos declarativos la incorporación de nuevo conocimiento suele implicar la recodificación del ya existente.",
      "d) Ninguna de las anteriores."
    ],
    "justification": "En la representación del conocimiento, los métodos procedimentales (cuyo máximo exponente son los Sistemas de Producción basados en reglas <i>IF-THEN</i>) nacieron específicamente para capturar las heurísticas y atajos mentales de los expertos humanos (conocimiento fruto de la experiencia o empírico).\n\n- La a) es falsa: los métodos declarativos puros (Lógica) son formales y frágiles ante la incertidumbre; esto se gestiona con otros paradigmas como Redes Bayesianas.\n\n- La c) es falsa: la mayor virtud de los modelos declarativos y modulares (como la base de hechos/reglas) es que se puede incorporar nuevo conocimiento <b>añadiendo axiomas a la base</b> sin necesidad de alterar o recodificar todo el motor.",
    "correct": 1,
    "category": "representacion",
    "tags": [
      "Bayes",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En el contexto de un sistema de producción, se parte de la siguiente base de reglas y estado de la Memoria Activa inicial ($M_0$):\n\n- <b>R1:</b> $A \\land B \\implies C$\n\n- <b>R2:</b> $E \\lor F \\implies D$\n\n- <b>R3:</b> $D \\land C \\implies X$\n\n- <b>R4:</b> $B \\land D \\implies R$\n\n- <b>R5:</b> $X \\land R \\implies H$\n\n- <b>$M_0$</b> = $\\{A, B, E\\}$ <i>(Nota: $H$ es la meta buscada)</i>.  \n<b>Configuración del Motor:</b> Encadenamiento progresivo.  \n  \nBúsqueda en profundidad, con la ejecución de la regla cuya premisa contenga el elemento en orden alfabético mayor de las que hayan sido activadas más recientemente (asumiendo que $A > B > C \\dots$). ¿Cuál es la secuencia de ejecución de las reglas?",
    "options": [
      "a) R2 $\\rightarrow$ R1 $\\rightarrow$ R3 $\\rightarrow$ R4 $\\rightarrow$ R5",
      "b) R1 $\\rightarrow$ R2 $\\rightarrow$ R3 $\\rightarrow$ R4 $\\rightarrow$ R5",
      "c) R2 $\\rightarrow$ R1 $\\rightarrow$ R4 $\\rightarrow$ R3 $\\rightarrow$ R5",
      "d) R1 $\\rightarrow$ R2 $\\rightarrow$ R4 $\\rightarrow$ R3 $\\rightarrow$ R5"
    ],
    "justification": "Un motor de inferencia clásico ejecuta <b>solo una regla por ciclo</b>.  \n  \nLa estrategia de desempate dictamina que gana la regla \"más reciente\" (las que acaban de activarse en ese ciclo). Si hay empate de novedad, gana la que tenga la letra con mayor prioridad en el abecedario en sus premisas.  \n  \n<b>CICLO 1:</b>\n\n- <b>Memoria Activa (MA):</b> $\\{A, B, E\\}$\n\n- <b>Conjunto Conflicto (CC):</b> Se activan <b>R1</b> (cumple $A \\land B$) y <b>R2</b> (cumple $E$).\n\n- <b>Resolución:</b> Ambas son recientes.  \n  \nEmpate.  \n  \nMiramos sus premisas: $R1$ tiene la <b>A</b>, $R2$ tiene la <b>E</b>.  \n  \nGana la $R1$ por orden alfabético.\n\n- <b>Ejecución:</b> Se dispara <b>R1</b>.  \n  \nAñadimos $C$ a la memoria.  \n  \n<b>CICLO 2:</b>\n\n- <b>MA:</b> $\\{A, B, E, C\\}$\n\n- <b>CC:</b> Revisamos si la nueva letra $C$ activa algo nuevo. $R3$ necesita la $D$, así que no.  \n  \nEn el Conjunto Conflicto solo nos queda esperando la <b>R2</b>.\n\n- <b>Ejecución:</b> Se dispara <b>R2</b>.  \n  \nAñadimos $D$ a la memoria.  \n  \n<b>CICLO 3:</b>\n\n- <b>MA:</b> $\\{A, B, E, C, D\\}$\n\n- <b>CC:</b> Al entrar la $D$, se activan de golpe dos reglas nuevas: <b>R3</b> (cumple $D \\land C$) y <b>R4</b> (cumple $B \\land D$).\n\n- <b>Resolución:</b> Ambas son hiper-recientes.  \n  \nEmpate.  \n  \nMiramos sus premisas: $R3$ tiene $\\{C, D\\}$ (gana la <b>C</b>). $R4$ tiene $\\{B, D\\}$ (gana la <b>B</b>). Como la B va antes en el abecedario, gana $R4$.\n\n- <b>Ejecución:</b> Se dispara <b>R4</b>.  \n  \nAñadimos $R$ a la memoria.  \n  \n<b>CICLO 4:</b>\n\n- <b>MA:</b> $\\{A, B, E, C, D, R\\}$\n\n- <b>CC:</b> La nueva letra $R$ no activa $R5$ todavía (nos falta la $X$). En el Conjunto Conflicto nos queda esperando la <b>R3</b> desde el ciclo anterior.\n\n- <b>Ejecución:</b> Se dispara <b>R3</b>.  \n  \nAñadimos $X$ a la memoria.  \n  \n<b>CICLO 5:</b>\n\n- <b>MA:</b> $\\{A, B, E, C, D, R, X\\}$\n\n- <b>CC:</b> Al entrar la $X$, se activa por fin la regla <b>R5</b> (cumple $X \\land R$).\n\n- <b>Ejecución:</b> Se dispara <b>R5</b>.  \n  \nLlegamos a la meta $H$.  \n  \n<b>Traza final:</b> $R1 \\rightarrow R2 \\rightarrow R4 \\rightarrow R3 \\rightarrow R5$.",
    "correct": 3,
    "category": "representacion",
    "tags": [
      "Reglas",
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Dada la siguiente codificación de posibles Manifestaciones ($M$) e Interpretaciones ($I$) en un contexto de razonamiento categórico:  \n<b>Tabla de Manifestaciones (M):</b>  \n||<b>m1</b>|<b>m2</b>|<b>m3</b>|<b>m4</b>|<b>m5</b>|<b>m6</b>|<b>m7</b>|<b>m8</b>|  \n|---|---|---|---|---|---|---|---|---|  \n|<b>M(1)</b>|0|0|0|0|1|1|1|1|  \n|<b>M(2)</b>|0|0|1|1|0|0|1|1|  \n|<b>M(3)</b>|0|1|0|1|0|1|0|1|  \n\n<b>Tabla de Interpretaciones (I):</b>  \n||<b>i1</b>|<b>i2</b>|<b>i3</b>|<b>i4</b>|  \n|---|---|---|---|---|  \n|<b>I(1)</b>|0|0|1|1|  \n|<b>I(2)</b>|0|1|0|1|  \n\nY sea el siguiente conjunto de reglas:  \n<div style=\"background: rgba(255,255,255,0.05); border-left: 3px solid #10b981; padding: 10px 15px; margin: 10px 0; border-radius: 4px; font-family: monospace; font-size: 0.95em; color: #d1d5db;\">\nR1: $M(1) \\vee M(2) \\vee M(3) \\rightarrow I(1) \\vee I(2)$<br>\n<br>\nR2: $I(2) \\rightarrow \\neg M(2) \\wedge M(1)$<br>\n<br>\nR3: $I(1) \\vee \\neg I(2) \\rightarrow M(2) \\wedge M(3)$\n</div>\nSi en un momento dado se da la ocurrencia $f = M(1) \\wedge \\neg M(2) \\wedge \\neg M(3)$, entonces podríamos deducir que:",
    "options": [
      "a) La interpretación I(1) es falsa.",
      "b) La interpretación I(1) es verdadera.",
      "c) La interpretación I(2) es falsa.",
      "d) Ninguna de las anteriores."
    ],
    "justification": "Analizamos lógicamente la manifestación entregada.  \n  \nLa evidencia $f$ nos dice categóricamente que $M(1)$ es Verdadera ($1$), $M(2)$ es Falsa ($0$), y $M(3)$ es Falsa ($0$).  \n  \nSi evaluamos esto en la <b>Regla 3</b> ($I(1) \\vee \\neg I(2) \\rightarrow M(2) \\wedge M(3)$), observamos que el consecuente ($M(2) \\wedge M(3)$) es forzosamente <b>Falso</b> (porque carecemos de ambas manifestaciones).  \n  \nPor las reglas básicas de la implicación lógica (<i>Modus Tollens</i>), si el consecuente de una regla es falso, su antecedente no puede ser verdadero.  \n  \nEsto exige que el bloque $(I(1) \\vee \\neg I(2))$ sea obligatoriamente <b>Falso</b>.  \n  \nPara que una disyunción (\"O\") sea falsa, ambas partes deben ser falsas: por tanto, <b>$I(1)$ es Falsa</b> y $\\neg I(2)$ es Falsa (lo que significa que $I(2)$ es Verdadera). La deducción lógica ineludible coincide a la perfección con la opción a).",
    "correct": 0,
    "category": "razonamiento",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
  "question": "<div style=\"background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; margin-bottom:15px; font-size: 0.9em; border-left: 3px solid #3b82f6; color: #9ca3af;\"><em>Contexto del ejercicio anterior:</em><br>\nDada la siguiente codificación de posibles Manifestaciones ($M$) e Interpretaciones ($I$):<br><br>\n\n| | **m1** | **m2** | **m3** | **m4** | **m5** | **m6** | **m7** | **m8** |\n|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n| **M(1)** | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 |\n| **M(2)** | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |\n| **M(3)** | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |\n\n<br>\n\n| | **i1** | **i2** | **i3** | **i4** |\n|---|:---:|:---:|:---:|:---:|\n| **I(1)** | 0 | 0 | 1 | 1 |\n| **I(2)** | 0 | 1 | 0 | 1 |\n\n<div style=\"background: rgba(255,255,255,0.05); border-left: 3px solid #10b981; padding: 10px 15px; margin: 10px 0; border-radius: 4px; font-family: monospace; font-size: 0.95em; color: #d1d5db;\">\nR1: $M(1) \\vee M(2) \\vee M(3) \\rightarrow I(1) \\vee I(2)$<br>\n<br>\nR2: $I(2) \\rightarrow \\neg M(2) \\wedge M(1)$<br>\n<br>\nR3: $I(1) \\vee \\neg I(2) \\rightarrow M(2) \\wedge M(3)$\n</div>\nLa ocurrencia del ejercicio anterior era $f = M(1) \\wedge \\neg M(2) \\wedge \\neg M(3)$.\n</div>\nCon la misma situación del ejercicio anterior y sabiendo que:\n\n- $P(i1) = 0.3 \\quad ; \\quad P(i2) = 0.2 \\quad ; \\quad P(i3) = 0.1 \\quad ; \\quad P(i4) = 0.4$\n\n- $P(m1|i1) = 1.0 \\quad ; \\quad P(m1|i3) = 0.5 \\quad ; \\quad P(m4|i3) = 0.2$\n\n- $P(m5|i2) = 0.8 \\quad ; \\quad P(m6|i4) = 0.3$  \n¿Qué conjunto de interpretaciones es más probable?",
  "options": [
    "a) $\\neg I(1) \\wedge \\neg I(2)$",
    "b) $\\neg I(1) \\wedge I(2)$",
    "c) $I(1) \\wedge \\neg I(2)$",
    "d) $I(1) \\wedge I(2)$"
  ],
  "justification": "El \"ejercicio anterior\" fijaba como escenario empírico la ocurrencia $f = M(1) \\wedge \\neg M(2) \\wedge \\neg M(3)$. Si observamos la matriz de manifestaciones aportada en la pregunta 9, esta combinación booleana $(1, 0, 0)$ corresponde exactamente a la columna del vector <b>m5</b>.  \n  \nAl aplicar el Teorema de Bayes para hallar la interpretación más probable dada la evidencia $m5$, buscamos maximizar la relación: $P(i_k | m5) \\propto P(m5 | i_k) \\cdot P(i_k)$.  \n  \nRevisando los datos condicionales brindados, la única verosimilitud que existe en el conocimiento probabilístico sobre $m5$ apunta directamente a la interpretación $i_2$: <b>$P(m5 | i2) = 0.8$</b>.  \n  \nLas demás interpretaciones ($i1, i3, i4$) son lógicamente incompatibles con el vector $m5$ debido a la Base de Reglas (por ejemplo, vimos en la pregunta 9 que si $m5$ ocurre, $I(1)$ tiene que ser Falsa e $I(2)$ Verdadera, lo cual anula de base a $i1, i3$ e $i4$).  \n  \nPor tanto, la interpretación dominante absoluta es $i_2$, que, leyendo la tabla de interpretaciones de la pregunta anterior, corresponde a los valores booleanos $I(1)=0$ e $I(2)=1$, cuya representación lógica es <b>$\\neg I(1) \\wedge I(2)$</b>.  \n  \n_(Nota: Evita las plantillas libres que asignen la opción 'C'. Si fuera $i_3$, forzaría a que $I(1)$ fuera cierta, lo cual dispararía la Regla 3 obligando a que existieran M(2) y M(3), lo que sabemos que es falso porque nuestra evidencia base es m5)._",
  "correct": 1,
  "category": "razonamiento",
  "tags": [
    "Bayes",
    "BLE/BLR",
    "Reglas"
  ],
  "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Al recibir las entradas una neurona artificial, estas se combinan en primer lugar mediante una:",
    "options": [
      "a) Función de activación",
      "b) Regla Delta",
      "c) Regla de propagación",
      "d) Función de transferencia",
      "e) Función de validación"
    ],
    "justification": "La asimilación matemática en una célula artificial opera en dos etapas secuenciales.  \n  \nLa \"Regla de propagación\" constituye siempre el primer paso algorítmico, encargándose de recopilar y combinar las señales del entorno exterior (generalmente mediante un sumatorio lineal ponderado por los pesos y sumando el <i>bias</i>). Posteriormente, ese potencial bruto pasará por la función de transferencia/activación.",
    "correct": 2,
    "category": "feedforward",
    "tags": [
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "El ADALINE...",
    "options": [
      "a) No tiene capas ocultas",
      "b) Tiene una función de transferencia de tipo sigmoidal",
      "c) No puede ser entrenado con la Regla Delta",
      "d) Puede realizar aproximaciones no lineales",
      "e) Es capaz de aprender cualquier relación entrada/salida"
    ],
    "justification": "El modelo ADALINE (<i>Adaptive Linear Neuron</i>) es una arquitectura de red neuronal estrictamente monocapa.  \n  \nAl carecer de capas ocultas y utilizar una función de activación puramente lineal, no puede trazar fronteras de decisión curvas ni resolver problemas no lineales (como el operador XOR).",
    "correct": 0,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "La Regla Delta...",
    "options": [
      "a) Modifica los pesos en el sentido (signo) del cambio realizado en el ciclo anterior",
      "b) Modifica los pesos en el sentido (signo) opuesto del cambio realizado en el ciclo anterior",
      "c) Modifica los pesos en el sentido (signo) de la pendiente del error",
      "d) Modifica los pesos en el sentido (signo) opuesto de la pendiente del error",
      "e) Todas son falsas"
    ],
    "justification": "La Regla Delta se fundamenta en el descenso por el gradiente.  \n  \nPara minimizar el margen de error entre la salida obtenida y la deseada, los pesos deben ajustarse restando el valor del gradiente.  \n  \nEs decir, los pesos se desplazan espacialmente de manera rigurosa en la dirección diametralmente contraria u \"opuesta\" a la pendiente calculada de la función de error.",
    "correct": 3,
    "category": "feedforward",
    "tags": [
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Al entrenar una RNA, el algoritmo de entrenamiento dice que la modificación de los pesos se debe de multiplicar por una constante llamada...",
    "options": [
      "a) Momento",
      "b) Gradiente",
      "c) Delta",
      "d) Tasa de aprendizaje",
      "e) Bias"
    ],
    "justification": "En la ecuación de retropropagación del error, la magnitud del cambio que dictamina la derivada parcial se modula a través de un escalar constante crucial llamado \"Tasa de aprendizaje\" ($\\alpha$ o $\\eta$). Este escalar determina \"el tamaño del paso\" que da el algoritmo, regulando la velocidad a la que la red converge.",
    "correct": 3,
    "category": "feedforward",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Si durante el entrenamiento de una RNA, en un ciclo se obtiene un gradiente de 0, esto quiere decir...",
    "options": [
      "a) Se está muy lejos de un mínimo",
      "b) Se está muy cerca de un mínimo, pero no en él",
      "c) Se está en un mínimo, y es el global",
      "d) Se está en un mínimo, pero no se sabe si es el global o uno local",
      "e) El error es 0"
    ],
    "justification": "Cuando la pendiente (gradiente) de la superficie del error alcanza 0, la recta tangente es paralela, indicando que el algoritmo ha aterrizado en el fondo de un \"valle\". El problema crítico del descenso del gradiente ciego es que, sin examinar todo el hiperespacio, la red neuronal no tiene forma matemática de discernir si está en el fondo absoluto (mínimo global) o simplemente atrapada en una depresión subóptima (mínimo local).",
    "correct": 3,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Atendiendo a las capacidades funcionales de un Perceptrón clásico monocapa:",
    "options": [
      "a) Puede resolver problemas no linealmente separables.",
      "b) Utiliza funciones de base radial.",
      "c) Es capaz de aprender la función XOR sin capas adicionales.",
      "d) Tiene propiedades bayesianas innatas para la incertidumbre.",
      "e) Todas son falsas."
    ],
    "justification": "Minsky y Papert demostraron matemáticamente en 1969 las limitaciones fundamentales de los perceptrones simples (monocapa): no pueden trazar fronteras complejas y son incapaces de operar si las clases de datos de entrada no son estricta y rígidamente separables mediante una única línea recta (hiperplano).",
    "correct": 4,
    "category": "neurona",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "El número óptimo de neuronas que se debe incluir en las capas ocultas de un Perceptrón Multicapa:",
    "options": [
      "a) Se calcula siempre como la suma de nodos de la capa de entrada y salida",
      "b) Depende del problema a resolver",
      "c) Debe ser igual a 2N+1 por el Teorema de Kolmogorov",
      "d) Debe elegirse de forma estocástica e inmutable",
      "e) Ninguna es correcta"
    ],
    "justification": "En la arquitectura conexionista no existe un postulado analítico cerrado universal que determine cuántas neuronas ocultas son la cifra perfecta.  \n  \nLa cantidad de nodos ocultos constituye un hiperparámetro empírico que depende directamente de la complejidad y no-linealidad específica de los datos del problema a resolver.",
    "correct": 1,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "¿Es factible emplear un perceptrón multicapa para mapear relaciones no separables linealmente que presentan un alto grado de no-linealidad geométrica?",
    "options": [
      "a) Sí, pero sólo si el algoritmo emplea regularización estocástica",
      "b) No, ninguna red neuronal logra superar la barrera del XOR en dominios complejos",
      "c) No, se debe usar obligatoriamente computación evolutiva o lógica borrosa",
      "d) Sí, siempre y cuando la red devuelva resultados discretizados con escalones",
      "e) En cualquier caso, si la red tiene la complejidad suficiente"
    ],
    "justification": "El Teorema de Aproximación Universal demuestra formalmente que cualquier red conexionista <i>Feed-forward</i> equipada con funciones de activación no lineales es capaz de modelar o aproximar funciones continuas arbitrarias (relaciones extremadamente no-lineales), siempre y cuando posea el número de capas ocultas o la complejidad interna adecuada.",
    "correct": 4,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "¿Cuál será el comportamiento del sistema si, tras entrenar con éxito una RNA, se le suministran patrones novedosos ubicados muy fuera de las fronteras topológicas del espacio de generalización aprendido?",
    "options": [
      "a) Avisará algorítmicamente mediante una excepción matemática",
      "b) Aplicará autoorganización dinámica en caliente para asimilar la nueva entrada",
      "c) Se adaptará automáticamente basándose en los bias",
      "d) Devolverá el último patrón correcto almacenado en la memoria",
      "e) Dará una salida arbitraria e imprevisible"
    ],
    "justification": "Las Redes Neuronales son excelentes interpolando, pero pésimas extrapolando.  \n  \nSi se inyecta un patrón \"alienígena\" fuera de la distribución estadística vista en el entrenamiento, la arquitectura inyectará ciegamente el valor a través de la matriz de pesos congelados, provocando una respuesta computada totalmente espuria e imprevisible.",
    "correct": 4,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "¿Qué efecto fenomenológico ocurre al someter a la red de un proceso iterativo en donde la Tasa de Aprendizaje se ha configurado con un escalar demasiado elevado?",
    "options": [
      "a) Se convergerá matemáticamente al mínimo global de manera ultrarrápida",
      "b) Se correrá el riesgo de oscilar en torno al mínimo",
      "c) Se provocará un sub-ajuste o underfitting automático en los bias",
      "d) Se bloqueará la capacidad de generalización estocástica",
      "e) La red entrará irreversiblemente en un efecto de parada temprana"
    ],
    "justification": "Si la tasa de aprendizaje es demasiado alta, el incremento del vector de ajuste será gigantesco, provocando que la red efectúe saltos ciegos que errarán el fondo del valle.  \n  \nEn consecuencia, el error rebotará sistemáticamente de una ladera a otra, generando oscilaciones caóticas y divagaciones sin estabilizarse jamás.",
    "correct": 1,
    "category": "neurona",
    "tags": [
      "neurona"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "El hecho de entrenar una RNA mediante un algoritmo de entrenamiento basado en el gradiente descendente (con pasos ínfimos) tiene el problema de que...",
    "options": [
      "a) Nunca va a encontrar el mínimo global",
      "b) Al acercarse a un mínimo, se va a oscilar de un lado a otro, sin lograr pararse en él",
      "c) Se va a acercar a un mínimo de incrementos muy pequeños",
      "d) Es posible que se quede parado en algún mínimo local",
      "e) Va a necesitar un número muy alto de ciclos para alcanzar un error aceptable"
    ],
    "justification": "_(Nota: La 'E' también es un problema temporal, pero la 'D' es la falla catastrófica del modelo)_  \n  \nDebido a que los pasos que efectúa el vector iterativo son pequeños, si en la superficie de coste encuentra cualquier leve protuberancia o bache de \"mínimo local\", el gradiente morirá. Al carecer de inercia suficiente para saltar y franquear la cresta, el entrenamiento quedará estancado de forma permanente en un estado subóptimo.",
    "correct": 3,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En una RNA, el conjunto de test...",
    "options": [
      "a) Se utiliza para evaluar la capacidad de generalización de la red",
      "b) Debe de ser linealmente separable",
      "c) Produce la modificación de los pesos mediante el algoritmo correspondiente",
      "d) No produce la modificación de los pesos, pero controla el proceso de entrenamiento, y lo para si es necesario",
      "e) Todas son falsas"
    ],
    "justification": "La métrica final e indiscutible de rendimiento para saber si la red ha generalizado correctamente el problema hacia el mundo real (y no solo ha memorizado) se mide obligatoriamente evaluando su error en el conjunto de prueba (<i>Test Set</i>), un lote de datos absolutamente virgen que la red no ha visto ni en la fase de entrenamiento ni en la de validación/tuneo.",
    "correct": 0,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Las técnicas de regularización permiten...",
    "options": [
      "a) Entrenar una RNA hasta alcanzar un error de 0",
      "b) Saltar mínimos locales al entrenar una RNA",
      "c) Eliminar el ruido del conjunto de entrenamiento",
      "d) Resolver problemas de clasificación no linealmente separables",
      "e) Evitar el sobreentrenamiento al entrenar una RNA"
    ],
    "justification": "Las técnicas de regularización (como el <i>Early Stopping</i>, <i>Dropout</i>, o las penalizaciones L1/L2) tienen una única misión fundamental: penalizar la memorización excesiva.  \n  \nFuerzan a la red a mantener modelos simples o a abortar a tiempo, garantizando que el modelo prevenga el temido \"sobreentrenamiento\" (<i>overfitting</i>) provocado por absorber el ruido de los datos.",
    "correct": 4,
    "category": "feedforward",
    "tags": [
      "feedforward"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Para usar una RNA para resolver un problema de clasificación con dos clases, sin posibilidad de que un patrón no pertenezca a ninguna de las dos clases, el número de neuronas de salidas que hay que usar es...",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4",
      "e) 5"
    ],
    "justification": "En un escenario predictivo estrictamente binario y mutuamente excluyente, disponer de dos neuronas de salida sobreparametriza el modelo de manera ineficiente.  \n  \nEl problema se resuelve empleando <b>1 sola neurona</b> provista de una función sigmoidal: si su salida es $< 0.5$ se infiere la clase A, y si es $\\ge 0.5$ se infiere ineludiblemente la clase B.",
    "correct": 0,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "La autoorganización en Sistemas Conexionistas...",
    "options": [
      "a) Permite que exista un jefe que determine el comportamiento de los patrones",
      "b) Impide un comportamiento emergente del sistema",
      "c) Facilita que la información se guarde en las neuronas de entrada",
      "d) Permite que se obtenga redundancia en los datos",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "La autoorganización es un aprendizaje <b>no supervisado</b> (carece de \"jefe\", descartando a). Se fundamenta en originar comportamiento emergente (descartando b). El conocimiento no reside algorítmicamente en las celdas receptoras, sino proyectado en la matriz de pesos sinápticos (descartando c). Finalmente, la redundancia de datos es un requisito de entrada necesario para que la red descubra correlaciones, no un subproducto obtenido (descartando d).",
    "correct": 4,
    "category": "autoorganizacion",
    "tags": [
      "autoorganizacion"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En la corteza cerebral (y en su emulación mediante redes SOM)...",
    "options": [
      "a) La ubicación espacial de las neuronas constituye un mapa organizado",
      "b) Todas las neuronas idénticas realizan la misma función",
      "c) La ubicación de las neuronas no es significativa",
      "d) Todas las anteriores son correctas",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "A diferencia de los perceptrones clásicos, en los Mapas de Kohonen (SOM) la topología espacial es fundamental.  \n  \nModelando de manera fiel la corteza somatosensorial del cerebro mamífero, la red se ve forzada a organizar las unidades competitivas espacialmente; las neuronas ubicadas geométricamente adyacentes se especializan en excitarse ante estímulos del entorno que también son similares entre sí.",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Si los patrones de entrada de un problema tienen dos características o atributos, una Growing Cell Structure (GCS) que lo resuelva tendrá...",
    "options": [
      "a) 1 neurona de entrada",
      "b) 4 neuronas de entrada",
      "c) 6 neuronas de entrada",
      "d) 8 neuronas de entrada",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "Las redes no supervisadas exigen un mapeo isomórfico directo con su entorno.  \n  \nLa cardinalidad de la capa de entrada debe coincidir rigurosamente en formato 1 a 1 con la dimensionalidad de las magnitudes vectoriales a percibir.  \n  \nPor tanto, si el patrón cuenta con 2 atributos de entrada, la arquitectura exigirá obligatoriamente <b>2 neuronas base receptoras</b>.  \n  \nComo el número 2 no aparece entre las alternativas listadas, todas son incorrectas.",
    "correct": 4,
    "category": "autoorganizacion",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Diferencias entre SOM y GCS son:",
    "options": [
      "a) La GCS no consideran neuronas vecinas a la ganadora",
      "b) Un SOM considera un radio de vecindad de diferentes niveles",
      "c) Las GCS consideran solamente vecinas directas a la ganadora",
      "d) No hay diferencia en cuestión de vecindario, la diferencia está en la variación dinámica del numero de neuronas de la capa competitiva",
      "e) B y C son correctas"
    ],
    "justification": "El algoritmo SOM clásico aplica su atenuación gaussiana a todo un parche extenso o vecindario (afectando de manera degradada a neuronas a \"diferentes niveles\" de proximidad). Por el contrario, la topología de la <i>Growing Cell Structure</i> (GCS) es mucho más puntual y agresiva, limitándose algorítmicamente y de forma exclusiva a actualizar solamente a los nodos vecinos colindantes unidos a la BMU mediante un enlace topológico (\"vecinas directas\").",
    "correct": 4,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Una GCS...",
    "options": [
      "a) Está siempre orientada a clasificación",
      "b) Permite añadir neuronas en regiones con menos patrones de entrenamiento",
      "c) Tiene una capa de salida formada por diferentes estructuras k-dimensionales básicas a la vez",
      "d) No se entrena, sus pesos se construyen a partir de los patrones de entrada",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "Se rechazan las opciones porque: A es falsa (es de clustering no supervisado, no de clasificación <i>per se</i>). B es diametralmente falsa, ya que su gran innovación es añadir dinámicamente neuronas justo en las regiones con <i>mayor error</i> y densidad de patrones, no en las de menos.  \n  \nC es falsa porque se apoya en una estructura dimensional única mediante símplices o k-dimensionalidades discretas en su crecimiento.  \n  \nD es falsa porque evidentemente la red exige someterse a múltiples fases de entrenamiento.",
    "correct": 4,
    "category": "autoorganizacion",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Los Mapas Autoorganizativos (SOM) tienen normalmente...",
    "options": [
      "a) Una capa de entrada, tres o cuatro capas ocultas y una capa de salida",
      "b) Una única capa que es de entrada y salida",
      "c) Una capa de entrada y una capa de salida",
      "d) Una capa de neuronas recurrentes y autoorganizables",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "_(O la opción \"c\" si el docente la considera formal.  \n  \nNota explicativa: En las plantillas oficiales de la UDC, la respuesta oficial validada es la \"e\")._  \n  \nEsta pregunta puede tener \"truco\" semántico, razón por la cual la plantilla oficial dictaminó la 'e'. A nivel estrictamente computacional, la red SOM solo posee <b>1 única capa</b> de células que procesan pesos (la capa competitiva topológica). La capa de \"entrada\" es un mero bus transparente que transmite las señales, no cuenta como capa de cálculo, por lo que llamarle arquitectura \"de dos capas (entrada y salida)\" es un error teórico en el conexionismo estricto de Kohonen.",
    "correct": 4,
    "category": "autoorganizacion",
    "tags": [
      "SOM"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En el aprendizaje no supervisado...",
    "options": [
      "a) Se consiguen grupos con elementos similares dentro del mismo grupo.",
      "b) La autoorganización de la red permite hallar las clases supervisadas.",
      "c) Se trabaja con patrones etiquetados con tipo o clase.",
      "d) Si un patrón de entrada no pertenece a ningún grupo reconocido previamente, se descarta siempre.",
      "e) La B y la C son correctas."
    ],
    "justification": "El objetivo principal del aprendizaje no supervisado (como el clustering o las redes SOM) es descubrir estructuras ocultas en datos no etiquetados.  \n  \nEl sistema agrupa los patrones basándose exclusivamente en su similitud matemática (distancia euclídea), logrando que los elementos dentro de un mismo grupo (clúster) sean muy similares entre sí, y muy dispares respecto a los de otros grupos. (Las opciones B y C son falsas por definición al referirse a etiquetas/supervisión).",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "autoorganizacion"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En un SOM...",
    "options": [
      "a) Cada neurona de la capa competitiva representa siempre a un solo patrón de entrada.",
      "b) Cada neurona de la capa competitiva puede representar a un grupo de patrones de entrada.",
      "c) Cada neurona de la capa de entrada representa a un prototipo.",
      "d) Cada neurona de la capa de entrada se conecta con x neuronas y estas x conexiones constituyen un prototipo.",
      "e) La A y la C son correctas."
    ],
    "justification": "En los Mapas Auto-Organizativos de Kohonen, la matriz de pesos de cada neurona de la capa competitiva (salida) actúa como un centroide o prototipo.  \n  \nDado que el número de neuronas del mapa suele ser muchísimo menor que el número total de datos del mundo real, múltiples patrones de entrada que sean topológicamente similares activarán (tendrán como BMU) a la misma neurona, haciendo que esta represente a todo ese clúster o \"grupo\" de patrones.",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Si los patrones de entrada tienen diferentes dimensiones, la red más aconsejable para agruparlos es...",
    "options": [
      "a) Un SOM.",
      "b) Una GNG.",
      "c) Un ADALINE.",
      "d) Una GCS.",
      "e) Ninguna de las anteriores."
    ],
    "justification": "Un axioma arquitectónico estricto de las Redes Neuronales Artificiales clásicas (incluyendo SOM, GNG, GCS y perceptrones) es que requieren tensores de entrada de tamaño fijo.  \n  \nLa capa de entrada debe poseer exactamente un nodo por cada dimensión del patrón.  \n  \nSi los patrones del problema tienen \"diferentes dimensiones\" (vectores de tamaño variable), ninguna de estas redes puede procesarlos crudamente; requerirían algoritmos de preprocesamiento (como <i>padding</i>) o arquitecturas recurrentes (RNN) no contempladas en las opciones.",
    "correct": 4,
    "category": "autoorganizacion",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Las tasas de aprendizaje para redes GCS son...",
    "options": [
      "a) Las mismas que para redes SOM.",
      "b) Dos tasas diferenciadas.",
      "c) Una única de aprendizaje en todos los casos.",
      "d) La A y la B son correctas.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "En el algoritmo de <i>Growing Cell Structures</i> (GCS), la regla de adaptación de pesos es mucho más focalizada que en el SOM clásico (el cual usa una función de vecindario gaussiana decreciente). GCS emplea estrictamente <b>dos tasas de aprendizaje diferenciadas e invariantes en el tiempo</b>: una tasa mayor ($\\epsilon_b$) que se aplica de forma exclusiva a la neurona ganadora (BMU), y una tasa mucho menor ($\\epsilon_n$) que se aplica únicamente a las neuronas topológicamente conectadas a ella de forma directa (sus vecinas en el grafo).",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Las redes de neuronas con entrenamiento no supervisado...",
    "options": [
      "a) Tienen un fundamento biológico, se basan en la corteza cerebral.",
      "b) Se llaman así porque el supervisor no sabe supervisarlas.",
      "c) No son de utilidad actualmente.",
      "d) La B y la C son correctas.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "Redes como el SOM de Teuvo Kohonen se inspiraron directamente en la neurofisiología, específicamente en los <b>mapas topográficos de la corteza cerebral</b> de los mamíferos (como el córtex visual o somatosensorial). En el cerebro, neuronas físicamente cercanas responden a estímulos sensoriales similares (por ejemplo, frecuencias de sonido continuas), organizándose de manera autónoma y no supervisada mediante excitación lateral, exactamente igual que las redes competitivas artificiales.",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "El problema del viajante con una SOM...",
    "options": [
      "a) Se resuelve considerando una vecindad lineal.",
      "b) Se resuelve sin vecindad.",
      "c) Nunca se puede resolver.",
      "d) La B y la C son correctas.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "El clásico Problema del Viajante de Comercio (TSP) busca el camino más corto que conecte múltiples ciudades (puntos 2D) formando un circuito cerrado.  \n  \nPara resolverlo con una red SOM, se altera su estructura: en lugar de una malla 2D, se inicializa la red como una <b>cadena unidimensional cerrada (un anillo o vecindad lineal elástica)</b>.  \n  \nAl entrenar, este anillo se estira y se retuerce auto-organizándose hasta pasar por todas las \"ciudades\" de entrada, generando el recorrido óptimo.",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Los trabajos de uno de los siguientes investigadores NO forman parte de la inspiración biológica que se utilizó como base para conformar el cómo funcionan los algoritmos genéticos.  \n  \n¿Cuál?",
    "options": [
      "a) Gregor Mendel.",
      "b) Alfred Wallace.",
      "c) Jean-Batiste Lamark.",
      "d) Charles Darwin.",
      "e) John H. Holland."
    ],
    "justification": "Los Algoritmos Genéticos estándar (formalizados por John Holland) se basan estrictamente en la teoría de la Selección Natural (Darwin y Wallace) y en la genética clásica de la herencia cromosómica (Mendel). <b>Jean-Baptiste Lamarck</b> propuso la teoría de la \"herencia de los caracteres adquiridos\" (ej. las jirafas estiran el cuello y sus hijos nacen con cuello largo), un concepto que se descarta en la genética clásica y en los Algoritmos Genéticos puros (aunque sí inspira modelos híbridos complejos como los <i>Algoritmos Meméticos</i>).",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Se recomienda y está más justificado el uso de los Algoritmos Genéticos...",
    "options": [
      "a) En aquellos problemas cuya complejidad permita una solución directa.",
      "b) En aquellos problemas cuya complejidad no permita una solución directa.",
      "c) En los problemas resolubles polinomialmente.",
      "d) Cuando existe un único mínimo local y el espacio de búsqueda es muy pequeño.",
      "e) Siempre es recomendado su uso."
    ],
    "justification": "Los Algoritmos Genéticos son metaheurísticas de gran coste computacional.  \n  \nAplicarlos a problemas sencillos, derivables o con solución directa (opciones A y C) es \"matar moscas a cañonazos\". Su uso está estrictamente justificado en dominios NP-Hard: problemas de altísima complejidad, hiperespacios de búsqueda inmensos, con múltiples mínimos locales o topologías discontinuas donde los métodos analíticos directos fracasan irremediablemente.",
    "correct": 1,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "¿Cuál de los siguientes operadores genéticos es el responsable de explotar la información presente en la población?",
    "options": [
      "a) Clonación.",
      "b) Cruce.",
      "c) Mutación.",
      "d) Remplazo.",
      "e) Selección."
    ],
    "justification": "En computación evolutiva, la <b>Explotación</b> consiste en aprovechar y combinar el \"buen material\" ya descubierto.  \n  \nEl operador de <b>Cruce (Recombinación)</b> es el encargado de esta tarea: toma fracciones valiosas (<i>Building Blocks</i>) del genoma de dos padres exitosos y las entrelaza, asumiendo que al juntar características genéticas ganadoras, se obtendrá una solución hija teóricamente superior.",
    "correct": 1,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "El objetivo del operador de mutación es...",
    "options": [
      "a) Reducir la diversidad de la población.",
      "b) Explorar en el espacio de búsqueda.",
      "c) Explotar la información que está en la población.",
      "d) Seleccionar aquellos individuos que son mejores, en función de su función de ajuste.",
      "e) En un esquema steady-state, decir qué individuos deben de deshacerse para hacer sitio a los nuevos."
    ],
    "justification": "Contrario al cruce, la Mutación es el motor de la <b>Exploración</b>.  \n  \nInyecta pequeñas disrupciones ciegamente aleatorias (ruido) en los cromosomas para garantizar que la población explore y salte a nuevas coordenadas del hiperespacio.  \n  \nEsto previene la pérdida irreversible de alelos y evita que el sistema converja prematuramente estancándose en un mínimo local.",
    "correct": 1,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "¿Cuál de las siguientes afirmaciones es cierta en relación a los algoritmos genéticos?",
    "options": [
      "a) Las soluciones deben de ser codificadas en forma de árbol.",
      "b) Las poblaciones grandes favorecen una evolución más rápida.",
      "c) El esquema de remplazo generacional utiliza menos memoria.",
      "d) Las funciones de ajuste deben de poder evaluarse en cada individuo de la población.",
      "e) El criterio de parada debe de ser único."
    ],
    "justification": "El motor base del darwinismo computacional es la criba de selección.  \n  \nPara que esto opere, es una condición <i>sine qua non</i> que el sistema disponga de una <b>función de ajuste (<i>Fitness</i>)</b> capaz de evaluar, medir y puntuar matemáticamente la aptitud de <b>todos y cada uno</b> de los cromosomas vivos en el pool poblacional en cada ciclo evolutivo. (La opción A es falsa, los AG usan vectores/cadenas; la B es falsa, a mayor población mayor lentitud computacional).",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "Elitismo en algoritmos genéticos...",
    "options": [
      "a) No existe este concepto.",
      "b) Sólo es aplicable a la Programación Genética.",
      "c) Es la estrategia de mantener los mejores individuos de la población.",
      "d) Se encarga de buscar los mejores individuos y con ellos generar una nueva población.",
      "e) La nueva población es generada a partir exclusivamente del mejor individuo (élite)."
    ],
    "justification": "El <b>elitismo</b> es una póliza de seguro algorítmica.  \n  \nDado que el cruce y la mutación son probabilísticos, podrían \"destruir\" por azar a un cromosoma maravillosamente apto hallado en la generación $T$. El elitismo obliga al motor de reemplazo a clonar y <b>mantener intactos al mejor individuo (o grupo élite)</b> y pasarlo directamente a la generación $T+1$, garantizando que el estado del arte del algoritmo nunca involucione.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En algoritmos genéticos existen las técnicas de selección denominadas:",
    "options": [
      "a) Profundidad y anchura.",
      "b) Recombinación puntual y uniforme.",
      "c) Ruleta y torneo.",
      "d) Cruce y mutación.",
      "e) Combinatoria múltiple y estocástica uniforme."
    ],
    "justification": "Las técnicas que escogen quién obtiene el derecho a reproducirse conforman los Operadores de Selección.  \n  \nLa <b>Ruleta</b> (selección proporcional donde se asigna a cada individuo una porción del disco según su <i>fitness</i>) y el <b>Torneo</b> (donde se extraen subconjuntos aleatorios compitiendo localmente) son las dos estrategias estocásticas de selección más canónicas e implementadas en computación evolutiva.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En un Algoritmo Genético el término \"Generación\"...",
    "options": [
      "a) Representa cada ciclo de funcionamiento del Algoritmo.",
      "b) En el mecanismo de gestión de población \"Steady-State\" representa el cambio de todos los individuos por los hijos.",
      "c) Representa seleccionar al mejor individuo de cada población para copiarlo a la siguiente población.",
      "d) No existe este concepto en Algoritmos Genéticos.",
      "e) Ninguna de las anteriores."
    ],
    "justification": "Al igual que en la biología, una generación computacional se define de manera estructural como <b>un ciclo completo (o iteración temporal) de funcionamiento</b> del bucle principal del algoritmo: se evalúa la aptitud de la población actual, se selecciona, se cruza, se muta y se somete a reemplazo, marcando el inicio formal de una nueva generación genética en la simulación.",
    "correct": 0,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "La denominación \"Steady-state\" en términos de un Algoritmo Genético es...",
    "options": [
      "a) El mecanismo mediante el cual se mantiene a los mejores individuos en una población.",
      "b) Un tipo de gestión de la población de individuos.  \n  \nEn este tipo también hay que especificar el tipo de sustitución de individuos.",
      "c) Una forma de crear la población de descendientes antes de eliminar la población de los padres y pasar a la siguiente generación.",
      "d) Una forma de combinar los Algoritmos Genéticos con técnicas de optimización local.",
      "e) No existe esta palabra en estos sistemas."
    ],
    "justification": "Frente al modelo \"Generacional\" (donde muere el $100\\%$ de los padres de golpe), el modelo <b>Steady-State</b> es un tipo de <b>gestión poblacional</b> donde solo nacen uno o dos descendientes por cada ciclo.  \n  \nEsto obliga arquitectónicamente al ingeniero a diseñar e incluir un <b>algoritmo de sustitución</b> adicional para dictaminar qué integrante concreto y aislado de la vieja población debe \"morir\" para ceder su puesto vital al recién llegado (ej: sustituir al peor, al más viejo, o al más parecido).",
    "correct": 1,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "_(Enunciado reconstruido en base a la solución oficial)_  \nEn la Programación Genética...",
    "options": [
      "a) Las soluciones son vectores de números reales o cadenas de bits.",
      "b) No interviene el operador de mutación por su fragilidad.",
      "c) Se emplean mecánicas de descenso de gradiente.",
      "d) El algoritmo de evolución de la población de individuos es igual al de los Algoritmos Genéticos.",
      "e) Ninguna de las anteriores."
    ],
    "justification": "Aunque la Programación Genética difiere radicalmente de los Algoritmos Genéticos en su forma de representar los cromosomas (utilizando complejos árboles sintácticos en lugar de simples cadenas o vectores planos), <b>su motor de evolución subyacente es exactamente el mismo</b>.  \n  \nAmbos se rigen por idéntico flujo de control biológico: inicializar población, evaluar <i>fitness</i>, seleccionar, realizar cruce y mutación (adaptados a árboles) y reemplazar.",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "_(Enunciado reconstruido en base a la solución oficial)_  \nLa inyección de una técnica de búsqueda local (como Hill-Climbing) acoplada a un individuo dentro de un algoritmo genético (Algoritmo Memético):",
    "options": [
      "a) Mejora los individuos para acelerar que se encuentre un óptimo local.",
      "b) Impide cualquier comportamiento basado en herencia Lamarckiana.",
      "c) Asegura la convergencia en el mínimo global en el 100% de los casos.",
      "d) Ralentiza la convergencia debido al enorme coste de memoria de red.",
      "e) Desactiva los operadores de cruce."
    ],
    "justification": "Un algoritmo memético fusiona la exploración global dispersa (del algoritmo genético) con la <b>explotación local intensiva</b>.  \n  \nAl permitir que cada individuo recién cruzado descienda algorítmicamente por la colina de su propio nicho topológico, se perfeccionan (\"mejoran\") sus atributos individuales antes de reproducirse de nuevo, <b>acelerando dramáticamente la convergencia</b> hacia un óptimo en los entornos del espacio que el AG global ha preseleccionado.",
    "correct": 0,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "_(Enunciado reconstruido en base a la solución oficial)_  \nLa función de aptitud (Fitness) en un algoritmo evolutivo...",
    "options": [
      "a) La programación genética no utiliza este elemento que está solo presente en los AG.",
      "b) Se evalúa sobre el mejor individuo de la población exclusivamente.",
      "c) Sirve para determinar cuáles son los mejores individuos de la población.",
      "d) Se ejecuta sobre la población como un todo para hacer competir a las soluciones entre sí.",
      "e) Es la función que marca cuándo se cambia de una generación a la siguiente."
    ],
    "justification": "La función <i>Fitness</i> o de ajuste es el corazón ciego que modela el entorno de la supervivencia natural informáticamente.  \n  \nRetorna un escalar numérico por cada cromosoma que <b>sirve estrictamente para ranquear y determinar</b> cuán buena o mala es la solución que propone ese individuo frente al problema.  \n  \nEste valor es consumido posteriormente por la ruleta o torneo para sesgar la supervivencia favoreciendo a los \"mejores\".",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "_(Enunciado reconstruido en base a la solución oficial)_  \nEn los algoritmos de sustitución para insertar nuevos individuos en un entorno Steady-State:",
    "options": [
      "a) La sustitución de peores es la más rápida y, por tanto, la mejor sin discusión.",
      "b) La sustitución de padres es la mejor porque no se pierde variabilidad.",
      "c) Lo mejor es no sustituir y que la población crezca indefinidamente.",
      "d) La sustitución de parecidos hace que la evolución avance muy despacio porque todos se van a parecer.",
      "e) La mejor opción es utilizar las tres técnicas a la vez."
    ],
    "justification": "La técnica del <i>Crowding</i> o \"Sustitución de Parecidos\" está diseñada para forzar la inserción de hijos eliminando únicamente al individuo de la población antigua que más se le asemeje cromosómicamente.  \n  \nSu gran virtud es que mantiene una inmensa diversidad genética (evita que la población colapse en un clon gigante), pero su peor contrapartida dinámica es precisamente que <b>ralentiza de forma severa el avance y la convergencia</b> de la evolución.",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_2023",
    "question": "En un Algoritmo Genético...",
    "options": [
      "a) Si la tasa de mutación es 0, el algoritmo funciona porque el cruce hace que haya evolución.",
      "b) Si la tasa de cruce es 0, la mutación hace que todos los individuos acumulen demasiados cambios.",
      "c) Si la tasa de cruce es 0, la mutación genera variabilidad y el algoritmo de selección hace que haya evolución.",
      "d) Si la tasa de cruce y evolución son 0, el algoritmo de selección prevalece y hace que haya evolución.",
      "e) Es imposible que el cruce y/o la mutación sean 0."
    ],
    "justification": "Si alteramos la arquitectura del AG anulando el cruce (tasa = 0%), la recombinación genética desaparece por completo.  \n  \nSin embargo, la mutación continuará inyectando ruido aleatorio (variabilidad fenotípica) de manera autónoma, y el mecanismo darwiniano de \"Selección\" operará cribando y quedándose con las mutaciones favorables.  \n  \nEl sistema seguirá iterando y evolucionando guiado por estos fallos genéticos positivos, operando eficazmente bajo un paradigma idéntico al de las llamadas <b>\"Estrategias Evolutivas\"</b>.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Dado el siguiente grafo, donde el nodo inicial es A, el valor numérico de cada nodo indica el resultado de evaluar una función heurística $h$, y el valor numérico de cada arista indica el coste de transición entre estados... ¿Cuál sería el coste de la solución devuelta por el algoritmo $A^\ast$?  \n<img src=\"../assets/images/grafo2.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">",
    "options": [
      "a) 22",
      "b) 26",
      "c) 35",
      "d) 39"
    ],
    "justification": "- El algoritmo $A^\ast$ expande los nodos basándose en la función de evaluación $f(n) = g(n) + h(n)$, donde $g(n)$ es el coste acumulado desde el inicio hasta $n$, y $h(n)$ es el valor heurístico estimado hasta la meta.\n\n- <b>Inicialización:</b> Cola de prioridad = `[A(g=0, h=60, f=60)]`\n\n- <b>Paso 1:</b> Se extrae A y se expande:\n\n- B: $g(B) = 5, h(B) = 50 \\Rightarrow f(B) = 55$\n\n- C: $g(C) = 6, h(C) = 10 \\Rightarrow f(C) = 16$\n\n- Cola = `[C(f=16), B(f=55)]`\n\n- <b>Paso 2:</b> Se extrae C y se expande:\n\n- F: $g(F) = 6 + 5 = 11, h(F) = 5 \\Rightarrow f(F) = 16$\n\n- G: $g(G) = 6 + 10 = 16, h(G) = 1 \\Rightarrow f(G) = 17$\n\n- Cola = `[F(f=16), G(f=17), B(f=55)]`\n\n- <b>Paso 3:</b> Se extrae F y se expande:\n\n- G: $g(G) = 11 + 1 = 12, h(G) = 1 \\Rightarrow f(G) = 13$ (actualiza la entrada anterior de G al ser menor que $17$)\n\n- Cola = `[G(f=13), B(f=55)]`\n\n- <b>Paso 4:</b> Se extrae G y se expande:\n\n- I: $g(I) = 12 + 23 = 35, h(I) = 0 \\Rightarrow f(I) = 35$\n\n- Cola = `[I(f=35), B(f=55)]`\n\n- <b>Paso 5:</b> Se extrae I (meta). Como tiene el menor valor de la cola y es la meta, la búsqueda finaliza con coste <b>35</b>.",
    "correct": 2,
    "category": "busqueda",
    "tags": [
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "<div style=\"background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; margin-bottom:15px; font-size: 0.9em; border-left: 3px solid #3b82f6; color: #9ca3af;\"><em>Contexto del ejercicio anterior:</em><br>\nDado el siguiente grafo, donde el nodo inicial es A, el valor numérico de cada nodo indica el resultado de evaluar una función heurística $h$, y el valor numérico de cada arista indica el coste de transición entre estados...\n</div>\nEn el mismo grafo de la pregunta anterior, ¿cuál sería la solución de aplicar el algoritmo de búsqueda por profundidad iterativa, usando la precedencia lexicográfica como mecanismo de resolución de conflictos?  \n<img src=\"../assets/images/grafo2.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">",
    "options": [
      "a) $A \\to C \\to G \\to I$",
      "b) $A \\to B \\to E \\to H \\to I$",
      "c) $A \\to B \\to A \\to B \\to E \\to A \\to B \\to E \\to H \\to A \\to B \\to E \\to H \\to I$",
      "d) El algoritmo iterativo no encuentra una solución, pero sí lo haría una búsqueda en profundidad estándar"
    ],
    "justification": "La búsqueda por profundidad iterativa (IDDFS) incrementa secuencialmente el límite de profundidad $L$ en cada iteración ($L = 0, 1, 2, 3, \\dots$). Los sucesores de cada nodo se exploran en orden lexicográfico (alfabético):\n\n- <b>Límite L=0:</b> Se explora A. No es meta.\n\n- <b>Límite L=1:</b> Se exploran A -> B y A -> C. Ninguno es meta.\n\n- <b>Límite L=2:</b> Se exploran A -> B -> D, A -> B -> E, A -> C -> F, A -> C -> G. Ninguno es meta.\n\n- <b>Límite L=3:</b>\n\n- Rama B: se explora A -> B -> D -> E y A -> B -> D -> H, y también A -> B -> E -> H.\n\n- Rama C: se explora A -> C -> F -> G, y finalmente <b>A -> C -> G -> I</b>.  \n  \nAl ser I la meta a profundidad 3, se encuentra y se devuelve la solución <b>$A \\to C \\to G \\to I$</b>.",
    "correct": 0,
    "category": "busqueda",
    "tags": [
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En el mismo grafo, la heurística proporcionada...  \n<img src=\"../assets/images/grafo2.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">",
    "options": [
      "a) Es admisible y consistente",
      "b) No es admisible, pero sí consistente",
      "c) Es admisible, pero no consistente en algunos nodos",
      "d) No es admisible ni consistente"
    ],
    "justification": "- <b>Admisibilidad:</b> Una heurística $h(n)$ es admisible si $h(n) \\le h^\ast(n)$ (el coste real óptimo a la meta) para todo nodo $n$.\n\n- Desde el nodo H, el camino real óptimo a la meta es H -> I con coste $1$. Sin embargo, la heurística asignada es $h(H) = 3$. Como $3 > 1$, la heurística sobreestima el coste, por lo que <b>no es admisible</b>.\n\n- <b>Consistencia:</b> Exige que $h(n) \\le c(n, a, n') + h(n')$.\n\n- Para la transición D -> H: $h(D) = 60$, $c(D,H) = 1$, $h(H) = 3$. Esto requeriría $60 \\le 1 + 3 \\Rightarrow 60 \\le 4$, lo cual es falso.  \n  \nPor tanto, <b>no es consistente</b>.",
    "correct": 3,
    "category": "busqueda",
    "tags": [
      "BLE/BLR",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Se nos pide realizar un modelo de representación del conocimiento para un sistema sobre un nuevo virus.  \n  \nAl ser de reciente descubrimiento, se dispone de muy poca información sobre este nuevo virus, pero se tiene mucha información sobre otros virus que se cree que funcionan de una manera similar.  \n  \n¿Qué modelo de representación del conocimiento se debería utilizar?",
    "options": [
      "a) Orientación a objetos",
      "b) Redes semánticas",
      "c) Reglas de producción",
      "d) Frames"
    ],
    "justification": "El modelo de <b>Frames</b> (Marcos) estructura la información en ranuras (slots) que heredan valores por defecto desde clases más generales (en este caso, otros virus similares). Esto permite que, ante una escasez de datos específicos del nuevo virus, se utilicen por defecto los conocimientos del virus prototípico y se vayan sobrescribiendo los detalles a medida que se descubran.",
    "correct": 3,
    "category": "representacion",
    "tags": [
      "representacion"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿En qué se diferencian las reglas IFANY y IFSOME?",
    "options": [
      "a) IFANY investiga toda la premisa, mientras que IFSOME ejecuta la acción cuando encuentra una cláusula cierta",
      "b) IFSOME investiga toda la premisa, mientras que IFANY ejecuta la acción cuando encuentra una cláusula cierta",
      "c) IFANY requiere que una cláusula sea cierta para ejecutar una acción, mientras que IFSOME requiere más de una (al menos 2)",
      "d) IFSOME requiere que una cláusula sea cierta para ejecutar una acción, mientras que IFANY requiere más de una (al menos 2)"
    ],
    "justification": "- <b>Justificación</b>: En los motores de inferencia, la cláusula <b>IFANY</b> funciona como un OR de cortocircuito: evalúa la premisa y ejecuta la acción en cuanto encuentra la primera cláusula que sea cierta.  \n  \nPor el contrario, <b>IFSOME</b> investiga toda la premisa de forma exhaustiva para recopilar todas las que se cumplen antes de proceder.",
    "correct": 1,
    "category": "representacion",
    "tags": [
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Las arquitecturas básicas de agentes son:",
    "options": [
      "a) Reactivo, reactivo con estado, basado en metas y basado en utilidades",
      "b) Reactivo, basado en metas, basado en metas con estado y basado en utilidades",
      "c) Activo, reactivo, reactivo con estado y basado en metas",
      "d) Activo, reactivo, basado en metas con estado y basado en utilidades"
    ],
    "justification": "Según la clasificación clásica de Russell & Norvig, los agentes se estructuran en cuatro familias básicas:  \n1. <b>Reactivos simples</b> (sin memoria, asocian percepciones a acciones directamente).  \n2. <b>Reactivos basados en modelos</b> (mantienen un estado interno del mundo).  \n3. <b>Basados en objetivos / metas</b> (actúan para alcanzar metas deseadas).  \n4. <b>Basados en utilidad</b> (maximizan una función de preferencia o bienestar).",
    "correct": 0,
    "category": "introduccion",
    "tags": [
      "introduccion"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Sea un dominio con tres manifestaciones posibles $\\{M(1), M(2), M(3)\\}$ y dos interpretaciones posibles $\\{I(1), I(2)\\}$. Desde una perspectiva categórica, y dadas las reglas del dominio:  \n<div style=\"background: rgba(255,255,255,0.05); border-left: 3px solid #10b981; padding: 10px 15px; margin: 10px 0; border-radius: 4px; font-family: monospace; font-size: 0.95em; color: #d1d5db;\">\nR1: $M(1) \\lor M(2) \\lor M(3) \\implies I(1) \\lor I(2)$<br>\n<br>\nR2: $I(2) \\implies \\neg M(2) \\land M(1)$<br>\n<br>\nR3: $I(1) \\lor \\neg I(2) \\implies M(2) \\land M(3)$\n</div>\n\n\n#### Tabla de Manifestaciones:  \n||<b>m1</b>|<b>m2</b>|<b>m3</b>|<b>m4</b>|<b>m5</b>|<b>m6</b>|<b>m7</b>|<b>m8</b>|  \n|---|---|---|---|---|---|---|---|---|  \n|<b>M(1)</b>|0|0|0|1|0|1|1|1|  \n|<b>M(2)</b>|0|0|1|0|1|0|1|1|  \n|<b>M(3)</b>|0|1|0|0|1|1|0|1|  \n\n#### Tabla de Interpretaciones:  \n||<b>i1</b>|<b>i2</b>|<b>i3</b>|<b>i4</b>|  \n|---|---|---|---|---|  \n|<b>I(1)</b>|0|0|1|1|  \n|<b>I(2)</b>|0|1|0|1|  \n\n¿Cuál de las siguientes combinaciones pertenece a la Base Lógica Reducida?",
    "options": [
      "a) $m_4 i_1$",
      "b) $m_4 i_2$",
      "c) $m_4 i_3$",
      "d) Ninguna es correcta"
    ],
    "justification": "Analizando la manifestación $m_4$, en la tabla dada sus valores son $M(1)=1, M(2)=0, M(3)=0$. Evaluemos cada opción:\n\n- <b>Para a) $m_4 i_1$ (donde $I(1)=0, I(2)=0$):</b>\n\n- R1 establece que si hay manifestaciones activas (las hay porque $M(1)=1$), debe haber al menos una interpretación activa.  \n  \nAl ser ambas 0, <b>R1 se viola</b>.  \n  \nNo pertenece a la BLR.\n\n- <b>Para b) $m_4 i_2$ (donde $I(1)=0, I(2)=1$):</b>\n\n- R1: Antecedente Verdadero, Consecuente Verdadero ($I(2)=1$). (Se cumple)\n\n- R2: Antecedente Verdadero ($I(2)=1$). Consecuente: $\\neg M(2) \\land M(1) = \\neg 0 \\land 1 = 1$. (Se cumple)\n\n- R3: Antecedente: $I(1) \\lor \\neg I(2) = 0 \\lor \\neg 1 = 0$ (Falso). Al ser el antecedente falso, la implicación se cumple automáticamente. (Se cumple)\n\n- Todas las reglas se satisfacen, por lo que <b>pertenece a la BLR</b>.\n\n- <b>Para c) $m_4 i_3$ (donde $I(1)=1, I(2)=0$):</b>\n\n- R3: Antecedente: $I(1) \\lor \\neg I(2) = 1 \\lor \\neg 0 = 1$ (Verdadero). Consecuente: $M(2) \\land M(3) = 0 \\land 0 = 0$ (Falso). <b>R3 se viola</b> ($1 \\Rightarrow 0$ es falso). No pertenece a la BLR.",
    "correct": 1,
    "category": "razonamiento",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "<div style=\"background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; margin-bottom:15px; font-size: 0.9em; border-left: 3px solid #3b82f6; color: #9ca3af;\"><em>Contexto del ejercicio anterior:</em><br>\n<p style=\"margin:8px 0\">Sea un dominio con tres manifestaciones posibles $\\{M(1), M(2), M(3)\\}$ y dos interpretaciones posibles $\\{I(1), I(2)\\}$. Desde una perspectiva categórica, y dadas las reglas del dominio:</p>\n<div style=\"background:rgba(255,255,255,0.05);border-left:3px solid #10b981;padding:10px 15px;margin:8px 0;border-radius:4px;font-family:monospace;color:#d1d5db;\">\n  R1: $M(1) \\lor M(2) \\lor M(3) \\implies I(1) \\lor I(2)$<br>\n  R2: $I(2) \\implies \\neg M(2) \\land M(1)$<br>\n  R3: $I(1) \\lor \\neg I(2) \\implies M(2) \\land M(3)$\n</div>\n\n#### Tabla de Manifestaciones:  \n||<b>m1</b>|<b>m2</b>|<b>m3</b>|<b>m4</b>|<b>m5</b>|<b>m6</b>|<b>m7</b>|<b>m8</b>|  \n|---|---|---|---|---|---|---|---|---|  \n|<b>M(1)</b>|0|0|0|1|0|1|1|1|  \n|<b>M(2)</b>|0|0|1|0|1|0|1|1|  \n|<b>M(3)</b>|0|1|0|0|1|1|0|1|  \n\n#### Tabla de Interpretaciones:  \n||<b>i1</b>|<b>i2</b>|<b>i3</b>|<b>i4</b>|  \n|---|---|---|---|---|  \n|<b>I(1)</b>|0|0|1|1|  \n|<b>I(2)</b>|0|1|0|1|  \n\n\n</div>\n<p>Con las mismas reglas del ejercicio anterior, y sabiendo que tenemos la manifestación $M(1)$, ¿cuál es el conjunto de interpretaciones más probable? Ten en cuenta las siguientes probabilidades:</p>\n<div style=\"background:rgba(255,255,255,0.05);border-left:3px solid #10b981;padding:10px 15px;margin:8px 0;border-radius:4px;font-family:monospace;color:#d1d5db;\">\n  $p(\\neg I(1) \\land \\neg I(2)) = 0.2$<br>\n  $p(\\neg I(1) \\land I(2)) = 0.08$<br>\n  $p(I(1) \\land \\neg I(2)) = 0.34$<br>\n  $p(I(1) \\land I(2)) = 0.38$\n</div>",
    "options": [
      "a) $\\neg I(1) \\land \\neg I(2)$",
      "b) $\\neg I(1) \\land I(2)$",
      "c) $I(1) \\land \\neg I(2)$",
      "d) $I(1) \\land I(2)$"
    ],
    "justification": "Evaluemos la consistencia de las interpretaciones cuando $M(1)=1$:  \n1. $\\neg I(1) \\land \\neg I(2)$ es inconsistente porque al estar activa $M(1)$, R1 obliga a que al menos una interpretación sea verdadera.  \n2. $I(1) \\land I(2)$ es inconsistente porque R2 exige que si $I(2)=1 \\Rightarrow M(2)=0$, mientras que R3 exige que si $I(1)=1 \\Rightarrow M(2)=1$, provocando una contradicción.  \n3. Las únicas interpretaciones consistentes con $M(1)=1$ son:\n\n- $\\neg I(1) \\land I(2)$ (Probabilidad: 0.08)\n\n- $I(1) \\land \\neg I(2)$ (Probabilidad: 0.34)  \n  \nAl comparar las probabilidades de los estados consistentes, la más probable es <b>$I(1) \\land \\neg I(2)$</b> con $0.34$.",
    "correct": 2,
    "category": "razonamiento",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En un problema de planificación clásica con $N$ variables booleanas, el tamaño máximo del espacio de estados:",
    "options": [
      "a) Crece de forma lineal ($2N$), ya que cada variable añade un nuevo estado posible",
      "b) Crece de forma cuadrática ($N^2$), debido a las relaciones entre precondiciones y efectos",
      "c) Crece de forma exponencial ($2^N$), porque cada variable puede tomar dos valores posibles",
      "d) Permanece constante, ya que el entorno es estático"
    ],
    "justification": "En planificación clásica, si hay $N$ variables booleanas independientes, cada una de ellas puede encontrarse en uno de dos estados posibles ($\\{\\text{Verdadero}, \\text{Falso}\\}$). Por tanto, la combinatoria total de combinaciones de estados es $2 \\times 2 \\times \\dots \\times 2 = 2^N$.",
    "correct": 2,
    "category": "planificacion",
    "tags": [
      "BLE/BLR",
      "Planificación"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Si hablamos de sistemas de producción...",
    "options": [
      "a) La base de conocimientos está formada por la base de reglas y el motor de inferencias",
      "b) Los sistemas dirigidos por los datos son más específicos, porque ejecutarán todas las reglas disponibles en función de la información introducida",
      "c) La memoria activa almacena todos los cambios de estado de nuestro sistema, de forma que representa siempre nuestro estado actual",
      "d) El motor de inferencias es el responsable de interactuar con el mundo exterior"
    ],
    "justification": "La memoria activa (o memoria de trabajo) almacena dinámicamente los hechos que representan el estado actual de la resolución del problema.  \n  \nCada vez que una regla de producción se ejecuta, modifica el contenido de esta memoria activa, manteniendo una imagen actualizada del estado del sistema.  \n  \nEl motor de inferencias es el software de control (separado de la base de conocimientos), y el mundo exterior se gestiona mediante interfaces.",
    "correct": 2,
    "category": "representacion",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Sobre algoritmos de búsqueda en árboles:",
    "options": [
      "a) La búsqueda en anchura siempre es óptima y completa",
      "b) El profundizamiento iterativo en profundidad debería usarse en espacios de estado en los que se conoce la profundidad de la solución",
      "c) La búsqueda en profundidad es óptima, pero no completa",
      "d) Ninguna es correcta"
    ],
    "justification": "- <b>La a) es falsa:</b> La búsqueda en anchura (BFS) solo es óptima si los costes de todas las aristas son idénticos o no-decrecientes con la profundidad.\n\n- <b>La b) es falsa:</b> Si se conoce la profundidad exacta de la solución, lo óptimo es usar búsqueda en profundidad limitada.  \n  \nIDDFS se emplea cuando la profundidad es desconocida.\n\n- <b>La c) es falsa:</b> La búsqueda en profundidad (DFS) puede caer en ramas infinitas (no es completa) y no garantiza encontrar la solución más barata (no es óptima).",
    "correct": 3,
    "category": "busqueda",
    "tags": [
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "El modelo bayesiano...",
    "options": [
      "a) Hace una suposición de independencia para las manifestaciones e interpretaciones",
      "b) No asume relaciones causales",
      "c) La evidencia a favor de una hipótesis no cuenta en la negación de esta hipótesis",
      "d) Ninguna es correcta"
    ],
    "justification": "- Por qué la <b>a</b> es falsa: El temario define textualmente que <i>\"En la probabilidad condicional aparecen involucrados dos sucesos, en donde</i> <b>la ocurrencia del segundo depende de la ocurrencia del primero</b>\". El modelo bayesiano se basa precisamente en la <b>dependencia</b> probabilística entre una manifestación (evidencia) y una interpretación (hipótesis). Si asumiera que manifestaciones e interpretaciones son variables independientes, el modelo no podría actualizar la creencia ante nueva evidencia, invalidando la fórmula central de Bayes mostrada en el temario.\n\n- Por qué la <b>b</b> es falsa: La teoría establece literalmente que <i>\"La probabilidad condicional se parece a la total, pero puede ser definida como la</i> <b>probabilidad de las causas</b>\". Además, al avanzar hacia las Redes Bayesianas como solución estructurada del mismo modelo, el temario confirma que sus capacidades fundamentales son _\"_<b>Inferir causas</b> <i>a partir de síntomas\"</i> y _\"_<b>Predecir efectos de una causa</b>\". Por lo tanto, el modelo bayesiano sí asume y modela relaciones de causalidad.\n\n- Por qué la <b>c</b> es falsa: La diapositiva 35 del Tema 4, titulada expresamente <i>\"Secuencialidad y</i> <b>consistencia matemática</b>\", formula las siguientes sentencias matemáticas:\n\n- $P(A)+P(¬A)=1$\n\n- $P(H∣o_1​∧o_2​∧o_3​)=x$\n\n- $P(¬H∣o_1​∧o_2​∧o_3​)=1−x$  \nEsta demostración del temario prueba que cualquier conjunto de evidencias ($o_1​∧o_2​∧o_3​$) que otorgue un valor probabilístico x a favor de una hipótesis ($H$), automáticamente y por definición, afecta e impacta a la negación de dicha hipótesis ($¬H$), restándole exactamente ese mismo valor ($1−x$).",
    "correct": 3,
    "category": "razonamiento",
    "tags": [
      "Bayes",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Si un entorno es parcialmente observable y estocástico, la planificación clásica:",
    "options": [
      "a) Sigue siendo válida sin cambios, porque los algoritmos de búsqueda no dependen de la observabilidad",
      "b) No es directamente aplicable porque requiere observabilidad total y acciones deterministas",
      "c) Reduce el espacio de estados al no conocerse toda la información del entorno",
      "d) Requiere usar exclusivamente búsqueda voraz para estimar estados posibles"
    ],
    "justification": "La planificación clásica (STRIPS / PDDL) opera bajo la hipótesis del mundo cerrado, asumiendo un entorno estático, totalmente observable y acciones con efectos deterministas.  \n  \nSi estas propiedades fallan (entorno estocástico y parcialmente observable), los planes lineales clásicos fallarán y se requerirán modelos como MDPs o POMDPs.",
    "correct": 1,
    "category": "planificacion",
    "tags": [
      "BLE/BLR",
      "Planificación"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "*(Nota: Pregunta idéntica a la 10)*  \nSi hablamos de sistemas de producción...",
    "options": [
      "a) La base de conocimientos está formada por la base de reglas y el motor de inferencias",
      "b) Los sistemas dirigidos por los datos son más específicos, porque ejecutarán todas las reglas disponibles en función de la información introducida",
      "c) La memoria activa almacena todos los cambios de estado de nuestro sistema, de forma que representa siempre nuestro estado actual",
      "d) El motor de inferencias es el responsable de interactuar con el mundo exterior"
    ],
    "justification": "La memoria activa (o de trabajo) guarda dinámicamente el estado actual del problema actualizándose tras cada disparo de regla.",
    "correct": 2,
    "category": "representacion",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "La eficiencia de un algoritmo de búsqueda depende de dos parámetros, independientemente del dominio de aplicación:",
    "options": [
      "a) Profundidad y criterios de selección de estados",
      "b) Factor de ramificación y costo de expansión",
      "c) Factor de ramificación y profundidad",
      "d) El costo de expansión de los nodos y el tipo de representación de conocimiento usado"
    ],
    "justification": "La complejidad (temporal y espacial) de los algoritmos de búsqueda en árboles y grafos depende fundamentalmente del <b>factor de ramificación ($b$)</b> del árbol de búsqueda y de la <b>profundidad de la solución ($d$)</b>.",
    "correct": 2,
    "category": "busqueda",
    "tags": [
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Por qué una red bayesiana es más explicable que un modelo bayesiano directo sobre datos?",
    "options": [
      "a) Porque las aristas del grafo representan dependencias entre variables, haciendo el razonamiento interpretable",
      "b) Porque transforma las probabilidades en reglas lógicas deterministas, eliminando la incertidumbre",
      "c) Porque los nodos representan únicamente todos los conceptos relevantes, facilitando la comprensión",
      "d) Porque solo admite variables booleanas y no variables continuas, eliminando la incertidumbre"
    ],
    "justification": "En una Red Bayesiana, la topología del grafo acíclico dirigido (DAG) representa explícitamente las relaciones de dependencia condicional (e idealmente causales) entre las variables aleatorias.  \n  \nEsto permite al usuario comprender visualmente cómo fluye e influye la probabilidad a través del modelo.",
    "correct": 0,
    "category": "razonamiento",
    "tags": [
      "Bayes",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿En qué se diferencian las dos ramas clásicas de la Inteligencia Artificial?",
    "options": [
      "a) La rama subsimbólica tiene menos capacidades",
      "b) Una tiene los sistemas expertos y la otra a las redes de neuronas artificiales como paradigmas",
      "c) Una se basa en la estimulación y la otra en la recursividad",
      "d) Ninguna de las anteriores es correcta",
      "e) Todas son correctas"
    ],
    "justification": "La Inteligencia Artificial se divide históricamente en dos grandes corrientes complementarias.  \n  \nLa rama Simbólica se fundamenta en modelos que contienen conocimiento explícito (como reglas, hechos y ontologías), siendo su mayor exponente los Sistemas Expertos (ej.  \n  \nMYCIN). Por el contrario, la rama Subsimbólica o Conexionista se basa en la emulación biológica, extrayendo conocimiento implícito aprendido automáticamente a partir de los datos, siendo las Redes de Neuronas Artificiales su paradigma central.",
    "correct": 1,
    "category": "conexionistas",
    "tags": [
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Qué autores con sus trabajos sobre cibernética sientan las bases de la IA?",
    "options": [
      "a) Rosenblueth, Wiener y Bigelow.",
      "b) Cajal.",
      "c) Craik.",
      "d) Todos los anteriores.",
      "e) A y C son ciertas."
    ],
    "justification": "El nacimiento de la Inteligencia Artificial y los sistemas conexionistas es multidisciplinar.  \n  \nLas bases cibernéticas fundamentales se establecieron en la década de 1940 gracias a trabajos como la \"propuesta cibernética sobre las máquinas teleológicas\" desarrollada por Norbert Wiener (junto a Arturo Rosenblueth y Julian Bigelow en su publicación *Behavior, Purpose and Teleology*), así como la capacidad de los sistemas para utilizar modelos lógicos propuesta por Kenneth Craik (*The Nature of Explanation*).",
    "correct": 4,
    "category": "conexionistas",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En la evolución histórica de los sistemas conexionistas, ¿cuáles son precursores biológicos?",
    "options": [
      "a) Minsky.",
      "b) McCulloch.",
      "c) Papert.",
      "d) Todos los anteriores.",
      "e) Ninguno de los anteriores."
    ],
    "justification": "Los precursores biológicos sentaron las bases orgánicas que luego se trasladarían a las matemáticas.  \n  \nSantiago Ramón y Cajal describió la estructura de la neurona, Donald Hebb postuló el aprendizaje sináptico, y fue el investigador Warren McCulloch (junto a Walter Pitts) quien logró trasladar esa biología a un modelo lógico-matemático fundacional en 1943, convirtiéndose en un precursor biológico innegable de las redes neuronales.  \n  \nMinsky y Papert, por el contrario, fueron críticos posteriores que frenaron el avance del perceptrón.",
    "correct": 1,
    "category": "conexionistas",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Causas del interés actual por los Sistemas Inteligentes Subsimbólicos",
    "options": [
      "a) El interés existente por la búsqueda de arquitecturas de computadoras que permitan el procesamiento en paralelo.",
      "b) La habilidad de estos sistemas para aprender automáticamente.",
      "c) La habilidad para poder funcionar de forma aceptable tanto en presencia de información inexacta como cuando se producen deterioros o fallos en sus componentes.",
      "d) Su similitud con los modelos neurofisiológicos del cerebro, pudiéndose de este modo intercambiar modelos e investigaciones entre los de RNA y Neurociencias, potenciándose ambas.",
      "e) Todas las anteriores son correctas"
    ],
    "justification": "Los sistemas conexionistas (redes neuronales) han experimentado un inmenso resurgir (\"tercera primavera de la IA\") debido a cuatro factores técnicos decisivos: su habilidad intrínseca para aprender automáticamente a partir de datos (sin ser programados explícitamente), su notable tolerancia y robustez para funcionar frente a fallos de componentes o información inexacta (ruido), su capacidad para ser implementados en arquitecturas de hardware masivamente en paralelo, y su similitud con modelos neurofisiológicos que permiten intercambiar avances con las neurociencias.",
    "correct": 4,
    "category": "conexionistas",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Cuál de los siguientes avances tecnológicos no está relacionado con la IA?",
    "options": [
      "a) Impresoras 3D y fabricación aditiva.",
      "b) Realidades extendidas y \"gemelos digitales\"",
      "c) Tecnologías convergentes \"NBIC\".",
      "d) Todas las anteriores están relacionadas.",
      "e) Ninguna de las anteriores está relacionada."
    ],
    "justification": "Si observamos las tendencias tecnológicas que definirán la próxima década y que orbitan o están potenciadas directa o indirectamente por el núcleo de la Inteligencia Artificial, encontramos a las realidades virtuales extendidas (Metaverso y Gemelos Digitales), la impresión 3D/4D de fabricación aditiva masiva, y las nanotecnologías combinadas o tecnologías NBIC (Nanotecnología, Biotecnología, Tecnologías de la Información y Ciencias Cognitivas). Todas ellas están estrechamente interconectadas con los avances de la IA.",
    "correct": 3,
    "category": "conexionistas",
    "tags": [
      "conexionistas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Los Mapas Autoorganizativos (SOM) vistos en clase tienen...",
    "options": [
      "a) Una única capa que es de entrada",
      "b) Una única capa recurrente",
      "c) Una capa de entrada y una capa de salida",
      "d) Dúas capas de neuronas recurrentes y autoorganizables",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "Esta es una pregunta teórica con \"truco\" semántico recurrente en estos exámenes.  \n  \nAunque a simple vista un esquema SOM dibuja neuronas de entrada y neuronas de salida, la respuesta oficial validada por la UDC es \"Todas las anteriores son incorrectas\" (opción E). A nivel estrictamente computacional, la red SOM solo posee <b>1 única capa</b> de células que procesan y realizan cálculos de pesos (la capa competitiva topológica). La supuesta \"capa de entrada\" actúa únicamente como un bus pasivo o *buffer* que transfiere las señales hacia adelante, por lo que llamarla arquitectura \"de dos capas (entrada y salida)\" se considera un error teórico bajo el conexionismo estricto de Kohonen.",
    "correct": 4,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Las 2 ideas centrales en las que se basa Kohonen para desarrollar los SOM son...",
    "options": [
      "a) La ubicación espacial de las neuronas y su crecimiento dinámico",
      "b) La autoorganización y el concepto de simetría",
      "c) La autoorganización y el crecimiento dinámico del nº de neuronas",
      "d) El proceso de adaptación de pesos y el concepto de geometría topológica de elementos de proceso",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "El fundamento primordial del mapa de Teuvo Kohonen radica en combinar el aprendizaje competitivo (donde las neuronas luchan y adaptan sus pesos para parecerse al vector de entrada) con una rigurosa restricción de vecindad espacial.  \n  \nEsto significa que la red mapea características abstrayendo una <b>geometría topológica</b>, logrando que neuronas físicamente cercanas en el mapa respondan a estímulos similares.",
    "correct": 3,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Si los patrones de entrada de un problema tienen 4 características o atributos, una SOM que lo resuelva tendrá...",
    "options": [
      "a) 24 neuronas de entrada",
      "b) 8 neuronas de entrada",
      "c) 4 neuronas de entrada",
      "d) 16 neuronas de entrada",
      "e) Ninguna de las anteriores"
    ],
    "justification": "En una red neuronal de este tipo, la interfaz receptora (las neuronas de entrada) debe acoplarse exactamente a la dimensionalidad matemática de los datos a tratar.  \n  \nSi el patrón cuenta con 4 atributos independientes, es obligatorio disponer de exactamente 4 terminales (o neuronas) en la entrada para recibir cada uno de esos parámetros de forma paralela.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En el aprendizaje no supervisado...",
    "options": [
      "a) Se desconocen las clases, pero se consiguen grupos similares",
      "b) La autoorganización de la red permite hallar directamente las clases",
      "c) Se trabaja con patrones etiquetados",
      "d) La B y la C son correctas",
      "e) Ninguna de las anteriores es correcta"
    ],
    "justification": "El paradigma de aprendizaje no supervisado se caracteriza por operar a ciegas en cuanto a objetivos: carece de etiquetas externas, clases predefinidas o un tutor que dicte el resultado deseado.  \n  \nLa misión algorítmica de la red es autoorganizarse analizando directamente los datos y descubriendo estructuras ocultas, lo que le permite agrupar los patrones (clustering) basándose exclusivamente en su similitud o distancia matemática.",
    "correct": 0,
    "category": "feedforward",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "El ADALINE fue creado",
    "options": [
      "a) Después del perceptrón",
      "b) No llegó a ser creado",
      "c) Antes del perceptrón",
      "d) La B y la C son correctas",
      "e) Ninguna de las anteriores es correcta"
    ],
    "justification": "Desde una perspectiva cronológica, el Perceptrón simple fue presentado por Frank Rosenblatt en 1958. Muy poco después, entre los años 1959 y 1960, los investigadores Bernard Widrow y Marcian Hoff desarrollaron el modelo ADALINE (ADAptive LInear NEuron), que utilizaba una regla de corrección de error más refinada (Regla Delta).",
    "correct": 0,
    "category": "neurona",
    "tags": [
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "El conjunto de datos que se utiliza para calcular los valores de los pesos de las conexiones de una RNA se denomina:",
    "options": [
      "a) Conjunto de prueba",
      "b) Conjunto de validación",
      "c) Conjunto de test",
      "d) Conjunto de entrenamiento",
      "e) Conjunto de normalización"
    ],
    "justification": "En el particionado de datos, el \"conjunto de entrenamiento\" (Training set) es el volumen masivo de datos que fluye operativamente por el algoritmo de aprendizaje (como el backpropagation). Es el único conjunto matemático que interviene directamente en la actualización iterativa e interna del valor de los pesos sinápticos de las conexiones de la red.",
    "correct": 3,
    "category": "feedforward",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Durante el entrenamiento de un perceptrón multicapa se busca...",
    "options": [
      "a) Llegar al error cero siempre.",
      "b) Estar muy cerca de un mínimo error, pero nunca en él.",
      "c) Conseguir un mínimo local siempre.",
      "d) Estar lejos de un mínimo global.",
      "e) Todas son incorrectas."
    ],
    "justification": "El objetivo del entrenamiento de una Red Neuronal Artificial no es lograr un error matemáticamente igual a cero, ya que esto implicaría un \"sobreentrenamiento\" (memorización de los datos y del ruido), perdiendo la capacidad de generalizar frente a nuevos patrones,,. Tampoco se busca \"estar lejos de un mínimo global\" ni \"conseguir un mínimo local siempre\" (al contrario, quedarse atascado en un mínimo local es un problema que algoritmos como el descenso del gradiente con momento intentan evitar),. Por tanto, al no haber ninguna afirmación cierta, la opción E es la correcta.",
    "correct": 4,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Un perceptrón (sin capas ocultas) no puede implementar una puerta lógica con la función",
    "options": [
      "a) AND",
      "b) OR",
      "c) EXOR",
      "d) NOT",
      "e) Puede hacer cualquiera de las anteriores"
    ],
    "justification": "Minsky y Papert demostraron en 1969 las limitaciones matemáticas del perceptrón simple o monocapa: es incapaz de resolver problemas cuyas clases no sean linealmente separables mediante un hiperplano o línea recta.  \n  \nLa función lógica EXOR (XOR u OR exclusivo) es el ejemplo clásico de un problema no linealmente separable, por lo que un perceptrón sin capas ocultas jamás podrá implementarla,.",
    "correct": 2,
    "category": "neurona",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "El número de neuronas de entrada de un perceptrón multicapa",
    "options": [
      "a) Lo puede fijar el usuario como quiera",
      "b) Depende del problema a resolver",
      "c) Debe ser igual al número de neuronas de salida",
      "d) Debe ser igual al número de neuronas ocultas",
      "e) Debe ser distinto al número de neuronas de salida"
    ],
    "justification": "En cualquier red neuronal, la interfaz receptora (la capa de entrada) debe acoplarse estrictamente a la dimensionalidad de los datos que se van a tratar,. Si los patrones de entrada cuentan con N características o atributos independientes, la arquitectura exige obligatoriamente tener exactamente N neuronas en la capa de entrada.  \n  \nPor tanto, no se fija aleatoriamente, sino que depende de las variables del problema.",
    "correct": 1,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "La función de transferencia de las neuronas de un perceptrón multicapa",
    "options": [
      "a) Son solamente lineales",
      "b) Son solamente umbrales",
      "c) Son solamente de tipo sigmoidal",
      "d) Son solamente de tipo logarítmico",
      "e) Todas son falsas"
    ],
    "justification": "Para que un perceptrón multicapa adquiera su propiedad de \"aproximador universal\" y pueda resolver problemas no lineales, sus capas ocultas deben utilizar funciones de transferencia o activación no lineales (como las de tipo sigmoidal o tangente hiperbólica),. Sin embargo, restringir la respuesta a que son solamente lineales, umbrales, sigmoidales o logarítmicas (opciones A, B, C y D) es falso, ya que una misma red puede combinar distintas funciones (por ejemplo, sigmoidal en las capas ocultas y lineal en la de salida para problemas de regresión),.",
    "correct": 4,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "La Regla Delta...",
    "options": [
      "a) Es un algoritmo de aprendizaje no supervisado",
      "b) Maximiza el error cuadrático medio",
      "c) Es un algoritmo de aprendizaje supervisado",
      "d) Fija los valores de los pesos y bias",
      "e) La C y D son correctas"
    ],
    "justification": "La Regla Delta es el fundamento del entrenamiento en redes como el ADALINE. Se trata de un algoritmo de aprendizaje supervisado (opción C), ya que opera calculando la diferencia (error) entre la salida obtenida y una salida deseada o \"supervisada\", modificando los pesos en sentido opuesto a la pendiente del error para minimizarlo,. Además, su función algorítmica es \"fijar\" o establecer iterativamente los valores de los pesos y el bias (opción D) hasta alcanzar el ajuste óptimo.  \n  \nAl ser ciertas la C y la D, la opción E es la correcta.",
    "correct": 4,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En un perceptrón multicapa el conocimiento de la red está en ...",
    "options": [
      "a) Los datos de salida de las neuronas",
      "b) En las funciones de transferencia",
      "c) En los datos de entrada",
      "d) En las conexiones",
      "e) Todas son incorrectas"
    ],
    "justification": "A diferencia de la IA simbólica clásica que almacena el conocimiento en forma de reglas o sentencias lógicas explícitas, el paradigma conexionista distribuye todo el aprendizaje de forma subsimbólica.  \n  \nEl conocimiento y la memoria de una Red Neuronal Artificial residen única y exclusivamente en las intensidades numéricas de sus conexiones sinápticas, es decir, en los pesos de las conexiones,.",
    "correct": 3,
    "category": "neurona",
    "tags": [
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "Para decidir cuál arquitectura de RNA funciona mejor para un dataset, es necesario mirar el error",
    "options": [
      "a) De entrenamiento",
      "b) De validación",
      "c) De test",
      "d) En el ciclo de entrenamiento con menor gradiente",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "A la hora de comparar distintas topologías y evitar sesgos de sobreentrenamiento, el error de entrenamiento no es fiable porque la red podría estar simplemente memorizando.  \n  \nEl conjunto verdaderamente útil para tomar decisiones sobre los hiperparámetros y determinar qué arquitectura generaliza mejor los datos es el conjunto de validación, el cual actúa como un árbitro externo durante la fase de diseño,,.",
    "correct": 1,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En la técnica de parada temprana, una vez finalizado el proceso de entrenamiento, la RNA que se devuelve tiene unos pesos que son",
    "options": [
      "a) siempre los del último ciclo de entrenamiento realizado.",
      "b) siempre correspondientes al ciclo con menor error de entrenamiento.",
      "c) correspondientes al ciclo con menor error de validación.",
      "d) correspondientes al ciclo con menor error de test.",
      "e) correspondientes al ciclo con menor gradiente."
    ],
    "justification": "La parada temprana (Early Stopping) es un método de regularización.  \n  \nMonitoriza el error en el conjunto de validación a lo largo de las épocas; la orden algorítmica consiste en retroceder en el tiempo y \"devolver\" la red en la época matemática exacta donde el error de validación registró su valor histórico más bajo, ya que es ahí donde se demuestra la mayor capacidad de generalización antes de que comience el sobreentrenamiento,,.",
    "correct": 2,
    "category": "neurona",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "El conjunto de patrones de test...",
    "options": [
      "a) No interviene en nada en el entrenamiento",
      "b) Dictamina cuando parar de entrenar",
      "c) Guía todo el proceso de entrenamiento",
      "d) Es siempre el conjunto con mayor cantidad de patrones del dataset",
      "e) Todas las anteriores son falsas"
    ],
    "justification": "Para que la evaluación final del rendimiento de una RNA tenga rigor científico, el conjunto de prueba o \"Test Set\" debe mantenerse estricta y absolutamente virgen.  \n  \nEsto significa que sus datos jamás cruzan la red durante la fase de optimización de pesos ni interactúan con las métricas de detención temprana, sirviendo en exclusiva para medir la capacidad real de generalización del modelo frente a lo desconocido.",
    "correct": 0,
    "category": "neurona",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En una red SOM, la capa de competición está compuesta por:",
    "options": [
      "a) Neuronas que generan la salida supervisada.",
      "b) Neuronas conectadas entre sí por enlaces recursivos.",
      "c) Neuronas que compiten por representar el patrón de entrada.",
      "d) Neuronas que codifican el error de la red.",
      "e) Todas son correctas."
    ],
    "justification": "Las redes de mapas autoorganizativos operan bajo un paradigma de aprendizaje \"competitivo\". Cuando la red recibe un vector numérico de estímulo, todas las neuronas de la capa de salida realizan un cálculo de distancia y compiten entre sí. Aquella cuyo vector de pesos se asemeje más al patrón de entrada se corona como ganadora (Best Matching Unit), obteniendo el privilegio exclusivo de actualizar sus propios pesos y los de su vecindario físico más próximo.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Qué mide el error de cuantización medio en una red SOM?",
    "options": [
      "a) La distancia media entre los vectores de entrada y sus neuronas ganadoras (BMU).",
      "b) El número de patrones correctamente clasificados.",
      "c) El número de neuronas entrenadas.",
      "d) La diferencia entre la salida deseada y la obtenida.",
      "e) El grado de vecindad entre neuronas."
    ],
    "justification": "Al no existir una salida \"deseada\" (las redes SOM son no supervisadas), herramientas clásicas como el cálculo del Error Cuadrático Medio no son aplicables.  \n  \nPara saber si el mapa se ha adaptado y amoldado correctamente a la nube de datos, se usa el *Error de Cuantización*, una métrica que calcula el promedio de las distancias matemáticas resultantes entre todos los vectores de entrenamiento y sus respectivas unidades ganadoras (BMU).",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En una red SOM, la neurona ganadora es aquella que:",
    "options": [
      "a) Tiene el peso con mayor valor.",
      "b) Tiene la mayor activación en la capa de entrada.",
      "c) Es más cercana al patrón de entrada según una medida de distancia.",
      "d) Ha sido activada más veces durante el entrenamiento.",
      "e) Tiene mayor número de conexiones sinápticas."
    ],
    "justification": "La neurona ganadora o BMU no se elige por mayor nivel de activación absoluto o preselección histórica.  \n  \nLa selección se realiza estrictamente en cada ciclo de la red computando y evaluando cuál de todas las celdas tiene el vector de pesos que se encuentra a menor distancia del vector de entrada proporcionado, revelando así la similitud.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Qué función se utiliza habitualmente para determinar la similitud entre una neurona y un patrón de entrada en una SOM?",
    "options": [
      "a) Distancia de Manhattan",
      "b) Producto escalar",
      "c) Distancia Euclídea",
      "d) Entropía cruzada",
      "e) Función sigmoidal"
    ],
    "justification": "En los modelos SOM canónicos, la fórmula de similitud matemática principal que permite medir la dispersión entre las dimensiones del peso de una neurona y las del vector ambiental es la métrica de distancia euclídea ordinaria.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Cuál de los siguientes es un problema común de las redes SOM?",
    "options": [
      "a) No permiten reducción de dimensionalidad.",
      "b) Siempre requieren entrenamiento supervisado.",
      "c) Algunas neuronas pueden no ser entrenadas si están alejadas del espacio de entrada.",
      "d) No pueden representar relaciones topológicas.",
      "e) No necesitan inicialización de pesos."
    ],
    "justification": "Debido a que el SOM tiene una topología geométrica predefinida y rígida (una cuadrícula fija), si algunos nodos del mapa se inicializan de forma aleatoria en coordenadas muy remotas de donde realmente se halla la concentración de datos de entrada, y la función de vecindario se reduce rápidamente, estas neuronas podrían no llegar a ganar jamás frente a ningún estímulo.  \n  \nEstas \"neuronas muertas\" son un defecto arquitectónico de los SOM, problema que más adelante fue solventado en redes dinámicas de crecimiento libre como las GNG.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En una red SOM, ¿qué ocurre con el tamaño del vecindario a lo largo del entrenamiento?",
    "options": [
      "a) Permanece constante.",
      "b) Aumenta progresivamente.",
      "c) Disminuye con el tiempo.",
      "d) Se elimina tras la fase de aprendizaje.",
      "e) Se calcula de forma aleatoria."
    ],
    "justification": "El aprendizaje en mapas de Kohonen se divide en dos fases bien diferenciadas que permiten la estabilidad.  \n  \nPrimero, una \"fase de ordenación\", donde el vecindario es extremadamente amplio para forzar una macro-organización topológica gruesa de toda la red.  \n  \nPosteriormente, se transita a la \"fase de convergencia\", durante la cual tanto la tasa de aprendizaje como el radio topológico de vecindad disminuyen de forma asintótica y progresiva para efectuar el ajuste y estabilización fina de los centroides.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "autoorganizacion"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En la fase de operación de una red SOM:",
    "options": [
      "a) Se modifican los pesos de las neuronas.",
      "b) Se entrena la red con nuevos datos.",
      "c) Se categoriza un patrón según la neurona más similar.",
      "d) Se actualiza la topología de la red.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "El ciclo de vida de un SOM consta de la fase de aprendizaje (donde los pesos son fluidos) y el \"modo de operación\" (fase productiva). Una vez alcanzado este último, la estructura del modelo se congela de manera inmutable; los pesos ya no se alteran y el sistema solo se utiliza para recibir vectores y proyectarlos o abstraerlos hacia la neurona que resulte más cercana (clasificación o mapeo pasivo).",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Qué representa el vector de pesos de una neurona en la capa de competición de una SOM?",
    "options": [
      "a) La tasa de aprendizaje local.",
      "b) El error de representación de dicha neurona.",
      "c) El patrón de entrada más común que ha activado esa neurona.",
      "d) Un prototipo o centroide que representa un grupo de patrones.",
      "e) El número de veces que ha sido ganadora."
    ],
    "justification": "El aprendizaje competitivo empuja orgánicamente a cada vector de pesos de la capa competitiva a moverse hacia las densidades del conjunto de datos.  \n  \nComo resultado final de la autoorganización, cada neurona actúa fenomenológicamente como un \"prototipo\" o centroide matemático que representa eficientemente a todo un grupo (clúster) de patrones que comparten características próximas en el entorno real.",
    "correct": 3,
    "category": "autoorganizacion",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Cuál de las siguientes tareas es especialmente adecuada para una red SOM?",
    "options": [
      "a) Predicción de valores numéricos.",
      "b) Agrupamiento y visualización de datos de alta dimensión.",
      "c) Traducción automática de lenguas.",
      "d) Detección de anomalías supervisada.",
      "e) Reconocimiento de voz con salida categórica."
    ],
    "justification": "Las redes de mapas autoorganizativos son herramientas conexionistas inigualables en técnicas de *clustering* no supervisado y de extracción de conocimiento.  \n  \nSu ventaja crítica radica en mapear conjuntos de datos enrevesados formados por alta dimensionalidad para \"aplastarlos\" visualmente sobre una malla bi o tridimensional discreta y fácilmente interpretable por humanos, salvaguardando las relaciones espaciales y lógicas originales.",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Qué diferencia clave tienen los modelos GCS frente a SOM?",
    "options": [
      "a) No utilizan aprendizaje no supervisado.",
      "b) Ajustan dinámicamente la arquitectura durante el entrenamiento.",
      "c) No permiten visualización de datos.",
      "d) Solo funcionan con entradas binarias.",
      "e) No usan distancia euclídea para calcular similitud."
    ],
    "justification": "Las redes SOM (Mapas de Kohonen) clásicas poseen una topología y un número de neuronas fijo y rígido predefinido desde antes de comenzar a entrenar (por ejemplo, una malla de 10x10). La gran innovación de la arquitectura GCS (Growing Cell Structures) es su naturaleza constructiva y evolutiva: añaden y eliminan neuronas de forma dinámica durante el propio entrenamiento para adaptarse orgánicamente a las regiones con mayor error o densidad de datos,,,.",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "El término \"Fitness\" en un Algoritmo Genético se refiere a...",
    "options": [
      "a) Una forma de intercambiar material genético entre varios individuos de la población.",
      "b) Una forma o función para construir individuos y obtener la población inicial.",
      "c) Una operación genética que cambia la composición de los descendientes.",
      "d) El valor que permite evaluar lo bien adaptado que está cada individuo de la población para obtener la solución al problema que se pretende resolver.",
      "e) Una estrategia que consiste en mantener al mejor individuo y copiarlo directamente a la siguiente generación para evitar perder la mejor solución obtenida."
    ],
    "justification": "En la Computación Evolutiva, la función de aptitud o Fitness es el criterio métrico fundamental que dictamina la supervivencia,. Consiste en una fórmula matemática que evalúa a cada individuo (cromosoma) del enjambre y le asigna una puntuación que representa cuán bien resuelve o se adapta a la problemática planteada, determinando sus posibilidades probabilísticas de reproducirse o ser descartado en la fase de selección,.",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Cuál de las siguientes es una técnica de mutación en los Algoritmos Genéticos?",
    "options": [
      "a) Uniforme",
      "b) Máscara",
      "c) Intercambio",
      "d) Génesis",
      "e) Punto flotante"
    ],
    "justification": "En los Algoritmos Genéticos, el operador de mutación es fundamental para la \"exploración\" del espacio de búsqueda, ya que su objetivo es inyectar variabilidad (ruido estocástico) en la población alterando posiciones aleatorias de los cromosomas.  \n  \nEsta variabilidad es indispensable para evitar la pérdida irreversible de información genética (alelos) y permitir que el algoritmo escape de máximos o mínimos locales, previniendo la convergencia prematura.  \n  \nDentro de las técnicas estándar utilizadas para aplicar la mutación, se documentan explícitamente las siguientes: mutación de bit, mutación multibit, mutación de gen, mutación multigen, mutación de barajado y la mutación de intercambio.  \n  \nPor lo tanto, el \"intercambio\" es una técnica tipificada y válida, descartando opciones inventadas o ajenas a este operador como el punto flotante o la máscara.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En Programación Genética...",
    "options": [
      "a) El cromosoma nunca representa una posible solución para las variables del problema.",
      "b) Los operadores de cruce y mutación se aplican para invertir la población de cromosomas.",
      "c) Los individuos se representan mediante árboles, lo cual es una de las principales diferencias con los Algoritmos Genéticos.",
      "d) La forma de codificar los individuos es la misma que en los Algoritmos Genéticos; solo cambia la forma de aplicar el cruce y la mutación.",
      "e) No existe ninguna técnica en Computación Evolutiva denominada Programación Genética."
    ],
    "justification": "La Programación Genética (desarrollada por John Koza) comparte el mismo motor evolutivo y principio de selección natural que los Algoritmos Genéticos.  \n  \nSin embargo, la mayor diferencia arquitectónica entre ambas disciplinas es la forma en la que se codifica la solución al problema.  \n  \nMientras que en los Algoritmos Genéticos las posibles soluciones o individuos se estructuran mediante vectores planos (como cadenas de bits, caracteres o números reales), en la Programación Genética la codificación se realiza computacionalmente en forma de árbol sintáctico.  \n  \nPara elaborar más sobre esto, en estas representaciones arbóreas, la estructura imita cómo los compiladores leen los programas informáticos.  \n  \nEl genotipo se divide en dos tipos de componentes: los nodos internos (no terminales), que albergan forzosamente a los operadores lógicos o aritméticos (como +, -, AND, OR, IF), y las hojas (nodos terminales), que se ubican en los extremos y corresponden a los valores primitivos o variables de entrada y constantes del problema.  \n  \nPor consiguiente, la representación mediante árboles es el rasgo definitorio y diferencial de la Programación Genética.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Cuál de los siguientes problemas es más adecuado para ser resuelto mediante un Algoritmo Genético?",
    "options": [
      "a) Encontrar el mínimo de una función cuadrática convexa y suave.",
      "b) Encontrar el óptimo de una función diferenciable de una sola variable.",
      "c) Enumerar todas las posibles soluciones en un espacio de búsqueda muy pequeño.",
      "d) Encontrar una ruta para el Problema del Viajante con muchas ciudades.",
      "e) Encontrar el óptimo global exacto cuando debe garantizarse matemáticamente la mejor solución."
    ],
    "justification": "Los Algoritmos Genéticos son metaheurísticas estocásticas de alto coste computacional; su uso se justifica exclusivamente en dominios de altísima complejidad o NP-Hard donde las soluciones directas o analíticas fracasan.  \n  \nEl Problema del Viajante de Comercio (TSP) con un volumen masivo de ciudades genera una explosión combinatoria inmanejable para las matemáticas tradicionales, constituyendo el escenario idóneo para utilizar Computación Evolutiva,.",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR",
      "Heurística"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "En un Algoritmo Genético, ¿qué nombre recibe el proceso en el que el mejor individuo de la población se conserva para la siguiente generación?",
    "options": [
      "a) Seeding",
      "b) Elitismo",
      "c) Aprendizaje lamarckiano",
      "d) Steady-state",
      "e) Hill Climbing"
    ],
    "justification": "Como se detalló previamente, el proceso que salva intacto al individuo con el fitness supremo, esquivando las fases destructivas de la recombinación para perpetuarlo en la siguiente iteración (generación T+1), recibe académicamente el nombre de estrategia elitista o Elitismo,,.",
    "correct": 1,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Cuál de los siguientes no es un método de selección utilizado en los Algoritmos Genéticos?",
    "options": [
      "a) Torneo",
      "b) Sobrante estocástico",
      "c) Universal estocástica",
      "d) Ruleta",
      "e) Sobrante determinístico"
    ],
    "justification": "Las técnicas algorítmicas canónicas incorporadas en los diseños genéticos se fundamentan en introducir variabilidad estocástica, contando con opciones ampliamente reconocidas como el Torneo, la Ruleta, la selección Universal Estocástica o el Sobrante Estocástico.  \n  \nEl concepto de \"sobrante determinístico\" no forma parte del abanico estándar de operadores de selección en el temario.",
    "correct": 4,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Qué mecanismo de selección tiende a distribuir la búsqueda de forma más amplia en el espacio de estados?",
    "options": [
      "a) Selección por ruleta, donde los individuos se asignan a sectores ponderados por su fitness y los sectores con mayor peso tienen mayor probabilidad de no ser seleccionados.",
      "b) Selección por ruleta, donde todos los individuos tienen exactamente la misma probabilidad de ser seleccionados.",
      "c) Selección por torneo, donde se elige un subconjunto de individuos de forma aleatoria y se selecciona el individuo con mejor valor de fitness.",
      "d) Selección por torneo, donde los individuos compiten por parejas y el ganador se selecciona con una probabilidad proporcional a su fitness.",
      "e) Selección por torneo, donde los individuos se agrupan en subconjuntos y se seleccionan los dos individuos con menor fitness para la reproducción."
    ],
    "justification": "La selección por Torneo selecciona un \"ring\" aleatorio de individuos (un subconjunto del censo total) y hace que compitan, logrando que el de mejor fitness de ese grupo sobreviva.  \n  \nEste método posee una gran ventaja sobre la Ruleta pura, pues su presión selectiva se puede modular controlando el tamaño del subconjunto.  \n  \nAl dar oportunidad a individuos medianos de ganar en sus torneos locales, distribuye y explora el espacio de búsqueda de manera mucho más amplia, evitando la endogamia o convergencia prematura en un mínimo local.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "evolutiva"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Cuál de las siguientes afirmaciones describe mejor el cruce en los Algoritmos Genéticos?",
    "options": [
      "a) El cruce selecciona los mejores individuos de la población y elimina los más débiles.",
      "b) El cruce combina material genético de dos individuos progenitores para crear nuevos descendientes.",
      "c) El cruce cambia aleatoriamente genes individuales para introducir valores completamente nuevos en la población.",
      "d) El cruce evalúa la calidad de cada individuo mediante la función de fitness.",
      "e) El cruce garantiza que los descendientes siempre serán mejores que ambos progenitores."
    ],
    "justification": "El Cruce (o Crossover) representa el operador principal de \"Explotación\" dentro del motor evolutivo.  \n  \nSu objetivo fundamental y excluyente es entrelazar y combinar de manera eficiente el material cromosómico valioso (los \"Building Blocks\" o bloques de genes exitosos) pertenecientes a dos padres distintos, engendrando hijos fenotípicamente novedosos que hereden las mejores características conjuntas para progresar en la resolución del problema,.",
    "correct": 1,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Cuál de las siguientes simulaciones es un ejemplo clásico de vida artificial?",
    "options": [
      "a) El juego del laberinto",
      "b) El Juego de la Vida de Conway",
      "c) Hill Climbing",
      "d) La estrategia elitista",
      "e) Ninguna de las anteriores"
    ],
    "justification": "Dentro de los enfoques experimentales inspirados biológicamente, los autómatas celulares son el máximo exponente matemático de la Vida Artificial (VA). Entre ellos, la obra magna más clásica es el \"Juego de la Vida\" formulado por el matemático John Conway: una malla bidimensional sin estado central donde \"organismos\" celulares simples subsisten, se reproducen o perecen guiados por reglas locales estrictas dependientes de sus vecinos.",
    "correct": 1,
    "category": "evolutiva",
    "tags": [
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_junio_2026",
    "question": "¿Qué afirmación describe mejor el entrelazamiento cuántico?",
    "options": [
      "a) Dos qubits comparten un estado vinculado, por lo que medir uno proporciona información sobre el otro.",
      "b) Dos qubits alternan sus estados en direcciones opuestas hasta que se realiza una medición.",
      "c) Dos qubits almacenan el mismo valor clásico en dos ubicaciones físicas diferentes.",
      "d) Un qubit se copia en otro qubit para evitar la pérdida de información.",
      "e) Un qubit controla a otro enviando información más rápido que la luz."
    ],
    "justification": "En los preceptos incorporados por la computación cuántica al temario (Tema 10), el entrelazamiento cuántico supone un fenómeno fundacional de la mecánica subatómica, mediante el cual dos Qubits quedan íntimamente entrelazados; colapsar o medir el estado analítico de uno de los Qubits define instantáneamente y a cualquier distancia la información de su pareja complementaria.",
    "correct": 0,
    "category": "evolutiva",
    "tags": [
      "evolutiva"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "Sobre el grafo del espacio de estados, ¿qué solución encuentra el algoritmo A*?  \n<img src=\"../assets/images/grafo3.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">",
    "options": [
      "a) A → C → G → K",
      "b) A → C → F → J",
      "c) A → B → D → H → L → M",
      "d) A* no encuentra la solución"
    ],
    "justification": "El algoritmo A* siempre expande el nodo con el menor valor $f(n) = g(n) + h(n)$. Si trazamos la ejecución desde A:  \n1. Expandimos A. Sus sucesores son B ($f=1+5=6$) y C ($f=1+3=4$).  \n2. El menor es C. Lo expandimos y obtenemos F ($f=2+6=8$) y G ($f=2+8=10$).  \n3. La frontera tiene a B(6), F(8) y G(10). El menor es B. Al expandir B obtenemos D(9) y E(11).  \n4. La frontera ahora es F(8), D(9), G(10), E(11). El menor es F. Lo expandimos y obtenemos I ($f=3+4=7$) y J ($f=3+2=5$).  \n5. La frontera es J(5), I(7), D(9), G(10), E(11). El menor es J. Expandimos J y llegamos a K ($f=4+0=4$).  \nEl camino trazado por A* es indiscutiblemente `A → C → F → J → K`. La opción B es la única que marca este recorrido óptimo a través de F y J.",
    "correct": 1,
    "category": "busqueda",
    "tags": [
      "A*",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "Sobre el mismo espacio de estados, ¿qué solución encuentra el algoritmo de búsqueda en profundidad iterativa?  \n<img src=\"../assets/images/grafo3.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">",
    "options": [
      "a) A → C → G → K",
      "b) A → C → F → J",
      "c) A → B → D → H → L → M",
      "d) No encuentra la solución"
    ],
    "justification": "La profundidad iterativa (IDS) explora el árbol nivel a nivel, pero dentro de cada nivel utiliza una estrategia de profundidad pura (normalmente guiada por orden alfabético de izquierda a derecha).\n\n* Límite 0 y 1: No llega a la meta.\n\n* Límite 2: Explora las ramas hasta profundidad 2 (A-B-D, A-B-E, A-C-F, A-C-G). Ninguno es meta.\n\n* Límite 3: Se sumerge a profundidad 3. Explora primero todo lo que cuelga de B, y luego lo que cuelga de C. Al bajar por C, explora `A → C → F → I` y `A → C → F → J` (ninguno es meta). Finalmente explora la siguiente rama: `A → C → G → K`. ¡K es un nodo meta ($h=0$) y lo acaba de encontrar a profundidad 3! Por tanto, este es el primer camino válido que el algoritmo devuelve.",
    "correct": 0,
    "category": "busqueda",
    "tags": [
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "<div style=\"background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; margin-bottom:15px; font-size: 0.9em; border-left: 3px solid #3b82f6; color: #9ca3af;\"><em>Contexto del ejercicio anterior:</em><br>\n<img src=\"../assets/images/grafo3.png\" style=\"max-width:100%; max-height:300px; width:auto; border-radius:8px; margin: 15px auto; display:block;\">\n</div>\nCon el enunciado anterior, ¿cuántas veces se expandirá el nodo B?",
    "options": [
      "a) 0",
      "b) 1",
      "c) 2",
      "d) 3"
    ],
    "justification": "El comportamiento de IDS se basa en reiniciar la búsqueda desde cero cada vez que aumenta el límite de profundidad.\n\n* Límite 0: Se expande A.\n\n* Límite 1: Se expande A. Se generan B y C, pero <b>no</b> se expanden porque hemos chocado con el límite.\n\n* Límite 2: Se expande A. Luego se expande B (1ª vez) y C.\n\n* Límite 3: Se expande A. Luego se expande B (2ª vez) para llegar a sus nietos.  \nPor lo tanto, a lo largo de toda la ejecución para llegar a la profundidad 3, el nodo B se ha llegado a expandir exactamente 2 veces.",
    "correct": 2,
    "category": "busqueda",
    "tags": [
      "Búsqueda Ciega"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En las redes semánticas, el razonamiento por rastreo...",
    "options": [
      "a) No puede asegurar la validez de las inferencias obtenidas",
      "b) emplea exclusivamente las relaciones de jerarquía de la red.",
      "c) evita la ambigüedad propia del lenguaje natural, al contrario que el razonamiento por emparejamiento.",
      "d) Ninguna de las anteriores es correcta."
    ],
    "justification": "Según la teoría de los modelos declarativos estructurados, el mecanismo de inferencia fundamental de una red semántica es la \"herencia de propiedades\". Este proceso algorítmico, también llamado rastreo, consiste en que cualquier propiedad cierta para un nodo superior \"cae por gravedad\" hacia sus ejemplares.  \n  \nPara lograr esto, el algoritmo rastrea y navega exclusivamente a través de los arcos de jerarquía taxonómica (como `ES_UN` o `SUBCOJUNTO_DE`).",
    "correct": 1,
    "category": "representacion",
    "tags": [
      "representacion"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿En qué se diferencian las reglas IFANY e IFSOME",
    "options": [
      "a) IFANY investiga toda la premisa, mientras que IFSOME ejecuta la acción cuando encuentra una cláusula cierta",
      "b) IFSOME investiga toda la premisa, mientras que IFANY ejecuta la acción cuando encuentra una cláusula cierta",
      "c) IFANY requiere que una cláusula sea cierta para ejecutar una acción, mientras que IFSOME requiere más de una (al menos 2)",
      "d) IFSOME requiere que una cláusula sea cierta para ejecutar una acción, mientras que IFANY requiere más de una (al menos 2)"
    ],
    "justification": "Esta es una pregunta teórica clásica de los Sistemas de Producción.  \n  \nLa regla IFANY funciona como un mecanismo de cortocircuito (no exhaustivo): en cuanto detecta que la primera condición es cierta, deja de leer y dispara la acción.  \n  \nPor el contrario, la regla IFSOME es de naturaleza exhaustiva; aunque encuentre rápidamente una cláusula cierta, está obligada por su arquitectura a investigar toda la premisa completa para recopilar todos los datos antes de ejecutar la acción.",
    "correct": 1,
    "category": "representacion",
    "tags": [
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "Las arquitecturas básicas de agentes son:",
    "options": [
      "a) Reactivo, reactivo con estado, basado en metas y basado en utilidades",
      "b) Reactivo, basado en metas, basado en metas con estado y basado en utilidades",
      "c) Activo, reactivo, reactivo con estado y basado en metas",
      "d) Activo, reactivo, basado en metas con estado y basado en utilidades"
    ],
    "justification": "Según la clasificación teórica clásica establecida por los autores Russell & Norvig, los agentes solucionadores de problemas se estructuran y dividen en cuatro familias o arquitecturas básicas.  \n  \nEn primer lugar, los agentes reactivos simples, que seleccionan sus acciones guiándose únicamente por las percepciones actuales, sin memoria.  \n  \nEn segundo lugar, los agentes reactivos basados en modelos (o con estado), que mantienen un estado interno que les permite rastrear cómo evoluciona el mundo.  \n  \nEn tercer lugar, los agentes basados en metas u objetivos, que utilizan la planificación para encontrar la secuencia de acciones que les permite alcanzar sus propósitos.  \n  \nY, finalmente, los agentes basados en utilidad, que buscan siempre maximizar una medida de rendimiento, asociada a un valor numérico que representa la \"bondad\" o preferencia de un estado.",
    "correct": 0,
    "category": "introduccion",
    "tags": [
      "BLE/BLR",
      "Planificación"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "Sea un dominio con tres manifestaciones posibles [M(1), M(2), M(3)] y dos interpretaciones [I(1), I(2)]. Desde una perspectiva categórica, y asumiendo el siguiente criterio:  \n#### Tabla de Manifestaciones:  \n| | <b>a</b> | <b>b</b> | <b>c</b> | <b>d</b> | <b>e</b> | <b>f</b> | <b>g</b> | <b>h</b> |  \n|---|---|---|---|---|---|---|---|---|  \n| <b>M(1)</b> | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 1 |  \n| <b>M(2)</b> | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 |  \n| <b>M(3)</b> | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 1 |  \n\n#### Tabla de Interpretaciones:  \n| | <b>x</b> | <b>y</b> | <b>z</b> | <b>t</b> |  \n|---|---|---|---|---|  \n| <b>I(1)</b> | 0 | 0 | 1 | 1 |  \n| <b>I(2)</b> | 0 | 1 | 0 | 1 |  \n\n#### Regla del Dominio:  \n<div style=\"background: rgba(255,255,255,0.05); border-left: 3px solid #10b981; padding: 10px 15px; margin: 10px 0; border-radius: 4px; font-family: monospace; font-size: 0.95em; color: #d1d5db;\">\nR1: $M(1) \\vee M(2) \\vee M(3) \\rightarrow I(1) \\vee I(2)$\n</div>",
    "options": [
      "a) $m_4 i_1$",
      "b) $m_4 i_2$",
      "c) $m_4 i_3$",
      "d) Ninguna de las opciones propuestas pertenece a la BLR"
    ],
    "justification": "Evaluemos si alguna de las interpretaciones para la manifestación $m_4$ logra sobrevivir a las reglas del dominio (es decir, si pertenece a la BLR).\n\n* Las reglas dadas en 2025 son:  \n<div style=\"background: rgba(255,255,255,0.05); border-left: 3px solid #10b981; padding: 10px 15px; margin: 10px 0; border-radius: 4px; font-family: monospace; font-size: 0.95em; color: #d1d5db;\">\nR1: $M(1) \\vee M(2) \\vee M(3) \\rightarrow I(1) \\vee I(2)$<br>\n<br>\nR2: $I(1) \\rightarrow \\neg M(1) \\wedge M(2)$<br>\n<br>\nR3: $I(2) \\wedge \\neg I(1) \\rightarrow M(1) \\wedge M(3)$\n</div>\n\n* En $m_4$, tenemos $M(1)=1$, mientras que el resto de las manifestaciones son $0$.\n\n* Si probamos la opción A ($m_4 i_1$): Aquí $I(1)=0$ e $I(2)=0$. La regla R1 exige que si hay manifestaciones activas (tenemos un 1), debe haber al menos una interpretación activa.  \n  \nAl ser ambas cero, R1 se rompe.  \n  \nDescartada.\n\n* Si probamos la opción B ($m_4 i_2$): Aquí $I(1)=0$ e $I(2)=1$. Evaluamos R3: Su antecedente es cierto ($1$ y $\\neg 0$). Pero su consecuente exige $M(1) \\wedge M(3)$. Como $M(3)=0$, el consecuente es falso.  \n  \nImplicar algo falso desde un antecedente verdadero rompe la regla R3. Descartada.\n\n* Si probamos la opción C ($m_4 i_3$): Aquí $I(1)=1$. Evaluamos R2: Su antecedente es cierto ($1$). Su consecuente exige $\\neg M(1) \\wedge M(2)$. Como $M(1)=1$, $\\neg 1$ es $0$. El consecuente es falso.  \n  \nSe rompe R2. Descartada.  \nComo todas las combinaciones con $m_4$ violan alguna regla, este complejo manifestación es un escenario absurdo o imposible, y ninguna de las opciones propuestas pertenece a la BLR.",
    "correct": 3,
    "category": "razonamiento",
    "tags": [
      "BLE/BLR",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿En qué se diferencian las dos ramas clásicas de la IA?",
    "options": [
      "a) La rama subsimbólica tiene menos capacidad para explicar sus resultados",
      "b) Los sistemas expertos y las redes de neuronas artificiales son sus paradigmas",
      "c) Una se basa en la estimulación y la otra en la emulación",
      "d) Ninguna de las anteriores es correcta",
      "e) A y B son correctas"
    ],
    "justification": "Según los fundamentos introductorios, la IA Simbólica tiene una alta explicabilidad (es transparente), mientras que la Subsimbólica es una \"caja negra\" con menor capacidad para explicar cómo ha llegado a sus resultados (opción A correcta). Además, se diferencian en sus paradigmas fundacionales: la simbólica orbita en torno a los Sistemas Expertos y la lógica, mientras que la subsimbólica tiene a las Redes de Neuronas Articiales como su estandarte absoluto (opción B correcta).",
    "correct": 4,
    "category": "conexionistas",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Qué significa que los sistemas subsimbólicos pertenecen a la rama de la emulación de la IA?",
    "options": [
      "a) Que la red aprenderá muy rápido las diferencias entre ellos.",
      "b) Que es necesario poner más capas intermedias en la Red para representar mejor su conocimiento.",
      "c) Que pretendemos reproducir la función del sistema biológico inteligente.",
      "d) Que pretendemos reproducir la estructura del sistema biológico inteligente.",
      "e) Que pretendemos reproducir tanto la estructura como la función del sistema biológico inteligente."
    ],
    "justification": "La simulación (propia de la IA simbólica) busca replicar el comportamiento exterior o la función sin importar cómo esté construido el programa por dentro.  \n  \nLa emulación, por el contrario, va un paso más allá y a un nivel más profundo: intenta reproducir de manera fidedigna la \"arquitectura o estructura\" subyacente (creando neuronas y sinapsis artificiales) para que, de esa estructura biomimética, nazca orgánicamente la \"función\" inteligente.",
    "correct": 4,
    "category": "conexionistas",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Qué es una sinapsis?",
    "options": [
      "a) El intercambio de energía entre neuronas.",
      "b) Procedimiento fisiológico por el cual mueren las neuronas.",
      "c) Intercambio de energía entre neuronas y astrocitos.",
      "d) Intercambio de información entre los elementos del sistema nervioso.",
      "e) Todas las anteriores son correctas."
    ],
    "justification": "A nivel neurobiológico básico y trasladado a los sistemas conexionistas, las sinapsis son los enlaces funcionales unidireccionales que permiten la comunicación y el trasvase de señales o información entre las distintas células del sistema nervioso, alterando el potencial de la neurona receptora.",
    "correct": 3,
    "category": "feedforward",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En la evolución histórica de los sistemas conexionistas, ¿cuáles son precursores computacionales?",
    "options": [
      "a) Rosenblueth, Wiener y Bigelow.",
      "b) McCulloch y Pitts.",
      "c) Craik.",
      "d) Todos los anteriores.",
      "e) Ninguno de los anteriores."
    ],
    "justification": "El nacimiento de la Inteligencia Artificial reúne a pioneros de diversas disciplinas.  \n  \nPor un lado, científicos como Santiago Ramón y Cajal, Donald Hebb o Warren McCulloch y Walter Pitts (estos dos últimos al trasladar la biología a modelos lógico-matemáticos en 1943) son considerados estrictamente precursores biológicos de las redes neuronales.  \n  \nPor otro lado, investigadores como Wiener, Rosenblueth, Bigelow y Craik, responsables de trabajos publicados también en 1943, sentaron las bases de la IA moderna desde el campo de la Cibernética.  \n  \nLos verdaderos precursores computacionales, catalogados como los \"padres indiscutibles de las ciencias de la computación\", son figuras como Alan Turing, John Von Neumann o Zuse y Sreyers, quienes sentaron las bases de la arquitectura secuencial y la computación necesaria para implementar la IA. Al no aparecer ninguno de estos precursores computacionales en las opciones A, B y C, la única respuesta válida es la E.",
    "correct": 4,
    "category": "conexionistas",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En la evolución histórica de los sistemas conexionistas, ¿cuáles son precursores biológicos?",
    "options": [
      "a) Minsky.",
      "b) Cajal.",
      "c) Papert.",
      "d) Todos los anteriores.",
      "e) Ninguno de los anteriores."
    ],
    "justification": "Los precursores biológicos son aquellos investigadores procedentes de la fisiología o la neurociencia que sentaron las bases orgánicas que más tarde la IA intentaría emular computacionalmente.  \n  \nA finales del siglo XIX, Santiago Ramón y Cajal describió la estructura fundamental de la neurona, proponiendo las teorías esenciales sobre las que se asientan hoy en día todos los desarrollos de los sistemas adaptativos de emulación.  \n  \nPor el contrario, autores como Marvin Minsky y Seymour Papert no fueron precursores biológicos, sino que en 1969 publicaron el libro \"Perceptrons\", en el cual demostraron las limitaciones matemáticas del perceptrón, desautorizando el modelo conexionista y provocando el conocido como \"invierno de la IA\".",
    "correct": 1,
    "category": "conexionistas",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Causas del interés actual por los Sistemas Inteligentes Subsimbólicos?",
    "options": [
      "a) El interés existente por la búsqueda de arquitecturas de computadoras que permitan el procesamiento en paralelo.",
      "b) La habilidad de estos sistemas para aprender automáticamente.",
      "c) La habilidad para poder funcionar de forma aceptable tanto en presencia de información inexacta como cuando se producen deterioros o fallos en sus componentes.",
      "d) Su similitud con los modelos neurofisiológicos del cerebro, pudiéndose de este modo intercambiar modelos e investigaciones entre los de RNA y Neurociencias, potenciándose ambas.",
      "e) Todas las anteriores son correctas"
    ],
    "justification": "Los sistemas conexionistas (rama subsimbólica) han experimentado un inmenso resurgir en las últimas décadas gracias a sus innegables ventajas.  \n  \nEstas redes neuronales destacan por su capacidad intrínseca para aprender y extraer patrones automáticamente de grandes volúmenes de datos (sin necesidad de reglas explícitas programadas). Además, a diferencia de la IA simbólica clásica, su conocimiento se distribuye en los pesos de las conexiones, otorgándoles una gran robustez y tolerancia a fallos, permitiéndoles operar eficazmente frente a ruido o componentes dañados.  \n  \nAsimismo, el auge del procesamiento paralelo encaja perfectamente con su arquitectura.  \n  \nFinalmente, la retroalimentación y similitud con la fisiología humana permite grandes sinergias científicas con las Neurociencias.",
    "correct": 4,
    "category": "conexionistas",
    "tags": [
      "BLE/BLR",
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Cuál de los siguientes avances tecnológicos no está relacionado con la IA?",
    "options": [
      "a) Impresoras 3D y fabricación aditiva.",
      "b) Realidades extendidas y \"gemelos digitales\"",
      "c) Tecnologías convergentes \"NBIC\".",
      "d) Todas las anteriores están relacionadas.",
      "e) Ninguna de las anteriores está relacionada."
    ],
    "justification": "La Inteligencia Artificial actúa en la actualidad como la principal fuerza impulsora que subyace y potencia al resto de las grandes tendencias tecnológicas.  \n  \nLas impresoras 3D/4D y la fabricación aditiva están siendo transformadas radicalmente gracias a la co-creatividad impulsada por máquinas.  \n  \nLas realidades virtuales extendidas (como el Metaverso o los Gemelos Digitales) dependen de la IA para generar simulaciones inmersivas y modelar comportamientos predictivos en objetos físicos.  \n  \nIgualmente, las tecnologías convergentes NBIC (Nanotecnología, Biotecnología, Tecnologías de la Información y Ciencias Cognitivas) aplican algoritmos inteligentes, como la bioinformática y las redes neuronales, para resolver retos complejos como el análisis de procesos patológicos o interfaces cerebro-máquina (ej.  \n  \nNeuralink).",
    "correct": 3,
    "category": "conexionistas",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Qué está en el \"Core\" de la mayoría de los avances tecnológicos?",
    "options": [
      "a) Las potentes infraestructuras de cómputo.",
      "b) Las dos ramas de la IA: simbólica y subsimbólica",
      "c) Los humanos proponiendo nuevos avances",
      "d) Todas las anteriores son correctas",
      "e) Ninguna de las anteriores es correcta"
    ],
    "justification": "Aunque a simple vista podríamos pensar que es la Inteligencia Artificial en general (lo que daría por buena la opción B), el temario y los exámenes de la UDC son muy tajantes en este matiz: el resurgir masivo que ha provocado la actual \"Tercera Primavera de la IA\" y que sustenta el núcleo (\"core\") de las disrupciones tecnológicas (como Deep Learning o Big Data) pertenece de forma única y exclusiva al paradigma de la <b>IA Subsimbólica</b> o Conexionista.  \n  \nComo la opción B mezcla ambas ramas por igual y la rama subsimbólica pura no aparece aislada en ninguna opción, la respuesta oficial dictada por la lógica de la materia es la E.",
    "correct": 4,
    "category": "conexionistas",
    "tags": [
      "conexionistas"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Quién establece que: \"las máquinas sólo pueden hacer todo aquello que sepamos cómo ordenarle que haga\"?",
    "options": [
      "a) Ramón Llull.",
      "b) Ada Lovelace.",
      "c) Newell y Simon.",
      "d) Leibniz.",
      "e) Turing."
    ],
    "justification": "Este célebre axioma histórico se conoce académicamente como el \"Régimen de Lovelace\". Ada Lovelace, pionera de la computación, argumentaba que las máquinas analíticas carecían de iniciativa propia o creatividad, limitándose a ejecutar mecánicamente las rutinas matemáticas explícitas que el humano les hubiera programado.",
    "correct": 1,
    "category": "conexionistas",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "El conjunto de datos que se utiliza para establecer los valores de los pesos de las conexiones de una RNA se denomina:",
    "options": [
      "a) Conjunto de prueba",
      "b) Conjunto de validación",
      "c) Conjunto de test",
      "d) Conjunto de entrenamiento",
      "e) Conjunto de normalización"
    ],
    "justification": "El \"Training Set\" o conjunto de entrenamiento es la porción de datos sobre la que iteran los algoritmos de corrección (como el descenso del gradiente). Es el único bloque de datos autorizado matemáticamente para interactuar con la red y modificar/ajustar de forma directa las intensidades de sus pesos sinápticos.",
    "correct": 3,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "Si durante el entrenamiento de una RNA, en un ciclo se obtiene un gradiente de 0, esto quiere decir...",
    "options": [
      "a) Se está muy lejos de un mínimo.",
      "b) Se está muy cerca de un mínimo, pero no en él.",
      "c) Se está en un mínimo, y es el global.",
      "d) Se está en un mínimo, pero no se sabe si es el global o uno local.",
      "e) El error es 0."
    ],
    "justification": "Durante el proceso de entrenamiento de una RNA (por ejemplo, mediante descenso de gradiente), el algoritmo evalúa la superficie de la función de error e itera modificando los pesos para descender por ella.  \n  \nCuando se alcanza un punto donde la pendiente de la tangente (el gradiente) es exactamente igual a 0, el algoritmo determina que se encuentra posicionado en un mínimo de la función y cesa de actualizar los pesos.  \n  \nNo obstante, debido a la topología y no linealidad de la superficie del error en redes complejas (y dado que la inicialización de los pesos es puramente aleatoria), el algoritmo es susceptible a quedarse atrapado y no puede garantizar matemáticamente si dicho valle corresponde al mínimo absoluto y óptimo (global) o simplemente a un valle secundario (mínimo local) en el cual el error sigue siendo alto.  \n  \nEs erróneo afirmar que el error sea cero, puesto que llegar a un error de cero suele ser sinónimo de sobreentrenamiento y de que la red ha memorizado el ruido.",
    "correct": 3,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "Un perceptrón (sin capas ocultas) no puede implementar una puerta lógica con la función",
    "options": [
      "a) AND",
      "b) OR",
      "c) EXOR",
      "d) NOT",
      "e) Puede hacer cualquiera de las anteriores"
    ],
    "justification": "A pesar del gran interés generado por el perceptrón simple en sus inicios en los años 60, los investigadores Minsky y Papert demostraron matemáticamente que las redes compuestas por una única capa de pesos adaptativos adolecen de una severa limitación computacional: únicamente son capaces de clasificar y aprender ejemplos que sean estrictamente separables de forma lineal mediante una línea recta o un hiperplano en el espacio.  \n  \nEl problema lógico de la puerta EXOR (OR Exclusivo) es el paradigma por excelencia de un conjunto de datos que se cruza espacialmente y, por tanto, no es linealmente separable; lo que hace completamente imposible que un perceptrón sin capas ocultas pueda resolverlo.",
    "correct": 2,
    "category": "neurona",
    "tags": [
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "El número de neuronas de entrada de un perceptrón multicapa",
    "options": [
      "a) Lo puede fijar el usuario como quiera",
      "b) Depende del problema a resolver",
      "c) Debe ser igual al número de neuronas de salida, y lo puede fijar el usuario como quiera",
      "d) Debe ser igual al número de neuronas de salida, pero depende del problema a resolver",
      "e) Debe ser distinto al número de neuronas de salida"
    ],
    "justification": "En la arquitectura funcional de un perceptrón multicapa, la capa de entrada es un mero canal pasivo cuya función exclusiva es la de recibir e introducir los estímulos externos al sistema.  \n  \nPor lo tanto, el número de células que conformarán esta capa de entrada no se escoge por capricho ni tiene por qué coincidir con las dimensiones de salida, sino que está estricta e inexorablemente determinado por el número de variables, características (features) o dimensiones de los patrones del problema específico que se pretende resolver o clasificar.",
    "correct": 1,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "La función de transferencia de las neuronas de un perceptrón multicapa",
    "options": [
      "a) Son solamente lineales",
      "b) Son solamente umbrales",
      "c) Son solamente de tipo sigmoidal",
      "d) Son solamente de tipo logarítmico",
      "e) Todas son falsas"
    ],
    "justification": "Para que un perceptrón multicapa sea capaz de superar las deficiencias del perceptrón simple, extraiga características complejas y actúe verdaderamente como un \"aproximador universal\", es matemáticamente indispensable que las funciones de transferencia que operen en sus capas ocultas incorporen no linealidad (tales como funciones de tipo sigmoidal o tangente hiperbólica). Sin embargo, afirmar que \"solamente\" pueden ser de un tipo específico es falso, debido a que la arquitectura permite combinar de manera muy flexible diferentes funciones de activación dentro del mismo sistema.  \n  \nPor ejemplo, en los problemas de regresión continua es una práctica estándar y óptima incorporar funciones no lineales en las capas ocultas y una función puramente lineal en la capa de salida.",
    "correct": 4,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "Si a un perceptrón multicapa entrenado se le presenta un patrón en una zona donde no había patrones de entrenamiento...",
    "options": [
      "a) Dará error en su funcionamiento",
      "b) Dará una salida de 0 siempre",
      "c) Dará una salida de -1 siempre",
      "d) Dará una salida de 1 siempre",
      "e) Dará una salida arbitraria e imprevisible"
    ],
    "justification": "El objetivo supremo del aprendizaje en una Red Neuronal no es memorizar, sino adquirir la capacidad de generalizar de forma robusta ante patrones que jamás ha \"visto\". Cuando al perceptrón se le introduce un patrón de entrada que recae en un área del espacio de características que permanecía vacía y carente por completo de instancias durante la fase de entrenamiento, la red no cuenta con referencias, topología ni información estadística para trazar sus hiperplanos de decisión en esa zona ciega.  \n  \nEn consecuencia, el sistema intentará extrapolar la respuesta de forma espuria basándose en fronteras lejanas aprendidas para otros datos, lo que irremediablemente desembocará en que se comporte mal y devuelva una salida completamente arbitraria e imprevisible.",
    "correct": 4,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "Entrenar una RNA mediante un algoritmo de entrenamiento basado en el gradiente descendente tiene el problema de que",
    "options": [
      "a) Nunca va a encontrar el mínimo global.",
      "b) Al acercarse a un mínimo, se va a oscilar de un lado a otro, sin lograr pararse en él.",
      "c) Se va a acercar a un mínimo con incrementos muy pequeños.",
      "d) Es posible que se quede parado en algún mínimo local.",
      "e) Va a necesitar un número muy alto de ciclos para alcanzar un error aceptable."
    ],
    "justification": "En las técnicas de entrenamiento supervisado fundamentadas en el descenso de gradiente (como el backpropagation clásico), el algoritmo busca minimizar la función de error partiendo de un punto aleatorio y \"resbalando\" por la superficie matemática guiándose por la pendiente de la tangente.  \n  \nSin embargo, el gran inconveniente intrínseco a este método analítico es su susceptibilidad topológica: una vez que la red alcanza un punto de la superficie donde el gradiente es 0 (un mínimo), el aprendizaje cesa de inmediato, sin que el modelo disponga de la visión global necesaria para discernir si realmente ha encontrado la solución óptima absoluta (mínimo global) o si ha quedado fatalmente atrapado en un pozo secundario (mínimo local) donde la tasa de error sigue siendo inaceptablemente alta.",
    "correct": 3,
    "category": "neurona",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "Para valorar cómo de bien está entrenada una RNA (y lo bien que generaliza), es necesario mirar el error",
    "options": [
      "a) En el conjunto de entrenamiento",
      "b) En el conjunto de validación",
      "c) En el conjunto de test",
      "d) En el ciclo de entrenamiento con menor gradiente",
      "e) En el ciclo de entrenamiento con menor error de entrenamiento"
    ],
    "justification": "Para garantizar el rigor científico y evitar que la Red Neuronal Artificial haya memorizado espuriamente los datos o su ruido (sobreentrenamiento), el proceso debe dividirse en tres conjuntos de patrones.  \n  \nEl conjunto de entrenamiento guía los pesos y el conjunto de validación supervisa y detiene el aprendizaje; no obstante, como ambos \"intervienen\" o influyen en las decisiones arquitectónicas, no son objetivos.  \n  \nLa verdadera y única manera de comprobar cómo de bien entrenada está la máquina y medir fielmente su capacidad de generalización (es decir, cómo se comporta frente a la incertidumbre del mundo real) consiste en procesar y analizar el nivel de error sobre un conjunto de test estricta y absolutamente virgen, que bajo ninguna circunstancia ha intervenido ni en el ajuste de pesos ni en la parada temprana del algoritmo.",
    "correct": 2,
    "category": "neurona",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En la técnica de parada temprana, una vez finalizado el proceso de entrenamiento, la RNA que se devuelve tiene unos pesos que son",
    "options": [
      "a) siempre los del último ciclo de entrenamiento realizado.",
      "b) siempre correspondientes al ciclo con menor error de entrenamiento.",
      "c) correspondientes al ciclo con menor error de validación.",
      "d) correspondientes al ciclo con menor error de test.",
      "e) correspondientes al ciclo con menor gradiente."
    ],
    "justification": "El método de parada temprana surge como la solución técnica más robusta para evitar el sobreajuste (over-fitting) cuando un modelo es excesivamente complejo o se somete a demasiados ciclos de computación.  \n  \nDurante este proceso, a la vez que la red entrena y disminuye su error interno, un monitor evalúa el desempeño paralelo con un subconjunto de datos disjunto (validación). La estrategia consiste en dejar que la red entrene exhaustivamente pero memorizando su mejor estado histórico; de modo que, si el error en validación comienza a divergir (empeorar) por causa de que el sistema empieza a memorizar el ruido, el algoritmo retrocederá en el tiempo y se forzará al sistema a devolver única y exclusivamente la topología congelada y los pesos exactos de aquel ciclo que arrojó el menor error de validación, y no los de su iteración final o última.",
    "correct": 2,
    "category": "neurona",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "Para usar una RNA para resolver un problema de clasificación con dos clases, sin posibilidad de que un patrón no pertenezca a alguna de las dos clases, el número de neuronas de salida que hay que usar, según lo visto en las clases de teoría, es:",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4",
      "e) 5"
    ],
    "justification": "En una clasificación estrictamente binaria o dicotómica (o eres de la clase A, o eres de la clase B, sin espacio para ambigüedades), basta con colocar una única neurona en la capa de salida.  \n  \nSi su función de transferencia (ej. escalón o sigmoide) devuelve un valor bajo (0), representa a la primera clase; si devuelve un valor alto (1), representa a la segunda.",
    "correct": 0,
    "category": "feedforward",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En una red SOM, la capa de competición está compuesta por:",
    "options": [
      "a) Neuronas que generan la salida supervisada.",
      "b) Neuronas conectadas entre sí por enlaces recursivos.",
      "c) Neuronas que compiten por representar el patrón de entrada.",
      "d) Neuronas que codifican el error de la red.",
      "e) Todas son correctas."
    ],
    "justification": "Como su propio paradigma indica, el aprendizaje en los mapas autoorganizativos es no supervisado y competitivo.  \n  \nCuando un vector de datos entra en la red, las neuronas de la capa de salida calculan su distancia euclídea hacia ese dato y libran una competición matemática.  \n  \nLa más cercana se proclama vencedora (BMU) y gana el derecho exclusivo de actualizar sus pesos y los de sus vecinas.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Qué mide el error de cuantización medio en una red SOM?",
    "options": [
      "a) La distancia media entre los vectores de entrada y sus neuronas ganadoras (BMU).",
      "b) El número de patrones correctamente clasificados.",
      "c) El número de neuronas entrenadas.",
      "d) La diferencia entre la salida deseada y la obtenida.",
      "e) El grado de vecindad entre neuronas."
    ],
    "justification": "Dado que los Mapas Autoorganizativos (SOM) operan en el campo del aprendizaje automático \"no supervisado\", carecen por completo de etiquetas de salida deseada para el vector, lo que imposibilita matemáticamente el uso del clásico Error Cuadrático Medio.  \n  \nComo alternativa de validación en este paradigma, se utiliza el Error de Cuantización.  \n  \nEste parámetro funciona como una medida de adaptación geométrica que evalúa cuán fiel es el mapa resultante analizando todos los patrones y sumando la distancia matemática existente entre cada uno de los vectores reales de entrada procesados y sus respectivos prototipos seleccionados por similitud en la matriz, esto es, sus correspondientes unidades ganadoras o BMUs (Best Matching Units).",
    "correct": 0,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En una red SOM, la neurona ganadora es aquella que:",
    "options": [
      "a) Tiene el peso con mayor valor.",
      "b) Tiene la mayor activación en la capa de entrada.",
      "c) Es más cercana al patrón de entrada según una medida de distancia.",
      "d) Ha sido activada más veces durante el entrenamiento.",
      "e) Tiene mayor número de conexiones sinápticas."
    ],
    "justification": "La esencia del modelado espacial de Teuvo Kohonen es el aprendizaje competitivo puro.  \n  \nEn la fase de entrenamiento, cada vez que la capa de entrada estimula al sistema con un vector u objeto analítico nuevo, la totalidad de las neuronas que componen la capa de competición paralela o malla SOM ejecutan simultáneamente cálculos de distancia (típicamente Euclídea). Tras este cálculo de similitud, la neurona de salida que alcance la menor distancia geométrica o matemática con los valores dimensionales del citado patrón de entrada será coronada unívocamente como la célula ganadora o BMU. Esta condición de victoria es la que le otorgará el derecho exclusivo a actualizar sus pesos analíticos y arrastrar topológicamente a las células adyacentes de su vecindario local.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Qué función se utiliza habitualmente para determinar la similitud entre una neurona y un patrón de entrada en una SOM?",
    "options": [
      "a) Distancia de Manhattan",
      "b) Producto escalar",
      "c) Distancia Euclídea",
      "d) Entropía cruzada",
      "e) Función sigmoidal"
    ],
    "justification": "La métrica estándar implementada en el motor geométrico de las redes SOM para medir cuán alejado o similar es el vector de pesos de una neurona frente al vector ambiental de entrada, es la fórmula de la distancia euclídea clásica.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Cuál de los siguientes es un problema común de las redes SOM?",
    "options": [
      "a) No permiten reducción de dimensionalidad.",
      "b) Siempre requieren entrenamiento supervisado.",
      "c) Algunas neuronas pueden no ser entrenadas si están alejadas del espacio de entrada.",
      "d) No pueden representar relaciones topológicas.",
      "e) No necesitan inicialización de pesos."
    ],
    "justification": "Dado que un mapa SOM despliega una cuadrícula de tamaño y topología fijos desde el inicio, si los pesos aleatorios iniciales de algunas neuronas caen en un lugar muy remoto respecto a donde se agrupan los datos reales, y el radio de vecindad se encoge rápidamente, dichas neuronas nunca llegarán a ganar la competición.  \n  \nQuedan como \"neuronas muertas\" o desperdiciadas, un defecto que arquitecturas posteriores como las GNG solucionaron.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "SOM",
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En una red SOM, ¿qué ocurre con el tamaño del vecindario a lo largo del entrenamiento?",
    "options": [
      "a) Permanece constante.",
      "b) Aumenta progresivamente.",
      "c) Disminuye con el tiempo.",
      "d) Se elimina tras la fase de aprendizaje.",
      "e) Se calcula de forma aleatoria."
    ],
    "justification": "Para garantizar la estabilidad del mapa, el entrenamiento se divide en fases.  \n  \nEn la fase inicial de ordenación, el radio de vecindad es muy amplio para organizar la topología globalmente.  \n  \nSin embargo, conforme avanza el tiempo (fase de convergencia), el tamaño de este vecindario se encoge de manera progresiva y asintótica, permitiendo así que la red realice ajustes finos y precisos en sus prototipos sin desestabilizar a todo el grupo.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "autoorganizacion"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En la fase de operación de una red SOM:",
    "options": [
      "a) Se modifican los pesos de las neuronas.",
      "b) Se entrena la red con nuevos datos.",
      "c) Se categoriza un patrón según la neurona más similar.",
      "d) Se actualiza la topología de la red.",
      "e) No intervienen las neuronas de entrada."
    ],
    "justification": "Una vez finalizada la fase de entrenamiento, la arquitectura de pesos de la red se \"congela\" y entra en su fase operativa o productiva.  \n  \nEn este estado ya no hay aprendizaje ni actualización topológica; la red actúa como un sistema de mapeo pasivo, limitándose a recibir nuevos datos de entrada y proyectarlos o categorizarlos en la neurona vencedora que resulte estadísticamente más cercana.",
    "correct": 2,
    "category": "autoorganizacion",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Qué representa el vector de pesos de una neurona en la capa de competición de una SOM?",
    "options": [
      "a) La tasa de aprendizaje local.",
      "b) El error de representación de dicha neurona.",
      "c) El patrón de entrada más común que ha activado esa neurona.",
      "d) Un prototipo o centroide que representa un grupo de patrones.",
      "e) El número de veces que ha sido ganadora."
    ],
    "justification": "Gracias al empuje del aprendizaje competitivo, las neuronas del mapa acaban desplazándose hacia los núcleos de densidad de la nube de datos.  \n  \nComo resultado, cada vector de pesos encapsula las características medias de esa región, convirtiéndose matemáticamente en un centroide o \"prototipo representativo\" que agrupa a todos los patrones similares de su entorno.",
    "correct": 3,
    "category": "autoorganizacion",
    "tags": [
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Cuál de las siguientes tareas es especialmente adecuada para una red SOM?",
    "options": [
      "a) Predicción de valores numéricos.",
      "b) Agrupamiento y visualización de datos de alta dimensión.",
      "c) Traducción automática de lenguas.",
      "d) Detección de anomalías supervisada.",
      "e) Reconocimiento de voz con salida categórica."
    ],
    "justification": "Las redes Mapas Autoorganizativos, inspiradas en los mapas espaciales de la corteza fisiológica, ostentan como máxima utilidad técnica la reducción de dimensionalidad de datasets indescifrables.  \n  \nSiendo modelos que categorizan datos sin intervención de reglas supervisadas externas, son la opción superlativa y especializada para el análisis de componentes principales, clustering y segmentación (agrupamiento) de conjuntos vectoriales donde subyacen enormes volúmenes de características dimensionales, ya que pueden aplanar estas distribuciones abstractas sobre topologías gráficas bi o tridimensionales preservando la similitud, haciendo posible la visualización de los prototipos generados para el analista humano.",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "BLE/BLR",
      "RNA",
      "Reglas"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Qué diferencia clave tienen los modelos GCS frente a SOM?",
    "options": [
      "a) No utilizan aprendizaje no supervisado.",
      "b) Ajustan dinámicamente la arquitectura durante el entrenamiento.",
      "c) No permiten visualización de datos.",
      "d) Solo funcionan con entradas binarias.",
      "e) No usan distancia euclídea para calcular similitud."
    ],
    "justification": "El talón de Aquiles de los modelos originarios de Kohonen (SOM) siempre ha sido su necesidad de establecer predefinidamente un tamaño y matriz fija y estática de neuronas (su topología rígida) antes de inyectarle los primeros datos, lo que en entornos vacíos da lugar a \"neuronas muertas\" desconectadas de las regiones de utilidad.  \n  \nComo profunda respuesta adaptativa frente a este fallo, surgieron las redes Growing Cell Structures (GCS) y el Gas Neuronal Creciente.  \n  \nSu diferencia crucial y paradigma vertebrador estriba en su asombrosa plasticidad o crecimiento orgánico, que les confiere el poder para insertar (agregar) o eliminar progresiva y dinámicamente neuronas operativas en los hiperplanos durante las fases mismas del entrenamiento, concentrando siempre sus recursos modulares en los nodos que presentan mayor índice de error topológico o cuantizado.",
    "correct": 1,
    "category": "autoorganizacion",
    "tags": [
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "La palabra \"Fitness\" en términos de un Algoritmo Genético es ...",
    "options": [
      "a) Es una forma de intercambiar material genético entre varios individuos de la población",
      "b) Una forma o función de construcción de los individuos para obtener la población",
      "c) Una operación genética que cambia la composición de los descendientes",
      "d) El valor que permite evaluar lo adaptado que está cada individuo de la población para obtener la solución del problema que pretende resolver",
      "e) Es una estrategia de mantener al mejor individuo y copiarlo directamente a la siguiente generación para evitar perder la mejor solución obtenida"
    ],
    "justification": "Dentro del paradigma evolutivo o de selección natural, la función de *Fitness* (aptitud) es el corazón métrico del algoritmo.  \n  \nConsiste en la fórmula matemática que examina a cada cromosoma (individuo) y le asigna una puntuación numérica que refleja directamente la bondad o calidad de su solución frente al problema planteado, dictaminando así sus probabilidades de sobrevivir y reproducirse en la siguiente iteración.",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "¿Cuál de las siguientes es una técnica de mutación en los Algoritmos Genéticos?",
    "options": [
      "a) Uniforme",
      "b) Máscara",
      "c) Intercambio",
      "d) Génesis",
      "e) Punto Flotante"
    ],
    "justification": "En los cimientos de la Computación Evolutiva, las operaciones inspiradas en el darwinismo actúan manipulando los cromosomas (variables) para evadir óptimos locales.  \n  \nOpciones como \"Uniforme\" y \"Máscara\" hacen referencia de manual a los tipos clásicos de operadores de cruce (crossover), que combinan o barajan elementos entre dos progenitores para engendrar individuos en la descendencia.  \n  \nAsimismo, términos como \"Punto Flotante\" definen formas de representación semántica y tipados numéricos (codificación de individuos), mientras que la génesis no es un operador.  \n  \nLa mutación por Intercambio (o Swap Mutation) es por consiguiente una técnica formal y validada en esta rama, de gran uso particular en problemas de optimización estocástica y enumeración, que garantiza el aporte brusco de variabilidad permutiendo o cambiando aleatoriamente la ordenación interna genotípica en el alelo de un solo individuo aislado.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR",
      "RNA"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En Programación Genética,",
    "options": [
      "a) El cromosoma nunca representa la posible solución a las variables del problema",
      "b) Se aplican los operadores de cruce y mutación para invertir la población de cromosomas",
      "c) La forma de representar los individuos es mediante un árbol, siendo la principal diferencia con los Algoritmos Genéticos",
      "d) La forma de codificar los individuos es igual a los Algoritmos Genéticos, cambia la forma de aplicar el cruce y la mutación",
      "e) No existe ninguna técnica en Computación Evolutiva denominada Programación Genética"
    ],
    "justification": "La Programación Genética es una subdisciplina de la Computación Evolutiva que surge como una evolución de los propios algoritmos genéticos clásicos, compartiendo con estos el mismo principio biológico de selección natural.  \n  \nSin embargo, la mayor y principal diferencia arquitectónica entre ambas radica en la forma de codificación de la solución al problema.  \n  \nMientras que en los Algoritmos Genéticos convencionales los individuos o posibles soluciones se estructuran mediante vectores o cadenas planas de variables, en la Programación Genética la representación se realiza unívocamente en forma de árbol sintáctico.  \n  \nEsta topología arbórea es análoga a la manera en que los compiladores analizan los lenguajes, situando funciones/operadores en los nodos internos y los terminales (variables o constantes) en las hojas.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "El procedimiento de combinar el \"Ascenso de colinas\" o \"hill-climbing\" con los Algoritmos Genéticos",
    "options": [
      "a) Es una técnica de búsqueda donde su principal problema es la convergencia prematura",
      "b) Es una técnica de búsqueda aplicada en los algoritmos genéticos donde su principal problema es que no garantiza la obtención del óptimo global",
      "c) Sólo se puede aplicar en programación genética.",
      "d) Está inspirada en los principios de evolución de Lamark para mejorar la convergencia del proceso evolutivo.",
      "e) Es una técnica que realiza una búsqueda aleatoria en el espacio de soluciones hasta encontrar el máximo o mínimo global"
    ],
    "justification": "Los Algoritmos Genéticos son excelentes explorando de forma global el espacio de soluciones, pero tienen deficiencias a la hora de realizar la convergencia final y fina (explotación) hacia el punto óptimo absoluto.  \n  \nPara solventar esta carencia, se suele dotar a los individuos del algoritmo de una técnica de búsqueda u optimización local como el \"escalado o ascenso de colinas\" (hill-climbing). Cuando un individuo \"aprende\" o mejora sus características gracias a esta búsqueda local durante su evaluación, y transmite este nuevo material biológico mejorado a su descendencia en la población, se está emulando directamente la teoría de la evolución de Lamarck, basada históricamente en la \"herencia de los caracteres adquiridos\". Esta hibridación (conocida como aprendizaje lamarckiano o algoritmos meméticos) mejora dramáticamente la velocidad y convergencia del proceso evolutivo.",
    "correct": 3,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En un algoritmo genético, ¿qué nombre recibe el proceso por el cual el mejor individuo de la población recibe una fase de ajuste local y es insertado de esa manera en la población?",
    "options": [
      "a) Seeding",
      "b) Elitismo",
      "c) Aprendizaje lamarckiano",
      "d) Steady-state",
      "e) Hill-climbing"
    ],
    "justification": "En directa correlación con los principios expuestos en la pregunta anterior, el darwinismo estricto postula que las experiencias o mejoras locales que sufre un individuo durante su vida (fenotipo) no alteran sus genes y, por lo tanto, no se heredan.  \n  \nSin embargo, en Computación Evolutiva, si decidimos aplicar un ajuste local u optimización (por ejemplo, hill-climbing) a un individuo particular (típicamente el mejor o los mejores) para perfeccionarlo, y a continuación alteramos explícitamente su genotipo y es insertado de esa manera mejorada en la población para que transmita dichas virtudes, estamos aplicando formalmente el Aprendizaje Lamarckiano.  \n  \nSi este aprendizaje no se codificara de vuelta en el genoma, se denominaría efecto Baldwin, pero al ser insertado tal cual, se cataloga rigurosamente como lamarckiano.",
    "correct": 2,
    "category": "evolutiva",
    "tags": [
      "Genéticos"
    ],
    "trap": false
  },
  {
    "source": "examen_mayo_2025",
    "question": "En una población de 40 individuos, se aplica una tasa de cruce del 50 %, una tasa de mutación del 10 %, y se conserva un 20 % de los mejores individuos mediante elitismo.  \n  \n¿Cuál de las siguientes combinaciones es correcta para cada generación?",
    "options": [
      "a) 20 individuos por cruce, 4 por mutación, 8 copiados sin cambios",
      "b) 20 individuos por cruce, 2 por mutación, 6 copiados sin cambios",
      "c) 18 individuos por cruce, 4 por mutación, 8 copiados sin cambios",
      "d) 16 individuos por cruce, 4 por mutación, 10 copiados sin cambios",
      "e) 20 individuos por cruce, 6 por mutación, 6 copiados sin cambios"
    ],
    "justification": "Para configurar adecuadamente la transición de las poblaciones en un Algoritmo Genético, los operadores de cruce, mutación y elitismo se manejan a nivel paramétrico indicando fracciones estadísticas.  \n  \nEn este escenario con una población (N) de 40 individuos, los cálculos matemáticos para deducir el número de cromosomas involucrados en cada fase son los siguientes:  \nCruce (recombinación): Una tasa del 50 % implica que la mitad exacta de la población se someterá al cruce. 40×0.50=20 individuos formarán la descendencia por este método.  \nMutación: Una tasa o probabilidad del 10 % estipula que la décima parte de la población se verá afectada por modificaciones en sus genes (introducción de variabilidad). 40×0.10=4 individuos.  \nElitismo: Finalmente, al establecer que se conserva un 20 % de los mejores, estamos obligando al algoritmo a garantizar la preservación inalterada de la élite de la generación anterior (para no perder la mejor solución). 40×0.20=8 individuos que serán copiados directamente sin cambios a la siguiente generación.  \n  \nPor tanto, las cifras 20, 4 y 8 corresponden unívocamente a los postulados matemáticos de la opción A.",
    "correct": 0,
    "category": "evolutiva",
    "tags": [
      "Genéticos",
      "BLE/BLR"
    ],
    "trap": false
  }
];
