/* MCQ engine — Phase 6 */
window.renderMcqs = function(root, app) {
  const all = window.UPSC_MCQS;
  const keys = window.UPSC_MCQ_ANSWERS;

  // Default state slot on app
  app.mcqState = app.mcqState || {
    answers: JSON.parse(localStorage.getItem('upsc-mcq-answers') || '{}'),
    flagged: JSON.parse(localStorage.getItem('upsc-mcq-flagged') || '{}'),
    revealed: JSON.parse(localStorage.getItem('upsc-mcq-revealed') || '{}'),
    filterSubj: 'All',
    filterDiff: 'All',
    showOnlyUnattempted: false,
    showOnlyFlagged: false,
    showOnlyIncorrect: false,
    timerMode: false
  };
  const s = app.mcqState;

  // Filter
  let filtered = all.slice();
  if (s.filterSubj !== 'All')      filtered = filtered.filter(q => q.subj === s.filterSubj);
  if (s.filterDiff !== 'All')      filtered = filtered.filter(q => (keys[q.id]?.diff || 'medium') === s.filterDiff);
  if (s.showOnlyUnattempted)       filtered = filtered.filter(q => !s.answers[q.id]);
  if (s.showOnlyFlagged)           filtered = filtered.filter(q => s.flagged[q.id]);
  if (s.showOnlyIncorrect)         filtered = filtered.filter(q => s.answers[q.id] && s.answers[q.id] !== keys[q.id]?.answer);

  // Stats
  const totalAttempts = Object.keys(s.answers).length;
  const correct = Object.entries(s.answers).filter(([id, ans]) => ans === keys[id]?.answer).length;
  const incorrect = totalAttempts - correct;
  const score = (correct * 2) - (incorrect * 0.66);
  const accuracy = totalAttempts ? Math.round((correct / totalAttempts) * 100) : 0;

  // Subject counts
  const subjects = ['All','Polity','Economy','Environment','Geography','History','Art','S&T','IR','Social'];
  const diffs    = ['All','easy','medium','hard'];

  function renderQuestion(q) {
    const userAns = s.answers[q.id];
    const correctAns = keys[q.id]?.answer;
    const revealed = s.revealed[q.id] || (userAns !== undefined);
    const isFlagged = !!s.flagged[q.id];
    const k = keys[q.id] || {};

    const optionsHtml = q.options.map(([letter, text]) => {
      let cls = 'mcq-option';
      if (revealed) {
        if (letter === correctAns) cls += ' correct';
        else if (userAns === letter) cls += ' incorrect';
      } else if (userAns === letter) cls += ' selected';
      return `
        <button class="${cls}" onclick="window._mcq.answer(${q.id}, '${letter}')" ${revealed && userAns ? 'disabled' : ''}>
          <span class="opt-letter">${letter}</span>
          <span class="flex-1 text-sm leading-relaxed">${text}</span>
          ${revealed && letter === correctAns ? '<i data-lucide="check" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i>' : ''}
          ${revealed && userAns === letter && letter !== correctAns ? '<i data-lucide="x" class="w-4 h-4 text-red-600 shrink-0 mt-0.5"></i>' : ''}
        </button>
      `;
    }).join('');

    const explanationHtml = revealed && k.explanation ? `
      <div class="mt-4 rounded-xl border border-ink-200 dark:border-ink-700 overflow-hidden">
        <div class="px-4 py-2.5 bg-ink-50 dark:bg-ink-800 border-b border-ink-200 dark:border-ink-700 flex items-center gap-2 flex-wrap">
          <span class="pill ${userAns === correctAns ? 'pill-success' : 'pill-danger'}">
            <i data-lucide="${userAns === correctAns ? 'check' : 'x'}" class="w-3 h-3"></i>
            ${userAns === correctAns ? 'Correct' : userAns ? 'Incorrect' : 'Revealed'}
          </span>
          ${k.diff ? `<span class="pill ${k.diff==='easy'?'pill-success':k.diff==='medium'?'pill-warn':'pill-danger'}">${k.diff}</span>` : ''}
          ${k.prob ? `<span class="pill pill-info">P(2026) ${k.prob}%</span>` : ''}
          ${k.source ? `<span class="text-[11px] text-ink-500 ml-auto">📚 ${k.source}</span>` : ''}
        </div>
        <div class="p-4 space-y-3 text-sm">
          <div><b class="text-ink-700 dark:text-ink-200">Explanation:</b> <span class="text-ink-700 dark:text-ink-200">${k.explanation}</span></div>
          ${k.trick ? `<div class="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border-l-3 border-l-amber-500"><b>🎯 Elimination trick:</b> ${k.trick}</div>` : ''}
          ${k.ca ? `<div class="p-3 rounded-lg bg-sky-50 dark:bg-sky-950/30 border-l-3 border-l-sky-500"><b>📰 CA linkage:</b> ${k.ca}</div>` : ''}
          ${k.keywords && k.keywords.length ? `
            <div>
              <b>🔑 Revision keywords:</b>
              <div class="mt-1 flex flex-wrap gap-1.5">
                ${k.keywords.map(w => `<span class="pill pill-brand text-[11px]">${w}</span>`).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    ` : '';

    return `
      <div class="card p-5 mb-4 ${userAns ? (userAns === correctAns ? 'ring-2 ring-green-200 dark:ring-green-900/50' : 'ring-2 ring-red-200 dark:ring-red-900/50') : ''}" id="mcq-${q.id}">
        <div class="flex items-start gap-3 mb-3 flex-wrap">
          <span class="w-9 h-9 rounded-lg bg-brand-600 text-white grid place-items-center font-bold shrink-0">Q${q.id}</span>
          <span class="subj-tag subj-${q.subj.replace('&','&')}">${q.subj}</span>
          ${k.diff ? `<span class="pill ${k.diff==='easy'?'pill-success':k.diff==='medium'?'pill-warn':'pill-danger'}">${k.diff}</span>` : ''}
          <button class="ml-auto p-2 rounded-lg ${isFlagged ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300' : 'hover:bg-ink-100 dark:hover:bg-ink-800 text-ink-400'}" onclick="window._mcq.flag(${q.id})">
            <i data-lucide="bookmark" class="w-4 h-4"></i>
          </button>
        </div>

        <p class="font-medium text-ink-900 dark:text-ink-50 mb-3">${q.q}</p>

        ${q.statements ? `
          <ol class="mb-3 space-y-1.5 text-sm pl-5 list-decimal marker:text-ink-400 marker:font-semibold">
            ${q.statements.map(st => `<li>${st}</li>`).join('')}
          </ol>
        ` : ''}

        ${q.stem ? `<p class="text-sm font-semibold mb-3 text-ink-700 dark:text-ink-200">${q.stem}</p>` : ''}

        <div class="space-y-2">${optionsHtml}</div>

        <div class="mt-3 flex items-center gap-2 flex-wrap">
          ${userAns ? `
            <button class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700" onclick="window._mcq.clear(${q.id})">
              <i data-lucide="rotate-ccw" class="w-3 h-3 inline mr-1"></i>Reset
            </button>
          ` : `
            <button class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700" onclick="window._mcq.reveal(${q.id})">
              <i data-lucide="eye" class="w-3 h-3 inline mr-1"></i>Reveal answer
            </button>
          `}
        </div>

        ${explanationHtml}
      </div>
    `;
  }

  root.innerHTML = `
    <div class="mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Phase 6 · Interactive engine</div>
      <h1 class="font-serif text-3xl font-bold mt-1">100 Probable MCQs + Detailed Answer Key</h1>
      <p class="mt-2 text-ink-500 dark:text-ink-400 text-sm max-w-3xl">All questions in UPSC 2024-25 style with 67% multi-statement bias. Subject distribution: Polity 14 · Economy 18 · Environment 14 · Geography 12 · History 12 · Art 4 · S&T 13 · IR 8 · Social 5.</p>
    </div>

    <!-- Stats / score panel -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
      <div class="kpi"><div class="kpi-label">Attempted</div><div class="kpi-value">${totalAttempts}<span class="text-base text-ink-400">/100</span></div><div class="kpi-sub">Progress</div></div>
      <div class="kpi"><div class="kpi-label">Correct</div><div class="kpi-value text-green-600">${correct}</div><div class="kpi-sub">+${(correct*2).toFixed(1)} marks</div></div>
      <div class="kpi"><div class="kpi-label">Incorrect</div><div class="kpi-value text-red-600">${incorrect}</div><div class="kpi-sub">-${(incorrect*0.66).toFixed(2)} marks</div></div>
      <div class="kpi"><div class="kpi-label">Score</div><div class="kpi-value">${score.toFixed(1)}</div><div class="kpi-sub">+2 / -0.66 marking</div></div>
      <div class="kpi"><div class="kpi-label">Accuracy</div><div class="kpi-value">${accuracy}%</div><div class="kpi-sub">of attempted</div></div>
    </div>

    <!-- Filter bar -->
    <div class="card p-4 mb-5">
      <div class="flex flex-wrap items-center gap-3">
        <div>
          <label class="text-[10px] uppercase tracking-widest text-ink-400 font-semibold block mb-1">Subject</label>
          <select onchange="window._mcq.setFilter('subj', this.value)" class="text-sm px-3 py-1.5 rounded-lg bg-ink-100 dark:bg-ink-800 border border-transparent focus:outline-none focus:border-brand-400">
            ${subjects.map(s2 => `<option value="${s2}" ${s.filterSubj===s2?'selected':''}>${s2}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="text-[10px] uppercase tracking-widest text-ink-400 font-semibold block mb-1">Difficulty</label>
          <select onchange="window._mcq.setFilter('diff', this.value)" class="text-sm px-3 py-1.5 rounded-lg bg-ink-100 dark:bg-ink-800 border border-transparent focus:outline-none focus:border-brand-400">
            ${diffs.map(d => `<option value="${d}" ${s.filterDiff===d?'selected':''}>${d.charAt(0).toUpperCase()+d.slice(1)}</option>`).join('')}
          </select>
        </div>
        <div class="flex items-center gap-3 ml-auto flex-wrap">
          <label class="inline-flex items-center gap-2 text-xs cursor-pointer select-none">
            <input type="checkbox" ${s.showOnlyUnattempted?'checked':''} onchange="window._mcq.toggle('showOnlyUnattempted')" class="rounded">
            Unattempted
          </label>
          <label class="inline-flex items-center gap-2 text-xs cursor-pointer select-none">
            <input type="checkbox" ${s.showOnlyFlagged?'checked':''} onchange="window._mcq.toggle('showOnlyFlagged')" class="rounded">
            Bookmarked
          </label>
          <label class="inline-flex items-center gap-2 text-xs cursor-pointer select-none">
            <input type="checkbox" ${s.showOnlyIncorrect?'checked':''} onchange="window._mcq.toggle('showOnlyIncorrect')" class="rounded">
            Incorrect
          </label>
          <button onclick="window._mcq.reset()" class="text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-300 text-red-700 dark:text-red-300 dark:border-red-900 hover:bg-red-50 dark:hover:bg-red-950/30">
            <i data-lucide="trash-2" class="w-3 h-3 inline mr-1"></i>Reset all
          </button>
        </div>
      </div>
      <div class="mt-3 pt-3 border-t border-ink-100 dark:border-ink-800 text-xs text-ink-500 flex items-center gap-2 flex-wrap">
        Showing <span class="font-bold text-ink-700 dark:text-ink-200">${filtered.length}</span> of 100 questions.
        <button onclick="document.getElementById('mcq-jumper').scrollIntoView({behavior:'smooth'})" class="ml-auto text-brand-600 hover:underline">Jump to question grid →</button>
      </div>
    </div>

    <!-- Question list -->
    <div>
      ${filtered.length ? filtered.map(renderQuestion).join('') : `
        <div class="card p-8 text-center text-ink-500">
          <i data-lucide="filter-x" class="w-8 h-8 mx-auto mb-2"></i>
          <p>No questions match the current filters.</p>
        </div>
      `}
    </div>

    <!-- Question jumper grid -->
    <div id="mcq-jumper" class="card p-5 mt-8">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-3">Question grid · click to jump</div>
      <div class="grid grid-cols-10 sm:grid-cols-12 lg:grid-cols-20 gap-1.5">
        ${all.map(q => {
          const userAns = s.answers[q.id];
          const correctAns = keys[q.id]?.answer;
          let bg = 'bg-ink-100 dark:bg-ink-800 text-ink-500';
          if (userAns) {
            bg = userAns === correctAns
              ? 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300'
              : 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300';
          } else if (s.flagged[q.id]) {
            bg = 'bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300';
          }
          return `<button class="aspect-square rounded ${bg} text-[10px] font-bold hover:scale-110 transition" onclick="document.getElementById('mcq-${q.id}').scrollIntoView({behavior:'smooth', block:'center'})">${q.id}</button>`;
        }).join('')}
      </div>
      <div class="mt-3 flex items-center gap-3 text-[10px] text-ink-500">
        <span class="inline-flex items-center gap-1"><span class="w-3 h-3 rounded bg-green-100 dark:bg-green-950/50"></span>Correct</span>
        <span class="inline-flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100 dark:bg-red-950/50"></span>Wrong</span>
        <span class="inline-flex items-center gap-1"><span class="w-3 h-3 rounded bg-amber-100 dark:bg-amber-950/50"></span>Bookmarked</span>
        <span class="inline-flex items-center gap-1"><span class="w-3 h-3 rounded bg-ink-100 dark:bg-ink-800"></span>Untouched</span>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();

  // MCQ controller
  window._mcq = {
    answer(id, letter) {
      s.answers[id] = letter;
      s.revealed[id] = true;
      this.persist();
      window.renderMcqs(root, app);
    },
    clear(id) {
      delete s.answers[id];
      delete s.revealed[id];
      this.persist();
      window.renderMcqs(root, app);
    },
    reveal(id) {
      s.revealed[id] = true;
      this.persist();
      window.renderMcqs(root, app);
    },
    flag(id) {
      if (s.flagged[id]) delete s.flagged[id]; else s.flagged[id] = true;
      this.persist();
      window.renderMcqs(root, app);
    },
    setFilter(key, val) {
      if (key === 'subj') s.filterSubj = val;
      if (key === 'diff') s.filterDiff = val;
      window.renderMcqs(root, app);
    },
    toggle(key) {
      s[key] = !s[key];
      window.renderMcqs(root, app);
    },
    reset() {
      if (!confirm('Reset all 100 MCQ answers, bookmarks and reveals? This cannot be undone.')) return;
      s.answers = {}; s.flagged = {}; s.revealed = {};
      this.persist();
      window.renderMcqs(root, app);
    },
    persist() {
      localStorage.setItem('upsc-mcq-answers', JSON.stringify(s.answers));
      localStorage.setItem('upsc-mcq-flagged', JSON.stringify(s.flagged));
      localStorage.setItem('upsc-mcq-revealed', JSON.stringify(s.revealed));
    }
  };
};
