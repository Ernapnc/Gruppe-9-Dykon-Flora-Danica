# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```



# Dykon Dynevælger – Prototype

Dette projekt er en interaktiv prototype for Dykon, der hjælper brugere med at vælge den dyne, der passer bedst til deres behov.

##  Beskrivelse
- Guidet valgforløb: Brugeren svarer på spørgsmål om størrelse, varmegrad og fyldtype.
- Produktvisning: Viser alle dyner fra Dykons sortiment i et overskueligt format.
- Sammenligning: Brugeren kan sammenligne to dyner side om side.
- Data: Datasættet ligger i `src/data/dyner.json`.

##  Kom godt i gang
cd "C:\Users\Sabin\Desktop\dyne-projekt\dykon-prototype"
1. Installer:
npm install
2. Start server:
npm run dev
3. Åbn browseren:
http://localhost:..../

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

### Eksempel på en dyne i JSON
{
  "id": "orkide-135-200",
  "name": "Orkidé Edderdunsdyne",
  "fillType": "Edderdun",
  "warmth": "Ekstra varm",
  "dimensions": "135x200 cm",
  "fillWeight": 550 g,
  "season": "vinter",
  "garanti": "15 år"
}
