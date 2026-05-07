/* Strategy view — Phase 7 */
window.renderStrategy = function(root, app) {
  const st = window.UPSC_STRATEGY;

  root.innerHTML = `
    <div class="mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Phase 7</div>
      <h1 class="font-serif text-3xl font-bold mt-1">Strategic Summary &amp; Attempt Strategy</h1>
    </div>

    <!-- 17-day plan -->
    <div class="card p-5 mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">17-day plan</div>
      <h3 class="text-lg font-bold mb-3">Subject-wise priority order for final 17 days</h3>
      <div class="overflow-auto">
        <table class="dossier-table">
          <thead><tr><th>Days</th><th>Subject block</th><th>Goal</th><th>Hours/day</th></tr></thead>
          <tbody>
            ${st.plan17.map(p => `
              <tr>
                <td class="font-bold">${p.days}</td>
                <td>${p.block}</td>
                <td class="text-ink-500">${p.goal}</td>
                <td class="text-center"><span class="pill pill-info">${p.hours}h</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <p class="text-xs text-ink-500 italic mt-3">Hours indicative — adjust to your existing baseline. The discipline that matters is finishing one full revision pass + at least one timed mock.</p>
    </div>

    <!-- Top 50 must-revise -->
    <div class="card overflow-hidden mb-6">
      <div class="px-5 py-4 border-b border-ink-200 dark:border-ink-800">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Last-7-day priority</div>
        <h3 class="text-lg font-bold">Top 50 must-revise areas</h3>
      </div>
      <div class="overflow-auto">
        <table class="dossier-table">
          <thead><tr><th style="width:40px">#</th><th>Topic</th><th>Subject</th><th>Why critical</th></tr></thead>
          <tbody>
            ${st.top50.map((row, i) => `
              <tr>
                <td class="text-ink-400 font-mono">${i+1}</td>
                <td class="font-semibold">${row[0]}</td>
                <td><span class="subj-tag subj-${row[1].split('/')[0].replace('&','&').trim()}">${row[1]}</span></td>
                <td class="text-ink-500">${row[2]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Confidence bands + pass strategy -->
    <div class="grid lg:grid-cols-2 gap-5 mb-6">
      <div class="card p-5">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">EV-backed action map</div>
        <h3 class="text-lg font-bold mb-3">Confidence band → Action</h3>
        <div class="overflow-auto">
          <table class="dossier-table text-xs">
            <thead><tr><th>Band</th><th>Means</th><th>Action</th><th>EV</th></tr></thead>
            <tbody>
              ${st.confidenceBands.map(b => `
                <tr>
                  <td class="font-semibold">${b.band}</td>
                  <td class="text-ink-500">${b.meaning}</td>
                  <td><span class="pill ${b.action === 'Mark' ? 'pill-success' : b.action === 'Skip' ? 'pill-danger' : 'pill-warn'}">${b.action}</span></td>
                  <td class="font-mono ${b.ev.includes('-') ? 'text-red-600' : 'text-green-600'}">${b.ev}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="card p-5">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">2-hour paper</div>
        <h3 class="text-lg font-bold mb-3">Pass strategy</h3>
        <div class="space-y-3">
          ${st.passStrategy.map((p, i) => `
            <div class="flex items-start gap-3">
              <span class="w-9 h-9 rounded-lg bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 grid place-items-center font-bold shrink-0">${i+1}</span>
              <div>
                <div class="font-semibold">${p.pass}</div>
                <div class="text-sm text-ink-500">${p.goal}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Attempt by accuracy -->
    <div class="card p-5 mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Target attempt counts</div>
      <h3 class="text-lg font-bold mb-3">By accuracy band</h3>
      <div class="overflow-auto">
        <table class="dossier-table">
          <thead><tr><th>Accuracy</th><th>Optimal attempts</th><th>Expected raw</th><th>Notes</th></tr></thead>
          <tbody>
            ${st.attemptByAccuracy.map(a => `
              <tr>
                <td class="font-bold">${a.acc}</td>
                <td class="text-center">${a.attempts}</td>
                <td class="text-center font-mono ${typeof a.expected === 'string' ? 'text-red-600' : 'text-green-600'}">${a.expected}</td>
                <td class="text-ink-500 text-xs">${a.note}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <p class="mt-3 text-xs text-ink-500 italic">${st.cutoffNote}</p>
    </div>

    <!-- Best-ROI + low-effort grids -->
    <div class="grid lg:grid-cols-2 gap-5 mb-6">
      <div class="card p-5">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Best-ROI clusters</div>
        <h3 class="text-lg font-bold mb-3">Low effort, high yield</h3>
        <ol class="space-y-2 text-sm">
          ${st.bestROI.map((b, i) => `
            <li class="flex items-start gap-3 p-2.5 rounded-lg hover:bg-ink-50 dark:hover:bg-ink-800/50">
              <span class="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 grid place-items-center font-bold text-xs shrink-0">${i+1}</span>
              <span>${b}</span>
            </li>
          `).join('')}
        </ol>
      </div>
      <div class="card p-5">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Low-effort high-score</div>
        <h3 class="text-lg font-bold mb-3">Static cluster wins</h3>
        <ul class="space-y-2 text-sm">
          ${st.lowEffortHigh.map(l => `
            <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-500 mt-0.5 shrink-0"></i><span>${l}</span></li>
          `).join('')}
        </ul>
        <div class="mt-5 pt-4 border-t border-ink-100 dark:border-ink-800">
          <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">Ideal revision strategy</div>
          <ul class="space-y-2 text-sm">
            ${st.ideal.map(l => `<li class="flex items-start gap-2"><i data-lucide="dot" class="w-5 h-5 text-brand-500 -mt-0.5 shrink-0"></i><span>${l}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    </div>

    <!-- Mistakes -->
    <div class="card p-5 mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Most dangerous mistakes</div>
      <h3 class="text-lg font-bold mb-3">Ranked by damage-per-occurrence</h3>
      <ol class="space-y-2 text-sm">
        ${st.mistakes.map((m, i) => `
          <li class="flex items-start gap-3 p-3 rounded-lg bg-red-50/60 dark:bg-red-950/20 border-l-3 border-l-red-500">
            <span class="w-7 h-7 rounded-md bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 grid place-items-center font-bold shrink-0 text-xs">#${i+1}</span>
            <span>${m}</span>
          </li>
        `).join('')}
      </ol>
    </div>

    <!-- Topper ops -->
    <div class="card p-5 mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Operational notes</div>
      <h3 class="text-lg font-bold mb-3">How toppers think during Prelims</h3>
      <ul class="space-y-2 text-sm">
        ${st.topperOps.map(t => `<li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-500 mt-0.5 shrink-0"></i><span>${t}</span></li>`).join('')}
      </ul>
    </div>

    <!-- Top 100 master list -->
    <div class="card p-5 mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Master list</div>
      <h3 class="text-lg font-bold mb-3">Top 100 most-important topics — by ROI</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        ${Object.entries(st.top100).map(([subj, items]) => `
          <div class="rounded-lg p-4 bg-ink-50 dark:bg-ink-800/50 border border-ink-100 dark:border-ink-800">
            <div class="font-bold text-brand-700 dark:text-brand-300 mb-2 text-sm">${subj}</div>
            <ul class="space-y-1 text-xs">
              ${items.map(i => `<li class="flex items-start gap-1.5"><span class="text-ink-400">•</span><span>${i}</span></li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Closing -->
    <div class="card p-5 lg:p-6 border-l-4 border-l-brand-500 hero-mesh">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Closing note</div>
      <h3 class="text-xl font-bold mb-3">Three reminders before the exam</h3>
      <ol class="space-y-3 text-sm">
        ${st.closing.map((c, i) => `
          <li class="flex items-start gap-3">
            <span class="w-7 h-7 rounded-md bg-brand-600 text-white grid place-items-center font-bold shrink-0">${i+1}</span>
            <span>${c}</span>
          </li>
        `).join('')}
      </ol>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
};
