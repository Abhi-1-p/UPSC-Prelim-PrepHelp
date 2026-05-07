/* ============================================================
 * UPSC Prelims 2026 Intelligence Dossier — main app
 * Alpine.js state + routing + view dispatcher
 * ============================================================ */
function upscApp() {
  return {
    // --- state ---
    view: localStorage.getItem('upsc-view') || 'dashboard',
    sidebarOpen: false,
    isDark: document.documentElement.classList.contains('dark'),
    honestyDismissed: localStorage.getItem('upsc-honesty') === '1',
    globalSearch: '',
    cheatActive: localStorage.getItem('upsc-cheat') || 'polity',
    themeTier: 'A',
    heatmapSubject: 'polity',
    mcqState: null,

    // --- nav ---
    navItems: [
      { id: 'dashboard',  label: 'Dashboard',          icon: 'layout-dashboard' },
      { id: 'trends',     label: '10-yr Trends',       icon: 'trending-up' },
      { id: 'heatmap',    label: 'Heat Map',           icon: 'flame' },
      { id: 'psychology', label: 'Question Psychology',icon: 'brain' },
      { id: 'themes',     label: '50 Predictive Themes', icon: 'target' },
      { id: 'mcqs',       label: '100 MCQs',           icon: 'list-checks',  badge: '100' },
      { id: 'strategy',   label: 'Attempt Strategy',    icon: 'gauge' },
      { id: 'index',      label: 'Quick-recall Index', icon: 'list' }
    ],
    cheatNav: [
      { id: 'polity',      label: 'Polity & Governance',  color: '#6366f1' },
      { id: 'economy',     label: 'Economy',               color: '#10b981' },
      { id: 'environment', label: 'Environment',           color: '#14b8a6' },
      { id: 'geography',   label: 'Geography',             color: '#f59e0b' },
      { id: 'history',     label: 'History',               color: '#b45309' },
      { id: 'art',         label: 'Art & Culture',         color: '#ec4899' },
      { id: 'st',          label: 'Science & Tech',        color: '#0ea5e9' },
      { id: 'ir',          label: 'International Rel.',    color: '#8b5cf6' },
      { id: 'social',      label: 'Social / Schemes',      color: '#64748b' }
    ],

    // --- computed ---
    get currentNav() {
      return this.navItems.find(n => n.id === this.view) || { label: 'Search' };
    },
    get daysToExam() {
      const exam = new Date('2026-05-24T09:30:00');
      const now = new Date();
      const diff = Math.max(0, Math.ceil((exam - now) / 86400000));
      return diff;
    },
    get examProgress() {
      const exam = new Date('2026-05-24').getTime();
      const start = new Date('2026-02-04').getTime(); // notification date
      const now   = Date.now();
      const pct = Math.min(100, Math.max(0, ((now - start) / (exam - start)) * 100));
      return pct;
    },

    // --- methods ---
    setView(v) {
      this.view = v;
      this.sidebarOpen = false;
      localStorage.setItem('upsc-view', v);
      this.$nextTick(() => this.renderActive());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      document.documentElement.classList.toggle('dark', this.isDark);
      localStorage.setItem('upsc-theme', this.isDark ? 'dark' : 'light');
      this.$nextTick(() => this.renderActive());
    },

    // --- render dispatcher ---
    renderActive() {
      const root = document.getElementById('view-' + this.view);
      if (!root) return;
      const v = this.view;
      try {
        if (v === 'dashboard'  && window.renderDashboard)  window.renderDashboard(root, this);
        if (v === 'trends'     && window.renderTrends)     window.renderTrends(root, this);
        if (v === 'heatmap'    && window.renderHeatmap)    window.renderHeatmap(root, this);
        if (v === 'psychology' && window.renderPsychology) window.renderPsychology(root, this);
        if (v === 'cheatsheet' && window.renderCheatsheet) window.renderCheatsheet(root, this);
        if (v === 'themes'     && window.renderThemes)     window.renderThemes(root, this);
        if (v === 'mcqs'       && window.renderMcqs)       window.renderMcqs(root, this);
        if (v === 'strategy'   && window.renderStrategy)   window.renderStrategy(root, this);
        if (v === 'index'      && window.renderIndex)      window.renderIndex(root, this);
        if (v === 'search'     && window.renderSearch)     window.renderSearch(root, this);
      } catch (err) {
        console.error('[upsc] render error', err);
        root.innerHTML = `<div class="card p-6 border-l-4 border-l-red-500"><div class="font-bold mb-1">Render error</div><pre class="text-xs whitespace-pre-wrap text-red-700">${(err && err.message) || err}</pre></div>`;
      }
    },

    // --- init ---
    init() {
      window._upscApp = this;
      // Persist on relevant changes
      this.$watch('cheatActive',     v => localStorage.setItem('upsc-cheat', v));
      this.$watch('honestyDismissed',v => localStorage.setItem('upsc-honesty', v ? '1' : '0'));
      this.$watch('globalSearch',    () => { if (this.view === 'search') this.$nextTick(() => this.renderActive()); });
      this.$watch('view',            () => this.$nextTick(() => this.renderActive()));
      this.$watch('cheatActive',     () => { if (this.view === 'cheatsheet') this.$nextTick(() => this.renderActive()); });

      // First render
      this.$nextTick(() => {
        if (window.lucide) lucide.createIcons();
        this.renderActive();
      });
    }
  };
}

// Make available to inline x-data
window.upscApp = upscApp;
