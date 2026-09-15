// verb_session_builder.js
// ============================================================================
// طبقة التنسيق: بتقرر "إيه اللي يظهر النهاردة" وتبني محتوى الجلسة الفعلي،
// مستخدمة verb_meta.js (بيانات) + verb_progress_engine.js (حالة) +
// verb_question_engine.js (أسئلة) مع بعض.
//
// 3 أنواع جلسات: تعلّم مختلط (منتظم) / تعميق فردي (شاذ) / مراجعة يومية.
// النطاق: الأزمنة التلاتة بس (مضارع/ماضي/ناقص) — الأمر (imperativo) مش
// جزء من النظام ده لسه، زي ما اتحدد في الخطة.
// ============================================================================

const PE = (typeof module !== 'undefined' && module.exports) ? require('./verb_progress_engine.js') : window.VerbProgressEngine;
const QE = (typeof module !== 'undefined' && module.exports) ? require('./verb_question_engine.js') : window.VerbQuestionEngine;


// ---------------------------------------------------------------------------
// ترتيب المنهج: منتظم مرتب بالـfreqRank، شاذ (فعل×زمن) مرتب بالـfreqRank
// للفعل الأول وبعدين presente→passato→imperfetto لنفس الفعل قبل ما ينتقل
// للفعل الشاذ الجاي (القوس الزمني اللي اتفقنا عليه بدري في المحادثة)
// ---------------------------------------------------------------------------

function isRegularTrack(verbMeta) {
  return verbMeta.presente.category !== 'true_irregular';
}

function byRankAsc(verbMetaMap) {
  return (a, b) => (verbMetaMap[a].freqRank || 99999) - (verbMetaMap[b].freqRank || 99999);
}

function getCurriculumOrder(verbMetaMap) {
  const names = Object.keys(verbMetaMap);
  const regular = names.filter((n) => isRegularTrack(verbMetaMap[n])).sort(byRankAsc(verbMetaMap));

  // بند 8 في الخطة: حبيبة التتبع فعل+زمن — مش لحد الفعل ككل. القديم كان
  // بيحدد "شاذ" من presente بس وبعدين يحط الأزمنة التلاتة كلها في طابور
  // الشاذ أعمى، وده غلط في الاتجاهين وموجود فعليًا في verb_meta.js الحالي:
  //  (أ) أفعال زي Andare (presente شاذ) عندها imperfetto منتظم تمامًا — كانت
  //      بتاخد جلسة تعميق فردي كاملة (تعرّف+6 إنتاج+6 تحليل) لحاجة مغطّاة
  //      أصلًا بالنمط العام، وبعدين خليتها تتسجّل على مستوى cell عمرها ما
  //      بتتخرّج لأن PE.recordLearningAnswer بيوجّه إجاباتها فعليًا لـpattern
  //      (progressKeyFor بيتأكد من الزمن ده تحديدًا)، فالـcell تفضل يتيمة.
  //  (ب) أفعال زي Prendere (presente منتظم) عندها passato شاذ (participio
  //      irregolare زي "preso") — كانت أصلًا مش بتدخل طابور الشاذ خالص، فمفيش
  //      جلسة تعميق فردي للـpassato بتاعها أبدًا.
  // الحل: نبني قائمة الخلايا الشاذة من فئة كل (فعل×زمن) مباشرة، مش من تصنيف
  // presente للفعل ككل.
  const rankedAll = names.slice().sort(byRankAsc(verbMetaMap));
  const irregular = [];
  rankedAll.forEach((v) => {
    QE.THREE_TENSES.forEach((t) => {
      if (PE.isIrregularCell(verbMetaMap[v], t)) irregular.push({ verb: v, tense: t });
    });
  });
  return { regular, irregular };
}

// ---------------------------------------------------------------------------
// اختيار العناصر الجديدة اللي لسه ما اتقدّموش
// ---------------------------------------------------------------------------

function nextRegularVerbs(state, curriculumOrder, count) {
  const introduced = state.introduced || {};
  return curriculumOrder.regular.filter((v) => !introduced[v]).slice(0, count);
}

function nextIrregularCell(state, curriculumOrder) {
  return curriculumOrder.irregular.find(({ verb, tense }) => !state[PE.cellKey(verb, tense)]);
}

// ---------------------------------------------------------------------------
// جلسة "تعلّم مختلط" — 5 أفعال منتظمة (بند 3 في الخطة)
// ---------------------------------------------------------------------------

function buildRegularLearningSession(state, curriculumOrder, verbMetaMap, verbsByName, allVerbNames, count, explicitVerbs) {
  count = count || 5;
  // لو اتبعتت قايمة أفعال جاهزة (استكمال جلسة النهاردة بعد قفل/فتح المودال)
  // بنستخدمها زي ما هي، مش بنسحب دفعة جديدة — ده اللي بيمنع الباج إن كل
  // ضغطة على الزرار تاكل 5 أفعال جداد من المنهج (شوف verb_practice.js: start()).
  const verbs = (explicitVerbs && explicitVerbs.length) ? explicitVerbs.slice() : nextRegularVerbs(state, curriculumOrder, count);
  const groupsInBatch = new Set(verbs.map((v) => verbMetaMap[v].group));
  const singleGroup = groupsInBatch.size === 1 && verbs.length > 0;

  const perVerb = verbs.map((verbName) => {
    const meta = verbMetaMap[verbName];
    const items = [];
    for (let i = 0; i < 3; i++) items.push(QE.buildMeaningMCQ(verbName, verbsByName, allVerbNames, i));
    items.push(QE.buildWriteMeaningPrompt(verbName, verbsByName));
    items.push(QE.buildWriteInfinitivePrompt(verbName, verbsByName));
    items.push(QE.buildWriteInfinitivePrompt(verbName, verbsByName));
    QE.THREE_TENSES.forEach((t) => {
      if (PE.isIrregularCell(meta, t)) return; // الزمن ده شاذ لنفس الفعل ده تحديدًا (زي passato بتاع Prendere) — هياخد جلسة تعميق فردي مخصوصة بدل سؤال جدول تعرّفي عمره ما هيتخرّج
      items.push(QE.buildFullTableQuestion(verbName, t, verbMetaMap, verbsByName, allVerbNames, { forceCrossGroup: singleGroup }));
    });
    const pair = QE.pickRegularProductionPair(verbName, meta, 0);
    pair.forEach((c) => items.push(QE.buildProductionQuestion(verbName, c.tense, c.slot, verbsByName)));
    return { verb: verbName, items };
  });

  // أثر جانبي: تسجيل إنهم اتقدّموا (مش هنا مكان تسجيل صح/غلط الفعلي، ده بيحصل
  // وقت ما المتعلّم يجاوب فعليًا عن طريق recordLearningAnswer من برّه)
  perVerb.forEach(({ verb }) => {
    state.introduced = state.introduced || {};
    state.introduced[verb] = true;
  });

  const totalQuestions = perVerb.reduce((sum, v) => sum + v.items.length, 0);
  return { type: 'regular_learning', verbs: perVerb, forcedCrossGroup: singleGroup, totalQuestions };
}

// ---------------------------------------------------------------------------
// جلسة "تعميق فردي" — فعل شاذ واحد، زمن واحد بس لكل جلسة (بند 4 في الخطة)
// ---------------------------------------------------------------------------

function buildExposureItems(verbName, tense, verbsByName) {
  const rows = QE.getRows(verbsByName[verbName], tense);
  const picks = [0, 3, 6].map((i) => rows[i]); // Io / Lei / Loro — عيّنة تلقائية من 3
  return picks.map((r) => ({ type: 'exposure', verb: verbName, tense, person: r.person, form: r.form, ar: r.ar }));
}

function buildIrregularDeepSession(state, curriculumOrder, verbMetaMap, verbsByName, allVerbNames, explicitCell) {
  // نفس فكرة buildRegularLearningSession: لو معانا خلية محدّدة سلفًا (استكمال
  // جلسة النهاردة) بنستخدمها بدل ما ننادي nextIrregularCell وننتقل لخلية جديدة
  const next = explicitCell || nextIrregularCell(state, curriculumOrder);
  if (!next) return null; // كل الأفعال الشاذة اتقدّمت خلاص

  const { verb: verbName, tense } = next;
  const firstExposure = !(state.introduced && state.introduced[verbName]);
  const items = [];

  if (firstExposure) {
    for (let i = 0; i < 3; i++) items.push(QE.buildMeaningMCQ(verbName, verbsByName, allVerbNames, i));
    items.push(QE.buildWriteMeaningPrompt(verbName, verbsByName));
    items.push(QE.buildWriteInfinitivePrompt(verbName, verbsByName));
    items.push(QE.buildWriteInfinitivePrompt(verbName, verbsByName));
    items.push(QE.buildExplanationScreen(verbName, verbsByName)); // الأزمنة التلاتة مع بعض، مرة واحدة بس في حياة الفعل
  }

  items.push(...buildExposureItems(verbName, tense, verbsByName));
  items.push(...QE.buildAllSixProductionQuestions(verbName, tense, verbsByName));
  const idq = QE.buildSixIdentifyQuestions(verbName, tense, verbsByName);
  items.push(...idq.italian, ...idq.arabic);

  if (tense === 'presente') {
    // المقارنة التباينية شغالة لـpresente بس حاليًا (نفس قيد verb_question_engine.js)
    [0, 3].forEach((slot) => {
      const c = QE.buildContrastiveQuestion(verbName, slot, verbsByName);
      if (c) items.push(c);
    });
  }

  state.introduced = state.introduced || {};
  state.introduced[verbName] = true;
  // نضمن وجود مدخل تقدّم للخلية دي حتى لو لسه محدّش جاوب — عشان nextIrregularCell
  // ميرجّعش نفس الخلية تاني في نفس اليوم لو اتنادت الدالة أكتر من مرة
  PE.ensureEntry(state, PE.cellKey(verbName, tense));

  return { type: 'irregular_deep', verb: verbName, tense, firstExposure, items, totalQuestions: items.length };
}

// ---------------------------------------------------------------------------
// جلسة "مراجعة يومية مختلطة" — من المسارين مع بعض، موزعة أفقيًا (بند 6)
// ---------------------------------------------------------------------------

function categoryAndRankForKey(key, curriculumOrder, verbMetaMap) {
  if (key.indexOf('cell:') === 0) {
    const verb = key.split(':')[1];
    const tense = key.split(':')[2];
    return { category: 'true_irregular', freqRank: verbMetaMap[verb].freqRank, repVerb: verb, tense };
  }
  const parts = key.split(':'); // pattern:<family>:<tense>
  const family = parts[1];
  const tense = parts[2];
  const rep = curriculumOrder.regular.find((v) => {
    const m = verbMetaMap[v];
    const fam = (m[tense] && m[tense].patternFamily) || m.group;
    return fam === family;
  });
  const meta = rep ? verbMetaMap[rep] : null;
  return { category: meta ? meta[tense].category : 'fully_regular', freqRank: meta ? meta.freqRank : 500, repVerb: rep, tense };
}

function verbOfKey(key) {
  // cell:<verb>:<tense> و pattern:<family>:<tense> الاتنين حاطين المعرّف في
  // نفس الـindex بعد split — قبل كده pattern: كانت بترجع الـkey كامل بالغلط
  // فالتوزيع الأفقي ما كنش بيمنع نفس العائلة تظهر مرتين متتاليين بزمنين مختلفين
  return key.split(':')[1];
}

// توزيع أفقي بسيط: يأجّل عنصر لو نفس "الفعل" (أو مفتاح النمط) ظهر في آخر عنصرين
function interleaveByVerb(items) {
  const out = [];
  const pending = items.slice();
  while (pending.length) {
    let idx = pending.findIndex((it) => {
      const v = verbOfKey(it.key);
      const last2 = out.slice(-2).map((o) => verbOfKey(o.key));
      return last2.indexOf(v) === -1;
    });
    if (idx === -1) idx = 0;
    out.push(pending.splice(idx, 1)[0]);
  }
  return out;
}

function buildReviewQuestionForKey(key, entry, info, verbsByName, verbMetaMap, today) {
  const rep = info.repVerb;
  const tense = info.tense;
  if (!rep) return null;
  const seed = QE.seedFromString(key + today);
  const slot = seed % 6;

  if (entry.mode === 'type') {
    const q = QE.buildProductionQuestion(rep, tense, slot, verbsByName);
    return { key, reviewMode: 'type', representativeVerb: rep, ...q };
  }
  // mode==='mc' (رجّع درجة بعد لخبطة) — شاذ: سؤال تحليل MC جاهز أصلًا؛ منتظم: جدول كامل
  if (key.indexOf('cell:') === 0) {
    const q = QE.buildIdentifyItalianQuestion(rep, tense, slot, verbsByName);
    return { key, reviewMode: 'mc', representativeVerb: rep, ...q };
  }
  const q = QE.buildFullTableQuestion(rep, tense, verbMetaMap, verbsByName, Object.keys(verbMetaMap));
  return { key, reviewMode: 'mc', representativeVerb: rep, ...q };
}

function buildDailyReviewSession(state, curriculumOrder, verbMetaMap, verbsByName, today, maxQuestions) {
  maxQuestions = maxQuestions || 15;
  const due = PE.getReviewsDueOn(state, today);

  const scored = due.map((d) => {
    const info = categoryAndRankForKey(d.key, curriculumOrder, verbMetaMap);
    return { ...d, info, score: PE.priorityScore(d, info.category, info.freqRank) };
  });
  scored.sort((a, b) => b.score - a.score);

  const chosen = scored.slice(0, maxQuestions);
  const distributed = interleaveByVerb(chosen);

  const questions = distributed
    .map((d) => buildReviewQuestionForKey(d.key, d, d.info, verbsByName, verbMetaMap, today))
    .filter(Boolean);

  return { type: 'daily_review', count: questions.length, totalDue: due.length, questions };
}

const VerbSessionBuilder = {
  THREE_TENSES: QE.THREE_TENSES,
  isRegularTrack,
  getCurriculumOrder,
  nextRegularVerbs,
  nextIrregularCell,
  buildRegularLearningSession,
  buildIrregularDeepSession,
  buildDailyReviewSession,
};
if (typeof module !== 'undefined' && module.exports) module.exports = VerbSessionBuilder;
if (typeof window !== 'undefined') window.VerbSessionBuilder = VerbSessionBuilder;
