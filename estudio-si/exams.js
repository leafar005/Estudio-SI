const EXAM_CATEGORIES = [
  {
    "id": "examen_julio_2025",
    "name": "Examen SI Julio 2025",
    "icon": "\ud83d\udcc4",
    "part": "examenes"
  },
  {
    "id": "examen_2024",
    "name": "Examen SI 2024",
    "icon": "\ud83d\udcc4",
    "part": "examenes"
  },
  {
    "id": "examen_2023",
    "name": "Examen SI 2023",
    "icon": "\ud83d\udcc4",
    "part": "examenes"
  },
  {
    "id": "examen_junio_2026",
    "name": "EXAMEN SI Junio 2026",
    "icon": "\ud83d\udcc4",
    "part": "examenes"
  },
  {
    "id": "examen_mayo_2025",
    "name": "Examen SI Mayo 2025",
    "icon": "\ud83d\udcc4",
    "part": "examenes"
  }
];
const EXAM_QUESTIONS = [
  {
    "source": "examen_julio_2025",
    "question": "Como modelo de representaci\u00f3n del conocimiento, las reglas de producci\u00f3n...<br>",
    "options": [
      "a) No suelen almacenar conocimiento heur\u00edstico.",
      "b) Deben combinarse para poder formar unidades completas de razonamiento.",
      "c) Siempre involucran condiciones y acciones expl\u00edcitas.",
      "d) Ninguna de las anteriores es correcta."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>- La caracter\u00edstica definitoria y estructural de las reglas de producci\u00f3n (como modelo procedimental) es precisamente que se organizan siempre en una arquitectura expl\u00edcita de tres partes: un **IF** (que representa la condici\u00f3n o premisa expl\u00edcita), un **THEN** (que representa la acci\u00f3n o conclusi\u00f3n expl\u00edcita) y, opcionalmente, un **ELSE** (alternativa). Por tanto, su dise\u00f1o siempre requiere especificar expl\u00edcitamente qu\u00e9 condici\u00f3n debe darse y qu\u00e9 acci\u00f3n o conclusi\u00f3n desencadena.<br>- **Por qu\u00e9 la b) es FALSA:** La teor\u00eda establece como una de las grandes ventajas de las reglas de producci\u00f3n su alta modularidad, afirmando literalmente que **\"Cada regla constituye una unidad completa de razonamiento\"** por s\u00ed sola. Por lo tanto, es falso afirmar que _necesitan_ combinarse con otras para formar una unidad completa de razonamiento, ya que son piezas l\u00f3gicas independientes.<br>- **Por qu\u00e9 la a) es FALSA:** Es exactamente al rev\u00e9s. Entre las ventajas fundamentales de los m\u00e9todos procedimentales y las reglas de producci\u00f3n se cita textualmente que **\"incorporan de forma natural conocimiento heur\u00edstico\"** y permiten almacenar saberes muy espec\u00edficos derivados de la experiencia.<br>",
    "correct": 2,
    "category": "representacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "Cuando una regla se activa, \u00bfde qu\u00e9 depende su ejecuci\u00f3n?<br>",
    "options": [
      "a) De la estrategia de resoluci\u00f3n de conflictos.",
      "b) Del contenido de la memoria activa.",
      "c) De las metas establecidas como hip\u00f3tesis de trabajo.",
      "d) De todas las anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>En el ciclo de funcionamiento de un sistema de producci\u00f3n, el \"contenido de la memoria activa\" determina qu\u00e9 reglas se activan (fase de emparejamiento o _matching_), ya que eval\u00faa qu\u00e9 condiciones se cumplen en ese instante. Sin embargo, una vez que el sistema tiene un conjunto de reglas activadas (conjunto conflicto), la decisi\u00f3n final de cu\u00e1l de ellas se ejecuta (fase de acci\u00f3n) depende en exclusiva de la estrategia de \"resoluci\u00f3n de conflictos\" dictaminada por el motor de inferencias (por ejemplo, orden l\u00e9xico, mayor especificidad o prioridad en el tiempo).<br>",
    "correct": 0,
    "category": "representacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "Los agentes basados en metas...<br>",
    "options": [
      "a) Basan su comportamiento en reflejos al estado del mundo.",
      "b) Mantienen un conocimiento interno del mundo y las consecuencias de sus acciones.",
      "c) Consideran la bondad de los estados para alcanzar los estados finales.",
      "d) Todas son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Dentro de las arquitecturas cl\u00e1sicas de agentes inteligentes, los agentes basados en metas no solo operan respondiendo de forma refleja al entorno (eso es propio de agentes reactivos simples). Necesitan llevar un registro del estado interno actual del mundo, combinarlo con un modelo de c\u00f3mo sus acciones cambian ese entorno (las consecuencias) y utilizar informaci\u00f3n sobre su \"meta\" u objetivo para planificar qu\u00e9 secuencias de acciones les permitir\u00e1n llegar al estado deseado. No cuantifican la \"bondad\" comparativa de las metas (eso corresponde a los agentes basados en utilidad).<br>",
    "correct": 1,
    "category": "introduccion"
  },
  {
    "source": "examen_julio_2025",
    "question": "Sea un dominio con tres manifestaciones posibles $\\{M(1), M(2), M(3)\\}$ y dos interpretaciones posibles $\\{I(1), I(2)\\}$. Desde una perspectiva categ\u00f3rica, y dadas las reglas del dominio:<br>> R1: $M(1) \\lor M(2) \\lor M(3) \\implies I(1) \\lor I(2)$<br>><br>> R2: $I(1) \\implies \\neg M(1) \\land M(2)$<br>><br>> R3: $I(2) \\land \\neg I(1) \\implies M(1) \\land M(3)$<br>\u00bfCu\u00e1ntos posibles conjuntos manifestaci\u00f3n-interpretaci\u00f3n contiene la Base L\u00f3gica Reducida?<br>",
    "options": [
      "a) 7",
      "b) 32",
      "c) 16",
      "d) 11"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>La Base L\u00f3gica Expandida (BLE) contiene todas las combinaciones posibles de variables, que son $2^5 = 32$ complejos. Para obtener la Base L\u00f3gica Reducida (BLR), aplicamos las restricciones que dictan las reglas, eliminando los complejos absurdos:<br><br>- **R2 exige que:** Si $I(1) = 1$, entonces obligatoriamente $M(1) = 0$ y $M(2) = 1$. Esto elimina cualquier combinaci\u00f3n donde $I(1)=1$ y no se cumplan esos valores. De los 16 casos iniciales donde $I(1)=1$, nos quedamos solo con **4 casos v\u00e1lidos** (ya que solo var\u00edan $I(2)$ y $M(3)$, dando $2 \\times 2 = 4$).<br><br>- **R3 exige que:** Si $I(2)=1$ e $I(1)=0$, entonces obligatoriamente $M(1)=1$ y $M(3)=1$. De los 8 casos iniciales con estas condiciones, nos quedamos solo con los **2 casos v\u00e1lidos** donde $M(2)$ vale 0 o 1.<br><br>- **R1 exige que:** Si existe alguna manifestaci\u00f3n activa, debe existir alguna interpretaci\u00f3n. Nos quedan por evaluar los casos donde $I(1)=0$ e $I(2)=0$. Si ambas interpretaciones son $0$, ninguna manifestaci\u00f3n puede ser $1$. Esto nos deja con **1 \u00fanico caso v\u00e1lido**: todos los valores a 0.<br><br><br>Sumando los complejos v\u00e1lidos: $4 + 2 + 1 = 7$ conjuntos posibles en la BLR.<br>",
    "correct": 0,
    "category": "razonamiento"
  },
  {
    "source": "examen_julio_2025",
    "question": "Asumiendo $M(1)$ verdadero, la soluci\u00f3n ser\u00e1...<br>",
    "options": [
      "a) $I(1) \\land I(2)$",
      "b) $I(1) \\land \\neg I(2)$",
      "c) Ambas las anteriores",
      "d) Ninguna de las anteriores"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Del c\u00e1lculo anterior, sabemos que si $I(1)$ es verdadero, $M(1)$ es forzosamente falso (por la regla R2). Es decir, en la BLR no existe ning\u00fan caso v\u00e1lido en el que $I(1)$ y $M(1)$ sean verdaderos al mismo tiempo.<br><br>Si observamos los 7 casos de la BLR elaborados en la pregunta anterior, los \u00fanicos donde $M(1)$ es verdadero son aquellos 2 casos derivados de la regla R3, y en ambos escenarios las interpretaciones toman el valor de $I(1)=0$ e $I(2)=1$. Por tanto, la soluci\u00f3n que se inferir\u00eda al ser cierta $M(1)$ es estrictamente $\\neg I(1) \\land I(2)$. Al no aparecer esta expresi\u00f3n exacta en las opciones a) y b), la correcta es la d).<br>",
    "correct": 3,
    "category": "razonamiento"
  },
  {
    "source": "examen_julio_2025",
    "question": "Partiendo del problema original, \u00bfqu\u00e9 manifestaci\u00f3n es m\u00e1s probable cuando ambas interpretaciones son verdaderas?<br>",
    "options": [
      "a) $M(1)$",
      "b) $M(2)$",
      "c) $M(3)$",
      "d) Son equiprobables"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Si asumimos que ambas interpretaciones son verdaderas, es decir, ocurre el caso $I(1)=1$ e $I(2)=1$, estaremos circunscritos a los casos derivados de que $I(1)$ es cierto. Seg\u00fan la regla R2 ($I(1) \\implies \\neg M(1) \\land M(2)$), siempre que $I(1)$ se cumple, $M(2)$ debe darse inexcusablemente (probabilidad 1.0) y $M(1)$ jam\u00e1s puede darse (probabilidad 0). $M(3)$ no est\u00e1 restringida por ninguna regla en este subescenario, por lo que su aparici\u00f3n es aleatoria. Por tanto, la manifestaci\u00f3n absolutamente segura (y por ende m\u00e1s probable) bajo estas condiciones es $M(2)$.<br>",
    "correct": 1,
    "category": "razonamiento"
  },
  {
    "source": "examen_julio_2025",
    "question": "La ejecuci\u00f3n de las reglas seleccionadas, en la fase de acci\u00f3n, concluye con...<br>",
    "options": [
      "a) El proceso inferencial",
      "b) La verificaci\u00f3n de si continuar o no el proceso c\u00edclico",
      "c) La actualizaci\u00f3n de la memoria activa y el motor de inferencias",
      "d) Ambas b) y c) son correctas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En los sistemas basados en reglas (sistemas de producci\u00f3n), la arquitectura establece un ciclo que incluye emparejamiento, resoluci\u00f3n de conflictos y ejecuci\u00f3n de acciones. Esta fase final de ejecuci\u00f3n concluye procesando el consecuente de la regla, lo que modifica irrevocablemente los hechos del sistema, es decir, produce la actualizaci\u00f3n de la Memoria Activa introduciendo nuevo conocimiento (hip\u00f3tesis) o alterando el actual.<br>",
    "correct": 2,
    "category": "representacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "Los procedimientos de b\u00fasqueda en profundidad...<br>",
    "options": [
      "a) Demandan m\u00e1s recursos computacionales (en t\u00e9rminos espaciales) que los basados en anchura",
      "b) No son completos en espacios de estados finitos si est\u00e1n basados en grafos",
      "c) Est\u00e1n limitados computacionalmente por el tama\u00f1o del espacio de estados si est\u00e1n basados en \u00e1rboles",
      "d) Ninguna de las anteriores es correcta"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Se descartan una a una:<br><br>- **a) es falsa:** La b\u00fasqueda en profundidad se caracteriza por ser mucho m\u00e1s eficiente en el consumo de memoria espacial $O(b \\cdot m)$ frente a la tremenda explosi\u00f3n de memoria de la b\u00fasqueda en anchura $O(b^d)$.<br><br>- **b) es falsa:** La versi\u00f3n de grafos (que lleva un registro de nodos visitados o cerrados) s\u00ed es completa en espacios de estados finitos porque asegura que el algoritmo no quedar\u00e1 atrapado en bucles de redundancia.<br><br>- **c) es falsa:** En su versi\u00f3n de \u00e1rbol, si existen ciclos en el espacio del problema, la profundidad explorada se vuelve infinita. Por lo tanto, no se encuentra computacionalmente limitada por el tama\u00f1o del espacio, sino por la m\u00e1xima ramificaci\u00f3n c\u00edclica (pudiendo ser infinita y quedarse atrapado).<br><br>",
    "correct": 3,
    "category": "busqueda"
  },
  {
    "source": "examen_julio_2025",
    "question": "El conjunto de complejos manifestaci\u00f3n-interpretaci\u00f3n...<br>",
    "options": [
      "a) Representa el conjunto total de situaciones posibles en el problema",
      "b) No es completo si el conocimiento no es categ\u00f3rico",
      "c) Presenta elementos mutuamente excluyentes",
      "d) Ninguna de las anteriores es correcta"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>En el razonamiento categ\u00f3rico, el conjunto de complejos manifestaci\u00f3n-interpretaci\u00f3n ($M \\times I$) compone la Base L\u00f3gica Expandida (BLE). Este conjunto se formula construyendo y emparejando la exhaustividad completa de los vectores de s\u00edntomas (manifestaciones) y etiolog\u00edas (interpretaciones). Por su mera definici\u00f3n, su construcci\u00f3n captura todas y cada una de las situaciones, escenarios o estados potenciales posibles para un problema antes de aplicar la funci\u00f3n de conocimiento $E$ que filtra los complejos incompatibles.<br>",
    "correct": 0,
    "category": "razonamiento"
  },
  {
    "source": "examen_julio_2025",
    "question": "Se dispone de un sistema de producci\u00f3n sobre un problema dado. En cierto punto, el cliente se da cuenta que la informaci\u00f3n est\u00e1 incompleta, y necesita a\u00f1adir dos reglas m\u00e1s que cubren unos casos espec\u00edficos que no hab\u00eda contemplado anteriormente. \u00bfQu\u00e9 se deber\u00eda de cambiar en el motor de inferencias?<br>",
    "options": [
      "a) Se deben insertar las nuevas reglas",
      "b) Se deben insertar las nuevas reglas y los hechos que sean resultado de dichas reglas",
      "c) Se debe rehacer completamente el sistema de reglas, para adecuarlo a la problem\u00e1tica actual",
      "d) Nada"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Una de las ventajas de los sistemas de producci\u00f3n es su extrema modularidad e independencia. El \"Motor de Inferencias\" es un componente fijo, encargado puramente del sistema de control y evaluaci\u00f3n c\u00edclica. Todo el conocimiento concreto (como las dos reglas nuevas) se almacena y a\u00f1ade de manera exclusiva a la Base de Reglas (Conocimiento). Por tanto, ante un requerimiento de adici\u00f3n de nueva informaci\u00f3n sobre el dominio, el motor de inferencias no experimenta ning\u00fan cambio estructural ni l\u00f3gico.<br>",
    "correct": 3,
    "category": "representacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "Si hablamos de sistemas de producci\u00f3n...<br>",
    "options": [
      "a) La base de conocimientos est\u00e1 formada por la base de reglas y el motor de inferencias",
      "b) Los sistemas dirigidos por los datos son m\u00e1s espec\u00edficos, porque ejecutar\u00e1n todas las reglas disponibles en funci\u00f3n de la informaci\u00f3n introducida",
      "c) La memoria activa almacena todos los cambios de estado de nuestro sistema, de forma que representa siempre nuestro estado actual",
      "d) El motor de inferencias es el responsable de interaccionar con el mundo exterior"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En un sistema de producci\u00f3n cl\u00e1sico, la Memoria Activa act\u00faa como la \"pizarra\" del sistema; su trabajo es albergar puramente los \"hechos\" instant\u00e1neos e ir almacenando cada variaci\u00f3n y nuevo estado detectado tras la fase de acci\u00f3n de las reglas. Esta caracter\u00edstica garantiza que la Memoria Activa mantenga con exactitud una instant\u00e1nea continua y fidedigna del estado actual de ejecuci\u00f3n en todo momento. Se descartan las otras opciones porque el motor de inferencias NO forma parte de la Base de Conocimientos (que es la conjunci\u00f3n de Base de Hechos y Base de Reglas), y porque las interfaces (no el motor) se encargan de la comunicaci\u00f3n con el exterior.<br>",
    "correct": 2,
    "category": "representacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfQu\u00e9 se encuentra en el \"core\" de los principales avances tecnol\u00f3gicos actuales y de los pr\u00f3ximos a\u00f1os?<br>",
    "options": [
      "a) La rama de la inteligencia artificial subsimb\u00f3lica.",
      "b) La rama de la inteligencia artificial simb\u00f3lica.",
      "c) La computaci\u00f3n cu\u00e1ntica.",
      "d) Todas las anteriores.",
      "e) Ninguna de las anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Nos encontramos en la denominada \"tercera primavera de la IA\". Este resurgir masivo y el n\u00facleo tecnol\u00f3gico actual (como el _Deep Learning_, ChatGPT, Visi\u00f3n por Computador, etc.) est\u00e1 impulsado \u00fanica y exclusivamente por el paradigma conexionista o IA subsimb\u00f3lica, alimentado por el fen\u00f3meno del _Big Data_ y la capacidad de computaci\u00f3n en paralelo.<br>",
    "correct": 0,
    "category": "conexionistas"
  },
  {
    "source": "examen_julio_2025",
    "question": "En la evoluci\u00f3n hist\u00f3rica de los sistemas conexionistas, \u00bfcu\u00e1les son precursores biol\u00f3gicos?<br>",
    "options": [
      "a) Donald Hebb.",
      "b) Santiago Ram\u00f3n y Cajal.",
      "c) Warren McCulloch.",
      "d) Todos los anteriores.",
      "e) Ninguno de los anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Ram\u00f3n y Cajal descubri\u00f3 la estructura fundamental del sistema nervioso (la Doctrina de la Neurona); Donald Hebb postul\u00f3 la regla del aprendizaje sin\u00e1ptico (\"una v\u00eda que se usa, se refuerza\"); y Warren McCulloch (junto a Walter Pitts) fue el encargado de trasladar esa biolog\u00eda a un modelo l\u00f3gico-matem\u00e1tico en 1943. Los tres conforman los cimientos biol\u00f3gicos de las redes neuronales.<br>",
    "correct": 3,
    "category": "conexionistas"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfQu\u00e9 pretende la IA como ciencia y como ingenier\u00eda?<br>",
    "options": [
      "a) Conocer c\u00f3mo funcionan los seres inteligentes y qu\u00e9 pueden hacer con la ayuda de computadores.",
      "b) C\u00f3mo hacer que los computadores hagan las cosas que hacen las personas inteligentes.",
      "c) C\u00f3mo superar el R\u00e9gimen de Lovelace.",
      "d) Construir o implementar \"Sistemas Inteligentes\": SCX, SS.EE, ...",
      "e) Todas las anteriores son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>La IA se articula sobre un doble objetivo: como \"Ciencia\" persigue el entendimiento emp\u00edrico de la mente y la superaci\u00f3n del R\u00e9gimen de Lovelace (lograr que una m\u00e1quina origine ideas, no solo que repita c\u00f3digo); y como \"Ingenier\u00eda\" busca la automatizaci\u00f3n pr\u00e1ctica y construcci\u00f3n f\u00edsica de dichos sistemas (Sistemas Conexionistas, Sistemas Expertos, etc.).<br>",
    "correct": 4,
    "category": "conexionistas"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfCaracter\u00edsticas espec\u00edficas de los sistemas inteligentes?<br>",
    "options": [
      "a) Intencionalidad: comportamiento guiado por metas.",
      "b) Incapacidad de conocer y proyectar el \"hoy sostenido\".",
      "c) Ser met\u00f3dico, no innovador.",
      "d) Tener efecto serendipico.",
      "e) Ninguna de las anteriores est\u00e1 relacionada."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>A diferencia de los programas inform\u00e1ticos tradicionales que siguen una serie de algoritmos fijos, los sistemas inteligentes (t\u00edpicamente formulados como Agentes) se caracterizan fundamentalmente por su intencionalidad. Esto significa que perciben su entorno, eval\u00faan un estado interno y toman decisiones ponderando acciones con el objetivo final de lograr y maximizar la satisfacci\u00f3n de una serie de metas u objetivos concretos.<br>",
    "correct": 0,
    "category": "introduccion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfCu\u00e1l es el principal trabajo cient\u00edfico en el que se basa la IA?<br>",
    "options": [
      "a) \"The Nature of Explanation\" (W. Craik).",
      "b) \"Behaviour, purpose and teleology\" (Wiener, Rosenblueth y Bigelow).",
      "c) \"A logical calculus of the ideas immanent in nervous activity\" (McCulloch y Pitts).",
      "d) Todas las anteriores son correctas.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>El nacimiento formal de la inteligencia artificial y de los sistemas conexionistas como disciplina cient\u00edfica no bebe de una \u00fanica fuente, sino de tres pilares multidisciplinares fundamentales de 1943: la propuesta cibern\u00e9tica sobre las m\u00e1quinas teleol\u00f3gicas de Wiener, la capacidad de los sistemas para usar modelos l\u00f3gicos de Craik, y la representaci\u00f3n matem\u00e1tica-booleana de la neurona humana planteada por McCulloch y Pitts.<br>",
    "correct": 3,
    "category": "conexionistas"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfQui\u00e9n acu\u00f1a por primera vez y tal como se entiende hoy la expresi\u00f3n \"Artificial Intelligence\"?<br>",
    "options": [
      "a) John McCarthy.",
      "b) Ada Lovelace.",
      "c) Alan Newell y Herbert Simon.",
      "d) Gottfried Leibniz.",
      "e) Alan Turing."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Fue el inform\u00e1tico John McCarthy quien acu\u00f1\u00f3 oficialmente el t\u00e9rmino \"Inteligencia Artificial\" para bautizar la c\u00e9lebre conferencia \"Proyecto de Investigaci\u00f3n de Verano en Dartmouth sobre Inteligencia Artificial\" de 1956. Esta conferencia uni\u00f3 a las mentes m\u00e1s brillantes del momento (Minsky, Newell, Simon, etc.) y se considera el hito fundacional de la IA moderna.<br>",
    "correct": 0,
    "category": "conexionistas"
  },
  {
    "source": "examen_julio_2025",
    "question": "Al aplicar el gradiente descendente para modificar los pesos de las conexiones de una RNA...<br>",
    "options": [
      "a) Si este es cero, indica que el m\u00ednimo est\u00e1 lejos y es necesario realizar m\u00e1s saltos.",
      "b) Si es alto, se realiza un salto peque\u00f1o en el espacio de b\u00fasqueda.",
      "c) Si es bajo, se realiza un salto grande en el espacio de b\u00fasqueda.",
      "d) Es necesario modificar los pesos en sentido (signo) dictado por el gradiente.",
      "e) Es necesario modificar los pesos en sentido (signo) contrario al dictado por el gradiente."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>El algoritmo del descenso del gradiente (basado en la Regla Delta) busca sistem\u00e1ticamente el punto m\u00e1s bajo (el m\u00ednimo) de la funci\u00f3n de error. Por definici\u00f3n matem\u00e1tica, el gradiente apunta en la direcci\u00f3n de m\u00e1ximo crecimiento de una funci\u00f3n. Por tanto, para reducir el error de la RNA, los pesos siempre deben ajustarse desplaz\u00e1ndose en el sentido u opuesto (rest\u00e1ndolo) al vector gradiente.<br>",
    "correct": 4,
    "category": "neurona"
  },
  {
    "source": "examen_julio_2025",
    "question": "La RNA formada por una \u00fanica neurona, sin capas ocultas, con una funci\u00f3n de transferencia umbral, pensada para resolver problemas de clasificaci\u00f3n, se llama...<br>",
    "options": [
      "a) ADALINE.",
      "b) Backpropagation.",
      "c) Perceptr\u00f3n.",
      "d) Perceptr\u00f3n multicapa.",
      "e) La b) y la d) son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>El Perceptr\u00f3n simple es el modelo conexionista de clasificaci\u00f3n m\u00e1s elemental introducido por Rosenblatt. Dispone \u00fanicamente de capa de entrada y salida (sin ocultas) y utiliza espec\u00edficamente una funci\u00f3n de transferencia de tipo escal\u00f3n o umbral (_hard limiter_). El ADALINE es muy similar, pero se diferencia arquitect\u00f3nicamente en que calcula su regla de aprendizaje bas\u00e1ndose en una funci\u00f3n de transferencia estrictamente lineal, no de umbral.<br>",
    "correct": 2,
    "category": "neurona"
  },
  {
    "source": "examen_julio_2025",
    "question": "Para utilizar un perceptr\u00f3n multicapa para resolver el problema AND...<br>",
    "options": [
      "a) No es necesario utilizar capas ocultas.",
      "b) Es necesario utilizar una capa oculta (con el n\u00famero suficiente de neuronas), y no hacen falta m\u00e1s.",
      "c) Es necesario utilizar dos capas ocultas...",
      "d) Es necesario utilizar tres capas ocultas...",
      "e) Es necesario utilizar m\u00e1s de tres capas ocultas..."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>El operador l\u00f3gico AND (y tambi\u00e9n el OR) constituye un problema que es linealmente separable. Esto significa geom\u00e9tricamente que un hiperplano o l\u00ednea recta es capaz de dividir el espacio de soluciones correctas e incorrectas. Cualquier problema linealmente separable puede ser resuelto por una red de una sola capa (como un Perceptr\u00f3n simple) sin necesidad de requerir arquitecturas multicapa.<br>",
    "correct": 0,
    "category": "neurona"
  },
  {
    "source": "examen_julio_2025",
    "question": "El n\u00famero de neuronas ocultas de un perceptr\u00f3n multicapa...<br>",
    "options": [
      "a) Lo puede fijar el usuario como quiera.",
      "b) Depende del n\u00famero de entradas y salidas del problema a resolver.",
      "c) Debe ser igual al n\u00famero de neuronas de entrada...",
      "d) Debe ser igual al n\u00famero de neuronas de entrada, pero depende del problema...",
      "e) Debe ser igual al n\u00famero de neuronas de salida..."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)** _(Nota: Su valor \u00f3ptimo emp\u00edrico depende directamente de la complejidad del problema a resolver)._<br><br>El n\u00famero de capas y de neuronas en las capas ocultas no est\u00e1 dictaminado matem\u00e1ticamente por las entradas y salidas de la RNA. Constituye un hiperpar\u00e1metro arquitect\u00f3nico que el dise\u00f1ador de la red configura a voluntad. Sin embargo, en la pr\u00e1ctica el usuario debe ajustar ese tama\u00f1o mediante prueba y error en base a la no-linealidad y complejidad del problema, evitando el sobreentrenamiento (si pone demasiadas) o la incapacidad de aprender (si pone demasiadas pocas).<br>",
    "correct": 0,
    "category": "neurona"
  },
  {
    "source": "examen_julio_2025",
    "question": "Si al entrenar una RNA se utiliza una tasa de aprendizaje muy alta...<br>",
    "options": [
      "a) Se acercar\u00e1 al m\u00ednimo con cambios muy peque\u00f1os.",
      "b) Se correr\u00e1 el riesgo de oscilar en torno al m\u00ednimo.",
      "c) El entrenamiento se parar\u00e1 siempre en un m\u00ednimo local.",
      "d) El entrenamiento se parar\u00e1 siempre en un m\u00ednimo global.",
      "e) Se sobreentrenar\u00e1 la red."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>La tasa de aprendizaje ($\\alpha$ o $\\eta$) es el multiplicador escalar que define la longitud o tama\u00f1o del \"paso\" que da el algoritmo de entrenamiento a lo largo del espacio de pesos. Una tasa sumamente peque\u00f1a ralentizar\u00e1 dr\u00e1sticamente el entrenamiento; por el contrario, si es muy alta, la red generar\u00e1 saltos enormes, cruzando de un lado al otro del valle del error repetidamente, lo que provoca oscilaciones ca\u00f3ticas y le impide aterrizar y converger en el fondo del m\u00ednimo de la funci\u00f3n.<br>",
    "correct": 1,
    "category": "neurona"
  },
  {
    "source": "examen_julio_2025",
    "question": "Las neuronas de la capa de entrada de un perceptr\u00f3n multicapa...<br>",
    "options": [
      "a) Aplican la funci\u00f3n de transferencia a las entradas que reciben.",
      "b) Emiten su salida como la suma de las entradas multiplicadas por los pesos.",
      "c) Emiten su salida como el resultado de aplicar la funci\u00f3n de transferencia a la suma de las entradas.",
      "d) Emiten su salida como el resultado de aplicar la funci\u00f3n de transferencia a la suma del bias...",
      "e) Todas son falsas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Por convenci\u00f3n estructural, la capa de entrada de un Perceptr\u00f3n Multicapa no realiza ning\u00fan tipo de computaci\u00f3n, c\u00e1lculo del potencial postsin\u00e1ptico, suma ponderada de pesos o aplicaci\u00f3n de una funci\u00f3n de activaci\u00f3n. Las c\u00e9lulas de entrada operan exclusivamente como meros receptores y transmisores transparentes del patr\u00f3n de entrada del entorno hacia la primera capa oculta.<br>",
    "correct": 4,
    "category": "feedforward"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfC\u00f3mo calcula el algoritmo de backpropagation el error en cada capa oculta?<br>",
    "options": [
      "a) Comparando la salida obtenida y la salida deseada para esa capa oculta.",
      "b) Poni\u00e9ndolo en funci\u00f3n del error calculado en la siguiente capa.",
      "c) No lo calcula, puesto que no es necesario modificar los pesos de las capas ocultas.",
      "d) Comparando el valor de los pesos de esa capa con los de la capa siguiente.",
      "e) Comparando el valor de la tasa de aprendizaje con el gradiente."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Dado que las capas ocultas no disponen de una \"salida deseada\" o patr\u00f3n objetivo que se les pueda comparar (como s\u00ed tiene la capa de salida), el algoritmo _Backpropagation_ (Propagaci\u00f3n hacia atr\u00e1s) resuelve este escollo calculando el gradiente en las neuronas ocultas de forma recursiva a partir del error de la capa inmediatamente posterior, ponderado por el valor de los pesos de conexi\u00f3n entre ellas.<br>",
    "correct": 1,
    "category": "feedforward"
  },
  {
    "source": "examen_julio_2025",
    "question": "En la t\u00e9cnica de parada temprana, para evitar el sobreentrenamiento, es necesario controlar el proceso de entrenamiento mediante un conjunto de...<br>",
    "options": [
      "a) test.",
      "b) entrenamiento.",
      "c) prueba.",
      "d) validaci\u00f3n.",
      "e) aprendizaje."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>La \"parada temprana\" (_early stopping_) es un mecanismo de regularizaci\u00f3n que divide el corpus de datos emp\u00edricos introduciendo un conjunto de validaci\u00f3n. Este set no se usa para ajustar los pesos con el gradiente, sino exclusivamente para monitorear el error al final de cada \u00e9poca. Cuando el error de entrenamiento sigue descendiendo pero el de validaci\u00f3n empieza a crecer, la red est\u00e1 comenzando a \"memorizar\" (sobreentrenamiento) y el entrenamiento debe ser abortado.<br>",
    "correct": 3,
    "category": "neurona"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfC\u00f3mo codificar\u00edas una salida de una RNA categ\u00f3rica, cuyos valores pueden ser \"coche/moto/bicicleta/avi\u00f3n\"?<br>",
    "options": [
      "a) Como 2 valores booleanos, codificando las 4 categor\u00edas como \"00/01/10/11\".",
      "b) No hace falta codificarla, la RNA puede generar esa salida categ\u00f3rica.",
      "c) Como 4 valores booleanos, codificando las 4 categor\u00edas como \"1000/0100/0010/0001\".",
      "d) Como un valor real, que toma 4 valores distintos equiespaciados.",
      "e) La c) y la d) son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La representaci\u00f3n de clases categ\u00f3ricas independientes requiere de un modelo de salida llamado codificaci\u00f3n _One-Hot_. Obligar a la red a responder con un \u00fanico valor real continuo equiespaciado para variables sin un orden de magnitud natural (un avi\u00f3n no \"vale\" matem\u00e1ticamente m\u00e1s que un coche) introducir\u00eda un sesgo espurio de orden, obstaculizando gravemente la capacidad de la RNA para clasificar adecuadamente.<br>",
    "correct": 2,
    "category": "feedforward"
  },
  {
    "source": "examen_julio_2025",
    "question": "La funci\u00f3n de transferencia de las neuronas de una Red de Neuronas Artificiales...<br>",
    "options": [
      "a) Nunca debe ser lineal en la capa de salida.",
      "b) Nunca debe ser logar\u00edtmica sigmoidal en las capas ocultas (si hay).",
      "c) Nunca debe ser tangente sigmoidal hiperb\u00f3lica en las capas ocultas (si hay).",
      "d) Nunca debe ser lineal en las capas ocultas (si hay).",
      "e) Nunca debe ser logar\u00edtmica sigmoidal en la capa de salida."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Si las capas ocultas operan bajo funciones de transferencia estrictamente lineales, toda la arquitectura multicapa perder\u00e1 sus beneficios, ya que algebraicamente, una cascada de transformaciones lineales puede simplificarse siempre a una sola matriz de transformaci\u00f3n equivalente (una sola capa). Esto destruir\u00eda la cualidad de aproximador universal de la red e imposibilitar\u00eda resolver problemas no lineales (como el XOR).<br>",
    "correct": 3,
    "category": "neurona"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfCu\u00e1l es el objetivo principal de las redes SOM en el contexto del aprendizaje no supervisado?<br>",
    "options": [
      "a) Predecir valores futuros a partir de datos hist\u00f3ricos.",
      "b) Clasificar datos con base en etiquetas conocidas.",
      "c) Encontrar estructuras o patrones en los datos sin conocer su categor\u00eda.",
      "d) Corregir errores de clasificaci\u00f3n.",
      "e) Generar nuevas muestras sint\u00e9ticas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Los _Self-Organizing Maps_ (SOM) o Mapas de Kohonen operan bajo un paradigma estrictamente no supervisado. Carecen de un tutor o etiquetas objetivo (_targets_) a reproducir; en su lugar, se alimentan de los datos y ajustan libremente su topolog\u00eda para descubrir distribuciones ocultas, realizar agrupamientos (_clusters_) y abstraer mapas topol\u00f3gicos bas\u00e1ndose puramente en la similitud de las entradas.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfQu\u00e9 funci\u00f3n tiene el par\u00e1metro de vecindad en una red SOM?<br>",
    "options": [
      "a) Controlar el n\u00famero de entradas.",
      "b) Medir el error de cuantizaci\u00f3n.",
      "c) Actualizar tambi\u00e9n las neuronas cercanas a la ganadora.",
      "d) Determinar el n\u00famero de capas de la red.",
      "e) Ajustar la tasa de aprendizaje."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>El n\u00facleo del funcionamiento del aprendizaje competitivo de los SOM es preservar la topolog\u00eda local. Cuando una neurona concreta (_Best Matching Unit_) gana frente a un est\u00edmulo por ser la m\u00e1s cercana matem\u00e1ticamente a \u00e9l, la regla de aprendizaje somete no solo a la ganadora, sino tambi\u00e9n a todas las neuronas que se encuentran en su \"radio de vecindad\" a una adaptaci\u00f3n en sus pesos, garantizando que celdas pr\u00f3ximas codificar\u00e1n caracter\u00edsticas similares.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfQu\u00e9 ocurre con la tasa de aprendizaje ($\\alpha$) durante el entrenamiento de una SOM?<br>",
    "options": [
      "a) Aumenta con cada iteraci\u00f3n.",
      "b) Se mantiene constante.",
      "c) Disminuye progresivamente."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Para que un mapa SOM se estabilice progresivamente y no quede en un estado de fluctuaci\u00f3n perpetua, el algoritmo transita tradicionalmente por una fase inicial de \"ordenaci\u00f3n general topol\u00f3gica\" (con una tasa de aprendizaje y un radio de vecindad grandes) hacia una fase de \"convergencia fina\", donde la tasa de aprendizaje debe decaer y disminuir paulatinamente hasta volverse pr\u00e1cticamente nula.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfQu\u00e9 mide el error de cuantizaci\u00f3n en una SOM?<br>",
    "options": [
      "a) La tasa de aprendizaje \u00f3ptima.",
      "b) La distancia entre los pesos de la BMU y la entrada.",
      "c) El n\u00famero de conexiones no utilizadas.",
      "d) El tiempo de entrenamiento.",
      "e) La salida binaria del clasificador."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>El Error de Cuantizaci\u00f3n (QE) es la medida de calidad est\u00e1ndar en los Mapas Autoorganizativos. Se calcula hallando la distancia media (normalmente la distancia eucl\u00eddea) entre cada vector de datos de entrada y el vector de pesos de su neurona ganadora o BMU (_Best Matching Unit_). Cuanto menor es esta distancia en el conjunto, de forma m\u00e1s precisa estar\u00e1 representando el mapa a los datos originales.<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfCu\u00e1l es el tipo de aprendizaje que utilizan las redes SOM?<br>",
    "options": [
      "a) Supervisado.",
      "b) No supervisado y competitivo.",
      "c) Por refuerzo.",
      "d) Hebbiano supervisado.",
      "e) Supervisado jer\u00e1rquico."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Las redes SOM (Mapas de Kohonen) aprenden sin necesidad de un tutor ni etiquetas de salida objetivo, por lo que su exploraci\u00f3n es puramente **no supervisada**. Adem\u00e1s, utilizan un paradigma **competitivo**: ante cada est\u00edmulo de entrada, las neuronas de la capa de salida \"compiten\" entre s\u00ed para ver cu\u00e1l es la m\u00e1s parecida al dato. Solo la ganadora (y las vecinas dentro de su radio topol\u00f3gico) adquieren el derecho a actualizar sus pesos.<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfCu\u00e1l es la principal utilidad de una red SOM?<br>",
    "options": [
      "a) Traducir idiomas en tiempo real.",
      "b) Clasificaci\u00f3n de im\u00e1genes con etiquetas.",
      "c) Proyecci\u00f3n de datos de alta dimensi\u00f3n a un espacio 2D para visualizaci\u00f3n.",
      "d) Generaci\u00f3n de lenguaje natural.",
      "e) Detecci\u00f3n de intrusos en redes."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La principal aplicaci\u00f3n pr\u00e1ctica de una red SOM es la reducci\u00f3n de dimensionalidad y el descubrimiento de agrupamientos (cl\u00fasteres). Act\u00faan como una herramienta de visualizaci\u00f3n topol\u00f3gica que permite mapear un conjunto de datos de enorme complejidad (vectores con muchas variables o n-dimensiones) y \"aplastarlo\" o proyectarlo sobre un mapa discreto bidimensional (2D) comprensible para el ojo humano, preservando las relaciones topol\u00f3gicas y vecindades originales de los datos.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfQu\u00e9 ventaja presenta GNG sobre SOM?<br>",
    "options": [
      "a) Usa aprendizaje supervisado.",
      "b) Su estructura se adapta din\u00e1micamente y puede eliminar nodos.",
      "c) Solo necesita una capa de entrada.",
      "d) Funciona mejor con datos lineales.",
      "e) Utiliza funciones de activaci\u00f3n sigmoide."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>A diferencia de los SOM, donde la topolog\u00eda y el n\u00famero exacto de neuronas conforman una cuadr\u00edcula o malla r\u00edgida establecida desde antes de iniciar el entrenamiento, las redes GNG (_Growing Neural Gas_) poseen una arquitectura constructiva y din\u00e1mica. Pueden hacer crecer el mapa a\u00f1adiendo nodos en las \u00e1reas de mayor error y, crucialmente, pueden desconectar y **eliminar nodos** (o aristas \"viejas\") que se quedan aislados o resultan in\u00fatiles, actuando como un \"gas\" que se adapta de forma flexible a la forma del espacio de datos.<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfQu\u00e9 problema resuelve GNG respecto a GCS?<br>",
    "options": [
      "a) La dificultad para eliminar neuronas innecesarias.",
      "b) El uso de etiquetas incorrectas.",
      "c) La falta de paralelismo en la ejecuci\u00f3n.",
      "d) El exceso de supervisi\u00f3n.",
      "e) La lentitud en el c\u00e1lculo de distancias."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>El algoritmo GCS (_Growing Cell Structures_) introdujo el crecimiento din\u00e1mico en los mapas topol\u00f3gicos, pero lo hizo forzando a que las neuronas estuvieran conectadas r\u00edgidamente formando estructuras de tri\u00e1ngulos perfectos (s\u00edmplices 2D). Esta restricci\u00f3n geom\u00e9trica provocaba enormes dificultades algor\u00edtmicas a la hora de tener que eliminar neuronas obsoletas, ya que al borrar un nodo se romp\u00eda la red de tri\u00e1ngulos. GNG resolvi\u00f3 este escollo eliminando la restricci\u00f3n de los tri\u00e1ngulos, permitiendo generar o destruir enlaces libremente.<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfQu\u00e9 modelo de red es m\u00e1s adecuado para detectar cambios topol\u00f3gicos en los datos?<br>",
    "options": [
      "a) Red SOM.",
      "b) Perceptr\u00f3n multicapa.",
      "c) Red GNG.",
      "d) Red convolucional simple.",
      "e) Red Hebbiana cl\u00e1sica."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La red GNG (_Growing Neural Gas_) es el modelo m\u00e1s adecuado porque su dise\u00f1o de aristas flexibles le permite mapear cualquier geometr\u00eda, por compleja, ramificada o discontinua que sea. Si la nube de datos cambia su forma topol\u00f3gica con el tiempo, los SOM o GCS sufren intentando doblar sus mallas r\u00edgidas; por el contrario, la red GNG simplemente dejar\u00e1 de actualizar los enlaces viejos (elimin\u00e1ndolos por \"edad\") y generar\u00e1 nodos nuevos en las \u00e1reas activas, rastreando los cambios din\u00e1micos a la perfecci\u00f3n.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfQu\u00e9 caracter\u00edstica distingue al algoritmo GCS frente al SOM cl\u00e1sico?<br>",
    "options": [
      "a) No puede eliminar nodos durante el entrenamiento.",
      "b) Permite a\u00f1adir neuronas seg\u00fan el error acumulado.",
      "c) Funciona \u00fanicamente con etiquetas conocidas.",
      "d) Solo se usa para clasificaci\u00f3n binaria.",
      "e) No necesita una capa de entrada."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>La caracter\u00edstica fundacional del GCS (_Growing Cell Structures_) frente al SOM cl\u00e1sico de Kohonen es su naturaleza evolutiva. Mientras que el SOM exige predefinir de antemano cu\u00e1ntas neuronas (ej. $10 \\times 10$) compondr\u00e1n el mapa y ese n\u00famero permanece inmutable, el GCS comienza con una estructura m\u00ednima (un solo tri\u00e1ngulo) y permite **a\u00f1adir progresivamente nuevas neuronas** insert\u00e1ndolas justo en aquellas regiones topol\u00f3gicas concretas donde la red est\u00e1 acumulando un mayor error de representaci\u00f3n.<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_julio_2025",
    "question": "El concepto de \"sustituci\u00f3n de individuos\" en Algoritmos Gen\u00e9ticos...<br>",
    "options": [
      "a) Se aplica en la estrategia de gesti\u00f3n de poblaci\u00f3n denominada \"Steady-state\".",
      "b) Se aplica siempre combinada con la estrategia elitista.",
      "c) Es una estrategia para sustituir los parecidos en error en la poblaci\u00f3n.",
      "d) Es una estrategia para sustituir los peores individuos de la poblaci\u00f3n.",
      "e) No existe este concepto en Algoritmos Gen\u00e9ticos."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>En el enfoque cl\u00e1sico generacional de la computaci\u00f3n evolutiva, toda la poblaci\u00f3n desaparece en bloque al final del ciclo y es reemplazada \u00edntegramente. El concepto expl\u00edcito de \"sustituci\u00f3n de individuos\" individuales asume importancia central \u00fanicamente en los Algoritmos Gen\u00e9ticos de Estado Estacionario (_Steady-State_), donde en cada ciclo poblacional apenas nacen uno o dos descendientes y el sistema debe elegir matem\u00e1ticamente a qu\u00e9 individuos antiguos eliminar para cederles su espacio vital.<br>",
    "correct": 0,
    "category": "evolutiva"
  },
  {
    "source": "examen_julio_2025",
    "question": "En un Algoritmo Gen\u00e9tico, el t\u00e9rmino \"Generaci\u00f3n\"...<br>",
    "options": [
      "a) Representa cada ciclo de funcionamiento del Algoritmo.",
      "b) En el mecanismo de gesti\u00f3n de poblaci\u00f3n \"Steady-State\", representa el cambio de todos los individuos...",
      "c) Representa seleccionar al mejor individuo de cada poblaci\u00f3n...",
      "d) Es el mecanismo de generaci\u00f3n de la poblaci\u00f3n inicial...",
      "e) No existe este concepto en Algoritmos Gen\u00e9ticos."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Inspirado directamente por las din\u00e1micas del neodarwinismo biol\u00f3gico, una \"generaci\u00f3n\" define una iteraci\u00f3n o bucle completo del motor del algoritmo evolutivo. En este ciclo suceden ordenadamente la evaluaci\u00f3n del _fitness_ en la poblaci\u00f3n vigente, la fase competitiva de selecci\u00f3n, la recombinaci\u00f3n gen\u00e9tica (cruce), la perturbaci\u00f3n aleatoria (mutaci\u00f3n) y finalmente el reemplazo para iniciar un ciclo nuevo con material de un orden de aptitud superior.<br>",
    "correct": 0,
    "category": "evolutiva"
  },
  {
    "source": "examen_julio_2025",
    "question": "En los individuos de un sistema de Programaci\u00f3n Gen\u00e9tica...<br>",
    "options": [
      "a) Los terminales son operadores.",
      "b) No puede haber nunca operadores aritm\u00e9ticos como nodos del \u00e1rbol.",
      "c) Los terminales pueden contener otros nodos e incluso sub\u00e1rboles.",
      "d) La ra\u00edz nunca puede ser un operador.",
      "e) Los terminales pueden ser constantes o variables."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>A diferencia de los Algoritmos Gen\u00e9ticos que usan vectores planos (cadenas de bits o reales), la Programaci\u00f3n Gen\u00e9tica estructura computacionalmente a cada individuo como un \u00e1rbol sint\u00e1ctico (l\u00f3gico/aritm\u00e9tico). En esta topolog\u00eda, los nodos internos representan las funciones operadoras (`+`, `-`, `IF`, `AND`) mientras que las hojas finales o terminales corresponden forzosamente a los valores primitivos de parada: datos variables del problema o constantes escalares.<br>",
    "correct": 4,
    "category": "evolutiva"
  },
  {
    "source": "examen_julio_2025",
    "question": "Los operadores gen\u00e9ticos en Computaci\u00f3n Evolutiva...<br>",
    "options": [
      "a) Son: selecci\u00f3n, cruce, mutaci\u00f3n y generaci\u00f3n.",
      "b) De cruce y mutaci\u00f3n sirven para evolucionar los individuos de la poblaci\u00f3n.",
      "c) Son operaciones que simulan la recombinaci\u00f3n natural... a cada individuo...",
      "d) S\u00f3lo son aplicables sobre individuos de una poblaci\u00f3n que sea siempre homog\u00e9nea.",
      "e) S\u00f3lo son aplicables sobre individuos de una poblaci\u00f3n que sea siempre heterog\u00e9nea."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>El objetivo funcional primario del cruce (entrelazar el material cromos\u00f3mico valioso de dos padres fuertes) y la mutaci\u00f3n (a\u00f1adir peque\u00f1os est\u00edmulos de ruido estoc\u00e1stico para asegurar la exploraci\u00f3n espacial) es generar variaci\u00f3n fenot\u00edpica artificial e inyectar nuevo material \u00fatil. Estas variaciones son el motor del cambio para que la especie (la poblaci\u00f3n) alcance zonas \u00f3ptimas del espacio de b\u00fasqueda evolutivo.<br>",
    "correct": 1,
    "category": "evolutiva"
  },
  {
    "source": "examen_julio_2025",
    "question": "La t\u00e9cnica de Algoritmos Gen\u00e9ticos...<br>",
    "options": [
      "a) No funciona bien cuando existen m\u00faltiples m\u00ednimos locales en el espacio de b\u00fasqueda.",
      "b) Permite resolver problemas en espacios de b\u00fasqueda donde existen m\u00faltiples m\u00ednimos locales.",
      "c) Es una t\u00e9cnica de b\u00fasqueda exhaustiva de soluciones denominada \"t\u00e9cnica determin\u00edstica\".",
      "d) S\u00f3lo permite realizar regresi\u00f3n simb\u00f3lica y b\u00fasqueda de m\u00e1ximos o m\u00ednimos en funciones...",
      "e) No es conveniente utilizarla para resolver problemas no resolubles polinomialmente..."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Las t\u00e9cnicas cl\u00e1sicas de inferencia basada en derivadas num\u00e9ricas sufren del problema inherente de quedar atrapadas inexorablemente en el primer m\u00ednimo local que encuentran. Los Algoritmos Gen\u00e9ticos (A.G.), al poseer un comportamiento estoc\u00e1stico y manipular un enorme enjambre o poblaci\u00f3n de soluciones simult\u00e1neas (b\u00fasqueda multipunto o en paralelo), tienen alt\u00edsimas probabilidades de saltar topol\u00f3gicamente y escapar de dichos sub-\u00f3ptimos para dar con soluciones cuasi-\u00f3ptimas globales a un problema altamente complejo (NP-Hard).<br>",
    "correct": 1,
    "category": "evolutiva"
  },
  {
    "source": "examen_julio_2025",
    "question": "En un Algoritmo Gen\u00e9tico, \u00bfqu\u00e9 significa el t\u00e9rmino \"elitismo\"?<br>",
    "options": [
      "a) No existe este concepto.",
      "b) Solo es aplicable a la programaci\u00f3n gen\u00e9tica.",
      "c) Es la estrategia de mantener los mejores individuos en la poblaci\u00f3n.",
      "d) Se encarga de buscar los mejores individuos y generar una nueva poblaci\u00f3n con ellos.",
      "e) La nueva poblaci\u00f3n es generada a partir exclusivamente del mejor individuo (\u00e9lite)."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>El elitismo es un concepto introducido como red de seguridad te\u00f3rica en los algoritmos evolutivos. Dado que las operaciones de cruce y mutaci\u00f3n operan en base a probabilidades destructivas (es decir, hijos mediocres generados por padres brillantes), el elitismo garantiza mec\u00e1nicamente clonar sin modificaciones al mejor individuo (o individuos) de la generaci\u00f3n $T$ pas\u00e1ndolo directamente a la generaci\u00f3n $T+1$, asegurando que el m\u00e1ximo progreso jam\u00e1s retroceda.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_julio_2025",
    "question": "En un algoritmo gen\u00e9tico:<br>",
    "options": [
      "a) Si la tasa de mutaci\u00f3n es cero, el algoritmo funciona porque el cruce hace que haya evoluci\u00f3n.",
      "b) Si la tasa de cruce es cero, la mutaci\u00f3n hace que todos los individuos acumulen demasiados cambios.",
      "c) Si la tasa de cruce es cero, la mutaci\u00f3n genera variabilidad y el algoritmo de selecci\u00f3n hace que haya evoluci\u00f3n.",
      "d) Si la tasa de cruce y la evoluci\u00f3n son cero, el algoritmo...",
      "e) Es imposible que el cruce y/o mutaci\u00f3n sean cero."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>A pesar de que los Algoritmos Gen\u00e9ticos operan de manera \u00f3ptima fusionando cruce y mutaci\u00f3n, en el hipot\u00e9tico caso arquitect\u00f3nico en el que el operador de recombinaci\u00f3n o cruce se desactivase (tasa de 0%), la mutaci\u00f3n continuar\u00eda de forma residual introduciendo material gen\u00e9tico de experimentaci\u00f3n (variabilidad) y el sistema de selecci\u00f3n se ocupar\u00eda de salvaguardar los hallazgos valiosos. Seguir\u00eda progresando y resolviendo el problema, operando pr\u00e1cticamente como una \"B\u00fasqueda Aleatoria Guiada\" (Estrategia Evolutiva).<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_julio_2025",
    "question": "Atendiendo al siguiente \u00e1rbol que representa a un individuo de programaci\u00f3n gen\u00e9tica, \u00bfcu\u00e1l de las siguientes afirmaciones es cierta?<br><img src=\"../../2026/examenes%20SI/arbol2.png\" style=\"max-width:100%; border-radius:8px; margin: 10px 0;\"><br>",
    "options": [
      "a) El conjunto de componentes terminales es s\u00f3lo `[1, 14]`.",
      "b) Los componentes no terminales son $X$, $Y$, $+$, $-$.",
      "c) La profundidad m\u00e1xima del \u00e1rbol es 3.",
      "d) Se trata de un \u00e1rbol invertido.",
      "e) No puede representar a un individuo porque tiene que ser un vector de variables."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)** _(Asumiendo el gr\u00e1fico de los ex\u00e1menes t\u00edpicos de la asignatura)._<br><br>En la Programaci\u00f3n Gen\u00e9tica, las soluciones se codifican en forma de \u00e1rbol sint\u00e1ctico, por lo que la afirmaci\u00f3n e) es rotundamente falsa. Las afirmaciones a) y b) son falsas por definici\u00f3n te\u00f3rica: las variables de entrada del problema ($X$, $Y$) siempre son nodos hoja o \"terminales\", al igual que las constantes num\u00e9ricas ($1$, $14$); mientras que los operadores aritm\u00e9ticos (`+`, `-`, `*`, `/`) y l\u00f3gicos ocupan inexcusablemente los nodos internos o \"no terminales\". Por eliminaci\u00f3n estructural, la aserci\u00f3n sobre la profundidad m\u00e1xima del \u00e1rbol es la \u00fanica propiedad que describe una caracter\u00edstica v\u00e1lida y cierta de este tipo de genotipo.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_julio_2025",
    "question": "\u00bfCu\u00e1l de los siguientes elementos se utiliza habitualmente para simular organismos en vida artificial?<br>",
    "options": [
      "a) Programaci\u00f3n Gen\u00e9tica.",
      "b) Aut\u00f3matas celulares.",
      "c) Neuronas.",
      "d) Cromosomas.",
      "e) Genes."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Dentro de las t\u00e9cnicas de Vida Artificial (VA) orientadas a crear sistemas computacionales que imitan las propiedades de la biolog\u00eda, los **Aut\u00f3matas Celulares** son la herramienta y modelo cl\u00e1sico por excelencia. El ejemplo m\u00e1s c\u00e9lebre es el _Juego de la Vida_ de John Conway: un aut\u00f3mata celular bidimensional donde cada \"c\u00e9lula\" representa a un organismo, cuyo ciclo de vida (nacimiento, supervivencia o muerte por soledad/sobrepoblaci\u00f3n) evoluciona matem\u00e1ticamente dependiendo exclusivamente del estado de sus vecinas inmediatas.<br>",
    "correct": 1,
    "category": "evolutiva"
  },
  {
    "source": "examen_julio_2025",
    "question": "Una de las principales ventajas de utilizar t\u00e9cnicas de vida artificial para resolver un problema complejo es:<br>",
    "options": [
      "a) Garantizar siempre la consecuci\u00f3n de la mejor soluci\u00f3n.",
      "b) Reducir el n\u00famero de datos necesarios para resolver el problema.",
      "c) Permitir explorar soluciones alternativas a trav\u00e9s de la evoluci\u00f3n.",
      "d) Usar reglas determin\u00edsticas para la resoluci\u00f3n del problema.",
      "e) Eliminar por completo la intervenci\u00f3n humana en el dise\u00f1o de algoritmos que resuelvan el problema."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Las t\u00e9cnicas de vida artificial y computaci\u00f3n evolutiva se enmarcan dentro de los m\u00e9todos heur\u00edsticos o subsimb\u00f3licos. Por su naturaleza emp\u00edrica, **no garantizan** hallar matem\u00e1ticamente el \u00f3ptimo global (descartando la a) y se fundamentan fuertemente en procesos estoc\u00e1sticos o probabil\u00edsticos (descartando la d). Su mayor ventaja competitiva reside en aprovechar el comportamiento emergente y los mecanismos de selecci\u00f3n natural para rastrear grandes espacios de b\u00fasqueda. Esto permite a la poblaci\u00f3n evolucionar y descubrir de forma din\u00e1mica **soluciones alternativas** y topolog\u00edas altamente creativas para problemas intratables o de enorme complejidad, all\u00ed donde los enfoques anal\u00edticos cl\u00e1sicos fracasar\u00edan por quedarse atrapados en m\u00ednimos locales.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "",
    "options": [],
    "justification": "",
    "correct": 0,
    "category": "planificacion"
  },
  {
    "source": "examen_2024",
    "question": "_(Enunciado reconstruido te\u00f3ricamente debido a la ausencia del grafo original)_<br>En un problema que aplica la B\u00fasqueda Avara sobre un grafo, la pregunta final exige calcular la \"longitud del camino\" de la soluci\u00f3n obtenida. \u00bfC\u00f3mo se determina dicha longitud?<br>",
    "options": [
      "a) Sumando los valores de la heur\u00edstica $h(n)$ de los nodos visitados.",
      "b) Calculando la media entre $g(n)$ y $h(n)$.",
      "c) Sumando los costes reales $g(n)$ de la ruta obtenida.",
      "d) Contando simplemente el n\u00famero de nodos visitados, asumiendo coste 1."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En un ejercicio gen\u00e9rico de B\u00fasqueda Avara, la respuesta final ser\u00e1 la suma de los costes reales $g(n)$ de la ruta obtenida. El algoritmo eval\u00faa los nodos de la frontera expandiendo siempre aquel que parece estar m\u00e1s cerca de la meta gui\u00e1ndose en exclusiva por el menor valor de la funci\u00f3n heur\u00edstica $h(n)$. Para resolver este tipo de preguntas visuales, se debe recorrer el grafo ciegamente hacia el nodo adyacente con menor $h(n)$ (ignorando el coste real $g(n)$ durante la toma de decisiones), pero, al llegar a la meta, se suman los costes de los arcos transitados ($g(n)$) para dar la longitud del camino real.<br>",
    "correct": 2,
    "category": "busqueda"
  },
  {
    "source": "examen_2024",
    "question": "Para el mismo grafo del ejercicio anterior: \u00bfel algoritmo A* obtiene una soluci\u00f3n \u00f3ptima?<br>",
    "options": [
      "a) S\u00ed, y es 12.",
      "b) No, la heur\u00edstica no es admisible.",
      "c) No, la heur\u00edstica no es consistente.",
      "d) S\u00ed, pero la heur\u00edstica no es consistente."
    ],
    "justification": "<br>**Opci\u00f3n correcta: Depende de los valores del grafo original**<br><br>Seg\u00fan la teor\u00eda cl\u00e1sica de resoluci\u00f3n de problemas, el algoritmo A* ($f(n) = g(n) + h(n)$) garantiza matem\u00e1ticamente la obtenci\u00f3n de una ruta \u00f3ptima siempre que se cumplan dos condiciones: si operamos sobre un \u00e1rbol de b\u00fasqueda, la heur\u00edstica debe ser admisible (nunca sobreestimar el coste real); pero al operar sobre un grafo (como especifica el bloque de esta pregunta), la heur\u00edstica debe ser obligatoriamente **consistente** (o mon\u00f3tona), cumpliendo que la diferencia de las estimaciones heur\u00edsticas entre dos nodos no supere el coste real del paso entre ellos: $h(n) \\le c(n,a,n') + h(n')$. Si un algoritmo A* sobre un grafo devuelve un camino sub\u00f3ptimo, la justificaci\u00f3n te\u00f3rica es que la heur\u00edstica no es consistente (apuntando a la opci\u00f3n **c** o **d** seg\u00fan el caso espec\u00edfico).<br>",
    "correct": 0,
    "category": "busqueda"
  },
  {
    "source": "examen_2024",
    "question": "A partir de la siguiente tabla de nodos explorados, \u00bfqu\u00e9 tipo de b\u00fasqueda fue utilizada?<br>**Paso 1:** -<br>**Paso 2:** A<br>**Paso 3:** A, B<br>**Paso 4:** A, B, C<br>**Paso 5:** A, B, C, D<br>**Paso 6:** A, B, C, D, E<br>",
    "options": [
      "a) B\u00fasqueda de coste uniforme.",
      "b) B\u00fasqueda en anchura.",
      "c) A*.",
      "d) B\u00fasqueda en profundidad."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b) B\u00fasqueda en anchura.**<br><br>Utiliza una cola **FIFO** (el primero que entra en la frontera, es el primero en salir y explorarse). Esto hace que explore el \u00e1rbol \"por capas<br>horizontales: primero el nivel 0, luego todo el nivel 1, luego todo el nivel 2.<br><br>- **Paso 1:** `-` _(Frontera: [A])_<br>- **Paso 2:** `A` _(Frontera: [B, C])_ -> Explora todo el nivel 0.<br>- **Paso 3:** `A, B` _(Frontera: [C, D, E])_ -> Empieza el nivel 1. Saca a B porque entr\u00f3 antes que C.<br>- **Paso 4:** `A, B, C` _(Frontera: [D, E, F, G])_ -> Termina el nivel 1.<br>- **Paso 5:** `A, B, C, D` _(Frontera: [E, F, G, H, I])_ -> Empieza el nivel 2.<br>- **Paso 6:** `A, B, C, D, E` _(Frontera: ...)_<br><br>Como ves, **esta traza coincide exactamente al mil\u00edmetro con la tabla de tu enunciado**. La b\u00fasqueda en anchura es la que genera una lista alfab\u00e9tica secuencial perfecta si el \u00e1rbol est\u00e1 ordenado as\u00ed.<br><br>2. B\u00fasqueda en Profundidad<br><br>Utiliza una pila **LIFO** (el \u00faltimo que entra a la frontera, es el primero en salir). Esto obliga al algoritmo a ignorar a los hermanos y sumergirse ciegamente por una rama hasta chocar con el fondo.<br><br>- **Paso 1:** `-` _(Frontera: [A])_<br>- **Paso 2:** `A` _(Frontera: [B, C])_<br>- **Paso 3:** `A, B` _(Frontera: [D, E, C])_ -> Al explorar B, descubre D y E. Al ser LIFO, estos se ponen \"encima\" de C.<br>- **Paso 4:** `A, B, D` _(Frontera: [H, I, E, C])_ -> **\u00a1Aqu\u00ed se rompe la secuencia!** El algoritmo ignora a C y explora D (el hijo de B) porque est\u00e1 yendo hacia lo profundo.<br>- **Paso 5:** `A, B, D, H` _(Frontera: ...)_<br><br>En profundidad, jam\u00e1s ver\u00edas los explorados `A, B, C, D, E`, porque eso implicar\u00eda haber explorado a `B` y a su hermano `C` antes de bajar a los hijos, lo cual viola la regla de ir hacia abajo.<br><br>3. B\u00fasqueda de Coste Uniforme y A*<br><br>En estos algoritmos, el orden de los nodos explorados no sigue un patr\u00f3n alfab\u00e9tico ni de capas predecible a simple vista, ya que la frontera **se ordena por n\u00fameros** (por el coste m\u00e1s barato g(n) o por la f\u00f3rmula f(n)).<br><br>- Dependiendo de los costes de las flechas, la tabla de explorados dar\u00eda saltos il\u00f3gicos como: `A`, luego `A, C`, luego `A, C, B`, luego `A, C, B, E`, etc., buscando siempre el camino m\u00e1s barato en cada momento.<br>",
    "correct": 0,
    "category": "busqueda"
  },
  {
    "source": "examen_2024",
    "question": "En un problema en el que estamos utilizando b\u00fasqueda local, tenemos la siguiente funci\u00f3n de coste, en la que estamos buscando el valor m\u00e1ximo:<br><img src=\"../../2026/examenes%20SI/busqlocal.png\" style=\"max-width:100%; border-radius:8px; margin: 10px 0;\"><br>Si estamos en el punto marcado, \u00bfqu\u00e9 deber\u00edamos de hacer?<br>",
    "options": [
      "a) Retroceder a un punto anterior y probar un sentido diferente.",
      "b) Devolver el punto marcado.",
      "c) Aplicar m\u00e1s de un operador antes de realizar el test de meta.",
      "d) Ninguna de las anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>En los algoritmos de B\u00fasqueda Local pura (como la Ascensi\u00f3n de Colinas o _Hill-Climbing_), la m\u00e1quina **carece de memoria hist\u00f3rica** (opera en el nodo actual con una complejidad espacial constante $O(1)$). Su mec\u00e1nica es simple: eval\u00faa sus estados vecinos inmediatos y se mueve hacia el que tenga mayor valor.<br><br>En la gr\u00e1fica, el punto marcado es un **M\u00e1ximo Local**. Al evaluar a sus vecinos, el algoritmo ve que si da un paso a la izquierda, el valor baja; si da un paso a la derecha, el valor tambi\u00e9n baja. Como _ning\u00fan_ vecino mejora su situaci\u00f3n actual, la condici\u00f3n de parada algor\u00edtmica se dispara de inmediato: la m\u00e1quina asume que ha llegado a la cima absoluta del problema, **se detiene y devuelve el punto marcado** como su soluci\u00f3n final (quedando tr\u00e1gicamente atascada sin encontrar el m\u00e1ximo global que est\u00e1 m\u00e1s a la izquierda).<br><br>**Por qu\u00e9 las dem\u00e1s son falsas:**<br><br>- **La a) es falsa:** Para poder \"retroceder\" (_backtracking_), el algoritmo necesitar\u00eda tener memoria y guardar el camino que ha recorrido (como hace la B\u00fasqueda en Profundidad). La B\u00fasqueda Local est\u00e1 dise\u00f1ada espec\u00edficamente para no guardar caminos, por lo que es f\u00edsicamente incapaz de retroceder.<br><br>- **La c) es falsa:** La b\u00fasqueda local cl\u00e1sica eval\u00faa iterativamente paso a paso aplicando un solo operador para mirar al vecino inmediato. No puede saltarse la ceguera encadenando operadores de golpe.<br>",
    "correct": 1,
    "category": "busqueda"
  },
  {
    "source": "examen_2024",
    "question": "La b\u00fasqueda $A*$...<br>",
    "options": [
      "a) Eval\u00faa cada nodo combinando las funciones $g(n)$ y $h(n)$, e.g. el coste real del mejor camino para alcanzar cada nodo $n$ y el coste estimado del camino menos costoso desde el nodo $n$ a meta.",
      "b) La b\u00fasqueda A* basada en grafo es \u00f3ptima si la heur\u00edstica es admisible.",
      "c) Se comporta como b\u00fasqueda en profundidad si $g$ es incrementada por 1, $h = 0$, y los nodos con la misma $f$ son ordenados de menos a m\u00e1s recientes.",
      "d) Todas son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>La opci\u00f3n a) es la definici\u00f3n exacta de la funci\u00f3n de evaluaci\u00f3n algor\u00edtmica de la B\u00fasqueda A* ($f(n) = g(n) + h(n)$). Las dem\u00e1s opciones son falsas por principios te\u00f3ricos de IA:<br><br>- La opci\u00f3n b) es falsa porque para que A* sea \u00f3ptima en b\u00fasqueda sobre grafos, la heur\u00edstica no solo debe ser admisible, sino **consistente**.<br><br>- La opci\u00f3n c) es falsa porque si $h=0$ y $g$ se incrementa iterativamente, estamos implementando una estructura equivalente a una cola FIFO, lo cual define una B\u00fasqueda en Anchura o Coste Uniforme, no una b\u00fasqueda en profundidad.<br><br>",
    "correct": 0,
    "category": "busqueda"
  },
  {
    "source": "examen_2024",
    "question": "Las funciones heur\u00edsticas...<br>",
    "options": [
      "a) Cuantas m\u00e1s restricciones tengamos en cuenta para su dise\u00f1o, menos precisas ser\u00e1n.",
      "b) Son consideradas admisibles si nunca sobreestiman el coste actual de alcanzar la meta.",
      "c) Si $n$ es el nodo inicial, entonces $h(n) = 0$.",
      "d) Si una heur\u00edstica domina otra ($h_2 \\ge h_1$), A* usando $h_2$ expandir\u00e1 m\u00e1s nodos que usando $h_1$."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>La opci\u00f3n b) describe de manera cl\u00e1sica la definici\u00f3n central de una heur\u00edstica admisible: es de naturaleza optimista y asume que el objetivo est\u00e1 m\u00e1s cerca de lo que realmente est\u00e1, por lo que **nunca sobreestima** el coste real ($h(n) \\le c^*$).<br><br>Las dem\u00e1s opciones contienen errores:<br><br>- La a) es falsa: crear heur\u00edsticas mediante el m\u00e9todo de \"relajaci\u00f3n de problemas\" implica que cuantas _menos_ restricciones tenga el problema abstracto, menos precisa ser\u00e1 la heur\u00edstica; cuantas m\u00e1s contemple (m\u00e1s realista sea), m\u00e1s informada se volver\u00e1.<br><br>- La c) es falsa: la regla estricta es que la funci\u00f3n vale 0 en la meta, no en el nodo inicial ($h(meta) = 0$).<br><br>- La d) es falsa: describe err\u00f3neamente el concepto de dominaci\u00f3n. Si $h_2$ domina a $h_1$ (es decir, $h_2 \\ge h_1$ para todo nodo), $h_2$ guiar\u00e1 mejor la b\u00fasqueda por estar m\u00e1s informada y, por tanto, expandir\u00e1 **menos** nodos que $h_1$, no m\u00e1s.<br><br>",
    "correct": 1,
    "category": "busqueda"
  },
  {
    "source": "examen_2024",
    "question": "Si hablamos de algoritmos de b\u00fasqueda en \u00e1rbol...<br>",
    "options": [
      "a) B\u00fasqueda en amplitud siempre es \u00f3ptima y completa.",
      "b) La b\u00fasqueda de profundidad iterativa debe de ser usada en espacios de b\u00fasqueda donde la profundidad de la soluci\u00f3n sea conocida.",
      "c) La b\u00fasqueda de profundidad limitada es \u00f3ptima, pero no completa.",
      "d) Ninguna es correcta."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Se descartan todas las afirmaciones cl\u00e1sicas por sus trampas te\u00f3ricas:<br><br>- La a) es falsa: la B\u00fasqueda en Amplitud solo es \u00f3ptima si todos los operadores tienen **exactamente el mismo coste** de transici\u00f3n. Si los pasos cuestan distinto, devolver\u00e1 el camino con menos arcos, pero no el m\u00e1s barato.<br><br>- La b) es falsa: la B\u00fasqueda de Profundidad Iterativa fue dise\u00f1ada algor\u00edtmicamente justo para el escenario opuesto; es \u00fatil cuando el espacio de b\u00fasqueda es infinito o inmenso y **no se conoce a priori** la profundidad de la soluci\u00f3n.<br><br>- La c) es falsa: la Profundidad Limitada jam\u00e1s garantiza optimalidad y perder\u00e1 su completitud intr\u00ednsecamente si la meta resulta estar m\u00e1s profunda que el l\u00edmite ($d > l$) preconfigurado por el usuario.<br><br>",
    "correct": 3,
    "category": "busqueda"
  },
  {
    "source": "examen_2024",
    "question": "Se nos pide crear un modelo de representaci\u00f3n del conocimiento para un sistema sobre un nuevo virus. Al haber sido descubierto recientemente, hay muy poca informaci\u00f3n disponible sobre este nuevo virus, pero hay mucha informaci\u00f3n sobre otros virus que se cree que funcionan de manera similar. \u00bfQu\u00e9 modelo de representaci\u00f3n del conocimiento deber\u00eda de ser utilizado?<br>",
    "options": [
      "a) Orientada a objetos.",
      "b) Redes sem\u00e1nticas.",
      "c) Reglas de producci\u00f3n.",
      "d) Marcos (Frames)."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Los **Marcos** (o _Frames_, desarrollados por Marvin Minsky) son la estructura de representaci\u00f3n ideal cuando nos enfrentamos a dominios con informaci\u00f3n incompleta, ya que su n\u00facleo conceptual es el uso de **valores por defecto** (_default values_). Al enfrentarnos a un virus nuevo del que sabemos poco, pero que pertenece a una categor\u00eda conocida (\"virus similares\"), podemos instanciar un \"Marco de Virus\" general. El sistema rellenar\u00e1 autom\u00e1ticamente los \"huecos\" (_slots_) desconocidos del nuevo virus heredando las caracter\u00edsticas t\u00edpicas (valores por defecto) de la clase padre, permiti\u00e9ndonos razonar sobre \u00e9l aunque nuestra informaci\u00f3n inicial sea escasa.<br>",
    "correct": 3,
    "category": "representacion"
  },
  {
    "source": "examen_2024",
    "question": "El algoritmo de _model checking_...<br>",
    "options": [
      "a) Tiene una complejidad que se vuelve inmanejable para sistemas con muchos s\u00edmbolos.",
      "b) Permite verificar si $KB \\models \\alpha$.",
      "c) Puede ser implementado como una exploraci\u00f3n de un \u00e1rbol binario.",
      "d) Todas son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>El _Model Checking_ (Comprobaci\u00f3n de Modelos) eval\u00faa exhaustivamente todas las interpretaciones (modelos) posibles para dictaminar el entra\u00f1amiento l\u00f3gico. Se cumplen las tres premisas:<br><br>- **a es correcta:** Su complejidad espacial/temporal es $O(2^n)$ donde $n$ es el n\u00famero de s\u00edmbolos proposicionales. Para dominios grandes, la explosi\u00f3n combinatoria lo hace computacionalmente intratable.<br><br>- **b es correcta:** Su finalidad fundacional es comprobar algor\u00edtmicamente el entra\u00f1amiento: si para todos los modelos donde la Base de Conocimiento ($KB$) es cierta, la sentencia $\\alpha$ tambi\u00e9n lo es ($KB \\models \\alpha$).<br><br>- **c es correcta:** Para enumerar sistem\u00e1ticamente los modelos, los algoritmos (como TT-Entails) construyen impl\u00edcitamente un \u00e1rbol de b\u00fasqueda binario de profundidad $n$, donde cada nivel asigna `True` o `False` a un s\u00edmbolo.<br><br>",
    "correct": 3,
    "category": "representacion"
  },
  {
    "source": "examen_2024",
    "question": "Hay un sistema de producci\u00f3n en un problema dado. En un punto, el cliente se da cuenta de que la informaci\u00f3n es incompleta y necesita a\u00f1adir dos reglas a mayores para cubrir casos espec\u00edficos que no hab\u00edan sido considerados previamente. \u00bfQu\u00e9 deber\u00edamos de cambiar en el motor de inferencias?<br>",
    "options": [
      "a) Las nuevas reglas deben ser insertadas.",
      "b) Las nuevas reglas y los hechos resultantes de dichas reglas deben ser insertados.",
      "c) El sistema de reglas tendr\u00e1 que ser reconstruido completamente para adaptarlo al problema actual.",
      "d) Nada."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>La esencia arquitect\u00f3nica de un sistema de producci\u00f3n (y de los Sistemas Basados en Conocimiento en general) radica en la estricta **separaci\u00f3n entre el conocimiento y el control**. El Motor de Inferencias es un programa de control gen\u00e9rico (el \"int\u00e9rprete\") que no almacena informaci\u00f3n espec\u00edfica del dominio. Toda nueva heur\u00edstica o l\u00f3gica experta (como a\u00f1adir dos nuevas reglas) se inserta exclusivamente en la **Base de Conocimiento (Base de Reglas)**. Por consiguiente, el c\u00f3digo del Motor de Inferencias permanece inalterado.<br>",
    "correct": 3,
    "category": "representacion"
  },
  {
    "source": "examen_2024",
    "question": "Dado la siguiente base de reglas:<br>> R1: `IF (X AND Y) THEN Z`<br>><br>> R2: `IF (C OR D) THEN G`<br>><br>> R3: `IF (E AND V) THEN H`<br>><br>> R4: `IF (A AND B) THEN C`<br>><br>> R5: `IF (F OR G) THEN X`<br>><br>> R6: `IF (Z AND B) THEN V`<br>><br>> R7: `IF (E AND C) THEN F`<br>Queremos inferir `H` mediante encadenamiento progresivo, y sabiendo que: la primera de las reglas activadas ser\u00e1 ejecutada (si R3 y R4 son activadas, se ejecutar\u00e1 primero R3); y en la memoria activa tenemos `A`, `B`, `D` y `Y`. _(Nota: la digitalizaci\u00f3n indica `?, D y Y`, pero el apunte a mano `ABDY(H)` confirma que la memoria inicial es `{A, B, D, Y}`)._ Entonces:<br>",
    "options": [
      "a) H puede ser inferida, y el n\u00famero de reglas ejecutadas es 4.",
      "b) H puede ser inferida, y el n\u00famero de reglas ejecutadas es 5.",
      "c) H no puede ser inferida, y el n\u00famero de reglas ejecutadas es 4.",
      "d) H no puede ser inferida, y el n\u00famero de reglas ejecutadas es 5."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Traza algor\u00edtmica del encadenamiento progresivo partiendo de la Memoria inicial = `{A, B, D, Y}`:<br><br>1. **Ciclo 1:** > * Reglas emparejadas (Conjunto Conflicto): R2 (condici\u00f3n `D` cumple el `OR`) y R4 (cumple `A AND B`).<br><br>- Resoluci\u00f3n de conflictos: Por orden l\u00e9xico (se asume de arriba abajo seg\u00fan la pista del enunciado \"la primera activada\"), se dispara **R2**.<br><br>- Nuevo hecho: `G`. Memoria actual: `{A, B, D, Y, G}`.<br><br>2. **Ciclo 2:**<br><br>- Conjunto Conflicto: R4 y R5 (cumple `G` en el `OR`).<br><br>- Dispara: **R4**.<br><br>- Nuevo hecho: `C`. Memoria actual: `{A, B, D, Y, G, C}`.<br><br>3. **Ciclo 3:**<br><br>- Conjunto Conflicto: R5 (Nota: R7 requiere `E` que no tenemos).<br><br>- Dispara: **R5**.<br><br>- Nuevo hecho: `X`. Memoria actual: `{A, B, D, Y, G, C, X}`.<br><br>4. **Ciclo 4:**<br><br>- Conjunto Conflicto: R1 (cumple `X AND Y`).<br><br>- Dispara: **R1**.<br><br>- Nuevo hecho: `Z`. Memoria actual: `{A, B, D, Y, G, C, X, Z}`.<br><br>5. **Ciclo 5:**<br><br>- Conjunto Conflicto: R6 (cumple `Z AND B`).<br><br>- Dispara: **R6**.<br><br>- Nuevo hecho: `V`. Memoria actual: `{A, B, D, Y, G, C, X, Z, V}`.<br><br>6. **Ciclo 6:**<br><br>- Llegados a este punto, la regla objetivo es R3, que requiere `E AND V`. Tenemos `V`, pero el hecho `E` no est\u00e1 en la memoria ni existe ninguna regla capaz de inferirlo en todo el sistema. El conjunto conflicto queda vac\u00edo.<br><br>- **Resultado final:** El algoritmo se detiene tras ejecutar **5 reglas** (R2, R4, R5, R1, R6) sin haber logrado inferir la meta `H`.<br><br>",
    "correct": 3,
    "category": "representacion"
  },
  {
    "source": "examen_2024",
    "question": "Si hablamos de sistemas de producci\u00f3n...<br>",
    "options": [
      "a) La base de conocimientos est\u00e1 formada por la base de reglas y el motor de inferencias.",
      "b) Los sistemas dirigidos por los datos son m\u00e1s espec\u00edficos, porque ejecutar\u00e1n todas las reglas disponibles en funci\u00f3n de la informaci\u00f3n introducida.",
      "c) La memoria activa almacena todos los cambios de estado de nuestro sistema, de forma que representa siempre nuestro estado actual.",
      "d) El motor de inferencias es el responsable de interaccionar con el mundo exterior."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La memoria activa o \"pizarra\" tiene como objetivo estructural recoger todo el set de condiciones iniciales (hechos base) y memorizar la modificaci\u00f3n inmediata producida en la fase de acci\u00f3n del ciclo. Al registrar rigurosamente qu\u00e9 hechos se crean, cambian o borran, provee al sistema en todo momento de la \"fotograf\u00eda\" exacta de la realidad con la que emparejar las siguientes reglas.<br>",
    "correct": 2,
    "category": "representacion"
  },
  {
    "source": "examen_2024",
    "question": "La b\u00fasqueda A*...<br>",
    "options": [
      "a) Eval\u00faa los nodos combinando las funciones $g(n)$ y $h(n)$.",
      "b) Basada en grafo es \u00f3ptima si la heur\u00edstica es admisible.",
      "c) Se comporta como anchura si $g$ se incrementa en 1, $h=0$ y los nodos con igual $f$ se ordenan de menos a m\u00e1s reciente.",
      "d) Todas son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>La piedra angular que constituye la b\u00fasqueda A* frente a las ciegas y avaras es su ecuaci\u00f3n de evaluaci\u00f3n unificada $f(n) = g(n) + h(n)$, sumando el pasado certero y el futuro optimista. La opci\u00f3n b) se descarta de lleno porque un A* sobre un \"grafo\" precisa obligatoriamente heur\u00edsticas _consistentes_ para ser \u00f3ptima; la simple admisibilidad aislada en grafos puede generar errores de ruta.<br>",
    "correct": 0,
    "category": "busqueda"
  },
  {
    "source": "examen_2024",
    "question": "Con las reglas categ\u00f3ricas gen\u00e9ricas del dominio ($R1: M(1) \\lor M(2) \\lor M(3) \\implies I(1) \\lor I(2)$, $R2: I(1) \\implies \\neg M(1) \\land M(2)$, y $R3$) y sabiendo que tenemos la **manifestaci\u00f3n ineludible $M(1)$**, \u00bfcu\u00e1l es el conjunto de interpretaciones m\u00e1s probables? Ten en cuenta las siguientes probabilidades:<br>- $p(\\neg I(1) \\land \\neg I(2)) = 0.2$<br>- $p(\\neg I(1) \\land I(2)) = 0.08$<br>- $p(I(1) \\land \\neg I(2)) = 0.34$<br>- $p(I(1) \\land I(2)) = 0.38$<br>",
    "options": [
      "a) $\\neg I(1) \\land \\neg I(2)$",
      "b) $\\neg I(1) \\land I(2)$",
      "c) $I(1) \\land \\neg I(2)$",
      "d) $I(1) \\land I(2)$"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Es una pregunta trampa en la que la estad\u00edstica insertada es irrelevante gracias a las restricciones inquebrantables del modelo categ\u00f3rico (Base L\u00f3gica Reducida). Si M(1) es estrictamente cierto, sabemos por regla (R2:I(1)\u27f9\u00acM(1)\u2227M(2)) que la interpretaci\u00f3n I(1) jam\u00e1s puede ser cierta, pues nos obligar\u00eda a tener \u00acM(1), lo cual contradice el enunciado. Por lo tanto, I(1) es forzosamente **falsa**. En el dominio categ\u00f3rico, para manifestaciones presentes, alguna interpretaci\u00f3n ha de cumplirse (por R1); descartada la 1, la \u00fanica que queda activa obligatoriamente es I(2). Esto nos arroja categ\u00f3ricamente a la respuesta \u00acI(1)\u2227I(2) sin necesidad de apoyarse en la probabilidad bayesiana proporcionada.<br>",
    "correct": 1,
    "category": "razonamiento"
  },
  {
    "source": "examen_2024",
    "question": "En una RNA, el conocimiento est\u00e1 en...<br>",
    "options": [
      "a) La funci\u00f3n de transferencia.",
      "b) Los pesos y bias.",
      "c) Los valores dados por las salidas.",
      "d) El algoritmo de entrenamiento.",
      "e) La topolog\u00eda de la red."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>A diferencia de los modelos de Inteligencia Artificial Simb\u00f3lica (como los sistemas expertos o los \u00e1rboles de b\u00fasqueda), que basan su inferencia en el almacenamiento de reglas o estados de conocimiento expl\u00edcitos, el paradigma conexionista distribuye todo lo aprendido de forma puramente matem\u00e1tica. En las Redes Neuronales Artificiales (RNA), la huella del aprendizaje \u2014la retenci\u00f3n de la generalizaci\u00f3n del problema\u2014 reside intr\u00ednseca y exclusivamente en el valor param\u00e9trico de la intensidad de sus conexiones sin\u00e1pticas (los pesos) y en el de los niveles de activaci\u00f3n base de la c\u00e9lula (los bias).<br>",
    "correct": 1,
    "category": "feedforward"
  },
  {
    "source": "examen_2024",
    "question": "El conjunto de datos utilizado para establecer el valor de los pesos de una RNA es conocido como...<br>",
    "options": [
      "a) Conjunto de prueba.",
      "b) Conjunto de validaci\u00f3n.",
      "c) Conjunto de test.",
      "d) Conjunto de entrenamiento.",
      "e) Conjunto de normalizaci\u00f3n."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Durante el proceso de aprendizaje de una red neuronal, el volumen total de datos emp\u00edricos se divide. El \"conjunto de entrenamiento\" (_Training set_) es el \u00fanico lote de datos que interact\u00faa de manera directa con el algoritmo (por ejemplo, retropropagaci\u00f3n) calculando los gradientes de error para actualizar y asentar matem\u00e1ticamente las matrices de pesos y bias de la red.<br>",
    "correct": 3,
    "category": "feedforward"
  },
  {
    "source": "examen_2024",
    "question": "Cuando el gradiente descendente es utilizado para modificar los pesos de las conexiones de una RNA...<br>",
    "options": [
      "a) Si est\u00e1 cerca de 0, el m\u00ednimo estar\u00e1 lejos y ser\u00e1n necesarios m\u00e1s saltos para encontrarlo.",
      "b) Si toma un valor alto, se realizar\u00e1 un peque\u00f1o salto dentro del espacio de b\u00fasqueda para encontrar el m\u00ednimo.",
      "c) Si toma un valor bajo, se realizar\u00e1 un salto grande en el espacio de b\u00fasqueda para encontrar el m\u00ednimo.",
      "d) Es necesario modificar los pesos en la direcci\u00f3n del gradiente.",
      "e) Es necesario modificar los pesos en la direcci\u00f3n contraria del gradiente."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Matem\u00e1ticamente, el vector gradiente apunta siempre hacia la direcci\u00f3n de mayor o m\u00e1ximo crecimiento de una funci\u00f3n (en este caso, la funci\u00f3n de error). Dado que el objetivo del aprendizaje es buscar el fondo del valle (el error m\u00ednimo), la regla Delta especifica que la actualizaci\u00f3n o salto de los pesos debe realizarse indefectiblemente restando esa pendiente, es decir, movi\u00e9ndose en la direcci\u00f3n o sentido opuesto al gradiente.<br>",
    "correct": 4,
    "category": "neurona"
  },
  {
    "source": "examen_2024",
    "question": "Un Perceptr\u00f3n (sin capas ocultas) puede resolver problemas de clasificaci\u00f3n con una precisi\u00f3n del 100% cuando las muestras...<br>",
    "options": [
      "a) Son clasificadas en s\u00f3lo dos clases y no est\u00e1n entremezcladas.",
      "b) Son clasificadas en s\u00f3lo dos clases y son linealmente separables.",
      "c) Son clasificadas en s\u00f3lo dos clases, aunque est\u00e9n mezcladas, no sean linealmente separables o tengan ruido.",
      "d) Son clasificadas en s\u00f3lo dos clases y no tengan ruido.",
      "e) Son clasificadas en s\u00f3lo dos clases y sigan una distribuci\u00f3n normal."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>El teorema fundamental del Perceptr\u00f3n simple (Rosenblatt) establece que una red sin capas ocultas solo es capaz de trazar un \u00fanico hiperplano (una l\u00ednea recta en 2D) en el espacio de decisi\u00f3n. Por lo tanto, solo puede alcanzar una convergencia total (100% de precisi\u00f3n) si el problema geom\u00e9trico subyacente es **linealmente separable** (es decir, que una l\u00ednea recta baste para separar la Clase A de la Clase B).<br>",
    "correct": 1,
    "category": "feedforward"
  },
  {
    "source": "examen_2024",
    "question": "Para utilizar un perceptr\u00f3n multicapa para resolver el problema EXOR...<br>",
    "options": [
      "a) No es necesario utilizar capas ocultas.",
      "b) Es necesario utilizar una capa oculta (con el n\u00famero suficiente de neuronas), y no hacen falta m\u00e1s capas.",
      "c) Es necesario utilizar dos capas ocultas (con el n\u00famero suficiente de neuronas), y no hacen falta m\u00e1s capas.",
      "d) Es necesario utilizar tres capas ocultas (con el n\u00famero suficiente de neuronas), y no hacen falta m\u00e1s capas.",
      "e) Es necesario utilizar m\u00e1s de tres capas ocultas (con el n\u00famero suficiente de neuronas)."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>El problema de la disyunci\u00f3n exclusiva (XOR o EXOR) es el ejemplo cl\u00e1sico de un problema **no linealmente separable**. Un perceptr\u00f3n simple fracasa al intentar resolverlo porque se requieren al menos dos rectas para aislar las respuestas verdaderas de las falsas en el plano l\u00f3gico. Al a\u00f1adir **una \u00fanica capa oculta** (con al menos dos neuronas ocultas), la red gana la capacidad de combinar dos hiperplanos, resolviendo el problema a la perfecci\u00f3n sin requerir arquitecturas m\u00e1s profundas.<br>",
    "correct": 1,
    "category": "neurona"
  },
  {
    "source": "examen_2024",
    "question": "La funci\u00f3n de transferencia de las neuronas artificiales...<br>",
    "options": [
      "a) Puede ser hiperb\u00f3lica.",
      "b) Puede ser treshold / hard limiter.",
      "c) Puede ser sigmoidal.",
      "d) Puede ser logar\u00edtmica.",
      "e) Todas son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Las Redes Neuronales Artificiales admiten un abanico inmenso de funciones matem\u00e1ticas para procesar el potencial postsin\u00e1ptico. Dependiendo de la topolog\u00eda y el problema, se usan funciones de umbral/escal\u00f3n (_hard limiter_ para el Perceptr\u00f3n simple), sigmoides logar\u00edtmicas o tangentes hiperb\u00f3licas (para capas ocultas o clasificaci\u00f3n probabil\u00edstica), y funciones lineales puras (para salida en regresi\u00f3n). Todas las mencionadas son v\u00e1lidas.<br>",
    "correct": 4,
    "category": "neurona"
  },
  {
    "source": "examen_2024",
    "question": "Si un perceptr\u00f3n multicapa entrenado es alimentado con una instancia en un \u00e1rea donde no hab\u00eda muestras de entrenamiento...<br>",
    "options": [
      "a) Siempre devolver\u00e1 un error.",
      "b) Siempre devolver\u00e1 0 como salida.",
      "c) Siempre devolver\u00e1 -1 como salida.",
      "d) Siempre devolver\u00e1 1 como salida.",
      "e) Devolver\u00e1 una salida arbitraria e impredecible."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Las Redes Neuronales Artificiales son excelentes \"interpoladores\" (pueden generalizar muy bien dentro del dominio envuelto por sus datos de entrenamiento). Sin embargo, son p\u00e9simos \"extrapoladores\". Si se les inyecta un patr\u00f3n de entrada de un \u00e1rea del hiperespacio que jam\u00e1s han explorado (fuera de su rango de entrenamiento), la red no dar\u00e1 un error de software, sino que escupir\u00e1 un valor matem\u00e1tico calculado a trav\u00e9s de sus pesos actuales, el cual ser\u00e1 totalmente **arbitrario, sesgado e impredecible** desde la l\u00f3gica humana.<br>",
    "correct": 4,
    "category": "neurona"
  },
  {
    "source": "examen_2024",
    "question": "Entrenar una RNA utilizando un algoritmo de entrenamiento basado en el algoritmo de descenso de gradiente tiene el siguiente problema...<br>",
    "options": [
      "a) Nunca encontrar\u00e1 el m\u00ednimo global.",
      "b) Al alcanzar un m\u00ednimo, oscilar\u00e1 de un lado a otro, incapaz de permanecer en \u00e9l.",
      "c) Alcanzar\u00e1 un m\u00ednimo con incrementos muy peque\u00f1os.",
      "d) Es posible que se quede atrapado en alg\u00fan m\u00ednimo local.",
      "e) Requerir\u00e1 un n\u00famero muy alto de \u00e9pocas para lograr un error aceptable."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>El descenso del gradiente cl\u00e1sico (empleado en _Backpropagation_) es un algoritmo anal\u00edtico determinista y miope. Su \u00fanica regla es \"descender por la pendiente m\u00e1s pronunciada\". Si la topolog\u00eda de la funci\u00f3n de coste es rugosa y presenta \"valles falsos\", el algoritmo descender\u00e1 hasta el fondo de ese valle y el gradiente se har\u00e1 cero. Al carecer de momento inercial o visi\u00f3n panor\u00e1mica, se quedar\u00e1 irremediablemente **atrapado en ese m\u00ednimo local**, asumiendo err\u00f3neamente que ha llegado al fondo absoluto (m\u00ednimo global).<br>",
    "correct": 3,
    "category": "neurona"
  },
  {
    "source": "examen_2024",
    "question": "Para evaluar qu\u00e9 tan bien entrenada est\u00e1 una red y qu\u00e9 tan bien generaliza, es necesario evaluar el error...<br>",
    "options": [
      "a) en el conjunto de entrenamiento.",
      "b) en el conjunto de validaci\u00f3n.",
      "c) en el conjunto de prueba (Test).",
      "d) en la \u00e9poca de entrenamiento con el gradiente m\u00e1s peque\u00f1o.",
      "e) en la \u00e9poca de entrenamiento con el momento m\u00e1s peque\u00f1o."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Existe una jerarqu\u00eda estricta en el uso de los datos. El conjunto de _entrenamiento_ ajusta los pesos. El conjunto de _validaci\u00f3n_ se usa como monitor durante el entrenamiento para tunear hiperpar\u00e1metros o aplicar parada temprana (early stopping). Sin embargo, la aut\u00e9ntica prueba de fuego (la m\u00e9trica final de rendimiento para saber si la red ha generalizado correctamente el problema hacia el mundo real y no solo ha memorizado) se mide obligatoriamente evaluando su error en un **conjunto de prueba (_test set_)**, un lote de datos absolutamente virgen e independiente que el modelo jam\u00e1s ha visto durante su dise\u00f1o.<br>",
    "correct": 2,
    "category": "neurona"
  },
  {
    "source": "examen_2024",
    "question": "En una RNA, el conjunto de validaci\u00f3n...<br>",
    "options": [
      "a) se usa para evaluar la capacidad de generalizaci\u00f3n de la red.",
      "b) debe ser linealmente separable.",
      "c) realiza la modificaci\u00f3n de los pesos con el algoritmo correspondiente.",
      "d) no realiza la modificaci\u00f3n de los pesos, pero controla el proceso de entrenamiento y lo detiene cuando es necesario.",
      "e) Todas las respuestas anteriores son incorrectas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>El conjunto de validaci\u00f3n act\u00faa como un monitor o \u00e1rbitro externo. Los datos que lo componen jam\u00e1s pasan por el algoritmo de actualizaci\u00f3n de pesos (descartando la opci\u00f3n c). Su funci\u00f3n es evaluar c\u00f3mo se comporta la red ante datos que no ha \"visto\" durante el entrenamiento para aplicar la estrategia de regularizaci\u00f3n denominada \"parada temprana\" (_early stopping_): detiene el entrenamiento justo cuando el error de entrenamiento sigue bajando pero el de validaci\u00f3n empieza a subir (inicio del sobreentrenamiento).<br>",
    "correct": 3,
    "category": "neurona"
  },
  {
    "source": "examen_2024",
    "question": "Durante el proceso de entrenamiento de una RNA utilizando la t\u00e9cnica de detenci\u00f3n temprana, los valores m\u00e1s bajos de error en los conjuntos de entrenamiento, validaci\u00f3n y prueba se alcanzan en \u00e9pocas diferentes. \u00bfQu\u00e9 pesos se toman para la red que se devuelve?<br>",
    "options": [
      "a) Los de la \u00e9poca con el error de validaci\u00f3n m\u00e1s bajo.",
      "b) Los de la \u00e9poca con el error de prueba m\u00e1s bajo.",
      "c) Los de la \u00faltima \u00e9poca de entrenamiento.",
      "d) Los de la \u00e9poca con el gradiente m\u00e1s bajo.",
      "e) Los de la \u00e9poca con el error de entrenamiento m\u00e1s bajo."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Al utilizar la t\u00e9cnica de detenci\u00f3n temprana, el programa de dise\u00f1o eval\u00faa la p\u00e9rdida en el conjunto ciego de validaci\u00f3n. La orden algor\u00edtmica es retroceder en el tiempo y devolver a nivel productivo \"la copia estructural de la red guardada en la **\u00e9poca matem\u00e1tica exacta donde el error del conjunto de validaci\u00f3n registr\u00f3 su marca hist\u00f3rica m\u00e1s baja**\", pues es ah\u00ed donde se demuestra la mayor capacidad de generalizaci\u00f3n te\u00f3rica de la red.<br>",
    "correct": 0,
    "category": "neurona"
  },
  {
    "source": "examen_2024",
    "question": "Para utilizar una RNA para resolver un problema de clasificaci\u00f3n con dos clases, sin la posibilidad de que una instancia no pertenezca a ninguna de ellas, el n\u00famero de neuronas que se debe usar en la capa de salida es...<br>",
    "options": [
      "a) 1.",
      "b) 2.",
      "c) 3.",
      "d) 4.",
      "e) 5."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>En un problema de clasificaci\u00f3n estrictamente dicot\u00f3mica (o binaria) donde todos los elementos del mundo pertenecen imperativamente a la Clase A o a la Clase B, basta con usar **una \u00fanica neurona de salida** equipada con una funci\u00f3n de transferencia como la sigmoide o limitador duro. Si la neurona emite un 0, se asigna a la primera clase; si emite un 1, a la segunda. A\u00f1adir una segunda neurona ser\u00eda redundante e ineficiente topol\u00f3gicamente.<br>",
    "correct": 0,
    "category": "feedforward"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfC\u00f3mo codificar\u00edas una salida categ\u00f3rica de una RNA, cuyos valores pueden ser \"coche/motocicleta/bicicleta/avi\u00f3n\"?<br>",
    "options": [
      "a) Como 2 valores booleanos, codificando cada una de las 4 categor\u00edas como \"01/01/10/11\".",
      "b) No es necesario codificarlo, la RNA puede generar esa salida categ\u00f3rica.",
      "c) Como 4 valores booleanos, codificando cada una de las 4 categor\u00edas como \"1000/0100/0010/0001\".",
      "d) Como un valor real, que toma 4 valores equiespaciados diferentes.",
      "e) Las respuestas c) y d) son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Las redes neuronales solo entienden vectores num\u00e9ricos. Para variables categ\u00f3ricas nominales sin un orden jer\u00e1rquico inherente (un coche no vale matem\u00e1ticamente el doble que una bicicleta), se emplea la t\u00e9cnica de codificaci\u00f3n **One-Hot Encoding**. Consiste en crear un vector del mismo tama\u00f1o que el n\u00famero de clases (4 clases = 4 neuronas de salida booleanas) donde solo se enciende (valor 1) la neurona correspondiente a la clase correcta, manteniendo el resto apagadas (valor 0).<br>",
    "correct": 2,
    "category": "feedforward"
  },
  {
    "source": "examen_2024",
    "question": "La funci\u00f3n de transferencia de las neuronas de salida de una Red Neuronal Artificial...<br>",
    "options": [
      "a) Ser\u00e1 lineal si es un problema de clasificaci\u00f3n con solo dos clases.",
      "b) Ser\u00e1 sigmoide logar\u00edtmica si es un problema de clasificaci\u00f3n con m\u00e1s de dos clases.",
      "c) Ser\u00e1 sigmoide logar\u00edtmica si es un problema de regresi\u00f3n.",
      "d) Ser\u00e1 tangente hiperb\u00f3lica sigmoide si es un problema de regresi\u00f3n.",
      "e) Ser\u00e1 lineal si es un problema de regresi\u00f3n."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Para problemas de regresi\u00f3n, donde se busca predecir un valor continuo en el espacio real (como una temperatura o un precio), la capa de salida debe usar una **funci\u00f3n de transferencia estrictamente lineal** o de identidad (como _purelin_). Esto permite a la red escupir el valor en bruto sin recortar su escala num\u00e9rica natural. Las funciones limitadoras (sigmoides) estrujar\u00edan los resultados impidiendo dar valores mayores a 1 o menores a 0/-1.<br>",
    "correct": 4,
    "category": "feedforward"
  },
  {
    "source": "examen_2024",
    "question": "La autoorganizaci\u00f3n en los Sistemas Conexionistas...<br>",
    "options": [
      "a) Permite la existencia de un jefe que determina el comportamiento de los patrones.",
      "b) Evita el comportamiento emergente del sistema.",
      "c) Facilita el almacenamiento de informaci\u00f3n en las neuronas (c\u00e9lulas) de entrada.",
      "d) Permite obtener redundancia en los datos.",
      "e) Todas las anteriores son incorrectas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>La autoorganizaci\u00f3n es puramente **no supervisada** (carece de \"jefe\" o tutor, descartando la a); se fundamenta precisamente en permitir el **comportamiento emergente** (descartando la b); el conocimiento no se almacena en la capa de entrada, sino en la matriz topol\u00f3gica de pesos (descartando la c); y, finalmente, la redundancia en los datos de entrada es un _requisito previo_ para que la red descubra caracter\u00edsticas estad\u00edsticas, no un resultado que \"se obtenga\" (descartando la d). Todas son falsas.<br>",
    "correct": 4,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfQu\u00e9 modelo se ajusta mejor a datos de diferentes dimensionalidades?<br>",
    "options": [
      "a) GNG.",
      "b) SOM.",
      "c) GNS.",
      "d) SGM.",
      "e) SVM."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>El modelo **GNG (_Growing Neural Gas_)** supera a los SOM cl\u00e1sicos porque no utiliza una cuadr\u00edcula o malla r\u00edgida 2D predefinida. Al ser un \"gas\" neuronal, su arquitectura constructiva le permite crear y destruir nodos (y aristas) de forma din\u00e1mica, adapt\u00e1ndose org\u00e1nicamente a cualquier geometr\u00eda, discontinuidad o cambio de dimensionalidad en el espacio de los datos de entrada.<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "En una red SOM, es importante...<br>",
    "options": [
      "a) La ubicaci\u00f3n espacial de las neuronas.",
      "b) La interacci\u00f3n de una neurona con las dem\u00e1s en la capa de salida.",
      "c) El n\u00famero de capas ocultas.",
      "d) Que el n\u00famero de neuronas en la capa de entrada sea mayor que en la capa de salida.",
      "e) Todas son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>A diferencia del perceptr\u00f3n multicapa, en los Mapas de Kohonen (SOM) la **ubicaci\u00f3n espacial y topol\u00f3gica** de las neuronas en la cuadr\u00edcula de salida es cr\u00edtica. El algoritmo de entrenamiento (competitivo y de vecindad) est\u00e1 dise\u00f1ado matem\u00e1ticamente para que las neuronas que est\u00e1n f\u00edsicamente cerca en el mapa terminen respondiendo a patrones de entrada que tambi\u00e9n son similares en el mundo real, preservando la topolog\u00eda de los datos originales.<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfQu\u00e9 representa la ubicaci\u00f3n en la capa de salida de una neurona (c\u00e9lula) en una red SOM?<br>",
    "options": [
      "a) El n\u00famero de atributos de los patrones.",
      "b) El orden de presentaci\u00f3n de cada patr\u00f3n durante el proceso de entrenamiento.",
      "c) Una proyecci\u00f3n bidimensional de los datos de entrada.",
      "d) Indica su relaci\u00f3n con las neuronas de entrada.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La utilidad primordial de un SOM es la reducci\u00f3n de dimensionalidad espacial. Al entrenarse, la red abstrae un espacio de datos de alt\u00edsima complejidad ($n$-dimensional) y lo proyecta sobre un mapa discreto, creando una **proyecci\u00f3n topol\u00f3gica bidimensional (2D)**. De este modo, la ubicaci\u00f3n en el mapa permite a los humanos visualizar e interpretar de un vistazo los cl\u00fasteres y relaciones originales.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfCu\u00e1ntas capas, que realizan c\u00e1lculos, tiene una red SOM?<br>",
    "options": [
      "a) Tantas como especifique el usuario.",
      "b) Depende del tipo de problema.",
      "c) 1.",
      "d) 2.",
      "e) Tantas como patrones de entrada."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Una arquitectura SOM est\u00e1ndar se compone de dos capas: una de entrada y una de salida (competitiva). Sin embargo, la capa de entrada act\u00faa \u00fanicamente como un \"buffer\" pasivo que recibe los vectores del entorno sin alterar sus valores ni realizar c\u00e1lculos. Por tanto, la \u00fanica capa que realiza procesamiento, c\u00e1lculo de distancias eucl\u00eddeas y ajuste de pesos sin\u00e1pticos es **1 sola capa** (la capa competitiva de salida).<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "En una red SOM, \u00bfqu\u00e9 representa el par\u00e1metro _(omitido en texto/OCR, referido habitualmente a $\\alpha$)_ en la f\u00f3rmula de actualizaci\u00f3n de pesos?<br>",
    "options": [
      "a) El tama\u00f1o del vecindario.",
      "b) La topolog\u00eda del vecindario.",
      "c) La distancia a la Unidad de Mejor Coincidencia (BMU).",
      "d) La tasa de aprendizaje.",
      "e) El par\u00e1metro no existe en la ecuaci\u00f3n de la SOM."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)** _(Asumiendo $\\alpha$ en los cuestionarios t\u00edpicos)_<br><br>En la f\u00f3rmula cl\u00e1sica de Kohonen $W_i(t+1) = W_i(t) + \\alpha(t) \\cdot h_{ci}(t) \\cdot [x(t) - W_i(t)]$, el par\u00e1metro $\\alpha(t)$ representa la **tasa de aprendizaje** (que decrece progresivamente con el tiempo). Si el s\u00edmbolo omitido en el examen por fallo de escaneo se refer\u00eda a $h_{ci}(t)$ o $\\sigma(t)$, la respuesta ser\u00eda \"el tama\u00f1o del vecindario\" (opci\u00f3n a). Ante preguntas truncadas donde las opciones de respuesta no contienen ambas, se asume t\u00edpicamente la tasa de aprendizaje.<br>",
    "correct": 3,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfQu\u00e9 tipo de aprendizaje ocurre en las SOM?<br>",
    "options": [
      "a) Competitivo.",
      "b) Exhaustivo.",
      "c) Por necesidad.",
      "d) Reforzamiento.",
      "e) Las opciones c y d son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Las redes SOM utilizan un paradigma de aprendizaje puramente **no supervisado y competitivo**. Ante la presentaci\u00f3n de un vector de entrada, todas las neuronas de la red calculan su similitud geom\u00e9trica y \"compiten\" entre s\u00ed. Solo existe una ganadora absoluta (BMU) que se lleva el derecho principal de actualizar sus pesos de acuerdo con la informaci\u00f3n de entrada.<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfQu\u00e9 es la neurona (c\u00e9lula) ganadora en una red SOM?<br>",
    "options": [
      "a) La que est\u00e1 m\u00e1s cerca del patr\u00f3n de entrada.",
      "b) La neurona que representa el patr\u00f3n dentro de su cl\u00faster.",
      "c) La neurona que aprende m\u00e1s r\u00e1pido.",
      "d) La neurona que converge primero.",
      "e) La neurona en el top 5 de la red en el proceso de aprendizaje."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>La neurona ganadora, conocida t\u00e9cnicamente como BMU (_Best Matching Unit_), se define exclusivamente como la c\u00e9lula de la malla cuyo vector interno de pesos presenta la menor distancia matem\u00e1tica (usualmente euclidiana) respecto al vector de datos de entrada. En t\u00e9rminos topol\u00f3gicos, es **la neurona que est\u00e1 m\u00e1s cerca** de ese patr\u00f3n.<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfQu\u00e9 representan los pesos de las neuronas en la red SOM?<br>",
    "options": [
      "a) Cl\u00fasteres.",
      "b) Conocidos como bias.",
      "c) N\u00famero de patrones aprendidos.",
      "d) Prototipos, centros o centroides de cl\u00fasteres.",
      "e) Grupos."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>A diferencia del Perceptr\u00f3n (donde los pesos son simples ponderadores), en las redes SOM las unidades operan con matrices de pesos que funcionan estructuralmente como un conjunto de coordenadas matem\u00e1ticas (un vector). Estos vectores act\u00faan como **prototipos, centros o centroides**. A medida que la red se entrena, dichos vectores migran por el espacio hasta anclarse justo en el centro de gravedad de las nubes de datos o cl\u00fasteres.<br>",
    "correct": 3,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "En una red SOM...<br>",
    "options": [
      "a) El vecindario determina el n\u00famero de neuronas contra las que uno compite por un patr\u00f3n.",
      "b) El vecindario de una neurona ganadora determina cu\u00e1les se modifican parcialmente.",
      "c) El tama\u00f1o del vecindario permanece sin cambios durante todo el proceso de entrenamiento.",
      "d) La topolog\u00eda cambia durante el entrenamiento.",
      "e) El n\u00famero de vecinos se adapta a las dimensiones del espacio de b\u00fasqueda."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>En el algoritmo de aprendizaje competitivo de un SOM, la neurona ganadora (BMU) no es la \u00fanica en verse beneficiada. Se define un radio topol\u00f3gico alrededor de ella llamado \"vecindad\" (usualmente con forma de campana de Gauss). Su rol es **determinar qu\u00e9 neuronas adyacentes a la ganadora van a modificar parcialmente sus pesos**, forzando un comportamiento topol\u00f3gico continuo en toda la manta neuronal. (La 'C' es falsa porque este radio decrece con el tiempo).<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfA cu\u00e1ntas neuronas se conecta cada neurona en la capa de entrada?<br>",
    "options": [
      "a) A todas las neuronas en la capa de competencia.",
      "b) Consigo misma recursivamente.",
      "c) Solo con neuronas que alguna vez han sido ganadoras.",
      "d) Se conecta con todas y cada una de las neuronas presentes en el modelo.",
      "e) Todas son falsas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Un mapa SOM cl\u00e1sico se basa en una arquitectura _Feed-forward_ (hacia adelante) totalmente conectada o densa. Esto significa que **todas y cada una de las neuronas receptoras** de la capa de entrada se bifurcan y trazan conexiones sin\u00e1pticas f\u00edsicas hacia **todas las neuronas del mapa de salida** (la capa de competencia).<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfQu\u00e9 fases presenta el funcionamiento del modelo SOM?<br>",
    "options": [
      "a) Fase de aprendizaje y modo operativo.",
      "b) Fase de aprendizaje y fase de validaci\u00f3n.",
      "c) Fase de generalizaci\u00f3n y fase de validaci\u00f3n.",
      "d) Fase inicial y modo de operaci\u00f3n.",
      "e) Modo r\u00e1pido y modo robusto."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>La vida de una red SOM se divide secuencialmente en dos estados. Primero la **Fase de Aprendizaje**, donde el mapa est\u00e1 \"blando\", compite de forma no supervisada, y sus pesos y la campana de vecindad se actualizan y adaptan topol\u00f3gicamente. Una vez el mapa converge y sus prototipos se asientan, se congelan los pesos pasando al **Modo Operativo** (o fase de mapeo), donde ante la llegada de nuevos vectores, la red simplemente identifica a la neurona ganadora para clasificarla sin alterar ya su estructura.<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfCu\u00e1les son las m\u00e9tricas para validar una red SOM?<br>",
    "options": [
      "a) Error de cuantizaci\u00f3n medio y medida de preservaci\u00f3n de topolog\u00eda.",
      "b) Precisi\u00f3n y medida de preservaci\u00f3n de topolog\u00eda.",
      "c) Error de cuantizaci\u00f3n medio y medida de dispersi\u00f3n de topolog\u00eda.",
      "d) Tasa de precisi\u00f3n media y medida de dispersi\u00f3n de topolog\u00eda.",
      "e) Medida de preservaci\u00f3n del conocimiento."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Dado que una red SOM opera bajo un paradigma puramente \"No Supervisado\", las m\u00e9tricas estad\u00edsticas cl\u00e1sicas como la \"Tasa de precisi\u00f3n\" (_Accuracy_) resultan in\u00fatiles porque carecemos de salidas esperadas o etiquetas objetivo con las que comparar. Para auditar si la red se estructur\u00f3 de forma correcta se utiliza:<br><br>1. **Error de cuantizaci\u00f3n (QE):** Mide la distancia media de todos los datos de entrada a sus respectivas BMUs.<br><br>2. **Error topogr\u00e1fico (TE):** Verifica que se haya preservado correctamente la topolog\u00eda original, confirmando que los datos se mapean hacia neuronas estrictamente contiguas.<br><br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfCu\u00e1l de las siguientes opciones describe correctamente los or\u00edgenes de los Algoritmos Gen\u00e9ticos y la Programaci\u00f3n Gen\u00e9tica?<br>",
    "options": [
      "a) Fueron desarrollados por John von Neumann en la d\u00e9cada de 1950.",
      "b) Son el resultado de avances en inteligencia artificial en la d\u00e9cada de 1980.",
      "c) Tienen sus ra\u00edces en los trabajos de Charles Darwin y Alfred Wallace sobre evoluci\u00f3n y selecci\u00f3n natural.",
      "d) Fueron propuestos por Charles Babbage durante la Segunda Guerra Mundial.",
      "e) El principal precursor es Mendel con su trabajo sobre la deriva gen\u00e9tica."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Los algoritmos evolutivos (introducidos por John Holland) son una rama heur\u00edstica bio-inspirada de la IA. Toda su arquitectura algor\u00edtmica y su terminolog\u00eda (individuos, poblaci\u00f3n, cruce, mutaci\u00f3n, aptitud) est\u00e1n fuertemente inspiradas en la **Teor\u00eda de la Evoluci\u00f3n de las Especies** y la mec\u00e1nica de la **Selecci\u00f3n Natural** formulada emp\u00edricamente por Charles Darwin (junto a los trabajos de Alfred Wallace).<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "A la luz de las diferentes teor\u00edas evolutivas presentes en los Algoritmos Gen\u00e9ticos, \u00bfcu\u00e1l de las siguientes inspira la operaci\u00f3n de aptitud (Fitness)?<br>",
    "options": [
      "a) Aprendizaje Hebbiano.",
      "b) Teor\u00eda de la Conservaci\u00f3n de Lamarck.",
      "c) Teor\u00eda de la Evoluci\u00f3n de Darwin.",
      "d) Leyes de Mendel.",
      "e) Deriva gen\u00e9tica."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La funci\u00f3n de \"Aptitud\" (_Fitness_) implementada en c\u00f3digo representa al juez de supervivencia del Algoritmo Gen\u00e9tico. Eval\u00faa qu\u00e9 individuo est\u00e1 mejor preparado para el entorno, decidiendo qui\u00e9n se reproduce y qui\u00e9n es descartado (selecci\u00f3n). Esta doctrina de \"la supervivencia del m\u00e1s fuerte o m\u00e1s apto\" es la base doctrinal directa de la **Teor\u00eda de la Evoluci\u00f3n por Selecci\u00f3n Natural de Darwin**.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "En el contexto de los algoritmos evolutivos, \u00bfqu\u00e9 t\u00e9cnica se utiliza para explotar la informaci\u00f3n presente en la poblaci\u00f3n y mejorar las soluciones?<br>",
    "options": [
      "a) Cruce (Recombinaci\u00f3n).",
      "b) Mutaci\u00f3n.",
      "c) Selecci\u00f3n.",
      "d) Reemplazo.",
      "e) Clonaci\u00f3n."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>En los metaheur\u00edsticos evolutivos existe un dilema constante entre explorar nuevas \u00e1reas (b\u00fasqueda ciega) o mejorar las actuales (perfeccionamiento). La Mutaci\u00f3n es el operador de \"Exploraci\u00f3n\". Por el contrario, el operador de Recombinaci\u00f3n o **Cruce** es el encargado de la **Explotaci\u00f3n**: mezcla y aprovecha la informaci\u00f3n (bloques gen\u00e9ticos valiosos) ya presente en las partes exitosas del genoma de padres fuertes para generar hijos te\u00f3ricamente superiores.<br>",
    "correct": 0,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "En un algoritmo gen\u00e9tico, \u00bfcu\u00e1l es el nombre dado al proceso por el cual el mejor individuo en la poblaci\u00f3n pasa por una fase de ajuste local y as\u00ed se inserta en la poblaci\u00f3n?<br>",
    "options": [
      "a) Siembra.",
      "b) Elitismo.",
      "c) Aprendizaje Lamarckiano.",
      "d) Estado Estable.",
      "e) Ascenso de Colinas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Cuando un individuo de un AG explora topol\u00f3gicamente su entorno local durante su \"vida\" (ej. mediante _hill-climbing_) para mejorar su aptitud y, tras esa fase de ajuste, sobreescribe sus propios genes para heredar de forma directa esa mejora a su descendencia, estamos implementando expl\u00edcitamente el concepto biol\u00f3gico de la **Evoluci\u00f3n Lamarckiana** (la herencia de los caracteres o habilidades adquiridos en vida).<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "Supongamos que se ejecuta un algoritmo gen\u00e9tico en una poblaci\u00f3n de 1000 individuos. Si en la segunda generaci\u00f3n se obtienen 100 individuos mutados, \u00bfqu\u00e9 combinaci\u00f3n de tasa de cruce y probabilidad de mutaci\u00f3n es m\u00e1s probable que se haya utilizado?<br>",
    "options": [
      "a) Tasa de cruce de 0.9 y ratio de mutaci\u00f3n de 0.01",
      "b) Tasa de cruce de 0.9 y ratio de mutaci\u00f3n de 0.001",
      "c) Tasa de cruce de 1.0 y ratio de mutaci\u00f3n de 0.01",
      "d) Tasa de cruce de 1.0 y ratio de mutaci\u00f3n de 0.001",
      "e) Tasa de cruce de 0.7 y ratio de mutaci\u00f3n de 0.1"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Es un c\u00e1lculo de probabilidad matem\u00e1tico directo. Si partimos de un censo total de 1000 individuos y el algoritmo devuelve que estad\u00edsticamente 100 de ellos sufrieron el operador de mutaci\u00f3n en sus genes, la ratio efectiva que est\u00e1 operando en el sistema es de $100 / 1000 = 0.1$. La \u00fanica opci\u00f3n que contempla correctamente esta **tasa de mutaci\u00f3n de 0.1** es la opci\u00f3n e.<br>",
    "correct": 4,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "En algoritmos gen\u00e9ticos, \u00bfc\u00f3mo puede afectar el tama\u00f1o de la poblaci\u00f3n la eficiencia y efectividad del proceso de optimizaci\u00f3n?<br>",
    "options": [
      "a) Con un tama\u00f1o de poblaci\u00f3n m\u00e1s grande, se requiere m\u00e1s tiempo para converger hacia una soluci\u00f3n \u00f3ptima.",
      "b) Con un tama\u00f1o de poblaci\u00f3n m\u00e1s peque\u00f1o, la diversidad gen\u00e9tica y la exploraci\u00f3n del espacio de b\u00fasqueda aumentan.",
      "c) Con un tama\u00f1o de poblaci\u00f3n m\u00e1s grande, la probabilidad de encontrar soluciones \u00f3ptimas globales disminuye.",
      "d) Con un tama\u00f1o de poblaci\u00f3n m\u00e1s peque\u00f1o, se reducen los costos computacionales y se acelera la convergencia."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)** _(Nota: La 'A' tambi\u00e9n presenta una premisa cierta, pero la 'D' suele ser la definici\u00f3n buscada para la justificaci\u00f3n de optimizaci\u00f3n de c\u00f3digo)._<br><br>El tama\u00f1o de la poblaci\u00f3n regula el balance computacional. Una poblaci\u00f3n muy grande asegura alta diversidad gen\u00e9tica, pero consume recursos extremos de CPU ralentizando el programa por el n\u00famero de evaluaciones del _fitness_. Al rev\u00e9s, un **tama\u00f1o de poblaci\u00f3n peque\u00f1o reduce dr\u00e1sticamente el coste computacional y acelera enormemente la convergencia** (aunque aumenta el riesgo te\u00f3rico de estancarse en m\u00ednimos locales por baja diversidad).<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "En un Algoritmo Gen\u00e9tico...<br>",
    "options": [
      "a) Si la tasa de mutaci\u00f3n es cero, el algoritmo funciona porque el cruce lleva a la evoluci\u00f3n.",
      "b) Si la tasa de cruce es cero, la mutaci\u00f3n causa que todos los individuos acumulen demasiados cambios.",
      "c) Si la tasa de cruce es cero, la mutaci\u00f3n genera variabilidad y el algoritmo de selecci\u00f3n lleva a la evoluci\u00f3n.",
      "d) Si tanto la tasa de cruce como la tasa de mutaci\u00f3n son cero, el algoritmo de selecci\u00f3n prevalece y lleva a la evoluci\u00f3n.",
      "e) Es imposible que las tasas de cruce y/o mutaci\u00f3n sean cero."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Si alteramos la arquitectura del AG anulando el cruce (tasa = 0%), la recombinaci\u00f3n gen\u00e9tica desaparece. Sin embargo, la mutaci\u00f3n continuar\u00e1 inyectando ruido aleatorio constante (variabilidad fenot\u00edpica) sobre los individuos aislados, y el mecanismo darwiniano de \"Selecci\u00f3n\" se encargar\u00e1 de salvaguardar aquellas mutaciones que presenten mejoras en la aptitud. El sistema seguir\u00e1 evolucionando, comport\u00e1ndose como una simple t\u00e9cnica de **B\u00fasqueda Aleatoria Guiada** (Estrategia Evolutiva).<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfCu\u00e1l de las siguientes afirmaciones es verdadera con respecto a todas las t\u00e9cnicas de Computaci\u00f3n Evolutiva?<br>",
    "options": [
      "a) Las soluciones deben codificarse en forma de \u00e1rbol.",
      "b) Las poblaciones m\u00e1s grandes favorecen una evoluci\u00f3n m\u00e1s r\u00e1pida.",
      "c) El esquema de reemplazo generacional usa menos memoria.",
      "d) Las funciones de aptitud deben ser evaluables para cada individuo en la poblaci\u00f3n.",
      "e) El criterio de terminaci\u00f3n debe ser \u00fanico."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Para que los mecanismos estoc\u00e1sticos de torneo y selecci\u00f3n de Darwin funcionen, el algoritmo inform\u00e1tico debe ser capaz de determinar qui\u00e9n sobrevive y qui\u00e9n no. Esto convierte en un requisito tecnol\u00f3gico universal que la funci\u00f3n **Fitness** (la evaluaci\u00f3n de aptitud del problema) pueda calcularse sin excepciones para todos y cada uno de los cromosomas (individuos) generados en la poblaci\u00f3n.<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "Con respecto al siguiente \u00e1rbol que representa un individuo en la programaci\u00f3n gen\u00e9tica, \u00bfcu\u00e1l de las siguientes afirmaciones es verdadera? _(Asumiendo operadores como nodos y variables/constantes como hojas)._<br>",
    "options": [
      "a) Los componentes terminales son `[1, 14]`.",
      "b) Los componentes no terminales son $X$, $Y$, $+$, $-$.",
      "c) La profundidad m\u00e1xima del \u00e1rbol es 3.",
      "d) Es un \u00e1rbol desequilibrado.",
      "e) No puede representar un individuo porque tiene que ser un vector de variables."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En base a la teor\u00eda genot\u00edpica en Programaci\u00f3n Gen\u00e9tica (GP), la opci\u00f3n C eval\u00faa la profundidad estructural de los niveles de llamadas recursivas en el \u00e1rbol de c\u00f3digo. Las opciones A y B son completamente falsas por definici\u00f3n sem\u00e1ntica: los nodos \"terminales\" u hojas alojan siempre las constantes (`1`, `14`) **junto con** las variables ($X$, $Y$); y los nodos \"no terminales\" o funcionales son \u00fanica y exclusivamente los operadores algebraicos/l\u00f3gicos (`+`, `-`, `*`). La E es falsa porque GP usa expl\u00edcitamente \u00e1rboles, no vectores planos.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfCu\u00e1l es el efecto de ajustar la tasa de mutaci\u00f3n en la programaci\u00f3n gen\u00e9tica y c\u00f3mo puede influir en la convergencia del algoritmo?<br>",
    "options": [
      "a) Aumentar la tasa de mutaci\u00f3n acelera la convergencia del algoritmo...",
      "b) Reducir la tasa de mutaci\u00f3n en poblaciones grandes puede mejorar la convergencia...",
      "c) La tasa de mutaci\u00f3n no tiene impacto en la convergencia del algoritmo...",
      "d) Ajustar \u00f3ptimamente la tasa de mutaci\u00f3n puede equilibrar la exploraci\u00f3n y la explotaci\u00f3n en la programaci\u00f3n gen\u00e9tica, facilitando la convergencia hacia soluciones de alta calidad.",
      "e) La tasa de mutaci\u00f3n solo afecta la velocidad de convergencia del algoritmo..."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>La tasa de mutaci\u00f3n es el hiperpar\u00e1metro que regula el \"caos\" del sistema. Si es muy baja, el modelo sufre convergencia prematura (se atasca en m\u00ednimos locales por baja exploraci\u00f3n). Si es muy alta, degenera en una b\u00fasqueda puramente aleatoria (destruyendo los bloques buenos obtenidos por explotaci\u00f3n en el cruce). Su **ajuste \u00f3ptimo es la clave heur\u00edstica para equilibrar** este \"Trade-off\" (exploraci\u00f3n vs explotaci\u00f3n) garantizando llegar a un \u00f3ptimo global de alta fidelidad.<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfCu\u00e1l es el objetivo principal del operador de cruce en las t\u00e9cnicas de computaci\u00f3n evolutiva?<br>",
    "options": [
      "a) Reducir la diversidad en la poblaci\u00f3n.",
      "b) Expandir el espacio de b\u00fasqueda.",
      "c) Explotar la informaci\u00f3n presente en la poblaci\u00f3n.",
      "d) Seleccionar los mejores individuos en funci\u00f3n de su funci\u00f3n de aptitud.",
      "e) Introducir aleatoriedad en la poblaci\u00f3n."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En las metaheur\u00edsticas evolutivas, el rol de \"Expandir\" o investigar zonas nuevas (aleatoriedad) recae enteramente sobre el operador de Mutaci\u00f3n. El operador de Recombinaci\u00f3n o **Cruce** asume la labor de **Explotaci\u00f3n**: cruzar, enlazar y aprovechar eficientemente la informaci\u00f3n valiosa (los buenos alelos o \"Building Blocks\") ya descubierta en los individuos fuertes de la generaci\u00f3n actual para engendrar hijos que retengan y mejoren esos rasgos.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "La combinaci\u00f3n de \"Hill-climbing\" y algoritmos gen\u00e9ticos:<br>",
    "options": [
      "a) Es una t\u00e9cnica de b\u00fasqueda donde su principal problema es la convergencia temprana.",
      "b) Es una t\u00e9cnica de b\u00fasqueda aplicada en algoritmos gen\u00e9ticos donde su principal problema es que no garantiza obtener el \u00f3ptimo global.",
      "c) Solo se puede aplicar en la programaci\u00f3n gen\u00e9tica.",
      "d) Est\u00e1 inspirada en los principios de la evoluci\u00f3n Lamarckiana para mejorar la convergencia del proceso evolutivo.",
      "e) Es una t\u00e9cnica que realiza una b\u00fasqueda aleatoria en el espacio de soluciones..."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Este tipo de combinaciones (un algoritmo global gen\u00e9tico h\u00edbrido con una t\u00e9cnica de ajuste de b\u00fasqueda local como _Hill-climbing_ por cada individuo) recibe el nombre t\u00e9cnico de \"Algoritmo Mem\u00e9tico\". Si los fenotipos mejorados mediante la b\u00fasqueda local son codificados de vuelta (inyectados como genotipo) al cromosoma del agente para hered\u00e1rselo a sus hijos de manera ventajosa, se est\u00e1 replicando a nivel inform\u00e1tico la base de la **Evoluci\u00f3n Lamarckiana** (la herencia biol\u00f3gica de los caracteres adquiridos).<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_2024",
    "question": "\u00bfCu\u00e1l de las siguientes estrategias describe con mayor precisi\u00f3n el mecanismo de selecci\u00f3n utilizado en algoritmos evolutivos para promover la diversidad gen\u00e9tica y evitar la convergencia prematura?<br>",
    "options": [
      "a) Selecci\u00f3n por ruleta, donde los individuos se asignan a sectores de una ruleta ponderada...",
      "b) Selecci\u00f3n por ruleta, donde los individuos se asignan a sectores de una ruleta con igual probabilidad...",
      "c) Selecci\u00f3n por torneo, donde los individuos se agrupan en subconjuntos y el individuo con el mejor valor de aptitud es seleccionado para cada grupo.",
      "d) Selecci\u00f3n por torneo, donde los individuos compiten en pares y el ganador se selecciona con una probabilidad proporcional a su aptitud.",
      "e) Selecci\u00f3n por torneo, donde los individuos se agrupan en subconjuntos y los dos individuos con menor aptitud de cada subconjunto son seleccionados para la reproducci\u00f3n."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La estrategia tradicional de \"Ruleta\" es muy propensa a provocar la \"convergencia prematura\": los individuos excesivamente sobresalientes al inicio del programa copan el 90% de los giros de la ruleta, devorando a los dem\u00e1s y destruyendo la diversidad por endogamia (clonaci\u00f3n masiva). La **Selecci\u00f3n por Torneo** soluciona esto aislando ciegamente peque\u00f1os _subconjuntos_ o agrupaciones aleatorias y haciendo que compitan localmente entre ellos, **seleccionando siempre al que posea mejor valor de aptitud dentro de su peque\u00f1a arena**. Esto da oportunidades reales de supervivencia y reproducci\u00f3n a individuos modestos pero gen\u00e9ticamente valiosos, promoviendo de forma \u00f3ptima la diversidad global de la especie a largo plazo.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "Dado el siguiente grafo, en donde (i) el nodo inicial es $A$ y el nodo meta es $G$, (ii) el valor num\u00e9rico dentro de cada nodo indica el resultado de evaluar una funci\u00f3n heur\u00edstica $h$, y (iii) el valor num\u00e9rico en cada arista indica el coste de transici\u00f3n entre los diferentes estados:<br><img src=\"../../2026/examenes%20SI/grafo1.png\" style=\"max-width:100%; border-radius:8px; margin: 10px 0;\"><br>Aplicando el algoritmo A* basado en **grafo**, en alg\u00fan paso, los nodos de la frontera vendr\u00e1n dispuestos seg\u00fan la siguiente configuraci\u00f3n (considerar precedencia izq a drch, que el n\u00famero entre par\u00e9ntesis representa el correspondiente valor $f$, $f=h+g$, y que en caso de empate en valor $f$, la precedencia de expansi\u00f3n vendr\u00e1 dada por el orden alfab\u00e9tico de los nodos correspondientes):<br>",
    "options": [
      "a) E(20), D(22)",
      "b) B(20), E(20), D(22)",
      "c) E(20), D(21)",
      "d) B(20), E(21), D(22)"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>En el algoritmo A* basado en **grafo**, se mantiene una lista de nodos \"Cerrados\" (Explorados). Si la heur\u00edstica no es consistente (como ocurre aqu\u00ed, ya que $h(A)=25 \\not\\le c(A,C)+h(C) = 2+20=22$), la versi\u00f3n estricta del algoritmo en grafo **no reabre nodos que ya han sido cerrados**, aunque encuentre un camino mejor hacia ellos (este es el motivo por el que en la pregunta 2 del examen se afirma que A* en este problema encuentra el \u00f3ptimo \"de casualidad\").<br><br>Realizamos la traza paso a paso usando la ecuaci\u00f3n $f(n) = g(n) + h(n)$:<br><br>1. **Paso 1:** Se expande el inicial $A$.<br><br>- Genera $B$ ($g=5, h=16 \\rightarrow f=21$) y $C$ ($g=2, h=20 \\rightarrow f=22$).<br><br>- **Frontera:** `[B(21), C(22)]`. **Cerrados:** `{A}`.<br><br>2. **Paso 2:** Se expande $B$ (por tener el menor valor $f$).<br><br>- Genera $D$ ($g=5+7=12, h=10 \\rightarrow f=22$).<br><br>- **Frontera:** `[C(22), D(22)]` (por empate $f$, orden alfab\u00e9tico). **Cerrados:** `{A, B}`.<br><br>3. **Paso 3:** Se expande $C$.<br><br>- Genera $E$ ($g=2+10=12, h=8 \\rightarrow f=20$).<br><br>- Tambi\u00e9n encuentra una nueva ruta hacia $B$ con menor coste ($g=2+2=4 \\rightarrow f=20$).<br><br>- **Punto clave:** Como estamos en b\u00fasqueda sobre _grafo_, el algoritmo comprueba si el nodo $B$ ya ha sido expandido. Como $B$ ya est\u00e1 en la lista de Cerrados `{A, B}`, la nueva ruta hacia \u00e9l **se descarta** y el nodo no se reabre.<br><br>- **Frontera resultante:** Tras a\u00f1adir solo $E$, la frontera queda conformada por el nuevo nodo $E$ y el nodo $D$ que ya estaba esperando: **`[E(20), D(22)]`**.<br><br><br>Esta configuraci\u00f3n coincide exactamente con la opci\u00f3n **a**.<br>",
    "correct": 0,
    "category": "busqueda"
  },
  {
    "source": "examen_2023",
    "question": "En el mismo problema de la pregunta 1, \u00bfobtiene el algoritmo A* una soluci\u00f3n \u00f3ptima?<br>",
    "options": [
      "a) No, la heur\u00edstica no es admisible.",
      "b) No, la heur\u00edstica no es consistente.",
      "c) Si, ya que la heur\u00edstica es admisible.",
      "d) Si, pero de casualidad, ya que la heur\u00edstica no es consistente."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Para que el algoritmo A* garantice te\u00f3ricamente una soluci\u00f3n \u00f3ptima al recorrer un grafo, su heur\u00edstica debe ser consistente (mon\u00f3tona) y admisible. Una heur\u00edstica es admisible si nunca sobreestima el coste real hacia la meta. Si observamos el grafo del ejercicio, desde el nodo $E$ hasta la meta $G$ el coste real es de $2$, pero su estimaci\u00f3n heur\u00edstica marca $h(E) = 8$. Como $8 > 2$, la heur\u00edstica sobreestima flagrantemente el coste y **no es admisible** (y por consiguiente, tampoco es consistente).<br><br>Prueba adicional de que no es consistente (de A a C):<br><br>Una heur\u00edstica es consistente si el coste estimado desde un nodo a la meta no es mayor que el coste de dar un salto f\u00edsico hacia su vecino m\u00e1s la estimaci\u00f3n de dicho vecino. La inecuaci\u00f3n matem\u00e1tica que debes aplicar siempre es: $h(n)\u2264c(n,n\u2032)+h(n\u2032)$.<br><br>Para saber si C cumple la regla, calculamos lo mismo de siempre<br><br>- La estimaci\u00f3n dentro del nodo A es h(A)=25.<br>- El coste de la flecha para viajar de A hacia C es c(A,C)=2.<br>- La estimaci\u00f3n dentro del nodo C es h(C)=20.<br><br>- **El c\u00e1lculo:** Sustituimos los n\u00fameros en la inecuaci\u00f3n: \u00bfEs 25\u22642+20? Es decir, **\u00bfEs** 25\u226422**?** No, la inecuaci\u00f3n es falsa porque 25 es mayor que 22.<br><br>A pesar de esto, si ejecutamos el algoritmo paso a paso, A* acaba encontrando la ruta \u00f3ptima de coste 14. Al lograrlo con una heur\u00edstica que rompe las reglas te\u00f3ricas, lo hace estrictamente **\"de casualidad\"**. _(Nota: Descarta plantillas libres que marquen la opci\u00f3n 'c', ya que matem\u00e1ticamente la heur\u00edstica es inadmisible)._<br>",
    "correct": 3,
    "category": "busqueda"
  },
  {
    "source": "examen_2023",
    "question": "En el mismo problema de la pregunta 1, indica la secuencia del camino devuelto utilizando, esta vez, la b\u00fasqueda avara:<br>",
    "options": [
      "a) A $\\rightarrow$ B $\\rightarrow$ D $\\rightarrow$ G",
      "b) A $\\rightarrow$ C $\\rightarrow$ B $\\rightarrow$ D $\\rightarrow$ G",
      "c) A $\\rightarrow$ C $\\rightarrow$ E $\\rightarrow$ G",
      "d) Ninguno de los anteriores"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>A diferencia de A*, el algoritmo de B\u00fasqueda Avara (_Greedy Best-First_) es corto de miras y toma sus decisiones gui\u00e1ndose exclusivamente por el menor valor de la heur\u00edstica $h(n)$ en la frontera, ignorando por completo el coste real acumulado $g(n)$.<br><br>Ejecutando el recorrido:<br><br>1. Desde $A$, se abren los caminos hacia $B$ ($h=16$) y $C$ ($h=20$). Como $16 < 20$, la b\u00fasqueda avara elige $B$.<br><br>2. Desde $B$, se abre el camino a $D$ ($h=10$). Elige $D$.<br><br>3. Desde $D$, se abren caminos a $E$ ($h=8$) y $G$ ($h=0$). Elige la meta $G$.<br><br><br>El camino devuelto ciegamente es **A $\\rightarrow$ B $\\rightarrow$ D $\\rightarrow$ G**. _(Nota: Las plantillas no oficiales de Wuolah indican la opci\u00f3n C, pero ese es el camino que devuelve A_, no la b\u00fasqueda avara).*<br>",
    "correct": 0,
    "category": "busqueda"
  },
  {
    "source": "examen_2023",
    "question": "En la b\u00fasqueda de coste uniforme:<br>",
    "options": [
      "a) Cada operador aplicable siempre tendr\u00e1 el mismo coste.",
      "b) Cualquier camino soluci\u00f3n encontrado tendr\u00e1 siempre el mismo coste.",
      "c) Cualquier camino soluci\u00f3n encontrado tendr\u00e1 siempre el mismo n\u00famero de pasos.",
      "d) Cualquier camino soluci\u00f3n encontrado tendr\u00e1 siempre el m\u00ednimo n\u00famero de pasos.",
      "e) Ninguna de las anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>La B\u00fasqueda de Coste Uniforme (UCS) es un algoritmo \u00f3ptimo guiado exclusivamente por la funci\u00f3n $g(n)$ (coste acumulado del camino). Su garant\u00eda te\u00f3rica es que encuentra el camino de **m\u00ednimo coste absoluto** hacia la meta.<br><br>- La a) es falsa, los operadores pueden (y suelen) tener costes distintos.<br><br>- La b) es falsa/ambigua: el algoritmo devolver\u00e1 el camino de coste m\u00ednimo, no significa que todos los caminos imaginables del grafo midan lo mismo.<br><br>- Las c) y d) son falsas porque la optimizaci\u00f3n por pasos (m\u00ednimo n\u00famero de saltos) es caracter\u00edstica exclusiva de la **B\u00fasqueda en Amplitud (BFS)**, no de UCS. Por ello, la opci\u00f3n e) es la \u00fanica l\u00f3gicamente rigurosa.<br><br>",
    "correct": 4,
    "category": "busqueda"
  },
  {
    "source": "examen_2023",
    "question": "En el algoritmo de profundidad iterativa se cumple que la cantidad de nodos hoja en la iteraci\u00f3n \"$i$\" es siempre mayor que la suma acumulada de todos los nodos generados previamente en las \"$i-1$\" iteraciones anteriores:<br>",
    "options": [
      "a) Cierto.",
      "b) Depender\u00e1 del n\u00famero de iteraciones \"$i$\".",
      "c) Depender\u00e1 del factor de ramificaci\u00f3n.",
      "d) Falso."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Matem\u00e1ticamente, en un \u00e1rbol de b\u00fasqueda con un factor de ramificaci\u00f3n constante $b$, el n\u00famero de nodos hoja (frontera) en el nivel de profundidad $d$ (o iteraci\u00f3n $i$) es $b^i$. La suma total de todos los nodos generados en las iteraciones previas es una progresi\u00f3n geom\u00e9trica $\\sum_{k=0}^{i-1} b^k = \\frac{b^i - 1}{b - 1}$.<br><br>Para que la base actual $b^i$ sea mayor que todos los nodos anteriores combinados $\\frac{b^i - 1}{b - 1}$, la inecuaci\u00f3n exige estrictamente que el factor de ramificaci\u00f3n $b$ sea mayor o igual a 2. Por ende, la afirmaci\u00f3n no es un axioma absoluto, sino que depende matem\u00e1ticamente del factor de ramificaci\u00f3n.<br>",
    "correct": 2,
    "category": "busqueda"
  },
  {
    "source": "examen_2023",
    "question": "En el contexto del algoritmo de escalada en b\u00fasqueda local, el siguiente \u00e1rbol de b\u00fasqueda se corresponde con una situaci\u00f3n de:<br><img src=\"../../2026/examenes%20SI/arbol1.png\" style=\"max-width:100%; border-radius:8px; margin: 10px 0;\"><br>",
    "options": [
      "a) M\u00ednimo local.",
      "b) M\u00e1ximo local.",
      "c) Meseta.",
      "d) Cresta.",
      "e) Ninguna de las anteriores, ya que dicho desarrollo nunca podr\u00eda darse aplicando la b\u00fasqueda de escalada."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Se trata de una \"pregunta trampa\" cl\u00e1sica. A diferencia de A* o B\u00fasqueda en Anchura, el algoritmo de Escalada Simple (_Hill-Climbing_) pertenece a la familia de m\u00e9todos de **B\u00fasqueda Local**. La caracter\u00edstica te\u00f3rica definitoria de esta familia es que **no conservan ni generan un \"\u00e1rbol de b\u00fasqueda\" en memoria** (operan sin historial). Solamente guardan el \"estado actual\" y eval\u00faan a sus vecinos inmediatos para decidir el siguiente paso. Por lo tanto, es algor\u00edtmica y estructuralmente imposible que _Hill-Climbing_ produzca la representaci\u00f3n de un \u00e1rbol de exploraci\u00f3n.<br>",
    "correct": 4,
    "category": "busqueda"
  },
  {
    "source": "examen_2023",
    "question": "Se\u00f1ala la respuesta correcta:<br>",
    "options": [
      "a) Una de las ventajas fundamentales de los m\u00e9todos declarativos de representaci\u00f3n del conocimiento es que facilitan trabajar con informaci\u00f3n de car\u00e1cter probabil\u00edstico.",
      "b) Los m\u00e9todos procedimentales son m\u00e1s adecuados para la codificaci\u00f3n de conocimiento fruto de la experiencia.",
      "c) En los m\u00e9todos declarativos la incorporaci\u00f3n de nuevo conocimiento suele implicar la recodificaci\u00f3n del ya existente.",
      "d) Ninguna de las anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>En la representaci\u00f3n del conocimiento, los m\u00e9todos procedimentales (cuyo m\u00e1ximo exponente son los Sistemas de Producci\u00f3n basados en reglas _IF-THEN_) nacieron espec\u00edficamente para capturar las heur\u00edsticas y atajos mentales de los expertos humanos (conocimiento fruto de la experiencia o emp\u00edrico).<br><br>- La a) es falsa: los m\u00e9todos declarativos puros (L\u00f3gica) son formales y fr\u00e1giles ante la incertidumbre; esto se gestiona con otros paradigmas como Redes Bayesianas.<br><br>- La c) es falsa: la mayor virtud de los modelos declarativos y modulares (como la base de hechos/reglas) es que se puede incorporar nuevo conocimiento **a\u00f1adiendo axiomas a la base** sin necesidad de alterar o recodificar todo el motor.<br><br>",
    "correct": 1,
    "category": "representacion"
  },
  {
    "source": "examen_2023",
    "question": "En el contexto de un sistema de producci\u00f3n, se parte de la siguiente base de reglas y estado de la Memoria Activa inicial ($M_0$):<br>- **R1:** $A \\land B \\implies C$<br>- **R2:** $E \\lor F \\implies D$<br>- **R3:** $D \\land C \\implies X$<br>- **R4:** $B \\land D \\implies R$<br>- **R5:** $X \\land R \\implies H$<br>- **$M_0$** = $\\{A, B, E\\}$ _(Nota: $H$ es la meta buscada)_.<br>**Configuraci\u00f3n del Motor:** Encadenamiento progresivo. B\u00fasqueda en profundidad, con la ejecuci\u00f3n de la regla cuya premisa contenga el elemento en orden alfab\u00e9tico mayor de las que hayan sido activadas m\u00e1s recientemente (asumiendo que $A > B > C \\dots$). \u00bfCu\u00e1l es la secuencia de ejecuci\u00f3n de las reglas?<br>",
    "options": [
      "a) R2 $\\rightarrow$ R1 $\\rightarrow$ R3 $\\rightarrow$ R4 $\\rightarrow$ R5",
      "b) R1 $\\rightarrow$ R2 $\\rightarrow$ R3 $\\rightarrow$ R4 $\\rightarrow$ R5",
      "c) R2 $\\rightarrow$ R1 $\\rightarrow$ R4 $\\rightarrow$ R3 $\\rightarrow$ R5",
      "d) R1 $\\rightarrow$ R2 $\\rightarrow$ R4 $\\rightarrow$ R3 $\\rightarrow$ R5"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Un motor de inferencia cl\u00e1sico ejecuta **solo una regla por ciclo**. La estrategia de desempate dictamina que gana la regla \"m\u00e1s reciente\" (las que acaban de activarse en ese ciclo). Si hay empate de novedad, gana la que tenga la letra con mayor prioridad en el abecedario en sus premisas.<br><br>**CICLO 1:**<br><br>- **Memoria Activa (MA):** $\\{A, B, E\\}$<br><br>- **Conjunto Conflicto (CC):** Se activan **R1** (cumple $A \\land B$) y **R2** (cumple $E$).<br><br>- **Resoluci\u00f3n:** Ambas son recientes. Empate. Miramos sus premisas: $R1$ tiene la **A**, $R2$ tiene la **E**. Gana la $R1$ por orden alfab\u00e9tico.<br><br>- **Ejecuci\u00f3n:** Se dispara **R1**. A\u00f1adimos $C$ a la memoria.<br><br><br>**CICLO 2:**<br><br>- **MA:** $\\{A, B, E, C\\}$<br><br>- **CC:** Revisamos si la nueva letra $C$ activa algo nuevo. $R3$ necesita la $D$, as\u00ed que no. En el Conjunto Conflicto solo nos queda esperando la **R2**.<br><br>- **Ejecuci\u00f3n:** Se dispara **R2**. A\u00f1adimos $D$ a la memoria.<br><br><br>**CICLO 3:**<br><br>- **MA:** $\\{A, B, E, C, D\\}$<br><br>- **CC:** Al entrar la $D$, se activan de golpe dos reglas nuevas: **R3** (cumple $D \\land C$) y **R4** (cumple $B \\land D$).<br><br>- **Resoluci\u00f3n:** Ambas son hiper-recientes. Empate. Miramos sus premisas: $R3$ tiene $\\{C, D\\}$ (gana la **C**). $R4$ tiene $\\{B, D\\}$ (gana la **B**). Como la B va antes en el abecedario, gana $R4$.<br><br>- **Ejecuci\u00f3n:** Se dispara **R4**. A\u00f1adimos $R$ a la memoria.<br><br><br>**CICLO 4:**<br><br>- **MA:** $\\{A, B, E, C, D, R\\}$<br><br>- **CC:** La nueva letra $R$ no activa $R5$ todav\u00eda (nos falta la $X$). En el Conjunto Conflicto nos queda esperando la **R3** desde el ciclo anterior.<br><br>- **Ejecuci\u00f3n:** Se dispara **R3**. A\u00f1adimos $X$ a la memoria.<br><br><br>**CICLO 5:**<br><br>- **MA:** $\\{A, B, E, C, D, R, X\\}$<br><br>- **CC:** Al entrar la $X$, se activa por fin la regla **R5** (cumple $X \\land R$).<br><br>- **Ejecuci\u00f3n:** Se dispara **R5**. Llegamos a la meta $H$.<br><br><br>**Traza final:** $R1 \\rightarrow R2 \\rightarrow R4 \\rightarrow R3 \\rightarrow R5$.<br>",
    "correct": 3,
    "category": "representacion"
  },
  {
    "source": "examen_2023",
    "question": "Dada la siguiente codificaci\u00f3n de posibles Manifestaciones ($M$) e Interpretaciones ($I$) en un contexto de razonamiento categ\u00f3rico:<br>**Tabla de Manifestaciones (M):**<br>||**m1**|**m2**|**m3**|**m4**|**m5**|**m6**|**m7**|**m8**|<br>|---|---|---|---|---|---|---|---|---|<br>|**M(1)**|0|0|0|0|1|1|1|1|<br>|**M(2)**|0|0|1|1|0|0|1|1|<br>|**M(3)**|0|1|0|1|0|1|0|1|<br>**Tabla de Interpretaciones (I):**<br>||**i1**|**i2**|**i3**|**i4**|<br>|---|---|---|---|---|<br>|**I(1)**|0|0|1|1|<br>|**I(2)**|0|1|0|1|<br>Y sea el siguiente conjunto de reglas:<br>> R1: $M(1) \\vee M(2) \\vee M(3) \\rightarrow I(1) \\vee I(2)$<br>><br>> R2: $I(2) \\rightarrow \\neg M(2) \\wedge M(1)$<br>><br>> R3: $I(1) \\vee \\neg I(2) \\rightarrow M(2) \\wedge M(3)$<br>Si en un momento dado se da la ocurrencia $f = M(1) \\wedge \\neg M(2) \\wedge \\neg M(3)$, entonces podr\u00edamos deducir que:<br>",
    "options": [
      "a) La interpretaci\u00f3n I(1) es falsa.",
      "b) La interpretaci\u00f3n I(1) es verdadera.",
      "c) La interpretaci\u00f3n I(2) es falsa.",
      "d) Ninguna de las anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Analizamos l\u00f3gicamente la manifestaci\u00f3n entregada. La evidencia $f$ nos dice categ\u00f3ricamente que $M(1)$ es Verdadera ($1$), $M(2)$ es Falsa ($0$), y $M(3)$ es Falsa ($0$).<br><br>Si evaluamos esto en la **Regla 3** ($I(1) \\vee \\neg I(2) \\rightarrow M(2) \\wedge M(3)$), observamos que el consecuente ($M(2) \\wedge M(3)$) es forzosamente **Falso** (porque carecemos de ambas manifestaciones).<br><br>Por las reglas b\u00e1sicas de la implicaci\u00f3n l\u00f3gica (_Modus Tollens_), si el consecuente de una regla es falso, su antecedente no puede ser verdadero. Esto exige que el bloque $(I(1) \\vee \\neg I(2))$ sea obligatoriamente **Falso**.<br><br>Para que una disyunci\u00f3n (\"O\") sea falsa, ambas partes deben ser falsas: por tanto, **$I(1)$ es Falsa** y $\\neg I(2)$ es Falsa (lo que significa que $I(2)$ es Verdadera). La deducci\u00f3n l\u00f3gica ineludible coincide a la perfecci\u00f3n con la opci\u00f3n a).<br>",
    "correct": 0,
    "category": "razonamiento"
  },
  {
    "source": "examen_2023",
    "question": "Con la misma situaci\u00f3n del ejercicio anterior y sabiendo que:<br>- $P(i1) = 0.3 \\quad ; \\quad P(i2) = 0.2 \\quad ; \\quad P(i3) = 0.1 \\quad ; \\quad P(i4) = 0.4$<br>- $P(m1|i1) = 1.0 \\quad ; \\quad P(m1|i3) = 0.5 \\quad ; \\quad P(m4|i3) = 0.2 \\quad ; \\quad P(m5|i2) = 0.8 \\quad ; \\quad P(m6|i4) = 0.3$<br>\u00bfQu\u00e9 conjunto de interpretaciones es m\u00e1s probable?<br>",
    "options": [
      "a) $\\neg I(1) \\wedge \\neg I(2)$",
      "b) $\\neg I(1) \\wedge I(2)$",
      "c) $I(1) \\wedge \\neg I(2)$",
      "d) $I(1) \\wedge I(2)$"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>El \"ejercicio anterior\" fijaba como escenario emp\u00edrico la ocurrencia $f = M(1) \\wedge \\neg M(2) \\wedge \\neg M(3)$. Si observamos la matriz de manifestaciones aportada en la pregunta 9, esta combinaci\u00f3n booleana $(1, 0, 0)$ corresponde exactamente a la columna del vector **m5**.<br><br>Al aplicar el Teorema de Bayes para hallar la interpretaci\u00f3n m\u00e1s probable dada la evidencia $m5$, buscamos maximizar la relaci\u00f3n: $P(i_k | m5) \\propto P(m5 | i_k) \\cdot P(i_k)$.<br><br>Revisando los datos condicionales brindados, la \u00fanica verosimilitud que existe en el conocimiento probabil\u00edstico sobre $m5$ apunta directamente a la interpretaci\u00f3n $i_2$: **$P(m5 | i2) = 0.8$**. Las dem\u00e1s interpretaciones ($i1, i3, i4$) son l\u00f3gicamente incompatibles con el vector $m5$ debido a la Base de Reglas (por ejemplo, vimos en la pregunta 9 que si $m5$ ocurre, $I(1)$ tiene que ser Falsa e $I(2)$ Verdadera, lo cual anula de base a $i1, i3$ e $i4$).<br><br>Por tanto, la interpretaci\u00f3n dominante absoluta es $i_2$, que, leyendo la tabla de interpretaciones de la pregunta anterior, corresponde a los valores booleanos $I(1)=0$ e $I(2)=1$, cuya representaci\u00f3n l\u00f3gica es **$\\neg I(1) \\wedge I(2)$**.<br><br>_(Nota: Evita las plantillas libres que asignen la opci\u00f3n 'C'. Si fuera $i_3$, forzar\u00eda a que $I(1)$ fuera cierta, lo cual disparar\u00eda la Regla 3 obligando a que existieran M(2) y M(3), lo que sabemos que es falso porque nuestra evidencia base es m5)._<br>",
    "correct": 1,
    "category": "razonamiento"
  },
  {
    "source": "examen_2023",
    "question": "Al recibir las entradas una neurona artificial, estas se combinan en primer lugar mediante una:<br>",
    "options": [
      "a) Funci\u00f3n de activaci\u00f3n",
      "b) Regla Delta",
      "c) Regla de propagaci\u00f3n",
      "d) Funci\u00f3n de transferencia",
      "e) Funci\u00f3n de validaci\u00f3n"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La asimilaci\u00f3n matem\u00e1tica en una c\u00e9lula artificial opera en dos etapas secuenciales. La \"Regla de propagaci\u00f3n\" constituye siempre el primer paso algor\u00edtmico, encarg\u00e1ndose de recopilar y combinar las se\u00f1ales del entorno exterior (generalmente mediante un sumatorio lineal ponderado por los pesos y sumando el _bias_). Posteriormente, ese potencial bruto pasar\u00e1 por la funci\u00f3n de transferencia/activaci\u00f3n.<br>",
    "correct": 2,
    "category": "feedforward"
  },
  {
    "source": "examen_2023",
    "question": "El ADALINE...<br>",
    "options": [
      "a) No tiene capas ocultas",
      "b) Tiene una funci\u00f3n de transferencia de tipo sigmoidal",
      "c) No puede ser entrenado con la Regla Delta",
      "d) Puede realizar aproximaciones no lineales",
      "e) Es capaz de aprender cualquier relaci\u00f3n entrada/salida"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>El modelo ADALINE (_Adaptive Linear Neuron_) es una arquitectura de red neuronal estrictamente monocapa. Al carecer de capas ocultas y utilizar una funci\u00f3n de activaci\u00f3n puramente lineal, no puede trazar fronteras de decisi\u00f3n curvas ni resolver problemas no lineales (como el operador XOR).<br>",
    "correct": 0,
    "category": "neurona"
  },
  {
    "source": "examen_2023",
    "question": "La Regla Delta...<br>",
    "options": [
      "a) Modifica los pesos en el sentido (signo) del cambio realizado en el ciclo anterior",
      "b) Modifica los pesos en el sentido (signo) opuesto del cambio realizado en el ciclo anterior",
      "c) Modifica los pesos en el sentido (signo) de la pendiente del error",
      "d) Modifica los pesos en el sentido (signo) opuesto de la pendiente del error",
      "e) Todas son falsas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>La Regla Delta se fundamenta en el descenso por el gradiente. Para minimizar el margen de error entre la salida obtenida y la deseada, los pesos deben ajustarse restando el valor del gradiente. Es decir, los pesos se desplazan espacialmente de manera rigurosa en la direcci\u00f3n diametralmente contraria u \"opuesta\" a la pendiente calculada de la funci\u00f3n de error.<br>",
    "correct": 3,
    "category": "feedforward"
  },
  {
    "source": "examen_2023",
    "question": "Al entrenar una RNA, el algoritmo de entrenamiento dice que la modificaci\u00f3n de los pesos se debe de multiplicar por una constante llamada...<br>",
    "options": [
      "a) Momento",
      "b) Gradiente",
      "c) Delta",
      "d) Tasa de aprendizaje",
      "e) Bias"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>En la ecuaci\u00f3n de retropropagaci\u00f3n del error, la magnitud del cambio que dictamina la derivada parcial se modula a trav\u00e9s de un escalar constante crucial llamado \"Tasa de aprendizaje\" ($\\alpha$ o $\\eta$). Este escalar determina \"el tama\u00f1o del paso\" que da el algoritmo, regulando la velocidad a la que la red converge.<br>",
    "correct": 3,
    "category": "feedforward"
  },
  {
    "source": "examen_2023",
    "question": "Si durante el entrenamiento de una RNA, en un ciclo se obtiene un gradiente de 0, esto quiere decir...<br>",
    "options": [
      "a) Se est\u00e1 muy lejos de un m\u00ednimo",
      "b) Se est\u00e1 muy cerca de un m\u00ednimo, pero no en \u00e9l",
      "c) Se est\u00e1 en un m\u00ednimo, y es el global",
      "d) Se est\u00e1 en un m\u00ednimo, pero no se sabe si es el global o uno local",
      "e) El error es 0"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Cuando la pendiente (gradiente) de la superficie del error alcanza 0, la recta tangente es paralela, indicando que el algoritmo ha aterrizado en el fondo de un \"valle\". El problema cr\u00edtico del descenso del gradiente ciego es que, sin examinar todo el hiperespacio, la red neuronal no tiene forma matem\u00e1tica de discernir si est\u00e1 en el fondo absoluto (m\u00ednimo global) o simplemente atrapada en una depresi\u00f3n sub\u00f3ptima (m\u00ednimo local).<br>",
    "correct": 3,
    "category": "neurona"
  },
  {
    "source": "examen_2023",
    "question": "Atendiendo a las capacidades funcionales de un Perceptr\u00f3n cl\u00e1sico monocapa:<br>",
    "options": [
      "a) Puede resolver problemas no linealmente separables.",
      "b) Utiliza funciones de base radial.",
      "c) Es capaz de aprender la funci\u00f3n XOR sin capas adicionales.",
      "d) Tiene propiedades bayesianas innatas para la incertidumbre.",
      "e) Todas son falsas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Minsky y Papert demostraron matem\u00e1ticamente en 1969 las limitaciones fundamentales de los perceptrones simples (monocapa): no pueden trazar fronteras complejas y son incapaces de operar si las clases de datos de entrada no son estricta y r\u00edgidamente separables mediante una \u00fanica l\u00ednea recta (hiperplano).<br>",
    "correct": 4,
    "category": "neurona"
  },
  {
    "source": "examen_2023",
    "question": "El n\u00famero \u00f3ptimo de neuronas que se debe incluir en las capas ocultas de un Perceptr\u00f3n Multicapa:<br>",
    "options": [
      "a) Se calcula siempre como la suma de nodos de la capa de entrada y salida",
      "b) Depende del problema a resolver",
      "c) Debe ser igual a 2N+1 por el Teorema de Kolmogorov",
      "d) Debe elegirse de forma estoc\u00e1stica e inmutable",
      "e) Ninguna es correcta"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>En la arquitectura conexionista no existe un postulado anal\u00edtico cerrado universal que determine cu\u00e1ntas neuronas ocultas son la cifra perfecta. La cantidad de nodos ocultos constituye un hiperpar\u00e1metro emp\u00edrico que depende directamente de la complejidad y no-linealidad espec\u00edfica de los datos del problema a resolver.<br>",
    "correct": 1,
    "category": "neurona"
  },
  {
    "source": "examen_2023",
    "question": "\u00bfEs factible emplear un perceptr\u00f3n multicapa para mapear relaciones no separables linealmente que presentan un alto grado de no-linealidad geom\u00e9trica?<br>",
    "options": [
      "a) S\u00ed, pero s\u00f3lo si el algoritmo emplea regularizaci\u00f3n estoc\u00e1stica",
      "b) No, ninguna red neuronal logra superar la barrera del XOR en dominios complejos",
      "c) No, se debe usar obligatoriamente computaci\u00f3n evolutiva o l\u00f3gica borrosa",
      "d) S\u00ed, siempre y cuando la red devuelva resultados discretizados con escalones",
      "e) En cualquier caso, si la red tiene la complejidad suficiente"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>El Teorema de Aproximaci\u00f3n Universal demuestra formalmente que cualquier red conexionista _Feed-forward_ equipada con funciones de activaci\u00f3n no lineales es capaz de modelar o aproximar funciones continuas arbitrarias (relaciones extremadamente no-lineales), siempre y cuando posea el n\u00famero de capas ocultas o la complejidad interna adecuada.<br>",
    "correct": 4,
    "category": "feedforward"
  },
  {
    "source": "examen_2023",
    "question": "\u00bfCu\u00e1l ser\u00e1 el comportamiento del sistema si, tras entrenar con \u00e9xito una RNA, se le suministran patrones novedosos ubicados muy fuera de las fronteras topol\u00f3gicas del espacio de generalizaci\u00f3n aprendido?<br>",
    "options": [
      "a) Avisar\u00e1 algor\u00edtmicamente mediante una excepci\u00f3n matem\u00e1tica",
      "b) Aplicar\u00e1 autoorganizaci\u00f3n din\u00e1mica en caliente para asimilar la nueva entrada",
      "c) Se adaptar\u00e1 autom\u00e1ticamente bas\u00e1ndose en los bias",
      "d) Devolver\u00e1 el \u00faltimo patr\u00f3n correcto almacenado en la memoria",
      "e) Dar\u00e1 una salida arbitraria e imprevisible"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Las Redes Neuronales son excelentes interpolando, pero p\u00e9simas extrapolando. Si se inyecta un patr\u00f3n \"alien\u00edgena\" fuera de la distribuci\u00f3n estad\u00edstica vista en el entrenamiento, la arquitectura inyectar\u00e1 ciegamente el valor a trav\u00e9s de la matriz de pesos congelados, provocando una respuesta computada totalmente espuria e imprevisible.<br>",
    "correct": 4,
    "category": "feedforward"
  },
  {
    "source": "examen_2023",
    "question": "\u00bfQu\u00e9 efecto fenomenol\u00f3gico ocurre al someter a la red de un proceso iterativo en donde la Tasa de Aprendizaje se ha configurado con un escalar demasiado elevado?<br>",
    "options": [
      "a) Se converger\u00e1 matem\u00e1ticamente al m\u00ednimo global de manera ultrarr\u00e1pida",
      "b) Se correr\u00e1 el riesgo de oscilar en torno al m\u00ednimo",
      "c) Se provocar\u00e1 un sub-ajuste o underfitting autom\u00e1tico en los bias",
      "d) Se bloquear\u00e1 la capacidad de generalizaci\u00f3n estoc\u00e1stica",
      "e) La red entrar\u00e1 irreversiblemente en un efecto de parada temprana"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Si la tasa de aprendizaje es demasiado alta, el incremento del vector de ajuste ser\u00e1 gigantesco, provocando que la red efect\u00fae saltos ciegos que errar\u00e1n el fondo del valle. En consecuencia, el error rebotar\u00e1 sistem\u00e1ticamente de una ladera a otra, generando oscilaciones ca\u00f3ticas y divagaciones sin estabilizarse jam\u00e1s.<br>",
    "correct": 1,
    "category": "neurona"
  },
  {
    "source": "examen_2023",
    "question": "El hecho de entrenar una RNA mediante un algoritmo de entrenamiento basado en el gradiente descendente (con pasos \u00ednfimos) tiene el problema de que...<br>",
    "options": [
      "a) Nunca va a encontrar el m\u00ednimo global",
      "b) Al acercarse a un m\u00ednimo, se va a oscilar de un lado a otro, sin lograr pararse en \u00e9l",
      "c) Se va a acercar a un m\u00ednimo de incrementos muy peque\u00f1os",
      "d) Es posible que se quede parado en alg\u00fan m\u00ednimo local",
      "e) Va a necesitar un n\u00famero muy alto de ciclos para alcanzar un error aceptable"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)** _(Nota: La 'E' tambi\u00e9n es un problema temporal, pero la 'D' es la falla catastr\u00f3fica del modelo)_<br><br>Debido a que los pasos que efect\u00faa el vector iterativo son peque\u00f1os, si en la superficie de coste encuentra cualquier leve protuberancia o bache de \"m\u00ednimo local\", el gradiente morir\u00e1. Al carecer de inercia suficiente para saltar y franquear la cresta, el entrenamiento quedar\u00e1 estancado de forma permanente en un estado sub\u00f3ptimo.<br>",
    "correct": 3,
    "category": "neurona"
  },
  {
    "source": "examen_2023",
    "question": "En una RNA, el conjunto de test...<br>",
    "options": [
      "a) Se utiliza para evaluar la capacidad de generalizaci\u00f3n de la red",
      "b) Debe de ser linealmente separable",
      "c) Produce la modificaci\u00f3n de los pesos mediante el algoritmo correspondiente",
      "d) No produce la modificaci\u00f3n de los pesos, pero controla el proceso de entrenamiento, y lo para si es necesario",
      "e) Todas son falsas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>La m\u00e9trica final e indiscutible de rendimiento para saber si la red ha generalizado correctamente el problema hacia el mundo real (y no solo ha memorizado) se mide obligatoriamente evaluando su error en el conjunto de prueba (_Test Set_), un lote de datos absolutamente virgen que la red no ha visto ni en la fase de entrenamiento ni en la de validaci\u00f3n/tuneo.<br>",
    "correct": 0,
    "category": "neurona"
  },
  {
    "source": "examen_2023",
    "question": "Las t\u00e9cnicas de regularizaci\u00f3n permiten...<br>",
    "options": [
      "a) Entrenar una RNA hasta alcanzar un error de 0",
      "b) Saltar m\u00ednimos locales al entrenar una RNA",
      "c) Eliminar el ruido del conjunto de entrenamiento",
      "d) Resolver problemas de clasificaci\u00f3n no linealmente separables",
      "e) Evitar el sobreentrenamiento al entrenar una RNA"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Las t\u00e9cnicas de regularizaci\u00f3n (como el _Early Stopping_, _Dropout_, o las penalizaciones L1/L2) tienen una \u00fanica misi\u00f3n fundamental: penalizar la memorizaci\u00f3n excesiva. Fuerzan a la red a mantener modelos simples o a abortar a tiempo, garantizando que el modelo prevenga el temido \"sobreentrenamiento\" (_overfitting_) provocado por absorber el ruido de los datos.<br>",
    "correct": 4,
    "category": "feedforward"
  },
  {
    "source": "examen_2023",
    "question": "Para usar una RNA para resolver un problema de clasificaci\u00f3n con dos clases, sin posibilidad de que un patr\u00f3n no pertenezca a ninguna de las dos clases, el n\u00famero de neuronas de salidas que hay que usar es...<br>",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4",
      "e) 5"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>En un escenario predictivo estrictamente binario y mutuamente excluyente, disponer de dos neuronas de salida sobreparametriza el modelo de manera ineficiente. El problema se resuelve empleando **1 sola neurona** provista de una funci\u00f3n sigmoidal: si su salida es $< 0.5$ se infiere la clase A, y si es $\\ge 0.5$ se infiere ineludiblemente la clase B.<br>",
    "correct": 0,
    "category": "feedforward"
  },
  {
    "source": "examen_2023",
    "question": "La autoorganizaci\u00f3n en Sistemas Conexionistas...<br>",
    "options": [
      "a) Permite que exista un jefe que determine el comportamiento de los patrones",
      "b) Impide un comportamiento emergente del sistema",
      "c) Facilita que la informaci\u00f3n se guarde en las neuronas de entrada",
      "d) Permite que se obtenga redundancia en los datos",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>La autoorganizaci\u00f3n es un aprendizaje **no supervisado** (carece de \"jefe\", descartando a). Se fundamenta en originar comportamiento emergente (descartando b). El conocimiento no reside algor\u00edtmicamente en las celdas receptoras, sino proyectado en la matriz de pesos sin\u00e1pticos (descartando c). Finalmente, la redundancia de datos es un requisito de entrada necesario para que la red descubra correlaciones, no un subproducto obtenido (descartando d).<br>",
    "correct": 4,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "En la corteza cerebral (y en su emulaci\u00f3n mediante redes SOM)...<br>",
    "options": [
      "a) La ubicaci\u00f3n espacial de las neuronas constituye un mapa organizado",
      "b) Todas las neuronas id\u00e9nticas realizan la misma funci\u00f3n",
      "c) La ubicaci\u00f3n de las neuronas no es significativa",
      "d) Todas las anteriores son correctas",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>A diferencia de los perceptrones cl\u00e1sicos, en los Mapas de Kohonen (SOM) la topolog\u00eda espacial es fundamental. Modelando de manera fiel la corteza somatosensorial del cerebro mam\u00edfero, la red se ve forzada a organizar las unidades competitivas espacialmente; las neuronas ubicadas geom\u00e9tricamente adyacentes se especializan en excitarse ante est\u00edmulos del entorno que tambi\u00e9n son similares entre s\u00ed.<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "Si los patrones de entrada de un problema tienen dos caracter\u00edsticas o atributos, una Growing Cell Structure (GCS) que lo resuelva tendr\u00e1...<br>",
    "options": [
      "a) 1 neurona de entrada",
      "b) 4 neuronas de entrada",
      "c) 6 neuronas de entrada",
      "d) 8 neuronas de entrada",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Las redes no supervisadas exigen un mapeo isom\u00f3rfico directo con su entorno. La cardinalidad de la capa de entrada debe coincidir rigurosamente en formato 1 a 1 con la dimensionalidad de las magnitudes vectoriales a percibir. Por tanto, si el patr\u00f3n cuenta con 2 atributos de entrada, la arquitectura exigir\u00e1 obligatoriamente **2 neuronas base receptoras**. Como el n\u00famero 2 no aparece entre las alternativas listadas, todas son incorrectas.<br>",
    "correct": 4,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "Diferencias entre SOM y GCS son:<br>",
    "options": [
      "a) La GCS no consideran neuronas vecinas a la ganadora",
      "b) Un SOM considera un radio de vecindad de diferentes niveles",
      "c) Las GCS consideran solamente vecinas directas a la ganadora",
      "d) No hay diferencia en cuesti\u00f3n de vecindario, la diferencia est\u00e1 en la variaci\u00f3n din\u00e1mica del numero de neuronas de la capa competitiva",
      "e) B y C son correctas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>El algoritmo SOM cl\u00e1sico aplica su atenuaci\u00f3n gaussiana a todo un parche extenso o vecindario (afectando de manera degradada a neuronas a \"diferentes niveles\" de proximidad). Por el contrario, la topolog\u00eda de la _Growing Cell Structure_ (GCS) es mucho m\u00e1s puntual y agresiva, limit\u00e1ndose algor\u00edtmicamente y de forma exclusiva a actualizar solamente a los nodos vecinos colindantes unidos a la BMU mediante un enlace topol\u00f3gico (\"vecinas directas\").<br>",
    "correct": 4,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "Una GCS...<br>",
    "options": [
      "a) Est\u00e1 siempre orientada a clasificaci\u00f3n",
      "b) Permite a\u00f1adir neuronas en regiones con menos patrones de entrenamiento",
      "c) Tiene una capa de salida formada por diferentes estructuras k-dimensionales b\u00e1sicas a la vez",
      "d) No se entrena, sus pesos se construyen a partir de los patrones de entrada",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Se rechazan las opciones porque: A es falsa (es de clustering no supervisado, no de clasificaci\u00f3n _per se_). B es diametralmente falsa, ya que su gran innovaci\u00f3n es a\u00f1adir din\u00e1micamente neuronas justo en las regiones con _mayor error_ y densidad de patrones, no en las de menos. C es falsa porque se apoya en una estructura dimensional \u00fanica mediante s\u00edmplices o k-dimensionalidades discretas en su crecimiento. D es falsa porque evidentemente la red exige someterse a m\u00faltiples fases de entrenamiento.<br>",
    "correct": 4,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "Los Mapas Autoorganizativos (SOM) tienen normalmente...<br>",
    "options": [
      "a) Una capa de entrada, tres o cuatro capas ocultas y una capa de salida",
      "b) Una \u00fanica capa que es de entrada y salida",
      "c) Una capa de entrada y una capa de salida",
      "d) Una capa de neuronas recurrentes y autoorganizables",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)** _(O la opci\u00f3n \"c\" si el docente la considera formal. Nota explicativa: En las plantillas oficiales de la UDC, la respuesta oficial validada es la \"e\")._<br><br>Esta pregunta puede tener \"truco\" sem\u00e1ntico, raz\u00f3n por la cual la plantilla oficial dictamin\u00f3 la 'e'. A nivel estrictamente computacional, la red SOM solo posee **1 \u00fanica capa** de c\u00e9lulas que procesan pesos (la capa competitiva topol\u00f3gica). La capa de \"entrada\" es un mero bus transparente que transmite las se\u00f1ales, no cuenta como capa de c\u00e1lculo, por lo que llamarle arquitectura \"de dos capas (entrada y salida)\" es un error te\u00f3rico en el conexionismo estricto de Kohonen.<br>",
    "correct": 4,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "En el aprendizaje no supervisado...<br>",
    "options": [
      "a) Se consiguen grupos con elementos similares dentro del mismo grupo.",
      "b) La autoorganizaci\u00f3n de la red permite hallar las clases supervisadas.",
      "c) Se trabaja con patrones etiquetados con tipo o clase.",
      "d) Si un patr\u00f3n de entrada no pertenece a ning\u00fan grupo reconocido previamente, se descarta siempre.",
      "e) La B y la C son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>El objetivo principal del aprendizaje no supervisado (como el clustering o las redes SOM) es descubrir estructuras ocultas en datos no etiquetados. El sistema agrupa los patrones bas\u00e1ndose exclusivamente en su similitud matem\u00e1tica (distancia eucl\u00eddea), logrando que los elementos dentro de un mismo grupo (cl\u00faster) sean muy similares entre s\u00ed, y muy dispares respecto a los de otros grupos. (Las opciones B y C son falsas por definici\u00f3n al referirse a etiquetas/supervisi\u00f3n).<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "En un SOM...<br>",
    "options": [
      "a) Cada neurona de la capa competitiva representa siempre a un solo patr\u00f3n de entrada.",
      "b) Cada neurona de la capa competitiva puede representar a un grupo de patrones de entrada.",
      "c) Cada neurona de la capa de entrada representa a un prototipo.",
      "d) Cada neurona de la capa de entrada se conecta con x neuronas y estas x conexiones constituyen un prototipo.",
      "e) La A y la C son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>En los Mapas Auto-Organizativos de Kohonen, la matriz de pesos de cada neurona de la capa competitiva (salida) act\u00faa como un centroide o prototipo. Dado que el n\u00famero de neuronas del mapa suele ser much\u00edsimo menor que el n\u00famero total de datos del mundo real, m\u00faltiples patrones de entrada que sean topol\u00f3gicamente similares activar\u00e1n (tendr\u00e1n como BMU) a la misma neurona, haciendo que esta represente a todo ese cl\u00faster o \"grupo\" de patrones.<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "Si los patrones de entrada tienen diferentes dimensiones, la red m\u00e1s aconsejable para agruparlos es...<br>",
    "options": [
      "a) Un SOM.",
      "b) Una GNG.",
      "c) Un ADALINE.",
      "d) Una GCS.",
      "e) Ninguna de las anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Un axioma arquitect\u00f3nico estricto de las Redes Neuronales Artificiales cl\u00e1sicas (incluyendo SOM, GNG, GCS y perceptrones) es que requieren tensores de entrada de tama\u00f1o fijo. La capa de entrada debe poseer exactamente un nodo por cada dimensi\u00f3n del patr\u00f3n. Si los patrones del problema tienen \"diferentes dimensiones\" (vectores de tama\u00f1o variable), ninguna de estas redes puede procesarlos crudamente; requerir\u00edan algoritmos de preprocesamiento (como _padding_) o arquitecturas recurrentes (RNN) no contempladas en las opciones.<br>",
    "correct": 4,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "Las tasas de aprendizaje para redes GCS son...<br>",
    "options": [
      "a) Las mismas que para redes SOM.",
      "b) Dos tasas diferenciadas.",
      "c) Una \u00fanica de aprendizaje en todos los casos.",
      "d) La A y la B son correctas.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>En el algoritmo de _Growing Cell Structures_ (GCS), la regla de adaptaci\u00f3n de pesos es mucho m\u00e1s focalizada que en el SOM cl\u00e1sico (el cual usa una funci\u00f3n de vecindario gaussiana decreciente). GCS emplea estrictamente **dos tasas de aprendizaje diferenciadas e invariantes en el tiempo**: una tasa mayor ($\\epsilon_b$) que se aplica de forma exclusiva a la neurona ganadora (BMU), y una tasa mucho menor ($\\epsilon_n$) que se aplica \u00fanicamente a las neuronas topol\u00f3gicamente conectadas a ella de forma directa (sus vecinas en el grafo).<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "Las redes de neuronas con entrenamiento no supervisado...<br>",
    "options": [
      "a) Tienen un fundamento biol\u00f3gico, se basan en la corteza cerebral.",
      "b) Se llaman as\u00ed porque el supervisor no sabe supervisarlas.",
      "c) No son de utilidad actualmente.",
      "d) La B y la C son correctas.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Redes como el SOM de Teuvo Kohonen se inspiraron directamente en la neurofisiolog\u00eda, espec\u00edficamente en los **mapas topogr\u00e1ficos de la corteza cerebral** de los mam\u00edferos (como el c\u00f3rtex visual o somatosensorial). En el cerebro, neuronas f\u00edsicamente cercanas responden a est\u00edmulos sensoriales similares (por ejemplo, frecuencias de sonido continuas), organiz\u00e1ndose de manera aut\u00f3noma y no supervisada mediante excitaci\u00f3n lateral, exactamente igual que las redes competitivas artificiales.<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "El problema del viajante con una SOM...<br>",
    "options": [
      "a) Se resuelve considerando una vecindad lineal.",
      "b) Se resuelve sin vecindad.",
      "c) Nunca se puede resolver.",
      "d) La B y la C son correctas.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>El cl\u00e1sico Problema del Viajante de Comercio (TSP) busca el camino m\u00e1s corto que conecte m\u00faltiples ciudades (puntos 2D) formando un circuito cerrado. Para resolverlo con una red SOM, se altera su estructura: en lugar de una malla 2D, se inicializa la red como una **cadena unidimensional cerrada (un anillo o vecindad lineal el\u00e1stica)**. Al entrenar, este anillo se estira y se retuerce auto-organiz\u00e1ndose hasta pasar por todas las \"ciudades\" de entrada, generando el recorrido \u00f3ptimo.<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_2023",
    "question": "Los trabajos de uno de los siguientes investigadores NO forman parte de la inspiraci\u00f3n biol\u00f3gica que se utiliz\u00f3 como base para conformar el c\u00f3mo funcionan los algoritmos gen\u00e9ticos. \u00bfCu\u00e1l?<br>",
    "options": [
      "a) Gregor Mendel.",
      "b) Alfred Wallace.",
      "c) Jean-Batiste Lamark.",
      "d) Charles Darwin.",
      "e) John H. Holland."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Los Algoritmos Gen\u00e9ticos est\u00e1ndar (formalizados por John Holland) se basan estrictamente en la teor\u00eda de la Selecci\u00f3n Natural (Darwin y Wallace) y en la gen\u00e9tica cl\u00e1sica de la herencia cromos\u00f3mica (Mendel). **Jean-Baptiste Lamarck** propuso la teor\u00eda de la \"herencia de los caracteres adquiridos\" (ej. las jirafas estiran el cuello y sus hijos nacen con cuello largo), un concepto que se descarta en la gen\u00e9tica cl\u00e1sica y en los Algoritmos Gen\u00e9ticos puros (aunque s\u00ed inspira modelos h\u00edbridos complejos como los _Algoritmos Mem\u00e9ticos_).<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "Se recomienda y est\u00e1 m\u00e1s justificado el uso de los Algoritmos Gen\u00e9ticos...<br>",
    "options": [
      "a) En aquellos problemas cuya complejidad permita una soluci\u00f3n directa.",
      "b) En aquellos problemas cuya complejidad no permita una soluci\u00f3n directa.",
      "c) En los problemas resolubles polinomialmente.",
      "d) Cuando existe un \u00fanico m\u00ednimo local y el espacio de b\u00fasqueda es muy peque\u00f1o.",
      "e) Siempre es recomendado su uso."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Los Algoritmos Gen\u00e9ticos son metaheur\u00edsticas de gran coste computacional. Aplicarlos a problemas sencillos, derivables o con soluci\u00f3n directa (opciones A y C) es \"matar moscas a ca\u00f1onazos\". Su uso est\u00e1 estrictamente justificado en dominios NP-Hard: problemas de alt\u00edsima complejidad, hiperespacios de b\u00fasqueda inmensos, con m\u00faltiples m\u00ednimos locales o topolog\u00edas discontinuas donde los m\u00e9todos anal\u00edticos directos fracasan irremediablemente.<br>",
    "correct": 1,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "\u00bfCu\u00e1l de los siguientes operadores gen\u00e9ticos es el responsable de explotar la informaci\u00f3n presente en la poblaci\u00f3n?<br>",
    "options": [
      "a) Clonaci\u00f3n.",
      "b) Cruce.",
      "c) Mutaci\u00f3n.",
      "d) Remplazo.",
      "e) Selecci\u00f3n."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>En computaci\u00f3n evolutiva, la **Explotaci\u00f3n** consiste en aprovechar y combinar el \"buen material\" ya descubierto. El operador de **Cruce (Recombinaci\u00f3n)** es el encargado de esta tarea: toma fracciones valiosas (_Building Blocks_) del genoma de dos padres exitosos y las entrelaza, asumiendo que al juntar caracter\u00edsticas gen\u00e9ticas ganadoras, se obtendr\u00e1 una soluci\u00f3n hija te\u00f3ricamente superior.<br>",
    "correct": 1,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "El objetivo del operador de mutaci\u00f3n es...<br>",
    "options": [
      "a) Reducir la diversidad de la poblaci\u00f3n.",
      "b) Explorar en el espacio de b\u00fasqueda.",
      "c) Explotar la informaci\u00f3n que est\u00e1 en la poblaci\u00f3n.",
      "d) Seleccionar aquellos individuos que son mejores, en funci\u00f3n de su funci\u00f3n de ajuste.",
      "e) En un esquema steady-state, decir qu\u00e9 individuos deben de deshacerse para hacer sitio a los nuevos."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Contrario al cruce, la Mutaci\u00f3n es el motor de la **Exploraci\u00f3n**. Inyecta peque\u00f1as disrupciones ciegamente aleatorias (ruido) en los cromosomas para garantizar que la poblaci\u00f3n explore y salte a nuevas coordenadas del hiperespacio. Esto previene la p\u00e9rdida irreversible de alelos y evita que el sistema converja prematuramente estanc\u00e1ndose en un m\u00ednimo local.<br>",
    "correct": 1,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "\u00bfCu\u00e1l de las siguientes afirmaciones es cierta en relaci\u00f3n a los algoritmos gen\u00e9ticos?<br>",
    "options": [
      "a) Las soluciones deben de ser codificadas en forma de \u00e1rbol.",
      "b) Las poblaciones grandes favorecen una evoluci\u00f3n m\u00e1s r\u00e1pida.",
      "c) El esquema de remplazo generacional utiliza menos memoria.",
      "d) Las funciones de ajuste deben de poder evaluarse en cada individuo de la poblaci\u00f3n.",
      "e) El criterio de parada debe de ser \u00fanico."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>El motor base del darwinismo computacional es la criba de selecci\u00f3n. Para que esto opere, es una condici\u00f3n _sine qua non_ que el sistema disponga de una **funci\u00f3n de ajuste (_Fitness_)** capaz de evaluar, medir y puntuar matem\u00e1ticamente la aptitud de **todos y cada uno** de los cromosomas vivos en el pool poblacional en cada ciclo evolutivo. (La opci\u00f3n A es falsa, los AG usan vectores/cadenas; la B es falsa, a mayor poblaci\u00f3n mayor lentitud computacional).<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "Elitismo en algoritmos gen\u00e9ticos...<br>",
    "options": [
      "a) No existe este concepto.",
      "b) S\u00f3lo es aplicable a la Programaci\u00f3n Gen\u00e9tica.",
      "c) Es la estrategia de mantener los mejores individuos de la poblaci\u00f3n.",
      "d) Se encarga de buscar los mejores individuos y con ellos generar una nueva poblaci\u00f3n.",
      "e) La nueva poblaci\u00f3n es generada a partir exclusivamente del mejor individuo (\u00e9lite)."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>El **elitismo** es una p\u00f3liza de seguro algor\u00edtmica. Dado que el cruce y la mutaci\u00f3n son probabil\u00edsticos, podr\u00edan \"destruir\" por azar a un cromosoma maravillosamente apto hallado en la generaci\u00f3n $T$. El elitismo obliga al motor de reemplazo a clonar y **mantener intactos al mejor individuo (o grupo \u00e9lite)** y pasarlo directamente a la generaci\u00f3n $T+1$, garantizando que el estado del arte del algoritmo nunca involucione.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "En algoritmos gen\u00e9ticos existen las t\u00e9cnicas de selecci\u00f3n denominadas:<br>",
    "options": [
      "a) Profundidad y anchura.",
      "b) Recombinaci\u00f3n puntual y uniforme.",
      "c) Ruleta y torneo.",
      "d) Cruce y mutaci\u00f3n.",
      "e) Combinatoria m\u00faltiple y estoc\u00e1stica uniforme."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Las t\u00e9cnicas que escogen qui\u00e9n obtiene el derecho a reproducirse conforman los Operadores de Selecci\u00f3n. La **Ruleta** (selecci\u00f3n proporcional donde se asigna a cada individuo una porci\u00f3n del disco seg\u00fan su _fitness_) y el **Torneo** (donde se extraen subconjuntos aleatorios compitiendo localmente) son las dos estrategias estoc\u00e1sticas de selecci\u00f3n m\u00e1s can\u00f3nicas e implementadas en computaci\u00f3n evolutiva.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "En un Algoritmo Gen\u00e9tico el t\u00e9rmino \"Generaci\u00f3n\"...<br>",
    "options": [
      "a) Representa cada ciclo de funcionamiento del Algoritmo.",
      "b) En el mecanismo de gesti\u00f3n de poblaci\u00f3n \"Steady-State\" representa el cambio de todos los individuos por los hijos.",
      "c) Representa seleccionar al mejor individuo de cada poblaci\u00f3n para copiarlo a la siguiente poblaci\u00f3n.",
      "d) No existe este concepto en Algoritmos Gen\u00e9ticos.",
      "e) Ninguna de las anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Al igual que en la biolog\u00eda, una generaci\u00f3n computacional se define de manera estructural como **un ciclo completo (o iteraci\u00f3n temporal) de funcionamiento** del bucle principal del algoritmo: se eval\u00faa la aptitud de la poblaci\u00f3n actual, se selecciona, se cruza, se muta y se somete a reemplazo, marcando el inicio formal de una nueva generaci\u00f3n gen\u00e9tica en la simulaci\u00f3n.<br>",
    "correct": 0,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "La denominaci\u00f3n \"Steady-state\" en t\u00e9rminos de un Algoritmo Gen\u00e9tico es...<br>",
    "options": [
      "a) El mecanismo mediante el cual se mantiene a los mejores individuos en una poblaci\u00f3n.",
      "b) Un tipo de gesti\u00f3n de la poblaci\u00f3n de individuos. En este tipo tambi\u00e9n hay que especificar el tipo de sustituci\u00f3n de individuos.",
      "c) Una forma de crear la poblaci\u00f3n de descendientes antes de eliminar la poblaci\u00f3n de los padres y pasar a la siguiente generaci\u00f3n.",
      "d) Una forma de combinar los Algoritmos Gen\u00e9ticos con t\u00e9cnicas de optimizaci\u00f3n local.",
      "e) No existe esta palabra en estos sistemas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Frente al modelo \"Generacional\" (donde muere el $100\\%$ de los padres de golpe), el modelo **Steady-State** es un tipo de **gesti\u00f3n poblacional** donde solo nacen uno o dos descendientes por cada ciclo. Esto obliga arquitect\u00f3nicamente al ingeniero a dise\u00f1ar e incluir un **algoritmo de sustituci\u00f3n** adicional para dictaminar qu\u00e9 integrante concreto y aislado de la vieja poblaci\u00f3n debe \"morir\" para ceder su puesto vital al reci\u00e9n llegado (ej: sustituir al peor, al m\u00e1s viejo, o al m\u00e1s parecido).<br>",
    "correct": 1,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "_(Enunciado reconstruido en base a la soluci\u00f3n oficial)_<br>En la Programaci\u00f3n Gen\u00e9tica...<br>",
    "options": [
      "a) Las soluciones son vectores de n\u00fameros reales o cadenas de bits.",
      "b) No interviene el operador de mutaci\u00f3n por su fragilidad.",
      "c) Se emplean mec\u00e1nicas de descenso de gradiente.",
      "d) El algoritmo de evoluci\u00f3n de la poblaci\u00f3n de individuos es igual al de los Algoritmos Gen\u00e9ticos.",
      "e) Ninguna de las anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Aunque la Programaci\u00f3n Gen\u00e9tica difiere radicalmente de los Algoritmos Gen\u00e9ticos en su forma de representar los cromosomas (utilizando complejos \u00e1rboles sint\u00e1cticos en lugar de simples cadenas o vectores planos), **su motor de evoluci\u00f3n subyacente es exactamente el mismo**. Ambos se rigen por id\u00e9ntico flujo de control biol\u00f3gico: inicializar poblaci\u00f3n, evaluar _fitness_, seleccionar, realizar cruce y mutaci\u00f3n (adaptados a \u00e1rboles) y reemplazar.<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "_(Enunciado reconstruido en base a la soluci\u00f3n oficial)_<br>La inyecci\u00f3n de una t\u00e9cnica de b\u00fasqueda local (como Hill-Climbing) acoplada a un individuo dentro de un algoritmo gen\u00e9tico (Algoritmo Mem\u00e9tico):<br>",
    "options": [
      "a) Mejora los individuos para acelerar que se encuentre un \u00f3ptimo local.",
      "b) Impide cualquier comportamiento basado en herencia Lamarckiana.",
      "c) Asegura la convergencia en el m\u00ednimo global en el 100% de los casos.",
      "d) Ralentiza la convergencia debido al enorme coste de memoria de red.",
      "e) Desactiva los operadores de cruce."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Un algoritmo mem\u00e9tico fusiona la exploraci\u00f3n global dispersa (del algoritmo gen\u00e9tico) con la **explotaci\u00f3n local intensiva**. Al permitir que cada individuo reci\u00e9n cruzado descienda algor\u00edtmicamente por la colina de su propio nicho topol\u00f3gico, se perfeccionan (\"mejoran\") sus atributos individuales antes de reproducirse de nuevo, **acelerando dram\u00e1ticamente la convergencia** hacia un \u00f3ptimo en los entornos del espacio que el AG global ha preseleccionado.<br>",
    "correct": 0,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "_(Enunciado reconstruido en base a la soluci\u00f3n oficial)_<br>La funci\u00f3n de aptitud (Fitness) en un algoritmo evolutivo...<br>",
    "options": [
      "a) La programaci\u00f3n gen\u00e9tica no utiliza este elemento que est\u00e1 solo presente en los AG.",
      "b) Se eval\u00faa sobre el mejor individuo de la poblaci\u00f3n exclusivamente.",
      "c) Sirve para determinar cu\u00e1les son los mejores individuos de la poblaci\u00f3n.",
      "d) Se ejecuta sobre la poblaci\u00f3n como un todo para hacer competir a las soluciones entre s\u00ed.",
      "e) Es la funci\u00f3n que marca cu\u00e1ndo se cambia de una generaci\u00f3n a la siguiente."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La funci\u00f3n _Fitness_ o de ajuste es el coraz\u00f3n ciego que modela el entorno de la supervivencia natural inform\u00e1ticamente. Retorna un escalar num\u00e9rico por cada cromosoma que **sirve estrictamente para ranquear y determinar** cu\u00e1n buena o mala es la soluci\u00f3n que propone ese individuo frente al problema. Este valor es consumido posteriormente por la ruleta o torneo para sesgar la supervivencia favoreciendo a los \"mejores\".<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "_(Enunciado reconstruido en base a la soluci\u00f3n oficial)_<br>En los algoritmos de sustituci\u00f3n para insertar nuevos individuos en un entorno Steady-State:<br>",
    "options": [
      "a) La sustituci\u00f3n de peores es la m\u00e1s r\u00e1pida y, por tanto, la mejor sin discusi\u00f3n.",
      "b) La sustituci\u00f3n de padres es la mejor porque no se pierde variabilidad.",
      "c) Lo mejor es no sustituir y que la poblaci\u00f3n crezca indefinidamente.",
      "d) La sustituci\u00f3n de parecidos hace que la evoluci\u00f3n avance muy despacio porque todos se van a parecer.",
      "e) La mejor opci\u00f3n es utilizar las tres t\u00e9cnicas a la vez."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>La t\u00e9cnica del _Crowding_ o \"Sustituci\u00f3n de Parecidos\" est\u00e1 dise\u00f1ada para forzar la inserci\u00f3n de hijos eliminando \u00fanicamente al individuo de la poblaci\u00f3n antigua que m\u00e1s se le asemeje cromos\u00f3micamente. Su gran virtud es que mantiene una inmensa diversidad gen\u00e9tica (evita que la poblaci\u00f3n colapse en un clon gigante), pero su peor contrapartida din\u00e1mica es precisamente que **ralentiza de forma severa el avance y la convergencia** de la evoluci\u00f3n.<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_2023",
    "question": "En un Algoritmo Gen\u00e9tico...<br>",
    "options": [
      "a) Si la tasa de mutaci\u00f3n es 0, el algoritmo funciona porque el cruce hace que haya evoluci\u00f3n.",
      "b) Si la tasa de cruce es 0, la mutaci\u00f3n hace que todos los individuos acumulen demasiados cambios.",
      "c) Si la tasa de cruce es 0, la mutaci\u00f3n genera variabilidad y el algoritmo de selecci\u00f3n hace que haya evoluci\u00f3n.",
      "d) Si la tasa de cruce y evoluci\u00f3n son 0, el algoritmo de selecci\u00f3n prevalece y hace que haya evoluci\u00f3n.",
      "e) Es imposible que el cruce y/o la mutaci\u00f3n sean 0."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Si alteramos la arquitectura del AG anulando el cruce (tasa = 0%), la recombinaci\u00f3n gen\u00e9tica desaparece por completo. Sin embargo, la mutaci\u00f3n continuar\u00e1 inyectando ruido aleatorio (variabilidad fenot\u00edpica) de manera aut\u00f3noma, y el mecanismo darwiniano de \"Selecci\u00f3n\" operar\u00e1 cribando y qued\u00e1ndose con las mutaciones favorables. El sistema seguir\u00e1 iterando y evolucionando guiado por estos fallos gen\u00e9ticos positivos, operando eficazmente bajo un paradigma id\u00e9ntico al de las llamadas **\"Estrategias Evolutivas\"**.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_junio_2026",
    "question": "Dado el siguiente grafo, donde el nodo inicial es A, el valor num\u00e9rico de cada nodo indica el resultado de evaluar una funci\u00f3n heur\u00edstica $h$, y el valor num\u00e9rico de cada arista indica el coste de transici\u00f3n entre estados... \u00bfCu\u00e1l ser\u00eda el coste de la soluci\u00f3n devuelta por el algoritmo $A^*$?<br>",
    "options": [
      "a) 22",
      "b) 26",
      "c) 35",
      "d) 39"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>- El algoritmo $A^*$ expande los nodos bas\u00e1ndose en la funci\u00f3n de evaluaci\u00f3n $f(n) = g(n) + h(n)$, donde $g(n)$ es el coste acumulado desde el inicio hasta $n$, y $h(n)$ es el valor heur\u00edstico estimado hasta la meta.<br>- **Inicializaci\u00f3n:** Cola de prioridad = `[A(g=0, h=60, f=60)]`<br>- **Paso 1:** Se extrae A y se expande:<br>- B: $g(B) = 5, h(B) = 50 \\implies f(B) = 55$<br>- C: $g(C) = 6, h(C) = 10 \\implies f(C) = 16$<br>- Cola = `[C(f=16), B(f=55)]`<br>- **Paso 2:** Se extrae C y se expande:<br>- F: $g(F) = 6 + 5 = 11, h(F) = 5 \\implies f(F) = 16$<br>- G: $g(G) = 6 + 10 = 16, h(G) = 1 \\implies f(G) = 17$<br>- Cola = `[F(f=16), G(f=17), B(f=55)]`<br>- **Paso 3:** Se extrae F y se expande:<br>- G: $g(G) = 11 + 1 = 12, h(G) = 1 \\implies f(G) = 13$ (actualiza la entrada anterior de G al ser menor que $17$)<br>- Cola = `[G(f=13), B(f=55)]`<br>- **Paso 4:** Se extrae G y se expande:<br>- I: $g(I) = 12 + 23 = 35, h(I) = 0 \\implies f(I) = 35$<br>- Cola = `[I(f=35), B(f=55)]`<br>- **Paso 5:** Se extrae I (meta). Como tiene el menor valor de la cola y es la meta, la b\u00fasqueda finaliza con coste **35**.<br>",
    "correct": 2,
    "category": "busqueda"
  },
  {
    "source": "examen_junio_2026",
    "question": "En el mismo grafo de la pregunta anterior, \u00bfcu\u00e1l ser\u00eda la soluci\u00f3n de aplicar el algoritmo de b\u00fasqueda por profundidad iterativa, usando la precedencia lexicogr\u00e1fica como mecanismo de resoluci\u00f3n de conflictos?<br>",
    "options": [
      "a) $A \\to C \\to G \\to I$",
      "b) $A \\to B \\to E \\to H \\to I$",
      "c) $A \\to B \\to A \\to B \\to E \\to A \\to B \\to E \\to H \\to A \\to B \\to E \\to H \\to I$",
      "d) El algoritmo iterativo no encuentra una soluci\u00f3n, pero s\u00ed lo har\u00eda una b\u00fasqueda en profundidad est\u00e1ndar"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>La b\u00fasqueda por profundidad iterativa (IDDFS) incrementa secuencialmente el l\u00edmite de profundidad $L$ en cada iteraci\u00f3n ($L = 0, 1, 2, 3, \\dots$). Los sucesores de cada nodo se exploran en orden lexicogr\u00e1fico (alfab\u00e9tico):<br><br>- **L\u00edmite L=0:** Se explora A. No es meta.<br>- **L\u00edmite L=1:** Se exploran A -> B y A -> C. Ninguno es meta.<br>- **L\u00edmite L=2:** Se exploran A -> B -> D, A -> B -> E, A -> C -> F, A -> C -> G. Ninguno es meta.<br>- **L\u00edmite L=3:**<br>- Rama B: se explora A -> B -> D -> E y A -> B -> D -> H, y tambi\u00e9n A -> B -> E -> H.<br>- Rama C: se explora A -> C -> F -> G, y finalmente **A -> C -> G -> I**. Al ser I la meta a profundidad 3, se encuentra y se devuelve la soluci\u00f3n **$A \\to C \\to G \\to I$**.<br>",
    "correct": 0,
    "category": "busqueda"
  },
  {
    "source": "examen_junio_2026",
    "question": "En el mismo grafo, la heur\u00edstica proporcionada...<br>",
    "options": [
      "a) Es admisible y consistente",
      "b) No es admisible, pero s\u00ed consistente",
      "c) Es admisible, pero no consistente en algunos nodos",
      "d) No es admisible ni consistente"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>- **Admisibilidad:** Una heur\u00edstica $h(n)$ es admisible si $h(n) \\le h^*(n)$ (el coste real \u00f3ptimo a la meta) para todo nodo $n$.<br>- Desde el nodo H, el camino real \u00f3ptimo a la meta es H -> I con coste $1$. Sin embargo, la heur\u00edstica asignada es $h(H) = 3$. Como $3 > 1$, la heur\u00edstica sobreestima el coste, por lo que **no es admisible**.<br>- **Consistencia:** Exige que $h(n) \\le c(n, a, n') + h(n')$.<br>- Para la transici\u00f3n D -> H: $h(D) = 60$, $c(D,H) = 1$, $h(H) = 3$. Esto requerir\u00eda $60 \\le 1 + 3 \\implies 60 \\le 4$, lo cual es falso. Por tanto, **no es consistente**.<br>",
    "correct": 3,
    "category": "busqueda"
  },
  {
    "source": "examen_junio_2026",
    "question": "Se nos pide realizar un modelo de representaci\u00f3n del conocimiento para un sistema sobre un nuevo virus. Al ser de reciente descubrimiento, se dispone de muy poca informaci\u00f3n sobre este nuevo virus, pero se tiene mucha informaci\u00f3n sobre otros virus que se cree que funcionan de una manera similar. \u00bfQu\u00e9 modelo de representaci\u00f3n del conocimiento se deber\u00eda utilizar?<br>",
    "options": [
      "a) Orientaci\u00f3n a objetos",
      "b) Redes sem\u00e1nticas",
      "c) Reglas de producci\u00f3n",
      "d) Frames"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>El modelo de **Frames** (Marcos) estructura la informaci\u00f3n en ranuras (slots) que heredan valores por defecto desde clases m\u00e1s generales (en este caso, otros virus similares). Esto permite que, ante una escasez de datos espec\u00edficos del nuevo virus, se utilicen por defecto los conocimientos del virus protot\u00edpico y se vayan sobrescribiendo los detalles a medida que se descubran.<br>",
    "correct": 3,
    "category": "representacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfEn qu\u00e9 se diferencian las reglas IFANY y IFSOME?<br>",
    "options": [
      "a) IFANY investiga toda la premisa, mientras que IFSOME ejecuta la acci\u00f3n cuando encuentra una cl\u00e1usula cierta",
      "b) IFSOME investiga toda la premisa, mientras que IFANY ejecuta la acci\u00f3n cuando encuentra una cl\u00e1usula cierta",
      "c) IFANY requiere que una cl\u00e1usula sea cierta para ejecutar una acci\u00f3n, mientras que IFSOME requiere m\u00e1s de una (al menos 2)",
      "d) IFSOME requiere que una cl\u00e1usula sea cierta para ejecutar una acci\u00f3n, mientras que IFANY requiere m\u00e1s de una (al menos 2)"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>- **Justificaci\u00f3n**: En los motores de inferencia, la cl\u00e1usula **IFANY** funciona como un OR de cortocircuito: eval\u00faa la premisa y ejecuta la acci\u00f3n en cuanto encuentra la primera cl\u00e1usula que sea cierta. Por el contrario, **IFSOME** investiga toda la premisa de forma exhaustiva para recopilar todas las que se cumplen antes de proceder.<br>",
    "correct": 1,
    "category": "representacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "Las arquitecturas b\u00e1sicas de agentes son:<br>",
    "options": [
      "a) Reactivo, reactivo con estado, basado en metas y basado en utilidades",
      "b) Reactivo, basado en metas, basado en metas con estado y basado en utilidades",
      "c) Activo, reactivo, reactivo con estado y basado en metas",
      "d) Activo, reactivo, basado en metas con estado y basado en utilidades"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Seg\u00fan la clasificaci\u00f3n cl\u00e1sica de Russell & Norvig, los agentes se estructuran en cuatro familias b\u00e1sicas:<br>1. **Reactivos simples** (sin memoria, asocian percepciones a acciones directamente).<br>2. **Reactivos basados en modelos** (mantienen un estado interno del mundo).<br>3. **Basados en objetivos / metas** (act\u00faan para alcanzar metas deseadas).<br>4. **Basados en utilidad** (maximizan una funci\u00f3n de preferencia o bienestar).<br>",
    "correct": 0,
    "category": "introduccion"
  },
  {
    "source": "examen_junio_2026",
    "question": "Sea un dominio con tres manifestaciones posibles $\\{M(1), M(2), M(3)\\}$ y dos interpretaciones posibles $\\{I(1), I(2)\\}$. Desde una perspectiva categ\u00f3rica, y dadas las reglas del dominio:<br>> R1: $M(1) \\lor M(2) \\lor M(3) \\implies I(1) \\lor I(2)$<br>><br>> R2: $I(2) \\implies \\neg M(2) \\land M(1)$<br>><br>> R3: $I(1) \\lor \\neg I(2) \\implies M(2) \\land M(3)$<br>\u00bfCu\u00e1l de las siguientes combinaciones pertenece a la Base L\u00f3gica Reducida?<br>",
    "options": [
      "a) $m_4 i_1$",
      "b) $m_4 i_2$",
      "c) $m_4 i_3$",
      "d) Ninguna es correcta"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Analizando la manifestaci\u00f3n $m_4$, en la tabla dada sus valores son $M(1)=1, M(2)=0, M(3)=0$. Evaluemos cada opci\u00f3n:<br><br>- **Para a) $m_4 i_1$ (donde $I(1)=0, I(2)=0$):**<br>- R1 establece que si hay manifestaciones activas (las hay porque $M(1)=1$), debe haber al menos una interpretaci\u00f3n activa. Al ser ambas 0, **R1 se viola**. No pertenece a la BLR.<br>- **Para b) $m_4 i_2$ (donde $I(1)=0, I(2)=1$):**<br>- R1: Antecedente Verdadero, Consecuente Verdadero ($I(2)=1$). (Se cumple)<br>- R2: Antecedente Verdadero ($I(2)=1$). Consecuente: $\\neg M(2) \\land M(1) = \\neg 0 \\land 1 = 1$. (Se cumple)<br>- R3: Antecedente: $I(1) \\lor \\neg I(2) = 0 \\lor \\neg 1 = 0$ (Falso). Al ser el antecedente falso, la implicaci\u00f3n se cumple autom\u00e1ticamente. (Se cumple)<br>- Todas las reglas se satisfacen, por lo que **pertenece a la BLR**.<br>- **Para c) $m_4 i_3$ (donde $I(1)=1, I(2)=0$):**<br>- R3: Antecedente: $I(1) \\lor \\neg I(2) = 1 \\lor \\neg 0 = 1$ (Verdadero). Consecuente: $M(2) \\land M(3) = 0 \\land 0 = 0$ (Falso). **R3 se viola** ($1 \\implies 0$ es falso). No pertenece a la BLR.<br>",
    "correct": 1,
    "category": "razonamiento"
  },
  {
    "source": "examen_junio_2026",
    "question": "Con las mismas reglas del ejercicio anterior, y sabiendo que tenemos la manifestaci\u00f3n $M(1)$, \u00bfcu\u00e1l es el conjunto de interpretaciones m\u00e1s probable? Ten en cuenta las siguientes probabilidades:<br>> $p(\\neg I(1) \\land \\neg I(2)) = 0.2$<br>><br>> $p(\\neg I(1) \\land I(2)) = 0.08$<br>><br>> $p(I(1) \\land \\neg I(2)) = 0.34$<br>><br>> $p(I(1) \\land I(2)) = 0.38$<br>",
    "options": [
      "a) $I - I(1) \\land \\neg I(2)$",
      "b) $\\neg I(1) \\land I(2)$",
      "c) $I(1) \\land \\neg I(2)$",
      "d) $I(1) \\land I(2)$"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Evaluemos la consistencia de las interpretaciones cuando $M(1)=1$:<br>1. $\\neg I(1) \\land \\neg I(2)$ es inconsistente porque al estar activa $M(1)$, R1 obliga a que al menos una interpretaci\u00f3n sea verdadera.<br>2. $I(1) \\land I(2)$ es inconsistente porque R2 exige que si $I(2)=1 \\implies M(2)=0$, mientras que R3 exige que si $I(1)=1 \\implies M(2)=1$, provocando una contradicci\u00f3n.<br>3. Las \u00fanicas interpretaciones consistentes con $M(1)=1$ son:<br>- $\\neg I(1) \\land I(2)$ (Probabilidad: 0.08)<br>- $I(1) \\land \\neg I(2)$ (Probabilidad: 0.34)<br><br>Al comparar las probabilidades de los estados consistentes, la m\u00e1s probable es **$I(1) \\land \\neg I(2)$** con $0.34$.<br>",
    "correct": 2,
    "category": "razonamiento"
  },
  {
    "source": "examen_junio_2026",
    "question": "En un problema de planificaci\u00f3n cl\u00e1sica con $N$ variables booleanas, el tama\u00f1o m\u00e1ximo del espacio de estados:<br>",
    "options": [
      "a) Crece de forma lineal ($2N$), ya que cada variable a\u00f1ade un nuevo estado posible",
      "b) Crece de forma cuadr\u00e1tica ($N^2$), debido a las relaciones entre precondiciones y efectos",
      "c) Crece de forma exponencial ($2^N$), porque cada variable puede tomar dos valores posibles",
      "d) Permanece constante, ya que el entorno es est\u00e1tico"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En planificaci\u00f3n cl\u00e1sica, si hay $N$ variables booleanas independientes, cada una de ellas puede encontrarse en uno de dos estados posibles ($\\{\\text{Verdadero}, \\text{Falso}\\}$). Por tanto, la combinatoria total de combinaciones de estados es $2 \\times 2 \\times \\dots \\times 2 = 2^N$.<br>",
    "correct": 2,
    "category": "planificacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "Si hablamos de sistemas de producci\u00f3n...<br>",
    "options": [
      "a) La base de conocimientos est\u00e1 formada por la base de reglas y el motor de inferencias",
      "b) Los sistemas dirigidos por los datos son m\u00e1s espec\u00edficos, porque ejecutar\u00e1n todas las reglas disponibles en funci\u00f3n de la informaci\u00f3n introducida",
      "c) La memoria activa almacena todos los cambios de estado de nuestro sistema, de forma que representa siempre nuestro estado actual",
      "d) El motor de inferencias es el responsable de interactuar con el mundo exterior"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La memoria activa (o memoria de trabajo) almacena din\u00e1micamente los hechos que representan el estado actual de la resoluci\u00f3n del problema. Cada vez que una regla de producci\u00f3n se ejecuta, modifica el contenido de esta memoria activa, manteniendo una imagen actualizada del estado del sistema. El motor de inferencias es el software de control (separado de la base de conocimientos), y el mundo exterior se gestiona mediante interfaces.<br>",
    "correct": 2,
    "category": "representacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "Sobre algoritmos de b\u00fasqueda en \u00e1rboles:<br>",
    "options": [
      "a) La b\u00fasqueda en anchura siempre es \u00f3ptima y completa",
      "b) El profundizamiento iterativo en profundidad deber\u00eda usarse en espacios de estado en los que se conoce la profundidad de la soluci\u00f3n",
      "c) La b\u00fasqueda en profundidad es \u00f3ptima, pero no completa",
      "d) Ninguna es correcta"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>- **La a) es falsa:** La b\u00fasqueda en anchura (BFS) solo es \u00f3ptima si los costes de todas las aristas son id\u00e9nticos o no-decrecientes con la profundidad.<br>- **La b) es falsa:** Si se conoce la profundidad exacta de la soluci\u00f3n, lo \u00f3ptimo es usar b\u00fasqueda en profundidad limitada. IDDFS se emplea cuando la profundidad es desconocida.<br>- **La c) es falsa:** La b\u00fasqueda en profundidad (DFS) puede caer en ramas infinitas (no es completa) y no garantiza encontrar la soluci\u00f3n m\u00e1s barata (no es \u00f3ptima).<br>",
    "correct": 3,
    "category": "busqueda"
  },
  {
    "source": "examen_junio_2026",
    "question": "El modelo bayesiano...<br>",
    "options": [
      "a) Hace una suposici\u00f3n de independencia para las manifestaciones e interpretaciones",
      "b) No asume relaciones causales",
      "c) La evidencia a favor de una hip\u00f3tesis no cuenta en la negaci\u00f3n de esta hip\u00f3tesis",
      "d) Ninguna es correcta"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>- Por qu\u00e9 la **a** es falsa: El temario define textualmente que _\"En la probabilidad condicional aparecen involucrados dos sucesos, en donde_ **la ocurrencia del segundo depende de la ocurrencia del primero**\". El modelo bayesiano se basa precisamente en la **dependencia** probabil\u00edstica entre una manifestaci\u00f3n (evidencia) y una interpretaci\u00f3n (hip\u00f3tesis). Si asumiera que manifestaciones e interpretaciones son variables independientes, el modelo no podr\u00eda actualizar la creencia ante nueva evidencia, invalidando la f\u00f3rmula central de Bayes mostrada en el temario.<br>- Por qu\u00e9 la **b** es falsa: La teor\u00eda establece literalmente que _\"La probabilidad condicional se parece a la total, pero puede ser definida como la_ **probabilidad de las causas**\". Adem\u00e1s, al avanzar hacia las Redes Bayesianas como soluci\u00f3n estructurada del mismo modelo, el temario confirma que sus capacidades fundamentales son _\"_**Inferir causas** _a partir de s\u00edntomas\"_ y _\"_**Predecir efectos de una causa**\". Por lo tanto, el modelo bayesiano s\u00ed asume y modela relaciones de causalidad.<br>- Por qu\u00e9 la **c** es falsa: La diapositiva 35 del Tema 4, titulada expresamente _\"Secuencialidad y_ **consistencia matem\u00e1tica**\", formula las siguientes sentencias matem\u00e1ticas:<br>- $P(A)+P(\u00acA)=1$<br>- $P(H\u2223o_1\u200b\u2227o_2\u200b\u2227o_3\u200b)=x$<br>- $P(\u00acH\u2223o_1\u200b\u2227o_2\u200b\u2227o_3\u200b)=1\u2212x$<br>Esta demostraci\u00f3n del temario prueba que cualquier conjunto de evidencias ($o_1\u200b\u2227o_2\u200b\u2227o_3\u200b$) que otorgue un valor probabil\u00edstico x a favor de una hip\u00f3tesis ($H$), autom\u00e1ticamente y por definici\u00f3n, afecta e impacta a la negaci\u00f3n de dicha hip\u00f3tesis ($\u00acH$), rest\u00e1ndole exactamente ese mismo valor ($1\u2212x$).<br>",
    "correct": 3,
    "category": "razonamiento"
  },
  {
    "source": "examen_junio_2026",
    "question": "Si un entorno es parcialmente observable y estoc\u00e1stico, la planificaci\u00f3n cl\u00e1sica:<br>",
    "options": [
      "a) Sigue siendo v\u00e1lida sin cambios, porque los algoritmos de b\u00fasqueda no dependen de la observabilidad",
      "b) No es directamente aplicable porque requiere observabilidad total y acciones deterministas",
      "c) Reduce el espacio de estados al no conocerse toda la informaci\u00f3n del entorno",
      "d) Requiere usar exclusivamente b\u00fasqueda voraz para estimar estados posibles"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>La planificaci\u00f3n cl\u00e1sica (STRIPS / PDDL) opera bajo la hip\u00f3tesis del mundo cerrado, asumiendo un entorno est\u00e1tico, totalmente observable y acciones con efectos deterministas. Si estas propiedades fallan (entorno estoc\u00e1stico y parcialmente observable), los planes lineales cl\u00e1sicos fallar\u00e1n y se requerir\u00e1n modelos como MDPs o POMDPs.<br>",
    "correct": 1,
    "category": "planificacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "*(Nota: Pregunta id\u00e9ntica a la 10)*<br>Si hablamos de sistemas de producci\u00f3n...<br>",
    "options": [
      "a) La base de conocimientos est\u00e1 formada por la base de reglas y el motor de inferencias",
      "b) Los sistemas dirigidos por los datos son m\u00e1s espec\u00edficos, porque ejecutar\u00e1n todas las reglas disponibles en funci\u00f3n de la informaci\u00f3n introducida",
      "c) La memoria activa almacena todos los cambios de estado de nuestro sistema, de forma que representa siempre nuestro estado actual",
      "d) El motor de inferencias es el responsable de interactuar con el mundo exterior"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La memoria activa (o de trabajo) guarda din\u00e1micamente el estado actual del problema actualiz\u00e1ndose tras cada disparo de regla.<br>",
    "correct": 2,
    "category": "representacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "La eficiencia de un algoritmo de b\u00fasqueda depende de dos par\u00e1metros, independientemente del dominio de aplicaci\u00f3n:<br>",
    "options": [
      "a) Profundidad y criterios de selecci\u00f3n de estados",
      "b) Factor de ramificaci\u00f3n y costo de expansi\u00f3n",
      "c) Factor de ramificaci\u00f3n y profundidad",
      "d) El costo de expansi\u00f3n de los nodos y el tipo de representaci\u00f3n de conocimiento usado"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La complejidad (temporal y espacial) de los algoritmos de b\u00fasqueda en \u00e1rboles y grafos depende fundamentalmente del **factor de ramificaci\u00f3n ($b$)** del \u00e1rbol de b\u00fasqueda y de la **profundidad de la soluci\u00f3n ($d$)**.<br>",
    "correct": 2,
    "category": "busqueda"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfPor qu\u00e9 una red bayesiana es m\u00e1s explicable que un modelo bayesiano directo sobre datos?<br>",
    "options": [
      "a) Porque las aristas del grafo representan dependencias entre variables, haciendo el razonamiento interpretable",
      "b) Porque transforma las probabilidades en reglas l\u00f3gicas deterministas, eliminando la incertidumbre",
      "c) Porque los nodos representan \u00fanicamente todos los conceptos relevantes, facilitando la comprensi\u00f3n",
      "d) Porque solo admite variables booleanas y no variables continuas, eliminando la incertidumbre"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>En una Red Bayesiana, la topolog\u00eda del grafo ac\u00edclico dirigido (DAG) representa expl\u00edcitamente las relaciones de dependencia condicional (e idealmente causales) entre las variables aleatorias. Esto permite al usuario comprender visualmente c\u00f3mo fluye e influye la probabilidad a trav\u00e9s del modelo.<br>",
    "correct": 0,
    "category": "razonamiento"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfEn qu\u00e9 se diferencian las dos ramas cl\u00e1sicas de la Inteligencia Artificial?<br>",
    "options": [
      "a) La rama subsimb\u00f3lica tiene menos capacidades",
      "b) Una tiene los sistemas expertos y la otra a las redes de neuronas artificiales como paradigmas",
      "c) Una se basa en la estimulaci\u00f3n y la otra en la recursividad",
      "d) Ninguna de las anteriores es correcta",
      "e) Todas son correctas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>La Inteligencia Artificial se divide hist\u00f3ricamente en dos grandes corrientes complementarias. La rama Simb\u00f3lica se fundamenta en modelos que contienen conocimiento expl\u00edcito (como reglas, hechos y ontolog\u00edas), siendo su mayor exponente los Sistemas Expertos (ej. MYCIN). Por el contrario, la rama Subsimb\u00f3lica o Conexionista se basa en la emulaci\u00f3n biol\u00f3gica, extrayendo conocimiento impl\u00edcito aprendido autom\u00e1ticamente a partir de los datos, siendo las Redes de Neuronas Artificiales su paradigma central.<br>",
    "correct": 1,
    "category": "conexionistas"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfQu\u00e9 autores con sus trabajos sobre cibern\u00e9tica sientan las bases de la IA?<br>",
    "options": [
      "a) Rosenblueth, Wiener y Bigelow.",
      "b) Cajal.",
      "c) Craik.",
      "d) Todos los anteriores.",
      "e) A y C son ciertas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>El nacimiento de la Inteligencia Artificial y los sistemas conexionistas es multidisciplinar. Las bases cibern\u00e9ticas fundamentales se establecieron en la d\u00e9cada de 1940 gracias a trabajos como la \"propuesta cibern\u00e9tica sobre las m\u00e1quinas teleol\u00f3gicas\" desarrollada por Norbert Wiener (junto a Arturo Rosenblueth y Julian Bigelow en su publicaci\u00f3n *Behavior, Purpose and Teleology*), as\u00ed como la capacidad de los sistemas para utilizar modelos l\u00f3gicos propuesta por Kenneth Craik (*The Nature of Explanation*).<br>",
    "correct": 4,
    "category": "conexionistas"
  },
  {
    "source": "examen_junio_2026",
    "question": "En la evoluci\u00f3n hist\u00f3rica de los sistemas conexionistas, \u00bfcu\u00e1les son precursores biol\u00f3gicos?<br>",
    "options": [
      "a) Minsky.",
      "b) McCulloch.",
      "c) Papert.",
      "d) Todos los anteriores.",
      "e) Ninguno de los anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Los precursores biol\u00f3gicos sentaron las bases org\u00e1nicas que luego se trasladar\u00edan a las matem\u00e1ticas. Santiago Ram\u00f3n y Cajal describi\u00f3 la estructura de la neurona, Donald Hebb postul\u00f3 el aprendizaje sin\u00e1ptico, y fue el investigador Warren McCulloch (junto a Walter Pitts) quien logr\u00f3 trasladar esa biolog\u00eda a un modelo l\u00f3gico-matem\u00e1tico fundacional en 1943, convirti\u00e9ndose en un precursor biol\u00f3gico innegable de las redes neuronales. Minsky y Papert, por el contrario, fueron cr\u00edticos posteriores que frenaron el avance del perceptr\u00f3n.<br>",
    "correct": 1,
    "category": "conexionistas"
  },
  {
    "source": "examen_junio_2026",
    "question": "Causas del inter\u00e9s actual por los Sistemas Inteligentes Subsimb\u00f3licos<br>",
    "options": [
      "a) El inter\u00e9s existente por la b\u00fasqueda de arquitecturas de computadoras que permitan el procesamiento en paralelo.",
      "b) La habilidad de estos sistemas para aprender autom\u00e1ticamente.",
      "c) La habilidad para poder funcionar de forma aceptable tanto en presencia de informaci\u00f3n inexacta como cuando se producen deterioros o fallos en sus componentes.",
      "d) Su similitud con los modelos neurofisiol\u00f3gicos del cerebro, pudi\u00e9ndose de este modo intercambiar modelos e investigaciones entre los de RNA y Neurociencias, potenci\u00e1ndose ambas.",
      "e) Todas las anteriores son correctas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Los sistemas conexionistas (redes neuronales) han experimentado un inmenso resurgir (\"tercera primavera de la IA\") debido a cuatro factores t\u00e9cnicos decisivos: su habilidad intr\u00ednseca para aprender autom\u00e1ticamente a partir de datos (sin ser programados expl\u00edcitamente), su notable tolerancia y robustez para funcionar frente a fallos de componentes o informaci\u00f3n inexacta (ruido), su capacidad para ser implementados en arquitecturas de hardware masivamente en paralelo, y su similitud con modelos neurofisiol\u00f3gicos que permiten intercambiar avances con las neurociencias.<br>",
    "correct": 4,
    "category": "conexionistas"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfCu\u00e1l de los siguientes avances tecnol\u00f3gicos no est\u00e1 relacionado con la IA?<br>",
    "options": [
      "a) Impresoras 3D y fabricaci\u00f3n aditiva.",
      "b) Realidades extendidas y \"gemelos digitales\"",
      "c) Tecnolog\u00edas convergentes \"NBIC\".",
      "d) Todas las anteriores est\u00e1n relacionadas.",
      "e) Ninguna de las anteriores est\u00e1 relacionada."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Si observamos las tendencias tecnol\u00f3gicas que definir\u00e1n la pr\u00f3xima d\u00e9cada y que orbitan o est\u00e1n potenciadas directa o indirectamente por el n\u00facleo de la Inteligencia Artificial, encontramos a las realidades virtuales extendidas (Metaverso y Gemelos Digitales), la impresi\u00f3n 3D/4D de fabricaci\u00f3n aditiva masiva, y las nanotecnolog\u00edas combinadas o tecnolog\u00edas NBIC (Nanotecnolog\u00eda, Biotecnolog\u00eda, Tecnolog\u00edas de la Informaci\u00f3n y Ciencias Cognitivas). Todas ellas est\u00e1n estrechamente interconectadas con los avances de la IA.<br>",
    "correct": 3,
    "category": "conexionistas"
  },
  {
    "source": "examen_junio_2026",
    "question": "Los Mapas Autoorganizativos (SOM) vistos en clase tienen...<br>",
    "options": [
      "a) Una \u00fanica capa que es de entrada",
      "b) Una \u00fanica capa recurrente",
      "c) Una capa de entrada y una capa de salida",
      "d) D\u00faas capas de neuronas recurrentes y autoorganizables",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Esta es una pregunta te\u00f3rica con \"truco\" sem\u00e1ntico recurrente en estos ex\u00e1menes. Aunque a simple vista un esquema SOM dibuja neuronas de entrada y neuronas de salida, la respuesta oficial validada por la UDC es \"Todas las anteriores son incorrectas\" (opci\u00f3n E). A nivel estrictamente computacional, la red SOM solo posee **1 \u00fanica capa** de c\u00e9lulas que procesan y realizan c\u00e1lculos de pesos (la capa competitiva topol\u00f3gica). La supuesta \"capa de entrada\" act\u00faa \u00fanicamente como un bus pasivo o *buffer* que transfiere las se\u00f1ales hacia adelante, por lo que llamarla arquitectura \"de dos capas (entrada y salida)\" se considera un error te\u00f3rico bajo el conexionismo estricto de Kohonen.<br>",
    "correct": 4,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "Las 2 ideas centrales en las que se basa Kohonen para desarrollar los SOM son...<br>",
    "options": [
      "a) La ubicaci\u00f3n espacial de las neuronas y su crecimiento din\u00e1mico",
      "b) La autoorganizaci\u00f3n y el concepto de simetr\u00eda",
      "c) La autoorganizaci\u00f3n y el crecimiento din\u00e1mico del n\u00ba de neuronas",
      "d) El proceso de adaptaci\u00f3n de pesos y el concepto de geometr\u00eda topol\u00f3gica de elementos de proceso",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>El fundamento primordial del mapa de Teuvo Kohonen radica en combinar el aprendizaje competitivo (donde las neuronas luchan y adaptan sus pesos para parecerse al vector de entrada) con una rigurosa restricci\u00f3n de vecindad espacial. Esto significa que la red mapea caracter\u00edsticas abstrayendo una **geometr\u00eda topol\u00f3gica**, logrando que neuronas f\u00edsicamente cercanas en el mapa respondan a est\u00edmulos similares.<br>",
    "correct": 3,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "Si los patrones de entrada de un problema tienen 4 caracter\u00edsticas o atributos, una SOM que lo resuelva tendr\u00e1...<br>",
    "options": [
      "a) 24 neuronas de entrada",
      "b) 8 neuronas de entrada",
      "c) 4 neuronas de entrada",
      "d) 16 neuronas de entrada",
      "e) Ninguna de las anteriores"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En una red neuronal de este tipo, la interfaz receptora (las neuronas de entrada) debe acoplarse exactamente a la dimensionalidad matem\u00e1tica de los datos a tratar. Si el patr\u00f3n cuenta con 4 atributos independientes, es obligatorio disponer de exactamente 4 terminales (o neuronas) en la entrada para recibir cada uno de esos par\u00e1metros de forma paralela.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "En el aprendizaje no supervisado...<br>",
    "options": [
      "a) Se desconocen las clases, pero se consiguen grupos similares",
      "b) La autoorganizaci\u00f3n de la red permite hallar directamente las clases",
      "c) Se trabaja con patrones etiquetados",
      "d) La B y la C son correctas",
      "e) Ninguna de las anteriores es correcta"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>El paradigma de aprendizaje no supervisado se caracteriza por operar a ciegas en cuanto a objetivos: carece de etiquetas externas, clases predefinidas o un tutor que dicte el resultado deseado. La misi\u00f3n algor\u00edtmica de la red es autoorganizarse analizando directamente los datos y descubriendo estructuras ocultas, lo que le permite agrupar los patrones (clustering) bas\u00e1ndose exclusivamente en su similitud o distancia matem\u00e1tica.<br>",
    "correct": 0,
    "category": "feedforward"
  },
  {
    "source": "examen_junio_2026",
    "question": "El ADALINE fue creado<br>",
    "options": [
      "a) Despu\u00e9s del perceptr\u00f3n",
      "b) No lleg\u00f3 a ser creado",
      "c) Antes del perceptr\u00f3n",
      "d) La B y la C son correctas",
      "e) Ninguna de las anteriores es correcta"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Desde una perspectiva cronol\u00f3gica, el Perceptr\u00f3n simple fue presentado por Frank Rosenblatt en 1958. Muy poco despu\u00e9s, entre los a\u00f1os 1959 y 1960, los investigadores Bernard Widrow y Marcian Hoff desarrollaron el modelo ADALINE (ADAptive LInear NEuron), que utilizaba una regla de correcci\u00f3n de error m\u00e1s refinada (Regla Delta).<br>",
    "correct": 0,
    "category": "neurona"
  },
  {
    "source": "examen_junio_2026",
    "question": "El conjunto de datos que se utiliza para calcular los valores de los pesos de las conexiones de una RNA se denomina:<br>",
    "options": [
      "a) Conjunto de prueba",
      "b) Conjunto de validaci\u00f3n",
      "c) Conjunto de test",
      "d) Conjunto de entrenamiento",
      "e) Conjunto de normalizaci\u00f3n"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>En el particionado de datos, el \"conjunto de entrenamiento\" (Training set) es el volumen masivo de datos que fluye operativamente por el algoritmo de aprendizaje (como el backpropagation). Es el \u00fanico conjunto matem\u00e1tico que interviene directamente en la actualizaci\u00f3n iterativa e interna del valor de los pesos sin\u00e1pticos de las conexiones de la red.<br>",
    "correct": 3,
    "category": "feedforward"
  },
  {
    "source": "examen_junio_2026",
    "question": "Durante el entrenamiento de un perceptr\u00f3n multicapa se busca...<br>",
    "options": [
      "a) Llegar al error cero siempre.",
      "b) Estar muy cerca de un m\u00ednimo error, pero nunca en \u00e9l.",
      "c) Conseguir un m\u00ednimo local siempre.",
      "d) Estar lejos de un m\u00ednimo global.",
      "e) Todas son incorrectas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>El objetivo del entrenamiento de una Red Neuronal Artificial no es lograr un error matem\u00e1ticamente igual a cero, ya que esto implicar\u00eda un \"sobreentrenamiento\" (memorizaci\u00f3n de los datos y del ruido), perdiendo la capacidad de generalizar frente a nuevos patrones,,. Tampoco se busca \"estar lejos de un m\u00ednimo global\" ni \"conseguir un m\u00ednimo local siempre\" (al contrario, quedarse atascado en un m\u00ednimo local es un problema que algoritmos como el descenso del gradiente con momento intentan evitar),. Por tanto, al no haber ninguna afirmaci\u00f3n cierta, la opci\u00f3n E es la correcta.<br>",
    "correct": 4,
    "category": "neurona"
  },
  {
    "source": "examen_junio_2026",
    "question": "Un perceptr\u00f3n (sin capas ocultas) no puede implementar una puerta l\u00f3gica con la funci\u00f3n<br>",
    "options": [
      "a) AND",
      "b) OR",
      "c) EXOR",
      "d) NOT",
      "e) Puede hacer cualquiera de las anteriores"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Minsky y Papert demostraron en 1969 las limitaciones matem\u00e1ticas del perceptr\u00f3n simple o monocapa: es incapaz de resolver problemas cuyas clases no sean linealmente separables mediante un hiperplano o l\u00ednea recta. La funci\u00f3n l\u00f3gica EXOR (XOR u OR exclusivo) es el ejemplo cl\u00e1sico de un problema no linealmente separable, por lo que un perceptr\u00f3n sin capas ocultas jam\u00e1s podr\u00e1 implementarla,.<br>",
    "correct": 2,
    "category": "neurona"
  },
  {
    "source": "examen_junio_2026",
    "question": "El n\u00famero de neuronas de entrada de un perceptr\u00f3n multicapa<br>",
    "options": [
      "a) Lo puede fijar el usuario como quiera",
      "b) Depende del problema a resolver",
      "c) Debe ser igual al n\u00famero de neuronas de salida",
      "d) Debe ser igual al n\u00famero de neuronas ocultas",
      "e) Debe ser distinto al n\u00famero de neuronas de salida"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>En cualquier red neuronal, la interfaz receptora (la capa de entrada) debe acoplarse estrictamente a la dimensionalidad de los datos que se van a tratar,. Si los patrones de entrada cuentan con N caracter\u00edsticas o atributos independientes, la arquitectura exige obligatoriamente tener exactamente N neuronas en la capa de entrada. Por tanto, no se fija aleatoriamente, sino que depende de las variables del problema.<br>",
    "correct": 1,
    "category": "neurona"
  },
  {
    "source": "examen_junio_2026",
    "question": "La funci\u00f3n de transferencia de las neuronas de un perceptr\u00f3n multicapa<br>",
    "options": [
      "a) Son solamente lineales",
      "b) Son solamente umbrales",
      "c) Son solamente de tipo sigmoidal",
      "d) Son solamente de tipo logar\u00edtmico",
      "e) Todas son falsas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Para que un perceptr\u00f3n multicapa adquiera su propiedad de \"aproximador universal\" y pueda resolver problemas no lineales, sus capas ocultas deben utilizar funciones de transferencia o activaci\u00f3n no lineales (como las de tipo sigmoidal o tangente hiperb\u00f3lica),. Sin embargo, restringir la respuesta a que son solamente lineales, umbrales, sigmoidales o logar\u00edtmicas (opciones A, B, C y D) es falso, ya que una misma red puede combinar distintas funciones (por ejemplo, sigmoidal en las capas ocultas y lineal en la de salida para problemas de regresi\u00f3n),.<br>",
    "correct": 4,
    "category": "neurona"
  },
  {
    "source": "examen_junio_2026",
    "question": "La Regla Delta...<br>",
    "options": [
      "a) Es un algoritmo de aprendizaje no supervisado",
      "b) Maximiza el error cuadr\u00e1tico medio",
      "c) Es un algoritmo de aprendizaje supervisado",
      "d) Fija los valores de los pesos y bias",
      "e) La C y D son correctas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>La Regla Delta es el fundamento del entrenamiento en redes como el ADALINE. Se trata de un algoritmo de aprendizaje supervisado (opci\u00f3n C), ya que opera calculando la diferencia (error) entre la salida obtenida y una salida deseada o \"supervisada\", modificando los pesos en sentido opuesto a la pendiente del error para minimizarlo,. Adem\u00e1s, su funci\u00f3n algor\u00edtmica es \"fijar\" o establecer iterativamente los valores de los pesos y el bias (opci\u00f3n D) hasta alcanzar el ajuste \u00f3ptimo. Al ser ciertas la C y la D, la opci\u00f3n E es la correcta.<br>",
    "correct": 4,
    "category": "feedforward"
  },
  {
    "source": "examen_junio_2026",
    "question": "En un perceptr\u00f3n multicapa el conocimiento de la red est\u00e1 en ...<br>",
    "options": [
      "a) Los datos de salida de las neuronas",
      "b) En las funciones de transferencia",
      "c) En los datos de entrada",
      "d) En las conexiones",
      "e) Todas son incorrectas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>A diferencia de la IA simb\u00f3lica cl\u00e1sica que almacena el conocimiento en forma de reglas o sentencias l\u00f3gicas expl\u00edcitas, el paradigma conexionista distribuye todo el aprendizaje de forma subsimb\u00f3lica. El conocimiento y la memoria de una Red Neuronal Artificial residen \u00fanica y exclusivamente en las intensidades num\u00e9ricas de sus conexiones sin\u00e1pticas, es decir, en los pesos de las conexiones,.<br>",
    "correct": 3,
    "category": "neurona"
  },
  {
    "source": "examen_junio_2026",
    "question": "Para decidir cu\u00e1l arquitectura de RNA funciona mejor para un dataset, es necesario mirar el error<br>",
    "options": [
      "a) De entrenamiento",
      "b) De validaci\u00f3n",
      "c) De test",
      "d) En el ciclo de entrenamiento con menor gradiente",
      "e) Todas las anteriores son incorrectas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>A la hora de comparar distintas topolog\u00edas y evitar sesgos de sobreentrenamiento, el error de entrenamiento no es fiable porque la red podr\u00eda estar simplemente memorizando. El conjunto verdaderamente \u00fatil para tomar decisiones sobre los hiperpar\u00e1metros y determinar qu\u00e9 arquitectura generaliza mejor los datos es el conjunto de validaci\u00f3n, el cual act\u00faa como un \u00e1rbitro externo durante la fase de dise\u00f1o,,.<br>",
    "correct": 1,
    "category": "neurona"
  },
  {
    "source": "examen_junio_2026",
    "question": "En la t\u00e9cnica de parada temprana, una vez finalizado el proceso de entrenamiento, la RNA que se devuelve tiene unos pesos que son<br>",
    "options": [
      "a) siempre los del \u00faltimo ciclo de entrenamiento realizado.",
      "b) siempre correspondientes al ciclo con menor error de entrenamiento.",
      "c) correspondientes al ciclo con menor error de validaci\u00f3n.",
      "d) correspondientes al ciclo con menor error de test.",
      "e) correspondientes al ciclo con menor gradiente."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La parada temprana (Early Stopping) es un m\u00e9todo de regularizaci\u00f3n. Monitoriza el error en el conjunto de validaci\u00f3n a lo largo de las \u00e9pocas; la orden algor\u00edtmica consiste en retroceder en el tiempo y \"devolver\" la red en la \u00e9poca matem\u00e1tica exacta donde el error de validaci\u00f3n registr\u00f3 su valor hist\u00f3rico m\u00e1s bajo, ya que es ah\u00ed donde se demuestra la mayor capacidad de generalizaci\u00f3n antes de que comience el sobreentrenamiento,,.<br>",
    "correct": 2,
    "category": "neurona"
  },
  {
    "source": "examen_junio_2026",
    "question": "El conjunto de patrones de test...<br>",
    "options": [
      "a) No interviene en nada en el entrenamiento",
      "b) Dictamina cuando parar de entrenar",
      "c) Gu\u00eda todo el proceso de entrenamiento",
      "d) Es siempre el conjunto con mayor cantidad de patrones del dataset",
      "e) Todas las anteriores son falsas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Para que la evaluaci\u00f3n final del rendimiento de una RNA tenga rigor cient\u00edfico, el conjunto de prueba o \"Test Set\" debe mantenerse estricta y absolutamente virgen. Esto significa que sus datos jam\u00e1s cruzan la red durante la fase de optimizaci\u00f3n de pesos ni interact\u00faan con las m\u00e9tricas de detenci\u00f3n temprana, sirviendo en exclusiva para medir la capacidad real de generalizaci\u00f3n del modelo frente a lo desconocido.<br>",
    "correct": 0,
    "category": "neurona"
  },
  {
    "source": "examen_junio_2026",
    "question": "En una red SOM, la capa de competici\u00f3n est\u00e1 compuesta por:<br>",
    "options": [
      "a) Neuronas que generan la salida supervisada.",
      "b) Neuronas conectadas entre s\u00ed por enlaces recursivos.",
      "c) Neuronas que compiten por representar el patr\u00f3n de entrada.",
      "d) Neuronas que codifican el error de la red.",
      "e) Todas son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Las redes de mapas autoorganizativos operan bajo un paradigma de aprendizaje \"competitivo\". Cuando la red recibe un vector num\u00e9rico de est\u00edmulo, todas las neuronas de la capa de salida realizan un c\u00e1lculo de distancia y compiten entre s\u00ed. Aquella cuyo vector de pesos se asemeje m\u00e1s al patr\u00f3n de entrada se corona como ganadora (Best Matching Unit), obteniendo el privilegio exclusivo de actualizar sus propios pesos y los de su vecindario f\u00edsico m\u00e1s pr\u00f3ximo.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfQu\u00e9 mide el error de cuantizaci\u00f3n medio en una red SOM?<br>",
    "options": [
      "a) La distancia media entre los vectores de entrada y sus neuronas ganadoras (BMU).",
      "b) El n\u00famero de patrones correctamente clasificados.",
      "c) El n\u00famero de neuronas entrenadas.",
      "d) La diferencia entre la salida deseada y la obtenida.",
      "e) El grado de vecindad entre neuronas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Al no existir una salida \"deseada\" (las redes SOM son no supervisadas), herramientas cl\u00e1sicas como el c\u00e1lculo del Error Cuadr\u00e1tico Medio no son aplicables. Para saber si el mapa se ha adaptado y amoldado correctamente a la nube de datos, se usa el *Error de Cuantizaci\u00f3n*, una m\u00e9trica que calcula el promedio de las distancias matem\u00e1ticas resultantes entre todos los vectores de entrenamiento y sus respectivas unidades ganadoras (BMU).<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "En una red SOM, la neurona ganadora es aquella que:<br>",
    "options": [
      "a) Tiene el peso con mayor valor.",
      "b) Tiene la mayor activaci\u00f3n en la capa de entrada.",
      "c) Es m\u00e1s cercana al patr\u00f3n de entrada seg\u00fan una medida de distancia.",
      "d) Ha sido activada m\u00e1s veces durante el entrenamiento.",
      "e) Tiene mayor n\u00famero de conexiones sin\u00e1pticas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La neurona ganadora o BMU no se elige por mayor nivel de activaci\u00f3n absoluto o preselecci\u00f3n hist\u00f3rica. La selecci\u00f3n se realiza estrictamente en cada ciclo de la red computando y evaluando cu\u00e1l de todas las celdas tiene el vector de pesos que se encuentra a menor distancia del vector de entrada proporcionado, revelando as\u00ed la similitud.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfQu\u00e9 funci\u00f3n se utiliza habitualmente para determinar la similitud entre una neurona y un patr\u00f3n de entrada en una SOM?<br>",
    "options": [
      "a) Distancia de Manhattan",
      "b) Producto escalar",
      "c) Distancia Eucl\u00eddea",
      "d) Entrop\u00eda cruzada",
      "e) Funci\u00f3n sigmoidal"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En los modelos SOM can\u00f3nicos, la f\u00f3rmula de similitud matem\u00e1tica principal que permite medir la dispersi\u00f3n entre las dimensiones del peso de una neurona y las del vector ambiental es la m\u00e9trica de distancia eucl\u00eddea ordinaria.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfCu\u00e1l de los siguientes es un problema com\u00fan de las redes SOM?<br>",
    "options": [
      "a) No permiten reducci\u00f3n de dimensionalidad.",
      "b) Siempre requieren entrenamiento supervisado.",
      "c) Algunas neuronas pueden no ser entrenadas si est\u00e1n alejadas del espacio de entrada.",
      "d) No pueden representar relaciones topol\u00f3gicas.",
      "e) No necesitan inicializaci\u00f3n de pesos."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Debido a que el SOM tiene una topolog\u00eda geom\u00e9trica predefinida y r\u00edgida (una cuadr\u00edcula fija), si algunos nodos del mapa se inicializan de forma aleatoria en coordenadas muy remotas de donde realmente se halla la concentraci\u00f3n de datos de entrada, y la funci\u00f3n de vecindario se reduce r\u00e1pidamente, estas neuronas podr\u00edan no llegar a ganar jam\u00e1s frente a ning\u00fan est\u00edmulo. Estas \"neuronas muertas\" son un defecto arquitect\u00f3nico de los SOM, problema que m\u00e1s adelante fue solventado en redes din\u00e1micas de crecimiento libre como las GNG.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "En una red SOM, \u00bfqu\u00e9 ocurre con el tama\u00f1o del vecindario a lo largo del entrenamiento?<br>",
    "options": [
      "a) Permanece constante.",
      "b) Aumenta progresivamente.",
      "c) Disminuye con el tiempo.",
      "d) Se elimina tras la fase de aprendizaje.",
      "e) Se calcula de forma aleatoria."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>El aprendizaje en mapas de Kohonen se divide en dos fases bien diferenciadas que permiten la estabilidad. Primero, una \"fase de ordenaci\u00f3n\", donde el vecindario es extremadamente amplio para forzar una macro-organizaci\u00f3n topol\u00f3gica gruesa de toda la red. Posteriormente, se transita a la \"fase de convergencia\", durante la cual tanto la tasa de aprendizaje como el radio topol\u00f3gico de vecindad disminuyen de forma asint\u00f3tica y progresiva para efectuar el ajuste y estabilizaci\u00f3n fina de los centroides.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "En la fase de operaci\u00f3n de una red SOM:<br>",
    "options": [
      "a) Se modifican los pesos de las neuronas.",
      "b) Se entrena la red con nuevos datos.",
      "c) Se categoriza un patr\u00f3n seg\u00fan la neurona m\u00e1s similar.",
      "d) Se actualiza la topolog\u00eda de la red.",
      "e) Ninguna de las anteriores es correcta."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>El ciclo de vida de un SOM consta de la fase de aprendizaje (donde los pesos son fluidos) y el \"modo de operaci\u00f3n\" (fase productiva). Una vez alcanzado este \u00faltimo, la estructura del modelo se congela de manera inmutable; los pesos ya no se alteran y el sistema solo se utiliza para recibir vectores y proyectarlos o abstraerlos hacia la neurona que resulte m\u00e1s cercana (clasificaci\u00f3n o mapeo pasivo).<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfQu\u00e9 representa el vector de pesos de una neurona en la capa de competici\u00f3n de una SOM?<br>",
    "options": [
      "a) La tasa de aprendizaje local.",
      "b) El error de representaci\u00f3n de dicha neurona.",
      "c) El patr\u00f3n de entrada m\u00e1s com\u00fan que ha activado esa neurona.",
      "d) Un prototipo o centroide que representa un grupo de patrones.",
      "e) El n\u00famero de veces que ha sido ganadora."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>El aprendizaje competitivo empuja org\u00e1nicamente a cada vector de pesos de la capa competitiva a moverse hacia las densidades del conjunto de datos. Como resultado final de la autoorganizaci\u00f3n, cada neurona act\u00faa fenomenol\u00f3gicamente como un \"prototipo\" o centroide matem\u00e1tico que representa eficientemente a todo un grupo (cl\u00faster) de patrones que comparten caracter\u00edsticas pr\u00f3ximas en el entorno real.<br>",
    "correct": 3,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfCu\u00e1l de las siguientes tareas es especialmente adecuada para una red SOM?<br>",
    "options": [
      "a) Predicci\u00f3n de valores num\u00e9ricos.",
      "b) Agrupamiento y visualizaci\u00f3n de datos de alta dimensi\u00f3n.",
      "c) Traducci\u00f3n autom\u00e1tica de lenguas.",
      "d) Detecci\u00f3n de anomal\u00edas supervisada.",
      "e) Reconocimiento de voz con salida categ\u00f3rica."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Las redes de mapas autoorganizativos son herramientas conexionistas inigualables en t\u00e9cnicas de *clustering* no supervisado y de extracci\u00f3n de conocimiento. Su ventaja cr\u00edtica radica en mapear conjuntos de datos enrevesados formados por alta dimensionalidad para \"aplastarlos\" visualmente sobre una malla bi o tridimensional discreta y f\u00e1cilmente interpretable por humanos, salvaguardando las relaciones espaciales y l\u00f3gicas originales.<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfQu\u00e9 diferencia clave tienen los modelos GCS frente a SOM?<br>",
    "options": [
      "a) No utilizan aprendizaje no supervisado.",
      "b) Ajustan din\u00e1micamente la arquitectura durante el entrenamiento.",
      "c) No permiten visualizaci\u00f3n de datos.",
      "d) Solo funcionan con entradas binarias.",
      "e) No usan distancia eucl\u00eddea para calcular similitud."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Las redes SOM (Mapas de Kohonen) cl\u00e1sicas poseen una topolog\u00eda y un n\u00famero de neuronas fijo y r\u00edgido predefinido desde antes de comenzar a entrenar (por ejemplo, una malla de 10x10). La gran innovaci\u00f3n de la arquitectura GCS (Growing Cell Structures) es su naturaleza constructiva y evolutiva: a\u00f1aden y eliminan neuronas de forma din\u00e1mica durante el propio entrenamiento para adaptarse org\u00e1nicamente a las regiones con mayor error o densidad de datos,,,.<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_junio_2026",
    "question": "El t\u00e9rmino \"Fitness\" en un Algoritmo Gen\u00e9tico se refiere a...<br>",
    "options": [
      "a) Una forma de intercambiar material gen\u00e9tico entre varios individuos de la poblaci\u00f3n.",
      "b) Una forma o funci\u00f3n para construir individuos y obtener la poblaci\u00f3n inicial.",
      "c) Una operaci\u00f3n gen\u00e9tica que cambia la composici\u00f3n de los descendientes.",
      "d) El valor que permite evaluar lo bien adaptado que est\u00e1 cada individuo de la poblaci\u00f3n para obtener la soluci\u00f3n al problema que se pretende resolver.",
      "e) Una estrategia que consiste en mantener al mejor individuo y copiarlo directamente a la siguiente generaci\u00f3n para evitar perder la mejor soluci\u00f3n obtenida."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>En la Computaci\u00f3n Evolutiva, la funci\u00f3n de aptitud o Fitness es el criterio m\u00e9trico fundamental que dictamina la supervivencia,. Consiste en una f\u00f3rmula matem\u00e1tica que eval\u00faa a cada individuo (cromosoma) del enjambre y le asigna una puntuaci\u00f3n que representa cu\u00e1n bien resuelve o se adapta a la problem\u00e1tica planteada, determinando sus posibilidades probabil\u00edsticas de reproducirse o ser descartado en la fase de selecci\u00f3n,.<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfCu\u00e1l de las siguientes es una t\u00e9cnica de mutaci\u00f3n en los Algoritmos Gen\u00e9ticos?<br>",
    "options": [
      "a) Uniforme",
      "b) M\u00e1scara",
      "c) Intercambio",
      "d) G\u00e9nesis",
      "e) Punto flotante"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En los Algoritmos Gen\u00e9ticos, el operador de mutaci\u00f3n es fundamental para la \"exploraci\u00f3n\" del espacio de b\u00fasqueda, ya que su objetivo es inyectar variabilidad (ruido estoc\u00e1stico) en la poblaci\u00f3n alterando posiciones aleatorias de los cromosomas. Esta variabilidad es indispensable para evitar la p\u00e9rdida irreversible de informaci\u00f3n gen\u00e9tica (alelos) y permitir que el algoritmo escape de m\u00e1ximos o m\u00ednimos locales, previniendo la convergencia prematura. Dentro de las t\u00e9cnicas est\u00e1ndar utilizadas para aplicar la mutaci\u00f3n, se documentan expl\u00edcitamente las siguientes: mutaci\u00f3n de bit, mutaci\u00f3n multibit, mutaci\u00f3n de gen, mutaci\u00f3n multigen, mutaci\u00f3n de barajado y la mutaci\u00f3n de intercambio. Por lo tanto, el \"intercambio\" es una t\u00e9cnica tipificada y v\u00e1lida, descartando opciones inventadas o ajenas a este operador como el punto flotante o la m\u00e1scara.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_junio_2026",
    "question": "En Programaci\u00f3n Gen\u00e9tica...<br>",
    "options": [
      "a) El cromosoma nunca representa una posible soluci\u00f3n para las variables del problema.",
      "b) Los operadores de cruce y mutaci\u00f3n se aplican para invertir la poblaci\u00f3n de cromosomas.",
      "c) Los individuos se representan mediante \u00e1rboles, lo cual es una de las principales diferencias con los Algoritmos Gen\u00e9ticos.",
      "d) La forma de codificar los individuos es la misma que en los Algoritmos Gen\u00e9ticos; solo cambia la forma de aplicar el cruce y la mutaci\u00f3n.",
      "e) No existe ninguna t\u00e9cnica en Computaci\u00f3n Evolutiva denominada Programaci\u00f3n Gen\u00e9tica."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La Programaci\u00f3n Gen\u00e9tica (desarrollada por John Koza) comparte el mismo motor evolutivo y principio de selecci\u00f3n natural que los Algoritmos Gen\u00e9ticos. Sin embargo, la mayor diferencia arquitect\u00f3nica entre ambas disciplinas es la forma en la que se codifica la soluci\u00f3n al problema. Mientras que en los Algoritmos Gen\u00e9ticos las posibles soluciones o individuos se estructuran mediante vectores planos (como cadenas de bits, caracteres o n\u00fameros reales), en la Programaci\u00f3n Gen\u00e9tica la codificaci\u00f3n se realiza computacionalmente en forma de \u00e1rbol sint\u00e1ctico. Para elaborar m\u00e1s sobre esto, en estas representaciones arb\u00f3reas, la estructura imita c\u00f3mo los compiladores leen los programas inform\u00e1ticos. El genotipo se divide en dos tipos de componentes: los nodos internos (no terminales), que albergan forzosamente a los operadores l\u00f3gicos o aritm\u00e9ticos (como +, -, AND, OR, IF), y las hojas (nodos terminales), que se ubican en los extremos y corresponden a los valores primitivos o variables de entrada y constantes del problema. Por consiguiente, la representaci\u00f3n mediante \u00e1rboles es el rasgo definitorio y diferencial de la Programaci\u00f3n Gen\u00e9tica.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfCu\u00e1l de los siguientes problemas es m\u00e1s adecuado para ser resuelto mediante un Algoritmo Gen\u00e9tico?<br>",
    "options": [
      "a) Encontrar el m\u00ednimo de una funci\u00f3n cuadr\u00e1tica convexa y suave.",
      "b) Encontrar el \u00f3ptimo de una funci\u00f3n diferenciable de una sola variable.",
      "c) Enumerar todas las posibles soluciones en un espacio de b\u00fasqueda muy peque\u00f1o.",
      "d) Encontrar una ruta para el Problema del Viajante con muchas ciudades.",
      "e) Encontrar el \u00f3ptimo global exacto cuando debe garantizarse matem\u00e1ticamente la mejor soluci\u00f3n."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Los Algoritmos Gen\u00e9ticos son metaheur\u00edsticas estoc\u00e1sticas de alto coste computacional; su uso se justifica exclusivamente en dominios de alt\u00edsima complejidad o NP-Hard donde las soluciones directas o anal\u00edticas fracasan. El Problema del Viajante de Comercio (TSP) con un volumen masivo de ciudades genera una explosi\u00f3n combinatoria inmanejable para las matem\u00e1ticas tradicionales, constituyendo el escenario id\u00f3neo para utilizar Computaci\u00f3n Evolutiva,.<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_junio_2026",
    "question": "En un Algoritmo Gen\u00e9tico, \u00bfqu\u00e9 nombre recibe el proceso en el que el mejor individuo de la poblaci\u00f3n se conserva para la siguiente generaci\u00f3n?<br>",
    "options": [
      "a) Seeding",
      "b) Elitismo",
      "c) Aprendizaje lamarckiano",
      "d) Steady-state",
      "e) Hill Climbing"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Como se detall\u00f3 previamente, el proceso que salva intacto al individuo con el fitness supremo, esquivando las fases destructivas de la recombinaci\u00f3n para perpetuarlo en la siguiente iteraci\u00f3n (generaci\u00f3n T+1), recibe acad\u00e9micamente el nombre de estrategia elitista o Elitismo,,.<br>",
    "correct": 1,
    "category": "evolutiva"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfCu\u00e1l de los siguientes no es un m\u00e9todo de selecci\u00f3n utilizado en los Algoritmos Gen\u00e9ticos?<br>",
    "options": [
      "a) Torneo",
      "b) Sobrante estoc\u00e1stico",
      "c) Universal estoc\u00e1stica",
      "d) Ruleta",
      "e) Sobrante determin\u00edstico"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Las t\u00e9cnicas algor\u00edtmicas can\u00f3nicas incorporadas en los dise\u00f1os gen\u00e9ticos se fundamentan en introducir variabilidad estoc\u00e1stica, contando con opciones ampliamente reconocidas como el Torneo, la Ruleta, la selecci\u00f3n Universal Estoc\u00e1stica o el Sobrante Estoc\u00e1stico. El concepto de \"sobrante determin\u00edstico\" no forma parte del abanico est\u00e1ndar de operadores de selecci\u00f3n en el temario.<br>",
    "correct": 4,
    "category": "evolutiva"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfQu\u00e9 mecanismo de selecci\u00f3n tiende a distribuir la b\u00fasqueda de forma m\u00e1s amplia en el espacio de estados?<br>",
    "options": [
      "a) Selecci\u00f3n por ruleta, donde los individuos se asignan a sectores ponderados por su fitness y los sectores con mayor peso tienen mayor probabilidad de no ser seleccionados.",
      "b) Selecci\u00f3n por ruleta, donde todos los individuos tienen exactamente la misma probabilidad de ser seleccionados.",
      "c) Selecci\u00f3n por torneo, donde se elige un subconjunto de individuos de forma aleatoria y se selecciona el individuo con mejor valor de fitness.",
      "d) Selecci\u00f3n por torneo, donde los individuos compiten por parejas y el ganador se selecciona con una probabilidad proporcional a su fitness.",
      "e) Selecci\u00f3n por torneo, donde los individuos se agrupan en subconjuntos y se seleccionan los dos individuos con menor fitness para la reproducci\u00f3n."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La selecci\u00f3n por Torneo selecciona un \"ring\" aleatorio de individuos (un subconjunto del censo total) y hace que compitan, logrando que el de mejor fitness de ese grupo sobreviva. Este m\u00e9todo posee una gran ventaja sobre la Ruleta pura, pues su presi\u00f3n selectiva se puede modular controlando el tama\u00f1o del subconjunto. Al dar oportunidad a individuos medianos de ganar en sus torneos locales, distribuye y explora el espacio de b\u00fasqueda de manera mucho m\u00e1s amplia, evitando la endogamia o convergencia prematura en un m\u00ednimo local.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfCu\u00e1l de las siguientes afirmaciones describe mejor el cruce en los Algoritmos Gen\u00e9ticos?<br>",
    "options": [
      "a) El cruce selecciona los mejores individuos de la poblaci\u00f3n y elimina los m\u00e1s d\u00e9biles.",
      "b) El cruce combina material gen\u00e9tico de dos individuos progenitores para crear nuevos descendientes.",
      "c) El cruce cambia aleatoriamente genes individuales para introducir valores completamente nuevos en la poblaci\u00f3n.",
      "d) El cruce eval\u00faa la calidad de cada individuo mediante la funci\u00f3n de fitness.",
      "e) El cruce garantiza que los descendientes siempre ser\u00e1n mejores que ambos progenitores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>El Cruce (o Crossover) representa el operador principal de \"Explotaci\u00f3n\" dentro del motor evolutivo. Su objetivo fundamental y excluyente es entrelazar y combinar de manera eficiente el material cromos\u00f3mico valioso (los \"Building Blocks\" o bloques de genes exitosos) pertenecientes a dos padres distintos, engendrando hijos fenot\u00edpicamente novedosos que hereden las mejores caracter\u00edsticas conjuntas para progresar en la resoluci\u00f3n del problema,.<br>",
    "correct": 1,
    "category": "evolutiva"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfCu\u00e1l de las siguientes simulaciones es un ejemplo cl\u00e1sico de vida artificial?<br>",
    "options": [
      "a) El juego del laberinto",
      "b) El Juego de la Vida de Conway",
      "c) Hill Climbing",
      "d) La estrategia elitista",
      "e) Ninguna de las anteriores"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Dentro de los enfoques experimentales inspirados biol\u00f3gicamente, los aut\u00f3matas celulares son el m\u00e1ximo exponente matem\u00e1tico de la Vida Artificial (VA). Entre ellos, la obra magna m\u00e1s cl\u00e1sica es el \"Juego de la Vida\" formulado por el matem\u00e1tico John Conway: una malla bidimensional sin estado central donde \"organismos\" celulares simples subsisten, se reproducen o perecen guiados por reglas locales estrictas dependientes de sus vecinos.<br>",
    "correct": 1,
    "category": "evolutiva"
  },
  {
    "source": "examen_junio_2026",
    "question": "\u00bfQu\u00e9 afirmaci\u00f3n describe mejor el entrelazamiento cu\u00e1ntico?<br>",
    "options": [
      "a) Dos qubits comparten un estado vinculado, por lo que medir uno proporciona informaci\u00f3n sobre el otro.",
      "b) Dos qubits alternan sus estados en direcciones opuestas hasta que se realiza una medici\u00f3n.",
      "c) Dos qubits almacenan el mismo valor cl\u00e1sico en dos ubicaciones f\u00edsicas diferentes.",
      "d) Un qubit se copia en otro qubit para evitar la p\u00e9rdida de informaci\u00f3n.",
      "e) Un qubit controla a otro enviando informaci\u00f3n m\u00e1s r\u00e1pido que la luz."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>En los preceptos incorporados por la computaci\u00f3n cu\u00e1ntica al temario (Tema 10), el entrelazamiento cu\u00e1ntico supone un fen\u00f3meno fundacional de la mec\u00e1nica subat\u00f3mica, mediante el cual dos Qubits quedan \u00edntimamente entrelazados; colapsar o medir el estado anal\u00edtico de uno de los Qubits define instant\u00e1neamente y a cualquier distancia la informaci\u00f3n de su pareja complementaria.<br>",
    "correct": 0,
    "category": "evolutiva"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Sobre el grafo del espacio de estados, \u00bfqu\u00e9 soluci\u00f3n encuentra el algoritmo A*?<br>",
    "options": [
      "a) A \u2192 C \u2192 G \u2192 K",
      "b) A \u2192 C \u2192 F \u2192 J",
      "c) A \u2192 B \u2192 D \u2192 H \u2192 L \u2192 M",
      "d) A* no encuentra la soluci\u00f3n"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>El algoritmo A* siempre expande el nodo con el menor valor $f(n) = g(n) + h(n)$. Si trazamos la ejecuci\u00f3n desde A:<br>1. Expandimos A. Sus sucesores son B ($f=1+5=6$) y C ($f=1+3=4$).<br>2. El menor es C. Lo expandimos y obtenemos F ($f=2+6=8$) y G ($f=2+8=10$).<br>3. La frontera tiene a B(6), F(8) y G(10). El menor es B. Al expandir B obtenemos D(9) y E(11).<br>4. La frontera ahora es F(8), D(9), G(10), E(11). El menor es F. Lo expandimos y obtenemos I ($f=3+4=7$) y J ($f=3+2=5$).<br>5. La frontera es J(5), I(7), D(9), G(10), E(11). El menor es J. Expandimos J y llegamos a K ($f=4+0=4$).<br>El camino trazado por A* es indiscutiblemente `A \u2192 C \u2192 F \u2192 J \u2192 K`. La opci\u00f3n B es la \u00fanica que marca este recorrido \u00f3ptimo a trav\u00e9s de F y J.<br>",
    "correct": 1,
    "category": "busqueda"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Sobre el mismo espacio de estados, \u00bfqu\u00e9 soluci\u00f3n encuentra el algoritmo de b\u00fasqueda en profundidad iterativa?<br>",
    "options": [
      "a) A \u2192 C \u2192 G \u2192 K",
      "b) A \u2192 C \u2192 F \u2192 J",
      "c) A \u2192 B \u2192 D \u2192 H \u2192 L \u2192 M",
      "d) No encuentra la soluci\u00f3n"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>La profundidad iterativa (IDS) explora el \u00e1rbol nivel a nivel, pero dentro de cada nivel utiliza una estrategia de profundidad pura (normalmente guiada por orden alfab\u00e9tico de izquierda a derecha).<br>* L\u00edmite 0 y 1: No llega a la meta.<br>* L\u00edmite 2: Explora las ramas hasta profundidad 2 (A-B-D, A-B-E, A-C-F, A-C-G). Ninguno es meta.<br>* L\u00edmite 3: Se sumerge a profundidad 3. Explora primero todo lo que cuelga de B, y luego lo que cuelga de C. Al bajar por C, explora `A \u2192 C \u2192 F \u2192 I` y `A \u2192 C \u2192 F \u2192 J` (ninguno es meta). Finalmente explora la siguiente rama: `A \u2192 C \u2192 G \u2192 K`. \u00a1K es un nodo meta ($h=0$) y lo acaba de encontrar a profundidad 3! Por tanto, este es el primer camino v\u00e1lido que el algoritmo devuelve.<br>",
    "correct": 0,
    "category": "busqueda"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Con el enunciado anterior, \u00bfcu\u00e1ntas veces se expandir\u00e1 el nodo B?<br>",
    "options": [
      "a) 0",
      "b) 1",
      "c) 2",
      "d) 3"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>El comportamiento de IDS se basa en reiniciar la b\u00fasqueda desde cero cada vez que aumenta el l\u00edmite de profundidad.<br>* L\u00edmite 0: Se expande A.<br>* L\u00edmite 1: Se expande A. Se generan B y C, pero **no** se expanden porque hemos chocado con el l\u00edmite.<br>* L\u00edmite 2: Se expande A. Luego se expande B (1\u00aa vez) y C.<br>* L\u00edmite 3: Se expande A. Luego se expande B (2\u00aa vez) para llegar a sus nietos.<br>Por lo tanto, a lo largo de toda la ejecuci\u00f3n para llegar a la profundidad 3, el nodo B se ha llegado a expandir exactamente 2 veces.<br>",
    "correct": 2,
    "category": "busqueda"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En las redes sem\u00e1nticas, el razonamiento por rastreo...<br>",
    "options": [
      "a) No puede asegurar la validez de las inferencias obtenidas",
      "b) emplea exclusivamente las relaciones de jerarqu\u00eda de la red.",
      "c) evita la ambig\u00fcedad propia del lenguaje natural, al contrario que el razonamiento por emparejamiento.",
      "d) Ninguna de las anteriores es correcta."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Seg\u00fan la teor\u00eda de los modelos declarativos estructurados, el mecanismo de inferencia fundamental de una red sem\u00e1ntica es la \"herencia de propiedades\". Este proceso algor\u00edtmico, tambi\u00e9n llamado rastreo, consiste en que cualquier propiedad cierta para un nodo superior \"cae por gravedad\" hacia sus ejemplares. Para lograr esto, el algoritmo rastrea y navega exclusivamente a trav\u00e9s de los arcos de jerarqu\u00eda taxon\u00f3mica (como `ES_UN` o `SUBCOJUNTO_DE`).<br>",
    "correct": 1,
    "category": "representacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfEn qu\u00e9 se diferencian las reglas IFANY e IFSOME<br>",
    "options": [
      "a) IFANY investiga toda la premisa, mientras que IFSOME ejecuta la acci\u00f3n cuando encuentra una cl\u00e1usula cierta",
      "b) IFSOME investiga toda la premisa, mientras que IFANY ejecuta la acci\u00f3n cuando encuentra una cl\u00e1usula cierta",
      "c) IFANY requiere que una cl\u00e1usula sea cierta para ejecutar una acci\u00f3n, mientras que IFSOME requiere m\u00e1s de una (al menos 2)",
      "d) IFSOME requiere que una cl\u00e1usula sea cierta para ejecutar una acci\u00f3n, mientras que IFANY requiere m\u00e1s de una (al menos 2)"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Esta es una pregunta te\u00f3rica cl\u00e1sica de los Sistemas de Producci\u00f3n. La regla IFANY funciona como un mecanismo de cortocircuito (no exhaustivo): en cuanto detecta que la primera condici\u00f3n es cierta, deja de leer y dispara la acci\u00f3n. Por el contrario, la regla IFSOME es de naturaleza exhaustiva; aunque encuentre r\u00e1pidamente una cl\u00e1usula cierta, est\u00e1 obligada por su arquitectura a investigar toda la premisa completa para recopilar todos los datos antes de ejecutar la acci\u00f3n.<br>",
    "correct": 1,
    "category": "representacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Las arquitecturas b\u00e1sicas de agentes son:<br>",
    "options": [
      "a) Reactivo, reactivo con estado, basado en metas y basado en utilidades",
      "b) Reactivo, basado en metas, basado en metas con estado y basado en utilidades",
      "c) Activo, reactivo, reactivo con estado y basado en metas",
      "d) Activo, reactivo, basado en metas con estado y basado en utilidades"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Seg\u00fan la clasificaci\u00f3n te\u00f3rica cl\u00e1sica establecida por los autores Russell & Norvig, los agentes solucionadores de problemas se estructuran y dividen en cuatro familias o arquitecturas b\u00e1sicas. En primer lugar, los agentes reactivos simples, que seleccionan sus acciones gui\u00e1ndose \u00fanicamente por las percepciones actuales, sin memoria. En segundo lugar, los agentes reactivos basados en modelos (o con estado), que mantienen un estado interno que les permite rastrear c\u00f3mo evoluciona el mundo. En tercer lugar, los agentes basados en metas u objetivos, que utilizan la planificaci\u00f3n para encontrar la secuencia de acciones que les permite alcanzar sus prop\u00f3sitos. Y, finalmente, los agentes basados en utilidad, que buscan siempre maximizar una medida de rendimiento, asociada a un valor num\u00e9rico que representa la \"bondad\" o preferencia de un estado.<br>",
    "correct": 0,
    "category": "introduccion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Sea un dominio con tres manifestaciones posibles [M(1), M(2), M(3)] y dos interpretaciones [I(1), I(2)]. Desde una perspectiva categ\u00f3rica, y asumiendo el siguiente criterio:<br>#### Tabla de Manifestaciones:<br>| | **a** | **b** | **c** | **d** | **e** | **f** | **g** | **h** |<br>|---|---|---|---|---|---|---|---|---|<br>| **M(1)** | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 1 |<br>| **M(2)** | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 |<br>| **M(3)** | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 1 |<br>#### Tabla de Interpretaciones:<br>| | **x** | **y** | **z** | **t** |<br>|---|---|---|---|---|<br>| **I(1)** | 0 | 0 | 1 | 1 |<br>| **I(2)** | 0 | 1 | 0 | 1 |<br>#### Regla del Dominio:<br>`R1: M(1) V M(2) V M(3) \u21d2 I(1) V I(2)`<br>",
    "options": [
      "a) $m_4 i_1$",
      "b) $m_4 i_2$",
      "c) $m_4 i_3$",
      "d) Ninguna de las opciones propuestas pertenece a la BLR"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Evaluemos si alguna de las interpretaciones para la manifestaci\u00f3n $m_4$ logra sobrevivir a las reglas del dominio (es decir, si pertenece a la BLR).<br>* Las reglas dadas en 2025 son: `R1: M(1) v M(2) v M(3) => I(1) v I(2) | R2: I(1) => ~M(1) AND M(2) | R3: I(2) AND ~I(1) => M(1) AND M(3)`<br>* En $m_4$, tenemos $M(1)=1$, mientras que el resto de las manifestaciones son $0$.<br>* Si probamos la opci\u00f3n A ($m_4 i_1$): Aqu\u00ed $I(1)=0$ e $I(2)=0$. La regla R1 exige que si hay manifestaciones activas (tenemos un 1), debe haber al menos una interpretaci\u00f3n activa. Al ser ambas cero, R1 se rompe. Descartada.<br>* Si probamos la opci\u00f3n B ($m_4 i_2$): Aqu\u00ed $I(1)=0$ e $I(2)=1$. Evaluamos R3: Su antecedente es cierto ($1$ y $\\neg 0$). Pero su consecuente exige $M(1) \\land M(3)$. Como $M(3)=0$, el consecuente es falso. Implicar algo falso desde un antecedente verdadero rompe la regla R3. Descartada.<br>* Si probamos la opci\u00f3n C ($m_4 i_3$): Aqu\u00ed $I(1)=1$. Evaluamos R2: Su antecedente es cierto ($1$). Su consecuente exige $\\neg M(1) \\land M(2)$. Como $M(1)=1$, $\\neg 1$ es $0$. El consecuente es falso. Se rompe R2. Descartada.<br>Como todas las combinaciones con $m_4$ violan alguna regla, este complejo manifestaci\u00f3n es un escenario absurdo o imposible, y ninguna de las opciones propuestas pertenece a la BLR.<br>",
    "correct": 3,
    "category": "razonamiento"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfEn qu\u00e9 se diferencian las dos ramas cl\u00e1sicas de la IA?<br>",
    "options": [
      "a) La rama subsimb\u00f3lica tiene menos capacidad para explicar sus resultados",
      "b) Los sistemas expertos y las redes de neuronas artificiales son sus paradigmas",
      "c) Una se basa en la estimulaci\u00f3n y la otra en la emulaci\u00f3n",
      "d) Ninguna de las anteriores es correcta",
      "e) A y B son correctas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Seg\u00fan los fundamentos introductorios, la IA Simb\u00f3lica tiene una alta explicabilidad (es transparente), mientras que la Subsimb\u00f3lica es una \"caja negra\" con menor capacidad para explicar c\u00f3mo ha llegado a sus resultados (opci\u00f3n A correcta). Adem\u00e1s, se diferencian en sus paradigmas fundacionales: la simb\u00f3lica orbita en torno a los Sistemas Expertos y la l\u00f3gica, mientras que la subsimb\u00f3lica tiene a las Redes de Neuronas Articiales como su estandarte absoluto (opci\u00f3n B correcta).<br>",
    "correct": 4,
    "category": "conexionistas"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfQu\u00e9 significa que los sistemas subsimb\u00f3licos pertenecen a la rama de la emulaci\u00f3n de la IA?<br>",
    "options": [
      "a) Que la red aprender\u00e1 muy r\u00e1pido las diferencias entre ellos.",
      "b) Que es necesario poner m\u00e1s capas intermedias en la Red para representar mejor su conocimiento.",
      "c) Que pretendemos reproducir la funci\u00f3n del sistema biol\u00f3gico inteligente.",
      "d) Que pretendemos reproducir la estructura del sistema biol\u00f3gico inteligente.",
      "e) Que pretendemos reproducir tanto la estructura como la funci\u00f3n del sistema biol\u00f3gico inteligente."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>La simulaci\u00f3n (propia de la IA simb\u00f3lica) busca replicar el comportamiento exterior o la funci\u00f3n sin importar c\u00f3mo est\u00e9 construido el programa por dentro. La emulaci\u00f3n, por el contrario, va un paso m\u00e1s all\u00e1 y a un nivel m\u00e1s profundo: intenta reproducir de manera fidedigna la \"arquitectura o estructura\" subyacente (creando neuronas y sinapsis artificiales) para que, de esa estructura biomim\u00e9tica, nazca org\u00e1nicamente la \"funci\u00f3n\" inteligente.<br>",
    "correct": 4,
    "category": "conexionistas"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfQu\u00e9 es una sinapsis?<br>",
    "options": [
      "a) El intercambio de energ\u00eda entre neuronas.",
      "b) Procedimiento fisiol\u00f3gico por el cual mueren las neuronas.",
      "c) Intercambio de energ\u00eda entre neuronas y astrocitos.",
      "d) Intercambio de informaci\u00f3n entre los elementos del sistema nervioso.",
      "e) Todas las anteriores son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>A nivel neurobiol\u00f3gico b\u00e1sico y trasladado a los sistemas conexionistas, las sinapsis son los enlaces funcionales unidireccionales que permiten la comunicaci\u00f3n y el trasvase de se\u00f1ales o informaci\u00f3n entre las distintas c\u00e9lulas del sistema nervioso, alterando el potencial de la neurona receptora.<br>",
    "correct": 3,
    "category": "feedforward"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En la evoluci\u00f3n hist\u00f3rica de los sistemas conexionistas, \u00bfcu\u00e1les son precursores computacionales?<br>",
    "options": [
      "a) Rosenblueth, Wiener y Bigelow.",
      "b) McCulloch y Pitts.",
      "c) Craik.",
      "d) Todos los anteriores.",
      "e) Ninguno de los anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>El nacimiento de la Inteligencia Artificial re\u00fane a pioneros de diversas disciplinas. Por un lado, cient\u00edficos como Santiago Ram\u00f3n y Cajal, Donald Hebb o Warren McCulloch y Walter Pitts (estos dos \u00faltimos al trasladar la biolog\u00eda a modelos l\u00f3gico-matem\u00e1ticos en 1943) son considerados estrictamente precursores biol\u00f3gicos de las redes neuronales. Por otro lado, investigadores como Wiener, Rosenblueth, Bigelow y Craik, responsables de trabajos publicados tambi\u00e9n en 1943, sentaron las bases de la IA moderna desde el campo de la Cibern\u00e9tica. Los verdaderos precursores computacionales, catalogados como los \"padres indiscutibles de las ciencias de la computaci\u00f3n\", son figuras como Alan Turing, John Von Neumann o Zuse y Sreyers, quienes sentaron las bases de la arquitectura secuencial y la computaci\u00f3n necesaria para implementar la IA. Al no aparecer ninguno de estos precursores computacionales en las opciones A, B y C, la \u00fanica respuesta v\u00e1lida es la E.<br>",
    "correct": 4,
    "category": "conexionistas"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En la evoluci\u00f3n hist\u00f3rica de los sistemas conexionistas, \u00bfcu\u00e1les son precursores biol\u00f3gicos?<br>",
    "options": [
      "a) Minsky.",
      "b) Cajal.",
      "c) Papert.",
      "d) Todos los anteriores.",
      "e) Ninguno de los anteriores."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Los precursores biol\u00f3gicos son aquellos investigadores procedentes de la fisiolog\u00eda o la neurociencia que sentaron las bases org\u00e1nicas que m\u00e1s tarde la IA intentar\u00eda emular computacionalmente. A finales del siglo XIX, Santiago Ram\u00f3n y Cajal describi\u00f3 la estructura fundamental de la neurona, proponiendo las teor\u00edas esenciales sobre las que se asientan hoy en d\u00eda todos los desarrollos de los sistemas adaptativos de emulaci\u00f3n. Por el contrario, autores como Marvin Minsky y Seymour Papert no fueron precursores biol\u00f3gicos, sino que en 1969 publicaron el libro \"Perceptrons\", en el cual demostraron las limitaciones matem\u00e1ticas del perceptr\u00f3n, desautorizando el modelo conexionista y provocando el conocido como \"invierno de la IA\".<br>",
    "correct": 1,
    "category": "conexionistas"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfCausas del inter\u00e9s actual por los Sistemas Inteligentes Subsimb\u00f3licos?<br>",
    "options": [
      "a) El inter\u00e9s existente por la b\u00fasqueda de arquitecturas de computadoras que permitan el procesamiento en paralelo.",
      "b) La habilidad de estos sistemas para aprender autom\u00e1ticamente.",
      "c) La habilidad para poder funcionar de forma aceptable tanto en presencia de informaci\u00f3n inexacta como cuando se producen deterioros o fallos en sus componentes.",
      "d) Su similitud con los modelos neurofisiol\u00f3gicos del cerebro, pudi\u00e9ndose de este modo intercambiar modelos e investigaciones entre los de RNA y Neurociencias, potenci\u00e1ndose ambas.",
      "e) Todas las anteriores son correctas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Los sistemas conexionistas (rama subsimb\u00f3lica) han experimentado un inmenso resurgir en las \u00faltimas d\u00e9cadas gracias a sus innegables ventajas. Estas redes neuronales destacan por su capacidad intr\u00ednseca para aprender y extraer patrones autom\u00e1ticamente de grandes vol\u00famenes de datos (sin necesidad de reglas expl\u00edcitas programadas). Adem\u00e1s, a diferencia de la IA simb\u00f3lica cl\u00e1sica, su conocimiento se distribuye en los pesos de las conexiones, otorg\u00e1ndoles una gran robustez y tolerancia a fallos, permiti\u00e9ndoles operar eficazmente frente a ruido o componentes da\u00f1ados. Asimismo, el auge del procesamiento paralelo encaja perfectamente con su arquitectura. Finalmente, la retroalimentaci\u00f3n y similitud con la fisiolog\u00eda humana permite grandes sinergias cient\u00edficas con las Neurociencias.<br>",
    "correct": 4,
    "category": "conexionistas"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfCu\u00e1l de los siguientes avances tecnol\u00f3gicos no est\u00e1 relacionado con la IA?<br>",
    "options": [
      "a) Impresoras 3D y fabricaci\u00f3n aditiva.",
      "b) Realidades extendidas y \"gemelos digitales\"",
      "c) Tecnolog\u00edas convergentes \"NBIC\".",
      "d) Todas las anteriores est\u00e1n relacionadas.",
      "e) Ninguna de las anteriores est\u00e1 relacionada."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>La Inteligencia Artificial act\u00faa en la actualidad como la principal fuerza impulsora que subyace y potencia al resto de las grandes tendencias tecnol\u00f3gicas. Las impresoras 3D/4D y la fabricaci\u00f3n aditiva est\u00e1n siendo transformadas radicalmente gracias a la co-creatividad impulsada por m\u00e1quinas. Las realidades virtuales extendidas (como el Metaverso o los Gemelos Digitales) dependen de la IA para generar simulaciones inmersivas y modelar comportamientos predictivos en objetos f\u00edsicos. Igualmente, las tecnolog\u00edas convergentes NBIC (Nanotecnolog\u00eda, Biotecnolog\u00eda, Tecnolog\u00edas de la Informaci\u00f3n y Ciencias Cognitivas) aplican algoritmos inteligentes, como la bioinform\u00e1tica y las redes neuronales, para resolver retos complejos como el an\u00e1lisis de procesos patol\u00f3gicos o interfaces cerebro-m\u00e1quina (ej. Neuralink).<br>",
    "correct": 3,
    "category": "conexionistas"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfQu\u00e9 est\u00e1 en el \"Core\" de la mayor\u00eda de los avances tecnol\u00f3gicos?<br>",
    "options": [
      "a) Las potentes infraestructuras de c\u00f3mputo.",
      "b) Las dos ramas de la IA: simb\u00f3lica y subsimb\u00f3lica",
      "c) Los humanos proponiendo nuevos avances",
      "d) Todas las anteriores son correctas",
      "e) Ninguna de las anteriores es correcta"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Aunque a simple vista podr\u00edamos pensar que es la Inteligencia Artificial en general (lo que dar\u00eda por buena la opci\u00f3n B), el temario y los ex\u00e1menes de la UDC son muy tajantes en este matiz: el resurgir masivo que ha provocado la actual \"Tercera Primavera de la IA\" y que sustenta el n\u00facleo (\"core\") de las disrupciones tecnol\u00f3gicas (como Deep Learning o Big Data) pertenece de forma \u00fanica y exclusiva al paradigma de la **IA Subsimb\u00f3lica** o Conexionista. Como la opci\u00f3n B mezcla ambas ramas por igual y la rama subsimb\u00f3lica pura no aparece aislada en ninguna opci\u00f3n, la respuesta oficial dictada por la l\u00f3gica de la materia es la E.<br>",
    "correct": 4,
    "category": "conexionistas"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfQui\u00e9n establece que: \"las m\u00e1quinas s\u00f3lo pueden hacer todo aquello que sepamos c\u00f3mo ordenarle que haga\"?<br>",
    "options": [
      "a) Ram\u00f3n Llull.",
      "b) Ada Lovelace.",
      "c) Newell y Simon.",
      "d) Leibniz.",
      "e) Turing."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Este c\u00e9lebre axioma hist\u00f3rico se conoce acad\u00e9micamente como el \"R\u00e9gimen de Lovelace\". Ada Lovelace, pionera de la computaci\u00f3n, argumentaba que las m\u00e1quinas anal\u00edticas carec\u00edan de iniciativa propia o creatividad, limit\u00e1ndose a ejecutar mec\u00e1nicamente las rutinas matem\u00e1ticas expl\u00edcitas que el humano les hubiera programado.<br>",
    "correct": 1,
    "category": "conexionistas"
  },
  {
    "source": "examen_mayo_2025",
    "question": "El conjunto de datos que se utiliza para establecer los valores de los pesos de las conexiones de una RNA se denomina:<br>",
    "options": [
      "a) Conjunto de prueba",
      "b) Conjunto de validaci\u00f3n",
      "c) Conjunto de test",
      "d) Conjunto de entrenamiento",
      "e) Conjunto de normalizaci\u00f3n"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>El \"Training Set\" o conjunto de entrenamiento es la porci\u00f3n de datos sobre la que iteran los algoritmos de correcci\u00f3n (como el descenso del gradiente). Es el \u00fanico bloque de datos autorizado matem\u00e1ticamente para interactuar con la red y modificar/ajustar de forma directa las intensidades de sus pesos sin\u00e1pticos.<br>",
    "correct": 3,
    "category": "neurona"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Si durante el entrenamiento de una RNA, en un ciclo se obtiene un gradiente de 0, esto quiere decir...<br>",
    "options": [
      "a) Se est\u00e1 muy lejos de un m\u00ednimo.",
      "b) Se est\u00e1 muy cerca de un m\u00ednimo, pero no en \u00e9l.",
      "c) Se est\u00e1 en un m\u00ednimo, y es el global.",
      "d) Se est\u00e1 en un m\u00ednimo, pero no se sabe si es el global o uno local.",
      "e) El error es 0."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Durante el proceso de entrenamiento de una RNA (por ejemplo, mediante descenso de gradiente), el algoritmo eval\u00faa la superficie de la funci\u00f3n de error e itera modificando los pesos para descender por ella. Cuando se alcanza un punto donde la pendiente de la tangente (el gradiente) es exactamente igual a 0, el algoritmo determina que se encuentra posicionado en un m\u00ednimo de la funci\u00f3n y cesa de actualizar los pesos. No obstante, debido a la topolog\u00eda y no linealidad de la superficie del error en redes complejas (y dado que la inicializaci\u00f3n de los pesos es puramente aleatoria), el algoritmo es susceptible a quedarse atrapado y no puede garantizar matem\u00e1ticamente si dicho valle corresponde al m\u00ednimo absoluto y \u00f3ptimo (global) o simplemente a un valle secundario (m\u00ednimo local) en el cual el error sigue siendo alto. Es err\u00f3neo afirmar que el error sea cero, puesto que llegar a un error de cero suele ser sin\u00f3nimo de sobreentrenamiento y de que la red ha memorizado el ruido.<br>",
    "correct": 3,
    "category": "neurona"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Un perceptr\u00f3n (sin capas ocultas) no puede implementar una puerta l\u00f3gica con la funci\u00f3n<br>",
    "options": [
      "a) AND",
      "b) OR",
      "c) EXOR",
      "d) NOT",
      "e) Puede hacer cualquiera de las anteriores"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>A pesar del gran inter\u00e9s generado por el perceptr\u00f3n simple en sus inicios en los a\u00f1os 60, los investigadores Minsky y Papert demostraron matem\u00e1ticamente que las redes compuestas por una \u00fanica capa de pesos adaptativos adolecen de una severa limitaci\u00f3n computacional: \u00fanicamente son capaces de clasificar y aprender ejemplos que sean estrictamente separables de forma lineal mediante una l\u00ednea recta o un hiperplano en el espacio. El problema l\u00f3gico de la puerta EXOR (OR Exclusivo) es el paradigma por excelencia de un conjunto de datos que se cruza espacialmente y, por tanto, no es linealmente separable; lo que hace completamente imposible que un perceptr\u00f3n sin capas ocultas pueda resolverlo.<br>",
    "correct": 2,
    "category": "neurona"
  },
  {
    "source": "examen_mayo_2025",
    "question": "El n\u00famero de neuronas de entrada de un perceptr\u00f3n multicapa<br>",
    "options": [
      "a) Lo puede fijar el usuario como quiera",
      "b) Depende del problema a resolver",
      "c) Debe ser igual al n\u00famero de neuronas de salida, y lo puede fijar el usuario como quiera",
      "d) Debe ser igual al n\u00famero de neuronas de salida, pero depende del problema a resolver",
      "e) Debe ser distinto al n\u00famero de neuronas de salida"
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>En la arquitectura funcional de un perceptr\u00f3n multicapa, la capa de entrada es un mero canal pasivo cuya funci\u00f3n exclusiva es la de recibir e introducir los est\u00edmulos externos al sistema. Por lo tanto, el n\u00famero de c\u00e9lulas que conformar\u00e1n esta capa de entrada no se escoge por capricho ni tiene por qu\u00e9 coincidir con las dimensiones de salida, sino que est\u00e1 estricta e inexorablemente determinado por el n\u00famero de variables, caracter\u00edsticas (features) o dimensiones de los patrones del problema espec\u00edfico que se pretende resolver o clasificar.<br>",
    "correct": 1,
    "category": "feedforward"
  },
  {
    "source": "examen_mayo_2025",
    "question": "La funci\u00f3n de transferencia de las neuronas de un perceptr\u00f3n multicapa<br>",
    "options": [
      "a) Son solamente lineales",
      "b) Son solamente umbrales",
      "c) Son solamente de tipo sigmoidal",
      "d) Son solamente de tipo logar\u00edtmico",
      "e) Todas son falsas"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>Para que un perceptr\u00f3n multicapa sea capaz de superar las deficiencias del perceptr\u00f3n simple, extraiga caracter\u00edsticas complejas y act\u00fae verdaderamente como un \"aproximador universal\", es matem\u00e1ticamente indispensable que las funciones de transferencia que operen en sus capas ocultas incorporen no linealidad (tales como funciones de tipo sigmoidal o tangente hiperb\u00f3lica). Sin embargo, afirmar que \"solamente\" pueden ser de un tipo espec\u00edfico es falso, debido a que la arquitectura permite combinar de manera muy flexible diferentes funciones de activaci\u00f3n dentro del mismo sistema. Por ejemplo, en los problemas de regresi\u00f3n continua es una pr\u00e1ctica est\u00e1ndar y \u00f3ptima incorporar funciones no lineales en las capas ocultas y una funci\u00f3n puramente lineal en la capa de salida.<br>",
    "correct": 4,
    "category": "neurona"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Si a un perceptr\u00f3n multicapa entrenado se le presenta un patr\u00f3n en una zona donde no hab\u00eda patrones de entrenamiento...<br>",
    "options": [
      "a) Dar\u00e1 error en su funcionamiento",
      "b) Dar\u00e1 una salida de 0 siempre",
      "c) Dar\u00e1 una salida de -1 siempre",
      "d) Dar\u00e1 una salida de 1 siempre",
      "e) Dar\u00e1 una salida arbitraria e imprevisible"
    ],
    "justification": "<br>**Opci\u00f3n correcta: e)**<br><br>El objetivo supremo del aprendizaje en una Red Neuronal no es memorizar, sino adquirir la capacidad de generalizar de forma robusta ante patrones que jam\u00e1s ha \"visto\". Cuando al perceptr\u00f3n se le introduce un patr\u00f3n de entrada que recae en un \u00e1rea del espacio de caracter\u00edsticas que permanec\u00eda vac\u00eda y carente por completo de instancias durante la fase de entrenamiento, la red no cuenta con referencias, topolog\u00eda ni informaci\u00f3n estad\u00edstica para trazar sus hiperplanos de decisi\u00f3n en esa zona ciega. En consecuencia, el sistema intentar\u00e1 extrapolar la respuesta de forma espuria bas\u00e1ndose en fronteras lejanas aprendidas para otros datos, lo que irremediablemente desembocar\u00e1 en que se comporte mal y devuelva una salida completamente arbitraria e imprevisible.<br>",
    "correct": 4,
    "category": "neurona"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Entrenar una RNA mediante un algoritmo de entrenamiento basado en el gradiente descendente tiene el problema de que<br>",
    "options": [
      "a) Nunca va a encontrar el m\u00ednimo global.",
      "b) Al acercarse a un m\u00ednimo, se va a oscilar de un lado a otro, sin lograr pararse en \u00e9l.",
      "c) Se va a acercar a un m\u00ednimo con incrementos muy peque\u00f1os.",
      "d) Es posible que se quede parado en alg\u00fan m\u00ednimo local.",
      "e) Va a necesitar un n\u00famero muy alto de ciclos para alcanzar un error aceptable."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>En las t\u00e9cnicas de entrenamiento supervisado fundamentadas en el descenso de gradiente (como el backpropagation cl\u00e1sico), el algoritmo busca minimizar la funci\u00f3n de error partiendo de un punto aleatorio y \"resbalando\" por la superficie matem\u00e1tica gui\u00e1ndose por la pendiente de la tangente. Sin embargo, el gran inconveniente intr\u00ednseco a este m\u00e9todo anal\u00edtico es su susceptibilidad topol\u00f3gica: una vez que la red alcanza un punto de la superficie donde el gradiente es 0 (un m\u00ednimo), el aprendizaje cesa de inmediato, sin que el modelo disponga de la visi\u00f3n global necesaria para discernir si realmente ha encontrado la soluci\u00f3n \u00f3ptima absoluta (m\u00ednimo global) o si ha quedado fatalmente atrapado en un pozo secundario (m\u00ednimo local) donde la tasa de error sigue siendo inaceptablemente alta.<br>",
    "correct": 3,
    "category": "neurona"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Para valorar c\u00f3mo de bien est\u00e1 entrenada una RNA (y lo bien que generaliza), es necesario mirar el error<br>",
    "options": [
      "a) En el conjunto de entrenamiento",
      "b) En el conjunto de validaci\u00f3n",
      "c) En el conjunto de test",
      "d) En el ciclo de entrenamiento con menor gradiente",
      "e) En el ciclo de entrenamiento con menor error de entrenamiento"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Para garantizar el rigor cient\u00edfico y evitar que la Red Neuronal Artificial haya memorizado espuriamente los datos o su ruido (sobreentrenamiento), el proceso debe dividirse en tres conjuntos de patrones. El conjunto de entrenamiento gu\u00eda los pesos y el conjunto de validaci\u00f3n supervisa y detiene el aprendizaje; no obstante, como ambos \"intervienen\" o influyen en las decisiones arquitect\u00f3nicas, no son objetivos. La verdadera y \u00fanica manera de comprobar c\u00f3mo de bien entrenada est\u00e1 la m\u00e1quina y medir fielmente su capacidad de generalizaci\u00f3n (es decir, c\u00f3mo se comporta frente a la incertidumbre del mundo real) consiste en procesar y analizar el nivel de error sobre un conjunto de test estricta y absolutamente virgen, que bajo ninguna circunstancia ha intervenido ni en el ajuste de pesos ni en la parada temprana del algoritmo.<br>",
    "correct": 2,
    "category": "neurona"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En la t\u00e9cnica de parada temprana, una vez finalizado el proceso de entrenamiento, la RNA que se devuelve tiene unos pesos que son<br>",
    "options": [
      "a) siempre los del \u00faltimo ciclo de entrenamiento realizado.",
      "b) siempre correspondientes al ciclo con menor error de entrenamiento.",
      "c) correspondientes al ciclo con menor error de validaci\u00f3n.",
      "d) correspondientes al ciclo con menor error de test.",
      "e) correspondientes al ciclo con menor gradiente."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>El m\u00e9todo de parada temprana surge como la soluci\u00f3n t\u00e9cnica m\u00e1s robusta para evitar el sobreajuste (over-fitting) cuando un modelo es excesivamente complejo o se somete a demasiados ciclos de computaci\u00f3n. Durante este proceso, a la vez que la red entrena y disminuye su error interno, un monitor eval\u00faa el desempe\u00f1o paralelo con un subconjunto de datos disjunto (validaci\u00f3n). La estrategia consiste en dejar que la red entrene exhaustivamente pero memorizando su mejor estado hist\u00f3rico; de modo que, si el error en validaci\u00f3n comienza a divergir (empeorar) por causa de que el sistema empieza a memorizar el ruido, el algoritmo retroceder\u00e1 en el tiempo y se forzar\u00e1 al sistema a devolver \u00fanica y exclusivamente la topolog\u00eda congelada y los pesos exactos de aquel ciclo que arroj\u00f3 el menor error de validaci\u00f3n, y no los de su iteraci\u00f3n final o \u00faltima.<br>",
    "correct": 2,
    "category": "neurona"
  },
  {
    "source": "examen_mayo_2025",
    "question": "Para usar una RNA para resolver un problema de clasificaci\u00f3n con dos clases, sin posibilidad de que un patr\u00f3n no pertenezca a alguna de las dos clases, el n\u00famero de neuronas de salida que hay que usar, seg\u00fan lo visto en las clases de teor\u00eda, es:<br>",
    "options": [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4",
      "e) 5"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>En una clasificaci\u00f3n estrictamente binaria o dicot\u00f3mica (o eres de la clase A, o eres de la clase B, sin espacio para ambig\u00fcedades), basta con colocar una \u00fanica neurona en la capa de salida. Si su funci\u00f3n de transferencia (ej. escal\u00f3n o sigmoide) devuelve un valor bajo (0), representa a la primera clase; si devuelve un valor alto (1), representa a la segunda.<br>",
    "correct": 0,
    "category": "feedforward"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En una red SOM, la capa de competici\u00f3n est\u00e1 compuesta por:<br>",
    "options": [
      "a) Neuronas que generan la salida supervisada.",
      "b) Neuronas conectadas entre s\u00ed por enlaces recursivos.",
      "c) Neuronas que compiten por representar el patr\u00f3n de entrada.",
      "d) Neuronas que codifican el error de la red.",
      "e) Todas son correctas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Como su propio paradigma indica, el aprendizaje en los mapas autoorganizativos es no supervisado y competitivo. Cuando un vector de datos entra en la red, las neuronas de la capa de salida calculan su distancia eucl\u00eddea hacia ese dato y libran una competici\u00f3n matem\u00e1tica. La m\u00e1s cercana se proclama vencedora (BMU) y gana el derecho exclusivo de actualizar sus pesos y los de sus vecinas.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfQu\u00e9 mide el error de cuantizaci\u00f3n medio en una red SOM?<br>",
    "options": [
      "a) La distancia media entre los vectores de entrada y sus neuronas ganadoras (BMU).",
      "b) El n\u00famero de patrones correctamente clasificados.",
      "c) El n\u00famero de neuronas entrenadas.",
      "d) La diferencia entre la salida deseada y la obtenida.",
      "e) El grado de vecindad entre neuronas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Dado que los Mapas Autoorganizativos (SOM) operan en el campo del aprendizaje autom\u00e1tico \"no supervisado\", carecen por completo de etiquetas de salida deseada para el vector, lo que imposibilita matem\u00e1ticamente el uso del cl\u00e1sico Error Cuadr\u00e1tico Medio. Como alternativa de validaci\u00f3n en este paradigma, se utiliza el Error de Cuantizaci\u00f3n. Este par\u00e1metro funciona como una medida de adaptaci\u00f3n geom\u00e9trica que eval\u00faa cu\u00e1n fiel es el mapa resultante analizando todos los patrones y sumando la distancia matem\u00e1tica existente entre cada uno de los vectores reales de entrada procesados y sus respectivos prototipos seleccionados por similitud en la matriz, esto es, sus correspondientes unidades ganadoras o BMUs (Best Matching Units).<br>",
    "correct": 0,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En una red SOM, la neurona ganadora es aquella que:<br>",
    "options": [
      "a) Tiene el peso con mayor valor.",
      "b) Tiene la mayor activaci\u00f3n en la capa de entrada.",
      "c) Es m\u00e1s cercana al patr\u00f3n de entrada seg\u00fan una medida de distancia.",
      "d) Ha sido activada m\u00e1s veces durante el entrenamiento.",
      "e) Tiene mayor n\u00famero de conexiones sin\u00e1pticas."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La esencia del modelado espacial de Teuvo Kohonen es el aprendizaje competitivo puro. En la fase de entrenamiento, cada vez que la capa de entrada estimula al sistema con un vector u objeto anal\u00edtico nuevo, la totalidad de las neuronas que componen la capa de competici\u00f3n paralela o malla SOM ejecutan simult\u00e1neamente c\u00e1lculos de distancia (t\u00edpicamente Eucl\u00eddea). Tras este c\u00e1lculo de similitud, la neurona de salida que alcance la menor distancia geom\u00e9trica o matem\u00e1tica con los valores dimensionales del citado patr\u00f3n de entrada ser\u00e1 coronada un\u00edvocamente como la c\u00e9lula ganadora o BMU. Esta condici\u00f3n de victoria es la que le otorgar\u00e1 el derecho exclusivo a actualizar sus pesos anal\u00edticos y arrastrar topol\u00f3gicamente a las c\u00e9lulas adyacentes de su vecindario local.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfQu\u00e9 funci\u00f3n se utiliza habitualmente para determinar la similitud entre una neurona y un patr\u00f3n de entrada en una SOM?<br>",
    "options": [
      "a) Distancia de Manhattan",
      "b) Producto escalar",
      "c) Distancia Eucl\u00eddea",
      "d) Entrop\u00eda cruzada",
      "e) Funci\u00f3n sigmoidal"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La m\u00e9trica est\u00e1ndar implementada en el motor geom\u00e9trico de las redes SOM para medir cu\u00e1n alejado o similar es el vector de pesos de una neurona frente al vector ambiental de entrada, es la f\u00f3rmula de la distancia eucl\u00eddea cl\u00e1sica.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfCu\u00e1l de los siguientes es un problema com\u00fan de las redes SOM?<br>",
    "options": [
      "a) No permiten reducci\u00f3n de dimensionalidad.",
      "b) Siempre requieren entrenamiento supervisado.",
      "c) Algunas neuronas pueden no ser entrenadas si est\u00e1n alejadas del espacio de entrada.",
      "d) No pueden representar relaciones topol\u00f3gicas.",
      "e) No necesitan inicializaci\u00f3n de pesos."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Dado que un mapa SOM despliega una cuadr\u00edcula de tama\u00f1o y topolog\u00eda fijos desde el inicio, si los pesos aleatorios iniciales de algunas neuronas caen en un lugar muy remoto respecto a donde se agrupan los datos reales, y el radio de vecindad se encoge r\u00e1pidamente, dichas neuronas nunca llegar\u00e1n a ganar la competici\u00f3n. Quedan como \"neuronas muertas\" o desperdiciadas, un defecto que arquitecturas posteriores como las GNG solucionaron.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En una red SOM, \u00bfqu\u00e9 ocurre con el tama\u00f1o del vecindario a lo largo del entrenamiento?<br>",
    "options": [
      "a) Permanece constante.",
      "b) Aumenta progresivamente.",
      "c) Disminuye con el tiempo.",
      "d) Se elimina tras la fase de aprendizaje.",
      "e) Se calcula de forma aleatoria."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Para garantizar la estabilidad del mapa, el entrenamiento se divide en fases. En la fase inicial de ordenaci\u00f3n, el radio de vecindad es muy amplio para organizar la topolog\u00eda globalmente. Sin embargo, conforme avanza el tiempo (fase de convergencia), el tama\u00f1o de este vecindario se encoge de manera progresiva y asint\u00f3tica, permitiendo as\u00ed que la red realice ajustes finos y precisos en sus prototipos sin desestabilizar a todo el grupo.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En la fase de operaci\u00f3n de una red SOM:<br>",
    "options": [
      "a) Se modifican los pesos de las neuronas.",
      "b) Se entrena la red con nuevos datos.",
      "c) Se categoriza un patr\u00f3n seg\u00fan la neurona m\u00e1s similar.",
      "d) Se actualiza la topolog\u00eda de la red.",
      "e) No intervienen las neuronas de entrada."
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>Una vez finalizada la fase de entrenamiento, la arquitectura de pesos de la red se \"congela\" y entra en su fase operativa o productiva. En este estado ya no hay aprendizaje ni actualizaci\u00f3n topol\u00f3gica; la red act\u00faa como un sistema de mapeo pasivo, limit\u00e1ndose a recibir nuevos datos de entrada y proyectarlos o categorizarlos en la neurona vencedora que resulte estad\u00edsticamente m\u00e1s cercana.<br>",
    "correct": 2,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfQu\u00e9 representa el vector de pesos de una neurona en la capa de competici\u00f3n de una SOM?<br>",
    "options": [
      "a) La tasa de aprendizaje local.",
      "b) El error de representaci\u00f3n de dicha neurona.",
      "c) El patr\u00f3n de entrada m\u00e1s com\u00fan que ha activado esa neurona.",
      "d) Un prototipo o centroide que representa un grupo de patrones.",
      "e) El n\u00famero de veces que ha sido ganadora."
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Gracias al empuje del aprendizaje competitivo, las neuronas del mapa acaban desplaz\u00e1ndose hacia los n\u00facleos de densidad de la nube de datos. Como resultado, cada vector de pesos encapsula las caracter\u00edsticas medias de esa regi\u00f3n, convirti\u00e9ndose matem\u00e1ticamente en un centroide o \"prototipo representativo\" que agrupa a todos los patrones similares de su entorno.<br>",
    "correct": 3,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfCu\u00e1l de las siguientes tareas es especialmente adecuada para una red SOM?<br>",
    "options": [
      "a) Predicci\u00f3n de valores num\u00e9ricos.",
      "b) Agrupamiento y visualizaci\u00f3n de datos de alta dimensi\u00f3n.",
      "c) Traducci\u00f3n autom\u00e1tica de lenguas.",
      "d) Detecci\u00f3n de anomal\u00edas supervisada.",
      "e) Reconocimiento de voz con salida categ\u00f3rica."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>Las redes Mapas Autoorganizativos, inspiradas en los mapas espaciales de la corteza fisiol\u00f3gica, ostentan como m\u00e1xima utilidad t\u00e9cnica la reducci\u00f3n de dimensionalidad de datasets indescifrables. Siendo modelos que categorizan datos sin intervenci\u00f3n de reglas supervisadas externas, son la opci\u00f3n superlativa y especializada para el an\u00e1lisis de componentes principales, clustering y segmentaci\u00f3n (agrupamiento) de conjuntos vectoriales donde subyacen enormes vol\u00famenes de caracter\u00edsticas dimensionales, ya que pueden aplanar estas distribuciones abstractas sobre topolog\u00edas gr\u00e1ficas bi o tridimensionales preservando la similitud, haciendo posible la visualizaci\u00f3n de los prototipos generados para el analista humano.<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfQu\u00e9 diferencia clave tienen los modelos GCS frente a SOM?<br>",
    "options": [
      "a) No utilizan aprendizaje no supervisado.",
      "b) Ajustan din\u00e1micamente la arquitectura durante el entrenamiento.",
      "c) No permiten visualizaci\u00f3n de datos.",
      "d) Solo funcionan con entradas binarias.",
      "e) No usan distancia eucl\u00eddea para calcular similitud."
    ],
    "justification": "<br>**Opci\u00f3n correcta: b)**<br><br>El tal\u00f3n de Aquiles de los modelos originarios de Kohonen (SOM) siempre ha sido su necesidad de establecer predefinidamente un tama\u00f1o y matriz fija y est\u00e1tica de neuronas (su topolog\u00eda r\u00edgida) antes de inyectarle los primeros datos, lo que en entornos vac\u00edos da lugar a \"neuronas muertas\" desconectadas de las regiones de utilidad. Como profunda respuesta adaptativa frente a este fallo, surgieron las redes Growing Cell Structures (GCS) y el Gas Neuronal Creciente. Su diferencia crucial y paradigma vertebrador estriba en su asombrosa plasticidad o crecimiento org\u00e1nico, que les confiere el poder para insertar (agregar) o eliminar progresiva y din\u00e1micamente neuronas operativas en los hiperplanos durante las fases mismas del entrenamiento, concentrando siempre sus recursos modulares en los nodos que presentan mayor \u00edndice de error topol\u00f3gico o cuantizado.<br>",
    "correct": 1,
    "category": "autoorganizacion"
  },
  {
    "source": "examen_mayo_2025",
    "question": "La palabra \"Fitness\" en t\u00e9rminos de un Algoritmo Gen\u00e9tico es ...<br>",
    "options": [
      "a) Es una forma de intercambiar material gen\u00e9tico entre varios individuos de la poblaci\u00f3n",
      "b) Una forma o funci\u00f3n de construcci\u00f3n de los individuos para obtener la poblaci\u00f3n",
      "c) Una operaci\u00f3n gen\u00e9tica que cambia la composici\u00f3n de los descendientes",
      "d) El valor que permite evaluar lo adaptado que est\u00e1 cada individuo de la poblaci\u00f3n para obtener la soluci\u00f3n del problema que pretende resolver",
      "e) Es una estrategia de mantener al mejor individuo y copiarlo directamente a la siguiente generaci\u00f3n para evitar perder la mejor soluci\u00f3n obtenida"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Dentro del paradigma evolutivo o de selecci\u00f3n natural, la funci\u00f3n de *Fitness* (aptitud) es el coraz\u00f3n m\u00e9trico del algoritmo. Consiste en la f\u00f3rmula matem\u00e1tica que examina a cada cromosoma (individuo) y le asigna una puntuaci\u00f3n num\u00e9rica que refleja directamente la bondad o calidad de su soluci\u00f3n frente al problema planteado, dictaminando as\u00ed sus probabilidades de sobrevivir y reproducirse en la siguiente iteraci\u00f3n.<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_mayo_2025",
    "question": "\u00bfCu\u00e1l de las siguientes es una t\u00e9cnica de mutaci\u00f3n en los Algoritmos Gen\u00e9ticos?<br>",
    "options": [
      "a) Uniforme",
      "b) M\u00e1scara",
      "c) Intercambio",
      "d) G\u00e9nesis",
      "e) Punto Flotante"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En los cimientos de la Computaci\u00f3n Evolutiva, las operaciones inspiradas en el darwinismo act\u00faan manipulando los cromosomas (variables) para evadir \u00f3ptimos locales. Opciones como \"Uniforme\" y \"M\u00e1scara\" hacen referencia de manual a los tipos cl\u00e1sicos de operadores de cruce (crossover), que combinan o barajan elementos entre dos progenitores para engendrar individuos en la descendencia. Asimismo, t\u00e9rminos como \"Punto Flotante\" definen formas de representaci\u00f3n sem\u00e1ntica y tipados num\u00e9ricos (codificaci\u00f3n de individuos), mientras que la g\u00e9nesis no es un operador. La mutaci\u00f3n por Intercambio (o Swap Mutation) es por consiguiente una t\u00e9cnica formal y validada en esta rama, de gran uso particular en problemas de optimizaci\u00f3n estoc\u00e1stica y enumeraci\u00f3n, que garantiza el aporte brusco de variabilidad permutiendo o cambiando aleatoriamente la ordenaci\u00f3n interna genot\u00edpica en el alelo de un solo individuo aislado.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En Programaci\u00f3n Gen\u00e9tica,<br>",
    "options": [
      "a) El cromosoma nunca representa la posible soluci\u00f3n a las variables del problema",
      "b) Se aplican los operadores de cruce y mutaci\u00f3n para invertir la poblaci\u00f3n de cromosomas",
      "c) La forma de representar los individuos es mediante un \u00e1rbol, siendo la principal diferencia con los Algoritmos Gen\u00e9ticos",
      "d) La forma de codificar los individuos es igual a los Algoritmos Gen\u00e9ticos, cambia la forma de aplicar el cruce y la mutaci\u00f3n",
      "e) No existe ninguna t\u00e9cnica en Computaci\u00f3n Evolutiva denominada Programaci\u00f3n Gen\u00e9tica"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>La Programaci\u00f3n Gen\u00e9tica es una subdisciplina de la Computaci\u00f3n Evolutiva que surge como una evoluci\u00f3n de los propios algoritmos gen\u00e9ticos cl\u00e1sicos, compartiendo con estos el mismo principio biol\u00f3gico de selecci\u00f3n natural. Sin embargo, la mayor y principal diferencia arquitect\u00f3nica entre ambas radica en la forma de codificaci\u00f3n de la soluci\u00f3n al problema. Mientras que en los Algoritmos Gen\u00e9ticos convencionales los individuos o posibles soluciones se estructuran mediante vectores o cadenas planas de variables, en la Programaci\u00f3n Gen\u00e9tica la representaci\u00f3n se realiza un\u00edvocamente en forma de \u00e1rbol sint\u00e1ctico. Esta topolog\u00eda arb\u00f3rea es an\u00e1loga a la manera en que los compiladores analizan los lenguajes, situando funciones/operadores en los nodos internos y los terminales (variables o constantes) en las hojas.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_mayo_2025",
    "question": "El procedimiento de combinar el \"Ascenso de colinas\" o \"hill-climbing\" con los Algoritmos Gen\u00e9ticos<br>",
    "options": [
      "a) Es una t\u00e9cnica de b\u00fasqueda donde su principal problema es la convergencia prematura",
      "b) Es una t\u00e9cnica de b\u00fasqueda aplicada en los algoritmos gen\u00e9ticos donde su principal problema es que no garantiza la obtenci\u00f3n del \u00f3ptimo global",
      "c) S\u00f3lo se puede aplicar en programaci\u00f3n gen\u00e9tica.",
      "d) Est\u00e1 inspirada en los principios de evoluci\u00f3n de Lamark para mejorar la convergencia del proceso evolutivo.",
      "e) Es una t\u00e9cnica que realiza una b\u00fasqueda aleatoria en el espacio de soluciones hasta encontrar el m\u00e1ximo o m\u00ednimo global"
    ],
    "justification": "<br>**Opci\u00f3n correcta: d)**<br><br>Los Algoritmos Gen\u00e9ticos son excelentes explorando de forma global el espacio de soluciones, pero tienen deficiencias a la hora de realizar la convergencia final y fina (explotaci\u00f3n) hacia el punto \u00f3ptimo absoluto. Para solventar esta carencia, se suele dotar a los individuos del algoritmo de una t\u00e9cnica de b\u00fasqueda u optimizaci\u00f3n local como el \"escalado o ascenso de colinas\" (hill-climbing). Cuando un individuo \"aprende\" o mejora sus caracter\u00edsticas gracias a esta b\u00fasqueda local durante su evaluaci\u00f3n, y transmite este nuevo material biol\u00f3gico mejorado a su descendencia en la poblaci\u00f3n, se est\u00e1 emulando directamente la teor\u00eda de la evoluci\u00f3n de Lamarck, basada hist\u00f3ricamente en la \"herencia de los caracteres adquiridos\". Esta hibridaci\u00f3n (conocida como aprendizaje lamarckiano o algoritmos mem\u00e9ticos) mejora dram\u00e1ticamente la velocidad y convergencia del proceso evolutivo.<br>",
    "correct": 3,
    "category": "evolutiva"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En un algoritmo gen\u00e9tico, \u00bfqu\u00e9 nombre recibe el proceso por el cual el mejor individuo de la poblaci\u00f3n recibe una fase de ajuste local y es insertado de esa manera en la poblaci\u00f3n?<br>",
    "options": [
      "a) Seeding",
      "b) Elitismo",
      "c) Aprendizaje lamarckiano",
      "d) Steady-state",
      "e) Hill-climbing"
    ],
    "justification": "<br>**Opci\u00f3n correcta: c)**<br><br>En directa correlaci\u00f3n con los principios expuestos en la pregunta anterior, el darwinismo estricto postula que las experiencias o mejoras locales que sufre un individuo durante su vida (fenotipo) no alteran sus genes y, por lo tanto, no se heredan. Sin embargo, en Computaci\u00f3n Evolutiva, si decidimos aplicar un ajuste local u optimizaci\u00f3n (por ejemplo, hill-climbing) a un individuo particular (t\u00edpicamente el mejor o los mejores) para perfeccionarlo, y a continuaci\u00f3n alteramos expl\u00edcitamente su genotipo y es insertado de esa manera mejorada en la poblaci\u00f3n para que transmita dichas virtudes, estamos aplicando formalmente el Aprendizaje Lamarckiano. Si este aprendizaje no se codificara de vuelta en el genoma, se denominar\u00eda efecto Baldwin, pero al ser insertado tal cual, se cataloga rigurosamente como lamarckiano.<br>",
    "correct": 2,
    "category": "evolutiva"
  },
  {
    "source": "examen_mayo_2025",
    "question": "En una poblaci\u00f3n de 40 individuos, se aplica una tasa de cruce del 50 %, una tasa de mutaci\u00f3n del 10 %, y se conserva un 20 % de los mejores individuos mediante elitismo. \u00bfCu\u00e1l de las siguientes combinaciones es correcta para cada generaci\u00f3n?<br>",
    "options": [
      "a) 20 individuos por cruce, 4 por mutaci\u00f3n, 8 copiados sin cambios",
      "b) 20 individuos por cruce, 2 por mutaci\u00f3n, 6 copiados sin cambios",
      "c) 18 individuos por cruce, 4 por mutaci\u00f3n, 8 copiados sin cambios",
      "d) 16 individuos por cruce, 4 por mutaci\u00f3n, 10 copiados sin cambios",
      "e) 20 individuos por cruce, 6 por mutaci\u00f3n, 6 copiados sin cambios"
    ],
    "justification": "<br>**Opci\u00f3n correcta: a)**<br><br>Para configurar adecuadamente la transici\u00f3n de las poblaciones en un Algoritmo Gen\u00e9tico, los operadores de cruce, mutaci\u00f3n y elitismo se manejan a nivel param\u00e9trico indicando fracciones estad\u00edsticas. En este escenario con una poblaci\u00f3n (N) de 40 individuos, los c\u00e1lculos matem\u00e1ticos para deducir el n\u00famero de cromosomas involucrados en cada fase son los siguientes:<br>Cruce (recombinaci\u00f3n): Una tasa del 50 % implica que la mitad exacta de la poblaci\u00f3n se someter\u00e1 al cruce. 40\u00d70.50=20 individuos formar\u00e1n la descendencia por este m\u00e9todo.<br>Mutaci\u00f3n: Una tasa o probabilidad del 10 % estipula que la d\u00e9cima parte de la poblaci\u00f3n se ver\u00e1 afectada por modificaciones en sus genes (introducci\u00f3n de variabilidad). 40\u00d70.10=4 individuos.<br>Elitismo: Finalmente, al establecer que se conserva un 20 % de los mejores, estamos obligando al algoritmo a garantizar la preservaci\u00f3n inalterada de la \u00e9lite de la generaci\u00f3n anterior (para no perder la mejor soluci\u00f3n). 40\u00d70.20=8 individuos que ser\u00e1n copiados directamente sin cambios a la siguiente generaci\u00f3n. Por tanto, las cifras 20, 4 y 8 corresponden un\u00edvocamente a los postulados matem\u00e1ticos de la opci\u00f3n A.<br>",
    "correct": 0,
    "category": "evolutiva"
  }
];

if (typeof CATEGORIES !== 'undefined') CATEGORIES.push(...EXAM_CATEGORIES);
if (typeof QUESTIONS !== 'undefined') QUESTIONS.push(...EXAM_QUESTIONS);
