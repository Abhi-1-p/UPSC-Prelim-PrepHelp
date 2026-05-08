/* Trends view — 10-year analysis */
window.renderTrends = function(root, app) {
  const t = window.UPSC_TRENDS;

  root.innerHTML = `
    <div class="mb-6">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Phase 1</div>
      <h1 class="font-serif text-3xl font-bold mt-1">10-year Trend Analysis</h1>
      <p class="mt-2 text-ink-500 dark:text-ink-400 text-sm max-w-3xl">${t.meta.note}</p>
    </div>

    <!-- 5-yr question split table + chart -->
    <div class="grid lg:grid-cols-5 gap-5 mb-8">
      <div class="card p-5 lg:col-span-3">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Subject-wise question distribution</div>
        <div class="text-lg font-bold mb-3">5-year verified band</div>
        <div class="h-80"><canvas id="trends-chart-1"></canvas></div>
      </div>
      <div class="card p-0 lg:col-span-2 overflow-hidden">
        <div class="p-5 pb-3">
          <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Heat numbers</div>
          <div class="text-lg font-bold">2021–2025 with 5-yr average</div>
        </div>
        <div class="overflow-auto max-h-[420px]">
          <table class="dossier-table">
            <thead><tr>${t.distribution.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
            <tbody>
              ${t.distribution.rows.map(r => `
                <tr>
                  ${r.map((c,i)=> `<td class="${i===0 ? 'font-semibold' : 'text-center font-mono text-xs'}">${c}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Pre-2021 + revival -->
    <div class="grid lg:grid-cols-2 gap-5 mb-8">
      <div class="card p-5">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Pre-2021 directional patterns</div>
        <div class="text-lg font-bold mb-3">[pattern-inferred]</div>
        <ul class="space-y-2 text-sm">
          ${t.preTrend.map(p => `<li class="flex items-start gap-2"><i data-lucide="dot" class="w-5 h-5 text-brand-500 -mt-0.5 shrink-0"></i><span>${p}</span></li>`).join('')}
        </ul>
      </div>
      <div class="card p-5">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">"Suddenly revived" topics</div>
        <div class="text-lg font-bold mb-3">UPSC's 4–6 year cycle</div>
        <div class="space-y-2 text-sm">
          ${t.revivedTopics.map(r => `
            <div class="flex items-start gap-3 p-2 rounded-lg hover:bg-ink-50 dark:hover:bg-ink-800">
              <span class="pill pill-warn shrink-0">Revived ${r.revived}</span>
              <div class="flex-1">
                <div class="font-semibold">${r.topic}</div>
                <div class="text-xs text-ink-500">${r.last}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="mt-4 pt-4 border-t border-ink-200 dark:border-ink-800">
          <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-2">2026 watch list</div>
          <div class="flex flex-wrap gap-2">
            ${t.watch2026.map(w => `<span class="pill pill-brand">${w}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Year-by-year shifts -->
    <div class="card p-5 mb-8">
      <div class="flex items-center justify-between mb-3">
        <div>
          <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Year-by-year shifts</div>
          <div class="text-lg font-bold">Difficulty · pattern · trap</div>
        </div>
      </div>
      <div class="table-wrap">
        <table class="dossier-table">
          <thead><tr><th>Year</th><th>Difficulty</th><th>Defining pattern shift</th><th>Notable trap</th></tr></thead>
          <tbody>
            ${t.yearShifts.map(y => `
              <tr>
                <td class="font-bold">${y.year}</td>
                <td><span class="pill ${y.difficulty.includes('Tough') ? 'pill-danger' : y.difficulty.includes('tough') ? 'pill-warn' : 'pill-info'}">${y.difficulty}</span></td>
                <td>${y.shift}</td>
                <td class="text-ink-500">${y.trap}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Static vs CA -->
    <div class="grid lg:grid-cols-5 gap-5 mb-8">
      <div class="card p-5 lg:col-span-3">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Static vs CA vs Hybrid</div>
        <div class="text-lg font-bold mb-2">5-year split — counts per year</div>
        <p class="text-xs text-ink-500 mb-3">${t.staticCa.note}</p>
        <div class="h-64"><canvas id="trends-chart-2"></canvas></div>
      </div>
      <div class="card p-5 lg:col-span-2 flex flex-col">
        <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Implication</div>
        <p class="text-sm mt-2 leading-relaxed">${t.staticCa.implication}</p>
        <div class="mt-auto pt-4 grid grid-cols-3 gap-2 text-center">
          <div class="rounded-lg p-3 bg-ink-50 dark:bg-ink-800/50">
            <div class="text-2xl font-extrabold text-ink-700 dark:text-ink-100">32-40</div>
            <div class="text-[10px] uppercase tracking-widest text-ink-400 mt-1">NCERT-only ceiling</div>
          </div>
          <div class="rounded-lg p-3 bg-brand-50 dark:bg-brand-950/40">
            <div class="text-2xl font-extrabold text-brand-700 dark:text-brand-300">60+</div>
            <div class="text-[10px] uppercase tracking-widest text-brand-700/80 dark:text-brand-300/80 mt-1">Hybrid reading</div>
          </div>
          <div class="rounded-lg p-3 bg-emerald-50 dark:bg-emerald-950/40">
            <div class="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">110+</div>
            <div class="text-[10px] uppercase tracking-widest text-emerald-700/80 dark:text-emerald-300/80 mt-1">Cutoff zone</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Format evolution -->
    <div class="card p-5 mb-8">
      <div class="flex items-center justify-between mb-3">
        <div>
          <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Question format evolution</div>
          <div class="text-lg font-bold">Multi-statement bias is the new default</div>
        </div>
      </div>
      <div class="grid lg:grid-cols-5 gap-5">
        <div class="lg:col-span-3 h-64"><canvas id="trends-chart-3"></canvas></div>
        <div class="lg:col-span-2">
          <div class="table-wrap text-xs">
            <table class="dossier-table">
              <thead><tr>${t.formatEvolution.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
              <tbody>
                ${t.formatEvolution.rows.map(r => `
                  <tr>${r.map((c,i)=> `<td class="${i===0?'font-semibold':'text-center font-mono'}">${c}</td>`).join('')}</tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p class="mt-4 text-sm text-ink-600 dark:text-ink-300 italic border-l-3 border-l-brand-500 pl-4">${t.formatEvolution.insight}</p>
    </div>

    <!-- Recurring topics 10-yr heatmap -->
    <div class="card p-5">
      <div class="text-xs uppercase tracking-widest text-ink-400 font-semibold">Recurring areas (10-year heatmap)</div>
      <div class="text-lg font-bold mb-4">Topics asked 5+ times in last 10 years</div>
      <div class="grid md:grid-cols-2 gap-4 text-sm">
        ${Object.entries(t.recurringTopics).map(([k,v]) => `
          <div class="p-4 rounded-lg bg-ink-50 dark:bg-ink-800/50 border border-ink-100 dark:border-ink-800">
            <div class="font-bold text-brand-700 dark:text-brand-300 mb-1">${k}</div>
            <div class="text-ink-600 dark:text-ink-300">${v}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Charts
  const isDark = document.documentElement.classList.contains('dark');
  const grid = isDark ? '#2b303a' : '#eceef2';
  const txt  = isDark ? '#aab1bd' : '#535b69';

  // 1. Distribution
  if (window._tr1) window._tr1.destroy();
  const c1 = document.getElementById('trends-chart-1');
  if (c1) {
    window._tr1 = new Chart(c1, {
      type:'bar',
      data:{
        labels: t.distribution.chart.labels,
        datasets: t.distribution.chart.datasets.map(d => ({
          label:d.label, data:d.data, backgroundColor:d.color+'cc', borderColor:d.color, borderWidth:1
        }))
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{ position:'bottom', labels:{ usePointStyle:true, padding:8, font:{size:10}, color:txt } } },
        scales:{ x:{ stacked:false, grid:{display:false}, ticks:{color:txt} }, y:{ stacked:false, grid:{color:grid}, ticks:{color:txt} } }
      }
    });
  }

  // 2. Static vs CA stacked
  if (window._tr2) window._tr2.destroy();
  const c2 = document.getElementById('trends-chart-2');
  if (c2) {
    const colors = ['#94a3b8','#f8720b','#0ea5e9'];
    const datasets = t.staticCa.rows.map((row, idx) => ({
      label: row[0], data: row.slice(1), backgroundColor: colors[idx]+'cc', borderColor: colors[idx], borderWidth:1, stack:'a'
    }));
    window._tr2 = new Chart(c2, {
      type:'bar',
      data:{ labels: t.staticCa.columns.slice(1), datasets },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{ position:'bottom', labels:{usePointStyle:true, color:txt} } },
        scales:{ x:{stacked:true, grid:{display:false}, ticks:{color:txt}}, y:{stacked:true, grid:{color:grid}, ticks:{color:txt}, title:{display:true, text:'≈ Q count', color:txt}} }
      }
    });
  }

  // 3. Format evolution chart
  if (window._tr3) window._tr3.destroy();
  const c3 = document.getElementById('trends-chart-3');
  if (c3) {
    window._tr3 = new Chart(c3, {
      type:'line',
      data:{
        labels: t.formatEvolution.chart.labels,
        datasets: t.formatEvolution.chart.datasets.map(d => ({
          label:d.label, data:d.data, borderColor:d.color, backgroundColor:d.color+'33', tension:.35, fill:true, borderWidth:2, pointRadius:3
        }))
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{ position:'bottom', labels:{usePointStyle:true, font:{size:10}, color:txt} } },
        scales:{ y:{ beginAtZero:true, ticks:{ callback: v => v+'%', color:txt }, grid:{color:grid} }, x:{ grid:{display:false}, ticks:{color:txt} } }
      }
    });
  }

  if (window.lucide) lucide.createIcons();
};
