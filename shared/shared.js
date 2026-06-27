
// --- CUSTOM MODALS ---
window.showCustomModal = function(options) {
  const overlay = document.createElement('div');
  overlay.className = 'custom-modal-overlay';
  
  const box = document.createElement('div');
  box.className = 'custom-modal-box';
  
  let html = '';
  if (options.title) html += `<h3 class="custom-modal-title">${options.title}</h3>`;
  if (options.desc) html += `<p class="custom-modal-desc">${options.desc}</p>`;
  
  html += `<div class="custom-modal-actions">`;
  const uniqueId = Date.now() + Math.random().toString(36).substr(2, 9);
  options.buttons.forEach((btn, i) => {
    html += `<button class="custom-modal-btn ${btn.style || 'secondary'}" id="modal-btn-${uniqueId}-${i}">${btn.text}</button>`;
  });
  html += `</div>`;
  
  box.innerHTML = html;
  overlay.appendChild(box);
  document.body.appendChild(overlay);
  
  // Force reflow for animation
  overlay.offsetHeight;
  overlay.classList.add('show');
  
  const close = () => {
    overlay.classList.remove('show');
    document.removeEventListener('keydown', escapeHandler, true);
    setTimeout(() => overlay.remove(), 300);
  };
  
  let cancelAction = null;
  options.buttons.forEach((btn, i) => {
    if (btn.text.toLowerCase().includes('cancelar')) {
      cancelAction = () => { close(); if (btn.action) btn.action(); };
    }
    document.getElementById(`modal-btn-${uniqueId}-${i}`).addEventListener('click', () => {
      close();
      if (btn.action) btn.action();
    });
  });

  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (cancelAction) cancelAction();
      else close();
    }
  };
  document.addEventListener('keydown', escapeHandler, true);
};

// --- THEME MANAGEMENT DELETED ---

// --- STATS & ACHIEVEMENTS MANAGEMENT ---
window.QuizStats = {
  data: {
    quizzesCompleted: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    topics: {},
    achievements: [],
    historyQuizzes: [],
    historyQuestions: []
  },
  
  ACHIEVEMENTS: {
    FIRST_BLOOD: { id: 'FIRST_BLOOD', icon: '🩸', title: 'Primera Sangre', desc: 'Responde tu primera pregunta.' },
    AGENTE_REACTIVO: { id: 'AGENTE_REACTIVO', icon: '🤖', title: 'Agente Reactivo Simple', desc: 'Completa tu primer test o simulacro en el portal.' },
    MINIMO_GLOBAL: { id: 'MINIMO_GLOBAL', icon: '🎯', title: 'Mínimo Global Alcanzado', desc: 'Obtén un 100% de aciertos en cualquier simulacro (cero error).' },
    EVOLUCION_CONTINUA: { id: 'EVOLUCION_CONTINUA', icon: '🧬', title: 'Evolución Continua', desc: 'Responde un total de 100 preguntas en todo el portal.' },
    SCHOLAR: { id: 'SCHOLAR', icon: '🦉', title: 'Erudito', desc: 'Responde 500 preguntas en total.' },
    TEN_QUIZZES: { id: 'TEN_QUIZZES', icon: '🔟', title: 'Constante', desc: 'Completa 10 simulacros.' },
    FIFTY_QUIZZES: { id: 'FIFTY_QUIZZES', icon: '🔥', title: 'Máquina', desc: 'Completa 50 simulacros.' },
    SNIPER: { id: 'SNIPER', icon: '🔫', title: 'Francotirador', desc: 'Acierta 50 preguntas en total.' },
    SPEEDRUNNER: { id: 'SPEEDRUNNER', icon: '⚡', title: 'Speedrunner', desc: 'Completa un test de 10+ preguntas en menos de 1 minuto.' },
    NIGHT_OWL: { id: 'NIGHT_OWL', icon: '🦇', title: 'Búho Nocturno', desc: 'Completa un test entre medianoche y las 5 AM.' },
    MAESTRO_SIMBOLICO: { id: 'MAESTRO_SIMBOLICO', icon: '🧠', title: 'Maestro Simbólico', desc: 'Aprueba con más de un 80% el quiz de la Parte Simbólica (Temas 1 al 5).' },
    CONEXIONISTA_EXPERTO: { id: 'CONEXIONISTA_EXPERTO', icon: '🌐', title: 'Conexionista Experto', desc: 'Aprueba con más de un 80% el quiz de la Parte Subsimbólica (Temas 6 al 10).' },
    HEURISTICA_ADMISIBLE: { id: 'HEURISTICA_ADMISIBLE', icon: '🔍', title: 'Heurística Admisible', desc: 'Domina los algoritmos de Búsqueda sin cometer errores.' },
    RAZONADOR_BAYESIANO: { id: 'RAZONADOR_BAYESIANO', icon: '⚖️', title: 'Razonador Bayesiano', desc: 'Domina los modelos de representación, frames y redes bayesianas.' },
    NEURONA_GANADORA: { id: 'NEURONA_GANADORA', icon: '🏆', title: 'Neurona Ganadora (BMU)', desc: 'Destaca en aprendizaje no supervisado y Redes Autoorganizativas.' },
    SUPERVIVENCIA_APTO: { id: 'SUPERVIVENCIA_APTO', icon: '🦍', title: 'Supervivencia del más Apto', desc: 'Domina los operadores de cruce y mutación en Computación Evolutiva.' },
    TURING_SUPERADO: { id: 'TURING_SUPERADO', icon: '🎓', title: 'Test de Turing Superado', desc: 'Aprueba uno de los exámenes oficiales de años anteriores.' }
  },

  load() {
    const saved = localStorage.getItem('bda_quiz_stats');
    if (saved) {
      try {
        this.data = { ...this.data, ...JSON.parse(saved) };
      } catch (e) {}
    }
  },

  save() {
    localStorage.setItem('bda_quiz_stats', JSON.stringify(this.data));
  },

  addAnswer(payload) {
    let isCorrect, topic, text, justification, correctAnswer;
    if (typeof payload === 'boolean') {
      isCorrect = arguments[0];
      topic = arguments[1] || 'general';
      text = 'Pregunta desconocida';
      justification = '';
      correctAnswer = '';
    } else {
      isCorrect = payload.isCorrect;
      topic = payload.topic || 'general';
      text = payload.text || 'Pregunta desconocida';
      justification = payload.justification || '';
      correctAnswer = payload.correctAnswer || '';
    }

    this.data.questionsAnswered++;
    if (isCorrect) this.data.correctAnswers++;
    
    if (!this.data.topics[topic]) {
      this.data.topics[topic] = { total: 0, correct: 0 };
    }
    this.data.topics[topic].total++;
    if (isCorrect) this.data.topics[topic].correct++;
    
    this.data.historyQuestions.unshift({ date: Date.now(), topic, isCorrect, text, justification, correctAnswer });
    if (this.data.historyQuestions.length > 50) this.data.historyQuestions.pop();

    this.save();
    
    if (this.data.questionsAnswered === 1) this.unlock('FIRST_BLOOD');
    if (this.data.questionsAnswered === 100) this.unlock('EVOLUCION_CONTINUA');
    if (this.data.correctAnswers >= 50) this.unlock('SNIPER');
    if (this.data.questionsAnswered === 500) this.unlock('SCHOLAR');
  },

  addQuizCompleted(payload) {
    let pct, correct, total, elapsed, topic, quizName, questions;
    if (typeof payload === 'number') {
      pct = payload;
      correct = 0; total = 0; elapsed = 0; topic = 'general'; quizName = 'Simulacro'; questions = [];
    } else {
      pct = payload.pct;
      correct = payload.correct;
      total = payload.total;
      elapsed = payload.elapsed;
      topic = payload.topic || 'general';
      quizName = payload.quizName || 'Simulacro';
      questions = payload.questions || [];
    }

    this.data.quizzesCompleted++;
    
    this.data.historyQuizzes.unshift({ date: Date.now(), topic, quizName, pct, correct, total, elapsed, questions });
    if (this.data.historyQuizzes.length > 20) this.data.historyQuizzes.pop();

    this.save();
    
    if (this.data.quizzesCompleted === 1) this.unlock('AGENTE_REACTIVO');
    if (this.data.quizzesCompleted === 10) this.unlock('TEN_QUIZZES');
    if (this.data.quizzesCompleted === 50) this.unlock('FIFTY_QUIZZES');
    if (pct === 100) this.unlock('MINIMO_GLOBAL');
    
    if (total >= 10 && elapsed < 60) this.unlock('SPEEDRUNNER');
    
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) this.unlock('NIGHT_OWL');
    
    if (topic === 'simbolica' && pct > 80) this.unlock('MAESTRO_SIMBOLICO');
    if (topic === 'subsimbolica' && pct > 80) this.unlock('CONEXIONISTA_EXPERTO');
    
    if (topic === 'busqueda' && pct === 100) this.unlock('HEURISTICA_ADMISIBLE');
    if (topic === 'representacion' && pct === 100) this.unlock('RAZONADOR_BAYESIANO');
    if (topic === 'autoorganizacion' && pct === 100) this.unlock('NEURONA_GANADORA');
    if (topic === 'evolutiva' && pct === 100) this.unlock('SUPERVIVENCIA_APTO');
    
    if (topic.startsWith('examen') && pct >= 50) this.unlock('TURING_SUPERADO');
  },

  reset() {
    this.data = {
      quizzesCompleted: 0,
      questionsAnswered: 0,
      correctAnswers: 0,
      topics: {},
      achievements: [],
      historyQuizzes: [],
      historyQuestions: []
    };
    this.save();
  },

  unlock(id) {
    if (!this.data.achievements.includes(id)) {
      this.data.achievements.push(id);
      this.save();
      this.showToast(this.ACHIEVEMENTS[id]);
    }
  },

  showToast(ach) {
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `<span style="font-size: 2rem;">${ach.icon}</span> 
      <div>
        <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;">Logro Desbloqueado</div>
        <div style="font-size: 1.1rem;">${ach.title}</div>
      </div>`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  },

  renderIndexWidget(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const accuracy = this.data.questionsAnswered > 0 
      ? Math.round((this.data.correctAnswers / this.data.questionsAnswered) * 100) 
      : 0;

    container.innerHTML = `
      <div class="stats-widget">
        <a href="estadisticas/index.html?tab=tests" class="stat-item" style="text-decoration:none;">
          <span class="stat-value">${this.data.quizzesCompleted}</span>
          <span class="stat-label">Tests</span>
        </a>
        <a href="estadisticas/index.html?tab=preguntas" class="stat-item" style="text-decoration:none;">
          <span class="stat-value">${this.data.questionsAnswered}</span>
          <span class="stat-label">Preguntas</span>
        </a>
        <div class="stat-item">
          <span class="stat-value">${accuracy}%</span>
          <span class="stat-label">Precisión</span>
        </div>
        <a href="estadisticas/index.html?tab=logros" class="stat-item" style="text-decoration:none;" title="${this.data.achievements.length} de ${Object.keys(this.ACHIEVEMENTS).length}">
          <span class="stat-value">${this.data.achievements.length}</span>
          <span class="stat-label">Logros 🏆</span>
        </a>
      </div>
    `;
  }
};

// --- PAUSED TEST MANAGEMENT ---
function initResumeButton() {
  const saved = localStorage.getItem('bda_paused_test');
  if (saved) {
    try {
      const progress = JSON.parse(saved);
      const existing = document.querySelector('.resume-test-btn');
      if (existing) existing.remove();
      
      const btn = document.createElement('button');
      btn.className = 'resume-test-btn';
      btn.innerHTML = '▶️ Reanudar Test';
      btn.title = 'Reanudar el test pausado';

      btn.onclick = () => {
        let basePath = window.location.pathname;
        if (basePath.endsWith('index.html')) {
          basePath = basePath.substring(0, basePath.lastIndexOf('/index.html'));
        } else if (basePath.endsWith('/')) {
          basePath = basePath.substring(0, basePath.length - 1);
        }
        
        let targetPath = progress.path;
        if (targetPath.endsWith('index.html')) {
          targetPath = targetPath.substring(0, targetPath.lastIndexOf('/index.html'));
        } else if (targetPath.endsWith('/')) {
          targetPath = targetPath.substring(0, targetPath.length - 1);
        }

        if (basePath === targetPath && typeof window.resumePausedTest === 'function') {
          window.resumePausedTest(progress.state);
        } else {
          window.location.href = progress.path + '?resume=true';
        }
      };
      
      document.body.appendChild(btn);
    } catch (e) {
      console.error(e);
    }
  } else {
    const existing = document.querySelector('.resume-test-btn');
    if (existing) existing.remove();
  }
}

function checkPausedTestOnLoad() {
  const saved = localStorage.getItem('bda_paused_test');
  if (saved && !sessionStorage.getItem('bda_prompted_resume') && !window.location.search.includes('resume=true')) {
    sessionStorage.setItem('bda_prompted_resume', 'true');
    try {
      const progress = JSON.parse(saved);
      window.showCustomModal({
        title: 'Test en progreso',
        desc: 'Tienes un test guardado. ¿Deseas reanudarlo ahora?',
        buttons: [
          {
            text: 'Sí, reanudar',
            style: 'primary',
            action: () => {
              let basePath = window.location.pathname;
              if (basePath.endsWith('index.html')) basePath = basePath.substring(0, basePath.lastIndexOf('/index.html'));
              else if (basePath.endsWith('/')) basePath = basePath.substring(0, basePath.length - 1);
              let targetPath = progress.path;
              if (targetPath.endsWith('index.html')) targetPath = targetPath.substring(0, targetPath.lastIndexOf('/index.html'));
              else if (targetPath.endsWith('/')) targetPath = targetPath.substring(0, targetPath.length - 1);

              if (basePath === targetPath && typeof window.resumePausedTest === 'function') {
                window.resumePausedTest(progress.state);
              } else {
                window.location.href = progress.path + '?resume=true';
              }
            }
          },
          {
            text: 'No, descartar',
            style: 'danger',
            action: () => {
              localStorage.removeItem('bda_paused_test');
              const existing = document.querySelector('.resume-test-btn');
              if (existing) existing.remove();
            }
          },
          {
            text: 'Más tarde',
            style: 'secondary'
          }
        ]
      });
    } catch(e) {
      console.error(e);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initResumeButton();
  window.QuizStats.load();
  checkPausedTestOnLoad();
});
