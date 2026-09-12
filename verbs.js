const VERBS = [
  {
    "it": "Aiutare",
    "ar": "يساعد",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Aiuto",
        "ar": "بساعد"
      },
      {
        "person": "Tu (أنت)",
        "form": "Aiuti",
        "ar": "بتساعد"
      },
      {
        "person": "Lui (هو)",
        "form": "Aiuta",
        "ar": "بيساعد"
      },
      {
        "person": "Lei (هي)",
        "form": "Aiuta",
        "ar": "بتساعد"
      },
      {
        "person": "Noi (نحن)",
        "form": "Aiutiamo",
        "ar": "بنساعد"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Aiutate",
        "ar": "بتساعدوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Aiutano",
        "ar": "بيساعدوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho aiutato",
          "ar": "ساعدت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai aiutato",
          "ar": "ساعدت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha aiutato",
          "ar": "ساعد"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha aiutato",
          "ar": "ساعدت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo aiutato",
          "ar": "ساعدنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete aiutato",
          "ar": "ساعدتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno aiutato",
          "ar": "ساعدوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Aiutavo",
          "ar": "كنت بساعد"
        },
        {
          "person": "Tu (أنت)",
          "form": "Aiutavi",
          "ar": "كنت بتساعد"
        },
        {
          "person": "Lui (هو)",
          "form": "Aiutava",
          "ar": "كان بيساعد"
        },
        {
          "person": "Lei (هي)",
          "form": "Aiutava",
          "ar": "كانت بتساعد"
        },
        {
          "person": "Noi (نحن)",
          "form": "Aiutavamo",
          "ar": "كنا بنساعد"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Aiutavate",
          "ar": "كنتوا بتساعدوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Aiutavano",
          "ar": "كانوا بيساعدوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Aiuta",
          "ar": "ساعد"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Aiuti",
          "ar": "ساعد"
        },
        {
          "person": "Noi (نحن)",
          "form": "Aiutiamo",
          "ar": "يلا نساعد"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Aiutate",
          "ar": "ساعدوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Aiutino",
          "ar": "ساعدوا"
        }
      ]
    }
  },
  {
    "it": "Andare",
    "ar": "يروح / يذهب",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Vado",
        "ar": "بروح"
      },
      {
        "person": "Tu (أنت)",
        "form": "Vai",
        "ar": "بتروح"
      },
      {
        "person": "Lui (هو)",
        "form": "Va",
        "ar": "بيروح"
      },
      {
        "person": "Lei (هي)",
        "form": "Va",
        "ar": "بتروح"
      },
      {
        "person": "Noi (نحن)",
        "form": "Andiamo",
        "ar": "بنروح"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Andate",
        "ar": "بتروحوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Vanno",
        "ar": "بيروحوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono andato/a",
          "ar": "رحت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei andato/a",
          "ar": "رحت"
        },
        {
          "person": "Lui (هو)",
          "form": "È andato",
          "ar": "راح"
        },
        {
          "person": "Lei (هي)",
          "form": "È andata",
          "ar": "راحت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo andati/e",
          "ar": "رحنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete andati/e",
          "ar": "رحتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono andati/e",
          "ar": "راحوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Andavo",
          "ar": "كنت بروح"
        },
        {
          "person": "Tu (أنت)",
          "form": "Andavi",
          "ar": "كنت بتروح"
        },
        {
          "person": "Lui (هو)",
          "form": "Andava",
          "ar": "كان بيروح"
        },
        {
          "person": "Lei (هي)",
          "form": "Andava",
          "ar": "كانت بتروح"
        },
        {
          "person": "Noi (نحن)",
          "form": "Andavamo",
          "ar": "كنا بنروح"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Andavate",
          "ar": "كنتوا بتروحوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Andavano",
          "ar": "كانوا بيروحوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Va' / Vai",
          "ar": "روح"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Vada",
          "ar": "روح"
        },
        {
          "person": "Noi (نحن)",
          "form": "Andiamo",
          "ar": "يلا بينا نروح"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Andate",
          "ar": "روحوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Vadano",
          "ar": "روحوا"
        }
      ]
    }
  },
  {
    "it": "Arrivare",
    "ar": "يوصل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Arrivo",
        "ar": "بوصل"
      },
      {
        "person": "Tu (أنت)",
        "form": "Arrivi",
        "ar": "بتوصل"
      },
      {
        "person": "Lui (هو)",
        "form": "Arriva",
        "ar": "بيوصل"
      },
      {
        "person": "Lei (هي)",
        "form": "Arriva",
        "ar": "بتوصل"
      },
      {
        "person": "Noi (نحن)",
        "form": "Arriviamo",
        "ar": "بنوصل"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Arrivate",
        "ar": "بتوصلوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Arrivano",
        "ar": "بيوصلوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono arrivato/a",
          "ar": "وصلت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei arrivato/a",
          "ar": "وصلت"
        },
        {
          "person": "Lui (هو)",
          "form": "È arrivato",
          "ar": "وصل"
        },
        {
          "person": "Lei (هي)",
          "form": "È arrivata",
          "ar": "وصلت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo arrivati/e",
          "ar": "وصلنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete arrivati/e",
          "ar": "وصلتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono arrivati/e",
          "ar": "وصلوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Arrivavo",
          "ar": "كنت بوصل"
        },
        {
          "person": "Tu (أنت)",
          "form": "Arrivavi",
          "ar": "كنت بتوصل"
        },
        {
          "person": "Lui (هو)",
          "form": "Arrivava",
          "ar": "كان بيوصل"
        },
        {
          "person": "Lei (هي)",
          "form": "Arrivava",
          "ar": "كانت بتوصل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Arrivavamo",
          "ar": "كنا بنوصل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Arrivavate",
          "ar": "كنتوا بتوصلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Arrivavano",
          "ar": "كانوا بيوصلوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Arriva",
          "ar": "وصل"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Arrivi",
          "ar": "وصل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Arriviamo",
          "ar": "يلا نوصل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Arrivate",
          "ar": "وصلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Arrivino",
          "ar": "وصلوا"
        }
      ]
    }
  },
  {
    "it": "Ascoltare",
    "ar": "يسمع / يستمع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Ascolto",
        "ar": "بسمع"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ascolti",
        "ar": "بتسمع"
      },
      {
        "person": "Lui (هو)",
        "form": "Ascolta",
        "ar": "بيسمع"
      },
      {
        "person": "Lei (هي)",
        "form": "Ascolta",
        "ar": "بتسمع"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ascoltiamo",
        "ar": "بنسمع"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Ascoltate",
        "ar": "بتسمعوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Ascoltano",
        "ar": "بيسمعوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho ascoltato",
          "ar": "سمعت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai ascoltato",
          "ar": "سمعت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha ascoltato",
          "ar": "سمع"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha ascoltato",
          "ar": "سمعت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo ascoltato",
          "ar": "سمعنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete ascoltato",
          "ar": "سمعتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno ascoltato",
          "ar": "سمعوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ascoltavo",
          "ar": "كنت بسمع"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ascoltavi",
          "ar": "كنت بتسمع"
        },
        {
          "person": "Lui (هو)",
          "form": "Ascoltava",
          "ar": "كان بيسمع"
        },
        {
          "person": "Lei (هي)",
          "form": "Ascoltava",
          "ar": "كانت بتسمع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ascoltavamo",
          "ar": "كنا بنسمع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ascoltavate",
          "ar": "كنتوا بتسمعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Ascoltavano",
          "ar": "كانوا بيسمعوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Ascolta",
          "ar": "اسمع"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Ascolti",
          "ar": "اسمع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ascoltiamo",
          "ar": "يلا نسمع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ascoltate",
          "ar": "اسمعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Ascoltino",
          "ar": "اسمعوا"
        }
      ]
    }
  },
  {
    "it": "Aspettare",
    "ar": "ينتظر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Aspetto",
        "ar": "بنتظر"
      },
      {
        "person": "Tu (أنت)",
        "form": "Aspetti",
        "ar": "بتنتظر"
      },
      {
        "person": "Lui (هو)",
        "form": "Aspetta",
        "ar": "بينتظر"
      },
      {
        "person": "Lei (هي)",
        "form": "Aspetta",
        "ar": "بتنتظر"
      },
      {
        "person": "Noi (نحن)",
        "form": "Aspettiamo",
        "ar": "بننتظر"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Aspettate",
        "ar": "بتنتظروا"
      },
      {
        "person": "Loro (هم)",
        "form": "Aspettano",
        "ar": "بينتظروا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho aspettato",
          "ar": "انتظرت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai aspettato",
          "ar": "انتظرت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha aspettato",
          "ar": "انتظر"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha aspettato",
          "ar": "انتظرت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo aspettato",
          "ar": "انتظرنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete aspettato",
          "ar": "انتظرتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno aspettato",
          "ar": "انتظروا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Aspettavo",
          "ar": "كنت بنتظر"
        },
        {
          "person": "Tu (أنت)",
          "form": "Aspettavi",
          "ar": "كنت بتنتظر"
        },
        {
          "person": "Lui (هو)",
          "form": "Aspettava",
          "ar": "كان بينتظر"
        },
        {
          "person": "Lei (هي)",
          "form": "Aspettava",
          "ar": "كانت بتنتظر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Aspettavamo",
          "ar": "كنا بننتظر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Aspettavate",
          "ar": "كنتوا بتنتظروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Aspettavano",
          "ar": "كانوا بينتظروا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Aspetta",
          "ar": "انتظر"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Aspetti",
          "ar": "انتظر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Aspettiamo",
          "ar": "يلا ننتظر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Aspettate",
          "ar": "انتظروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Aspettino",
          "ar": "انتظروا"
        }
      ]
    }
  },
  {
    "it": "Bussare",
    "ar": "يخبط (على الباب)",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Busso",
        "ar": "بخبط (على الباب)"
      },
      {
        "person": "Tu (أنت)",
        "form": "Bussi",
        "ar": "بتخبط (على الباب)"
      },
      {
        "person": "Lui (هو)",
        "form": "Bussa",
        "ar": "بيخبط (على الباب)"
      },
      {
        "person": "Lei (هي)",
        "form": "Bussa",
        "ar": "بتخبط (على الباب)"
      },
      {
        "person": "Noi (نحن)",
        "form": "Bussiamo",
        "ar": "بنخبط (على الباب)"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Bussate",
        "ar": "بتخبطوا (على الباب)"
      },
      {
        "person": "Loro (هم)",
        "form": "Bussano",
        "ar": "بيخبطوا (على الباب)"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho bussato",
          "ar": "خبطت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai bussato",
          "ar": "خبطت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha bussato",
          "ar": "خبط"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha bussato",
          "ar": "خبطت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo bussato",
          "ar": "خبطنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete bussato",
          "ar": "خبطتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno bussato",
          "ar": "خبطوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Bussavo",
          "ar": "كنت بخبط (على الباب)"
        },
        {
          "person": "Tu (أنت)",
          "form": "Bussavi",
          "ar": "كنت بتخبط (على الباب)"
        },
        {
          "person": "Lui (هو)",
          "form": "Bussava",
          "ar": "كان بيخبط (على الباب)"
        },
        {
          "person": "Lei (هي)",
          "form": "Bussava",
          "ar": "كانت بتخبط (على الباب)"
        },
        {
          "person": "Noi (نحن)",
          "form": "Bussavamo",
          "ar": "كنا بنخبط (على الباب)"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Bussavate",
          "ar": "كنتوا بتخبطوا (على الباب)"
        },
        {
          "person": "Loro (هم)",
          "form": "Bussavano",
          "ar": "كانوا بيخبطوا (على الباب)"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Bussa",
          "ar": "اخبط"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Bussi",
          "ar": "اخبط"
        },
        {
          "person": "Noi (نحن)",
          "form": "Bussiamo",
          "ar": "يلا نخبط"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Bussate",
          "ar": "اخبطوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Bussino",
          "ar": "اخبطوا"
        }
      ]
    }
  },
  {
    "it": "Camminare",
    "ar": "يمشي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Cammino",
        "ar": "بمشي"
      },
      {
        "person": "Tu (أنت)",
        "form": "Cammini",
        "ar": "بتمشي"
      },
      {
        "person": "Lui (هو)",
        "form": "Cammina",
        "ar": "بيمشي"
      },
      {
        "person": "Lei (هي)",
        "form": "Cammina",
        "ar": "بتمشي"
      },
      {
        "person": "Noi (نحن)",
        "form": "Camminiamo",
        "ar": "بنمشي"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Camminate",
        "ar": "بتمشيوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Camminano",
        "ar": "بيمشيوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho camminato",
          "ar": "مشيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai camminato",
          "ar": "مشيت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha camminato",
          "ar": "مشى"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha camminato",
          "ar": "مشت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo camminato",
          "ar": "مشينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete camminato",
          "ar": "مشيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno camminato",
          "ar": "مشيوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Camminavo",
          "ar": "كنت بمشي"
        },
        {
          "person": "Tu (أنت)",
          "form": "Camminavi",
          "ar": "كنت بتمشي"
        },
        {
          "person": "Lui (هو)",
          "form": "Camminava",
          "ar": "كان بيمشي"
        },
        {
          "person": "Lei (هي)",
          "form": "Camminava",
          "ar": "كانت بتمشي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Camminavamo",
          "ar": "كنا بنمشي"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Camminavate",
          "ar": "كنتوا بتمشيوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Camminavano",
          "ar": "كانوا بيمشيوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Cammina",
          "ar": "امشي"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Cammini",
          "ar": "امشي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Camminiamo",
          "ar": "يلا نمشي"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Camminate",
          "ar": "امشوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Camminino",
          "ar": "امشوا"
        }
      ]
    }
  },
  {
    "it": "Cercare",
    "ar": "يبحث عن",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Cerco",
        "ar": "ببحث عن"
      },
      {
        "person": "Tu (أنت)",
        "form": "Cerchi",
        "ar": "بتبحث عن"
      },
      {
        "person": "Lui (هو)",
        "form": "Cerca",
        "ar": "بيبحث عن"
      },
      {
        "person": "Lei (هي)",
        "form": "Cerca",
        "ar": "بتبحث عن"
      },
      {
        "person": "Noi (نحن)",
        "form": "Cerchiamo",
        "ar": "بنبحث عن"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Cercate",
        "ar": "بتبحثوا عن"
      },
      {
        "person": "Loro (هم)",
        "form": "Cercano",
        "ar": "بيبحثوا عن"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho cercato",
          "ar": "بحثت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai cercato",
          "ar": "بحثت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha cercato",
          "ar": "بحث"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha cercato",
          "ar": "بحثت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo cercato",
          "ar": "بحثنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete cercato",
          "ar": "بحثتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno cercato",
          "ar": "بحثوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Cercavo",
          "ar": "كنت ببحث عن"
        },
        {
          "person": "Tu (أنت)",
          "form": "Cercavi",
          "ar": "كنت بتبحث عن"
        },
        {
          "person": "Lui (هو)",
          "form": "Cercava",
          "ar": "كان بيبحث عن"
        },
        {
          "person": "Lei (هي)",
          "form": "Cercava",
          "ar": "كانت بتبحث عن"
        },
        {
          "person": "Noi (نحن)",
          "form": "Cercavamo",
          "ar": "كنا بنبحث عن"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cercavate",
          "ar": "كنتوا بتبحثوا عن"
        },
        {
          "person": "Loro (هم)",
          "form": "Cercavano",
          "ar": "كانوا بيبحثوا عن"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Cerca",
          "ar": "ابحث"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Cerchi",
          "ar": "ابحث"
        },
        {
          "person": "Noi (نحن)",
          "form": "Cerchiamo",
          "ar": "يلا نبحث"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cercate",
          "ar": "ابحثوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Cerchino",
          "ar": "ابحثوا"
        }
      ]
    }
  },
  {
    "it": "Chiamare",
    "ar": "ينادي / يتصل بـ",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Chiamo",
        "ar": "بنادي"
      },
      {
        "person": "Tu (أنت)",
        "form": "Chiami",
        "ar": "بتنادي"
      },
      {
        "person": "Lui (هو)",
        "form": "Chiama",
        "ar": "بينادي"
      },
      {
        "person": "Lei (هي)",
        "form": "Chiama",
        "ar": "بتنادي"
      },
      {
        "person": "Noi (نحن)",
        "form": "Chiamiamo",
        "ar": "بننادي"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Chiamate",
        "ar": "بتناديوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Chiamano",
        "ar": "بيناديوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho chiamato",
          "ar": "ناديت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai chiamato",
          "ar": "ناديت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha chiamato",
          "ar": "نادى"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha chiamato",
          "ar": "نادت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo chiamato",
          "ar": "نادينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete chiamato",
          "ar": "ناديتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno chiamato",
          "ar": "نادوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Chiamavo",
          "ar": "كنت بنادي"
        },
        {
          "person": "Tu (أنت)",
          "form": "Chiamavi",
          "ar": "كنت بتنادي"
        },
        {
          "person": "Lui (هو)",
          "form": "Chiamava",
          "ar": "كان بينادي"
        },
        {
          "person": "Lei (هي)",
          "form": "Chiamava",
          "ar": "كانت بتنادي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Chiamavamo",
          "ar": "كنا بننادي"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Chiamavate",
          "ar": "كنتوا بتناديوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Chiamavano",
          "ar": "كانوا بيناديوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Chiama",
          "ar": "نادي"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Chiami",
          "ar": "نادي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Chiamiamo",
          "ar": "يلا ننادي"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Chiamate",
          "ar": "نادوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Chiamino",
          "ar": "نادوا"
        }
      ]
    }
  },
  {
    "it": "Comprare",
    "ar": "يشتري",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Compro",
        "ar": "بشتري"
      },
      {
        "person": "Tu (أنت)",
        "form": "Compri",
        "ar": "بتشتري"
      },
      {
        "person": "Lui (هو)",
        "form": "Compra",
        "ar": "بيشتري"
      },
      {
        "person": "Lei (هي)",
        "form": "Compra",
        "ar": "بتشتري"
      },
      {
        "person": "Noi (نحن)",
        "form": "Compriamo",
        "ar": "بنشتري"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Comprate",
        "ar": "بتشتريوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Comprano",
        "ar": "بيشتريوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho comprato",
          "ar": "اشتريت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai comprato",
          "ar": "اشتريت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha comprato",
          "ar": "اشترى"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha comprato",
          "ar": "اشترت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo comprato",
          "ar": "اشترينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete comprato",
          "ar": "اشتريتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno comprato",
          "ar": "اشتروا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Compravo",
          "ar": "كنت بشتري"
        },
        {
          "person": "Tu (أنت)",
          "form": "Compravi",
          "ar": "كنت بتشتري"
        },
        {
          "person": "Lui (هو)",
          "form": "Comprava",
          "ar": "كان بيشتري"
        },
        {
          "person": "Lei (هي)",
          "form": "Comprava",
          "ar": "كانت بتشتري"
        },
        {
          "person": "Noi (نحن)",
          "form": "Compravamo",
          "ar": "كنا بنشتري"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Compravate",
          "ar": "كنتوا بتشتريوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Compravano",
          "ar": "كانوا بيشتريوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Compra",
          "ar": "اشتري"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Compri",
          "ar": "اشتري"
        },
        {
          "person": "Noi (نحن)",
          "form": "Compriamo",
          "ar": "يلا نشتري"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Comprate",
          "ar": "اشتروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Comprino",
          "ar": "اشتروا"
        }
      ]
    }
  },
  {
    "it": "Giocare",
    "ar": "يلعب",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Gioco",
        "ar": "بلعب"
      },
      {
        "person": "Tu (أنت)",
        "form": "Giochi",
        "ar": "بتلعب"
      },
      {
        "person": "Lui (هو)",
        "form": "Gioca",
        "ar": "بيلعب"
      },
      {
        "person": "Lei (هي)",
        "form": "Gioca",
        "ar": "بتلعب"
      },
      {
        "person": "Noi (نحن)",
        "form": "Giochiamo",
        "ar": "بنلعب"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Giocate",
        "ar": "بتلعبوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Giocano",
        "ar": "بيلعبوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho giocato",
          "ar": "لعبت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai giocato",
          "ar": "لعبت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha giocato",
          "ar": "لعب"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha giocato",
          "ar": "لعبت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo giocato",
          "ar": "لعبنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete giocato",
          "ar": "لعبتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno giocato",
          "ar": "لعبوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Giocavo",
          "ar": "كنت بلعب"
        },
        {
          "person": "Tu (أنت)",
          "form": "Giocavi",
          "ar": "كنت بتلعب"
        },
        {
          "person": "Lui (هو)",
          "form": "Giocava",
          "ar": "كان بيلعب"
        },
        {
          "person": "Lei (هي)",
          "form": "Giocava",
          "ar": "كانت بتلعب"
        },
        {
          "person": "Noi (نحن)",
          "form": "Giocavamo",
          "ar": "كنا بنلعب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Giocavate",
          "ar": "كنتوا بتلعبوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Giocavano",
          "ar": "كانوا بيلعبوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Gioca",
          "ar": "العب"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Giochi",
          "ar": "العب"
        },
        {
          "person": "Noi (نحن)",
          "form": "Giochiamo",
          "ar": "يلا نلعب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Giocate",
          "ar": "العبوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Giochino",
          "ar": "العبوا"
        }
      ]
    }
  },
  {
    "it": "Guardare",
    "ar": "يتفرج / ينظر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Guardo",
        "ar": "بتفرج"
      },
      {
        "person": "Tu (أنت)",
        "form": "Guardi",
        "ar": "بتتفرج"
      },
      {
        "person": "Lui (هو)",
        "form": "Guarda",
        "ar": "بيتفرج"
      },
      {
        "person": "Lei (هي)",
        "form": "Guarda",
        "ar": "بتتفرج"
      },
      {
        "person": "Noi (نحن)",
        "form": "Guardiamo",
        "ar": "بنتفرج"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Guardate",
        "ar": "بتتفرجوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Guardano",
        "ar": "بيتفرجوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho guardato",
          "ar": "اتفرجت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai guardato",
          "ar": "اتفرجت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha guardato",
          "ar": "اتفرج"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha guardato",
          "ar": "اتفرجت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo guardato",
          "ar": "اتفرجنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete guardato",
          "ar": "اتفرجتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno guardato",
          "ar": "اتفرجوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Guardavo",
          "ar": "كنت بتفرج"
        },
        {
          "person": "Tu (أنت)",
          "form": "Guardavi",
          "ar": "كنت بتتفرج"
        },
        {
          "person": "Lui (هو)",
          "form": "Guardava",
          "ar": "كان بيتفرج"
        },
        {
          "person": "Lei (هي)",
          "form": "Guardava",
          "ar": "كانت بتتفرج"
        },
        {
          "person": "Noi (نحن)",
          "form": "Guardavamo",
          "ar": "كنا بنتفرج"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Guardavate",
          "ar": "كنتوا بتتفرجوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Guardavano",
          "ar": "كانوا بيتفرجوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Guarda",
          "ar": "اتفرج"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Guardi",
          "ar": "اتفرج"
        },
        {
          "person": "Noi (نحن)",
          "form": "Guardiamo",
          "ar": "يلا نتفرج"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Guardate",
          "ar": "اتفرجوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Guardino",
          "ar": "اتفرجوا"
        }
      ]
    }
  },
  {
    "it": "Incontrare",
    "ar": "يقابل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Incontro",
        "ar": "بقابل"
      },
      {
        "person": "Tu (أنت)",
        "form": "Incontri",
        "ar": "بتقابل"
      },
      {
        "person": "Lui (هو)",
        "form": "Incontra",
        "ar": "بيقابل"
      },
      {
        "person": "Lei (هي)",
        "form": "Incontra",
        "ar": "بتقابل"
      },
      {
        "person": "Noi (نحن)",
        "form": "Incontriamo",
        "ar": "بنقابل"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Incontrate",
        "ar": "بتقابلوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Incontrano",
        "ar": "بيقابلوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho incontrato",
          "ar": "قابلت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai incontrato",
          "ar": "قابلت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha incontrato",
          "ar": "قابل"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha incontrato",
          "ar": "قابلت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo incontrato",
          "ar": "قابلنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete incontrato",
          "ar": "قابلتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno incontrato",
          "ar": "قابلوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Incontravo",
          "ar": "كنت بقابل"
        },
        {
          "person": "Tu (أنت)",
          "form": "Incontravi",
          "ar": "كنت بتقابل"
        },
        {
          "person": "Lui (هو)",
          "form": "Incontrava",
          "ar": "كان بيقابل"
        },
        {
          "person": "Lei (هي)",
          "form": "Incontrava",
          "ar": "كانت بتقابل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Incontravamo",
          "ar": "كنا بنقابل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Incontravate",
          "ar": "كنتوا بتقابلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Incontravano",
          "ar": "كانوا بيقابلوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Incontra",
          "ar": "قابل"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Incontri",
          "ar": "قابل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Incontriamo",
          "ar": "يلا نقابل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Incontrate",
          "ar": "قابلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Incontrino",
          "ar": "قابلوا"
        }
      ]
    }
  },
  {
    "it": "Lavorare",
    "ar": "يشتغل / يعمل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Lavoro",
        "ar": "بشتغل"
      },
      {
        "person": "Tu (أنت)",
        "form": "Lavori",
        "ar": "بتشتغل"
      },
      {
        "person": "Lui (هو)",
        "form": "Lavora",
        "ar": "بيشتغل"
      },
      {
        "person": "Lei (هي)",
        "form": "Lavora",
        "ar": "بتشتغل"
      },
      {
        "person": "Noi (نحن)",
        "form": "Lavoriamo",
        "ar": "بنشتغل"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Lavorate",
        "ar": "بتشتغلوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Lavorano",
        "ar": "بيشتغلوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho lavorato",
          "ar": "اشتغلت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai lavorato",
          "ar": "اشتغلت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha lavorato",
          "ar": "اشتغل"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha lavorato",
          "ar": "اشتغلت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo lavorato",
          "ar": "اشتغلنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete lavorato",
          "ar": "اشتغلتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno lavorato",
          "ar": "اشتغلوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Lavoravo",
          "ar": "كنت بشتغل"
        },
        {
          "person": "Tu (أنت)",
          "form": "Lavoravi",
          "ar": "كنت بتشتغل"
        },
        {
          "person": "Lui (هو)",
          "form": "Lavorava",
          "ar": "كان بيشتغل"
        },
        {
          "person": "Lei (هي)",
          "form": "Lavorava",
          "ar": "كانت بتشتغل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Lavoravamo",
          "ar": "كنا بنشتغل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Lavoravate",
          "ar": "كنتوا بتشتغلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Lavoravano",
          "ar": "كانوا بيشتغلوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Lavora",
          "ar": "اشتغل"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Lavori",
          "ar": "اشتغل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Lavoriamo",
          "ar": "يلا نشتغل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Lavorate",
          "ar": "اشتغلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Lavorino",
          "ar": "اشتغلوا"
        }
      ]
    }
  },
  {
    "it": "Mangiare",
    "ar": "يأكل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mangio",
        "ar": "بأكل"
      },
      {
        "person": "Tu (أنت)",
        "form": "Mangi",
        "ar": "بتأكل"
      },
      {
        "person": "Lui (هو)",
        "form": "Mangia",
        "ar": "بيأكل"
      },
      {
        "person": "Lei (هي)",
        "form": "Mangia",
        "ar": "بتأكل"
      },
      {
        "person": "Noi (نحن)",
        "form": "Mangiamo",
        "ar": "بنأكل"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Mangiate",
        "ar": "بتأكلوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Mangiano",
        "ar": "بيأكلوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho mangiato",
          "ar": "أكلت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai mangiato",
          "ar": "أكلت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha mangiato",
          "ar": "أكل"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha mangiato",
          "ar": "أكلت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo mangiato",
          "ar": "أكلنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete mangiato",
          "ar": "أكلتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno mangiato",
          "ar": "أكلوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mangiavo",
          "ar": "كنت بأكل"
        },
        {
          "person": "Tu (أنت)",
          "form": "Mangiavi",
          "ar": "كنت بتأكل"
        },
        {
          "person": "Lui (هو)",
          "form": "Mangiava",
          "ar": "كان بيأكل"
        },
        {
          "person": "Lei (هي)",
          "form": "Mangiava",
          "ar": "كانت بتأكل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Mangiavamo",
          "ar": "كنا بنأكل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Mangiavate",
          "ar": "كنتوا بتأكلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Mangiavano",
          "ar": "كانوا بيأكلوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Mangia",
          "ar": "كل"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Mangi",
          "ar": "كل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Mangiamo",
          "ar": "يلا ناكل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Mangiate",
          "ar": "كلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Mangino",
          "ar": "كلوا"
        }
      ]
    }
  },
  {
    "it": "Pagare",
    "ar": "يدفع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Pago",
        "ar": "بدفع"
      },
      {
        "person": "Tu (أنت)",
        "form": "Paghi",
        "ar": "بتدفع"
      },
      {
        "person": "Lui (هو)",
        "form": "Paga",
        "ar": "بيدفع"
      },
      {
        "person": "Lei (هي)",
        "form": "Paga",
        "ar": "بتدفع"
      },
      {
        "person": "Noi (نحن)",
        "form": "Paghiamo",
        "ar": "بندفع"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Pagate",
        "ar": "بتدفعوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Pagano",
        "ar": "بيدفعوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho pagato",
          "ar": "دفعت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai pagato",
          "ar": "دفعت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha pagato",
          "ar": "دفع"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha pagato",
          "ar": "دفعت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo pagato",
          "ar": "دفعنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete pagato",
          "ar": "دفعتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno pagato",
          "ar": "دفعوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Pagavo",
          "ar": "كنت بدفع"
        },
        {
          "person": "Tu (أنت)",
          "form": "Pagavi",
          "ar": "كنت بتدفع"
        },
        {
          "person": "Lui (هو)",
          "form": "Pagava",
          "ar": "كان بيدفع"
        },
        {
          "person": "Lei (هي)",
          "form": "Pagava",
          "ar": "كانت بتدفع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Pagavamo",
          "ar": "كنا بندفع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pagavate",
          "ar": "كنتوا بتدفعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Pagavano",
          "ar": "كانوا بيدفعوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Paga",
          "ar": "ادفع"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Paghi",
          "ar": "ادفع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Paghiamo",
          "ar": "يلا ندفع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pagate",
          "ar": "ادفعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Paghino",
          "ar": "ادفعوا"
        }
      ]
    }
  },
  {
    "it": "Portare",
    "ar": "يجيب / يحمل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Porto",
        "ar": "بجيب"
      },
      {
        "person": "Tu (أنت)",
        "form": "Porti",
        "ar": "بتجيب"
      },
      {
        "person": "Lui (هو)",
        "form": "Porta",
        "ar": "بيجيب"
      },
      {
        "person": "Lei (هي)",
        "form": "Porta",
        "ar": "بتجيب"
      },
      {
        "person": "Noi (نحن)",
        "form": "Portiamo",
        "ar": "بنجيب"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Portate",
        "ar": "بتجيبوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Portano",
        "ar": "بيجيبوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho portato",
          "ar": "جبت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai portato",
          "ar": "جبت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha portato",
          "ar": "جاب"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha portato",
          "ar": "جابت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo portato",
          "ar": "جبنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete portato",
          "ar": "جبتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno portato",
          "ar": "جابوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Portavo",
          "ar": "كنت بجيب"
        },
        {
          "person": "Tu (أنت)",
          "form": "Portavi",
          "ar": "كنت بتجيب"
        },
        {
          "person": "Lui (هو)",
          "form": "Portava",
          "ar": "كان بيجيب"
        },
        {
          "person": "Lei (هي)",
          "form": "Portava",
          "ar": "كانت بتجيب"
        },
        {
          "person": "Noi (نحن)",
          "form": "Portavamo",
          "ar": "كنا بنجيب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Portavate",
          "ar": "كنتوا بتجيبوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Portavano",
          "ar": "كانوا بيجيبوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Porta",
          "ar": "هات"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Porti",
          "ar": "هات"
        },
        {
          "person": "Noi (نحن)",
          "form": "Portiamo",
          "ar": "يلا نجيب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Portate",
          "ar": "هاتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Portino",
          "ar": "هاتوا"
        }
      ]
    }
  },
  {
    "it": "Restare",
    "ar": "يفضل / يبقى",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Resto",
        "ar": "بفضل"
      },
      {
        "person": "Tu (أنت)",
        "form": "Resti",
        "ar": "بتفضل"
      },
      {
        "person": "Lui (هو)",
        "form": "Resta",
        "ar": "بيفضل"
      },
      {
        "person": "Lei (هي)",
        "form": "Resta",
        "ar": "بتفضل"
      },
      {
        "person": "Noi (نحن)",
        "form": "Restiamo",
        "ar": "بنفضل"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Restate",
        "ar": "بتفضلوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Restano",
        "ar": "بيفضلوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono restato/a",
          "ar": "فضلت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei restato/a",
          "ar": "فضلت"
        },
        {
          "person": "Lui (هو)",
          "form": "È restato",
          "ar": "فضل"
        },
        {
          "person": "Lei (هي)",
          "form": "È restata",
          "ar": "فضلت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo restati/e",
          "ar": "فضلنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete restati/e",
          "ar": "فضلتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono restati/e",
          "ar": "فضلوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Restavo",
          "ar": "كنت بفضل"
        },
        {
          "person": "Tu (أنت)",
          "form": "Restavi",
          "ar": "كنت بتفضل"
        },
        {
          "person": "Lui (هو)",
          "form": "Restava",
          "ar": "كان بيفضل"
        },
        {
          "person": "Lei (هي)",
          "form": "Restava",
          "ar": "كانت بتفضل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Restavamo",
          "ar": "كنا بنفضل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Restavate",
          "ar": "كنتوا بتفضلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Restavano",
          "ar": "كانوا بيفضلوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Resta",
          "ar": "افضل"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Resti",
          "ar": "افضل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Restiamo",
          "ar": "يلا نفضل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Restate",
          "ar": "افضلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Restino",
          "ar": "افضلوا"
        }
      ]
    }
  },
  {
    "it": "Ringraziare",
    "ar": "يشكر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Ringrazio",
        "ar": "بشكر"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ringrazi",
        "ar": "بتشكر"
      },
      {
        "person": "Lui (هو)",
        "form": "Ringrazia",
        "ar": "بيشكر"
      },
      {
        "person": "Lei (هي)",
        "form": "Ringrazia",
        "ar": "بتشكر"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ringraziamo",
        "ar": "بنشكر"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Ringraziate",
        "ar": "بتشكروا"
      },
      {
        "person": "Loro (هم)",
        "form": "Ringraziano",
        "ar": "بيشكروا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho ringraziato",
          "ar": "شكرت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai ringraziato",
          "ar": "شكرت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha ringraziato",
          "ar": "شكر"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha ringraziato",
          "ar": "شكرت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo ringraziato",
          "ar": "شكرنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete ringraziato",
          "ar": "شكرتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno ringraziato",
          "ar": "شكروا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ringraziavo",
          "ar": "كنت بشكر"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ringraziavi",
          "ar": "كنت بتشكر"
        },
        {
          "person": "Lui (هو)",
          "form": "Ringraziava",
          "ar": "كان بيشكر"
        },
        {
          "person": "Lei (هي)",
          "form": "Ringraziava",
          "ar": "كانت بتشكر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ringraziavamo",
          "ar": "كنا بنشكر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ringraziavate",
          "ar": "كنتوا بتشكروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Ringraziavano",
          "ar": "كانوا بيشكروا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Ringrazia",
          "ar": "اشكر"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Ringrazi",
          "ar": "اشكر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ringraziamo",
          "ar": "يلا نشكر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ringraziate",
          "ar": "اشكروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Ringrazino",
          "ar": "اشكروا"
        }
      ]
    }
  },
  {
    "it": "Salutare",
    "ar": "يسلم على",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Saluto",
        "ar": "بسلم على"
      },
      {
        "person": "Tu (أنت)",
        "form": "Saluti",
        "ar": "بتسلم على"
      },
      {
        "person": "Lui (هو)",
        "form": "Saluta",
        "ar": "بيسلم على"
      },
      {
        "person": "Lei (هي)",
        "form": "Saluta",
        "ar": "بتسلم على"
      },
      {
        "person": "Noi (نحن)",
        "form": "Salutiamo",
        "ar": "بنسلم على"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Salutate",
        "ar": "بتسلموا على"
      },
      {
        "person": "Loro (هم)",
        "form": "Salutano",
        "ar": "بيسلموا على"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho salutato",
          "ar": "سلمت على"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai salutato",
          "ar": "سلمت على"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha salutato",
          "ar": "سلم على"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha salutato",
          "ar": "سلمت على"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo salutato",
          "ar": "سلمنا على"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete salutato",
          "ar": "سلمتوا على"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno salutato",
          "ar": "سلموا على"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Salutavo",
          "ar": "كنت بسلم على"
        },
        {
          "person": "Tu (أنت)",
          "form": "Salutavi",
          "ar": "كنت بتسلم على"
        },
        {
          "person": "Lui (هو)",
          "form": "Salutava",
          "ar": "كان بيسلم على"
        },
        {
          "person": "Lei (هي)",
          "form": "Salutava",
          "ar": "كانت بتسلم على"
        },
        {
          "person": "Noi (نحن)",
          "form": "Salutavamo",
          "ar": "كنا بنسلم على"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Salutavate",
          "ar": "كنتوا بتسلموا على"
        },
        {
          "person": "Loro (هم)",
          "form": "Salutavano",
          "ar": "كانوا بيسلموا على"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Saluta",
          "ar": "سلم على"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Saluti",
          "ar": "سلم على"
        },
        {
          "person": "Noi (نحن)",
          "form": "Salutiamo",
          "ar": "يلا نسلم على"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Salutate",
          "ar": "سلموا على"
        },
        {
          "person": "Loro (هم)",
          "form": "Salutino",
          "ar": "سلموا على"
        }
      ]
    }
  },
  {
    "it": "Studiare",
    "ar": "يدرس",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Studio",
        "ar": "بدرس"
      },
      {
        "person": "Tu (أنت)",
        "form": "Studi",
        "ar": "بتدرس"
      },
      {
        "person": "Lui (هو)",
        "form": "Studia",
        "ar": "بيدرس"
      },
      {
        "person": "Lei (هي)",
        "form": "Studia",
        "ar": "بتدرس"
      },
      {
        "person": "Noi (نحن)",
        "form": "Studiamo",
        "ar": "بندرس"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Studiate",
        "ar": "بتدرسوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Studiano",
        "ar": "بيدرسوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho studiato",
          "ar": "درست"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai studiato",
          "ar": "درست"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha studiato",
          "ar": "درس"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha studiato",
          "ar": "درست"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo studiato",
          "ar": "درسنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete studiato",
          "ar": "درستوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno studiato",
          "ar": "درسوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Studiavo",
          "ar": "كنت بدرس"
        },
        {
          "person": "Tu (أنت)",
          "form": "Studiavi",
          "ar": "كنت بتدرس"
        },
        {
          "person": "Lui (هو)",
          "form": "Studiava",
          "ar": "كان بيدرس"
        },
        {
          "person": "Lei (هي)",
          "form": "Studiava",
          "ar": "كانت بتدرس"
        },
        {
          "person": "Noi (نحن)",
          "form": "Studiavamo",
          "ar": "كنا بندرس"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Studiavate",
          "ar": "كنتوا بتدرسوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Studiavano",
          "ar": "كانوا بيدرسوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Studia",
          "ar": "ادرس"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Studi",
          "ar": "ادرس"
        },
        {
          "person": "Noi (نحن)",
          "form": "Studiamo",
          "ar": "يلا ندرس"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Studiate",
          "ar": "ادرسوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Studino",
          "ar": "ادرسوا"
        }
      ]
    }
  },
  {
    "it": "Telefonare",
    "ar": "يتصل تليفونيا",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Telefono",
        "ar": "بتصل تليفونيا"
      },
      {
        "person": "Tu (أنت)",
        "form": "Telefoni",
        "ar": "بتتصل تليفونيا"
      },
      {
        "person": "Lui (هو)",
        "form": "Telefona",
        "ar": "بيتصل تليفونيا"
      },
      {
        "person": "Lei (هي)",
        "form": "Telefona",
        "ar": "بتتصل تليفونيا"
      },
      {
        "person": "Noi (نحن)",
        "form": "Telefoniamo",
        "ar": "بنتصل تليفونيا"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Telefonate",
        "ar": "بتتصلوا تليفونيا"
      },
      {
        "person": "Loro (هم)",
        "form": "Telefonano",
        "ar": "بيتصلوا تليفونيا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho telefonato",
          "ar": "اتصلت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai telefonato",
          "ar": "اتصلت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha telefonato",
          "ar": "اتصل"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha telefonato",
          "ar": "اتصلت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo telefonato",
          "ar": "اتصلنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete telefonato",
          "ar": "اتصلتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno telefonato",
          "ar": "اتصلوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Telefonavo",
          "ar": "كنت بتصل تليفونيا"
        },
        {
          "person": "Tu (أنت)",
          "form": "Telefonavi",
          "ar": "كنت بتتصل تليفونيا"
        },
        {
          "person": "Lui (هو)",
          "form": "Telefonava",
          "ar": "كان بيتصل تليفونيا"
        },
        {
          "person": "Lei (هي)",
          "form": "Telefonava",
          "ar": "كانت بتتصل تليفونيا"
        },
        {
          "person": "Noi (نحن)",
          "form": "Telefonavamo",
          "ar": "كنا بنتصل تليفونيا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Telefonavate",
          "ar": "كنتوا بتتصلوا تليفونيا"
        },
        {
          "person": "Loro (هم)",
          "form": "Telefonavano",
          "ar": "كانوا بيتصلوا تليفونيا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Telefona",
          "ar": "اتصل"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Telefoni",
          "ar": "اتصل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Telefoniamo",
          "ar": "يلا نتصل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Telefonate",
          "ar": "اتصلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Telefonino",
          "ar": "اتصلوا"
        }
      ]
    }
  },
  {
    "it": "Tornare",
    "ar": "يرجع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Torno",
        "ar": "برجع"
      },
      {
        "person": "Tu (أنت)",
        "form": "Torni",
        "ar": "بترجع"
      },
      {
        "person": "Lui (هو)",
        "form": "Torna",
        "ar": "بيرجع"
      },
      {
        "person": "Lei (هي)",
        "form": "Torna",
        "ar": "بترجع"
      },
      {
        "person": "Noi (نحن)",
        "form": "Torniamo",
        "ar": "بنرجع"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Tornate",
        "ar": "بترجعوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Tornano",
        "ar": "بيرجعوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono tornato/a",
          "ar": "رجعت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei tornato/a",
          "ar": "رجعت"
        },
        {
          "person": "Lui (هو)",
          "form": "È tornato",
          "ar": "رجع"
        },
        {
          "person": "Lei (هي)",
          "form": "È tornata",
          "ar": "رجعت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo tornati/e",
          "ar": "رجعنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete tornati/e",
          "ar": "رجعتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono tornati/e",
          "ar": "رجعوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Tornavo",
          "ar": "كنت برجع"
        },
        {
          "person": "Tu (أنت)",
          "form": "Tornavi",
          "ar": "كنت بترجع"
        },
        {
          "person": "Lui (هو)",
          "form": "Tornava",
          "ar": "كان بيرجع"
        },
        {
          "person": "Lei (هي)",
          "form": "Tornava",
          "ar": "كانت بترجع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Tornavamo",
          "ar": "كنا بنرجع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Tornavate",
          "ar": "كنتوا بترجعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Tornavano",
          "ar": "كانوا بيرجعوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Torna",
          "ar": "ارجع"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Torni",
          "ar": "ارجع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Torniamo",
          "ar": "يلا نرجع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Tornate",
          "ar": "ارجعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Tornino",
          "ar": "ارجعوا"
        }
      ]
    }
  },
  {
    "it": "Trovare",
    "ar": "يلاقي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Trovo",
        "ar": "بلاقي"
      },
      {
        "person": "Tu (أنت)",
        "form": "Trovi",
        "ar": "بتلاقي"
      },
      {
        "person": "Lui (هو)",
        "form": "Trova",
        "ar": "بيلاقي"
      },
      {
        "person": "Lei (هي)",
        "form": "Trova",
        "ar": "بتلاقي"
      },
      {
        "person": "Noi (نحن)",
        "form": "Troviamo",
        "ar": "بنلاقي"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Trovate",
        "ar": "بتلاقيوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Trovano",
        "ar": "بيلاقيوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho trovato",
          "ar": "لقيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai trovato",
          "ar": "لقيت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha trovato",
          "ar": "لقى"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha trovato",
          "ar": "لقت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo trovato",
          "ar": "لقينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete trovato",
          "ar": "لقيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno trovato",
          "ar": "لقوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Trovavo",
          "ar": "كنت بلاقي"
        },
        {
          "person": "Tu (أنت)",
          "form": "Trovavi",
          "ar": "كنت بتلاقي"
        },
        {
          "person": "Lui (هو)",
          "form": "Trovava",
          "ar": "كان بيلاقي"
        },
        {
          "person": "Lei (هي)",
          "form": "Trovava",
          "ar": "كانت بتلاقي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Trovavamo",
          "ar": "كنا بنلاقي"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Trovavate",
          "ar": "كنتوا بتلاقيوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Trovavano",
          "ar": "كانوا بيلاقيوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Trova",
          "ar": "لاقي"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Trovi",
          "ar": "لاقي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Troviamo",
          "ar": "يلا نلاقي"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Trovate",
          "ar": "لاقوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Trovino",
          "ar": "لاقوا"
        }
      ]
    }
  },
  {
    "it": "Viaggiare",
    "ar": "يسافر (يرحل)",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Viaggio",
        "ar": "بسافر (يرحل)"
      },
      {
        "person": "Tu (أنت)",
        "form": "Viaggi",
        "ar": "بتسافر (يرحل)"
      },
      {
        "person": "Lui (هو)",
        "form": "Viaggia",
        "ar": "بيسافر (يرحل)"
      },
      {
        "person": "Lei (هي)",
        "form": "Viaggia",
        "ar": "بتسافر (يرحل)"
      },
      {
        "person": "Noi (نحن)",
        "form": "Viaggiamo",
        "ar": "بنسافر (يرحل)"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Viaggiate",
        "ar": "بتسافروا (يرحل)"
      },
      {
        "person": "Loro (هم)",
        "form": "Viaggiano",
        "ar": "بيسافروا (يرحل)"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho viaggiato",
          "ar": "سافرت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai viaggiato",
          "ar": "سافرت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha viaggiato",
          "ar": "سافر"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha viaggiato",
          "ar": "سافرت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo viaggiato",
          "ar": "سافرنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete viaggiato",
          "ar": "سافرتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno viaggiato",
          "ar": "سافروا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Viaggiavo",
          "ar": "كنت بسافر (يرحل)"
        },
        {
          "person": "Tu (أنت)",
          "form": "Viaggiavi",
          "ar": "كنت بتسافر (يرحل)"
        },
        {
          "person": "Lui (هو)",
          "form": "Viaggiava",
          "ar": "كان بيسافر (يرحل)"
        },
        {
          "person": "Lei (هي)",
          "form": "Viaggiava",
          "ar": "كانت بتسافر (يرحل)"
        },
        {
          "person": "Noi (نحن)",
          "form": "Viaggiavamo",
          "ar": "كنا بنسافر (يرحل)"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Viaggiavate",
          "ar": "كنتوا بتسافروا (يرحل)"
        },
        {
          "person": "Loro (هم)",
          "form": "Viaggiavano",
          "ar": "كانوا بيسافروا (يرحل)"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Viaggia",
          "ar": "سافر"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Viaggi",
          "ar": "سافر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Viaggiamo",
          "ar": "يلا نسافر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Viaggiate",
          "ar": "سافروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Viaggino",
          "ar": "سافروا"
        }
      ]
    }
  },
  {
    "it": "Fare",
    "ar": "يعمل / يصنع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Faccio",
        "ar": "بعمل"
      },
      {
        "person": "Tu (أنت)",
        "form": "Fai",
        "ar": "بتعمل"
      },
      {
        "person": "Lui (هو)",
        "form": "Fa",
        "ar": "بيعمل"
      },
      {
        "person": "Lei (هي)",
        "form": "Fa",
        "ar": "بتعمل"
      },
      {
        "person": "Noi (نحن)",
        "form": "Facciamo",
        "ar": "بنعمل"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Fate",
        "ar": "بتعملوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Fanno",
        "ar": "بيعملوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho fatto",
          "ar": "عملت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai fatto",
          "ar": "عملت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha fatto",
          "ar": "عمل"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha fatto",
          "ar": "عملت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo fatto",
          "ar": "عملنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete fatto",
          "ar": "عملتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno fatto",
          "ar": "عملوا"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Facevo",
          "ar": "كنت بعمل"
        },
        {
          "person": "Tu (أنت)",
          "form": "Facevi",
          "ar": "كنت بتعمل"
        },
        {
          "person": "Lui (هو)",
          "form": "Faceva",
          "ar": "كان بيعمل"
        },
        {
          "person": "Lei (هي)",
          "form": "Faceva",
          "ar": "كانت بتعمل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Facevamo",
          "ar": "كنا بنعمل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Facevate",
          "ar": "كنتوا بتعملوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Facevano",
          "ar": "كانوا بيعملوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Fa' / Fai",
          "ar": "اعمل"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Faccia",
          "ar": "اعمل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Facciamo",
          "ar": "يلا نعمل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Fate",
          "ar": "اعملوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Facciano",
          "ar": "اعملوا"
        }
      ]
    }
  },
  {
    "it": "Dare",
    "ar": "يعطي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Do",
        "ar": "بعطي"
      },
      {
        "person": "Tu (أنت)",
        "form": "Dai",
        "ar": "بتعطي"
      },
      {
        "person": "Lui (هو)",
        "form": "Dà",
        "ar": "بيعطي"
      },
      {
        "person": "Lei (هي)",
        "form": "Dà",
        "ar": "بتعطي"
      },
      {
        "person": "Noi (نحن)",
        "form": "Diamo",
        "ar": "بنعطي"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Date",
        "ar": "بتعطيوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Danno",
        "ar": "بيعطيوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho dato",
          "ar": "اديت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai dato",
          "ar": "اديت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha dato",
          "ar": "ادى"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha dato",
          "ar": "ادت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo dato",
          "ar": "اديـنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete dato",
          "ar": "اديتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno dato",
          "ar": "ادوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Davo",
          "ar": "كنت بعطي"
        },
        {
          "person": "Tu (أنت)",
          "form": "Davi",
          "ar": "كنت بتعطي"
        },
        {
          "person": "Lui (هو)",
          "form": "Dava",
          "ar": "كان بيعطي"
        },
        {
          "person": "Lei (هي)",
          "form": "Dava",
          "ar": "كانت بتعطي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Davamo",
          "ar": "كنا بنعطي"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Davate",
          "ar": "كنتوا بتعطيوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Davano",
          "ar": "كانوا بيعطيوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Da' / Dai",
          "ar": "ادّي"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Dia",
          "ar": "ادّي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Diamo",
          "ar": "يلا نديّ"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Date",
          "ar": "ادّوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Diano",
          "ar": "ادّوا"
        }
      ]
    }
  },
  {
    "it": "Funzionare",
    "ar": "يشتغل (عن جهاز/آلة)",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Funziono",
        "ar": "بشتغل (عن جهاز"
      },
      {
        "person": "Tu (أنت)",
        "form": "Funzioni",
        "ar": "بتشتغل (عن جهاز"
      },
      {
        "person": "Lui (هو)",
        "form": "Funziona",
        "ar": "بيشتغل (عن جهاز"
      },
      {
        "person": "Lei (هي)",
        "form": "Funziona",
        "ar": "بتشتغل (عن جهاز"
      },
      {
        "person": "Noi (نحن)",
        "form": "Funzioniamo",
        "ar": "بنشتغل (عن جهاز"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Funzionate",
        "ar": "بتشتغلوا (عن جهاز"
      },
      {
        "person": "Loro (هم)",
        "form": "Funzionano",
        "ar": "بيشتغلوا (عن جهاز"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho funzionato",
          "ar": "اشتغلت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai funzionato",
          "ar": "اشتغلت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha funzionato",
          "ar": "اشتغل"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha funzionato",
          "ar": "اشتغلت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo funzionato",
          "ar": "اشتغلنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete funzionato",
          "ar": "اشتغلتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno funzionato",
          "ar": "اشتغلوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Funzionavo",
          "ar": "كنت بشتغل (عن جهاز"
        },
        {
          "person": "Tu (أنت)",
          "form": "Funzionavi",
          "ar": "كنت بتشتغل (عن جهاز"
        },
        {
          "person": "Lui (هو)",
          "form": "Funzionava",
          "ar": "كان بيشتغل (عن جهاز"
        },
        {
          "person": "Lei (هي)",
          "form": "Funzionava",
          "ar": "كانت بتشتغل (عن جهاز"
        },
        {
          "person": "Noi (نحن)",
          "form": "Funzionavamo",
          "ar": "كنا بنشتغل (عن جهاز"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Funzionavate",
          "ar": "كنتوا بتشتغلوا (عن جهاز"
        },
        {
          "person": "Loro (هم)",
          "form": "Funzionavano",
          "ar": "كانوا بيشتغلوا (عن جهاز"
        }
      ]
    },
    "imperativo": {
      "note": "فعل بيتقال عن الأجهزة/الآلات، فصيغة الأمر موجودة نحويًا بس غير بتستعمل في الكلام العادي كثير",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Funziona",
          "ar": "اشتغل"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Funzioni",
          "ar": "اشتغل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Funzioniamo",
          "ar": "يلا نشغّله"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Funzionate",
          "ar": "اشتغلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Funzionino",
          "ar": "اشتغلوا"
        }
      ]
    }
  },
  {
    "it": "Parlare",
    "ar": "يتكلم",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Parlo",
        "ar": "بتكلم"
      },
      {
        "person": "Tu (أنت)",
        "form": "Parli",
        "ar": "بتتكلم"
      },
      {
        "person": "Lui (هو)",
        "form": "Parla",
        "ar": "بيتكلم"
      },
      {
        "person": "Lei (هي)",
        "form": "Parla",
        "ar": "بتتكلم"
      },
      {
        "person": "Noi (نحن)",
        "form": "Parliamo",
        "ar": "بنتكلم"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Parlate",
        "ar": "بتتكلموا"
      },
      {
        "person": "Loro (هم)",
        "form": "Parlano",
        "ar": "بيتكلموا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho parlato",
          "ar": "اتكلمت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai parlato",
          "ar": "اتكلمت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha parlato",
          "ar": "اتكلم"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha parlato",
          "ar": "اتكلمت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo parlato",
          "ar": "اتكلمنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete parlato",
          "ar": "اتكلمتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno parlato",
          "ar": "اتكلموا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Parlavo",
          "ar": "كنت بتكلم"
        },
        {
          "person": "Tu (أنت)",
          "form": "Parlavi",
          "ar": "كنت بتتكلم"
        },
        {
          "person": "Lui (هو)",
          "form": "Parlava",
          "ar": "كان بيتكلم"
        },
        {
          "person": "Lei (هي)",
          "form": "Parlava",
          "ar": "كانت بتتكلم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Parlavamo",
          "ar": "كنا بنتكلم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Parlavate",
          "ar": "كنتوا بتتكلموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Parlavano",
          "ar": "كانوا بيتكلموا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Parla",
          "ar": "اتكلم"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Parli",
          "ar": "اتكلم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Parliamo",
          "ar": "يلا نتكلم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Parlate",
          "ar": "اتكلموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Parlino",
          "ar": "اتكلموا"
        }
      ]
    }
  },
  {
    "it": "Passeggiare",
    "ar": "يتمشى",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Passeggio",
        "ar": "بتمشى"
      },
      {
        "person": "Tu (أنت)",
        "form": "Passeggi",
        "ar": "بتتمشى"
      },
      {
        "person": "Lui (هو)",
        "form": "Passeggia",
        "ar": "بيتمشى"
      },
      {
        "person": "Lei (هي)",
        "form": "Passeggia",
        "ar": "بتتمشى"
      },
      {
        "person": "Noi (نحن)",
        "form": "Passeggiamo",
        "ar": "بنتمشى"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Passeggiate",
        "ar": "بتتمشىوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Passeggiano",
        "ar": "بيتمشىوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho passeggiato",
          "ar": "اتمشيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai passeggiato",
          "ar": "اتمشيت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha passeggiato",
          "ar": "اتمشى"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha passeggiato",
          "ar": "اتمشت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo passeggiato",
          "ar": "اتمشينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete passeggiato",
          "ar": "اتمشيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno passeggiato",
          "ar": "اتمشوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Passeggiavo",
          "ar": "كنت بتمشى"
        },
        {
          "person": "Tu (أنت)",
          "form": "Passeggiavi",
          "ar": "كنت بتتمشى"
        },
        {
          "person": "Lui (هو)",
          "form": "Passeggiava",
          "ar": "كان بيتمشى"
        },
        {
          "person": "Lei (هي)",
          "form": "Passeggiava",
          "ar": "كانت بتتمشى"
        },
        {
          "person": "Noi (نحن)",
          "form": "Passeggiavamo",
          "ar": "كنا بنتمشى"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Passeggiavate",
          "ar": "كنتوا بتتمشىوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Passeggiavano",
          "ar": "كانوا بيتمشىوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Passeggia",
          "ar": "اتمشى"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Passeggi",
          "ar": "اتمشى"
        },
        {
          "person": "Noi (نحن)",
          "form": "Passeggiamo",
          "ar": "يلا نتمشى"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Passeggiate",
          "ar": "اتمشوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Passeggino",
          "ar": "اتمشوا"
        }
      ]
    }
  },
  {
    "it": "Svegliarsi",
    "ar": "يصحى / يستيقظ",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi sveglio",
        "ar": "بصحى"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti svegli",
        "ar": "بتصحى"
      },
      {
        "person": "Lui (هو)",
        "form": "Si sveglia",
        "ar": "بيصحى"
      },
      {
        "person": "Lei (هي)",
        "form": "Si sveglia",
        "ar": "بتصحى"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci svegliamo",
        "ar": "بنصحى"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi svegliate",
        "ar": "بتصحىوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si svegliano",
        "ar": "بيصحىوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono svegliato/a",
          "ar": "صحيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei svegliato/a",
          "ar": "صحيت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è svegliato",
          "ar": "صحي"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è svegliata",
          "ar": "صحيت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo svegliati/e",
          "ar": "صحينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete svegliati/e",
          "ar": "صحيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono svegliati/e",
          "ar": "صحيوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi svegliavo",
          "ar": "كنت بصحى"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti svegliavi",
          "ar": "كنت بتصحى"
        },
        {
          "person": "Lui (هو)",
          "form": "Si svegliava",
          "ar": "كان بيصحى"
        },
        {
          "person": "Lei (هي)",
          "form": "Si svegliava",
          "ar": "كانت بتصحى"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci svegliavamo",
          "ar": "كنا بنصحى"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi svegliavate",
          "ar": "كنتوا بتصحىوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si svegliavano",
          "ar": "كانوا بيصحىوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Svegliati",
          "ar": "اصحى"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si svegli",
          "ar": "اصحى"
        },
        {
          "person": "Noi (نحن)",
          "form": "Svegliamoci",
          "ar": "يلا نصحى"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Svegliatevi",
          "ar": "اصحوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sveglino",
          "ar": "اصحوا"
        }
      ]
    },
    "reflexive": true,
    "group": "are"
  },
  {
    "it": "Credere",
    "ar": "يصدق / يعتقد",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Credo",
        "ar": "بصدق"
      },
      {
        "person": "Tu (أنت)",
        "form": "Credi",
        "ar": "بتصدق"
      },
      {
        "person": "Lui (هو)",
        "form": "Crede",
        "ar": "بيصدق"
      },
      {
        "person": "Lei (هي)",
        "form": "Crede",
        "ar": "بتصدق"
      },
      {
        "person": "Noi (نحن)",
        "form": "Crediamo",
        "ar": "بنصدق"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Credete",
        "ar": "بتصدقوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Credono",
        "ar": "بيصدقوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho creduto",
          "ar": "صدقت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai creduto",
          "ar": "صدقت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha creduto",
          "ar": "صدق"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha creduto",
          "ar": "صدقت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo creduto",
          "ar": "صدقنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete creduto",
          "ar": "صدقتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno creduto",
          "ar": "صدقوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Credevo",
          "ar": "كنت بصدق"
        },
        {
          "person": "Tu (أنت)",
          "form": "Credevi",
          "ar": "كنت بتصدق"
        },
        {
          "person": "Lui (هو)",
          "form": "Credeva",
          "ar": "كان بيصدق"
        },
        {
          "person": "Lei (هي)",
          "form": "Credeva",
          "ar": "كانت بتصدق"
        },
        {
          "person": "Noi (نحن)",
          "form": "Credevamo",
          "ar": "كنا بنصدق"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Credevate",
          "ar": "كنتوا بتصدقوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Credevano",
          "ar": "كانوا بيصدقوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Credi",
          "ar": "صدق"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Creda",
          "ar": "صدق"
        },
        {
          "person": "Noi (نحن)",
          "form": "Crediamo",
          "ar": "يلا نصدق"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Credete",
          "ar": "صدقوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Credano",
          "ar": "صدقوا"
        }
      ]
    }
  },
  {
    "it": "Leggere",
    "ar": "يقرأ",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Leggo",
        "ar": "بقرأ"
      },
      {
        "person": "Tu (أنت)",
        "form": "Leggi",
        "ar": "بتقرأ"
      },
      {
        "person": "Lui (هو)",
        "form": "Legge",
        "ar": "بيقرأ"
      },
      {
        "person": "Lei (هي)",
        "form": "Legge",
        "ar": "بتقرأ"
      },
      {
        "person": "Noi (نحن)",
        "form": "Leggiamo",
        "ar": "بنقرأ"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Leggete",
        "ar": "بتقرأوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Leggono",
        "ar": "بيقرأوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho letto",
          "ar": "قريت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai letto",
          "ar": "قريت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha letto",
          "ar": "قرا"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha letto",
          "ar": "قرت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo letto",
          "ar": "قرينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete letto",
          "ar": "قريتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno letto",
          "ar": "قروا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Leggevo",
          "ar": "كنت بقرأ"
        },
        {
          "person": "Tu (أنت)",
          "form": "Leggevi",
          "ar": "كنت بتقرأ"
        },
        {
          "person": "Lui (هو)",
          "form": "Leggeva",
          "ar": "كان بيقرأ"
        },
        {
          "person": "Lei (هي)",
          "form": "Leggeva",
          "ar": "كانت بتقرأ"
        },
        {
          "person": "Noi (نحن)",
          "form": "Leggevamo",
          "ar": "كنا بنقرأ"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Leggevate",
          "ar": "كنتوا بتقرأوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Leggevano",
          "ar": "كانوا بيقرأوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Leggi",
          "ar": "اقرا"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Legga",
          "ar": "اقرا"
        },
        {
          "person": "Noi (نحن)",
          "form": "Leggiamo",
          "ar": "يلا نقرا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Leggete",
          "ar": "اقروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Leggano",
          "ar": "اقروا"
        }
      ]
    }
  },
  {
    "it": "Prendere",
    "ar": "يأخذ",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Prendo",
        "ar": "بأخذ"
      },
      {
        "person": "Tu (أنت)",
        "form": "Prendi",
        "ar": "بتأخذ"
      },
      {
        "person": "Lui (هو)",
        "form": "Prende",
        "ar": "بيأخذ"
      },
      {
        "person": "Lei (هي)",
        "form": "Prende",
        "ar": "بتأخذ"
      },
      {
        "person": "Noi (نحن)",
        "form": "Prendiamo",
        "ar": "بنأخذ"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Prendete",
        "ar": "بتأخذوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Prendono",
        "ar": "بيأخذوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho preso",
          "ar": "اخدت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai preso",
          "ar": "اخدت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha preso",
          "ar": "اخد"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha preso",
          "ar": "اخدت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo preso",
          "ar": "اخدنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete preso",
          "ar": "اخدتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno preso",
          "ar": "اخدوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Prendevo",
          "ar": "كنت بأخذ"
        },
        {
          "person": "Tu (أنت)",
          "form": "Prendevi",
          "ar": "كنت بتأخذ"
        },
        {
          "person": "Lui (هو)",
          "form": "Prendeva",
          "ar": "كان بيأخذ"
        },
        {
          "person": "Lei (هي)",
          "form": "Prendeva",
          "ar": "كانت بتأخذ"
        },
        {
          "person": "Noi (نحن)",
          "form": "Prendevamo",
          "ar": "كنا بنأخذ"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Prendevate",
          "ar": "كنتوا بتأخذوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Prendevano",
          "ar": "كانوا بيأخذوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Prendi",
          "ar": "خد"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Prenda",
          "ar": "خد"
        },
        {
          "person": "Noi (نحن)",
          "form": "Prendiamo",
          "ar": "يلا ناخد"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Prendete",
          "ar": "خدوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Prendano",
          "ar": "خدوا"
        }
      ]
    }
  },
  {
    "it": "Promettere",
    "ar": "يوعد",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Prometto",
        "ar": "بوعد"
      },
      {
        "person": "Tu (أنت)",
        "form": "Prometti",
        "ar": "بتوعد"
      },
      {
        "person": "Lui (هو)",
        "form": "Promette",
        "ar": "بيوعد"
      },
      {
        "person": "Lei (هي)",
        "form": "Promette",
        "ar": "بتوعد"
      },
      {
        "person": "Noi (نحن)",
        "form": "Promettiamo",
        "ar": "بنوعد"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Promettete",
        "ar": "بتوعدوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Promettono",
        "ar": "بيوعدوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho promesso",
          "ar": "وعدت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai promesso",
          "ar": "وعدت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha promesso",
          "ar": "وعد"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha promesso",
          "ar": "وعدت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo promesso",
          "ar": "وعدنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete promesso",
          "ar": "وعدتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno promesso",
          "ar": "وعدوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Promettevo",
          "ar": "كنت بوعد"
        },
        {
          "person": "Tu (أنت)",
          "form": "Promettevi",
          "ar": "كنت بتوعد"
        },
        {
          "person": "Lui (هو)",
          "form": "Prometteva",
          "ar": "كان بيوعد"
        },
        {
          "person": "Lei (هي)",
          "form": "Prometteva",
          "ar": "كانت بتوعد"
        },
        {
          "person": "Noi (نحن)",
          "form": "Promettevamo",
          "ar": "كنا بنوعد"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Promettevate",
          "ar": "كنتوا بتوعدوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Promettevano",
          "ar": "كانوا بيوعدوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Prometti",
          "ar": "اوعد"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Prometta",
          "ar": "اوعد"
        },
        {
          "person": "Noi (نحن)",
          "form": "Promettiamo",
          "ar": "يلا نوعد"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Promettete",
          "ar": "اوعدوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Promettano",
          "ar": "اوعدوا"
        }
      ]
    }
  },
  {
    "it": "Scrivere",
    "ar": "يكتب",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Scrivo",
        "ar": "بكتب"
      },
      {
        "person": "Tu (أنت)",
        "form": "Scrivi",
        "ar": "بتكتب"
      },
      {
        "person": "Lui (هو)",
        "form": "Scrive",
        "ar": "بيكتب"
      },
      {
        "person": "Lei (هي)",
        "form": "Scrive",
        "ar": "بتكتب"
      },
      {
        "person": "Noi (نحن)",
        "form": "Scriviamo",
        "ar": "بنكتب"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Scrivete",
        "ar": "بتكتبوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Scrivono",
        "ar": "بيكتبوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho scritto",
          "ar": "كتبت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai scritto",
          "ar": "كتبت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha scritto",
          "ar": "كتب"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha scritto",
          "ar": "كتبت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo scritto",
          "ar": "كتبنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete scritto",
          "ar": "كتبتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno scritto",
          "ar": "كتبوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Scrivevo",
          "ar": "كنت بكتب"
        },
        {
          "person": "Tu (أنت)",
          "form": "Scrivevi",
          "ar": "كنت بتكتب"
        },
        {
          "person": "Lui (هو)",
          "form": "Scriveva",
          "ar": "كان بيكتب"
        },
        {
          "person": "Lei (هي)",
          "form": "Scriveva",
          "ar": "كانت بتكتب"
        },
        {
          "person": "Noi (نحن)",
          "form": "Scrivevamo",
          "ar": "كنا بنكتب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Scrivevate",
          "ar": "كنتوا بتكتبوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Scrivevano",
          "ar": "كانوا بيكتبوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Scrivi",
          "ar": "اكتب"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Scriva",
          "ar": "اكتب"
        },
        {
          "person": "Noi (نحن)",
          "form": "Scriviamo",
          "ar": "يلا نكتب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Scrivete",
          "ar": "اكتبوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Scrivano",
          "ar": "اكتبوا"
        }
      ]
    }
  },
  {
    "it": "Vedere",
    "ar": "يشوف / يرى",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Vedo",
        "ar": "بشوف"
      },
      {
        "person": "Tu (أنت)",
        "form": "Vedi",
        "ar": "بتشوف"
      },
      {
        "person": "Lui (هو)",
        "form": "Vede",
        "ar": "بيشوف"
      },
      {
        "person": "Lei (هي)",
        "form": "Vede",
        "ar": "بتشوف"
      },
      {
        "person": "Noi (نحن)",
        "form": "Vediamo",
        "ar": "بنشوف"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vedete",
        "ar": "بتشوفوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Vedono",
        "ar": "بيشوفوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho visto",
          "ar": "شفت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai visto",
          "ar": "شفت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha visto",
          "ar": "شاف"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha visto",
          "ar": "شافت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo visto",
          "ar": "شفنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete visto",
          "ar": "شفتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno visto",
          "ar": "شافوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Vedevo",
          "ar": "كنت بشوف"
        },
        {
          "person": "Tu (أنت)",
          "form": "Vedevi",
          "ar": "كنت بتشوف"
        },
        {
          "person": "Lui (هو)",
          "form": "Vedeva",
          "ar": "كان بيشوف"
        },
        {
          "person": "Lei (هي)",
          "form": "Vedeva",
          "ar": "كانت بتشوف"
        },
        {
          "person": "Noi (نحن)",
          "form": "Vedevamo",
          "ar": "كنا بنشوف"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vedevate",
          "ar": "كنتوا بتشوفوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Vedevano",
          "ar": "كانوا بيشوفوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Vedi",
          "ar": "شوف"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Veda",
          "ar": "شوف"
        },
        {
          "person": "Noi (نحن)",
          "form": "Vediamo",
          "ar": "يلا نشوف"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vedete",
          "ar": "شوفوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Vedano",
          "ar": "شوفوا"
        }
      ]
    }
  },
  {
    "it": "Vendere",
    "ar": "يبيع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Vendo",
        "ar": "ببيع"
      },
      {
        "person": "Tu (أنت)",
        "form": "Vendi",
        "ar": "بتبيع"
      },
      {
        "person": "Lui (هو)",
        "form": "Vende",
        "ar": "بيبيع"
      },
      {
        "person": "Lei (هي)",
        "form": "Vende",
        "ar": "بتبيع"
      },
      {
        "person": "Noi (نحن)",
        "form": "Vendiamo",
        "ar": "بنبيع"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vendete",
        "ar": "بتبيعوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Vendono",
        "ar": "بيبيعوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho venduto",
          "ar": "بعت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai venduto",
          "ar": "بعت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha venduto",
          "ar": "باع"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha venduto",
          "ar": "باعت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo venduto",
          "ar": "بعنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete venduto",
          "ar": "بعتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno venduto",
          "ar": "باعوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Vendevo",
          "ar": "كنت ببيع"
        },
        {
          "person": "Tu (أنت)",
          "form": "Vendevi",
          "ar": "كنت بتبيع"
        },
        {
          "person": "Lui (هو)",
          "form": "Vendeva",
          "ar": "كان بيبيع"
        },
        {
          "person": "Lei (هي)",
          "form": "Vendeva",
          "ar": "كانت بتبيع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Vendevamo",
          "ar": "كنا بنبيع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vendevate",
          "ar": "كنتوا بتبيعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Vendevano",
          "ar": "كانوا بيبيعوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Vendi",
          "ar": "بيع"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Venda",
          "ar": "بيع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Vendiamo",
          "ar": "يلا نبيع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vendete",
          "ar": "بيعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Vendano",
          "ar": "بيعوا"
        }
      ]
    }
  },
  {
    "it": "Avere",
    "ar": "عنده / يملك",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Ho",
        "ar": "عندي"
      },
      {
        "person": "Tu (أنت)",
        "form": "Hai",
        "ar": "عندك"
      },
      {
        "person": "Lui (هو)",
        "form": "Ha",
        "ar": "عنده"
      },
      {
        "person": "Lei (هي)",
        "form": "Ha",
        "ar": "عندها"
      },
      {
        "person": "Noi (نحن)",
        "form": "Abbiamo",
        "ar": "عندنا"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Avete",
        "ar": "عندكم"
      },
      {
        "person": "Loro (هم)",
        "form": "Hanno",
        "ar": "عندهم"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho avuto",
          "ar": "كان عندي"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai avuto",
          "ar": "كان عندك"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha avuto",
          "ar": "كان عنده"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha avuto",
          "ar": "كان عندها"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo avuto",
          "ar": "كان عندنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete avuto",
          "ar": "كان عندكوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno avuto",
          "ar": "كان عندهم"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Avevo",
          "ar": "كنت عندي"
        },
        {
          "person": "Tu (أنت)",
          "form": "Avevi",
          "ar": "كنت عندك"
        },
        {
          "person": "Lui (هو)",
          "form": "Aveva",
          "ar": "كان عنده"
        },
        {
          "person": "Lei (هي)",
          "form": "Aveva",
          "ar": "كانت عندها"
        },
        {
          "person": "Noi (نحن)",
          "form": "Avevamo",
          "ar": "كنا عندنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avevate",
          "ar": "كنتوا عندكم"
        },
        {
          "person": "Loro (هم)",
          "form": "Avevano",
          "ar": "كانوا عندهم"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Abbi",
          "ar": "امتلك"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Abbia",
          "ar": "امتلك"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo",
          "ar": "يلا نمتلك"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Abbiate",
          "ar": "امتلكوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Abbiano",
          "ar": "امتلكوا"
        }
      ]
    }
  },
  {
    "it": "Essere",
    "ar": "يكون",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Sono",
        "ar": "بكون"
      },
      {
        "person": "Tu (أنت)",
        "form": "Sei",
        "ar": "بتكون"
      },
      {
        "person": "Lui (هو)",
        "form": "È",
        "ar": "بيكون"
      },
      {
        "person": "Lei (هي)",
        "form": "È",
        "ar": "بتكون"
      },
      {
        "person": "Noi (نحن)",
        "form": "Siamo",
        "ar": "بنكون"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Siete",
        "ar": "بتكونوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Sono",
        "ar": "بيكونوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono stato/a",
          "ar": "كنت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei stato/a",
          "ar": "كنت"
        },
        {
          "person": "Lui (هو)",
          "form": "È stato",
          "ar": "كان"
        },
        {
          "person": "Lei (هي)",
          "form": "È stata",
          "ar": "كانت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo stati/e",
          "ar": "كنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete stati/e",
          "ar": "كنتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono stati/e",
          "ar": "كانوا"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ero",
          "ar": "كنت بكون"
        },
        {
          "person": "Tu (أنت)",
          "form": "Eri",
          "ar": "كنت بتكون"
        },
        {
          "person": "Lui (هو)",
          "form": "Era",
          "ar": "كان بيكون"
        },
        {
          "person": "Lei (هي)",
          "form": "Era",
          "ar": "كانت بتكون"
        },
        {
          "person": "Noi (نحن)",
          "form": "Eravamo",
          "ar": "كنا بنكون"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Eravate",
          "ar": "كنتوا بتكونوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Erano",
          "ar": "كانوا بيكونوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Sii",
          "ar": "كن"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Sia",
          "ar": "كن"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo",
          "ar": "يلا نكون"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siate",
          "ar": "كونوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Siano",
          "ar": "كونوا"
        }
      ]
    }
  },
  {
    "it": "Potere",
    "ar": "يقدر / يستطيع",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Posso",
        "ar": "بقدر"
      },
      {
        "person": "Tu (أنت)",
        "form": "Puoi",
        "ar": "بتقدر"
      },
      {
        "person": "Lui (هو)",
        "form": "Può",
        "ar": "بيقدر"
      },
      {
        "person": "Lei (هي)",
        "form": "Può",
        "ar": "بتقدر"
      },
      {
        "person": "Noi (نحن)",
        "form": "Possiamo",
        "ar": "بنقدر"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Potete",
        "ar": "بتقدروا"
      },
      {
        "person": "Loro (هم)",
        "form": "Possono",
        "ar": "بيقدروا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho potuto",
          "ar": "قدرت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai potuto",
          "ar": "قدرت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha potuto",
          "ar": "قدر"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha potuto",
          "ar": "قدرت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo potuto",
          "ar": "قدرنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete potuto",
          "ar": "قدرتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno potuto",
          "ar": "قدروا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Potevo",
          "ar": "كنت بقدر"
        },
        {
          "person": "Tu (أنت)",
          "form": "Potevi",
          "ar": "كنت بتقدر"
        },
        {
          "person": "Lui (هو)",
          "form": "Poteva",
          "ar": "كان بيقدر"
        },
        {
          "person": "Lei (هي)",
          "form": "Poteva",
          "ar": "كانت بتقدر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Potevamo",
          "ar": "كنا بنقدر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Potevate",
          "ar": "كنتوا بتقدروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Potevano",
          "ar": "كانوا بيقدروا"
        }
      ]
    },
    "imperativo": {
      "note": "فعل مساعد (modal) غير بيتعملوه في صيوغة الأمر في اللَغة الطبيعية لأن معناه \"يقدر\" غير أمر",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Noi (نحن)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Voi (أنتم)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Loro (هم)",
          "form": "—",
          "ar": "—"
        }
      ]
    }
  },
  {
    "it": "Sapere",
    "ar": "يعرف",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "So",
        "ar": "بعرف"
      },
      {
        "person": "Tu (أنت)",
        "form": "Sai",
        "ar": "بتعرف"
      },
      {
        "person": "Lui (هو)",
        "form": "Sa",
        "ar": "بيعرف"
      },
      {
        "person": "Lei (هي)",
        "form": "Sa",
        "ar": "بتعرف"
      },
      {
        "person": "Noi (نحن)",
        "form": "Sappiamo",
        "ar": "بنعرف"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Sapete",
        "ar": "بتعرفوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Sanno",
        "ar": "بيعرفوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho saputo",
          "ar": "عرفت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai saputo",
          "ar": "عرفت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha saputo",
          "ar": "عرف"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha saputo",
          "ar": "عرفت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo saputo",
          "ar": "عرفنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete saputo",
          "ar": "عرفتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno saputo",
          "ar": "عرفوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sapevo",
          "ar": "كنت بعرف"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sapevi",
          "ar": "كنت بتعرف"
        },
        {
          "person": "Lui (هو)",
          "form": "Sapeva",
          "ar": "كان بيعرف"
        },
        {
          "person": "Lei (هي)",
          "form": "Sapeva",
          "ar": "كانت بتعرف"
        },
        {
          "person": "Noi (نحن)",
          "form": "Sapevamo",
          "ar": "كنا بنعرف"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sapevate",
          "ar": "كنتوا بتعرفوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sapevano",
          "ar": "كانوا بيعرفوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Sappi",
          "ar": "اعرف"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Sappia",
          "ar": "اعرف"
        },
        {
          "person": "Noi (نحن)",
          "form": "Sappiamo",
          "ar": "يلا نعرف"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sappiate",
          "ar": "اعرفوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sappiano",
          "ar": "اعرفوا"
        }
      ]
    }
  },
  {
    "it": "Volere",
    "ar": "عايز / يريد",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Voglio",
        "ar": "عايز / عايزة"
      },
      {
        "person": "Tu (أنت)",
        "form": "Vuoi",
        "ar": "عايز / عايزة"
      },
      {
        "person": "Lui (هو)",
        "form": "Vuole",
        "ar": "عايز"
      },
      {
        "person": "Lei (هي)",
        "form": "Vuole",
        "ar": "عايزة"
      },
      {
        "person": "Noi (نحن)",
        "form": "Vogliamo",
        "ar": "عايزين"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Volete",
        "ar": "عايزين"
      },
      {
        "person": "Loro (هم)",
        "form": "Vogliono",
        "ar": "عايزين"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho voluto",
          "ar": "كنت عايز"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai voluto",
          "ar": "كنت عايز"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha voluto",
          "ar": "كان عايز"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha voluto",
          "ar": "كانت عايزة"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo voluto",
          "ar": "كنا عايزين"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete voluto",
          "ar": "كنتوا عايزين"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno voluto",
          "ar": "كانوا عايزين"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Volevo",
          "ar": "كنت عايز / عايزة"
        },
        {
          "person": "Tu (أنت)",
          "form": "Volevi",
          "ar": "كنت عايز / عايزة"
        },
        {
          "person": "Lui (هو)",
          "form": "Voleva",
          "ar": "كان عايز"
        },
        {
          "person": "Lei (هي)",
          "form": "Voleva",
          "ar": "كانت عايزة"
        },
        {
          "person": "Noi (نحن)",
          "form": "Volevamo",
          "ar": "كنا عايزين"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Volevate",
          "ar": "كنتوا عايزين"
        },
        {
          "person": "Loro (هم)",
          "form": "Volevano",
          "ar": "كانوا عايزين"
        }
      ]
    },
    "imperativo": {
      "note": "فعل مساعد (modal) نادر يُستعمل في الأمر، ولو استعمل بيكون في كلام رسمي جدًا مثل \"Vogliate scusare\"",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Noi (نحن)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vogliate",
          "ar": "لو سمحتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "—",
          "ar": "—"
        }
      ]
    }
  },
  {
    "it": "Tacere",
    "ar": "يسكت",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Taccio",
        "ar": "بسكت"
      },
      {
        "person": "Tu (أنت)",
        "form": "Taci",
        "ar": "بتسكت"
      },
      {
        "person": "Lui (هو)",
        "form": "Tace",
        "ar": "بيسكت"
      },
      {
        "person": "Lei (هي)",
        "form": "Tace",
        "ar": "بتسكت"
      },
      {
        "person": "Noi (نحن)",
        "form": "Taciamo",
        "ar": "بنسكت"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Tacete",
        "ar": "بتسكتوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Tacciono",
        "ar": "بيسكتوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho taciuto",
          "ar": "سكتّ"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai taciuto",
          "ar": "سكتّ"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha taciuto",
          "ar": "سكت"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha taciuto",
          "ar": "سكتت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo taciuto",
          "ar": "سكتنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete taciuto",
          "ar": "سكتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno taciuto",
          "ar": "سكتوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Tacevo",
          "ar": "كنت بسكت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Tacevi",
          "ar": "كنت بتسكت"
        },
        {
          "person": "Lui (هو)",
          "form": "Taceva",
          "ar": "كان بيسكت"
        },
        {
          "person": "Lei (هي)",
          "form": "Taceva",
          "ar": "كانت بتسكت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Tacevamo",
          "ar": "كنا بنسكت"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Tacevate",
          "ar": "كنتوا بتسكتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Tacevano",
          "ar": "كانوا بيسكتوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Taci",
          "ar": "اسكت"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Taccia",
          "ar": "اسكت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Taciamo",
          "ar": "يلا نسكت"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Tacete",
          "ar": "اسكتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Tacciano",
          "ar": "اسكتوا"
        }
      ]
    }
  },
  {
    "it": "Apprendere",
    "ar": "يتعلم",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Apprendo",
        "ar": "بتعلم"
      },
      {
        "person": "Tu (أنت)",
        "form": "Apprendi",
        "ar": "بتتعلم"
      },
      {
        "person": "Lui (هو)",
        "form": "Apprende",
        "ar": "بيتعلم"
      },
      {
        "person": "Lei (هي)",
        "form": "Apprende",
        "ar": "بتتعلم"
      },
      {
        "person": "Noi (نحن)",
        "form": "Apprendiamo",
        "ar": "بنتعلم"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Apprendete",
        "ar": "بتتعلموا"
      },
      {
        "person": "Loro (هم)",
        "form": "Apprendono",
        "ar": "بيتعلموا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho appreso",
          "ar": "اتعلمت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai appreso",
          "ar": "اتعلمت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha appreso",
          "ar": "اتعلم"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha appreso",
          "ar": "اتعلمت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo appreso",
          "ar": "اتعلمنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete appreso",
          "ar": "اتعلمتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno appreso",
          "ar": "اتعلموا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Apprendevo",
          "ar": "كنت بتعلم"
        },
        {
          "person": "Tu (أنت)",
          "form": "Apprendevi",
          "ar": "كنت بتتعلم"
        },
        {
          "person": "Lui (هو)",
          "form": "Apprendeva",
          "ar": "كان بيتعلم"
        },
        {
          "person": "Lei (هي)",
          "form": "Apprendeva",
          "ar": "كانت بتتعلم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Apprendevamo",
          "ar": "كنا بنتعلم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Apprendevate",
          "ar": "كنتوا بتتعلموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Apprendevano",
          "ar": "كانوا بيتعلموا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Apprendi",
          "ar": "اتعلم"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Apprenda",
          "ar": "اتعلم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Apprendiamo",
          "ar": "يلا نتعلم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Apprendete",
          "ar": "اتعلموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Apprendano",
          "ar": "اتعلموا"
        }
      ]
    }
  },
  {
    "it": "Capire",
    "ar": "يفهم",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Capisco",
        "ar": "بفهم"
      },
      {
        "person": "Tu (أنت)",
        "form": "Capisci",
        "ar": "بتفهم"
      },
      {
        "person": "Lui (هو)",
        "form": "Capisce",
        "ar": "بيفهم"
      },
      {
        "person": "Lei (هي)",
        "form": "Capisce",
        "ar": "بتفهم"
      },
      {
        "person": "Noi (نحن)",
        "form": "Capiamo",
        "ar": "بنفهم"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Capite",
        "ar": "بتفهموا"
      },
      {
        "person": "Loro (هم)",
        "form": "Capiscono",
        "ar": "بيفهموا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho capito",
          "ar": "فهمت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai capito",
          "ar": "فهمت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha capito",
          "ar": "فهم"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha capito",
          "ar": "فهمت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo capito",
          "ar": "فهمنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete capito",
          "ar": "فهمتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno capito",
          "ar": "فهموا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Capivo",
          "ar": "كنت بفهم"
        },
        {
          "person": "Tu (أنت)",
          "form": "Capivi",
          "ar": "كنت بتفهم"
        },
        {
          "person": "Lui (هو)",
          "form": "Capiva",
          "ar": "كان بيفهم"
        },
        {
          "person": "Lei (هي)",
          "form": "Capiva",
          "ar": "كانت بتفهم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Capivamo",
          "ar": "كنا بنفهم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Capivate",
          "ar": "كنتوا بتفهموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Capivano",
          "ar": "كانوا بيفهموا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Capisci",
          "ar": "افهم"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Capisca",
          "ar": "افهم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Capiamo",
          "ar": "يلا نفهم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Capite",
          "ar": "افهموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Capiscano",
          "ar": "افهموا"
        }
      ]
    }
  },
  {
    "it": "Dire",
    "ar": "يقول",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Dico",
        "ar": "بقول"
      },
      {
        "person": "Tu (أنت)",
        "form": "Dici",
        "ar": "بتقول"
      },
      {
        "person": "Lui (هو)",
        "form": "Dice",
        "ar": "بيقول"
      },
      {
        "person": "Lei (هي)",
        "form": "Dice",
        "ar": "بتقول"
      },
      {
        "person": "Noi (نحن)",
        "form": "Diciamo",
        "ar": "بنقول"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Dite",
        "ar": "بتقولوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Dicono",
        "ar": "بيقولوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho detto",
          "ar": "قلت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai detto",
          "ar": "قلت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha detto",
          "ar": "قال"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha detto",
          "ar": "قالت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo detto",
          "ar": "قلنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete detto",
          "ar": "قلتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno detto",
          "ar": "قالوا"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Dicevo",
          "ar": "كنت بقول"
        },
        {
          "person": "Tu (أنت)",
          "form": "Dicevi",
          "ar": "كنت بتقول"
        },
        {
          "person": "Lui (هو)",
          "form": "Diceva",
          "ar": "كان بيقول"
        },
        {
          "person": "Lei (هي)",
          "form": "Diceva",
          "ar": "كانت بتقول"
        },
        {
          "person": "Noi (نحن)",
          "form": "Dicevamo",
          "ar": "كنا بنقول"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dicevate",
          "ar": "كنتوا بتقولوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Dicevano",
          "ar": "كانوا بيقولوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Di'",
          "ar": "قول"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Dica",
          "ar": "قول"
        },
        {
          "person": "Noi (نحن)",
          "form": "Diciamo",
          "ar": "يلا نقول"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dite",
          "ar": "قولوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Dicano",
          "ar": "قولوا"
        }
      ]
    }
  },
  {
    "it": "Finire",
    "ar": "يخلّص / ينتهي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Finisco",
        "ar": "بخلّص"
      },
      {
        "person": "Tu (أنت)",
        "form": "Finisci",
        "ar": "بتخلّص"
      },
      {
        "person": "Lui (هو)",
        "form": "Finisce",
        "ar": "بيخلّص"
      },
      {
        "person": "Lei (هي)",
        "form": "Finisce",
        "ar": "بتخلّص"
      },
      {
        "person": "Noi (نحن)",
        "form": "Finiamo",
        "ar": "بنخلّص"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Finite",
        "ar": "بتخلّصوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Finiscono",
        "ar": "بيخلّصوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho finito",
          "ar": "خلصت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai finito",
          "ar": "خلصت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha finito",
          "ar": "خلص"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha finito",
          "ar": "خلصت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo finito",
          "ar": "خلصنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete finito",
          "ar": "خلصتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno finito",
          "ar": "خلصوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Finivo",
          "ar": "كنت بخلّص"
        },
        {
          "person": "Tu (أنت)",
          "form": "Finivi",
          "ar": "كنت بتخلّص"
        },
        {
          "person": "Lui (هو)",
          "form": "Finiva",
          "ar": "كان بيخلّص"
        },
        {
          "person": "Lei (هي)",
          "form": "Finiva",
          "ar": "كانت بتخلّص"
        },
        {
          "person": "Noi (نحن)",
          "form": "Finivamo",
          "ar": "كنا بنخلّص"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Finivate",
          "ar": "كنتوا بتخلّصوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Finivano",
          "ar": "كانوا بيخلّصوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Finisci",
          "ar": "خلص"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Finisca",
          "ar": "خلص"
        },
        {
          "person": "Noi (نحن)",
          "form": "Finiamo",
          "ar": "يلا نخلص"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Finite",
          "ar": "خلصوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Finiscano",
          "ar": "خلصوا"
        }
      ]
    }
  },
  {
    "it": "Partire",
    "ar": "يسافر / يغادر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Parto",
        "ar": "بسافر"
      },
      {
        "person": "Tu (أنت)",
        "form": "Parti",
        "ar": "بتسافر"
      },
      {
        "person": "Lui (هو)",
        "form": "Parte",
        "ar": "بيسافر"
      },
      {
        "person": "Lei (هي)",
        "form": "Parte",
        "ar": "بتسافر"
      },
      {
        "person": "Noi (نحن)",
        "form": "Partiamo",
        "ar": "بنسافر"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Partite",
        "ar": "بتسافروا"
      },
      {
        "person": "Loro (هم)",
        "form": "Partono",
        "ar": "بيسافروا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono partito/a",
          "ar": "سافرت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei partito/a",
          "ar": "سافرت"
        },
        {
          "person": "Lui (هو)",
          "form": "È partito",
          "ar": "سافر"
        },
        {
          "person": "Lei (هي)",
          "form": "È partita",
          "ar": "سافرت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo partiti/e",
          "ar": "سافرنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete partiti/e",
          "ar": "سافرتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono partiti/e",
          "ar": "سافروا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Partivo",
          "ar": "كنت بسافر"
        },
        {
          "person": "Tu (أنت)",
          "form": "Partivi",
          "ar": "كنت بتسافر"
        },
        {
          "person": "Lui (هو)",
          "form": "Partiva",
          "ar": "كان بيسافر"
        },
        {
          "person": "Lei (هي)",
          "form": "Partiva",
          "ar": "كانت بتسافر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Partivamo",
          "ar": "كنا بنسافر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Partivate",
          "ar": "كنتوا بتسافروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Partivano",
          "ar": "كانوا بيسافروا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Parti",
          "ar": "سافر"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Parta",
          "ar": "سافر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Partiamo",
          "ar": "يلا نسافر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Partite",
          "ar": "سافروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Partano",
          "ar": "سافروا"
        }
      ]
    }
  },
  {
    "it": "Pulire",
    "ar": "ينظف",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Pulisco",
        "ar": "بنظف"
      },
      {
        "person": "Tu (أنت)",
        "form": "Pulisci",
        "ar": "بتنظف"
      },
      {
        "person": "Lui (هو)",
        "form": "Pulisce",
        "ar": "بينظف"
      },
      {
        "person": "Lei (هي)",
        "form": "Pulisce",
        "ar": "بتنظف"
      },
      {
        "person": "Noi (نحن)",
        "form": "Puliamo",
        "ar": "بننظف"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Pulite",
        "ar": "بتنظفوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Puliscono",
        "ar": "بينظفوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho pulito",
          "ar": "نظفت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai pulito",
          "ar": "نظفت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha pulito",
          "ar": "نظف"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha pulito",
          "ar": "نظفت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo pulito",
          "ar": "نظفنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete pulito",
          "ar": "نظفتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno pulito",
          "ar": "نظفوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Pulivo",
          "ar": "كنت بنظف"
        },
        {
          "person": "Tu (أنت)",
          "form": "Pulivi",
          "ar": "كنت بتنظف"
        },
        {
          "person": "Lui (هو)",
          "form": "Puliva",
          "ar": "كان بينظف"
        },
        {
          "person": "Lei (هي)",
          "form": "Puliva",
          "ar": "كانت بتنظف"
        },
        {
          "person": "Noi (نحن)",
          "form": "Pulivamo",
          "ar": "كنا بننظف"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pulivate",
          "ar": "كنتوا بتنظفوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Pulivano",
          "ar": "كانوا بينظفوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Pulisci",
          "ar": "نضف"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Pulisca",
          "ar": "نضف"
        },
        {
          "person": "Noi (نحن)",
          "form": "Puliamo",
          "ar": "يلا ننضف"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pulite",
          "ar": "نضفوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Puliscano",
          "ar": "نضفوا"
        }
      ]
    }
  },
  {
    "it": "Uscire",
    "ar": "يخرج",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Esco",
        "ar": "بخرج"
      },
      {
        "person": "Tu (أنت)",
        "form": "Esci",
        "ar": "بتخرج"
      },
      {
        "person": "Lui (هو)",
        "form": "Esce",
        "ar": "بيخرج"
      },
      {
        "person": "Lei (هي)",
        "form": "Esce",
        "ar": "بتخرج"
      },
      {
        "person": "Noi (نحن)",
        "form": "Usciamo",
        "ar": "بنخرج"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Uscite",
        "ar": "بتخرجوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Escono",
        "ar": "بيخرجوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono uscito/a",
          "ar": "خرجت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei uscito/a",
          "ar": "خرجت"
        },
        {
          "person": "Lui (هو)",
          "form": "È uscito",
          "ar": "خرج"
        },
        {
          "person": "Lei (هي)",
          "form": "È uscita",
          "ar": "خرجت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo usciti/e",
          "ar": "خرجنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete usciti/e",
          "ar": "خرجتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono usciti/e",
          "ar": "خرجوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Uscivo",
          "ar": "كنت بخرج"
        },
        {
          "person": "Tu (أنت)",
          "form": "Uscivi",
          "ar": "كنت بتخرج"
        },
        {
          "person": "Lui (هو)",
          "form": "Usciva",
          "ar": "كان بيخرج"
        },
        {
          "person": "Lei (هي)",
          "form": "Usciva",
          "ar": "كانت بتخرج"
        },
        {
          "person": "Noi (نحن)",
          "form": "Uscivamo",
          "ar": "كنا بنخرج"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Uscivate",
          "ar": "كنتوا بتخرجوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Uscivano",
          "ar": "كانوا بيخرجوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Esci",
          "ar": "اخرج"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Esca",
          "ar": "اخرج"
        },
        {
          "person": "Noi (نحن)",
          "form": "Usciamo",
          "ar": "يلا نخرج"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Uscite",
          "ar": "اخرجوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Escano",
          "ar": "اخرجوا"
        }
      ]
    }
  },
  {
    "it": "Cucinare",
    "ar": "يطبخ",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Cucino",
        "ar": "بطبخ"
      },
      {
        "person": "Tu (أنت)",
        "form": "Cucini",
        "ar": "بتطبخ"
      },
      {
        "person": "Lui (هو)",
        "form": "Cucina",
        "ar": "بيطبخ"
      },
      {
        "person": "Lei (هي)",
        "form": "Cucina",
        "ar": "بتطبخ"
      },
      {
        "person": "Noi (نحن)",
        "form": "Cuciniamo",
        "ar": "بنطبخ"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Cucinate",
        "ar": "بتطبخوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Cucinano",
        "ar": "بيطبخوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho cucinato",
          "ar": "طبخت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai cucinato",
          "ar": "طبخت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha cucinato",
          "ar": "طبخ"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha cucinato",
          "ar": "طبخت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo cucinato",
          "ar": "طبخنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete cucinato",
          "ar": "طبختوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno cucinato",
          "ar": "طبخوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Cucinavo",
          "ar": "كنت بطبخ"
        },
        {
          "person": "Tu (أنت)",
          "form": "Cucinavi",
          "ar": "كنت بتطبخ"
        },
        {
          "person": "Lui (هو)",
          "form": "Cucinava",
          "ar": "كان بيطبخ"
        },
        {
          "person": "Lei (هي)",
          "form": "Cucinava",
          "ar": "كانت بتطبخ"
        },
        {
          "person": "Noi (نحن)",
          "form": "Cucinavamo",
          "ar": "كنا بنطبخ"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cucinavate",
          "ar": "كنتوا بتطبخوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Cucinavano",
          "ar": "كانوا بيطبخوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Cucina",
          "ar": "اطبخ"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Cucini",
          "ar": "اطبخ"
        },
        {
          "person": "Noi (نحن)",
          "form": "Cuciniamo",
          "ar": "يلا نطبخ"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cucinate",
          "ar": "اطبخوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Cucinino",
          "ar": "اطبخوا"
        }
      ]
    }
  },
  {
    "it": "Pensare",
    "ar": "يفكر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Penso",
        "ar": "بفكر"
      },
      {
        "person": "Tu (أنت)",
        "form": "Pensi",
        "ar": "بتفكر"
      },
      {
        "person": "Lui (هو)",
        "form": "Pensa",
        "ar": "بيفكر"
      },
      {
        "person": "Lei (هي)",
        "form": "Pensa",
        "ar": "بتفكر"
      },
      {
        "person": "Noi (نحن)",
        "form": "Pensiamo",
        "ar": "بنفكر"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Pensate",
        "ar": "بتفكروا"
      },
      {
        "person": "Loro (هم)",
        "form": "Pensano",
        "ar": "بيفكروا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho pensato",
          "ar": "فكرت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai pensato",
          "ar": "فكرت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha pensato",
          "ar": "فكر"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha pensato",
          "ar": "فكرت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo pensato",
          "ar": "فكرنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete pensato",
          "ar": "فكرتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno pensato",
          "ar": "فكروا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Pensavo",
          "ar": "كنت بفكر"
        },
        {
          "person": "Tu (أنت)",
          "form": "Pensavi",
          "ar": "كنت بتفكر"
        },
        {
          "person": "Lui (هو)",
          "form": "Pensava",
          "ar": "كان بيفكر"
        },
        {
          "person": "Lei (هي)",
          "form": "Pensava",
          "ar": "كانت بتفكر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Pensavamo",
          "ar": "كنا بنفكر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pensavate",
          "ar": "كنتوا بتفكروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Pensavano",
          "ar": "كانوا بيفكروا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Pensa",
          "ar": "فكر"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Pensi",
          "ar": "فكر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Pensiamo",
          "ar": "يلا نفكر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pensate",
          "ar": "فكروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Pensino",
          "ar": "فكروا"
        }
      ]
    }
  },
  {
    "it": "Piangere",
    "ar": "يعيّط / يبكي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Piango",
        "ar": "بعيّط"
      },
      {
        "person": "Tu (أنت)",
        "form": "Piangi",
        "ar": "بتعيّط"
      },
      {
        "person": "Lui (هو)",
        "form": "Piange",
        "ar": "بيعيّط"
      },
      {
        "person": "Lei (هي)",
        "form": "Piange",
        "ar": "بتعيّط"
      },
      {
        "person": "Noi (نحن)",
        "form": "Piangiamo",
        "ar": "بنعيّط"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Piangete",
        "ar": "بتعيّطوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Piangono",
        "ar": "بيعيّطوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho pianto",
          "ar": "عيطت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai pianto",
          "ar": "عيطت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha pianto",
          "ar": "عيط"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha pianto",
          "ar": "عيطت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo pianto",
          "ar": "عيطنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete pianto",
          "ar": "عيطتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno pianto",
          "ar": "عيطوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Piangevo",
          "ar": "كنت بعيّط"
        },
        {
          "person": "Tu (أنت)",
          "form": "Piangevi",
          "ar": "كنت بتعيّط"
        },
        {
          "person": "Lui (هو)",
          "form": "Piangeva",
          "ar": "كان بيعيّط"
        },
        {
          "person": "Lei (هي)",
          "form": "Piangeva",
          "ar": "كانت بتعيّط"
        },
        {
          "person": "Noi (نحن)",
          "form": "Piangevamo",
          "ar": "كنا بنعيّط"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Piangevate",
          "ar": "كنتوا بتعيّطوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Piangevano",
          "ar": "كانوا بيعيّطوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Piangi",
          "ar": "عيط"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Pianga",
          "ar": "عيط"
        },
        {
          "person": "Noi (نحن)",
          "form": "Piangiamo",
          "ar": "يلا نعيط"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Piangete",
          "ar": "عيطوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Piangano",
          "ar": "عيطوا"
        }
      ]
    }
  },
  {
    "it": "Ridere",
    "ar": "يضحك",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Rido",
        "ar": "بضحك"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ridi",
        "ar": "بتضحك"
      },
      {
        "person": "Lui (هو)",
        "form": "Ride",
        "ar": "بيضحك"
      },
      {
        "person": "Lei (هي)",
        "form": "Ride",
        "ar": "بتضحك"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ridiamo",
        "ar": "بنضحك"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Ridete",
        "ar": "بتضحكوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Ridono",
        "ar": "بيضحكوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho riso",
          "ar": "ضحكت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai riso",
          "ar": "ضحكت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha riso",
          "ar": "ضحك"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha riso",
          "ar": "ضحكت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo riso",
          "ar": "ضحكنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete riso",
          "ar": "ضحكتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno riso",
          "ar": "ضحكوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ridevo",
          "ar": "كنت بضحك"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ridevi",
          "ar": "كنت بتضحك"
        },
        {
          "person": "Lui (هو)",
          "form": "Rideva",
          "ar": "كان بيضحك"
        },
        {
          "person": "Lei (هي)",
          "form": "Rideva",
          "ar": "كانت بتضحك"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ridevamo",
          "ar": "كنا بنضحك"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ridevate",
          "ar": "كنتوا بتضحكوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Ridevano",
          "ar": "كانوا بيضحكوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Ridi",
          "ar": "اضحك"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Rida",
          "ar": "اضحك"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ridiamo",
          "ar": "يلا نضحك"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ridete",
          "ar": "اضحكوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Ridano",
          "ar": "اضحكوا"
        }
      ]
    }
  },
  {
    "it": "Dormire",
    "ar": "ينام",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Dormo",
        "ar": "بنام"
      },
      {
        "person": "Tu (أنت)",
        "form": "Dormi",
        "ar": "بتنام"
      },
      {
        "person": "Lui (هو)",
        "form": "Dorme",
        "ar": "بينام"
      },
      {
        "person": "Lei (هي)",
        "form": "Dorme",
        "ar": "بتنام"
      },
      {
        "person": "Noi (نحن)",
        "form": "Dormiamo",
        "ar": "بننام"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Dormite",
        "ar": "بتناموا"
      },
      {
        "person": "Loro (هم)",
        "form": "Dormono",
        "ar": "بيناموا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho dormito",
          "ar": "نمت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai dormito",
          "ar": "نمت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha dormito",
          "ar": "نام"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha dormito",
          "ar": "نامت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo dormito",
          "ar": "نمنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete dormito",
          "ar": "نمتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno dormito",
          "ar": "ناموا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Dormivo",
          "ar": "كنت بنام"
        },
        {
          "person": "Tu (أنت)",
          "form": "Dormivi",
          "ar": "كنت بتنام"
        },
        {
          "person": "Lui (هو)",
          "form": "Dormiva",
          "ar": "كان بينام"
        },
        {
          "person": "Lei (هي)",
          "form": "Dormiva",
          "ar": "كانت بتنام"
        },
        {
          "person": "Noi (نحن)",
          "form": "Dormivamo",
          "ar": "كنا بننام"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dormivate",
          "ar": "كنتوا بتناموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Dormivano",
          "ar": "كانوا بيناموا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Dormi",
          "ar": "نام"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Dorma",
          "ar": "نام"
        },
        {
          "person": "Noi (نحن)",
          "form": "Dormiamo",
          "ar": "يلا ننام"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dormite",
          "ar": "ناموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Dormano",
          "ar": "ناموا"
        }
      ]
    }
  },
  {
    "it": "Sognare",
    "ar": "يحلم",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Sogno",
        "ar": "بحلم"
      },
      {
        "person": "Tu (أنت)",
        "form": "Sogni",
        "ar": "بتحلم"
      },
      {
        "person": "Lui (هو)",
        "form": "Sogna",
        "ar": "بيحلم"
      },
      {
        "person": "Lei (هي)",
        "form": "Sogna",
        "ar": "بتحلم"
      },
      {
        "person": "Noi (نحن)",
        "form": "Sogniamo",
        "ar": "بنحلم"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Sognate",
        "ar": "بتحلموا"
      },
      {
        "person": "Loro (هم)",
        "form": "Sognano",
        "ar": "بيحلموا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho sognato",
          "ar": "حلمت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai sognato",
          "ar": "حلمت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha sognato",
          "ar": "حلم"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha sognato",
          "ar": "حلمت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo sognato",
          "ar": "حلمنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete sognato",
          "ar": "حلمتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno sognato",
          "ar": "حلموا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sognavo",
          "ar": "كنت بحلم"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sognavi",
          "ar": "كنت بتحلم"
        },
        {
          "person": "Lui (هو)",
          "form": "Sognava",
          "ar": "كان بيحلم"
        },
        {
          "person": "Lei (هي)",
          "form": "Sognava",
          "ar": "كانت بتحلم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Sognavamo",
          "ar": "كنا بنحلم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sognavate",
          "ar": "كنتوا بتحلموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sognavano",
          "ar": "كانوا بيحلموا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Sogna",
          "ar": "احلم"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Sogni",
          "ar": "احلم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Sogniamo",
          "ar": "يلا نحلم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sognate",
          "ar": "احلموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sognino",
          "ar": "احلموا"
        }
      ]
    }
  },
  {
    "it": "Sperare",
    "ar": "يتمنى / يأمل",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Spero",
        "ar": "بتمنى"
      },
      {
        "person": "Tu (أنت)",
        "form": "Speri",
        "ar": "بتتمنى"
      },
      {
        "person": "Lui (هو)",
        "form": "Spera",
        "ar": "بيتمنى"
      },
      {
        "person": "Lei (هي)",
        "form": "Spera",
        "ar": "بتتمنى"
      },
      {
        "person": "Noi (نحن)",
        "form": "Speriamo",
        "ar": "بنتمنى"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Sperate",
        "ar": "بتتمنىوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Sperano",
        "ar": "بيتمنىوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho sperato",
          "ar": "اتمنيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai sperato",
          "ar": "اتمنيت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha sperato",
          "ar": "اتمنى"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha sperato",
          "ar": "اتمنت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo sperato",
          "ar": "اتمنينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete sperato",
          "ar": "اتمنيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno sperato",
          "ar": "اتمنوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Speravo",
          "ar": "كنت بتمنى"
        },
        {
          "person": "Tu (أنت)",
          "form": "Speravi",
          "ar": "كنت بتتمنى"
        },
        {
          "person": "Lui (هو)",
          "form": "Sperava",
          "ar": "كان بيتمنى"
        },
        {
          "person": "Lei (هي)",
          "form": "Sperava",
          "ar": "كانت بتتمنى"
        },
        {
          "person": "Noi (نحن)",
          "form": "Speravamo",
          "ar": "كنا بنتمنى"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Speravate",
          "ar": "كنتوا بتتمنىوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Speravano",
          "ar": "كانوا بيتمنىوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Spera",
          "ar": "اتمنى"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Speri",
          "ar": "اتمنى"
        },
        {
          "person": "Noi (نحن)",
          "form": "Speriamo",
          "ar": "يلا نتمنى"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sperate",
          "ar": "اتمنوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sperino",
          "ar": "اتمنوا"
        }
      ]
    }
  },
  {
    "it": "Spiegare",
    "ar": "يشرح",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Spiego",
        "ar": "بشرح"
      },
      {
        "person": "Tu (أنت)",
        "form": "Spieghi",
        "ar": "بتشرح"
      },
      {
        "person": "Lui (هو)",
        "form": "Spiega",
        "ar": "بيشرح"
      },
      {
        "person": "Lei (هي)",
        "form": "Spiega",
        "ar": "بتشرح"
      },
      {
        "person": "Noi (نحن)",
        "form": "Spieghiamo",
        "ar": "بنشرح"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Spiegate",
        "ar": "بتشرحوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Spiegano",
        "ar": "بيشرحوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho spiegato",
          "ar": "شرحت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai spiegato",
          "ar": "شرحت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha spiegato",
          "ar": "شرح"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha spiegato",
          "ar": "شرحت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo spiegato",
          "ar": "شرحنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete spiegato",
          "ar": "شرحتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno spiegato",
          "ar": "شرحوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Spiegavo",
          "ar": "كنت بشرح"
        },
        {
          "person": "Tu (أنت)",
          "form": "Spiegavi",
          "ar": "كنت بتشرح"
        },
        {
          "person": "Lui (هو)",
          "form": "Spiegava",
          "ar": "كان بيشرح"
        },
        {
          "person": "Lei (هي)",
          "form": "Spiegava",
          "ar": "كانت بتشرح"
        },
        {
          "person": "Noi (نحن)",
          "form": "Spiegavamo",
          "ar": "كنا بنشرح"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Spiegavate",
          "ar": "كنتوا بتشرحوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Spiegavano",
          "ar": "كانوا بيشرحوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Spiega",
          "ar": "اشرح"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Spieghi",
          "ar": "اشرح"
        },
        {
          "person": "Noi (نحن)",
          "form": "Spieghiamo",
          "ar": "يلا نشرح"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Spiegate",
          "ar": "اشرحوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Spieghino",
          "ar": "اشرحوا"
        }
      ]
    }
  },
  {
    "it": "Stare",
    "ar": "يقعد / يكون بحال معينة",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Sto",
        "ar": "بقعد"
      },
      {
        "person": "Tu (أنت)",
        "form": "Stai",
        "ar": "بتقعد"
      },
      {
        "person": "Lui (هو)",
        "form": "Sta",
        "ar": "بيقعد"
      },
      {
        "person": "Lei (هي)",
        "form": "Sta",
        "ar": "بتقعد"
      },
      {
        "person": "Noi (نحن)",
        "form": "Stiamo",
        "ar": "بنقعد"
      },
      {
        "person": "Voi (أنتم)",
        "form": "State",
        "ar": "بتقعدوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Stanno",
        "ar": "بيقعدوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono stato/a",
          "ar": "قعدت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei stato/a",
          "ar": "قعدت"
        },
        {
          "person": "Lui (هو)",
          "form": "È stato",
          "ar": "قعد"
        },
        {
          "person": "Lei (هي)",
          "form": "È stata",
          "ar": "قعدت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo stati/e",
          "ar": "قعدنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete stati/e",
          "ar": "قعدتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono stati/e",
          "ar": "قعدوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Stavo",
          "ar": "كنت بقعد"
        },
        {
          "person": "Tu (أنت)",
          "form": "Stavi",
          "ar": "كنت بتقعد"
        },
        {
          "person": "Lui (هو)",
          "form": "Stava",
          "ar": "كان بيقعد"
        },
        {
          "person": "Lei (هي)",
          "form": "Stava",
          "ar": "كانت بتقعد"
        },
        {
          "person": "Noi (نحن)",
          "form": "Stavamo",
          "ar": "كنا بنقعد"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Stavate",
          "ar": "كنتوا بتقعدوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Stavano",
          "ar": "كانوا بيقعدوا"
        }
      ]
    },
    "imperativo": {
      "note": "صيغة الأمر مع Tu شاذة: Sta' (أو Stai)",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Sta'",
          "ar": "اقعد"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Stia",
          "ar": "اقعد"
        },
        {
          "person": "Noi (نحن)",
          "form": "Stiamo",
          "ar": "يلا نقعد"
        },
        {
          "person": "Voi (أنتم)",
          "form": "State",
          "ar": "اقعدوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Stiano",
          "ar": "اقعدوا"
        }
      ]
    }
  },
  {
    "it": "Bere",
    "ar": "يشرب",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Bevo",
        "ar": "بشرب"
      },
      {
        "person": "Tu (أنت)",
        "form": "Bevi",
        "ar": "بتشرب"
      },
      {
        "person": "Lui (هو)",
        "form": "Beve",
        "ar": "بيشرب"
      },
      {
        "person": "Lei (هي)",
        "form": "Beve",
        "ar": "بتشرب"
      },
      {
        "person": "Noi (نحن)",
        "form": "Beviamo",
        "ar": "بنشرب"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Bevete",
        "ar": "بتشربوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Bevono",
        "ar": "بيشربوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho bevuto",
          "ar": "شربت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai bevuto",
          "ar": "شربت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha bevuto",
          "ar": "شرب"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha bevuto",
          "ar": "شربت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo bevuto",
          "ar": "شربنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete bevuto",
          "ar": "شربتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno bevuto",
          "ar": "شربوا"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Bevevo",
          "ar": "كنت بشرب"
        },
        {
          "person": "Tu (أنت)",
          "form": "Bevevi",
          "ar": "كنت بتشرب"
        },
        {
          "person": "Lui (هو)",
          "form": "Beveva",
          "ar": "كان بيشرب"
        },
        {
          "person": "Lei (هي)",
          "form": "Beveva",
          "ar": "كانت بتشرب"
        },
        {
          "person": "Noi (نحن)",
          "form": "Bevevamo",
          "ar": "كنا بنشرب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Bevevate",
          "ar": "كنتوا بتشربوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Bevevano",
          "ar": "كانوا بيشربوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Bevi",
          "ar": "اشرب"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Beva",
          "ar": "اشرب"
        },
        {
          "person": "Noi (نحن)",
          "form": "Beviamo",
          "ar": "يلا نشرب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Bevete",
          "ar": "اشربوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Bevano",
          "ar": "اشربوا"
        }
      ]
    }
  },
  {
    "it": "Porre",
    "ar": "يضع / يطرح",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Pongo",
        "ar": "بضع"
      },
      {
        "person": "Tu (أنت)",
        "form": "Poni",
        "ar": "بتضع"
      },
      {
        "person": "Lui (هو)",
        "form": "Pone",
        "ar": "بيضع"
      },
      {
        "person": "Lei (هي)",
        "form": "Pone",
        "ar": "بتضع"
      },
      {
        "person": "Noi (نحن)",
        "form": "Poniamo",
        "ar": "بنضع"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Ponete",
        "ar": "بتضعوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Pongono",
        "ar": "بيضعوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho posto",
          "ar": "حطيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai posto",
          "ar": "حطيت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha posto",
          "ar": "حط"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha posto",
          "ar": "حطت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo posto",
          "ar": "حطينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete posto",
          "ar": "حطيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno posto",
          "ar": "حطوا"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ponevo",
          "ar": "كنت بضع"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ponevi",
          "ar": "كنت بتضع"
        },
        {
          "person": "Lui (هو)",
          "form": "Poneva",
          "ar": "كان بيضع"
        },
        {
          "person": "Lei (هي)",
          "form": "Poneva",
          "ar": "كانت بتضع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ponevamo",
          "ar": "كنا بنضع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ponevate",
          "ar": "كنتوا بتضعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Ponevano",
          "ar": "كانوا بيضعوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Poni",
          "ar": "حط"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Ponga",
          "ar": "حط"
        },
        {
          "person": "Noi (نحن)",
          "form": "Poniamo",
          "ar": "يلا نحط"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ponete",
          "ar": "حطوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Pongano",
          "ar": "حطوا"
        }
      ]
    }
  },
  {
    "it": "Tradurre",
    "ar": "يترجم",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Traduco",
        "ar": "بترجم"
      },
      {
        "person": "Tu (أنت)",
        "form": "Traduci",
        "ar": "بتترجم"
      },
      {
        "person": "Lui (هو)",
        "form": "Traduce",
        "ar": "بيترجم"
      },
      {
        "person": "Lei (هي)",
        "form": "Traduce",
        "ar": "بتترجم"
      },
      {
        "person": "Noi (نحن)",
        "form": "Traduciamo",
        "ar": "بنترجم"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Traducete",
        "ar": "بتترجموا"
      },
      {
        "person": "Loro (هم)",
        "form": "Traducono",
        "ar": "بيترجموا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho tradotto",
          "ar": "ترجمت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai tradotto",
          "ar": "ترجمت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha tradotto",
          "ar": "ترجم"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha tradotto",
          "ar": "ترجمت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo tradotto",
          "ar": "ترجمنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete tradotto",
          "ar": "ترجمتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno tradotto",
          "ar": "ترجموا"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Traducevo",
          "ar": "كنت بترجم"
        },
        {
          "person": "Tu (أنت)",
          "form": "Traducevi",
          "ar": "كنت بتترجم"
        },
        {
          "person": "Lui (هو)",
          "form": "Traduceva",
          "ar": "كان بيترجم"
        },
        {
          "person": "Lei (هي)",
          "form": "Traduceva",
          "ar": "كانت بتترجم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Traducevamo",
          "ar": "كنا بنترجم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Traducevate",
          "ar": "كنتوا بتترجموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Traducevano",
          "ar": "كانوا بيترجموا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Traduci",
          "ar": "ترجم"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Traduca",
          "ar": "ترجم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Traduciamo",
          "ar": "يلا نترجم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Traducete",
          "ar": "ترجموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Traducano",
          "ar": "ترجموا"
        }
      ]
    }
  },
  {
    "it": "Produrre",
    "ar": "ينتج",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Produco",
        "ar": "بنتج"
      },
      {
        "person": "Tu (أنت)",
        "form": "Produci",
        "ar": "بتنتج"
      },
      {
        "person": "Lui (هو)",
        "form": "Produce",
        "ar": "بينتج"
      },
      {
        "person": "Lei (هي)",
        "form": "Produce",
        "ar": "بتنتج"
      },
      {
        "person": "Noi (نحن)",
        "form": "Produciamo",
        "ar": "بننتج"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Producete",
        "ar": "بتنتجوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Producono",
        "ar": "بينتجوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho prodotto",
          "ar": "انتجت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai prodotto",
          "ar": "انتجت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha prodotto",
          "ar": "انتج"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha prodotto",
          "ar": "انتجت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo prodotto",
          "ar": "انتجنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete prodotto",
          "ar": "انتجتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno prodotto",
          "ar": "انتجوا"
        }
      ]
    },
    "imperfetto": {
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Producevo",
          "ar": "كنت بنتج"
        },
        {
          "person": "Tu (أنت)",
          "form": "Producevi",
          "ar": "كنت بتنتج"
        },
        {
          "person": "Lui (هو)",
          "form": "Produceva",
          "ar": "كان بينتج"
        },
        {
          "person": "Lei (هي)",
          "form": "Produceva",
          "ar": "كانت بتنتج"
        },
        {
          "person": "Noi (نحن)",
          "form": "Producevamo",
          "ar": "كنا بننتج"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Producevate",
          "ar": "كنتوا بتنتجوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Producevano",
          "ar": "كانوا بينتجوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Produci",
          "ar": "انتج"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Produca",
          "ar": "انتج"
        },
        {
          "person": "Noi (نحن)",
          "form": "Produciamo",
          "ar": "يلا ننتج"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Producete",
          "ar": "انتجوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Producano",
          "ar": "انتجوا"
        }
      ]
    }
  },
  {
    "it": "Alzarsi",
    "ar": "ينهض / يقوم",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi alzo",
        "ar": "بنهض"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti alzi",
        "ar": "بتنهض"
      },
      {
        "person": "Lui (هو)",
        "form": "Si alza",
        "ar": "بينهض"
      },
      {
        "person": "Lei (هي)",
        "form": "Si alza",
        "ar": "بتنهض"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci alziamo",
        "ar": "بننهض"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi alzate",
        "ar": "بتنهضوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si alzano",
        "ar": "بينهضوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono alzato/a",
          "ar": "قمت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei alzato/a",
          "ar": "قمت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è alzato",
          "ar": "قام"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è alzata",
          "ar": "قامت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo alzati/e",
          "ar": "قمنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete alzati/e",
          "ar": "قمتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono alzati/e",
          "ar": "قاموا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi alzavo",
          "ar": "كنت بنهض"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti alzavi",
          "ar": "كنت بتنهض"
        },
        {
          "person": "Lui (هو)",
          "form": "Si alzava",
          "ar": "كان بينهض"
        },
        {
          "person": "Lei (هي)",
          "form": "Si alzava",
          "ar": "كانت بتنهض"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci alzavamo",
          "ar": "كنا بننهض"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi alzavate",
          "ar": "كنتوا بتنهضوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si alzavano",
          "ar": "كانوا بينهضوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Alzati",
          "ar": "قوم"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si alzi",
          "ar": "قوم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Alziamoci",
          "ar": "يلا نقوم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Alzatevi",
          "ar": "قوموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si alzino",
          "ar": "قوموا"
        }
      ]
    }
  },
  {
    "it": "Lavarsi",
    "ar": "يغتسل",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi lavo",
        "ar": "بغتسل"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti lavi",
        "ar": "بتغتسل"
      },
      {
        "person": "Lui (هو)",
        "form": "Si lava",
        "ar": "بيغتسل"
      },
      {
        "person": "Lei (هي)",
        "form": "Si lava",
        "ar": "بتغتسل"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci laviamo",
        "ar": "بنغتسل"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi lavate",
        "ar": "بتغتسلوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si lavano",
        "ar": "بيغتسلوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono lavato/a",
          "ar": "اتغسلت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei lavato/a",
          "ar": "اتغسلت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è lavato",
          "ar": "اتغسل"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è lavata",
          "ar": "اتغسلت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo lavati/e",
          "ar": "اتغسلنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete lavati/e",
          "ar": "اتغسلتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono lavati/e",
          "ar": "اتغسلوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi lavavo",
          "ar": "كنت بغتسل"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti lavavi",
          "ar": "كنت بتغتسل"
        },
        {
          "person": "Lui (هو)",
          "form": "Si lavava",
          "ar": "كان بيغتسل"
        },
        {
          "person": "Lei (هي)",
          "form": "Si lavava",
          "ar": "كانت بتغتسل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci lavavamo",
          "ar": "كنا بنغتسل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi lavavate",
          "ar": "كنتوا بتغتسلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si lavavano",
          "ar": "كانوا بيغتسلوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Lavati",
          "ar": "اتغسل"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si lavi",
          "ar": "اتغسل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Laviamoci",
          "ar": "يلا نتغسل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Lavatevi",
          "ar": "اتغسلوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si lavino",
          "ar": "اتغسلوا"
        }
      ]
    }
  },
  {
    "it": "Chiamarsi",
    "ar": "يُدعى / اسمه",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi chiamo",
        "ar": "بُدعى"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti chiami",
        "ar": "بتُدعى"
      },
      {
        "person": "Lui (هو)",
        "form": "Si chiama",
        "ar": "بيُدعى"
      },
      {
        "person": "Lei (هي)",
        "form": "Si chiama",
        "ar": "بتُدعى"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci chiamiamo",
        "ar": "بنُدعى"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi chiamate",
        "ar": "بتُدعىوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si chiamano",
        "ar": "بيُدعىوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono chiamato/a",
          "ar": "كان اسمي"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei chiamato/a",
          "ar": "كان اسمك"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è chiamato",
          "ar": "كان اسمه"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è chiamata",
          "ar": "كان اسمها"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo chiamati/e",
          "ar": "كان اسمنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete chiamati/e",
          "ar": "كان اسمكوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono chiamati/e",
          "ar": "كان اسمهم"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi chiamavo",
          "ar": "كنت بُدعى"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti chiamavi",
          "ar": "كنت بتُدعى"
        },
        {
          "person": "Lui (هو)",
          "form": "Si chiamava",
          "ar": "كان بيُدعى"
        },
        {
          "person": "Lei (هي)",
          "form": "Si chiamava",
          "ar": "كانت بتُدعى"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci chiamavamo",
          "ar": "كنا بنُدعى"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi chiamavate",
          "ar": "كنتوا بتُدعىوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si chiamavano",
          "ar": "كانوا بيُدعىوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Chiamati",
          "ar": "سمي نفسك"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si chiami",
          "ar": "سمي نفسك"
        },
        {
          "person": "Noi (نحن)",
          "form": "Chiamiamoci",
          "ar": "يلا نسمي نفسنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Chiamatevi",
          "ar": "سموا نفسكوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si chiamino",
          "ar": "سموا نفسهم"
        }
      ]
    }
  },
  {
    "it": "Riposarsi",
    "ar": "يستريح",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi riposo",
        "ar": "بستريح"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti riposi",
        "ar": "بتستريح"
      },
      {
        "person": "Lui (هو)",
        "form": "Si riposa",
        "ar": "بيستريح"
      },
      {
        "person": "Lei (هي)",
        "form": "Si riposa",
        "ar": "بتستريح"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci riposiamo",
        "ar": "بنستريح"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi riposate",
        "ar": "بتستريحوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si riposano",
        "ar": "بيستريحوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono riposato/a",
          "ar": "ارتحت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei riposato/a",
          "ar": "ارتحت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è riposato",
          "ar": "ارتاح"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è riposata",
          "ar": "ارتاحت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo riposati/e",
          "ar": "ارتحنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete riposati/e",
          "ar": "ارتحتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono riposati/e",
          "ar": "ارتاحوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi riposavo",
          "ar": "كنت بستريح"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti riposavi",
          "ar": "كنت بتستريح"
        },
        {
          "person": "Lui (هو)",
          "form": "Si riposava",
          "ar": "كان بيستريح"
        },
        {
          "person": "Lei (هي)",
          "form": "Si riposava",
          "ar": "كانت بتستريح"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci riposavamo",
          "ar": "كنا بنستريح"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi riposavate",
          "ar": "كنتوا بتستريحوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si riposavano",
          "ar": "كانوا بيستريحوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Riposati",
          "ar": "استريح"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si riposi",
          "ar": "استريح"
        },
        {
          "person": "Noi (نحن)",
          "form": "Riposiamoci",
          "ar": "يلا نستريح"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Riposatevi",
          "ar": "استريحوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si riposino",
          "ar": "استريحوا"
        }
      ]
    }
  },
  {
    "it": "Prepararsi",
    "ar": "يستعدّ",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi preparo",
        "ar": "بستعدّ"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti prepari",
        "ar": "بتستعدّ"
      },
      {
        "person": "Lui (هو)",
        "form": "Si prepara",
        "ar": "بيستعدّ"
      },
      {
        "person": "Lei (هي)",
        "form": "Si prepara",
        "ar": "بتستعدّ"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci prepariamo",
        "ar": "بنستعدّ"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi preparate",
        "ar": "بتستعدّوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si preparano",
        "ar": "بيستعدّوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono preparato/a",
          "ar": "استعديت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei preparato/a",
          "ar": "استعديت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è preparato",
          "ar": "استعد"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è preparata",
          "ar": "استعدت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo preparati/e",
          "ar": "استعدينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete preparati/e",
          "ar": "استعديتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono preparati/e",
          "ar": "استعدوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi preparavo",
          "ar": "كنت بستعدّ"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti preparavi",
          "ar": "كنت بتستعدّ"
        },
        {
          "person": "Lui (هو)",
          "form": "Si preparava",
          "ar": "كان بيستعدّ"
        },
        {
          "person": "Lei (هي)",
          "form": "Si preparava",
          "ar": "كانت بتستعدّ"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci preparavamo",
          "ar": "كنا بنستعدّ"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi preparavate",
          "ar": "كنتوا بتستعدّوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si preparavano",
          "ar": "كانوا بيستعدّوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Preparati",
          "ar": "استعد"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si prepari",
          "ar": "استعد"
        },
        {
          "person": "Noi (نحن)",
          "form": "Prepariamoci",
          "ar": "يلا نستعد"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Preparatevi",
          "ar": "استعدوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si preparino",
          "ar": "استعدوا"
        }
      ]
    }
  },
  {
    "it": "Arrabbiarsi",
    "ar": "يغضب",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi arrabbio",
        "ar": "بغضب"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti arrabbi",
        "ar": "بتغضب"
      },
      {
        "person": "Lui (هو)",
        "form": "Si arrabbia",
        "ar": "بيغضب"
      },
      {
        "person": "Lei (هي)",
        "form": "Si arrabbia",
        "ar": "بتغضب"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci arrabbiamo",
        "ar": "بنغضب"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi arrabbiate",
        "ar": "بتغضبوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si arrabbiano",
        "ar": "بيغضبوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono arrabbiato/a",
          "ar": "غضبت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei arrabbiato/a",
          "ar": "غضبت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è arrabbiato",
          "ar": "غضب"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è arrabbiata",
          "ar": "غضبت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo arrabbiati/e",
          "ar": "غضبنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete arrabbiati/e",
          "ar": "غضبتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono arrabbiati/e",
          "ar": "غضبوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi arrabbiavo",
          "ar": "كنت بغضب"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti arrabbiavi",
          "ar": "كنت بتغضب"
        },
        {
          "person": "Lui (هو)",
          "form": "Si arrabbiava",
          "ar": "كان بيغضب"
        },
        {
          "person": "Lei (هي)",
          "form": "Si arrabbiava",
          "ar": "كانت بتغضب"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci arrabbiavamo",
          "ar": "كنا بنغضب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi arrabbiavate",
          "ar": "كنتوا بتغضبوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si arrabbiavano",
          "ar": "كانوا بيغضبوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Arrabbiati",
          "ar": "اغضب"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si arrabbi",
          "ar": "اغضب"
        },
        {
          "person": "Noi (نحن)",
          "form": "Arrabbiamoci",
          "ar": "يلا نغضب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Arrabbiatevi",
          "ar": "اغضبوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si arrabbino",
          "ar": "اغضبوا"
        }
      ]
    }
  },
  {
    "it": "Ricordarsi",
    "ar": "يتذكّر",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi ricordo",
        "ar": "بتذكّر"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti ricordi",
        "ar": "بتتذكّر"
      },
      {
        "person": "Lui (هو)",
        "form": "Si ricorda",
        "ar": "بيتذكّر"
      },
      {
        "person": "Lei (هي)",
        "form": "Si ricorda",
        "ar": "بتتذكّر"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci ricordiamo",
        "ar": "بنتذكّر"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi ricordate",
        "ar": "بتتذكّروا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si ricordano",
        "ar": "بيتذكّروا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono ricordato/a",
          "ar": "اتذكرت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei ricordato/a",
          "ar": "اتذكرت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è ricordato",
          "ar": "اتذكر"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è ricordata",
          "ar": "اتذكرت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo ricordati/e",
          "ar": "اتذكرنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete ricordati/e",
          "ar": "اتذكرتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono ricordati/e",
          "ar": "اتذكروا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi ricordavo",
          "ar": "كنت بتذكّر"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti ricordavi",
          "ar": "كنت بتتذكّر"
        },
        {
          "person": "Lui (هو)",
          "form": "Si ricordava",
          "ar": "كان بيتذكّر"
        },
        {
          "person": "Lei (هي)",
          "form": "Si ricordava",
          "ar": "كانت بتتذكّر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci ricordavamo",
          "ar": "كنا بنتذكّر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi ricordavate",
          "ar": "كنتوا بتتذكّروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si ricordavano",
          "ar": "كانوا بيتذكّروا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Ricordati",
          "ar": "اتذكر"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si ricordi",
          "ar": "اتذكر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ricordiamoci",
          "ar": "يلا نتذكر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Ricordatevi",
          "ar": "اتذكروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si ricordino",
          "ar": "اتذكروا"
        }
      ]
    }
  },
  {
    "it": "Addormentarsi",
    "ar": "يغفو / ينام",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi addormento",
        "ar": "بغفو"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti addormenti",
        "ar": "بتغفو"
      },
      {
        "person": "Lui (هو)",
        "form": "Si addormenta",
        "ar": "بيغفو"
      },
      {
        "person": "Lei (هي)",
        "form": "Si addormenta",
        "ar": "بتغفو"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci addormentiamo",
        "ar": "بنغفو"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi addormentate",
        "ar": "بتغفووا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si addormentano",
        "ar": "بيغفووا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono addormentato/a",
          "ar": "نمت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei addormentato/a",
          "ar": "نمت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è addormentato",
          "ar": "نام"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è addormentata",
          "ar": "نامت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo addormentati/e",
          "ar": "نمنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete addormentati/e",
          "ar": "نمتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono addormentati/e",
          "ar": "ناموا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi addormentavo",
          "ar": "كنت بغفو"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti addormentavi",
          "ar": "كنت بتغفو"
        },
        {
          "person": "Lui (هو)",
          "form": "Si addormentava",
          "ar": "كان بيغفو"
        },
        {
          "person": "Lei (هي)",
          "form": "Si addormentava",
          "ar": "كانت بتغفو"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci addormentavamo",
          "ar": "كنا بنغفو"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi addormentavate",
          "ar": "كنتوا بتغفووا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si addormentavano",
          "ar": "كانوا بيغفووا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Addormentati",
          "ar": "نام"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si addormenti",
          "ar": "نام"
        },
        {
          "person": "Noi (نحن)",
          "form": "Addormentiamoci",
          "ar": "يلا ننام"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Addormentatevi",
          "ar": "ناموا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si addormentino",
          "ar": "ناموا"
        }
      ]
    }
  },
  {
    "it": "Trovarsi",
    "ar": "يقع / يوجد",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi trovo",
        "ar": "بقع"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti trovi",
        "ar": "بتقع"
      },
      {
        "person": "Lui (هو)",
        "form": "Si trova",
        "ar": "بيقع"
      },
      {
        "person": "Lei (هي)",
        "form": "Si trova",
        "ar": "بتقع"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci troviamo",
        "ar": "بنقع"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi trovate",
        "ar": "بتقعوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si trovano",
        "ar": "بيقعوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono trovato/a",
          "ar": "كنت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei trovato/a",
          "ar": "كنت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è trovato",
          "ar": "كان"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è trovata",
          "ar": "كانت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo trovati/e",
          "ar": "كنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete trovati/e",
          "ar": "كنتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono trovati/e",
          "ar": "كانوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi trovavo",
          "ar": "كنت بقع"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti trovavi",
          "ar": "كنت بتقع"
        },
        {
          "person": "Lui (هو)",
          "form": "Si trovava",
          "ar": "كان بيقع"
        },
        {
          "person": "Lei (هي)",
          "form": "Si trovava",
          "ar": "كانت بتقع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci trovavamo",
          "ar": "كنا بنقع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi trovavate",
          "ar": "كنتوا بتقعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si trovavano",
          "ar": "كانوا بيقعوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Trovati",
          "ar": "كن هناك"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si trovi",
          "ar": "كن هناك"
        },
        {
          "person": "Noi (نحن)",
          "form": "Troviamoci",
          "ar": "يلا نكون هناك"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Trovatevi",
          "ar": "كونوا هناك"
        },
        {
          "person": "Loro (هم)",
          "form": "Si trovino",
          "ar": "كونوا هناك"
        }
      ]
    }
  },
  {
    "it": "Sposarsi",
    "ar": "يتزوّج",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi sposo",
        "ar": "بتزوّج"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti sposi",
        "ar": "بتتزوّج"
      },
      {
        "person": "Lui (هو)",
        "form": "Si sposa",
        "ar": "بيتزوّج"
      },
      {
        "person": "Lei (هي)",
        "form": "Si sposa",
        "ar": "بتتزوّج"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci sposiamo",
        "ar": "بنتزوّج"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi sposate",
        "ar": "بتتزوّجوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si sposano",
        "ar": "بيتزوّجوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono sposato/a",
          "ar": "اتجوزت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei sposato/a",
          "ar": "اتجوزت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è sposato",
          "ar": "اتجوز"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è sposata",
          "ar": "اتجوزت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo sposati/e",
          "ar": "اتجوزنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete sposati/e",
          "ar": "اتجوزتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono sposati/e",
          "ar": "اتجوزوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sposavo",
          "ar": "كنت بتزوّج"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sposavi",
          "ar": "كنت بتتزوّج"
        },
        {
          "person": "Lui (هو)",
          "form": "Si sposava",
          "ar": "كان بيتزوّج"
        },
        {
          "person": "Lei (هي)",
          "form": "Si sposava",
          "ar": "كانت بتتزوّج"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci sposavamo",
          "ar": "كنا بنتزوّج"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi sposavate",
          "ar": "كنتوا بتتزوّجوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sposavano",
          "ar": "كانوا بيتزوّجوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Sposati",
          "ar": "اتجوز"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si sposi",
          "ar": "اتجوز"
        },
        {
          "person": "Noi (نحن)",
          "form": "Sposiamoci",
          "ar": "يلا نتجوز"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sposatevi",
          "ar": "اتجوزوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sposino",
          "ar": "اتجوزوا"
        }
      ]
    }
  },
  {
    "it": "Laurearsi",
    "ar": "يتخرّج من الجامعة",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi laureo",
        "ar": "بتخرّج من الجامعة"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti laurei",
        "ar": "بتتخرّج من الجامعة"
      },
      {
        "person": "Lui (هو)",
        "form": "Si laurea",
        "ar": "بيتخرّج من الجامعة"
      },
      {
        "person": "Lei (هي)",
        "form": "Si laurea",
        "ar": "بتتخرّج من الجامعة"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci laureiamo",
        "ar": "بنتخرّج من الجامعة"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi laureate",
        "ar": "بتتخرّجوا من الجامعة"
      },
      {
        "person": "Loro (هم)",
        "form": "Si laureano",
        "ar": "بيتخرّجوا من الجامعة"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono laureato/a",
          "ar": "اتخرجت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei laureato/a",
          "ar": "اتخرجت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è laureato",
          "ar": "اتخرج"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è laureata",
          "ar": "اتخرجت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo laureati/e",
          "ar": "اتخرجنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete laureati/e",
          "ar": "اتخرجتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono laureati/e",
          "ar": "اتخرجوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi laureavo",
          "ar": "كنت بتخرّج من الجامعة"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti laureavi",
          "ar": "كنت بتتخرّج من الجامعة"
        },
        {
          "person": "Lui (هو)",
          "form": "Si laureava",
          "ar": "كان بيتخرّج من الجامعة"
        },
        {
          "person": "Lei (هي)",
          "form": "Si laureava",
          "ar": "كانت بتتخرّج من الجامعة"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci laureavamo",
          "ar": "كنا بنتخرّج من الجامعة"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi laureavate",
          "ar": "كنتوا بتتخرّجوا من الجامعة"
        },
        {
          "person": "Loro (هم)",
          "form": "Si laureavano",
          "ar": "كانوا بيتخرّجوا من الجامعة"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Laureati",
          "ar": "اتخرج"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si laurei",
          "ar": "اتخرج"
        },
        {
          "person": "Noi (نحن)",
          "form": "Laureiamoci",
          "ar": "يلا نتخرج"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Laureatevi",
          "ar": "اتخرجوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si laureino",
          "ar": "اتخرجوا"
        }
      ]
    }
  },
  {
    "it": "Annoiarsi",
    "ar": "يشعر بالملل",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi annoio",
        "ar": "بشعر بالملل"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti annoi",
        "ar": "بتشعر بالملل"
      },
      {
        "person": "Lui (هو)",
        "form": "Si annoia",
        "ar": "بيشعر بالملل"
      },
      {
        "person": "Lei (هي)",
        "form": "Si annoia",
        "ar": "بتشعر بالملل"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci annoiamo",
        "ar": "بنشعر بالملل"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi annoiate",
        "ar": "بتشعروا بالملل"
      },
      {
        "person": "Loro (هم)",
        "form": "Si annoiano",
        "ar": "بيشعروا بالملل"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono annoiato/a",
          "ar": "زهقت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei annoiato/a",
          "ar": "زهقت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è annoiato",
          "ar": "زهق"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è annoiata",
          "ar": "زهقت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo annoiati/e",
          "ar": "زهقنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete annoiati/e",
          "ar": "زهقتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono annoiati/e",
          "ar": "زهقوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi annoiavo",
          "ar": "كنت بشعر بالملل"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti annoiavi",
          "ar": "كنت بتشعر بالملل"
        },
        {
          "person": "Lui (هو)",
          "form": "Si annoiava",
          "ar": "كان بيشعر بالملل"
        },
        {
          "person": "Lei (هي)",
          "form": "Si annoiava",
          "ar": "كانت بتشعر بالملل"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci annoiavamo",
          "ar": "كنا بنشعر بالملل"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi annoiavate",
          "ar": "كنتوا بتشعروا بالملل"
        },
        {
          "person": "Loro (هم)",
          "form": "Si annoiavano",
          "ar": "كانوا بيشعروا بالملل"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Annoiati",
          "ar": "ازهق"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si annoi",
          "ar": "ازهق"
        },
        {
          "person": "Noi (نحن)",
          "form": "Annoiamoci",
          "ar": "يلا نزهق"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Annoiatevi",
          "ar": "ازهقوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si annoino",
          "ar": "ازهقوا"
        }
      ]
    }
  },
  {
    "it": "Pettinarsi",
    "ar": "يمشّط شعره",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi pettino",
        "ar": "بمشّط شعره"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti pettini",
        "ar": "بتمشّط شعره"
      },
      {
        "person": "Lui (هو)",
        "form": "Si pettina",
        "ar": "بيمشّط شعره"
      },
      {
        "person": "Lei (هي)",
        "form": "Si pettina",
        "ar": "بتمشّط شعره"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci pettiniamo",
        "ar": "بنمشّط شعره"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi pettinate",
        "ar": "بتمشّطوا شعره"
      },
      {
        "person": "Loro (هم)",
        "form": "Si pettinano",
        "ar": "بيمشّطوا شعره"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono pettinato/a",
          "ar": "مشطت شعري"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei pettinato/a",
          "ar": "مشطت شعرك"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è pettinato",
          "ar": "مشط شعره"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è pettinata",
          "ar": "مشطت شعرها"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo pettinati/e",
          "ar": "مشطنا شعرنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete pettinati/e",
          "ar": "مشطتوا شعركوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono pettinati/e",
          "ar": "مشطوا شعرهم"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi pettinavo",
          "ar": "كنت بمشّط شعره"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti pettinavi",
          "ar": "كنت بتمشّط شعره"
        },
        {
          "person": "Lui (هو)",
          "form": "Si pettinava",
          "ar": "كان بيمشّط شعره"
        },
        {
          "person": "Lei (هي)",
          "form": "Si pettinava",
          "ar": "كانت بتمشّط شعره"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci pettinavamo",
          "ar": "كنا بنمشّط شعره"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi pettinavate",
          "ar": "كنتوا بتمشّطوا شعره"
        },
        {
          "person": "Loro (هم)",
          "form": "Si pettinavano",
          "ar": "كانوا بيمشّطوا شعره"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Pettinati",
          "ar": "مشط شعرك"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si pettini",
          "ar": "مشط شعرك"
        },
        {
          "person": "Noi (نحن)",
          "form": "Pettiniamoci",
          "ar": "يلا نمشط شعرنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Pettinatevi",
          "ar": "مشطوا شعركوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si pettinino",
          "ar": "مشطوا شعرهم"
        }
      ]
    }
  },
  {
    "it": "Vestirsi",
    "ar": "يرتدي ملابسه",
    "reflexive": true,
    "group": "ire",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi vesto",
        "ar": "برتدي ملابسه"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti vesti",
        "ar": "بترتدي ملابسه"
      },
      {
        "person": "Lui (هو)",
        "form": "Si veste",
        "ar": "بيرتدي ملابسه"
      },
      {
        "person": "Lei (هي)",
        "form": "Si veste",
        "ar": "بترتدي ملابسه"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci vestiamo",
        "ar": "بنرتدي ملابسه"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi vestite",
        "ar": "بترتديوا ملابسه"
      },
      {
        "person": "Loro (هم)",
        "form": "Si vestono",
        "ar": "بيرتديوا ملابسه"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono vestito/a",
          "ar": "لبست"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei vestito/a",
          "ar": "لبست"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è vestito",
          "ar": "لبس"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è vestita",
          "ar": "لبست"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo vestiti/e",
          "ar": "لبسنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete vestiti/e",
          "ar": "لبستوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono vestiti/e",
          "ar": "لبسوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi vestivo",
          "ar": "كنت برتدي ملابسه"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti vestivi",
          "ar": "كنت بترتدي ملابسه"
        },
        {
          "person": "Lui (هو)",
          "form": "Si vestiva",
          "ar": "كان بيرتدي ملابسه"
        },
        {
          "person": "Lei (هي)",
          "form": "Si vestiva",
          "ar": "كانت بترتدي ملابسه"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci vestivamo",
          "ar": "كنا بنرتدي ملابسه"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi vestivate",
          "ar": "كنتوا بترتديوا ملابسه"
        },
        {
          "person": "Loro (هم)",
          "form": "Si vestivano",
          "ar": "كانوا بيرتديوا ملابسه"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Vestiti",
          "ar": "البس"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si vesta",
          "ar": "البس"
        },
        {
          "person": "Noi (نحن)",
          "form": "Vestiamoci",
          "ar": "يلا نلبس"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vestitevi",
          "ar": "البسوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si vestano",
          "ar": "البسوا"
        }
      ]
    }
  },
  {
    "it": "Divertirsi",
    "ar": "يستمتع / يلهو",
    "reflexive": true,
    "group": "ire",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi diverto",
        "ar": "بستمتع"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti diverti",
        "ar": "بتستمتع"
      },
      {
        "person": "Lui (هو)",
        "form": "Si diverte",
        "ar": "بيستمتع"
      },
      {
        "person": "Lei (هي)",
        "form": "Si diverte",
        "ar": "بتستمتع"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci divertiamo",
        "ar": "بنستمتع"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi divertite",
        "ar": "بتستمتعوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si divertono",
        "ar": "بيستمتعوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono divertito/a",
          "ar": "استمتعت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei divertito/a",
          "ar": "استمتعت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è divertito",
          "ar": "استمتع"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è divertita",
          "ar": "استمتعت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo divertiti/e",
          "ar": "استمتعنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete divertiti/e",
          "ar": "استمتعتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono divertiti/e",
          "ar": "استمتعوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi divertivo",
          "ar": "كنت بستمتع"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti divertivi",
          "ar": "كنت بتستمتع"
        },
        {
          "person": "Lui (هو)",
          "form": "Si divertiva",
          "ar": "كان بيستمتع"
        },
        {
          "person": "Lei (هي)",
          "form": "Si divertiva",
          "ar": "كانت بتستمتع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci divertivamo",
          "ar": "كنا بنستمتع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi divertivate",
          "ar": "كنتوا بتستمتعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si divertivano",
          "ar": "كانوا بيستمتعوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Divertiti",
          "ar": "استمتع"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si diverta",
          "ar": "استمتع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Divertiamoci",
          "ar": "يلا نستمتع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Divertitevi",
          "ar": "استمتعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si divertano",
          "ar": "استمتعوا"
        }
      ]
    }
  },
  {
    "it": "Sentirsi",
    "ar": "يشعر (بحالة)",
    "reflexive": true,
    "group": "ire",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi sento",
        "ar": "بشعر (بحالة)"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti senti",
        "ar": "بتشعر (بحالة)"
      },
      {
        "person": "Lui (هو)",
        "form": "Si sente",
        "ar": "بيشعر (بحالة)"
      },
      {
        "person": "Lei (هي)",
        "form": "Si sente",
        "ar": "بتشعر (بحالة)"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci sentiamo",
        "ar": "بنشعر (بحالة)"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi sentite",
        "ar": "بتشعروا (بحالة)"
      },
      {
        "person": "Loro (هم)",
        "form": "Si sentono",
        "ar": "بيشعروا (بحالة)"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono sentito/a",
          "ar": "حسيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei sentito/a",
          "ar": "حسيت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è sentito",
          "ar": "حس"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è sentita",
          "ar": "حست"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo sentiti/e",
          "ar": "حسينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete sentiti/e",
          "ar": "حسيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono sentiti/e",
          "ar": "حسوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sentivo",
          "ar": "كنت بشعر (بحالة)"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sentivi",
          "ar": "كنت بتشعر (بحالة)"
        },
        {
          "person": "Lui (هو)",
          "form": "Si sentiva",
          "ar": "كان بيشعر (بحالة)"
        },
        {
          "person": "Lei (هي)",
          "form": "Si sentiva",
          "ar": "كانت بتشعر (بحالة)"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci sentivamo",
          "ar": "كنا بنشعر (بحالة)"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi sentivate",
          "ar": "كنتوا بتشعروا (بحالة)"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sentivano",
          "ar": "كانوا بيشعروا (بحالة)"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Sentiti",
          "ar": "حس"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si senta",
          "ar": "حس"
        },
        {
          "person": "Noi (نحن)",
          "form": "Sentiamoci",
          "ar": "يلا نحس"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sentitevi",
          "ar": "حسوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sentano",
          "ar": "حسوا"
        }
      ]
    }
  },
  {
    "it": "Mettersi",
    "ar": "يرتدي / يشرع في",
    "reflexive": true,
    "group": "ere",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi metto",
        "ar": "برتدي"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti metti",
        "ar": "بترتدي"
      },
      {
        "person": "Lui (هو)",
        "form": "Si mette",
        "ar": "بيرتدي"
      },
      {
        "person": "Lei (هي)",
        "form": "Si mette",
        "ar": "بترتدي"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci mettiamo",
        "ar": "بنرتدي"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi mettete",
        "ar": "بترتديوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si mettono",
        "ar": "بيرتديوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono messo/a",
          "ar": "لبست"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei messo/a",
          "ar": "لبست"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è messo",
          "ar": "لبس"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è messa",
          "ar": "لبست"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo messi/e",
          "ar": "لبسنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete messi/e",
          "ar": "لبستوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono messi/e",
          "ar": "لبسوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi mettevo",
          "ar": "كنت برتدي"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti mettevi",
          "ar": "كنت بترتدي"
        },
        {
          "person": "Lui (هو)",
          "form": "Si metteva",
          "ar": "كان بيرتدي"
        },
        {
          "person": "Lei (هي)",
          "form": "Si metteva",
          "ar": "كانت بترتدي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci mettevamo",
          "ar": "كنا بنرتدي"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi mettevate",
          "ar": "كنتوا بترتديوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si mettevano",
          "ar": "كانوا بيرتديوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Mettiti",
          "ar": "البس"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si metta",
          "ar": "البس"
        },
        {
          "person": "Noi (نحن)",
          "form": "Mettiamoci",
          "ar": "يلا نلبس"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Mettetevi",
          "ar": "البسوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si mettano",
          "ar": "البسوا"
        }
      ]
    }
  },
  {
    "it": "Sedersi",
    "ar": "يجلس",
    "reflexive": true,
    "group": "ere",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi siedo",
        "ar": "بجلس"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti siedi",
        "ar": "بتجلس"
      },
      {
        "person": "Lui (هو)",
        "form": "Si siede",
        "ar": "بيجلس"
      },
      {
        "person": "Lei (هي)",
        "form": "Si siede",
        "ar": "بتجلس"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci sediamo",
        "ar": "بنجلس"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi sedete",
        "ar": "بتجلسوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si siedono",
        "ar": "بيجلسوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono seduto/a",
          "ar": "قعدت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei seduto/a",
          "ar": "قعدت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è seduto",
          "ar": "قعد"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è seduta",
          "ar": "قعدت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo seduti/e",
          "ar": "قعدنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete seduti/e",
          "ar": "قعدتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono seduti/e",
          "ar": "قعدوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sedevo",
          "ar": "كنت بجلس"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sedevi",
          "ar": "كنت بتجلس"
        },
        {
          "person": "Lui (هو)",
          "form": "Si sedeva",
          "ar": "كان بيجلس"
        },
        {
          "person": "Lei (هي)",
          "form": "Si sedeva",
          "ar": "كانت بتجلس"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci sedevamo",
          "ar": "كنا بنجلس"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi sedevate",
          "ar": "كنتوا بتجلسوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sedevano",
          "ar": "كانوا بيجلسوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Siediti",
          "ar": "اقعد"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si sieda",
          "ar": "اقعد"
        },
        {
          "person": "Noi (نحن)",
          "form": "Sediamoci",
          "ar": "يلا نقعد"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sedetevi",
          "ar": "اقعدوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si siedano",
          "ar": "اقعدوا"
        }
      ]
    }
  },
  {
    "it": "Accorgersi",
    "ar": "ينتبه / يلاحظ",
    "reflexive": true,
    "group": "ere",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi accorgo",
        "ar": "بنتبه"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti accorgi",
        "ar": "بتنتبه"
      },
      {
        "person": "Lui (هو)",
        "form": "Si accorge",
        "ar": "بينتبه"
      },
      {
        "person": "Lei (هي)",
        "form": "Si accorge",
        "ar": "بتنتبه"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci accorgiamo",
        "ar": "بننتبه"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi accorgete",
        "ar": "بتنتبهوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Si accorgono",
        "ar": "بينتبهوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono accorto/a",
          "ar": "لاحظت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei accorto/a",
          "ar": "لاحظت"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è accorto",
          "ar": "لاحظ"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è accorta",
          "ar": "لاحظت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo accorti/e",
          "ar": "لاحظنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete accorti/e",
          "ar": "لاحظتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono accorti/e",
          "ar": "لاحظوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi accorgevo",
          "ar": "كنت بنتبه"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti accorgevi",
          "ar": "كنت بتنتبه"
        },
        {
          "person": "Lui (هو)",
          "form": "Si accorgeva",
          "ar": "كان بينتبه"
        },
        {
          "person": "Lei (هي)",
          "form": "Si accorgeva",
          "ar": "كانت بتنتبه"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci accorgevamo",
          "ar": "كنا بننتبه"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi accorgevate",
          "ar": "كنتوا بتنتبهوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si accorgevano",
          "ar": "كانوا بينتبهوا"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Alzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si alzi). وفي النفي يجوز الوجهان: non ti alzare / non alzarti.",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Accorgiti",
          "ar": "لاحظ"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si accorga",
          "ar": "لاحظ"
        },
        {
          "person": "Noi (نحن)",
          "form": "Accorgiamoci",
          "ar": "يلا نلاحظ"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Accorgetevi",
          "ar": "لاحظوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si accorgano",
          "ar": "لاحظوا"
        }
      ]
    }
  },
  {
    "it": "Passare",
    "ar": "يقضي (وقت) / يمر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Passo",
        "ar": "بقضي (وقت)"
      },
      {
        "person": "Tu (أنت)",
        "form": "Passi",
        "ar": "بتقضي (وقت)"
      },
      {
        "person": "Lui (هو)",
        "form": "Passa",
        "ar": "بيقضي (وقت)"
      },
      {
        "person": "Lei (هي)",
        "form": "Passa",
        "ar": "بتقضي (وقت)"
      },
      {
        "person": "Noi (نحن)",
        "form": "Passiamo",
        "ar": "بنقضي (وقت)"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Passate",
        "ar": "بتقضيوا (وقت)"
      },
      {
        "person": "Loro (هم)",
        "form": "Passano",
        "ar": "بيقضيوا (وقت)"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho passato",
          "ar": "قضيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai passato",
          "ar": "قضيت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha passato",
          "ar": "قضى"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha passato",
          "ar": "قضت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo passato",
          "ar": "قضينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete passato",
          "ar": "قضيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno passato",
          "ar": "قضوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Passavo",
          "ar": "كنت بقضي (وقت)"
        },
        {
          "person": "Tu (أنت)",
          "form": "Passavi",
          "ar": "كنت بتقضي (وقت)"
        },
        {
          "person": "Lui (هو)",
          "form": "Passava",
          "ar": "كان بيقضي (وقت)"
        },
        {
          "person": "Lei (هي)",
          "form": "Passava",
          "ar": "كانت بتقضي (وقت)"
        },
        {
          "person": "Noi (نحن)",
          "form": "Passavamo",
          "ar": "كنا بنقضي (وقت)"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Passavate",
          "ar": "كنتوا بتقضيوا (وقت)"
        },
        {
          "person": "Loro (هم)",
          "form": "Passavano",
          "ar": "كانوا بيقضيوا (وقت)"
        }
      ]
    },
    "imperativo": {
      "note": "بيتاخد Avere عادة لما معناه \"يقضي وقت\"، وممكن ياخد Essere لو معناه \"يمر/يعدي\" (زي: il tempo è passato)",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Passa",
          "ar": "اقضي"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Passi",
          "ar": "اقضي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Passiamo",
          "ar": "يلا نقضي"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Passate",
          "ar": "اقضوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Passino",
          "ar": "اقضوا"
        }
      ]
    }
  },
  {
    "it": "Significare",
    "ar": "يعني",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Significo",
        "ar": "بعني"
      },
      {
        "person": "Tu (أنت)",
        "form": "Significhi",
        "ar": "بتعني"
      },
      {
        "person": "Lui (هو)",
        "form": "Significa",
        "ar": "بيعني"
      },
      {
        "person": "Lei (هي)",
        "form": "Significa",
        "ar": "بتعني"
      },
      {
        "person": "Noi (نحن)",
        "form": "Significhiamo",
        "ar": "بنعني"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Significate",
        "ar": "بتعنيوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Significano",
        "ar": "بيعنيوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho significato",
          "ar": "عنيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai significato",
          "ar": "عنيت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha significato",
          "ar": "عنى"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha significato",
          "ar": "عنت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo significato",
          "ar": "عنينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete significato",
          "ar": "عنيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno significato",
          "ar": "عنوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Significavo",
          "ar": "كنت بعني"
        },
        {
          "person": "Tu (أنت)",
          "form": "Significavi",
          "ar": "كنت بتعني"
        },
        {
          "person": "Lui (هو)",
          "form": "Significava",
          "ar": "كان بيعني"
        },
        {
          "person": "Lei (هي)",
          "form": "Significava",
          "ar": "كانت بتعني"
        },
        {
          "person": "Noi (نحن)",
          "form": "Significavamo",
          "ar": "كنا بنعني"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Significavate",
          "ar": "كنتوا بتعنيوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Significavano",
          "ar": "كانوا بيعنيوا"
        }
      ]
    },
    "imperativo": {
      "note": "فعل بيوصف بيتقال بصيغة الغائب (هو/هي) غالبًا (زي: cosa significa؟)، صيغة الأمر نادرة الاستخدام في الحياة اليومية",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Significa",
          "ar": "اعني"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Significhi",
          "ar": "اعني"
        },
        {
          "person": "Noi (نحن)",
          "form": "Significhiamo",
          "ar": "يلا نعني"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Significate",
          "ar": "اعنوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Significhino",
          "ar": "اعنوا"
        }
      ]
    }
  },
  {
    "it": "Sentire",
    "ar": "يسمع / يحس",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Sento",
        "ar": "بسمع"
      },
      {
        "person": "Tu (أنت)",
        "form": "Senti",
        "ar": "بتسمع"
      },
      {
        "person": "Lui (هو)",
        "form": "Sente",
        "ar": "بيسمع"
      },
      {
        "person": "Lei (هي)",
        "form": "Sente",
        "ar": "بتسمع"
      },
      {
        "person": "Noi (نحن)",
        "form": "Sentiamo",
        "ar": "بنسمع"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Sentite",
        "ar": "بتسمعوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Sentono",
        "ar": "بيسمعوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho sentito",
          "ar": "سمعت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai sentito",
          "ar": "سمعت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha sentito",
          "ar": "سمع"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha sentito",
          "ar": "سمعت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo sentito",
          "ar": "سمعنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete sentito",
          "ar": "سمعتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno sentito",
          "ar": "سمعوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sentivo",
          "ar": "كنت بسمع"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sentivi",
          "ar": "كنت بتسمع"
        },
        {
          "person": "Lui (هو)",
          "form": "Sentiva",
          "ar": "كان بيسمع"
        },
        {
          "person": "Lei (هي)",
          "form": "Sentiva",
          "ar": "كانت بتسمع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Sentivamo",
          "ar": "كنا بنسمع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sentivate",
          "ar": "كنتوا بتسمعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sentivano",
          "ar": "كانوا بيسمعوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Senti",
          "ar": "اسمع"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Senta",
          "ar": "اسمع"
        },
        {
          "person": "Noi (نحن)",
          "form": "Sentiamo",
          "ar": "يلا نسمع"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Sentite",
          "ar": "اسمعوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sentano",
          "ar": "اسمعوا"
        }
      ]
    }
  },
  {
    "it": "Conoscere",
    "ar": "يعرف (شخص أو مكان)",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Conosco",
        "ar": "بعرف (شخص أو مكان)"
      },
      {
        "person": "Tu (أنت)",
        "form": "Conosci",
        "ar": "بتعرف (شخص أو مكان)"
      },
      {
        "person": "Lui (هو)",
        "form": "Conosce",
        "ar": "بيعرف (شخص أو مكان)"
      },
      {
        "person": "Lei (هي)",
        "form": "Conosce",
        "ar": "بتعرف (شخص أو مكان)"
      },
      {
        "person": "Noi (نحن)",
        "form": "Conosciamo",
        "ar": "بنعرف (شخص أو مكان)"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Conoscete",
        "ar": "بتعرفوا (شخص أو مكان)"
      },
      {
        "person": "Loro (هم)",
        "form": "Conoscono",
        "ar": "بيعرفوا (شخص أو مكان)"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho conosciuto",
          "ar": "عرفت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai conosciuto",
          "ar": "عرفت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha conosciuto",
          "ar": "عرف"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha conosciuto",
          "ar": "عرفت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo conosciuto",
          "ar": "عرفنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete conosciuto",
          "ar": "عرفتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno conosciuto",
          "ar": "عرفوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Conoscevo",
          "ar": "كنت بعرف (شخص أو مكان)"
        },
        {
          "person": "Tu (أنت)",
          "form": "Conoscevi",
          "ar": "كنت بتعرف (شخص أو مكان)"
        },
        {
          "person": "Lui (هو)",
          "form": "Conosceva",
          "ar": "كان بيعرف (شخص أو مكان)"
        },
        {
          "person": "Lei (هي)",
          "form": "Conosceva",
          "ar": "كانت بتعرف (شخص أو مكان)"
        },
        {
          "person": "Noi (نحن)",
          "form": "Conoscevamo",
          "ar": "كنا بنعرف (شخص أو مكان)"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Conoscevate",
          "ar": "كنتوا بتعرفوا (شخص أو مكان)"
        },
        {
          "person": "Loro (هم)",
          "form": "Conoscevano",
          "ar": "كانوا بيعرفوا (شخص أو مكان)"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Conosci",
          "ar": "اعرف"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Conosca",
          "ar": "اعرف"
        },
        {
          "person": "Noi (نحن)",
          "form": "Conosciamo",
          "ar": "يلا نعرف"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Conoscete",
          "ar": "اعرفوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Conoscano",
          "ar": "اعرفوا"
        }
      ]
    }
  },
  {
    "it": "Dovere",
    "ar": "لازم / يجب أن",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Devo",
        "ar": "لازم"
      },
      {
        "person": "Tu (أنت)",
        "form": "Devi",
        "ar": "لازم"
      },
      {
        "person": "Lui (هو)",
        "form": "Deve",
        "ar": "لازم"
      },
      {
        "person": "Lei (هي)",
        "form": "Deve",
        "ar": "لازم"
      },
      {
        "person": "Noi (نحن)",
        "form": "Dobbiamo",
        "ar": "لازم"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Dovete",
        "ar": "لازم"
      },
      {
        "person": "Loro (هم)",
        "form": "Devono",
        "ar": "لازم"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho dovuto",
          "ar": "كان لازم"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai dovuto",
          "ar": "كان لازم"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha dovuto",
          "ar": "كان لازم"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha dovuto",
          "ar": "كان لازم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo dovuto",
          "ar": "كان لازم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete dovuto",
          "ar": "كان لازم"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno dovuto",
          "ar": "كان لازم"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Dovevo",
          "ar": "كنت لازم"
        },
        {
          "person": "Tu (أنت)",
          "form": "Dovevi",
          "ar": "كنت لازم"
        },
        {
          "person": "Lui (هو)",
          "form": "Doveva",
          "ar": "كان لازم"
        },
        {
          "person": "Lei (هي)",
          "form": "Doveva",
          "ar": "كانت لازم"
        },
        {
          "person": "Noi (نحن)",
          "form": "Dovevamo",
          "ar": "كنا لازم"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Dovevate",
          "ar": "كنتوا لازم"
        },
        {
          "person": "Loro (هم)",
          "form": "Dovevano",
          "ar": "كانوا لازم"
        }
      ]
    },
    "imperativo": {
      "note": "فعل مساعد (modal) غير بيتعملوه في صيوغة الأمر في اللَغة الطبيعية لأن معناه \"لازم\" غير أمر",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Noi (نحن)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Voi (أنتم)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Loro (هم)",
          "form": "—",
          "ar": "—"
        }
      ]
    }
  },
  {
    "it": "Piovere",
    "ar": "تمطر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Piovo",
        "ar": "بمطر"
      },
      {
        "person": "Tu (أنت)",
        "form": "Piovi",
        "ar": "بتمطر"
      },
      {
        "person": "Lui (هو)",
        "form": "Piove",
        "ar": "بيمطر"
      },
      {
        "person": "Lei (هي)",
        "form": "Piove",
        "ar": "بتمطر"
      },
      {
        "person": "Noi (نحن)",
        "form": "Pioviamo",
        "ar": "بنمطر"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Piovete",
        "ar": "بتمطروا"
      },
      {
        "person": "Loro (هم)",
        "form": "Piovono",
        "ar": "بيمطروا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho piovuto",
          "ar": "مطرت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai piovuto",
          "ar": "مطرت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha piovuto",
          "ar": "مطرت"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha piovuto",
          "ar": "مطرت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo piovuto",
          "ar": "مطرت"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete piovuto",
          "ar": "مطرت"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno piovuto",
          "ar": "مطرت"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Piovevo",
          "ar": "كنت بمطر"
        },
        {
          "person": "Tu (أنت)",
          "form": "Piovevi",
          "ar": "كنت بتمطر"
        },
        {
          "person": "Lui (هو)",
          "form": "Pioveva",
          "ar": "كان بيمطر"
        },
        {
          "person": "Lei (هي)",
          "form": "Pioveva",
          "ar": "كانت بتمطر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Piovevamo",
          "ar": "كنا بنمطر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Piovevate",
          "ar": "كنتوا بتمطروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Piovevano",
          "ar": "كانوا بيمطروا"
        }
      ]
    },
    "imperativo": {
      "note": "فعل جوّي غير شخصي (impersonale) — بيتستخدم عمليًا بصيغة الغائب (هو/هي) بس: Piove = بتمطر. باقي الصيغ نظرية/مش مستخدمة في الحياة اليومية",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Noi (نحن)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Voi (أنتم)",
          "form": "—",
          "ar": "—"
        },
        {
          "person": "Loro (هم)",
          "form": "—",
          "ar": "—"
        }
      ]
    }
  },
  {
    "it": "Piacere",
    "ar": "يعجب (شخص)",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Piaccio",
        "ar": "بعجب (شخص)"
      },
      {
        "person": "Tu (أنت)",
        "form": "Piaci",
        "ar": "بتعجب (شخص)"
      },
      {
        "person": "Lui (هو)",
        "form": "Piace",
        "ar": "بيعجب (شخص)"
      },
      {
        "person": "Lei (هي)",
        "form": "Piace",
        "ar": "بتعجب (شخص)"
      },
      {
        "person": "Noi (نحن)",
        "form": "Piacciamo",
        "ar": "بنعجب (شخص)"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Piacete",
        "ar": "بتعجبوا (شخص)"
      },
      {
        "person": "Loro (هم)",
        "form": "Piacciono",
        "ar": "بيعجبوا (شخص)"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": false,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono piaciuto/a",
          "ar": "عجبت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei piaciuto/a",
          "ar": "عجبت"
        },
        {
          "person": "Lui (هو)",
          "form": "È piaciuto",
          "ar": "عجب"
        },
        {
          "person": "Lei (هي)",
          "form": "È piaciuta",
          "ar": "عجبت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo piaciuti/e",
          "ar": "عجبنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete piaciuti/e",
          "ar": "عجبتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono piaciuti/e",
          "ar": "عجبوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Piacevo",
          "ar": "كنت بعجب (شخص)"
        },
        {
          "person": "Tu (أنت)",
          "form": "Piacevi",
          "ar": "كنت بتعجب (شخص)"
        },
        {
          "person": "Lui (هو)",
          "form": "Piaceva",
          "ar": "كان بيعجب (شخص)"
        },
        {
          "person": "Lei (هي)",
          "form": "Piaceva",
          "ar": "كانت بتعجب (شخص)"
        },
        {
          "person": "Noi (نحن)",
          "form": "Piacevamo",
          "ar": "كنا بنعجب (شخص)"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Piacevate",
          "ar": "كنتوا بتعجبوا (شخص)"
        },
        {
          "person": "Loro (هم)",
          "form": "Piacevano",
          "ar": "كانوا بيعجبوا (شخص)"
        }
      ]
    },
    "imperativo": {
      "note": "بيتصرّف بطريقة عكسية عن العربي: الشخص اللي بيعجبه بييجي كمفعول غير مباشر (mi piace = بيعجبني)، مش كفاعل. صيغة الأمر نادرة جدًا عمليًا",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Piaci",
          "ar": "اعجب"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Piaccia",
          "ar": "اعجب"
        },
        {
          "person": "Noi (نحن)",
          "form": "Piacciamo",
          "ar": "يلا نعجب"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Piacete",
          "ar": "اعجبوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Piacciano",
          "ar": "اعجبوا"
        }
      ]
    }
  },
  {
    "it": "Cambiare",
    "ar": "يغيّر",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Cambio",
        "ar": "بغيّر"
      },
      {
        "person": "Tu (أنت)",
        "form": "Cambi",
        "ar": "بتغيّر"
      },
      {
        "person": "Lui (هو)",
        "form": "Cambia",
        "ar": "بيغيّر"
      },
      {
        "person": "Lei (هي)",
        "form": "Cambia",
        "ar": "بتغيّر"
      },
      {
        "person": "Noi (نحن)",
        "form": "Cambiamo",
        "ar": "بنغيّر"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Cambiate",
        "ar": "بتغيّروا"
      },
      {
        "person": "Loro (هم)",
        "form": "Cambiano",
        "ar": "بيغيّروا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho cambiato",
          "ar": "غيرت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai cambiato",
          "ar": "غيرت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha cambiato",
          "ar": "غير"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha cambiato",
          "ar": "غيرت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo cambiato",
          "ar": "غيرنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete cambiato",
          "ar": "غيرتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno cambiato",
          "ar": "غيروا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Cambiavo",
          "ar": "كنت بغيّر"
        },
        {
          "person": "Tu (أنت)",
          "form": "Cambiavi",
          "ar": "كنت بتغيّر"
        },
        {
          "person": "Lui (هو)",
          "form": "Cambiava",
          "ar": "كان بيغيّر"
        },
        {
          "person": "Lei (هي)",
          "form": "Cambiava",
          "ar": "كانت بتغيّر"
        },
        {
          "person": "Noi (نحن)",
          "form": "Cambiavamo",
          "ar": "كنا بنغيّر"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cambiavate",
          "ar": "كنتوا بتغيّروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Cambiavano",
          "ar": "كانوا بيغيّروا"
        }
      ]
    },
    "imperativo": {
      "note": "بيتاخد Avere لما يكون متعدي (يغيّر حاجة)، وممكن ياخد Essere لو معناه \"اتغيّر\" هو نفسه (زي: il tempo è cambiato)",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Cambia",
          "ar": "غير"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Cambi",
          "ar": "غير"
        },
        {
          "person": "Noi (نحن)",
          "form": "Cambiamo",
          "ar": "يلا نغير"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cambiate",
          "ar": "غيروا"
        },
        {
          "person": "Loro (هم)",
          "form": "Cambino",
          "ar": "غيروا"
        }
      ]
    }
  },
  {
    "it": "Bastare",
    "ar": "يكفي",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Basto",
        "ar": "بكفي"
      },
      {
        "person": "Tu (أنت)",
        "form": "Basti",
        "ar": "بتكفي"
      },
      {
        "person": "Lui (هو)",
        "form": "Basta",
        "ar": "بيكفي"
      },
      {
        "person": "Lei (هي)",
        "form": "Basta",
        "ar": "بتكفي"
      },
      {
        "person": "Noi (نحن)",
        "form": "Bastiamo",
        "ar": "بنكفي"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Bastate",
        "ar": "بتكفيوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Bastano",
        "ar": "بيكفيوا"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Sono bastato/a",
          "ar": "كفيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Sei bastato/a",
          "ar": "كفيت"
        },
        {
          "person": "Lui (هو)",
          "form": "È bastato",
          "ar": "كفى"
        },
        {
          "person": "Lei (هي)",
          "form": "È bastata",
          "ar": "كفت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Siamo bastati/e",
          "ar": "كفينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Siete bastati/e",
          "ar": "كفيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Sono bastati/e",
          "ar": "كفوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Bastavo",
          "ar": "كنت بكفي"
        },
        {
          "person": "Tu (أنت)",
          "form": "Bastavi",
          "ar": "كنت بتكفي"
        },
        {
          "person": "Lui (هو)",
          "form": "Bastava",
          "ar": "كان بيكفي"
        },
        {
          "person": "Lei (هي)",
          "form": "Bastava",
          "ar": "كانت بتكفي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Bastavamo",
          "ar": "كنا بنكفي"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Bastavate",
          "ar": "كنتوا بتكفيوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Bastavano",
          "ar": "كانوا بيكفيوا"
        }
      ]
    },
    "imperativo": {
      "note": "غالبًا بيتستخدم بصيغة الغائب (هو/هي) بس زي: Basta! (يكفي! / بس كده!) — دي في الحقيقة صيغة أمر بس بمعنى \"خلاص/كفاية\"",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Basta!",
          "ar": "بس! يكفي"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Basti",
          "ar": "بس! يكفي"
        },
        {
          "person": "Noi (نحن)",
          "form": "Bastiamo",
          "ar": "يلا نوقف"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Bastate",
          "ar": "بس كده يا جماعة"
        },
        {
          "person": "Loro (هم)",
          "form": "Bastino",
          "ar": "بس كده"
        }
      ]
    }
  },
  {
    "it": "Organizzarsi",
    "ar": "ينظم وقته / يرتب أموره",
    "reflexive": true,
    "group": "are",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Mi organizzo",
        "ar": "بنظم وقته"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ti organizzi",
        "ar": "بتنظم وقته"
      },
      {
        "person": "Lui (هو)",
        "form": "Si organizza",
        "ar": "بينظم وقته"
      },
      {
        "person": "Lei (هي)",
        "form": "Si organizza",
        "ar": "بتنظم وقته"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ci organizziamo",
        "ar": "بننظم وقته"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Vi organizzate",
        "ar": "بتنظموا وقته"
      },
      {
        "person": "Loro (هم)",
        "form": "Si organizzano",
        "ar": "بينظموا وقته"
      }
    ],
    "passato": {
      "aux": "essere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi sono organizzato/a",
          "ar": "نظمت وقتي"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti sei organizzato/a",
          "ar": "نظمت وقتك"
        },
        {
          "person": "Lui (هو)",
          "form": "Si è organizzato",
          "ar": "نظم وقته"
        },
        {
          "person": "Lei (هي)",
          "form": "Si è organizzata",
          "ar": "نظمت وقتها"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci siamo organizzati/e",
          "ar": "نظمنا وقتنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi siete organizzati/e",
          "ar": "نظمتوا وقتكوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si sono organizzati/e",
          "ar": "نظموا وقتهم"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Mi organizzavo",
          "ar": "كنت بنظم وقته"
        },
        {
          "person": "Tu (أنت)",
          "form": "Ti organizzavi",
          "ar": "كنت بتنظم وقته"
        },
        {
          "person": "Lui (هو)",
          "form": "Si organizzava",
          "ar": "كان بينظم وقته"
        },
        {
          "person": "Lei (هي)",
          "form": "Si organizzava",
          "ar": "كانت بتنظم وقته"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ci organizzavamo",
          "ar": "كنا بننظم وقته"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Vi organizzavate",
          "ar": "كنتوا بتنظموا وقته"
        },
        {
          "person": "Loro (هم)",
          "form": "Si organizzavano",
          "ar": "كانوا بينظموا وقته"
        }
      ]
    },
    "imperativo": {
      "note": "في الأمر المثبت يلتحق الضمير الانعكاسي بآخر الفعل (Organizzati)، أمّا في صيغة التأدّب Lei فيسبقه (Si organizzi)",
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Organizzati",
          "ar": "نظم وقتك"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Si organizzi",
          "ar": "نظم وقتك"
        },
        {
          "person": "Noi (نحن)",
          "form": "Organizziamoci",
          "ar": "يلا ننظم وقتنا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Organizzatevi",
          "ar": "نظموا وقتكوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Si organizzino",
          "ar": "نظموا وقتهم"
        }
      ]
    }
  },
  {
    "it": "Cenare",
    "ar": "يتعشى",
    "presente": [
      {
        "person": "Io (أنا)",
        "form": "Ceno",
        "ar": "بتعشى"
      },
      {
        "person": "Tu (أنت)",
        "form": "Ceni",
        "ar": "بتتعشى"
      },
      {
        "person": "Lui (هو)",
        "form": "Cena",
        "ar": "بيتعشى"
      },
      {
        "person": "Lei (هي)",
        "form": "Cena",
        "ar": "بتتعشى"
      },
      {
        "person": "Noi (نحن)",
        "form": "Ceniamo",
        "ar": "بنتعشى"
      },
      {
        "person": "Voi (أنتم)",
        "form": "Cenate",
        "ar": "بتتعشىوا"
      },
      {
        "person": "Loro (هم)",
        "form": "Cenano",
        "ar": "بيتعشىوا"
      }
    ],
    "passato": {
      "aux": "avere",
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Ho cenato",
          "ar": "اتعشيت"
        },
        {
          "person": "Tu (أنت)",
          "form": "Hai cenato",
          "ar": "اتعشيت"
        },
        {
          "person": "Lui (هو)",
          "form": "Ha cenato",
          "ar": "اتعشى"
        },
        {
          "person": "Lei (هي)",
          "form": "Ha cenato",
          "ar": "اتعشت"
        },
        {
          "person": "Noi (نحن)",
          "form": "Abbiamo cenato",
          "ar": "اتعشينا"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Avete cenato",
          "ar": "اتعشيتوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Hanno cenato",
          "ar": "اتعشوا"
        }
      ]
    },
    "imperfetto": {
      "regular": true,
      "rows": [
        {
          "person": "Io (أنا)",
          "form": "Cenavo",
          "ar": "كنت بتعشى"
        },
        {
          "person": "Tu (أنت)",
          "form": "Cenavi",
          "ar": "كنت بتتعشى"
        },
        {
          "person": "Lui (هو)",
          "form": "Cenava",
          "ar": "كان بيتعشى"
        },
        {
          "person": "Lei (هي)",
          "form": "Cenava",
          "ar": "كانت بتتعشى"
        },
        {
          "person": "Noi (نحن)",
          "form": "Cenavamo",
          "ar": "كنا بنتعشى"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cenavate",
          "ar": "كنتوا بتتعشىوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Cenavano",
          "ar": "كانوا بيتعشىوا"
        }
      ]
    },
    "imperativo": {
      "note": null,
      "rows": [
        {
          "person": "Tu (أنت)",
          "form": "Cena",
          "ar": "اتعشى"
        },
        {
          "person": "Lei (رسمي - هو/هي)",
          "form": "Ceni",
          "ar": "اتعشى"
        },
        {
          "person": "Noi (نحن)",
          "form": "Ceniamo",
          "ar": "يلا نتعشى"
        },
        {
          "person": "Voi (أنتم)",
          "form": "Cenate",
          "ar": "اتعشوا"
        },
        {
          "person": "Loro (هم)",
          "form": "Cenino",
          "ar": "اتعشوا"
        }
      ]
    }
  }
];
