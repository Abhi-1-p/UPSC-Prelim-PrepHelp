/* ============================================================
 * PHASE 7 — Strategic Summary
 * ============================================================ */
window.UPSC_STRATEGY = {

  // Top 100 Most Important Topics (master compressed list)
  top100: {
    Polity: ['Fundamental Rights (Art. 14, 19, 21, 21A, 25-28)','DPSP (Art. 36-51)','President & Governor — emergency, ordinance, pardon','PM & Council of Ministers','Parliament — Money/Finance/CAA bills, joint sitting, sessions','Supreme Court & HCs — jurisdiction, judicial review, basic structure','Election Commission & CEC Act 2023','CAG','Finance Commission (16th FC)','UPSC, NHRC, CIC, NCSC/ST/BC','Schedules — esp. 5th, 6th, 8th, 11th, 12th','Anti-defection (10th Sch)','Constitutional Amendments (Art. 368)','Federalism — ISC, NITI Aayog, GST Council','Local Govt — 73rd/74th CAA','Tribal areas — Sch 6, Art 371 family','Citizenship + CAA','Recent SC judgments (Ranjitsingh climate-rights, Article 370 verdict, Money Bill route)'],
    Economy: ['National income concepts, GDP/GVA','Monetary policy — repo, MSF, SDF, CRR/SLR','Inflation — CPI/WPI, MPC','Banking system — SCBs, SFB, PB, RRB, NBFC','RBI functions','Fiscal policy — FRBM, deficit definitions','Budget 2026-27 highlights','Economic Survey 2025-26','GST and 16th FC','Public debt & sovereign bonds (SGreenB, SGB)','External sector — BoP, Forex, INR','Trade — FTAs, WTO, TFA','Agriculture — MSP, PM-KISAN, eNAM, FCI','Industry — PLI, MII, ISM','Indices — HDI/GII/GHI/EPI/LPI','Schemes — PMJDY, PMMY, PMAY, PMJAY','Capital markets — SEBI, mutual funds','IBC 2016, NCLT'],
    Environment: ['Biodiversity — KMGBF, CBD, NP, CP','Wetlands & Ramsar (89 sites)','WPA 1972 (post-2022) — 4 Schedules','Tiger Reserves (58), Project Tiger/Cheetah','IUCN Red List, CITES','NTCA, NBA, MoEFCC','Climate — UNFCCC, Paris, NDC, NCQG','India climate jurisprudence (Ranjitsingh)','NGHM ₹19,744 cr','CO2 absorbing technologies, CCUS','National Clean Air Programme','Eco-Sensitive Zones','Plastic, e-waste, EPR rules','Renewable energy — IREDA, ISA','Pollution sources, AQI, NAAQS','Forest types, FRA 2006'],
    Geography: ['Indian physiography & drainage','Monsoon mechanism, IOD, MJO','Tropic of Cancer states','Mountain passes','Mineral & energy resources, lithium','Cropping patterns, soils','Climate types & Köppen','Cyclones — IMD scale, IOD/MJO','World physiography — chokepoints','Ocean currents','Atmospheric phenomena — jet streams, ITCZ','Latitudes/longitudes practical implications','Places in news — Lakhpat, Galwan, Sela, Pangsau','PVTGs distribution'],
    'History & Culture': ['IVC sites & features','Vedic, Mahajanapadas, Mauryan, Gupta','Bhakti & Sufi','Mughal admin','Charter Acts 1813/33/53','GoI 1919, 1935','Gandhian movements','INC sessions (Calcutta, Lahore, Karachi, Lucknow)','Constituent Assembly','Classical dances (8)','Temple architecture (Nagara/Dravida/Vesara)','Painting schools, classical music','UNESCO sites (43)','GI tags 2024-25'],
    'Science & Technology': ['ISRO — Chandrayaan-3, Aditya-L1, NISAR, Gaganyaan, BAS','Defence — BrahMos, Agni-V (Divyastra), AMCA, Tejas','Biotech — CRISPR, NexCAR19, GM crops, BioE3','India AI Mission, DPDP Act','National Quantum Mission','Semiconductor Mission 2.0','Nuclear — 3-stage program, PFBR','Critical minerals, KABIL, MSP','Battery tech, ACC PLI','Space economy reforms (IN-SPACe, NSIL)','Health tech — vaccines, digital health','Cybersecurity, CERT-In'],
    'International Relations': ['G20, BRICS+ (Indonesia 2025), SCO, QUAD, AUKUS, I2U2','IMEC, Chabahar, INSTC','India\'s neighbourhood — Bhutan, Bangladesh, Myanmar, Maldives, Sri Lanka','UN reforms; ICJ advisory 2025','Defence diplomacy — exercises map','WTO, IMF, WB, ADB, AIIB, NDB'],
    'Social / Misc': ['Health & education schemes — Ayushman Bharat, NEP 2020','Demography — Census 2026, NFHS-5, demographic dividend']
  },

  // Top 50 Must-Revise Areas (last-7-day priority)
  top50: [
    ['16th Finance Commission','Polity/Eco','New, certain to feature'],
    ['Economic Survey 2025-26 figures','Economy','Direct factual asks'],
    ['Budget 2026-27 highlights','Economy','New schemes'],
    ['Climate-rights judgment (MK Ranjitsingh)','Polity/Env','Landmark 2024 case'],
    ['NISAR / Gaganyaan / BAS','S&T','High CA recency'],
    ['KMGBF + Loss & Damage Fund','Env','Multi-year recurring'],
    ['NCQG $300 bn (COP29)','Env/IR','Direct CA'],
    ['IMEC corridor','IR','Diplomatic flagship'],
    ['Chabahar 10-yr LTA','IR','Strategic recency'],
    ['BRICS+ Indonesia entry','IR','2025 milestone'],
    ['DPDP Act 2023 + IndiaAI Mission','S&T/Polity','Tech-policy convergence'],
    ['National Quantum Mission','S&T','Verticals + outlay'],
    ['India Semiconductor Mission 2.0','S&T/Eco','New ₹40k cr'],
    ['NGHM ₹19,744 cr + SIGHT','Env/S&T','Specific outlay'],
    ['PFBR Kalpakkam criticality 2024','S&T','Stage-2 milestone'],
    ['CEC & Other ECs Act 2023','Polity','New process'],
    ['Article 370 verdict','Polity','Recent judgment'],
    ['Tropic of Cancer 8 states','Geo','Repeated factual'],
    ['Mountain passes map','Geo','Annual feature'],
    ['Strategic chokepoints','Geo','IR-Geo overlap'],
    ['Critical minerals + KABIL + MSP','Eco/Geo','New policy frame'],
    ['Lithium Reasi + MMDR 2023','Geo/S&T','Recent reform'],
    ['WPA 2022 — 4 schedules','Env','Schedule restructure'],
    ['Ramsar India 89 sites','Env','Numerical recency'],
    ['New Tiger Reserves (Madhav, Ratapani, Durgavati, Dholpur-Karauli)','Env','2023-25 additions'],
    ['Coral bleaching 2024','Env','Global event'],
    ['UNESCO sites — Santiniketan, Hoysalas, Maratha forts','Culture','2023-25 additions'],
    ['GI tags 2024-25','Culture','Recurring topic'],
    ['PM Surya Ghar Muft Bijli','Schemes','New flagship'],
    ['PM-Vishwakarma','Schemes','One-year-old'],
    ['PM-JANMAN PVTGs','Schemes/Soc','Targeted recent'],
    ['Census 2026-27 first digital + caste','Soc','Imminent enumeration'],
    ['NFHS-5 TFR 2.0','Soc','Demographic shift'],
    ['NDC update — 50% non-fossil, 45% intensity','Env','Policy commitment'],
    ['Sela Tunnel','Geo/IR','Border infra'],
    ['INSAT-3DS, XPoSat, SpaDeX','S&T','2024-25 ISRO'],
    ['NexCAR19 indigenous CAR-T','S&T','First in country'],
    ['Mission Divyastra MIRV','S&T','DRDO milestone'],
    ['Agriculture — soil nutrient mission, PM-KISAN','Eco','DPSP overlap'],
    ['Sovereign Green Bonds + SGB + Bharat Bond ETF','Eco','Bond hierarchy'],
    ['RBI FI-Index 67.0','Eco','Latest figure'],
    ['PVTGs (75; Odisha 13)','Soc/Geo','Numerical'],
    ['Mansabdari, Dahsala, Jagir','History','Mughal admin classic'],
    ['Bhakti-Sufi saints map','Hist/Cult','Annual feature'],
    ['Charter Acts 1813/1833/1853','History','Reform sequence'],
    ['Cabinet Mission, Constituent Assembly','History','Foundational'],
    ['IVC sites + features','History','Map+feature'],
    ['Buddhist 4 councils','History','King-place mapping'],
    ['India aviation 3rd-largest, 164 airports','Eco/Infra','Recent CA stat'],
    ['Demographic dividend till 2050s','Soc','Conceptual']
  ],

  // 17-day plan
  plan17: [
    { days:'1–3',  block:'Polity (Laxmikant fast-revision) + DPSP/FR',           goal:'Cover canonical 100 articles', hours:5 },
    { days:'4–6',  block:'Economy (ES + Budget 2026-27 + NCERT 11/12)',          goal:'Number-anchoring',             hours:5 },
    { days:'7–9',  block:'Environment + Ecology + Climate CA',                   goal:'Conventions + judgments + NGHM', hours:5 },
    { days:'10–11',block:'Geography (Indian + map work)',                        goal:'Passes, rivers, places-in-news', hours:4 },
    { days:'12–13',block:'History (Modern bias + IVC + Bhakti/Sufi)',            goal:'Sequence-anchored revision',  hours:4 },
    { days:'14',   block:'S&T + IR (CA last-pass)',                              goal:'ISRO + DRDO + missions + treaties', hours:6 },
    { days:'15',   block:'Mock test + analysis (full 2-hour paper)',             goal:'Identify weak topics',         hours:6 },
    { days:'16',   block:'Targeted revision of weak topics + Top-50 list',       goal:'Patch holes',                  hours:5 },
    { days:'17',   block:'Light glance + sleep',                                 goal:'Conserve cognition',           hours:3 }
  ],

  // Best-ROI clusters
  bestROI: [
    'Bodies\' constitutional/statutory map — one printable list covers 1-2 questions/year.',
    'Schedules of the Constitution — single chart, recurring asks.',
    'DPSP article numbers — 36-51 range, classic UPSC ground.',
    'Parliamentary special procedures (Money Bill, CAA, joint sitting, removal of judges, etc.) — one comparative table = 1+ Q most years.',
    'Climate finance & frameworks (UNFCCC → Paris → NCQG → KMGBF) — one timeline.',
    'ISRO mission tabular (year, vehicle, payload, purpose) — one mission table.',
    'Indices & their publishers — one chart fits 1 page, often saves 1-2 Qs.',
    'Critical minerals + lithium + KABIL + MSP — one policy cluster.',
    'Multilateral grouping membership map (G20, BRICS+, SCO, QUAD, AUKUS, I2U2, ASEAN+, OECD, BIMSTEC, IORA) — one Venn-style chart.',
    'Tropic of Cancer states + mountain passes + strategic chokepoints — one map, three Qs of value.'
  ],

  lowEffortHigh: [
    'Static infographic-style tables (dance forms, GI tags, schemes-year-ministry).',
    'Schemes by ministry/year/coverage.',
    'Reports & their publishers — 1 page covers most years.',
    'Constitutional articles\' numerical anchoring — Art. 17, 21, 32, 51A, 280, 324, 368.'
  ],

  mistakes: [
    'Aggressive guessing on counting questions ("How many of the above") — even 50% subjective confidence on each of 4 statements makes the joint accuracy 6.25% pure; negative marking destroys you. Skip if any statement is unverified.',
    'Falling for extreme words — "only", "all", "always", "never" — they\'re rarely true in social-science statements. Default to suspicion.',
    'CA bias — over-rotating toward the last 3 months and missing the 6-month window.',
    'Ignoring Schedule/Article numbers — these alone yield ~3-5 questions/year.',
    'Skipping "Budget + ES" line-by-line — direct factual asks.',
    'Confusing constitutional vs statutory bodies — the most-asked elimination axis.',
    'Mixing up dam-river, dance-state, treaty-purpose pairs — pure rote, pure marks.',
    'Marking all four-statement Qs without elimination — disciplined skipping > pretentious confidence.',
    'Believing coaching-institute mock answers — they overfit; UPSC is unique.',
    'Final-day cramming new material — diminishing returns; consolidate, don\'t expand.'
  ],

  // Confidence band → action table
  confidenceBands: [
    { band:'Direct knowledge',          meaning:'All 4 statements verified',           action:'Mark',          ev:'+2.0' },
    { band:'3 of 4 eliminated',         meaning:'Down to 1 option',                    action:'Mark',          ev:'+2.0' },
    { band:'2 of 4 eliminated',         meaning:'50/50',                                action:'Mark',          ev:'+0.667' },
    { band:'1 of 4 eliminated',         meaning:'33% chance',                           action:'Marginal',      ev:'+0.222' },
    { band:'No elimination',            meaning:'Pure guess',                           action:'Skip',          ev:'-0.005' },
    { band:'Counting Q (1+ unsure)',    meaning:'Joint probability < pure guess',       action:'Skip',          ev:'Negative' }
  ],

  // Pass strategy
  passStrategy: [
    { pass:'Pass 1 (45 min)',  goal:'Mark only direct-knowledge questions. Aim 30–40 attempts.' },
    { pass:'Pass 2 (40 min)',  goal:'Tackle 2-elimination and 3-elimination questions. Add 20–30 more.' },
    { pass:'Pass 3 (20 min)',  goal:'Review marked-but-unsure; convert if extra info recalled.' },
    { pass:'Pass 4 (15 min)',  goal:'OMR transfer + verification.' }
  ],

  attemptByAccuracy: [
    { acc:'90%', attempts:95, expected:161, note:'Top-tier; heavy attempting fine' },
    { acc:'80%', attempts:88, expected:135, note:'Safe attempting; small skip buffer' },
    { acc:'75%', attempts:80, expected:120, note:'Cut-off-comfortable' },
    { acc:'70%', attempts:75, expected:105, note:'Borderline — skip aggressively' },
    { acc:'65%', attempts:70, expected:91,  note:'Skip more than attempt for any unsure Q' },
    { acc:'<65%',attempts:65, expected:'<80', note:'Reconsider attempt strategy entirely' }
  ],
  cutoffNote:'Cut-off historically ~85-100 in General; calibrate against your last 10 mock scores.',

  ideal: [
    'One source per subject. No new source after 17 May 2026.',
    'Two passes minimum of the Top 50 list above.',
    'Active recall over re-reading. Close the book; speak the answer; check; correct.',
    'Mocks are diagnostic, not predictive. Don\'t chase a mock score — analyse error categories (knowledge gap vs trap-fall vs panic).',
    'Daily current-affairs anchoring — one consolidated CA compilation, no scattered sources.',
    'Map work at least every 3 days — places, rivers, passes.'
  ],

  topperOps: [
    'They commit to a skip threshold before opening the paper. Discipline > daring.',
    'They read all 4 options before marking — many tricks live in the difference between "1 and 2 only" and "1, 2 and 4 only".',
    'They use statement-elimination first, options-elimination second. Crossing out a wrong statement collapses 4 options into 1-2.',
    'They mark the question number on the booklet with one of three symbols: ✓ (sure, mark), ? (revisit), ✗ (skip permanently). Pass 2 only revisits ?.',
    'They never change a marked answer without a concrete reason (new fact recalled, statement re-read clarified). Hunches lose marks on average.',
    'They assume the last 1 hour is for OMR + cleanup, not new attempts.',
    'They don\'t read the question stem twice unless there\'s a noun they didn\'t recognise. Time-discipline > thoroughness.'
  ],

  closing: [
    'Predictions are probabilistic. Tier-A 50-themes ≠ guarantees. UPSC always lobs ~10-15 unanticipated questions; that\'s by design. Your job is to bank the predictable 70 marks rather than chase the unpredictable 30.',
    'Honesty > pretense in self-assessment. If you don\'t know the GoI Act 1935 distinctions, the time to admit it is now, not in the hall.',
    'Sleep > one more revision pass. Cognitive sharpness on exam day beats 20 extra facts.'
  ]
};
