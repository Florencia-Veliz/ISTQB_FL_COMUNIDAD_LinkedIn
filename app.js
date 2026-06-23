// ===== Navegación suave =====
function scrollToId(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

// ===== Chips de capítulos (sección Material) =====
const CAP_LABELS = {
  1:"Fundamentos", 2:"Ciclo de vida", 3:"Pruebas estáticas",
  4:"Diseño de pruebas", 5:"Gestión", 6:"Herramientas"
};

function buildChapterLinks(){
  const wrap = document.getElementById('chapterLinks');
  wrap.innerHTML = '';
  Object.keys(FICHAS).forEach(cap=>{
    const chip = document.createElement('div');
    chip.className = 'chapter-chip';
    chip.innerHTML = `<div class="num">${cap}</div><div class="lbl">${CAP_LABELS[cap]}</div>`;
    chip.onclick = () => {
      scrollToId('fichas');
      setTimeout(()=>selectFlashChapter(cap), 350);
    };
    wrap.appendChild(chip);
  });
}

// ===== FICHAS DE ESTUDIO (flashcards) =====
let flashState = {
  chapter: null,
  cards: [],
  index: 0,
  flipped: false,
  correct: new Set(),
  review: new Set(),
  finished: false
};

function buildFlashChapterChips(){
  const wrap = document.getElementById('flashChapters');
  wrap.innerHTML = '';
  Object.keys(FICHAS).forEach(cap=>{
    const chip = document.createElement('button');
    chip.className = 'flash-chip';
    chip.id = 'flashchip-' + cap;
    chip.textContent = 'Cap. ' + cap;
    chip.onclick = () => selectFlashChapter(cap);
    wrap.appendChild(chip);
  });
}

function selectFlashChapter(cap){
  document.querySelectorAll('.flash-chip').forEach(c=>c.classList.remove('active'));
  const chip = document.getElementById('flashchip-' + cap);
  if(chip) chip.classList.add('active');

  flashState = {
    chapter: cap,
    cards: FICHAS[cap].cards,
    index: 0,
    flipped: false,
    correct: new Set(),
    review: new Set(),
    finished: false
  };
  renderFlashCard();
}

function renderFlashCard(){
  const container = document.getElementById('flashContainer');
  if(!flashState.chapter){
    container.innerHTML = '<div class="flash-empty">👆 Elegí un capítulo arriba para empezar a repasar.</div>';
    return;
  }

  const total = flashState.cards.length;

  if(flashState.finished){
    container.innerHTML = `
      <div class="flash-card flash-done">
        <h3>🎉 ¡Mazo completo!</h3>
        <p>${flashState.correct.size} correctas · ${flashState.review.size} a repasar de ${total}</p>
        <button onclick="restartFlashDeck()">Repetir todas</button>
      </div>`;
    return;
  }

  const card = flashState.cards[flashState.index];
  const isLast = flashState.index === total - 1;

  let html = `
    <div class="flash-progress">
      <span>Tarjeta ${flashState.index + 1} de ${total}</span>
      <span class="stats"><span class="ok">${flashState.correct.size} correctas</span><span class="rev">${flashState.review.size} a repasar</span></span>
    </div>
    <div class="flash-card" onclick="flipFlashCard()">
      <div class="flash-side-label ${flashState.flipped ? 'answer' : ''}">${flashState.flipped ? 'Respuesta' : 'Pregunta'}</div>
      <div class="flash-text">${flashState.flipped ? card.a : card.q}</div>
      ${!flashState.flipped ? '<div class="flash-hint">Clic para ver la respuesta</div>' : ''}
    </div>`;

  if(flashState.flipped){
    html += `
      <div class="flash-judge">
        <button class="no-btn" onclick="judgeFlashCard(false)">✗ Repasar</button>
        <button class="yes-btn" onclick="judgeFlashCard(true)">✓ Lo sé</button>
      </div>`;
  }

  html += `
    <div class="flash-nav">
      <button class="flash-nav-btn" onclick="navigateFlash(-1)" ${flashState.index===0?'disabled':''}>← Anterior</button>
      <button class="flash-nav-btn" onclick="navigateFlash(1)">${isLast ? 'Finalizar' : 'Siguiente →'}</button>
    </div>`;

  container.innerHTML = html;
}

function flipFlashCard(){
  flashState.flipped = !flashState.flipped;
  renderFlashCard();
}

function judgeFlashCard(knewIt){
  const card = flashState.cards[flashState.index];
  flashState.correct.delete(card.q);
  flashState.review.delete(card.q);
  if(knewIt) flashState.correct.add(card.q);
  else flashState.review.add(card.q);
  navigateFlash(1);
}

function navigateFlash(dir){
  flashState.flipped = false;
  if(dir > 0 && flashState.index === flashState.cards.length - 1){
    flashState.finished = true;
  } else {
    flashState.index = Math.max(0, Math.min(flashState.cards.length - 1, flashState.index + dir));
  }
  renderFlashCard();
}

function restartFlashDeck(){
  flashState.index = 0;
  flashState.flipped = false;
  flashState.finished = false;
  flashState.correct = new Set();
  flashState.review = new Set();
  renderFlashCard();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  buildChapterLinks();
  buildFlashChapterChips();
  renderFlashCard();
});
