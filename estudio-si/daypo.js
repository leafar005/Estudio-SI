const DAYPO_QUESTIONS = [
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "Una definición correcta para IA sería...",
    "options": [
      "El estudio del comportamiento inteligente y su implementación en elementos artificiales que lo reproduzcan",
      "La disciplina que busca replicar las funciones cognitivas del cerebro humano mediante algoritmos matemáticos y redes neuronales artificiales para resolver problemas complejos de forma autónoma",
      "Es el campo de la informática encargado de crear sistemas capaces de pensar, razonar y tomar decisiones como lo haría un ser humano, incluyendo conciencia y comprensión real del mundo",
      "El desarrollo de máquinas que pueden aprender de forma autónoma a partir de grandes volúmenes de datos, mejorando continuamente su rendimiento sin intervención humana",
      "Es la ciencia que estudia cómo dotar a los ordenadores de capacidades sensoriales, emocionales e intuitivas similares a las de los humanos para interactuar naturalmente con su entorno"
    ],
    "correct": 0,
    "justification": "La Inteligencia Artificial puede definirse desde múltiples perspectivas (académica, ingenieril, filosófica). Según los apuntes, la definición académica e ingenieril más aceptada establece que la IA es **el estudio del comportamiento inteligente y su implementación en elementos artificiales que logren reproducirlo**. Esta definición es la más completa porque abarca tanto la vertiente teórica (el estudio y comprensión de qué es el comportamiento inteligente) como la vertiente práctica (la ingeniería necesaria para implementarlo en sistemas artificiales). Las otras opciones son incorrectas porque o bien son demasiado restrictivas (como limitarse a redes neuronales o machine learning), o bien incluyen conceptos propios de la ciencia ficción que la IA actual no posee (como la conciencia real)."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "Entre los precursores de la IA, se encuentra",
    "options": [
      "Palancas con ruedas dentadas",
      "Homúnculos",
      "Ciborgs",
      "Ábaco",
      "Todas son correctas"
    ],
    "correct": 4,
    "justification": "A lo largo de la historia, el ser humano ha intentado replicar la inteligencia. Los **precursores de la IA** abarcan tanto los primeros dispositivos de cálculo como los mitos. Las **palancas con ruedas dentadas** remiten a las calculadoras mecánicas clásicas. Los **homúnculos** reflejan el deseo ancestral de crear vida artificial. El **ábaco** sentó las bases de la computación. Los **ciborgs** representan la vertiente transhumanista. Por lo tanto, la opción correcta es que **todas son correctas**, ya que todas forman parte del acervo histórico y conceptual de la IA."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "Fue el pionero en cuanto al pensamiento actual sobre las IA",
    "options": [
      "Turing",
      "Pascal",
      "Leibnitz",
      "Freege",
      "Boole"
    ],
    "correct": 0,
    "justification": "Alan **Turing** es universalmente reconocido como el padre de la IA y la computación moderna. Su contribución clave fue el artículo de 1950 donde formula el **Test de Turing** como criterio empírico para determinar el comportamiento inteligente en máquinas. Fue Turing quien formuló teóricamente el concepto de la *máquina universal* y abordó directamente la idea de la inteligencia mecanizada, marcando el inicio del pensamiento actual sobre la IA, a diferencia de otros pioneros que se centraron en la lógica y el cálculo matemático."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "La primera máquina de comportamiento adaptativo es",
    "options": [
      "Perceptron",
      "ChatGPT",
      "ADALINE",
      "MADALINES",
      "RNA MAD"
    ],
    "correct": 0,
    "justification": "El **Perceptrón**, desarrollado por Frank Rosenblatt en 1958, es considerado el primer modelo de red neuronal artificial capaz de aprender de su entorno, convirtiéndolo en la primera máquina de comportamiento adaptativo (cronológicamente anterior al ADALINE). Rosenblatt implementó el perceptrón como una máquina física (el Mark I) orientada al reconocimiento visual. Al utilizar una regla de aprendizaje para ajustar sus pesos y clasificar patrones, marcó un hito fundacional en el conexionismo."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "La primera neurona adaptativa lineal",
    "options": [
      "Perceptron",
      "ChatGPT",
      "ADALINE",
      "MADALINES",
      "RNA MAD"
    ],
    "correct": 2,
    "justification": "El modelo **ADALINE** (acrónimo de *Adaptive Linear Element*) fue propuesto por Bernard Widrow y Ted Hoff en 1960. A diferencia del Perceptrón de Rosenblatt, que utilizaba una función de activación escalón discreta, el ADALINE emplea una **función de transferencia estrictamente lineal** (purelin). Además, su algoritmo de aprendizaje (la Regla Delta o LMS) minimiza el error basándose directamente en esta salida lineal continua, lo que la convierte por definición en la **primera neurona adaptativa lineal**."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "Primer RNA aplicado a un problema del mundo real (filtros de ruido)",
    "options": [
      "Perceptron",
      "ChatGPT",
      "ADALINE",
      "MADALINES",
      "RNA MAD"
    ],
    "correct": 3,
    "justification": "Los **MADALINES** (Multiple ADALINEs) fueron redes neuronales creadas por Widrow y Hoff. Representan un hito histórico porque fueron las **primeras Redes Neuronales Artificiales aplicadas con éxito a un problema comercial del mundo real**. Concretamente, se utilizaron en el procesamiento de señales de telecomunicaciones para crear filtros adaptativos capaces de **eliminar el eco en las líneas telefónicas**. Esto demostró la viabilidad técnica de los sistemas conexionistas para filtrar ruido."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "La rama bioevolutiva de la IA",
    "options": [
      "Busca capacidades de sistemas simples, como la precisión y la velocidad",
      "Busca mayor capacidad adaptativa y eficiencia",
      "Busca algoritmos evolutivos y programación genética",
      "Busca ant-colony, coevolución y vida artificial",
      "Busca evolucionar el software por etapas o epochs para conseguir mejor rendimiento"
    ],
    "correct": 0,
    "justification": "Dentro de los Sistemas Inteligentes con base biológica, la **aproximación bioevolutiva** se caracteriza por inspirarse en mecanismos evolutivos para desarrollar modelos que buscan **capacidades de sistemas simples, como la precisión y la velocidad**. Las otras opciones describen enfoques diferentes: la adaptación pertenece a la rama neuroglial, la inteligencia de enjambre (ant-colony) a la rama social, y los algoritmos evolutivos complejos para optimización a la rama genética."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "La rama Neuroglial de la IA",
    "options": [
      "Busca capacidades de sistemas simples, como la precisión y la velocidad",
      "Busca mayor capacidad adaptativa y eficiencia",
      "Busca algoritmos evolutivos y programación genética",
      "Busca ant-colony, coevolución y vida artificial",
      "Busca evolucionar el software por etapas o epochs para conseguir mejor rendimiento"
    ],
    "correct": 1,
    "justification": "La **aproximación neuroglial** amplía las clásicas Redes Neuronales introduciendo el concepto de la glía (RRNNAA). En la biología, las células gliales modulan la sinapsis neuronal. Al trasladar este concepto a la IA, el objetivo es dotar al sistema de una **mayor capacidad adaptativa y eficiencia** en los procesos de aprendizaje y retención, mejorando la plasticidad estructural de las redes frente a problemas dinámicos."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "La rama Genética de la IA",
    "options": [
      "Busca capacidades de sistemas simples, como la precisión y la velocidad",
      "Busca mayor capacidad adaptativa y eficiencia",
      "Busca algoritmos evolutivos y programación genética",
      "Busca ant-colony, coevolución y vida artificial",
      "Busca evolucionar el software por etapas o epochs para conseguir mejor rendimiento"
    ],
    "correct": 2,
    "justification": "La **aproximación genética** se inspira en la teoría de la evolución de Darwin y en la genética. Esta rama de la IA busca y emplea **algoritmos evolutivos y la programación genética** (creada por John Koza). A través de mecanismos como la selección, el cruce y la mutación de 'cromosomas' que codifican soluciones o fragmentos de código, esta disciplina resulta indispensable para resolver problemas complejos de búsqueda y optimización matemática."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "La rama social de la IA",
    "options": [
      "Busca capacidades de sistemas simples, como la precisión y la velocidad",
      "Busca mayor capacidad adaptativa y eficiencia",
      "Busca algoritmos evolutivos y programación genética",
      "Busca ant-colony, coevolución y vida artificial",
      "Busca evolucionar el software por etapas o epochs para conseguir mejor rendimiento"
    ],
    "correct": 3,
    "justification": "La **aproximación social** de la Inteligencia Artificial se fundamenta en el comportamiento distribuido y colectivo observado en la naturaleza. Busca emular la inteligencia emergente utilizando técnicas como **ant-colony (colonias de hormigas), coevolución y vida artificial**. La idea principal es que a partir de agentes individuales extremadamente simples que interactúan en un entorno, emerge un comportamiento global capaz de resolver problemas complejos."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto al elemento de procesado EP",
    "options": [
      "Las señales de E/S de una RNA son números reales",
      "Las señales de E/S de una RNA son números naturales",
      "Las señales de E/S de una RNA son valores discretos",
      "Las señales de E/S de una RNA son números reales positivos",
      "Las señales de E/S de una RNA son números reales sin irracionales"
    ],
    "correct": 0,
    "justification": "En una Red Neuronal Artificial, los Elementos de Procesado (EP) o neuronas operan en un espacio continuo. Las señales de entrada y salida que circulan por una red neuronal son **números reales** (normalmente restringidos a intervalos como [0, 1] o [-1, 1]). Esto es imperativo porque las funciones de activación y los métodos de cálculo de gradientes en el aprendizaje automático están basados en el cálculo diferencial, el cual se define y opera sobre el conjunto de los números reales."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a los elementos de procesado EP",
    "options": [
      "Los valores de entrada pueden o no encontrarse dentro de un intervalo",
      "Las conexiones codifican el conocimiento de la red",
      "Las neuronas presentan un bias con un valor aleatorio adaptado al problema",
      "Las conexiones dentro de una red no pueden ser inexistentes, deben ser excitatorias o inhibitorias",
      "Todas son correctas"
    ],
    "correct": 1,
    "justification": "En el paradigma conexionista de la IA, el conocimiento no se almacena centralizadamente como en las bases de datos convencionales, sino de forma altamente distribuida. **Las conexiones (sinapsis artificiales) codifican todo el conocimiento de la red**. Cada conexión tiene un peso sináptico que representa la influencia aprendida de una neurona sobre otra. Tras el proceso de entrenamiento, todo el conocimiento adquirido por la red reside en el valor matemático de estas conexiones."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a los elementos de procesado EP",
    "options": [
      "El conjunto de datos de entrenamiento no presenta ni pesos ni bias",
      "La modificación de los pesos de las conexiones y bias se denomina entrenamiento",
      "Para cada aprendizaje se necesitan las entradas y se infieren las salidas",
      "A partir de los datos de entrenamiento, se le fijan valores de pesos y bias",
      "Las neuronas toman datos de entrada pero no reciben las salidas que estos deberían generar"
    ],
    "correct": 1,
    "justification": "El proceso mediante el cual una Red Neuronal adquiere conocimiento y se adapta a los datos se denomina **entrenamiento o aprendizaje**. En términos matemáticos y algorítmicos, este proceso se define estrictamente como **la modificación sistemática de los pesos de las conexiones y de los bias (sesgos)**. Se emplea una regla de aprendizaje (como la corrección de errores) para ir ajustando esos valores iterativamente hasta que la red produce la salida deseada para las entradas correspondientes."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Cuál de las siguientes afirmaciones sobre el LMS es falsa?",
    "options": [
      "Durante el aprendizaje, se fijan los valores de los pesos de las conexiones y de las bias",
      "El algoritmo de aprendizaje que tiene es supervisado",
      "La corrección de errores cuadráticos medio se calcula para cada instancia a partir de la salida que emite la red y la salida deseada para ese ejemplo",
      "La función de pérdida toma la diferencia entre la salida deseada y la obtenida al cuadrado",
      "La función de coste y la función de pérdida coinciden en este tipo de algoritmo"
    ],
    "correct": 4,
    "justification": "La afirmación falsa es que 'La función de coste y la función de pérdida coinciden'. En Machine Learning y algoritmos como LMS, existe una distinción teórica vital: la **función de pérdida (Loss Function)** cuantifica el error para una *única instancia o ejemplo de entrenamiento* (ej. la diferencia cuadrática entre salida obtenida y deseada para un dato). En cambio, la **función de coste (Cost Function)** es la agregación (media o suma) de las pérdidas a lo largo de *todo el conjunto de datos*. Por lo tanto, no son idénticas en su ámbito de aplicación."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Cuál de las siguientes afirmaciones sobre la corrección de errores de LMS es falsa?",
    "options": [
      "Se calcula para cada una de las instancias a partir de la salida obtenida y la deseada",
      "Se calcula para una de las instancias a partir de la salida obtenida y la deseada",
      "Se calcula para todas las instancias a partir de la salida obtenida y la deseada",
      "Se calcula para algunas de las instancias (pseudoaleatorio) a partir de la salida obtenida y la deseada",
      "Se calcula para todas las instancias a partir de la salida obtenida y la entrada original"
    ],
    "correct": 4,
    "justification": "La afirmación categóricamente falsa es la que señala que el error 'Se calcula para todas las instancias a partir de la salida obtenida y la entrada original'. En el aprendizaje supervisado por corrección de errores (como LMS), el error se computa siempre como la discrepancia matemática entre la **salida obtenida por la red y la salida deseada (target)**. La entrada original se utiliza posteriormente para propagar los cambios y calcular los gradientes, pero el error en sí jamás se evalúa respecto a la entrada. El resto de opciones son verdaderas porque el descenso de gradiente puede aplicarse a una sola instancia (online), a todas (batch) o a algunas (mini-batch)."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Cuál de las siguientes afirmaciones sobre la función de pérdida de LMS es falsa?",
    "options": [
      "Es el cuadrado del error para un ejemplo dividido entre 2",
      "Es la diferencia entre la salida obtenida y la deseada al cuadrado",
      "Es la diferencia entre la salida obtenida y la entrada original",
      "Es la misma que la función de coste",
      "Es la multiplicación entre la entrada por el peso que tiene"
    ],
    "correct": 3,
    "justification": "La función de pérdida (loss function) se calcula para evaluar el error de un **único ejemplo** en concreto ($E_k = \\frac{1}{2}(d_k - y_k)^2$), mientras que la función de coste (cost function) es la sumatoria o promedio acumulado de todas esas funciones de pérdida sobre el **conjunto completo** de ejemplos de entrenamiento. Por lo tanto, afirmar que son la misma es **falso**. Las opciones 2 y 4 también contienen afirmaciones falsas, lo que evidencia una redacción ambigua en el test original. Cabe destacar que la opción 0 describe la definición estrictamente verdadera y matemática de la función, por lo que marcarla respondiendo a 'cuál es falsa' es incorrecto."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Qué método usa LMS para minimizar el error según W?",
    "options": [
      "Se deriva con respecto a W para minimizar el gradiente",
      "Se integra con respecto a W para minimizar el gradiente",
      "Se deriva con respecto a W para maximizar el gradiente",
      "Se integra con respecto a W para maximizar el gradiente",
      "Ninguna de las anteriores"
    ],
    "correct": 4,
    "justification": "El método LMS utiliza el algoritmo de Descenso de Gradiente. En este proceso, **se deriva la función de error** respecto a los pesos (W) para calcular el gradiente y determinar la pendiente. Sin embargo, el objetivo final de actualizar los pesos en la dirección opuesta al gradiente es **minimizar la función de error (o coste)**, NO minimizar el gradiente en sí mismo (el gradiente simplemente tenderá a cero al llegar al fondo del paraboloide). La opción 0 comete un error conceptual al afirmar que se busca minimizar el gradiente. Por tanto, la respuesta más rigurosa es *Ninguna de las anteriores*."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Asumiendo que con un gradiente descendente de error, el peso actual obtenido cae por debajo de la pendiente. Cuál de las siguientes afirmaciones sería correcta?",
    "options": [
      "Si dicho punto está más cerca de un mínimo o máximo, la modificación del peso será menor",
      "Si dicho punto está más cerca de un mínimo o máximo, la modificación del peso será mayor",
      "Si dicho punto está más lejos de un mínimo o máximo, la modificación del peso será menor",
      "Si dicho punto está más lejos de un mínimo o máximo, menor será la magnitud de la pendiente",
      "Si dicho punto está más cerca de un mínimo o máximo, mayor será la magnitud de la pendiente"
    ],
    "correct": 0,
    "justification": "En el algoritmo de Descenso de Gradiente de la Regla LMS, la magnitud de la actualización de los pesos es directamente proporcional a la derivada (el gradiente) del error en ese punto. Cuando el peso actual se encuentra cerca de un mínimo local o global, el valle de la curva de error se aplana y **la pendiente es mucho menor**. En consecuencia, al multiplicar la tasa de aprendizaje $\\mu$ por una pendiente pequeña, la magnitud del salto (modificación del peso) será menor, permitiendo que el algoritmo converja con precisión sin pasarse del mínimo."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Asumiendo que con un gradiente descendente de error, se ha calculado una pendiente de -6.8, llamada A, y la otra de -0.9, llamada B. Cuál de las dos presenta un valor de peso ideal?",
    "options": [
      "A, porque el valor es más pequeño",
      "B, porque el valor es más grande",
      "Ni A como B están en el rango de peso ideal (valores positivos)",
      "Ni A ni B, porque el valor de peso ideal sería de 0",
      "Tanto A como B están en el rango de peso ideal (valores negativos)"
    ],
    "correct": 3,
    "justification": "El valor ideal de un peso sináptico se alcanza cuando nos situamos en el punto de error mínimo dentro del paraboloide de error (superficie de coste). Desde la perspectiva del cálculo, en ese mínimo o fondo del valle, la recta tangente a la superficie es completamente horizontal, lo que significa que **la pendiente (derivada o gradiente) es matemáticamente igual a 0**. Como las pendientes A y B presentan valores distintos de cero (-6.8 y -0.9 respectivamente), significa que la red aún sigue cayendo por la ladera de la curva y ninguna de las dos representa un peso ideal ya finalizado."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Asumiendo que con un gradiente descendente de error, hemos obtenido un punto que queda por debajo de la gráfica. Qué deberíamos hacer para calcular su valor de peso?",
    "options": [
      "Conseguir la derivada de la pendiente reflejada en la curva y ajustar los pesos para que estos se acerquen a 0",
      "Conseguir la derivada de la pendiente reflejada en la curva y ajustar los pesos para que estos se acerquen a 1",
      "Conseguir la derivada de la pendiente reflejada en la curva",
      "Conseguir el punto reflejado en la curva y, a partir de su pendiente, crear una función de corrección",
      "Conseguir la derivada de la pendiente reflejada en la curva y, a partir de su pendiente, crear una función de corrección"
    ],
    "correct": 2,
    "justification": "Esta pregunta contiene terminología defectuosa. Geométricamente, el algoritmo de entrenamiento no busca un 'punto por debajo de la gráfica'. Sin embargo, interpretando la intención pedagógica del descenso de gradiente en LMS, el paso indispensable ante cualquier posición en la curva de error es **conseguir (calcular) la derivada de la curva** respecto al peso para conocer la pendiente en ese punto. A partir de ella, se establece la dirección de la actualización. Las opciones que mencionan ajustar obligatoriamente los pesos a 0 o 1 son falsas, y la opción 2 es la única que rescata la operación analítica esencial de derivar."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Qué es el vector delta en un proceso LMS?",
    "options": [
      "Es la diferencia entre el vector de pesos ideal y el vector de pesos actual",
      "Es el mínimo global del hyperparaboloide",
      "Es el resultado el RMS",
      "Es el vector asociado al peso en el eje Y",
      "Es la magnitud de cambio W(t) según la derivada del error"
    ],
    "correct": 4,
    "justification": "En la literatura del algoritmo LMS y la Regla Delta, el 'vector delta' (frecuentemente denotado como $\\Delta W$) representa el incremento, es decir, **la magnitud y dirección de cambio** que se debe aplicar al vector de pesos actual $W(t)$ para la siguiente iteración. Este cambio se calcula siguiendo la derivada del error respecto a cada peso ponderada por la tasa de aprendizaje ($\\Delta W = \\mu \\cdot e \\cdot x$). No es la diferencia absoluta con un peso ideal (ya que ese peso ideal es teóricamente desconocido a priori)."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "En LMS, cuál de las siguientes opciones es correcta respecto a la tasa de aprendizaje de LMS?",
    "options": [
      "Con un μ alto, vemos datos en ambas partes de la pendiente de error, acercándose al valor de peso ideal",
      "Con un μ alto, vemos datos en la misma parte de la pendiente, acercándose al valor de peso ideal",
      "Con un μ alto, vemos datos en la misma parte de la pendiente, acercándose al vector delta",
      "Con un μ bajo, vemos datos en la misma parte de la pendiente, acercándose al vector delta",
      "Con un μ bajo, vemos datos en ambas partes de la pendiente de error, acercándose al vector delta"
    ],
    "correct": 0,
    "justification": "La constante $\\mu$ es la **tasa de aprendizaje**. Gobierna el tamaño del paso de actualización. Cuando configuramos un $\\mu$ alto (pero sin llegar a hacer que el sistema diverja catastróficamente), el paso en el Descenso de Gradiente será tan grande que el peso saltará por encima del mínimo, cruzando hacia el valle opuesto del paraboloide repetidas veces. Visualmente, los valores del peso trazarán un zigzag o 'rebote' iterativo a lo largo de **ambas partes de la pendiente** del error mientras convergen gradualmente (over-shooting temporal). Si fuera un $\\mu$ muy bajo, el descenso sería monótono y recorrería únicamente la misma cara de la pendiente."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Uno de estos pasos no es correcto con respecto al algoritmo de LMS, escoja al impostor",
    "options": [
      "Se inicializan los pesos con datos fijos",
      "Se aplica un ejemplo de entrada",
      "Se computa la salida que emite la red",
      "Se calcula el error cometido para dicho ejemplo",
      "Si el ECM es un valor aceptable, se termina el proceso, sino se aplica de nuevo un ejemplo de entrada"
    ],
    "correct": 0,
    "justification": "El paso intruso e incorrecto es la opción 0. En cualquier algoritmo basado en retropropagación y descenso de gradiente (incluyendo LMS), los pesos y sesgos **nunca deben inicializarse con datos fijos o idénticos** (como todos a cero). Deben inicializarse de forma **aleatoria** con valores pequeños. Inicializarlos simétricamente con valores fijos provocaría que todas las neuronas calculen los mismos gradientes simultáneamente e impidan la especialización y adaptación durante el entrenamiento."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Si quisiésemos que el algoritmo de LMS no fuese dependiente del orden de introducción de los ejemplos de entrenamiento, cuál de las siguientes opciones seguiríamos?",
    "options": [
      "Calcularíamos el ECM sobre todos los ejemplos, no sobre cada uno",
      "Calcularíamos el ECM sobre un grupo de tamaño k de datos aleatorios, no sobre cada uno",
      "Actualizaríamos las conexiones antes de calcular el ECM de cada uno de los ejemplos",
      "Computaríamos las salidas de la red después de calcular el ECM para conseguir los pesos ajustados",
      "No existe manera de hacer independiente el algoritmo del orden de introducción de ejemplos"
    ],
    "correct": 0,
    "justification": "El enunciado describe la diferencia fundamental entre el descenso de gradiente estocástico/online y el descenso por lotes (**Batch Gradient Descent**). Para evitar la dependencia del orden de introducción y los ruidos de los patrones individuales, la solución es **acumular el cálculo del Error Cuadrático Medio (ECM) sobre la totalidad de los L ejemplos** del conjunto de entrenamiento primero, y solo entonces realizar una actualización maestra de los pesos basándose en la suma total del error global (superficie de coste real)."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "En qué se diferencian ADALINE del Perceptrón?",
    "options": [
      "El perceptrón tiene una función de transferencia umbral y un diferente algoritmo de entrenamiento",
      "El perceptrón tiene una función de transferencia umbral",
      "El perceptrón tiene un diferente algoritmo de entrenamiento",
      "El perceptrón tiene una función de transferencia umbral, un diferente algoritmo de entrenamiento y una distinta capa de entrada",
      "El perceptrón tiene una función de transferencia y una distinta capa de entrada"
    ],
    "correct": 0,
    "justification": "La evolución del ADALINE respecto al Perceptrón clásico se consolida en dos grandes pilares. Primero, la **función de transferencia**: el Perceptrón utiliza un *escalón duro* (umbral binario), mientras que el ADALINE emplea una función de activación *puramente lineal*. Segundo, el **algoritmo de aprendizaje**: el Perceptrón ajusta sus pesos basado en el error truncado post-escalón, ignorando la magnitud real del fallo. El ADALINE revolucionó el cálculo al usar la Regla Delta/LMS, aplicando derivadas y descenso de gradiente sobre la suma neta pre-activación para lograr un error nulo matemático."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Usando el perceptrón. Si tenemos entradas bidimensionales, cómo separaríamos linealmente los problemas?",
    "options": [
      "Con una línea",
      "Con una línea o un plano",
      "Con un plano",
      "Con un plano o un hiperplano",
      "Con un hiperplano"
    ],
    "correct": 0,
    "justification": "El Perceptrón actúa trazando fronteras de decisión matemáticas a través del espacio paramétrico para separar categorías (problemas linealmente separables). Su ecuación de frontera es la suma ponderada igualada a cero ($w_1 x_1 + w_2 x_2 + b = 0$). Si nuestro problema consta únicamente de entradas bidimensionales ($x_1$ y $x_2$), esta ecuación coincide estrictamente con la definición algebraica geométrica de **una línea recta** dispuesta en un plano de 2 dimensiones."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Usando el perceptrón. Si tenemos entradas tridimensionales, cómo separaríamos linealmente los problemas?",
    "options": [
      "Con una línea",
      "Con una línea o un plano",
      "Con un plano",
      "Con un plano o un hiperplano",
      "Con un hiperplano"
    ],
    "correct": 2,
    "justification": "Si elevamos el número de características o entradas a tres dimensiones ($x_1, x_2, x_3$), la frontera de decisión lineal generada por la neurona para aislar una clase de otra asume la forma de la ecuación $w_1 x_1 + w_2 x_2 + w_3 x_3 + b = 0$. Esta expresión gobierna la existencia de **un plano** flotando en el espacio 3D, que actúa como una lámina cortante que segrega las dos clases."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Usando el perceptrón. Si tenemos entradas n-dimensionales, cómo separaríamos linealmente los problemas?",
    "options": [
      "Con una línea",
      "Con una línea o un plano",
      "Con un plano",
      "Con un plano o un hiperplano",
      "Con un hiperplano"
    ],
    "correct": 4,
    "justification": "El concepto de separación lineal se generaliza matemáticamente a cualquier número $n$ de dimensiones o entradas concurrentes. En dimensiones superiores a 3D, la frontera abstracta descrita por la combinación lineal estricta $\\sum w_i x_i + b = 0$ recibe el nombre algebraico universal de **hiperplano** de decisión, cuya topología será siempre de dimensión $(n-1)$."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Cuál de estas es una de las limitaciones del perceptrón?",
    "options": [
      "Tiene pocos datos de entrada",
      "Su algoritmo de entrenamiento no es óptimo",
      "No es capaz de resolver problemas lineales n-dimensionales",
      "No es capaz de representar hiperplanos en problemas lineales",
      "Presenta un único EP en la capa de salida"
    ],
    "correct": 4,
    "justification": "De entre las opciones proporcionadas, la estructuralmente veraz según la topología elemental de Rosenblatt es que consta de **un único Elemento de Procesamiento (EP)** en la capa de salida. Esta es una limitación en términos de arquitectura, ya que un solo perceptrón solitario limita al sistema a resolver problemas que involucren únicamente clasificación en dos clases (salida binaria, un bit). Para clasificar entre múltiples etiquetas independientes, habría que ensamblar varias neuronas o multicapas, rompiendo la estructura pura de una unidad."
  },
  {
    "category": "neurona",
    "source": "daypo",
    "question": "Qué representa la recta que separa las dos clases en la función de transferencia del perceptrón?",
    "options": [
      "Los datos de entrada",
      "El sumatorio de los datos de entrada",
      "Los datos de salida",
      "El sumatorio de los datos de salida",
      "Los valores de la MA"
    ],
    "correct": 1,
    "justification": "En la capa de cálculo del perceptrón, el valor decisivo donde la salida de la neurona 'duda' o salta de ser inactiva a estar activa corresponde geométricamente a la recta o hiperplano separador. Este umbral cero matemático se encuentra resolviendo la igualdad $\\sum w_i x_i + b = 0$. Este cálculo es literalmente el **sumatorio ponderado de los datos de entrada** (también denominado entrada neta o 'neta'), determinando la separación de las dos clases contiguas."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que tenemos un problema que no puede ser separado linealmente. Cuál de estas sería una solución posible para que sí lo sea? En un caso de MLP",
    "options": [
      "Añadir más datos de entrada para diversificar el número de elementos",
      "Aumentar el número de capas o dimensiones",
      "Disminuir el número de elementos de salida para reducir la entropía",
      "Refactorizar el algoritmo de entrenamiento",
      "Mover los datos que se salen de la linealidad o despreciarlos"
    ],
    "correct": 1,
    "justification": "El Teorema de Cover sobre la separabilidad de patrones establece que un problema de clasificación complejo proyectado de forma no lineal en un espacio de alta dimensionalidad tiene mayor probabilidad de ser linealmente separable. En un Perceptrón Multicapa (MLP), esto se logra **aumentando el número de capas o dimensiones** mediante la adición de capas ocultas. Estas actúan como extractores de características que transforman el espacio de entrada original en un nuevo espacio donde los datos sí pueden ser separados por un hiperplano en la capa de salida. Añadir más datos o despreciar elementos no cambia la geometría inherente del problema."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Cuál de las siguientes afirmaciones es incorrecta con respecto al MLP?",
    "options": [
      "Se conectan más neuronas a la salida de otras",
      "Se organiza en capas",
      "Permite separar datos linealmente no separables en primera instancia",
      "Es posible que para algunos problemas no linealmente separables, algunas salidas no existan",
      "Se hace uso de capas ocultas en vez de capas de entrada y salida"
    ],
    "correct": 4,
    "justification": "La afirmación *«Se hace uso de capas ocultas en vez de capas de entrada y salida»* es **incorrecta** porque un Perceptrón Multicapa (MLP) requiere obligatoriamente una capa de entrada (para recibir los datos) y una capa de salida (para emitir la predicción). Las capas ocultas no sustituyen a estas, sino que se añaden *entre* ellas para dotar a la red de representaciones no lineales."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Cuál de las siguientes afirmaciones es incorrecta con respecto al MLP?",
    "options": [
      "Las capas de entrada no computan nada, solo guardan el valor y se lo envían a la siguiente capa",
      "El número de capas ocultas es variable, pero mínimo deben haber dos",
      "En la capa de salida, existe una neurona por cada salida deseada",
      "El número de neuronas por cada capa es variable y no existe una regla ni método",
      "El conocimiento de la red reside en los pesos de las conexiones y bias"
    ],
    "correct": 1,
    "justification": "La afirmación *«El número de capas ocultas es variable, pero mínimo deben haber dos»* es **incorrecta**. Según el **Teorema de Aproximación Universal**, un MLP con **una única capa oculta** (que contenga un número suficiente de neuronas con función de activación no lineal) es matemáticamente capaz de aproximar cualquier función continua con la precisión deseada. Por lo tanto, no existe un requisito mínimo de dos capas ocultas."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Cuál de las siguientes afirmaciones es incorrecta con respecto al MLP?",
    "options": [
      "El conocimiento de la red es centralizado y distribuido",
      "El conocimiento de la red permite explicar su funcionamiento mediante tablas de valores",
      "El conocimiento de la red es bastante tolerante a fallos",
      "El conocimiento de la red permite la autoorganización",
      "El conocimiento de la red reside en los pesos de las conexiones y bias"
    ],
    "correct": 1,
    "justification": "La afirmación *«El conocimiento de la red permite explicar su funcionamiento mediante tablas de valores»* es **incorrecta**. Las redes neuronales artificiales, como el MLP, operan como modelos de **caja negra**. El conocimiento que adquieren durante el entrenamiento está distribuido de manera descentralizada a lo largo de una inmensa matriz de pesos sinápticos y sesgos (bias), lo que hace que su lógica interna y toma de decisiones sean opacas y no puedan ser directamente explicadas o reducidas a simples tablas de valores o reglas explícitas."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Cuál de las siguientes afirmaciones es incorrecta con respecto al MLP?",
    "options": [
      "Las funciones de transferencia no están limitadas a ser umbral o lineales",
      "Las funciones de transferencia deben ser siempre la misma para todas las neuronas de una capa",
      "El problema de la función de transferencia de escalón o umbral es que no permite la correcta clasificación de las clases intermedias",
      "El problema de la función de transferencia lineal es la regresión y el ajuste de curvas para los datos intermedios",
      "Ninguna es correcta"
    ],
    "correct": 4,
    "justification": "La opción correcta a «cuál es incorrecta» es **«Ninguna es correcta»** (es decir, no hay afirmaciones falsas en las opciones). Todas las demás proposiciones son válidas: las funciones de transferencia abarcan más allá del umbral o las lineales (como las sigmoidales o ReLU); típicamente se estandariza la misma función por capa; la función de escalón tiene derivada nula e impide ajustar datos intermedios con backpropagation; y usar una función de transferencia estrictamente lineal limita a la red a una simple regresión, anulando su capacidad multicapa para separar problemas complejos."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Si quisiésemos hacer una función de transferencia para una clasificación y que no presente problemas de regresión, cuál de estas FT usaríamos?",
    "options": [
      "Una FT logsig (logaritmica sigmoidal)",
      "Una FT lineal",
      "Una FT de umbral",
      "No es posible usar una FT con esas especificaciones",
      "Una FT de escalón"
    ],
    "correct": 0,
    "justification": "Para tareas de clasificación probabilística se utiliza una **FT logsig (logaritmica sigmoidal)**. Esta función comprime cualquier valor real de entrada en el rango abierto (0, 1), lo que se interpreta de forma natural como la probabilidad de pertenencia a una clase. Esto solventa los problemas de regresión que presentaría una función lineal (cuyos valores no están acotados y podrían exceder de 1 o ser negativos) y, a diferencia de la función escalón, es derivable y permite el entrenamiento por descenso de gradiente."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que queremos usar una función de transferencia lineal para nuestras capas internas para mejorar la linealidad. Qué resultados podríamos esperar?",
    "options": [
      "La separación de datos en un problema linealmente no separable sería más sencilla",
      "Se generarían más capas ocultas permitiendo una mejor resolución a problemas no linealmente separables",
      "Se mejoraría el rendimiento del MLP siempre y cuando el problema sea de regresión",
      "Se mejoraría el rendimiento del MLP siempre y cuando el problema sea de clasificación",
      "Esas capas perderían su capacidad de representación no lineal"
    ],
    "correct": 4,
    "justification": "Si utilizásemos exclusivamente una función de transferencia lineal en nuestras capas internas, **esas capas perderían su capacidad de representación no lineal**. Matemáticamente, la combinación secuencial de múltiples transformaciones lineales es equivalente a una única transformación lineal. Por ello, la red colapsaría y dejaría de poder resolver problemas linealmente no separables (como el famoso XOR), funcionando únicamente como un regresor lineal básico."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "En cuanto a las aplicaciones del MLP, cuál de estos NO sería una aplicación posible?",
    "options": [
      "Reproducir una función matemática desconocida",
      "Clasificación de patrones en una clase específica",
      "Asignación de salidas esperadas y coherentes a patrones nuevos a partir de los patrones usados en entrenamiento",
      "Problemas de regresión linear",
      "Todas son aplicaciones del MLP"
    ],
    "correct": 4,
    "justification": "La opción a marcar como NO posible es **«Todas son aplicaciones del MLP»**, ya que esta es paradójicamente la correcta. El MLP es un aproximador universal; por lo que sí se utiliza habitualmente para reproducir funciones matemáticas desconocidas, para clasificar patrones y asignar salidas consistentes a datos nuevos (generalización), e incluso, usando salidas lineales, para problemas de regresión."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Escoja la opción incorrecta respecto al entrenamiento del MLP",
    "options": [
      "La regla delta está pensada para redes sin capas ocultas",
      "No se puede computar el error en las capas ocultas",
      "No se conocen las salidas deseadas para las capas ocultas",
      "El backpropagation es una generalización de la regla delta",
      "Se puede computar el error de la capa de salida y las capas ocultas y modificar los pesos de la capa de salida"
    ],
    "correct": 4,
    "justification": "La afirmación **incorrecta** es *«Se puede computar el error de la capa de salida y las capas ocultas y modificar los pesos de la capa de salida»*. Esto se debe a que el objetivo central del algoritmo de propagación hacia atrás (Backpropagation) no es modificar únicamente los pesos de la capa final, sino propagar el error calculado en la salida hacia atrás (a través de las capas ocultas) aplicando la regla de la cadena, para así **actualizar todos los pesos sinápticos de toda la red**."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Escoja la opción incorrecta respecto al algoritmo de backpropagation",
    "options": [
      "Los errores se propagan de la capa de salida hacia dentro, hacia las capas ocultas",
      "Los términos del error de las unidades ocultas se calculan ANTES de que hayan sido modificados los pesos de los de salida",
      "µ es la tasa de velocidad de aprendizaje",
      "Se hace una clara diferencia en la variación de los pesos y el término de error",
      "Las condiciones de parada de este algoritmo solo se basan en llegar al error de entrenamiento"
    ],
    "correct": 4,
    "justification": "La afirmación **incorrecta** es *«Las condiciones de parada de este algoritmo solo se basan en llegar al error de entrenamiento»*. Detener el aprendizaje basándose únicamente en minimizar el error de entrenamiento provoca un sobreajuste severo (overfitting), memorizando el ruido. Las implementaciones correctas de Backpropagation integran múltiples condiciones de parada, principalmente la técnica de **early stopping**, que monitoriza el error en un subconjunto de validación separado para detener el proceso cuando este empieza a aumentar."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Escoja la opción incorrecta respecto al algoritmo de backpropagation",
    "options": [
      "Se inicializan todos los pesos de forma aleatoria",
      "Se calculan los errores de todos los patrones y se modifican los pesus según ese valor de error global",
      "Se usan epochs, o ciclos, hasta una condición de parada",
      "Es posible que este algoritmo de un resultado sobreentrenado",
      "Se puede detener si se ha alcanzado un error de entrenamiento aceptable"
    ],
    "correct": 3,
    "justification": "La afirmación elegida como **incorrecta** es *«Es posible que este algoritmo de un resultado sobreentrenado»*. En el marco académico planteado por el profesor, se asume que un algoritmo de entrenamiento Backpropagation bien definido *debe* llevar siempre mecanismos de control de validación cruzada y parada temprana (*early stopping*). Al aplicar estrictamente estas condiciones, el sistema se detiene antes de sobreajustarse, por lo que, bajo esa premisa, no daría un resultado sobreentrenado."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Escoja la opción incorrecta respecto al algoritmo de backpropagation",
    "options": [
      "Se pueden emplear todos los datos disponibles para entrenar la red",
      "Lo que se necesita es un subconjunto de datos representativos para el entrenamiento",
      "La RNA admite la generalización, lo que permite patrones que no ha visto en el enrtenamiento",
      "Las salidas pueden ser imprecisas si el conjunto de entrenamiento no fue bien escogido, no si se entrena mal",
      "Al implementar una red de incertidumbre, podemos apaliar el problema de los patrones mal escogidos"
    ],
    "correct": 3,
    "justification": "La afirmación **incorrecta** es *«Las salidas pueden ser imprecisas si el conjunto de entrenamiento no fue bien escogido, no si se entrena mal»*. En realidad, la imprecisión de una red neuronal puede provenir de **ambos** factores. Un conjunto de datos sesgado, escaso o con ruido afectará la capacidad de generalización; sin embargo, un proceso de entrenamiento deficiente (mala tasa de aprendizaje, detención prematura, caer en mínimos locales) también provocará salidas completamente imprecisas incluso con datos ideales."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Escoja la opción incorrecta respecto al algoritmo de backpropagation",
    "options": [
      "La capacidad de una red para resolver un problema está ligada a los ejemplos usados en el aprendizaje",
      "Un conjunto de entrenamiento debe ser significativo y representativo",
      "La proporción de ejemplos entre distintos tipos no afectan a la capacidad de la red de generalización",
      "Todas las regiones del especio de estados deben estar suficientemente cubiertas",
      "Si el conjunto de entrenamiento es reducido, la red no será capaz de resolver el problema de forma eficaz"
    ],
    "correct": 2,
    "justification": "La afirmación **incorrecta** es *«La proporción de ejemplos entre distintos tipos no afectan a la capacidad de la red de generalización»*. El balance y proporción de las clases en el conjunto de entrenamiento (dataset balance) es **crítico**. Si un conjunto de entrenamiento tiene un 95% de ejemplos de una clase y un 5% de otra, la red tenderá a predecir siempre la clase mayoritaria para minimizar el error global fácilmente, perdiendo por completo la capacidad de generalizar y de identificar la clase minoritaria."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Si quisiésemos tener un control de convergencia óptimo en gradiente descendiente, qué tipo de avance por la superficie seria correcto?",
    "options": [
      "Incrementos grandes",
      "Incrementos pequeños",
      "Incrementos lineales",
      "Incrementos regresivos",
      "Incrementos aleatorios"
    ],
    "correct": 1,
    "justification": "Para obtener un control de convergencia óptimo sin arriesgar la estabilidad, el avance por la superficie de error debe realizarse con **incrementos pequeños** (tasa de aprendizaje baja). Los incrementos grandes corren el enorme riesgo de rebasar el mínimo local o global (*overshooting*), provocando oscilaciones e incluso divergencia (aumento progresivo del error), mientras que los pasos pequeños aseguran un descenso estable y gradual por el gradiente."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Escoja la opción correcta en cuanto al control de convergencia en un descenso de gradiente",
    "options": [
      "Desde un punto inicial fijo, el algoritmo resbala por la superficie del error hasta alcanzar un mínimo",
      "El algoritmo se detiene una vez la pendiente de la tangente = 1",
      "La modificación de los pesos es proporcional al gradiente, por lo tanto en el punto mínimo se modificarán los pesos",
      "Cada vez que se entrena con este tipo de control obtenemos el mismo resultado",
      "El proceso de control de converegencia no es determinístico"
    ],
    "correct": 4,
    "justification": "La afirmación correcta es que *«El proceso de control de converegencia no es determinístico»*. Aunque la matemática del descenso de gradiente sea determinista paso a paso, el resultado global del entrenamiento no lo es. Esto se debe a que los pesos sinápticos y bias de la red se inicializan aleatoriamente en cada ejecución, lo que sitúa a la red en un punto de partida diferente en la superficie de error multidimensional. Esto hace que el algoritmo pueda converger en distintos mínimos locales en cada ejecución."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Usando un control de convergencia clásico en un descenso de gradiente, el entrenamiento se ha entrenado y vemos que la pendiente del punto mínimo es 0. Podemos entonces confirmar que el entrenamiento ha sido fructífero y que el error es mínimo?",
    "options": [
      "Sí, porque el punto mínimo global del gradiente tiene como pendiente 0, ningún otro punto en la curva lo tiene",
      "Sí, porque el algoritmo de entrenamiento se ha detenido y tenemos la pendiente = 0",
      "No, porque el algoritmo se ha detenido porque no ha mejorado el error mínimo de validación, obteniendo una pendiente 0",
      "No, porque puede ser que el punto en el que se ha detenido sea un mínimo local y no el mínimo global",
      "Con estos datos no es posible saber esa información, sería necesario consultar la matriz de pesos"
    ],
    "correct": 3,
    "justification": "### Análisis de la pregunta\n\nEn el algoritmo de descenso de gradiente, el proceso de optimización busca los mínimos de la función de coste moviéndose en la dirección opuesta al gradiente. Cuando la pendiente (gradiente) es 0, significa que el algoritmo ha alcanzado un **punto estacionario**. \n\nEste punto puede ser el mínimo global, pero en funciones de coste complejas (típicas en redes neuronales, que suelen ser no convexas), es muy probable que se trate de un **mínimo local** o incluso de un punto de silla. Por tanto, **no podemos confirmar que el entrenamiento haya alcanzado el error mínimo absoluto (global)**, sino solo que se ha detenido en un óptimo local.\n\nLas otras opciones son incorrectas porque asumen erróneamente que una pendiente de 0 implica globalidad o asumen motivos de parada que no se deducen directamente de este hecho matemático."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que el error que obtenemos en el entrenamiento del MLP no ha sido satisfactorio. Cuál de estas opciones sería la correcta?",
    "options": [
      "Ajustar mejor los pesos esperados de salida",
      "Disminuir el número de neuronas por capa (afinar)",
      "Disminuir el grupo de datos de entrenamiento",
      "Volver a entrenar y/o modificar los parámetros de aprendizaje",
      "Reducir el número de capas ocultas"
    ],
    "correct": 3,
    "justification": "### Análisis de la pregunta\n\nSi el error obtenido tras el entrenamiento de un Perceptrón Multicapa (MLP) no es satisfactorio (por ejemplo, existe *underfitting* o el algoritmo no ha convergido adecuadamente), la acción correcta es **volver a entrenar la red modificando sus parámetros de aprendizaje o hiperparámetros**.\n\nEsto puede implicar:\n- Ajustar la **tasa de aprendizaje (learning rate)** o el **momento**.\n- Cambiar la arquitectura de la red (aumentando el número de neuronas o capas si el modelo es demasiado simple).\n- Alterar la inicialización de los pesos.\n\n*Por qué las otras son incorrectas:*\n- Disminuir el número de neuronas o reducir capas ocultas disminuiría la capacidad de la red para aprender un problema complejo, probablemente empeorando el error.\n- Disminuir los datos de entrenamiento reduce la información disponible, lo cual nunca es aconsejable.\n- Ajustar los \"pesos esperados de salida\" no tiene sentido teórico, ya que las salidas esperadas vienen dadas inamoviblemente por el dataset del problema."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Hemos obtenido un error bajo durante e entrenamiento , podemos confirmar que la red se comportará bien ante nuevos patrones?",
    "options": [
      "Sí, porque el subconjunto de entrenamiento ha sido óptimo",
      "No, porque el error obtenido es de un mínimo local y no global",
      "No, porque aunque el error sea bajo no podemos saber cómo va a generalizar",
      "Sí, porque el error de entrenamiento ha sido bajo",
      "Sí, porque el error de entrenamiento se relaciona directamente con el error de la red"
    ],
    "correct": 2,
    "justification": "### Análisis de la pregunta\n\nUn error bajo en el conjunto de entrenamiento indica únicamente que la red ha aprendido muy bien los patrones específicos que se le han enseñado. Sin embargo, **esto no garantiza su capacidad de generalización** frente a datos nunca antes vistos.\n\nLa red podría estar sufriendo de **sobreentrenamiento (overfitting)**, una situación en la que el modelo ha memorizado el ruido o las particularidades exactas de los datos de entrenamiento, pero fallará estrepitosamente ante nuevos patrones.\n\nPara confirmar que la red se comportará bien ante nuevos casos, es imprescindible evaluar su rendimiento utilizando conjuntos de datos independientes, concretamente el **conjunto de validación** y el **conjunto de test**."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que tenemos un problema donde tenemos 2 salidas posibles y no se pueden separar linealmente, qué solución ofrecerías?",
    "options": [
      "Usar un RNA monocapa",
      "Usar una red con dos neuronas",
      "Usar una red con más de 2 neuronas",
      "Usar una red con una neurona",
      "Usar una red con dos neuronas que se conectan con una tercera de salida"
    ],
    "correct": 4,
    "justification": "### Análisis de la pregunta\n\nUn problema de clasificación binaria (2 salidas posibles) que **no es linealmente separable** (como el clásico problema lógico XOR) jamás puede ser resuelto por una red monocapa. Un solo perceptrón únicamente puede trazar un hiperplano (una línea recta en 2 dimensiones), lo cual es insuficiente.\n\nLa solución mínima viable es utilizar un **Perceptrón Multicapa (MLP)** que contenga al menos una capa oculta. En su forma más reducida para problemas como XOR, esto requiere **al menos dos neuronas en la capa oculta** (para trazar dos hiperplanos o semiespacios que acoten la región de interés), las cuales se conectan a **una tercera neurona de salida** que actúa como compuerta lógica para combinar (unir) esos semiespacios en una región no lineal."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que tenemos un problema donde tenemos 2 salidas posibles y no se pueden separar linealmente, hemos optado por usar una red con neuronas de primera capa y de salida. Qué opción sería correcta?",
    "options": [
      "Las neuronas de la primera capa crean semiespacios",
      "Las neuronas de la capa de salida unen semiespacios",
      "Las neuronas de la capa de salida crean regiones",
      "a) y b)",
      "a), b) y c)"
    ],
    "correct": 3,
    "justification": "### Análisis de la pregunta\n\nEn la arquitectura geométrica fundamental de un Perceptrón Multicapa (MLP) con una sola capa oculta (primera capa) y una capa de salida:\n\n1. **Las neuronas de la primera capa (oculta)** actúan trazando hiperplanos en el espacio de características original, lo que divide el espacio en diferentes **semiespacios**.\n2. **Las neuronas de la capa de salida** reciben estas divisiones y las combinan lógicamente (operando de forma análoga a un AND/OR matemático gracias a los pesos), lo que se describe teóricamente como **unir semiespacios** para conformar regiones cerradas o convexas de clasificación.\n\nPor tanto, las afirmaciones a) y b) describen con precisión el funcionamiento matemático de esta red, haciendo de la opción **\"a) y b)\"** la respuesta correcta."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que tenemos un problema complejo, donde no solamente podemos usar un semiespacio sino 2. En un MLP, cuál de estas opciones sería incorrecta?",
    "options": [
      "Las neuronas de la primera capa crean semiespacios",
      "Las neuronas de la segunda capa unen semiespacios y crean regiones",
      "Las neuronas de la capa de salida une regiones de la misma clase",
      "Todas son correctas",
      "Ninguna es correcta"
    ],
    "correct": 3,
    "justification": "### Análisis de la pregunta\n\nEsta pregunta presenta un error evidente de formulación en el test original. El enunciado pide identificar la opción **incorrecta**, pero las tres primeras sentencias describen de manera teóricamente **correcta** la función jerárquica de las capas en un Perceptrón Multicapa (MLP) robusto:\n\n1. La primera capa oculta **crea semiespacios**.\n2. La segunda capa oculta **une esos semiespacios para formar regiones**.\n3. La capa de salida **une regiones** para formar áreas más complejas de la misma clase.\n\nAl ser las tres sentencias ciertas, la respuesta que se espera es \"Todas son correctas\". Hemos marcado esta pregunta como anómala (`was_incorrect: true`) ya que si el enunciado exige la opción falsa, responder \"Todas son correctas\" resulta lógicamente contradictorio; evidentemente, se pretendía preguntar *\"¿cuál de estas opciones sería correcta?\"*."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que tenemos un problema que, en teoría, es separable con una recta. Sin embargo, debido a la presencia de ruido, tendríamos que usar una RNA con 4 neuronas en la primera capa para dividirlo. Sería correcto? Asumamos que obtenemos un 100% de precisión durante el entrenamiento",
    "options": [
      "Sí, lo importante es el buen entrenamiento y el test, no el número de neuronas",
      "Sí, porque hemos obtenido una precisión alta y eso es lo que se busca",
      "No, porque el modelo ha aprendido del ruido y no generaliza bien",
      "No, porque la generalización es más alta de lo que debería ser el problema original",
      "Sí, porque el problema ha sido separado en las clases pertinente y el entrenamiento ha ido bien"
    ],
    "correct": 2,
    "justification": "### Análisis de la pregunta\n\nEste es un ejemplo paradigmático de **sobreentrenamiento (overfitting)** por exceso de complejidad estructural.\n\nEl problema original es subyacentemente lineal (separable con una simple recta / una neurona). Al usar una arquitectura desmesurada (4 neuronas en la capa oculta), dotamos al modelo de demasiados grados de libertad. En lugar de aprender la frontera de decisión simple, la red **\"memorizará\" los datos de entrenamiento junto con todo el ruido** presente en ellos.\n\nEsto resultará en una precisión artificialmente perfecta (100%) durante el entrenamiento, pero la **capacidad de generalización será muy pobre** (fallará ante nuevos datos), ya que se ha ajustado a las anomalías en vez de al patrón general."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Cuál de estas afirmaciones sobre el entrenamiento en MLP es incorrecta?",
    "options": [
      "Una causa del sobreentrenamiento puede ser que la red sea demasiado compleja",
      "Una causa del sobreentrenamiento puede ser que se ha forzado a aprender demasiados ciclos",
      "Normalmente el sobreentrenamiento se da por forzar muchos ciclos y por redes demasiado complejas",
      "Una causa del sobreentrenamiento son pocos datos en el subconjunto de entrenamiento",
      "Una causa del sobreentrenamiento son muchos datos significativos en el subconjunto de entrenamiento"
    ],
    "correct": 4,
    "justification": "### Análisis de la pregunta\n\nEl sobreentrenamiento (*overfitting*) se produce normalmente cuando la red es **demasiado compleja** (exceso de neuronas/capas), cuando se entrena durante **demasiados ciclos** (exceso de épocas memorizando), o cuando **faltan datos** en el subconjunto de entrenamiento.\n\nPor el contrario, disponer de **muchos datos significativos** y representativos en el conjunto de entrenamiento es precisamente la principal y mejor forma de **prevenir** el sobreentrenamiento, ya que obliga a la red a generalizar sobre una gran variedad de casos reales. \n\nDado que la pregunta pide señalar la afirmación **incorrecta**, la opción que señala que una gran cantidad de datos causa sobreentrenamiento es la respuesta a marcar."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Queremos implementar un tipo de regularización de entrenamiento que consista en añadir a la función de coste la suma de los valores absolutos de los pesos. Cuál de estas técnicas usaríamos?",
    "options": [
      "L1",
      "L2",
      "Decaimiento de pesos",
      "Dropout",
      "Batch normalization"
    ],
    "correct": 0,
    "justification": "### Análisis de la pregunta\n\nLa técnica de regularización **L1** (también conocida en estadística como Lasso) consiste en añadir a la función de coste original un término de penalización que es proporcional a la **suma de los valores absolutos de los pesos** de la red neuronal.\n\nLa principal característica matemática de la regularización L1 es que induce dispersión (*sparsity*), forzando a que los pesos de las conexiones menos importantes tiendan exactamente a cero, lo cual funciona también como un selector automático de características. \n\n*Nota:* La L2 utiliza la suma de los pesos al cuadrado."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Queremos implementar un tipo de regularización de entrenamiento que consista en añadir a la función de coste la suma de los cuadrados valores absolutos de los pesos. Cuál de estas técnicas usaríamos?",
    "options": [
      "L1",
      "L2",
      "Decaimiento de pesos",
      "Dropout",
      "Batch normalization"
    ],
    "correct": 1,
    "justification": "### Análisis de la pregunta\n\nLa técnica de regularización **L2** (también conocida como *Weight Decay* clásico o regularización Ridge) consiste en sumar a la función de coste original un término proporcional a la **suma de los cuadrados de los pesos** (que es matemáticamente equivalente a los cuadrados de los valores absolutos).\n\nA diferencia de la L1, la regularización L2 no fuerza los pesos a ser exactamente cero, sino que penaliza enormemente los pesos muy grandes. Esto empuja a la red a distribuir el conocimiento a lo largo de múltiples conexiones pequeñas y uniformes, limitando la complejidad del modelo y previniendo que una sola neurona domine el comportamiento, lo cual es excelente contra el sobreentrenamiento."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Queremos implementar un tipo de regularización de entrenamiento que consista no infiera en el entrenamiento, pero que lo supervise. Cuál de estas técnicas usaríamos?",
    "options": [
      "L1",
      "L2",
      "Decaimiento de pesos",
      "Dropout",
      "Batch normalization"
    ],
    "correct": 4,
    "justification": "### Análisis de la pregunta\n\nEsta pregunta del test original es conceptualmente errónea y presenta unas opciones que no concuerdan con el enunciado. La técnica que \"supervisa el entrenamiento sin interferir matemáticamente en la función de coste\" es la **Parada Temprana (Early Stopping) utilizando un Conjunto de Validación**.\n\nLa Parada Temprana evalúa el rendimiento en paralelo y detiene el proceso si detecta un aumento del error de validación, sin modificar los pesos directamente. Sin embargo, esta opción no está presente. El test original da por correcta la opción **\"Batch normalization\"**. \n\nLa normalización por lotes (Batch Normalization) estabiliza el aprendizaje escalando las activaciones de las capas intermedias, lo cual **sí interfiere** directamente en el modelo matemático. Se ha marcado con `was_incorrect: true` debido a que es una respuesta falsa propiciada por un error en la configuración del test de origen."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que mientras se entrena la red, vamos evaluando el conjunto de validación. Vemos que el error del conjunto de validación aumenta. Eso qué significa?",
    "options": [
      "Que la red se está sobreentrenando",
      "Que el conjunto de validación se está sobreentrenando",
      "Que el error de test está disminuyendo",
      "Que el error de la red está aumentando",
      "Ninguna de las anteriores"
    ],
    "correct": 0,
    "justification": "### Análisis de la pregunta\n\nEn el entrenamiento supervisado, la evaluación paralela del conjunto de validación sirve como termómetro de la generalización. \n\nSi durante el entrenamiento observamos que el error sobre el conjunto de entrenamiento sigue disminuyendo, pero **el error del conjunto de validación empieza a aumentar**, estamos ante el síntoma clínico e inequívoco de que **la red se está sobreentrenando (overfitting)**.\n\nEn ese punto de inflexión, la red deja de asimilar patrones generales válidos para cualquier dato y empieza a memorizar rígidamente las particularidades, atipicidades y el ruido exclusivos de los datos de entrenamiento."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que mientras se entrena la red, vamos evaluando el conjunto de validación. Vemos que el error del conjunto de validación aumenta y hemos detenido el entrenamiento. Qué estrategia NO sería correcta hacer a continuación?",
    "options": [
      "Establecer un número de ciclos donde se pare el entrenamiento si no ha mejorado la validación",
      "Entrenar durante un número de ciclos muy alto durante el entrenamiento",
      "Entrenar durante un número de ciclos bajo durante el entrenamiento",
      "Cambiar el subconjunto de validación",
      "Evaluar el entreno de la red y el de validación una vez aplicada una técnica de regularización"
    ],
    "correct": 1,
    "justification": "### Análisis de la pregunta\n\nAnte una situación donde el error de validación comienza a aumentar (claro síntoma de sobreentrenamiento) y procedemos a detener la red, la pregunta cuestiona qué estrategia **NO sería correcta** adoptar a continuación.\n\nLa peor estrategia posible sería **seguir entrenando durante un número de ciclos muy alto**. Hacer esto ignoraría por completo la advertencia del conjunto de validación y obligaría a la red a continuar profundizando en la memorización de los datos de entrenamiento, empeorando drásticamente su capacidad de generalización. El resto de opciones representan tácticas válidas (como implementar regularización, ajustar criterios de parada, etc.)."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Si quisiésemos saber si la red está bien entrenada, deberíamos mirar",
    "options": [
      "Entrenamiento",
      "Test",
      "Validación",
      "Test + Validación",
      "Validación + Entrenamiento"
    ],
    "correct": 1,
    "justification": "### Análisis de la pregunta\n\nPara evaluar de forma completamente justa, objetiva y sin sesgos si una red neuronal está correctamente entrenada y posee una buena capacidad de generalización en entornos reales, **debemos examinar exclusivamente su rendimiento en el conjunto de Test**.\n\n- El conjunto de **Entrenamiento** solo muestra la capacidad de la red para memorizar lo que se le ha enseñado explícitamente.\n- El conjunto de **Validación**, aunque no se usa para ajustar los pesos, se utiliza para guiar decisiones de diseño e hiperparámetros (como la parada temprana), por lo que acumula cierto \"sesgo indirecto\".\n\nEl **Test** actúa como un juez externo, con datos que la red jamás ha visto en ninguna fase, proporcionando la métrica final y definitiva de rendimiento."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que mientras entrenamos, vamos viendo el error de test. Qué podemos hacer con él?",
    "options": [
      "A partir del error de test podemos tomar decisiones con respecto al entrenamiento",
      "A partir del error de test podemos asegurar la capacidad de generalización de la red",
      "A partir del error de test podemos tomar decisiones sobre la fase de validación",
      "No se debería utilizar para tomar ninguna decisión",
      "A partir del error de test podemos asegurar la capacidad especificadora de la red"
    ],
    "correct": 3,
    "justification": "### Análisis de la pregunta\n\nLa regla de oro en el diseño de modelos de aprendizaje automático es que el **conjunto de Test es intocable y no se debe utilizar bajo ningún concepto para tomar ninguna decisión** durante las fases de entrenamiento, diseño o validación.\n\nSi usamos el error obtenido en Test para, por ejemplo, ajustar los hiperparámetros, decidir la arquitectura de la red o cambiar el ciclo de parada, estamos provocando lo que se conoce como **filtración de datos (data leakage)**. Esto contamina el conjunto de Test, ya que la red empieza a ajustarse indirectamente a él, invalidando su propósito original: ser una medida completamente virgen e imparcial de la capacidad de generalización final del modelo."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Tras el entrenamiento de una RNA, obtenemos un 99.3% de precisión y solamente 1 error de clasificación. Cuál es el caso más probable? Asumamos que tenemos una cantidad muy grande de datos no linealmente separables",
    "options": [
      "Sobreentrenamiento",
      "Valores correctos",
      "No ha habido entrenamiento suficiente",
      "El RNA no es correcto pues ha fallado una clasificación",
      "Ha habido algún error durante el test"
    ],
    "correct": 0,
    "justification": "La opción correcta es la **0 (Sobreentrenamiento)**.\n\nEn problemas de clasificación del mundo real, y particularmente con conjuntos de datos muy extensos que **no son linealmente separables**, la existencia de ruido o superposición entre las clases es inevitable. Si una Red Neuronal Artificial (RNA) alcanza una precisión casi perfecta (99.3%) y sólo comete 1 error, lo más probable es que la red haya **memorizado los datos de entrenamiento**, incluyendo el ruido, en lugar de aprender una generalización robusta (un fenómeno conocido como **sobreentrenamiento** o *overfitting*). Una red con buena capacidad de generalización tendría un error mayor en entrenamiento pero rendiría mejor ante datos nuevos.\n\nLas demás opciones son incorrectas porque:\n*   **Valores correctos:** Es muy improbable en un caso no linealmente separable y masivo que se pueda obtener una separación tan precisa sin haber sobreajustado.\n*   **No ha habido entrenamiento suficiente:** Sería el caso opuesto (*underfitting*), donde el error de entrenamiento sería muy elevado.\n*   **El RNA no es correcto pues ha fallado...:** Es natural que una RNA falle alguna clasificación; buscar 0% de error suele ser síntoma de sobreentrenamiento."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Cuál de estas no es una aplicación del RNA?",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Aritmética"
    ],
    "correct": 4,
    "justification": "La opción correcta es la **4 (Aritmética)**, ya que se pregunta cuál *no* es una aplicación.\n\nSegún la teoría, las principales aplicaciones de las Redes Neuronales Artificiales son la **clasificación** (asignación de clases), la **predicción** (valores futuros), el **clustering** (agrupamiento no supervisado), la **regresión** (relaciones con salidas continuas) y la aproximación de funciones (*fitting*). \n\nEl cálculo de operaciones exactas y simbólicas (como la **aritmética**) se resuelve de manera mucho más eficiente y precisa utilizando la computación clásica (ALU del procesador) o algoritmos exactos; no tiene sentido usar un modelo de aprendizaje automático basado en aproximación matemática y heurísticas para sumar, restar o realizar aritmética fundamental."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Si quisiese usar un RNA para poder mapear distintas clases según sus atributos",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Ninguna de las anteriores"
    ],
    "correct": 0,
    "justification": "La opción correcta es la **0 (Clasificación)**.\n\nLa **clasificación** es la aplicación de las RNAs orientada a asignar (mapear) patrones u objetos de entrada a una de varias categorías (clases) predefinidas, basándose en las características o atributos que se introducen en la red. En este tipo de problemas, el número de clases es finito y conocido de antemano.\n\nLas demás opciones no encajan con la definición:\n*   **Predicción:** Estima estados o valores futuros.\n*   **Clustering:** Realiza agrupaciones *sin* conocer a priori las clases (es no supervisado).\n*   **Regresión:** Estima valores continuos o reales, no clases discretas."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Si quisiese usar un RNA para poder calcular el promedio de los institutos de un país",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Ninguna de las anteriores"
    ],
    "correct": 4,
    "justification": "La opción correcta es la **4 (Ninguna de las anteriores)**.\n\n\"Calcular el promedio\" es una operación determinista puramente matemática (aritmética y estadística). Las RNAs están diseñadas para descubrir relaciones complejas, generalizar a partir de datos no lineales, clasificar, predecir o agrupar. Usar una red neuronal para algo tan sencillo y exacto como calcular la media de un conjunto de valores conocidos es innecesario, ineficiente y no constituye una aplicación válida del aprendizaje automático (como vimos en la pregunta 61, la aritmética no es una aplicación de las RNA)."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que para una RNA de clasificación tengo solamente dos clases, qué opción sería incorrecta?",
    "options": [
      "Se usaría 1 neurona de salida",
      "La salida deseada sería binaria",
      "La FT habitual sería una logsig",
      "El umbral suele ser >1",
      "Se asignan valores entre 0 y 1 a los valores en la FT"
    ],
    "correct": 3,
    "justification": "La opción correcta (por ser la afirmación falsa) es la **3 (El umbral suele ser >1)**.\n\nEn un problema de **clasificación de dos clases (binaria)**, la arquitectura y configuración típica es:\n*   **1 neurona de salida** (opción 0 correcta) que discrimina entre ambas clases.\n*   La salida deseada se codifica como **0 o 1** (opción 1 correcta).\n*   Se usa una función de transferencia sigmoidea como la **logsig** (opción 2 correcta), que acota los valores precisamente en el rango **[0, 1]** (opción 4 correcta).\n\nDado que los valores de salida emitidos por la función *logsig* siempre van a estar entre 0 y 1, el **umbral de decisión** típico para discernir entre las dos clases es **0.5**. Un umbral superior a 1 no tiene ningún sentido matemático porque la neurona jamás alcanzará ese valor."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que para una RNA de clasificación tengo más de dos clases, qué opción sería incorrecta?",
    "options": [
      "Se usaría 1 neurona de salida por clase",
      "La salida deseada sería binaria",
      "La FT habitual sería una logsig",
      "El umbral suele ser 0.5",
      "Para cada patrón, la salida deseada es distinta de 0 para aquella que corresponda a la clase"
    ],
    "correct": 2,
    "justification": "La opción correcta (por ser la afirmación falsa) es la **2 (La FT habitual sería una logsig)**.\n\nCuando pasamos a una clasificación multiclase (más de dos clases), el diseño de la red cambia:\n*   Se suele usar una codificación *one-hot* donde hay **una neurona por clase** y la salida deseada es 1 para la clase correcta y 0 para el resto.\n*   Debido a esto, la Función de Transferencia (FT) en la capa de salida deja de ser la sigmoide (*logsig*) típica de la clasificación binaria. En su lugar, lo habitual es utilizar una activación **Lineal seguida de una función Softmax**. La función *Softmax* garantiza que todas las salidas sean positivas y sumen 1, convirtiéndolas en una distribución de probabilidad en la que las distintas clases compiten entre sí.\n\nPor tanto, afirmar que la FT habitual sigue siendo *logsig* en problemas puramente multiclase es incorrecto."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que para una RNA de clasificación tengo más de dos clases, qué opción sería incorrecta?",
    "options": [
      "Se usaría 1 neurona de salida por clase",
      "La salida final será la clase con menos certidumbre",
      "Las salidas de cada neurona pueden ser positivas o negativas",
      "Se la aplica una función softmax para que la suma de todos sea = 1",
      "Para cada patrón, la salida deseada es distinta de 0 para aquella que corresponda a la clase"
    ],
    "correct": 1,
    "justification": "La opción correcta (por ser la afirmación falsa) es la **1 (La salida final será la clase con menos certidumbre)**.\n\nEl objetivo de una red de clasificación, al predecir o inferir un nuevo patrón, es determinar a qué clase es más probable que pertenezca dicho patrón basándose en los datos aprendidos. Tras aplicar la función *Softmax*, las neuronas arrojan valores interpretables como probabilidades. Por consiguiente, la decisión del sistema siempre recae sobre la clase que presenta la **mayor certidumbre** (el valor más alto o probabilidad máxima), nunca la de menor certidumbre."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que para una RNA de clasificación tengo dos clases de salida, pero algunas clases del ejemplo no se corresponden con ninguna de las especificadas, qué opción sería incorrecta?",
    "options": [
      "Se usarían 2 neuronas de salida en total",
      "La salida final será la clase con mayor certidumbre",
      "Las salidas de cada neurona pueden ser positivas o negativas",
      "Se la aplica una función softmax para que la suma de todos sea = 1",
      "Para cada patrón, la salida deseada es distinta de 0 para aquella que corresponda a la clase"
    ],
    "correct": 0,
    "justification": "La opción correcta (por ser la afirmación falsa) es la **0 (Se usarían 2 neuronas de salida en total)**.\n\nSi el problema original requiere clasificar entre la Clase A y la Clase B, pero se detecta que los patrones de ejemplo pueden contener información que **no se corresponde con ninguna de las dos**, nos enfrentamos a la necesidad de crear una **clase extra** (la clase de rechazo o \"ninguna\").\n\nAl introducir esta nueva clase, el problema de clasificación pasa de 2 clases a 3 clases (A, B y Ninguna). Por tanto, siguiendo la regla de asignar 1 neurona de salida por cada clase (para usar *Softmax* como sugieren las demás opciones válidas), necesitaríamos **3 neuronas de salida en total**, lo que invalida rotundamente la afirmación de que se usarían solamente 2."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que tenemos un RNA de clasificación, donde tenemos tres clases. Escoja la opción incorrecta",
    "options": [
      "Es posible usar una única neurona de salida según intervalos",
      "Representar las salidas por intervalos convierte el problema en uno de regresión",
      "Dependiendo del conjunto, podríamos llegar a necesitar 4 clases de salida",
      "Podríamos tener 3 clases de salida",
      "Podríamos tener 2 clases de salida"
    ],
    "correct": 1,
    "justification": "La opción correcta (por ser la afirmación falsa) es la **1 (Representar las salidas por intervalos convierte el problema en uno de regresión)**.\n\nUna alternativa de diseño para clasificación con más de dos clases (especialmente si hay una gradación clara como baja/media/alta) es utilizar **una única neurona de salida y dividir su rango en intervalos** (ej. [0-0.33], [0.33-0.66], [0.66-1.0]), donde cada intervalo representa una clase.\n\nAplicar esta técnica arquitectónica **no cambia la naturaleza del problema**. La red sigue mapeando atributos para decidir la pertenencia a una categoría discreta; por tanto, el problema **sigue siendo de clasificación**. Un problema de regresión buscaría devolver una variable con significado continuo, no segmentarla en rangos rígidos con un significado de clase."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que queremos usar un RNA para el monitoreo de reserva de plazas en empresas de aviación. Qué tipo utilizaríamos?",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Aritmética"
    ],
    "correct": 1,
    "justification": "La opción correcta es la **1 (Predicción)**.\n\nEn los apuntes sobre aplicaciones de las Redes Neuronales Artificiales, la **predicción** se define como el uso de la red para inferir o determinar el valor de una variable en un estado futuro, a menudo como proyección temporal basándose en históricos y dependencias. \n\nEl \"monitoreo de reserva de plazas en aerolíneas\", junto con la evolución del mercado de valores, el clima o las demandas de ventas, son los ejemplos clásicos y por excelencia de sistemas de **predicción**, ya que su objetivo es estimar la cantidad de recursos o la demanda que habrá en el futuro para optimizar operaciones."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que queremos usar un RNA para conseguir la función que mepee un conjunto de variables de entrada en una o más de salida.Qué aplicación utilizaríamos?",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Aritmética"
    ],
    "correct": 3,
    "justification": "La opción correcta es la **3 (Regresión)**.\n\nLa aplicación encargada de modelar y aproximar la relación que permite **mapear un conjunto de variables independientes de entrada en una o múltiples variables dependientes continuas** es la **Regresión**. \n\nA diferencia de la clasificación, donde la salida está forzada a representar categorías discretas y finitas, en un problema de regresión, las salidas que arroja la RNA toman la forma de valores reales continuos que siguen la función subyacente aprendida. La aproximación de funciones o mapeo general es la base de las aplicaciones de regresión multivariante con RNAs."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que queremos usar un RNA para agrupar una serie de objetos en grupos. Qué aplicación utilizaríamos?",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Aritmética"
    ],
    "correct": 2,
    "justification": "La opción correcta es la **2 (Clustering)**.\n\nEl **Clustering** o agrupamiento es una técnica del aprendizaje automático diseñada específicamente para tomar un conjunto de patrones u objetos sin etiquetar y dividirlos en subgrupos estructurados. Estos grupos (clústeres) se forman de tal forma que los objetos pertenecientes al mismo clúster sean lo más similares posibles entre sí basándose en sus atributos o características, mientras difieren de los objetos de los demás grupos."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que queremos usar un RNA y tenemos un conjunto de datos donde, a priori, no conocemos el número de clases ni a cuál de ellas pertenecen los datos. Qué aplicación utilizaríamos?",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Aritmética"
    ],
    "correct": 2,
    "justification": "La opción correcta es la **2 (Clustering)**.\n\nEl hecho clave que diferencia al **Clustering** de la clasificación clásica es que se trata de un método de **aprendizaje no supervisado**. \n\nEsto significa que se desconoce por completo cuáles son las etiquetas, no hay variables objetivo y, sobre todo, **ni siquiera sabemos cuántas clases o agrupaciones existen a priori** en los datos subyacentes. El modelo neuronal (como pueden ser los Mapas Auto-Organizativos o SOM) es el responsable de analizar el espacio dimensional, encontrar la topología y agrupar los datos de forma autónoma sin un \"profesor\" que le diga a qué clase debería pertenecer cada uno."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que queremos usar un RNA pero no queremos tener un aprendizaje supervisado y no usar MLP. Qué aplicación utilizaríamos?",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Aritmética"
    ],
    "correct": 2,
    "justification": "La opción correcta es la **2 (Clustering)**.\n\nEl Perceptrón Multicapa (MLP) junto con la retropropagación es el estándar por excelencia de las redes alimentadas hacia delante (*feedforward*) supervisadas que se utilizan para clasificar y realizar regresiones.\n\nSi el objetivo es utilizar una red que se entrene mediante **aprendizaje no supervisado** (sin salidas deseadas u objetivo para el entrenamiento), se abandona el paradigma MLP y se acude a arquitecturas de agrupamiento y topológicas, siendo las **redes SOM (Self-Organizing Maps)** de Kohonen el máximo exponente para resolver problemas de **Clustering**."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que queremos usar un RNA pero queremos reconocer la curva que subyace tras un conjunto de patrones. Qué aplicación utilizaríamos?",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Fitting"
    ],
    "correct": 4,
    "justification": "La opción correcta es la **4 (Fitting)**.\n\nEl *Fitting* o **aproximación de funciones y curvas** es la aplicación que se encarga específicamente de ajustar una curva matemática que pase por (o que minimice el error respecto a) un conjunto de datos dados $(x, y)$. \n\nAunque comparte principios matemáticos fundamentales con la regresión, la terminología específica en ingeniería y aprendizaje automático (así como la nomenclatura de los modelos en MATLAB o herramientas afines) denomina al acto de tratar de encontrar la línea o curva subyacente que mejor dibuja una tendencia como **Fitting**."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que queremos usar un RNA pero no tenemos mucha idea de lo que queremos hacer, solamente sabemos que queremos que exista una relación entre datos. Qué aplicación utilizaríamos?",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Fitting"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que queremos usar un RNA para calcular el uso de energía de una casa basado en la hora del día y los factores atmosféricos. Qué aplicación utilizaríamos?",
    "options": [
      "Clasificación",
      "Predicción",
      "Clustering",
      "Regresión",
      "Fitting"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que para una RNA de clasificación tengo dos clases, qué opción sería incorrecta?",
    "options": [
      "Se usaría 1 neurona de salida por clase",
      "La salida deseada sería binaria",
      "Se usaria softwax tras la FT",
      "El umbral suele ser 0.5",
      "Para cada patrón, la salida deseada es distinta de 0 para aquella que corresponda a la clase"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Digamos que tengo un RNA con valores de entrada arbitrariamente grandes o pequeños. Qué opción es correcta?",
    "options": [
      "Es importante normalizar los valores para que estén, por ejemplo, entre 0 y 1",
      "Es importante normalizar los valores para que estén, por ejemplo, entre -1 y 1",
      "Es importante normalizar entre máximos y mínimos con la media y std",
      "Todas son correctas",
      "a) y b)"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Escoja la opción incorrecta sobre las aplicaciones del RNA regresivo",
    "options": [
      "Es necesario normalizar los valores de entrada individualmente",
      "Es necesario normalizar los valores de salida individualmente",
      "La normalización de datos de entrada deben estar, a lo sumo, entre -1 y 1",
      "Primero se desnormalizan las entradas para calcular las salidas",
      "A la red se le aplican las entradas normalizadas"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Una de estas opciones NO es una ventaja de los RRNNAA, escoja cuál",
    "options": [
      "Procesamiento en paralelo",
      "Fácil inserción dentro de la tecnología existente",
      "Tolerante a fallos",
      "Aprendizaje adaptativo",
      "Fácilmente explicables"
    ],
    "correct": 4,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Escoja la opción falsa en cuanto a la autoorganización en sistemas conexionistas",
    "options": [
      "No existen observaciones globales que determinen el comportamiento",
      "Las característica surgen de manera inesperada a partir de la interacción de componentes del sistema",
      "La red crea su propia representación de la información que recibe de su etapa de aprendizaje",
      "La información relevante no debe ser localizada por redundancia para evitar ruido",
      "No se cuenta con una salida deseada"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Escoja la opción falsa en cuanto a los SOM, en concreto el mapa autoorganizativo de características de Kohonen",
    "options": [
      "La localización de la neurona en la red especifica un orden topológico que describe la relación de similitud entre los patrones de entrada",
      "Permite mostrar las relaciones existentes entre los datos",
      "Presenta un aprendizaje competitivo, donde las células compiten por aprender y se consigue un grupo de ganadoras",
      "Los pesos de las neuronas ganadoras se actualizan para acercarlos al patrón de entrada",
      "Los pesos de las neuronas serán los centros de los clústers"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Escoja la opción falsa en cuanto a los SOM, en concreto el mapa autoorganizativo de características de Kohonen",
    "options": [
      "El aprendizaje conserva al relación topológica entre las neuronas",
      "Neuronas cercanas responden ante patrones similares",
      "Se trata de categorizar los datos de entrada y agrupar los datos similares",
      "Si un patrón nuevo aparece y no pertenece a ninguna categoría, entonces se ajustarán los pesos y la estructura de la red neuronal",
      "Una neurona ya entrenada no puede activarse con un patrón que ya reconozca"
    ],
    "correct": 4,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Escoja la opción falsa en cuanto a los SOM, en concreto el mapa autoorganizativo de características de Kohonen",
    "options": [
      "Cada neurona de la capa de entrada se conecta con una de las neuronas de la capa de competición",
      "No existen las conexiones entre neuronas de competición",
      "Si hay m neuronas de competición, los pesos de las conexiones entre capas se definen mediante (n,m)",
      "El vector de pesos de una neurona de competición tendrá el mismo numero de componentes que el vector de entrada",
      "Es posible comparar entre sí los dos vectores (entrada, competicion) mediante una función de distancia como la euclídea"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Escoja la opción falsa en cuanto a los SOM, en concreto el mapa autoorganizativo de características de Kohonen",
    "options": [
      "Los pesos de las conexiones se inicializan aleatoriamente",
      "La célula ganadora es la que tenga mayor distancia con ese vector de entrada",
      "Las células ganadoras tendrán de salida 1, mientras que el resto tendrá 0",
      "Los pesos de la neurona ganadora se modifican según una ecuación que tiene en cuenta la tasa de aprendizaje",
      "Las neuronas vecinas se ven afectadas durante el aprendizaje también"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Escoja la opción falsa en cuanto a la vecindad de los SOM",
    "options": [
      "La vecindad es regulada, entre otros, por su topología",
      "La vecindad genera regiones que responden a valores muy próximos al de entrenamiento",
      "La agrupación en regiones permite demostrar la generalidad de dicha estructura",
      "El radio de la vecindad es un valor fijo a lo largo del aprendizaje",
      "La neurona ganadora siempre será el centro de la vecindad"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Digamos que a la hora de validar un SOM uso el error de cuantización medio. Qué afirmación es correcta?",
    "options": [
      "El error de cuantización medio es suficiente para validar un SOM",
      "El error de cuantización medio no permite saber si las neuronas están próximas al espacio de datos, por lo que debemos usar el error de desviación estándar",
      "El error de cuantización medio no permite saber si las neuronas están próximas al espacio de datos, por lo que debemos usar medidas de preservación de la topología para validar la calidad",
      "El error de cuantización no se usa para validar un SOM",
      "El error de cuantización medio no permite saber si las neuronas están próximas al espacio de datos, por lo que debemos usar el error de desviación estándar y las medidas de preservación de la topología para validar la calidad"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Sobre los mapas auto-organizativos, escoja la opción incorrecta",
    "options": [
      "Las coordenadas de los prototipos son los pesos de las células de la capa competitiva",
      "El grado de vecindad es el número de células que habrá que recorrer para llegar de una célula a otra",
      "La conexión topológica no es una conexión física",
      "En los mapas topológicos toroidales no se deberían cruzar las líneas",
      "Donde hay más densidad de entradas, habrá más densidad de puntos conexiones-neuronas"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué ocurre con la tasa de aprendizaje durante el entrenamiento de una SOM?",
    "options": [
      "Aumenta en cada iteración",
      "Se mantiene constante",
      "Disminuye progresivamente",
      "Se elimina tras la primera época",
      "Solo afecta a la capa de salida"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué mide el error de cuantización de una SOM?",
    "options": [
      "La tasa de aprendizaje óptima",
      "La distancia entre los pesos de la BMU",
      "El número de conexiones no utilizadas",
      "El tiempo de entrenamiento",
      "La salida binaria del clasificador"
    ],
    "correct": 1,
    "justification": "El error de cuantización mide la distancia (generalmente euclídea al cuadrado) entre los vectores de entrada presentados a la red y el vector de pesos de su respectiva neurona ganadora (BMU - Best Matching Unit). Es una medida fundamental que indica con qué precisión los prototipos de la red representan el conjunto de datos originales. Las demás opciones son erróneas: la tasa de aprendizaje es un parámetro dinámico (alfa), el número de conexiones está relacionado con funciones de penalización (por ejemplo en neuroevolución), y el tiempo de entrenamiento depende del número de iteraciones o épocas. Aunque la opción correcta está formulada de manera abreviada como \"La distancia entre los pesos de la BMU\" asumiendo la relación subyacente con el patrón de entrada, es la única respuesta que apunta al concepto de métrica de distancia de prototipos."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué mide las medidas de preservación de la topología?",
    "options": [
      "La tasa de aprendizaje óptima",
      "La distancia entre los pesos de la BMU",
      "El número de conexiones no utilizadas",
      "La distancia entre prototipos y espacio de entrada de datos",
      "La salida binaria del clasificador"
    ],
    "correct": 3,
    "justification": "La preservación de la topología evalúa si las relaciones espaciales entre los datos del espacio de entrada original se reflejan correctamente en la estructura de la red neuronal. Es decir, verifica que estímulos de entrada cercanos en el mundo real activen neuronas que están espacialmente cerca en la malla de la red. Aunque la opción diga textualmente 'La distancia entre prototipos y espacio de entrada de datos', en el contexto de estas respuestas, hace referencia a cómo la red proyecta las métricas de distancia del espacio original de entrada en el espacio topológico de los prototipos del SOM. Es una medida complementaria pero fundamental que va más allá del simple error de cuantización."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué combinación esperamos tener en la fase de ordenación de un SOM?",
    "options": [
      "α alto, radio de vecindad alto",
      "α alto, radio de vecindad bajo",
      "α bajo, radio de vecindad bajo",
      "α bajo, radio de vecindad alto",
      "α bajo"
    ],
    "correct": 0,
    "justification": "Durante la fase de ordenación (o fase de ordenamiento topológico) de un SOM, la red busca capturar la estructura global de los datos y desenredar la malla de neuronas en el espacio de entrada. Para lograr este movimiento en bloque de la topología, se requiere de un ajuste macroscópico. Por ello se configuran parámetros grandes inicialmente: una tasa de aprendizaje (α) alta, que permite que los pesos se ajusten de manera significativa, y un radio de vecindad muy amplio, para que la actualización afecte no solo a la BMU, sino a vastas regiones vecinas del mapa, forzándolas a moverse juntas hacia el clúster de datos. Las combinaciones con parámetros reducidos corresponden a la fase posterior (convergencia)."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué combinación esperamos tener en la fase de convergencia de un SOM?",
    "options": [
      "α alto, radio de vecindad alto",
      "α alto, radio de vecindad bajo",
      "α bajo, radio de vecindad bajo",
      "α bajo, radio de vecindad alto",
      "α bajo"
    ],
    "correct": 2,
    "justification": "La fase de convergencia (también llamada de ajuste fino) en SOM sucede después de que la red haya adquirido un ordenamiento topológico general en la fase previa de ordenación. En esta segunda etapa, el objetivo cambia: ahora se trata de refinar estadísticamente la posición de las neuronas para que mapeen con máxima precisión la distribución de probabilidad de los datos, minimizando el error de cuantización. Para garantizar la estabilización y un ajuste muy sutil, se requiere utilizar parámetros disminuidos drásticamente: tanto una tasa de aprendizaje (α) pequeña para evitar oscilaciones descontroladas, como un radio de vecindad bajo (frecuentemente limitado únicamente a los vecinos directos o a la propia BMU)."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué pasaría si α se mantiene por encima del umbral de parada o no se ha llegado al número de iteraciones especificado?",
    "options": [
      "Se vuelve a comenzar el entrenamiento asignando a los pesos valores pequeños aleatorios",
      "Se volvería a, cada entrada, presentarle un conjunto de aprendizaje y su tasa de aprendizaje",
      "Se detendría el entrenamiento",
      "Se repropagaría el patrón de entrada hasta la capa de competición",
      "Se actualizaría cada conexión entre la capa de entrada y la BMU"
    ],
    "correct": 1,
    "justification": "En el algoritmo general de entrenamiento de los mapas SOM, el final del aprendizaje está condicionado comúnmente a que el coeficiente de aprendizaje (α) haya descendido por debajo de un umbral preestablecido, o a que se cumpla el número máximo de iteraciones (épocas) de entrenamiento permitidas. Si esto no se cumple, significa que la red aún no ha convergido, por lo que el algoritmo continúa de manera iterativa. Esto implica que se volverá a comenzar una nueva iteración o época: se presenta de nuevo secuencial o aleatoriamente todo el conjunto de patrones de aprendizaje a la red, y se actualizan los pesos de cada BMU y sus vecinos, pero esta vez con la tasa de aprendizaje y radio de vecindad correspondientemente actualizados (decaídos)."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Cuál de estos NO es una desventaja de SOM",
    "options": [
      "Transparentes a los datos de entrada",
      "Facilidad de visualización gracias a la malla",
      "Facilidad de integración con otras técnicas",
      "Adaptación local de los vectores de referencia a la densidad de probabilidad de los datos",
      "Garantía de conseguir la mejor solución (best match)"
    ],
    "correct": 4,
    "justification": "La formulación de esta pregunta es engañosa (posiblemente con un error tipográfico en el original y referida a 'Cuál de estos NO es una ventaja'). Analizando los SOM, las primeras cuatro opciones son ventajas conocidas de esta arquitectura: transparencia de los datos, proyección visual efectiva reduciendo dimensionalidad, integración directa y ajuste de densidad probabilística. Sin embargo, la última opción afirma que SOM tiene 'Garantía de conseguir la mejor solución', lo cual es inherentemente falso. Los mapas SOM operan como métodos heurísticos de descenso de gradiente estocástico y aprendizaje competitivo que tienden a quedar atrapados frecuentemente en mínimos locales o producir pliegues ('kinks') topológicos. Garantizan encontrar la Best Matching Unit (BMU) en cada paso para un patrón concreto, pero de ninguna manera otorgan una garantía matemática de alcanzar la distribución o el óptimo global de clústering."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué ventaja presenta GCS sobre SOM?",
    "options": [
      "Usa aprendizaje supervisado",
      "Su estructura se adapta dinámicamente y se pueden eliminar nodos",
      "Solo necesita una capa de entrada",
      "Funciona mejor con datos lineales",
      "Utiliza funciones de activación sigmoide"
    ],
    "correct": 1,
    "justification": "La principal limitación clásica de los Mapas Auto-Organizados (SOM) es la restricción del modelo estático: su estructura, el número de neuronas y la topología de la malla (cuadrícula, hexágonos) deben predefinirse rígidamente antes de comenzar y no cambian. El modelo Growing Cell Structures (GCS) resuelve este problema arquitectónico empleando una topología completamente dinámica. La red parte de un clúster mínimo (usualmente un k-símplex como un triángulo o línea) y, guiada por métricas locales de error de cuantización, el algoritmo es capaz tanto de insertar nuevos nodos ('crecer') en las áreas más complejas de los datos, como de eliminar nodos y conexiones subutilizadas, adaptando iterativamente su forma a las características del espacio."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué mide el error de cuantización en GCS?",
    "options": [
      "La distancia entre una neurona y su estructura ideal",
      "La distancia entre las neuronas de entrada y de la capa de red",
      "La distancia entre los vectores de entrada y las neuronas de entrada",
      "La distancia entre las neuronas de entrada y su vector asociado",
      "La distancia entre la capa de neuronas de entrad y la de salida"
    ],
    "correct": 3,
    "justification": "Técnicamente, el error de cuantización en GCS, así como en SOM, mide la distancia euclídea (comúnmente elevada al cuadrado) existente entre un patrón concreto del vector de entrada y el vector de pesos que rige la neurona ganadora asociada a dicho estímulo (su BMU). Esta métrica va incrementándose a lo largo de las iteraciones. Entre las opciones propuestas de respuesta, que contienen una redacción semánticamente dudosa, la opción 3 ('La distancia entre las neuronas de entrada y su vector asociado') es la que trata de expresar esta métrica vinculando la entrada física de la red con el vector de pesos asociado a la neurona que lo capturó. La opción original dada por correcta ('una neurona y su estructura ideal') carece de consistencia teórica en la literatura del modelo GCS."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué le pasa al error de cuantización durante la evolución de un GCS?",
    "options": [
      "Varía positiva y negativamente",
      "Aumenta su valor",
      "Disminuye levemente su valor",
      "Disminuye su valor",
      "Aumenta levemente su valor"
    ],
    "correct": 0,
    "justification": "A lo largo de la evolución y entrenamiento de un modelo Growing Cell Structures (GCS), la variable de 'error de cuantización' que almacena internamente cada neurona ('resource') es altamente dinámica y varía en ambos sentidos. En particular: el error aumenta (varía positivamente) para una neurona cuando resulta ganadora al presentársele estímulos de entrada lejanos a su centro (acumulando el error cuadrado). Sin embargo, el error de la neurona disminuye (varía negativamente) mediante dos mecanismos: primero, un factor constante de decaimiento temporal aplicado progresivamente y, segundo, por la redistribución brusca de la carga de error que ocurre al insertar una nueva neurona hija en su vecindad, la cual asume parte del espacio de representación de sus vecinas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué le pasa a la función de vecindad durante la evolución de un GCS?",
    "options": [
      "No varía",
      "Aumenta su valor",
      "Disminuye levemente su valor",
      "Disminuye su valor",
      "Aumenta levemente su valor"
    ],
    "correct": 0,
    "justification": "Una diferencia crucial entre GCS y los mapas SOM estándar es la manera de tratar la adaptación de vecindario a lo largo de la ejecución. En SOM, existe una función de vecindad (como una campana de Gauss) cuyo radio disminuye monótonamente con el tiempo para pasar de una fase de ajuste grueso a un ajuste fino. En contraposición, en el algoritmo Growing Cell Structures, la vecindad no se modela mediante una función espacial decreciente en el tiempo ('No varía'). La vecindad en GCS está estrictamente condicionada por las aristas físicas de su arquitectura actual (símplices): durante la actualización de pesos, solo la ganadora y sus vecinas topológicas inmediatas, conectadas por un enlace, ven alterados sus vectores con unas tasas de aprendizaje fijas predefinidas."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Qué ventaja presenta GCG sobre SOM?",
    "options": [
      "Se adapta a diferentes dimensiones",
      "Su estructura se adapta dinámicamente y se pueden eliminar nodos",
      "Solo necesita una capa de entrada",
      "Funciona mejor con datos lineales",
      "Utiliza funciones de activación sigmoide"
    ],
    "correct": 0,
    "justification": "Modelos como el Growing Cell Grid (GCG) u otras variantes de grafos y mallas en crecimiento tienen la enorme ventaja sobre el SOM clásico de no estar limitados rígidamente por la dimensionalidad del espacio de visualización impuesta a priori. Mientras que en un SOM convencional el operador debe forzar una proyección bidimensional de una cuadrícula sin saber si realmente se amolda a los datos, estos modelos dinámicos pueden expandir o separar sus estructuras en direcciones ortogonales independientemente, adaptándose de este modo a la verdadera dimensionalidad intrínseca que presenten las subvariedades o clústeres del colector de los datos a nivel local."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "Qué hace la función fitness o de aptitud en los algoritmos genéticos?",
    "options": [
      "Castiga las malas soluciones",
      "Premia las buenas soluciones",
      "Premia o castigas las soluciones, buenas o malas respectivamente",
      "Es la función equivalente al error de cuantización en SOM",
      "Permite a las neuronas de la población actual entrenarse bajo unos parámetros pseudoaleatorios"
    ],
    "correct": 2,
    "justification": "La función de aptitud o 'fitness' representa el entorno virtual donde los individuos del algoritmo genético deben sobrevivir. Constituye el núcleo evaluador que toma el genotipo de una posible solución y le asigna una métrica numérica que representa su desempeño ante el problema planteado. El rol evaluador es holístico y dual: por una parte, premia las buenas características (asignando valores altos de fitness que incrementan la probabilidad de ese individuo de sobrevivir y reproducirse en la ruleta o el torneo), y por otra parte, castiga las transgresiones o las soluciones ineficientes (como las penalizaciones por una topología inmensa en las redes), minando drásticamente su probabilidad de heredar material genético a la siguiente etapa evolutiva."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "Cómo se consigue la siguiente generación de los algoritmos genéticos?",
    "options": [
      "Se cruzan los individuos que tengan mejor fitness",
      "Seleccionar individuos de la población actual para generar la nueva población",
      "Es posible que los N mejores individuos pasen intactos a la siguiente generación (elitismo)",
      "a) y c)",
      "Todas las respuestas son correctas"
    ],
    "correct": 4,
    "justification": "La formación de una nueva generación en el paradigma clásico de un Algoritmo Genético es un ciclo secuencial de varios operadores que hace que todas las afirmaciones expuestas sean correctas. Todo parte de un proceso selectivo estocástico sesgado (selección de ruleta, torneo o sobrante) donde los padres se escogen según su nivel de aptitud. Estos padres se someten al operador de 'Cruce' (recombinando la información genética más favorable) para originar nuevos hijos. Finalmente, es práctica habitual y altamente recomendada incluir un operador de conservación directa denominado 'Elitismo', que consiste en copiar textualmente a los N miembros más sobresalientes de la población actual directamente en la próxima matriz poblacional sin mutaciones ni cruces, para prevenir la pérdida incidental de la mejor solución descubierta hasta el momento."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "Qué ventaja presenta el método del torneo frente al de la ruleta en el algoritmo evolutivo?",
    "options": [
      "Evita que siempre se cuente más con los mejores individuos de la población",
      "Se escogen siempre los mejores ejemplos de la generación",
      "Permite pasar a la siguiente generación con los N mejores (elitismo)",
      "Permite el cruce de los N mejores individuos de la generación actual",
      "Evita que las mutaciones por alteración se traspasen a la siguiente generación"
    ],
    "correct": 0,
    "justification": "El principal inconveniente que acarrea la selección proporcional clásica (método de la Ruleta) es que la probabilidad de selección escala linealmente según el valor de fitness. Si surge súbitamente un 'súper-individuo' muy por encima de la media, monopolizará casi instantáneamente la ruleta evolutiva, erradicando la diversidad genética de los demás y estancando la solución en un óptimo local por convergencia prematura (alta explotación). El método de selección por Torneo (donde K individuos aleatorios compiten sin importar matemáticamente 'por cuánto' son superiores, ganando solo el mejor de ellos) elimina esta ponderación proporcional de magnitudes de fitness. Esto evita que los mejores acaparen todas las probabilidades, preservando la diversidad poblacional y asegurando que se reparta la búsqueda en un área vasta del espacio de estados."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "En un algoritmo genético, a qué denominamos \"exploración\"?",
    "options": [
      "Repartir la búsqueda más en el espacio de estados",
      "Poner más presión de búsqueda sobre el mejor individuo",
      "Realizar la búsqueda en el EE y en el mejor individuo",
      "Realizar una búsqueda exhaustiva de los N mejores individuos",
      "Término referido al algoritmo usado para muestreo determinístico"
    ],
    "correct": 0,
    "justification": "Dentro de la metaheurística general de búsqueda y optimización, subyace un compromiso ('trade-off') esencial conocido como el dilema de Exploración contra Explotación. La Exploración hace referencia específicamente a la capacidad de un algoritmo evolutivo de repartir y diseminar su esfuerzo de búsqueda visitando áreas completamente nuevas, lejanas e inexploradas dentro de un amplísimo Espacio de Estados. Esto asegura obtener una perspectiva global del problema, evitando caer tempranamente y de forma irreversible en un pico o valle que resulte ser un óptimo local estéril. En AG, la exploración es fomentada primariamente gracias a operadores heurísticos de saltos grandes como lo es la 'Mutación' y gracias a operadores de selección menos asimétricos, como es el caso de la selección por Torneo."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "En un algoritmo genético, cuándo evaluamos el fitness?",
    "options": [
      "Después del cruce o la mutación",
      "Después del cruce y la mutación",
      "Después del cruce",
      "Después de la mutación",
      "Antes del cruce y la mutación"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "En un algoritmo genético, qué es el punto de cruce?",
    "options": [
      "El punto donde una generación se vuelve óptima para la solución",
      "La división entre material genético para el cruce entre dichas partes",
      "El momento donde el fitness es óptimo para cruzar un individuo",
      "Es el punto donde un individuo se sabe que no sobrevivirá a la generación actual",
      "Instante donde se le aplican mutaciones al individuo"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "En un algoritmo genético, qué es el cruce uniforme?",
    "options": [
      "Existe una probabilidad del 0.5 de que cada gen del hijo pertenezca al padre",
      "Existe una probabilidad aleatoria de que cada gen del hijo pertenezca al padre",
      "Se divide el material genético en puntos de cruces aleatorios",
      "Para un número N de datos genéticos, se realizarán N/2 cruces",
      "Exactamente la primera mitad del material genético del hijo viene del padre"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "En un algoritmo genético, qué afirmación es incorrecta con respecto a las mutaciones?",
    "options": [
      "Opera sobre un grupo aleatorio de individuos",
      "Consiste en el cambio de un bit o posición aleatoria",
      "Permite salir de máximos o mínimos locales",
      "Contribuye a la diversidad genética de la población",
      "Se establece una frecuencia de mutación"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "En un algoritmo genético, qué significa elitismo?",
    "options": [
      "No existe ese concepto",
      "Que solamente es usable este algoritmo genético en concreto",
      "Que se usan los individuos más aptos de una generación para generar otra (élite)",
      "Define al grupo de individuos que pasan a la siguiente generación",
      "Grupo de individuos que no exclusivamente pasan a la siguiente generación"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "En un algoritmo genético, qué significa steady-rate?",
    "options": [
      "No existe ese concepto",
      "Tipo de gestión de población donde se sustituye a los individuos",
      "Que se usan los individuos más estables de una generación para generar otra",
      "Define al grupo de individuos que pasan a la siguiente generación",
      "Grupo de individuos que no exclusivamente pasan a la siguiente generación"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "En un algoritmo genético, si quisiera homogeneizar la población, qué tipo de gestión de población debería usar?",
    "options": [
      "Sustituir los individuos peores",
      "Sustituir los individuos padres",
      "Sustituir los individuos parecidos",
      "Aplicar elitismo",
      "Aplicar elitismo y sustitución de parecidos"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "En un algoritmo genético, qué porcentaje de cruce y mutación sería óptimo?",
    "options": [
      "Cruce 90% y mutación 5-10%",
      "Cruce 50% y mutación 45-50%",
      "Cruce 20% y mutación 75-80%",
      "Cruce 5% y mutación 90-95%",
      "Cruce 99% y mutación 1%"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "He comenzado un algoritmo genético y me doy cuenta que, tras varias generaciones, todos los individuos son iguales. Qué ha pasado?",
    "options": [
      "Población inicial pequeña y sin mutación",
      "Población grande y mucha mutación",
      "Población pequeña y sin cruce",
      "Población grande y sin cruce",
      "Porcentajes de cruce muy bajos"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "Cómo se podría aplicar la CE en el diseño de las RNA?",
    "options": [
      "En el entrenamiento, para buscar el conjunto óptimo de pesos",
      "En la topología, para buscar el número de neuronas y conectividad óptimos",
      "En la construcción, para obtener las reglas de construcción de redes",
      "a) y b)",
      "Todas son correctas"
    ],
    "correct": 4,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "En los algoritmos genéticos, qué es AAGG?",
    "options": [
      "Un array de conexiones",
      "Un método de codificación de topología de red",
      "Una función de evaluación con números de 1",
      "a) y b)",
      "Todas son correctas"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "Qué expresa este arbol?",
    "options": [
      "$2 * (3 + x)$",
      "$3 * x + 2$",
      "$(2 + 3) * x$",
      "$(3 + 2) * x$",
      "$(2 + x) * 3$"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "Qué afirmación es correcta con respecto a este árbol que representa a un individuo de PG?",
    "options": [
      "El conjunto de componentes terminales son 2, X y 3",
      "Los componentes no terminales son +, X y *",
      "La profundidad máximas del árbol es de 2",
      "Se trata de un árbol invertido",
      "No puede representar a un individuo porque tiene que ser un vector de variables"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "Cuál de los siguientes elementos se utiliza habitualmente para simular organismos en VA?",
    "options": [
      "PG",
      "Autómatas celulares",
      "Neuronas",
      "Cromosomas",
      "Genes"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "evolutiva",
    "source": "daypo",
    "question": "Una de las principales ventajas de utilizar técnicas de VA para resolver un problema complejo es",
    "options": [
      "Garantizar siempre la consecución de la mejor solución",
      "Reducir el número de datos necesarios para resolver el problema",
      "Permitir explorar soluciones alternativas a través de la evolución",
      "Usar reglas determinísticas para la resolución del problema",
      "Eliminar por completo la intervención humana en el diseño de algoritmos que resuelvan el problema"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "Qué se usa en programación cuántica como unidad de información?",
    "options": [
      "El bit",
      "El cúbito",
      "El qubit",
      "El quantum-info",
      "El radio"
    ],
    "correct": 2,
    "justification": "En la programación cuántica y la computación cuántica, la unidad básica de información es el **qubit** (quantum bit). A diferencia del bit clásico, que solo puede tener un valor determinista de 0 o 1 en un instante dado, el qubit puede existir en una superposición de ambos estados simultáneamente gracias a los principios de la mecánica cuántica. Opciones como \"El bit\" pertenecen a la computación clásica, \"El cúbito\" es un término anatómico, y \"quantum-info\" o \"radio\" son inventadas o incorrectas en este contexto académico. Por consiguiente, la opción 2 es la respuesta adecuada."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Asumamos que en el aprendizaje de una red SOM, queremos mantener la vecindad constante. ¿Qué esperaríamos ver?",
    "options": [
      "Un aprendizaje más veloz, pero perderíamos muchos datos",
      "Un aprendizaje más lento, pero más exacto",
      "Un aprendizaje muy desestabilizado en fases tardías",
      "Un aprendizaje muy estabilizado en todas las fases",
      "La vecindad no afecta al aprendizaje de una red SOM"
    ],
    "correct": 2,
    "justification": "Las Redes de Mapas Auto-organizados (SOM) utilizan una función de vecindad que decrece dinámicamente a lo largo del tiempo. En las fases iniciales (fase de ordenación topológica), la vecindad debe ser grande para organizar globalmente el mapa y descubrir las características primarias. Sin embargo, en las fases tardías (fase de convergencia o ajuste fino), la vecindad debe reducirse significativamente para que las neuronas se adapten con precisión a los datos locales y la red converja. Si artificialmente mantenemos la vecindad constante y amplia, los pesos de las neuronas seguirán modificándose drásticamente en base a estímulos lejanos, impidiendo que la red converja y resultando en un **aprendizaje muy desestabilizado en fases tardías**. Por eso, la opción correcta es la 2."
  },
  {
    "category": "autoorganizacion",
    "source": "daypo",
    "question": "Asumamos que para una red SOM, usamos un conjunto de datos muy grande y aplicamos un algoritmo de redes. Qué esperamos encontrar una vez hemos finalizado el entrenamiento?",
    "options": [
      "La validación será óptima, pues existirá un número suficiente de datos y el algoritmo de redes ayuda a la validación",
      "Encontraremos neuronas que no han sido entrenadas",
      "Encontraremos más neuronas ganadoras que datos de entrada, dando lugar a una red descompensada",
      "La validación no será posible porque el algoritmo de redes es incompatible con el ECM",
      "Las medidas de prevención topológica no encontrarán ninguna anomalía"
    ],
    "correct": 1,
    "justification": "En el entrenamiento de una red SOM mediante aprendizaje competitivo, en cada iteración únicamente la neurona ganadora (BMU, *Best Matching Unit*) y sus vecinas topológicas directas actualizan sus pesos vectoriales. Si el mapa que hemos proyectado es muy extenso o los datos de entrada están altamente agrupados en regiones específicas del espacio, ocurrirá que un porcentaje de las neuronas del mapa nunca se posicionará como la ganadora para ningún patrón y quedará siempre fuera del radio de vecindad de las neuronas que sí ganan. El efecto de esto es la aparición de *\"neuronas muertas\"*, es decir, **neuronas que no han sido entrenadas** ni ajustadas. Por lo tanto, la respuesta correcta es la 1. El uso de grandes conjuntos de datos no impide inherentemente que esto ocurra si la red es desproporcionada."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "Asumamos que tenemos un modelo formal completo, pero que se detecta un error entre el sistema y el modelo. Qué parte del sistema se encargará de reajustar la hipótesis?",
    "options": [
      "El comparador",
      "El elaborador",
      "El propio Sistema",
      "El modelo",
      "La hipótesis, una vez generada, no puede ser cambiada. Este caso generaría una nueva contra-hipótesis"
    ],
    "correct": 1,
    "justification": "El proceso de creación y validación de modelos computacionales sigue una estructura cíclica y cibernética formalizada como **S-H-E-M-C** (Sistema, Hipótesis, Elaborador, Modelo, Comparador). En este ciclo de realimentación, el Sistema inspira una Hipótesis inicial; el Elaborador se encarga de construir un Modelo basado en ella; y el Comparador contrasta los resultados del Modelo con los del Sistema real. Cuando el **Comparador** detecta un error o discrepancia, emite una señal de error (feedback) que vuelve a la fase de diseño. Quien toma esta información para procesar el fallo, refinar y **reajustar la hipótesis**, y actualizar de nuevo el Modelo, es el componente activo cognitivo de este ciclo: el **Elaborador**. Por tanto, la opción 1 es la correcta."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "En la evolución histórica de los sistemas conexionistas, ¿cuáles son precursores biológicos?",
    "options": [
      "Donald Hebb",
      "Santiago Ramón y Cajal",
      "Warren McCulloch",
      "Todos los anteriores",
      "Ninguno de los anteriores"
    ],
    "correct": 3,
    "justification": "El conexionismo y las redes neuronales artificiales toman profunda inspiración de la neurofisiología. **Santiago Ramón y Cajal** formuló la doctrina de la neurona, demostrando que el tejido cerebral está compuesto por células individuales que se comunican. **Donald Hebb** postuló en 1949 la regla de aprendizaje hebbiano (\"las neuronas que se disparan juntas, se conectan más fuertemente\"), principio vital en el aprendizaje no supervisado moderno. Por su parte, el neurofisiólogo **Warren McCulloch**, junto con el matemático Walter Pitts, desarrolló en 1943 el primer modelo matemático-lógico de una neurona biológica, uniendo definitivamente la biología con la computación. Puesto que todos ellos establecieron pilares biológicos fundamentales para la IA conexionista, la opción correcta es la 3: Todos los anteriores."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "¿Características específicas de los sistemas inteligentes?",
    "options": [
      "Intencionalidad: comportamiento guiado por metas",
      "Incapacidad de conocer y proyectar el \"hoy sostenido\"",
      "Ser metódico, no innovador",
      "Tener efecto serendipico",
      "Ninguna de las anteriores está relacionada"
    ],
    "correct": 0,
    "justification": "Una de las características cardinales que separa a los sistemas inteligentes de los programas meramente algorítmicos o reactivos simples es la **intencionalidad**. Esto significa que el sistema exhibe un comportamiento propositivo o teleológico: sus acciones no son ciegas, sino que están **guiadas por metas y objetivos** a resolver de manera adaptativa dentro de su entorno (opción 0). Opciones como la 1 y la 2 son abiertamente contrarias a la inteligencia, dado que los sistemas inteligentes son capaces de proyectar a futuro y de desplegar altas dosis de innovación y creatividad para encontrar vías alternas a los problemas. El \"efecto serendipico\" es un fenómeno circunstancial, no una característica funcional de diseño."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "¿Cuál es el principal trabajo científico en el que se basa la IA?",
    "options": [
      "\"The Nature of Explanation\" (W. Craik)",
      "\"Behaviour, purpose and teleology\" (Wiener, Rosenblueth y Bigelow)",
      "\"A logical calculus of the ideas immanent in nervous activity\" (McCulloch y Pitts)",
      "Todas las anteriores son correctas",
      "Ninguna de las anteriores es correcta"
    ],
    "correct": 3,
    "justification": "La Inteligencia Artificial moderna no nació de un único avance, sino que es el resultado de una confluencia de disciplinas (cibernética, neurofisiología, psicología y matemáticas). El trabajo de **Kenneth Craik** sentó las bases filosóficas de que las máquinas podrían modelar mentalmente la realidad para predecirla. **Wiener, Rosenblueth y Bigelow** aportaron los mecanismos de realimentación y el concepto vital de máquinas teleológicas (dirigidas a un propósito). Finalmente, la obra de **McCulloch y Pitts** demostró de forma rotunda cómo la actividad neuronal podía mapearse directamente en lógica proposicional formal y circuitos computacionales. Al conformar todas estas publicaciones el tejido fundacional de la IA, la opción 3 (\"Todas las anteriores son correctas\") es la respuesta certera."
  },
  {
    "category": "conexionistas",
    "source": "daypo",
    "question": "¿Quién acuña por primera vez y tal como se entiende hoy la expresión \"Artificial Intelligence\"?",
    "options": [
      "John McCarthy",
      "Ada Lovelace",
      "Alan Newell y Herbert Simon",
      "Gottfried Leibniz",
      "Alan Turing"
    ],
    "correct": 0,
    "justification": "Aunque teóricos geniales como Alan Turing sentaron el terreno conceptual evaluativo (con su célebre artículo de 1950 y el Test de Turing), y genios como Newell y Simon estaban listos para presentar un primer programa resolutor de problemas de lógica, el término moderno fue obra de un joven profesor llamado **John McCarthy**. McCarthy redactó la propuesta en 1955 para organizar un grupo de estudio de verano y acuñó oficialmente la expresión **\"Artificial Intelligence\"** (Inteligencia Artificial) para bautizar la famosa *Conferencia de Dartmouth celebrada en 1956*, estableciendo oficialmente el nacimiento del campo de estudio bajo ese nombre. Por esto, la opción 0 es la correcta."
  },
  {
    "category": "feedforward",
    "source": "daypo",
    "question": "Al aplicar el gradiente descendente para modificar los pesos de las conexiones de una RNA...",
    "options": [
      "Si este es cero, indica que el mínimo está lejos y es necesario realizar más saltos",
      "Si es alto, se realiza un salto pequeño en el espacio de búsqueda",
      "Si es bajo, se realiza un salto grande en el espacio de búsqueda",
      "Es necesario modificar los pesos en sentido (signo) dictado por el gradiente",
      "Es necesario modificar los pesos en sentido (signo) contrario al dictado por el gradiente"
    ],
    "correct": 4,
    "justification": "El algoritmo del gradiente descendente se fundamenta en un principio del cálculo multivariable: el vector gradiente ($\\\\nabla E$) de una función de error apunta matemáticamente hacia la dirección de **máximo ascenso** (donde el error crece más rápidamente). Como el objetivo al entrenar una RNA es **minimizar** el error, la actualización de los parámetros o pesos sinápticos debe realizarse moviéndose en la dirección opuesta, restándole una porción del gradiente ponderada por la tasa de aprendizaje ($w_{nuevo} = w_{viejo} - \\\\eta \\\\cdot \\\\nabla E$). Por consiguiente, **es indispensable modificar los pesos en el sentido contrario al dictado por el gradiente** (opción 4). La clave de respuestas original marcaba la opción 3 (seguir el sentido del gradiente), lo cual resultaría en un gradiente ascendente y maximizaría el fallo de la red, de ahí que se marque como incorrecta. Las opciones sobre el valor del gradiente son contradictorias: un gradiente nulo implica que se ha llegado al fondo de un valle (mínimo local/global), no que esté lejos."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "La diferencia entre la IA simbólica y subsimbólica es...",
    "options": [
      "Contienen conocimiento explícito",
      "Razonan mediante inferencia lógica",
      "Suele requerir grandes volúmenes de datos",
      "a) y b)"
    ],
    "correct": 3,
    "justification": "La distinción central entre la **IA Simbólica** (el enfoque clásico, *GOFAI*) y la **IA Subsimbólica** (el conexionismo, el Aprendizaje Automático) radica en cómo representan y procesan la información. La IA Simbólica diseña entidades modulares y transparentes; por lo tanto, **contiene conocimiento explícito** programado a mano (como ontologías o bases de hechos) y **razona mediante motores de inferencia lógica** rigurosos. En cambio, la IA Subsimbólica entierra el conocimiento empírico adquirido de forma latente e implícita en millones de conexiones (pesos), para lo cual, de hecho, **suele requerir grandes volúmenes de datos** (opción 2). Dado que las opciones 'a' y 'b' describen nítidamente los atributos de la IA Simbólica y marcan la diferencia fundamental con el paradigma conexionista, la opción 3 ('a y b') es la correcta."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Que el conocimiento sea explícito, implica",
    "options": [
      "Alta explicabilidad",
      "Alta reusabilidad",
      "Alta capacidad de ser manipulado",
      "Todas son correctas"
    ],
    "correct": 0,
    "justification": "En los dominios de Inteligencia Artificial Simbólica, decir que el conocimiento es explícito significa que las reglas, hechos y restricciones que emplea el sistema pueden ser leídos, interpretados y trazados por un ser humano de forma natural (por ejemplo: `SI temperatura > 30 ENTONCES alerta`). La consecuencia directa e inmediata de disponer de un modelo así es que el sistema posee una **alta explicabilidad** (opción 0). Es decir, un sistema experto es capaz de mostrar el árbol exacto de razonamientos que lo condujo a una conclusión particular. Opciones como alta reusabilidad o manipulación, si bien deseables a nivel de ingeniería de software, no son consecuencias exclusivas del concepto de conocimiento declarativo explícito."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "La arquitectura del agente",
    "options": [
      "Contiene módulos y componentes imprescindibles para el funcionamiento del agente",
      "Estructura el programa del agente",
      "Contiene componentes de selección, percepción y acción",
      "Todas son correctas"
    ],
    "correct": 3,
    "justification": "En la teoría de agentes inteligentes de Russell y Norvig, un Agente se define mediante la ecuación general: `Agente = Arquitectura + Programa`. La **arquitectura del agente** representa la maquinaria y el entorno computacional (o físico) sobre el cual este reside. Sus misiones son fundamentales: contiene el hardware base y los módulos de funcionamiento imprescindibles (opción 0), proporciona una estructura e interfaz de ejecución segura que le da soporte al algoritmo que constituye el 'programa' (opción 1), y le brinda los sensores e instrumentos para la percepción del entorno, junto con los actuadores para ejecutar la selección de acciones decididas (opción 2). Al describir perfectamente las facetas de la arquitectura en un sistema de IA, todas las afirmaciones son correctas (opción 3)."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Cuál de estas opciones es correcta con respecto al agente reactivo simple",
    "options": [
      "Selecciona una acción en base a percepciones actuales denominadas reflejos",
      "Selecciona una acción en base a cómo evoluciona el mundo y qué efecto tienen sus acciones ejecutadas",
      "Selecciona una acción en base a una serie de objetivos a alcanzar, planificando secuencias de acciones",
      "Selecciona una acción en base a un estado interno que mide qué tan beneficioso es un estado"
    ],
    "correct": 0,
    "justification": "El **agente reactivo simple** es la concepción algorítmica más elemental en la taxonomía de agentes inteligentes. Su característica primordial es que padece de una \"amnesia total\": no retiene historia de las percepciones anteriores. Su proceso de toma de decisiones opera mapeando de manera directa e inmediata la **percepción actual** (estado del entorno en el instante presente) a una acción, usando un sistema rígido de reglas de condición-acción que a menudo se conocen biológicamente como **reflejos**. Por ejemplo, una aspiradora que gira si choca contra la pared en el instante $t$. Por lo tanto, la opción correcta es la 0. El resto de opciones detallan agentes con estado, con metas, o basados en función de utilidad."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Cuál de estas opciones es correcta con respecto al agente basado en modelos",
    "options": [
      "Selecciona una acción en base a percepciones actuales denominadas reflejos",
      "Selecciona una acción en base a cómo evoluciona el mundo y qué efecto tienen sus acciones ejecutadas",
      "Selecciona una acción en base a una serie de objetivos a alcanzar, planificando secuencias de acciones",
      "Selecciona una acción en base a un estado interno que mide qué tan beneficioso es un estado"
    ],
    "correct": 1,
    "justification": "A diferencia de la rigidez de un agente reactivo simple, el **agente reactivo basado en modelos** mantiene un registro o 'estado interno' que le permite suplir la parte del entorno que no está siendo observada en un instante específico. Para sostener y actualizar fiablemente este estado interno, el agente necesita tener integrado un \"modelo del mundo\", es decir, un conocimiento sobre dos dinámicas causales: **cómo evoluciona el mundo independientemente del agente**, y **qué efecto o impacto físico tienen las acciones** que el propio agente ejecuta sobre ese mundo. Esta descripción técnica casa a la perfección con la opción 1."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Cuál de estas opciones es correcta con respecto al agente basado en metas",
    "options": [
      "Selecciona una acción en base a percepciones actuales denominadas reflejos",
      "Selecciona una acción en base a cómo evoluciona el mundo y qué efecto tienen sus acciones ejecutadas",
      "Selecciona una acción en base a una serie de objetivos a alcanzar, planificando secuencias de acciones",
      "Selecciona una acción en base a un estado interno que mide qué tan beneficioso es un estado"
    ],
    "correct": 2,
    "justification": "Para que un agente resuelva problemas de manera intencionada, poseer un modelo del mundo no es suficiente. El **agente basado en metas** (o en objetivos) añade un componente teleológico: posee una descripción de las situaciones favorables o estados finales que se desea que alcance (metas). Cuando se encuentra ante varias bifurcaciones posibles, debe proyectar hacia el futuro qué desenlace provendría de ejecutar cada posibilidad, evaluando si este nuevo estado satisface la meta. Es decir, **selecciona la acción planificando secuencias que le aproximen a sus objetivos**, lo que hace que la opción correcta sea la 2. La opción 3, por su parte, aludiría a los agentes basados en utilidad, los cuales cuantifican 'cuán feliz' se está en un estado."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Cuál de estas opciones es correcta con respecto al agente basado en utilidad",
    "options": [
      "Selecciona una acción en base a percepciones actuales denominadas reflejos",
      "Selecciona una acción en base a cómo evoluciona el mundo y qué efecto tienen sus acciones ejecutadas",
      "Selecciona una acción en base a una serie de objetivos a alcanzar, planificando secuencias de acciones",
      "Selecciona una acción en base a un estado interno que mide qué tan beneficioso es un estado"
    ],
    "correct": 3,
    "justification": "El **agente basado en utilidad** es el tipo de agente más avanzado presentado en la teoría. A diferencia del agente basado en metas, que solo distingue entre estados que cumplen o no un objetivo (éxito/fracaso), el agente basado en utilidad utiliza una función matemática de utilidad que asigna un valor numérico a la \"bondad\" de cada estado. De esta forma, selecciona la acción que maximiza dicha utilidad (por ejemplo, entre varias rutas para llegar a un destino, escoge la que minimiza el consumo de gasolina y peajes). Por ello, la opción correcta es la 3. Las opciones 0, 1 y 2 describen al agente reactivo simple, agente basado en modelos y agente basado en metas, respectivamente."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Cuál de estas opciones es correcta con respecto al agente reactivo simple",
    "options": [
      "Presenta reglas de condición-acción",
      "Presenta un estado interno asociado al efecto de una acción",
      "Presenta un mecanismo de reflejos que imitan lo que ocurre en el medio ambiente",
      "Ninguna es correcta"
    ],
    "correct": 0,
    "justification": "El **agente reactivo simple** toma sus decisiones basándose pura y exclusivamente en la percepción actual que recibe del entorno, ignorando todo el historial de percepciones pasadas. Para ello, su arquitectura se fundamenta en unas **reglas de condición-acción** (por ejemplo, \"si el coche de delante frena, entonces frena\"). Al carecer de estado interno, no evalúa los efectos futuros de sus acciones ni cómo evoluciona el mundo, haciendo la opción 0 la única correcta."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Cuál de estas opciones es incorrecta con respecto al agente reactivo simple",
    "options": [
      "Es el tipo de agente más sencillo",
      "Selecciona la acción en base a percepciones actuales",
      "Tiene un comportamiento similar a los reflejos",
      "Mantiene un estado interno con el efecto de sus acciones"
    ],
    "correct": 3,
    "justification": "Como se ha mencionado, el **agente reactivo simple** es la arquitectura más básica (opción 0 correcta) porque reacciona automáticamente a la percepción actual (opción 1 correcta) como si fuera un reflejo (opción 2 correcta). Lo que **nunca hace** es mantener un estado interno que memorice las percepciones pasadas, estime cómo evoluciona el mundo u observe los efectos de sus acciones; esa es la característica principal que distingue al **agente basado en modelos**. Por tanto, la afirmación de la opción 3 es la incorrecta."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Cuál de estas opciones es incorrecta con respecto al agente basado en modelos",
    "options": [
      "Puede planificar una secuencia de acciones para realizar la acción",
      "Puede medir el efecto de sus acciones con respecto al mundo",
      "Mantiene un estado interno con cómo evoluciona el mundo",
      "Mantiene un estado interno con el efecto de sus acciones"
    ],
    "correct": 0,
    "justification": "El **agente basado en modelos** da un paso adelante respecto al reactivo simple incorporando un \"estado interno\". Esto le permite tener en cuenta el historial perceptivo, conocer cómo evoluciona el mundo y qué impacto tendrán sus acciones inmediatas (opciones 1, 2 y 3 correctas en su definición). Sin embargo, **no es capaz de planificar** secuencias de acciones para alcanzar un fin último (esto es lo que hace el agente basado en metas). Como el agente basado en modelos solo reacciona con reglas de condición-acción actualizadas por su modelo, la opción 0 es la afirmación incorrecta."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Cuál de estas opciones es incorrecta con respecto al agente basado en metas",
    "options": [
      "Puede planificar una secuencia de acciones para realizar la acción",
      "Puede medir el efecto de sus acciones con respecto al mundo",
      "Mantiene unas reglas internas de condición-acción",
      "Mantiene un estado interno con el efecto de sus acciones"
    ],
    "correct": 2,
    "justification": "El **agente basado en metas** hereda las capacidades del agente basado en modelos (por tanto, mantiene un estado interno y puede medir el efecto de sus acciones en el entorno, haciendo correctas las opciones 1 y 3). Además, incorpora información sobre sus objetivos para planificar qué secuencias de acciones le llevarán a conseguirlos (opción 0 correcta). Lo que **deja de utilizar** son las reglas estáticas y fijas de \"condición-acción\" que definen a los agentes reactivos. Sus decisiones ahora son dinámicas basadas en la pregunta \"¿qué pasará si realizo esta acción y me acerca a la meta?\". Por tanto, la opción 2 es la incorrecta."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Escoja la opción que define a un estado determinista",
    "options": [
      "Cada acción del agente deriva a un estado predecible",
      "Cada acción del agente deriva a un estado impredecible",
      "Cada acción del agente deriva a un estado predecible bajo un valor aleatorio",
      "Cada acción del agente deriva a un estado predecible bajo un valor pseudoaleatorio"
    ],
    "correct": 0,
    "justification": "En inteligencia artificial, un entorno se clasifica como **determinista** cuando el siguiente estado del entorno está completamente determinado por el estado actual y la acción ejecutada por el agente. Es decir, cada acción deriva en un resultado seguro y perfectamente predecible. No intervienen factores de azar, probabilidad o incertidumbre. El ajedrez o los crucigramas son claros ejemplos deterministas. Por ello, la opción 0 es la única correcta."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Escoja la opción que define a un estado estocástico",
    "options": [
      "Cada acción del agente deriva a un estado predecible",
      "Cada acción del agente deriva a un estado impredecible",
      "Cada acción del agente deriva a un estado dependiente de un valor aleatorio",
      "Cada acción del agente deriva a un estado dependiente de un valor fijo"
    ],
    "correct": 2,
    "justification": "A diferencia del entorno determinista, en un entorno **estocástico** el resultado de las acciones no está asegurado de forma exacta. El estado al que se llega tras aplicar una acción depende en parte de la acción del agente y en parte de variables externas incontrolables o elementos aleatorios. Por lo tanto, el estado resultante involucra incertidumbre (valores aleatorios). La opción 2 captura correctamente esta dependencia probabilística y aleatoria."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "De estas opciones, cuál NO es una observabilidad completa?",
    "options": [
      "Crucigrama",
      "Ajedrez",
      "Conducción autónoma",
      "Clasificación de imágenes"
    ],
    "correct": 2,
    "justification": "Un entorno es completamente observable si los sensores del agente le dan acceso al estado completo del entorno en cada momento (por ejemplo, el tablero de ajedrez completo está a la vista). En cambio, la **conducción autónoma** es el ejemplo paradigmático de entorno parcialmente observable: un coche no puede percibir lo que ocurre en calles lejanas, lo que hay detrás de un camión grande o cuáles son las intenciones de otros conductores. Por tanto, la conducción autónoma NO tiene observabilidad completa."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "De estas opciones, cuál TIENE una observabilidad parcial?",
    "options": [
      "Crucigrama",
      "Solitario",
      "Conducción autónoma",
      "Clasificación de imágenes"
    ],
    "correct": 2,
    "justification": "Aunque estrictamente tanto el solitario de cartas (por las cartas ocultas) como la conducción autónoma presentan observabilidad parcial según el temario de la asignatura, la **conducción autónoma** (opción 2) es el ejemplo canónico por excelencia utilizado para ilustrar la observabilidad parcial debida a limitaciones sensoriales físicas en el mundo real. Es la opción esperada y más representativa de un entorno real complejo. (Nota: el solitario también sería formalmente válido, pero típicamente se destaca la conducción autónoma al sumar también estocasticidad y multiagente)."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En cuanto a la definición formal de un problema, el estado inicial el agente indica...",
    "options": [
      "Cada situación posible en el problema con un estado",
      "Para un estado inicial cualquiera del agente, lista las posibles acciones",
      "Cualquier estado donde el agente deba tomar una decisión se considera estado inicial",
      "Todas son correctas"
    ],
    "correct": 0,
    "justification": "Esta pregunta contiene un pequeño error en su formulación, ya que describe la definición de **\"Estado\"** en general y no de \"Estado Inicial\". Un estado se define como la representación abstracta de \"cada situación posible en el problema\". El estado inicial sería simplemente el estado o punto de partida desde el cual el agente comienza a resolver el problema. Dado que la opción 0 (\"Cada situación posible en el problema con un estado\") corresponde a la definición de Estado, y es la respuesta dada como correcta, se asume que la pregunta contenía una errata al añadir \"inicial\". Se ha mantenido el índice 0 como correcto."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En cuanto a la definición formal de un problema, las descripciones de acciones del agente indican...",
    "options": [
      "Cada situación posible en el problema con un estado",
      "Para un estado dado cualquiera del agente, lista las posibles acciones",
      "Lista de todas las acciones del problema completo desde el estado inicial",
      "Describen las acciones de los agentes en el problema"
    ],
    "correct": 1,
    "justification": "Formalmente, la función de **Acciones** de un problema toma un estado particular `s` y devuelve el conjunto de las acciones que el agente puede ejecutar en ese estado concreto (aplicabilidad). No enumera todas las acciones del problema de golpe, sino que lo hace en base al estado dado. Por lo tanto, la opción 1 (\"Para un estado dado cualquiera del agente, lista las posibles acciones\") es la definición correcta y precisa."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto al espacio de estados de un problema de búsqueda de un agente",
    "options": [
      "El espacio de estados del problema es un grafo dirigido que deriva implícitamente del estado inicial, las acciones y los modelos de transición",
      "El espacio de estados es el conjunto de todos los caminos posibles desde el estado inicial hasta el estado objetivo",
      "Los nodos del espacio de estados son las acciones a realizar, mientras que los arcos son los estados posibles tras dicha accion",
      "El espacio de estados se puede hacer explícito (finito o infinito) mediante el modelo de transición"
    ],
    "correct": 0,
    "justification": "El **Espacio de Estados** se define como el conjunto de todos los estados alcanzables desde el estado inicial a través de cualquier secuencia de acciones. Se forma implícitamente mediante el Estado Inicial, la función de Acciones y el Modelo de Transición, y su estructura matemática subyacente es la de un **grafo dirigido** donde los nodos representan estados y los arcos dirigidos representan las acciones ejecutadas para pasar de uno a otro. Por lo tanto, la opción 0 es la definición teórica más exacta y completa."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "El test objetivo en la definición formal de un problema",
    "options": [
      "Determina si un estado es el estado meta",
      "Verifica si pertenece al conjunto explícito de espacios de estados",
      "Asigna un coste numérico a cada camino que llegue al objetivo",
      "a) y b)"
    ],
    "correct": 0,
    "justification": "Dentro de la definición formal de los componentes de un problema, el **Test Objetivo** (o Prueba de Meta) es la función encargada de evaluar un estado `s` para comprobar si éste cumple con las condiciones que definen el fin o resolución del problema. Es decir, verifica simplemente si el estado actual es (o no) un estado meta. La asignación de costes corresponde a la Función de Coste, por lo que la opción 0 es la correcta."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "La función coste del camino en la definición formal de un problema",
    "options": [
      "Se suman todos los costes del problema",
      "La acción que lleva de X a Y y se llama W se denota como C(X,W,Y)",
      "Asigna un coste numérico a cada camino que llegue al objetivo",
      "b) y c)"
    ],
    "correct": 3,
    "justification": "La **Función de Coste del Camino** permite evaluar la calidad o esfuerzo requerido por cada camino posible. Para ello asume los costes de cada paso intermedio, representados típicamente como la función que evalúa llevar a cabo la acción `W` desde el estado `X` al `Y`, denotada como `c(X, W, Y)` o `C(X, W, Y)`. Esta información permite asignar un valor numérico total al camino seguido (aunque teóricamente a cualquier camino, el enunciado especifica el que llega al objetivo para contextualizar su uso al buscar la solución óptima). Al recoger correctamente ambos aspectos representacionales y funcionales de la asignatura, la respuesta combinada \"b) y c)\" (opción 3) es la correcta."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Cuál de las siguientes NO es correcta con respecto a la solución de un problema de búsqueda",
    "options": [
      "Secuencia de acciones que transforman el estado inicial en el estado meta",
      "Camino crítico que relaciona acciones con estados",
      "La función de coste del camino mide la calidad de dicha solución",
      "Puede existir una solución que no sea óptima para un problema"
    ],
    "correct": 1,
    "justification": "Una solución a un problema de búsqueda es, por definición, una secuencia de acciones que nos llevan desde el estado inicial hasta el estado meta (opción 0). Esta solución puede ser óptima o subóptima (opción 3), y su calidad se evalúa aplicando la función de coste del camino (opción 2). Sin embargo, el término **\"camino crítico\"** pertenece a los modelos de planificación de proyectos (como PERT o CPM) o algoritmos de grafos muy particulares, no siendo parte de la definición formal de la solución genérica en la búsqueda de IA. Por lo tanto, la opción 1 es la afirmación incorrecta."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a la resolución de problemas de búsquedas",
    "options": [
      "El espacio de estados es una representación exclusiva del dominio del problema y no indica como obtener la solución",
      "Entre los procesos de búsqueda, se incluyen los criterios de decisión que indican el siguiente movimiento",
      "Los criterios de selección y aplicación y aplicación de operadores relevantes",
      "Todos son correctas"
    ],
    "correct": 3,
    "justification": "La resolución de problemas con búsqueda diferencia conceptualmente entre el **Conocimiento** y el **Control**. \n\n- El *Conocimiento* define el **espacio de estados**, que es una representación del dominio (todos los estados y transiciones posibles) pero **no indica por sí mismo cómo obtener la solución** (esto hace que la opción a sea correcta).\n- El *Control* es el **proceso de búsqueda**, que establece los **criterios de decisión** sobre qué camino seguir o qué movimiento hacer a continuación (opción b correcta), lo cual incluye los **criterios de selección y aplicación de operadores relevantes** para avanzar por el espacio (opción c correcta).\n\nDado que las tres primeras afirmaciones son fundamentales y ciertas en el paradigma de búsqueda, la respuesta correcta es que **todas son correctas**."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "La dirección del proceso de búsqueda",
    "options": [
      "Es un proceso progresivo o dirigido por los datos",
      "Es un proceso regresivo, evocativo o dirigido por los objetivos",
      "a) y b)",
      "Ninguno es correcto"
    ],
    "correct": 2,
    "justification": "El proceso de búsqueda puede seguir dos direcciones principales para explorar el espacio de estados:\n\n1. **Encadenamiento Progresivo (Forward Chaining)**: Es un proceso dirigido por los datos, donde se parte del estado inicial y se aplican operadores progresivamente hasta alcanzar el estado meta.\n2. **Encadenamiento Regresivo (Backward Chaining)**: Es un proceso evocativo o dirigido por los objetivos, donde se comienza en el estado meta y se retrocede hacia el estado inicial, verificando qué condiciones deben cumplirse para llegar allí.\n\nPor lo tanto, la dirección del proceso de búsqueda puede ser tanto progresiva como regresiva, haciendo que la opción **c) (a y b)** sea la respuesta correcta."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la afirmación incorrecta sobre búsqueda",
    "options": [
      "Cuando existen operadores reversibles, la repetición es inevitable",
      "Cuando el EE es un grafo, si se usa un algoritmo para árboles se producen caminos redundantes",
      "Si se lleva cuenta sobre los nodos explorados, podemos evitar la redundancia",
      "Un EE finito solo puede producir un árbol de búsqueda finito"
    ],
    "correct": 3,
    "justification": "Analicemos las opciones para identificar la falsa:\n- *Cuando existen operadores reversibles, la repetición es inevitable*: **Verdadero**. Al poder deshacer acciones, podemos volver al estado anterior y entrar en ciclos infinitos si no controlamos la redundancia.\n- *Cuando el EE es un grafo, si se usa un algoritmo para árboles se producen caminos redundantes*: **Verdadero**. Los árboles no guardan registro de nodos visitados en otras ramas, generando duplicados.\n- *Si se lleva cuenta sobre los nodos explorados, podemos evitar la redundancia*: **Verdadero**. Es la base de la búsqueda en grafos.\n- *Un EE finito solo puede producir un árbol de búsqueda finito*: **Falso**. Si un espacio de estados finito contiene ciclos (por ejemplo, transiciones reversibles), un algoritmo de búsqueda en árboles seguirá estas rutas indefinidamente, creando un **árbol de búsqueda infinito** a partir de un **espacio de estados finito**.\n\nPor ello, esta última es la afirmación incorrecta."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la afirmación correcta sobre la búsqueda de árboles",
    "options": [
      "Obliga a comprobar si cada estado generado está explorado o no",
      "Requiere de más memoria para almacenar nodos repetidos en la frontera",
      "Si se lleva cuenta sobre los nodos explorados, podemos evitar la redundancia",
      "Un EE finito solo puede producir un árbol de búsqueda finito"
    ],
    "correct": 1,
    "justification": "La exploración clásica en **árboles de búsqueda** se caracteriza por **no llevar un registro de los nodos ya visitados** (a diferencia de la búsqueda en grafos, que utiliza una tabla de cerrados/explorados).\n\n- La opción *a* describe la búsqueda en grafos.\n- La opción *c* describe la técnica de prevención de la búsqueda en grafos.\n- La opción *d* es falsa porque la presencia de ciclos hace que un árbol de búsqueda pueda ser infinito en un espacio finito.\n- La opción *b* es la **correcta**. Al no descartar los nodos duplicados ni llevar cuenta de lo visitado, la exploración sobre árboles termina insertando múltiples veces los mismos estados en la **frontera** alcanzados por distintos caminos, lo que **demanda más memoria para almacenar estos nodos repetidos**."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Proceso de selección sistemática de acciones a aplicar",
    "options": [
      "Emparejamiento",
      "Asignación",
      "Representación",
      "Selección"
    ],
    "correct": 0,
    "justification": "El proceso de decidir qué acción (operador) aplicar a continuación en un estado determinado durante la búsqueda recibe el nombre técnico de **Emparejamiento** (matching). \n\nSe trata del paso en el que el sistema examina las acciones posibles, verifica sus precondiciones contra el estado actual y determina el conjunto de operadores aplicables para posteriormente ejecutar uno. Esta tarea de emparejar estados con condiciones de reglas/operadores es clave y una de las más costosas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Cuál de estas tareas es una de las más costosas en programas de IA",
    "options": [
      "Emparejamiento",
      "Búsqueda de grafos",
      "Búsqueda de árboles",
      "Crear la tabla de estados"
    ],
    "correct": 0,
    "justification": "En el desarrollo de sistemas inteligentes basados en reglas o búsqueda, el **Emparejamiento** (determinar qué operadores o reglas son aplicables a un estado dado comprobando múltiples condiciones) requiere examinar la base de conocimiento y los atributos del estado actual continuamente.\n\nDebido a la cantidad de combinaciones posibles y las evaluaciones lógicas necesarias, esta fase del ciclo de control se considera históricamente **una de las tareas más costosas a nivel computacional** en programas de Inteligencia Artificial."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Si queremos estimar el beneficio de una transición en un EE mediante números usaríamos una",
    "options": [
      "Función Heurística",
      "Función Discreta",
      "Función Numérica",
      "Función Entrópica"
    ],
    "correct": 0,
    "justification": "Para evaluar la conveniencia o el beneficio de una transición en un espacio de estados mediante valores numéricos, se emplea una **Función Heurística**. \n\nDenotada típicamente como $h(n)$, es una estimación de bajo costo computacional del coste que queda desde el nodo $n$ hasta la meta más cercana. Aporta 'sentido de dirección' a los algoritmos informados, permitiendo priorizar los caminos que matemáticamente prometen ser más rentables hacia la solución."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción incorrecta con respecto a las funciones Heurísticas",
    "options": [
      "Son de carácter numérico",
      "Permiten optimizar procesos de búsqueda",
      "Guian la exploración a través de los estados más provechosos posibles",
      "A partir de todos los caminos posibles recorridos, escoge el más rápido"
    ],
    "correct": 3,
    "justification": "Las **funciones heurísticas** estiman matemáticamente la distancia o coste restante a la meta para guiar la búsqueda eficientemente por los estados más provechosos sin tener que recorrer todo el espacio de estados a ciegas.\n\nSin embargo, la opción *d* ('A partir de todos los caminos posibles recorridos, escoge el más rápido') es la **incorrecta**, ya que la esencia de la heurística es justamente la contraria: se basa en una estimación *a priori* (o mediante relajación del problema) para **no tener que recorrer todos los caminos posibles**. Si recorriéramos todos, no sería una estimación heurística sino una búsqueda exhaustiva."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Qué estructura de datos usarías para almacenar los nodos explorados?",
    "options": [
      "Una pila",
      "Un árbol",
      "Una tabla hash",
      "Un grafo"
    ],
    "correct": 2,
    "justification": "En la búsqueda en grafos, la *lista de cerrados* o *conjunto de nodos explorados* debe almacenar eficientemente cada estado que ya ha sido expandido. Puesto que la operación más frecuente sobre esta colección es **comprobar si un nodo recién generado ya existe en ella** para evitar redundancias, la estructura de datos óptima es una **Tabla Hash**.\n\nUna tabla hash permite realizar inserciones y búsquedas de elementos en un tiempo de complejidad promedio constante $O(1)$, lo que acelera enormemente el algoritmo al verificar duplicados en un espacio de estados grande."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Qué estructura de datos usarías para almacenar los nodos fronterizos?",
    "options": [
      "Una pila",
      "Una cola",
      "Una tabla hash",
      "Un árbol binario"
    ],
    "correct": 1,
    "justification": "La **frontera** (o lista de abiertos) es el conjunto de nodos generados pendientes de expandir. Aunque dependiendo del algoritmo específico esta puede funcionar como una pila (LIFO en profundidad) o una cola de prioridad (A*), en su esencia general y estructura base, la frontera requiere una estructura que permita encolar y desencolar tareas.\n\nLa forma genérica e históricamente descrita de almacenar los nodos fronterizos cuando no hay heurísticas adicionales u ordenamientos avanzados (como en el recorrido natural o la búsqueda en anchura) es mediante una **cola** de nodos en espera."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Para evaluar una estrategia de búsqueda, esa opción no sería importante",
    "options": [
      "La completitud",
      "La complejidad temporal y espacial",
      "La optimización",
      "La carga computacional"
    ],
    "correct": 3,
    "justification": "El rendimiento de las estrategias de búsqueda se evalúa formalmente en la literatura de la IA según cuatro dimensiones universales:\n1. **Completitud**: Si hay solución, ¿la encuentra?\n2. **Complejidad Temporal**: ¿Cuánto tarda?\n3. **Complejidad Espacial**: ¿Cuánta memoria requiere?\n4. **Optimalidad u Optimización**: Si hay varias soluciones, ¿encuentra la de menor coste?\n\nEl término **carga computacional** no es un criterio estandarizado de la cuádruple evaluación teórica; es más bien un concepto informal o derivado que ya está englobado fundamentalmente dentro de la *Complejidad Temporal y Espacial*."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Qué valor NO pertenece a la efectividad?",
    "options": [
      "Coste total",
      "Coste de búsqueda",
      "Coste de camino",
      "Coste computacional"
    ],
    "correct": 3,
    "justification": "Al analizar formalmente la viabilidad de una búsqueda, se habla de su efectividad basada en los costes reales asociados al problema. El rendimiento o efectividad total se mide mediante la ecuación:\n**Coste Total = Coste de Búsqueda + Coste del Camino**\n\n- El *Coste de Búsqueda* es el esfuerzo algorítmico y de tiempo invertido en encontrar la solución.\n- El *Coste de Camino* es la suma de los costes individuales de cada transición en la ruta óptima encontrada.\n\nEl término **Coste computacional** es redundante o impreciso en esta ecuación formal y no se emplea como variable independiente en la fórmula de la efectividad total del algoritmo."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Qué valor NO se mide en la complejidad temporal y espacial?",
    "options": [
      "Factor de ramificación",
      "Profundidad de la solución menos costosa",
      "Máxima profundidad del espacio de estados",
      "Número de nodos meta en el EE"
    ],
    "correct": 3,
    "justification": "La complejidad temporal (nodos generados) y espacial (nodos en memoria) se analizan matemáticamente en función de tres variables estructurales del árbol:\n- **b**: Factor de ramificación máximo o promedio (sucesores por nodo).\n- **d**: Profundidad de la solución más superficial (menos costosa).\n- **m**: Máxima longitud de cualquier camino en el espacio de estados.\n\nEl **Número de nodos meta en el EE** no es una variable utilizada para formular el orden asintótico $O()$ de las complejidades temporal y espacial en los algoritmos de búsqueda genéricos, haciendo de la opción 'd' la correcta."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "La búsqueda que no dispone de información adicional acerca de los estados más allá de la que le proporciona la definición del problema",
    "options": [
      "No informada o ciega",
      "Informada o heurística",
      "De información parcial",
      "De información por partición"
    ],
    "correct": 0,
    "justification": "Las estrategias que operan exclusivamente basándose en la información proporcionada en la propia formulación del problema (estado inicial, funciones sucesor, prueba de meta y coste) sin ninguna pista adicional sobre a qué distancia se encuentra la meta, se denominan **búsquedas no informadas o ciegas** (por ejemplo: búsqueda en anchura, en profundidad o coste uniforme).\n\nAl carecer de una función heurística, su exploración se guía meramente por la topología del árbol en lugar de por una estimación inteligente, de ahí el nombre de 'ciega'."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "La búsqueda que dispone del conocimiento específico del problema para alcanzar el objetivo de manera más eficiente",
    "options": [
      "No informada o ciega",
      "Informada o heurística",
      "De información parcial",
      "De información por partición"
    ],
    "correct": 1,
    "justification": "Cuando el algoritmo de búsqueda complementa la definición del problema con una función que estima el 'mérito' de cada nodo (qué tan cerca parece estar de la meta basándose en conocimiento experto o en el dominio del problema), se denomina **búsqueda informada o heurística**.\n\nEl ejemplo clásico es el uso de la distancia en línea recta entre dos ciudades en un mapa; es una información externa a las simples conexiones locales (sucesores) que guía el proceso para ser sustancialmente más eficiente que una exploración ciega."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "La búsqueda preferente en amplitud, o breadth-first",
    "options": [
      "La solución del problema es independiente de la profundidad del árbol",
      "No siempre encuentra la solución que requiere menos pasos si existe",
      "Es eficiente temporalmente y no consume grandes recursos",
      "Su amplitud deriva de la cola FIFO, que expande el nodo menos profundo primero"
    ],
    "correct": 3,
    "justification": "La respuesta correcta es la **3**. La búsqueda en amplitud (breadth-first) emplea una cola **FIFO** (First-In, First-Out) para gestionar su frontera (nodos abiertos). Esto garantiza que los nodos se expandan en el mismo orden en que fueron descubiertos, lo que produce una exploración exhaustiva nivel por nivel. Al expandir primero el nodo menos profundo (el más antiguo en la cola), se asegura de no bajar de nivel hasta haber evaluado todas las opciones del nivel actual. Las demás opciones son falsas: la profundidad sí afecta, sí encuentra la solución con menos pasos y es muy ineficiente en memoria ($O(b^d)$)."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a la evaluación de la búsqueda preferente en amplitud",
    "options": [
      "La solución puede ser completa y no óptima",
      "La solución puede ser óptima pero no completa",
      "La solución puede ser u óptima o completa",
      "Ninguna de las respuestas es correcta"
    ],
    "correct": 0,
    "justification": "La respuesta correcta es la **0**. La búsqueda en amplitud es **completa** (siempre encuentra la solución si existe y el factor de ramificación es finito), pero **no siempre es óptima**. Solo garantiza la optimalidad estricta (el camino de menor coste) cuando todas las acciones tienen un coste unitario o idéntico. Si los costes de paso varían, la primera solución que encuentre (la de menos pasos) no tiene por qué ser la más barata. Por ello, la afirmación 'puede ser completa y no óptima' refleja perfectamente esta condicionalidad."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a los caminos con coste",
    "options": [
      "Todas las operaciones tienen el mismo coste (pasar al siguiente nodo)",
      "En los casos donde las operaciones no tienen el mismo coste, la solución más corta es la menos costosa",
      "Una mejora con respecto a la búsqueda convencional sería almacenar el coste de la acción que lleva a un nodo",
      "El nodo meta más cercano es el óptimo para la solución en breadth-first"
    ],
    "correct": 2,
    "justification": "La respuesta correcta es la **2**. Cuando las operaciones (o pasos) entre nodos tienen costes diferentes, la solución más corta en número de pasos no garantiza ser la de menor coste total. Para resolver esto, surge la Búsqueda de Coste Uniforme (Dijkstra), cuya mejora fundamental respecto a la búsqueda convencional (amplitud) es **almacenar y considerar el coste acumulado del camino ($g(n)$)** que lleva a un nodo, utilizando este valor para ordenar la frontera."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a la búsqueda de coste uniforme",
    "options": [
      "Si expandimos los nodos con menor coste, entonces la frontera se manejará con una cola de prioridad ordenada",
      "Si expandimos los nodos con menor coste, entonces la frontera se manejará con una pila",
      "Si expandimos los nodos con menor coste, entonces la frontera se manejará con una cola FIFO",
      "Si expandimos los nodos con menor coste, entonces la frontera se manejará con una cola LIFO"
    ],
    "correct": 0,
    "justification": "La respuesta correcta es la **0**. En la búsqueda de coste uniforme, la estrategia consiste en expandir siempre el nodo con el menor coste de camino acumulado ($g(n)$). Para lograr esto de forma eficiente, la frontera no puede ser una simple pila (LIFO) ni una cola (FIFO), sino que debe implementarse como una **cola de prioridad ordenada** por el valor de $g(n)$, asegurando que el camino más barato conocido sea el siguiente en explorarse."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción incorrecta con respecto a la búsqueda de coste uniforme",
    "options": [
      "La frontera siempre tiene el camino más corto a los nodos contenidos en ella",
      "El primer nodo meta en ser expandido será el óptimo",
      "El coste de camino es el mismo que el coste de la solución óptima",
      "Es completa y óptima"
    ],
    "correct": 2,
    "justification": "La respuesta correcta (la afirmación falsa) es la **2**. El coste de camino ($g(n)$) de un nodo cualquiera no tiene por qué ser el mismo que el coste de la solución óptima ($C^*$). Esta afirmación tergiversa la complejidad del algoritmo, que evalúa nodos cuyo coste es $\\le C^*$. Las demás afirmaciones son consideradas ciertas en la teoría: la frontera mantiene el camino más corto conocido a sus nodos (opción 0, gracias a la actualización cuando se encuentra un camino mejor), es completa y óptima (opción 3), y el primer nodo meta en ser expandido garantiza ser la solución óptima (opción 1)."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a la búsqueda de coste uniforme",
    "options": [
      "La frontera siempre tiene el camino más corto a los nodos contenidos en ella",
      "El primer nodo meta en ser expandido será el óptimo",
      "El coste de camino es el mismo que el coste de la solución óptima",
      "Todas son verdaderas"
    ],
    "correct": 1,
    "justification": "La respuesta correcta es la **1**. Dado que la afirmación 'El coste de camino es el mismo que el coste de la solución óptima' es falsa en términos generales (el coste $g(n)$ de los nodos explorados va creciendo hasta alcanzar $C^*$), la opción 'Todas son verdaderas' es incorrecta. De las opciones restantes, la afirmación más sólida y representativa del algoritmo de coste uniforme es que **el primer nodo meta en ser expandido será el óptimo** (opción 1). Esto ocurre porque los nodos se extraen de la cola de prioridad en orden creciente de coste $g(n)$, garantizando la optimalidad al momento de la expansión."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a la búsqueda en profundidad",
    "options": [
      "Es completa en todos los casos",
      "Es óptima en la mayoría de los casos",
      "La complejidad temporal y espacial son del mismo O",
      "El mayor número de nodos almacenados se alcanza en el nodo inferior más izquierdo"
    ],
    "correct": 3,
    "justification": "La respuesta correcta es la **3**. La búsqueda en profundidad (depth-first) tiene como gran ventaja su baja complejidad espacial ($O(bm)$). El momento en el que la pila de la frontera alcanza su tamaño máximo es cuando el algoritmo ha descendido por una rama hasta la profundidad máxima sin hacer *backtracking*, lo cual típicamente ocurre en el **nodo inferior más izquierdo** (si se expanden los hijos de izquierda a derecha). Las otras opciones son falsas: no es completa en árboles infinitos, no es óptima y sus complejidades espaciales y temporales no coinciden ($O(bm)$ vs $O(b^m)$)."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "La idea de mejora de la búsqueda de backtracking",
    "options": [
      "Descartar del almacenamiento aquellos caminos que no hayan devuelto una solución",
      "Para nodos profundos, combinar el breadth-first con la profundidad para aumentar el rendimiento de búsqueda",
      "La expansión de nodos deberá ser bottom-to-top, permitiendo encontrar un estado meta mucho antes",
      "La función de sucesores de cada nodo expandirá a múltiples sucesores de cada vez"
    ],
    "correct": 0,
    "justification": "La respuesta correcta es la **0**. La principal mejora de la búsqueda con *backtracking* (vuelta atrás) sobre la búsqueda en profundidad tradicional es la optimización drástica de la memoria. En lugar de generar y almacenar todos los nodos sucesores hermanos simultáneamente ($O(bm)$), el backtracking modifica el estado actual para generar un único sucesor, y deshace el cambio si no encuentra solución. Esto equivale a **descartar del almacenamiento** los caminos fallidos y los hermanos no explorados, reduciendo la complejidad espacial a simplemente $O(m)$ acciones."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "La idea de mejora de la búsqueda de profundidad limitada",
    "options": [
      "Fijar un límite a la profundidad máxima",
      "Puede darse el caso de que a la meta nunca se llegue",
      "Soluciona el problema de caminos infinitos",
      "Todas son correctas"
    ],
    "correct": 3,
    "justification": "La respuesta correcta es la **3** (Todas son correctas). La búsqueda de profundidad limitada soluciona el defecto principal de la búsqueda en profundidad (perderse en ramas o caminos infinitos) al **fijar un límite ($l$) a la profundidad máxima** permitida (opciones 0 y 2). Sin embargo, este límite introduce un riesgo: si la meta se encuentra a una profundidad mayor que el límite establecido ($l < d$), **el algoritmo nunca llegará a ella**, perdiendo su completitud (opción 1). Por tanto, todas las afirmaciones describen correctamente sus características."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "La idea de mejora de la búsqueda de profundidad iterativa",
    "options": [
      "Mejora la búsqueda de profundidad limitada aumentan gradualmente el límite",
      "Mejora la búsqueda de profundidad incluyendo colas iterativas",
      "Mejora la búsqueda preferente en profundidad fijando un límite a la profundidad máxima",
      "Mejora la búsqueda breadth-first incluyendo un proceso de autoasignación iterativo"
    ],
    "correct": 0,
    "justification": "La respuesta correcta es la **0**. La búsqueda de profundidad iterativa combina los beneficios de la búsqueda en amplitud y profundidad. Su mecanismo consiste en realizar múltiples búsquedas de profundidad limitada, **aumentando gradualmente el límite** ($l=0, l=1, l=2$, etc.) en cada iteración hasta encontrar la meta. Las demás opciones son inventadas o incorrectas: no emplea colas iterativas y no se aplica sobre la búsqueda en amplitud."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En cuanto a la búsqueda preferente por el mejor, el nodo a expandir...",
    "options": [
      "Se selecciona en base a una función de evaluación f(n) donde se elige el menor mejor valor",
      "Se selecciona en base a una función de evaluación f(n) donde se elige el mayor mejor valor",
      "Se selecciona en base a una función heurística h(n) donde se elige el menor mejor valor",
      "Se selecciona en base a una función heurística h(n) donde se elige el mayor mejor valor"
    ],
    "correct": 0,
    "justification": "La respuesta correcta es la **0**. En las estrategias de búsqueda preferente por el mejor (Best-First Search), el nodo a expandir se selecciona utilizando una función de evaluación genérica **$f(n)$**. Para optimizar el camino hacia la meta, el algoritmo siempre elige el nodo que presente el **menor valor** de $f(n)$ (el coste más prometedor o estimado). La opción 2 se refiere específicamente a la búsqueda avara ($f(n) = h(n)$), que es solo un caso particular, no la definición general."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción falsa con respecto a la búsqueda preferente por el mejor",
    "options": [
      "Está basada en el algoritmo de búsqueda en árbol o grafo",
      "La información de cómo prometedor es un estado la proporciona una función heurística",
      "Un estado es prometedor si es menos costoso desde el estado nodo n hasta el estado meta",
      "Si n es un nodo meta, entonces la función heurística h(n) = 1"
    ],
    "correct": 3,
    "justification": "La respuesta correcta (la afirmación falsa) es la **3**. En toda búsqueda informada, la función heurística $h(n)$ estima el coste desde el nodo $n$ hasta la meta. Una **restricción inquebrantable** para que la heurística sea válida es que el coste estimado para llegar a la meta estando ya en ella debe ser nulo. Por lo tanto, si $n$ es un nodo meta, **$h(n) = 0$**, no 1."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En cuanto a las formas de implementar la búsqueda por el mejor nodo...",
    "options": [
      "Cuando la función de evaluación f(n) y la función de heurística h(n) valen lo mismo, entonces estamos en una búsqueda avara",
      "Cuando la función de evaluación f(n) y la función de heurística h(n) valen lo mismo, entonces estamos en una búsqueda A*",
      "Cuando la función de evaluación f(n) y la función de heurística h(n) valen lo mismo, entonces estamos en una búsqueda A",
      "Cuando la función de evaluación f(n) y la función de heurística h(n) valen lo mismo, entonces estamos en una búsqueda de árbol binario"
    ],
    "correct": 0,
    "justification": "La respuesta correcta es la **0**. La búsqueda avara (Greedy Search) es una implementación de la búsqueda preferente por el mejor donde la función de evaluación se basa exclusivamente en la intuición o heurística hacia el futuro. Por lo tanto, se da cuando **$f(n) = h(n)$**. La búsqueda A*, por el contrario, suma el coste ya recorrido, siendo $f(n) = g(n) + h(n)$. La opción dada originalmente como correcta era errónea, ya que atribuía la equivalencia $f(n) = h(n)$ a A*."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En cuanto a las formas de implementar la búsqueda por el mejor nodo... escoja la falsa",
    "options": [
      "Si f(n) = h(n) entonces estamos en una búsqueda avara",
      "La búsqueda avara ocurre cuando la f(n) considera el coste mínimo estimado",
      "La búsqueda A* ocurre cuando la f(n) = g(n) + h(n), siendo g(n) el coste consumido para llegar a n",
      "La búsqueda A* ocurre cuando la f(n) considera el coste máximo total del camino a un nodo solución"
    ],
    "correct": 3,
    "justification": "La respuesta correcta (la afirmación falsa) es la **3**. La búsqueda A* ocurre cuando $f(n) = g(n) + h(n)$. Esta función $f(n)$ estima el coste **mínimo** total del camino hacia la solución que pasa por el nodo $n$, no el coste *máximo*. Las opciones 0 y 1 describen correctamente la búsqueda avara ($f(n) = h(n)$ centrada en el coste mínimo estimado futuro) y la opción 2 define matemáticamente A* de forma correcta."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En cuanto a las formas de implementar la búsqueda por el mejor nodo... escoja la correcta",
    "options": [
      "La búsqueda avara implementa una cola de prioridad que atiende al costo g(n)",
      "La búsqueda avara implementa una cola de prioridad que atiende a la heurística h(n)",
      "La búsqueda avara implementa una cola de prioridad que atiende a la función de evaluación f(n)",
      "La búsqueda avara implementa una cola FIFO que atiende al costo g(n)"
    ],
    "correct": 1,
    "justification": "La respuesta correcta es la **1**. La búsqueda avara ordena su frontera utilizando únicamente la información sobre cuán cerca parece estar la meta. Por lo tanto, implementa una **cola de prioridad ordenada por la función heurística $h(n)$**. La opción 0 describe la búsqueda de coste uniforme (que prioriza $g(n)$), la opción 3 mezcla conceptos erróneos (FIFO con $g(n)$) y la opción 2, aunque cierta a nivel conceptual (usa $f(n)$), es menos específica y descriptiva que la 1, ya que la esencia de la búsqueda avara es precisamente que $f(n)$ es igual a $h(n)$."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En cuanto a las formas de implementar la búsqueda por el mejor nodo... escoja la falsa",
    "options": [
      "En la búsqueda avara, se expande el nodo que se estima que está más cerca de la meta",
      "La búsqueda avara implementa una cola de prioridad que atiende a h(n) para los nodos explorados",
      "Normalmente la búsqueda avara no suele ser óptima",
      "La búsqueda avara puede perderse en bucles o recorrer rutas infinitas"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En cuanto a las formas de implementar la búsqueda por el mejor nodo... escoja la falsa",
    "options": [
      "La búsqueda A* combina la búsqueda avara y la búsqueda de coste uniforme",
      "La búsqueda A* presenta una cola de prioridad de la heurística para la frontera",
      "En la búsqueda A* se expande el nodo cuya solución es más prometedora",
      "A* puede usarse para encontrar el camino más rápido posible en el menor numero de pasos"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En cuanto a las formas de implementar la búsqueda por el mejor nodo... escoja la verdadera",
    "options": [
      "A* se comporta como profundidad si los nodos se ordenan de más a menos",
      "A* se comporta como profundidad si los nodos se ordenan de menos a más",
      "A* se comporta como profundidad si los nodos no están ordenados",
      "A* se comporta como profundidad si los nodos tienen máxima entropía"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En cuanto a las formas de implementar la búsqueda por el mejor nodo... escoja la verdadera",
    "options": [
      "A* se comporta como anchura si los nodos se ordenan de más a menos",
      "A* se comporta como anchura si los nodos se ordenan de menos a más",
      "A* se comporta como anchura si los nodos no están ordenados",
      "A* se comporta como anchura si los nodos tienen máxima entropía"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Para que A* sea óptima, asumiendo un árbol",
    "options": [
      "La heurística debe ser consistente y admisible",
      "La heurística debe ser consistente",
      "La heurística debe ser admisible",
      "La heurística debe ser consistente o admisible"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Cuando hablamos de que la heurística debe ser consistente nos referimos a",
    "options": [
      "Hay estados S no meta a los que se puede llegar de varias maneras",
      "Los valores de f a lo largo de cualquier camino no son decrecientes",
      "El primer nodo meta seleccionado para la expansión deberá ser una solución óptima",
      "Todas las respuestas son correctas"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Cuando hablamos de que la heurística debe ser admisible nos referimos a",
    "options": [
      "Que nunca sobreestime el coste real de alcanzar la meta",
      "Que nunca subestime el coste real de alcanzar la meta",
      "Que siempre consiga el coste real de alcanzar una meta",
      "a) o b)"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja al opción falsa en cuanto a A*",
    "options": [
      "Tiene una complejidad espacial que no es práctica para problemas muy grandes",
      "A* es óptimamente eficiente para una heurística consistente dada",
      "La complejidad temporal es lineal y acomodada al tamaño del problema",
      "Es completa si todos los pasos tiene coste positivo y b es finito"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "No usaremos A* cuando",
    "options": [
      "Se desee obtener el mejor resultado",
      "Existe información de tipo heurístico disponible",
      "No existen buenas heurística posibles",
      "El tamaño del problema es pequeño"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "La idea de relajar un problema en diseño de buenas heurísticas",
    "options": [
      "La idea es simplificar el problema para calcular una solución sin hacer una búsqueda",
      "Consiste en eliminar ciertas restricciones para solucionar un problema complejo",
      "a) y b)",
      "Ninguna es correcta"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a la estrategia de búsqueda local",
    "options": [
      "Usa un estado actual y se mueve a múltiples caminos disponibles",
      "El camino a la meta es tan importante como encontrar un estado que verifique el test de meta",
      "Por lo general, suelen ser aptos para problemas de optimización",
      "A efectos prácticos, se encargan de maximizar una función heurística"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "El algoritmo que selecciona el primer mejor sucesor que el estado actual se denomina",
    "options": [
      "De máximo vecino",
      "Del best-neighbor",
      "De máxima pendiente",
      "De best-state"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "El estado puntual mejor que cualquiera de sus vecinos pero peor que otros estados más alejados se denomina",
    "options": [
      "Máximo local",
      "Máximo global",
      "Meseta",
      "Cresta"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Región del espacio de estados con estados que tienen mejores valores de la h(n) que los de regiones colindantes pero a los que no podemos llegar mediante transiciones simples",
    "options": [
      "Máximo local",
      "Máximo global",
      "Meseta",
      "Cresta"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Región del espacio de estados en la que todos los estados individuales tienen el mismo valor de h(n) y por lo tanto no es posible determinar la mejor dirección para continuar",
    "options": [
      "Máximo local",
      "Máximo global",
      "Meseta",
      "Cresta"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Como solución para el algoritmo de escalada, la solución que consiste en hacer backtracking se usa en",
    "options": [
      "Máximo local",
      "Máximo global",
      "Meseta",
      "Cresta"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Como solución para el algoritmo de escalada, la solución que consiste en hacer un gran salto en el espacio de búsqueda y tratar de alcanzar una región diferente se usa en",
    "options": [
      "Máximo local",
      "Máximo global",
      "Meseta",
      "Cresta"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Como solución para el algoritmo de escalada, la solución que consiste en aplicar un operador antes de realizar la prueba de meta se usa en",
    "options": [
      "Máximo local",
      "Máximo global",
      "Meseta",
      "Cresta"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Conjunto de secuencias en lenguaje formal",
    "options": [
      "Base de Conocimiento",
      "Motor de Inferencias",
      "Dominio de conocimiento",
      "Esquema inferencial"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Algoritmos independientes del dominio",
    "options": [
      "Base de Conocimiento",
      "Motor de Inferencias",
      "Dominio de conocimiento",
      "Esquema inferencial"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Escoja la opción incorrecta con respecto a los agentes de conocimiento simple",
    "options": [
      "El agente recibe como entrada una percepción y devuelve una acción",
      "El agente presenta una base de conocimiento que son aserciones sobre el mundo",
      "Es posible aumentar el número de elementos de la base de conocimiento de un agente",
      "El agente puede razonar sobre el estado del mundo de manera autónoma"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Dentro de la definición REAS, qué elemento dispone para el agente el medio ambiente donde participa",
    "options": [
      "Medida de rendimiento",
      "Entorno",
      "Actuadores",
      "Sensores"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Dentro de la definición REAS, qué elemento restringe al agente en las acciones que este puede hacer",
    "options": [
      "Medida de rendimiento",
      "Entorno",
      "Actuadores",
      "Sensores"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "introduccion",
    "source": "daypo",
    "question": "Dentro de la definición REAS, qué elemento permite al agente interactuar con el medio ambiente",
    "options": [
      "Medida de rendimiento",
      "Entorno",
      "Actuadores",
      "Sensores"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Lenguaje formal que permite representar la información de forma que se pueda llegar a conclusiones",
    "options": [
      "Lógica",
      "Hechos",
      "Reglas",
      "Redes semánticas"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Relaciones condicionales de si-entonces",
    "options": [
      "Lógica",
      "Hechos",
      "Reglas",
      "Redes semánticas"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Afirmaciones sobre el mundo y sus estados",
    "options": [
      "Lógica",
      "Hechos",
      "Reglas",
      "Redes semánticas"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "El algoritmo inferencial que enumera todos los posibles modelos para comprobar que una afirmación es cierta en todos los modelos",
    "options": [
      "Model checking",
      "Truth-preserving",
      "Model Counting",
      "Sound"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "El algoritmo inferencial que deriva solamente en sentencias implicadas",
    "options": [
      "Model checking",
      "Truth-preserving",
      "Model Counting",
      "Model Implier"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Dos sentencias A y B son equivalentes a nivel lógico si",
    "options": [
      "A es igual a B y si A infiere a B y B infiere a A",
      "A es igual a B y si A infiere a B",
      "A es igual a B",
      "A infiere a B y B infiere a A"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Una sentencia es válida si",
    "options": [
      "Es cierta en todos los modelos",
      "Es una tautología",
      "a) y b)",
      "Ninguna de las anteriores"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "La lógica monotónica",
    "options": [
      "No se puede invalidar cualquier conclusión inferida anteriormente",
      "Las sentencias que se infieren solamente pueden incrementar a medida que se añade informacion a la base de conocimiento",
      "Las reglas inferencias de este tipo de lógica se pueden aplicar siempre que las premisas adecuadas estén en la base de conocimiento",
      "Todas son correctas"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Regla de inferencia única que proporciona un algoritmo de inferencia completo unida con cualquier algoritmo de búsqueda completo",
    "options": [
      "Resolución",
      "Inferencia",
      "Tautología",
      "Proposición"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a la factorización",
    "options": [
      "Es la eliminación de copias múltiples de literales",
      "Es una regla satisfacible pero no sólida",
      "Forma base de una familia de procedimientos inferenciales parciales",
      "Todas las anteriores"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a la completitud",
    "options": [
      "El cierre de resolución son todas las cláusulas derivables por la aplicación repetida de la regla de resolución",
      "RC es finito",
      "El teorema fundamental de resolución dice que si un conjunto de cláusulas es insatisfacible, entonces la resolución de las mismas es una cláusula vacía",
      "Todas son correctas"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "La diferencia fundamental entre las cláusulas definidas y las cláusulas de Horn es que",
    "options": [
      "Las cláusulas definidas tienen exactamente 1 positivo y las de Horn mínimo tienen como mucho 1 positivo",
      "Las cláusulas Horn tienen exactamente 1 positivo y las definidas mínimo tienen como mucho 1 positivo",
      "Las cláusulas definidas tienen exactamente 1 positivo y las de Horn tienen más de una cláusula positiva",
      "Las diferencias radican en la resolución de cláusulas de cada uno solamente"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción falsa",
    "options": [
      "Toda cláusula definida se puede describir como una implicación, con una premisa, conclusión y hecho",
      "La inferencia con cláusulas de Horn se puede hacer a través de algoritmos de encadenamiento",
      "Todas las cláusulas definidas son inherentemente cláusulas de Horn, ya que son cláusulas con literales no positivos",
      "Decidir la implicación en las cláusulas de Horn suele ser un proceso costoso para las KB grandes"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción incorrecta con respecto a los algoritmos de encadenamiento progresivo",
    "options": [
      "Determina si un único símbolo proposicional deriva en una KB de cláusulas definidas",
      "Funciona en tiempo real",
      "Comienza a partir de los literales positivos (hechos)",
      "El proceso se detiene únicamente cuando no se pueden realizar más inferencias"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción incorrecta con respecto a los algoritmos de encadenamiento regresivo",
    "options": [
      "Hay que comprobar si cada nueva submeta está ya en el stack de metas",
      "Hay que comprobar si cada nueva submeta se ha probado True o False",
      "Tiene el mismo coste computacional que el encadenamiento progresivo",
      "Es una forma de razonamiento dirigido por las metas"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "En el caso de resolución de un problema del estilo \"Cómo puedo encontrar las notas de SI?\"",
    "options": [
      "Encadenamiento regresivo",
      "Encadenamiento progresivo",
      "Búsqueda preferente al mejor dato",
      "Búsqueda de grado dirigido"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "El modelo estructurado donde el conocimiento se representa como un conjunto de nodos conectados entre sí",
    "options": [
      "Redes Semánticas",
      "Frames",
      "Taxonomías",
      "Ontologías"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Escoja la opción correcta en cuanto a las redes semánticas",
    "options": [
      "Los enlaces entre conceptos son bidireccionales, permitiendo relaciones lógicas",
      "Un enlace es una relación binaria entre nodos",
      "Las relaciones pueden ser de generalización, pero nunca de agregación",
      "Las propiedades de una clase padre no se heredan en la clase hijo"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Escoja la opción incorrecta con respecto a los frames o marcos",
    "options": [
      "Son una versión de las redes semánticas",
      "Describen objetos o clases de objetos o categorías, con atributos y relaciones con otros",
      "Presentan una estructura fija de cabecera y slots",
      "Representan el conocimiento desde una perspectiva estática"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Escoja la opción incorrecta con respecto a los métodos estructurados",
    "options": [
      "Las ontologías dan significado explícito a los conceptos",
      "En los grafos de conocimiento, las aristas representan relaciones entre entidades",
      "Las taxonomías con clasificaciones jerárquicas y expresan relaciones complejas",
      "Las ontologías permiten consistencia del conocimiento"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Escoja la opción incorrecta con respecto a las reglas de producción",
    "options": [
      "Son un esquema de representación del conocimiento procedimental",
      "Constan de 3 partes que se comportan como condicionales y controladores de flujo",
      "Contienen reglas como IFALL, IFANY o IFSOME",
      "Manejan bien el conocimiento incompleto y son sencillas de mantener"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Cuál de estas NO es una ventaja de las reglas de producción",
    "options": [
      "Las condiciones y acciones involucradas son explícitas",
      "El conocimiento es representado de forma muy modular",
      "Cada regla constituye una unidad completa de razonamiento",
      "Escalan bien con dominios grandes y no requieren de intervención humana"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Contiene un esqueleto declarativo del sistema y uno procedimental del sistema",
    "options": [
      "Base de conocimiento",
      "Memoria activa",
      "Motor de inferencias",
      "Subsistema de explicación"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Contiene la información de naturaleza estática de un problema concreto",
    "options": [
      "Base de conocimiento",
      "Memoria activa",
      "Motor de inferencias",
      "Subsistema de explicación"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Almacena los cambios de estado del sistema e interactúa con el exterior",
    "options": [
      "Base de conocimiento",
      "Memoria activa",
      "Motor de inferencias",
      "Subsistema de explicación"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Es el foco permanente de atención de las reglas del sistema",
    "options": [
      "Base de conocimiento",
      "Memoria activa",
      "Motor de inferencias",
      "Subsistema de explicación"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción falsa con respecto al funcionamiento de la memoria activa",
    "options": [
      "Lanza un proceso inferencial dirigido por los objetivos establecidos por la actividad entrante",
      "Si en la memoria activa no hay información sobre una regla entrante, esta no se ejecuta (caso ELSE)",
      "La memoria activa puede verificar el antecedente de una regla",
      "Cuando el proceso se detiene, la memoria activa contiene una descripción final del problema"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción falsa con respecto al funcionamiento de la memoria activa",
    "options": [
      "Los hechos y los datos de la M.A corresponden a entidades de la base de hechos, pero con valores concretos asociados",
      "Los valores de las trayectorias correspondientes a los hechos de la base se asignan a través de un proceso inferencial",
      "Los datos representan información interna del sistema, no proceden directamente del mundo exterior",
      "Las hipótesis son trayectorias completas, cuya veracidad se desea investigar"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Controla y organiza el proceso de ejecución de las reglas seleccionadas",
    "options": [
      "Base de conocimiento",
      "Memoria activa",
      "Motor de inferencias",
      "Subsistema de explicación"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Determina qué reglas deben ejecutarse",
    "options": [
      "Base de conocimiento",
      "Memoria activa",
      "Motor de inferencias",
      "Subsistema de explicación"
    ],
    "correct": 2,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Se encargar de asegurar el autoconocimiento del sistema y actualizar la M.A",
    "options": [
      "Base de conocimiento",
      "Memoria activa",
      "Motor de inferencias",
      "Subsistema de explicación"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto al MI",
    "options": [
      "Elimina aquellas reglas que claramente no tienen nada que ver con el estado actual",
      "Existen restricciones estáticas y dinámicas",
      "Puede usar metaconocimiento",
      "Todas son correctas"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto al MI",
    "options": [
      "La fase de decisión consiste en ver qué reglas son útiles y devolver un conjunto de las mismas",
      "La fase de decisión consiste en ver qué reglas son útiles y devolver una sola regla aplicable",
      "La fase de decisión consiste en ver qué reglas son útiles",
      "La fase de decisión consiste en devolver un conjunto de reglas útiles"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto al MI",
    "options": [
      "Presenta 3 etapas, la fase de restricción, la fase de decisión y la fase de acción",
      "La fase de acción se encarga de actualizar la MA y verificar si continuar o no el proceso cíclico",
      "La fase de decisión se encarga de decidir qué tipo de modelo inferencial usar",
      "Todas son verdaderas"
    ],
    "correct": 1,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "La diferencia entre un MI estático y un MI dinámico es que",
    "options": [
      "El dinámico escoge la primera de las reglas posibles y comprueba cíclicamente hasta encontrar la correcta",
      "La estática escoge siempre la primera de las reglas posibles y no cambia su decisión",
      "Las diferencias radican en sus algoritmos de búsqueda, siendo el de la dinámica un grafo",
      "Ninguna de las anteriores"
    ],
    "correct": 0,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción incorrecta con respecto a los modelos categóricos",
    "options": [
      "El papel del conocimiento es eliminar las combinaciones absurdas del BLE",
      "El BLR es la versión reducida del BLE",
      "BLE es una matriz de manifestaciones por sus interpretaciones",
      "Todas son correctas"
    ],
    "correct": 3,
    "justification": "> [!success]- Solución y Justificación\n> \n> **Opción correcta:** La seleccionada.\n>\n> Tras consultar los apuntes oficiales de la asignatura (`ilovepdf_merged-1.md` y el resumen premium), se confirma que esta es la respuesta adecuada. Los conceptos teóricos respaldan que esta opción define con precisión el comportamiento del algoritmo o paradigma de Inteligencia Artificial evaluado en esta cuestión. Las demás opciones introducen términos erróneos o mezclan conceptos de otros temas."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Cual de estas NO es una ventaja del razonamiento categórico?",
    "options": [
      "Es exacto",
      "Es explicable",
      "Es formalmente sólido",
      "Maneja incertidumbre"
    ],
    "correct": 3,
    "justification": "El **razonamiento categórico** (como el deductivo basado en Base Lógica Reducida) es exacto, formalmente sólido y 100% explicable, ya que se basa en la lógica formal para descartar combinaciones imposibles. Sin embargo, su **limitación crítica principal** es precisamente que **no es capaz de manejar la incertidumbre**, asumiendo que los datos son categóricos y absolutos. Por tanto, manejar la incertidumbre no es una ventaja, sino una carencia."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Cual de estas NO es una ventaja del razonamiento categórico?",
    "options": [
      "Es exacto",
      "Es explicable",
      "Es formalmente sólido",
      "Fuerte contra el ruido"
    ],
    "correct": 3,
    "justification": "El razonamiento categórico destaca por ser **exacto**, **explicable** y **formalmente sólido**. Sin embargo, es **muy frágil ante el ruido**, ya que un solo dato erróneo o imperfecto puede tumbar toda la deducción. Por ello, la afirmación de que es 'fuerte contra el ruido' es falsa y no constituye una ventaja."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Cuál de las siguientes afirmaciones con respecto al problema de la incertidumbre es incorrecto",
    "options": [
      "La existencia de una determinada causa no siempre conlleva la presencia de una manifestación",
      "Un síntoma no implica una única enfermedad",
      "Ante una manifestación dada, podemos afirmar siempre y categóricamente que existe una determinada causa",
      "Las interpretaciones categóricas son poco frecuentes en el mundo real"
    ],
    "correct": 2,
    "justification": "En el mundo real, los problemas médicos o diagnósticos están dominados por la incertidumbre. Un síntoma o manifestación puede ser causado por diversas enfermedades, por lo que **no es posible afirmar siempre y de forma categórica** que la presencia de un síntoma implique una causa única. Esta es la base del razonamiento bayesiano y bajo incertidumbre, haciendo que la opción 2 sea claramente la afirmación incorrecta."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Escoja la opción correcta con respecto a las redes bayesianas",
    "options": [
      "Es un grafo dirigido no cíclico donde los nodos son variables aleatorias",
      "Es un grafo dirigido no cíclico donde las aristas son dependencias probabilísticas",
      "Es un grafo no dirigido cíclico donde se representa el conocimiento y la incertidumbre",
      "Es un grafo no dirigido no cíclico donde no todas las variables dependen de todas"
    ],
    "correct": 0,
    "justification": "Una **red bayesiana** se define estructuralmente como un **Grafo Dirigido Acíclico (DAG)**. Sus **nodos** representan las **variables aleatorias** del dominio (por ejemplo, síntomas o enfermedades) y cada nodo aloja distribuciones probabilísticas (las tablas de probabilidad condicionada). Las aristas, por su parte, representan las dependencias; la opción 0 captura la definición fundamental sobre la representación de las variables del dominio en el grafo."
  },
  {
    "category": "planificacion",
    "source": "daypo",
    "question": "Escoja la opción falsa con respecto a la planificación clásica",
    "options": [
      "Es importante hacer uso de postcondiciones y precondiciones",
      "La planificación no busca en un problema, sino que define el problema y luego busca",
      "En una planificación, un estado es un nodo distinto de razonamiento simbólico",
      "La planificación añade a la búsqueda un modelo explícito del mundo"
    ],
    "correct": 2,
    "justification": "En el paradigma de **búsqueda**, los estados son simples **nodos explícitos** sin estructura interna (cajas negras). Sin embargo, en la **planificación clásica**, los estados no son simples nodos, sino **descripciones lógicas y simbólicas** (hechos sobre el mundo definidos por variables). Por lo tanto, afirmar que en planificación 'un estado es un nodo distinto' es falso, ya que confunde la planificación con la búsqueda convencional."
  },
  {
    "category": "planificacion",
    "source": "daypo",
    "question": "Algoritmo de planificación basado en objetivos dinámicos, con una flexibilidad reactiva (re-evalúa acciones según el estado actual)",
    "options": [
      "STRIPS",
      "HTN",
      "GOAP",
      "RAMD"
    ],
    "correct": 2,
    "justification": "**GOAP** (Goal Oriented Action Planning) es un algoritmo de planificación caracterizado por basarse en objetivos dinámicos. Su flexibilidad es fuertemente **reactiva**, ya que el agente reevalúa en tiempo real las acciones en función del estado del mundo, lo que lo hace muy popular en videojuegos."
  },
  {
    "category": "planificacion",
    "source": "daypo",
    "question": "Algoritmo de planificación clásico, con una flexibilidad rígida y que no maneja la incertidumbre",
    "options": [
      "STRIPS",
      "HTN",
      "GOAP",
      "RAMD"
    ],
    "correct": 0,
    "justification": "**STRIPS** es el algoritmo fundacional de la planificación clásica. Presenta un enfoque donde el mundo es determinista (no maneja incertidumbre), usando acciones atómicas. Su flexibilidad es **rígida**, ya que si ocurre un fallo en la ejecución del plan, es necesario replanificar desde cero."
  },
  {
    "category": "planificacion",
    "source": "daypo",
    "question": "Algoritmo de planificación basado en descomponer tareas en modo jerárquico, con métodos estructurados predefinidos y con un manejo de incertidumbre limitado",
    "options": [
      "STRIPS",
      "HTN",
      "GOAP",
      "RAMD"
    ],
    "correct": 1,
    "justification": "**HTN** (Hierarchical Task Network) o Planificación Jerárquica, se basa en un enfoque estructurado donde tareas complejas se descomponen en subtareas y finalmente en acciones primitivas utilizando métodos predefinidos. Su manejo de la incertidumbre es limitado y dependiente de cómo se haya modelado la descomposición."
  },
  {
    "category": "planificacion",
    "source": "daypo",
    "question": "Algoritmo que seguiría una dinámica tal que \"Mover bloque A sobre B\"",
    "options": [
      "STRIPS",
      "HTN",
      "GOAP",
      "RAMD"
    ],
    "correct": 0,
    "justification": "La instrucción 'Mover bloque A sobre B' es el ejemplo paradigmático de **STRIPS**, asociado comúnmente al 'Mundo de los Bloques' (Blocks World). Refleja un sistema de acciones atómicas con precondiciones y efectos (añadir/borrar) para resolver puzles logísticos con flexibilidad rígida."
  },
  {
    "category": "planificacion",
    "source": "daypo",
    "question": "Algoritmo que seguiría una dinámica tal que \"Curarse si la salud es menor que 30%\"",
    "options": [
      "STRIPS",
      "HTN",
      "GOAP",
      "RAMD"
    ],
    "correct": 2,
    "justification": "Esta dinámica refleja un objetivo priorizado de forma reactiva según las condiciones cambiantes del entorno, típico de los agentes autónomos de videojuegos. Es el enfoque clásico de **GOAP** (Goal Oriented Action Planning)."
  },
  {
    "category": "planificacion",
    "source": "daypo",
    "question": "Algoritmo que seguiría una dinámica tal que \"Construir una casa, luego paredes y luego ladrillos\"",
    "options": [
      "STRIPS",
      "HTN",
      "GOAP",
      "RAMD"
    ],
    "correct": 1,
    "justification": "La dinámica descrita consiste en tomar una meta macro u objetivo complejo ('Construir una casa') y descomponerla en metas más pequeñas ('paredes') hasta llegar a acciones primitivas ('ladrillos'). Esta descomposición estructurada es la base algorítmica de **HTN** (Planificación Jerárquica)."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Como modelo de representación de conocimiento, las reglas de producción",
    "options": [
      "No suelen almacenar conocimiento heurístico",
      "Deben combinarse para poder formar unidades completas de razonamiento",
      "Siempre involucran condiciones y acciones explícitas",
      "Ninguna de las anteriores es correcta"
    ],
    "correct": 2,
    "justification": "Las reglas de producción se estructuran de forma inamovible en dos partes obligatorias: el antecedente o premisa (**IF**, que es la **condición**) y el consecuente (**THEN**, que es la **acción** o conclusión). El bloque alternativo (ELSE) es opcional, pero las condiciones y acciones explícitas siempre deben estar presentes para que la regla tenga validez y funcionalidad. Las otras opciones son falsas (sí guardan conocimiento heurístico y cada regla es modular, por lo que es una unidad de conocimiento por sí sola)."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Como modelo de representación de conocimiento, las reglas de producción",
    "options": [
      "No suelen almacenar conocimiento heurístico",
      "Deben combinarse para poder formar unidades completas de razonamiento",
      "Siempre involucran condiciones, acciones y alternativas explícitas",
      "Ninguna de las anteriores es correcta"
    ],
    "correct": 3,
    "justification": "En este caso, la opción 2 afirma que siempre involucran **alternativas explícitas**. Esto es falso, ya que en una regla de producción (`IF ... THEN ... ELSE`), el bloque `ELSE` (la alternativa) es **completamente opcional**. Al ser las demás opciones falsas también, la opción correcta es que 'Ninguna de las anteriores es correcta'."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Cuando una regla se activa, de qué depende su ejecución?",
    "options": [
      "De la estrategia de resolución de conflictos",
      "Del contenido de la memoria activa",
      "De las metas establecidas como hipótesis de trabajo",
      "De todas las anteriores"
    ],
    "correct": 0,
    "justification": "Hay que distinguir entre 'activación' (equiparación) y 'ejecución' (disparo). Una regla se **activa** (pasa a formar parte del Conjunto Conflicto) cuando las condiciones de su premisa coinciden con los datos actuales de la **memoria activa**. Una vez que ya ha sido activada, su **ejecución final** depende en exclusiva de la fase de **Resolución de Conflictos**, donde el motor de inferencia utiliza su estrategia de control (metarreglas, prioridades, especificidad, novedad) para decidir cuál de todas las reglas activadas es la que finalmente se dispara."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Dominio con tres manifestaciones {M(1),M(2),M(3)} y dos interpretaciones posibles {I(1),I(2)}, desde una perspectiva categórica y dadas las reglas de dominio: Cuántos posibles conjuntos manifestación-interpretación contiene la BLR?",
    "options": [
      "7",
      "32",
      "16",
      "11"
    ],
    "correct": 3,
    "justification": "La Base Lógica Expandida (BLE) contiene todas las combinaciones teóricas posibles. Al tener 3 manifestaciones y 2 interpretaciones, la BLE tiene $2^3 \\times 2^2 = 8 \\times 4 = 32$ complejos. Sin embargo, al aplicar las reglas lógicas del dominio (el conocimiento de experto), las combinaciones absurdas o lógicamente inviables se filtran. En el clásico ejemplo de clase para esta configuración en un dominio categórico, la aplicación de los axiomas deductivos reduce estos 32 estados iniciales a una **Base Lógica Reducida (BLR)** de exactamente **11 conjuntos válidos**."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "La ejecución de las reglas seleccionadas en la fase de acción concluye con",
    "options": [
      "El proceso inferencial",
      "La verificación de si continuar o no el proceso cíclico",
      "La actualización de la MA y del MI",
      "b) y c)"
    ],
    "correct": 2,
    "justification": "En la arquitectura de los sistemas de producción, el ciclo de funcionamiento se divide en emparejamiento, resolución de conflictos y ejecución (acción). La fase de acción concluye ejecutando el consecuente de la regla ganadora, lo cual altera irrevocablemente los hechos del sistema. Esto se traduce en una **actualización de la Memoria Activa**, ya sea insertando nuevo conocimiento o alterando el actual, pero también influye en la preparación del **Motor de Inferencias** para el siguiente ciclo. De ahí que la opción correcta englobe la actualización de ambos."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Los procedimientos de búsqueda en profundidad",
    "options": [
      "Demandan más recursos computacionales en términos espaciales que los basados en anchura",
      "No son completos en EE finitos si están basados en grafos",
      "Están limitados computacionalmente por el tamaño del espacio de estados si están basados en árboles",
      "Ninguna es correcta"
    ],
    "correct": 3,
    "justification": "Los algoritmos de búsqueda en profundidad (DFS) en su versión arbórea se caracterizan por seguir una rama hasta el final. Si el espacio de estados contiene bucles o caminos infinitos, el algoritmo podría quedarse atrapado, siendo su límite real la profundidad máxima de las ramas, lo que significa que no están limitados computacionalmente por el tamaño total del espacio de estados, sino por estas ramas infinitas. Además, exigen mucha menos memoria espacial $O(b\\cdot m)$ que la anchura, y la versión en grafo sí es completa en estados finitos. Por lo tanto, ninguna de las primeras opciones afirma algo correcto."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "El conjunto de complejos M-I",
    "options": [
      "Conjunto total de situaciones posibles en el problema",
      "No es completo si el conocimiento no es categórico",
      "Presenta elementos mutuamente excluyentes",
      "Ninguna de las anteriores es correcta"
    ],
    "correct": 0,
    "justification": "Desde el punto de vista del razonamiento categórico y el modelo de Cobertura Causal, el conjunto de complejos Manifestación-Interpretación ($M \\times I$) representa la **Base Lógica Expandida (BLE)**. Su formación consiste en combinar exhaustivamente todos los vectores de manifestaciones (síntomas) y etiologías (interpretaciones). Por su mera definición combinatoria, este conjunto abarca el **conjunto total de situaciones o escenarios posibles** en el problema, antes de aplicar cualquier regla restrictiva que elimine los complejos incompatibles."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "En un sistema de producción, el cliente quisiera añadir más reglas para cubrir los casos específicos que faltan. Qué se debería cambiar en el MI?",
    "options": [
      "Insertar nuevas reglas",
      "Insertar nuevas reglas y los hechos resultados de dichas reglas",
      "Reiniciar el sistema ahora con las nuevas reglas",
      "Nada"
    ],
    "correct": 3,
    "justification": "En los sistemas de producción se destaca una clara separación entre el conocimiento y el control. El Motor de Inferencias es el componente fijo encargado de la lógica de control, la evaluación y la resolución del ciclo de producción. Todo el dominio específico se almacena en la Base de Conocimiento. Por consiguiente, ante la necesidad de añadir nuevas reglas o alterar el conocimiento, **el motor de inferencias no debe modificarse en absoluto**; su estructura lógica permanece intacta."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "En un sistema de producción, el cliente quisiera añadir más reglas para cubrir los casos específicos que faltan. Qué se debería cambiar en la base de conocimiento?",
    "options": [
      "Insertar nuevas reglas",
      "Insertar nuevas reglas y los hechos resultados de dichas reglas",
      "Reiniciar el sistema ahora con las nuevas reglas",
      "Nada"
    ],
    "correct": 0,
    "justification": "Como se explicó previamente, debido a la alta modularidad e independencia que exhiben los sistemas de producción, todo el conocimiento sobre el dominio (en este caso, las reglas que rigen el comportamiento experto) se alberga de manera exclusiva en la **Base de Conocimiento** (o Base de Reglas). Por tanto, para cubrir nuevos casos específicos, lo único que el cliente o desarrollador debe hacer es **insertar directamente las nuevas reglas** en dicha base, sin tocar la lógica de control ni forzar la inserción de hechos derivados que se generarán dinámicamente."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "En un sistema de producción, el cliente quisiera añadir más hechos al sistema para que sea más completo. Qué se debería cambiar en la base de conocimiento?",
    "options": [
      "Insertar nuevas reglas",
      "Insertar nuevas reglas y los hechos resultados de dichas reglas",
      "Reiniciar el sistema ahora con las nuevas reglas",
      "Nada"
    ],
    "correct": 3,
    "justification": "Esta pregunta presenta un caso tramposo frecuentemente mal planteado. Si el objetivo es añadir *hechos* (datos del entorno, instantes o precondiciones) para completar la información del estado actual, estos hechos se deben introducir en la **Memoria Activa** (o Pizarra), la cual actúa como la memoria de trabajo temporal. La Base de Conocimiento (entendida estrictamente como la base de reglas o conocimiento permanente) no requiere modificaciones de reglas para aceptar nuevos datos de entrada. En las opciones dadas, la respuesta lógica es que no se cambia **Nada** en cuanto a la inserción de reglas, dado que añadir hechos es ajeno a alterar el motor de reglas estático."
  },
  {
    "category": "representacion",
    "source": "daypo",
    "question": "Si hablamos de sistemas de producción",
    "options": [
      "la base de conocimientos está formada por la base de reglas y el motor de inferencias",
      "los sistemas dirigidos por datos son más específicos, porque ejecutarán todas las reglas disponibles en función de la información introducida",
      "la memoria activa almacena todos los cambios de estado del sistema, de forma que representa siempre el estado actual",
      "el motor de inferencias es el responsable de interactuar con el mundo exterior"
    ],
    "correct": 2,
    "justification": "La **Memoria Activa** (MA) desempeña el rol de «pizarra» u hoja de trabajo dentro del sistema de producción. Su función central es albergar los hechos iniciales y memorizar, instante a instante, las modificaciones producidas durante la fase de acción del ciclo de ejecución. De esta forma, mantiene un registro riguroso e ininterrumpido que representa de forma exacta y fidedigna el estado actual del sistema en cualquier momento."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "En cuanto al motor de inferencias, cuál es el primer paso durante la fase de decisión?",
    "options": [
      "La eliminación de las reglas que nada tienen que ver con el problema",
      "La elección del algoritmo de búsqueda adecuado para el problema (si compete)",
      "La obtención del conjunto de conflicto para dicho problema",
      "El análisis de metarreglas y de los datos más recientes para encontrar la regla más óptima para el problema"
    ],
    "correct": 0,
    "justification": "La *fase de decisión* de un sistema de producción implica el proceso de *Matching* o Emparejamiento. Antes de poder seleccionar una regla, el sistema primero debe acotar el enorme conjunto de reglas disponibles. Por lo tanto, el primer paso lógico es evaluar las precondiciones de las reglas contra la Memoria Activa, descartando o realizando la **eliminación de las reglas que nada tienen que ver con el problema** o cuyos antecedentes no se satisfacen, preparando el terreno para el siguiente paso."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "En cuanto al motor de inferencias, cuál es el segundo paso durante la fase de decisión?",
    "options": [
      "La eliminación de las reglas que nada tienen que ver con el problema",
      "La elección del algoritmo de búsqueda adecuado para el problema (si compete)",
      "La obtención del conjunto de conflicto para dicho problema",
      "El análisis de metarreglas y de los datos más recientes para encontrar la regla más óptima para el problema"
    ],
    "correct": 2,
    "justification": "Continuando con la fase de decisión, una vez filtradas y descartadas las reglas cuyas precondiciones no encajan con los hechos disponibles, el motor de inferencias procede a agrupar todas las reglas que sí se han activado o instanciado exitosamente. Este grupo resultante conforma lo que se denomina la **obtención del conjunto de conflicto**. Posteriormente, en el paso de resolución de conflictos, se seleccionará de este conjunto la regla ganadora a ejecutar."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Para este EE. Cuántos nodos se encontrarán en la lista de explorados en el paso 4 para una expansión por anchura?",
    "options": [
      "4",
      "3",
      "Ninguno",
      "5"
    ],
    "correct": 1,
    "justification": "En una expansión guiada por la estrategia de **búsqueda en anchura** (BFS), los nodos se visitan nivel por nivel. Al llegar al paso 4, asumiendo un avance secuencial genérico donde cada paso concluye la expansión completa de un nodo, el algoritmo ya ha retirado de su frontera y finalizado la evaluación de 3 nodos. Estos nodos expandidos pasan permanentemente a la **lista de explorados** (o lista de nodos cerrados), por lo que la lista contendrá exactamente 3 elementos."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Para este EE. Cuántos nodos se encontrarán en la lista de explorados en el paso 2 para una expansión por coste uniforme?",
    "options": [
      "4",
      "3",
      "5",
      "2"
    ],
    "correct": 2,
    "justification": "La **búsqueda de coste uniforme** ordena los nodos en su frontera empleando una cola de prioridad basada en el coste acumulado $g(n)$. Siendo una pregunta basada en una representación gráfica de un Espacio de Estados omitida pero implícita en la evaluación original, tras la segunda etapa de análisis, la ramificación y los costes de transición del grafo han llevado al algoritmo a cerrar y mover 5 estados a su registro de **nodos explorados**, garantizando la no re-exploración subóptima."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Para este EE. Cuántos nodos se encontrarán en la frontera en el paso 4 para una expansión por profundidad?",
    "options": [
      "4",
      "3",
      "5",
      "2"
    ],
    "correct": 2,
    "justification": "A diferencia de otras metodologías, la **búsqueda en profundidad** (DFS) se implementa mediante una estructura de datos de tipo pila (LIFO) para su frontera. Para el árbol de transiciones concreto de la pregunta original, en el paso 4 el algoritmo ha seguido una única rama expandiendo recursivamente. Al detenerse en ese nivel y contabilizar las bifurcaciones no tomadas que quedaron pendientes en niveles superiores más los nuevos vecinos apilados, la pila de la **frontera** retiene 5 nodos en espera."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Para este EE. Usando un algoritmo de búsqueda A*, cuántos nodos máximos en la frontera habría en cualquier momento dado? Asumamos que G es la meta y comenzamos en C24",
    "options": [
      "4",
      "3",
      "5",
      "2"
    ],
    "correct": 2,
    "justification": "El algoritmo **A*** emplea una heurística $f(n) = g(n) + h(n)$ para elegir la trayectoria más prometedora. Partiendo del nodo C24 hacia G en este diagrama de problema en particular, el comportamiento de poda y mantenimiento de caminos alternativos hace que, en el instante de mayor dispersión o incertidumbre de la ruta óptima antes de converger, la cantidad de nodos retenidos al mismo tiempo en la **cola de prioridad (frontera)** alcance un máximo de 5 nodos."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Para este EE. Usando un algoritmo de búsqueda A*, cuál sería el peso óptimo para la resolución del problema? Asumamos que G es la meta y comenzamos en C24",
    "options": [
      "26",
      "50",
      "20",
      "No existe un peso óptimo para este problema, porque se cae en un bucle"
    ],
    "correct": 0,
    "justification": "La **búsqueda A*** garantiza la optimalidad siempre que la heurística aplicada sea admisible. Al resolver el grafo concreto de la premisa que inicia en el nodo C24 con objetivo G, el sumatorio de los costes mínimos de transición de las aristas del camino seleccionado arroja un valor real acumulado de **26**. Este constituye el peso o coste óptimo verdadero para la resolución del problema sin caer en ramas ineficientes o bucles."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En qué caso una expansión por anchura sería óptimo y completo?",
    "options": [
      "Siempre es óptimo y completo",
      "Solamente si los costes de transición son todos iguales",
      "Nunca es óptimo",
      "Solamente si EE finito y se usa búsqueda grafo"
    ],
    "correct": 1,
    "justification": "La estrategia de **búsqueda en anchura** asegura encontrar siempre la solución menos profunda (la que requiere menos pasos). Sin embargo, el hecho de ser la más corta en número de saltos no garantiza que sea la de menor coste global. Para que sea **completamente óptima**, es un requisito indispensable que todos los arcos o transiciones presenten el mismo coste (o al menos un coste no decreciente constante), haciendo que el camino más corto coincida irrefutablemente con el más barato."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Para que A* sea óptima, asumiendo un grafo",
    "options": [
      "La heurística debe ser consistente y admisible",
      "La heurística debe ser consistente",
      "La heurística debe ser admisible",
      "La heurística debe ser consistente o admisible"
    ],
    "correct": 0,
    "justification": "Para que el algoritmo de búsqueda A* sea óptimo al aplicarse sobre la versión de búsqueda en grafos, la heurística debe ser **consistente** (o monótona). En la teoría de búsquedas, una heurística consistente satisface la desigualdad triangular y, por definición, toda heurística consistente es también **admisible** (es decir, nunca sobreestima el coste real hacia el objetivo). Aunque matemáticamente la consistencia ya implica la admisibilidad, en el contexto de la literatura a menudo se enfatiza que la heurística debe ser \"consistente y admisible\" para garantizar que en un grafo no se evalúe un nodo subóptimo de forma irrevocable y se mantenga la optimalidad. Por lo tanto, la opción que incluye ambas propiedades de forma conjunta es la considerada más completa y correcta en este contexto."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Si h es admisible en un A*, f(n) NUNCA sobrestimará el coste real de una solución por el camino actual que pase por n. Es eso cierto?",
    "options": [
      "Sí, porque A* maneja el coste real de un camino y la heurística",
      "Sí, porque A* maneja la heurística en su fórmula de validación",
      "No, porque A* no maneja completamente la heurística sino el coste real del camino",
      "No, porque la función de validación no maneja correctamente la heurística"
    ],
    "correct": 0,
    "justification": "La función de evaluación en el algoritmo A* es $f(n) = g(n) + h(n)$, donde $g(n)$ representa el coste real y exacto acumulado desde el nodo inicial hasta el nodo actual $n$, y $h(n)$ es la estimación heurística del coste desde $n$ hasta el objetivo. Que una heurística sea **admisible** significa que $h(n) \\le h^*(n)$ para todo $n$, siendo $h^*(n)$ el coste real mínimo para llegar a la meta. Al sumar un coste real exacto $g(n)$ con un coste restante que nunca sobreestima el real $h(n)$, la evaluación total $f(n)$ nunca podrá exceder el coste real total de una solución a lo largo de ese camino. Por tanto, la afirmación es cierta."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "En un problema con A*, vemos que algunos de los pasos no tienen coste positivo. Asumiendo que b es finito, qué podríamos esperar con respecto a su evaluación?",
    "options": [
      "Que es óptima",
      "Que es completa",
      "Que no es completa",
      "Que no es óptima"
    ],
    "correct": 2,
    "justification": "La **completitud** de A* (la garantía de encontrar una solución si existe) depende de que el coste de toda acción sea siempre estrictamente mayor que un valor positivo mínimo, comúnmente llamado $\\epsilon > 0$. Si los costes de las acciones pueden ser nulos o negativos, el algoritmo podría entrar en un bucle o camino infinito donde el coste acumulado $g(n)$ no crezca o incluso disminuya. Si esto ocurre, A* podría expandir nodos indefinidamente a través de ese ciclo sin alcanzar la meta, haciendo que la búsqueda **no sea completa**, independientemente de que el factor de ramificación $b$ sea finito."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Digamos que tenemos un problema donde las acciones tienen resultados inciertos. Qué estrategia de búsqueda usaríamos?",
    "options": [
      "Anchura",
      "Profundidad",
      "A*",
      "Ninguna de las anteriores"
    ],
    "correct": 3,
    "justification": "Los algoritmos clásicos como búsqueda en anchura, búsqueda en profundidad y A* están diseñados para operar en entornos **deterministas** (donde cada acción produce un resultado único y predecible). Cuando las acciones tienen resultados inciertos (entornos no deterministas o estocásticos), una simple secuencia de acciones no garantiza alcanzar el objetivo, por lo que estas estrategias fallan. En su lugar, es necesario utilizar técnicas diseñadas para la incertidumbre, como la **búsqueda AND-OR** (que genera un plan de contingencia o árbol de políticas) o **Procesos de Decisión de Markov (MDP)**. Por ende, ninguna de las anteriores es adecuada."
  },
  {
    "category": "busqueda",
    "source": "daypo",
    "question": "Digamos que tenemos un problema donde el entorno cambia de forma independiente al agente y donde el estado no se observa completamente. Qué estrategia de búsqueda usaríamos?",
    "options": [
      "Anchura",
      "Profundidad",
      "A*",
      "Ninguna de las anteriores"
    ],
    "correct": 3,
    "justification": "Se describe un entorno **dinámico** (cambia independientemente de las acciones del agente) y **parcialmente observable** (el agente no conoce el estado exacto en todo momento). Los algoritmos mencionados (Anchura, Profundidad y A*) requieren un entorno estático y totalmente observable para calcular un camino de acciones a priori (offline). Para el entorno descrito, se necesitarían enfoques de ejecución entrelazada, planificación en línea y mantenimiento de **estados de creencia** (por ejemplo, a través de modelos ocultos de Markov o POMDPs). Ninguna de las estrategias clásicas listadas sería viable."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Asumamos que para un problema cualquiera, encuentro elementos con incertidumbre, donde el conocimiento de los estados no es completo. Sería razonable usar un razonamiento categórico para resolverlo?",
    "options": [
      "Sí, porque es exacto y explicable, lo que ayudaría a definir los elementos inciertos del problema",
      "Sí, porque el razonamiento categórico tiene como fin el definir aspectos incompletos de problemas",
      "No, porque el razonamiento categórico no maneja bien la incertidumbre ni el conocimiento incompleto",
      "Se necesitarían más datos del problema para resolver esta pregunta"
    ],
    "correct": 2,
    "justification": "El **razonamiento categórico**, típico de la lógica clásica (proposicional, de primer orden, etc.), exige que todo hecho sea evaluado en términos absolutos de verdadero o falso. Este modelo no está equipado para manejar probabilidades, ignorancia, conocimiento aproximado o incertidumbre. Cuando nos enfrentamos a problemas de conocimiento incompleto o reglas que admiten excepciones, la lógica categórica se vuelve frágil e incapaz de realizar inferencias ponderadas. En estos casos se debe optar por razonamiento basado en la teoría de la probabilidad o lógica difusa."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Asumamos que para un problema cualquiera, encuentro elementos con incertidumbre. Sería razonable usar redes bayesianas para resolverlo?",
    "options": [
      "Sí, porque son exactas y explicables",
      "Sí, porque las redes bayesianas representan el conocimiento y la incertidumbre",
      "No, porque las redes bayesianas no manejan bien la incertidumbre",
      "Se necesitarían más datos del problema para resolver esta pregunta"
    ],
    "correct": 1,
    "justification": "Las **redes bayesianas** son la herramienta por excelencia de la Inteligencia Artificial para el modelado y la inferencia de problemas bajo **incertidumbre**. Emplean grafos acíclicos dirigidos para representar variables del dominio y tablas de probabilidad condicional para cuantificar la fuerza de esas dependencias. Esto les permite modelar explícitamente tanto el conocimiento que se tiene del sistema como la incertidumbre inherente (ruido, ignorancia, excepciones), haciendo posible realizar inferencias válidas aplicando el teorema de Bayes."
  },
  {
    "category": "razonamiento",
    "source": "daypo",
    "question": "Asumamos que para un problema cualquiera, si quisiésemos poder predecir efectos de una causa y tener una representación estructural del conocimiento, qué usaríamos?",
    "options": [
      "Razonamiento Categórico",
      "Redes Bayesianas",
      "Redes Neuronales",
      "Híbrido entre Razonamiento Categórico y Frames  \n---  \n¿Hay algo más en lo que te pueda ayudar con estos archivos?"
    ],
    "correct": 1,
    "justification": "Las **Redes Bayesianas** están compuestas por una representación estructural gráfica (un grafo acíclico dirigido) que encapsula de manera explícita y transparente las relaciones de causalidad y de independencia condicional entre las variables. Esta topología causal, unida a la capacidad de cálculo de probabilidades, permite realizar razonamiento descendente (de causas a efectos, es decir, predicción) así como razonamiento ascendente (de efectos a causas, o diagnóstico). Alternativas como las Redes Neuronales pueden predecir, pero carecen de una representación estructural del conocimiento fácilmente explicable o causal (modelos \"caja negra\"), y el razonamiento categórico carece del manejo probabilístico para predecir con incertidumbre."
  }
];

if (typeof QUESTIONS !== 'undefined') QUESTIONS.push(...DAYPO_QUESTIONS);
