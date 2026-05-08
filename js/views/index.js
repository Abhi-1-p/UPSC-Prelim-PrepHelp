/* Index / Appendix view */
window.renderIndex = function(root, app) {
  const ix = window.UPSC_INDEX;

  root.innerHTML = `
    <div class="mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Appendix</div>
      <h1 class="font-serif text-3xl font-bold mt-1">Quick-recall Index</h1>
      <p class="mt-2 text-ink-500 dark:text-ink-400 text-sm max-w-3xl">Articles cold list · constitutional amendments · ISRO mission table · IUCN species · mnemonics · subject jump-pad.</p>
    </div>

    <!-- By topic jump pad -->
    <div class="card p-5 mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Subject map</div>
      <h3 class="text-lg font-bold mb-3">Cheat sheet ↔ MCQ mapping</h3>
      <div class="grid md:grid-cols-3 gap-3">
        ${ix.byTopic.map(t => `
          <div class="card p-4 card-hover">
            <div class="font-bold mb-1">${t.label}</div>
            <div class="flex items-center gap-2 text-xs text-ink-500 mb-3">
              <span class="pill">${t.cs}</span>
              <span class="pill">${t.mcq}</span>
              <span class="pill pill-info">${t.count} Qs</span>
            </div>
            <div class="flex gap-2">
              <button onclick="window._upscApp.cheatActive='${t.id}'; window._upscApp.setView('cheatsheet')" class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 hover:bg-brand-100">Cheat sheet</button>
              <button onclick="window._upscApp.mcqState && (window._upscApp.mcqState.filterSubj='${t.label.includes('Polity')?'Polity':t.label.includes('Economy')?'Economy':t.label.includes('Environment')?'Environment':t.label.includes('Geography')?'Geography':t.label.includes('History')?'History':t.label.includes('Art')?'Art':t.label.includes('Science')?'S&T':t.label.includes('International')?'IR':'Social'}'); window._upscApp.setView('mcqs')" class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700">Practice MCQs</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Articles cold list -->
    <div class="card p-5 mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Articles to memorise cold</div>
      <h3 class="text-lg font-bold mb-3">Constitutional articles quick-jump</h3>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        ${ix.articles.map(a => {
          const range = a[1] && typeof a[1]==='number' ? `${a[0]}–${a[1]}` : a[0]+(a[1]?a[1]:'');
          return `<div class="p-2.5 rounded-lg bg-ink-50 dark:bg-ink-800/50 text-xs flex items-start gap-2"><span class="font-mono font-bold text-brand-700 dark:text-brand-300 w-12 shrink-0">${range}</span><span class="text-ink-700 dark:text-ink-200">${a[2]}</span></div>`;
        }).join('')}
      </div>
    </div>

    <!-- Constitutional Amendments -->
    <div class="card overflow-hidden mb-6">
      <div class="px-5 py-3 border-b border-ink-200 dark:border-ink-800">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Major CAAs</div>
        <h3 class="text-lg font-bold">Constitutional amendments — quick reference</h3>
      </div>
      <div class="overflow-auto">
        <table class="dossier-table">
          <thead><tr><th style="width:140px">Amendment</th><th>What it did</th></tr></thead>
          <tbody>
            ${ix.amendments.map(a => `<tr><td class="font-bold">${a[0]}</td><td>${a[1]}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- ISRO mission table -->
    <div class="card overflow-hidden mb-6">
      <div class="px-5 py-3 border-b border-ink-200 dark:border-ink-800">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Space programme</div>
        <h3 class="text-lg font-bold">ISRO missions — recent + upcoming</h3>
      </div>
      <div class="overflow-auto">
        <table class="dossier-table">
          <thead><tr><th>Mission</th><th>Launch / target</th><th>Vehicle</th><th>Significance</th></tr></thead>
          <tbody>
            ${ix.isroQuickRef.map(m => `<tr><td class="font-bold">${m[0]}</td><td>${m[1]}</td><td><span class="pill">${m[2]}</span></td><td class="text-ink-500">${m[3]}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- IUCN India -->
    <div class="card p-5 mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">IUCN species in news (India)</div>
      <h3 class="text-lg font-bold mb-3">High-frequency species + status</h3>
      <div class="flex flex-wrap gap-2">
        ${ix.iucnSpeciesIndia.map(s => `<span class="pill pill-info">${s}</span>`).join('')}
      </div>
    </div>

    <!-- Ramsar highlights -->
    <div class="card p-5 mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Ramsar &amp; Lakes</div>
      <h3 class="text-lg font-bold mb-2">Highlights</h3>
      <p class="text-sm leading-relaxed text-ink-700 dark:text-ink-200">${ix.ramsarHighlights}</p>
    </div>

    <!-- Mnemonics -->
    <div class="card p-5">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Mnemonics &amp; quick rules</div>
      <h3 class="text-lg font-bold mb-3">Memory aids</h3>
      <ul class="space-y-2 text-sm">
        ${ix.cocoMnemonics.map(m => `<li class="flex items-start gap-2 p-3 rounded-lg bg-ink-50 dark:bg-ink-800/50"><i data-lucide="zap" class="w-4 h-4 text-brand-500 mt-0.5 shrink-0"></i><span>${m}</span></li>`).join('')}
      </ul>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
};
