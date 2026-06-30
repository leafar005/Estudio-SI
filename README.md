# Portal de Estudio SI — Sistemas Inteligentes

Portal web estático de estudio avanzado e interactivo para dominar la asignatura de **Sistemas Inteligentes (SI)**. 
Diseñado desde cero para fusionar teoría, práctica y resolución matemática de exámenes.

> *"Como no apruebe esta oportunidad cortaré todo contacto y me iré a vivir a las montañas con monjes."*

---

## 🚀 Arquitectura y Características Principales

### 1. Entorno de Práctica Interactiva
- **Dashboard Bento Grid**: Navegación rápida, moderna y responsiva basada en tarjetas.
- **Motor de Quizzes y Flashcards**: 
  - Generación de exámenes completos o por bloques (Simbólico vs Subsimbólico).
  - Justificación detallada en cada respuesta.
- **Banco de Preguntas Global**: Directorio completo, filtrable y unificado.
- **Panel de Estadísticas Avanzado**: Análisis de rendimiento global, registro de simulacros en `localStorage`, gráficos de pastel para aciertos/fallos y sistema de hitos/logros.

### 2. Resoluciones Lógicas y Simulaciones
- **Guía de Resolución de Exámenes**: Resolución paso a paso de problemas prácticos de examen.
- **Comparativa de Algoritmos de Búsqueda**: Simulación técnica de algoritmos ciegos y heurísticos (BFS, DFS, IDS, UCS, Greedy, A*).
- **Lógica y Bayes**: Resolución interactiva del caso médico de urgencias, aplicando la Base Lógica Reducida (BLR) y la Corrección Bayesiana con visualización de tablas de verdad adaptativas y fórmulas renderizadas matemáticamente.

### 3. Teoría y Mapas Mentales SVG
- **Resumen Temas 2 a 5 (Paradigma Simbólico)**: Inmersión teórica con un mapa mental nativo interactivo (SVG) sobre Búsquedas, Representación, Razonamiento y Planificación.
- **Resumen Temas 7 a 10 (Paradigma Subsimbólico)**: Mapa de redes neuronales, perceptrones y algoritmos genéticos, con lectura narrativa estructurada en bloques.

---

## 📚 Temario Cubierto

### Parte Simbólica (GOFAI)
- 🤖 **1. Introducción a la IA**: Enfoques y agentes lógicos.
- 🔍 **2. Búsqueda**: CIEGAS (Anchura, Profundidad) vs HEURÍSTICAS (Avara, A*).
- 🧠 **3. Representación**: Formalización del conocimiento y reglas lógicas.
- ⚖️ **4. Razonamiento**: Categórico, Probabilístico (Bayesiano) e Incertidumbre.
- 📋 **5. Planificación**: Espacio de estados, precondiciones y efectos (STRIPS).

### Parte Subsimbólica (Conexionismo)
- 🌐 **6. Sistemas Conexionistas**: Introducción a las redes neuronales.
- ⚡ **7. Neurona Formal**: LTM/STM, reglas de propagación y activación.
- ➡️ **8. Redes Feedforward (Supervisado)**: Perceptrón simple, MLP, Descenso del Gradiente.
- 🔄 **9. Redes Autoorganizativas (No Supervisado)**: Redes competitivas, SOM, GNG.
- 🧬 **10. Computación Evolutiva**: Algoritmos genéticos, cruzamiento, mutación y elitismo.

---

## 🛠️ Tecnologías y Diseño

- **Arquitectura Pura**: Vanilla Javascript, HTML5 semántico y CSS3 Moderno. Cero dependencias pesadas de frameworks (sin React/Vue/Tailwind), buscando el rendimiento absoluto y el control total del DOM.
- **Estética Premium**: Tematizado en modo oscuro con paletas azules/púrpuras de alto contraste, efectos de *Glassmorphism*, transiciones suaves y tarjetas interactivas.
- **Renderizado Dinámico**:
  - `MathJax v3` para renderizado en tiempo real de fórmulas complejas en LaTeX.
  - `Mermaid.js` para la generación de diagramas vectoriales interactivos.
- **Persistencia**: Todo el progreso de estudio, respuestas y analíticas viven y persisten en el cliente a través de `localStorage`.

---

## 👨‍💻 Autor y Despliegue

Desarrollado por **leafar005** con ayuda antigravity (estoy HARTO de esta asignatura no puedo mas).
Agradecimientos especiales a Suárez por el volcado histórico de preguntas de los Daypos.
