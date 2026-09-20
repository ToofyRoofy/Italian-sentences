// nuovo_choices.js — تاب "الاختيارات" جوا IL Nuovo: مجموعات أسئلة اختيار من متعدد.
// كل مجموعة = كارت في القايمة. عشان تضيف مجموعة جديدة: انسخ عنصر من المصفوفة تحت وغيّر id/titleIt/questions.
// شكل السؤال: {q:"جملة فيها ____ مكان الفراغ", options:[...], correctIdx:0..n-1, explanation:"شرح قصير"}
// (correctIdx في مجموعة Un: 0=a 1=b 2=c 3=d بنفس ترتيب الكتاب — مفتاح الإجابات مبني على القاعدة، راجعه مع مفتاح الكتاب.)
const NUOVO_CHOICE_SETS=[
  {
    id:'un_uno',
    titleIt:"Un - Un' - Una - Uno",
    questions:[
   {
    "q": "Io ho ____ amica straniera.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 0,
    "explanation": "«amica» مؤنث ويبدأ بحرف علة ← un' (مع الأبوستروف)"
   },
   {
    "q": "Il calcio è ____ sport popolare.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 2,
    "explanation": "«sport» مذكر ويبدأ بـ s+حرف ساكن ← uno"
   },
   {
    "q": "Parigi è ____ città francese.",
    "options": [
     "un'",
     "un",
     "una",
     "uno"
    ],
    "correctIdx": 2,
    "explanation": "«città» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Mio fratello legge ____ fumetto americano.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 1,
    "explanation": "«fumetto» مذكر عادي ← un"
   },
   {
    "q": "Questa è ____ idea interessante.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 3,
    "explanation": "«idea» مؤنث ويبدأ بحرف علة ← un' (مع الأبوستروف)"
   },
   {
    "q": "Questo è ____ albergo famoso.",
    "options": [
     "un'",
     "un",
     "una",
     "uno"
    ],
    "correctIdx": 1,
    "explanation": "«albergo» مذكر ويبدأ بحرف علة ← un بدون أبوستروف (الأبوستروف للمؤنث بس)"
   },
   {
    "q": "Io ascolto ____ CD di musica italiana.",
    "options": [
     "un'",
     "uno",
     "una",
     "un"
    ],
    "correctIdx": 3,
    "explanation": "«CD» مذكر وبيتنطق «تشي-دي» يعني بيبدأ بحرف ساكن ← un"
   },
   {
    "q": "Questa è ____ settimana importante.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 3,
    "explanation": "«settimana» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Io vado al cinema ____ volta al mese.",
    "options": [
     "un'",
     "un",
     "una",
     "uno"
    ],
    "correctIdx": 2,
    "explanation": "«volta» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Dino manda ____ sms a Giulia.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 1,
    "explanation": "«sms» مذكر (un messaggio) وبيتنطق «إيسّي-إيمّي-إيسّي» يعني بيبدأ بصوت حرف علة ← un. (بعض الناس بتكتب uno sms، لكن الأشهر un)"
   },
   {
    "q": "Sandro è ____ architetto bravo.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 1,
    "explanation": "«architetto» مذكر ويبدأ بحرف علة ← un بدون أبوستروف (الأبوستروف للمؤنث بس)"
   },
   {
    "q": "La mamma fa ____ festa a casa.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 0,
    "explanation": "«festa» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Chiara ha ____ blog.",
    "options": [
     "un",
     "un'",
     "uno",
     "una"
    ],
    "correctIdx": 0,
    "explanation": "«blog» مذكر (b+l مش s+ساكن) ← un"
   },
   {
    "q": "Giulia ha ____ cane piccolo.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 1,
    "explanation": "«cane» مذكر عادي ← un"
   },
   {
    "q": "Io ho ____ zaino nuovo.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 2,
    "explanation": "«zaino» مذكر ويبدأ بـ z ← uno"
   },
   {
    "q": "L'italiano è ____ materia interessante.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 3,
    "explanation": "«materia» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Mio padre lavora in ____ studio.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 2,
    "explanation": "«studio» مذكر ويبدأ بـ s+حرف ساكن ← uno"
   },
   {
    "q": "Questo è ____ esame facile.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 1,
    "explanation": "«esame» مذكر ويبدأ بحرف علة ← un بدون أبوستروف (الأبوستروف للمؤنث بس)"
   },
   {
    "q": "Io ho ____ macchina rossa.",
    "options": [
     "un'",
     "un",
     "una",
     "uno"
    ],
    "correctIdx": 2,
    "explanation": "«macchina» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Questo è ____ albero alto.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 1,
    "explanation": "«albero» مذكر ويبدأ بحرف علة ← un بدون أبوستروف (الأبوستروف للمؤنث بس)"
   },
   {
    "q": "Il professore scrive ____ esercizio nuovo.",
    "options": [
     "un'",
     "una",
     "uno",
     "un"
    ],
    "correctIdx": 3,
    "explanation": "«esercizio» مذكر ويبدأ بحرف علة ← un بدون أبوستروف (الأبوستروف للمؤنث بس)"
   },
   {
    "q": "Dino ha ____ sorella simpatica.",
    "options": [
     "un'",
     "un",
     "una",
     "uno"
    ],
    "correctIdx": 2,
    "explanation": "«sorella» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Io ho ____ libro nuovo.",
    "options": [
     "un",
     "una",
     "uno",
     "un'"
    ],
    "correctIdx": 0,
    "explanation": "«libro» مذكر عادي ← un"
   },
   {
    "q": "Giulia ha ____ astuccio rosso.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 1,
    "explanation": "«astuccio» مذكر ويبدأ بحرف علة ← un بدون أبوستروف (الأبوستروف للمؤنث بس)"
   },
   {
    "q": "L'Italia ha la forma di ____ stivale.",
    "options": [
     "un'",
     "un",
     "una",
     "uno"
    ],
    "correctIdx": 3,
    "explanation": "«stivale» مذكر ويبدأ بـ s+حرف ساكن ← uno"
   },
   {
    "q": "La classe ha ____ porta bianca.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 0,
    "explanation": "«porta» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Matteo ha ____ zio molto giovane.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 2,
    "explanation": "«zio» مذكر ويبدأ بـ z ← uno"
   },
   {
    "q": "Antonella è ____ donna bella.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 3,
    "explanation": "«donna» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Io ho ____ chiave nuova.",
    "options": [
     "uno",
     "un",
     "una",
     "un'"
    ],
    "correctIdx": 2,
    "explanation": "«chiave» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Paolo è ____ ragazzo sportivo.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 1,
    "explanation": "«ragazzo» مذكر عادي ← un"
   },
   {
    "q": "Questo è ____ autobus moderno.",
    "options": [
     "un",
     "un'",
     "uno",
     "una"
    ],
    "correctIdx": 0,
    "explanation": "«autobus» مذكر ويبدأ بحرف علة ← un بدون أبوستروف (الأبوستروف للمؤنث بس)"
   },
   {
    "q": "In classe ogni studente legge ____ pagina.",
    "options": [
     "un'",
     "un",
     "una",
     "uno"
    ],
    "correctIdx": 2,
    "explanation": "«pagina» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "La scuola è in ____ vecchio palazzo.",
    "options": [
     "un'",
     "un",
     "una",
     "uno"
    ],
    "correctIdx": 1,
    "explanation": "الأداة بتيجي قبل «vecchio» (مذكر عادي) مش قبل palazzo ← un"
   },
   {
    "q": "Io vivo in ____ casa grande.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 3,
    "explanation": "«casa» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Alessia compra ____ borsetta nera.",
    "options": [
     "una",
     "un",
     "un'",
     "uno"
    ],
    "correctIdx": 0,
    "explanation": "«borsetta» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Noi abbiamo ____ studente spagnolo in classe.",
    "options": [
     "un",
     "un'",
     "uno",
     "una"
    ],
    "correctIdx": 2,
    "explanation": "«studente» مذكر ويبدأ بـ s+حرف ساكن ← uno"
   },
   {
    "q": "Io ho ____ amico simpatico.",
    "options": [
     "un",
     "un'",
     "uno",
     "una"
    ],
    "correctIdx": 0,
    "explanation": "«amico» مذكر ويبدأ بحرف علة ← un بدون أبوستروف (الأبوستروف للمؤنث بس)"
   },
   {
    "q": "Questa è ____ aula piccola.",
    "options": [
     "una",
     "un",
     "un'",
     "uno"
    ],
    "correctIdx": 2,
    "explanation": "«aula» مؤنث ويبدأ بحرف علة ← un' (مع الأبوستروف)"
   },
   {
    "q": "Il Cairo ha ____ zoo grande.",
    "options": [
     "una",
     "un",
     "un'",
     "uno"
    ],
    "correctIdx": 3,
    "explanation": "«zoo» مذكر ويبدأ بـ z ← uno"
   },
   {
    "q": "Aldo è ____ insegnante d'italiano.",
    "options": [
     "un",
     "un'",
     "uno",
     "una"
    ],
    "correctIdx": 0,
    "explanation": "«insegnante» مذكر ويبدأ بحرف علة ← un بدون أبوستروف (الأبوستروف للمؤنث بس)"
   },
   {
    "q": "Gli spaghetti sono ____ piatto italiano.",
    "options": [
     "un'",
     "uno",
     "un",
     "una"
    ],
    "correctIdx": 2,
    "explanation": "«piatto» مذكر عادي ← un"
   },
   {
    "q": "Eros Ramazzotti è ____ cantante famoso.",
    "options": [
     "un'",
     "un",
     "una",
     "uno"
    ],
    "correctIdx": 1,
    "explanation": "«cantante» مذكر عادي ← un"
   },
   {
    "q": "Oggi guardo ____ film al cinema.",
    "options": [
     "un'",
     "un",
     "uno",
     "una"
    ],
    "correctIdx": 1,
    "explanation": "«film» مذكر (f+i) ← un"
   },
   {
    "q": "Io abito in ____ zona molto bella.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 0,
    "explanation": "«zona» مؤنث ويبدأ بحرف ساكن ← una"
   },
   {
    "q": "Dino mangia ____ panino dopo la lezione.",
    "options": [
     "una",
     "un",
     "uno",
     "un'"
    ],
    "correctIdx": 1,
    "explanation": "«panino» مذكر عادي ← un"
   }
  ]
  }
];
