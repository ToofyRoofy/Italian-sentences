// verb_progress_engine.js
// ============================================================================
// حالة التقدّم لكل "خلية" (فعل × زمن): طور mc↔type + جدول مراجعة Ebbinghaus.
// منطق خالص (pure) — من غير أي اعتماد على DOM أو localStorage؛ اللي بيستدعيه
// هو المسؤول عن تخزين كائن الـstate (زي ما هو مطابق تمامًا لاتفاقنا في الخطة).
//
// مبني على نفس آلية mode:'mc'→mode:'type' الموجودة فعليًا في كلماتي
// (checkMwQuiz)، بس بمستوى عدّ مختلف حسب المسار:
//   - منتظم: العداد على مستوى النمط (are/ere/ire/isco/إملائي) — 3 صح متتالية
//   - شاذ:   العداد على مستوى الفعل×الزمن — 5 أشخاص مختلفين صح (مش بس streak)
// ============================================================================

const SR_OFFSET_DAYS = [1, 3, 7, 14]; // منحنى Ebbinghaus — stage 0..3
const REGULAR_STREAK_THRESHOLD = 3;
const IRREGULAR_DISTINCT_PERSON_THRESHOLD = 5; // من مدى 4-5 المتفق عليه، اخترت الأعلى (أأمن)

// ---------------------------------------------------------------------------
// مفاتيح الحالة
// ---------------------------------------------------------------------------

// وحدة العداد للمنتظم هي "النمط" مش الفعل — كل الأفعال اللي بتشارك نفس
// الـpatternFamily (أو نفس group لو fully_regular) بيشاركوا نفس المفتاح.
function patternKey(verbMeta, tense) {
  const t = verbMeta && verbMeta[tense];
  if (!t || t.category === 'true_irregular') return null;
  const family = t.patternFamily || verbMeta.group;
  return `pattern:${family}:${tense}`;
}

function cellKey(verbName, tense) {
  return `cell:${verbName}:${tense}`;
}

function isIrregularCell(verbMeta, tense) {
  return !!(verbMeta && verbMeta[tense] && verbMeta[tense].category === 'true_irregular');
}

// المفتاح الفعلي اللي هيتسجّل عليه التقدّم لخلية معينة (بيوحّد الحالتين)
function progressKeyFor(verbName, verbMeta, tense) {
  return isIrregularCell(verbMeta, tense) ? cellKey(verbName, tense) : patternKey(verbMeta, tense);
}

// ---------------------------------------------------------------------------
// شكل الحالة: state[key] = { mode, streak, seenPersons, graduated, sr }
// ---------------------------------------------------------------------------

function ensureEntry(state, key) {
  if (!state[key]) {
    state[key] = {
      mode: 'mc',        // 'mc' | 'type'
      streak: 0,         // صح متتالي منذ آخر غلطة (تُستخدم للمنتظم)
      seenPersons: [],   // أشخاص اتجابوا صح على الأقل مرة (تُستخدم للشاذ)
      graduated: false,  // دخل جدول SR ولا لسه
      sr: null,          // { stage, lastReview, nextReview }
    };
  }
  return state[key];
}

function addDays(dateStr, days) {
  const d = new Date(dateStr + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function daysBetween(fromStr, toStr) {
  const a = new Date(fromStr + 'T00:00:00Z');
  const b = new Date(toStr + 'T00:00:00Z');
  return Math.round((b - a) / 86400000);
}

// ---------------------------------------------------------------------------
// مرحلة التعلّم (قبل التخرّج): تسجيل إجابة MC، وفتح وضع الكتابة عند العتبة
// ---------------------------------------------------------------------------

function recordLearningAnswer(state, { verbName, verbMeta, tense, person, correct, today }) {
  const irregular = isIrregularCell(verbMeta, tense);
  const key = progressKeyFor(verbName, verbMeta, tense);
  if (!key) return null; // زمن مش موجود في verbMeta (احتياط)
  const entry = ensureEntry(state, key);

  if (entry.graduated) return entry; // خلاص متخرّجة، مفيش داعي نسجّل هنا تاني

  if (correct) {
    entry.streak += 1;
    if (irregular && person && !entry.seenPersons.includes(person)) {
      entry.seenPersons.push(person);
    }
    const threshold = irregular ? IRREGULAR_DISTINCT_PERSON_THRESHOLD : REGULAR_STREAK_THRESHOLD;
    const progress = irregular ? entry.seenPersons.length : entry.streak;
    if (entry.mode === 'mc' && progress >= threshold) {
      entry.mode = 'type';
      entry.graduated = true;
      entry.sr = { stage: 0, lastReview: today, nextReview: addDays(today, SR_OFFSET_DAYS[0]) };
    }
  } else {
    // ملحوظة تصميم: الغلط بيصفّر الـstreak دايمًا (زي كلماتي بالظبط).
    // لكن للشاذ، seenPersons ما بتتصفّرش — شخص أثبتّه قبل كده يفضل مثبّت،
    // الغلط في شخص تاني ميلغيش الإنجاز ده. لو عايز الأشخاص كمان تتصفّر مع
    // أي غلطة (أشد صرامة)، امسح entry.seenPersons = [] هنا كمان.
    entry.streak = 0;
  }
  return entry;
}

// ---------------------------------------------------------------------------
// مرحلة المراجعة (بعد التخرّج): صح بيكبّر الفاصل ويقدّم الميعاد الجاي.
// غلط: من غير عقاب على الجدول — الطور فاضل type والميعاد فاضل زي ما هو
// (مش بيتقصّرش)؛ التعويض التربوي بيحصل بدل كده كسؤال MCQ إضافي بيتحط في
// نفس الجلسة (شوف insertReinforcementMCQ في verb_practice.js).
// ---------------------------------------------------------------------------

function recordReviewAnswer(state, key, correct, today) {
  const entry = ensureEntry(state, key);
  if (!entry.graduated || !entry.sr) return entry; // المراجعة بس للمتخرّج

  // عدّاد "اتراجعت كام مرة" — بيتسجّل بغضّ النظر عن صح/غلط، لأن مجرد ما
  // السؤال ده ظهر في مراجعة يومية يبقى "اتراجع" فعليًا. مستقل تمامًا عن
  // entry.sr.stage (اللي بيتقفل عند أقصى قيمة وبيوصف الفاصل الزمني الجاي
  // مش عدد المرات الكلي).
  entry.reviewCount = (entry.reviewCount || 0) + 1;

  if (correct) {
    entry.sr.stage = Math.min(entry.sr.stage + 1, SR_OFFSET_DAYS.length - 1);
    entry.sr.lastReview = today;
    entry.sr.nextReview = addDays(today, SR_OFFSET_DAYS[entry.sr.stage]);
  }
  // غلط: مفيش أي تعديل على entry.sr أو entry.mode — الميعاد والطور فاضلين
  // زي ما هما تمامًا، زي ما اتفقنا.
  return entry;
}

// ---------------------------------------------------------------------------
// جدول الاستحقاق + الأولوية
// ---------------------------------------------------------------------------

function getReviewsDueOn(state, todayStr) {
  return Object.entries(state)
    .filter(([, e]) => e.graduated && e.sr && e.sr.nextReview <= todayStr)
    .map(([key, e]) => ({ key, ...e, daysOverdue: Math.max(0, daysBetween(e.sr.nextReview, todayStr)) }));
}

const IRREGULARITY_WEIGHT = {
  true_irregular: 3,
  isco_pattern: 1.5,
  orthographic_only: 1.2,
  fully_regular: 1,
};

// w1/w2/w3 قيم افتراضية مبدئية بس — مش مُختبرة، زي ما اتفقنا في حدود
// الأمانة العلمية بالخطة. لازم تتضبط بعد أول استخدام حقيقي.
function priorityScore(dueItem, category, freqRank, weights = { w1: 3, w2: 60, w3: 2 }) {
  const rank = freqRank || 999;
  const irrW = IRREGULARITY_WEIGHT[category] || 1;
  return weights.w1 * dueItem.daysOverdue + weights.w2 * (1 / rank) + weights.w3 * irrW;
}

// ---------------------------------------------------------------------------
// إعادة إدراج قريبة عند الغلط داخل الجلسة (Leitner-style، زي كلماتي بالظبط:
// checkMwQuiz بيستخدم Math.random هنا فعليًا — مش seed ثابت، لأن ده توقيت
// داخل جلسة حيّة مش توليد مشتّتات قابل لإعادة الإنتاج)
// ---------------------------------------------------------------------------

function requeueNear(queue, item) {
  const at = Math.min(2 + Math.floor(Math.random() * 3), queue.length);
  queue.splice(at, 0, item);
}

const VerbProgressEngine = {
  SR_OFFSET_DAYS,
  REGULAR_STREAK_THRESHOLD,
  IRREGULAR_DISTINCT_PERSON_THRESHOLD,
  patternKey,
  cellKey,
  isIrregularCell,
  progressKeyFor,
  ensureEntry,
  addDays,
  daysBetween,
  recordLearningAnswer,
  recordReviewAnswer,
  getReviewsDueOn,
  priorityScore,
  requeueNear,
};
// متاحة بالاسمين: require() في Node (للاختبارات)، وglobal.VerbProgressEngine
// في المتصفح (زي باقي ملفات المشروع اللي بتتحمّل بـ<script> عادي من غير bundler)
if (typeof module !== 'undefined' && module.exports) module.exports = VerbProgressEngine;
if (typeof window !== 'undefined') window.VerbProgressEngine = VerbProgressEngine;
