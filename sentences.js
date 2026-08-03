// ===== Parla! — محتوى اللغة (نسخة مُراجعة) =====
// WORDS: بنك مفردات وضع النطق
const WORDS = [
  {
    "it": "cane",
    "ar": "كلب",
    "ipa": "/ˈkaː.ne/",
    "pron": "كا-نيه",
    "cat": "حيوانات",
    "ex": "Il cane è felice."
  },
  {
    "it": "gatto",
    "ar": "قط",
    "ipa": "/ˈɡat.to/",
    "pron": "جاتّو",
    "cat": "حيوانات",
    "ex": "Il gatto dorme sempre."
  },
  {
    "it": "casa",
    "ar": "بيت",
    "ipa": "/ˈkaː.za/",
    "pron": "كا-زا",
    "cat": "أماكن",
    "ex": "La mia casa è grande."
  },
  {
    "it": "acqua",
    "ar": "ماء",
    "ipa": "/ˈak.kwa/",
    "pron": "أكـ-كوا",
    "cat": "طعام وشراب",
    "ex": "Voglio dell'acqua."
  },
  {
    "it": "pane",
    "ar": "خبز",
    "ipa": "/ˈpaː.ne/",
    "pron": "با-نيه",
    "cat": "طعام وشراب",
    "ex": "Il pane è fresco."
  },
  {
    "it": "libro",
    "ar": "كتاب",
    "ipa": "/ˈliː.bro/",
    "pron": "لي-برو",
    "cat": "أشياء",
    "ex": "Leggo un libro ogni giorno."
  },
  {
    "it": "porta",
    "ar": "باب",
    "ipa": "/ˈpɔr.ta/",
    "pron": "بور-تا",
    "cat": "أشياء",
    "ex": "La porta è aperta."
  },
  {
    "it": "sole",
    "ar": "شمس",
    "ipa": "/ˈsoː.le/",
    "pron": "سو-ليه",
    "cat": "طبيعة",
    "ex": "Il sole splende forte."
  },
  {
    "it": "luna",
    "ar": "قمر",
    "ipa": "/ˈluː.na/",
    "pron": "لو-نا",
    "cat": "طبيعة",
    "ex": "Stasera c'è la luna piena."
  },
  {
    "it": "amico",
    "ar": "صديق",
    "ipa": "/aˈmiː.ko/",
    "pron": "أ-مي-كو",
    "cat": "ناس",
    "ex": "Il mio amico si chiama Marco."
  },
  {
    "it": "mangiare",
    "ar": "يأكل",
    "ipa": "/manˈdʒaː.re/",
    "pron": "مان-جا-ريه",
    "cat": "أفعال",
    "ex": "Voglio mangiare qualcosa."
  },
  {
    "it": "dormire",
    "ar": "ينام",
    "ipa": "/dorˈmiː.re/",
    "pron": "دور-مي-ريه",
    "cat": "أفعال",
    "ex": "Devo dormire presto."
  },
  {
    "it": "parlare",
    "ar": "يتكلم",
    "ipa": "/parˈlaː.re/",
    "pron": "بار-لا-ريه",
    "cat": "أفعال",
    "ex": "Parlo italiano ogni giorno."
  },
  {
    "it": "bello",
    "ar": "جميل",
    "ipa": "/ˈbɛl.lo/",
    "pron": "بيلّو",
    "cat": "صفات",
    "ex": "Che bello! Mi piace molto."
  },
  {
    "it": "grande",
    "ar": "كبير",
    "ipa": "/ˈɡran.de/",
    "pron": "جران-ديه",
    "cat": "صفات",
    "ex": "Roma è una città grande."
  },
  {
    "it": "buono",
    "ar": "جيد / طيب",
    "ipa": "/ˈbwɔː.no/",
    "pron": "بووو-نو",
    "cat": "صفات",
    "ex": "Questo caffè è molto buono."
  },
  {
    "it": "grazie",
    "ar": "شكراً",
    "ipa": "/ˈɡrat.tsje/",
    "pron": "جراتـ-سييه",
    "cat": "تعبيرات",
    "ex": "Grazie mille per tutto!"
  },
  {
    "it": "prego",
    "ar": "عفواً",
    "ipa": "/ˈprɛː.ɡo/",
    "pron": "بريه-جو",
    "cat": "تعبيرات",
    "ex": "— Grazie! — Prego, figurati."
  },
  {
    "it": "scusa",
    "ar": "آسف / عذرًا",
    "ipa": "/ˈskuː.za/",
    "pron": "سكو-زا",
    "cat": "تعبيرات",
    "ex": "Scusa, non ho capito."
  },
  {
    "it": "ciao",
    "ar": "مرحبا / مع السلامة",
    "ipa": "/tʃaʊ/",
    "pron": "تشاو",
    "cat": "تعبيرات",
    "ex": "Ciao! Come stai oggi?"
  },
  {
    "it": "amore",
    "ar": "حب",
    "ipa": "/aˈmoː.re/",
    "pron": "أ-مو-ريه",
    "cat": "مشاعر",
    "ex": "L'amore è la cosa più bella."
  },
  {
    "it": "strada",
    "ar": "شارع",
    "ipa": "/ˈstraː.da/",
    "pron": "سترا-دا",
    "cat": "أماكن",
    "ex": "Attraverso la strada piano."
  },
  {
    "it": "treno",
    "ar": "قطار",
    "ipa": "/ˈtrɛː.no/",
    "pron": "تريه-نو",
    "cat": "مواصلات",
    "ex": "Il treno parte tra cinque minuti."
  },
  {
    "it": "macchina",
    "ar": "سيارة",
    "ipa": "/ˈmak.ki.na/",
    "pron": "ماكـ-كي-نا",
    "cat": "مواصلات",
    "ex": "Ho una macchina rossa."
  },
  {
    "it": "tempo",
    "ar": "وقت / طقس",
    "ipa": "/ˈtɛm.po/",
    "pron": "تيم-بو",
    "cat": "عام",
    "ex": "Che tempo fa oggi?"
  },
  {
    "it": "caffè",
    "ar": "قهوة",
    "ipa": "/kafˈfɛ/",
    "pron": "كافـ-فيه",
    "cat": "طعام وشراب",
    "ex": "Prendo un caffè, per favore."
  },
  {
    "it": "pizza",
    "ar": "بيتزا",
    "ipa": "/ˈpit.tsa/",
    "pron": "بيتـ-تسا",
    "cat": "طعام وشراب",
    "ex": "La pizza napoletana è la migliore."
  },
  {
    "it": "città",
    "ar": "مدينة",
    "ipa": "/tʃitˈta/",
    "pron": "تشيتـ-تا",
    "cat": "أماكن",
    "ex": "Questa città è bellissima."
  },
  {
    "it": "musica",
    "ar": "موسيقى",
    "ipa": "/ˈmuː.zi.ka/",
    "pron": "مو-زي-كا",
    "cat": "فن",
    "ex": "Ascolto la musica ogni sera."
  },
  {
    "it": "lavoro",
    "ar": "شغل / عمل",
    "ipa": "/laˈvoː.ro/",
    "pron": "لا-فو-رو",
    "cat": "عام",
    "ex": "Vado al lavoro in bicicletta."
  },
  {
    "it": "io",
    "ar": "أنا",
    "ipa": "/ˈiː.o/",
    "pron": "إي-يو",
    "cat": "ضمائر",
    "ex": "Io sono italiano."
  },
  {
    "it": "tu",
    "ar": "أنت",
    "ipa": "/tu/",
    "pron": "تو",
    "cat": "ضمائر",
    "ex": "Tu sei molto simpatico."
  },
  {
    "it": "lui",
    "ar": "هو",
    "ipa": "/ˈlui/",
    "pron": "لويّ",
    "cat": "ضمائر",
    "ex": "Lui parla bene l'italiano."
  },
  {
    "it": "lei",
    "ar": "هي",
    "ipa": "/ˈlɛi/",
    "pron": "لييّ",
    "cat": "ضمائر",
    "ex": "Lei è una brava studentessa."
  },
  {
    "it": "noi",
    "ar": "نحن",
    "ipa": "/ˈnɔi/",
    "pron": "نويّ",
    "cat": "ضمائر",
    "ex": "Noi andiamo a scuola insieme."
  },
  {
    "it": "voi",
    "ar": "أنتم",
    "ipa": "/ˈvɔi/",
    "pron": "فويّ",
    "cat": "ضمائر",
    "ex": "Voi siete pronti per l'esame?"
  },
  {
    "it": "loro",
    "ar": "هم",
    "ipa": "/ˈlɔː.ro/",
    "pron": "لو-رو",
    "cat": "ضمائر",
    "ex": "Loro escono spesso la sera."
  },
  {
    "it": "lunedì",
    "ar": "الإتنين",
    "ipa": "/luneˈdi/",
    "pron": "لونيه-هذه",
    "cat": "أيام الأسبوع",
    "ex": "Lunedì inizio un nuovo corso."
  },
  {
    "it": "martedì",
    "ar": "التلات",
    "ipa": "/marteˈdi/",
    "pron": "مارتيه-هذه",
    "cat": "أيام الأسبوع",
    "ex": "Martedì ho lezione di italiano."
  },
  {
    "it": "mercoledì",
    "ar": "الأربع",
    "ipa": "/merkoleˈdi/",
    "pron": "ميركولماذا-هذه",
    "cat": "أيام الأسبوع",
    "ex": "Mercoledì vado in palestra."
  },
  {
    "it": "giovedì",
    "ar": "الخميس",
    "ipa": "/dʒoveˈdi/",
    "pron": "جوفيه-هذه",
    "cat": "أيام الأسبوع",
    "ex": "Giovedì ho un esame difficile."
  },
  {
    "it": "venerdì",
    "ar": "الجمعة",
    "ipa": "/venerˈdi/",
    "pron": "فينير-هذه",
    "cat": "أيام الأسبوع",
    "ex": "Venerdì usciamo con gli amici."
  },
  {
    "it": "sabato",
    "ar": "السبت",
    "ipa": "/ˈsaː.ba.to/",
    "pron": "سا-با-تو",
    "cat": "أيام الأسبوع",
    "ex": "Sabato dormo fino a tardi."
  },
  {
    "it": "domenica",
    "ar": "الحد",
    "ipa": "/doˈmeː.ni.ka/",
    "pron": "دو-مي-ني-كا",
    "cat": "أيام الأسبوع",
    "ex": "La domenica riposiamo tutti."
  },
  {
    "it": "perché",
    "ar": "لماذا / لأن",
    "ipa": "/perˈke/",
    "pron": "بير-كيه",
    "cat": "أدوات ربط",
    "ex": "Perché non hai risposto?"
  },
  {
    "it": "mentre",
    "ar": "بينما",
    "ipa": "/ˈmen.tre/",
    "pron": "مَن-تريه",
    "cat": "أدوات ربط",
    "ex": "Mentre studio, ascolto musica."
  },
  {
    "it": "quindi",
    "ar": "يعني / إذن",
    "ipa": "/ˈkwin.di/",
    "pron": "كوين-هذه",
    "cat": "أدوات ربط",
    "ex": "Piove, quindi resto a casa."
  },
  {
    "it": "perciò",
    "ar": "لذلك",
    "ipa": "/perˈtʃɔ/",
    "pron": "بير-تشو",
    "cat": "أدوات ربط",
    "ex": "Ero stanco, perciò sono tornato presto."
  },
  {
    "it": "nonostante",
    "ar": "بالرغم من",
    "ipa": "/ˌnɔ.noˈstan.te/",
    "pron": "نونوسـ-تان-تيه",
    "cat": "أدوات ربط",
    "ex": "Nonostante la pioggia, siamo usciti."
  },
  {
    "it": "tranne",
    "ar": "إلا / غير",
    "ipa": "/ˈtran.ne/",
    "pron": "تران-نيه",
    "cat": "أدوات ربط",
    "ex": "Vengono tutti tranne Marco."
  },
  {
    "it": "chi",
    "ar": "مَن",
    "ipa": "/ki/",
    "pron": "كي",
    "cat": "أدوات ربط",
    "ex": "Chi ha telefonato?"
  },
  {
    "it": "quale",
    "ar": "أنهي",
    "ipa": "/ˈkwaː.le/",
    "pron": "كوا-لماذا",
    "cat": "أدوات ربط",
    "ex": "Quale libro preferisci?"
  },
  {
    "it": "quando",
    "ar": "متى",
    "ipa": "/ˈkwan.do/",
    "pron": "كوان-دو",
    "cat": "أدوات ربط",
    "ex": "Quando arrivi a casa?"
  },
  {
    "it": "quanto",
    "ar": "كم",
    "ipa": "/ˈkwan.to/",
    "pron": "كوان-تو",
    "cat": "أدوات ربط",
    "ex": "Quanto costa questo libro?"
  },
  {
    "it": "spesso",
    "ar": "غالباً / كثير",
    "ipa": "/ˈspes.so/",
    "pron": "سـبيسّو",
    "cat": "ظروف",
    "ex": "Vado spesso al mercato."
  },
  {
    "it": "sempre",
    "ar": "دائماً",
    "ipa": "/ˈsɛm.pre/",
    "pron": "سيم-بريه",
    "cat": "ظروف",
    "ex": "Sempre arrivo in orario."
  },
  {
    "it": "mai",
    "ar": "أبداً",
    "ipa": "/mai/",
    "pron": "مايّ",
    "cat": "ظروف",
    "ex": "Non sono mai stato a Roma."
  },
  {
    "it": "ancora",
    "ar": "ما زال",
    "ipa": "/aŋˈkoː.ra/",
    "pron": "أن-كو-را",
    "cat": "ظروف",
    "ex": "Non ho ancora finito i compiti."
  },
  {
    "it": "già",
    "ar": "خلاص / فعلاً",
    "ipa": "/dʒa/",
    "pron": "جا",
    "cat": "ظروف",
    "ex": "Ho già mangiato, grazie."
  },
  {
    "it": "presto",
    "ar": "بدري",
    "ipa": "/ˈprɛs.to/",
    "pron": "بريس-تو",
    "cat": "ظروف",
    "ex": "Domani mi sveglio presto."
  },
  {
    "it": "lentamente",
    "ar": "ببطء",
    "ipa": "/len.taˈmen.te/",
    "pron": "لين-تا-مَن-تيه",
    "cat": "ظروف",
    "ex": "Lui parla molto lentamente."
  },
  {
    "it": "velocemente",
    "ar": "بسرعة",
    "ipa": "/ve.lo.tʃeˈmen.te/",
    "pron": "في-لو-تشيه-مَن-تيه",
    "cat": "ظروف",
    "ex": "Ha finito velocemente il lavoro."
  },
  {
    "it": "facilmente",
    "ar": "بسهولة",
    "ipa": "/fa.tʃilˈmen.te/",
    "pron": "فا-تشيل-مَن-تيه",
    "cat": "ظروف",
    "ex": "Capisce tutto facilmente."
  },
  {
    "it": "vicino",
    "ar": "قريب",
    "ipa": "/viˈtʃiː.no/",
    "pron": "في-تشي-نو",
    "cat": "ظروف",
    "ex": "Abito vicino alla stazione."
  },
  {
    "it": "lontano",
    "ar": "بعيد",
    "ipa": "/lonˈtaː.no/",
    "pron": "لون-تا-نو",
    "cat": "ظروف",
    "ex": "L'ufficio è lontano da casa."
  },
  {
    "it": "dentro",
    "ar": "داخل",
    "ipa": "/ˈdɛn.tro/",
    "pron": "دين-ترو",
    "cat": "ظروف",
    "ex": "Il gatto è dentro la casa."
  },
  {
    "it": "fuori",
    "ar": "بره",
    "ipa": "/ˈfwɔː.ri/",
    "pron": "فوو-ري",
    "cat": "ظروف",
    "ex": "Oggi mangiamo fuori."
  },
  {
    "it": "davanti",
    "ar": "قدام",
    "ipa": "/daˈvan.ti/",
    "pron": "دا-فان-تي",
    "cat": "ظروف",
    "ex": "Ci vediamo davanti al negozio."
  },
  {
    "it": "dietro",
    "ar": "ورا",
    "ipa": "/ˈdjɛː.tro/",
    "pron": "ديه-ترو",
    "cat": "ظروف",
    "ex": "Il parco è dietro la scuola."
  },
  {
    "it": "sopra",
    "ar": "فوق",
    "ipa": "/ˈsoː.pra/",
    "pron": "سو-برا",
    "cat": "ظروف",
    "ex": "Il libro è sopra il tavolo."
  },
  {
    "it": "sotto",
    "ar": "تحت",
    "ipa": "/ˈsɔt.to/",
    "pron": "سوتّو",
    "cat": "ظروف",
    "ex": "Le scarpe sono sotto il letto."
  },
  {
    "it": "destra",
    "ar": "يمَن",
    "ipa": "/ˈdɛs.tra/",
    "pron": "ديس-ترا",
    "cat": "ظروف",
    "ex": "Gira a destra al semaforo."
  },
  {
    "it": "sinistra",
    "ar": "شمال",
    "ipa": "/siˈnis.tra/",
    "pron": "سي-نيس-ترا",
    "cat": "ظروف",
    "ex": "La farmacia è a sinistra."
  },
  {
    "it": "veloce",
    "ar": "سريع",
    "ipa": "/veˈloː.tʃe/",
    "pron": "في-لو-تشيه",
    "cat": "صفات",
    "ex": "Questa macchina è molto veloce."
  },
  {
    "it": "vecchio",
    "ar": "قديم / عجوز",
    "ipa": "/ˈvɛk.kjo/",
    "pron": "فيكـ-كيو",
    "cat": "صفات",
    "ex": "Abito in un palazzo vecchio."
  },
  {
    "it": "nuovo",
    "ar": "جديد",
    "ipa": "/ˈnwɔː.vo/",
    "pron": "نوو-فو",
    "cat": "صفات",
    "ex": "Ho comprato un computer nuovo."
  },
  {
    "it": "difficile",
    "ar": "صعب",
    "ipa": "/difˈfiː.tʃi.le/",
    "pron": "ديفـ-في-تشي-لماذا",
    "cat": "صفات",
    "ex": "Questo esame è molto difficile."
  },
  {
    "it": "interessante",
    "ar": "مثير للاهممتاز",
    "ipa": "/in.te.resˈsan.te/",
    "pron": "إن-تيريسّان-تيه",
    "cat": "صفات",
    "ex": "Il film era molto interessante."
  },
  {
    "it": "famoso",
    "ar": "مشهور",
    "ipa": "/faˈmoː.zo/",
    "pron": "فا-مو-زو",
    "cat": "صفات",
    "ex": "Questo ristorante è famoso a Roma."
  },
  {
    "it": "simpatico",
    "ar": "لطيف",
    "ipa": "/simˈpaː.ti.ko/",
    "pron": "سيم-با-تي-كو",
    "cat": "صفات",
    "ex": "Il tuo amico è molto simpatico."
  },
  {
    "it": "nervoso",
    "ar": "عصبي",
    "ipa": "/nerˈvoː.zo/",
    "pron": "نير-فو-زو",
    "cat": "صفات",
    "ex": "Ero nervoso prima dell'esame."
  },
  {
    "it": "stanco",
    "ar": "تعبان",
    "ipa": "/ˈstaŋ.ko/",
    "pron": "سـتان-كو",
    "cat": "صفات",
    "ex": "Sono stanco dopo il lavoro."
  },
  {
    "it": "libero",
    "ar": "فاضي / حر",
    "ipa": "/ˈliː.be.ro/",
    "pron": "لي-بيه-رو",
    "cat": "صفات",
    "ex": "Domani sono libero tutto il giorno."
  },
  {
    "it": "migliore",
    "ar": "أحسن",
    "ipa": "/miʎˈʎoː.re/",
    "pron": "ميلـ-يو-ريه",
    "cat": "صفات",
    "ex": "Questa è la scelta migliore."
  },
  {
    "it": "bellissima",
    "ar": "جميلة جداً",
    "ipa": "/belˈlis.si.ma/",
    "pron": "بيلـ-ليسّي-ما",
    "cat": "صفات",
    "ex": "Questa città è bellissima."
  },
  {
    "it": "regola",
    "ar": "قاعدة",
    "ipa": "/ˈrɛː.go.la/",
    "pron": "ريه-جو-لا",
    "cat": "أشياء",
    "ex": "Non ho capito questa regola."
  },
  {
    "it": "esempio",
    "ar": "مثال",
    "ipa": "/eˈzɛm.pjo/",
    "pron": "إي-زيم-بيو",
    "cat": "أشياء",
    "ex": "Puoi darmi un esempio?"
  },
  {
    "it": "errore",
    "ar": "خطأة",
    "ipa": "/erˈroː.re/",
    "pron": "إيرّو-ريه",
    "cat": "أشياء",
    "ex": "Ho fatto un piccolo errore."
  },
  {
    "it": "negozio",
    "ar": "محل",
    "ipa": "/neˈɡɔt.tsjo/",
    "pron": "ني-جوتـ-سيو",
    "cat": "أماكن",
    "ex": "Questo negozio chiude alle otto."
  },
  {
    "it": "ufficio",
    "ar": "مكتب",
    "ipa": "/ufˈfiː.tʃo/",
    "pron": "أوفـ-في-تشو",
    "cat": "أماكن",
    "ex": "Vado in ufficio ogni giorno."
  },
  {
    "it": "università",
    "ar": "جامعة",
    "ipa": "/u.ni.ver.siˈta/",
    "pron": "أونيفيرسيتا",
    "cat": "أماكن",
    "ex": "Studio all'università di Milano."
  },
  {
    "it": "farmacia",
    "ar": "صيدلية",
    "ipa": "/far.maˈtʃiː.a/",
    "pron": "فارماتشيا",
    "cat": "أماكن",
    "ex": "La farmacia è vicino alla piazza."
  },
  {
    "it": "stazione",
    "ar": "محطة",
    "ipa": "/statˈtsjoː.ne/",
    "pron": "ستاتـتسيوني",
    "cat": "أماكن",
    "ex": "Il treno parte dalla stazione centrale."
  },
  {
    "it": "mercato",
    "ar": "سوق",
    "ipa": "/merˈkaː.to/",
    "pron": "ميركاتو",
    "cat": "أماكن",
    "ex": "Compro la frutta al mercato."
  },
  {
    "it": "colazione",
    "ar": "فطار",
    "ipa": "/ko.laˈtsjoː.ne/",
    "pron": "كولاتـتسيوني",
    "cat": "طعام وشراب",
    "ex": "Faccio colazione alle otto."
  },
  {
    "it": "pranzo",
    "ar": "غدا",
    "ipa": "/ˈpran.dzo/",
    "pron": "براندزو",
    "cat": "طعام وشراب",
    "ex": "Il pranzo è pronto a mezzogiorno."
  },
  {
    "it": "cena",
    "ar": "عشا",
    "ipa": "/ˈtʃeː.na/",
    "pron": "تشينا",
    "cat": "طعام وشراب",
    "ex": "Stasera preparo la cena."
  },
  {
    "it": "formaggio",
    "ar": "جبنة",
    "ipa": "/forˈmad.dʒo/",
    "pron": "فورمادجو",
    "cat": "طعام وشراب",
    "ex": "Mi piace il formaggio italiano."
  },
  {
    "it": "frutta",
    "ar": "فاكهة",
    "ipa": "/ˈfrut.ta/",
    "pron": "فروتّا",
    "cat": "طعام وشراب",
    "ex": "Mangio frutta ogni mattina."
  },
  {
    "it": "zucchero",
    "ar": "سكر",
    "ipa": "/ˈdzuk.ke.ro/",
    "pron": "دزوكّيرو",
    "cat": "طعام وشراب",
    "ex": "Non metto zucchero nel caffè."
  },
  {
    "it": "ombrello",
    "ar": "شمسية / مطرية",
    "ipa": "/omˈbrɛl.lo/",
    "pron": "أومبريلّو",
    "cat": "أشياء",
    "ex": "Ho dimenticato l'ombrello a casa."
  },
  {
    "it": "occhiali",
    "ar": "نظارة",
    "ipa": "/okˈkjaː.li/",
    "pron": "أوكّيالي",
    "cat": "أشياء",
    "ex": "Porto gli occhiali per leggere."
  },
  {
    "it": "telefono",
    "ar": "تليفون",
    "ipa": "/teˈlɛː.fo.no/",
    "pron": "تيليفونو",
    "cat": "أشياء",
    "ex": "Il mio telefono è nuovo."
  },
  {
    "it": "tavolo",
    "ar": "ترابيزة",
    "ipa": "/ˈtaː.vo.lo/",
    "pron": "تافولو",
    "cat": "أشياء",
    "ex": "I libri sono sul tavolo."
  },
  {
    "it": "letto",
    "ar": "سرير",
    "ipa": "/ˈlɛt.to/",
    "pron": "ليتّو",
    "cat": "أشياء",
    "ex": "Vado a letto presto stasera."
  },
  {
    "it": "zaino",
    "ar": "شنطة ظهر",
    "ipa": "/ˈdzai.no/",
    "pron": "دزاينو",
    "cat": "أشياء",
    "ex": "Metto i libri nello zaino."
  },
  {
    "it": "penna",
    "ar": "قلم",
    "ipa": "/ˈpen.na/",
    "pron": "بينّا",
    "cat": "أشياء",
    "ex": "Mi presti una penna, per favore?"
  },
  {
    "it": "fratello",
    "ar": "أخ",
    "ipa": "/fraˈtɛl.lo/",
    "pron": "فراتيلّو",
    "cat": "ناس",
    "ex": "Mio fratello studia medicina."
  },
  {
    "it": "sorella",
    "ar": "أخت",
    "ipa": "/soˈrɛl.la/",
    "pron": "سوريلّا",
    "cat": "ناس",
    "ex": "Mia sorella abita a Milano."
  },
  {
    "it": "nonno",
    "ar": "جد",
    "ipa": "/ˈnɔn.no/",
    "pron": "نونّو",
    "cat": "ناس",
    "ex": "Mio nonno racconta belle storie."
  },
  {
    "it": "padre",
    "ar": "أب",
    "ipa": "/ˈpaː.dre/",
    "pron": "بادريه",
    "cat": "ناس",
    "ex": "Mio padre lavora in ufficio."
  },
  {
    "it": "bambino",
    "ar": "طفل",
    "ipa": "/bamˈbiː.no/",
    "pron": "بامبينو",
    "cat": "ناس",
    "ex": "Il bambino gioca in giardino."
  },
  {
    "it": "professore",
    "ar": "دكتور / أستاذ",
    "ipa": "/pro.fesˈsoː.re/",
    "pron": "بروفيسّوري",
    "cat": "ناس",
    "ex": "Il professore spiega bene la lezione."
  },
  {
    "it": "classe",
    "ar": "فصل",
    "ipa": "/ˈklas.se/",
    "pron": "كلاسّيه",
    "cat": "أماكن",
    "ex": "La nostra classe è al primo piano."
  },
  {
    "it": "lezione",
    "ar": "حصة",
    "ipa": "/letˈtsjoː.ne/",
    "pron": "ليتـتسيوني",
    "cat": "عام",
    "ex": "La lezione inizia alle nove."
  },
  {
    "it": "esame",
    "ar": "امتحان",
    "ipa": "/eˈzaː.me/",
    "pron": "إيزامي",
    "cat": "عام",
    "ex": "Ho un esame importante domani."
  },
  {
    "it": "compiti",
    "ar": "واجب",
    "ipa": "/ˈkom.pi.ti/",
    "pron": "كومبيتي",
    "cat": "عام",
    "ex": "Faccio i compiti dopo la scuola."
  },
  {
    "it": "progetto",
    "ar": "مشروع",
    "ipa": "/proˈdʒɛt.to/",
    "pron": "بروجيتّو",
    "cat": "عام",
    "ex": "Il progetto finisce questo mese."
  },
  {
    "it": "idea",
    "ar": "فكرة",
    "ipa": "/iˈdɛː.a/",
    "pron": "إيديا",
    "cat": "عام",
    "ex": "Ho un'idea interessante."
  },
  {
    "it": "pazienza",
    "ar": "صبر",
    "ipa": "/patˈtsjɛn.tsa/",
    "pron": "باتـتسيينتسا",
    "cat": "مشاعر",
    "ex": "Ci vuole molta pazienza."
  },
  {
    "it": "gentilezza",
    "ar": "لطف",
    "ipa": "/dʒen.tiˈlet.tsa/",
    "pron": "جينتيليتّسا",
    "cat": "مشاعر",
    "ex": "Mi ha trattato con gentilezza."
  },
  {
    "it": "fame",
    "ar": "جوع",
    "ipa": "/ˈfaː.me/",
    "pron": "فامي",
    "cat": "مشاعر",
    "ex": "Ho fame, mangiamo qualcosa?"
  },
  {
    "it": "palestra",
    "ar": "جيم",
    "ipa": "/paˈlɛs.tra/",
    "pron": "باليستّرا",
    "cat": "أماكن",
    "ex": "Vado in palestra tre volte a settimana."
  },
  {
    "it": "capire",
    "ar": "يفهم",
    "ipa": "/kaˈpiː.re/",
    "pron": "كابيري",
    "cat": "أفعال",
    "ex": "Non capisco questa parola."
  },
  {
    "it": "arrivare",
    "ar": "يوصل",
    "ipa": "/arriˈvaː.re/",
    "pron": "أرّيفاري",
    "cat": "أفعال",
    "ex": "Il treno arriva alle dieci."
  },
  {
    "it": "tornare",
    "ar": "يرجع",
    "ipa": "/torˈnaː.re/",
    "pron": "تورناري",
    "cat": "أفعال",
    "ex": "Torno a casa alle sei."
  },
  {
    "it": "aspettare",
    "ar": "يستنى",
    "ipa": "/as.petˈtaː.re/",
    "pron": "أسبيتّاري",
    "cat": "أفعال",
    "ex": "Ti aspetto davanti alla stazione."
  },
  {
    "it": "telefonare",
    "ar": "يتصل",
    "ipa": "/te.le.foˈnaː.re/",
    "pron": "تيليفوناري",
    "cat": "أفعال",
    "ex": "Ti telefono più tardi."
  },
  {
    "it": "viaggiare",
    "ar": "يسافر",
    "ipa": "/vjadˈdʒaː.re/",
    "pron": "فيادجاري",
    "cat": "أفعال",
    "ex": "Mi piace viaggiare in treno."
  },
  {
    "it": "incontrare",
    "ar": "يقابل",
    "ipa": "/in.konˈtraː.re/",
    "pron": "إينكونتراري",
    "cat": "أفعال",
    "ex": "Domani incontro un amico."
  },
  {
    "it": "ringraziare",
    "ar": "يشكر",
    "ipa": "/rin.ɡratˈtsjaː.re/",
    "pron": "رينجراتسياري",
    "cat": "أفعال",
    "ex": "Voglio ringraziare tutti."
  },
  {
    "it": "promettere",
    "ar": "يوعد",
    "ipa": "/proˈmet.te.re/",
    "pron": "بروميتّيري",
    "cat": "أفعال",
    "ex": "Ti promento di studiare di più."
  },
  {
    "it": "sbagliare",
    "ar": "يخطأ",
    "ipa": "/zbaʎˈʎaː.re/",
    "pron": "إزبالياري",
    "cat": "أفعال",
    "ex": "Tutti possono sbagliare."
  },
  {
    "it": "girare",
    "ar": "يلف / يدور",
    "ipa": "/dʒiˈraː.re/",
    "pron": "جيراري",
    "cat": "أفعال",
    "ex": "Devi girare a destra."
  },
  {
    "it": "guardare",
    "ar": "يتفرج / يبص",
    "ipa": "/gwarˈdaː.re/",
    "pron": "جوارداري",
    "cat": "أفعال",
    "ex": "Guardo la TV ogni sera."
  },
  {
    "it": "trovare",
    "ar": "يلاقي",
    "ipa": "/troˈvaː.re/",
    "pron": "تروفاري",
    "cat": "أفعال",
    "ex": "Non trovo le chiavi."
  },
  {
    "it": "uscire",
    "ar": "يخرج",
    "ipa": "/uʃˈʃiː.re/",
    "pron": "أوشّيري",
    "cat": "أفعال",
    "ex": "Usciamo insieme stasera."
  },
  {
    "it": "venire",
    "ar": "يجي",
    "ipa": "/veˈniː.re/",
    "pron": "فينيري",
    "cat": "أفعال",
    "ex": "Vieni con noi al cinema?"
  },
  {
    "it": "studiare",
    "ar": "يدرس",
    "ipa": "/stuˈdjaː.re/",
    "pron": "ستودياري",
    "cat": "أفعال",
    "ex": "Studio italiano ogni giorno."
  },
  {
    "it": "ho",
    "ar": "(أنا) فعلت / عندي",
    "ipa": "/ɔ/",
    "pron": "أو",
    "cat": "تصريف الفعل",
    "ex": "Ho mangiato la pizza."
  },
  {
    "it": "hai",
    "ar": "(أنت) فعلت / عندك",
    "ipa": "/ai/",
    "pron": "آي",
    "cat": "تصريف الفعل",
    "ex": "Hai capito la regola?"
  },
  {
    "it": "abbiamo",
    "ar": "(نحن) فعلنا / عندنا",
    "ipa": "/abˈbjaː.mo/",
    "pron": "أبّيامو",
    "cat": "تصريف الفعل",
    "ex": "Abbiamo studiato insieme."
  },
  {
    "it": "avete",
    "ar": "(أنتم) فعلتوا / عندكم",
    "ipa": "/aˈveː.te/",
    "pron": "أفيتيه",
    "cat": "تصريف الفعل",
    "ex": "Avete finito i compiti?"
  },
  {
    "it": "hanno",
    "ar": "(هم) فعلوا / عندهم",
    "ipa": "/ˈan.no/",
    "pron": "أنّو",
    "cat": "تصريف الفعل",
    "ex": "Hanno comprato una macchina nuova."
  },
  {
    "it": "sono",
    "ar": "(أنا) كنت / رحت",
    "ipa": "/ˈsoː.no/",
    "pron": "سونو",
    "cat": "تصريف الفعل",
    "ex": "Sono andato al mercato."
  },
  {
    "it": "sei",
    "ar": "(أنت) كنت",
    "ipa": "/sɛi/",
    "pron": "سيي",
    "cat": "تصريف الفعل",
    "ex": "Sei arrivato presto oggi."
  },
  {
    "it": "siamo",
    "ar": "(نحن) كنا",
    "ipa": "/ˈsjaː.mo/",
    "pron": "سيامو",
    "cat": "تصريف الفعل",
    "ex": "Siamo usciti insieme ieri."
  },
  {
    "it": "siete",
    "ar": "(أنتم) كنتم",
    "ipa": "/ˈsjɛː.te/",
    "pron": "سييتيه",
    "cat": "تصريف الفعل",
    "ex": "Siete tornati tardi ieri."
  },
  {
    "it": "ero",
    "ar": "(أنا) كنت",
    "ipa": "/ˈɛː.ro/",
    "pron": "إيرو",
    "cat": "تصريف الفعل",
    "ex": "Ero stanco dopo il lavoro."
  },
  {
    "it": "eri",
    "ar": "(أنت) كنت",
    "ipa": "/ˈɛː.ri/",
    "pron": "إيري",
    "cat": "تصريف الفعل",
    "ex": "Quando eri piccolo, giocavi molto."
  },
  {
    "it": "era",
    "ar": "(هو/هي) كان",
    "ipa": "/ˈɛː.ra/",
    "pron": "إيرا",
    "cat": "تصريف الفعل",
    "ex": "Era una bella giornata."
  },
  {
    "it": "eravamo",
    "ar": "(نحن) كنا",
    "ipa": "/e.raˈvaː.mo/",
    "pron": "إيرافامو",
    "cat": "تصريف الفعل",
    "ex": "Eravamo felici insieme."
  },
  {
    "it": "eravate",
    "ar": "(أنتم) كنتم",
    "ipa": "/e.raˈvaː.te/",
    "pron": "إيرافاتيه",
    "cat": "تصريف الفعل",
    "ex": "Eravate a scuola quel giorno."
  },
  {
    "it": "erano",
    "ar": "(هم) كانوا",
    "ipa": "/ˈɛː.ra.no/",
    "pron": "إيرانو",
    "cat": "تصريف الفعل",
    "ex": "Erano tutti stanchi ieri sera."
  }
];

// AR_SEQ_SENTENCES: جمل تمرين ترتيب الكلمات بالعربي
const AR_SEQ_SENTENCES = [
  {
    "it": "Vado al bar ogni mattina e prendo un caffè",
    "ar": "بروح البار كل صبح وباخد قهوة",
    "en": "I go to the bar every morning and have a coffee.",
    "words": [
      {
        "it": "Vado",
        "ar": "بروح"
      },
      {
        "it": "al",
        "ar": "للـ"
      },
      {
        "it": "bar",
        "ar": "البار"
      },
      {
        "it": "ogni",
        "ar": "كل"
      },
      {
        "it": "mattina",
        "ar": "صبح"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "prendo",
        "ar": "باخد"
      },
      {
        "it": "un",
        "ar": "(تنكير)"
      },
      {
        "it": "caffè",
        "ar": "قهوة"
      }
    ]
  },
  {
    "it": "Il barista mi prepara il caffè senza zucchero",
    "ar": "النادل بيجهزلي القهوة من غير سكر",
    "en": "The barista makes me a coffee without sugar.",
    "words": [
      {
        "it": "Il",
        "ar": "الـ"
      },
      {
        "it": "barista",
        "ar": "النادل"
      },
      {
        "it": "mi",
        "ar": "لي"
      },
      {
        "it": "prepara",
        "ar": "بيجهز"
      },
      {
        "it": "il",
        "ar": "الـ"
      },
      {
        "it": "caffè",
        "ar": "القهوة"
      },
      {
        "it": "senza",
        "ar": "من غير"
      },
      {
        "it": "zucchero",
        "ar": "سكر"
      }
    ]
  },
  {
    "it": "Posso avere un bicchiere d'acqua per favore",
    "ar": "ممكن كوباية مية لو سمحت",
    "en": "Can I have a glass of water please?",
    "words": [
      {
        "it": "Posso",
        "ar": "ممكن"
      },
      {
        "it": "avere",
        "ar": "آخد"
      },
      {
        "it": "un",
        "ar": "(تنكير)"
      },
      {
        "it": "bicchiere",
        "ar": "كوباية"
      },
      {
        "it": "d'acqua",
        "ar": "مية"
      },
      {
        "it": "per",
        "ar": "من"
      },
      {
        "it": "favore",
        "ar": "فضلك"
      }
    ]
  },
  {
    "it": "Devo andare al supermercato a comprare il pane",
    "ar": "لازم أروح السوبر ماركت أشتري عيش",
    "en": "I need to go to the supermarket to buy bread.",
    "words": [
      {
        "it": "Devo",
        "ar": "لازم"
      },
      {
        "it": "andare",
        "ar": "أروح"
      },
      {
        "it": "al",
        "ar": "للـ"
      },
      {
        "it": "supermercato",
        "ar": "السوبر ماركت"
      },
      {
        "it": "a",
        "ar": "لكي"
      },
      {
        "it": "comprare",
        "ar": "أشتري"
      },
      {
        "it": "il",
        "ar": "الـ"
      },
      {
        "it": "pane",
        "ar": "العيش"
      }
    ]
  },
  {
    "it": "Quanto costa questo prodotto nel negozio",
    "ar": "المنتج هذا بكام في المحل؟",
    "en": "How much does this product cost in the shop?",
    "words": [
      {
        "it": "Quanto",
        "ar": "بكم"
      },
      {
        "it": "costa",
        "ar": "بيكلف"
      },
      {
        "it": "questo",
        "ar": "الـ"
      },
      {
        "it": "prodotto",
        "ar": "المنتج"
      },
      {
        "it": "nel",
        "ar": "في الـ"
      },
      {
        "it": "negozio",
        "ar": "المحل"
      }
    ]
  },
  {
    "it": "Ho dimenticato di comprare il latte al supermercato",
    "ar": "نسيت أشتري اللبن من السوبر ماركت",
    "en": "I forgot to buy milk at the supermarket.",
    "words": [
      {
        "it": "Ho",
        "ar": "أنا"
      },
      {
        "it": "dimenticato",
        "ar": "نسيت"
      },
      {
        "it": "di",
        "ar": "إني"
      },
      {
        "it": "comprare",
        "ar": "أشتري"
      },
      {
        "it": "il",
        "ar": "الـ"
      },
      {
        "it": "latte",
        "ar": "اللبن"
      },
      {
        "it": "al",
        "ar": "من الـ"
      },
      {
        "it": "supermercato",
        "ar": "السوبر ماركت"
      }
    ]
  },
  {
    "it": "Il treno per Milano parte tra dieci minuti dal binario tre",
    "ar": "القطار المتجه لميلانو هيتحرك بعد عشر دقايق من الرصيف رقم تلاتة.",
    "en": "The train to Milan leaves in ten minutes from platform three.",
    "words": [
      {
        "it": "Il",
        "ar": "الـ"
      },
      {
        "it": "treno",
        "ar": "القطار"
      },
      {
        "it": "per",
        "ar": "لـ"
      },
      {
        "it": "Milano",
        "ar": "ميلانو"
      },
      {
        "it": "parte",
        "ar": "بيتحرك"
      },
      {
        "it": "tra",
        "ar": "بعد"
      },
      {
        "it": "dieci",
        "ar": "عشر"
      },
      {
        "it": "minuti",
        "ar": "دقايق"
      },
      {
        "it": "dal",
        "ar": "من الـ"
      },
      {
        "it": "binario",
        "ar": "الرصيف"
      },
      {
        "it": "tre",
        "ar": "الثلاثة"
      }
    ]
  },
  {
    "it": "Devo prendere l'autobus numero dodici per andare in centro",
    "ar": "لازم آخد الأتوبيس رقم اتناشر لكي أروح وسط البلد",
    "en": "I need to take bus number twelve to go to the city center.",
    "words": [
      {
        "it": "Devo",
        "ar": "لازم"
      },
      {
        "it": "prendere",
        "ar": "آخد"
      },
      {
        "it": "l'autobus",
        "ar": "الأتوبيس"
      },
      {
        "it": "numero",
        "ar": "رقم"
      },
      {
        "it": "dodici",
        "ar": "اتناشر"
      },
      {
        "it": "per",
        "ar": "لكي"
      },
      {
        "it": "andare",
        "ar": "أروح"
      },
      {
        "it": "in",
        "ar": "في"
      },
      {
        "it": "centro",
        "ar": "وسط البلد"
      }
    ]
  },
  {
    "it": "Il traffico era bloccato e sono arrivato tardi al lavoro",
    "ar": "الزحمة كانت واقفة ووصلت متأخر للشغل",
    "en": "The traffic was jammed and I arrived late to work.",
    "words": [
      {
        "it": "Il",
        "ar": "الـ"
      },
      {
        "it": "traffico",
        "ar": "الزحمة"
      },
      {
        "it": "era",
        "ar": "كانت"
      },
      {
        "it": "bloccato",
        "ar": "واقفة"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "sono",
        "ar": "أنا"
      },
      {
        "it": "arrivato",
        "ar": "وصلت"
      },
      {
        "it": "tardi",
        "ar": "متأخر"
      },
      {
        "it": "al",
        "ar": "للـ"
      },
      {
        "it": "lavoro",
        "ar": "الشغل"
      }
    ]
  },
  {
    "it": "Vorrei un tavolo per due persone vicino alla finestra",
    "ar": "عايز ترابيزة لشخصين جنب الشباك.",
    "en": "I'd like a table for two people near the window.",
    "words": [
      {
        "it": "Vorrei",
        "ar": "عايز"
      },
      {
        "it": "un",
        "ar": "(تنكير)"
      },
      {
        "it": "tavolo",
        "ar": "ترابيزة"
      },
      {
        "it": "per",
        "ar": "لـ"
      },
      {
        "it": "due",
        "ar": "اتنين"
      },
      {
        "it": "persone",
        "ar": "شخص"
      },
      {
        "it": "vicino",
        "ar": "قريب"
      },
      {
        "it": "alla",
        "ar": "من الـ"
      },
      {
        "it": "finestra",
        "ar": "الشباك"
      }
    ]
  },
  {
    "it": "Il cameriere ci porta il menu e l'acqua naturale",
    "ar": "الجرسون جابلنا المنيو والمية الطبيعية",
    "en": "The waiter brings us the menu and still water.",
    "words": [
      {
        "it": "Il",
        "ar": "الـ"
      },
      {
        "it": "cameriere",
        "ar": "الجرسون"
      },
      {
        "it": "ci",
        "ar": "لنا"
      },
      {
        "it": "porta",
        "ar": "جاب"
      },
      {
        "it": "il",
        "ar": "الـ"
      },
      {
        "it": "menu",
        "ar": "المنيو"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "l'acqua",
        "ar": "المية"
      },
      {
        "it": "naturale",
        "ar": "الطبيعية"
      }
    ]
  },
  {
    "it": "Vorrei ordinare una pizza margherita e un'insalata mista",
    "ar": "عايز أطلب بيتزا مارغريتا وسلطة مشكلة.",
    "en": "I'd like to order a margherita pizza and a mixed salad.",
    "words": [
      {
        "it": "Vorrei",
        "ar": "عايز"
      },
      {
        "it": "ordinare",
        "ar": "أطلب"
      },
      {
        "it": "una",
        "ar": "(تنكير)"
      },
      {
        "it": "pizza",
        "ar": "بيتزا"
      },
      {
        "it": "margherita",
        "ar": "مارغريتا"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "un'insalata",
        "ar": "سلطة"
      },
      {
        "it": "mista",
        "ar": "مشكلة"
      }
    ]
  },
  {
    "it": "Non mi sento bene, ho mal di testa da ieri sera",
    "ar": "غير حاسس إني كويس؛ عندي صداع من امبارح بالليل.",
    "en": "I don't feel well, I've had a headache since last night.",
    "words": [
      {
        "it": "Non",
        "ar": "مش"
      },
      {
        "it": "mi",
        "ar": "أنا"
      },
      {
        "it": "sento",
        "ar": "بحس"
      },
      {
        "it": "bene",
        "ar": "بخير"
      },
      {
        "it": "ho",
        "ar": "عندي"
      },
      {
        "it": "mal",
        "ar": "ألم"
      },
      {
        "it": "di",
        "ar": "في الـ"
      },
      {
        "it": "testa",
        "ar": "دماغ"
      },
      {
        "it": "da",
        "ar": "من"
      },
      {
        "it": "ieri",
        "ar": "امبارح"
      },
      {
        "it": "sera",
        "ar": "بالليل"
      }
    ]
  },
  {
    "it": "Il medico mi ha detto di prendere la medicina due volte al giorno",
    "ar": "الدكتور قالي آخد الدوا مرتين في اليوم",
    "en": "The doctor told me to take the medicine twice a day.",
    "words": [
      {
        "it": "Il",
        "ar": "الـ"
      },
      {
        "it": "medico",
        "ar": "الدكتور"
      },
      {
        "it": "mi",
        "ar": "لي"
      },
      {
        "it": "ha",
        "ar": "قال"
      },
      {
        "it": "detto",
        "ar": "إني"
      },
      {
        "it": "di",
        "ar": "إني"
      },
      {
        "it": "prendere",
        "ar": "آخد"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "medicina",
        "ar": "الدوا"
      },
      {
        "it": "due",
        "ar": "مرتين"
      },
      {
        "it": "volte",
        "ar": "في"
      },
      {
        "it": "al",
        "ar": "الـ"
      },
      {
        "it": "giorno",
        "ar": "يوم"
      }
    ]
  },
  {
    "it": "Ho una riunione importante alle dieci di mattina",
    "ar": "عندي اجتماع مهم الساعة عشرة الصبح",
    "en": "I have an important meeting at ten in the morning.",
    "words": [
      {
        "it": "Ho",
        "ar": "عندي"
      },
      {
        "it": "una",
        "ar": "(تنكير)"
      },
      {
        "it": "riunione",
        "ar": "اجتماع"
      },
      {
        "it": "importante",
        "ar": "مهم"
      },
      {
        "it": "alle",
        "ar": "الساعة"
      },
      {
        "it": "dieci",
        "ar": "عشرة"
      },
      {
        "it": "di",
        "ar": "الـ"
      },
      {
        "it": "mattina",
        "ar": "الصبح"
      }
    ]
  },
  {
    "it": "Devo finire questo progetto entro venerdì prossimo",
    "ar": "لازم أخلص المشروع هذا قبل الجمعة الجاية.",
    "en": "I need to finish this project by next Friday.",
    "words": [
      {
        "it": "Devo",
        "ar": "لازم"
      },
      {
        "it": "finire",
        "ar": "أخلص"
      },
      {
        "it": "questo",
        "ar": "الـ"
      },
      {
        "it": "progetto",
        "ar": "المشروع"
      },
      {
        "it": "entro",
        "ar": "قبل"
      },
      {
        "it": "venerdì",
        "ar": "الجمعة"
      },
      {
        "it": "prossimo",
        "ar": "الجاية"
      }
    ]
  },
  {
    "it": "Il mio capo mi ha mandato una email importante stamattina",
    "ar": "مديري بعتلي إيميل مهم الصبح",
    "en": "My boss sent me an important email this morning.",
    "words": [
      {
        "it": "Il",
        "ar": "الـ"
      },
      {
        "it": "mio",
        "ar": "الخاص بـي"
      },
      {
        "it": "capo",
        "ar": "مدير"
      },
      {
        "it": "mi",
        "ar": "لي"
      },
      {
        "it": "ha",
        "ar": "بعت"
      },
      {
        "it": "mandato",
        "ar": "إيميل"
      },
      {
        "it": "una",
        "ar": "(تنكير)"
      },
      {
        "it": "email",
        "ar": "إيميل"
      },
      {
        "it": "importante",
        "ar": "مهم"
      },
      {
        "it": "stamattina",
        "ar": "الصبح"
      }
    ]
  },
  {
    "it": "Stasera cucino la pasta con il sugo di pomodoro",
    "ar": "الليلة هطبخ مكرونة بصلصة الطماطم.",
    "en": "Tonight I'm cooking pasta with tomato sauce.",
    "words": [
      {
        "it": "Stasera",
        "ar": "الليلة"
      },
      {
        "it": "cucino",
        "ar": "بطبخ"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "pasta",
        "ar": "الباستا"
      },
      {
        "it": "con",
        "ar": "بـ"
      },
      {
        "it": "il",
        "ar": "الـ"
      },
      {
        "it": "sugo",
        "ar": "صوص"
      },
      {
        "it": "di",
        "ar": "بـ"
      },
      {
        "it": "pomodoro",
        "ar": "طماطم"
      }
    ]
  },
  {
    "it": "Devo fare la spesa e poi portare i bambini a scuola",
    "ar": "لازم أجيب المشتريات وبعدين أوصّل الأطفال للمدرسة.",
    "en": "I need to do the shopping and then take the kids to school.",
    "words": [
      {
        "it": "Devo",
        "ar": "لازم"
      },
      {
        "it": "fare",
        "ar": "أعمل"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "spesa",
        "ar": "المشتريات"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "poi",
        "ar": "بعدين"
      },
      {
        "it": "portare",
        "ar": "أوصّل"
      },
      {
        "it": "i",
        "ar": "الـ"
      },
      {
        "it": "bambini",
        "ar": "الأطفال"
      },
      {
        "it": "a",
        "ar": "لـ"
      },
      {
        "it": "scuola",
        "ar": "المدرسة"
      }
    ]
  },
  {
    "it": "L'affitto di questo appartamento è troppo caro per me",
    "ar": "إيجار الشقة هذه غالي أوي عليا.",
    "en": "The rent for this apartment is too expensive for me.",
    "words": [
      {
        "it": "L'affitto",
        "ar": "إيجار"
      },
      {
        "it": "di",
        "ar": "الـ"
      },
      {
        "it": "questo",
        "ar": "الـ"
      },
      {
        "it": "appartamento",
        "ar": "الشقة"
      },
      {
        "it": "è",
        "ar": "هو"
      },
      {
        "it": "troppo",
        "ar": "أوي"
      },
      {
        "it": "caro",
        "ar": "غالي"
      },
      {
        "it": "per",
        "ar": "على"
      },
      {
        "it": "me",
        "ar": "أنا"
      }
    ]
  },
  {
    "it": "Devo studiare per l'esame di italiano della prossima settimana",
    "ar": "لازم أذاكر لامتحان الإيطالي الأسبوع الجاي",
    "en": "I need to study for the Italian exam next week.",
    "words": [
      {
        "it": "Devo",
        "ar": "لازم"
      },
      {
        "it": "studiare",
        "ar": "أذاكر"
      },
      {
        "it": "per",
        "ar": "لـ"
      },
      {
        "it": "l'esame",
        "ar": "امتحان"
      },
      {
        "it": "di",
        "ar": "الـ"
      },
      {
        "it": "italiano",
        "ar": "إيطالي"
      },
      {
        "it": "della",
        "ar": "الـ",
        "grammarId": "prep_di"
      },
      {
        "it": "prossima",
        "ar": "الجاي"
      },
      {
        "it": "settimana",
        "ar": "الأسبوع"
      }
    ]
  },
  {
    "it": "La professoressa ha spiegato la grammatica in modo molto chiaro",
    "ar": "الأستاذة شرحت القواعد بطريقة واضحة جداً",
    "en": "The professor explained the grammar in a very clear way.",
    "words": [
      {
        "it": "La",
        "ar": "الـ"
      },
      {
        "it": "professoressa",
        "ar": "الأستاذة"
      },
      {
        "it": "ha",
        "ar": "هي"
      },
      {
        "it": "spiegato",
        "ar": "شرحت"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "grammatica",
        "ar": "القواعد"
      },
      {
        "it": "in",
        "ar": "بـ"
      },
      {
        "it": "modo",
        "ar": "طريقة"
      },
      {
        "it": "molto",
        "ar": "جداً"
      },
      {
        "it": "chiaro",
        "ar": "واضحة"
      }
    ]
  },
  {
    "it": "Oggi fa molto caldo, ma domani arriva un po' di pioggia",
    "ar": "النهارده الجو حر جدًا، لكن بكره فيه شوية مطر.",
    "en": "Today it's very hot but tomorrow some rain is coming.",
    "words": [
      {
        "it": "Oggi",
        "ar": "النهارده"
      },
      {
        "it": "fa",
        "ar": "في"
      },
      {
        "it": "molto",
        "ar": "جداً"
      },
      {
        "it": "caldo",
        "ar": "حر"
      },
      {
        "it": "ma",
        "ar": "بس"
      },
      {
        "it": "domani",
        "ar": "بكره"
      },
      {
        "it": "arriva",
        "ar": "هتيجي"
      },
      {
        "it": "un",
        "ar": "(تنكير)"
      },
      {
        "it": "po'",
        "ar": "قليل"
      },
      {
        "it": "di",
        "ar": "من"
      },
      {
        "it": "pioggia",
        "ar": "مطر"
      }
    ]
  },
  {
    "it": "Portati un ombrello, perché sembra che piova oggi pomeriggio",
    "ar": "خد معاك شمسية، علشان واضح إنها هتمطر بعد الضهر.",
    "en": "Take an umbrella because it looks like it will rain this afternoon.",
    "words": [
      {
        "it": "Portati",
        "ar": "خد معاك"
      },
      {
        "it": "un",
        "ar": "(تنكير)"
      },
      {
        "it": "ombrello",
        "ar": "شمسية"
      },
      {
        "it": "perché",
        "ar": "لأن"
      },
      {
        "it": "sembra",
        "ar": "يبان"
      },
      {
        "it": "che",
        "ar": "إنه"
      },
      {
        "it": "piova",
        "ar": "هيمطر"
      },
      {
        "it": "oggi",
        "ar": "النهارده"
      },
      {
        "it": "pomeriggio",
        "ar": "بعد الضهر"
      }
    ]
  },
  {
    "it": "Ti chiamo dopo cena per parlare di questa cosa importante",
    "ar": "هكلمك بعد العشا علشان نتكلم في الموضوع المهم ده.",
    "en": "I'll call you after dinner to talk about this important thing.",
    "words": [
      {
        "it": "Ti",
        "ar": "سأتصل بك"
      },
      {
        "it": "chiamo",
        "ar": "أتصل"
      },
      {
        "it": "dopo",
        "ar": "بعد"
      },
      {
        "it": "cena",
        "ar": "العشا"
      },
      {
        "it": "per",
        "ar": "لكي"
      },
      {
        "it": "parlare",
        "ar": "نتكلم"
      },
      {
        "it": "di",
        "ar": "في"
      },
      {
        "it": "questa",
        "ar": "الـ"
      },
      {
        "it": "cosa",
        "ar": "الموضوع"
      },
      {
        "it": "importante",
        "ar": "المهم"
      }
    ]
  },
  {
    "it": "Ho ricevuto un messaggio da Marco, ma non ho ancora risposto",
    "ar": "وصلتني رسالة من ماركو، لكن لسه ما رديتش.",
    "en": "I received a message from Marco but haven't replied yet.",
    "words": [
      {
        "it": "Ho",
        "ar": "أنا"
      },
      {
        "it": "ricevuto",
        "ar": "استلمت"
      },
      {
        "it": "un",
        "ar": "(تنكير)"
      },
      {
        "it": "messaggio",
        "ar": "رسالة"
      },
      {
        "it": "da",
        "ar": "من"
      },
      {
        "it": "Marco",
        "ar": "ماركو"
      },
      {
        "it": "ma",
        "ar": "بس"
      },
      {
        "it": "non",
        "ar": "مش"
      },
      {
        "it": "ho",
        "ar": "(مساعد)"
      },
      {
        "it": "ancora",
        "ar": "ما زال"
      },
      {
        "it": "risposto",
        "ar": "ردّيت"
      }
    ]
  },
  {
    "it": "Questo fine settimana andiamo al cinema con gli amici",
    "ar": "الويك إند هذا هنروح السينما مع الأصحاب.",
    "en": "This weekend we're going to the cinema with friends.",
    "words": [
      {
        "it": "Questo",
        "ar": "الـ"
      },
      {
        "it": "fine",
        "ar": "نهاية"
      },
      {
        "it": "settimana",
        "ar": "الأسبوع"
      },
      {
        "it": "andiamo",
        "ar": "هنروح"
      },
      {
        "it": "al",
        "ar": "للـ"
      },
      {
        "it": "cinema",
        "ar": "السينما"
      },
      {
        "it": "con",
        "ar": "مع"
      },
      {
        "it": "gli",
        "ar": "الـ"
      },
      {
        "it": "amici",
        "ar": "أصحاب"
      }
    ]
  },
  {
    "it": "Mi piace molto ascoltare la musica, mentre cucino la sera",
    "ar": "بحب أوي أسمع موسيقى وأنا بطبخ بالليل.",
    "en": "I really like listening to music while I cook in the evening.",
    "words": [
      {
        "it": "Mi",
        "ar": "أنا"
      },
      {
        "it": "piace",
        "ar": "بحب"
      },
      {
        "it": "molto",
        "ar": "أوي"
      },
      {
        "it": "ascoltare",
        "ar": "أسمع"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "musica",
        "ar": "موسيقى"
      },
      {
        "it": "mentre",
        "ar": "وأنا"
      },
      {
        "it": "cucino",
        "ar": "بطبخ"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "sera",
        "ar": "بالليل"
      }
    ]
  },
  {
    "it": "Quanta pasta vuoi per cena?",
    "ar": "عايز مكرونة قد ما للعشا؟",
    "en": "How much pasta do you want for dinner?",
    "words": [
      {
        "it": "Quanta",
        "ar": "قد ما (مؤنث)",
        "note": "صفة استفهامية للكمية، مؤنث مفرد"
      },
      {
        "it": "pasta",
        "ar": "مكرونة"
      },
      {
        "it": "vuoi",
        "ar": "عايز"
      },
      {
        "it": "per",
        "ar": "لـ"
      },
      {
        "it": "cena",
        "ar": "العشا"
      }
    ]
  },
  {
    "it": "Quanti fratelli e quante sorelle hai?",
    "ar": "عندك كام أخ وكام أخت؟",
    "en": "How many brothers and how many sisters do you have?",
    "words": [
      {
        "it": "Quanti",
        "ar": "كم (جمع مذكر)",
        "note": "صفة استفهامية للكمية، جمع مذكر"
      },
      {
        "it": "fratelli",
        "ar": "إخوة"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "quante",
        "ar": "كم (جمع مؤنث)",
        "note": "صفة استفهامية للكمية، جمع مؤنث"
      },
      {
        "it": "sorelle",
        "ar": "أخوات"
      },
      {
        "it": "hai",
        "ar": "عندك"
      }
    ]
  },
  {
    "it": "Quali film preferisci guardare?",
    "ar": "أي أفلام بتفضل تتفرج عليها؟",
    "en": "Which movies do you prefer to watch?",
    "words": [
      {
        "it": "Quali",
        "ar": "أي (جمع)",
        "note": "صفة/ضمير استفهامي، للجمع مذكر وموذكر"
      },
      {
        "it": "film",
        "ar": "أفلام"
      },
      {
        "it": "preferisci",
        "ar": "بتفضل"
      },
      {
        "it": "guardare",
        "ar": "تتفرج"
      }
    ]
  },
  {
    "it": "I miei genitori e le mie sorelle abitano a Roma",
    "ar": "والديّ وأخواتي بيسكنوا في روما",
    "en": "My parents and my sisters live in Rome.",
    "words": [
      {
        "it": "I",
        "ar": "الـ"
      },
      {
        "it": "miei",
        "ar": "الخاصة بي (جمع مذكر)",
        "note": "صفة ملكية، جمع مذكر لـ mio"
      },
      {
        "it": "genitori",
        "ar": "والدين"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "le",
        "ar": "الـ"
      },
      {
        "it": "mie",
        "ar": "الخاصة بي (جمع مؤنث)",
        "note": "صفة ملكية، جمع مؤنث لـ mia"
      },
      {
        "it": "sorelle",
        "ar": "أخوات"
      },
      {
        "it": "abitano",
        "ar": "بيسكنوا"
      },
      {
        "it": "a",
        "ar": "في"
      },
      {
        "it": "Roma",
        "ar": "روما"
      }
    ]
  },
  {
    "it": "I tuoi consigli e le tue idee mi hanno aiutato molto",
    "ar": "نصايحك وأفكارك ساعدوني كثير",
    "en": "Your advice and your ideas helped me a lot.",
    "words": [
      {
        "it": "I",
        "ar": "الـ"
      },
      {
        "it": "tuoi",
        "ar": "الخاصة بك (جمع مذكر)",
        "note": "صفة ملكية، جمع مذكر لـ tuo"
      },
      {
        "it": "consigli",
        "ar": "نصايح"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "le",
        "ar": "الـ"
      },
      {
        "it": "tue",
        "ar": "الخاصة بك (جمع مؤنث)",
        "note": "صفة ملكية، جمع مؤنث لـ tua"
      },
      {
        "it": "idee",
        "ar": "أفكار"
      },
      {
        "it": "mi",
        "ar": "لي"
      },
      {
        "it": "hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "aiutato",
        "ar": "ساعدوني",
        "note": "Aiutare، Passato Prossimo"
      },
      {
        "it": "molto",
        "ar": "كثير"
      }
    ]
  },
  {
    "it": "Sua madre e i suoi fratelli sono venuti, ma le sue sorelle no",
    "ar": "أمه وأخواته الذكور جم، بس أخواته البنات لأ",
    "en": "His mother and his brothers came, but his sisters did not.",
    "words": [
      {
        "it": "Sua",
        "ar": "الخاص به/الخاص بها (مؤنث مفرد)",
        "note": "صفة ملكية، مؤنث مفرد لـ suo"
      },
      {
        "it": "madre",
        "ar": "أم"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "i",
        "ar": "الـ"
      },
      {
        "it": "suoi",
        "ar": "الخاصة به/الخاصة بها (جمع مذكر)",
        "note": "صفة ملكية، جمع مذكر لـ suo"
      },
      {
        "it": "fratelli",
        "ar": "إخوة"
      },
      {
        "it": "sono",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "venuti",
        "ar": "جم",
        "note": "Venire، Passato Prossimo"
      },
      {
        "it": "ma",
        "ar": "بس"
      },
      {
        "it": "le",
        "ar": "الـ"
      },
      {
        "it": "sue",
        "ar": "الخاصة به/الخاصة بها (جمع مؤنث)",
        "note": "صفة ملكية، جمع مؤنث لـ suo"
      },
      {
        "it": "sorelle",
        "ar": "أخوات"
      },
      {
        "it": "no",
        "ar": "لأ"
      }
    ]
  },
  {
    "it": "Il nostro professore ha detto che i nostri esami e le nostre lezioni cambieranno",
    "ar": "أستاذنا قال إن امتحاناتنا ودروسنا هتتغير",
    "en": "Our teacher said that our exams and our lessons will change.",
    "words": [
      {
        "it": "Il",
        "ar": "الـ"
      },
      {
        "it": "nostro",
        "ar": "الخاص بـنا (مفرد مذكر)",
        "note": "صفة ملكية، مفرد مذكر"
      },
      {
        "it": "professore",
        "ar": "أستاذ"
      },
      {
        "it": "ha",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "detto",
        "ar": "قال",
        "note": "Dire، Passato Prossimo"
      },
      {
        "it": "che",
        "ar": "إن"
      },
      {
        "it": "i",
        "ar": "الـ"
      },
      {
        "it": "nostri",
        "ar": "الخاصة بنا (جمع مذكر)",
        "note": "صفة ملكية، جمع مذكر"
      },
      {
        "it": "esami",
        "ar": "امتحانات"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "le",
        "ar": "الـ"
      },
      {
        "it": "nostre",
        "ar": "الخاصة بنا (جمع مؤنث)",
        "note": "صفة ملكية، جمع مؤنث"
      },
      {
        "it": "lezioni",
        "ar": "دروس"
      },
      {
        "it": "cambieranno",
        "ar": "هتتغير"
      }
    ]
  },
  {
    "it": "La vostra pazienza e le vostre idee sono importanti per noi",
    "ar": "صبركم وأفكاركم مهمين لينا.",
    "en": "Your patience and your ideas are important to us.",
    "words": [
      {
        "it": "La",
        "ar": "الـ"
      },
      {
        "it": "vostra",
        "ar": "الخاصة بكم (مفرد مؤنث)",
        "note": "صفة ملكية، مفرد مؤنث"
      },
      {
        "it": "pazienza",
        "ar": "صبر"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "le",
        "ar": "الـ"
      },
      {
        "it": "vostre",
        "ar": "الخاصة بكم (جمع مؤنث)",
        "note": "صفة ملكية، جمع مؤنث"
      },
      {
        "it": "idee",
        "ar": "أفكار"
      },
      {
        "it": "sono",
        "ar": ""
      },
      {
        "it": "importanti",
        "ar": "مهمَن"
      },
      {
        "it": "per",
        "ar": "لـ"
      },
      {
        "it": "noi",
        "ar": "نحن"
      }
    ]
  },
  {
    "it": "Ho comprato dei libri e degli zaini per i bambini",
    "ar": "شريت كتب وشنط ظهر للأطفال",
    "en": "I bought some books and some backpacks for the children.",
    "words": [
      {
        "it": "Ho",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "comprato",
        "ar": "شريت",
        "note": "Comprare، Passato Prossimo"
      },
      {
        "it": "dei",
        "ar": "بعض (جمع مذكر)",
        "note": "أداة تبعيض جمع مذكر",
        "grammarId": "partitivi"
      },
      {
        "it": "libri",
        "ar": "كتب"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "degli",
        "ar": "بعض (جمع مذكر يبدأ بحرف متحرك)",
        "note": "أداة تبعيض جمع مذكر قبل صوت متحرك",
        "grammarId": "partitivi"
      },
      {
        "it": "zaini",
        "ar": "شنط ظهر"
      },
      {
        "it": "per",
        "ar": "لـ"
      },
      {
        "it": "i",
        "ar": "الـ"
      },
      {
        "it": "bambini",
        "ar": "الأطفال"
      }
    ]
  },
  {
    "it": "Ho bisogno delle chiavi e dello zucchero per la torta",
    "ar": "محتاج المفاتيح وقليل سكر للتورتة",
    "en": "I need the keys and some sugar for the cake.",
    "words": [
      {
        "it": "Ho",
        "ar": "عندي"
      },
      {
        "it": "bisogno",
        "ar": "محتاج"
      },
      {
        "it": "delle",
        "ar": "بعض (جمع مؤنث)",
        "note": "أداة تبعيض جمع مؤنث",
        "grammarId": "partitivi"
      },
      {
        "it": "chiavi",
        "ar": "مفاتيح"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "dello",
        "ar": "بعض (مفرد مذكر يبدأ بـ s+consonante أو z)",
        "note": "أداة تبعيض مفرد مذكر خاصة",
        "grammarId": "partitivi"
      },
      {
        "it": "zucchero",
        "ar": "سكر"
      },
      {
        "it": "per",
        "ar": "لـ"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "torta",
        "ar": "تورتة"
      }
    ]
  },
  {
    "it": "Questi ragazzi e queste ragazze studiano insieme ogni giorno",
    "ar": "الشباب دول والبنات دول بيدرسوا مع بعض كل يوم.",
    "en": "These boys and these girls study together every day.",
    "words": [
      {
        "it": "Questi",
        "ar": "هؤلاء (جمع مذكر)",
        "note": "ضمير/صفة إشارية جمع مذكر لـ questo"
      },
      {
        "it": "ragazzi",
        "ar": "شباب"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "queste",
        "ar": "هؤلاء (جمع مؤنث)",
        "note": "ضمير/صفة إشارية جمع مؤنث لـ questa"
      },
      {
        "it": "ragazze",
        "ar": "بنات"
      },
      {
        "it": "studiano",
        "ar": "بيدرسوا"
      },
      {
        "it": "insieme",
        "ar": "مع بعض"
      },
      {
        "it": "ogni",
        "ar": "كل"
      },
      {
        "it": "giorno",
        "ar": "يوم"
      }
    ]
  },
  {
    "it": "Quello zaino è pesante, ma quella borsa è leggera",
    "ar": "شنطة الظهر ديك تقيلة، لكن الشنطة هذه خفيفة.",
    "en": "That backpack is heavy, but that bag is light.",
    "words": [
      {
        "it": "Quello",
        "ar": "داك (مفرد مذكر)",
        "note": "صفة إشارية مفرد مذكر"
      },
      {
        "it": "zaino",
        "ar": "شنطة ظهر"
      },
      {
        "it": "è",
        "ar": ""
      },
      {
        "it": "pesante",
        "ar": "ثقيلة"
      },
      {
        "it": "ma",
        "ar": "بس"
      },
      {
        "it": "quella",
        "ar": "هذه (مفرد مؤنث)",
        "note": "صفة إشارية مفرد مؤنث"
      },
      {
        "it": "borsa",
        "ar": "شنطة/جزدان"
      },
      {
        "it": "è",
        "ar": ""
      },
      {
        "it": "leggera",
        "ar": "خفيفة"
      }
    ]
  },
  {
    "it": "Quegli studenti e quelle studentesse hanno superato l'esame",
    "ar": "الطلبة دول والطالبات دول نجحوا في الامتحان.",
    "en": "Those students (male) and those students (female) passed the exam.",
    "words": [
      {
        "it": "Quegli",
        "ar": "داك (جمع مذكر يبدأ بصوت متحرك)",
        "note": "صفة إشارية جمع مذكر خاصة قبل صوت متحرك"
      },
      {
        "it": "studenti",
        "ar": "طلبة"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "quelle",
        "ar": "هؤلاء (جمع مؤنث)",
        "note": "صفة إشارية جمع مؤنث"
      },
      {
        "it": "studentesse",
        "ar": "طالبات"
      },
      {
        "it": "hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "superato",
        "ar": "نجحوا",
        "note": "Superare، Passato Prossimo"
      },
      {
        "it": "l'esame",
        "ar": "الامتحان"
      }
    ]
  },
  {
    "it": "Quei bambini giocavano mentre quelli più grandi studiavano",
    "ar": "الأطفال دول كانوا بيلعبوا، بينما الأكبر منهم كانوا بيذاكروا.",
    "en": "Those children were playing while those older ones were studying.",
    "words": [
      {
        "it": "Quei",
        "ar": "داك (جمع مذكر قبل صوت ساكن)",
        "note": "صفة إشارية جمع مذكر"
      },
      {
        "it": "bambini",
        "ar": "أطفال"
      },
      {
        "it": "giocavano",
        "ar": "كانوا بيلعبوا",
        "note": "Giocare، Imperfetto"
      },
      {
        "it": "mentre",
        "ar": "و"
      },
      {
        "it": "quelli",
        "ar": "داك (ضمير، جمع مذكر)",
        "note": "ضمير إشاري جمع مذكر، ليس صفة"
      },
      {
        "it": "più",
        "ar": "أكتر"
      },
      {
        "it": "grandi",
        "ar": "كبار"
      },
      {
        "it": "studiavano",
        "ar": "كانوا بيذاكروا",
        "note": "Studiare، Imperfetto"
      }
    ]
  },
  {
    "it": "Qualcuno ha bussato alla porta, ma chiunque può entrare",
    "ar": "حد دق الباب، بس أي حد ممكن يدخل",
    "en": "Someone knocked on the door, but anyone can come in.",
    "words": [
      {
        "it": "Qualcuno",
        "ar": "حد ما",
        "note": "ضمير غير محدد، مفرد"
      },
      {
        "it": "ha",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "bussato",
        "ar": "دق",
        "note": "Bussare، Passato Prossimo"
      },
      {
        "it": "alla",
        "ar": "على الـ"
      },
      {
        "it": "porta",
        "ar": "باب"
      },
      {
        "it": "ma",
        "ar": "بس"
      },
      {
        "it": "chiunque",
        "ar": "أي حد",
        "note": "ضمير غير محدد، يعني أي شخص كان"
      },
      {
        "it": "può",
        "ar": "ممكن"
      },
      {
        "it": "entrare",
        "ar": "يدخل"
      }
    ]
  },
  {
    "it": "Ognuno ha la sua opinione, e non voglio dire nulla o niente di più",
    "ar": "كل واحد له رأيه، وغير عايز أقول أي حاجة زيادة.",
    "en": "Everyone has their own opinion, and I don't want to say anything more.",
    "words": [
      {
        "it": "Ognuno",
        "ar": "كل واحد",
        "note": "ضمير غير محدد، مفرد"
      },
      {
        "it": "ha",
        "ar": "له"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "sua",
        "ar": "الخاص به"
      },
      {
        "it": "opinione",
        "ar": "رأي"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "non",
        "ar": "مش"
      },
      {
        "it": "voglio",
        "ar": "عايز"
      },
      {
        "it": "dire",
        "ar": "اقول"
      },
      {
        "it": "nulla",
        "ar": "ولا شيء",
        "note": "ضمير غير محدد للنفي، مثل niente"
      },
      {
        "it": "o",
        "ar": "أو"
      },
      {
        "it": "niente",
        "ar": "ولا شيء",
        "note": "ضمير غير محدد للنفي، مثل nulla"
      },
      {
        "it": "di più",
        "ar": "زيادة"
      }
    ]
  },
  {
    "it": "Tutte le persone sono arrivate, ma nessuno ha parlato",
    "ar": "كل الناس وصلوا، لكن محدش اتكلم.",
    "en": "Everyone arrived, but nobody spoke.",
    "words": [
      {
        "it": "Tutte",
        "ar": "كل"
      },
      {
        "it": "le",
        "ar": "الـ"
      },
      {
        "it": "persone",
        "ar": "الناس"
      },
      {
        "it": "sono",
        "ar": ""
      },
      {
        "it": "arrivate",
        "ar": "وصلوا"
      },
      {
        "it": "ma",
        "ar": "لكن"
      },
      {
        "it": "nessuno",
        "ar": "محدش"
      },
      {
        "it": "ha",
        "ar": ""
      },
      {
        "it": "parlato",
        "ar": "اتكلم"
      }
    ]
  },
  {
    "it": "Non conosco nessuno qui, non ne conosco alcuno",
    "ar": "غير عارف حد هنا، ولا أعرف أي حد منهم.",
    "en": "I don't know anyone here, I don't know any of them.",
    "words": [
      {
        "it": "Non",
        "ar": "مش"
      },
      {
        "it": "conosco",
        "ar": "عارف"
      },
      {
        "it": "nessuno",
        "ar": "حد"
      },
      {
        "it": "qui",
        "ar": "هنا"
      },
      {
        "it": "non",
        "ar": "مش"
      },
      {
        "it": "ne",
        "ar": "منهم"
      },
      {
        "it": "conosco",
        "ar": "عارف"
      },
      {
        "it": "alcuno",
        "ar": "ولا حد (فيهم)",
        "note": "ضمير غير محدد، نادر الاستخدام كصفة، بيتقال غالبًا كضمير بعد ne في النفي"
      }
    ]
  },
  {
    "it": "Non ho alcuna intenzione di andare a quella festa",
    "ar": "معنديش أي نية إني أروح الحفلة دي.",
    "en": "I have no intention of going to that party.",
    "words": [
      {
        "it": "Non",
        "ar": "مش"
      },
      {
        "it": "ho",
        "ar": "عندي"
      },
      {
        "it": "alcuna",
        "ar": "أي (مؤنث)",
        "note": "صفة غير محددة، مؤنث، تُستخدم غالبًا في النفي"
      },
      {
        "it": "intenzione",
        "ar": "نية"
      },
      {
        "it": "di",
        "ar": "إني"
      },
      {
        "it": "andare",
        "ar": "اروح"
      },
      {
        "it": "a",
        "ar": "لـ"
      },
      {
        "it": "quella",
        "ar": "هذه"
      },
      {
        "it": "festa",
        "ar": "حفلة"
      }
    ]
  },
  {
    "it": "Alcuni amici e alcune amiche mi hanno scritto ieri",
    "ar": "بعض الأصحاب وبعض الصاحبات كتبولي امبارح.",
    "en": "Some friends (male and female) wrote to me yesterday.",
    "words": [
      {
        "it": "Alcuni",
        "ar": "بعض (جمع مذكر)",
        "note": "صفة/ضمير غير محدد جمع مذكر"
      },
      {
        "it": "amici",
        "ar": "أصحاب"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "alcune",
        "ar": "بعض (جمع مؤنث)",
        "note": "صفة/ضمير غير محدد جمع مؤنث"
      },
      {
        "it": "amiche",
        "ar": "صاحبات"
      },
      {
        "it": "mi",
        "ar": "لي"
      },
      {
        "it": "hanno",
        "ar": ""
      },
      {
        "it": "scritto",
        "ar": "كتبوا",
        "note": "Scrivere، Passato Prossimo"
      },
      {
        "it": "ieri",
        "ar": "إمبارح"
      }
    ]
  },
  {
    "it": "Molti turisti e molte turiste visitano Roma ogni anno",
    "ar": "سياح كثير رجالة وستات بيزوروا روما كل سنة",
    "en": "Many tourists, male and female, visit Rome every year.",
    "words": [
      {
        "it": "Molti",
        "ar": "كثير (جمع مذكر)",
        "note": "صفة/ضمير غير محدد للكمية، جمع مذكر"
      },
      {
        "it": "turisti",
        "ar": "سياح"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "molte",
        "ar": "كثير (جمع مؤنث)",
        "note": "صفة/ضمير غير محدد للكمية، جمع مؤنث"
      },
      {
        "it": "turiste",
        "ar": "سياحات"
      },
      {
        "it": "visitano",
        "ar": "بيزوروا"
      },
      {
        "it": "Roma",
        "ar": "روما"
      },
      {
        "it": "ogni",
        "ar": "كل"
      },
      {
        "it": "anno",
        "ar": "سنة"
      }
    ]
  },
  {
    "it": "Ho poco tempo, poca pazienza, pochi soldi e poche idee oggi",
    "ar": "عندي وقت قليل، وصبر قليل، وفلوس قليلة، وأفكار قليلة النهاردة",
    "en": "I have little time, little patience, little money, and few ideas today.",
    "words": [
      {
        "it": "Ho",
        "ar": "عندي"
      },
      {
        "it": "poco",
        "ar": "قليل (مفرد مذكر)",
        "note": "صفة غير محددة للكمية القليلة، مفرد مذكر"
      },
      {
        "it": "tempo",
        "ar": "وقت"
      },
      {
        "it": "poca",
        "ar": "قليلة (مفرد مؤنث)",
        "note": "مفرد مؤنث لـ poco"
      },
      {
        "it": "pazienza",
        "ar": "صبر"
      },
      {
        "it": "pochi",
        "ar": "قليلين (جمع مذكر)",
        "note": "جمع مذكر لـ poco"
      },
      {
        "it": "soldi",
        "ar": "فلوس"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "poche",
        "ar": "قليلة (جمع مؤنث)",
        "note": "جمع مؤنث لـ poco"
      },
      {
        "it": "idee",
        "ar": "أفكار"
      },
      {
        "it": "oggi",
        "ar": "النهاردة"
      }
    ]
  },
  {
    "it": "C'è troppa gente, troppi rumori e troppe macchine in questa città",
    "ar": "فيه ناس وضوضاء وعربيات أكتر من اللازم في المدينة دي.",
    "en": "There is too much people, too many noises, and too many cars in this city.",
    "words": [
      {
        "it": "C'è",
        "ar": "فيه"
      },
      {
        "it": "troppa",
        "ar": "كثير أوي (مفرد مؤنث)",
        "note": "صفة غير محددة للكمية الزايدة، مفرد مؤنث"
      },
      {
        "it": "gente",
        "ar": "ناس"
      },
      {
        "it": "troppi",
        "ar": "كثير أوي (جمع مذكر)",
        "note": "جمع مذكر لـ troppo"
      },
      {
        "it": "rumori",
        "ar": "ضوضا"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "troppe",
        "ar": "كثير أوي (جمع مؤنث)",
        "note": "جمع مؤنث لـ troppo"
      },
      {
        "it": "macchine",
        "ar": "عربيات"
      },
      {
        "it": "in",
        "ar": "في"
      },
      {
        "it": "questa",
        "ar": "هذه"
      },
      {
        "it": "città",
        "ar": "مدينة"
      }
    ]
  },
  {
    "it": "Ho tanto lavoro, tanta fame, tanti amici e tante idee",
    "ar": "عندي شغل كثير جدًا، وجعان جدًا، وعندي أصحاب وأفكار كثير.",
    "en": "I have so much work, so much hunger, so many friends, and so many ideas.",
    "words": [
      {
        "it": "Ho",
        "ar": "عندي"
      },
      {
        "it": "tanto",
        "ar": "كثير جدًا (مفرد مذكر)",
        "note": "صفة غير محددة للكمية الكبيرة، مفرد مذكر"
      },
      {
        "it": "lavoro",
        "ar": "شغل"
      },
      {
        "it": "tanta",
        "ar": "كثير جدًا (مفرد مؤنث)",
        "note": "مفرد مؤنث لـ tanto"
      },
      {
        "it": "fame",
        "ar": "جوع"
      },
      {
        "it": "tanti",
        "ar": "كثير جدًا (جمع مذكر)",
        "note": "جمع مذكر لـ tanto"
      },
      {
        "it": "amici",
        "ar": "أصحاب"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "tante",
        "ar": "كثير جدًا (جمع مؤنث)",
        "note": "جمع مؤنث لـ tanto"
      },
      {
        "it": "idee",
        "ar": "أفكار"
      }
    ]
  },
  {
    "it": "Ho aspettato parecchio tempo con parecchia pazienza, insieme a parecchi amici e parecchie amiche",
    "ar": "استنيت وقت طويل بصبر كبير، مع أصحاب وصاحبات كثير.",
    "en": "I waited quite a long time with quite a lot of patience, together with quite a few friends.",
    "words": [
      {
        "it": "Ho",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "aspettato",
        "ar": "استنيت",
        "note": "Aspettare، Passato Prossimo"
      },
      {
        "it": "parecchio",
        "ar": "كثير نسبيًا (مفرد مذكر)",
        "note": "صفة غير محددة، مفرد مذكر"
      },
      {
        "it": "tempo",
        "ar": "وقت"
      },
      {
        "it": "con",
        "ar": "بـ"
      },
      {
        "it": "parecchia",
        "ar": "كثير نسبيًا (مفرد مؤنث)",
        "note": "مفرد مؤنث لـ parecchio"
      },
      {
        "it": "pazienza",
        "ar": "صبر"
      },
      {
        "it": "insieme a",
        "ar": "مع"
      },
      {
        "it": "parecchi",
        "ar": "كثير نسبيًا (جمع مذكر)",
        "note": "جمع مذكر لـ parecchio"
      },
      {
        "it": "amici",
        "ar": "أصحاب"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "parecchie",
        "ar": "كثير نسبيًا",
        "note": "جمع مؤنث لـ parecchio"
      },
      {
        "it": "amiche",
        "ar": "صاحبات"
      }
    ]
  },
  {
    "it": "Vuoi un altro caffè o un'altra bibita? Ho anche altri dolci e altre bevande",
    "ar": "عايز قهوة تانية ولا مشروب تاني؟ عندي كمان حلويات ومشروبات تانية.",
    "en": "Do you want another coffee or another drink? I also have other sweets and other drinks.",
    "words": [
      {
        "it": "Vuoi",
        "ar": "عايز"
      },
      {
        "it": "un",
        "ar": ""
      },
      {
        "it": "altro",
        "ar": "تاني",
        "note": "صفة/ضمير غير محدد، مفرد مذكر"
      },
      {
        "it": "caffè",
        "ar": "قهوة"
      },
      {
        "it": "o",
        "ar": "ولا"
      },
      {
        "it": "un'altra",
        "ar": "تانية",
        "note": "altra، مفرد مؤنث لـ altro"
      },
      {
        "it": "bibita",
        "ar": "مشروب"
      },
      {
        "it": "Ho",
        "ar": "عندي"
      },
      {
        "it": "anche",
        "ar": "أيضًا",
        "note": "ظرف بمعنى also/too"
      },
      {
        "it": "altri",
        "ar": "تانية",
        "note": "جمع مذكر لـ altro"
      },
      {
        "it": "dolci",
        "ar": "حلويات"
      },
      {
        "it": "e",
        "ar": "و"
      },
      {
        "it": "altre",
        "ar": "تانية",
        "note": "جمع مؤنث لـ altro"
      },
      {
        "it": "bevande",
        "ar": "مشروبات"
      }
    ]
  },
  {
    "it": "Certo che vengo! Certa gente non capisce che certi giorni sono difficili per certe persone",
    "ar": "بالطبع هاجي! في ناس ما بيفهموش إن في أيام صعبة على ناس معينة",
    "en": "Of course I'm coming! Certain people don't understand that certain days are hard for certain people.",
    "words": [
      {
        "it": "Certo",
        "ar": "بالطبع",
        "note": "هنا بمعنى بالتأكيد؛ ولما تيجي قبل اسم بتبقى صفة غير محددة"
      },
      {
        "it": "che",
        "ar": "إن"
      },
      {
        "it": "vengo",
        "ar": "هاجي"
      },
      {
        "it": "Certa",
        "ar": "معينة (مفرد مؤنث)",
        "note": "صفة غير محددة، مفرد مؤنث"
      },
      {
        "it": "gente",
        "ar": "ناس"
      },
      {
        "it": "non",
        "ar": "مش"
      },
      {
        "it": "capisce",
        "ar": "تفهم"
      },
      {
        "it": "che",
        "ar": "إن"
      },
      {
        "it": "certi",
        "ar": "معينة (جمع مذكر)",
        "note": "جمع مذكر لـ certo"
      },
      {
        "it": "giorni",
        "ar": "أيام"
      },
      {
        "it": "sono",
        "ar": ""
      },
      {
        "it": "difficili",
        "ar": "صعبة"
      },
      {
        "it": "per",
        "ar": "لـ"
      },
      {
        "it": "certe",
        "ar": "معينة (جمع مؤنث)",
        "note": "جمع مؤنث لـ certo"
      },
      {
        "it": "persone",
        "ar": "ناس"
      }
    ]
  },
  {
    "it": "Non so dove hai messo le chiavi",
    "ar": "غير عارف حطيت المفاتيح فين.",
    "en": "I don't know where you put the keys.",
    "words": [
      {
        "it": "Non",
        "ar": "مش"
      },
      {
        "it": "so",
        "ar": "عارف"
      },
      {
        "it": "dove",
        "ar": "فين",
        "note": "حرف جر/ظرف استفهامي أو رابط للمكان"
      },
      {
        "it": "hai",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "messo",
        "ar": "حطيت",
        "note": "Mettere، Passato Prossimo"
      },
      {
        "it": "le",
        "ar": "الـ"
      },
      {
        "it": "chiavi",
        "ar": "مفاتيح"
      }
    ]
  },
  {
    "it": "Abbiamo camminato lungo la spiaggia mentre parlavamo",
    "ar": "مشينا على طول الشاطئ ونحن بنتكلم.",
    "en": "We walked along the beach while we were talking.",
    "words": [
      {
        "it": "Abbiamo",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "camminato",
        "ar": "مشينا",
        "note": "Camminare، Passato Prossimo"
      },
      {
        "it": "lungo",
        "ar": "على طول",
        "note": "حرف جر مركب بمعنى along"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "spiaggia",
        "ar": "شط"
      },
      {
        "it": "mentre",
        "ar": "ونحن"
      },
      {
        "it": "parlavamo",
        "ar": "كنا بنتكلم",
        "note": "Parlare، Imperfetto"
      }
    ]
  },
  {
    "it": "Ho dormito durante il viaggio in treno",
    "ar": "نمت خلال رحلة القطر",
    "en": "I slept during the train journey.",
    "words": [
      {
        "it": "Ho",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "dormito",
        "ar": "نمت",
        "note": "Dormire، Passato Prossimo"
      },
      {
        "it": "durante",
        "ar": "خلال",
        "note": "حرف جر مركب بمعنى during"
      },
      {
        "it": "il",
        "ar": "الـ"
      },
      {
        "it": "viaggio",
        "ar": "رحلة"
      },
      {
        "it": "in",
        "ar": "بـ"
      },
      {
        "it": "treno",
        "ar": "قطر"
      }
    ]
  },
  {
    "it": "Sono uscito verso le nove di sera",
    "ar": "خرجت حوالي الساعة تسعة بالليل.",
    "en": "I went out around nine in the evening.",
    "words": [
      {
        "it": "Sono",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "uscito",
        "ar": "خرجت",
        "note": "Uscire، Passato Prossimo"
      },
      {
        "it": "verso",
        "ar": "حوالي",
        "note": "حرف جر مركب بمعنى around/toward"
      },
      {
        "it": "le",
        "ar": "الـ"
      },
      {
        "it": "nove",
        "ar": "تسعة"
      },
      {
        "it": "di",
        "ar": "بـ"
      },
      {
        "it": "sera",
        "ar": "بالليل"
      }
    ]
  },
  {
    "it": "La squadra ha giocato contro un avversario forte",
    "ar": "الفريق لعب ضد خصم قوي",
    "en": "The team played against a strong opponent.",
    "words": [
      {
        "it": "La",
        "ar": "الـ"
      },
      {
        "it": "squadra",
        "ar": "فريق"
      },
      {
        "it": "ha",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "giocato",
        "ar": "لعب",
        "note": "Giocare، Passato Prossimo"
      },
      {
        "it": "contro",
        "ar": "ضد",
        "note": "حرف جر مركب بمعنى against"
      },
      {
        "it": "un",
        "ar": ""
      },
      {
        "it": "avversario",
        "ar": "خصم"
      },
      {
        "it": "forte",
        "ar": "قوي"
      }
    ]
  },
  {
    "it": "Secondo me, hai fatto la scelta giusta",
    "ar": "في رأيي، اخترت الاختيار الصح.",
    "en": "In my opinion, you made the right choice.",
    "words": [
      {
        "it": "Secondo",
        "ar": "حسب",
        "note": "حرف جر مركب بمعنى according to"
      },
      {
        "it": "me",
        "ar": "رأيي"
      },
      {
        "it": "hai",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "fatto",
        "ar": "اخترت",
        "note": "Fare، Passato Prossimo"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "scelta",
        "ar": "اختيار"
      },
      {
        "it": "giusta",
        "ar": "الصح"
      }
    ]
  },
  {
    "it": "Oltre al lavoro, ho anche altri impegni",
    "ar": "غير الشغل، عندي التزامات تانية كمان.",
    "en": "Besides work, I also have other commitments.",
    "words": [
      {
        "it": "Oltre",
        "ar": "غير",
        "note": "حرف جر مركب بمعنى besides/beyond"
      },
      {
        "it": "al",
        "ar": "الـ"
      },
      {
        "it": "lavoro",
        "ar": "شغل"
      },
      {
        "it": "ho",
        "ar": "عندي"
      },
      {
        "it": "anche",
        "ar": "أيضًا",
        "note": "ظرف بمعنى also/too"
      },
      {
        "it": "altri",
        "ar": "تانية"
      },
      {
        "it": "impegni",
        "ar": "التزامات"
      }
    ]
  },
  {
    "it": "Hanno mangiato tutto eccetto la verdura",
    "ar": "أكلوا كل شيء غير الخضار",
    "en": "They ate everything except the vegetables.",
    "words": [
      {
        "it": "Hanno",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "mangiato",
        "ar": "أكلوا",
        "note": "Mangiare، Passato Prossimo"
      },
      {
        "it": "tutto",
        "ar": "كل شيء"
      },
      {
        "it": "eccetto",
        "ar": "غير",
        "note": "حرف جر مركب بمعنى except"
      },
      {
        "it": "la",
        "ar": "الـ"
      },
      {
        "it": "verdura",
        "ar": "خضار"
      }
    ]
  },
  {
    "it": "Andremo alla festa, salvo imprevisti",
    "ar": "هنروح الحفلة، إلا لو حصلت حاجة غير متوقعة.",
    "en": "We'll go to the party, unless something unexpected happens.",
    "words": [
      {
        "it": "Andremo",
        "ar": "هنروح"
      },
      {
        "it": "alla",
        "ar": "للـ"
      },
      {
        "it": "festa",
        "ar": "حفلة"
      },
      {
        "it": "salvo",
        "ar": "إلا لو",
        "note": "حرف جر مركب بمعنى except/barring"
      },
      {
        "it": "imprevisti",
        "ar": "ظروف غير متوقعة"
      }
    ]
  },
  {
    "it": "Ho prenotato il biglietto tramite internet, mediante una carta di credito",
    "ar": "حجزت التذكرة عن طريق الإنترنت باستخدام بطاقة ائتمان.",
    "en": "I booked the ticket via the internet, by means of a credit card.",
    "words": [
      {
        "it": "Ho",
        "ar": "",
        "note": "جزء من الفعل المساعد"
      },
      {
        "it": "prenotato",
        "ar": "حجزت",
        "note": "Prenotare، Passato Prossimo"
      },
      {
        "it": "il",
        "ar": "الـ"
      },
      {
        "it": "biglietto",
        "ar": "تذكرة"
      },
      {
        "it": "tramite",
        "ar": "عن طريق",
        "note": "حرف جر مركب بمعنى via/through"
      },
      {
        "it": "internet",
        "ar": "النت"
      },
      {
        "it": "mediante",
        "ar": "عن طريق",
        "note": "حرف جر مركب بمعنى by means of"
      },
      {
        "it": "una",
        "ar": ""
      },
      {
        "it": "carta",
        "ar": "كارت"
      },
      {
        "it": "di",
        "ar": ""
      },
      {
        "it": "credito",
        "ar": "الائتمان"
      }
    ]
  },
  {
    "it": "Vengo anche io alla festa, vieni pure tu!",
    "ar": "هاجي أنا أيضًا للحفلة، تعالى أنت أيضًا!",
    "en": "I'm coming to the party too, you come too!",
    "words": [
      {
        "it": "Vengo",
        "ar": "هاجي"
      },
      {
        "it": "anche",
        "ar": "أيضًا",
        "note": "ظرف بمعنى also/too، ممكن تتحول لـ anch' قبل io"
      },
      {
        "it": "io",
        "ar": "أنا"
      },
      {
        "it": "alla",
        "ar": "للـ"
      },
      {
        "it": "festa",
        "ar": "حفلة"
      },
      {
        "it": "vieni",
        "ar": "تعالى"
      },
      {
        "it": "pure",
        "ar": "أيضًا",
        "note": "ظرف بمعنى also/too، وأيضًا يُستخدم كتشجيع مثل Vai pure!"
      },
      {
        "it": "tu",
        "ar": "أنت"
      }
    ]
  }
];
