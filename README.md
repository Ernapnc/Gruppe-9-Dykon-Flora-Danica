
# Dykon Dynevælger – Prototype

Dette projekt er en interaktiv prototype for Dykon - Flora Danica, der gennem et interaktivt spørgeskema hjælper brugere med at vælge den dyne, der passer bedst til deres behov.

##  Beskrivelse
- Guidet valgforløb: Brugeren svarer på spørgsmål om størrelse, varmegrad og fyldtype mm.
- Resultat: en dybe bliver præsenteret til burgere, alt afhængig af deres svar på spørgsmålene. 
  Dette bliver præsenteret med information og billede.
- Produktvisning: Viser alle dyner fra Dykons sortiment i et overskueligt format.
- Sammenligning: Brugeren kan sammenligne to dyner side om side.
- Data: Datasættet ligger i `src/data/dyner.json`.

##  Kom godt i gang
1. Åben cmd eller powershell og naviger ind på mappen:
cd "C:\Users\Sabin\Desktop\dyne-projekt\dykon-prototype"
2. For at installere webserveren skal du derefter indtaste:
npm install
eller 
npm i
3. For at starte serveren op skal du derefter indtaste 
npm run dev
3. Dette vil åbne en local host, som du kan åbne i browseren. Den vil hedde noget med:
http://localhost:..../
4. Vær opmærksom på at åbne filen med UFT-8, da den indeholder danske tegn; æ, ø, å. 

## Features/ How to


## Opbygning af filer
Filerne er strukturerede i mapper, hvoraf alle vores opbyggede kodefiler ligger under "src"
- "src" indeholder 2 mapper; components og data, samt løse filer. Filen App.tsx er vores færdige produkt. 
- Den kode App.tsx er baseret på kan findes under mappen components. 
    - Mappen består af yderligere 5 mapper; "atoms", m"olecules", "organisms", "pages" og "templates". 
    - Her skal det forståes linært, da organisms er bygget af molecules, og molecules er bygget af atoms. 
- Mappen "data" indeholder 3 filer; vores datasæt som JSON fil; "dyner.json", typeregistrering af datasættet "types.ts", og vores spørgsmål brugt til appen. 

I mappen "public" findes alle billeder brugt i projektet i jpg filer. 

Udenfor "src" er der løse filer, som har betydning for opbygningen, configureringen og udførslen af filerne. 
- Her findes også README filen. 
- I tsconfig.json findes instillingerne for konfigureringen af TypeScript til JavaScript. 
- I .gitignore vises instillingerne for, hvilke filer git ikke skal tracke. 
- I index.html har vi roden af al vores kode. Den indeholder vores root element. 
- I package.json findes helt grundlæggende information om projektet.

## Accesibility considerations




## Datasæt
Alle dyner ligger i filen:
src/data/dyner.json

i filen indeholder alle dyner:
- id: unik id for hver dyne
- name: navnet på dynen
- fillType: fyld type, om det er fjer eller dun, og hvilke dun der er tale om.
- warmth: varmegrad (sval, varm eller ekstra varm)
- dimensions: hvilken størrelse dynen er.
- fillWeight: Fyld vægten i gram.
- season: hvilken årstid dynen passer til (sommer, vinter eller helårs).
- garanti: hvor mange års garanti der er på dynen.

## Eksempel på en dyne i JSON
``{
  "id": "orkide-135-200",
  "name": "Orkidé Edderdunsdyne",
  "fillType": "Edderdun",
  "warmth": "Ekstra varm",
  "dimensions": "135x200 cm",
  "fillWeight": 550 g,
  "season": "vinter",
  "garanti": "15 år"
}``

# Limitations
Projektet har flere begrænsninger, da der ikke er direkte adgang til produkterne og deres præcise indkodning i selve virksomheden. Der er desuden også begrænsninger ved ikke at have adgang til forhandleren og deres system, da man ellers kunne sætte en dynamisk prisudregning på, som skiftede med forhandlerens ændringer. 
Man får ikke adgang til et direkte køb efter man får resultatet, der er derfor mangel på en CTA, som kunne forbedre oplevelsen for brugeren. 

## Fremtidig udvikling
Med videre udvikling, samt yderligere samarbejdspartnere, kunne projektet udvides til eventuelt at medtage andre dyne producenter og flere produkter, eller ved at tilkoble en forbindelse til online forretninger, som sælger produkterne, kunne man udlægge prisklasser, rabatter, bestilling mm. Dette er afhængigt af, hvorhen der ønskes at tage projektet. 