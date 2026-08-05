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
    "id": "mentre",
    "it": "Mentre",
    "ar": "أثناء / وفي نفس الوقت (أداة ربط زمني)",
    "icon": "⏳",
    "triggers": [
      "mentre"
    ],
    "blocks": [
      {
        "type": "note",
        "ar": "Mentre تربط بين حدثين حدثا في نفس الوقت في الماضي. النمط الأكثر شيوعاً: حدث مستمر بالـ Imperfetto (كان مستمرًا في الخلفية) + حدث آخر بالـ Passato Prossimo (حصل فجأة أو قاطعه) — لكن يمكن أيضًا كلاهما يكون Imperfetto لو الحدثين مستمرين معًا بنفس الدرجة."
      },
      {
        "type": "table",
        "title": "النمط الشائع",
        "headers": [
          "الجزء",
          "الزمن الغالب",
          "المثال"
        ],
        "rows": [
          [
            "الحدث المستمر (الذي كان مستمرًا)",
            "Imperfetto",
            "mentre guardavo la TV — وأنا كنت أشاهد التلفاز"
          ],
          [
            "الحدث الذي قطعه / حصل فجأة",
            "Passato Prossimo",
            "ho mangiato un panino — أكلت شطيرة"
          ]
        ]
      },
      {
        "type": "item",
        "it": "أمثلة",
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
        "ar": "⚠️ الفرق بين Mentre و Quando: Mentre تركّز على استمرارية الحدثين معًا (مثل 'في نفس اللحظة هذه')، أما Quando غالباً تقدّم لحظة معينة وقف عندها فعل مرة أخرى (مثل 'عندما حدث كذا'). في الكلام العادي كثيرًا لا يفرّق المتحدثون بينهما، لكن هذه القاعدة الأساسية."
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
      "pure"
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
        "type": "note",
        "ar": "💡 Mentre لها درس مستقل لأنها تربط حدثين متزامنين وترتبط كثيرًا بـImperfetto. Quando قد تكون أداة استفهام أو أداة ربط زمنية حسب السياق."
      },
      {
        "type": "note",
        "ar": "⚠️ Ed تُستخدم بدل e غالبًا قبل كلمة تبدأ بحرف e لتسهيل النطق. لا تُستخدم آليًا قبل كل حرف متحرك."
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
            "form": "di"
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
            "form": "di"
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
            "form": "di"
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
          {
            "it": "Parliamo di calcio",
            "ar": "نتحدث عن كرة القدم",
            "form": "di"
          }
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
            "form": "di"
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
            "form": "di"
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
            "form": "di"
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
            "form": "di"
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
            "form": "di"
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
            "form": "di"
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
          {
            "it": "Vado a Milano",
            "ar": "أذهب إلى ميلانو",
            "form": "a"
          }
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
          {
            "it": "Vivo a Roma",
            "ar": "أعيش في روما",
            "form": "a"
          }
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
          {
            "it": "Arrivo alle tre",
            "ar": "أصل في تمام الثالثة",
            "form": "alle"
          }
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
          {
            "it": "Vado a piedi",
            "ar": "أذهب مشيًا",
            "form": "a"
          }
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
          {
            "it": "Chiudo la porta a chiave",
            "ar": "أغلق الباب بالمفتاح",
            "form": "a"
          }
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
          {
            "it": "Telefono a Marco",
            "ar": "أتصل بماركو",
            "form": "a"
          }
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
          {
            "it": "Prendo la medicina due volte al giorno",
            "ar": "آخذ الدواء مرتين في اليوم",
            "form": "al"
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
          {
            "it": "Vivo qui da due anni",
            "ar": "أعيش هنا منذ سنتين",
            "form": "da"
          }
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
          {
            "it": "Vengo da Roma",
            "ar": "أنا قادم من روما",
            "form": "da"
          }
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
          {
            "it": "Vado da Marco",
            "ar": "أذهب عند ماركو",
            "form": "da"
          }
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
          {
            "it": "Il libro è scritto da Maria",
            "ar": "الكتاب مكتوب بواسطة ماريا",
            "form": "da"
          }
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
          {
            "it": "Uso gli occhiali da sole",
            "ar": "أستخدم نظارات الشمس",
            "form": "da"
          }
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
          {
            "it": "È una ragazza dai capelli neri",
            "ar": "هي فتاة ذات شعر أسود",
            "form": "dai"
          }
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
          {
            "it": "Ho molto da fare",
            "ar": "عندي الكثير لأفعله",
            "form": "da"
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
          {
            "it": "Passeggio con Marco",
            "ar": "أتمشى مع ماركو",
            "form": "con"
          }
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
          {
            "it": "Scrivo con la penna",
            "ar": "أكتب بالقلم",
            "form": "con"
          }
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
          {
            "it": "Parlo con gentilezza",
            "ar": "أتحدث بلطف",
            "form": "con"
          }
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
          {
            "it": "È una ragazza con i capelli neri",
            "ar": "هي فتاة ذات شعر أسود",
            "form": "con"
          }
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
          {
            "it": "Con la pioggia, resto a casa",
            "ar": "مع المطر أبقى في المنزل",
            "form": "con"
          }
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
          {
            "it": "Il libro è sul tavolo",
            "ar": "الكتاب على الطاولة",
            "form": "sul"
          }
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
          {
            "it": "Leggo un libro su Roma",
            "ar": "أقرأ كتابًا عن روما",
            "form": "su"
          }
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
          {
            "it": "Costa sui venti euro",
            "ar": "سعره حوالي عشرين يورو",
            "form": "sui"
          }
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
          {
            "it": "Tre studenti su dieci hanno risposto",
            "ar": "ثلاثة طلاب من أصل عشرة أجابوا",
            "form": "su"
          }
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
          {
            "it": "Ho deciso sulla base dei dati",
            "ar": "قررت بناءً على البيانات",
            "form": "sulla"
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
          {
            "it": "Studio per imparare",
            "ar": "أذاكر لكي أتعلم",
            "form": "per"
          }
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
          {
            "it": "Questo regalo è per te",
            "ar": "هذه الهدية لك",
            "form": "per"
          }
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
          {
            "it": "Ho lavorato per due ore",
            "ar": "عملت لمدة ساعتين",
            "form": "per"
          }
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
          {
            "it": "Passo per Roma",
            "ar": "أمر عبر روما",
            "form": "per"
          }
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
          {
            "it": "Tremo per la paura",
            "ar": "أرتجف من الخوف",
            "form": "per"
          }
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
          {
            "it": "Ti mando il file per e-mail",
            "ar": "أرسل لك الملف عبر البريد الإلكتروني",
            "form": "per"
          }
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
          {
            "it": "Sono tra amici",
            "ar": "أنا بين أصدقاء",
            "form": "tra"
          }
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
          {
            "it": "Parto fra due giorni",
            "ar": "أسافر بعد يومين",
            "form": "fra"
          }
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
          {
            "it": "C’è fiducia tra noi",
            "ar": "هناك ثقة بيننا",
            "form": "tra"
          }
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
          {
            "it": "Scegli tra questo e quello",
            "ar": "اختر بين هذا وذاك",
            "form": "tra"
          }
        ]
      }
    ]
  }
];
