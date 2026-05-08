/* ============================================================
 * PHASE 5 — 50 PREDICTIVE THEMES FOR PRELIMS 2026
 * Probability scores are pattern-derived expert estimates,
 * not statistical forecasts. Treat as revision priorities.
 * ============================================================ */
window.UPSC_THEMES = {
  tiers: [
    {
      id: 'A', label: 'Tier A — Extremely High (≥70%)', color: 'red',
      blurb: 'These are first-pass, must-revise themes. The combination of CA freshness and historical UPSC behaviour makes them strong candidates.',
      items: [
        { i:1,  topic:'16th Finance Commission',                      subj:'Polity/Eco', detail:'ToR, period, mandate, Article 280; Chair Arvind Panagariya.' },
        { i:2,  topic:'Economic Survey 2025-26 / Budget 2026-27',     subj:'Economy',    detail:'PLI outcomes, semicon, biopharma, GDP, inflation, capex.' },
        { i:3,  topic:'Climate-rights jurisprudence',                 subj:'Polity/Env', detail:'MK Ranjitsingh SC ruling (Mar 2024); ICJ advisory (Jul 2025); ITLOS advisory.' },
        { i:4,  topic:'ISRO Gaganyaan (G1/G2 in 2026)',               subj:'S&T',        detail:'ECLSS, Vyommitra, IDSS, recovery.' },
        { i:5,  topic:'NISAR',                                         subj:'S&T',        detail:'Joint with NASA; dual L+S band SAR; applications.' },
        { i:6,  topic:'Bharatiya Antariksh Station',                   subj:'S&T',        detail:'Modular design, 2035 timeline.' },
        { i:7,  topic:'Critical minerals & KABIL',                    subj:'Eco/Geo',    detail:'List of 30, lithium J&K, supply chain, recycling.' },
        { i:8,  topic:'National Green Hydrogen Mission',               subj:'Env/S&T',    detail:'SIGHT, target 5 MMT.' },
        { i:9,  topic:'DPDP Act 2023',                                subj:'S&T/Polity', detail:'Features, vs GDPR, Data Protection Board.' },
        { i:10, topic:'One Nation One Election',                       subj:'Polity',     detail:'Kovind Committee report; Articles involved (83, 172); concerns.' },
        { i:11, topic:'WPA 1972 amendment 2022',                       subj:'Env',        detail:'Schedule consolidation; CITES alignment.' },
        { i:12, topic:'National Quantum Mission',                      subj:'S&T',        detail:'Verticals, time horizon, 2031 goals.' },
        { i:13, topic:'India Semiconductor Mission 2.0',               subj:'S&T/Eco',    detail:'Fabs approved, OSAT, ATMP, ₹40,000 cr.' },
        { i:14, topic:'AI India Mission + India-AI Summit 2026',       subj:'S&T/IR',     detail:'Governance frameworks; AIRAWAT.' },
        { i:15, topic:'Project Cheetah',                                subj:'Env',        detail:'2022 onwards Kuno; Gandhi Sagar plan; IUCN status.' },
        { i:16, topic:'COP30 Belém outcomes + Paris Article 6',        subj:'Env/IR',     detail:'NDC 3.0, forest finance, carbon market rules.' },
        { i:17, topic:'PM-Vishwakarma',                                 subj:'Schemes',    detail:'18 trades, components.' },
        { i:18, topic:'Indo-Pacific & QUAD',                            subj:'IR',         detail:'Recent summits, deliverables.' },
        { i:19, topic:'BRICS expansion',                                subj:'IR',         detail:'New members, agenda (de-dollarization, BRICS pay).' },
        { i:20, topic:'G20 South Africa 2025 → US 2026',                subj:'IR',         detail:'Themes, India\'s continuing initiatives.' }
      ]
    },
    {
      id: 'B', label: 'Tier B — High (50–70%)', color: 'orange',
      blurb: 'Second-pass themes — strong candidates if any CA cluster lands here.',
      items: [
        { i:21, topic:'India-Maldives reset + Bangladesh post-Hasina', subj:'IR',         detail:'Strategic reset; Hasina in India; minority concerns.' },
        { i:22, topic:'Indus Waters Treaty status',                    subj:'IR',         detail:'Post-Pahalgam abeyance.' },
        { i:23, topic:'Chabahar 10-year deal',                         subj:'IR',         detail:'May 2024 strategic significance.' },
        { i:24, topic:'IMEC corridor',                                 subj:'IR',         detail:'Components, partners, status.' },
        { i:25, topic:'Anti-defection law + Speaker\'s role',          subj:'Polity',     detail:'Recent SC verdicts.' },
        { i:26, topic:'Governor\'s powers vis-à-vis state legislature',subj:'Polity',     detail:'TN/Kerala/Punjab cases.' },
        { i:27, topic:'Election Commissioners appointment',            subj:'Polity',     detail:'2023 Act, post-Anoop Baranwal.' },
        { i:28, topic:'CRR-SLR-LAF mechanics',                          subj:'Eco',        detail:'Asked in 2025; UPSC may reverse-test.' },
        { i:29, topic:'Ramsar additions 2024-25',                       subj:'Env',        detail:'89-site count.' },
        { i:30, topic:'New Tiger Reserves',                             subj:'Env',        detail:'Veerangana, Madhav, Dholpur-Karauli, Ratapani.' },
        { i:31, topic:'National Wildlife Board reorganization',         subj:'Env',        detail:'Post-2022 amend.' },
        { i:32, topic:'Global Biodiversity Framework (KMGBF 2022)',     subj:'Env',        detail:'30x30, 23 targets.' },
        { i:33, topic:'Genome India + BioE3 Policy 2024',                subj:'S&T',        detail:'Biotech policy.' },
        { i:34, topic:'NexCAR19 (CAR-T cell therapy)',                  subj:'S&T',        detail:'First indigenous gene therapy.' },
        { i:35, topic:'Bharat NCAP + EV-30@30',                          subj:'S&T/Eco',    detail:'Vehicle safety, EV adoption.' },
        { i:36, topic:'6G Bharat Vision 2023 + Spectrum Act',            subj:'S&T',        detail:'2030 target.' },
        { i:37, topic:'Indo-Pacific Maritime Domain Awareness (IPMDA)',  subj:'IR',         detail:'QUAD initiative.' },
        { i:38, topic:'Lokpal vs Lokayukta',                              subj:'Polity',     detail:'Distinctions.' },
        { i:39, topic:'Constitutional vs Statutory bodies',              subj:'Polity',     detail:'Perennial favourite.' },
        { i:40, topic:'Mughal-Mauryan administration',                   subj:'History',    detail:'UPSC due for revival.' }
      ]
    },
    {
      id: 'C', label: 'Tier C — Moderate (30–50%)', color: 'yellow',
      blurb: 'Third-pass themes — revise if first two tiers covered.',
      items: [
        { i:41, topic:'Bhakti-Sufi cross-pollination',                   subj:'History',    detail:'Saints with overlapping regions.' },
        { i:42, topic:'Vesara temple architecture',                       subj:'Art',        detail:'Hoysala specifics.' },
        { i:43, topic:'8th Schedule languages',                           subj:'Polity',     detail:'Addition demands (Bhojpuri, Tulu, etc.).' },
        { i:44, topic:'PVTGs — 75 list',                                  subj:'Geo/Soc',    detail:'Tribal distribution + PM-JANMAN.' },
        { i:45, topic:'Carbon Credit Trading Scheme 2023',               subj:'Env/Eco',    detail:'Sectoral coverage, Indian Carbon Market.' },
        { i:46, topic:'Coral bleaching',                                  subj:'Env',        detail:'4th global event 2024–25.' },
        { i:47, topic:'Cyclone naming + intensity classification',        subj:'Geo',        detail:'Indian cyclones (Remal, Dana, Fengal).' },
        { i:48, topic:'Latitudinal limits + Tropic of Cancer states',     subj:'Geo',        detail:'Always-tested.' },
        { i:49, topic:'Disaster Management Act 2005 + amendments',        subj:'Polity',     detail:'Post-2024 amendments.' },
        { i:50, topic:'Indian classical music — gharanas, ragas, instruments', subj:'Art',  detail:'Hindustani vs Carnatic distinctions.' }
      ]
    }
  ],

  overlooked: [
    { id:1,  text:'Constitution Amendment Acts post-100th — 101st GST, 102nd NCBC, 103rd EWS, 104th Anglo-Indian removal extension, 105th Karnataka SC list, 106th Women\'s Reservation.' },
    { id:2,  text:'State autonomy in Sch 6 areas (Assam, Meghalaya, Tripura, Mizoram autonomous councils — distinct from Sch 5).' },
    { id:3,  text:'Specific Article numbers of less-quoted articles — Art 39A, Art 200, Art 213, Art 312, Art 371-J (Hyderabad-Karnataka).' },
    { id:4,  text:'Revolts: Tribal & peasant — leader-region pairing with non-obvious choices (Pasayat, Tippu Sultan tribal context, Rampa rebellion).' },
    { id:5,  text:'Decentralization: 11th & 12th Schedule subjects — most know they exist, few know list.' },
    { id:6,  text:'GI tags location/origin trap.' },
    { id:7,  text:'OECD vs G7 vs G20 vs BRICS vs MIKTA vs BIMSTEC overlapping memberships.' },
    { id:8,  text:'Critical minerals Recycling Policy 2024 + circular economy.' },
    { id:9,  text:'India\'s Climate Vulnerability Index + state rankings.' },
    { id:10, text:'Marine PA system of India + EEZ.' }
  ],

  wildcards: [
    'Cybersecurity & Critical Information Infrastructure — NCIIPC, sector specifics.',
    'Indian Knowledge Systems (NEP push) — Ayurveda, Yoga, Sanskrit grammarians, ancient mathematicians.',
    'Sports + Olympics 2024 Paris / 2028 LA prep — has appeared sporadically.'
  ]
};
