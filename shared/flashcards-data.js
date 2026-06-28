// Automatically generated flashcards. Do not edit directly.
window.FlashcardsData = {
  "representacion": [
    {
      "q": "En el Mundo del Wumpus, no hay brisa en [1,1]. ¿Cómo deduce el KB-Agent qué casillas son seguras usando TELL y ASK?",
      "a": "- **TELL:** Actualiza la KB indicando `¬Brisa[1,1]`.\n- **ASK:** Consulta si hay fosa en casillas adyacentes (`ASK(¿Fosa[1,2]?)`, `ASK(¿Fosa[2,1]?)`).\n- **Inferencia:** Usa Modus Tollens con sus reglas para deducir `¬Fosa[1,2]` y `¬Fosa[2,1]`, confirmando su seguridad."
    },
    {
      "q": "¿Por qué la Lógica Proposicional falla en el ajedrez y cómo lo soluciona la Lógica de Primer Orden (LPO)?",
      "a": "La Lógica Proposicional requiere millones de variables atómicas para cada pieza y posición, causando una explosión combinatoria. La LPO lo soluciona usando variables, predicados y cuantificadores, permitiendo reglas universales y compactas."
    },
    {
      "q": "¿Qué modificaciones requiere el Motor de Inferencias de un Sistema de Producción para añadir nuevas reglas médicas?",
      "a": "Ninguna. La lógica reside exclusivamente en la Base de Reglas. Solo se deben insertar allí las nuevas reglas y el Motor de Inferencias genérico las procesará automáticamente."
    },
    {
      "q": "¿Qué componente se modifica al ejecutar el consecuente de una regla y por qué es crítico?",
      "a": "Se modifica directamente la **Memoria Activa**. Es crítico porque actúa como la \"pizarra\" del sistema; su actualización garantiza que el motor evalúe las reglas basándose en el estado actual y real del problema."
    },
    {
      "q": "Diferencia la 'activación' (matching) de la 'ejecución' (disparo) de reglas coincidentes.",
      "a": "- **Activación:** Se verifican qué antecedentes (`IF`) se cumplen, pasando las reglas al Conjunto Conflicto.\n- **Ejecución:** Tras la Resolución de Conflictos, una única regla ganadora dispara su consecuente (`THEN`) y altera el sistema."
    },
    {
      "q": "¿Por qué usarías `IFANY` para comprobar bloqueos y `IFSOME` para recopilar transacciones sospechosas?",
      "a": "- **`IFANY`:** Actúa como evaluación perezosa, deteniéndose en la primera coincidencia (ideal para alertas).\n- **`IFSOME`:** Evalúa exhaustivamente la premisa completa, garantizando la recopilación del 100% de los datos solicitados."
    },
    {
      "q": "¿Es obligatorio el bloque ELSE en una regla IF-THEN-ELSE de un sistema de producción?",
      "a": "No, es falso. Una regla `IF-THEN` es totalmente válida y funcional por sí sola. Si el antecedente no se cumple, simplemente se ignora y el sistema avanza."
    },
    {
      "q": "¿Cómo resuelven las Redes Semánticas consultas simples (A) frente a consultas complejas (B)?",
      "a": "- **Consulta simple (A):** Usa *Rastreo/Herencia*, navegando jerárquicamente por los arcos `IS-A`.\n- **Consulta compleja (B):** Usa *Emparejamiento de Patrones*, buscando una coincidencia topológica exacta de un subgrafo dentro de la red."
    },
    {
      "q": "¿Por qué la arquitectura de Marcos (Frames) es ideal para modelar rápidamente un nuevo virus desconocido?",
      "a": "Porque utiliza la *Herencia de Valores por Defecto*. El marco se crea con huecos que se rellenan automáticamente con los valores de su clase padre, permitiendo razonar de inmediato."
    },
    {
      "q": "¿Qué limitaciones estructurales de una taxonomía resuelve una Ontología?",
      "a": "Las taxonomías solo permiten jerarquías simples (`IS-A`). Las ontologías añaden relaciones polifacéticas (`PART-OF`), propiedades y reglas semánticas, permitiendo el razonamiento automático y la interoperabilidad."
    },
    {
      "q": "Para añadir nuevos hechos temporales observados, ¿qué debe modificar el programador en la Base de Reglas?",
      "a": "Nada. Los hechos temporales se inyectan en la *Memoria Activa*. La Base de Reglas permanece inalterada, evidenciando la estricta separación entre el motor procedural y los datos."
    },
    {
      "q": "¿Por qué el algoritmo de Model Checking es computacionalmente inviable en dominios complejos?",
      "a": "Porque funciona por fuerza bruta, construyendo un árbol con todas las combinaciones posibles. Su complejidad exponencial $O(2^n)$ provoca que el sistema colapse por explosión combinatoria."
    },
    {
      "q": "En algoritmos inferenciales, ¿qué garantizan la Solidez (Soundness) y la Completitud (Completeness)?",
      "a": "- **Solidez:** Asegura que solo se deriven conclusiones lógicamente ciertas (sin falsas alarmas).\n- **Completitud:** Garantiza la capacidad matemática de encontrar todas las verdades implícitas en la KB."
    },
    {
      "q": "¿Por qué usarías Encadenamiento Progresivo en un sistema de control de tráfico aéreo?",
      "a": "Porque el sistema reacciona a un flujo continuo de datos de sensores y avanza hacia conclusiones (alertas). El Regresivo parte de una meta, lo cual es inútil aquí sin saber el resultado anticipadamente."
    }
  ],
  "razonamiento": [
    {
      "q": "¿Cuál es la vulnerabilidad del Razonamiento Categórico ante un error médico frente al Modelo Bayesiano?",
      "a": "El Categórico asume certeza absoluta; un dato erróneo crea contradicciones lógicas que tumban todo el diagnóstico. El Modelo Bayesiano maneja incertidumbre, diluyendo el error gracias al peso estadístico de otras pruebas."
    },
    {
      "q": "¿Qué es la Base Lógica Expandida (BLE) y cuántas combinaciones tiene para 5 manifestaciones y 3 interpretaciones?",
      "a": "Es la matriz matemática con todas las combinaciones posibles de variables. Su tamaño se calcula por el producto cartesiano: $2^{5+3} = 256$ combinaciones totales."
    },
    {
      "q": "¿Cómo se transforma la Base Lógica Expandida (BLE) en la Base Lógica Reducida (BLR)?",
      "a": "El sistema evalúa cada combinación de la BLE frente a las reglas del experto. Las que violan alguna regla se descartan, dejando en la BLR solo los estados lógicamente posibles."
    },
    {
      "q": "¿Por qué el Razonamiento Categórico descarta una interpretación aunque tenga un 99% de probabilidad estadística de ser cierta?",
      "a": "Porque opera con lógica formal dura, no probabilidad. Si asumir la hipótesis provoca una contradicción matemática con los hechos observados, se descarta categóricamente para mantener la consistencia lógica."
    },
    {
      "q": "¿Qué es la Monotonía Lógica y por qué genera una crisis al inyectar nuevos hechos contradictorios en IA?",
      "a": "Es la regla de que los nuevos hechos no pueden invalidar deducciones previas. Genera crisis porque si un nuevo dato contradice un hecho antiguo e inmutable, la Base de Conocimiento colapsa por contradicción."
    },
    {
      "q": "En la fórmula de Bayes, ¿qué rol juega la Verosimilitud frente a la Creencia A Priori ante una enfermedad rara y un test positivo?",
      "a": "La bajísima Probabilidad A Priori (enfermedad rara) actúa como ancla frente a la alta Verosimilitud (test positivo), resultando en que un falso positivo es matemáticamente más probable que padecer la enfermedad."
    },
    {
      "q": "¿Por qué es falso afirmar que la Fórmula Bayesiana asume independencia total entre causas y efectos?",
      "a": "Porque el núcleo de la red es la *Dependencia Condicional*. Asume firmemente que los efectos dependen causalmente de las hipótesis, lo que permite inferir las causas al observar los síntomas."
    },
    {
      "q": "¿Por qué en auditoría médica se prefiere una Red Bayesiana del 93% de acierto frente a una Red Neuronal del 97%?",
      "a": "Por explicabilidad. Las Redes Neuronales son cajas negras inauditables. Las Bayesianas usan grafos causales transparentes que permiten a los médicos trazar y entender exactamente cómo se llegó al diagnóstico."
    },
    {
      "q": "¿Cómo funcionan los flujos Descendente (Top-Down) y Ascendente (Bottom-Up) en una Red Bayesiana?",
      "a": "- **Descendente (Predicción):** Propaga probabilidad desde la causa hacia el efecto (ej. Fuma -> Riesgo de tos).\n- **Ascendente (Diagnóstico):** Invierte el flujo deduciendo la causa a partir del efecto (ej. Tos -> Probabilidad de cáncer)."
    },
    {
      "q": "Si $P(Infarto|Sintomas) = 0.8$, ¿cuánto debe valer $P(¬Infarto|Sintomas)$ y qué pasa si no es así?",
      "a": "Debe valer exactamente $0.2$. Si suman un valor distinto a $1$, hay inconsistencia estructural (violación probabilística), lo que volvería falsas e inútiles todas las inferencias del sistema."
    },
    {
      "q": "En Model Checking, ¿cuándo una sentencia es una Tautología Válida y cuándo dos son Equivalentes?",
      "a": "- **Válida:** Cuando la sentencia es Verdadera en el 100% de las combinaciones y modelos evaluados.\n- **Equivalentes:** Cuando ambas sentencias arrojan exactamente los mismos resultados en todos los modelos, sin importar su sintaxis."
    }
  ],
  "autoorganizacion": [
    {
      "q": "¿Por qué no tiene sentido añadir capas ocultas a una arquitectura SOM clásica?",
      "a": "Un SOM clásico tiene **una única capa computacional** (topológica). La capa de entrada es un buffer pasivo, y añadir más capas rompe el paradigma de proyección directa."
    },
    {
      "q": "¿Cuántas neuronas de entrada necesita una red SOM para procesar un dataset de 15 variables?",
      "a": "**Exactamente 15 neuronas pasivas**. La dimensionalidad de la interfaz de entrada debe igualar exactamente la del vector de entrada."
    },
    {
      "q": "¿Qué son las \"neuronas muertas\" en un SOM y cómo se solucionan?",
      "a": "Son neuronas que quedan muy lejos de los datos y nunca resultan ganadoras. Se soluciona usando arquitecturas dinámicas como **GCS** o **GNG**, que adaptan su número de neuronas según el error."
    },
    {
      "q": "¿Qué métrica mide la calidad de ajuste de los pesos a los datos en una red SOM?",
      "a": "El **Error de Cuantización (QE)**, que calcula la distancia promedio entre los vectores de entrada y sus neuronas ganadoras (BMUs)."
    },
    {
      "q": "¿Qué métrica verifica que no se fracture el espacio original al mapearlo a 2D en un SOM?",
      "a": "El **Error Topográfico (TE)**. Confirma que entradas contiguas en el espacio original se mapeen a neuronas vecinas en la red."
    },
    {
      "q": "En un SOM, si el vecindario y la tasa de aprendizaje son enormes, ¿en qué fase estamos y cuál es su objetivo?",
      "a": "En la **Fase de Ordenación** inicial. Su objetivo es forzar una macro-organización global antes de pasar a ajustes finos en la Fase de Convergencia."
    },
    {
      "q": "Para datos con aglomeraciones aisladas (islas), ¿es mejor usar GCS o GNG?",
      "a": "Es mejor **GNG**, porque puede desconectar aristas y nodos aislados, mientras que GCS fuerza estructuras rígidas (como triángulos)."
    },
    {
      "q": "¿Cómo decide una red SOM qué neurona es la BMU (Best Matching Unit)?",
      "a": "Escaneando todas las neuronas y eligiendo aquella cuyo vector de pesos tenga la **distancia (ej. euclídea) mínima** al vector de entrada."
    },
    {
      "q": "¿Cuál es la diferencia de actualización de pesos entre Backprop y SOM?",
      "a": "En SOM, el aprendizaje es por **vecindario topológico**. Solo la BMU ajusta sus pesos hacia la entrada, arrastrando consigo a sus vecinas cercanas."
    },
    {
      "q": "¿Cómo se adapta la arquitectura SOM para resolver el Problema del Viajante de Comercio (TSP)?",
      "a": "Modificando su topología 2D a un **anillo unidimensional cerrado (elástico)**, que se ajustará a los puntos dictando el trayecto."
    },
    {
      "q": "¿Utiliza GCS una tasa de aprendizaje decreciente como el SOM clásico?",
      "a": "No, GCS usa **tasas de aprendizaje constantes** para la ganadora y sus vecinas. Su dinamismo proviene de modificar estructuralmente el número de neuronas, no de atenuar la tasa."
    },
    {
      "q": "¿Por qué un SOM deja de actualizar pesos al final del entrenamiento y cómo se denominan ahora sus neuronas?",
      "a": "Porque entra en la **fase productiva o \"modo de operación\"**. Los pesos se congelan y las neuronas actúan como **centroides o prototipos maestros** de sus agrupaciones."
    },
    {
      "q": "¿Qué es el \"Efecto de Bordes\" en una red SOM?",
      "a": "Las neuronas del perímetro, al no tener vecinos exteriores, son atraídas hacia el centro. Esto causa una desviación sistemática al mapear los extremos de los datos."
    }
  ],
  "evolutiva": [
    {
      "q": "¿Por qué usar algoritmos genéticos para el TSP masivo (NP-Hard) y cuál es su mayor limitación?",
      "a": "Son útiles por su gran eficacia heurística para esquivar la explosión combinatoria. Su limitación es que **no garantizan encontrar el óptimo absoluto**."
    },
    {
      "q": "¿Cómo se llama a un algoritmo evolutivo que prescinde del cruce y opera solo con mutación y selección?",
      "a": "Continúa funcionando y recibe el nombre de **\"Estrategias Evolutivas\"**."
    },
    {
      "q": "¿Qué ventaja ofrece la Selección por Torneo frente a la Ruleta en algoritmos genéticos?",
      "a": "Permite **ajustar directamente la presión selectiva** cambiando el tamaño del torneo, equilibrando así entre exploración caótica y explotación convergente."
    },
    {
      "q": "¿Cómo se llaman los Algoritmos Genéticos que incorporan búsqueda local intensiva (como Hill-Climbing)?",
      "a": "**Algoritmos Meméticos**, combinando metaheurística global con búsqueda local."
    },
    {
      "q": "¿Qué técnica evita que los mejores individuos desaparezcan por mutaciones o cruces letales?",
      "a": "El **Elitismo**, que salva y clona directamente al mejor cromosoma hacia la siguiente generación."
    },
    {
      "q": "¿Qué rama evolutiva evoluciona programas autónomos en lugar de vectores, y cómo se representan?",
      "a": "La **Programación Genética (GP)**. Su genotipo se representa mediante **árboles sintácticos computacionales** (nodos con funciones y hojas con variables/constantes)."
    },
    {
      "q": "¿Cuáles son las ventajas y desventajas de usar \"Crowding\" (reemplazo por similitud) en Algoritmos Genéticos?",
      "a": "Su ventaja es la **preservación de diversidad inmensa**, evitando clones dominantes. Su gran desventaja es que **ralentiza drásticamente la convergencia**."
    },
    {
      "q": "¿Qué métodos de mutación reordenan los genes en lugar de alterar sus valores (bit flip)?",
      "a": "La **Mutación de Intercambio (Swap)** y la **Mutación de Barajado (Shuffle)**, que inyectan turbulencia permutando la posición de los genes existentes."
    },
    {
      "q": "¿Qué fenómeno demuestran los Autómatas Celulares y la Vida Artificial?",
      "a": "El **comportamiento emergente**: cómo reglas locales y simples entre vecinos generan espontáneamente sistemas globales de gran complejidad."
    },
    {
      "q": "¿Por qué no usar un genético para optimizar una función convexa, continua y derivable?",
      "a": "Porque es ineficiente computacionalmente. El **Gradiente Descendiente** analítico encontrará el óptimo muchísimo más rápido y con menos memoria."
    }
  ],
  "neurona": [
    {
      "q": "¿Cuáles son las equivalencias entre las partes de una neurona biológica y la artificial, y su relación con la memoria?",
      "a": "- **Dendritas**: Entradas/Pesos (contiene la Memoria a Largo Plazo).\n- **Soma**: Regla de propagación y función de transferencia.\n- **Axón**: Salida (contiene la Memoria a Corto Plazo)."
    },
    {
      "q": "¿Qué función de salida usar para regresión vs probabilidad, y por qué no usar funciones lineales en las ocultas?",
      "a": "- **Regresión**: Lineal pura.\n- **Probabilidad**: Sigmoide (valores de 0 a 1).\n- **Capas ocultas**: No lineales, pues las lineales harían que la red colapse algebraicamente en una monocapa, perdiendo capacidad de resolver problemas no lineales."
    },
    {
      "q": "El gradiente se vuelve 0 y el error sigue alto. ¿Qué ha ocurrido en la función de coste y por qué no puede salir?",
      "a": "Ha caído en un **mínimo local**. El algoritmo asume que es la solución óptima al llegar a una tangente plana (gradiente 0) y detiene la actualización de pesos, atascándose por falta de visión global."
    },
    {
      "q": "¿Por qué el Perceptrón simple aprende AND pero fracasa con EXOR, y cómo se soluciona topológicamente?",
      "a": "- **Motivo:** El Perceptrón simple solo separa datos linealmente separables (como AND). EXOR requiere fronteras no lineales.\n- **Solución:** Añadir **una capa oculta** con funciones no lineales para trazar fronteras complejas."
    },
    {
      "q": "¿Qué fenómeno caótico ocurre si configuras una Tasa de Aprendizaje ($\\alpha$) extremadamente alta al entrenar una red?",
      "a": "El vector de pesos dará **saltos descontrolados** y rebotará caóticamente de una ladera a otra en la función de coste, oscilando de forma divergente y sin estabilizarse jamás en el mínimo."
    },
    {
      "q": "Si todas las entradas son $0$ y la neurona se activa, ¿qué parámetro estructural lo permite y cuál es su impacto geométrico?",
      "a": "El **Bias ($\\theta$)**. Permite desplazar la función de activación y el hiperplano de decisión fuera del origen de coordenadas."
    },
    {
      "q": "Al introducir datos fuera del rango de entrenamiento (ej. niño en modelo de adultos), ¿la red fallará o lanzará excepción? ¿Por qué?",
      "a": "Emitirá un **valor arbitrario e impredecible**. Las redes son excelentes interpoladoras pero **pésimas extrapoladoras**, aplicando reglas conocidas a regiones desconocidas sin lógica humana."
    },
    {
      "q": "En una arquitectura multicapa terminada, ¿dónde está guardado todo el conocimiento aprendido para clasificar?",
      "a": "Reside intrínsecamente en **los pesos sinápticos y los Bias**, que codifican matemáticamente lo aprendido tras el entrenamiento."
    },
    {
      "q": "Si la pendiente (derivada) del error respecto a un peso es positiva, ¿qué operación algorítmica realizas sobre él y por qué?",
      "a": "**Restar** valor al peso. Para minimizar el error (descenso de gradiente) debemos avanzar en sentido contrario a la pendiente."
    },
    {
      "q": "¿Cuál es la diferencia entre Función de Pérdida (Loss) y Coste, y cómo se relaciona con el 'Batch Gradient Descent'?",
      "a": "- **Loss:** Error en **un solo patrón**.\n- **Coste:** Agregación de pérdidas en **todo el dataset**.\n- **Batch:** Usa el coste total para actualizar los pesos de una sola vez por época, evitando inestabilidad."
    }
  ],
  "feedforward": [
    {
      "q": "¿Qué diferencia estructural hace que ADALINE sintonice los pesos más finamente que el Perceptrón?",
      "a": "El Perceptrón usa una **función escalón** y corrige errores binarios, mientras que ADALINE usa una **función lineal** y minimiza el error continuo mediante derivadas (Regla Delta)."
    },
    {
      "q": "¿Por qué se usa One-Hot + Softmax en vez de una sola neurona para clasificar 4 patologías excluyentes?",
      "a": "Una sola neurona asume relaciones de magnitud irreales entre patologías nominales. **One-Hot (4 salidas) + Softmax** convierte las señales en **probabilidades**, eligiendo la clase más probable."
    },
    {
      "q": "¿Qué función tiene cada lote de datos (Train, Validation, Test) respecto a los pesos de la red?",
      "a": "- **Train:** Modifica los pesos directamente.\n- **Validation:** Monitorea y ajusta hiperparámetros (Early Stopping) sin tocar pesos.\n- **Test:** Evalúa la generalización final, totalmente aislado del entrenamiento."
    },
    {
      "q": "Si el Early Stopping aborta el entrenamiento porque sube el error de Validación, ¿qué ha ocurrido y qué pesos recupera el modelo?",
      "a": "Ocurrió **Sobreentrenamiento (Overfitting)**. El sistema no guarda los de la última época, sino que retrocede y rescata los pesos de la época con el **menor error de validación**."
    },
    {
      "q": "¿Cómo difiere el efecto de la penalización L1 (Valor Absoluto) y L2 (Cuadrados) sobre los pesos de la red?",
      "a": "- **L1 (Lasso):** Fuerza a muchos pesos a ser **$0$ exacto** (poda características inútiles).\n- **L2 (Ridge):** Encoge uniformemente los pesos grandes sin anularlos, distribuyendo el conocimiento."
    },
    {
      "q": "¿Cómo calcula Backpropagation el error en una capa oculta, si no hay patrones deseados directos allí?",
      "a": "**Infiere el error recursivamente** hacia atrás, ponderando y sumando los errores calculados en la capa posterior usando los pesos sinápticos que las conectan."
    },
    {
      "q": "¿Por qué una red Feedforward estándar fracasa analizando frases secuenciales, y cuál es la solución?",
      "a": "Carece de memoria temporal al propagar siempre hacia delante. La solución es usar una **Red Neuronal Recurrente (RNN)**, cuyas conexiones cíclicas conservan el contexto."
    },
    {
      "q": "En aprendizaje no supervisado sin etiquetas diana, ¿qué guía el ajuste de la red?",
      "a": "La **Autoorganización y Competición Analítica**. Agrupa datos (*Clustering*) basándose en distancia geométrica y densidad topológica para descubrir patrones intrínsecos."
    },
    {
      "q": "Para un modelo que aprueba/deniega créditos basado en 18 variables económicas, ¿cuántas neuronas exigen las capas de entrada y salida?",
      "a": "- **Entrada:** 18 neuronas (una por variable).\n- **Salida:** 1 sola neurona (dicotomía: >0.5 aprueba, <=0.5 deniega)."
    }
  ],
  "planificacion": [
    {
      "q": "¿Qué diferencia estructural hay entre Búsqueda Clásica y Planificación Clásica al modelar estados y acciones?",
      "a": "En Búsqueda Clásica, estados y acciones carecen de semántica. En **Planificación Clásica**, los estados usan variables lógicas y las acciones tienen **precondiciones y efectos**."
    },
    {
      "q": "¿Cuáles son los 3 componentes lógicos de una acción en el modelo STRIPS y cómo funcionan?",
      "a": "1. **Precondiciones:** Hechos necesarios para actuar.\n2. **Delete-list:** Hechos que se vuelven falsos y se borran.\n3. **Add-list:** Nuevos hechos verdaderos añadidos al estado."
    },
    {
      "q": "Modela la acción `RecogerPaquete` en STRIPS especificando Precondiciones, Delete-list y Add-list.",
      "a": "- **Precondiciones:** `En(Carga)` y `ManoVacia()`.\n- **Delete-list:** `ManoVacia()` y `Paquete(Carga)`.\n- **Add-list:** `Tiene(Paquete)`."
    },
    {
      "q": "¿Por qué PDDL separa el código en los ficheros `:domain` y `:problem`?",
      "a": "Para **reutilizar reglas**. El `:domain` define la lógica estática (acciones y variables), mientras que `:problem` especifica los objetos y estado inicial/final de un caso concreto."
    },
    {
      "q": "Para NPCs que reaccionan a ruidos dinámicamente en tiempo real, ¿qué encaja mejor: STRIPS, GOAP o HTN?",
      "a": "**GOAP (Goal Oriented Action Planning)**. Es altamente reactivo y replanifica en tiempo real si el entorno cambia, superando la rigidez de STRIPS."
    },
    {
      "q": "Para organizar la inmensa logística de construir un rascacielos, ¿por qué usar HTN en lugar de GOAP o STRIPS?",
      "a": "Porque HTN permite **descomposición jerárquica**, rompiendo macrotareas gigantes en subtareas primitivas para reducir drásticamente el coste computacional."
    },
    {
      "q": "¿Por qué la Planificación Clásica con $N$ variables booleanas sufre explosión combinatoria?",
      "a": "Cada variable tiene dos valores posibles (True/False), lo que genera un crecimiento exponencial del espacio de búsqueda ($2^N$ estados posibles)."
    },
    {
      "q": "Si un dron tiene un 5% de probabilidad de desvío, ¿por qué falla la Planificación Clásica y qué alternativa usas?",
      "a": "Falla porque exige entornos totalmente deterministas. Al haber incertidumbre (entorno estocástico), se debe usar **MDP (Procesos de Decisión de Markov)**."
    },
    {
      "q": "¿Cómo se modela un entorno donde un robot tiene visión limitada (ej. sensores a 2 metros)?",
      "a": "Se denomina **entorno parcialmente observable**.\nSe modela mediante un **POMDP** (Proceso de Decisión de Markov Parcialmente Observable)."
    },
    {
      "q": "¿Qué ocurre en la planificación puramente determinista (ej. STRIPS) si un plan falla en ejecución?",
      "a": "**El plan se rompe por completo.**\n- La ejecución se aborta.\n- Requiere replanificación completa desde cero por su nula flexibilidad."
    },
    {
      "q": "¿Por qué es falso afirmar que la Planificación Clásica es sinónimo de algoritmos de búsqueda (como A* o BFS)?",
      "a": "- La **Búsqueda** es solo el motor de navegación por grafos.\n- La **Planificación** aporta la representación lógica y simbólica (precondiciones y efectos) para razonar."
    },
    {
      "q": "¿Por qué las acciones en Planificación Clásica aportan semántica y no son simples arcos en un grafo?",
      "a": "Porque definen **precondiciones** (qué debe cumplirse para ejecutarse) y **efectos** (cómo alteran el estado lógico mediante sumas y restas de literales)."
    },
    {
      "q": "¿Cuál es la principal diferencia funcional entre los enfoques MDP y POMDP?",
      "a": "Ambos manejan acciones inciertas, pero difieren en la **observabilidad**:\n- **MDP:** Observabilidad total del estado actual.\n- **POMDP:** Observabilidad parcial (sensores imperfectos, incertidumbre sobre el estado)."
    },
    {
      "q": "¿Qué asume el planificador STRIPS sobre los literales ausentes en el estado inicial?",
      "a": "Aplica la **asunción de mundo cerrado** (Closed-World Assumption): todo literal que no figure explícitamente se asume **falso** por defecto."
    },
    {
      "q": "¿Cuál es la ruta que sigue PDDL para evaluar si una acción es aplicable en t=0?",
      "a": "1. Lee el estado `:init` del `:problem`.\n2. Revisa las acciones en `:domain`.\n3. Compara las `:preconditions` con el estado `:init`.\n4. Si coinciden, aplica efectos (Add/Delete) generando el nuevo estado."
    }
  ],
  "conexionistas": [
    {
      "q": "¿Qué arquitectura (Simbólica o Conexionista) usarías si necesitas explicar por qué se denegó un préstamo bancario?",
      "a": "La **Simbólica**.\n- Usa reglas lógicas trazables y permite alta **explicabilidad**.\n- La conexionista es una caja negra que impide justificar la decisión."
    },
    {
      "q": "¿Qué rama de la IA es mejor para reconocer señales de tráfico deformadas por mal clima?",
      "a": "La **Subsimbólica (Conexionista)**.\n- Su conocimiento distribuido le da alta **tolerancia a fallos y robustez frente al ruido**, ideal para patrones inexactos."
    },
    {
      "q": "¿Qué paradigma impulsa la actual 3ª Primavera de la IA (Deep Learning, ChatGPT)?",
      "a": "La **IA Conexionista / Subsimbólica**.\nImpulsada por Big Data, GPUs y redes neuronales profundas para superar holgadamente a la IA clásica en dominios perceptivos."
    },
    {
      "q": "Diferencia IA Simbólica y Conexionista usando los conceptos de Simulación y Emulación.",
      "a": "- **Simulación (Simbólica):** Replica el comportamiento externo mediante reglas lógicas explícitas.\n- **Emulación (Conexionista):** Reproduce la estructura biomimética neuronal para que la inteligencia surja orgánicamente."
    },
    {
      "q": "Clasifica a Turing, Von Neumann, Ramón y Cajal y McCulloch como precursores biológicos o computacionales.",
      "a": "- **Biológicos:** Ramón y Cajal, McCulloch.\n- **Computacionales:** Turing, Von Neumann."
    },
    {
      "q": "¿Qué 3 hitos de 1943 forman el 'Big Bang' fundacional de la IA?",
      "a": "1. **Cibernética:** Máquinas con propósito y retroalimentación.\n2. **Abstracción Lógica:** Sistemas con modelos lógicos internos (Craik).\n3. **Neurona Formal:** Modelo lógico neuronal booleano (McCulloch y Pitts)."
    },
    {
      "q": "¿Quién acuñó el término que usamos hoy para esta ciencia en Dartmouth (1956)?",
      "a": "**John McCarthy**, quien organizó la conferencia y acuñó el término **Inteligencia Artificial**."
    },
    {
      "q": "¿Qué dos publicaciones causaron el \"Invierno de la IA\" en los 70?",
      "a": "1. **\"Perceptrons\" (1969):** Demostró la incapacidad de redes monocapa para resolver problemas no lineales (ej. XOR).\n2. **Informe Lighthill (1973):** Argumentó la inviabilidad matemática y financiera de escalar la IA."
    },
    {
      "q": "¿Por qué los MADALINE son un hito comercial temprano de las redes neuronales artificiales?",
      "a": "Fueron el primer gran éxito industrial, instalados comercialmente como **filtros adaptativos para eliminar eco** en teléfonos y módems."
    },
    {
      "q": "¿Cuál es el rol del Elaborador y Comparador en el Ciclo Cibernético S-H-E-M-C?",
      "a": "- **Comparador:** Mide el error entre la predicción interna y la realidad externa.\n- **Elaborador:** Aprende reajustando la Hipótesis para reducir el error en el futuro."
    },
    {
      "q": "¿Cómo difieren la Computación Clásica y Cuántica en su unidad de información y determinismo?",
      "a": "- **Clásica:** Usa bits (0 o 1) bajo un determinismo físico estricto.\n- **Cuántica:** Usa Qubits con **superposición cuántica**, permitiendo estados concurrentes probabilísticos y paralelismo exponencial."
    },
    {
      "q": "¿Qué es el Régimen de Lovelace y por qué la IA moderna intenta superarlo?",
      "a": "Axioma que postula que las máquinas **solo hacen lo que se les ordena explícitamente**.\nLa IA moderna busca superarlo logrando que descubran patrones y exhiban creatividad autónoma emergente."
    },
    {
      "q": "¿Por qué hay un beneficio recíproco entre Neurociencias e IA Conexionista?",
      "a": "Por la **similitud biomimética**:\n- La neurobiología inspira modelos algorítmicos.\n- Las simulaciones de IA sirven como bancos de prueba teóricos para los neurólogos."
    },
    {
      "q": "Nombra 4 aproximaciones de la IA inspiradas en modelos biológicos (fuera de las redes neuronales puras).",
      "a": "1. **Bioevolutiva:** Alta velocidad/precisión.\n2. **Neuroglial:** Emula células gliales para más plasticidad.\n3. **Genética:** Algoritmos de herencia/mutación para optimización.\n4. **Social:** Inteligencia de enjambre e interacciones complejas."
    },
    {
      "q": "¿Qué objetivos tiene la IA en sus vertientes de Ciencia e Ingeniería?",
      "a": "- **Ciencia:** Entender y modelizar analíticamente los mecanismos de la cognición y la mente.\n- **Ingeniería:** Ensamblar y programar soluciones prácticas automatizadas (ej. Sistemas Expertos, Controladores)."
    }
  ],
  "introduccion": [
    {
      "q": "¿Por qué un agente reactivo simple chocaría con un peatón oculto que sí evitaría uno basado en modelos?",
      "a": "- **Reactivo simple:** Padece amnesia total, actúa solo por la percepción actual y aceleraría.\n- **Basado en modelos:** Mantiene un **estado interno**, recuerda al peatón y deduce preventivamente en su entorno parcialmente observable."
    },
    {
      "q": "¿En qué se diferencian los enfoques de IA basados en metas vs basados en utilidad al resolver un laberinto?",
      "a": "- **Basado en metas:** Busca el éxito binario (alcanzar la salida), sin importar la eficiencia.\n- **Basado en utilidad:** Maximiza una función numérica de preferencia (ej. menor tiempo/batería) al buscar la meta."
    },
    {
      "q": "¿Qué paradigma IA elegirías para diagnósticos médicos que exigen explicabilidad y qué problemas tiene?",
      "a": "- **Elección:** Simbólico, por su conocimiento explícito y alta explicabilidad para el personal médico.\n- **Problema:** Es frágil ante la incertidumbre y susceptible de explosión combinatoria, a diferencia del subsimbólico (que es robusto pero inescrutable)."
    },
    {
      "q": "Diseña el marco REAS para un agente de compra de acciones en bolsa.",
      "a": "- **Rendimiento:** Maximizar ROI, minimizar pérdidas y riesgos.\n- **Entorno:** Mercados financieros y noticias (estocástico, multiagente, dinámico).\n- **Actuadores:** Comprar, vender o retener activos.\n- **Sensores:** APIs de precios y feeds de noticias."
    },
    {
      "q": "¿Qué es la objeción de Ada Lovelace y cómo se refutó en la IA?",
      "a": "- **Crítica:** Las máquinas no tienen iniciativa, solo hacen lo que se les ordena.\n- **Refutación:** Superado cuando las máquinas logran acciones no previstas, como aprender a ganar en las damas (Samuel, 1959) o demostrar teoremas de forma original (Teórico Lógico, 1957)."
    },
    {
      "q": "Clasifica el entorno del Póker y compáralo con el Ajedrez.",
      "a": "- **Póker:** Estocástico (cartas al azar), Parcialmente observable (cartas ocultas) y Multiagente.\n- **Ajedrez:** Determinista (sin azar), Totalmente observable (tablero visible) y Multiagente."
    },
    {
      "q": "¿Inventaron Turing y Shannon la IA en 1950?",
      "a": "No, son precursores. La IA se fundó oficialmente en la Conferencia de Dartmouth (1956). Los verdaderos padres fundadores son McCarthy, Minsky, Newell y Simon."
    },
    {
      "q": "En `Agente = Arquitectura + Programa`, ¿qué hace la Arquitectura?",
      "a": "Provee el hardware base, ofrece sensores y actuadores para interactuar con el entorno, y da una interfaz de ejecución para el programa (algoritmo lógico)."
    },
    {
      "q": "¿Un programa con pasos explícitos e información acoplada al control es IA?",
      "a": "No, es un programa convencional. La IA separa el conocimiento del control, usando procesos heurísticos que se adaptan al entorno."
    },
    {
      "q": "Compara el paradigma Evolutivo y el Conexionista con metáforas biológicas.",
      "a": "- **Conexionista:** Inspirado en el cerebro individual. Redes neuronales que ajustan conexiones aprendiendo de ejemplos.\n- **Evolutivo:** Inspirado en la genética de poblaciones. Evoluciona soluciones mediante mutación y selección del más apto."
    }
  ],
  "busqueda": [
    {
      "q": "¿Diferencia entre Estado y Nodo en búsqueda?",
      "a": "- **Estado:** Configuración física (ej. coordenada en laberinto).\n- **Nodo:** Estructura de datos que contiene el estado más metadatos (padre, acción previa, coste acumulado, profundidad)."
    },
    {
      "q": "¿Por qué usar Búsqueda en Grafo en lugar de Árbol con acciones reversibles?",
      "a": "Porque la búsqueda en árbol no recuerda nodos visitados, creando ciclos infinitos. La búsqueda en grafo usa una lista de 'cerrados' para ignorar nodos repetidos, evitando bucles."
    },
    {
      "q": "¿Por qué preferir Profundización Iterativa (IDS) sobre BFS o DFS en un árbol enorme?",
      "a": "IDS combina lo mejor de ambas: garantiza la solución óptima y completitud (como BFS) sin colapsar la RAM, ya que requiere memoria lineal baja (como DFS)."
    },
    {
      "q": "¿Qué pasa en A* si $h(n) = 0$ para todo nodo (con costes variables)?",
      "a": "La ecuación $f(n) = g(n) + h(n)$ se reduce a $f(n) = g(n)$. El algoritmo degenera en Búsqueda de Coste Uniforme (UCS)."
    },
    {
      "q": "Si $h_2(n) \\ge h_1(n)$ siendo ambas admisibles, ¿qué concepto es y cómo ayuda a A*?",
      "a": "Es **Dominancia de Heurísticas**. $h_2$ domina a $h_1$, lo que beneficia a A* haciéndolo más restrictivo y asegurando la expansión de menos nodos, ahorrando tiempo y memoria."
    },
    {
      "q": "¿Cuál es el defecto principal de la Búsqueda Avara (Greedy)?",
      "a": "Se basa solo en la heurística, ignorando el coste acumulado. Es \"corta de miras\", no garantiza un resultado óptimo y puede generar rutas ineficientes o quedarse en callejones sin salida."
    },
    {
      "q": "¿Qué propiedades requiere la heurística de A* en Árboles vs. Grafos?",
      "a": "- **Árbol:** Exige Admisibilidad (nunca sobreestimar el coste meta).\n- **Grafo:** Exige Consistencia (el coste estimado no decrece ilógicamente), ya que no reabre nodos."
    },
    {
      "q": "¿Cuáles son las 3 trampas de la búsqueda local Ascenso de Colinas?",
      "a": "- **Máximos locales:** Picos secundarios donde se atasca creyendo ser el óptimo global.\n- **Mesetas:** Zonas planas donde el algoritmo avanza al azar sin guía.\n- **Crestas:** Terrenos donde la mejora requiere movimientos simultáneos no permitidos."
    },
    {
      "q": "¿Por qué el Emparejamiento (Matching) es el cuello de botella en búsquedas informadas?",
      "a": "Porque implica verificar el estado actual contra precondiciones de miles de operadores posibles con variables complejas. Este filtrado masivo consume mucha CPU."
    },
    {
      "q": "En UCS, ¿por qué no es óptimo el camino al *añadir* la meta a la frontera?",
      "a": "Al generarlo, la ruta descubierta puede ser rápida pero cara. La garantía de optimalidad ocurre en la **expansión**, cuando la meta es extraída como el nodo de menor coste acumulado en la cola."
    },
    {
      "q": "¿Cómo aplicar la 'Relajación de Problemas' para generar heurísticas en el Puzzle-8?",
      "a": "- **Distancia Manhattan (relajación parcial):** Permitir mover piezas saltando otras; se cuenta la distancia ortogonal.\n- **Piezas mal colocadas (relajación total):** Permitir que las piezas se teletransporten a su lugar correcto."
    },
    {
      "q": "¿Qué significa separar Conocimiento de Control en IA?",
      "a": "- **Conocimiento (el 'qué'):** Define formalmente el problema, reglas, meta y estados.\n- **Control (el 'cómo'):** El algoritmo (A*, BFS) que decide la estrategia para buscar la solución, logrando independencia modular."
    },
    {
      "q": "Compara la complejidad de memoria de BFS y DFS en árboles muy ramificados.",
      "a": "- **BFS ($O(b^d)$):** Guarda capas enteras de la frontera, llenando la RAM exponencialmente.\n- **DFS ($O(bm)$):** Mantiene solo un camino activo bajando, ocupando memoria lineal y muy poca RAM."
    },
    {
      "q": "¿Qué usarías ante no determinismo y estados parcialmente observables?",
      "a": "- **No determinismo:** Búsqueda AND-OR, generando un árbol de contingencias ante resultados imprevistos.\n- **Parcialmente observable:** Estados de Creencia (Belief States), buscando sobre conjuntos de estados posibles en lugar de estados exactos."
    }
  ]
};
