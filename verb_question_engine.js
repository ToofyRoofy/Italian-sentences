// verb_question_engine.js
// ============================================================================
// مولّد الأسئلة كلها (بنود 1-6 من الخطة). بيعتمد على بيانات verbs.js
// (verbsByName) + verb_meta.js (verbMetaMap) اللي المستدعي بيحمّلهم ويمررهم.
//
// مبادئ مأخوذة حرفيًا من lesson_manifest.js وكلماتي (اتدرسوا بالتفصيل قبل
// كده في المحادثة): مشتّتات من نفس العائلة أولاً وتوسيع لو أقل من 3،
// seed محسوب (مجموع أكواد الحروف) مش Math.random، وbalanceCorrect بتوزّع
// موضع الإجابة الصح بدل ما تفضل تابتة.
// ============================================================================

const SIX_SLOT_ROW_INDEX = [0, 1, 2, 4, 5, 6]; // Io,Tu,Lui/Lei(=Lui),Noi,Voi,Loro — بيتخطى Lei لأنها مطابقة لـLui دايمًا
// 🔮 مرحلة 2: إضافة futuro. PRACTICE_TENSES هو الاسم الجديد، وTHREE_TENSES
// فاضل alias لنفس المصفوفة عشان أي كود قديم (هنا أو في verb_session_builder.js
// وverb_practice.js) بيستخدم الاسم القديم يشتغل تلقائي مع الزمن الرابع من غير
// ما نلمسه سطر سطر.
const PRACTICE_TENSES = ['presente', 'passato', 'imperfetto', 'futuro'];
const THREE_TENSES = PRACTICE_TENSES;

// ---------------------------------------------------------------------------
// أدوات عامة (مأخوذة من نفس منطق lesson_manifest.js)
// ---------------------------------------------------------------------------

function seedFromString(s) {
  let sum = 0;
  for (const ch of String(s)) sum += ch.charCodeAt(0);
  return sum;
}

// balanceCorrect — منقولة شبه حرفيًا من lesson_manifest.js
function balanceCorrect(options, correctIndex, seedIndex) {
  const opts = (options || []).slice();
  if (opts.length < 2) return { options: opts, correct: correctIndex || 0 };
  const target = seedIndex % opts.length;
  const c = correctIndex || 0;
  if (target !== c) {
    const tmp = opts[target];
    opts[target] = opts[c];
    opts[c] = tmp;
  }
  return { options: opts, correct: target };
}

// PRNG بسيط قائم على seed (mulberry32) — عشوائي شكلاً بس متكرر (deterministic)
// لنفس الـseed، عشان نفس السؤال ميتلخبطش شكله كل مرة يتعاد بناؤه
function seededRandom(seed) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(arr, seed) {
  const a = arr.slice();
  const rand = seededRandom(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

// كانت قبل كده بترجّع "نافذة متتالية" من القايمة الأصلية (unique[(seed+i)%len])
// — إزاحة بس، مش خلط حقيقي. فلو القايمة مبنية بترتيب ثابت (زي ضمائر
// Io→Tu→Lui→Lei→Noi→Voi→Loro في buildIdentifyItalianQuestion)، المشتّتات
// كانت دايمًا بتطلع بنفس الترتيب ده تقريبًا. دلوقتي بتعمل خلط فعلي.
function pickSeeded(pool, seed, count, excludeSet) {
  const unique = [...new Set(pool)].filter((x) => x != null && !excludeSet.has(x));
  return seededShuffle(unique, seed).slice(0, count);
}

function getRows(verb, tense) {
  return tense === 'presente' ? verb.presente : verb[tense].rows;
}

function personShortName(personLabel) {
  return personLabel.split(' ')[0]; // "Noi (نحن)" → "Noi"
}

// ---------------------------------------------------------------------------
// بند 1: معنى الفعل (MCQ) ×3
// ---------------------------------------------------------------------------

function buildMeaningMCQ(verbName, verbsByName, allVerbNames, salt) {
  const correct = verbsByName[verbName].ar;
  const seed = seedFromString(verbName + ':meaning:' + salt);
  const pool = allVerbNames.filter((n) => n !== verbName).map((n) => verbsByName[n].ar);
  const distractors = pickSeeded(pool, seed, 3, new Set([correct]));
  const { options, correct: correctIndex } = balanceCorrect([correct, ...distractors], 0, seed);
  return { type: 'meaning_mcq', verb: verbName, options, correctIndex };
}

// ---------------------------------------------------------------------------
// بند 2: كتابة المعنى بالعربي ×1  /  بند 3: كتابة الفعل من المعنى ×2
// ---------------------------------------------------------------------------

function buildWriteMeaningPrompt(verbName, verbsByName) {
  return { type: 'write_meaning_ar', verb: verbName, correctAnswer: verbsByName[verbName].ar };
}

function buildWriteInfinitivePrompt(verbName, verbsByName) {
  return { type: 'write_infinitive', ar: verbsByName[verbName].ar, correctAnswer: verbName };
}

// ---------------------------------------------------------------------------
// بند 4: جدول التصريف الكامل (4 اختيارات = 4 جداول) — للمنتظم بس
//
// المشتّتات بقت نسخ "شبه صح" من نفس جدول الفعل نفسه (مش جداول أفعال تانية
// بالكامل زي الأول) — 1-2 خانة (شخص) بس بيتلخبطوا بنهاية قريبة الشبه
// (مخلوطة من مجموعة are/ere/ire تانية، أو صيغة مساعد غلط في passato). كده
// المتعلّم مضطر يعرف كل شخص لوحده صح، مش بس "يتعرّف على شكل الفعل عمومًا"
// ويستبعد الجداول التانية بسهولة.
// ---------------------------------------------------------------------------

function tableFingerprint(verb, tense) {
  return getRows(verb, tense)
    .map((r) => r.form)
    .join(' · ');
}

// نهايات المجموعات القياسية — بتتستخدم بس لتوليد نهاية "غلط بس قريبة الشبه"
// (خلط بين are/ere/ire)، مش لحساب الشكل الصح؛ ده دايمًا بييجي من بيانات
// الفعل الحقيقية في verbsByName. الترتيب مطابق لـgetRows: Io,Tu,Lui,Lei,Noi,Voi,Loro
const REGULAR_ENDINGS = {
  presente: {
    are: ['o', 'i', 'a', 'a', 'iamo', 'ate', 'ano'],
    ere: ['o', 'i', 'e', 'e', 'iamo', 'ete', 'ono'],
    ire: ['o', 'i', 'e', 'e', 'iamo', 'ite', 'ono'],
  },
  imperfetto: {
    are: ['avo', 'avi', 'ava', 'ava', 'avamo', 'avate', 'avano'],
    ere: ['evo', 'evi', 'eva', 'eva', 'evamo', 'evate', 'evano'],
    ire: ['ivo', 'ivi', 'iva', 'iva', 'ivamo', 'ivate', 'ivano'],
  },
  // 🔮 futuro semplice — are وere بنفس النهايات بالظبط (عشان كده تبديل
  // are↔ere في corruptForm بيتخطّى لـire تلقائي، زي ما هو متوقّع)
  futuro: {
    are: ['erò', 'erai', 'erà', 'erà', 'eremo', 'erete', 'eranno'],
    ere: ['erò', 'erai', 'erà', 'erà', 'eremo', 'erete', 'eranno'],
    ire: ['irò', 'irai', 'irà', 'irà', 'iremo', 'irete', 'iranno'],
  },
};

// صيغ المساعد لـpassato prossimo — بتتلخبط بين الأشخاص (زي "Hai visto" بدل
// "Ho visto") عشان تمثّل غلطة مطابقة الفاعل الشائعة، مع ترك الـparticipio زي ما هو
const AUX_FORMS = {
  avere: ['Ho', 'Hai', 'Ha', 'Ha', 'Abbiamo', 'Avete', 'Hanno'],
  essere: ['Sono', 'Sei', 'È', 'È', 'Siamo', 'Siete', 'Sono'],
};

// ضمائر الانعكاس المنفصلة — بترتيب Io,Tu,Lui,Lei,Noi,Voi,Loro (زي getRows)
const REFLEXIVE_PRONOUNS = ['mi', 'ti', 'si', 'si', 'ci', 'vi', 'si'];

// بيولّد غلطة "ضمير غلط" للأفعال الانعكاسية بس (زي "Ti trovo" بدل "Mi
// trovo") — غلطة شائعة برضه ومستقلة عن الزمن، لأن الضمير دايمًا أول كلمة
// منفصلة قبل الفعل في الحالات كلها presente/passato/imperfetto
function corruptPronoun(originalForm, slotIndex, pickSeed) {
  const spaceIdx = originalForm.indexOf(' ');
  if (spaceIdx === -1) return null; // مش انعكاسي، مفيش ضمير منفصل
  const rest = originalForm.slice(spaceIdx + 1);
  const correctPronoun = REFLEXIVE_PRONOUNS[slotIndex];
  const options = REFLEXIVE_PRONOUNS.filter((p) => p !== correctPronoun);
  if (!options.length) return null;
  const wrong = options[pickSeed % options.length];
  return wrong.charAt(0).toUpperCase() + wrong.slice(1) + ' ' + rest;
}

// بيولّد شكل غلط قريب الشبه لخانة واحدة بس، من غير ما يلمس باقي الجدول.
// الـstem بيتحسب من طول النهاية القياسية المتوقعة لمجموعة الفعل في الخانة
// دي تحديدًا (مش بمقارنة الـ7 أشكال ببعض) — ده بيشتغل صح حتى مع الأفعال
// الانعكاسية (الشكل بيبدأ بضمير زي "Si"/"Mi" مختلف كل شخص) وحتى في
// imperfetto (فين كل المجموعات بتبدأ نهاياتها بنفس الحرف فبتلخبط أي حساب
// مبني على أطول بادئة مشتركة بين الأشكال).
// مشتّتات futuro الخاصة (4.3 في الخطة) — كل نوع مبني على غلطة كتابة حقيقية
// شائعة، مش تلخبط عشوائي: الإبقاء على a (are عادي)، حذف e (ere عادي، تعميم
// من Andrò/Vedrò)، نسيان h (care/gare)، الإبقاء على i (ciare/giare)، وحذف i
// بالقياس من mangerò لأي -iare عادية/gliare. بترجع null لو الفعل مش منطبق
// على أي نمط منهم (يرجع الكود لتبديل المجموعة are/ere/ire العادي تحت).
//
// ملحوظة مهمة: ending هنا بيشمل الـ"er"/"ir" نفسها (زي "erò"، "erai") —
// فـstem الناتج من originalForm.slice(0, len-ending.length) هو الجذر
// المجرّد بس (زي "Parl"، "Cerch"، "Mang"، "Studi"، "Prend")، من غير أي er/ir.
// المشتّتات بتلعب إما في آخر حرف من الـstem ده (h/i) أو في أول حرف من الـending (e).
function corruptFuturoForm(originalForm, slotIndex, group, tenseMeta) {
  const ending = REGULAR_ENDINGS.futuro[group] && REGULAR_ENDINGS.futuro[group][slotIndex];
  if (!ending || originalForm.length <= ending.length) return null;
  const stem = originalForm.slice(0, originalForm.length - ending.length); // زي "Parl"، "Cerch"، "Mang"، "Studi"، "Prend"
  const patternFamily = tenseMeta && tenseMeta.patternFamily;
  let wrongStem = stem;
  let wrongEnding = ending;
  if (patternFamily === 'care_gare_h' && /h$/i.test(stem)) {
    wrongStem = stem.slice(0, -1); // نسيان h: Cercherò → Cercerò
  } else if (patternFamily === 'ciare_giare_drop_i') {
    wrongStem = stem + 'i'; // الإبقاء على i: Mangerò → Mangierò
  } else if (group === 'are' && /i$/i.test(stem)) {
    wrongStem = stem.slice(0, -1); // حذف i بالقياس (-iare عادية/gliare): Studierò → Studerò، Mi sveglierò → Mi sveglerò
  } else if (group === 'are') {
    wrongEnding = 'a' + ending.slice(1); // الإبقاء على a: Parlerò → Parlarò
  } else if (group === 'ere') {
    wrongEnding = ending.slice(1); // حذف e (تعميم الشاذ): Prenderò → Prendrò
  } else {
    return null; // ire — مفيش مشتّت إملائي خاص، يرجع الكود لتبديل المجموعة العادي تحت
  }
  const wrong = wrongStem + wrongEnding;
  return wrong !== originalForm ? wrong : null;
}

function corruptForm(originalForm, slotIndex, tense, group, aux, pickSeed, isReflexive, tenseMeta) {
  // للانعكاسي: نصّ الوقت (حسب الـseed) نجرّب نلخبط الضمير المنفصل بدل نهاية
  // الفعل — غلطة شائعة برضه، ومنفصلة تمامًا عن غلطة النهاية
  if (isReflexive && pickSeed % 2 === 0) {
    const wrongPronoun = corruptPronoun(originalForm, slotIndex, pickSeed);
    if (wrongPronoun) return wrongPronoun;
    // لو مقدرناش (نادر)، نكمل تحت على نهاية الفعل بدل ما نرجّع null
  }
  if (tense === 'futuro') {
    const futuroWrong = corruptFuturoForm(originalForm, slotIndex, group, tenseMeta);
    if (futuroWrong) return futuroWrong;
    // لو مقدرناش (نادر جدًا)، نكمل تحت لتبديل المجموعة العادي
  }
  if (tense === 'passato') {
    // انعكاسي: [ضمير, مساعد, ...participio] (زي "Ti sei trovato/a") — غير
    // انعكاسي: [مساعد, ...participio] (زي "Ho visto"). لازم نميّز بينهم،
    // وإلا بنلخبط الضمير مع المساعد سوا ونطلع بشكل مش موجود أصلًا زي
    // "È sei trovato/a"
    const parts = originalForm.split(' ');
    const auxIdx = isReflexive ? 1 : 0;
    if (parts.length <= auxIdx + 1) return null;
    const pronounPart = isReflexive ? parts[0] + ' ' : '';
    const participio = parts.slice(auxIdx + 1).join(' ');
    const auxForms = AUX_FORMS[aux] || AUX_FORMS.avere;
    const otherSlots = [0, 1, 2, 3, 4, 5, 6].filter((s) => s !== slotIndex && auxForms[s] !== auxForms[slotIndex]);
    if (!otherSlots.length) return null;
    const wrongAux = auxForms[otherSlots[pickSeed % otherSlots.length]];
    return pronounPart + wrongAux + ' ' + participio;
  }
  const table = REGULAR_ENDINGS[tense];
  if (!table) return null; // زمن مش مدعوم بالطريقة دي حاليًا
  const correctEnding = table[group][slotIndex];
  if (!correctEnding || originalForm.length <= correctEnding.length) return null;
  const stem = originalForm.slice(0, originalForm.length - correctEnding.length);
  const otherGroups = ['are', 'ere', 'ire'].filter((g) => g !== group);
  for (let i = 0; i < otherGroups.length; i++) {
    const g = otherGroups[(pickSeed + i) % otherGroups.length];
    const wrongEnding = table[g][slotIndex];
    if (wrongEnding && wrongEnding !== correctEnding) return stem + wrongEnding;
  }
  return null;
}

// صيغة حقيقية بتاعة شخص تاني من نفس الجدول (بتختلف نصًا عن صيغة الخانة الحالية)
function swapWithOtherPerson(forms, slot, pickSeed) {
  const others = [];
  forms.forEach((f, i) => { if (f.toLowerCase() !== forms[slot].toLowerCase()) others.push(i); });
  if (!others.length) return null;
  return forms[others[pickSeed % others.length]];
}

// بيولّد نسخة كاملة من الجدول فيها numErrors خانة (شخص) اتلخبطوا
function corruptTable(rows, verbMeta, tense, verbData, seed, numErrors) {
  const forms = rows.map((r) => r.form);
  const group = verbMeta.group;
  const aux = tense === 'passato' ? verbData[tense] && verbData[tense].aux : null;
  const isReflexive = !!verbData.reflexive;
  const result = forms.slice();
  const wrongSlots = [];
  let applied = 0;
  let attempt = 0;
  while (applied < numErrors && attempt < 14) {
    const slot = (seed + attempt) % 7;
    attempt++;
    if (result[slot] !== forms[slot]) continue; // الخانة دي اتلخبطت خلاص، منكررش
    // futuro شاذ (Andrò، Sarò، Mi siederò): مفيش قاعدة نهايات نقدر نلخبطها بأمان
    // (كانت بتطلّع Anarai / Srà / Ti siedrai)، فالمشتّت الوحيد الآمن هو صيغة
    // حقيقية بتاعة شخص تاني من نفس الفعل
    const wrong = (tense === 'futuro' && verbMeta[tense] && verbMeta[tense].category === 'true_irregular')
      ? swapWithOtherPerson(forms, slot, seed + attempt)
      : corruptForm(forms[slot], slot, tense, group, aux, seed + attempt, isReflexive, verbMeta[tense]);
    if (wrong && wrong !== forms[slot]) {
      result[slot] = wrong;
      wrongSlots.push(slot);
      applied++;
    }
  }
  return applied > 0 ? { text: result.join(' · '), forms: result, wrongSlots: wrongSlots } : null;
}

function buildFullTableQuestion(verbName, tense, verbMetaMap, verbsByName, allVerbNames, opts) {
  opts = opts || {}; // opts.forceCrossGroup بقى بلا أثر هنا (كان خاص بمشتّتات من أفعال تانية) — سايبينه عشان توافق الاستدعاءات القديمة
  const verbMeta = verbMetaMap[verbName];
  const verbData = verbsByName[verbName];
  const rows = getRows(verbData, tense);
  const correctForms = rows.map((r) => r.form);
  const correctTable = correctForms.join(' · ');
  const seed = seedFromString(verbName + ':table:' + tense);

  // كل عنصر هنا {text, forms, wrongSlots, tenseSwap} — wrongSlots فاضية
  // للصح ولمشتّت "زمن تاني" (مفيش خانة غلط بعينها، الجدول كله زمنه غلط)،
  // وفيها أرقام الخانات (0-6) اللي اتلخبطت للمشتّتات التانية. البيانات دي
  // بتتنقل مع الترتيب النهائي عشان الواجهة تقدر تعلّم بالظبط على الغلط في
  // الاختيار اللي هي دستها عليه (مش بس تقول "غلط" وخلاص)
  const chosenObjs = [{ text: correctTable, forms: correctForms, wrongSlots: [], tenseSwap: false }];
  const seen = new Set([correctTable]);

  // مشتّت 1: نفس الفعل، بس في زمن تاني — تصريف صحيح 100% (مفيش ولا خانة
  // ملخبطة)، عشان يختبر إنها فاهمة "ده مين زمنه" مش بس شكل الفعل عمومًا
  const otherTenses = THREE_TENSES.filter((t) => t !== tense);
  const tenseSwapChoice = otherTenses[seed % otherTenses.length];
  const tenseSwapRows = getRows(verbData, tenseSwapChoice);
  const tenseSwapForms = tenseSwapRows.map((r) => r.form);
  const tenseSwapTable = tenseSwapForms.join(' · ');
  if (tenseSwapTable && !seen.has(tenseSwapTable)) {
    seen.add(tenseSwapTable);
    chosenObjs.push({ text: tenseSwapTable, forms: tenseSwapForms, wrongSlots: [], tenseSwap: true, tenseSwapTo: tenseSwapChoice });
  }

  // باقي المشتّتات: نسخ من نفس الفعل ونفس الزمن، بس 1-2 خانة (شخص) اتلخبطوا
  const errorCounts = [1, 2, 2];
  let salt = 0;
  errorCounts.forEach((n) => {
    if (chosenObjs.length >= 4) return;
    let picked = null;
    for (let tries = 0; tries < 6 && !picked; tries++) {
      const candidate = corruptTable(rows, verbMeta, tense, verbData, seed + salt, n);
      salt += 5;
      if (candidate && !seen.has(candidate.text)) picked = candidate;
    }
    if (picked) {
      seen.add(picked.text);
      chosenObjs.push({ text: picked.text, forms: picked.forms, wrongSlots: picked.wrongSlots, tenseSwap: false });
    }
  });

  // احتياط: لو مقدرناش نولّد 3 مشتّتات مختلفة (فعل بنهايات نادرة جدًا)، نكمّل
  // بعدد أخطاء أعلى بدل ما يرجع سؤال ناقص خيارات
  let extraN = 3;
  while (chosenObjs.length < 4 && extraN < 8) {
    const candidate = corruptTable(rows, verbMeta, tense, verbData, seed + salt, extraN);
    salt += 5;
    if (candidate && !seen.has(candidate.text)) {
      seen.add(candidate.text);
      chosenObjs.push({ text: candidate.text, forms: candidate.forms, wrongSlots: candidate.wrongSlots, tenseSwap: false });
    } else {
      extraN++;
    }
  }

  const { options: shuffled, correct } = balanceCorrect(chosenObjs, 0, seed + 7);
  const persons = rows.map((r) => r.person);
  return {
    type: 'full_table',
    verb: verbName,
    tense,
    options: shuffled.map((o) => o.text),
    optionMeta: shuffled.map((o) => ({ forms: o.forms, wrongSlots: o.wrongSlots, tenseSwap: o.tenseSwap, tenseSwapTo: o.tenseSwapTo })),
    persons,
    correctIndex: correct,
  };
}

// ---------------------------------------------------------------------------
// بند 5: إنتاج فردي (شخص + زمن واحد → يكتبه بنفسه، من غير اختيارات)
// ---------------------------------------------------------------------------

function buildProductionQuestion(verbName, tense, slot, verbsByName) {
  const rowIdx = SIX_SLOT_ROW_INDEX[slot];
  const rows = getRows(verbsByName[verbName], tense);
  const row = rows[rowIdx];
  return {
    type: 'produce',
    verb: verbName,
    tense,
    person: row.person,
    correctAnswer: row.form,
    ar: row.ar,
  };
}

// كل احتمالات (عدد أزمنة الممارسة × 6 أشخاص) — للمنتظم بس، عشان زوج الإنتاج
// الفردي يدور عليهم كلهم عبر التكرارات. كانت ثابتة على 18 (3×6)؛ دلوقتي
// بتتحسب من PRACTICE_TENSES.length عشان تكبر تلقائي مع أي زمن جديد يتضاف
// (بقت 24 بعد futuro).
function allCombos() {
  const combos = [];
  for (const t of PRACTICE_TENSES) for (let slot = 0; slot < 6; slot++) combos.push({ tense: t, slot });
  return combos;
}

// القاعدة الإملائية بتتفعّل عند الشخصين Tu (slot 1) وNoi (slot 3) في presente
// (مبنية على تصنيف presente/imperativo في verb_meta.js الحالي)، لكن في
// futuro القاعدة الإملائية بتظهر في كل الأشخاص الستة، فأي شخص يكفي لإجباره.
const ORTHO_TRIGGER_SLOTS = { presente: [1, 3], futuro: [0, 1, 2, 3, 4, 5] };

function pickRegularProductionPair(verbName, verbMeta, encounterCount) {
  const combos = allCombos();
  const seed = seedFromString(verbName) + encounterCount * 5;
  const picked = [];
  const usedTenses = new Set();

  // لو الفعل orthographic_only في presente و/أو futuro، نجبر شخص القاعدة
  // الإملائية الأول. الـ8 أفعال الإملائية كلها إملائية في الاتنين مع بعض،
  // فبنبدّل بينهم حسب encounterCount عشان الزوج ما يتحجزش دايمًا على واحد
  // منهم بس (فرصة متساوية لكل زمن يظهر عبر التكرارات المتتالية)
  const orthoCandidates = ['presente', 'futuro'].filter((t) => verbMeta[t] && verbMeta[t].category === 'orthographic_only');
  if (orthoCandidates.length) {
    const orthoTense = orthoCandidates[encounterCount % orthoCandidates.length];
    const triggerSlots = ORTHO_TRIGGER_SLOTS[orthoTense];
    const slot = triggerSlots[encounterCount % triggerSlots.length];
    picked.push({ tense: orthoTense, slot });
    usedTenses.add(orthoTense);
  }

  for (let i = 0; i < combos.length && picked.length < 2; i++) {
    const c = combos[(seed + i) % combos.length];
    if (usedTenses.has(c.tense)) continue;
    // فعل هجين (زي Prendere: presente منتظم بس passato شاذ) — الزمن الشاذ ده
    // بتاعه جلسة تعميق فردي مخصوصة في المسار التاني، مش زوج إنتاج عشوائي هنا
    if (verbMeta[c.tense] && verbMeta[c.tense].category === 'true_irregular') continue;
    picked.push(c);
    usedTenses.add(c.tense);
  }
  return picked;
}

// الشاذ: الـ6 أشخاص كاملين لزمن الجلسة الحالية بس (زي ما اتفقنا بعد التصحيح)
function buildAllSixProductionQuestions(verbName, tense, verbsByName) {
  const out = [];
  for (let slot = 0; slot < 6; slot++) out.push(buildProductionQuestion(verbName, tense, slot, verbsByName));
  return out;
}

// ---------------------------------------------------------------------------
// بند 6: تحليل ثنائي — اتجاه إيطالي (شكل → حدد شخص+زمن) + اتجاه عربي (معنى → اكتب+حدد زمن)
// ---------------------------------------------------------------------------

function buildIdentifyItalianQuestion(verbName, tense, slot, verbsByName) {
  const rows = getRows(verbsByName[verbName], tense);
  const rowIdx = SIX_SLOT_ROW_INDEX[slot];
  const row = rows[rowIdx];
  const personShort = personShortName(row.person);
  const correctLabel = `${personShort} — ${tense}`;

  const otherTenses = THREE_TENSES.filter((t) => t !== tense);
  const candidateLabels = [];
  otherTenses.forEach((t) => candidateLabels.push(`${personShort} — ${t}`)); // زمن غلط، نفس الشخص
  SIX_SLOT_ROW_INDEX.forEach((ri, s) => {
    if (s === slot) return;
    candidateLabels.push(`${personShortName(rows[ri].person)} — ${tense}`); // شخص غلط، نفس الزمن
  });

  const seed = seedFromString(verbName + ':idIT:' + tense + slot);
  const distractors = pickSeeded(candidateLabels, seed, 3, new Set([correctLabel]));
  const { options, correct } = balanceCorrect([correctLabel, ...distractors], 0, seed + 3);
  return { type: 'identify_it', verb: verbName, shownForm: row.form, options, correctIndex: correct };
}

function buildIdentifyArabicQuestion(verbName, tense, slot, verbsByName) {
  const rows = getRows(verbsByName[verbName], tense);
  const rowIdx = SIX_SLOT_ROW_INDEX[slot];
  const row = rows[rowIdx];
  return {
    type: 'identify_ar',
    verb: verbName,
    shownAr: row.ar,
    correctForm: row.form,
    correctTense: tense,
    tenseOptions: THREE_TENSES,
  };
}

// تقسيم 3+3 زي ما اتفقنا بعد التصحيح (لكل زمن جلسته: 6 تحليل = 3 اتجاه إيطالي + 3 عربي)
function buildSixIdentifyQuestions(verbName, tense, verbsByName) {
  return {
    italian: [0, 1, 2].map((s) => buildIdentifyItalianQuestion(verbName, tense, s, verbsByName)),
    arabic: [3, 4, 5].map((s) => buildIdentifyArabicQuestion(verbName, tense, s, verbsByName)),
  };
}

// ---------------------------------------------------------------------------
// شاشة الشرح (عرض بس، أول ظهور للفعل الشاذ) — الأزمنة التلاتة مع بعض
// ---------------------------------------------------------------------------

function buildExplanationScreen(verbName, verbsByName) {
  const v = verbsByName[verbName];
  const tables = {};
  THREE_TENSES.forEach((t) => {
    tables[t] = getRows(v, t).map((r) => ({ person: r.person, form: r.form }));
  });
  return { type: 'explanation_screen', verb: verbName, ar: v.ar, tables };
}

// ---------------------------------------------------------------------------
// سؤال المقارنة التباينية (الشكل المتوقع لو منتظم جنب الفعلي) — presente بس حاليًا
// ---------------------------------------------------------------------------

const PRESENTE_ENDINGS = {
  are: ['o', 'i', 'a', 'a', 'iamo', 'ate', 'ano'],
  ere: ['o', 'i', 'e', 'e', 'iamo', 'ete', 'ono'],
  ire: ['o', 'i', 'e', 'e', 'iamo', 'ite', 'ono'],
};

function stemAndGroupFor(verbName) {
  const raw = verbName.toLowerCase();
  const reflexive = raw.endsWith('rsi');
  const base = reflexive ? raw.slice(0, -2) + 'e' : raw;
  if (base.endsWith('are')) return { stem: base.slice(0, -3), group: 'are' };
  if (base.endsWith('ere')) return { stem: base.slice(0, -3), group: 'ere' };
  if (base.endsWith('ire')) return { stem: base.slice(0, -3), group: 'ire' };
  return null; // أفعال زي porre/tradurre/produrre — مفيش شكل منتظم متوقع أصلًا
}

// 🔮 فعل غير شخصي في futuro (Piovere — القرار 9): أسئلة futuro بتتحصر على
// شخص Lui بس (الـslot 2 في الـsix-slot = Pioverà)، ومفيش سؤال جدول 7 أشخاص
const IMPERSONAL_FUTURO_SLOT = 2;
function isImpersonalFuturo(verbData) {
  return !!(verbData && verbData.futuro && verbData.futuro.impersonal);
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// نهايات futuro العادية (are/ere متطابقين، ire مختلفة) — نفس جدول
// REGULAR_ENDINGS.futuro بالظبط، معاد هنا بس عشان الاتنين (presente/futuro)
// يستخدموا نفس دالة الحساب العامة تحت من غير ما نحتاج نستورد REGULAR_ENDINGS
// هنا (الملف كله في نفس السكوب أصلًا، فده بس توضيح أكتر منه ضرورة)
const CONTRASTIVE_ENDINGS = { presente: PRESENTE_ENDINGS, futuro: REGULAR_ENDINGS.futuro };

// دالة عامة: بتحسب "الشكل المتوقع لو الفعل كان منتظم" (من المصدر مباشرة)
// وتقارنه بالشكل الفعلي — presente وfuturo بيشتغلوا بنفس المنطق بالظبط،
// الفرق بس جدول النهايات. Porre/Tradurre/Produrre مستبعدين تلقائي
// (stemAndGroupFor بترجع null لمصدر مش منتهي بـare/ere/ire عادي).
function buildContrastiveQuestionForTense(verbName, slot, verbsByName, tense) {
  const sg = stemAndGroupFor(verbName);
  if (!sg) return null;
  // futuro + انعكاسي (Sedersi الوحيد الشاذ): Sederò صيغة مقبولة أصلاً (Mi siederò/Mi sederò)
  // والشكل المتوقع بيطلع من غير الضمير، فالمقارنة هنا بتضلّل — مستبعد (قرار 2)
  if (tense === 'futuro' && verbsByName[verbName] && verbsByName[verbName].reflexive) return null;
  const rowIdx = SIX_SLOT_ROW_INDEX[slot];
  const endings = CONTRASTIVE_ENDINGS[tense];
  const expected = capitalize(sg.stem + endings[sg.group][rowIdx]);
  const rows = getRows(verbsByName[verbName], tense);
  const actual = rows[rowIdx].form;
  if (expected.toLowerCase() === actual.toLowerCase()) return null; // الشخص ده مش بيفرّق فعليًا، اختار شخص تاني
  return {
    type: 'contrastive',
    verb: verbName,
    tense,
    person: rows[rowIdx].person,
    expectedIfRegular: expected,
    actual,
  };
}

function buildContrastiveQuestion(verbName, slot, verbsByName) {
  return buildContrastiveQuestionForTense(verbName, slot, verbsByName, 'presente');
}

// 🔮 دالة موازية للـfuturo (4.4 في الخطة، 12 زوج) — نفس منطق buildContrastiveQuestion
// بالظبط بس على جدول نهايات futuro. بتشتغل تلقائي مع أي فعل شاذ مصدره عادي
// (Andare/Fare/Dare/Vedere/Avere/Essere/Potere/Sapere/Volere/Stare/Bere/Dovere)،
// ومستبعدة تلقائي لـPorre/Tradurre/Produrre (مصدر مش منتظم الشكل أصلًا).
function buildFuturoContrastiveQuestion(verbName, slot, verbsByName) {
  return buildContrastiveQuestionForTense(verbName, slot, verbsByName, 'futuro');
}

// ---------------------------------------------------------------------------
// فحص إجابة مكتوبة (وضع type) — Levenshtein=1 للأخطاء العادية، لكن خطأ
// النبرة بس (è/à/ù) بيتحسب "صح مع تنبيه" مش خطأ عادي، لأن النبرة مهمة نحويًا
// ---------------------------------------------------------------------------

// السبب الحقيقي وراء "بكتب/بنسخ الحل زي ما هو ومحسبتش صح خالص": الصفحة كلها
// dir=rtl، وأي نص إيطالي (LTR) متعروض جوّاها — زي رسالة "❌ الصح: Ho aiutato"
// أو التصحيح الإجباري — بيخلّي المتصفح (خصوصًا Chrome على الموبايل) يحقن
// حروف تحكّم اتجاه (bidi control chars) غير مرئية حوالين النص ده وقت الـcopy،
// عشان يحافظ على شكل العرض. الحروف دي بترجع مع الـpaste فتبقى جزء من القيمة
// اللي في الـinput، فحتى لو الشكل مطابق 100% بالعين، المقارنة الحرفية (===)
// بتفشل للأبد لأن فيه حروف إضافية مش شايفينها. نفس الفكرة ممكن تحصل مع
// NBSP (مسافة غير قابلة للكسر) أو علامات تنصيص منحنية بيبدّلها الكيبورد
// تلقائيًا. الحل: نشيل كل ده قبل أي مقارنة.
function stripInvisibles(s) {
  return String(s)
    .replace(/[\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g, '') // zero-width + bidi isolate/embed/override + BOM
    .replace(/\u00A0/g, ' ') // nbsp → مسافة عادية
    .replace(/[\u2018\u2019\u02BC]/g, "'") // علامات تنصيص/فاصلة منحنية → أبوستروف عادي
    .replace(/\s+/g, ' ')
    .trim();
}

function stripItalianAccents(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/'/g, '');
}

function levenshtein1OrLess(a, b) {
  if (a === b) return true;
  const la = a.length,
    lb = b.length;
  if (Math.abs(la - lb) > 1) return false;
  let i = 0,
    j = 0,
    edits = 0;
  while (i < la && j < lb) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    edits++;
    if (edits > 1) return false;
    if (la === lb) {
      i++;
      j++;
    } else if (la > lb) i++;
    else j++;
  }
  if (i < la || j < lb) edits++;
  return edits <= 1;
}

// ضمائر الفاعل الإيطالية — لو المتعلّم كتبها قبل التصريف (زي "lui ha fatto"
// بدل "ha fatto") مبتتحسبش غلط، لأن correctAnswer (row.form) مبنيّة أصلًا
// من غير الضمير (شوف buildProductionQuestion فوق)، فمفيش حالة ممكن فيها
// الضمير يبقى جزء شرعي من الإجابة الصح نفسها.
const SUBJECT_PRONOUNS = ['io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro'];

function stripLeadingPronoun(s) {
  const words = s.split(/\s+/);
  if (words.length > 1 && SUBJECT_PRONOUNS.indexOf(words[0]) !== -1) {
    return words.slice(1).join(' ');
  }
  return s;
}

// بديل كتابة مقبول لـSedersi بس (قرار 2 في الخطة): "Mi siederò" هي الصيغة
// الأساسية، لكن "Mi sederò" (من غير i) مقبولة كبديل كتابةً. "sieder" مش
// موجودة في أي فعل تاني في التطبيق فالتبديل ده آمن (مش هيأثر على حاجة تانية).
function sedersiAltSpelling(correct) {
  return /sieder/i.test(correct) ? correct.replace(/sieder/gi, 'seder') : null;
}

function checkTypedAnswer(input, correct) {
  const norm = (s) => stripInvisibles(s).toLowerCase();
  const a = stripLeadingPronoun(norm(input));
  const c = norm(correct);
  const alt = sedersiAltSpelling(correct);
  const cAlt = alt ? stripLeadingPronoun(norm(alt)) : null;
  if (a === c || (cAlt && a === cAlt)) return { correct: true, accentIssue: false };
  const aNoAccent = stripItalianAccents(a);
  const cNoAccent = stripItalianAccents(c);
  const cAltNoAccent = cAlt ? stripItalianAccents(cAlt) : null;
  if (aNoAccent === cNoAccent || (cAltNoAccent && aNoAccent === cAltNoAccent)) return { correct: true, accentIssue: true }; // ناقص نبرة بس — يتحسب صح + تنبيه
  if (levenshtein1OrLess(aNoAccent, cNoAccent)) return { correct: false, closeMatch: true, accentIssue: false };
  return { correct: false, closeMatch: false, accentIssue: false };
}

// زي checkTypedAnswer بالظبط، بس من غير تجريد الضمير من الإجابة — لأن
// النوع ده (write_from_meaning) الضمير فيه جزء شرعي ومطلوب من الإجابة
// نفسها (زي "noi facciamo")، مش حاجة نتسامح في وجودها زيادة
function checkTypedAnswerWithPronoun(input, correct) {
  const norm = (s) => stripInvisibles(s).toLowerCase();
  const a = norm(input);
  const c = norm(correct);
  const alt = sedersiAltSpelling(correct);
  const cAlt = alt ? norm(alt) : null;
  if (a === c || (cAlt && a === cAlt)) return { correct: true, accentIssue: false };
  const aNoAccent = stripItalianAccents(a);
  const cNoAccent = stripItalianAccents(c);
  const cAltNoAccent = cAlt ? stripItalianAccents(cAlt) : null;
  if (aNoAccent === cNoAccent || (cAltNoAccent && aNoAccent === cAltNoAccent)) return { correct: true, accentIssue: true };
  if (levenshtein1OrLess(aNoAccent, cNoAccent)) return { correct: false, closeMatch: true, accentIssue: false };
  return { correct: false, closeMatch: false, accentIssue: false };
}

// ---------------------------------------------------------------------------
// بند إضافي: "اكتب من الترجمة" — المعنى بالعربي معروض كامل (الضمير + التصريف،
// زي "إحنا عملنا")، وهي تكتب الضمير + الفعل الإيطالي مع بعض (زي "noi
// facciamo"). مختلف عن identify_ar اللي بيخبي الشخص خالص — هنا الشخص
// معروض صراحةً في الضمير العربي، والمطلوب بس النقل للإيطالي. سؤال واحد
// لكل شخص من الستة (SIX_SLOT_ROW_INDEX)، للأفعال الشاذة بس — بتتضاف في
// buildIrregularDeepSession (verb_session_builder.js)
// ---------------------------------------------------------------------------

function personArabicPronoun(personLabel) {
  const m = personLabel.match(/\(([^)]+)\)/);
  return m ? m[1] : personLabel;
}

function buildWriteFromMeaningQuestion(verbName, tense, slot, verbsByName) {
  const rows = getRows(verbsByName[verbName], tense);
  const rowIdx = SIX_SLOT_ROW_INDEX[slot];
  const row = rows[rowIdx];
  const pronounAr = personArabicPronoun(row.person);
  const pronounIt = SUBJECT_PRONOUNS[rowIdx];
  const form = row.form.charAt(0).toLowerCase() + row.form.slice(1);
  return {
    type: 'write_from_meaning',
    verb: verbName,
    tense,
    person: row.person,
    prompt: pronounAr + ' ' + row.ar,
    correctAnswer: pronounIt + ' ' + form,
  };
}

function buildSixWriteFromMeaningQuestions(verbName, tense, verbsByName) {
  return [0, 1, 2, 3, 4, 5].map((s) => buildWriteFromMeaningQuestion(verbName, tense, s, verbsByName));
}

// ---------------------------------------------------------------------------
// فحص إجابة "المعنى بالعربي" (write_meaning_ar) — بيتحمّل بديلين مفصولين
// بـ"/" (زي "عايز / يريد") فأي وحدة منهم لوحدها تتحسب صح، وبيوحّد صور الهمزة
// (أ/إ/آ→ا، ؤ→و، ئ→ي) وبيشيل التشكيل، عشان اختلاف الهمزة أو الحركة مايبقاش
// سبب لرفض إجابة صحيحة معنويًا.
// ---------------------------------------------------------------------------

function normalizeArabic(s) {
  return stripInvisibles(s)
    .replace(/[\u064B-\u065F\u0670]/g, '') // تشكيل: فتحة/ضمة/كسرة/شدة/سكون/تنوين
    .replace(/[أإآ]/g, 'ا')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

function checkArabicAnswer(input, correct) {
  const alts = String(correct)
    .split('/')
    .map((s) => normalizeArabic(s))
    .filter(Boolean);
  // بنقبل كمان النص الكامل زي ما هو معروض على الشاشة (بالـ"/") — لأن المتعلّم
  // بيشوفه كإجابة واحدة بعد الغلط وبيكتبه زي ما هو، مش بس بديل واحد لوحده.
  const full = normalizeArabic(String(correct));
  if (full && alts.indexOf(full) === -1) alts.push(full);
  const a = normalizeArabic(input);
  if (!a) return false;
  return alts.indexOf(a) !== -1;
}

const VerbQuestionEngine = {
  SIX_SLOT_ROW_INDEX,
  IMPERSONAL_FUTURO_SLOT,
  isImpersonalFuturo,
  THREE_TENSES,
  PRACTICE_TENSES,
  seedFromString,
  getRows,
  balanceCorrect,
  buildMeaningMCQ,
  buildWriteMeaningPrompt,
  buildWriteInfinitivePrompt,
  buildFullTableQuestion,
  buildProductionQuestion,
  pickRegularProductionPair,
  buildAllSixProductionQuestions,
  buildIdentifyItalianQuestion,
  buildIdentifyArabicQuestion,
  buildSixIdentifyQuestions,
  buildExplanationScreen,
  buildContrastiveQuestion,
  buildFuturoContrastiveQuestion,
  buildWriteFromMeaningQuestion,
  buildSixWriteFromMeaningQuestions,
  checkTypedAnswer,
  checkTypedAnswerWithPronoun,
  checkArabicAnswer,
};
if (typeof module !== 'undefined' && module.exports) module.exports = VerbQuestionEngine;
if (typeof window !== 'undefined') window.VerbQuestionEngine = VerbQuestionEngine;
