export type QuizAnswers = Record<string, string>;

export type QuizOption = {
  label: string;
  next?: string; // nøgle på næste node
  result?: string | ((answers: QuizAnswers) => string); // fast resultat eller funktion
};

export type QuizNode = {
  question?: string; // hvis mangler => node er et resultat (eller ukendt)
  options?: QuizOption[];
};

// Indeks-signatur: QUIZ kan indeholde vilkårlige nøgler med QuizNode-værdier
export const QUIZ: Record<string, QuizNode> = {
  dyneType: {
    question: "Er du til enkelt- eller dobbeltdyne?",
    options: [
      { label: "Enkel", next: "enkelt" },
      { label: "Dobbel", next: "dobbelt" }
    ]
  },
  enkelt: { //den burde jo så sortere efter det? ellers giver det vel ikke mening?
    question: "Ønsker du ekstra længde på din dyne?",
    options: [
      { label: "Ja", next: "temperatur" },
      { label: "Nej", next: "korttemp" }
    ]
  },
  dobbelt: { //er det ikke lidt det samme som den ovenfor?
    question: "Ønsker du ekstra bredde på din dobbeltdyne?",
    options: [
      { label: "Ja", result: "tusind-ekstra-varm-240-220" },
      { label: "Nej", next: "dobbeltemp" }
    ]
  },
  temperatur: {
    question: "Hvor ofte har du det koldt, når du sover?",
    options: [
      { label: "Sjældent", next: "koldeffekt" },
      { label: "Af og til", next: "fyldvarm" },
      { label: "Ofte", next: "kvalitet" }
    ]
  },
    koldeffekt: {
    question: "Skal din dyne have en kølende effekt?",
    options: [
      { label: "Ja", result: "erantis-135-220" },
      { label: "Nej", next: "fyldsval" }
    ]
},
    fyldsval: { 
    question: "Hvordan foretrækker du din dyne?",
    options: [
      { label: "Let og blød", result: "tusind-sval-135-220" },
      { label: "Tyngde og struktur", result: "anemone-sval-135-220" }
    ]
},
    fyldvarm: {
    question: "Hvordan foretrækker du din dyne?",
    options: [
      { label: "Let og blød", result: "tusind-varm-135-220" },
      { label: "Tyngde og struktur", result: "anemone-varm-135-220" }
    ]
},
    kvalitet: {
    question: "Hvad vægter du højest?",
    options: [
      { label: "Eksklusiv", result: "orkide-135-220" },
      { label: "God kvalitet og tilgængelig pris", result: "anemone-varm-135-220" }
    ]
},
    korttemp: {
    question: "Hvor ofte har du det koldt, når du sover?",
    options: [
      { label: "Sjældent", next: "korteffekt" },
      { label: "Af og til", next: "fyldvarmkort" },
      { label: "Ofte", next: "kvalitetkort" }
    ]
},
    korteffekt: {
    question: "Skal din dyne have en kølende effekt?",
    options: [
      { label: "Ja", result: "erantis-135-200" },
      { label: "Nej", next: "fyldsvalkort" }
    ]
},
    fyldsvalkort: {
    question: "Hvordan foretrækker du din dyne?",
    options: [
      { label: "Let og blød", result: "tusind-sval-135-200" },
      { label: "Tyngde og struktur", result: "anemone-sval-135-20" }
    ]
},
    fyldvarmkort: {
    question: "Hvordan foretrækker du din dyne?",
    options: [
      { label: "Let og blød", result: "tusind-varm-135-200" },
      { label: "Tyngde og struktur", result: "anemone-varm-135-200" }
    ]
},
    kvalitetkort: {
    question: "Hvad vægter du højest?",
    options: [
      { label: "Eksklusiv", result: "orkide-135-20" },
      { label: "God kvalitet og tilgængelig pris", result: "tusind-ekstra-varm-135-200" }
    ]
},
  dobbeltemp: {
    question: "Hvor ofte har du det koldt, når du sover?",
    options: [
      { label: "Sjældent", result: "tusind-sval-200-220" },
      { label: "Af og til", next: "dobbelkval" },
      { label: "Ofte", result: "orkide-200-220" }
    ]
  },
      dobbelkval: {
    question: "Hvad vægter du højest?",
    options: [
      { label: "Eksklusiv kvalitet", result: "tusind-varm-200-220" },
      { label: "En kombination mellem kvalitet og en tilgængelig pris", result: "anemone-varm-200-220" }
    ]
}
};
