const GRAMMAR = [
  {
    "id": "interrogativi",
    "it": "Aggettivi e pronomi interrogativi",
    "ar": "الصفات والضمائر الاستفهامية",
    "icon": "❓",
    "triggers": [
      "quando",
      "quanto",
      "quanta",
      "quanti",
      "quante",
      "chi",
      "quale",
      "quali",
      "che",
      "cosa"
    ],
    "blocks": [
      {
        "type": "item",
        "it": "Quando",
        "ar": "متى / عندما",
        "note": "أداة استفهام للزمن، شكلها ثابت مع كل الأشخاص ومع المفرد والجمع",
        "examples": [
          {
            "it": "Quando lavoravi?",
            "ar": "متى كنت تعمل؟"
          },
          {
            "it": "Quando sei arrivato?",
            "ar": "متى وصلت؟"
          }
        ]
      },
      {
        "type": "table",
        "title": "Quanto — تتغير حسب الجنس والعدد (الكمية)",
        "headers": [
          "الصيغة",
          "الاستخدام",
          "مثال"
        ],
        "rows": [
          [
            "Quanto",
            "مذكر مفرد (كمية غير معدودة)",
            "Quanto pane hai comprato? — كم خبز اشتريت؟"
          ],
          [
            "Quanta",
            "مؤنث مفرد (كمية غير معدودة)",
            "Quanta acqua bevi? — كم بتشرب مياه؟"
          ],
          [
            "Quanti",
            "مذكر جمع (أشياء معدودة)",
            "Quanti libri hai letto? — قريت كام كتاب؟"
          ],
          [
            "Quante",
            "مؤنث جمع (أشياء معدودة)",
            "Quante volte gli hai telefonato? — كم مرة اتصلتي بيه؟"
          ]
        ]
      },
      {
        "type": "item",
        "it": "Chi",
        "ar": "مَن / مَن",
        "note": "تُستخدم مع الأشخاص فقط (للعاقل)، وشكلها ثابت مع المفرد والجمع",
        "examples": [
          {
            "it": "Di chi è questo?",
            "ar": "هذا الخاص بـمَن؟"
          },
          {
            "it": "A chi scrivi?",
            "ar": "تكتب لمَن؟"
          },
          {
            "it": "Con chi parli?",
            "ar": "تتحدث مع مَن؟"
          },
          {
            "it": "Per chi è?",
            "ar": "هذا لكي مَن؟"
          },
          {
            "it": "Da chi viene?",
            "ar": "جاي من عند مَن؟"
          }
        ]
      },
      {
        "type": "table",
        "title": "Quale / Quali",
        "headers": [
          "الصيغة",
          "الاستخدام",
          "مثال"
        ],
        "rows": [
          [
            "Quale",
            "مذكر ومؤنث مفرد — أيّ واحد",
            "Quale libro preferisci? — بتفضل أي كتاب؟"
          ],
          [
            "Quali",
            "مذكر ومؤنث جمع — أيّ (جمع)",
            "Quali film hai visto? — شفت أي أفلام؟"
          ]
        ]
      },
      {
        "type": "item",
        "it": "Che / Cosa / Che cosa",
        "ar": "ما / ماذا",
        "note": "الثلاثة معناهم واحد، وCosa هي الأكثر استخدام في المحادثة اليومية",
        "examples": [
          {
            "it": "Che ore sono?",
            "ar": "الساعة كم؟"
          },
          {
            "it": "Cosa fai stasera?",
            "ar": "هتعمل ما الليلة؟"
          },
          {
            "it": "Che cosa vuoi?",
            "ar": "ماذا تريد؟"
          }
        ]
      },
      {
        "type": "note",
        "ar": "⚠️ Quando ليست فقط أداة سؤال — تُستخدم أيضًا كأداة ربط زمنية داخل الجملة (مثل mentre تقريباً) لكي تقول 'حينما / لما': تأتي غالباً مع Imperfetto للدلالة على الحدث الذي كان مستمرًا، والفعل الآخر يكون Passato Prossimo للحدث الذي قاطعه أو حصل في نفس اللحظة."
      },
      {
        "type": "item",
        "it": "Quando كأداة ربط (ليس سؤال)",
        "ar": "",
        "examples": [
          {
            "it": "Quando camminavi, hai visto Marco",
            "ar": "وأنت ماشي، شفت ماركو"
          },
          {
            "it": "Ti ho chiamato quando sono arrivato",
            "ar": "كلمتك لما وصلت"
          }
        ]
      }
    ]
  },
  {
    "id": "possessivi",
    "it": "Aggettivi possessivi",
    "ar": "الصفات (الضمائر) الملكية",
    "icon": "👪",
    "triggers": [
      "mio",
      "mia",
      "miei",
      "mie",
      "tuo",
      "tua",
      "tuoi",
      "tue",
      "suo",
      "sua",
      "suoi",
      "sue",
      "nostro",
      "nostra",
      "nostri",
      "nostre",
      "vostro",
      "vostra",
      "vostri",
      "vostre",
      "loro"
    ],
    "blocks": [
      {
        "type": "table",
        "title": "جدول الصفات الملكية الكامل",
        "headers": [
          "الشخص",
          "مذكر مفرد",
          "مؤنث مفرد",
          "مذكر جمع",
          "مؤنث جمع"
        ],
        "rows": [
          [
            "Io (أنا)",
            "il mio",
            "la mia",
            "i miei",
            "le mie"
          ],
          [
            "Tu (أنت)",
            "il tuo",
            "la tua",
            "i tuoi",
            "le tue"
          ],
          [
            "Lui/Lei (هو/هي)",
            "il suo",
            "la sua",
            "i suoi",
            "le sue"
          ],
          [
            "Noi (نحن)",
            "il nostro",
            "la nostra",
            "i nostri",
            "le nostre"
          ],
          [
            "Voi (انتو)",
            "il vostro",
            "la vostra",
            "i vostri",
            "le vostre"
          ],
          [
            "Loro (هم)",
            "il loro",
            "la loro",
            "i loro",
            "le loro"
          ]
        ]
      },
      {
        "type": "item",
        "it": "أمثلة عملية",
        "ar": "",
        "examples": [
          {
            "it": "Il mio amico è simpatico",
            "ar": "صاحبي لطيف"
          },
          {
            "it": "La tua casa è bella",
            "ar": "بيتك جميل"
          },
          {
            "it": "Il suo telefono è rotto",
            "ar": "تليفونه/تليفونها باظ"
          },
          {
            "it": "La nostra scuola è grande",
            "ar": "مدرستنا كبيرة"
          },
          {
            "it": "I vostri libri sono qui",
            "ar": "كتبكم هنا"
          },
          {
            "it": "Le loro idee sono ottime",
            "ar": "أفكارهم ممتازة"
          }
        ]
      },
      {
        "type": "note",
        "ar": "⚠️ استثناء مهم: لما نتكلم عن فرد واحد من العيلة بصيغة المفرد وبدون صفة، بنشيل أداة التعريف (il/la): mio fratello (أخويا) ليس il mio fratello. لكن أداة التعريف ترجع مرة أخرى لو الاسم جمع (i miei fratelli = أخواتي) أو لو معاه صفة (il mio fratello grande = أخويا الكبير)."
      }
    ]
  },
  {
    "id": "partitivi",
    "it": "Articoli partitivi",
    "ar": "أدوات التبعيض (بعض من / قليل من)",
    "icon": "🥖",
    "triggers": [
      "dei",
      "degli",
      "delle",
      "del",
      "dello",
      "della",
      "un",
      "uno",
      "una",
      "un’"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "أداة التبعيض تتكوّن من di + أداة التعريف، ومعناها 'بعض من / قليل من'. أسهل طريقة تتذكرها: هي جمع un/uno/una، وتصف كمية غير محددة من شيء معدودة أو غير معدودة."
      },
      {
        "type": "table",
        "title": "مع أسماء غير معدودة (مفرد)",
        "headers": [
          "الصيغة",
          "تُستخدم قبل",
          "مثال"
        ],
        "rows": [
          [
            "Del",
            "مذكر مفرد",
            "Ho comprato del pane — اشتريت قليل خبز"
          ],
          [
            "Dello",
            "مذكر مفرد بيبدأ بـ s+ساكن / z / gn / ps",
            "Metto dello zucchero — بضيف قليل سكر"
          ],
          [
            "Della",
            "مؤنث مفرد",
            "Compro della pasta — بشتري قليل معكرونة"
          ],
          [
            "Dell'",
            "مفرد (مذكر أو مؤنث) بيبدأ بحرف متحرك",
            "Vorrei dell'acqua — عايز شوية مية"
          ]
        ]
      },
      {
        "type": "table",
        "title": "مع أسماء معدودة (جمع)",
        "headers": [
          "الصيغة",
          "تُستخدم قبل",
          "مثال"
        ],
        "rows": [
          [
            "Dei",
            "جمع مذكر (الحالة العادية)",
            "Ho dei libri — عندي كتب (قليل كتب)"
          ],
          [
            "Degli",
            "جمع مذكر بيبدأ بـ s+ساكن / z / gn / ps أو حرف متحرك",
            "Ho degli zaini — عندي شنط ظهر / Ho degli amici — عندي أصحاب"
          ],
          [
            "Delle",
            "جمع مؤنث",
            "Ho delle mele — عندي تفاح (قليل تفاح)"
          ]
        ]
      },
      {
        "type": "item",
        "it": "مقارنة سريعة (un/una ← جمعها dei/degli/delle)",
        "ar": "",
        "examples": [
          {
            "it": "Ho un libro → Ho dei libri",
            "ar": "عندي كتاب ← عندي كتب"
          },
          {
            "it": "Ho una mela → Ho delle mele",
            "ar": "عندي تفاحة ← عندي تفاح"
          },
          {
            "it": "Ho uno zaino → Ho degli zaini",
            "ar": "عندي شنطة ظهر ← عندي شنط ظهر"
          }
        ]
      },
      {
        "type": "table",
        "title": "النكرة والتجزئة بسرعة",
        "headers": [
          "الصيغة",
          "الاستخدام",
          "مثال"
        ],
        "rows": [
          [
            "Un",
            "مذكر مفرد",
            "un libro"
          ],
          [
            "Uno",
            "مذكر قبل s+ساكن/z/gn/ps",
            "uno zaino"
          ],
          [
            "Una / Un’",
            "مؤنث مفرد",
            "una casa / un’amica"
          ],
          [
            "Dei / Degli / Delle",
            "كمية غير محددة في الجمع",
            "dei libri / degli zaini / delle mele"
          ]
        ]
      }
    ]
  },
  {
    "id": "dimostrativi",
    "it": "Aggettivi e pronomi dimostrativi",
    "ar": "صفات وضمائر الإشارة",
    "icon": "👉",
    "triggers": [
      "questo",
      "questa",
      "questi",
      "queste",
      "quello",
      "quella",
      "quegli",
      "quelle",
      "quel"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "الفرق بين Aggettivo dimostrativo (صفة إشارة تأتي قبل الاسم) و Pronome dimostrativo (ضمير إشارة يحل محل الاسم):\n• Questo libro è buono = هذا الكتاب جيد (صفة قبل اسم)\n• Questo è bello = هذا حلو (ضمير بدل الاسم)\n(ملحوظة: buono هي الصفة الصحيحة التي تصف الاسم؛ bene ظرف يصف الفعل مثل 'sto bene' ليس الاسم مباشرة)."
      },
      {
        "type": "table",
        "title": "Questo — للقريب (هذا / هذه / هؤلاء / هؤلاء)",
        "headers": [
          "",
          "مفرد",
          "جمع"
        ],
        "rows": [
          [
            "مذكر",
            "Questo (هذا)",
            "Questi (هؤلاء)"
          ],
          [
            "مؤنث",
            "Questa (هذه)",
            "Queste (هؤلاء)"
          ]
        ]
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Questo libro è interessante",
            "ar": "هذا الكتاب شيّق"
          },
          {
            "it": "Questa casa è bella",
            "ar": "البيت هذا جميل"
          },
          {
            "it": "Questi ragazzi sono simpatici",
            "ar": "هؤلاء الشباب لطفاء"
          },
          {
            "it": "Queste scarpe sono nuove",
            "ar": "الجزم هذه جديدة"
          }
        ]
      },
      {
        "type": "note",
        "ar": "⚠️ لو questo/questa جت قبل كلمة تبدأ بحرف متحرك (a,e,i,o,u)، بنحذف الـ o أو الـ a ونضيف علامة ': Quest'uomo (الراجل هذا) وليس Questo uomo — Quest'amica (الصاحبة هذه) وليس Questa amica."
      },
      {
        "type": "table",
        "title": "Quello — للبعيد (بيتغيّر شكله مثل أداة التعريف)",
        "headers": [
          "الحالة",
          "مذكر",
          "مؤنث"
        ],
        "rows": [
          [
            "عادي (قبل حرف ساكن)",
            "Quel (ذلك) — Quei (أولئك)",
            "Quella (تلك) — Quelle (أولئك)"
          ],
          [
            "قبل s+ساكن / z / gn / ps",
            "Quello (ذلك) — Quegli (أولئك)",
            "Quella (تلك) — Quelle (أولئك)"
          ],
          [
            "قبل حرف متحرك",
            "Quell' (ذلك) — Quegli (أولئك)",
            "Quell' (تلك) — Quelle (أولئك)"
          ]
        ]
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Quel ragazzo è alto",
            "ar": "الشاب هذا طويل"
          },
          {
            "it": "Quei libri sono vecchi",
            "ar": "الكتب هذه قديمة"
          },
          {
            "it": "Quella ragazza è bella",
            "ar": "البنت هذه جميلة"
          },
          {
            "it": "Quelle case sono grandi",
            "ar": "البيوت هذه كبيرة"
          },
          {
            "it": "Quello studente è bravo",
            "ar": "الطالب هذا شاطر"
          },
          {
            "it": "Quegli zaini sono vecchi",
            "ar": "شنط الظهر هذه قديمة"
          },
          {
            "it": "Quell'uomo è simpatico",
            "ar": "الراجل هذا لطيف"
          },
          {
            "it": "Quegli studenti studiano",
            "ar": "الطلبة هؤلاء بيذاكروا"
          },
          {
            "it": "Quell'amica è gentile",
            "ar": "الصاحبة هذه ذوق"
          }
        ]
      },
      {
        "type": "item",
        "it": "Pronome (لما questo/quello يحلّوا محل الاسم بالكامل)",
        "ar": "",
        "examples": [
          {
            "it": "Quale preferisci? Questo o quello?",
            "ar": "بتفضل ما؟ هذا ولا هذا؟"
          },
          {
            "it": "Questa è la mia borsa",
            "ar": "هذه شنطتي"
          },
          {
            "it": "Quelli sono i miei amici",
            "ar": "هؤلاء أصحابي"
          },
          {
            "it": "Prendo quella",
            "ar": "هاخد هذه"
          }
        ]
      }
    ]
  },
  {
    "id": "indefiniti",
    "it": "I pronomi indefiniti",
    "ar": "الضمائر غير المحددة (المجهولة)",
    "icon": "🔹",
    "triggers": [
      "qualcosa",
      "qualcuno",
      "chiunque",
      "ognuno",
      "nulla",
      "niente",
      "tutto",
      "tutta",
      "tutti",
      "tutte",
      "nessuno",
      "nessuna",
      "alcuno",
      "alcuna",
      "alcuni",
      "alcune",
      "molto",
      "molta",
      "molti",
      "molte",
      "poco",
      "poca",
      "pochi",
      "poche",
      "troppa",
      "troppi",
      "troppe",
      "tanto",
      "tanta",
      "tanti",
      "tante",
      "parecchio",
      "parecchia",
      "parecchi",
      "parecchie",
      "altro",
      "altra",
      "altri",
      "altre",
      "certo",
      "certa",
      "certi",
      "certe"
    ],
    "blocks": [
      {
        "type": "item",
        "it": "أولاً — ضمائر ثابتة (لا تتغير)",
        "ar": "",
        "examples": [
          {
            "it": "Qualcosa (شيء ما)",
            "ar": "Ho comprato qualcosa per te — اشتريت شيء لكيك"
          },
          {
            "it": "Qualcuno (حد ما)",
            "ar": "Qualcuno ha bussato alla porta — في حد خبط على الباب"
          },
          {
            "it": "Chiunque (أي حد / أياً كان) — للعاقل فقط، والفعل بعدها دائماً مفرد",
            "ar": "Chiunque può sbagliare — أي حد ممكن يخطأ"
          },
          {
            "it": "Ognuno (كل واحد)",
            "ar": "Ognuno deve fare il suo dovere — كل واحد لازم يعمل واجبه"
          },
          {
            "it": "Nulla / Niente (لا شيء) — لو جت بعد الفعل لازم نحط Non قبل الفعل",
            "ar": "Non ho detto niente — ما قلتش شيء"
          }
        ]
      },
      {
        "type": "table",
        "title": "ثانياً — تتغير حسب الجنس والعدد",
        "headers": [
          "مذكر مفرد",
          "مؤنث مفرد",
          "مذكر جمع",
          "مؤنث جمع",
          "المعنى"
        ],
        "rows": [
          [
            "Tutto",
            "Tutta",
            "Tutti",
            "Tutte",
            "كل / الجميع"
          ],
          [
            "Nessuno",
            "Nessuna",
            "—",
            "—",
            "لا أحد / محدش"
          ],
          [
            "Alcuno",
            "Alcuna",
            "Alcuni",
            "Alcune",
            "بعض / أيّ (المفرد غالبًا مع النفي)"
          ]
        ]
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Ho capito tutto",
            "ar": "فهمت كل شيء"
          },
          {
            "it": "Nessuno è venuto alla festa",
            "ar": "محدش جه الحفلة"
          },
          {
            "it": "Alcuni pensano diversamente",
            "ar": "البعض بيفكر بشكل مختلف"
          }
        ]
      },
      {
        "type": "table",
        "title": "ثالثاً — ضمائر الكمية المبهمة",
        "headers": [
          "الصيغة (مذكر مفرد/مؤنث مفرد/مذكر جمع/مؤنث جمع)",
          "المعنى",
          "مثال"
        ],
        "rows": [
          [
            "Molto/Molta/Molti/Molte",
            "كثيرًا",
            "Ho molti amici in Italia — عندي أصحاب كثيرًا في إيطاليا"
          ],
          [
            "Poco/Poca/Pochi/Poche",
            "قليل",
            "Ho pochi soldi oggi — معايا فلوس قليلة النهاردة"
          ],
          [
            "Troppo/Troppa/Troppi/Troppe",
            "أكتر من اللازم",
            "Non mangiare troppo — ماتاكلش أكتر من اللازم"
          ],
          [
            "Tanto/Tanta/Tanti/Tante",
            "كثيرًا جداً",
            "Ho passato tanti guai — مريت بمشاكل كثيرًا جداً"
          ],
          [
            "Parecchio/Parecchia/Parecchi/Parecchie",
            "كذا واحد / كثيرًا نوعاً ما",
            "Ho studiato parecchio oggi — ذاكرت كثيرًا النهاردة"
          ]
        ]
      },
      {
        "type": "table",
        "title": "رابعاً — ضمائر التمييز والتحديد",
        "headers": [
          "الصيغة",
          "المعنى",
          "مثال"
        ],
        "rows": [
          [
            "Altro/Altra/Altri/Altre",
            "شيء/واحد مرة أخرى/غيره",
            "Questa penna non scrive, ne voglio un'altra — القلم هذا لا يكتب، عايز قلمًا غيره"
          ],
          [
            "Certo/Certa/Certi/Certe",
            "معيّن/بعض (وأيضًا تُستخدم كتعبير 'طبعاً!' لوحدها)",
            "Certi dicono la verità — البعض بيقول الحقيقة / Certo! — طبعاً!"
          ]
        ]
      }
    ]
  },
  {
    "id": "improprie",
    "it": "Preposizioni improprie",
    "ar": "حروف الجر غير الأصلية",
    "icon": "🧭",
    "triggers": [
      "dove",
      "destra",
      "sinistra",
      "sopra",
      "sotto",
      "dentro",
      "fuori",
      "dietro",
      "davanti",
      "lungo",
      "vicino",
      "lontano",
      "prima",
      "dopo",
      "durante",
      "verso",
      "fino",
      "senza",
      "contro",
      "secondo",
      "oltre",
      "nonostante",
      "tranne",
      "eccetto",
      "salvo",
      "mediante",
      "tramite"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "'حروف الجر غير الأصلية' هي كلمات أصلها ظرف أو صفة أو اسم، لكنها بقت تُستخدم كحرف جر مع كلمة أخرى (مثل vicino a, davanti a, dietro a...). هذه أهمها:"
      },
      {
        "type": "item",
        "it": "1) المكان والاتجاهات",
        "ar": "",
        "examples": [
          {
            "it": "Dove (فين) — ظرف استفهامي/ظرف مكان، وليس حرف جر",
            "ar": "Non sa ancora dove andare — لسه غير عارف يروح فين"
          },
          {
            "it": "a Destra (على اليمين)",
            "ar": "La banca è a destra — البنك على اليمين"
          },
          {
            "it": "a Sinistra (على اليسار)",
            "ar": "La farmacia è a sinistra — الصيدلية على اليسار"
          },
          {
            "it": "Sopra (فوق)",
            "ar": "Il libro è sopra il tavolo — الكتاب فوق الترابيزة"
          },
          {
            "it": "Sotto (تحت)",
            "ar": "Il gatto è sotto il letto — القطة تحت السرير"
          },
          {
            "it": "Dentro (جوّة)",
            "ar": "Entra dentro la casa — ادخل جوة البيت"
          },
          {
            "it": "Fuori (برّة)",
            "ar": "Lui è fuori ufficio — هو برة المكتب"
          },
          {
            "it": "Dietro (ورا/خلف)",
            "ar": "La macchina è dietro il bus — السيارة ورا الأتوبيس"
          },
          {
            "it": "Davanti (قدام/أمام)",
            "ar": "Fermati davanti al cinema — قف قدام السينما"
          },
          {
            "it": "Lungo (على طول/بمحاذاة)",
            "ar": "Camminiamo lungo il fiume — بنمشي على طول النهر"
          },
          {
            "it": "Vicino (a) (جنب/قريب من)",
            "ar": "Vicino a me — جنبي/قريب مني"
          },
          {
            "it": "Lontano (da) (بعيد عن)",
            "ar": "Lontano da te — بعيد عنك"
          }
        ]
      },
      {
        "type": "item",
        "it": "2) الزمن",
        "ar": "",
        "examples": [
          {
            "it": "Prima di (قبل)",
            "ar": "Prima di dormire, leggo il Corano — قبل ما أنام باقرأ القرآن"
          },
          {
            "it": "Dopo (بعد)",
            "ar": "Dopo la scuola, torno a casa — بعد المدرسة برجع البيت"
          },
          {
            "it": "Durante (خلال/أثناء)",
            "ar": "Durante la lezione, ascolto il professore — أثناء الدرس باستمع إلى الأستاذ"
          },
          {
            "it": "Verso (حوالي)",
            "ar": "Arrivo verso le otto — هوصل حوالي الساعة ٨"
          },
          {
            "it": "Fino a (لحد)",
            "ar": "Lavoro fino alle sei — بشتغل لحد الساعة ٦"
          }
        ]
      },
      {
        "type": "item",
        "it": "3) حروف جر غير أصلية أخرى",
        "ar": "",
        "examples": [
          {
            "it": "Senza (بدون)",
            "ar": "Esco senza il telefono — أخرج بدون الهاتف"
          },
          {
            "it": "Contro (ضد/عكس)",
            "ar": "Sono contro questa idea — أنا ضد الفكرة هذه"
          },
          {
            "it": "Secondo (حسب/وفقاً لـ)",
            "ar": "Secondo me, è una buona idea — من رأيي هذه فكرة جيدة"
          },
          {
            "it": "Oltre (بعد/غير)",
            "ar": "Oltre il ponte c'è una scuola — بعد الكوبري في مدرسة"
          },
          {
            "it": "Nonostante (بالرغم من)",
            "ar": "Nonostante la pioggia, usciamo — بالرغم من المطر بنخرج"
          },
          {
            "it": "Tranne (إلا/ما عدا)",
            "ar": "Sono arrivati tutti tranne Marco — كلهم وصلوا إلا ماركو"
          },
          {
            "it": "Eccetto (باستثناء)",
            "ar": "Mangio tutto eccetto il pesce — آكل كل شيء باستثناء السمك"
          },
          {
            "it": "Salvo (إلا/باستثناء)",
            "ar": "Tutti erano presenti salvo Anna — كل الناس كانت موجودة إلا آنا"
          },
          {
            "it": "Mediante (بواسطة)",
            "ar": "Il pagamento avviene mediante bonifico — الدفع بيتم بواسطة تحويل بنكي"
          },
          {
            "it": "Tramite (عن طريق)",
            "ar": "Ti mando il file tramite email — هبعتلك الملف عن طريق الإيميل"
          }
        ]
      }
    ]
  },
    {
    "id": "ausiliari_passato",
    "it": "الفعل المساعد Avere / Essere",
    "ar": "تصريف الفعلين المساعدين للـ Passato Prossimo",
    "icon": "🔧",
    "triggers": [
      "ho",
      "hai",
      "ha",
      "abbiamo",
      "avete",
      "hanno",
      "sono",
      "sei",
      "è",
      "siamo",
      "siete"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "كل فعل في الـ Passato Prossimo بيتكوّن من فعل مساعد (Avere أو Essere) + Participio Passato. الفعل المساعد هو الذي بيتصرّف حسب الفاعل، ليس الفعل الأساسي."
      },
      {
        "type": "table",
        "title": "Avere (الأكثر استخدامًا)",
        "headers": [
          "الضمير",
          "التصريف"
        ],
        "rows": [
          [
            "Io (أنا)",
            "Ho"
          ],
          [
            "Tu (أنت)",
            "Hai"
          ],
          [
            "Lui/Lei (هو/هي)",
            "Ha"
          ],
          [
            "Noi (نحن)",
            "Abbiamo"
          ],
          [
            "Voi (انتو)",
            "Avete"
          ],
          [
            "Loro (هم)",
            "Hanno"
          ]
        ]
      },
      {
        "type": "table",
        "title": "Essere (لأفعال الحركة والتحوّل والانعكاسية)",
        "headers": [
          "الضمير",
          "التصريف"
        ],
        "rows": [
          [
            "Io (أنا)",
            "Sono"
          ],
          [
            "Tu (أنت)",
            "Sei"
          ],
          [
            "Lui/Lei (هو/هي)",
            "È"
          ],
          [
            "Noi (نحن)",
            "Siamo"
          ],
          [
            "Voi (انتو)",
            "Siete"
          ],
          [
            "Loro (هم)",
            "Sono"
          ]
        ]
      },
      {
        "type": "note",
        "ar": "⚠️ لما نستخدم Essere، الـ Participio Passato بيتفق مع الفاعل في الجنس والعدد (مثل الصفة): Sono andato (مذكر) — Sono andata (مؤنث) — Sono andati (جمع مذكر) — Sono andate (جمع مؤنث). أما مع Avere فالـ Participio يبقى ثابتًا في العادة."
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Ho mangiato un panino",
            "ar": "أكلت شطيرة"
          },
          {
            "it": "Siamo andati al parco",
            "ar": "رحنا الحديقة"
          },
          {
            "it": "Hanno comprato la spesa",
            "ar": "اشتروا المشتريات"
          }
        ]
      }
    ]
  },
  {
    "id": "pronomi_soggetto",
    "it": "Pronomi personali soggetto",
    "ar": "الضمائر الشخصية الفاعلة",
    "icon": "🙋",
    "triggers": [
      "io",
      "tu",
      "lui",
      "lei",
      "noi",
      "voi",
      "loro"
    ],
    "blocks": [
      {
        "type": "table",
        "title": "الضمائر الشخصية",
        "headers": [
          "Italiano",
          "بالعربي"
        ],
        "rows": [
          [
            "Io",
            "أنا"
          ],
          [
            "Tu",
            "أنت"
          ],
          [
            "Lui",
            "هو"
          ],
          [
            "Lei",
            "هي"
          ],
          [
            "Noi",
            "نحن"
          ],
          [
            "Voi",
            "انتو"
          ],
          [
            "Loro",
            "هم"
          ]
        ]
      },
      {
        "type": "note",
        "ar": "في الإيطالي عادةً بنشيل الضمير لأن تصريف الفعل بنفسه يدل على الفاعل (Ho mangiato = أكلت، ليس لازم أقول Io ho mangiato). لكن نستخدم الضمير في حالتين: للتوكيد أو المقارنة (Io sì, ma lui no)، أو لو التصريف نفسه ممكن يلتبس مثل Lui/Lei في بعض الأزمنة."
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Lui ha telefonato, non lei",
            "ar": "هو الذي اتصل، ليس هي"
          },
          {
            "it": "Noi eravamo a casa mentre loro erano fuori",
            "ar": "نحن كنا في البيت وهم كانوا برة"
          }
        ]
      }
    ]
  },
  {
    "id": "prep_semplici",
    "it": "Preposizioni semplici e articolate",
    "ar": "حروف الجر المركّبة (المدمجة مع أداة التعريف)",
    "icon": "🔗",
    "triggers": [],
    "blocks": [
      {
        "type": "note",
        "ar": "حروف الجر الأساسية هي di, a, da, in, con, su, per, tra, fra. لما di/a/da/in/su يقابلوا أداة تعريف، غالبًا يندمجوا في كلمة واحدة اسمها Preposizione articolata."
      },
      {
        "type": "table",
        "title": "حروف الجر الأصلية",
        "headers": [
          "الحرف",
          "المعاني الأساسية",
          "مثال"
        ],
        "rows": [
          [
            "Di",
            "من / خاص بـ / عن",
            "Parlo di grammatica"
          ],
          [
            "A",
            "إلى / في / عند",
            "Vado a scuola"
          ],
          [
            "Da",
            "من / عند / منذ",
            "Vengo da Roma"
          ],
          [
            "In",
            "في / إلى",
            "Sono in ufficio"
          ],
          [
            "Con",
            "مع / بواسطة",
            "Parlo con Marco"
          ],
          [
            "Su",
            "على / عن",
            "Il libro è sul tavolo"
          ],
          [
            "Per",
            "لـ / من أجل / لمدة",
            "Studio per due ore"
          ],
          [
            "Tra / Fra",
            "بين / خلال / بعد",
            "Parto fra due giorni"
          ]
        ]
      },
      {
        "type": "table",
        "title": "الدمج مع أدوات التعريف",
        "headers": [
          "العائلة",
          "الصيغ"
        ],
        "rows": [
          [
            "Di",
            "del, dello, della, dei, degli, delle"
          ],
          [
            "A",
            "al, allo, alla, ai, agli, alle"
          ],
          [
            "Da",
            "dal, dallo, dalla, dai, dagli, dalle"
          ],
          [
            "In",
            "nel, nello, nella, nei, negli, nelle"
          ],
          [
            "Su",
            "sul, sullo, sulla, sui, sugli, sulle"
          ]
        ]
      },
      {
        "type": "item",
        "it": "أمثلة عملية",
        "ar": "",
        "examples": [
          {
            "it": "Il libro del professore è sul tavolo",
            "ar": "كتاب المدرس على الطاولة"
          },
          {
            "it": "Vado alla stazione e poi entro nello studio",
            "ar": "أذهب إلى المحطة ثم أدخل إلى الاستوديو"
          },
          {
            "it": "Imparo dagli errori e parlo agli studenti",
            "ar": "أتعلم من الأخطاء وأتحدث إلى الطلاب"
          }
        ]
      },
      {
        "type": "note",
        "ar": "⚠️ Con و per و tra و fra لا تندمج عادةً مع أداة التعريف في الإيطالية القياسية الحديثة. توجد col/coi مع con لكنها أقل شمولًا من con il / con i."
      }
    ]
  },
  {
    "id": "articoli_determinativi",
    "it": "Articoli determinativi",
    "ar": "أدوات التعريف",
    "icon": "🔤",
    "triggers": [
      "il",
      "lo",
      "la",
      "i",
      "gli",
      "le"
    ],
    "blocks": [
      {
        "type": "table",
        "title": "أدوات التعريف",
        "headers": [
          "الأداة",
          "تستخدم مع",
          "الجمع"
        ],
        "rows": [
          [
            "Il",
            "مذكر مفرد (الحالة العادية)",
            "I"
          ],
          [
            "Lo",
            "مذكر مفرد بيبدأ بـ s+ساكن / z / gn / ps",
            "Gli"
          ],
          [
            "La",
            "مؤنث مفرد (الحالة العادية)",
            "Le"
          ],
          [
            "L'",
            "مفرد (مذكر أو مؤنث) بيبدأ بحرف متحرك (a,e,i,o,u)",
            "Gli (مذكر) / Le (مؤنث)"
          ]
        ]
      },
      {
        "type": "note",
        "ar": "القاعدة الأساسية: نوع وشكل الأداة بيتحدد حسب أول حرف في الكلمة التي جاية بعدها مباشرة، ليس حسب معنى الكلمة."
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Il lunedì vado in ufficio",
            "ar": "الإثنين بروح المكتب"
          },
          {
            "it": "Lo studente arriva la mattina",
            "ar": "الطالب بييجي الصبح"
          },
          {
            "it": "La sera guardo la TV, ma non sempre",
            "ar": "بالليل باتفرج تلفزيون، بس مش دايمًا"
          },
          {
            "it": "L'amico arriva quando finisce il lavoro",
            "ar": "صاحبي بييجي لما يخلص الشغل"
          },
          {
            "it": "Gli studenti studiano ogni pomeriggio",
            "ar": "الطلبة بيذاكروا كل بعد ظهر"
          },
          {
            "it": "Le chiavi sono sul tavolo",
            "ar": "المفاتيح على الترابيزة"
          }
        ]
      }
    ]
  },
  {
    "id": "avverbio_modo",
    "it": "Avverbio di modo",
    "ar": "ظرف الحال (كيف حصل الفعل)",
    "icon": "⚡",
    "triggers": [
      "velocemente",
      "lentamente"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "ظرف الحال يصف طريقة أداء الفعل (حصل كيف؟)، وشكله ثابت ليس بيتأثر بجنس ولا عدد ولا زمن. بيتكوّن غالباً بإضافة mente لآخر الصفة."
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Lui guida velocemente",
            "ar": "هو بيسوق بسرعة"
          },
          {
            "it": "Lei parla lentamente",
            "ar": "هي تتحدث ببطء"
          },
          {
            "it": "Ho fatto colazione in fretta",
            "ar": "أكلت فطار على عجلة"
          }
        ]
      },
      {
        "type": "note",
        "ar": "💡 في الكلام العامي كثيرًا يُستخدموا الصفة نفسها كظرف بدل الصيغة الرسمية: Fai veloce! (أنجز/أسرع!) بدل Fai velocemente. وفي صيغ المقارنة: più velocemente di... (بسرعة أكتر من...)، والتفضيل: il più velocemente possibile (بأسرع ما يمكن)."
      }
    ]
  },
  {
    "id": "avverbi_tempo",
    "it": "Gli avverbi di tempo",
    "ar": "ظروف الزمن",
    "icon": "⏰",
    "triggers": [
      "già",
      "ancora",
      "appena",
      "mai",
      "sempre",
      "più"
    ],
    "blocks": [
      {
        "type": "table",
        "title": "المعنى الأساسي لكل ظرف",
        "headers": [
          "الظرف",
          "المعنى",
          "مثال"
        ],
        "rows": [
          [
            "Già",
            "بالفعل / خلاص",
            "Ho già fatto i compiti — انهيت الواجب بالفعل"
          ],
          [
            "Ancora (+Non)",
            "لسة (لو جت مع النفي)",
            "Non ho ancora finito — لسة مأنهيتش"
          ],
          [
            "Appena (وسط الجملة)",
            "أول ما / حالاً",
            "Appena arrivo, ti chiamo — أول ما أوصل هكلمك"
          ],
          [
            "Mai (+Non)",
            "أبداً (لو جت مع النفي)",
            "Non sono mai stato lì — عمري ما رحت هناك"
          ],
          [
            "Sempre",
            "دائماً",
            "Ho sempre detto la verità — كنت باقول الحقيقة دائماً"
          ],
          [
            "Più (+Non)",
            "مبقاش / لم يعد (لو جت مع النفي)",
            "Non voglio più fumare — مبقتش تريد أدخن"
          ]
        ]
      },
      {
        "type": "table",
        "title": "نفس الظرف من غير نفي — معنى مختلف",
        "headers": [
          "الظرف",
          "المعنى",
          "مثال"
        ],
        "rows": [
          [
            "Già",
            "صحيح / فعلاً (كتعبير)",
            "Già, hai ragione — صحيح، عندك حق"
          ],
          [
            "Ancora (من غير نفي)",
            "لسة / أيضًا",
            "Studio ancora — لسه بدرس / Vuoi ancora caffè? — تريد قهوة أيضًا؟"
          ],
          [
            "Appena (بعد الفعل الماضي)",
            "ما زال حالاً / للتو",
            "Ahmed è appena arrivato — أول ما أحمد وصل"
          ],
          [
            "Più (من غير نفي)",
            "أكتر / عادة",
            "Voglio più tempo — عايز وقت أكتر"
          ]
        ]
      },
      {
        "type": "note",
        "ar": "⚠️ الكلمات هذه (già / ancora / appena / mai / sempre / più) لما تأتي في الـ Passato Prossimo بتتحشر بالظبط بين الفعل المساعد (Avere/Essere) والـ Participio Passato: Ho già mangiato — ليس Ho mangiato già."
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Ho già finito i compiti la sera",
            "ar": "خلصت الواجب بالفعل بالليل"
          },
          {
            "it": "Non ho ancora mangiato stamattina",
            "ar": "لسه ما اكلتش النهاردة الصبح"
          },
          {
            "it": "Appena arrivo la mattina, ti chiamo",
            "ar": "أول ما أوصل الصبح هكلمك"
          },
          {
            "it": "Non sono mai stato lì di domenica",
            "ar": "عمري ما رحت هناك يوم حد"
          },
          {
            "it": "Studio sempre la sera, quindi sono stanco",
            "ar": "بذاكر دايمًا بالليل، فبكون تعبان"
          },
          {
            "it": "Non lavoro più il sabato",
            "ar": "مبقتش أشتغل يوم السبت"
          }
        ]
      }
    ]
  },
  {
    "id": "nomi_sostantivi",
    "it": "I nomi e i sostantivi",
    "ar": "كلمات أسماء متفرقة",
    "icon": "📦",
    "triggers": [
      "inizio",
      "fine",
      "volta",
      "momento",
      "problema",
      "motivo",
      "modo",
      "parte",
      "cosa",
      "posto",
      "idea",
      "domanda",
      "risposta"
    ],
    "blocks": [
      {
        "type": "item",
        "it": "كلمات مهمة",
        "ar": "",
        "examples": [
          {
            "it": "Inizio",
            "ar": "البداية"
          },
          {
            "it": "Fine",
            "ar": "النهاية"
          },
          {
            "it": "Volta",
            "ar": "مرة (مثل: una volta = مرة واحدة، due volte = مرتين)"
          },
          {
            "it": "prima volta",
            "ar": "أول مرة"
          },
          {
            "it": "ultima volta",
            "ar": "آخر مرة"
          },
          {
            "it": "ogni volta",
            "ar": "كل مرة"
          },
          {
            "it": "qualche volta",
            "ar": "بعض المرات / أحيانًا"
          },
          {
            "it": "molte volte",
            "ar": "مرات كتير"
          },
          {
            "it": "poche volte",
            "ar": "مرات قليلة"
          },
          {
            "it": "di nuovo",
            "ar": "مرة تانية / من جديد"
          },
          {
            "it": "Momento",
            "ar": "لحظة / وقت معيّن"
          },
          {
            "it": "Problema",
            "ar": "مشكلة"
          },
          {
            "it": "Motivo",
            "ar": "سبب / داعي"
          },
          {
            "it": "Modo",
            "ar": "طريقة / أسلوب"
          },
          {
            "it": "Parte",
            "ar": "جزء"
          },
          {
            "it": "Cosa",
            "ar": "حاجة / شيء"
          },
          {
            "it": "Posto",
            "ar": "مكان"
          },
          {
            "it": "Idea",
            "ar": "فكرة"
          },
          {
            "it": "Domanda",
            "ar": "سؤال"
          },
          {
            "it": "Risposta",
            "ar": "إجابة"
          }
        ]
      }
    ]
  },
  {
    "id": "giorni_settimana",
    "it": "I giorni della settimana",
    "ar": "أيام الأسبوع",
    "icon": "📅",
    "triggers": [
      "lunedì",
      "martedì",
      "mercoledì",
      "giovedì",
      "venerdì",
      "sabato",
      "domenica"
    ],
    "blocks": [
      {
        "type": "table",
        "title": "أيام الأسبوع",
        "headers": [
          "Italiano",
          "بالعربي"
        ],
        "rows": [
          [
            "Lunedì",
            "الإثنين"
          ],
          [
            "Martedì",
            "الثلاثاء"
          ],
          [
            "Mercoledì",
            "الأربعاء"
          ],
          [
            "Giovedì",
            "الخميس"
          ],
          [
            "Venerdì",
            "الجمعة"
          ],
          [
            "Sabato",
            "السبت"
          ],
          [
            "Domenica",
            "الحد"
          ]
        ]
      },
      {
        "type": "note",
        "ar": "للعادة المتكررة: Ogni + اليوم (Ogni lunedì = كل إثنين). للمدى الزمني من يوم لآخر: Dal...alla (Studio dal lunedì alla domenica = بدرس من الإثنين للحد)."
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Ogni lunedì mattina vado in palestra",
            "ar": "كل إثنين الصبح بروح الجيم"
          },
          {
            "it": "Studio dal lunedì al venerdì, ma non il sabato",
            "ar": "بذاكر من الإثنين للجمعة، بس مش السبت"
          },
          {
            "it": "La domenica sera sono sempre stanco",
            "ar": "يوم الحد بالليل بكون تعبان دايمًا"
          },
          {
            "it": "Il mercoledì ho già finito presto",
            "ar": "يوم الأربعاء بخلص بدري بالفعل"
          }
        ]
      }
    ]
  },
  {
    "id": "momenti_giornata",
    "it": "I momenti della giornata",
    "ar": "أوقات اليوم",
    "icon": "🌅",
    "triggers": [
      "alba",
      "mattina",
      "mattino",
      "mezzogiorno",
      "pomeriggio",
      "tramonto",
      "sera",
      "notte",
      "mezzanotte"
    ],
    "blocks": [
      {
        "type": "table",
        "title": "أوقات اليوم",
        "headers": [
          "Italiano",
          "بالعربي"
        ],
        "rows": [
          [
            "L'alba",
            "الفجر"
          ],
          [
            "La mattina",
            "الصباح"
          ],
          [
            "Il mattino",
            "الصباح الباكر (مثل la mattina لكن أكتر أدبية)"
          ],
          [
            "Il mezzogiorno",
            "الظهر"
          ],
          [
            "Il pomeriggio",
            "بعد الظهر / العصر"
          ],
          [
            "Il tramonto",
            "الغروب"
          ],
          [
            "La sera",
            "المساء"
          ],
          [
            "La notte",
            "الليل"
          ],
          [
            "La mezzanotte",
            "منتصف الليل"
          ]
        ]
      },
      {
        "type": "note",
        "ar": "للعادة: Ogni + الوقت (Ogni mattina = كل صباح). للمدى الزمني: Dalla...alla (Dalla mattina alla sera = من الصبح للمسا)."
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "La mattina bevo il caffè, mentre mio fratello dorme ancora",
            "ar": "الصبح باشرب قهوة، وأخويا لسه نايم"
          },
          {
            "it": "Il pomeriggio è già tardi per uscire",
            "ar": "العصر بقى متأخر يخرج فيه"
          },
          {
            "it": "Non esco mai di notte da solo",
            "ar": "عمري ما باخرج بالليل لوحدي"
          },
          {
            "it": "Ogni venerdì sera guardo un film",
            "ar": "كل يوم جمعة بالليل باتفرج فيلم"
          }
        ]
      }
    ]
  },
  {
    "id": "pronomi_complemento",
    "it": "Pronomi diretti, indiretti, riflessivi e tonici",
    "ar": "ضمائر المفعول (مباشر/غير مباشر/انعكاسي/توكيد)",
    "icon": "📥",
    "triggers": [
      "mi",
      "ti",
      "ci",
      "vi",
      "si",
      "li",
      "me",
      "te"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "هذه ضمائر تحل محل المفعول به لكي الكلام يبقى طبيعي أكتر: Vedo la ragazza (أشاهد الفتاة) ← La vedo (أشاهدها) أطبع من ناحية الأسلوب من تكرار الاسم."
      },
      {
        "type": "table",
        "title": "ضمائر المفعول المباشر الضعيفة (Pronomi diretti)",
        "headers": [
          "مفرد",
          "الجمع"
        ],
        "rows": [
          [
            "Mi (ـني)",
            "Ci (ـنا)"
          ],
          [
            "Ti (ـك)",
            "Vi (ـكم)"
          ],
          [
            "Lo (ه) / La (ها)",
            "Li (هم) / Le (هن)"
          ]
        ]
      },
      {
        "type": "note",
        "ar": "⚠️ الضمير الضعيف بييجي قبل الفعل (ليس مثل العربي): Ogni mattina il professore mi vede (كل يوم الأستاذ يراني)، ليس vede me."
      },
      {
        "type": "table",
        "title": "ضمائر المفعول الغير مباشر (Pronomi indiretti)",
        "headers": [
          "مفرد",
          "الجمع"
        ],
        "rows": [
          [
            "Mi (لي)",
            "Ci (لنا)"
          ],
          [
            "Ti (لك)",
            "Vi (لكم)"
          ],
          [
            "Gli (له) / Le (لها)",
            "Gli / Loro (لهم)"
          ]
        ]
      },
      {
        "type": "table",
        "title": "الضمائر الانعكاسية (Pronomi riflessivi) — لما الفاعل هو المفعول به",
        "headers": [
          "Io",
          "Tu",
          "Lui/Lei",
          "Noi",
          "Voi",
          "Loro"
        ],
        "rows": [
          [
            "Mi (نفسي)",
            "Ti (نفسك)",
            "Si (نفسه/نفسها)",
            "Ci (أنفسنا)",
            "Vi (أنفسكم)",
            "Si (أنفسهم)"
          ]
        ]
      },
      {
        "type": "item",
        "it": "أمثلة على الانعكاسي",
        "ar": "",
        "examples": [
          {
            "it": "Ti svegli",
            "ar": "بتصحى (بتصحي نفسك)"
          },
          {
            "it": "Si veste",
            "ar": "هو بيلتبس / هي تلبس"
          },
          {
            "it": "Vi sedete",
            "ar": "بتقعدوا"
          }
        ]
      },
      {
        "type": "table",
        "title": "ضمائر التوكيد Tonici/Forti (بعد حروف الجر: di, a, da, con, per, su...)",
        "headers": [
          "مفرد",
          "الجمع"
        ],
        "rows": [
          [
            "Me (أنا)",
            "Noi (نحن)"
          ],
          [
            "Te (أنت)",
            "Voi (انتو)"
          ],
          [
            "Lui / Lei / Sé",
            "Loro / Sé"
          ]
        ]
      },
      {
        "type": "note",
        "ar": "⚠️ التبعية الجنسية في الماضي: لو الضمير lo/la/li/le جه قبل فعل بالـ Passato Prossimo (حتى مع Avere)، الـ Participio بيتفق معاه في الجنس والعدد: Ho comprato il libro → L'ho comprato / Ho comprato la borsa → L'ho comprata / Li ho comprati / Le ho comprate."
      }
    ]
  },
  {
    "id": "congiunzioni",
    "it": "Le congiunzioni",
    "ar": "أدوات الربط",
    "icon": "🔀",
    "triggers": [
      "ed",
      "inoltre",
      "né",
      "ma",
      "e",
      "però",
      "tuttavia",
      "o",
      "oppure",
      "perché",
      "poiché",
      "siccome",
      "quindi",
      "dunque",
      "perciò",
      "se",
      "anche",
      "pure",
      "mentre"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "حروف الوصل تربط كلمات أو جملًا وتوضح العلاقة بينها: إضافة، تضاد، اختيار، سبب، نتيجة، شرط أو زمن."
      },
      {
        "type": "table",
        "title": "الأنواع الأساسية",
        "headers": [
          "النوع",
          "الحروف",
          "المعنى"
        ],
        "rows": [
          [
            "إضافة Copulative",
            "e/ed, anche, pure, inoltre, né…né",
            "و، أيضًا، علاوة على ذلك، لا…ولا"
          ],
          [
            "تضاد Avversative",
            "ma, però, tuttavia",
            "لكن، مع ذلك"
          ],
          [
            "اختيار Disgiuntive",
            "o, oppure",
            "أو"
          ],
          [
            "سبب Causali",
            "perché, poiché, siccome",
            "لأن / بما أن"
          ],
          [
            "نتيجة Conclusive",
            "quindi, dunque, perciò, per questo",
            "لذلك / إذن / لهذا السبب"
          ],
          [
            "شرط Condizionali",
            "se, anche se",
            "إذا / حتى لو"
          ],
          [
            "زمن Temporali",
            "mentre, quando, dopo che, prima che",
            "أثناء / عندما / بعد أن / قبل أن"
          ]
        ]
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Anche Marco e pure Anna sono venuti",
            "ar": "ماركو وكذلك آنا حضرا"
          },
          {
            "it": "Non mangio né carne né pesce",
            "ar": "لا آكل لحمًا ولا سمكًا"
          },
          {
            "it": "Era tardi, però abbiamo continuato",
            "ar": "كان الوقت متأخرًا لكننا واصلنا"
          },
          {
            "it": "Pioveva, quindi siamo rimasti dentro",
            "ar": "كانت تمطر لذلك بقينا بالداخل"
          },
          {
            "it": "Sono uscito perché avevo un appuntamento",
            "ar": "خرجت لأن عندي موعد"
          },
          {
            "it": "Se hai tempo, chiamami",
            "ar": "إذا كان عندك وقت فاتصل بي"
          },
          {
            "it": "Ho perso il treno, per questo sono in ritardo",
            "ar": "فاتني القطر، لهذا السبب أنا متأخر"
          }
        ]
      },
      {
        "type": "item",
        "it": "Anche — أيضاً (الأكثر شيوعاً، والأوفق للمكتوب)",
        "ar": "",
        "examples": [
          {
            "it": "Anche Marco viene alla festa",
            "ar": "ماركو أيضاً قادم إلى الحفل"
          },
          {
            "it": "Anche io lavoro qui",
            "ar": "أنا أيضاً أعمل هنا"
          }
        ]
      },
      {
        "type": "item",
        "it": "Pure — المعنى نفسه، لكنها أقل شيوعاً وأقرب إلى المحكية، وتفيد أحياناً الإذن أو التشجيع",
        "ar": "",
        "examples": [
          {
            "it": "Pure mio fratello lavora in centro",
            "ar": "وأخي أيضاً يعمل في المركز"
          },
          {
            "it": "Entra pure!",
            "ar": "ادخل ولا حرج!"
          }
        ]
      },
      {
        "type": "note",
        "ar": "💡 الموضع يغيّر المعنى: تسبق anche وpure الكلمة التي يُراد توكيدها. «Anche tu hai ragione» (أنت أيضاً معك حق) تختلف عن «Hai ragione anche tu»."
      },
      {
        "type": "note",
        "ar": "⚠️ في النفي لا تُستعمل anche، بل neanche / nemmeno: «Neanche io vengo» (وأنا أيضاً لا آتي)، ولا يقال «Anche io non vengo»."
      },
      {
        "type": "item",
        "it": "Mentre — التزامن الزمني (أثناء)",
        "ar": "",
        "examples": [
          {
            "it": "Ho mangiato un panino mentre guardavo la TV",
            "ar": "أكلت شطيرة وأنا كنت أشاهد التلفاز"
          },
          {
            "it": "Mangiavo la pasta mentre guardavo il telefono",
            "ar": "كنت آكل المعكرونة وأنا كنت أنظر إلى الهاتف"
          },
          {
            "it": "Hai studiato la lezione mentre ascoltavi la radio",
            "ar": "ذاكرت الدرس وأنت كنت تسمع المذياع"
          }
        ]
      },
      {
        "type": "note",
        "ar": "Mentre تربط بين حدثين حدثا في نفس الوقت في الماضي. النمط الأكثر شيوعاً: حدث مستمر بالـ Imperfetto (كان مستمرًا في الخلفية، مثل mentre guardavo la TV) + حدث آخر بالـ Passato Prossimo (حصل فجأة أو قاطعه، مثل ho mangiato un panino) — لكن يمكن أيضًا كلاهما يكون Imperfetto لو الحدثين مستمرين معًا بنفس الدرجة."
      },
      {
        "type": "note",
        "ar": "⚠️ الفرق بين Mentre و Quando: Mentre تركّز على استمرارية الحدثين معًا (مثل 'في نفس اللحظة هذه')، أما Quando غالباً تقدّم لحظة معينة وقف عندها فعل مرة أخرى (مثل 'عندما حدث كذا'). في الكلام العادي كثيرًا لا يفرّق المتحدثون بينهما، لكن هذه القاعدة الأساسية."
      },
      {
        "type": "note",
        "ar": "⚠️ Ed تُستخدم بدل e غالبًا قبل كلمة تبدأ بحرف e لتسهيل النطق. لا تُستخدم آليًا قبل كل حرف متحرك."
      },
      {
        "type": "item",
        "it": "أمثلة إضافية لباقي الأدوات",
        "ar": "",
        "examples": [
          {
            "it": "Vengo io ed Elena",
            "ar": "أنا هاجي وإيلينا"
          },
          {
            "it": "Il pomeriggio è libero; inoltre non ho compiti",
            "ar": "بعد الضهر فاضي؛ كمان معنديش واجب"
          },
          {
            "it": "Voglio uscire, ma piove",
            "ar": "عايز أخرج، بس بتمطر"
          },
          {
            "it": "Era stanco, tuttavia ha continuato a lavorare",
            "ar": "كان تعبان، مع ذلك كمل يشتغل"
          },
          {
            "it": "Vieni lunedì o martedì?",
            "ar": "هتيجي الإثنين ولا الثلاثاء؟"
          },
          {
            "it": "Possiamo uscire la sera, oppure restare a casa",
            "ar": "نقدر نخرج بالليل، أو نقعد البيت"
          },
          {
            "it": "Poiché era già tardi, siamo tornati a casa",
            "ar": "بما إنه كان متأخر بالفعل، رجعنا البيت"
          },
          {
            "it": "Siccome piove sempre di sabato, resto a casa",
            "ar": "بما إن الدنيا بتمطر دايمًا يوم السبت، بقعد البيت"
          },
          {
            "it": "Ho perso il treno, dunque arrivo tardi",
            "ar": "فاتني القطر، يبقى هوصل متأخر"
          },
          {
            "it": "Non ho tempo, perciò non vengo",
            "ar": "معنديش وقت، لذلك مش هاجي"
          },
          {
            "it": "Esco anche se piove",
            "ar": "بخرج حتى لو بتمطر"
          },
          {
            "it": "Ti chiamo quando arrivo la sera",
            "ar": "هكلمك لما أوصل بالليل"
          },
          {
            "it": "Usciamo dopo che finisce la lezione",
            "ar": "نخرج بعد ما تخلص الحصة"
          },
          {
            "it": "Arriva prima che inizi il film",
            "ar": "بييجي قبل ما يبدأ الفيلم"
          }
        ]
      }
    ]
  },
  {
    "id": "parole_multitasking",
    "it": "Parole multitasking",
    "ar": "كلمات بمعاني/استخدامات متعددة",
    "icon": "🧩",
    "triggers": [
      "troppo",
      "mezzo"
    ],
    "blocks": [
      {
        "type": "item",
        "it": "Troppo",
        "ar": "كثيرًا جداً — تعبير أقوى من Molto",
        "note": "لو جت قبل صفة أو فعل، شكلها ثابت وتصبح بمعنى 'جداً': Io sono troppo stanco (أنا تعبان جداً جداً). لو جت قبل اسم، بتتصرف كصفة مبهمة وتتبع الاسم في الجنس والعدد: Troppi compiti (واجبات كثيرًا جداً)",
        "examples": [
          {
            "it": "Io sono troppo stanco",
            "ar": "أنا تعبان جداً جداً"
          },
          {
            "it": "Troppi compiti",
            "ar": "واجبات كثيرًا جداً"
          }
        ]
      },
      {
        "type": "item",
        "it": "Mezzo",
        "ar": "نصف / منتصف / وسيلة — كلمة بتلاقيها بأكتر من معنى",
        "note": "1) بمعنى نصف: لو جت قبل اسم تتبعه في الجنس والعدد (Un mezzo chilo = نصف كيلو، Una mezza ora = نص ساعة). 2) بمعنى وسيلة: مثل mezzi di trasporto (وسائل المواصلات). 3) بمعنى المنتصف: مثل nel mezzo (في النص).",
        "examples": [
          {
            "it": "Un mezzo chilo",
            "ar": "نصف كيلو"
          },
          {
            "it": "Una mezza ora",
            "ar": "نص ساعة"
          },
          {
            "it": "Mezzi di trasporto",
            "ar": "وسائل المواصلات"
          },
          {
            "it": "Nel mezzo",
            "ar": "في النص"
          }
        ]
      }
    ]
  },
  {
    "id": "aggettivi_vari",
    "it": "Aggettivi qualificativi متفرقة",
    "ar": "صفات مهمة (مقارنة/تفضيل)",
    "icon": "⭐",
    "triggers": [
      "migliore",
      "veloce",
      "diverso"
    ],
    "blocks": [
      {
        "type": "item",
        "it": "Migliore",
        "ar": "أفضل",
        "note": "صفة تنتهي بـ e — لا تتغير في الجنس، لكن تتغير في الجمع: Migliori. لو جت بعد أداة تعريف + صفة ملكية تصبح Superlativo relativo (الأفضل/الأعز): il mio migliore amico",
        "examples": [
          {
            "it": "Il mio migliore amico",
            "ar": "أعز أصدقائي"
          }
        ]
      },
      {
        "type": "item",
        "it": "Veloce",
        "ar": "سريع",
        "note": "من المجموعة التي بتنتهي بـ e، وتصف الاسم وتأتي بعده. بتتستخدم أيضًا كظرف بمعنى 'بسرعة' بدل Velocemente في الكلام العامي (Fai veloce! = أسرع!)",
        "examples": [
          {
            "it": "Un treno veloce",
            "ar": "قطر سريع"
          },
          {
            "it": "Macchine veloci",
            "ar": "عربيات سريعة (جمع)"
          },
          {
            "it": "Più veloce di...",
            "ar": "أسرع من... (مقارنة)"
          },
          {
            "it": "Il più veloce",
            "ar": "الأسرع (تفضيل)"
          }
        ]
      },
      {
        "type": "item",
        "it": "Diverso",
        "ar": "مختلف / متنوع / آخر",
        "note": "من المجموعة التي بتنتهي بـ o، فتتغير حسب الجنس والعدد. لو جت قبل الاسم في صيغة الجمع تأخذ معنى 'عدة/عديد من' بدل 'مختلف'",
        "examples": [
          {
            "it": "Un modo diverso",
            "ar": "طريقة مختلفة"
          },
          {
            "it": "Qualcosa di diverso",
            "ar": "شيء مختلف (تعبير شائع)"
          },
          {
            "it": "Diverse cose",
            "ar": "عدة حاجات (ليس 'حاجات مختلفة')"
          }
        ]
      }
    ]
  },
  {
    "id": "prep_di",
    "it": "Preposizione DI",
    "ar": "لـ / من / عن / في",
    "icon": "🎨",
    "triggers": [
      "di",
      "del",
      "dello",
      "della",
      "dei",
      "degli",
      "delle",
      "dell'"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "Preposizione DI — المعاني الأساسية: لـ / من / عن / في. اللون المختلف يرمز لاستخدام مختلف لنفس حرف الجر."
      },
      {
        "type": "usage",
        "title": "الملكية والتخصيص",
        "meaning": "لـ / الخاص بـ",
        "description": "يربط الشيء بمالكه أو بما يخصه.",
        "color": "#e53935",
        "form": "di",
        "examples": [
          {
            "it": "Il telefono di Leo è nuovo",
            "ar": "تليفون ليو جديد",
            "form": "di",
            "words": [{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"telefono","ar":"تليفون","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"Leo","ar":"ليو (اسم علم)","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"nuovo","ar":"جديد","note":null,"type":"altro"}]
          },
          {
            "it": "La macchina di mio padre è rossa",
            "ar": "عربية أبويا حمرا",
            "form": "di",
            "words": [{"it":"La","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"macchina","ar":"عربية","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"mio","ar":"ـي","note":"صفة ملكية (مذكر)","type":"altro"},{"it":"padre","ar":"أب","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"rossa","ar":"حمرا","note":null,"type":"altro"}]
          },
          {
            "it": "Questo è il libro di Maria",
            "ar": "ده كتاب ماريا",
            "form": "di",
            "words": [{"it":"Questo","ar":"ده","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"libro","ar":"كتاب","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"Maria","ar":"ماريا (اسم علم)","note":null,"type":"altro"}]
          },
          {
            "it": "La casa dei miei nonni è grande",
            "ar": "بيت جدودي كبير",
            "form": "dei",
            "words": [{"it":"La","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"casa","ar":"بيت","note":null,"type":"altro"},{"it":"dei","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"miei","ar":"ـي","note":"صفة ملكية (جمع)","type":"altro"},{"it":"nonni","ar":"جدود","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"grande","ar":"كبير","note":null,"type":"altro"}]
          },
          {
            "it": "Ho letto le lettere di mia nonna",
            "ar": "قريت خطابات جدتي",
            "form": "di",
            "words": [{"it":"Ho","ar":"","type":"omesso","skipReason":"ausiliare","note":"جزء من الفعل المساعد"},{"it":"letto","ar":"قريت","note":"Leggere، Passato Prossimo","type":"verbo"},{"it":"le","ar":"ال","note":"أداة تعريف (جمع مؤنث)","type":"altro"},{"it":"lettere","ar":"خطابات","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"mia","ar":"ـي","note":"صفة ملكية (مؤنث)","type":"altro"},{"it":"nonna","ar":"جدة","note":null,"type":"altro"}]
          }
        ]
      },
      {
        "type": "usage",
        "title": "الأصل والمنشأ",
        "meaning": "من",
        "description": "مع المدن والأصل، ويأتي كثيرًا مع essere.",
        "color": "#1e88e5",
        "form": "di",
        "examples": [
          {
            "it": "Sono di Roma",
            "ar": "أنا من روما",
            "form": "di",
            "words": [{"it":"Sono","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"Roma","ar":"روما","note":null,"type":"altro"}]
          },
          {
            "it": "Lei è di Napoli",
            "ar": "هي من نابولي",
            "form": "di",
            "words": [{"it":"Lei","ar":"هي","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"Napoli","ar":"نابولي","note":null,"type":"altro"}]
          },
          {
            "it": "Il formaggio di questa zona è famoso",
            "ar": "الجبنة بتاعة المنطقة دي مشهورة",
            "form": "di",
            "words": [{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"formaggio","ar":"جبنة","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"questa","ar":"دي","note":null,"type":"altro"},{"it":"zona","ar":"منطقة","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"famoso","ar":"مشهور","note":null,"type":"altro"}]
          },
          {
            "it": "Marco è di origine italiana",
            "ar": "ماركو أصله إيطالي",
            "form": "di",
            "words": [{"it":"Marco","ar":"ماركو (اسم علم)","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"origine","ar":"أصل","note":null,"type":"altro"},{"it":"italiana","ar":"إيطالية","note":null,"type":"altro"}]
          },
          {
            "it": "Sono di Milano, e tu?",
            "ar": "أنا من ميلانو، وإنت؟",
            "form": "di",
            "words": [{"it":"Sono","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"Milano","ar":"ميلانو","note":null,"type":"altro"},{"it":"e","ar":"و","note":null,"type":"congiunzione"},{"it":"tu","ar":"أنت","note":null,"type":"altro"}]
          }
        ]
      },
      {
        "type": "usage",
        "title": "المادة المصنوع منها",
        "meaning": "من",
        "description": "يبين المادة التي صُنع منها الشيء.",
        "color": "#8e24aa",
        "form": "di",
        "examples": [
          {
            "it": "Il tavolo è di legno",
            "ar": "الطاولة من الخشب",
            "form": "di",
            "words": [{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"tavolo","ar":"طاولة","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"legno","ar":"خشب","note":null,"type":"altro"}]
          },
          {
            "it": "Ho un anello di oro",
            "ar": "عندي خاتم دهب",
            "form": "di",
            "words": [{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"anello","ar":"خاتم","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"oro","ar":"دهب","note":null,"type":"altro"}]
          },
          {
            "it": "La borsa è di pelle",
            "ar": "الشنطة جلد",
            "form": "di",
            "words": [{"it":"La","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"borsa","ar":"شنطة","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"pelle","ar":"جلد","note":null,"type":"altro"}]
          },
          {
            "it": "Questa maglia è di lana",
            "ar": "البلوزة دي صوف",
            "form": "di",
            "words": [{"it":"Questa","ar":"دي","note":null,"type":"altro"},{"it":"maglia","ar":"بلوزة صوف","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"lana","ar":"صوف","note":null,"type":"altro"}]
          },
          {
            "it": "La statua è di marmo",
            "ar": "التمثال رخام",
            "form": "di",
            "words": [{"it":"La","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"statua","ar":"تمثال","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"marmo","ar":"رخام","note":null,"type":"altro"}]
          }
        ]
      },
      {
        "type": "usage",
        "title": "الموضوع",
        "meaning": "عن",
        "description": "مع الكلام والكتابة والحديث عن موضوع.",
        "color": "#00897b",
        "form": "di",
        "examples": [
          {"it":"Parliamo di calcio","ar":"نتحدث عن كرة القدم","form":"di","words":[{"it":"Parliamo","ar":"بنتكلم","note":"Parlare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"calcio","ar":"كرة القدم","note":null,"type":"altro"}]},
          {"it":"Il film parla di guerra","ar":"الفيلم بيتكلم عن الحرب","form":"di","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"film","ar":"فيلم","note":null,"type":"altro"},{"it":"parla","ar":"بيتكلم","note":"Parlare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"guerra","ar":"حرب","note":null,"type":"altro"}]},
          {"it":"Scriviamo di storia","ar":"بنكتب عن التاريخ","form":"di","words":[{"it":"Scriviamo","ar":"بنكتب","note":"Scrivere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"storia","ar":"تاريخ","note":null,"type":"altro"}]},
          {"it":"Discutiamo di politica","ar":"بنناقش في السياسة","form":"di","words":[{"it":"Discutiamo","ar":"بنناقش","note":"Discutere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"politica","ar":"سياسة","note":null,"type":"altro"}]},
          {"it":"Non so niente di matematica","ar":"معرفش حاجة عن الرياضيات","form":"di","words":[{"it":"Non","ar":"لا","note":"أداة نفي","type":"altro"},{"it":"so","ar":"بعرف","note":"Sapere، Presente","type":"verbo"},{"it":"niente","ar":"حاجة","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"matematica","ar":"رياضيات","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "المحتوى أو النوع",
        "meaning": "في / عن",
        "description": "يحدد محتوى كتاب أو نوع شيء.",
        "color": "#fb8c00",
        "form": "di",
        "examples": [
          {
            "it": "Leggo un libro di storia",
            "ar": "أقرأ كتاب تاريخ",
            "form": "di",
            "words": [{"it":"Leggo","ar":"بقرأ","note":"Leggere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"libro","ar":"كتاب","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"storia","ar":"تاريخ","note":null,"type":"altro"}]
          },
          {
            "it": "Ho comprato un corso di italiano",
            "ar": "اشتريت كورس إيطالي",
            "form": "di",
            "words": [{"it":"Ho","ar":"","type":"omesso","skipReason":"ausiliare","note":"جزء من الفعل المساعد"},{"it":"comprato","ar":"اشتريت","note":"Comprare، Passato Prossimo","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"corso","ar":"كورس","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"italiano","ar":"إيطالي","note":null,"type":"altro"}]
          },
          {
            "it": "Voglio un bicchiere di vino",
            "ar": "عايز كباية نبيت",
            "form": "di",
            "words": [{"it":"Voglio","ar":"عايز","note":"Volere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"bicchiere","ar":"كباية","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"vino","ar":"نبيت","note":null,"type":"altro"}]
          },
          {
            "it": "È un film di avventura",
            "ar": "ده فيلم مغامرات",
            "form": "di",
            "words": [{"it":"È","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"film","ar":"فيلم","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"avventura","ar":"مغامرة","note":null,"type":"altro"}]
          },
          {
            "it": "Studio un corso di cucina",
            "ar": "بذاكر كورس طبخ",
            "form": "di",
            "words": [{"it":"Studio","ar":"بذاكر","note":"Studiare، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"corso","ar":"كورس","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"cucina","ar":"طبخ","note":null,"type":"altro"}]
          }
        ]
      },
      {
        "type": "usage",
        "title": "التعبير الزمني",
        "meaning": "في / أثناء",
        "description": "يستخدم مع أجزاء اليوم مثل di notte وdi giorno.",
        "color": "#43a047",
        "form": "di",
        "examples": [
          {
            "it": "Studio di notte",
            "ar": "أذاكر في الليل",
            "form": "di",
            "words": [{"it":"Studio","ar":"بذاكر","note":"Studiare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"notte","ar":"ليل","note":null,"type":"altro"}]
          },
          {
            "it": "Lavoro di giorno",
            "ar": "بشتغل بالنهار",
            "form": "di",
            "words": [{"it":"Lavoro","ar":"بشتغل","note":"Lavorare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"giorno","ar":"يوم","note":null,"type":"altro"}]
          },
          {
            "it": "Non esco mai di sera da solo",
            "ar": "عمري ما باخرج بالليل لوحدي",
            "form": "di",
            "words": [{"it":"Non","ar":"لا","note":"أداة نفي","type":"altro"},{"it":"esco","ar":"باخرج","note":"Uscire، Presente","type":"verbo"},{"it":"mai","ar":"أبدًا","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"sera","ar":"مساء","note":null,"type":"altro"},{"it":"da","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"solo","ar":"لوحدي","note":null,"type":"altro"}]
          },
          {
            "it": "Arriviamo di mattina presto",
            "ar": "نوصل الصبح بدري",
            "form": "di",
            "words": [{"it":"Arriviamo","ar":"نوصل","note":"Arrivare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"mattina","ar":"صباح","note":null,"type":"altro"},{"it":"presto","ar":"بدري","note":null,"type":"altro"}]
          },
          {
            "it": "Dormo di pomeriggio",
            "ar": "بنام بعد الضهر",
            "form": "di",
            "words": [{"it":"Dormo","ar":"بنام","note":"Dormire، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"pomeriggio","ar":"بعد الضهر","note":null,"type":"altro"}]
          }
        ]
      },
      {
        "type": "usage",
        "title": "الكمية أو الجزء",
        "meaning": "من",
        "description": "يأتي بعد كلمات الكمية أو الأوعية.",
        "color": "#d81b60",
        "form": "di",
        "examples": [
          {
            "it": "Bevo una tazza di caffè",
            "ar": "أشرب فنجانًا من القهوة",
            "form": "di",
            "words": [{"it":"Bevo","ar":"أشرب","note":"Bere، Presente","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"tazza","ar":"فنجان","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"caffè","ar":"قهوة","note":null,"type":"altro"}]
          },
          {
            "it": "Mangio un pezzo di pane",
            "ar": "باكل حتة عيش",
            "form": "di",
            "words": [{"it":"Mangio","ar":"باكل","note":"Mangiare، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"pezzo","ar":"حتة","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"pane","ar":"عيش","note":null,"type":"altro"}]
          },
          {
            "it": "Ho bisogno di un litro di latte",
            "ar": "محتاج لتر لبن",
            "form": "di",
            "words": [{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"bisogno","ar":"حاجة","note":"اسم — جزء من تعبير 'avere bisogno di' (يحتاج)","type":"altro"},{"it":"di","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"litro","ar":"لتر","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"latte","ar":"لبن","note":null,"type":"altro"}]
          },
          {
            "it": "Compro un chilo di mele",
            "ar": "بشتري كيلو تفاح",
            "form": "di",
            "words": [{"it":"Compro","ar":"بشتري","note":"Comprare، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"chilo","ar":"كيلو","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"mele","ar":"تفاح","note":null,"type":"altro"}]
          },
          {
            "it": "Voglio un po' di zucchero",
            "ar": "عايز شوية سكر",
            "form": "di",
            "words": [{"it":"Voglio","ar":"عايز","note":"Volere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"po'","ar":"شوية","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"zucchero","ar":"سكر","note":null,"type":"altro"}]
          }
        ]
      },
      {
        "type": "usage",
        "title": "السبب",
        "meaning": "من / بسبب",
        "description": "يعبّر عن سبب شعور أو حالة.",
        "color": "#5e35b1",
        "form": "di",
        "examples": [
          {
            "it": "Tremo di freddo",
            "ar": "أرتجف من البرد",
            "form": "di",
            "words": [{"it":"Tremo","ar":"أرتجف","note":"Tremare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"freddo","ar":"برد","note":null,"type":"altro"}]
          },
          {
            "it": "Piango di gioia",
            "ar": "بعيط من الفرح",
            "form": "di",
            "words": [{"it":"Piango","ar":"بعيط","note":"Piangere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"gioia","ar":"فرح","note":null,"type":"altro"}]
          },
          {
            "it": "Muoio di fame",
            "ar": "هموت من الجوع",
            "form": "di",
            "words": [{"it":"Muoio","ar":"بموت","note":"Morire، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"fame","ar":"جوع","note":null,"type":"altro"}]
          },
          {
            "it": "Grido di paura",
            "ar": "بصرخ من الخوف",
            "form": "di",
            "words": [{"it":"Grido","ar":"بصرخ","note":"Gridare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"paura","ar":"خوف","note":null,"type":"altro"}]
          },
          {
            "it": "Rido di felicità",
            "ar": "باضحك من السعادة",
            "form": "di",
            "words": [{"it":"Rido","ar":"باضحك","note":"Ridere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"felicità","ar":"سعادة","note":null,"type":"altro"}]
          }
        ]
      },
      {
        "type": "usage",
        "title": "الكيفية",
        "meaning": "بـ / على نحو",
        "description": "يظهر في تعبيرات ثابتة تصف طريقة الفعل.",
        "color": "#00acc1",
        "form": "di",
        "examples": [
          {
            "it": "Cammino di corsa",
            "ar": "أمشي مسرعًا",
            "form": "di",
            "words": [{"it":"Cammino","ar":"أمشي","note":"Camminare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"corsa","ar":"جري/سرعة","note":null,"type":"altro"}]
          },
          {
            "it": "Di solito parlo lentamente",
            "ar": "عادةً بتكلم ببطء",
            "form": "di",
            "words": [{"it":"Di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"solito","ar":"عادةً","note":null,"type":"altro"},{"it":"parlo","ar":"بتكلم","note":"Parlare، Presente","type":"verbo"},{"it":"lentamente","ar":"ببطء","note":null,"type":"altro"}]
          },
          {
            "it": "Vivo di rado in città",
            "ar": "نادرًا ما بعيش في المدينة",
            "form": "di",
            "words": [{"it":"Vivo","ar":"بعيش","note":"Vivere، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"rado","ar":"نادرًا","note":null,"type":"altro"},{"it":"in","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"città","ar":"مدينة","note":null,"type":"altro"}]
          },
          {
            "it": "Lavoro di nascosto",
            "ar": "بشتغل في الخفاء",
            "form": "di",
            "words": [{"it":"Lavoro","ar":"بشتغل","note":"Lavorare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"nascosto","ar":"خفية","note":null,"type":"altro"}]
          },
          {
            "it": "Guardo di sfuggita",
            "ar": "باتفرج بسرعة عابرة",
            "form": "di",
            "words": [{"it":"Guardo","ar":"باتفرج","note":"Guardare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"sfuggita","ar":"بسرعة عابرة","note":null,"type":"altro"}]
          }
        ]
      },
      {
        "type": "usage",
        "title": "تكملة الفعل بالمصدر",
        "meaning": "أن / بـ",
        "description": "بعض الأفعال تحتاج di قبل المصدر.",
        "color": "#6d4c41",
        "form": "di",
        "examples": [
          {
            "it": "Ho deciso di partire",
            "ar": "قررت أن أغادر",
            "form": "di",
            "words": [{"it":"Ho","ar":"","type":"omesso","skipReason":"ausiliare","note":"جزء من الفعل المساعد"},{"it":"deciso","ar":"قررت","note":"Decidere، Passato Prossimo","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"partire","ar":"أغادر","note":"Partire، مصدر","type":"verbo"}]
          },
          {
            "it": "Cerco di studiare ogni giorno",
            "ar": "بحاول أذاكر كل يوم",
            "form": "di",
            "words": [{"it":"Cerco","ar":"بحاول","note":"Cercare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"studiare","ar":"أذاكر","note":"Studiare، مصدر","type":"verbo"},{"it":"ogni","ar":"كل","note":null,"type":"altro"},{"it":"giorno","ar":"يوم","note":null,"type":"altro"}]
          },
          {
            "it": "Finisco di lavorare alle sei",
            "ar": "بخلص شغل الساعة 6",
            "form": "di",
            "words": [{"it":"Finisco","ar":"بخلص","note":"Finire، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"lavorare","ar":"أشتغل","note":"Lavorare، مصدر","type":"verbo"},{"it":"alle","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"sei","ar":"ستة","note":"رقم — هنا بمعنى الساعة 6","type":"altro"}]
          },
          {
            "it": "Mi dimentico sempre di chiamare",
            "ar": "دايمًا بنسى أتصل",
            "form": "di",
            "words": [{"it":"Mi","ar":"","note":"ضمير انعكاسي (جزء من الفعل dimenticarsi)","type":"altro"},{"it":"dimentico","ar":"بنسى","note":"Dimenticare، Presente","type":"verbo"},{"it":"sempre","ar":"دايمًا","note":null,"type":"altro"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"chiamare","ar":"أتصل","note":"Chiamare، مصدر","type":"verbo"}]
          },
          {
            "it": "Spero di vederti presto",
            "ar": "أتمنى أشوفك قريب",
            "form": "di",
            "words": [{"it":"Spero","ar":"أتمنى","note":"Sperare، Presente","type":"verbo"},{"it":"di","ar":"","type":"preposizione","grammarId":"prep_di","note":null},{"it":"vederti","ar":"أشوفك","note":"Vedere، مصدر + ضمير متصل","type":"verbo"},{"it":"presto","ar":"بدري","note":null,"type":"altro"}]
          }
        ]
      },
      {
        "type": "table",
        "title": "الصيغ المركبة مع أداة التعريف",
        "headers": [
          "المفرد/الجمع",
          "الصيغ"
        ],
        "rows": [
          [
            "DI",
            "di / del / dello / della / dei / degli / delle / dell'"
          ]
        ]
      }
    ]
  },
  {
    "id": "prep_a",
    "it": "Preposizione A",
    "ar": "إلى / في / لـ",
    "icon": "🎨",
    "triggers": [
      "a",
      "al",
      "allo",
      "alla",
      "ai",
      "agli",
      "alle",
      "all'"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "Preposizione A — المعاني الأساسية: إلى / في / لـ. اللون المختلف يرمز لاستخدام مختلف لنفس حرف الجر."
      },
      {
        "type": "usage",
        "title": "الاتجاه إلى مدينة أو مكان",
        "meaning": "إلى",
        "description": "يستخدم للحركة نحو مدينة أو مكان محدد.",
        "color": "#e53935",
        "form": "a",
        "examples": [
          {"it":"Vado a Milano","ar":"أذهب إلى ميلانو","form":"a","words":[{"it":"Vado","ar":"أذهب","note":"Andare، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"Milano","ar":"ميلانو","note":null,"type":"altro"}]},
          {"it":"Andiamo al mare domani","ar":"هنروح البحر بكرة","form":"al","words":[{"it":"Andiamo","ar":"هنروح","note":"Andare، Presente","type":"verbo"},{"it":"al","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"mare","ar":"بحر","note":null,"type":"altro"},{"it":"domani","ar":"بكرة","note":null,"type":"altro"}]},
          {"it":"Torno a casa presto","ar":"بارجع البيت بدري","form":"a","words":[{"it":"Torno","ar":"بارجع","note":"Tornare، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"casa","ar":"بيت","note":null,"type":"altro"},{"it":"presto","ar":"بدري","note":null,"type":"altro"}]},
          {"it":"Vai allo stadio stasera?","ar":"هتروح الاستاد الليلة؟","form":"allo","words":[{"it":"Vai","ar":"بتروح","note":"Andare، Presente","type":"verbo"},{"it":"allo","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"stadio","ar":"استاد","note":null,"type":"altro"},{"it":"stasera","ar":"الليلة","note":null,"type":"altro"}]},
          {"it":"Vai a scuola in autobus","ar":"بتروح المدرسة بالأتوبيس","form":"a","words":[{"it":"Vai","ar":"بتروح","note":"Andare، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"scuola","ar":"مدرسة","note":null,"type":"altro"},{"it":"in","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"autobus","ar":"أتوبيس","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "المكان مع مدينة",
        "meaning": "في",
        "description": "يستخدم للإقامة أو الوجود في مدينة.",
        "color": "#1e88e5",
        "form": "a",
        "examples": [
          {"it":"Vivo a Roma","ar":"أعيش في روما","form":"a","words":[{"it":"Vivo","ar":"أعيش","note":"Vivere، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"Roma","ar":"روما","note":null,"type":"altro"}]},
          {"it":"Abito a Napoli","ar":"أسكن في نابولي","form":"a","words":[{"it":"Abito","ar":"أسكن","note":"Abitare، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"Napoli","ar":"نابولي","note":null,"type":"altro"}]},
          {"it":"Lavoro a Milano","ar":"أشتغل في ميلانو","form":"a","words":[{"it":"Lavoro","ar":"أشتغل","note":"Lavorare، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"Milano","ar":"ميلانو","note":null,"type":"altro"}]},
          {"it":"Studio a Bologna","ar":"بذاكر في بولونيا","form":"a","words":[{"it":"Studio","ar":"بذاكر","note":"Studiare، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"Bologna","ar":"بولونيا","note":null,"type":"altro"}]},
          {"it":"Siamo a Firenze per lavoro","ar":"إحنا في فلورنسا للشغل","form":"a","words":[{"it":"Siamo","ar":"إحنا","note":"Essere، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"Firenze","ar":"فلورنسا","note":null,"type":"altro"},{"it":"per","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"lavoro","ar":"شغل","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الوقت والساعة",
        "meaning": "في تمام",
        "description": "يحدد الساعة أو لحظة زمنية دقيقة.",
        "color": "#8e24aa",
        "form": "alle",
        "examples": [
          {"it":"Arrivo alle tre","ar":"أصل في تمام الثالثة","form":"alle","words":[{"it":"Arrivo","ar":"أوصل","note":"Arrivare، Presente","type":"verbo"},{"it":"alle","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"tre","ar":"ثلاثة","note":"رقم — هنا بمعنى الساعة ٣","type":"altro"}]},
          {"it":"Il film inizia alle otto","ar":"الفيلم يبدأ الساعة ثمانية","form":"alle","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"film","ar":"فيلم","note":null,"type":"altro"},{"it":"inizia","ar":"بيبدأ","note":"Iniziare، Presente","type":"verbo"},{"it":"alle","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"otto","ar":"ثمانية","note":"رقم — هنا بمعنى الساعة ٨","type":"altro"}]},
          {"it":"Pranziamo a mezzogiorno","ar":"بنتغدى الساعة اتناشر الضهر","form":"a","words":[{"it":"Pranziamo","ar":"بنتغدى","note":"Pranzare، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"mezzogiorno","ar":"الساعة اتناشر الضهر","note":null,"type":"altro"}]},
          {"it":"Ceniamo alle nove di sera","ar":"بنتعشى الساعة تسعة بالليل","form":"alle","words":[{"it":"Ceniamo","ar":"بنتعشى","note":"Cenare، Presente","type":"verbo"},{"it":"alle","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"nove","ar":"تسعة","note":"رقم — هنا بمعنى الساعة ٩","type":"altro"},{"it":"di","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"sera","ar":"مساء","note":null,"type":"altro"}]},
          {"it":"Finiamo di lavorare alle sette","ar":"بنخلص الشغل الساعة سبعة","form":"alle","words":[{"it":"Finiamo","ar":"بنخلص","note":"Finire، Presente","type":"verbo"},{"it":"di","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"lavorare","ar":"أشتغل","note":"Lavorare، مصدر","type":"verbo"},{"it":"alle","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"sette","ar":"سبعة","note":"رقم — هنا بمعنى الساعة ٧","type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الطريقة",
        "meaning": "بـ / على",
        "description": "يصف طريقة الحركة أو أداء الفعل.",
        "color": "#00897b",
        "form": "a",
        "examples": [
          {"it":"Vado a piedi","ar":"أذهب مشيًا","form":"a","words":[{"it":"Vado","ar":"أذهب","note":"Andare، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"piedi","ar":"رجلين — هنا بمعنى مشيًا","note":null,"type":"altro"}]},
          {"it":"Scrivo a mano","ar":"بكتب بإيدي","form":"a","words":[{"it":"Scrivo","ar":"بكتب","note":"Scrivere، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"mano","ar":"إيد","note":null,"type":"altro"}]},
          {"it":"Parlo a bassa voce","ar":"بتكلم بصوت واطي","form":"a","words":[{"it":"Parlo","ar":"بتكلم","note":"Parlare، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"bassa","ar":"واطي","note":null,"type":"altro"},{"it":"voce","ar":"صوت","note":null,"type":"altro"}]},
          {"it":"Cucino tutto a occhio","ar":"باطبخ كل حاجة بالنظر","form":"a","words":[{"it":"Cucino","ar":"باطبخ","note":"Cucinare، Presente","type":"verbo"},{"it":"tutto","ar":"كل حاجة","note":null,"type":"altro"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"occhio","ar":"عين — هنا بالتخمين/النظر","note":null,"type":"altro"}]},
          {"it":"Faccio tutto a memoria","ar":"بعمل كل حاجة من الذاكرة","form":"a","words":[{"it":"Faccio","ar":"باعمل","note":"Fare، Presente","type":"verbo"},{"it":"tutto","ar":"كل حاجة","note":null,"type":"altro"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"memoria","ar":"ذاكرة","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الأداة في تعبير ثابت",
        "meaning": "بـ",
        "description": "يستخدم في بعض تعبيرات الوسيلة والأداة.",
        "color": "#fb8c00",
        "form": "a",
        "examples": [
          {"it":"Chiudo la porta a chiave","ar":"أغلق الباب بالمفتاح","form":"a","words":[{"it":"Chiudo","ar":"باقفل","note":"Chiudere، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"porta","ar":"باب","note":null,"type":"altro"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"chiave","ar":"مفتاح","note":null,"type":"altro"}]},
          {"it":"Cucino la pasta a fuoco lento","ar":"باطبخ المكرونة على نار هادية","form":"a","words":[{"it":"Cucino","ar":"باطبخ","note":"Cucinare، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"pasta","ar":"مكرونة","note":null,"type":"altro"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"fuoco","ar":"نار","note":null,"type":"altro"},{"it":"lento","ar":"هادي/بطيء","note":null,"type":"altro"}]},
          {"it":"Il quadro è dipinto a olio","ar":"اللوحة مرسومة بالألوان الزيتية","form":"a","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"quadro","ar":"لوحة","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"dipinto","ar":"مرسوم","note":"Dipingere، صفة مفعول (Participio Passato)","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"olio","ar":"زيت","note":null,"type":"altro"}]},
          {"it":"Scrivo la lettera a matita","ar":"باكتب الخطاب بالقلم الرصاص","form":"a","words":[{"it":"Scrivo","ar":"بكتب","note":"Scrivere، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"lettera","ar":"خطاب","note":null,"type":"altro"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"matita","ar":"قلم رصاص","note":null,"type":"altro"}]},
          {"it":"Cucino la carne alla griglia","ar":"باطبخ اللحمة على الشوايه","form":"alla","words":[{"it":"Cucino","ar":"باطبخ","note":"Cucinare، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"carne","ar":"لحمة","note":null,"type":"altro"},{"it":"alla","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"griglia","ar":"شواية","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "المفعول غير المباشر",
        "meaning": "لـ / إلى",
        "description": "يوصل الفعل بالشخص المتلقي.",
        "color": "#43a047",
        "form": "a",
        "examples": [
          {"it":"Telefono a Marco","ar":"أتصل بماركو","form":"a","words":[{"it":"Telefono","ar":"باتصل","note":"Telefonare، Presente","type":"verbo"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"Marco","ar":"ماركو (اسم علم)","note":null,"type":"altro"}]},
          {"it":"Scrivo una lettera a mia madre","ar":"باكتب خطاب لأمي","form":"a","words":[{"it":"Scrivo","ar":"بكتب","note":"Scrivere، Presente","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"lettera","ar":"خطاب","note":null,"type":"altro"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"mia","ar":"ـي","note":"صفة ملكية (مؤنث)","type":"altro"},{"it":"madre","ar":"أم","note":null,"type":"altro"}]},
          {"it":"Do il libro a Sara","ar":"باديّ الكتاب لسارة","form":"a","words":[{"it":"Do","ar":"باديّ","note":"Dare، Presente","type":"verbo"},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"libro","ar":"كتاب","note":null,"type":"altro"},{"it":"a","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"Sara","ar":"سارة (اسم علم)","note":null,"type":"altro"}]},
          {"it":"Chiedo un favore al mio amico","ar":"باطلب معروف من صاحبي","form":"al","words":[{"it":"Chiedo","ar":"باطلب","note":"Chiedere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"favore","ar":"معروف","note":null,"type":"altro"},{"it":"al","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"mio","ar":"ـي","note":"صفة ملكية (مذكر)","type":"altro"},{"it":"amico","ar":"صاحب","note":null,"type":"altro"}]},
          {"it":"Regalo un fiore alla mia ragazza","ar":"باهدي ورده لصاحبتي","form":"alla","words":[{"it":"Regalo","ar":"باهدي","note":"Regalare، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"fiore","ar":"ورده","note":null,"type":"altro"},{"it":"alla","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"mia","ar":"ـي","note":"صفة ملكية (مؤنث)","type":"altro"},{"it":"ragazza","ar":"صاحبة/بنت","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "المعدل والتكرار",
        "meaning": "في كل",
        "description": "يعبّر عن معدل التكرار.",
        "color": "#d81b60",
        "form": "al",
        "examples": [
          {"it":"Prendo la medicina due volte al giorno","ar":"آخذ الدواء مرتين في اليوم","form":"al","words":[{"it":"Prendo","ar":"باخد","note":"Prendere، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"medicina","ar":"دوا","note":null,"type":"altro"},{"it":"due","ar":"اتنين","note":null,"type":"altro"},{"it":"volte","ar":"مرات","note":null,"type":"altro"},{"it":"al","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"giorno","ar":"يوم","note":null,"type":"altro"}]},
          {"it":"Vado in palestra quattro volte alla settimana","ar":"باروح الجيم ٤ مرات في الأسبوع","form":"alla","words":[{"it":"Vado","ar":"أذهب","note":"Andare، Presente","type":"verbo"},{"it":"in","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"palestra","ar":"جيم","note":null,"type":"altro"},{"it":"quattro","ar":"أربعة","note":null,"type":"altro"},{"it":"volte","ar":"مرات","note":null,"type":"altro"},{"it":"alla","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"settimana","ar":"أسبوع","note":null,"type":"altro"}]},
          {"it":"Mangio la pizza una volta al mese","ar":"باكل بيتزا مرة في الشهر","form":"al","words":[{"it":"Mangio","ar":"باكل","note":"Mangiare، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"pizza","ar":"بيتزا","note":null,"type":"altro"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"volta","ar":"مرة","note":null,"type":"altro"},{"it":"al","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"mese","ar":"شهر","note":null,"type":"altro"}]},
          {"it":"Faccio la spesa una volta alla settimana","ar":"بعمل التسوق مرة في الأسبوع","form":"alla","words":[{"it":"Faccio","ar":"باعمل","note":"Fare، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"spesa","ar":"تسوق","note":null,"type":"altro"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"volta","ar":"مرة","note":null,"type":"altro"},{"it":"alla","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"settimana","ar":"أسبوع","note":null,"type":"altro"}]},
          {"it":"Guardo un film due volte al mese","ar":"باتفرج على فيلم مرتين في الشهر","form":"al","words":[{"it":"Guardo","ar":"باتفرج","note":"Guardare، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"film","ar":"فيلم","note":null,"type":"altro"},{"it":"due","ar":"اتنين","note":null,"type":"altro"},{"it":"volte","ar":"مرات","note":null,"type":"altro"},{"it":"al","ar":"","type":"preposizione","grammarId":"prep_a","note":null},{"it":"mese","ar":"شهر","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "table",
        "title": "الصيغ المركبة مع أداة التعريف",
        "headers": [
          "المفرد/الجمع",
          "الصيغ"
        ],
        "rows": [
          [
            "A",
            "a / al / allo / alla / ai / agli / alle / all'"
          ]
        ]
      }
    ]
  },
  {
    "id": "prep_da",
    "it": "Preposizione DA",
    "ar": "من / منذ / عند / بواسطة / لـ",
    "icon": "🎨",
    "triggers": [
      "da",
      "dal",
      "dallo",
      "dalla",
      "dai",
      "dagli",
      "dalle",
      "dall'"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "Preposizione DA — المعاني الأساسية: من / منذ / عند / بواسطة / لـ. اللون المختلف يرمز لاستخدام مختلف لنفس حرف الجر."
      },
      {
        "type": "usage",
        "title": "بداية زمن مستمر",
        "meaning": "منذ",
        "description": "مع مدة بدأت في الماضي وما زالت مستمرة.",
        "color": "#5e35b1",
        "form": "da",
        "examples": [
          {"it":"Vivo qui da due anni","ar":"أعيش هنا منذ سنتين","form":"da","words":[{"it":"Vivo","ar":"أعيش","note":"Vivere، Presente","type":"verbo"},{"it":"qui","ar":"هنا","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"due","ar":"اتنين","note":null,"type":"altro"},{"it":"anni","ar":"سنين","note":null,"type":"altro"}]},
          {"it":"Imparo la lingua italiana da un anno","ar":"بتعلّم اللغة الإيطالية من سنة","form":"da","words":[{"it":"Imparo","ar":"بتعلّم","note":"Imparare، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"lingua","ar":"لغة","note":null,"type":"altro"},{"it":"italiana","ar":"إيطالية","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"anno","ar":"سنة","note":null,"type":"altro"}]},
          {"it":"Lavoro in questa azienda da tre mesi","ar":"باشتغل في الشركة دي من ٣ شهور","form":"da","words":[{"it":"Lavoro","ar":"شغل","note":null,"type":"altro"},{"it":"in","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"questa","ar":"دي","note":null,"type":"altro"},{"it":"azienda","ar":"شركة","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"tre","ar":"ثلاثة","note":null,"type":"altro"},{"it":"mesi","ar":"شهور","note":null,"type":"altro"}]},
          {"it":"Aspetto l'autobus da venti minuti","ar":"باستنى الأتوبيس من عشرين دقيقة","form":"da","words":[{"it":"Aspetto","ar":"باستنى","note":"Aspettare، Presente","type":"verbo"},{"it":"l'autobus","ar":"الأتوبيس","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"venti","ar":"عشرين","note":null,"type":"altro"},{"it":"minuti","ar":"دقايق","note":null,"type":"altro"}]},
          {"it":"Conosco Marco da tanti anni","ar":"باعرف ماركو من سنين كتير","form":"da","words":[{"it":"Conosco","ar":"باعرف","note":"Conoscere، Presente","type":"verbo"},{"it":"Marco","ar":"ماركو (اسم علم)","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"tanti","ar":"كتير","note":null,"type":"altro"},{"it":"anni","ar":"سنين","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "القدوم أو الحركة من مصدر",
        "meaning": "من",
        "description": "يبين نقطة الانطلاق أو المصدر.",
        "color": "#00acc1",
        "form": "da",
        "examples": [
          {"it":"Vengo da Roma","ar":"أنا قادم من روما","form":"da","words":[{"it":"Vengo","ar":"جاي","note":"Venire، Presente","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"Roma","ar":"روما","note":null,"type":"altro"}]},
          {"it":"Torno dal lavoro","ar":"برجع من الشغل","form":"dal","words":[{"it":"Torno","ar":"بارجع","note":"Tornare، Presente","type":"verbo"},{"it":"dal","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"lavoro","ar":"شغل","note":null,"type":"altro"}]},
          {"it":"Esco da casa alle otto","ar":"باخرج من البيت الساعة ثمانية","form":"da","words":[{"it":"Esco","ar":"باخرج","note":"Uscire، Presente","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"casa","ar":"بيت","note":null,"type":"altro"},{"it":"alle","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"otto","ar":"ثمانية","note":"رقم — هنا بمعنى الساعة ٨","type":"altro"}]},
          {"it":"Il treno arriva da Milano","ar":"القطر جاي من ميلانو","form":"da","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"treno","ar":"قطر","note":null,"type":"altro"},{"it":"arriva","ar":"بيجي","note":"Arrivare، Presente","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"Milano","ar":"ميلانو","note":null,"type":"altro"}]},
          {"it":"Scendo dalla macchina","ar":"بنزل من العربية","form":"dalla","words":[{"it":"Scendo","ar":"بنزل","note":"Scendere، Presente","type":"verbo"},{"it":"dalla","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"macchina","ar":"عربية","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الذهاب عند شخص",
        "meaning": "عند / إلى",
        "description": "يستخدم للذهاب إلى منزل أو مكان شخص أو مهني.",
        "color": "#6d4c41",
        "form": "da",
        "examples": [
          {"it":"Vado da Marco","ar":"أذهب عند ماركو","form":"da","words":[{"it":"Vado","ar":"أذهب","note":"Andare، Presente","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"Marco","ar":"ماركو (اسم علم)","note":null,"type":"altro"}]},
          {"it":"Vado dal dottore","ar":"باروح عند الدكتور","form":"dal","words":[{"it":"Vado","ar":"أذهب","note":"Andare، Presente","type":"verbo"},{"it":"dal","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"dottore","ar":"دكتور","note":null,"type":"altro"}]},
          {"it":"Andiamo dalla nonna","ar":"بنروح عند الجدة","form":"dalla","words":[{"it":"Andiamo","ar":"بنروح","note":"Andare، Presente","type":"verbo"},{"it":"dalla","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"nonna","ar":"جدة","note":null,"type":"altro"}]},
          {"it":"Passo da te stasera","ar":"هعدي عندك الليلة","form":"da","words":[{"it":"Passo","ar":"هعدي","note":"Passare، Presente","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"te","ar":"ـك","note":"ضمير (أنت)","type":"altro"},{"it":"stasera","ar":"الليلة","note":null,"type":"altro"}]},
          {"it":"Torno da mia sorella","ar":"بارجع عند أختي","form":"da","words":[{"it":"Torno","ar":"بارجع","note":"Tornare، Presente","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"mia","ar":"ـي","note":"صفة ملكية (مؤنث)","type":"altro"},{"it":"sorella","ar":"أخت","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الفاعل في المبني للمجهول",
        "meaning": "من / بواسطة",
        "description": "يبين من قام بالفعل في الجملة المبنية للمجهول.",
        "color": "#e53935",
        "form": "da",
        "examples": [
          {"it":"Il libro è scritto da Maria","ar":"الكتاب مكتوب بواسطة ماريا","form":"da","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"libro","ar":"كتاب","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"scritto","ar":"مكتوب","note":"Scrivere، صفة مفعول (Participio Passato)","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"Maria","ar":"ماريا (اسم علم)","note":null,"type":"altro"}]},
          {"it":"La torta è preparata da mia madre","ar":"التورتة معمولة بواسطة أمي","form":"da","words":[{"it":"La","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"torta","ar":"تورتة","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"preparata","ar":"معمولة","note":"Preparare، صفة مفعول (Participio Passato)","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"mia","ar":"ـي","note":"صفة ملكية (مؤنث)","type":"altro"},{"it":"madre","ar":"أم","note":null,"type":"altro"}]},
          {"it":"Il quadro è dipinto da un artista famoso","ar":"اللوحة مرسومة بواسطة فنان مشهور","form":"da","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"quadro","ar":"لوحة","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"dipinto","ar":"مرسوم","note":"Dipingere، صفة مفعول (Participio Passato)","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"artista","ar":"فنان","note":null,"type":"altro"},{"it":"famoso","ar":"مشهور","note":null,"type":"altro"}]},
          {"it":"Il pane è fatto da mio padre","ar":"العيش معمول بواسطة أبويا","form":"da","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"pane","ar":"عيش","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"fatto","ar":"معمول","note":"Fare، صفة مفعول (Participio Passato)","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"mio","ar":"ـي","note":"صفة ملكية (مذكر)","type":"altro"},{"it":"padre","ar":"أب","note":null,"type":"altro"}]},
          {"it":"La lettera è scritta da Sara","ar":"الخطاب مكتوب بواسطة سارة","form":"da","words":[{"it":"La","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"lettera","ar":"خطاب","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"scritta","ar":"مكتوبة","note":"Scrivere، صفة مفعول (Participio Passato)","type":"verbo"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"Sara","ar":"سارة (اسم علم)","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الغرض أو الاستخدام",
        "meaning": "لـ",
        "description": "يصف وظيفة الشيء أو الغرض منه.",
        "color": "#1e88e5",
        "form": "da",
        "examples": [
          {"it":"Uso gli occhiali da sole","ar":"أستخدم نظارات الشمس","form":"da","words":[{"it":"Uso","ar":"باستخدم","note":"Usare، Presente","type":"verbo"},{"it":"gli","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"occhiali","ar":"نظارة","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"sole","ar":"شمس","note":null,"type":"altro"}]},
          {"it":"Ho una tazza da tè","ar":"عندي كباية شاي","form":"da","words":[{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"tazza","ar":"كباية","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"tè","ar":"شاي","note":null,"type":"altro"}]},
          {"it":"Compro un vestito da sera","ar":"باشتري فستان سهرة","form":"da","words":[{"it":"Compro","ar":"باشتري","note":"Comprare، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"vestito","ar":"فستان","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"sera","ar":"مساء","note":null,"type":"altro"}]},
          {"it":"Cerco scarpe da ginnastica","ar":"بدور على جزمة رياضة","form":"da","words":[{"it":"Cerco","ar":"بدور على","note":"Cercare، Presente","type":"verbo"},{"it":"scarpe","ar":"جزمة","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"ginnastica","ar":"رياضة","note":null,"type":"altro"}]},
          {"it":"Metto la giacca da lavoro","ar":"بلبس چاكيت الشغل","form":"da","words":[{"it":"Metto","ar":"بلبس/بحط","note":"Mettere، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"giacca","ar":"چاكيت","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"lavoro","ar":"شغل","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الصفة أو الميزة",
        "meaning": "ذو / ذات",
        "description": "يصف سمة مميزة، وغالبًا يأتي مركبًا مع أداة تعريف.",
        "color": "#8e24aa",
        "form": "dai",
        "examples": [
          {"it":"È una ragazza dai capelli neri","ar":"هي فتاة ذات شعر أسود","form":"dai","words":[{"it":"È","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"ragazza","ar":"بنت","note":null,"type":"altro"},{"it":"dai","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"capelli","ar":"شعر","note":null,"type":"altro"},{"it":"neri","ar":"سود","note":null,"type":"altro"}]},
          {"it":"È un uomo dagli occhi verdi","ar":"هو راجل ذو عيون خضرا","form":"dagli","words":[{"it":"È","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"uomo","ar":"راجل","note":null,"type":"altro"},{"it":"dagli","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"occhi","ar":"عيون","note":null,"type":"altro"},{"it":"verdi","ar":"خضرا","note":null,"type":"altro"}]},
          {"it":"È una casa dal tetto rosso","ar":"هو بيت ذو سقف أحمر","form":"dal","words":[{"it":"È","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"casa","ar":"بيت","note":null,"type":"altro"},{"it":"dal","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"tetto","ar":"سقف","note":null,"type":"altro"},{"it":"rosso","ar":"أحمر","note":null,"type":"altro"}]},
          {"it":"Ho un amico dal cuore grande","ar":"عندي صاحب ذو قلب كبير","form":"dal","words":[{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"amico","ar":"صاحب","note":null,"type":"altro"},{"it":"dal","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"cuore","ar":"قلب","note":null,"type":"altro"},{"it":"grande","ar":"كبير","note":null,"type":"altro"}]},
          {"it":"È un cane dalle orecchie grandi","ar":"هو كلب ذو ودان كبيرة","form":"dalle","words":[{"it":"È","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"cane","ar":"كلب","note":null,"type":"altro"},{"it":"dalle","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"orecchie","ar":"ودان","note":null,"type":"altro"},{"it":"grandi","ar":"كبيرة","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "شيء مطلوب فعله",
        "meaning": "يجب / قابل لـ",
        "description": "يأتي مع المصدر ليعني شيئًا يجب فعله.",
        "color": "#00897b",
        "form": "da",
        "examples": [
          {"it":"Ho molto da fare","ar":"عندي الكثير لأفعله","form":"da","words":[{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"molto","ar":"كتير","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"fare","ar":"أعمل","note":"Fare، مصدر","type":"verbo"}]},
          {"it":"Non c'è niente da dire","ar":"مفيش حاجة تتقال","form":"da","words":[{"it":"Non","ar":"لا","note":"أداة نفي","type":"altro"},{"it":"c'è","ar":"فيه","note":"Esserci، Presente (تعبير: فيه/موجود)","type":"verbo"},{"it":"niente","ar":"حاجة","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"dire","ar":"أقول","note":"Dire، مصدر","type":"verbo"}]},
          {"it":"Ho una lezione da preparare","ar":"عندي حصة لازم أحضرها","form":"da","words":[{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"lezione","ar":"حصة","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"preparare","ar":"أحضّر","note":"Preparare، مصدر","type":"verbo"}]},
          {"it":"C'è molto da studiare","ar":"فيه كتير للمذاكرة","form":"da","words":[{"it":"C'è","ar":"فيه","note":"Esserci، Presente (تعبير: فيه/موجود)","type":"verbo"},{"it":"molto","ar":"كتير","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"studiare","ar":"أذاكر","note":"Studiare، مصدر","type":"verbo"}]},
          {"it":"Non ho tempo da perdere","ar":"معنديش وقت أضيّعه","form":"da","words":[{"it":"Non","ar":"لا","note":"أداة نفي","type":"altro"},{"it":"ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"tempo","ar":"وقت","note":null,"type":"altro"},{"it":"da","ar":"","type":"preposizione","grammarId":"prep_da","note":null},{"it":"perdere","ar":"أضيّع","note":"Perdere، مصدر","type":"verbo"}]}
        ]
      },
      {
        "type": "table",
        "title": "الصيغ المركبة مع أداة التعريف",
        "headers": [
          "المفرد/الجمع",
          "الصيغ"
        ],
        "rows": [
          [
            "DA",
            "da / dal / dallo / dalla / dai / dagli / dalle / dall'"
          ]
        ]
      }
    ]
  },
  {
    "id": "prep_in",
    "it": "Preposizione IN",
    "ar": "في / إلى / بـ / خلال",
    "icon": "🎨",
    "triggers": [
      "in",
      "nel",
      "nello",
      "nella",
      "nei",
      "negli",
      "nelle",
      "nell'"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "Preposizione IN — المعاني الأساسية: في / إلى / بـ / خلال. اللون المختلف يرمز لاستخدام مختلف لنفس حرف الجر."
      },
      {
        "type": "usage",
        "title": "مكان داخلي أو محدود",
        "meaning": "في",
        "description": "للوجود داخل غرفة أو مؤسسة أو مكان مغلق.",
        "color": "#fb8c00",
        "form": "in",
        "examples": [
          {
            "it": "Sono in cucina",
            "ar": "أنا في المطبخ",
            "form": "in"
          }
        ]
      },
      {
        "type": "usage",
        "title": "الإقامة في دولة أو منطقة",
        "meaning": "في",
        "description": "مع الدول والقارات والمناطق.",
        "color": "#43a047",
        "form": "in",
        "examples": [
          {
            "it": "Vivo in Italia",
            "ar": "أعيش في إيطاليا",
            "form": "in"
          }
        ]
      },
      {
        "type": "usage",
        "title": "الاتجاه إلى دولة أو منطقة",
        "meaning": "إلى",
        "description": "للسفر إلى دولة أو قارة أو منطقة.",
        "color": "#d81b60",
        "form": "in",
        "examples": [
          {
            "it": "Vado in Italia",
            "ar": "أذهب إلى إيطاليا",
            "form": "in"
          }
        ]
      },
      {
        "type": "usage",
        "title": "وسيلة المواصلات",
        "meaning": "بـ",
        "description": "مع وسائل النقل غالبًا بدون أداة تعريف.",
        "color": "#5e35b1",
        "form": "in",
        "examples": [
          {
            "it": "Viaggio in treno",
            "ar": "أسافر بالقطار",
            "form": "in"
          }
        ]
      },
      {
        "type": "usage",
        "title": "الفترة أو الفصل",
        "meaning": "في",
        "description": "مع الفصول والسنوات والفترات العامة.",
        "color": "#00acc1",
        "form": "in",
        "examples": [
          {
            "it": "Parto in estate",
            "ar": "أسافر في الصيف",
            "form": "in"
          }
        ]
      },
      {
        "type": "usage",
        "title": "الكيفية أو الحالة",
        "meaning": "بـ / في حالة",
        "description": "يصف الطريقة أو الحالة التي يتم بها الفعل.",
        "color": "#6d4c41",
        "form": "in",
        "examples": [
          {
            "it": "Lavoro in silenzio",
            "ar": "أعمل في صمت",
            "form": "in"
          }
        ]
      },
      {
        "type": "usage",
        "title": "المدة اللازمة للإنجاز",
        "meaning": "خلال",
        "description": "يحدد الوقت المطلوب لإتمام شيء.",
        "color": "#e53935",
        "form": "in",
        "examples": [
          {
            "it": "Finisco in due ore",
            "ar": "أنتهي خلال ساعتين",
            "form": "in"
          }
        ]
      },
      {
        "type": "table",
        "title": "الصيغ المركبة مع أداة التعريف",
        "headers": [
          "المفرد/الجمع",
          "الصيغ"
        ],
        "rows": [
          [
            "IN",
            "in / nel / nello / nella / nei / negli / nelle / nell'"
          ]
        ]
      }
    ]
  },
  {
    "id": "prep_con",
    "it": "Preposizione CON",
    "ar": "مع / بـ / ذو",
    "icon": "🎨",
    "triggers": [
      "con",
      "col",
      "coi"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "Preposizione CON — المعاني الأساسية: مع / بـ / ذو. اللون المختلف يرمز لاستخدام مختلف لنفس حرف الجر."
      },
      {
        "type": "usage",
        "title": "المصاحبة",
        "meaning": "مع",
        "description": "مرافقة شخص أو حيوان.",
        "color": "#1e88e5",
        "form": "con",
        "examples": [
          {"it":"Passeggio con Marco","ar":"أتمشى مع ماركو","form":"con","words":[{"it":"Passeggio","ar":"أتمشى","note":"Passeggiare، Presente","type":"verbo"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"Marco","ar":"ماركو (اسم علم)","note":null,"type":"altro"}]},
          {"it":"Vado al cinema con i miei amici","ar":"باروح السينما مع أصحابي","form":"con","words":[{"it":"Vado","ar":"باروح","note":"Andare، Presente","type":"verbo"},{"it":"al","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"cinema","ar":"سينما","note":null,"type":"altro"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"i","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"miei","ar":"ـي","note":"صفة ملكية (جمع)","type":"altro"},{"it":"amici","ar":"أصحاب","note":null,"type":"altro"}]},
          {"it":"Vivo con mia sorella","ar":"باعيش مع أختي","form":"con","words":[{"it":"Vivo","ar":"باعيش","note":"Vivere، Presente","type":"verbo"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"mia","ar":"ـي","note":"صفة ملكية (مؤنث)","type":"altro"},{"it":"sorella","ar":"أخت","note":null,"type":"altro"}]},
          {"it":"Gioco a calcio coi compagni","ar":"بلعب كورة مع زمايلي","form":"coi","words":[{"it":"Gioco","ar":"بلعب","note":"Giocare، Presente","type":"verbo"},{"it":"a","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"calcio","ar":"كورة","note":null,"type":"altro"},{"it":"coi","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"compagni","ar":"زمايل","note":null,"type":"altro"}]},
          {"it":"Parto in vacanza con la famiglia","ar":"بسافر إجازة مع العيلة","form":"con","words":[{"it":"Parto","ar":"بسافر","note":"Partire، Presente","type":"verbo"},{"it":"in","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"vacanza","ar":"إجازة","note":null,"type":"altro"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"famiglia","ar":"عيلة","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الأداة أو الوسيلة",
        "meaning": "بـ / باستخدام",
        "description": "يحدد الأداة المستعملة لعمل الفعل.",
        "color": "#8e24aa",
        "form": "con",
        "examples": [
          {"it":"Scrivo con la penna","ar":"أكتب بالقلم","form":"con","words":[{"it":"Scrivo","ar":"أكتب","note":"Scrivere، Presente","type":"verbo"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"penna","ar":"قلم","note":null,"type":"altro"}]},
          {"it":"Taglio il pane col coltello","ar":"باقطع العيش بالسكين","form":"col","words":[{"it":"Taglio","ar":"باقطع","note":"Tagliare، Presente","type":"verbo"},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"pane","ar":"عيش","note":null,"type":"altro"},{"it":"col","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"coltello","ar":"سكين","note":null,"type":"altro"}]},
          {"it":"Apro la porta con la chiave","ar":"بافتح الباب بالمفتاح","form":"con","words":[{"it":"Apro","ar":"بافتح","note":"Aprire، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"porta","ar":"باب","note":null,"type":"altro"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"chiave","ar":"مفتاح","note":null,"type":"altro"}]},
          {"it":"Mangio la pasta con la forchetta","ar":"باكل المكرونة بالشوكة","form":"con","words":[{"it":"Mangio","ar":"باكل","note":"Mangiare، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"pasta","ar":"مكرونة","note":null,"type":"altro"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"forchetta","ar":"شوكة","note":null,"type":"altro"}]},
          {"it":"Chiamo con il telefono","ar":"باتصل بالتليفون","form":"con","words":[{"it":"Chiamo","ar":"باتصل","note":"Chiamare، Presente","type":"verbo"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"telefono","ar":"تليفون","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الكيفية",
        "meaning": "بـ / مع",
        "description": "يصف الطريقة التي حدث بها الفعل.",
        "color": "#00897b",
        "form": "con",
        "examples": [
          {"it":"Parlo con gentilezza","ar":"أتحدث بلطف","form":"con","words":[{"it":"Parlo","ar":"أتحدث","note":"Parlare، Presente","type":"verbo"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"gentilezza","ar":"لطف","note":null,"type":"altro"}]},
          {"it":"Lavoro con impegno","ar":"باشتغل بجدية","form":"con","words":[{"it":"Lavoro","ar":"باشتغل","note":"Lavorare، Presente","type":"verbo"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"impegno","ar":"جدية","note":null,"type":"altro"}]},
          {"it":"Guido con attenzione","ar":"باسوق بحرص","form":"con","words":[{"it":"Guido","ar":"باسوق","note":"Guidare، Presente","type":"verbo"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"attenzione","ar":"حرص/انتباه","note":null,"type":"altro"}]},
          {"it":"Rispondo con sincerità","ar":"بارد بصراحة","form":"con","words":[{"it":"Rispondo","ar":"بارد","note":"Rispondere، Presente","type":"verbo"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"sincerità","ar":"صراحة","note":null,"type":"altro"}]},
          {"it":"Studio con concentrazione","ar":"بذاكر بتركيز","form":"con","words":[{"it":"Studio","ar":"بذاكر","note":"Studiare، Presente","type":"verbo"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"concentrazione","ar":"تركيز","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الصفة أو الميزة",
        "meaning": "ذو / ذات",
        "description": "يضيف صفة أو ميزة إلى اسم.",
        "color": "#fb8c00",
        "form": "con",
        "examples": [
          {"it":"È una ragazza con i capelli neri","ar":"هي فتاة ذات شعر أسود","form":"con","words":[{"it":"È","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"ragazza","ar":"بنت","note":null,"type":"altro"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"i","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"capelli","ar":"شعر","note":null,"type":"altro"},{"it":"neri","ar":"سود","note":null,"type":"altro"}]},
          {"it":"È un ragazzo con gli occhi azzurri","ar":"هو ولد ذو عيون زرقا","form":"con","words":[{"it":"È","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"ragazzo","ar":"ولد","note":null,"type":"altro"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"gli","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"occhi","ar":"عيون","note":null,"type":"altro"},{"it":"azzurri","ar":"زرقا","note":null,"type":"altro"}]},
          {"it":"Cerco una casa con il giardino","ar":"بدور على بيت ذو حديقة","form":"con","words":[{"it":"Cerco","ar":"بدور على","note":"Cercare، Presente","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"casa","ar":"بيت","note":null,"type":"altro"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"giardino","ar":"حديقة","note":null,"type":"altro"}]},
          {"it":"Ho comprato una macchina con il tetto apribile","ar":"اشتريت عربية ذات سقف قابل للفتح","form":"con","words":[{"it":"Ho","ar":"","note":"Avere، Presente (فعل مساعد)","type":"omesso"},{"it":"comprato","ar":"اشتريت","note":"Comprare، Passato Prossimo","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"macchina","ar":"عربية","note":null,"type":"altro"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"tetto","ar":"سقف","note":null,"type":"altro"},{"it":"apribile","ar":"قابل للفتح","note":null,"type":"altro"}]},
          {"it":"Vivo in un palazzo con ascensore","ar":"باعيش في عمارة فيها أسانسير","form":"con","words":[{"it":"Vivo","ar":"باعيش","note":"Vivere، Presente","type":"verbo"},{"it":"in","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"palazzo","ar":"عمارة","note":null,"type":"altro"},{"it":"con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"ascensore","ar":"أسانسير","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الظرف أو الحالة المصاحبة",
        "meaning": "مع / في ظل",
        "description": "يبين ظرفًا مصاحبًا للحدث.",
        "color": "#43a047",
        "form": "con",
        "examples": [
          {"it":"Con la pioggia, resto a casa","ar":"مع المطر أبقى في المنزل","form":"con","words":[{"it":"Con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"pioggia","ar":"مطر","note":null,"type":"altro"},{"it":"resto","ar":"أبقى","note":"Restare، Presente","type":"verbo"},{"it":"a","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"casa","ar":"بيت","note":null,"type":"altro"}]},
          {"it":"Con il freddo, uso il cappotto","ar":"مع البرد بلبس المعطف","form":"con","words":[{"it":"Con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"freddo","ar":"برد","note":null,"type":"altro"},{"it":"uso","ar":"بلبس/باستخدم","note":"Usare، Presente","type":"verbo"},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"cappotto","ar":"معطف","note":null,"type":"altro"}]},
          {"it":"Con la nebbia, guido piano","ar":"مع الشبورة باسوق بشوية","form":"con","words":[{"it":"Con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"nebbia","ar":"شبورة","note":null,"type":"altro"},{"it":"guido","ar":"باسوق","note":"Guidare، Presente","type":"verbo"},{"it":"piano","ar":"بشوية","note":null,"type":"altro"}]},
          {"it":"Con questo caldo, bevo molta acqua","ar":"مع الحر ده باشرب ميه كتير","form":"con","words":[{"it":"Con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"questo","ar":"ده","note":null,"type":"altro"},{"it":"caldo","ar":"حر","note":null,"type":"altro"},{"it":"bevo","ar":"باشرب","note":"Bere، Presente","type":"verbo"},{"it":"molta","ar":"كتير","note":null,"type":"altro"},{"it":"acqua","ar":"ميه","note":null,"type":"altro"}]},
          {"it":"Con il tempo, tutto migliora","ar":"مع الوقت كل حاجة بتتحسن","form":"con","words":[{"it":"Con","ar":"","type":"preposizione","grammarId":"prep_con","note":null},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"tempo","ar":"وقت","note":null,"type":"altro"},{"it":"tutto","ar":"كل حاجة","note":null,"type":"altro"},{"it":"migliora","ar":"بتتحسن","note":"Migliorare، Presente","type":"verbo"}]}
        ]
      },
      {
        "type": "note",
        "ar": "في الإيطالية الحديثة نقول غالبًا con il / con i. الصيغتان col / coi صحيحتان وشائعتان، أما con lo / con gli / con la / con le فلا يلزم دمجها."
      }
    ]
  },
  {
    "id": "prep_su",
    "it": "Preposizione SU",
    "ar": "على / عن / حوالي / من أصل",
    "icon": "🎨",
    "triggers": [
      "su",
      "sul",
      "sullo",
      "sulla",
      "sui",
      "sugli",
      "sulle"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "Preposizione SU — المعاني الأساسية: على / عن / حوالي / من أصل. اللون المختلف يرمز لاستخدام مختلف لنفس حرف الجر."
      },
      {
        "type": "usage",
        "title": "على سطح",
        "meaning": "على",
        "description": "يحدد وجود شيء فوق سطح.",
        "color": "#d81b60",
        "form": "sul",
        "examples": [
          {"it":"Il libro è sul tavolo","ar":"الكتاب على الطاولة","form":"sul","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"libro","ar":"كتاب","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"sul","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"tavolo","ar":"طاولة","note":null,"type":"altro"}]},
          {"it":"La borsa è sulla sedia","ar":"الشنطة على الكرسي","form":"sulla","words":[{"it":"La","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"borsa","ar":"شنطة","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"sulla","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"sedia","ar":"كرسي","note":null,"type":"altro"}]},
          {"it":"Le chiavi sono sul letto","ar":"المفاتيح على السرير","form":"sul","words":[{"it":"Le","ar":"ال","note":"أداة تعريف (جمع مؤنث)","type":"altro"},{"it":"chiavi","ar":"مفاتيح","note":null,"type":"altro"},{"it":"sono","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"sul","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"letto","ar":"سرير","note":null,"type":"altro"}]},
          {"it":"C'è polvere sugli scaffali","ar":"فيه تراب على الرفوف","form":"sugli","words":[{"it":"C'è","ar":"فيه","note":"Esserci، Presente (تعبير: فيه/موجود)","type":"verbo"},{"it":"polvere","ar":"تراب","note":null,"type":"altro"},{"it":"sugli","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"scaffali","ar":"رفوف","note":null,"type":"altro"}]},
          {"it":"Metto il vaso sulla finestra","ar":"بحط الڤاصة على الشباك","form":"sulla","words":[{"it":"Metto","ar":"بحط","note":"Mettere، Presente","type":"verbo"},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"vaso","ar":"ڤاصة","note":null,"type":"altro"},{"it":"sulla","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"finestra","ar":"شباك","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الموضوع",
        "meaning": "عن",
        "description": "يحدد موضوع كتاب أو حديث.",
        "color": "#5e35b1",
        "form": "su",
        "examples": [
          {"it":"Leggo un libro su Roma","ar":"أقرأ كتابًا عن روما","form":"su","words":[{"it":"Leggo","ar":"باقرأ","note":"Leggere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"libro","ar":"كتاب","note":null,"type":"altro"},{"it":"su","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"Roma","ar":"روما","note":null,"type":"altro"}]},
          {"it":"Scrivo un articolo sulla politica","ar":"باكتب مقال عن السياسة","form":"sulla","words":[{"it":"Scrivo","ar":"باكتب","note":"Scrivere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"articolo","ar":"مقال","note":null,"type":"altro"},{"it":"sulla","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"politica","ar":"سياسة","note":null,"type":"altro"}]},
          {"it":"Facciamo una ricerca sul clima","ar":"بنعمل بحث عن المناخ","form":"sul","words":[{"it":"Facciamo","ar":"بنعمل","note":"Fare، Presente","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"ricerca","ar":"بحث","note":null,"type":"altro"},{"it":"sul","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"clima","ar":"مناخ","note":null,"type":"altro"}]},
          {"it":"Parliamo sempre su questo argomento","ar":"دايمًا بنتكلم عن الموضوع ده","form":"su","words":[{"it":"Parliamo","ar":"بنتكلم","note":"Parlare، Presente","type":"verbo"},{"it":"sempre","ar":"دايمًا","note":null,"type":"altro"},{"it":"su","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"questo","ar":"ده","note":null,"type":"altro"},{"it":"argomento","ar":"موضوع","note":null,"type":"altro"}]},
          {"it":"Ho letto molto sulla storia italiana","ar":"قريت كتير عن التاريخ الإيطالي","form":"sulla","words":[{"it":"Ho","ar":"","type":"omesso","skipReason":"ausiliare","note":"جزء من الفعل المساعد"},{"it":"letto","ar":"قريت","note":"Leggere، Passato Prossimo","type":"verbo"},{"it":"molto","ar":"كتير","note":null,"type":"altro"},{"it":"sulla","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"storia","ar":"تاريخ","note":null,"type":"altro"},{"it":"italiana","ar":"إيطالية","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "التقريب",
        "meaning": "حوالي",
        "description": "يعبّر عن رقم أو كمية تقريبية.",
        "color": "#00acc1",
        "form": "sui",
        "examples": [
          {"it":"Costa sui venti euro","ar":"سعره حوالي عشرين يورو","form":"sui","words":[{"it":"Costa","ar":"سعره","note":"Costare، Presente","type":"verbo"},{"it":"sui","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"venti","ar":"عشرين","note":null,"type":"altro"},{"it":"euro","ar":"يورو","note":null,"type":"altro"}]},
          {"it":"Ha sui trenta anni","ar":"عنده حوالي تلاتين سنة","form":"sui","words":[{"it":"Ha","ar":"عنده","note":"Avere، Presente","type":"verbo"},{"it":"sui","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"trenta","ar":"تلاتين","note":null,"type":"altro"},{"it":"anni","ar":"سنة","note":null,"type":"altro"}]},
          {"it":"Il viaggio dura sulle due ore","ar":"الرحلة بتاخد حوالي ساعتين","form":"sulle","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"viaggio","ar":"رحلة","note":null,"type":"altro"},{"it":"dura","ar":"بتاخد (بتستغرق)","note":"Durare، Presente","type":"verbo"},{"it":"sulle","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"due","ar":"اتنين","note":null,"type":"altro"},{"it":"ore","ar":"ساعات","note":null,"type":"altro"}]},
          {"it":"Pesa sui settanta chili","ar":"وزنه حوالي سبعين كيلو","form":"sui","words":[{"it":"Pesa","ar":"وزنه","note":"Pesare، Presente","type":"verbo"},{"it":"sui","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"settanta","ar":"سبعين","note":null,"type":"altro"},{"it":"chili","ar":"كيلو","note":null,"type":"altro"}]},
          {"it":"Arriviamo sulle otto di sera","ar":"هنوصل حوالي الساعة ثمانية بالليل","form":"sulle","words":[{"it":"Arriviamo","ar":"هنوصل","note":"Arrivare، Presente","type":"verbo"},{"it":"sulle","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"otto","ar":"ثمانية","note":"رقم — هنا بمعنى الساعة ٨ تقريبًا","type":"altro"},{"it":"di","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"sera","ar":"مساء","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "النسبة",
        "meaning": "من أصل",
        "description": "يعبّر عن نسبة جزء إلى مجموع.",
        "color": "#6d4c41",
        "form": "su",
        "examples": [
          {"it":"Tre studenti su dieci hanno risposto","ar":"ثلاثة طلاب من أصل عشرة أجابوا","form":"su","words":[{"it":"Tre","ar":"ثلاثة","note":null,"type":"altro"},{"it":"studenti","ar":"طلاب","note":null,"type":"altro"},{"it":"su","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"dieci","ar":"عشرة","note":null,"type":"altro"},{"it":"hanno","ar":"","type":"omesso","skipReason":"ausiliare","note":"جزء من الفعل المساعد"},{"it":"risposto","ar":"ردّوا","note":"Rispondere، Passato Prossimo (مع hanno)","type":"verbo"}]},
          {"it":"Due giorni su sette lavoro da casa","ar":"يومين من أصل سبعة باشتغل من البيت","form":"su","words":[{"it":"Due","ar":"اتنين","note":null,"type":"altro"},{"it":"giorni","ar":"أيام","note":null,"type":"altro"},{"it":"su","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"sette","ar":"سبعة","note":null,"type":"altro"},{"it":"lavoro","ar":"شغل","note":null,"type":"altro"},{"it":"da","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"casa","ar":"بيت","note":null,"type":"altro"}]},
          {"it":"Nove volte su dieci ha ragione","ar":"تسع مرات من أصل عشرة بيكون صح","form":"su","words":[{"it":"Nove","ar":"تسعة","note":null,"type":"altro"},{"it":"volte","ar":"مرات","note":null,"type":"altro"},{"it":"su","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"dieci","ar":"عشرة","note":null,"type":"altro"},{"it":"ha","ar":"عنده","note":"Avere، Presente","type":"verbo"},{"it":"ragione","ar":"حق (صح)","note":null,"type":"altro"}]},
          {"it":"Uno su cento riesce","ar":"واحد من أصل مية بينجح","form":"su","words":[{"it":"Uno","ar":"واحد","note":null,"type":"altro"},{"it":"su","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"cento","ar":"مية","note":null,"type":"altro"},{"it":"riesce","ar":"بينجح","note":"Riuscire، Presente","type":"verbo"}]},
          {"it":"Cinque su sei studenti sono presenti","ar":"خمسة من أصل ستة طلاب حاضرين","form":"su","words":[{"it":"Cinque","ar":"خمسة","note":null,"type":"altro"},{"it":"su","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"sei","ar":"ستة","note":null,"type":"altro"},{"it":"studenti","ar":"طلاب","note":null,"type":"altro"},{"it":"sono","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"presenti","ar":"حاضرين","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الأساس أو الاعتماد",
        "meaning": "بناءً على",
        "description": "يبين الأساس الذي بُني عليه القرار.",
        "color": "#e53935",
        "form": "sulla",
        "examples": [
          {"it":"Ho deciso sulla base dei dati","ar":"قررت بناءً على البيانات","form":"sulla","words":[{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"deciso","ar":"قررت","note":"Decidere، Passato Prossimo","type":"verbo"},{"it":"sulla","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"base","ar":"أساس","note":null,"type":"altro"},{"it":"dei","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"dati","ar":"بيانات","note":null,"type":"altro"}]},
          {"it":"Giudico sulla base dei fatti","ar":"باحكم بناءً على الحقائق","form":"sulla","words":[{"it":"Giudico","ar":"باحكم","note":"Giudicare، Presente","type":"verbo"},{"it":"sulla","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"base","ar":"أساس","note":null,"type":"altro"},{"it":"dei","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"fatti","ar":"حقائق","note":null,"type":"altro"}]},
          {"it":"Scelgo il ristorante sulla base delle recensioni","ar":"باختار المطعم بناءً على التقييمات","form":"sulla","words":[{"it":"Scelgo","ar":"باختار","note":"Scegliere، Presente","type":"verbo"},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"ristorante","ar":"مطعم","note":null,"type":"altro"},{"it":"sulla","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"base","ar":"أساس","note":null,"type":"altro"},{"it":"delle","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"recensioni","ar":"تقييمات","note":null,"type":"altro"}]},
          {"it":"Voto sulla base del programma","ar":"باصوّت بناءً على البرنامج","form":"sulla","words":[{"it":"Voto","ar":"باصوّت","note":"Votare، Presente","type":"verbo"},{"it":"sulla","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"base","ar":"أساس","note":null,"type":"altro"},{"it":"del","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"programma","ar":"برنامج","note":null,"type":"altro"}]},
          {"it":"Decidiamo sulla base delle prove","ar":"بنقرر بناءً على الأدلة","form":"sulla","words":[{"it":"Decidiamo","ar":"بنقرر","note":"Decidere، Presente","type":"verbo"},{"it":"sulla","ar":"","type":"preposizione","grammarId":"prep_su","note":null},{"it":"base","ar":"أساس","note":null,"type":"altro"},{"it":"delle","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"prove","ar":"أدلة","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "table",
        "title": "الصيغ المركبة مع أداة التعريف",
        "headers": [
          "المفرد/الجمع",
          "الصيغ"
        ],
        "rows": [
          [
            "SU",
            "su / sul / sullo / sulla / sui / sugli / sulle"
          ]
        ]
      }
    ]
  },
  {
    "id": "prep_per",
    "it": "Preposizione PER",
    "ar": "لكي / لـ / لمدة / عبر / بسبب",
    "icon": "🎨",
    "triggers": [
      "per"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "Preposizione PER — المعاني الأساسية: لكي / لـ / لمدة / عبر / بسبب. اللون المختلف يرمز لاستخدام مختلف لنفس حرف الجر."
      },
      {
        "type": "usage",
        "title": "الغرض والهدف",
        "meaning": "لكي / من أجل",
        "description": "يبين الهدف من الفعل.",
        "color": "#1e88e5",
        "form": "per",
        "examples": [
          {"it":"Studio per imparare","ar":"أذاكر لكي أتعلم","form":"per","words":[{"it":"Studio","ar":"بذاكر","note":"Studiare، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"imparare","ar":"أتعلم","note":"Imparare، مصدر","type":"verbo"}]},
          {"it":"Lavoro per guadagnare","ar":"باشتغل عشان أكسب فلوس","form":"per","words":[{"it":"Lavoro","ar":"باشتغل","note":"Lavorare، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"guadagnare","ar":"أكسب فلوس","note":"Guadagnare، مصدر","type":"verbo"}]},
          {"it":"Corro per dimagrire","ar":"باجري عشان أخس","form":"per","words":[{"it":"Corro","ar":"باجري","note":"Correre، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"dimagrire","ar":"أخس","note":"Dimagrire، مصدر","type":"verbo"}]},
          {"it":"Risparmio per comprare una casa","ar":"بوفر عشان أشتري بيت","form":"per","words":[{"it":"Risparmio","ar":"بوفر","note":"Risparmiare، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"comprare","ar":"أشتري","note":"Comprare، مصدر","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"casa","ar":"بيت","note":null,"type":"altro"}]},
          {"it":"Mi alleno per vincere","ar":"بتمرن عشان أكسب","form":"per","words":[{"it":"Mi","ar":"","note":"ضمير انعكاسي (جزء من الفعل allenarsi)","type":"altro"},{"it":"alleno","ar":"بتمرن","note":"Allenarsi، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"vincere","ar":"أكسب","note":"Vincere، مصدر","type":"verbo"}]}
        ]
      },
      {
        "type": "usage",
        "title": "المتلقي أو المستفيد",
        "meaning": "لـ",
        "description": "يبين الشخص الذي خُصص له الشيء.",
        "color": "#8e24aa",
        "form": "per",
        "examples": [
          {"it":"Questo regalo è per te","ar":"هذه الهدية لك","form":"per","words":[{"it":"Questo","ar":"ده","note":null,"type":"altro"},{"it":"regalo","ar":"هدية","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"te","ar":"ـك","note":"ضمير (أنت)","type":"altro"}]},
          {"it":"Compro un fiore per mia madre","ar":"باشتري ورده لأمي","form":"per","words":[{"it":"Compro","ar":"باشتري","note":"Comprare، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"fiore","ar":"ورده","note":null,"type":"altro"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"mia","ar":"ـي","note":"صفة ملكية (مؤنث)","type":"altro"},{"it":"madre","ar":"أم","note":null,"type":"altro"}]},
          {"it":"Cucino la cena per gli amici","ar":"باطبخ العشا لأصحابي","form":"per","words":[{"it":"Cucino","ar":"باطبخ","note":"Cucinare، Presente","type":"verbo"},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"cena","ar":"عشا","note":null,"type":"altro"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"gli","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"amici","ar":"أصحاب","note":null,"type":"altro"}]},
          {"it":"Scrivo una lettera per Sara","ar":"باكتب خطاب لسارة","form":"per","words":[{"it":"Scrivo","ar":"باكتب","note":"Scrivere، Presente","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"lettera","ar":"خطاب","note":null,"type":"altro"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"Sara","ar":"سارة (اسم علم)","note":null,"type":"altro"}]},
          {"it":"Ho un consiglio per te","ar":"عندي نصيحة لك","form":"per","words":[{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"consiglio","ar":"نصيحة","note":null,"type":"altro"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"te","ar":"ـك","note":"ضمير (أنت)","type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "المدة",
        "meaning": "لمدة",
        "description": "يحدد طول مدة الحدث.",
        "color": "#00897b",
        "form": "per",
        "examples": [
          {"it":"Ho lavorato per due ore","ar":"عملت لمدة ساعتين","form":"per","words":[{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"lavorato","ar":"عملت","note":"Lavorare، Passato Prossimo","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"due","ar":"اتنين","note":null,"type":"altro"},{"it":"ore","ar":"ساعات","note":null,"type":"altro"}]},
          {"it":"Studio per tre ore al giorno","ar":"بذاكر لمدة ٣ ساعات في اليوم","form":"per","words":[{"it":"Studio","ar":"بذاكر","note":"Studiare، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"tre","ar":"ثلاثة","note":null,"type":"altro"},{"it":"ore","ar":"ساعات","note":null,"type":"altro"},{"it":"al","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"giorno","ar":"يوم","note":null,"type":"altro"}]},
          {"it":"Ho dormito per otto ore","ar":"نمت لمدة ٨ ساعات","form":"per","words":[{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"dormito","ar":"نمت","note":"Dormire، Passato Prossimo","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"otto","ar":"ثمانية","note":null,"type":"altro"},{"it":"ore","ar":"ساعات","note":null,"type":"altro"}]},
          {"it":"Vivo qui per un anno","ar":"باعيش هنا لمدة سنة","form":"per","words":[{"it":"Vivo","ar":"باعيش","note":"Vivere، Presente","type":"verbo"},{"it":"qui","ar":"هنا","note":null,"type":"altro"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"anno","ar":"سنة","note":null,"type":"altro"}]},
          {"it":"Ho viaggiato per una settimana","ar":"سافرت لمدة أسبوع","form":"per","words":[{"it":"Ho","ar":"عندي","note":"Avere، Presente","type":"verbo"},{"it":"viaggiato","ar":"سافرت","note":"Viaggiare، Passato Prossimo","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"settimana","ar":"أسبوع","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "المرور أو الطريق",
        "meaning": "عبر / عن طريق",
        "description": "يبين المكان الذي نمر به.",
        "color": "#fb8c00",
        "form": "per",
        "examples": [
          {"it":"Passo per Roma","ar":"أمر عبر روما","form":"per","words":[{"it":"Passo","ar":"أمر","note":"Passare، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"Roma","ar":"روما","note":null,"type":"altro"}]},
          {"it":"Andiamo a casa per il parco","ar":"بنروح البيت عن طريق الحديقة","form":"per","words":[{"it":"Andiamo","ar":"بنروح","note":"Andare، Presente","type":"verbo"},{"it":"a","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"casa","ar":"بيت","note":null,"type":"altro"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"parco","ar":"حديقة","note":null,"type":"altro"}]},
          {"it":"Il treno passa per Firenze","ar":"القطر بيعدي عبر فلورنسا","form":"per","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"treno","ar":"قطر","note":null,"type":"altro"},{"it":"passa","ar":"بيعدي","note":"Passare، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"Firenze","ar":"فلورنسا","note":null,"type":"altro"}]},
          {"it":"Il gatto entra per la finestra","ar":"القطة بتدخل من الشباك","form":"per","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"gatto","ar":"قطة","note":null,"type":"altro"},{"it":"entra","ar":"بتدخل","note":"Entrare، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"finestra","ar":"شباك","note":null,"type":"altro"}]},
          {"it":"Esco per la porta principale","ar":"باخرج من الباب الرئيسي","form":"per","words":[{"it":"Esco","ar":"باخرج","note":"Uscire، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"porta","ar":"باب","note":null,"type":"altro"},{"it":"principale","ar":"رئيسي","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "السبب",
        "meaning": "بسبب / من",
        "description": "يبين سبب شعور أو حدث.",
        "color": "#43a047",
        "form": "per",
        "examples": [
          {"it":"Tremo per la paura","ar":"أرتجف من الخوف","form":"per","words":[{"it":"Tremo","ar":"أرتجف","note":"Tremare، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"paura","ar":"خوف","note":null,"type":"altro"}]},
          {"it":"Piango per la gioia","ar":"بعيط من الفرح","form":"per","words":[{"it":"Piango","ar":"بعيط","note":"Piangere، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"gioia","ar":"فرح","note":null,"type":"altro"}]},
          {"it":"Rido per la felicità","ar":"باضحك من السعادة","form":"per","words":[{"it":"Rido","ar":"باضحك","note":"Ridere، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"felicità","ar":"سعادة","note":null,"type":"altro"}]},
          {"it":"Non dormo per lo stress","ar":"مبنامش بسبب التوتر","form":"per","words":[{"it":"Non","ar":"لا","note":"أداة نفي","type":"altro"},{"it":"dormo","ar":"بنام","note":"Dormire، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"lo","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"stress","ar":"توتر","note":null,"type":"altro"}]},
          {"it":"Soffro per il freddo","ar":"باعاني من البرد","form":"per","words":[{"it":"Soffro","ar":"باعاني","note":"Soffrire، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"freddo","ar":"برد","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الوسيلة أو القناة",
        "meaning": "عن طريق",
        "description": "يبين وسيلة الإرسال أو الاتصال.",
        "color": "#d81b60",
        "form": "per",
        "examples": [
          {"it":"Ti mando il file per e-mail","ar":"أرسل لك الملف عبر البريد الإلكتروني","form":"per","words":[{"it":"Ti","ar":"ـك","note":"ضمير متصل (لك)","type":"altro"},{"it":"mando","ar":"باعت","note":"Mandare، Presente","type":"verbo"},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"file","ar":"ملف","note":null,"type":"altro"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"e-mail","ar":"إيميل","note":null,"type":"altro"}]},
          {"it":"Parlo con lui per telefono","ar":"باتكلم معاه بالتليفون","form":"per","words":[{"it":"Parlo","ar":"باتكلم","note":"Parlare، Presente","type":"verbo"},{"it":"con","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"lui","ar":"هو","note":null,"type":"altro"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"telefono","ar":"تليفون","note":null,"type":"altro"}]},
          {"it":"Mando il pacco per posta","ar":"بعت الطرد بالبوستة","form":"per","words":[{"it":"Mando","ar":"باعت","note":"Mandare، Presente","type":"verbo"},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"pacco","ar":"طرد","note":null,"type":"altro"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"posta","ar":"بوستة","note":null,"type":"altro"}]},
          {"it":"Mando gli auguri per messaggio","ar":"باعت التهنئة برسالة","form":"per","words":[{"it":"Mando","ar":"باعت","note":"Mandare، Presente","type":"verbo"},{"it":"gli","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"auguri","ar":"تهنئة","note":null,"type":"altro"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"messaggio","ar":"رسالة","note":null,"type":"altro"}]},
          {"it":"Comunichiamo per lettera","ar":"بنتواصل بالخطابات","form":"per","words":[{"it":"Comunichiamo","ar":"بنتواصل","note":"Comunicare، Presente","type":"verbo"},{"it":"per","ar":"","type":"preposizione","grammarId":"prep_per","note":null},{"it":"lettera","ar":"خطاب","note":null,"type":"altro"}]}
        ]
      }
    ]
  },
  {
    "id": "prep_tra_fra",
    "it": "Preposizioni TRA / FRA",
    "ar": "بين / وسط / بعد",
    "icon": "🎨",
    "triggers": [
      "tra",
      "fra"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "Preposizioni TRA / FRA — المعاني الأساسية: بين / وسط / بعد. اللون المختلف يرمز لاستخدام مختلف لنفس حرف الجر."
      },
      {
        "type": "usage",
        "title": "بين أو وسط",
        "meaning": "بين",
        "description": "للمكان أو الوجود ضمن مجموعة.",
        "color": "#5e35b1",
        "form": "tra",
        "examples": [
          {"it":"Sono tra amici","ar":"أنا بين أصدقاء","form":"tra","words":[{"it":"Sono","ar":"أنا","note":"Essere، Presente","type":"verbo"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"amici","ar":"أصدقاء","note":null,"type":"altro"}]},
          {"it":"Il gatto dorme tra i cuscini","ar":"القطة نايمة بين المخدات","form":"tra","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"gatto","ar":"قطة","note":null,"type":"altro"},{"it":"dorme","ar":"نايمة","note":"Dormire، Presente","type":"verbo"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"i","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"cuscini","ar":"مخدات","note":null,"type":"altro"}]},
          {"it":"Cammino tra la folla","ar":"بمشي بين الزحمة","form":"tra","words":[{"it":"Cammino","ar":"بمشي","note":"Camminare، Presente","type":"verbo"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"la","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"folla","ar":"زحمة","note":null,"type":"altro"}]},
          {"it":"Il libro è tra i miei preferiti","ar":"الكتاب من ضمن المفضلين عندي","form":"tra","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"libro","ar":"كتاب","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"i","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"miei","ar":"ـي","note":"صفة ملكية (جمع)","type":"altro"},{"it":"preferiti","ar":"المفضلين","note":null,"type":"altro"}]},
          {"it":"Nascondo il regalo tra i vestiti","ar":"باخبي الهدية بين الهدوم","form":"tra","words":[{"it":"Nascondo","ar":"باخبي","note":"Nascondere، Presente","type":"verbo"},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"regalo","ar":"هدية","note":null,"type":"altro"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"i","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"vestiti","ar":"هدوم","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "وقت في المستقبل",
        "meaning": "بعد",
        "description": "يبين المدة الباقية قبل حدث مستقبلي.",
        "color": "#00acc1",
        "form": "fra",
        "examples": [
          {"it":"Parto fra due giorni","ar":"أسافر بعد يومين","form":"fra","words":[{"it":"Parto","ar":"أسافر","note":"Partire، Presente","type":"verbo"},{"it":"fra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"due","ar":"اتنين","note":null,"type":"altro"},{"it":"giorni","ar":"أيام","note":null,"type":"altro"}]},
          {"it":"Il treno parte fra dieci minuti","ar":"القطر بيتحرك بعد عشر دقايق","form":"fra","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"treno","ar":"قطر","note":null,"type":"altro"},{"it":"parte","ar":"بيتحرك","note":"Partire، Presente","type":"verbo"},{"it":"fra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"dieci","ar":"عشرة","note":null,"type":"altro"},{"it":"minuti","ar":"دقايق","note":null,"type":"altro"}]},
          {"it":"Ci vediamo fra un mese","ar":"هنشوف بعض بعد شهر","form":"fra","words":[{"it":"Ci","ar":"","note":"ضمير (لبعضنا)","type":"altro"},{"it":"vediamo","ar":"هنشوف","note":"Vedere، Presente","type":"verbo"},{"it":"fra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"un","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"mese","ar":"شهر","note":null,"type":"altro"}]},
          {"it":"Torno fra poco","ar":"هرجع بعد شوية","form":"fra","words":[{"it":"Torno","ar":"هرجع","note":"Tornare، Presente","type":"verbo"},{"it":"fra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"poco","ar":"شوية","note":null,"type":"altro"}]},
          {"it":"La partita inizia fra cinque minuti","ar":"الماتش هيبدأ بعد خمس دقايق","form":"fra","words":[{"it":"La","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"partita","ar":"ماتش","note":null,"type":"altro"},{"it":"inizia","ar":"بيبدأ","note":"Iniziare، Presente","type":"verbo"},{"it":"fra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"cinque","ar":"خمسة","note":null,"type":"altro"},{"it":"minuti","ar":"دقايق","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "العلاقة",
        "meaning": "بين",
        "description": "يبين علاقة متبادلة.",
        "color": "#6d4c41",
        "form": "tra",
        "examples": [
          {"it":"C’è fiducia tra noi","ar":"هناك ثقة بيننا","form":"tra","words":[{"it":"C’è","ar":"فيه","note":"Esserci، Presente (تعبير: فيه/موجود)","type":"verbo"},{"it":"fiducia","ar":"ثقة","note":null,"type":"altro"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"noi","ar":"إحنا","note":null,"type":"altro"}]},
          {"it":"C’è una grande amicizia tra loro","ar":"فيه صداقة كبيرة بينهم","form":"tra","words":[{"it":"C’è","ar":"فيه","note":"Esserci، Presente (تعبير: فيه/موجود)","type":"verbo"},{"it":"una","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"grande","ar":"كبيرة","note":null,"type":"altro"},{"it":"amicizia","ar":"صداقة","note":null,"type":"altro"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"loro","ar":"هم","note":null,"type":"altro"}]},
          {"it":"Non c’è nessun problema tra di noi","ar":"مفيش أي مشكلة بينا","form":"tra","words":[{"it":"Non","ar":"لا","note":"أداة نفي","type":"altro"},{"it":"c’è","ar":"فيه","note":"Esserci، Presente (تعبير: فيه/موجود)","type":"verbo"},{"it":"nessun","ar":"ولا","note":null,"type":"altro"},{"it":"problema","ar":"مشكلة","note":null,"type":"altro"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"di","ar":"","type":"omesso","skipReason":"ausiliare","note":null},{"it":"noi","ar":"إحنا","note":null,"type":"altro"}]},
          {"it":"C’è molta differenza tra i due film","ar":"فيه فرق كبير بين الفيلمين","form":"tra","words":[{"it":"C’è","ar":"فيه","note":"Esserci، Presente (تعبير: فيه/موجود)","type":"verbo"},{"it":"molta","ar":"كتير","note":null,"type":"altro"},{"it":"differenza","ar":"فرق","note":null,"type":"altro"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"i","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"due","ar":"اتنين","note":null,"type":"altro"},{"it":"film","ar":"فيلم","note":null,"type":"altro"}]},
          {"it":"Il legame tra i due è forte","ar":"الرابطة بين الاتنين قوية","form":"tra","words":[{"it":"Il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"legame","ar":"رابطة","note":null,"type":"altro"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"i","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"due","ar":"اتنين","note":null,"type":"altro"},{"it":"è","ar":"","note":"Essere، Presente","type":"verbo"},{"it":"forte","ar":"قوية","note":null,"type":"altro"}]}
        ]
      },
      {
        "type": "usage",
        "title": "الاختيار",
        "meaning": "بين",
        "description": "يستخدم عند الاختيار من بدائل.",
        "color": "#e53935",
        "form": "tra",
        "examples": [
          {"it":"Scegli tra questo e quello","ar":"اختر بين هذا وذاك","form":"tra","words":[{"it":"Scegli","ar":"اختر","note":"Scegliere، Imperativo","type":"verbo"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"questo","ar":"ده","note":null,"type":"altro"},{"it":"e","ar":"و","note":null,"type":"congiunzione"},{"it":"quello","ar":"ذاك","note":null,"type":"altro"}]},
          {"it":"Devo scegliere tra il tè e il caffè","ar":"لازم أختار بين الشاي والقهوة","form":"tra","words":[{"it":"Devo","ar":"لازم","note":"Dovere، Presente","type":"verbo"},{"it":"scegliere","ar":"أختار","note":"Scegliere، مصدر","type":"verbo"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"tè","ar":"شاي","note":null,"type":"altro"},{"it":"e","ar":"و","note":null,"type":"congiunzione"},{"it":"il","ar":"ال","note":"أداة تعريف","type":"altro"},{"it":"caffè","ar":"قهوة","note":null,"type":"altro"}]},
          {"it":"Esito tra due opzioni","ar":"متردد بين اختيارين","form":"tra","words":[{"it":"Esito","ar":"متردد","note":"Esitare، Presente","type":"verbo"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"due","ar":"اتنين","note":null,"type":"altro"},{"it":"opzioni","ar":"اختيارات","note":null,"type":"altro"}]},
          {"it":"Decido tra restare e partire","ar":"باقرر بين إني أقعد وإني أسافر","form":"tra","words":[{"it":"Decido","ar":"باقرر","note":"Decidere، Presente","type":"verbo"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"restare","ar":"أقعد","note":"Restare، مصدر","type":"verbo"},{"it":"e","ar":"و","note":null,"type":"congiunzione"},{"it":"partire","ar":"أسافر","note":"Partire، مصدر","type":"verbo"}]},
          {"it":"Confondo sempre tra i due nomi","ar":"دايمًا بلخبط بين الاسمين","form":"tra","words":[{"it":"Confondo","ar":"بلخبط","note":"Confondere، Presente","type":"verbo"},{"it":"sempre","ar":"دايمًا","note":null,"type":"altro"},{"it":"tra","ar":"","type":"preposizione","grammarId":"prep_tra_fra","note":null},{"it":"i","ar":"ال","note":"أداة تعريف (جمع مذكر)","type":"altro"},{"it":"due","ar":"اتنين","note":null,"type":"altro"},{"it":"nomi","ar":"أسماء","note":null,"type":"altro"}]}
        ]
      }
    ]
  },
  {
    "id": "colori",
    "it": "I colori",
    "ar": "الألوان",
    "icon": "🎨",
    "triggers": [
      "rosso",
      "blu",
      "giallo",
      "bianco",
      "verde",
      "pelle",
      "viola",
      "nero",
      "grigio",
      "rosa",
      "arancione",
      "marrone",
      "azzurro",
      "celeste",
      "beige"
    ],
    "blocks": [
      {
        "type": "table",
        "title": "الألوان الأساسية",
        "headers": [
          "المعنى",
          "اللون"
        ],
        "rows": [
          [
            "أحمر",
            "Rosso"
          ],
          [
            "أزرق غامق",
            "Blu"
          ],
          [
            "أصفر",
            "Giallo"
          ],
          [
            "أبيض",
            "Bianco"
          ],
          [
            "أخضر",
            "Verde"
          ],
          [
            "لون البشرة / بيج فاتح",
            "Pelle"
          ],
          [
            "بنفسجي",
            "Viola"
          ],
          [
            "أسود",
            "Nero"
          ],
          [
            "رمادي",
            "Grigio"
          ],
          [
            "وردي",
            "Rosa"
          ],
          [
            "برتقالي",
            "Arancione"
          ],
          [
            "بني",
            "Marrone"
          ],
          [
            "أزرق فاتح / سماوي",
            "Azzurro"
          ],
          [
            "سماوي فاتح",
            "Celeste"
          ],
          [
            "بيج",
            "Beige"
          ]
        ]
      },
      {
        "type": "note",
        "ar": "الألوان بتتفق مع الاسم في الجنس والعدد زي أي صفة عادية: Rosso (مذكر مفرد) → Rossa (مؤنث) → Rossi (جمع مذكر) → Rosse (جمع مؤنث). الألوان المنتهية بـ e زي Verde/Arancione/Celeste بتتغير للجمع بس (Verde → Verdi) ومالهاش صيغة مؤنث مختلفة. ألوان زي Viola/Blu/Rosa/Beige ثابتة مالهاش تصريف خالص."
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Ho una maglietta rossa",
            "ar": "عندي تي شيرت أحمر"
          },
          {
            "it": "Il cielo è blu",
            "ar": "السما زرقاء"
          },
          {
            "it": "Mi piace il colore giallo",
            "ar": "بحب اللون الأصفر"
          },
          {
            "it": "La neve è bianca",
            "ar": "الثلج أبيض"
          },
          {
            "it": "L'erba è verde",
            "ar": "العشب أخضر"
          },
          {
            "it": "Le mie scarpe sono color pelle",
            "ar": "جزمتي بلون البشرة"
          },
          {
            "it": "Ho comprato un vestito viola",
            "ar": "اشتريت فستان بنفسجي"
          },
          {
            "it": "Il gatto è nero",
            "ar": "القطة سودة"
          },
          {
            "it": "Il cielo oggi è grigio",
            "ar": "السما النهاردة رمادية"
          },
          {
            "it": "Le sue guance sono rosa",
            "ar": "خدودها وردية"
          },
          {
            "it": "Mi piace la borsa arancione",
            "ar": "بحب الشنطة البرتقالي"
          },
          {
            "it": "Ho gli occhi marroni",
            "ar": "عيني بني"
          },
          {
            "it": "Il mare è azzurro",
            "ar": "البحر أزرق فاتح"
          },
          {
            "it": "Il cielo è celeste stamattina",
            "ar": "السما سماوية النهاردة الصبح"
          },
          {
            "it": "Ho comprato scarpe beige",
            "ar": "اشتريت جزمة بيج"
          }
        ]
      }
    ]
  },
  {
    "id": "numeri",
    "it": "I numeri",
    "ar": "الأرقام",
    "icon": "🔢",
    "triggers": [
      "uno",
      "due",
      "tre",
      "quattro",
      "cinque",
      "sei",
      "sette",
      "otto",
      "nove",
      "dieci",
      "undici",
      "dodici",
      "tredici",
      "quattordici",
      "quindici",
      "sedici",
      "diciassette",
      "diciotto",
      "diciannove",
      "venti",
      "trenta",
      "quaranta",
      "cinquanta",
      "sessanta",
      "settanta",
      "ottanta",
      "novanta",
      "cento"
    ],
    "blocks": [
      {
        "type": "table",
        "title": "من 1 لـ20",
        "headers": [
          "الرقم",
          "بالإيطالي"
        ],
        "rows": [
          [
            "1",
            "Uno"
          ],
          [
            "2",
            "Due"
          ],
          [
            "3",
            "Tre"
          ],
          [
            "4",
            "Quattro"
          ],
          [
            "5",
            "Cinque"
          ],
          [
            "6",
            "Sei"
          ],
          [
            "7",
            "Sette"
          ],
          [
            "8",
            "Otto"
          ],
          [
            "9",
            "Nove"
          ],
          [
            "10",
            "Dieci"
          ],
          [
            "11",
            "Undici"
          ],
          [
            "12",
            "Dodici"
          ],
          [
            "13",
            "Tredici"
          ],
          [
            "14",
            "Quattordici"
          ],
          [
            "15",
            "Quindici"
          ],
          [
            "16",
            "Sedici"
          ],
          [
            "17",
            "Diciassette"
          ],
          [
            "18",
            "Diciotto"
          ],
          [
            "19",
            "Diciannove"
          ],
          [
            "20",
            "Venti"
          ]
        ]
      },
      {
        "type": "table",
        "title": "عشرات من 10 لـ100",
        "headers": [
          "الرقم",
          "بالإيطالي"
        ],
        "rows": [
          [
            "10",
            "Dieci"
          ],
          [
            "20",
            "Venti"
          ],
          [
            "30",
            "Trenta"
          ],
          [
            "40",
            "Quaranta"
          ],
          [
            "50",
            "Cinquanta"
          ],
          [
            "60",
            "Sessanta"
          ],
          [
            "70",
            "Settanta"
          ],
          [
            "80",
            "Ottanta"
          ],
          [
            "90",
            "Novanta"
          ],
          [
            "100",
            "Cento"
          ]
        ]
      },
      {
        "type": "note",
        "ar": "الأرقام من 21 لـ99 بتتكوّن من العشرة + الرقم: Venti + Due = Ventidue (22). لو الرقم بعد العشرة هو Uno أو Otto، بيتشال آخر حرف من العشرة: Venti + Uno = Ventuno (21) مش Ventiuno، Venti + Otto = Ventotto (28) مش Ventiotto."
      },
      {
        "type": "item",
        "it": "أمثلة",
        "ar": "",
        "examples": [
          {
            "it": "Ho diciotto anni",
            "ar": "عندي 18 سنة"
          },
          {
            "it": "Il libro costa dieci euro",
            "ar": "الكتاب تمنه 10 يورو"
          },
          {
            "it": "Ho comprato cinque mele",
            "ar": "اشتريت 5 تفاحات"
          },
          {
            "it": "Ci sono venti persone nella sala",
            "ar": "فيه 20 شخص في القاعة"
          },
          {
            "it": "Il mio numero è tre",
            "ar": "رقمي 3"
          },
          {
            "it": "Ho lavorato per trenta minuti",
            "ar": "اشتغلت لمدة 30 دقيقة"
          },
          {
            "it": "La borsa costa cinquanta euro",
            "ar": "الشنطة تمنها 50 يورو"
          },
          {
            "it": "Il negozio ha novanta clienti al giorno",
            "ar": "المحل عنده 90 عميل في اليوم"
          },
          {
            "it": "Il biglietto costa cento euro",
            "ar": "التذكرة تمنها 100 يورو"
          },
          {
            "it": "Ho sette fratelli",
            "ar": "عندي 7 إخوة"
          }
        ]
      }
    ]
  }
];
