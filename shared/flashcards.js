document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const topic = urlParams.get('topic');
  
  const titleEl = document.getElementById('topic-title');
  const titles = {
    'introduccion': 'T1: Introducción a la IA',
    'busqueda': 'T2: Búsqueda',
    'representacion': 'T3: Representación del conocimiento',
    'razonamiento': 'T4: Razonamiento',
    'planificacion': 'T5: Planificación',
    'conexionistas': 'T6: Sistemas Conexionistas',
    'neurona': 'T7: Neurona Formal y Arquitecturas RNA',
    'feedforward': 'T8: Redes Feedforward',
    'autoorganizacion': 'T9: Redes Autoorganizativas',
    'evolutiva': 'T10: Computación Evolutiva'
  };
  if(topic && titles[topic]) {
    titleEl.textContent = `Flashcards: ${titles[topic]}`;
  }
  
  const category = urlParams.get('category');
  const catName = urlParams.get('catName');
  let cards = [];
  if (window.FlashcardsData && topic && window.FlashcardsData[topic]) {
    cards = window.FlashcardsData[topic].map(c => ({...c, topic: topic}));
    if (category) {
      cards = cards.filter(c => c.category === category);
      if(cards.length === 0) cards = [{q: `No hay flashcards para la categoría: ${catName || category}`, a: ""}];
      titleEl.textContent = `Flashcards: ${catName || category}`;
    }
  } else if (window.FlashcardsData && !topic) {
    const topicOrder = ['introduccion', 'busqueda', 'representacion', 'razonamiento', 'planificacion', 'conexionistas', 'neurona', 'feedforward', 'autoorganizacion', 'evolutiva'];
    cards = [];
    topicOrder.filter(t => window.FlashcardsData[t]).forEach(t => {
      let topicCards = window.FlashcardsData[t].map(c => ({ ...c, topic: t }));
      cards = cards.concat(topicCards);
    });
    titleEl.textContent = 'Flashcards: Todos los temas';
  } else {
    cards = [{q: "Cargando flashcards o no hay disponibles para este tema...", a: ""}];
  }
  
  if (topic) {
    cards = cards.sort(() => Math.random() - 0.5);
  }
  
  let currentIndex = 0;
  
  const wrapperEl = document.getElementById('flashcards-wrapper');
  const currEl = document.getElementById('current-card');
  const totalEl = document.getElementById('total-cards');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  
  totalEl.textContent = cards.length;
  
  const scrollbarWrapper = document.getElementById('scrollbar-wrapper');
  const sliderEl = document.getElementById('card-slider');
  const markersEl = document.getElementById('scrollbar-markers');
  const labelsEl = document.getElementById('scrollbar-labels');

  if (scrollbarWrapper && cards.length > 0) {
    scrollbarWrapper.style.display = 'block';
    sliderEl.max = cards.length - 1;
    sliderEl.value = 0;
    
    sliderEl.addEventListener('input', (e) => {
      currentIndex = parseInt(e.target.value);
      updateCards();
    });

    if (!topic && Object.keys(window.FlashcardsData).length > 0) {
      markersEl.style.display = 'flex';
      labelsEl.style.display = 'block';
      
      const topicColors = {
        'introduccion': '#3b82f6',
        'busqueda': '#8b5cf6',
        'representacion': '#10b981',
        'razonamiento': '#ef4444',
        'planificacion': '#f59e0b',
        'conexionistas': '#06b6d4',
        'neurona': '#ec4899',
        'feedforward': '#14b8a6',
        'autoorganizacion': '#f97316',
        'evolutiva': '#8b5cf6'
      };
      
      let currentOffset = 0;
      const topicOrder = ['introduccion', 'busqueda', 'representacion', 'razonamiento', 'planificacion', 'conexionistas', 'neurona', 'feedforward', 'autoorganizacion', 'evolutiva'];
      topicOrder.filter(t => window.FlashcardsData[t]).forEach(t => {
        const count = window.FlashcardsData[t].length;
        if(count === 0) return;
        const percentage = (count / cards.length) * 100;
        
        const segment = document.createElement('div');
        segment.style.width = `${percentage}%`;
        segment.style.height = '100%';
        segment.style.backgroundColor = topicColors[t] || 'var(--accent-primary)';
        segment.title = titles[t] || t;
        markersEl.appendChild(segment);
        
        
        const shortTitles = {
          'introduccion': 'T1: Intro',
          'busqueda': 'T2: Búsqueda',
          'representacion': 'T3: Repres.',
          'razonamiento': 'T4: Razonam.',
          'planificacion': 'T5: Planific.',
          'conexionistas': 'T6: Conexion.',
          'neurona': 'T7: Neurona',
          'feedforward': 'T8: Feedf.',
          'autoorganizacion': 'T9: Autoorg.',
          'evolutiva': 'T10: Evolutiva'
        };
        const labelText = shortTitles[t] || t;

        const label = document.createElement('div');
        label.textContent = labelText;
        label.style.position = 'absolute';
        label.style.left = `${(currentOffset / cards.length) * 100}%`;
        label.style.transform = 'rotate(-35deg)';
        label.style.transformOrigin = 'left bottom';
        label.style.bottom = '0px';
        label.style.whiteSpace = 'nowrap';
        labelsEl.appendChild(label);
        
        currentOffset += count;
      });
    } else {
      labelsEl.style.display = 'none';
      // markersEl acts as the grey track background, so we don't hide it
    }
  }
  
  const topicColorsRGB = {
    'introduccion': '59, 130, 246',
    'busqueda': '139, 92, 246',
    'representacion': '16, 185, 129',
    'razonamiento': '239, 68, 68',
    'planificacion': '245, 158, 11',
    'conexionistas': '6, 182, 212',
    'neurona': '236, 72, 153',
    'feedforward': '20, 184, 166',
    'autoorganizacion': '249, 115, 22',
    'evolutiva': '139, 92, 246'
  };

  function parseMarkdown(text) {
    if (!text) return '';
    return window.marked ? marked.parse(text) : text;
  }

  function initCards() {
    wrapperEl.innerHTML = '';
    cards.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'flashcard-container';
      cardEl.dataset.index = index;
      
      const tName = card.topic ? (titles[card.topic] || card.topic) : "";
      const cName = card.category || "";
      const displayTopic = tName ? 'block' : 'none';
      const displayCat = cName ? 'block' : 'none';
      
      const topicRgb = card.topic ? (topicColorsRGB[card.topic] || '99, 102, 241') : '99, 102, 241';
      cardEl.style.setProperty('--topic-color-rgb', topicRgb);

      cardEl.innerHTML = `
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <div class="card-badges">
              <span class="badge topic-badge" style="display: ${displayTopic}">${tName}</span>
              <span class="badge category-badge" style="display: ${displayCat}">${cName}</span>
            </div>
            <div class="flashcard-content">${parseMarkdown(card.q)}</div>
            <div class="flashcard-hint">Haz clic para voltear</div>
          </div>
          <div class="flashcard-back">
            <div class="card-badges">
              <span class="badge topic-badge" style="display: ${displayTopic}">${tName}</span>
              <span class="badge category-badge" style="display: ${displayCat}">${cName}</span>
            </div>
            <div class="flashcard-content">${parseMarkdown(card.a)}</div>
          </div>
        </div>
      `;

      cardEl.addEventListener('click', () => {
        if (index === currentIndex) {
          cardEl.classList.toggle('flipped');
        } else if (index === currentIndex - 1 || index === currentIndex + 1) {
          currentIndex = index;
          updateCards();
        }
      });

      wrapperEl.appendChild(cardEl);
    });
  }

  function updateCards() {
    const allCards = document.querySelectorAll('.flashcard-container');
    allCards.forEach((el, index) => {
      el.classList.remove('card-active', 'card-prev', 'card-next', 'card-hidden-left', 'card-hidden-right');
      
      if (index === currentIndex) {
        el.classList.add('card-active');
      } else if (index === currentIndex - 1) {
        el.classList.add('card-prev');
        el.classList.remove('flipped');
      } else if (index === currentIndex + 1) {
        el.classList.add('card-next');
        el.classList.remove('flipped');
      } else if (index < currentIndex - 1) {
        el.classList.add('card-hidden-left');
        el.classList.remove('flipped');
      } else {
        el.classList.add('card-hidden-right');
        el.classList.remove('flipped');
      }
    });

    currEl.textContent = currentIndex + 1;
    
    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === cards.length - 1;
    btnPrev.style.opacity = btnPrev.disabled ? '0.5' : '1';
    btnNext.style.opacity = btnNext.disabled ? '0.5' : '1';
    
    if (sliderEl) {
      sliderEl.value = currentIndex;
    }
  }

  btnNext.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCards();
    }
  });
  
  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCards();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'd') {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCards();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
      if (currentIndex > 0) {
        currentIndex--;
        updateCards();
      }
    } else if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'ArrowDown' || e.key === 's') {
      const activeCard = document.querySelector('.flashcard-container.card-active');
      if (activeCard) {
        activeCard.classList.toggle('flipped');
      }
      e.preventDefault();
    }
  });
  
  initCards();
  updateCards();
  
  if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
    MathJax.typesetPromise();
  }
});
// Slider code is intact
