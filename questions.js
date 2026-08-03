// نظام الأسئلة — بدل نظام نطق الكلمات المفردة. كل سؤال: سياق الجملة اللي قبلها + جواب صح + 3 مشتّتات إيطالية سليمة نحوياً لكن غلط سياقياً.
const REPLY_QUESTIONS = [
  {
    "sceneId": "scene1",
    "lineIndex": 1,
    "contextSpeaker": "Giulia",
    "contextIt": "Marco, perché sei ancora qui davanti al portone?",
    "contextAr": "ماركو، لماذا ما زلتَ هنا أمام الباب؟",
    "sameSpeaker": true,
    "speaker": "Giulia",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Non hai le chiavi con te?",
    "correctAr": "أليست المفاتيح معك؟",
    "options": [
      {
        "it": "Non hai le chiavi con te?",
        "correct": true
      },
      {
        "it": "Non hai le chiavi con me?",
        "correct": false,
        "why": "معاه هو مش معاها هي — الصح «con te»"
      },
      {
        "it": "Non hai la chiave con te?",
        "correct": false,
        "why": "مفرد «la chiave» بينما بتسأل عن كل المفاتيح"
      },
      {
        "it": "Non avevi le chiavi con te?",
        "correct": false,
        "why": "بتسأل عن الحاضر مباشرة فلازم مضارع «hai» مش ماضي مستمر «avevi»"
      }
    ]
  },
  {
    "sceneId": "scene1",
    "lineIndex": 2,
    "contextSpeaker": "Giulia",
    "contextIt": "Non hai le chiavi con te?",
    "contextAr": "أليست المفاتيح معك؟",
    "sameSpeaker": false,
    "speaker": "Marco",
    "promptAr": "ردّ Marco إيه؟",
    "correctIt": "No, non le ho prese stamattina.",
    "correctAr": "لا، لم آخذها هذا الصباح.",
    "options": [
      {
        "it": "No, non le ho prese stamattina.",
        "correct": true
      },
      {
        "it": "No, non li ho presi stamattina.",
        "correct": false,
        "why": "le chiavi مؤنث جمع، فلازم le/prese مش li/presi"
      },
      {
        "it": "No, non le ho prese ieri.",
        "correct": false,
        "why": "«ieri» يناقض إنه هاتفهم النهاردة بعدها"
      },
      {
        "it": "Sì, non le ho prese stamattina.",
        "correct": false,
        "why": "Sì مع نفي مش منطقي في الإيطالي"
      }
    ]
  },
  {
    "sceneId": "scene1",
    "lineIndex": 3,
    "contextSpeaker": "Marco",
    "contextIt": "No, non le ho prese stamattina.",
    "contextAr": "لا، لم آخذها هذا الصباح.",
    "sameSpeaker": true,
    "speaker": "Marco",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Per questo ho telefonato a Luca tre volte.",
    "correctAr": "ولهذا هاتفتُ لوكا ثلاث مرات.",
    "options": [
      {
        "it": "Per questo ho telefonato a Luca tre volte.",
        "correct": true
      },
      {
        "it": "Per questo telefono a Luca tre volte.",
        "correct": false,
        "why": "الفعل هنا لازم ماضي «ho telefonato» مش مضارع"
      },
      {
        "it": "Per questo ho telefonato da Luca tre volte.",
        "correct": false,
        "why": "«telefonare a» مش «da»"
      },
      {
        "it": "Per questo ho telefonato a Luca due volte.",
        "correct": false,
        "why": "الرقم غلط — قال ثلاث مرات"
      }
    ]
  },
  {
    "sceneId": "scene1",
    "lineIndex": 4,
    "contextSpeaker": "Marco",
    "contextIt": "Per questo ho telefonato a Luca tre volte.",
    "contextAr": "ولهذا هاتفتُ لوكا ثلاث مرات.",
    "sameSpeaker": false,
    "speaker": "Giulia",
    "promptAr": "ردّ Giulia إيه؟",
    "correctIt": "A Luca? Ma lui è al lavoro fino alle sei.",
    "correctAr": "لوكا؟ لكنه في العمل حتى السادسة.",
    "options": [
      {
        "it": "A Luca? Ma lui è al lavoro fino alle sei.",
        "correct": true
      },
      {
        "it": "A Marco? Ma lui è al lavoro fino alle sei.",
        "correct": false,
        "why": "بيتكلموا عن لوكا مش ماركو"
      },
      {
        "it": "A Luca? Ma lui era al lavoro fino alle sei.",
        "correct": false,
        "why": "«era» ماضي هيغيّر المعنى (يبقى مش شغال دلوقتي)"
      },
      {
        "it": "A Luca? Ma lui è al lavoro fino alle sette.",
        "correct": false,
        "why": "الرقم غلط"
      }
    ]
  },
  {
    "sceneId": "scene1",
    "lineIndex": 5,
    "contextSpeaker": "Giulia",
    "contextIt": "A Luca? Ma lui è al lavoro fino alle sei.",
    "contextAr": "لوكا؟ لكنه في العمل حتى السادسة.",
    "sameSpeaker": true,
    "speaker": "Giulia",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Allora resta da me fino a stasera.",
    "correctAr": "إذن ابقَ عندي حتى المساء.",
    "options": [
      {
        "it": "Allora resta da me fino a stasera.",
        "correct": true
      },
      {
        "it": "Allora resto da me fino a stasera.",
        "correct": false,
        "why": "بتقول له هو يبقى، فلازم أمر «resta» مش «resto» لنفسها"
      },
      {
        "it": "Allora resta da te fino a stasera.",
        "correct": false,
        "why": "عايزاه يبقى عندها هي مش عنده هو"
      },
      {
        "it": "Allora resta a me fino a stasera.",
        "correct": false,
        "why": "«da me» (عندي) مش «a me»"
      }
    ]
  },
  {
    "sceneId": "scene1",
    "lineIndex": 6,
    "contextSpeaker": "Giulia",
    "contextIt": "Allora resta da me fino a stasera.",
    "contextAr": "إذن ابقَ عندي حتى المساء.",
    "sameSpeaker": false,
    "speaker": "Marco",
    "promptAr": "ردّ Marco إيه؟",
    "correctIt": "Non posso, perché alle quattro arriva mia sorella.",
    "correctAr": "لا أستطيع، لأن أختي تصل في الرابعة.",
    "options": [
      {
        "it": "Non posso, perché alle quattro arriva mia sorella.",
        "correct": true
      },
      {
        "it": "Non posso, perché alle quattro arriva tua sorella.",
        "correct": false,
        "why": "أخته هو مش بتاعتها"
      },
      {
        "it": "Non posso, perché alle quattro arrivava mia sorella.",
        "correct": false,
        "why": "حدث محدد النهاردة، فلازم مضارع «arriva»"
      },
      {
        "it": "Posso, perché alle quattro arriva mia sorella.",
        "correct": false,
        "why": "بيرفض عرضها فلازم «Non posso»"
      }
    ]
  },
  {
    "sceneId": "scene1",
    "lineIndex": 7,
    "contextSpeaker": "Marco",
    "contextIt": "Non posso, perché alle quattro arriva mia sorella.",
    "contextAr": "لا أستطيع، لأن أختي تصل في الرابعة.",
    "sameSpeaker": true,
    "speaker": "Marco",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Dammi piuttosto il numero del portiere.",
    "correctAr": "أعطني بدلاً من ذلك رقم الحارس.",
    "options": [
      {
        "it": "Dammi piuttosto il numero del portiere.",
        "correct": true
      },
      {
        "it": "Dagli piuttosto il numero del portiere.",
        "correct": false,
        "why": "عايز الرقم لنفسه فلازم «Dammi» مش «Dagli»"
      },
      {
        "it": "Dammi piuttosto i numeri del portiere.",
        "correct": false,
        "why": "عايز رقم واحد بس مش أرقام"
      },
      {
        "it": "Dammi piuttosto il numero della portiera.",
        "correct": false,
        "why": "الحارس «portiere» مذكر هنا"
      }
    ]
  },
  {
    "sceneId": "scene1",
    "lineIndex": 8,
    "contextSpeaker": "Marco",
    "contextIt": "Dammi piuttosto il numero del portiere.",
    "contextAr": "أعطني بدلاً من ذلك رقم الحارس.",
    "sameSpeaker": true,
    "speaker": "Marco",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Secondo mia sorella lui ha una copia.",
    "correctAr": "بحسب أختي عنده نسخة.",
    "options": [
      {
        "it": "Secondo mia sorella lui ha una copia.",
        "correct": true
      },
      {
        "it": "Secondo mia sorella lei ha una copia.",
        "correct": false,
        "why": "الحارس «lui» مش «lei»"
      },
      {
        "it": "Secondo mio fratello lui ha una copia.",
        "correct": false,
        "why": "المصدر أخته هو مش أخوه"
      },
      {
        "it": "Secondo mia sorella lui aveva una copia.",
        "correct": false,
        "why": "لازم مضارع «ha» علشان عنده النسخة دلوقتي"
      }
    ]
  },
  {
    "sceneId": "scene2",
    "lineIndex": 1,
    "contextSpeaker": "Signora Conti",
    "contextIt": "Buongiorno. Ha visto l'appartamento di via Verdi?",
    "contextAr": "صباح الخير. هل رأى حضرتُك الشقة في شارع فيردي؟",
    "sameSpeaker": true,
    "speaker": "Signora Conti",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Il proprietario ha già letto la Sua richiesta.",
    "correctAr": "المالك قرأ طلب حضرتك بالفعل.",
    "options": [
      {
        "it": "Il proprietario ha già letto la Sua richiesta.",
        "correct": true
      },
      {
        "it": "Il proprietario ha già letto la mia richiesta.",
        "correct": false,
        "why": "بتكلمه رسمي فلازم «Sua» مش «mia»"
      },
      {
        "it": "Il proprietario leggerà la Sua richiesta.",
        "correct": false,
        "why": "«già» بتدل إن الفعل حصل بالفعل مش هيحصل"
      },
      {
        "it": "I proprietari hanno già letto la Sua richiesta.",
        "correct": false,
        "why": "المالك واحد مش أكتر"
      }
    ]
  },
  {
    "sceneId": "scene2",
    "lineIndex": 2,
    "contextSpeaker": "Signora Conti",
    "contextIt": "Il proprietario ha già letto la Sua richiesta.",
    "contextAr": "المالك قرأ طلب حضرتك بالفعل.",
    "sameSpeaker": false,
    "speaker": "Signor Bellini",
    "promptAr": "ردّ Signor Bellini إيه؟",
    "correctIt": "Sì, l'ho visto sabato con mia moglie.",
    "correctAr": "نعم، رأيتُها السبت مع زوجتي.",
    "options": [
      {
        "it": "Sì, l'ho visto sabato con mia moglie.",
        "correct": true
      },
      {
        "it": "Sì, l'ho vista sabato con mia moglie.",
        "correct": false,
        "why": "appartamento مذكر فلازم «visto» مش «vista»"
      },
      {
        "it": "No, l'ho visto sabato con mia moglie.",
        "correct": false,
        "why": "بيأكّد إنه شافها فلازم «Sì» مش «No»"
      },
      {
        "it": "Sì, l'ho visto domenica con mia moglie.",
        "correct": false,
        "why": "اليوم غلط"
      }
    ]
  },
  {
    "sceneId": "scene2",
    "lineIndex": 3,
    "contextSpeaker": "Signor Bellini",
    "contextIt": "Sì, l'ho visto sabato con mia moglie.",
    "contextAr": "نعم، رأيتُها السبت مع زوجتي.",
    "sameSpeaker": true,
    "speaker": "Signor Bellini",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Siamo restati quasi un'ora dentro.",
    "correctAr": "بقينا في داخلها نحو ساعة.",
    "options": [
      {
        "it": "Siamo restati quasi un'ora dentro.",
        "correct": true
      },
      {
        "it": "Sono restato quasi un'ora dentro.",
        "correct": false,
        "why": "هو وزوجته اتنين فلازم «Siamo...restati» مش «Sono...restato»"
      },
      {
        "it": "Siamo restati quasi un'ora fuori.",
        "correct": false,
        "why": "كانوا جوه الشقة مش برّه"
      },
      {
        "it": "Siamo restate quasi un'ora dentro.",
        "correct": false,
        "why": "الجمع المختلط (هو وهي) بياخد صيغة مذكر «restati»"
      }
    ]
  },
  {
    "sceneId": "scene2",
    "lineIndex": 4,
    "contextSpeaker": "Signor Bellini",
    "contextIt": "Siamo restati quasi un'ora dentro.",
    "contextAr": "بقينا في داخلها نحو ساعة.",
    "sameSpeaker": false,
    "speaker": "Signora Conti",
    "promptAr": "ردّ Signora Conti إيه؟",
    "correctIt": "Bene. Allora lui vuole una risposta entro venerdì.",
    "correctAr": "حسناً. إذن هو يريد رداً قبل الجمعة.",
    "options": [
      {
        "it": "Bene. Allora lui vuole una risposta entro venerdì.",
        "correct": true
      },
      {
        "it": "Bene. Allora lei vuole una risposta entro venerdì.",
        "correct": false,
        "why": "المالك «lui» مش «lei»"
      },
      {
        "it": "Bene. Allora lui voleva una risposta entro venerdì.",
        "correct": false,
        "why": "لسه عايز الرد فلازم مضارع «vuole»"
      },
      {
        "it": "Bene. Allora lui vuole una risposta entro lunedì.",
        "correct": false,
        "why": "اليوم غلط"
      }
    ]
  },
  {
    "sceneId": "scene2",
    "lineIndex": 5,
    "contextSpeaker": "Signora Conti",
    "contextIt": "Bene. Allora lui vuole una risposta entro venerdì.",
    "contextAr": "حسناً. إذن هو يريد رداً قبل الجمعة.",
    "sameSpeaker": true,
    "speaker": "Signora Conti",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Può portare i documenti domani mattina?",
    "correctAr": "أتستطيع إحضار الوثائق غداً صباحاً؟",
    "options": [
      {
        "it": "Può portare i documenti domani mattina?",
        "correct": true
      },
      {
        "it": "Puoi portare i documenti domani mattina?",
        "correct": false,
        "why": "بتكلمه رسمي فلازم «Può» مش «Puoi»"
      },
      {
        "it": "Ha portato i documenti domani mattina?",
        "correct": false,
        "why": "الفعل لازم يبقى سؤال عن المقدرة «Può» مش ماضي"
      },
      {
        "it": "Può portare i documenti oggi pomeriggio?",
        "correct": false,
        "why": "الوقت غلط"
      }
    ]
  },
  {
    "sceneId": "scene2",
    "lineIndex": 6,
    "contextSpeaker": "Signora Conti",
    "contextIt": "Può portare i documenti domani mattina?",
    "contextAr": "أتستطيع إحضار الوثائق غداً صباحاً؟",
    "sameSpeaker": false,
    "speaker": "Signor Bellini",
    "promptAr": "ردّ Signor Bellini إيه؟",
    "correctIt": "Certo, li porto io in ufficio.",
    "correctAr": "بالتأكيد، أحضرها أنا إلى المكتب.",
    "options": [
      {
        "it": "Certo, li porto io in ufficio.",
        "correct": true
      },
      {
        "it": "Certo, li porto io a ufficio.",
        "correct": false,
        "why": "«in ufficio» تعبير ثابت مش «a ufficio»"
      },
      {
        "it": "Certo, lo porto io in ufficio.",
        "correct": false,
        "why": "الوثائق جمع فلازم «li» مش «lo»"
      },
      {
        "it": "Certo, li porti tu in ufficio.",
        "correct": false,
        "why": "هو اللي هيحضرهم فلازم «io...porto»"
      }
    ]
  },
  {
    "sceneId": "scene2",
    "lineIndex": 7,
    "contextSpeaker": "Signor Bellini",
    "contextIt": "Certo, li porto io in ufficio.",
    "contextAr": "بالتأكيد، أحضرها أنا إلى المكتب.",
    "sameSpeaker": true,
    "speaker": "Signor Bellini",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Prima però mi dica una cosa.",
    "correctAr": "لكن قل لي أولاً شيئاً.",
    "options": [
      {
        "it": "Prima però mi dica una cosa.",
        "correct": true
      },
      {
        "it": "Prima però Le dico una cosa.",
        "correct": false,
        "why": "عايز يسمع منها مش يقولها هو"
      },
      {
        "it": "Dopo però mi dica una cosa.",
        "correct": false,
        "why": "عايز يسأل قبل ما يوافق فلازم «Prima»"
      },
      {
        "it": "Prima però mi dici una cosa.",
        "correct": false,
        "why": "بيكلمها رسمي فلازم «dica» مش «dici»"
      }
    ]
  },
  {
    "sceneId": "scene2",
    "lineIndex": 8,
    "contextSpeaker": "Signor Bellini",
    "contextIt": "Prima però mi dica una cosa.",
    "contextAr": "لكن قل لي أولاً شيئاً.",
    "sameSpeaker": true,
    "speaker": "Signor Bellini",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Il riscaldamento è nel prezzo, o no?",
    "correctAr": "هل التدفئة داخلة في السعر أم لا؟",
    "options": [
      {
        "it": "Il riscaldamento è nel prezzo, o no?",
        "correct": true
      },
      {
        "it": "Il riscaldamento è sul prezzo, o no?",
        "correct": false,
        "why": "التعبير الصح «nel prezzo» مش «sul prezzo»"
      },
      {
        "it": "Il riscaldamento era nel prezzo, o no?",
        "correct": false,
        "why": "بيسأل عن العرض الحالي فلازم «è» مش «era»"
      },
      {
        "it": "I riscaldamenti sono nel prezzo, o no?",
        "correct": false,
        "why": "التدفئة حاجة واحدة مش جمع هنا"
      }
    ]
  },
  {
    "sceneId": "scene3",
    "lineIndex": 1,
    "contextSpeaker": "Professor Bianchi",
    "contextIt": "Tommaso, hai studiato il capitolo sui verbi?",
    "contextAr": "توماسو، هل درستَ الفصل الخاص بالأفعال؟",
    "sameSpeaker": true,
    "speaker": "Professor Bianchi",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Domani la verifica è alle nove.",
    "correctAr": "الاختبار غداً في التاسعة.",
    "options": [
      {
        "it": "Domani la verifica è alle nove.",
        "correct": true
      },
      {
        "it": "Ieri la verifica era alle nove.",
        "correct": false,
        "why": "الاختبار لسه ماحصلش، فلازم «Domani...è» مش «Ieri...era»"
      },
      {
        "it": "Domani la verifica è alle dieci.",
        "correct": false,
        "why": "الوقت غلط"
      },
      {
        "it": "Domani la verifica è in punto nove.",
        "correct": false,
        "why": "التعبير الصح «alle nove» مش «in punto nove»"
      }
    ]
  },
  {
    "sceneId": "scene3",
    "lineIndex": 2,
    "contextSpeaker": "Professor Bianchi",
    "contextIt": "Domani la verifica è alle nove.",
    "contextAr": "الاختبار غداً في التاسعة.",
    "sameSpeaker": false,
    "speaker": "Tommaso",
    "promptAr": "ردّ Tommaso إيه؟",
    "correctIt": "Ho letto tutto, ma non ho finito gli esercizi.",
    "correctAr": "قرأتُ كل شيء، لكنني لم أُنهِ التمارين.",
    "options": [
      {
        "it": "Ho letto tutto, ma non ho finito gli esercizi.",
        "correct": true
      },
      {
        "it": "Ho letto tutto, ma non ho finito l'esercizio.",
        "correct": false,
        "why": "التمارين جمع «gli esercizi» مش مفرد"
      },
      {
        "it": "Leggo tutto, ma non ho finito gli esercizi.",
        "correct": false,
        "why": "لازم الماضي «Ho letto» علشان ده اللي حصل فعلاً"
      },
      {
        "it": "Ho letto niente, ma non ho finito gli esercizi.",
        "correct": false,
        "why": "قرا كل حاجة فلازم «tutto» مش «niente»"
      }
    ]
  },
  {
    "sceneId": "scene3",
    "lineIndex": 3,
    "contextSpeaker": "Tommaso",
    "contextIt": "Ho letto tutto, ma non ho finito gli esercizi.",
    "contextAr": "قرأتُ كل شيء، لكنني لم أُنهِ التمارين.",
    "sameSpeaker": true,
    "speaker": "Tommaso",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Ieri sera dormivo in piedi, professore.",
    "correctAr": "أمس مساءً كنتُ أنام واقفاً، يا أستاذ.",
    "options": [
      {
        "it": "Ieri sera dormivo in piedi, professore.",
        "correct": true
      },
      {
        "it": "Ieri sera ho dormito in piedi, professore.",
        "correct": false,
        "why": "الحالة المستمرة بتتقال بالـImperfetto «dormivo» مش الـPassato Prossimo"
      },
      {
        "it": "Stasera dormivo in piedi, professore.",
        "correct": false,
        "why": "الوقت المذكور أمس مش النهاردة"
      },
      {
        "it": "Ieri sera dormivo in piedi, studente.",
        "correct": false,
        "why": "بيخاطب الأستاذ فلازم «professore»"
      }
    ]
  },
  {
    "sceneId": "scene3",
    "lineIndex": 4,
    "contextSpeaker": "Tommaso",
    "contextIt": "Ieri sera dormivo in piedi, professore.",
    "contextAr": "أمس مساءً كنتُ أنام واقفاً، يا أستاذ.",
    "sameSpeaker": false,
    "speaker": "Professor Bianchi",
    "promptAr": "ردّ Professor Bianchi إيه؟",
    "correctIt": "Allora leggi solo le tabelle, non tutto il libro.",
    "correctAr": "إذن اقرأ الجداول فقط، لا الكتاب كله.",
    "options": [
      {
        "it": "Allora leggi solo le tabelle, non tutto il libro.",
        "correct": true
      },
      {
        "it": "Allora leggi solo le tabelle, non tutti i libri.",
        "correct": false,
        "why": "فيه كتاب واحد بس مش كذا كتاب"
      },
      {
        "it": "Allora leggo solo le tabelle, non tutto il libro.",
        "correct": false,
        "why": "النصيحة موجهة لتوماسو فلازم أمر «leggi» مش «leggo»"
      },
      {
        "it": "Allora leggi solo il libro, non tutte le tabelle.",
        "correct": false,
        "why": "المعنى معكوس (بدّل الجداول بالكتاب)"
      }
    ]
  },
  {
    "sceneId": "scene3",
    "lineIndex": 5,
    "contextSpeaker": "Professor Bianchi",
    "contextIt": "Allora leggi solo le tabelle, non tutto il libro.",
    "contextAr": "إذن اقرأ الجداول فقط، لا الكتاب كله.",
    "sameSpeaker": true,
    "speaker": "Professor Bianchi",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Anche Chiara ha avuto lo stesso problema.",
    "correctAr": "كيارا أيضاً واجهت المشكلة نفسها.",
    "options": [
      {
        "it": "Anche Chiara ha avuto lo stesso problema.",
        "correct": true
      },
      {
        "it": "Anche Chiara ha avuto un problema diverso.",
        "correct": false,
        "why": "المشكلة نفسها مش مختلفة، ده أصل المواساة"
      },
      {
        "it": "Solo Chiara ha avuto lo stesso problema.",
        "correct": false,
        "why": "بيقول «هي كمان» مش «هي بس» فلازم «Anche»"
      },
      {
        "it": "Anche Chiara aveva lo stesso problema.",
        "correct": false,
        "why": "حدث محدد فلازم Passato Prossimo «ha avuto»"
      }
    ]
  },
  {
    "sceneId": "scene3",
    "lineIndex": 6,
    "contextSpeaker": "Professor Bianchi",
    "contextIt": "Anche Chiara ha avuto lo stesso problema.",
    "contextAr": "كيارا أيضاً واجهت المشكلة نفسها.",
    "sameSpeaker": false,
    "speaker": "Tommaso",
    "promptAr": "ردّ Tommaso إيه؟",
    "correctIt": "Lei come ha potuto finire in una settimana?",
    "correctAr": "وكيف استطاعت هي أن تُنهي في أسبوع؟",
    "options": [
      {
        "it": "Lei come ha potuto finire in una settimana?",
        "correct": true
      },
      {
        "it": "Lui come ha potuto finire in una settimana?",
        "correct": false,
        "why": "كيارا بنت فلازم «Lei» مش «Lui»"
      },
      {
        "it": "Lei come ha potuto finire in un mese?",
        "correct": false,
        "why": "المدة غلط"
      },
      {
        "it": "Lei come può finire in una settimana?",
        "correct": false,
        "why": "خلّصت خلاص فلازم الماضي «ha potuto» مش المضارع"
      }
    ]
  },
  {
    "sceneId": "scene3",
    "lineIndex": 7,
    "contextSpeaker": "Tommaso",
    "contextIt": "Lei come ha potuto finire in una settimana?",
    "contextAr": "وكيف استطاعت هي أن تُنهي في أسبوع؟",
    "sameSpeaker": true,
    "speaker": "Tommaso",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Noi non abbiamo mai scritto un testo così lungo.",
    "correctAr": "نحن لم نكتب قطّ نصاً بهذا الطول.",
    "options": [
      {
        "it": "Noi non abbiamo mai scritto un testo così lungo.",
        "correct": true
      },
      {
        "it": "Io non ho mai scritto un testo così lungo.",
        "correct": false,
        "why": "بيتكلم عن نفسه وزمايله فلازم «Noi» مش «Io»"
      },
      {
        "it": "Noi abbiamo mai scritto un testo così lungo.",
        "correct": false,
        "why": "«mai» محتاجة «non» قبلها علشان معنى النفي يبقى صح"
      },
      {
        "it": "Noi non abbiamo mai scritto un testo così corto.",
        "correct": false,
        "why": "المعنى معكوس (قصير بدل طويل)"
      }
    ]
  },
  {
    "sceneId": "scene3",
    "lineIndex": 8,
    "contextSpeaker": "Tommaso",
    "contextIt": "Noi non abbiamo mai scritto un testo così lungo.",
    "contextAr": "نحن لم نكتب قطّ نصاً بهذا الطول.",
    "sameSpeaker": true,
    "speaker": "Tommaso",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Mi dia un consiglio, per favore.",
    "correctAr": "أعطني نصيحة، من فضلك.",
    "options": [
      {
        "it": "Mi dia un consiglio, per favore.",
        "correct": true
      },
      {
        "it": "Mi dai un consiglio, per favore.",
        "correct": false,
        "why": "التلميذ بيخاطب الأستاذ رسمي فلازم «dia» مش «dai»"
      },
      {
        "it": "Le dia un consiglio, per favore.",
        "correct": false,
        "why": "هو عايز النصيحة لنفسه فلازم «Mi» مش «Le»"
      },
      {
        "it": "Mi dia dei consigli, per favore.",
        "correct": false,
        "why": "نصيحة واحدة مش أكتر"
      }
    ]
  },
  {
    "sceneId": "scene4",
    "lineIndex": 1,
    "contextSpeaker": "Chiara",
    "contextIt": "Buongiorno, il treno per Milano è già partito?",
    "contextAr": "صباح الخير، هل سافر قطار ميلانو بالفعل؟",
    "sameSpeaker": true,
    "speaker": "Chiara",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Sul sito ho letto un altro orario.",
    "correctAr": "على الموقع قرأتُ توقيتاً آخر.",
    "options": [
      {
        "it": "Sul sito ho letto un altro orario.",
        "correct": true
      },
      {
        "it": "Sul sito ho letto lo stesso orario.",
        "correct": false,
        "why": "هي شافت وقت مختلف مش نفسه، عشان كده لخبطانة"
      },
      {
        "it": "Sul sito leggo un altro orario.",
        "correct": false,
        "why": "لازم الماضي «ho letto» مش المضارع"
      },
      {
        "it": "Nel sito ho letto un altro orario.",
        "correct": false,
        "why": "التعبير الصح «sul sito» مش «nel sito»"
      }
    ]
  },
  {
    "sceneId": "scene4",
    "lineIndex": 2,
    "contextSpeaker": "Chiara",
    "contextIt": "Sul sito ho letto un altro orario.",
    "contextAr": "على الموقع قرأتُ توقيتاً آخر.",
    "sameSpeaker": false,
    "speaker": "Signora Ferrari",
    "promptAr": "ردّ Signora Ferrari إيه؟",
    "correctIt": "È partito alle otto e dieci, signora.",
    "correctAr": "سافر في الثامنة وعشر دقائق، يا سيدتي.",
    "options": [
      {
        "it": "È partito alle otto e dieci, signora.",
        "correct": true
      },
      {
        "it": "È partito alle otto e venti, signora.",
        "correct": false,
        "why": "الوقت غلط"
      },
      {
        "it": "È partito alle otto e dieci, signore.",
        "correct": false,
        "why": "بيخاطب سيدة فلازم «signora»"
      },
      {
        "it": "Parte alle otto e dieci, signora.",
        "correct": false,
        "why": "القطار سافر خلاص فلازم الماضي «È partito»"
      }
    ]
  },
  {
    "sceneId": "scene4",
    "lineIndex": 3,
    "contextSpeaker": "Signora Ferrari",
    "contextIt": "È partito alle otto e dieci, signora.",
    "contextAr": "سافر في الثامنة وعشر دقائق، يا سيدتي.",
    "sameSpeaker": true,
    "speaker": "Signora Ferrari",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Il prossimo parte fra venti minuti dal binario tre.",
    "correctAr": "التالي يسافر بعد عشرين دقيقة من الرصيف الثالث.",
    "options": [
      {
        "it": "Il prossimo parte fra venti minuti dal binario tre.",
        "correct": true
      },
      {
        "it": "Il prossimo parte fra venti minuti dal binario due.",
        "correct": false,
        "why": "رقم الرصيف غلط"
      },
      {
        "it": "Il prossimo partiva fra venti minuti dal binario tre.",
        "correct": false,
        "why": "الحدث جاي فمضارع «parte» مش ماضي مستمر"
      },
      {
        "it": "Il prossimo parte fra venti minuti sul binario tre.",
        "correct": false,
        "why": "القطار هيسافر من الرصيف فلازم «dal» مش «sul»"
      }
    ]
  },
  {
    "sceneId": "scene4",
    "lineIndex": 4,
    "contextSpeaker": "Signora Ferrari",
    "contextIt": "Il prossimo parte fra venti minuti dal binario tre.",
    "contextAr": "التالي يسافر بعد عشرين دقيقة من الرصيف الثالث.",
    "sameSpeaker": false,
    "speaker": "Chiara",
    "promptAr": "ردّ Chiara إيه؟",
    "correctIt": "Ma Matteo mi ha scritto che arriva alle nove!",
    "correctAr": "لكن ماتيو كتب لي أنه يصل في التاسعة!",
    "options": [
      {
        "it": "Ma Matteo mi ha scritto che arriva alle nove!",
        "correct": true
      },
      {
        "it": "Ma Matteo mi ha scritto che arrivava alle nove!",
        "correct": false,
        "why": "لسه هيوصل فلازم مضارع «arriva» في الجملة الفرعية"
      },
      {
        "it": "Ma Matteo ti ha scritto che arriva alle nove!",
        "correct": false,
        "why": "هو كتبلها هي مش لحد تاني فلازم «mi»"
      },
      {
        "it": "Ma Matteo mi ha detto che arriva alle nove!",
        "correct": false,
        "why": "بتقصد رسالة مكتوبة فلازم «scritto» مش «detto»"
      }
    ]
  },
  {
    "sceneId": "scene4",
    "lineIndex": 5,
    "contextSpeaker": "Chiara",
    "contextIt": "Ma Matteo mi ha scritto che arriva alle nove!",
    "contextAr": "لكن ماتيو كتب لي أنه يصل في التاسعة!",
    "sameSpeaker": true,
    "speaker": "Chiara",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Lui non ha mai preso questo treno da solo.",
    "correctAr": "وهو لم يركب هذا القطار وحده قطّ.",
    "options": [
      {
        "it": "Lui non ha mai preso questo treno da solo.",
        "correct": true
      },
      {
        "it": "Lui non ha mai preso questo treno con lei.",
        "correct": false,
        "why": "المعنى معكوس — «da solo» مش «con lei»"
      },
      {
        "it": "Lui ha mai preso questo treno da solo.",
        "correct": false,
        "why": "«mai» هنا محتاجة «non» قبلها"
      },
      {
        "it": "Lei non ha mai preso questo treno da sola.",
        "correct": false,
        "why": "بتتكلم عن ماتيو (مذكر) فلازم «lui...solo»"
      }
    ]
  },
  {
    "sceneId": "scene4",
    "lineIndex": 6,
    "contextSpeaker": "Chiara",
    "contextIt": "Lui non ha mai preso questo treno da solo.",
    "contextAr": "وهو لم يركب هذا القطار وحده قطّ.",
    "sameSpeaker": false,
    "speaker": "Signora Ferrari",
    "promptAr": "ردّ Signora Ferrari إيه؟",
    "correctIt": "Allora gli telefoni subito.",
    "correctAr": "إذن هاتفيه فوراً.",
    "options": [
      {
        "it": "Allora gli telefoni subito.",
        "correct": true
      },
      {
        "it": "Allora le telefoni subito.",
        "correct": false,
        "why": "ماتيو مذكر فلازم «gli» مش «le»"
      },
      {
        "it": "Allora gli telefona subito.",
        "correct": false,
        "why": "بتكلمها رسمي فلازم «telefoni» مش «telefona»"
      },
      {
        "it": "Allora gli telefoni domani.",
        "correct": false,
        "why": "الموقف عاجل فلازم «subito» مش «domani»"
      }
    ]
  },
  {
    "sceneId": "scene4",
    "lineIndex": 7,
    "contextSpeaker": "Signora Ferrari",
    "contextIt": "Allora gli telefoni subito.",
    "contextAr": "إذن هاتفيه فوراً.",
    "sameSpeaker": true,
    "speaker": "Signora Ferrari",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Senza biglietto non può restare sul binario.",
    "correctAr": "بغير تذكرة لا يجوز له البقاء على الرصيف.",
    "options": [
      {
        "it": "Senza biglietto non può restare sul binario.",
        "correct": true
      },
      {
        "it": "Con biglietto non può restare sul binario.",
        "correct": false,
        "why": "المعنى معكوس — القاعدة «Senza»"
      },
      {
        "it": "Senza biglietto può restare sul binario.",
        "correct": false,
        "why": "من غير «non» الجملة بتبطل ممنوع"
      },
      {
        "it": "Senza biglietto non può restare in binario.",
        "correct": false,
        "why": "التعبير الصح «sul binario» مش «in binario»"
      }
    ]
  },
  {
    "sceneId": "scene4",
    "lineIndex": 8,
    "contextSpeaker": "Signora Ferrari",
    "contextIt": "Senza biglietto non può restare sul binario.",
    "contextAr": "بغير تذكرة لا يجوز له البقاء على الرصيف.",
    "sameSpeaker": true,
    "speaker": "Signora Ferrari",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Prenda anche il biglietto per lui.",
    "correctAr": "وخذي أيضاً تذكرةً له.",
    "options": [
      {
        "it": "Prenda anche il biglietto per lui.",
        "correct": true
      },
      {
        "it": "Prenda anche il biglietto per te.",
        "correct": false,
        "why": "التذكرة لماتيو مش لشيارا فلازم «per lui»"
      },
      {
        "it": "Prenda solo il biglietto per lui.",
        "correct": false,
        "why": "بتحث على فعل إضافي فلازم «anche» مش «solo»"
      },
      {
        "it": "Prendi anche il biglietto per lui.",
        "correct": false,
        "why": "بتكلمها رسمي فلازم «Prenda» مش «Prendi»"
      }
    ]
  },
  {
    "sceneId": "scene5",
    "lineIndex": 1,
    "contextSpeaker": "Dottoressa Ricci",
    "contextIt": "Buonasera. Da quanto tempo ha questo dolore?",
    "contextAr": "مساء الخير. منذ متى هذا الألم عند حضرتك؟",
    "sameSpeaker": true,
    "speaker": "Dottoressa Ricci",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "E la notte dorme bene?",
    "correctAr": "وفي الليل، أتنام جيداً؟",
    "options": [
      {
        "it": "E la notte dorme bene?",
        "correct": true
      },
      {
        "it": "E la notte dormiva bene?",
        "correct": false,
        "why": "بتسأل عن العادة الحالية فمضارع «dorme» مش ماضي مستمر"
      },
      {
        "it": "E la sera dorme bene?",
        "correct": false,
        "why": "بتسأل عن الليل مش المسا"
      },
      {
        "it": "E la notte dormi bene?",
        "correct": false,
        "why": "بتكلمه رسمي فلازم «dorme» مش «dormi»"
      }
    ]
  },
  {
    "sceneId": "scene5",
    "lineIndex": 2,
    "contextSpeaker": "Dottoressa Ricci",
    "contextIt": "E la notte dorme bene?",
    "contextAr": "وفي الليل، أتنام جيداً؟",
    "sameSpeaker": false,
    "speaker": "Signor Bellini",
    "promptAr": "ردّ Signor Bellini إيه؟",
    "correctIt": "Ce l'ho da tre giorni, soprattutto la sera.",
    "correctAr": "هو عندي منذ ثلاثة أيام، خاصةً في المساء.",
    "options": [
      {
        "it": "Ce l'ho da tre giorni, soprattutto la sera.",
        "correct": true
      },
      {
        "it": "Ce l'ho fra tre giorni, soprattutto la sera.",
        "correct": false,
        "why": "«fra» بتدل على المستقبل مش المدة اللي فاتت"
      },
      {
        "it": "Ce l'ho per tre giorni, soprattutto la sera.",
        "correct": false,
        "why": "«per» بتدل على مدة منتهية"
      },
      {
        "it": "Ce l'hai da tre giorni, soprattutto la sera.",
        "correct": false,
        "why": "الشخص غلط — بيتكلم عن نفسه فلازم «ho»"
      }
    ]
  },
  {
    "sceneId": "scene5",
    "lineIndex": 3,
    "contextSpeaker": "Signor Bellini",
    "contextIt": "Ce l'ho da tre giorni, soprattutto la sera.",
    "contextAr": "هو عندي منذ ثلاثة أيام، خاصةً في المساء.",
    "sameSpeaker": true,
    "speaker": "Signor Bellini",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Proprio per questo dormo male.",
    "correctAr": "ولهذا بالضبط أنام بشكل سيئ.",
    "options": [
      {
        "it": "Proprio per questo dormo male.",
        "correct": true
      },
      {
        "it": "Proprio per questo dormo bene.",
        "correct": false,
        "why": "المعنى معكوس — بيشتكي مش بيمدح"
      },
      {
        "it": "Proprio per questo dormi male.",
        "correct": false,
        "why": "بيوصف حاله هو فلازم «dormo» مش «dormi»"
      },
      {
        "it": "Non per questo dormo male.",
        "correct": false,
        "why": "بيأكّد السبب فلازم «Proprio per questo» مش «Non per questo»"
      }
    ]
  },
  {
    "sceneId": "scene5",
    "lineIndex": 4,
    "contextSpeaker": "Signor Bellini",
    "contextIt": "Proprio per questo dormo male.",
    "contextAr": "ولهذا بالضبط أنام بشكل سيئ.",
    "sameSpeaker": false,
    "speaker": "Dottoressa Ricci",
    "promptAr": "ردّ Dottoressa Ricci إيه؟",
    "correctIt": "Ha già preso qualche medicina per il dolore?",
    "correctAr": "هل تناولتَ دواءً ما للألم؟",
    "options": [
      {
        "it": "Ha già preso qualche medicina per il dolore?",
        "correct": true
      },
      {
        "it": "Ha già preso qualche medicina per la febbre?",
        "correct": false,
        "why": "بتسأل عن الألم مش الحرارة"
      },
      {
        "it": "Prende già qualche medicina per il dolore?",
        "correct": false,
        "why": "«già» بتحتاج ماضي «Ha preso» مش مضارع"
      },
      {
        "it": "Ha già preso nessuna medicina per il dolore?",
        "correct": false,
        "why": "الصيغة الصحيحة «qualche medicina» في سؤال زي ده"
      }
    ]
  },
  {
    "sceneId": "scene5",
    "lineIndex": 5,
    "contextSpeaker": "Dottoressa Ricci",
    "contextIt": "Ha già preso qualche medicina per il dolore?",
    "contextAr": "هل تناولتَ دواءً ما للألم؟",
    "sameSpeaker": true,
    "speaker": "Dottoressa Ricci",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Mi dica anche se la mattina è più forte.",
    "correctAr": "وقل لي أيضاً إن كان أقوى في الصباح.",
    "options": [
      {
        "it": "Mi dica anche se la mattina è più forte.",
        "correct": true
      },
      {
        "it": "Mi dica anche se la sera è più forte.",
        "correct": false,
        "why": "بتسأل عن الصبح مش المسا (سؤال جديد)"
      },
      {
        "it": "Mi dica anche se la mattina è meno forte.",
        "correct": false,
        "why": "بتسأل هل بيزيد فلازم «più forte» مش «meno forte»"
      },
      {
        "it": "Mi dici anche se la mattina è più forte.",
        "correct": false,
        "why": "بتكلمه رسمي فلازم «dica» مش «dici»"
      }
    ]
  },
  {
    "sceneId": "scene5",
    "lineIndex": 6,
    "contextSpeaker": "Dottoressa Ricci",
    "contextIt": "Mi dica anche se la mattina è più forte.",
    "contextAr": "وقل لي أيضاً إن كان أقوى في الصباح.",
    "sameSpeaker": false,
    "speaker": "Signor Bellini",
    "promptAr": "ردّ Signor Bellini إيه؟",
    "correctIt": "Solo dell'aspirina martedì, ma non ha fatto niente.",
    "correctAr": "أسبرين فقط يوم الثلاثاء، لكنه لم يُجدِ شيئاً.",
    "options": [
      {
        "it": "Solo dell'aspirina martedì, ma non ha fatto niente.",
        "correct": true
      },
      {
        "it": "Solo dell'aspirina lunedì, ma non ha fatto niente.",
        "correct": false,
        "why": "اليوم غلط"
      },
      {
        "it": "Solo dell'aspirina martedì, ma ha fatto tutto.",
        "correct": false,
        "why": "المعنى معكوس — الدوا معملش حاجة فلازم «non ha fatto niente»"
      },
      {
        "it": "Molta aspirina martedì, ma non ha fatto niente.",
        "correct": false,
        "why": "أخد أسبرين بس مش كتير فلازم «Solo dell'»"
      }
    ]
  },
  {
    "sceneId": "scene5",
    "lineIndex": 7,
    "contextSpeaker": "Signor Bellini",
    "contextIt": "Solo dell'aspirina martedì, ma non ha fatto niente.",
    "contextAr": "أسبرين فقط يوم الثلاثاء، لكنه لم يُجدِ شيئاً.",
    "sameSpeaker": true,
    "speaker": "Signor Bellini",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "La mattina è più forte, come dice Lei.",
    "correctAr": "في الصباح أقوى، كما تقول حضرتُك.",
    "options": [
      {
        "it": "La mattina è più forte, come dice Lei.",
        "correct": true
      },
      {
        "it": "La mattina è più forte, come dico io.",
        "correct": false,
        "why": "بيأكّد كلام الدكتورة هي فلازم «dice Lei» مش «dico io»"
      },
      {
        "it": "La sera è più forte, come dice Lei.",
        "correct": false,
        "why": "بيتكلم عن الصبح مش المسا"
      },
      {
        "it": "La mattina è meno forte, come dice Lei.",
        "correct": false,
        "why": "المعنى معكوس «più forte» مش «meno forte»"
      }
    ]
  },
  {
    "sceneId": "scene5",
    "lineIndex": 8,
    "contextSpeaker": "Signor Bellini",
    "contextIt": "La mattina è più forte, come dice Lei.",
    "contextAr": "في الصباح أقوى، كما تقول حضرتُك.",
    "sameSpeaker": true,
    "speaker": "Signor Bellini",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Altre medicine però non voglio prenderne.",
    "correctAr": "أما أدويةً أخرى فلا أريد أن أتناول منها.",
    "options": [
      {
        "it": "Altre medicine però non voglio prenderne.",
        "correct": true
      },
      {
        "it": "Altre medicine però voglio prenderne.",
        "correct": false,
        "why": "المعنى معكوس — بيرفض فلازم «non voglio»"
      },
      {
        "it": "Altra medicina però non voglio prenderne.",
        "correct": false,
        "why": "العدد جمع «Altre» مش مفرد"
      },
      {
        "it": "Altre medicine però non voglio prenderle.",
        "correct": false,
        "why": "لازم «ne» الجزئية (منها) مش «le»"
      }
    ]
  },
  {
    "sceneId": "scene6",
    "lineIndex": 1,
    "contextSpeaker": "Giulia",
    "contextIt": "Buongiorno, il mio pacco non è ancora arrivato.",
    "contextAr": "صباح الخير، حزمتي لم تصل بعد.",
    "sameSpeaker": true,
    "speaker": "Giulia",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Mio fratello lo ha portato giovedì alla posta.",
    "correctAr": "أخي حملها يوم الخميس إلى البريد.",
    "options": [
      {
        "it": "Mio fratello lo ha portato giovedì alla posta.",
        "correct": true
      },
      {
        "it": "Mia sorella lo ha portato giovedì alla posta.",
        "correct": false,
        "why": "أخوها هو مش أختها"
      },
      {
        "it": "Mio fratello lo ha portato venerdì alla posta.",
        "correct": false,
        "why": "اليوم غلط"
      },
      {
        "it": "Mio fratello lo ha portato giovedì dalla posta.",
        "correct": false,
        "why": "راح بيها للبوستة مش منها فلازم «alla posta»"
      }
    ]
  },
  {
    "sceneId": "scene6",
    "lineIndex": 2,
    "contextSpeaker": "Giulia",
    "contextIt": "Mio fratello lo ha portato giovedì alla posta.",
    "contextAr": "أخي حملها يوم الخميس إلى البريد.",
    "sameSpeaker": false,
    "speaker": "Signora Conti",
    "promptAr": "ردّ Signora Conti إيه؟",
    "correctIt": "Chi ha scritto l'indirizzo sul pacco?",
    "correctAr": "من كتب العنوان على الحزمة؟",
    "options": [
      {
        "it": "Chi ha scritto l'indirizzo sul pacco?",
        "correct": true
      },
      {
        "it": "Chi ha scritto l'indirizzo nel pacco?",
        "correct": false,
        "why": "العنوان مكتوب على الحزمة مش جواها فلازم «sul»"
      },
      {
        "it": "Che cosa ha scritto l'indirizzo sul pacco?",
        "correct": false,
        "why": "بتسأل عن «مين» مش «إيه» فلازم «Chi»"
      },
      {
        "it": "Chi ha letto l'indirizzo sul pacco?",
        "correct": false,
        "why": "بتسأل عن الكتابة مش القراءة"
      }
    ]
  },
  {
    "sceneId": "scene6",
    "lineIndex": 3,
    "contextSpeaker": "Signora Conti",
    "contextIt": "Chi ha scritto l'indirizzo sul pacco?",
    "contextAr": "من كتب العنوان على الحزمة؟",
    "sameSpeaker": true,
    "speaker": "Signora Conti",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Senza il documento del destinatario nessuno può prenderlo.",
    "correctAr": "بغير وثيقة المُرسَل إليه لا أحد يستطيع أخذها.",
    "options": [
      {
        "it": "Senza il documento del destinatario nessuno può prenderlo.",
        "correct": true
      },
      {
        "it": "Con il documento del destinatario nessuno può prenderlo.",
        "correct": false,
        "why": "المعنى معكوس — القاعدة «Senza»"
      },
      {
        "it": "Senza il documento del destinatario qualcuno può prenderlo.",
        "correct": false,
        "why": "لازم «nessuno» (محدش) مش «qualcuno» (حد)"
      },
      {
        "it": "Senza il documento del mittente nessuno può prenderlo.",
        "correct": false,
        "why": "المُرسَل إليه مش المُرسِل"
      }
    ]
  },
  {
    "sceneId": "scene6",
    "lineIndex": 4,
    "contextSpeaker": "Signora Conti",
    "contextIt": "Senza il documento del destinatario nessuno può prenderlo.",
    "contextAr": "بغير وثيقة المُرسَل إليه لا أحد يستطيع أخذها.",
    "sameSpeaker": false,
    "speaker": "Giulia",
    "promptAr": "ردّ Giulia إيه؟",
    "correctIt": "L'indirizzo l'ha scritto lui, ma oggi è partito.",
    "correctAr": "العنوان كتبه هو، لكنه سافر اليوم.",
    "options": [
      {
        "it": "L'indirizzo l'ha scritto lui, ma oggi è partito.",
        "correct": true
      },
      {
        "it": "L'indirizzo l'ha scritto lei, ma oggi è partito.",
        "correct": false,
        "why": "أخوها مذكر فلازم «lui»"
      },
      {
        "it": "L'indirizzo l'ha scritto lui, ma oggi è arrivato.",
        "correct": false,
        "why": "هو سافر مش وصل فلازم «partito»"
      },
      {
        "it": "L'indirizzo l'ha scritto lui, ma ieri è partito.",
        "correct": false,
        "why": "سافر النهاردة مش أمس"
      }
    ]
  },
  {
    "sceneId": "scene6",
    "lineIndex": 5,
    "contextSpeaker": "Giulia",
    "contextIt": "L'indirizzo l'ha scritto lui, ma oggi è partito.",
    "contextAr": "العنوان كتبه هو، لكنه سافر اليوم.",
    "sameSpeaker": true,
    "speaker": "Giulia",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Per questo sono qui io, con la sua carta d'identità.",
    "correctAr": "ولهذا أنا هنا، مع بطاقة هويته.",
    "options": [
      {
        "it": "Per questo sono qui io, con la sua carta d'identità.",
        "correct": true
      },
      {
        "it": "Per questo sono qui io, con la mia carta d'identità.",
        "correct": false,
        "why": "معاها بطاقة هويته هو مش هويتها هي فلازم «la sua»"
      },
      {
        "it": "Per questo sei qui tu, con la sua carta d'identità.",
        "correct": false,
        "why": "هي اللي جايه فلازم «sono...io»"
      },
      {
        "it": "Per questo sono qui io, senza la sua carta d'identità.",
        "correct": false,
        "why": "لازم تكون معاها البطاقة «con» مش «senza»"
      }
    ]
  },
  {
    "sceneId": "scene6",
    "lineIndex": 6,
    "contextSpeaker": "Giulia",
    "contextIt": "Per questo sono qui io, con la sua carta d'identità.",
    "contextAr": "ولهذا أنا هنا، مع بطاقة هويته.",
    "sameSpeaker": false,
    "speaker": "Signora Conti",
    "promptAr": "ردّ Signora Conti إيه؟",
    "correctIt": "Bene. Allora resti qui un momento, prego.",
    "correctAr": "حسناً. إذن ابقَي هنا لحظةً، تفضّلي.",
    "options": [
      {
        "it": "Bene. Allora resti qui un momento, prego.",
        "correct": true
      },
      {
        "it": "Bene. Allora resta qui un momento, prego.",
        "correct": false,
        "why": "بتكلمها رسمي فلازم «resti» مش «resta»"
      },
      {
        "it": "Bene. Allora vai via un momento, prego.",
        "correct": false,
        "why": "بتقولها تستنى مش تمشي فلازم «resti qui»"
      },
      {
        "it": "Male. Allora resti qui un momento, prego.",
        "correct": false,
        "why": "ردها إيجابي فلازم «Bene» مش «Male»"
      }
    ]
  },
  {
    "sceneId": "scene6",
    "lineIndex": 7,
    "contextSpeaker": "Signora Conti",
    "contextIt": "Bene. Allora resti qui un momento, prego.",
    "contextAr": "حسناً. إذن ابقَي هنا لحظةً، تفضّلي.",
    "sameSpeaker": true,
    "speaker": "Signora Conti",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Il suo pacco è tra quelli di ieri.",
    "correctAr": "حزمتُك بين حزمات الأمس.",
    "options": [
      {
        "it": "Il suo pacco è tra quelli di ieri.",
        "correct": true
      },
      {
        "it": "Il suo pacco è tra quelli di oggi.",
        "correct": false,
        "why": "الحزمة بتاعة الأمس مش النهاردة"
      },
      {
        "it": "Il suo pacco era tra quelli di ieri.",
        "correct": false,
        "why": "الحزمة موجودة دلوقتي فلازم «è» مش «era»"
      },
      {
        "it": "Il tuo pacco è tra quelli di ieri.",
        "correct": false,
        "why": "بتكلمها رسمي فلازم «suo» مش «tuo»"
      }
    ]
  },
  {
    "sceneId": "scene6",
    "lineIndex": 8,
    "contextSpeaker": "Signora Conti",
    "contextIt": "Il suo pacco è tra quelli di ieri.",
    "contextAr": "حزمتُك بين حزمات الأمس.",
    "sameSpeaker": true,
    "speaker": "Signora Conti",
    "promptAr": "قال كمان إيه؟",
    "correctIt": "Lo prenda: dentro ci sono dei libri.",
    "correctAr": "خذيها: في داخلها كتب.",
    "options": [
      {
        "it": "Lo prenda: dentro ci sono dei libri.",
        "correct": true
      },
      {
        "it": "La prenda: dentro ci sono dei libri.",
        "correct": false,
        "why": "الحزمة «il pacco» مذكر فلازم «Lo» مش «La»"
      },
      {
        "it": "Lo prenda: dentro ci sono dei vestiti.",
        "correct": false,
        "why": "المحتوى غلط"
      },
      {
        "it": "Lo prenda: fuori ci sono dei libri.",
        "correct": false,
        "why": "الكتب جوه مش برّه فلازم «dentro»"
      }
    ]
  }
];
