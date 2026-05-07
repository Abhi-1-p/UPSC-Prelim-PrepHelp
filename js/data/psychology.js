/* ============================================================
 * PHASE 3 — UPSC Question Psychology + Decoder
 * ============================================================ */
window.UPSC_PSYCHOLOGY = {
  paperShift: {
    title: 'The 2024–2025 paper-setting model — what changed',
    intro: 'UPSC has shifted from "do you know X?" to "do you know X with surgical precision, and can you spot a half-truth?" Three structural moves prove this:',
    bullets: [
      '67% multi-statement format in 2025 — 39 with 3 statements, 15 with 2, 9 with 4, 4 with 5+.',
      '"How many of the above are correct" replacing "Which of the above is/are correct" — kills binary elimination. You now need to evaluate every statement independently.',
      'Domain mixing in single questions — e.g., a Polity stem with Environment evaluation; an Economy stem testing Geography.'
    ]
  },

  // The 7 distractor patterns UPSC reuses
  distractors: [
    {
      pattern: 'Extreme word trap',
      desc: 'Statement uses ONLY / ALL / NONE / ALWAYS / EXCLUSIVELY / NEVER',
      counter: 'Default suspicion: ~85% of "extreme word" statements are FALSE in UPSC. The 15% that are true are well-known constitutional certainties (e.g., "Only Parliament can amend the Constitution" — true). Apply rule with care.',
      icon: 'alert-triangle', color: 'red'
    },
    {
      pattern: 'Half-true statement',
      desc: 'First half correct, second half subtly wrong (often a wrong year, wrong body, wrong scope)',
      counter: 'Read each statement clause-by-clause; treat conjunction "and" / "but" as a checkpoint.',
      icon: 'split', color: 'orange'
    },
    {
      pattern: 'Inflated scope',
      desc: 'Adds qualifier "in all states", "for every citizen", "without exception" to an otherwise true fact',
      counter: 'Verify the qualifier specifically — UPSC inflates scope to test depth.',
      icon: 'maximize-2', color: 'amber'
    },
    {
      pattern: 'Year/number swap',
      desc: 'Correct fact except year or number swapped (1858↔1861, 73rd↔74th)',
      counter: 'Memorize key dates/numbers exactly; suspect when years cluster.',
      icon: 'shuffle', color: 'yellow'
    },
    {
      pattern: 'Body confusion',
      desc: 'Replaces a constitutional body with a statutory one or vice versa',
      counter: 'Maintain a Constitutional/Statutory/Executive table (in cheat sheet § Polity).',
      icon: 'layers', color: 'indigo'
    },
    {
      pattern: 'Reverse causality',
      desc: '"X causes Y" inverted to "Y causes X"',
      counter: 'Trace direction; common in monsoon, monetary, ecology questions.',
      icon: 'refresh-cw', color: 'cyan'
    },
    {
      pattern: 'Implausible neighbour',
      desc: 'One option is bizarrely wrong to make others look correct',
      counter: 'Avoid relief — the other three still need scrutiny.',
      icon: 'help-circle', color: 'fuchsia'
    }
  ],

  // Statement decision matrix
  decisionMatrix: {
    title: '"How many of the above are correct?" — decision flow',
    steps: [
      'Step 1 — Mark each statement as KNOW-TRUE | KNOW-FALSE | UNSURE',
      'Step 2 — If ≥2 statements are KNOW-FALSE → answer cannot be "All four"',
      'Step 3 — If ≥3 statements are KNOW-TRUE → high probability "All four" or "Only three"',
      'Step 4 — If 2 KNOW-TRUE + 2 UNSURE → SKIP unless penalty math allows guess',
      'Step 5 — Probability of guessing right = 25%; expected loss ≈ break-even'
    ],
    rule: 'With even one unsure statement out of 4 in counting format, the EV of guessing is negative. SKIP. For older "Which of the statements is/are correct" with 4 options ("1 only / 2 only / Both / Neither"), skipping with 1 unsure of 2 is also EV-negative.'
  },

  // Subject-wise heuristics
  subjectHeuristics: [
    { subj: 'Polity',     rule: 'If a statement contradicts a fundamental rights/judicial review certainty → false. If it claims something is "non-justiciable" → check DPSP vs FR vs Preamble.' },
    { subj: 'Economy',    rule: 'Quantitative claims (rates, percentages) without source citation → check Economic Survey or Budget; if it doesn\'t appear in last 12 months, suspect.' },
    { subj: 'Environment',rule: '"Found only in India" is rarely true (most species cross borders); "Critically Endangered" status changes — verify against IUCN 2024–25.' },
    { subj: 'Geography',  rule: '"Largest/Smallest" claims for Indian states have shifted post-2014 reorganization; recheck against 2011 Census + 2014 Telangana.' },
    { subj: 'History',    rule: 'Founder-organization pairings — UPSC loves swapping (Atmiya Sabha ↔ Brahmo Samaj ↔ Prarthana Samaj). Maintain founder-table.' },
    { subj: 'S&T',        rule: '"First X in India/world" — multiple firsts coexist (first satellite-launch vs first cryogenic vs first crewed). Read full claim.' }
  ],

  // Guess vs skip arithmetic
  guessSkip: {
    title: 'Guess vs Skip — the EV arithmetic',
    note: 'UPSC: +2 correct, −0.66 wrong, 0 unattempted',
    rows: [
      { scenario: 'Pure 4-option guess (no clue)',          p: '0.25', ev: '0.25(2) − 0.75(0.66) = +0.005', action: 'Marginally positive — risky in counting Qs' },
      { scenario: '1 option eliminated (3 left)',           p: '0.33', ev: '0.33(2) − 0.67(0.66) = +0.221', action: 'Guess' },
      { scenario: '2 options eliminated (2 left)',          p: '0.50', ev: '0.50(2) − 0.50(0.66) = +0.670', action: 'Always guess' },
      { scenario: 'Counting Q with 1/4 unsure',             p: '~0.25 (often less)', ev: 'Around break-even or negative', action: 'Skip default' },
      { scenario: 'Pure CA factual you have never seen',    p: '0.25', ev: '+0.005', action: 'Skip' }
    ],
    topperRule: 'Attempt budget by accuracy band. Total questions = 100. Cutoff bands historically 87–98 for general. 80%+ accuracy → 78–82 attempts. 70–80% → 85–90. <70% → 90–95 (and accept higher variance).'
  },

  // CA → static conversion model
  conversion: {
    title: 'How CA becomes static — the conversion model',
    intro: 'UPSC rarely asks "What was X event?" in raw form. Conversion templates:',
    rows: [
      { raw: '16th FC submitted report',           static: '"Consider the following with reference to Finance Commission: [statements about Article 280, ToR, recommendation horizon]"' },
      { raw: 'ICJ climate advisory 2025',          static: '"With reference to international environmental law, consider the following obligations of states..."' },
      { raw: 'PM-Vishwakarma launched',            static: '"Consider the following statements about [PM-V scheme]: [eligibility / features / coverage]"' },
      { raw: 'NISAR launched 30 Jul 2025',         static: '"With reference to NISAR mission, consider the following: [SAR principles, L/S band, joint partner, applications]"' },
      { raw: 'Cheetah translocation',              static: '"Consider the following with reference to African Cheetah: [IUCN status, niche, native range, schedule]"' }
    ],
    implication: 'For every fresh CA item, anchor it to (a) static concept, (b) institutional framework, (c) historical precedent. Reading the news headline alone is useless.'
  },

  // Common student failure modes
  failureModes: [
    { rank: 1, mode: 'Reading the stem before all four statements',                                    consequence: 'builds bias, misses the trap in statement #4.' },
    { rank: 2, mode: 'Spending >2 min on a question',                                                  consequence: 'robs the easier pickup later.' },
    { rank: 3, mode: 'Negative-marking aversion',                                                      consequence: 'leaves a +0.67 EV question unattempted.' },
    { rank: 4, mode: 'Negative-marking ignorance',                                                    consequence: 'guesses a -0.0 EV counting question.' },
    { rank: 5, mode: 'Confirmation bias from coaching notes',                                          consequence: 'hangs onto 2018 facts when question tests 2024 amendment.' },
    { rank: 6, mode: 'Reading the vernacular paraphrase to "feel sure"',                               consequence: 'if Hindi and English copies disagree, the English version is authoritative (UPSC notification footnote).' }
  ]
};
