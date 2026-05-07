/* ============================================================
 * HIGH-FREQUENCY TOPICS — Subject-wise Heat Map (Phase 2)
 * Importance: 🔴 Extremely High · 🟠 High · 🟡 Moderate · 🟢 Low
 * Probability is a 2026 pattern-derived estimate, not a guarantee.
 * ============================================================ */
window.UPSC_HEATMAP = {
  legend: [
    { dot: 'imp-red',    label: 'Extremely High — must master', emoji: '🔴' },
    { dot: 'imp-orange', label: 'High',                          emoji: '🟠' },
    { dot: 'imp-yellow', label: 'Moderate',                       emoji: '🟡' },
    { dot: 'imp-green',  label: 'Low',                            emoji: '🟢' }
  ],

  subjects: [
    {
      id: 'polity', name: 'Polity & Governance', color: '#6366f1',
      framing: '"With reference to [body/article], consider the following statements: ... How many of the above are correct?"',
      traps: 'Confusing Constitutional vs Statutory; Confusing Articles 16(4) vs 16(4A) vs 16(4B); Mistaking Money Bill provisions; Wrong Schedules attribution.',
      topics: [
        ['Fundamental Rights (Art 14, 19, 21) — scope, exceptions, judicial pronouncements', '12+', 'Statement-based, "consider the following"', 'Very High', 'red'],
        ['DPSP & Fundamental Duties (Art 36–51, 51A)', '7', 'Direct identification + linking to Acts', 'High', 'red'],
        ['Constitutional vs Statutory vs Executive bodies (NHRC, NCW, Lokpal, CIC, CAG, EC, UPSC, FC, NITI Aayog)', '9', '"Which is constitutional/statutory"', 'Very High', 'red'],
        ['Schedules (5th: Tribal areas, 6th: NE, 9th: Land reforms, 10th: Anti-defection)', '8', 'Match-pair + statement', 'Very High', 'red'],
        ['Emergency provisions (Art 352, 356, 360)', '5', 'Conceptual statements', 'Moderate', 'orange'],
        ['Centre-State legislative relations (Art 245–263)', '6', 'Tricky distinctions', 'High', 'orange'],
        ['Parliament — sessions, procedures, motions, ordinances (Art 123, 213)', '9', 'Procedural detail', 'Very High', 'red'],
        ['Money Bill vs Financial Bill vs Ordinary Bill (Art 110, 117)', '5', 'Hybrid with Budget CA', 'High', 'red'],
        ['Anti-defection law (10th Sch) — recent rulings', '4', 'CA-driven', 'High (after 2024–25 SC verdicts)', 'orange'],
        ['Election Commission — powers, MCC, model conduct', '4', 'CA-driven', 'Very High (2024 LS, state polls)', 'red'],
        ['Panchayati Raj (73rd) & Municipalities (74th)', '6', 'Schedule 11 & 12 details', 'High', 'orange'],
        ['Judicial review & Basic Structure', '5', 'Landmark cases', 'Moderate', 'orange'],
        ['Inter-State Council, Zonal Councils, GST Council', '4', 'Cooperative federalism', 'High', 'orange'],
        ['Finance Commission (16th FC notable in 2026)', '5', 'FC mandate, devolution share', 'Very High (16th FC submitted)', 'red'],
        ['Citizenship (Art 5–11) + CAA', '3', 'CA-loaded', 'Moderate', 'yellow'],
        ['Governor\'s discretionary powers (Art 163, 200)', '3', 'TN/Punjab/Kerala SC verdicts', 'High (revival likely)', 'orange'],
        ['Preamble — keywords, amendments', '4', 'Direct factual', 'Moderate', 'yellow'],
        ['Writs (Art 32, 226) — types, jurisdiction', '4', 'Match-pair', 'High', 'orange'],
        ['Advocate-General, Attorney-General, Solicitor-General', '3', 'Constitutional identification', 'Moderate', 'yellow'],
        ['RTI Act, Lokpal Act 2013, Whistleblower Act', '4', 'Statement-based', 'Moderate', 'yellow']
      ]
    },
    {
      id: 'economy', name: 'Economy', color: '#10b981',
      framing: '"With reference to [scheme/index], which of the statements given above is/are correct?"',
      traps: '2025 surge: Banking operations + scheme application detail. 2026 likely to retain Economy weight at 15–18Q given Budget 2026 freshness.',
      topics: [
        ['Monetary policy instruments (Repo, Reverse Repo, MSF, SDF, CRR, SLR, OMO, LAF)', '11', 'Operational mechanism', 'Very High', 'red'],
        ['Inflation — CPI, WPI, Core, Headline, GDP deflator', '8', 'Index composition', 'Very High (inflation 1.7% FY26 historic low)', 'red'],
        ['GDP, GVA, GNP, NNP — at factor cost vs market price', '7', 'Definition-based', 'High', 'red'],
        ['Balance of Payments — Current vs Capital A/c', '6', 'Component classification', 'High', 'orange'],
        ['Banking — Commercial vs RRB vs Co-op vs Payment vs SFB', '7', '"Which type is allowed to..."', 'Very High (2025 trend)', 'red'],
        ['NPA, Bad Bank (NARCL), IBC', '5', 'Process detail', 'High (S&P upgrade Dec 2025)', 'orange'],
        ['Direct vs Indirect tax; GST structure & GST Council', '8', 'Classification', 'Very High', 'red'],
        ['Capital markets — Primary, Secondary, IPO, FPO; SEBI', '5', 'Definition + regulator', 'High', 'orange'],
        ['FDI vs FII/FPI; ECB; ADR/GDR', '4', 'Type identification', 'Moderate', 'orange'],
        ['Schemes: PMJDY, Mudra, PMSBY, PMJJBY, APY, Stand-up India', '9', 'Eligibility + components', 'Very High', 'red'],
        ['Agriculture — MSP, PDS, eNAM, MSP-procurement crops', '7', 'Process + crop list', 'High', 'red'],
        ['PLI Schemes (14 sectors; ₹2 lakh cr investment, 12.6 lakh jobs)', '5', 'CA-heavy', 'Very High (Budget 2026)', 'red'],
        ['Logistics — PM Gati Shakti, NLP, BharatNet', '4', 'Component identification', 'High', 'orange'],
        ['Foreign Trade — FTA list, RCEP, IPEF, India-UK, India-EU', '5', 'Bilateral details', 'Very High (India-EU FTA 2026)', 'red'],
        ['Forex Reserves, IMF/SDR, Currency swap', '4', 'RBI report-based', 'High (FX $701.4 bn Jan 2026)', 'orange'],
        ['Indices: HDI, GHI, GII, EPI, GCI, LPI', '6', 'Publisher + India rank', 'Very High', 'red'],
        ['Financial Inclusion Index, Digital Payment Index', '3', 'Recent values (FII 67.0 Mar 2025)', 'High', 'orange'],
        ['Fiscal terms: Revenue/Capital deficit, Primary deficit, FRBM', '5', 'Calculation logic', 'Moderate', 'orange'],
        ['16th Finance Commission', 'First time', 'Mandate, period, Chair', 'Extremely High', 'red'],
        ['Climate finance, Green bonds, Sovereign green bonds', '3', 'New instruments', 'High', 'orange']
      ]
    },
    {
      id: 'environment', name: 'Environment & Ecology', color: '#14b8a6',
      framing: '"Consider the following [animals/plants/wetlands]: ... How many of them are found in/are listed under...?"',
      traps: 'Sch I vs Sch II of WPA; CITES Appendix I vs II; "Found in India" vs "Native to India"; Ramsar criteria specifics.',
      topics: [
        ['Ramsar wetlands — India sites, criteria', '7', 'Site identification', 'Very High', 'red'],
        ['National Parks, WLS, Biosphere Reserves, Conservation Reserves', '11', '"Located in" + "key species"', 'Very High', 'red'],
        ['Tiger Reserves (~58)', '5', 'Recent additions (Veerangana Durgavati, Dholpur-Karauli, Madhav)', 'Very High', 'red'],
        ['Wildlife (Protection) Act schedules; CITES Appendix I/II/III', '6', 'Species categorization', 'High', 'red'],
        ['IUCN Red List categories; species in news', '9', '"Critically endangered" lists', 'Very High', 'red'],
        ['Indigenous vs invasive species', '5', 'Identification', 'Moderate', 'orange'],
        ['Climate conventions — UNFCCC, Kyoto, Paris, COP outcomes', '8', '"Aichi/Glasgow/Sharm el-Sheikh" details', 'Very High (COP30 Belém)', 'red'],
        ['Carbon markets, Carbon credits, Article 6 (Paris)', '4', 'Mechanism detail', 'High', 'orange'],
        ['Pollution: NCAP, NAAQS pollutants, AQI', '5', 'Pollutant + source', 'High', 'orange'],
        ['Environment Acts: EPA 1986, FCA, Biodiversity Act', '6', 'Provision identification', 'High', 'red'],
        ['Coral reefs, Mangroves, Seagrass — locations', '4', 'Map + biology', 'High', 'orange'],
        ['CBD, CMS, CITES, Stockholm, Basel, Rotterdam, Minamata', '8', 'Subject-matter pairing', 'Very High', 'red'],
        ['Project Tiger, Elephant, Cheetah, Lion, Crocodile, Snow Leopard, Dolphin', '6', 'Project years + outcomes', 'Very High (Cheetah Kuno 2026)', 'red'],
        ['Forest types & FSI Report; ISFR', '5', 'Forest cover state-wise', 'Very High (ISFR 2023→2025)', 'red'],
        ['Soil types (alluvial, black, red, laterite, arid, saline)', '4', 'Crop pairing', 'Moderate', 'orange'],
        ['Eco-sensitive Zones; Critically Polluted Areas', '3', 'CA-driven', 'Moderate', 'yellow'],
        ['Ocean ecosystems — coral bleaching, ocean acidification', '3', 'Conceptual', 'High (4th global bleaching event)', 'orange'],
        ['Renewables: Solar, Wind, Green Hydrogen Mission', '5', 'Capacity targets', 'Very High (NGHM ₹19,744 cr)', 'red'],
        ['Climate-rights jurisprudence (SC 2024 + ICJ 2025)', 'First time', 'Rights framework', 'High (fresh angle)', 'orange'],
        ['Biofuels — Ethanol blending (E20), 2G ethanol, CBG', '4', 'Policy details', 'High', 'orange']
      ]
    },
    {
      id: 'geography', name: 'Geography', color: '#f59e0b',
      framing: '"Given the following [places/rivers], how many are correctly matched with [country/feature]?"',
      traps: 'Largest/Smallest claims for Indian states have shifted post-2014 reorganization; recheck against 2011 Census + 2014 Telangana.',
      topics: [
        ['Indian rivers (esp. peninsular + NE) — tributaries, dams', '9', 'Map-based pairing', 'Very High', 'red'],
        ['Mountain passes — esp. Himalayan & NE', '6', '"Connects A–B"', 'Very High (border tensions)', 'red'],
        ['Western Ghats biodiversity & geography', '5', 'Species + states', 'High', 'red'],
        ['Indian Monsoon mechanism — ITCZ, jet streams, Coriolis', '5', 'Phenomena explanation', 'High', 'orange'],
        ['Soil types & agricultural pairing', '4', 'Crop-soil match', 'Moderate', 'orange'],
        ['Ocean currents, salinity, density', '3', 'Phenomenon detail', 'Moderate', 'orange'],
        ['Volcanic zones — Pacific Ring, Atlantic, Indian Ocean', '4', 'Map + tectonic', 'High', 'orange'],
        ['World physical features (Africa, S America, C Asia)', '5', 'Identification', 'Very High', 'red'],
        ['Cyclone naming, formation, Indian Ocean basins', '3', 'Storm tracks', 'High', 'orange'],
        ['Tribes of India — esp. PVTGs (75 groups)', '4', 'State pairing', 'Very High', 'red'],
        ['Mineral belts of India', '5', 'State-resource', 'High', 'orange'],
        ['Climate of India — types, distribution', '3', 'Climate-zone pairing', 'Moderate', 'yellow'],
        ['Drainage patterns (dendritic, trellis, etc.)', '2', 'Definition', 'Low', 'green'],
        ['Eastern Ghats, Aravalli, Vindhya — distinctive features', '4', 'Range-specific', 'Moderate', 'orange'],
        ['Indian agriculture geography (cropping patterns)', '4', 'State-crop', 'High', 'orange'],
        ['Time zones, latitude/longitude, IDL', '2', 'Calculation', 'Low', 'green'],
        ['Strategic straits, channels, isthmus (Hormuz, Bab-el-Mandeb, Malacca, Sunda, Bering)', '5', '"Connects"', 'Very High (Red Sea crisis)', 'red'],
        ['Latitudinal extents, Tropic of Cancer states', '3', 'Direct factual', 'Moderate', 'yellow'],
        ['Geographical Indication (GI) products & origin', '3', 'State pairing', 'High', 'orange'],
        ['Places-in-news (Ladakh, Manipur, Wayanad, Joshimath)', '8', 'Recent events', 'Very High', 'red']
      ]
    },
    {
      id: 'history', name: 'History', color: '#b45309',
      framing: 'Founder-organization pairings — UPSC loves swapping (Atmiya Sabha ↔ Brahmo Samaj ↔ Prarthana Samaj). Maintain a founder-table.',
      traps: 'Battle of Plassey/Buxar; Diwani; Permanent Settlement vs Ryotwari vs Mahalwari distinctions.',
      topics: [
        ['Indus Valley Civilization — sites, artefacts, town planning', '8', 'Statement + match-pair', 'Very High', 'red'],
        ['Vedic society — varna, jati, sabha-samiti', '4', 'Classification', 'High', 'orange'],
        ['Buddhism — councils, schisms, philosophy, texts', '7', 'King + place + outcome', 'Very High', 'red'],
        ['Jainism — tirthankaras, sects, councils', '5', 'Identification', 'High', 'red'],
        ['Mauryan administration & Ashoka edicts', '6', 'Procedural detail', 'Very High (revival likely)', 'red'],
        ['Gupta period — culture, administration', '5', 'Cultural artefacts', 'High', 'orange'],
        ['Sangam literature, Cholas, Pallavas', '5', 'Identification', 'High', 'orange'],
        ['Bhakti movement — saints, philosophies, regions', '6', 'Saint-region pairing', 'High (asked 2024)', 'red'],
        ['Sufi silsilas (Chishti, Suhrawardi, Qadiri, Naqshbandi)', '4', 'Order features', 'High', 'orange'],
        ['Delhi Sultanate (Slave, Khilji, Tughlaq, Sayyid, Lodi)', '4', 'Ruler-policy', 'Moderate', 'orange'],
        ['Mughal architecture, administration, mansabdari', '5', 'Conceptual', 'High', 'red'],
        ['Vijayanagara empire', '4', 'Cultural', 'Moderate', 'orange'],
        ['Battle of Plassey/Buxar; Diwani', '3', 'Sequence', 'Moderate', 'orange'],
        ['Permanent Settlement, Ryotwari, Mahalwari', '4', 'Comparative', 'High', 'red'],
        ['Charter Acts (1813, 1833, 1853)', '4', 'Provision identification', 'High (revival possible)', 'red'],
        ['1857 Revolt — leaders, regions, causes', '5', 'Match-pair', 'Very High', 'red'],
        ['INC sessions — early phase (1885–1905)', '5', 'Year + president', 'Very High', 'red'],
        ['Moderates vs Extremists; Surat Split 1907', '3', 'Conceptual', 'Moderate', 'orange'],
        ['Gandhi-led movements (Champaran, Kheda, NCM, CDM, QIM)', '7', 'Sequence + cause', 'Very High', 'red'],
        ['GoI 1919, 1935; Communal Award; Poona Pact', '5', 'Provision identification', 'Very High', 'red'],
        ['Constituent Assembly debates & members', '4', 'Member-role', 'High', 'red'],
        ['Revolutionary movements + INA + Naval mutiny', '4', 'Event sequence', 'High', 'orange'],
        ['Social/religious reform — Brahmo, Arya, Aligarh, Theosophical', '6', 'Founder-organization', 'Very High', 'red'],
        ['Education reforms — Wood\'s Despatch, Hunter, Sadler', '3', 'Year + provision', 'Moderate', 'orange'],
        ['Tribal/peasant revolts — Munda, Santhal, Kol, Bhil', '5', 'Leader-region', 'High', 'red']
      ]
    },
    {
      id: 'art', name: 'Art & Culture', color: '#ec4899',
      framing: 'Static infographic-style "How many of the above are correctly matched" 4-option questions where exhaustive memorisation locks in marks.',
      traps: 'Stupa vs Chaitya vs Vihara confusion; Bharatanatyam vs Kuchipudi state pairing; Hindustani vs Carnatic instruments.',
      topics: [
        ['Classical dances (8 forms)', 'Annual', 'State pairing', 'High', 'red'],
        ['Folk dances — state pairing', 'Annual', 'Match-pair', 'High', 'red'],
        ['Temple architecture — Nagara, Dravida, Vesara', 'Annual', 'Style identification', 'High', 'red'],
        ['Indian painting schools (Mughal, Rajput, Pahari, Deccani, Tanjore, Madhubani, Warli, Pattachitra)', 'Annual', 'School-region', 'High', 'orange'],
        ['Music — Hindustani vs Carnatic; gharanas; instruments', 'Annual', 'Tradition + instrument', 'High', 'orange'],
        ['Buddhist/Jain stupas, chaityas, viharas; Ajanta/Ellora/Bagh', 'Annual', 'Identification', 'High', 'orange'],
        ['UNESCO World Heritage sites (43 as of 2025)', 'Annual', 'Site identification', 'Very High', 'red'],
        ['GI tags (recent additions 2024–25)', 'Annual', 'State pairing', 'High', 'red'],
        ['Festivals — region/community/season', 'Annual', 'Festival pairing', 'Moderate', 'orange'],
        ['Literature — Sangam, classical Sanskrit, Bhakti vernacular', 'Annual', 'Author-text', 'Moderate', 'orange']
      ]
    },
    {
      id: 'st', name: 'Science & Technology', color: '#0ea5e9',
      framing: 'CA-loaded ISRO/missions, biotech, AI, semicon — anchor each fresh CA item to a static concept.',
      traps: '"First X in India/world" — multiple firsts coexist (first satellite-launch vs first cryogenic vs first crewed). Read full claim.',
      topics: [
        ['ISRO missions — Chandrayaan-3, Aditya-L1, Gaganyaan, NISAR, SpaDeX, Axiom-4', 'Annual', 'Mission features', 'Extremely High', 'red'],
        ['Bharatiya Antariksh Station (BAS, 2035)', 'New', 'Module timeline', 'Very High', 'red'],
        ['Vaccine types (mRNA, viral vector, inactivated, subunit) + Indian vaccines', 'Recurring', 'Type-vaccine match', 'High', 'red'],
        ['AI / GenAI / India AI Mission (₹10,300 cr); India-AI Impact Summit 2026', 'New', 'Mission outlay', 'Very High', 'red'],
        ['Semiconductors — ISM 2.0 (₹40,000 cr); Tata-PSMC, Micron Sanand', 'New', 'Fab status', 'Very High', 'red'],
        ['Quantum tech — National Quantum Mission (₹6,003 cr)', 'New', 'Verticals', 'Very High', 'red'],
        ['Biotech — CRISPR, mRNA, gene therapy, GM crops, BioE3 policy', 'Recurring', 'Technique-application', 'High', 'red'],
        ['Nuclear: Bharat Small Reactors, fusion (ITER, SPARC), thorium', 'Recurring', '3-stage program', 'High', 'orange'],
        ['Defence: BrahMos, Agni-V, S-400, Rafale, INS Vikrant, Pralay, Pinaka', 'Recurring', 'System identification', 'High', 'orange'],
        ['5G/6G, Open RAN, BharatNet', 'New', 'Spec details', 'High', 'orange'],
        ['Disease outbreaks — H5N1, Marburg, Mpox, Nipah, JN.1', 'Recurring', 'Disease vector', 'High', 'red'],
        ['Indigenous breakthroughs — drone tech (Drone Didi), HAL Tejas Mk-1A', 'Annual', 'Project name', 'Moderate', 'orange'],
        ['Battery tech — Li-ion, sodium-ion, Cobalt/Nickel', 'New', 'Components (2025 asked)', 'High', 'orange'],
        ['Cybersecurity — DPDP Act 2023, CERT-In, Zero Trust', 'New', 'Provision identification', 'Moderate', 'orange'],
        ['Blockchain, DLT, CBDC (e-Rupee)', 'Annual', 'Definition', 'High', 'orange']
      ]
    },
    {
      id: 'ir', name: 'International Relations', color: '#8b5cf6',
      framing: 'Membership maps + bilateral exercises + treaties + climate diplomacy.',
      traps: 'OECD vs G7 vs G20 vs BRICS vs MIKTA vs BIMSTEC overlapping memberships.',
      topics: [
        ['G20 (India 2023, Brazil 2024, SA 2025, US 2026)', 'Annual', 'Presidency rota', 'High', 'red'],
        ['BRICS expansion (Egypt, UAE, Iran, Ethiopia + Indonesia 2025)', 'New', 'Member list', 'Very High', 'red'],
        ['SCO, ASEAN, EU, AU — structures & summits', 'Recurring', 'Structure', 'High', 'red'],
        ['QUAD, AUKUS, IPEF, IMEEC', 'Annual', 'Membership + agenda', 'Very High', 'red'],
        ['India-Bhutan, India-Bangladesh (post-Hasina), India-Maldives reset', 'New', 'Bilateral status', 'Very High', 'red'],
        ['India-Middle East: I2U2, Iran-Israel-US war fallout, Chabahar', 'New', 'Strategic context', 'Very High', 'red'],
        ['India-Africa Forum Summit', 'Recurring', 'Theme + outcomes', 'High', 'orange'],
        ['Indo-Pacific — strategic concept, blue economy', 'Recurring', 'Conceptual', 'High', 'orange'],
        ['UN bodies — UNSC reform, UNGA, UNHRC, ICJ, ICC', 'Recurring', 'Body-mandate', 'High', 'red'],
        ['WTO, IMF, World Bank — recent decisions', 'Recurring', 'Recent decisions', 'Moderate', 'orange'],
        ['Bilateral exercises (Yudh Abhyas, Malabar, Vajra Prahar, Garuda Shakti)', 'Annual', 'Country pairing', 'High', 'red'],
        ['FTAs — India-UK, India-EU (2026), India-Oman, India-EFTA', 'New', 'Status', 'Very High', 'red'],
        ['Treaties: Indus Waters (under SC review post-Pahalgam), Teesta', 'New', 'Treaty status', 'High', 'orange'],
        ['Climate diplomacy — COP30 outcomes, Loss & Damage fund', 'New', 'Outcome detail', 'Very High', 'red']
      ]
    }
  ],

  // High-probability CA-integrated themes
  caHybridThemes: [
    '16th Finance Commission — Article 280, ToR, devolution',
    'Economic Survey 2025-26 — concepts: FY26 GDP 7.4%, inflation 1.7%, GII 38, PLI outcomes',
    'Budget 2026-27 — Biopharma Shakti, Semicon Mission 2.0, rare-earth corridors',
    'Climate-rights jurisprudence — Art 14 + 21 framework, ICJ advisory 2025',
    'Cheetah Project Kuno — IUCN, Sch I, ecological niche',
    'Gaganyaan ECLSS / Vyommitra / IDSS docking — concepts of LEO, life support',
    'NISAR — L-band/S-band radar, applications',
    'AI Impact Summit 2026 — global AI governance frameworks',
    'Critical minerals — list, KABIL, supply chains, recycling',
    'One Nation One Election — Constitutional provisions involved (Art 83, 172)',
    'DPDP Act 2023 — vs GDPR, Data Protection Board',
    'National Quantum Mission — qubits, superconducting, ion-trap',
    'Wetlands & Ramsar — 2024–25 additions',
    'WPA amendments + new schedule structure (post-2022)',
    'PM Vishwakarma, PM-SVANidhi, PM-KISAN updates'
  ]
};
