/* ============================================================
 * 10-YEAR TREND ANALYSIS (Phase 1 of dossier)
 * ============================================================ */
window.UPSC_TRENDS = {
  meta: {
    examDate: '2026-05-24',
    notification: '2026-02-04',
    vacancies: '933 (incl. 33 PwBD)',
    compileDate: '2026-05-07',
    note: '2015–2020 numbers carry wider variance — treat as directional. 2021–2025 are coaching consensus across Vajiram, PWOnlyIAS, StudyIQ, SuperKalam.'
  },

  // Subject-wise Question Distribution (5-year verified band)
  distribution: {
    columns: ['Subject', '2021', '2022', '2023', '2024', '2025', '5-yr Avg', 'Range'],
    rows: [
      ['Polity & Governance',         14, 16, 11, 12, 14,         13.4, '11–16'],
      ['Economy',                     14, 14, 13, 9,  '18–20',    13.6, '9–20'],
      ['Geography (Phys+Ind+World)',  8,  11, 9,  18, 13,         11.8, '8–18'],
      ['Environment & Ecology',       16, 14, 16, 15, '13–15',    14.8, '13–19'],
      ['History (A+M+Modern)',        18, 11, 14, 12, '14 (5+1+8)', 13.8, '11–18'],
      ['Art & Culture',               4,  5,  3,  5,  2,          3.8, '2–5'],
      ['Science & Tech',              8,  14, 11, 12, 13,         11.6, '8–14'],
      ['International Relations',     4,  3,  4,  6,  8,          5.0, '3–8'],
      ['Social Issues / Schemes',     4,  3,  3,  3,  3,          3.2, '3–4'],
      ['Misc / Sports / Awards',      0,  4,  0,  0,  0,          '–', '–'],
    ],
    chart: {
      labels: ['2021','2022','2023','2024','2025'],
      datasets: [
        { label:'Polity',        data:[14,16,11,12,14], color:'#6366f1' },
        { label:'Economy',       data:[14,14,13,9,19],  color:'#10b981' },
        { label:'Geography',     data:[8,11,9,18,13],   color:'#f59e0b' },
        { label:'Environment',   data:[16,14,16,15,14], color:'#14b8a6' },
        { label:'History',       data:[18,11,14,12,14], color:'#b45309' },
        { label:'Art & Culture', data:[4,5,3,5,2],      color:'#ec4899' },
        { label:'S&T',           data:[8,14,11,12,13],  color:'#0ea5e9' },
        { label:'IR',            data:[4,3,4,6,8],      color:'#8b5cf6' },
        { label:'Social',        data:[4,3,3,3,3],      color:'#64748b' },
      ]
    }
  },

  preTrend: [
    '2015–2017: Higher History weightage (often 16–22), lighter Environment (~10–14).',
    '2018–2019: Modern History dropped sharply, Environment rose, Economy became technical.',
    '2020: Pandemic-influenced — heavy Health, Disease, S&T questions; History reduced to 11.',
    '2021 onwards: Environment plateaued at 14–19, Polity stable, Economy volatility increased.'
  ],

  // Year-by-year Conceptual Shifts
  yearShifts: [
    { year: 2015, difficulty: 'Moderate',        shift: 'Heavy on factual recall; History-dominant',                                  trap: 'Direct one-liners; few statement-based' },
    { year: 2016, difficulty: 'Moderate-tough',  shift: 'Polity articles + Constitutional schedules emphasized',                       trap: 'Misleading "all of the above"' },
    { year: 2017, difficulty: 'Moderate',        shift: 'Schemes-heavy; first major rise of multi-statement format',                   trap: 'Confusing scheme launch years' },
    { year: 2018, difficulty: 'Tough',           shift: 'Conceptual depth jumped; History got obscure (Bhakti saints, ancient texts)', trap: 'Obscure vocabulary in Art & Culture' },
    { year: 2019, difficulty: 'Tough',           shift: 'Long question stems; multi-domain mixing began',                              trap: 'Misreading "consider the following statements" sub-parts' },
    { year: 2020, difficulty: 'Moderate',        shift: 'Health/disease focus due to COVID; Environment stable',                       trap: 'Disease vector confusions' },
    { year: 2021, difficulty: 'Moderate-tough',  shift: 'Environment surge (16Q); CA-static integration deepened',                     trap: '"Best describes" trap' },
    { year: 2022, difficulty: 'Tough',           shift: 'Sharp rise in S&T (14Q); statement-based dominant',                           trap: 'Number-of-correct-statements format' },
    { year: 2023, difficulty: 'Moderate',        shift: 'Balanced paper; History rebound',                                            trap: 'Map-based confusion' },
    { year: 2024, difficulty: 'Moderate-tough',  shift: 'Geography surge (18Q); current-affairs leaning factual',                      trap: 'Overlapping options' },
    { year: 2025, difficulty: 'Moderate-tough',  shift: 'Economy surged (18–20Q); 67% multi-statement; analytical over factual',        trap: '"How many of the above" 4-option counting traps' }
  ],

  // Static vs CA vs Hybrid split
  staticCa: {
    columns: ['Question type', '2021', '2022', '2023', '2024', '2025'],
    rows: [
      ['Pure static (no CA trigger)', 40, 38, 42, 36, 32],
      ['Hybrid (CA + static concept)', 33, 38, 36, 46, 50],
      ['Pure CA / news-based',         27, 24, 22, 18, 18]
    ],
    note: 'Coaching consensus: ~66–70% static + 30–34% CA, but >50% of "static" questions in 2023–2025 had a CA trigger. UPSC\'s modern model is hybrid-by-default.',
    implication: 'Pure rote of NCERT alone ≈ 32–40 marks ceiling. The 60+ band requires hybrid reading. The 110+ band requires applying static frameworks to fresh CA — schemes, reports, judgments, summits.'
  },

  // Question Format Evolution
  formatEvolution: {
    columns: ['Format', '2015–17', '2018–20', '2021–23', '2024–25'],
    rows: [
      ['Direct factual MCQ',                    '~45%', '~32%', '~22%', '~15%'],
      ['Two-statement (T/F or correct/incorrect)','~25%', '~28%', '~25%', '~15%'],
      ['Three-statement',                       '~20%', '~28%', '~32%', '~39%'],
      ['Four+ statement',                       '~5%',  '~8%',  '~14%', '~22%'],
      ['"How many of the above are correct"',   '~0%',  '~0%',  '~5%',  '~22%'],
      ['Match-the-pairs',                       '~5%',  '~4%',  '~2%',  '~7%']
    ],
    insight: 'The 2024–2025 paper makes one defining demand: you must be confident on each independent statement. There is no longer a "two are obviously wrong, pick from the other two" elimination route in counting questions. Partial knowledge gets punished harder than ever.',
    chart: {
      labels: ['2015–17','2018–20','2021–23','2024–25'],
      datasets: [
        { label:'Direct factual', data:[45,32,22,15], color:'#94a3b8' },
        { label:'Two-statement',  data:[25,28,25,15], color:'#0ea5e9' },
        { label:'Three-statement',data:[20,28,32,39], color:'#10b981' },
        { label:'Four+ statement',data:[5, 8, 14,22], color:'#f59e0b' },
        { label:'How many correct',data:[0,0,5,22],   color:'#dc2626' },
        { label:'Match pairs',    data:[5, 4, 2, 7],  color:'#8b5cf6' }
      ]
    }
  },

  // Areas UPSC repeatedly revisits (10-year heatmap)
  recurringTopics: {
    Polity: 'Fundamental Rights (esp. Art 14, 19, 21, 25); Parliamentary procedures; Judicial review; Inter-State Council & Finance Commission; Schedules (5th, 6th, 9th, 10th); Constitutional vs Statutory bodies; Panchayati Raj (73rd/74th).',
    Economy: 'Monetary policy tools (CRR, SLR, OMO, MSF, Repo); Inflation indices (CPI, WPI, GDP deflator); Balance of Payments; Direct/Indirect tax classification; Fiscal Responsibility (FRBM); Capital vs current account.',
    Environment: 'Wetlands & Ramsar; Tiger/Elephant reserves; Wildlife schedules (esp. Sch I); CITES & IUCN categorization; Indigenous tree species & invasives; Soil types & erosion; National parks vs WLS vs Biosphere Reserve.',
    Geography: 'Western Ghats biodiversity; Northeast tribes & rivers; Monsoon mechanics; Crop-soil-rainfall correlation; Map-based "places in news"; Volcanic/seismic zones; Drainage systems.',
    History: 'Indus Valley sites & artefacts; Buddhist councils & schools; Bhakti-Sufi saints; Mauryan & Gupta administration; Revolt of 1857; Constituent Assembly debates; Specific INC sessions.',
    'Art & Culture': 'Classical dances (Mohiniyattam, Manipuri esp.); Temple architecture (Nagara/Dravida/Vesara); GI tags; UNESCO sites; Specific musical instruments.',
    'S&T': 'Vaccine types; ISRO missions; Quantum & semiconductor basics; Biotechnology techniques (CRISPR, recombinant DNA); Nuclear reactor types; Space tech.',
    IR: 'UN bodies & SDGs; G20/G7/BRICS/SCO; Bilateral exercises; FTAs; Strait/sea geographies.'
  },

  revivedTopics: [
    { revived: 2024, topic: 'Bhakti movement + specific saints',          last: 'Asked 2018' },
    { revived: 2023, topic: 'Colonial economic drain theorists',          last: 'Asked 2017' },
    { revived: 2025, topic: 'Banking operations basics (CRR-SLR-LAF)',    last: 'Asked 2020' },
    { revived: 2024, topic: 'Specific volcanic locations',                last: 'Asked 2017' },
    { revived: 2025, topic: 'European geography (regions ↔ countries)',   last: 'First time in this format' },
  ],
  watch2026: [
    'British-era Acts (Charter Acts, Govt of India Acts)',
    'Mauryan administration',
    'Specific ancient texts (Sangam, Buddhist canons)',
    'Physical geography of Africa / South America',
    'Early cooperative movement'
  ]
};
