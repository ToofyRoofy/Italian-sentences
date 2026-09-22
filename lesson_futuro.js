// 📌 قبل ما تضيف كلمة جديدة هنا: لازم تتربط بقاعدة نحوية فعليًا (grammarId +
// formAliases/أمثلة تغطي شكل الكلمة + type + مثال) — مش بس تصنيف شكلي. الشرح
// الكامل والخطوات فوق GRAMMAR في grammar.js. من غيره الكلمة هتفتح بس بوب أب
// "مفيش شرح مخصوص" (fallback أمان، مش بديل عن الربط الصح).
const LESSON_FUTURO = [
  {
    "it": "Domani andrò al mercato con mia madre",
    "ar": "غدًا سأذهب إلى السوق مع أمي",
    "en": "Tomorrow I will go to the market with my mother",
    "pronoun": "Io (أنا)",
    "words": [
      {
        "it": "Domani",
        "ar": "بكرة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "andrò",
        "ar": "هروح",
        "note": "Andare، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Andare",
        "group": "are",
        "regular": false,
        "aux": "essere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "al mercato",
        "ar": "السوق",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "con mia madre",
        "ar": "مع أمي",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Andare",
      "tense": "Futuro Semplice",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Andrò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Andrai"
        },
        {
          "person": "Lui (هو)",
          "form": "Andrà"
        },
        {
          "person": "Lei (هي)",
          "form": "Andrà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Andremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Andrete"
        },
        {
          "person": "Loro (هم)",
          "form": "Andranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Domani andrò al mercato con mia madre»\nانقل «andrò» إلى الضمير «Loro (هم)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Andrai",
          "Andranno",
          "Vanno",
          "Andrò"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "andrò"
      },
      {
        "q": "في «Domani andrò al mercato con mia madre» حوّل «andrò» إلى المضارع (Presente) مع بقاء الضمير «Io (أنا)».",
        "options": [
          "Andavo",
          "Andrò",
          "Vado",
          "Va"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "andrò"
      },
      {
        "q": "في «Domani andrò al mercato con mia madre» الصيغة «andrò» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "المضارع (Presente) — Io (أنا)",
          "الماضي القريب (Passato Prossimo) — Lui (هو)",
          "المستقبل البسيط (Futuro Semplice) — Tu (أنت)",
          "المستقبل البسيط (Futuro Semplice) — Io (أنا)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "andrò"
      },
      {
        "q": "في «Domani andrò al mercato con mia madre» — ما جذر الفعل «Andare» في Futuro (الجذر اللي بتتضاف له النهايات ò / ai / à / emo / ete / anno)؟",
        "options": [
          "andr-",
          "ander-",
          "and-",
          "berr-"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "B1",
        "testedSkill": "جذر Futuro الشاذ",
        "tense": "futuro",
        "wordIt": "andrò"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Domani andrò al mercato con mia madre»؟",
        "options": [
          "غدًا سأعمل في البيت حتى السادسة",
          "غدًا سأذهب إلى السوق مع أمي",
          "الليلة لن نستطيع الخروج معكم",
          "سيشرح الأستاذ الدرس بعد الاستراحة"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "andrò"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «غدًا سأذهب إلى السوق مع أمي»؟",
        "options": [
          "Stasera non potremo uscire con voi",
          "Il professore spiegherà la lezione dopo la pausa",
          "Domani andrò al mercato con mia madre",
          "Domani lavorerò a casa fino alle sei"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "andrò"
      }
    ],
    "prepositionFocus": {
      "base": "su",
      "id": "su_rapporto",
      "title": "النسبة",
      "meaning": "من أصل",
      "description": "يعبّر عن نسبة جزء إلى مجموع.",
      "form": "su",
      "it": "Tre studenti su dieci hanno risposto",
      "ar": "ثلاثة طلاب من أصل عشرة أجابوا",
      "en": "Three students out of ten answered",
      "color": "#6d4c41",
      "grammarId": "prep_su"
    },
    "prepWords": [
      {
        "it": "Tre studenti",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "su",
        "ar": "من أصل",
        "note": "يعبّر عن نسبة جزء إلى مجموع.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "su",
        "prepUsageId": "su_rapporto",
        "prepUsageTitle": "النسبة",
        "meaning": "من أصل",
        "color": "#6d4c41",
        "grammarId": "prep_su",
        "quiz": []
      },
      {
        "it": "dieci hanno risposto",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Tre studenti su dieci hanno risposto",
      "ar": "ثلاثة طلاب من أصل عشرة أجابوا",
      "en": "Three students out of ten answered",
      "usageId": "su_rapporto",
      "grammarId": "prep_su",
      "color": "#6d4c41"
    },
    "writingIt": "Domani andrò al mercato con mia madre; Tre studenti su dieci hanno risposto",
    "writingAr": "غدًا سأذهب إلى السوق مع أمي؛ ثلاثة طلاب من أصل عشرة أجابوا",
    "writingEn": "Tomorrow I will go to the market with my mother; Three students out of ten answered"
  },
  {
    "it": "Domani lavorerò a casa fino alle sei",
    "ar": "غدًا سأعمل في البيت حتى السادسة",
    "en": "Tomorrow I will work at home until six",
    "pronoun": "Io (أنا)",
    "words": [
      {
        "it": "Domani",
        "ar": "بكرة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "lavorerò",
        "ar": "هشتغل",
        "note": "Lavorare، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Lavorare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "a casa",
        "ar": "في البيت",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "fino alle sei",
        "ar": "لحد الساعة ستة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Lavorare",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Lavorerò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Lavorerai"
        },
        {
          "person": "Lui (هو)",
          "form": "Lavorerà"
        },
        {
          "person": "Lei (هي)",
          "form": "Lavorerà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Lavoreremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Lavorerete"
        },
        {
          "person": "Loro (هم)",
          "form": "Lavoreranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Domani lavorerò a casa fino alle sei»\nانقل «lavorerò» إلى الضمير «Tu (أنت)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Lavorerò",
          "Lavorerai",
          "Lavori",
          "Lavorerà"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "lavorerò"
      },
      {
        "q": "في «Domani lavorerò a casa fino alle sei» حوّل «lavorerò» إلى المضارع (Presente) مع بقاء الضمير «Io (أنا)».",
        "options": [
          "Lavoravo",
          "Lavorerò",
          "Lavoro",
          "Lavoriamo"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "lavorerò"
      },
      {
        "q": "في «Domani lavorerò a casa fino alle sei» الصيغة «lavorerò» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Noi (نحن)",
          "المضارع (Presente) — Io (أنا)",
          "المستقبل البسيط (Futuro Semplice) — Lui (هو)",
          "المستقبل البسيط (Futuro Semplice) — Io (أنا)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "lavorerò"
      },
      {
        "q": "في «Domani lavorerò a casa fino alle sei» — اختار صيغة «Lavorare» الصحيحة مع «Io (أنا)» في Futuro:",
        "options": [
          "Lavorerò",
          "Lavorarò",
          "Lavorirò",
          "Lavorerai"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "A2",
        "testedSkill": "اختيار الصيغة الصحيحة للجذر",
        "tense": "futuro",
        "wordIt": "lavorerò"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Domani lavorerò a casa fino alle sei»؟",
        "options": [
          "في العام القادم سندرس في إيطاليا",
          "غدًا سأعمل في البيت حتى السادسة",
          "سيسافر أصدقائي بالقطار الصيف القادم",
          "سيشرح الأستاذ الدرس بعد الاستراحة"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "lavorerò"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «غدًا سأعمل في البيت حتى السادسة»؟",
        "options": [
          "I miei amici viaggeranno in treno l’estate prossima",
          "L’anno prossimo studieremo in Italia",
          "Domani lavorerò a casa fino alle sei",
          "Il professore spiegherà la lezione dopo la pausa"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "lavorerò"
      }
    ],
    "prepositionFocus": {
      "base": "su",
      "id": "su_base",
      "title": "الأساس أو الاعتماد",
      "meaning": "بناءً على",
      "description": "يبين الأساس الذي بُني عليه القرار.",
      "form": "sulla",
      "it": "Ho deciso sulla base dei dati",
      "ar": "قررت بناءً على البيانات",
      "en": "I decided based on the data",
      "color": "#e53935",
      "grammarId": "prep_su"
    },
    "prepWords": [
      {
        "it": "Ho deciso",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "sulla",
        "ar": "بناءً على",
        "note": "يبين الأساس الذي بُني عليه القرار.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "su",
        "prepUsageId": "su_base",
        "prepUsageTitle": "الأساس أو الاعتماد",
        "meaning": "بناءً على",
        "color": "#e53935",
        "grammarId": "prep_su",
        "quiz": []
      },
      {
        "it": "base dei dati",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Ho deciso sulla base dei dati",
      "ar": "قررت بناءً على البيانات",
      "en": "I decided based on the data",
      "usageId": "su_base",
      "grammarId": "prep_su",
      "color": "#e53935"
    },
    "writingIt": "Domani lavorerò a casa fino alle sei; Ho deciso sulla base dei dati",
    "writingAr": "غدًا سأعمل في البيت حتى السادسة؛ قررت بناءً على البيانات",
    "writingEn": "Tomorrow I will work at home until six; I decided based on the data"
  },
  {
    "it": "Stasera cercherò un buon ristorante",
    "ar": "الليلة سأبحث عن مطعم جيد",
    "en": "Tonight I will look for a good restaurant",
    "pronoun": "Io (أنا)",
    "words": [
      {
        "it": "Stasera",
        "ar": "الليلة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "cercherò",
        "ar": "هبحث عن",
        "note": "Cercare، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Cercare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "un buon ristorante",
        "ar": "مطعم كويس",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Cercare",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Cercherò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Cercherai"
        },
        {
          "person": "Lui (هو)",
          "form": "Cercherà"
        },
        {
          "person": "Lei (هي)",
          "form": "Cercherà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Cercheremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cercherete"
        },
        {
          "person": "Loro (هم)",
          "form": "Cercheranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Stasera cercherò un buon ristorante»\nانقل «cercherò» إلى الضمير «Noi (نحن)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Cercherete",
          "Cercheremo",
          "Cerchiamo",
          "Cercherò"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "cercherò"
      },
      {
        "q": "في «Stasera cercherò un buon ristorante» حوّل «cercherò» إلى المضارع (Presente) مع بقاء الضمير «Io (أنا)».",
        "options": [
          "Cercavo",
          "Cercherò",
          "Cerco",
          "Cercano"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "cercherò"
      },
      {
        "q": "في «Stasera cercherò un buon ristorante» الصيغة «cercherò» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "المضارع (Presente) — Io (أنا)",
          "الماضي القريب (Passato Prossimo) — Loro (هم)",
          "المستقبل البسيط (Futuro Semplice) — Voi (أنتم)",
          "المستقبل البسيط (Futuro Semplice) — Io (أنا)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "cercherò"
      },
      {
        "q": "في «Stasera cercherò un buon ristorante» — ليه «cercherò» اتكتبت بـ h؟",
        "options": [
          "علشان الـ c/g تفضل صلبة (k / g) قبل e — فبنضيف h",
          "علشان الفعل شاذ ولازم يتحفظ صيغة صيغة",
          "علشان النهاية بتبدأ بحرف علة فبنضيف h دايماً",
          "علشان بنحذف الـ e بتاعة النهاية"
        ],
        "correct": 0,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "القاعدة الإملائية في Futuro",
        "tense": "futuro",
        "wordIt": "cercherò"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Stasera cercherò un buon ristorante»؟",
        "options": [
          "ستستقل آنّا قطار الساعة الثامنة",
          "الليلة سأبحث عن مطعم جيد",
          "غدًا سأعمل في البيت حتى السادسة",
          "سيتعين عليكم إنهاء العمل قبل يوم الجمعة"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "cercherò"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «الليلة سأبحث عن مطعم جيد»؟",
        "options": [
          "Domani lavorerò a casa fino alle sei",
          "Voi dovrete finire il lavoro prima di venerdì",
          "Stasera cercherò un buon ristorante",
          "Anna prenderà il treno delle otto"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "cercherò"
      }
    ],
    "prepositionFocus": {
      "base": "per",
      "id": "per_scopo",
      "title": "الغرض والهدف",
      "meaning": "لكي / من أجل",
      "description": "يبين الهدف من الفعل.",
      "form": "per",
      "it": "Studio per imparare",
      "ar": "أذاكر لكي أتعلم",
      "en": "I study to learn",
      "color": "#1e88e5",
      "grammarId": "prep_per"
    },
    "prepWords": [
      {
        "it": "Studio",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "per",
        "ar": "لكي / من أجل",
        "note": "يبين الهدف من الفعل.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "per",
        "prepUsageId": "per_scopo",
        "prepUsageTitle": "الغرض والهدف",
        "meaning": "لكي / من أجل",
        "color": "#1e88e5",
        "grammarId": "prep_per",
        "quiz": []
      },
      {
        "it": "imparare",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Studio per imparare",
      "ar": "أذاكر لكي أتعلم",
      "en": "I study to learn",
      "usageId": "per_scopo",
      "grammarId": "prep_per",
      "color": "#1e88e5"
    },
    "writingIt": "Stasera cercherò un buon ristorante; Studio per imparare",
    "writingAr": "الليلة سأبحث عن مطعم جيد؛ أذاكر لكي أتعلم",
    "writingEn": "Tonight I will look for a good restaurant; I study to learn"
  },
  {
    "it": "Sabato sarai a casa o al lavoro?",
    "ar": "هل ستكون في البيت أم في العمل يوم السبت؟",
    "en": "Will you be at home or at work on Saturday?",
    "pronoun": "Tu (أنت)",
    "words": [
      {
        "it": "Sabato",
        "ar": "يوم السبت",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "sarai",
        "ar": "هتكون",
        "note": "Essere، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Essere",
        "group": "ere",
        "regular": false,
        "aux": "essere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "a casa",
        "ar": "في البيت",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "o",
        "ar": "أو",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "al lavoro?",
        "ar": "في الشغل",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Essere",
      "tense": "Futuro Semplice",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sarò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sarai"
        },
        {
          "person": "Lui (هو)",
          "form": "Sarà"
        },
        {
          "person": "Lei (هي)",
          "form": "Sarà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Saremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sarete"
        },
        {
          "person": "Loro (هم)",
          "form": "Saranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Sabato sarai a casa o al lavoro?»\nانقل «sarai» إلى الضمير «Io (أنا)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Sarai",
          "Sarò",
          "Sono",
          "Sarà"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "sarai"
      },
      {
        "q": "في «Sabato sarai a casa o al lavoro?» حوّل «sarai» إلى المضارع (Presente) مع بقاء الضمير «Tu (أنت)».",
        "options": [
          "Eri",
          "Sarai",
          "Sei",
          "Siamo"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "sarai"
      },
      {
        "q": "في «Sabato sarai a casa o al lavoro?» الصيغة «sarai» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Noi (نحن)",
          "المضارع (Presente) — Tu (أنت)",
          "المستقبل البسيط (Futuro Semplice) — Lui (هو)",
          "المستقبل البسيط (Futuro Semplice) — Tu (أنت)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "sarai"
      },
      {
        "q": "في «Sabato sarai a casa o al lavoro?» — ما جذر الفعل «Essere» في Futuro (الجذر اللي بتتضاف له النهايات ò / ai / à / emo / ete / anno)؟",
        "options": [
          "sar-",
          "esser-",
          "ess-",
          "dovr-"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "B1",
        "testedSkill": "جذر Futuro الشاذ",
        "tense": "futuro",
        "wordIt": "sarai"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Sabato sarai a casa o al lavoro?»؟",
        "options": [
          "في العام القادم سندرس في إيطاليا",
          "هل ستكون في البيت أم في العمل يوم السبت؟",
          "سيسافر أصدقائي بالقطار الصيف القادم",
          "سيشرح الأستاذ الدرس بعد الاستراحة"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "sarai"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «هل ستكون في البيت أم في العمل يوم السبت؟»؟",
        "options": [
          "I miei amici viaggeranno in treno l’estate prossima",
          "L’anno prossimo studieremo in Italia",
          "Sabato sarai a casa o al lavoro?",
          "Il professore spiegherà la lezione dopo la pausa"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "sarai"
      }
    ],
    "prepositionFocus": {
      "base": "per",
      "id": "per_destinatario",
      "title": "المتلقي أو المستفيد",
      "meaning": "لـ",
      "description": "يبين الشخص الذي خُصص له الشيء.",
      "form": "per",
      "it": "Questo regalo è per te",
      "ar": "هذه الهدية لك",
      "en": "This gift is for you",
      "color": "#8e24aa",
      "grammarId": "prep_per"
    },
    "prepWords": [
      {
        "it": "Questo regalo è",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "per",
        "ar": "لـ",
        "note": "يبين الشخص الذي خُصص له الشيء.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "per",
        "prepUsageId": "per_destinatario",
        "prepUsageTitle": "المتلقي أو المستفيد",
        "meaning": "لـ",
        "color": "#8e24aa",
        "grammarId": "prep_per",
        "quiz": []
      },
      {
        "it": "te",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Questo regalo è per te",
      "ar": "هذه الهدية لك",
      "en": "This gift is for you",
      "usageId": "per_destinatario",
      "grammarId": "prep_per",
      "color": "#8e24aa"
    },
    "writingIt": "Sabato sarai a casa o al lavoro?; Questo regalo è per te",
    "writingAr": "هل ستكون في البيت أم في العمل يوم السبت؟؛ هذه الهدية لك",
    "writingEn": "Will you be at home or at work on Saturday?; This gift is for you"
  },
  {
    "it": "Domani mangerai con noi?",
    "ar": "هل ستأكل معنا غدًا؟",
    "en": "Will you eat with us tomorrow?",
    "pronoun": "Tu (أنت)",
    "words": [
      {
        "it": "Domani",
        "ar": "بكرة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "mangerai",
        "ar": "هتأكل",
        "note": "Mangiare، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Mangiare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "con noi?",
        "ar": "معانا",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Mangiare",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mangerò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Mangerai"
        },
        {
          "person": "Lui (هو)",
          "form": "Mangerà"
        },
        {
          "person": "Lei (هي)",
          "form": "Mangerà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Mangeremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Mangerete"
        },
        {
          "person": "Loro (هم)",
          "form": "Mangeranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Domani mangerai con noi?»\nانقل «mangerai» إلى الضمير «Lui (هو)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Mangerai",
          "Mangerà",
          "Mangia",
          "Mangeremo"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "mangerai"
      },
      {
        "q": "في «Domani mangerai con noi?» حوّل «mangerai» إلى المضارع (Presente) مع بقاء الضمير «Tu (أنت)».",
        "options": [
          "Mangiavi",
          "Mangerai",
          "Mangi",
          "Mangiate"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "mangerai"
      },
      {
        "q": "في «Domani mangerai con noi?» الصيغة «mangerai» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Voi (أنتم)",
          "المضارع (Presente) — Tu (أنت)",
          "المستقبل البسيط (Futuro Semplice) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Tu (أنت)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "mangerai"
      },
      {
        "q": "في «Domani mangerai con noi?» — ليه «mangerai» اتكتبت من غير i؟",
        "options": [
          "علشان الـ g/c قبل e أصلاً ناعمة، فالـ i مش لازمة وبتتحذف",
          "علشان الفعل شاذ ولازم يتحفظ صيغة صيغة",
          "علشان بنضيف h قبل النهاية",
          "علشان الـ i بتتحول لـ e"
        ],
        "correct": 0,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "القاعدة الإملائية في Futuro",
        "tense": "futuro",
        "wordIt": "mangerai"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Domani mangerai con noi?»؟",
        "options": [
          "ستستقل آنّا قطار الساعة الثامنة",
          "هل ستأكل معنا غدًا؟",
          "هل ستكتبون رسالة إلى الجدة؟",
          "الليلة سأبحث عن مطعم جيد"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "mangerai"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «هل ستأكل معنا غدًا؟»؟",
        "options": [
          "Voi scriverete una lettera alla nonna?",
          "Anna prenderà il treno delle otto",
          "Domani mangerai con noi?",
          "Stasera cercherò un buon ristorante"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "mangerai"
      }
    ],
    "prepositionFocus": {
      "base": "per",
      "id": "per_durata",
      "title": "المدة",
      "meaning": "لمدة",
      "description": "يحدد طول مدة الحدث.",
      "form": "per",
      "it": "Ho lavorato per due ore",
      "ar": "عملت لمدة ساعتين",
      "en": "I worked for two hours",
      "color": "#00897b",
      "grammarId": "prep_per"
    },
    "prepWords": [
      {
        "it": "Ho lavorato",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "per",
        "ar": "لمدة",
        "note": "يحدد طول مدة الحدث.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "per",
        "prepUsageId": "per_durata",
        "prepUsageTitle": "المدة",
        "meaning": "لمدة",
        "color": "#00897b",
        "grammarId": "prep_per",
        "quiz": []
      },
      {
        "it": "due ore",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Ho lavorato per due ore",
      "ar": "عملت لمدة ساعتين",
      "en": "I worked for two hours",
      "usageId": "per_durata",
      "grammarId": "prep_per",
      "color": "#00897b"
    },
    "writingIt": "Domani mangerai con noi?; Ho lavorato per due ore",
    "writingAr": "هل ستأكل معنا غدًا؟؛ عملت لمدة ساعتين",
    "writingEn": "Will you eat with us tomorrow?; I worked for two hours"
  },
  {
    "it": "Dopo la lezione vorrai un caffè?",
    "ar": "هل ستريد قهوة بعد الدرس؟",
    "en": "Will you want a coffee after the lesson?",
    "pronoun": "Tu (أنت)",
    "words": [
      {
        "it": "Dopo la lezione",
        "ar": "بعد الدرس",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "vorrai",
        "ar": "هتبقى عايز / عايزة",
        "note": "Volere، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Volere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "un caffè?",
        "ar": "قهوة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Volere",
      "tense": "Futuro Semplice",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Vorrò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Vorrai"
        },
        {
          "person": "Lui (هو)",
          "form": "Vorrà"
        },
        {
          "person": "Lei (هي)",
          "form": "Vorrà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Vorremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vorrete"
        },
        {
          "person": "Loro (هم)",
          "form": "Vorranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Dopo la lezione vorrai un caffè?»\nانقل «vorrai» إلى الضمير «Lui (هو)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Vuole",
          "Vorrà",
          "Vorrai",
          "Vorremo"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "vorrai"
      },
      {
        "q": "في «Dopo la lezione vorrai un caffè?» حوّل «vorrai» إلى المضارع (Presente) مع بقاء الضمير «Tu (أنت)».",
        "options": [
          "Volete",
          "Vorrai",
          "Vuoi",
          "Volevi"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "vorrai"
      },
      {
        "q": "في «Dopo la lezione vorrai un caffè?» الصيغة «vorrai» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Voi (أنتم)",
          "المضارع (Presente) — Tu (أنت)",
          "المستقبل البسيط (Futuro Semplice) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Tu (أنت)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "vorrai"
      },
      {
        "q": "في «Dopo la lezione vorrai un caffè?» — ما جذر الفعل «Volere» في Futuro (الجذر اللي بتتضاف له النهايات ò / ai / à / emo / ete / anno)؟",
        "options": [
          "vorr-",
          "voler-",
          "vol-",
          "vedr-"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "B1",
        "testedSkill": "جذر Futuro الشاذ",
        "tense": "futuro",
        "wordIt": "vorrai"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Dopo la lezione vorrai un caffè?»؟",
        "options": [
          "غدًا سأذهب إلى السوق مع أمي",
          "هل ستريد قهوة بعد الدرس؟",
          "الليلة لن نستطيع الخروج معكم",
          "سيكون لدى أبي وقت كثير الأسبوع القادم"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "vorrai"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «هل ستريد قهوة بعد الدرس؟»؟",
        "options": [
          "Mio padre avrà molto tempo la prossima settimana",
          "Stasera non potremo uscire con voi",
          "Dopo la lezione vorrai un caffè?",
          "Domani andrò al mercato con mia madre"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "vorrai"
      }
    ],
    "prepositionFocus": {
      "base": "per",
      "id": "per_percorso",
      "title": "المرور أو الطريق",
      "meaning": "عبر / عن طريق",
      "description": "يبين المكان الذي نمر به.",
      "form": "per",
      "it": "Passo per Roma",
      "ar": "أمر عبر روما",
      "en": "I pass through Rome",
      "color": "#fb8c00",
      "grammarId": "prep_per"
    },
    "prepWords": [
      {
        "it": "Passo",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "per",
        "ar": "عبر / عن طريق",
        "note": "يبين المكان الذي نمر به.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "per",
        "prepUsageId": "per_percorso",
        "prepUsageTitle": "المرور أو الطريق",
        "meaning": "عبر / عن طريق",
        "color": "#fb8c00",
        "grammarId": "prep_per",
        "quiz": []
      },
      {
        "it": "Roma",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Passo per Roma",
      "ar": "أمر عبر روما",
      "en": "I pass through Rome",
      "usageId": "per_percorso",
      "grammarId": "prep_per",
      "color": "#fb8c00"
    },
    "writingIt": "Dopo la lezione vorrai un caffè?; Passo per Roma",
    "writingAr": "هل ستريد قهوة بعد الدرس؟؛ أمر عبر روما",
    "writingEn": "Will you want a coffee after the lesson?; I pass through Rome"
  },
  {
    "it": "Domani Marco partirà per Milano",
    "ar": "غدًا سيسافر ماركو إلى ميلانو",
    "en": "Tomorrow Marco will leave for Milan",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Domani",
        "ar": "بكرة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "Marco",
        "ar": "ماركو",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "partirà",
        "ar": "هيسافر",
        "note": "Partire، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Partire",
        "group": "ire",
        "regular": true,
        "aux": "essere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "per Milano",
        "ar": "لميلانو",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Partire",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Partirò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Partirai"
        },
        {
          "person": "Lui (هو)",
          "form": "Partirà"
        },
        {
          "person": "Lei (هي)",
          "form": "Partirà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Partiremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Partirete"
        },
        {
          "person": "Loro (هم)",
          "form": "Partiranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Domani Marco partirà per Milano»\nانقل «partirà» إلى الضمير «Voi (أنتم)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Partiranno",
          "Partirete",
          "Partite",
          "Partirà"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "partirà"
      },
      {
        "q": "في «Domani Marco partirà per Milano» حوّل «partirà» إلى المضارع (Presente) مع بقاء الضمير «Lui (هو)».",
        "options": [
          "Partiva",
          "Partirà",
          "Parte",
          "Parto"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "partirà"
      },
      {
        "q": "في «Domani Marco partirà per Milano» الصيغة «partirà» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "المضارع (Presente) — Lui (هو)",
          "الماضي القريب (Passato Prossimo) — Io (أنا)",
          "المستقبل البسيط (Futuro Semplice) — Loro (هم)",
          "المستقبل البسيط (Futuro Semplice) — Lui (هو)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "partirà"
      },
      {
        "q": "في «Domani Marco partirà per Milano» — اختار صيغة «Partire» الصحيحة مع «Lui (هو)» في Futuro:",
        "options": [
          "Partirà",
          "Parterà",
          "Partarà",
          "Partirò"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "A2",
        "testedSkill": "اختيار الصيغة الصحيحة للجذر",
        "tense": "futuro",
        "wordIt": "partirà"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Domani Marco partirà per Milano»؟",
        "options": [
          "هل ستأكل معنا غدًا؟",
          "غدًا سيسافر ماركو إلى ميلانو",
          "غدًا سيعطي الأولاد هدية لسارة",
          "ستستيقظ جوليا مبكرًا صباح الغد"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "partirà"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «غدًا سيسافر ماركو إلى ميلانو»؟",
        "options": [
          "Domani i ragazzi daranno un regalo a Sara",
          "Domani mattina Giulia si sveglierà presto",
          "Domani Marco partirà per Milano",
          "Domani mangerai con noi?"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "partirà"
      }
    ],
    "prepositionFocus": {
      "base": "per",
      "id": "per_causa",
      "title": "السبب",
      "meaning": "بسبب / من",
      "description": "يبين سبب شعور أو حدث.",
      "form": "per",
      "it": "Tremo per la paura",
      "ar": "أرتجف من الخوف",
      "en": "I tremble with fear",
      "color": "#43a047",
      "grammarId": "prep_per"
    },
    "prepWords": [
      {
        "it": "Tremo",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "per",
        "ar": "بسبب / من",
        "note": "يبين سبب شعور أو حدث.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "per",
        "prepUsageId": "per_causa",
        "prepUsageTitle": "السبب",
        "meaning": "بسبب / من",
        "color": "#43a047",
        "grammarId": "prep_per",
        "quiz": []
      },
      {
        "it": "la paura",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Tremo per la paura",
      "ar": "أرتجف من الخوف",
      "en": "I tremble with fear",
      "usageId": "per_causa",
      "grammarId": "prep_per",
      "color": "#43a047"
    },
    "writingIt": "Domani Marco partirà per Milano; Tremo per la paura",
    "writingAr": "غدًا سيسافر ماركو إلى ميلانو؛ أرتجف من الخوف",
    "writingEn": "Tomorrow Marco will leave for Milan; I tremble with fear"
  },
  {
    "it": "Il professore spiegherà la lezione dopo la pausa",
    "ar": "سيشرح الأستاذ الدرس بعد الاستراحة",
    "en": "The teacher will explain the lesson after the break",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Il professore",
        "ar": "الأستاذ",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "spiegherà",
        "ar": "هيشرح",
        "note": "Spiegare، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Spiegare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "la lezione",
        "ar": "الدرس",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "dopo la pausa",
        "ar": "بعد الاستراحة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Spiegare",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Spiegherò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Spiegherai"
        },
        {
          "person": "Lui (هو)",
          "form": "Spiegherà"
        },
        {
          "person": "Lei (هي)",
          "form": "Spiegherà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Spiegheremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Spiegherete"
        },
        {
          "person": "Loro (هم)",
          "form": "Spiegheranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Il professore spiegherà la lezione dopo la pausa»\nانقل «spiegherà» إلى الضمير «Io (أنا)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Spiegherà",
          "Spiegherò",
          "Spiego",
          "Spiegherai"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "spiegherà"
      },
      {
        "q": "في «Il professore spiegherà la lezione dopo la pausa» حوّل «spiegherà» إلى المضارع (Presente) مع بقاء الضمير «Lui (هو)».",
        "options": [
          "Spiegherà",
          "Spiegava",
          "Spiega",
          "Spieghiamo"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "spiegherà"
      },
      {
        "q": "في «Il professore spiegherà la lezione dopo la pausa» الصيغة «spiegherà» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "المستقبل البسيط (Futuro Semplice) — Tu (أنت)",
          "المضارع (Presente) — Lui (هو)",
          "الماضي القريب (Passato Prossimo) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Lui (هو)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "spiegherà"
      },
      {
        "q": "في «Il professore spiegherà la lezione dopo la pausa» — ليه «spiegherà» اتكتبت بـ h؟",
        "options": [
          "علشان الـ c/g تفضل صلبة (k / g) قبل e — فبنضيف h",
          "علشان الفعل شاذ ولازم يتحفظ صيغة صيغة",
          "علشان النهاية بتبدأ بحرف علة فبنضيف h دايماً",
          "علشان بنحذف الـ e بتاعة النهاية"
        ],
        "correct": 0,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "القاعدة الإملائية في Futuro",
        "tense": "futuro",
        "wordIt": "spiegherà"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Il professore spiegherà la lezione dopo la pausa»؟",
        "options": [
          "سيكون لدى أبي وقت كثير الأسبوع القادم",
          "سيشرح الأستاذ الدرس بعد الاستراحة",
          "سيتعين عليكم إنهاء العمل قبل يوم الجمعة",
          "غدًا سأعمل في البيت حتى السادسة"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "spiegherà"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «سيشرح الأستاذ الدرس بعد الاستراحة»؟",
        "options": [
          "Mio padre avrà molto tempo la prossima settimana",
          "Voi dovrete finire il lavoro prima di venerdì",
          "Il professore spiegherà la lezione dopo la pausa",
          "Domani lavorerò a casa fino alle sei"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "spiegherà"
      }
    ],
    "prepositionFocus": {
      "base": "per",
      "id": "per_mezzo",
      "title": "الوسيلة أو القناة",
      "meaning": "عن طريق",
      "description": "يبين وسيلة الإرسال أو الاتصال.",
      "form": "per",
      "it": "Ti mando il file per e-mail",
      "ar": "أرسل لك الملف عبر البريد الإلكتروني",
      "en": "I send you the file by email",
      "color": "#d81b60",
      "grammarId": "prep_per"
    },
    "prepWords": [
      {
        "it": "Ti mando il file",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "per",
        "ar": "عن طريق",
        "note": "يبين وسيلة الإرسال أو الاتصال.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "per",
        "prepUsageId": "per_mezzo",
        "prepUsageTitle": "الوسيلة أو القناة",
        "meaning": "عن طريق",
        "color": "#d81b60",
        "grammarId": "prep_per",
        "quiz": []
      },
      {
        "it": "e-mail",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Ti mando il file per e-mail",
      "ar": "أرسل لك الملف عبر البريد الإلكتروني",
      "en": "I send you the file by email",
      "usageId": "per_mezzo",
      "grammarId": "prep_per",
      "color": "#d81b60"
    },
    "writingIt": "Il professore spiegherà la lezione dopo la pausa; Ti mando il file per e-mail",
    "writingAr": "سيشرح الأستاذ الدرس بعد الاستراحة؛ أرسل لك الملف عبر البريد الإلكتروني",
    "writingEn": "The teacher will explain the lesson after the break; I send you the file by email"
  },
  {
    "it": "Mio padre avrà molto tempo la prossima settimana",
    "ar": "سيكون لدى أبي وقت كثير الأسبوع القادم",
    "en": "My father will have a lot of time next week",
    "pronoun": "Lui (هو)",
    "words": [
      {
        "it": "Mio padre",
        "ar": "أبويا",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "avrà",
        "ar": "هيبقى عنده",
        "note": "Avere، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Avere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "molto tempo",
        "ar": "وقت كتير",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "la prossima settimana",
        "ar": "الأسبوع الجاي",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Avere",
      "tense": "Futuro Semplice",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Avrò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Avrai"
        },
        {
          "person": "Lui (هو)",
          "form": "Avrà"
        },
        {
          "person": "Lei (هي)",
          "form": "Avrà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Avremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avrete"
        },
        {
          "person": "Loro (هم)",
          "form": "Avranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Mio padre avrà molto tempo la prossima settimana»\nانقل «avrà» إلى الضمير «Noi (نحن)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Avrete",
          "Avremo",
          "Abbiamo",
          "Avrà"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "avrà"
      },
      {
        "q": "في «Mio padre avrà molto tempo la prossima settimana» حوّل «avrà» إلى المضارع (Presente) مع بقاء الضمير «Lui (هو)».",
        "options": [
          "Aveva",
          "Avrà",
          "Ha",
          "Hanno"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "avrà"
      },
      {
        "q": "في «Mio padre avrà molto tempo la prossima settimana» الصيغة «avrà» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "المضارع (Presente) — Lui (هو)",
          "الماضي القريب (Passato Prossimo) — Loro (هم)",
          "المستقبل البسيط (Futuro Semplice) — Voi (أنتم)",
          "المستقبل البسيط (Futuro Semplice) — Lui (هو)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "avrà"
      },
      {
        "q": "في «Mio padre avrà molto tempo la prossima settimana» — ما جذر الفعل «Avere» في Futuro (الجذر اللي بتتضاف له النهايات ò / ai / à / emo / ete / anno)؟",
        "options": [
          "avr-",
          "aver-",
          "av-",
          "dar-"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "B1",
        "testedSkill": "جذر Futuro الشاذ",
        "tense": "futuro",
        "wordIt": "avrà"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Mio padre avrà molto tempo la prossima settimana»؟",
        "options": [
          "ستستقل آنّا قطار الساعة الثامنة",
          "سيكون لدى أبي وقت كثير الأسبوع القادم",
          "غدًا سأعمل في البيت حتى السادسة",
          "سيتعين عليكم إنهاء العمل قبل يوم الجمعة"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "avrà"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «سيكون لدى أبي وقت كثير الأسبوع القادم»؟",
        "options": [
          "Domani lavorerò a casa fino alle sei",
          "Voi dovrete finire il lavoro prima di venerdì",
          "Mio padre avrà molto tempo la prossima settimana",
          "Anna prenderà il treno delle otto"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "avrà"
      }
    ],
    "prepositionFocus": {
      "base": "tra_fra",
      "id": "tra_spazio",
      "title": "بين أو وسط",
      "meaning": "بين",
      "description": "للمكان أو الوجود ضمن مجموعة.",
      "form": "tra",
      "it": "Sono tra amici",
      "ar": "أنا بين أصدقاء",
      "en": "I am among friends",
      "color": "#5e35b1",
      "grammarId": "prep_tra_fra"
    },
    "prepWords": [
      {
        "it": "Sono",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "tra",
        "ar": "بين",
        "note": "للمكان أو الوجود ضمن مجموعة.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "tra_fra",
        "prepUsageId": "tra_spazio",
        "prepUsageTitle": "بين أو وسط",
        "meaning": "بين",
        "color": "#5e35b1",
        "grammarId": "prep_tra_fra",
        "quiz": []
      },
      {
        "it": "amici",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Sono tra amici",
      "ar": "أنا بين أصدقاء",
      "en": "I am among friends",
      "usageId": "tra_spazio",
      "grammarId": "prep_tra_fra",
      "color": "#5e35b1"
    },
    "writingIt": "Mio padre avrà molto tempo la prossima settimana; Sono tra amici",
    "writingAr": "سيكون لدى أبي وقت كثير الأسبوع القادم؛ أنا بين أصدقاء",
    "writingEn": "My father will have a lot of time next week; I am among friends"
  },
  {
    "it": "Anna prenderà il treno delle otto",
    "ar": "ستستقل آنّا قطار الساعة الثامنة",
    "en": "Anna will take the eight o’clock train",
    "pronoun": "Lei (هي)",
    "words": [
      {
        "it": "Anna",
        "ar": "آنّا",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "prenderà",
        "ar": "هتأخذ",
        "note": "Prendere، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Prendere",
        "group": "ere",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "il treno delle otto",
        "ar": "قطر الساعة تمانية",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Prendere",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Prenderò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Prenderai"
        },
        {
          "person": "Lui (هو)",
          "form": "Prenderà"
        },
        {
          "person": "Lei (هي)",
          "form": "Prenderà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Prenderemo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Prenderete"
        },
        {
          "person": "Loro (هم)",
          "form": "Prenderanno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Anna prenderà il treno delle otto»\nانقل «prenderà» إلى الضمير «Io (أنا)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Prenderai",
          "Prenderò",
          "Prendo",
          "Prenderà"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "prenderà"
      },
      {
        "q": "في «Anna prenderà il treno delle otto» حوّل «prenderà» إلى المضارع (Presente) مع بقاء الضمير «Lei (هي)».",
        "options": [
          "Prendeva",
          "Prenderà",
          "Prende",
          "Prendiamo"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "prenderà"
      },
      {
        "q": "في «Anna prenderà il treno delle otto» الصيغة «prenderà» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "المضارع (Presente) — Lei (هي)",
          "الماضي القريب (Passato Prossimo) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Tu (أنت)",
          "المستقبل البسيط (Futuro Semplice) — Lei (هي)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "prenderà"
      },
      {
        "q": "في «Anna prenderà il treno delle otto» — اختار صيغة «Prendere» الصحيحة مع «Lei (هي)» في Futuro:",
        "options": [
          "Prenderà",
          "Prendrà",
          "Prendirà",
          "Prenderò"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "A2",
        "testedSkill": "اختيار الصيغة الصحيحة للجذر",
        "tense": "futuro",
        "wordIt": "prenderà"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Anna prenderà il treno delle otto»؟",
        "options": [
          "غدًا ستنامون حتى وقت متأخر",
          "ستستقل آنّا قطار الساعة الثامنة",
          "سترى سارة أصدقاءها يوم الأحد",
          "الليلة سأبحث عن مطعم جيد"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "prenderà"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «ستستقل آنّا قطار الساعة الثامنة»؟",
        "options": [
          "Sara vedrà i suoi amici domenica",
          "Stasera cercherò un buon ristorante",
          "Anna prenderà il treno delle otto",
          "Domani voi dormirete fino a tardi"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "prenderà"
      }
    ],
    "prepositionFocus": {
      "base": "tra_fra",
      "id": "fra_tempo",
      "title": "وقت في المستقبل",
      "meaning": "بعد",
      "description": "يبين المدة الباقية قبل حدث مستقبلي.",
      "form": "fra",
      "it": "Parto fra due giorni",
      "ar": "أسافر بعد يومين",
      "en": "I leave in two days",
      "color": "#00acc1",
      "grammarId": "prep_tra_fra"
    },
    "prepWords": [
      {
        "it": "Parto",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "fra",
        "ar": "بعد",
        "note": "يبين المدة الباقية قبل حدث مستقبلي.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "tra_fra",
        "prepUsageId": "fra_tempo",
        "prepUsageTitle": "وقت في المستقبل",
        "meaning": "بعد",
        "color": "#00acc1",
        "grammarId": "prep_tra_fra",
        "quiz": []
      },
      {
        "it": "due giorni",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Parto fra due giorni",
      "ar": "أسافر بعد يومين",
      "en": "I leave in two days",
      "usageId": "fra_tempo",
      "grammarId": "prep_tra_fra",
      "color": "#00acc1"
    },
    "writingIt": "Anna prenderà il treno delle otto; Parto fra due giorni",
    "writingAr": "ستستقل آنّا قطار الساعة الثامنة؛ أسافر بعد يومين",
    "writingEn": "Anna will take the eight o’clock train; I leave in two days"
  },
  {
    "it": "Sara vedrà i suoi amici domenica",
    "ar": "سترى سارة أصدقاءها يوم الأحد",
    "en": "Sara will see her friends on Sunday",
    "pronoun": "Lei (هي)",
    "words": [
      {
        "it": "Sara",
        "ar": "سارة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "vedrà",
        "ar": "هتشوف",
        "note": "Vedere، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Vedere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "i suoi amici",
        "ar": "صحابها",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "domenica",
        "ar": "يوم الأحد",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Vedere",
      "tense": "Futuro Semplice",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Vedrò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Vedrai"
        },
        {
          "person": "Lui (هو)",
          "form": "Vedrà"
        },
        {
          "person": "Lei (هي)",
          "form": "Vedrà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Vedremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vedrete"
        },
        {
          "person": "Loro (هم)",
          "form": "Vedranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Sara vedrà i suoi amici domenica»\nانقل «vedrà» إلى الضمير «Voi (أنتم)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Vedrà",
          "Vedrete",
          "Vedete",
          "Vedranno"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "vedrà"
      },
      {
        "q": "في «Sara vedrà i suoi amici domenica» حوّل «vedrà» إلى المضارع (Presente) مع بقاء الضمير «Lei (هي)».",
        "options": [
          "Vedrà",
          "Vedeva",
          "Vede",
          "Vedo"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "vedrà"
      },
      {
        "q": "في «Sara vedrà i suoi amici domenica» الصيغة «vedrà» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "المستقبل البسيط (Futuro Semplice) — Loro (هم)",
          "المضارع (Presente) — Lei (هي)",
          "الماضي القريب (Passato Prossimo) — Io (أنا)",
          "المستقبل البسيط (Futuro Semplice) — Lei (هي)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "vedrà"
      },
      {
        "q": "في «Sara vedrà i suoi amici domenica» — ما جذر الفعل «Vedere» في Futuro (الجذر اللي بتتضاف له النهايات ò / ai / à / emo / ete / anno)؟",
        "options": [
          "vedr-",
          "veder-",
          "ved-",
          "star-"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "B1",
        "testedSkill": "جذر Futuro الشاذ",
        "tense": "futuro",
        "wordIt": "vedrà"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Sara vedrà i suoi amici domenica»؟",
        "options": [
          "هل ستكتبون رسالة إلى الجدة؟",
          "سترى سارة أصدقاءها يوم الأحد",
          "الليلة سأبحث عن مطعم جيد",
          "ستستقل آنّا قطار الساعة الثامنة"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "vedrà"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «سترى سارة أصدقاءها يوم الأحد»؟",
        "options": [
          "Voi scriverete una lettera alla nonna?",
          "Stasera cercherò un buon ristorante",
          "Sara vedrà i suoi amici domenica",
          "Anna prenderà il treno delle otto"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "vedrà"
      }
    ],
    "prepositionFocus": {
      "base": "tra_fra",
      "id": "tra_relazione",
      "title": "العلاقة",
      "meaning": "بين",
      "description": "يبين علاقة متبادلة.",
      "form": "tra",
      "it": "C’è fiducia tra noi",
      "ar": "هناك ثقة بيننا",
      "en": "There is trust between us",
      "color": "#6d4c41",
      "grammarId": "prep_tra_fra"
    },
    "prepWords": [
      {
        "it": "C’è fiducia",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "tra",
        "ar": "بين",
        "note": "يبين علاقة متبادلة.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "tra_fra",
        "prepUsageId": "tra_relazione",
        "prepUsageTitle": "العلاقة",
        "meaning": "بين",
        "color": "#6d4c41",
        "grammarId": "prep_tra_fra",
        "quiz": []
      },
      {
        "it": "noi",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "C’è fiducia tra noi",
      "ar": "هناك ثقة بيننا",
      "en": "There is trust between us",
      "usageId": "tra_relazione",
      "grammarId": "prep_tra_fra",
      "color": "#6d4c41"
    },
    "writingIt": "Sara vedrà i suoi amici domenica; C’è fiducia tra noi",
    "writingAr": "سترى سارة أصدقاءها يوم الأحد؛ هناك ثقة بيننا",
    "writingEn": "Sara will see her friends on Sunday; There is trust between us"
  },
  {
    "it": "Domani mattina Giulia si sveglierà presto",
    "ar": "ستستيقظ جوليا مبكرًا صباح الغد",
    "en": "Tomorrow morning Giulia will wake up early",
    "pronoun": "Lei (هي)",
    "words": [
      {
        "it": "Domani mattina",
        "ar": "بكرة الصبح",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "Giulia",
        "ar": "جوليا",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "si sveglierà",
        "ar": "هتصحى",
        "note": "Svegliarsi، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Svegliarsi",
        "group": "are",
        "regular": true,
        "aux": "essere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "presto",
        "ar": "بدري",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Svegliarsi",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sveglierò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sveglierai"
        },
        {
          "person": "Lui (هو)",
          "form": "Si sveglierà"
        },
        {
          "person": "Lei (هي)",
          "form": "Si sveglierà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci sveglieremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi sveglierete"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sveglieranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Domani mattina Giulia si sveglierà presto»\nانقل «si sveglierà» إلى الضمير «Tu (أنت)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Ci sveglieremo",
          "Ti sveglierai",
          "Ti svegli",
          "Si sveglierà"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "si sveglierà"
      },
      {
        "q": "في «Domani mattina Giulia si sveglierà presto» حوّل «si sveglierà» إلى المضارع (Presente) مع بقاء الضمير «Lei (هي)».",
        "options": [
          "Si svegliava",
          "Si sveglierà",
          "Si sveglia",
          "Vi svegliate"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "si sveglierà"
      },
      {
        "q": "في «Domani mattina Giulia si sveglierà presto» الصيغة «si sveglierà» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "المضارع (Presente) — Lei (هي)",
          "الماضي القريب (Passato Prossimo) — Voi (أنتم)",
          "المستقبل البسيط (Futuro Semplice) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Lei (هي)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "si sveglierà"
      },
      {
        "q": "في «Domani mattina Giulia si sveglierà presto» — اختار صيغة «Svegliarsi» الصحيحة مع «Lei (هي)» في Futuro:",
        "options": [
          "Si sveglierà",
          "Si sveglerà",
          "Si svegliarà",
          "Mi sveglierò"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "A2",
        "testedSkill": "اختيار الصيغة الصحيحة للجذر",
        "tense": "futuro",
        "wordIt": "si sveglierà"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Domani mattina Giulia si sveglierà presto»؟",
        "options": [
          "في العام القادم سندرس في إيطاليا",
          "ستستيقظ جوليا مبكرًا صباح الغد",
          "هل ستريد قهوة بعد الدرس؟",
          "سيفهم الطلاب القاعدة بعد التمرين"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "si sveglierà"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «ستستيقظ جوليا مبكرًا صباح الغد»؟",
        "options": [
          "Dopo la lezione vorrai un caffè?",
          "Gli studenti capiranno la regola dopo l’esercizio",
          "Domani mattina Giulia si sveglierà presto",
          "L’anno prossimo studieremo in Italia"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "si sveglierà"
      }
    ],
    "prepositionFocus": {
      "base": "tra_fra",
      "id": "tra_scelta",
      "title": "الاختيار",
      "meaning": "بين",
      "description": "يستخدم عند الاختيار من بدائل.",
      "form": "tra",
      "it": "Scegli tra questo e quello",
      "ar": "اختر بين هذا وذاك",
      "en": "Choose between this and that",
      "color": "#e53935",
      "grammarId": "prep_tra_fra"
    },
    "prepWords": [
      {
        "it": "Scegli",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "tra",
        "ar": "بين",
        "note": "يستخدم عند الاختيار من بدائل.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "tra_fra",
        "prepUsageId": "tra_scelta",
        "prepUsageTitle": "الاختيار",
        "meaning": "بين",
        "color": "#e53935",
        "grammarId": "prep_tra_fra",
        "quiz": []
      },
      {
        "it": "questo e quello",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Scegli tra questo e quello",
      "ar": "اختر بين هذا وذاك",
      "en": "Choose between this and that",
      "usageId": "tra_scelta",
      "grammarId": "prep_tra_fra",
      "color": "#e53935"
    },
    "writingIt": "Domani mattina Giulia si sveglierà presto; Scegli tra questo e quello",
    "writingAr": "ستستيقظ جوليا مبكرًا صباح الغد؛ اختر بين هذا وذاك",
    "writingEn": "Tomorrow morning Giulia will wake up early; Choose between this and that"
  },
  {
    "it": "Domani noi pagheremo il conto insieme",
    "ar": "غدًا سندفع الحساب معًا",
    "en": "Tomorrow we will pay the bill together",
    "pronoun": "Noi (نحن)",
    "words": [
      {
        "it": "Domani",
        "ar": "بكرة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "noi",
        "ar": "إحنا",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "pagheremo",
        "ar": "هندفع",
        "note": "Pagare، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Pagare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "il conto",
        "ar": "الحساب",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "insieme",
        "ar": "سوا",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Pagare",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Pagherò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Pagherai"
        },
        {
          "person": "Lui (هو)",
          "form": "Pagherà"
        },
        {
          "person": "Lei (هي)",
          "form": "Pagherà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Pagheremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pagherete"
        },
        {
          "person": "Loro (هم)",
          "form": "Pagheranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Domani noi pagheremo il conto insieme»\nانقل «pagheremo» إلى الضمير «Loro (هم)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Pagheremo",
          "Pagheranno",
          "Pagano",
          "Pagherò"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "pagheremo"
      },
      {
        "q": "في «Domani noi pagheremo il conto insieme» حوّل «pagheremo» إلى المضارع (Presente) مع بقاء الضمير «Noi (نحن)».",
        "options": [
          "Pagheremo",
          "Pagavamo",
          "Paghiamo",
          "Paghi"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "pagheremo"
      },
      {
        "q": "في «Domani noi pagheremo il conto insieme» الصيغة «pagheremo» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "المستقبل البسيط (Futuro Semplice) — Io (أنا)",
          "المضارع (Presente) — Noi (نحن)",
          "الماضي القريب (Passato Prossimo) — Tu (أنت)",
          "المستقبل البسيط (Futuro Semplice) — Noi (نحن)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "pagheremo"
      },
      {
        "q": "في «Domani noi pagheremo il conto insieme» — ليه «pagheremo» اتكتبت بـ h؟",
        "options": [
          "علشان الـ c/g تفضل صلبة (k / g) قبل e — فبنضيف h",
          "علشان الفعل شاذ ولازم يتحفظ صيغة صيغة",
          "علشان النهاية بتبدأ بحرف علة فبنضيف h دايماً",
          "علشان بنحذف الـ e بتاعة النهاية"
        ],
        "correct": 0,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "القاعدة الإملائية في Futuro",
        "tense": "futuro",
        "wordIt": "pagheremo"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Domani noi pagheremo il conto insieme»؟",
        "options": [
          "ستستيقظ جوليا مبكرًا صباح الغد",
          "غدًا سندفع الحساب معًا",
          "سيفهم الطلاب القاعدة بعد التمرين",
          "هل ستريد قهوة بعد الدرس؟"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "pagheremo"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «غدًا سندفع الحساب معًا»؟",
        "options": [
          "Domani mattina Giulia si sveglierà presto",
          "Gli studenti capiranno la regola dopo l’esercizio",
          "Domani noi pagheremo il conto insieme",
          "Dopo la lezione vorrai un caffè?"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "pagheremo"
      }
    ],
    "prepositionFocus": {
      "base": "di",
      "id": "di_argomento",
      "title": "الموضوع",
      "meaning": "عن",
      "description": "مع الكلام والكتابة والحديث عن موضوع.",
      "form": "di",
      "it": "Parliamo di calcio",
      "ar": "نتحدث عن كرة القدم",
      "en": "We talk about football",
      "color": "#00897b",
      "grammarId": "prep_di"
    },
    "prepWords": [
      {
        "it": "Parliamo",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "di",
        "ar": "عن",
        "note": "مع الكلام والكتابة والحديث عن موضوع.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "di",
        "prepUsageId": "di_argomento",
        "prepUsageTitle": "الموضوع",
        "meaning": "عن",
        "color": "#00897b",
        "grammarId": "prep_di",
        "quiz": []
      },
      {
        "it": "calcio",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Parliamo di calcio",
      "ar": "نتحدث عن كرة القدم",
      "en": "We talk about football",
      "usageId": "di_argomento",
      "grammarId": "prep_di",
      "color": "#00897b"
    },
    "writingIt": "Domani noi pagheremo il conto insieme; Parliamo di calcio",
    "writingAr": "غدًا سندفع الحساب معًا؛ نتحدث عن كرة القدم",
    "writingEn": "Tomorrow we will pay the bill together; We talk about football"
  },
  {
    "it": "L’anno prossimo studieremo in Italia",
    "ar": "في العام القادم سندرس في إيطاليا",
    "en": "Next year we will study in Italy",
    "pronoun": "Noi (نحن)",
    "words": [
      {
        "it": "L’anno prossimo",
        "ar": "السنة الجاية",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "studieremo",
        "ar": "هندرس",
        "note": "Studiare، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Studiare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "in Italia",
        "ar": "في إيطاليا",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Studiare",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Studierò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Studierai"
        },
        {
          "person": "Lui (هو)",
          "form": "Studierà"
        },
        {
          "person": "Lei (هي)",
          "form": "Studierà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Studieremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Studierete"
        },
        {
          "person": "Loro (هم)",
          "form": "Studieranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «L’anno prossimo studieremo in Italia»\nانقل «studieremo» إلى الضمير «Tu (أنت)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Studieremo",
          "Studierai",
          "Studi",
          "Studierà"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "studieremo"
      },
      {
        "q": "في «L’anno prossimo studieremo in Italia» حوّل «studieremo» إلى المضارع (Presente) مع بقاء الضمير «Noi (نحن)».",
        "options": [
          "Studiavamo",
          "Studieremo",
          "Studiamo",
          "Studiate"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "studieremo"
      },
      {
        "q": "في «L’anno prossimo studieremo in Italia» الصيغة «studieremo» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Voi (أنتم)",
          "المضارع (Presente) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Lui (هو)",
          "المستقبل البسيط (Futuro Semplice) — Noi (نحن)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "studieremo"
      },
      {
        "q": "في «L’anno prossimo studieremo in Italia» — اختار صيغة «Studiare» الصحيحة مع «Noi (نحن)» في Futuro:",
        "options": [
          "Studieremo",
          "Studeremo",
          "Studiaremo",
          "Studierò"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "A2",
        "testedSkill": "اختيار الصيغة الصحيحة للجذر",
        "tense": "futuro",
        "wordIt": "studieremo"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «L’anno prossimo studieremo in Italia»؟",
        "options": [
          "سيكون لدى أبي وقت كثير الأسبوع القادم",
          "في العام القادم سندرس في إيطاليا",
          "هل ستكتبون رسالة إلى الجدة؟",
          "الليلة سأبحث عن مطعم جيد"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "studieremo"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «في العام القادم سندرس في إيطاليا»؟",
        "options": [
          "Voi scriverete una lettera alla nonna?",
          "Mio padre avrà molto tempo la prossima settimana",
          "L’anno prossimo studieremo in Italia",
          "Stasera cercherò un buon ristorante"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "studieremo"
      }
    ],
    "prepositionFocus": {
      "base": "a",
      "id": "a_ora",
      "title": "الوقت والساعة",
      "meaning": "في تمام",
      "description": "يحدد الساعة أو لحظة زمنية دقيقة.",
      "form": "alle",
      "it": "Arrivo alle tre",
      "ar": "أصل في تمام الثالثة",
      "en": "I arrive at three",
      "color": "#8e24aa",
      "grammarId": "prep_a"
    },
    "prepWords": [
      {
        "it": "Arrivo",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "alle",
        "ar": "في تمام",
        "note": "يحدد الساعة أو لحظة زمنية دقيقة.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "a",
        "prepUsageId": "a_ora",
        "prepUsageTitle": "الوقت والساعة",
        "meaning": "في تمام",
        "color": "#8e24aa",
        "grammarId": "prep_a",
        "quiz": []
      },
      {
        "it": "tre",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Arrivo alle tre",
      "ar": "أصل في تمام الثالثة",
      "en": "I arrive at three",
      "usageId": "a_ora",
      "grammarId": "prep_a",
      "color": "#8e24aa"
    },
    "writingIt": "L’anno prossimo studieremo in Italia; Arrivo alle tre",
    "writingAr": "في العام القادم سندرس في إيطاليا؛ أصل في تمام الثالثة",
    "writingEn": "Next year we will study in Italy; I arrive at three"
  },
  {
    "it": "Stasera non potremo uscire con voi",
    "ar": "الليلة لن نستطيع الخروج معكم",
    "en": "Tonight we won’t be able to go out with you",
    "pronoun": "Noi (نحن)",
    "words": [
      {
        "it": "Stasera",
        "ar": "الليلة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "non",
        "ar": "مش",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "potremo",
        "ar": "هنقدر",
        "note": "Potere، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Potere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "uscire",
        "ar": "نخرج",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "con voi",
        "ar": "معاكم",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Potere",
      "tense": "Futuro Semplice",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Potrò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Potrai"
        },
        {
          "person": "Lui (هو)",
          "form": "Potrà"
        },
        {
          "person": "Lei (هي)",
          "form": "Potrà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Potremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Potrete"
        },
        {
          "person": "Loro (هم)",
          "form": "Potranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Stasera non potremo uscire con voi»\nانقل «potremo» إلى الضمير «Voi (أنتم)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Potremo",
          "Potrete",
          "Potete",
          "Potranno"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "potremo"
      },
      {
        "q": "في «Stasera non potremo uscire con voi» حوّل «potremo» إلى المضارع (Presente) مع بقاء الضمير «Noi (نحن)».",
        "options": [
          "Potevamo",
          "Potremo",
          "Possiamo",
          "Posso"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "potremo"
      },
      {
        "q": "في «Stasera non potremo uscire con voi» الصيغة «potremo» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Io (أنا)",
          "المضارع (Presente) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Loro (هم)",
          "المستقبل البسيط (Futuro Semplice) — Noi (نحن)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "potremo"
      },
      {
        "q": "في «Stasera non potremo uscire con voi» — ما جذر الفعل «Potere» في Futuro (الجذر اللي بتتضاف له النهايات ò / ai / à / emo / ete / anno)؟",
        "options": [
          "potr-",
          "poter-",
          "pot-",
          "far-"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "B1",
        "testedSkill": "جذر Futuro الشاذ",
        "tense": "futuro",
        "wordIt": "potremo"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Stasera non potremo uscire con voi»؟",
        "options": [
          "غدًا سأذهب إلى السوق مع أمي",
          "الليلة لن نستطيع الخروج معكم",
          "سيشرح الأستاذ الدرس بعد الاستراحة",
          "سيتعين عليكم إنهاء العمل قبل يوم الجمعة"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "potremo"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «الليلة لن نستطيع الخروج معكم»؟",
        "options": [
          "Il professore spiegherà la lezione dopo la pausa",
          "Domani andrò al mercato con mia madre",
          "Stasera non potremo uscire con voi",
          "Voi dovrete finire il lavoro prima di venerdì"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "potremo"
      }
    ],
    "prepositionFocus": {
      "base": "in",
      "id": "in_tempo",
      "title": "الفترة أو الفصل",
      "meaning": "في",
      "description": "مع الفصول والسنوات والفترات العامة.",
      "form": "in",
      "it": "Parto in estate",
      "ar": "أسافر في الصيف",
      "en": "I leave in summer",
      "color": "#00acc1",
      "grammarId": "prep_in"
    },
    "prepWords": [
      {
        "it": "Parto",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "in",
        "ar": "في",
        "note": "مع الفصول والسنوات والفترات العامة.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "in",
        "prepUsageId": "in_tempo",
        "prepUsageTitle": "الفترة أو الفصل",
        "meaning": "في",
        "color": "#00acc1",
        "grammarId": "prep_in",
        "quiz": []
      },
      {
        "it": "estate",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Parto in estate",
      "ar": "أسافر في الصيف",
      "en": "I leave in summer",
      "usageId": "in_tempo",
      "grammarId": "prep_in",
      "color": "#00acc1"
    },
    "writingIt": "Stasera non potremo uscire con voi; Parto in estate",
    "writingAr": "الليلة لن نستطيع الخروج معكم؛ أسافر في الصيف",
    "writingEn": "Tonight we won’t be able to go out with you; I leave in summer"
  },
  {
    "it": "Voi dovrete finire il lavoro prima di venerdì",
    "ar": "سيتعين عليكم إنهاء العمل قبل يوم الجمعة",
    "en": "You will have to finish the work before Friday",
    "pronoun": "Voi (أنتم)",
    "words": [
      {
        "it": "Voi",
        "ar": "إنتم",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "dovrete",
        "ar": "هيبقى لازم",
        "note": "Dovere، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Dovere",
        "group": "ere",
        "regular": false,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "finire",
        "ar": "تخلصوا",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "il lavoro",
        "ar": "الشغل",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "prima di venerdì",
        "ar": "قبل الجمعة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Dovere",
      "tense": "Futuro Semplice",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Dovrò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Dovrai"
        },
        {
          "person": "Lui (هو)",
          "form": "Dovrà"
        },
        {
          "person": "Lei (هي)",
          "form": "Dovrà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Dovremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dovrete"
        },
        {
          "person": "Loro (هم)",
          "form": "Dovranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Voi dovrete finire il lavoro prima di venerdì»\nانقل «dovrete» إلى الضمير «Noi (نحن)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Dobbiamo",
          "Dovremo",
          "Dovrete",
          "Dovranno"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "dovrete"
      },
      {
        "q": "في «Voi dovrete finire il lavoro prima di venerdì» حوّل «dovrete» إلى المضارع (Presente) مع بقاء الضمير «Voi (أنتم)».",
        "options": [
          "Devo",
          "Dovrete",
          "Dovete",
          "Dovevate"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "dovrete"
      },
      {
        "q": "في «Voi dovrete finire il lavoro prima di venerdì» الصيغة «dovrete» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Io (أنا)",
          "المضارع (Presente) — Voi (أنتم)",
          "المستقبل البسيط (Futuro Semplice) — Loro (هم)",
          "المستقبل البسيط (Futuro Semplice) — Voi (أنتم)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "dovrete"
      },
      {
        "q": "في «Voi dovrete finire il lavoro prima di venerdì» — ما جذر الفعل «Dovere» في Futuro (الجذر اللي بتتضاف له النهايات ò / ai / à / emo / ete / anno)؟",
        "options": [
          "dovr-",
          "dover-",
          "dov-",
          "star-"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "B1",
        "testedSkill": "جذر Futuro الشاذ",
        "tense": "futuro",
        "wordIt": "dovrete"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Voi dovrete finire il lavoro prima di venerdì»؟",
        "options": [
          "غدًا سندفع الحساب معًا",
          "سيتعين عليكم إنهاء العمل قبل يوم الجمعة",
          "هل ستريد قهوة بعد الدرس؟",
          "سيسافر أصدقائي بالقطار الصيف القادم"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "dovrete"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «سيتعين عليكم إنهاء العمل قبل يوم الجمعة»؟",
        "options": [
          "I miei amici viaggeranno in treno l’estate prossima",
          "Dopo la lezione vorrai un caffè?",
          "Voi dovrete finire il lavoro prima di venerdì",
          "Domani noi pagheremo il conto insieme"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "dovrete"
      }
    ],
    "prepositionFocus": {
      "base": "con",
      "id": "con_compagnia",
      "title": "المصاحبة",
      "meaning": "مع",
      "description": "مرافقة شخص أو حيوان.",
      "form": "con",
      "it": "Passeggio con Marco",
      "ar": "أتمشى مع ماركو",
      "en": "I walk with Marco",
      "color": "#1e88e5",
      "grammarId": "prep_con"
    },
    "prepWords": [
      {
        "it": "Passeggio",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "con",
        "ar": "مع",
        "note": "مرافقة شخص أو حيوان.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "con",
        "prepUsageId": "con_compagnia",
        "prepUsageTitle": "المصاحبة",
        "meaning": "مع",
        "color": "#1e88e5",
        "grammarId": "prep_con",
        "quiz": []
      },
      {
        "it": "Marco",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Passeggio con Marco",
      "ar": "أتمشى مع ماركو",
      "en": "I walk with Marco",
      "usageId": "con_compagnia",
      "grammarId": "prep_con",
      "color": "#1e88e5"
    },
    "writingIt": "Voi dovrete finire il lavoro prima di venerdì; Passeggio con Marco",
    "writingAr": "سيتعين عليكم إنهاء العمل قبل يوم الجمعة؛ أتمشى مع ماركو",
    "writingEn": "You will have to finish the work before Friday; I walk with Marco"
  },
  {
    "it": "Voi scriverete una lettera alla nonna?",
    "ar": "هل ستكتبون رسالة إلى الجدة؟",
    "en": "Will you write a letter to grandma?",
    "pronoun": "Voi (أنتم)",
    "words": [
      {
        "it": "Voi",
        "ar": "إنتم",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "scriverete",
        "ar": "هتكتبوا",
        "note": "Scrivere، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Scrivere",
        "group": "ere",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "una lettera",
        "ar": "جواب",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "alla nonna?",
        "ar": "لتيتة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Scrivere",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Scriverò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Scriverai"
        },
        {
          "person": "Lui (هو)",
          "form": "Scriverà"
        },
        {
          "person": "Lei (هي)",
          "form": "Scriverà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Scriveremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Scriverete"
        },
        {
          "person": "Loro (هم)",
          "form": "Scriveranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Voi scriverete una lettera alla nonna?»\nانقل «scriverete» إلى الضمير «Loro (هم)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Scrivono",
          "Scriveranno",
          "Scriverete",
          "Scriverò"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "scriverete"
      },
      {
        "q": "في «Voi scriverete una lettera alla nonna?» حوّل «scriverete» إلى المضارع (Presente) مع بقاء الضمير «Voi (أنتم)».",
        "options": [
          "Scrivi",
          "Scriverete",
          "Scrivete",
          "Scrivevate"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "scriverete"
      },
      {
        "q": "في «Voi scriverete una lettera alla nonna?» الصيغة «scriverete» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Tu (أنت)",
          "المضارع (Presente) — Voi (أنتم)",
          "المستقبل البسيط (Futuro Semplice) — Io (أنا)",
          "المستقبل البسيط (Futuro Semplice) — Voi (أنتم)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "scriverete"
      },
      {
        "q": "في «Voi scriverete una lettera alla nonna?» — اختار صيغة «Scrivere» الصحيحة مع «Voi (أنتم)» في Futuro:",
        "options": [
          "Scriverete",
          "Scrivrete",
          "Scrivirete",
          "Scriverò"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "A2",
        "testedSkill": "اختيار الصيغة الصحيحة للجذر",
        "tense": "futuro",
        "wordIt": "scriverete"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Voi scriverete una lettera alla nonna?»؟",
        "options": [
          "سيكون لدى أبي وقت كثير الأسبوع القادم",
          "هل ستكتبون رسالة إلى الجدة؟",
          "غدًا سأعمل في البيت حتى السادسة",
          "سيتعين عليكم إنهاء العمل قبل يوم الجمعة"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "scriverete"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «هل ستكتبون رسالة إلى الجدة؟»؟",
        "options": [
          "Voi dovrete finire il lavoro prima di venerdì",
          "Domani lavorerò a casa fino alle sei",
          "Voi scriverete una lettera alla nonna?",
          "Mio padre avrà molto tempo la prossima settimana"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "scriverete"
      }
    ],
    "prepositionFocus": {
      "base": "da",
      "id": "da_scopo",
      "title": "الغرض أو الاستخدام",
      "meaning": "لـ",
      "description": "يصف وظيفة الشيء أو الغرض منه.",
      "form": "da",
      "it": "Uso gli occhiali da sole",
      "ar": "أستخدم نظارات الشمس",
      "en": "I use sunglasses",
      "color": "#1e88e5",
      "grammarId": "prep_da"
    },
    "prepWords": [
      {
        "it": "Uso gli occhiali",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "da",
        "ar": "لـ",
        "note": "يصف وظيفة الشيء أو الغرض منه.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "da",
        "prepUsageId": "da_scopo",
        "prepUsageTitle": "الغرض أو الاستخدام",
        "meaning": "لـ",
        "color": "#1e88e5",
        "grammarId": "prep_da",
        "quiz": []
      },
      {
        "it": "sole",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Uso gli occhiali da sole",
      "ar": "أستخدم نظارات الشمس",
      "en": "I use sunglasses",
      "usageId": "da_scopo",
      "grammarId": "prep_da",
      "color": "#1e88e5"
    },
    "writingIt": "Voi scriverete una lettera alla nonna?; Uso gli occhiali da sole",
    "writingAr": "هل ستكتبون رسالة إلى الجدة؟؛ أستخدم نظارات الشمس",
    "writingEn": "Will you write a letter to grandma?; I use sunglasses"
  },
  {
    "it": "Domani voi dormirete fino a tardi",
    "ar": "غدًا ستنامون حتى وقت متأخر",
    "en": "Tomorrow you will sleep in",
    "pronoun": "Voi (أنتم)",
    "words": [
      {
        "it": "Domani",
        "ar": "بكرة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "voi",
        "ar": "إنتم",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "dormirete",
        "ar": "هتناموا",
        "note": "Dormire، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Dormire",
        "group": "ire",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "fino a tardi",
        "ar": "لحد متأخر",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Dormire",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Dormirò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Dormirai"
        },
        {
          "person": "Lui (هو)",
          "form": "Dormirà"
        },
        {
          "person": "Lei (هي)",
          "form": "Dormirà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Dormiremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dormirete"
        },
        {
          "person": "Loro (هم)",
          "form": "Dormiranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Domani voi dormirete fino a tardi»\nانقل «dormirete» إلى الضمير «Lui (هو)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Dorme",
          "Dormirà",
          "Dormirete",
          "Dormiremo"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "dormirete"
      },
      {
        "q": "في «Domani voi dormirete fino a tardi» حوّل «dormirete» إلى المضارع (Presente) مع بقاء الضمير «Voi (أنتم)».",
        "options": [
          "Dormono",
          "Dormirete",
          "Dormite",
          "Dormivate"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "dormirete"
      },
      {
        "q": "في «Domani voi dormirete fino a tardi» الصيغة «dormirete» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Loro (هم)",
          "المضارع (Presente) — Voi (أنتم)",
          "المستقبل البسيط (Futuro Semplice) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Voi (أنتم)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "dormirete"
      },
      {
        "q": "في «Domani voi dormirete fino a tardi» — اختار صيغة «Dormire» الصحيحة مع «Voi (أنتم)» في Futuro:",
        "options": [
          "Dormirete",
          "Dormerete",
          "Dormarete",
          "Dormirò"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "A2",
        "testedSkill": "اختيار الصيغة الصحيحة للجذر",
        "tense": "futuro",
        "wordIt": "dormirete"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Domani voi dormirete fino a tardi»؟",
        "options": [
          "هل ستكتبون رسالة إلى الجدة؟",
          "غدًا ستنامون حتى وقت متأخر",
          "ستستقل آنّا قطار الساعة الثامنة",
          "هل ستكون في البيت أم في العمل يوم السبت؟"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "dormirete"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «غدًا ستنامون حتى وقت متأخر»؟",
        "options": [
          "Sabato sarai a casa o al lavoro?",
          "Anna prenderà il treno delle otto",
          "Domani voi dormirete fino a tardi",
          "Voi scriverete una lettera alla nonna?"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "dormirete"
      }
    ],
    "prepositionFocus": {
      "base": "in",
      "id": "in_trasporto",
      "title": "وسيلة المواصلات",
      "meaning": "بـ",
      "description": "مع وسائل النقل غالبًا بدون أداة تعريف.",
      "form": "in",
      "it": "Viaggio in treno",
      "ar": "أسافر بالقطار",
      "en": "I travel by train",
      "color": "#5e35b1",
      "grammarId": "prep_in"
    },
    "prepWords": [
      {
        "it": "Viaggio",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "in",
        "ar": "بـ",
        "note": "مع وسائل النقل غالبًا بدون أداة تعريف.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "in",
        "prepUsageId": "in_trasporto",
        "prepUsageTitle": "وسيلة المواصلات",
        "meaning": "بـ",
        "color": "#5e35b1",
        "grammarId": "prep_in",
        "quiz": []
      },
      {
        "it": "treno",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Viaggio in treno",
      "ar": "أسافر بالقطار",
      "en": "I travel by train",
      "usageId": "in_trasporto",
      "grammarId": "prep_in",
      "color": "#5e35b1"
    },
    "writingIt": "Domani voi dormirete fino a tardi; Viaggio in treno",
    "writingAr": "غدًا ستنامون حتى وقت متأخر؛ أسافر بالقطار",
    "writingEn": "Tomorrow you will sleep in; I travel by train"
  },
  {
    "it": "Domani i ragazzi daranno un regalo a Sara",
    "ar": "غدًا سيعطي الأولاد هدية لسارة",
    "en": "Tomorrow the boys will give Sara a gift",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "Domani",
        "ar": "بكرة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "i ragazzi",
        "ar": "الولاد",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "daranno",
        "ar": "هيعطيوا",
        "note": "Dare، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Dare",
        "group": "are",
        "regular": false,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "un regalo",
        "ar": "هدية",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "a Sara",
        "ar": "لسارة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Dare",
      "tense": "Futuro Semplice",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Darò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Darai"
        },
        {
          "person": "Lui (هو)",
          "form": "Darà"
        },
        {
          "person": "Lei (هي)",
          "form": "Darà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Daremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Darete"
        },
        {
          "person": "Loro (هم)",
          "form": "Daranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Domani i ragazzi daranno un regalo a Sara»\nانقل «daranno» إلى الضمير «Lui (هو)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Daranno",
          "Darà",
          "Dà",
          "Daremo"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "daranno"
      },
      {
        "q": "في «Domani i ragazzi daranno un regalo a Sara» حوّل «daranno» إلى المضارع (Presente) مع بقاء الضمير «Loro (هم)».",
        "options": [
          "Davano",
          "Daranno",
          "Danno",
          "Date"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "daranno"
      },
      {
        "q": "في «Domani i ragazzi daranno un regalo a Sara» الصيغة «daranno» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Voi (أنتم)",
          "المضارع (Presente) — Loro (هم)",
          "المستقبل البسيط (Futuro Semplice) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Loro (هم)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "daranno"
      },
      {
        "q": "في «Domani i ragazzi daranno un regalo a Sara» — ما جذر الفعل «Dare» في Futuro (الجذر اللي بتتضاف له النهايات ò / ai / à / emo / ete / anno)؟",
        "options": [
          "dar-",
          "der-",
          "d-",
          "vedr-"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "B1",
        "testedSkill": "جذر Futuro الشاذ",
        "tense": "futuro",
        "wordIt": "daranno"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Domani i ragazzi daranno un regalo a Sara»؟",
        "options": [
          "هل ستأكل معنا غدًا؟",
          "غدًا سيعطي الأولاد هدية لسارة",
          "ستستيقظ جوليا مبكرًا صباح الغد",
          "سيفهم الطلاب القاعدة بعد التمرين"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "daranno"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «غدًا سيعطي الأولاد هدية لسارة»؟",
        "options": [
          "Domani mattina Giulia si sveglierà presto",
          "Domani mangerai con noi?",
          "Domani i ragazzi daranno un regalo a Sara",
          "Gli studenti capiranno la regola dopo l’esercizio"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "daranno"
      }
    ],
    "prepositionFocus": {
      "base": "su",
      "id": "su_argomento",
      "title": "الموضوع",
      "meaning": "عن",
      "description": "يحدد موضوع كتاب أو حديث.",
      "form": "su",
      "it": "Leggo un libro su Roma",
      "ar": "أقرأ كتابًا عن روما",
      "en": "I read a book about Rome",
      "color": "#5e35b1",
      "grammarId": "prep_su"
    },
    "prepWords": [
      {
        "it": "Leggo un libro",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "su",
        "ar": "عن",
        "note": "يحدد موضوع كتاب أو حديث.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "su",
        "prepUsageId": "su_argomento",
        "prepUsageTitle": "الموضوع",
        "meaning": "عن",
        "color": "#5e35b1",
        "grammarId": "prep_su",
        "quiz": []
      },
      {
        "it": "Roma",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Leggo un libro su Roma",
      "ar": "أقرأ كتابًا عن روما",
      "en": "I read a book about Rome",
      "usageId": "su_argomento",
      "grammarId": "prep_su",
      "color": "#5e35b1"
    },
    "writingIt": "Domani i ragazzi daranno un regalo a Sara; Leggo un libro su Roma",
    "writingAr": "غدًا سيعطي الأولاد هدية لسارة؛ أقرأ كتابًا عن روما",
    "writingEn": "Tomorrow the boys will give Sara a gift; I read a book about Rome"
  },
  {
    "it": "Gli studenti capiranno la regola dopo l’esercizio",
    "ar": "سيفهم الطلاب القاعدة بعد التمرين",
    "en": "The students will understand the rule after the exercise",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "Gli studenti",
        "ar": "الطلاب",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "capiranno",
        "ar": "هيفهموا",
        "note": "Capire، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Capire",
        "group": "ire",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "la regola",
        "ar": "القاعدة",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "dopo l’esercizio",
        "ar": "بعد التمرين",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Capire",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Capirò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Capirai"
        },
        {
          "person": "Lui (هو)",
          "form": "Capirà"
        },
        {
          "person": "Lei (هي)",
          "form": "Capirà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Capiremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Capirete"
        },
        {
          "person": "Loro (هم)",
          "form": "Capiranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «Gli studenti capiranno la regola dopo l’esercizio»\nانقل «capiranno» إلى الضمير «Lui (هو)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Capisce",
          "Capirà",
          "Capiranno",
          "Capiremo"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "capiranno"
      },
      {
        "q": "في «Gli studenti capiranno la regola dopo l’esercizio» حوّل «capiranno» إلى المضارع (Presente) مع بقاء الضمير «Loro (هم)».",
        "options": [
          "Capite",
          "Capiranno",
          "Capiscono",
          "Capivano"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "capiranno"
      },
      {
        "q": "في «Gli studenti capiranno la regola dopo l’esercizio» الصيغة «capiranno» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Voi (أنتم)",
          "المضارع (Presente) — Loro (هم)",
          "المستقبل البسيط (Futuro Semplice) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Loro (هم)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "capiranno"
      },
      {
        "q": "في «Gli studenti capiranno la regola dopo l’esercizio» — اختار صيغة «Capire» الصحيحة مع «Loro (هم)» في Futuro:",
        "options": [
          "Capiranno",
          "Caperanno",
          "Caparanno",
          "Capirò"
        ],
        "correct": 0,
        "cognitiveLevel": "Recall",
        "cefr": "A2",
        "testedSkill": "اختيار الصيغة الصحيحة للجذر",
        "tense": "futuro",
        "wordIt": "capiranno"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «Gli studenti capiranno la regola dopo l’esercizio»؟",
        "options": [
          "هل ستكتبون رسالة إلى الجدة؟",
          "سيفهم الطلاب القاعدة بعد التمرين",
          "ستستقل آنّا قطار الساعة الثامنة",
          "هل ستكون في البيت أم في العمل يوم السبت؟"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "capiranno"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «سيفهم الطلاب القاعدة بعد التمرين»؟",
        "options": [
          "Sabato sarai a casa o al lavoro?",
          "Anna prenderà il treno delle otto",
          "Gli studenti capiranno la regola dopo l’esercizio",
          "Voi scriverete una lettera alla nonna?"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "capiranno"
      }
    ],
    "prepositionFocus": {
      "base": "a",
      "id": "a_direzione",
      "title": "الاتجاه إلى مدينة أو مكان",
      "meaning": "إلى",
      "description": "يستخدم للحركة نحو مدينة أو مكان محدد.",
      "form": "a",
      "it": "Vado a Milano",
      "ar": "أذهب إلى ميلانو",
      "en": "I go to Milan",
      "color": "#e53935",
      "grammarId": "prep_a"
    },
    "prepWords": [
      {
        "it": "Vado",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "a",
        "ar": "إلى",
        "note": "يستخدم للحركة نحو مدينة أو مكان محدد.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "a",
        "prepUsageId": "a_direzione",
        "prepUsageTitle": "الاتجاه إلى مدينة أو مكان",
        "meaning": "إلى",
        "color": "#e53935",
        "grammarId": "prep_a",
        "quiz": []
      },
      {
        "it": "Milano",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Vado a Milano",
      "ar": "أذهب إلى ميلانو",
      "en": "I go to Milan",
      "usageId": "a_direzione",
      "grammarId": "prep_a",
      "color": "#e53935"
    },
    "writingIt": "Gli studenti capiranno la regola dopo l’esercizio; Vado a Milano",
    "writingAr": "سيفهم الطلاب القاعدة بعد التمرين؛ أذهب إلى ميلانو",
    "writingEn": "The students will understand the rule after the exercise; I go to Milan"
  },
  {
    "it": "I miei amici viaggeranno in treno l’estate prossima",
    "ar": "سيسافر أصدقائي بالقطار الصيف القادم",
    "en": "My friends will travel by train next summer",
    "pronoun": "Loro (هم)",
    "words": [
      {
        "it": "I miei amici",
        "ar": "أصحابي",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "viaggeranno",
        "ar": "هيسافروا (يرحل)",
        "note": "Viaggiare، Futuro Semplice",
        "type": "verbo",
        "verbInfinitive": "Viaggiare",
        "group": "are",
        "regular": true,
        "aux": "avere",
        "tense": "futuro",
        "transitive": null,
        "quiz": [],
        "transitivity": null,
        "transitivityNote": null,
        "segment": "main"
      },
      {
        "it": "in treno",
        "ar": "بالقطر",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      },
      {
        "it": "l’estate prossima",
        "ar": "الصيف الجاي",
        "note": null,
        "type": "altro",
        "quiz": [],
        "segment": "main"
      }
    ],
    "conj": {
      "verb": "Viaggiare",
      "tense": "Futuro Semplice",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Viaggerò"
        },
        {
          "person": "Tu (أنت)",
          "form": "Viaggerai"
        },
        {
          "person": "Lui (هو)",
          "form": "Viaggerà"
        },
        {
          "person": "Lei (هي)",
          "form": "Viaggerà"
        },
        {
          "person": "Noi (نحن)",
          "form": "Viaggeremo"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Viaggerete"
        },
        {
          "person": "Loro (هم)",
          "form": "Viaggeranno"
        }
      ]
    },
    "quiz": [
      {
        "q": "في الجملة: «I miei amici viaggeranno in treno l’estate prossima»\nانقل «viaggeranno» إلى الضمير «Lui (هو)» مع بقاء زمن المستقبل (Futuro Semplice).",
        "options": [
          "Viaggeranno",
          "Viaggerà",
          "Viaggia",
          "Viaggeremo"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "تحويل الشخص مع تثبيت الزمن",
        "tense": "futuro",
        "wordIt": "viaggeranno"
      },
      {
        "q": "في «I miei amici viaggeranno in treno l’estate prossima» حوّل «viaggeranno» إلى المضارع (Presente) مع بقاء الضمير «Loro (هم)».",
        "options": [
          "Viaggiavano",
          "Viaggeranno",
          "Viaggiano",
          "Viaggiate"
        ],
        "correct": 2,
        "cognitiveLevel": "Transformation",
        "cefr": "B1",
        "testedSkill": "تحويل الزمن مع تثبيت الشخص",
        "tense": "futuro",
        "wordIt": "viaggeranno"
      },
      {
        "q": "في «I miei amici viaggeranno in treno l’estate prossima» الصيغة «viaggeranno» — ما زمنها وإلى أي ضمير تعود؟",
        "options": [
          "الماضي القريب (Passato Prossimo) — Voi (أنتم)",
          "المضارع (Presente) — Loro (هم)",
          "المستقبل البسيط (Futuro Semplice) — Noi (نحن)",
          "المستقبل البسيط (Futuro Semplice) — Loro (هم)"
        ],
        "correct": 3,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "تمييز الزمن والشخص من الصيغة",
        "tense": "futuro",
        "wordIt": "viaggeranno"
      },
      {
        "q": "في «I miei amici viaggeranno in treno l’estate prossima» — ليه «viaggeranno» اتكتبت من غير i؟",
        "options": [
          "علشان الـ g/c قبل e أصلاً ناعمة، فالـ i مش لازمة وبتتحذف",
          "علشان الفعل شاذ ولازم يتحفظ صيغة صيغة",
          "علشان بنضيف h قبل النهاية",
          "علشان الـ i بتتحول لـ e"
        ],
        "correct": 0,
        "cognitiveLevel": "Recognition",
        "cefr": "A2",
        "testedSkill": "القاعدة الإملائية في Futuro",
        "tense": "futuro",
        "wordIt": "viaggeranno"
      },
      {
        "q": "ما المعنى العربي الدقيق لـ: «I miei amici viaggeranno in treno l’estate prossima»؟",
        "options": [
          "هل ستأكل معنا غدًا؟",
          "سيسافر أصدقائي بالقطار الصيف القادم",
          "ستستيقظ جوليا مبكرًا صباح الغد",
          "غدًا سيعطي الأولاد هدية لسارة"
        ],
        "correct": 1,
        "cognitiveLevel": "Application",
        "cefr": "A2",
        "testedSkill": "فهم الجملة كاملة",
        "tense": "futuro",
        "wordIt": "viaggeranno"
      },
      {
        "q": "ما الترجمة الإيطالية الصحيحة لـ: «سيسافر أصدقائي بالقطار الصيف القادم»؟",
        "options": [
          "Domani mattina Giulia si sveglierà presto",
          "Domani mangerai con noi?",
          "I miei amici viaggeranno in treno l’estate prossima",
          "Domani i ragazzi daranno un regalo a Sara"
        ],
        "correct": 2,
        "cognitiveLevel": "Production",
        "cefr": "A2",
        "testedSkill": "إنتاج الجملة من العربية",
        "tense": "futuro",
        "wordIt": "viaggeranno"
      }
    ],
    "prepositionFocus": {
      "base": "da",
      "id": "da_persona",
      "title": "الذهاب عند شخص",
      "meaning": "عند / إلى",
      "description": "يستخدم للذهاب إلى منزل أو مكان شخص أو مهني.",
      "form": "da",
      "it": "Vado da Marco",
      "ar": "أذهب عند ماركو",
      "en": "I go to Marco’s place",
      "color": "#6d4c41",
      "grammarId": "prep_da"
    },
    "prepWords": [
      {
        "it": "Vado",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      },
      {
        "it": "da",
        "ar": "عند / إلى",
        "note": "يستخدم للذهاب إلى منزل أو مكان شخص أو مهني.",
        "type": "preposizione",
        "segment": "preposition",
        "prep": "da",
        "prepUsageId": "da_persona",
        "prepUsageTitle": "الذهاب عند شخص",
        "meaning": "عند / إلى",
        "color": "#6d4c41",
        "grammarId": "prep_da",
        "quiz": []
      },
      {
        "it": "Marco",
        "ar": "",
        "note": null,
        "type": "altro",
        "segment": "preposition",
        "quiz": []
      }
    ],
    "prepositionExample": {
      "it": "Vado da Marco",
      "ar": "أذهب عند ماركو",
      "en": "I go to Marco’s place",
      "usageId": "da_persona",
      "grammarId": "prep_da",
      "color": "#6d4c41"
    },
    "writingIt": "I miei amici viaggeranno in treno l’estate prossima; Vado da Marco",
    "writingAr": "سيسافر أصدقائي بالقطار الصيف القادم؛ أذهب عند ماركو",
    "writingEn": "My friends will travel by train next summer; I go to Marco’s place"
  }
];
