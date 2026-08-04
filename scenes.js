const SCENES = [
  {
    "id": "scene1",
    "titleIt": "Le chiavi di casa",
    "titleAr": "مفاتيح البيت",
    "register": "وديّ",
    "speakers": [
      "Giulia",
      "Marco"
    ],
    "lines": [
      {
        "speaker": "Giulia",
        "it": "Marco, perché sei ancora qui davanti al portone?",
        "ar": "ماركو، لماذا ما زلتَ هنا أمام الباب؟",
        "en": "Marco, why are you still here in front of the gate?",
        "words": [
          {
            "it": "Marco",
            "ar": "ماركو",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "perché",
            "ar": "لماذا",
            "type": "interrogativo",
            "quiz": [],
            "note": null,
            "grammarId": "interrogativi"
          },
          {
            "it": "sei",
            "ar": "ما زلتَ (تكون)",
            "type": "verbo",
            "quiz": [],
            "note": "Essere، Presente"
          },
          {
            "it": "ancora",
            "ar": "لا يزال / ما زال",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          },
          {
            "it": "qui",
            "ar": "هنا",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "davanti al",
            "ar": "أمام",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "grammarId": "improprie"
          },
          {
            "it": "portone",
            "ar": "الباب الكبير",
            "type": "altro",
            "quiz": [],
            "note": null
          }
        ]
      },
      {
        "speaker": "Giulia",
        "it": "Non hai le chiavi con te?",
        "ar": "أليست المفاتيح معك؟",
        "en": "Don't you have the keys with you?",
        "words": [
          {
            "it": "Non",
            "ar": "لا / أ...لا",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "hai",
            "ar": "عندك (تملك)",
            "type": "verbo",
            "quiz": [],
            "note": "Avere، Presente"
          },
          {
            "it": "le chiavi",
            "ar": "المفاتيح",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "con",
            "ar": "مع",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#1e88e5",
            "grammarId": "prep_con"
          },
          {
            "it": "te",
            "ar": "أنت (بعد حرف جر)",
            "type": "pronome",
            "quiz": [],
            "note": null
          }
        ]
      },
      {
        "speaker": "Marco",
        "it": "No, non le ho prese stamattina.",
        "ar": "لا، لم آخذها هذا الصباح.",
        "en": "No, I didn't take them this morning.",
        "words": [
          {
            "it": "No",
            "ar": "لا",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "non",
            "ar": "لا",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "le",
            "ar": "هُنّ / إياها (ضمير مفعول)",
            "type": "pronome",
            "quiz": [],
            "note": null,
            "grammarId": "pronomi_complemento"
          },
          {
            "it": "ho prese",
            "ar": "أخذتُ",
            "type": "verbo",
            "quiz": [],
            "note": "Prendere، Passato Prossimo"
          },
          {
            "it": "stamattina",
            "ar": "هذا الصباح",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          }
        ]
      },
      {
        "speaker": "Marco",
        "it": "Per questo ho telefonato a Luca tre volte.",
        "ar": "ولهذا هاتفتُ لوكا ثلاث مرات.",
        "en": "That's why I called Luca three times.",
        "words": [
          {
            "it": "Per questo",
            "ar": "ولهذا / لهذا السبب",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "ho telefonato",
            "ar": "هاتفتُ",
            "type": "verbo",
            "quiz": [],
            "note": "Telefonare، Passato Prossimo"
          },
          {
            "it": "a",
            "ar": "لـ / إلى",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_a"
          },
          {
            "it": "Luca",
            "ar": "لوكا",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "tre volte",
            "ar": "ثلاث مرات",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "nomi_sostantivi"
          }
        ]
      },
      {
        "speaker": "Giulia",
        "it": "A Luca? Ma lui è al lavoro fino alle sei.",
        "ar": "لوكا؟ لكنه في العمل حتى السادسة.",
        "en": "Luca? But he's at work until six.",
        "words": [
          {
            "it": "A Luca?",
            "ar": "لوكا؟ (ترديد)",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "Ma",
            "ar": "لكن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "lui",
            "ar": "هو",
            "type": "pronome",
            "quiz": [],
            "note": null,
            "grammarId": "pronomi_soggetto"
          },
          {
            "it": "è",
            "ar": "يكون / موجود",
            "type": "verbo",
            "quiz": [],
            "note": "Essere، Presente"
          },
          {
            "it": "al lavoro",
            "ar": "في العمل",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_a"
          },
          {
            "it": "fino alle sei",
            "ar": "حتى الساعة السادسة",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "grammarId": "improprie"
          }
        ]
      },
      {
        "speaker": "Giulia",
        "it": "Allora resta da me fino a stasera.",
        "ar": "إذن ابقَ عندي حتى المساء.",
        "en": "Then stay at my place until tonight.",
        "words": [
          {
            "it": "Allora",
            "ar": "إذن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "resta",
            "ar": "ابقَ (أمر)",
            "type": "verbo",
            "quiz": [],
            "note": "Restare، Imperativo — Tu"
          },
          {
            "it": "da me",
            "ar": "عندي",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#5e35b1",
            "grammarId": "prep_da"
          },
          {
            "it": "fino a",
            "ar": "حتى",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "grammarId": "improprie"
          },
          {
            "it": "stasera",
            "ar": "هذا المساء",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "momenti_giornata"
          }
        ]
      },
      {
        "speaker": "Marco",
        "it": "Non posso, perché alle quattro arriva mia sorella.",
        "ar": "لا أستطيع، لأن أختي تصل في الرابعة.",
        "en": "I can't, because my sister arrives at four.",
        "words": [
          {
            "it": "Non posso",
            "ar": "لا أستطيع",
            "type": "verbo",
            "quiz": [],
            "note": "Potere، Presente"
          },
          {
            "it": "perché",
            "ar": "لأن",
            "type": "congiunzioni",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "alle quattro",
            "ar": "في الساعة الرابعة",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_a"
          },
          {
            "it": "arriva",
            "ar": "تصل",
            "type": "verbo",
            "quiz": [],
            "note": "Arrivare، Presente"
          },
          {
            "it": "mia sorella",
            "ar": "أختي",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "possessivi"
          }
        ]
      },
      {
        "speaker": "Marco",
        "it": "Dammi piuttosto il numero del portiere.",
        "ar": "أعطني بدلاً من ذلك رقم الحارس.",
        "en": "Give me the doorman's number instead.",
        "words": [
          {
            "it": "Dammi",
            "ar": "أعطني",
            "type": "verbo",
            "quiz": [],
            "note": "Dare، Imperativo — Tu + mi"
          },
          {
            "it": "piuttosto",
            "ar": "بدلاً من ذلك",
            "type": "avverbio",
            "quiz": [],
            "note": null
          },
          {
            "it": "il numero",
            "ar": "الرقم",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "articoli_determinativi"
          },
          {
            "it": "del portiere",
            "ar": "خاص بالحارس",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_di"
          }
        ]
      },
      {
        "speaker": "Marco",
        "it": "Secondo mia sorella lui ha una copia.",
        "ar": "بحسب أختي عنده نسخة.",
        "en": "According to my sister, he has a copy.",
        "words": [
          {
            "it": "Secondo",
            "ar": "بحسب",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "grammarId": "improprie"
          },
          {
            "it": "mia sorella",
            "ar": "أختي",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "possessivi"
          },
          {
            "it": "lui",
            "ar": "هو",
            "type": "pronome",
            "quiz": [],
            "note": null,
            "grammarId": "pronomi_soggetto"
          },
          {
            "it": "ha",
            "ar": "عنده (يملك)",
            "type": "verbo",
            "quiz": [],
            "note": "Avere، Presente"
          },
          {
            "it": "una copia",
            "ar": "نسخة",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "partitivi"
          }
        ]
      }
    ]
  },
  {
    "id": "scene2",
    "titleIt": "In agenzia immobiliare",
    "titleAr": "في مكتب العقارات",
    "register": "رسمي",
    "speakers": [
      "Signora Conti",
      "Signor Bellini"
    ],
    "lines": [
      {
        "speaker": "Signora Conti",
        "it": "Buongiorno. Ha visto l'appartamento di via Verdi?",
        "ar": "صباح الخير. هل رأى حضرتُك الشقة في شارع فيردي؟",
        "en": "Good morning. Have you seen the apartment on Verdi street?",
        "words": [
          {
            "it": "Buongiorno",
            "ar": "صباح الخير",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "Ha visto",
            "ar": "هل رأيتَ (رسمي)",
            "type": "verbo",
            "quiz": [],
            "note": "Vedere، Passato Prossimo"
          },
          {
            "it": "l'appartamento",
            "ar": "الشقة",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "articoli_determinativi"
          },
          {
            "it": "di via Verdi",
            "ar": "في شارع فيردي",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_di"
          }
        ]
      },
      {
        "speaker": "Signora Conti",
        "it": "Il proprietario ha già letto la Sua richiesta.",
        "ar": "المالك قرأ طلب حضرتك بالفعل.",
        "en": "The owner has already read your request.",
        "words": [
          {
            "it": "Il proprietario",
            "ar": "المالك",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "ha",
            "ar": "",
            "type": "omesso",
            "skipReason": "ausiliare",
            "quiz": [],
            "note": "جزء من الفعل المساعد"
          },
          {
            "it": "già",
            "ar": "بالفعل",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          },
          {
            "it": "letto",
            "ar": "قرأ",
            "type": "verbo",
            "quiz": [],
            "note": "Leggere، Passato Prossimo"
          },
          {
            "it": "la Sua richiesta",
            "ar": "طلب حضرتك",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "possessivi"
          }
        ]
      },
      {
        "speaker": "Signor Bellini",
        "it": "Sì, l'ho visto sabato con mia moglie.",
        "ar": "نعم، رأيتُها السبت مع زوجتي.",
        "en": "Yes, I saw it Saturday with my wife.",
        "words": [
          {
            "it": "Sì",
            "ar": "نعم",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "l'ho visto",
            "ar": "رأيتُها/رأيتُه",
            "type": "verbo",
            "quiz": [],
            "note": "Vedere، Passato Prossimo"
          },
          {
            "it": "sabato",
            "ar": "يوم السبت",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "giorni_settimana"
          },
          {
            "it": "con",
            "ar": "مع",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#1e88e5",
            "grammarId": "prep_con"
          },
          {
            "it": "mia moglie",
            "ar": "زوجتي",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "possessivi"
          }
        ]
      },
      {
        "speaker": "Signor Bellini",
        "it": "Siamo restati quasi un'ora dentro.",
        "ar": "بقينا في داخلها نحو ساعة.",
        "en": "We stayed almost an hour inside.",
        "words": [
          {
            "it": "Siamo restati",
            "ar": "بقينا",
            "type": "verbo",
            "quiz": [],
            "note": "Restare، Passato Prossimo"
          },
          {
            "it": "quasi un'ora",
            "ar": "نحو ساعة",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "dentro",
            "ar": "في الداخل",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "grammarId": "improprie"
          }
        ]
      },
      {
        "speaker": "Signora Conti",
        "it": "Bene. Allora lui vuole una risposta entro venerdì.",
        "ar": "حسناً. إذن هو يريد رداً قبل الجمعة.",
        "en": "Good. So he wants an answer by Friday.",
        "words": [
          {
            "it": "Bene",
            "ar": "حسناً",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "Allora",
            "ar": "إذن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "lui",
            "ar": "هو",
            "type": "pronome",
            "quiz": [],
            "note": null,
            "grammarId": "pronomi_soggetto"
          },
          {
            "it": "vuole",
            "ar": "يريد",
            "type": "verbo",
            "quiz": [],
            "note": "Volere، Presente"
          },
          {
            "it": "una risposta",
            "ar": "رداً",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "partitivi"
          },
          {
            "it": "entro venerdì",
            "ar": "قبل الجمعة",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "giorni_settimana"
          }
        ]
      },
      {
        "speaker": "Signora Conti",
        "it": "Può portare i documenti domani mattina?",
        "ar": "أتستطيع إحضار الوثائق غداً صباحاً؟",
        "en": "Can you bring the documents tomorrow morning?",
        "words": [
          {
            "it": "Può",
            "ar": "أتستطيع (رسمي)",
            "type": "verbo",
            "quiz": [],
            "note": "Potere، Presente"
          },
          {
            "it": "portare",
            "ar": "أن تُحضر",
            "type": "verbo",
            "quiz": [],
            "note": null
          },
          {
            "it": "i documenti",
            "ar": "الوثائق",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "articoli_determinativi"
          },
          {
            "it": "domani mattina",
            "ar": "غداً صباحاً",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "momenti_giornata"
          }
        ]
      },
      {
        "speaker": "Signor Bellini",
        "it": "Certo, li porto io in ufficio.",
        "ar": "بالتأكيد، أحضرها أنا إلى المكتب.",
        "en": "Sure, I'll bring them to the office myself.",
        "words": [
          {
            "it": "Certo",
            "ar": "بالتأكيد",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "li porto",
            "ar": "أحضرها",
            "type": "verbo",
            "quiz": [],
            "note": "Portare، Presente"
          },
          {
            "it": "io",
            "ar": "أنا",
            "type": "pronome",
            "quiz": [],
            "note": null,
            "grammarId": "pronomi_soggetto"
          },
          {
            "it": "in ufficio",
            "ar": "إلى المكتب",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#fb8c00",
            "grammarId": "prep_in"
          }
        ]
      },
      {
        "speaker": "Signor Bellini",
        "it": "Prima però mi dica una cosa.",
        "ar": "لكن قل لي أولاً شيئاً.",
        "en": "But first tell me one thing.",
        "words": [
          {
            "it": "Prima",
            "ar": "أولاً",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "improprie"
          },
          {
            "it": "però",
            "ar": "لكن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "mi dica",
            "ar": "قل لي (رسمي أمر)",
            "type": "verbo",
            "quiz": [],
            "note": "Dire، Imperativo — Lei (رسمي) + mi"
          },
          {
            "it": "una cosa",
            "ar": "شيئاً",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "partitivi"
          }
        ]
      },
      {
        "speaker": "Signor Bellini",
        "it": "Il riscaldamento è nel prezzo, o no?",
        "ar": "هل التدفئة داخلة في السعر أم لا؟",
        "en": "Is the heating included in the price, or not?",
        "words": [
          {
            "it": "Il riscaldamento",
            "ar": "التدفئة",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "è",
            "ar": "تكون / موجودة",
            "type": "verbo",
            "quiz": [],
            "note": "Essere، Presente"
          },
          {
            "it": "nel prezzo",
            "ar": "في السعر",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#fb8c00",
            "grammarId": "prep_in"
          },
          {
            "it": "o no?",
            "ar": "أم لا؟",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          }
        ]
      }
    ]
  },
  {
    "id": "scene3",
    "titleIt": "Prima della verifica",
    "titleAr": "قبل الاختبار",
    "register": "أمرٌ وسلطة",
    "speakers": [
      "Professor Bianchi",
      "Tommaso"
    ],
    "lines": [
      {
        "speaker": "Professor Bianchi",
        "it": "Tommaso, hai studiato il capitolo sui verbi?",
        "ar": "توماسو، هل درستَ الفصل الخاص بالأفعال؟",
        "en": "Tommaso, have you studied the chapter on verbs?",
        "words": [
          {
            "it": "Tommaso",
            "ar": "توماسو",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "hai studiato",
            "ar": "هل درستَ",
            "type": "verbo",
            "quiz": [],
            "note": "Studiare، Passato Prossimo"
          },
          {
            "it": "il capitolo",
            "ar": "الفصل",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "articoli_determinativi"
          },
          {
            "it": "sui verbi",
            "ar": "الخاص بالأفعال",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#d81b60",
            "grammarId": "prep_su"
          }
        ]
      },
      {
        "speaker": "Professor Bianchi",
        "it": "Domani la verifica è alle nove.",
        "ar": "الاختبار غداً في التاسعة.",
        "en": "Tomorrow the test is at nine.",
        "words": [
          {
            "it": "Domani",
            "ar": "غداً",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          },
          {
            "it": "la verifica",
            "ar": "الاختبار",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "è",
            "ar": "يكون / تكون",
            "type": "verbo",
            "quiz": [],
            "note": "Essere، Presente"
          },
          {
            "it": "alle nove",
            "ar": "في التاسعة",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_a"
          }
        ]
      },
      {
        "speaker": "Tommaso",
        "it": "Ho letto tutto, ma non ho finito gli esercizi.",
        "ar": "قرأتُ كل شيء، لكنني لم أُنهِ التمارين.",
        "en": "I read everything, but I haven't finished the exercises.",
        "words": [
          {
            "it": "Ho letto",
            "ar": "قرأتُ",
            "type": "verbo",
            "quiz": [],
            "note": "Leggere، Passato Prossimo"
          },
          {
            "it": "tutto",
            "ar": "كل شيء",
            "type": "indefinito",
            "quiz": [],
            "note": null,
            "grammarId": "indefiniti"
          },
          {
            "it": "ma",
            "ar": "لكن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "non ho finito",
            "ar": "لم أُنهِ",
            "type": "verbo",
            "quiz": [],
            "note": "Finire، Passato Prossimo"
          },
          {
            "it": "gli esercizi",
            "ar": "التمارين",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "articoli_determinativi"
          }
        ]
      },
      {
        "speaker": "Tommaso",
        "it": "Ieri sera dormivo in piedi, professore.",
        "ar": "أمس مساءً كنتُ أنام واقفاً، يا أستاذ.",
        "en": "Last night I was falling asleep standing up, professor.",
        "words": [
          {
            "it": "Ieri sera",
            "ar": "أمس مساءً",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          },
          {
            "it": "dormivo",
            "ar": "كنتُ أنام",
            "type": "verbo",
            "quiz": [],
            "note": "Dormire، Imperfetto"
          },
          {
            "it": "in piedi",
            "ar": "واقفاً",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#fb8c00",
            "grammarId": "prep_in"
          },
          {
            "it": "professore",
            "ar": "يا أستاذ",
            "type": "altro",
            "quiz": [],
            "note": null
          }
        ]
      },
      {
        "speaker": "Professor Bianchi",
        "it": "Allora leggi solo le tabelle, non tutto il libro.",
        "ar": "إذن اقرأ الجداول فقط، لا الكتاب كله.",
        "en": "Then just read the tables, not the whole book.",
        "words": [
          {
            "it": "Allora",
            "ar": "إذن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "leggi",
            "ar": "اقرأ (أمر)",
            "type": "verbo",
            "quiz": [],
            "note": "Leggere، Imperativo — Tu"
          },
          {
            "it": "solo",
            "ar": "فقط",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "parole_multitasking"
          },
          {
            "it": "le tabelle",
            "ar": "الجداول",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "articoli_determinativi"
          },
          {
            "it": "non tutto il libro",
            "ar": "لا الكتاب كله",
            "type": "indefinito",
            "quiz": [],
            "note": null,
            "grammarId": "indefiniti"
          }
        ]
      },
      {
        "speaker": "Professor Bianchi",
        "it": "Anche Chiara ha avuto lo stesso problema.",
        "ar": "كيارا أيضاً واجهت المشكلة نفسها.",
        "en": "Chiara also had the same problem.",
        "words": [
          {
            "it": "Anche",
            "ar": "أيضاً",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "anche_pure"
          },
          {
            "it": "Chiara",
            "ar": "كيارا",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "ha avuto",
            "ar": "واجهت (عندها)",
            "type": "verbo",
            "quiz": [],
            "note": "Avere، Passato Prossimo"
          },
          {
            "it": "lo stesso problema",
            "ar": "المشكلة نفسها",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "aggettivi_vari"
          }
        ]
      },
      {
        "speaker": "Tommaso",
        "it": "Lei come ha potuto finire in una settimana?",
        "ar": "وكيف استطاعت هي أن تُنهي في أسبوع؟",
        "en": "How was she able to finish in one week?",
        "words": [
          {
            "it": "Lei",
            "ar": "هي",
            "type": "pronome",
            "quiz": [],
            "note": null,
            "grammarId": "pronomi_soggetto"
          },
          {
            "it": "come",
            "ar": "كيف",
            "type": "interrogativo",
            "quiz": [],
            "note": null,
            "grammarId": "interrogativi"
          },
          {
            "it": "ha potuto",
            "ar": "استطاعت",
            "type": "verbo",
            "quiz": [],
            "note": "Potere، Passato Prossimo"
          },
          {
            "it": "finire",
            "ar": "أن تُنهي",
            "type": "verbo",
            "quiz": [],
            "note": null
          },
          {
            "it": "in una settimana",
            "ar": "في أسبوع",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#fb8c00",
            "grammarId": "prep_in"
          }
        ]
      },
      {
        "speaker": "Tommaso",
        "it": "Noi non abbiamo mai scritto un testo così lungo.",
        "ar": "نحن لم نكتب قطّ نصاً بهذا الطول.",
        "en": "We've never written such a long text.",
        "words": [
          {
            "it": "Noi",
            "ar": "نحن",
            "type": "pronome",
            "quiz": [],
            "note": null,
            "grammarId": "pronomi_soggetto"
          },
          {
            "it": "non abbiamo",
            "ar": "لم",
            "type": "omesso",
            "skipReason": "ausiliare",
            "quiz": [],
            "note": "جزء من الفعل المساعد (منفي)"
          },
          {
            "it": "mai",
            "ar": "أبداً",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          },
          {
            "it": "scritto",
            "ar": "نكتب",
            "type": "verbo",
            "quiz": [],
            "note": "Scrivere، Passato Prossimo"
          },
          {
            "it": "un testo",
            "ar": "نصاً",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "partitivi"
          },
          {
            "it": "così lungo",
            "ar": "بهذا الطول",
            "type": "altro",
            "quiz": [],
            "note": null
          }
        ]
      },
      {
        "speaker": "Tommaso",
        "it": "Mi dia un consiglio, per favore.",
        "ar": "أعطني نصيحة، من فضلك.",
        "en": "Give me some advice, please.",
        "words": [
          {
            "it": "Mi dia",
            "ar": "أعطني (رسمي أمر)",
            "type": "verbo",
            "quiz": [],
            "note": "Dare، Imperativo — Lei (رسمي) + mi"
          },
          {
            "it": "un consiglio",
            "ar": "نصيحة",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "partitivi"
          },
          {
            "it": "per favore",
            "ar": "من فضلك",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#1e88e5",
            "grammarId": "prep_per"
          }
        ]
      }
    ]
  },
  {
    "id": "scene4",
    "titleIt": "Alla stazione",
    "titleAr": "في المحطة",
    "register": "رسمي",
    "speakers": [
      "Chiara",
      "Signora Ferrari"
    ],
    "lines": [
      {
        "speaker": "Chiara",
        "it": "Buongiorno, il treno per Milano è già partito?",
        "ar": "صباح الخير، هل سافر قطار ميلانو بالفعل؟",
        "en": "Good morning, has the train for Milan already left?",
        "words": [
          {
            "it": "Buongiorno",
            "ar": "صباح الخير",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "il treno per Milano",
            "ar": "قطار ميلانو",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#1e88e5",
            "grammarId": "prep_per"
          },
          {
            "it": "è",
            "ar": "",
            "type": "omesso",
            "skipReason": "ausiliare",
            "quiz": [],
            "note": "جزء من الفعل المساعد"
          },
          {
            "it": "già",
            "ar": "بالفعل",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          },
          {
            "it": "partito",
            "ar": "سافر",
            "type": "verbo",
            "quiz": [],
            "note": "Partire، Passato Prossimo"
          }
        ]
      },
      {
        "speaker": "Chiara",
        "it": "Sul sito ho letto un altro orario.",
        "ar": "على الموقع قرأتُ توقيتاً آخر.",
        "en": "On the website I read a different time.",
        "words": [
          {
            "it": "Sul sito",
            "ar": "على الموقع",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#d81b60",
            "grammarId": "prep_su"
          },
          {
            "it": "ho letto",
            "ar": "قرأتُ",
            "type": "verbo",
            "quiz": [],
            "note": "Leggere، Passato Prossimo"
          },
          {
            "it": "un altro orario",
            "ar": "توقيتاً آخر",
            "type": "indefinito",
            "quiz": [],
            "note": null,
            "grammarId": "indefiniti"
          }
        ]
      },
      {
        "speaker": "Signora Ferrari",
        "it": "È partito alle otto e dieci, signora.",
        "ar": "سافر في الثامنة وعشر دقائق، يا سيدتي.",
        "en": "It left at eight ten, ma'am.",
        "words": [
          {
            "it": "È partito",
            "ar": "سافر",
            "type": "verbo",
            "quiz": [],
            "note": "Partire، Passato Prossimo"
          },
          {
            "it": "alle otto e dieci",
            "ar": "في الثامنة وعشر دقائق",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_a"
          },
          {
            "it": "signora",
            "ar": "يا سيدتي",
            "type": "altro",
            "quiz": [],
            "note": null
          }
        ]
      },
      {
        "speaker": "Signora Ferrari",
        "it": "Il prossimo parte fra venti minuti dal binario tre.",
        "ar": "التالي يسافر بعد عشرين دقيقة من الرصيف الثالث.",
        "en": "The next one leaves in twenty minutes from platform three.",
        "words": [
          {
            "it": "Il prossimo",
            "ar": "التالي",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "aggettivi_vari"
          },
          {
            "it": "parte",
            "ar": "يسافر",
            "type": "verbo",
            "quiz": [],
            "note": "Partire، Presente"
          },
          {
            "it": "fra venti minuti",
            "ar": "بعد عشرين دقيقة",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#5e35b1",
            "grammarId": "prep_tra_fra"
          },
          {
            "it": "dal binario tre",
            "ar": "من الرصيف الثالث",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#5e35b1",
            "grammarId": "prep_da"
          }
        ]
      },
      {
        "speaker": "Chiara",
        "it": "Ma Matteo mi ha scritto che arriva alle nove!",
        "ar": "لكن ماتيو كتب لي أنه يصل في التاسعة!",
        "en": "But Matteo wrote to me that he arrives at nine!",
        "words": [
          {
            "it": "Ma",
            "ar": "لكن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "Matteo",
            "ar": "ماتيو",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "mi ha scritto",
            "ar": "كتب لي",
            "type": "verbo",
            "quiz": [],
            "note": "Scrivere، Passato Prossimo"
          },
          {
            "it": "che arriva",
            "ar": "أنه يصل",
            "type": "verbo",
            "quiz": [],
            "note": "Arrivare، Presente"
          },
          {
            "it": "alle nove",
            "ar": "في التاسعة",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_a"
          }
        ]
      },
      {
        "speaker": "Chiara",
        "it": "Lui non ha mai preso questo treno da solo.",
        "ar": "وهو لم يركب هذا القطار وحده قطّ.",
        "en": "He's never taken this train alone.",
        "words": [
          {
            "it": "Lui",
            "ar": "هو",
            "type": "pronome",
            "quiz": [],
            "note": null,
            "grammarId": "pronomi_soggetto"
          },
          {
            "it": "non ha",
            "ar": "لم",
            "type": "omesso",
            "skipReason": "ausiliare",
            "quiz": [],
            "note": "جزء من الفعل المساعد (منفي)"
          },
          {
            "it": "mai",
            "ar": "أبداً",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          },
          {
            "it": "preso",
            "ar": "يركب",
            "type": "verbo",
            "quiz": [],
            "note": "Prendere، Passato Prossimo"
          },
          {
            "it": "questo treno",
            "ar": "هذا القطار",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "dimostrativi"
          },
          {
            "it": "da solo",
            "ar": "وحده",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#5e35b1",
            "grammarId": "prep_da"
          }
        ]
      },
      {
        "speaker": "Signora Ferrari",
        "it": "Allora gli telefoni subito.",
        "ar": "إذن هاتفيه فوراً.",
        "en": "Then call him right away.",
        "words": [
          {
            "it": "Allora",
            "ar": "إذن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "gli telefoni",
            "ar": "هاتفيه (أمر)",
            "type": "verbo",
            "quiz": [],
            "note": "Telefonare، Imperativo — Lei (رسمي) + gli"
          },
          {
            "it": "subito",
            "ar": "فوراً",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          }
        ]
      },
      {
        "speaker": "Signora Ferrari",
        "it": "Senza biglietto non può restare sul binario.",
        "ar": "بغير تذكرة لا يجوز له البقاء على الرصيف.",
        "en": "Without a ticket he can't stay on the platform.",
        "words": [
          {
            "it": "Senza biglietto",
            "ar": "بغير تذكرة",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "grammarId": "improprie"
          },
          {
            "it": "non può restare",
            "ar": "لا يجوز له البقاء",
            "type": "verbo",
            "quiz": [],
            "note": "Potere، Presente"
          },
          {
            "it": "sul binario",
            "ar": "على الرصيف",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#d81b60",
            "grammarId": "prep_su"
          }
        ]
      },
      {
        "speaker": "Signora Ferrari",
        "it": "Prenda anche il biglietto per lui.",
        "ar": "وخذي أيضاً تذكرةً له.",
        "en": "Get a ticket for him too.",
        "words": [
          {
            "it": "Prenda",
            "ar": "خذي (رسمي أمر)",
            "type": "verbo",
            "quiz": [],
            "note": "Prendere، Imperativo — Lei (رسمي)"
          },
          {
            "it": "anche",
            "ar": "أيضاً",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "anche_pure"
          },
          {
            "it": "il biglietto",
            "ar": "تذكرةً",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "articoli_determinativi"
          },
          {
            "it": "per lui",
            "ar": "له",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#1e88e5",
            "grammarId": "prep_per"
          }
        ]
      }
    ]
  },
  {
    "id": "scene5",
    "titleIt": "Dalla dottoressa",
    "titleAr": "عند الطبيبة",
    "register": "رسمي",
    "speakers": [
      "Dottoressa Ricci",
      "Signor Bellini"
    ],
    "lines": [
      {
        "speaker": "Dottoressa Ricci",
        "it": "Buonasera. Da quanto tempo ha questo dolore?",
        "ar": "مساء الخير. منذ متى هذا الألم عند حضرتك؟",
        "en": "Good evening. How long have you had this pain?",
        "words": [
          {
            "it": "Buonasera",
            "ar": "مساء الخير",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "Da quanto tempo",
            "ar": "منذ متى",
            "type": "interrogativo",
            "quiz": [],
            "note": null,
            "grammarId": "interrogativi"
          },
          {
            "it": "ha",
            "ar": "عند حضرتك (تملك)",
            "type": "verbo",
            "quiz": [],
            "note": "Avere، Presente"
          },
          {
            "it": "questo dolore",
            "ar": "هذا الألم",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "dimostrativi"
          }
        ]
      },
      {
        "speaker": "Dottoressa Ricci",
        "it": "E la notte dorme bene?",
        "ar": "وفي الليل، أتنام جيداً؟",
        "en": "And at night do you sleep well?",
        "words": [
          {
            "it": "E",
            "ar": "و",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "la notte",
            "ar": "في الليل",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "momenti_giornata"
          },
          {
            "it": "dorme",
            "ar": "أتنام (رسمي)",
            "type": "verbo",
            "quiz": [],
            "note": "Dormire، Presente"
          },
          {
            "it": "bene",
            "ar": "جيداً",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbio_modo"
          }
        ]
      },
      {
        "speaker": "Signor Bellini",
        "it": "Ce l'ho da tre giorni, soprattutto la sera.",
        "ar": "هو عندي منذ ثلاثة أيام، خاصةً في المساء.",
        "en": "I've had it for three days, especially in the evening.",
        "words": [
          {
            "it": "Ce l'ho",
            "ar": "هو عندي",
            "type": "verbo",
            "quiz": [],
            "note": "Avere، Presente"
          },
          {
            "it": "da tre giorni",
            "ar": "منذ ثلاثة أيام",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#5e35b1",
            "grammarId": "prep_da"
          },
          {
            "it": "soprattutto",
            "ar": "خاصةً",
            "type": "avverbio",
            "quiz": [],
            "note": null
          },
          {
            "it": "la sera",
            "ar": "في المساء",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "momenti_giornata"
          }
        ]
      },
      {
        "speaker": "Signor Bellini",
        "it": "Proprio per questo dormo male.",
        "ar": "ولهذا بالضبط أنام بشكل سيئ.",
        "en": "That's exactly why I sleep badly.",
        "words": [
          {
            "it": "Proprio per questo",
            "ar": "ولهذا بالضبط",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "dormo",
            "ar": "أنام",
            "type": "verbo",
            "quiz": [],
            "note": "Dormire، Presente"
          },
          {
            "it": "male",
            "ar": "بشكل سيئ",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbio_modo"
          }
        ]
      },
      {
        "speaker": "Dottoressa Ricci",
        "it": "Ha già preso qualche medicina per il dolore?",
        "ar": "هل تناولتَ دواءً ما للألم؟",
        "en": "Have you already taken any medicine for the pain?",
        "words": [
          {
            "it": "Ha",
            "ar": "",
            "type": "omesso",
            "skipReason": "ausiliare",
            "quiz": [],
            "note": "جزء من الفعل المساعد"
          },
          {
            "it": "già",
            "ar": "بالفعل",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          },
          {
            "it": "preso",
            "ar": "تناولتَ (رسمي)",
            "type": "verbo",
            "quiz": [],
            "note": "Prendere، Passato Prossimo"
          },
          {
            "it": "qualche medicina",
            "ar": "دواءً ما",
            "type": "indefinito",
            "quiz": [],
            "note": null,
            "grammarId": "indefiniti"
          },
          {
            "it": "per il dolore",
            "ar": "للألم",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#1e88e5",
            "grammarId": "prep_per"
          }
        ]
      },
      {
        "speaker": "Dottoressa Ricci",
        "it": "Mi dica anche se la mattina è più forte.",
        "ar": "وقل لي أيضاً إن كان أقوى في الصباح.",
        "en": "Also tell me if it's stronger in the morning.",
        "words": [
          {
            "it": "Mi dica",
            "ar": "قل لي (رسمي أمر)",
            "type": "verbo",
            "quiz": [],
            "note": "Dire، Imperativo — Lei (رسمي) + mi"
          },
          {
            "it": "anche se",
            "ar": "أيضاً إن كان",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "anche_pure"
          },
          {
            "it": "la mattina",
            "ar": "في الصباح",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "momenti_giornata"
          },
          {
            "it": "è più forte",
            "ar": "أقوى",
            "type": "verbo",
            "quiz": [],
            "note": "Essere، Presente"
          }
        ]
      },
      {
        "speaker": "Signor Bellini",
        "it": "Solo dell'aspirina martedì, ma non ha fatto niente.",
        "ar": "أسبرين فقط يوم الثلاثاء، لكنه لم يُجدِ شيئاً.",
        "en": "Just some aspirin on Tuesday, but it did nothing.",
        "words": [
          {
            "it": "Solo",
            "ar": "فقط",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "parole_multitasking"
          },
          {
            "it": "dell'aspirina",
            "ar": "أسبرين",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "partitivi"
          },
          {
            "it": "martedì",
            "ar": "يوم الثلاثاء",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "giorni_settimana"
          },
          {
            "it": "ma",
            "ar": "لكن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "non ha fatto niente",
            "ar": "لم يُجدِ شيئاً",
            "type": "verbo",
            "quiz": [],
            "note": "Fare، Passato Prossimo"
          }
        ]
      },
      {
        "speaker": "Signor Bellini",
        "it": "La mattina è più forte, come dice Lei.",
        "ar": "في الصباح أقوى، كما تقول حضرتُك.",
        "en": "It's stronger in the morning, like you say.",
        "words": [
          {
            "it": "La mattina",
            "ar": "في الصباح",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "momenti_giornata"
          },
          {
            "it": "è più forte",
            "ar": "أقوى",
            "type": "verbo",
            "quiz": [],
            "note": "Essere، Presente"
          },
          {
            "it": "come",
            "ar": "كما",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "dice Lei",
            "ar": "تقول حضرتُك",
            "type": "verbo",
            "quiz": [],
            "note": "Dire، Presente"
          }
        ]
      },
      {
        "speaker": "Signor Bellini",
        "it": "Altre medicine però non voglio prenderne.",
        "ar": "أما أدويةً أخرى فلا أريد أن أتناول منها.",
        "en": "But I don't want to take any other medicine.",
        "words": [
          {
            "it": "Altre medicine",
            "ar": "أدويةً أخرى",
            "type": "indefinito",
            "quiz": [],
            "note": null,
            "grammarId": "indefiniti"
          },
          {
            "it": "però",
            "ar": "أما / لكن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "non voglio",
            "ar": "لا أريد",
            "type": "verbo",
            "quiz": [],
            "note": "Volere، Presente"
          },
          {
            "it": "prenderne",
            "ar": "أن أتناول منها",
            "type": "verbo",
            "quiz": [],
            "note": "Prendere + ne (ضمير جزئي)"
          }
        ]
      }
    ]
  },
  {
    "id": "scene6",
    "titleIt": "Il pacco",
    "titleAr": "الحزمة",
    "register": "رسمي",
    "speakers": [
      "Giulia",
      "Signora Conti"
    ],
    "lines": [
      {
        "speaker": "Giulia",
        "it": "Buongiorno, il mio pacco non è ancora arrivato.",
        "ar": "صباح الخير، حزمتي لم تصل بعد.",
        "en": "Good morning, my package still hasn't arrived.",
        "words": [
          {
            "it": "Buongiorno",
            "ar": "صباح الخير",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "il mio pacco",
            "ar": "حزمتي",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "possessivi"
          },
          {
            "it": "non è",
            "ar": "لم",
            "type": "omesso",
            "skipReason": "ausiliare",
            "quiz": [],
            "note": "جزء من الفعل المساعد (منفي)"
          },
          {
            "it": "ancora",
            "ar": "بعد",
            "type": "avverbio",
            "quiz": [],
            "note": null,
            "grammarId": "avverbi_tempo"
          },
          {
            "it": "arrivato",
            "ar": "تصل",
            "type": "verbo",
            "quiz": [],
            "note": "Arrivare، Passato Prossimo"
          }
        ]
      },
      {
        "speaker": "Giulia",
        "it": "Mio fratello lo ha portato giovedì alla posta.",
        "ar": "أخي حملها يوم الخميس إلى البريد.",
        "en": "My brother took it to the post office Thursday.",
        "words": [
          {
            "it": "Mio fratello",
            "ar": "أخي",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "possessivi"
          },
          {
            "it": "lo ha portato",
            "ar": "حملها",
            "type": "verbo",
            "quiz": [],
            "note": "Portare، Passato Prossimo"
          },
          {
            "it": "giovedì",
            "ar": "يوم الخميس",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "giorni_settimana"
          },
          {
            "it": "alla posta",
            "ar": "إلى البريد",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_a"
          }
        ]
      },
      {
        "speaker": "Signora Conti",
        "it": "Chi ha scritto l'indirizzo sul pacco?",
        "ar": "من كتب العنوان على الحزمة؟",
        "en": "Who wrote the address on the package?",
        "words": [
          {
            "it": "Chi",
            "ar": "من",
            "type": "interrogativo",
            "quiz": [],
            "note": null,
            "grammarId": "interrogativi"
          },
          {
            "it": "ha scritto",
            "ar": "كتب",
            "type": "verbo",
            "quiz": [],
            "note": "Scrivere، Passato Prossimo"
          },
          {
            "it": "l'indirizzo",
            "ar": "العنوان",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "articoli_determinativi"
          },
          {
            "it": "sul pacco",
            "ar": "على الحزمة",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#d81b60",
            "grammarId": "prep_su"
          }
        ]
      },
      {
        "speaker": "Signora Conti",
        "it": "Senza il documento del destinatario nessuno può prenderlo.",
        "ar": "بغير وثيقة المُرسَل إليه لا أحد يستطيع أخذها.",
        "en": "Without the recipient's document, no one can take it.",
        "words": [
          {
            "it": "Senza il documento",
            "ar": "بغير الوثيقة",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "grammarId": "improprie"
          },
          {
            "it": "del destinatario",
            "ar": "الخاصة بالمُرسَل إليه",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_di"
          },
          {
            "it": "nessuno",
            "ar": "لا أحد",
            "type": "indefinito",
            "quiz": [],
            "note": null,
            "grammarId": "indefiniti"
          },
          {
            "it": "può prenderlo",
            "ar": "يستطيع أخذها",
            "type": "verbo",
            "quiz": [],
            "note": "Potere + Prendere، Presente — Lui + lo"
          }
        ]
      },
      {
        "speaker": "Giulia",
        "it": "L'indirizzo l'ha scritto lui, ma oggi è partito.",
        "ar": "العنوان كتبه هو، لكنه سافر اليوم.",
        "en": "He wrote the address, but he left today.",
        "words": [
          {
            "it": "L'indirizzo",
            "ar": "العنوان (مُقدَّم)",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "l'ha scritto",
            "ar": "كتبه",
            "type": "verbo",
            "quiz": [],
            "note": "Scrivere، Passato Prossimo"
          },
          {
            "it": "lui",
            "ar": "هو",
            "type": "pronome",
            "quiz": [],
            "note": null,
            "grammarId": "pronomi_soggetto"
          },
          {
            "it": "ma",
            "ar": "لكن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "oggi è partito",
            "ar": "سافر اليوم",
            "type": "verbo",
            "quiz": [],
            "note": "Partire، Passato Prossimo"
          }
        ]
      },
      {
        "speaker": "Giulia",
        "it": "Per questo sono qui io, con la sua carta d'identità.",
        "ar": "ولهذا أنا هنا، مع بطاقة هويته.",
        "en": "That's why I'm here, with his ID card.",
        "words": [
          {
            "it": "Per questo",
            "ar": "ولهذا",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "sono qui",
            "ar": "أنا هنا",
            "type": "verbo",
            "quiz": [],
            "note": "Essere، Presente"
          },
          {
            "it": "io",
            "ar": "أنا",
            "type": "pronome",
            "quiz": [],
            "note": null,
            "grammarId": "pronomi_soggetto"
          },
          {
            "it": "con",
            "ar": "مع",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#1e88e5",
            "grammarId": "prep_con"
          },
          {
            "it": "la sua carta d'identità",
            "ar": "بطاقة هويته",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "possessivi"
          }
        ]
      },
      {
        "speaker": "Signora Conti",
        "it": "Bene. Allora resti qui un momento, prego.",
        "ar": "حسناً. إذن ابقَي هنا لحظةً، تفضّلي.",
        "en": "Good. Then please wait here a moment.",
        "words": [
          {
            "it": "Bene",
            "ar": "حسناً",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "Allora",
            "ar": "إذن",
            "type": "congiunzione",
            "quiz": [],
            "note": null,
            "grammarId": "congiunzioni"
          },
          {
            "it": "resti",
            "ar": "ابقَي (رسمي أمر)",
            "type": "verbo",
            "quiz": [],
            "note": "Restare، Imperativo — Lei (رسمي)"
          },
          {
            "it": "qui un momento",
            "ar": "هنا لحظةً",
            "type": "altro",
            "quiz": [],
            "note": null
          },
          {
            "it": "prego",
            "ar": "تفضّلي",
            "type": "altro",
            "quiz": [],
            "note": null
          }
        ]
      },
      {
        "speaker": "Signora Conti",
        "it": "Il suo pacco è tra quelli di ieri.",
        "ar": "حزمتُك بين حزمات الأمس.",
        "en": "Your package is among yesterday's.",
        "words": [
          {
            "it": "Il suo pacco",
            "ar": "حزمتُك",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "possessivi"
          },
          {
            "it": "è",
            "ar": "تكون",
            "type": "verbo",
            "quiz": [],
            "note": "Essere، Presente"
          },
          {
            "it": "tra quelli",
            "ar": "بين تلك",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#5e35b1",
            "grammarId": "prep_tra_fra"
          },
          {
            "it": "di ieri",
            "ar": "الخاصة بالأمس",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "color": "#e53935",
            "grammarId": "prep_di"
          }
        ]
      },
      {
        "speaker": "Signora Conti",
        "it": "Lo prenda: dentro ci sono dei libri.",
        "ar": "خذيها: في داخلها كتب.",
        "en": "Take it: inside there are some books.",
        "words": [
          {
            "it": "Lo prenda",
            "ar": "خذيها (رسمي أمر)",
            "type": "verbo",
            "quiz": [],
            "note": "Prendere، Imperativo — Lei (رسمي) + lo"
          },
          {
            "it": "dentro",
            "ar": "في الداخل",
            "type": "preposizione",
            "quiz": [],
            "note": null,
            "grammarId": "improprie"
          },
          {
            "it": "ci sono",
            "ar": "يوجد",
            "type": "verbo",
            "quiz": [],
            "note": "Esserci، Presente"
          },
          {
            "it": "dei libri",
            "ar": "كتب",
            "type": "altro",
            "quiz": [],
            "note": null,
            "grammarId": "partitivi"
          }
        ]
      }
    ]
  }
];

// Flattens SCENES into sentence-like objects compatible with the existing
// lesson engine (same shape LESSON_SENTENCES items always had: it/ar/en/words),
// plus scene metadata (sceneId, lineIndex, speaker, register...) used to
// render the chat thread above the active line.
const SCENE_SENTENCES = (() => {
  const out = [];
  SCENES.forEach(scene => {
    scene.lines.forEach((line, i) => {
      out.push({
        it: line.it,
        ar: line.ar,
        en: line.en,
        words: line.words,
        pronoun: line.speaker,
        speaker: line.speaker,
        sceneId: scene.id,
        sceneTitleIt: scene.titleIt,
        sceneTitleAr: scene.titleAr,
        register: scene.register,
        speakers: scene.speakers,
        lineIndex: i,
        sceneTotal: scene.lines.length
      });
    });
  });
  return out;
})();
