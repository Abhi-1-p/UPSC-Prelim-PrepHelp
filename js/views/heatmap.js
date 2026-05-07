/* Heatmap view — Phase 2 */
window.renderHeatmap = function(root, app) {
  const h = window.UPSC_HEATMAP;
  const active = app.heatmapSubject || 'polity';
  const subj = h.subjects.find(s => s.id === active) || h.subjects[0];

  root.innerHTML = `
    <div class="mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Phase 2</div>
      <h1 class="font-serif text-3xl font-bold mt-1">High-frequency Topics — Subject Heat Map</h1>
      <p class="mt-2 text-ink-500 dark:text-ink-400 text-sm max-w-3xl">Importance + 2026 probability by subject. Probability = pattern-derived likelihood of appearance, not a guarantee.</p>
    </div>

    <!-- Legend -->
    <div class="card p-4 mb-6 flex flex-wrap items-center gap-4 text-xs">
      <span class="font-semibold text-ink-500">Importance scale:</span>
      ${h.legend.map(l => `<span class="inline-flex items-center"><span class="imp ${l.dot}"></span>${l.label}</span>`).join('')}
    </div>

    <!-- Subject tabs -->
    <div class="flex flex-wrap gap-2 mb-5">
      ${h.subjects.map(s => `
        <button onclick="window._upscApp.heatmapSubject='${s.id}'; window._upscApp.setView('heatmap')"
          class="px-3.5 py-1.5 text-sm rounded-full border transition ${s.id === active ? 'text-white border-transparent' : 'bg-white dark:bg-ink-800 border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-ink-300'}"
          style="${s.id === active ? `background:${s.color};` : ''}">
          ${s.name}
        </button>
      `).join('')}
    </div>

    <!-- Subject card -->
    <div class="card overflow-hidden mb-6">
      <div class="px-5 py-4 border-b border-ink-200 dark:border-ink-800 flex items-start gap-3" style="background: ${subj.color}11;">
        <div class="w-10 h-10 rounded-lg grid place-items-center text-white shrink-0" style="background:${subj.color};"><i data-lucide="flame" class="w-5 h-5"></i></div>
        <div class="flex-1">
          <div class="text-xl font-bold">${subj.name}</div>
          <p class="text-sm text-ink-500 mt-1"><b>Favourite framing:</b> <i>${subj.framing}</i></p>
          ${subj.traps ? `<p class="text-sm text-ink-500 mt-1"><b>Trap zones:</b> ${subj.traps}</p>` : ''}
        </div>
      </div>
      <div class="overflow-auto">
        <table class="dossier-table">
          <thead>
            <tr>
              <th style="width:50px">#</th>
              <th>Topic / Subtopic</th>
              <th>Times asked</th>
              <th>Framing</th>
              <th>Probability 2026</th>
              <th>Importance</th>
            </tr>
          </thead>
          <tbody>
            ${subj.topics.map((t,i) => `
              <tr>
                <td class="text-ink-400 font-mono text-xs">${i+1}</td>
                <td class="font-semibold">${t[0]}</td>
                <td class="text-center font-mono text-xs">${t[1]}</td>
                <td class="text-ink-500 text-xs">${t[2]}</td>
                <td><span class="pill ${t[3].includes('Very High') || t[3].includes('Extremely') ? 'pill-danger' : t[3].includes('High') ? 'pill-warn' : 'pill-info'}">${t[3]}</span></td>
                <td><span class="imp imp-${t[4]}"></span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- CA hybrid themes -->
    <div class="card p-5">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">CA-integrated hybrid themes</div>
      <div class="text-lg font-bold mb-3">Likely to be tested via a static framework</div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        ${h.caHybridThemes.map((t, i) => `
          <div class="rounded-lg p-3.5 bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/50 text-sm flex items-start gap-3">
            <span class="w-6 h-6 rounded-md bg-brand-600 text-white grid place-items-center font-bold text-xs shrink-0">${i+1}</span>
            <span>${t}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
};
