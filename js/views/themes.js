/* Themes view — Phase 5 */
window.renderThemes = function(root, app) {
  const t = window.UPSC_THEMES;
  const tier = app.themeTier || 'A';
  const activeTier = t.tiers.find(x => x.id === tier) || t.tiers[0];

  root.innerHTML = `
    <div class="mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Phase 5</div>
      <h1 class="font-serif text-3xl font-bold mt-1">50 Predictive Themes for Prelims 2026</h1>
      <p class="mt-2 text-ink-500 dark:text-ink-400 text-sm max-w-3xl">⚠️ Probability scores are pattern-derived expert estimates, not statistical forecasts. Treat as revision priorities, not guarantees.</p>
    </div>

    <!-- Tier tabs -->
    <div class="flex gap-2 mb-6">
      ${t.tiers.map(tt => `
        <button onclick="window._upscApp.themeTier='${tt.id}'; window._upscApp.setView('themes')"
          class="px-4 py-2 text-sm rounded-lg border transition font-semibold ${tt.id === tier ? `tier-${tt.id} border-transparent` : 'bg-white dark:bg-ink-800 border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-ink-300'}">
          ${tt.label}
        </button>
      `).join('')}
    </div>

    <!-- Active tier blurb -->
    <div class="card p-4 mb-6 tier-${activeTier.id}">
      <p class="text-sm">${activeTier.blurb}</p>
    </div>

    <!-- Theme grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      ${activeTier.items.map(item => `
        <div class="card p-4 card-hover">
          <div class="flex items-start gap-3">
            <span class="w-8 h-8 rounded-md bg-ink-100 dark:bg-ink-800 grid place-items-center font-bold text-xs shrink-0">${item.i}</span>
            <div class="flex-1 min-w-0">
              <div class="font-bold text-sm leading-tight">${item.topic}</div>
              <div class="mt-1.5 flex flex-wrap gap-1">
                ${item.subj.split('/').map(s => `<span class="subj-tag subj-${s.replace(/&/g,'&').trim()}">${s.trim()}</span>`).join('')}
              </div>
              <p class="text-xs text-ink-500 dark:text-ink-400 mt-2">${item.detail}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Overlooked + wildcards -->
    <div class="grid lg:grid-cols-2 gap-5">
      <div class="card p-5">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Most dangerous overlooked areas</div>
        <h3 class="text-lg font-bold mb-3">High info-asymmetry — most aspirants under-prepare</h3>
        <ol class="space-y-2 text-sm">
          ${t.overlooked.map(o => `
            <li class="flex items-start gap-3 p-3 rounded-lg bg-ink-50 dark:bg-ink-800/50 border-l-3 border-l-amber-500">
              <span class="w-6 h-6 rounded-md bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 grid place-items-center font-bold text-xs shrink-0">${o.id}</span>
              <span class="flex-1">${o.text}</span>
            </li>
          `).join('')}
        </ol>
      </div>
      <div class="card p-5">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Watch with caution — wildcards</div>
        <h3 class="text-lg font-bold mb-3">Low-confidence but possible 2026 surprises</h3>
        <ul class="space-y-3 text-sm">
          ${t.wildcards.map((w, i) => `
            <li class="flex items-start gap-3 p-3 rounded-lg border border-dashed border-ink-200 dark:border-ink-700">
              <i data-lucide="alert-circle" class="w-5 h-5 text-amber-500 mt-0.5 shrink-0"></i>
              <span>${w}</span>
            </li>
          `).join('')}
        </ul>
        <p class="text-xs text-ink-500 italic mt-4">UPSC has occasionally introduced surprise areas. These are pattern-inferred, not predictions.</p>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
};
