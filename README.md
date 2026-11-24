# Ayoub Hilali | Portfolio v4

A bilingual English/French developer portfolio with a Espresso Signature identity: cinematic dark opening, alternating project chapters, compact interactive skills and an ivory contact section.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

## Edit

- `src/App.tsx`: page layout, project links and interactions.
- `src/content.ts`: English and French copy.
- `src/Skills.tsx`: skills explorer and language cards.
- `src/style.css`: responsive styling and reduced-motion support.
- `src/photos/`: portrait, real project screenshots and company logos.

English is the default. The language switch translates the whole page. The skills explorer supports keyboard navigation. Project details use native dialogs and close with Escape. Reduced-motion preferences disable entrance, scroll and hover motion.

## Content notes

Rentivo is in development. Its screenshots contain fictional demo-agency data. Orange experience is attributed through Olf'active, an Orange Maroc partner. Master's education is described as studies, not a confirmed awarded degree.

The standalone source uses local system-font fallbacks. The review preview has its own font styling, so text wrapping may vary slightly.

Orange logo source: https://www.orange.ma/
Carly footwear logo source: https://borjfez.com/magasins/carly/

## Deployment

GitHub Pages serves the production build from `docs/` on the main branch. To update:

```sh
npm ci
npm run build
rm -rf docs && cp -R dist docs
touch docs/.nojekyll
```

Commit the source and `docs/` together.

## CV and phone

The CV buttons serve the English PDF in English and the original French PDF in French. PDFs are in `src/cv/`. The English CV is a faithful translation with the supplied LinkedIn URL and master's education described as studies. The French PDF is the original supplied document, unchanged. Contact phone: 0620 951 882, linked internationally as +212 620 951 882.
