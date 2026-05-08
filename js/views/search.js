/* Global search view */
window.renderSearch = function(root, app) {
  const q = (app.globalSearch || '').trim().toLowerCase();

  if (!q) {
    root.innerHTML = `
      <div class="text-center py-16">
        <i data-lucide="search" class="w-10 h-10 mx-auto mb-3 text-ink-300"></i>
        <h2 class="text-2xl font-bold mb-2">Global search</h2>
        <p class="text-ink-500 max-w-md mx-auto text-sm">Type any topic, article, scheme, mission, or keyword. Indexes the entire dossier — cheat sheets, MCQs, themes, heat maps and the appendix.</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  // Build search results from data
  const results = { mcqs: [], cheats: [], themes: [], topics: [], articles: [] };

  // MCQs
  (window.UPSC_MCQS || []).forEach(m => {
    const blob = (m.q + ' ' + (m.statements||[]).join(' ') + ' ' + (m.stem||'') + ' ' + m.subj).toLowerCase();
    if (blob.includes(q)) results.mcqs.push(m);
  });

  // Cheat sheet nuggets + sections
  Object.values(window.UPSC_CHEATS || {}).forEach(c => {
    (c.nuggets || []).forEach(n => {
      const blob = (n.k + ' ' + n.v + ' ' + (n.why||'')).toLowerCase().replace(/<[^>]+>/g,'');
      if (blob.includes(q)) results.cheats.push({ subj: c.label, id: c.id, k: n.k, v: n.v });
    });
    (c.sections || []).forEach(s => {
      const blob = (s.title + ' ' + s.body).toLowerCase().replace(/<[^>]+>/g,'');
      if (blob.includes(q)) results.cheats.push({ subj: c.label, id: c.id, k: s.title, v: s.body.substring(0, 200) + '…' });
    });
    (c.tables || []).forEach(t => {
      const blob = (t.title + ' ' + t.rows.flat().join(' ')).toLowerCase();
      if (blob.includes(q)) results.cheats.push({ subj: c.label, id: c.id, k: 'Table — '+t.title, v: 'Comparative table — open the cheat sheet to view.' });
    });
  });

  // Themes
  (window.UPSC_THEMES?.tiers || []).forEach(tier => {
    tier.items.forEach(it => {
      const blob = (it.topic + ' ' + it.subj + ' ' + it.detail).toLowerCase();
      if (blob.includes(q)) results.themes.push({ tier: tier.id, ...it });
    });
  });

  // Heatmap topics
  (window.UPSC_HEATMAP?.subjects || []).forEach(s => {
    s.topics.forEach(t => {
      if (t[0].toLowerCase().includes(q)) {
        results.topics.push({ subject: s.name, topic: t[0], framing: t[2], probability: t[3], importance: t[4] });
      }
    });
  });

  // Articles
  (window.UPSC_INDEX?.articles || []).forEach(a => {
    const blob = ((a[0]+'') + ' ' + (a[1]||'') + ' ' + a[2]).toLowerCase();
    if (blob.includes(q)) results.articles.push(a);
  });

  const total = results.mcqs.length + results.cheats.length + results.themes.length + results.topics.length + results.articles.length;

  root.innerHTML = `
    <div class="mb-6 flex items-center gap-3 flex-wrap">
      <i data-lucide="search" class="w-5 h-5 text-brand-500"></i>
      <h1 class="font-serif text-2xl font-bold">Search results for <span class="text-brand-600">"${q}"</span></h1>
      <span class="ml-auto text-xs text-ink-500 font-mono">${total} matches</span>
    </div>

    ${total === 0 ? `
      <div class="card p-8 text-center text-ink-500">
        <i data-lucide="search-x" class="w-8 h-8 mx-auto mb-2"></i>
        <p>No matches. Try a shorter or different keyword.</p>
      </div>
    ` : ''}

    ${results.mcqs.length ? `
      <div class="card mb-5 overflow-hidden">
        <div class="px-5 py-3 border-b border-ink-200 dark:border-ink-800 flex items-center gap-2">
          <i data-lucide="list-checks" class="w-4 h-4 text-brand-500"></i>
          <div class="font-bold">MCQs (${results.mcqs.length})</div>
        </div>
        <div class="p-3 space-y-2">
          ${results.mcqs.slice(0,12).map(m => `
            <button onclick="window._upscApp.setView('mcqs'); setTimeout(()=>document.getElementById('mcq-${m.id}')?.scrollIntoView({behavior:'smooth',block:'center'}),200)" class="w-full text-left p-3 rounded-lg hover:bg-ink-50 dark:hover:bg-ink-800/50 flex items-start gap-3">
              <span class="w-9 h-9 rounded-md bg-brand-600 text-white grid place-items-center font-bold text-xs shrink-0">Q${m.id}</span>
              <div class="flex-1 min-w-0">
                <div class="text-xs flex items-center gap-2 mb-1"><span class="subj-tag subj-${m.subj.replace('&','&')}">${m.subj}</span></div>
                <div class="text-sm line-clamp-2">${m.q}</div>
              </div>
            </button>
          `).join('')}
          ${results.mcqs.length > 12 ? `<div class="text-xs text-ink-500 text-center py-2">… and ${results.mcqs.length-12} more in MCQ practice</div>` : ''}
        </div>
      </div>
    ` : ''}

    ${results.cheats.length ? `
      <div class="card mb-5 overflow-hidden">
        <div class="px-5 py-3 border-b border-ink-200 dark:border-ink-800 flex items-center gap-2">
          <i data-lucide="book-open" class="w-4 h-4 text-brand-500"></i>
          <div class="font-bold">Cheat sheets (${results.cheats.length})</div>
        </div>
        <div class="p-3 space-y-2">
          ${results.cheats.slice(0,15).map(c => `
            <button onclick="window._upscApp.cheatActive='${c.id}'; window._upscApp.setView('cheatsheet')" class="w-full text-left p-3 rounded-lg hover:bg-ink-50 dark:hover:bg-ink-800/50">
              <div class="text-xs mb-1"><span class="subj-tag">${c.subj}</span></div>
              <div class="text-sm font-semibold">${c.k}</div>
              <div class="text-xs text-ink-500 line-clamp-2 mt-0.5">${c.v.replace(/<[^>]+>/g,'')}</div>
            </button>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${results.themes.length ? `
      <div class="card mb-5 overflow-hidden">
        <div class="px-5 py-3 border-b border-ink-200 dark:border-ink-800 flex items-center gap-2">
          <i data-lucide="target" class="w-4 h-4 text-brand-500"></i>
          <div class="font-bold">Predictive themes (${results.themes.length})</div>
        </div>
        <div class="p-3 space-y-2">
          ${results.themes.map(t => `
            <button onclick="window._upscApp.themeTier='${t.tier}'; window._upscApp.setView('themes')" class="w-full text-left p-3 rounded-lg hover:bg-ink-50 dark:hover:bg-ink-800/50">
              <div class="flex items-center gap-2 mb-1">
                <span class="pill tier-${t.tier}">Tier ${t.tier}</span>
                <span class="subj-tag subj-${t.subj.split('/')[0].trim()}">${t.subj}</span>
              </div>
              <div class="text-sm font-semibold">#${t.i} · ${t.topic}</div>
              <div class="text-xs text-ink-500">${t.detail}</div>
            </button>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${results.topics.length ? `
      <div class="card mb-5 overflow-hidden">
        <div class="px-5 py-3 border-b border-ink-200 dark:border-ink-800 flex items-center gap-2">
          <i data-lucide="flame" class="w-4 h-4 text-brand-500"></i>
          <div class="font-bold">Heatmap topics (${results.topics.length})</div>
        </div>
        <div class="p-3 space-y-2">
          ${results.topics.map(t => `
            <div class="p-3 rounded-lg bg-ink-50 dark:bg-ink-800/50 text-sm">
              <div class="text-xs mb-1"><span class="subj-tag">${t.subject}</span></div>
              <div class="font-semibold">${t.topic}</div>
              <div class="text-xs text-ink-500 mt-1">${t.framing} · ${t.probability}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${results.articles.length ? `
      <div class="card overflow-hidden">
        <div class="px-5 py-3 border-b border-ink-200 dark:border-ink-800 flex items-center gap-2">
          <i data-lucide="scale" class="w-4 h-4 text-brand-500"></i>
          <div class="font-bold">Constitutional articles (${results.articles.length})</div>
        </div>
        <div class="p-3 grid md:grid-cols-2 gap-2">
          ${results.articles.map(a => `<div class="p-2.5 rounded-lg bg-ink-50 dark:bg-ink-800/50 text-xs flex items-start gap-2"><span class="font-mono font-bold text-brand-700 dark:text-brand-300 w-12 shrink-0">${a[0]}${a[1]||''}</span><span>${a[2]}</span></div>`).join('')}
        </div>
      </div>
    ` : ''}
  `;

  if (window.lucide) lucide.createIcons();
};
