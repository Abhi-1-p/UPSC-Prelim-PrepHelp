/* ============================================================
 * Dashboard View
 * ============================================================ */
window.renderDashboard = function(root, app) {
  const t = window.UPSC_TRENDS;
  const themes = window.UPSC_THEMES;
  const tierA = themes.tiers.find(x => x.id === 'A');

  root.innerHTML = `
    <section class="hero-mesh rounded-2xl border border-ink-200 dark:border-ink-800 p-6 lg:p-10 mb-8 relative overflow-hidden">
      <div class="absolute -top-10 -right-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>
      <div class="relative">
        <div class="flex items-center gap-2 mb-3">
          <span class="pill pill-brand">Prelims 2026 Edition</span>
          <span class="pill">Compile · 07 May 2026</span>
        </div>
        <h1 class="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-ink-900 dark:text-white leading-tight max-w-3xl">
          UPSC CSE Prelims 2026 — <span class="text-brand-600 dark:text-brand-400">Intelligence Dossier</span>
        </h1>
        <p class="mt-3 text-ink-600 dark:text-ink-300 max-w-2xl text-sm lg:text-base">
          A data-driven revision and prediction handbook for GS Paper-I. Trend analysis, subject-wise heat maps, psychology decoder, last-mile cheat sheets, 50 predictive themes, 100 interactive MCQs, and an attempt strategy you can verify.
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
          <button @click="setView('mcqs')" class="px-4 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold inline-flex items-center gap-2 shadow-soft">
            <i data-lucide="play-circle" class="w-4 h-4"></i> Start 100 MCQs
          </button>
          <button @click="setView('cheatsheet'); cheatActive='polity'" class="px-4 py-2.5 rounded-lg bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-ink-300 text-sm font-semibold inline-flex items-center gap-2">
            <i data-lucide="book-open" class="w-4 h-4"></i> Cheat sheets
          </button>
          <button @click="setView('themes')" class="px-4 py-2.5 rounded-lg bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-ink-300 text-sm font-semibold inline-flex items-center gap-2">
            <i data-lucide="target" class="w-4 h-4"></i> 2026 themes
          </button>
        </div>
      </div>
    </section>

    <!-- KPI grid -->
    <div class="kpi-grid mb-8">
      <div class="kpi">
        <div class="kpi-label">Days to Prelims</div>
        <div class="kpi-value" data-countdown></div>
        <div class="kpi-sub">Sun · 24 May 2026</div>
        <i data-lucide="calendar-clock" class="kpi-icon"></i>
      </div>
      <div class="kpi">
        <div class="kpi-label">Vacancies</div>
        <div class="kpi-value">933</div>
        <div class="kpi-sub">incl. 33 PwBD · CSE 2026</div>
        <i data-lucide="users" class="kpi-icon"></i>
      </div>
      <div class="kpi">
        <div class="kpi-label">Multi-statement bias</div>
        <div class="kpi-value">67%</div>
        <div class="kpi-sub">2025 paper · counting traps</div>
        <i data-lucide="layers-3" class="kpi-icon"></i>
      </div>
      <div class="kpi">
        <div class="kpi-label">Hybrid Q share (2025)</div>
        <div class="kpi-value">~50%</div>
        <div class="kpi-sub">CA + static, the modern default</div>
        <i data-lucide="git-merge" class="kpi-icon"></i>
      </div>
      <div class="kpi">
        <div class="kpi-label">FY26 GDP growth</div>
        <div class="kpi-value">7.4%</div>
        <div class="kpi-sub">CPI 1.7% · Repo 5.25%</div>
        <i data-lucide="line-chart" class="kpi-icon"></i>
      </div>
      <div class="kpi">
        <div class="kpi-label">Forex reserves</div>
        <div class="kpi-value">$701.4B</div>
        <div class="kpi-sub">Jan 2026 · 11+ months cover</div>
        <i data-lucide="banknote" class="kpi-icon"></i>
      </div>
    </div>

    <!-- 5-yr distribution chart card -->
    <div class="grid lg:grid-cols-3 gap-5 mb-8">
      <div class="card p-5 lg:col-span-2">
        <div class="flex items-start justify-between mb-3">
          <div>
            <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Subject distribution</div>
            <div class="text-lg font-bold mt-0.5">5-year question split (2021–2025)</div>
            <p class="text-xs text-ink-500 mt-1">Verified from coaching analyses cross-checked across Vajiram, PWOnlyIAS, StudyIQ, SuperKalam.</p>
          </div>
          <span class="pill pill-info">Live data</span>
        </div>
        <div class="h-72"><canvas id="dash-dist-chart"></canvas></div>
      </div>

      <!-- Tier-A panel -->
      <div class="card p-5">
        <div class="flex items-center justify-between mb-3">
          <div>
            <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Tier A 2026</div>
            <div class="text-lg font-bold">Extremely high probability</div>
          </div>
          <button @click="setView('themes')" class="text-brand-600 hover:text-brand-700 text-xs font-semibold inline-flex items-center gap-1">
            All 50 <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </button>
        </div>
        <ol class="space-y-2 text-sm">
          ${tierA.items.slice(0, 8).map(t => `
            <li class="flex items-start gap-2">
              <span class="mt-1 w-5 h-5 rounded-md bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 grid place-items-center text-[10px] font-bold shrink-0">${t.i}</span>
              <span>
                <span class="font-semibold text-ink-900 dark:text-ink-100">${t.topic}</span>
                <span class="text-ink-500 dark:text-ink-400"> — ${t.detail}</span>
              </span>
            </li>
          `).join('')}
        </ol>
      </div>
    </div>

    <!-- Quick-access modules -->
    <div>
      <div class="flex items-end justify-between mb-3">
        <div>
          <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Modules</div>
          <h2 class="text-2xl font-bold">Jump into a section</h2>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${[
          { id:'trends',     label:'10-year Trend Analysis',  icon:'trending-up',     blurb:'Year-by-year shifts, format evolution, hybrid CA share, revived topics watch-list.' },
          { id:'heatmap',    label:'Subject Heat Map',         icon:'flame',          blurb:'High-frequency topics across 8 subjects with 2026 probability + recurring framing.' },
          { id:'psychology', label:'Question Psychology',      icon:'brain',          blurb:'7 distractor patterns, decision matrix, EV arithmetic, CA→static conversion.' },
          { id:'cheatsheet', label:'Last-mile Cheat Sheets',   icon:'book-open',      blurb:'9 subject-wise revision sheets — verbatim nuggets + memory hooks.' },
          { id:'themes',     label:'50 Predictive Themes',     icon:'target',         blurb:'Tier A, B, C themes with subject tags + dossier rationale.' },
          { id:'mcqs',       label:'100 MCQs + Answer Key',    icon:'list-checks',    blurb:'Interactive practice engine with scoring, filtering, review and detailed elimination logic.' },
          { id:'strategy',   label:'Attempt Strategy',         icon:'gauge',          blurb:'17-day plan, pass strategy, accuracy band table, 50 must-revise list.' },
          { id:'index',      label:'Quick-recall Index',        icon:'list',           blurb:'Articles cold list · CAA milestones · IUCN species · ISRO mission table · mnemonics.' }
        ].map(m => `
          <button class="card card-hover p-5 text-left group" onclick="window._upscApp.setView('${m.id}')">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-300 grid place-items-center group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition">
                <i data-lucide="${m.icon}" class="w-5 h-5"></i>
              </div>
              <div class="font-bold">${m.label}</div>
              <i data-lucide="arrow-up-right" class="w-4 h-4 text-ink-400 ml-auto group-hover:text-brand-500 transition"></i>
            </div>
            <p class="text-sm text-ink-500 dark:text-ink-400">${m.blurb}</p>
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Honesty inline -->
    <div class="mt-10 card p-5 border-l-4 border-l-brand-500">
      <div class="flex items-start gap-3">
        <i data-lucide="info" class="w-5 h-5 text-brand-600 mt-0.5"></i>
        <div class="text-sm text-ink-700 dark:text-ink-300">
          <div class="font-bold mb-1 text-ink-900 dark:text-white">A note on probability</div>
          MCQ predictions are revision triggers, not statistical models. They reflect theme freshness × historical UPSC behaviour. Every "high probability" topic still needs you to read the underlying NCERT / Eco Survey / Budget / mission document. Verify dates, outlays, and figures against primary sources before quoting in any test.
        </div>
      </div>
    </div>
  `;

  // Render countdown
  document.querySelectorAll('[data-countdown]').forEach(el => el.textContent = app.daysToExam);

  // Chart
  if (window._dashChart) window._dashChart.destroy();
  const ctx = document.getElementById('dash-dist-chart');
  if (ctx) {
    const isDark = document.documentElement.classList.contains('dark');
    window._dashChart = new Chart(ctx, {
      type:'line',
      data:{
        labels: t.distribution.chart.labels,
        datasets: t.distribution.chart.datasets.map(d => ({
          label:d.label, data:d.data, borderColor:d.color, backgroundColor:d.color+'22',
          borderWidth:2, tension:.35, pointRadius:3, pointHoverRadius:5
        }))
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{ position:'bottom', labels:{ usePointStyle:true, padding:12, font:{size:11}, color: isDark?'#aab1bd':'#3c424d' } },
          tooltip:{ mode:'index', intersect:false }
        },
        interaction:{ mode:'nearest', axis:'x' },
        scales:{
          y:{ beginAtZero:true, suggestedMax:22, grid:{ color:isDark?'#2b303a':'#eceef2' }, ticks:{ color:isDark?'#aab1bd':'#535b69' } },
          x:{ grid:{ display:false }, ticks:{ color:isDark?'#aab1bd':'#535b69' } }
        }
      }
    });
  }

  if (window.lucide) lucide.createIcons();
};
