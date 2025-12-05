// script.js

const EXAM_DURATION_SECONDS = 90 * 60; // 90 minutos
const PASSING_PERCENT = 70;

let currentIndex = 0;      // índice da questão atual
let answers = {};          // { qid: "texto da opção" }
let remainingSeconds = EXAM_DURATION_SECONDS;
let timerInterval = null;

function startQuiz() {
  const saved = loadState();
  if (saved) {
    currentIndex = saved.currentIndex;
    answers = saved.answers;
    remainingSeconds = saved.remainingSeconds;
  }
  renderQuestion();
  startTimer();
}

function loadState() {
  try {
    const raw = localStorage.getItem("aws_quiz_state");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveState() {
  const state = { currentIndex, answers, remainingSeconds };
  localStorage.setItem("aws_quiz_state", JSON.stringify(state));
}

function clearState() {
  localStorage.removeItem("aws_quiz_state");
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function startTimer() {
  const timerEl = document.getElementById("timer");
  if (!timerEl) return;

  timerEl.textContent = formatTime(remainingSeconds);

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    remainingSeconds--;
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      remainingSeconds = 0;
      timerEl.textContent = "00:00";
      finishQuiz(); // tempo esgotado
    } else {
      timerEl.textContent = formatTime(remainingSeconds);
      saveState();
    }
  }, 1000);
}

function renderQuestion() {
  const container = document.getElementById("quiz-container");
  const total = QUESTIONS.length;
  const q = QUESTIONS[currentIndex];
  const selected = answers[q.id] || null;

  container.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-sm mb-3">
          <div class="card-body">
            <h5 class="card-title mb-2">
              Questão ${currentIndex + 1} de ${total}
            </h5>
            <p class="text-muted mb-3">
              Você pode pular; questões não respondidas contam como erradas.
            </p>

            <p class="fw-semibold">${q.text}</p>

            ${q.options.map((opt, idx) => `
              <div class="form-check mb-1">
                <input class="form-check-input"
                       type="radio"
                       name="answer"
                       id="opt${idx}"
                       value="${opt.replace(/"/g, '&quot;')}"
                       ${selected === opt ? "checked" : ""}>
                <label class="form-check-label" for="opt${idx}">
                  ${opt}
                </label>
              </div>
            `).join("")}

            <div class="d-flex justify-content-between mt-4">
              ${currentIndex > 0 ? `
                <button class="btn btn-outline-secondary" id="btn-prev">
                  &laquo; Anterior
                </button>
              ` : `<span></span>`}

              <div class="d-flex gap-2">
                <button class="btn btn-danger" id="btn-finish">
                  Finalizar prova
                </button>

                ${currentIndex < total - 1 ? `
                  <button class="btn btn-primary" id="btn-next">
                    Próxima &raquo;
                  </button>
                ` : `
                  <button class="btn btn-primary" id="btn-next">
                    Enviar e ver resultado
                  </button>
                `}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnFinish = document.getElementById("btn-finish");

  if (btnPrev) btnPrev.addEventListener("click", () => {
    saveAnswer();
    if (currentIndex > 0) {
      currentIndex--;
      saveState();
      renderQuestion();
    }
  });

  btnNext.addEventListener("click", () => {
    saveAnswer();
    if (currentIndex < total - 1) {
      currentIndex++;
      saveState();
      renderQuestion();
    } else {
      finishQuiz();
    }
  });

  btnFinish.addEventListener("click", () => {
    saveAnswer();
    finishQuiz();
  });
}

function saveAnswer() {
  const q = QUESTIONS[currentIndex];
  const radioList = document.querySelectorAll('input[name="answer"]');
  let selected = null;
  radioList.forEach(r => {
    if (r.checked) selected = r.value;
  });
  answers[q.id] = selected; // pode ser null
}

function finishQuiz() {
  clearInterval(timerInterval);

  const results = [];
  let score = 0;
  const total = QUESTIONS.length;

  QUESTIONS.forEach(q => {
    const selected = answers[q.id] || null;
    const isCorrect = selected === q.answer;
    if (isCorrect) score++;
    results.push({
      text: q.text,
      selected,
      correct: q.answer,
      explanation: q.explanation,
      is_correct: isCorrect
    });
  });

  const percent = total > 0 ? (score / total) * 100 : 0;
  const passed = percent >= PASSING_PERCENT;

  renderResult({ score, total, percent, passed, results });
  clearState();
}

function renderResult(data) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-lg-8">

        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h4 class="card-title mb-2">Resultado geral</h4>
            <p class="mb-1">
              Você acertou <strong>${data.score}</strong> de <strong>${data.total}</strong> questões
              (${data.percent.toFixed(2)}%).
            </p>
            <p class="mb-2">
              Critério de aprovação: <strong>${PASSING_PERCENT}%</strong>.
            </p>

            ${data.passed ? `
              <div class="alert alert-success mb-3">
                Parabéns, você foi <strong>APROVADO</strong> neste simulado!
              </div>
            ` : `
              <div class="alert alert-danger mb-3">
                Você foi <strong>REPROVADO</strong> neste simulado.
                Revise as questões incorretas e tente novamente.
              </div>
            `}

            <div class="progress" style="height: 20px;">
              <div class="progress-bar ${data.passed ? "bg-success" : "bg-danger"}"
                   role="progressbar"
                   style="width: ${data.percent.toFixed(0)}%"
                   aria-valuenow="${data.percent.toFixed(0)}"
                   aria-valuemin="0" aria-valuemax="100">
                ${data.percent.toFixed(0)}%
              </div>
            </div>
          </div>
        </div>

        ${data.results.map((r, idx) => `
          <div class="card shadow-sm mb-3">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Questão ${idx + 1}</h6>
              <p class="fw-semibold mb-2">${r.text}</p>

              ${r.is_correct ? `
                <span class="badge bg-success mb-2">Correta</span>
                <p class="mb-1">Sua resposta: <strong>${r.selected}</strong></p>
              ` : `
                <span class="badge bg-danger mb-2">Incorreta</span>
                <p class="mb-1">
                  Sua resposta: <strong>${r.selected || "não respondida"}</strong>
                </p>
                <p class="mb-1">
                  Resposta correta: <strong>${r.correct}</strong>
                </p>
                <div class="alert alert-info mt-2 mb-0" role="alert">
                  <strong>Explicação:</strong> ${r.explanation}
                </div>
              `}
            </div>
          </div>
        `).join("")}

        <div class="d-flex justify-content-between my-3">
          <button class="btn btn-outline-primary" id="btn-restart">
            Refazer simulado
          </button>
          <span class="text-muted align-self-center">
            Revise principalmente as questões marcadas em vermelho.
          </span>
        </div>

      </div>
    </div>
  `;

  document.getElementById("btn-restart").addEventListener("click", () => {
    currentIndex = 0;
    answers = {};
    remainingSeconds = EXAM_DURATION_SECONDS;
    saveState();
    renderQuestion();
    startTimer();
  });
}

// inicia tudo
document.addEventListener("DOMContentLoaded", startQuiz);
