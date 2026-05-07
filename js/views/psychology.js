/* Psychology view — Phase 3 */
window.renderPsychology = function(root, app) {
  const p = window.UPSC_PSYCHOLOGY;

  root.innerHTML = `
    <div class="mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Phase 3</div>
      <h1 class="font-serif text-3xl font-bold mt-1">UPSC Question Psychology — Decoder</h1>
    </div>

    <!-- Paper shift -->
    <div class="card p-5 lg:p-6 mb-6 border-l-4 border-l-brand-500">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">${p.paperShift.title}</div>
      <p class="mt-2 text-sm text-ink-700 dark:text-ink-200">${p.paperShift.intro}</p>
      <ol class="mt-3 space-y-2">
        ${p.paperShift.bullets.map((b,i) => `
          <li class="flex items-start gap-3 text-sm">
            <span class="w-6 h-6 rounded-md bg-brand-600 text-white grid place-items-center font-bold text-xs shrink-0">${i+1}</span>
            <span>${b}</span>
          </li>
        `).join('')}
      </ol>
    </div>

    <!-- 7 distractor patterns -->
    <div class="mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">The 7 distractor patterns UPSC reuses</div>
      <h2 class="text-2xl font-bold mb-4">Pattern → Counter-strategy</h2>
      <div class="grid md:grid-cols-2 gap-4">
        ${p.distractors.map((d, i) => `
          <div class="card p-4 card-hover">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-9 h-9 rounded-lg bg-${d.color}-50 dark:bg-${d.color}-950/40 text-${d.color}-700 dark:text-${d.color}-300 grid place-items-center">
                <i data-lucide="${d.icon}" class="w-4 h-4"></i>
              </div>
              <div class="font-bold">${d.pattern}</div>
              <span class="ml-auto text-xs font-mono text-ink-400">#${i+1}</span>
            </div>
            <p class="text-sm text-ink-500 dark:text-ink-400 mb-2"><b>What it is:</b> ${d.desc}</p>
            <p class="text-sm text-ink-700 dark:text-ink-200"><b>Counter:</b> ${d.counter}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Decision matrix -->
    <div class="grid lg:grid-cols-2 gap-5 mb-6">
      <div class="card p-5">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Decision flow</div>
        <h3 class="text-lg font-bold mb-3">${p.decisionMatrix.title}</h3>
        <ol class="space-y-2 text-sm">
          ${p.decisionMatrix.steps.map((s,i) => `
            <li class="p-3 rounded-lg bg-ink-50 dark:bg-ink-800/50 border border-ink-100 dark:border-ink-800 flex items-start gap-3">
              <span class="w-6 h-6 rounded-md bg-brand-600 text-white grid place-items-center font-bold text-xs shrink-0">${i+1}</span>
              <span>${s}</span>
            </li>
          `).join('')}
        </ol>
        <p class="mt-3 text-xs text-ink-500 italic border-l-3 border-l-brand-500 pl-3">${p.decisionMatrix.rule}</p>
      </div>

      <div class="card p-5">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Subject heuristics</div>
        <h3 class="text-lg font-bold mb-3">Trap-detection by domain</h3>
        <div class="space-y-2 text-sm">
          ${p.subjectHeuristics.map(h => `
            <div class="p-3 rounded-lg bg-ink-50 dark:bg-ink-800/50 border-l-3 border-l-brand-400">
              <div class="font-bold text-brand-700 dark:text-brand-300 mb-1">${h.subj}</div>
              <p>${h.rule}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Guess vs Skip arithmetic -->
    <div class="card p-5 mb-6">
      <div class="flex items-center justify-between mb-3">
        <div>
          <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">${p.guessSkip.title}</div>
          <h3 class="text-lg font-bold">${p.guessSkip.note}</h3>
        </div>
        <span class="pill pill-warn">EV-backed</span>
      </div>
      <div class="table-wrap">
        <table class="dossier-table">
          <thead><tr><th>Scenario</th><th>P(correct)</th><th>Expected Value</th><th>Action</th></tr></thead>
          <tbody>
            ${p.guessSkip.rows.map(r => `
              <tr>
                <td>${r.scenario}</td>
                <td class="font-mono text-xs">${r.p}</td>
                <td class="font-mono text-xs">${r.ev}</td>
                <td><span class="pill ${r.action.includes('Always') ? 'pill-success' : r.action.includes('Skip') ? 'pill-danger' : 'pill-warn'}">${r.action}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <p class="mt-3 text-sm text-ink-600 dark:text-ink-300 italic border-l-3 border-l-brand-500 pl-3"><b>Topper rule:</b> ${p.guessSkip.topperRule}</p>
    </div>

    <!-- CA → Static conversion -->
    <div class="card p-5 mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">${p.conversion.title}</div>
      <h3 class="text-lg font-bold">${p.conversion.intro}</h3>
      <div class="mt-3 table-wrap">
        <table class="dossier-table">
          <thead><tr><th style="width:30%">Raw CA item</th><th>UPSC's static-loaded version</th></tr></thead>
          <tbody>
            ${p.conversion.rows.map(r => `
              <tr>
                <td class="font-semibold">${r.raw}</td>
                <td class="text-ink-600 dark:text-ink-300">${r.static}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <p class="mt-3 text-sm border-l-3 border-l-brand-500 pl-3 italic"><b>Implication:</b> ${p.conversion.implication}</p>
    </div>

    <!-- Failure modes -->
    <div class="card p-5">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Failure modes (ranked by damage)</div>
      <h3 class="text-lg font-bold mb-3">What kills your score</h3>
      <ol class="space-y-2 text-sm">
        ${p.failureModes.map(f => `
          <li class="flex items-start gap-3 p-3 rounded-lg bg-ink-50 dark:bg-ink-800/50">
            <span class="w-7 h-7 rounded-md bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 grid place-items-center font-bold shrink-0 text-xs">#${f.rank}</span>
            <span class="flex-1"><span class="font-semibold">${f.mode}</span> — <span class="text-ink-500 dark:text-ink-400">${f.consequence}</span></span>
          </li>
        `).join('')}
      </ol>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
};
