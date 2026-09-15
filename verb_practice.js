// verb_practice.js
// ============================================================================
// طبقة الربط بالتطبيق الفعلي: بتحقن زرار دخول + نافذة جلسة بنفسها (من غير ما
// تحتاج تعديل في index.html)، وبتستخدم verb_progress_engine.js +
// verb_question_engine.js + verb_session_builder.js اللي فاتوا.
//
// بتعيد استخدام:
//   - .verb-modal-overlay / .verb-modal / .verb-modal-head / .verb-modal-body
//     (نفس شكل مودال المكتبة المرجعية الموجود، بس بـid جديد vpOverlay)
//   - .grammar-q-option (بحالتيها .ok/.bad) لأي سؤال MC
//   - .conj-table لعرض شاشة الشرح
//   - speakWord(text) الموجودة فعليًا في app.js (مظبوطة على it-IT بالفعل)
//
// محتاج verbs.js + verb_meta.js + الثلاث ملفات engine تتحمّل قبل الملف ده.
// ============================================================================

(function () {
  const PE = window.VerbProgressEngine;
  const QE = window.VerbQuestionEngine;
  const SB = window.VerbSessionBuilder;

  if (!PE || !QE || !SB) {
    console.warn('[verb_practice] محركات الأفعال مش متحمّلة — تأكد إن verb_progress_engine.js / verb_question_engine.js / verb_session_builder.js متحمّلين قبل الملف ده.');
    return;
  }

  const LS_STATE_KEY = 'parlaVerbProgress';
  const LS_TTS_KEY = 'parlaVerbTtsCount';
  const LS_SESSION_LOG_KEY = 'parlaVerbSessionLog'; // أرشيف الجلسات — دائم، منفصل عن حالة التقدّم

  function loadJSON(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveJSON(key, obj) {
    try {
      localStorage.setItem(key, JSON.stringify(obj));
    } catch (e) {
      /* التخزين ممكن يفشل (وضع خاص، مساحة ممتلئة)، الجلسة تكمل في الذاكرة برضو */
    }
  }

  function today() {
    return new Date().toISOString().slice(0, 10);
  }
  function toAr(n) {
    return String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
  }
  function tenseLabel(t) {
    return { presente: 'المضارع', passato: 'الماضي', imperfetto: 'الماضي المستمر' }[t] || t;
  }
  function kindLabel(k) {
    return { regular: '📗 تعلّم مختلط (منتظم)', irregular: '📕 تعميق فردي (شاذ)', review: '📅 مراجعة يومية' }[k] || k;
  }

  // ---------------------------------------------------------------------
  // أرشيف الجلسات — سجل دائم بتاريخ كل جلسة، منفصل عن حالة التقدّم اللي
  // بيديرها verb_progress_engine.js (مش بيتمسح مع أي reset لتقدّم الأفعال)
  // ---------------------------------------------------------------------

  function loadSessionLog() {
    return loadJSON(LS_SESSION_LOG_KEY);
  }
  function saveSessionLog(log) {
    saveJSON(LS_SESSION_LOG_KEY, log);
  }
  function fmtClock(ts) {
    if (!ts) return '—';
    const d = new Date(ts);
    let h = d.getHours(), m = String(d.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? 'م' : 'ص';
    h = h % 12; if (h === 0) h = 12;
    return toAr(h) + ':' + toAr(m) + ' ' + ampm;
  }
  function fmtDuration(ms) {
    if (!ms || ms < 0) return '—';
    const totalMin = Math.round(ms / 60000);
    const h = Math.floor(totalMin / 60), m = totalMin % 60;
    if (h > 0) return toAr(h) + ' ساعة' + (m > 0 ? ' و' + toAr(m) + ' دقيقة' : '');
    if (m > 0) return toAr(m) + ' دقيقة';
    return 'أقل من دقيقة';
  }
  function fmtDateFull(dateKey) {
    const months = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
    const [y, mo, da] = dateKey.split('-').map(Number);
    return toAr(da) + ' ' + months[mo - 1] + ' ' + toAr(y);
  }
  function summarizeSteps(steps) {
    const seen = [];
    (steps || []).forEach(function (s) {
      if (!s.verb) return;
      const label = s.verb + (s.tense ? ' (' + tenseLabel(s.tense) + ')' : '');
      if (seen.indexOf(label) === -1) seen.push(label);
    });
    return seen;
  }
  function recordSessionCompleted(entry) {
    const log = loadSessionLog();
    const key = today();
    if (!log[key]) log[key] = [];
    log[key].push(entry);
    saveSessionLog(log);
  }

  // ⏰ أقرب ميعاد مراجعة جاية، محسوب لحظيًا من حالة SR الحقيقية (PE) —
  // مش تاريخ منفصل بنخزّنه إحنا، فمفيش خطر إنه يعدّي عن الحالة الفعلية
  // (لو المتعلم أجاب على حاجة تانية في الأثناء، الحالة هتتحدّث تلقائي)
  function nextUpcomingReview(state) {
    let minDate = null, count = 0;
    Object.keys(state || {}).forEach(function (key) {
      const e = state[key];
      if (!e || !e.graduated || !e.sr || !e.sr.nextReview) return;
      if (minDate === null || e.sr.nextReview < minDate) { minDate = e.sr.nextReview; count = 1; }
      else if (e.sr.nextReview === minDate) count++;
    });
    return minDate ? { date: minDate, count: count } : null;
  }

  function describeKey(key) {
    const parts = key.split(':');
    if (parts[0] === 'cell') return parts[1] + (parts[2] ? ' (' + tenseLabel(parts[2]) + ')' : '');
    return 'نمط ' + parts[1] + (parts[2] ? ' (' + tenseLabel(parts[2]) + ')' : '');
  }

  // اليوم بالظبط بيعرض كل حاجة مستحقة "لغاية دلوقتي" (زي PE.getReviewsDueOn
  // الحقيقية <=) — عشان لو العنصر اتفوّت واتأخر، يفضل ظاهر في التقويم النهاردة
  // بدل ما يختفي بمجرد ما يعدّي يوم استحقاقه الأصلي. أيام تانية (ماضي/مستقبل)
  // بتوري بس اللي كان/هيكون مجدول بالظبط ليها (=== مش <=).
  function reviewsDueOnDate(state, dateKey) {
    const isToday = dateKey === today();
    return Object.keys(state || {}).filter(function (key) {
      const e = state[key];
      if (!e || !e.graduated || !e.sr || !e.sr.nextReview) return false;
      return isToday ? e.sr.nextReview <= dateKey : e.sr.nextReview === dateKey;
    }).map(function (key) {
      const e = state[key];
      const overdue = isToday && e.sr.nextReview < dateKey;
      return describeKey(key) + (overdue ? ' ⚠️ متأخرة' : '');
    });
  }

  let verbsByName = {},
    allVerbNames = [],
    curriculum = null;

  function ensureData() {
    if (allVerbNames.length) return;
    (VERBS || []).forEach((v) => (verbsByName[v.it] = v));
    allVerbNames = (VERBS || []).map((v) => v.it);
    curriculum = SB.getCurriculumOrder(VERB_META || {});
  }

  // ---------------------------------------------------------------------
  // حقن الواجهة (زرار + مودال) — مرة واحدة بس
  // ---------------------------------------------------------------------

  function injectShell() {
    if (document.getElementById('vpFab')) return;

    const fab = document.createElement('button');
    fab.className = 'vp-fab';
    fab.id = 'vpFab';
    fab.setAttribute('aria-label', 'تدريب الأفعال');
    fab.textContent = '🎯';
    fab.onclick = openMenu;
    document.body.appendChild(fab);

    const overlay = document.createElement('div');
    overlay.className = 'verb-modal-overlay';
    overlay.id = 'vpOverlay';
    overlay.onclick = function (e) {
      if (e.target && e.target.id === 'vpOverlay') closeOverlay();
    };
    overlay.innerHTML =
      '<div class="verb-modal">' +
      '<div class="verb-modal-head">' +
      '<div class="verb-modal-it" id="vpTitle">تدريب الأفعال</div>' +
      '<button class="verb-modal-close" onclick="VerbPractice._close()">✕</button>' +
      '</div>' +
      '<div class="verb-modal-body" id="vpBody"></div>' +
      '</div>';
    document.body.appendChild(overlay);
  }

  function openOverlay() {
    document.getElementById('vpOverlay').classList.add('show');
  }
  function closeOverlay() {
    const el = document.getElementById('vpOverlay');
    if (el) el.classList.remove('show');
    if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
    session = null;
  }

  function openMenu() {
    ensureData();
    injectShell();
    document.getElementById('vpTitle').textContent = 'تدريب الأفعال';
    const state = loadJSON(LS_STATE_KEY);
    const dueCount = PE.getReviewsDueOn(state, today()).length;
    const nextIrregular = SB.nextIrregularCell(state, curriculum);
    const day = today();
    // حالة قفل النهاردة — لو فيه جلسة (منتظم/شاذ) اتعملت أو لسه شغّالة
    // النهاردة تحديدًا. شوف start() تحت لشرح الآلية كاملة.
    const regState = state.dailyRegular && state.dailyRegular.date === day ? state.dailyRegular : null;
    const irrState = state.dailyIrregular && state.dailyIrregular.date === day ? state.dailyIrregular : null;
    // لو فيه جلسة شاذ اتبدأت النهاردة ولسه ما خلصتش، نوريها هي بالذات (مش
    // اللي بعدها) — عشان النص في الزرار يطابق اللي هيفتح فعليًا لو دوس عليه
    const irregularPreview = irrState && !irrState.completed ? { verb: irrState.verb, tense: irrState.tense } : nextIrregular;

    let html = '<div class="vp-menu">';
    html +=
      '<div class="vp-menu-btn" onclick="VerbPractice._start(\'regular\')"><b>📗 تعلّم مختلط (منتظم)</b><span>' +
      (regState && regState.completed ? '✅ خلصت جلسة النهاردة — تعالى بكرة' : '5 أفعال جديدة بالترتيب') +
      '</span></div>';
    if (irregularPreview) {
      html +=
        '<div class="vp-menu-btn" onclick="VerbPractice._start(\'irregular\')"><b>📕 تعميق فردي (شاذ)</b><span>' +
        (irrState && irrState.completed
          ? '✅ خلصت جلسة النهاردة — تعالى بكرة'
          : irregularPreview.verb + ' — ' + tenseLabel(irregularPreview.tense)) +
        '</span></div>';
    }
    html +=
      '<div class="vp-menu-btn" onclick="VerbPractice._start(\'review\')"><b>📅 مراجعة يومية</b><span>' +
      (dueCount ? toAr(dueCount) + ' عنصر مستحق' : 'مفيش حاجة مستحقة دلوقتي') +
      '</span></div>';
    html +=
      '<div class="vp-menu-btn" onclick="VerbPractice._openCalendar()"><b>🗂️ سجل جلساتي</b><span>أرشيف كل الجلسات اللي عملتها</span></div>';
    html += '</div>';
    document.getElementById('vpBody').innerHTML = html;
    openOverlay();
  }

  // ---------------------------------------------------------------------
  // تشغيل الجلسة
  // ---------------------------------------------------------------------

  let session = null; // { steps, idx, state, correct, ttsCount }

  function flattenSession(result) {
    if (!result) return [];
    if (result.type === 'regular_learning') {
      // بدل الترتيب بالكتلة (11 سؤال ورا بعض لنفس الفعل، بيداغوجيًا أضعف —
      // Blocked Practice) — تنويع دائري بين أسئلة الأفعال الخمسة (نفس منطق
      // كلماتي)، بحيث السؤال الجاي غالبًا لفعل مختلف عن اللي قبله، فالمتعلم
      // مضطر يسترجع من الذاكرة الفعلية كل مرة بدل ما يعتمد على استمرار لحظي.
      // ترتيب أسئلة كل فعل الداخلي (معنى → كتابة → جدول → إنتاج) فاضل زي ما
      // هو زي ما اتصمم — إحنا بس بنوزّع الأفعال على بعض، مش بنلخبط جوه الفعل.
      const perVerbQueues = result.verbs.map(function (v) {
        return v.items.map(function (it) {
          return Object.assign({ sessionType: 'regular_learning', verb: v.verb }, it);
        });
      });
      const steps = [];
      let hasMore = true;
      while (hasMore) {
        hasMore = false;
        perVerbQueues.forEach(function (q) {
          if (q.length) { steps.push(q.shift()); hasMore = true; }
        });
      }
      return steps;
    }
    if (result.type === 'irregular_deep') {
      return result.items.map(function (it) {
        return Object.assign({ sessionType: 'irregular_deep', verb: result.verb, tense: result.tense }, it);
      });
    }
    if (result.type === 'daily_review') {
      return result.questions.map(function (q) {
        return Object.assign({ sessionType: 'daily_review' }, q);
      });
    }
    return [];
  }

  // 🐞 إصلاح: قبل كده كل ضغطة على "تعلّم مختلط"/"تعميق فردي" كانت بتنادي
  // الـbuilder من غير أي قفل، والـbuilder بيسحّب أول دفعة "مش متعلّمة" ويعلّمها
  // فورًا (state.introduced) بمجرد الفتح، مش بعد إتمام الجلسة فعليًا. فكل
  // ضغطة كانت بتاكل 5 أفعال جداد (أو خلية شاذة جديدة) بدل ما تدّيك نفس جلسة
  // النهاردة. هنا بنقفل كل نوع على مرة واحدة في اليوم: أول ضغطة تختار
  // الدفعة/الخلية وتسجّلها في state.dailyRegular / state.dailyIrregular،
  // وأي ضغطة تانية النهاردة بتفتح *نفس* الدفعة (لو لسه ما خلصتش) أو بتتقفل
  // برسالة واضحة (لو خلصت). "مراجعة يومية" مش متأثرة — دايمًا بتجيب اللي
  // مستحق فعليًا من جدول SR، مفيش حاجة تتاكل بالغلط.
  function start(kind) {
    const state = loadJSON(LS_STATE_KEY);
    const day = today();
    let result = null;

    if (kind === 'regular') {
      const dr = state.dailyRegular && state.dailyRegular.date === day ? state.dailyRegular : null;
      if (dr && dr.completed) {
        document.getElementById('vpBody').innerHTML =
          '<div class="vp-summary">خلصت جلسة "تعلّم مختلط" بتاعة النهاردة ✅<br>' +
          '<span style="font-size:.68rem;color:var(--muted);display:block;margin-top:6px;">تعالى تاني بكرة لـ٥ أفعال جديدة</span></div>' +
          '<button class="vp-next-btn" onclick="VerbPractice._close()">تمام</button>';
        return;
      }
      result = SB.buildRegularLearningSession(state, curriculum, VERB_META, verbsByName, allVerbNames, 5, dr ? dr.verbs : null);
      if (!dr && result && result.verbs && result.verbs.length) {
        state.dailyRegular = { date: day, verbs: result.verbs.map(function (v) { return v.verb; }), completed: false };
      }
    } else if (kind === 'irregular') {
      const di = state.dailyIrregular && state.dailyIrregular.date === day ? state.dailyIrregular : null;
      if (di && di.completed) {
        document.getElementById('vpBody').innerHTML =
          '<div class="vp-summary">خلصت جلسة "تعميق فردي" بتاعة النهاردة ✅<br>' +
          '<span style="font-size:.68rem;color:var(--muted);display:block;margin-top:6px;">تعالى تاني بكرة لفعل شاذ جديد</span></div>' +
          '<button class="vp-next-btn" onclick="VerbPractice._close()">تمام</button>';
        return;
      }
      const explicitCell = di ? { verb: di.verb, tense: di.tense } : null;
      result = SB.buildIrregularDeepSession(state, curriculum, VERB_META, verbsByName, allVerbNames, explicitCell);
      if (!di && result) {
        state.dailyIrregular = { date: day, verb: result.verb, tense: result.tense, completed: false };
      }
    } else if (kind === 'review') {
      result = SB.buildDailyReviewSession(state, curriculum, VERB_META, verbsByName, day, 15);
    }

    saveJSON(LS_STATE_KEY, state); // builders بتحدّث state.introduced كأثر جانبي حتى قبل أول إجابة

    const steps = flattenSession(result);
    if (!steps.length) {
      document.getElementById('vpBody').innerHTML =
        '<div class="vp-summary">مفيش حاجة جديدة دلوقتي 🌿</div><button class="vp-next-btn" onclick="VerbPractice._close()">تمام</button>';
      return;
    }
    session = { steps: steps, idx: 0, state: state, correct: 0, ttsCount: loadJSON(LS_TTS_KEY), kind: kind, startTime: Date.now(), mistakes: [] };
    renderStep();
  }

  // ---------------------------------------------------------------------
  // عرض كل نوع سؤال
  // ---------------------------------------------------------------------

  function inputBlock() {
    return (
      '<input class="vp-input" id="vpInput" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="if(event.key===\'Enter\')VerbPractice._answerText()">' +
      '<button class="vp-submit-btn" id="vpSubmitBtn" onclick="VerbPractice._answerText()">تأكيد</button>' +
      '<div class="vp-feedback" id="vpFeedback"></div>'
    );
  }

  function mcOptionsHtml(options, extraStyle) {
    return options
      .map(function (o, i) {
        return '<button class="grammar-q-option" style="' + (extraStyle || '') + '" onclick="VerbPractice._answerMC(' + i + ')">' + o + '</button>';
      })
      .join('');
  }

  const renderers = {
    meaning_mcq: function (step) {
      return (
        '<div class="vp-prompt">إيه معنى ' + itSpan(step.verb) + '؟</div>' +
        '<div class="q-options">' + mcOptionsHtml(step.options) + '</div>' +
        '<div class="vp-feedback" id="vpFeedback"></div>'
      );
    },
    write_meaning_ar: function (step) {
      return '<div class="vp-prompt">اكتب معنى <span class="it">' + step.verb + '</span> بالعربي</div>' + inputBlock();
    },
    write_infinitive: function (step) {
      return '<div class="vp-prompt">اكتب الفعل بالإيطالي:<br>«' + step.ar + '»</div>' + inputBlock();
    },
    full_table: function (step) {
      return (
        '<div class="vp-prompt">جدول ' + itSpan(step.verb) + ' — ' + tenseLabel(step.tense) + '</div>' +
        '<div class="q-options">' + mcOptionsHtml(step.options, 'direction:ltr;text-align:left;font-family:Georgia,serif;') + '</div>' +
        '<div class="vp-feedback" id="vpFeedback"></div>'
      );
    },
    produce: function (step) {
      return (
        '<div class="vp-prompt">' + step.person + ' + ' + itSpan(step.verb) + ' (' + tenseLabel(step.tense) + ')<br>' +
        '<span class="vp-tag">' + step.ar + '</span></div>' +
        inputBlock()
      );
    },
    identify_it: function (step) {
      return (
        '<div class="vp-prompt">الشكل ' + itSpan(step.shownForm) + '<br>مين وإمتى؟</div>' +
        '<div class="q-options">' + mcOptionsHtml(step.options) + '</div>' +
        '<div class="vp-feedback" id="vpFeedback"></div>'
      );
    },
    identify_ar: function (step) {
      return '<div class="vp-prompt">«' + step.shownAr + '»<br>اكتب الصيغة بالإيطالي</div>' + inputBlock();
    },
    exposure: function (step) {
      return (
        '<div class="vp-prompt"><span class="it">' + step.form + '</span><br>' +
        '<span class="vp-tag">' + step.person + ' · ' + step.ar + '</span></div>' +
        '<button class="vp-next-btn" onclick="VerbPractice._next()">تمام، كمّل ←</button>'
      );
    },
    explanation_screen: function (step) {
      let tables = '';
      Object.keys(step.tables).forEach(function (t) {
        tables +=
          '<div style="margin-bottom:10px;"><b style="font-size:.78rem;color:var(--muted)">' + tenseLabel(t) + '</b>' +
          '<div class="conj-table">' +
          step.tables[t]
            .map(function (r) {
              return (
                '<div style="display:flex;justify-content:space-between;padding:3px 0;"><span>' + r.person + '</span>' +
                '<span style="font-family:Georgia,serif;color:var(--gold);direction:ltr">' + r.form + '</span></div>'
              );
            })
            .join('') +
          '</div></div>';
      });
      return (
        '<div class="vp-prompt">' + itSpan(step.verb) + ' — ' + step.ar + '</div>' +
        tables +
        '<button class="vp-next-btn" onclick="VerbPractice._next()">فهمت ←</button>'
      );
    },
    contrastive: function (step) {
      return (
        '<div class="vp-prompt">' + step.person + '<br>لو ' + itSpan(step.verb) + ' كان منتظم كان هيبقى ' +
        '<b style="color:var(--muted);text-decoration:line-through">' + step.expectedIfRegular + '</b><br>' +
        'لكنه فعليًا ' + itSpan(step.actual, null, 'b', 'color:var(--gold)') + '</div>' +
        '<button class="vp-next-btn" onclick="VerbPractice._next()">واضح ←</button>'
      );
    },
  };

  function renderStep() {
    const step = session.steps[session.idx];
    let html = '<div class="vp-progress">سؤال ' + toAr(session.idx + 1) + ' من ' + toAr(session.steps.length) + '</div>';
    html += renderers[step.type] ? renderers[step.type](step) : '<div>نوع سؤال غير مدعوم: ' + step.type + '</div>';
    document.getElementById('vpBody').innerHTML = html;
    // تركيز تلقائي على مربع الإجابة (بند 3) — بيمنع الحاجة إن المتعلّم يدوس
    // على المربع بنفسه كل سؤال بس عشان يكتب، خصوصًا بعد إجابة صح والانتقال
    // للسؤال الجاي تلقائيًا
    const inputEl = document.getElementById('vpInput');
    if (inputEl) inputEl.focus();
  }

  // ---------------------------------------------------------------------
  // معالجة الإجابات — هنا بيتحدد مين بيغذّي محرك التقدّم (PE) ومين بيتعرض بس
  // ---------------------------------------------------------------------

  function speakIfWarranted(verb, text) {
    session.ttsCount[verb] = (session.ttsCount[verb] || 0) + 1;
    // النطق التلقائي بعد إجابة صح لازم يحصل دايمًا (مش بس أول 3 مرات) —
    // ttsCount فاضل متسجّل لأغراض إحصائية بس، مبقاش بيحدّ النطق.
    if (typeof window.speakWord === 'function') {
      window.speakWord(text);
    }
    saveJSON(LS_TTS_KEY, session.ttsCount);
  }

  // إمكانية سماع نطق أي كلمة إيطالية معروضة بالضغط عليها (بند 6) — بتتنادى من
  // onclick على أي span.it مبني بـitSpan() تحت
  function speakEl(el) {
    if (!el) return;
    const text = el.getAttribute('data-say') || el.textContent;
    if (typeof window.speakWord === 'function') window.speakWord(text);
  }

  // بادي span.it قابل للنقر لسماع النطق — sayText اختياري لو النص المعروض
  // مختلف عن اللي المفروض يتنطق (افتراضيًا بينطق نفس النص المعروض)
  function itSpan(text, sayText, tag, extraStyle) {
    tag = tag || 'span';
    const say = (sayText != null ? sayText : text).replace(/"/g, '&quot;');
    return '<' + tag + ' class="it vp-speak" data-say="' + say + '" onclick="VerbPractice._speakEl(this)" style="cursor:pointer;' + (extraStyle || '') + '">' + text + '</' + tag + '>';
  }

  // بند 4 (full_table، شكله MC) وبند 5 (produce، شكله type) الاتنين بيقودوا
  // التخرّج — للمنتظم (النمط) وللشاذ (الفعل×الزمن) على حد سواء، زي ما محدّد في
  // الخطة (بند 3 للمنتظم، بند 4-5 للشاذ). PE.recordLearningAnswer بيوجّه كل
  // إجابة لمستوى التتبّع الصح لوحده (pattern أو cell) حسب فئة verb_meta.js،
  // فمش فارق مين بنى السؤال — الجلسة المنتظمة أو الشاذة. باقي الأنواع (المعنى،
  // التحليل، المقارنة، الشرح) مش متتبّعة — تعليمية/تعزيزية بس، زي ما اتحدد بالخطة.
  function feedProgressEngine(step, correct) {
    if (step.sessionType === 'daily_review') {
      PE.recordReviewAnswer(session.state, step.key, correct, today());
      return;
    }
    if (step.type === 'full_table' || step.type === 'produce') {
      PE.recordLearningAnswer(session.state, { verbName: step.verb, verbMeta: VERB_META[step.verb], tense: step.tense, person: step.person, correct: correct, today: today() });
    }
  }

  // إعادة إدراج قريبة بعد الغلط (بند 5+6 في الخطة) — الفعل/السؤال يرجع في
  // الطابور بعد 2-4 عناصر بدل ما يختفي للأبد بمجرد ما يتعدّى. مهم بالذات لما
  // الـpattern يكون خلاص اتخرّج (زي -are الشائعة) — PE.recordLearningAnswer
  // بيتجاهل الغلط وقتها تمامًا (entry.graduated بيوقف التسجيل)، فإعادة
  // الإظهار دي هي الأثر التربوي الوحيد المتبقّي للغلطة في اللحظة دي.
  function requeueCurrentStep() {
    const step = session.steps[session.idx];
    const remaining = session.steps.slice(session.idx + 1);
    PE.requeueNear(remaining, step);
    session.steps = session.steps.slice(0, session.idx + 1).concat(remaining);
  }

  // غلط في المراجعة: مفيش عقاب على الجدول (شوف recordReviewAnswer) — بدل
  // كده بنحط سؤال MCQ إضافي (تعرّف/جدول) في الطابور كتعويض تربوي فوري،
  // وبيتكرر كل ما تغلط تاني (حتى لو في سؤال التعويض نفسه — تكديس).
  function isReviewFamily(step) {
    return step.sessionType === 'daily_review' || step.sessionType === 'daily_review_reinforcement';
  }
  function buildReinforcementMCQ(step) {
    const key = step.key;
    const rep = step.representativeVerb || step.verb;
    const tense = step.tense;
    if (!rep || !tense || !key) return null;
    const seed = QE.seedFromString(key + Date.now() + Math.random());
    const slot = seed % 6;
    let q;
    if (key.indexOf('cell:') === 0) {
      q = QE.buildIdentifyItalianQuestion(rep, tense, slot, verbsByName);
    } else {
      q = QE.buildFullTableQuestion(rep, tense, VERB_META, verbsByName, allVerbNames);
    }
    if (!q) return null;
    return Object.assign({ sessionType: 'daily_review_reinforcement', key: key, representativeVerb: rep, reinforcement: true }, q);
  }
  function insertReinforcementMCQ(step) {
    const q = buildReinforcementMCQ(step);
    if (!q) return;
    const remaining = session.steps.slice(session.idx + 1);
    PE.requeueNear(remaining, q);
    session.steps = session.steps.slice(0, session.idx + 1).concat(remaining);
  }

  // تصحيح إجباري بعد غلط في سؤال مراجعة وضعه type (بند 6: checkQuizRecallWrite-style)
  // — يكتب الإجابة الصح مرة واحدة قبل ما يكمل، بدل ما يتعدّى السؤال بمجرد ما
  // يشوف "❌ الصح: ..." لثانية وحدة.
  function renderForceCorrection(correctAnswer) {
    const body = document.getElementById('vpBody');
    const wrap = document.createElement('div');
    wrap.innerHTML =
      '<div class="vp-prompt">اكتب الصح تاني قبل ما تكمل: <b class="it" style="direction:ltr;display:inline-block">' + correctAnswer + '</b></div>' +
      '<input class="vp-input" id="vpForceInput" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="if(event.key===\'Enter\')VerbPractice._confirmCorrection()">' +
      '<button class="vp-submit-btn" onclick="VerbPractice._confirmCorrection()">تأكيد</button>' +
      '<div class="vp-feedback" id="vpForceFeedback"></div>';
    body.appendChild(wrap);
    const input = document.getElementById('vpForceInput');
    if (input) input.focus();
  }

  function confirmCorrection() {
    const input = document.getElementById('vpForceInput');
    if (!input) return;
    if (!input.value || !input.value.trim()) {
      input.focus();
      return;
    }
    const target = session.pendingCorrect;
    const ok = QE.checkTypedAnswer(input.value, target).correct;
    if (!ok) {
      const fb = document.getElementById('vpForceFeedback');
      fb.className = 'vp-feedback bad';
      fb.textContent = 'لسه مش هي، جرّب تاني: ' + target;
      input.value = '';
      input.focus();
      return;
    }
    session.pendingCorrect = null;
    next();
  }

  function answerMC(i) {
    const step = session.steps[session.idx];
    const correct = i === step.correctIndex;
    const buttons = document.querySelectorAll('#vpBody .grammar-q-option');
    buttons.forEach(function (btn, idx) {
      btn.disabled = true;
      if (idx === step.correctIndex) btn.classList.add('ok');
      else if (idx === i) btn.classList.add('bad');
    });
    feedProgressEngine(step, correct);
    if (correct) {
      session.correct++;
      speakIfWarranted(step.verb, step.verb);
    } else {
      if (isReviewFamily(step)) insertReinforcementMCQ(step); else requeueCurrentStep();
      session.mistakes.push({ verb: step.verb, tense: step.tense, type: step.type, chosen: step.options ? step.options[i] : '', correct: step.options ? step.options[step.correctIndex] : '' });
    }
    const fb = document.getElementById('vpFeedback');
    if (fb) {
      fb.className = 'vp-feedback ' + (correct ? 'ok' : 'bad');
      fb.textContent = correct ? '✅ صح' : '❌ مش كده';
    }
    setTimeout(next, 900);
  }

  function answerText() {
    const step = session.steps[session.idx];
    const input = document.getElementById('vpInput');
    const value = input.value;
    // مربع فاضي: مانديش تأكيد ولا نحسبها غلط — نرجّع الفوكس بس (بند 1)
    if (!value || !value.trim()) {
      input.focus();
      return;
    }
    input.disabled = true;
    document.getElementById('vpSubmitBtn').disabled = true;

    let correctAnswer, result;
    if (step.type === 'write_meaning_ar') {
      correctAnswer = step.correctAnswer;
      // عربي — بيتحمّل بدائل مفصولة بـ"/" وفروق الهمزة/التشكيل (بند 5)
      result = { correct: QE.checkArabicAnswer(value, correctAnswer) };
    } else if (step.type === 'identify_ar') {
      correctAnswer = step.correctForm;
      result = QE.checkTypedAnswer(value, correctAnswer);
    } else {
      correctAnswer = step.correctAnswer;
      result = QE.checkTypedAnswer(value, correctAnswer);
    }

    feedProgressEngine(step, result.correct);
    if (result.correct) {
      session.correct++;
      speakIfWarranted(step.verb, correctAnswer);
    } else {
      if (isReviewFamily(step)) insertReinforcementMCQ(step); else requeueCurrentStep();
      session.mistakes.push({ verb: step.verb, tense: step.tense, type: step.type, chosen: value, correct: correctAnswer });
    }

    const fb = document.getElementById('vpFeedback');
    if (result.correct && result.accentIssue) {
      fb.className = 'vp-feedback accent';
      fb.textContent = '✅ صح، بس راجع النبرة: ' + correctAnswer;
    } else if (result.correct) {
      fb.className = 'vp-feedback ok';
      fb.textContent = '✅ صح';
    } else {
      fb.className = 'vp-feedback bad';
      fb.textContent = '❌ الصح: ' + correctAnswer;
    }

    // تصحيح إجباري بس لوضع type في المراجعة اليومية (بند 6) — باقي الأنواع
    // (تعلّم مختلط/تعميق فردي) بيكتفوا بإعادة الإدراج القريبة اللي فوق
    if (!result.correct && step.sessionType === 'daily_review' && step.reviewMode === 'type') {
      session.pendingCorrect = correctAnswer;
      renderForceCorrection(correctAnswer);
      return;
    }
    setTimeout(next, 1200);
  }

  function next() {
    session.idx++;
    if (session.idx >= session.steps.length) {
      // نقفل قفل النهاردة هنا بالظبط (لحظة الوصول لآخر سؤال فعليًا)، مش وقت
      // الفتح — عشان لو المتعلم قفل المودال قبل ما يخلّص، الجلسة تفضل مفتوحة
      // ولما يرجعله يكمّل نفس الـ٥ أفعال (أو نفس الخلية الشاذة) مش دفعة جديدة.
      if (session.kind === 'regular' && session.state.dailyRegular && session.state.dailyRegular.date === today()) {
        session.state.dailyRegular.completed = true;
      }
      if (session.kind === 'irregular' && session.state.dailyIrregular && session.state.dailyIrregular.date === today()) {
        session.state.dailyIrregular.completed = true;
      }
    }
    saveJSON(LS_STATE_KEY, session.state);
    if (session.idx >= session.steps.length) {
      renderSummary();
      return;
    }
    renderStep();
  }

  function renderSummary() {
    // إعادة الإدراج ممكن تكرر نفس السؤال أكتر من مرة — العدّ بيتصفّى على
    // مستوى (verb+type+tense+idx الأصلي) مش هنا، فبيتحسبوا كمحاولات منفصلة
    // زي ما هو متوقع من آلية Leitner
    const total = session.steps.filter(function (s) {
      return s.type !== 'exposure' && s.type !== 'explanation_screen' && s.type !== 'contrastive';
    }).length;

    const nextReview = nextUpcomingReview(session.state);

    recordSessionCompleted({
      id: today() + '-' + Date.now(),
      kind: session.kind,
      startTime: session.startTime,
      endTime: Date.now(),
      durationMs: Date.now() - session.startTime,
      correct: session.correct,
      total: total,
      verbs: summarizeSteps(session.steps),
      mistakes: session.mistakes,
      nextReviewDate: nextReview ? nextReview.date : null,   // ⏰ ميعاد أقرب مراجعة جاية — للإنشورانس، محسوب من نفس حالة SR الحقيقية وقت ما خلصت الجلسة
      nextReviewCount: nextReview ? nextReview.count : 0
    });

    const nextReviewBox = nextReview
      ? '<div style="background:#0e0e1a;border:1px solid var(--gold);border-radius:12px;padding:10px 12px;margin-top:14px;text-align:center;">' +
        '<div style="font-size:.72rem;color:var(--muted);">⏰ المراجعة الجاية</div>' +
        '<div style="font-weight:900;color:var(--gold);margin-top:2px;">' + fmtDateFull(nextReview.date) + '</div>' +
        '<div style="font-size:.66rem;color:var(--muted);margin-top:2px;">' + toAr(nextReview.count) + ' عنصر مستحق</div>' +
        '</div>'
      : '';

    document.getElementById('vpBody').innerHTML =
      '<div class="vp-summary"><div class="big">' + toAr(session.correct) + '/' + toAr(total) + '</div>إجابات صح</div>' +
      nextReviewBox +
      '<button class="vp-next-btn" onclick="VerbPractice._close()">تمام</button>' +
      '<button class="vp-next-btn" onclick="VerbPractice._openCalendar()" style="margin-top:8px;">🗂️ شوف سجل الجلسات</button>';
    session = null;
  }

  // ---------------------------------------------------------------------
  // 🗂️ سجل الجلسات — تقويم شهري + تفاصيل اليوم
  // ---------------------------------------------------------------------

  let calState = null; // { year, month } — month صفري (0=يناير)
  const MONTH_NAMES = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const WEEKDAY_NAMES = ['أحد','اثنين','ثلاثاء','أربعاء','خميس','جمعة','سبت'];

  function openCalendar() {
    ensureData();
    injectShell();
    const now = new Date();
    calState = { year: now.getFullYear(), month: now.getMonth() };
    document.getElementById('vpTitle').textContent = '🗂️ سجل جلساتي';
    renderCalendar();
    openOverlay();
  }

  function renderCalendar() {
    const log = loadSessionLog();
    const state = loadJSON(LS_STATE_KEY);
    const year = calState.year, month = calState.month;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayKey = today();

    let html = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
      '<button class="vp-next-btn" style="padding:6px 12px;margin-top:0;" onclick="VerbPractice._calNav(-1)">◀</button>' +
      '<div style="font-weight:900;">' + MONTH_NAMES[month] + ' ' + toAr(year) + '</div>' +
      '<button class="vp-next-btn" style="padding:6px 12px;margin-top:0;" onclick="VerbPractice._calNav(1)">▶</button>' +
      '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:4px;">' +
      WEEKDAY_NAMES.map(function (d) { return '<div style="text-align:center;font-size:.62rem;color:var(--muted);font-weight:700;">' + d + '</div>'; }).join('') +
      '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;">';
    for (let i = 0; i < firstDay; i++) html += '<div></div>';
    for (let day = 1; day <= daysInMonth; day++) {
      const key = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
      const sessions = log[key] || [];
      const dueCount = reviewsDueOnDate(state, key).length;
      const isToday = key === todayKey;
      const clickable = sessions.length > 0 || dueCount > 0;
      html += '<div ' + (clickable ? 'onclick="VerbPractice._openDay(\'' + key + '\')"' : '') +
        ' style="min-height:42px;border:1px solid var(--border);border-radius:8px;padding:3px;display:flex;flex-direction:column;align-items:center;gap:2px;' +
        (isToday ? 'background:rgba(139,92,246,.18);' : '') + (clickable ? 'cursor:pointer;' : '') + '">' +
        '<div style="font-size:.7rem;font-weight:' + (isToday ? '900' : '700') + ';">' + toAr(day) + '</div>' +
        (sessions.length ? '<div style="background:var(--purple);color:#fff;border-radius:6px;padding:0 4px;font-size:.58rem;font-weight:800;">' + toAr(sessions.length) + '</div>' : '') +
        (dueCount ? '<div style="background:var(--gold);color:#000;border-radius:6px;padding:0 4px;font-size:.58rem;font-weight:800;">🔁' + toAr(dueCount) + '</div>' : '') +
        '</div>';
    }
    html += '</div>';
    html += '<div style="display:flex;gap:12px;justify-content:center;margin-top:10px;font-size:.62rem;color:var(--muted);">' +
      '<div><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:var(--purple);"></span> جلسات اتعملت</div>' +
      '<div><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:var(--gold);"></span> مراجعات مستحقة</div>' +
      '</div>';
    html += '<button class="vp-next-btn" style="margin-top:14px;width:100%;" onclick="VerbPractice._openSessionsBrowser()">📦 كل الجلسات</button>';
    html += '<button class="vp-next-btn" style="margin-top:8px;width:100%;" onclick="VerbPractice._backToMenu()">→ رجوع</button>';
    document.getElementById('vpBody').innerHTML = html;
  }

  // ---------------------------------------------------------------------
  // 📦 كل الجلسات — مش سجل تاريخي بالتواريخ زي "سجل جلساتي" فوق، ده كتالوج
  // *كل* الجلسات اللي السكربت هيعديها بالترتيب من أول واحدة لآخر واحدة، سواء
  // اتعملت ولا لسه: كل دفعة "تعلّم مختلط" (٥ أفعال منتظمة) وكل خلية "تعميق
  // فردي" (فعل شاذ × زمن) — في تابين منفصلين عشان منتظم وشاذ ميتلخبطوش.
  // كل جلسة بتوصف حالتها: لسه / مدروسة / اتراجعت: ن (ن = عدد مرات ظهورها في
  // المراجعة اليومية).
  // ---------------------------------------------------------------------

  let sessionsTab = 'regular';

  // نفس التقسيم اللي nextRegularVerbs بيوزّعه فعليًا: أول ٥ مش متعلّمة بترتيب
  // المنهج، وبعدين اللي بعدهم، وهكذا — فتقسيم الترتيب الكامل مجموعات كل ٥ بيدّينا
  // بالظبط تسلسل الجلسات الفعلي (اتعملت أو لسه).
  function regularBatches() {
    const list = curriculum.regular || [];
    const batches = [];
    for (let i = 0; i < list.length; i += 5) batches.push(list.slice(i, i + 5));
    return batches;
  }

  function patternKeysForVerb(verbName) {
    const meta = VERB_META[verbName];
    const keys = [];
    SB.THREE_TENSES.forEach(function (t) {
      if (PE.isIrregularCell(meta, t)) return;
      const k = PE.patternKey(meta, t);
      if (k) keys.push(k);
    });
    return keys;
  }

  function regularSessionStatus(state, batch) {
    const studied = batch.length > 0 && batch.every(function (v) { return state.introduced && state.introduced[v]; });
    const keySet = {};
    batch.forEach(function (v) { patternKeysForVerb(v).forEach(function (k) { keySet[k] = true; }); });
    let reviewCount = 0;
    Object.keys(keySet).forEach(function (k) { reviewCount += (state[k] && state[k].reviewCount) || 0; });
    return { studied: studied, reviewCount: reviewCount };
  }

  function irregularSessionStatus(state, cell) {
    const key = PE.cellKey(cell.verb, cell.tense);
    const entry = state[key];
    return { studied: !!entry, reviewCount: (entry && entry.reviewCount) || 0 };
  }

  function statusBadge(status) {
    if (!status.studied) {
      return '<span style="font-size:.62rem;color:var(--muted);">⏳ لسه</span>';
    }
    let html = '<span style="font-size:.64rem;color:var(--green);font-weight:800;">✅ مدروسة</span>';
    if (status.reviewCount > 0) {
      html += '<br><span style="font-size:.62rem;color:var(--gold);font-weight:700;">🔁 اتراجعت: ' + toAr(status.reviewCount) + '</span>';
    }
    return html;
  }

  function openSessionsBrowser() {
    ensureData();
    injectShell();
    sessionsTab = 'regular';
    document.getElementById('vpTitle').textContent = '📦 كل الجلسات';
    renderSessionsBrowser();
    openOverlay();
  }

  function switchSessionsTab(tab) {
    sessionsTab = tab;
    renderSessionsBrowser();
  }

  function renderSessionsBrowser() {
    const state = loadJSON(LS_STATE_KEY);
    let html = '<div style="display:flex;gap:6px;margin-bottom:12px;">' +
      '<button class="vp-next-btn" style="flex:1;margin-top:0;' + (sessionsTab === 'regular' ? '' : 'opacity:.45;') +
      '" onclick="VerbPractice._switchSessionsTab(\'regular\')">📗 منتظم</button>' +
      '<button class="vp-next-btn" style="flex:1;margin-top:0;' + (sessionsTab === 'irregular' ? '' : 'opacity:.45;') +
      '" onclick="VerbPractice._switchSessionsTab(\'irregular\')">📕 شاذ</button>' +
      '</div>';

    html += '<div style="display:flex;flex-direction:column;gap:8px;max-height:58vh;overflow-y:auto;">';
    if (sessionsTab === 'regular') {
      const batches = regularBatches();
      if (!batches.length) html += '<div style="text-align:center;color:var(--muted);padding:14px 0;">مفيش أفعال منتظمة في المنهج</div>';
      batches.forEach(function (batch, idx) {
        const status = regularSessionStatus(state, batch);
        html += '<div onclick="VerbPractice._openCurriculumSession(\'regular\',' + idx + ')" ' +
          'style="cursor:pointer;border:1px solid var(--border);border-radius:10px;padding:10px;background:#0e0e1a;display:flex;justify-content:space-between;align-items:center;gap:8px;">' +
          '<div><div style="font-weight:800;font-size:.76rem;">جلسة ' + toAr(idx + 1) + '</div>' +
          '<div style="font-size:.64rem;color:var(--muted);margin-top:2px;">' + batch.join('، ') + '</div></div>' +
          '<div style="text-align:left;white-space:nowrap;">' + statusBadge(status) + '</div>' +
          '</div>';
      });
    } else {
      const cells = curriculum.irregular || [];
      if (!cells.length) html += '<div style="text-align:center;color:var(--muted);padding:14px 0;">مفيش أفعال شاذة في المنهج</div>';
      cells.forEach(function (cell, idx) {
        const status = irregularSessionStatus(state, cell);
        html += '<div onclick="VerbPractice._openCurriculumSession(\'irregular\',' + idx + ')" ' +
          'style="cursor:pointer;border:1px solid var(--border);border-radius:10px;padding:10px;background:#0e0e1a;display:flex;justify-content:space-between;align-items:center;gap:8px;">' +
          '<div><div style="font-weight:800;font-size:.76rem;">' + cell.verb + '</div>' +
          '<div style="font-size:.64rem;color:var(--muted);margin-top:2px;">' + tenseLabel(cell.tense) + '</div></div>' +
          '<div style="text-align:left;white-space:nowrap;">' + statusBadge(status) + '</div>' +
          '</div>';
      });
    }
    html += '</div>';
    html += '<button class="vp-next-btn" style="margin-top:14px;width:100%;" onclick="VerbPractice._openCalendar()">→ رجوع</button>';
    document.getElementById('vpBody').innerHTML = html;
  }

  function openCurriculumSession(kind, idx) {
    const state = loadJSON(LS_STATE_KEY);
    let html;
    if (kind === 'regular') {
      const batch = regularBatches()[idx];
      if (!batch) { renderSessionsBrowser(); return; }
      const status = regularSessionStatus(state, batch);
      html = '<div style="font-weight:900;margin-bottom:2px;text-align:center;">📗 جلسة ' + toAr(idx + 1) + ' — تعلّم مختلط</div>' +
        '<div style="text-align:center;margin:6px 0 14px;">' + statusBadge(status) + '</div>' +
        '<div style="display:flex;flex-direction:column;gap:8px;">';
      batch.forEach(function (v) {
        const info = verbsByName[v];
        html += '<div style="border:1px solid var(--border);border-radius:10px;padding:10px;background:#0e0e1a;">' +
          '<div class="it" style="font-weight:800;">' + v + '</div>' +
          (info ? '<div style="font-size:.7rem;color:var(--muted);margin-top:2px;">' + info.ar + '</div>' : '') +
          '</div>';
      });
      html += '</div>';
    } else {
      const cell = (curriculum.irregular || [])[idx];
      if (!cell) { renderSessionsBrowser(); return; }
      const status = irregularSessionStatus(state, cell);
      const info = verbsByName[cell.verb];
      html = '<div style="font-weight:900;margin-bottom:2px;text-align:center;">📕 ' + cell.verb + ' — ' + tenseLabel(cell.tense) + '</div>' +
        '<div style="text-align:center;margin:6px 0 14px;">' + statusBadge(status) + '</div>' +
        '<div style="border:1px solid var(--border);border-radius:10px;padding:10px;background:#0e0e1a;text-align:center;">' +
        '<div class="it" style="font-weight:800;">' + cell.verb + '</div>' +
        (info ? '<div style="font-size:.7rem;color:var(--muted);margin-top:2px;">' + info.ar + '</div>' : '') +
        '</div>';
    }
    html += '<button class="vp-next-btn" style="width:100%;margin-top:14px;" onclick="VerbPractice._openSessionsBrowser()">→ رجوع لكل الجلسات</button>';
    document.getElementById('vpBody').innerHTML = html;
  }

  // ---------------------------------------------------------------------
  // تفاصيل جلسة واحدة *فعليًا اتعملت* في تاريخ معيّن — دي بتتفتح من داخل يوم
  // في "سجل جلساتي" (openDay تحت)، مختلفة عن كتالوج "كل الجلسات" فوق.
  // ---------------------------------------------------------------------

  function sessionDetailHtml(s, date) {
    let html = '<div style="font-weight:900;margin-bottom:2px;text-align:center;">' + kindLabel(s.kind) + '</div>' +
      '<div style="font-size:.68rem;color:var(--muted);text-align:center;margin-bottom:10px;">' + fmtDateFull(date) + '</div>' +
      '<div style="background:#0e0e1a;border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:10px;">' +
      '<div style="display:flex;gap:10px;font-size:.7rem;color:var(--muted);margin-bottom:8px;flex-wrap:wrap;">' +
      '<div>🕐 ' + fmtClock(s.startTime) + '</div>' +
      '<div>🏁 ' + fmtClock(s.endTime) + '</div>' +
      '<div>⏱️ ' + fmtDuration(s.durationMs) + '</div>' +
      '</div>' +
      '<div style="font-size:.82rem;font-weight:700;color:var(--gold);margin-bottom:8px;">' + toAr(s.correct) + '/' + toAr(s.total) + ' صح</div>';
    if (s.verbs && s.verbs.length) {
      html += '<div style="font-size:.7rem;color:var(--muted);margin-bottom:4px;">الأفعال: ' + s.verbs.join('، ') + '</div>';
    }
    if (s.nextReviewDate) {
      html += '<div style="font-size:.66rem;color:var(--muted);margin-top:4px;">⏰ المراجعة الجاية: ' + fmtDateFull(s.nextReviewDate) + '</div>';
    }
    if (s.mistakes && s.mistakes.length) {
      html += '<div style="font-size:.7rem;color:var(--red);margin-top:6px;font-weight:700;">❌ الأخطاء (' + toAr(s.mistakes.length) + ')</div>';
      s.mistakes.forEach(function (m) {
        html += '<div style="font-size:.66rem;color:var(--muted);margin-top:3px;line-height:1.6;">' +
          (m.verb || '') + (m.tense ? ' (' + tenseLabel(m.tense) + ')' : '') +
          ' — كتبت: <b style="color:var(--red)">' + (m.chosen || '—') + '</b> • الصح: <b style="color:var(--green)">' + (m.correct || '—') + '</b></div>';
      });
    } else {
      html += '<div style="font-size:.7rem;color:var(--green);margin-top:6px;">🎉 مفيش أخطاء</div>';
    }
    html += '</div>';
    return html;
  }

  function openLogEntry(date, id) {
    const log = loadSessionLog();
    const s = (log[date] || []).find(function (x) { return x.id === id; });
    let html;
    if (!s) {
      html = '<div style="text-align:center;color:var(--muted);">الجلسة دي مش موجودة (اتمسحت؟)</div>';
    } else {
      html = sessionDetailHtml(s, date);
    }
    html += '<button class="vp-next-btn" style="width:100%;" onclick="VerbPractice._openDay(\'' + date + '\')">→ رجوع لليوم ده</button>';
    document.getElementById('vpBody').innerHTML = html;
  }

  function calNav(dir) {
    calState.month += dir;
    if (calState.month < 0) { calState.month = 11; calState.year--; }
    if (calState.month > 11) { calState.month = 0; calState.year++; }
    renderCalendar();
  }

  function openDay(key) {
    const log = loadSessionLog();
    const state = loadJSON(LS_STATE_KEY);
    const sessions = log[key] || [];
    const due = reviewsDueOnDate(state, key);
    let html = '<div style="font-weight:900;margin-bottom:10px;text-align:center;">📅 ' + fmtDateFull(key) + '</div>';

    if (due.length) {
      html += '<div style="background:#0e0e1a;border:1px solid var(--gold);border-radius:12px;padding:12px;margin-bottom:10px;">' +
        '<div style="font-weight:800;color:var(--gold);margin-bottom:6px;">🔁 مراجعات مستحقة (' + toAr(due.length) + ')</div>' +
        due.map(function (d) { return '<div style="font-size:.72rem;color:var(--muted);margin-top:2px;">• ' + d + '</div>'; }).join('') +
        (key === today()
          ? '<button class="vp-next-btn" style="width:100%;margin-top:10px;" onclick="VerbPractice._close();VerbPractice._start(\'review\')">▶️ ابدأ المراجعة دلوقتي</button>'
          : '<div style="font-size:.66rem;color:var(--muted);margin-top:8px;">هتظهر في زرار "📅 مراجعة يومية" لما نوصل اليوم ده</div>') +
        '</div>';
    }

    if (!sessions.length && !due.length) {
      html += '<div style="text-align:center;color:var(--muted);">مفيش جلسات ولا مراجعات مسجّلة اليوم ده</div>';
    }
    if (sessions.length) {
      html += '<div style="font-weight:800;margin:10px 0 6px;">✅ الجلسات اللي اتعملت</div>';
    }
    sessions.forEach(function (s) {
      html += '<div onclick="VerbPractice._openLogEntry(\'' + key + '\',\'' + s.id + '\')" style="cursor:pointer;background:#0e0e1a;border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:10px;">' +
        '<div style="font-weight:800;margin-bottom:6px;">' + kindLabel(s.kind) + '</div>' +
        '<div style="display:flex;gap:10px;font-size:.7rem;color:var(--muted);margin-bottom:8px;flex-wrap:wrap;">' +
        '<div>🕐 ' + fmtClock(s.startTime) + '</div>' +
        '<div>🏁 ' + fmtClock(s.endTime) + '</div>' +
        '<div>⏱️ ' + fmtDuration(s.durationMs) + '</div>' +
        '</div>' +
        '<div style="font-size:.82rem;font-weight:700;color:var(--gold);">' + toAr(s.correct) + '/' + toAr(s.total) + ' صح — دوس لتفاصيل أكتر</div>' +
        '</div>';
    });
    html += '<button class="vp-next-btn" style="width:100%;" onclick="VerbPractice._openCalendar()">→ رجوع للتقويم</button>';
    document.getElementById('vpBody').innerHTML = html;
  }

  function backToMenu() { openMenu(); }

  // ---------------------------------------------------------------------
  window.VerbPractice = {
    open: openMenu,
    _start: start,
    _answerMC: answerMC,
    _answerText: answerText,
    _confirmCorrection: confirmCorrection,
    _next: next,
    _speakEl: speakEl,
    _close: closeOverlay,
    _openCalendar: openCalendar,
    _calNav: calNav,
    _openDay: openDay,
    _openSessionsBrowser: openSessionsBrowser,
    _switchSessionsTab: switchSessionsTab,
    _openCurriculumSession: openCurriculumSession,
    _openLogEntry: openLogEntry,
    _backToMenu: backToMenu,
  };

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', injectShell);
    } else {
      injectShell();
    }
  }
})();
