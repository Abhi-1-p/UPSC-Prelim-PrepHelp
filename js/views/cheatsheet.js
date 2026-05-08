/* Cheat sheet view — Phase 4 */
window.renderCheatsheet = function(root, app) {
  const cs = window.UPSC_CHEATS;
  const id = app.cheatActive || 'polity';
  const c  = cs[id];

  const ids = ['polity','economy','environment','geography','history','art','st','ir','social'];

  // Helper renderers
  function renderNuggets(nuggets) {
    if (!nuggets) return '';
    return `
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">🎯 Top must-master nuggets</div>
      <div class="grid lg:grid-cols-2 gap-3 mb-6">
        ${nuggets.map(n => `
          <div class="card p-4 card-hover">
            <div class="flex items-start gap-3">
              <span class="w-7 h-7 rounded-md text-white grid place-items-center font-bold text-xs shrink-0" style="background:${c.color}">${n.i}</span>
              <div class="flex-1 min-w-0">
                <div class="font-bold text-sm text-ink-900 dark:text-ink-50">${n.k}</div>
                <p class="text-sm mt-1 text-ink-700 dark:text-ink-200 leading-relaxed">${n.v}</p>
                ${n.why ? `<p class="text-xs mt-2 text-ink-500 italic"><i data-lucide="lightbulb" class="w-3 h-3 inline mr-1"></i>${n.why}</p>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderTables(tables) {
    if (!tables || !tables.length) return '';
    return tables.map(t => `
      <div class="card mb-6 overflow-hidden">
        <div class="px-5 py-3 border-b border-ink-200 dark:border-ink-800 flex items-center gap-2">
          <i data-lucide="table" class="w-4 h-4 text-brand-500"></i>
          <div class="font-bold">${t.title}</div>
        </div>
        <div class="overflow-auto">
          <table class="dossier-table">
            <thead><tr>${t.head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>
              ${t.rows.map(r => `<tr>${r.map((c,i) => `<td class="${i===0?'font-semibold':''}">${c}</td>`).join('')}</tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `).join('');
  }

  function renderSections(sections) {
    if (!sections || !sections.length) return '';
    return sections.map((s, i) => `
      <details class="card mb-4 overflow-hidden group" ${i===0 ? 'open' : ''}>
        <summary class="accordion-trigger list-none cursor-pointer">
          <i data-lucide="chevron-right" class="chev w-4 h-4 text-ink-400 group-open:rotate-90 transition-transform"></i>
          <span class="flex-1">${s.title}</span>
        </summary>
        <div class="accordion-body">
          <div class="prose-dossier">${s.body}</div>
        </div>
      </details>
    `).join('');
  }

  function renderHooks(hooks) {
    if (!hooks) return '';
    return `
      <div class="card p-5 mb-6">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">One-line memory hooks</div>
        <ul class="space-y-2 text-sm">
          ${hooks.map(h => `<li class="flex items-start gap-2"><i data-lucide="zap" class="w-4 h-4 text-brand-500 mt-0.5 shrink-0"></i><span>${h}</span></li>`).join('')}
        </ul>
      </div>
    `;
  }

  function renderConfusions(conf) {
    if (!conf || !conf.length) return '';
    return `
      <div class="card mb-6 overflow-hidden">
        <div class="px-5 py-3 border-b border-ink-200 dark:border-ink-800 flex items-center gap-2">
          <i data-lucide="git-compare" class="w-4 h-4 text-brand-500"></i>
          <div class="font-bold">Confusing pairs — distinguish cleanly</div>
        </div>
        <div class="overflow-auto">
          <table class="dossier-table">
            <thead><tr><th style="width:30%">Pair</th><th>Distinction</th></tr></thead>
            <tbody>
              ${conf.map(p => `<tr><td class="font-semibold">${p[0]}</td><td>${p[1]}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderColdList(cold) {
    if (!cold) return '';
    return `
      <div class="card p-5 mb-6">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">${cold.title}</div>
        <div class="flex flex-wrap gap-1.5">
          ${cold.items.map(i => `<span class="pill pill-brand text-[11px]">${i}</span>`).join('')}
        </div>
      </div>
    `;
  }

  function renderThumbRules(rules) {
    if (!rules) return '';
    return `
      <div class="card p-5 mb-6">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">Map-based thumb rules</div>
        <ul class="space-y-2 text-sm">
          ${rules.map(r => `<li class="flex items-start gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-brand-500 mt-0.5 shrink-0"></i><span>${r}</span></li>`).join('')}
        </ul>
      </div>
    `;
  }

  root.innerHTML = `
    <div class="mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Phase 4 · Cheat sheet</div>
      <h1 class="font-serif text-3xl font-bold mt-1">${c.label}</h1>
      <p class="mt-2 text-ink-500 dark:text-ink-400 text-sm max-w-3xl">Designed for last 7-day revision. Information density prioritised over readability flow. Verify every figure against primary source before quoting in writing.</p>
    </div>

    <!-- Subject pills -->
    <div class="flex flex-wrap gap-2 mb-6">
      ${ids.map(sid => {
        const s = cs[sid];
        const active = sid === id;
        return `
          <button onclick="window._upscApp.cheatActive='${sid}'; window._upscApp.setView('cheatsheet')"
            class="px-3.5 py-1.5 text-sm rounded-full border transition flex items-center gap-2 ${active ? 'text-white border-transparent' : 'bg-white dark:bg-ink-800 border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-ink-300'}"
            style="${active ? `background:${s.color};` : ''}">
            <span>${s.label}</span>
          </button>
        `;
      }).join('')}
    </div>

    ${renderNuggets(c.nuggets)}
    ${renderHooks(c.hooks)}
    ${renderTables(c.tables)}
    ${renderColdList(c.cold)}
    ${renderThumbRules(c.thumbRules)}
    ${renderSections(c.sections)}
    ${renderConfusions(c.confusions)}
  `;

  if (window.lucide) lucide.createIcons();
};
